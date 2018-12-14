/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3998);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(281)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(155)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(56);
var dPs = __webpack_require__(283);
var enumBugKeys = __webpack_require__(133);
var IE_PROTO = __webpack_require__(131)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(167)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(234).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _getOwnPropertyDescriptor = __webpack_require__(27);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

  if (desc === undefined) {
    var parent = (0, _getPrototypeOf2.default)(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ 116:
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _map = __webpack_require__(81);

var _map2 = _interopRequireDefault(_map);

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

exports.prefixEnum = prefixEnum;

var _HashMap2 = __webpack_require__(74);

var _HashMap3 = _interopRequireDefault(_HashMap2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * @class
 * @description helper class for creating redux action definition maps
 */

var Enum = function (_HashMap) {
  (0, _inherits3.default)(Enum, _HashMap);

  /**
   * @constructor
   * @param {String[]} actions - list of action strings
   * @extends HashMap
   */
  function Enum() {
    var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    (0, _classCallCheck3.default)(this, Enum);

    var definition = {};
    values.forEach(function (value) {
      definition[value] = prefix !== '' ? prefix + '-' + value : value;
    });
    return (0, _possibleConstructorReturn3.default)(this, (Enum.__proto__ || (0, _getPrototypeOf2.default)(Enum)).call(this, definition));
  }

  return Enum;
}(_HashMap3.default);

exports.default = Enum;

var prefixCache = new _map2.default();

/**
 * @function
 * @description helper function to return a prefixed action definition maps
 */
function prefixEnum(_ref) {
  var enumMap = _ref.enumMap,
      prefix = _ref.prefix,
      _ref$base = _ref.base,
      base = _ref$base === undefined ? enumMap : _ref$base;

  if (!prefix || prefix === '') return base;

  if (!prefixCache.has(prefix)) {
    prefixCache.set(prefix, new _map2.default());
  }

  var cache = prefixCache.get(prefix);

  if (!cache.has(base)) {
    var definition = {};
    for (var type in base) {
      /* istanbul ignore else */
      if (hasOwnProperty.call(base, type)) {
        definition[type] = prefix + '-' + base[type];
      }
    }
    cache.set(base, new _HashMap3.default(definition));
  }
  return cache.get(base);
}
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 126:
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(51);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 128:
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(130);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),

/***/ 130:
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(132)('keys');
var uid = __webpack_require__(93);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(39);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),

/***/ 133:
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ 134:
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var punycode = __webpack_require__(212);
var util = __webpack_require__(213);

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = __webpack_require__(168);

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};


/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(284);
var global = __webpack_require__(39);
var hide = __webpack_require__(55);
var Iterators = __webpack_require__(84);
var TO_STRING_TAG = __webpack_require__(37)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(34);
var core = __webpack_require__(26);
var fails = __webpack_require__(63);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(37);


/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(93)('meta');
var isObject = __webpack_require__(51);
var has = __webpack_require__(59);
var setDesc = __webpack_require__(44).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(63)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(39);
var core = __webpack_require__(26);
var LIBRARY = __webpack_require__(116);
var wksExt = __webpack_require__(138);
var defineProperty = __webpack_require__(44).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ 153:
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(115);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(116);
var $export = __webpack_require__(34);
var redefine = __webpack_require__(184);
var hide = __webpack_require__(55);
var has = __webpack_require__(59);
var Iterators = __webpack_require__(84);
var $iterCreate = __webpack_require__(282);
var setToStringTag = __webpack_require__(94);
var getPrototypeOf = __webpack_require__(185);
var ITERATOR = __webpack_require__(37)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(73);
var call = __webpack_require__(286);
var isArrayIter = __webpack_require__(287);
var anObject = __webpack_require__(56);
var toLength = __webpack_require__(129);
var getIterFn = __webpack_require__(236);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(88);
var createDesc = __webpack_require__(83);
var toIObject = __webpack_require__(60);
var toPrimitive = __webpack_require__(127);
var has = __webpack_require__(59);
var IE8_DOM_DEFINE = __webpack_require__(182);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(49) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(51);
var document = __webpack_require__(39).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(214);
exports.encode = exports.stringify = __webpack_require__(215);


/***/ }),

/***/ 169:
/***/ (function(module, exports) {



/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(456), __esModule: true };

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(49) && !__webpack_require__(63)(function () {
  return Object.defineProperty(__webpack_require__(167)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(59);
var toIObject = __webpack_require__(60);
var arrayIndexOf = __webpack_require__(277)(false);
var IE_PROTO = __webpack_require__(131)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(55);


/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(59);
var toObject = __webpack_require__(79);
var IE_PROTO = __webpack_require__(131)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(292), __esModule: true };

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(183);
var hiddenKeys = __webpack_require__(133).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = debounce;
/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 *
 * @param {Function} func - target function
 * @param {Number} threshold - execution threshold
 * @param {Boolean} immediate - trigger on leading edge
 * @return {Function}
 */
function debounce(func) {
  var threshold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (typeof func !== 'function') {
    throw new Error('First argument of debounce function should be a function');
  }
  var timer = null;
  return function debounced() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var context = this;
    var callNow = immediate && !timer;
    var later = function later() {
      timer = null;
      if (!immediate) func.apply(context, args);
    };
    clearTimeout(timer);
    timer = setTimeout(later, threshold);
    if (callNow) func.apply(context, args);
  };
}
//# sourceMappingURL=debounce.js.map


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(45);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(170);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(448), __esModule: true };

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports = typeof exports == 'object' && exports &&
		!exports.nodeType && exports;
	var freeModule = typeof module == 'object' && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return punycode;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (freeExports && freeModule) {
		if (module.exports == freeExports) {
			// in Node.js, io.js, or RingoJS v0.8.0+
			freeModule.exports = punycode;
		} else {
			// in Narwhal or RingoJS v0.7.0-
			for (key in punycode) {
				punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
			}
		}
	} else {
		// in Rhino or a web browser
		root.punycode = punycode;
	}

}(this));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(126)(module), __webpack_require__(42)))

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};


/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ 216:
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(115);
var TAG = __webpack_require__(37)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(115);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(274), __esModule: true };

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isNan = __webpack_require__(399);

var _isNan2 = _interopRequireDefault(_isNan);

exports.default = formatDuration;

var _padLeft = __webpack_require__(526);

var _padLeft2 = _interopRequireDefault(_padLeft);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function formatDuration(duration) {
  if ((0, _isNan2.default)(duration)) {
    return '--:--';
  }
  var intDuration = typeof duration === 'number' ? Math.round(duration) : parseInt(duration, 10);

  var seconds = (0, _padLeft2.default)(intDuration % 60, '0', 2);
  var minutes = (0, _padLeft2.default)(Math.floor(intDuration / 60) % 60, '0', 2);
  var hours = Math.floor(intDuration / 3600) % 24;

  return '' + (hours > 0 ? (0, _padLeft2.default)(hours, '0', 2) + ':' : '') + minutes + ':' + seconds;
}
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = 'rc-widget';

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(435);
var parse = __webpack_require__(436);
var formats = __webpack_require__(280);

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(39).document;
module.exports = document && document.documentElement;


/***/ }),

/***/ 235:
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(217);
var ITERATOR = __webpack_require__(37)('iterator');
var Iterators = __webpack_require__(84);
module.exports = __webpack_require__(26).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(55);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(51);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ 26:
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(460), __esModule: true };

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(275);
module.exports = __webpack_require__(26).Object.assign;


/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(34);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(276) });


/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(78);
var gOPS = __webpack_require__(134);
var pIE = __webpack_require__(88);
var toObject = __webpack_require__(79);
var IObject = __webpack_require__(154);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(63)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(60);
var toLength = __webpack_require__(129);
var toAbsoluteIndex = __webpack_require__(278);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(130);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    var obj;

    while (queue.length) {
        var item = queue.pop();
        obj = item.obj[item.prop];

        if (Array.isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }

    return obj;
};

exports.arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

exports.merge = function merge(target, source, options) {
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (Array.isArray(target)) {
            target.push(source);
        } else if (typeof target === 'object') {
            if (options.plainObjects || options.allowPrototypes || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (Array.isArray(target) && !Array.isArray(source)) {
        mergeTarget = exports.arrayToObject(target, options);
    }

    if (Array.isArray(target) && Array.isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                if (target[i] && typeof target[i] === 'object') {
                    target[i] = exports.merge(target[i], item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = exports.merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

exports.assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

exports.decode = function (str) {
    try {
        return decodeURIComponent(str.replace(/\+/g, ' '));
    } catch (e) {
        return str;
    }
};

exports.encode = function encode(str) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = typeof str === 'string' ? str : String(str);

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

exports.compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    return compactQueue(queue);
};

exports.isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

exports.isBuffer = function isBuffer(obj) {
    if (obj === null || typeof obj === 'undefined') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};


/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

module.exports = {
    'default': 'RFC3986',
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return value;
        }
    },
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};


/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(130);
var defined = __webpack_require__(128);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(106);
var descriptor = __webpack_require__(83);
var setToStringTag = __webpack_require__(94);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(55)(IteratorPrototype, __webpack_require__(37)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(44);
var anObject = __webpack_require__(56);
var getKeys = __webpack_require__(78);

module.exports = __webpack_require__(49) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(285);
var step = __webpack_require__(216);
var Iterators = __webpack_require__(84);
var toIObject = __webpack_require__(60);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(155)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ 285:
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(56);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(84);
var ITERATOR = __webpack_require__(37)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(289);
module.exports = __webpack_require__(26).Object.getPrototypeOf;


/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(79);
var $getPrototypeOf = __webpack_require__(185);

__webpack_require__(137)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(291), __esModule: true };

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(105);
__webpack_require__(136);
module.exports = __webpack_require__(138).f('iterator');


/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(293);
__webpack_require__(169);
__webpack_require__(296);
__webpack_require__(297);
module.exports = __webpack_require__(26).Symbol;


/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(39);
var has = __webpack_require__(59);
var DESCRIPTORS = __webpack_require__(49);
var $export = __webpack_require__(34);
var redefine = __webpack_require__(184);
var META = __webpack_require__(139).KEY;
var $fails = __webpack_require__(63);
var shared = __webpack_require__(132);
var setToStringTag = __webpack_require__(94);
var uid = __webpack_require__(93);
var wks = __webpack_require__(37);
var wksExt = __webpack_require__(138);
var wksDefine = __webpack_require__(140);
var enumKeys = __webpack_require__(294);
var isArray = __webpack_require__(218);
var anObject = __webpack_require__(56);
var toIObject = __webpack_require__(60);
var toPrimitive = __webpack_require__(127);
var createDesc = __webpack_require__(83);
var _create = __webpack_require__(106);
var gOPNExt = __webpack_require__(295);
var $GOPD = __webpack_require__(157);
var $DP = __webpack_require__(44);
var $keys = __webpack_require__(78);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(187).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(88).f = $propertyIsEnumerable;
  __webpack_require__(134).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(116)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    replacer = args[1];
    if (typeof replacer == 'function') $replacer = replacer;
    if ($replacer || !isArray(replacer)) replacer = function (key, value) {
      if ($replacer) value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(55)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(78);
var gOPS = __webpack_require__(134);
var pIE = __webpack_require__(88);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(60);
var gOPN = __webpack_require__(187).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(140)('asyncIterator');


/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(140)('observable');


/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(299), __esModule: true };

/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(300);
module.exports = __webpack_require__(26).Object.setPrototypeOf;


/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(80);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(34);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(301).set });


/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(51);
var anObject = __webpack_require__(56);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(73)(Function.call, __webpack_require__(157).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(303), __esModule: true };

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(304);
var $Object = __webpack_require__(26).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(34);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(106) });


/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Enum = __webpack_require__(12);

var _Enum2 = _interopRequireDefault(_Enum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _Enum2.default(['syncClosed', 'syncMinimized', 'syncSize', 'syncPosition', 'pushPresence', 'pushAdapterState', 'pushLocale', 'presenceClicked', 'clickToDial', 'clickToSms', 'pushRingState', 'pushCalls', 'pushOnCurrentCallPath', 'pushOnAllCallsPath', 'navigateToCurrentCall', 'navigateToViewCalls']);
//# sourceMappingURL=baseMessageTypes.js.map


/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ensureExist;
function ensureExist(module, moduleName) {
  if (!module) {
    throw new Error("'" + moduleName + "' is a required dependency for '" + this.constructor.name + "'");
  }
  return module;
}
//# sourceMappingURL=ensureExist.js.map


/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(39);
var core = __webpack_require__(26);
var ctx = __webpack_require__(73);
var hide = __webpack_require__(55);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(6);

var _extends3 = _interopRequireDefault(_extends2);

exports.default = parseCallbackUri;

var _url = __webpack_require__(135);

var _url2 = _interopRequireDefault(_url);

var _qs = __webpack_require__(233);

var _qs2 = _interopRequireDefault(_qs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function parseCallbackUri(callbackUri) {
  var _url$parse = _url2.default.parse(callbackUri, true),
      query = _url$parse.query,
      hash = _url$parse.hash;

  var hashObject = hash ? _qs2.default.parse(hash.replace(/^#/, '')) : {};
  if (query.error) {
    var error = new Error(query.error);
    for (var key in query) {
      if (Object.prototype.hasOwnProperty.call(query, key)) {
        error[key] = query[key];
      }
    }
    throw error;
  }

  return (0, _extends3.default)({}, query, hashObject);
}

/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(39);
var core = __webpack_require__(26);
var dP = __webpack_require__(44);
var DESCRIPTORS = __webpack_require__(49);
var SPECIES = __webpack_require__(37)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(37)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(44).f;
var create = __webpack_require__(106);
var redefineAll = __webpack_require__(237);
var ctx = __webpack_require__(73);
var anInstance = __webpack_require__(235);
var forOf = __webpack_require__(156);
var $iterDefine = __webpack_require__(155);
var step = __webpack_require__(216);
var setSpecies = __webpack_require__(357);
var DESCRIPTORS = __webpack_require__(49);
var fastKey = __webpack_require__(139).fastKey;
var validate = __webpack_require__(238);
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(39);
var $export = __webpack_require__(34);
var meta = __webpack_require__(139);
var fails = __webpack_require__(63);
var hide = __webpack_require__(55);
var redefineAll = __webpack_require__(237);
var forOf = __webpack_require__(156);
var anInstance = __webpack_require__(235);
var isObject = __webpack_require__(51);
var setToStringTag = __webpack_require__(94);
var dP = __webpack_require__(44).f;
var each = __webpack_require__(444)(0);
var DESCRIPTORS = __webpack_require__(49);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(217);
var from = __webpack_require__(447);
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(34);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(34);
var aFunction = __webpack_require__(153);
var ctx = __webpack_require__(73);
var forOf = __webpack_require__(156);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(132)('wks');
var uid = __webpack_require__(93);
var Symbol = __webpack_require__(39).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ 39:
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(524), __esModule: true };

/***/ }),

/***/ 3998:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _keys = __webpack_require__(21);

var _keys2 = _interopRequireDefault(_keys);

var _parseUri2 = __webpack_require__(356);

var _parseUri3 = _interopRequireDefault(_parseUri2);

var _VIE_Logo_RC = __webpack_require__(3999);

var _VIE_Logo_RC2 = _interopRequireDefault(_VIE_Logo_RC);

var _Adapter = __webpack_require__(4000);

var _Adapter2 = _interopRequireDefault(_Adapter);

var _prefix = __webpack_require__(227);

var _prefix2 = _interopRequireDefault(_prefix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var version = "0.1.3";
var appUrl = "https://ringcentral.github.io/ringcentral-embeddable" + '/app.html';

var currentScipt = document.currentScript;
if (!currentScipt) {
  currentScipt = document.querySelector('script[src*="adapter.js"]');
}

var _parseUri = (0, _parseUri3.default)(currentScipt && currentScipt.src || ''),
    appKey = _parseUri.appKey,
    appSecret = _parseUri.appSecret,
    appServer = _parseUri.appServer,
    redirectUri = _parseUri.redirectUri,
    proxyUri = _parseUri.proxyUri,
    stylesUri = _parseUri.stylesUri,
    notification = _parseUri.notification,
    disableCall = _parseUri.disableCall,
    disableMessages = _parseUri.disableMessages,
    disableConferenceInvite = _parseUri.disableConferenceInvite,
    disableGlip = _parseUri.disableGlip,
    disableConferenceCall = _parseUri.disableConferenceCall,
    disableActiveCallControl = _parseUri.disableActiveCallControl,
    authMode = _parseUri.authMode,
    prefix = _parseUri.prefix;

function obj2uri(obj) {
  if (!obj) {
    return '';
  }
  var urlParams = [];
  (0, _keys2.default)(obj).forEach(function (key) {
    if (obj[key]) {
      urlParams.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }
  });
  return urlParams.join('&');
}
var appUri = appUrl + '?' + obj2uri({
  appKey: appKey,
  appSecret: appSecret,
  appServer: appServer,
  redirectUri: redirectUri,
  proxyUri: proxyUri,
  stylesUri: stylesUri,
  disableCall: disableCall,
  disableMessages: disableMessages,
  disableConferenceInvite: disableConferenceInvite,
  disableGlip: disableGlip,
  disableConferenceCall: disableConferenceCall,
  disableActiveCallControl: disableActiveCallControl,
  authMode: authMode,
  prefix: prefix,
  _t: Date.now()
});

function init() {
  if (window.RCAdapter) {
    return;
  }
  window.RCAdapter = new _Adapter2.default({
    logoUrl: _VIE_Logo_RC2.default,
    appUrl: appUri,
    version: version,
    prefix: prefix || _prefix2.default,
    enableNotification: !!notification
  });
}

if (document.readyState === 'complete') {
  init();
} else {
  window.addEventListener('load', init);
}

/***/ }),

