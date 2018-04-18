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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var doc = document;
var the = doc.querySelector.bind(doc);
var all = doc.querySelectorAll.bind(doc);

// Detect request animation frame
var animation = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame ||
// IE Fallback, you can even fallback to onscroll
function (callback) {
  window.setTimeout(callback, 1000 / 60);
};

var getElemOffset = function getElemOffset(elem) {

  var width = elem.offsetWidth;
  var height = elem.offsetHeight;

  var top = 0;
  var left = 0;

  do {
    if (!isNaN(elem.offsetTop)) {
      top += elem.offsetTop;
    }
    if (!isNaN(elem.offsetLeft)) {
      left += elem.offsetLeft;
    }
  } while ((elem = elem.offsetParent) !== null);

  var bottom = top + height;
  var right = left + width;

  return { height: height, width: width, top: top, left: left, bottom: bottom, right: right };
};

var ScrollHandler = function () {
  // Needs Animation variable from common.js file
  function ScrollHandler() {
    _classCallCheck(this, ScrollHandler);

    this.lastPosY = window.pageYOffset;
    this.loop();
  }

  _createClass(ScrollHandler, [{
    key: "init",
    value: function init(options) {
      this.after = options.after || function () {};
      this.before = options.before || function () {};
      this.max = options.max || 0;
      this.min = options.min || 0;
    }
  }, {
    key: "callback",
    value: function callback() {

      if (this.lastPosY >= this.max) {
        this.after();
      }

      if (this.lastPosY <= this.min) {
        this.before();
      }
    }
  }, {
    key: "loop",
    value: function loop() {

      var scrollTop = window.pageYOffset;

      if (this.lastPosY === scrollTop) {
        animation(this.loop.bind(this));
        return;
      } else {
        this.lastPosY = scrollTop;
        this.callback();
        animation(this.loop.bind(this));
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;


      if (name) {

        this[name] = function () {
          return null;
        };
      } else {

        this.after = function () {
          return null;
        };
        this.before = function () {
          return null;
        };
      }
    }
  }]);

  return ScrollHandler;
}();

var elementIsVisibleInViewport = function elementIsVisibleInViewport(el) {
  var partiallyVisible = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var _el$getBoundingClient = el.getBoundingClientRect(),
      left = _el$getBoundingClient.left,
      bottom = _el$getBoundingClient.bottom,
      right = _el$getBoundingClient.right,
      top = _el$getBoundingClient.top;

  var is = partiallyVisible ? (top > 0 && top < innerHeight || bottom > 0 && bottom < innerHeight) && (left > 0 && left < innerWidth || right > 0 && right < innerWidth) : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;

  return is;
};

function forEach(list, callback) {
  Array.prototype.forEach.call(list, callback);
}

exports.forEach = forEach;
exports.doc = doc;
exports.the = the;
exports.all = all;
exports.animation = animation;
exports.getElemOffset = getElemOffset;
exports.ScrollHandler = ScrollHandler;
exports.elementIsVisibleInViewport = elementIsVisibleInViewport;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var isMobile = {
    userAgent: navigator.userAgent,
    Android: function Android(_) {
        return isMobile.userAgent.match(/Android/i);
    },
    BlackBerry: function BlackBerry(_) {
        return isMobile.userAgent.match(/BlackBerry/i);
    },
    iOS: function iOS(_) {
        return isMobile.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function Opera(_) {
        return isMobile.userAgent.match(/Opera Mini/i);
    },
    Windows: function Windows(_) {
        return isMobile.userAgent.match(/IEMobile/i);
    },
    any: function any() {
        return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
    }
};

exports.default = isMobile;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(0);

var _fontLoader = __webpack_require__(3);

var _fontLoader2 = _interopRequireDefault(_fontLoader);

var _parallax = __webpack_require__(5);

var _parallax2 = _interopRequireDefault(_parallax);

var _menuSticky = __webpack_require__(6);

var _menuSticky2 = _interopRequireDefault(_menuSticky);

var _burgersLazyLoad = __webpack_require__(7);

var _burgersLazyLoad2 = _interopRequireDefault(_burgersLazyLoad);

var _sections = __webpack_require__(10);

var _sections2 = _interopRequireDefault(_sections);

var _zenscroll = __webpack_require__(14);

var _zenscroll2 = _interopRequireDefault(_zenscroll);

var _hamburger = __webpack_require__(15);

var _hamburger2 = _interopRequireDefault(_hamburger);

var _markOnMenu = __webpack_require__(16);

var _markOnMenu2 = _interopRequireDefault(_markOnMenu);

var _isMobile = __webpack_require__(1);

var _isMobile2 = _interopRequireDefault(_isMobile);

var _domready = __webpack_require__(17);

var _domready2 = _interopRequireDefault(_domready);

var _moveElements = __webpack_require__(18);

var _moveElements2 = _interopRequireDefault(_moveElements);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _domready2.default)(function (_) {

  // start parallax 
  _isMobile2.default.any() && (0, _hamburger2.default)();

  if (!_isMobile2.default.any()) {
    (0, _parallax2.default)();

    // menu fixed on scroll
    (0, _menuSticky2.default)();
  }
  // when sections are reached
  (0, _sections2.default)();

  (0, _markOnMenu2.default)();

  //Lazy load
  (0, _burgersLazyLoad2.default)();

  // move elements
  _isMobile2.default.any() && (0, _moveElements2.default)();
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _webfontloader = __webpack_require__(4);

var _webfontloader2 = _interopRequireDefault(_webfontloader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fonts = _webfontloader2.default.load({
  google: {
    families: ['Montserrat:400,700,900']
  }
});

exports.default = fonts;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

/* Web Font Loader v1.6.28 - (c) Adobe Systems, Google. License: Apache 2.0 */(function () {
  function aa(a, b, c) {
    return a.call.apply(a.bind, arguments);
  }function ba(a, b, c) {
    if (!a) throw Error();if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);return function () {
        var c = Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c, d);return a.apply(b, c);
      };
    }return function () {
      return a.apply(b, arguments);
    };
  }function p(a, b, c) {
    p = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? aa : ba;return p.apply(null, arguments);
  }var q = Date.now || function () {
    return +new Date();
  };function ca(a, b) {
    this.a = a;this.o = b || a;this.c = this.o.document;
  }var da = !!window.FontFace;function t(a, b, c, d) {
    b = a.c.createElement(b);if (c) for (var e in c) {
      c.hasOwnProperty(e) && ("style" == e ? b.style.cssText = c[e] : b.setAttribute(e, c[e]));
    }d && b.appendChild(a.c.createTextNode(d));return b;
  }function u(a, b, c) {
    a = a.c.getElementsByTagName(b)[0];a || (a = document.documentElement);a.insertBefore(c, a.lastChild);
  }function v(a) {
    a.parentNode && a.parentNode.removeChild(a);
  }
  function w(a, b, c) {
    b = b || [];c = c || [];for (var d = a.className.split(/\s+/), e = 0; e < b.length; e += 1) {
      for (var f = !1, g = 0; g < d.length; g += 1) {
        if (b[e] === d[g]) {
          f = !0;break;
        }
      }f || d.push(b[e]);
    }b = [];for (e = 0; e < d.length; e += 1) {
      f = !1;for (g = 0; g < c.length; g += 1) {
        if (d[e] === c[g]) {
          f = !0;break;
        }
      }f || b.push(d[e]);
    }a.className = b.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "");
  }function y(a, b) {
    for (var c = a.className.split(/\s+/), d = 0, e = c.length; d < e; d++) {
      if (c[d] == b) return !0;
    }return !1;
  }
  function ea(a) {
    return a.o.location.hostname || a.a.location.hostname;
  }function z(a, b, c) {
    function d() {
      m && e && f && (m(g), m = null);
    }b = t(a, "link", { rel: "stylesheet", href: b, media: "all" });var e = !1,
        f = !0,
        g = null,
        m = c || null;da ? (b.onload = function () {
      e = !0;d();
    }, b.onerror = function () {
      e = !0;g = Error("Stylesheet failed to load");d();
    }) : setTimeout(function () {
      e = !0;d();
    }, 0);u(a, "head", b);
  }
  function A(a, b, c, d) {
    var e = a.c.getElementsByTagName("head")[0];if (e) {
      var f = t(a, "script", { src: b }),
          g = !1;f.onload = f.onreadystatechange = function () {
        g || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (g = !0, c && c(null), f.onload = f.onreadystatechange = null, "HEAD" == f.parentNode.tagName && e.removeChild(f));
      };e.appendChild(f);setTimeout(function () {
        g || (g = !0, c && c(Error("Script load timeout")));
      }, d || 5E3);return f;
    }return null;
  };function B() {
    this.a = 0;this.c = null;
  }function C(a) {
    a.a++;return function () {
      a.a--;D(a);
    };
  }function E(a, b) {
    a.c = b;D(a);
  }function D(a) {
    0 == a.a && a.c && (a.c(), a.c = null);
  };function F(a) {
    this.a = a || "-";
  }F.prototype.c = function (a) {
    for (var b = [], c = 0; c < arguments.length; c++) {
      b.push(arguments[c].replace(/[\W_]+/g, "").toLowerCase());
    }return b.join(this.a);
  };function G(a, b) {
    this.c = a;this.f = 4;this.a = "n";var c = (b || "n4").match(/^([nio])([1-9])$/i);c && (this.a = c[1], this.f = parseInt(c[2], 10));
  }function fa(a) {
    return H(a) + " " + (a.f + "00") + " 300px " + I(a.c);
  }function I(a) {
    var b = [];a = a.split(/,\s*/);for (var c = 0; c < a.length; c++) {
      var d = a[c].replace(/['"]/g, "");-1 != d.indexOf(" ") || /^\d/.test(d) ? b.push("'" + d + "'") : b.push(d);
    }return b.join(",");
  }function J(a) {
    return a.a + a.f;
  }function H(a) {
    var b = "normal";"o" === a.a ? b = "oblique" : "i" === a.a && (b = "italic");return b;
  }
  function ga(a) {
    var b = 4,
        c = "n",
        d = null;a && ((d = a.match(/(normal|oblique|italic)/i)) && d[1] && (c = d[1].substr(0, 1).toLowerCase()), (d = a.match(/([1-9]00|normal|bold)/i)) && d[1] && (/bold/i.test(d[1]) ? b = 7 : /[1-9]00/.test(d[1]) && (b = parseInt(d[1].substr(0, 1), 10))));return c + b;
  };function ha(a, b) {
    this.c = a;this.f = a.o.document.documentElement;this.h = b;this.a = new F("-");this.j = !1 !== b.events;this.g = !1 !== b.classes;
  }function ia(a) {
    a.g && w(a.f, [a.a.c("wf", "loading")]);K(a, "loading");
  }function L(a) {
    if (a.g) {
      var b = y(a.f, a.a.c("wf", "active")),
          c = [],
          d = [a.a.c("wf", "loading")];b || c.push(a.a.c("wf", "inactive"));w(a.f, c, d);
    }K(a, "inactive");
  }function K(a, b, c) {
    if (a.j && a.h[b]) if (c) a.h[b](c.c, J(c));else a.h[b]();
  };function ja() {
    this.c = {};
  }function ka(a, b, c) {
    var d = [],
        e;for (e in b) {
      if (b.hasOwnProperty(e)) {
        var f = a.c[e];f && d.push(f(b[e], c));
      }
    }return d;
  };function M(a, b) {
    this.c = a;this.f = b;this.a = t(this.c, "span", { "aria-hidden": "true" }, this.f);
  }function N(a) {
    u(a.c, "body", a.a);
  }function O(a) {
    return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + I(a.c) + ";" + ("font-style:" + H(a) + ";font-weight:" + (a.f + "00") + ";");
  };function P(a, b, c, d, e, f) {
    this.g = a;this.j = b;this.a = d;this.c = c;this.f = e || 3E3;this.h = f || void 0;
  }P.prototype.start = function () {
    var a = this.c.o.document,
        b = this,
        c = q(),
        d = new Promise(function (d, e) {
      function f() {
        q() - c >= b.f ? e() : a.fonts.load(fa(b.a), b.h).then(function (a) {
          1 <= a.length ? d() : setTimeout(f, 25);
        }, function () {
          e();
        });
      }f();
    }),
        e = null,
        f = new Promise(function (a, d) {
      e = setTimeout(d, b.f);
    });Promise.race([f, d]).then(function () {
      e && (clearTimeout(e), e = null);b.g(b.a);
    }, function () {
      b.j(b.a);
    });
  };function Q(a, b, c, d, e, f, g) {
    this.v = a;this.B = b;this.c = c;this.a = d;this.s = g || "BESbswy";this.f = {};this.w = e || 3E3;this.u = f || null;this.m = this.j = this.h = this.g = null;this.g = new M(this.c, this.s);this.h = new M(this.c, this.s);this.j = new M(this.c, this.s);this.m = new M(this.c, this.s);a = new G(this.a.c + ",serif", J(this.a));a = O(a);this.g.a.style.cssText = a;a = new G(this.a.c + ",sans-serif", J(this.a));a = O(a);this.h.a.style.cssText = a;a = new G("serif", J(this.a));a = O(a);this.j.a.style.cssText = a;a = new G("sans-serif", J(this.a));a = O(a);this.m.a.style.cssText = a;N(this.g);N(this.h);N(this.j);N(this.m);
  }var R = { D: "serif", C: "sans-serif" },
      S = null;function T() {
    if (null === S) {
      var a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);S = !!a && (536 > parseInt(a[1], 10) || 536 === parseInt(a[1], 10) && 11 >= parseInt(a[2], 10));
    }return S;
  }Q.prototype.start = function () {
    this.f.serif = this.j.a.offsetWidth;this.f["sans-serif"] = this.m.a.offsetWidth;this.A = q();U(this);
  };
  function la(a, b, c) {
    for (var d in R) {
      if (R.hasOwnProperty(d) && b === a.f[R[d]] && c === a.f[R[d]]) return !0;
    }return !1;
  }function U(a) {
    var b = a.g.a.offsetWidth,
        c = a.h.a.offsetWidth,
        d;(d = b === a.f.serif && c === a.f["sans-serif"]) || (d = T() && la(a, b, c));d ? q() - a.A >= a.w ? T() && la(a, b, c) && (null === a.u || a.u.hasOwnProperty(a.a.c)) ? V(a, a.v) : V(a, a.B) : ma(a) : V(a, a.v);
  }function ma(a) {
    setTimeout(p(function () {
      U(this);
    }, a), 50);
  }function V(a, b) {
    setTimeout(p(function () {
      v(this.g.a);v(this.h.a);v(this.j.a);v(this.m.a);b(this.a);
    }, a), 0);
  };function W(a, b, c) {
    this.c = a;this.a = b;this.f = 0;this.m = this.j = !1;this.s = c;
  }var X = null;W.prototype.g = function (a) {
    var b = this.a;b.g && w(b.f, [b.a.c("wf", a.c, J(a).toString(), "active")], [b.a.c("wf", a.c, J(a).toString(), "loading"), b.a.c("wf", a.c, J(a).toString(), "inactive")]);K(b, "fontactive", a);this.m = !0;na(this);
  };
  W.prototype.h = function (a) {
    var b = this.a;if (b.g) {
      var c = y(b.f, b.a.c("wf", a.c, J(a).toString(), "active")),
          d = [],
          e = [b.a.c("wf", a.c, J(a).toString(), "loading")];c || d.push(b.a.c("wf", a.c, J(a).toString(), "inactive"));w(b.f, d, e);
    }K(b, "fontinactive", a);na(this);
  };function na(a) {
    0 == --a.f && a.j && (a.m ? (a = a.a, a.g && w(a.f, [a.a.c("wf", "active")], [a.a.c("wf", "loading"), a.a.c("wf", "inactive")]), K(a, "active")) : L(a.a));
  };function oa(a) {
    this.j = a;this.a = new ja();this.h = 0;this.f = this.g = !0;
  }oa.prototype.load = function (a) {
    this.c = new ca(this.j, a.context || this.j);this.g = !1 !== a.events;this.f = !1 !== a.classes;pa(this, new ha(this.c, a), a);
  };
  function qa(a, b, c, d, e) {
    var f = 0 == --a.h;(a.f || a.g) && setTimeout(function () {
      var a = e || null,
          m = d || null || {};if (0 === c.length && f) L(b.a);else {
        b.f += c.length;f && (b.j = f);var h,
            l = [];for (h = 0; h < c.length; h++) {
          var k = c[h],
              n = m[k.c],
              r = b.a,
              x = k;r.g && w(r.f, [r.a.c("wf", x.c, J(x).toString(), "loading")]);K(r, "fontloading", x);r = null;if (null === X) if (window.FontFace) {
            var x = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),
                xa = /OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent) && /Apple/.exec(window.navigator.vendor);
            X = x ? 42 < parseInt(x[1], 10) : xa ? !1 : !0;
          } else X = !1;X ? r = new P(p(b.g, b), p(b.h, b), b.c, k, b.s, n) : r = new Q(p(b.g, b), p(b.h, b), b.c, k, b.s, a, n);l.push(r);
        }for (h = 0; h < l.length; h++) {
          l[h].start();
        }
      }
    }, 0);
  }function pa(a, b, c) {
    var d = [],
        e = c.timeout;ia(b);var d = ka(a.a, c, a.c),
        f = new W(a.c, b, e);a.h = d.length;b = 0;for (c = d.length; b < c; b++) {
      d[b].load(function (b, d, c) {
        qa(a, f, b, d, c);
      });
    }
  };function ra(a, b) {
    this.c = a;this.a = b;
  }
  ra.prototype.load = function (a) {
    function b() {
      if (f["__mti_fntLst" + d]) {
        var c = f["__mti_fntLst" + d](),
            e = [],
            h;if (c) for (var l = 0; l < c.length; l++) {
          var k = c[l].fontfamily;void 0 != c[l].fontStyle && void 0 != c[l].fontWeight ? (h = c[l].fontStyle + c[l].fontWeight, e.push(new G(k, h))) : e.push(new G(k));
        }a(e);
      } else setTimeout(function () {
        b();
      }, 50);
    }var c = this,
        d = c.a.projectId,
        e = c.a.version;if (d) {
      var f = c.c.o;A(this.c, (c.a.api || "https://fast.fonts.net/jsapi") + "/" + d + ".js" + (e ? "?v=" + e : ""), function (e) {
        e ? a([]) : (f["__MonotypeConfiguration__" + d] = function () {
          return c.a;
        }, b());
      }).id = "__MonotypeAPIScript__" + d;
    } else a([]);
  };function sa(a, b) {
    this.c = a;this.a = b;
  }sa.prototype.load = function (a) {
    var b,
        c,
        d = this.a.urls || [],
        e = this.a.families || [],
        f = this.a.testStrings || {},
        g = new B();b = 0;for (c = d.length; b < c; b++) {
      z(this.c, d[b], C(g));
    }var m = [];b = 0;for (c = e.length; b < c; b++) {
      if (d = e[b].split(":"), d[1]) for (var h = d[1].split(","), l = 0; l < h.length; l += 1) {
        m.push(new G(d[0], h[l]));
      } else m.push(new G(d[0]));
    }E(g, function () {
      a(m, f);
    });
  };function ta(a, b) {
    a ? this.c = a : this.c = ua;this.a = [];this.f = [];this.g = b || "";
  }var ua = "https://fonts.googleapis.com/css";function va(a, b) {
    for (var c = b.length, d = 0; d < c; d++) {
      var e = b[d].split(":");3 == e.length && a.f.push(e.pop());var f = "";2 == e.length && "" != e[1] && (f = ":");a.a.push(e.join(f));
    }
  }
  function wa(a) {
    if (0 == a.a.length) throw Error("No fonts to load!");if (-1 != a.c.indexOf("kit=")) return a.c;for (var b = a.a.length, c = [], d = 0; d < b; d++) {
      c.push(a.a[d].replace(/ /g, "+"));
    }b = a.c + "?family=" + c.join("%7C");0 < a.f.length && (b += "&subset=" + a.f.join(","));0 < a.g.length && (b += "&text=" + encodeURIComponent(a.g));return b;
  };function ya(a) {
    this.f = a;this.a = [];this.c = {};
  }
  var za = { latin: "BESbswy", "latin-ext": "\xE7\xF6\xFC\u011F\u015F", cyrillic: "\u0439\u044F\u0416", greek: "\u03B1\u03B2\u03A3", khmer: "\u1780\u1781\u1782", Hanuman: "\u1780\u1781\u1782" },
      Aa = { thin: "1", extralight: "2", "extra-light": "2", ultralight: "2", "ultra-light": "2", light: "3", regular: "4", book: "4", medium: "5", "semi-bold": "6", semibold: "6", "demi-bold": "6", demibold: "6", bold: "7", "extra-bold": "8", extrabold: "8", "ultra-bold": "8", ultrabold: "8", black: "9", heavy: "9", l: "3", r: "4", b: "7" },
      Ba = { i: "i", italic: "i", n: "n", normal: "n" },
      Ca = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
  function Da(a) {
    for (var b = a.f.length, c = 0; c < b; c++) {
      var d = a.f[c].split(":"),
          e = d[0].replace(/\+/g, " "),
          f = ["n4"];if (2 <= d.length) {
        var g;var m = d[1];g = [];if (m) for (var m = m.split(","), h = m.length, l = 0; l < h; l++) {
          var k;k = m[l];if (k.match(/^[\w-]+$/)) {
            var n = Ca.exec(k.toLowerCase());if (null == n) k = "";else {
              k = n[2];k = null == k || "" == k ? "n" : Ba[k];n = n[1];if (null == n || "" == n) n = "4";else var r = Aa[n],
                  n = r ? r : isNaN(n) ? "4" : n.substr(0, 1);k = [k, n].join("");
            }
          } else k = "";k && g.push(k);
        }0 < g.length && (f = g);3 == d.length && (d = d[2], g = [], d = d ? d.split(",") : g, 0 < d.length && (d = za[d[0]]) && (a.c[e] = d));
      }a.c[e] || (d = za[e]) && (a.c[e] = d);for (d = 0; d < f.length; d += 1) {
        a.a.push(new G(e, f[d]));
      }
    }
  };function Ea(a, b) {
    this.c = a;this.a = b;
  }var Fa = { Arimo: !0, Cousine: !0, Tinos: !0 };Ea.prototype.load = function (a) {
    var b = new B(),
        c = this.c,
        d = new ta(this.a.api, this.a.text),
        e = this.a.families;va(d, e);var f = new ya(e);Da(f);z(c, wa(d), C(b));E(b, function () {
      a(f.a, f.c, Fa);
    });
  };function Ga(a, b) {
    this.c = a;this.a = b;
  }Ga.prototype.load = function (a) {
    var b = this.a.id,
        c = this.c.o;b ? A(this.c, (this.a.api || "https://use.typekit.net") + "/" + b + ".js", function (b) {
      if (b) a([]);else if (c.Typekit && c.Typekit.config && c.Typekit.config.fn) {
        b = c.Typekit.config.fn;for (var e = [], f = 0; f < b.length; f += 2) {
          for (var g = b[f], m = b[f + 1], h = 0; h < m.length; h++) {
            e.push(new G(g, m[h]));
          }
        }try {
          c.Typekit.load({ events: !1, classes: !1, async: !0 });
        } catch (l) {}a(e);
      }
    }, 2E3) : a([]);
  };function Ha(a, b) {
    this.c = a;this.f = b;this.a = [];
  }Ha.prototype.load = function (a) {
    var b = this.f.id,
        c = this.c.o,
        d = this;b ? (c.__webfontfontdeckmodule__ || (c.__webfontfontdeckmodule__ = {}), c.__webfontfontdeckmodule__[b] = function (b, c) {
      for (var g = 0, m = c.fonts.length; g < m; ++g) {
        var h = c.fonts[g];d.a.push(new G(h.name, ga("font-weight:" + h.weight + ";font-style:" + h.style)));
      }a(d.a);
    }, A(this.c, (this.f.api || "https://f.fontdeck.com/s/css/js/") + ea(this.c) + "/" + b + ".js", function (b) {
      b && a([]);
    })) : a([]);
  };var Y = new oa(window);Y.a.c.custom = function (a, b) {
    return new sa(b, a);
  };Y.a.c.fontdeck = function (a, b) {
    return new Ha(b, a);
  };Y.a.c.monotype = function (a, b) {
    return new ra(b, a);
  };Y.a.c.typekit = function (a, b) {
    return new Ga(b, a);
  };Y.a.c.google = function (a, b) {
    return new Ea(b, a);
  };var Z = { load: p(Y.load, Y) }; true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return Z;
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "undefined" !== typeof module && module.exports ? module.exports = Z : (window.WebFont = Z, window.WebFontConfig && Y.load(window.WebFontConfig));
})();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = parallax;

