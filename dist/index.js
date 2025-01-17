import * as x from "react";
import Je, { forwardRef as Bc, useContext as Wc, Children as Uc, isValidElement as gn, cloneElement as bn } from "react";
import * as qc from "react-dom";
import fn from "react-dom";
function Yc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function _t(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var wo = { exports: {} }, Sr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ji;
function Hc() {
  if (ji)
    return Sr;
  ji = 1;
  var e = Je, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, l, u) {
    var f, p = {}, d = null, g = null;
    u !== void 0 && (d = "" + u), l.key !== void 0 && (d = "" + l.key), l.ref !== void 0 && (g = l.ref);
    for (f in l)
      n.call(l, f) && !i.hasOwnProperty(f) && (p[f] = l[f]);
    if (c && c.defaultProps)
      for (f in l = c.defaultProps, l)
        p[f] === void 0 && (p[f] = l[f]);
    return { $$typeof: t, type: c, key: d, ref: g, props: p, _owner: o.current };
  }
  return Sr.Fragment = r, Sr.jsx = s, Sr.jsxs = s, Sr;
}
var _r = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ki;
function Gc() {
  return ki || (ki = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Je, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), y = Symbol.iterator, m = "@@iterator";
    function v(h) {
      if (h === null || typeof h != "object")
        return null;
      var $ = y && h[y] || h[m];
      return typeof $ == "function" ? $ : null;
    }
    var O = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(h) {
      {
        for (var $ = arguments.length, I = new Array($ > 1 ? $ - 1 : 0), ne = 1; ne < $; ne++)
          I[ne - 1] = arguments[ne];
        w("error", h, I);
      }
    }
    function w(h, $, I) {
      {
        var ne = O.ReactDebugCurrentFrame, le = ne.getStackAddendum();
        le !== "" && ($ += "%s", I = I.concat([le]));
        var xe = I.map(function(ce) {
          return String(ce);
        });
        xe.unshift("Warning: " + $), Function.prototype.apply.call(console[h], console, xe);
      }
    }
    var T = !1, b = !1, S = !1, _ = !1, H = !1, U;
    U = Symbol.for("react.module.reference");
    function M(h) {
      return !!(typeof h == "string" || typeof h == "function" || h === n || h === i || H || h === o || h === u || h === f || _ || h === g || T || b || S || typeof h == "object" && h !== null && (h.$$typeof === d || h.$$typeof === p || h.$$typeof === s || h.$$typeof === c || h.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      h.$$typeof === U || h.getModuleId !== void 0));
    }
    function L(h, $, I) {
      var ne = h.displayName;
      if (ne)
        return ne;
      var le = $.displayName || $.name || "";
      return le !== "" ? I + "(" + le + ")" : I;
    }
    function K(h) {
      return h.displayName || "Context";
    }
    function V(h) {
      if (h == null)
        return null;
      if (typeof h.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
        return h.displayName || h.name || null;
      if (typeof h == "string")
        return h;
      switch (h) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case u:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case c:
            var $ = h;
            return K($) + ".Consumer";
          case s:
            var I = h;
            return K(I._context) + ".Provider";
          case l:
            return L(h, h.render, "ForwardRef");
          case p:
            var ne = h.displayName || null;
            return ne !== null ? ne : V(h.type) || "Memo";
          case d: {
            var le = h, xe = le._payload, ce = le._init;
            try {
              return V(ce(xe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var G = Object.assign, q = 0, F, X, te, re, C, k, ee;
    function Z() {
    }
    Z.__reactDisabledLog = !0;
    function z() {
      {
        if (q === 0) {
          F = console.log, X = console.info, te = console.warn, re = console.error, C = console.group, k = console.groupCollapsed, ee = console.groupEnd;
          var h = {
            configurable: !0,
            enumerable: !0,
            value: Z,
            writable: !0
          };
          Object.defineProperties(console, {
            info: h,
            log: h,
            warn: h,
            error: h,
            group: h,
            groupCollapsed: h,
            groupEnd: h
          });
        }
        q++;
      }
    }
    function J() {
      {
        if (q--, q === 0) {
          var h = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: G({}, h, {
              value: F
            }),
            info: G({}, h, {
              value: X
            }),
            warn: G({}, h, {
              value: te
            }),
            error: G({}, h, {
              value: re
            }),
            group: G({}, h, {
              value: C
            }),
            groupCollapsed: G({}, h, {
              value: k
            }),
            groupEnd: G({}, h, {
              value: ee
            })
          });
        }
        q < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var N = O.ReactCurrentDispatcher, D;
    function A(h, $, I) {
      {
        if (D === void 0)
          try {
            throw Error();
          } catch (le) {
            var ne = le.stack.trim().match(/\n( *(at )?)/);
            D = ne && ne[1] || "";
          }
        return `
` + D + h;
      }
    }
    var W = !1, Q;
    {
      var se = typeof WeakMap == "function" ? WeakMap : Map;
      Q = new se();
    }
    function j(h, $) {
      if (!h || W)
        return "";
      {
        var I = Q.get(h);
        if (I !== void 0)
          return I;
      }
      var ne;
      W = !0;
      var le = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var xe;
      xe = N.current, N.current = null, z();
      try {
        if ($) {
          var ce = function() {
            throw Error();
          };
          if (Object.defineProperty(ce.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ce, []);
            } catch (wt) {
              ne = wt;
            }
            Reflect.construct(h, [], ce);
          } else {
            try {
              ce.call();
            } catch (wt) {
              ne = wt;
            }
            h.call(ce.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (wt) {
            ne = wt;
          }
          h();
        }
      } catch (wt) {
        if (wt && ne && typeof wt.stack == "string") {
          for (var ae = wt.stack.split(`
`), Ie = ne.stack.split(`
`), Y = ae.length - 1, ue = Ie.length - 1; Y >= 1 && ue >= 0 && ae[Y] !== Ie[ue]; )
            ue--;
          for (; Y >= 1 && ue >= 0; Y--, ue--)
            if (ae[Y] !== Ie[ue]) {
              if (Y !== 1 || ue !== 1)
                do
                  if (Y--, ue--, ue < 0 || ae[Y] !== Ie[ue]) {
                    var ot = `
` + ae[Y].replace(" at new ", " at ");
                    return h.displayName && ot.includes("<anonymous>") && (ot = ot.replace("<anonymous>", h.displayName)), typeof h == "function" && Q.set(h, ot), ot;
                  }
                while (Y >= 1 && ue >= 0);
              break;
            }
        }
      } finally {
        W = !1, N.current = xe, J(), Error.prepareStackTrace = le;
      }
      var tr = h ? h.displayName || h.name : "", Ni = tr ? A(tr) : "";
      return typeof h == "function" && Q.set(h, Ni), Ni;
    }
    function Re(h, $, I) {
      return j(h, !1);
    }
    function B(h) {
      var $ = h.prototype;
      return !!($ && $.isReactComponent);
    }
    function Oe(h, $, I) {
      if (h == null)
        return "";
      if (typeof h == "function")
        return j(h, B(h));
      if (typeof h == "string")
        return A(h);
      switch (h) {
        case u:
          return A("Suspense");
        case f:
          return A("SuspenseList");
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case l:
            return Re(h.render);
          case p:
            return Oe(h.type, $, I);
          case d: {
            var ne = h, le = ne._payload, xe = ne._init;
            try {
              return Oe(xe(le), $, I);
            } catch {
            }
          }
        }
      return "";
    }
    var je = Object.prototype.hasOwnProperty, tt = {}, $e = O.ReactDebugCurrentFrame;
    function dt(h) {
      if (h) {
        var $ = h._owner, I = Oe(h.type, h._source, $ ? $.type : null);
        $e.setExtraStackFrame(I);
      } else
        $e.setExtraStackFrame(null);
    }
    function ke(h, $, I, ne, le) {
      {
        var xe = Function.call.bind(je);
        for (var ce in h)
          if (xe(h, ce)) {
            var ae = void 0;
            try {
              if (typeof h[ce] != "function") {
                var Ie = Error((ne || "React class") + ": " + I + " type `" + ce + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[ce] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ie.name = "Invariant Violation", Ie;
              }
              ae = h[ce]($, ce, ne, I, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Y) {
              ae = Y;
            }
            ae && !(ae instanceof Error) && (dt(le), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ne || "React class", I, ce, typeof ae), dt(null)), ae instanceof Error && !(ae.message in tt) && (tt[ae.message] = !0, dt(le), R("Failed %s type: %s", I, ae.message), dt(null));
          }
      }
    }
    var rt = Array.isArray;
    function Ge(h) {
      return rt(h);
    }
    function ht(h) {
      {
        var $ = typeof Symbol == "function" && Symbol.toStringTag, I = $ && h[Symbol.toStringTag] || h.constructor.name || "Object";
        return I;
      }
    }
    function Ke(h) {
      try {
        return De(h), !1;
      } catch {
        return !0;
      }
    }
    function De(h) {
      return "" + h;
    }
    function nt(h) {
      if (Ke(h))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ht(h)), De(h);
    }
    var Be = O.ReactCurrentOwner, $t = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ie, Le, Tt;
    Tt = {};
    function vt(h) {
      if (je.call(h, "ref")) {
        var $ = Object.getOwnPropertyDescriptor(h, "ref").get;
        if ($ && $.isReactWarning)
          return !1;
      }
      return h.ref !== void 0;
    }
    function Dt(h) {
      if (je.call(h, "key")) {
        var $ = Object.getOwnPropertyDescriptor(h, "key").get;
        if ($ && $.isReactWarning)
          return !1;
      }
      return h.key !== void 0;
    }
    function on(h, $) {
      if (typeof h.ref == "string" && Be.current && $ && Be.current.stateNode !== $) {
        var I = V(Be.current.type);
        Tt[I] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', V(Be.current.type), h.ref), Tt[I] = !0);
      }
    }
    function Kt(h, $) {
      {
        var I = function() {
          ie || (ie = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", $));
        };
        I.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: I,
          configurable: !0
        });
      }
    }
    function Xt(h, $) {
      {
        var I = function() {
          Le || (Le = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", $));
        };
        I.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: I,
          configurable: !0
        });
      }
    }
    var wr = function(h, $, I, ne, le, xe, ce) {
      var ae = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: h,
        key: $,
        ref: I,
        props: ce,
        // Record the component responsible for creating this element.
        _owner: xe
      };
      return ae._store = {}, Object.defineProperty(ae._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ae, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ne
      }), Object.defineProperty(ae, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: le
      }), Object.freeze && (Object.freeze(ae.props), Object.freeze(ae)), ae;
    };
    function an(h, $, I, ne, le) {
      {
        var xe, ce = {}, ae = null, Ie = null;
        I !== void 0 && (nt(I), ae = "" + I), Dt($) && (nt($.key), ae = "" + $.key), vt($) && (Ie = $.ref, on($, le));
        for (xe in $)
          je.call($, xe) && !$t.hasOwnProperty(xe) && (ce[xe] = $[xe]);
        if (h && h.defaultProps) {
          var Y = h.defaultProps;
          for (xe in Y)
            ce[xe] === void 0 && (ce[xe] = Y[xe]);
        }
        if (ae || Ie) {
          var ue = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          ae && Kt(ce, ue), Ie && Xt(ce, ue);
        }
        return wr(h, ae, Ie, le, ne, Be.current, ce);
      }
    }
    var Cr = O.ReactCurrentOwner, sn = O.ReactDebugCurrentFrame;
    function Nt(h) {
      if (h) {
        var $ = h._owner, I = Oe(h.type, h._source, $ ? $.type : null);
        sn.setExtraStackFrame(I);
      } else
        sn.setExtraStackFrame(null);
    }
    var Jt;
    Jt = !1;
    function Zt(h) {
      return typeof h == "object" && h !== null && h.$$typeof === t;
    }
    function Rr() {
      {
        if (Cr.current) {
          var h = V(Cr.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
    }
    function cn(h) {
      {
        if (h !== void 0) {
          var $ = h.fileName.replace(/^.*[\\\/]/, ""), I = h.lineNumber;
          return `

Check your code at ` + $ + ":" + I + ".";
        }
        return "";
      }
    }
    var ln = {};
    function so(h) {
      {
        var $ = Rr();
        if (!$) {
          var I = typeof h == "string" ? h : h.displayName || h.name;
          I && ($ = `

Check the top-level render call using <` + I + ">.");
        }
        return $;
      }
    }
    function un(h, $) {
      {
        if (!h._store || h._store.validated || h.key != null)
          return;
        h._store.validated = !0;
        var I = so($);
        if (ln[I])
          return;
        ln[I] = !0;
        var ne = "";
        h && h._owner && h._owner !== Cr.current && (ne = " It was passed a child from " + V(h._owner.type) + "."), Nt(h), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', I, ne), Nt(null);
      }
    }
    function Qt(h, $) {
      {
        if (typeof h != "object")
          return;
        if (Ge(h))
          for (var I = 0; I < h.length; I++) {
            var ne = h[I];
            Zt(ne) && un(ne, $);
          }
        else if (Zt(h))
          h._store && (h._store.validated = !0);
        else if (h) {
          var le = v(h);
          if (typeof le == "function" && le !== h.entries)
            for (var xe = le.call(h), ce; !(ce = xe.next()).done; )
              Zt(ce.value) && un(ce.value, $);
        }
      }
    }
    function co(h) {
      {
        var $ = h.type;
        if ($ == null || typeof $ == "string")
          return;
        var I;
        if (typeof $ == "function")
          I = $.propTypes;
        else if (typeof $ == "object" && ($.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        $.$$typeof === p))
          I = $.propTypes;
        else
          return;
        if (I) {
          var ne = V($);
          ke(I, h.props, "prop", ne, h);
        } else if ($.PropTypes !== void 0 && !Jt) {
          Jt = !0;
          var le = V($);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", le || "Unknown");
        }
        typeof $.getDefaultProps == "function" && !$.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Lt(h) {
      {
        for (var $ = Object.keys(h.props), I = 0; I < $.length; I++) {
          var ne = $[I];
          if (ne !== "children" && ne !== "key") {
            Nt(h), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ne), Nt(null);
            break;
          }
        }
        h.ref !== null && (Nt(h), R("Invalid attribute `ref` supplied to `React.Fragment`."), Nt(null));
      }
    }
    function er(h, $, I, ne, le, xe) {
      {
        var ce = M(h);
        if (!ce) {
          var ae = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (ae += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ie = cn(le);
          Ie ? ae += Ie : ae += Rr();
          var Y;
          h === null ? Y = "null" : Ge(h) ? Y = "array" : h !== void 0 && h.$$typeof === t ? (Y = "<" + (V(h.type) || "Unknown") + " />", ae = " Did you accidentally export a JSX literal instead of a component?") : Y = typeof h, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Y, ae);
        }
        var ue = an(h, $, I, le, xe);
        if (ue == null)
          return ue;
        if (ce) {
          var ot = $.children;
          if (ot !== void 0)
            if (ne)
              if (Ge(ot)) {
                for (var tr = 0; tr < ot.length; tr++)
                  Qt(ot[tr], h);
                Object.freeze && Object.freeze(ot);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Qt(ot, h);
        }
        return h === n ? Lt(ue) : co(ue), ue;
      }
    }
    function We(h, $, I) {
      return er(h, $, I, !0);
    }
    function Vt(h, $, I) {
      return er(h, $, I, !1);
    }
    var lo = Vt, Ft = We;
    _r.Fragment = n, _r.jsx = lo, _r.jsxs = Ft;
  }()), _r;
}
process.env.NODE_ENV === "production" ? wo.exports = Hc() : wo.exports = Gc();
var P = wo.exports;
const Kc = {
  black: "#000",
  white: "#fff"
}, Lr = Kc, Xc = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, rr = Xc, Jc = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, nr = Jc, Zc = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, or = Zc, Qc = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, ir = Qc, el = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, ar = el, tl = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, Pr = tl, rl = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, nl = rl;
function Vr(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let r = 1; r < arguments.length; r += 1)
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const ol = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vr
}, Symbol.toStringTag, { value: "Module" })), pr = "$$material";
function E() {
  return E = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, E.apply(this, arguments);
}
function pe(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, i;
  for (i = 0; i < n.length; i++)
    o = n[i], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function Ja(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var il = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, al = /* @__PURE__ */ Ja(
  function(e) {
    return il.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function sl(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function cl(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var ll = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? process.env.NODE_ENV === "production" : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(cl(this));
    var o = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var i = n.charCodeAt(0) === 64 && n.charCodeAt(1) === 105;
      i && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + n + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !i;
    }
    if (this.isSpeedy) {
      var s = sl(o);
      try {
        s.insertRule(n, s.cssRules.length);
      } catch (c) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(n) && console.error('There was a problem inserting the following rule: "' + n + '"', c);
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      return n.parentNode && n.parentNode.removeChild(n);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, e;
}(), Ae = "-ms-", Rn = "-moz-", me = "-webkit-", Fo = "comm", zo = "rule", Bo = "decl", ul = "@import", Za = "@keyframes", fl = "@layer", pl = Math.abs, zn = String.fromCharCode, dl = Object.assign;
function ml(e, t) {
  return Me(e, 0) ^ 45 ? (((t << 2 ^ Me(e, 0)) << 2 ^ Me(e, 1)) << 2 ^ Me(e, 2)) << 2 ^ Me(e, 3) : 0;
}
function Qa(e) {
  return e.trim();
}
function hl(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function he(e, t, r) {
  return e.replace(t, r);
}
function Co(e, t) {
  return e.indexOf(t);
}
function Me(e, t) {
  return e.charCodeAt(t) | 0;
}
function Fr(e, t, r) {
  return e.slice(t, r);
}
function yt(e) {
  return e.length;
}
function Wo(e) {
  return e.length;
}
function pn(e, t) {
  return t.push(e), e;
}
function vl(e, t) {
  return e.map(t).join("");
}
var Bn = 1, dr = 1, es = 0, Ye = 0, Pe = 0, br = "";
function Wn(e, t, r, n, o, i, s) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: Bn, column: dr, length: s, return: "" };
}
function $r(e, t) {
  return dl(Wn("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function yl() {
  return Pe;
}
function gl() {
  return Pe = Ye > 0 ? Me(br, --Ye) : 0, dr--, Pe === 10 && (dr = 1, Bn--), Pe;
}
function Ze() {
  return Pe = Ye < es ? Me(br, Ye++) : 0, dr++, Pe === 10 && (dr = 1, Bn++), Pe;
}
function bt() {
  return Me(br, Ye);
}
function xn() {
  return Ye;
}
function Hr(e, t) {
  return Fr(br, e, t);
}
function zr(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function ts(e) {
  return Bn = dr = 1, es = yt(br = e), Ye = 0, [];
}
function rs(e) {
  return br = "", e;
}
function En(e) {
  return Qa(Hr(Ye - 1, Ro(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function bl(e) {
  for (; (Pe = bt()) && Pe < 33; )
    Ze();
  return zr(e) > 2 || zr(Pe) > 3 ? "" : " ";
}
function xl(e, t) {
  for (; --t && Ze() && !(Pe < 48 || Pe > 102 || Pe > 57 && Pe < 65 || Pe > 70 && Pe < 97); )
    ;
  return Hr(e, xn() + (t < 6 && bt() == 32 && Ze() == 32));
}
function Ro(e) {
  for (; Ze(); )
    switch (Pe) {
      case e:
        return Ye;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ro(Pe);
        break;
      case 40:
        e === 41 && Ro(e);
        break;
      case 92:
        Ze();
        break;
    }
  return Ye;
}
function El(e, t) {
  for (; Ze() && e + Pe !== 57; )
    if (e + Pe === 84 && bt() === 47)
      break;
  return "/*" + Hr(t, Ye - 1) + "*" + zn(e === 47 ? e : Ze());
}
function Ol(e) {
  for (; !zr(bt()); )
    Ze();
  return Hr(e, Ye);
}
function Tl(e) {
  return rs(On("", null, null, null, [""], e = ts(e), 0, [0], e));
}
function On(e, t, r, n, o, i, s, c, l) {
  for (var u = 0, f = 0, p = s, d = 0, g = 0, y = 0, m = 1, v = 1, O = 1, R = 0, w = "", T = o, b = i, S = n, _ = w; v; )
    switch (y = R, R = Ze()) {
      case 40:
        if (y != 108 && Me(_, p - 1) == 58) {
          Co(_ += he(En(R), "&", "&\f"), "&\f") != -1 && (O = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        _ += En(R);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        _ += bl(y);
        break;
      case 92:
        _ += xl(xn() - 1, 7);
        continue;
      case 47:
        switch (bt()) {
          case 42:
          case 47:
            pn(wl(El(Ze(), xn()), t, r), l);
            break;
          default:
            _ += "/";
        }
        break;
      case 123 * m:
        c[u++] = yt(_) * O;
      case 125 * m:
      case 59:
      case 0:
        switch (R) {
          case 0:
          case 125:
            v = 0;
          case 59 + f:
            O == -1 && (_ = he(_, /\f/g, "")), g > 0 && yt(_) - p && pn(g > 32 ? Mi(_ + ";", n, r, p - 1) : Mi(he(_, " ", "") + ";", n, r, p - 2), l);
            break;
          case 59:
            _ += ";";
          default:
            if (pn(S = Ii(_, t, r, u, f, o, c, w, T = [], b = [], p), i), R === 123)
              if (f === 0)
                On(_, t, S, S, T, i, p, c, b);
              else
                switch (d === 99 && Me(_, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    On(e, S, S, n && pn(Ii(e, S, S, 0, 0, o, c, w, o, T = [], p), b), o, b, p, c, n ? T : b);
                    break;
                  default:
                    On(_, S, S, S, [""], b, 0, c, b);
                }
        }
        u = f = g = 0, m = O = 1, w = _ = "", p = s;
        break;
      case 58:
        p = 1 + yt(_), g = y;
      default:
        if (m < 1) {
          if (R == 123)
            --m;
          else if (R == 125 && m++ == 0 && gl() == 125)
            continue;
        }
        switch (_ += zn(R), R * m) {
          case 38:
            O = f > 0 ? 1 : (_ += "\f", -1);
            break;
          case 44:
            c[u++] = (yt(_) - 1) * O, O = 1;
            break;
          case 64:
            bt() === 45 && (_ += En(Ze())), d = bt(), f = p = yt(w = _ += Ol(xn())), R++;
            break;
          case 45:
            y === 45 && yt(_) == 2 && (m = 0);
        }
    }
  return i;
}
function Ii(e, t, r, n, o, i, s, c, l, u, f) {
  for (var p = o - 1, d = o === 0 ? i : [""], g = Wo(d), y = 0, m = 0, v = 0; y < n; ++y)
    for (var O = 0, R = Fr(e, p + 1, p = pl(m = s[y])), w = e; O < g; ++O)
      (w = Qa(m > 0 ? d[O] + " " + R : he(R, /&\f/g, d[O]))) && (l[v++] = w);
  return Wn(e, t, r, o === 0 ? zo : c, l, u, f);
}
function wl(e, t, r) {
  return Wn(e, t, r, Fo, zn(yl()), Fr(e, 2, -2), 0);
}
function Mi(e, t, r, n) {
  return Wn(e, t, r, Bo, Fr(e, 0, n), Fr(e, n + 1, -1), n);
}
function ur(e, t) {
  for (var r = "", n = Wo(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function Cl(e, t, r, n) {
  switch (e.type) {
    case fl:
      if (e.children.length)
        break;
    case ul:
    case Bo:
      return e.return = e.return || e.value;
    case Fo:
      return "";
    case Za:
      return e.return = e.value + "{" + ur(e.children, n) + "}";
    case zo:
      e.value = e.props.join(",");
  }
  return yt(r = ur(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Rl(e) {
  var t = Wo(e);
  return function(r, n, o, i) {
    for (var s = "", c = 0; c < t; c++)
      s += e[c](r, n, o, i) || "";
    return s;
  };
}
function Sl(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var _l = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = bt(), o === 38 && i === 12 && (r[n] = 1), !zr(i); )
    Ze();
  return Hr(t, Ye);
}, Pl = function(t, r) {
  var n = -1, o = 44;
  do
    switch (zr(o)) {
      case 0:
        o === 38 && bt() === 12 && (r[n] = 1), t[n] += _l(Ye - 1, r, n);
        break;
      case 2:
        t[n] += En(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = bt() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += zn(o);
    }
  while (o = Ze());
  return t;
}, $l = function(t, r) {
  return rs(Pl(ts(t), r));
}, Ai = /* @__PURE__ */ new WeakMap(), Nl = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Ai.get(n)) && !o) {
      Ai.set(t, !0);
      for (var i = [], s = $l(r, i), c = n.props, l = 0, u = 0; l < s.length; l++)
        for (var f = 0; f < c.length; f++, u++)
          t.props[u] = i[l] ? s[l].replace(/&\f/g, c[f]) : c[f] + " " + s[l];
    }
  }
}, jl = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
}, kl = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", Il = function(t) {
  return t.type === "comm" && t.children.indexOf(kl) > -1;
}, Ml = function(t) {
  return function(r, n, o) {
    if (!(r.type !== "rule" || t.compat)) {
      var i = r.value.match(/(:first|:nth|:nth-last)-child/g);
      if (i) {
        for (var s = !!r.parent, c = s ? r.parent.children : (
          // global rule at the root level
          o
        ), l = c.length - 1; l >= 0; l--) {
          var u = c[l];
          if (u.line < r.line)
            break;
          if (u.column < r.column) {
            if (Il(u))
              return;
            break;
          }
        }
        i.forEach(function(f) {
          console.error('The pseudo class "' + f + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + f.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, ns = function(t) {
  return t.type.charCodeAt(1) === 105 && t.type.charCodeAt(0) === 64;
}, Al = function(t, r) {
  for (var n = t - 1; n >= 0; n--)
    if (!ns(r[n]))
      return !0;
  return !1;
}, Di = function(t) {
  t.type = "", t.value = "", t.return = "", t.children = "", t.props = "";
}, Dl = function(t, r, n) {
  ns(t) && (t.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), Di(t)) : Al(r, n) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), Di(t)));
};
function os(e, t) {
  switch (ml(e, t)) {
    case 5103:
      return me + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return me + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return me + e + Rn + e + Ae + e + e;
    case 6828:
    case 4268:
      return me + e + Ae + e + e;
    case 6165:
      return me + e + Ae + "flex-" + e + e;
    case 5187:
      return me + e + he(e, /(\w+).+(:[^]+)/, me + "box-$1$2" + Ae + "flex-$1$2") + e;
    case 5443:
      return me + e + Ae + "flex-item-" + he(e, /flex-|-self/, "") + e;
    case 4675:
      return me + e + Ae + "flex-line-pack" + he(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return me + e + Ae + he(e, "shrink", "negative") + e;
    case 5292:
      return me + e + Ae + he(e, "basis", "preferred-size") + e;
    case 6060:
      return me + "box-" + he(e, "-grow", "") + me + e + Ae + he(e, "grow", "positive") + e;
    case 4554:
      return me + he(e, /([^-])(transform)/g, "$1" + me + "$2") + e;
    case 6187:
      return he(he(he(e, /(zoom-|grab)/, me + "$1"), /(image-set)/, me + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return he(e, /(image-set\([^]*)/, me + "$1$`$1");
    case 4968:
      return he(he(e, /(.+:)(flex-)?(.*)/, me + "box-pack:$3" + Ae + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + me + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return he(e, /(.+)-inline(.+)/, me + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (yt(e) - 1 - t > 6)
        switch (Me(e, t + 1)) {
          case 109:
            if (Me(e, t + 4) !== 45)
              break;
          case 102:
            return he(e, /(.+:)(.+)-([^]+)/, "$1" + me + "$2-$3$1" + Rn + (Me(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Co(e, "stretch") ? os(he(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (Me(e, t + 1) !== 115)
        break;
    case 6444:
      switch (Me(e, yt(e) - 3 - (~Co(e, "!important") && 10))) {
        case 107:
          return he(e, ":", ":" + me) + e;
        case 101:
          return he(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + me + (Me(e, 14) === 45 ? "inline-" : "") + "box$3$1" + me + "$2$3$1" + Ae + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Me(e, t + 11)) {
        case 114:
          return me + e + Ae + he(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return me + e + Ae + he(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return me + e + Ae + he(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return me + e + Ae + e + e;
  }
  return e;
}
var Ll = function(t, r, n, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case Bo:
        t.return = os(t.value, t.length);
        break;
      case Za:
        return ur([$r(t, {
          value: he(t.value, "@", "@" + me)
        })], o);
      case zo:
        if (t.length)
          return vl(t.props, function(i) {
            switch (hl(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return ur([$r(t, {
                  props: [he(i, /:(read-\w+)/, ":" + Rn + "$1")]
                })], o);
              case "::placeholder":
                return ur([$r(t, {
                  props: [he(i, /:(plac\w+)/, ":" + me + "input-$1")]
                }), $r(t, {
                  props: [he(i, /:(plac\w+)/, ":" + Rn + "$1")]
                }), $r(t, {
                  props: [he(i, /:(plac\w+)/, Ae + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, Vl = [Ll], is = function(t) {
  var r = t.key;
  if (process.env.NODE_ENV !== "production" && !r)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(m) {
      var v = m.getAttribute("data-emotion");
      v.indexOf(" ") !== -1 && (document.head.appendChild(m), m.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || Vl;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(r))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + r + '" was passed');
  var i = {}, s, c = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(m) {
      for (var v = m.getAttribute("data-emotion").split(" "), O = 1; O < v.length; O++)
        i[v[O]] = !0;
      c.push(m);
    }
  );
  var l, u = [Nl, jl];
  process.env.NODE_ENV !== "production" && u.push(Ml({
    get compat() {
      return y.compat;
    }
  }), Dl);
  {
    var f, p = [Cl, process.env.NODE_ENV !== "production" ? function(m) {
      m.root || (m.return ? f.insert(m.return) : m.value && m.type !== Fo && f.insert(m.value + "{}"));
    } : Sl(function(m) {
      f.insert(m);
    })], d = Rl(u.concat(o, p)), g = function(v) {
      return ur(Tl(v), d);
    };
    l = function(v, O, R, w) {
      f = R, process.env.NODE_ENV !== "production" && O.map !== void 0 && (f = {
        insert: function(b) {
          R.insert(b + O.map);
        }
      }), g(v ? v + "{" + O.styles + "}" : O.styles), w && (y.inserted[O.name] = !0);
    };
  }
  var y = {
    key: r,
    sheet: new ll({
      key: r,
      container: s,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: l
  };
  return y.sheet.hydrate(c), y;
}, dn = { exports: {} }, ve = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Li;
function Fl() {
  if (Li)
    return ve;
  Li = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
  function w(b) {
    if (typeof b == "object" && b !== null) {
      var S = b.$$typeof;
      switch (S) {
        case t:
          switch (b = b.type, b) {
            case l:
            case u:
            case n:
            case i:
            case o:
            case p:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case c:
                case f:
                case y:
                case g:
                case s:
                  return b;
                default:
                  return S;
              }
          }
        case r:
          return S;
      }
    }
  }
  function T(b) {
    return w(b) === u;
  }
  return ve.AsyncMode = l, ve.ConcurrentMode = u, ve.ContextConsumer = c, ve.ContextProvider = s, ve.Element = t, ve.ForwardRef = f, ve.Fragment = n, ve.Lazy = y, ve.Memo = g, ve.Portal = r, ve.Profiler = i, ve.StrictMode = o, ve.Suspense = p, ve.isAsyncMode = function(b) {
    return T(b) || w(b) === l;
  }, ve.isConcurrentMode = T, ve.isContextConsumer = function(b) {
    return w(b) === c;
  }, ve.isContextProvider = function(b) {
    return w(b) === s;
  }, ve.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, ve.isForwardRef = function(b) {
    return w(b) === f;
  }, ve.isFragment = function(b) {
    return w(b) === n;
  }, ve.isLazy = function(b) {
    return w(b) === y;
  }, ve.isMemo = function(b) {
    return w(b) === g;
  }, ve.isPortal = function(b) {
    return w(b) === r;
  }, ve.isProfiler = function(b) {
    return w(b) === i;
  }, ve.isStrictMode = function(b) {
    return w(b) === o;
  }, ve.isSuspense = function(b) {
    return w(b) === p;
  }, ve.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === u || b === i || b === o || b === p || b === d || typeof b == "object" && b !== null && (b.$$typeof === y || b.$$typeof === g || b.$$typeof === s || b.$$typeof === c || b.$$typeof === f || b.$$typeof === v || b.$$typeof === O || b.$$typeof === R || b.$$typeof === m);
  }, ve.typeOf = w, ve;
}
var ye = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vi;
function zl() {
  return Vi || (Vi = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
    function w(j) {
      return typeof j == "string" || typeof j == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      j === n || j === u || j === i || j === o || j === p || j === d || typeof j == "object" && j !== null && (j.$$typeof === y || j.$$typeof === g || j.$$typeof === s || j.$$typeof === c || j.$$typeof === f || j.$$typeof === v || j.$$typeof === O || j.$$typeof === R || j.$$typeof === m);
    }
    function T(j) {
      if (typeof j == "object" && j !== null) {
        var Re = j.$$typeof;
        switch (Re) {
          case t:
            var B = j.type;
            switch (B) {
              case l:
              case u:
              case n:
              case i:
              case o:
              case p:
                return B;
              default:
                var Oe = B && B.$$typeof;
                switch (Oe) {
                  case c:
                  case f:
                  case y:
                  case g:
                  case s:
                    return Oe;
                  default:
                    return Re;
                }
            }
          case r:
            return Re;
        }
      }
    }
    var b = l, S = u, _ = c, H = s, U = t, M = f, L = n, K = y, V = g, G = r, q = i, F = o, X = p, te = !1;
    function re(j) {
      return te || (te = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), C(j) || T(j) === l;
    }
    function C(j) {
      return T(j) === u;
    }
    function k(j) {
      return T(j) === c;
    }
    function ee(j) {
      return T(j) === s;
    }
    function Z(j) {
      return typeof j == "object" && j !== null && j.$$typeof === t;
    }
    function z(j) {
      return T(j) === f;
    }
    function J(j) {
      return T(j) === n;
    }
    function N(j) {
      return T(j) === y;
    }
    function D(j) {
      return T(j) === g;
    }
    function A(j) {
      return T(j) === r;
    }
    function W(j) {
      return T(j) === i;
    }
    function Q(j) {
      return T(j) === o;
    }
    function se(j) {
      return T(j) === p;
    }
    ye.AsyncMode = b, ye.ConcurrentMode = S, ye.ContextConsumer = _, ye.ContextProvider = H, ye.Element = U, ye.ForwardRef = M, ye.Fragment = L, ye.Lazy = K, ye.Memo = V, ye.Portal = G, ye.Profiler = q, ye.StrictMode = F, ye.Suspense = X, ye.isAsyncMode = re, ye.isConcurrentMode = C, ye.isContextConsumer = k, ye.isContextProvider = ee, ye.isElement = Z, ye.isForwardRef = z, ye.isFragment = J, ye.isLazy = N, ye.isMemo = D, ye.isPortal = A, ye.isProfiler = W, ye.isStrictMode = Q, ye.isSuspense = se, ye.isValidElementType = w, ye.typeOf = T;
  }()), ye;
}
var Fi;
function Uo() {
  return Fi || (Fi = 1, process.env.NODE_ENV === "production" ? dn.exports = Fl() : dn.exports = zl()), dn.exports;
}
var as = Uo(), Bl = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Wl = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, ss = {};
ss[as.ForwardRef] = Bl;
ss[as.Memo] = Wl;
var Ul = !0;
function qo(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : n += o + " ";
  }), n;
}
var Un = function(t, r, n) {
  var o = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Ul === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, qn = function(t, r, n) {
  Un(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function ql(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var Yl = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, zi = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Hl = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", Gl = /[A-Z]|^ms/g, cs = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Yo = function(t) {
  return t.charCodeAt(1) === 45;
}, Bi = function(t) {
  return t != null && typeof t != "boolean";
}, uo = /* @__PURE__ */ Ja(function(e) {
  return Yo(e) ? e : e.replace(Gl, "-$&").toLowerCase();
}), Sn = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(cs, function(n, o, i) {
          return mt = {
            name: o,
            styles: i,
            next: mt
          }, o;
        });
  }
  return Yl[t] !== 1 && !Yo(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
if (process.env.NODE_ENV !== "production") {
  var Kl = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, Xl = ["normal", "none", "initial", "inherit", "unset"], Jl = Sn, Zl = /^-ms-/, Ql = /-(.)/g, Wi = {};
  Sn = function(t, r) {
    if (t === "content" && (typeof r != "string" || Xl.indexOf(r) === -1 && !Kl.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + r + "\"'`");
    var n = Jl(t, r);
    return n !== "" && !Yo(t) && t.indexOf("-") !== -1 && Wi[t] === void 0 && (Wi[t] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + t.replace(Zl, "ms-").replace(Ql, function(o, i) {
      return i.toUpperCase();
    }) + "?")), n;
  };
}
var ls = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Br(e, t, r) {
  if (r == null)
    return "";
  if (r.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && r.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(ls);
    return r;
  }
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return mt = {
          name: r.name,
          styles: r.styles,
          next: mt
        }, r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            mt = {
              name: n.name,
              styles: n.styles,
              next: mt
            }, n = n.next;
        var o = r.styles + ";";
        return process.env.NODE_ENV !== "production" && r.map !== void 0 && (o += r.map), o;
      }
      return eu(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var i = mt, s = r(e);
        return mt = i, Br(e, t, s);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var c = [], l = r.replace(cs, function(f, p, d) {
          var g = "animation" + c.length;
          return c.push("const " + g + " = keyframes`" + d.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + g + "}";
        });
        c.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(c, ["`" + l + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + l + "`"));
      }
      break;
  }
  if (t == null)
    return r;
  var u = t[r];
  return u !== void 0 ? u : r;
}
function eu(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += Br(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var s = r[i];
      if (typeof s != "object")
        t != null && t[s] !== void 0 ? n += i + "{" + t[s] + "}" : Bi(s) && (n += uo(i) + ":" + Sn(i, s) + ";");
      else {
        if (i === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(ls);
        if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
          for (var c = 0; c < s.length; c++)
            Bi(s[c]) && (n += uo(i) + ":" + Sn(i, s[c]) + ";");
        else {
          var l = Br(e, t, s);
          switch (i) {
            case "animation":
            case "animationName": {
              n += uo(i) + ":" + l + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && i === "undefined" && console.error(Hl), n += i + "{" + l + "}";
          }
        }
      }
    }
  return n;
}
var Ui = /label:\s*([^\s;\n{]+)\s*(;|$)/g, us;
process.env.NODE_ENV !== "production" && (us = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var mt, mr = function(t, r, n) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, i = "";
  mt = void 0;
  var s = t[0];
  s == null || s.raw === void 0 ? (o = !1, i += Br(n, r, s)) : (process.env.NODE_ENV !== "production" && s[0] === void 0 && console.error(zi), i += s[0]);
  for (var c = 1; c < t.length; c++)
    i += Br(n, r, t[c]), o && (process.env.NODE_ENV !== "production" && s[c] === void 0 && console.error(zi), i += s[c]);
  var l;
  process.env.NODE_ENV !== "production" && (i = i.replace(us, function(d) {
    return l = d, "";
  })), Ui.lastIndex = 0;
  for (var u = "", f; (f = Ui.exec(i)) !== null; )
    u += "-" + // $FlowFixMe we know it's not null
    f[1];
  var p = ql(i) + u;
  return process.env.NODE_ENV !== "production" ? {
    name: p,
    styles: i,
    map: l,
    next: mt,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: p,
    styles: i,
    next: mt
  };
}, tu = function(t) {
  return t();
}, fs = x.useInsertionEffect ? x.useInsertionEffect : !1, Ho = fs || tu, qi = fs || x.useLayoutEffect, ru = {}.hasOwnProperty, Go = /* @__PURE__ */ x.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ is({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (Go.displayName = "EmotionCacheContext");
var nu = Go.Provider, Yn = function(t) {
  return /* @__PURE__ */ Bc(function(r, n) {
    var o = Wc(Go);
    return t(r, o, n);
  });
}, It = /* @__PURE__ */ x.createContext({});
process.env.NODE_ENV !== "production" && (It.displayName = "EmotionThemeContext");
var Yi = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Hi = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", ou = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return Un(r, n, o), Ho(function() {
    return qn(r, n, o);
  }), null;
}, iu = /* @__PURE__ */ Yn(function(e, t, r) {
  var n = e.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var o = e[Yi], i = [n], s = "";
  typeof e.className == "string" ? s = qo(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var c = mr(i, void 0, x.useContext(It));
  if (process.env.NODE_ENV !== "production" && c.name.indexOf("-") === -1) {
    var l = e[Hi];
    l && (c = mr([c, "label:" + l + ";"]));
  }
  s += t.key + "-" + c.name;
  var u = {};
  for (var f in e)
    ru.call(e, f) && f !== "css" && f !== Yi && (process.env.NODE_ENV === "production" || f !== Hi) && (u[f] = e[f]);
  return u.ref = r, u.className = s, /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement(ou, {
    cache: t,
    serialized: c,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ x.createElement(o, u));
});
process.env.NODE_ENV !== "production" && (iu.displayName = "EmotionCssPropInternal");
var fo = { exports: {} }, Gi;
function ps() {
  return Gi || (Gi = 1, function(e) {
    function t() {
      return e.exports = t = Object.assign ? Object.assign.bind() : function(r) {
        for (var n = 1; n < arguments.length; n++) {
          var o = arguments[n];
          for (var i in o)
            Object.prototype.hasOwnProperty.call(o, i) && (r[i] = o[i]);
        }
        return r;
      }, e.exports.__esModule = !0, e.exports.default = e.exports, t.apply(this, arguments);
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(fo)), fo.exports;
}
ps();
var au = {
  name: "@emotion/react",
  version: "11.11.4",
  main: "dist/emotion-react.cjs.js",
  module: "dist/emotion-react.esm.js",
  browser: {
    "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
  },
  exports: {
    ".": {
      module: {
        worker: "./dist/emotion-react.worker.esm.js",
        browser: "./dist/emotion-react.browser.esm.js",
        default: "./dist/emotion-react.esm.js"
      },
      import: "./dist/emotion-react.cjs.mjs",
      default: "./dist/emotion-react.cjs.js"
    },
    "./jsx-runtime": {
      module: {
        worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
        browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
        default: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
      },
      import: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
      default: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
    },
    "./_isolated-hnrs": {
      module: {
        worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
        browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
        default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
      },
      import: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
      default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
    },
    "./jsx-dev-runtime": {
      module: {
        worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
        browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
        default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
      },
      import: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
      default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
    },
    "./package.json": "./package.json",
    "./types/css-prop": "./types/css-prop.d.ts",
    "./macro": {
      types: {
        import: "./macro.d.mts",
        default: "./macro.d.ts"
      },
      default: "./macro.js"
    }
  },
  types: "types/index.d.ts",
  files: [
    "src",
    "dist",
    "jsx-runtime",
    "jsx-dev-runtime",
    "_isolated-hnrs",
    "types/*.d.ts",
    "macro.*"
  ],
  sideEffects: !1,
  author: "Emotion Contributors",
  license: "MIT",
  scripts: {
    "test:typescript": "dtslint types"
  },
  dependencies: {
    "@babel/runtime": "^7.18.3",
    "@emotion/babel-plugin": "^11.11.0",
    "@emotion/cache": "^11.11.0",
    "@emotion/serialize": "^1.1.3",
    "@emotion/use-insertion-effect-with-fallbacks": "^1.0.1",
    "@emotion/utils": "^1.2.1",
    "@emotion/weak-memoize": "^0.3.1",
    "hoist-non-react-statics": "^3.3.1"
  },
  peerDependencies: {
    react: ">=16.8.0"
  },
  peerDependenciesMeta: {
    "@types/react": {
      optional: !0
    }
  },
  devDependencies: {
    "@definitelytyped/dtslint": "0.0.112",
    "@emotion/css": "11.11.2",
    "@emotion/css-prettifier": "1.1.3",
    "@emotion/server": "11.11.0",
    "@emotion/styled": "11.11.0",
    "html-tag-names": "^1.1.2",
    react: "16.14.0",
    "svg-tag-names": "^1.1.1",
    typescript: "^4.5.5"
  },
  repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  publishConfig: {
    access: "public"
  },
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: {
    entrypoints: [
      "./index.js",
      "./jsx-runtime.js",
      "./jsx-dev-runtime.js",
      "./_isolated-hnrs.js"
    ],
    umdName: "emotionReact",
    exports: {
      envConditions: [
        "browser",
        "worker"
      ],
      extra: {
        "./types/css-prop": "./types/css-prop.d.ts",
        "./macro": {
          types: {
            import: "./macro.d.mts",
            default: "./macro.d.ts"
          },
          default: "./macro.js"
        }
      }
    }
  }
}, Ki = !1, ds = /* @__PURE__ */ Yn(function(e, t) {
  process.env.NODE_ENV !== "production" && !Ki && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), Ki = !0);
  var r = e.styles, n = mr([r], void 0, x.useContext(It)), o = x.useRef();
  return qi(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), c = !1, l = document.querySelector('style[data-emotion="' + i + " " + n.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), l !== null && (c = !0, l.setAttribute("data-emotion", i), s.hydrate([l])), o.current = [s, c], function() {
      s.flush();
    };
  }, [t]), qi(function() {
    var i = o.current, s = i[0], c = i[1];
    if (c) {
      i[1] = !1;
      return;
    }
    if (n.next !== void 0 && qn(t, n.next, !0), s.tags.length) {
      var l = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = l, s.flush();
    }
    t.insert("", n, s, !1);
  }, [t, n.name]), null;
});
process.env.NODE_ENV !== "production" && (ds.displayName = "EmotionGlobal");
function ms() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return mr(t);
}
var Hn = function() {
  var t = ms.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, su = function e(t) {
  for (var r = t.length, n = 0, o = ""; n < r; n++) {
    var i = t[n];
    if (i != null) {
      var s = void 0;
      switch (typeof i) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(i))
            s = e(i);
          else {
            process.env.NODE_ENV !== "production" && i.styles !== void 0 && i.name !== void 0 && console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."), s = "";
            for (var c in i)
              i[c] && c && (s && (s += " "), s += c);
          }
          break;
        }
        default:
          s = i;
      }
      s && (o && (o += " "), o += s);
    }
  }
  return o;
};
function cu(e, t, r) {
  var n = [], o = qo(e, n, r);
  return n.length < 2 ? r : o + t(n);
}
var lu = function(t) {
  var r = t.cache, n = t.serializedArr;
  return Ho(function() {
    for (var o = 0; o < n.length; o++)
      qn(r, n[o], !1);
  }), null;
}, uu = /* @__PURE__ */ Yn(function(e, t) {
  var r = !1, n = [], o = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var u = arguments.length, f = new Array(u), p = 0; p < u; p++)
      f[p] = arguments[p];
    var d = mr(f, t.registered);
    return n.push(d), Un(t, d, !1), t.key + "-" + d.name;
  }, i = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var u = arguments.length, f = new Array(u), p = 0; p < u; p++)
      f[p] = arguments[p];
    return cu(t.registered, o, su(f));
  }, s = {
    css: o,
    cx: i,
    theme: x.useContext(It)
  }, c = e.children(s);
  return r = !0, /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement(lu, {
    cache: t,
    serializedArr: n
  }), c);
});
process.env.NODE_ENV !== "production" && (uu.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var Xi = !0, fu = typeof jest < "u" || typeof vi < "u";
  if (Xi && !fu) {
    var Ji = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : Xi ? window : global
    ), Zi = "__EMOTION_REACT_" + au.version.split(".")[0] + "__";
    Ji[Zi] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), Ji[Zi] = !0;
  }
}
var pu = al, du = function(t) {
  return t !== "theme";
}, Qi = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? pu : du;
}, ea = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, ta = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, mu = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return Un(r, n, o), Ho(function() {
    return qn(r, n, o);
  }), null;
}, hu = function e(t, r) {
  if (process.env.NODE_ENV !== "production" && t === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, s;
  r !== void 0 && (i = r.label, s = r.target);
  var c = ea(t, r, n), l = c || Qi(o), u = !l("as");
  return function() {
    var f = arguments, p = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && p.push("label:" + i + ";"), f[0] == null || f[0].raw === void 0)
      p.push.apply(p, f);
    else {
      process.env.NODE_ENV !== "production" && f[0][0] === void 0 && console.error(ta), p.push(f[0][0]);
      for (var d = f.length, g = 1; g < d; g++)
        process.env.NODE_ENV !== "production" && f[0][g] === void 0 && console.error(ta), p.push(f[g], f[0][g]);
    }
    var y = Yn(function(m, v, O) {
      var R = u && m.as || o, w = "", T = [], b = m;
      if (m.theme == null) {
        b = {};
        for (var S in m)
          b[S] = m[S];
        b.theme = x.useContext(It);
      }
      typeof m.className == "string" ? w = qo(v.registered, T, m.className) : m.className != null && (w = m.className + " ");
      var _ = mr(p.concat(T), v.registered, b);
      w += v.key + "-" + _.name, s !== void 0 && (w += " " + s);
      var H = u && c === void 0 ? Qi(R) : l, U = {};
      for (var M in m)
        u && M === "as" || // $FlowFixMe
        H(M) && (U[M] = m[M]);
      return U.className = w, U.ref = O, /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement(mu, {
        cache: v,
        serialized: _,
        isStringTag: typeof R == "string"
      }), /* @__PURE__ */ x.createElement(R, U));
    });
    return y.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", y.defaultProps = t.defaultProps, y.__emotion_real = y, y.__emotion_base = o, y.__emotion_styles = p, y.__emotion_forwardProp = c, Object.defineProperty(y, "toString", {
      value: function() {
        return s === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + s;
      }
    }), y.withComponent = function(m, v) {
      return e(m, E({}, r, v, {
        shouldForwardProp: ea(y, v, !0)
      })).apply(void 0, p);
    }, y;
  };
}, vu = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], So = hu.bind();
vu.forEach(function(e) {
  So[e] = So(e);
});
var _o = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var po, ra;
function yu() {
  if (ra)
    return po;
  ra = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var s = {}, c = 0; c < 10; c++)
        s["_" + String.fromCharCode(c)] = c;
      var l = Object.getOwnPropertyNames(s).map(function(f) {
        return s[f];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        u[f] = f;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return po = o() ? Object.assign : function(i, s) {
    for (var c, l = n(i), u, f = 1; f < arguments.length; f++) {
      c = Object(arguments[f]);
      for (var p in c)
        t.call(c, p) && (l[p] = c[p]);
      if (e) {
        u = e(c);
        for (var d = 0; d < u.length; d++)
          r.call(c, u[d]) && (l[u[d]] = c[u[d]]);
      }
    }
    return l;
  }, po;
}
var mo, na;
function Ko() {
  if (na)
    return mo;
  na = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return mo = e, mo;
}
var ho, oa;
function hs() {
  return oa || (oa = 1, ho = Function.call.bind(Object.prototype.hasOwnProperty)), ho;
}
var vo, ia;
function gu() {
  if (ia)
    return vo;
  ia = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Ko(), r = {}, n = hs();
    e = function(i) {
      var s = "Warning: " + i;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function o(i, s, c, l, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in i)
        if (n(i, f)) {
          var p;
          try {
            if (typeof i[f] != "function") {
              var d = Error(
                (l || "React class") + ": " + c + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw d.name = "Invariant Violation", d;
            }
            p = i[f](s, f, l, c, null, t);
          } catch (y) {
            p = y;
          }
          if (p && !(p instanceof Error) && e(
            (l || "React class") + ": type specification of " + c + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in r)) {
            r[p.message] = !0;
            var g = u ? u() : "";
            e(
              "Failed " + c + " type: " + p.message + (g ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, vo = o, vo;
}
var yo, aa;
function bu() {
  if (aa)
    return yo;
  aa = 1;
  var e = Uo(), t = yu(), r = Ko(), n = hs(), o = gu(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(c) {
    var l = "Warning: " + c;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return yo = function(c, l) {
    var u = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function p(C) {
      var k = C && (u && C[u] || C[f]);
      if (typeof k == "function")
        return k;
    }
    var d = "<<anonymous>>", g = {
      array: O("array"),
      bigint: O("bigint"),
      bool: O("boolean"),
      func: O("function"),
      number: O("number"),
      object: O("object"),
      string: O("string"),
      symbol: O("symbol"),
      any: R(),
      arrayOf: w,
      element: T(),
      elementType: b(),
      instanceOf: S,
      node: M(),
      objectOf: H,
      oneOf: _,
      oneOfType: U,
      shape: K,
      exact: V
    };
    function y(C, k) {
      return C === k ? C !== 0 || 1 / C === 1 / k : C !== C && k !== k;
    }
    function m(C, k) {
      this.message = C, this.data = k && typeof k == "object" ? k : {}, this.stack = "";
    }
    m.prototype = Error.prototype;
    function v(C) {
      if (process.env.NODE_ENV !== "production")
        var k = {}, ee = 0;
      function Z(J, N, D, A, W, Q, se) {
        if (A = A || d, Q = Q || D, se !== r) {
          if (l) {
            var j = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw j.name = "Invariant Violation", j;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Re = A + ":" + D;
            !k[Re] && // Avoid spamming the console because they are often not actionable except for lib authors
            ee < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + Q + "` prop on `" + A + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), k[Re] = !0, ee++);
          }
        }
        return N[D] == null ? J ? N[D] === null ? new m("The " + W + " `" + Q + "` is marked as required " + ("in `" + A + "`, but its value is `null`.")) : new m("The " + W + " `" + Q + "` is marked as required in " + ("`" + A + "`, but its value is `undefined`.")) : null : C(N, D, A, W, Q);
      }
      var z = Z.bind(null, !1);
      return z.isRequired = Z.bind(null, !0), z;
    }
    function O(C) {
      function k(ee, Z, z, J, N, D) {
        var A = ee[Z], W = F(A);
        if (W !== C) {
          var Q = X(A);
          return new m(
            "Invalid " + J + " `" + N + "` of type " + ("`" + Q + "` supplied to `" + z + "`, expected ") + ("`" + C + "`."),
            { expectedType: C }
          );
        }
        return null;
      }
      return v(k);
    }
    function R() {
      return v(s);
    }
    function w(C) {
      function k(ee, Z, z, J, N) {
        if (typeof C != "function")
          return new m("Property `" + N + "` of component `" + z + "` has invalid PropType notation inside arrayOf.");
        var D = ee[Z];
        if (!Array.isArray(D)) {
          var A = F(D);
          return new m("Invalid " + J + " `" + N + "` of type " + ("`" + A + "` supplied to `" + z + "`, expected an array."));
        }
        for (var W = 0; W < D.length; W++) {
          var Q = C(D, W, z, J, N + "[" + W + "]", r);
          if (Q instanceof Error)
            return Q;
        }
        return null;
      }
      return v(k);
    }
    function T() {
      function C(k, ee, Z, z, J) {
        var N = k[ee];
        if (!c(N)) {
          var D = F(N);
          return new m("Invalid " + z + " `" + J + "` of type " + ("`" + D + "` supplied to `" + Z + "`, expected a single ReactElement."));
        }
        return null;
      }
      return v(C);
    }
    function b() {
      function C(k, ee, Z, z, J) {
        var N = k[ee];
        if (!e.isValidElementType(N)) {
          var D = F(N);
          return new m("Invalid " + z + " `" + J + "` of type " + ("`" + D + "` supplied to `" + Z + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return v(C);
    }
    function S(C) {
      function k(ee, Z, z, J, N) {
        if (!(ee[Z] instanceof C)) {
          var D = C.name || d, A = re(ee[Z]);
          return new m("Invalid " + J + " `" + N + "` of type " + ("`" + A + "` supplied to `" + z + "`, expected ") + ("instance of `" + D + "`."));
        }
        return null;
      }
      return v(k);
    }
    function _(C) {
      if (!Array.isArray(C))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function k(ee, Z, z, J, N) {
        for (var D = ee[Z], A = 0; A < C.length; A++)
          if (y(D, C[A]))
            return null;
        var W = JSON.stringify(C, function(se, j) {
          var Re = X(j);
          return Re === "symbol" ? String(j) : j;
        });
        return new m("Invalid " + J + " `" + N + "` of value `" + String(D) + "` " + ("supplied to `" + z + "`, expected one of " + W + "."));
      }
      return v(k);
    }
    function H(C) {
      function k(ee, Z, z, J, N) {
        if (typeof C != "function")
          return new m("Property `" + N + "` of component `" + z + "` has invalid PropType notation inside objectOf.");
        var D = ee[Z], A = F(D);
        if (A !== "object")
          return new m("Invalid " + J + " `" + N + "` of type " + ("`" + A + "` supplied to `" + z + "`, expected an object."));
        for (var W in D)
          if (n(D, W)) {
            var Q = C(D, W, z, J, N + "." + W, r);
            if (Q instanceof Error)
              return Q;
          }
        return null;
      }
      return v(k);
    }
    function U(C) {
      if (!Array.isArray(C))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var k = 0; k < C.length; k++) {
        var ee = C[k];
        if (typeof ee != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + te(ee) + " at index " + k + "."
          ), s;
      }
      function Z(z, J, N, D, A) {
        for (var W = [], Q = 0; Q < C.length; Q++) {
          var se = C[Q], j = se(z, J, N, D, A, r);
          if (j == null)
            return null;
          j.data && n(j.data, "expectedType") && W.push(j.data.expectedType);
        }
        var Re = W.length > 0 ? ", expected one of type [" + W.join(", ") + "]" : "";
        return new m("Invalid " + D + " `" + A + "` supplied to " + ("`" + N + "`" + Re + "."));
      }
      return v(Z);
    }
    function M() {
      function C(k, ee, Z, z, J) {
        return G(k[ee]) ? null : new m("Invalid " + z + " `" + J + "` supplied to " + ("`" + Z + "`, expected a ReactNode."));
      }
      return v(C);
    }
    function L(C, k, ee, Z, z) {
      return new m(
        (C || "React class") + ": " + k + " type `" + ee + "." + Z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + z + "`."
      );
    }
    function K(C) {
      function k(ee, Z, z, J, N) {
        var D = ee[Z], A = F(D);
        if (A !== "object")
          return new m("Invalid " + J + " `" + N + "` of type `" + A + "` " + ("supplied to `" + z + "`, expected `object`."));
        for (var W in C) {
          var Q = C[W];
          if (typeof Q != "function")
            return L(z, J, N, W, X(Q));
          var se = Q(D, W, z, J, N + "." + W, r);
          if (se)
            return se;
        }
        return null;
      }
      return v(k);
    }
    function V(C) {
      function k(ee, Z, z, J, N) {
        var D = ee[Z], A = F(D);
        if (A !== "object")
          return new m("Invalid " + J + " `" + N + "` of type `" + A + "` " + ("supplied to `" + z + "`, expected `object`."));
        var W = t({}, ee[Z], C);
        for (var Q in W) {
          var se = C[Q];
          if (n(C, Q) && typeof se != "function")
            return L(z, J, N, Q, X(se));
          if (!se)
            return new m(
              "Invalid " + J + " `" + N + "` key `" + Q + "` supplied to `" + z + "`.\nBad object: " + JSON.stringify(ee[Z], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(C), null, "  ")
            );
          var j = se(D, Q, z, J, N + "." + Q, r);
          if (j)
            return j;
        }
        return null;
      }
      return v(k);
    }
    function G(C) {
      switch (typeof C) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !C;
        case "object":
          if (Array.isArray(C))
            return C.every(G);
          if (C === null || c(C))
            return !0;
          var k = p(C);
          if (k) {
            var ee = k.call(C), Z;
            if (k !== C.entries) {
              for (; !(Z = ee.next()).done; )
                if (!G(Z.value))
                  return !1;
            } else
              for (; !(Z = ee.next()).done; ) {
                var z = Z.value;
                if (z && !G(z[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function q(C, k) {
      return C === "symbol" ? !0 : k ? k["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && k instanceof Symbol : !1;
    }
    function F(C) {
      var k = typeof C;
      return Array.isArray(C) ? "array" : C instanceof RegExp ? "object" : q(k, C) ? "symbol" : k;
    }
    function X(C) {
      if (typeof C > "u" || C === null)
        return "" + C;
      var k = F(C);
      if (k === "object") {
        if (C instanceof Date)
          return "date";
        if (C instanceof RegExp)
          return "regexp";
      }
      return k;
    }
    function te(C) {
      var k = X(C);
      switch (k) {
        case "array":
        case "object":
          return "an " + k;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + k;
        default:
          return k;
      }
    }
    function re(C) {
      return !C.constructor || !C.constructor.name ? d : C.constructor.name;
    }
    return g.checkPropTypes = o, g.resetWarningCache = o.resetWarningCache, g.PropTypes = g, g;
  }, yo;
}
var go, sa;
function xu() {
  if (sa)
    return go;
  sa = 1;
  var e = Ko();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, go = function() {
    function n(s, c, l, u, f, p) {
      if (p !== e) {
        var d = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw d.name = "Invariant Violation", d;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, go;
}
if (process.env.NODE_ENV !== "production") {
  var Eu = Uo(), Ou = !0;
  _o.exports = bu()(Eu.isElement, Ou);
} else
  _o.exports = xu()();
var Tu = _o.exports;
const a = /* @__PURE__ */ Yc(Tu);
let Po;
typeof document == "object" && (Po = is({
  key: "css",
  prepend: !0
}));
function vs(e) {
  const {
    injectFirst: t,
    children: r
  } = e;
  return t && Po ? /* @__PURE__ */ P.jsx(nu, {
    value: Po,
    children: r
  }) : r;
}
process.env.NODE_ENV !== "production" && (vs.propTypes = {
  /**
   * Your component tree.
   */
  children: a.node,
  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you want to override MUI's styles, set this prop.
   */
  injectFirst: a.bool
});
function wu(e) {
  return e == null || Object.keys(e).length === 0;
}
function ys(e) {
  const {
    styles: t,
    defaultTheme: r = {}
  } = e, n = typeof t == "function" ? (o) => t(wu(o) ? r : o) : t;
  return /* @__PURE__ */ P.jsx(ds, {
    styles: n
  });
}
process.env.NODE_ENV !== "production" && (ys.propTypes = {
  defaultTheme: a.object,
  styles: a.oneOfType([a.array, a.string, a.object, a.func])
});
/**
 * @mui/styled-engine v5.15.14
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function gs(e, t) {
  const r = So(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
const Cu = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, Ru = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GlobalStyles: ys,
  StyledEngineProvider: vs,
  ThemeContext: It,
  css: ms,
  default: gs,
  internal_processStyles: Cu,
  keyframes: Hn
}, Symbol.toStringTag, { value: "Module" }));
function jt(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function bs(e) {
  if (!jt(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = bs(e[r]);
  }), t;
}
function xt(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? E({}, e) : e;
  return jt(e) && jt(t) && Object.keys(t).forEach((o) => {
    o !== "__proto__" && (jt(t[o]) && o in e && jt(e[o]) ? n[o] = xt(e[o], t[o], r) : r.clone ? n[o] = jt(t[o]) ? bs(t[o]) : t[o] : n[o] = t[o]);
  }), n;
}
const Su = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xt,
  isPlainObject: jt
}, Symbol.toStringTag, { value: "Module" })), _u = ["values", "unit", "step"], Pu = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => E({}, r, {
    [n.key]: n.val
  }), {});
};
function xs(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: r = "px",
    step: n = 5
  } = e, o = pe(e, _u), i = Pu(t), s = Object.keys(i);
  function c(d) {
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${r})`;
  }
  function l(d) {
    return `@media (max-width:${(typeof t[d] == "number" ? t[d] : d) - n / 100}${r})`;
  }
  function u(d, g) {
    const y = s.indexOf(g);
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${r}) and (max-width:${(y !== -1 && typeof t[s[y]] == "number" ? t[s[y]] : g) - n / 100}${r})`;
  }
  function f(d) {
    return s.indexOf(d) + 1 < s.length ? u(d, s[s.indexOf(d) + 1]) : c(d);
  }
  function p(d) {
    const g = s.indexOf(d);
    return g === 0 ? c(s[1]) : g === s.length - 1 ? l(s[g]) : u(d, s[s.indexOf(d) + 1]).replace("@media", "@media not all and");
  }
  return E({
    keys: s,
    values: i,
    up: c,
    down: l,
    between: u,
    only: f,
    not: p,
    unit: r
  }, o);
}
const $u = {
  borderRadius: 4
}, Nu = $u, ju = process.env.NODE_ENV !== "production" ? a.oneOfType([a.number, a.string, a.object, a.array]) : {}, Mt = ju;
function Mr(e, t) {
  return t ? xt(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Xo = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, ca = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Xo[e]}px)`
};
function Rt(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || ca;
    return t.reduce((s, c, l) => (s[i.up(i.keys[l])] = r(t[l]), s), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || ca;
    return Object.keys(t).reduce((s, c) => {
      if (Object.keys(i.values || Xo).indexOf(c) !== -1) {
        const l = i.up(c);
        s[l] = r(t[c], c);
      } else {
        const l = c;
        s[l] = t[l];
      }
      return s;
    }, {});
  }
  return r(t);
}
function ku(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function Iu(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function oe(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Vr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const Mu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: oe
}, Symbol.toStringTag, { value: "Module" }));
function Gn(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function _n(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = Gn(e, r) || n, t && (o = t(o, n, e)), o;
}
function Se(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const c = s[t], l = s.theme, u = Gn(l, n) || {};
    return Rt(s, c, (p) => {
      let d = _n(u, o, p);
      return p === d && typeof p == "string" && (d = _n(u, o, `${t}${p === "default" ? "" : oe(p)}`, p)), r === !1 ? d : {
        [r]: d
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Mt
  } : {}, i.filterProps = [t], i;
}
function Au(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const Du = {
  m: "margin",
  p: "padding"
}, Lu = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, la = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Vu = Au((e) => {
  if (e.length > 2)
    if (la[e])
      e = la[e];
    else
      return [e];
  const [t, r] = e.split(""), n = Du[t], o = Lu[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), Kn = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Xn = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Fu = [...Kn, ...Xn];
function Gr(e, t, r, n) {
  var o;
  const i = (o = Gn(e, t, !1)) != null ? o : r;
  return typeof i == "number" ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && typeof s != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${s}.`), i * s) : Array.isArray(i) ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > i.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${s} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), i[s]) : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Es(e) {
  return Gr(e, "spacing", 8, "spacing");
}
function Kr(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const r = Math.abs(t), n = e(r);
  return t >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function zu(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = Kr(t, r), n), {});
}
function Bu(e, t, r, n) {
  if (t.indexOf(r) === -1)
    return null;
  const o = Vu(r), i = zu(o, n), s = e[r];
  return Rt(e, s, i);
}
function Os(e, t) {
  const r = Es(e.theme);
  return Object.keys(e).map((n) => Bu(e, t, n, r)).reduce(Mr, {});
}
function we(e) {
  return Os(e, Kn);
}
we.propTypes = process.env.NODE_ENV !== "production" ? Kn.reduce((e, t) => (e[t] = Mt, e), {}) : {};
we.filterProps = Kn;
function Ce(e) {
  return Os(e, Xn);
}
Ce.propTypes = process.env.NODE_ENV !== "production" ? Xn.reduce((e, t) => (e[t] = Mt, e), {}) : {};
Ce.filterProps = Xn;
process.env.NODE_ENV !== "production" && Fu.reduce((e, t) => (e[t] = Mt, e), {});
function Wu(e = 8) {
  if (e.mui)
    return e;
  const t = Es({
    spacing: e
  }), r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const s = t(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return r.mui = !0, r;
}
function Jn(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? Mr(o, t[i](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function st(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function pt(e, t) {
  return Se({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Uu = pt("border", st), qu = pt("borderTop", st), Yu = pt("borderRight", st), Hu = pt("borderBottom", st), Gu = pt("borderLeft", st), Ku = pt("borderColor"), Xu = pt("borderTopColor"), Ju = pt("borderRightColor"), Zu = pt("borderBottomColor"), Qu = pt("borderLeftColor"), ef = pt("outline", st), tf = pt("outlineColor"), Zn = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Gr(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: Kr(t, n)
    });
    return Rt(e, e.borderRadius, r);
  }
  return null;
};
Zn.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Mt
} : {};
Zn.filterProps = ["borderRadius"];
Jn(Uu, qu, Yu, Hu, Gu, Ku, Xu, Ju, Zu, Qu, Zn, ef, tf);
const Qn = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Gr(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: Kr(t, n)
    });
    return Rt(e, e.gap, r);
  }
  return null;
};
Qn.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Mt
} : {};
Qn.filterProps = ["gap"];
const eo = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Gr(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: Kr(t, n)
    });
    return Rt(e, e.columnGap, r);
  }
  return null;
};
eo.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Mt
} : {};
eo.filterProps = ["columnGap"];
const to = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Gr(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: Kr(t, n)
    });
    return Rt(e, e.rowGap, r);
  }
  return null;
};
to.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Mt
} : {};
to.filterProps = ["rowGap"];
const rf = Se({
  prop: "gridColumn"
}), nf = Se({
  prop: "gridRow"
}), of = Se({
  prop: "gridAutoFlow"
}), af = Se({
  prop: "gridAutoColumns"
}), sf = Se({
  prop: "gridAutoRows"
}), cf = Se({
  prop: "gridTemplateColumns"
}), lf = Se({
  prop: "gridTemplateRows"
}), uf = Se({
  prop: "gridTemplateAreas"
}), ff = Se({
  prop: "gridArea"
});
Jn(Qn, eo, to, rf, nf, of, af, sf, cf, lf, uf, ff);
function fr(e, t) {
  return t === "grey" ? t : e;
}
const pf = Se({
  prop: "color",
  themeKey: "palette",
  transform: fr
}), df = Se({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: fr
}), mf = Se({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: fr
});
Jn(pf, df, mf);
function Xe(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const hf = Se({
  prop: "width",
  transform: Xe
}), Jo = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var n, o;
      const i = ((n = e.theme) == null || (n = n.breakpoints) == null || (n = n.values) == null ? void 0 : n[r]) || Xo[r];
      return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: Xe(r)
      };
    };
    return Rt(e, e.maxWidth, t);
  }
  return null;
};
Jo.filterProps = ["maxWidth"];
const vf = Se({
  prop: "minWidth",
  transform: Xe
}), yf = Se({
  prop: "height",
  transform: Xe
}), gf = Se({
  prop: "maxHeight",
  transform: Xe
}), bf = Se({
  prop: "minHeight",
  transform: Xe
});
Se({
  prop: "size",
  cssProperty: "width",
  transform: Xe
});
Se({
  prop: "size",
  cssProperty: "height",
  transform: Xe
});
const xf = Se({
  prop: "boxSizing"
});
Jn(hf, Jo, vf, yf, gf, bf, xf);
const Ef = {
  // borders
  border: {
    themeKey: "borders",
    transform: st
  },
  borderTop: {
    themeKey: "borders",
    transform: st
  },
  borderRight: {
    themeKey: "borders",
    transform: st
  },
  borderBottom: {
    themeKey: "borders",
    transform: st
  },
  borderLeft: {
    themeKey: "borders",
    transform: st
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: st
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Zn
  },
  // palette
  color: {
    themeKey: "palette",
    transform: fr
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: fr
  },
  backgroundColor: {
    themeKey: "palette",
    transform: fr
  },
  // spacing
  p: {
    style: Ce
  },
  pt: {
    style: Ce
  },
  pr: {
    style: Ce
  },
  pb: {
    style: Ce
  },
  pl: {
    style: Ce
  },
  px: {
    style: Ce
  },
  py: {
    style: Ce
  },
  padding: {
    style: Ce
  },
  paddingTop: {
    style: Ce
  },
  paddingRight: {
    style: Ce
  },
  paddingBottom: {
    style: Ce
  },
  paddingLeft: {
    style: Ce
  },
  paddingX: {
    style: Ce
  },
  paddingY: {
    style: Ce
  },
  paddingInline: {
    style: Ce
  },
  paddingInlineStart: {
    style: Ce
  },
  paddingInlineEnd: {
    style: Ce
  },
  paddingBlock: {
    style: Ce
  },
  paddingBlockStart: {
    style: Ce
  },
  paddingBlockEnd: {
    style: Ce
  },
  m: {
    style: we
  },
  mt: {
    style: we
  },
  mr: {
    style: we
  },
  mb: {
    style: we
  },
  ml: {
    style: we
  },
  mx: {
    style: we
  },
  my: {
    style: we
  },
  margin: {
    style: we
  },
  marginTop: {
    style: we
  },
  marginRight: {
    style: we
  },
  marginBottom: {
    style: we
  },
  marginLeft: {
    style: we
  },
  marginX: {
    style: we
  },
  marginY: {
    style: we
  },
  marginInline: {
    style: we
  },
  marginInlineStart: {
    style: we
  },
  marginInlineEnd: {
    style: we
  },
  marginBlock: {
    style: we
  },
  marginBlockStart: {
    style: we
  },
  marginBlockEnd: {
    style: we
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Qn
  },
  rowGap: {
    style: to
  },
  columnGap: {
    style: eo
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: Xe
  },
  maxWidth: {
    style: Jo
  },
  minWidth: {
    transform: Xe
  },
  height: {
    transform: Xe
  },
  maxHeight: {
    transform: Xe
  },
  minHeight: {
    transform: Xe
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
}, Xr = Ef;
function Of(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function Tf(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ts() {
  function e(r, n, o, i) {
    const s = {
      [r]: n,
      theme: o
    }, c = i[r];
    if (!c)
      return {
        [r]: n
      };
    const {
      cssProperty: l = r,
      themeKey: u,
      transform: f,
      style: p
    } = c;
    if (n == null)
      return null;
    if (u === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const d = Gn(o, u) || {};
    return p ? p(s) : Rt(s, n, (y) => {
      let m = _n(d, f, y);
      return y === m && typeof y == "string" && (m = _n(d, f, `${r}${y === "default" ? "" : oe(y)}`, y)), l === !1 ? m : {
        [l]: m
      };
    });
  }
  function t(r) {
    var n;
    const {
      sx: o,
      theme: i = {}
    } = r || {};
    if (!o)
      return null;
    const s = (n = i.unstable_sxConfig) != null ? n : Xr;
    function c(l) {
      let u = l;
      if (typeof l == "function")
        u = l(i);
      else if (typeof l != "object")
        return l;
      if (!u)
        return null;
      const f = ku(i.breakpoints), p = Object.keys(f);
      let d = f;
      return Object.keys(u).forEach((g) => {
        const y = Tf(u[g], i);
        if (y != null)
          if (typeof y == "object")
            if (s[g])
              d = Mr(d, e(g, y, i, s));
            else {
              const m = Rt({
                theme: i
              }, y, (v) => ({
                [g]: v
              }));
              Of(m, y) ? d[g] = t({
                sx: y,
                theme: i
              }) : d = Mr(d, m);
            }
          else
            d = Mr(d, e(g, y, i, s));
      }), Iu(p, d);
    }
    return Array.isArray(o) ? o.map(c) : c(o);
  }
  return t;
}
const Jr = Ts();
Jr.filterProps = ["sx"];
function ws(e, t) {
  const r = this;
  return r.vars && typeof r.getColorSchemeSelector == "function" ? {
    [r.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : r.palette.mode === e ? t : {};
}
const wf = ["breakpoints", "palette", "spacing", "shape"];
function Zo(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {}
  } = e, s = pe(e, wf), c = xs(r), l = Wu(o);
  let u = xt({
    breakpoints: c,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: E({
      mode: "light"
    }, n),
    spacing: l,
    shape: E({}, Nu, i)
  }, s);
  return u.applyStyles = ws, u = t.reduce((f, p) => xt(f, p), u), u.unstable_sxConfig = E({}, Xr, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function(p) {
    return Jr({
      sx: p,
      theme: this
    });
  }, u;
}
const Cf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zo,
  private_createBreakpoints: xs,
  unstable_applyStyles: ws
}, Symbol.toStringTag, { value: "Module" }));
function Rf(e) {
  return Object.keys(e).length === 0;
}
function Cs(e = null) {
  const t = x.useContext(It);
  return !t || Rf(t) ? e : t;
}
const Sf = Zo();
function Qo(e = Sf) {
  return Cs(e);
}
const _f = ["sx"], Pf = (e) => {
  var t, r;
  const n = {
    systemProps: {},
    otherProps: {}
  }, o = (t = e == null || (r = e.theme) == null ? void 0 : r.unstable_sxConfig) != null ? t : Xr;
  return Object.keys(e).forEach((i) => {
    o[i] ? n.systemProps[i] = e[i] : n.otherProps[i] = e[i];
  }), n;
};
function ei(e) {
  const {
    sx: t
  } = e, r = pe(e, _f), {
    systemProps: n,
    otherProps: o
  } = Pf(r);
  let i;
  return Array.isArray(t) ? i = [n, ...t] : typeof t == "function" ? i = (...s) => {
    const c = t(...s);
    return jt(c) ? E({}, n, c) : n;
  } : i = E({}, n, t), E({}, o, {
    sx: i
  });
}
const $f = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Jr,
  extendSxProp: ei,
  unstable_createStyleFunctionSx: Ts,
  unstable_defaultSxConfig: Xr
}, Symbol.toStringTag, { value: "Module" })), ua = (e) => e, Nf = () => {
  let e = ua;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = ua;
    }
  };
}, jf = Nf(), ti = jf;
function Rs(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (r = Rs(e[t])) && (n && (n += " "), n += r);
    } else
      for (r in e)
        e[r] && (n && (n += " "), n += r);
  return n;
}
function fe() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)
    (e = arguments[r]) && (t = Rs(e)) && (n && (n += " "), n += t);
  return n;
}
const kf = ["className", "component"];
function If(e = {}) {
  const {
    themeId: t,
    defaultTheme: r,
    defaultClassName: n = "MuiBox-root",
    generateClassName: o
  } = e, i = gs("div", {
    shouldForwardProp: (c) => c !== "theme" && c !== "sx" && c !== "as"
  })(Jr);
  return /* @__PURE__ */ x.forwardRef(function(l, u) {
    const f = Qo(r), p = ei(l), {
      className: d,
      component: g = "div"
    } = p, y = pe(p, kf);
    return /* @__PURE__ */ P.jsx(i, E({
      as: g,
      ref: u,
      className: fe(d, o ? o(n) : n),
      theme: t && f[t] || f
    }, y));
  });
}
const Ss = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function Ve(e, t, r = "Mui") {
  const n = Ss[t];
  return n ? `${r}-${n}` : `${ti.generate(e)}-${t}`;
}
function Fe(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = Ve(e, o, r);
  }), n;
}
var $o = { exports: {} }, ge = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fa;
function Mf() {
  if (fa)
    return ge;
  fa = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), y;
  y = Symbol.for("react.module.reference");
  function m(v) {
    if (typeof v == "object" && v !== null) {
      var O = v.$$typeof;
      switch (O) {
        case e:
          switch (v = v.type, v) {
            case r:
            case o:
            case n:
            case u:
            case f:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case c:
                case s:
                case l:
                case d:
                case p:
                case i:
                  return v;
                default:
                  return O;
              }
          }
        case t:
          return O;
      }
    }
  }
  return ge.ContextConsumer = s, ge.ContextProvider = i, ge.Element = e, ge.ForwardRef = l, ge.Fragment = r, ge.Lazy = d, ge.Memo = p, ge.Portal = t, ge.Profiler = o, ge.StrictMode = n, ge.Suspense = u, ge.SuspenseList = f, ge.isAsyncMode = function() {
    return !1;
  }, ge.isConcurrentMode = function() {
    return !1;
  }, ge.isContextConsumer = function(v) {
    return m(v) === s;
  }, ge.isContextProvider = function(v) {
    return m(v) === i;
  }, ge.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === e;
  }, ge.isForwardRef = function(v) {
    return m(v) === l;
  }, ge.isFragment = function(v) {
    return m(v) === r;
  }, ge.isLazy = function(v) {
    return m(v) === d;
  }, ge.isMemo = function(v) {
    return m(v) === p;
  }, ge.isPortal = function(v) {
    return m(v) === t;
  }, ge.isProfiler = function(v) {
    return m(v) === o;
  }, ge.isStrictMode = function(v) {
    return m(v) === n;
  }, ge.isSuspense = function(v) {
    return m(v) === u;
  }, ge.isSuspenseList = function(v) {
    return m(v) === f;
  }, ge.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === r || v === o || v === n || v === u || v === f || v === g || typeof v == "object" && v !== null && (v.$$typeof === d || v.$$typeof === p || v.$$typeof === i || v.$$typeof === s || v.$$typeof === l || v.$$typeof === y || v.getModuleId !== void 0);
  }, ge.typeOf = m, ge;
}
var be = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pa;
function Af() {
  return pa || (pa = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), y = !1, m = !1, v = !1, O = !1, R = !1, w;
    w = Symbol.for("react.module.reference");
    function T(B) {
      return !!(typeof B == "string" || typeof B == "function" || B === r || B === o || R || B === n || B === u || B === f || O || B === g || y || m || v || typeof B == "object" && B !== null && (B.$$typeof === d || B.$$typeof === p || B.$$typeof === i || B.$$typeof === s || B.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      B.$$typeof === w || B.getModuleId !== void 0));
    }
    function b(B) {
      if (typeof B == "object" && B !== null) {
        var Oe = B.$$typeof;
        switch (Oe) {
          case e:
            var je = B.type;
            switch (je) {
              case r:
              case o:
              case n:
              case u:
              case f:
                return je;
              default:
                var tt = je && je.$$typeof;
                switch (tt) {
                  case c:
                  case s:
                  case l:
                  case d:
                  case p:
                  case i:
                    return tt;
                  default:
                    return Oe;
                }
            }
          case t:
            return Oe;
        }
      }
    }
    var S = s, _ = i, H = e, U = l, M = r, L = d, K = p, V = t, G = o, q = n, F = u, X = f, te = !1, re = !1;
    function C(B) {
      return te || (te = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function k(B) {
      return re || (re = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ee(B) {
      return b(B) === s;
    }
    function Z(B) {
      return b(B) === i;
    }
    function z(B) {
      return typeof B == "object" && B !== null && B.$$typeof === e;
    }
    function J(B) {
      return b(B) === l;
    }
    function N(B) {
      return b(B) === r;
    }
    function D(B) {
      return b(B) === d;
    }
    function A(B) {
      return b(B) === p;
    }
    function W(B) {
      return b(B) === t;
    }
    function Q(B) {
      return b(B) === o;
    }
    function se(B) {
      return b(B) === n;
    }
    function j(B) {
      return b(B) === u;
    }
    function Re(B) {
      return b(B) === f;
    }
    be.ContextConsumer = S, be.ContextProvider = _, be.Element = H, be.ForwardRef = U, be.Fragment = M, be.Lazy = L, be.Memo = K, be.Portal = V, be.Profiler = G, be.StrictMode = q, be.Suspense = F, be.SuspenseList = X, be.isAsyncMode = C, be.isConcurrentMode = k, be.isContextConsumer = ee, be.isContextProvider = Z, be.isElement = z, be.isForwardRef = J, be.isFragment = N, be.isLazy = D, be.isMemo = A, be.isPortal = W, be.isProfiler = Q, be.isStrictMode = se, be.isSuspense = j, be.isSuspenseList = Re, be.isValidElementType = T, be.typeOf = b;
  }()), be;
}
process.env.NODE_ENV === "production" ? $o.exports = Mf() : $o.exports = Af();
var da = $o.exports;
const Df = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function _s(e) {
  const t = `${e}`.match(Df);
  return t && t[1] || "";
}
function Ps(e, t = "") {
  return e.displayName || e.name || _s(e) || t;
}
function ma(e, t, r) {
  const n = Ps(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function Lf(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Ps(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case da.ForwardRef:
          return ma(e, e.render, "ForwardRef");
        case da.Memo:
          return ma(e, e.type, "memo");
        default:
          return;
      }
  }
}
const Vf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Lf,
  getFunctionName: _s
}, Symbol.toStringTag, { value: "Module" }));
function $s(e, t) {
  const r = E({}, t);
  return Object.keys(e).forEach((n) => {
    if (n.toString().match(/^(components|slots)$/))
      r[n] = E({}, e[n], r[n]);
    else if (n.toString().match(/^(componentsProps|slotProps)$/)) {
      const o = e[n] || {}, i = t[n];
      r[n] = {}, !i || !Object.keys(i) ? r[n] = o : !o || !Object.keys(o) ? r[n] = i : (r[n] = E({}, i), Object.keys(o).forEach((s) => {
        r[n][s] = $s(o[s], i[s]);
      }));
    } else
      r[n] === void 0 && (r[n] = e[n]);
  }), r;
}
function Ff(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  return !t || !t.components || !t.components[r] || !t.components[r].defaultProps ? n : $s(t.components[r].defaultProps, n);
}
function zf({
  props: e,
  name: t,
  defaultTheme: r,
  themeId: n
}) {
  let o = Qo(r);
  return n && (o = o[n] || o), Ff({
    theme: o,
    name: t,
    props: e
  });
}
const Ht = typeof window < "u" ? x.useLayoutEffect : x.useEffect;
function Bf(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
const Wf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Bf
}, Symbol.toStringTag, { value: "Module" }));
function Zr(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function Uf(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Ns(e, t, r, n, o) {
  const i = e[t], s = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  const l = i.type;
  return typeof l == "function" && !Uf(l) && (c = "Did you accidentally use a plain function component for an element instead?"), c !== void 0 ? new Error(`Invalid ${n} \`${s}\` supplied to \`${r}\`. Expected an element that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const js = Zr(a.element, Ns);
js.isRequired = Zr(a.element.isRequired, Ns);
const ks = js;
function qf(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Yf(e, t, r, n, o) {
  const i = e[t], s = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  return typeof i == "function" && !qf(i) && (c = "Did you accidentally provide a plain function component instead?"), c !== void 0 ? new Error(`Invalid ${n} \`${s}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Is = Zr(a.elementType, Yf), Hf = "exact-prop: ​";
function ri(e) {
  return process.env.NODE_ENV === "production" ? e : E({}, e, {
    [Hf]: (t) => {
      const r = Object.keys(t).filter((n) => !e.hasOwnProperty(n));
      return r.length > 0 ? new Error(`The following props are not supported: ${r.map((n) => `\`${n}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
function Wr(e, t, r, n, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = e[t], s = o || t;
  return i == null ? null : i && i.nodeType !== 1 ? new Error(`Invalid ${n} \`${s}\` supplied to \`${r}\`. Expected an HTMLElement.`) : null;
}
const Gf = a.oneOfType([a.func, a.object]), ni = Gf;
function Kf(...e) {
  return e.reduce((t, r) => r == null ? t : function(...o) {
    t.apply(this, o), r.apply(this, o);
  }, () => {
  });
}
function Xf(e, t = 166) {
  let r;
  function n(...o) {
    const i = () => {
      e.apply(this, o);
    };
    clearTimeout(r), r = setTimeout(i, t);
  }
  return n.clear = () => {
    clearTimeout(r);
  }, n;
}
function Jf(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : (r, n, o, i, s) => {
    const c = o || "<<anonymous>>", l = s || n;
    return typeof r[n] < "u" ? new Error(`The ${i} \`${l}\` of \`${c}\` is deprecated. ${t}`) : null;
  };
}
function Zf(e, t) {
  var r, n;
  return /* @__PURE__ */ x.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    (r = e.type.muiName) != null ? r : (n = e.type) == null || (n = n._payload) == null || (n = n.value) == null ? void 0 : n.muiName
  ) !== -1;
}
function Pn(e) {
  return e && e.ownerDocument || document;
}
function Qf(e) {
  return Pn(e).defaultView || window;
}
function ep(e, t) {
  if (process.env.NODE_ENV === "production")
    return () => null;
  const r = t ? E({}, t.propTypes) : null;
  return (o) => (i, s, c, l, u, ...f) => {
    const p = u || s, d = r == null ? void 0 : r[p];
    if (d) {
      const g = d(i, s, c, l, u, ...f);
      if (g)
        return g;
    }
    return typeof i[s] < "u" && !i[o] ? new Error(`The prop \`${p}\` of \`${e}\` can only be used together with the \`${o}\` prop.`) : null;
  };
}
function $n(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let ha = 0;
function tp(e) {
  const [t, r] = x.useState(e), n = e || t;
  return x.useEffect(() => {
    t == null && (ha += 1, r(`mui-${ha}`));
  }, [t]), n;
}
const va = x.useId;
function Ms(e) {
  if (va !== void 0) {
    const t = va();
    return e ?? t;
  }
  return tp(e);
}
function As(e, t, r, n, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = o || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${i}\` is not supported. Please remove it.`) : null;
}
function Ds({
  controlled: e,
  default: t,
  name: r,
  state: n = "value"
}) {
  const {
    current: o
  } = x.useRef(e !== void 0), [i, s] = x.useState(t), c = o ? e : i;
  if (process.env.NODE_ENV !== "production") {
    x.useEffect(() => {
      o !== (e !== void 0) && console.error([`MUI: A component is changing the ${o ? "" : "un"}controlled ${n} state of ${r} to be ${o ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${r} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [n, r, e]);
    const {
      current: u
    } = x.useRef(t);
    x.useEffect(() => {
      !o && u !== t && console.error([`MUI: A component is changing the default ${n} state of an uncontrolled ${r} after being initialized. To suppress this warning opt to use a controlled ${r}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const l = x.useCallback((u) => {
    o || s(u);
  }, []);
  return [c, l];
}
function Wt(e) {
  const t = x.useRef(e);
  return Ht(() => {
    t.current = e;
  }), x.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function Qe(...e) {
  return x.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      $n(r, t);
    });
  }, e);
}
const ya = {};
function rp(e, t) {
  const r = x.useRef(ya);
  return r.current === ya && (r.current = e(t)), r;
}
const np = [];
function op(e) {
  x.useEffect(e, np);
}
class Qr {
  constructor() {
    this.currentId = null, this.clear = () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    }, this.disposeEffect = () => this.clear;
  }
  static create() {
    return new Qr();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, r) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, r();
    }, t);
  }
}
function Ut() {
  const e = rp(Qr.create).current;
  return op(e.disposeEffect), e;
}
let ro = !0, No = !1;
const ip = new Qr(), ap = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0
};
function sp(e) {
  const {
    type: t,
    tagName: r
  } = e;
  return !!(r === "INPUT" && ap[t] && !e.readOnly || r === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function cp(e) {
  e.metaKey || e.altKey || e.ctrlKey || (ro = !0);
}
function bo() {
  ro = !1;
}
function lp() {
  this.visibilityState === "hidden" && No && (ro = !0);
}
function up(e) {
  e.addEventListener("keydown", cp, !0), e.addEventListener("mousedown", bo, !0), e.addEventListener("pointerdown", bo, !0), e.addEventListener("touchstart", bo, !0), e.addEventListener("visibilitychange", lp, !0);
}
function fp(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return ro || sp(t);
}
function oi() {
  const e = x.useCallback((o) => {
    o != null && up(o.ownerDocument);
  }, []), t = x.useRef(!1);
  function r() {
    return t.current ? (No = !0, ip.start(100, () => {
      No = !1;
    }), t.current = !1, !0) : !1;
  }
  function n(o) {
    return fp(o) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: n,
    onBlur: r,
    ref: e
  };
}
function He(e, t, r = void 0) {
  const n = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (o) => {
      n[o] = e[o].reduce((i, s) => {
        if (s) {
          const c = t(s);
          c !== "" && i.push(c), r && r[s] && i.push(r[s]);
        }
        return i;
      }, []).join(" ");
    }
  ), n;
}
const Ls = /* @__PURE__ */ x.createContext(null);
process.env.NODE_ENV !== "production" && (Ls.displayName = "ThemeContext");
const Vs = Ls;
function Fs() {
  const e = x.useContext(Vs);
  return process.env.NODE_ENV !== "production" && x.useDebugValue(e), e;
}
const pp = typeof Symbol == "function" && Symbol.for, dp = pp ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function mp(e, t) {
  if (typeof t == "function") {
    const r = t(e);
    return process.env.NODE_ENV !== "production" && (r || console.error(["MUI: You should return an object from your theme function, i.e.", "<ThemeProvider theme={() => ({})} />"].join(`
`))), r;
  }
  return E({}, e, t);
}
function Nn(e) {
  const {
    children: t,
    theme: r
  } = e, n = Fs();
  process.env.NODE_ENV !== "production" && n === null && typeof r == "function" && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const o = x.useMemo(() => {
    const i = n === null ? r : mp(n, r);
    return i != null && (i[dp] = n !== null), i;
  }, [r, n]);
  return /* @__PURE__ */ P.jsx(Vs.Provider, {
    value: o,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (Nn.propTypes = {
  /**
   * Your component tree.
   */
  children: a.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: a.oneOfType([a.object, a.func]).isRequired
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (Nn.propTypes = ri(Nn.propTypes));
const hp = ["value"], zs = /* @__PURE__ */ x.createContext();
function Bs(e) {
  let {
    value: t
  } = e, r = pe(e, hp);
  return /* @__PURE__ */ P.jsx(zs.Provider, E({
    value: t ?? !0
  }, r));
}
process.env.NODE_ENV !== "production" && (Bs.propTypes = {
  children: a.node,
  value: a.bool
});
const vp = () => {
  const e = x.useContext(zs);
  return e ?? !1;
}, ga = {};
function ba(e, t, r, n = !1) {
  return x.useMemo(() => {
    const o = e && t[e] || t;
    if (typeof r == "function") {
      const i = r(o), s = e ? E({}, t, {
        [e]: i
      }) : i;
      return n ? () => s : s;
    }
    return e ? E({}, t, {
      [e]: r
    }) : E({}, t, r);
  }, [e, t, r, n]);
}
function jn(e) {
  const {
    children: t,
    theme: r,
    themeId: n
  } = e, o = Cs(ga), i = Fs() || ga;
  process.env.NODE_ENV !== "production" && (o === null && typeof r == "function" || n && o && !o[n] && typeof r == "function") && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const s = ba(n, o, r), c = ba(n, i, r, !0), l = s.direction === "rtl";
  return /* @__PURE__ */ P.jsx(Nn, {
    theme: c,
    children: /* @__PURE__ */ P.jsx(It.Provider, {
      value: s,
      children: /* @__PURE__ */ P.jsx(Bs, {
        value: l,
        children: t
      })
    })
  });
}
process.env.NODE_ENV !== "production" && (jn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Your component tree.
   */
  children: a.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: a.oneOfType([a.func, a.object]).isRequired,
  /**
   * The design system's unique id for getting the corresponded theme when there are multiple design systems.
   */
  themeId: a.string
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (jn.propTypes = ri(jn.propTypes));
function yp(e, t) {
  return E({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, t);
}
var _e = {}, Ws = { exports: {} };
(function(e) {
  function t(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(Ws);
var xr = Ws.exports;
const gp = /* @__PURE__ */ _t(ol), bp = /* @__PURE__ */ _t(Wf);
var Us = xr;
Object.defineProperty(_e, "__esModule", {
  value: !0
});
var Ne = _e.alpha = Gs;
_e.blend = Np;
_e.colorChannel = void 0;
var xp = _e.darken = ai;
_e.decomposeColor = lt;
_e.emphasize = Ks;
var xa = _e.getContrastRatio = Rp;
_e.getLuminance = kn;
_e.hexToRgb = qs;
_e.hslToRgb = Hs;
var Ep = _e.lighten = si;
_e.private_safeAlpha = Sp;
_e.private_safeColorChannel = void 0;
_e.private_safeDarken = _p;
_e.private_safeEmphasize = $p;
_e.private_safeLighten = Pp;
_e.recomposeColor = Er;
_e.rgbToHex = Cp;
var Ea = Us(gp), Op = Us(bp);
function ii(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), (0, Op.default)(e, t, r);
}
function qs(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Tp(e) {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function lt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return lt(qs(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(r) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : (0, Ea.default)(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : (0, Ea.default)(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const Ys = (e) => {
  const t = lt(e);
  return t.values.slice(0, 3).map((r, n) => t.type.indexOf("hsl") !== -1 && n !== 0 ? `${r}%` : r).join(" ");
};
_e.colorChannel = Ys;
const wp = (e, t) => {
  try {
    return Ys(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
_e.private_safeColorChannel = wp;
function Er(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.indexOf("rgb") !== -1 ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.indexOf("color") !== -1 ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function Cp(e) {
  if (e.indexOf("#") === 0)
    return e;
  const {
    values: t
  } = lt(e);
  return `#${t.map((r, n) => Tp(n === 3 ? Math.round(255 * r) : r)).join("")}`;
}
function Hs(e) {
  e = lt(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), s = (u, f = (u + r / 30) % 12) => o - i * Math.max(Math.min(f - 3, 9 - f, 1), -1);
  let c = "rgb";
  const l = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (c += "a", l.push(t[3])), Er({
    type: c,
    values: l
  });
}
function kn(e) {
  e = lt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? lt(Hs(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Rp(e, t) {
  const r = kn(e), n = kn(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function Gs(e, t) {
  return e = lt(e), t = ii(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Er(e);
}
function Sp(e, t, r) {
  try {
    return Gs(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function ai(e, t) {
  if (e = lt(e), t = ii(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return Er(e);
}
function _p(e, t, r) {
  try {
    return ai(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function si(e, t) {
  if (e = lt(e), t = ii(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return Er(e);
}
function Pp(e, t, r) {
  try {
    return si(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Ks(e, t = 0.15) {
  return kn(e) > 0.5 ? ai(e, t) : si(e, t);
}
function $p(e, t, r) {
  try {
    return Ks(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Np(e, t, r, n = 1) {
  const o = (l, u) => Math.round((l ** (1 / n) * (1 - r) + u ** (1 / n) * r) ** n), i = lt(e), s = lt(t), c = [o(i.values[0], s.values[0]), o(i.values[1], s.values[1]), o(i.values[2], s.values[2])];
  return Er({
    type: "rgb",
    values: c
  });
}
const jp = ["mode", "contrastThreshold", "tonalOffset"], Oa = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: Lr.white,
    default: Lr.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, xo = {
  text: {
    primary: Lr.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: Lr.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function Ta(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = Ep(e.main, o) : t === "dark" && (e.dark = xp(e.main, i)));
}
function kp(e = "light") {
  return e === "dark" ? {
    main: or[200],
    light: or[50],
    dark: or[400]
  } : {
    main: or[700],
    light: or[400],
    dark: or[800]
  };
}
function Ip(e = "light") {
  return e === "dark" ? {
    main: nr[200],
    light: nr[50],
    dark: nr[400]
  } : {
    main: nr[500],
    light: nr[300],
    dark: nr[700]
  };
}
function Mp(e = "light") {
  return e === "dark" ? {
    main: rr[500],
    light: rr[300],
    dark: rr[700]
  } : {
    main: rr[700],
    light: rr[400],
    dark: rr[800]
  };
}
function Ap(e = "light") {
  return e === "dark" ? {
    main: ir[400],
    light: ir[300],
    dark: ir[700]
  } : {
    main: ir[700],
    light: ir[500],
    dark: ir[900]
  };
}
function Dp(e = "light") {
  return e === "dark" ? {
    main: ar[400],
    light: ar[300],
    dark: ar[700]
  } : {
    main: ar[800],
    light: ar[500],
    dark: ar[900]
  };
}
function Lp(e = "light") {
  return e === "dark" ? {
    main: Pr[400],
    light: Pr[300],
    dark: Pr[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Pr[500],
    dark: Pr[900]
  };
}
function Vp(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2
  } = e, o = pe(e, jp), i = e.primary || kp(t), s = e.secondary || Ip(t), c = e.error || Mp(t), l = e.info || Ap(t), u = e.success || Dp(t), f = e.warning || Lp(t);
  function p(m) {
    const v = xa(m, xo.text.primary) >= r ? xo.text.primary : Oa.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const O = xa(m, v);
      O < 3 && console.error([`MUI: The contrast ratio of ${O}:1 for ${v} on ${m}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return v;
  }
  const d = ({
    color: m,
    name: v,
    mainShade: O = 500,
    lightShade: R = 300,
    darkShade: w = 700
  }) => {
    if (m = E({}, m), !m.main && m[O] && (m.main = m[O]), !m.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${v ? ` (${v})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${O}\` property.` : Vr(11, v ? ` (${v})` : "", O));
    if (typeof m.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${v ? ` (${v})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(m.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Vr(12, v ? ` (${v})` : "", JSON.stringify(m.main)));
    return Ta(m, "light", R, n), Ta(m, "dark", w, n), m.contrastText || (m.contrastText = p(m.main)), m;
  }, g = {
    dark: xo,
    light: Oa
  };
  return process.env.NODE_ENV !== "production" && (g[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), xt(E({
    // A collection of common colors.
    common: E({}, Lr),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: d({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: d({
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: d({
      color: c,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: d({
      color: f,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: d({
      color: l,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: d({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: nl,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: p,
    // Generate a rich color object.
    augmentColor: d,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n
  }, g[t]), o);
}
const Fp = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function zp(e) {
  return Math.round(e * 1e5) / 1e5;
}
const wa = {
  textTransform: "uppercase"
}, Ca = '"Roboto", "Helvetica", "Arial", sans-serif';
function Bp(e, t) {
  const r = typeof t == "function" ? t(e) : t, {
    fontFamily: n = Ca,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: s = 400,
    fontWeightMedium: c = 500,
    fontWeightBold: l = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: u = 16,
    // Apply the CSS properties to all the variants.
    allVariants: f,
    pxToRem: p
  } = r, d = pe(r, Fp);
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const g = o / 14, y = p || ((O) => `${O / u * g}rem`), m = (O, R, w, T, b) => E({
    fontFamily: n,
    fontWeight: O,
    fontSize: y(R),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: w
  }, n === Ca ? {
    letterSpacing: `${zp(T / R)}em`
  } : {}, b, f), v = {
    h1: m(i, 96, 1.167, -1.5),
    h2: m(i, 60, 1.2, -0.5),
    h3: m(s, 48, 1.167, 0),
    h4: m(s, 34, 1.235, 0.25),
    h5: m(s, 24, 1.334, 0),
    h6: m(c, 20, 1.6, 0.15),
    subtitle1: m(s, 16, 1.75, 0.15),
    subtitle2: m(c, 14, 1.57, 0.1),
    body1: m(s, 16, 1.5, 0.15),
    body2: m(s, 14, 1.43, 0.15),
    button: m(c, 14, 1.75, 0.4, wa),
    caption: m(s, 12, 1.66, 0.4),
    overline: m(s, 12, 2.66, 1, wa),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return xt(E({
    htmlFontSize: u,
    pxToRem: y,
    fontFamily: n,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: s,
    fontWeightMedium: c,
    fontWeightBold: l
  }, v), d, {
    clone: !1
    // No need to clone deep
  });
}
const Wp = 0.2, Up = 0.14, qp = 0.12;
function Te(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Wp})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Up})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${qp})`].join(",");
}
const Yp = ["none", Te(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Te(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Te(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Te(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Te(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Te(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Te(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Te(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Te(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Te(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Te(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Te(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Te(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Te(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Te(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Te(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Te(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Te(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Te(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Te(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Te(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Te(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Te(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Te(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Hp = ["duration", "easing", "delay"], Gp = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Xs = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function Ra(e) {
  return `${Math.round(e)}ms`;
}
function Kp(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Xp(e) {
  const t = E({}, Gp, e.easing), r = E({}, Xs, e.duration);
  return E({
    getAutoHeightDuration: Kp,
    create: (o = ["all"], i = {}) => {
      const {
        duration: s = r.standard,
        easing: c = t.easeInOut,
        delay: l = 0
      } = i, u = pe(i, Hp);
      if (process.env.NODE_ENV !== "production") {
        const f = (d) => typeof d == "string", p = (d) => !isNaN(parseFloat(d));
        !f(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !p(s) && !f(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), f(c) || console.error('MUI: Argument "easing" must be a string.'), !p(l) && !f(l) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((f) => `${f} ${typeof s == "string" ? s : Ra(s)} ${c} ${typeof l == "string" ? l : Ra(l)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: r
  });
}
const Jp = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Zp = Jp, Qp = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function ci(e = {}, ...t) {
  const {
    mixins: r = {},
    palette: n = {},
    transitions: o = {},
    typography: i = {}
  } = e, s = pe(e, Qp);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Vr(18));
  const c = Vp(n), l = Zo(e);
  let u = xt(l, {
    mixins: yp(l.breakpoints, r),
    palette: c,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Yp.slice(),
    typography: Bp(c, i),
    transitions: Xp(o),
    zIndex: E({}, Zp)
  });
  if (u = xt(u, s), u = t.reduce((f, p) => xt(f, p), u), process.env.NODE_ENV !== "production") {
    const f = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], p = (d, g) => {
      let y;
      for (y in d) {
        const m = d[y];
        if (f.indexOf(y) !== -1 && Object.keys(m).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const v = Ve("", y);
            console.error([`MUI: The \`${g}\` component increases the CSS specificity of the \`${y}\` internal state.`, "You can not override it like this: ", JSON.stringify(d, null, 2), "", `Instead, you need to use the '&.${v}' syntax:`, JSON.stringify({
              root: {
                [`&.${v}`]: m
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          d[y] = {};
        }
      }
    };
    Object.keys(u.components).forEach((d) => {
      const g = u.components[d].styleOverrides;
      g && d.indexOf("Mui") === 0 && p(g, d);
    });
  }
  return u.unstable_sxConfig = E({}, Xr, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function(p) {
    return Jr({
      sx: p,
      theme: this
    });
  }, u;
}
const ed = ci(), li = ed;
function Or() {
  const e = Qo(li);
  return process.env.NODE_ENV !== "production" && x.useDebugValue(e), e[pr] || e;
}
function ze({
  props: e,
  name: t
}) {
  return zf({
    props: e,
    name: t,
    defaultTheme: li,
    themeId: pr
  });
}
var en = {}, Eo = { exports: {} }, Sa;
function td() {
  return Sa || (Sa = 1, function(e) {
    function t(r, n) {
      if (r == null)
        return {};
      var o = {}, i = Object.keys(r), s, c;
      for (c = 0; c < i.length; c++)
        s = i[c], !(n.indexOf(s) >= 0) && (o[s] = r[s]);
      return o;
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Eo)), Eo.exports;
}
const Js = /* @__PURE__ */ _t(Ru), rd = /* @__PURE__ */ _t(Su), nd = /* @__PURE__ */ _t(Mu), od = /* @__PURE__ */ _t(Vf), id = /* @__PURE__ */ _t(Cf), ad = /* @__PURE__ */ _t($f);
var Tr = xr;
Object.defineProperty(en, "__esModule", {
  value: !0
});
var sd = en.default = Ed;
en.shouldForwardProp = Tn;
en.systemDefaultTheme = void 0;
var it = Tr(ps()), jo = Tr(td()), _a = vd(Js), cd = rd, ld = Tr(nd), ud = Tr(od), fd = Tr(id), pd = Tr(ad);
const dd = ["ownerState"], md = ["variants"], hd = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function Zs(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (Zs = function(n) {
    return n ? r : t;
  })(e);
}
function vd(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = Zs(t);
  if (r && r.has(e))
    return r.get(e);
  var n = { __proto__: null }, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var s = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      s && (s.get || s.set) ? Object.defineProperty(n, i, s) : n[i] = e[i];
    }
  return n.default = e, r && r.set(e, n), n;
}
function yd(e) {
  return Object.keys(e).length === 0;
}
function gd(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Tn(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const bd = en.systemDefaultTheme = (0, fd.default)(), Pa = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function mn({
  defaultTheme: e,
  theme: t,
  themeId: r
}) {
  return yd(t) ? e : t[r] || t;
}
function xd(e) {
  return e ? (t, r) => r[e] : null;
}
function wn(e, t) {
  let {
    ownerState: r
  } = t, n = (0, jo.default)(t, dd);
  const o = typeof e == "function" ? e((0, it.default)({
    ownerState: r
  }, n)) : e;
  if (Array.isArray(o))
    return o.flatMap((i) => wn(i, (0, it.default)({
      ownerState: r
    }, n)));
  if (o && typeof o == "object" && Array.isArray(o.variants)) {
    const {
      variants: i = []
    } = o;
    let c = (0, jo.default)(o, md);
    return i.forEach((l) => {
      let u = !0;
      typeof l.props == "function" ? u = l.props((0, it.default)({
        ownerState: r
      }, n, r)) : Object.keys(l.props).forEach((f) => {
        (r == null ? void 0 : r[f]) !== l.props[f] && n[f] !== l.props[f] && (u = !1);
      }), u && (Array.isArray(c) || (c = [c]), c.push(typeof l.style == "function" ? l.style((0, it.default)({
        ownerState: r
      }, n, r)) : l.style));
    }), c;
  }
  return o;
}
function Ed(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = bd,
    rootShouldForwardProp: n = Tn,
    slotShouldForwardProp: o = Tn
  } = e, i = (s) => (0, pd.default)((0, it.default)({}, s, {
    theme: mn((0, it.default)({}, s, {
      defaultTheme: r,
      themeId: t
    }))
  }));
  return i.__mui_systemSx = !0, (s, c = {}) => {
    (0, _a.internal_processStyles)(s, (b) => b.filter((S) => !(S != null && S.__mui_systemSx)));
    const {
      name: l,
      slot: u,
      skipVariantsResolver: f,
      skipSx: p,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: d = xd(Pa(u))
    } = c, g = (0, jo.default)(c, hd), y = f !== void 0 ? f : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), m = p || !1;
    let v;
    process.env.NODE_ENV !== "production" && l && (v = `${l}-${Pa(u || "Root")}`);
    let O = Tn;
    u === "Root" || u === "root" ? O = n : u ? O = o : gd(s) && (O = void 0);
    const R = (0, _a.default)(s, (0, it.default)({
      shouldForwardProp: O,
      label: v
    }, g)), w = (b) => typeof b == "function" && b.__emotion_real !== b || (0, cd.isPlainObject)(b) ? (S) => wn(b, (0, it.default)({}, S, {
      theme: mn({
        theme: S.theme,
        defaultTheme: r,
        themeId: t
      })
    })) : b, T = (b, ...S) => {
      let _ = w(b);
      const H = S ? S.map(w) : [];
      l && d && H.push((L) => {
        const K = mn((0, it.default)({}, L, {
          defaultTheme: r,
          themeId: t
        }));
        if (!K.components || !K.components[l] || !K.components[l].styleOverrides)
          return null;
        const V = K.components[l].styleOverrides, G = {};
        return Object.entries(V).forEach(([q, F]) => {
          G[q] = wn(F, (0, it.default)({}, L, {
            theme: K
          }));
        }), d(L, G);
      }), l && !y && H.push((L) => {
        var K;
        const V = mn((0, it.default)({}, L, {
          defaultTheme: r,
          themeId: t
        })), G = V == null || (K = V.components) == null || (K = K[l]) == null ? void 0 : K.variants;
        return wn({
          variants: G
        }, (0, it.default)({}, L, {
          theme: V
        }));
      }), m || H.push(i);
      const U = H.length - S.length;
      if (Array.isArray(b) && U > 0) {
        const L = new Array(U).fill("");
        _ = [...b, ...L], _.raw = [...b.raw, ...L];
      }
      const M = R(_, ...H);
      if (process.env.NODE_ENV !== "production") {
        let L;
        l && (L = `${l}${(0, ld.default)(u || "")}`), L === void 0 && (L = `Styled(${(0, ud.default)(s)})`), M.displayName = L;
      }
      return s.muiName && (M.muiName = s.muiName), M;
    };
    return R.withConfig && (T.withConfig = R.withConfig), T;
  };
}
function Od(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Td = (e) => Od(e) && e !== "classes", Qs = Td, Ee = sd({
  themeId: pr,
  defaultTheme: li,
  rootShouldForwardProp: Qs
}), wd = ["theme"];
function ec(e) {
  let {
    theme: t
  } = e, r = pe(e, wd);
  const n = t[pr];
  return /* @__PURE__ */ P.jsx(jn, E({}, r, {
    themeId: n ? pr : void 0,
    theme: n || t
  }));
}
process.env.NODE_ENV !== "production" && (ec.propTypes = {
  /**
   * Your component tree.
   */
  children: a.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: a.oneOfType([a.object, a.func]).isRequired
});
function Cd(e) {
  return Ve("MuiSvgIcon", e);
}
Fe("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Rd = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], Sd = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${oe(t)}`, `fontSize${oe(r)}`]
  };
  return He(o, Cd, n);
}, _d = Ee("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${oe(r.color)}`], t[`fontSize${oe(r.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var r, n, o, i, s, c, l, u, f, p, d, g, y;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    // the <svg> will define the property that has `currentColor`
    // for example heroicons uses fill="none" and stroke="currentColor"
    fill: t.hasSvgAsChild ? void 0 : "currentColor",
    flexShrink: 0,
    transition: (r = e.transitions) == null || (n = r.create) == null ? void 0 : n.call(r, "fill", {
      duration: (o = e.transitions) == null || (o = o.duration) == null ? void 0 : o.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((i = e.typography) == null || (s = i.pxToRem) == null ? void 0 : s.call(i, 20)) || "1.25rem",
      medium: ((c = e.typography) == null || (l = c.pxToRem) == null ? void 0 : l.call(c, 24)) || "1.5rem",
      large: ((u = e.typography) == null || (f = u.pxToRem) == null ? void 0 : f.call(u, 35)) || "2.1875rem"
    }[t.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (p = (d = (e.vars || e).palette) == null || (d = d[t.color]) == null ? void 0 : d.main) != null ? p : {
      action: (g = (e.vars || e).palette) == null || (g = g.action) == null ? void 0 : g.active,
      disabled: (y = (e.vars || e).palette) == null || (y = y.action) == null ? void 0 : y.disabled,
      inherit: void 0
    }[t.color]
  };
}), In = /* @__PURE__ */ x.forwardRef(function(t, r) {
  const n = ze({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: s = "inherit",
    component: c = "svg",
    fontSize: l = "medium",
    htmlColor: u,
    inheritViewBox: f = !1,
    titleAccess: p,
    viewBox: d = "0 0 24 24"
  } = n, g = pe(n, Rd), y = /* @__PURE__ */ x.isValidElement(o) && o.type === "svg", m = E({}, n, {
    color: s,
    component: c,
    fontSize: l,
    instanceFontSize: t.fontSize,
    inheritViewBox: f,
    viewBox: d,
    hasSvgAsChild: y
  }), v = {};
  f || (v.viewBox = d);
  const O = Sd(m);
  return /* @__PURE__ */ P.jsxs(_d, E({
    as: c,
    className: fe(O.root, i),
    focusable: "false",
    color: u,
    "aria-hidden": p ? void 0 : !0,
    role: p ? "img" : void 0,
    ref: r
  }, v, g, y && o.props, {
    ownerState: m,
    children: [y ? o.props.children : o, p ? /* @__PURE__ */ P.jsx("title", {
      children: p
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (In.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: a.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: a.oneOfType([a.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), a.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: a.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: a.oneOfType([a.oneOf(["inherit", "large", "medium", "small"]), a.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: a.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: a.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: a.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: a.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: a.string
});
In.muiName = "SvgIcon";
function ui(e, t) {
  function r(n, o) {
    return /* @__PURE__ */ P.jsx(In, E({
      "data-testid": `${t}Icon`,
      ref: o
    }, n, {
      children: e
    }));
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = In.muiName, /* @__PURE__ */ x.memo(/* @__PURE__ */ x.forwardRef(r));
}
const Pd = {
  configure: (e) => {
    process.env.NODE_ENV !== "production" && console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.", "", "You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead", "", "The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401", "", "The updated documentation: https://mui.com/guides/classname-generator/"].join(`
`)), ti.configure(e);
  }
}, $d = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  capitalize: oe,
  createChainedFunction: Kf,
  createSvgIcon: ui,
  debounce: Xf,
  deprecatedPropType: Jf,
  isMuiElement: Zf,
  ownerDocument: Pn,
  ownerWindow: Qf,
  requirePropFactory: ep,
  setRef: $n,
  unstable_ClassNameGenerator: Pd,
  unstable_useEnhancedEffect: Ht,
  unstable_useId: Ms,
  unsupportedProp: As,
  useControlled: Ds,
  useEventCallback: Wt,
  useForkRef: Qe,
  useIsFocusVisible: oi
}, Symbol.toStringTag, { value: "Module" }));
function Nd(e) {
  return ze;
}
function ko(e, t) {
  return ko = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, ko(e, t);
}
function tc(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ko(e, t);
}
const $a = {
  disabled: !1
};
var jd = process.env.NODE_ENV !== "production" ? a.oneOfType([a.number, a.shape({
  enter: a.number,
  exit: a.number,
  appear: a.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && a.oneOfType([a.string, a.shape({
  enter: a.string,
  exit: a.string,
  active: a.string
}), a.shape({
  enter: a.string,
  enterDone: a.string,
  enterActive: a.string,
  exit: a.string,
  exitDone: a.string,
  exitActive: a.string
})]);
const Mn = Je.createContext(null);
var kd = function(t) {
  return t.scrollTop;
}, Ir = "unmounted", zt = "exited", Bt = "entering", cr = "entered", Io = "exiting", Pt = /* @__PURE__ */ function(e) {
  tc(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var s = o, c = s && !s.isMounting ? n.enter : n.appear, l;
    return i.appearStatus = null, n.in ? c ? (l = zt, i.appearStatus = Bt) : l = cr : n.unmountOnExit || n.mountOnEnter ? l = Ir : l = zt, i.state = {
      status: l
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(o, i) {
    var s = o.in;
    return s && i.status === Ir ? {
      status: zt
    } : null;
  };
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, r.componentDidUpdate = function(o) {
    var i = null;
    if (o !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== Bt && s !== cr && (i = Bt) : (s === Bt || s === cr) && (i = Io);
    }
    this.updateStatus(!1, i);
  }, r.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, r.getTimeouts = function() {
    var o = this.props.timeout, i, s, c;
    return i = s = c = o, o != null && typeof o != "number" && (i = o.exit, s = o.enter, c = o.appear !== void 0 ? o.appear : s), {
      exit: i,
      enter: s,
      appear: c
    };
  }, r.updateStatus = function(o, i) {
    if (o === void 0 && (o = !1), i !== null)
      if (this.cancelNextCallback(), i === Bt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : fn.findDOMNode(this);
          s && kd(s);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === zt && this.setState({
        status: Ir
      });
  }, r.performEnter = function(o) {
    var i = this, s = this.props.enter, c = this.context ? this.context.isMounting : o, l = this.props.nodeRef ? [c] : [fn.findDOMNode(this), c], u = l[0], f = l[1], p = this.getTimeouts(), d = c ? p.appear : p.enter;
    if (!o && !s || $a.disabled) {
      this.safeSetState({
        status: cr
      }, function() {
        i.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, f), this.safeSetState({
      status: Bt
    }, function() {
      i.props.onEntering(u, f), i.onTransitionEnd(d, function() {
        i.safeSetState({
          status: cr
        }, function() {
          i.props.onEntered(u, f);
        });
      });
    });
  }, r.performExit = function() {
    var o = this, i = this.props.exit, s = this.getTimeouts(), c = this.props.nodeRef ? void 0 : fn.findDOMNode(this);
    if (!i || $a.disabled) {
      this.safeSetState({
        status: zt
      }, function() {
        o.props.onExited(c);
      });
      return;
    }
    this.props.onExit(c), this.safeSetState({
      status: Io
    }, function() {
      o.props.onExiting(c), o.onTransitionEnd(s.exit, function() {
        o.safeSetState({
          status: zt
        }, function() {
          o.props.onExited(c);
        });
      });
    });
  }, r.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, r.safeSetState = function(o, i) {
    i = this.setNextCallback(i), this.setState(o, i);
  }, r.setNextCallback = function(o) {
    var i = this, s = !0;
    return this.nextCallback = function(c) {
      s && (s = !1, i.nextCallback = null, o(c));
    }, this.nextCallback.cancel = function() {
      s = !1;
    }, this.nextCallback;
  }, r.onTransitionEnd = function(o, i) {
    this.setNextCallback(i);
    var s = this.props.nodeRef ? this.props.nodeRef.current : fn.findDOMNode(this), c = o == null && !this.props.addEndListener;
    if (!s || c) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var l = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback], u = l[0], f = l[1];
      this.props.addEndListener(u, f);
    }
    o != null && setTimeout(this.nextCallback, o);
  }, r.render = function() {
    var o = this.state.status;
    if (o === Ir)
      return null;
    var i = this.props, s = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var c = pe(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ Je.createElement(Mn.Provider, {
        value: null
      }, typeof s == "function" ? s(o, c) : Je.cloneElement(Je.Children.only(s), c))
    );
  }, t;
}(Je.Component);
Pt.contextType = Mn;
Pt.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: a.shape({
    current: typeof Element > "u" ? a.any : function(e, t, r, n, o, i) {
      var s = e[t];
      return a.instanceOf(s && "ownerDocument" in s ? s.ownerDocument.defaultView.Element : Element)(e, t, r, n, o, i);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: a.oneOfType([a.func.isRequired, a.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: a.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: a.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: a.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: a.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: a.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: a.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(t) {
    var r = jd;
    t.addEndListener || (r = r.isRequired);
    for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
      o[i - 1] = arguments[i];
    return r.apply(void 0, [t].concat(o));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: a.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: a.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: a.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: a.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: a.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: a.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: a.func
} : {};
function sr() {
}
Pt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: sr,
  onEntering: sr,
  onEntered: sr,
  onExit: sr,
  onExiting: sr,
  onExited: sr
};
Pt.UNMOUNTED = Ir;
Pt.EXITED = zt;
Pt.ENTERING = Bt;
Pt.ENTERED = cr;
Pt.EXITING = Io;
const rc = Pt;
function Id(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function fi(e, t) {
  var r = function(i) {
    return t && gn(i) ? t(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && Uc.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function Md(e, t) {
  e = e || {}, t = t || {};
  function r(f) {
    return f in t ? t[f] : e[f];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (n[i] = o, o = []) : o.push(i);
  var s, c = {};
  for (var l in t) {
    if (n[l])
      for (s = 0; s < n[l].length; s++) {
        var u = n[l][s];
        c[n[l][s]] = r(u);
      }
    c[l] = r(l);
  }
  for (s = 0; s < o.length; s++)
    c[o[s]] = r(o[s]);
  return c;
}
function qt(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function Ad(e, t) {
  return fi(e.children, function(r) {
    return bn(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: qt(r, "appear", e),
      enter: qt(r, "enter", e),
      exit: qt(r, "exit", e)
    });
  });
}
function Dd(e, t, r) {
  var n = fi(e.children), o = Md(t, n);
  return Object.keys(o).forEach(function(i) {
    var s = o[i];
    if (gn(s)) {
      var c = i in t, l = i in n, u = t[i], f = gn(u) && !u.props.in;
      l && (!c || f) ? o[i] = bn(s, {
        onExited: r.bind(null, s),
        in: !0,
        exit: qt(s, "exit", e),
        enter: qt(s, "enter", e)
      }) : !l && c && !f ? o[i] = bn(s, {
        in: !1
      }) : l && c && gn(u) && (o[i] = bn(s, {
        onExited: r.bind(null, s),
        in: u.props.in,
        exit: qt(s, "exit", e),
        enter: qt(s, "enter", e)
      }));
    }
  }), o;
}
var Ld = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Vd = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, pi = /* @__PURE__ */ function(e) {
  tc(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var s = i.handleExited.bind(Id(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: s,
      firstRender: !0
    }, i;
  }
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, r.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(o, i) {
    var s = i.children, c = i.handleExited, l = i.firstRender;
    return {
      children: l ? Ad(o, c) : Dd(o, s, c),
      firstRender: !1
    };
  }, r.handleExited = function(o, i) {
    var s = fi(this.props.children);
    o.key in s || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(c) {
      var l = E({}, c.children);
      return delete l[o.key], {
        children: l
      };
    }));
  }, r.render = function() {
    var o = this.props, i = o.component, s = o.childFactory, c = pe(o, ["component", "childFactory"]), l = this.state.contextValue, u = Ld(this.state.children).map(s);
    return delete c.appear, delete c.enter, delete c.exit, i === null ? /* @__PURE__ */ Je.createElement(Mn.Provider, {
      value: l
    }, u) : /* @__PURE__ */ Je.createElement(Mn.Provider, {
      value: l
    }, /* @__PURE__ */ Je.createElement(i, c, u));
  }, t;
}(Je.Component);
pi.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: a.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: a.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: a.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: a.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: a.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: a.func
} : {};
pi.defaultProps = Vd;
const Fd = pi, zd = (e) => e.scrollTop;
function An(e, t) {
  var r, n;
  const {
    timeout: o,
    easing: i,
    style: s = {}
  } = e;
  return {
    duration: (r = s.transitionDuration) != null ? r : typeof o == "number" ? o : o[t.mode] || 0,
    easing: (n = s.transitionTimingFunction) != null ? n : typeof i == "object" ? i[t.mode] : i,
    delay: s.transitionDelay
  };
}
function Bd(e) {
  return Ve("MuiCollapse", e);
}
Fe("MuiCollapse", ["root", "horizontal", "vertical", "entered", "hidden", "wrapper", "wrapperInner"]);
const Wd = ["addEndListener", "children", "className", "collapsedSize", "component", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "orientation", "style", "timeout", "TransitionComponent"], Ud = (e) => {
  const {
    orientation: t,
    classes: r
  } = e, n = {
    root: ["root", `${t}`],
    entered: ["entered"],
    hidden: ["hidden"],
    wrapper: ["wrapper", `${t}`],
    wrapperInner: ["wrapperInner", `${t}`]
  };
  return He(n, Bd, r);
}, qd = Ee("div", {
  name: "MuiCollapse",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.orientation], r.state === "entered" && t.entered, r.state === "exited" && !r.in && r.collapsedSize === "0px" && t.hidden];
  }
})(({
  theme: e,
  ownerState: t
}) => E({
  height: 0,
  overflow: "hidden",
  transition: e.transitions.create("height")
}, t.orientation === "horizontal" && {
  height: "auto",
  width: 0,
  transition: e.transitions.create("width")
}, t.state === "entered" && E({
  height: "auto",
  overflow: "visible"
}, t.orientation === "horizontal" && {
  width: "auto"
}), t.state === "exited" && !t.in && t.collapsedSize === "0px" && {
  visibility: "hidden"
})), Yd = Ee("div", {
  name: "MuiCollapse",
  slot: "Wrapper",
  overridesResolver: (e, t) => t.wrapper
})(({
  ownerState: e
}) => E({
  // Hack to get children with a negative margin to not falsify the height computation.
  display: "flex",
  width: "100%"
}, e.orientation === "horizontal" && {
  width: "auto",
  height: "100%"
})), Hd = Ee("div", {
  name: "MuiCollapse",
  slot: "WrapperInner",
  overridesResolver: (e, t) => t.wrapperInner
})(({
  ownerState: e
}) => E({
  width: "100%"
}, e.orientation === "horizontal" && {
  width: "auto",
  height: "100%"
})), di = /* @__PURE__ */ x.forwardRef(function(t, r) {
  const n = ze({
    props: t,
    name: "MuiCollapse"
  }), {
    addEndListener: o,
    children: i,
    className: s,
    collapsedSize: c = "0px",
    component: l,
    easing: u,
    in: f,
    onEnter: p,
    onEntered: d,
    onEntering: g,
    onExit: y,
    onExited: m,
    onExiting: v,
    orientation: O = "vertical",
    style: R,
    timeout: w = Xs.standard,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: T = rc
  } = n, b = pe(n, Wd), S = E({}, n, {
    orientation: O,
    collapsedSize: c
  }), _ = Ud(S), H = Or(), U = Ut(), M = x.useRef(null), L = x.useRef(), K = typeof c == "number" ? `${c}px` : c, V = O === "horizontal", G = V ? "width" : "height", q = x.useRef(null), F = Qe(r, q), X = (N) => (D) => {
    if (N) {
      const A = q.current;
      D === void 0 ? N(A) : N(A, D);
    }
  }, te = () => M.current ? M.current[V ? "clientWidth" : "clientHeight"] : 0, re = X((N, D) => {
    M.current && V && (M.current.style.position = "absolute"), N.style[G] = K, p && p(N, D);
  }), C = X((N, D) => {
    const A = te();
    M.current && V && (M.current.style.position = "");
    const {
      duration: W,
      easing: Q
    } = An({
      style: R,
      timeout: w,
      easing: u
    }, {
      mode: "enter"
    });
    if (w === "auto") {
      const se = H.transitions.getAutoHeightDuration(A);
      N.style.transitionDuration = `${se}ms`, L.current = se;
    } else
      N.style.transitionDuration = typeof W == "string" ? W : `${W}ms`;
    N.style[G] = `${A}px`, N.style.transitionTimingFunction = Q, g && g(N, D);
  }), k = X((N, D) => {
    N.style[G] = "auto", d && d(N, D);
  }), ee = X((N) => {
    N.style[G] = `${te()}px`, y && y(N);
  }), Z = X(m), z = X((N) => {
    const D = te(), {
      duration: A,
      easing: W
    } = An({
      style: R,
      timeout: w,
      easing: u
    }, {
      mode: "exit"
    });
    if (w === "auto") {
      const Q = H.transitions.getAutoHeightDuration(D);
      N.style.transitionDuration = `${Q}ms`, L.current = Q;
    } else
      N.style.transitionDuration = typeof A == "string" ? A : `${A}ms`;
    N.style[G] = K, N.style.transitionTimingFunction = W, v && v(N);
  }), J = (N) => {
    w === "auto" && U.start(L.current || 0, N), o && o(q.current, N);
  };
  return /* @__PURE__ */ P.jsx(T, E({
    in: f,
    onEnter: re,
    onEntered: k,
    onEntering: C,
    onExit: ee,
    onExited: Z,
    onExiting: z,
    addEndListener: J,
    nodeRef: q,
    timeout: w === "auto" ? null : w
  }, b, {
    children: (N, D) => /* @__PURE__ */ P.jsx(qd, E({
      as: l,
      className: fe(_.root, s, {
        entered: _.entered,
        exited: !f && K === "0px" && _.hidden
      }[N]),
      style: E({
        [V ? "minWidth" : "minHeight"]: K
      }, R),
      ref: F
    }, D, {
      // `ownerState` is set after `childProps` to override any existing `ownerState` property in `childProps`
      // that might have been forwarded from the Transition component.
      ownerState: E({}, S, {
        state: N
      }),
      children: /* @__PURE__ */ P.jsx(Yd, {
        ownerState: E({}, S, {
          state: N
        }),
        className: _.wrapper,
        ref: M,
        children: /* @__PURE__ */ P.jsx(Hd, {
          ownerState: E({}, S, {
            state: N
          }),
          className: _.wrapperInner,
          children: i
        })
      })
    }))
  }));
});
process.env.NODE_ENV !== "production" && (di.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: a.func,
  /**
   * The content node to be collapsed.
   */
  children: a.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * The width (horizontal) or height (vertical) of the container when collapsed.
   * @default '0px'
   */
  collapsedSize: a.oneOfType([a.number, a.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Is,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: a.oneOfType([a.shape({
    enter: a.string,
    exit: a.string
  }), a.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: a.bool,
  /**
   * @ignore
   */
  onEnter: a.func,
  /**
   * @ignore
   */
  onEntered: a.func,
  /**
   * @ignore
   */
  onEntering: a.func,
  /**
   * @ignore
   */
  onExit: a.func,
  /**
   * @ignore
   */
  onExited: a.func,
  /**
   * @ignore
   */
  onExiting: a.func,
  /**
   * The transition orientation.
   * @default 'vertical'
   */
  orientation: a.oneOf(["horizontal", "vertical"]),
  /**
   * @ignore
   */
  style: a.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default duration.standard
   */
  timeout: a.oneOfType([a.oneOf(["auto"]), a.number, a.shape({
    appear: a.number,
    enter: a.number,
    exit: a.number
  })])
});
di.muiSupportAuto = !0;
const Gd = di;
function Kd(e) {
  return typeof e == "string";
}
function lr(e, t, r) {
  return e === void 0 || Kd(e) ? t : E({}, t, {
    ownerState: E({}, t.ownerState, r)
  });
}
const Xd = {
  disableDefaultClasses: !1
}, nc = /* @__PURE__ */ x.createContext(Xd);
process.env.NODE_ENV !== "production" && (nc.displayName = "ClassNameConfiguratorContext");
function Jd(e) {
  const {
    disableDefaultClasses: t
  } = x.useContext(nc);
  return (r) => t ? "" : e(r);
}
function Zd(e, t = []) {
  if (e === void 0)
    return {};
  const r = {};
  return Object.keys(e).filter((n) => n.match(/^on[A-Z]/) && typeof e[n] == "function" && !t.includes(n)).forEach((n) => {
    r[n] = e[n];
  }), r;
}
function oc(e, t, r) {
  return typeof e == "function" ? e(t, r) : e;
}
function Na(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((r) => !(r.match(/^on[A-Z]/) && typeof e[r] == "function")).forEach((r) => {
    t[r] = e[r];
  }), t;
}
function ic(e) {
  const {
    getSlotProps: t,
    additionalProps: r,
    externalSlotProps: n,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const g = fe(r == null ? void 0 : r.className, i, o == null ? void 0 : o.className, n == null ? void 0 : n.className), y = E({}, r == null ? void 0 : r.style, o == null ? void 0 : o.style, n == null ? void 0 : n.style), m = E({}, r, o, n);
    return g.length > 0 && (m.className = g), Object.keys(y).length > 0 && (m.style = y), {
      props: m,
      internalRef: void 0
    };
  }
  const s = Zd(E({}, o, n)), c = Na(n), l = Na(o), u = t(s), f = fe(u == null ? void 0 : u.className, r == null ? void 0 : r.className, i, o == null ? void 0 : o.className, n == null ? void 0 : n.className), p = E({}, u == null ? void 0 : u.style, r == null ? void 0 : r.style, o == null ? void 0 : o.style, n == null ? void 0 : n.style), d = E({}, u, r, l, c);
  return f.length > 0 && (d.className = f), Object.keys(p).length > 0 && (d.style = p), {
    props: d,
    internalRef: u.ref
  };
}
const Qd = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function em(e) {
  var t;
  const {
    elementType: r,
    externalSlotProps: n,
    ownerState: o,
    skipResolvingSlotProps: i = !1
  } = e, s = pe(e, Qd), c = i ? {} : oc(n, o), {
    props: l,
    internalRef: u
  } = ic(E({}, s, {
    externalSlotProps: c
  })), f = Qe(u, c == null ? void 0 : c.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return lr(r, E({}, l, {
    ref: f
  }), o);
}
const tm = ["className", "elementType", "ownerState", "externalForwardedProps", "getSlotOwnerState", "internalForwardedProps"], rm = ["component", "slots", "slotProps"], nm = ["component"];
function om(e, t) {
  const {
    className: r,
    elementType: n,
    ownerState: o,
    externalForwardedProps: i,
    getSlotOwnerState: s,
    internalForwardedProps: c
  } = t, l = pe(t, tm), {
    component: u,
    slots: f = {
      [e]: void 0
    },
    slotProps: p = {
      [e]: void 0
    }
  } = i, d = pe(i, rm), g = f[e] || n, y = oc(p[e], o), m = ic(E({
    className: r
  }, l, {
    externalForwardedProps: e === "root" ? d : void 0,
    externalSlotProps: y
  })), {
    props: {
      component: v
    },
    internalRef: O
  } = m, R = pe(m.props, nm), w = Qe(O, y == null ? void 0 : y.ref, t.ref), T = s ? s(R) : {}, b = E({}, o, T), S = e === "root" ? v || u : v, _ = lr(g, E({}, e === "root" && !u && !f[e] && c, e !== "root" && !f[e] && c, R, S && {
    as: S
  }, {
    ref: w
  }), b);
  return Object.keys(T).forEach((H) => {
    delete _[H];
  }), [g, _];
}
function ac(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: s,
    in: c,
    onExited: l,
    timeout: u
  } = e, [f, p] = x.useState(!1), d = fe(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), g = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, y = fe(r.child, f && r.childLeaving, n && r.childPulsate);
  return !c && !f && p(!0), x.useEffect(() => {
    if (!c && l != null) {
      const m = setTimeout(l, u);
      return () => {
        clearTimeout(m);
      };
    }
  }, [l, c, u]), /* @__PURE__ */ P.jsx("span", {
    className: d,
    style: g,
    children: /* @__PURE__ */ P.jsx("span", {
      className: y
    })
  });
}
process.env.NODE_ENV !== "production" && (ac.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object.isRequired,
  className: a.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: a.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: a.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: a.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: a.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: a.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: a.number,
  /**
   * exit delay
   */
  timeout: a.number.isRequired
});
const at = Fe("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), im = ["center", "classes", "className"];
let no = (e) => e, ja, ka, Ia, Ma;
const Mo = 550, am = 80, sm = Hn(ja || (ja = no`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), cm = Hn(ka || (ka = no`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), lm = Hn(Ia || (Ia = no`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), um = Ee("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), fm = Ee(ac, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(Ma || (Ma = no`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), at.rippleVisible, sm, Mo, ({
  theme: e
}) => e.transitions.easing.easeInOut, at.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, at.child, at.childLeaving, cm, Mo, ({
  theme: e
}) => e.transitions.easing.easeInOut, at.childPulsate, lm, ({
  theme: e
}) => e.transitions.easing.easeInOut), sc = /* @__PURE__ */ x.forwardRef(function(t, r) {
  const n = ze({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: s
  } = n, c = pe(n, im), [l, u] = x.useState([]), f = x.useRef(0), p = x.useRef(null);
  x.useEffect(() => {
    p.current && (p.current(), p.current = null);
  }, [l]);
  const d = x.useRef(!1), g = Ut(), y = x.useRef(null), m = x.useRef(null), v = x.useCallback((T) => {
    const {
      pulsate: b,
      rippleX: S,
      rippleY: _,
      rippleSize: H,
      cb: U
    } = T;
    u((M) => [...M, /* @__PURE__ */ P.jsx(fm, {
      classes: {
        ripple: fe(i.ripple, at.ripple),
        rippleVisible: fe(i.rippleVisible, at.rippleVisible),
        ripplePulsate: fe(i.ripplePulsate, at.ripplePulsate),
        child: fe(i.child, at.child),
        childLeaving: fe(i.childLeaving, at.childLeaving),
        childPulsate: fe(i.childPulsate, at.childPulsate)
      },
      timeout: Mo,
      pulsate: b,
      rippleX: S,
      rippleY: _,
      rippleSize: H
    }, f.current)]), f.current += 1, p.current = U;
  }, [i]), O = x.useCallback((T = {}, b = {}, S = () => {
  }) => {
    const {
      pulsate: _ = !1,
      center: H = o || b.pulsate,
      fakeElement: U = !1
      // For test purposes
    } = b;
    if ((T == null ? void 0 : T.type) === "mousedown" && d.current) {
      d.current = !1;
      return;
    }
    (T == null ? void 0 : T.type) === "touchstart" && (d.current = !0);
    const M = U ? null : m.current, L = M ? M.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let K, V, G;
    if (H || T === void 0 || T.clientX === 0 && T.clientY === 0 || !T.clientX && !T.touches)
      K = Math.round(L.width / 2), V = Math.round(L.height / 2);
    else {
      const {
        clientX: q,
        clientY: F
      } = T.touches && T.touches.length > 0 ? T.touches[0] : T;
      K = Math.round(q - L.left), V = Math.round(F - L.top);
    }
    if (H)
      G = Math.sqrt((2 * L.width ** 2 + L.height ** 2) / 3), G % 2 === 0 && (G += 1);
    else {
      const q = Math.max(Math.abs((M ? M.clientWidth : 0) - K), K) * 2 + 2, F = Math.max(Math.abs((M ? M.clientHeight : 0) - V), V) * 2 + 2;
      G = Math.sqrt(q ** 2 + F ** 2);
    }
    T != null && T.touches ? y.current === null && (y.current = () => {
      v({
        pulsate: _,
        rippleX: K,
        rippleY: V,
        rippleSize: G,
        cb: S
      });
    }, g.start(am, () => {
      y.current && (y.current(), y.current = null);
    })) : v({
      pulsate: _,
      rippleX: K,
      rippleY: V,
      rippleSize: G,
      cb: S
    });
  }, [o, v, g]), R = x.useCallback(() => {
    O({}, {
      pulsate: !0
    });
  }, [O]), w = x.useCallback((T, b) => {
    if (g.clear(), (T == null ? void 0 : T.type) === "touchend" && y.current) {
      y.current(), y.current = null, g.start(0, () => {
        w(T, b);
      });
      return;
    }
    y.current = null, u((S) => S.length > 0 ? S.slice(1) : S), p.current = b;
  }, [g]);
  return x.useImperativeHandle(r, () => ({
    pulsate: R,
    start: O,
    stop: w
  }), [R, O, w]), /* @__PURE__ */ P.jsx(um, E({
    className: fe(at.root, i.root, s),
    ref: m
  }, c, {
    children: /* @__PURE__ */ P.jsx(Fd, {
      component: null,
      exit: !0,
      children: l
    })
  }));
});
process.env.NODE_ENV !== "production" && (sc.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: a.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string
});
const pm = sc;
function dm(e) {
  return Ve("MuiButtonBase", e);
}
const mm = Fe("MuiButtonBase", ["root", "disabled", "focusVisible"]), hm = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], vm = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, s = He({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, dm, o);
  return r && n && (s.root += ` ${n}`), s;
}, ym = Ee("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${mm.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), cc = /* @__PURE__ */ x.forwardRef(function(t, r) {
  const n = ze({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: s,
    className: c,
    component: l = "button",
    disabled: u = !1,
    disableRipple: f = !1,
    disableTouchRipple: p = !1,
    focusRipple: d = !1,
    LinkComponent: g = "a",
    onBlur: y,
    onClick: m,
    onContextMenu: v,
    onDragLeave: O,
    onFocus: R,
    onFocusVisible: w,
    onKeyDown: T,
    onKeyUp: b,
    onMouseDown: S,
    onMouseLeave: _,
    onMouseUp: H,
    onTouchEnd: U,
    onTouchMove: M,
    onTouchStart: L,
    tabIndex: K = 0,
    TouchRippleProps: V,
    touchRippleRef: G,
    type: q
  } = n, F = pe(n, hm), X = x.useRef(null), te = x.useRef(null), re = Qe(te, G), {
    isFocusVisibleRef: C,
    onFocus: k,
    onBlur: ee,
    ref: Z
  } = oi(), [z, J] = x.useState(!1);
  u && z && J(!1), x.useImperativeHandle(o, () => ({
    focusVisible: () => {
      J(!0), X.current.focus();
    }
  }), []);
  const [N, D] = x.useState(!1);
  x.useEffect(() => {
    D(!0);
  }, []);
  const A = N && !f && !u;
  x.useEffect(() => {
    z && d && !f && N && te.current.pulsate();
  }, [f, d, z, N]);
  function W(ie, Le, Tt = p) {
    return Wt((vt) => (Le && Le(vt), !Tt && te.current && te.current[ie](vt), !0));
  }
  const Q = W("start", S), se = W("stop", v), j = W("stop", O), Re = W("stop", H), B = W("stop", (ie) => {
    z && ie.preventDefault(), _ && _(ie);
  }), Oe = W("start", L), je = W("stop", U), tt = W("stop", M), $e = W("stop", (ie) => {
    ee(ie), C.current === !1 && J(!1), y && y(ie);
  }, !1), dt = Wt((ie) => {
    X.current || (X.current = ie.currentTarget), k(ie), C.current === !0 && (J(!0), w && w(ie)), R && R(ie);
  }), ke = () => {
    const ie = X.current;
    return l && l !== "button" && !(ie.tagName === "A" && ie.href);
  }, rt = x.useRef(!1), Ge = Wt((ie) => {
    d && !rt.current && z && te.current && ie.key === " " && (rt.current = !0, te.current.stop(ie, () => {
      te.current.start(ie);
    })), ie.target === ie.currentTarget && ke() && ie.key === " " && ie.preventDefault(), T && T(ie), ie.target === ie.currentTarget && ke() && ie.key === "Enter" && !u && (ie.preventDefault(), m && m(ie));
  }), ht = Wt((ie) => {
    d && ie.key === " " && te.current && z && !ie.defaultPrevented && (rt.current = !1, te.current.stop(ie, () => {
      te.current.pulsate(ie);
    })), b && b(ie), m && ie.target === ie.currentTarget && ke() && ie.key === " " && !ie.defaultPrevented && m(ie);
  });
  let Ke = l;
  Ke === "button" && (F.href || F.to) && (Ke = g);
  const De = {};
  Ke === "button" ? (De.type = q === void 0 ? "button" : q, De.disabled = u) : (!F.href && !F.to && (De.role = "button"), u && (De["aria-disabled"] = u));
  const nt = Qe(r, Z, X);
  process.env.NODE_ENV !== "production" && x.useEffect(() => {
    A && !te.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [A]);
  const Be = E({}, n, {
    centerRipple: i,
    component: l,
    disabled: u,
    disableRipple: f,
    disableTouchRipple: p,
    focusRipple: d,
    tabIndex: K,
    focusVisible: z
  }), $t = vm(Be);
  return /* @__PURE__ */ P.jsxs(ym, E({
    as: Ke,
    className: fe($t.root, c),
    ownerState: Be,
    onBlur: $e,
    onClick: m,
    onContextMenu: se,
    onFocus: dt,
    onKeyDown: Ge,
    onKeyUp: ht,
    onMouseDown: Q,
    onMouseLeave: B,
    onMouseUp: Re,
    onDragLeave: j,
    onTouchEnd: je,
    onTouchMove: tt,
    onTouchStart: Oe,
    ref: nt,
    tabIndex: u ? -1 : K,
    type: q
  }, De, F, {
    children: [s, A ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ P.jsx(pm, E({
        ref: re,
        center: i
      }, V))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (cc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: ni,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: a.bool,
  /**
   * The content of the component.
   */
  children: a.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Is,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: a.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: a.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: a.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: a.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: a.string,
  /**
   * @ignore
   */
  href: a.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: a.elementType,
  /**
   * @ignore
   */
  onBlur: a.func,
  /**
   * @ignore
   */
  onClick: a.func,
  /**
   * @ignore
   */
  onContextMenu: a.func,
  /**
   * @ignore
   */
  onDragLeave: a.func,
  /**
   * @ignore
   */
  onFocus: a.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: a.func,
  /**
   * @ignore
   */
  onKeyDown: a.func,
  /**
   * @ignore
   */
  onKeyUp: a.func,
  /**
   * @ignore
   */
  onMouseDown: a.func,
  /**
   * @ignore
   */
  onMouseLeave: a.func,
  /**
   * @ignore
   */
  onMouseUp: a.func,
  /**
   * @ignore
   */
  onTouchEnd: a.func,
  /**
   * @ignore
   */
  onTouchMove: a.func,
  /**
   * @ignore
   */
  onTouchStart: a.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * @default 0
   */
  tabIndex: a.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: a.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: a.oneOfType([a.func, a.shape({
    current: a.shape({
      pulsate: a.func.isRequired,
      start: a.func.isRequired,
      stop: a.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: a.oneOfType([a.oneOf(["button", "reset", "submit"]), a.string])
});
const Dn = cc;
function gm(e) {
  return Ve("MuiIconButton", e);
}
const bm = Fe("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), xm = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], Em = (e) => {
  const {
    classes: t,
    disabled: r,
    color: n,
    edge: o,
    size: i
  } = e, s = {
    root: ["root", r && "disabled", n !== "default" && `color${oe(n)}`, o && `edge${oe(o)}`, `size${oe(i)}`]
  };
  return He(s, gm, t);
}, Om = Ee(Dn, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "default" && t[`color${oe(r.color)}`], r.edge && t[`edge${oe(r.edge)}`], t[`size${oe(r.size)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => E({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  overflow: "visible",
  // Explicitly set the default value to solve a bug on IE11.
  color: (e.vars || e).palette.action.active,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  })
}, !t.disableRipple && {
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Ne(e.palette.action.active, e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  }
}, t.edge === "start" && {
  marginLeft: t.size === "small" ? -3 : -12
}, t.edge === "end" && {
  marginRight: t.size === "small" ? -3 : -12
}), ({
  theme: e,
  ownerState: t
}) => {
  var r;
  const n = (r = (e.vars || e).palette) == null ? void 0 : r[t.color];
  return E({}, t.color === "inherit" && {
    color: "inherit"
  }, t.color !== "inherit" && t.color !== "default" && E({
    color: n == null ? void 0 : n.main
  }, !t.disableRipple && {
    "&:hover": E({}, n && {
      backgroundColor: e.vars ? `rgba(${n.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ne(n.main, e.palette.action.hoverOpacity)
    }, {
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    })
  }), t.size === "small" && {
    padding: 5,
    fontSize: e.typography.pxToRem(18)
  }, t.size === "large" && {
    padding: 12,
    fontSize: e.typography.pxToRem(28)
  }, {
    [`&.${bm.disabled}`]: {
      backgroundColor: "transparent",
      color: (e.vars || e).palette.action.disabled
    }
  });
}), lc = /* @__PURE__ */ x.forwardRef(function(t, r) {
  const n = ze({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: o = !1,
    children: i,
    className: s,
    color: c = "default",
    disabled: l = !1,
    disableFocusRipple: u = !1,
    size: f = "medium"
  } = n, p = pe(n, xm), d = E({}, n, {
    edge: o,
    color: c,
    disabled: l,
    disableFocusRipple: u,
    size: f
  }), g = Em(d);
  return /* @__PURE__ */ P.jsx(Om, E({
    className: fe(g.root, s),
    centerRipple: !0,
    focusRipple: !u,
    disabled: l,
    ref: r
  }, p, {
    ownerState: d,
    children: i
  }));
});
process.env.NODE_ENV !== "production" && (lc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: Zr(a.node, (e) => x.Children.toArray(e.children).some((r) => /* @__PURE__ */ x.isValidElement(r) && r.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: a.oneOfType([a.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), a.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: a.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: a.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: a.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: a.oneOf(["end", "start", !1]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: a.oneOfType([a.oneOf(["small", "medium", "large"]), a.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object])
});
const Tm = lc;
function wm(e) {
  return Ve("MuiTypography", e);
}
Fe("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const Cm = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"], Rm = (e) => {
  const {
    align: t,
    gutterBottom: r,
    noWrap: n,
    paragraph: o,
    variant: i,
    classes: s
  } = e, c = {
    root: ["root", i, e.align !== "inherit" && `align${oe(t)}`, r && "gutterBottom", n && "noWrap", o && "paragraph"]
  };
  return He(c, wm, s);
}, Sm = Ee("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.variant && t[r.variant], r.align !== "inherit" && t[`align${oe(r.align)}`], r.noWrap && t.noWrap, r.gutterBottom && t.gutterBottom, r.paragraph && t.paragraph];
  }
})(({
  theme: e,
  ownerState: t
}) => E({
  margin: 0
}, t.variant === "inherit" && {
  // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
  font: "inherit"
}, t.variant !== "inherit" && e.typography[t.variant], t.align !== "inherit" && {
  textAlign: t.align
}, t.noWrap && {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
}, t.gutterBottom && {
  marginBottom: "0.35em"
}, t.paragraph && {
  marginBottom: 16
})), Aa = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, _m = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, Pm = (e) => _m[e] || e, uc = /* @__PURE__ */ x.forwardRef(function(t, r) {
  const n = ze({
    props: t,
    name: "MuiTypography"
  }), o = Pm(n.color), i = ei(E({}, n, {
    color: o
  })), {
    align: s = "inherit",
    className: c,
    component: l,
    gutterBottom: u = !1,
    noWrap: f = !1,
    paragraph: p = !1,
    variant: d = "body1",
    variantMapping: g = Aa
  } = i, y = pe(i, Cm), m = E({}, i, {
    align: s,
    color: o,
    className: c,
    component: l,
    gutterBottom: u,
    noWrap: f,
    paragraph: p,
    variant: d,
    variantMapping: g
  }), v = l || (p ? "p" : g[d] || Aa[d]) || "span", O = Rm(m);
  return /* @__PURE__ */ P.jsx(Sm, E({
    as: v,
    ref: r,
    ownerState: m,
    className: fe(O.root, c)
  }, y));
});
process.env.NODE_ENV !== "production" && (uc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: a.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: a.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: a.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: a.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: a.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   */
  paragraph: a.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: a.oneOfType([a.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), a.string]),
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping: a.object
});
const Ct = uc, fc = "base";
function $m(e) {
  return `${fc}--${e}`;
}
function Nm(e, t) {
  return `${fc}-${e}-${t}`;
}
function pc(e, t) {
  const r = Ss[t];
  return r ? $m(r) : Nm(e, t);
}
function jm(e, t) {
  const r = {};
  return t.forEach((n) => {
    r[n] = pc(e, n);
  }), r;
}
function km(e) {
  return typeof e == "function" ? e() : e;
}
const Ln = /* @__PURE__ */ x.forwardRef(function(t, r) {
  const {
    children: n,
    container: o,
    disablePortal: i = !1
  } = t, [s, c] = x.useState(null), l = Qe(/* @__PURE__ */ x.isValidElement(n) ? n.ref : null, r);
  if (Ht(() => {
    i || c(km(o) || document.body);
  }, [o, i]), Ht(() => {
    if (s && !i)
      return $n(r, s), () => {
        $n(r, null);
      };
  }, [r, s, i]), i) {
    if (/* @__PURE__ */ x.isValidElement(n)) {
      const u = {
        ref: l
      };
      return /* @__PURE__ */ x.cloneElement(n, u);
    }
    return /* @__PURE__ */ P.jsx(x.Fragment, {
      children: n
    });
  }
  return /* @__PURE__ */ P.jsx(x.Fragment, {
    children: s && /* @__PURE__ */ qc.createPortal(n, s)
  });
});
process.env.NODE_ENV !== "production" && (Ln.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: a.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: a.oneOfType([Wr, a.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: a.bool
});
process.env.NODE_ENV !== "production" && (Ln.propTypes = ri(Ln.propTypes));
var Ue = "top", ut = "bottom", ft = "right", qe = "left", mi = "auto", tn = [Ue, ut, ft, qe], hr = "start", Ur = "end", Im = "clippingParents", dc = "viewport", Nr = "popper", Mm = "reference", Da = /* @__PURE__ */ tn.reduce(function(e, t) {
  return e.concat([t + "-" + hr, t + "-" + Ur]);
}, []), mc = /* @__PURE__ */ [].concat(tn, [mi]).reduce(function(e, t) {
  return e.concat([t, t + "-" + hr, t + "-" + Ur]);
}, []), Am = "beforeRead", Dm = "read", Lm = "afterRead", Vm = "beforeMain", Fm = "main", zm = "afterMain", Bm = "beforeWrite", Wm = "write", Um = "afterWrite", qm = [Am, Dm, Lm, Vm, Fm, zm, Bm, Wm, Um];
function Ot(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function et(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Gt(e) {
  var t = et(e).Element;
  return e instanceof t || e instanceof Element;
}
function ct(e) {
  var t = et(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function hi(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = et(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Ym(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, o = t.attributes[r] || {}, i = t.elements[r];
    !ct(i) || !Ot(i) || (Object.assign(i.style, n), Object.keys(o).forEach(function(s) {
      var c = o[s];
      c === !1 ? i.removeAttribute(s) : i.setAttribute(s, c === !0 ? "" : c);
    }));
  });
}
function Hm(e) {
  var t = e.state, r = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow), function() {
    Object.keys(t.elements).forEach(function(n) {
      var o = t.elements[n], i = t.attributes[n] || {}, s = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), c = s.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !ct(o) || !Ot(o) || (Object.assign(o.style, c), Object.keys(i).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const Gm = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Ym,
  effect: Hm,
  requires: ["computeStyles"]
};
function Et(e) {
  return e.split("-")[0];
}
var Yt = Math.max, Vn = Math.min, vr = Math.round;
function Ao() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function hc() {
  return !/^((?!chrome|android).)*safari/i.test(Ao());
}
function yr(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), o = 1, i = 1;
  t && ct(e) && (o = e.offsetWidth > 0 && vr(n.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && vr(n.height) / e.offsetHeight || 1);
  var s = Gt(e) ? et(e) : window, c = s.visualViewport, l = !hc() && r, u = (n.left + (l && c ? c.offsetLeft : 0)) / o, f = (n.top + (l && c ? c.offsetTop : 0)) / i, p = n.width / o, d = n.height / i;
  return {
    width: p,
    height: d,
    top: f,
    right: u + p,
    bottom: f + d,
    left: u,
    x: u,
    y: f
  };
}
function yi(e) {
  var t = yr(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function vc(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && hi(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function St(e) {
  return et(e).getComputedStyle(e);
}
function Km(e) {
  return ["table", "td", "th"].indexOf(Ot(e)) >= 0;
}
function At(e) {
  return ((Gt(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function oo(e) {
  return Ot(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (hi(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    At(e)
  );
}
function La(e) {
  return !ct(e) || // https://github.com/popperjs/popper-core/issues/837
  St(e).position === "fixed" ? null : e.offsetParent;
}
function Xm(e) {
  var t = /firefox/i.test(Ao()), r = /Trident/i.test(Ao());
  if (r && ct(e)) {
    var n = St(e);
    if (n.position === "fixed")
      return null;
  }
  var o = oo(e);
  for (hi(o) && (o = o.host); ct(o) && ["html", "body"].indexOf(Ot(o)) < 0; ) {
    var i = St(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function rn(e) {
  for (var t = et(e), r = La(e); r && Km(r) && St(r).position === "static"; )
    r = La(r);
  return r && (Ot(r) === "html" || Ot(r) === "body" && St(r).position === "static") ? t : r || Xm(e) || t;
}
function gi(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ar(e, t, r) {
  return Yt(e, Vn(t, r));
}
function Jm(e, t, r) {
  var n = Ar(e, t, r);
  return n > r ? r : n;
}
function yc() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function gc(e) {
  return Object.assign({}, yc(), e);
}
function bc(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var Zm = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, gc(typeof t != "number" ? t : bc(t, tn));
};
function Qm(e) {
  var t, r = e.state, n = e.name, o = e.options, i = r.elements.arrow, s = r.modifiersData.popperOffsets, c = Et(r.placement), l = gi(c), u = [qe, ft].indexOf(c) >= 0, f = u ? "height" : "width";
  if (!(!i || !s)) {
    var p = Zm(o.padding, r), d = yi(i), g = l === "y" ? Ue : qe, y = l === "y" ? ut : ft, m = r.rects.reference[f] + r.rects.reference[l] - s[l] - r.rects.popper[f], v = s[l] - r.rects.reference[l], O = rn(i), R = O ? l === "y" ? O.clientHeight || 0 : O.clientWidth || 0 : 0, w = m / 2 - v / 2, T = p[g], b = R - d[f] - p[y], S = R / 2 - d[f] / 2 + w, _ = Ar(T, S, b), H = l;
    r.modifiersData[n] = (t = {}, t[H] = _, t.centerOffset = _ - S, t);
  }
}
function eh(e) {
  var t = e.state, r = e.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || vc(t.elements.popper, o) && (t.elements.arrow = o));
}
const th = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Qm,
  effect: eh,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function gr(e) {
  return e.split("-")[1];
}
var rh = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function nh(e, t) {
  var r = e.x, n = e.y, o = t.devicePixelRatio || 1;
  return {
    x: vr(r * o) / o || 0,
    y: vr(n * o) / o || 0
  };
}
function Va(e) {
  var t, r = e.popper, n = e.popperRect, o = e.placement, i = e.variation, s = e.offsets, c = e.position, l = e.gpuAcceleration, u = e.adaptive, f = e.roundOffsets, p = e.isFixed, d = s.x, g = d === void 0 ? 0 : d, y = s.y, m = y === void 0 ? 0 : y, v = typeof f == "function" ? f({
    x: g,
    y: m
  }) : {
    x: g,
    y: m
  };
  g = v.x, m = v.y;
  var O = s.hasOwnProperty("x"), R = s.hasOwnProperty("y"), w = qe, T = Ue, b = window;
  if (u) {
    var S = rn(r), _ = "clientHeight", H = "clientWidth";
    if (S === et(r) && (S = At(r), St(S).position !== "static" && c === "absolute" && (_ = "scrollHeight", H = "scrollWidth")), S = S, o === Ue || (o === qe || o === ft) && i === Ur) {
      T = ut;
      var U = p && S === b && b.visualViewport ? b.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        S[_]
      );
      m -= U - n.height, m *= l ? 1 : -1;
    }
    if (o === qe || (o === Ue || o === ut) && i === Ur) {
      w = ft;
      var M = p && S === b && b.visualViewport ? b.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        S[H]
      );
      g -= M - n.width, g *= l ? 1 : -1;
    }
  }
  var L = Object.assign({
    position: c
  }, u && rh), K = f === !0 ? nh({
    x: g,
    y: m
  }, et(r)) : {
    x: g,
    y: m
  };
  if (g = K.x, m = K.y, l) {
    var V;
    return Object.assign({}, L, (V = {}, V[T] = R ? "0" : "", V[w] = O ? "0" : "", V.transform = (b.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + m + "px)" : "translate3d(" + g + "px, " + m + "px, 0)", V));
  }
  return Object.assign({}, L, (t = {}, t[T] = R ? m + "px" : "", t[w] = O ? g + "px" : "", t.transform = "", t));
}
function oh(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, o = n === void 0 ? !0 : n, i = r.adaptive, s = i === void 0 ? !0 : i, c = r.roundOffsets, l = c === void 0 ? !0 : c, u = {
    placement: Et(t.placement),
    variation: gr(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Va(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Va(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const ih = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: oh,
  data: {}
};
var hn = {
  passive: !0
};
function ah(e) {
  var t = e.state, r = e.instance, n = e.options, o = n.scroll, i = o === void 0 ? !0 : o, s = n.resize, c = s === void 0 ? !0 : s, l = et(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(f) {
    f.addEventListener("scroll", r.update, hn);
  }), c && l.addEventListener("resize", r.update, hn), function() {
    i && u.forEach(function(f) {
      f.removeEventListener("scroll", r.update, hn);
    }), c && l.removeEventListener("resize", r.update, hn);
  };
}
const sh = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: ah,
  data: {}
};
var ch = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Cn(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return ch[t];
  });
}
var lh = {
  start: "end",
  end: "start"
};
function Fa(e) {
  return e.replace(/start|end/g, function(t) {
    return lh[t];
  });
}
function bi(e) {
  var t = et(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function xi(e) {
  return yr(At(e)).left + bi(e).scrollLeft;
}
function uh(e, t) {
  var r = et(e), n = At(e), o = r.visualViewport, i = n.clientWidth, s = n.clientHeight, c = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    var u = hc();
    (u || !u && t === "fixed") && (c = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: c + xi(e),
    y: l
  };
}
function fh(e) {
  var t, r = At(e), n = bi(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = Yt(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = Yt(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), c = -n.scrollLeft + xi(e), l = -n.scrollTop;
  return St(o || r).direction === "rtl" && (c += Yt(r.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: c,
    y: l
  };
}
function Ei(e) {
  var t = St(e), r = t.overflow, n = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function xc(e) {
  return ["html", "body", "#document"].indexOf(Ot(e)) >= 0 ? e.ownerDocument.body : ct(e) && Ei(e) ? e : xc(oo(e));
}
function Dr(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = xc(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), i = et(n), s = o ? [i].concat(i.visualViewport || [], Ei(n) ? n : []) : n, c = t.concat(s);
  return o ? c : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    c.concat(Dr(oo(s)))
  );
}
function Do(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function ph(e, t) {
  var r = yr(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function za(e, t, r) {
  return t === dc ? Do(uh(e, r)) : Gt(t) ? ph(t, r) : Do(fh(At(e)));
}
function dh(e) {
  var t = Dr(oo(e)), r = ["absolute", "fixed"].indexOf(St(e).position) >= 0, n = r && ct(e) ? rn(e) : e;
  return Gt(n) ? t.filter(function(o) {
    return Gt(o) && vc(o, n) && Ot(o) !== "body";
  }) : [];
}
function mh(e, t, r, n) {
  var o = t === "clippingParents" ? dh(e) : [].concat(t), i = [].concat(o, [r]), s = i[0], c = i.reduce(function(l, u) {
    var f = za(e, u, n);
    return l.top = Yt(f.top, l.top), l.right = Vn(f.right, l.right), l.bottom = Vn(f.bottom, l.bottom), l.left = Yt(f.left, l.left), l;
  }, za(e, s, n));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function Ec(e) {
  var t = e.reference, r = e.element, n = e.placement, o = n ? Et(n) : null, i = n ? gr(n) : null, s = t.x + t.width / 2 - r.width / 2, c = t.y + t.height / 2 - r.height / 2, l;
  switch (o) {
    case Ue:
      l = {
        x: s,
        y: t.y - r.height
      };
      break;
    case ut:
      l = {
        x: s,
        y: t.y + t.height
      };
      break;
    case ft:
      l = {
        x: t.x + t.width,
        y: c
      };
      break;
    case qe:
      l = {
        x: t.x - r.width,
        y: c
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var u = o ? gi(o) : null;
  if (u != null) {
    var f = u === "y" ? "height" : "width";
    switch (i) {
      case hr:
        l[u] = l[u] - (t[f] / 2 - r[f] / 2);
        break;
      case Ur:
        l[u] = l[u] + (t[f] / 2 - r[f] / 2);
        break;
    }
  }
  return l;
}
function qr(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = n === void 0 ? e.placement : n, i = r.strategy, s = i === void 0 ? e.strategy : i, c = r.boundary, l = c === void 0 ? Im : c, u = r.rootBoundary, f = u === void 0 ? dc : u, p = r.elementContext, d = p === void 0 ? Nr : p, g = r.altBoundary, y = g === void 0 ? !1 : g, m = r.padding, v = m === void 0 ? 0 : m, O = gc(typeof v != "number" ? v : bc(v, tn)), R = d === Nr ? Mm : Nr, w = e.rects.popper, T = e.elements[y ? R : d], b = mh(Gt(T) ? T : T.contextElement || At(e.elements.popper), l, f, s), S = yr(e.elements.reference), _ = Ec({
    reference: S,
    element: w,
    strategy: "absolute",
    placement: o
  }), H = Do(Object.assign({}, w, _)), U = d === Nr ? H : S, M = {
    top: b.top - U.top + O.top,
    bottom: U.bottom - b.bottom + O.bottom,
    left: b.left - U.left + O.left,
    right: U.right - b.right + O.right
  }, L = e.modifiersData.offset;
  if (d === Nr && L) {
    var K = L[o];
    Object.keys(M).forEach(function(V) {
      var G = [ft, ut].indexOf(V) >= 0 ? 1 : -1, q = [Ue, ut].indexOf(V) >= 0 ? "y" : "x";
      M[V] += K[q] * G;
    });
  }
  return M;
}
function hh(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = r.boundary, i = r.rootBoundary, s = r.padding, c = r.flipVariations, l = r.allowedAutoPlacements, u = l === void 0 ? mc : l, f = gr(n), p = f ? c ? Da : Da.filter(function(y) {
    return gr(y) === f;
  }) : tn, d = p.filter(function(y) {
    return u.indexOf(y) >= 0;
  });
  d.length === 0 && (d = p);
  var g = d.reduce(function(y, m) {
    return y[m] = qr(e, {
      placement: m,
      boundary: o,
      rootBoundary: i,
      padding: s
    })[Et(m)], y;
  }, {});
  return Object.keys(g).sort(function(y, m) {
    return g[y] - g[m];
  });
}
function vh(e) {
  if (Et(e) === mi)
    return [];
  var t = Cn(e);
  return [Fa(e), t, Fa(t)];
}
function yh(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = r.mainAxis, i = o === void 0 ? !0 : o, s = r.altAxis, c = s === void 0 ? !0 : s, l = r.fallbackPlacements, u = r.padding, f = r.boundary, p = r.rootBoundary, d = r.altBoundary, g = r.flipVariations, y = g === void 0 ? !0 : g, m = r.allowedAutoPlacements, v = t.options.placement, O = Et(v), R = O === v, w = l || (R || !y ? [Cn(v)] : vh(v)), T = [v].concat(w).reduce(function(z, J) {
      return z.concat(Et(J) === mi ? hh(t, {
        placement: J,
        boundary: f,
        rootBoundary: p,
        padding: u,
        flipVariations: y,
        allowedAutoPlacements: m
      }) : J);
    }, []), b = t.rects.reference, S = t.rects.popper, _ = /* @__PURE__ */ new Map(), H = !0, U = T[0], M = 0; M < T.length; M++) {
      var L = T[M], K = Et(L), V = gr(L) === hr, G = [Ue, ut].indexOf(K) >= 0, q = G ? "width" : "height", F = qr(t, {
        placement: L,
        boundary: f,
        rootBoundary: p,
        altBoundary: d,
        padding: u
      }), X = G ? V ? ft : qe : V ? ut : Ue;
      b[q] > S[q] && (X = Cn(X));
      var te = Cn(X), re = [];
      if (i && re.push(F[K] <= 0), c && re.push(F[X] <= 0, F[te] <= 0), re.every(function(z) {
        return z;
      })) {
        U = L, H = !1;
        break;
      }
      _.set(L, re);
    }
    if (H)
      for (var C = y ? 3 : 1, k = function(J) {
        var N = T.find(function(D) {
          var A = _.get(D);
          if (A)
            return A.slice(0, J).every(function(W) {
              return W;
            });
        });
        if (N)
          return U = N, "break";
      }, ee = C; ee > 0; ee--) {
        var Z = k(ee);
        if (Z === "break")
          break;
      }
    t.placement !== U && (t.modifiersData[n]._skip = !0, t.placement = U, t.reset = !0);
  }
}
const gh = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: yh,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Ba(e, t, r) {
  return r === void 0 && (r = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - r.y,
    right: e.right - t.width + r.x,
    bottom: e.bottom - t.height + r.y,
    left: e.left - t.width - r.x
  };
}
function Wa(e) {
  return [Ue, ft, ut, qe].some(function(t) {
    return e[t] >= 0;
  });
}
function bh(e) {
  var t = e.state, r = e.name, n = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, s = qr(t, {
    elementContext: "reference"
  }), c = qr(t, {
    altBoundary: !0
  }), l = Ba(s, n), u = Ba(c, o, i), f = Wa(l), p = Wa(u);
  t.modifiersData[r] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: u,
    isReferenceHidden: f,
    hasPopperEscaped: p
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": f,
    "data-popper-escaped": p
  });
}
const xh = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: bh
};
function Eh(e, t, r) {
  var n = Et(e), o = [qe, Ue].indexOf(n) >= 0 ? -1 : 1, i = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, s = i[0], c = i[1];
  return s = s || 0, c = (c || 0) * o, [qe, ft].indexOf(n) >= 0 ? {
    x: c,
    y: s
  } : {
    x: s,
    y: c
  };
}
function Oh(e) {
  var t = e.state, r = e.options, n = e.name, o = r.offset, i = o === void 0 ? [0, 0] : o, s = mc.reduce(function(f, p) {
    return f[p] = Eh(p, t.rects, i), f;
  }, {}), c = s[t.placement], l = c.x, u = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[n] = s;
}
const Th = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Oh
};
function wh(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = Ec({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Ch = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: wh,
  data: {}
};
function Rh(e) {
  return e === "x" ? "y" : "x";
}
function Sh(e) {
  var t = e.state, r = e.options, n = e.name, o = r.mainAxis, i = o === void 0 ? !0 : o, s = r.altAxis, c = s === void 0 ? !1 : s, l = r.boundary, u = r.rootBoundary, f = r.altBoundary, p = r.padding, d = r.tether, g = d === void 0 ? !0 : d, y = r.tetherOffset, m = y === void 0 ? 0 : y, v = qr(t, {
    boundary: l,
    rootBoundary: u,
    padding: p,
    altBoundary: f
  }), O = Et(t.placement), R = gr(t.placement), w = !R, T = gi(O), b = Rh(T), S = t.modifiersData.popperOffsets, _ = t.rects.reference, H = t.rects.popper, U = typeof m == "function" ? m(Object.assign({}, t.rects, {
    placement: t.placement
  })) : m, M = typeof U == "number" ? {
    mainAxis: U,
    altAxis: U
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, U), L = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, K = {
    x: 0,
    y: 0
  };
  if (S) {
    if (i) {
      var V, G = T === "y" ? Ue : qe, q = T === "y" ? ut : ft, F = T === "y" ? "height" : "width", X = S[T], te = X + v[G], re = X - v[q], C = g ? -H[F] / 2 : 0, k = R === hr ? _[F] : H[F], ee = R === hr ? -H[F] : -_[F], Z = t.elements.arrow, z = g && Z ? yi(Z) : {
        width: 0,
        height: 0
      }, J = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : yc(), N = J[G], D = J[q], A = Ar(0, _[F], z[F]), W = w ? _[F] / 2 - C - A - N - M.mainAxis : k - A - N - M.mainAxis, Q = w ? -_[F] / 2 + C + A + D + M.mainAxis : ee + A + D + M.mainAxis, se = t.elements.arrow && rn(t.elements.arrow), j = se ? T === "y" ? se.clientTop || 0 : se.clientLeft || 0 : 0, Re = (V = L == null ? void 0 : L[T]) != null ? V : 0, B = X + W - Re - j, Oe = X + Q - Re, je = Ar(g ? Vn(te, B) : te, X, g ? Yt(re, Oe) : re);
      S[T] = je, K[T] = je - X;
    }
    if (c) {
      var tt, $e = T === "x" ? Ue : qe, dt = T === "x" ? ut : ft, ke = S[b], rt = b === "y" ? "height" : "width", Ge = ke + v[$e], ht = ke - v[dt], Ke = [Ue, qe].indexOf(O) !== -1, De = (tt = L == null ? void 0 : L[b]) != null ? tt : 0, nt = Ke ? Ge : ke - _[rt] - H[rt] - De + M.altAxis, Be = Ke ? ke + _[rt] + H[rt] - De - M.altAxis : ht, $t = g && Ke ? Jm(nt, ke, Be) : Ar(g ? nt : Ge, ke, g ? Be : ht);
      S[b] = $t, K[b] = $t - ke;
    }
    t.modifiersData[n] = K;
  }
}
const _h = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Sh,
  requiresIfExists: ["offset"]
};
function Ph(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function $h(e) {
  return e === et(e) || !ct(e) ? bi(e) : Ph(e);
}
function Nh(e) {
  var t = e.getBoundingClientRect(), r = vr(t.width) / e.offsetWidth || 1, n = vr(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function jh(e, t, r) {
  r === void 0 && (r = !1);
  var n = ct(t), o = ct(t) && Nh(t), i = At(t), s = yr(e, o, r), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((Ot(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Ei(i)) && (c = $h(t)), ct(t) ? (l = yr(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : i && (l.x = xi(i))), {
    x: s.left + c.scrollLeft - l.x,
    y: s.top + c.scrollTop - l.y,
    width: s.width,
    height: s.height
  };
}
function kh(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function o(i) {
    r.add(i.name);
    var s = [].concat(i.requires || [], i.requiresIfExists || []);
    s.forEach(function(c) {
      if (!r.has(c)) {
        var l = t.get(c);
        l && o(l);
      }
    }), n.push(i);
  }
  return e.forEach(function(i) {
    r.has(i.name) || o(i);
  }), n;
}
function Ih(e) {
  var t = kh(e);
  return qm.reduce(function(r, n) {
    return r.concat(t.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function Mh(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function Ah(e) {
  var t = e.reduce(function(r, n) {
    var o = r[n.name];
    return r[n.name] = o ? Object.assign({}, o, n, {
      options: Object.assign({}, o.options, n.options),
      data: Object.assign({}, o.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
var Ua = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function qa() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Dh(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, o = t.defaultOptions, i = o === void 0 ? Ua : o;
  return function(c, l, u) {
    u === void 0 && (u = i);
    var f = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Ua, i),
      modifiersData: {},
      elements: {
        reference: c,
        popper: l
      },
      attributes: {},
      styles: {}
    }, p = [], d = !1, g = {
      state: f,
      setOptions: function(O) {
        var R = typeof O == "function" ? O(f.options) : O;
        m(), f.options = Object.assign({}, i, f.options, R), f.scrollParents = {
          reference: Gt(c) ? Dr(c) : c.contextElement ? Dr(c.contextElement) : [],
          popper: Dr(l)
        };
        var w = Ih(Ah([].concat(n, f.options.modifiers)));
        return f.orderedModifiers = w.filter(function(T) {
          return T.enabled;
        }), y(), g.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!d) {
          var O = f.elements, R = O.reference, w = O.popper;
          if (qa(R, w)) {
            f.rects = {
              reference: jh(R, rn(w), f.options.strategy === "fixed"),
              popper: yi(w)
            }, f.reset = !1, f.placement = f.options.placement, f.orderedModifiers.forEach(function(M) {
              return f.modifiersData[M.name] = Object.assign({}, M.data);
            });
            for (var T = 0; T < f.orderedModifiers.length; T++) {
              if (f.reset === !0) {
                f.reset = !1, T = -1;
                continue;
              }
              var b = f.orderedModifiers[T], S = b.fn, _ = b.options, H = _ === void 0 ? {} : _, U = b.name;
              typeof S == "function" && (f = S({
                state: f,
                options: H,
                name: U,
                instance: g
              }) || f);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Mh(function() {
        return new Promise(function(v) {
          g.forceUpdate(), v(f);
        });
      }),
      destroy: function() {
        m(), d = !0;
      }
    };
    if (!qa(c, l))
      return g;
    g.setOptions(u).then(function(v) {
      !d && u.onFirstUpdate && u.onFirstUpdate(v);
    });
    function y() {
      f.orderedModifiers.forEach(function(v) {
        var O = v.name, R = v.options, w = R === void 0 ? {} : R, T = v.effect;
        if (typeof T == "function") {
          var b = T({
            state: f,
            name: O,
            instance: g,
            options: w
          }), S = function() {
          };
          p.push(b || S);
        }
      });
    }
    function m() {
      p.forEach(function(v) {
        return v();
      }), p = [];
    }
    return g;
  };
}
var Lh = [sh, Ch, ih, Gm, Th, gh, _h, th, xh], Vh = /* @__PURE__ */ Dh({
  defaultModifiers: Lh
});
const Oc = "Popper";
function Fh(e) {
  return pc(Oc, e);
}
jm(Oc, ["root"]);
const zh = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"], Bh = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];
function Wh(e, t) {
  if (t === "ltr")
    return e;
  switch (e) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return e;
  }
}
function Fn(e) {
  return typeof e == "function" ? e() : e;
}
function io(e) {
  return e.nodeType !== void 0;
}
function Uh(e) {
  return !io(e);
}
const qh = () => He({
  root: ["root"]
}, Jd(Fh)), Yh = {}, Hh = /* @__PURE__ */ x.forwardRef(function(t, r) {
  var n;
  const {
    anchorEl: o,
    children: i,
    direction: s,
    disablePortal: c,
    modifiers: l,
    open: u,
    placement: f,
    popperOptions: p,
    popperRef: d,
    slotProps: g = {},
    slots: y = {},
    TransitionProps: m
    // @ts-ignore internal logic
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
  } = t, v = pe(t, zh), O = x.useRef(null), R = Qe(O, r), w = x.useRef(null), T = Qe(w, d), b = x.useRef(T);
  Ht(() => {
    b.current = T;
  }, [T]), x.useImperativeHandle(d, () => w.current, []);
  const S = Wh(f, s), [_, H] = x.useState(S), [U, M] = x.useState(Fn(o));
  x.useEffect(() => {
    w.current && w.current.forceUpdate();
  }), x.useEffect(() => {
    o && M(Fn(o));
  }, [o]), Ht(() => {
    if (!U || !u)
      return;
    const q = (te) => {
      H(te.placement);
    };
    if (process.env.NODE_ENV !== "production" && U && io(U) && U.nodeType === 1) {
      const te = U.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && te.top === 0 && te.left === 0 && te.right === 0 && te.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let F = [{
      name: "preventOverflow",
      options: {
        altBoundary: c
      }
    }, {
      name: "flip",
      options: {
        altBoundary: c
      }
    }, {
      name: "onUpdate",
      enabled: !0,
      phase: "afterWrite",
      fn: ({
        state: te
      }) => {
        q(te);
      }
    }];
    l != null && (F = F.concat(l)), p && p.modifiers != null && (F = F.concat(p.modifiers));
    const X = Vh(U, O.current, E({
      placement: S
    }, p, {
      modifiers: F
    }));
    return b.current(X), () => {
      X.destroy(), b.current(null);
    };
  }, [U, c, l, u, p, S]);
  const L = {
    placement: _
  };
  m !== null && (L.TransitionProps = m);
  const K = qh(), V = (n = y.root) != null ? n : "div", G = em({
    elementType: V,
    externalSlotProps: g.root,
    externalForwardedProps: v,
    additionalProps: {
      role: "tooltip",
      ref: R
    },
    ownerState: t,
    className: K.root
  });
  return /* @__PURE__ */ P.jsx(V, E({}, G, {
    children: typeof i == "function" ? i(L) : i
  }));
}), Tc = /* @__PURE__ */ x.forwardRef(function(t, r) {
  const {
    anchorEl: n,
    children: o,
    container: i,
    direction: s = "ltr",
    disablePortal: c = !1,
    keepMounted: l = !1,
    modifiers: u,
    open: f,
    placement: p = "bottom",
    popperOptions: d = Yh,
    popperRef: g,
    style: y,
    transition: m = !1,
    slotProps: v = {},
    slots: O = {}
  } = t, R = pe(t, Bh), [w, T] = x.useState(!0), b = () => {
    T(!1);
  }, S = () => {
    T(!0);
  };
  if (!l && !f && (!m || w))
    return null;
  let _;
  if (i)
    _ = i;
  else if (n) {
    const M = Fn(n);
    _ = M && io(M) ? Pn(M).body : Pn(null).body;
  }
  const H = !f && l && (!m || w) ? "none" : void 0, U = m ? {
    in: f,
    onEnter: b,
    onExited: S
  } : void 0;
  return /* @__PURE__ */ P.jsx(Ln, {
    disablePortal: c,
    container: _,
    children: /* @__PURE__ */ P.jsx(Hh, E({
      anchorEl: n,
      direction: s,
      disablePortal: c,
      modifiers: u,
      ref: r,
      open: m ? !w : f,
      placement: p,
      popperOptions: d,
      popperRef: g,
      slotProps: v,
      slots: O
    }, R, {
      style: E({
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: H
      }, y),
      TransitionProps: U,
      children: o
    }))
  });
});
process.env.NODE_ENV !== "production" && (Tc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: Zr(a.oneOfType([Wr, a.object, a.func]), (e) => {
    if (e.open) {
      const t = Fn(e.anchorEl);
      if (t && io(t) && t.nodeType === 1) {
        const r = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && r.top === 0 && r.left === 0 && r.right === 0 && r.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || Uh(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "It should be an HTML element instance or a virtualElement ", "(https://popper.js.org/docs/v2/virtual-elements/)."].join(`
`));
    }
    return null;
  }),
  /**
   * Popper render function or node.
   */
  children: a.oneOfType([a.node, a.func]),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: a.oneOfType([Wr, a.func]),
  /**
   * Direction of the text.
   * @default 'ltr'
   */
  direction: a.oneOf(["ltr", "rtl"]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: a.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: a.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: a.arrayOf(a.shape({
    data: a.object,
    effect: a.func,
    enabled: a.bool,
    fn: a.func,
    name: a.any,
    options: a.object,
    phase: a.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: a.arrayOf(a.string),
    requiresIfExists: a.arrayOf(a.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: a.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: a.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: a.shape({
    modifiers: a.array,
    onFirstUpdate: a.func,
    placement: a.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: a.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: ni,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: a.shape({
    root: a.oneOfType([a.func, a.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: a.shape({
    root: a.elementType
  }),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: a.bool
});
var Oi = {};
Object.defineProperty(Oi, "__esModule", {
  value: !0
});
var wc = Oi.default = void 0, Gh = Xh(Je), Kh = Js;
function Cc(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (Cc = function(n) {
    return n ? r : t;
  })(e);
}
function Xh(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = Cc(t);
  if (r && r.has(e))
    return r.get(e);
  var n = { __proto__: null }, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var s = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      s && (s.get || s.set) ? Object.defineProperty(n, i, s) : n[i] = e[i];
    }
  return n.default = e, r && r.set(e, n), n;
}
function Jh(e) {
  return Object.keys(e).length === 0;
}
function Zh(e = null) {
  const t = Gh.useContext(Kh.ThemeContext);
  return !t || Jh(t) ? e : t;
}
wc = Oi.default = Zh;
const Qh = ["anchorEl", "component", "components", "componentsProps", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition", "slots", "slotProps"], ev = Ee(Tc, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Rc = /* @__PURE__ */ x.forwardRef(function(t, r) {
  var n;
  const o = wc(), i = ze({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: s,
    component: c,
    components: l,
    componentsProps: u,
    container: f,
    disablePortal: p,
    keepMounted: d,
    modifiers: g,
    open: y,
    placement: m,
    popperOptions: v,
    popperRef: O,
    transition: R,
    slots: w,
    slotProps: T
  } = i, b = pe(i, Qh), S = (n = w == null ? void 0 : w.root) != null ? n : l == null ? void 0 : l.Root, _ = E({
    anchorEl: s,
    container: f,
    disablePortal: p,
    keepMounted: d,
    modifiers: g,
    open: y,
    placement: m,
    popperOptions: v,
    popperRef: O,
    transition: R
  }, b);
  return /* @__PURE__ */ P.jsx(ev, E({
    as: c,
    direction: o == null ? void 0 : o.direction,
    slots: {
      root: S
    },
    slotProps: T ?? u
  }, _, {
    ref: r
  }));
});
process.env.NODE_ENV !== "production" && (Rc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: a.oneOfType([Wr, a.object, a.func]),
  /**
   * Popper render function or node.
   */
  children: a.oneOfType([a.node, a.func]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: a.elementType,
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: a.shape({
    Root: a.elementType
  }),
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  componentsProps: a.shape({
    root: a.oneOfType([a.func, a.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: a.oneOfType([Wr, a.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: a.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: a.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: a.arrayOf(a.shape({
    data: a.object,
    effect: a.func,
    enabled: a.bool,
    fn: a.func,
    name: a.any,
    options: a.object,
    phase: a.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: a.arrayOf(a.string),
    requiresIfExists: a.arrayOf(a.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: a.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: a.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: a.shape({
    modifiers: a.array,
    onFirstUpdate: a.func,
    placement: a.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: a.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: ni,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: a.shape({
    root: a.oneOfType([a.func, a.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: a.shape({
    root: a.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: a.bool
});
const Sc = Rc;
function tv(e) {
  return Ve("MuiListSubheader", e);
}
Fe("MuiListSubheader", ["root", "colorPrimary", "colorInherit", "gutters", "inset", "sticky"]);
const rv = ["className", "color", "component", "disableGutters", "disableSticky", "inset"], nv = (e) => {
  const {
    classes: t,
    color: r,
    disableGutters: n,
    inset: o,
    disableSticky: i
  } = e, s = {
    root: ["root", r !== "default" && `color${oe(r)}`, !n && "gutters", o && "inset", !i && "sticky"]
  };
  return He(s, tv, t);
}, ov = Ee("li", {
  name: "MuiListSubheader",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "default" && t[`color${oe(r.color)}`], !r.disableGutters && t.gutters, r.inset && t.inset, !r.disableSticky && t.sticky];
  }
})(({
  theme: e,
  ownerState: t
}) => E({
  boxSizing: "border-box",
  lineHeight: "48px",
  listStyle: "none",
  color: (e.vars || e).palette.text.secondary,
  fontFamily: e.typography.fontFamily,
  fontWeight: e.typography.fontWeightMedium,
  fontSize: e.typography.pxToRem(14)
}, t.color === "primary" && {
  color: (e.vars || e).palette.primary.main
}, t.color === "inherit" && {
  color: "inherit"
}, !t.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, t.inset && {
  paddingLeft: 72
}, !t.disableSticky && {
  position: "sticky",
  top: 0,
  zIndex: 1,
  backgroundColor: (e.vars || e).palette.background.paper
})), Ti = /* @__PURE__ */ x.forwardRef(function(t, r) {
  const n = ze({
    props: t,
    name: "MuiListSubheader"
  }), {
    className: o,
    color: i = "default",
    component: s = "li",
    disableGutters: c = !1,
    disableSticky: l = !1,
    inset: u = !1
  } = n, f = pe(n, rv), p = E({}, n, {
    color: i,
    component: s,
    disableGutters: c,
    disableSticky: l,
    inset: u
  }), d = nv(p);
  return /* @__PURE__ */ P.jsx(ov, E({
    as: s,
    className: fe(d.root, o),
    ref: r,
    ownerState: p
  }, f));
});
Ti.muiSkipListHighlight = !0;
process.env.NODE_ENV !== "production" && (Ti.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: a.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'default'
   */
  color: a.oneOf(["default", "inherit", "primary"]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: a.elementType,
  /**
   * If `true`, the List Subheader will not have gutters.
   * @default false
   */
  disableGutters: a.bool,
  /**
   * If `true`, the List Subheader will not stick to the top during scroll.
   * @default false
   */
  disableSticky: a.bool,
  /**
   * If `true`, the List Subheader is indented.
   * @default false
   */
  inset: a.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object])
});
const iv = Ti, av = ui(/* @__PURE__ */ P.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function sv(e) {
  return Ve("MuiChip", e);
}
const cv = Fe("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), de = cv, lv = ["avatar", "className", "clickable", "color", "component", "deleteIcon", "disabled", "icon", "label", "onClick", "onDelete", "onKeyDown", "onKeyUp", "size", "variant", "tabIndex", "skipFocusWhenDisabled"], uv = (e) => {
  const {
    classes: t,
    disabled: r,
    size: n,
    color: o,
    iconColor: i,
    onDelete: s,
    clickable: c,
    variant: l
  } = e, u = {
    root: ["root", l, r && "disabled", `size${oe(n)}`, `color${oe(o)}`, c && "clickable", c && `clickableColor${oe(o)}`, s && "deletable", s && `deletableColor${oe(o)}`, `${l}${oe(o)}`],
    label: ["label", `label${oe(n)}`],
    avatar: ["avatar", `avatar${oe(n)}`, `avatarColor${oe(o)}`],
    icon: ["icon", `icon${oe(n)}`, `iconColor${oe(i)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${oe(n)}`, `deleteIconColor${oe(o)}`, `deleteIcon${oe(l)}Color${oe(o)}`]
  };
  return He(u, sv, t);
}, fv = Ee("div", {
  name: "MuiChip",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e, {
      color: n,
      iconColor: o,
      clickable: i,
      onDelete: s,
      size: c,
      variant: l
    } = r;
    return [{
      [`& .${de.avatar}`]: t.avatar
    }, {
      [`& .${de.avatar}`]: t[`avatar${oe(c)}`]
    }, {
      [`& .${de.avatar}`]: t[`avatarColor${oe(n)}`]
    }, {
      [`& .${de.icon}`]: t.icon
    }, {
      [`& .${de.icon}`]: t[`icon${oe(c)}`]
    }, {
      [`& .${de.icon}`]: t[`iconColor${oe(o)}`]
    }, {
      [`& .${de.deleteIcon}`]: t.deleteIcon
    }, {
      [`& .${de.deleteIcon}`]: t[`deleteIcon${oe(c)}`]
    }, {
      [`& .${de.deleteIcon}`]: t[`deleteIconColor${oe(n)}`]
    }, {
      [`& .${de.deleteIcon}`]: t[`deleteIcon${oe(l)}Color${oe(n)}`]
    }, t.root, t[`size${oe(c)}`], t[`color${oe(n)}`], i && t.clickable, i && n !== "default" && t[`clickableColor${oe(n)})`], s && t.deletable, s && n !== "default" && t[`deletableColor${oe(n)}`], t[l], t[`${l}${oe(n)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  const r = e.palette.mode === "light" ? e.palette.grey[700] : e.palette.grey[300];
  return E({
    maxWidth: "100%",
    fontFamily: e.typography.fontFamily,
    fontSize: e.typography.pxToRem(13),
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: 32,
    color: (e.vars || e).palette.text.primary,
    backgroundColor: (e.vars || e).palette.action.selected,
    borderRadius: 32 / 2,
    whiteSpace: "nowrap",
    transition: e.transitions.create(["background-color", "box-shadow"]),
    // reset cursor explicitly in case ButtonBase is used
    cursor: "unset",
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    textDecoration: "none",
    border: 0,
    // Remove `button` border
    padding: 0,
    // Remove `button` padding
    verticalAlign: "middle",
    boxSizing: "border-box",
    [`&.${de.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${de.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : r,
      fontSize: e.typography.pxToRem(12)
    },
    [`& .${de.avatarColorPrimary}`]: {
      color: (e.vars || e).palette.primary.contrastText,
      backgroundColor: (e.vars || e).palette.primary.dark
    },
    [`& .${de.avatarColorSecondary}`]: {
      color: (e.vars || e).palette.secondary.contrastText,
      backgroundColor: (e.vars || e).palette.secondary.dark
    },
    [`& .${de.avatarSmall}`]: {
      marginLeft: 4,
      marginRight: -4,
      width: 18,
      height: 18,
      fontSize: e.typography.pxToRem(10)
    },
    [`& .${de.icon}`]: E({
      marginLeft: 5,
      marginRight: -6
    }, t.size === "small" && {
      fontSize: 18,
      marginLeft: 4,
      marginRight: -4
    }, t.iconColor === t.color && E({
      color: e.vars ? e.vars.palette.Chip.defaultIconColor : r
    }, t.color !== "default" && {
      color: "inherit"
    })),
    [`& .${de.deleteIcon}`]: E({
      WebkitTapHighlightColor: "transparent",
      color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)` : Ne(e.palette.text.primary, 0.26),
      fontSize: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : Ne(e.palette.text.primary, 0.4)
      }
    }, t.size === "small" && {
      fontSize: 16,
      marginRight: 4,
      marginLeft: -4
    }, t.color !== "default" && {
      color: e.vars ? `rgba(${e.vars.palette[t.color].contrastTextChannel} / 0.7)` : Ne(e.palette[t.color].contrastText, 0.7),
      "&:hover, &:active": {
        color: (e.vars || e).palette[t.color].contrastText
      }
    })
  }, t.size === "small" && {
    height: 24
  }, t.color !== "default" && {
    backgroundColor: (e.vars || e).palette[t.color].main,
    color: (e.vars || e).palette[t.color].contrastText
  }, t.onDelete && {
    [`&.${de.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Ne(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  }, t.onDelete && t.color !== "default" && {
    [`&.${de.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette[t.color].dark
    }
  });
}, ({
  theme: e,
  ownerState: t
}) => E({}, t.clickable && {
  userSelect: "none",
  WebkitTapHighlightColor: "transparent",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Ne(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
  },
  [`&.${de.focusVisible}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Ne(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
  },
  "&:active": {
    boxShadow: (e.vars || e).shadows[1]
  }
}, t.clickable && t.color !== "default" && {
  [`&:hover, &.${de.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette[t.color].dark
  }
}), ({
  theme: e,
  ownerState: t
}) => E({}, t.variant === "outlined" && {
  backgroundColor: "transparent",
  border: e.vars ? `1px solid ${e.vars.palette.Chip.defaultBorder}` : `1px solid ${e.palette.mode === "light" ? e.palette.grey[400] : e.palette.grey[700]}`,
  [`&.${de.clickable}:hover`]: {
    backgroundColor: (e.vars || e).palette.action.hover
  },
  [`&.${de.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`& .${de.avatar}`]: {
    marginLeft: 4
  },
  [`& .${de.avatarSmall}`]: {
    marginLeft: 2
  },
  [`& .${de.icon}`]: {
    marginLeft: 4
  },
  [`& .${de.iconSmall}`]: {
    marginLeft: 2
  },
  [`& .${de.deleteIcon}`]: {
    marginRight: 5
  },
  [`& .${de.deleteIconSmall}`]: {
    marginRight: 3
  }
}, t.variant === "outlined" && t.color !== "default" && {
  color: (e.vars || e).palette[t.color].main,
  border: `1px solid ${e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)` : Ne(e.palette[t.color].main, 0.7)}`,
  [`&.${de.clickable}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ne(e.palette[t.color].main, e.palette.action.hoverOpacity)
  },
  [`&.${de.focusVisible}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.focusOpacity})` : Ne(e.palette[t.color].main, e.palette.action.focusOpacity)
  },
  [`& .${de.deleteIcon}`]: {
    color: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)` : Ne(e.palette[t.color].main, 0.7),
    "&:hover, &:active": {
      color: (e.vars || e).palette[t.color].main
    }
  }
})), pv = Ee("span", {
  name: "MuiChip",
  slot: "Label",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e, {
      size: n
    } = r;
    return [t.label, t[`label${oe(n)}`]];
  }
})(({
  ownerState: e
}) => E({
  overflow: "hidden",
  textOverflow: "ellipsis",
  paddingLeft: 12,
  paddingRight: 12,
  whiteSpace: "nowrap"
}, e.variant === "outlined" && {
  paddingLeft: 11,
  paddingRight: 11
}, e.size === "small" && {
  paddingLeft: 8,
  paddingRight: 8
}, e.size === "small" && e.variant === "outlined" && {
  paddingLeft: 7,
  paddingRight: 7
}));
function Ya(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const _c = /* @__PURE__ */ x.forwardRef(function(t, r) {
  const n = ze({
    props: t,
    name: "MuiChip"
  }), {
    avatar: o,
    className: i,
    clickable: s,
    color: c = "default",
    component: l,
    deleteIcon: u,
    disabled: f = !1,
    icon: p,
    label: d,
    onClick: g,
    onDelete: y,
    onKeyDown: m,
    onKeyUp: v,
    size: O = "medium",
    variant: R = "filled",
    tabIndex: w,
    skipFocusWhenDisabled: T = !1
    // TODO v6: Rename to `focusableWhenDisabled`.
  } = n, b = pe(n, lv), S = x.useRef(null), _ = Qe(S, r), H = (re) => {
    re.stopPropagation(), y && y(re);
  }, U = (re) => {
    re.currentTarget === re.target && Ya(re) && re.preventDefault(), m && m(re);
  }, M = (re) => {
    re.currentTarget === re.target && (y && Ya(re) ? y(re) : re.key === "Escape" && S.current && S.current.blur()), v && v(re);
  }, L = s !== !1 && g ? !0 : s, K = L || y ? Dn : l || "div", V = E({}, n, {
    component: K,
    disabled: f,
    size: O,
    color: c,
    iconColor: /* @__PURE__ */ x.isValidElement(p) && p.props.color || c,
    onDelete: !!y,
    clickable: L,
    variant: R
  }), G = uv(V), q = K === Dn ? E({
    component: l || "div",
    focusVisibleClassName: G.focusVisible
  }, y && {
    disableRipple: !0
  }) : {};
  let F = null;
  y && (F = u && /* @__PURE__ */ x.isValidElement(u) ? /* @__PURE__ */ x.cloneElement(u, {
    className: fe(u.props.className, G.deleteIcon),
    onClick: H
  }) : /* @__PURE__ */ P.jsx(av, {
    className: fe(G.deleteIcon),
    onClick: H
  }));
  let X = null;
  o && /* @__PURE__ */ x.isValidElement(o) && (X = /* @__PURE__ */ x.cloneElement(o, {
    className: fe(G.avatar, o.props.className)
  }));
  let te = null;
  return p && /* @__PURE__ */ x.isValidElement(p) && (te = /* @__PURE__ */ x.cloneElement(p, {
    className: fe(G.icon, p.props.className)
  })), process.env.NODE_ENV !== "production" && X && te && console.error("MUI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one."), /* @__PURE__ */ P.jsxs(fv, E({
    as: K,
    className: fe(G.root, i),
    disabled: L && f ? !0 : void 0,
    onClick: g,
    onKeyDown: U,
    onKeyUp: M,
    ref: _,
    tabIndex: T && f ? -1 : w,
    ownerState: V
  }, q, b, {
    children: [X || te, /* @__PURE__ */ P.jsx(pv, {
      className: fe(G.label),
      ownerState: V,
      children: d
    }), F]
  }));
});
process.env.NODE_ENV !== "production" && (_c.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The Avatar element to display.
   */
  avatar: a.element,
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: As,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * If `true`, the chip will appear clickable, and will raise when pressed,
   * even if the onClick prop is not defined.
   * If `false`, the chip will not appear clickable, even if onClick prop is defined.
   * This can be used, for example,
   * along with the component prop to indicate an anchor Chip is clickable.
   * Note: this controls the UI and does not affect the onClick event.
   */
  clickable: a.bool,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: a.oneOfType([a.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), a.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: a.elementType,
  /**
   * Override the default delete icon element. Shown only if `onDelete` is set.
   */
  deleteIcon: a.element,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: a.bool,
  /**
   * Icon element.
   */
  icon: a.element,
  /**
   * The content of the component.
   */
  label: a.node,
  /**
   * @ignore
   */
  onClick: a.func,
  /**
   * Callback fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   */
  onDelete: a.func,
  /**
   * @ignore
   */
  onKeyDown: a.func,
  /**
   * @ignore
   */
  onKeyUp: a.func,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: a.oneOfType([a.oneOf(["medium", "small"]), a.string]),
  /**
   * If `true`, allows the disabled chip to escape focus.
   * If `false`, allows the disabled chip to receive focus.
   * @default false
   */
  skipFocusWhenDisabled: a.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * @ignore
   */
  tabIndex: a.number,
  /**
   * The variant to use.
   * @default 'filled'
   */
  variant: a.oneOfType([a.oneOf(["filled", "outlined"]), a.string])
});
const dv = _c, mv = ui(/* @__PURE__ */ P.jsx("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), "Person");
function hv(e) {
  return Ve("MuiAvatar", e);
}
Fe("MuiAvatar", ["root", "colorDefault", "circular", "rounded", "square", "img", "fallback"]);
const vv = ["alt", "children", "className", "component", "slots", "slotProps", "imgProps", "sizes", "src", "srcSet", "variant"], yv = Nd(), gv = (e) => {
  const {
    classes: t,
    variant: r,
    colorDefault: n
  } = e;
  return He({
    root: ["root", r, n && "colorDefault"],
    img: ["img"],
    fallback: ["fallback"]
  }, hv, t);
}, bv = Ee("div", {
  name: "MuiAvatar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], r.colorDefault && t.colorDefault];
  }
})(({
  theme: e
}) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  width: 40,
  height: 40,
  fontFamily: e.typography.fontFamily,
  fontSize: e.typography.pxToRem(20),
  lineHeight: 1,
  borderRadius: "50%",
  overflow: "hidden",
  userSelect: "none",
  variants: [{
    props: {
      variant: "rounded"
    },
    style: {
      borderRadius: (e.vars || e).shape.borderRadius
    }
  }, {
    props: {
      variant: "square"
    },
    style: {
      borderRadius: 0
    }
  }, {
    props: {
      colorDefault: !0
    },
    style: E({
      color: (e.vars || e).palette.background.default
    }, e.vars ? {
      backgroundColor: e.vars.palette.Avatar.defaultBg
    } : E({
      backgroundColor: e.palette.grey[400]
    }, e.applyStyles("dark", {
      backgroundColor: e.palette.grey[600]
    })))
  }]
})), xv = Ee("img", {
  name: "MuiAvatar",
  slot: "Img",
  overridesResolver: (e, t) => t.img
})({
  width: "100%",
  height: "100%",
  textAlign: "center",
  // Handle non-square image. The property isn't supported by IE11.
  objectFit: "cover",
  // Hide alt text.
  color: "transparent",
  // Hide the image broken icon, only works on Chrome.
  textIndent: 1e4
}), Ev = Ee(mv, {
  name: "MuiAvatar",
  slot: "Fallback",
  overridesResolver: (e, t) => t.fallback
})({
  width: "75%",
  height: "75%"
});
function Ov({
  crossOrigin: e,
  referrerPolicy: t,
  src: r,
  srcSet: n
}) {
  const [o, i] = x.useState(!1);
  return x.useEffect(() => {
    if (!r && !n)
      return;
    i(!1);
    let s = !0;
    const c = new Image();
    return c.onload = () => {
      s && i("loaded");
    }, c.onerror = () => {
      s && i("error");
    }, c.crossOrigin = e, c.referrerPolicy = t, c.src = r, n && (c.srcset = n), () => {
      s = !1;
    };
  }, [e, t, r, n]), o;
}
const Pc = /* @__PURE__ */ x.forwardRef(function(t, r) {
  const n = yv({
    props: t,
    name: "MuiAvatar"
  }), {
    alt: o,
    children: i,
    className: s,
    component: c = "div",
    slots: l = {},
    slotProps: u = {},
    imgProps: f,
    sizes: p,
    src: d,
    srcSet: g,
    variant: y = "circular"
  } = n, m = pe(n, vv);
  let v = null;
  const O = Ov(E({}, f, {
    src: d,
    srcSet: g
  })), R = d || g, w = R && O !== "error", T = E({}, n, {
    colorDefault: !w,
    component: c,
    variant: y
  }), b = gv(T), [S, _] = om("img", {
    className: b.img,
    elementType: xv,
    externalForwardedProps: {
      slots: l,
      slotProps: {
        img: E({}, f, u.img)
      }
    },
    additionalProps: {
      alt: o,
      src: d,
      srcSet: g,
      sizes: p
    },
    ownerState: T
  });
  return w ? v = /* @__PURE__ */ P.jsx(S, E({}, _)) : i || i === 0 ? v = i : R && o ? v = o[0] : v = /* @__PURE__ */ P.jsx(Ev, {
    ownerState: T,
    className: b.fallback
  }), /* @__PURE__ */ P.jsx(bv, E({
    as: c,
    ownerState: T,
    className: fe(b.root, s),
    ref: r
  }, m, {
    children: v
  }));
});
process.env.NODE_ENV !== "production" && (Pc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Used in combination with `src` or `srcSet` to
   * provide an alt attribute for the rendered `img` element.
   */
  alt: a.string,
  /**
   * Used to render icon or text elements inside the Avatar if `src` is not set.
   * This can be an element, or just a string.
   */
  children: a.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: a.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes) applied to the `img` element if the component is used to display an image.
   * It can be used to listen for the loading error event.
   * @deprecated Use `slotProps.img` instead. This prop will be removed in v7. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   */
  imgProps: a.object,
  /**
   * The `sizes` attribute for the `img` element.
   */
  sizes: a.string,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: a.shape({
    img: a.oneOfType([a.func, a.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: a.shape({
    img: a.elementType
  }),
  /**
   * The `src` attribute for the `img` element.
   */
  src: a.string,
  /**
   * The `srcSet` attribute for the `img` element.
   * Use this attribute for responsive image display.
   */
  srcSet: a.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * The shape of the avatar.
   * @default 'circular'
   */
  variant: a.oneOfType([a.oneOf(["circular", "rounded", "square"]), a.string])
});
const Tv = Pc, wv = Fe("MuiBox", ["root"]), Cv = wv, Rv = ci(), $c = If({
  themeId: pr,
  defaultTheme: Rv,
  defaultClassName: Cv.root,
  generateClassName: ti.generate
});
process.env.NODE_ENV !== "production" && ($c.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: a.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: a.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object])
});
const gt = $c, Sv = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function Lo(e) {
  return `scale(${e}, ${e ** 2})`;
}
const _v = {
  entering: {
    opacity: 1,
    transform: Lo(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Oo = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), wi = /* @__PURE__ */ x.forwardRef(function(t, r) {
  const {
    addEndListener: n,
    appear: o = !0,
    children: i,
    easing: s,
    in: c,
    onEnter: l,
    onEntered: u,
    onEntering: f,
    onExit: p,
    onExited: d,
    onExiting: g,
    style: y,
    timeout: m = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: v = rc
  } = t, O = pe(t, Sv), R = Ut(), w = x.useRef(), T = Or(), b = x.useRef(null), S = Qe(b, i.ref, r), _ = (q) => (F) => {
    if (q) {
      const X = b.current;
      F === void 0 ? q(X) : q(X, F);
    }
  }, H = _(f), U = _((q, F) => {
    zd(q);
    const {
      duration: X,
      delay: te,
      easing: re
    } = An({
      style: y,
      timeout: m,
      easing: s
    }, {
      mode: "enter"
    });
    let C;
    m === "auto" ? (C = T.transitions.getAutoHeightDuration(q.clientHeight), w.current = C) : C = X, q.style.transition = [T.transitions.create("opacity", {
      duration: C,
      delay: te
    }), T.transitions.create("transform", {
      duration: Oo ? C : C * 0.666,
      delay: te,
      easing: re
    })].join(","), l && l(q, F);
  }), M = _(u), L = _(g), K = _((q) => {
    const {
      duration: F,
      delay: X,
      easing: te
    } = An({
      style: y,
      timeout: m,
      easing: s
    }, {
      mode: "exit"
    });
    let re;
    m === "auto" ? (re = T.transitions.getAutoHeightDuration(q.clientHeight), w.current = re) : re = F, q.style.transition = [T.transitions.create("opacity", {
      duration: re,
      delay: X
    }), T.transitions.create("transform", {
      duration: Oo ? re : re * 0.666,
      delay: Oo ? X : X || re * 0.333,
      easing: te
    })].join(","), q.style.opacity = 0, q.style.transform = Lo(0.75), p && p(q);
  }), V = _(d), G = (q) => {
    m === "auto" && R.start(w.current || 0, q), n && n(b.current, q);
  };
  return /* @__PURE__ */ P.jsx(v, E({
    appear: o,
    in: c,
    nodeRef: b,
    onEnter: U,
    onEntered: M,
    onEntering: H,
    onExit: K,
    onExited: V,
    onExiting: L,
    addEndListener: G,
    timeout: m === "auto" ? null : m
  }, O, {
    children: (q, F) => /* @__PURE__ */ x.cloneElement(i, E({
      style: E({
        opacity: 0,
        transform: Lo(0.75),
        visibility: q === "exited" && !c ? "hidden" : void 0
      }, _v[q], y, i.props.style),
      ref: S
    }, F))
  }));
});
process.env.NODE_ENV !== "production" && (wi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: a.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: a.bool,
  /**
   * A single child content element.
   */
  children: ks.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: a.oneOfType([a.shape({
    enter: a.string,
    exit: a.string
  }), a.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: a.bool,
  /**
   * @ignore
   */
  onEnter: a.func,
  /**
   * @ignore
   */
  onEntered: a.func,
  /**
   * @ignore
   */
  onEntering: a.func,
  /**
   * @ignore
   */
  onExit: a.func,
  /**
   * @ignore
   */
  onExited: a.func,
  /**
   * @ignore
   */
  onExiting: a.func,
  /**
   * @ignore
   */
  style: a.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: a.oneOfType([a.oneOf(["auto"]), a.number, a.shape({
    appear: a.number,
    enter: a.number,
    exit: a.number
  })])
});
wi.muiSupportAuto = !0;
const Ha = wi, Nc = /* @__PURE__ */ x.createContext({});
process.env.NODE_ENV !== "production" && (Nc.displayName = "ListContext");
const Yr = Nc;
function Pv(e) {
  return Ve("MuiList", e);
}
Fe("MuiList", ["root", "padding", "dense", "subheader"]);
const $v = ["children", "className", "component", "dense", "disablePadding", "subheader"], Nv = (e) => {
  const {
    classes: t,
    disablePadding: r,
    dense: n,
    subheader: o
  } = e;
  return He({
    root: ["root", !r && "padding", n && "dense", o && "subheader"]
  }, Pv, t);
}, jv = Ee("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, !r.disablePadding && t.padding, r.dense && t.dense, r.subheader && t.subheader];
  }
})(({
  ownerState: e
}) => E({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative"
}, !e.disablePadding && {
  paddingTop: 8,
  paddingBottom: 8
}, e.subheader && {
  paddingTop: 0
})), jc = /* @__PURE__ */ x.forwardRef(function(t, r) {
  const n = ze({
    props: t,
    name: "MuiList"
  }), {
    children: o,
    className: i,
    component: s = "ul",
    dense: c = !1,
    disablePadding: l = !1,
    subheader: u
  } = n, f = pe(n, $v), p = x.useMemo(() => ({
    dense: c
  }), [c]), d = E({}, n, {
    component: s,
    dense: c,
    disablePadding: l
  }), g = Nv(d);
  return /* @__PURE__ */ P.jsx(Yr.Provider, {
    value: p,
    children: /* @__PURE__ */ P.jsxs(jv, E({
      as: s,
      className: fe(g.root, i),
      ref: r,
      ownerState: d
    }, f, {
      children: [u, o]
    }))
  });
});
process.env.NODE_ENV !== "production" && (jc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: a.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: a.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: a.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: a.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: a.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object])
});
const kc = jc;
function kv(e) {
  return Ve("MuiListItemButton", e);
}
const Iv = Fe("MuiListItemButton", ["root", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "selected"]), jr = Iv, Mv = ["alignItems", "autoFocus", "component", "children", "dense", "disableGutters", "divider", "focusVisibleClassName", "selected", "className"], Av = (e, t) => {
  const {
    ownerState: r
  } = e;
  return [t.root, r.dense && t.dense, r.alignItems === "flex-start" && t.alignItemsFlexStart, r.divider && t.divider, !r.disableGutters && t.gutters];
}, Dv = (e) => {
  const {
    alignItems: t,
    classes: r,
    dense: n,
    disabled: o,
    disableGutters: i,
    divider: s,
    selected: c
  } = e, u = He({
    root: ["root", n && "dense", !i && "gutters", s && "divider", o && "disabled", t === "flex-start" && "alignItemsFlexStart", c && "selected"]
  }, kv, r);
  return E({}, r, u);
}, Lv = Ee(Dn, {
  shouldForwardProp: (e) => Qs(e) || e === "classes",
  name: "MuiListItemButton",
  slot: "Root",
  overridesResolver: Av
})(({
  theme: e,
  ownerState: t
}) => E({
  display: "flex",
  flexGrow: 1,
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  minWidth: 0,
  boxSizing: "border-box",
  textAlign: "left",
  paddingTop: 8,
  paddingBottom: 8,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  }),
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (e.vars || e).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${jr.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Ne(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${jr.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Ne(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${jr.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Ne(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Ne(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  },
  [`&.${jr.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${jr.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  }
}, t.divider && {
  borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
  backgroundClip: "padding-box"
}, t.alignItems === "flex-start" && {
  alignItems: "flex-start"
}, !t.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, t.dense && {
  paddingTop: 4,
  paddingBottom: 4
})), Ic = /* @__PURE__ */ x.forwardRef(function(t, r) {
  const n = ze({
    props: t,
    name: "MuiListItemButton"
  }), {
    alignItems: o = "center",
    autoFocus: i = !1,
    component: s = "div",
    children: c,
    dense: l = !1,
    disableGutters: u = !1,
    divider: f = !1,
    focusVisibleClassName: p,
    selected: d = !1,
    className: g
  } = n, y = pe(n, Mv), m = x.useContext(Yr), v = x.useMemo(() => ({
    dense: l || m.dense || !1,
    alignItems: o,
    disableGutters: u
  }), [o, m.dense, l, u]), O = x.useRef(null);
  Ht(() => {
    i && (O.current ? O.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a ListItemButton whose component has not been rendered."));
  }, [i]);
  const R = E({}, n, {
    alignItems: o,
    dense: v.dense,
    disableGutters: u,
    divider: f,
    selected: d
  }), w = Dv(R), T = Qe(O, r);
  return /* @__PURE__ */ P.jsx(Yr.Provider, {
    value: v,
    children: /* @__PURE__ */ P.jsx(Lv, E({
      ref: T,
      href: y.href || y.to,
      component: (y.href || y.to) && s === "div" ? "button" : s,
      focusVisibleClassName: fe(w.focusVisible, p),
      ownerState: R,
      className: fe(w.root, g)
    }, y, {
      classes: w,
      children: c
    }))
  });
});
process.env.NODE_ENV !== "production" && (Ic.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Defines the `align-items` style property.
   * @default 'center'
   */
  alignItems: a.oneOf(["center", "flex-start"]),
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus: a.bool,
  /**
   * The content of the component if a `ListItemSecondaryAction` is used it must
   * be the last child.
   */
  children: a.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: a.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent List component.
   * @default false
   */
  dense: a.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: a.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: a.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the list item.
   * @default false
   */
  divider: a.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: a.string,
  /**
   * @ignore
   */
  href: a.string,
  /**
   * Use to apply selected styling.
   * @default false
   */
  selected: a.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object])
});
const Mc = Ic;
function Vv(e) {
  return Ve("MuiListItemIcon", e);
}
Fe("MuiListItemIcon", ["root", "alignItemsFlexStart"]);
const Fv = ["className"], zv = (e) => {
  const {
    alignItems: t,
    classes: r
  } = e;
  return He({
    root: ["root", t === "flex-start" && "alignItemsFlexStart"]
  }, Vv, r);
}, Bv = Ee("div", {
  name: "MuiListItemIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.alignItems === "flex-start" && t.alignItemsFlexStart];
  }
})(({
  theme: e,
  ownerState: t
}) => E({
  minWidth: 56,
  color: (e.vars || e).palette.action.active,
  flexShrink: 0,
  display: "inline-flex"
}, t.alignItems === "flex-start" && {
  marginTop: 8
})), Ac = /* @__PURE__ */ x.forwardRef(function(t, r) {
  const n = ze({
    props: t,
    name: "MuiListItemIcon"
  }), {
    className: o
  } = n, i = pe(n, Fv), s = x.useContext(Yr), c = E({}, n, {
    alignItems: s.alignItems
  }), l = zv(c);
  return /* @__PURE__ */ P.jsx(Bv, E({
    className: fe(l.root, o),
    ownerState: c,
    ref: r
  }, i));
});
process.env.NODE_ENV !== "production" && (Ac.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally `Icon`, `SvgIcon`,
   * or a `@mui/icons-material` SVG icon element.
   */
  children: a.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object])
});
const Vo = Ac;
function Wv(e) {
  return Ve("MuiListItemText", e);
}
const Uv = Fe("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), Ga = Uv, qv = ["children", "className", "disableTypography", "inset", "primary", "primaryTypographyProps", "secondary", "secondaryTypographyProps"], Yv = (e) => {
  const {
    classes: t,
    inset: r,
    primary: n,
    secondary: o,
    dense: i
  } = e;
  return He({
    root: ["root", r && "inset", i && "dense", n && o && "multiline"],
    primary: ["primary"],
    secondary: ["secondary"]
  }, Wv, t);
}, Hv = Ee("div", {
  name: "MuiListItemText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [{
      [`& .${Ga.primary}`]: t.primary
    }, {
      [`& .${Ga.secondary}`]: t.secondary
    }, t.root, r.inset && t.inset, r.primary && r.secondary && t.multiline, r.dense && t.dense];
  }
})(({
  ownerState: e
}) => E({
  flex: "1 1 auto",
  minWidth: 0,
  marginTop: 4,
  marginBottom: 4
}, e.primary && e.secondary && {
  marginTop: 6,
  marginBottom: 6
}, e.inset && {
  paddingLeft: 56
})), Dc = /* @__PURE__ */ x.forwardRef(function(t, r) {
  const n = ze({
    props: t,
    name: "MuiListItemText"
  }), {
    children: o,
    className: i,
    disableTypography: s = !1,
    inset: c = !1,
    primary: l,
    primaryTypographyProps: u,
    secondary: f,
    secondaryTypographyProps: p
  } = n, d = pe(n, qv), {
    dense: g
  } = x.useContext(Yr);
  let y = l ?? o, m = f;
  const v = E({}, n, {
    disableTypography: s,
    inset: c,
    primary: !!y,
    secondary: !!m,
    dense: g
  }), O = Yv(v);
  return y != null && y.type !== Ct && !s && (y = /* @__PURE__ */ P.jsx(Ct, E({
    variant: g ? "body2" : "body1",
    className: O.primary,
    component: u != null && u.variant ? void 0 : "span",
    display: "block"
  }, u, {
    children: y
  }))), m != null && m.type !== Ct && !s && (m = /* @__PURE__ */ P.jsx(Ct, E({
    variant: "body2",
    className: O.secondary,
    color: "text.secondary",
    display: "block"
  }, p, {
    children: m
  }))), /* @__PURE__ */ P.jsxs(Hv, E({
    className: fe(O.root, i),
    ownerState: v,
    ref: r
  }, d, {
    children: [y, m]
  }));
});
process.env.NODE_ENV !== "production" && (Dc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Alias for the `primary` prop.
   */
  children: a.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * If `true`, the children won't be wrapped by a Typography component.
   * This can be useful to render an alternative Typography variant by wrapping
   * the `children` (or `primary`) text, and optional `secondary` text
   * with the Typography component.
   * @default false
   */
  disableTypography: a.bool,
  /**
   * If `true`, the children are indented.
   * This should be used if there is no left avatar or left icon.
   * @default false
   */
  inset: a.bool,
  /**
   * The main content element.
   */
  primary: a.node,
  /**
   * These props will be forwarded to the primary typography component
   * (as long as disableTypography is not `true`).
   */
  primaryTypographyProps: a.object,
  /**
   * The secondary content element.
   */
  secondary: a.node,
  /**
   * These props will be forwarded to the secondary typography component
   * (as long as disableTypography is not `true`).
   */
  secondaryTypographyProps: a.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object])
});
const Ci = Dc;
function Gv(e) {
  return Ve("MuiTooltip", e);
}
const Kv = Fe("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]), kt = Kv, Xv = ["arrow", "children", "classes", "components", "componentsProps", "describeChild", "disableFocusListener", "disableHoverListener", "disableInteractive", "disableTouchListener", "enterDelay", "enterNextDelay", "enterTouchDelay", "followCursor", "id", "leaveDelay", "leaveTouchDelay", "onClose", "onOpen", "open", "placement", "PopperComponent", "PopperProps", "slotProps", "slots", "title", "TransitionComponent", "TransitionProps"];
function Jv(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Zv = (e) => {
  const {
    classes: t,
    disableInteractive: r,
    arrow: n,
    touch: o,
    placement: i
  } = e, s = {
    popper: ["popper", !r && "popperInteractive", n && "popperArrow"],
    tooltip: ["tooltip", n && "tooltipArrow", o && "touch", `tooltipPlacement${oe(i.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return He(s, Gv, t);
}, Qv = Ee(Sc, {
  name: "MuiTooltip",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.popper, !r.disableInteractive && t.popperInteractive, r.arrow && t.popperArrow, !r.open && t.popperClose];
  }
})(({
  theme: e,
  ownerState: t,
  open: r
}) => E({
  zIndex: (e.vars || e).zIndex.tooltip,
  pointerEvents: "none"
}, !t.disableInteractive && {
  pointerEvents: "auto"
}, !r && {
  pointerEvents: "none"
}, t.arrow && {
  [`&[data-popper-placement*="bottom"] .${kt.arrow}`]: {
    top: 0,
    marginTop: "-0.71em",
    "&::before": {
      transformOrigin: "0 100%"
    }
  },
  [`&[data-popper-placement*="top"] .${kt.arrow}`]: {
    bottom: 0,
    marginBottom: "-0.71em",
    "&::before": {
      transformOrigin: "100% 0"
    }
  },
  [`&[data-popper-placement*="right"] .${kt.arrow}`]: E({}, t.isRtl ? {
    right: 0,
    marginRight: "-0.71em"
  } : {
    left: 0,
    marginLeft: "-0.71em"
  }, {
    height: "1em",
    width: "0.71em",
    "&::before": {
      transformOrigin: "100% 100%"
    }
  }),
  [`&[data-popper-placement*="left"] .${kt.arrow}`]: E({}, t.isRtl ? {
    left: 0,
    marginLeft: "-0.71em"
  } : {
    right: 0,
    marginRight: "-0.71em"
  }, {
    height: "1em",
    width: "0.71em",
    "&::before": {
      transformOrigin: "0 0"
    }
  })
})), ey = Ee("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.tooltip, r.touch && t.touch, r.arrow && t.tooltipArrow, t[`tooltipPlacement${oe(r.placement.split("-")[0])}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => E({
  backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : Ne(e.palette.grey[700], 0.92),
  borderRadius: (e.vars || e).shape.borderRadius,
  color: (e.vars || e).palette.common.white,
  fontFamily: e.typography.fontFamily,
  padding: "4px 8px",
  fontSize: e.typography.pxToRem(11),
  maxWidth: 300,
  margin: 2,
  wordWrap: "break-word",
  fontWeight: e.typography.fontWeightMedium
}, t.arrow && {
  position: "relative",
  margin: 0
}, t.touch && {
  padding: "8px 16px",
  fontSize: e.typography.pxToRem(14),
  lineHeight: `${Jv(16 / 14)}em`,
  fontWeight: e.typography.fontWeightRegular
}, {
  [`.${kt.popper}[data-popper-placement*="left"] &`]: E({
    transformOrigin: "right center"
  }, t.isRtl ? E({
    marginLeft: "14px"
  }, t.touch && {
    marginLeft: "24px"
  }) : E({
    marginRight: "14px"
  }, t.touch && {
    marginRight: "24px"
  })),
  [`.${kt.popper}[data-popper-placement*="right"] &`]: E({
    transformOrigin: "left center"
  }, t.isRtl ? E({
    marginRight: "14px"
  }, t.touch && {
    marginRight: "24px"
  }) : E({
    marginLeft: "14px"
  }, t.touch && {
    marginLeft: "24px"
  })),
  [`.${kt.popper}[data-popper-placement*="top"] &`]: E({
    transformOrigin: "center bottom",
    marginBottom: "14px"
  }, t.touch && {
    marginBottom: "24px"
  }),
  [`.${kt.popper}[data-popper-placement*="bottom"] &`]: E({
    transformOrigin: "center top",
    marginTop: "14px"
  }, t.touch && {
    marginTop: "24px"
  })
})), ty = Ee("span", {
  name: "MuiTooltip",
  slot: "Arrow",
  overridesResolver: (e, t) => t.arrow
})(({
  theme: e
}) => ({
  overflow: "hidden",
  position: "absolute",
  width: "1em",
  height: "0.71em",
  boxSizing: "border-box",
  color: e.vars ? e.vars.palette.Tooltip.bg : Ne(e.palette.grey[700], 0.9),
  "&::before": {
    content: '""',
    margin: "auto",
    display: "block",
    width: "100%",
    height: "100%",
    backgroundColor: "currentColor",
    transform: "rotate(45deg)"
  }
}));
let vn = !1;
const Ka = new Qr();
let kr = {
  x: 0,
  y: 0
};
function yn(e, t) {
  return (r, ...n) => {
    t && t(r, ...n), e(r, ...n);
  };
}
const Lc = /* @__PURE__ */ x.forwardRef(function(t, r) {
  var n, o, i, s, c, l, u, f, p, d, g, y, m, v, O, R, w, T, b;
  const S = ze({
    props: t,
    name: "MuiTooltip"
  }), {
    arrow: _ = !1,
    children: H,
    components: U = {},
    componentsProps: M = {},
    describeChild: L = !1,
    disableFocusListener: K = !1,
    disableHoverListener: V = !1,
    disableInteractive: G = !1,
    disableTouchListener: q = !1,
    enterDelay: F = 100,
    enterNextDelay: X = 0,
    enterTouchDelay: te = 700,
    followCursor: re = !1,
    id: C,
    leaveDelay: k = 0,
    leaveTouchDelay: ee = 1500,
    onClose: Z,
    onOpen: z,
    open: J,
    placement: N = "bottom",
    PopperComponent: D,
    PopperProps: A = {},
    slotProps: W = {},
    slots: Q = {},
    title: se,
    TransitionComponent: j = Ha,
    TransitionProps: Re
  } = S, B = pe(S, Xv), Oe = /* @__PURE__ */ x.isValidElement(H) ? H : /* @__PURE__ */ P.jsx("span", {
    children: H
  }), je = Or(), tt = vp(), [$e, dt] = x.useState(), [ke, rt] = x.useState(null), Ge = x.useRef(!1), ht = G || re, Ke = Ut(), De = Ut(), nt = Ut(), Be = Ut(), [$t, ie] = Ds({
    controlled: J,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let Le = $t;
  if (process.env.NODE_ENV !== "production") {
    const {
      current: Y
    } = x.useRef(J !== void 0);
    x.useEffect(() => {
      $e && $e.disabled && !Y && se !== "" && $e.tagName.toLowerCase() === "button" && console.error(["MUI: You are providing a disabled `button` child to the Tooltip component.", "A disabled element does not fire events.", "Tooltip needs to listen to the child element's events to display the title.", "", "Add a simple wrapper element, such as a `span`."].join(`
`));
    }, [se, $e, Y]);
  }
  const Tt = Ms(C), vt = x.useRef(), Dt = Wt(() => {
    vt.current !== void 0 && (document.body.style.WebkitUserSelect = vt.current, vt.current = void 0), Be.clear();
  });
  x.useEffect(() => Dt, [Dt]);
  const on = (Y) => {
    Ka.clear(), vn = !0, ie(!0), z && !Le && z(Y);
  }, Kt = Wt(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (Y) => {
      Ka.start(800 + k, () => {
        vn = !1;
      }), ie(!1), Z && Le && Z(Y), Ke.start(je.transitions.duration.shortest, () => {
        Ge.current = !1;
      });
    }
  ), Xt = (Y) => {
    Ge.current && Y.type !== "touchstart" || ($e && $e.removeAttribute("title"), De.clear(), nt.clear(), F || vn && X ? De.start(vn ? X : F, () => {
      on(Y);
    }) : on(Y));
  }, wr = (Y) => {
    De.clear(), nt.start(k, () => {
      Kt(Y);
    });
  }, {
    isFocusVisibleRef: an,
    onBlur: Cr,
    onFocus: sn,
    ref: Nt
  } = oi(), [, Jt] = x.useState(!1), Zt = (Y) => {
    Cr(Y), an.current === !1 && (Jt(!1), wr(Y));
  }, Rr = (Y) => {
    $e || dt(Y.currentTarget), sn(Y), an.current === !0 && (Jt(!0), Xt(Y));
  }, cn = (Y) => {
    Ge.current = !0;
    const ue = Oe.props;
    ue.onTouchStart && ue.onTouchStart(Y);
  }, ln = (Y) => {
    cn(Y), nt.clear(), Ke.clear(), Dt(), vt.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", Be.start(te, () => {
      document.body.style.WebkitUserSelect = vt.current, Xt(Y);
    });
  }, so = (Y) => {
    Oe.props.onTouchEnd && Oe.props.onTouchEnd(Y), Dt(), nt.start(ee, () => {
      Kt(Y);
    });
  };
  x.useEffect(() => {
    if (!Le)
      return;
    function Y(ue) {
      (ue.key === "Escape" || ue.key === "Esc") && Kt(ue);
    }
    return document.addEventListener("keydown", Y), () => {
      document.removeEventListener("keydown", Y);
    };
  }, [Kt, Le]);
  const un = Qe(Oe.ref, Nt, dt, r);
  !se && se !== 0 && (Le = !1);
  const Qt = x.useRef(), co = (Y) => {
    const ue = Oe.props;
    ue.onMouseMove && ue.onMouseMove(Y), kr = {
      x: Y.clientX,
      y: Y.clientY
    }, Qt.current && Qt.current.update();
  }, Lt = {}, er = typeof se == "string";
  L ? (Lt.title = !Le && er && !V ? se : null, Lt["aria-describedby"] = Le ? Tt : null) : (Lt["aria-label"] = er ? se : null, Lt["aria-labelledby"] = Le && !er ? Tt : null);
  const We = E({}, Lt, B, Oe.props, {
    className: fe(B.className, Oe.props.className),
    onTouchStart: cn,
    ref: un
  }, re ? {
    onMouseMove: co
  } : {});
  process.env.NODE_ENV !== "production" && (We["data-mui-internal-clone-element"] = !0, x.useEffect(() => {
    $e && !$e.getAttribute("data-mui-internal-clone-element") && console.error(["MUI: The `children` component of the Tooltip is not forwarding its props correctly.", "Please make sure that props are spread on the same element that the ref is applied to."].join(`
`));
  }, [$e]));
  const Vt = {};
  q || (We.onTouchStart = ln, We.onTouchEnd = so), V || (We.onMouseOver = yn(Xt, We.onMouseOver), We.onMouseLeave = yn(wr, We.onMouseLeave), ht || (Vt.onMouseOver = Xt, Vt.onMouseLeave = wr)), K || (We.onFocus = yn(Rr, We.onFocus), We.onBlur = yn(Zt, We.onBlur), ht || (Vt.onFocus = Rr, Vt.onBlur = Zt)), process.env.NODE_ENV !== "production" && Oe.props.title && console.error(["MUI: You have provided a `title` prop to the child of <Tooltip />.", `Remove this title prop \`${Oe.props.title}\` or the Tooltip component.`].join(`
`));
  const lo = x.useMemo(() => {
    var Y;
    let ue = [{
      name: "arrow",
      enabled: !!ke,
      options: {
        element: ke,
        padding: 4
      }
    }];
    return (Y = A.popperOptions) != null && Y.modifiers && (ue = ue.concat(A.popperOptions.modifiers)), E({}, A.popperOptions, {
      modifiers: ue
    });
  }, [ke, A]), Ft = E({}, S, {
    isRtl: tt,
    arrow: _,
    disableInteractive: ht,
    placement: N,
    PopperComponentProp: D,
    touch: Ge.current
  }), h = Zv(Ft), $ = (n = (o = Q.popper) != null ? o : U.Popper) != null ? n : Qv, I = (i = (s = (c = Q.transition) != null ? c : U.Transition) != null ? s : j) != null ? i : Ha, ne = (l = (u = Q.tooltip) != null ? u : U.Tooltip) != null ? l : ey, le = (f = (p = Q.arrow) != null ? p : U.Arrow) != null ? f : ty, xe = lr($, E({}, A, (d = W.popper) != null ? d : M.popper, {
    className: fe(h.popper, A == null ? void 0 : A.className, (g = (y = W.popper) != null ? y : M.popper) == null ? void 0 : g.className)
  }), Ft), ce = lr(I, E({}, Re, (m = W.transition) != null ? m : M.transition), Ft), ae = lr(ne, E({}, (v = W.tooltip) != null ? v : M.tooltip, {
    className: fe(h.tooltip, (O = (R = W.tooltip) != null ? R : M.tooltip) == null ? void 0 : O.className)
  }), Ft), Ie = lr(le, E({}, (w = W.arrow) != null ? w : M.arrow, {
    className: fe(h.arrow, (T = (b = W.arrow) != null ? b : M.arrow) == null ? void 0 : T.className)
  }), Ft);
  return /* @__PURE__ */ P.jsxs(x.Fragment, {
    children: [/* @__PURE__ */ x.cloneElement(Oe, We), /* @__PURE__ */ P.jsx($, E({
      as: D ?? Sc,
      placement: N,
      anchorEl: re ? {
        getBoundingClientRect: () => ({
          top: kr.y,
          left: kr.x,
          right: kr.x,
          bottom: kr.y,
          width: 0,
          height: 0
        })
      } : $e,
      popperRef: Qt,
      open: $e ? Le : !1,
      id: Tt,
      transition: !0
    }, Vt, xe, {
      popperOptions: lo,
      children: ({
        TransitionProps: Y
      }) => /* @__PURE__ */ P.jsx(I, E({
        timeout: je.transitions.duration.shorter
      }, Y, ce, {
        children: /* @__PURE__ */ P.jsxs(ne, E({}, ae, {
          children: [se, _ ? /* @__PURE__ */ P.jsx(le, E({}, Ie, {
            ref: rt
          })) : null]
        }))
      }))
    }))]
  });
});
process.env.NODE_ENV !== "production" && (Lc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, adds an arrow to the tooltip.
   * @default false
   */
  arrow: a.bool,
  /**
   * Tooltip reference element.
   */
  children: ks.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: a.shape({
    Arrow: a.elementType,
    Popper: a.elementType,
    Tooltip: a.elementType,
    Transition: a.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: a.shape({
    arrow: a.object,
    popper: a.object,
    tooltip: a.object,
    transition: a.object
  }),
  /**
   * Set to `true` if the `title` acts as an accessible description.
   * By default the `title` acts as an accessible label for the child.
   * @default false
   */
  describeChild: a.bool,
  /**
   * Do not respond to focus-visible events.
   * @default false
   */
  disableFocusListener: a.bool,
  /**
   * Do not respond to hover events.
   * @default false
   */
  disableHoverListener: a.bool,
  /**
   * Makes a tooltip not interactive, i.e. it will close when the user
   * hovers over the tooltip before the `leaveDelay` is expired.
   * @default false
   */
  disableInteractive: a.bool,
  /**
   * Do not respond to long press touch events.
   * @default false
   */
  disableTouchListener: a.bool,
  /**
   * The number of milliseconds to wait before showing the tooltip.
   * This prop won't impact the enter touch delay (`enterTouchDelay`).
   * @default 100
   */
  enterDelay: a.number,
  /**
   * The number of milliseconds to wait before showing the tooltip when one was already recently opened.
   * @default 0
   */
  enterNextDelay: a.number,
  /**
   * The number of milliseconds a user must touch the element before showing the tooltip.
   * @default 700
   */
  enterTouchDelay: a.number,
  /**
   * If `true`, the tooltip follow the cursor over the wrapped element.
   * @default false
   */
  followCursor: a.bool,
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide this prop. It falls back to a randomly generated id.
   */
  id: a.string,
  /**
   * The number of milliseconds to wait before hiding the tooltip.
   * This prop won't impact the leave touch delay (`leaveTouchDelay`).
   * @default 0
   */
  leaveDelay: a.number,
  /**
   * The number of milliseconds after the user stops touching an element before hiding the tooltip.
   * @default 1500
   */
  leaveTouchDelay: a.number,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onClose: a.func,
  /**
   * Callback fired when the component requests to be open.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onOpen: a.func,
  /**
   * If `true`, the component is shown.
   */
  open: a.bool,
  /**
   * Tooltip placement.
   * @default 'bottom'
   */
  placement: a.oneOf(["bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * The component used for the popper.
   * @default Popper
   */
  PopperComponent: a.elementType,
  /**
   * Props applied to the [`Popper`](/material-ui/api/popper/) element.
   * @default {}
   */
  PopperProps: a.object,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: a.shape({
    arrow: a.object,
    popper: a.object,
    tooltip: a.object,
    transition: a.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: a.shape({
    arrow: a.elementType,
    popper: a.elementType,
    tooltip: a.elementType,
    transition: a.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * Tooltip title. Zero-length titles string, undefined, null and false are never displayed.
   */
  title: a.node,
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Grow
   */
  TransitionComponent: a.elementType,
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   */
  TransitionProps: a.object
});
const ry = Lc;
var Ri = {}, To = {};
const ny = /* @__PURE__ */ _t($d);
var Xa;
function ao() {
  return Xa || (Xa = 1, function(e) {
    "use client";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "default", {
      enumerable: !0,
      get: function() {
        return t.createSvgIcon;
      }
    });
    var t = ny;
  }(To)), To;
}
var oy = xr;
Object.defineProperty(Ri, "__esModule", {
  value: !0
});
var Vc = Ri.default = void 0, iy = oy(ao()), ay = P;
Vc = Ri.default = (0, iy.default)(/* @__PURE__ */ (0, ay.jsx)("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-12.5c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5m0 5.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"
}), "AlbumOutlined");
const sy = Je.forwardRef(
  ({
    userName: e = "",
    designation: t = "",
    userimg: r = "",
    isCollapse: n = !1
  }, o) => {
    const i = Or();
    return /* @__PURE__ */ P.jsx(gt, { children: n ? "" : /* @__PURE__ */ P.jsxs(
      gt,
      {
        display: "flex",
        alignItems: "center",
        gap: 2,
        sx: { m: 3, p: 2, borderRadius: "8px", bgcolor: i.palette.secondary.main + 20 },
        children: [
          /* @__PURE__ */ P.jsx(Tv, { alt: "Remy Sharp", src: r }),
          /* @__PURE__ */ P.jsxs(gt, { children: [
            /* @__PURE__ */ P.jsx(Ct, { variant: "h6", children: e }),
            /* @__PURE__ */ P.jsx(Ct, { variant: "caption", color: "textSecondary", children: t })
          ] }),
          /* @__PURE__ */ P.jsx(gt, { sx: { ml: "auto" }, children: /* @__PURE__ */ P.jsx(ry, { title: "Logout", placement: "top", children: /* @__PURE__ */ P.jsx(
            Tm,
            {
              color: "primary",
              to: "/",
              "aria-label": "logout",
              size: "small",
              children: /* @__PURE__ */ P.jsx(Vc, {})
            }
          ) }) })
        ]
      }
    ) });
  }
), nn = x.createContext({
  width: "270px",
  collapsewidth: "80px",
  textColor: "#8D939D",
  isCollapse: !1,
  themeColor: "#5d87ff"
}), by = x.forwardRef(
  ({
    children: e,
    width: t = "260px",
    collapsewidth: r = "80px",
    textColor: n = "#2b2b2b",
    isCollapse: o = !1,
    themeColor: i = "#5d87ff",
    themeSecondaryColor: s = "#49beff",
    mode: c = "light",
    direction: l = "ltr",
    userName: u = "Mathew",
    designation: f = "Designer",
    showProfile: p = !0,
    userimg: d = "https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-1.jpg"
  }, g) => {
    const [y, m] = x.useState(!1), v = o && !y ? r : t;
    Or();
    const O = ci({
      direction: l,
      palette: {
        mode: c,
        primary: {
          main: i
        },
        secondary: {
          main: s,
          contrastText: "#fff"
        }
      }
    });
    return c === "dark" && (n = "rgba(255,255,255, 0.9)"), /* @__PURE__ */ P.jsx(ec, { theme: O, children: /* @__PURE__ */ P.jsx(
      gt,
      {
        dir: l,
        sx: {
          width: v,
          flexShrink: 0,
          fontFamily: "inherit",
          color: n
        },
        children: /* @__PURE__ */ P.jsxs(
          gt,
          {
            sx: {
              width: v
            },
            children: [
              /* @__PURE__ */ P.jsx(nn.Provider, { value: { textColor: n, isCollapse: o, width: t, collapsewidth: r, themeColor: i }, children: e }),
              p ? /* @__PURE__ */ P.jsx(sy, { userName: u, designation: f, userimg: d, isCollapse: o }) : ""
            ]
          }
        )
      }
    ) });
  }
), xy = x.forwardRef(({
  children: e,
  subHeading: t = "menu"
}, r) => {
  const n = x.useContext(nn);
  return /* @__PURE__ */ P.jsx(gt, { sx: { px: n.isCollapse ? 2 : 3, pt: 2 }, children: /* @__PURE__ */ P.jsx(
    kc,
    {
      ref: r,
      component: "nav",
      subheader: /* @__PURE__ */ P.jsx(iv, { component: "div", sx: { paddingY: "3px", color: n.textColor, paddingX: "0px", lineHeight: "20px", fontWeight: "bold", fontSize: "12px" }, children: n.isCollapse ? "..." : t }),
      children: e
    }
  ) });
});
var Si = {}, cy = xr;
Object.defineProperty(Si, "__esModule", {
  value: !0
});
var Fc = Si.default = void 0, ly = cy(ao()), uy = P;
Fc = Si.default = (0, ly.default)(/* @__PURE__ */ (0, uy.jsx)("path", {
  d: "m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
}), "ExpandLess");
var _i = {}, fy = xr;
Object.defineProperty(_i, "__esModule", {
  value: !0
});
var zc = _i.default = void 0, py = fy(ao()), dy = P;
zc = _i.default = (0, py.default)(/* @__PURE__ */ (0, dy.jsx)("path", {
  d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
}), "ExpandMore");
var Pi = {}, my = xr;
Object.defineProperty(Pi, "__esModule", {
  value: !0
});
var $i = Pi.default = void 0, hy = my(ao()), vy = P;
$i = Pi.default = (0, hy.default)(/* @__PURE__ */ (0, vy.jsx)("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
}), "CircleOutlined");
const Ey = x.forwardRef(
  ({
    children: e,
    title: t = "",
    icon: r,
    borderRadius: n = "8px",
    textFontSize: o = "14px",
    disabled: i = !1
  }, s) => {
    const c = x.useContext(nn), [l, u] = x.useState(!1), f = () => {
      u(!l);
    }, p = Ee(Mc)(() => ({
      whiteSpace: "nowrap",
      marginBottom: "2px",
      padding: "10px 12px",
      borderRadius: n,
      color: l ? "#fff" : c.textColor,
      cursor: i ? "default" : "pointer",
      opacity: i ? "0.6" : "1",
      backgroundColor: l ? c.themeColor : "",
      ".MuiListItemIcon-root": {
        color: l ? "#fff" : c.textColor
      },
      "&:hover": {
        backgroundColor: l ? c.themeColor : c.themeColor + 20,
        color: l ? "#fff" : c.themeColor,
        ".MuiListItemIcon-root": {
          color: l ? "#fff" : c.themeColor
        }
      }
    })), d = Ee(Vo)(() => ({
      display: "flex",
      gap: "10px",
      marginBottom: "0px",
      padding: "0px",
      minWidth: "30px",
      cursor: "pointer",
      color: "inherit"
    }));
    return /* @__PURE__ */ P.jsxs(gt, { children: [
      /* @__PURE__ */ P.jsxs(
        p,
        {
          onClick: f,
          sx: { display: "flex", gap: "15px" },
          children: [
            /* @__PURE__ */ P.jsx(d, { style: { minWidth: "0px" }, children: r || /* @__PURE__ */ P.jsx($i, {}) }),
            c.isCollapse ? "" : /* @__PURE__ */ P.jsxs(P.Fragment, { children: [
              /* @__PURE__ */ P.jsx(Ci, { sx: { my: 0 }, children: /* @__PURE__ */ P.jsx(
                Ct,
                {
                  fontSize: o,
                  sx: { lineHeight: "1" },
                  variant: "caption",
                  children: t
                }
              ) }),
              l ? /* @__PURE__ */ P.jsx(Fc, {}) : /* @__PURE__ */ P.jsx(zc, {})
            ] })
          ]
        }
      ),
      /* @__PURE__ */ P.jsx(Gd, { in: l, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ P.jsx(kc, { component: "div", disablePadding: !0, children: e }) })
    ] });
  }
), Oy = x.forwardRef(
  ({
    children: e,
    icon: t,
    link: r = "#",
    badge: n = !1,
    badgeColor: o = "secondary",
    badgeContent: i = "6",
    textFontSize: s = "14px",
    borderRadius: c = "8px",
    disabled: l = !1,
    badgeType: u = "filled",
    target: f = ""
  }, p) => {
    const d = x.useContext(nn), g = Or(), y = Ee(Mc)(() => ({
      whiteSpace: "nowrap",
      marginBottom: "2px",
      padding: "10px 12px",
      textAlign: g.direction === "ltr" ? "left" : "right",
      borderRadius: c,
      color: d.textColor,
      cursor: l ? "default" : "pointer",
      opacity: l ? "0.6" : "1",
      ".MuiListItemIcon-root": {
        color: d.textColor
      },
      "&:hover": {
        backgroundColor: l ? "#fff" : d.themeColor + 20,
        color: d.themeColor,
        ".MuiListItemIcon-root": {
          color: d.themeColor
        }
      },
      "&.Mui-selected": {
        color: "white",
        backgroundColor: d.themeColor,
        "&:hover": {
          backgroundColor: d.themeColor,
          color: "white"
        },
        ".MuiListItemIcon-root": {
          color: "#fff"
        }
      }
    }));
    return Ee(Vo)(() => ({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      marginBottom: "0px",
      padding: "0px 0px",
      cursor: "pointer",
      marginLeft: "-10px",
      color: open ? "inherit" : "#fff"
    })), /* @__PURE__ */ P.jsx(gt, { children: /* @__PURE__ */ P.jsxs(y, { href: r, sx: { display: "flex", gap: "15px" }, target: f, selected: r == "/", children: [
      /* @__PURE__ */ P.jsx(
        Vo,
        {
          sx: {
            minWidth: "0px"
          },
          children: t || /* @__PURE__ */ P.jsx($i, {})
        }
      ),
      d.isCollapse ? "" : /* @__PURE__ */ P.jsxs(P.Fragment, { children: [
        /* @__PURE__ */ P.jsx(Ci, { sx: { my: 0 }, children: /* @__PURE__ */ P.jsx(
          Ct,
          {
            fontSize: s,
            sx: { lineHeight: "1" },
            variant: "caption",
            children: e
          }
        ) }),
        n ? /* @__PURE__ */ P.jsx(dv, { label: i, color: o, variant: u, size: "small" }) : ""
      ] })
    ] }) });
  }
), Ty = x.forwardRef(({
  children: e,
  img: t = "https://adminmart.com/wp-content/uploads/2024/03/logo-admin-mart-news.png"
}, r) => {
  const n = x.useContext(nn), o = Ee(Ci)(() => ({
    whiteSpace: "nowrap",
    overflow: n.isCollapse ? "hidden" : "visible",
    WebkitLineClamp: "1",
    fontSize: "2rem",
    padding: "15px 22px",
    textOverflow: "ellipsis"
  }));
  return /* @__PURE__ */ P.jsx(o, { href: "/", children: t == "" ? /* @__PURE__ */ P.jsx(Ct, { variant: "body", children: e }) : /* @__PURE__ */ P.jsx(
    gt,
    {
      component: "img",
      sx: {
        display: "flex",
        alignItems: "center"
      },
      src: t
    }
  ) });
});
export {
  Ty as Logo,
  xy as Menu,
  Oy as MenuItem,
  by as Sidebar,
  Ey as Submenu
};