/***/ 3999:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSI3NHB4IiBoZWlnaHQ9IjEycHgiIHZpZXdCb3g9IjAgMCA3NCAxMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNzQgMTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxnPgoJCTxkZWZzPgoJCQk8cmVjdCBpZD0iU1ZHSURfMV8iIHk9IjAuNTM5IiB3aWR0aD0iNzQiIGhlaWdodD0iMTAuOTIyIi8+CgkJPC9kZWZzPgoJCTxjbGlwUGF0aCBpZD0iU1ZHSURfMl8iPgoJCQk8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8xXyIgIG92ZXJmbG93PSJ2aXNpYmxlIi8+CgkJPC9jbGlwUGF0aD4KCQk8cGF0aCBjbGlwLXBhdGg9InVybCgjU1ZHSURfMl8pIiBmaWxsPSIjMDA2MDlDIiBkPSJNMy4zOTEsNi40MDhMMi44Nyw5LjQ1M0gwbDEuNTIzLTguNzQ0aDQuMTI5YzAuNjM1LDAsMS4xNzcsMC4wNDIsMS42MjEsMC4xMTQKCQkJQzcuNzEyLDAuOSw4LjA3MywxLjAyLDguMzUyLDEuMTc4YzAuMjc4LDAuMTU1LDAuNDgsMC4zNTIsMC42MDksMC41OUM5LjA4NSwyLDkuMTQ3LDIuMjc3LDkuMTQ3LDIuNjA0CgkJCWMwLDAuMTcyLTAuMDIxLDAuMzczLTAuMDYyLDAuNkM4Ljk5NywzLjcwNCw4LjgwMSw0LjE0OCw4LjQ5Nyw0LjU0NmMtMC4zLDAuMzkyLTAuNzIzLDAuNjU1LTEuMjU0LDAuNzg5CgkJCWMwLjE3NSwwLjA2NywwLjM0LDAuMTM2LDAuNDgsMC4yMDJDNy44NjIsNS42MDksNy45ODYsNS42OTUsOC4wODksNS44YzAuMDk4LDAuMTA0LDAuMTc2LDAuMjM3LDAuMjMyLDAuMzg4CgkJCWMwLjA1NywwLjE1NCwwLjA4OCwwLjM1NSwwLjA4OCwwLjZjMCwwLjI0Ny0wLjAzMSwwLjU0MS0wLjA4OCwwLjg3MmMtMC4wNTcsMC4zMS0wLjA5OCwwLjU2Mi0wLjEzNCwwLjc2NAoJCQlDOC4xNTYsOC42MjksOC4xNDEsOC43ODQsOC4xNDEsOC44OThjMCwwLjE5NSwwLjA3MiwwLjI5NSwwLjIxNywwLjI5NUw4LjMyMiw5LjQ1Nkg1LjQyQzUuNDA0LDkuMzc5LDUuMzk0LDkuMjc5LDUuMzk0LDkuMTc4CgkJCWMwLTAuMTQsMC4wMS0wLjMxNCwwLjAzMS0wLjUyNUM1LjQ0Niw4LjQzNiw1LjQ4Miw4LjE5Nyw1LjUyOCw3LjkzQzUuNTc0LDcuNjYsNS42LDcuNDM0LDUuNiw3LjI0NwoJCQljMC0wLjMxLTAuMDkzLTAuNTI2LTAuMjg0LTAuNjQ5QzUuMTI1LDYuNDczLDQuNzc0LDYuNDExLDQuMjYzLDYuNDExSDMuMzkxVjYuNDA4eiBNMy43MzIsNC40ODhoMS4xMwoJCQljMC40NDQsMCwwLjc5LTAuMDYyLDEuMDQzLTAuMTgyYzAuMjUzLTAuMTIzLDAuNDAyLTAuMzQxLDAuNDQ5LTAuNjQ2QzYuMzY1LDMuNjIsNi4zNjUsMy41NTcsNi4zNjUsMy40OAoJCQljMC0wLjI1NC0wLjA5My0wLjQzNS0wLjI3OS0wLjU1OUM1LjksMi44MDksNS42NTcsMi43NDYsNS4zNTgsMi43NDZINC4wMjFMMy43MzIsNC40ODh6Ii8+Cgk8L2c+Cgk8Zz4KCQk8ZGVmcz4KCQkJPHJlY3QgaWQ9IlNWR0lEXzNfIiB5PSIwLjUzOSIgd2lkdGg9Ijc0IiBoZWlnaHQ9IjEwLjkyMiIvPgoJCTwvZGVmcz4KCQk8Y2xpcFBhdGggaWQ9IlNWR0lEXzRfIj4KCQkJPHVzZSB4bGluazpocmVmPSIjU1ZHSURfM18iICBvdmVyZmxvdz0idmlzaWJsZSIvPgoJCTwvY2xpcFBhdGg+CgkJPHBhdGggY2xpcC1wYXRoPSJ1cmwoI1NWR0lEXzRfKSIgZmlsbD0iIzAwNjA5QyIgZD0iTTEzLjE3MywzLjA4OWgyLjMwMkwxNS4zMSw0LjA4NWMwLjM1MS0wLjM4NywwLjcxMi0wLjY4MSwxLjA4NC0wLjg3NwoJCQljMC4zNjEtMC4yMDEsMC43ODUtMC4zLDEuMjctMC4zYzAuNzEyLDAsMS4yMzksMC4xNjUsMS41NjksMC40OTZjMC4zMzEsMC4zMzUsMC40OTYsMC44MTQsMC40OTYsMS40NDkKCQkJYzAsMC4yNDgtMC4wMjEsMC41MTItMC4wNzIsMC43ODVsLTAuNjUsMy44MTNoLTIuNTI5bDAuNTc4LTMuMzY1YzAuMDMxLTAuMTQ2LDAuMDQyLTAuMjg0LDAuMDQyLTAuNDIzCgkJCWMwLTAuMjE3LTAuMDUyLTAuNDAzLTAuMTU1LTAuNTQ4Yy0wLjEwMy0wLjE0Ni0wLjI4OS0wLjIxOC0wLjU2Ny0wLjIxOGMtMC4zODIsMC0wLjY3MSwwLjExNS0wLjg0NywwLjM0OAoJCQljLTAuMTc2LDAuMjMtMC4yOTksMC41NTItMC4zNjEsMC45NjVMMTQuNjEsOS40NTJoLTIuNTI5TDEzLjE3MywzLjA4OXoiLz4KCTwvZz4KCTxnPgoJCTxkZWZzPgoJCQk8cmVjdCBpZD0iU1ZHSURfNV8iIHk9IjAuNTM5IiB3aWR0aD0iNzQiIGhlaWdodD0iMTAuOTIyIi8+CgkJPC9kZWZzPgoJCTxjbGlwUGF0aCBpZD0iU1ZHSURfNl8iPgoJCQk8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF81XyIgIG92ZXJmbG93PSJ2aXNpYmxlIi8+CgkJPC9jbGlwUGF0aD4KCQk8cGF0aCBjbGlwLXBhdGg9InVybCgjU1ZHSURfNl8pIiBmaWxsPSIjMDA2MDlDIiBkPSJNMjIuMDkzLDkuNjI5djAuMDM2YzAsMC4wODgsMC4wNDEsMC4xNywwLjExMywwLjI0MgoJCQljMC4wODMsMC4xMDQsMC4yNTgsMC4xNTUsMC41MTYsMC4xNTVjMC4zNzIsMCwwLjY0LTAuMDk0LDAuODI2LTAuMjc5czAuMzItMC41MDYsMC40MDItMC45NmwwLjEwNC0wLjUyMQoJCQljLTAuMjE3LDAuMTg4LTAuNDc1LDAuMzUzLTAuNzg1LDAuNDg1Yy0wLjMyLDAuMTQtMC43MDIsMC4yMDctMS4xNjcsMC4yMDdjLTAuMzgyLDAtMC43MTItMC4wNjItMS4wMDEtMC4xODIKCQkJcy0wLjUyNi0wLjI4OS0wLjcyMy0wLjQ5NmMtMC4xOTYtMC4yMTEtMC4zNDEtMC40NjMtMC40MzQtMC43NTJjLTAuMTAzLTAuMjk1LTAuMTQ1LTAuNjA0LTAuMTQ1LTAuOTM5CgkJCWMwLTAuMTA0LDAtMC4yMDcsMC4wMjEtMC4zMTFjMC4wMS0wLjEwNywwLjAyMS0wLjIxNywwLjA0Mi0wLjMzYzAuMDYyLTAuMzg3LDAuMTc1LTAuNzc5LDAuMzQxLTEuMTY2CgkJCWMwLjE2NS0wLjM4OSwwLjM5Mi0wLjczMywwLjY3MS0xLjAzOWMwLjI3OS0wLjMwMywwLjYwOS0wLjU1MSwxLjAxMi0wLjc0MmMwLjM5Mi0wLjE4NiwwLjg0Ny0wLjI4MywxLjM3My0wLjI4MwoJCQljMC4zOTIsMCwwLjczMywwLjA5NCwxLjA0MiwwLjI3OGMwLjI5OSwwLjE4MSwwLjUzNywwLjQyOSwwLjcyMywwLjczM2wwLjEzNC0wLjgzMmgyLjIyTDI2LjQ5LDguMDU5CgkJCWMtMC4wODMsMC40NzYtMC4xODYsMC45MjQtMC4zMTEsMS4zMzhjLTAuMTIzLDAuNDEyLTAuMzMsMC43NzMtMC41OTksMS4wNzhjLTAuMjc5LDAuMzExLTAuNjUsMC41NTMtMS4xMzYsMC43MjQKCQkJYy0wLjQ3NSwwLjE3NS0xLjEwNCwwLjI2My0xLjg4OSwwLjI2M2MtMC41NTgsMC0xLjAyMi0wLjA0Ni0xLjM5NC0wLjE0NWMtMC4zODItMC4wOTktMC42OTItMC4yMjgtMC45MjktMC4zODcKCQkJYy0wLjIzNy0wLjE2Ni0wLjQwMy0wLjM1My0wLjUxNi0wLjU2MmMtMC4xMDQtMC4yMDctMC4xNjUtMC40My0wLjE2NS0wLjY1NlY5LjYyOUgyMi4wOTN6IE0yMy42LDQuNTUKCQkJYy0wLjE4NiwwLTAuMzUxLDAuMDM2LTAuNDg1LDAuMTEzYy0wLjEzNCwwLjA3MS0wLjI1OCwwLjE3MS0wLjM1MSwwLjMwNWMtMC4xMDMsMC4xMy0wLjE3NSwwLjI4NC0wLjIzNywwLjQ2CgkJCUMyMi40NjUsNS42MDksMjIuNDEzLDUuNzk5LDIyLjM4Miw2Yy0wLjAxLDAuMDYyLTAuMDEsMC4xMTQtMC4wMSwwLjE2Yy0wLjAxMSwwLjA1Mi0wLjAxMSwwLjA5OS0wLjAxMSwwLjE0NQoJCQljMCwwLjI1NCwwLjA2MiwwLjQ3NSwwLjE4NiwwLjY1NWMwLjEyNCwwLjE4NywwLjMzMSwwLjI3OSwwLjYyLDAuMjg5aDAuMDUxYzAuMTg2LDAsMC4zNDEtMC4wNDEsMC40ODUtMC4xMTMKCQkJYzAuMTQ0LTAuMDcxLDAuMjU4LTAuMTcxLDAuMzYxLTAuMjg4YzAuMTAzLTAuMTI1LDAuMTg2LTAuMjY0LDAuMjQ4LTAuNDI0YzAuMDcyLTAuMTYsMC4xMTQtMC4zMiwwLjE1NS0wLjQ5NgoJCQljMC4wMjEtMC4xMjksMC4wMzEtMC4yNjMsMC4wMzEtMC40MDJjMC0wLjI2OS0wLjA2Mi0wLjQ5NC0wLjE5Ni0wLjY4N2MtMC4xMjQtMC4xOS0wLjM1MS0wLjI4OS0wLjY4MS0wLjI4OUgyMy42eiIvPgoJPC9nPgoJPGc+CgkJPGRlZnM+CgkJCTxyZWN0IGlkPSJTVkdJRF83XyIgeT0iMC41MzkiIHdpZHRoPSI3NCIgaGVpZ2h0PSIxMC45MjIiLz4KCQk8L2RlZnM+CgkJPGNsaXBQYXRoIGlkPSJTVkdJRF84XyI+CgkJCTx1c2UgeGxpbms6aHJlZj0iI1NWR0lEXzdfIiAgb3ZlcmZsb3c9InZpc2libGUiLz4KCQk8L2NsaXBQYXRoPgoJCTxwYXRoIGNsaXAtcGF0aD0idXJsKCNTVkdJRF84XykiIGZpbGw9IiNGMzhCMDAiIGQ9Ik0zMy4yOTQsNC4xMjdjMC0wLjAzMSwwLjAxMS0wLjA1OSwwLjAxMS0wLjA4M2MwLTAuMDIxLDAuMDEtMC4wNDcsMC4wMS0wLjA3NwoJCQljMC0wLjM4OC0wLjExNC0wLjY4Mi0wLjMzMi0wLjg4M2MtMC4yMTctMC4yMDctMC41MjUtMC4zMTEtMC45MjgtMC4zMTFjLTAuNDc2LDAtMC44ODksMC4xOTctMS4yMjksMC42CgkJCWMtMC4zMzEsMC40MDItMC41NjgsMS4wMDctMC43MTIsMS44MTJjLTAuMDMxLDAuMTQ4LTAuMDUzLDAuMjk5LTAuMDYyLDAuNDM4Yy0wLjAyMSwwLjE0NS0wLjAyMSwwLjI3OS0wLjAyMSwwLjQwOAoJCQljMCwwLjIwMSwwLjAxMSwwLjM4NywwLjA2MiwwLjU1M2MwLjA0MiwwLjE3LDAuMTE0LDAuMzE0LDAuMjE3LDAuNDQzYzAuMTA0LDAuMTIzLDAuMjM4LDAuMjIyLDAuNDAzLDAuMjk5CgkJCWMwLjE3NSwwLjA3MiwwLjM4MiwwLjEwNywwLjY0LDAuMTA3YzAuNDQ0LDAsMC43OTUtMC4xMzQsMS4wNTMtMC40MDFjMC4yNy0wLjI2OSwwLjQ2Ni0wLjU5OSwwLjU3OC0xLjAwMWgyLjYxMwoJCQljLTAuMTU0LDAuNTM3LTAuMzcxLDEuMDE3LTAuNjYsMS40MzVjLTAuMjg5LDAuNDI1LTAuNjMxLDAuNzg1LTEuMDIyLDEuMDc5cy0wLjgzNiwwLjUxNi0xLjMyMSwwLjY3NgoJCQljLTAuNDg0LDAuMTU1LTEuMDAxLDAuMjMyLTEuNTQ4LDAuMjMyYy0wLjU4OSwwLTEuMTI1LTAuMDcyLTEuNTgtMC4yMjdjLTAuNDY1LTAuMTU2LTAuODQ3LTAuMzc3LTEuMTY3LTAuNjY2CgkJCWMtMC4zMi0wLjI5NS0wLjU1OS0wLjY0Ni0wLjcyMy0xLjA2M2MtMC4xNjYtMC40MTgtMC4yNDgtMC44ODgtMC4yNDgtMS40MTljMC0wLjE1LDAuMDEtMC4zMTEsMC4wMjEtMC40NzcKCQkJYzAuMDIxLTAuMTY0LDAuMDQxLTAuMzM0LDAuMDcxLTAuNTExYzAuMTE0LTAuNjY2LDAuMzE5LTEuMjY1LDAuNjMtMS44MDdjMC4zMTEtMC41MzEsMC42ODItMC45OTEsMS4xMTUtMS4zNjIKCQkJYzAuNDM0LTAuMzc3LDAuOTI5LTAuNjY2LDEuNDY2LTAuODY3czEuMDk1LTAuMzA1LDEuNjcyLTAuMzA1YzEuMTk4LDAsMi4wOTcsMC4yNjQsMi42OTQsMC43OTUKCQkJYzAuNTg5LDAuNTI1LDAuODg4LDEuMjcsMC44ODgsMi4yMzR2MC4xNzZjMCwwLjA1Mi0wLjAxLDAuMTA3LTAuMDEsMC4xNzFMMzMuMjk0LDQuMTI3TDMzLjI5NCw0LjEyN3oiLz4KCTwvZz4KCTxnPgoJCTxkZWZzPgoJCQk8cmVjdCBpZD0iU1ZHSURfOV8iIHk9IjAuNTM5IiB3aWR0aD0iNzQiIGhlaWdodD0iMTAuOTIyIi8+CgkJPC9kZWZzPgoJCTxjbGlwUGF0aCBpZD0iU1ZHSURfMTBfIj4KCQkJPHVzZSB4bGluazpocmVmPSIjU1ZHSURfOV8iICBvdmVyZmxvdz0idmlzaWJsZSIvPgoJCTwvY2xpcFBhdGg+CgkJPHBhdGggY2xpcC1wYXRoPSJ1cmwoI1NWR0lEXzEwXykiIGZpbGw9IiNGMzhCMDAiIGQ9Ik0zOC41MTgsNi42NjFjLTAuMDExLDAuMDQxLTAuMDIxLDAuMDgyLTAuMDIxLDAuMTE4CgkJCWMtMC4wMTEsMC4wNDEtMC4wMTEsMC4wODItMC4wMTEsMC4xMjNjMCwwLjMxMSwwLjEwNCwwLjU1NCwwLjMxLDAuNzM4YzAuMTk2LDAuMTgyLDAuNDU1LDAuMjcsMC43NTQsMC4yNwoJCQljMC4xOTYsMCwwLjM5NC0wLjA0NywwLjU3OC0wLjE0MWMwLjE4NS0wLjA5MywwLjM0MS0wLjIzMSwwLjQ2NS0wLjQxOGgyLjQxNmMtMC4xNzYsMC4zOTctMC40MTMsMC43MjktMC43MDIsMC45OTYKCQkJYy0wLjI4OSwwLjI2OS0wLjU5OSwwLjQ4NS0wLjk0OSwwLjY1Yy0wLjM1MiwwLjE2NS0wLjcxMywwLjI4NC0xLjEwNCwwLjM1MmMtMC4zODIsMC4wNzEtMC43NTQsMC4xMDQtMS4xMjUsMC4xMDQKCQkJYy0wLjQ1NCwwLTAuODc4LTAuMDU3LTEuMjYtMC4xN2MtMC4zODItMC4xMTQtMC43MDItMC4yODQtMC45NzktMC41MTJjLTAuMjc5LTAuMjIzLTAuNDg2LTAuNS0wLjY0Mi0wLjgzMgoJCQljLTAuMTU0LTAuMzI0LTAuMjM3LTAuNy0wLjIzNy0xLjEzNWMwLTAuMTA0LDAuMDEyLTAuMjEyLDAuMDIxLTAuMzJjMC4wMTEtMC4xMDcsMC4wMzEtMC4yMjEsMC4wNDItMC4zMzQKCQkJYzAuMDkzLTAuNTE4LDAuMjY4LTAuOTkxLDAuNTI2LTEuNDE2YzAuMjU4LTAuNDIyLDAuNTc3LTAuNzgzLDAuOTQ4LTEuMDc3YzAuMzgyLTAuMywwLjc5NS0wLjUyNywxLjI2MS0wLjY4NwoJCQljMC40NzUtMC4xNjYsMC45NTktMC4yNDQsMS40NjUtMC4yNDRjMC41MTgsMCwwLjk2MSwwLjA3MiwxLjM1NCwwLjIxN2MwLjM5MywwLjE0NiwwLjczMiwwLjM0NywwLjk5MSwwLjYwOQoJCQljMC4yNjksMC4yNTgsMC40NzUsMC41NzMsMC42MDgsMC45NDRjMC4xMzUsMC4zNzIsMC4yMDcsMC43ODUsMC4yMDcsMS4yMjljMCwwLjI3Mi0wLjAzMSwwLjU4OC0wLjA5NCwwLjkzNUgzOC41MTh6CgkJCSBNNDEuMDI1LDUuMzc2YzAuMDExLTAuMDQyLDAuMDExLTAuMTA0LDAuMDExLTAuMTg3YzAtMC4yNTgtMC4wODItMC40NzYtMC4yNjktMC42NTVjLTAuMTc2LTAuMTc3LTAuMzkzLTAuMjYzLTAuNjYtMC4yNjMKCQkJYy0wLjM4MywwLTAuNjkxLDAuMDk4LTAuOTMsMC4yOTNjLTAuMjI4LDAuMjAxLTAuMzgzLDAuNDcxLTAuNDQzLDAuODEySDQxLjAyNXoiLz4KCTwvZz4KCTxnPgoJCTxkZWZzPgoJCQk8cmVjdCBpZD0iU1ZHSURfMTFfIiB5PSIwLjUzOSIgd2lkdGg9Ijc0IiBoZWlnaHQ9IjEwLjkyMiIvPgoJCTwvZGVmcz4KCQk8Y2xpcFBhdGggaWQ9IlNWR0lEXzEyXyI+CgkJCTx1c2UgeGxpbms6aHJlZj0iI1NWR0lEXzExXyIgIG92ZXJmbG93PSJ2aXNpYmxlIi8+CgkJPC9jbGlwUGF0aD4KCQk8cGF0aCBjbGlwLXBhdGg9InVybCgjU1ZHSURfMTJfKSIgZmlsbD0iI0YzOEIwMCIgZD0iTTQ0LjI1OCwzLjA4OWgyLjMwM2wtMC4xNzcsMC45OTZjMC4zNjEtMC4zODcsMC43MjQtMC42ODEsMS4wODQtMC44NzcKCQkJYzAuMzcyLTAuMjAxLDAuNzk2LTAuMywxLjI4LTAuM2MwLjcxMywwLDEuMjI5LDAuMTY1LDEuNTY4LDAuNDk2YzAuMzMsMC4zMzUsMC40OTYsMC44MTQsMC40OTYsMS40NDkKCQkJYzAsMC4yNDgtMC4wMywwLjUxMi0wLjA3MSwwLjc4NUw1MC4wOCw5LjQ1MmgtMi41MjlsMC41OS0zLjM2NWMwLjAyMS0wLjE0NiwwLjAyOS0wLjI4NCwwLjAyOS0wLjQyMwoJCQljMC0wLjIxNy0wLjA0MS0wLjQwMy0wLjE0NS0wLjU0OGMtMC4xMDQtMC4xNDYtMC4yODktMC4yMTgtMC41NjctMC4yMThjLTAuMzgyLDAtMC42NzEsMC4xMTUtMC44NDcsMC4zNDgKCQkJYy0wLjE4NywwLjIzLTAuMzAxLDAuNTUyLTAuMzczLDAuOTY1bC0wLjU1NywzLjI0MWgtMi41Mkw0NC4yNTgsMy4wODl6Ii8+Cgk8L2c+Cgk8Zz4KCQk8ZGVmcz4KCQkJPHJlY3QgaWQ9IlNWR0lEXzEzXyIgeT0iMC41MzkiIHdpZHRoPSI3NCIgaGVpZ2h0PSIxMC45MjIiLz4KCQk8L2RlZnM+CgkJPGNsaXBQYXRoIGlkPSJTVkdJRF8xNF8iPgoJCQk8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8xM18iICBvdmVyZmxvdz0idmlzaWJsZSIvPgoJCTwvY2xpcFBhdGg+CgkJPHBhdGggY2xpcC1wYXRoPSJ1cmwoI1NWR0lEXzE0XykiIGZpbGw9IiNGMzhCMDAiIGQ9Ik01NC43NTcsOS40MDdjLTAuMjg5LDAuMDE1LTAuNTQ3LDAuMDI0LTAuNzg0LDAuMDM2CgkJCWMtMC4yMzgsMC4wMS0wLjQ2NSwwLjAxLTAuNjYsMC4wMWMtMC4zODMsMC0wLjcwMy0wLjAxNi0wLjk2MS0wLjA1M2MtMC4yNTktMC4wMzUtMC40NjUtMC4xMDMtMC42MTktMC4xOTUKCQkJYy0wLjE1NC0wLjA5NC0wLjI2OS0wLjIxNy0wLjMzLTAuMzcxYy0wLjA2Mi0wLjE0OC0wLjA5NC0wLjM0Ni0wLjA5NC0wLjU4M2MwLTAuMTQ2LDAuMDEyLTAuMzA2LDAuMDIxLTAuNDkxCgkJCWMwLjAyMS0wLjE4MSwwLjA1Mi0wLjM4MiwwLjA5My0wLjU5OWwwLjQ2Ni0yLjY2M0g1MC45OWwwLjIzNi0xLjQ1NWgwLjkzOWwwLjM1Mi0xLjk4MmgyLjQ4OGwtMC4zNTIsMS45ODJoMS4yMTlsLTAuMjQ4LDEuNDU1CgkJCWgtMS4yMDhsLTAuNDAxLDIuMzE2Yy0wLjAyMSwwLjA3OC0wLjAzMSwwLjE0MS0wLjA0MywwLjIwMWMtMC4wMSwwLjA2Mi0wLjAxLDAuMTE5LTAuMDEsMC4xNjZjMCwwLjE1NCwwLjA1MywwLjI2NCwwLjE0NSwwLjMzCgkJCWMwLjEwNCwwLjA2MiwwLjI3OCwwLjA5OCwwLjU0NywwLjA5OGgwLjQwMkw1NC43NTcsOS40MDd6Ii8+Cgk8L2c+Cgk8Zz4KCQk8ZGVmcz4KCQkJPHJlY3QgaWQ9IlNWR0lEXzE1XyIgeT0iMC41MzkiIHdpZHRoPSI3NCIgaGVpZ2h0PSIxMC45MjIiLz4KCQk8L2RlZnM+CgkJPGNsaXBQYXRoIGlkPSJTVkdJRF8xNl8iPgoJCQk8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8xNV8iICBvdmVyZmxvdz0idmlzaWJsZSIvPgoJCTwvY2xpcFBhdGg+CgkJPHBhdGggY2xpcC1wYXRoPSJ1cmwoI1NWR0lEXzE2XykiIGZpbGw9IiNGMzhCMDAiIGQ9Ik01Ni4zODksMy4wODloMi4zMDNMNTguNDYzLDQuMzhoMC4wMzFDNTksMy4zOTgsNTkuNzMyLDIuOTA4LDYwLjcwMywyLjkwOAoJCQljMC4wNTIsMCwwLjExMywwLjAwNSwwLjE2NSwwLjAxMWMwLjA1MiwwLjAxMSwwLjEwNCwwLjAyMSwwLjE2NSwwLjAyNGwtMC40NTQsMi41MjljLTAuMDgyLTAuMDIxLTAuMTY1LTAuMDM1LTAuMjQ4LTAuMDUyCgkJCWMtMC4wODItMC4wMTctMC4xNzUtMC4wMjQtMC4yNTgtMC4wMjRjLTAuNTE3LDAtMC45MjksMC4xNC0xLjIzOCwwLjQxMmMtMC4zLDAuMjc4LTAuNTE3LDAuNzYtMC42MywxLjQ0NGwtMC4zODIsMi4xOTloLTIuNTI5CgkJCUw1Ni4zODksMy4wODl6Ii8+Cgk8L2c+Cgk8Zz4KCQk8ZGVmcz4KCQkJPHJlY3QgaWQ9IlNWR0lEXzE3XyIgeT0iMC41MzkiIHdpZHRoPSI3NCIgaGVpZ2h0PSIxMC45MjIiLz4KCQk8L2RlZnM+CgkJPGNsaXBQYXRoIGlkPSJTVkdJRF8xOF8iPgoJCQk8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8xN18iICBvdmVyZmxvdz0idmlzaWJsZSIvPgoJCTwvY2xpcFBhdGg+CgkJPHBhdGggY2xpcC1wYXRoPSJ1cmwoI1NWR0lEXzE4XykiIGZpbGw9IiNGMzhCMDAiIGQ9Ik02NC40MDksOS40NjlsLTAuMDExLTAuODc4Yy0wLjQxMiwwLjM0MS0wLjgyNSwwLjU2OC0xLjIxOSwwLjY4NwoJCQljLTAuNDAyLDAuMTE5LTAuODQ3LDAuMTc3LTEuMzIsMC4xNzdjLTAuMjcsMC0wLjUyNi0wLjAzMS0wLjc2NC0wLjA4OGMtMC4yNDgtMC4wNjItMC40NTUtMC4xNTQtMC42MzEtMC4yODkKCQkJYy0wLjE4Ni0wLjEyOS0wLjMyLTAuMjg5LTAuNDM0LTAuNDc5Yy0wLjEwNC0wLjE4Ny0wLjE1NS0wLjQxOC0wLjE1NS0wLjY4N2MwLTAuMTE0LDAuMDExLTAuMjM3LDAuMDQyLTAuMzc3CgkJCWMwLjA3Mi0wLjQ3NiwwLjI1OC0wLjg1MywwLjUyNS0xLjEyYzAuMjctMC4yNzMsMC41ODktMC40NzUsMC45NDktMC42MTRjMC4zNTMtMC4xNCwwLjczMy0wLjIzMSwxLjEzNy0wLjI4NAoJCQljMC40MDItMC4wNTcsMC43NzMtMC4xMDMsMS4xMTUtMC4xNDhjMC4zNTEtMC4wNDEsMC42NC0wLjEwNCwwLjg3Ny0wLjE4MmMwLjIzNy0wLjA3NiwwLjM3MS0wLjIxNywwLjQxMi0wLjQxOAoJCQljMC0wLjAxNiwwLTAuMDMxLDAtMC4wNDFjMC0wLjAxNiwwLjAxMi0wLjAyNSwwLjAxMi0wLjA0MWMwLTAuMDk5LTAuMDMxLTAuMTc2LTAuMDk0LTAuMjMxYy0wLjA1Mi0wLjA1OC0wLjEyMy0wLjEwNC0wLjE5NS0wLjEzCgkJCXMtMC4xNTUtMC4wNDctMC4yNDgtMC4wNjJjLTAuMDk0LTAuMDExLTAuMTY1LTAuMDE2LTAuMjE3LTAuMDE2Yy0wLjA5NCwwLTAuMTg3LDAuMDA1LTAuMjg5LDAuMDE2CgkJCWMtMC4xMDQsMC4wMTYtMC4xOTYsMC4wNDEtMC4yNzgsMC4wODhjLTAuMDkzLDAuMDQ3LTAuMTc2LDAuMTA4LTAuMjU5LDAuMTg3Yy0wLjA3MiwwLjA4My0wLjEyMywwLjE5LTAuMTY1LDAuMzNoLTIuNDI3CgkJCWMwLjA2Mi0wLjM0MSwwLjE3Ny0wLjY0NiwwLjM0Mi0wLjkwM2MwLjE3Ni0wLjI2MywwLjQxMi0wLjQ5LDAuNzIzLTAuNjcxczAuNjkxLTAuMzE5LDEuMTQ2LTAuNDE4CgkJCWMwLjQ1My0wLjA5OSwxLjAwMi0wLjE0NiwxLjYzMi0wLjE0NmMwLjU3NywwLDEuMDQyLDAuMDM3LDEuNDEzLDAuMTEzYzAuMzcxLDAuMDc4LDAuNjYsMC4xOTEsMC44NjcsMC4zMzYKCQkJYzAuMjE3LDAuMTQ2LDAuMzYxLDAuMzIsMC40NDMsMC41MjFjMC4wNzIsMC4yMDEsMC4xMTQsMC40MjksMC4xMTQsMC42ODJjMCwwLjE0OC0wLjAxMSwwLjMxMS0wLjAzMSwwLjQ3MQoJCQljLTAuMDIxLDAuMTY0LTAuMDQxLDAuMzM0LTAuMDcxLDAuNTFMNjYuODM0LDguMzRjLTAuMDIxLDAuMTM1LTAuMDI5LDAuMjQ4LTAuMDI5LDAuMzQyYzAsMC4wODgsMC4wMSwwLjE2NCwwLjA0MSwwLjIzMQoJCQljMC4wNDEsMC4wNzEsMC4wOTIsMC4xNDksMC4xODYsMC4yMzdsLTAuMDEsMC4zMmgtMi42MTJWOS40Njl6IE02My4yNDMsOC4wMmMwLjIxNywwLDAuNDExLTAuMDM3LDAuNTc3LTAuMTE5CgkJCWMwLjE2Ni0wLjA3NywwLjMxMS0wLjE5LDAuNDI0LTAuMzM2YzAuMTEzLTAuMTQsMC4xOTUtMC4zMDUsMC4yNTgtMC40OTZjMC4wNzItMC4xODksMC4xMTQtMC4zOTYsMC4xMzUtMC42MTMKCQkJYy0wLjIyOCwwLjEtMC40NTMsMC4xNzEtMC42ODIsMC4yMTJjLTAuMjI5LDAuMDQ3LTAuNDQzLDAuMDkzLTAuNjUsMC4xNDljLTAuMTk1LDAuMDUyLTAuMzYxLDAuMTIzLTAuNTA2LDAuMjIyCgkJCXMtMC4yMjksMC4yNDgtMC4yNTgsMC40NDh2MC4wNzJjMCwwLjE0MSwwLjA1MiwwLjI1NCwwLjE3NSwwLjMzNkM2Mi44Myw3Ljk3Nyw2My4wMDUsOC4wMiw2My4yNDMsOC4wMiIvPgoJPC9nPgoJPGc+CgkJPGRlZnM+CgkJCTxyZWN0IGlkPSJTVkdJRF8xOV8iIHk9IjAuNTM5IiB3aWR0aD0iNzQiIGhlaWdodD0iMTAuOTIyIi8+CgkJPC9kZWZzPgoJCTxjbGlwUGF0aCBpZD0iU1ZHSURfMjBfIj4KCQkJPHVzZSB4bGluazpocmVmPSIjU1ZHSURfMTlfIiAgb3ZlcmZsb3c9InZpc2libGUiLz4KCQk8L2NsaXBQYXRoPgoJCTxwb2x5Z29uIGNsaXAtcGF0aD0idXJsKCNTVkdJRF8yMF8pIiBmaWxsPSIjRjM4QjAwIiBwb2ludHM9IjY3LjQ1NSw5LjQ1MyA2OC45NzMsMC43MDkgNzEuNTAyLDAuNzA5IDY5Ljk4NCw5LjQ1MyAJCSIvPgoJPC9nPgoJPGc+CgkJPGRlZnM+CgkJCTxyZWN0IGlkPSJTVkdJRF8yMV8iIHk9IjAuNTM5IiB3aWR0aD0iNzQiIGhlaWdodD0iMTAuOTIyIi8+CgkJPC9kZWZzPgoJCTxjbGlwUGF0aCBpZD0iU1ZHSURfMjJfIj4KCQkJPHVzZSB4bGluazpocmVmPSIjU1ZHSURfMjFfIiAgb3ZlcmZsb3c9InZpc2libGUiLz4KCQk8L2NsaXBQYXRoPgoJCTxwb2x5Z29uIGNsaXAtcGF0aD0idXJsKCNTVkdJRF8yMl8pIiBmaWxsPSIjMDA2MDlDIiBwb2ludHM9IjguNzk2LDkuNDUzIDEwLjIxNSw0LjI4NiAxMi4wNDgsNC4yODYgMTEuMzA0LDkuNDUzIAkJIi8+Cgk8L2c+Cgk8Zz4KCQk8ZGVmcz4KCQkJPHJlY3QgaWQ9IlNWR0lEXzIzXyIgeT0iMC41MzkiIHdpZHRoPSI3NCIgaGVpZ2h0PSIxMC45MjIiLz4KCQk8L2RlZnM+CgkJPGNsaXBQYXRoIGlkPSJTVkdJRF8yNF8iPgoJCQk8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8yM18iICBvdmVyZmxvdz0idmlzaWJsZSIvPgoJCTwvY2xpcFBhdGg+CgkJPHBhdGggY2xpcC1wYXRoPSJ1cmwoI1NWR0lEXzI0XykiIGZpbGw9IiNGMzhCMDAiIGQ9Ik0xMi45NjYsMS45ODR2LTAuMDFjLTAuMDEtMC4wMTEtMC4wMjEtMC4wMzEtMC4wNDEtMC4wNTIKCQkJYy0wLjAzMS0wLjA1Mi0wLjA5My0wLjExOC0wLjE4Ni0wLjIwMmMtMC4xNzUtMC4xNDgtMC40NTQtMC4zMy0wLjkyOS0wLjQxOGMtMC4yMjctMC4wNDEtMC40MjMtMC4wNDEtMC41ODgtMC4wMjUKCQkJYy0wLjQxMywwLjA0Ny0wLjY2MSwwLjIwNy0wLjc0OSwwLjI3OWMtMC4wMjUsMC4wMjEtMC4wMzEsMC4wMjUtMC4wMzEsMC4wMjVsMCwwYy0wLjExNCwwLjExMy0wLjMwNSwwLjExMy0wLjQyMywwCgkJCWMtMC4xMTMtMC4xMTktMC4xMTMtMC4zMDUsMC0wLjQyNGMwLjAzMS0wLjAzLDAuNDEzLTAuMzk3LDEuMTQxLTAuNDc1YzAuMjI4LTAuMDIxLDAuNDc1LTAuMDE3LDAuNzY0LDAuMDM1CgkJCWMxLjE1NiwwLjIwMSwxLjU1OSwwLjk0NCwxLjU4LDAuOTk2YzAuMDcyLDAuMTQ1LDAuMDEsMC4zMjUtMC4xMzQsMC40MDJjLTAuMDMxLDAuMDE2LTAuMDcyLDAuMDI1LTAuMTAzLDAuMDI1CgkJCUMxMy4xNDIsMi4xNiwxMy4wMjgsMi4wOTgsMTIuOTY2LDEuOTg0Ii8+Cgk8L2c+Cgk8Zz4KCQk8ZGVmcz4KCQkJPHJlY3QgaWQ9IlNWR0lEXzI1XyIgeT0iMC41MzkiIHdpZHRoPSI3NCIgaGVpZ2h0PSIxMC45MjIiLz4KCQk8L2RlZnM+CgkJPGNsaXBQYXRoIGlkPSJTVkdJRF8yNl8iPgoJCQk8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8yNV8iICBvdmVyZmxvdz0idmlzaWJsZSIvPgoJCTwvY2xpcFBhdGg+CgkJPHBhdGggY2xpcC1wYXRoPSJ1cmwoI1NWR0lEXzI2XykiIGZpbGw9IiNGMzhCMDAiIGQ9Ik0xMi4yMjMsMi42NjZjMCwwLDAtMC4wMDYtMC4wMS0wLjAzMWMtMC4wMjEtMC4wMjEtMC4wNTItMC4wNjItMC4xMDMtMC4xMDQKCQkJYy0wLjA5My0wLjA4Mi0wLjI1OC0wLjE4Ni0wLjUxNy0wLjIzMmMtMC4xMzQtMC4wMjUtMC4yNDgtMC4wMjUtMC4zNC0wLjAxNWMtMC4yMTcsMC4wMjQtMC4zNjEsMC4xMTItMC40MDMsMC4xNDkKCQkJYy0wLjAxLDAuMDEtMC4wMSwwLjAxLTAuMDEsMC4wMWMtMC4wOTMsMC4wOTktMC4yNTgsMC4wOTktMC4zNTEsMGMtMC4wOTgtMC4wOTgtMC4wOTgtMC4yNTQsMC0wLjM1MgoJCQljMC4wMjEtMC4wMjUsMC4yNTgtMC4yNTgsMC43MjMtMC4zMDVjMC4xMzQtMC4wMTYsMC4yODktMC4wMSwwLjQ2NSwwLjAyMWMwLjcyMywwLjEyOSwwLjk4LDAuNTg4LDAuOTkxLDAuNjI5CgkJCWMwLjA2MiwwLjEyNSwwLjAyMSwwLjI3My0wLjEwMywwLjMzNmMtMC4wMzEsMC4wMTEtMC4wNjIsMC4wMjEtMC4wOTMsMC4wMjVDMTIuMzc4LDIuODExLDEyLjI3NSwyLjc1OSwxMi4yMjMsMi42NjYiLz4KCTwvZz4KCTxnPgoJCTxkZWZzPgoJCQk8cmVjdCBpZD0iU1ZHSURfMjdfIiB5PSIwLjUzOSIgd2lkdGg9Ijc0IiBoZWlnaHQ9IjEwLjkyMiIvPgoJCTwvZGVmcz4KCQk8Y2xpcFBhdGggaWQ9IlNWR0lEXzI4XyI+CgkJCTx1c2UgeGxpbms6aHJlZj0iI1NWR0lEXzI3XyIgIG92ZXJmbG93PSJ2aXNpYmxlIi8+CgkJPC9jbGlwUGF0aD4KCQk8cGF0aCBjbGlwLXBhdGg9InVybCgjU1ZHSURfMjhfKSIgZmlsbD0iI0YzOEIwMCIgZD0iTTEyLjAxNywzLjI3M2MwLDAuMzA2LTAuMjg5LDAuNTU0LTAuNjUsMC41NDkKCQkJYy0wLjM2MSwwLTAuNjUtMC4yNDgtMC42NC0wLjU1M2MwLTAuMzExLDAuMjg5LTAuNTU5LDAuNjQtMC41NTNDMTEuNzI4LDIuNzE4LDEyLjAxNywyLjk3MSwxMi4wMTcsMy4yNzMiLz4KCTwvZz4KCTxnPgoJCTxkZWZzPgoJCQk8cmVjdCBpZD0iU1ZHSURfMjlfIiB5PSIwLjUzOSIgd2lkdGg9Ijc0IiBoZWlnaHQ9IjEwLjkyMiIvPgoJCTwvZGVmcz4KCQk8Y2xpcFBhdGggaWQ9IlNWR0lEXzMwXyI+CgkJCTx1c2UgeGxpbms6aHJlZj0iI1NWR0lEXzI5XyIgIG92ZXJmbG93PSJ2aXNpYmxlIi8+CgkJPC9jbGlwUGF0aD4KCQk8cGF0aCBjbGlwLXBhdGg9InVybCgjU1ZHSURfMzBfKSIgZmlsbD0iI0YzOEIwMCIgZD0iTTcyLjQ0MSwxLjA3NmgwLjUyNWMwLjEyNCwwLDAuMjE3LDAuMDI1LDAuMjc4LDAuMDc2CgkJCWMwLjA2MiwwLjA1OCwwLjA5MywwLjEzLDAuMDkzLDAuMjIzYzAsMC4wNTItMC4wMSwwLjEtMC4wMjksMC4xMzVjLTAuMDEyLDAuMDM2LTAuMDMxLDAuMDYyLTAuMDUzLDAuMDgyCgkJCXMtMC4wNDEsMC4wMzYtMC4wNjIsMC4wNDdjLTAuMDIxLDAuMDEtMC4wMjksMC4wMTYtMC4wNDEsMC4wMjFsMCwwYzAuMDEyLDAuMDA1LDAuMDMxLDAuMDExLDAuMDUzLDAuMDE2CgkJCWMwLjAyMSwwLjAxLDAuMDQxLDAuMDIxLDAuMDUyLDAuMDQxYzAuMDIxLDAuMDE2LDAuMDMxLDAuMDQxLDAuMDQxLDAuMDY3YzAuMDExLDAuMDMsMC4wMjEsMC4wNjcsMC4wMjEsMC4xMTIKCQkJYzAsMC4wNjIsMCwwLjEyNSwwLjAxMiwwLjE3N2MwLjAxLDAuMDUyLDAuMDMxLDAuMDkzLDAuMDUyLDAuMTEyaC0wLjIwN2MtMC4wMjEtMC4wMjEtMC4wMy0wLjA0NS0wLjAzLTAuMDc2czAtMC4wNTgsMC0wLjA4NAoJCQljMC0wLjA1MS0wLjAxMS0wLjA5OC0wLjAxMS0wLjEzM2MtMC4wMTEtMC4wMzctMC4wMjEtMC4wNjctMC4wNDEtMC4wOTRjLTAuMDExLTAuMDIxLTAuMDMtMC4wNDItMC4wNjItMC4wNTIKCQkJYy0wLjAzLTAuMDExLTAuMDYyLTAuMDE3LTAuMTEzLTAuMDE3aC0wLjI3N3YwLjQ1NWgtMC4xOTdWMS4wNzZINzIuNDQxeiBNNzIuNjM5LDEuNTgyaDAuMzE4YzAuMDYyLDAsMC4xMDQtMC4wMTYsMC4xMzUtMC4wNDcKCQkJYzAuMDMtMC4wMjUsMC4wNTMtMC4wNzIsMC4wNTMtMC4xMjljMC0wLjAzNi0wLjAxMi0wLjA2Ny0wLjAyMS0wLjA4OGMtMC4wMS0wLjAyMS0wLjAyMS0wLjA0MS0wLjA0MS0wLjA1MwoJCQljLTAuMDIxLTAuMDE2LTAuMDMxLTAuMDIxLTAuMDYyLTAuMDI0Yy0wLjAyMS0wLjAwNS0wLjA0MS0wLjAwNS0wLjA3MS0wLjAwNWgtMC4zMVYxLjU4MnoiLz4KCTwvZz4KCTxnPgoJCTxkZWZzPgoJCQk8cmVjdCBpZD0iU1ZHSURfMzFfIiB5PSIwLjUzOSIgd2lkdGg9Ijc0IiBoZWlnaHQ9IjEwLjkyMiIvPgoJCTwvZGVmcz4KCQk8Y2xpcFBhdGggaWQ9IlNWR0lEXzMyXyI+CgkJCTx1c2UgeGxpbms6aHJlZj0iI1NWR0lEXzMxXyIgIG92ZXJmbG93PSJ2aXNpYmxlIi8+CgkJPC9jbGlwUGF0aD4KCQk8cGF0aCBjbGlwLXBhdGg9InVybCgjU1ZHSURfMzJfKSIgZmlsbD0iI0YzOEIwMCIgZD0iTTcyLjg1NCwyLjgzNmMtMC42MjksMC0xLjE0Ni0wLjUxNi0xLjE0Ni0xLjE1CgkJCWMwLTAuNjI5LDAuNTE3LTEuMTQ2LDEuMTQ2LTEuMTQ2Uzc0LDEuMDU3LDc0LDEuNjg2Qzc0LDIuMzIsNzMuNDgyLDIuODM2LDcyLjg1NCwyLjgzNiBNNzIuODU0LDAuNzQ1CgkJCWMtMC41MTcsMC0wLjkzOCwwLjQyNC0wLjkzOCwwLjkzOGMwLDAuNTIxLDAuNDIzLDAuOTQ1LDAuOTM4LDAuOTQ1YzAuNTE3LDAsMC45MzktMC40MjQsMC45MzktMC45NDUKCQkJQzczLjc5NCwxLjE2OSw3My4zNywwLjc0NSw3Mi44NTQsMC43NDUiLz4KCTwvZz4KPC9nPgo8L3N2Zz4K"

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(298);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(302);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(80);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),