var _utils = __webpack_require__(0);

function parallax() {

    // parallax
    var parallax = new _utils.ScrollHandler();
    var bg = (0, _utils.the)('.contato');

    parallax.init({
        after: function after() {
            var y = parallax.lastPosY * -2 / 3 + 'px';
            bg.style.backgroundPosition = 'center ' + y;
        }
    });
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = menuSticky;

var _utils = __webpack_require__(0);

function menuSticky() {

    var menu = (0, _utils.the)('#menu');
    var header = (0, _utils.the)('header');

    if (window.pageYOffset > 0) {
        menu.classList.add('fixed');
        header.classList.add('fixed');
    }

    function menuSticky(y) {

        if (y > 5) {
            menu.classList.add('fixed');
            header.classList.add('fixed');
        } else {
            menu.classList.remove('fixed');
            header.classList.remove('fixed');
        }
    }

    var scrollPos = new _utils.ScrollHandler();

    scrollPos.init({
        after: function after() {
            return menuSticky(scrollPos.lastPosY);
        }
    });
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = burgersLazyLoad;

var _utils = __webpack_require__(0);

var _imagesloaded = __webpack_require__(8);

var _imagesloaded2 = _interopRequireDefault(_imagesloaded);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function burgersLazyLoad() {

    var lazzys = (0, _utils.all)('.lazy');

    var load = function load(img) {
        img.src = img.dataset.src;
        img.classList.add('loaded');
    };

    var watch = function watch(img) {

        var scroll = new _utils.ScrollHandler();

        scroll.init({
            after: function after() {

                if ((0, _utils.elementIsVisibleInViewport)(img, true)) {
                    load(img);
                    scroll.stop();
                }
            }
        });
    };

    (0, _utils.forEach)(lazzys, function (lazy) {
        if ((0, _utils.elementIsVisibleInViewport)(lazy, true)) {
            load(lazy);
        } else {
            watch(lazy);
        }
    });

    (0, _imagesloaded2.default)(lazzys, function () {
        (0, _utils.the)('.burger-wrp').classList.add('all-loaded');
    });
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * imagesLoaded v4.1.3
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function (window, factory) {
  'use strict';
  // universal module definition

  /*global define: false, module: false, require: false */

  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(9)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (EvEmitter) {
      return factory(window, EvEmitter);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
    // CommonJS
    module.exports = factory(window, require('ev-emitter'));
  } else {
    // browser global
    window.imagesLoaded = factory(window, window.EvEmitter);
  }
})(typeof window !== 'undefined' ? window : undefined,

// --------------------------  factory -------------------------- //

function factory(window, EvEmitter) {

  'use strict';

  var $ = window.jQuery;
  var console = window.console;

  // -------------------------- helpers -------------------------- //

  // extend objects
  function extend(a, b) {
    for (var prop in b) {
      a[prop] = b[prop];
    }
    return a;
  }

  // turn element or nodeList into an array
  function makeArray(obj) {
    var ary = [];
    if (Array.isArray(obj)) {
      // use object if already an array
      ary = obj;
    } else if (typeof obj.length == 'number') {
      // convert nodeList to array
      for (var i = 0; i < obj.length; i++) {
        ary.push(obj[i]);
      }
    } else {
      // array of single index
      ary.push(obj);
    }
    return ary;
  }

  // -------------------------- imagesLoaded -------------------------- //

  /**
   * @param {Array, Element, NodeList, String} elem
   * @param {Object or Function} options - if function, use as callback
   * @param {Function} onAlways - callback function
   */
  function ImagesLoaded(elem, options, onAlways) {
    // coerce ImagesLoaded() without new, to be new ImagesLoaded()
    if (!(this instanceof ImagesLoaded)) {
      return new ImagesLoaded(elem, options, onAlways);
    }
    // use elem as selector string
    if (typeof elem == 'string') {
      elem = document.querySelectorAll(elem);
    }

    this.elements = makeArray(elem);
    this.options = extend({}, this.options);

    if (typeof options == 'function') {
      onAlways = options;
    } else {
      extend(this.options, options);
    }

    if (onAlways) {
      this.on('always', onAlways);
    }

    this.getImages();

    if ($) {
      // add jQuery Deferred object
      this.jqDeferred = new $.Deferred();
    }

    // HACK check async to allow time to bind listeners
    setTimeout(function () {
      this.check();
    }.bind(this));
  }

  ImagesLoaded.prototype = Object.create(EvEmitter.prototype);

  ImagesLoaded.prototype.options = {};

  ImagesLoaded.prototype.getImages = function () {
    this.images = [];

    // filter & find items if we have an item selector
    this.elements.forEach(this.addElementImages, this);
  };

  /**
   * @param {Node} element
   */
  ImagesLoaded.prototype.addElementImages = function (elem) {
    // filter siblings
    if (elem.nodeName == 'IMG') {
      this.addImage(elem);
    }
    // get background image on element
    if (this.options.background === true) {
      this.addElementBackgroundImages(elem);
    }

    // find children
    // no non-element nodes, #143
    var nodeType = elem.nodeType;
    if (!nodeType || !elementNodeTypes[nodeType]) {
      return;
    }
    var childImgs = elem.querySelectorAll('img');
    // concat childElems to filterFound array
    for (var i = 0; i < childImgs.length; i++) {
      var img = childImgs[i];
      this.addImage(img);
    }

    // get child background images
    if (typeof this.options.background == 'string') {
      var children = elem.querySelectorAll(this.options.background);
      for (i = 0; i < children.length; i++) {
        var child = children[i];
        this.addElementBackgroundImages(child);
      }
    }
  };

  var elementNodeTypes = {
    1: true,
    9: true,
    11: true
  };

  ImagesLoaded.prototype.addElementBackgroundImages = function (elem) {
    var style = getComputedStyle(elem);
    if (!style) {
      // Firefox returns null if in a hidden iframe https://bugzil.la/548397
      return;
    }
    // get url inside url("...")
    var reURL = /url\((['"])?(.*?)\1\)/gi;
    var matches = reURL.exec(style.backgroundImage);
    while (matches !== null) {
      var url = matches && matches[2];
      if (url) {
        this.addBackground(url, elem);
      }
      matches = reURL.exec(style.backgroundImage);
    }
  };

  /**
   * @param {Image} img
   */
  ImagesLoaded.prototype.addImage = function (img) {
    var loadingImage = new LoadingImage(img);
    this.images.push(loadingImage);
  };

  ImagesLoaded.prototype.addBackground = function (url, elem) {
    var background = new Background(url, elem);
    this.images.push(background);
  };

  ImagesLoaded.prototype.check = function () {
    var _this = this;
    this.progressedCount = 0;
    this.hasAnyBroken = false;
    // complete if no images
    if (!this.images.length) {
      this.complete();
      return;
    }

    function onProgress(image, elem, message) {
      // HACK - Chrome triggers event before object properties have changed. #83
      setTimeout(function () {
        _this.progress(image, elem, message);
      });
    }

    this.images.forEach(function (loadingImage) {
      loadingImage.once('progress', onProgress);
      loadingImage.check();
    });
  };

  ImagesLoaded.prototype.progress = function (image, elem, message) {
    this.progressedCount++;
    this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
    // progress event
    this.emitEvent('progress', [this, image, elem]);
    if (this.jqDeferred && this.jqDeferred.notify) {
      this.jqDeferred.notify(this, image);
    }
    // check if completed
    if (this.progressedCount == this.images.length) {
      this.complete();
    }

    if (this.options.debug && console) {
      console.log('progress: ' + message, image, elem);
    }
  };

  ImagesLoaded.prototype.complete = function () {
    var eventName = this.hasAnyBroken ? 'fail' : 'done';
    this.isComplete = true;
    this.emitEvent(eventName, [this]);
    this.emitEvent('always', [this]);
    if (this.jqDeferred) {
      var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
      this.jqDeferred[jqMethod](this);
    }
  };

  // --------------------------  -------------------------- //

  function LoadingImage(img) {
    this.img = img;
  }

  LoadingImage.prototype = Object.create(EvEmitter.prototype);

  LoadingImage.prototype.check = function () {
    // If complete is true and browser supports natural sizes,
    // try to check for image status manually.
    var isComplete = this.getIsImageComplete();
    if (isComplete) {
      // report based on naturalWidth
      this.confirm(this.img.naturalWidth !== 0, 'naturalWidth');
      return;
    }

    // If none of the checks above matched, simulate loading on detached element.
    this.proxyImage = new Image();
    this.proxyImage.addEventListener('load', this);
    this.proxyImage.addEventListener('error', this);
    // bind to image as well for Firefox. #191
    this.img.addEventListener('load', this);
    this.img.addEventListener('error', this);
    this.proxyImage.src = this.img.src;
  };

  LoadingImage.prototype.getIsImageComplete = function () {
    return this.img.complete && this.img.naturalWidth !== undefined;
  };

  LoadingImage.prototype.confirm = function (isLoaded, message) {
    this.isLoaded = isLoaded;
    this.emitEvent('progress', [this, this.img, message]);
  };

  // ----- events ----- //

  // trigger specified handler for event type
  LoadingImage.prototype.handleEvent = function (event) {
    var method = 'on' + event.type;
    if (this[method]) {
      this[method](event);
    }
  };

  LoadingImage.prototype.onload = function () {
    this.confirm(true, 'onload');
    this.unbindEvents();
  };

  LoadingImage.prototype.onerror = function () {
    this.confirm(false, 'onerror');
    this.unbindEvents();
  };

  LoadingImage.prototype.unbindEvents = function () {
    this.proxyImage.removeEventListener('load', this);
    this.proxyImage.removeEventListener('error', this);
    this.img.removeEventListener('load', this);
    this.img.removeEventListener('error', this);
  };

  // -------------------------- Background -------------------------- //

  function Background(url, element) {
    this.url = url;
    this.element = element;
    this.img = new Image();
  }

  // inherit LoadingImage prototype
  Background.prototype = Object.create(LoadingImage.prototype);

  Background.prototype.check = function () {
    this.img.addEventListener('load', this);
    this.img.addEventListener('error', this);
    this.img.src = this.url;
    // check if image is already complete
    var isComplete = this.getIsImageComplete();
    if (isComplete) {
      this.confirm(this.img.naturalWidth !== 0, 'naturalWidth');
      this.unbindEvents();
    }
  };

  Background.prototype.unbindEvents = function () {
    this.img.removeEventListener('load', this);
    this.img.removeEventListener('error', this);
  };

  Background.prototype.confirm = function (isLoaded, message) {
    this.isLoaded = isLoaded;
    this.emitEvent('progress', [this, this.element, message]);
  };

  // -------------------------- jQuery -------------------------- //

  ImagesLoaded.makeJQueryPlugin = function (jQuery) {
    jQuery = jQuery || window.jQuery;
    if (!jQuery) {
      return;
    }
    // set local variable
    $ = jQuery;
    // $().imagesLoaded()
    $.fn.imagesLoaded = function (options, callback) {
      var instance = new ImagesLoaded(this, options, callback);
      return instance.jqDeferred.promise($(this));
    };
  };
  // try making plugin
  ImagesLoaded.makeJQueryPlugin();

  // --------------------------  -------------------------- //

  return ImagesLoaded;
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

(function (global, factory) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if (true) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
    // CommonJS - Browserify, Webpack
    module.exports = factory();
  } else {
    // Browser globals
    global.EvEmitter = factory();
  }
})(typeof window != 'undefined' ? window : undefined, function () {

  "use strict";

  function EvEmitter() {}

  var proto = EvEmitter.prototype;

  proto.on = function (eventName, listener) {
    if (!eventName || !listener) {
      return;
    }
    // set events hash
    var events = this._events = this._events || {};
    // set listeners array
    var listeners = events[eventName] = events[eventName] || [];
    // only add once
    if (listeners.indexOf(listener) == -1) {
      listeners.push(listener);
    }

    return this;
  };

  proto.once = function (eventName, listener) {
    if (!eventName || !listener) {
      return;
    }
    // add event
    this.on(eventName, listener);
    // set once flag
    // set onceEvents hash
    var onceEvents = this._onceEvents = this._onceEvents || {};
    // set onceListeners object
    var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
    // set flag
    onceListeners[listener] = true;

    return this;
  };

  proto.off = function (eventName, listener) {
    var listeners = this._events && this._events[eventName];
    if (!listeners || !listeners.length) {
      return;
    }
    var index = listeners.indexOf(listener);
    if (index != -1) {
      listeners.splice(index, 1);
    }

    return this;
  };

  proto.emitEvent = function (eventName, args) {
    var listeners = this._events && this._events[eventName];
    if (!listeners || !listeners.length) {
      return;
    }
    // copy over to avoid interference if .off() in listener
    listeners = listeners.slice(0);
    args = args || [];
    // once stuff
    var onceListeners = this._onceEvents && this._onceEvents[eventName];

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      var isOnce = onceListeners && onceListeners[listener];
      if (isOnce) {
        // remove listener
        // remove before trigger to prevent recursion
        this.off(eventName, listener);
        // unset once flag
        delete onceListeners[listener];
      }
      // trigger listener
      listener.apply(this, args);
    }

    return this;
  };

  proto.allOff = function () {
    delete this._events;
    delete this._onceEvents;
  };

  return EvEmitter;
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = onSections;

var _utils = __webpack_require__(0);

var _maps = __webpack_require__(11);

var _maps2 = _interopRequireDefault(_maps);

var _contact = __webpack_require__(12);

var _contact2 = _interopRequireDefault(_contact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function onSections() {

    var gMaps = new _maps2.default();
    gMaps.init();

    var wh = window.innerHeight;

    // all('.section').forEach(section => {

    //     const scroll = new ScrollHandler()

    //    // const { top } = getElemOffset(section)

    //     function action(section) {

    //         section.classList.add('active')

    //         if (section.id === 'contato') {

    //             if (typeof google !== 'undefined') {
    //                 gMaps.load()
    //                 contact()
    //                 scroll.stop()
    //             }

    //         } else {
    //             scroll.stop()
    //         }

    //     }

    //     if (elementIsVisibleInViewport(section, true)){
    //         action(section)
    //     }

    //     scroll.init({

    //         after: _ => {

    //             if (elementIsVisibleInViewport(section, true)) {
    //                 action(section)
    //             }

    //             if (section.id === 'contato' && scroll.lastPosY >= (getElemOffset(section).top - (getElemOffset(section).top / 5)  )){
    //                 action(section)
    //             }

    //         }

    //     })


    // })
    var sections = (0, _utils.all)('.section');
    (0, _utils.forEach)(sections, function (section) {

        var scroll = new _utils.ScrollHandler();

        // const { top } = getElemOffset(section)

        function action(section) {

            section.classList.add('active');

            if (section.id === 'contato') {

                if (typeof google !== 'undefined') {
                    gMaps.load();
                    (0, _contact2.default)();
                    scroll.stop();
                }
            } else {
                scroll.stop();
            }
        }

        if ((0, _utils.elementIsVisibleInViewport)(section, true)) {
            action(section);
        }

        scroll.init({

            after: function after(_) {

                if ((0, _utils.elementIsVisibleInViewport)(section, true)) {
                    action(section);
                }

                if (section.id === 'contato' && scroll.lastPosY >= (0, _utils.getElemOffset)(section).top - (0, _utils.getElemOffset)(section).top / 5) {
                    action(section);
                }
            }

        });
    });
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*********************************************************************
*  =MAP
*********************************************************************/

var GoogleMaps = function () {
    function GoogleMaps() {
        _classCallCheck(this, GoogleMaps);
    }

    _createClass(GoogleMaps, [{
        key: 'init',
        value: function init() {
            this.gMapScript = document.createElement('script');
            this.gMapScript.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCWspGMzOzQGZGj1lKmlreVLIB8GlOuiP8');
            document.body.appendChild(this.gMapScript);
        }
    }, {
        key: 'load',
        value: function load() {

            var w = window,
                d = document,
                e = d.documentElement,
                g = d.getElementsByTagName('body')[0],
                screen_width = w.innerWidth || e.clientWidth || g.clientWidth,
                screen_height = w.inner;

            var contentString = '<div id="content">' + '<div id="siteNotice">' + 'Av. Atlântica, 254<br /> Praia do Cassino' + '</div>' + '</div>';
            // console.log(contentString)

            var pos = new google.maps.LatLng(-32.181939, -52.157113),

            // const map;
            map = new google.maps.Map(document.getElementById('map'), {
                center: pos,
                zoom: 16,
                scrollwheel: false,
                draggable: screen_width > 1024 ? true : false,
                disableDefaultUI: true
            });

            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });

            var image = 'assets/img/pin.png';

            var pinMarker = new google.maps.Marker({
                position: pos,
                map: map,
                icon: image
            });
        }
    }]);

    return GoogleMaps;
}();

exports.default = GoogleMaps;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = contact;

var _utils = __webpack_require__(0);

var _contactHelpers = __webpack_require__(13);

var opts = {
	service: 'sendgrid',
	template: 'normal'
};

function sendEmail(args) {

	var options = {
		name: args.name,
		phone: args.phone,
		email: args.email,
		message: args.msg
	};

	emailjs.send('' + opts.service, '' + opts.template, options).then(function (res) {
		return comemore();
	});
}

function comemore() {

	var modal = _utils.doc.createElement('div');
	modal.classList.add('modal');

	modal.innerText = 'Mensagem Enviada!';

	_utils.doc.body.appendChild(modal);

	setInterval(function (_) {
		return modal.remove();
	}, 2000);
}

function contact() {

	var emailsScript = document.createElement('script');
	emailsScript.setAttribute('src', 'https://cdn.emailjs.com/dist/email.min.js');
	document.body.appendChild(emailsScript);

	var form = (0, _utils.the)('#form');

	var elements = {
		name: (0, _utils.the)('#form-name'),
		email: (0, _utils.the)('#form-email'),
		phone: (0, _utils.the)('#form-phone'),
		msg: (0, _utils.the)('#form-msg')
	};

	var inputs = Object.entries(elements) || false;

	// inputs.forEach(input => typing(input))

	(0, _utils.forEach)(inputs, function (input) {
		return (0, _contactHelpers.typing)(input);
	});

	var users = {
		one: 'user_FdLry3bEaHitVXIzllzcl',
		thom: 'user_kCkHRSMU0h4BVVSiBUB1T'

		// listeners
	};form.addEventListener('submit', function (_) {

		_.preventDefault();

		// init the plugin
		emailjs.init(users.one);

		var args = {
			name: elements.name.value,
			email: elements.email.value,
			phone: elements.phone.value,
			msg: elements.msg.value
		};

		var errors = (0, _contactHelpers.validations)(args);

		if (errors.length === 0) {
			sendEmail(args);
		} else {

			(0, _utils.forEach)(errors, function (error) {
				return (0, _contactHelpers.fuck)(error, elements);
			});
		}
	});
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validatePhone(phone) {

    if (!phone) return false;

    var ph = phone.replace(/\D/g, '');

    if (!(ph.length >= 10 && ph.length <= 11)) return false;

    if (ph.length == 11 && parseInt(ph.substring(2, 3)) != 9) return false;

    for (var n = 0; n < 10; n++) {
        if (ph == new Array(11).join(n) || ph == new Array(12).join(n)) return false;
    }

    var codigosDDD = [11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24, 27, 28, 31, 32, 33, 34, 35, 37, 38, 41, 42, 43, 44, 45, 46, 47, 48, 49, 51, 53, 54, 55, 61, 62, 64, 63, 65, 66, 67, 68, 69, 71, 73, 74, 75, 77, 79, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 92, 93, 94, 95, 96, 97, 98, 99];

    if (codigosDDD.indexOf(parseInt(ph.substring(0, 2))) == -1) return false;

    if (new Date().getFullYear() < 2017) return true;
    if (ph.length == 10 && [2, 3, 4, 5, 7].indexOf(parseInt(ph.substring(2, 3))) == -1) return false;

    return true;
}

function validations(args) {
    var which = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'all';


    var errors = [];

    if ('name' in args && args.name.length < 1) {
        errors.push('name');
    }

    if ('email' in args && !validateEmail(args.email)) {
        errors.push('email');
    }

    if ('phone' in args && !validatePhone(args.phone)) {
        errors.push('phone');
    }

    if ('msg' in args && args.msg.length < 3) {
        errors.push('msg');
    }

    return errors;
}

// messages erros
var msgs = {
    phone: 'Preencha com um telefone válido',
    msg: 'Nos diga algo',
    email: 'Preencha com um email válido',
    name: 'Precisamos saber seu nome',
    flags: []
};

var hasMsg = function hasMsg(has) {
    return msgs.flags.indexOf(has) > -1;
};

function typing(input) {

    var key = input[0];
    var el = input[1];
    var elements = {};

    el.addEventListener('keyup', function (_) {

        elements[key] = el.value;
        var errors = validations(elements);

        if (errors.length == 0) {

            el.classList.remove('error');

            if (hasMsg(key)) {
                el.parentNode.querySelector('.error-msg').remove();
                msgs.flags = msgs.flags.filter(function (e) {
                    return e !== key;
                });
            }
        }
    });
}

function fuck(error, elements) {

    elements[error].classList.add('error');

    if (!hasMsg(error)) {
        msgs.flags.push(error);
        var errorSpan = '<span class="error-msg">' + msgs[error] + '</span>';
        elements[error].parentNode.insertAdjacentHTML('beforeend', errorSpan);
    }
}

exports.validations = validations;
exports.typing = typing;
exports.fuck = fuck;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Zenscroll 4.0.0
 * https://github.com/zengabor/zenscroll/
 *
 * Copyright 2015–2017 Gabor Lenard
 *
 * This is free and unencumbered software released into the public domain.
 * 
 * Anyone is free to copy, modify, publish, use, compile, sell, or
 * distribute this software, either in source code form or as a compiled
 * binary, for any purpose, commercial or non-commercial, and by any
 * means.
 * 
 * In jurisdictions that recognize copyright laws, the author or authors
 * of this software dedicate any and all copyright interest in the
 * software to the public domain. We make this dedication for the benefit
 * of the public at large and to the detriment of our heirs and
 * successors. We intend this dedication to be an overt act of
 * relinquishment in perpetuity of all present and future rights to this
 * software under copyright law.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 * 
 * For more information, please refer to <http://unlicense.org>
 * 
 */

/*jshint devel:true, asi:true */

/*global define, module */

(function (root, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory()),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
		module.exports = factory();
	} else {
		(function install() {
			// To make sure Zenscroll can be referenced from the header, before `body` is available
			if (document && document.body) {
				root.zenscroll = factory();
			} else {
				// retry 9ms later
				setTimeout(install, 9);
			}
		})();
	}
})(undefined, function () {
	"use strict";

	// Detect if the browser already supports native smooth scrolling (e.g., Firefox 36+ and Chrome 49+) and it is enabled:

	var isNativeSmoothScrollEnabledOn = function isNativeSmoothScrollEnabledOn(elem) {
		return "getComputedStyle" in window && window.getComputedStyle(elem)["scroll-behavior"] === "smooth";
	};

	// Exit if it’s not a browser environment:
	if (typeof window === "undefined" || !("document" in window)) {
		return {};
	}

	var makeScroller = function makeScroller(container, defaultDuration, edgeOffset) {

		// Use defaults if not provided
		defaultDuration = defaultDuration || 999; //ms
		if (!edgeOffset && edgeOffset !== 0) {
			// When scrolling, this amount of distance is kept from the edges of the container:
			edgeOffset = 9; //px
		}

		// Handling the life-cycle of the scroller
		var scrollTimeoutId;
		var setScrollTimeoutId = function setScrollTimeoutId(newValue) {
			scrollTimeoutId = newValue;
		};

		/**
   * Stop the current smooth scroll operation immediately
   */
		var stopScroll = function stopScroll() {
			clearTimeout(scrollTimeoutId);
			setScrollTimeoutId(0);
		};

		var getTopWithEdgeOffset = function getTopWithEdgeOffset(elem) {
			return Math.max(0, container.getTopOf(elem) - edgeOffset);
		};

		/**
   * Scrolls to a specific vertical position in the document.
   *
   * @param {targetY} The vertical position within the document.
   * @param {duration} Optionally the duration of the scroll operation.
   *        If not provided the default duration is used.
   * @param {onDone} An optional callback function to be invoked once the scroll finished.
   */
		var scrollToY = function scrollToY(targetY, duration, onDone) {
			stopScroll();
			if (duration === 0 || duration && duration < 0 || isNativeSmoothScrollEnabledOn(container.body)) {
				container.toY(targetY);
				if (onDone) {
					onDone();
				}
			} else {
				var startY = container.getY();
				var distance = Math.max(0, targetY) - startY;
				var startTime = new Date().getTime();
				duration = duration || Math.min(Math.abs(distance), defaultDuration);
				(function loopScroll() {
					setScrollTimeoutId(setTimeout(function () {
						// Calculate percentage:
						var p = Math.min(1, (new Date().getTime() - startTime) / duration);
						// Calculate the absolute vertical position:
						var y = Math.max(0, Math.floor(startY + distance * (p < 0.5 ? 2 * p * p : p * (4 - p * 2) - 1)));
						container.toY(y);
						if (p < 1 && container.getHeight() + y < container.body.scrollHeight) {
							loopScroll();
						} else {
							setTimeout(stopScroll, 99); // with cooldown time
							if (onDone) {
								onDone();
							}
						}
					}, 9));
				})();
			}
		};

		/**
   * Scrolls to the top of a specific element.
   *
   * @param {elem} The element to scroll to.
   * @param {duration} Optionally the duration of the scroll operation.
   * @param {onDone} An optional callback function to be invoked once the scroll finished.
   */
		var scrollToElem = function scrollToElem(elem, duration, onDone) {
			scrollToY(getTopWithEdgeOffset(elem), duration, onDone);
		};

		/**
   * Scrolls an element into view if necessary.
   *
   * @param {elem} The element.
   * @param {duration} Optionally the duration of the scroll operation.
   * @param {onDone} An optional callback function to be invoked once the scroll finished.
   */
		var scrollIntoView = function scrollIntoView(elem, duration, onDone) {
			var elemHeight = elem.getBoundingClientRect().height;
			var elemBottom = container.getTopOf(elem) + elemHeight;
			var containerHeight = container.getHeight();
			var y = container.getY();
			var containerBottom = y + containerHeight;
			if (getTopWithEdgeOffset(elem) < y || elemHeight + edgeOffset > containerHeight) {
				// Element is clipped at top or is higher than screen.
				scrollToElem(elem, duration, onDone);
			} else if (elemBottom + edgeOffset > containerBottom) {
				// Element is clipped at the bottom.
				scrollToY(elemBottom - containerHeight + edgeOffset, duration, onDone);
			} else if (onDone) {
				onDone();
			}
		};

		/**
   * Scrolls to the center of an element.
   *
   * @param {elem} The element.
   * @param {duration} Optionally the duration of the scroll operation.
   * @param {offset} Optionally the offset of the top of the element from the center of the screen.
   * @param {onDone} An optional callback function to be invoked once the scroll finished.
   */
		var scrollToCenterOf = function scrollToCenterOf(elem, duration, offset, onDone) {
			scrollToY(Math.max(0, container.getTopOf(elem) - container.getHeight() / 2 + (offset || elem.getBoundingClientRect().height / 2)), duration, onDone);
		};

		/**
   * Changes default settings for this scroller.
   *
   * @param {newDefaultDuration} Optionally a new value for default duration, used for each scroll method by default.
   *        Ignored if null or undefined.
   * @param {newEdgeOffset} Optionally a new value for the edge offset, used by each scroll method by default. Ignored if null or undefined.
   * @returns An object with the current values.
   */
		var setup = function setup(newDefaultDuration, newEdgeOffset) {
			if (newDefaultDuration === 0 || newDefaultDuration) {
				defaultDuration = newDefaultDuration;
			}
			if (newEdgeOffset === 0 || newEdgeOffset) {
				edgeOffset = newEdgeOffset;
			}
			return {
				defaultDuration: defaultDuration,
				edgeOffset: edgeOffset
			};
		};

		return {
			setup: setup,
			to: scrollToElem,
			toY: scrollToY,
			intoView: scrollIntoView,
			center: scrollToCenterOf,
			stop: stopScroll,
			moving: function moving() {
				return !!scrollTimeoutId;
			},
			getY: container.getY,
			getTopOf: container.getTopOf
		};
	};

	var docElem = document.documentElement;
	var getDocY = function getDocY() {
		return window.scrollY || docElem.scrollTop;
	};

	// Create a scroller for the document:
	var zenscroll = makeScroller({
		body: document.scrollingElement || document.body,
		toY: function toY(y) {
			window.scrollTo(0, y);
		},
		getY: getDocY,
		getHeight: function getHeight() {
			return window.innerHeight || docElem.clientHeight;
		},
		getTopOf: function getTopOf(elem) {
			return elem.getBoundingClientRect().top + getDocY() - docElem.offsetTop;
		}
	});

	/**
  * Creates a scroller from the provided container element (e.g., a DIV)
  *
  * @param {scrollContainer} The vertical position within the document.
  * @param {defaultDuration} Optionally a value for default duration, used for each scroll method by default.
  *        Ignored if 0 or null or undefined.
  * @param {edgeOffset} Optionally a value for the edge offset, used by each scroll method by default. 
  *        Ignored if null or undefined.
  * @returns A scroller object, similar to `zenscroll` but controlling the provided element.
  */
	zenscroll.createScroller = function (scrollContainer, defaultDuration, edgeOffset) {
		return makeScroller({
			body: scrollContainer,
			toY: function toY(y) {
				scrollContainer.scrollTop = y;
			},
			getY: function getY() {
				return scrollContainer.scrollTop;
			},
			getHeight: function getHeight() {
				return Math.min(scrollContainer.clientHeight, window.innerHeight || docElem.clientHeight);
			},
			getTopOf: function getTopOf(elem) {
				return elem.offsetTop;
			}
		}, defaultDuration, edgeOffset);
	};

	// Automatic link-smoothing on achors
	// Exclude IE8- or when native is enabled or Zenscroll auto- is disabled
	if ("addEventListener" in window && !window.noZensmooth && !isNativeSmoothScrollEnabledOn(document.body)) {

		var isScrollRestorationSupported = "scrollRestoration" in history;

		// On first load & refresh make sure the browser restores the position first
		if (isScrollRestorationSupported) {
			history.scrollRestoration = "auto";
		}

		window.addEventListener("load", function () {

			if (isScrollRestorationSupported) {
				// Set it to manual
				setTimeout(function () {
					history.scrollRestoration = "manual";
				}, 9);
				window.addEventListener("popstate", function (event) {
					if (event.state && "zenscrollY" in event.state) {
						zenscroll.toY(event.state.zenscrollY);
					}
				}, false);
			}

			// Add edge offset on first load if necessary
			// This may not work on IE (or older computer?) as it requires more timeout, around 100 ms
			if (window.location.hash) {
				setTimeout(function () {
					// Adjustment is only needed if there is an edge offset:
					var edgeOffset = zenscroll.setup().edgeOffset;
					if (edgeOffset) {
						var targetElem = document.getElementById(window.location.href.split("#")[1]);
						if (targetElem) {
							var targetY = Math.max(0, zenscroll.getTopOf(targetElem) - edgeOffset);
							var diff = zenscroll.getY() - targetY;
							// Only do the adjustment if the browser is very close to the element:
							if (0 <= diff && diff < 9) {
								window.scrollTo(0, targetY);
							}
						}
					}
				}, 9);
			}
		}, false);

		// Handling clicks on anchors
		var RE_noZensmooth = new RegExp("(^|\\s)noZensmooth(\\s|$)");
		window.addEventListener("click", function (event) {
			var anchor = event.target;
			while (anchor && anchor.tagName !== "A") {
				anchor = anchor.parentNode;
			}
			// Let the browser handle the click if it wasn't with the primary button, or with some modifier keys:
			if (!anchor || event.which !== 1 || event.shiftKey || event.metaKey || event.ctrlKey || event.altKey) {
				return;
			}
			// Save the current scrolling position so it can be used for scroll restoration:
			if (isScrollRestorationSupported) {
				try {
					history.replaceState({ zenscrollY: zenscroll.getY() }, "");
				} catch (e) {
					// Avoid the Chrome Security exception on file protocol, e.g., file://index.html
				}
			}
			// Find the referenced ID:
			var href = anchor.getAttribute("href") || "";
			if (href.indexOf("#") === 0 && !RE_noZensmooth.test(anchor.className)) {
				var targetY = 0;
				var targetElem = document.getElementById(href.substring(1));
				if (href !== "#") {
					if (!targetElem) {
						// Let the browser handle the click if the target ID is not found.
						return;
					}
					targetY = zenscroll.getTopOf(targetElem);
				}
				event.preventDefault();
				// By default trigger the browser's `hashchange` event...
				var onDone = function onDone() {
					window.location = href;
				};
				// ...unless there is an edge offset specified
				var edgeOffset = zenscroll.setup().edgeOffset;
				if (edgeOffset) {
					targetY = Math.max(0, targetY - edgeOffset);
					onDone = function onDone() {
						history.pushState(null, "", href);
					};
				}
				zenscroll.toY(targetY, null, onDone);
			}
		}, false);
	}

	return zenscroll;
});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = hamburger;

var _utils = __webpack_require__(0);

function hamburger() {

    var burger = (0, _utils.the)('#hamburger-1');
    var menu = (0, _utils.the)('#menu');

    burger.addEventListener('click', function (_) {
        menu.classList.toggle('openned');
        burger.classList.toggle('is-active');
    });

    menu.addEventListener('click', function (_) {
        menu.classList.toggle('openned');
        burger.classList.toggle('is-active');
    });
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = markOnMenu;

var _utils = __webpack_require__(0);

function markOnMenu() {

    var anchors = [];

    (0, _utils.forEach)((0, _utils.all)('.nav-item'), function (item) {
        var href = item.getAttribute('href').replace('#', '');
        anchors.push({ href: href, item: item });
    });

    (0, _utils.forEach)((0, _utils.all)('.section'), function (section) {

        var scroll = new _utils.ScrollHandler();

        var _getElemOffset = (0, _utils.getElemOffset)(section),
            top = _getElemOffset.top;

        function action(section) {

            if (top - 120 < scroll.lastPosY) {

                var id = section.id;
                var found = anchors.find(function (anchor) {
                    return id === anchor.href;
                });

                if (found) {
                    (0, _utils.forEach)(anchors, function (anchor) {
                        return anchor.item.classList.remove('actual');
                    });
                    found.item.classList.add('actual');
                } else {
                    (0, _utils.forEach)(anchors, function (anchor) {
                        return anchor.item.classList.remove('actual');
                    });
                }
            }
        }

        scroll.init({ after: function after() {
                return action(section);
            } });
    });
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */
!function (name, definition) {

  if (true) module.exports = definition();else if (typeof define == 'function' && _typeof(define.amd) == 'object') define(definition);else this[name] = definition();
}('domready', function () {

  var fns = [],
      _listener,
      doc = document,
      hack = doc.documentElement.doScroll,
      domContentLoaded = 'DOMContentLoaded',
      loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState);

  if (!loaded) doc.addEventListener(domContentLoaded, _listener = function listener() {
    doc.removeEventListener(domContentLoaded, _listener);
    loaded = 1;
    while (_listener = fns.shift()) {
      _listener();
    }
  });

  return function (fn) {
    loaded ? setTimeout(fn, 0) : fns.push(fn);
  };
});

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = moveOnMobile;

var _utils = __webpack_require__(0);

var _isMobile = __webpack_require__(1);

var _isMobile2 = _interopRequireDefault(_isMobile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function moveOnMobile() {

    var move = (0, _utils.the)('.move');
    var here = (0, _utils.the)('.here');

    here.appendChild(move);
}

/***/ })
/******/ ]);
//# sourceMappingURL=scripts.js.map