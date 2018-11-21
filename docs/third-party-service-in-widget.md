# Third Party Service in Widget

After integrating the RingCentral Embeddable to your application, you can also integrate your own service into the widget, such as show contact data from your application or show a button named with your application.

This document show how the widget can interact with your application deeply.

## Register your service

Find the widget iframe and use `postMessage` to register:

```js
document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
  type: 'rc-adapter-register-third-party-service',
  service: {
    name: 'TestService'
  }
}, '*');
```

## Add a conference invite button with your service

First you need to pass `conferenceInvitePath` and `conferenceInviteTitle` when you register service.

```js
document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
  type: 'rc-adapter-register-third-party-service',
  service: {
    name: 'TestService', // service name
    conferenceInvitePath: '/conference/invite',
    conferenceInviteTitle: 'Invite with TestService',
  }
}, '*');
```

After registered, you can get a `Invite with TestService` in conference invite page.

![image](https://user-images.githubusercontent.com/7036536/42258529-cb5684e8-7f8e-11e8-88e8-0b251a102e0e.png)

Add a message event to response conference invite button event:

```js
window.addEventListener('message', function (e) {
  var data = e.data;
  if (data && data.type === 'rc-post-message-request') {
    if (data.path === '/conference/invite') {
      // add your codes here to handle conference invite data
      console.log(data);
      // response to widget
      document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
        type: 'rc-post-message-response',
        responseId: data.requestId,
        response: { data: 'ok' },
      }, '*');
    }
  }
});
```

## Show contacts from your application

### Show contacts on Contacts page in widget

First you need to pass `contactsPath` when you register service:

```js
document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
  type: 'rc-adapter-register-third-party-service',
  service: {
    name: 'TestService',
    contactsPath: '/contacts'
  }
}, '*');
```

Add a message event to response contacts list event:

```js
window.addEventListener('message', function (e) {
  var data = e.data;
  if (data && data.type === 'rc-post-message-request') {
    if (data.path === '/contacts') {
      console.log(data);
      // response to widget
      // contacts data from third party service
      const contacts = [{
        id: '123456', // id to identify third party contact
        name: 'TestService Name', // contact name
        type: 'TestService', // need to same as service name
        phoneNumbers: [{
          phoneNumber: '+1234567890',
          phoneType: 'directPhone',
        }],
        emails: ['test@email.com']
      }];
      // pass nextPage number when there are more than one page data, widget will repeat same request with nextPage increased
      document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
        type: 'rc-post-message-response',
        responseId: data.requestId,
        response: {
          data: contacts,
          nextPage: null
        },
      }, '*');
    }
  }
});
```

Data from `contactsPath` will be showed in contacts page in widget. If you provide `nextPage` for `contactsPath` response, widget will repeat request with `page="${nextPage}"` to get next page contacts data.

![image](https://user-images.githubusercontent.com/7036536/42258572-f6a8050e-7f8e-11e8-8950-bb9efa8e0918.png)

### Show contacts search result on Dialer receiver input

You must want to show related contacts result when user typing in callee input area. First you need to pass `contactSearchPath` when you register service:

```js
document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
  type: 'rc-adapter-register-third-party-service',
  service: {
    name: 'TestService',
    contactSearchPath: '/contacts/search'
  }
}, '*');
```

Add a message event to response contacts search event:

```js
window.addEventListener('message', function (e) {
  var data = e.data;
  if (data && data.type === 'rc-post-message-request') {
    if (data.path === '/contacts/search') {
      console.log(data);
      const searchedContacts = [{
        id: '123456', // id to identify third party contact
        name: 'TestService Name',
        type: 'TestService', // need to same as service name
        phoneNumbers: [{
          phoneNumber: '+1234567890',
          phoneType: 'directPhone',
        }]
      }];
      document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
        type: 'rc-post-message-response',
        responseId: data.requestId,
        response: {
          data: searchedContacts
        },
      }, '*');
    }
  }
});
```

![image](https://user-images.githubusercontent.com/7036536/48828521-ec54be00-edaa-11e8-8b49-d76412e173bd.jpeg)

### Show contacts matcher result on calls history and incoming call page:

In widget, we use contact matcher to match phone number to contact in calls page or incoming page. First you need to pass `contactMatchPath` when you register service:

```js
document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
  type: 'rc-adapter-register-third-party-service',
  service: {
    name: 'TestService',
    contactMatchPath: '/contacts/match'
  }
}, '*');
```

Add a message event to response contacts matcher event:

```js
window.addEventListener('message', function (e) {
  var data = e.data;
  if (data && data.type === 'rc-post-message-request') {
    if (data.path === '/contacts/match') {
      console.log(data); // include phone number array that need to match
      const matchedContacts = {
        '+12165325078': [
          {
            id: '123456', // id to identify third party contact
            type: 'TestService', // need to same as service name
            name: 'TestService 1',
            phoneNumbers: [{
              phoneNumber: '+12165325078',
              phoneType: 'directPhone',
            }]
          }
        ]
      };
      // return matched contact object with phone number as key
      document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
        type: 'rc-post-message-response',
        responseId: data.requestId,
        response: {
          data: matchedContacts
        },
      }, '*');
    }
  }
});
```

![incoming](https://user-images.githubusercontent.com/7036536/48829168-9bde6000-edac-11e8-9cd0-01b0dd65942b.jpeg)


## Show contact's activities from your application

First you need to pass `activitiesPath` and `activityPath` when you register service.

```js
document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
  type: 'rc-adapter-register-third-party-service',
  service: {
    name: 'TestService',
    activitiesPath: '/activities',
    activityPath: '/activity'
  }
}, '*');
```

Add a message event to response activities query event:

```js
window.addEventListener('message', function (e) {
  var data = e.data;
  if (data && data.type === 'rc-post-message-request') {
    if (data.path === '/activities') {
      const contact = data;
      console.log(contact);
      const activities = [{
        id: '123',
        subject: 'Title',
        time: 1528854702472
      }];
      // response to widget
      document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
        type: 'rc-post-message-response',
        responseId: data.requestId,
        response: { data: activities },
      }, '*');
    }
    if (data.path === '/activity') {
      const activity = data;
      // handle activity here
      console.log(activity);
      // response to widget
      document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
        type: 'rc-post-message-response',
        responseId: data.requestId,
        response: { data: 'ok' },
      }, '*');
    }
  }
});
```

Data from `activitiesPath` will be showed in contact details page in the widget. Event from `activityPath` is triggered when user click activity item in the widget.

![image](https://user-images.githubusercontent.com/7036536/42258605-2ba93d40-7f8f-11e8-8f4c-c14a397d343e.png)

## Add call logger button in calls page

First you need to pass `callLoggerPath` and `callLoggerTitle` when you register service.

```js
document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
  type: 'rc-adapter-register-third-party-service',
  service: {
    name: 'TestService',
    callLoggerPath: '/callLogger',
    callLoggerTitle: 'Log to TestService'
  }
}, '*');
```

After registered, you can get a `Log to TestService` in calls page, and `Auto Log` setting in setting page

![image](https://user-images.githubusercontent.com/7036536/42258648-641a6384-7f8f-11e8-9b4b-9ef83edffec6.png)

Add a message event to response call logger button event:

```js
window.addEventListener('message', function (e) {
  var data = e.data;
  if (data && data.type === 'rc-post-message-request') {
    if (data.path === '/callLogger') {
      // add your codes here to log call to your service
      console.log(data);
      // response to widget
      document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
        type: 'rc-post-message-response',
        responseId: data.requestId,
        response: { data: 'ok' },
      }, '*');
    }
  }
});
```

## Add third party authorization button

For some CRM API, they requires user to authorize firstly. This feature allows developer to add a third party authorization button and sync status into widget.

First you need to pass `authorizationPath`, `authorizedTitle`, `unauthorizedTitle` and `authorized` when you register service.

```js
document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
  type: 'rc-adapter-register-third-party-service',
  service: {
    name: 'TestService',
    authorizationPath: '/authorize',
    authorizedTitle: 'Unauthorize',
    unauthorizedTitle: 'Authorize',
    authorized: false
  }
}, '*');
```

After registered, you can get a `TestService authorization button` in setting page:

![image](https://user-images.githubusercontent.com/7036536/45734172-13a9d600-bc16-11e8-890f-63d850e017ce.jpg)

Add a message event to response authorization button event:

```js
window.addEventListener('message', function (e) {
  var data = e.data;
  if (data && data.type === 'rc-post-message-request') {
    if (data.path === '/authorize') {
      // add your codes here to handle third party authorization
      console.log(data);
      // response to widget
      document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
        type: 'rc-post-message-response',
        responseId: data.requestId,
        response: { data: 'ok' },
      }, '*');
    }
  }
});
```

Update authorization status in widget:

```js
document.querySelector("#rc-widget-adapter-frame").contentWindow.postMessage({
  type: 'rc-adapter-update-authorization-status',
  authorized: true,
}, '*');
```

**Notice:** If you register authorization service into widget, upper contacts related service will works only after status changed to authorized.