/***/ 4000:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(109);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = __webpack_require__(13);

var _classnames2 = _interopRequireDefault(_classnames);

var _AdapterCore2 = __webpack_require__(4001);

var _AdapterCore3 = _interopRequireDefault(_AdapterCore2);

var _parseUri2 = __webpack_require__(356);

var _parseUri3 = _interopRequireDefault(_parseUri2);

var _messageTypes = __webpack_require__(512);

var _messageTypes2 = _interopRequireDefault(_messageTypes);

var _styles = __webpack_require__(4002);

var _styles2 = _interopRequireDefault(_styles);

var _notification = __webpack_require__(4004);

var _notification2 = _interopRequireDefault(_notification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Adapter = function (_AdapterCore) {
  (0, _inherits3.default)(Adapter, _AdapterCore);

  function Adapter() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        logoUrl = _ref.logoUrl,
        appUrl = _ref.appUrl,
        _ref$prefix = _ref.prefix,
        prefix = _ref$prefix === undefined ? 'rc-widget' : _ref$prefix,
        version = _ref.version,
        _ref$appWidth = _ref.appWidth,
        appWidth = _ref$appWidth === undefined ? 300 : _ref$appWidth,
        _ref$appHeight = _ref.appHeight,
        appHeight = _ref$appHeight === undefined ? 500 : _ref$appHeight,
        _ref$zIndex = _ref.zIndex,
        zIndex = _ref$zIndex === undefined ? 999 : _ref$zIndex,
        _ref$enableNotificati = _ref.enableNotification,
        enableNotification = _ref$enableNotificati === undefined ? false : _ref$enableNotificati;

    (0, _classCallCheck3.default)(this, Adapter);

    var container = document.createElement('div');
    container.id = prefix;
    container.setAttribute('class', (0, _classnames2.default)(_styles2.default.root, _styles2.default.loading));
    container.draggable = false;

    var _this = (0, _possibleConstructorReturn3.default)(this, (Adapter.__proto__ || (0, _getPrototypeOf2.default)(Adapter)).call(this, {
      prefix: prefix,
      container: container,
      styles: _styles2.default,
      messageTypes: _messageTypes2.default,
      defaultDirection: 'right'
    }));

    _this._messageTypes = _messageTypes2.default;
    _this._zIndex = zIndex;
    _this._appWidth = appWidth;
    _this._appHeight = appHeight;
    _this._strings = {};
    _this._generateContentDOM();
    var styleList = document.querySelectorAll('style');
    for (var i = 0; i < styleList.length; ++i) {
      var styleEl = styleList[i];
      if (styleEl.innerHTML.indexOf('https://{{rc-styles}}') > -1) {
        _this.styleEl = styleEl;
      }
    }
    if (_this.styleEl) {
      _this._root.appendChild(_this.styleEl.cloneNode(true));
    }
    _this._setAppUrl(appUrl);
    _this._setLogoUrl(logoUrl);

    _this._version = version;
    window.addEventListener('message', function (e) {
      var data = e.data;
      _this._onMessage(data);
    });

    var phoneCallTags = window.document.querySelectorAll('a[href^="tel:"]');

    var _loop = function _loop(_i) {
      var phoneTag = phoneCallTags[_i];
      phoneTag.addEventListener('click', function () {
        var hrefStr = phoneTag.getAttribute('href');
        var phoneNumber = hrefStr.replace(/[^\d+*-]/g, '');
        _this.clickToCall(phoneNumber, true);
      });
    };

    for (var _i = 0; _i < phoneCallTags.length; ++_i) {
      _loop(_i);
    }
    var phoneSMSTags = window.document.querySelectorAll('a[href^="sms:"]');

    var _loop2 = function _loop2(_i2) {
      var phoneTag = phoneSMSTags[_i2];
      phoneTag.addEventListener('click', function () {
        var hrefStr = phoneTag.getAttribute('href');
        var pathStr = hrefStr.split('?')[0];

        var _parseUri = (0, _parseUri3.default)(hrefStr),
            text = _parseUri.text,
            body = _parseUri.body;

        var phoneNumber = pathStr.replace(/[^\d+*-]/g, '');
        _this.clickToSMS(phoneNumber, body || text);
      });
    };

    for (var _i2 = 0; _i2 < phoneSMSTags.length; ++_i2) {
      _loop2(_i2);
    }
    if (enableNotification) {
      _this._notification = new _notification2.default();
    }
    return _this;
  }

  (0, _createClass3.default)(Adapter, [{
    key: '_onMessage',
    value: function _onMessage(data) {
      if (data) {
        switch (data.type) {
          case 'rc-call-ring-notify':
            console.log('ring call:');
            console.log(data.call);
            this.setMinimized(false);
            if (this._notification) {
              this._notification.notify({
                title: 'New Call',
                text: 'Incoming Call from ' + (data.call.fromUserName || data.call.from),
                onClick: function onClick() {
                  window.focus();
                }
              });
            }
            break;
          case 'rc-call-start-notify':
            console.log('start call:');
            console.log(data.call);
            break;
          case 'rc-call-end-notify':
            console.log('end call:');
            console.log(data.call);
            break;
          case 'rc-login-status-notify':
            console.log('rc-login-status-notify:', data.loggedIn);
            break;
          case 'rc-active-call-notify':
            console.log('rc-active-call-notify:', data.call);
            break;
          case 'rc-ringout-call-notify':
            console.log('rc-ringout-call-notify:', data.call);
            break;
          case 'rc-inbound-message-notify':
            console.log('rc-inbound-message-notify:', data.message.id);
            break;
          case 'rc-message-updated-notify':
            console.log('rc-message-updated-notify:', data.message.id);
            break;
          case 'rc-route-changed-notify':
            console.log('rc-route-changed-notify:', data.path);
            break;
          default:
            (0, _get3.default)(Adapter.prototype.__proto__ || (0, _getPrototypeOf2.default)(Adapter.prototype), '_onMessage', this).call(this, data);
            break;
        }
      }
    }
  }, {
    key: '_onHeaderClicked',
    value: function _onHeaderClicked() {
      //
    }
  }, {
    key: '_setAppUrl',
    value: function _setAppUrl(appUrl) {
      this._appUrl = appUrl;
      if (appUrl) {
        this.contentFrameEl.src = appUrl;
        this.contentFrameEl.id = this._prefix + '-adapter-frame';
      }
    }
  }, {
    key: '_postMessage',
    value: function _postMessage(data) {
      if (this._contentFrameEl.contentWindow) {
        this._contentFrameEl.contentWindow.postMessage(data, '*');
      }
    }
  }, {
    key: 'setRinging',
    value: function setRinging(ringing) {
      this._ringing = !!ringing;
      this._renderMainClass();
    }
  }, {
    key: 'gotoPresence',
    value: function gotoPresence() {
      this._postMessage({
        type: 'rc-adapter-goto-presence',
        version: this._version
      });
    }
  }, {
    key: 'setEnvironment',
    value: function setEnvironment() {
      this._postMessage({
        type: 'rc-adapter-set-environment'
      });
    }
  }, {
    key: 'clickToSMS',
    value: function clickToSMS(phoneNumber, text) {
      this.setMinimized(false);
      this._postMessage({
        type: 'rc-adapter-new-sms',
        phoneNumber: phoneNumber,
        text: text
      });
    }
  }, {
    key: 'clickToCall',
    value: function clickToCall(phoneNumber) {
      var toCall = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      this.setMinimized(false);
      this._postMessage({
        type: 'rc-adapter-new-call',
        phoneNumber: phoneNumber,
        toCall: toCall
      });
    }
  }, {
    key: 'controlCall',
    value: function controlCall(action, id) {
      this._postMessage({
        type: 'rc-adapter-control-call',
        callAction: action,
        callId: id
      });
    }
  }, {
    key: 'logoutUser',
    value: function logoutUser() {
      this._postMessage({
        type: 'rc-adapter-logout'
      });
    }
  }]);
  return Adapter;
}(_AdapterCore3.default);

