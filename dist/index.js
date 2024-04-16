import * as x from "react";
import Qe, { forwardRef as yc, useContext as bc, Children as xc, isValidElement as Rn, cloneElement as _n } from "react";
import * as Ec from "react-dom";
import bn from "react-dom";
function va(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function $t(e) {
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
var Lo = { exports: {} }, Mr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yi;
function Oc() {
  if (Yi)
    return Mr;
  Yi = 1;
  var e = Qe, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(l, c, u) {
    var f, d = {}, p = null, g = null;
    u !== void 0 && (p = "" + u), c.key !== void 0 && (p = "" + c.key), c.ref !== void 0 && (g = c.ref);
    for (f in c)
      n.call(c, f) && !i.hasOwnProperty(f) && (d[f] = c[f]);
    if (l && l.defaultProps)
      for (f in c = l.defaultProps, c)
        d[f] === void 0 && (d[f] = c[f]);
    return { $$typeof: t, type: l, key: p, ref: g, props: d, _owner: o.current };
  }
  return Mr.Fragment = r, Mr.jsx = a, Mr.jsxs = a, Mr;
}
var Ar = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hi;
function Tc() {
  return Hi || (Hi = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Qe, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), y = Symbol.iterator, m = "@@iterator";
    function v(h) {
      if (h === null || typeof h != "object")
        return null;
      var $ = y && h[y] || h[m];
      return typeof $ == "function" ? $ : null;
    }
    var E = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(h) {
      {
        for (var $ = arguments.length, M = new Array($ > 1 ? $ - 1 : 0), ne = 1; ne < $; ne++)
          M[ne - 1] = arguments[ne];
        C("error", h, M);
      }
    }
    function C(h, $, M) {
      {
        var ne = E.ReactDebugCurrentFrame, ce = ne.getStackAddendum();
        ce !== "" && ($ += "%s", M = M.concat([ce]));
        var xe = M.map(function(le) {
          return String(le);
        });
        xe.unshift("Warning: " + $), Function.prototype.apply.call(console[h], console, xe);
      }
    }
    var T = !1, b = !1, w = !1, R = !1, I = !1, V;
    V = Symbol.for("react.module.reference");
    function A(h) {
      return !!(typeof h == "string" || typeof h == "function" || h === n || h === i || I || h === o || h === u || h === f || R || h === g || T || b || w || typeof h == "object" && h !== null && (h.$$typeof === p || h.$$typeof === d || h.$$typeof === a || h.$$typeof === l || h.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      h.$$typeof === V || h.getModuleId !== void 0));
    }
    function z(h, $, M) {
      var ne = h.displayName;
      if (ne)
        return ne;
      var ce = $.displayName || $.name || "";
      return ce !== "" ? M + "(" + ce + ")" : M;
    }
    function K(h) {
      return h.displayName || "Context";
    }
    function W(h) {
      if (h == null)
        return null;
      if (typeof h.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
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
          case l:
            var $ = h;
            return K($) + ".Consumer";
          case a:
            var M = h;
            return K(M._context) + ".Provider";
          case c:
            return z(h, h.render, "ForwardRef");
          case d:
            var ne = h.displayName || null;
            return ne !== null ? ne : W(h.type) || "Memo";
          case p: {
            var ce = h, xe = ce._payload, le = ce._init;
            try {
              return W(le(xe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var G = Object.assign, Y = 0, F, X, te, re, _, k, ee;
    function Z() {
    }
    Z.__reactDisabledLog = !0;
    function B() {
      {
        if (Y === 0) {
          F = console.log, X = console.info, te = console.warn, re = console.error, _ = console.group, k = console.groupCollapsed, ee = console.groupEnd;
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
        Y++;
      }
    }
    function J() {
      {
        if (Y--, Y === 0) {
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
              value: _
            }),
            groupCollapsed: G({}, h, {
              value: k
            }),
            groupEnd: G({}, h, {
              value: ee
            })
          });
        }
        Y < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var N = E.ReactCurrentDispatcher, L;
    function D(h, $, M) {
      {
        if (L === void 0)
          try {
            throw Error();
          } catch (ce) {
            var ne = ce.stack.trim().match(/\n( *(at )?)/);
            L = ne && ne[1] || "";
          }
        return `
` + L + h;
      }
    }
    var q = !1, Q;
    {
      var ae = typeof WeakMap == "function" ? WeakMap : Map;
      Q = new ae();
    }
    function j(h, $) {
      if (!h || q)
        return "";
      {
        var M = Q.get(h);
        if (M !== void 0)
          return M;
      }
      var ne;
      q = !0;
      var ce = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var xe;
      xe = N.current, N.current = null, B();
      try {
        if ($) {
          var le = function() {
            throw Error();
          };
          if (Object.defineProperty(le.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(le, []);
            } catch (Ct) {
              ne = Ct;
            }
            Reflect.construct(h, [], le);
          } else {
            try {
              le.call();
            } catch (Ct) {
              ne = Ct;
            }
            h.call(le.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ct) {
            ne = Ct;
          }
          h();
        }
      } catch (Ct) {
        if (Ct && ne && typeof Ct.stack == "string") {
          for (var se = Ct.stack.split(`
`), Me = ne.stack.split(`
`), H = se.length - 1, ue = Me.length - 1; H >= 1 && ue >= 0 && se[H] !== Me[ue]; )
            ue--;
          for (; H >= 1 && ue >= 0; H--, ue--)
            if (se[H] !== Me[ue]) {
              if (H !== 1 || ue !== 1)
                do
                  if (H--, ue--, ue < 0 || se[H] !== Me[ue]) {
                    var st = `
` + se[H].replace(" at new ", " at ");
                    return h.displayName && st.includes("<anonymous>") && (st = st.replace("<anonymous>", h.displayName)), typeof h == "function" && Q.set(h, st), st;
                  }
                while (H >= 1 && ue >= 0);
              break;
            }
        }
      } finally {
        q = !1, N.current = xe, J(), Error.prepareStackTrace = ce;
      }
      var sr = h ? h.displayName || h.name : "", qi = sr ? D(sr) : "";
      return typeof h == "function" && Q.set(h, qi), qi;
    }
    function Ce(h, $, M) {
      return j(h, !1);
    }
    function U(h) {
      var $ = h.prototype;
      return !!($ && $.isReactComponent);
    }
    function Oe(h, $, M) {
      if (h == null)
        return "";
      if (typeof h == "function")
        return j(h, U(h));
      if (typeof h == "string")
        return D(h);
      switch (h) {
        case u:
          return D("Suspense");
        case f:
          return D("SuspenseList");
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case c:
            return Ce(h.render);
          case d:
            return Oe(h.type, $, M);
          case p: {
            var ne = h, ce = ne._payload, xe = ne._init;
            try {
              return Oe(xe(ce), $, M);
            } catch {
            }
          }
        }
      return "";
    }
    var je = Object.prototype.hasOwnProperty, nt = {}, $e = E.ReactDebugCurrentFrame;
    function ht(h) {
      if (h) {
        var $ = h._owner, M = Oe(h.type, h._source, $ ? $.type : null);
        $e.setExtraStackFrame(M);
      } else
        $e.setExtraStackFrame(null);
    }
    function ke(h, $, M, ne, ce) {
      {
        var xe = Function.call.bind(je);
        for (var le in h)
          if (xe(h, le)) {
            var se = void 0;
            try {
              if (typeof h[le] != "function") {
                var Me = Error((ne || "React class") + ": " + M + " type `" + le + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[le] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Me.name = "Invariant Violation", Me;
              }
              se = h[le]($, le, ne, M, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (H) {
              se = H;
            }
            se && !(se instanceof Error) && (ht(ce), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ne || "React class", M, le, typeof se), ht(null)), se instanceof Error && !(se.message in nt) && (nt[se.message] = !0, ht(ce), S("Failed %s type: %s", M, se.message), ht(null));
          }
      }
    }
    var ot = Array.isArray;
    function Ke(h) {
      return ot(h);
    }
    function gt(h) {
      {
        var $ = typeof Symbol == "function" && Symbol.toStringTag, M = $ && h[Symbol.toStringTag] || h.constructor.name || "Object";
        return M;
      }
    }
    function Xe(h) {
      try {
        return De(h), !1;
      } catch {
        return !0;
      }
    }
    function De(h) {
      return "" + h;
    }
    function it(h) {
      if (Xe(h))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gt(h)), De(h);
    }
    var Fe = E.ReactCurrentOwner, jt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ie, Le, St;
    St = {};
    function yt(h) {
      if (je.call(h, "ref")) {
        var $ = Object.getOwnPropertyDescriptor(h, "ref").get;
        if ($ && $.isReactWarning)
          return !1;
      }
      return h.ref !== void 0;
    }
    function Ft(h) {
      if (je.call(h, "key")) {
        var $ = Object.getOwnPropertyDescriptor(h, "key").get;
        if ($ && $.isReactWarning)
          return !1;
      }
      return h.key !== void 0;
    }
    function pn(h, $) {
      if (typeof h.ref == "string" && Fe.current && $ && Fe.current.stateNode !== $) {
        var M = W(Fe.current.type);
        St[M] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', W(Fe.current.type), h.ref), St[M] = !0);
      }
    }
    function er(h, $) {
      {
        var M = function() {
          ie || (ie = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", $));
        };
        M.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: M,
          configurable: !0
        });
      }
    }
    function tr(h, $) {
      {
        var M = function() {
          Le || (Le = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", $));
        };
        M.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: M,
          configurable: !0
        });
      }
    }
    var Nr = function(h, $, M, ne, ce, xe, le) {
      var se = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: h,
        key: $,
        ref: M,
        props: le,
        // Record the component responsible for creating this element.
        _owner: xe
      };
      return se._store = {}, Object.defineProperty(se._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(se, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ne
      }), Object.defineProperty(se, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ce
      }), Object.freeze && (Object.freeze(se.props), Object.freeze(se)), se;
    };
    function mn(h, $, M, ne, ce) {
      {
        var xe, le = {}, se = null, Me = null;
        M !== void 0 && (it(M), se = "" + M), Ft($) && (it($.key), se = "" + $.key), yt($) && (Me = $.ref, pn($, ce));
        for (xe in $)
          je.call($, xe) && !jt.hasOwnProperty(xe) && (le[xe] = $[xe]);
        if (h && h.defaultProps) {
          var H = h.defaultProps;
          for (xe in H)
            le[xe] === void 0 && (le[xe] = H[xe]);
        }
        if (se || Me) {
          var ue = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          se && er(le, ue), Me && tr(le, ue);
        }
        return Nr(h, se, Me, ce, ne, Fe.current, le);
      }
    }
    var jr = E.ReactCurrentOwner, hn = E.ReactDebugCurrentFrame;
    function kt(h) {
      if (h) {
        var $ = h._owner, M = Oe(h.type, h._source, $ ? $.type : null);
        hn.setExtraStackFrame(M);
      } else
        hn.setExtraStackFrame(null);
    }
    var rr;
    rr = !1;
    function nr(h) {
      return typeof h == "object" && h !== null && h.$$typeof === t;
    }
    function kr() {
      {
        if (jr.current) {
          var h = W(jr.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
    }
    function vn(h) {
      {
        if (h !== void 0) {
          var $ = h.fileName.replace(/^.*[\\\/]/, ""), M = h.lineNumber;
          return `

Check your code at ` + $ + ":" + M + ".";
        }
        return "";
      }
    }
    var gn = {};
    function xo(h) {
      {
        var $ = kr();
        if (!$) {
          var M = typeof h == "string" ? h : h.displayName || h.name;
          M && ($ = `

Check the top-level render call using <` + M + ">.");
        }
        return $;
      }
    }
    function yn(h, $) {
      {
        if (!h._store || h._store.validated || h.key != null)
          return;
        h._store.validated = !0;
        var M = xo($);
        if (gn[M])
          return;
        gn[M] = !0;
        var ne = "";
        h && h._owner && h._owner !== jr.current && (ne = " It was passed a child from " + W(h._owner.type) + "."), kt(h), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', M, ne), kt(null);
      }
    }
    function or(h, $) {
      {
        if (typeof h != "object")
          return;
        if (Ke(h))
          for (var M = 0; M < h.length; M++) {
            var ne = h[M];
            nr(ne) && yn(ne, $);
          }
        else if (nr(h))
          h._store && (h._store.validated = !0);
        else if (h) {
          var ce = v(h);
          if (typeof ce == "function" && ce !== h.entries)
            for (var xe = ce.call(h), le; !(le = xe.next()).done; )
              nr(le.value) && yn(le.value, $);
        }
      }
    }
    function Eo(h) {
      {
        var $ = h.type;
        if ($ == null || typeof $ == "string")
          return;
        var M;
        if (typeof $ == "function")
          M = $.propTypes;
        else if (typeof $ == "object" && ($.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        $.$$typeof === d))
          M = $.propTypes;
        else
          return;
        if (M) {
          var ne = W($);
          ke(M, h.props, "prop", ne, h);
        } else if ($.PropTypes !== void 0 && !rr) {
          rr = !0;
          var ce = W($);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ce || "Unknown");
        }
        typeof $.getDefaultProps == "function" && !$.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Bt(h) {
      {
        for (var $ = Object.keys(h.props), M = 0; M < $.length; M++) {
          var ne = $[M];
          if (ne !== "children" && ne !== "key") {
            kt(h), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ne), kt(null);
            break;
          }
        }
        h.ref !== null && (kt(h), S("Invalid attribute `ref` supplied to `React.Fragment`."), kt(null));
      }
    }
    function ir(h, $, M, ne, ce, xe) {
      {
        var le = A(h);
        if (!le) {
          var se = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (se += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Me = vn(ce);
          Me ? se += Me : se += kr();
          var H;
          h === null ? H = "null" : Ke(h) ? H = "array" : h !== void 0 && h.$$typeof === t ? (H = "<" + (W(h.type) || "Unknown") + " />", se = " Did you accidentally export a JSX literal instead of a component?") : H = typeof h, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", H, se);
        }
        var ue = mn(h, $, M, ce, xe);
        if (ue == null)
          return ue;
        if (le) {
          var st = $.children;
          if (st !== void 0)
            if (ne)
              if (Ke(st)) {
                for (var sr = 0; sr < st.length; sr++)
                  or(st[sr], h);
                Object.freeze && Object.freeze(st);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              or(st, h);
        }
        return h === n ? Bt(ue) : Eo(ue), ue;
      }
    }
    function Be(h, $, M) {
      return ir(h, $, M, !0);
    }
    function Ut(h, $, M) {
      return ir(h, $, M, !1);
    }
    var Oo = Ut, qt = Be;
    Ar.Fragment = n, Ar.jsx = Oo, Ar.jsxs = qt;
  }()), Ar;
}
process.env.NODE_ENV === "production" ? Lo.exports = Oc() : Lo.exports = Tc();
var P = Lo.exports;
const wc = {
  black: "#000",
  white: "#fff"
}, Yr = wc, Sc = {
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
}, ar = Sc, Cc = {
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
}, lr = Cc, Rc = {
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
}, cr = Rc, _c = {
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
}, ur = _c, Pc = {
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
}, fr = Pc, $c = {
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
}, Ir = $c, Nc = {
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
}, jc = Nc;
function Hr(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let r = 1; r < arguments.length; r += 1)
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const kc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Hr
}, Symbol.toStringTag, { value: "Module" })), br = "$$material";
function O() {
  return O = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, O.apply(this, arguments);
}
function de(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, i;
  for (i = 0; i < n.length; i++)
    o = n[i], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function ga(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Mc = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ac = /* @__PURE__ */ ga(
  function(e) {
    return Mc.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function Ic(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Dc(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Lc = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Dc(this));
    var o = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var i = n.charCodeAt(0) === 64 && n.charCodeAt(1) === 105;
      i && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + n + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !i;
    }
    if (this.isSpeedy) {
      var a = Ic(o);
      try {
        a.insertRule(n, a.cssRules.length);
      } catch (l) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(n) && console.error('There was a problem inserting the following rule: "' + n + '"', l);
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      return n.parentNode && n.parentNode.removeChild(n);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, e;
}(), Ie = "-ms-", In = "-moz-", me = "-webkit-", ei = "comm", ti = "rule", ri = "decl", Vc = "@import", ya = "@keyframes", zc = "@layer", Wc = Math.abs, Qn = String.fromCharCode, Fc = Object.assign;
function Bc(e, t) {
  return Ae(e, 0) ^ 45 ? (((t << 2 ^ Ae(e, 0)) << 2 ^ Ae(e, 1)) << 2 ^ Ae(e, 2)) << 2 ^ Ae(e, 3) : 0;
}
function ba(e) {
  return e.trim();
}
function Uc(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function he(e, t, r) {
  return e.replace(t, r);
}
function Vo(e, t) {
  return e.indexOf(t);
}
function Ae(e, t) {
  return e.charCodeAt(t) | 0;
}
function Gr(e, t, r) {
  return e.slice(t, r);
}
function bt(e) {
  return e.length;
}
function ni(e) {
  return e.length;
}
function xn(e, t) {
  return t.push(e), e;
}
function qc(e, t) {
  return e.map(t).join("");
}
var eo = 1, xr = 1, xa = 0, He = 0, Pe = 0, Cr = "";
function to(e, t, r, n, o, i, a) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: eo, column: xr, length: a, return: "" };
}
function Dr(e, t) {
  return Fc(to("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Yc() {
  return Pe;
}
function Hc() {
  return Pe = He > 0 ? Ae(Cr, --He) : 0, xr--, Pe === 10 && (xr = 1, eo--), Pe;
}
function et() {
  return Pe = He < xa ? Ae(Cr, He++) : 0, xr++, Pe === 10 && (xr = 1, eo++), Pe;
}
function Et() {
  return Ae(Cr, He);
}
function Pn() {
  return He;
}
function tn(e, t) {
  return Gr(Cr, e, t);
}
function Kr(e) {
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
function Ea(e) {
  return eo = xr = 1, xa = bt(Cr = e), He = 0, [];
}
function Oa(e) {
  return Cr = "", e;
}
function $n(e) {
  return ba(tn(He - 1, zo(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Gc(e) {
  for (; (Pe = Et()) && Pe < 33; )
    et();
  return Kr(e) > 2 || Kr(Pe) > 3 ? "" : " ";
}
function Kc(e, t) {
  for (; --t && et() && !(Pe < 48 || Pe > 102 || Pe > 57 && Pe < 65 || Pe > 70 && Pe < 97); )
    ;
  return tn(e, Pn() + (t < 6 && Et() == 32 && et() == 32));
}
function zo(e) {
  for (; et(); )
    switch (Pe) {
      case e:
        return He;
      case 34:
      case 39:
        e !== 34 && e !== 39 && zo(Pe);
        break;
      case 40:
        e === 41 && zo(e);
        break;
      case 92:
        et();
        break;
    }
  return He;
}
function Xc(e, t) {
  for (; et() && e + Pe !== 57; )
    if (e + Pe === 84 && Et() === 47)
      break;
  return "/*" + tn(t, He - 1) + "*" + Qn(e === 47 ? e : et());
}
function Jc(e) {
  for (; !Kr(Et()); )
    et();
  return tn(e, He);
}
function Zc(e) {
  return Oa(Nn("", null, null, null, [""], e = Ea(e), 0, [0], e));
}
function Nn(e, t, r, n, o, i, a, l, c) {
  for (var u = 0, f = 0, d = a, p = 0, g = 0, y = 0, m = 1, v = 1, E = 1, S = 0, C = "", T = o, b = i, w = n, R = C; v; )
    switch (y = S, S = et()) {
      case 40:
        if (y != 108 && Ae(R, d - 1) == 58) {
          Vo(R += he($n(S), "&", "&\f"), "&\f") != -1 && (E = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        R += $n(S);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        R += Gc(y);
        break;
      case 92:
        R += Kc(Pn() - 1, 7);
        continue;
      case 47:
        switch (Et()) {
          case 42:
          case 47:
            xn(Qc(Xc(et(), Pn()), t, r), c);
            break;
          default:
            R += "/";
        }
        break;
      case 123 * m:
        l[u++] = bt(R) * E;
      case 125 * m:
      case 59:
      case 0:
        switch (S) {
          case 0:
          case 125:
            v = 0;
          case 59 + f:
            E == -1 && (R = he(R, /\f/g, "")), g > 0 && bt(R) - d && xn(g > 32 ? Ki(R + ";", n, r, d - 1) : Ki(he(R, " ", "") + ";", n, r, d - 2), c);
            break;
          case 59:
            R += ";";
          default:
            if (xn(w = Gi(R, t, r, u, f, o, l, C, T = [], b = [], d), i), S === 123)
              if (f === 0)
                Nn(R, t, w, w, T, i, d, l, b);
              else
                switch (p === 99 && Ae(R, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Nn(e, w, w, n && xn(Gi(e, w, w, 0, 0, o, l, C, o, T = [], d), b), o, b, d, l, n ? T : b);
                    break;
                  default:
                    Nn(R, w, w, w, [""], b, 0, l, b);
                }
        }
        u = f = g = 0, m = E = 1, C = R = "", d = a;
        break;
      case 58:
        d = 1 + bt(R), g = y;
      default:
        if (m < 1) {
          if (S == 123)
            --m;
          else if (S == 125 && m++ == 0 && Hc() == 125)
            continue;
        }
        switch (R += Qn(S), S * m) {
          case 38:
            E = f > 0 ? 1 : (R += "\f", -1);
            break;
          case 44:
            l[u++] = (bt(R) - 1) * E, E = 1;
            break;
          case 64:
            Et() === 45 && (R += $n(et())), p = Et(), f = d = bt(C = R += Jc(Pn())), S++;
            break;
          case 45:
            y === 45 && bt(R) == 2 && (m = 0);
        }
    }
  return i;
}
function Gi(e, t, r, n, o, i, a, l, c, u, f) {
  for (var d = o - 1, p = o === 0 ? i : [""], g = ni(p), y = 0, m = 0, v = 0; y < n; ++y)
    for (var E = 0, S = Gr(e, d + 1, d = Wc(m = a[y])), C = e; E < g; ++E)
      (C = ba(m > 0 ? p[E] + " " + S : he(S, /&\f/g, p[E]))) && (c[v++] = C);
  return to(e, t, r, o === 0 ? ti : l, c, u, f);
}
function Qc(e, t, r) {
  return to(e, t, r, ei, Qn(Yc()), Gr(e, 2, -2), 0);
}
function Ki(e, t, r, n) {
  return to(e, t, r, ri, Gr(e, 0, n), Gr(e, n + 1, -1), n);
}
function gr(e, t) {
  for (var r = "", n = ni(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function eu(e, t, r, n) {
  switch (e.type) {
    case zc:
      if (e.children.length)
        break;
    case Vc:
    case ri:
      return e.return = e.return || e.value;
    case ei:
      return "";
    case ya:
      return e.return = e.value + "{" + gr(e.children, n) + "}";
    case ti:
      e.value = e.props.join(",");
  }
  return bt(r = gr(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function tu(e) {
  var t = ni(e);
  return function(r, n, o, i) {
    for (var a = "", l = 0; l < t; l++)
      a += e[l](r, n, o, i) || "";
    return a;
  };
}
function ru(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var nu = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = Et(), o === 38 && i === 12 && (r[n] = 1), !Kr(i); )
    et();
  return tn(t, He);
}, ou = function(t, r) {
  var n = -1, o = 44;
  do
    switch (Kr(o)) {
      case 0:
        o === 38 && Et() === 12 && (r[n] = 1), t[n] += nu(He - 1, r, n);
        break;
      case 2:
        t[n] += $n(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = Et() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += Qn(o);
    }
  while (o = et());
  return t;
}, iu = function(t, r) {
  return Oa(ou(Ea(t), r));
}, Xi = /* @__PURE__ */ new WeakMap(), su = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Xi.get(n)) && !o) {
      Xi.set(t, !0);
      for (var i = [], a = iu(r, i), l = n.props, c = 0, u = 0; c < a.length; c++)
        for (var f = 0; f < l.length; f++, u++)
          t.props[u] = i[c] ? a[c].replace(/&\f/g, l[f]) : l[f] + " " + a[c];
    }
  }
}, au = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
}, lu = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", cu = function(t) {
  return t.type === "comm" && t.children.indexOf(lu) > -1;
}, uu = function(t) {
  return function(r, n, o) {
    if (!(r.type !== "rule" || t.compat)) {
      var i = r.value.match(/(:first|:nth|:nth-last)-child/g);
      if (i) {
        for (var a = !!r.parent, l = a ? r.parent.children : (
          // global rule at the root level
          o
        ), c = l.length - 1; c >= 0; c--) {
          var u = l[c];
          if (u.line < r.line)
            break;
          if (u.column < r.column) {
            if (cu(u))
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
}, Ta = function(t) {
  return t.type.charCodeAt(1) === 105 && t.type.charCodeAt(0) === 64;
}, fu = function(t, r) {
  for (var n = t - 1; n >= 0; n--)
    if (!Ta(r[n]))
      return !0;
  return !1;
}, Ji = function(t) {
  t.type = "", t.value = "", t.return = "", t.children = "", t.props = "";
}, du = function(t, r, n) {
  Ta(t) && (t.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), Ji(t)) : fu(r, n) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), Ji(t)));
};
function wa(e, t) {
  switch (Bc(e, t)) {
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
      return me + e + In + e + Ie + e + e;
    case 6828:
    case 4268:
      return me + e + Ie + e + e;
    case 6165:
      return me + e + Ie + "flex-" + e + e;
    case 5187:
      return me + e + he(e, /(\w+).+(:[^]+)/, me + "box-$1$2" + Ie + "flex-$1$2") + e;
    case 5443:
      return me + e + Ie + "flex-item-" + he(e, /flex-|-self/, "") + e;
    case 4675:
      return me + e + Ie + "flex-line-pack" + he(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return me + e + Ie + he(e, "shrink", "negative") + e;
    case 5292:
      return me + e + Ie + he(e, "basis", "preferred-size") + e;
    case 6060:
      return me + "box-" + he(e, "-grow", "") + me + e + Ie + he(e, "grow", "positive") + e;
    case 4554:
      return me + he(e, /([^-])(transform)/g, "$1" + me + "$2") + e;
    case 6187:
      return he(he(he(e, /(zoom-|grab)/, me + "$1"), /(image-set)/, me + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return he(e, /(image-set\([^]*)/, me + "$1$`$1");
    case 4968:
      return he(he(e, /(.+:)(flex-)?(.*)/, me + "box-pack:$3" + Ie + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + me + e + e;
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
      if (bt(e) - 1 - t > 6)
        switch (Ae(e, t + 1)) {
          case 109:
            if (Ae(e, t + 4) !== 45)
              break;
          case 102:
            return he(e, /(.+:)(.+)-([^]+)/, "$1" + me + "$2-$3$1" + In + (Ae(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Vo(e, "stretch") ? wa(he(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (Ae(e, t + 1) !== 115)
        break;
    case 6444:
      switch (Ae(e, bt(e) - 3 - (~Vo(e, "!important") && 10))) {
        case 107:
          return he(e, ":", ":" + me) + e;
        case 101:
          return he(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + me + (Ae(e, 14) === 45 ? "inline-" : "") + "box$3$1" + me + "$2$3$1" + Ie + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Ae(e, t + 11)) {
        case 114:
          return me + e + Ie + he(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return me + e + Ie + he(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return me + e + Ie + he(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return me + e + Ie + e + e;
  }
  return e;
}
var pu = function(t, r, n, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case ri:
        t.return = wa(t.value, t.length);
        break;
      case ya:
        return gr([Dr(t, {
          value: he(t.value, "@", "@" + me)
        })], o);
      case ti:
        if (t.length)
          return qc(t.props, function(i) {
            switch (Uc(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return gr([Dr(t, {
                  props: [he(i, /:(read-\w+)/, ":" + In + "$1")]
                })], o);
              case "::placeholder":
                return gr([Dr(t, {
                  props: [he(i, /:(plac\w+)/, ":" + me + "input-$1")]
                }), Dr(t, {
                  props: [he(i, /:(plac\w+)/, ":" + In + "$1")]
                }), Dr(t, {
                  props: [he(i, /:(plac\w+)/, Ie + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, mu = [pu], Sa = function(t) {
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
  var o = t.stylisPlugins || mu;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(r))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + r + '" was passed');
  var i = {}, a, l = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(m) {
      for (var v = m.getAttribute("data-emotion").split(" "), E = 1; E < v.length; E++)
        i[v[E]] = !0;
      l.push(m);
    }
  );
  var c, u = [su, au];
  process.env.NODE_ENV !== "production" && u.push(uu({
    get compat() {
      return y.compat;
    }
  }), du);
  {
    var f, d = [eu, process.env.NODE_ENV !== "production" ? function(m) {
      m.root || (m.return ? f.insert(m.return) : m.value && m.type !== ei && f.insert(m.value + "{}"));
    } : ru(function(m) {
      f.insert(m);
    })], p = tu(u.concat(o, d)), g = function(v) {
      return gr(Zc(v), p);
    };
    c = function(v, E, S, C) {
      f = S, process.env.NODE_ENV !== "production" && E.map !== void 0 && (f = {
        insert: function(b) {
          S.insert(b + E.map);
        }
      }), g(v ? v + "{" + E.styles + "}" : E.styles), C && (y.inserted[E.name] = !0);
    };
  }
  var y = {
    key: r,
    sheet: new Lc({
      key: r,
      container: a,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: c
  };
  return y.sheet.hydrate(l), y;
}, En = { exports: {} }, ve = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zi;
function hu() {
  if (Zi)
    return ve;
  Zi = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
  function C(b) {
    if (typeof b == "object" && b !== null) {
      var w = b.$$typeof;
      switch (w) {
        case t:
          switch (b = b.type, b) {
            case c:
            case u:
            case n:
            case i:
            case o:
            case d:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case l:
                case f:
                case y:
                case g:
                case a:
                  return b;
                default:
                  return w;
              }
          }
        case r:
          return w;
      }
    }
  }
  function T(b) {
    return C(b) === u;
  }
  return ve.AsyncMode = c, ve.ConcurrentMode = u, ve.ContextConsumer = l, ve.ContextProvider = a, ve.Element = t, ve.ForwardRef = f, ve.Fragment = n, ve.Lazy = y, ve.Memo = g, ve.Portal = r, ve.Profiler = i, ve.StrictMode = o, ve.Suspense = d, ve.isAsyncMode = function(b) {
    return T(b) || C(b) === c;
  }, ve.isConcurrentMode = T, ve.isContextConsumer = function(b) {
    return C(b) === l;
  }, ve.isContextProvider = function(b) {
    return C(b) === a;
  }, ve.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, ve.isForwardRef = function(b) {
    return C(b) === f;
  }, ve.isFragment = function(b) {
    return C(b) === n;
  }, ve.isLazy = function(b) {
    return C(b) === y;
  }, ve.isMemo = function(b) {
    return C(b) === g;
  }, ve.isPortal = function(b) {
    return C(b) === r;
  }, ve.isProfiler = function(b) {
    return C(b) === i;
  }, ve.isStrictMode = function(b) {
    return C(b) === o;
  }, ve.isSuspense = function(b) {
    return C(b) === d;
  }, ve.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === u || b === i || b === o || b === d || b === p || typeof b == "object" && b !== null && (b.$$typeof === y || b.$$typeof === g || b.$$typeof === a || b.$$typeof === l || b.$$typeof === f || b.$$typeof === v || b.$$typeof === E || b.$$typeof === S || b.$$typeof === m);
  }, ve.typeOf = C, ve;
}
var ge = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qi;
function vu() {
  return Qi || (Qi = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
    function C(j) {
      return typeof j == "string" || typeof j == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      j === n || j === u || j === i || j === o || j === d || j === p || typeof j == "object" && j !== null && (j.$$typeof === y || j.$$typeof === g || j.$$typeof === a || j.$$typeof === l || j.$$typeof === f || j.$$typeof === v || j.$$typeof === E || j.$$typeof === S || j.$$typeof === m);
    }
    function T(j) {
      if (typeof j == "object" && j !== null) {
        var Ce = j.$$typeof;
        switch (Ce) {
          case t:
            var U = j.type;
            switch (U) {
              case c:
              case u:
              case n:
              case i:
              case o:
              case d:
                return U;
              default:
                var Oe = U && U.$$typeof;
                switch (Oe) {
                  case l:
                  case f:
                  case y:
                  case g:
                  case a:
                    return Oe;
                  default:
                    return Ce;
                }
            }
          case r:
            return Ce;
        }
      }
    }
    var b = c, w = u, R = l, I = a, V = t, A = f, z = n, K = y, W = g, G = r, Y = i, F = o, X = d, te = !1;
    function re(j) {
      return te || (te = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), _(j) || T(j) === c;
    }
    function _(j) {
      return T(j) === u;
    }
    function k(j) {
      return T(j) === l;
    }
    function ee(j) {
      return T(j) === a;
    }
    function Z(j) {
      return typeof j == "object" && j !== null && j.$$typeof === t;
    }
    function B(j) {
      return T(j) === f;
    }
    function J(j) {
      return T(j) === n;
    }
    function N(j) {
      return T(j) === y;
    }
    function L(j) {
      return T(j) === g;
    }
    function D(j) {
      return T(j) === r;
    }
    function q(j) {
      return T(j) === i;
    }
    function Q(j) {
      return T(j) === o;
    }
    function ae(j) {
      return T(j) === d;
    }
    ge.AsyncMode = b, ge.ConcurrentMode = w, ge.ContextConsumer = R, ge.ContextProvider = I, ge.Element = V, ge.ForwardRef = A, ge.Fragment = z, ge.Lazy = K, ge.Memo = W, ge.Portal = G, ge.Profiler = Y, ge.StrictMode = F, ge.Suspense = X, ge.isAsyncMode = re, ge.isConcurrentMode = _, ge.isContextConsumer = k, ge.isContextProvider = ee, ge.isElement = Z, ge.isForwardRef = B, ge.isFragment = J, ge.isLazy = N, ge.isMemo = L, ge.isPortal = D, ge.isProfiler = q, ge.isStrictMode = Q, ge.isSuspense = ae, ge.isValidElementType = C, ge.typeOf = T;
  }()), ge;
}
var es;
function oi() {
  return es || (es = 1, process.env.NODE_ENV === "production" ? En.exports = hu() : En.exports = vu()), En.exports;
}
var Ca = oi(), gu = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, yu = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Ra = {};
Ra[Ca.ForwardRef] = gu;
Ra[Ca.Memo] = yu;
var bu = !0;
function ii(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : n += o + " ";
  }), n;
}
var ro = function(t, r, n) {
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
  bu === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, no = function(t, r, n) {
  ro(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function xu(e) {
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
var Eu = {
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
}, ts = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Ou = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", Tu = /[A-Z]|^ms/g, _a = /_EMO_([^_]+?)_([^]*?)_EMO_/g, si = function(t) {
  return t.charCodeAt(1) === 45;
}, rs = function(t) {
  return t != null && typeof t != "boolean";
}, To = /* @__PURE__ */ ga(function(e) {
  return si(e) ? e : e.replace(Tu, "-$&").toLowerCase();
}), Dn = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(_a, function(n, o, i) {
          return vt = {
            name: o,
            styles: i,
            next: vt
          }, o;
        });
  }
  return Eu[t] !== 1 && !si(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
if (process.env.NODE_ENV !== "production") {
  var wu = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, Su = ["normal", "none", "initial", "inherit", "unset"], Cu = Dn, Ru = /^-ms-/, _u = /-(.)/g, ns = {};
  Dn = function(t, r) {
    if (t === "content" && (typeof r != "string" || Su.indexOf(r) === -1 && !wu.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + r + "\"'`");
    var n = Cu(t, r);
    return n !== "" && !si(t) && t.indexOf("-") !== -1 && ns[t] === void 0 && (ns[t] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + t.replace(Ru, "ms-").replace(_u, function(o, i) {
      return i.toUpperCase();
    }) + "?")), n;
  };
}
var Pa = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Xr(e, t, r) {
  if (r == null)
    return "";
  if (r.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && r.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(Pa);
    return r;
  }
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return vt = {
          name: r.name,
          styles: r.styles,
          next: vt
        }, r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            vt = {
              name: n.name,
              styles: n.styles,
              next: vt
            }, n = n.next;
        var o = r.styles + ";";
        return process.env.NODE_ENV !== "production" && r.map !== void 0 && (o += r.map), o;
      }
      return Pu(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var i = vt, a = r(e);
        return vt = i, Xr(e, t, a);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var l = [], c = r.replace(_a, function(f, d, p) {
          var g = "animation" + l.length;
          return l.push("const " + g + " = keyframes`" + p.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + g + "}";
        });
        l.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(l, ["`" + c + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + c + "`"));
      }
      break;
  }
  if (t == null)
    return r;
  var u = t[r];
  return u !== void 0 ? u : r;
}
function Pu(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += Xr(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != "object")
        t != null && t[a] !== void 0 ? n += i + "{" + t[a] + "}" : rs(a) && (n += To(i) + ":" + Dn(i, a) + ";");
      else {
        if (i === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(Pa);
        if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
          for (var l = 0; l < a.length; l++)
            rs(a[l]) && (n += To(i) + ":" + Dn(i, a[l]) + ";");
        else {
          var c = Xr(e, t, a);
          switch (i) {
            case "animation":
            case "animationName": {
              n += To(i) + ":" + c + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && i === "undefined" && console.error(Ou), n += i + "{" + c + "}";
          }
        }
      }
    }
  return n;
}
var os = /label:\s*([^\s;\n{]+)\s*(;|$)/g, $a;
process.env.NODE_ENV !== "production" && ($a = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var vt, Er = function(t, r, n) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, i = "";
  vt = void 0;
  var a = t[0];
  a == null || a.raw === void 0 ? (o = !1, i += Xr(n, r, a)) : (process.env.NODE_ENV !== "production" && a[0] === void 0 && console.error(ts), i += a[0]);
  for (var l = 1; l < t.length; l++)
    i += Xr(n, r, t[l]), o && (process.env.NODE_ENV !== "production" && a[l] === void 0 && console.error(ts), i += a[l]);
  var c;
  process.env.NODE_ENV !== "production" && (i = i.replace($a, function(p) {
    return c = p, "";
  })), os.lastIndex = 0;
  for (var u = "", f; (f = os.exec(i)) !== null; )
    u += "-" + // $FlowFixMe we know it's not null
    f[1];
  var d = xu(i) + u;
  return process.env.NODE_ENV !== "production" ? {
    name: d,
    styles: i,
    map: c,
    next: vt,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: d,
    styles: i,
    next: vt
  };
}, $u = function(t) {
  return t();
}, Na = x.useInsertionEffect ? x.useInsertionEffect : !1, ai = Na || $u, is = Na || x.useLayoutEffect, Nu = {}.hasOwnProperty, li = /* @__PURE__ */ x.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Sa({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (li.displayName = "EmotionCacheContext");
var ju = li.Provider, oo = function(t) {
  return /* @__PURE__ */ yc(function(r, n) {
    var o = bc(li);
    return t(r, o, n);
  });
}, Vt = /* @__PURE__ */ x.createContext({});
process.env.NODE_ENV !== "production" && (Vt.displayName = "EmotionThemeContext");
var ss = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", as = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", ku = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return ro(r, n, o), ai(function() {
    return no(r, n, o);
  }), null;
}, Mu = /* @__PURE__ */ oo(function(e, t, r) {
  var n = e.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var o = e[ss], i = [n], a = "";
  typeof e.className == "string" ? a = ii(t.registered, i, e.className) : e.className != null && (a = e.className + " ");
  var l = Er(i, void 0, x.useContext(Vt));
  if (process.env.NODE_ENV !== "production" && l.name.indexOf("-") === -1) {
    var c = e[as];
    c && (l = Er([l, "label:" + c + ";"]));
  }
  a += t.key + "-" + l.name;
  var u = {};
  for (var f in e)
    Nu.call(e, f) && f !== "css" && f !== ss && (process.env.NODE_ENV === "production" || f !== as) && (u[f] = e[f]);
  return u.ref = r, u.className = a, /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement(ku, {
    cache: t,
    serialized: l,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ x.createElement(o, u));
});
process.env.NODE_ENV !== "production" && (Mu.displayName = "EmotionCssPropInternal");
var wo = { exports: {} }, ls;
function ja() {
  return ls || (ls = 1, function(e) {
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
  }(wo)), wo.exports;
}
ja();
var Au = {
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
}, cs = !1, ka = /* @__PURE__ */ oo(function(e, t) {
  process.env.NODE_ENV !== "production" && !cs && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), cs = !0);
  var r = e.styles, n = Er([r], void 0, x.useContext(Vt)), o = x.useRef();
  return is(function() {
    var i = t.key + "-global", a = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), l = !1, c = document.querySelector('style[data-emotion="' + i + " " + n.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), c !== null && (l = !0, c.setAttribute("data-emotion", i), a.hydrate([c])), o.current = [a, l], function() {
      a.flush();
    };
  }, [t]), is(function() {
    var i = o.current, a = i[0], l = i[1];
    if (l) {
      i[1] = !1;
      return;
    }
    if (n.next !== void 0 && no(t, n.next, !0), a.tags.length) {
      var c = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = c, a.flush();
    }
    t.insert("", n, a, !1);
  }, [t, n.name]), null;
});
process.env.NODE_ENV !== "production" && (ka.displayName = "EmotionGlobal");
function Ma() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return Er(t);
}
var io = function() {
  var t = Ma.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, Iu = function e(t) {
  for (var r = t.length, n = 0, o = ""; n < r; n++) {
    var i = t[n];
    if (i != null) {
      var a = void 0;
      switch (typeof i) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(i))
            a = e(i);
          else {
            process.env.NODE_ENV !== "production" && i.styles !== void 0 && i.name !== void 0 && console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."), a = "";
            for (var l in i)
              i[l] && l && (a && (a += " "), a += l);
          }
          break;
        }
        default:
          a = i;
      }
      a && (o && (o += " "), o += a);
    }
  }
  return o;
};
function Du(e, t, r) {
  var n = [], o = ii(e, n, r);
  return n.length < 2 ? r : o + t(n);
}
var Lu = function(t) {
  var r = t.cache, n = t.serializedArr;
  return ai(function() {
    for (var o = 0; o < n.length; o++)
      no(r, n[o], !1);
  }), null;
}, Vu = /* @__PURE__ */ oo(function(e, t) {
  var r = !1, n = [], o = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var u = arguments.length, f = new Array(u), d = 0; d < u; d++)
      f[d] = arguments[d];
    var p = Er(f, t.registered);
    return n.push(p), ro(t, p, !1), t.key + "-" + p.name;
  }, i = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var u = arguments.length, f = new Array(u), d = 0; d < u; d++)
      f[d] = arguments[d];
    return Du(t.registered, o, Iu(f));
  }, a = {
    css: o,
    cx: i,
    theme: x.useContext(Vt)
  }, l = e.children(a);
  return r = !0, /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement(Lu, {
    cache: t,
    serializedArr: n
  }), l);
});
process.env.NODE_ENV !== "production" && (Vu.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var us = !0, zu = typeof jest < "u" || typeof vi < "u";
  if (us && !zu) {
    var fs = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : us ? window : global
    ), ds = "__EMOTION_REACT_" + Au.version.split(".")[0] + "__";
    fs[ds] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), fs[ds] = !0;
  }
}
var Wu = Ac, Fu = function(t) {
  return t !== "theme";
}, ps = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Wu : Fu;
}, ms = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, hs = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Bu = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return ro(r, n, o), ai(function() {
    return no(r, n, o);
  }), null;
}, Uu = function e(t, r) {
  if (process.env.NODE_ENV !== "production" && t === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, a;
  r !== void 0 && (i = r.label, a = r.target);
  var l = ms(t, r, n), c = l || ps(o), u = !c("as");
  return function() {
    var f = arguments, d = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && d.push("label:" + i + ";"), f[0] == null || f[0].raw === void 0)
      d.push.apply(d, f);
    else {
      process.env.NODE_ENV !== "production" && f[0][0] === void 0 && console.error(hs), d.push(f[0][0]);
      for (var p = f.length, g = 1; g < p; g++)
        process.env.NODE_ENV !== "production" && f[0][g] === void 0 && console.error(hs), d.push(f[g], f[0][g]);
    }
    var y = oo(function(m, v, E) {
      var S = u && m.as || o, C = "", T = [], b = m;
      if (m.theme == null) {
        b = {};
        for (var w in m)
          b[w] = m[w];
        b.theme = x.useContext(Vt);
      }
      typeof m.className == "string" ? C = ii(v.registered, T, m.className) : m.className != null && (C = m.className + " ");
      var R = Er(d.concat(T), v.registered, b);
      C += v.key + "-" + R.name, a !== void 0 && (C += " " + a);
      var I = u && l === void 0 ? ps(S) : c, V = {};
      for (var A in m)
        u && A === "as" || // $FlowFixMe
        I(A) && (V[A] = m[A]);
      return V.className = C, V.ref = E, /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement(Bu, {
        cache: v,
        serialized: R,
        isStringTag: typeof S == "string"
      }), /* @__PURE__ */ x.createElement(S, V));
    });
    return y.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", y.defaultProps = t.defaultProps, y.__emotion_real = y, y.__emotion_base = o, y.__emotion_styles = d, y.__emotion_forwardProp = l, Object.defineProperty(y, "toString", {
      value: function() {
        return a === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + a;
      }
    }), y.withComponent = function(m, v) {
      return e(m, O({}, r, v, {
        shouldForwardProp: ms(y, v, !0)
      })).apply(void 0, d);
    }, y;
  };
}, qu = [
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
], Wo = Uu.bind();
qu.forEach(function(e) {
  Wo[e] = Wo(e);
});
var Fo = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var So, vs;
function Yu() {
  if (vs)
    return So;
  vs = 1;
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
      for (var a = {}, l = 0; l < 10; l++)
        a["_" + String.fromCharCode(l)] = l;
      var c = Object.getOwnPropertyNames(a).map(function(f) {
        return a[f];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        u[f] = f;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return So = o() ? Object.assign : function(i, a) {
    for (var l, c = n(i), u, f = 1; f < arguments.length; f++) {
      l = Object(arguments[f]);
      for (var d in l)
        t.call(l, d) && (c[d] = l[d]);
      if (e) {
        u = e(l);
        for (var p = 0; p < u.length; p++)
          r.call(l, u[p]) && (c[u[p]] = l[u[p]]);
      }
    }
    return c;
  }, So;
}
var Co, gs;
function ci() {
  if (gs)
    return Co;
  gs = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Co = e, Co;
}
var Ro, ys;
function Aa() {
  return ys || (ys = 1, Ro = Function.call.bind(Object.prototype.hasOwnProperty)), Ro;
}
var _o, bs;
function Hu() {
  if (bs)
    return _o;
  bs = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = ci(), r = {}, n = Aa();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, l, c, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in i)
        if (n(i, f)) {
          var d;
          try {
            if (typeof i[f] != "function") {
              var p = Error(
                (c || "React class") + ": " + l + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            d = i[f](a, f, c, l, null, t);
          } catch (y) {
            d = y;
          }
          if (d && !(d instanceof Error) && e(
            (c || "React class") + ": type specification of " + l + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in r)) {
            r[d.message] = !0;
            var g = u ? u() : "";
            e(
              "Failed " + l + " type: " + d.message + (g ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, _o = o, _o;
}
var Po, xs;
function Gu() {
  if (xs)
    return Po;
  xs = 1;
  var e = oi(), t = Yu(), r = ci(), n = Aa(), o = Hu(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(l) {
    var c = "Warning: " + l;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return Po = function(l, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function d(_) {
      var k = _ && (u && _[u] || _[f]);
      if (typeof k == "function")
        return k;
    }
    var p = "<<anonymous>>", g = {
      array: E("array"),
      bigint: E("bigint"),
      bool: E("boolean"),
      func: E("function"),
      number: E("number"),
      object: E("object"),
      string: E("string"),
      symbol: E("symbol"),
      any: S(),
      arrayOf: C,
      element: T(),
      elementType: b(),
      instanceOf: w,
      node: A(),
      objectOf: I,
      oneOf: R,
      oneOfType: V,
      shape: K,
      exact: W
    };
    function y(_, k) {
      return _ === k ? _ !== 0 || 1 / _ === 1 / k : _ !== _ && k !== k;
    }
    function m(_, k) {
      this.message = _, this.data = k && typeof k == "object" ? k : {}, this.stack = "";
    }
    m.prototype = Error.prototype;
    function v(_) {
      if (process.env.NODE_ENV !== "production")
        var k = {}, ee = 0;
      function Z(J, N, L, D, q, Q, ae) {
        if (D = D || p, Q = Q || L, ae !== r) {
          if (c) {
            var j = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw j.name = "Invariant Violation", j;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Ce = D + ":" + L;
            !k[Ce] && // Avoid spamming the console because they are often not actionable except for lib authors
            ee < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + Q + "` prop on `" + D + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), k[Ce] = !0, ee++);
          }
        }
        return N[L] == null ? J ? N[L] === null ? new m("The " + q + " `" + Q + "` is marked as required " + ("in `" + D + "`, but its value is `null`.")) : new m("The " + q + " `" + Q + "` is marked as required in " + ("`" + D + "`, but its value is `undefined`.")) : null : _(N, L, D, q, Q);
      }
      var B = Z.bind(null, !1);
      return B.isRequired = Z.bind(null, !0), B;
    }
    function E(_) {
      function k(ee, Z, B, J, N, L) {
        var D = ee[Z], q = F(D);
        if (q !== _) {
          var Q = X(D);
          return new m(
            "Invalid " + J + " `" + N + "` of type " + ("`" + Q + "` supplied to `" + B + "`, expected ") + ("`" + _ + "`."),
            { expectedType: _ }
          );
        }
        return null;
      }
      return v(k);
    }
    function S() {
      return v(a);
    }
    function C(_) {
      function k(ee, Z, B, J, N) {
        if (typeof _ != "function")
          return new m("Property `" + N + "` of component `" + B + "` has invalid PropType notation inside arrayOf.");
        var L = ee[Z];
        if (!Array.isArray(L)) {
          var D = F(L);
          return new m("Invalid " + J + " `" + N + "` of type " + ("`" + D + "` supplied to `" + B + "`, expected an array."));
        }
        for (var q = 0; q < L.length; q++) {
          var Q = _(L, q, B, J, N + "[" + q + "]", r);
          if (Q instanceof Error)
            return Q;
        }
        return null;
      }
      return v(k);
    }
    function T() {
      function _(k, ee, Z, B, J) {
        var N = k[ee];
        if (!l(N)) {
          var L = F(N);
          return new m("Invalid " + B + " `" + J + "` of type " + ("`" + L + "` supplied to `" + Z + "`, expected a single ReactElement."));
        }
        return null;
      }
      return v(_);
    }
    function b() {
      function _(k, ee, Z, B, J) {
        var N = k[ee];
        if (!e.isValidElementType(N)) {
          var L = F(N);
          return new m("Invalid " + B + " `" + J + "` of type " + ("`" + L + "` supplied to `" + Z + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return v(_);
    }
    function w(_) {
      function k(ee, Z, B, J, N) {
        if (!(ee[Z] instanceof _)) {
          var L = _.name || p, D = re(ee[Z]);
          return new m("Invalid " + J + " `" + N + "` of type " + ("`" + D + "` supplied to `" + B + "`, expected ") + ("instance of `" + L + "`."));
        }
        return null;
      }
      return v(k);
    }
    function R(_) {
      if (!Array.isArray(_))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function k(ee, Z, B, J, N) {
        for (var L = ee[Z], D = 0; D < _.length; D++)
          if (y(L, _[D]))
            return null;
        var q = JSON.stringify(_, function(ae, j) {
          var Ce = X(j);
          return Ce === "symbol" ? String(j) : j;
        });
        return new m("Invalid " + J + " `" + N + "` of value `" + String(L) + "` " + ("supplied to `" + B + "`, expected one of " + q + "."));
      }
      return v(k);
    }
    function I(_) {
      function k(ee, Z, B, J, N) {
        if (typeof _ != "function")
          return new m("Property `" + N + "` of component `" + B + "` has invalid PropType notation inside objectOf.");
        var L = ee[Z], D = F(L);
        if (D !== "object")
          return new m("Invalid " + J + " `" + N + "` of type " + ("`" + D + "` supplied to `" + B + "`, expected an object."));
        for (var q in L)
          if (n(L, q)) {
            var Q = _(L, q, B, J, N + "." + q, r);
            if (Q instanceof Error)
              return Q;
          }
        return null;
      }
      return v(k);
    }
    function V(_) {
      if (!Array.isArray(_))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var k = 0; k < _.length; k++) {
        var ee = _[k];
        if (typeof ee != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + te(ee) + " at index " + k + "."
          ), a;
      }
      function Z(B, J, N, L, D) {
        for (var q = [], Q = 0; Q < _.length; Q++) {
          var ae = _[Q], j = ae(B, J, N, L, D, r);
          if (j == null)
            return null;
          j.data && n(j.data, "expectedType") && q.push(j.data.expectedType);
        }
        var Ce = q.length > 0 ? ", expected one of type [" + q.join(", ") + "]" : "";
        return new m("Invalid " + L + " `" + D + "` supplied to " + ("`" + N + "`" + Ce + "."));
      }
      return v(Z);
    }
    function A() {
      function _(k, ee, Z, B, J) {
        return G(k[ee]) ? null : new m("Invalid " + B + " `" + J + "` supplied to " + ("`" + Z + "`, expected a ReactNode."));
      }
      return v(_);
    }
    function z(_, k, ee, Z, B) {
      return new m(
        (_ || "React class") + ": " + k + " type `" + ee + "." + Z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + B + "`."
      );
    }
    function K(_) {
      function k(ee, Z, B, J, N) {
        var L = ee[Z], D = F(L);
        if (D !== "object")
          return new m("Invalid " + J + " `" + N + "` of type `" + D + "` " + ("supplied to `" + B + "`, expected `object`."));
        for (var q in _) {
          var Q = _[q];
          if (typeof Q != "function")
            return z(B, J, N, q, X(Q));
          var ae = Q(L, q, B, J, N + "." + q, r);
          if (ae)
            return ae;
        }
        return null;
      }
      return v(k);
    }
    function W(_) {
      function k(ee, Z, B, J, N) {
        var L = ee[Z], D = F(L);
        if (D !== "object")
          return new m("Invalid " + J + " `" + N + "` of type `" + D + "` " + ("supplied to `" + B + "`, expected `object`."));
        var q = t({}, ee[Z], _);
        for (var Q in q) {
          var ae = _[Q];
          if (n(_, Q) && typeof ae != "function")
            return z(B, J, N, Q, X(ae));
          if (!ae)
            return new m(
              "Invalid " + J + " `" + N + "` key `" + Q + "` supplied to `" + B + "`.\nBad object: " + JSON.stringify(ee[Z], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(_), null, "  ")
            );
          var j = ae(L, Q, B, J, N + "." + Q, r);
          if (j)
            return j;
        }
        return null;
      }
      return v(k);
    }
    function G(_) {
      switch (typeof _) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !_;
        case "object":
          if (Array.isArray(_))
            return _.every(G);
          if (_ === null || l(_))
            return !0;
          var k = d(_);
          if (k) {
            var ee = k.call(_), Z;
            if (k !== _.entries) {
              for (; !(Z = ee.next()).done; )
                if (!G(Z.value))
                  return !1;
            } else
              for (; !(Z = ee.next()).done; ) {
                var B = Z.value;
                if (B && !G(B[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Y(_, k) {
      return _ === "symbol" ? !0 : k ? k["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && k instanceof Symbol : !1;
    }
    function F(_) {
      var k = typeof _;
      return Array.isArray(_) ? "array" : _ instanceof RegExp ? "object" : Y(k, _) ? "symbol" : k;
    }
    function X(_) {
      if (typeof _ > "u" || _ === null)
        return "" + _;
      var k = F(_);
      if (k === "object") {
        if (_ instanceof Date)
          return "date";
        if (_ instanceof RegExp)
          return "regexp";
      }
      return k;
    }
    function te(_) {
      var k = X(_);
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
    function re(_) {
      return !_.constructor || !_.constructor.name ? p : _.constructor.name;
    }
    return g.checkPropTypes = o, g.resetWarningCache = o.resetWarningCache, g.PropTypes = g, g;
  }, Po;
}
var $o, Es;
function Ku() {
  if (Es)
    return $o;
  Es = 1;
  var e = ci();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, $o = function() {
    function n(a, l, c, u, f, d) {
      if (d !== e) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
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
  }, $o;
}
if (process.env.NODE_ENV !== "production") {
  var Xu = oi(), Ju = !0;
  Fo.exports = Gu()(Xu.isElement, Ju);
} else
  Fo.exports = Ku()();
var Zu = Fo.exports;
const s = /* @__PURE__ */ va(Zu);
let Bo;
typeof document == "object" && (Bo = Sa({
  key: "css",
  prepend: !0
}));
function Ia(e) {
  const {
    injectFirst: t,
    children: r
  } = e;
  return t && Bo ? /* @__PURE__ */ P.jsx(ju, {
    value: Bo,
    children: r
  }) : r;
}
process.env.NODE_ENV !== "production" && (Ia.propTypes = {
  /**
   * Your component tree.
   */
  children: s.node,
  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you want to override MUI's styles, set this prop.
   */
  injectFirst: s.bool
});
function Qu(e) {
  return e == null || Object.keys(e).length === 0;
}
function Da(e) {
  const {
    styles: t,
    defaultTheme: r = {}
  } = e, n = typeof t == "function" ? (o) => t(Qu(o) ? r : o) : t;
  return /* @__PURE__ */ P.jsx(ka, {
    styles: n
  });
}
process.env.NODE_ENV !== "production" && (Da.propTypes = {
  defaultTheme: s.object,
  styles: s.oneOfType([s.array, s.string, s.object, s.func])
});
/**
 * @mui/styled-engine v5.15.14
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function La(e, t) {
  const r = Wo(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
const ef = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, tf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GlobalStyles: Da,
  StyledEngineProvider: Ia,
  ThemeContext: Vt,
  css: Ma,
  default: La,
  internal_processStyles: ef,
  keyframes: io
}, Symbol.toStringTag, { value: "Module" }));
function Dt(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Va(e) {
  if (!Dt(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = Va(e[r]);
  }), t;
}
function Ot(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? O({}, e) : e;
  return Dt(e) && Dt(t) && Object.keys(t).forEach((o) => {
    o !== "__proto__" && (Dt(t[o]) && o in e && Dt(e[o]) ? n[o] = Ot(e[o], t[o], r) : r.clone ? n[o] = Dt(t[o]) ? Va(t[o]) : t[o] : n[o] = t[o]);
  }), n;
}
const rf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ot,
  isPlainObject: Dt
}, Symbol.toStringTag, { value: "Module" })), nf = ["values", "unit", "step"], of = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => O({}, r, {
    [n.key]: n.val
  }), {});
};
function za(e) {
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
  } = e, o = de(e, nf), i = of(t), a = Object.keys(i);
  function l(p) {
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${r})`;
  }
  function c(p) {
    return `@media (max-width:${(typeof t[p] == "number" ? t[p] : p) - n / 100}${r})`;
  }
  function u(p, g) {
    const y = a.indexOf(g);
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${r}) and (max-width:${(y !== -1 && typeof t[a[y]] == "number" ? t[a[y]] : g) - n / 100}${r})`;
  }
  function f(p) {
    return a.indexOf(p) + 1 < a.length ? u(p, a[a.indexOf(p) + 1]) : l(p);
  }
  function d(p) {
    const g = a.indexOf(p);
    return g === 0 ? l(a[1]) : g === a.length - 1 ? c(a[g]) : u(p, a[a.indexOf(p) + 1]).replace("@media", "@media not all and");
  }
  return O({
    keys: a,
    values: i,
    up: l,
    down: c,
    between: u,
    only: f,
    not: d,
    unit: r
  }, o);
}
const sf = {
  borderRadius: 4
}, af = sf, lf = process.env.NODE_ENV !== "production" ? s.oneOfType([s.number, s.string, s.object, s.array]) : {}, zt = lf;
function Br(e, t) {
  return t ? Ot(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const ui = {
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
}, Os = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${ui[e]}px)`
};
function _t(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || Os;
    return t.reduce((a, l, c) => (a[i.up(i.keys[c])] = r(t[c]), a), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || Os;
    return Object.keys(t).reduce((a, l) => {
      if (Object.keys(i.values || ui).indexOf(l) !== -1) {
        const c = i.up(l);
        a[c] = r(t[l], l);
      } else {
        const c = l;
        a[c] = t[c];
      }
      return a;
    }, {});
  }
  return r(t);
}
function cf(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function uf(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function oe(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Hr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const ff = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: oe
}, Symbol.toStringTag, { value: "Module" }));
function so(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function Ln(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = so(e, r) || n, t && (o = t(o, n, e)), o;
}
function Re(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (a) => {
    if (a[t] == null)
      return null;
    const l = a[t], c = a.theme, u = so(c, n) || {};
    return _t(a, l, (d) => {
      let p = Ln(u, o, d);
      return d === p && typeof d == "string" && (p = Ln(u, o, `${t}${d === "default" ? "" : oe(d)}`, d)), r === !1 ? p : {
        [r]: p
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: zt
  } : {}, i.filterProps = [t], i;
}
function df(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const pf = {
  m: "margin",
  p: "padding"
}, mf = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Ts = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, hf = df((e) => {
  if (e.length > 2)
    if (Ts[e])
      e = Ts[e];
    else
      return [e];
  const [t, r] = e.split(""), n = pf[t], o = mf[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), ao = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], lo = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], vf = [...ao, ...lo];
function rn(e, t, r, n) {
  var o;
  const i = (o = so(e, t, !1)) != null ? o : r;
  return typeof i == "number" ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && typeof a != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${a}.`), i * a) : Array.isArray(i) ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > i.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${a} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), i[a]) : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Wa(e) {
  return rn(e, "spacing", 8, "spacing");
}
function nn(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const r = Math.abs(t), n = e(r);
  return t >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function gf(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = nn(t, r), n), {});
}
function yf(e, t, r, n) {
  if (t.indexOf(r) === -1)
    return null;
  const o = hf(r), i = gf(o, n), a = e[r];
  return _t(e, a, i);
}
function Fa(e, t) {
  const r = Wa(e.theme);
  return Object.keys(e).map((n) => yf(e, t, n, r)).reduce(Br, {});
}
function we(e) {
  return Fa(e, ao);
}
we.propTypes = process.env.NODE_ENV !== "production" ? ao.reduce((e, t) => (e[t] = zt, e), {}) : {};
we.filterProps = ao;
function Se(e) {
  return Fa(e, lo);
}
Se.propTypes = process.env.NODE_ENV !== "production" ? lo.reduce((e, t) => (e[t] = zt, e), {}) : {};
Se.filterProps = lo;
process.env.NODE_ENV !== "production" && vf.reduce((e, t) => (e[t] = zt, e), {});
function bf(e = 8) {
  if (e.mui)
    return e;
  const t = Wa({
    spacing: e
  }), r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const a = t(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return r.mui = !0, r;
}
function co(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? Br(o, t[i](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function ct(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function mt(e, t) {
  return Re({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const xf = mt("border", ct), Ef = mt("borderTop", ct), Of = mt("borderRight", ct), Tf = mt("borderBottom", ct), wf = mt("borderLeft", ct), Sf = mt("borderColor"), Cf = mt("borderTopColor"), Rf = mt("borderRightColor"), _f = mt("borderBottomColor"), Pf = mt("borderLeftColor"), $f = mt("outline", ct), Nf = mt("outlineColor"), uo = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = rn(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: nn(t, n)
    });
    return _t(e, e.borderRadius, r);
  }
  return null;
};
uo.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: zt
} : {};
uo.filterProps = ["borderRadius"];
co(xf, Ef, Of, Tf, wf, Sf, Cf, Rf, _f, Pf, uo, $f, Nf);
const fo = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = rn(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: nn(t, n)
    });
    return _t(e, e.gap, r);
  }
  return null;
};
fo.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: zt
} : {};
fo.filterProps = ["gap"];
const po = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = rn(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: nn(t, n)
    });
    return _t(e, e.columnGap, r);
  }
  return null;
};
po.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: zt
} : {};
po.filterProps = ["columnGap"];
const mo = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = rn(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: nn(t, n)
    });
    return _t(e, e.rowGap, r);
  }
  return null;
};
mo.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: zt
} : {};
mo.filterProps = ["rowGap"];
const jf = Re({
  prop: "gridColumn"
}), kf = Re({
  prop: "gridRow"
}), Mf = Re({
  prop: "gridAutoFlow"
}), Af = Re({
  prop: "gridAutoColumns"
}), If = Re({
  prop: "gridAutoRows"
}), Df = Re({
  prop: "gridTemplateColumns"
}), Lf = Re({
  prop: "gridTemplateRows"
}), Vf = Re({
  prop: "gridTemplateAreas"
}), zf = Re({
  prop: "gridArea"
});
co(fo, po, mo, jf, kf, Mf, Af, If, Df, Lf, Vf, zf);
function yr(e, t) {
  return t === "grey" ? t : e;
}
const Wf = Re({
  prop: "color",
  themeKey: "palette",
  transform: yr
}), Ff = Re({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: yr
}), Bf = Re({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: yr
});
co(Wf, Ff, Bf);
function Ze(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Uf = Re({
  prop: "width",
  transform: Ze
}), fi = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var n, o;
      const i = ((n = e.theme) == null || (n = n.breakpoints) == null || (n = n.values) == null ? void 0 : n[r]) || ui[r];
      return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: Ze(r)
      };
    };
    return _t(e, e.maxWidth, t);
  }
  return null;
};
fi.filterProps = ["maxWidth"];
const qf = Re({
  prop: "minWidth",
  transform: Ze
}), Yf = Re({
  prop: "height",
  transform: Ze
}), Hf = Re({
  prop: "maxHeight",
  transform: Ze
}), Gf = Re({
  prop: "minHeight",
  transform: Ze
});
Re({
  prop: "size",
  cssProperty: "width",
  transform: Ze
});
Re({
  prop: "size",
  cssProperty: "height",
  transform: Ze
});
const Kf = Re({
  prop: "boxSizing"
});
co(Uf, fi, qf, Yf, Hf, Gf, Kf);
const Xf = {
  // borders
  border: {
    themeKey: "borders",
    transform: ct
  },
  borderTop: {
    themeKey: "borders",
    transform: ct
  },
  borderRight: {
    themeKey: "borders",
    transform: ct
  },
  borderBottom: {
    themeKey: "borders",
    transform: ct
  },
  borderLeft: {
    themeKey: "borders",
    transform: ct
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
    transform: ct
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: uo
  },
  // palette
  color: {
    themeKey: "palette",
    transform: yr
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: yr
  },
  backgroundColor: {
    themeKey: "palette",
    transform: yr
  },
  // spacing
  p: {
    style: Se
  },
  pt: {
    style: Se
  },
  pr: {
    style: Se
  },
  pb: {
    style: Se
  },
  pl: {
    style: Se
  },
  px: {
    style: Se
  },
  py: {
    style: Se
  },
  padding: {
    style: Se
  },
  paddingTop: {
    style: Se
  },
  paddingRight: {
    style: Se
  },
  paddingBottom: {
    style: Se
  },
  paddingLeft: {
    style: Se
  },
  paddingX: {
    style: Se
  },
  paddingY: {
    style: Se
  },
  paddingInline: {
    style: Se
  },
  paddingInlineStart: {
    style: Se
  },
  paddingInlineEnd: {
    style: Se
  },
  paddingBlock: {
    style: Se
  },
  paddingBlockStart: {
    style: Se
  },
  paddingBlockEnd: {
    style: Se
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
    style: fo
  },
  rowGap: {
    style: mo
  },
  columnGap: {
    style: po
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
    transform: Ze
  },
  maxWidth: {
    style: fi
  },
  minWidth: {
    transform: Ze
  },
  height: {
    transform: Ze
  },
  maxHeight: {
    transform: Ze
  },
  minHeight: {
    transform: Ze
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
}, on = Xf;
function Jf(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function Zf(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ba() {
  function e(r, n, o, i) {
    const a = {
      [r]: n,
      theme: o
    }, l = i[r];
    if (!l)
      return {
        [r]: n
      };
    const {
      cssProperty: c = r,
      themeKey: u,
      transform: f,
      style: d
    } = l;
    if (n == null)
      return null;
    if (u === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const p = so(o, u) || {};
    return d ? d(a) : _t(a, n, (y) => {
      let m = Ln(p, f, y);
      return y === m && typeof y == "string" && (m = Ln(p, f, `${r}${y === "default" ? "" : oe(y)}`, y)), c === !1 ? m : {
        [c]: m
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
    const a = (n = i.unstable_sxConfig) != null ? n : on;
    function l(c) {
      let u = c;
      if (typeof c == "function")
        u = c(i);
      else if (typeof c != "object")
        return c;
      if (!u)
        return null;
      const f = cf(i.breakpoints), d = Object.keys(f);
      let p = f;
      return Object.keys(u).forEach((g) => {
        const y = Zf(u[g], i);
        if (y != null)
          if (typeof y == "object")
            if (a[g])
              p = Br(p, e(g, y, i, a));
            else {
              const m = _t({
                theme: i
              }, y, (v) => ({
                [g]: v
              }));
              Jf(m, y) ? p[g] = t({
                sx: y,
                theme: i
              }) : p = Br(p, m);
            }
          else
            p = Br(p, e(g, y, i, a));
      }), uf(d, p);
    }
    return Array.isArray(o) ? o.map(l) : l(o);
  }
  return t;
}
const sn = Ba();
sn.filterProps = ["sx"];
function Ua(e, t) {
  const r = this;
  return r.vars && typeof r.getColorSchemeSelector == "function" ? {
    [r.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : r.palette.mode === e ? t : {};
}
const Qf = ["breakpoints", "palette", "spacing", "shape"];
function di(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {}
  } = e, a = de(e, Qf), l = za(r), c = bf(o);
  let u = Ot({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: O({
      mode: "light"
    }, n),
    spacing: c,
    shape: O({}, af, i)
  }, a);
  return u.applyStyles = Ua, u = t.reduce((f, d) => Ot(f, d), u), u.unstable_sxConfig = O({}, on, a == null ? void 0 : a.unstable_sxConfig), u.unstable_sx = function(d) {
    return sn({
      sx: d,
      theme: this
    });
  }, u;
}
const ed = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: di,
  private_createBreakpoints: za,
  unstable_applyStyles: Ua
}, Symbol.toStringTag, { value: "Module" }));
function td(e) {
  return Object.keys(e).length === 0;
}
function qa(e = null) {
  const t = x.useContext(Vt);
  return !t || td(t) ? e : t;
}
const rd = di();
function pi(e = rd) {
  return qa(e);
}
const nd = ["sx"], od = (e) => {
  var t, r;
  const n = {
    systemProps: {},
    otherProps: {}
  }, o = (t = e == null || (r = e.theme) == null ? void 0 : r.unstable_sxConfig) != null ? t : on;
  return Object.keys(e).forEach((i) => {
    o[i] ? n.systemProps[i] = e[i] : n.otherProps[i] = e[i];
  }), n;
};
function mi(e) {
  const {
    sx: t
  } = e, r = de(e, nd), {
    systemProps: n,
    otherProps: o
  } = od(r);
  let i;
  return Array.isArray(t) ? i = [n, ...t] : typeof t == "function" ? i = (...a) => {
    const l = t(...a);
    return Dt(l) ? O({}, n, l) : n;
  } : i = O({}, n, t), O({}, o, {
    sx: i
  });
}
const id = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: sn,
  extendSxProp: mi,
  unstable_createStyleFunctionSx: Ba,
  unstable_defaultSxConfig: on
}, Symbol.toStringTag, { value: "Module" })), ws = (e) => e, sd = () => {
  let e = ws;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = ws;
    }
  };
}, ad = sd(), hi = ad;
function Ya(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (r = Ya(e[t])) && (n && (n += " "), n += r);
    } else
      for (r in e)
        e[r] && (n && (n += " "), n += r);
  return n;
}
function fe() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)
    (e = arguments[r]) && (t = Ya(e)) && (n && (n += " "), n += t);
  return n;
}
const ld = ["className", "component"];
function cd(e = {}) {
  const {
    themeId: t,
    defaultTheme: r,
    defaultClassName: n = "MuiBox-root",
    generateClassName: o
  } = e, i = La("div", {
    shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as"
  })(sn);
  return /* @__PURE__ */ x.forwardRef(function(c, u) {
    const f = pi(r), d = mi(c), {
      className: p,
      component: g = "div"
    } = d, y = de(d, ld);
    return /* @__PURE__ */ P.jsx(i, O({
      as: g,
      ref: u,
      className: fe(p, o ? o(n) : n),
      theme: t && f[t] || f
    }, y));
  });
}
const Ha = {
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
  const n = Ha[t];
  return n ? `${r}-${n}` : `${hi.generate(e)}-${t}`;
}
function ze(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = Ve(e, o, r);
  }), n;
}
var Uo = { exports: {} }, ye = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ss;
function ud() {
  if (Ss)
    return ye;
  Ss = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), y;
  y = Symbol.for("react.module.reference");
  function m(v) {
    if (typeof v == "object" && v !== null) {
      var E = v.$$typeof;
      switch (E) {
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
                case l:
                case a:
                case c:
                case p:
                case d:
                case i:
                  return v;
                default:
                  return E;
              }
          }
        case t:
          return E;
      }
    }
  }
  return ye.ContextConsumer = a, ye.ContextProvider = i, ye.Element = e, ye.ForwardRef = c, ye.Fragment = r, ye.Lazy = p, ye.Memo = d, ye.Portal = t, ye.Profiler = o, ye.StrictMode = n, ye.Suspense = u, ye.SuspenseList = f, ye.isAsyncMode = function() {
    return !1;
  }, ye.isConcurrentMode = function() {
    return !1;
  }, ye.isContextConsumer = function(v) {
    return m(v) === a;
  }, ye.isContextProvider = function(v) {
    return m(v) === i;
  }, ye.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === e;
  }, ye.isForwardRef = function(v) {
    return m(v) === c;
  }, ye.isFragment = function(v) {
    return m(v) === r;
  }, ye.isLazy = function(v) {
    return m(v) === p;
  }, ye.isMemo = function(v) {
    return m(v) === d;
  }, ye.isPortal = function(v) {
    return m(v) === t;
  }, ye.isProfiler = function(v) {
    return m(v) === o;
  }, ye.isStrictMode = function(v) {
    return m(v) === n;
  }, ye.isSuspense = function(v) {
    return m(v) === u;
  }, ye.isSuspenseList = function(v) {
    return m(v) === f;
  }, ye.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === r || v === o || v === n || v === u || v === f || v === g || typeof v == "object" && v !== null && (v.$$typeof === p || v.$$typeof === d || v.$$typeof === i || v.$$typeof === a || v.$$typeof === c || v.$$typeof === y || v.getModuleId !== void 0);
  }, ye.typeOf = m, ye;
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
var Cs;
function fd() {
  return Cs || (Cs = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), y = !1, m = !1, v = !1, E = !1, S = !1, C;
    C = Symbol.for("react.module.reference");
    function T(U) {
      return !!(typeof U == "string" || typeof U == "function" || U === r || U === o || S || U === n || U === u || U === f || E || U === g || y || m || v || typeof U == "object" && U !== null && (U.$$typeof === p || U.$$typeof === d || U.$$typeof === i || U.$$typeof === a || U.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      U.$$typeof === C || U.getModuleId !== void 0));
    }
    function b(U) {
      if (typeof U == "object" && U !== null) {
        var Oe = U.$$typeof;
        switch (Oe) {
          case e:
            var je = U.type;
            switch (je) {
              case r:
              case o:
              case n:
              case u:
              case f:
                return je;
              default:
                var nt = je && je.$$typeof;
                switch (nt) {
                  case l:
                  case a:
                  case c:
                  case p:
                  case d:
                  case i:
                    return nt;
                  default:
                    return Oe;
                }
            }
          case t:
            return Oe;
        }
      }
    }
    var w = a, R = i, I = e, V = c, A = r, z = p, K = d, W = t, G = o, Y = n, F = u, X = f, te = !1, re = !1;
    function _(U) {
      return te || (te = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function k(U) {
      return re || (re = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ee(U) {
      return b(U) === a;
    }
    function Z(U) {
      return b(U) === i;
    }
    function B(U) {
      return typeof U == "object" && U !== null && U.$$typeof === e;
    }
    function J(U) {
      return b(U) === c;
    }
    function N(U) {
      return b(U) === r;
    }
    function L(U) {
      return b(U) === p;
    }
    function D(U) {
      return b(U) === d;
    }
    function q(U) {
      return b(U) === t;
    }
    function Q(U) {
      return b(U) === o;
    }
    function ae(U) {
      return b(U) === n;
    }
    function j(U) {
      return b(U) === u;
    }
    function Ce(U) {
      return b(U) === f;
    }
    be.ContextConsumer = w, be.ContextProvider = R, be.Element = I, be.ForwardRef = V, be.Fragment = A, be.Lazy = z, be.Memo = K, be.Portal = W, be.Profiler = G, be.StrictMode = Y, be.Suspense = F, be.SuspenseList = X, be.isAsyncMode = _, be.isConcurrentMode = k, be.isContextConsumer = ee, be.isContextProvider = Z, be.isElement = B, be.isForwardRef = J, be.isFragment = N, be.isLazy = L, be.isMemo = D, be.isPortal = q, be.isProfiler = Q, be.isStrictMode = ae, be.isSuspense = j, be.isSuspenseList = Ce, be.isValidElementType = T, be.typeOf = b;
  }()), be;
}
process.env.NODE_ENV === "production" ? Uo.exports = ud() : Uo.exports = fd();
var Rs = Uo.exports;
const dd = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function Ga(e) {
  const t = `${e}`.match(dd);
  return t && t[1] || "";
}
function Ka(e, t = "") {
  return e.displayName || e.name || Ga(e) || t;
}
function _s(e, t, r) {
  const n = Ka(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function pd(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Ka(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Rs.ForwardRef:
          return _s(e, e.render, "ForwardRef");
        case Rs.Memo:
          return _s(e, e.type, "memo");
        default:
          return;
      }
  }
}
const md = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pd,
  getFunctionName: Ga
}, Symbol.toStringTag, { value: "Module" }));
function Xa(e, t) {
  const r = O({}, t);
  return Object.keys(e).forEach((n) => {
    if (n.toString().match(/^(components|slots)$/))
      r[n] = O({}, e[n], r[n]);
    else if (n.toString().match(/^(componentsProps|slotProps)$/)) {
      const o = e[n] || {}, i = t[n];
      r[n] = {}, !i || !Object.keys(i) ? r[n] = o : !o || !Object.keys(o) ? r[n] = i : (r[n] = O({}, i), Object.keys(o).forEach((a) => {
        r[n][a] = Xa(o[a], i[a]);
      }));
    } else
      r[n] === void 0 && (r[n] = e[n]);
  }), r;
}
function hd(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  return !t || !t.components || !t.components[r] || !t.components[r].defaultProps ? n : Xa(t.components[r].defaultProps, n);
}
function vd({
  props: e,
  name: t,
  defaultTheme: r,
  themeId: n
}) {
  let o = pi(r);
  return n && (o = o[n] || o), hd({
    theme: o,
    name: t,
    props: e
  });
}
const Zt = typeof window < "u" ? x.useLayoutEffect : x.useEffect;
function gd(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
const yd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: gd
}, Symbol.toStringTag, { value: "Module" }));
function an(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function bd(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Ja(e, t, r, n, o) {
  const i = e[t], a = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  const c = i.type;
  return typeof c == "function" && !bd(c) && (l = "Did you accidentally use a plain function component for an element instead?"), l !== void 0 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Za = an(s.element, Ja);
Za.isRequired = an(s.element.isRequired, Ja);
const Qa = Za;
function xd(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Ed(e, t, r, n, o) {
  const i = e[t], a = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof i == "function" && !xd(i) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const el = an(s.elementType, Ed), Od = "exact-prop: ​";
function gi(e) {
  return process.env.NODE_ENV === "production" ? e : O({}, e, {
    [Od]: (t) => {
      const r = Object.keys(t).filter((n) => !e.hasOwnProperty(n));
      return r.length > 0 ? new Error(`The following props are not supported: ${r.map((n) => `\`${n}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
function Jr(e, t, r, n, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = e[t], a = o || t;
  return i == null ? null : i && i.nodeType !== 1 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an HTMLElement.`) : null;
}
const Td = s.oneOfType([s.func, s.object]), yi = Td;
function wd(...e) {
  return e.reduce((t, r) => r == null ? t : function(...o) {
    t.apply(this, o), r.apply(this, o);
  }, () => {
  });
}
function Sd(e, t = 166) {
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
function Cd(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : (r, n, o, i, a) => {
    const l = o || "<<anonymous>>", c = a || n;
    return typeof r[n] < "u" ? new Error(`The ${i} \`${c}\` of \`${l}\` is deprecated. ${t}`) : null;
  };
}
function Rd(e, t) {
  var r, n;
  return /* @__PURE__ */ x.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    (r = e.type.muiName) != null ? r : (n = e.type) == null || (n = n._payload) == null || (n = n.value) == null ? void 0 : n.muiName
  ) !== -1;
}
function Vn(e) {
  return e && e.ownerDocument || document;
}
function _d(e) {
  return Vn(e).defaultView || window;
}
function Pd(e, t) {
  if (process.env.NODE_ENV === "production")
    return () => null;
  const r = t ? O({}, t.propTypes) : null;
  return (o) => (i, a, l, c, u, ...f) => {
    const d = u || a, p = r == null ? void 0 : r[d];
    if (p) {
      const g = p(i, a, l, c, u, ...f);
      if (g)
        return g;
    }
    return typeof i[a] < "u" && !i[o] ? new Error(`The prop \`${d}\` of \`${e}\` can only be used together with the \`${o}\` prop.`) : null;
  };
}
function zn(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let Ps = 0;
function $d(e) {
  const [t, r] = x.useState(e), n = e || t;
  return x.useEffect(() => {
    t == null && (Ps += 1, r(`mui-${Ps}`));
  }, [t]), n;
}
const $s = x.useId;
function tl(e) {
  if ($s !== void 0) {
    const t = $s();
    return e ?? t;
  }
  return $d(e);
}
function rl(e, t, r, n, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = o || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${i}\` is not supported. Please remove it.`) : null;
}
function nl({
  controlled: e,
  default: t,
  name: r,
  state: n = "value"
}) {
  const {
    current: o
  } = x.useRef(e !== void 0), [i, a] = x.useState(t), l = o ? e : i;
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
  const c = x.useCallback((u) => {
    o || a(u);
  }, []);
  return [l, c];
}
function Gt(e) {
  const t = x.useRef(e);
  return Zt(() => {
    t.current = e;
  }), x.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function tt(...e) {
  return x.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      zn(r, t);
    });
  }, e);
}
const Ns = {};
function Nd(e, t) {
  const r = x.useRef(Ns);
  return r.current === Ns && (r.current = e(t)), r;
}
const jd = [];
function kd(e) {
  x.useEffect(e, jd);
}
class ln {
  constructor() {
    this.currentId = null, this.clear = () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    }, this.disposeEffect = () => this.clear;
  }
  static create() {
    return new ln();
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
function Kt() {
  const e = Nd(ln.create).current;
  return kd(e.disposeEffect), e;
}
let ho = !0, qo = !1;
const Md = new ln(), Ad = {
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
function Id(e) {
  const {
    type: t,
    tagName: r
  } = e;
  return !!(r === "INPUT" && Ad[t] && !e.readOnly || r === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function Dd(e) {
  e.metaKey || e.altKey || e.ctrlKey || (ho = !0);
}
function No() {
  ho = !1;
}
function Ld() {
  this.visibilityState === "hidden" && qo && (ho = !0);
}
function Vd(e) {
  e.addEventListener("keydown", Dd, !0), e.addEventListener("mousedown", No, !0), e.addEventListener("pointerdown", No, !0), e.addEventListener("touchstart", No, !0), e.addEventListener("visibilitychange", Ld, !0);
}
function zd(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return ho || Id(t);
}
function bi() {
  const e = x.useCallback((o) => {
    o != null && Vd(o.ownerDocument);
  }, []), t = x.useRef(!1);
  function r() {
    return t.current ? (qo = !0, Md.start(100, () => {
      qo = !1;
    }), t.current = !1, !0) : !1;
  }
  function n(o) {
    return zd(o) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: n,
    onBlur: r,
    ref: e
  };
}
function Ge(e, t, r = void 0) {
  const n = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (o) => {
      n[o] = e[o].reduce((i, a) => {
        if (a) {
          const l = t(a);
          l !== "" && i.push(l), r && r[a] && i.push(r[a]);
        }
        return i;
      }, []).join(" ");
    }
  ), n;
}
const ol = /* @__PURE__ */ x.createContext(null);
process.env.NODE_ENV !== "production" && (ol.displayName = "ThemeContext");
const il = ol;
function sl() {
  const e = x.useContext(il);
  return process.env.NODE_ENV !== "production" && x.useDebugValue(e), e;
}
const Wd = typeof Symbol == "function" && Symbol.for, Fd = Wd ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Bd(e, t) {
  if (typeof t == "function") {
    const r = t(e);
    return process.env.NODE_ENV !== "production" && (r || console.error(["MUI: You should return an object from your theme function, i.e.", "<ThemeProvider theme={() => ({})} />"].join(`
`))), r;
  }
  return O({}, e, t);
}
function Wn(e) {
  const {
    children: t,
    theme: r
  } = e, n = sl();
  process.env.NODE_ENV !== "production" && n === null && typeof r == "function" && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const o = x.useMemo(() => {
    const i = n === null ? r : Bd(n, r);
    return i != null && (i[Fd] = n !== null), i;
  }, [r, n]);
  return /* @__PURE__ */ P.jsx(il.Provider, {
    value: o,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (Wn.propTypes = {
  /**
   * Your component tree.
   */
  children: s.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: s.oneOfType([s.object, s.func]).isRequired
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (Wn.propTypes = gi(Wn.propTypes));
const Ud = ["value"], al = /* @__PURE__ */ x.createContext();
function ll(e) {
  let {
    value: t
  } = e, r = de(e, Ud);
  return /* @__PURE__ */ P.jsx(al.Provider, O({
    value: t ?? !0
  }, r));
}
process.env.NODE_ENV !== "production" && (ll.propTypes = {
  children: s.node,
  value: s.bool
});
const qd = () => {
  const e = x.useContext(al);
  return e ?? !1;
}, js = {};
function ks(e, t, r, n = !1) {
  return x.useMemo(() => {
    const o = e && t[e] || t;
    if (typeof r == "function") {
      const i = r(o), a = e ? O({}, t, {
        [e]: i
      }) : i;
      return n ? () => a : a;
    }
    return e ? O({}, t, {
      [e]: r
    }) : O({}, t, r);
  }, [e, t, r, n]);
}
function Fn(e) {
  const {
    children: t,
    theme: r,
    themeId: n
  } = e, o = qa(js), i = sl() || js;
  process.env.NODE_ENV !== "production" && (o === null && typeof r == "function" || n && o && !o[n] && typeof r == "function") && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const a = ks(n, o, r), l = ks(n, i, r, !0), c = a.direction === "rtl";
  return /* @__PURE__ */ P.jsx(Wn, {
    theme: l,
    children: /* @__PURE__ */ P.jsx(Vt.Provider, {
      value: a,
      children: /* @__PURE__ */ P.jsx(ll, {
        value: c,
        children: t
      })
    })
  });
}
process.env.NODE_ENV !== "production" && (Fn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Your component tree.
   */
  children: s.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: s.oneOfType([s.func, s.object]).isRequired,
  /**
   * The design system's unique id for getting the corresponded theme when there are multiple design systems.
   */
  themeId: s.string
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (Fn.propTypes = gi(Fn.propTypes));
function Yd(e, t) {
  return O({
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
var _e = {}, cl = { exports: {} };
(function(e) {
  function t(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(cl);
var Rr = cl.exports;
const Hd = /* @__PURE__ */ $t(kc), Gd = /* @__PURE__ */ $t(yd);
var ul = Rr;
Object.defineProperty(_e, "__esModule", {
  value: !0
});
var Ne = _e.alpha = ml;
_e.blend = sp;
_e.colorChannel = void 0;
var Kd = _e.darken = Ei;
_e.decomposeColor = ft;
_e.emphasize = hl;
var Ms = _e.getContrastRatio = tp;
_e.getLuminance = Bn;
_e.hexToRgb = fl;
_e.hslToRgb = pl;
var Xd = _e.lighten = Oi;
_e.private_safeAlpha = rp;
_e.private_safeColorChannel = void 0;
_e.private_safeDarken = np;
_e.private_safeEmphasize = ip;
_e.private_safeLighten = op;
_e.recomposeColor = _r;
_e.rgbToHex = ep;
var As = ul(Hd), Jd = ul(Gd);
function xi(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), (0, Jd.default)(e, t, r);
}
function fl(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Zd(e) {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function ft(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return ft(fl(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(r) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : (0, As.default)(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : (0, As.default)(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const dl = (e) => {
  const t = ft(e);
  return t.values.slice(0, 3).map((r, n) => t.type.indexOf("hsl") !== -1 && n !== 0 ? `${r}%` : r).join(" ");
};
_e.colorChannel = dl;
const Qd = (e, t) => {
  try {
    return dl(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
_e.private_safeColorChannel = Qd;
function _r(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.indexOf("rgb") !== -1 ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.indexOf("color") !== -1 ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function ep(e) {
  if (e.indexOf("#") === 0)
    return e;
  const {
    values: t
  } = ft(e);
  return `#${t.map((r, n) => Zd(n === 3 ? Math.round(255 * r) : r)).join("")}`;
}
function pl(e) {
  e = ft(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), a = (u, f = (u + r / 30) % 12) => o - i * Math.max(Math.min(f - 3, 9 - f, 1), -1);
  let l = "rgb";
  const c = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (l += "a", c.push(t[3])), _r({
    type: l,
    values: c
  });
}
function Bn(e) {
  e = ft(e);
  let t = e.type === "hsl" || e.type === "hsla" ? ft(pl(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function tp(e, t) {
  const r = Bn(e), n = Bn(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function ml(e, t) {
  return e = ft(e), t = xi(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, _r(e);
}
function rp(e, t, r) {
  try {
    return ml(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Ei(e, t) {
  if (e = ft(e), t = xi(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return _r(e);
}
function np(e, t, r) {
  try {
    return Ei(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Oi(e, t) {
  if (e = ft(e), t = xi(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return _r(e);
}
function op(e, t, r) {
  try {
    return Oi(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function hl(e, t = 0.15) {
  return Bn(e) > 0.5 ? Ei(e, t) : Oi(e, t);
}
function ip(e, t, r) {
  try {
    return hl(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function sp(e, t, r, n = 1) {
  const o = (c, u) => Math.round((c ** (1 / n) * (1 - r) + u ** (1 / n) * r) ** n), i = ft(e), a = ft(t), l = [o(i.values[0], a.values[0]), o(i.values[1], a.values[1]), o(i.values[2], a.values[2])];
  return _r({
    type: "rgb",
    values: l
  });
}
const ap = ["mode", "contrastThreshold", "tonalOffset"], Is = {
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
    paper: Yr.white,
    default: Yr.white
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
}, jo = {
  text: {
    primary: Yr.white,
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
    active: Yr.white,
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
function Ds(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = Xd(e.main, o) : t === "dark" && (e.dark = Kd(e.main, i)));
}
function lp(e = "light") {
  return e === "dark" ? {
    main: cr[200],
    light: cr[50],
    dark: cr[400]
  } : {
    main: cr[700],
    light: cr[400],
    dark: cr[800]
  };
}
function cp(e = "light") {
  return e === "dark" ? {
    main: lr[200],
    light: lr[50],
    dark: lr[400]
  } : {
    main: lr[500],
    light: lr[300],
    dark: lr[700]
  };
}
function up(e = "light") {
  return e === "dark" ? {
    main: ar[500],
    light: ar[300],
    dark: ar[700]
  } : {
    main: ar[700],
    light: ar[400],
    dark: ar[800]
  };
}
function fp(e = "light") {
  return e === "dark" ? {
    main: ur[400],
    light: ur[300],
    dark: ur[700]
  } : {
    main: ur[700],
    light: ur[500],
    dark: ur[900]
  };
}
function dp(e = "light") {
  return e === "dark" ? {
    main: fr[400],
    light: fr[300],
    dark: fr[700]
  } : {
    main: fr[800],
    light: fr[500],
    dark: fr[900]
  };
}
function pp(e = "light") {
  return e === "dark" ? {
    main: Ir[400],
    light: Ir[300],
    dark: Ir[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Ir[500],
    dark: Ir[900]
  };
}
function mp(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2
  } = e, o = de(e, ap), i = e.primary || lp(t), a = e.secondary || cp(t), l = e.error || up(t), c = e.info || fp(t), u = e.success || dp(t), f = e.warning || pp(t);
  function d(m) {
    const v = Ms(m, jo.text.primary) >= r ? jo.text.primary : Is.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const E = Ms(m, v);
      E < 3 && console.error([`MUI: The contrast ratio of ${E}:1 for ${v} on ${m}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return v;
  }
  const p = ({
    color: m,
    name: v,
    mainShade: E = 500,
    lightShade: S = 300,
    darkShade: C = 700
  }) => {
    if (m = O({}, m), !m.main && m[E] && (m.main = m[E]), !m.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${v ? ` (${v})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${E}\` property.` : Hr(11, v ? ` (${v})` : "", E));
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
} });` : Hr(12, v ? ` (${v})` : "", JSON.stringify(m.main)));
    return Ds(m, "light", S, n), Ds(m, "dark", C, n), m.contrastText || (m.contrastText = d(m.main)), m;
  }, g = {
    dark: jo,
    light: Is
  };
  return process.env.NODE_ENV !== "production" && (g[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Ot(O({
    // A collection of common colors.
    common: O({}, Yr),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: p({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: p({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: p({
      color: l,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: p({
      color: f,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: p({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: p({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: jc,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: d,
    // Generate a rich color object.
    augmentColor: p,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n
  }, g[t]), o);
}
const hp = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function vp(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Ls = {
  textTransform: "uppercase"
}, Vs = '"Roboto", "Helvetica", "Arial", sans-serif';
function gp(e, t) {
  const r = typeof t == "function" ? t(e) : t, {
    fontFamily: n = Vs,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: a = 400,
    fontWeightMedium: l = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: u = 16,
    // Apply the CSS properties to all the variants.
    allVariants: f,
    pxToRem: d
  } = r, p = de(r, hp);
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const g = o / 14, y = d || ((E) => `${E / u * g}rem`), m = (E, S, C, T, b) => O({
    fontFamily: n,
    fontWeight: E,
    fontSize: y(S),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: C
  }, n === Vs ? {
    letterSpacing: `${vp(T / S)}em`
  } : {}, b, f), v = {
    h1: m(i, 96, 1.167, -1.5),
    h2: m(i, 60, 1.2, -0.5),
    h3: m(a, 48, 1.167, 0),
    h4: m(a, 34, 1.235, 0.25),
    h5: m(a, 24, 1.334, 0),
    h6: m(l, 20, 1.6, 0.15),
    subtitle1: m(a, 16, 1.75, 0.15),
    subtitle2: m(l, 14, 1.57, 0.1),
    body1: m(a, 16, 1.5, 0.15),
    body2: m(a, 14, 1.43, 0.15),
    button: m(l, 14, 1.75, 0.4, Ls),
    caption: m(a, 12, 1.66, 0.4),
    overline: m(a, 12, 2.66, 1, Ls),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Ot(O({
    htmlFontSize: u,
    pxToRem: y,
    fontFamily: n,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: a,
    fontWeightMedium: l,
    fontWeightBold: c
  }, v), p, {
    clone: !1
    // No need to clone deep
  });
}
const yp = 0.2, bp = 0.14, xp = 0.12;
function Te(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${yp})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${bp})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${xp})`].join(",");
}
const Ep = ["none", Te(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Te(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Te(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Te(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Te(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Te(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Te(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Te(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Te(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Te(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Te(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Te(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Te(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Te(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Te(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Te(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Te(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Te(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Te(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Te(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Te(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Te(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Te(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Te(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Op = ["duration", "easing", "delay"], Tp = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, vl = {
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
function zs(e) {
  return `${Math.round(e)}ms`;
}
function wp(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Sp(e) {
  const t = O({}, Tp, e.easing), r = O({}, vl, e.duration);
  return O({
    getAutoHeightDuration: wp,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = r.standard,
        easing: l = t.easeInOut,
        delay: c = 0
      } = i, u = de(i, Op);
      if (process.env.NODE_ENV !== "production") {
        const f = (p) => typeof p == "string", d = (p) => !isNaN(parseFloat(p));
        !f(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !d(a) && !f(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), f(l) || console.error('MUI: Argument "easing" must be a string.'), !d(c) && !f(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((f) => `${f} ${typeof a == "string" ? a : zs(a)} ${l} ${typeof c == "string" ? c : zs(c)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: r
  });
}
const Cp = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Rp = Cp, _p = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Ti(e = {}, ...t) {
  const {
    mixins: r = {},
    palette: n = {},
    transitions: o = {},
    typography: i = {}
  } = e, a = de(e, _p);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Hr(18));
  const l = mp(n), c = di(e);
  let u = Ot(c, {
    mixins: Yd(c.breakpoints, r),
    palette: l,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Ep.slice(),
    typography: gp(l, i),
    transitions: Sp(o),
    zIndex: O({}, Rp)
  });
  if (u = Ot(u, a), u = t.reduce((f, d) => Ot(f, d), u), process.env.NODE_ENV !== "production") {
    const f = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], d = (p, g) => {
      let y;
      for (y in p) {
        const m = p[y];
        if (f.indexOf(y) !== -1 && Object.keys(m).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const v = Ve("", y);
            console.error([`MUI: The \`${g}\` component increases the CSS specificity of the \`${y}\` internal state.`, "You can not override it like this: ", JSON.stringify(p, null, 2), "", `Instead, you need to use the '&.${v}' syntax:`, JSON.stringify({
              root: {
                [`&.${v}`]: m
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          p[y] = {};
        }
      }
    };
    Object.keys(u.components).forEach((p) => {
      const g = u.components[p].styleOverrides;
      g && p.indexOf("Mui") === 0 && d(g, p);
    });
  }
  return u.unstable_sxConfig = O({}, on, a == null ? void 0 : a.unstable_sxConfig), u.unstable_sx = function(d) {
    return sn({
      sx: d,
      theme: this
    });
  }, u;
}
const Pp = Ti(), wi = Pp;
function Pr() {
  const e = pi(wi);
  return process.env.NODE_ENV !== "production" && x.useDebugValue(e), e[br] || e;
}
function We({
  props: e,
  name: t
}) {
  return vd({
    props: e,
    name: t,
    defaultTheme: wi,
    themeId: br
  });
}
var cn = {}, ko = { exports: {} }, Ws;
function $p() {
  return Ws || (Ws = 1, function(e) {
    function t(r, n) {
      if (r == null)
        return {};
      var o = {}, i = Object.keys(r), a, l;
      for (l = 0; l < i.length; l++)
        a = i[l], !(n.indexOf(a) >= 0) && (o[a] = r[a]);
      return o;
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(ko)), ko.exports;
}
const gl = /* @__PURE__ */ $t(tf), Np = /* @__PURE__ */ $t(rf), jp = /* @__PURE__ */ $t(ff), kp = /* @__PURE__ */ $t(md), Mp = /* @__PURE__ */ $t(ed), Ap = /* @__PURE__ */ $t(id);
var $r = Rr;
Object.defineProperty(cn, "__esModule", {
  value: !0
});
var Ip = cn.default = Xp;
cn.shouldForwardProp = jn;
cn.systemDefaultTheme = void 0;
var at = $r(ja()), Yo = $r($p()), Fs = qp(gl), Dp = Np, Lp = $r(jp), Vp = $r(kp), zp = $r(Mp), Wp = $r(Ap);
const Fp = ["ownerState"], Bp = ["variants"], Up = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function yl(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (yl = function(n) {
    return n ? r : t;
  })(e);
}
function qp(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = yl(t);
  if (r && r.has(e))
    return r.get(e);
  var n = { __proto__: null }, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      a && (a.get || a.set) ? Object.defineProperty(n, i, a) : n[i] = e[i];
    }
  return n.default = e, r && r.set(e, n), n;
}
function Yp(e) {
  return Object.keys(e).length === 0;
}
function Hp(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function jn(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Gp = cn.systemDefaultTheme = (0, zp.default)(), Bs = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function On({
  defaultTheme: e,
  theme: t,
  themeId: r
}) {
  return Yp(t) ? e : t[r] || t;
}
function Kp(e) {
  return e ? (t, r) => r[e] : null;
}
function kn(e, t) {
  let {
    ownerState: r
  } = t, n = (0, Yo.default)(t, Fp);
  const o = typeof e == "function" ? e((0, at.default)({
    ownerState: r
  }, n)) : e;
  if (Array.isArray(o))
    return o.flatMap((i) => kn(i, (0, at.default)({
      ownerState: r
    }, n)));
  if (o && typeof o == "object" && Array.isArray(o.variants)) {
    const {
      variants: i = []
    } = o;
    let l = (0, Yo.default)(o, Bp);
    return i.forEach((c) => {
      let u = !0;
      typeof c.props == "function" ? u = c.props((0, at.default)({
        ownerState: r
      }, n, r)) : Object.keys(c.props).forEach((f) => {
        (r == null ? void 0 : r[f]) !== c.props[f] && n[f] !== c.props[f] && (u = !1);
      }), u && (Array.isArray(l) || (l = [l]), l.push(typeof c.style == "function" ? c.style((0, at.default)({
        ownerState: r
      }, n, r)) : c.style));
    }), l;
  }
  return o;
}
function Xp(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = Gp,
    rootShouldForwardProp: n = jn,
    slotShouldForwardProp: o = jn
  } = e, i = (a) => (0, Wp.default)((0, at.default)({}, a, {
    theme: On((0, at.default)({}, a, {
      defaultTheme: r,
      themeId: t
    }))
  }));
  return i.__mui_systemSx = !0, (a, l = {}) => {
    (0, Fs.internal_processStyles)(a, (b) => b.filter((w) => !(w != null && w.__mui_systemSx)));
    const {
      name: c,
      slot: u,
      skipVariantsResolver: f,
      skipSx: d,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: p = Kp(Bs(u))
    } = l, g = (0, Yo.default)(l, Up), y = f !== void 0 ? f : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), m = d || !1;
    let v;
    process.env.NODE_ENV !== "production" && c && (v = `${c}-${Bs(u || "Root")}`);
    let E = jn;
    u === "Root" || u === "root" ? E = n : u ? E = o : Hp(a) && (E = void 0);
    const S = (0, Fs.default)(a, (0, at.default)({
      shouldForwardProp: E,
      label: v
    }, g)), C = (b) => typeof b == "function" && b.__emotion_real !== b || (0, Dp.isPlainObject)(b) ? (w) => kn(b, (0, at.default)({}, w, {
      theme: On({
        theme: w.theme,
        defaultTheme: r,
        themeId: t
      })
    })) : b, T = (b, ...w) => {
      let R = C(b);
      const I = w ? w.map(C) : [];
      c && p && I.push((z) => {
        const K = On((0, at.default)({}, z, {
          defaultTheme: r,
          themeId: t
        }));
        if (!K.components || !K.components[c] || !K.components[c].styleOverrides)
          return null;
        const W = K.components[c].styleOverrides, G = {};
        return Object.entries(W).forEach(([Y, F]) => {
          G[Y] = kn(F, (0, at.default)({}, z, {
            theme: K
          }));
        }), p(z, G);
      }), c && !y && I.push((z) => {
        var K;
        const W = On((0, at.default)({}, z, {
          defaultTheme: r,
          themeId: t
        })), G = W == null || (K = W.components) == null || (K = K[c]) == null ? void 0 : K.variants;
        return kn({
          variants: G
        }, (0, at.default)({}, z, {
          theme: W
        }));
      }), m || I.push(i);
      const V = I.length - w.length;
      if (Array.isArray(b) && V > 0) {
        const z = new Array(V).fill("");
        R = [...b, ...z], R.raw = [...b.raw, ...z];
      }
      const A = S(R, ...I);
      if (process.env.NODE_ENV !== "production") {
        let z;
        c && (z = `${c}${(0, Lp.default)(u || "")}`), z === void 0 && (z = `Styled(${(0, Vp.default)(a)})`), A.displayName = z;
      }
      return a.muiName && (A.muiName = a.muiName), A;
    };
    return S.withConfig && (T.withConfig = S.withConfig), T;
  };
}
function Jp(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Zp = (e) => Jp(e) && e !== "classes", bl = Zp, Ee = Ip({
  themeId: br,
  defaultTheme: wi,
  rootShouldForwardProp: bl
}), Qp = ["theme"];
function xl(e) {
  let {
    theme: t
  } = e, r = de(e, Qp);
  const n = t[br];
  return /* @__PURE__ */ P.jsx(Fn, O({}, r, {
    themeId: n ? br : void 0,
    theme: n || t
  }));
}
process.env.NODE_ENV !== "production" && (xl.propTypes = {
  /**
   * Your component tree.
   */
  children: s.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: s.oneOfType([s.object, s.func]).isRequired
});
function em(e) {
  return Ve("MuiSvgIcon", e);
}
ze("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const tm = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], rm = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${oe(t)}`, `fontSize${oe(r)}`]
  };
  return Ge(o, em, n);
}, nm = Ee("svg", {
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
  var r, n, o, i, a, l, c, u, f, d, p, g, y;
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
      small: ((i = e.typography) == null || (a = i.pxToRem) == null ? void 0 : a.call(i, 20)) || "1.25rem",
      medium: ((l = e.typography) == null || (c = l.pxToRem) == null ? void 0 : c.call(l, 24)) || "1.5rem",
      large: ((u = e.typography) == null || (f = u.pxToRem) == null ? void 0 : f.call(u, 35)) || "2.1875rem"
    }[t.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (d = (p = (e.vars || e).palette) == null || (p = p[t.color]) == null ? void 0 : p.main) != null ? d : {
      action: (g = (e.vars || e).palette) == null || (g = g.action) == null ? void 0 : g.active,
      disabled: (y = (e.vars || e).palette) == null || (y = y.action) == null ? void 0 : y.disabled,
      inherit: void 0
    }[t.color]
  };
}), Un = /* @__PURE__ */ x.forwardRef(function(t, r) {
  const n = We({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: a = "inherit",
    component: l = "svg",
    fontSize: c = "medium",
    htmlColor: u,
    inheritViewBox: f = !1,
    titleAccess: d,
    viewBox: p = "0 0 24 24"
  } = n, g = de(n, tm), y = /* @__PURE__ */ x.isValidElement(o) && o.type === "svg", m = O({}, n, {
    color: a,
    component: l,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: f,
    viewBox: p,
    hasSvgAsChild: y
  }), v = {};
  f || (v.viewBox = p);
  const E = rm(m);
  return /* @__PURE__ */ P.jsxs(nm, O({
    as: l,
    className: fe(E.root, i),
    focusable: "false",
    color: u,
    "aria-hidden": d ? void 0 : !0,
    role: d ? "img" : void 0,
    ref: r
  }, v, g, y && o.props, {
    ownerState: m,
    children: [y ? o.props.children : o, d ? /* @__PURE__ */ P.jsx("title", {
      children: d
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (Un.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: s.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: s.oneOfType([s.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), s.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: s.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: s.oneOfType([s.oneOf(["inherit", "large", "medium", "small"]), s.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: s.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: s.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: s.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: s.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: s.string
});
Un.muiName = "SvgIcon";
function Si(e, t) {
  function r(n, o) {
    return /* @__PURE__ */ P.jsx(Un, O({
      "data-testid": `${t}Icon`,
      ref: o
    }, n, {
      children: e
    }));
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = Un.muiName, /* @__PURE__ */ x.memo(/* @__PURE__ */ x.forwardRef(r));
}
const om = {
  configure: (e) => {
    process.env.NODE_ENV !== "production" && console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.", "", "You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead", "", "The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401", "", "The updated documentation: https://mui.com/guides/classname-generator/"].join(`
`)), hi.configure(e);
  }
}, im = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  capitalize: oe,
  createChainedFunction: wd,
  createSvgIcon: Si,
  debounce: Sd,
  deprecatedPropType: Cd,
  isMuiElement: Rd,
  ownerDocument: Vn,
  ownerWindow: _d,
  requirePropFactory: Pd,
  setRef: zn,
  unstable_ClassNameGenerator: om,
  unstable_useEnhancedEffect: Zt,
  unstable_useId: tl,
  unsupportedProp: rl,
  useControlled: nl,
  useEventCallback: Gt,
  useForkRef: tt,
  useIsFocusVisible: bi
}, Symbol.toStringTag, { value: "Module" }));
function sm(e) {
  return We;
}
function Ho(e, t) {
  return Ho = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, Ho(e, t);
}
function El(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Ho(e, t);
}
const Us = {
  disabled: !1
};
var am = process.env.NODE_ENV !== "production" ? s.oneOfType([s.number, s.shape({
  enter: s.number,
  exit: s.number,
  appear: s.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && s.oneOfType([s.string, s.shape({
  enter: s.string,
  exit: s.string,
  active: s.string
}), s.shape({
  enter: s.string,
  enterDone: s.string,
  enterActive: s.string,
  exit: s.string,
  exitDone: s.string,
  exitActive: s.string
})]);
const qn = Qe.createContext(null);
var lm = function(t) {
  return t.scrollTop;
}, Fr = "unmounted", Yt = "exited", Ht = "entering", pr = "entered", Go = "exiting", Nt = /* @__PURE__ */ function(e) {
  El(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var a = o, l = a && !a.isMounting ? n.enter : n.appear, c;
    return i.appearStatus = null, n.in ? l ? (c = Yt, i.appearStatus = Ht) : c = pr : n.unmountOnExit || n.mountOnEnter ? c = Fr : c = Yt, i.state = {
      status: c
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(o, i) {
    var a = o.in;
    return a && i.status === Fr ? {
      status: Yt
    } : null;
  };
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, r.componentDidUpdate = function(o) {
    var i = null;
    if (o !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== Ht && a !== pr && (i = Ht) : (a === Ht || a === pr) && (i = Go);
    }
    this.updateStatus(!1, i);
  }, r.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, r.getTimeouts = function() {
    var o = this.props.timeout, i, a, l;
    return i = a = l = o, o != null && typeof o != "number" && (i = o.exit, a = o.enter, l = o.appear !== void 0 ? o.appear : a), {
      exit: i,
      enter: a,
      appear: l
    };
  }, r.updateStatus = function(o, i) {
    if (o === void 0 && (o = !1), i !== null)
      if (this.cancelNextCallback(), i === Ht) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : bn.findDOMNode(this);
          a && lm(a);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === Yt && this.setState({
        status: Fr
      });
  }, r.performEnter = function(o) {
    var i = this, a = this.props.enter, l = this.context ? this.context.isMounting : o, c = this.props.nodeRef ? [l] : [bn.findDOMNode(this), l], u = c[0], f = c[1], d = this.getTimeouts(), p = l ? d.appear : d.enter;
    if (!o && !a || Us.disabled) {
      this.safeSetState({
        status: pr
      }, function() {
        i.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, f), this.safeSetState({
      status: Ht
    }, function() {
      i.props.onEntering(u, f), i.onTransitionEnd(p, function() {
        i.safeSetState({
          status: pr
        }, function() {
          i.props.onEntered(u, f);
        });
      });
    });
  }, r.performExit = function() {
    var o = this, i = this.props.exit, a = this.getTimeouts(), l = this.props.nodeRef ? void 0 : bn.findDOMNode(this);
    if (!i || Us.disabled) {
      this.safeSetState({
        status: Yt
      }, function() {
        o.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: Go
    }, function() {
      o.props.onExiting(l), o.onTransitionEnd(a.exit, function() {
        o.safeSetState({
          status: Yt
        }, function() {
          o.props.onExited(l);
        });
      });
    });
  }, r.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, r.safeSetState = function(o, i) {
    i = this.setNextCallback(i), this.setState(o, i);
  }, r.setNextCallback = function(o) {
    var i = this, a = !0;
    return this.nextCallback = function(l) {
      a && (a = !1, i.nextCallback = null, o(l));
    }, this.nextCallback.cancel = function() {
      a = !1;
    }, this.nextCallback;
  }, r.onTransitionEnd = function(o, i) {
    this.setNextCallback(i);
    var a = this.props.nodeRef ? this.props.nodeRef.current : bn.findDOMNode(this), l = o == null && !this.props.addEndListener;
    if (!a || l) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var c = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback], u = c[0], f = c[1];
      this.props.addEndListener(u, f);
    }
    o != null && setTimeout(this.nextCallback, o);
  }, r.render = function() {
    var o = this.state.status;
    if (o === Fr)
      return null;
    var i = this.props, a = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var l = de(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ Qe.createElement(qn.Provider, {
        value: null
      }, typeof a == "function" ? a(o, l) : Qe.cloneElement(Qe.Children.only(a), l))
    );
  }, t;
}(Qe.Component);
Nt.contextType = qn;
Nt.propTypes = process.env.NODE_ENV !== "production" ? {
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
  nodeRef: s.shape({
    current: typeof Element > "u" ? s.any : function(e, t, r, n, o, i) {
      var a = e[t];
      return s.instanceOf(a && "ownerDocument" in a ? a.ownerDocument.defaultView.Element : Element)(e, t, r, n, o, i);
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
  children: s.oneOfType([s.func.isRequired, s.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: s.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: s.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: s.bool,
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
  appear: s.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: s.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: s.bool,
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
    var r = am;
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
  addEndListener: s.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: s.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: s.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: s.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: s.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: s.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: s.func
} : {};
function dr() {
}
Nt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: dr,
  onEntering: dr,
  onEntered: dr,
  onExit: dr,
  onExiting: dr,
  onExited: dr
};
Nt.UNMOUNTED = Fr;
Nt.EXITED = Yt;
Nt.ENTERING = Ht;
Nt.ENTERED = pr;
Nt.EXITING = Go;
const Ol = Nt;
function cm(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ci(e, t) {
  var r = function(i) {
    return t && Rn(i) ? t(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && xc.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function um(e, t) {
  e = e || {}, t = t || {};
  function r(f) {
    return f in t ? t[f] : e[f];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (n[i] = o, o = []) : o.push(i);
  var a, l = {};
  for (var c in t) {
    if (n[c])
      for (a = 0; a < n[c].length; a++) {
        var u = n[c][a];
        l[n[c][a]] = r(u);
      }
    l[c] = r(c);
  }
  for (a = 0; a < o.length; a++)
    l[o[a]] = r(o[a]);
  return l;
}
function Xt(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function fm(e, t) {
  return Ci(e.children, function(r) {
    return _n(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: Xt(r, "appear", e),
      enter: Xt(r, "enter", e),
      exit: Xt(r, "exit", e)
    });
  });
}
function dm(e, t, r) {
  var n = Ci(e.children), o = um(t, n);
  return Object.keys(o).forEach(function(i) {
    var a = o[i];
    if (Rn(a)) {
      var l = i in t, c = i in n, u = t[i], f = Rn(u) && !u.props.in;
      c && (!l || f) ? o[i] = _n(a, {
        onExited: r.bind(null, a),
        in: !0,
        exit: Xt(a, "exit", e),
        enter: Xt(a, "enter", e)
      }) : !c && l && !f ? o[i] = _n(a, {
        in: !1
      }) : c && l && Rn(u) && (o[i] = _n(a, {
        onExited: r.bind(null, a),
        in: u.props.in,
        exit: Xt(a, "exit", e),
        enter: Xt(a, "enter", e)
      }));
    }
  }), o;
}
var pm = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, mm = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Ri = /* @__PURE__ */ function(e) {
  El(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var a = i.handleExited.bind(cm(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: a,
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
    var a = i.children, l = i.handleExited, c = i.firstRender;
    return {
      children: c ? fm(o, l) : dm(o, a, l),
      firstRender: !1
    };
  }, r.handleExited = function(o, i) {
    var a = Ci(this.props.children);
    o.key in a || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(l) {
      var c = O({}, l.children);
      return delete c[o.key], {
        children: c
      };
    }));
  }, r.render = function() {
    var o = this.props, i = o.component, a = o.childFactory, l = de(o, ["component", "childFactory"]), c = this.state.contextValue, u = pm(this.state.children).map(a);
    return delete l.appear, delete l.enter, delete l.exit, i === null ? /* @__PURE__ */ Qe.createElement(qn.Provider, {
      value: c
    }, u) : /* @__PURE__ */ Qe.createElement(qn.Provider, {
      value: c
    }, /* @__PURE__ */ Qe.createElement(i, l, u));
  }, t;
}(Qe.Component);
Ri.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: s.any,
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
  children: s.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: s.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: s.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: s.bool,
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
  childFactory: s.func
} : {};
Ri.defaultProps = mm;
const hm = Ri, vm = (e) => e.scrollTop;
function Yn(e, t) {
  var r, n;
  const {
    timeout: o,
    easing: i,
    style: a = {}
  } = e;
  return {
    duration: (r = a.transitionDuration) != null ? r : typeof o == "number" ? o : o[t.mode] || 0,
    easing: (n = a.transitionTimingFunction) != null ? n : typeof i == "object" ? i[t.mode] : i,
    delay: a.transitionDelay
  };
}
function gm(e) {
  return Ve("MuiCollapse", e);
}
ze("MuiCollapse", ["root", "horizontal", "vertical", "entered", "hidden", "wrapper", "wrapperInner"]);
const ym = ["addEndListener", "children", "className", "collapsedSize", "component", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "orientation", "style", "timeout", "TransitionComponent"], bm = (e) => {
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
  return Ge(n, gm, r);
}, xm = Ee("div", {
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
}) => O({
  height: 0,
  overflow: "hidden",
  transition: e.transitions.create("height")
}, t.orientation === "horizontal" && {
  height: "auto",
  width: 0,
  transition: e.transitions.create("width")
}, t.state === "entered" && O({
  height: "auto",
  overflow: "visible"
}, t.orientation === "horizontal" && {
  width: "auto"
}), t.state === "exited" && !t.in && t.collapsedSize === "0px" && {
  visibility: "hidden"
})), Em = Ee("div", {
  name: "MuiCollapse",
  slot: "Wrapper",
  overridesResolver: (e, t) => t.wrapper
})(({
  ownerState: e
}) => O({
  // Hack to get children with a negative margin to not falsify the height computation.
  display: "flex",
  width: "100%"
}, e.orientation === "horizontal" && {
  width: "auto",
  height: "100%"
})), Om = Ee("div", {
  name: "MuiCollapse",
  slot: "WrapperInner",
  overridesResolver: (e, t) => t.wrapperInner
})(({
  ownerState: e
}) => O({
  width: "100%"
}, e.orientation === "horizontal" && {
  width: "auto",
  height: "100%"
})), _i = /* @__PURE__ */ x.forwardRef(function(t, r) {
  const n = We({
    props: t,
    name: "MuiCollapse"
  }), {
    addEndListener: o,
    children: i,
    className: a,
    collapsedSize: l = "0px",
    component: c,
    easing: u,
    in: f,
    onEnter: d,
    onEntered: p,
    onEntering: g,
    onExit: y,
    onExited: m,
    onExiting: v,
    orientation: E = "vertical",
    style: S,
    timeout: C = vl.standard,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: T = Ol
  } = n, b = de(n, ym), w = O({}, n, {
    orientation: E,
    collapsedSize: l
  }), R = bm(w), I = Pr(), V = Kt(), A = x.useRef(null), z = x.useRef(), K = typeof l == "number" ? `${l}px` : l, W = E === "horizontal", G = W ? "width" : "height", Y = x.useRef(null), F = tt(r, Y), X = (N) => (L) => {
    if (N) {
      const D = Y.current;
      L === void 0 ? N(D) : N(D, L);
    }
  }, te = () => A.current ? A.current[W ? "clientWidth" : "clientHeight"] : 0, re = X((N, L) => {
    A.current && W && (A.current.style.position = "absolute"), N.style[G] = K, d && d(N, L);
  }), _ = X((N, L) => {
    const D = te();
    A.current && W && (A.current.style.position = "");
    const {
      duration: q,
      easing: Q
    } = Yn({
      style: S,
      timeout: C,
      easing: u
    }, {
      mode: "enter"
    });
    if (C === "auto") {
      const ae = I.transitions.getAutoHeightDuration(D);
      N.style.transitionDuration = `${ae}ms`, z.current = ae;
    } else
      N.style.transitionDuration = typeof q == "string" ? q : `${q}ms`;
    N.style[G] = `${D}px`, N.style.transitionTimingFunction = Q, g && g(N, L);
  }), k = X((N, L) => {
    N.style[G] = "auto", p && p(N, L);
  }), ee = X((N) => {
    N.style[G] = `${te()}px`, y && y(N);
  }), Z = X(m), B = X((N) => {
    const L = te(), {
      duration: D,
      easing: q
    } = Yn({
      style: S,
      timeout: C,
      easing: u
    }, {
      mode: "exit"
    });
    if (C === "auto") {
      const Q = I.transitions.getAutoHeightDuration(L);
      N.style.transitionDuration = `${Q}ms`, z.current = Q;
    } else
      N.style.transitionDuration = typeof D == "string" ? D : `${D}ms`;
    N.style[G] = K, N.style.transitionTimingFunction = q, v && v(N);
  }), J = (N) => {
    C === "auto" && V.start(z.current || 0, N), o && o(Y.current, N);
  };
  return /* @__PURE__ */ P.jsx(T, O({
    in: f,
    onEnter: re,
    onEntered: k,
    onEntering: _,
    onExit: ee,
    onExited: Z,
    onExiting: B,
    addEndListener: J,
    nodeRef: Y,
    timeout: C === "auto" ? null : C
  }, b, {
    children: (N, L) => /* @__PURE__ */ P.jsx(xm, O({
      as: c,
      className: fe(R.root, a, {
        entered: R.entered,
        exited: !f && K === "0px" && R.hidden
      }[N]),
      style: O({
        [W ? "minWidth" : "minHeight"]: K
      }, S),
      ref: F
    }, L, {
      // `ownerState` is set after `childProps` to override any existing `ownerState` property in `childProps`
      // that might have been forwarded from the Transition component.
      ownerState: O({}, w, {
        state: N
      }),
      children: /* @__PURE__ */ P.jsx(Em, {
        ownerState: O({}, w, {
          state: N
        }),
        className: R.wrapper,
        ref: A,
        children: /* @__PURE__ */ P.jsx(Om, {
          ownerState: O({}, w, {
            state: N
          }),
          className: R.wrapperInner,
          children: i
        })
      })
    }))
  }));
});
process.env.NODE_ENV !== "production" && (_i.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: s.func,
  /**
   * The content node to be collapsed.
   */
  children: s.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * The width (horizontal) or height (vertical) of the container when collapsed.
   * @default '0px'
   */
  collapsedSize: s.oneOfType([s.number, s.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: el,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: s.oneOfType([s.shape({
    enter: s.string,
    exit: s.string
  }), s.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: s.bool,
  /**
   * @ignore
   */
  onEnter: s.func,
  /**
   * @ignore
   */
  onEntered: s.func,
  /**
   * @ignore
   */
  onEntering: s.func,
  /**
   * @ignore
   */
  onExit: s.func,
  /**
   * @ignore
   */
  onExited: s.func,
  /**
   * @ignore
   */
  onExiting: s.func,
  /**
   * The transition orientation.
   * @default 'vertical'
   */
  orientation: s.oneOf(["horizontal", "vertical"]),
  /**
   * @ignore
   */
  style: s.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object]),
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default duration.standard
   */
  timeout: s.oneOfType([s.oneOf(["auto"]), s.number, s.shape({
    appear: s.number,
    enter: s.number,
    exit: s.number
  })])
});
_i.muiSupportAuto = !0;
const Tm = _i;
function wm(e) {
  return typeof e == "string";
}
function hr(e, t, r) {
  return e === void 0 || wm(e) ? t : O({}, t, {
    ownerState: O({}, t.ownerState, r)
  });
}
const Sm = {
  disableDefaultClasses: !1
}, Tl = /* @__PURE__ */ x.createContext(Sm);
process.env.NODE_ENV !== "production" && (Tl.displayName = "ClassNameConfiguratorContext");
function Cm(e) {
  const {
    disableDefaultClasses: t
  } = x.useContext(Tl);
  return (r) => t ? "" : e(r);
}
function Rm(e, t = []) {
  if (e === void 0)
    return {};
  const r = {};
  return Object.keys(e).filter((n) => n.match(/^on[A-Z]/) && typeof e[n] == "function" && !t.includes(n)).forEach((n) => {
    r[n] = e[n];
  }), r;
}
function wl(e, t, r) {
  return typeof e == "function" ? e(t, r) : e;
}
function qs(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((r) => !(r.match(/^on[A-Z]/) && typeof e[r] == "function")).forEach((r) => {
    t[r] = e[r];
  }), t;
}
function Sl(e) {
  const {
    getSlotProps: t,
    additionalProps: r,
    externalSlotProps: n,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const g = fe(r == null ? void 0 : r.className, i, o == null ? void 0 : o.className, n == null ? void 0 : n.className), y = O({}, r == null ? void 0 : r.style, o == null ? void 0 : o.style, n == null ? void 0 : n.style), m = O({}, r, o, n);
    return g.length > 0 && (m.className = g), Object.keys(y).length > 0 && (m.style = y), {
      props: m,
      internalRef: void 0
    };
  }
  const a = Rm(O({}, o, n)), l = qs(n), c = qs(o), u = t(a), f = fe(u == null ? void 0 : u.className, r == null ? void 0 : r.className, i, o == null ? void 0 : o.className, n == null ? void 0 : n.className), d = O({}, u == null ? void 0 : u.style, r == null ? void 0 : r.style, o == null ? void 0 : o.style, n == null ? void 0 : n.style), p = O({}, u, r, c, l);
  return f.length > 0 && (p.className = f), Object.keys(d).length > 0 && (p.style = d), {
    props: p,
    internalRef: u.ref
  };
}
const _m = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function Pm(e) {
  var t;
  const {
    elementType: r,
    externalSlotProps: n,
    ownerState: o,
    skipResolvingSlotProps: i = !1
  } = e, a = de(e, _m), l = i ? {} : wl(n, o), {
    props: c,
    internalRef: u
  } = Sl(O({}, a, {
    externalSlotProps: l
  })), f = tt(u, l == null ? void 0 : l.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return hr(r, O({}, c, {
    ref: f
  }), o);
}
const $m = ["className", "elementType", "ownerState", "externalForwardedProps", "getSlotOwnerState", "internalForwardedProps"], Nm = ["component", "slots", "slotProps"], jm = ["component"];
function km(e, t) {
  const {
    className: r,
    elementType: n,
    ownerState: o,
    externalForwardedProps: i,
    getSlotOwnerState: a,
    internalForwardedProps: l
  } = t, c = de(t, $m), {
    component: u,
    slots: f = {
      [e]: void 0
    },
    slotProps: d = {
      [e]: void 0
    }
  } = i, p = de(i, Nm), g = f[e] || n, y = wl(d[e], o), m = Sl(O({
    className: r
  }, c, {
    externalForwardedProps: e === "root" ? p : void 0,
    externalSlotProps: y
  })), {
    props: {
      component: v
    },
    internalRef: E
  } = m, S = de(m.props, jm), C = tt(E, y == null ? void 0 : y.ref, t.ref), T = a ? a(S) : {}, b = O({}, o, T), w = e === "root" ? v || u : v, R = hr(g, O({}, e === "root" && !u && !f[e] && l, e !== "root" && !f[e] && l, S, w && {
    as: w
  }, {
    ref: C
  }), b);
  return Object.keys(T).forEach((I) => {
    delete R[I];
  }), [g, R];
}
function Cl(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: a,
    in: l,
    onExited: c,
    timeout: u
  } = e, [f, d] = x.useState(!1), p = fe(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), g = {
    width: a,
    height: a,
    top: -(a / 2) + i,
    left: -(a / 2) + o
  }, y = fe(r.child, f && r.childLeaving, n && r.childPulsate);
  return !l && !f && d(!0), x.useEffect(() => {
    if (!l && c != null) {
      const m = setTimeout(c, u);
      return () => {
        clearTimeout(m);
      };
    }
  }, [c, l, u]), /* @__PURE__ */ P.jsx("span", {
    className: p,
    style: g,
    children: /* @__PURE__ */ P.jsx("span", {
      className: y
    })
  });
}
process.env.NODE_ENV !== "production" && (Cl.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object.isRequired,
  className: s.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: s.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: s.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: s.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: s.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: s.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: s.number,
  /**
   * exit delay
   */
  timeout: s.number.isRequired
});
const lt = ze("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Mm = ["center", "classes", "className"];
let vo = (e) => e, Ys, Hs, Gs, Ks;
const Ko = 550, Am = 80, Im = io(Ys || (Ys = vo`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), Dm = io(Hs || (Hs = vo`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), Lm = io(Gs || (Gs = vo`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), Vm = Ee("span", {
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
}), zm = Ee(Cl, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(Ks || (Ks = vo`
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
`), lt.rippleVisible, Im, Ko, ({
  theme: e
}) => e.transitions.easing.easeInOut, lt.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, lt.child, lt.childLeaving, Dm, Ko, ({
  theme: e
}) => e.transitions.easing.easeInOut, lt.childPulsate, Lm, ({
  theme: e
}) => e.transitions.easing.easeInOut), Rl = /* @__PURE__ */ x.forwardRef(function(t, r) {
  const n = We({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: a
  } = n, l = de(n, Mm), [c, u] = x.useState([]), f = x.useRef(0), d = x.useRef(null);
  x.useEffect(() => {
    d.current && (d.current(), d.current = null);
  }, [c]);
  const p = x.useRef(!1), g = Kt(), y = x.useRef(null), m = x.useRef(null), v = x.useCallback((T) => {
    const {
      pulsate: b,
      rippleX: w,
      rippleY: R,
      rippleSize: I,
      cb: V
    } = T;
    u((A) => [...A, /* @__PURE__ */ P.jsx(zm, {
      classes: {
        ripple: fe(i.ripple, lt.ripple),
        rippleVisible: fe(i.rippleVisible, lt.rippleVisible),
        ripplePulsate: fe(i.ripplePulsate, lt.ripplePulsate),
        child: fe(i.child, lt.child),
        childLeaving: fe(i.childLeaving, lt.childLeaving),
        childPulsate: fe(i.childPulsate, lt.childPulsate)
      },
      timeout: Ko,
      pulsate: b,
      rippleX: w,
      rippleY: R,
      rippleSize: I
    }, f.current)]), f.current += 1, d.current = V;
  }, [i]), E = x.useCallback((T = {}, b = {}, w = () => {
  }) => {
    const {
      pulsate: R = !1,
      center: I = o || b.pulsate,
      fakeElement: V = !1
      // For test purposes
    } = b;
    if ((T == null ? void 0 : T.type) === "mousedown" && p.current) {
      p.current = !1;
      return;
    }
    (T == null ? void 0 : T.type) === "touchstart" && (p.current = !0);
    const A = V ? null : m.current, z = A ? A.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let K, W, G;
    if (I || T === void 0 || T.clientX === 0 && T.clientY === 0 || !T.clientX && !T.touches)
      K = Math.round(z.width / 2), W = Math.round(z.height / 2);
    else {
      const {
        clientX: Y,
        clientY: F
      } = T.touches && T.touches.length > 0 ? T.touches[0] : T;
      K = Math.round(Y - z.left), W = Math.round(F - z.top);
    }
    if (I)
      G = Math.sqrt((2 * z.width ** 2 + z.height ** 2) / 3), G % 2 === 0 && (G += 1);
    else {
      const Y = Math.max(Math.abs((A ? A.clientWidth : 0) - K), K) * 2 + 2, F = Math.max(Math.abs((A ? A.clientHeight : 0) - W), W) * 2 + 2;
      G = Math.sqrt(Y ** 2 + F ** 2);
    }
    T != null && T.touches ? y.current === null && (y.current = () => {
      v({
        pulsate: R,
        rippleX: K,
        rippleY: W,
        rippleSize: G,
        cb: w
      });
    }, g.start(Am, () => {
      y.current && (y.current(), y.current = null);
    })) : v({
      pulsate: R,
      rippleX: K,
      rippleY: W,
      rippleSize: G,
      cb: w
    });
  }, [o, v, g]), S = x.useCallback(() => {
    E({}, {
      pulsate: !0
    });
  }, [E]), C = x.useCallback((T, b) => {
    if (g.clear(), (T == null ? void 0 : T.type) === "touchend" && y.current) {
      y.current(), y.current = null, g.start(0, () => {
        C(T, b);
      });
      return;
    }
    y.current = null, u((w) => w.length > 0 ? w.slice(1) : w), d.current = b;
  }, [g]);
  return x.useImperativeHandle(r, () => ({
    pulsate: S,
    start: E,
    stop: C
  }), [S, E, C]), /* @__PURE__ */ P.jsx(Vm, O({
    className: fe(lt.root, i.root, a),
    ref: m
  }, l, {
    children: /* @__PURE__ */ P.jsx(hm, {
      component: null,
      exit: !0,
      children: c
    })
  }));
});
process.env.NODE_ENV !== "production" && (Rl.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: s.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string
});
const Wm = Rl;
function Fm(e) {
  return Ve("MuiButtonBase", e);
}
const Bm = ze("MuiButtonBase", ["root", "disabled", "focusVisible"]), Um = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], qm = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, a = Ge({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, Fm, o);
  return r && n && (a.root += ` ${n}`), a;
}, Ym = Ee("button", {
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
  [`&.${Bm.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), _l = /* @__PURE__ */ x.forwardRef(function(t, r) {
  const n = We({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: a,
    className: l,
    component: c = "button",
    disabled: u = !1,
    disableRipple: f = !1,
    disableTouchRipple: d = !1,
    focusRipple: p = !1,
    LinkComponent: g = "a",
    onBlur: y,
    onClick: m,
    onContextMenu: v,
    onDragLeave: E,
    onFocus: S,
    onFocusVisible: C,
    onKeyDown: T,
    onKeyUp: b,
    onMouseDown: w,
    onMouseLeave: R,
    onMouseUp: I,
    onTouchEnd: V,
    onTouchMove: A,
    onTouchStart: z,
    tabIndex: K = 0,
    TouchRippleProps: W,
    touchRippleRef: G,
    type: Y
  } = n, F = de(n, Um), X = x.useRef(null), te = x.useRef(null), re = tt(te, G), {
    isFocusVisibleRef: _,
    onFocus: k,
    onBlur: ee,
    ref: Z
  } = bi(), [B, J] = x.useState(!1);
  u && B && J(!1), x.useImperativeHandle(o, () => ({
    focusVisible: () => {
      J(!0), X.current.focus();
    }
  }), []);
  const [N, L] = x.useState(!1);
  x.useEffect(() => {
    L(!0);
  }, []);
  const D = N && !f && !u;
  x.useEffect(() => {
    B && p && !f && N && te.current.pulsate();
  }, [f, p, B, N]);
  function q(ie, Le, St = d) {
    return Gt((yt) => (Le && Le(yt), !St && te.current && te.current[ie](yt), !0));
  }
  const Q = q("start", w), ae = q("stop", v), j = q("stop", E), Ce = q("stop", I), U = q("stop", (ie) => {
    B && ie.preventDefault(), R && R(ie);
  }), Oe = q("start", z), je = q("stop", V), nt = q("stop", A), $e = q("stop", (ie) => {
    ee(ie), _.current === !1 && J(!1), y && y(ie);
  }, !1), ht = Gt((ie) => {
    X.current || (X.current = ie.currentTarget), k(ie), _.current === !0 && (J(!0), C && C(ie)), S && S(ie);
  }), ke = () => {
    const ie = X.current;
    return c && c !== "button" && !(ie.tagName === "A" && ie.href);
  }, ot = x.useRef(!1), Ke = Gt((ie) => {
    p && !ot.current && B && te.current && ie.key === " " && (ot.current = !0, te.current.stop(ie, () => {
      te.current.start(ie);
    })), ie.target === ie.currentTarget && ke() && ie.key === " " && ie.preventDefault(), T && T(ie), ie.target === ie.currentTarget && ke() && ie.key === "Enter" && !u && (ie.preventDefault(), m && m(ie));
  }), gt = Gt((ie) => {
    p && ie.key === " " && te.current && B && !ie.defaultPrevented && (ot.current = !1, te.current.stop(ie, () => {
      te.current.pulsate(ie);
    })), b && b(ie), m && ie.target === ie.currentTarget && ke() && ie.key === " " && !ie.defaultPrevented && m(ie);
  });
  let Xe = c;
  Xe === "button" && (F.href || F.to) && (Xe = g);
  const De = {};
  Xe === "button" ? (De.type = Y === void 0 ? "button" : Y, De.disabled = u) : (!F.href && !F.to && (De.role = "button"), u && (De["aria-disabled"] = u));
  const it = tt(r, Z, X);
  process.env.NODE_ENV !== "production" && x.useEffect(() => {
    D && !te.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [D]);
  const Fe = O({}, n, {
    centerRipple: i,
    component: c,
    disabled: u,
    disableRipple: f,
    disableTouchRipple: d,
    focusRipple: p,
    tabIndex: K,
    focusVisible: B
  }), jt = qm(Fe);
  return /* @__PURE__ */ P.jsxs(Ym, O({
    as: Xe,
    className: fe(jt.root, l),
    ownerState: Fe,
    onBlur: $e,
    onClick: m,
    onContextMenu: ae,
    onFocus: ht,
    onKeyDown: Ke,
    onKeyUp: gt,
    onMouseDown: Q,
    onMouseLeave: U,
    onMouseUp: Ce,
    onDragLeave: j,
    onTouchEnd: je,
    onTouchMove: nt,
    onTouchStart: Oe,
    ref: it,
    tabIndex: u ? -1 : K,
    type: Y
  }, De, F, {
    children: [a, D ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ P.jsx(Wm, O({
        ref: re,
        center: i
      }, W))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (_l.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: yi,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: s.bool,
  /**
   * The content of the component.
   */
  children: s.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: el,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: s.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: s.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: s.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: s.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: s.string,
  /**
   * @ignore
   */
  href: s.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: s.elementType,
  /**
   * @ignore
   */
  onBlur: s.func,
  /**
   * @ignore
   */
  onClick: s.func,
  /**
   * @ignore
   */
  onContextMenu: s.func,
  /**
   * @ignore
   */
  onDragLeave: s.func,
  /**
   * @ignore
   */
  onFocus: s.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: s.func,
  /**
   * @ignore
   */
  onKeyDown: s.func,
  /**
   * @ignore
   */
  onKeyUp: s.func,
  /**
   * @ignore
   */
  onMouseDown: s.func,
  /**
   * @ignore
   */
  onMouseLeave: s.func,
  /**
   * @ignore
   */
  onMouseUp: s.func,
  /**
   * @ignore
   */
  onTouchEnd: s.func,
  /**
   * @ignore
   */
  onTouchMove: s.func,
  /**
   * @ignore
   */
  onTouchStart: s.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object]),
  /**
   * @default 0
   */
  tabIndex: s.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: s.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: s.oneOfType([s.func, s.shape({
    current: s.shape({
      pulsate: s.func.isRequired,
      start: s.func.isRequired,
      stop: s.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: s.oneOfType([s.oneOf(["button", "reset", "submit"]), s.string])
});
const Hn = _l;
function Hm(e) {
  return Ve("MuiIconButton", e);
}
const Gm = ze("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), Km = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], Xm = (e) => {
  const {
    classes: t,
    disabled: r,
    color: n,
    edge: o,
    size: i
  } = e, a = {
    root: ["root", r && "disabled", n !== "default" && `color${oe(n)}`, o && `edge${oe(o)}`, `size${oe(i)}`]
  };
  return Ge(a, Hm, t);
}, Jm = Ee(Hn, {
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
}) => O({
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
  return O({}, t.color === "inherit" && {
    color: "inherit"
  }, t.color !== "inherit" && t.color !== "default" && O({
    color: n == null ? void 0 : n.main
  }, !t.disableRipple && {
    "&:hover": O({}, n && {
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
    [`&.${Gm.disabled}`]: {
      backgroundColor: "transparent",
      color: (e.vars || e).palette.action.disabled
    }
  });
}), Pl = /* @__PURE__ */ x.forwardRef(function(t, r) {
  const n = We({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: o = !1,
    children: i,
    className: a,
    color: l = "default",
    disabled: c = !1,
    disableFocusRipple: u = !1,
    size: f = "medium"
  } = n, d = de(n, Km), p = O({}, n, {
    edge: o,
    color: l,
    disabled: c,
    disableFocusRipple: u,
    size: f
  }), g = Xm(p);
  return /* @__PURE__ */ P.jsx(Jm, O({
    className: fe(g.root, a),
    centerRipple: !0,
    focusRipple: !u,
    disabled: c,
    ref: r
  }, d, {
    ownerState: p,
    children: i
  }));
});
process.env.NODE_ENV !== "production" && (Pl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: an(s.node, (e) => x.Children.toArray(e.children).some((r) => /* @__PURE__ */ x.isValidElement(r) && r.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: s.oneOfType([s.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), s.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: s.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: s.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: s.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: s.oneOf(["end", "start", !1]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: s.oneOfType([s.oneOf(["small", "medium", "large"]), s.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object])
});
const Zm = Pl;
function Qm(e) {
  return Ve("MuiTypography", e);
}
ze("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const eh = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"], th = (e) => {
  const {
    align: t,
    gutterBottom: r,
    noWrap: n,
    paragraph: o,
    variant: i,
    classes: a
  } = e, l = {
    root: ["root", i, e.align !== "inherit" && `align${oe(t)}`, r && "gutterBottom", n && "noWrap", o && "paragraph"]
  };
  return Ge(l, Qm, a);
}, rh = Ee("span", {
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
}) => O({
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
})), Xs = {
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
}, nh = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, oh = (e) => nh[e] || e, $l = /* @__PURE__ */ x.forwardRef(function(t, r) {
  const n = We({
    props: t,
    name: "MuiTypography"
  }), o = oh(n.color), i = mi(O({}, n, {
    color: o
  })), {
    align: a = "inherit",
    className: l,
    component: c,
    gutterBottom: u = !1,
    noWrap: f = !1,
    paragraph: d = !1,
    variant: p = "body1",
    variantMapping: g = Xs
  } = i, y = de(i, eh), m = O({}, i, {
    align: a,
    color: o,
    className: l,
    component: c,
    gutterBottom: u,
    noWrap: f,
    paragraph: d,
    variant: p,
    variantMapping: g
  }), v = c || (d ? "p" : g[p] || Xs[p]) || "span", E = th(m);
  return /* @__PURE__ */ P.jsx(rh, O({
    as: v,
    ref: r,
    ownerState: m,
    className: fe(E.root, l)
  }, y));
});
process.env.NODE_ENV !== "production" && ($l.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: s.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: s.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: s.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: s.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: s.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   */
  paragraph: s.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: s.oneOfType([s.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), s.string]),
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
  variantMapping: s.object
});
const Rt = $l, Nl = "base";
function ih(e) {
  return `${Nl}--${e}`;
}
function sh(e, t) {
  return `${Nl}-${e}-${t}`;
}
function jl(e, t) {
  const r = Ha[t];
  return r ? ih(r) : sh(e, t);
}
function ah(e, t) {
  const r = {};
  return t.forEach((n) => {
    r[n] = jl(e, n);
  }), r;
}
function lh(e) {
  return typeof e == "function" ? e() : e;
}
const Gn = /* @__PURE__ */ x.forwardRef(function(t, r) {
  const {
    children: n,
    container: o,
    disablePortal: i = !1
  } = t, [a, l] = x.useState(null), c = tt(/* @__PURE__ */ x.isValidElement(n) ? n.ref : null, r);
  if (Zt(() => {
    i || l(lh(o) || document.body);
  }, [o, i]), Zt(() => {
    if (a && !i)
      return zn(r, a), () => {
        zn(r, null);
      };
  }, [r, a, i]), i) {
    if (/* @__PURE__ */ x.isValidElement(n)) {
      const u = {
        ref: c
      };
      return /* @__PURE__ */ x.cloneElement(n, u);
    }
    return /* @__PURE__ */ P.jsx(x.Fragment, {
      children: n
    });
  }
  return /* @__PURE__ */ P.jsx(x.Fragment, {
    children: a && /* @__PURE__ */ Ec.createPortal(n, a)
  });
});
process.env.NODE_ENV !== "production" && (Gn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: s.node,
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
  container: s.oneOfType([Jr, s.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: s.bool
});
process.env.NODE_ENV !== "production" && (Gn.propTypes = gi(Gn.propTypes));
var qe = "top", dt = "bottom", pt = "right", Ye = "left", Pi = "auto", un = [qe, dt, pt, Ye], Or = "start", Zr = "end", ch = "clippingParents", kl = "viewport", Lr = "popper", uh = "reference", Js = /* @__PURE__ */ un.reduce(function(e, t) {
  return e.concat([t + "-" + Or, t + "-" + Zr]);
}, []), Ml = /* @__PURE__ */ [].concat(un, [Pi]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Or, t + "-" + Zr]);
}, []), fh = "beforeRead", dh = "read", ph = "afterRead", mh = "beforeMain", hh = "main", vh = "afterMain", gh = "beforeWrite", yh = "write", bh = "afterWrite", xh = [fh, dh, ph, mh, hh, vh, gh, yh, bh];
function wt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function rt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Qt(e) {
  var t = rt(e).Element;
  return e instanceof t || e instanceof Element;
}
function ut(e) {
  var t = rt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function $i(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = rt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Eh(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, o = t.attributes[r] || {}, i = t.elements[r];
    !ut(i) || !wt(i) || (Object.assign(i.style, n), Object.keys(o).forEach(function(a) {
      var l = o[a];
      l === !1 ? i.removeAttribute(a) : i.setAttribute(a, l === !0 ? "" : l);
    }));
  });
}
function Oh(e) {
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
      var o = t.elements[n], i = t.attributes[n] || {}, a = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), l = a.reduce(function(c, u) {
        return c[u] = "", c;
      }, {});
      !ut(o) || !wt(o) || (Object.assign(o.style, l), Object.keys(i).forEach(function(c) {
        o.removeAttribute(c);
      }));
    });
  };
}
const Th = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Eh,
  effect: Oh,
  requires: ["computeStyles"]
};
function Tt(e) {
  return e.split("-")[0];
}
var Jt = Math.max, Kn = Math.min, Tr = Math.round;
function Xo() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Al() {
  return !/^((?!chrome|android).)*safari/i.test(Xo());
}
function wr(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), o = 1, i = 1;
  t && ut(e) && (o = e.offsetWidth > 0 && Tr(n.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Tr(n.height) / e.offsetHeight || 1);
  var a = Qt(e) ? rt(e) : window, l = a.visualViewport, c = !Al() && r, u = (n.left + (c && l ? l.offsetLeft : 0)) / o, f = (n.top + (c && l ? l.offsetTop : 0)) / i, d = n.width / o, p = n.height / i;
  return {
    width: d,
    height: p,
    top: f,
    right: u + d,
    bottom: f + p,
    left: u,
    x: u,
    y: f
  };
}
function Ni(e) {
  var t = wr(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function Il(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && $i(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function Pt(e) {
  return rt(e).getComputedStyle(e);
}
function wh(e) {
  return ["table", "td", "th"].indexOf(wt(e)) >= 0;
}
function Wt(e) {
  return ((Qt(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function go(e) {
  return wt(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    ($i(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Wt(e)
  );
}
function Zs(e) {
  return !ut(e) || // https://github.com/popperjs/popper-core/issues/837
  Pt(e).position === "fixed" ? null : e.offsetParent;
}
function Sh(e) {
  var t = /firefox/i.test(Xo()), r = /Trident/i.test(Xo());
  if (r && ut(e)) {
    var n = Pt(e);
    if (n.position === "fixed")
      return null;
  }
  var o = go(e);
  for ($i(o) && (o = o.host); ut(o) && ["html", "body"].indexOf(wt(o)) < 0; ) {
    var i = Pt(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function fn(e) {
  for (var t = rt(e), r = Zs(e); r && wh(r) && Pt(r).position === "static"; )
    r = Zs(r);
  return r && (wt(r) === "html" || wt(r) === "body" && Pt(r).position === "static") ? t : r || Sh(e) || t;
}
function ji(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ur(e, t, r) {
  return Jt(e, Kn(t, r));
}
function Ch(e, t, r) {
  var n = Ur(e, t, r);
  return n > r ? r : n;
}
function Dl() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Ll(e) {
  return Object.assign({}, Dl(), e);
}
function Vl(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var Rh = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, Ll(typeof t != "number" ? t : Vl(t, un));
};
function _h(e) {
  var t, r = e.state, n = e.name, o = e.options, i = r.elements.arrow, a = r.modifiersData.popperOffsets, l = Tt(r.placement), c = ji(l), u = [Ye, pt].indexOf(l) >= 0, f = u ? "height" : "width";
  if (!(!i || !a)) {
    var d = Rh(o.padding, r), p = Ni(i), g = c === "y" ? qe : Ye, y = c === "y" ? dt : pt, m = r.rects.reference[f] + r.rects.reference[c] - a[c] - r.rects.popper[f], v = a[c] - r.rects.reference[c], E = fn(i), S = E ? c === "y" ? E.clientHeight || 0 : E.clientWidth || 0 : 0, C = m / 2 - v / 2, T = d[g], b = S - p[f] - d[y], w = S / 2 - p[f] / 2 + C, R = Ur(T, w, b), I = c;
    r.modifiersData[n] = (t = {}, t[I] = R, t.centerOffset = R - w, t);
  }
}
function Ph(e) {
  var t = e.state, r = e.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || Il(t.elements.popper, o) && (t.elements.arrow = o));
}
const $h = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: _h,
  effect: Ph,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Sr(e) {
  return e.split("-")[1];
}
var Nh = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function jh(e, t) {
  var r = e.x, n = e.y, o = t.devicePixelRatio || 1;
  return {
    x: Tr(r * o) / o || 0,
    y: Tr(n * o) / o || 0
  };
}
function Qs(e) {
  var t, r = e.popper, n = e.popperRect, o = e.placement, i = e.variation, a = e.offsets, l = e.position, c = e.gpuAcceleration, u = e.adaptive, f = e.roundOffsets, d = e.isFixed, p = a.x, g = p === void 0 ? 0 : p, y = a.y, m = y === void 0 ? 0 : y, v = typeof f == "function" ? f({
    x: g,
    y: m
  }) : {
    x: g,
    y: m
  };
  g = v.x, m = v.y;
  var E = a.hasOwnProperty("x"), S = a.hasOwnProperty("y"), C = Ye, T = qe, b = window;
  if (u) {
    var w = fn(r), R = "clientHeight", I = "clientWidth";
    if (w === rt(r) && (w = Wt(r), Pt(w).position !== "static" && l === "absolute" && (R = "scrollHeight", I = "scrollWidth")), w = w, o === qe || (o === Ye || o === pt) && i === Zr) {
      T = dt;
      var V = d && w === b && b.visualViewport ? b.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        w[R]
      );
      m -= V - n.height, m *= c ? 1 : -1;
    }
    if (o === Ye || (o === qe || o === dt) && i === Zr) {
      C = pt;
      var A = d && w === b && b.visualViewport ? b.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        w[I]
      );
      g -= A - n.width, g *= c ? 1 : -1;
    }
  }
  var z = Object.assign({
    position: l
  }, u && Nh), K = f === !0 ? jh({
    x: g,
    y: m
  }, rt(r)) : {
    x: g,
    y: m
  };
  if (g = K.x, m = K.y, c) {
    var W;
    return Object.assign({}, z, (W = {}, W[T] = S ? "0" : "", W[C] = E ? "0" : "", W.transform = (b.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + m + "px)" : "translate3d(" + g + "px, " + m + "px, 0)", W));
  }
  return Object.assign({}, z, (t = {}, t[T] = S ? m + "px" : "", t[C] = E ? g + "px" : "", t.transform = "", t));
}
function kh(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, o = n === void 0 ? !0 : n, i = r.adaptive, a = i === void 0 ? !0 : i, l = r.roundOffsets, c = l === void 0 ? !0 : l, u = {
    placement: Tt(t.placement),
    variation: Sr(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Qs(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Qs(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Mh = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: kh,
  data: {}
};
var Tn = {
  passive: !0
};
function Ah(e) {
  var t = e.state, r = e.instance, n = e.options, o = n.scroll, i = o === void 0 ? !0 : o, a = n.resize, l = a === void 0 ? !0 : a, c = rt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(f) {
    f.addEventListener("scroll", r.update, Tn);
  }), l && c.addEventListener("resize", r.update, Tn), function() {
    i && u.forEach(function(f) {
      f.removeEventListener("scroll", r.update, Tn);
    }), l && c.removeEventListener("resize", r.update, Tn);
  };
}
const Ih = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Ah,
  data: {}
};
var Dh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Mn(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Dh[t];
  });
}
var Lh = {
  start: "end",
  end: "start"
};
function ea(e) {
  return e.replace(/start|end/g, function(t) {
    return Lh[t];
  });
}
function ki(e) {
  var t = rt(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function Mi(e) {
  return wr(Wt(e)).left + ki(e).scrollLeft;
}
function Vh(e, t) {
  var r = rt(e), n = Wt(e), o = r.visualViewport, i = n.clientWidth, a = n.clientHeight, l = 0, c = 0;
  if (o) {
    i = o.width, a = o.height;
    var u = Al();
    (u || !u && t === "fixed") && (l = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: l + Mi(e),
    y: c
  };
}
function zh(e) {
  var t, r = Wt(e), n = ki(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = Jt(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), a = Jt(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), l = -n.scrollLeft + Mi(e), c = -n.scrollTop;
  return Pt(o || r).direction === "rtl" && (l += Jt(r.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: a,
    x: l,
    y: c
  };
}
function Ai(e) {
  var t = Pt(e), r = t.overflow, n = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function zl(e) {
  return ["html", "body", "#document"].indexOf(wt(e)) >= 0 ? e.ownerDocument.body : ut(e) && Ai(e) ? e : zl(go(e));
}
function qr(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = zl(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), i = rt(n), a = o ? [i].concat(i.visualViewport || [], Ai(n) ? n : []) : n, l = t.concat(a);
  return o ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(qr(go(a)))
  );
}
function Jo(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Wh(e, t) {
  var r = wr(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function ta(e, t, r) {
  return t === kl ? Jo(Vh(e, r)) : Qt(t) ? Wh(t, r) : Jo(zh(Wt(e)));
}
function Fh(e) {
  var t = qr(go(e)), r = ["absolute", "fixed"].indexOf(Pt(e).position) >= 0, n = r && ut(e) ? fn(e) : e;
  return Qt(n) ? t.filter(function(o) {
    return Qt(o) && Il(o, n) && wt(o) !== "body";
  }) : [];
}
function Bh(e, t, r, n) {
  var o = t === "clippingParents" ? Fh(e) : [].concat(t), i = [].concat(o, [r]), a = i[0], l = i.reduce(function(c, u) {
    var f = ta(e, u, n);
    return c.top = Jt(f.top, c.top), c.right = Kn(f.right, c.right), c.bottom = Kn(f.bottom, c.bottom), c.left = Jt(f.left, c.left), c;
  }, ta(e, a, n));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Wl(e) {
  var t = e.reference, r = e.element, n = e.placement, o = n ? Tt(n) : null, i = n ? Sr(n) : null, a = t.x + t.width / 2 - r.width / 2, l = t.y + t.height / 2 - r.height / 2, c;
  switch (o) {
    case qe:
      c = {
        x: a,
        y: t.y - r.height
      };
      break;
    case dt:
      c = {
        x: a,
        y: t.y + t.height
      };
      break;
    case pt:
      c = {
        x: t.x + t.width,
        y: l
      };
      break;
    case Ye:
      c = {
        x: t.x - r.width,
        y: l
      };
      break;
    default:
      c = {
        x: t.x,
        y: t.y
      };
  }
  var u = o ? ji(o) : null;
  if (u != null) {
    var f = u === "y" ? "height" : "width";
    switch (i) {
      case Or:
        c[u] = c[u] - (t[f] / 2 - r[f] / 2);
        break;
      case Zr:
        c[u] = c[u] + (t[f] / 2 - r[f] / 2);
        break;
    }
  }
  return c;
}
function Qr(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = n === void 0 ? e.placement : n, i = r.strategy, a = i === void 0 ? e.strategy : i, l = r.boundary, c = l === void 0 ? ch : l, u = r.rootBoundary, f = u === void 0 ? kl : u, d = r.elementContext, p = d === void 0 ? Lr : d, g = r.altBoundary, y = g === void 0 ? !1 : g, m = r.padding, v = m === void 0 ? 0 : m, E = Ll(typeof v != "number" ? v : Vl(v, un)), S = p === Lr ? uh : Lr, C = e.rects.popper, T = e.elements[y ? S : p], b = Bh(Qt(T) ? T : T.contextElement || Wt(e.elements.popper), c, f, a), w = wr(e.elements.reference), R = Wl({
    reference: w,
    element: C,
    strategy: "absolute",
    placement: o
  }), I = Jo(Object.assign({}, C, R)), V = p === Lr ? I : w, A = {
    top: b.top - V.top + E.top,
    bottom: V.bottom - b.bottom + E.bottom,
    left: b.left - V.left + E.left,
    right: V.right - b.right + E.right
  }, z = e.modifiersData.offset;
  if (p === Lr && z) {
    var K = z[o];
    Object.keys(A).forEach(function(W) {
      var G = [pt, dt].indexOf(W) >= 0 ? 1 : -1, Y = [qe, dt].indexOf(W) >= 0 ? "y" : "x";
      A[W] += K[Y] * G;
    });
  }
  return A;
}
function Uh(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = r.boundary, i = r.rootBoundary, a = r.padding, l = r.flipVariations, c = r.allowedAutoPlacements, u = c === void 0 ? Ml : c, f = Sr(n), d = f ? l ? Js : Js.filter(function(y) {
    return Sr(y) === f;
  }) : un, p = d.filter(function(y) {
    return u.indexOf(y) >= 0;
  });
  p.length === 0 && (p = d);
  var g = p.reduce(function(y, m) {
    return y[m] = Qr(e, {
      placement: m,
      boundary: o,
      rootBoundary: i,
      padding: a
    })[Tt(m)], y;
  }, {});
  return Object.keys(g).sort(function(y, m) {
    return g[y] - g[m];
  });
}
function qh(e) {
  if (Tt(e) === Pi)
    return [];
  var t = Mn(e);
  return [ea(e), t, ea(t)];
}
function Yh(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = r.mainAxis, i = o === void 0 ? !0 : o, a = r.altAxis, l = a === void 0 ? !0 : a, c = r.fallbackPlacements, u = r.padding, f = r.boundary, d = r.rootBoundary, p = r.altBoundary, g = r.flipVariations, y = g === void 0 ? !0 : g, m = r.allowedAutoPlacements, v = t.options.placement, E = Tt(v), S = E === v, C = c || (S || !y ? [Mn(v)] : qh(v)), T = [v].concat(C).reduce(function(B, J) {
      return B.concat(Tt(J) === Pi ? Uh(t, {
        placement: J,
        boundary: f,
        rootBoundary: d,
        padding: u,
        flipVariations: y,
        allowedAutoPlacements: m
      }) : J);
    }, []), b = t.rects.reference, w = t.rects.popper, R = /* @__PURE__ */ new Map(), I = !0, V = T[0], A = 0; A < T.length; A++) {
      var z = T[A], K = Tt(z), W = Sr(z) === Or, G = [qe, dt].indexOf(K) >= 0, Y = G ? "width" : "height", F = Qr(t, {
        placement: z,
        boundary: f,
        rootBoundary: d,
        altBoundary: p,
        padding: u
      }), X = G ? W ? pt : Ye : W ? dt : qe;
      b[Y] > w[Y] && (X = Mn(X));
      var te = Mn(X), re = [];
      if (i && re.push(F[K] <= 0), l && re.push(F[X] <= 0, F[te] <= 0), re.every(function(B) {
        return B;
      })) {
        V = z, I = !1;
        break;
      }
      R.set(z, re);
    }
    if (I)
      for (var _ = y ? 3 : 1, k = function(J) {
        var N = T.find(function(L) {
          var D = R.get(L);
          if (D)
            return D.slice(0, J).every(function(q) {
              return q;
            });
        });
        if (N)
          return V = N, "break";
      }, ee = _; ee > 0; ee--) {
        var Z = k(ee);
        if (Z === "break")
          break;
      }
    t.placement !== V && (t.modifiersData[n]._skip = !0, t.placement = V, t.reset = !0);
  }
}
const Hh = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Yh,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function ra(e, t, r) {
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
function na(e) {
  return [qe, pt, dt, Ye].some(function(t) {
    return e[t] >= 0;
  });
}
function Gh(e) {
  var t = e.state, r = e.name, n = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, a = Qr(t, {
    elementContext: "reference"
  }), l = Qr(t, {
    altBoundary: !0
  }), c = ra(a, n), u = ra(l, o, i), f = na(c), d = na(u);
  t.modifiersData[r] = {
    referenceClippingOffsets: c,
    popperEscapeOffsets: u,
    isReferenceHidden: f,
    hasPopperEscaped: d
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": f,
    "data-popper-escaped": d
  });
}
const Kh = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Gh
};
function Xh(e, t, r) {
  var n = Tt(e), o = [Ye, qe].indexOf(n) >= 0 ? -1 : 1, i = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, a = i[0], l = i[1];
  return a = a || 0, l = (l || 0) * o, [Ye, pt].indexOf(n) >= 0 ? {
    x: l,
    y: a
  } : {
    x: a,
    y: l
  };
}
function Jh(e) {
  var t = e.state, r = e.options, n = e.name, o = r.offset, i = o === void 0 ? [0, 0] : o, a = Ml.reduce(function(f, d) {
    return f[d] = Xh(d, t.rects, i), f;
  }, {}), l = a[t.placement], c = l.x, u = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += u), t.modifiersData[n] = a;
}
const Zh = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Jh
};
function Qh(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = Wl({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const ev = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Qh,
  data: {}
};
function tv(e) {
  return e === "x" ? "y" : "x";
}
function rv(e) {
  var t = e.state, r = e.options, n = e.name, o = r.mainAxis, i = o === void 0 ? !0 : o, a = r.altAxis, l = a === void 0 ? !1 : a, c = r.boundary, u = r.rootBoundary, f = r.altBoundary, d = r.padding, p = r.tether, g = p === void 0 ? !0 : p, y = r.tetherOffset, m = y === void 0 ? 0 : y, v = Qr(t, {
    boundary: c,
    rootBoundary: u,
    padding: d,
    altBoundary: f
  }), E = Tt(t.placement), S = Sr(t.placement), C = !S, T = ji(E), b = tv(T), w = t.modifiersData.popperOffsets, R = t.rects.reference, I = t.rects.popper, V = typeof m == "function" ? m(Object.assign({}, t.rects, {
    placement: t.placement
  })) : m, A = typeof V == "number" ? {
    mainAxis: V,
    altAxis: V
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, V), z = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, K = {
    x: 0,
    y: 0
  };
  if (w) {
    if (i) {
      var W, G = T === "y" ? qe : Ye, Y = T === "y" ? dt : pt, F = T === "y" ? "height" : "width", X = w[T], te = X + v[G], re = X - v[Y], _ = g ? -I[F] / 2 : 0, k = S === Or ? R[F] : I[F], ee = S === Or ? -I[F] : -R[F], Z = t.elements.arrow, B = g && Z ? Ni(Z) : {
        width: 0,
        height: 0
      }, J = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Dl(), N = J[G], L = J[Y], D = Ur(0, R[F], B[F]), q = C ? R[F] / 2 - _ - D - N - A.mainAxis : k - D - N - A.mainAxis, Q = C ? -R[F] / 2 + _ + D + L + A.mainAxis : ee + D + L + A.mainAxis, ae = t.elements.arrow && fn(t.elements.arrow), j = ae ? T === "y" ? ae.clientTop || 0 : ae.clientLeft || 0 : 0, Ce = (W = z == null ? void 0 : z[T]) != null ? W : 0, U = X + q - Ce - j, Oe = X + Q - Ce, je = Ur(g ? Kn(te, U) : te, X, g ? Jt(re, Oe) : re);
      w[T] = je, K[T] = je - X;
    }
    if (l) {
      var nt, $e = T === "x" ? qe : Ye, ht = T === "x" ? dt : pt, ke = w[b], ot = b === "y" ? "height" : "width", Ke = ke + v[$e], gt = ke - v[ht], Xe = [qe, Ye].indexOf(E) !== -1, De = (nt = z == null ? void 0 : z[b]) != null ? nt : 0, it = Xe ? Ke : ke - R[ot] - I[ot] - De + A.altAxis, Fe = Xe ? ke + R[ot] + I[ot] - De - A.altAxis : gt, jt = g && Xe ? Ch(it, ke, Fe) : Ur(g ? it : Ke, ke, g ? Fe : gt);
      w[b] = jt, K[b] = jt - ke;
    }
    t.modifiersData[n] = K;
  }
}
const nv = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: rv,
  requiresIfExists: ["offset"]
};
function ov(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function iv(e) {
  return e === rt(e) || !ut(e) ? ki(e) : ov(e);
}
function sv(e) {
  var t = e.getBoundingClientRect(), r = Tr(t.width) / e.offsetWidth || 1, n = Tr(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function av(e, t, r) {
  r === void 0 && (r = !1);
  var n = ut(t), o = ut(t) && sv(t), i = Wt(t), a = wr(e, o, r), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((wt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Ai(i)) && (l = iv(t)), ut(t) ? (c = wr(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : i && (c.x = Mi(i))), {
    x: a.left + l.scrollLeft - c.x,
    y: a.top + l.scrollTop - c.y,
    width: a.width,
    height: a.height
  };
}
function lv(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function o(i) {
    r.add(i.name);
    var a = [].concat(i.requires || [], i.requiresIfExists || []);
    a.forEach(function(l) {
      if (!r.has(l)) {
        var c = t.get(l);
        c && o(c);
      }
    }), n.push(i);
  }
  return e.forEach(function(i) {
    r.has(i.name) || o(i);
  }), n;
}
function cv(e) {
  var t = lv(e);
  return xh.reduce(function(r, n) {
    return r.concat(t.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function uv(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function fv(e) {
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
var oa = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function ia() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function dv(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, o = t.defaultOptions, i = o === void 0 ? oa : o;
  return function(l, c, u) {
    u === void 0 && (u = i);
    var f = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, oa, i),
      modifiersData: {},
      elements: {
        reference: l,
        popper: c
      },
      attributes: {},
      styles: {}
    }, d = [], p = !1, g = {
      state: f,
      setOptions: function(E) {
        var S = typeof E == "function" ? E(f.options) : E;
        m(), f.options = Object.assign({}, i, f.options, S), f.scrollParents = {
          reference: Qt(l) ? qr(l) : l.contextElement ? qr(l.contextElement) : [],
          popper: qr(c)
        };
        var C = cv(fv([].concat(n, f.options.modifiers)));
        return f.orderedModifiers = C.filter(function(T) {
          return T.enabled;
        }), y(), g.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!p) {
          var E = f.elements, S = E.reference, C = E.popper;
          if (ia(S, C)) {
            f.rects = {
              reference: av(S, fn(C), f.options.strategy === "fixed"),
              popper: Ni(C)
            }, f.reset = !1, f.placement = f.options.placement, f.orderedModifiers.forEach(function(A) {
              return f.modifiersData[A.name] = Object.assign({}, A.data);
            });
            for (var T = 0; T < f.orderedModifiers.length; T++) {
              if (f.reset === !0) {
                f.reset = !1, T = -1;
                continue;
              }
              var b = f.orderedModifiers[T], w = b.fn, R = b.options, I = R === void 0 ? {} : R, V = b.name;
              typeof w == "function" && (f = w({
                state: f,
                options: I,
                name: V,
                instance: g
              }) || f);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: uv(function() {
        return new Promise(function(v) {
          g.forceUpdate(), v(f);
        });
      }),
      destroy: function() {
        m(), p = !0;
      }
    };
    if (!ia(l, c))
      return g;
    g.setOptions(u).then(function(v) {
      !p && u.onFirstUpdate && u.onFirstUpdate(v);
    });
    function y() {
      f.orderedModifiers.forEach(function(v) {
        var E = v.name, S = v.options, C = S === void 0 ? {} : S, T = v.effect;
        if (typeof T == "function") {
          var b = T({
            state: f,
            name: E,
            instance: g,
            options: C
          }), w = function() {
          };
          d.push(b || w);
        }
      });
    }
    function m() {
      d.forEach(function(v) {
        return v();
      }), d = [];
    }
    return g;
  };
}
var pv = [Ih, ev, Mh, Th, Zh, Hh, nv, $h, Kh], mv = /* @__PURE__ */ dv({
  defaultModifiers: pv
});
const Fl = "Popper";
function hv(e) {
  return jl(Fl, e);
}
ah(Fl, ["root"]);
const vv = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"], gv = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];
function yv(e, t) {
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
function Xn(e) {
  return typeof e == "function" ? e() : e;
}
function yo(e) {
  return e.nodeType !== void 0;
}
function bv(e) {
  return !yo(e);
}
const xv = () => Ge({
  root: ["root"]
}, Cm(hv)), Ev = {}, Ov = /* @__PURE__ */ x.forwardRef(function(t, r) {
  var n;
  const {
    anchorEl: o,
    children: i,
    direction: a,
    disablePortal: l,
    modifiers: c,
    open: u,
    placement: f,
    popperOptions: d,
    popperRef: p,
    slotProps: g = {},
    slots: y = {},
    TransitionProps: m
    // @ts-ignore internal logic
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
  } = t, v = de(t, vv), E = x.useRef(null), S = tt(E, r), C = x.useRef(null), T = tt(C, p), b = x.useRef(T);
  Zt(() => {
    b.current = T;
  }, [T]), x.useImperativeHandle(p, () => C.current, []);
  const w = yv(f, a), [R, I] = x.useState(w), [V, A] = x.useState(Xn(o));
  x.useEffect(() => {
    C.current && C.current.forceUpdate();
  }), x.useEffect(() => {
    o && A(Xn(o));
  }, [o]), Zt(() => {
    if (!V || !u)
      return;
    const Y = (te) => {
      I(te.placement);
    };
    if (process.env.NODE_ENV !== "production" && V && yo(V) && V.nodeType === 1) {
      const te = V.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && te.top === 0 && te.left === 0 && te.right === 0 && te.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let F = [{
      name: "preventOverflow",
      options: {
        altBoundary: l
      }
    }, {
      name: "flip",
      options: {
        altBoundary: l
      }
    }, {
      name: "onUpdate",
      enabled: !0,
      phase: "afterWrite",
      fn: ({
        state: te
      }) => {
        Y(te);
      }
    }];
    c != null && (F = F.concat(c)), d && d.modifiers != null && (F = F.concat(d.modifiers));
    const X = mv(V, E.current, O({
      placement: w
    }, d, {
      modifiers: F
    }));
    return b.current(X), () => {
      X.destroy(), b.current(null);
    };
  }, [V, l, c, u, d, w]);
  const z = {
    placement: R
  };
  m !== null && (z.TransitionProps = m);
  const K = xv(), W = (n = y.root) != null ? n : "div", G = Pm({
    elementType: W,
    externalSlotProps: g.root,
    externalForwardedProps: v,
    additionalProps: {
      role: "tooltip",
      ref: S
    },
    ownerState: t,
    className: K.root
  });
  return /* @__PURE__ */ P.jsx(W, O({}, G, {
    children: typeof i == "function" ? i(z) : i
  }));
}), Bl = /* @__PURE__ */ x.forwardRef(function(t, r) {
  const {
    anchorEl: n,
    children: o,
    container: i,
    direction: a = "ltr",
    disablePortal: l = !1,
    keepMounted: c = !1,
    modifiers: u,
    open: f,
    placement: d = "bottom",
    popperOptions: p = Ev,
    popperRef: g,
    style: y,
    transition: m = !1,
    slotProps: v = {},
    slots: E = {}
  } = t, S = de(t, gv), [C, T] = x.useState(!0), b = () => {
    T(!1);
  }, w = () => {
    T(!0);
  };
  if (!c && !f && (!m || C))
    return null;
  let R;
  if (i)
    R = i;
  else if (n) {
    const A = Xn(n);
    R = A && yo(A) ? Vn(A).body : Vn(null).body;
  }
  const I = !f && c && (!m || C) ? "none" : void 0, V = m ? {
    in: f,
    onEnter: b,
    onExited: w
  } : void 0;
  return /* @__PURE__ */ P.jsx(Gn, {
    disablePortal: l,
    container: R,
    children: /* @__PURE__ */ P.jsx(Ov, O({
      anchorEl: n,
      direction: a,
      disablePortal: l,
      modifiers: u,
      ref: r,
      open: m ? !C : f,
      placement: d,
      popperOptions: p,
      popperRef: g,
      slotProps: v,
      slots: E
    }, S, {
      style: O({
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: I
      }, y),
      TransitionProps: V,
      children: o
    }))
  });
});
process.env.NODE_ENV !== "production" && (Bl.propTypes = {
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
  anchorEl: an(s.oneOfType([Jr, s.object, s.func]), (e) => {
    if (e.open) {
      const t = Xn(e.anchorEl);
      if (t && yo(t) && t.nodeType === 1) {
        const r = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && r.top === 0 && r.left === 0 && r.right === 0 && r.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || bv(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "It should be an HTML element instance or a virtualElement ", "(https://popper.js.org/docs/v2/virtual-elements/)."].join(`
`));
    }
    return null;
  }),
  /**
   * Popper render function or node.
   */
  children: s.oneOfType([s.node, s.func]),
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
  container: s.oneOfType([Jr, s.func]),
  /**
   * Direction of the text.
   * @default 'ltr'
   */
  direction: s.oneOf(["ltr", "rtl"]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: s.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: s.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: s.arrayOf(s.shape({
    data: s.object,
    effect: s.func,
    enabled: s.bool,
    fn: s.func,
    name: s.any,
    options: s.object,
    phase: s.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: s.arrayOf(s.string),
    requiresIfExists: s.arrayOf(s.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: s.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: s.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: s.shape({
    modifiers: s.array,
    onFirstUpdate: s.func,
    placement: s.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: s.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: yi,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: s.shape({
    root: s.oneOfType([s.func, s.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: s.shape({
    root: s.elementType
  }),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: s.bool
});
var Ii = {};
Object.defineProperty(Ii, "__esModule", {
  value: !0
});
var Ul = Ii.default = void 0, Tv = Sv(Qe), wv = gl;
function ql(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (ql = function(n) {
    return n ? r : t;
  })(e);
}
function Sv(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = ql(t);
  if (r && r.has(e))
    return r.get(e);
  var n = { __proto__: null }, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      a && (a.get || a.set) ? Object.defineProperty(n, i, a) : n[i] = e[i];
    }
  return n.default = e, r && r.set(e, n), n;
}
function Cv(e) {
  return Object.keys(e).length === 0;
}
function Rv(e = null) {
  const t = Tv.useContext(wv.ThemeContext);
  return !t || Cv(t) ? e : t;
}
Ul = Ii.default = Rv;
const _v = ["anchorEl", "component", "components", "componentsProps", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition", "slots", "slotProps"], Pv = Ee(Bl, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Yl = /* @__PURE__ */ x.forwardRef(function(t, r) {
  var n;
  const o = Ul(), i = We({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: a,
    component: l,
    components: c,
    componentsProps: u,
    container: f,
    disablePortal: d,
    keepMounted: p,
    modifiers: g,
    open: y,
    placement: m,
    popperOptions: v,
    popperRef: E,
    transition: S,
    slots: C,
    slotProps: T
  } = i, b = de(i, _v), w = (n = C == null ? void 0 : C.root) != null ? n : c == null ? void 0 : c.Root, R = O({
    anchorEl: a,
    container: f,
    disablePortal: d,
    keepMounted: p,
    modifiers: g,
    open: y,
    placement: m,
    popperOptions: v,
    popperRef: E,
    transition: S
  }, b);
  return /* @__PURE__ */ P.jsx(Pv, O({
    as: l,
    direction: o == null ? void 0 : o.direction,
    slots: {
      root: w
    },
    slotProps: T ?? u
  }, R, {
    ref: r
  }));
});
process.env.NODE_ENV !== "production" && (Yl.propTypes = {
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
  anchorEl: s.oneOfType([Jr, s.object, s.func]),
  /**
   * Popper render function or node.
   */
  children: s.oneOfType([s.node, s.func]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: s.elementType,
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: s.shape({
    Root: s.elementType
  }),
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  componentsProps: s.shape({
    root: s.oneOfType([s.func, s.object])
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
  container: s.oneOfType([Jr, s.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: s.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: s.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: s.arrayOf(s.shape({
    data: s.object,
    effect: s.func,
    enabled: s.bool,
    fn: s.func,
    name: s.any,
    options: s.object,
    phase: s.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: s.arrayOf(s.string),
    requiresIfExists: s.arrayOf(s.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: s.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: s.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: s.shape({
    modifiers: s.array,
    onFirstUpdate: s.func,
    placement: s.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: s.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: yi,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: s.shape({
    root: s.oneOfType([s.func, s.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: s.shape({
    root: s.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object]),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: s.bool
});
const Hl = Yl;
function $v(e) {
  return Ve("MuiListSubheader", e);
}
ze("MuiListSubheader", ["root", "colorPrimary", "colorInherit", "gutters", "inset", "sticky"]);
const Nv = ["className", "color", "component", "disableGutters", "disableSticky", "inset"], jv = (e) => {
  const {
    classes: t,
    color: r,
    disableGutters: n,
    inset: o,
    disableSticky: i
  } = e, a = {
    root: ["root", r !== "default" && `color${oe(r)}`, !n && "gutters", o && "inset", !i && "sticky"]
  };
  return Ge(a, $v, t);
}, kv = Ee("li", {
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
}) => O({
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
})), Di = /* @__PURE__ */ x.forwardRef(function(t, r) {
  const n = We({
    props: t,
    name: "MuiListSubheader"
  }), {
    className: o,
    color: i = "default",
    component: a = "li",
    disableGutters: l = !1,
    disableSticky: c = !1,
    inset: u = !1
  } = n, f = de(n, Nv), d = O({}, n, {
    color: i,
    component: a,
    disableGutters: l,
    disableSticky: c,
    inset: u
  }), p = jv(d);
  return /* @__PURE__ */ P.jsx(kv, O({
    as: a,
    className: fe(p.root, o),
    ref: r,
    ownerState: d
  }, f));
});
Di.muiSkipListHighlight = !0;
process.env.NODE_ENV !== "production" && (Di.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: s.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'default'
   */
  color: s.oneOf(["default", "inherit", "primary"]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: s.elementType,
  /**
   * If `true`, the List Subheader will not have gutters.
   * @default false
   */
  disableGutters: s.bool,
  /**
   * If `true`, the List Subheader will not stick to the top during scroll.
   * @default false
   */
  disableSticky: s.bool,
  /**
   * If `true`, the List Subheader is indented.
   * @default false
   */
  inset: s.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object])
});
const Mv = Di, Av = Si(/* @__PURE__ */ P.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function Iv(e) {
  return Ve("MuiChip", e);
}
const Dv = ze("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), pe = Dv, Lv = ["avatar", "className", "clickable", "color", "component", "deleteIcon", "disabled", "icon", "label", "onClick", "onDelete", "onKeyDown", "onKeyUp", "size", "variant", "tabIndex", "skipFocusWhenDisabled"], Vv = (e) => {
  const {
    classes: t,
    disabled: r,
    size: n,
    color: o,
    iconColor: i,
    onDelete: a,
    clickable: l,
    variant: c
  } = e, u = {
    root: ["root", c, r && "disabled", `size${oe(n)}`, `color${oe(o)}`, l && "clickable", l && `clickableColor${oe(o)}`, a && "deletable", a && `deletableColor${oe(o)}`, `${c}${oe(o)}`],
    label: ["label", `label${oe(n)}`],
    avatar: ["avatar", `avatar${oe(n)}`, `avatarColor${oe(o)}`],
    icon: ["icon", `icon${oe(n)}`, `iconColor${oe(i)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${oe(n)}`, `deleteIconColor${oe(o)}`, `deleteIcon${oe(c)}Color${oe(o)}`]
  };
  return Ge(u, Iv, t);
}, zv = Ee("div", {
  name: "MuiChip",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e, {
      color: n,
      iconColor: o,
      clickable: i,
      onDelete: a,
      size: l,
      variant: c
    } = r;
    return [{
      [`& .${pe.avatar}`]: t.avatar
    }, {
      [`& .${pe.avatar}`]: t[`avatar${oe(l)}`]
    }, {
      [`& .${pe.avatar}`]: t[`avatarColor${oe(n)}`]
    }, {
      [`& .${pe.icon}`]: t.icon
    }, {
      [`& .${pe.icon}`]: t[`icon${oe(l)}`]
    }, {
      [`& .${pe.icon}`]: t[`iconColor${oe(o)}`]
    }, {
      [`& .${pe.deleteIcon}`]: t.deleteIcon
    }, {
      [`& .${pe.deleteIcon}`]: t[`deleteIcon${oe(l)}`]
    }, {
      [`& .${pe.deleteIcon}`]: t[`deleteIconColor${oe(n)}`]
    }, {
      [`& .${pe.deleteIcon}`]: t[`deleteIcon${oe(c)}Color${oe(n)}`]
    }, t.root, t[`size${oe(l)}`], t[`color${oe(n)}`], i && t.clickable, i && n !== "default" && t[`clickableColor${oe(n)})`], a && t.deletable, a && n !== "default" && t[`deletableColor${oe(n)}`], t[c], t[`${c}${oe(n)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  const r = e.palette.mode === "light" ? e.palette.grey[700] : e.palette.grey[300];
  return O({
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
    [`&.${pe.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${pe.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : r,
      fontSize: e.typography.pxToRem(12)
    },
    [`& .${pe.avatarColorPrimary}`]: {
      color: (e.vars || e).palette.primary.contrastText,
      backgroundColor: (e.vars || e).palette.primary.dark
    },
    [`& .${pe.avatarColorSecondary}`]: {
      color: (e.vars || e).palette.secondary.contrastText,
      backgroundColor: (e.vars || e).palette.secondary.dark
    },
    [`& .${pe.avatarSmall}`]: {
      marginLeft: 4,
      marginRight: -4,
      width: 18,
      height: 18,
      fontSize: e.typography.pxToRem(10)
    },
    [`& .${pe.icon}`]: O({
      marginLeft: 5,
      marginRight: -6
    }, t.size === "small" && {
      fontSize: 18,
      marginLeft: 4,
      marginRight: -4
    }, t.iconColor === t.color && O({
      color: e.vars ? e.vars.palette.Chip.defaultIconColor : r
    }, t.color !== "default" && {
      color: "inherit"
    })),
    [`& .${pe.deleteIcon}`]: O({
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
    [`&.${pe.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Ne(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  }, t.onDelete && t.color !== "default" && {
    [`&.${pe.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette[t.color].dark
    }
  });
}, ({
  theme: e,
  ownerState: t
}) => O({}, t.clickable && {
  userSelect: "none",
  WebkitTapHighlightColor: "transparent",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Ne(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
  },
  [`&.${pe.focusVisible}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Ne(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
  },
  "&:active": {
    boxShadow: (e.vars || e).shadows[1]
  }
}, t.clickable && t.color !== "default" && {
  [`&:hover, &.${pe.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette[t.color].dark
  }
}), ({
  theme: e,
  ownerState: t
}) => O({}, t.variant === "outlined" && {
  backgroundColor: "transparent",
  border: e.vars ? `1px solid ${e.vars.palette.Chip.defaultBorder}` : `1px solid ${e.palette.mode === "light" ? e.palette.grey[400] : e.palette.grey[700]}`,
  [`&.${pe.clickable}:hover`]: {
    backgroundColor: (e.vars || e).palette.action.hover
  },
  [`&.${pe.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`& .${pe.avatar}`]: {
    marginLeft: 4
  },
  [`& .${pe.avatarSmall}`]: {
    marginLeft: 2
  },
  [`& .${pe.icon}`]: {
    marginLeft: 4
  },
  [`& .${pe.iconSmall}`]: {
    marginLeft: 2
  },
  [`& .${pe.deleteIcon}`]: {
    marginRight: 5
  },
  [`& .${pe.deleteIconSmall}`]: {
    marginRight: 3
  }
}, t.variant === "outlined" && t.color !== "default" && {
  color: (e.vars || e).palette[t.color].main,
  border: `1px solid ${e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)` : Ne(e.palette[t.color].main, 0.7)}`,
  [`&.${pe.clickable}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ne(e.palette[t.color].main, e.palette.action.hoverOpacity)
  },
  [`&.${pe.focusVisible}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.focusOpacity})` : Ne(e.palette[t.color].main, e.palette.action.focusOpacity)
  },
  [`& .${pe.deleteIcon}`]: {
    color: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)` : Ne(e.palette[t.color].main, 0.7),
    "&:hover, &:active": {
      color: (e.vars || e).palette[t.color].main
    }
  }
})), Wv = Ee("span", {
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
}) => O({
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
function sa(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const Gl = /* @__PURE__ */ x.forwardRef(function(t, r) {
  const n = We({
    props: t,
    name: "MuiChip"
  }), {
    avatar: o,
    className: i,
    clickable: a,
    color: l = "default",
    component: c,
    deleteIcon: u,
    disabled: f = !1,
    icon: d,
    label: p,
    onClick: g,
    onDelete: y,
    onKeyDown: m,
    onKeyUp: v,
    size: E = "medium",
    variant: S = "filled",
    tabIndex: C,
    skipFocusWhenDisabled: T = !1
    // TODO v6: Rename to `focusableWhenDisabled`.
  } = n, b = de(n, Lv), w = x.useRef(null), R = tt(w, r), I = (re) => {
    re.stopPropagation(), y && y(re);
  }, V = (re) => {
    re.currentTarget === re.target && sa(re) && re.preventDefault(), m && m(re);
  }, A = (re) => {
    re.currentTarget === re.target && (y && sa(re) ? y(re) : re.key === "Escape" && w.current && w.current.blur()), v && v(re);
  }, z = a !== !1 && g ? !0 : a, K = z || y ? Hn : c || "div", W = O({}, n, {
    component: K,
    disabled: f,
    size: E,
    color: l,
    iconColor: /* @__PURE__ */ x.isValidElement(d) && d.props.color || l,
    onDelete: !!y,
    clickable: z,
    variant: S
  }), G = Vv(W), Y = K === Hn ? O({
    component: c || "div",
    focusVisibleClassName: G.focusVisible
  }, y && {
    disableRipple: !0
  }) : {};
  let F = null;
  y && (F = u && /* @__PURE__ */ x.isValidElement(u) ? /* @__PURE__ */ x.cloneElement(u, {
    className: fe(u.props.className, G.deleteIcon),
    onClick: I
  }) : /* @__PURE__ */ P.jsx(Av, {
    className: fe(G.deleteIcon),
    onClick: I
  }));
  let X = null;
  o && /* @__PURE__ */ x.isValidElement(o) && (X = /* @__PURE__ */ x.cloneElement(o, {
    className: fe(G.avatar, o.props.className)
  }));
  let te = null;
  return d && /* @__PURE__ */ x.isValidElement(d) && (te = /* @__PURE__ */ x.cloneElement(d, {
    className: fe(G.icon, d.props.className)
  })), process.env.NODE_ENV !== "production" && X && te && console.error("MUI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one."), /* @__PURE__ */ P.jsxs(zv, O({
    as: K,
    className: fe(G.root, i),
    disabled: z && f ? !0 : void 0,
    onClick: g,
    onKeyDown: V,
    onKeyUp: A,
    ref: R,
    tabIndex: T && f ? -1 : C,
    ownerState: W
  }, Y, b, {
    children: [X || te, /* @__PURE__ */ P.jsx(Wv, {
      className: fe(G.label),
      ownerState: W,
      children: p
    }), F]
  }));
});
process.env.NODE_ENV !== "production" && (Gl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The Avatar element to display.
   */
  avatar: s.element,
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: rl,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * If `true`, the chip will appear clickable, and will raise when pressed,
   * even if the onClick prop is not defined.
   * If `false`, the chip will not appear clickable, even if onClick prop is defined.
   * This can be used, for example,
   * along with the component prop to indicate an anchor Chip is clickable.
   * Note: this controls the UI and does not affect the onClick event.
   */
  clickable: s.bool,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: s.oneOfType([s.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), s.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: s.elementType,
  /**
   * Override the default delete icon element. Shown only if `onDelete` is set.
   */
  deleteIcon: s.element,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: s.bool,
  /**
   * Icon element.
   */
  icon: s.element,
  /**
   * The content of the component.
   */
  label: s.node,
  /**
   * @ignore
   */
  onClick: s.func,
  /**
   * Callback fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   */
  onDelete: s.func,
  /**
   * @ignore
   */
  onKeyDown: s.func,
  /**
   * @ignore
   */
  onKeyUp: s.func,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: s.oneOfType([s.oneOf(["medium", "small"]), s.string]),
  /**
   * If `true`, allows the disabled chip to escape focus.
   * If `false`, allows the disabled chip to receive focus.
   * @default false
   */
  skipFocusWhenDisabled: s.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object]),
  /**
   * @ignore
   */
  tabIndex: s.number,
  /**
   * The variant to use.
   * @default 'filled'
   */
  variant: s.oneOfType([s.oneOf(["filled", "outlined"]), s.string])
});
const Fv = Gl, Bv = Si(/* @__PURE__ */ P.jsx("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), "Person");
function Uv(e) {
  return Ve("MuiAvatar", e);
}
ze("MuiAvatar", ["root", "colorDefault", "circular", "rounded", "square", "img", "fallback"]);
const qv = ["alt", "children", "className", "component", "slots", "slotProps", "imgProps", "sizes", "src", "srcSet", "variant"], Yv = sm(), Hv = (e) => {
  const {
    classes: t,
    variant: r,
    colorDefault: n
  } = e;
  return Ge({
    root: ["root", r, n && "colorDefault"],
    img: ["img"],
    fallback: ["fallback"]
  }, Uv, t);
}, Gv = Ee("div", {
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
    style: O({
      color: (e.vars || e).palette.background.default
    }, e.vars ? {
      backgroundColor: e.vars.palette.Avatar.defaultBg
    } : O({
      backgroundColor: e.palette.grey[400]
    }, e.applyStyles("dark", {
      backgroundColor: e.palette.grey[600]
    })))
  }]
})), Kv = Ee("img", {
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
}), Xv = Ee(Bv, {
  name: "MuiAvatar",
  slot: "Fallback",
  overridesResolver: (e, t) => t.fallback
})({
  width: "75%",
  height: "75%"
});
function Jv({
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
    let a = !0;
    const l = new Image();
    return l.onload = () => {
      a && i("loaded");
    }, l.onerror = () => {
      a && i("error");
    }, l.crossOrigin = e, l.referrerPolicy = t, l.src = r, n && (l.srcset = n), () => {
      a = !1;
    };
  }, [e, t, r, n]), o;
}
const Kl = /* @__PURE__ */ x.forwardRef(function(t, r) {
  const n = Yv({
    props: t,
    name: "MuiAvatar"
  }), {
    alt: o,
    children: i,
    className: a,
    component: l = "div",
    slots: c = {},
    slotProps: u = {},
    imgProps: f,
    sizes: d,
    src: p,
    srcSet: g,
    variant: y = "circular"
  } = n, m = de(n, qv);
  let v = null;
  const E = Jv(O({}, f, {
    src: p,
    srcSet: g
  })), S = p || g, C = S && E !== "error", T = O({}, n, {
    colorDefault: !C,
    component: l,
    variant: y
  }), b = Hv(T), [w, R] = km("img", {
    className: b.img,
    elementType: Kv,
    externalForwardedProps: {
      slots: c,
      slotProps: {
        img: O({}, f, u.img)
      }
    },
    additionalProps: {
      alt: o,
      src: p,
      srcSet: g,
      sizes: d
    },
    ownerState: T
  });
  return C ? v = /* @__PURE__ */ P.jsx(w, O({}, R)) : i || i === 0 ? v = i : S && o ? v = o[0] : v = /* @__PURE__ */ P.jsx(Xv, {
    ownerState: T,
    className: b.fallback
  }), /* @__PURE__ */ P.jsx(Gv, O({
    as: l,
    ownerState: T,
    className: fe(b.root, a),
    ref: r
  }, m, {
    children: v
  }));
});
process.env.NODE_ENV !== "production" && (Kl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Used in combination with `src` or `srcSet` to
   * provide an alt attribute for the rendered `img` element.
   */
  alt: s.string,
  /**
   * Used to render icon or text elements inside the Avatar if `src` is not set.
   * This can be an element, or just a string.
   */
  children: s.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: s.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes) applied to the `img` element if the component is used to display an image.
   * It can be used to listen for the loading error event.
   * @deprecated Use `slotProps.img` instead. This prop will be removed in v7. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   */
  imgProps: s.object,
  /**
   * The `sizes` attribute for the `img` element.
   */
  sizes: s.string,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: s.shape({
    img: s.oneOfType([s.func, s.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: s.shape({
    img: s.elementType
  }),
  /**
   * The `src` attribute for the `img` element.
   */
  src: s.string,
  /**
   * The `srcSet` attribute for the `img` element.
   * Use this attribute for responsive image display.
   */
  srcSet: s.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object]),
  /**
   * The shape of the avatar.
   * @default 'circular'
   */
  variant: s.oneOfType([s.oneOf(["circular", "rounded", "square"]), s.string])
});
const Zv = Kl, Qv = ze("MuiBox", ["root"]), eg = Qv, tg = Ti(), Xl = cd({
  themeId: br,
  defaultTheme: tg,
  defaultClassName: eg.root,
  generateClassName: hi.generate
});
process.env.NODE_ENV !== "production" && (Xl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: s.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: s.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object])
});
const xt = Xl, rg = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function Zo(e) {
  return `scale(${e}, ${e ** 2})`;
}
const ng = {
  entering: {
    opacity: 1,
    transform: Zo(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Mo = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Li = /* @__PURE__ */ x.forwardRef(function(t, r) {
  const {
    addEndListener: n,
    appear: o = !0,
    children: i,
    easing: a,
    in: l,
    onEnter: c,
    onEntered: u,
    onEntering: f,
    onExit: d,
    onExited: p,
    onExiting: g,
    style: y,
    timeout: m = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: v = Ol
  } = t, E = de(t, rg), S = Kt(), C = x.useRef(), T = Pr(), b = x.useRef(null), w = tt(b, i.ref, r), R = (Y) => (F) => {
    if (Y) {
      const X = b.current;
      F === void 0 ? Y(X) : Y(X, F);
    }
  }, I = R(f), V = R((Y, F) => {
    vm(Y);
    const {
      duration: X,
      delay: te,
      easing: re
    } = Yn({
      style: y,
      timeout: m,
      easing: a
    }, {
      mode: "enter"
    });
    let _;
    m === "auto" ? (_ = T.transitions.getAutoHeightDuration(Y.clientHeight), C.current = _) : _ = X, Y.style.transition = [T.transitions.create("opacity", {
      duration: _,
      delay: te
    }), T.transitions.create("transform", {
      duration: Mo ? _ : _ * 0.666,
      delay: te,
      easing: re
    })].join(","), c && c(Y, F);
  }), A = R(u), z = R(g), K = R((Y) => {
    const {
      duration: F,
      delay: X,
      easing: te
    } = Yn({
      style: y,
      timeout: m,
      easing: a
    }, {
      mode: "exit"
    });
    let re;
    m === "auto" ? (re = T.transitions.getAutoHeightDuration(Y.clientHeight), C.current = re) : re = F, Y.style.transition = [T.transitions.create("opacity", {
      duration: re,
      delay: X
    }), T.transitions.create("transform", {
      duration: Mo ? re : re * 0.666,
      delay: Mo ? X : X || re * 0.333,
      easing: te
    })].join(","), Y.style.opacity = 0, Y.style.transform = Zo(0.75), d && d(Y);
  }), W = R(p), G = (Y) => {
    m === "auto" && S.start(C.current || 0, Y), n && n(b.current, Y);
  };
  return /* @__PURE__ */ P.jsx(v, O({
    appear: o,
    in: l,
    nodeRef: b,
    onEnter: V,
    onEntered: A,
    onEntering: I,
    onExit: K,
    onExited: W,
    onExiting: z,
    addEndListener: G,
    timeout: m === "auto" ? null : m
  }, E, {
    children: (Y, F) => /* @__PURE__ */ x.cloneElement(i, O({
      style: O({
        opacity: 0,
        transform: Zo(0.75),
        visibility: Y === "exited" && !l ? "hidden" : void 0
      }, ng[Y], y, i.props.style),
      ref: w
    }, F))
  }));
});
process.env.NODE_ENV !== "production" && (Li.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: s.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: s.bool,
  /**
   * A single child content element.
   */
  children: Qa.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: s.oneOfType([s.shape({
    enter: s.string,
    exit: s.string
  }), s.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: s.bool,
  /**
   * @ignore
   */
  onEnter: s.func,
  /**
   * @ignore
   */
  onEntered: s.func,
  /**
   * @ignore
   */
  onEntering: s.func,
  /**
   * @ignore
   */
  onExit: s.func,
  /**
   * @ignore
   */
  onExited: s.func,
  /**
   * @ignore
   */
  onExiting: s.func,
  /**
   * @ignore
   */
  style: s.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: s.oneOfType([s.oneOf(["auto"]), s.number, s.shape({
    appear: s.number,
    enter: s.number,
    exit: s.number
  })])
});
Li.muiSupportAuto = !0;
const aa = Li, Jl = /* @__PURE__ */ x.createContext({});
process.env.NODE_ENV !== "production" && (Jl.displayName = "ListContext");
const en = Jl;
function og(e) {
  return Ve("MuiList", e);
}
ze("MuiList", ["root", "padding", "dense", "subheader"]);
const ig = ["children", "className", "component", "dense", "disablePadding", "subheader"], sg = (e) => {
  const {
    classes: t,
    disablePadding: r,
    dense: n,
    subheader: o
  } = e;
  return Ge({
    root: ["root", !r && "padding", n && "dense", o && "subheader"]
  }, og, t);
}, ag = Ee("ul", {
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
}) => O({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative"
}, !e.disablePadding && {
  paddingTop: 8,
  paddingBottom: 8
}, e.subheader && {
  paddingTop: 0
})), Zl = /* @__PURE__ */ x.forwardRef(function(t, r) {
  const n = We({
    props: t,
    name: "MuiList"
  }), {
    children: o,
    className: i,
    component: a = "ul",
    dense: l = !1,
    disablePadding: c = !1,
    subheader: u
  } = n, f = de(n, ig), d = x.useMemo(() => ({
    dense: l
  }), [l]), p = O({}, n, {
    component: a,
    dense: l,
    disablePadding: c
  }), g = sg(p);
  return /* @__PURE__ */ P.jsx(en.Provider, {
    value: d,
    children: /* @__PURE__ */ P.jsxs(ag, O({
      as: a,
      className: fe(g.root, i),
      ref: r,
      ownerState: p
    }, f, {
      children: [u, o]
    }))
  });
});
process.env.NODE_ENV !== "production" && (Zl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: s.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: s.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: s.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: s.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: s.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object])
});
const Ql = Zl;
function lg(e) {
  return Ve("MuiListItemButton", e);
}
const cg = ze("MuiListItemButton", ["root", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "selected"]), Vr = cg, ug = ["alignItems", "autoFocus", "component", "children", "dense", "disableGutters", "divider", "focusVisibleClassName", "selected", "className"], fg = (e, t) => {
  const {
    ownerState: r
  } = e;
  return [t.root, r.dense && t.dense, r.alignItems === "flex-start" && t.alignItemsFlexStart, r.divider && t.divider, !r.disableGutters && t.gutters];
}, dg = (e) => {
  const {
    alignItems: t,
    classes: r,
    dense: n,
    disabled: o,
    disableGutters: i,
    divider: a,
    selected: l
  } = e, u = Ge({
    root: ["root", n && "dense", !i && "gutters", a && "divider", o && "disabled", t === "flex-start" && "alignItemsFlexStart", l && "selected"]
  }, lg, r);
  return O({}, r, u);
}, pg = Ee(Hn, {
  shouldForwardProp: (e) => bl(e) || e === "classes",
  name: "MuiListItemButton",
  slot: "Root",
  overridesResolver: fg
})(({
  theme: e,
  ownerState: t
}) => O({
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
  [`&.${Vr.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Ne(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${Vr.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Ne(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${Vr.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Ne(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Ne(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  },
  [`&.${Vr.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${Vr.disabled}`]: {
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
})), ec = /* @__PURE__ */ x.forwardRef(function(t, r) {
  const n = We({
    props: t,
    name: "MuiListItemButton"
  }), {
    alignItems: o = "center",
    autoFocus: i = !1,
    component: a = "div",
    children: l,
    dense: c = !1,
    disableGutters: u = !1,
    divider: f = !1,
    focusVisibleClassName: d,
    selected: p = !1,
    className: g
  } = n, y = de(n, ug), m = x.useContext(en), v = x.useMemo(() => ({
    dense: c || m.dense || !1,
    alignItems: o,
    disableGutters: u
  }), [o, m.dense, c, u]), E = x.useRef(null);
  Zt(() => {
    i && (E.current ? E.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a ListItemButton whose component has not been rendered."));
  }, [i]);
  const S = O({}, n, {
    alignItems: o,
    dense: v.dense,
    disableGutters: u,
    divider: f,
    selected: p
  }), C = dg(S), T = tt(E, r);
  return /* @__PURE__ */ P.jsx(en.Provider, {
    value: v,
    children: /* @__PURE__ */ P.jsx(pg, O({
      ref: T,
      href: y.href || y.to,
      component: (y.href || y.to) && a === "div" ? "button" : a,
      focusVisibleClassName: fe(C.focusVisible, d),
      ownerState: S,
      className: fe(C.root, g)
    }, y, {
      classes: C,
      children: l
    }))
  });
});
process.env.NODE_ENV !== "production" && (ec.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Defines the `align-items` style property.
   * @default 'center'
   */
  alignItems: s.oneOf(["center", "flex-start"]),
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus: s.bool,
  /**
   * The content of the component if a `ListItemSecondaryAction` is used it must
   * be the last child.
   */
  children: s.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: s.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent List component.
   * @default false
   */
  dense: s.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: s.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: s.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the list item.
   * @default false
   */
  divider: s.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: s.string,
  /**
   * @ignore
   */
  href: s.string,
  /**
   * Use to apply selected styling.
   * @default false
   */
  selected: s.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object])
});
const tc = ec;
function mg(e) {
  return Ve("MuiListItemIcon", e);
}
ze("MuiListItemIcon", ["root", "alignItemsFlexStart"]);
const hg = ["className"], vg = (e) => {
  const {
    alignItems: t,
    classes: r
  } = e;
  return Ge({
    root: ["root", t === "flex-start" && "alignItemsFlexStart"]
  }, mg, r);
}, gg = Ee("div", {
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
}) => O({
  minWidth: 56,
  color: (e.vars || e).palette.action.active,
  flexShrink: 0,
  display: "inline-flex"
}, t.alignItems === "flex-start" && {
  marginTop: 8
})), rc = /* @__PURE__ */ x.forwardRef(function(t, r) {
  const n = We({
    props: t,
    name: "MuiListItemIcon"
  }), {
    className: o
  } = n, i = de(n, hg), a = x.useContext(en), l = O({}, n, {
    alignItems: a.alignItems
  }), c = vg(l);
  return /* @__PURE__ */ P.jsx(gg, O({
    className: fe(c.root, o),
    ownerState: l,
    ref: r
  }, i));
});
process.env.NODE_ENV !== "production" && (rc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally `Icon`, `SvgIcon`,
   * or a `@mui/icons-material` SVG icon element.
   */
  children: s.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object])
});
const Qo = rc;
function yg(e) {
  return Ve("MuiListItemText", e);
}
const bg = ze("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), la = bg, xg = ["children", "className", "disableTypography", "inset", "primary", "primaryTypographyProps", "secondary", "secondaryTypographyProps"], Eg = (e) => {
  const {
    classes: t,
    inset: r,
    primary: n,
    secondary: o,
    dense: i
  } = e;
  return Ge({
    root: ["root", r && "inset", i && "dense", n && o && "multiline"],
    primary: ["primary"],
    secondary: ["secondary"]
  }, yg, t);
}, Og = Ee("div", {
  name: "MuiListItemText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [{
      [`& .${la.primary}`]: t.primary
    }, {
      [`& .${la.secondary}`]: t.secondary
    }, t.root, r.inset && t.inset, r.primary && r.secondary && t.multiline, r.dense && t.dense];
  }
})(({
  ownerState: e
}) => O({
  flex: "1 1 auto",
  minWidth: 0,
  marginTop: 4,
  marginBottom: 4
}, e.primary && e.secondary && {
  marginTop: 6,
  marginBottom: 6
}, e.inset && {
  paddingLeft: 56
})), nc = /* @__PURE__ */ x.forwardRef(function(t, r) {
  const n = We({
    props: t,
    name: "MuiListItemText"
  }), {
    children: o,
    className: i,
    disableTypography: a = !1,
    inset: l = !1,
    primary: c,
    primaryTypographyProps: u,
    secondary: f,
    secondaryTypographyProps: d
  } = n, p = de(n, xg), {
    dense: g
  } = x.useContext(en);
  let y = c ?? o, m = f;
  const v = O({}, n, {
    disableTypography: a,
    inset: l,
    primary: !!y,
    secondary: !!m,
    dense: g
  }), E = Eg(v);
  return y != null && y.type !== Rt && !a && (y = /* @__PURE__ */ P.jsx(Rt, O({
    variant: g ? "body2" : "body1",
    className: E.primary,
    component: u != null && u.variant ? void 0 : "span",
    display: "block"
  }, u, {
    children: y
  }))), m != null && m.type !== Rt && !a && (m = /* @__PURE__ */ P.jsx(Rt, O({
    variant: "body2",
    className: E.secondary,
    color: "text.secondary",
    display: "block"
  }, d, {
    children: m
  }))), /* @__PURE__ */ P.jsxs(Og, O({
    className: fe(E.root, i),
    ownerState: v,
    ref: r
  }, p, {
    children: [y, m]
  }));
});
process.env.NODE_ENV !== "production" && (nc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Alias for the `primary` prop.
   */
  children: s.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * If `true`, the children won't be wrapped by a Typography component.
   * This can be useful to render an alternative Typography variant by wrapping
   * the `children` (or `primary`) text, and optional `secondary` text
   * with the Typography component.
   * @default false
   */
  disableTypography: s.bool,
  /**
   * If `true`, the children are indented.
   * This should be used if there is no left avatar or left icon.
   * @default false
   */
  inset: s.bool,
  /**
   * The main content element.
   */
  primary: s.node,
  /**
   * These props will be forwarded to the primary typography component
   * (as long as disableTypography is not `true`).
   */
  primaryTypographyProps: s.object,
  /**
   * The secondary content element.
   */
  secondary: s.node,
  /**
   * These props will be forwarded to the secondary typography component
   * (as long as disableTypography is not `true`).
   */
  secondaryTypographyProps: s.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object])
});
const Vi = nc;
function Tg(e) {
  return Ve("MuiTooltip", e);
}
const wg = ze("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]), Lt = wg, Sg = ["arrow", "children", "classes", "components", "componentsProps", "describeChild", "disableFocusListener", "disableHoverListener", "disableInteractive", "disableTouchListener", "enterDelay", "enterNextDelay", "enterTouchDelay", "followCursor", "id", "leaveDelay", "leaveTouchDelay", "onClose", "onOpen", "open", "placement", "PopperComponent", "PopperProps", "slotProps", "slots", "title", "TransitionComponent", "TransitionProps"];
function Cg(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Rg = (e) => {
  const {
    classes: t,
    disableInteractive: r,
    arrow: n,
    touch: o,
    placement: i
  } = e, a = {
    popper: ["popper", !r && "popperInteractive", n && "popperArrow"],
    tooltip: ["tooltip", n && "tooltipArrow", o && "touch", `tooltipPlacement${oe(i.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return Ge(a, Tg, t);
}, _g = Ee(Hl, {
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
}) => O({
  zIndex: (e.vars || e).zIndex.tooltip,
  pointerEvents: "none"
}, !t.disableInteractive && {
  pointerEvents: "auto"
}, !r && {
  pointerEvents: "none"
}, t.arrow && {
  [`&[data-popper-placement*="bottom"] .${Lt.arrow}`]: {
    top: 0,
    marginTop: "-0.71em",
    "&::before": {
      transformOrigin: "0 100%"
    }
  },
  [`&[data-popper-placement*="top"] .${Lt.arrow}`]: {
    bottom: 0,
    marginBottom: "-0.71em",
    "&::before": {
      transformOrigin: "100% 0"
    }
  },
  [`&[data-popper-placement*="right"] .${Lt.arrow}`]: O({}, t.isRtl ? {
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
  [`&[data-popper-placement*="left"] .${Lt.arrow}`]: O({}, t.isRtl ? {
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
})), Pg = Ee("div", {
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
}) => O({
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
  lineHeight: `${Cg(16 / 14)}em`,
  fontWeight: e.typography.fontWeightRegular
}, {
  [`.${Lt.popper}[data-popper-placement*="left"] &`]: O({
    transformOrigin: "right center"
  }, t.isRtl ? O({
    marginLeft: "14px"
  }, t.touch && {
    marginLeft: "24px"
  }) : O({
    marginRight: "14px"
  }, t.touch && {
    marginRight: "24px"
  })),
  [`.${Lt.popper}[data-popper-placement*="right"] &`]: O({
    transformOrigin: "left center"
  }, t.isRtl ? O({
    marginRight: "14px"
  }, t.touch && {
    marginRight: "24px"
  }) : O({
    marginLeft: "14px"
  }, t.touch && {
    marginLeft: "24px"
  })),
  [`.${Lt.popper}[data-popper-placement*="top"] &`]: O({
    transformOrigin: "center bottom",
    marginBottom: "14px"
  }, t.touch && {
    marginBottom: "24px"
  }),
  [`.${Lt.popper}[data-popper-placement*="bottom"] &`]: O({
    transformOrigin: "center top",
    marginTop: "14px"
  }, t.touch && {
    marginTop: "24px"
  })
})), $g = Ee("span", {
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
let wn = !1;
const ca = new ln();
let zr = {
  x: 0,
  y: 0
};
function Sn(e, t) {
  return (r, ...n) => {
    t && t(r, ...n), e(r, ...n);
  };
}
const oc = /* @__PURE__ */ x.forwardRef(function(t, r) {
  var n, o, i, a, l, c, u, f, d, p, g, y, m, v, E, S, C, T, b;
  const w = We({
    props: t,
    name: "MuiTooltip"
  }), {
    arrow: R = !1,
    children: I,
    components: V = {},
    componentsProps: A = {},
    describeChild: z = !1,
    disableFocusListener: K = !1,
    disableHoverListener: W = !1,
    disableInteractive: G = !1,
    disableTouchListener: Y = !1,
    enterDelay: F = 100,
    enterNextDelay: X = 0,
    enterTouchDelay: te = 700,
    followCursor: re = !1,
    id: _,
    leaveDelay: k = 0,
    leaveTouchDelay: ee = 1500,
    onClose: Z,
    onOpen: B,
    open: J,
    placement: N = "bottom",
    PopperComponent: L,
    PopperProps: D = {},
    slotProps: q = {},
    slots: Q = {},
    title: ae,
    TransitionComponent: j = aa,
    TransitionProps: Ce
  } = w, U = de(w, Sg), Oe = /* @__PURE__ */ x.isValidElement(I) ? I : /* @__PURE__ */ P.jsx("span", {
    children: I
  }), je = Pr(), nt = qd(), [$e, ht] = x.useState(), [ke, ot] = x.useState(null), Ke = x.useRef(!1), gt = G || re, Xe = Kt(), De = Kt(), it = Kt(), Fe = Kt(), [jt, ie] = nl({
    controlled: J,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let Le = jt;
  if (process.env.NODE_ENV !== "production") {
    const {
      current: H
    } = x.useRef(J !== void 0);
    x.useEffect(() => {
      $e && $e.disabled && !H && ae !== "" && $e.tagName.toLowerCase() === "button" && console.error(["MUI: You are providing a disabled `button` child to the Tooltip component.", "A disabled element does not fire events.", "Tooltip needs to listen to the child element's events to display the title.", "", "Add a simple wrapper element, such as a `span`."].join(`
`));
    }, [ae, $e, H]);
  }
  const St = tl(_), yt = x.useRef(), Ft = Gt(() => {
    yt.current !== void 0 && (document.body.style.WebkitUserSelect = yt.current, yt.current = void 0), Fe.clear();
  });
  x.useEffect(() => Ft, [Ft]);
  const pn = (H) => {
    ca.clear(), wn = !0, ie(!0), B && !Le && B(H);
  }, er = Gt(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (H) => {
      ca.start(800 + k, () => {
        wn = !1;
      }), ie(!1), Z && Le && Z(H), Xe.start(je.transitions.duration.shortest, () => {
        Ke.current = !1;
      });
    }
  ), tr = (H) => {
    Ke.current && H.type !== "touchstart" || ($e && $e.removeAttribute("title"), De.clear(), it.clear(), F || wn && X ? De.start(wn ? X : F, () => {
      pn(H);
    }) : pn(H));
  }, Nr = (H) => {
    De.clear(), it.start(k, () => {
      er(H);
    });
  }, {
    isFocusVisibleRef: mn,
    onBlur: jr,
    onFocus: hn,
    ref: kt
  } = bi(), [, rr] = x.useState(!1), nr = (H) => {
    jr(H), mn.current === !1 && (rr(!1), Nr(H));
  }, kr = (H) => {
    $e || ht(H.currentTarget), hn(H), mn.current === !0 && (rr(!0), tr(H));
  }, vn = (H) => {
    Ke.current = !0;
    const ue = Oe.props;
    ue.onTouchStart && ue.onTouchStart(H);
  }, gn = (H) => {
    vn(H), it.clear(), Xe.clear(), Ft(), yt.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", Fe.start(te, () => {
      document.body.style.WebkitUserSelect = yt.current, tr(H);
    });
  }, xo = (H) => {
    Oe.props.onTouchEnd && Oe.props.onTouchEnd(H), Ft(), it.start(ee, () => {
      er(H);
    });
  };
  x.useEffect(() => {
    if (!Le)
      return;
    function H(ue) {
      (ue.key === "Escape" || ue.key === "Esc") && er(ue);
    }
    return document.addEventListener("keydown", H), () => {
      document.removeEventListener("keydown", H);
    };
  }, [er, Le]);
  const yn = tt(Oe.ref, kt, ht, r);
  !ae && ae !== 0 && (Le = !1);
  const or = x.useRef(), Eo = (H) => {
    const ue = Oe.props;
    ue.onMouseMove && ue.onMouseMove(H), zr = {
      x: H.clientX,
      y: H.clientY
    }, or.current && or.current.update();
  }, Bt = {}, ir = typeof ae == "string";
  z ? (Bt.title = !Le && ir && !W ? ae : null, Bt["aria-describedby"] = Le ? St : null) : (Bt["aria-label"] = ir ? ae : null, Bt["aria-labelledby"] = Le && !ir ? St : null);
  const Be = O({}, Bt, U, Oe.props, {
    className: fe(U.className, Oe.props.className),
    onTouchStart: vn,
    ref: yn
  }, re ? {
    onMouseMove: Eo
  } : {});
  process.env.NODE_ENV !== "production" && (Be["data-mui-internal-clone-element"] = !0, x.useEffect(() => {
    $e && !$e.getAttribute("data-mui-internal-clone-element") && console.error(["MUI: The `children` component of the Tooltip is not forwarding its props correctly.", "Please make sure that props are spread on the same element that the ref is applied to."].join(`
`));
  }, [$e]));
  const Ut = {};
  Y || (Be.onTouchStart = gn, Be.onTouchEnd = xo), W || (Be.onMouseOver = Sn(tr, Be.onMouseOver), Be.onMouseLeave = Sn(Nr, Be.onMouseLeave), gt || (Ut.onMouseOver = tr, Ut.onMouseLeave = Nr)), K || (Be.onFocus = Sn(kr, Be.onFocus), Be.onBlur = Sn(nr, Be.onBlur), gt || (Ut.onFocus = kr, Ut.onBlur = nr)), process.env.NODE_ENV !== "production" && Oe.props.title && console.error(["MUI: You have provided a `title` prop to the child of <Tooltip />.", `Remove this title prop \`${Oe.props.title}\` or the Tooltip component.`].join(`
`));
  const Oo = x.useMemo(() => {
    var H;
    let ue = [{
      name: "arrow",
      enabled: !!ke,
      options: {
        element: ke,
        padding: 4
      }
    }];
    return (H = D.popperOptions) != null && H.modifiers && (ue = ue.concat(D.popperOptions.modifiers)), O({}, D.popperOptions, {
      modifiers: ue
    });
  }, [ke, D]), qt = O({}, w, {
    isRtl: nt,
    arrow: R,
    disableInteractive: gt,
    placement: N,
    PopperComponentProp: L,
    touch: Ke.current
  }), h = Rg(qt), $ = (n = (o = Q.popper) != null ? o : V.Popper) != null ? n : _g, M = (i = (a = (l = Q.transition) != null ? l : V.Transition) != null ? a : j) != null ? i : aa, ne = (c = (u = Q.tooltip) != null ? u : V.Tooltip) != null ? c : Pg, ce = (f = (d = Q.arrow) != null ? d : V.Arrow) != null ? f : $g, xe = hr($, O({}, D, (p = q.popper) != null ? p : A.popper, {
    className: fe(h.popper, D == null ? void 0 : D.className, (g = (y = q.popper) != null ? y : A.popper) == null ? void 0 : g.className)
  }), qt), le = hr(M, O({}, Ce, (m = q.transition) != null ? m : A.transition), qt), se = hr(ne, O({}, (v = q.tooltip) != null ? v : A.tooltip, {
    className: fe(h.tooltip, (E = (S = q.tooltip) != null ? S : A.tooltip) == null ? void 0 : E.className)
  }), qt), Me = hr(ce, O({}, (C = q.arrow) != null ? C : A.arrow, {
    className: fe(h.arrow, (T = (b = q.arrow) != null ? b : A.arrow) == null ? void 0 : T.className)
  }), qt);
  return /* @__PURE__ */ P.jsxs(x.Fragment, {
    children: [/* @__PURE__ */ x.cloneElement(Oe, Be), /* @__PURE__ */ P.jsx($, O({
      as: L ?? Hl,
      placement: N,
      anchorEl: re ? {
        getBoundingClientRect: () => ({
          top: zr.y,
          left: zr.x,
          right: zr.x,
          bottom: zr.y,
          width: 0,
          height: 0
        })
      } : $e,
      popperRef: or,
      open: $e ? Le : !1,
      id: St,
      transition: !0
    }, Ut, xe, {
      popperOptions: Oo,
      children: ({
        TransitionProps: H
      }) => /* @__PURE__ */ P.jsx(M, O({
        timeout: je.transitions.duration.shorter
      }, H, le, {
        children: /* @__PURE__ */ P.jsxs(ne, O({}, se, {
          children: [ae, R ? /* @__PURE__ */ P.jsx(ce, O({}, Me, {
            ref: ot
          })) : null]
        }))
      }))
    }))]
  });
});
process.env.NODE_ENV !== "production" && (oc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, adds an arrow to the tooltip.
   * @default false
   */
  arrow: s.bool,
  /**
   * Tooltip reference element.
   */
  children: Qa.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: s.shape({
    Arrow: s.elementType,
    Popper: s.elementType,
    Tooltip: s.elementType,
    Transition: s.elementType
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
  componentsProps: s.shape({
    arrow: s.object,
    popper: s.object,
    tooltip: s.object,
    transition: s.object
  }),
  /**
   * Set to `true` if the `title` acts as an accessible description.
   * By default the `title` acts as an accessible label for the child.
   * @default false
   */
  describeChild: s.bool,
  /**
   * Do not respond to focus-visible events.
   * @default false
   */
  disableFocusListener: s.bool,
  /**
   * Do not respond to hover events.
   * @default false
   */
  disableHoverListener: s.bool,
  /**
   * Makes a tooltip not interactive, i.e. it will close when the user
   * hovers over the tooltip before the `leaveDelay` is expired.
   * @default false
   */
  disableInteractive: s.bool,
  /**
   * Do not respond to long press touch events.
   * @default false
   */
  disableTouchListener: s.bool,
  /**
   * The number of milliseconds to wait before showing the tooltip.
   * This prop won't impact the enter touch delay (`enterTouchDelay`).
   * @default 100
   */
  enterDelay: s.number,
  /**
   * The number of milliseconds to wait before showing the tooltip when one was already recently opened.
   * @default 0
   */
  enterNextDelay: s.number,
  /**
   * The number of milliseconds a user must touch the element before showing the tooltip.
   * @default 700
   */
  enterTouchDelay: s.number,
  /**
   * If `true`, the tooltip follow the cursor over the wrapped element.
   * @default false
   */
  followCursor: s.bool,
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide this prop. It falls back to a randomly generated id.
   */
  id: s.string,
  /**
   * The number of milliseconds to wait before hiding the tooltip.
   * This prop won't impact the leave touch delay (`leaveTouchDelay`).
   * @default 0
   */
  leaveDelay: s.number,
  /**
   * The number of milliseconds after the user stops touching an element before hiding the tooltip.
   * @default 1500
   */
  leaveTouchDelay: s.number,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onClose: s.func,
  /**
   * Callback fired when the component requests to be open.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onOpen: s.func,
  /**
   * If `true`, the component is shown.
   */
  open: s.bool,
  /**
   * Tooltip placement.
   * @default 'bottom'
   */
  placement: s.oneOf(["bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * The component used for the popper.
   * @default Popper
   */
  PopperComponent: s.elementType,
  /**
   * Props applied to the [`Popper`](/material-ui/api/popper/) element.
   * @default {}
   */
  PopperProps: s.object,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: s.shape({
    arrow: s.object,
    popper: s.object,
    tooltip: s.object,
    transition: s.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: s.shape({
    arrow: s.elementType,
    popper: s.elementType,
    tooltip: s.elementType,
    transition: s.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object]),
  /**
   * Tooltip title. Zero-length titles string, undefined, null and false are never displayed.
   */
  title: s.node,
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Grow
   */
  TransitionComponent: s.elementType,
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   */
  TransitionProps: s.object
});
const Ng = oc;
var jg = typeof global == "object" && global && global.Object === Object && global, kg = typeof self == "object" && self && self.Object === Object && self, ic = jg || kg || Function("return this")(), Jn = ic.Symbol, sc = Object.prototype, Mg = sc.hasOwnProperty, Ag = sc.toString, Wr = Jn ? Jn.toStringTag : void 0;
function Ig(e) {
  var t = Mg.call(e, Wr), r = e[Wr];
  try {
    e[Wr] = void 0;
    var n = !0;
  } catch {
  }
  var o = Ag.call(e);
  return n && (t ? e[Wr] = r : delete e[Wr]), o;
}
var Dg = Object.prototype, Lg = Dg.toString;
function Vg(e) {
  return Lg.call(e);
}
var zg = "[object Null]", Wg = "[object Undefined]", ua = Jn ? Jn.toStringTag : void 0;
function Fg(e) {
  return e == null ? e === void 0 ? Wg : zg : ua && ua in Object(e) ? Ig(e) : Vg(e);
}
function Bg(e) {
  return e != null && typeof e == "object";
}
var Ug = "[object Symbol]";
function qg(e) {
  return typeof e == "symbol" || Bg(e) && Fg(e) == Ug;
}
var Yg = /\s/;
function Hg(e) {
  for (var t = e.length; t-- && Yg.test(e.charAt(t)); )
    ;
  return t;
}
var Gg = /^\s+/;
function Kg(e) {
  return e && e.slice(0, Hg(e) + 1).replace(Gg, "");
}
function Zn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var fa = NaN, Xg = /^[-+]0x[0-9a-f]+$/i, Jg = /^0b[01]+$/i, Zg = /^0o[0-7]+$/i, Qg = parseInt;
function da(e) {
  if (typeof e == "number")
    return e;
  if (qg(e))
    return fa;
  if (Zn(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Zn(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Kg(e);
  var r = Jg.test(e);
  return r || Zg.test(e) ? Qg(e.slice(2), r ? 2 : 8) : Xg.test(e) ? fa : +e;
}
var Ao = function() {
  return ic.Date.now();
}, ey = "Expected a function", ty = Math.max, ry = Math.min;
function An(e, t, r) {
  var n, o, i, a, l, c, u = 0, f = !1, d = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(ey);
  t = da(t) || 0, Zn(r) && (f = !!r.leading, d = "maxWait" in r, i = d ? ty(da(r.maxWait) || 0, t) : i, p = "trailing" in r ? !!r.trailing : p);
  function g(w) {
    var R = n, I = o;
    return n = o = void 0, u = w, a = e.apply(I, R), a;
  }
  function y(w) {
    return u = w, l = setTimeout(E, t), f ? g(w) : a;
  }
  function m(w) {
    var R = w - c, I = w - u, V = t - R;
    return d ? ry(V, i - I) : V;
  }
  function v(w) {
    var R = w - c, I = w - u;
    return c === void 0 || R >= t || R < 0 || d && I >= i;
  }
  function E() {
    var w = Ao();
    if (v(w))
      return S(w);
    l = setTimeout(E, m(w));
  }
  function S(w) {
    return l = void 0, p && n ? g(w) : (n = o = void 0, a);
  }
  function C() {
    l !== void 0 && clearTimeout(l), u = 0, n = c = o = l = void 0;
  }
  function T() {
    return l === void 0 ? a : S(Ao());
  }
  function b() {
    var w = Ao(), R = v(w);
    if (n = arguments, o = this, c = w, R) {
      if (l === void 0)
        return y(c);
      if (d)
        return clearTimeout(l), l = setTimeout(E, t), g(c);
    }
    return l === void 0 && (l = setTimeout(E, t)), a;
  }
  return b.cancel = C, b.flush = T, b;
}
var ny = "Expected a function";
function oy(e, t, r) {
  var n = !0, o = !0;
  if (typeof e != "function")
    throw new TypeError(ny);
  return Zn(r) && (n = "leading" in r ? !!r.leading : n, o = "trailing" in r ? !!r.trailing : o), An(e, t, {
    leading: n,
    maxWait: t,
    trailing: o
  });
}
var iy = !!(typeof window < "u" && window.document && window.document.createElement), sy = iy;
const ac = /* @__PURE__ */ va(sy);
var vr = function() {
  return vr = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, vr.apply(this, arguments);
}, mr = null, pa = null;
ac && window.addEventListener("resize", function() {
  pa !== window.devicePixelRatio && (pa = window.devicePixelRatio, mr = null);
});
function ma() {
  if (mr === null) {
    if (typeof document > "u")
      return mr = 0, mr;
    var e = document.body, t = document.createElement("div");
    t.classList.add("simplebar-hide-scrollbar"), e.appendChild(t);
    var r = t.getBoundingClientRect().right;
    e.removeChild(t), mr = r;
  }
  return mr;
}
function lc(e) {
  return !e || !e.ownerDocument || !e.ownerDocument.defaultView ? window : e.ownerDocument.defaultView;
}
function cc(e) {
  return !e || !e.ownerDocument ? document : e.ownerDocument;
}
var uc = function(e) {
  var t = {}, r = Array.prototype.reduce.call(e, function(n, o) {
    var i = o.name.match(/data-simplebar-(.+)/);
    if (i) {
      var a = i[1].replace(/\W+(.)/g, function(l, c) {
        return c.toUpperCase();
      });
      switch (o.value) {
        case "true":
          n[a] = !0;
          break;
        case "false":
          n[a] = !1;
          break;
        case void 0:
          n[a] = !0;
          break;
        default:
          n[a] = o.value;
      }
    }
    return n;
  }, t);
  return r;
};
function fc(e, t) {
  var r;
  e && (r = e.classList).add.apply(r, t.split(" "));
}
function dc(e, t) {
  e && t.split(" ").forEach(function(r) {
    e.classList.remove(r);
  });
}
function pc(e) {
  return ".".concat(e.split(" ").join("."));
}
var ay = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  getElementWindow: lc,
  getElementDocument: cc,
  getOptions: uc,
  addClasses: fc,
  removeClasses: dc,
  classNamesToQuery: pc
}), Mt = lc, Io = cc, ly = uc, At = fc, It = dc, Ue = pc, Cn = (
  /** @class */
  function() {
    function e(t, r) {
      r === void 0 && (r = {});
      var n = this;
      if (this.removePreventClickId = null, this.minScrollbarWidth = 20, this.stopScrollDelay = 175, this.isScrolling = !1, this.isMouseEntering = !1, this.scrollXTicking = !1, this.scrollYTicking = !1, this.wrapperEl = null, this.contentWrapperEl = null, this.contentEl = null, this.offsetEl = null, this.maskEl = null, this.placeholderEl = null, this.heightAutoObserverWrapperEl = null, this.heightAutoObserverEl = null, this.rtlHelpers = null, this.scrollbarWidth = 0, this.resizeObserver = null, this.mutationObserver = null, this.elStyles = null, this.isRtl = null, this.mouseX = 0, this.mouseY = 0, this.onMouseMove = function() {
      }, this.onWindowResize = function() {
      }, this.onStopScrolling = function() {
      }, this.onMouseEntered = function() {
      }, this.onScroll = function() {
        var o = Mt(n.el);
        n.scrollXTicking || (o.requestAnimationFrame(n.scrollX), n.scrollXTicking = !0), n.scrollYTicking || (o.requestAnimationFrame(n.scrollY), n.scrollYTicking = !0), n.isScrolling || (n.isScrolling = !0, At(n.el, n.classNames.scrolling)), n.showScrollbar("x"), n.showScrollbar("y"), n.onStopScrolling();
      }, this.scrollX = function() {
        n.axis.x.isOverflowing && n.positionScrollbar("x"), n.scrollXTicking = !1;
      }, this.scrollY = function() {
        n.axis.y.isOverflowing && n.positionScrollbar("y"), n.scrollYTicking = !1;
      }, this._onStopScrolling = function() {
        It(n.el, n.classNames.scrolling), n.options.autoHide && (n.hideScrollbar("x"), n.hideScrollbar("y")), n.isScrolling = !1;
      }, this.onMouseEnter = function() {
        n.isMouseEntering || (At(n.el, n.classNames.mouseEntered), n.showScrollbar("x"), n.showScrollbar("y"), n.isMouseEntering = !0), n.onMouseEntered();
      }, this._onMouseEntered = function() {
        It(n.el, n.classNames.mouseEntered), n.options.autoHide && (n.hideScrollbar("x"), n.hideScrollbar("y")), n.isMouseEntering = !1;
      }, this._onMouseMove = function(o) {
        n.mouseX = o.clientX, n.mouseY = o.clientY, (n.axis.x.isOverflowing || n.axis.x.forceVisible) && n.onMouseMoveForAxis("x"), (n.axis.y.isOverflowing || n.axis.y.forceVisible) && n.onMouseMoveForAxis("y");
      }, this.onMouseLeave = function() {
        n.onMouseMove.cancel(), (n.axis.x.isOverflowing || n.axis.x.forceVisible) && n.onMouseLeaveForAxis("x"), (n.axis.y.isOverflowing || n.axis.y.forceVisible) && n.onMouseLeaveForAxis("y"), n.mouseX = -1, n.mouseY = -1;
      }, this._onWindowResize = function() {
        n.scrollbarWidth = n.getScrollbarWidth(), n.hideNativeScrollbar();
      }, this.onPointerEvent = function(o) {
        if (!(!n.axis.x.track.el || !n.axis.y.track.el || !n.axis.x.scrollbar.el || !n.axis.y.scrollbar.el)) {
          var i, a;
          n.axis.x.track.rect = n.axis.x.track.el.getBoundingClientRect(), n.axis.y.track.rect = n.axis.y.track.el.getBoundingClientRect(), (n.axis.x.isOverflowing || n.axis.x.forceVisible) && (i = n.isWithinBounds(n.axis.x.track.rect)), (n.axis.y.isOverflowing || n.axis.y.forceVisible) && (a = n.isWithinBounds(n.axis.y.track.rect)), (i || a) && (o.stopPropagation(), o.type === "pointerdown" && o.pointerType !== "touch" && (i && (n.axis.x.scrollbar.rect = n.axis.x.scrollbar.el.getBoundingClientRect(), n.isWithinBounds(n.axis.x.scrollbar.rect) ? n.onDragStart(o, "x") : n.onTrackClick(o, "x")), a && (n.axis.y.scrollbar.rect = n.axis.y.scrollbar.el.getBoundingClientRect(), n.isWithinBounds(n.axis.y.scrollbar.rect) ? n.onDragStart(o, "y") : n.onTrackClick(o, "y"))));
        }
      }, this.drag = function(o) {
        var i, a, l, c, u, f, d, p, g, y, m;
        if (!(!n.draggedAxis || !n.contentWrapperEl)) {
          var v, E = n.axis[n.draggedAxis].track, S = (a = (i = E.rect) === null || i === void 0 ? void 0 : i[n.axis[n.draggedAxis].sizeAttr]) !== null && a !== void 0 ? a : 0, C = n.axis[n.draggedAxis].scrollbar, T = (c = (l = n.contentWrapperEl) === null || l === void 0 ? void 0 : l[n.axis[n.draggedAxis].scrollSizeAttr]) !== null && c !== void 0 ? c : 0, b = parseInt((f = (u = n.elStyles) === null || u === void 0 ? void 0 : u[n.axis[n.draggedAxis].sizeAttr]) !== null && f !== void 0 ? f : "0px", 10);
          o.preventDefault(), o.stopPropagation(), n.draggedAxis === "y" ? v = o.pageY : v = o.pageX;
          var w = v - ((p = (d = E.rect) === null || d === void 0 ? void 0 : d[n.axis[n.draggedAxis].offsetAttr]) !== null && p !== void 0 ? p : 0) - n.axis[n.draggedAxis].dragOffset;
          w = n.draggedAxis === "x" && n.isRtl ? ((y = (g = E.rect) === null || g === void 0 ? void 0 : g[n.axis[n.draggedAxis].sizeAttr]) !== null && y !== void 0 ? y : 0) - C.size - w : w;
          var R = w / (S - C.size), I = R * (T - b);
          n.draggedAxis === "x" && n.isRtl && (I = !((m = e.getRtlHelpers()) === null || m === void 0) && m.isScrollingToNegative ? -I : I), n.contentWrapperEl[n.axis[n.draggedAxis].scrollOffsetAttr] = I;
        }
      }, this.onEndDrag = function(o) {
        var i = Io(n.el), a = Mt(n.el);
        o.preventDefault(), o.stopPropagation(), It(n.el, n.classNames.dragging), i.removeEventListener("mousemove", n.drag, !0), i.removeEventListener("mouseup", n.onEndDrag, !0), n.removePreventClickId = a.setTimeout(function() {
          i.removeEventListener("click", n.preventClick, !0), i.removeEventListener("dblclick", n.preventClick, !0), n.removePreventClickId = null;
        });
      }, this.preventClick = function(o) {
        o.preventDefault(), o.stopPropagation();
      }, this.el = t, this.options = vr(vr({}, e.defaultOptions), r), this.classNames = vr(vr({}, e.defaultOptions.classNames), r.classNames), this.axis = {
        x: {
          scrollOffsetAttr: "scrollLeft",
          sizeAttr: "width",
          scrollSizeAttr: "scrollWidth",
          offsetSizeAttr: "offsetWidth",
          offsetAttr: "left",
          overflowAttr: "overflowX",
          dragOffset: 0,
          isOverflowing: !0,
          forceVisible: !1,
          track: { size: null, el: null, rect: null, isVisible: !1 },
          scrollbar: { size: null, el: null, rect: null, isVisible: !1 }
        },
        y: {
          scrollOffsetAttr: "scrollTop",
          sizeAttr: "height",
          scrollSizeAttr: "scrollHeight",
          offsetSizeAttr: "offsetHeight",
          offsetAttr: "top",
          overflowAttr: "overflowY",
          dragOffset: 0,
          isOverflowing: !0,
          forceVisible: !1,
          track: { size: null, el: null, rect: null, isVisible: !1 },
          scrollbar: { size: null, el: null, rect: null, isVisible: !1 }
        }
      }, typeof this.el != "object" || !this.el.nodeName)
        throw new Error("Argument passed to SimpleBar must be an HTML element instead of ".concat(this.el));
      this.onMouseMove = oy(this._onMouseMove, 64), this.onWindowResize = An(this._onWindowResize, 64, { leading: !0 }), this.onStopScrolling = An(this._onStopScrolling, this.stopScrollDelay), this.onMouseEntered = An(this._onMouseEntered, this.stopScrollDelay), this.init();
    }
    return e.getRtlHelpers = function() {
      if (e.rtlHelpers)
        return e.rtlHelpers;
      var t = document.createElement("div");
      t.innerHTML = '<div class="simplebar-dummy-scrollbar-size"><div></div></div>';
      var r = t.firstElementChild, n = r == null ? void 0 : r.firstElementChild;
      if (!n)
        return null;
      document.body.appendChild(r), r.scrollLeft = 0;
      var o = e.getOffset(r), i = e.getOffset(n);
      r.scrollLeft = -999;
      var a = e.getOffset(n);
      return document.body.removeChild(r), e.rtlHelpers = {
        // determines if the scrolling is responding with negative values
        isScrollOriginAtZero: o.left !== i.left,
        // determines if the origin scrollbar position is inverted or not (positioned on left or right)
        isScrollingToNegative: i.left !== a.left
      }, e.rtlHelpers;
    }, e.prototype.getScrollbarWidth = function() {
      try {
        return this.contentWrapperEl && getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar").display === "none" || "scrollbarWidth" in document.documentElement.style || "-ms-overflow-style" in document.documentElement.style ? 0 : ma();
      } catch {
        return ma();
      }
    }, e.getOffset = function(t) {
      var r = t.getBoundingClientRect(), n = Io(t), o = Mt(t);
      return {
        top: r.top + (o.pageYOffset || n.documentElement.scrollTop),
        left: r.left + (o.pageXOffset || n.documentElement.scrollLeft)
      };
    }, e.prototype.init = function() {
      ac && (this.initDOM(), this.rtlHelpers = e.getRtlHelpers(), this.scrollbarWidth = this.getScrollbarWidth(), this.recalculate(), this.initListeners());
    }, e.prototype.initDOM = function() {
      var t, r;
      this.wrapperEl = this.el.querySelector(Ue(this.classNames.wrapper)), this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector(Ue(this.classNames.contentWrapper)), this.contentEl = this.options.contentNode || this.el.querySelector(Ue(this.classNames.contentEl)), this.offsetEl = this.el.querySelector(Ue(this.classNames.offset)), this.maskEl = this.el.querySelector(Ue(this.classNames.mask)), this.placeholderEl = this.findChild(this.wrapperEl, Ue(this.classNames.placeholder)), this.heightAutoObserverWrapperEl = this.el.querySelector(Ue(this.classNames.heightAutoObserverWrapperEl)), this.heightAutoObserverEl = this.el.querySelector(Ue(this.classNames.heightAutoObserverEl)), this.axis.x.track.el = this.findChild(this.el, "".concat(Ue(this.classNames.track)).concat(Ue(this.classNames.horizontal))), this.axis.y.track.el = this.findChild(this.el, "".concat(Ue(this.classNames.track)).concat(Ue(this.classNames.vertical))), this.axis.x.scrollbar.el = ((t = this.axis.x.track.el) === null || t === void 0 ? void 0 : t.querySelector(Ue(this.classNames.scrollbar))) || null, this.axis.y.scrollbar.el = ((r = this.axis.y.track.el) === null || r === void 0 ? void 0 : r.querySelector(Ue(this.classNames.scrollbar))) || null, this.options.autoHide || (At(this.axis.x.scrollbar.el, this.classNames.visible), At(this.axis.y.scrollbar.el, this.classNames.visible));
    }, e.prototype.initListeners = function() {
      var t = this, r, n = Mt(this.el);
      if (this.el.addEventListener("mouseenter", this.onMouseEnter), this.el.addEventListener("pointerdown", this.onPointerEvent, !0), this.el.addEventListener("mousemove", this.onMouseMove), this.el.addEventListener("mouseleave", this.onMouseLeave), (r = this.contentWrapperEl) === null || r === void 0 || r.addEventListener("scroll", this.onScroll), n.addEventListener("resize", this.onWindowResize), !!this.contentEl) {
        if (window.ResizeObserver) {
          var o = !1, i = n.ResizeObserver || ResizeObserver;
          this.resizeObserver = new i(function() {
            o && n.requestAnimationFrame(function() {
              t.recalculate();
            });
          }), this.resizeObserver.observe(this.el), this.resizeObserver.observe(this.contentEl), n.requestAnimationFrame(function() {
            o = !0;
          });
        }
        this.mutationObserver = new n.MutationObserver(function() {
          n.requestAnimationFrame(function() {
            t.recalculate();
          });
        }), this.mutationObserver.observe(this.contentEl, {
          childList: !0,
          subtree: !0,
          characterData: !0
        });
      }
    }, e.prototype.recalculate = function() {
      if (!(!this.heightAutoObserverEl || !this.contentEl || !this.contentWrapperEl || !this.wrapperEl || !this.placeholderEl)) {
        var t = Mt(this.el);
        this.elStyles = t.getComputedStyle(this.el), this.isRtl = this.elStyles.direction === "rtl";
        var r = this.contentEl.offsetWidth, n = this.heightAutoObserverEl.offsetHeight <= 1, o = this.heightAutoObserverEl.offsetWidth <= 1 || r > 0, i = this.contentWrapperEl.offsetWidth, a = this.elStyles.overflowX, l = this.elStyles.overflowY;
        this.contentEl.style.padding = "".concat(this.elStyles.paddingTop, " ").concat(this.elStyles.paddingRight, " ").concat(this.elStyles.paddingBottom, " ").concat(this.elStyles.paddingLeft), this.wrapperEl.style.margin = "-".concat(this.elStyles.paddingTop, " -").concat(this.elStyles.paddingRight, " -").concat(this.elStyles.paddingBottom, " -").concat(this.elStyles.paddingLeft);
        var c = this.contentEl.scrollHeight, u = this.contentEl.scrollWidth;
        this.contentWrapperEl.style.height = n ? "auto" : "100%", this.placeholderEl.style.width = o ? "".concat(r || u, "px") : "auto", this.placeholderEl.style.height = "".concat(c, "px");
        var f = this.contentWrapperEl.offsetHeight;
        this.axis.x.isOverflowing = r !== 0 && u > r, this.axis.y.isOverflowing = c > f, this.axis.x.isOverflowing = a === "hidden" ? !1 : this.axis.x.isOverflowing, this.axis.y.isOverflowing = l === "hidden" ? !1 : this.axis.y.isOverflowing, this.axis.x.forceVisible = this.options.forceVisible === "x" || this.options.forceVisible === !0, this.axis.y.forceVisible = this.options.forceVisible === "y" || this.options.forceVisible === !0, this.hideNativeScrollbar();
        var d = this.axis.x.isOverflowing ? this.scrollbarWidth : 0, p = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
        this.axis.x.isOverflowing = this.axis.x.isOverflowing && u > i - p, this.axis.y.isOverflowing = this.axis.y.isOverflowing && c > f - d, this.axis.x.scrollbar.size = this.getScrollbarSize("x"), this.axis.y.scrollbar.size = this.getScrollbarSize("y"), this.axis.x.scrollbar.el && (this.axis.x.scrollbar.el.style.width = "".concat(this.axis.x.scrollbar.size, "px")), this.axis.y.scrollbar.el && (this.axis.y.scrollbar.el.style.height = "".concat(this.axis.y.scrollbar.size, "px")), this.positionScrollbar("x"), this.positionScrollbar("y"), this.toggleTrackVisibility("x"), this.toggleTrackVisibility("y");
      }
    }, e.prototype.getScrollbarSize = function(t) {
      var r, n;
      if (t === void 0 && (t = "y"), !this.axis[t].isOverflowing || !this.contentEl)
        return 0;
      var o = this.contentEl[this.axis[t].scrollSizeAttr], i = (n = (r = this.axis[t].track.el) === null || r === void 0 ? void 0 : r[this.axis[t].offsetSizeAttr]) !== null && n !== void 0 ? n : 0, a = i / o, l;
      return l = Math.max(~~(a * i), this.options.scrollbarMinSize), this.options.scrollbarMaxSize && (l = Math.min(l, this.options.scrollbarMaxSize)), l;
    }, e.prototype.positionScrollbar = function(t) {
      var r, n, o;
      t === void 0 && (t = "y");
      var i = this.axis[t].scrollbar;
      if (!(!this.axis[t].isOverflowing || !this.contentWrapperEl || !i.el || !this.elStyles)) {
        var a = this.contentWrapperEl[this.axis[t].scrollSizeAttr], l = ((r = this.axis[t].track.el) === null || r === void 0 ? void 0 : r[this.axis[t].offsetSizeAttr]) || 0, c = parseInt(this.elStyles[this.axis[t].sizeAttr], 10), u = this.contentWrapperEl[this.axis[t].scrollOffsetAttr];
        u = t === "x" && this.isRtl && (!((n = e.getRtlHelpers()) === null || n === void 0) && n.isScrollOriginAtZero) ? -u : u, t === "x" && this.isRtl && (u = !((o = e.getRtlHelpers()) === null || o === void 0) && o.isScrollingToNegative ? u : -u);
        var f = u / (a - c), d = ~~((l - i.size) * f);
        d = t === "x" && this.isRtl ? -d + (l - i.size) : d, i.el.style.transform = t === "x" ? "translate3d(".concat(d, "px, 0, 0)") : "translate3d(0, ".concat(d, "px, 0)");
      }
    }, e.prototype.toggleTrackVisibility = function(t) {
      t === void 0 && (t = "y");
      var r = this.axis[t].track.el, n = this.axis[t].scrollbar.el;
      !r || !n || !this.contentWrapperEl || (this.axis[t].isOverflowing || this.axis[t].forceVisible ? (r.style.visibility = "visible", this.contentWrapperEl.style[this.axis[t].overflowAttr] = "scroll", this.el.classList.add("".concat(this.classNames.scrollable, "-").concat(t))) : (r.style.visibility = "hidden", this.contentWrapperEl.style[this.axis[t].overflowAttr] = "hidden", this.el.classList.remove("".concat(this.classNames.scrollable, "-").concat(t))), this.axis[t].isOverflowing ? n.style.display = "block" : n.style.display = "none");
    }, e.prototype.showScrollbar = function(t) {
      t === void 0 && (t = "y"), this.axis[t].isOverflowing && !this.axis[t].scrollbar.isVisible && (At(this.axis[t].scrollbar.el, this.classNames.visible), this.axis[t].scrollbar.isVisible = !0);
    }, e.prototype.hideScrollbar = function(t) {
      t === void 0 && (t = "y"), this.axis[t].isOverflowing && this.axis[t].scrollbar.isVisible && (It(this.axis[t].scrollbar.el, this.classNames.visible), this.axis[t].scrollbar.isVisible = !1);
    }, e.prototype.hideNativeScrollbar = function() {
      this.offsetEl && (this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-".concat(this.scrollbarWidth, "px") : "0px", this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-".concat(this.scrollbarWidth, "px") : "0px");
    }, e.prototype.onMouseMoveForAxis = function(t) {
      t === void 0 && (t = "y");
      var r = this.axis[t];
      !r.track.el || !r.scrollbar.el || (r.track.rect = r.track.el.getBoundingClientRect(), r.scrollbar.rect = r.scrollbar.el.getBoundingClientRect(), this.isWithinBounds(r.track.rect) ? (this.showScrollbar(t), At(r.track.el, this.classNames.hover), this.isWithinBounds(r.scrollbar.rect) ? At(r.scrollbar.el, this.classNames.hover) : It(r.scrollbar.el, this.classNames.hover)) : (It(r.track.el, this.classNames.hover), this.options.autoHide && this.hideScrollbar(t)));
    }, e.prototype.onMouseLeaveForAxis = function(t) {
      t === void 0 && (t = "y"), It(this.axis[t].track.el, this.classNames.hover), It(this.axis[t].scrollbar.el, this.classNames.hover), this.options.autoHide && this.hideScrollbar(t);
    }, e.prototype.onDragStart = function(t, r) {
      var n;
      r === void 0 && (r = "y");
      var o = Io(this.el), i = Mt(this.el), a = this.axis[r].scrollbar, l = r === "y" ? t.pageY : t.pageX;
      this.axis[r].dragOffset = l - (((n = a.rect) === null || n === void 0 ? void 0 : n[this.axis[r].offsetAttr]) || 0), this.draggedAxis = r, At(this.el, this.classNames.dragging), o.addEventListener("mousemove", this.drag, !0), o.addEventListener("mouseup", this.onEndDrag, !0), this.removePreventClickId === null ? (o.addEventListener("click", this.preventClick, !0), o.addEventListener("dblclick", this.preventClick, !0)) : (i.clearTimeout(this.removePreventClickId), this.removePreventClickId = null);
    }, e.prototype.onTrackClick = function(t, r) {
      var n = this, o, i, a, l;
      r === void 0 && (r = "y");
      var c = this.axis[r];
      if (!(!this.options.clickOnTrack || !c.scrollbar.el || !this.contentWrapperEl)) {
        t.preventDefault();
        var u = Mt(this.el);
        this.axis[r].scrollbar.rect = c.scrollbar.el.getBoundingClientRect();
        var f = this.axis[r].scrollbar, d = (i = (o = f.rect) === null || o === void 0 ? void 0 : o[this.axis[r].offsetAttr]) !== null && i !== void 0 ? i : 0, p = parseInt((l = (a = this.elStyles) === null || a === void 0 ? void 0 : a[this.axis[r].sizeAttr]) !== null && l !== void 0 ? l : "0px", 10), g = this.contentWrapperEl[this.axis[r].scrollOffsetAttr], y = r === "y" ? this.mouseY - d : this.mouseX - d, m = y < 0 ? -1 : 1, v = m === -1 ? g - p : g + p, E = 40, S = function() {
          n.contentWrapperEl && (m === -1 ? g > v && (g -= E, n.contentWrapperEl[n.axis[r].scrollOffsetAttr] = g, u.requestAnimationFrame(S)) : g < v && (g += E, n.contentWrapperEl[n.axis[r].scrollOffsetAttr] = g, u.requestAnimationFrame(S)));
        };
        S();
      }
    }, e.prototype.getContentElement = function() {
      return this.contentEl;
    }, e.prototype.getScrollElement = function() {
      return this.contentWrapperEl;
    }, e.prototype.removeListeners = function() {
      var t = Mt(this.el);
      this.el.removeEventListener("mouseenter", this.onMouseEnter), this.el.removeEventListener("pointerdown", this.onPointerEvent, !0), this.el.removeEventListener("mousemove", this.onMouseMove), this.el.removeEventListener("mouseleave", this.onMouseLeave), this.contentWrapperEl && this.contentWrapperEl.removeEventListener("scroll", this.onScroll), t.removeEventListener("resize", this.onWindowResize), this.mutationObserver && this.mutationObserver.disconnect(), this.resizeObserver && this.resizeObserver.disconnect(), this.onMouseMove.cancel(), this.onWindowResize.cancel(), this.onStopScrolling.cancel(), this.onMouseEntered.cancel();
    }, e.prototype.unMount = function() {
      this.removeListeners();
    }, e.prototype.isWithinBounds = function(t) {
      return this.mouseX >= t.left && this.mouseX <= t.left + t.width && this.mouseY >= t.top && this.mouseY <= t.top + t.height;
    }, e.prototype.findChild = function(t, r) {
      var n = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector;
      return Array.prototype.filter.call(t.children, function(o) {
        return n.call(o, r);
      })[0];
    }, e.rtlHelpers = null, e.defaultOptions = {
      forceVisible: !1,
      clickOnTrack: !0,
      scrollbarMinSize: 25,
      scrollbarMaxSize: 0,
      ariaLabel: "scrollable content",
      classNames: {
        contentEl: "simplebar-content",
        contentWrapper: "simplebar-content-wrapper",
        offset: "simplebar-offset",
        mask: "simplebar-mask",
        wrapper: "simplebar-wrapper",
        placeholder: "simplebar-placeholder",
        scrollbar: "simplebar-scrollbar",
        track: "simplebar-track",
        heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
        heightAutoObserverEl: "simplebar-height-auto-observer",
        visible: "simplebar-visible",
        horizontal: "simplebar-horizontal",
        vertical: "simplebar-vertical",
        hover: "simplebar-hover",
        dragging: "simplebar-dragging",
        scrolling: "simplebar-scrolling",
        scrollable: "simplebar-scrollable",
        mouseEntered: "simplebar-mouse-entered"
      },
      scrollableNode: null,
      contentNode: null,
      autoHide: !0
    }, e.getOptions = ly, e.helpers = ay, e;
  }()
), Je = function() {
  return Je = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, Je.apply(this, arguments);
};
function cy(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
var mc = x.forwardRef(function(e, t) {
  var r = e.children, n = e.scrollableNodeProps, o = n === void 0 ? {} : n, i = cy(e, ["children", "scrollableNodeProps"]), a = x.useRef(), l = x.useRef(), c = x.useRef(), u = {}, f = {};
  Object.keys(i).forEach(function(g) {
    Object.prototype.hasOwnProperty.call(Cn.defaultOptions, g) ? u[g] = i[g] : f[g] = i[g];
  });
  var d = Je(Je({}, Cn.defaultOptions.classNames), u.classNames), p = Je(Je({}, o), { className: "".concat(d.contentWrapper).concat(o.className ? " ".concat(o.className) : ""), tabIndex: 0, role: "region", "aria-label": u.ariaLabel || Cn.defaultOptions.ariaLabel });
  return x.useEffect(function() {
    var g;
    return l.current = p.ref ? p.ref.current : l.current, a.current && (g = new Cn(a.current, Je(Je(Je({}, u), l.current && {
      scrollableNode: l.current
    }), c.current && {
      contentNode: c.current
    })), typeof t == "function" ? t(g) : t && (t.current = g)), function() {
      g == null || g.unMount(), g = null, typeof t == "function" && t(null);
    };
  }, []), x.createElement(
    "div",
    Je({ "data-simplebar": "init", ref: a }, f),
    x.createElement(
      "div",
      { className: d.wrapper },
      x.createElement(
        "div",
        { className: d.heightAutoObserverWrapperEl },
        x.createElement("div", { className: d.heightAutoObserverEl })
      ),
      x.createElement(
        "div",
        { className: d.mask },
        x.createElement("div", { className: d.offset }, typeof r == "function" ? r({
          scrollableNodeRef: l,
          scrollableNodeProps: Je(Je({}, p), { ref: l }),
          contentNodeRef: c,
          contentNodeProps: {
            className: d.contentEl,
            ref: c
          }
        }) : x.createElement(
          "div",
          Je({}, p),
          x.createElement("div", { className: d.contentEl }, r)
        ))
      ),
      x.createElement("div", { className: d.placeholder })
    ),
    x.createElement(
      "div",
      { className: "".concat(d.track, " simplebar-horizontal") },
      x.createElement("div", { className: d.scrollbar })
    ),
    x.createElement(
      "div",
      { className: "".concat(d.track, " simplebar-vertical") },
      x.createElement("div", { className: d.scrollbar })
    )
  );
});
mc.displayName = "SimpleBar";
var zi = {}, Do = {};
const uy = /* @__PURE__ */ $t(im);
var ha;
function bo() {
  return ha || (ha = 1, function(e) {
    "use client";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "default", {
      enumerable: !0,
      get: function() {
        return t.createSvgIcon;
      }
    });
    var t = uy;
  }(Do)), Do;
}
var fy = Rr;
Object.defineProperty(zi, "__esModule", {
  value: !0
});
var hc = zi.default = void 0, dy = fy(bo()), py = P;
hc = zi.default = (0, dy.default)(/* @__PURE__ */ (0, py.jsx)("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-12.5c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5m0 5.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"
}), "AlbumOutlined");
const my = Qe.forwardRef(
  ({
    userName: e = "",
    designation: t = "",
    userimg: r = "",
    isCollapse: n = !1
  }, o) => {
    const i = Pr();
    return /* @__PURE__ */ P.jsx(xt, { children: n ? "" : /* @__PURE__ */ P.jsxs(
      xt,
      {
        display: "flex",
        alignItems: "center",
        gap: 2,
        sx: { m: 3, p: 2, borderRadius: "8px", bgcolor: i.palette.secondary.main + 20 },
        children: [
          /* @__PURE__ */ P.jsx(Zv, { alt: "Remy Sharp", src: r }),
          /* @__PURE__ */ P.jsxs(xt, { children: [
            /* @__PURE__ */ P.jsx(Rt, { variant: "h6", children: e }),
            /* @__PURE__ */ P.jsx(Rt, { variant: "caption", color: "textSecondary", children: t })
          ] }),
          /* @__PURE__ */ P.jsx(xt, { sx: { ml: "auto" }, children: /* @__PURE__ */ P.jsx(Ng, { title: "Logout", placement: "top", children: /* @__PURE__ */ P.jsx(
            Zm,
            {
              color: "primary",
              to: "/",
              "aria-label": "logout",
              size: "small",
              children: /* @__PURE__ */ P.jsx(hc, {})
            }
          ) }) })
        ]
      }
    ) });
  }
), dn = x.createContext({
  width: "270px",
  collapsewidth: "80px",
  textColor: "#8D939D",
  isCollapse: !1,
  themeColor: "#5d87ff"
}), Cy = x.forwardRef(
  ({
    children: e,
    width: t = "260px",
    collapsewidth: r = "80px",
    textColor: n = "#2b2b2b",
    isCollapse: o = !1,
    themeColor: i = "#5d87ff",
    themeSecondaryColor: a = "#49beff",
    mode: l = "light",
    direction: c = "ltr",
    userName: u = "Mathew",
    designation: f = "Designer",
    showProfile: d = !0,
    userimg: p = "https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-1.jpg"
  }, g) => {
    const [y, m] = x.useState(!1), v = o && !y ? r : t, E = Pr(), S = Ti({
      direction: c,
      palette: {
        mode: l,
        primary: {
          main: i
        },
        secondary: {
          main: a,
          contrastText: "#fff"
        }
      }
    });
    return l === "dark" && (n = "rgba(255,255,255, 0.9)"), /* @__PURE__ */ P.jsx(xl, { theme: S, children: /* @__PURE__ */ P.jsx(
      xt,
      {
        dir: c,
        sx: {
          width: v,
          flexShrink: 0,
          fontFamily: "inherit",
          color: n
        },
        children: /* @__PURE__ */ P.jsxs(
          xt,
          {
            sx: {
              width: v,
              transition: E.transitions.create("width", {
                duration: E.transitions.duration.shortest
              })
            },
            children: [
              /* @__PURE__ */ P.jsx(mc, { style: { height: d ? "calc(100vh - 140px)" : "calc(100vh - 50px)" }, children: /* @__PURE__ */ P.jsx(dn.Provider, { value: { textColor: n, isCollapse: o, width: t, collapsewidth: r, themeColor: i }, children: e }) }),
              d ? /* @__PURE__ */ P.jsx(my, { userName: u, designation: f, userimg: p, isCollapse: o }) : ""
            ]
          }
        )
      }
    ) });
  }
), Ry = x.forwardRef(({
  children: e,
  subHeading: t = "menu"
}, r) => {
  const n = x.useContext(dn);
  return /* @__PURE__ */ P.jsx(xt, { sx: { px: n.isCollapse ? 2 : 3, pt: 2 }, children: /* @__PURE__ */ P.jsx(
    Ql,
    {
      ref: r,
      component: "nav",
      subheader: /* @__PURE__ */ P.jsx(Mv, { component: "div", sx: { paddingY: "3px", color: n.textColor, paddingX: "0px", lineHeight: "20px", fontWeight: "bold", fontSize: "12px" }, children: n.isCollapse ? "..." : t }),
      children: e
    }
  ) });
});
var Wi = {}, hy = Rr;
Object.defineProperty(Wi, "__esModule", {
  value: !0
});
var vc = Wi.default = void 0, vy = hy(bo()), gy = P;
vc = Wi.default = (0, vy.default)(/* @__PURE__ */ (0, gy.jsx)("path", {
  d: "m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
}), "ExpandLess");
var Fi = {}, yy = Rr;
Object.defineProperty(Fi, "__esModule", {
  value: !0
});
var gc = Fi.default = void 0, by = yy(bo()), xy = P;
gc = Fi.default = (0, by.default)(/* @__PURE__ */ (0, xy.jsx)("path", {
  d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
}), "ExpandMore");
var Bi = {}, Ey = Rr;
Object.defineProperty(Bi, "__esModule", {
  value: !0
});
var Ui = Bi.default = void 0, Oy = Ey(bo()), Ty = P;
Ui = Bi.default = (0, Oy.default)(/* @__PURE__ */ (0, Ty.jsx)("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
}), "CircleOutlined");
const _y = x.forwardRef(
  ({
    children: e,
    title: t = "",
    icon: r,
    borderRadius: n = "8px",
    textFontSize: o = "14px",
    disabled: i = !1
  }, a) => {
    const l = x.useContext(dn), [c, u] = x.useState(!1), f = () => {
      u(!c);
    }, d = Ee(tc)(() => ({
      whiteSpace: "nowrap",
      marginBottom: "2px",
      padding: "10px 12px",
      borderRadius: n,
      color: c ? "#fff" : l.textColor,
      cursor: i ? "default" : "pointer",
      opacity: i ? "0.6" : "1",
      backgroundColor: c ? l.themeColor : "",
      ".MuiListItemIcon-root": {
        color: c ? "#fff" : l.textColor
      },
      "&:hover": {
        backgroundColor: c ? l.themeColor : l.themeColor + 20,
        color: c ? "#fff" : l.themeColor,
        ".MuiListItemIcon-root": {
          color: c ? "#fff" : l.themeColor
        }
      }
    })), p = Ee(Qo)(() => ({
      display: "flex",
      gap: "10px",
      marginBottom: "0px",
      padding: "0px",
      minWidth: "30px",
      cursor: "pointer",
      color: "inherit"
    }));
    return /* @__PURE__ */ P.jsxs(xt, { children: [
      /* @__PURE__ */ P.jsxs(
        d,
        {
          onClick: f,
          sx: { display: "flex", gap: "15px" },
          children: [
            /* @__PURE__ */ P.jsx(p, { style: { minWidth: "0px" }, children: r || /* @__PURE__ */ P.jsx(Ui, {}) }),
            l.isCollapse ? "" : /* @__PURE__ */ P.jsxs(P.Fragment, { children: [
              /* @__PURE__ */ P.jsx(Vi, { sx: { my: 0 }, children: /* @__PURE__ */ P.jsx(
                Rt,
                {
                  fontSize: o,
                  sx: { lineHeight: "1" },
                  variant: "caption",
                  children: t
                }
              ) }),
              c ? /* @__PURE__ */ P.jsx(vc, {}) : /* @__PURE__ */ P.jsx(gc, {})
            ] })
          ]
        }
      ),
      /* @__PURE__ */ P.jsx(Tm, { in: c, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ P.jsx(Ql, { component: "div", disablePadding: !0, children: e }) })
    ] });
  }
), Py = x.forwardRef(
  ({
    children: e,
    icon: t,
    link: r = "#",
    badge: n = !1,
    badgeColor: o = "secondary",
    badgeContent: i = "6",
    textFontSize: a = "14px",
    borderRadius: l = "8px",
    disabled: c = !1,
    badgeType: u = "filled",
    target: f = ""
  }, d) => {
    const p = x.useContext(dn), g = Pr(), y = Ee(tc)(() => ({
      whiteSpace: "nowrap",
      marginBottom: "2px",
      padding: "10px 12px",
      textAlign: g.direction === "ltr" ? "left" : "right",
      borderRadius: l,
      color: p.textColor,
      cursor: c ? "default" : "pointer",
      opacity: c ? "0.6" : "1",
      ".MuiListItemIcon-root": {
        color: p.textColor
      },
      "&:hover": {
        backgroundColor: c ? "#fff" : p.themeColor + 20,
        color: p.themeColor,
        ".MuiListItemIcon-root": {
          color: p.themeColor
        }
      },
      "&.Mui-selected": {
        color: "white",
        backgroundColor: p.themeColor,
        "&:hover": {
          backgroundColor: p.themeColor,
          color: "white"
        },
        ".MuiListItemIcon-root": {
          color: "#fff"
        }
      }
    }));
    return Ee(Qo)(() => ({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      marginBottom: "0px",
      padding: "0px 0px",
      cursor: "pointer",
      marginLeft: "-10px",
      color: open ? "inherit" : "#fff"
    })), /* @__PURE__ */ P.jsx(xt, { children: /* @__PURE__ */ P.jsxs(y, { href: r, sx: { display: "flex", gap: "15px" }, target: f, selected: r == "/", children: [
      /* @__PURE__ */ P.jsx(
        Qo,
        {
          sx: {
            minWidth: "0px"
          },
          children: t || /* @__PURE__ */ P.jsx(Ui, {})
        }
      ),
      p.isCollapse ? "" : /* @__PURE__ */ P.jsxs(P.Fragment, { children: [
        /* @__PURE__ */ P.jsx(Vi, { sx: { my: 0 }, children: /* @__PURE__ */ P.jsx(
          Rt,
          {
            fontSize: a,
            sx: { lineHeight: "1" },
            variant: "caption",
            children: e
          }
        ) }),
        n ? /* @__PURE__ */ P.jsx(Fv, { label: i, color: o, variant: u, size: "small" }) : ""
      ] })
    ] }) });
  }
), $y = x.forwardRef(({
  children: e,
  img: t = "https://adminmart.com/wp-content/uploads/2024/03/logo-admin-mart-news.png"
}, r) => {
  const n = x.useContext(dn), o = Ee(Vi)(() => ({
    whiteSpace: "nowrap",
    overflow: n.isCollapse ? "hidden" : "visible",
    WebkitLineClamp: "1",
    fontSize: "2rem",
    padding: "15px 22px",
    textOverflow: "ellipsis"
  }));
  return /* @__PURE__ */ P.jsx(o, { href: "/", children: t == "" ? /* @__PURE__ */ P.jsx(Rt, { variant: "body", children: e }) : /* @__PURE__ */ P.jsx(
    xt,
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
  $y as Logo,
  Ry as Menu,
  Py as MenuItem,
  Cy as Sidebar,
  _y as Submenu
};
