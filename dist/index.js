import * as b from "react";
import et, { forwardRef as Yc, useContext as Hc, Children as Gc, isValidElement as Mn, cloneElement as An } from "react";
import * as Kc from "react-dom";
import Sn from "react-dom";
function ka(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function jt(e) {
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
var Yo = { exports: {} }, zr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var os;
function Xc() {
  if (os)
    return zr;
  os = 1;
  var e = et, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(l, c, u) {
    var f, d = {}, p = null, v = null;
    u !== void 0 && (p = "" + u), c.key !== void 0 && (p = "" + c.key), c.ref !== void 0 && (v = c.ref);
    for (f in c)
      n.call(c, f) && !i.hasOwnProperty(f) && (d[f] = c[f]);
    if (l && l.defaultProps)
      for (f in c = l.defaultProps, c)
        d[f] === void 0 && (d[f] = c[f]);
    return { $$typeof: t, type: l, key: p, ref: v, props: d, _owner: o.current };
  }
  return zr.Fragment = r, zr.jsx = a, zr.jsxs = a, zr;
}
var Fr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var is;
function Jc() {
  return is || (is = 1, process.env.NODE_ENV !== "production" && function() {
    var e = et, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g = Symbol.iterator, h = "@@iterator";
    function m(y) {
      if (y === null || typeof y != "object")
        return null;
      var $ = g && y[g] || y[h];
      return typeof $ == "function" ? $ : null;
    }
    var O = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(y) {
      {
        for (var $ = arguments.length, U = new Array($ > 1 ? $ - 1 : 0), oe = 1; oe < $; oe++)
          U[oe - 1] = arguments[oe];
        w("error", y, U);
      }
    }
    function w(y, $, U) {
      {
        var oe = O.ReactDebugCurrentFrame, de = oe.getStackAddendum();
        de !== "" && ($ += "%s", U = U.concat([de]));
        var Ee = U.map(function(ue) {
          return String(ue);
        });
        Ee.unshift("Warning: " + $), Function.prototype.apply.call(console[y], console, Ee);
      }
    }
    var T = !1, x = !1, S = !1, R = !1, A = !1, D;
    D = Symbol.for("react.module.reference");
    function N(y) {
      return !!(typeof y == "string" || typeof y == "function" || y === n || y === i || A || y === o || y === u || y === f || R || y === v || T || x || S || typeof y == "object" && y !== null && (y.$$typeof === p || y.$$typeof === d || y.$$typeof === a || y.$$typeof === l || y.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      y.$$typeof === D || y.getModuleId !== void 0));
    }
    function L(y, $, U) {
      var oe = y.displayName;
      if (oe)
        return oe;
      var de = $.displayName || $.name || "";
      return de !== "" ? U + "(" + de + ")" : U;
    }
    function Y(y) {
      return y.displayName || "Context";
    }
    function F(y) {
      if (y == null)
        return null;
      if (typeof y.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof y == "function")
        return y.displayName || y.name || null;
      if (typeof y == "string")
        return y;
      switch (y) {
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
      if (typeof y == "object")
        switch (y.$$typeof) {
          case l:
            var $ = y;
            return Y($) + ".Consumer";
          case a:
            var U = y;
            return Y(U._context) + ".Provider";
          case c:
            return L(y, y.render, "ForwardRef");
          case d:
            var oe = y.displayName || null;
            return oe !== null ? oe : F(y.type) || "Memo";
          case p: {
            var de = y, Ee = de._payload, ue = de._init;
            try {
              return F(ue(Ee));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, B = 0, M, V, j, X, _, W, re;
    function te() {
    }
    te.__reactDisabledLog = !0;
    function H() {
      {
        if (B === 0) {
          M = console.log, V = console.info, j = console.warn, X = console.error, _ = console.group, W = console.groupCollapsed, re = console.groupEnd;
          var y = {
            configurable: !0,
            enumerable: !0,
            value: te,
            writable: !0
          };
          Object.defineProperties(console, {
            info: y,
            log: y,
            warn: y,
            error: y,
            group: y,
            groupCollapsed: y,
            groupEnd: y
          });
        }
        B++;
      }
    }
    function Z() {
      {
        if (B--, B === 0) {
          var y = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, y, {
              value: M
            }),
            info: I({}, y, {
              value: V
            }),
            warn: I({}, y, {
              value: j
            }),
            error: I({}, y, {
              value: X
            }),
            group: I({}, y, {
              value: _
            }),
            groupCollapsed: I({}, y, {
              value: W
            }),
            groupEnd: I({}, y, {
              value: re
            })
          });
        }
        B < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var k = O.ReactCurrentDispatcher, G;
    function q(y, $, U) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (de) {
            var oe = de.stack.trim().match(/\n( *(at )?)/);
            G = oe && oe[1] || "";
          }
        return `
` + G + y;
      }
    }
    var J = !1, ee;
    {
      var le = typeof WeakMap == "function" ? WeakMap : Map;
      ee = new le();
    }
    function z(y, $) {
      if (!y || J)
        return "";
      {
        var U = ee.get(y);
        if (U !== void 0)
          return U;
      }
      var oe;
      J = !0;
      var de = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ee;
      Ee = k.current, k.current = null, H();
      try {
        if ($) {
          var ue = function() {
            throw Error();
          };
          if (Object.defineProperty(ue.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ue, []);
            } catch (Ct) {
              oe = Ct;
            }
            Reflect.construct(y, [], ue);
          } else {
            try {
              ue.call();
            } catch (Ct) {
              oe = Ct;
            }
            y.call(ue.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ct) {
            oe = Ct;
          }
          y();
        }
      } catch (Ct) {
        if (Ct && oe && typeof Ct.stack == "string") {
          for (var ce = Ct.stack.split(`
`), Le = oe.stack.split(`
`), Q = ce.length - 1, pe = Le.length - 1; Q >= 1 && pe >= 0 && ce[Q] !== Le[pe]; )
            pe--;
          for (; Q >= 1 && pe >= 0; Q--, pe--)
            if (ce[Q] !== Le[pe]) {
              if (Q !== 1 || pe !== 1)
                do
                  if (Q--, pe--, pe < 0 || ce[Q] !== Le[pe]) {
                    var st = `
` + ce[Q].replace(" at new ", " at ");
                    return y.displayName && st.includes("<anonymous>") && (st = st.replace("<anonymous>", y.displayName)), typeof y == "function" && ee.set(y, st), st;
                  }
                while (Q >= 1 && pe >= 0);
              break;
            }
        }
      } finally {
        J = !1, k.current = Ee, Z(), Error.prepareStackTrace = de;
      }
      var fr = y ? y.displayName || y.name : "", ns = fr ? q(fr) : "";
      return typeof y == "function" && ee.set(y, ns), ns;
    }
    function Oe(y, $, U) {
      return z(y, !1);
    }
    function K(y) {
      var $ = y.prototype;
      return !!($ && $.isReactComponent);
    }
    function Te(y, $, U) {
      if (y == null)
        return "";
      if (typeof y == "function")
        return z(y, K(y));
      if (typeof y == "string")
        return q(y);
      switch (y) {
        case u:
          return q("Suspense");
        case f:
          return q("SuspenseList");
      }
      if (typeof y == "object")
        switch (y.$$typeof) {
          case c:
            return Oe(y.render);
          case d:
            return Te(y.type, $, U);
          case p: {
            var oe = y, de = oe._payload, Ee = oe._init;
            try {
              return Te(Ee(de), $, U);
            } catch {
            }
          }
        }
      return "";
    }
    var Ie = Object.prototype.hasOwnProperty, nt = {}, Ne = O.ReactDebugCurrentFrame;
    function mt(y) {
      if (y) {
        var $ = y._owner, U = Te(y.type, y._source, $ ? $.type : null);
        Ne.setExtraStackFrame(U);
      } else
        Ne.setExtraStackFrame(null);
    }
    function De(y, $, U, oe, de) {
      {
        var Ee = Function.call.bind(Ie);
        for (var ue in y)
          if (Ee(y, ue)) {
            var ce = void 0;
            try {
              if (typeof y[ue] != "function") {
                var Le = Error((oe || "React class") + ": " + U + " type `" + ue + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof y[ue] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Le.name = "Invariant Violation", Le;
              }
              ce = y[ue]($, ue, oe, U, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Q) {
              ce = Q;
            }
            ce && !(ce instanceof Error) && (mt(de), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", oe || "React class", U, ue, typeof ce), mt(null)), ce instanceof Error && !(ce.message in nt) && (nt[ce.message] = !0, mt(de), C("Failed %s type: %s", U, ce.message), mt(null));
          }
      }
    }
    var ot = Array.isArray;
    function Xe(y) {
      return ot(y);
    }
    function yt(y) {
      {
        var $ = typeof Symbol == "function" && Symbol.toStringTag, U = $ && y[Symbol.toStringTag] || y.constructor.name || "Object";
        return U;
      }
    }
    function Je(y) {
      try {
        return We(y), !1;
      } catch {
        return !0;
      }
    }
    function We(y) {
      return "" + y;
    }
    function it(y) {
      if (Je(y))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", yt(y)), We(y);
    }
    var Ue = O.ReactCurrentOwner, At = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ie, Be, Rt;
    Rt = {};
    function bt(y) {
      if (Ie.call(y, "ref")) {
        var $ = Object.getOwnPropertyDescriptor(y, "ref").get;
        if ($ && $.isReactWarning)
          return !1;
      }
      return y.ref !== void 0;
    }
    function Yt(y) {
      if (Ie.call(y, "key")) {
        var $ = Object.getOwnPropertyDescriptor(y, "key").get;
        if ($ && $.isReactWarning)
          return !1;
      }
      return y.key !== void 0;
    }
    function bn(y, $) {
      if (typeof y.ref == "string" && Ue.current && $ && Ue.current.stateNode !== $) {
        var U = F(Ue.current.type);
        Rt[U] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F(Ue.current.type), y.ref), Rt[U] = !0);
      }
    }
    function ir(y, $) {
      {
        var U = function() {
          ie || (ie = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", $));
        };
        U.isReactWarning = !0, Object.defineProperty(y, "key", {
          get: U,
          configurable: !0
        });
      }
    }
    function sr(y, $) {
      {
        var U = function() {
          Be || (Be = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", $));
        };
        U.isReactWarning = !0, Object.defineProperty(y, "ref", {
          get: U,
          configurable: !0
        });
      }
    }
    var Dr = function(y, $, U, oe, de, Ee, ue) {
      var ce = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: y,
        key: $,
        ref: U,
        props: ue,
        // Record the component responsible for creating this element.
        _owner: Ee
      };
      return ce._store = {}, Object.defineProperty(ce._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ce, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: oe
      }), Object.defineProperty(ce, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: de
      }), Object.freeze && (Object.freeze(ce.props), Object.freeze(ce)), ce;
    };
    function xn(y, $, U, oe, de) {
      {
        var Ee, ue = {}, ce = null, Le = null;
        U !== void 0 && (it(U), ce = "" + U), Yt($) && (it($.key), ce = "" + $.key), bt($) && (Le = $.ref, bn($, de));
        for (Ee in $)
          Ie.call($, Ee) && !At.hasOwnProperty(Ee) && (ue[Ee] = $[Ee]);
        if (y && y.defaultProps) {
          var Q = y.defaultProps;
          for (Ee in Q)
            ue[Ee] === void 0 && (ue[Ee] = Q[Ee]);
        }
        if (ce || Le) {
          var pe = typeof y == "function" ? y.displayName || y.name || "Unknown" : y;
          ce && ir(ue, pe), Le && sr(ue, pe);
        }
        return Dr(y, ce, Le, de, oe, Ue.current, ue);
      }
    }
    var Lr = O.ReactCurrentOwner, En = O.ReactDebugCurrentFrame;
    function It(y) {
      if (y) {
        var $ = y._owner, U = Te(y.type, y._source, $ ? $.type : null);
        En.setExtraStackFrame(U);
      } else
        En.setExtraStackFrame(null);
    }
    var ar;
    ar = !1;
    function lr(y) {
      return typeof y == "object" && y !== null && y.$$typeof === t;
    }
    function Vr() {
      {
        if (Lr.current) {
          var y = F(Lr.current.type);
          if (y)
            return `

Check the render method of \`` + y + "`.";
        }
        return "";
      }
    }
    function On(y) {
      {
        if (y !== void 0) {
          var $ = y.fileName.replace(/^.*[\\\/]/, ""), U = y.lineNumber;
          return `

Check your code at ` + $ + ":" + U + ".";
        }
        return "";
      }
    }
    var Tn = {};
    function Co(y) {
      {
        var $ = Vr();
        if (!$) {
          var U = typeof y == "string" ? y : y.displayName || y.name;
          U && ($ = `

Check the top-level render call using <` + U + ">.");
        }
        return $;
      }
    }
    function wn(y, $) {
      {
        if (!y._store || y._store.validated || y.key != null)
          return;
        y._store.validated = !0;
        var U = Co($);
        if (Tn[U])
          return;
        Tn[U] = !0;
        var oe = "";
        y && y._owner && y._owner !== Lr.current && (oe = " It was passed a child from " + F(y._owner.type) + "."), It(y), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', U, oe), It(null);
      }
    }
    function cr(y, $) {
      {
        if (typeof y != "object")
          return;
        if (Xe(y))
          for (var U = 0; U < y.length; U++) {
            var oe = y[U];
            lr(oe) && wn(oe, $);
          }
        else if (lr(y))
          y._store && (y._store.validated = !0);
        else if (y) {
          var de = m(y);
          if (typeof de == "function" && de !== y.entries)
            for (var Ee = de.call(y), ue; !(ue = Ee.next()).done; )
              lr(ue.value) && wn(ue.value, $);
        }
      }
    }
    function Po(y) {
      {
        var $ = y.type;
        if ($ == null || typeof $ == "string")
          return;
        var U;
        if (typeof $ == "function")
          U = $.propTypes;
        else if (typeof $ == "object" && ($.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        $.$$typeof === d))
          U = $.propTypes;
        else
          return;
        if (U) {
          var oe = F($);
          De(U, y.props, "prop", oe, y);
        } else if ($.PropTypes !== void 0 && !ar) {
          ar = !0;
          var de = F($);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", de || "Unknown");
        }
        typeof $.getDefaultProps == "function" && !$.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ht(y) {
      {
        for (var $ = Object.keys(y.props), U = 0; U < $.length; U++) {
          var oe = $[U];
          if (oe !== "children" && oe !== "key") {
            It(y), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", oe), It(null);
            break;
          }
        }
        y.ref !== null && (It(y), C("Invalid attribute `ref` supplied to `React.Fragment`."), It(null));
      }
    }
    function ur(y, $, U, oe, de, Ee) {
      {
        var ue = N(y);
        if (!ue) {
          var ce = "";
          (y === void 0 || typeof y == "object" && y !== null && Object.keys(y).length === 0) && (ce += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Le = On(de);
          Le ? ce += Le : ce += Vr();
          var Q;
          y === null ? Q = "null" : Xe(y) ? Q = "array" : y !== void 0 && y.$$typeof === t ? (Q = "<" + (F(y.type) || "Unknown") + " />", ce = " Did you accidentally export a JSX literal instead of a component?") : Q = typeof y, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Q, ce);
        }
        var pe = xn(y, $, U, de, Ee);
        if (pe == null)
          return pe;
        if (ue) {
          var st = $.children;
          if (st !== void 0)
            if (oe)
              if (Xe(st)) {
                for (var fr = 0; fr < st.length; fr++)
                  cr(st[fr], y);
                Object.freeze && Object.freeze(st);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              cr(st, y);
        }
        return y === n ? Ht(pe) : Po(pe), pe;
      }
    }
    function qe(y, $, U) {
      return ur(y, $, U, !0);
    }
    function Gt(y, $, U) {
      return ur(y, $, U, !1);
    }
    var _o = Gt, Kt = qe;
    Fr.Fragment = n, Fr.jsx = _o, Fr.jsxs = Kt;
  }()), Fr;
}
process.env.NODE_ENV === "production" ? Yo.exports = Xc() : Yo.exports = Jc();
var P = Yo.exports;
function ae(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, i;
  for (i = 0; i < n.length; i++)
    o = n[i], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
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
var Ho = { exports: {} }, Rn = { exports: {} }, ge = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ss;
function Zc() {
  if (ss)
    return ge;
  ss = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
  function w(x) {
    if (typeof x == "object" && x !== null) {
      var S = x.$$typeof;
      switch (S) {
        case t:
          switch (x = x.type, x) {
            case c:
            case u:
            case n:
            case i:
            case o:
            case d:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case l:
                case f:
                case g:
                case v:
                case a:
                  return x;
                default:
                  return S;
              }
          }
        case r:
          return S;
      }
    }
  }
  function T(x) {
    return w(x) === u;
  }
  return ge.AsyncMode = c, ge.ConcurrentMode = u, ge.ContextConsumer = l, ge.ContextProvider = a, ge.Element = t, ge.ForwardRef = f, ge.Fragment = n, ge.Lazy = g, ge.Memo = v, ge.Portal = r, ge.Profiler = i, ge.StrictMode = o, ge.Suspense = d, ge.isAsyncMode = function(x) {
    return T(x) || w(x) === c;
  }, ge.isConcurrentMode = T, ge.isContextConsumer = function(x) {
    return w(x) === l;
  }, ge.isContextProvider = function(x) {
    return w(x) === a;
  }, ge.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, ge.isForwardRef = function(x) {
    return w(x) === f;
  }, ge.isFragment = function(x) {
    return w(x) === n;
  }, ge.isLazy = function(x) {
    return w(x) === g;
  }, ge.isMemo = function(x) {
    return w(x) === v;
  }, ge.isPortal = function(x) {
    return w(x) === r;
  }, ge.isProfiler = function(x) {
    return w(x) === i;
  }, ge.isStrictMode = function(x) {
    return w(x) === o;
  }, ge.isSuspense = function(x) {
    return w(x) === d;
  }, ge.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === n || x === u || x === i || x === o || x === d || x === p || typeof x == "object" && x !== null && (x.$$typeof === g || x.$$typeof === v || x.$$typeof === a || x.$$typeof === l || x.$$typeof === f || x.$$typeof === m || x.$$typeof === O || x.$$typeof === C || x.$$typeof === h);
  }, ge.typeOf = w, ge;
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
var as;
function Qc() {
  return as || (as = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
    function w(z) {
      return typeof z == "string" || typeof z == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      z === n || z === u || z === i || z === o || z === d || z === p || typeof z == "object" && z !== null && (z.$$typeof === g || z.$$typeof === v || z.$$typeof === a || z.$$typeof === l || z.$$typeof === f || z.$$typeof === m || z.$$typeof === O || z.$$typeof === C || z.$$typeof === h);
    }
    function T(z) {
      if (typeof z == "object" && z !== null) {
        var Oe = z.$$typeof;
        switch (Oe) {
          case t:
            var K = z.type;
            switch (K) {
              case c:
              case u:
              case n:
              case i:
              case o:
              case d:
                return K;
              default:
                var Te = K && K.$$typeof;
                switch (Te) {
                  case l:
                  case f:
                  case g:
                  case v:
                  case a:
                    return Te;
                  default:
                    return Oe;
                }
            }
          case r:
            return Oe;
        }
      }
    }
    var x = c, S = u, R = l, A = a, D = t, N = f, L = n, Y = g, F = v, I = r, B = i, M = o, V = d, j = !1;
    function X(z) {
      return j || (j = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), _(z) || T(z) === c;
    }
    function _(z) {
      return T(z) === u;
    }
    function W(z) {
      return T(z) === l;
    }
    function re(z) {
      return T(z) === a;
    }
    function te(z) {
      return typeof z == "object" && z !== null && z.$$typeof === t;
    }
    function H(z) {
      return T(z) === f;
    }
    function Z(z) {
      return T(z) === n;
    }
    function k(z) {
      return T(z) === g;
    }
    function G(z) {
      return T(z) === v;
    }
    function q(z) {
      return T(z) === r;
    }
    function J(z) {
      return T(z) === i;
    }
    function ee(z) {
      return T(z) === o;
    }
    function le(z) {
      return T(z) === d;
    }
    ye.AsyncMode = x, ye.ConcurrentMode = S, ye.ContextConsumer = R, ye.ContextProvider = A, ye.Element = D, ye.ForwardRef = N, ye.Fragment = L, ye.Lazy = Y, ye.Memo = F, ye.Portal = I, ye.Profiler = B, ye.StrictMode = M, ye.Suspense = V, ye.isAsyncMode = X, ye.isConcurrentMode = _, ye.isContextConsumer = W, ye.isContextProvider = re, ye.isElement = te, ye.isForwardRef = H, ye.isFragment = Z, ye.isLazy = k, ye.isMemo = G, ye.isPortal = q, ye.isProfiler = J, ye.isStrictMode = ee, ye.isSuspense = le, ye.isValidElementType = w, ye.typeOf = T;
  }()), ye;
}
var ls;
function fi() {
  return ls || (ls = 1, process.env.NODE_ENV === "production" ? Rn.exports = Zc() : Rn.exports = Qc()), Rn.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var $o, cs;
function eu() {
  if (cs)
    return $o;
  cs = 1;
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
  return $o = o() ? Object.assign : function(i, a) {
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
  }, $o;
}
var No, us;
function di() {
  if (us)
    return No;
  us = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return No = e, No;
}
var ko, fs;
function ja() {
  return fs || (fs = 1, ko = Function.call.bind(Object.prototype.hasOwnProperty)), ko;
}
var jo, ds;
function tu() {
  if (ds)
    return jo;
  ds = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = di(), r = {}, n = ja();
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
          } catch (g) {
            d = g;
          }
          if (d && !(d instanceof Error) && e(
            (c || "React class") + ": type specification of " + l + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in r)) {
            r[d.message] = !0;
            var v = u ? u() : "";
            e(
              "Failed " + l + " type: " + d.message + (v ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, jo = o, jo;
}
var Mo, ps;
function ru() {
  if (ps)
    return Mo;
  ps = 1;
  var e = fi(), t = eu(), r = di(), n = ja(), o = tu(), i = function() {
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
  return Mo = function(l, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function d(_) {
      var W = _ && (u && _[u] || _[f]);
      if (typeof W == "function")
        return W;
    }
    var p = "<<anonymous>>", v = {
      array: O("array"),
      bigint: O("bigint"),
      bool: O("boolean"),
      func: O("function"),
      number: O("number"),
      object: O("object"),
      string: O("string"),
      symbol: O("symbol"),
      any: C(),
      arrayOf: w,
      element: T(),
      elementType: x(),
      instanceOf: S,
      node: N(),
      objectOf: A,
      oneOf: R,
      oneOfType: D,
      shape: Y,
      exact: F
    };
    function g(_, W) {
      return _ === W ? _ !== 0 || 1 / _ === 1 / W : _ !== _ && W !== W;
    }
    function h(_, W) {
      this.message = _, this.data = W && typeof W == "object" ? W : {}, this.stack = "";
    }
    h.prototype = Error.prototype;
    function m(_) {
      if (process.env.NODE_ENV !== "production")
        var W = {}, re = 0;
      function te(Z, k, G, q, J, ee, le) {
        if (q = q || p, ee = ee || G, le !== r) {
          if (c) {
            var z = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw z.name = "Invariant Violation", z;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Oe = q + ":" + G;
            !W[Oe] && // Avoid spamming the console because they are often not actionable except for lib authors
            re < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + ee + "` prop on `" + q + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), W[Oe] = !0, re++);
          }
        }
        return k[G] == null ? Z ? k[G] === null ? new h("The " + J + " `" + ee + "` is marked as required " + ("in `" + q + "`, but its value is `null`.")) : new h("The " + J + " `" + ee + "` is marked as required in " + ("`" + q + "`, but its value is `undefined`.")) : null : _(k, G, q, J, ee);
      }
      var H = te.bind(null, !1);
      return H.isRequired = te.bind(null, !0), H;
    }
    function O(_) {
      function W(re, te, H, Z, k, G) {
        var q = re[te], J = M(q);
        if (J !== _) {
          var ee = V(q);
          return new h(
            "Invalid " + Z + " `" + k + "` of type " + ("`" + ee + "` supplied to `" + H + "`, expected ") + ("`" + _ + "`."),
            { expectedType: _ }
          );
        }
        return null;
      }
      return m(W);
    }
    function C() {
      return m(a);
    }
    function w(_) {
      function W(re, te, H, Z, k) {
        if (typeof _ != "function")
          return new h("Property `" + k + "` of component `" + H + "` has invalid PropType notation inside arrayOf.");
        var G = re[te];
        if (!Array.isArray(G)) {
          var q = M(G);
          return new h("Invalid " + Z + " `" + k + "` of type " + ("`" + q + "` supplied to `" + H + "`, expected an array."));
        }
        for (var J = 0; J < G.length; J++) {
          var ee = _(G, J, H, Z, k + "[" + J + "]", r);
          if (ee instanceof Error)
            return ee;
        }
        return null;
      }
      return m(W);
    }
    function T() {
      function _(W, re, te, H, Z) {
        var k = W[re];
        if (!l(k)) {
          var G = M(k);
          return new h("Invalid " + H + " `" + Z + "` of type " + ("`" + G + "` supplied to `" + te + "`, expected a single ReactElement."));
        }
        return null;
      }
      return m(_);
    }
    function x() {
      function _(W, re, te, H, Z) {
        var k = W[re];
        if (!e.isValidElementType(k)) {
          var G = M(k);
          return new h("Invalid " + H + " `" + Z + "` of type " + ("`" + G + "` supplied to `" + te + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return m(_);
    }
    function S(_) {
      function W(re, te, H, Z, k) {
        if (!(re[te] instanceof _)) {
          var G = _.name || p, q = X(re[te]);
          return new h("Invalid " + Z + " `" + k + "` of type " + ("`" + q + "` supplied to `" + H + "`, expected ") + ("instance of `" + G + "`."));
        }
        return null;
      }
      return m(W);
    }
    function R(_) {
      if (!Array.isArray(_))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function W(re, te, H, Z, k) {
        for (var G = re[te], q = 0; q < _.length; q++)
          if (g(G, _[q]))
            return null;
        var J = JSON.stringify(_, function(le, z) {
          var Oe = V(z);
          return Oe === "symbol" ? String(z) : z;
        });
        return new h("Invalid " + Z + " `" + k + "` of value `" + String(G) + "` " + ("supplied to `" + H + "`, expected one of " + J + "."));
      }
      return m(W);
    }
    function A(_) {
      function W(re, te, H, Z, k) {
        if (typeof _ != "function")
          return new h("Property `" + k + "` of component `" + H + "` has invalid PropType notation inside objectOf.");
        var G = re[te], q = M(G);
        if (q !== "object")
          return new h("Invalid " + Z + " `" + k + "` of type " + ("`" + q + "` supplied to `" + H + "`, expected an object."));
        for (var J in G)
          if (n(G, J)) {
            var ee = _(G, J, H, Z, k + "." + J, r);
            if (ee instanceof Error)
              return ee;
          }
        return null;
      }
      return m(W);
    }
    function D(_) {
      if (!Array.isArray(_))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var W = 0; W < _.length; W++) {
        var re = _[W];
        if (typeof re != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + j(re) + " at index " + W + "."
          ), a;
      }
      function te(H, Z, k, G, q) {
        for (var J = [], ee = 0; ee < _.length; ee++) {
          var le = _[ee], z = le(H, Z, k, G, q, r);
          if (z == null)
            return null;
          z.data && n(z.data, "expectedType") && J.push(z.data.expectedType);
        }
        var Oe = J.length > 0 ? ", expected one of type [" + J.join(", ") + "]" : "";
        return new h("Invalid " + G + " `" + q + "` supplied to " + ("`" + k + "`" + Oe + "."));
      }
      return m(te);
    }
    function N() {
      function _(W, re, te, H, Z) {
        return I(W[re]) ? null : new h("Invalid " + H + " `" + Z + "` supplied to " + ("`" + te + "`, expected a ReactNode."));
      }
      return m(_);
    }
    function L(_, W, re, te, H) {
      return new h(
        (_ || "React class") + ": " + W + " type `" + re + "." + te + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + H + "`."
      );
    }
    function Y(_) {
      function W(re, te, H, Z, k) {
        var G = re[te], q = M(G);
        if (q !== "object")
          return new h("Invalid " + Z + " `" + k + "` of type `" + q + "` " + ("supplied to `" + H + "`, expected `object`."));
        for (var J in _) {
          var ee = _[J];
          if (typeof ee != "function")
            return L(H, Z, k, J, V(ee));
          var le = ee(G, J, H, Z, k + "." + J, r);
          if (le)
            return le;
        }
        return null;
      }
      return m(W);
    }
    function F(_) {
      function W(re, te, H, Z, k) {
        var G = re[te], q = M(G);
        if (q !== "object")
          return new h("Invalid " + Z + " `" + k + "` of type `" + q + "` " + ("supplied to `" + H + "`, expected `object`."));
        var J = t({}, re[te], _);
        for (var ee in J) {
          var le = _[ee];
          if (n(_, ee) && typeof le != "function")
            return L(H, Z, k, ee, V(le));
          if (!le)
            return new h(
              "Invalid " + Z + " `" + k + "` key `" + ee + "` supplied to `" + H + "`.\nBad object: " + JSON.stringify(re[te], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(_), null, "  ")
            );
          var z = le(G, ee, H, Z, k + "." + ee, r);
          if (z)
            return z;
        }
        return null;
      }
      return m(W);
    }
    function I(_) {
      switch (typeof _) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !_;
        case "object":
          if (Array.isArray(_))
            return _.every(I);
          if (_ === null || l(_))
            return !0;
          var W = d(_);
          if (W) {
            var re = W.call(_), te;
            if (W !== _.entries) {
              for (; !(te = re.next()).done; )
                if (!I(te.value))
                  return !1;
            } else
              for (; !(te = re.next()).done; ) {
                var H = te.value;
                if (H && !I(H[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function B(_, W) {
      return _ === "symbol" ? !0 : W ? W["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && W instanceof Symbol : !1;
    }
    function M(_) {
      var W = typeof _;
      return Array.isArray(_) ? "array" : _ instanceof RegExp ? "object" : B(W, _) ? "symbol" : W;
    }
    function V(_) {
      if (typeof _ > "u" || _ === null)
        return "" + _;
      var W = M(_);
      if (W === "object") {
        if (_ instanceof Date)
          return "date";
        if (_ instanceof RegExp)
          return "regexp";
      }
      return W;
    }
    function j(_) {
      var W = V(_);
      switch (W) {
        case "array":
        case "object":
          return "an " + W;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + W;
        default:
          return W;
      }
    }
    function X(_) {
      return !_.constructor || !_.constructor.name ? p : _.constructor.name;
    }
    return v.checkPropTypes = o, v.resetWarningCache = o.resetWarningCache, v.PropTypes = v, v;
  }, Mo;
}
var Ao, hs;
function nu() {
  if (hs)
    return Ao;
  hs = 1;
  var e = di();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Ao = function() {
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
  }, Ao;
}
if (process.env.NODE_ENV !== "production") {
  var ou = fi(), iu = !0;
  Ho.exports = ru()(ou.isElement, iu);
} else
  Ho.exports = nu()();
var su = Ho.exports;
const s = /* @__PURE__ */ ka(su);
function Ma(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (r = Ma(e[t])) && (n && (n += " "), n += r);
    } else
      for (r in e)
        e[r] && (n && (n += " "), n += r);
  return n;
}
function se() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)
    (e = arguments[r]) && (t = Ma(e)) && (n && (n += " "), n += t);
  return n;
}
function au(e) {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : Number.isFinite(e) ? e !== Math.floor(e) ? "float" : "number" : "Infinity";
    case "object":
      return e === null ? "null" : e.constructor.name;
    default:
      return t;
  }
}
function lu(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}
const cu = Number.isInteger || lu;
function Aa(e, t, r, n) {
  const o = e[t];
  if (o == null || !cu(o)) {
    const i = au(o);
    return new RangeError(`Invalid ${n} \`${t}\` of type \`${i}\` supplied to \`${r}\`, expected \`integer\`.`);
  }
  return null;
}
function Ia(e, t, ...r) {
  return e[t] === void 0 ? null : Aa(e, t, ...r);
}
function Go() {
  return null;
}
Ia.isRequired = Aa;
Go.isRequired = Go;
const Da = process.env.NODE_ENV === "production" ? Go : Ia;
function Ae(e, t, r = void 0) {
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
const uu = ["value"], La = /* @__PURE__ */ b.createContext();
function Va(e) {
  let {
    value: t
  } = e, r = ae(e, uu);
  return /* @__PURE__ */ P.jsx(La.Provider, E({
    value: t ?? !0
  }, r));
}
process.env.NODE_ENV !== "production" && (Va.propTypes = {
  children: s.node,
  value: s.bool
});
const za = () => {
  const e = b.useContext(La);
  return e ?? !1;
};
function or(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function zt(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Fa(e) {
  if (!zt(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = Fa(e[r]);
  }), t;
}
function Et(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? E({}, e) : e;
  return zt(e) && zt(t) && Object.keys(t).forEach((o) => {
    o !== "__proto__" && (zt(t[o]) && o in e && zt(e[o]) ? n[o] = Et(e[o], t[o], r) : r.clone ? n[o] = zt(t[o]) ? Fa(t[o]) : t[o] : n[o] = t[o]);
  }), n;
}
const fu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Et,
  isPlainObject: zt
}, Symbol.toStringTag, { value: "Module" }));
function du(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Wa(e, t, r, n, o) {
  const i = e[t], a = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  const c = i.type;
  return typeof c == "function" && !du(c) && (l = "Did you accidentally use a plain function component for an element instead?"), l !== void 0 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Ba = or(s.element, Wa);
Ba.isRequired = or(s.element.isRequired, Wa);
const Nr = Ba;
function pu(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function hu(e, t, r, n, o) {
  const i = e[t], a = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof i == "function" && !pu(i) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Ua = or(s.elementType, hu), mu = "exact-prop: ​";
function oo(e) {
  return process.env.NODE_ENV === "production" ? e : E({}, e, {
    [mu]: (t) => {
      const r = Object.keys(t).filter((n) => !e.hasOwnProperty(n));
      return r.length > 0 ? new Error(`The following props are not supported: ${r.map((n) => `\`${n}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
function Qr(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let r = 1; r < arguments.length; r += 1)
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const vu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qr
}, Symbol.toStringTag, { value: "Module" }));
var Ko = { exports: {} }, be = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ms;
function gu() {
  if (ms)
    return be;
  ms = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g;
  g = Symbol.for("react.module.reference");
  function h(m) {
    if (typeof m == "object" && m !== null) {
      var O = m.$$typeof;
      switch (O) {
        case e:
          switch (m = m.type, m) {
            case r:
            case o:
            case n:
            case u:
            case f:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case l:
                case a:
                case c:
                case p:
                case d:
                case i:
                  return m;
                default:
                  return O;
              }
          }
        case t:
          return O;
      }
    }
  }
  return be.ContextConsumer = a, be.ContextProvider = i, be.Element = e, be.ForwardRef = c, be.Fragment = r, be.Lazy = p, be.Memo = d, be.Portal = t, be.Profiler = o, be.StrictMode = n, be.Suspense = u, be.SuspenseList = f, be.isAsyncMode = function() {
    return !1;
  }, be.isConcurrentMode = function() {
    return !1;
  }, be.isContextConsumer = function(m) {
    return h(m) === a;
  }, be.isContextProvider = function(m) {
    return h(m) === i;
  }, be.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, be.isForwardRef = function(m) {
    return h(m) === c;
  }, be.isFragment = function(m) {
    return h(m) === r;
  }, be.isLazy = function(m) {
    return h(m) === p;
  }, be.isMemo = function(m) {
    return h(m) === d;
  }, be.isPortal = function(m) {
    return h(m) === t;
  }, be.isProfiler = function(m) {
    return h(m) === o;
  }, be.isStrictMode = function(m) {
    return h(m) === n;
  }, be.isSuspense = function(m) {
    return h(m) === u;
  }, be.isSuspenseList = function(m) {
    return h(m) === f;
  }, be.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === r || m === o || m === n || m === u || m === f || m === v || typeof m == "object" && m !== null && (m.$$typeof === p || m.$$typeof === d || m.$$typeof === i || m.$$typeof === a || m.$$typeof === c || m.$$typeof === g || m.getModuleId !== void 0);
  }, be.typeOf = h, be;
}
var xe = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vs;
function yu() {
  return vs || (vs = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g = !1, h = !1, m = !1, O = !1, C = !1, w;
    w = Symbol.for("react.module.reference");
    function T(K) {
      return !!(typeof K == "string" || typeof K == "function" || K === r || K === o || C || K === n || K === u || K === f || O || K === v || g || h || m || typeof K == "object" && K !== null && (K.$$typeof === p || K.$$typeof === d || K.$$typeof === i || K.$$typeof === a || K.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      K.$$typeof === w || K.getModuleId !== void 0));
    }
    function x(K) {
      if (typeof K == "object" && K !== null) {
        var Te = K.$$typeof;
        switch (Te) {
          case e:
            var Ie = K.type;
            switch (Ie) {
              case r:
              case o:
              case n:
              case u:
              case f:
                return Ie;
              default:
                var nt = Ie && Ie.$$typeof;
                switch (nt) {
                  case l:
                  case a:
                  case c:
                  case p:
                  case d:
                  case i:
                    return nt;
                  default:
                    return Te;
                }
            }
          case t:
            return Te;
        }
      }
    }
    var S = a, R = i, A = e, D = c, N = r, L = p, Y = d, F = t, I = o, B = n, M = u, V = f, j = !1, X = !1;
    function _(K) {
      return j || (j = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function W(K) {
      return X || (X = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function re(K) {
      return x(K) === a;
    }
    function te(K) {
      return x(K) === i;
    }
    function H(K) {
      return typeof K == "object" && K !== null && K.$$typeof === e;
    }
    function Z(K) {
      return x(K) === c;
    }
    function k(K) {
      return x(K) === r;
    }
    function G(K) {
      return x(K) === p;
    }
    function q(K) {
      return x(K) === d;
    }
    function J(K) {
      return x(K) === t;
    }
    function ee(K) {
      return x(K) === o;
    }
    function le(K) {
      return x(K) === n;
    }
    function z(K) {
      return x(K) === u;
    }
    function Oe(K) {
      return x(K) === f;
    }
    xe.ContextConsumer = S, xe.ContextProvider = R, xe.Element = A, xe.ForwardRef = D, xe.Fragment = N, xe.Lazy = L, xe.Memo = Y, xe.Portal = F, xe.Profiler = I, xe.StrictMode = B, xe.Suspense = M, xe.SuspenseList = V, xe.isAsyncMode = _, xe.isConcurrentMode = W, xe.isContextConsumer = re, xe.isContextProvider = te, xe.isElement = H, xe.isForwardRef = Z, xe.isFragment = k, xe.isLazy = G, xe.isMemo = q, xe.isPortal = J, xe.isProfiler = ee, xe.isStrictMode = le, xe.isSuspense = z, xe.isSuspenseList = Oe, xe.isValidElementType = T, xe.typeOf = x;
  }()), xe;
}
process.env.NODE_ENV === "production" ? Ko.exports = gu() : Ko.exports = yu();
var gs = Ko.exports;
const bu = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function qa(e) {
  const t = `${e}`.match(bu);
  return t && t[1] || "";
}
function Ya(e, t = "") {
  return e.displayName || e.name || qa(e) || t;
}
function ys(e, t, r) {
  const n = Ya(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function xu(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Ya(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case gs.ForwardRef:
          return ys(e, e.render, "ForwardRef");
        case gs.Memo:
          return ys(e, e.type, "memo");
        default:
          return;
      }
  }
}
const Eu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xu,
  getFunctionName: qa
}, Symbol.toStringTag, { value: "Module" }));
function tr(e, t, r, n, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = e[t], a = o || t;
  return i == null ? null : i && i.nodeType !== 1 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an HTMLElement.`) : null;
}
const Ou = s.oneOfType([s.func, s.object]), pi = Ou;
function ne(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Qr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const Tu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ne
}, Symbol.toStringTag, { value: "Module" }));
function Xo(...e) {
  return e.reduce((t, r) => r == null ? t : function(...o) {
    t.apply(this, o), r.apply(this, o);
  }, () => {
  });
}
function Ha(e, t = 166) {
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
function wu(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : (r, n, o, i, a) => {
    const l = o || "<<anonymous>>", c = a || n;
    return typeof r[n] < "u" ? new Error(`The ${i} \`${c}\` of \`${l}\` is deprecated. ${t}`) : null;
  };
}
function Su(e, t) {
  var r, n;
  return /* @__PURE__ */ b.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    (r = e.type.muiName) != null ? r : (n = e.type) == null || (n = n._payload) == null || (n = n.value) == null ? void 0 : n.muiName
  ) !== -1;
}
function gt(e) {
  return e && e.ownerDocument || document;
}
function kr(e) {
  return gt(e).defaultView || window;
}
function Ru(e, t) {
  if (process.env.NODE_ENV === "production")
    return () => null;
  const r = t ? E({}, t.propTypes) : null;
  return (o) => (i, a, l, c, u, ...f) => {
    const d = u || a, p = r == null ? void 0 : r[d];
    if (p) {
      const v = p(i, a, l, c, u, ...f);
      if (v)
        return v;
    }
    return typeof i[a] < "u" && !i[o] ? new Error(`The prop \`${d}\` of \`${e}\` can only be used together with the \`${o}\` prop.`) : null;
  };
}
function Bn(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const rr = typeof window < "u" ? b.useLayoutEffect : b.useEffect;
let bs = 0;
function Cu(e) {
  const [t, r] = b.useState(e), n = e || t;
  return b.useEffect(() => {
    t == null && (bs += 1, r(`mui-${bs}`));
  }, [t]), n;
}
const xs = b.useId;
function Ga(e) {
  if (xs !== void 0) {
    const t = xs();
    return e ?? t;
  }
  return Cu(e);
}
function Ka(e, t, r, n, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = o || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${i}\` is not supported. Please remove it.`) : null;
}
function Xa({
  controlled: e,
  default: t,
  name: r,
  state: n = "value"
}) {
  const {
    current: o
  } = b.useRef(e !== void 0), [i, a] = b.useState(t), l = o ? e : i;
  if (process.env.NODE_ENV !== "production") {
    b.useEffect(() => {
      o !== (e !== void 0) && console.error([`MUI: A component is changing the ${o ? "" : "un"}controlled ${n} state of ${r} to be ${o ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${r} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [n, r, e]);
    const {
      current: u
    } = b.useRef(t);
    b.useEffect(() => {
      !o && u !== t && console.error([`MUI: A component is changing the default ${n} state of an uncontrolled ${r} after being initialized. To suppress this warning opt to use a controlled ${r}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const c = b.useCallback((u) => {
    o || a(u);
  }, []);
  return [l, c];
}
function Pt(e) {
  const t = b.useRef(e);
  return rr(() => {
    t.current = e;
  }), b.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function ze(...e) {
  return b.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      Bn(r, t);
    });
  }, e);
}
const Es = {};
function Pu(e, t) {
  const r = b.useRef(Es);
  return r.current === Es && (r.current = e(t)), r;
}
const _u = [];
function $u(e) {
  b.useEffect(e, _u);
}
class cn {
  constructor() {
    this.currentId = null, this.clear = () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    }, this.disposeEffect = () => this.clear;
  }
  static create() {
    return new cn();
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
function Zt() {
  const e = Pu(cn.create).current;
  return $u(e.disposeEffect), e;
}
let io = !0, Jo = !1;
const Nu = new cn(), ku = {
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
function ju(e) {
  const {
    type: t,
    tagName: r
  } = e;
  return !!(r === "INPUT" && ku[t] && !e.readOnly || r === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function Mu(e) {
  e.metaKey || e.altKey || e.ctrlKey || (io = !0);
}
function Io() {
  io = !1;
}
function Au() {
  this.visibilityState === "hidden" && Jo && (io = !0);
}
function Iu(e) {
  e.addEventListener("keydown", Mu, !0), e.addEventListener("mousedown", Io, !0), e.addEventListener("pointerdown", Io, !0), e.addEventListener("touchstart", Io, !0), e.addEventListener("visibilitychange", Au, !0);
}
function Du(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return io || ju(t);
}
function hi() {
  const e = b.useCallback((o) => {
    o != null && Iu(o.ownerDocument);
  }, []), t = b.useRef(!1);
  function r() {
    return t.current ? (Jo = !0, Nu.start(100, () => {
      Jo = !1;
    }), t.current = !1, !0) : !1;
  }
  function n(o) {
    return Du(o) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: n,
    onBlur: r,
    ref: e
  };
}
function Lu(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
function Ja(e, t) {
  const r = E({}, t);
  return Object.keys(e).forEach((n) => {
    if (n.toString().match(/^(components|slots)$/))
      r[n] = E({}, e[n], r[n]);
    else if (n.toString().match(/^(componentsProps|slotProps)$/)) {
      const o = e[n] || {}, i = t[n];
      r[n] = {}, !i || !Object.keys(i) ? r[n] = o : !o || !Object.keys(o) ? r[n] = i : (r[n] = E({}, i), Object.keys(o).forEach((a) => {
        r[n][a] = Ja(o[a], i[a]);
      }));
    } else
      r[n] === void 0 && (r[n] = e[n]);
  }), r;
}
const Os = (e) => e, Vu = () => {
  let e = Os;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Os;
    }
  };
}, zu = Vu(), mi = zu, Za = {
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
function ke(e, t, r = "Mui") {
  const n = Za[t];
  return n ? `${r}-${n}` : `${mi.generate(e)}-${t}`;
}
function je(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = ke(e, o, r);
  }), n;
}
function Fu(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
const Wu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fu
}, Symbol.toStringTag, { value: "Module" }));
function Bu(e) {
  return typeof e == "string";
}
function xr(e, t, r) {
  return e === void 0 || Bu(e) ? t : E({}, t, {
    ownerState: E({}, t.ownerState, r)
  });
}
const Uu = {
  disableDefaultClasses: !1
}, Qa = /* @__PURE__ */ b.createContext(Uu);
process.env.NODE_ENV !== "production" && (Qa.displayName = "ClassNameConfiguratorContext");
function qu(e) {
  const {
    disableDefaultClasses: t
  } = b.useContext(Qa);
  return (r) => t ? "" : e(r);
}
function el(e, t = []) {
  if (e === void 0)
    return {};
  const r = {};
  return Object.keys(e).filter((n) => n.match(/^on[A-Z]/) && typeof e[n] == "function" && !t.includes(n)).forEach((n) => {
    r[n] = e[n];
  }), r;
}
function tl(e, t, r) {
  return typeof e == "function" ? e(t, r) : e;
}
function Ts(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((r) => !(r.match(/^on[A-Z]/) && typeof e[r] == "function")).forEach((r) => {
    t[r] = e[r];
  }), t;
}
function rl(e) {
  const {
    getSlotProps: t,
    additionalProps: r,
    externalSlotProps: n,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const v = se(r == null ? void 0 : r.className, i, o == null ? void 0 : o.className, n == null ? void 0 : n.className), g = E({}, r == null ? void 0 : r.style, o == null ? void 0 : o.style, n == null ? void 0 : n.style), h = E({}, r, o, n);
    return v.length > 0 && (h.className = v), Object.keys(g).length > 0 && (h.style = g), {
      props: h,
      internalRef: void 0
    };
  }
  const a = el(E({}, o, n)), l = Ts(n), c = Ts(o), u = t(a), f = se(u == null ? void 0 : u.className, r == null ? void 0 : r.className, i, o == null ? void 0 : o.className, n == null ? void 0 : n.className), d = E({}, u == null ? void 0 : u.style, r == null ? void 0 : r.style, o == null ? void 0 : o.style, n == null ? void 0 : n.style), p = E({}, u, r, c, l);
  return f.length > 0 && (p.className = f), Object.keys(d).length > 0 && (p.style = d), {
    props: p,
    internalRef: u.ref
  };
}
const Yu = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function Zo(e) {
  var t;
  const {
    elementType: r,
    externalSlotProps: n,
    ownerState: o,
    skipResolvingSlotProps: i = !1
  } = e, a = ae(e, Yu), l = i ? {} : tl(n, o), {
    props: c,
    internalRef: u
  } = rl(E({}, a, {
    externalSlotProps: l
  })), f = ze(u, l == null ? void 0 : l.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return xr(r, E({}, c, {
    ref: f
  }), o);
}
function Hu(e) {
  const t = gt(e);
  return t.body === e ? kr(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Kr(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function ws(e) {
  return parseInt(kr(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function Gu(e) {
  const r = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, n = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return r || n;
}
function Ss(e, t, r, n, o) {
  const i = [t, r, ...n];
  [].forEach.call(e.children, (a) => {
    const l = i.indexOf(a) === -1, c = !Gu(a);
    l && c && Kr(a, o);
  });
}
function Do(e, t) {
  let r = -1;
  return e.some((n, o) => t(n) ? (r = o, !0) : !1), r;
}
function Ku(e, t) {
  const r = [], n = e.container;
  if (!t.disableScrollLock) {
    if (Hu(n)) {
      const a = Lu(gt(n));
      r.push({
        value: n.style.paddingRight,
        property: "padding-right",
        el: n
      }), n.style.paddingRight = `${ws(n) + a}px`;
      const l = gt(n).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (c) => {
        r.push({
          value: c.style.paddingRight,
          property: "padding-right",
          el: c
        }), c.style.paddingRight = `${ws(c) + a}px`;
      });
    }
    let i;
    if (n.parentNode instanceof DocumentFragment)
      i = gt(n).body;
    else {
      const a = n.parentElement, l = kr(n);
      i = (a == null ? void 0 : a.nodeName) === "HTML" && l.getComputedStyle(a).overflowY === "scroll" ? a : n;
    }
    r.push({
      value: i.style.overflow,
      property: "overflow",
      el: i
    }, {
      value: i.style.overflowX,
      property: "overflow-x",
      el: i
    }, {
      value: i.style.overflowY,
      property: "overflow-y",
      el: i
    }), i.style.overflow = "hidden";
  }
  return () => {
    r.forEach(({
      value: i,
      el: a,
      property: l
    }) => {
      i ? a.style.setProperty(l, i) : a.style.removeProperty(l);
    });
  };
}
function Xu(e) {
  const t = [];
  return [].forEach.call(e.children, (r) => {
    r.getAttribute("aria-hidden") === "true" && t.push(r);
  }), t;
}
class Ju {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(t, r) {
    let n = this.modals.indexOf(t);
    if (n !== -1)
      return n;
    n = this.modals.length, this.modals.push(t), t.modalRef && Kr(t.modalRef, !1);
    const o = Xu(r);
    Ss(r, t.mount, t.modalRef, o, !0);
    const i = Do(this.containers, (a) => a.container === r);
    return i !== -1 ? (this.containers[i].modals.push(t), n) : (this.containers.push({
      modals: [t],
      container: r,
      restore: null,
      hiddenSiblings: o
    }), n);
  }
  mount(t, r) {
    const n = Do(this.containers, (i) => i.modals.indexOf(t) !== -1), o = this.containers[n];
    o.restore || (o.restore = Ku(o, r));
  }
  remove(t, r = !0) {
    const n = this.modals.indexOf(t);
    if (n === -1)
      return n;
    const o = Do(this.containers, (a) => a.modals.indexOf(t) !== -1), i = this.containers[o];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(n, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && Kr(t.modalRef, r), Ss(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const a = i.modals[i.modals.length - 1];
      a.modalRef && Kr(a.modalRef, !1);
    }
    return n;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
function Zu(e) {
  return typeof e == "function" ? e() : e;
}
function Qu(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const ef = new Ju();
function tf(e) {
  const {
    container: t,
    disableEscapeKeyDown: r = !1,
    disableScrollLock: n = !1,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager: o = ef,
    closeAfterTransition: i = !1,
    onTransitionEnter: a,
    onTransitionExited: l,
    children: c,
    onClose: u,
    open: f,
    rootRef: d
  } = e, p = b.useRef({}), v = b.useRef(null), g = b.useRef(null), h = ze(g, d), [m, O] = b.useState(!f), C = Qu(c);
  let w = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (w = !1);
  const T = () => gt(v.current), x = () => (p.current.modalRef = g.current, p.current.mount = v.current, p.current), S = () => {
    o.mount(x(), {
      disableScrollLock: n
    }), g.current && (g.current.scrollTop = 0);
  }, R = Pt(() => {
    const M = Zu(t) || T().body;
    o.add(x(), M), g.current && S();
  }), A = b.useCallback(() => o.isTopModal(x()), [o]), D = Pt((M) => {
    v.current = M, M && (f && A() ? S() : g.current && Kr(g.current, w));
  }), N = b.useCallback(() => {
    o.remove(x(), w);
  }, [w, o]);
  b.useEffect(() => () => {
    N();
  }, [N]), b.useEffect(() => {
    f ? R() : (!C || !i) && N();
  }, [f, N, C, i, R]);
  const L = (M) => (V) => {
    var j;
    (j = M.onKeyDown) == null || j.call(M, V), !(V.key !== "Escape" || V.which === 229 || // Wait until IME is settled.
    !A()) && (r || (V.stopPropagation(), u && u(V, "escapeKeyDown")));
  }, Y = (M) => (V) => {
    var j;
    (j = M.onClick) == null || j.call(M, V), V.target === V.currentTarget && u && u(V, "backdropClick");
  };
  return {
    getRootProps: (M = {}) => {
      const V = el(e);
      delete V.onTransitionEnter, delete V.onTransitionExited;
      const j = E({}, V, M);
      return E({
        role: "presentation"
      }, j, {
        onKeyDown: L(j),
        ref: h
      });
    },
    getBackdropProps: (M = {}) => {
      const V = M;
      return E({
        "aria-hidden": !0
      }, V, {
        onClick: Y(V),
        open: f
      });
    },
    getTransitionProps: () => {
      const M = () => {
        O(!1), a && a();
      }, V = () => {
        O(!0), l && l(), i && N();
      };
      return {
        onEnter: Xo(M, c == null ? void 0 : c.props.onEnter),
        onExited: Xo(V, c == null ? void 0 : c.props.onExited)
      };
    },
    rootRef: h,
    portalRef: D,
    isTopModal: A,
    exited: m,
    hasTransition: C
  };
}
const rf = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function nf(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function of(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (n) => e.ownerDocument.querySelector(`input[type="radio"]${n}`);
  let r = t(`[name="${e.name}"]:checked`);
  return r || (r = t(`[name="${e.name}"]`)), r !== e;
}
function sf(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || of(e));
}
function af(e) {
  const t = [], r = [];
  return Array.from(e.querySelectorAll(rf)).forEach((n, o) => {
    const i = nf(n);
    i === -1 || !sf(n) || (i === 0 ? t.push(n) : r.push({
      documentOrder: o,
      tabIndex: i,
      node: n
    }));
  }), r.sort((n, o) => n.tabIndex === o.tabIndex ? n.documentOrder - o.documentOrder : n.tabIndex - o.tabIndex).map((n) => n.node).concat(t);
}
function lf() {
  return !0;
}
function Un(e) {
  const {
    children: t,
    disableAutoFocus: r = !1,
    disableEnforceFocus: n = !1,
    disableRestoreFocus: o = !1,
    getTabbable: i = af,
    isEnabled: a = lf,
    open: l
  } = e, c = b.useRef(!1), u = b.useRef(null), f = b.useRef(null), d = b.useRef(null), p = b.useRef(null), v = b.useRef(!1), g = b.useRef(null), h = ze(t.ref, g), m = b.useRef(null);
  b.useEffect(() => {
    !l || !g.current || (v.current = !r);
  }, [r, l]), b.useEffect(() => {
    if (!l || !g.current)
      return;
    const w = gt(g.current);
    return g.current.contains(w.activeElement) || (g.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), g.current.setAttribute("tabIndex", "-1")), v.current && g.current.focus()), () => {
      o || (d.current && d.current.focus && (c.current = !0, d.current.focus()), d.current = null);
    };
  }, [l]), b.useEffect(() => {
    if (!l || !g.current)
      return;
    const w = gt(g.current), T = (R) => {
      m.current = R, !(n || !a() || R.key !== "Tab") && w.activeElement === g.current && R.shiftKey && (c.current = !0, f.current && f.current.focus());
    }, x = () => {
      const R = g.current;
      if (R === null)
        return;
      if (!w.hasFocus() || !a() || c.current) {
        c.current = !1;
        return;
      }
      if (R.contains(w.activeElement) || n && w.activeElement !== u.current && w.activeElement !== f.current)
        return;
      if (w.activeElement !== p.current)
        p.current = null;
      else if (p.current !== null)
        return;
      if (!v.current)
        return;
      let A = [];
      if ((w.activeElement === u.current || w.activeElement === f.current) && (A = i(g.current)), A.length > 0) {
        var D, N;
        const L = !!((D = m.current) != null && D.shiftKey && ((N = m.current) == null ? void 0 : N.key) === "Tab"), Y = A[0], F = A[A.length - 1];
        typeof Y != "string" && typeof F != "string" && (L ? F.focus() : Y.focus());
      } else
        R.focus();
    };
    w.addEventListener("focusin", x), w.addEventListener("keydown", T, !0);
    const S = setInterval(() => {
      w.activeElement && w.activeElement.tagName === "BODY" && x();
    }, 50);
    return () => {
      clearInterval(S), w.removeEventListener("focusin", x), w.removeEventListener("keydown", T, !0);
    };
  }, [r, n, o, a, l, i]);
  const O = (w) => {
    d.current === null && (d.current = w.relatedTarget), v.current = !0, p.current = w.target;
    const T = t.props.onFocus;
    T && T(w);
  }, C = (w) => {
    d.current === null && (d.current = w.relatedTarget), v.current = !0;
  };
  return /* @__PURE__ */ P.jsxs(b.Fragment, {
    children: [/* @__PURE__ */ P.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: C,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ b.cloneElement(t, {
      ref: h,
      onFocus: O
    }), /* @__PURE__ */ P.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: C,
      ref: f,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (Un.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: Nr,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: s.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: s.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: s.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: s.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: s.func,
  /**
   * If `true`, focus is locked.
   */
  open: s.bool.isRequired
});
process.env.NODE_ENV !== "production" && (Un.propTypes = oo(Un.propTypes));
function cf(e) {
  return typeof e == "function" ? e() : e;
}
const en = /* @__PURE__ */ b.forwardRef(function(t, r) {
  const {
    children: n,
    container: o,
    disablePortal: i = !1
  } = t, [a, l] = b.useState(null), c = ze(/* @__PURE__ */ b.isValidElement(n) ? n.ref : null, r);
  if (rr(() => {
    i || l(cf(o) || document.body);
  }, [o, i]), rr(() => {
    if (a && !i)
      return Bn(r, a), () => {
        Bn(r, null);
      };
  }, [r, a, i]), i) {
    if (/* @__PURE__ */ b.isValidElement(n)) {
      const u = {
        ref: c
      };
      return /* @__PURE__ */ b.cloneElement(n, u);
    }
    return /* @__PURE__ */ P.jsx(b.Fragment, {
      children: n
    });
  }
  return /* @__PURE__ */ P.jsx(b.Fragment, {
    children: a && /* @__PURE__ */ Kc.createPortal(n, a)
  });
});
process.env.NODE_ENV !== "production" && (en.propTypes = {
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
  container: s.oneOfType([tr, s.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: s.bool
});
process.env.NODE_ENV !== "production" && (en.propTypes = oo(en.propTypes));
var un = {}, nl = { exports: {} };
(function(e) {
  function t(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(nl);
var jr = nl.exports, Lo = { exports: {} }, Rs;
function ol() {
  return Rs || (Rs = 1, function(e) {
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
  }(Lo)), Lo.exports;
}
var Vo = { exports: {} }, Cs;
function uf() {
  return Cs || (Cs = 1, function(e) {
    function t(r, n) {
      if (r == null)
        return {};
      var o = {}, i = Object.keys(r), a, l;
      for (l = 0; l < i.length; l++)
        a = i[l], !(n.indexOf(a) >= 0) && (o[a] = r[a]);
      return o;
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Vo)), Vo.exports;
}
function il(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var ff = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, df = /* @__PURE__ */ il(
  function(e) {
    return ff.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function pf(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function hf(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var mf = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(hf(this));
    var o = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var i = n.charCodeAt(0) === 64 && n.charCodeAt(1) === 105;
      i && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + n + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !i;
    }
    if (this.isSpeedy) {
      var a = pf(o);
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
}(), Fe = "-ms-", qn = "-moz-", me = "-webkit-", gi = "comm", yi = "rule", bi = "decl", vf = "@import", sl = "@keyframes", gf = "@layer", yf = Math.abs, so = String.fromCharCode, bf = Object.assign;
function xf(e, t) {
  return Ve(e, 0) ^ 45 ? (((t << 2 ^ Ve(e, 0)) << 2 ^ Ve(e, 1)) << 2 ^ Ve(e, 2)) << 2 ^ Ve(e, 3) : 0;
}
function al(e) {
  return e.trim();
}
function Ef(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ve(e, t, r) {
  return e.replace(t, r);
}
function Qo(e, t) {
  return e.indexOf(t);
}
function Ve(e, t) {
  return e.charCodeAt(t) | 0;
}
function tn(e, t, r) {
  return e.slice(t, r);
}
function xt(e) {
  return e.length;
}
function xi(e) {
  return e.length;
}
function Cn(e, t) {
  return t.push(e), e;
}
function Of(e, t) {
  return e.map(t).join("");
}
var ao = 1, wr = 1, ll = 0, Ke = 0, $e = 0, Mr = "";
function lo(e, t, r, n, o, i, a) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: ao, column: wr, length: a, return: "" };
}
function Wr(e, t) {
  return bf(lo("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Tf() {
  return $e;
}
function wf() {
  return $e = Ke > 0 ? Ve(Mr, --Ke) : 0, wr--, $e === 10 && (wr = 1, ao--), $e;
}
function tt() {
  return $e = Ke < ll ? Ve(Mr, Ke++) : 0, wr++, $e === 10 && (wr = 1, ao++), $e;
}
function Ot() {
  return Ve(Mr, Ke);
}
function In() {
  return Ke;
}
function fn(e, t) {
  return tn(Mr, e, t);
}
function rn(e) {
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
function cl(e) {
  return ao = wr = 1, ll = xt(Mr = e), Ke = 0, [];
}
function ul(e) {
  return Mr = "", e;
}
function Dn(e) {
  return al(fn(Ke - 1, ei(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Sf(e) {
  for (; ($e = Ot()) && $e < 33; )
    tt();
  return rn(e) > 2 || rn($e) > 3 ? "" : " ";
}
function Rf(e, t) {
  for (; --t && tt() && !($e < 48 || $e > 102 || $e > 57 && $e < 65 || $e > 70 && $e < 97); )
    ;
  return fn(e, In() + (t < 6 && Ot() == 32 && tt() == 32));
}
function ei(e) {
  for (; tt(); )
    switch ($e) {
      case e:
        return Ke;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ei($e);
        break;
      case 40:
        e === 41 && ei(e);
        break;
      case 92:
        tt();
        break;
    }
  return Ke;
}
function Cf(e, t) {
  for (; tt() && e + $e !== 57; )
    if (e + $e === 84 && Ot() === 47)
      break;
  return "/*" + fn(t, Ke - 1) + "*" + so(e === 47 ? e : tt());
}
function Pf(e) {
  for (; !rn(Ot()); )
    tt();
  return fn(e, Ke);
}
function _f(e) {
  return ul(Ln("", null, null, null, [""], e = cl(e), 0, [0], e));
}
function Ln(e, t, r, n, o, i, a, l, c) {
  for (var u = 0, f = 0, d = a, p = 0, v = 0, g = 0, h = 1, m = 1, O = 1, C = 0, w = "", T = o, x = i, S = n, R = w; m; )
    switch (g = C, C = tt()) {
      case 40:
        if (g != 108 && Ve(R, d - 1) == 58) {
          Qo(R += ve(Dn(C), "&", "&\f"), "&\f") != -1 && (O = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        R += Dn(C);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        R += Sf(g);
        break;
      case 92:
        R += Rf(In() - 1, 7);
        continue;
      case 47:
        switch (Ot()) {
          case 42:
          case 47:
            Cn($f(Cf(tt(), In()), t, r), c);
            break;
          default:
            R += "/";
        }
        break;
      case 123 * h:
        l[u++] = xt(R) * O;
      case 125 * h:
      case 59:
      case 0:
        switch (C) {
          case 0:
          case 125:
            m = 0;
          case 59 + f:
            O == -1 && (R = ve(R, /\f/g, "")), v > 0 && xt(R) - d && Cn(v > 32 ? _s(R + ";", n, r, d - 1) : _s(ve(R, " ", "") + ";", n, r, d - 2), c);
            break;
          case 59:
            R += ";";
          default:
            if (Cn(S = Ps(R, t, r, u, f, o, l, w, T = [], x = [], d), i), C === 123)
              if (f === 0)
                Ln(R, t, S, S, T, i, d, l, x);
              else
                switch (p === 99 && Ve(R, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ln(e, S, S, n && Cn(Ps(e, S, S, 0, 0, o, l, w, o, T = [], d), x), o, x, d, l, n ? T : x);
                    break;
                  default:
                    Ln(R, S, S, S, [""], x, 0, l, x);
                }
        }
        u = f = v = 0, h = O = 1, w = R = "", d = a;
        break;
      case 58:
        d = 1 + xt(R), v = g;
      default:
        if (h < 1) {
          if (C == 123)
            --h;
          else if (C == 125 && h++ == 0 && wf() == 125)
            continue;
        }
        switch (R += so(C), C * h) {
          case 38:
            O = f > 0 ? 1 : (R += "\f", -1);
            break;
          case 44:
            l[u++] = (xt(R) - 1) * O, O = 1;
            break;
          case 64:
            Ot() === 45 && (R += Dn(tt())), p = Ot(), f = d = xt(w = R += Pf(In())), C++;
            break;
          case 45:
            g === 45 && xt(R) == 2 && (h = 0);
        }
    }
  return i;
}
function Ps(e, t, r, n, o, i, a, l, c, u, f) {
  for (var d = o - 1, p = o === 0 ? i : [""], v = xi(p), g = 0, h = 0, m = 0; g < n; ++g)
    for (var O = 0, C = tn(e, d + 1, d = yf(h = a[g])), w = e; O < v; ++O)
      (w = al(h > 0 ? p[O] + " " + C : ve(C, /&\f/g, p[O]))) && (c[m++] = w);
  return lo(e, t, r, o === 0 ? yi : l, c, u, f);
}
function $f(e, t, r) {
  return lo(e, t, r, gi, so(Tf()), tn(e, 2, -2), 0);
}
function _s(e, t, r, n) {
  return lo(e, t, r, bi, tn(e, 0, n), tn(e, n + 1, -1), n);
}
function Or(e, t) {
  for (var r = "", n = xi(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function Nf(e, t, r, n) {
  switch (e.type) {
    case gf:
      if (e.children.length)
        break;
    case vf:
    case bi:
      return e.return = e.return || e.value;
    case gi:
      return "";
    case sl:
      return e.return = e.value + "{" + Or(e.children, n) + "}";
    case yi:
      e.value = e.props.join(",");
  }
  return xt(r = Or(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function kf(e) {
  var t = xi(e);
  return function(r, n, o, i) {
    for (var a = "", l = 0; l < t; l++)
      a += e[l](r, n, o, i) || "";
    return a;
  };
}
function jf(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Mf = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = Ot(), o === 38 && i === 12 && (r[n] = 1), !rn(i); )
    tt();
  return fn(t, Ke);
}, Af = function(t, r) {
  var n = -1, o = 44;
  do
    switch (rn(o)) {
      case 0:
        o === 38 && Ot() === 12 && (r[n] = 1), t[n] += Mf(Ke - 1, r, n);
        break;
      case 2:
        t[n] += Dn(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = Ot() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += so(o);
    }
  while (o = tt());
  return t;
}, If = function(t, r) {
  return ul(Af(cl(t), r));
}, $s = /* @__PURE__ */ new WeakMap(), Df = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !$s.get(n)) && !o) {
      $s.set(t, !0);
      for (var i = [], a = If(r, i), l = n.props, c = 0, u = 0; c < a.length; c++)
        for (var f = 0; f < l.length; f++, u++)
          t.props[u] = i[c] ? a[c].replace(/&\f/g, l[f]) : l[f] + " " + a[c];
    }
  }
}, Lf = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
}, Vf = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", zf = function(t) {
  return t.type === "comm" && t.children.indexOf(Vf) > -1;
}, Ff = function(t) {
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
            if (zf(u))
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
}, fl = function(t) {
  return t.type.charCodeAt(1) === 105 && t.type.charCodeAt(0) === 64;
}, Wf = function(t, r) {
  for (var n = t - 1; n >= 0; n--)
    if (!fl(r[n]))
      return !0;
  return !1;
}, Ns = function(t) {
  t.type = "", t.value = "", t.return = "", t.children = "", t.props = "";
}, Bf = function(t, r, n) {
  fl(t) && (t.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), Ns(t)) : Wf(r, n) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), Ns(t)));
};
function dl(e, t) {
  switch (xf(e, t)) {
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
      return me + e + qn + e + Fe + e + e;
    case 6828:
    case 4268:
      return me + e + Fe + e + e;
    case 6165:
      return me + e + Fe + "flex-" + e + e;
    case 5187:
      return me + e + ve(e, /(\w+).+(:[^]+)/, me + "box-$1$2" + Fe + "flex-$1$2") + e;
    case 5443:
      return me + e + Fe + "flex-item-" + ve(e, /flex-|-self/, "") + e;
    case 4675:
      return me + e + Fe + "flex-line-pack" + ve(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return me + e + Fe + ve(e, "shrink", "negative") + e;
    case 5292:
      return me + e + Fe + ve(e, "basis", "preferred-size") + e;
    case 6060:
      return me + "box-" + ve(e, "-grow", "") + me + e + Fe + ve(e, "grow", "positive") + e;
    case 4554:
      return me + ve(e, /([^-])(transform)/g, "$1" + me + "$2") + e;
    case 6187:
      return ve(ve(ve(e, /(zoom-|grab)/, me + "$1"), /(image-set)/, me + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ve(e, /(image-set\([^]*)/, me + "$1$`$1");
    case 4968:
      return ve(ve(e, /(.+:)(flex-)?(.*)/, me + "box-pack:$3" + Fe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + me + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ve(e, /(.+)-inline(.+)/, me + "$1$2") + e;
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
      if (xt(e) - 1 - t > 6)
        switch (Ve(e, t + 1)) {
          case 109:
            if (Ve(e, t + 4) !== 45)
              break;
          case 102:
            return ve(e, /(.+:)(.+)-([^]+)/, "$1" + me + "$2-$3$1" + qn + (Ve(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Qo(e, "stretch") ? dl(ve(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (Ve(e, t + 1) !== 115)
        break;
    case 6444:
      switch (Ve(e, xt(e) - 3 - (~Qo(e, "!important") && 10))) {
        case 107:
          return ve(e, ":", ":" + me) + e;
        case 101:
          return ve(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + me + (Ve(e, 14) === 45 ? "inline-" : "") + "box$3$1" + me + "$2$3$1" + Fe + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Ve(e, t + 11)) {
        case 114:
          return me + e + Fe + ve(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return me + e + Fe + ve(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return me + e + Fe + ve(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return me + e + Fe + e + e;
  }
  return e;
}
var Uf = function(t, r, n, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case bi:
        t.return = dl(t.value, t.length);
        break;
      case sl:
        return Or([Wr(t, {
          value: ve(t.value, "@", "@" + me)
        })], o);
      case yi:
        if (t.length)
          return Of(t.props, function(i) {
            switch (Ef(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Or([Wr(t, {
                  props: [ve(i, /:(read-\w+)/, ":" + qn + "$1")]
                })], o);
              case "::placeholder":
                return Or([Wr(t, {
                  props: [ve(i, /:(plac\w+)/, ":" + me + "input-$1")]
                }), Wr(t, {
                  props: [ve(i, /:(plac\w+)/, ":" + qn + "$1")]
                }), Wr(t, {
                  props: [ve(i, /:(plac\w+)/, Fe + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, qf = [Uf], pl = function(t) {
  var r = t.key;
  if (process.env.NODE_ENV !== "production" && !r)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(h) {
      var m = h.getAttribute("data-emotion");
      m.indexOf(" ") !== -1 && (document.head.appendChild(h), h.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || qf;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(r))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + r + '" was passed');
  var i = {}, a, l = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(h) {
      for (var m = h.getAttribute("data-emotion").split(" "), O = 1; O < m.length; O++)
        i[m[O]] = !0;
      l.push(h);
    }
  );
  var c, u = [Df, Lf];
  process.env.NODE_ENV !== "production" && u.push(Ff({
    get compat() {
      return g.compat;
    }
  }), Bf);
  {
    var f, d = [Nf, process.env.NODE_ENV !== "production" ? function(h) {
      h.root || (h.return ? f.insert(h.return) : h.value && h.type !== gi && f.insert(h.value + "{}"));
    } : jf(function(h) {
      f.insert(h);
    })], p = kf(u.concat(o, d)), v = function(m) {
      return Or(_f(m), p);
    };
    c = function(m, O, C, w) {
      f = C, process.env.NODE_ENV !== "production" && O.map !== void 0 && (f = {
        insert: function(x) {
          C.insert(x + O.map);
        }
      }), v(m ? m + "{" + O.styles + "}" : O.styles), w && (g.inserted[O.name] = !0);
    };
  }
  var g = {
    key: r,
    sheet: new mf({
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
  return g.sheet.hydrate(l), g;
}, hl = fi(), Yf = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Hf = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, ml = {};
ml[hl.ForwardRef] = Yf;
ml[hl.Memo] = Hf;
var Gf = !0;
function Ei(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : n += o + " ";
  }), n;
}
var co = function(t, r, n) {
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
  Gf === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, uo = function(t, r, n) {
  co(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function Kf(e) {
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
var Xf = {
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
}, ks = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Jf = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", Zf = /[A-Z]|^ms/g, vl = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Oi = function(t) {
  return t.charCodeAt(1) === 45;
}, js = function(t) {
  return t != null && typeof t != "boolean";
}, zo = /* @__PURE__ */ il(function(e) {
  return Oi(e) ? e : e.replace(Zf, "-$&").toLowerCase();
}), Yn = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(vl, function(n, o, i) {
          return vt = {
            name: o,
            styles: i,
            next: vt
          }, o;
        });
  }
  return Xf[t] !== 1 && !Oi(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
if (process.env.NODE_ENV !== "production") {
  var Qf = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, ed = ["normal", "none", "initial", "inherit", "unset"], td = Yn, rd = /^-ms-/, nd = /-(.)/g, Ms = {};
  Yn = function(t, r) {
    if (t === "content" && (typeof r != "string" || ed.indexOf(r) === -1 && !Qf.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + r + "\"'`");
    var n = td(t, r);
    return n !== "" && !Oi(t) && t.indexOf("-") !== -1 && Ms[t] === void 0 && (Ms[t] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + t.replace(rd, "ms-").replace(nd, function(o, i) {
      return i.toUpperCase();
    }) + "?")), n;
  };
}
var gl = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function nn(e, t, r) {
  if (r == null)
    return "";
  if (r.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && r.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(gl);
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
      return od(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var i = vt, a = r(e);
        return vt = i, nn(e, t, a);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var l = [], c = r.replace(vl, function(f, d, p) {
          var v = "animation" + l.length;
          return l.push("const " + v + " = keyframes`" + p.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + v + "}";
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
function od(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += nn(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != "object")
        t != null && t[a] !== void 0 ? n += i + "{" + t[a] + "}" : js(a) && (n += zo(i) + ":" + Yn(i, a) + ";");
      else {
        if (i === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(gl);
        if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
          for (var l = 0; l < a.length; l++)
            js(a[l]) && (n += zo(i) + ":" + Yn(i, a[l]) + ";");
        else {
          var c = nn(e, t, a);
          switch (i) {
            case "animation":
            case "animationName": {
              n += zo(i) + ":" + c + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && i === "undefined" && console.error(Jf), n += i + "{" + c + "}";
          }
        }
      }
    }
  return n;
}
var As = /label:\s*([^\s;\n{]+)\s*(;|$)/g, yl;
process.env.NODE_ENV !== "production" && (yl = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var vt, Sr = function(t, r, n) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, i = "";
  vt = void 0;
  var a = t[0];
  a == null || a.raw === void 0 ? (o = !1, i += nn(n, r, a)) : (process.env.NODE_ENV !== "production" && a[0] === void 0 && console.error(ks), i += a[0]);
  for (var l = 1; l < t.length; l++)
    i += nn(n, r, t[l]), o && (process.env.NODE_ENV !== "production" && a[l] === void 0 && console.error(ks), i += a[l]);
  var c;
  process.env.NODE_ENV !== "production" && (i = i.replace(yl, function(p) {
    return c = p, "";
  })), As.lastIndex = 0;
  for (var u = "", f; (f = As.exec(i)) !== null; )
    u += "-" + // $FlowFixMe we know it's not null
    f[1];
  var d = Kf(i) + u;
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
}, id = function(t) {
  return t();
}, bl = b.useInsertionEffect ? b.useInsertionEffect : !1, Ti = bl || id, Is = bl || b.useLayoutEffect, sd = {}.hasOwnProperty, wi = /* @__PURE__ */ b.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ pl({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (wi.displayName = "EmotionCacheContext");
var ad = wi.Provider, fo = function(t) {
  return /* @__PURE__ */ Yc(function(r, n) {
    var o = Hc(wi);
    return t(r, o, n);
  });
}, Bt = /* @__PURE__ */ b.createContext({});
process.env.NODE_ENV !== "production" && (Bt.displayName = "EmotionThemeContext");
var Ds = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Ls = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", ld = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return co(r, n, o), Ti(function() {
    return uo(r, n, o);
  }), null;
}, cd = /* @__PURE__ */ fo(function(e, t, r) {
  var n = e.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var o = e[Ds], i = [n], a = "";
  typeof e.className == "string" ? a = Ei(t.registered, i, e.className) : e.className != null && (a = e.className + " ");
  var l = Sr(i, void 0, b.useContext(Bt));
  if (process.env.NODE_ENV !== "production" && l.name.indexOf("-") === -1) {
    var c = e[Ls];
    c && (l = Sr([l, "label:" + c + ";"]));
  }
  a += t.key + "-" + l.name;
  var u = {};
  for (var f in e)
    sd.call(e, f) && f !== "css" && f !== Ds && (process.env.NODE_ENV === "production" || f !== Ls) && (u[f] = e[f]);
  return u.ref = r, u.className = a, /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(ld, {
    cache: t,
    serialized: l,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ b.createElement(o, u));
});
process.env.NODE_ENV !== "production" && (cd.displayName = "EmotionCssPropInternal");
ol();
var ud = {
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
}, Vs = !1, xl = /* @__PURE__ */ fo(function(e, t) {
  process.env.NODE_ENV !== "production" && !Vs && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), Vs = !0);
  var r = e.styles, n = Sr([r], void 0, b.useContext(Bt)), o = b.useRef();
  return Is(function() {
    var i = t.key + "-global", a = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), l = !1, c = document.querySelector('style[data-emotion="' + i + " " + n.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), c !== null && (l = !0, c.setAttribute("data-emotion", i), a.hydrate([c])), o.current = [a, l], function() {
      a.flush();
    };
  }, [t]), Is(function() {
    var i = o.current, a = i[0], l = i[1];
    if (l) {
      i[1] = !1;
      return;
    }
    if (n.next !== void 0 && uo(t, n.next, !0), a.tags.length) {
      var c = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = c, a.flush();
    }
    t.insert("", n, a, !1);
  }, [t, n.name]), null;
});
process.env.NODE_ENV !== "production" && (xl.displayName = "EmotionGlobal");
function El() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return Sr(t);
}
var po = function() {
  var t = El.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, fd = function e(t) {
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
function dd(e, t, r) {
  var n = [], o = Ei(e, n, r);
  return n.length < 2 ? r : o + t(n);
}
var pd = function(t) {
  var r = t.cache, n = t.serializedArr;
  return Ti(function() {
    for (var o = 0; o < n.length; o++)
      uo(r, n[o], !1);
  }), null;
}, hd = /* @__PURE__ */ fo(function(e, t) {
  var r = !1, n = [], o = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var u = arguments.length, f = new Array(u), d = 0; d < u; d++)
      f[d] = arguments[d];
    var p = Sr(f, t.registered);
    return n.push(p), co(t, p, !1), t.key + "-" + p.name;
  }, i = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var u = arguments.length, f = new Array(u), d = 0; d < u; d++)
      f[d] = arguments[d];
    return dd(t.registered, o, fd(f));
  }, a = {
    css: o,
    cx: i,
    theme: b.useContext(Bt)
  }, l = e.children(a);
  return r = !0, /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(pd, {
    cache: t,
    serializedArr: n
  }), l);
});
process.env.NODE_ENV !== "production" && (hd.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var zs = !0, md = typeof jest < "u" || typeof vi < "u";
  if (zs && !md) {
    var Fs = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : zs ? window : global
    ), Ws = "__EMOTION_REACT_" + ud.version.split(".")[0] + "__";
    Fs[Ws] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), Fs[Ws] = !0;
  }
}
var vd = df, gd = function(t) {
  return t !== "theme";
}, Bs = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? vd : gd;
}, Us = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, qs = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, yd = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return co(r, n, o), Ti(function() {
    return uo(r, n, o);
  }), null;
}, bd = function e(t, r) {
  if (process.env.NODE_ENV !== "production" && t === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, a;
  r !== void 0 && (i = r.label, a = r.target);
  var l = Us(t, r, n), c = l || Bs(o), u = !c("as");
  return function() {
    var f = arguments, d = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && d.push("label:" + i + ";"), f[0] == null || f[0].raw === void 0)
      d.push.apply(d, f);
    else {
      process.env.NODE_ENV !== "production" && f[0][0] === void 0 && console.error(qs), d.push(f[0][0]);
      for (var p = f.length, v = 1; v < p; v++)
        process.env.NODE_ENV !== "production" && f[0][v] === void 0 && console.error(qs), d.push(f[v], f[0][v]);
    }
    var g = fo(function(h, m, O) {
      var C = u && h.as || o, w = "", T = [], x = h;
      if (h.theme == null) {
        x = {};
        for (var S in h)
          x[S] = h[S];
        x.theme = b.useContext(Bt);
      }
      typeof h.className == "string" ? w = Ei(m.registered, T, h.className) : h.className != null && (w = h.className + " ");
      var R = Sr(d.concat(T), m.registered, x);
      w += m.key + "-" + R.name, a !== void 0 && (w += " " + a);
      var A = u && l === void 0 ? Bs(C) : c, D = {};
      for (var N in h)
        u && N === "as" || // $FlowFixMe
        A(N) && (D[N] = h[N]);
      return D.className = w, D.ref = O, /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(yd, {
        cache: m,
        serialized: R,
        isStringTag: typeof C == "string"
      }), /* @__PURE__ */ b.createElement(C, D));
    });
    return g.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", g.defaultProps = t.defaultProps, g.__emotion_real = g, g.__emotion_base = o, g.__emotion_styles = d, g.__emotion_forwardProp = l, Object.defineProperty(g, "toString", {
      value: function() {
        return a === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + a;
      }
    }), g.withComponent = function(h, m) {
      return e(h, E({}, r, m, {
        shouldForwardProp: Us(g, m, !0)
      })).apply(void 0, d);
    }, g;
  };
}, xd = [
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
], ti = bd.bind();
xd.forEach(function(e) {
  ti[e] = ti(e);
});
let ri;
typeof document == "object" && (ri = pl({
  key: "css",
  prepend: !0
}));
function Ol(e) {
  const {
    injectFirst: t,
    children: r
  } = e;
  return t && ri ? /* @__PURE__ */ P.jsx(ad, {
    value: ri,
    children: r
  }) : r;
}
process.env.NODE_ENV !== "production" && (Ol.propTypes = {
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
function Ed(e) {
  return e == null || Object.keys(e).length === 0;
}
function Tl(e) {
  const {
    styles: t,
    defaultTheme: r = {}
  } = e, n = typeof t == "function" ? (o) => t(Ed(o) ? r : o) : t;
  return /* @__PURE__ */ P.jsx(xl, {
    styles: n
  });
}
process.env.NODE_ENV !== "production" && (Tl.propTypes = {
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
function wl(e, t) {
  const r = ti(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
const Od = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, Td = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GlobalStyles: Tl,
  StyledEngineProvider: Ol,
  ThemeContext: Bt,
  css: El,
  default: wl,
  internal_processStyles: Od,
  keyframes: po
}, Symbol.toStringTag, { value: "Module" })), Sl = /* @__PURE__ */ jt(Td), wd = /* @__PURE__ */ jt(fu), Sd = /* @__PURE__ */ jt(Tu), Rd = /* @__PURE__ */ jt(Eu), Cd = ["values", "unit", "step"], Pd = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => E({}, r, {
    [n.key]: n.val
  }), {});
};
function Rl(e) {
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
  } = e, o = ae(e, Cd), i = Pd(t), a = Object.keys(i);
  function l(p) {
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${r})`;
  }
  function c(p) {
    return `@media (max-width:${(typeof t[p] == "number" ? t[p] : p) - n / 100}${r})`;
  }
  function u(p, v) {
    const g = a.indexOf(v);
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${r}) and (max-width:${(g !== -1 && typeof t[a[g]] == "number" ? t[a[g]] : v) - n / 100}${r})`;
  }
  function f(p) {
    return a.indexOf(p) + 1 < a.length ? u(p, a[a.indexOf(p) + 1]) : l(p);
  }
  function d(p) {
    const v = a.indexOf(p);
    return v === 0 ? l(a[1]) : v === a.length - 1 ? c(a[v]) : u(p, a[a.indexOf(p) + 1]).replace("@media", "@media not all and");
  }
  return E({
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
const _d = {
  borderRadius: 4
}, $d = _d, Nd = process.env.NODE_ENV !== "production" ? s.oneOfType([s.number, s.string, s.object, s.array]) : {}, Ut = Nd;
function Xr(e, t) {
  return t ? Et(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Si = {
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
}, Ys = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Si[e]}px)`
};
function Nt(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || Ys;
    return t.reduce((a, l, c) => (a[i.up(i.keys[c])] = r(t[c]), a), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || Ys;
    return Object.keys(t).reduce((a, l) => {
      if (Object.keys(i.values || Si).indexOf(l) !== -1) {
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
function kd(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function jd(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function ho(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function Hn(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = ho(e, r) || n, t && (o = t(o, n, e)), o;
}
function Ce(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (a) => {
    if (a[t] == null)
      return null;
    const l = a[t], c = a.theme, u = ho(c, n) || {};
    return Nt(a, l, (d) => {
      let p = Hn(u, o, d);
      return d === p && typeof d == "string" && (p = Hn(u, o, `${t}${d === "default" ? "" : ne(d)}`, d)), r === !1 ? p : {
        [r]: p
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Ut
  } : {}, i.filterProps = [t], i;
}
function Md(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const Ad = {
  m: "margin",
  p: "padding"
}, Id = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Hs = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Dd = Md((e) => {
  if (e.length > 2)
    if (Hs[e])
      e = Hs[e];
    else
      return [e];
  const [t, r] = e.split(""), n = Ad[t], o = Id[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), mo = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], vo = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Ld = [...mo, ...vo];
function dn(e, t, r, n) {
  var o;
  const i = (o = ho(e, t, !1)) != null ? o : r;
  return typeof i == "number" ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && typeof a != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${a}.`), i * a) : Array.isArray(i) ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > i.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${a} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), i[a]) : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Cl(e) {
  return dn(e, "spacing", 8, "spacing");
}
function pn(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const r = Math.abs(t), n = e(r);
  return t >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function Vd(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = pn(t, r), n), {});
}
function zd(e, t, r, n) {
  if (t.indexOf(r) === -1)
    return null;
  const o = Dd(r), i = Vd(o, n), a = e[r];
  return Nt(e, a, i);
}
function Pl(e, t) {
  const r = Cl(e.theme);
  return Object.keys(e).map((n) => zd(e, t, n, r)).reduce(Xr, {});
}
function Se(e) {
  return Pl(e, mo);
}
Se.propTypes = process.env.NODE_ENV !== "production" ? mo.reduce((e, t) => (e[t] = Ut, e), {}) : {};
Se.filterProps = mo;
function Re(e) {
  return Pl(e, vo);
}
Re.propTypes = process.env.NODE_ENV !== "production" ? vo.reduce((e, t) => (e[t] = Ut, e), {}) : {};
Re.filterProps = vo;
process.env.NODE_ENV !== "production" && Ld.reduce((e, t) => (e[t] = Ut, e), {});
function Fd(e = 8) {
  if (e.mui)
    return e;
  const t = Cl({
    spacing: e
  }), r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const a = t(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return r.mui = !0, r;
}
function go(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? Xr(o, t[i](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function ct(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function ht(e, t) {
  return Ce({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Wd = ht("border", ct), Bd = ht("borderTop", ct), Ud = ht("borderRight", ct), qd = ht("borderBottom", ct), Yd = ht("borderLeft", ct), Hd = ht("borderColor"), Gd = ht("borderTopColor"), Kd = ht("borderRightColor"), Xd = ht("borderBottomColor"), Jd = ht("borderLeftColor"), Zd = ht("outline", ct), Qd = ht("outlineColor"), yo = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = dn(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: pn(t, n)
    });
    return Nt(e, e.borderRadius, r);
  }
  return null;
};
yo.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Ut
} : {};
yo.filterProps = ["borderRadius"];
go(Wd, Bd, Ud, qd, Yd, Hd, Gd, Kd, Xd, Jd, yo, Zd, Qd);
const bo = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = dn(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: pn(t, n)
    });
    return Nt(e, e.gap, r);
  }
  return null;
};
bo.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Ut
} : {};
bo.filterProps = ["gap"];
const xo = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = dn(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: pn(t, n)
    });
    return Nt(e, e.columnGap, r);
  }
  return null;
};
xo.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Ut
} : {};
xo.filterProps = ["columnGap"];
const Eo = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = dn(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: pn(t, n)
    });
    return Nt(e, e.rowGap, r);
  }
  return null;
};
Eo.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Ut
} : {};
Eo.filterProps = ["rowGap"];
const ep = Ce({
  prop: "gridColumn"
}), tp = Ce({
  prop: "gridRow"
}), rp = Ce({
  prop: "gridAutoFlow"
}), np = Ce({
  prop: "gridAutoColumns"
}), op = Ce({
  prop: "gridAutoRows"
}), ip = Ce({
  prop: "gridTemplateColumns"
}), sp = Ce({
  prop: "gridTemplateRows"
}), ap = Ce({
  prop: "gridTemplateAreas"
}), lp = Ce({
  prop: "gridArea"
});
go(bo, xo, Eo, ep, tp, rp, np, op, ip, sp, ap, lp);
function Tr(e, t) {
  return t === "grey" ? t : e;
}
const cp = Ce({
  prop: "color",
  themeKey: "palette",
  transform: Tr
}), up = Ce({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Tr
}), fp = Ce({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Tr
});
go(cp, up, fp);
function Qe(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const dp = Ce({
  prop: "width",
  transform: Qe
}), Ri = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var n, o;
      const i = ((n = e.theme) == null || (n = n.breakpoints) == null || (n = n.values) == null ? void 0 : n[r]) || Si[r];
      return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: Qe(r)
      };
    };
    return Nt(e, e.maxWidth, t);
  }
  return null;
};
Ri.filterProps = ["maxWidth"];
const pp = Ce({
  prop: "minWidth",
  transform: Qe
}), hp = Ce({
  prop: "height",
  transform: Qe
}), mp = Ce({
  prop: "maxHeight",
  transform: Qe
}), vp = Ce({
  prop: "minHeight",
  transform: Qe
});
Ce({
  prop: "size",
  cssProperty: "width",
  transform: Qe
});
Ce({
  prop: "size",
  cssProperty: "height",
  transform: Qe
});
const gp = Ce({
  prop: "boxSizing"
});
go(dp, Ri, pp, hp, mp, vp, gp);
const yp = {
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
    style: yo
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Tr
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Tr
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Tr
  },
  // spacing
  p: {
    style: Re
  },
  pt: {
    style: Re
  },
  pr: {
    style: Re
  },
  pb: {
    style: Re
  },
  pl: {
    style: Re
  },
  px: {
    style: Re
  },
  py: {
    style: Re
  },
  padding: {
    style: Re
  },
  paddingTop: {
    style: Re
  },
  paddingRight: {
    style: Re
  },
  paddingBottom: {
    style: Re
  },
  paddingLeft: {
    style: Re
  },
  paddingX: {
    style: Re
  },
  paddingY: {
    style: Re
  },
  paddingInline: {
    style: Re
  },
  paddingInlineStart: {
    style: Re
  },
  paddingInlineEnd: {
    style: Re
  },
  paddingBlock: {
    style: Re
  },
  paddingBlockStart: {
    style: Re
  },
  paddingBlockEnd: {
    style: Re
  },
  m: {
    style: Se
  },
  mt: {
    style: Se
  },
  mr: {
    style: Se
  },
  mb: {
    style: Se
  },
  ml: {
    style: Se
  },
  mx: {
    style: Se
  },
  my: {
    style: Se
  },
  margin: {
    style: Se
  },
  marginTop: {
    style: Se
  },
  marginRight: {
    style: Se
  },
  marginBottom: {
    style: Se
  },
  marginLeft: {
    style: Se
  },
  marginX: {
    style: Se
  },
  marginY: {
    style: Se
  },
  marginInline: {
    style: Se
  },
  marginInlineStart: {
    style: Se
  },
  marginInlineEnd: {
    style: Se
  },
  marginBlock: {
    style: Se
  },
  marginBlockStart: {
    style: Se
  },
  marginBlockEnd: {
    style: Se
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
    style: bo
  },
  rowGap: {
    style: Eo
  },
  columnGap: {
    style: xo
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
    transform: Qe
  },
  maxWidth: {
    style: Ri
  },
  minWidth: {
    transform: Qe
  },
  height: {
    transform: Qe
  },
  maxHeight: {
    transform: Qe
  },
  minHeight: {
    transform: Qe
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
}, hn = yp;
function bp(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function xp(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function _l() {
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
    const p = ho(o, u) || {};
    return d ? d(a) : Nt(a, n, (g) => {
      let h = Hn(p, f, g);
      return g === h && typeof g == "string" && (h = Hn(p, f, `${r}${g === "default" ? "" : ne(g)}`, g)), c === !1 ? h : {
        [c]: h
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
    const a = (n = i.unstable_sxConfig) != null ? n : hn;
    function l(c) {
      let u = c;
      if (typeof c == "function")
        u = c(i);
      else if (typeof c != "object")
        return c;
      if (!u)
        return null;
      const f = kd(i.breakpoints), d = Object.keys(f);
      let p = f;
      return Object.keys(u).forEach((v) => {
        const g = xp(u[v], i);
        if (g != null)
          if (typeof g == "object")
            if (a[v])
              p = Xr(p, e(v, g, i, a));
            else {
              const h = Nt({
                theme: i
              }, g, (m) => ({
                [v]: m
              }));
              bp(h, g) ? p[v] = t({
                sx: g,
                theme: i
              }) : p = Xr(p, h);
            }
          else
            p = Xr(p, e(v, g, i, a));
      }), jd(d, p);
    }
    return Array.isArray(o) ? o.map(l) : l(o);
  }
  return t;
}
const mn = _l();
mn.filterProps = ["sx"];
function $l(e, t) {
  const r = this;
  return r.vars && typeof r.getColorSchemeSelector == "function" ? {
    [r.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : r.palette.mode === e ? t : {};
}
const Ep = ["breakpoints", "palette", "spacing", "shape"];
function Ci(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {}
  } = e, a = ae(e, Ep), l = Rl(r), c = Fd(o);
  let u = Et({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: E({
      mode: "light"
    }, n),
    spacing: c,
    shape: E({}, $d, i)
  }, a);
  return u.applyStyles = $l, u = t.reduce((f, d) => Et(f, d), u), u.unstable_sxConfig = E({}, hn, a == null ? void 0 : a.unstable_sxConfig), u.unstable_sx = function(d) {
    return mn({
      sx: d,
      theme: this
    });
  }, u;
}
const Op = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ci,
  private_createBreakpoints: Rl,
  unstable_applyStyles: $l
}, Symbol.toStringTag, { value: "Module" })), Tp = /* @__PURE__ */ jt(Op), wp = ["sx"], Sp = (e) => {
  var t, r;
  const n = {
    systemProps: {},
    otherProps: {}
  }, o = (t = e == null || (r = e.theme) == null ? void 0 : r.unstable_sxConfig) != null ? t : hn;
  return Object.keys(e).forEach((i) => {
    o[i] ? n.systemProps[i] = e[i] : n.otherProps[i] = e[i];
  }), n;
};
function Pi(e) {
  const {
    sx: t
  } = e, r = ae(e, wp), {
    systemProps: n,
    otherProps: o
  } = Sp(r);
  let i;
  return Array.isArray(t) ? i = [n, ...t] : typeof t == "function" ? i = (...a) => {
    const l = t(...a);
    return zt(l) ? E({}, n, l) : n;
  } : i = E({}, n, t), E({}, o, {
    sx: i
  });
}
const Rp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mn,
  extendSxProp: Pi,
  unstable_createStyleFunctionSx: _l,
  unstable_defaultSxConfig: hn
}, Symbol.toStringTag, { value: "Module" })), Cp = /* @__PURE__ */ jt(Rp);
var Ar = jr;
Object.defineProperty(un, "__esModule", {
  value: !0
});
var Pp = un.default = Wp;
un.shouldForwardProp = Vn;
un.systemDefaultTheme = void 0;
var at = Ar(ol()), ni = Ar(uf()), Gs = Dp(Sl), _p = wd, $p = Ar(Sd), Np = Ar(Rd), kp = Ar(Tp), jp = Ar(Cp);
const Mp = ["ownerState"], Ap = ["variants"], Ip = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function Nl(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (Nl = function(n) {
    return n ? r : t;
  })(e);
}
function Dp(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = Nl(t);
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
function Lp(e) {
  return Object.keys(e).length === 0;
}
function Vp(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Vn(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const zp = un.systemDefaultTheme = (0, kp.default)(), Ks = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Pn({
  defaultTheme: e,
  theme: t,
  themeId: r
}) {
  return Lp(t) ? e : t[r] || t;
}
function Fp(e) {
  return e ? (t, r) => r[e] : null;
}
function zn(e, t) {
  let {
    ownerState: r
  } = t, n = (0, ni.default)(t, Mp);
  const o = typeof e == "function" ? e((0, at.default)({
    ownerState: r
  }, n)) : e;
  if (Array.isArray(o))
    return o.flatMap((i) => zn(i, (0, at.default)({
      ownerState: r
    }, n)));
  if (o && typeof o == "object" && Array.isArray(o.variants)) {
    const {
      variants: i = []
    } = o;
    let l = (0, ni.default)(o, Ap);
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
function Wp(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = zp,
    rootShouldForwardProp: n = Vn,
    slotShouldForwardProp: o = Vn
  } = e, i = (a) => (0, jp.default)((0, at.default)({}, a, {
    theme: Pn((0, at.default)({}, a, {
      defaultTheme: r,
      themeId: t
    }))
  }));
  return i.__mui_systemSx = !0, (a, l = {}) => {
    (0, Gs.internal_processStyles)(a, (x) => x.filter((S) => !(S != null && S.__mui_systemSx)));
    const {
      name: c,
      slot: u,
      skipVariantsResolver: f,
      skipSx: d,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: p = Fp(Ks(u))
    } = l, v = (0, ni.default)(l, Ip), g = f !== void 0 ? f : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), h = d || !1;
    let m;
    process.env.NODE_ENV !== "production" && c && (m = `${c}-${Ks(u || "Root")}`);
    let O = Vn;
    u === "Root" || u === "root" ? O = n : u ? O = o : Vp(a) && (O = void 0);
    const C = (0, Gs.default)(a, (0, at.default)({
      shouldForwardProp: O,
      label: m
    }, v)), w = (x) => typeof x == "function" && x.__emotion_real !== x || (0, _p.isPlainObject)(x) ? (S) => zn(x, (0, at.default)({}, S, {
      theme: Pn({
        theme: S.theme,
        defaultTheme: r,
        themeId: t
      })
    })) : x, T = (x, ...S) => {
      let R = w(x);
      const A = S ? S.map(w) : [];
      c && p && A.push((L) => {
        const Y = Pn((0, at.default)({}, L, {
          defaultTheme: r,
          themeId: t
        }));
        if (!Y.components || !Y.components[c] || !Y.components[c].styleOverrides)
          return null;
        const F = Y.components[c].styleOverrides, I = {};
        return Object.entries(F).forEach(([B, M]) => {
          I[B] = zn(M, (0, at.default)({}, L, {
            theme: Y
          }));
        }), p(L, I);
      }), c && !g && A.push((L) => {
        var Y;
        const F = Pn((0, at.default)({}, L, {
          defaultTheme: r,
          themeId: t
        })), I = F == null || (Y = F.components) == null || (Y = Y[c]) == null ? void 0 : Y.variants;
        return zn({
          variants: I
        }, (0, at.default)({}, L, {
          theme: F
        }));
      }), h || A.push(i);
      const D = A.length - S.length;
      if (Array.isArray(x) && D > 0) {
        const L = new Array(D).fill("");
        R = [...x, ...L], R.raw = [...x.raw, ...L];
      }
      const N = C(R, ...A);
      if (process.env.NODE_ENV !== "production") {
        let L;
        c && (L = `${c}${(0, $p.default)(u || "")}`), L === void 0 && (L = `Styled(${(0, Np.default)(a)})`), N.displayName = L;
      }
      return a.muiName && (N.muiName = a.muiName), N;
    };
    return C.withConfig && (T.withConfig = C.withConfig), T;
  };
}
function Bp(e, t) {
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
var Pe = {};
const Up = /* @__PURE__ */ jt(vu), qp = /* @__PURE__ */ jt(Wu);
var kl = jr;
Object.defineProperty(Pe, "__esModule", {
  value: !0
});
var _e = Pe.alpha = Il;
Pe.blend = nh;
Pe.colorChannel = void 0;
var Yp = Pe.darken = $i;
Pe.decomposeColor = ft;
Pe.emphasize = Dl;
var Xs = Pe.getContrastRatio = Zp;
Pe.getLuminance = Gn;
Pe.hexToRgb = jl;
Pe.hslToRgb = Al;
var Hp = Pe.lighten = Ni;
Pe.private_safeAlpha = Qp;
Pe.private_safeColorChannel = void 0;
Pe.private_safeDarken = eh;
Pe.private_safeEmphasize = rh;
Pe.private_safeLighten = th;
Pe.recomposeColor = Ir;
Pe.rgbToHex = Jp;
var Js = kl(Up), Gp = kl(qp);
function _i(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), (0, Gp.default)(e, t, r);
}
function jl(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Kp(e) {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function ft(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return ft(jl(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(r) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : (0, Js.default)(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : (0, Js.default)(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const Ml = (e) => {
  const t = ft(e);
  return t.values.slice(0, 3).map((r, n) => t.type.indexOf("hsl") !== -1 && n !== 0 ? `${r}%` : r).join(" ");
};
Pe.colorChannel = Ml;
const Xp = (e, t) => {
  try {
    return Ml(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
Pe.private_safeColorChannel = Xp;
function Ir(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.indexOf("rgb") !== -1 ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.indexOf("color") !== -1 ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function Jp(e) {
  if (e.indexOf("#") === 0)
    return e;
  const {
    values: t
  } = ft(e);
  return `#${t.map((r, n) => Kp(n === 3 ? Math.round(255 * r) : r)).join("")}`;
}
function Al(e) {
  e = ft(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), a = (u, f = (u + r / 30) % 12) => o - i * Math.max(Math.min(f - 3, 9 - f, 1), -1);
  let l = "rgb";
  const c = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (l += "a", c.push(t[3])), Ir({
    type: l,
    values: c
  });
}
function Gn(e) {
  e = ft(e);
  let t = e.type === "hsl" || e.type === "hsla" ? ft(Al(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Zp(e, t) {
  const r = Gn(e), n = Gn(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function Il(e, t) {
  return e = ft(e), t = _i(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Ir(e);
}
function Qp(e, t, r) {
  try {
    return Il(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function $i(e, t) {
  if (e = ft(e), t = _i(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return Ir(e);
}
function eh(e, t, r) {
  try {
    return $i(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Ni(e, t) {
  if (e = ft(e), t = _i(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return Ir(e);
}
function th(e, t, r) {
  try {
    return Ni(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Dl(e, t = 0.15) {
  return Gn(e) > 0.5 ? $i(e, t) : Ni(e, t);
}
function rh(e, t, r) {
  try {
    return Dl(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function nh(e, t, r, n = 1) {
  const o = (c, u) => Math.round((c ** (1 / n) * (1 - r) + u ** (1 / n) * r) ** n), i = ft(e), a = ft(t), l = [o(i.values[0], a.values[0]), o(i.values[1], a.values[1]), o(i.values[2], a.values[2])];
  return Ir({
    type: "rgb",
    values: l
  });
}
const oh = {
  black: "#000",
  white: "#fff"
}, on = oh, ih = {
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
}, sh = ih, ah = {
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
}, dr = ah, lh = {
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
}, pr = lh, ch = {
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
}, Br = ch, uh = {
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
}, hr = uh, fh = {
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
}, mr = fh, dh = {
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
}, vr = dh, ph = ["mode", "contrastThreshold", "tonalOffset"], Zs = {
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
    paper: on.white,
    default: on.white
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
}, Fo = {
  text: {
    primary: on.white,
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
    active: on.white,
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
function Qs(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = Hp(e.main, o) : t === "dark" && (e.dark = Yp(e.main, i)));
}
function hh(e = "light") {
  return e === "dark" ? {
    main: hr[200],
    light: hr[50],
    dark: hr[400]
  } : {
    main: hr[700],
    light: hr[400],
    dark: hr[800]
  };
}
function mh(e = "light") {
  return e === "dark" ? {
    main: dr[200],
    light: dr[50],
    dark: dr[400]
  } : {
    main: dr[500],
    light: dr[300],
    dark: dr[700]
  };
}
function vh(e = "light") {
  return e === "dark" ? {
    main: pr[500],
    light: pr[300],
    dark: pr[700]
  } : {
    main: pr[700],
    light: pr[400],
    dark: pr[800]
  };
}
function gh(e = "light") {
  return e === "dark" ? {
    main: mr[400],
    light: mr[300],
    dark: mr[700]
  } : {
    main: mr[700],
    light: mr[500],
    dark: mr[900]
  };
}
function yh(e = "light") {
  return e === "dark" ? {
    main: vr[400],
    light: vr[300],
    dark: vr[700]
  } : {
    main: vr[800],
    light: vr[500],
    dark: vr[900]
  };
}
function bh(e = "light") {
  return e === "dark" ? {
    main: Br[400],
    light: Br[300],
    dark: Br[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Br[500],
    dark: Br[900]
  };
}
function xh(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2
  } = e, o = ae(e, ph), i = e.primary || hh(t), a = e.secondary || mh(t), l = e.error || vh(t), c = e.info || gh(t), u = e.success || yh(t), f = e.warning || bh(t);
  function d(h) {
    const m = Xs(h, Fo.text.primary) >= r ? Fo.text.primary : Zs.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const O = Xs(h, m);
      O < 3 && console.error([`MUI: The contrast ratio of ${O}:1 for ${m} on ${h}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return m;
  }
  const p = ({
    color: h,
    name: m,
    mainShade: O = 500,
    lightShade: C = 300,
    darkShade: w = 700
  }) => {
    if (h = E({}, h), !h.main && h[O] && (h.main = h[O]), !h.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${O}\` property.` : Qr(11, m ? ` (${m})` : "", O));
    if (typeof h.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(h.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Qr(12, m ? ` (${m})` : "", JSON.stringify(h.main)));
    return Qs(h, "light", C, n), Qs(h, "dark", w, n), h.contrastText || (h.contrastText = d(h.main)), h;
  }, v = {
    dark: Fo,
    light: Zs
  };
  return process.env.NODE_ENV !== "production" && (v[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Et(E({
    // A collection of common colors.
    common: E({}, on),
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
    grey: sh,
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
  }, v[t]), o);
}
const Eh = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function Oh(e) {
  return Math.round(e * 1e5) / 1e5;
}
const ea = {
  textTransform: "uppercase"
}, ta = '"Roboto", "Helvetica", "Arial", sans-serif';
function Th(e, t) {
  const r = typeof t == "function" ? t(e) : t, {
    fontFamily: n = ta,
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
  } = r, p = ae(r, Eh);
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const v = o / 14, g = d || ((O) => `${O / u * v}rem`), h = (O, C, w, T, x) => E({
    fontFamily: n,
    fontWeight: O,
    fontSize: g(C),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: w
  }, n === ta ? {
    letterSpacing: `${Oh(T / C)}em`
  } : {}, x, f), m = {
    h1: h(i, 96, 1.167, -1.5),
    h2: h(i, 60, 1.2, -0.5),
    h3: h(a, 48, 1.167, 0),
    h4: h(a, 34, 1.235, 0.25),
    h5: h(a, 24, 1.334, 0),
    h6: h(l, 20, 1.6, 0.15),
    subtitle1: h(a, 16, 1.75, 0.15),
    subtitle2: h(l, 14, 1.57, 0.1),
    body1: h(a, 16, 1.5, 0.15),
    body2: h(a, 14, 1.43, 0.15),
    button: h(l, 14, 1.75, 0.4, ea),
    caption: h(a, 12, 1.66, 0.4),
    overline: h(a, 12, 2.66, 1, ea),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Et(E({
    htmlFontSize: u,
    pxToRem: g,
    fontFamily: n,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: a,
    fontWeightMedium: l,
    fontWeightBold: c
  }, m), p, {
    clone: !1
    // No need to clone deep
  });
}
const wh = 0.2, Sh = 0.14, Rh = 0.12;
function we(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${wh})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Sh})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Rh})`].join(",");
}
const Ch = ["none", we(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), we(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), we(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), we(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), we(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), we(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), we(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), we(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), we(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), we(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), we(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), we(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), we(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), we(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), we(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), we(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), we(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), we(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), we(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), we(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), we(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), we(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), we(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), we(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Ph = ["duration", "easing", "delay"], _h = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Ll = {
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
function ra(e) {
  return `${Math.round(e)}ms`;
}
function $h(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Nh(e) {
  const t = E({}, _h, e.easing), r = E({}, Ll, e.duration);
  return E({
    getAutoHeightDuration: $h,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = r.standard,
        easing: l = t.easeInOut,
        delay: c = 0
      } = i, u = ae(i, Ph);
      if (process.env.NODE_ENV !== "production") {
        const f = (p) => typeof p == "string", d = (p) => !isNaN(parseFloat(p));
        !f(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !d(a) && !f(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), f(l) || console.error('MUI: Argument "easing" must be a string.'), !d(c) && !f(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((f) => `${f} ${typeof a == "string" ? a : ra(a)} ${l} ${typeof c == "string" ? c : ra(c)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: r
  });
}
const kh = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, jh = kh, Mh = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function ki(e = {}, ...t) {
  const {
    mixins: r = {},
    palette: n = {},
    transitions: o = {},
    typography: i = {}
  } = e, a = ae(e, Mh);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Qr(18));
  const l = xh(n), c = Ci(e);
  let u = Et(c, {
    mixins: Bp(c.breakpoints, r),
    palette: l,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Ch.slice(),
    typography: Th(l, i),
    transitions: Nh(o),
    zIndex: E({}, jh)
  });
  if (u = Et(u, a), u = t.reduce((f, d) => Et(f, d), u), process.env.NODE_ENV !== "production") {
    const f = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], d = (p, v) => {
      let g;
      for (g in p) {
        const h = p[g];
        if (f.indexOf(g) !== -1 && Object.keys(h).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const m = ke("", g);
            console.error([`MUI: The \`${v}\` component increases the CSS specificity of the \`${g}\` internal state.`, "You can not override it like this: ", JSON.stringify(p, null, 2), "", `Instead, you need to use the '&.${m}' syntax:`, JSON.stringify({
              root: {
                [`&.${m}`]: h
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          p[g] = {};
        }
      }
    };
    Object.keys(u.components).forEach((p) => {
      const v = u.components[p].styleOverrides;
      v && p.indexOf("Mui") === 0 && d(v, p);
    });
  }
  return u.unstable_sxConfig = E({}, hn, a == null ? void 0 : a.unstable_sxConfig), u.unstable_sx = function(d) {
    return mn({
      sx: d,
      theme: this
    });
  }, u;
}
const Ah = ki(), ji = Ah, Rr = "$$material";
function Ih(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Dh = (e) => Ih(e) && e !== "classes", Mi = Dh, fe = Pp({
  themeId: Rr,
  defaultTheme: ji,
  rootShouldForwardProp: Mi
});
function Lh(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  return !t || !t.components || !t.components[r] || !t.components[r].defaultProps ? n : Ja(t.components[r].defaultProps, n);
}
function Vh(e) {
  return Object.keys(e).length === 0;
}
function Vl(e = null) {
  const t = b.useContext(Bt);
  return !t || Vh(t) ? e : t;
}
const zh = Ci();
function Ai(e = zh) {
  return Vl(e);
}
function Fh({
  props: e,
  name: t,
  defaultTheme: r,
  themeId: n
}) {
  let o = Ai(r);
  return n && (o = o[n] || o), Lh({
    theme: o,
    name: t,
    props: e
  });
}
function Me({
  props: e,
  name: t
}) {
  return Fh({
    props: e,
    name: t,
    defaultTheme: ji,
    themeId: Rr
  });
}
function oi(e, t) {
  return oi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, oi(e, t);
}
function zl(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, oi(e, t);
}
const na = {
  disabled: !1
};
var Wh = process.env.NODE_ENV !== "production" ? s.oneOfType([s.number, s.shape({
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
const Kn = et.createContext(null);
var Bh = function(t) {
  return t.scrollTop;
}, Gr = "unmounted", Xt = "exited", Jt = "entering", yr = "entered", ii = "exiting", Mt = /* @__PURE__ */ function(e) {
  zl(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var a = o, l = a && !a.isMounting ? n.enter : n.appear, c;
    return i.appearStatus = null, n.in ? l ? (c = Xt, i.appearStatus = Jt) : c = yr : n.unmountOnExit || n.mountOnEnter ? c = Gr : c = Xt, i.state = {
      status: c
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(o, i) {
    var a = o.in;
    return a && i.status === Gr ? {
      status: Xt
    } : null;
  };
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, r.componentDidUpdate = function(o) {
    var i = null;
    if (o !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== Jt && a !== yr && (i = Jt) : (a === Jt || a === yr) && (i = ii);
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
      if (this.cancelNextCallback(), i === Jt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : Sn.findDOMNode(this);
          a && Bh(a);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === Xt && this.setState({
        status: Gr
      });
  }, r.performEnter = function(o) {
    var i = this, a = this.props.enter, l = this.context ? this.context.isMounting : o, c = this.props.nodeRef ? [l] : [Sn.findDOMNode(this), l], u = c[0], f = c[1], d = this.getTimeouts(), p = l ? d.appear : d.enter;
    if (!o && !a || na.disabled) {
      this.safeSetState({
        status: yr
      }, function() {
        i.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, f), this.safeSetState({
      status: Jt
    }, function() {
      i.props.onEntering(u, f), i.onTransitionEnd(p, function() {
        i.safeSetState({
          status: yr
        }, function() {
          i.props.onEntered(u, f);
        });
      });
    });
  }, r.performExit = function() {
    var o = this, i = this.props.exit, a = this.getTimeouts(), l = this.props.nodeRef ? void 0 : Sn.findDOMNode(this);
    if (!i || na.disabled) {
      this.safeSetState({
        status: Xt
      }, function() {
        o.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: ii
    }, function() {
      o.props.onExiting(l), o.onTransitionEnd(a.exit, function() {
        o.safeSetState({
          status: Xt
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
    var a = this.props.nodeRef ? this.props.nodeRef.current : Sn.findDOMNode(this), l = o == null && !this.props.addEndListener;
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
    if (o === Gr)
      return null;
    var i = this.props, a = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var l = ae(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ et.createElement(Kn.Provider, {
        value: null
      }, typeof a == "function" ? a(o, l) : et.cloneElement(et.Children.only(a), l))
    );
  }, t;
}(et.Component);
Mt.contextType = Kn;
Mt.propTypes = process.env.NODE_ENV !== "production" ? {
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
    var r = Wh;
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
function gr() {
}
Mt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: gr,
  onEntering: gr,
  onEntered: gr,
  onExit: gr,
  onExiting: gr,
  onExited: gr
};
Mt.UNMOUNTED = Gr;
Mt.EXITED = Xt;
Mt.ENTERING = Jt;
Mt.ENTERED = yr;
Mt.EXITING = ii;
const Oo = Mt;
function Uh(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ii(e, t) {
  var r = function(i) {
    return t && Mn(i) ? t(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && Gc.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function qh(e, t) {
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
function Qt(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function Yh(e, t) {
  return Ii(e.children, function(r) {
    return An(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: Qt(r, "appear", e),
      enter: Qt(r, "enter", e),
      exit: Qt(r, "exit", e)
    });
  });
}
function Hh(e, t, r) {
  var n = Ii(e.children), o = qh(t, n);
  return Object.keys(o).forEach(function(i) {
    var a = o[i];
    if (Mn(a)) {
      var l = i in t, c = i in n, u = t[i], f = Mn(u) && !u.props.in;
      c && (!l || f) ? o[i] = An(a, {
        onExited: r.bind(null, a),
        in: !0,
        exit: Qt(a, "exit", e),
        enter: Qt(a, "enter", e)
      }) : !c && l && !f ? o[i] = An(a, {
        in: !1
      }) : c && l && Mn(u) && (o[i] = An(a, {
        onExited: r.bind(null, a),
        in: u.props.in,
        exit: Qt(a, "exit", e),
        enter: Qt(a, "enter", e)
      }));
    }
  }), o;
}
var Gh = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Kh = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Di = /* @__PURE__ */ function(e) {
  zl(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var a = i.handleExited.bind(Uh(i));
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
      children: c ? Yh(o, l) : Hh(o, a, l),
      firstRender: !1
    };
  }, r.handleExited = function(o, i) {
    var a = Ii(this.props.children);
    o.key in a || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(l) {
      var c = E({}, l.children);
      return delete c[o.key], {
        children: c
      };
    }));
  }, r.render = function() {
    var o = this.props, i = o.component, a = o.childFactory, l = ae(o, ["component", "childFactory"]), c = this.state.contextValue, u = Gh(this.state.children).map(a);
    return delete l.appear, delete l.enter, delete l.exit, i === null ? /* @__PURE__ */ et.createElement(Kn.Provider, {
      value: c
    }, u) : /* @__PURE__ */ et.createElement(Kn.Provider, {
      value: c
    }, /* @__PURE__ */ et.createElement(i, l, u));
  }, t;
}(et.Component);
Di.propTypes = process.env.NODE_ENV !== "production" ? {
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
Di.defaultProps = Kh;
const Xh = Di, Jh = ["className", "component"];
function Zh(e = {}) {
  const {
    themeId: t,
    defaultTheme: r,
    defaultClassName: n = "MuiBox-root",
    generateClassName: o
  } = e, i = wl("div", {
    shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as"
  })(mn);
  return /* @__PURE__ */ b.forwardRef(function(c, u) {
    const f = Ai(r), d = Pi(c), {
      className: p,
      component: v = "div"
    } = d, g = ae(d, Jh);
    return /* @__PURE__ */ P.jsx(i, E({
      as: v,
      ref: u,
      className: se(p, o ? o(n) : n),
      theme: t && f[t] || f
    }, g));
  });
}
const Fl = /* @__PURE__ */ b.createContext(null);
process.env.NODE_ENV !== "production" && (Fl.displayName = "ThemeContext");
const Wl = Fl;
function Bl() {
  const e = b.useContext(Wl);
  return process.env.NODE_ENV !== "production" && b.useDebugValue(e), e;
}
const Qh = typeof Symbol == "function" && Symbol.for, em = Qh ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function tm(e, t) {
  if (typeof t == "function") {
    const r = t(e);
    return process.env.NODE_ENV !== "production" && (r || console.error(["MUI: You should return an object from your theme function, i.e.", "<ThemeProvider theme={() => ({})} />"].join(`
`))), r;
  }
  return E({}, e, t);
}
function Xn(e) {
  const {
    children: t,
    theme: r
  } = e, n = Bl();
  process.env.NODE_ENV !== "production" && n === null && typeof r == "function" && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const o = b.useMemo(() => {
    const i = n === null ? r : tm(n, r);
    return i != null && (i[em] = n !== null), i;
  }, [r, n]);
  return /* @__PURE__ */ P.jsx(Wl.Provider, {
    value: o,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (Xn.propTypes = {
  /**
   * Your component tree.
   */
  children: s.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: s.oneOfType([s.object, s.func]).isRequired
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (Xn.propTypes = oo(Xn.propTypes));
const oa = {};
function ia(e, t, r, n = !1) {
  return b.useMemo(() => {
    const o = e && t[e] || t;
    if (typeof r == "function") {
      const i = r(o), a = e ? E({}, t, {
        [e]: i
      }) : i;
      return n ? () => a : a;
    }
    return e ? E({}, t, {
      [e]: r
    }) : E({}, t, r);
  }, [e, t, r, n]);
}
function Jn(e) {
  const {
    children: t,
    theme: r,
    themeId: n
  } = e, o = Vl(oa), i = Bl() || oa;
  process.env.NODE_ENV !== "production" && (o === null && typeof r == "function" || n && o && !o[n] && typeof r == "function") && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const a = ia(n, o, r), l = ia(n, i, r, !0), c = a.direction === "rtl";
  return /* @__PURE__ */ P.jsx(Xn, {
    theme: l,
    children: /* @__PURE__ */ P.jsx(Bt.Provider, {
      value: a,
      children: /* @__PURE__ */ P.jsx(Va, {
        value: c,
        children: t
      })
    })
  });
}
process.env.NODE_ENV !== "production" && (Jn.propTypes = {
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
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (Jn.propTypes = oo(Jn.propTypes));
function St() {
  const e = Ai(ji);
  return process.env.NODE_ENV !== "production" && b.useDebugValue(e), e[Rr] || e;
}
const Li = (e) => e.scrollTop;
function Wt(e, t) {
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
const rm = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], nm = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Ul = /* @__PURE__ */ b.forwardRef(function(t, r) {
  const n = St(), o = {
    enter: n.transitions.duration.enteringScreen,
    exit: n.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: a = !0,
    children: l,
    easing: c,
    in: u,
    onEnter: f,
    onEntered: d,
    onEntering: p,
    onExit: v,
    onExited: g,
    onExiting: h,
    style: m,
    timeout: O = o,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: C = Oo
  } = t, w = ae(t, rm), T = b.useRef(null), x = ze(T, l.ref, r), S = (I) => (B) => {
    if (I) {
      const M = T.current;
      B === void 0 ? I(M) : I(M, B);
    }
  }, R = S(p), A = S((I, B) => {
    Li(I);
    const M = Wt({
      style: m,
      timeout: O,
      easing: c
    }, {
      mode: "enter"
    });
    I.style.webkitTransition = n.transitions.create("opacity", M), I.style.transition = n.transitions.create("opacity", M), f && f(I, B);
  }), D = S(d), N = S(h), L = S((I) => {
    const B = Wt({
      style: m,
      timeout: O,
      easing: c
    }, {
      mode: "exit"
    });
    I.style.webkitTransition = n.transitions.create("opacity", B), I.style.transition = n.transitions.create("opacity", B), v && v(I);
  }), Y = S(g), F = (I) => {
    i && i(T.current, I);
  };
  return /* @__PURE__ */ P.jsx(C, E({
    appear: a,
    in: u,
    nodeRef: T,
    onEnter: A,
    onEntered: D,
    onEntering: R,
    onExit: L,
    onExited: Y,
    onExiting: N,
    addEndListener: F,
    timeout: O
  }, w, {
    children: (I, B) => /* @__PURE__ */ b.cloneElement(l, E({
      style: E({
        opacity: 0,
        visibility: I === "exited" && !u ? "hidden" : void 0
      }, nm[I], m, l.props.style),
      ref: x
    }, B))
  }));
});
process.env.NODE_ENV !== "production" && (Ul.propTypes = {
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
  children: Nr.isRequired,
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
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: s.oneOfType([s.number, s.shape({
    appear: s.number,
    enter: s.number,
    exit: s.number
  })])
});
const om = Ul;
function im(e) {
  return ke("MuiBackdrop", e);
}
je("MuiBackdrop", ["root", "invisible"]);
const sm = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"], am = (e) => {
  const {
    classes: t,
    invisible: r
  } = e;
  return Ae({
    root: ["root", r && "invisible"]
  }, im, t);
}, lm = fe("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.invisible && t.invisible];
  }
})(({
  ownerState: e
}) => E({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent"
}, e.invisible && {
  backgroundColor: "transparent"
})), ql = /* @__PURE__ */ b.forwardRef(function(t, r) {
  var n, o, i;
  const a = Me({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: l,
    className: c,
    component: u = "div",
    components: f = {},
    componentsProps: d = {},
    invisible: p = !1,
    open: v,
    slotProps: g = {},
    slots: h = {},
    TransitionComponent: m = om,
    transitionDuration: O
  } = a, C = ae(a, sm), w = E({}, a, {
    component: u,
    invisible: p
  }), T = am(w), x = (n = g.root) != null ? n : d.root;
  return /* @__PURE__ */ P.jsx(m, E({
    in: v,
    timeout: O
  }, C, {
    children: /* @__PURE__ */ P.jsx(lm, E({
      "aria-hidden": !0
    }, x, {
      as: (o = (i = h.root) != null ? i : f.Root) != null ? o : u,
      className: se(T.root, c, x == null ? void 0 : x.className),
      ownerState: E({}, w, x == null ? void 0 : x.ownerState),
      classes: T,
      ref: r,
      children: l
    }))
  }));
});
process.env.NODE_ENV !== "production" && (ql.propTypes = {
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
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: s.shape({
    Root: s.elementType
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
    root: s.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: s.bool,
  /**
   * If `true`, the component is shown.
   */
  open: s.bool.isRequired,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: s.shape({
    root: s.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
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
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: s.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: s.oneOfType([s.number, s.shape({
    appear: s.number,
    enter: s.number,
    exit: s.number
  })])
});
const cm = ql;
function um(e) {
  return ke("MuiModal", e);
}
je("MuiModal", ["root", "hidden", "backdrop"]);
const fm = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"], dm = (e) => {
  const {
    open: t,
    exited: r,
    classes: n
  } = e;
  return Ae({
    root: ["root", !t && r && "hidden"],
    backdrop: ["backdrop"]
  }, um, n);
}, pm = fe("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, !r.open && r.exited && t.hidden];
  }
})(({
  theme: e,
  ownerState: t
}) => E({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !t.open && t.exited && {
  visibility: "hidden"
})), hm = fe(cm, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), Yl = /* @__PURE__ */ b.forwardRef(function(t, r) {
  var n, o, i, a, l, c;
  const u = Me({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: f = hm,
    BackdropProps: d,
    className: p,
    closeAfterTransition: v = !1,
    children: g,
    container: h,
    component: m,
    components: O = {},
    componentsProps: C = {},
    disableAutoFocus: w = !1,
    disableEnforceFocus: T = !1,
    disableEscapeKeyDown: x = !1,
    disablePortal: S = !1,
    disableRestoreFocus: R = !1,
    disableScrollLock: A = !1,
    hideBackdrop: D = !1,
    keepMounted: N = !1,
    onBackdropClick: L,
    open: Y,
    slotProps: F,
    slots: I
    // eslint-disable-next-line react/prop-types
  } = u, B = ae(u, fm), M = E({}, u, {
    closeAfterTransition: v,
    disableAutoFocus: w,
    disableEnforceFocus: T,
    disableEscapeKeyDown: x,
    disablePortal: S,
    disableRestoreFocus: R,
    disableScrollLock: A,
    hideBackdrop: D,
    keepMounted: N
  }), {
    getRootProps: V,
    getBackdropProps: j,
    getTransitionProps: X,
    portalRef: _,
    isTopModal: W,
    exited: re,
    hasTransition: te
  } = tf(E({}, M, {
    rootRef: r
  })), H = E({}, M, {
    exited: re
  }), Z = dm(H), k = {};
  if (g.props.tabIndex === void 0 && (k.tabIndex = "-1"), te) {
    const {
      onEnter: Oe,
      onExited: K
    } = X();
    k.onEnter = Oe, k.onExited = K;
  }
  const G = (n = (o = I == null ? void 0 : I.root) != null ? o : O.Root) != null ? n : pm, q = (i = (a = I == null ? void 0 : I.backdrop) != null ? a : O.Backdrop) != null ? i : f, J = (l = F == null ? void 0 : F.root) != null ? l : C.root, ee = (c = F == null ? void 0 : F.backdrop) != null ? c : C.backdrop, le = Zo({
    elementType: G,
    externalSlotProps: J,
    externalForwardedProps: B,
    getSlotProps: V,
    additionalProps: {
      ref: r,
      as: m
    },
    ownerState: H,
    className: se(p, J == null ? void 0 : J.className, Z == null ? void 0 : Z.root, !H.open && H.exited && (Z == null ? void 0 : Z.hidden))
  }), z = Zo({
    elementType: q,
    externalSlotProps: ee,
    additionalProps: d,
    getSlotProps: (Oe) => j(E({}, Oe, {
      onClick: (K) => {
        L && L(K), Oe != null && Oe.onClick && Oe.onClick(K);
      }
    })),
    className: se(ee == null ? void 0 : ee.className, d == null ? void 0 : d.className, Z == null ? void 0 : Z.backdrop),
    ownerState: H
  });
  return !N && !Y && (!te || re) ? null : /* @__PURE__ */ P.jsx(en, {
    ref: _,
    container: h,
    disablePortal: S,
    children: /* @__PURE__ */ P.jsxs(G, E({}, le, {
      children: [!D && f ? /* @__PURE__ */ P.jsx(q, E({}, z)) : null, /* @__PURE__ */ P.jsx(Un, {
        disableEnforceFocus: T,
        disableAutoFocus: w,
        disableRestoreFocus: R,
        isEnabled: W,
        open: Y,
        children: /* @__PURE__ */ b.cloneElement(g, k)
      })]
    }))
  });
});
process.env.NODE_ENV !== "production" && (Yl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: s.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: s.object,
  /**
   * A single child content element.
   */
  children: Nr.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: s.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: s.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: s.shape({
    Backdrop: s.elementType,
    Root: s.elementType
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
    backdrop: s.oneOfType([s.func, s.object]),
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
  container: s.oneOfType([tr, s.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: s.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: s.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: s.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: s.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: s.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: s.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: s.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: s.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: s.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: s.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: s.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: s.func,
  /**
   * If `true`, the component is shown.
   */
  open: s.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: s.shape({
    backdrop: s.oneOfType([s.func, s.object]),
    root: s.oneOfType([s.func, s.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: s.shape({
    backdrop: s.elementType,
    root: s.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object])
});
const mm = Yl;
function vm(e) {
  return ke("MuiSvgIcon", e);
}
je("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const gm = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], ym = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${ne(t)}`, `fontSize${ne(r)}`]
  };
  return Ae(o, vm, n);
}, bm = fe("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${ne(r.color)}`], t[`fontSize${ne(r.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var r, n, o, i, a, l, c, u, f, d, p, v, g;
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
      action: (v = (e.vars || e).palette) == null || (v = v.action) == null ? void 0 : v.active,
      disabled: (g = (e.vars || e).palette) == null || (g = g.action) == null ? void 0 : g.disabled,
      inherit: void 0
    }[t.color]
  };
}), Zn = /* @__PURE__ */ b.forwardRef(function(t, r) {
  const n = Me({
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
  } = n, v = ae(n, gm), g = /* @__PURE__ */ b.isValidElement(o) && o.type === "svg", h = E({}, n, {
    color: a,
    component: l,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: f,
    viewBox: p,
    hasSvgAsChild: g
  }), m = {};
  f || (m.viewBox = p);
  const O = ym(h);
  return /* @__PURE__ */ P.jsxs(bm, E({
    as: l,
    className: se(O.root, i),
    focusable: "false",
    color: u,
    "aria-hidden": d ? void 0 : !0,
    role: d ? "img" : void 0,
    ref: r
  }, m, v, g && o.props, {
    ownerState: h,
    children: [g ? o.props.children : o, d ? /* @__PURE__ */ P.jsx("title", {
      children: d
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (Zn.propTypes = {
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
Zn.muiName = "SvgIcon";
function Vi(e, t) {
  function r(n, o) {
    return /* @__PURE__ */ P.jsx(Zn, E({
      "data-testid": `${t}Icon`,
      ref: o
    }, n, {
      children: e
    }));
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = Zn.muiName, /* @__PURE__ */ b.memo(/* @__PURE__ */ b.forwardRef(r));
}
const xm = {
  configure: (e) => {
    process.env.NODE_ENV !== "production" && console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.", "", "You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead", "", "The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401", "", "The updated documentation: https://mui.com/guides/classname-generator/"].join(`
`)), mi.configure(e);
  }
}, Em = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  capitalize: ne,
  createChainedFunction: Xo,
  createSvgIcon: Vi,
  debounce: Ha,
  deprecatedPropType: wu,
  isMuiElement: Su,
  ownerDocument: gt,
  ownerWindow: kr,
  requirePropFactory: Ru,
  setRef: Bn,
  unstable_ClassNameGenerator: xm,
  unstable_useEnhancedEffect: rr,
  unstable_useId: Ga,
  unsupportedProp: Ka,
  useControlled: Xa,
  useEventCallback: Pt,
  useForkRef: ze,
  useIsFocusVisible: hi
}, Symbol.toStringTag, { value: "Module" })), Om = ["addEndListener", "appear", "children", "container", "direction", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function Tm(e, t, r) {
  const n = t.getBoundingClientRect(), o = r && r.getBoundingClientRect(), i = kr(t);
  let a;
  if (t.fakeTransform)
    a = t.fakeTransform;
  else {
    const u = i.getComputedStyle(t);
    a = u.getPropertyValue("-webkit-transform") || u.getPropertyValue("transform");
  }
  let l = 0, c = 0;
  if (a && a !== "none" && typeof a == "string") {
    const u = a.split("(")[1].split(")")[0].split(",");
    l = parseInt(u[4], 10), c = parseInt(u[5], 10);
  }
  return e === "left" ? o ? `translateX(${o.right + l - n.left}px)` : `translateX(${i.innerWidth + l - n.left}px)` : e === "right" ? o ? `translateX(-${n.right - o.left - l}px)` : `translateX(-${n.left + n.width - l}px)` : e === "up" ? o ? `translateY(${o.bottom + c - n.top}px)` : `translateY(${i.innerHeight + c - n.top}px)` : o ? `translateY(-${n.top - o.top + n.height - c}px)` : `translateY(-${n.top + n.height - c}px)`;
}
function Hl(e) {
  return typeof e == "function" ? e() : e;
}
function _n(e, t, r) {
  const n = Hl(r), o = Tm(e, t, n);
  o && (t.style.webkitTransform = o, t.style.transform = o);
}
const Gl = /* @__PURE__ */ b.forwardRef(function(t, r) {
  const n = St(), o = {
    enter: n.transitions.easing.easeOut,
    exit: n.transitions.easing.sharp
  }, i = {
    enter: n.transitions.duration.enteringScreen,
    exit: n.transitions.duration.leavingScreen
  }, {
    addEndListener: a,
    appear: l = !0,
    children: c,
    container: u,
    direction: f = "down",
    easing: d = o,
    in: p,
    onEnter: v,
    onEntered: g,
    onEntering: h,
    onExit: m,
    onExited: O,
    onExiting: C,
    style: w,
    timeout: T = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: x = Oo
  } = t, S = ae(t, Om), R = b.useRef(null), A = ze(c.ref, R, r), D = (j) => (X) => {
    j && (X === void 0 ? j(R.current) : j(R.current, X));
  }, N = D((j, X) => {
    _n(f, j, u), Li(j), v && v(j, X);
  }), L = D((j, X) => {
    const _ = Wt({
      timeout: T,
      style: w,
      easing: d
    }, {
      mode: "enter"
    });
    j.style.webkitTransition = n.transitions.create("-webkit-transform", E({}, _)), j.style.transition = n.transitions.create("transform", E({}, _)), j.style.webkitTransform = "none", j.style.transform = "none", h && h(j, X);
  }), Y = D(g), F = D(C), I = D((j) => {
    const X = Wt({
      timeout: T,
      style: w,
      easing: d
    }, {
      mode: "exit"
    });
    j.style.webkitTransition = n.transitions.create("-webkit-transform", X), j.style.transition = n.transitions.create("transform", X), _n(f, j, u), m && m(j);
  }), B = D((j) => {
    j.style.webkitTransition = "", j.style.transition = "", O && O(j);
  }), M = (j) => {
    a && a(R.current, j);
  }, V = b.useCallback(() => {
    R.current && _n(f, R.current, u);
  }, [f, u]);
  return b.useEffect(() => {
    if (p || f === "down" || f === "right")
      return;
    const j = Ha(() => {
      R.current && _n(f, R.current, u);
    }), X = kr(R.current);
    return X.addEventListener("resize", j), () => {
      j.clear(), X.removeEventListener("resize", j);
    };
  }, [f, p, u]), b.useEffect(() => {
    p || V();
  }, [p, V]), /* @__PURE__ */ P.jsx(x, E({
    nodeRef: R,
    onEnter: N,
    onEntered: Y,
    onEntering: L,
    onExit: I,
    onExited: B,
    onExiting: F,
    addEndListener: M,
    appear: l,
    in: p,
    timeout: T
  }, S, {
    children: (j, X) => /* @__PURE__ */ b.cloneElement(c, E({
      ref: A,
      style: E({
        visibility: j === "exited" && !p ? "hidden" : void 0
      }, w, c.props.style)
    }, X))
  }));
});
process.env.NODE_ENV !== "production" && (Gl.propTypes = {
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
  children: Nr.isRequired,
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the container the Slide is transitioning from.
   */
  container: or(s.oneOfType([tr, s.func]), (e) => {
    if (e.open) {
      const t = Hl(e.container);
      if (t && t.nodeType === 1) {
        const r = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && r.top === 0 && r.left === 0 && r.right === 0 && r.bottom === 0)
          return new Error(["MUI: The `container` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || t.contextElement != null && t.contextElement.nodeType !== 1)
        return new Error(["MUI: The `container` prop provided to the component is invalid.", "It should be an HTML element instance."].join(`
`));
    }
    return null;
  }),
  /**
   * Direction the child node will enter from.
   * @default 'down'
   */
  direction: s.oneOf(["down", "left", "right", "up"]),
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   * @default {
   *   enter: theme.transitions.easing.easeOut,
   *   exit: theme.transitions.easing.sharp,
   * }
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
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: s.oneOfType([s.number, s.shape({
    appear: s.number,
    enter: s.number,
    exit: s.number
  })])
});
const wm = Gl, sa = (e) => {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
};
function Sm(e) {
  return ke("MuiPaper", e);
}
je("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Rm = ["className", "component", "elevation", "square", "variant"], Cm = (e) => {
  const {
    square: t,
    elevation: r,
    variant: n,
    classes: o
  } = e, i = {
    root: ["root", n, !t && "rounded", n === "elevation" && `elevation${r}`]
  };
  return Ae(i, Sm, o);
}, Pm = fe("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], !r.square && t.rounded, r.variant === "elevation" && t[`elevation${r.elevation}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var r;
  return E({
    backgroundColor: (e.vars || e).palette.background.paper,
    color: (e.vars || e).palette.text.primary,
    transition: e.transitions.create("box-shadow")
  }, !t.square && {
    borderRadius: e.shape.borderRadius
  }, t.variant === "outlined" && {
    border: `1px solid ${(e.vars || e).palette.divider}`
  }, t.variant === "elevation" && E({
    boxShadow: (e.vars || e).shadows[t.elevation]
  }, !e.vars && e.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${_e("#fff", sa(t.elevation))}, ${_e("#fff", sa(t.elevation))})`
  }, e.vars && {
    backgroundImage: (r = e.vars.overlays) == null ? void 0 : r[t.elevation]
  }));
}), Kl = /* @__PURE__ */ b.forwardRef(function(t, r) {
  const n = Me({
    props: t,
    name: "MuiPaper"
  }), {
    className: o,
    component: i = "div",
    elevation: a = 1,
    square: l = !1,
    variant: c = "elevation"
  } = n, u = ae(n, Rm), f = E({}, n, {
    component: i,
    elevation: a,
    square: l,
    variant: c
  }), d = Cm(f);
  return process.env.NODE_ENV !== "production" && St().shadows[a] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${a}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${a}]\` is defined.`].join(`
`)), /* @__PURE__ */ P.jsx(Pm, E({
    as: i,
    ownerState: f,
    className: se(d.root, o),
    ref: r
  }, u));
});
process.env.NODE_ENV !== "production" && (Kl.propTypes = {
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
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: or(Da, (e) => {
    const {
      elevation: t,
      variant: r
    } = e;
    return t > 0 && r === "outlined" ? new Error(`MUI: Combining \`elevation={${t}}\` with \`variant="${r}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: s.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: s.oneOfType([s.oneOf(["elevation", "outlined"]), s.string])
});
const _m = Kl;
function $m(e) {
  return ke("MuiDrawer", e);
}
je("MuiDrawer", ["root", "docked", "paper", "paperAnchorLeft", "paperAnchorRight", "paperAnchorTop", "paperAnchorBottom", "paperAnchorDockedLeft", "paperAnchorDockedRight", "paperAnchorDockedTop", "paperAnchorDockedBottom", "modal"]);
const Nm = ["BackdropProps"], km = ["anchor", "BackdropProps", "children", "className", "elevation", "hideBackdrop", "ModalProps", "onClose", "open", "PaperProps", "SlideProps", "TransitionComponent", "transitionDuration", "variant"], Xl = (e, t) => {
  const {
    ownerState: r
  } = e;
  return [t.root, (r.variant === "permanent" || r.variant === "persistent") && t.docked, t.modal];
}, jm = (e) => {
  const {
    classes: t,
    anchor: r,
    variant: n
  } = e, o = {
    root: ["root"],
    docked: [(n === "permanent" || n === "persistent") && "docked"],
    modal: ["modal"],
    paper: ["paper", `paperAnchor${ne(r)}`, n !== "temporary" && `paperAnchorDocked${ne(r)}`]
  };
  return Ae(o, $m, t);
}, Mm = fe(mm, {
  name: "MuiDrawer",
  slot: "Root",
  overridesResolver: Xl
})(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.drawer
})), aa = fe("div", {
  shouldForwardProp: Mi,
  name: "MuiDrawer",
  slot: "Docked",
  skipVariantsResolver: !1,
  overridesResolver: Xl
})({
  flex: "0 0 auto"
}), Am = fe(_m, {
  name: "MuiDrawer",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.paper, t[`paperAnchor${ne(r.anchor)}`], r.variant !== "temporary" && t[`paperAnchorDocked${ne(r.anchor)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => E({
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  flex: "1 0 auto",
  zIndex: (e.vars || e).zIndex.drawer,
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  // temporary style
  position: "fixed",
  top: 0,
  // We disable the focus ring for mouse, touch and keyboard users.
  // At some point, it would be better to keep it for keyboard users.
  // :focus-ring CSS pseudo-class will help.
  outline: 0
}, t.anchor === "left" && {
  left: 0
}, t.anchor === "top" && {
  top: 0,
  left: 0,
  right: 0,
  height: "auto",
  maxHeight: "100%"
}, t.anchor === "right" && {
  right: 0
}, t.anchor === "bottom" && {
  top: "auto",
  left: 0,
  bottom: 0,
  right: 0,
  height: "auto",
  maxHeight: "100%"
}, t.anchor === "left" && t.variant !== "temporary" && {
  borderRight: `1px solid ${(e.vars || e).palette.divider}`
}, t.anchor === "top" && t.variant !== "temporary" && {
  borderBottom: `1px solid ${(e.vars || e).palette.divider}`
}, t.anchor === "right" && t.variant !== "temporary" && {
  borderLeft: `1px solid ${(e.vars || e).palette.divider}`
}, t.anchor === "bottom" && t.variant !== "temporary" && {
  borderTop: `1px solid ${(e.vars || e).palette.divider}`
})), Jl = {
  left: "right",
  right: "left",
  top: "down",
  bottom: "up"
};
function Im(e) {
  return ["left", "right"].indexOf(e) !== -1;
}
function Dm({
  direction: e
}, t) {
  return e === "rtl" && Im(t) ? Jl[t] : t;
}
const Zl = /* @__PURE__ */ b.forwardRef(function(t, r) {
  const n = Me({
    props: t,
    name: "MuiDrawer"
  }), o = St(), i = za(), a = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    anchor: l = "left",
    BackdropProps: c,
    children: u,
    className: f,
    elevation: d = 16,
    hideBackdrop: p = !1,
    ModalProps: {
      BackdropProps: v
    } = {},
    onClose: g,
    open: h = !1,
    PaperProps: m = {},
    SlideProps: O,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: C = wm,
    transitionDuration: w = a,
    variant: T = "temporary"
  } = n, x = ae(n.ModalProps, Nm), S = ae(n, km), R = b.useRef(!1);
  b.useEffect(() => {
    R.current = !0;
  }, []);
  const A = Dm({
    direction: i ? "rtl" : "ltr"
  }, l), N = E({}, n, {
    anchor: l,
    elevation: d,
    open: h,
    variant: T
  }, S), L = jm(N), Y = /* @__PURE__ */ P.jsx(Am, E({
    elevation: T === "temporary" ? d : 0,
    square: !0
  }, m, {
    className: se(L.paper, m.className),
    ownerState: N,
    children: u
  }));
  if (T === "permanent")
    return /* @__PURE__ */ P.jsx(aa, E({
      className: se(L.root, L.docked, f),
      ownerState: N,
      ref: r
    }, S, {
      children: Y
    }));
  const F = /* @__PURE__ */ P.jsx(C, E({
    in: h,
    direction: Jl[A],
    timeout: w,
    appear: R.current
  }, O, {
    children: Y
  }));
  return T === "persistent" ? /* @__PURE__ */ P.jsx(aa, E({
    className: se(L.root, L.docked, f),
    ownerState: N,
    ref: r
  }, S, {
    children: F
  })) : /* @__PURE__ */ P.jsx(Mm, E({
    BackdropProps: E({}, c, v, {
      transitionDuration: w
    }),
    className: se(L.root, L.modal, f),
    open: h,
    ownerState: N,
    onClose: g,
    hideBackdrop: p,
    ref: r
  }, S, x, {
    children: F
  }));
});
process.env.NODE_ENV !== "production" && (Zl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Side from which the drawer will appear.
   * @default 'left'
   */
  anchor: s.oneOf(["bottom", "left", "right", "top"]),
  /**
   * @ignore
   */
  BackdropProps: s.object,
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
   * The elevation of the drawer.
   * @default 16
   */
  elevation: Da,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: s.bool,
  /**
   * Props applied to the [`Modal`](/material-ui/api/modal/) element.
   * @default {}
   */
  ModalProps: s.object,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: s.func,
  /**
   * If `true`, the component is shown.
   * @default false
   */
  open: s.bool,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   * @default {}
   */
  PaperProps: s.object,
  /**
   * Props applied to the [`Slide`](/material-ui/api/slide/) element.
   */
  SlideProps: s.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object]),
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: s.oneOfType([s.number, s.shape({
    appear: s.number,
    enter: s.number,
    exit: s.number
  })]),
  /**
   * The variant to use.
   * @default 'temporary'
   */
  variant: s.oneOf(["permanent", "persistent", "temporary"])
});
const Lm = Zl, Vm = ["theme"];
function Ql(e) {
  let {
    theme: t
  } = e, r = ae(e, Vm);
  const n = t[Rr];
  return /* @__PURE__ */ P.jsx(Jn, E({}, r, {
    themeId: n ? Rr : void 0,
    theme: n || t
  }));
}
process.env.NODE_ENV !== "production" && (Ql.propTypes = {
  /**
   * Your component tree.
   */
  children: s.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: s.oneOfType([s.object, s.func]).isRequired
});
function zm(e) {
  return Me;
}
function Fm(e) {
  return ke("MuiCollapse", e);
}
je("MuiCollapse", ["root", "horizontal", "vertical", "entered", "hidden", "wrapper", "wrapperInner"]);
const Wm = ["addEndListener", "children", "className", "collapsedSize", "component", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "orientation", "style", "timeout", "TransitionComponent"], Bm = (e) => {
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
  return Ae(n, Fm, r);
}, Um = fe("div", {
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
})), qm = fe("div", {
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
})), Ym = fe("div", {
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
})), zi = /* @__PURE__ */ b.forwardRef(function(t, r) {
  const n = Me({
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
    onEntering: v,
    onExit: g,
    onExited: h,
    onExiting: m,
    orientation: O = "vertical",
    style: C,
    timeout: w = Ll.standard,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: T = Oo
  } = n, x = ae(n, Wm), S = E({}, n, {
    orientation: O,
    collapsedSize: l
  }), R = Bm(S), A = St(), D = Zt(), N = b.useRef(null), L = b.useRef(), Y = typeof l == "number" ? `${l}px` : l, F = O === "horizontal", I = F ? "width" : "height", B = b.useRef(null), M = ze(r, B), V = (k) => (G) => {
    if (k) {
      const q = B.current;
      G === void 0 ? k(q) : k(q, G);
    }
  }, j = () => N.current ? N.current[F ? "clientWidth" : "clientHeight"] : 0, X = V((k, G) => {
    N.current && F && (N.current.style.position = "absolute"), k.style[I] = Y, d && d(k, G);
  }), _ = V((k, G) => {
    const q = j();
    N.current && F && (N.current.style.position = "");
    const {
      duration: J,
      easing: ee
    } = Wt({
      style: C,
      timeout: w,
      easing: u
    }, {
      mode: "enter"
    });
    if (w === "auto") {
      const le = A.transitions.getAutoHeightDuration(q);
      k.style.transitionDuration = `${le}ms`, L.current = le;
    } else
      k.style.transitionDuration = typeof J == "string" ? J : `${J}ms`;
    k.style[I] = `${q}px`, k.style.transitionTimingFunction = ee, v && v(k, G);
  }), W = V((k, G) => {
    k.style[I] = "auto", p && p(k, G);
  }), re = V((k) => {
    k.style[I] = `${j()}px`, g && g(k);
  }), te = V(h), H = V((k) => {
    const G = j(), {
      duration: q,
      easing: J
    } = Wt({
      style: C,
      timeout: w,
      easing: u
    }, {
      mode: "exit"
    });
    if (w === "auto") {
      const ee = A.transitions.getAutoHeightDuration(G);
      k.style.transitionDuration = `${ee}ms`, L.current = ee;
    } else
      k.style.transitionDuration = typeof q == "string" ? q : `${q}ms`;
    k.style[I] = Y, k.style.transitionTimingFunction = J, m && m(k);
  }), Z = (k) => {
    w === "auto" && D.start(L.current || 0, k), o && o(B.current, k);
  };
  return /* @__PURE__ */ P.jsx(T, E({
    in: f,
    onEnter: X,
    onEntered: W,
    onEntering: _,
    onExit: re,
    onExited: te,
    onExiting: H,
    addEndListener: Z,
    nodeRef: B,
    timeout: w === "auto" ? null : w
  }, x, {
    children: (k, G) => /* @__PURE__ */ P.jsx(Um, E({
      as: c,
      className: se(R.root, a, {
        entered: R.entered,
        exited: !f && Y === "0px" && R.hidden
      }[k]),
      style: E({
        [F ? "minWidth" : "minHeight"]: Y
      }, C),
      ref: M
    }, G, {
      // `ownerState` is set after `childProps` to override any existing `ownerState` property in `childProps`
      // that might have been forwarded from the Transition component.
      ownerState: E({}, S, {
        state: k
      }),
      children: /* @__PURE__ */ P.jsx(qm, {
        ownerState: E({}, S, {
          state: k
        }),
        className: R.wrapper,
        ref: N,
        children: /* @__PURE__ */ P.jsx(Ym, {
          ownerState: E({}, S, {
            state: k
          }),
          className: R.wrapperInner,
          children: i
        })
      })
    }))
  }));
});
process.env.NODE_ENV !== "production" && (zi.propTypes = {
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
  component: Ua,
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
zi.muiSupportAuto = !0;
const Hm = zi, Gm = ["className", "elementType", "ownerState", "externalForwardedProps", "getSlotOwnerState", "internalForwardedProps"], Km = ["component", "slots", "slotProps"], Xm = ["component"];
function Jm(e, t) {
  const {
    className: r,
    elementType: n,
    ownerState: o,
    externalForwardedProps: i,
    getSlotOwnerState: a,
    internalForwardedProps: l
  } = t, c = ae(t, Gm), {
    component: u,
    slots: f = {
      [e]: void 0
    },
    slotProps: d = {
      [e]: void 0
    }
  } = i, p = ae(i, Km), v = f[e] || n, g = tl(d[e], o), h = rl(E({
    className: r
  }, c, {
    externalForwardedProps: e === "root" ? p : void 0,
    externalSlotProps: g
  })), {
    props: {
      component: m
    },
    internalRef: O
  } = h, C = ae(h.props, Xm), w = ze(O, g == null ? void 0 : g.ref, t.ref), T = a ? a(C) : {}, x = E({}, o, T), S = e === "root" ? m || u : m, R = xr(v, E({}, e === "root" && !u && !f[e] && l, e !== "root" && !f[e] && l, C, S && {
    as: S
  }, {
    ref: w
  }), x);
  return Object.keys(T).forEach((A) => {
    delete R[A];
  }), [v, R];
}
function ec(e) {
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
  } = e, [f, d] = b.useState(!1), p = se(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), v = {
    width: a,
    height: a,
    top: -(a / 2) + i,
    left: -(a / 2) + o
  }, g = se(r.child, f && r.childLeaving, n && r.childPulsate);
  return !l && !f && d(!0), b.useEffect(() => {
    if (!l && c != null) {
      const h = setTimeout(c, u);
      return () => {
        clearTimeout(h);
      };
    }
  }, [c, l, u]), /* @__PURE__ */ P.jsx("span", {
    className: p,
    style: v,
    children: /* @__PURE__ */ P.jsx("span", {
      className: g
    })
  });
}
process.env.NODE_ENV !== "production" && (ec.propTypes = {
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
const lt = je("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Zm = ["center", "classes", "className"];
let To = (e) => e, la, ca, ua, fa;
const si = 550, Qm = 80, ev = po(la || (la = To`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), tv = po(ca || (ca = To`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), rv = po(ua || (ua = To`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), nv = fe("span", {
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
}), ov = fe(ec, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(fa || (fa = To`
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
`), lt.rippleVisible, ev, si, ({
  theme: e
}) => e.transitions.easing.easeInOut, lt.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, lt.child, lt.childLeaving, tv, si, ({
  theme: e
}) => e.transitions.easing.easeInOut, lt.childPulsate, rv, ({
  theme: e
}) => e.transitions.easing.easeInOut), tc = /* @__PURE__ */ b.forwardRef(function(t, r) {
  const n = Me({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: a
  } = n, l = ae(n, Zm), [c, u] = b.useState([]), f = b.useRef(0), d = b.useRef(null);
  b.useEffect(() => {
    d.current && (d.current(), d.current = null);
  }, [c]);
  const p = b.useRef(!1), v = Zt(), g = b.useRef(null), h = b.useRef(null), m = b.useCallback((T) => {
    const {
      pulsate: x,
      rippleX: S,
      rippleY: R,
      rippleSize: A,
      cb: D
    } = T;
    u((N) => [...N, /* @__PURE__ */ P.jsx(ov, {
      classes: {
        ripple: se(i.ripple, lt.ripple),
        rippleVisible: se(i.rippleVisible, lt.rippleVisible),
        ripplePulsate: se(i.ripplePulsate, lt.ripplePulsate),
        child: se(i.child, lt.child),
        childLeaving: se(i.childLeaving, lt.childLeaving),
        childPulsate: se(i.childPulsate, lt.childPulsate)
      },
      timeout: si,
      pulsate: x,
      rippleX: S,
      rippleY: R,
      rippleSize: A
    }, f.current)]), f.current += 1, d.current = D;
  }, [i]), O = b.useCallback((T = {}, x = {}, S = () => {
  }) => {
    const {
      pulsate: R = !1,
      center: A = o || x.pulsate,
      fakeElement: D = !1
      // For test purposes
    } = x;
    if ((T == null ? void 0 : T.type) === "mousedown" && p.current) {
      p.current = !1;
      return;
    }
    (T == null ? void 0 : T.type) === "touchstart" && (p.current = !0);
    const N = D ? null : h.current, L = N ? N.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let Y, F, I;
    if (A || T === void 0 || T.clientX === 0 && T.clientY === 0 || !T.clientX && !T.touches)
      Y = Math.round(L.width / 2), F = Math.round(L.height / 2);
    else {
      const {
        clientX: B,
        clientY: M
      } = T.touches && T.touches.length > 0 ? T.touches[0] : T;
      Y = Math.round(B - L.left), F = Math.round(M - L.top);
    }
    if (A)
      I = Math.sqrt((2 * L.width ** 2 + L.height ** 2) / 3), I % 2 === 0 && (I += 1);
    else {
      const B = Math.max(Math.abs((N ? N.clientWidth : 0) - Y), Y) * 2 + 2, M = Math.max(Math.abs((N ? N.clientHeight : 0) - F), F) * 2 + 2;
      I = Math.sqrt(B ** 2 + M ** 2);
    }
    T != null && T.touches ? g.current === null && (g.current = () => {
      m({
        pulsate: R,
        rippleX: Y,
        rippleY: F,
        rippleSize: I,
        cb: S
      });
    }, v.start(Qm, () => {
      g.current && (g.current(), g.current = null);
    })) : m({
      pulsate: R,
      rippleX: Y,
      rippleY: F,
      rippleSize: I,
      cb: S
    });
  }, [o, m, v]), C = b.useCallback(() => {
    O({}, {
      pulsate: !0
    });
  }, [O]), w = b.useCallback((T, x) => {
    if (v.clear(), (T == null ? void 0 : T.type) === "touchend" && g.current) {
      g.current(), g.current = null, v.start(0, () => {
        w(T, x);
      });
      return;
    }
    g.current = null, u((S) => S.length > 0 ? S.slice(1) : S), d.current = x;
  }, [v]);
  return b.useImperativeHandle(r, () => ({
    pulsate: C,
    start: O,
    stop: w
  }), [C, O, w]), /* @__PURE__ */ P.jsx(nv, E({
    className: se(lt.root, i.root, a),
    ref: h
  }, l, {
    children: /* @__PURE__ */ P.jsx(Xh, {
      component: null,
      exit: !0,
      children: c
    })
  }));
});
process.env.NODE_ENV !== "production" && (tc.propTypes = {
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
const iv = tc;
function sv(e) {
  return ke("MuiButtonBase", e);
}
const av = je("MuiButtonBase", ["root", "disabled", "focusVisible"]), lv = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], cv = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, a = Ae({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, sv, o);
  return r && n && (a.root += ` ${n}`), a;
}, uv = fe("button", {
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
  [`&.${av.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), rc = /* @__PURE__ */ b.forwardRef(function(t, r) {
  const n = Me({
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
    LinkComponent: v = "a",
    onBlur: g,
    onClick: h,
    onContextMenu: m,
    onDragLeave: O,
    onFocus: C,
    onFocusVisible: w,
    onKeyDown: T,
    onKeyUp: x,
    onMouseDown: S,
    onMouseLeave: R,
    onMouseUp: A,
    onTouchEnd: D,
    onTouchMove: N,
    onTouchStart: L,
    tabIndex: Y = 0,
    TouchRippleProps: F,
    touchRippleRef: I,
    type: B
  } = n, M = ae(n, lv), V = b.useRef(null), j = b.useRef(null), X = ze(j, I), {
    isFocusVisibleRef: _,
    onFocus: W,
    onBlur: re,
    ref: te
  } = hi(), [H, Z] = b.useState(!1);
  u && H && Z(!1), b.useImperativeHandle(o, () => ({
    focusVisible: () => {
      Z(!0), V.current.focus();
    }
  }), []);
  const [k, G] = b.useState(!1);
  b.useEffect(() => {
    G(!0);
  }, []);
  const q = k && !f && !u;
  b.useEffect(() => {
    H && p && !f && k && j.current.pulsate();
  }, [f, p, H, k]);
  function J(ie, Be, Rt = d) {
    return Pt((bt) => (Be && Be(bt), !Rt && j.current && j.current[ie](bt), !0));
  }
  const ee = J("start", S), le = J("stop", m), z = J("stop", O), Oe = J("stop", A), K = J("stop", (ie) => {
    H && ie.preventDefault(), R && R(ie);
  }), Te = J("start", L), Ie = J("stop", D), nt = J("stop", N), Ne = J("stop", (ie) => {
    re(ie), _.current === !1 && Z(!1), g && g(ie);
  }, !1), mt = Pt((ie) => {
    V.current || (V.current = ie.currentTarget), W(ie), _.current === !0 && (Z(!0), w && w(ie)), C && C(ie);
  }), De = () => {
    const ie = V.current;
    return c && c !== "button" && !(ie.tagName === "A" && ie.href);
  }, ot = b.useRef(!1), Xe = Pt((ie) => {
    p && !ot.current && H && j.current && ie.key === " " && (ot.current = !0, j.current.stop(ie, () => {
      j.current.start(ie);
    })), ie.target === ie.currentTarget && De() && ie.key === " " && ie.preventDefault(), T && T(ie), ie.target === ie.currentTarget && De() && ie.key === "Enter" && !u && (ie.preventDefault(), h && h(ie));
  }), yt = Pt((ie) => {
    p && ie.key === " " && j.current && H && !ie.defaultPrevented && (ot.current = !1, j.current.stop(ie, () => {
      j.current.pulsate(ie);
    })), x && x(ie), h && ie.target === ie.currentTarget && De() && ie.key === " " && !ie.defaultPrevented && h(ie);
  });
  let Je = c;
  Je === "button" && (M.href || M.to) && (Je = v);
  const We = {};
  Je === "button" ? (We.type = B === void 0 ? "button" : B, We.disabled = u) : (!M.href && !M.to && (We.role = "button"), u && (We["aria-disabled"] = u));
  const it = ze(r, te, V);
  process.env.NODE_ENV !== "production" && b.useEffect(() => {
    q && !j.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [q]);
  const Ue = E({}, n, {
    centerRipple: i,
    component: c,
    disabled: u,
    disableRipple: f,
    disableTouchRipple: d,
    focusRipple: p,
    tabIndex: Y,
    focusVisible: H
  }), At = cv(Ue);
  return /* @__PURE__ */ P.jsxs(uv, E({
    as: Je,
    className: se(At.root, l),
    ownerState: Ue,
    onBlur: Ne,
    onClick: h,
    onContextMenu: le,
    onFocus: mt,
    onKeyDown: Xe,
    onKeyUp: yt,
    onMouseDown: ee,
    onMouseLeave: K,
    onMouseUp: Oe,
    onDragLeave: z,
    onTouchEnd: Ie,
    onTouchMove: nt,
    onTouchStart: Te,
    ref: it,
    tabIndex: u ? -1 : Y,
    type: B
  }, We, M, {
    children: [a, q ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ P.jsx(iv, E({
        ref: X,
        center: i
      }, F))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (rc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: pi,
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
  component: Ua,
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
const Qn = rc;
function fv(e) {
  return ke("MuiIconButton", e);
}
const dv = je("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), pv = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], hv = (e) => {
  const {
    classes: t,
    disabled: r,
    color: n,
    edge: o,
    size: i
  } = e, a = {
    root: ["root", r && "disabled", n !== "default" && `color${ne(n)}`, o && `edge${ne(o)}`, `size${ne(i)}`]
  };
  return Ae(a, fv, t);
}, mv = fe(Qn, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "default" && t[`color${ne(r.color)}`], r.edge && t[`edge${ne(r.edge)}`], t[`size${ne(r.size)}`]];
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
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : _e(e.palette.action.active, e.palette.action.hoverOpacity),
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
      backgroundColor: e.vars ? `rgba(${n.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : _e(n.main, e.palette.action.hoverOpacity)
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
    [`&.${dv.disabled}`]: {
      backgroundColor: "transparent",
      color: (e.vars || e).palette.action.disabled
    }
  });
}), nc = /* @__PURE__ */ b.forwardRef(function(t, r) {
  const n = Me({
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
  } = n, d = ae(n, pv), p = E({}, n, {
    edge: o,
    color: l,
    disabled: c,
    disableFocusRipple: u,
    size: f
  }), v = hv(p);
  return /* @__PURE__ */ P.jsx(mv, E({
    className: se(v.root, a),
    centerRipple: !0,
    focusRipple: !u,
    disabled: c,
    ref: r
  }, d, {
    ownerState: p,
    children: i
  }));
});
process.env.NODE_ENV !== "production" && (nc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: or(s.node, (e) => b.Children.toArray(e.children).some((r) => /* @__PURE__ */ b.isValidElement(r) && r.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
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
const vv = nc;
function gv(e) {
  return ke("MuiTypography", e);
}
je("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const yv = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"], bv = (e) => {
  const {
    align: t,
    gutterBottom: r,
    noWrap: n,
    paragraph: o,
    variant: i,
    classes: a
  } = e, l = {
    root: ["root", i, e.align !== "inherit" && `align${ne(t)}`, r && "gutterBottom", n && "noWrap", o && "paragraph"]
  };
  return Ae(l, gv, a);
}, xv = fe("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.variant && t[r.variant], r.align !== "inherit" && t[`align${ne(r.align)}`], r.noWrap && t.noWrap, r.gutterBottom && t.gutterBottom, r.paragraph && t.paragraph];
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
})), da = {
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
}, Ev = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, Ov = (e) => Ev[e] || e, oc = /* @__PURE__ */ b.forwardRef(function(t, r) {
  const n = Me({
    props: t,
    name: "MuiTypography"
  }), o = Ov(n.color), i = Pi(E({}, n, {
    color: o
  })), {
    align: a = "inherit",
    className: l,
    component: c,
    gutterBottom: u = !1,
    noWrap: f = !1,
    paragraph: d = !1,
    variant: p = "body1",
    variantMapping: v = da
  } = i, g = ae(i, yv), h = E({}, i, {
    align: a,
    color: o,
    className: l,
    component: c,
    gutterBottom: u,
    noWrap: f,
    paragraph: d,
    variant: p,
    variantMapping: v
  }), m = c || (d ? "p" : v[p] || da[p]) || "span", O = bv(h);
  return /* @__PURE__ */ P.jsx(xv, E({
    as: m,
    ref: r,
    ownerState: h,
    className: se(O.root, l)
  }, g));
});
process.env.NODE_ENV !== "production" && (oc.propTypes = {
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
const _t = oc, ic = "base";
function Tv(e) {
  return `${ic}--${e}`;
}
function wv(e, t) {
  return `${ic}-${e}-${t}`;
}
function sc(e, t) {
  const r = Za[t];
  return r ? Tv(r) : wv(e, t);
}
function Sv(e, t) {
  const r = {};
  return t.forEach((n) => {
    r[n] = sc(e, n);
  }), r;
}
var He = "top", dt = "bottom", pt = "right", Ge = "left", Fi = "auto", vn = [He, dt, pt, Ge], Cr = "start", sn = "end", Rv = "clippingParents", ac = "viewport", Ur = "popper", Cv = "reference", pa = /* @__PURE__ */ vn.reduce(function(e, t) {
  return e.concat([t + "-" + Cr, t + "-" + sn]);
}, []), lc = /* @__PURE__ */ [].concat(vn, [Fi]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Cr, t + "-" + sn]);
}, []), Pv = "beforeRead", _v = "read", $v = "afterRead", Nv = "beforeMain", kv = "main", jv = "afterMain", Mv = "beforeWrite", Av = "write", Iv = "afterWrite", Dv = [Pv, _v, $v, Nv, kv, jv, Mv, Av, Iv];
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
function nr(e) {
  var t = rt(e).Element;
  return e instanceof t || e instanceof Element;
}
function ut(e) {
  var t = rt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Wi(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = rt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Lv(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, o = t.attributes[r] || {}, i = t.elements[r];
    !ut(i) || !wt(i) || (Object.assign(i.style, n), Object.keys(o).forEach(function(a) {
      var l = o[a];
      l === !1 ? i.removeAttribute(a) : i.setAttribute(a, l === !0 ? "" : l);
    }));
  });
}
function Vv(e) {
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
const zv = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Lv,
  effect: Vv,
  requires: ["computeStyles"]
};
function Tt(e) {
  return e.split("-")[0];
}
var er = Math.max, eo = Math.min, Pr = Math.round;
function ai() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function cc() {
  return !/^((?!chrome|android).)*safari/i.test(ai());
}
function _r(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), o = 1, i = 1;
  t && ut(e) && (o = e.offsetWidth > 0 && Pr(n.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Pr(n.height) / e.offsetHeight || 1);
  var a = nr(e) ? rt(e) : window, l = a.visualViewport, c = !cc() && r, u = (n.left + (c && l ? l.offsetLeft : 0)) / o, f = (n.top + (c && l ? l.offsetTop : 0)) / i, d = n.width / o, p = n.height / i;
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
function Bi(e) {
  var t = _r(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function uc(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && Wi(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function kt(e) {
  return rt(e).getComputedStyle(e);
}
function Fv(e) {
  return ["table", "td", "th"].indexOf(wt(e)) >= 0;
}
function qt(e) {
  return ((nr(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function wo(e) {
  return wt(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Wi(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    qt(e)
  );
}
function ha(e) {
  return !ut(e) || // https://github.com/popperjs/popper-core/issues/837
  kt(e).position === "fixed" ? null : e.offsetParent;
}
function Wv(e) {
  var t = /firefox/i.test(ai()), r = /Trident/i.test(ai());
  if (r && ut(e)) {
    var n = kt(e);
    if (n.position === "fixed")
      return null;
  }
  var o = wo(e);
  for (Wi(o) && (o = o.host); ut(o) && ["html", "body"].indexOf(wt(o)) < 0; ) {
    var i = kt(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function gn(e) {
  for (var t = rt(e), r = ha(e); r && Fv(r) && kt(r).position === "static"; )
    r = ha(r);
  return r && (wt(r) === "html" || wt(r) === "body" && kt(r).position === "static") ? t : r || Wv(e) || t;
}
function Ui(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Jr(e, t, r) {
  return er(e, eo(t, r));
}
function Bv(e, t, r) {
  var n = Jr(e, t, r);
  return n > r ? r : n;
}
function fc() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function dc(e) {
  return Object.assign({}, fc(), e);
}
function pc(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var Uv = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, dc(typeof t != "number" ? t : pc(t, vn));
};
function qv(e) {
  var t, r = e.state, n = e.name, o = e.options, i = r.elements.arrow, a = r.modifiersData.popperOffsets, l = Tt(r.placement), c = Ui(l), u = [Ge, pt].indexOf(l) >= 0, f = u ? "height" : "width";
  if (!(!i || !a)) {
    var d = Uv(o.padding, r), p = Bi(i), v = c === "y" ? He : Ge, g = c === "y" ? dt : pt, h = r.rects.reference[f] + r.rects.reference[c] - a[c] - r.rects.popper[f], m = a[c] - r.rects.reference[c], O = gn(i), C = O ? c === "y" ? O.clientHeight || 0 : O.clientWidth || 0 : 0, w = h / 2 - m / 2, T = d[v], x = C - p[f] - d[g], S = C / 2 - p[f] / 2 + w, R = Jr(T, S, x), A = c;
    r.modifiersData[n] = (t = {}, t[A] = R, t.centerOffset = R - S, t);
  }
}
function Yv(e) {
  var t = e.state, r = e.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || uc(t.elements.popper, o) && (t.elements.arrow = o));
}
const Hv = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: qv,
  effect: Yv,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function $r(e) {
  return e.split("-")[1];
}
var Gv = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Kv(e, t) {
  var r = e.x, n = e.y, o = t.devicePixelRatio || 1;
  return {
    x: Pr(r * o) / o || 0,
    y: Pr(n * o) / o || 0
  };
}
function ma(e) {
  var t, r = e.popper, n = e.popperRect, o = e.placement, i = e.variation, a = e.offsets, l = e.position, c = e.gpuAcceleration, u = e.adaptive, f = e.roundOffsets, d = e.isFixed, p = a.x, v = p === void 0 ? 0 : p, g = a.y, h = g === void 0 ? 0 : g, m = typeof f == "function" ? f({
    x: v,
    y: h
  }) : {
    x: v,
    y: h
  };
  v = m.x, h = m.y;
  var O = a.hasOwnProperty("x"), C = a.hasOwnProperty("y"), w = Ge, T = He, x = window;
  if (u) {
    var S = gn(r), R = "clientHeight", A = "clientWidth";
    if (S === rt(r) && (S = qt(r), kt(S).position !== "static" && l === "absolute" && (R = "scrollHeight", A = "scrollWidth")), S = S, o === He || (o === Ge || o === pt) && i === sn) {
      T = dt;
      var D = d && S === x && x.visualViewport ? x.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        S[R]
      );
      h -= D - n.height, h *= c ? 1 : -1;
    }
    if (o === Ge || (o === He || o === dt) && i === sn) {
      w = pt;
      var N = d && S === x && x.visualViewport ? x.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        S[A]
      );
      v -= N - n.width, v *= c ? 1 : -1;
    }
  }
  var L = Object.assign({
    position: l
  }, u && Gv), Y = f === !0 ? Kv({
    x: v,
    y: h
  }, rt(r)) : {
    x: v,
    y: h
  };
  if (v = Y.x, h = Y.y, c) {
    var F;
    return Object.assign({}, L, (F = {}, F[T] = C ? "0" : "", F[w] = O ? "0" : "", F.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + h + "px)" : "translate3d(" + v + "px, " + h + "px, 0)", F));
  }
  return Object.assign({}, L, (t = {}, t[T] = C ? h + "px" : "", t[w] = O ? v + "px" : "", t.transform = "", t));
}
function Xv(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, o = n === void 0 ? !0 : n, i = r.adaptive, a = i === void 0 ? !0 : i, l = r.roundOffsets, c = l === void 0 ? !0 : l, u = {
    placement: Tt(t.placement),
    variation: $r(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ma(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ma(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Jv = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Xv,
  data: {}
};
var $n = {
  passive: !0
};
function Zv(e) {
  var t = e.state, r = e.instance, n = e.options, o = n.scroll, i = o === void 0 ? !0 : o, a = n.resize, l = a === void 0 ? !0 : a, c = rt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(f) {
    f.addEventListener("scroll", r.update, $n);
  }), l && c.addEventListener("resize", r.update, $n), function() {
    i && u.forEach(function(f) {
      f.removeEventListener("scroll", r.update, $n);
    }), l && c.removeEventListener("resize", r.update, $n);
  };
}
const Qv = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Zv,
  data: {}
};
var eg = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Fn(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return eg[t];
  });
}
var tg = {
  start: "end",
  end: "start"
};
function va(e) {
  return e.replace(/start|end/g, function(t) {
    return tg[t];
  });
}
function qi(e) {
  var t = rt(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function Yi(e) {
  return _r(qt(e)).left + qi(e).scrollLeft;
}
function rg(e, t) {
  var r = rt(e), n = qt(e), o = r.visualViewport, i = n.clientWidth, a = n.clientHeight, l = 0, c = 0;
  if (o) {
    i = o.width, a = o.height;
    var u = cc();
    (u || !u && t === "fixed") && (l = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: l + Yi(e),
    y: c
  };
}
function ng(e) {
  var t, r = qt(e), n = qi(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = er(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), a = er(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), l = -n.scrollLeft + Yi(e), c = -n.scrollTop;
  return kt(o || r).direction === "rtl" && (l += er(r.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: a,
    x: l,
    y: c
  };
}
function Hi(e) {
  var t = kt(e), r = t.overflow, n = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function hc(e) {
  return ["html", "body", "#document"].indexOf(wt(e)) >= 0 ? e.ownerDocument.body : ut(e) && Hi(e) ? e : hc(wo(e));
}
function Zr(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = hc(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), i = rt(n), a = o ? [i].concat(i.visualViewport || [], Hi(n) ? n : []) : n, l = t.concat(a);
  return o ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(Zr(wo(a)))
  );
}
function li(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function og(e, t) {
  var r = _r(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function ga(e, t, r) {
  return t === ac ? li(rg(e, r)) : nr(t) ? og(t, r) : li(ng(qt(e)));
}
function ig(e) {
  var t = Zr(wo(e)), r = ["absolute", "fixed"].indexOf(kt(e).position) >= 0, n = r && ut(e) ? gn(e) : e;
  return nr(n) ? t.filter(function(o) {
    return nr(o) && uc(o, n) && wt(o) !== "body";
  }) : [];
}
function sg(e, t, r, n) {
  var o = t === "clippingParents" ? ig(e) : [].concat(t), i = [].concat(o, [r]), a = i[0], l = i.reduce(function(c, u) {
    var f = ga(e, u, n);
    return c.top = er(f.top, c.top), c.right = eo(f.right, c.right), c.bottom = eo(f.bottom, c.bottom), c.left = er(f.left, c.left), c;
  }, ga(e, a, n));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function mc(e) {
  var t = e.reference, r = e.element, n = e.placement, o = n ? Tt(n) : null, i = n ? $r(n) : null, a = t.x + t.width / 2 - r.width / 2, l = t.y + t.height / 2 - r.height / 2, c;
  switch (o) {
    case He:
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
    case Ge:
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
  var u = o ? Ui(o) : null;
  if (u != null) {
    var f = u === "y" ? "height" : "width";
    switch (i) {
      case Cr:
        c[u] = c[u] - (t[f] / 2 - r[f] / 2);
        break;
      case sn:
        c[u] = c[u] + (t[f] / 2 - r[f] / 2);
        break;
    }
  }
  return c;
}
function an(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = n === void 0 ? e.placement : n, i = r.strategy, a = i === void 0 ? e.strategy : i, l = r.boundary, c = l === void 0 ? Rv : l, u = r.rootBoundary, f = u === void 0 ? ac : u, d = r.elementContext, p = d === void 0 ? Ur : d, v = r.altBoundary, g = v === void 0 ? !1 : v, h = r.padding, m = h === void 0 ? 0 : h, O = dc(typeof m != "number" ? m : pc(m, vn)), C = p === Ur ? Cv : Ur, w = e.rects.popper, T = e.elements[g ? C : p], x = sg(nr(T) ? T : T.contextElement || qt(e.elements.popper), c, f, a), S = _r(e.elements.reference), R = mc({
    reference: S,
    element: w,
    strategy: "absolute",
    placement: o
  }), A = li(Object.assign({}, w, R)), D = p === Ur ? A : S, N = {
    top: x.top - D.top + O.top,
    bottom: D.bottom - x.bottom + O.bottom,
    left: x.left - D.left + O.left,
    right: D.right - x.right + O.right
  }, L = e.modifiersData.offset;
  if (p === Ur && L) {
    var Y = L[o];
    Object.keys(N).forEach(function(F) {
      var I = [pt, dt].indexOf(F) >= 0 ? 1 : -1, B = [He, dt].indexOf(F) >= 0 ? "y" : "x";
      N[F] += Y[B] * I;
    });
  }
  return N;
}
function ag(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = r.boundary, i = r.rootBoundary, a = r.padding, l = r.flipVariations, c = r.allowedAutoPlacements, u = c === void 0 ? lc : c, f = $r(n), d = f ? l ? pa : pa.filter(function(g) {
    return $r(g) === f;
  }) : vn, p = d.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  p.length === 0 && (p = d);
  var v = p.reduce(function(g, h) {
    return g[h] = an(e, {
      placement: h,
      boundary: o,
      rootBoundary: i,
      padding: a
    })[Tt(h)], g;
  }, {});
  return Object.keys(v).sort(function(g, h) {
    return v[g] - v[h];
  });
}
function lg(e) {
  if (Tt(e) === Fi)
    return [];
  var t = Fn(e);
  return [va(e), t, va(t)];
}
function cg(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = r.mainAxis, i = o === void 0 ? !0 : o, a = r.altAxis, l = a === void 0 ? !0 : a, c = r.fallbackPlacements, u = r.padding, f = r.boundary, d = r.rootBoundary, p = r.altBoundary, v = r.flipVariations, g = v === void 0 ? !0 : v, h = r.allowedAutoPlacements, m = t.options.placement, O = Tt(m), C = O === m, w = c || (C || !g ? [Fn(m)] : lg(m)), T = [m].concat(w).reduce(function(H, Z) {
      return H.concat(Tt(Z) === Fi ? ag(t, {
        placement: Z,
        boundary: f,
        rootBoundary: d,
        padding: u,
        flipVariations: g,
        allowedAutoPlacements: h
      }) : Z);
    }, []), x = t.rects.reference, S = t.rects.popper, R = /* @__PURE__ */ new Map(), A = !0, D = T[0], N = 0; N < T.length; N++) {
      var L = T[N], Y = Tt(L), F = $r(L) === Cr, I = [He, dt].indexOf(Y) >= 0, B = I ? "width" : "height", M = an(t, {
        placement: L,
        boundary: f,
        rootBoundary: d,
        altBoundary: p,
        padding: u
      }), V = I ? F ? pt : Ge : F ? dt : He;
      x[B] > S[B] && (V = Fn(V));
      var j = Fn(V), X = [];
      if (i && X.push(M[Y] <= 0), l && X.push(M[V] <= 0, M[j] <= 0), X.every(function(H) {
        return H;
      })) {
        D = L, A = !1;
        break;
      }
      R.set(L, X);
    }
    if (A)
      for (var _ = g ? 3 : 1, W = function(Z) {
        var k = T.find(function(G) {
          var q = R.get(G);
          if (q)
            return q.slice(0, Z).every(function(J) {
              return J;
            });
        });
        if (k)
          return D = k, "break";
      }, re = _; re > 0; re--) {
        var te = W(re);
        if (te === "break")
          break;
      }
    t.placement !== D && (t.modifiersData[n]._skip = !0, t.placement = D, t.reset = !0);
  }
}
const ug = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: cg,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function ya(e, t, r) {
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
function ba(e) {
  return [He, pt, dt, Ge].some(function(t) {
    return e[t] >= 0;
  });
}
function fg(e) {
  var t = e.state, r = e.name, n = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, a = an(t, {
    elementContext: "reference"
  }), l = an(t, {
    altBoundary: !0
  }), c = ya(a, n), u = ya(l, o, i), f = ba(c), d = ba(u);
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
const dg = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: fg
};
function pg(e, t, r) {
  var n = Tt(e), o = [Ge, He].indexOf(n) >= 0 ? -1 : 1, i = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, a = i[0], l = i[1];
  return a = a || 0, l = (l || 0) * o, [Ge, pt].indexOf(n) >= 0 ? {
    x: l,
    y: a
  } : {
    x: a,
    y: l
  };
}
function hg(e) {
  var t = e.state, r = e.options, n = e.name, o = r.offset, i = o === void 0 ? [0, 0] : o, a = lc.reduce(function(f, d) {
    return f[d] = pg(d, t.rects, i), f;
  }, {}), l = a[t.placement], c = l.x, u = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += u), t.modifiersData[n] = a;
}
const mg = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: hg
};
function vg(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = mc({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const gg = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: vg,
  data: {}
};
function yg(e) {
  return e === "x" ? "y" : "x";
}
function bg(e) {
  var t = e.state, r = e.options, n = e.name, o = r.mainAxis, i = o === void 0 ? !0 : o, a = r.altAxis, l = a === void 0 ? !1 : a, c = r.boundary, u = r.rootBoundary, f = r.altBoundary, d = r.padding, p = r.tether, v = p === void 0 ? !0 : p, g = r.tetherOffset, h = g === void 0 ? 0 : g, m = an(t, {
    boundary: c,
    rootBoundary: u,
    padding: d,
    altBoundary: f
  }), O = Tt(t.placement), C = $r(t.placement), w = !C, T = Ui(O), x = yg(T), S = t.modifiersData.popperOffsets, R = t.rects.reference, A = t.rects.popper, D = typeof h == "function" ? h(Object.assign({}, t.rects, {
    placement: t.placement
  })) : h, N = typeof D == "number" ? {
    mainAxis: D,
    altAxis: D
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, D), L = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, Y = {
    x: 0,
    y: 0
  };
  if (S) {
    if (i) {
      var F, I = T === "y" ? He : Ge, B = T === "y" ? dt : pt, M = T === "y" ? "height" : "width", V = S[T], j = V + m[I], X = V - m[B], _ = v ? -A[M] / 2 : 0, W = C === Cr ? R[M] : A[M], re = C === Cr ? -A[M] : -R[M], te = t.elements.arrow, H = v && te ? Bi(te) : {
        width: 0,
        height: 0
      }, Z = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : fc(), k = Z[I], G = Z[B], q = Jr(0, R[M], H[M]), J = w ? R[M] / 2 - _ - q - k - N.mainAxis : W - q - k - N.mainAxis, ee = w ? -R[M] / 2 + _ + q + G + N.mainAxis : re + q + G + N.mainAxis, le = t.elements.arrow && gn(t.elements.arrow), z = le ? T === "y" ? le.clientTop || 0 : le.clientLeft || 0 : 0, Oe = (F = L == null ? void 0 : L[T]) != null ? F : 0, K = V + J - Oe - z, Te = V + ee - Oe, Ie = Jr(v ? eo(j, K) : j, V, v ? er(X, Te) : X);
      S[T] = Ie, Y[T] = Ie - V;
    }
    if (l) {
      var nt, Ne = T === "x" ? He : Ge, mt = T === "x" ? dt : pt, De = S[x], ot = x === "y" ? "height" : "width", Xe = De + m[Ne], yt = De - m[mt], Je = [He, Ge].indexOf(O) !== -1, We = (nt = L == null ? void 0 : L[x]) != null ? nt : 0, it = Je ? Xe : De - R[ot] - A[ot] - We + N.altAxis, Ue = Je ? De + R[ot] + A[ot] - We - N.altAxis : yt, At = v && Je ? Bv(it, De, Ue) : Jr(v ? it : Xe, De, v ? Ue : yt);
      S[x] = At, Y[x] = At - De;
    }
    t.modifiersData[n] = Y;
  }
}
const xg = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: bg,
  requiresIfExists: ["offset"]
};
function Eg(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Og(e) {
  return e === rt(e) || !ut(e) ? qi(e) : Eg(e);
}
function Tg(e) {
  var t = e.getBoundingClientRect(), r = Pr(t.width) / e.offsetWidth || 1, n = Pr(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function wg(e, t, r) {
  r === void 0 && (r = !1);
  var n = ut(t), o = ut(t) && Tg(t), i = qt(t), a = _r(e, o, r), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((wt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Hi(i)) && (l = Og(t)), ut(t) ? (c = _r(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : i && (c.x = Yi(i))), {
    x: a.left + l.scrollLeft - c.x,
    y: a.top + l.scrollTop - c.y,
    width: a.width,
    height: a.height
  };
}
function Sg(e) {
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
function Rg(e) {
  var t = Sg(e);
  return Dv.reduce(function(r, n) {
    return r.concat(t.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function Cg(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function Pg(e) {
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
var xa = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Ea() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function _g(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, o = t.defaultOptions, i = o === void 0 ? xa : o;
  return function(l, c, u) {
    u === void 0 && (u = i);
    var f = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, xa, i),
      modifiersData: {},
      elements: {
        reference: l,
        popper: c
      },
      attributes: {},
      styles: {}
    }, d = [], p = !1, v = {
      state: f,
      setOptions: function(O) {
        var C = typeof O == "function" ? O(f.options) : O;
        h(), f.options = Object.assign({}, i, f.options, C), f.scrollParents = {
          reference: nr(l) ? Zr(l) : l.contextElement ? Zr(l.contextElement) : [],
          popper: Zr(c)
        };
        var w = Rg(Pg([].concat(n, f.options.modifiers)));
        return f.orderedModifiers = w.filter(function(T) {
          return T.enabled;
        }), g(), v.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!p) {
          var O = f.elements, C = O.reference, w = O.popper;
          if (Ea(C, w)) {
            f.rects = {
              reference: wg(C, gn(w), f.options.strategy === "fixed"),
              popper: Bi(w)
            }, f.reset = !1, f.placement = f.options.placement, f.orderedModifiers.forEach(function(N) {
              return f.modifiersData[N.name] = Object.assign({}, N.data);
            });
            for (var T = 0; T < f.orderedModifiers.length; T++) {
              if (f.reset === !0) {
                f.reset = !1, T = -1;
                continue;
              }
              var x = f.orderedModifiers[T], S = x.fn, R = x.options, A = R === void 0 ? {} : R, D = x.name;
              typeof S == "function" && (f = S({
                state: f,
                options: A,
                name: D,
                instance: v
              }) || f);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Cg(function() {
        return new Promise(function(m) {
          v.forceUpdate(), m(f);
        });
      }),
      destroy: function() {
        h(), p = !0;
      }
    };
    if (!Ea(l, c))
      return v;
    v.setOptions(u).then(function(m) {
      !p && u.onFirstUpdate && u.onFirstUpdate(m);
    });
    function g() {
      f.orderedModifiers.forEach(function(m) {
        var O = m.name, C = m.options, w = C === void 0 ? {} : C, T = m.effect;
        if (typeof T == "function") {
          var x = T({
            state: f,
            name: O,
            instance: v,
            options: w
          }), S = function() {
          };
          d.push(x || S);
        }
      });
    }
    function h() {
      d.forEach(function(m) {
        return m();
      }), d = [];
    }
    return v;
  };
}
var $g = [Qv, gg, Jv, zv, mg, ug, xg, Hv, dg], Ng = /* @__PURE__ */ _g({
  defaultModifiers: $g
});
const vc = "Popper";
function kg(e) {
  return sc(vc, e);
}
Sv(vc, ["root"]);
const jg = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"], Mg = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];
function Ag(e, t) {
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
function to(e) {
  return typeof e == "function" ? e() : e;
}
function So(e) {
  return e.nodeType !== void 0;
}
function Ig(e) {
  return !So(e);
}
const Dg = () => Ae({
  root: ["root"]
}, qu(kg)), Lg = {}, Vg = /* @__PURE__ */ b.forwardRef(function(t, r) {
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
    slotProps: v = {},
    slots: g = {},
    TransitionProps: h
    // @ts-ignore internal logic
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
  } = t, m = ae(t, jg), O = b.useRef(null), C = ze(O, r), w = b.useRef(null), T = ze(w, p), x = b.useRef(T);
  rr(() => {
    x.current = T;
  }, [T]), b.useImperativeHandle(p, () => w.current, []);
  const S = Ag(f, a), [R, A] = b.useState(S), [D, N] = b.useState(to(o));
  b.useEffect(() => {
    w.current && w.current.forceUpdate();
  }), b.useEffect(() => {
    o && N(to(o));
  }, [o]), rr(() => {
    if (!D || !u)
      return;
    const B = (j) => {
      A(j.placement);
    };
    if (process.env.NODE_ENV !== "production" && D && So(D) && D.nodeType === 1) {
      const j = D.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && j.top === 0 && j.left === 0 && j.right === 0 && j.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let M = [{
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
        state: j
      }) => {
        B(j);
      }
    }];
    c != null && (M = M.concat(c)), d && d.modifiers != null && (M = M.concat(d.modifiers));
    const V = Ng(D, O.current, E({
      placement: S
    }, d, {
      modifiers: M
    }));
    return x.current(V), () => {
      V.destroy(), x.current(null);
    };
  }, [D, l, c, u, d, S]);
  const L = {
    placement: R
  };
  h !== null && (L.TransitionProps = h);
  const Y = Dg(), F = (n = g.root) != null ? n : "div", I = Zo({
    elementType: F,
    externalSlotProps: v.root,
    externalForwardedProps: m,
    additionalProps: {
      role: "tooltip",
      ref: C
    },
    ownerState: t,
    className: Y.root
  });
  return /* @__PURE__ */ P.jsx(F, E({}, I, {
    children: typeof i == "function" ? i(L) : i
  }));
}), gc = /* @__PURE__ */ b.forwardRef(function(t, r) {
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
    popperOptions: p = Lg,
    popperRef: v,
    style: g,
    transition: h = !1,
    slotProps: m = {},
    slots: O = {}
  } = t, C = ae(t, Mg), [w, T] = b.useState(!0), x = () => {
    T(!1);
  }, S = () => {
    T(!0);
  };
  if (!c && !f && (!h || w))
    return null;
  let R;
  if (i)
    R = i;
  else if (n) {
    const N = to(n);
    R = N && So(N) ? gt(N).body : gt(null).body;
  }
  const A = !f && c && (!h || w) ? "none" : void 0, D = h ? {
    in: f,
    onEnter: x,
    onExited: S
  } : void 0;
  return /* @__PURE__ */ P.jsx(en, {
    disablePortal: l,
    container: R,
    children: /* @__PURE__ */ P.jsx(Vg, E({
      anchorEl: n,
      direction: a,
      disablePortal: l,
      modifiers: u,
      ref: r,
      open: h ? !w : f,
      placement: d,
      popperOptions: p,
      popperRef: v,
      slotProps: m,
      slots: O
    }, C, {
      style: E({
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: A
      }, g),
      TransitionProps: D,
      children: o
    }))
  });
});
process.env.NODE_ENV !== "production" && (gc.propTypes = {
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
  anchorEl: or(s.oneOfType([tr, s.object, s.func]), (e) => {
    if (e.open) {
      const t = to(e.anchorEl);
      if (t && So(t) && t.nodeType === 1) {
        const r = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && r.top === 0 && r.left === 0 && r.right === 0 && r.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || Ig(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
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
  container: s.oneOfType([tr, s.func]),
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
  popperRef: pi,
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
var Gi = {};
Object.defineProperty(Gi, "__esModule", {
  value: !0
});
var yc = Gi.default = void 0, zg = Wg(et), Fg = Sl;
function bc(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (bc = function(n) {
    return n ? r : t;
  })(e);
}
function Wg(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = bc(t);
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
function Bg(e) {
  return Object.keys(e).length === 0;
}
function Ug(e = null) {
  const t = zg.useContext(Fg.ThemeContext);
  return !t || Bg(t) ? e : t;
}
yc = Gi.default = Ug;
const qg = ["anchorEl", "component", "components", "componentsProps", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition", "slots", "slotProps"], Yg = fe(gc, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), xc = /* @__PURE__ */ b.forwardRef(function(t, r) {
  var n;
  const o = yc(), i = Me({
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
    modifiers: v,
    open: g,
    placement: h,
    popperOptions: m,
    popperRef: O,
    transition: C,
    slots: w,
    slotProps: T
  } = i, x = ae(i, qg), S = (n = w == null ? void 0 : w.root) != null ? n : c == null ? void 0 : c.Root, R = E({
    anchorEl: a,
    container: f,
    disablePortal: d,
    keepMounted: p,
    modifiers: v,
    open: g,
    placement: h,
    popperOptions: m,
    popperRef: O,
    transition: C
  }, x);
  return /* @__PURE__ */ P.jsx(Yg, E({
    as: l,
    direction: o == null ? void 0 : o.direction,
    slots: {
      root: S
    },
    slotProps: T ?? u
  }, R, {
    ref: r
  }));
});
process.env.NODE_ENV !== "production" && (xc.propTypes = {
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
  anchorEl: s.oneOfType([tr, s.object, s.func]),
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
  container: s.oneOfType([tr, s.func]),
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
  popperRef: pi,
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
const Ec = xc;
function Hg(e) {
  return ke("MuiListSubheader", e);
}
je("MuiListSubheader", ["root", "colorPrimary", "colorInherit", "gutters", "inset", "sticky"]);
const Gg = ["className", "color", "component", "disableGutters", "disableSticky", "inset"], Kg = (e) => {
  const {
    classes: t,
    color: r,
    disableGutters: n,
    inset: o,
    disableSticky: i
  } = e, a = {
    root: ["root", r !== "default" && `color${ne(r)}`, !n && "gutters", o && "inset", !i && "sticky"]
  };
  return Ae(a, Hg, t);
}, Xg = fe("li", {
  name: "MuiListSubheader",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "default" && t[`color${ne(r.color)}`], !r.disableGutters && t.gutters, r.inset && t.inset, !r.disableSticky && t.sticky];
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
})), Ki = /* @__PURE__ */ b.forwardRef(function(t, r) {
  const n = Me({
    props: t,
    name: "MuiListSubheader"
  }), {
    className: o,
    color: i = "default",
    component: a = "li",
    disableGutters: l = !1,
    disableSticky: c = !1,
    inset: u = !1
  } = n, f = ae(n, Gg), d = E({}, n, {
    color: i,
    component: a,
    disableGutters: l,
    disableSticky: c,
    inset: u
  }), p = Kg(d);
  return /* @__PURE__ */ P.jsx(Xg, E({
    as: a,
    className: se(p.root, o),
    ref: r,
    ownerState: d
  }, f));
});
Ki.muiSkipListHighlight = !0;
process.env.NODE_ENV !== "production" && (Ki.propTypes = {
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
const Jg = Ki, Zg = Vi(/* @__PURE__ */ P.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function Qg(e) {
  return ke("MuiChip", e);
}
const ey = je("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), he = ey, ty = ["avatar", "className", "clickable", "color", "component", "deleteIcon", "disabled", "icon", "label", "onClick", "onDelete", "onKeyDown", "onKeyUp", "size", "variant", "tabIndex", "skipFocusWhenDisabled"], ry = (e) => {
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
    root: ["root", c, r && "disabled", `size${ne(n)}`, `color${ne(o)}`, l && "clickable", l && `clickableColor${ne(o)}`, a && "deletable", a && `deletableColor${ne(o)}`, `${c}${ne(o)}`],
    label: ["label", `label${ne(n)}`],
    avatar: ["avatar", `avatar${ne(n)}`, `avatarColor${ne(o)}`],
    icon: ["icon", `icon${ne(n)}`, `iconColor${ne(i)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${ne(n)}`, `deleteIconColor${ne(o)}`, `deleteIcon${ne(c)}Color${ne(o)}`]
  };
  return Ae(u, Qg, t);
}, ny = fe("div", {
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
      [`& .${he.avatar}`]: t.avatar
    }, {
      [`& .${he.avatar}`]: t[`avatar${ne(l)}`]
    }, {
      [`& .${he.avatar}`]: t[`avatarColor${ne(n)}`]
    }, {
      [`& .${he.icon}`]: t.icon
    }, {
      [`& .${he.icon}`]: t[`icon${ne(l)}`]
    }, {
      [`& .${he.icon}`]: t[`iconColor${ne(o)}`]
    }, {
      [`& .${he.deleteIcon}`]: t.deleteIcon
    }, {
      [`& .${he.deleteIcon}`]: t[`deleteIcon${ne(l)}`]
    }, {
      [`& .${he.deleteIcon}`]: t[`deleteIconColor${ne(n)}`]
    }, {
      [`& .${he.deleteIcon}`]: t[`deleteIcon${ne(c)}Color${ne(n)}`]
    }, t.root, t[`size${ne(l)}`], t[`color${ne(n)}`], i && t.clickable, i && n !== "default" && t[`clickableColor${ne(n)})`], a && t.deletable, a && n !== "default" && t[`deletableColor${ne(n)}`], t[c], t[`${c}${ne(n)}`]];
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
    [`&.${he.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${he.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : r,
      fontSize: e.typography.pxToRem(12)
    },
    [`& .${he.avatarColorPrimary}`]: {
      color: (e.vars || e).palette.primary.contrastText,
      backgroundColor: (e.vars || e).palette.primary.dark
    },
    [`& .${he.avatarColorSecondary}`]: {
      color: (e.vars || e).palette.secondary.contrastText,
      backgroundColor: (e.vars || e).palette.secondary.dark
    },
    [`& .${he.avatarSmall}`]: {
      marginLeft: 4,
      marginRight: -4,
      width: 18,
      height: 18,
      fontSize: e.typography.pxToRem(10)
    },
    [`& .${he.icon}`]: E({
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
    [`& .${he.deleteIcon}`]: E({
      WebkitTapHighlightColor: "transparent",
      color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)` : _e(e.palette.text.primary, 0.26),
      fontSize: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : _e(e.palette.text.primary, 0.4)
      }
    }, t.size === "small" && {
      fontSize: 16,
      marginRight: 4,
      marginLeft: -4
    }, t.color !== "default" && {
      color: e.vars ? `rgba(${e.vars.palette[t.color].contrastTextChannel} / 0.7)` : _e(e.palette[t.color].contrastText, 0.7),
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
    [`&.${he.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : _e(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  }, t.onDelete && t.color !== "default" && {
    [`&.${he.focusVisible}`]: {
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
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : _e(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
  },
  [`&.${he.focusVisible}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : _e(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
  },
  "&:active": {
    boxShadow: (e.vars || e).shadows[1]
  }
}, t.clickable && t.color !== "default" && {
  [`&:hover, &.${he.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette[t.color].dark
  }
}), ({
  theme: e,
  ownerState: t
}) => E({}, t.variant === "outlined" && {
  backgroundColor: "transparent",
  border: e.vars ? `1px solid ${e.vars.palette.Chip.defaultBorder}` : `1px solid ${e.palette.mode === "light" ? e.palette.grey[400] : e.palette.grey[700]}`,
  [`&.${he.clickable}:hover`]: {
    backgroundColor: (e.vars || e).palette.action.hover
  },
  [`&.${he.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`& .${he.avatar}`]: {
    marginLeft: 4
  },
  [`& .${he.avatarSmall}`]: {
    marginLeft: 2
  },
  [`& .${he.icon}`]: {
    marginLeft: 4
  },
  [`& .${he.iconSmall}`]: {
    marginLeft: 2
  },
  [`& .${he.deleteIcon}`]: {
    marginRight: 5
  },
  [`& .${he.deleteIconSmall}`]: {
    marginRight: 3
  }
}, t.variant === "outlined" && t.color !== "default" && {
  color: (e.vars || e).palette[t.color].main,
  border: `1px solid ${e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)` : _e(e.palette[t.color].main, 0.7)}`,
  [`&.${he.clickable}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : _e(e.palette[t.color].main, e.palette.action.hoverOpacity)
  },
  [`&.${he.focusVisible}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.focusOpacity})` : _e(e.palette[t.color].main, e.palette.action.focusOpacity)
  },
  [`& .${he.deleteIcon}`]: {
    color: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)` : _e(e.palette[t.color].main, 0.7),
    "&:hover, &:active": {
      color: (e.vars || e).palette[t.color].main
    }
  }
})), oy = fe("span", {
  name: "MuiChip",
  slot: "Label",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e, {
      size: n
    } = r;
    return [t.label, t[`label${ne(n)}`]];
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
function Oa(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const Oc = /* @__PURE__ */ b.forwardRef(function(t, r) {
  const n = Me({
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
    onClick: v,
    onDelete: g,
    onKeyDown: h,
    onKeyUp: m,
    size: O = "medium",
    variant: C = "filled",
    tabIndex: w,
    skipFocusWhenDisabled: T = !1
    // TODO v6: Rename to `focusableWhenDisabled`.
  } = n, x = ae(n, ty), S = b.useRef(null), R = ze(S, r), A = (X) => {
    X.stopPropagation(), g && g(X);
  }, D = (X) => {
    X.currentTarget === X.target && Oa(X) && X.preventDefault(), h && h(X);
  }, N = (X) => {
    X.currentTarget === X.target && (g && Oa(X) ? g(X) : X.key === "Escape" && S.current && S.current.blur()), m && m(X);
  }, L = a !== !1 && v ? !0 : a, Y = L || g ? Qn : c || "div", F = E({}, n, {
    component: Y,
    disabled: f,
    size: O,
    color: l,
    iconColor: /* @__PURE__ */ b.isValidElement(d) && d.props.color || l,
    onDelete: !!g,
    clickable: L,
    variant: C
  }), I = ry(F), B = Y === Qn ? E({
    component: c || "div",
    focusVisibleClassName: I.focusVisible
  }, g && {
    disableRipple: !0
  }) : {};
  let M = null;
  g && (M = u && /* @__PURE__ */ b.isValidElement(u) ? /* @__PURE__ */ b.cloneElement(u, {
    className: se(u.props.className, I.deleteIcon),
    onClick: A
  }) : /* @__PURE__ */ P.jsx(Zg, {
    className: se(I.deleteIcon),
    onClick: A
  }));
  let V = null;
  o && /* @__PURE__ */ b.isValidElement(o) && (V = /* @__PURE__ */ b.cloneElement(o, {
    className: se(I.avatar, o.props.className)
  }));
  let j = null;
  return d && /* @__PURE__ */ b.isValidElement(d) && (j = /* @__PURE__ */ b.cloneElement(d, {
    className: se(I.icon, d.props.className)
  })), process.env.NODE_ENV !== "production" && V && j && console.error("MUI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one."), /* @__PURE__ */ P.jsxs(ny, E({
    as: Y,
    className: se(I.root, i),
    disabled: L && f ? !0 : void 0,
    onClick: v,
    onKeyDown: D,
    onKeyUp: N,
    ref: R,
    tabIndex: T && f ? -1 : w,
    ownerState: F
  }, B, x, {
    children: [V || j, /* @__PURE__ */ P.jsx(oy, {
      className: se(I.label),
      ownerState: F,
      children: p
    }), M]
  }));
});
process.env.NODE_ENV !== "production" && (Oc.propTypes = {
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
  children: Ka,
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
const iy = Oc, sy = Vi(/* @__PURE__ */ P.jsx("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), "Person");
function ay(e) {
  return ke("MuiAvatar", e);
}
je("MuiAvatar", ["root", "colorDefault", "circular", "rounded", "square", "img", "fallback"]);
const ly = ["alt", "children", "className", "component", "slots", "slotProps", "imgProps", "sizes", "src", "srcSet", "variant"], cy = zm(), uy = (e) => {
  const {
    classes: t,
    variant: r,
    colorDefault: n
  } = e;
  return Ae({
    root: ["root", r, n && "colorDefault"],
    img: ["img"],
    fallback: ["fallback"]
  }, ay, t);
}, fy = fe("div", {
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
})), dy = fe("img", {
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
}), py = fe(sy, {
  name: "MuiAvatar",
  slot: "Fallback",
  overridesResolver: (e, t) => t.fallback
})({
  width: "75%",
  height: "75%"
});
function hy({
  crossOrigin: e,
  referrerPolicy: t,
  src: r,
  srcSet: n
}) {
  const [o, i] = b.useState(!1);
  return b.useEffect(() => {
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
const Tc = /* @__PURE__ */ b.forwardRef(function(t, r) {
  const n = cy({
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
    srcSet: v,
    variant: g = "circular"
  } = n, h = ae(n, ly);
  let m = null;
  const O = hy(E({}, f, {
    src: p,
    srcSet: v
  })), C = p || v, w = C && O !== "error", T = E({}, n, {
    colorDefault: !w,
    component: l,
    variant: g
  }), x = uy(T), [S, R] = Jm("img", {
    className: x.img,
    elementType: dy,
    externalForwardedProps: {
      slots: c,
      slotProps: {
        img: E({}, f, u.img)
      }
    },
    additionalProps: {
      alt: o,
      src: p,
      srcSet: v,
      sizes: d
    },
    ownerState: T
  });
  return w ? m = /* @__PURE__ */ P.jsx(S, E({}, R)) : i || i === 0 ? m = i : C && o ? m = o[0] : m = /* @__PURE__ */ P.jsx(py, {
    ownerState: T,
    className: x.fallback
  }), /* @__PURE__ */ P.jsx(fy, E({
    as: l,
    ownerState: T,
    className: se(x.root, a),
    ref: r
  }, h, {
    children: m
  }));
});
process.env.NODE_ENV !== "production" && (Tc.propTypes = {
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
const my = Tc, vy = je("MuiBox", ["root"]), gy = vy, yy = ki(), wc = Zh({
  themeId: Rr,
  defaultTheme: yy,
  defaultClassName: gy.root,
  generateClassName: mi.generate
});
process.env.NODE_ENV !== "production" && (wc.propTypes = {
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
const $t = wc, by = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function ci(e) {
  return `scale(${e}, ${e ** 2})`;
}
const xy = {
  entering: {
    opacity: 1,
    transform: ci(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Wo = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Xi = /* @__PURE__ */ b.forwardRef(function(t, r) {
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
    onExiting: v,
    style: g,
    timeout: h = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: m = Oo
  } = t, O = ae(t, by), C = Zt(), w = b.useRef(), T = St(), x = b.useRef(null), S = ze(x, i.ref, r), R = (B) => (M) => {
    if (B) {
      const V = x.current;
      M === void 0 ? B(V) : B(V, M);
    }
  }, A = R(f), D = R((B, M) => {
    Li(B);
    const {
      duration: V,
      delay: j,
      easing: X
    } = Wt({
      style: g,
      timeout: h,
      easing: a
    }, {
      mode: "enter"
    });
    let _;
    h === "auto" ? (_ = T.transitions.getAutoHeightDuration(B.clientHeight), w.current = _) : _ = V, B.style.transition = [T.transitions.create("opacity", {
      duration: _,
      delay: j
    }), T.transitions.create("transform", {
      duration: Wo ? _ : _ * 0.666,
      delay: j,
      easing: X
    })].join(","), c && c(B, M);
  }), N = R(u), L = R(v), Y = R((B) => {
    const {
      duration: M,
      delay: V,
      easing: j
    } = Wt({
      style: g,
      timeout: h,
      easing: a
    }, {
      mode: "exit"
    });
    let X;
    h === "auto" ? (X = T.transitions.getAutoHeightDuration(B.clientHeight), w.current = X) : X = M, B.style.transition = [T.transitions.create("opacity", {
      duration: X,
      delay: V
    }), T.transitions.create("transform", {
      duration: Wo ? X : X * 0.666,
      delay: Wo ? V : V || X * 0.333,
      easing: j
    })].join(","), B.style.opacity = 0, B.style.transform = ci(0.75), d && d(B);
  }), F = R(p), I = (B) => {
    h === "auto" && C.start(w.current || 0, B), n && n(x.current, B);
  };
  return /* @__PURE__ */ P.jsx(m, E({
    appear: o,
    in: l,
    nodeRef: x,
    onEnter: D,
    onEntered: N,
    onEntering: A,
    onExit: Y,
    onExited: F,
    onExiting: L,
    addEndListener: I,
    timeout: h === "auto" ? null : h
  }, O, {
    children: (B, M) => /* @__PURE__ */ b.cloneElement(i, E({
      style: E({
        opacity: 0,
        transform: ci(0.75),
        visibility: B === "exited" && !l ? "hidden" : void 0
      }, xy[B], g, i.props.style),
      ref: S
    }, M))
  }));
});
process.env.NODE_ENV !== "production" && (Xi.propTypes = {
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
  children: Nr.isRequired,
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
Xi.muiSupportAuto = !0;
const Ta = Xi, Sc = /* @__PURE__ */ b.createContext({});
process.env.NODE_ENV !== "production" && (Sc.displayName = "ListContext");
const ln = Sc;
function Ey(e) {
  return ke("MuiList", e);
}
je("MuiList", ["root", "padding", "dense", "subheader"]);
const Oy = ["children", "className", "component", "dense", "disablePadding", "subheader"], Ty = (e) => {
  const {
    classes: t,
    disablePadding: r,
    dense: n,
    subheader: o
  } = e;
  return Ae({
    root: ["root", !r && "padding", n && "dense", o && "subheader"]
  }, Ey, t);
}, wy = fe("ul", {
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
})), Rc = /* @__PURE__ */ b.forwardRef(function(t, r) {
  const n = Me({
    props: t,
    name: "MuiList"
  }), {
    children: o,
    className: i,
    component: a = "ul",
    dense: l = !1,
    disablePadding: c = !1,
    subheader: u
  } = n, f = ae(n, Oy), d = b.useMemo(() => ({
    dense: l
  }), [l]), p = E({}, n, {
    component: a,
    dense: l,
    disablePadding: c
  }), v = Ty(p);
  return /* @__PURE__ */ P.jsx(ln.Provider, {
    value: d,
    children: /* @__PURE__ */ P.jsxs(wy, E({
      as: a,
      className: se(v.root, i),
      ref: r,
      ownerState: p
    }, f, {
      children: [u, o]
    }))
  });
});
process.env.NODE_ENV !== "production" && (Rc.propTypes = {
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
const Cc = Rc;
function Sy(e) {
  return ke("MuiListItemButton", e);
}
const Ry = je("MuiListItemButton", ["root", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "selected"]), qr = Ry, Cy = ["alignItems", "autoFocus", "component", "children", "dense", "disableGutters", "divider", "focusVisibleClassName", "selected", "className"], Py = (e, t) => {
  const {
    ownerState: r
  } = e;
  return [t.root, r.dense && t.dense, r.alignItems === "flex-start" && t.alignItemsFlexStart, r.divider && t.divider, !r.disableGutters && t.gutters];
}, _y = (e) => {
  const {
    alignItems: t,
    classes: r,
    dense: n,
    disabled: o,
    disableGutters: i,
    divider: a,
    selected: l
  } = e, u = Ae({
    root: ["root", n && "dense", !i && "gutters", a && "divider", o && "disabled", t === "flex-start" && "alignItemsFlexStart", l && "selected"]
  }, Sy, r);
  return E({}, r, u);
}, $y = fe(Qn, {
  shouldForwardProp: (e) => Mi(e) || e === "classes",
  name: "MuiListItemButton",
  slot: "Root",
  overridesResolver: Py
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
  [`&.${qr.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : _e(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${qr.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : _e(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${qr.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : _e(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : _e(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  },
  [`&.${qr.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${qr.disabled}`]: {
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
})), Pc = /* @__PURE__ */ b.forwardRef(function(t, r) {
  const n = Me({
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
    className: v
  } = n, g = ae(n, Cy), h = b.useContext(ln), m = b.useMemo(() => ({
    dense: c || h.dense || !1,
    alignItems: o,
    disableGutters: u
  }), [o, h.dense, c, u]), O = b.useRef(null);
  rr(() => {
    i && (O.current ? O.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a ListItemButton whose component has not been rendered."));
  }, [i]);
  const C = E({}, n, {
    alignItems: o,
    dense: m.dense,
    disableGutters: u,
    divider: f,
    selected: p
  }), w = _y(C), T = ze(O, r);
  return /* @__PURE__ */ P.jsx(ln.Provider, {
    value: m,
    children: /* @__PURE__ */ P.jsx($y, E({
      ref: T,
      href: g.href || g.to,
      component: (g.href || g.to) && a === "div" ? "button" : a,
      focusVisibleClassName: se(w.focusVisible, d),
      ownerState: C,
      className: se(w.root, v)
    }, g, {
      classes: w,
      children: l
    }))
  });
});
process.env.NODE_ENV !== "production" && (Pc.propTypes = {
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
const _c = Pc;
function Ny(e) {
  return ke("MuiListItemIcon", e);
}
je("MuiListItemIcon", ["root", "alignItemsFlexStart"]);
const ky = ["className"], jy = (e) => {
  const {
    alignItems: t,
    classes: r
  } = e;
  return Ae({
    root: ["root", t === "flex-start" && "alignItemsFlexStart"]
  }, Ny, r);
}, My = fe("div", {
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
})), $c = /* @__PURE__ */ b.forwardRef(function(t, r) {
  const n = Me({
    props: t,
    name: "MuiListItemIcon"
  }), {
    className: o
  } = n, i = ae(n, ky), a = b.useContext(ln), l = E({}, n, {
    alignItems: a.alignItems
  }), c = jy(l);
  return /* @__PURE__ */ P.jsx(My, E({
    className: se(c.root, o),
    ownerState: l,
    ref: r
  }, i));
});
process.env.NODE_ENV !== "production" && ($c.propTypes = {
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
const ui = $c;
function Ay(e) {
  return ke("MuiListItemText", e);
}
const Iy = je("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), wa = Iy, Dy = ["children", "className", "disableTypography", "inset", "primary", "primaryTypographyProps", "secondary", "secondaryTypographyProps"], Ly = (e) => {
  const {
    classes: t,
    inset: r,
    primary: n,
    secondary: o,
    dense: i
  } = e;
  return Ae({
    root: ["root", r && "inset", i && "dense", n && o && "multiline"],
    primary: ["primary"],
    secondary: ["secondary"]
  }, Ay, t);
}, Vy = fe("div", {
  name: "MuiListItemText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [{
      [`& .${wa.primary}`]: t.primary
    }, {
      [`& .${wa.secondary}`]: t.secondary
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
})), Nc = /* @__PURE__ */ b.forwardRef(function(t, r) {
  const n = Me({
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
  } = n, p = ae(n, Dy), {
    dense: v
  } = b.useContext(ln);
  let g = c ?? o, h = f;
  const m = E({}, n, {
    disableTypography: a,
    inset: l,
    primary: !!g,
    secondary: !!h,
    dense: v
  }), O = Ly(m);
  return g != null && g.type !== _t && !a && (g = /* @__PURE__ */ P.jsx(_t, E({
    variant: v ? "body2" : "body1",
    className: O.primary,
    component: u != null && u.variant ? void 0 : "span",
    display: "block"
  }, u, {
    children: g
  }))), h != null && h.type !== _t && !a && (h = /* @__PURE__ */ P.jsx(_t, E({
    variant: "body2",
    className: O.secondary,
    color: "text.secondary",
    display: "block"
  }, d, {
    children: h
  }))), /* @__PURE__ */ P.jsxs(Vy, E({
    className: se(O.root, i),
    ownerState: m,
    ref: r
  }, p, {
    children: [g, h]
  }));
});
process.env.NODE_ENV !== "production" && (Nc.propTypes = {
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
const Ji = Nc;
function zy(e) {
  return ke("MuiTooltip", e);
}
const Fy = je("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]), Ft = Fy, Wy = ["arrow", "children", "classes", "components", "componentsProps", "describeChild", "disableFocusListener", "disableHoverListener", "disableInteractive", "disableTouchListener", "enterDelay", "enterNextDelay", "enterTouchDelay", "followCursor", "id", "leaveDelay", "leaveTouchDelay", "onClose", "onOpen", "open", "placement", "PopperComponent", "PopperProps", "slotProps", "slots", "title", "TransitionComponent", "TransitionProps"];
function By(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Uy = (e) => {
  const {
    classes: t,
    disableInteractive: r,
    arrow: n,
    touch: o,
    placement: i
  } = e, a = {
    popper: ["popper", !r && "popperInteractive", n && "popperArrow"],
    tooltip: ["tooltip", n && "tooltipArrow", o && "touch", `tooltipPlacement${ne(i.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return Ae(a, zy, t);
}, qy = fe(Ec, {
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
  [`&[data-popper-placement*="bottom"] .${Ft.arrow}`]: {
    top: 0,
    marginTop: "-0.71em",
    "&::before": {
      transformOrigin: "0 100%"
    }
  },
  [`&[data-popper-placement*="top"] .${Ft.arrow}`]: {
    bottom: 0,
    marginBottom: "-0.71em",
    "&::before": {
      transformOrigin: "100% 0"
    }
  },
  [`&[data-popper-placement*="right"] .${Ft.arrow}`]: E({}, t.isRtl ? {
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
  [`&[data-popper-placement*="left"] .${Ft.arrow}`]: E({}, t.isRtl ? {
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
})), Yy = fe("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.tooltip, r.touch && t.touch, r.arrow && t.tooltipArrow, t[`tooltipPlacement${ne(r.placement.split("-")[0])}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => E({
  backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : _e(e.palette.grey[700], 0.92),
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
  lineHeight: `${By(16 / 14)}em`,
  fontWeight: e.typography.fontWeightRegular
}, {
  [`.${Ft.popper}[data-popper-placement*="left"] &`]: E({
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
  [`.${Ft.popper}[data-popper-placement*="right"] &`]: E({
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
  [`.${Ft.popper}[data-popper-placement*="top"] &`]: E({
    transformOrigin: "center bottom",
    marginBottom: "14px"
  }, t.touch && {
    marginBottom: "24px"
  }),
  [`.${Ft.popper}[data-popper-placement*="bottom"] &`]: E({
    transformOrigin: "center top",
    marginTop: "14px"
  }, t.touch && {
    marginTop: "24px"
  })
})), Hy = fe("span", {
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
  color: e.vars ? e.vars.palette.Tooltip.bg : _e(e.palette.grey[700], 0.9),
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
let Nn = !1;
const Sa = new cn();
let Yr = {
  x: 0,
  y: 0
};
function kn(e, t) {
  return (r, ...n) => {
    t && t(r, ...n), e(r, ...n);
  };
}
const kc = /* @__PURE__ */ b.forwardRef(function(t, r) {
  var n, o, i, a, l, c, u, f, d, p, v, g, h, m, O, C, w, T, x;
  const S = Me({
    props: t,
    name: "MuiTooltip"
  }), {
    arrow: R = !1,
    children: A,
    components: D = {},
    componentsProps: N = {},
    describeChild: L = !1,
    disableFocusListener: Y = !1,
    disableHoverListener: F = !1,
    disableInteractive: I = !1,
    disableTouchListener: B = !1,
    enterDelay: M = 100,
    enterNextDelay: V = 0,
    enterTouchDelay: j = 700,
    followCursor: X = !1,
    id: _,
    leaveDelay: W = 0,
    leaveTouchDelay: re = 1500,
    onClose: te,
    onOpen: H,
    open: Z,
    placement: k = "bottom",
    PopperComponent: G,
    PopperProps: q = {},
    slotProps: J = {},
    slots: ee = {},
    title: le,
    TransitionComponent: z = Ta,
    TransitionProps: Oe
  } = S, K = ae(S, Wy), Te = /* @__PURE__ */ b.isValidElement(A) ? A : /* @__PURE__ */ P.jsx("span", {
    children: A
  }), Ie = St(), nt = za(), [Ne, mt] = b.useState(), [De, ot] = b.useState(null), Xe = b.useRef(!1), yt = I || X, Je = Zt(), We = Zt(), it = Zt(), Ue = Zt(), [At, ie] = Xa({
    controlled: Z,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let Be = At;
  if (process.env.NODE_ENV !== "production") {
    const {
      current: Q
    } = b.useRef(Z !== void 0);
    b.useEffect(() => {
      Ne && Ne.disabled && !Q && le !== "" && Ne.tagName.toLowerCase() === "button" && console.error(["MUI: You are providing a disabled `button` child to the Tooltip component.", "A disabled element does not fire events.", "Tooltip needs to listen to the child element's events to display the title.", "", "Add a simple wrapper element, such as a `span`."].join(`
`));
    }, [le, Ne, Q]);
  }
  const Rt = Ga(_), bt = b.useRef(), Yt = Pt(() => {
    bt.current !== void 0 && (document.body.style.WebkitUserSelect = bt.current, bt.current = void 0), Ue.clear();
  });
  b.useEffect(() => Yt, [Yt]);
  const bn = (Q) => {
    Sa.clear(), Nn = !0, ie(!0), H && !Be && H(Q);
  }, ir = Pt(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (Q) => {
      Sa.start(800 + W, () => {
        Nn = !1;
      }), ie(!1), te && Be && te(Q), Je.start(Ie.transitions.duration.shortest, () => {
        Xe.current = !1;
      });
    }
  ), sr = (Q) => {
    Xe.current && Q.type !== "touchstart" || (Ne && Ne.removeAttribute("title"), We.clear(), it.clear(), M || Nn && V ? We.start(Nn ? V : M, () => {
      bn(Q);
    }) : bn(Q));
  }, Dr = (Q) => {
    We.clear(), it.start(W, () => {
      ir(Q);
    });
  }, {
    isFocusVisibleRef: xn,
    onBlur: Lr,
    onFocus: En,
    ref: It
  } = hi(), [, ar] = b.useState(!1), lr = (Q) => {
    Lr(Q), xn.current === !1 && (ar(!1), Dr(Q));
  }, Vr = (Q) => {
    Ne || mt(Q.currentTarget), En(Q), xn.current === !0 && (ar(!0), sr(Q));
  }, On = (Q) => {
    Xe.current = !0;
    const pe = Te.props;
    pe.onTouchStart && pe.onTouchStart(Q);
  }, Tn = (Q) => {
    On(Q), it.clear(), Je.clear(), Yt(), bt.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", Ue.start(j, () => {
      document.body.style.WebkitUserSelect = bt.current, sr(Q);
    });
  }, Co = (Q) => {
    Te.props.onTouchEnd && Te.props.onTouchEnd(Q), Yt(), it.start(re, () => {
      ir(Q);
    });
  };
  b.useEffect(() => {
    if (!Be)
      return;
    function Q(pe) {
      (pe.key === "Escape" || pe.key === "Esc") && ir(pe);
    }
    return document.addEventListener("keydown", Q), () => {
      document.removeEventListener("keydown", Q);
    };
  }, [ir, Be]);
  const wn = ze(Te.ref, It, mt, r);
  !le && le !== 0 && (Be = !1);
  const cr = b.useRef(), Po = (Q) => {
    const pe = Te.props;
    pe.onMouseMove && pe.onMouseMove(Q), Yr = {
      x: Q.clientX,
      y: Q.clientY
    }, cr.current && cr.current.update();
  }, Ht = {}, ur = typeof le == "string";
  L ? (Ht.title = !Be && ur && !F ? le : null, Ht["aria-describedby"] = Be ? Rt : null) : (Ht["aria-label"] = ur ? le : null, Ht["aria-labelledby"] = Be && !ur ? Rt : null);
  const qe = E({}, Ht, K, Te.props, {
    className: se(K.className, Te.props.className),
    onTouchStart: On,
    ref: wn
  }, X ? {
    onMouseMove: Po
  } : {});
  process.env.NODE_ENV !== "production" && (qe["data-mui-internal-clone-element"] = !0, b.useEffect(() => {
    Ne && !Ne.getAttribute("data-mui-internal-clone-element") && console.error(["MUI: The `children` component of the Tooltip is not forwarding its props correctly.", "Please make sure that props are spread on the same element that the ref is applied to."].join(`
`));
  }, [Ne]));
  const Gt = {};
  B || (qe.onTouchStart = Tn, qe.onTouchEnd = Co), F || (qe.onMouseOver = kn(sr, qe.onMouseOver), qe.onMouseLeave = kn(Dr, qe.onMouseLeave), yt || (Gt.onMouseOver = sr, Gt.onMouseLeave = Dr)), Y || (qe.onFocus = kn(Vr, qe.onFocus), qe.onBlur = kn(lr, qe.onBlur), yt || (Gt.onFocus = Vr, Gt.onBlur = lr)), process.env.NODE_ENV !== "production" && Te.props.title && console.error(["MUI: You have provided a `title` prop to the child of <Tooltip />.", `Remove this title prop \`${Te.props.title}\` or the Tooltip component.`].join(`
`));
  const _o = b.useMemo(() => {
    var Q;
    let pe = [{
      name: "arrow",
      enabled: !!De,
      options: {
        element: De,
        padding: 4
      }
    }];
    return (Q = q.popperOptions) != null && Q.modifiers && (pe = pe.concat(q.popperOptions.modifiers)), E({}, q.popperOptions, {
      modifiers: pe
    });
  }, [De, q]), Kt = E({}, S, {
    isRtl: nt,
    arrow: R,
    disableInteractive: yt,
    placement: k,
    PopperComponentProp: G,
    touch: Xe.current
  }), y = Uy(Kt), $ = (n = (o = ee.popper) != null ? o : D.Popper) != null ? n : qy, U = (i = (a = (l = ee.transition) != null ? l : D.Transition) != null ? a : z) != null ? i : Ta, oe = (c = (u = ee.tooltip) != null ? u : D.Tooltip) != null ? c : Yy, de = (f = (d = ee.arrow) != null ? d : D.Arrow) != null ? f : Hy, Ee = xr($, E({}, q, (p = J.popper) != null ? p : N.popper, {
    className: se(y.popper, q == null ? void 0 : q.className, (v = (g = J.popper) != null ? g : N.popper) == null ? void 0 : v.className)
  }), Kt), ue = xr(U, E({}, Oe, (h = J.transition) != null ? h : N.transition), Kt), ce = xr(oe, E({}, (m = J.tooltip) != null ? m : N.tooltip, {
    className: se(y.tooltip, (O = (C = J.tooltip) != null ? C : N.tooltip) == null ? void 0 : O.className)
  }), Kt), Le = xr(de, E({}, (w = J.arrow) != null ? w : N.arrow, {
    className: se(y.arrow, (T = (x = J.arrow) != null ? x : N.arrow) == null ? void 0 : T.className)
  }), Kt);
  return /* @__PURE__ */ P.jsxs(b.Fragment, {
    children: [/* @__PURE__ */ b.cloneElement(Te, qe), /* @__PURE__ */ P.jsx($, E({
      as: G ?? Ec,
      placement: k,
      anchorEl: X ? {
        getBoundingClientRect: () => ({
          top: Yr.y,
          left: Yr.x,
          right: Yr.x,
          bottom: Yr.y,
          width: 0,
          height: 0
        })
      } : Ne,
      popperRef: cr,
      open: Ne ? Be : !1,
      id: Rt,
      transition: !0
    }, Gt, Ee, {
      popperOptions: _o,
      children: ({
        TransitionProps: Q
      }) => /* @__PURE__ */ P.jsx(U, E({
        timeout: Ie.transitions.duration.shorter
      }, Q, ue, {
        children: /* @__PURE__ */ P.jsxs(oe, E({}, ce, {
          children: [le, R ? /* @__PURE__ */ P.jsx(de, E({}, Le, {
            ref: ot
          })) : null]
        }))
      }))
    }))]
  });
});
process.env.NODE_ENV !== "production" && (kc.propTypes = {
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
  children: Nr.isRequired,
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
const Gy = kc;
var Ky = typeof global == "object" && global && global.Object === Object && global, Xy = typeof self == "object" && self && self.Object === Object && self, jc = Ky || Xy || Function("return this")(), ro = jc.Symbol, Mc = Object.prototype, Jy = Mc.hasOwnProperty, Zy = Mc.toString, Hr = ro ? ro.toStringTag : void 0;
function Qy(e) {
  var t = Jy.call(e, Hr), r = e[Hr];
  try {
    e[Hr] = void 0;
    var n = !0;
  } catch {
  }
  var o = Zy.call(e);
  return n && (t ? e[Hr] = r : delete e[Hr]), o;
}
var eb = Object.prototype, tb = eb.toString;
function rb(e) {
  return tb.call(e);
}
var nb = "[object Null]", ob = "[object Undefined]", Ra = ro ? ro.toStringTag : void 0;
function ib(e) {
  return e == null ? e === void 0 ? ob : nb : Ra && Ra in Object(e) ? Qy(e) : rb(e);
}
function sb(e) {
  return e != null && typeof e == "object";
}
var ab = "[object Symbol]";
function lb(e) {
  return typeof e == "symbol" || sb(e) && ib(e) == ab;
}
var cb = /\s/;
function ub(e) {
  for (var t = e.length; t-- && cb.test(e.charAt(t)); )
    ;
  return t;
}
var fb = /^\s+/;
function db(e) {
  return e && e.slice(0, ub(e) + 1).replace(fb, "");
}
function no(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Ca = NaN, pb = /^[-+]0x[0-9a-f]+$/i, hb = /^0b[01]+$/i, mb = /^0o[0-7]+$/i, vb = parseInt;
function Pa(e) {
  if (typeof e == "number")
    return e;
  if (lb(e))
    return Ca;
  if (no(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = no(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = db(e);
  var r = hb.test(e);
  return r || mb.test(e) ? vb(e.slice(2), r ? 2 : 8) : pb.test(e) ? Ca : +e;
}
var Bo = function() {
  return jc.Date.now();
}, gb = "Expected a function", yb = Math.max, bb = Math.min;
function Wn(e, t, r) {
  var n, o, i, a, l, c, u = 0, f = !1, d = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(gb);
  t = Pa(t) || 0, no(r) && (f = !!r.leading, d = "maxWait" in r, i = d ? yb(Pa(r.maxWait) || 0, t) : i, p = "trailing" in r ? !!r.trailing : p);
  function v(S) {
    var R = n, A = o;
    return n = o = void 0, u = S, a = e.apply(A, R), a;
  }
  function g(S) {
    return u = S, l = setTimeout(O, t), f ? v(S) : a;
  }
  function h(S) {
    var R = S - c, A = S - u, D = t - R;
    return d ? bb(D, i - A) : D;
  }
  function m(S) {
    var R = S - c, A = S - u;
    return c === void 0 || R >= t || R < 0 || d && A >= i;
  }
  function O() {
    var S = Bo();
    if (m(S))
      return C(S);
    l = setTimeout(O, h(S));
  }
  function C(S) {
    return l = void 0, p && n ? v(S) : (n = o = void 0, a);
  }
  function w() {
    l !== void 0 && clearTimeout(l), u = 0, n = c = o = l = void 0;
  }
  function T() {
    return l === void 0 ? a : C(Bo());
  }
  function x() {
    var S = Bo(), R = m(S);
    if (n = arguments, o = this, c = S, R) {
      if (l === void 0)
        return g(c);
      if (d)
        return clearTimeout(l), l = setTimeout(O, t), v(c);
    }
    return l === void 0 && (l = setTimeout(O, t)), a;
  }
  return x.cancel = w, x.flush = T, x;
}
var xb = "Expected a function";
function Eb(e, t, r) {
  var n = !0, o = !0;
  if (typeof e != "function")
    throw new TypeError(xb);
  return no(r) && (n = "leading" in r ? !!r.leading : n, o = "trailing" in r ? !!r.trailing : o), Wn(e, t, {
    leading: n,
    maxWait: t,
    trailing: o
  });
}
var Ob = !!(typeof window < "u" && window.document && window.document.createElement), Tb = Ob;
const Ac = /* @__PURE__ */ ka(Tb);
var Er = function() {
  return Er = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, Er.apply(this, arguments);
}, br = null, _a = null;
Ac && window.addEventListener("resize", function() {
  _a !== window.devicePixelRatio && (_a = window.devicePixelRatio, br = null);
});
function $a() {
  if (br === null) {
    if (typeof document > "u")
      return br = 0, br;
    var e = document.body, t = document.createElement("div");
    t.classList.add("simplebar-hide-scrollbar"), e.appendChild(t);
    var r = t.getBoundingClientRect().right;
    e.removeChild(t), br = r;
  }
  return br;
}
function Ic(e) {
  return !e || !e.ownerDocument || !e.ownerDocument.defaultView ? window : e.ownerDocument.defaultView;
}
function Dc(e) {
  return !e || !e.ownerDocument ? document : e.ownerDocument;
}
var Lc = function(e) {
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
function Vc(e, t) {
  var r;
  e && (r = e.classList).add.apply(r, t.split(" "));
}
function zc(e, t) {
  e && t.split(" ").forEach(function(r) {
    e.classList.remove(r);
  });
}
function Fc(e) {
  return ".".concat(e.split(" ").join("."));
}
var wb = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  getElementWindow: Ic,
  getElementDocument: Dc,
  getOptions: Lc,
  addClasses: Vc,
  removeClasses: zc,
  classNamesToQuery: Fc
}), Dt = Ic, Uo = Dc, Sb = Lc, Lt = Vc, Vt = zc, Ye = Fc, jn = (
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
        var o = Dt(n.el);
        n.scrollXTicking || (o.requestAnimationFrame(n.scrollX), n.scrollXTicking = !0), n.scrollYTicking || (o.requestAnimationFrame(n.scrollY), n.scrollYTicking = !0), n.isScrolling || (n.isScrolling = !0, Lt(n.el, n.classNames.scrolling)), n.showScrollbar("x"), n.showScrollbar("y"), n.onStopScrolling();
      }, this.scrollX = function() {
        n.axis.x.isOverflowing && n.positionScrollbar("x"), n.scrollXTicking = !1;
      }, this.scrollY = function() {
        n.axis.y.isOverflowing && n.positionScrollbar("y"), n.scrollYTicking = !1;
      }, this._onStopScrolling = function() {
        Vt(n.el, n.classNames.scrolling), n.options.autoHide && (n.hideScrollbar("x"), n.hideScrollbar("y")), n.isScrolling = !1;
      }, this.onMouseEnter = function() {
        n.isMouseEntering || (Lt(n.el, n.classNames.mouseEntered), n.showScrollbar("x"), n.showScrollbar("y"), n.isMouseEntering = !0), n.onMouseEntered();
      }, this._onMouseEntered = function() {
        Vt(n.el, n.classNames.mouseEntered), n.options.autoHide && (n.hideScrollbar("x"), n.hideScrollbar("y")), n.isMouseEntering = !1;
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
        var i, a, l, c, u, f, d, p, v, g, h;
        if (!(!n.draggedAxis || !n.contentWrapperEl)) {
          var m, O = n.axis[n.draggedAxis].track, C = (a = (i = O.rect) === null || i === void 0 ? void 0 : i[n.axis[n.draggedAxis].sizeAttr]) !== null && a !== void 0 ? a : 0, w = n.axis[n.draggedAxis].scrollbar, T = (c = (l = n.contentWrapperEl) === null || l === void 0 ? void 0 : l[n.axis[n.draggedAxis].scrollSizeAttr]) !== null && c !== void 0 ? c : 0, x = parseInt((f = (u = n.elStyles) === null || u === void 0 ? void 0 : u[n.axis[n.draggedAxis].sizeAttr]) !== null && f !== void 0 ? f : "0px", 10);
          o.preventDefault(), o.stopPropagation(), n.draggedAxis === "y" ? m = o.pageY : m = o.pageX;
          var S = m - ((p = (d = O.rect) === null || d === void 0 ? void 0 : d[n.axis[n.draggedAxis].offsetAttr]) !== null && p !== void 0 ? p : 0) - n.axis[n.draggedAxis].dragOffset;
          S = n.draggedAxis === "x" && n.isRtl ? ((g = (v = O.rect) === null || v === void 0 ? void 0 : v[n.axis[n.draggedAxis].sizeAttr]) !== null && g !== void 0 ? g : 0) - w.size - S : S;
          var R = S / (C - w.size), A = R * (T - x);
          n.draggedAxis === "x" && n.isRtl && (A = !((h = e.getRtlHelpers()) === null || h === void 0) && h.isScrollingToNegative ? -A : A), n.contentWrapperEl[n.axis[n.draggedAxis].scrollOffsetAttr] = A;
        }
      }, this.onEndDrag = function(o) {
        var i = Uo(n.el), a = Dt(n.el);
        o.preventDefault(), o.stopPropagation(), Vt(n.el, n.classNames.dragging), i.removeEventListener("mousemove", n.drag, !0), i.removeEventListener("mouseup", n.onEndDrag, !0), n.removePreventClickId = a.setTimeout(function() {
          i.removeEventListener("click", n.preventClick, !0), i.removeEventListener("dblclick", n.preventClick, !0), n.removePreventClickId = null;
        });
      }, this.preventClick = function(o) {
        o.preventDefault(), o.stopPropagation();
      }, this.el = t, this.options = Er(Er({}, e.defaultOptions), r), this.classNames = Er(Er({}, e.defaultOptions.classNames), r.classNames), this.axis = {
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
      this.onMouseMove = Eb(this._onMouseMove, 64), this.onWindowResize = Wn(this._onWindowResize, 64, { leading: !0 }), this.onStopScrolling = Wn(this._onStopScrolling, this.stopScrollDelay), this.onMouseEntered = Wn(this._onMouseEntered, this.stopScrollDelay), this.init();
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
        return this.contentWrapperEl && getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar").display === "none" || "scrollbarWidth" in document.documentElement.style || "-ms-overflow-style" in document.documentElement.style ? 0 : $a();
      } catch {
        return $a();
      }
    }, e.getOffset = function(t) {
      var r = t.getBoundingClientRect(), n = Uo(t), o = Dt(t);
      return {
        top: r.top + (o.pageYOffset || n.documentElement.scrollTop),
        left: r.left + (o.pageXOffset || n.documentElement.scrollLeft)
      };
    }, e.prototype.init = function() {
      Ac && (this.initDOM(), this.rtlHelpers = e.getRtlHelpers(), this.scrollbarWidth = this.getScrollbarWidth(), this.recalculate(), this.initListeners());
    }, e.prototype.initDOM = function() {
      var t, r;
      this.wrapperEl = this.el.querySelector(Ye(this.classNames.wrapper)), this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector(Ye(this.classNames.contentWrapper)), this.contentEl = this.options.contentNode || this.el.querySelector(Ye(this.classNames.contentEl)), this.offsetEl = this.el.querySelector(Ye(this.classNames.offset)), this.maskEl = this.el.querySelector(Ye(this.classNames.mask)), this.placeholderEl = this.findChild(this.wrapperEl, Ye(this.classNames.placeholder)), this.heightAutoObserverWrapperEl = this.el.querySelector(Ye(this.classNames.heightAutoObserverWrapperEl)), this.heightAutoObserverEl = this.el.querySelector(Ye(this.classNames.heightAutoObserverEl)), this.axis.x.track.el = this.findChild(this.el, "".concat(Ye(this.classNames.track)).concat(Ye(this.classNames.horizontal))), this.axis.y.track.el = this.findChild(this.el, "".concat(Ye(this.classNames.track)).concat(Ye(this.classNames.vertical))), this.axis.x.scrollbar.el = ((t = this.axis.x.track.el) === null || t === void 0 ? void 0 : t.querySelector(Ye(this.classNames.scrollbar))) || null, this.axis.y.scrollbar.el = ((r = this.axis.y.track.el) === null || r === void 0 ? void 0 : r.querySelector(Ye(this.classNames.scrollbar))) || null, this.options.autoHide || (Lt(this.axis.x.scrollbar.el, this.classNames.visible), Lt(this.axis.y.scrollbar.el, this.classNames.visible));
    }, e.prototype.initListeners = function() {
      var t = this, r, n = Dt(this.el);
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
        var t = Dt(this.el);
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
      t === void 0 && (t = "y"), this.axis[t].isOverflowing && !this.axis[t].scrollbar.isVisible && (Lt(this.axis[t].scrollbar.el, this.classNames.visible), this.axis[t].scrollbar.isVisible = !0);
    }, e.prototype.hideScrollbar = function(t) {
      t === void 0 && (t = "y"), this.axis[t].isOverflowing && this.axis[t].scrollbar.isVisible && (Vt(this.axis[t].scrollbar.el, this.classNames.visible), this.axis[t].scrollbar.isVisible = !1);
    }, e.prototype.hideNativeScrollbar = function() {
      this.offsetEl && (this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-".concat(this.scrollbarWidth, "px") : "0px", this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-".concat(this.scrollbarWidth, "px") : "0px");
    }, e.prototype.onMouseMoveForAxis = function(t) {
      t === void 0 && (t = "y");
      var r = this.axis[t];
      !r.track.el || !r.scrollbar.el || (r.track.rect = r.track.el.getBoundingClientRect(), r.scrollbar.rect = r.scrollbar.el.getBoundingClientRect(), this.isWithinBounds(r.track.rect) ? (this.showScrollbar(t), Lt(r.track.el, this.classNames.hover), this.isWithinBounds(r.scrollbar.rect) ? Lt(r.scrollbar.el, this.classNames.hover) : Vt(r.scrollbar.el, this.classNames.hover)) : (Vt(r.track.el, this.classNames.hover), this.options.autoHide && this.hideScrollbar(t)));
    }, e.prototype.onMouseLeaveForAxis = function(t) {
      t === void 0 && (t = "y"), Vt(this.axis[t].track.el, this.classNames.hover), Vt(this.axis[t].scrollbar.el, this.classNames.hover), this.options.autoHide && this.hideScrollbar(t);
    }, e.prototype.onDragStart = function(t, r) {
      var n;
      r === void 0 && (r = "y");
      var o = Uo(this.el), i = Dt(this.el), a = this.axis[r].scrollbar, l = r === "y" ? t.pageY : t.pageX;
      this.axis[r].dragOffset = l - (((n = a.rect) === null || n === void 0 ? void 0 : n[this.axis[r].offsetAttr]) || 0), this.draggedAxis = r, Lt(this.el, this.classNames.dragging), o.addEventListener("mousemove", this.drag, !0), o.addEventListener("mouseup", this.onEndDrag, !0), this.removePreventClickId === null ? (o.addEventListener("click", this.preventClick, !0), o.addEventListener("dblclick", this.preventClick, !0)) : (i.clearTimeout(this.removePreventClickId), this.removePreventClickId = null);
    }, e.prototype.onTrackClick = function(t, r) {
      var n = this, o, i, a, l;
      r === void 0 && (r = "y");
      var c = this.axis[r];
      if (!(!this.options.clickOnTrack || !c.scrollbar.el || !this.contentWrapperEl)) {
        t.preventDefault();
        var u = Dt(this.el);
        this.axis[r].scrollbar.rect = c.scrollbar.el.getBoundingClientRect();
        var f = this.axis[r].scrollbar, d = (i = (o = f.rect) === null || o === void 0 ? void 0 : o[this.axis[r].offsetAttr]) !== null && i !== void 0 ? i : 0, p = parseInt((l = (a = this.elStyles) === null || a === void 0 ? void 0 : a[this.axis[r].sizeAttr]) !== null && l !== void 0 ? l : "0px", 10), v = this.contentWrapperEl[this.axis[r].scrollOffsetAttr], g = r === "y" ? this.mouseY - d : this.mouseX - d, h = g < 0 ? -1 : 1, m = h === -1 ? v - p : v + p, O = 40, C = function() {
          n.contentWrapperEl && (h === -1 ? v > m && (v -= O, n.contentWrapperEl[n.axis[r].scrollOffsetAttr] = v, u.requestAnimationFrame(C)) : v < m && (v += O, n.contentWrapperEl[n.axis[r].scrollOffsetAttr] = v, u.requestAnimationFrame(C)));
        };
        C();
      }
    }, e.prototype.getContentElement = function() {
      return this.contentEl;
    }, e.prototype.getScrollElement = function() {
      return this.contentWrapperEl;
    }, e.prototype.removeListeners = function() {
      var t = Dt(this.el);
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
    }, e.getOptions = Sb, e.helpers = wb, e;
  }()
), Ze = function() {
  return Ze = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, Ze.apply(this, arguments);
};
function Rb(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
var Wc = b.forwardRef(function(e, t) {
  var r = e.children, n = e.scrollableNodeProps, o = n === void 0 ? {} : n, i = Rb(e, ["children", "scrollableNodeProps"]), a = b.useRef(), l = b.useRef(), c = b.useRef(), u = {}, f = {};
  Object.keys(i).forEach(function(v) {
    Object.prototype.hasOwnProperty.call(jn.defaultOptions, v) ? u[v] = i[v] : f[v] = i[v];
  });
  var d = Ze(Ze({}, jn.defaultOptions.classNames), u.classNames), p = Ze(Ze({}, o), { className: "".concat(d.contentWrapper).concat(o.className ? " ".concat(o.className) : ""), tabIndex: 0, role: "region", "aria-label": u.ariaLabel || jn.defaultOptions.ariaLabel });
  return b.useEffect(function() {
    var v;
    return l.current = p.ref ? p.ref.current : l.current, a.current && (v = new jn(a.current, Ze(Ze(Ze({}, u), l.current && {
      scrollableNode: l.current
    }), c.current && {
      contentNode: c.current
    })), typeof t == "function" ? t(v) : t && (t.current = v)), function() {
      v == null || v.unMount(), v = null, typeof t == "function" && t(null);
    };
  }, []), b.createElement(
    "div",
    Ze({ "data-simplebar": "init", ref: a }, f),
    b.createElement(
      "div",
      { className: d.wrapper },
      b.createElement(
        "div",
        { className: d.heightAutoObserverWrapperEl },
        b.createElement("div", { className: d.heightAutoObserverEl })
      ),
      b.createElement(
        "div",
        { className: d.mask },
        b.createElement("div", { className: d.offset }, typeof r == "function" ? r({
          scrollableNodeRef: l,
          scrollableNodeProps: Ze(Ze({}, p), { ref: l }),
          contentNodeRef: c,
          contentNodeProps: {
            className: d.contentEl,
            ref: c
          }
        }) : b.createElement(
          "div",
          Ze({}, p),
          b.createElement("div", { className: d.contentEl }, r)
        ))
      ),
      b.createElement("div", { className: d.placeholder })
    ),
    b.createElement(
      "div",
      { className: "".concat(d.track, " simplebar-horizontal") },
      b.createElement("div", { className: d.scrollbar })
    ),
    b.createElement(
      "div",
      { className: "".concat(d.track, " simplebar-vertical") },
      b.createElement("div", { className: d.scrollbar })
    )
  );
});
Wc.displayName = "SimpleBar";
var Zi = {}, qo = {};
const Cb = /* @__PURE__ */ jt(Em);
var Na;
function Ro() {
  return Na || (Na = 1, function(e) {
    "use client";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "default", {
      enumerable: !0,
      get: function() {
        return t.createSvgIcon;
      }
    });
    var t = Cb;
  }(qo)), qo;
}
var Pb = jr;
Object.defineProperty(Zi, "__esModule", {
  value: !0
});
var Bc = Zi.default = void 0, _b = Pb(Ro()), $b = P;
Bc = Zi.default = (0, _b.default)(/* @__PURE__ */ (0, $b.jsx)("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-12.5c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5m0 5.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"
}), "AlbumOutlined");
const Nb = et.forwardRef(
  ({
    userName: e = "",
    designation: t = "",
    userimg: r = "",
    isCollapse: n = !1
  }, o) => {
    const i = St();
    return /* @__PURE__ */ P.jsx($t, { children: n ? "" : /* @__PURE__ */ P.jsxs(
      $t,
      {
        display: "flex",
        alignItems: "center",
        gap: 2,
        sx: { m: 3, p: 2, borderRadius: "8px", bgcolor: i.palette.secondary.main + 20 },
        children: [
          /* @__PURE__ */ P.jsx(my, { alt: "Remy Sharp", src: r }),
          /* @__PURE__ */ P.jsxs($t, { children: [
            /* @__PURE__ */ P.jsx(_t, { variant: "h6", children: e }),
            /* @__PURE__ */ P.jsx(_t, { variant: "caption", color: "textSecondary", children: t })
          ] }),
          /* @__PURE__ */ P.jsx($t, { sx: { ml: "auto" }, children: /* @__PURE__ */ P.jsx(Gy, { title: "Logout", placement: "top", children: /* @__PURE__ */ P.jsx(
            vv,
            {
              color: "primary",
              to: "/",
              "aria-label": "logout",
              size: "small",
              children: /* @__PURE__ */ P.jsx(Bc, {})
            }
          ) }) })
        ]
      }
    ) });
  }
), yn = b.createContext({
  width: "270px",
  collapsewidth: "80px",
  textColor: "#8D939D",
  isCollapse: !1,
  themeColor: "#5d87ff"
}), Bb = b.forwardRef(
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
  }, v) => {
    const [g, h] = b.useState(!1), m = o && !g ? r : t, O = St(), C = ki({
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
    return l === "dark" && (n = "rgba(255,255,255, 0.9)"), /* @__PURE__ */ P.jsx(Ql, { theme: C, children: /* @__PURE__ */ P.jsx(
      $t,
      {
        dir: c,
        sx: {
          width: m,
          flexShrink: 0,
          fontFamily: "inherit",
          color: n
        },
        children: /* @__PURE__ */ P.jsxs(
          Lm,
          {
            anchor: c == "ltr" ? "left" : "right",
            open: !0,
            variant: "permanent",
            PaperProps: {
              sx: {
                transition: O.transitions.create("width", {
                  duration: O.transitions.duration.shortest
                }),
                width: m,
                boxSizing: "border-box"
              }
            },
            children: [
              /* @__PURE__ */ P.jsx(Wc, { style: { height: d ? "calc(100vh - 140px)" : "calc(100vh - 50px)" }, children: /* @__PURE__ */ P.jsx(yn.Provider, { value: { textColor: n, isCollapse: o, width: t, collapsewidth: r, themeColor: i }, children: e }) }),
              d ? /* @__PURE__ */ P.jsx(Nb, { userName: u, designation: f, userimg: p, isCollapse: o }) : ""
            ]
          }
        )
      }
    ) });
  }
), Ub = b.forwardRef(({
  children: e,
  subHeading: t = "menu"
}, r) => {
  const n = b.useContext(yn);
  return /* @__PURE__ */ P.jsx($t, { sx: { px: n.isCollapse ? 2 : 3, pt: 2 }, children: /* @__PURE__ */ P.jsx(
    Cc,
    {
      ref: r,
      component: "nav",
      subheader: /* @__PURE__ */ P.jsx(Jg, { component: "div", sx: { paddingY: "3px", color: n.textColor, paddingX: "0px", lineHeight: "20px", fontWeight: "bold", fontSize: "12px" }, children: n.isCollapse ? "..." : t }),
      children: e
    }
  ) });
});
var Qi = {}, kb = jr;
Object.defineProperty(Qi, "__esModule", {
  value: !0
});
var Uc = Qi.default = void 0, jb = kb(Ro()), Mb = P;
Uc = Qi.default = (0, jb.default)(/* @__PURE__ */ (0, Mb.jsx)("path", {
  d: "m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
}), "ExpandLess");
var es = {}, Ab = jr;
Object.defineProperty(es, "__esModule", {
  value: !0
});
var qc = es.default = void 0, Ib = Ab(Ro()), Db = P;
qc = es.default = (0, Ib.default)(/* @__PURE__ */ (0, Db.jsx)("path", {
  d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
}), "ExpandMore");
var ts = {}, Lb = jr;
Object.defineProperty(ts, "__esModule", {
  value: !0
});
var rs = ts.default = void 0, Vb = Lb(Ro()), zb = P;
rs = ts.default = (0, Vb.default)(/* @__PURE__ */ (0, zb.jsx)("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
}), "CircleOutlined");
const qb = b.forwardRef(
  ({
    children: e,
    title: t = "",
    icon: r,
    borderRadius: n = "8px",
    textFontSize: o = "14px",
    disabled: i = !1
  }, a) => {
    const l = b.useContext(yn), [c, u] = b.useState(!1), f = () => {
      u(!c);
    }, d = fe(_c)(() => ({
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
    })), p = fe(ui)(() => ({
      display: "flex",
      gap: "10px",
      marginBottom: "0px",
      padding: "0px",
      minWidth: "30px",
      cursor: "pointer",
      color: "inherit"
    }));
    return /* @__PURE__ */ P.jsxs($t, { children: [
      /* @__PURE__ */ P.jsxs(
        d,
        {
          onClick: f,
          sx: { display: "flex", gap: "15px" },
          children: [
            /* @__PURE__ */ P.jsx(p, { style: { minWidth: "0px" }, children: r || /* @__PURE__ */ P.jsx(rs, {}) }),
            l.isCollapse ? "" : /* @__PURE__ */ P.jsxs(P.Fragment, { children: [
              /* @__PURE__ */ P.jsx(Ji, { sx: { my: 0 }, children: /* @__PURE__ */ P.jsx(
                _t,
                {
                  fontSize: o,
                  sx: { lineHeight: "1" },
                  variant: "caption",
                  children: t
                }
              ) }),
              c ? /* @__PURE__ */ P.jsx(Uc, {}) : /* @__PURE__ */ P.jsx(qc, {})
            ] })
          ]
        }
      ),
      /* @__PURE__ */ P.jsx(Hm, { in: c, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ P.jsx(Cc, { component: "div", disablePadding: !0, children: e }) })
    ] });
  }
), Yb = b.forwardRef(
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
    const p = b.useContext(yn), v = St(), g = fe(_c)(() => ({
      whiteSpace: "nowrap",
      marginBottom: "2px",
      padding: "10px 12px",
      textAlign: v.direction === "ltr" ? "left" : "right",
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
    return fe(ui)(() => ({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      marginBottom: "0px",
      padding: "0px 0px",
      cursor: "pointer",
      marginLeft: "-10px",
      color: open ? "inherit" : "#fff"
    })), /* @__PURE__ */ P.jsx($t, { children: /* @__PURE__ */ P.jsxs(g, { href: r, sx: { display: "flex", gap: "15px" }, target: f, selected: r == "/", children: [
      /* @__PURE__ */ P.jsx(
        ui,
        {
          sx: {
            minWidth: "0px"
          },
          children: t || /* @__PURE__ */ P.jsx(rs, {})
        }
      ),
      p.isCollapse ? "" : /* @__PURE__ */ P.jsxs(P.Fragment, { children: [
        /* @__PURE__ */ P.jsx(Ji, { sx: { my: 0 }, children: /* @__PURE__ */ P.jsx(
          _t,
          {
            fontSize: a,
            sx: { lineHeight: "1" },
            variant: "caption",
            children: e
          }
        ) }),
        n ? /* @__PURE__ */ P.jsx(iy, { label: i, color: o, variant: u, size: "small" }) : ""
      ] })
    ] }) });
  }
), Hb = b.forwardRef(({
  children: e,
  img: t = "https://adminmart.com/wp-content/uploads/2024/03/logo-admin-mart-news.png"
}, r) => {
  const n = b.useContext(yn), o = fe(Ji)(() => ({
    whiteSpace: "nowrap",
    overflow: n.isCollapse ? "hidden" : "visible",
    WebkitLineClamp: "1",
    fontSize: "2rem",
    padding: "15px 22px",
    textOverflow: "ellipsis"
  }));
  return /* @__PURE__ */ P.jsx(o, { href: "/", children: t == "" ? /* @__PURE__ */ P.jsx(_t, { variant: "body", children: e }) : /* @__PURE__ */ P.jsx(
    $t,
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
  Hb as Logo,
  Ub as Menu,
  Yb as MenuItem,
  Bb as Sidebar,
  qb as Submenu
};