exports.default = Adapter;

/***/ }),

/***/ 4001:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _defineProperty2 = __webpack_require__(71);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _classnames = __webpack_require__(13);

var _classnames2 = _interopRequireDefault(_classnames);

var _Enum = __webpack_require__(12);

var _ensureExist = __webpack_require__(33);

var _ensureExist2 = _interopRequireDefault(_ensureExist);

var _debounce = __webpack_require__(192);

var _debounce2 = _interopRequireDefault(_debounce);

var _formatDuration = __webpack_require__(224);

var _formatDuration2 = _interopRequireDefault(_formatDuration);

var _baseMessageTypes = __webpack_require__(319);

var _baseMessageTypes2 = _interopRequireDefault(_baseMessageTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SANDBOX_ATTRIBUTE_VALUE = ['allow-same-origin', 'allow-scripts', 'allow-forms', 'allow-popups'].join(' ');

// chrome 63 mandate the declaration of this attribute for getUserMedia to work in iframes
var ALLOW_ATTRIBUTE_VALUE = ['microphone'].join(' ');

var ON_HOLD_CALLS = 0;
var RINGING_CALLS = 1;
var CURRENT_CALL = 2;

var ROTATE_LENGTH = 3;
var ROTATE_INTERVAL = 5000;

var AdapterCore = function () {
  function AdapterCore(_ref) {
    var _this = this;

    var prefix = _ref.prefix,
        styles = _ref.styles,
        container = _ref.container,
        _ref$root = _ref.root,
        root = _ref$root === undefined ? container : _ref$root,
        _ref$messageTypes = _ref.messageTypes,
        messageTypes = _ref$messageTypes === undefined ? _baseMessageTypes2.default : _ref$messageTypes,
        _ref$defaultDirection = _ref.defaultDirection,
        defaultDirection = _ref$defaultDirection === undefined ? 'left' : _ref$defaultDirection,
        _ref$defaultPadding = _ref.defaultPadding,
        defaultPadding = _ref$defaultPadding === undefined ? 15 : _ref$defaultPadding;
    (0, _classCallCheck3.default)(this, AdapterCore);

    this._onWindowResize = function () {
      if (_this._dragging) {
        return;
      }
      if (_this._resizeTimeout) {
        clearTimeout(_this._resizeTimeout);
      }
      _this._resizeTimeout = setTimeout(function () {
        return _this._renderRestrictedPosition();
      }, 100);
      if (!_this._resizeTick || Date.now() - _this._resizeTick > 50) {
        _this._resizeTick = Date.now();
        _this._renderRestrictedPosition();
      }
    };

    this._onWindowMouseMove = function (e) {
      if (_this._dragging) {
        if (e.buttons === 0) {
          _this._dragging = false;
          _this._renderMainClass();
          return;
        }
        var factor = _this._calculateFactor();
        var delta = {
          x: e.clientX - _this._dragStartPosition.x,
          y: e.clientY - _this._dragStartPosition.y
        };
        if (_this._minimized) {
          _this._minTranslateX = _this._dragStartPosition.minTranslateX + delta.x * factor;
          _this._minTranslateY = _this._dragStartPosition.minTranslateY + delta.y;
        } else {
          _this._translateX = _this._dragStartPosition.translateX + delta.x * factor;
          _this._translateY = _this._dragStartPosition.translateY + delta.y;
        }
        if (delta.x !== 0 || delta.y !== 0) _this._isClick = false;
        _this._syncPosition();
        _this._renderRestrictedPosition();
      }
    };

    this._debouncedPostMessage = (0, _debounce2.default)(this._postMessage, 100);

    this._prefix = prefix;
    this._messageTypes = (0, _Enum.prefixEnum)({ enumMap: messageTypes, prefix: prefix });
    this._container = _ensureExist2.default.call(this, container, 'container');
    this._root = root;
    this._styles = styles;
    this._defaultDirection = defaultDirection;

    this._padding = defaultPadding;
    this._minTranslateX = 0;
    this._minTranslateY = 0;
    this._translateX = 0;
    this._translateY = 0;
    this._appWidth = 0;
    this._appHeight = 0;
    this._dragStartPosition = null;

    this._closed = true;
    this._minimized = true;
    this._dragging = false;
    this._hover = false;
    this._hoverHeader = false;
    this._loading = true;
    this._userStatus = null;
    this._dndStatus = null;
    this._telephonyStatus = null;

    this.currentState = -1;
    this._scrollale = false;
  }

  (0, _createClass3.default)(AdapterCore, [{
    key: '_onMessage',
    value: function _onMessage(msg) {
      if (msg) {
        switch (msg.type) {
          case this._messageTypes.syncClosed:
            this._onSyncClosed(msg.closed);
            break;
          case this._messageTypes.syncMinimized:
            this._onSyncMinimized(msg.minimized);
            break;
          case this._messageTypes.syncSize:
            this._onSyncSize(msg.size);
            break;
          case this._messageTypes.syncPresence:
            this._onPushPresence(msg);
            break;
          case this._messageTypes.pushAdapterState:
            this._onPushAdapterState(msg);
            break;
          case this._messageTypes.pushLocale:
            this._onPushLocale(msg);
            break;
          case this._messageTypes.pushRingState:
            this._onPushRingState(msg);
            break;
          case this._messageTypes.pushCalls:
            this._onPushCalls(msg);
            break;
          case this._messageTypes.pushOnCurrentCallPath:
            this._onPushOnCurrentCallPath(msg);
            break;
          case this._messageTypes.pushOnAllCallsPath:
            this._onPushOnAllCallsPath(msg);
            break;
          default:
            break;
        }
      }
    }
  }, {
    key: '_getContentDOM',
    value: function _getContentDOM(sanboxAttributeValue, allowAttributeValue) {
      return '\n      <header class="' + this._styles.header + '" draggable="false">\n        <div class="' + this._styles.presence + ' ' + this._styles.NoPresence + '">\n          <div class="' + this._styles.presenceBar + '">\n          </div>\n        </div>\n        <div class="' + this._styles.button + ' ' + this._styles.toggle + '">\n          <div class="' + this._styles.minimizeIcon + '">\n            <div class="' + this._styles.minimizeIconBar + '"></div>\n          </div>\n        </div>\n        <div class="' + this._styles.button + ' ' + this._styles.close + '">\n          <div class="' + this._styles.closeIcon + '">\n            <div></div><div></div>\n          </div>\n        </div>\n        <img class="' + this._styles.logo + '" draggable="false"></img>\n        <div class="' + this._styles.duration + '"></div>\n        <div class="' + this._styles.ringingCalls + '"></div>\n        <div class="' + this._styles.onHoldCalls + '"></div>\n        <div class="' + this._styles.currentCallBtn + '">' + this._strings.currentCall + '</div>\n        <div class="' + this._styles.viewCallsBtn + '">' + this._strings.viewCalls + '</div>\n      </header>\n      <div class="' + this._styles.frameContainer + '">\n        <iframe class="' + this._styles.contentFrame + '" sandbox="' + sanboxAttributeValue + '" allow="' + allowAttributeValue + '" >\n        </iframe>\n      </div>';
    }
  }, {
    key: '_generateContentDOM',
    value: function _generateContentDOM() {
      var _this2 = this;

      this._root.innerHTML = this._getContentDOM(SANDBOX_ATTRIBUTE_VALUE, ALLOW_ATTRIBUTE_VALUE);
      this._headerEl = this._root.querySelector('.' + this._styles.header);
      this._logoEl = this._root.querySelector('.' + this._styles.logo);
      this._logoEl.addEventListener('dragstart', function () {
        return false;
      });

      this._contentFrameContainerEl = this._root.querySelector('.' + this._styles.frameContainer);

      // toggle button
      this._toggleEl = this._root.querySelector('.' + this._styles.toggle);
      this._toggleEl.addEventListener('click', function (evt) {
        evt.stopPropagation();
        _this2.toggleMinimized();
      });

      // close button
      this._closeEl = this._root.querySelector('.' + this._styles.close);

      if (this._closeEl) {
        this._closeEl.addEventListener('click', function () {
          _this2.setClosed(true);
        });
      }

      this._presenceEl = this._root.querySelector('.' + this._styles.presence);
      this._presenceEl.addEventListener('click', function (evt) {
        evt.stopPropagation();
        _this2._postMessage({
          type: _this2._messageTypes.presenceClicked
        });
      });
      this._contentFrameEl = this._root.querySelector('.' + this._styles.contentFrame);

      this._durationEl = this._root.querySelector('.' + this._styles.duration);

      this._durationEl.addEventListener('click', function (evt) {
        evt.stopPropagation();
        _this2._postMessage({
          type: _this2._messageTypes.navigateToCurrentCall
        });
      });

      this._currentCallEl = this._root.querySelector('.' + this._styles.currentCallBtn);
      this._currentCallEl.addEventListener('click', function (evt) {
        evt.stopPropagation();
        _this2._postMessage({
          type: _this2._messageTypes.navigateToCurrentCall
        });
      });

      this._viewCallsEl = this._root.querySelector('.' + this._styles.viewCallsBtn);
      this._viewCallsEl.addEventListener('click', function (evt) {
        evt.stopPropagation();
        _this2._postMessage({
          type: _this2._messageTypes.navigateToViewCalls
        });
      });

      this._ringingCallsEl = this._root.querySelector('.' + this._styles.ringingCalls);

      this._onHoldCallsEl = this._root.querySelector('.' + this._styles.onHoldCalls);

      this._headerEl.addEventListener('mousedown', function (e) {
        _this2._dragging = true;
        _this2._isClick = true;
        _this2._dragStartPosition = {
          x: e.clientX,
          y: e.clientY,
          translateX: _this2._translateX,
          translateY: _this2._translateY,
          minTranslateX: _this2._minTranslateX,
          minTranslateY: _this2._minTranslateY
        };
        _this2._renderMainClass();
      });
      this._headerEl.addEventListener('mouseup', function () {
        _this2._dragging = false;
        _this2._renderMainClass();
      });
      window.addEventListener('mousemove', this._onWindowMouseMove);

      this._headerEl.addEventListener('mouseenter', function () {
        if (!_this2._minimized) {
          if (_this2._currentStartTime > 0) {
            _this2._hoverBar = true;
            _this2._scrollable = false;
            _this2._renderCallsBar();
          }
          return;
        }
        _this2._hoverHeader = true;
        _this2._renderMainClass();
      });
      this._headerEl.addEventListener('mouseleave', function () {
        _this2._hoverHeader = false;
        _this2._hoverBar = false;
        _this2._scrollable = false;
        _this2._renderCallsBar();
        _this2._renderMainClass();
      });

      this._isClick = true;
      this._headerEl.addEventListener('click', function (evt) {
        if (!_this2._isClick) return;
        _this2._onHeaderClicked(evt);
      });

      this._resizeTimeout = null;
      this._resizeTick = null;
      window.addEventListener('resize', this._onWindowResize);

      // hover detection for ie
      this._container.addEventListener('mouseenter', function () {
        _this2._hover = true;
        _this2._renderMainClass();
      });
      this._container.addEventListener('mouseleave', function () {
        _this2._hover = false;
        _this2._renderMainClass();
      });
      if (document.readyState === 'loading') {
        window.addEventListener('load', function () {
          document.body.appendChild(_this2._container);
        });
      } else {
        document.body.appendChild(this._container);
      }

      if (typeof this._beforeRender === 'function') {
        this._beforeRender();
      }
      this._render();
    }
  }, {
    key: '_postMessage',
    value: function _postMessage(data) {
      this.messageTransport.postMessage(data);
    }
  }, {
    key: '_setLogoUrl',
    value: function _setLogoUrl(logoUrl) {
      this._logoUrl = logoUrl;
      this._logoEl.src = logoUrl;
      this._logoEl.setAttribute('class', (0, _classnames2.default)(this._styles.logo, this._logoUrl && this._logoUrl !== '' && this._styles.visible));
    }
  }, {
    key: '_setAppUrl',
    value: function _setAppUrl(appUrl) {
      this._appUrl = appUrl;
      if (appUrl) {
        this.contentFrameEl.src = appUrl;
      }
    }
  }, {
    key: '_onSyncMinimized',
    value: function _onSyncMinimized(minimized) {
      this._minimized = !!minimized;
      this._renderMainClass();
      this.renderAdapterSize();
      this._renderRestrictedPosition();
    }
  }, {
    key: 'setMinimized',
    value: function setMinimized(minimized) {
      this._onSyncMinimized(minimized);
      this._postMessage({
        type: this._messageTypes.syncMinimized,
        minimized: this._minimized
      });
    }
  }, {
    key: 'toggleMinimized',
    value: function toggleMinimized() {
      this.setMinimized(!this._minimized);
    }
  }, {
    key: '_calculateMinMaxPosition',
    value: function _calculateMinMaxPosition() {
      var maximumX = window.innerWidth - (this._minimized ? this._headerEl.clientWidth : this._appWidth) - 2 * this._padding;
      var maximumY = window.innerHeight - (this._minimized ? this._headerEl.clientHeight : this._headerEl.clientHeight + this._appHeight) - this._padding;
      return {
        minimumX: this._padding,
        minimumY: this._padding,
        maximumX: maximumX,
        maximumY: maximumY
      };
    }
  }, {
    key: '_onSyncClosed',
    value: function _onSyncClosed(closed) {
      this._closed = !!closed;
      this._renderMainClass();
    }
  }, {
    key: 'setClosed',
    value: function setClosed(closed) {
      this._onSyncClosed(closed);
      this._postMessage({
        type: this._messageTypes.syncClosed,
        closed: this.closed
      });
    }
  }, {
    key: 'toggleClosed',
    value: function toggleClosed() {
      this.setClosed(!this.closed);
    }
  }, {
    key: '_onSyncSize',
    value: function _onSyncSize(_ref2) {
      var width = _ref2.width,
          height = _ref2.height;

      this._appWidth = width;
      this._appHeight = height;
      this._contentFrameEl.style.width = width + 'px';
      this._contentFrameEl.style.height = height + 'px';
      this.renderAdapterSize();
    }
  }, {
    key: 'setSize',
    value: function setSize(size) {
      this._onSyncSize(size);
      this._postMessage({
        type: this._messageTypes.syncSize,
        size: size
      });
    }
  }, {
    key: '_onPushRingState',
    value: function _onPushRingState(_ref3) {
      var ringing = _ref3.ringing;

      this._ringing = ringing;
      this._render();
    }
  }, {
    key: '_onPushCalls',
    value: function _onPushCalls(_ref4) {
      var ringingCallsLength = _ref4.ringingCallsLength,
          onHoldCallsLength = _ref4.onHoldCallsLength,
          currentStartTime = _ref4.currentStartTime;

      this._currentStartTime = currentStartTime;
      this._ringingCallsLength = ringingCallsLength;
      this._onHoldCallsLength = onHoldCallsLength;
      this._hasActiveCalls = this._currentStartTime > 0 || this._ringingCallsLength > 0 || this._onHoldCallsLength > 0;
      this.renderCallsBar();
    }
  }, {
    key: '_onPushOnCurrentCallPath',
    value: function _onPushOnCurrentCallPath(_ref5) {
      var onCurrentCallPath = _ref5.onCurrentCallPath;

      this._onCurrentCallPath = onCurrentCallPath;
      this._render();
    }
  }, {
    key: '_onPushOnAllCallsPath',
    value: function _onPushOnAllCallsPath(_ref6) {
      var onAllCallsPath = _ref6.onAllCallsPath;

      this._onAllCallsPath = onAllCallsPath;
      this._render();
    }
  }, {
    key: '_onPushPresence',
    value: function _onPushPresence(_ref7) {
      var dndStatus = _ref7.dndStatus,
          userStatus = _ref7.userStatus,
          telephonyStatus = _ref7.telephonyStatus;

      if (dndStatus !== this._dndStatus || userStatus !== this._userStatus || telephonyStatus !== this._telephonyStatus) {
        this._dndStatus = dndStatus;
        this._userStatus = userStatus;
        this._telephonyStatus = telephonyStatus;
        this.renderPresence();
      }
    }
  }, {
    key: '_onPushLocale',
    value: function _onPushLocale(_ref8) {
      var locale = _ref8.locale,
          _ref8$strings = _ref8.strings,
          strings = _ref8$strings === undefined ? {} : _ref8$strings;

      this._locale = locale;
      this._strings = strings;
      this._renderString();
    }
  }, {
    key: '_renderString',
    value: function _renderString() {
      this._renderCallBarBtn();
      this._renderRingingCalls();
      this._renderOnHoldCalls();
    }
  }, {
    key: '_syncPosition',
    value: function _syncPosition() {
      this._debouncedPostMessage.call(this, {
        type: this._messageTypes.syncPosition,
        position: {
          translateX: this._translateX,
          translateY: this._translateY,
          minTranslateX: this._minTranslateX,
          minTranslateY: this._minTranslateY
        }
      });
    }
  }, {
    key: '_onPushAdapterState',
    value: function _onPushAdapterState(_ref9) {
      var _ref9$size = _ref9.size,
          width = _ref9$size.width,
          height = _ref9$size.height,
          minimized = _ref9.minimized,
          closed = _ref9.closed,
          _ref9$position = _ref9.position,
          translateX = _ref9$position.translateX,
          translateY = _ref9$position.translateY,
          minTranslateX = _ref9$position.minTranslateX,
          minTranslateY = _ref9$position.minTranslateY,
          dndStatus = _ref9.dndStatus,
          userStatus = _ref9.userStatus,
          telephonyStatus = _ref9.telephonyStatus;

      this._minimized = minimized;
      this._closed = closed;
      if (!this._dragging) {
        this._translateX = translateX;
        this._translateY = translateY;
        this._minTranslateX = minTranslateX;
        this._minTranslateY = minTranslateY;
      }
      this._appWidth = width;
      this._appHeight = height;
      this._dndStatus = dndStatus;
      this._userStatus = userStatus;
      this._telephonyStatus = telephonyStatus;
      this._loading = false;
      this._render();
    }
  }, {
    key: '_calculateFactor',
    value: function _calculateFactor() {
      return this._defaultDirection === 'right' ? -1 : 1;
    }
  }, {
    key: 'renderPosition',
    value: function renderPosition() {
      var factor = this._calculateFactor();
      if (this._minimized) {
        this._container.setAttribute('style', 'transform: translate( ' + this._minTranslateX * factor + 'px, ' + -this._padding + 'px)!important;');
      } else {
        this._container.setAttribute('style', 'transform: translate( ' + this._translateX * factor + 'px, ' + this._translateY + 'px)!important;');
      }
    }
  }, {
    key: '_renderRestrictedPosition',
    value: function _renderRestrictedPosition() {
      var _calculateMinMaxPosit = this._calculateMinMaxPosition(),
          minimumX = _calculateMinMaxPosit.minimumX,
          minimumY = _calculateMinMaxPosit.minimumY,
          maximumX = _calculateMinMaxPosit.maximumX,
          maximumY = _calculateMinMaxPosit.maximumY;

      if (this._minimized) {
        var newMinTranslateX = Math.max(Math.min(this._minTranslateX, maximumX), minimumX);
        if (newMinTranslateX !== this._minTranslateX) {
          this._minTranslateX = newMinTranslateX;
        }
        var newMinTranslateY = Math.max(Math.min(this._minTranslateY, -minimumY), -maximumY);
        if (newMinTranslateY !== this._minTranslateY) {
          this._minTranslateY = newMinTranslateY;
        }
      } else {
        var newTranslateX = Math.max(Math.min(this._translateX, maximumX), minimumX);
        var newTranslateY = Math.max(Math.min(this._translateY, -minimumY), -maximumY);
        if (this._translateX !== newTranslateX || this._translateY !== newTranslateY) {
          this._translateX = newTranslateX;
          this._translateY = newTranslateY;
        }
      }
      this.renderPosition();
    }
  }, {
    key: 'renderAdapterSize',
    value: function renderAdapterSize() {
      if (this._minimized) {
        this._contentFrameContainerEl.style.width = 0;
        this._contentFrameContainerEl.style.height = 0;
      } else {
        this._contentFrameContainerEl.style.width = this._appWidth + 'px';
        this._contentFrameContainerEl.style.height = this._appHeight + 'px';
        this._contentFrameEl.style.width = this._appWidth + 'px';
        this._contentFrameEl.style.height = this._appHeight + 'px';
      }
    }
  }, {
    key: '_renderMainClass',
    value: function _renderMainClass() {
      this._container.setAttribute('class', (0, _classnames2.default)(this._styles.root, this._styles[this._defaultDirection], this._closed && this._styles.closed, this._minimized && this._styles.minimized, this._dragging && this._styles.dragging, this._hover && this._styles.hover, this._loading && this._styles.loading));
      this._headerEl.setAttribute('class', (0, _classnames2.default)(this._styles.header, this._minimized && this._styles.minimized, this._ringing && this._styles.ringing));
    }
  }, {
    key: 'renderPresence',
    value: function renderPresence() {
      this._presenceEl.setAttribute('class', (0, _classnames2.default)(this._minimized && this._styles.minimized, this._styles.presence, this._userStatus && this._styles[this._userStatus], this._dndStatus && this._styles[this._dndStatus]));
    }
  }, {
    key: 'calculateState',
    value: function calculateState() {
      var startTime = this._currentStartTime;
      return Math.round((new Date().getTime() - startTime) / 1000);
    }
  }, {
    key: 'renderCallsBar',
    value: function renderCallsBar() {
      var _callInfoMap,
          _this3 = this;

      // should clean up rotate duration when call info changed
      if (this.rotateInterval) {
        clearInterval(this.rotateInterval);
        this.rotateInterval = null;
      }
      // when there is no call
      if (!this._hasActiveCalls) {
        this.currentState = -1;
        this._scrollable = false;
        this._hoverBar = false;
        if (this.durationInterval) {
          clearInterval(this.durationInterval);
          this.durationInterval = null;
        }
        this._renderCallsBar();
        return;
      }
      // when there is only one active call, only need to display call duration
      if (this._currentStartTime > 0 && this._ringingCallsLength === 0 && this._onHoldCallsLength === 0) {
        this.currentState = CURRENT_CALL;
        this._scrollable = false;
        this._renderCallDuration();
        this._renderCallsBar();
        return;
      }
      // when there are only ringing calls(no onhold or active calls)
      // only need to display incoming call inco
      if (this._currentStartTime === 0 && this._ringingCallsLength > 0) {
        this.currentState = RINGING_CALLS;
        this._scrollable = false;
        this._hoverBar = false;
        if (this.durationInterval) {
          clearInterval(this.durationInterval);
          this.durationInterval = null;
        }
        this._renderRingingCalls();
        this._renderCallsBar();
        return;
      }
      this.callInfoMap = (_callInfoMap = {}, (0, _defineProperty3.default)(_callInfoMap, CURRENT_CALL, this._currentStartTime > 0), (0, _defineProperty3.default)(_callInfoMap, RINGING_CALLS, this._ringingCallsLength > 0), (0, _defineProperty3.default)(_callInfoMap, ON_HOLD_CALLS, this._onHoldCallsLength > 0), _callInfoMap);
      // when multiple calls, should scroll with call info
      this.rotateCallInfo();
      this.rotateInterval = setInterval(function () {
        _this3.rotateCallInfo();
      }, ROTATE_INTERVAL);
    }
  }, {
    key: 'rotateCallInfo',
    value: function rotateCallInfo() {
      if (this._hoverBar && this.callInfoMap[this.currentState]) {
        return;
      }
      this.lastState = this.currentState;
      this.currentState = this.increment(this.currentState);
      while (!this.callInfoMap[this.currentState]) {
        this.currentState = this.increment(this.currentState);
      }
      switch (this.currentState) {
        case ON_HOLD_CALLS:
          this._renderOnHoldCalls();
          break;
        case RINGING_CALLS:
          this._renderRingingCalls();
          break;
        case CURRENT_CALL:
          this._renderCallDuration();
          break;
        default:
          break;
      }
      this._scrollable = true;
      this._renderCallsBar();
      this._scrollable = false;
    }
  }, {
    key: 'increment',
    value: function increment(state) {
      var newState = state + 1;
      if (state >= ROTATE_LENGTH - 1) {
        return 0;
      }
      return newState;
    }
  }, {
    key: '_renderCallsBar',
    value: function _renderCallsBar() {
      if (this._minimized) {
        this._logoEl.setAttribute('class', (0, _classnames2.default)(this._styles.logo, this._logoUrl && this._logoUrl !== '' && this._styles.visible));
        this._durationEl.setAttribute('class', (0, _classnames2.default)(this._styles.duration));
        this._ringingCallsEl.setAttribute('class', (0, _classnames2.default)(this._styles.ringingCalls));
        this._onHoldCallsEl.setAttribute('class', (0, _classnames2.default)(this._styles.onHoldCalls));
        this._currentCallEl.setAttribute('class', (0, _classnames2.default)(this._styles.currentCallBtn));
        this._viewCallsEl.setAttribute('class', (0, _classnames2.default)(this._styles.viewCallsBtn));
        return;
      }
      this._logoEl.setAttribute('class', (0, _classnames2.default)(this._styles.logo, !this._hasActiveCalls && this._logoUrl && this._logoUrl !== '' && this._styles.visible));
      this._durationEl.setAttribute('class', (0, _classnames2.default)(this._styles.duration, !this._scrollable && this.showDuration && this._styles.visible, this._onCurrentCallPath && this._styles.center, this.moveOutDuration && this._styles.moveOut, this.moveInDuration && this._styles.moveIn));
      this._ringingCallsEl.setAttribute('class', (0, _classnames2.default)(this._styles.ringingCalls, !this._scrollable && this.showRingingCalls && this._styles.visible, this._onAllCallsPath && this._styles.center, this.moveOutRingingInfo && this._styles.moveOut, this.moveInRingingInfo && this._styles.moveIn));
      this._onHoldCallsEl.setAttribute('class', (0, _classnames2.default)(this._styles.onHoldCalls, !this._scrollable && this.showOnHoldCalls && this._styles.visible, this._onAllCallsPath && this._styles.center, this.moveOutOnHoldInfo && this._styles.moveOut, this.moveInOnHoldInfo && this._styles.moveIn));
      this._currentCallEl.setAttribute('class', (0, _classnames2.default)(this._styles.currentCallBtn, !this._scrollable && this.showCurrentCallBtn && this._styles.visible, this.moveOutCurrentCallBtn && this._styles.moveOut, this.moveInCurrentCallBtn && this._styles.moveIn));
      this._viewCallsEl.setAttribute('class', (0, _classnames2.default)(this._styles.viewCallsBtn, !this._scrollable && this.showViewCallsBtn && this._styles.visible, !this.moveInViewCallsBtn && this.moveOutViewCallsBtn && this._styles.moveOut, this.moveInViewCallsBtn && this._styles.moveIn));
    }
  }, {
    key: '_renderCallDuration',
    value: function _renderCallDuration() {
      var _this4 = this;

      if (this.durationInterval) {
        clearInterval(this.durationInterval);
        this.durationInterval = null;
      }
      var duration = (0, _formatDuration2.default)(this.calculateState());
      this._durationEl.innerHTML = duration;
      this.durationInterval = setInterval(function () {
        var duration = (0, _formatDuration2.default)(_this4.calculateState());
        _this4._durationEl.innerHTML = duration;
      }, 1000);
    }
  }, {
    key: '_renderRingingCalls',
    value: function _renderRingingCalls() {
      if (!this._ringingCallsLength) {
        return;
      }
      this._ringingCallsEl.innerHTML = this._strings.ringCallsInfo;
      this._ringingCallsEl.title = this._strings.ringCallsInfo;
    }
  }, {
    key: '_renderOnHoldCalls',
    value: function _renderOnHoldCalls() {
      if (!this._onHoldCallsLength) {
        return;
      }
      this._onHoldCallsEl.innerHTML = this._strings.onHoldCallsInfo;
      this._onHoldCallsEl.title = this._strings.onHoldCallsInfo;
    }
  }, {
    key: '_renderCallBarBtn',
    value: function _renderCallBarBtn() {
      this._currentCallEl.innerHTML = this._strings.currentCall;
      this._viewCallsEl.innerHTML = this._strings.viewCalls;
    }
  }, {
    key: '_render',
    value: function _render() {
      this.renderPresence();
      this.renderAdapterSize();
      this._renderRestrictedPosition();
      this._renderMainClass();
      this._renderCallsBar();
    }
  }, {
    key: 'dispose',
    value: function dispose() {
      // TODO clean up
      window.removeEventListener('mousemove', this._onWindowMouseMove);
      window.removeEventListener('resize', this._onWindowResize);
      if (this._resizeTimeout) {
        clearTimeout(this._resizeTick);
      }
      this._container.remove();
    }
  }, {
    key: 'messageTransport',
    get: function get() {
      return this._messageTransport;
    }
  }, {
    key: 'container',
    get: function get() {
      return this._container;
    }
  }, {
    key: 'root',
    get: function get() {
      return this._root;
    }
  }, {
    key: 'headerEl',
    get: function get() {
      return this._headerEl;
    }
  }, {
    key: 'contentFrameContainerEl',
    get: function get() {
      return this._contentFrameContainerEl;
    }
  }, {
    key: 'toggleEl',
    get: function get() {
      return this._toggleEl;
    }
  }, {
    key: 'closeEl',
    get: function get() {
      return this._closeEl;
    }
  }, {
    key: 'presenceEl',
    get: function get() {
      return this._presenceEl;
    }
  }, {
    key: 'contentFrameEl',
    get: function get() {
      return this._contentFrameEl;
    }
  }, {
    key: 'minTranslateX',
    get: function get() {
      return this._minTranslateX;
    }
  }, {
    key: 'minTranslateY',
    get: function get() {
      return this._minTranslateY;
    }
  }, {
    key: 'translateX',
    get: function get() {
      return this._translateX;
    }
  }, {
    key: 'translateY',
    get: function get() {
      return this._translateY;
    }
  }, {
    key: 'appWidth',
    get: function get() {
      return this._appWidth;
    }
  }, {
    key: 'appHeight',
    get: function get() {
      return this._appHeight;
    }
  }, {
    key: 'dragStartPosition',
    get: function get() {
      return this._dragStartPosition;
    }
  }, {
    key: 'closed',
    get: function get() {
      return this._closed;
    }
  }, {
    key: 'minimized',
    get: function get() {
      return this._minimized;
    }
  }, {
    key: 'dragging',
    get: function get() {
      return this._dragging;
    }
  }, {
    key: 'hover',
    get: function get() {
      return this._hover;
    }
  }, {
    key: 'loading',
    get: function get() {
      return this._loading;
    }
  }, {
    key: 'userStatus',
    get: function get() {
      return this._userStatus;
    }
  }, {
    key: 'dndStatus',
    get: function get() {
      return this._dndStatus;
    }
  }, {
    key: 'ringing',
    get: function get() {
      return this._ringing;
    }
  }, {
    key: 'showDuration',
    get: function get() {
      return this.currentState === CURRENT_CALL;
    }
  }, {
    key: 'showRingingCalls',
    get: function get() {
      return this.currentState === RINGING_CALLS;
    }
  }, {
    key: 'showOnHoldCalls',
    get: function get() {
      return this.currentState === ON_HOLD_CALLS;
    }
  }, {
    key: 'showCurrentCallBtn',
    get: function get() {
      return !this._onCurrentCallPath && this.showDuration;
    }
  }, {
    key: 'showViewCallsBtn',
    get: function get() {
      return !this._onAllCallsPath && (this.showOnHoldCalls || this.showRingingCalls);
    }
  }, {
    key: 'moveInDuration',
    get: function get() {
      return !this._hoverBar && this.showDuration && this._scrollable;
    }
  }, {
    key: 'moveOutDuration',
    get: function get() {
      return !this._hoverBar && this._scrollable && this.lastState === CURRENT_CALL;
    }
  }, {
    key: 'moveInRingingInfo',
    get: function get() {
      return !this._hoverBar && this.showRingingCalls && this._scrollable;
    }
  }, {
    key: 'moveOutRingingInfo',
    get: function get() {
      return !this._hoverBar && this._scrollable && this.lastState === RINGING_CALLS;
    }
  }, {
    key: 'moveInOnHoldInfo',
    get: function get() {
      return !this._hoverBar && this.showOnHoldCalls && this._scrollable;
    }
  }, {
    key: 'moveOutOnHoldInfo',
    get: function get() {
      return !this._hoverBar && this._scrollable && this.lastState === ON_HOLD_CALLS;
    }
  }, {
    key: 'moveInCurrentCallBtn',
    get: function get() {
      return !this._onCurrentCallPath && this.moveInDuration;
    }
  }, {
    key: 'moveOutCurrentCallBtn',
    get: function get() {
      return !this._onCurrentCallPath && this.moveOutDuration;
    }
  }, {
    key: 'moveInViewCallsBtn',
    get: function get() {
      return !this._onAllCallsPath && (this.moveInRingingInfo || this.moveInOnHoldInfo);
    }
  }, {
    key: 'moveOutViewCallsBtn',
    get: function get() {
      return !this._onAllCallsPath && (this.moveOutRingingInfo || this.moveOutOnHoldInfo);
    }
  }]);
  return AdapterCore;
}();

exports.default = AdapterCore;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 4002:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4003);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(9)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--7-1!../../../node_modules/postcss-loader/index.js??ref--7-2!../../../node_modules/sass-loader/lib/loader.js??ref--7-3!./styles.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js??ref--7-1!../../../node_modules/postcss-loader/index.js??ref--7-2!../../../node_modules/sass-loader/lib/loader.js??ref--7-3!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 4003:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(undefined);
// imports


// module
exports.push([module.i, ".Adapter_centerStyle, .Adapter_logo, .Adapter_presence, .Adapter_button {\n  top: 50%;\n  position: absolute;\n}\n\n.Adapter_root {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  user-drag: none;\n  box-sizing: border-box;\n  padding: 0;\n  border-radius: 3px;\n  position: fixed;\n  display: block;\n  visibility: visible;\n  bottom: 0;\n  background-color: #f3f3f3;\n  transition: visibility 0.2s 0s linear, opacity 0.2s 0s linear, -webkit-transform 0.1s 0s ease-in-out;\n  transition: visibility 0.2s 0s linear, opacity 0.2s 0s linear, transform 0.1s 0s ease-in-out;\n  transition: visibility 0.2s 0s linear, opacity 0.2s 0s linear, transform 0.1s 0s ease-in-out, -webkit-transform 0.1s 0s ease-in-out;\n  z-index: 99999;\n  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.18);\n  overflow: hidden;\n}\n\n.Adapter_root.Adapter_left {\n  left: 0;\n}\n\n.Adapter_root.Adapter_right {\n  right: 0;\n}\n\n.Adapter_root.Adapter_left {\n  left: 0;\n}\n\n.Adapter_root.Adapter_right {\n  right: 0;\n}\n\n.Adapter_root.Adapter_left {\n  left: 0;\n}\n\n.Adapter_root.Adapter_right {\n  right: 0;\n}\n\n.Adapter_root.Adapter_dragging {\n  transition: opacity 0.1s 0s linear;\n}\n\n.Adapter_root.Adapter_closed {\n  visibility: hidden;\n  opacity: 0;\n}\n\n.Adapter_root.Adapter_loading {\n  display: none;\n}\n\n.Adapter_header {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  user-drag: none;\n  position: relative;\n  height: 35px;\n  line-height: 35px;\n  min-width: 165px;\n  text-align: center;\n  cursor: move;\n  z-index: 11;\n  overflow: hidden;\n  font-family: Helvetica;\n  font-weight: normal;\n}\n\n.Adapter_minimized.Adapter_header {\n  cursor: ew-resize;\n}\n\n.Adapter_logo {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  user-drag: none;\n  left: 50%;\n  height: 16px;\n  width: 100px;\n  margin-top: -8px;\n  margin-left: -50px;\n  display: none;\n}\n\n.Adapter_logo.Adapter_visible {\n  display: inline-block;\n}\n\n.Adapter_presence {\n  left: 20px;\n  height: 14px;\n  width: 14px;\n  border-radius: 8px;\n  margin-top: -7px;\n  display: none;\n  cursor: pointer;\n}\n\n.Adapter_minimized .Adapter_presence {\n  left: 10px;\n}\n\n.Adapter_Offline {\n  display: block;\n  background: #cdcdcd;\n}\n\n.Adapter_Busy {\n  display: block;\n  background: #f95b5c;\n}\n\n.Adapter_Available {\n  display: block;\n  background-color: #32ae31;\n}\n\n.Adapter_presenceBar {\n  display: none;\n  position: absolute;\n  width: 8px;\n  height: 2px;\n  border-radius: 1.5px;\n  background-color: #ffffff;\n  -webkit-transform-origin: 50% 50%;\n          transform-origin: 50% 50%;\n  -webkit-transform: translate(3px, 6px);\n          transform: translate(3px, 6px);\n}\n\n.Adapter_DoNotAcceptAnyCalls {\n  display: block;\n  background: #f95b5c;\n}\n\n.Adapter_DoNotAcceptAnyCalls .Adapter_presenceBar {\n  display: block;\n}\n\n.Adapter_button {\n  box-sizing: border-box;\n  height: 20px;\n  width: 20px;\n  margin-top: -12px;\n  border-radius: 3px;\n  cursor: pointer;\n  border-style: solid;\n  border-width: 1px;\n  border-color: transparent;\n}\n\n.Adapter_button:hover {\n  border-color: #cccccc;\n}\n\n.Adapter_toggle {\n  right: 40px;\n}\n\n.Adapter_minimized .Adapter_toggle {\n  right: 3px;\n}\n\n.Adapter_minimizeIcon {\n  position: absolute;\n  box-sizing: border-box;\n  left: 3px;\n  bottom: 7px;\n  width: 12px;\n  height: 2px;\n  border: 1px solid #888888;\n}\n\n.Adapter_minimized .Adapter_minimizeIcon {\n  height: 12px;\n  bottom: 3px;\n}\n\n.Adapter_minimizeIconBar {\n  width: 100%;\n  height: 1px;\n  background-color: #888888;\n}\n\n.Adapter_close {\n  right: 16px;\n}\n\n.Adapter_minimized .Adapter_close {\n  display: none;\n}\n\n.Adapter_closeIcon {\n  position: relative;\n  overflow: hidden;\n  margin: 2px;\n  width: 14px;\n  height: 14px;\n}\n\n.Adapter_closeIcon :first-child, .Adapter_closeIcon :last-child {\n  position: absolute;\n  height: 2px;\n  width: 100%;\n  top: 6px;\n  left: 0;\n  background: #888888;\n  border-radius: 1px;\n}\n\n.Adapter_closeIcon :first-child {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n\n.Adapter_closeIcon :last-child {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n\n.Adapter_contentFrame {\n  display: block;\n  border: none;\n  width: 0;\n  height: 0;\n}\n\n.Adapter_frameContainer {\n  overflow: hidden;\n  transition: width 0.1s 0s ease-in-out, height 0.1s 0s ease-in-out;\n}\n\n@-webkit-keyframes Adapter_glow {\n  0% {\n    box-shadow: inset 0 0 7px -10px #0684bd;\n  }\n  40%, 50% {\n    box-shadow: inset 0 0 7px 0px #0684bd;\n  }\n  100% {\n    box-shadow: inset 0 0 7px -10px #0684bd;\n  }\n}\n\n@keyframes Adapter_glow {\n  0% {\n    box-shadow: inset 0 0 7px -10px #0684bd;\n  }\n  40%, 50% {\n    box-shadow: inset 0 0 7px 0px #0684bd;\n  }\n  100% {\n    box-shadow: inset 0 0 7px -10px #0684bd;\n  }\n}\n\n.Adapter_minimized.Adapter_ringing {\n  -webkit-animation-name: Adapter_glow;\n          animation-name: Adapter_glow;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n@-webkit-keyframes Adapter_moveIn {\n  0% {\n    display: none;\n    top: -50%;\n  }\n  100% {\n    display: inline-block;\n    top: 50%;\n  }\n}\n\n@keyframes Adapter_moveIn {\n  0% {\n    display: none;\n    top: -50%;\n  }\n  100% {\n    display: inline-block;\n    top: 50%;\n  }\n}\n\n@-webkit-keyframes Adapter_moveOut {\n  0% {\n    display: inline-block;\n    top: 50%;\n  }\n  100% {\n    top: 150%;\n    display: none;\n  }\n}\n\n@keyframes Adapter_moveOut {\n  0% {\n    display: inline-block;\n    top: 50%;\n  }\n  100% {\n    top: 150%;\n    display: none;\n  }\n}\n\n.Adapter_moveIn {\n  -webkit-animation-name: Adapter_moveIn;\n          animation-name: Adapter_moveIn;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n\n.Adapter_moveOut {\n  -webkit-animation-name: Adapter_moveOut;\n          animation-name: Adapter_moveOut;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n\n.Adapter_duration.Adapter_visible, .Adapter_ringingCalls.Adapter_visible, .Adapter_onHoldCalls.Adapter_visible {\n  top: 50%;\n}\n\n.Adapter_duration {\n  position: absolute;\n  top: -50%;\n  left: 50%;\n  height: 16px;\n  line-height: 16px;\n  margin-top: -8px;\n  color: #666666;\n  font-size: 12px;\n  white-space: nowrap;\n  width: 33px;\n  margin-left: -60px;\n  cursor: pointer;\n}\n\n.Adapter_duration.Adapter_center {\n  margin-left: -16px;\n}\n\n.Adapter_ringingCalls, .Adapter_onHoldCalls {\n  position: absolute;\n  top: -50%;\n  left: 50%;\n  height: 16px;\n  line-height: 16px;\n  margin-top: -8px;\n  color: #666666;\n  font-size: 12px;\n  white-space: nowrap;\n  width: 100px;\n  margin-left: -100px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  text-align: center;\n}\n\n.Adapter_ringingCalls.Adapter_center, .Adapter_onHoldCalls.Adapter_center {\n  margin-left: -50px;\n}\n\n.Adapter_currentCallBtn {\n  position: absolute;\n  top: -50%;\n  left: 50%;\n  padding: 0 5px;\n  height: 18px;\n  line-height: 18px;\n  border-radius: 10.5px;\n  font-size: 11px;\n  margin-top: -10px;\n  margin-left: -13px;\n  overflow: hidden;\n  white-space: nowrap;\n  min-width: 66px;\n  max-width: 110px;\n  cursor: pointer;\n  border: solid 1px #5FB95C;\n  color: #5FB95C;\n}\n\n.Adapter_currentCallBtn.Adapter_visible {\n  display: inline-block;\n  margin-top: -10px;\n  top: 50%;\n}\n\n.Adapter_currentCallBtn:hover {\n  color: #5FB95C;\n}\n\n.Adapter_currentCallBtn.Adapter_left {\n  margin-left: -80px;\n}\n\n.Adapter_viewCallsBtn {\n  position: absolute;\n  top: -50%;\n  left: 50%;\n  padding: 0 5px;\n  height: 18px;\n  line-height: 18px;\n  border-radius: 10.5px;\n  font-size: 11px;\n  margin-top: -10px;\n  margin-left: -13px;\n  overflow: hidden;\n  white-space: nowrap;\n  min-width: 66px;\n  max-width: 110px;\n  cursor: pointer;\n  border: solid 1px #FF8800;\n  color: #FF8800;\n  margin-left: 0;\n}\n\n.Adapter_viewCallsBtn:hover {\n  color: #FF8800;\n}\n\n.Adapter_viewCallsBtn.Adapter_visible {\n  display: inline-block;\n  margin-top: -10px;\n  top: 50%;\n}\n\n.Adapter_hack {\n  background: url(\"https://{{rc-styles}}\");\n}\n\n.Adapter_root {\n  top: initial !important;\n}\n\n.Adapter_close {\n  display: none;\n}\n\n.Adapter_toggle {\n  right: 10px;\n}\n", ""]);

// exports
exports.locals = {
	"centerStyle": "Adapter_centerStyle",
	"logo": "Adapter_logo",
	"presence": "Adapter_presence",
	"button": "Adapter_button",
	"root": "Adapter_root",
	"left": "Adapter_left",
	"right": "Adapter_right",
	"dragging": "Adapter_dragging",
	"closed": "Adapter_closed",
	"loading": "Adapter_loading",
	"header": "Adapter_header",
	"minimized": "Adapter_minimized",
	"visible": "Adapter_visible",
	"Offline": "Adapter_Offline",
	"Busy": "Adapter_Busy",
	"Available": "Adapter_Available",
	"presenceBar": "Adapter_presenceBar",
	"DoNotAcceptAnyCalls": "Adapter_DoNotAcceptAnyCalls",
	"toggle": "Adapter_toggle",
	"minimizeIcon": "Adapter_minimizeIcon",
	"minimizeIconBar": "Adapter_minimizeIconBar",
	"close": "Adapter_close",
	"closeIcon": "Adapter_closeIcon",
	"contentFrame": "Adapter_contentFrame",
	"frameContainer": "Adapter_frameContainer",
	"ringing": "Adapter_ringing",
	"glow": "Adapter_glow",
	"moveIn": "Adapter_moveIn",
	"moveOut": "Adapter_moveOut",
	"duration": "Adapter_duration",
	"ringingCalls": "Adapter_ringingCalls",
	"onHoldCalls": "Adapter_onHoldCalls",
	"center": "Adapter_center",
	"currentCallBtn": "Adapter_currentCallBtn",
	"viewCallsBtn": "Adapter_viewCallsBtn",
	"hack": "Adapter_hack"
};

/***/ }),

/***/ 4004:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Notification = function () {
  function Notification() {
    (0, _classCallCheck3.default)(this, Notification);

    this._enableNotification = false;
    this._notification = null;
    this._checkOrRequirePermission();
  }

  (0, _createClass3.default)(Notification, [{
    key: '_checkOrRequirePermission',
    value: function _checkOrRequirePermission() {
      var _this = this;

      if (!this.nativeAPI) {
        console.log('This browser does not support system notifications.');
        return;
      }
      if (this.hasPermission) {
        this._enableNotification = true;
        return;
      }
      if (this.nativeAPI.permission !== 'denied') {
        this.nativeAPI.requestPermission(function () {
          if (_this.hasPermission) {
            _this._enableNotification = true;
          }
        });
      }
    }
  }, {
    key: 'notify',
    value: function notify(_ref) {
      var title = _ref.title,
          text = _ref.text,
          icon = _ref.icon,
          onClick = _ref.onClick;

      if (!this._enableNotification) {
        return;
      }
      var n = new window.Notification(title, { body: text, icon: icon });
      n.onclick = onClick;
    }
  }, {
    key: 'hasPermission',
    get: function get() {
      return this.nativeAPI.permission === 'granted';
    }
  }, {
    key: 'nativeAPI',
    get: function get() {
      return window.Notification;
    }
  }]);
  return Notification;
}();

exports.default = Notification;

/***/ }),

/***/ 42:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(279);
var formats = __webpack_require__(280);

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) { // eslint-disable-line func-name-matching
        return prefix + '[]';
    },
    indices: function indices(prefix, key) { // eslint-disable-line func-name-matching
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) { // eslint-disable-line func-name-matching
        return prefix;
    }
};

var toISO = Date.prototype.toISOString;

var defaults = {
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    serializeDate: function serializeDate(date) { // eslint-disable-line func-name-matching
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var stringify = function stringify( // eslint-disable-line func-name-matching
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    formatter,
    encodeValuesOnly
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder) : prefix;
        }

        obj = '';
    }

    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder);
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (Array.isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        if (Array.isArray(obj)) {
            values = values.concat(stringify(
                obj[key],
                generateArrayPrefix(prefix, key),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        } else {
            values = values.concat(stringify(
                obj[key],
                prefix + (allowDots ? '.' + key : '[' + key + ']'),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        }
    }

    return values;
};

module.exports = function (object, opts) {
    var obj = object;
    var options = opts ? utils.assign({}, opts) : {};

    if (options.encoder !== null && options.encoder !== undefined && typeof options.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var delimiter = typeof options.delimiter === 'undefined' ? defaults.delimiter : options.delimiter;
    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
    var skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : defaults.skipNulls;
    var encode = typeof options.encode === 'boolean' ? options.encode : defaults.encode;
    var encoder = typeof options.encoder === 'function' ? options.encoder : defaults.encoder;
    var sort = typeof options.sort === 'function' ? options.sort : null;
    var allowDots = typeof options.allowDots === 'undefined' ? false : options.allowDots;
    var serializeDate = typeof options.serializeDate === 'function' ? options.serializeDate : defaults.serializeDate;
    var encodeValuesOnly = typeof options.encodeValuesOnly === 'boolean' ? options.encodeValuesOnly : defaults.encodeValuesOnly;
    if (typeof options.format === 'undefined') {
        options.format = formats['default'];
    } else if (!Object.prototype.hasOwnProperty.call(formats.formatters, options.format)) {
        throw new TypeError('Unknown format option provided.');
    }
    var formatter = formats.formatters[options.format];
    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (Array.isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (options.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = options.arrayFormat;
    } else if ('indices' in options) {
        arrayFormat = options.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (sort) {
        objKeys.sort(sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        keys = keys.concat(stringify(
            obj[key],
            key,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encode ? encoder : null,
            filter,
            sort,
            allowDots,
            serializeDate,
            formatter,
            encodeValuesOnly
        ));
    }

    var joined = keys.join(delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(279);

var has = Object.prototype.hasOwnProperty;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    parameterLimit: 1000,
    plainObjects: false,
    strictNullHandling: false
};

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);

    for (var i = 0; i < parts.length; ++i) {
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder);
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder);
            val = options.decoder(part.slice(pos + 1), defaults.decoder);
        }
        if (has.call(obj, key)) {
            obj[key] = [].concat(obj[key]).concat(val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options) {
    var leaf = val;

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]') {
            obj = [];
            obj = obj.concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys
        // that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while ((segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options);
};

module.exports = function (str, opts) {
    var options = opts ? utils.assign({}, opts) : {};

    if (options.decoder !== null && options.decoder !== undefined && typeof options.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    options.ignoreQueryPrefix = options.ignoreQueryPrefix === true;
    options.delimiter = typeof options.delimiter === 'string' || utils.isRegExp(options.delimiter) ? options.delimiter : defaults.delimiter;
    options.depth = typeof options.depth === 'number' ? options.depth : defaults.depth;
    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : defaults.arrayLimit;
    options.parseArrays = options.parseArrays !== false;
    options.decoder = typeof options.decoder === 'function' ? options.decoder : defaults.decoder;
    options.allowDots = typeof options.allowDots === 'boolean' ? options.allowDots : defaults.allowDots;
    options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : defaults.plainObjects;
    options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : defaults.allowPrototypes;
    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : defaults.parameterLimit;
    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options);
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};


/***/ }),

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(439);
var $Object = __webpack_require__(26).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ 439:
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(34);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(49), 'Object', { defineProperty: __webpack_require__(44).f });


/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(56);
var IE8_DOM_DEFINE = __webpack_require__(182);
var toPrimitive = __webpack_require__(127);
var dP = Object.defineProperty;

exports.f = __webpack_require__(49) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(73);
var IObject = __webpack_require__(154);
var toObject = __webpack_require__(79);
var toLength = __webpack_require__(129);
var asc = __webpack_require__(445);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ 445:
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(446);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ 446:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(51);
var isArray = __webpack_require__(218);
var SPECIES = __webpack_require__(37)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ 447:
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(156);

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),

/***/ 448:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(449);
module.exports = __webpack_require__(26).Object.keys;


/***/ }),

/***/ 449:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(79);
var $keys = __webpack_require__(78);

__webpack_require__(137)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(438), __esModule: true };

/***/ }),

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(169);
__webpack_require__(105);
__webpack_require__(136);
__webpack_require__(452);
__webpack_require__(453);
__webpack_require__(454);
__webpack_require__(455);
module.exports = __webpack_require__(26).Map;


/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(363);
var validate = __webpack_require__(238);
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(364)(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(34);

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(365)('Map') });


/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__(366)('Map');


/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__(367)('Map');


/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(105);
__webpack_require__(457);
module.exports = __webpack_require__(26).Array.from;


/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(73);
var $export = __webpack_require__(34);
var toObject = __webpack_require__(79);
var call = __webpack_require__(286);
var isArrayIter = __webpack_require__(287);
var toLength = __webpack_require__(129);
var createProperty = __webpack_require__(458);
var getIterFn = __webpack_require__(236);

$export($export.S + $export.F * !__webpack_require__(358)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(44);
var createDesc = __webpack_require__(83);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ 460:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(461);
var $Object = __webpack_require__(26).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),

/***/ 461:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(60);
var $getOwnPropertyDescriptor = __webpack_require__(157).f;

__webpack_require__(137)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(463), __esModule: true };

/***/ }),

/***/ 463:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(464);
module.exports = __webpack_require__(26).Object.freeze;


/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(51);
var meta = __webpack_require__(139).onFreeze;

__webpack_require__(137)('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});


/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(63)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(288), __esModule: true };

/***/ }),

/***/ 51:
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(21);

var _keys2 = _interopRequireDefault(_keys);

var _toConsumableArray2 = __webpack_require__(20);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _Enum = __webpack_require__(12);

var _Enum2 = _interopRequireDefault(_Enum);

var _baseMessageTypes = __webpack_require__(319);

var _baseMessageTypes2 = _interopRequireDefault(_baseMessageTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _Enum2.default([].concat((0, _toConsumableArray3.default)((0, _keys2.default)(_baseMessageTypes2.default)), ['syncPresence']), 'rc-adapter');

/***/ }),

/***/ 517:
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(525);
module.exports = __webpack_require__(26).Number.isNaN;


/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(34);

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = padLeft;
function padLeft(input, char, length) {
  var str = '' + input;
  var padding = [];
  for (var i = str.length; i < length; i += 1) {
    padding.push(char);
  }
  return '' + padding.join('') + str;
}
//# sourceMappingURL=padLeft.js.map


/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(44);
var createDesc = __webpack_require__(83);
module.exports = __webpack_require__(49) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(51);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ 59:
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(22);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(154);
var defined = __webpack_require__(128);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ 63:
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(45);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(153);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _toConsumableArray2 = __webpack_require__(20);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _defineProperty = __webpack_require__(45);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _freeze = __webpack_require__(462);

var _freeze2 = _interopRequireDefault(_freeze);

var _map = __webpack_require__(81);

var _map2 = _interopRequireDefault(_map);

var _assign = __webpack_require__(22);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _symbol = __webpack_require__(186);

var _symbol2 = _interopRequireDefault(_symbol);

exports.defaultGetFunction = defaultGetFunction;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sDefinition = (0, _symbol2.default)('definition');
var sValueMap = (0, _symbol2.default)('valueMap');

function defaultGetFunction(item) {
  return item;
}

/**
 * @class HashMap
 * @description Simple hash map class
 */

var HashMap = function () {
  /**
   * @constructor
   * @param {Object} definition
   */
  function HashMap(definition) {
    var _this = this;

    (0, _classCallCheck3.default)(this, HashMap);

    this[sDefinition] = (0, _assign2.default)({}, definition);
    this[sValueMap] = new _map2.default();

    var _loop = function _loop(key) {
      /* istanbul ignore else */
      if (Object.prototype.hasOwnProperty.call(definition, key)) {
        (0, _defineProperty2.default)(_this, key, {
          get: function get() {
            return this[sDefinition][key];
          },

          enumerable: true
        });
        _this[sValueMap].set(_this[sDefinition][key], key);
      }
    };

    for (var key in definition) {
      _loop(key);
    }
    (0, _freeze2.default)(this);
  }

  (0, _createClass3.default)(HashMap, null, [{
    key: 'getKey',
    value: function getKey(map, value) {
      return map[sValueMap].get(value);
    }
  }, {
    key: 'hasValue',
    value: function hasValue(map, value) {
      return map[sValueMap].has(value);
    }
  }, {
    key: 'fromSet',
    value: function fromSet(_ref) {
      var set = _ref.set,
          _ref$getKey = _ref.getKey,
          getKey = _ref$getKey === undefined ? defaultGetFunction : _ref$getKey,
          _ref$getValue = _ref.getValue,
          getValue = _ref$getValue === undefined ? defaultGetFunction : _ref$getValue;

      var definition = {};
      [].concat((0, _toConsumableArray3.default)(set)).forEach(function (item) {
        var key = getKey(item);
        var value = getValue(item);
        if (typeof key !== 'undefined' && key !== null && key !== '') {
          definition[key] = value;
        }
      });
      return new HashMap(definition);
    }
  }]);
  return HashMap;
}();

exports.default = HashMap;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(183);
var enumBugKeys = __webpack_require__(133);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(128);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ 8:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(290);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(186);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(451), __esModule: true };

/***/ }),

/***/ 83:
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 84:
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ 88:
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader 
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	}),
	getElement = (function(fn) {
		var memo = {};
		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}
			return memo[selector]
		};
	})(function (styleTarget) {
		return document.querySelector(styleTarget)
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [],
	fixUrls = __webpack_require__(517);

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (typeof options.insertInto === "undefined") options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list, options);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list, options) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var styleTarget = getElement(options.insertInto)
	if (!styleTarget) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			styleTarget.insertBefore(styleElement, styleTarget.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			styleTarget.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			styleTarget.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		styleTarget.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	options.attrs.type = "text/css";

	attachTagAttrs(styleElement, options.attrs);
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	attachTagAttrs(linkElement, options.attrs);
	insertStyleElement(options, linkElement);
	return linkElement;
}

function attachTagAttrs(element, attrs) {
	Object.keys(attrs).forEach(function (key) {
		element.setAttribute(key, attrs[key]);
	});
}

function addStyle(obj, options) {
	var styleElement, update, remove, transformResult;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    transformResult = options.transform(obj.css);
	    
	    if (transformResult) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = transformResult;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css. 
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement, options);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/* If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
	and there is no publicPath defined then lets turn convertToAbsoluteUrls
	on by default.  Otherwise default to the convertToAbsoluteUrls option
	directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls){
		css = fixUrls(css);
	}

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 93:
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(44).f;
var has = __webpack_require__(59);
var TAG = __webpack_require__(37)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ })

/******/ });