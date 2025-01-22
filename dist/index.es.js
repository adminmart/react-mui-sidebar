var qs = Object.defineProperty;
var Gs = (e, t, r) => t in e ? qs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var cr = (e, t, r) => Gs(e, typeof t != "symbol" ? t + "" : t, r);
import * as C from "react";
import yt, { forwardRef as Ks, useContext as Xs, Children as Js, isValidElement as nn, cloneElement as on } from "react";
import * as Qs from "react-dom";
import Wr from "react-dom";
function Zs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ur = { exports: {} }, lr = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ai;
function ec() {
  if (ai) return lr;
  ai = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, o, i) {
    var s = null;
    if (i !== void 0 && (s = "" + i), o.key !== void 0 && (s = "" + o.key), "key" in o) {
      i = {};
      for (var c in o)
        c !== "key" && (i[c] = o[c]);
    } else i = o;
    return o = i.ref, {
      $$typeof: e,
      type: n,
      key: s,
      ref: o !== void 0 ? o : null,
      props: i
    };
  }
  return lr.Fragment = t, lr.jsx = r, lr.jsxs = r, lr;
}
var ur = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var si;
function tc() {
  return si || (si = 1, process.env.NODE_ENV !== "production" && function() {
    function e(v) {
      if (v == null) return null;
      if (typeof v == "function")
        return v.$$typeof === te ? null : v.displayName || v.name || null;
      if (typeof v == "string") return v;
      switch (v) {
        case w:
          return "Fragment";
        case h:
          return "Portal";
        case L:
          return "Profiler";
        case k:
          return "StrictMode";
        case D:
          return "Suspense";
        case j:
          return "SuspenseList";
      }
      if (typeof v == "object")
        switch (typeof v.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), v.$$typeof) {
          case d:
            return (v.displayName || "Context") + ".Provider";
          case B:
            return (v._context.displayName || "Context") + ".Consumer";
          case A:
            var M = v.render;
            return v = v.displayName, v || (v = M.displayName || M.name || "", v = v !== "" ? "ForwardRef(" + v + ")" : "ForwardRef"), v;
          case W:
            return M = v.displayName || null, M !== null ? M : e(v.type) || "Memo";
          case z:
            M = v._payload, v = v._init;
            try {
              return e(v(M));
            } catch {
            }
        }
      return null;
    }
    function t(v) {
      return "" + v;
    }
    function r(v) {
      try {
        t(v);
        var M = !1;
      } catch {
        M = !0;
      }
      if (M) {
        M = console;
        var Y = M.error, oe = typeof Symbol == "function" && Symbol.toStringTag && v[Symbol.toStringTag] || v.constructor.name || "Object";
        return Y.call(
          M,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          oe
        ), t(v);
      }
    }
    function n() {
    }
    function o() {
      if (H === 0) {
        X = console.log, _ = console.info, q = console.warn, G = console.error, re = console.group, Z = console.groupCollapsed, ae = console.groupEnd;
        var v = {
          configurable: !0,
          enumerable: !0,
          value: n,
          writable: !0
        };
        Object.defineProperties(console, {
          info: v,
          log: v,
          warn: v,
          error: v,
          group: v,
          groupCollapsed: v,
          groupEnd: v
        });
      }
      H++;
    }
    function i() {
      if (H--, H === 0) {
        var v = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: I({}, v, { value: X }),
          info: I({}, v, { value: _ }),
          warn: I({}, v, { value: q }),
          error: I({}, v, { value: G }),
          group: I({}, v, { value: re }),
          groupCollapsed: I({}, v, { value: Z }),
          groupEnd: I({}, v, { value: ae })
        });
      }
      0 > H && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function s(v) {
      if (O === void 0)
        try {
          throw Error();
        } catch (Y) {
          var M = Y.stack.trim().match(/\n( *(at )?)/);
          O = M && M[1] || "", ye = -1 < Y.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < Y.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + O + v + ye;
    }
    function c(v, M) {
      if (!v || Ee) return "";
      var Y = Me.get(v);
      if (Y !== void 0) return Y;
      Ee = !0, Y = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var oe = null;
      oe = F.H, F.H = null, o();
      try {
        var Re = {
          DetermineComponentFrameRoot: function() {
            try {
              if (M) {
                var We = function() {
                  throw Error();
                };
                if (Object.defineProperty(We.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(We, []);
                  } catch (ut) {
                    var Ue = ut;
                  }
                  Reflect.construct(v, [], We);
                } else {
                  try {
                    We.call();
                  } catch (ut) {
                    Ue = ut;
                  }
                  v.call(We.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (ut) {
                  Ue = ut;
                }
                (We = v()) && typeof We.catch == "function" && We.catch(function() {
                });
              }
            } catch (ut) {
              if (ut && Ue && typeof ut.stack == "string")
                return [ut.stack, Ue.stack];
            }
            return [null, null];
          }
        };
        Re.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var ue = Object.getOwnPropertyDescriptor(
          Re.DetermineComponentFrameRoot,
          "name"
        );
        ue && ue.configurable && Object.defineProperty(
          Re.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var K = Re.DetermineComponentFrameRoot(), be = K[0], we = K[1];
        if (be && we) {
          var Oe = be.split(`
`), ce = we.split(`
`);
          for (K = ue = 0; ue < Oe.length && !Oe[ue].includes(
            "DetermineComponentFrameRoot"
          ); )
            ue++;
          for (; K < ce.length && !ce[K].includes(
            "DetermineComponentFrameRoot"
          ); )
            K++;
          if (ue === Oe.length || K === ce.length)
            for (ue = Oe.length - 1, K = ce.length - 1; 1 <= ue && 0 <= K && Oe[ue] !== ce[K]; )
              K--;
          for (; 1 <= ue && 0 <= K; ue--, K--)
            if (Oe[ue] !== ce[K]) {
              if (ue !== 1 || K !== 1)
                do
                  if (ue--, K--, 0 > K || Oe[ue] !== ce[K]) {
                    var Ie = `
` + Oe[ue].replace(
                      " at new ",
                      " at "
                    );
                    return v.displayName && Ie.includes("<anonymous>") && (Ie = Ie.replace("<anonymous>", v.displayName)), typeof v == "function" && Me.set(v, Ie), Ie;
                  }
                while (1 <= ue && 0 <= K);
              break;
            }
        }
      } finally {
        Ee = !1, F.H = oe, i(), Error.prepareStackTrace = Y;
      }
      return Oe = (Oe = v ? v.displayName || v.name : "") ? s(Oe) : "", typeof v == "function" && Me.set(v, Oe), Oe;
    }
    function l(v) {
      if (v == null) return "";
      if (typeof v == "function") {
        var M = v.prototype;
        return c(
          v,
          !(!M || !M.isReactComponent)
        );
      }
      if (typeof v == "string") return s(v);
      switch (v) {
        case D:
          return s("Suspense");
        case j:
          return s("SuspenseList");
      }
      if (typeof v == "object")
        switch (v.$$typeof) {
          case A:
            return v = c(v.render, !1), v;
          case W:
            return l(v.type);
          case z:
            M = v._payload, v = v._init;
            try {
              return l(v(M));
            } catch {
            }
        }
      return "";
    }
    function u() {
      var v = F.A;
      return v === null ? null : v.getOwner();
    }
    function p(v) {
      if (R.call(v, "key")) {
        var M = Object.getOwnPropertyDescriptor(v, "key").get;
        if (M && M.isReactWarning) return !1;
      }
      return v.key !== void 0;
    }
    function m(v, M) {
      function Y() {
        ve || (ve = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          M
        ));
      }
      Y.isReactWarning = !0, Object.defineProperty(v, "key", {
        get: Y,
        configurable: !0
      });
    }
    function g() {
      var v = e(this.type);
      return Pe[v] || (Pe[v] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), v = this.props.ref, v !== void 0 ? v : null;
    }
    function x(v, M, Y, oe, Re, ue) {
      return Y = ue.ref, v = {
        $$typeof: y,
        type: v,
        key: M,
        props: ue,
        _owner: Re
      }, (Y !== void 0 ? Y : null) !== null ? Object.defineProperty(v, "ref", {
        enumerable: !1,
        get: g
      }) : Object.defineProperty(v, "ref", { enumerable: !1, value: null }), v._store = {}, Object.defineProperty(v._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(v, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
    }
    function b(v, M, Y, oe, Re, ue) {
      if (typeof v == "string" || typeof v == "function" || v === w || v === L || v === k || v === D || v === j || v === U || typeof v == "object" && v !== null && (v.$$typeof === z || v.$$typeof === W || v.$$typeof === d || v.$$typeof === B || v.$$typeof === A || v.$$typeof === J || v.getModuleId !== void 0)) {
        var K = M.children;
        if (K !== void 0)
          if (oe)
            if (Q(K)) {
              for (oe = 0; oe < K.length; oe++)
                f(K[oe], v);
              Object.freeze && Object.freeze(K);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else f(K, v);
      } else
        K = "", (v === void 0 || typeof v == "object" && v !== null && Object.keys(v).length === 0) && (K += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), v === null ? oe = "null" : Q(v) ? oe = "array" : v !== void 0 && v.$$typeof === y ? (oe = "<" + (e(v.type) || "Unknown") + " />", K = " Did you accidentally export a JSX literal instead of a component?") : oe = typeof v, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          oe,
          K
        );
      if (R.call(M, "key")) {
        K = e(v);
        var be = Object.keys(M).filter(function(Oe) {
          return Oe !== "key";
        });
        oe = 0 < be.length ? "{key: someKey, " + be.join(": ..., ") + ": ...}" : "{key: someKey}", ze[K + oe] || (be = 0 < be.length ? "{" + be.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          oe,
          K,
          be,
          K
        ), ze[K + oe] = !0);
      }
      if (K = null, Y !== void 0 && (r(Y), K = "" + Y), p(M) && (r(M.key), K = "" + M.key), "key" in M) {
        Y = {};
        for (var we in M)
          we !== "key" && (Y[we] = M[we]);
      } else Y = M;
      return K && m(
        Y,
        typeof v == "function" ? v.displayName || v.name || "Unknown" : v
      ), x(v, K, ue, Re, u(), Y);
    }
    function f(v, M) {
      if (typeof v == "object" && v && v.$$typeof !== Qe) {
        if (Q(v))
          for (var Y = 0; Y < v.length; Y++) {
            var oe = v[Y];
            S(oe) && E(oe, M);
          }
        else if (S(v))
          v._store && (v._store.validated = 1);
        else if (v === null || typeof v != "object" ? Y = null : (Y = V && v[V] || v["@@iterator"], Y = typeof Y == "function" ? Y : null), typeof Y == "function" && Y !== v.entries && (Y = Y.call(v), Y !== v))
          for (; !(v = Y.next()).done; )
            S(v.value) && E(v.value, M);
      }
    }
    function S(v) {
      return typeof v == "object" && v !== null && v.$$typeof === y;
    }
    function E(v, M) {
      if (v._store && !v._store.validated && v.key == null && (v._store.validated = 1, M = P(M), !Le[M])) {
        Le[M] = !0;
        var Y = "";
        v && v._owner != null && v._owner !== u() && (Y = null, typeof v._owner.tag == "number" ? Y = e(v._owner.type) : typeof v._owner.name == "string" && (Y = v._owner.name), Y = " It was passed a child from " + Y + ".");
        var oe = F.getCurrentStack;
        F.getCurrentStack = function() {
          var Re = l(v.type);
          return oe && (Re += oe() || ""), Re;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          M,
          Y
        ), F.getCurrentStack = oe;
      }
    }
    function P(v) {
      var M = "", Y = u();
      return Y && (Y = e(Y.type)) && (M = `

Check the render method of \`` + Y + "`."), M || (v = e(v)) && (M = `

Check the top-level render call using <` + v + ">."), M;
    }
    var T = yt, y = Symbol.for("react.transitional.element"), h = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), L = Symbol.for("react.profiler"), B = Symbol.for("react.consumer"), d = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), W = Symbol.for("react.memo"), z = Symbol.for("react.lazy"), U = Symbol.for("react.offscreen"), V = Symbol.iterator, te = Symbol.for("react.client.reference"), F = T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, R = Object.prototype.hasOwnProperty, I = Object.assign, J = Symbol.for("react.client.reference"), Q = Array.isArray, H = 0, X, _, q, G, re, Z, ae;
    n.__reactDisabledLog = !0;
    var O, ye, Ee = !1, Me = new (typeof WeakMap == "function" ? WeakMap : Map)(), Qe = Symbol.for("react.client.reference"), ve, Pe = {}, ze = {}, Le = {};
    ur.Fragment = w, ur.jsx = function(v, M, Y, oe, Re) {
      return b(v, M, Y, !1, oe, Re);
    }, ur.jsxs = function(v, M, Y, oe, Re) {
      return b(v, M, Y, !0, oe, Re);
    };
  }()), ur;
}
var ci;
function rc() {
  return ci || (ci = 1, process.env.NODE_ENV === "production" ? Ur.exports = ec() : Ur.exports = tc()), Ur.exports;
}
var N = rc();
const Er = {
  black: "#000",
  white: "#fff"
}, Wt = {
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
}, Ut = {
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
}, Yt = {
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
}, Ht = {
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
}, qt = {
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
}, fr = {
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
}, nc = {
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
};
function kt(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
const wt = "$$material";
function fn() {
  return fn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, fn.apply(null, arguments);
}
function oc(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function ic(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var ac = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(ic(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = oc(o);
      try {
        i.insertRule(n, i.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      var o;
      return (o = n.parentNode) == null ? void 0 : o.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), Ye = "-ms-", dn = "-moz-", fe = "-webkit-", xa = "comm", Eo = "rule", Co = "decl", sc = "@import", Sa = "@keyframes", cc = "@layer", lc = Math.abs, Rn = String.fromCharCode, uc = Object.assign;
function fc(e, t) {
  return Be(e, 0) ^ 45 ? (((t << 2 ^ Be(e, 0)) << 2 ^ Be(e, 1)) << 2 ^ Be(e, 2)) << 2 ^ Be(e, 3) : 0;
}
function Ea(e) {
  return e.trim();
}
function dc(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function de(e, t, r) {
  return e.replace(t, r);
}
function io(e, t) {
  return e.indexOf(t);
}
function Be(e, t) {
  return e.charCodeAt(t) | 0;
}
function Cr(e, t, r) {
  return e.slice(t, r);
}
function mt(e) {
  return e.length;
}
function To(e) {
  return e.length;
}
function Yr(e, t) {
  return t.push(e), e;
}
function pc(e, t) {
  return e.map(t).join("");
}
var $n = 1, Zt = 1, Ca = 0, Je = 0, je = 0, ir = "";
function Pn(e, t, r, n, o, i, s) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: $n, column: Zt, length: s, return: "" };
}
function dr(e, t) {
  return uc(Pn("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function mc() {
  return je;
}
function hc() {
  return je = Je > 0 ? Be(ir, --Je) : 0, Zt--, je === 10 && (Zt = 1, $n--), je;
}
function et() {
  return je = Je < Ca ? Be(ir, Je++) : 0, Zt++, je === 10 && (Zt = 1, $n++), je;
}
function vt() {
  return Be(ir, Je);
}
function an() {
  return Je;
}
function Ar(e, t) {
  return Cr(ir, e, t);
}
function Tr(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Ta(e) {
  return $n = Zt = 1, Ca = mt(ir = e), Je = 0, [];
}
function wa(e) {
  return ir = "", e;
}
function sn(e) {
  return Ea(Ar(Je - 1, ao(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function gc(e) {
  for (; (je = vt()) && je < 33; )
    et();
  return Tr(e) > 2 || Tr(je) > 3 ? "" : " ";
}
function yc(e, t) {
  for (; --t && et() && !(je < 48 || je > 102 || je > 57 && je < 65 || je > 70 && je < 97); )
    ;
  return Ar(e, an() + (t < 6 && vt() == 32 && et() == 32));
}
function ao(e) {
  for (; et(); )
    switch (je) {
      // ] ) " '
      case e:
        return Je;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && ao(je);
        break;
      // (
      case 40:
        e === 41 && ao(e);
        break;
      // \
      case 92:
        et();
        break;
    }
  return Je;
}
function bc(e, t) {
  for (; et() && e + je !== 57; )
    if (e + je === 84 && vt() === 47)
      break;
  return "/*" + Ar(t, Je - 1) + "*" + Rn(e === 47 ? e : et());
}
function vc(e) {
  for (; !Tr(vt()); )
    et();
  return Ar(e, Je);
}
function xc(e) {
  return wa(cn("", null, null, null, [""], e = Ta(e), 0, [0], e));
}
function cn(e, t, r, n, o, i, s, c, l) {
  for (var u = 0, p = 0, m = s, g = 0, x = 0, b = 0, f = 1, S = 1, E = 1, P = 0, T = "", y = o, h = i, w = n, k = T; S; )
    switch (b = P, P = et()) {
      // (
      case 40:
        if (b != 108 && Be(k, m - 1) == 58) {
          io(k += de(sn(P), "&", "&\f"), "&\f") != -1 && (E = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        k += sn(P);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        k += gc(b);
        break;
      // \
      case 92:
        k += yc(an() - 1, 7);
        continue;
      // /
      case 47:
        switch (vt()) {
          case 42:
          case 47:
            Yr(Sc(bc(et(), an()), t, r), l);
            break;
          default:
            k += "/";
        }
        break;
      // {
      case 123 * f:
        c[u++] = mt(k) * E;
      // } ; \0
      case 125 * f:
      case 59:
      case 0:
        switch (P) {
          // \0 }
          case 0:
          case 125:
            S = 0;
          // ;
          case 59 + p:
            E == -1 && (k = de(k, /\f/g, "")), x > 0 && mt(k) - m && Yr(x > 32 ? ui(k + ";", n, r, m - 1) : ui(de(k, " ", "") + ";", n, r, m - 2), l);
            break;
          // @ ;
          case 59:
            k += ";";
          // { rule/at-rule
          default:
            if (Yr(w = li(k, t, r, u, p, o, c, T, y = [], h = [], m), i), P === 123)
              if (p === 0)
                cn(k, t, w, w, y, i, m, c, h);
              else
                switch (g === 99 && Be(k, 3) === 110 ? 100 : g) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    cn(e, w, w, n && Yr(li(e, w, w, 0, 0, o, c, T, o, y = [], m), h), o, h, m, c, n ? y : h);
                    break;
                  default:
                    cn(k, w, w, w, [""], h, 0, c, h);
                }
        }
        u = p = x = 0, f = E = 1, T = k = "", m = s;
        break;
      // :
      case 58:
        m = 1 + mt(k), x = b;
      default:
        if (f < 1) {
          if (P == 123)
            --f;
          else if (P == 125 && f++ == 0 && hc() == 125)
            continue;
        }
        switch (k += Rn(P), P * f) {
          // &
          case 38:
            E = p > 0 ? 1 : (k += "\f", -1);
            break;
          // ,
          case 44:
            c[u++] = (mt(k) - 1) * E, E = 1;
            break;
          // @
          case 64:
            vt() === 45 && (k += sn(et())), g = vt(), p = m = mt(T = k += vc(an())), P++;
            break;
          // -
          case 45:
            b === 45 && mt(k) == 2 && (f = 0);
        }
    }
  return i;
}
function li(e, t, r, n, o, i, s, c, l, u, p) {
  for (var m = o - 1, g = o === 0 ? i : [""], x = To(g), b = 0, f = 0, S = 0; b < n; ++b)
    for (var E = 0, P = Cr(e, m + 1, m = lc(f = s[b])), T = e; E < x; ++E)
      (T = Ea(f > 0 ? g[E] + " " + P : de(P, /&\f/g, g[E]))) && (l[S++] = T);
  return Pn(e, t, r, o === 0 ? Eo : c, l, u, p);
}
function Sc(e, t, r) {
  return Pn(e, t, r, xa, Rn(mc()), Cr(e, 2, -2), 0);
}
function ui(e, t, r, n) {
  return Pn(e, t, r, Co, Cr(e, 0, n), Cr(e, n + 1, -1), n);
}
function Xt(e, t) {
  for (var r = "", n = To(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function Ec(e, t, r, n) {
  switch (e.type) {
    case cc:
      if (e.children.length) break;
    case sc:
    case Co:
      return e.return = e.return || e.value;
    case xa:
      return "";
    case Sa:
      return e.return = e.value + "{" + Xt(e.children, n) + "}";
    case Eo:
      e.value = e.props.join(",");
  }
  return mt(r = Xt(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Cc(e) {
  var t = To(e);
  return function(r, n, o, i) {
    for (var s = "", c = 0; c < t; c++)
      s += e[c](r, n, o, i) || "";
    return s;
  };
}
function Tc(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Oa(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var wc = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = vt(), o === 38 && i === 12 && (r[n] = 1), !Tr(i); )
    et();
  return Ar(t, Je);
}, Oc = function(t, r) {
  var n = -1, o = 44;
  do
    switch (Tr(o)) {
      case 0:
        o === 38 && vt() === 12 && (r[n] = 1), t[n] += wc(Je - 1, r, n);
        break;
      case 2:
        t[n] += sn(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = vt() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      // fallthrough
      default:
        t[n] += Rn(o);
    }
  while (o = et());
  return t;
}, Rc = function(t, r) {
  return wa(Oc(Ta(t), r));
}, fi = /* @__PURE__ */ new WeakMap(), $c = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !fi.get(n)) && !o) {
      fi.set(t, !0);
      for (var i = [], s = Rc(r, i), c = n.props, l = 0, u = 0; l < s.length; l++)
        for (var p = 0; p < c.length; p++, u++)
          t.props[u] = i[l] ? s[l].replace(/&\f/g, c[p]) : c[p] + " " + s[l];
    }
  }
}, Pc = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Ra(e, t) {
  switch (fc(e, t)) {
    // color-adjust
    case 5103:
      return fe + "print-" + e + e;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return fe + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return fe + e + dn + e + Ye + e + e;
    // flex, flex-direction
    case 6828:
    case 4268:
      return fe + e + Ye + e + e;
    // order
    case 6165:
      return fe + e + Ye + "flex-" + e + e;
    // align-items
    case 5187:
      return fe + e + de(e, /(\w+).+(:[^]+)/, fe + "box-$1$2" + Ye + "flex-$1$2") + e;
    // align-self
    case 5443:
      return fe + e + Ye + "flex-item-" + de(e, /flex-|-self/, "") + e;
    // align-content
    case 4675:
      return fe + e + Ye + "flex-line-pack" + de(e, /align-content|flex-|-self/, "") + e;
    // flex-shrink
    case 5548:
      return fe + e + Ye + de(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return fe + e + Ye + de(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return fe + "box-" + de(e, "-grow", "") + fe + e + Ye + de(e, "grow", "positive") + e;
    // transition
    case 4554:
      return fe + de(e, /([^-])(transform)/g, "$1" + fe + "$2") + e;
    // cursor
    case 6187:
      return de(de(de(e, /(zoom-|grab)/, fe + "$1"), /(image-set)/, fe + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return de(e, /(image-set\([^]*)/, fe + "$1$`$1");
    // justify-content
    case 4968:
      return de(de(e, /(.+:)(flex-)?(.*)/, fe + "box-pack:$3" + Ye + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + fe + e + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return de(e, /(.+)-inline(.+)/, fe + "$1$2") + e;
    // (min|max)?(width|height|inline-size|block-size)
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
      if (mt(e) - 1 - t > 6) switch (Be(e, t + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (Be(e, t + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return de(e, /(.+:)(.+)-([^]+)/, "$1" + fe + "$2-$3$1" + dn + (Be(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        // (s)tretch
        case 115:
          return ~io(e, "stretch") ? Ra(de(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    // position: sticky
    case 4949:
      if (Be(e, t + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (Be(e, mt(e) - 3 - (~io(e, "!important") && 10))) {
        // stic(k)y
        case 107:
          return de(e, ":", ":" + fe) + e;
        // (inline-)?fl(e)x
        case 101:
          return de(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + fe + (Be(e, 14) === 45 ? "inline-" : "") + "box$3$1" + fe + "$2$3$1" + Ye + "$2box$3") + e;
      }
      break;
    // writing-mode
    case 5936:
      switch (Be(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return fe + e + Ye + de(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return fe + e + Ye + de(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return fe + e + Ye + de(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return fe + e + Ye + e + e;
  }
  return e;
}
var kc = function(t, r, n, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case Co:
      t.return = Ra(t.value, t.length);
      break;
    case Sa:
      return Xt([dr(t, {
        value: de(t.value, "@", "@" + fe)
      })], o);
    case Eo:
      if (t.length) return pc(t.props, function(i) {
        switch (dc(i, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return Xt([dr(t, {
              props: [de(i, /:(read-\w+)/, ":" + dn + "$1")]
            })], o);
          // :placeholder
          case "::placeholder":
            return Xt([dr(t, {
              props: [de(i, /:(plac\w+)/, ":" + fe + "input-$1")]
            }), dr(t, {
              props: [de(i, /:(plac\w+)/, ":" + dn + "$1")]
            }), dr(t, {
              props: [de(i, /:(plac\w+)/, Ye + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, Ac = [kc], Nc = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(f) {
      var S = f.getAttribute("data-emotion");
      S.indexOf(" ") !== -1 && (document.head.appendChild(f), f.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || Ac, i = {}, s, c = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(f) {
      for (var S = f.getAttribute("data-emotion").split(" "), E = 1; E < S.length; E++)
        i[S[E]] = !0;
      c.push(f);
    }
  );
  var l, u = [$c, Pc];
  {
    var p, m = [Ec, Tc(function(f) {
      p.insert(f);
    })], g = Cc(u.concat(o, m)), x = function(S) {
      return Xt(xc(S), g);
    };
    l = function(S, E, P, T) {
      p = P, x(S ? S + "{" + E.styles + "}" : E.styles), T && (b.inserted[E.name] = !0);
    };
  }
  var b = {
    key: r,
    sheet: new ac({
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
  return b.sheet.hydrate(c), b;
}, Hr = { exports: {} }, pe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var di;
function Mc() {
  if (di) return pe;
  di = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
  function T(h) {
    if (typeof h == "object" && h !== null) {
      var w = h.$$typeof;
      switch (w) {
        case t:
          switch (h = h.type, h) {
            case l:
            case u:
            case n:
            case i:
            case o:
            case m:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case c:
                case p:
                case b:
                case x:
                case s:
                  return h;
                default:
                  return w;
              }
          }
        case r:
          return w;
      }
    }
  }
  function y(h) {
    return T(h) === u;
  }
  return pe.AsyncMode = l, pe.ConcurrentMode = u, pe.ContextConsumer = c, pe.ContextProvider = s, pe.Element = t, pe.ForwardRef = p, pe.Fragment = n, pe.Lazy = b, pe.Memo = x, pe.Portal = r, pe.Profiler = i, pe.StrictMode = o, pe.Suspense = m, pe.isAsyncMode = function(h) {
    return y(h) || T(h) === l;
  }, pe.isConcurrentMode = y, pe.isContextConsumer = function(h) {
    return T(h) === c;
  }, pe.isContextProvider = function(h) {
    return T(h) === s;
  }, pe.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === t;
  }, pe.isForwardRef = function(h) {
    return T(h) === p;
  }, pe.isFragment = function(h) {
    return T(h) === n;
  }, pe.isLazy = function(h) {
    return T(h) === b;
  }, pe.isMemo = function(h) {
    return T(h) === x;
  }, pe.isPortal = function(h) {
    return T(h) === r;
  }, pe.isProfiler = function(h) {
    return T(h) === i;
  }, pe.isStrictMode = function(h) {
    return T(h) === o;
  }, pe.isSuspense = function(h) {
    return T(h) === m;
  }, pe.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === n || h === u || h === i || h === o || h === m || h === g || typeof h == "object" && h !== null && (h.$$typeof === b || h.$$typeof === x || h.$$typeof === s || h.$$typeof === c || h.$$typeof === p || h.$$typeof === S || h.$$typeof === E || h.$$typeof === P || h.$$typeof === f);
  }, pe.typeOf = T, pe;
}
var me = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pi;
function Ic() {
  return pi || (pi = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
    function T(O) {
      return typeof O == "string" || typeof O == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      O === n || O === u || O === i || O === o || O === m || O === g || typeof O == "object" && O !== null && (O.$$typeof === b || O.$$typeof === x || O.$$typeof === s || O.$$typeof === c || O.$$typeof === p || O.$$typeof === S || O.$$typeof === E || O.$$typeof === P || O.$$typeof === f);
    }
    function y(O) {
      if (typeof O == "object" && O !== null) {
        var ye = O.$$typeof;
        switch (ye) {
          case t:
            var Ee = O.type;
            switch (Ee) {
              case l:
              case u:
              case n:
              case i:
              case o:
              case m:
                return Ee;
              default:
                var Me = Ee && Ee.$$typeof;
                switch (Me) {
                  case c:
                  case p:
                  case b:
                  case x:
                  case s:
                    return Me;
                  default:
                    return ye;
                }
            }
          case r:
            return ye;
        }
      }
    }
    var h = l, w = u, k = c, L = s, B = t, d = p, A = n, D = b, j = x, W = r, z = i, U = o, V = m, te = !1;
    function F(O) {
      return te || (te = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), R(O) || y(O) === l;
    }
    function R(O) {
      return y(O) === u;
    }
    function I(O) {
      return y(O) === c;
    }
    function J(O) {
      return y(O) === s;
    }
    function Q(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function H(O) {
      return y(O) === p;
    }
    function X(O) {
      return y(O) === n;
    }
    function _(O) {
      return y(O) === b;
    }
    function q(O) {
      return y(O) === x;
    }
    function G(O) {
      return y(O) === r;
    }
    function re(O) {
      return y(O) === i;
    }
    function Z(O) {
      return y(O) === o;
    }
    function ae(O) {
      return y(O) === m;
    }
    me.AsyncMode = h, me.ConcurrentMode = w, me.ContextConsumer = k, me.ContextProvider = L, me.Element = B, me.ForwardRef = d, me.Fragment = A, me.Lazy = D, me.Memo = j, me.Portal = W, me.Profiler = z, me.StrictMode = U, me.Suspense = V, me.isAsyncMode = F, me.isConcurrentMode = R, me.isContextConsumer = I, me.isContextProvider = J, me.isElement = Q, me.isForwardRef = H, me.isFragment = X, me.isLazy = _, me.isMemo = q, me.isPortal = G, me.isProfiler = re, me.isStrictMode = Z, me.isSuspense = ae, me.isValidElementType = T, me.typeOf = y;
  }()), me;
}
var mi;
function _c() {
  return mi || (mi = 1, process.env.NODE_ENV === "production" ? Hr.exports = Mc() : Hr.exports = Ic()), Hr.exports;
}
var Hn, hi;
function jc() {
  if (hi) return Hn;
  hi = 1;
  var e = _c(), t = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
  }, r = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, n = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, o = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, i = {};
  i[e.ForwardRef] = n, i[e.Memo] = o;
  function s(b) {
    return e.isMemo(b) ? o : i[b.$$typeof] || t;
  }
  var c = Object.defineProperty, l = Object.getOwnPropertyNames, u = Object.getOwnPropertySymbols, p = Object.getOwnPropertyDescriptor, m = Object.getPrototypeOf, g = Object.prototype;
  function x(b, f, S) {
    if (typeof f != "string") {
      if (g) {
        var E = m(f);
        E && E !== g && x(b, E, S);
      }
      var P = l(f);
      u && (P = P.concat(u(f)));
      for (var T = s(b), y = s(f), h = 0; h < P.length; ++h) {
        var w = P[h];
        if (!r[w] && !(S && S[w]) && !(y && y[w]) && !(T && T[w])) {
          var k = p(f, w);
          try {
            c(b, w, k);
          } catch {
          }
        }
      }
    }
    return b;
  }
  return Hn = x, Hn;
}
jc();
var Dc = !0;
function $a(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (n += o + " ");
  }), n;
}
var wo = function(t, r, n) {
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
  Dc === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, Oo = function(t, r, n) {
  wo(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function Lc(e) {
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
var Bc = {
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
  scale: 1,
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
}, Vc = /[A-Z]|^ms/g, Fc = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Pa = function(t) {
  return t.charCodeAt(1) === 45;
}, gi = function(t) {
  return t != null && typeof t != "boolean";
}, qn = /* @__PURE__ */ Oa(function(e) {
  return Pa(e) ? e : e.replace(Vc, "-$&").toLowerCase();
}), yi = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(Fc, function(n, o, i) {
          return ht = {
            name: o,
            styles: i,
            next: ht
          }, o;
        });
  }
  return Bc[t] !== 1 && !Pa(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function wr(e, t, r) {
  if (r == null)
    return "";
  var n = r;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var o = r;
      if (o.anim === 1)
        return ht = {
          name: o.name,
          styles: o.styles,
          next: ht
        }, o.name;
      var i = r;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            ht = {
              name: s.name,
              styles: s.styles,
              next: ht
            }, s = s.next;
        var c = i.styles + ";";
        return c;
      }
      return zc(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var l = ht, u = r(e);
        return ht = l, wr(e, t, u);
      }
      break;
    }
  }
  var p = r;
  if (t == null)
    return p;
  var m = t[p];
  return m !== void 0 ? m : p;
}
function zc(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += wr(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var s = r[i];
      if (typeof s != "object") {
        var c = s;
        t != null && t[c] !== void 0 ? n += i + "{" + t[c] + "}" : gi(c) && (n += qn(i) + ":" + yi(i, c) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
        for (var l = 0; l < s.length; l++)
          gi(s[l]) && (n += qn(i) + ":" + yi(i, s[l]) + ";");
      else {
        var u = wr(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            n += qn(i) + ":" + u + ";";
            break;
          }
          default:
            n += i + "{" + u + "}";
        }
      }
    }
  return n;
}
var bi = /label:\s*([^\s;{]+)\s*(;|$)/g, ht;
function Nr(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  ht = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += wr(r, t, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var c = 1; c < e.length; c++)
    if (o += wr(r, t, e[c]), n) {
      var l = i;
      o += l[c];
    }
  bi.lastIndex = 0;
  for (var u = "", p; (p = bi.exec(o)) !== null; )
    u += "-" + p[1];
  var m = Lc(o) + u;
  return {
    name: m,
    styles: o,
    next: ht
  };
}
var Wc = function(t) {
  return t();
}, ka = C.useInsertionEffect ? C.useInsertionEffect : !1, Aa = ka || Wc, vi = ka || C.useLayoutEffect, Na = /* @__PURE__ */ C.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Nc({
    key: "css"
  }) : null
);
Na.Provider;
var Ro = function(t) {
  return /* @__PURE__ */ Ks(function(r, n) {
    var o = Xs(Na);
    return t(r, o, n);
  });
}, Mr = /* @__PURE__ */ C.createContext({}), $o = {}.hasOwnProperty, so = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Uc = function(t, r) {
  var n = {};
  for (var o in r)
    $o.call(r, o) && (n[o] = r[o]);
  return n[so] = t, n;
}, Yc = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return wo(r, n, o), Aa(function() {
    return Oo(r, n, o);
  }), null;
}, Hc = /* @__PURE__ */ Ro(function(e, t, r) {
  var n = e.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var o = e[so], i = [n], s = "";
  typeof e.className == "string" ? s = $a(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var c = Nr(i, void 0, C.useContext(Mr));
  s += t.key + "-" + c.name;
  var l = {};
  for (var u in e)
    $o.call(e, u) && u !== "css" && u !== so && (l[u] = e[u]);
  return l.className = s, r && (l.ref = r), /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement(Yc, {
    cache: t,
    serialized: c,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ C.createElement(o, l));
}), qc = Hc, Gc = function(t, r) {
  var n = arguments;
  if (r == null || !$o.call(r, "css"))
    return C.createElement.apply(void 0, n);
  var o = n.length, i = new Array(o);
  i[0] = qc, i[1] = Uc(t, r);
  for (var s = 2; s < o; s++)
    i[s] = n[s];
  return C.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Gc);
var Kc = /* @__PURE__ */ Ro(function(e, t) {
  var r = e.styles, n = Nr([r], void 0, C.useContext(Mr)), o = C.useRef();
  return vi(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), c = !1, l = document.querySelector('style[data-emotion="' + i + " " + n.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), l !== null && (c = !0, l.setAttribute("data-emotion", i), s.hydrate([l])), o.current = [s, c], function() {
      s.flush();
    };
  }, [t]), vi(function() {
    var i = o.current, s = i[0], c = i[1];
    if (c) {
      i[1] = !1;
      return;
    }
    if (n.next !== void 0 && Oo(t, n.next, !0), s.tags.length) {
      var l = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = l, s.flush();
    }
    t.insert("", n, s, !1);
  }, [t, n.name]), null;
});
function Po() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return Nr(t);
}
function Ir() {
  var e = Po.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var Xc = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Jc = /* @__PURE__ */ Oa(
  function(e) {
    return Xc.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Qc = Jc, Zc = function(t) {
  return t !== "theme";
}, xi = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Qc : Zc;
}, Si = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, el = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return wo(r, n, o), Aa(function() {
    return Oo(r, n, o);
  }), null;
}, tl = function e(t, r) {
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, s;
  r !== void 0 && (i = r.label, s = r.target);
  var c = Si(t, r, n), l = c || xi(o), u = !l("as");
  return function() {
    var p = arguments, m = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && m.push("label:" + i + ";"), p[0] == null || p[0].raw === void 0)
      m.push.apply(m, p);
    else {
      var g = p[0];
      m.push(g[0]);
      for (var x = p.length, b = 1; b < x; b++)
        m.push(p[b], g[b]);
    }
    var f = Ro(function(S, E, P) {
      var T = u && S.as || o, y = "", h = [], w = S;
      if (S.theme == null) {
        w = {};
        for (var k in S)
          w[k] = S[k];
        w.theme = C.useContext(Mr);
      }
      typeof S.className == "string" ? y = $a(E.registered, h, S.className) : S.className != null && (y = S.className + " ");
      var L = Nr(m.concat(h), E.registered, w);
      y += E.key + "-" + L.name, s !== void 0 && (y += " " + s);
      var B = u && c === void 0 ? xi(T) : l, d = {};
      for (var A in S)
        u && A === "as" || B(A) && (d[A] = S[A]);
      return d.className = y, P && (d.ref = P), /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement(el, {
        cache: E,
        serialized: L,
        isStringTag: typeof T == "string"
      }), /* @__PURE__ */ C.createElement(T, d));
    });
    return f.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", f.defaultProps = t.defaultProps, f.__emotion_real = f, f.__emotion_base = o, f.__emotion_styles = m, f.__emotion_forwardProp = c, Object.defineProperty(f, "toString", {
      value: function() {
        return "." + s;
      }
    }), f.withComponent = function(S, E) {
      var P = e(S, fn({}, r, E, {
        shouldForwardProp: Si(f, E, !0)
      }));
      return P.apply(void 0, m);
    }, f;
  };
}, rl = [
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
], co = tl.bind(null);
rl.forEach(function(e) {
  co[e] = co(e);
});
var qr = { exports: {} }, Gr = { exports: {} }, he = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ei;
function nl() {
  if (Ei) return he;
  Ei = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
  function T(h) {
    if (typeof h == "object" && h !== null) {
      var w = h.$$typeof;
      switch (w) {
        case t:
          switch (h = h.type, h) {
            case l:
            case u:
            case n:
            case i:
            case o:
            case m:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case c:
                case p:
                case b:
                case x:
                case s:
                  return h;
                default:
                  return w;
              }
          }
        case r:
          return w;
      }
    }
  }
  function y(h) {
    return T(h) === u;
  }
  return he.AsyncMode = l, he.ConcurrentMode = u, he.ContextConsumer = c, he.ContextProvider = s, he.Element = t, he.ForwardRef = p, he.Fragment = n, he.Lazy = b, he.Memo = x, he.Portal = r, he.Profiler = i, he.StrictMode = o, he.Suspense = m, he.isAsyncMode = function(h) {
    return y(h) || T(h) === l;
  }, he.isConcurrentMode = y, he.isContextConsumer = function(h) {
    return T(h) === c;
  }, he.isContextProvider = function(h) {
    return T(h) === s;
  }, he.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === t;
  }, he.isForwardRef = function(h) {
    return T(h) === p;
  }, he.isFragment = function(h) {
    return T(h) === n;
  }, he.isLazy = function(h) {
    return T(h) === b;
  }, he.isMemo = function(h) {
    return T(h) === x;
  }, he.isPortal = function(h) {
    return T(h) === r;
  }, he.isProfiler = function(h) {
    return T(h) === i;
  }, he.isStrictMode = function(h) {
    return T(h) === o;
  }, he.isSuspense = function(h) {
    return T(h) === m;
  }, he.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === n || h === u || h === i || h === o || h === m || h === g || typeof h == "object" && h !== null && (h.$$typeof === b || h.$$typeof === x || h.$$typeof === s || h.$$typeof === c || h.$$typeof === p || h.$$typeof === S || h.$$typeof === E || h.$$typeof === P || h.$$typeof === f);
  }, he.typeOf = T, he;
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
var Ci;
function ol() {
  return Ci || (Ci = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
    function T(O) {
      return typeof O == "string" || typeof O == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      O === n || O === u || O === i || O === o || O === m || O === g || typeof O == "object" && O !== null && (O.$$typeof === b || O.$$typeof === x || O.$$typeof === s || O.$$typeof === c || O.$$typeof === p || O.$$typeof === S || O.$$typeof === E || O.$$typeof === P || O.$$typeof === f);
    }
    function y(O) {
      if (typeof O == "object" && O !== null) {
        var ye = O.$$typeof;
        switch (ye) {
          case t:
            var Ee = O.type;
            switch (Ee) {
              case l:
              case u:
              case n:
              case i:
              case o:
              case m:
                return Ee;
              default:
                var Me = Ee && Ee.$$typeof;
                switch (Me) {
                  case c:
                  case p:
                  case b:
                  case x:
                  case s:
                    return Me;
                  default:
                    return ye;
                }
            }
          case r:
            return ye;
        }
      }
    }
    var h = l, w = u, k = c, L = s, B = t, d = p, A = n, D = b, j = x, W = r, z = i, U = o, V = m, te = !1;
    function F(O) {
      return te || (te = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), R(O) || y(O) === l;
    }
    function R(O) {
      return y(O) === u;
    }
    function I(O) {
      return y(O) === c;
    }
    function J(O) {
      return y(O) === s;
    }
    function Q(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function H(O) {
      return y(O) === p;
    }
    function X(O) {
      return y(O) === n;
    }
    function _(O) {
      return y(O) === b;
    }
    function q(O) {
      return y(O) === x;
    }
    function G(O) {
      return y(O) === r;
    }
    function re(O) {
      return y(O) === i;
    }
    function Z(O) {
      return y(O) === o;
    }
    function ae(O) {
      return y(O) === m;
    }
    ge.AsyncMode = h, ge.ConcurrentMode = w, ge.ContextConsumer = k, ge.ContextProvider = L, ge.Element = B, ge.ForwardRef = d, ge.Fragment = A, ge.Lazy = D, ge.Memo = j, ge.Portal = W, ge.Profiler = z, ge.StrictMode = U, ge.Suspense = V, ge.isAsyncMode = F, ge.isConcurrentMode = R, ge.isContextConsumer = I, ge.isContextProvider = J, ge.isElement = Q, ge.isForwardRef = H, ge.isFragment = X, ge.isLazy = _, ge.isMemo = q, ge.isPortal = G, ge.isProfiler = re, ge.isStrictMode = Z, ge.isSuspense = ae, ge.isValidElementType = T, ge.typeOf = y;
  }()), ge;
}
var Ti;
function Ma() {
  return Ti || (Ti = 1, process.env.NODE_ENV === "production" ? Gr.exports = nl() : Gr.exports = ol()), Gr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Gn, wi;
function il() {
  if (wi) return Gn;
  wi = 1;
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
      var l = Object.getOwnPropertyNames(s).map(function(p) {
        return s[p];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        u[p] = p;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Gn = o() ? Object.assign : function(i, s) {
    for (var c, l = n(i), u, p = 1; p < arguments.length; p++) {
      c = Object(arguments[p]);
      for (var m in c)
        t.call(c, m) && (l[m] = c[m]);
      if (e) {
        u = e(c);
        for (var g = 0; g < u.length; g++)
          r.call(c, u[g]) && (l[u[g]] = c[u[g]]);
      }
    }
    return l;
  }, Gn;
}
var Kn, Oi;
function ko() {
  if (Oi) return Kn;
  Oi = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Kn = e, Kn;
}
var Xn, Ri;
function Ia() {
  return Ri || (Ri = 1, Xn = Function.call.bind(Object.prototype.hasOwnProperty)), Xn;
}
var Jn, $i;
function al() {
  if ($i) return Jn;
  $i = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ ko(), r = {}, n = /* @__PURE__ */ Ia();
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
      for (var p in i)
        if (n(i, p)) {
          var m;
          try {
            if (typeof i[p] != "function") {
              var g = Error(
                (l || "React class") + ": " + c + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw g.name = "Invariant Violation", g;
            }
            m = i[p](s, p, l, c, null, t);
          } catch (b) {
            m = b;
          }
          if (m && !(m instanceof Error) && e(
            (l || "React class") + ": type specification of " + c + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in r)) {
            r[m.message] = !0;
            var x = u ? u() : "";
            e(
              "Failed " + c + " type: " + m.message + (x ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Jn = o, Jn;
}
var Qn, Pi;
function sl() {
  if (Pi) return Qn;
  Pi = 1;
  var e = Ma(), t = il(), r = /* @__PURE__ */ ko(), n = /* @__PURE__ */ Ia(), o = /* @__PURE__ */ al(), i = function() {
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
  return Qn = function(c, l) {
    var u = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function m(R) {
      var I = R && (u && R[u] || R[p]);
      if (typeof I == "function")
        return I;
    }
    var g = "<<anonymous>>", x = {
      array: E("array"),
      bigint: E("bigint"),
      bool: E("boolean"),
      func: E("function"),
      number: E("number"),
      object: E("object"),
      string: E("string"),
      symbol: E("symbol"),
      any: P(),
      arrayOf: T,
      element: y(),
      elementType: h(),
      instanceOf: w,
      node: d(),
      objectOf: L,
      oneOf: k,
      oneOfType: B,
      shape: D,
      exact: j
    };
    function b(R, I) {
      return R === I ? R !== 0 || 1 / R === 1 / I : R !== R && I !== I;
    }
    function f(R, I) {
      this.message = R, this.data = I && typeof I == "object" ? I : {}, this.stack = "";
    }
    f.prototype = Error.prototype;
    function S(R) {
      if (process.env.NODE_ENV !== "production")
        var I = {}, J = 0;
      function Q(X, _, q, G, re, Z, ae) {
        if (G = G || g, Z = Z || q, ae !== r) {
          if (l) {
            var O = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw O.name = "Invariant Violation", O;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ye = G + ":" + q;
            !I[ye] && // Avoid spamming the console because they are often not actionable except for lib authors
            J < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + Z + "` prop on `" + G + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), I[ye] = !0, J++);
          }
        }
        return _[q] == null ? X ? _[q] === null ? new f("The " + re + " `" + Z + "` is marked as required " + ("in `" + G + "`, but its value is `null`.")) : new f("The " + re + " `" + Z + "` is marked as required in " + ("`" + G + "`, but its value is `undefined`.")) : null : R(_, q, G, re, Z);
      }
      var H = Q.bind(null, !1);
      return H.isRequired = Q.bind(null, !0), H;
    }
    function E(R) {
      function I(J, Q, H, X, _, q) {
        var G = J[Q], re = U(G);
        if (re !== R) {
          var Z = V(G);
          return new f(
            "Invalid " + X + " `" + _ + "` of type " + ("`" + Z + "` supplied to `" + H + "`, expected ") + ("`" + R + "`."),
            { expectedType: R }
          );
        }
        return null;
      }
      return S(I);
    }
    function P() {
      return S(s);
    }
    function T(R) {
      function I(J, Q, H, X, _) {
        if (typeof R != "function")
          return new f("Property `" + _ + "` of component `" + H + "` has invalid PropType notation inside arrayOf.");
        var q = J[Q];
        if (!Array.isArray(q)) {
          var G = U(q);
          return new f("Invalid " + X + " `" + _ + "` of type " + ("`" + G + "` supplied to `" + H + "`, expected an array."));
        }
        for (var re = 0; re < q.length; re++) {
          var Z = R(q, re, H, X, _ + "[" + re + "]", r);
          if (Z instanceof Error)
            return Z;
        }
        return null;
      }
      return S(I);
    }
    function y() {
      function R(I, J, Q, H, X) {
        var _ = I[J];
        if (!c(_)) {
          var q = U(_);
          return new f("Invalid " + H + " `" + X + "` of type " + ("`" + q + "` supplied to `" + Q + "`, expected a single ReactElement."));
        }
        return null;
      }
      return S(R);
    }
    function h() {
      function R(I, J, Q, H, X) {
        var _ = I[J];
        if (!e.isValidElementType(_)) {
          var q = U(_);
          return new f("Invalid " + H + " `" + X + "` of type " + ("`" + q + "` supplied to `" + Q + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return S(R);
    }
    function w(R) {
      function I(J, Q, H, X, _) {
        if (!(J[Q] instanceof R)) {
          var q = R.name || g, G = F(J[Q]);
          return new f("Invalid " + X + " `" + _ + "` of type " + ("`" + G + "` supplied to `" + H + "`, expected ") + ("instance of `" + q + "`."));
        }
        return null;
      }
      return S(I);
    }
    function k(R) {
      if (!Array.isArray(R))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function I(J, Q, H, X, _) {
        for (var q = J[Q], G = 0; G < R.length; G++)
          if (b(q, R[G]))
            return null;
        var re = JSON.stringify(R, function(ae, O) {
          var ye = V(O);
          return ye === "symbol" ? String(O) : O;
        });
        return new f("Invalid " + X + " `" + _ + "` of value `" + String(q) + "` " + ("supplied to `" + H + "`, expected one of " + re + "."));
      }
      return S(I);
    }
    function L(R) {
      function I(J, Q, H, X, _) {
        if (typeof R != "function")
          return new f("Property `" + _ + "` of component `" + H + "` has invalid PropType notation inside objectOf.");
        var q = J[Q], G = U(q);
        if (G !== "object")
          return new f("Invalid " + X + " `" + _ + "` of type " + ("`" + G + "` supplied to `" + H + "`, expected an object."));
        for (var re in q)
          if (n(q, re)) {
            var Z = R(q, re, H, X, _ + "." + re, r);
            if (Z instanceof Error)
              return Z;
          }
        return null;
      }
      return S(I);
    }
    function B(R) {
      if (!Array.isArray(R))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var I = 0; I < R.length; I++) {
        var J = R[I];
        if (typeof J != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + te(J) + " at index " + I + "."
          ), s;
      }
      function Q(H, X, _, q, G) {
        for (var re = [], Z = 0; Z < R.length; Z++) {
          var ae = R[Z], O = ae(H, X, _, q, G, r);
          if (O == null)
            return null;
          O.data && n(O.data, "expectedType") && re.push(O.data.expectedType);
        }
        var ye = re.length > 0 ? ", expected one of type [" + re.join(", ") + "]" : "";
        return new f("Invalid " + q + " `" + G + "` supplied to " + ("`" + _ + "`" + ye + "."));
      }
      return S(Q);
    }
    function d() {
      function R(I, J, Q, H, X) {
        return W(I[J]) ? null : new f("Invalid " + H + " `" + X + "` supplied to " + ("`" + Q + "`, expected a ReactNode."));
      }
      return S(R);
    }
    function A(R, I, J, Q, H) {
      return new f(
        (R || "React class") + ": " + I + " type `" + J + "." + Q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + H + "`."
      );
    }
    function D(R) {
      function I(J, Q, H, X, _) {
        var q = J[Q], G = U(q);
        if (G !== "object")
          return new f("Invalid " + X + " `" + _ + "` of type `" + G + "` " + ("supplied to `" + H + "`, expected `object`."));
        for (var re in R) {
          var Z = R[re];
          if (typeof Z != "function")
            return A(H, X, _, re, V(Z));
          var ae = Z(q, re, H, X, _ + "." + re, r);
          if (ae)
            return ae;
        }
        return null;
      }
      return S(I);
    }
    function j(R) {
      function I(J, Q, H, X, _) {
        var q = J[Q], G = U(q);
        if (G !== "object")
          return new f("Invalid " + X + " `" + _ + "` of type `" + G + "` " + ("supplied to `" + H + "`, expected `object`."));
        var re = t({}, J[Q], R);
        for (var Z in re) {
          var ae = R[Z];
          if (n(R, Z) && typeof ae != "function")
            return A(H, X, _, Z, V(ae));
          if (!ae)
            return new f(
              "Invalid " + X + " `" + _ + "` key `" + Z + "` supplied to `" + H + "`.\nBad object: " + JSON.stringify(J[Q], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(R), null, "  ")
            );
          var O = ae(q, Z, H, X, _ + "." + Z, r);
          if (O)
            return O;
        }
        return null;
      }
      return S(I);
    }
    function W(R) {
      switch (typeof R) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !R;
        case "object":
          if (Array.isArray(R))
            return R.every(W);
          if (R === null || c(R))
            return !0;
          var I = m(R);
          if (I) {
            var J = I.call(R), Q;
            if (I !== R.entries) {
              for (; !(Q = J.next()).done; )
                if (!W(Q.value))
                  return !1;
            } else
              for (; !(Q = J.next()).done; ) {
                var H = Q.value;
                if (H && !W(H[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function z(R, I) {
      return R === "symbol" ? !0 : I ? I["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && I instanceof Symbol : !1;
    }
    function U(R) {
      var I = typeof R;
      return Array.isArray(R) ? "array" : R instanceof RegExp ? "object" : z(I, R) ? "symbol" : I;
    }
    function V(R) {
      if (typeof R > "u" || R === null)
        return "" + R;
      var I = U(R);
      if (I === "object") {
        if (R instanceof Date)
          return "date";
        if (R instanceof RegExp)
          return "regexp";
      }
      return I;
    }
    function te(R) {
      var I = V(R);
      switch (I) {
        case "array":
        case "object":
          return "an " + I;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + I;
        default:
          return I;
      }
    }
    function F(R) {
      return !R.constructor || !R.constructor.name ? g : R.constructor.name;
    }
    return x.checkPropTypes = o, x.resetWarningCache = o.resetWarningCache, x.PropTypes = x, x;
  }, Qn;
}
var Zn, ki;
function cl() {
  if (ki) return Zn;
  ki = 1;
  var e = /* @__PURE__ */ ko();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Zn = function() {
    function n(s, c, l, u, p, m) {
      if (m !== e) {
        var g = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw g.name = "Invariant Violation", g;
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
  }, Zn;
}
var Ai;
function ll() {
  if (Ai) return qr.exports;
  if (Ai = 1, process.env.NODE_ENV !== "production") {
    var e = Ma(), t = !0;
    qr.exports = /* @__PURE__ */ sl()(e.isElement, t);
  } else
    qr.exports = /* @__PURE__ */ cl()();
  return qr.exports;
}
var ul = /* @__PURE__ */ ll();
const a = /* @__PURE__ */ Zs(ul);
function fl(e) {
  return e == null || Object.keys(e).length === 0;
}
function _a(e) {
  const {
    styles: t,
    defaultTheme: r = {}
  } = e, n = typeof t == "function" ? (o) => t(fl(o) ? r : o) : t;
  return /* @__PURE__ */ N.jsx(Kc, {
    styles: n
  });
}
process.env.NODE_ENV !== "production" && (_a.propTypes = {
  defaultTheme: a.object,
  styles: a.oneOfType([a.array, a.string, a.object, a.func])
});
/**
 * @mui/styled-engine v6.4.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function ja(e, t) {
  const r = co(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
function dl(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Ni = [];
function Mi(e) {
  return Ni[0] = e, Nr(Ni);
}
var Kr = { exports: {} }, xe = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ii;
function pl() {
  if (Ii) return xe;
  Ii = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), x = Symbol.for("react.client.reference");
  function b(f) {
    if (typeof f == "object" && f !== null) {
      var S = f.$$typeof;
      switch (S) {
        case e:
          switch (f = f.type, f) {
            case r:
            case o:
            case n:
            case l:
            case u:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case s:
                case c:
                case m:
                case p:
                  return f;
                case i:
                  return f;
                default:
                  return S;
              }
          }
        case t:
          return S;
      }
    }
  }
  return xe.ContextConsumer = i, xe.ContextProvider = s, xe.Element = e, xe.ForwardRef = c, xe.Fragment = r, xe.Lazy = m, xe.Memo = p, xe.Portal = t, xe.Profiler = o, xe.StrictMode = n, xe.Suspense = l, xe.SuspenseList = u, xe.isContextConsumer = function(f) {
    return b(f) === i;
  }, xe.isContextProvider = function(f) {
    return b(f) === s;
  }, xe.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }, xe.isForwardRef = function(f) {
    return b(f) === c;
  }, xe.isFragment = function(f) {
    return b(f) === r;
  }, xe.isLazy = function(f) {
    return b(f) === m;
  }, xe.isMemo = function(f) {
    return b(f) === p;
  }, xe.isPortal = function(f) {
    return b(f) === t;
  }, xe.isProfiler = function(f) {
    return b(f) === o;
  }, xe.isStrictMode = function(f) {
    return b(f) === n;
  }, xe.isSuspense = function(f) {
    return b(f) === l;
  }, xe.isSuspenseList = function(f) {
    return b(f) === u;
  }, xe.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === r || f === o || f === n || f === l || f === u || f === g || typeof f == "object" && f !== null && (f.$$typeof === m || f.$$typeof === p || f.$$typeof === s || f.$$typeof === i || f.$$typeof === c || f.$$typeof === x || f.getModuleId !== void 0);
  }, xe.typeOf = b, xe;
}
var Se = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _i;
function ml() {
  return _i || (_i = 1, process.env.NODE_ENV !== "production" && function() {
    function e(f) {
      if (typeof f == "object" && f !== null) {
        var S = f.$$typeof;
        switch (S) {
          case t:
            switch (f = f.type, f) {
              case n:
              case i:
              case o:
              case u:
              case p:
                return f;
              default:
                switch (f = f && f.$$typeof, f) {
                  case c:
                  case l:
                  case g:
                  case m:
                    return f;
                  case s:
                    return f;
                  default:
                    return S;
                }
            }
          case r:
            return S;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), b = Symbol.for("react.client.reference");
    Se.ContextConsumer = s, Se.ContextProvider = c, Se.Element = t, Se.ForwardRef = l, Se.Fragment = n, Se.Lazy = g, Se.Memo = m, Se.Portal = r, Se.Profiler = i, Se.StrictMode = o, Se.Suspense = u, Se.SuspenseList = p, Se.isContextConsumer = function(f) {
      return e(f) === s;
    }, Se.isContextProvider = function(f) {
      return e(f) === c;
    }, Se.isElement = function(f) {
      return typeof f == "object" && f !== null && f.$$typeof === t;
    }, Se.isForwardRef = function(f) {
      return e(f) === l;
    }, Se.isFragment = function(f) {
      return e(f) === n;
    }, Se.isLazy = function(f) {
      return e(f) === g;
    }, Se.isMemo = function(f) {
      return e(f) === m;
    }, Se.isPortal = function(f) {
      return e(f) === r;
    }, Se.isProfiler = function(f) {
      return e(f) === i;
    }, Se.isStrictMode = function(f) {
      return e(f) === o;
    }, Se.isSuspense = function(f) {
      return e(f) === u;
    }, Se.isSuspenseList = function(f) {
      return e(f) === p;
    }, Se.isValidElementType = function(f) {
      return typeof f == "string" || typeof f == "function" || f === n || f === i || f === o || f === u || f === p || f === x || typeof f == "object" && f !== null && (f.$$typeof === g || f.$$typeof === m || f.$$typeof === c || f.$$typeof === s || f.$$typeof === l || f.$$typeof === b || f.getModuleId !== void 0);
    }, Se.typeOf = e;
  }()), Se;
}
var ji;
function hl() {
  return ji || (ji = 1, process.env.NODE_ENV === "production" ? Kr.exports = /* @__PURE__ */ pl() : Kr.exports = /* @__PURE__ */ ml()), Kr.exports;
}
var pn = /* @__PURE__ */ hl();
function gt(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Da(e) {
  if (/* @__PURE__ */ C.isValidElement(e) || pn.isValidElementType(e) || !gt(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = Da(e[r]);
  }), t;
}
function tt(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return gt(e) && gt(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ C.isValidElement(t[o]) || pn.isValidElementType(t[o]) ? n[o] = t[o] : gt(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && gt(e[o]) ? n[o] = tt(e[o], t[o], r) : r.clone ? n[o] = gt(t[o]) ? Da(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
const gl = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function yl(e) {
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
    step: n = 5,
    ...o
  } = e, i = gl(t), s = Object.keys(i);
  function c(g) {
    return `@media (min-width:${typeof t[g] == "number" ? t[g] : g}${r})`;
  }
  function l(g) {
    return `@media (max-width:${(typeof t[g] == "number" ? t[g] : g) - n / 100}${r})`;
  }
  function u(g, x) {
    const b = s.indexOf(x);
    return `@media (min-width:${typeof t[g] == "number" ? t[g] : g}${r}) and (max-width:${(b !== -1 && typeof t[s[b]] == "number" ? t[s[b]] : x) - n / 100}${r})`;
  }
  function p(g) {
    return s.indexOf(g) + 1 < s.length ? u(g, s[s.indexOf(g) + 1]) : c(g);
  }
  function m(g) {
    const x = s.indexOf(g);
    return x === 0 ? c(s[1]) : x === s.length - 1 ? l(s[x]) : u(g, s[s.indexOf(g) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: s,
    values: i,
    up: c,
    down: l,
    between: u,
    only: p,
    not: m,
    unit: r,
    ...o
  };
}
function bl(e, t) {
  if (!e.containerQueries)
    return t;
  const r = Object.keys(t).filter((n) => n.startsWith("@container")).sort((n, o) => {
    var s, c;
    const i = /min-width:\s*([0-9.]+)/;
    return +(((s = n.match(i)) == null ? void 0 : s[1]) || 0) - +(((c = o.match(i)) == null ? void 0 : c[1]) || 0);
  });
  return r.length ? r.reduce((n, o) => {
    const i = t[o];
    return delete n[o], n[o] = i, n;
  }, {
    ...t
  }) : t;
}
function vl(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function xl(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : kt(18, `(${t})`));
    return null;
  }
  const [, n, o] = r, i = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(i);
}
function Sl(e) {
  const t = (i, s) => i.replace("@media", s ? `@container ${s}` : "@container");
  function r(i, s) {
    i.up = (...c) => t(e.breakpoints.up(...c), s), i.down = (...c) => t(e.breakpoints.down(...c), s), i.between = (...c) => t(e.breakpoints.between(...c), s), i.only = (...c) => t(e.breakpoints.only(...c), s), i.not = (...c) => {
      const l = t(e.breakpoints.not(...c), s);
      return l.includes("not all and") ? l.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : l;
    };
  }
  const n = {}, o = (i) => (r(n, i), n);
  return r(o), {
    ...e,
    containerQueries: o
  };
}
const El = {
  borderRadius: 4
}, Mt = process.env.NODE_ENV !== "production" ? a.oneOfType([a.number, a.string, a.object, a.array]) : {};
function vr(e, t) {
  return t ? tt(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const kn = {
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
}, Di = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${kn[e]}px)`
}, Cl = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : kn[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function Ot(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || Di;
    return t.reduce((s, c, l) => (s[i.up(i.keys[l])] = r(t[l]), s), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || Di;
    return Object.keys(t).reduce((s, c) => {
      if (vl(i.keys, c)) {
        const l = xl(n.containerQueries ? n : Cl, c);
        l && (s[l] = r(t[c], c));
      } else if (Object.keys(i.values || kn).includes(c)) {
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
function Tl(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function wl(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function ee(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : kt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function An(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function mn(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = An(e, r) || n, t && (o = t(o, n, e)), o;
}
function _e(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const c = s[t], l = s.theme, u = An(l, n) || {};
    return Ot(s, c, (m) => {
      let g = mn(u, o, m);
      return m === g && typeof m == "string" && (g = mn(u, o, `${t}${m === "default" ? "" : ee(m)}`, m)), r === !1 ? g : {
        [r]: g
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Mt
  } : {}, i.filterProps = [t], i;
}
function Ol(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const Rl = {
  m: "margin",
  p: "padding"
}, $l = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Li = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Pl = Ol((e) => {
  if (e.length > 2)
    if (Li[e])
      e = Li[e];
    else
      return [e];
  const [t, r] = e.split(""), n = Rl[t], o = $l[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), Nn = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Mn = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], kl = [...Nn, ...Mn];
function _r(e, t, r, n) {
  const o = An(e, t, !0) ?? r;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${i}.`), typeof o == "string" ? `calc(${i} * ${o})` : o * i) : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const s = Math.abs(i);
    process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > o.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${s} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const c = o[s];
    return i >= 0 ? c : typeof c == "number" ? -c : `-${c}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Ao(e) {
  return _r(e, "spacing", 8, "spacing");
}
function jr(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function Al(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = jr(t, r), n), {});
}
function Nl(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = Pl(r), i = Al(o, n), s = e[r];
  return Ot(e, s, i);
}
function La(e, t) {
  const r = Ao(e.theme);
  return Object.keys(e).map((n) => Nl(e, t, n, r)).reduce(vr, {});
}
function ke(e) {
  return La(e, Nn);
}
ke.propTypes = process.env.NODE_ENV !== "production" ? Nn.reduce((e, t) => (e[t] = Mt, e), {}) : {};
ke.filterProps = Nn;
function Ae(e) {
  return La(e, Mn);
}
Ae.propTypes = process.env.NODE_ENV !== "production" ? Mn.reduce((e, t) => (e[t] = Mt, e), {}) : {};
Ae.filterProps = Mn;
process.env.NODE_ENV !== "production" && kl.reduce((e, t) => (e[t] = Mt, e), {});
function Ba(e = 8, t = Ao({
  spacing: e
})) {
  if (e.mui)
    return e;
  const r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const s = t(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return r.mui = !0, r;
}
function In(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? vr(o, t[i](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function ot(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function lt(e, t) {
  return _e({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Ml = lt("border", ot), Il = lt("borderTop", ot), _l = lt("borderRight", ot), jl = lt("borderBottom", ot), Dl = lt("borderLeft", ot), Ll = lt("borderColor"), Bl = lt("borderTopColor"), Vl = lt("borderRightColor"), Fl = lt("borderBottomColor"), zl = lt("borderLeftColor"), Wl = lt("outline", ot), Ul = lt("outlineColor"), _n = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = _r(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: jr(t, n)
    });
    return Ot(e, e.borderRadius, r);
  }
  return null;
};
_n.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Mt
} : {};
_n.filterProps = ["borderRadius"];
In(Ml, Il, _l, jl, Dl, Ll, Bl, Vl, Fl, zl, _n, Wl, Ul);
const jn = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = _r(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: jr(t, n)
    });
    return Ot(e, e.gap, r);
  }
  return null;
};
jn.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Mt
} : {};
jn.filterProps = ["gap"];
const Dn = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = _r(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: jr(t, n)
    });
    return Ot(e, e.columnGap, r);
  }
  return null;
};
Dn.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Mt
} : {};
Dn.filterProps = ["columnGap"];
const Ln = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = _r(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: jr(t, n)
    });
    return Ot(e, e.rowGap, r);
  }
  return null;
};
Ln.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Mt
} : {};
Ln.filterProps = ["rowGap"];
const Yl = _e({
  prop: "gridColumn"
}), Hl = _e({
  prop: "gridRow"
}), ql = _e({
  prop: "gridAutoFlow"
}), Gl = _e({
  prop: "gridAutoColumns"
}), Kl = _e({
  prop: "gridAutoRows"
}), Xl = _e({
  prop: "gridTemplateColumns"
}), Jl = _e({
  prop: "gridTemplateRows"
}), Ql = _e({
  prop: "gridTemplateAreas"
}), Zl = _e({
  prop: "gridArea"
});
In(jn, Dn, Ln, Yl, Hl, ql, Gl, Kl, Xl, Jl, Ql, Zl);
function Jt(e, t) {
  return t === "grey" ? t : e;
}
const eu = _e({
  prop: "color",
  themeKey: "palette",
  transform: Jt
}), tu = _e({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Jt
}), ru = _e({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Jt
});
In(eu, tu, ru);
function Ze(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const nu = _e({
  prop: "width",
  transform: Ze
}), No = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var o, i, s, c, l;
      const n = ((s = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : s[r]) || kn[r];
      return n ? ((l = (c = e.theme) == null ? void 0 : c.breakpoints) == null ? void 0 : l.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: Ze(r)
      };
    };
    return Ot(e, e.maxWidth, t);
  }
  return null;
};
No.filterProps = ["maxWidth"];
const ou = _e({
  prop: "minWidth",
  transform: Ze
}), iu = _e({
  prop: "height",
  transform: Ze
}), au = _e({
  prop: "maxHeight",
  transform: Ze
}), su = _e({
  prop: "minHeight",
  transform: Ze
});
_e({
  prop: "size",
  cssProperty: "width",
  transform: Ze
});
_e({
  prop: "size",
  cssProperty: "height",
  transform: Ze
});
const cu = _e({
  prop: "boxSizing"
});
In(nu, No, ou, iu, au, su, cu);
const Dr = {
  // borders
  border: {
    themeKey: "borders",
    transform: ot
  },
  borderTop: {
    themeKey: "borders",
    transform: ot
  },
  borderRight: {
    themeKey: "borders",
    transform: ot
  },
  borderBottom: {
    themeKey: "borders",
    transform: ot
  },
  borderLeft: {
    themeKey: "borders",
    transform: ot
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
    transform: ot
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: _n
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Jt
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Jt
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Jt
  },
  // spacing
  p: {
    style: Ae
  },
  pt: {
    style: Ae
  },
  pr: {
    style: Ae
  },
  pb: {
    style: Ae
  },
  pl: {
    style: Ae
  },
  px: {
    style: Ae
  },
  py: {
    style: Ae
  },
  padding: {
    style: Ae
  },
  paddingTop: {
    style: Ae
  },
  paddingRight: {
    style: Ae
  },
  paddingBottom: {
    style: Ae
  },
  paddingLeft: {
    style: Ae
  },
  paddingX: {
    style: Ae
  },
  paddingY: {
    style: Ae
  },
  paddingInline: {
    style: Ae
  },
  paddingInlineStart: {
    style: Ae
  },
  paddingInlineEnd: {
    style: Ae
  },
  paddingBlock: {
    style: Ae
  },
  paddingBlockStart: {
    style: Ae
  },
  paddingBlockEnd: {
    style: Ae
  },
  m: {
    style: ke
  },
  mt: {
    style: ke
  },
  mr: {
    style: ke
  },
  mb: {
    style: ke
  },
  ml: {
    style: ke
  },
  mx: {
    style: ke
  },
  my: {
    style: ke
  },
  margin: {
    style: ke
  },
  marginTop: {
    style: ke
  },
  marginRight: {
    style: ke
  },
  marginBottom: {
    style: ke
  },
  marginLeft: {
    style: ke
  },
  marginX: {
    style: ke
  },
  marginY: {
    style: ke
  },
  marginInline: {
    style: ke
  },
  marginInlineStart: {
    style: ke
  },
  marginInlineEnd: {
    style: ke
  },
  marginBlock: {
    style: ke
  },
  marginBlockStart: {
    style: ke
  },
  marginBlockEnd: {
    style: ke
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
    style: jn
  },
  rowGap: {
    style: Ln
  },
  columnGap: {
    style: Dn
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
    style: No
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
  font: {
    themeKey: "font"
  },
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
};
function lu(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function uu(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function fu() {
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
      transform: p,
      style: m
    } = c;
    if (n == null)
      return null;
    if (u === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const g = An(o, u) || {};
    return m ? m(s) : Ot(s, n, (b) => {
      let f = mn(g, p, b);
      return b === f && typeof b == "string" && (f = mn(g, p, `${r}${b === "default" ? "" : ee(b)}`, b)), l === !1 ? f : {
        [l]: f
      };
    });
  }
  function t(r) {
    const {
      sx: n,
      theme: o = {}
    } = r || {};
    if (!n)
      return null;
    const i = o.unstable_sxConfig ?? Dr;
    function s(c) {
      let l = c;
      if (typeof c == "function")
        l = c(o);
      else if (typeof c != "object")
        return c;
      if (!l)
        return null;
      const u = Tl(o.breakpoints), p = Object.keys(u);
      let m = u;
      return Object.keys(l).forEach((g) => {
        const x = uu(l[g], o);
        if (x != null)
          if (typeof x == "object")
            if (i[g])
              m = vr(m, e(g, x, o, i));
            else {
              const b = Ot({
                theme: o
              }, x, (f) => ({
                [g]: f
              }));
              lu(b, x) ? m[g] = t({
                sx: x,
                theme: o
              }) : m = vr(m, b);
            }
          else
            m = vr(m, e(g, x, o, i));
      }), bl(o, wl(p, m));
    }
    return Array.isArray(n) ? n.map(s) : s(n);
  }
  return t;
}
const At = fu();
At.filterProps = ["sx"];
function du(e, t) {
  var n;
  const r = this;
  if (r.vars) {
    if (!((n = r.colorSchemes) != null && n[e]) || typeof r.getColorSchemeSelector != "function")
      return {};
    let o = r.getColorSchemeSelector(e);
    return o === "&" ? t : ((o.includes("data-") || o.includes(".")) && (o = `*:where(${o.replace(/\s*&$/, "")}) &`), {
      [o]: t
    });
  }
  return r.palette.mode === e ? t : {};
}
function Mo(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {},
    ...s
  } = e, c = yl(r), l = Ba(o);
  let u = tt({
    breakpoints: c,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: l,
    shape: {
      ...El,
      ...i
    }
  }, s);
  return u = Sl(u), u.applyStyles = du, u = t.reduce((p, m) => tt(p, m), u), u.unstable_sxConfig = {
    ...Dr,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, u.unstable_sx = function(m) {
    return At({
      sx: m,
      theme: this
    });
  }, u;
}
function pu(e) {
  return Object.keys(e).length === 0;
}
function Va(e = null) {
  const t = C.useContext(Mr);
  return !t || pu(t) ? e : t;
}
const mu = Mo();
function Fa(e = mu) {
  return Va(e);
}
const hu = (e) => {
  var n;
  const t = {
    systemProps: {},
    otherProps: {}
  }, r = ((n = e == null ? void 0 : e.theme) == null ? void 0 : n.unstable_sxConfig) ?? Dr;
  return Object.keys(e).forEach((o) => {
    r[o] ? t.systemProps[o] = e[o] : t.otherProps[o] = e[o];
  }), t;
};
function za(e) {
  const {
    sx: t,
    ...r
  } = e, {
    systemProps: n,
    otherProps: o
  } = hu(r);
  let i;
  return Array.isArray(t) ? i = [n, ...t] : typeof t == "function" ? i = (...s) => {
    const c = t(...s);
    return gt(c) ? {
      ...n,
      ...c
    } : n;
  } : i = {
    ...n,
    ...t
  }, {
    ...o,
    sx: i
  };
}
const Bi = (e) => e, gu = () => {
  let e = Bi;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Bi;
    }
  };
}, Wa = gu();
function Ua(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = Ua(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function se() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = Ua(e)) && (n && (n += " "), n += t);
  return n;
}
function yu(e = {}) {
  const {
    themeId: t,
    defaultTheme: r,
    defaultClassName: n = "MuiBox-root",
    generateClassName: o
  } = e, i = ja("div", {
    shouldForwardProp: (c) => c !== "theme" && c !== "sx" && c !== "as"
  })(At);
  return /* @__PURE__ */ C.forwardRef(function(l, u) {
    const p = Fa(r), {
      className: m,
      component: g = "div",
      ...x
    } = za(l);
    return /* @__PURE__ */ N.jsx(i, {
      as: g,
      ref: u,
      className: se(m, o ? o(n) : n),
      theme: t && p[t] || p,
      ...x
    });
  });
}
const bu = {
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
  const n = bu[t];
  return n ? `${r}-${n}` : `${Wa.generate(e)}-${t}`;
}
function Fe(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = Ve(e, o, r);
  }), n;
}
function Ya(e, t = "") {
  return e.displayName || e.name || t;
}
function Vi(e, t, r) {
  const n = Ya(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function vu(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Ya(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case pn.ForwardRef:
          return Vi(e, e.render, "ForwardRef");
        case pn.Memo:
          return Vi(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Ha(e) {
  const {
    variants: t,
    ...r
  } = e, n = {
    variants: t,
    style: Mi(r),
    isProcessed: !0
  };
  return n.style === r || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = Mi(o.style));
  }), n;
}
const xu = Mo();
function eo(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Su(e) {
  return e ? (t, r) => r[e] : null;
}
function Eu(e, t, r) {
  e.theme = Ou(e.theme) ? r : e.theme[t] || e.theme;
}
function ln(e, t) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((n) => ln(e, n));
  if (Array.isArray(r == null ? void 0 : r.variants)) {
    let n;
    if (r.isProcessed)
      n = r.style;
    else {
      const {
        variants: o,
        ...i
      } = r;
      n = i;
    }
    return qa(e, r.variants, [n]);
  }
  return r != null && r.isProcessed ? r.style : r;
}
function qa(e, t, r = []) {
  var o;
  let n;
  e: for (let i = 0; i < t.length; i += 1) {
    const s = t[i];
    if (typeof s.props == "function") {
      if (n ?? (n = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !s.props(n))
        continue;
    } else
      for (const c in s.props)
        if (e[c] !== s.props[c] && ((o = e.ownerState) == null ? void 0 : o[c]) !== s.props[c])
          continue e;
    typeof s.style == "function" ? (n ?? (n = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), r.push(s.style(n))) : r.push(s.style);
  }
  return r;
}
function Cu(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = xu,
    rootShouldForwardProp: n = eo,
    slotShouldForwardProp: o = eo
  } = e;
  function i(c) {
    Eu(c, t, r);
  }
  return (c, l = {}) => {
    dl(c, (h) => h.filter((w) => w !== At));
    const {
      name: u,
      slot: p,
      skipVariantsResolver: m,
      skipSx: g,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: x = Su(Ga(p)),
      ...b
    } = l, f = m !== void 0 ? m : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      p && p !== "Root" && p !== "root" || !1
    ), S = g || !1;
    let E = eo;
    p === "Root" || p === "root" ? E = n : p ? E = o : Ru(c) && (E = void 0);
    const P = ja(c, {
      shouldForwardProp: E,
      label: wu(u, p),
      ...b
    }), T = (h) => {
      if (typeof h == "function" && h.__emotion_real !== h)
        return function(k) {
          return ln(k, h);
        };
      if (gt(h)) {
        const w = Ha(h);
        return w.variants ? function(L) {
          return ln(L, w);
        } : w.style;
      }
      return h;
    }, y = (...h) => {
      const w = [], k = h.map(T), L = [];
      if (w.push(i), u && x && L.push(function(D) {
        var U, V;
        const W = (V = (U = D.theme.components) == null ? void 0 : U[u]) == null ? void 0 : V.styleOverrides;
        if (!W)
          return null;
        const z = {};
        for (const te in W)
          z[te] = ln(D, W[te]);
        return x(D, z);
      }), u && !f && L.push(function(D) {
        var z, U;
        const j = D.theme, W = (U = (z = j == null ? void 0 : j.components) == null ? void 0 : z[u]) == null ? void 0 : U.variants;
        return W ? qa(D, W) : null;
      }), S || L.push(At), Array.isArray(k[0])) {
        const A = k.shift(), D = new Array(w.length).fill(""), j = new Array(L.length).fill("");
        let W;
        W = [...D, ...A, ...j], W.raw = [...D, ...A.raw, ...j], w.unshift(W);
      }
      const B = [...w, ...k, ...L], d = P(...B);
      return c.muiName && (d.muiName = c.muiName), process.env.NODE_ENV !== "production" && (d.displayName = Tu(u, p, c)), d;
    };
    return P.withConfig && (y.withConfig = P.withConfig), y;
  };
}
function Tu(e, t, r) {
  return e ? `${e}${ee(t || "")}` : `Styled(${vu(r)})`;
}
function wu(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${Ga(t || "Root")}`), r;
}
function Ou(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Ru(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Ga(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function lo(e, t) {
  const r = {
    ...t
  };
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      const o = n;
      if (o === "components" || o === "slots")
        r[o] = {
          ...e[o],
          ...r[o]
        };
      else if (o === "componentsProps" || o === "slotProps") {
        const i = e[o], s = t[o];
        if (!s)
          r[o] = i || {};
        else if (!i)
          r[o] = s;
        else {
          r[o] = {
            ...s
          };
          for (const c in i)
            if (Object.prototype.hasOwnProperty.call(i, c)) {
              const l = c;
              r[o][l] = lo(i[l], s[l]);
            }
        }
      } else r[o] === void 0 && (r[o] = e[o]);
    }
  return r;
}
const Ft = typeof window < "u" ? C.useLayoutEffect : C.useEffect;
function $u(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function Io(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), $u(e, t, r);
}
function Pu(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Nt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Nt(Pu(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : kt(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : kt(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const ku = (e) => {
  const t = Nt(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, gr = (e, t) => {
  try {
    return ku(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function Bn(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function Ka(e) {
  e = Nt(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), s = (u, p = (u + r / 30) % 12) => o - i * Math.max(Math.min(p - 3, 9 - p, 1), -1);
  let c = "rgb";
  const l = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (c += "a", l.push(t[3])), Bn({
    type: c,
    values: l
  });
}
function uo(e) {
  e = Nt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Nt(Ka(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Fi(e, t) {
  const r = uo(e), n = uo(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function De(e, t) {
  return e = Nt(e), t = Io(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Bn(e);
}
function Xr(e, t, r) {
  try {
    return De(e, t);
  } catch {
    return e;
  }
}
function _o(e, t) {
  if (e = Nt(e), t = Io(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return Bn(e);
}
function Ce(e, t, r) {
  try {
    return _o(e, t);
  } catch {
    return e;
  }
}
function jo(e, t) {
  if (e = Nt(e), t = Io(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return Bn(e);
}
function Te(e, t, r) {
  try {
    return jo(e, t);
  } catch {
    return e;
  }
}
function Au(e, t = 0.15) {
  return uo(e) > 0.5 ? _o(e, t) : jo(e, t);
}
function Jr(e, t, r) {
  try {
    return Au(e, t);
  } catch {
    return e;
  }
}
function ar(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function Nu(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Xa(e, t, r, n, o) {
  const i = e[t], s = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  const l = i.type;
  return typeof l == "function" && !Nu(l) && (c = "Did you accidentally use a plain function component for an element instead?"), c !== void 0 ? new Error(`Invalid ${n} \`${s}\` supplied to \`${r}\`. Expected an element that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Do = ar(a.element, Xa);
Do.isRequired = ar(a.element.isRequired, Xa);
function Mu(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Iu(e, t, r, n, o) {
  const i = e[t], s = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  return typeof i == "function" && !Mu(i) && (c = "Did you accidentally provide a plain function component instead?"), c !== void 0 ? new Error(`Invalid ${n} \`${s}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Ja = ar(a.elementType, Iu), _u = "exact-prop: ​";
function Lo(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [_u]: (t) => {
      const r = Object.keys(t).filter((n) => !e.hasOwnProperty(n));
      return r.length > 0 ? new Error(`The following props are not supported: ${r.map((n) => `\`${n}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
function Or(e, t, r, n, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = e[t], s = o || t;
  return i == null ? null : i && i.nodeType !== 1 ? new Error(`Invalid ${n} \`${s}\` supplied to \`${r}\`. Expected an HTMLElement.`) : null;
}
const Bo = a.oneOfType([a.func, a.object]);
function zi(e) {
  return e && e.ownerDocument || document;
}
function fo(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let Wi = 0;
function ju(e) {
  const [t, r] = C.useState(e), n = e || t;
  return C.useEffect(() => {
    t == null && (Wi += 1, r(`mui-${Wi}`));
  }, [t]), n;
}
const Du = {
  ...C
}, Ui = Du.useId;
function Qa(e) {
  if (Ui !== void 0) {
    const t = Ui();
    return e ?? t;
  }
  return ju(e);
}
function Lu(e, t, r, n, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = o || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${i}\` is not supported. Please remove it.`) : null;
}
function Bu({
  controlled: e,
  default: t,
  name: r,
  state: n = "value"
}) {
  const {
    current: o
  } = C.useRef(e !== void 0), [i, s] = C.useState(t), c = o ? e : i;
  if (process.env.NODE_ENV !== "production") {
    C.useEffect(() => {
      o !== (e !== void 0) && console.error([`MUI: A component is changing the ${o ? "" : "un"}controlled ${n} state of ${r} to be ${o ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${r} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [n, r, e]);
    const {
      current: u
    } = C.useRef(t);
    C.useEffect(() => {
      !o && !Object.is(u, t) && console.error([`MUI: A component is changing the default ${n} state of an uncontrolled ${r} after being initialized. To suppress this warning opt to use a controlled ${r}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const l = C.useCallback((u) => {
    o || s(u);
  }, []);
  return [c, l];
}
function Qt(e) {
  const t = C.useRef(e);
  return Ft(() => {
    t.current = e;
  }), C.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function at(...e) {
  return C.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      fo(r, t);
    });
  }, e);
}
const Yi = {};
function Za(e, t) {
  const r = C.useRef(Yi);
  return r.current === Yi && (r.current = e(t)), r;
}
const Vu = [];
function Fu(e) {
  C.useEffect(e, Vu);
}
class Vn {
  constructor() {
    cr(this, "currentId", null);
    cr(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    cr(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new Vn();
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
function Dt() {
  const e = Za(Vn.create).current;
  return Fu(e.disposeEffect), e;
}
function hn(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
function Ge(e, t, r = void 0) {
  const n = {};
  for (const o in e) {
    const i = e[o];
    let s = "", c = !0;
    for (let l = 0; l < i.length; l += 1) {
      const u = i[l];
      u && (s += (c === !0 ? "" : " ") + t(u), c = !1, r && r[u] && (s += " " + r[u]));
    }
    n[o] = s;
  }
  return n;
}
function zu(e) {
  return typeof e == "string";
}
function es(e, t, r) {
  return e === void 0 || zu(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...r
    }
  };
}
function Wu(e, t = []) {
  if (e === void 0)
    return {};
  const r = {};
  return Object.keys(e).filter((n) => n.match(/^on[A-Z]/) && typeof e[n] == "function" && !t.includes(n)).forEach((n) => {
    r[n] = e[n];
  }), r;
}
function Hi(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((r) => !(r.match(/^on[A-Z]/) && typeof e[r] == "function")).forEach((r) => {
    t[r] = e[r];
  }), t;
}
function ts(e) {
  const {
    getSlotProps: t,
    additionalProps: r,
    externalSlotProps: n,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const x = se(r == null ? void 0 : r.className, i, o == null ? void 0 : o.className, n == null ? void 0 : n.className), b = {
      ...r == null ? void 0 : r.style,
      ...o == null ? void 0 : o.style,
      ...n == null ? void 0 : n.style
    }, f = {
      ...r,
      ...o,
      ...n
    };
    return x.length > 0 && (f.className = x), Object.keys(b).length > 0 && (f.style = b), {
      props: f,
      internalRef: void 0
    };
  }
  const s = Wu({
    ...o,
    ...n
  }), c = Hi(n), l = Hi(o), u = t(s), p = se(u == null ? void 0 : u.className, r == null ? void 0 : r.className, i, o == null ? void 0 : o.className, n == null ? void 0 : n.className), m = {
    ...u == null ? void 0 : u.style,
    ...r == null ? void 0 : r.style,
    ...o == null ? void 0 : o.style,
    ...n == null ? void 0 : n.style
  }, g = {
    ...u,
    ...r,
    ...l,
    ...c
  };
  return p.length > 0 && (g.className = p), Object.keys(m).length > 0 && (g.style = m), {
    props: g,
    internalRef: u.ref
  };
}
function rs(e, t, r) {
  return typeof e == "function" ? e(t, r) : e;
}
function Uu(e) {
  var m;
  const {
    elementType: t,
    externalSlotProps: r,
    ownerState: n,
    skipResolvingSlotProps: o = !1,
    ...i
  } = e, s = o ? {} : rs(r, n), {
    props: c,
    internalRef: l
  } = ts({
    ...i,
    externalSlotProps: s
  }), u = at(l, s == null ? void 0 : s.ref, (m = e.additionalProps) == null ? void 0 : m.ref);
  return es(t, {
    ...c,
    ref: u
  }, n);
}
function Vo(e) {
  var t;
  return parseInt(C.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
const Fo = /* @__PURE__ */ C.createContext(null);
process.env.NODE_ENV !== "production" && (Fo.displayName = "ThemeContext");
function zo() {
  const e = C.useContext(Fo);
  return process.env.NODE_ENV !== "production" && C.useDebugValue(e), e;
}
const Yu = typeof Symbol == "function" && Symbol.for, Hu = Yu ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function qu(e, t) {
  if (typeof t == "function") {
    const r = t(e);
    return process.env.NODE_ENV !== "production" && (r || console.error(["MUI: You should return an object from your theme function, i.e.", "<ThemeProvider theme={() => ({})} />"].join(`
`))), r;
  }
  return {
    ...e,
    ...t
  };
}
function gn(e) {
  const {
    children: t,
    theme: r
  } = e, n = zo();
  process.env.NODE_ENV !== "production" && n === null && typeof r == "function" && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const o = C.useMemo(() => {
    const i = n === null ? {
      ...r
    } : qu(n, r);
    return i != null && (i[Hu] = n !== null), i;
  }, [r, n]);
  return /* @__PURE__ */ N.jsx(Fo.Provider, {
    value: o,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (gn.propTypes = {
  /**
   * Your component tree.
   */
  children: a.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: a.oneOfType([a.object, a.func]).isRequired
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (gn.propTypes = Lo(gn.propTypes));
const ns = /* @__PURE__ */ C.createContext();
function os({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ N.jsx(ns.Provider, {
    value: e ?? !0,
    ...t
  });
}
process.env.NODE_ENV !== "production" && (os.propTypes = {
  children: a.node,
  value: a.bool
});
const is = () => C.useContext(ns) ?? !1, as = /* @__PURE__ */ C.createContext(void 0);
function ss({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ N.jsx(as.Provider, {
    value: e,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (ss.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: a.node,
  /**
   * @ignore
   */
  value: a.object
});
function Gu(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? lo(o.defaultProps, n) : !o.styleOverrides && !o.variants ? lo(o, n) : n;
}
function Ku({
  props: e,
  name: t
}) {
  const r = C.useContext(as);
  return Gu({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
const qi = {};
function Gi(e, t, r, n = !1) {
  return C.useMemo(() => {
    const o = e && t[e] || t;
    if (typeof r == "function") {
      const i = r(o), s = e ? {
        ...t,
        [e]: i
      } : i;
      return n ? () => s : s;
    }
    return e ? {
      ...t,
      [e]: r
    } : {
      ...t,
      ...r
    };
  }, [e, t, r, n]);
}
function Rr(e) {
  const {
    children: t,
    theme: r,
    themeId: n
  } = e, o = Va(qi), i = zo() || qi;
  process.env.NODE_ENV !== "production" && (o === null && typeof r == "function" || n && o && !o[n] && typeof r == "function") && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const s = Gi(n, o, r), c = Gi(n, i, r, !0), l = (n ? s[n] : s).direction === "rtl";
  return /* @__PURE__ */ N.jsx(gn, {
    theme: c,
    children: /* @__PURE__ */ N.jsx(Mr.Provider, {
      value: s,
      children: /* @__PURE__ */ N.jsx(os, {
        value: l,
        children: /* @__PURE__ */ N.jsx(ss, {
          value: n ? s[n].components : s.components,
          children: t
        })
      })
    })
  });
}
process.env.NODE_ENV !== "production" && (Rr.propTypes = {
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
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (Rr.propTypes = Lo(Rr.propTypes));
const Ki = {
  theme: void 0
};
function Xu(e) {
  let t, r;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== r) && (Ki.theme = o.theme, i = Ha(e(Ki)), t = i, r = o.theme), i;
  };
}
const Wo = "mode", Uo = "color-scheme", Ju = "data-color-scheme";
function Qu(e) {
  const {
    defaultMode: t = "system",
    defaultLightColorScheme: r = "light",
    defaultDarkColorScheme: n = "dark",
    modeStorageKey: o = Wo,
    colorSchemeStorageKey: i = Uo,
    attribute: s = Ju,
    colorSchemeNode: c = "document.documentElement",
    nonce: l
  } = e;
  let u = "", p = s;
  if (s === "class" && (p = ".%s"), s === "data" && (p = "[data-%s]"), p.startsWith(".")) {
    const g = p.substring(1);
    u += `${c}.classList.remove('${g}'.replace('%s', light), '${g}'.replace('%s', dark));
      ${c}.classList.add('${g}'.replace('%s', colorScheme));`;
  }
  const m = p.match(/\[([^\]]+)\]/);
  if (m) {
    const [g, x] = m[1].split("=");
    x || (u += `${c}.removeAttribute('${g}'.replace('%s', light));
      ${c}.removeAttribute('${g}'.replace('%s', dark));`), u += `
      ${c}.setAttribute('${g}'.replace('%s', colorScheme), ${x ? `${x}.replace('%s', colorScheme)` : '""'});`;
  } else
    u += `${c}.setAttribute('${p}', colorScheme);`;
  return /* @__PURE__ */ N.jsx("script", {
    suppressHydrationWarning: !0,
    nonce: typeof window > "u" ? l : "",
    dangerouslySetInnerHTML: {
      __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${o}') || '${t}';
  const dark = localStorage.getItem('${i}-dark') || '${n}';
  const light = localStorage.getItem('${i}-light') || '${r}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${u}
  }
} catch(e){}})();`
    }
  }, "mui-color-scheme-init");
}
function Xi(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function cs(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function Zu(e) {
  return cs(e, (t) => {
    if (t === "light")
      return e.lightColorScheme;
    if (t === "dark")
      return e.darkColorScheme;
  });
}
function to(e, t) {
  if (typeof window > "u")
    return;
  let r;
  try {
    r = localStorage.getItem(e) || void 0, r || localStorage.setItem(e, t);
  } catch {
  }
  return r || t;
}
function ef(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: r,
    defaultDarkColorScheme: n,
    supportedColorSchemes: o = [],
    modeStorageKey: i = Wo,
    colorSchemeStorageKey: s = Uo,
    storageWindow: c = typeof window > "u" ? void 0 : window,
    noSsr: l = !1
  } = e, u = o.join(","), p = o.length > 1, [m, g] = C.useState(() => {
    const y = to(i, t), h = to(`${s}-light`, r), w = to(`${s}-dark`, n);
    return {
      mode: y,
      systemMode: Xi(y),
      lightColorScheme: h,
      darkColorScheme: w
    };
  }), [x, b] = C.useState(l || !p);
  C.useEffect(() => {
    b(!0);
  }, []);
  const f = Zu(m), S = C.useCallback((y) => {
    g((h) => {
      if (y === h.mode)
        return h;
      const w = y ?? t;
      try {
        localStorage.setItem(i, w);
      } catch {
      }
      return {
        ...h,
        mode: w,
        systemMode: Xi(w)
      };
    });
  }, [i, t]), E = C.useCallback((y) => {
    y ? typeof y == "string" ? y && !u.includes(y) ? console.error(`\`${y}\` does not exist in \`theme.colorSchemes\`.`) : g((h) => {
      const w = {
        ...h
      };
      return cs(h, (k) => {
        try {
          localStorage.setItem(`${s}-${k}`, y);
        } catch {
        }
        k === "light" && (w.lightColorScheme = y), k === "dark" && (w.darkColorScheme = y);
      }), w;
    }) : g((h) => {
      const w = {
        ...h
      }, k = y.light === null ? r : y.light, L = y.dark === null ? n : y.dark;
      if (k)
        if (!u.includes(k))
          console.error(`\`${k}\` does not exist in \`theme.colorSchemes\`.`);
        else {
          w.lightColorScheme = k;
          try {
            localStorage.setItem(`${s}-light`, k);
          } catch {
          }
        }
      if (L)
        if (!u.includes(L))
          console.error(`\`${L}\` does not exist in \`theme.colorSchemes\`.`);
        else {
          w.darkColorScheme = L;
          try {
            localStorage.setItem(`${s}-dark`, L);
          } catch {
          }
        }
      return w;
    }) : g((h) => {
      try {
        localStorage.setItem(`${s}-light`, r), localStorage.setItem(`${s}-dark`, n);
      } catch {
      }
      return {
        ...h,
        lightColorScheme: r,
        darkColorScheme: n
      };
    });
  }, [u, s, r, n]), P = C.useCallback((y) => {
    m.mode === "system" && g((h) => {
      const w = y != null && y.matches ? "dark" : "light";
      return h.systemMode === w ? h : {
        ...h,
        systemMode: w
      };
    });
  }, [m.mode]), T = C.useRef(P);
  return T.current = P, C.useEffect(() => {
    if (typeof window.matchMedia != "function" || !p)
      return;
    const y = (...w) => T.current(...w), h = window.matchMedia("(prefers-color-scheme: dark)");
    return h.addListener(y), y(h), () => {
      h.removeListener(y);
    };
  }, [p]), C.useEffect(() => {
    if (c && p) {
      const y = (h) => {
        const w = h.newValue;
        typeof h.key == "string" && h.key.startsWith(s) && (!w || u.match(w)) && (h.key.endsWith("light") && E({
          light: w
        }), h.key.endsWith("dark") && E({
          dark: w
        })), h.key === i && (!w || ["light", "dark", "system"].includes(w)) && S(w || t);
      };
      return c.addEventListener("storage", y), () => {
        c.removeEventListener("storage", y);
      };
    }
  }, [E, S, i, s, u, t, c, p]), {
    ...m,
    mode: x ? m.mode : void 0,
    systemMode: x ? m.systemMode : void 0,
    colorScheme: x ? f : void 0,
    setMode: S,
    setColorScheme: E
  };
}
const tf = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function rf(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: r = {},
    modeStorageKey: n = Wo,
    colorSchemeStorageKey: o = Uo,
    disableTransitionOnChange: i = !1,
    defaultColorScheme: s,
    resolveTheme: c
  } = e, l = {
    allColorSchemes: [],
    colorScheme: void 0,
    darkColorScheme: void 0,
    lightColorScheme: void 0,
    mode: void 0,
    setColorScheme: () => {
    },
    setMode: () => {
    },
    systemMode: void 0
  }, u = /* @__PURE__ */ C.createContext(void 0);
  process.env.NODE_ENV !== "production" && (u.displayName = "ColorSchemeContext");
  const p = () => C.useContext(u) || l, m = {}, g = {};
  function x(E) {
    var Y, oe, Re, ue;
    const {
      children: P,
      theme: T,
      modeStorageKey: y = n,
      colorSchemeStorageKey: h = o,
      disableTransitionOnChange: w = i,
      storageWindow: k = typeof window > "u" ? void 0 : window,
      documentNode: L = typeof document > "u" ? void 0 : document,
      colorSchemeNode: B = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: d = !1,
      disableStyleSheetGeneration: A = !1,
      defaultMode: D = "system",
      noSsr: j
    } = E, W = C.useRef(!1), z = zo(), U = C.useContext(u), V = !!U && !d, te = C.useMemo(() => T || (typeof r == "function" ? r() : r), [T]), F = te[t], R = F || te, {
      colorSchemes: I = m,
      components: J = g,
      cssVarPrefix: Q
    } = R, H = Object.keys(I).filter((K) => !!I[K]).join(","), X = C.useMemo(() => H.split(","), [H]), _ = typeof s == "string" ? s : s.light, q = typeof s == "string" ? s : s.dark, G = I[_] && I[q] ? D : ((oe = (Y = I[R.defaultColorScheme]) == null ? void 0 : Y.palette) == null ? void 0 : oe.mode) || ((Re = R.palette) == null ? void 0 : Re.mode), {
      mode: re,
      setMode: Z,
      systemMode: ae,
      lightColorScheme: O,
      darkColorScheme: ye,
      colorScheme: Ee,
      setColorScheme: Me
    } = ef({
      supportedColorSchemes: X,
      defaultLightColorScheme: _,
      defaultDarkColorScheme: q,
      modeStorageKey: y,
      colorSchemeStorageKey: h,
      defaultMode: G,
      storageWindow: k,
      noSsr: j
    });
    let Qe = re, ve = Ee;
    V && (Qe = U.mode, ve = U.colorScheme);
    const Pe = C.useMemo(() => {
      var Oe;
      const K = ve || R.defaultColorScheme, be = ((Oe = R.generateThemeVars) == null ? void 0 : Oe.call(R)) || R.vars, we = {
        ...R,
        components: J,
        colorSchemes: I,
        cssVarPrefix: Q,
        vars: be
      };
      if (typeof we.generateSpacing == "function" && (we.spacing = we.generateSpacing()), K) {
        const ce = I[K];
        ce && typeof ce == "object" && Object.keys(ce).forEach((Ie) => {
          ce[Ie] && typeof ce[Ie] == "object" ? we[Ie] = {
            ...we[Ie],
            ...ce[Ie]
          } : we[Ie] = ce[Ie];
        });
      }
      return c ? c(we) : we;
    }, [R, ve, J, I, Q]), ze = R.colorSchemeSelector;
    Ft(() => {
      if (ve && B && ze && ze !== "media") {
        const K = ze;
        let be = ze;
        if (K === "class" && (be = ".%s"), K === "data" && (be = "[data-%s]"), K != null && K.startsWith("data-") && !K.includes("%s") && (be = `[${K}="%s"]`), be.startsWith("."))
          B.classList.remove(...X.map((we) => be.substring(1).replace("%s", we))), B.classList.add(be.substring(1).replace("%s", ve));
        else {
          const we = be.replace("%s", ve).match(/\[([^\]]+)\]/);
          if (we) {
            const [Oe, ce] = we[1].split("=");
            ce || X.forEach((Ie) => {
              B.removeAttribute(Oe.replace(ve, Ie));
            }), B.setAttribute(Oe, ce ? ce.replace(/"|'/g, "") : "");
          } else
            B.setAttribute(be, ve);
        }
      }
    }, [ve, ze, B, X]), C.useEffect(() => {
      let K;
      if (w && W.current && L) {
        const be = L.createElement("style");
        be.appendChild(L.createTextNode(tf)), L.head.appendChild(be), window.getComputedStyle(L.body), K = setTimeout(() => {
          L.head.removeChild(be);
        }, 1);
      }
      return () => {
        clearTimeout(K);
      };
    }, [ve, w, L]), C.useEffect(() => (W.current = !0, () => {
      W.current = !1;
    }), []);
    const Le = C.useMemo(() => ({
      allColorSchemes: X,
      colorScheme: ve,
      darkColorScheme: ye,
      lightColorScheme: O,
      mode: Qe,
      setColorScheme: Me,
      setMode: process.env.NODE_ENV === "production" ? Z : (K) => {
        Pe.colorSchemeSelector === "media" && console.error(["MUI: The `setMode` function has no effect if `colorSchemeSelector` is `media` (`media` is the default value).", "To toggle the mode manually, please configure `colorSchemeSelector` to use a class or data attribute.", "To learn more, visit https://mui.com/material-ui/customization/css-theme-variables/configuration/#toggling-dark-mode-manually"].join(`
`)), Z(K);
      },
      systemMode: ae
    }), [X, ve, ye, O, Qe, Me, Z, ae, Pe.colorSchemeSelector]);
    let v = !0;
    (A || R.cssVariables === !1 || V && (z == null ? void 0 : z.cssVarPrefix) === Q) && (v = !1);
    const M = /* @__PURE__ */ N.jsxs(C.Fragment, {
      children: [/* @__PURE__ */ N.jsx(Rr, {
        themeId: F ? t : void 0,
        theme: Pe,
        children: P
      }), v && /* @__PURE__ */ N.jsx(_a, {
        styles: ((ue = Pe.generateStyleSheets) == null ? void 0 : ue.call(Pe)) || []
      })]
    });
    return V ? M : /* @__PURE__ */ N.jsx(u.Provider, {
      value: Le,
      children: M
    });
  }
  process.env.NODE_ENV !== "production" && (x.propTypes = {
    /**
     * The component tree.
     */
    children: a.node,
    /**
     * The node used to attach the color-scheme attribute
     */
    colorSchemeNode: a.any,
    /**
     * localStorage key used to store `colorScheme`
     */
    colorSchemeStorageKey: a.string,
    /**
     * The default mode when the storage is empty,
     * require the theme to have `colorSchemes` with light and dark.
     */
    defaultMode: a.string,
    /**
     * If `true`, the provider creates its own context and generate stylesheet as if it is a root `CssVarsProvider`.
     */
    disableNestedContext: a.bool,
    /**
     * If `true`, the style sheet won't be generated.
     *
     * This is useful for controlling nested CssVarsProvider behavior.
     */
    disableStyleSheetGeneration: a.bool,
    /**
     * Disable CSS transitions when switching between modes or color schemes.
     */
    disableTransitionOnChange: a.bool,
    /**
     * The document to attach the attribute to.
     */
    documentNode: a.any,
    /**
     * The key in the local storage used to store current color scheme.
     */
    modeStorageKey: a.string,
    /**
     * If `true`, the mode will be the same value as the storage without an extra rerendering after the hydration.
     * You should use this option in conjuction with `InitColorSchemeScript` component.
     */
    noSsr: a.bool,
    /**
     * The window that attaches the 'storage' event listener.
     * @default window
     */
    storageWindow: a.any,
    /**
     * The calculated theme object that will be passed through context.
     */
    theme: a.object
  });
  const b = typeof s == "string" ? s : s.light, f = typeof s == "string" ? s : s.dark;
  return {
    CssVarsProvider: x,
    useColorScheme: p,
    getInitColorSchemeScript: (E) => Qu({
      colorSchemeStorageKey: o,
      defaultLightColorScheme: b,
      defaultDarkColorScheme: f,
      modeStorageKey: n,
      ...E
    })
  };
}
function nf(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const Ji = (e, t, r, n = []) => {
  let o = e;
  t.forEach((i, s) => {
    s === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = r : o && typeof o == "object" && (o[i] = r) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
  });
}, of = (e, t, r) => {
  function n(o, i = [], s = []) {
    Object.entries(o).forEach(([c, l]) => {
      (!r || !r([...i, c])) && l != null && (typeof l == "object" && Object.keys(l).length > 0 ? n(l, [...i, c], Array.isArray(l) ? [...s, c] : s) : t([...i, c], l, s));
    });
  }
  n(e);
}, af = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function ro(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, i = {}, s = {};
  return of(
    e,
    (c, l, u) => {
      if ((typeof l == "string" || typeof l == "number") && (!n || !n(c, l))) {
        const p = `--${r ? `${r}-` : ""}${c.join("-")}`, m = af(c, l);
        Object.assign(o, {
          [p]: m
        }), Ji(i, c, `var(${p})`, u), Ji(s, c, `var(${p}, ${m})`, u);
      }
    },
    (c) => c[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: i,
    varsWithDefaults: s
  };
}
function sf(e, t = {}) {
  const {
    getSelector: r = S,
    disableCssColorScheme: n,
    colorSchemeSelector: o
  } = t, {
    colorSchemes: i = {},
    components: s,
    defaultColorScheme: c = "light",
    ...l
  } = e, {
    vars: u,
    css: p,
    varsWithDefaults: m
  } = ro(l, t);
  let g = m;
  const x = {}, {
    [c]: b,
    ...f
  } = i;
  if (Object.entries(f || {}).forEach(([T, y]) => {
    const {
      vars: h,
      css: w,
      varsWithDefaults: k
    } = ro(y, t);
    g = tt(g, k), x[T] = {
      css: w,
      vars: h
    };
  }), b) {
    const {
      css: T,
      vars: y,
      varsWithDefaults: h
    } = ro(b, t);
    g = tt(g, h), x[c] = {
      css: T,
      vars: y
    };
  }
  function S(T, y) {
    var w, k;
    let h = o;
    if (o === "class" && (h = ".%s"), o === "data" && (h = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (h = `[${o}="%s"]`), T) {
      if (h === "media")
        return e.defaultColorScheme === T ? ":root" : {
          [`@media (prefers-color-scheme: ${((k = (w = i[T]) == null ? void 0 : w.palette) == null ? void 0 : k.mode) || T})`]: {
            ":root": y
          }
        };
      if (h)
        return e.defaultColorScheme === T ? `:root, ${h.replace("%s", String(T))}` : h.replace("%s", String(T));
    }
    return ":root";
  }
  return {
    vars: g,
    generateThemeVars: () => {
      let T = {
        ...u
      };
      return Object.entries(x).forEach(([, {
        vars: y
      }]) => {
        T = tt(T, y);
      }), T;
    },
    generateStyleSheets: () => {
      var L, B;
      const T = [], y = e.defaultColorScheme || "light";
      function h(d, A) {
        Object.keys(A).length && T.push(typeof d == "string" ? {
          [d]: {
            ...A
          }
        } : d);
      }
      h(r(void 0, {
        ...p
      }), p);
      const {
        [y]: w,
        ...k
      } = x;
      if (w) {
        const {
          css: d
        } = w, A = (B = (L = i[y]) == null ? void 0 : L.palette) == null ? void 0 : B.mode, D = !n && A ? {
          colorScheme: A,
          ...d
        } : {
          ...d
        };
        h(r(y, {
          ...D
        }), D);
      }
      return Object.entries(k).forEach(([d, {
        css: A
      }]) => {
        var W, z;
        const D = (z = (W = i[d]) == null ? void 0 : W.palette) == null ? void 0 : z.mode, j = !n && D ? {
          colorScheme: D,
          ...A
        } : {
          ...A
        };
        h(r(d, {
          ...j
        }), j);
      }), T;
    }
  };
}
function cf(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
function ls() {
  return {
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
      paper: Er.white,
      default: Er.white
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
  };
}
const lf = ls();
function us() {
  return {
    text: {
      primary: Er.white,
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
      active: Er.white,
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
}
const Qi = us();
function Zi(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = jo(e.main, o) : t === "dark" && (e.dark = _o(e.main, i)));
}
function uf(e = "light") {
  return e === "dark" ? {
    main: Yt[200],
    light: Yt[50],
    dark: Yt[400]
  } : {
    main: Yt[700],
    light: Yt[400],
    dark: Yt[800]
  };
}
function ff(e = "light") {
  return e === "dark" ? {
    main: Ut[200],
    light: Ut[50],
    dark: Ut[400]
  } : {
    main: Ut[500],
    light: Ut[300],
    dark: Ut[700]
  };
}
function df(e = "light") {
  return e === "dark" ? {
    main: Wt[500],
    light: Wt[300],
    dark: Wt[700]
  } : {
    main: Wt[700],
    light: Wt[400],
    dark: Wt[800]
  };
}
function pf(e = "light") {
  return e === "dark" ? {
    main: Ht[400],
    light: Ht[300],
    dark: Ht[700]
  } : {
    main: Ht[700],
    light: Ht[500],
    dark: Ht[900]
  };
}
function mf(e = "light") {
  return e === "dark" ? {
    main: qt[400],
    light: qt[300],
    dark: qt[700]
  } : {
    main: qt[800],
    light: qt[500],
    dark: qt[900]
  };
}
function hf(e = "light") {
  return e === "dark" ? {
    main: fr[400],
    light: fr[300],
    dark: fr[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: fr[500],
    dark: fr[900]
  };
}
function Yo(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    ...o
  } = e, i = e.primary || uf(t), s = e.secondary || ff(t), c = e.error || df(t), l = e.info || pf(t), u = e.success || mf(t), p = e.warning || hf(t);
  function m(f) {
    const S = Fi(f, Qi.text.primary) >= r ? Qi.text.primary : lf.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const E = Fi(f, S);
      E < 3 && console.error([`MUI: The contrast ratio of ${E}:1 for ${S} on ${f}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return S;
  }
  const g = ({
    color: f,
    name: S,
    mainShade: E = 500,
    lightShade: P = 300,
    darkShade: T = 700
  }) => {
    if (f = {
      ...f
    }, !f.main && f[E] && (f.main = f[E]), !f.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${S ? ` (${S})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${E}\` property.` : kt(11, S ? ` (${S})` : "", E));
    if (typeof f.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${S ? ` (${S})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(f.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : kt(12, S ? ` (${S})` : "", JSON.stringify(f.main)));
    return Zi(f, "light", P, n), Zi(f, "dark", T, n), f.contrastText || (f.contrastText = m(f.main)), f;
  };
  let x;
  return t === "light" ? x = ls() : t === "dark" && (x = us()), process.env.NODE_ENV !== "production" && (x || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), tt({
    // A collection of common colors.
    common: {
      ...Er
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: g({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: g({
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: g({
      color: c,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: g({
      color: p,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: g({
      color: l,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: g({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: nc,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: m,
    // Generate a rich color object.
    augmentColor: g,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...x
  }, o);
}
function gf(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, i] = n;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function yf(e, t) {
  return {
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
    },
    ...t
  };
}
function bf(e) {
  return Math.round(e * 1e5) / 1e5;
}
const ea = {
  textTransform: "uppercase"
}, ta = '"Roboto", "Helvetica", "Arial", sans-serif';
function fs(e, t) {
  const {
    fontFamily: r = ta,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: l = 16,
    // Apply the CSS properties to all the variants.
    allVariants: u,
    pxToRem: p,
    ...m
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof l != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const g = n / 14, x = p || ((S) => `${S / l * g}rem`), b = (S, E, P, T, y) => ({
    fontFamily: r,
    fontWeight: S,
    fontSize: x(E),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: P,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === ta ? {
      letterSpacing: `${bf(T / E)}em`
    } : {},
    ...y,
    ...u
  }), f = {
    h1: b(o, 96, 1.167, -1.5),
    h2: b(o, 60, 1.2, -0.5),
    h3: b(i, 48, 1.167, 0),
    h4: b(i, 34, 1.235, 0.25),
    h5: b(i, 24, 1.334, 0),
    h6: b(s, 20, 1.6, 0.15),
    subtitle1: b(i, 16, 1.75, 0.15),
    subtitle2: b(s, 14, 1.57, 0.1),
    body1: b(i, 16, 1.5, 0.15),
    body2: b(i, 14, 1.43, 0.15),
    button: b(s, 14, 1.75, 0.4, ea),
    caption: b(i, 12, 1.66, 0.4),
    overline: b(i, 12, 2.66, 1, ea),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return tt({
    htmlFontSize: l,
    pxToRem: x,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: s,
    fontWeightBold: c,
    ...f
  }, m, {
    clone: !1
    // No need to clone deep
  });
}
const vf = 0.2, xf = 0.14, Sf = 0.12;
function $e(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${vf})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${xf})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Sf})`].join(",");
}
const Ef = ["none", $e(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), $e(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), $e(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), $e(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), $e(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), $e(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), $e(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), $e(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), $e(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), $e(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), $e(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), $e(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), $e(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), $e(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), $e(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), $e(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), $e(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), $e(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), $e(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), $e(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), $e(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), $e(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), $e(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), $e(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Cf = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, ds = {
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
function Tf(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function wf(e) {
  const t = {
    ...Cf,
    ...e.easing
  }, r = {
    ...ds,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Tf,
    create: (o = ["all"], i = {}) => {
      const {
        duration: s = r.standard,
        easing: c = t.easeInOut,
        delay: l = 0,
        ...u
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const p = (g) => typeof g == "string", m = (g) => !Number.isNaN(parseFloat(g));
        !p(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !m(s) && !p(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), p(c) || console.error('MUI: Argument "easing" must be a string.'), !m(l) && !p(l) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((p) => `${p} ${typeof s == "string" ? s : ra(s)} ${c} ${typeof l == "string" ? l : ra(l)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const Of = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Rf(e) {
  return gt(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function ps(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [s, c] = o[i];
      !Rf(c) || s.startsWith("unstable_") ? delete n[s] : gt(c) && (n[s] = {
        ...c
      }, r(n[s]));
    }
  }
  return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function po(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: i = {},
    transitions: s = {},
    typography: c = {},
    shape: l,
    ...u
  } = e;
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : kt(20));
  const p = Yo(i), m = Mo(e);
  let g = tt(m, {
    mixins: yf(m.breakpoints, n),
    palette: p,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Ef.slice(),
    typography: fs(p, c),
    transitions: wf(s),
    zIndex: {
      ...Of
    }
  });
  if (g = tt(g, u), g = t.reduce((x, b) => tt(x, b), g), process.env.NODE_ENV !== "production") {
    const x = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], b = (f, S) => {
      let E;
      for (E in f) {
        const P = f[E];
        if (x.includes(E) && Object.keys(P).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const T = Ve("", E);
            console.error([`MUI: The \`${S}\` component increases the CSS specificity of the \`${E}\` internal state.`, "You can not override it like this: ", JSON.stringify(f, null, 2), "", `Instead, you need to use the '&.${T}' syntax:`, JSON.stringify({
              root: {
                [`&.${T}`]: P
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          f[E] = {};
        }
      }
    };
    Object.keys(g.components).forEach((f) => {
      const S = g.components[f].styleOverrides;
      S && f.startsWith("Mui") && b(S, f);
    });
  }
  return g.unstable_sxConfig = {
    ...Dr,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, g.unstable_sx = function(b) {
    return At({
      sx: b,
      theme: this
    });
  }, g.toRuntimeSource = ps, g;
}
function $f(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Pf = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = $f(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function ms(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function hs(e) {
  return e === "dark" ? Pf : [];
}
function kf(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    ...o
  } = e, i = Yo(t);
  return {
    palette: i,
    opacity: {
      ...ms(i.mode),
      ...r
    },
    overlays: n || hs(i.mode),
    ...o
  };
}
function Af(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Nf = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Mf = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return Nf(e.cssVarPrefix).forEach((c) => {
        s[c] = r[c], delete r[c];
      }), i === "media" ? {
        [n]: r,
        "@media (prefers-color-scheme: dark)": {
          [n]: s
        }
      } : i ? {
        [i.replace("%s", t)]: s,
        [`${n}, ${i.replace("%s", t)}`]: r
      } : {
        [n]: {
          ...r,
          ...s
        }
      };
    }
    if (i && i !== "media")
      return `${n}, ${i.replace("%s", String(t))}`;
  } else if (t) {
    if (i === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [n]: r
        }
      };
    if (i)
      return i.replace("%s", String(t));
  }
  return n;
};
function If(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function $(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function yr(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : Ka(e);
}
function Ct(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = gr(yr(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function _f(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const pt = (e) => {
  try {
    return e();
  } catch {
  }
}, jf = (e = "mui") => nf(e);
function no(e, t, r, n) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const o = n === "dark" ? "dark" : "light";
  if (!r) {
    e[n] = kf({
      ...t,
      palette: {
        mode: o,
        ...t == null ? void 0 : t.palette
      }
    });
    return;
  }
  const {
    palette: i,
    ...s
  } = po({
    ...r,
    palette: {
      mode: o,
      ...t == null ? void 0 : t.palette
    }
  });
  return e[n] = {
    ...t,
    palette: i,
    opacity: {
      ...ms(o),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || hs(o)
  }, s;
}
function Df(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    shouldSkipGeneratingVar: s = Af,
    colorSchemeSelector: c = r.light && r.dark ? "media" : void 0,
    rootSelector: l = ":root",
    ...u
  } = e, p = Object.keys(r)[0], m = n || (r.light && p !== "light" ? "light" : p), g = jf(i), {
    [m]: x,
    light: b,
    dark: f,
    ...S
  } = r, E = {
    ...S
  };
  let P = x;
  if ((m === "dark" && !("dark" in r) || m === "light" && !("light" in r)) && (P = !0), !P)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${m}\` option is either missing or invalid.` : kt(21, m));
  const T = no(E, P, u, m);
  b && !E.light && no(E, b, void 0, "light"), f && !E.dark && no(E, f, void 0, "dark");
  let y = {
    defaultColorScheme: m,
    ...T,
    cssVarPrefix: i,
    colorSchemeSelector: c,
    rootSelector: l,
    getCssVar: g,
    colorSchemes: E,
    font: {
      ...gf(T.typography),
      ...T.font
    },
    spacing: _f(u.spacing)
  };
  Object.keys(y.colorSchemes).forEach((B) => {
    const d = y.colorSchemes[B].palette, A = (D) => {
      const j = D.split("-"), W = j[1], z = j[2];
      return g(D, d[W][z]);
    };
    if (d.mode === "light" && ($(d.common, "background", "#fff"), $(d.common, "onBackground", "#000")), d.mode === "dark" && ($(d.common, "background", "#000"), $(d.common, "onBackground", "#fff")), If(d, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), d.mode === "light") {
      $(d.Alert, "errorColor", Ce(d.error.light, 0.6)), $(d.Alert, "infoColor", Ce(d.info.light, 0.6)), $(d.Alert, "successColor", Ce(d.success.light, 0.6)), $(d.Alert, "warningColor", Ce(d.warning.light, 0.6)), $(d.Alert, "errorFilledBg", A("palette-error-main")), $(d.Alert, "infoFilledBg", A("palette-info-main")), $(d.Alert, "successFilledBg", A("palette-success-main")), $(d.Alert, "warningFilledBg", A("palette-warning-main")), $(d.Alert, "errorFilledColor", pt(() => d.getContrastText(d.error.main))), $(d.Alert, "infoFilledColor", pt(() => d.getContrastText(d.info.main))), $(d.Alert, "successFilledColor", pt(() => d.getContrastText(d.success.main))), $(d.Alert, "warningFilledColor", pt(() => d.getContrastText(d.warning.main))), $(d.Alert, "errorStandardBg", Te(d.error.light, 0.9)), $(d.Alert, "infoStandardBg", Te(d.info.light, 0.9)), $(d.Alert, "successStandardBg", Te(d.success.light, 0.9)), $(d.Alert, "warningStandardBg", Te(d.warning.light, 0.9)), $(d.Alert, "errorIconColor", A("palette-error-main")), $(d.Alert, "infoIconColor", A("palette-info-main")), $(d.Alert, "successIconColor", A("palette-success-main")), $(d.Alert, "warningIconColor", A("palette-warning-main")), $(d.AppBar, "defaultBg", A("palette-grey-100")), $(d.Avatar, "defaultBg", A("palette-grey-400")), $(d.Button, "inheritContainedBg", A("palette-grey-300")), $(d.Button, "inheritContainedHoverBg", A("palette-grey-A100")), $(d.Chip, "defaultBorder", A("palette-grey-400")), $(d.Chip, "defaultAvatarColor", A("palette-grey-700")), $(d.Chip, "defaultIconColor", A("palette-grey-700")), $(d.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), $(d.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), $(d.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), $(d.LinearProgress, "primaryBg", Te(d.primary.main, 0.62)), $(d.LinearProgress, "secondaryBg", Te(d.secondary.main, 0.62)), $(d.LinearProgress, "errorBg", Te(d.error.main, 0.62)), $(d.LinearProgress, "infoBg", Te(d.info.main, 0.62)), $(d.LinearProgress, "successBg", Te(d.success.main, 0.62)), $(d.LinearProgress, "warningBg", Te(d.warning.main, 0.62)), $(d.Skeleton, "bg", `rgba(${A("palette-text-primaryChannel")} / 0.11)`), $(d.Slider, "primaryTrack", Te(d.primary.main, 0.62)), $(d.Slider, "secondaryTrack", Te(d.secondary.main, 0.62)), $(d.Slider, "errorTrack", Te(d.error.main, 0.62)), $(d.Slider, "infoTrack", Te(d.info.main, 0.62)), $(d.Slider, "successTrack", Te(d.success.main, 0.62)), $(d.Slider, "warningTrack", Te(d.warning.main, 0.62));
      const D = Jr(d.background.default, 0.8);
      $(d.SnackbarContent, "bg", D), $(d.SnackbarContent, "color", pt(() => d.getContrastText(D))), $(d.SpeedDialAction, "fabHoverBg", Jr(d.background.paper, 0.15)), $(d.StepConnector, "border", A("palette-grey-400")), $(d.StepContent, "border", A("palette-grey-400")), $(d.Switch, "defaultColor", A("palette-common-white")), $(d.Switch, "defaultDisabledColor", A("palette-grey-100")), $(d.Switch, "primaryDisabledColor", Te(d.primary.main, 0.62)), $(d.Switch, "secondaryDisabledColor", Te(d.secondary.main, 0.62)), $(d.Switch, "errorDisabledColor", Te(d.error.main, 0.62)), $(d.Switch, "infoDisabledColor", Te(d.info.main, 0.62)), $(d.Switch, "successDisabledColor", Te(d.success.main, 0.62)), $(d.Switch, "warningDisabledColor", Te(d.warning.main, 0.62)), $(d.TableCell, "border", Te(Xr(d.divider, 1), 0.88)), $(d.Tooltip, "bg", Xr(d.grey[700], 0.92));
    }
    if (d.mode === "dark") {
      $(d.Alert, "errorColor", Te(d.error.light, 0.6)), $(d.Alert, "infoColor", Te(d.info.light, 0.6)), $(d.Alert, "successColor", Te(d.success.light, 0.6)), $(d.Alert, "warningColor", Te(d.warning.light, 0.6)), $(d.Alert, "errorFilledBg", A("palette-error-dark")), $(d.Alert, "infoFilledBg", A("palette-info-dark")), $(d.Alert, "successFilledBg", A("palette-success-dark")), $(d.Alert, "warningFilledBg", A("palette-warning-dark")), $(d.Alert, "errorFilledColor", pt(() => d.getContrastText(d.error.dark))), $(d.Alert, "infoFilledColor", pt(() => d.getContrastText(d.info.dark))), $(d.Alert, "successFilledColor", pt(() => d.getContrastText(d.success.dark))), $(d.Alert, "warningFilledColor", pt(() => d.getContrastText(d.warning.dark))), $(d.Alert, "errorStandardBg", Ce(d.error.light, 0.9)), $(d.Alert, "infoStandardBg", Ce(d.info.light, 0.9)), $(d.Alert, "successStandardBg", Ce(d.success.light, 0.9)), $(d.Alert, "warningStandardBg", Ce(d.warning.light, 0.9)), $(d.Alert, "errorIconColor", A("palette-error-main")), $(d.Alert, "infoIconColor", A("palette-info-main")), $(d.Alert, "successIconColor", A("palette-success-main")), $(d.Alert, "warningIconColor", A("palette-warning-main")), $(d.AppBar, "defaultBg", A("palette-grey-900")), $(d.AppBar, "darkBg", A("palette-background-paper")), $(d.AppBar, "darkColor", A("palette-text-primary")), $(d.Avatar, "defaultBg", A("palette-grey-600")), $(d.Button, "inheritContainedBg", A("palette-grey-800")), $(d.Button, "inheritContainedHoverBg", A("palette-grey-700")), $(d.Chip, "defaultBorder", A("palette-grey-700")), $(d.Chip, "defaultAvatarColor", A("palette-grey-300")), $(d.Chip, "defaultIconColor", A("palette-grey-300")), $(d.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), $(d.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), $(d.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), $(d.LinearProgress, "primaryBg", Ce(d.primary.main, 0.5)), $(d.LinearProgress, "secondaryBg", Ce(d.secondary.main, 0.5)), $(d.LinearProgress, "errorBg", Ce(d.error.main, 0.5)), $(d.LinearProgress, "infoBg", Ce(d.info.main, 0.5)), $(d.LinearProgress, "successBg", Ce(d.success.main, 0.5)), $(d.LinearProgress, "warningBg", Ce(d.warning.main, 0.5)), $(d.Skeleton, "bg", `rgba(${A("palette-text-primaryChannel")} / 0.13)`), $(d.Slider, "primaryTrack", Ce(d.primary.main, 0.5)), $(d.Slider, "secondaryTrack", Ce(d.secondary.main, 0.5)), $(d.Slider, "errorTrack", Ce(d.error.main, 0.5)), $(d.Slider, "infoTrack", Ce(d.info.main, 0.5)), $(d.Slider, "successTrack", Ce(d.success.main, 0.5)), $(d.Slider, "warningTrack", Ce(d.warning.main, 0.5));
      const D = Jr(d.background.default, 0.98);
      $(d.SnackbarContent, "bg", D), $(d.SnackbarContent, "color", pt(() => d.getContrastText(D))), $(d.SpeedDialAction, "fabHoverBg", Jr(d.background.paper, 0.15)), $(d.StepConnector, "border", A("palette-grey-600")), $(d.StepContent, "border", A("palette-grey-600")), $(d.Switch, "defaultColor", A("palette-grey-300")), $(d.Switch, "defaultDisabledColor", A("palette-grey-600")), $(d.Switch, "primaryDisabledColor", Ce(d.primary.main, 0.55)), $(d.Switch, "secondaryDisabledColor", Ce(d.secondary.main, 0.55)), $(d.Switch, "errorDisabledColor", Ce(d.error.main, 0.55)), $(d.Switch, "infoDisabledColor", Ce(d.info.main, 0.55)), $(d.Switch, "successDisabledColor", Ce(d.success.main, 0.55)), $(d.Switch, "warningDisabledColor", Ce(d.warning.main, 0.55)), $(d.TableCell, "border", Ce(Xr(d.divider, 1), 0.68)), $(d.Tooltip, "bg", Xr(d.grey[700], 0.92));
    }
    Ct(d.background, "default"), Ct(d.background, "paper"), Ct(d.common, "background"), Ct(d.common, "onBackground"), Ct(d, "divider"), Object.keys(d).forEach((D) => {
      const j = d[D];
      D !== "tonalOffset" && j && typeof j == "object" && (j.main && $(d[D], "mainChannel", gr(yr(j.main))), j.light && $(d[D], "lightChannel", gr(yr(j.light))), j.dark && $(d[D], "darkChannel", gr(yr(j.dark))), j.contrastText && $(d[D], "contrastTextChannel", gr(yr(j.contrastText))), D === "text" && (Ct(d[D], "primary"), Ct(d[D], "secondary")), D === "action" && (j.active && Ct(d[D], "active"), j.selected && Ct(d[D], "selected")));
    });
  }), y = t.reduce((B, d) => tt(B, d), y);
  const h = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: s,
    getSelector: Mf(y)
  }, {
    vars: w,
    generateThemeVars: k,
    generateStyleSheets: L
  } = sf(y, h);
  return y.vars = w, Object.entries(y.colorSchemes[y.defaultColorScheme]).forEach(([B, d]) => {
    y[B] = d;
  }), y.generateThemeVars = k, y.generateStyleSheets = L, y.generateSpacing = function() {
    return Ba(u.spacing, Ao(this));
  }, y.getColorSchemeSelector = cf(c), y.spacing = y.generateSpacing(), y.shouldSkipGeneratingVar = s, y.unstable_sxConfig = {
    ...Dr,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, y.unstable_sx = function(d) {
    return At({
      sx: d,
      theme: this
    });
  }, y.toRuntimeSource = ps, y;
}
function na(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: Yo({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Fn(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = r == null ? void 0 : r.mode,
    ...s
  } = e, c = i || "light", l = o == null ? void 0 : o[c], u = {
    ...o,
    ...r ? {
      [c]: {
        ...typeof l != "boolean" && l,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return po(e, ...t);
    let p = r;
    "palette" in e || u[c] && (u[c] !== !0 ? p = u[c].palette : c === "dark" && (p = {
      mode: "dark"
    }));
    const m = po({
      ...e,
      palette: p
    }, ...t);
    return m.defaultColorScheme = c, m.colorSchemes = u, m.palette.mode === "light" && (m.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: m.palette
    }, na(m, "dark", u.dark)), m.palette.mode === "dark" && (m.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: m.palette
    }, na(m, "light", u.light)), m;
  }
  return !r && !("light" in u) && c === "light" && (u.light = !0), Df({
    ...s,
    colorSchemes: u,
    defaultColorScheme: c,
    ...typeof n != "boolean" && n
  }, ...t);
}
const gs = Fn();
function Lr() {
  const e = Fa(gs);
  return process.env.NODE_ENV !== "production" && C.useDebugValue(e), e[wt] || e;
}
function Lf(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const ys = (e) => Lf(e) && e !== "classes", le = Cu({
  themeId: wt,
  defaultTheme: gs,
  rootShouldForwardProp: ys
});
function oa({
  theme: e,
  ...t
}) {
  const r = wt in e ? e[wt] : void 0;
  return /* @__PURE__ */ N.jsx(Rr, {
    ...t,
    themeId: r ? wt : void 0,
    theme: r || e
  });
}
const Qr = {
  attribute: "data-mui-color-scheme",
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
}, {
  CssVarsProvider: Bf,
  useColorScheme: Fm,
  getInitColorSchemeScript: zm
} = rf({
  themeId: wt,
  // @ts-ignore ignore module augmentation tests
  theme: () => Fn({
    cssVariables: !0
  }),
  colorSchemeStorageKey: Qr.colorSchemeStorageKey,
  modeStorageKey: Qr.modeStorageKey,
  defaultColorScheme: {
    light: Qr.defaultLightColorScheme,
    dark: Qr.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const t = {
      ...e,
      typography: fs(e.palette, e.typography)
    };
    return t.unstable_sx = function(n) {
      return At({
        sx: n,
        theme: this
      });
    }, t;
  }
}), Vf = Bf;
function Ff({
  theme: e,
  ...t
}) {
  return typeof e == "function" ? /* @__PURE__ */ N.jsx(oa, {
    theme: e,
    ...t
  }) : "colorSchemes" in (wt in e ? e[wt] : e) ? /* @__PURE__ */ N.jsx(Vf, {
    theme: e,
    ...t
  }) : /* @__PURE__ */ N.jsx(oa, {
    theme: e,
    ...t
  });
}
function zf() {
  return za;
}
const qe = Xu;
process.env.NODE_ENV !== "production" && (a.node, a.object.isRequired);
function He(e) {
  return Ku(e);
}
function Wf(e) {
  return Ve("MuiSvgIcon", e);
}
Fe("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Uf = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${ee(t)}`, `fontSize${ee(r)}`]
  };
  return Ge(o, Wf, n);
}, Yf = le("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${ee(r.color)}`], t[`fontSize${ee(r.fontSize)}`]];
  }
})(qe(({
  theme: e
}) => {
  var t, r, n, o, i, s, c, l, u, p, m, g, x, b;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    transition: (o = (t = e.transitions) == null ? void 0 : t.create) == null ? void 0 : o.call(t, "fill", {
      duration: (n = (r = (e.vars ?? e).transitions) == null ? void 0 : r.duration) == null ? void 0 : n.shorter
    }),
    variants: [
      {
        props: (f) => !f.hasSvgAsChild,
        style: {
          // the <svg> will define the property that has `currentColor`
          // for example heroicons uses fill="none" and stroke="currentColor"
          fill: "currentColor"
        }
      },
      {
        props: {
          fontSize: "inherit"
        },
        style: {
          fontSize: "inherit"
        }
      },
      {
        props: {
          fontSize: "small"
        },
        style: {
          fontSize: ((s = (i = e.typography) == null ? void 0 : i.pxToRem) == null ? void 0 : s.call(i, 20)) || "1.25rem"
        }
      },
      {
        props: {
          fontSize: "medium"
        },
        style: {
          fontSize: ((l = (c = e.typography) == null ? void 0 : c.pxToRem) == null ? void 0 : l.call(c, 24)) || "1.5rem"
        }
      },
      {
        props: {
          fontSize: "large"
        },
        style: {
          fontSize: ((p = (u = e.typography) == null ? void 0 : u.pxToRem) == null ? void 0 : p.call(u, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((e.vars ?? e).palette).filter(([, f]) => f && f.main).map(([f]) => {
        var S, E;
        return {
          props: {
            color: f
          },
          style: {
            color: (E = (S = (e.vars ?? e).palette) == null ? void 0 : S[f]) == null ? void 0 : E.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (g = (m = (e.vars ?? e).palette) == null ? void 0 : m.action) == null ? void 0 : g.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (b = (x = (e.vars ?? e).palette) == null ? void 0 : x.action) == null ? void 0 : b.disabled
        }
      },
      {
        props: {
          color: "inherit"
        },
        style: {
          color: void 0
        }
      }
    ]
  };
})), yn = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const n = He({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: s = "inherit",
    component: c = "svg",
    fontSize: l = "medium",
    htmlColor: u,
    inheritViewBox: p = !1,
    titleAccess: m,
    viewBox: g = "0 0 24 24",
    ...x
  } = n, b = /* @__PURE__ */ C.isValidElement(o) && o.type === "svg", f = {
    ...n,
    color: s,
    component: c,
    fontSize: l,
    instanceFontSize: t.fontSize,
    inheritViewBox: p,
    viewBox: g,
    hasSvgAsChild: b
  }, S = {};
  p || (S.viewBox = g);
  const E = Uf(f);
  return /* @__PURE__ */ N.jsxs(Yf, {
    as: c,
    className: se(E.root, i),
    focusable: "false",
    color: u,
    "aria-hidden": m ? void 0 : !0,
    role: m ? "img" : void 0,
    ref: r,
    ...S,
    ...x,
    ...b && o.props,
    ownerState: f,
    children: [b ? o.props.children : o, m ? /* @__PURE__ */ N.jsx("title", {
      children: m
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (yn.propTypes = {
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
yn.muiName = "SvgIcon";
function sr(e, t) {
  function r(n, o) {
    return /* @__PURE__ */ N.jsx(yn, {
      "data-testid": `${t}Icon`,
      ref: o,
      ...n,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = yn.muiName, /* @__PURE__ */ C.memo(/* @__PURE__ */ C.forwardRef(r));
}
function bs(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
function mo(e, t) {
  return mo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, mo(e, t);
}
function vs(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, mo(e, t);
}
const ia = {
  disabled: !1
};
var Hf = process.env.NODE_ENV !== "production" ? a.oneOfType([a.number, a.shape({
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
const bn = yt.createContext(null);
var qf = function(t) {
  return t.scrollTop;
}, br = "unmounted", _t = "exited", jt = "entering", Kt = "entered", ho = "exiting", Et = /* @__PURE__ */ function(e) {
  vs(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var s = o, c = s && !s.isMounting ? n.enter : n.appear, l;
    return i.appearStatus = null, n.in ? c ? (l = _t, i.appearStatus = jt) : l = Kt : n.unmountOnExit || n.mountOnEnter ? l = br : l = _t, i.state = {
      status: l
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(o, i) {
    var s = o.in;
    return s && i.status === br ? {
      status: _t
    } : null;
  };
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, r.componentDidUpdate = function(o) {
    var i = null;
    if (o !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== jt && s !== Kt && (i = jt) : (s === jt || s === Kt) && (i = ho);
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
      if (this.cancelNextCallback(), i === jt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : Wr.findDOMNode(this);
          s && qf(s);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === _t && this.setState({
      status: br
    });
  }, r.performEnter = function(o) {
    var i = this, s = this.props.enter, c = this.context ? this.context.isMounting : o, l = this.props.nodeRef ? [c] : [Wr.findDOMNode(this), c], u = l[0], p = l[1], m = this.getTimeouts(), g = c ? m.appear : m.enter;
    if (!o && !s || ia.disabled) {
      this.safeSetState({
        status: Kt
      }, function() {
        i.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, p), this.safeSetState({
      status: jt
    }, function() {
      i.props.onEntering(u, p), i.onTransitionEnd(g, function() {
        i.safeSetState({
          status: Kt
        }, function() {
          i.props.onEntered(u, p);
        });
      });
    });
  }, r.performExit = function() {
    var o = this, i = this.props.exit, s = this.getTimeouts(), c = this.props.nodeRef ? void 0 : Wr.findDOMNode(this);
    if (!i || ia.disabled) {
      this.safeSetState({
        status: _t
      }, function() {
        o.props.onExited(c);
      });
      return;
    }
    this.props.onExit(c), this.safeSetState({
      status: ho
    }, function() {
      o.props.onExiting(c), o.onTransitionEnd(s.exit, function() {
        o.safeSetState({
          status: _t
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
    var s = this.props.nodeRef ? this.props.nodeRef.current : Wr.findDOMNode(this), c = o == null && !this.props.addEndListener;
    if (!s || c) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var l = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback], u = l[0], p = l[1];
      this.props.addEndListener(u, p);
    }
    o != null && setTimeout(this.nextCallback, o);
  }, r.render = function() {
    var o = this.state.status;
    if (o === br)
      return null;
    var i = this.props, s = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var c = bs(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ yt.createElement(bn.Provider, {
        value: null
      }, typeof s == "function" ? s(o, c) : yt.cloneElement(yt.Children.only(s), c))
    );
  }, t;
}(yt.Component);
Et.contextType = bn;
Et.propTypes = process.env.NODE_ENV !== "production" ? {
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
    var r = Hf;
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
function Gt() {
}
Et.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Gt,
  onEntering: Gt,
  onEntered: Gt,
  onExit: Gt,
  onExiting: Gt,
  onExited: Gt
};
Et.UNMOUNTED = br;
Et.EXITED = _t;
Et.ENTERING = jt;
Et.ENTERED = Kt;
Et.EXITING = ho;
function Gf(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ho(e, t) {
  var r = function(i) {
    return t && nn(i) ? t(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && Js.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function Kf(e, t) {
  e = e || {}, t = t || {};
  function r(p) {
    return p in t ? t[p] : e[p];
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
function Lt(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function Xf(e, t) {
  return Ho(e.children, function(r) {
    return on(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: Lt(r, "appear", e),
      enter: Lt(r, "enter", e),
      exit: Lt(r, "exit", e)
    });
  });
}
function Jf(e, t, r) {
  var n = Ho(e.children), o = Kf(t, n);
  return Object.keys(o).forEach(function(i) {
    var s = o[i];
    if (nn(s)) {
      var c = i in t, l = i in n, u = t[i], p = nn(u) && !u.props.in;
      l && (!c || p) ? o[i] = on(s, {
        onExited: r.bind(null, s),
        in: !0,
        exit: Lt(s, "exit", e),
        enter: Lt(s, "enter", e)
      }) : !l && c && !p ? o[i] = on(s, {
        in: !1
      }) : l && c && nn(u) && (o[i] = on(s, {
        onExited: r.bind(null, s),
        in: u.props.in,
        exit: Lt(s, "exit", e),
        enter: Lt(s, "enter", e)
      }));
    }
  }), o;
}
var Qf = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Zf = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, qo = /* @__PURE__ */ function(e) {
  vs(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var s = i.handleExited.bind(Gf(i));
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
      children: l ? Xf(o, c) : Jf(o, s, c),
      firstRender: !1
    };
  }, r.handleExited = function(o, i) {
    var s = Ho(this.props.children);
    o.key in s || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(c) {
      var l = fn({}, c.children);
      return delete l[o.key], {
        children: l
      };
    }));
  }, r.render = function() {
    var o = this.props, i = o.component, s = o.childFactory, c = bs(o, ["component", "childFactory"]), l = this.state.contextValue, u = Qf(this.state.children).map(s);
    return delete c.appear, delete c.enter, delete c.exit, i === null ? /* @__PURE__ */ yt.createElement(bn.Provider, {
      value: l
    }, u) : /* @__PURE__ */ yt.createElement(bn.Provider, {
      value: l
    }, /* @__PURE__ */ yt.createElement(i, c, u));
  }, t;
}(yt.Component);
qo.propTypes = process.env.NODE_ENV !== "production" ? {
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
qo.defaultProps = Zf;
const ed = (e) => e.scrollTop;
function vn(e, t) {
  const {
    timeout: r,
    easing: n,
    style: o = {}
  } = e;
  return {
    duration: o.transitionDuration ?? (typeof r == "number" ? r : r[t.mode] || 0),
    easing: o.transitionTimingFunction ?? (typeof n == "object" ? n[t.mode] : n),
    delay: o.transitionDelay
  };
}
function td(e) {
  return Ve("MuiCollapse", e);
}
Fe("MuiCollapse", ["root", "horizontal", "vertical", "entered", "hidden", "wrapper", "wrapperInner"]);
const rd = (e) => {
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
  return Ge(n, td, r);
}, nd = le("div", {
  name: "MuiCollapse",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.orientation], r.state === "entered" && t.entered, r.state === "exited" && !r.in && r.collapsedSize === "0px" && t.hidden];
  }
})(qe(({
  theme: e
}) => ({
  height: 0,
  overflow: "hidden",
  transition: e.transitions.create("height"),
  variants: [{
    props: {
      orientation: "horizontal"
    },
    style: {
      height: "auto",
      width: 0,
      transition: e.transitions.create("width")
    }
  }, {
    props: {
      state: "entered"
    },
    style: {
      height: "auto",
      overflow: "visible"
    }
  }, {
    props: {
      state: "entered",
      orientation: "horizontal"
    },
    style: {
      width: "auto"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.state === "exited" && !t.in && t.collapsedSize === "0px",
    style: {
      visibility: "hidden"
    }
  }]
}))), od = le("div", {
  name: "MuiCollapse",
  slot: "Wrapper",
  overridesResolver: (e, t) => t.wrapper
})({
  // Hack to get children with a negative margin to not falsify the height computation.
  display: "flex",
  width: "100%",
  variants: [{
    props: {
      orientation: "horizontal"
    },
    style: {
      width: "auto",
      height: "100%"
    }
  }]
}), id = le("div", {
  name: "MuiCollapse",
  slot: "WrapperInner",
  overridesResolver: (e, t) => t.wrapperInner
})({
  width: "100%",
  variants: [{
    props: {
      orientation: "horizontal"
    },
    style: {
      width: "auto",
      height: "100%"
    }
  }]
}), xn = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const n = He({
    props: t,
    name: "MuiCollapse"
  }), {
    addEndListener: o,
    children: i,
    className: s,
    collapsedSize: c = "0px",
    component: l,
    easing: u,
    in: p,
    onEnter: m,
    onEntered: g,
    onEntering: x,
    onExit: b,
    onExited: f,
    onExiting: S,
    orientation: E = "vertical",
    style: P,
    timeout: T = ds.standard,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: y = Et,
    ...h
  } = n, w = {
    ...n,
    orientation: E,
    collapsedSize: c
  }, k = rd(w), L = Lr(), B = Dt(), d = C.useRef(null), A = C.useRef(), D = typeof c == "number" ? `${c}px` : c, j = E === "horizontal", W = j ? "width" : "height", z = C.useRef(null), U = at(r, z), V = (_) => (q) => {
    if (_) {
      const G = z.current;
      q === void 0 ? _(G) : _(G, q);
    }
  }, te = () => d.current ? d.current[j ? "clientWidth" : "clientHeight"] : 0, F = V((_, q) => {
    d.current && j && (d.current.style.position = "absolute"), _.style[W] = D, m && m(_, q);
  }), R = V((_, q) => {
    const G = te();
    d.current && j && (d.current.style.position = "");
    const {
      duration: re,
      easing: Z
    } = vn({
      style: P,
      timeout: T,
      easing: u
    }, {
      mode: "enter"
    });
    if (T === "auto") {
      const ae = L.transitions.getAutoHeightDuration(G);
      _.style.transitionDuration = `${ae}ms`, A.current = ae;
    } else
      _.style.transitionDuration = typeof re == "string" ? re : `${re}ms`;
    _.style[W] = `${G}px`, _.style.transitionTimingFunction = Z, x && x(_, q);
  }), I = V((_, q) => {
    _.style[W] = "auto", g && g(_, q);
  }), J = V((_) => {
    _.style[W] = `${te()}px`, b && b(_);
  }), Q = V(f), H = V((_) => {
    const q = te(), {
      duration: G,
      easing: re
    } = vn({
      style: P,
      timeout: T,
      easing: u
    }, {
      mode: "exit"
    });
    if (T === "auto") {
      const Z = L.transitions.getAutoHeightDuration(q);
      _.style.transitionDuration = `${Z}ms`, A.current = Z;
    } else
      _.style.transitionDuration = typeof G == "string" ? G : `${G}ms`;
    _.style[W] = D, _.style.transitionTimingFunction = re, S && S(_);
  }), X = (_) => {
    T === "auto" && B.start(A.current || 0, _), o && o(z.current, _);
  };
  return /* @__PURE__ */ N.jsx(y, {
    in: p,
    onEnter: F,
    onEntered: I,
    onEntering: R,
    onExit: J,
    onExited: Q,
    onExiting: H,
    addEndListener: X,
    nodeRef: z,
    timeout: T === "auto" ? null : T,
    ...h,
    children: (_, {
      ownerState: q,
      ...G
    }) => /* @__PURE__ */ N.jsx(nd, {
      as: l,
      className: se(k.root, s, {
        entered: k.entered,
        exited: !p && D === "0px" && k.hidden
      }[_]),
      style: {
        [j ? "minWidth" : "minHeight"]: D,
        ...P
      },
      ref: U,
      ownerState: {
        ...w,
        state: _
      },
      ...G,
      children: /* @__PURE__ */ N.jsx(od, {
        ownerState: {
          ...w,
          state: _
        },
        className: k.wrapper,
        ref: d,
        children: /* @__PURE__ */ N.jsx(id, {
          ownerState: {
            ...w,
            state: _
          },
          className: k.wrapperInner,
          children: i
        })
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (xn.propTypes = {
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
  component: Ja,
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
xn && (xn.muiSupportAuto = !0);
function Bt(e, t) {
  const {
    className: r,
    elementType: n,
    ownerState: o,
    externalForwardedProps: i,
    internalForwardedProps: s,
    shouldForwardComponentProp: c = !1,
    ...l
  } = t, {
    component: u,
    slots: p = {
      [e]: void 0
    },
    slotProps: m = {
      [e]: void 0
    },
    ...g
  } = i, x = p[e] || n, b = rs(m[e], o), {
    props: {
      component: f,
      ...S
    },
    internalRef: E
  } = ts({
    className: r,
    ...l,
    externalForwardedProps: e === "root" ? g : void 0,
    externalSlotProps: b
  }), P = at(E, b == null ? void 0 : b.ref, t.ref), T = e === "root" ? f || u : f, y = es(x, {
    ...e === "root" && !u && !p[e] && s,
    ...e !== "root" && !p[e] && s,
    ...S,
    ...T && !c && {
      as: T
    },
    ...T && c && {
      component: T
    },
    ref: P
  }, o);
  return [x, y];
}
class Sn {
  constructor() {
    cr(this, "mountEffect", () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
    });
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new Sn();
  }
  static use() {
    const t = Za(Sn.create).current, [r, n] = C.useState(!1);
    return t.shouldMount = r, t.setShouldMount = n, C.useEffect(t.mountEffect, [r]), t;
  }
  mount() {
    return this.mounted || (this.mounted = sd(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  /* Ripple API */
  start(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.start(...t);
    });
  }
  stop(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.stop(...t);
    });
  }
  pulsate(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.pulsate(...t);
    });
  }
}
function ad() {
  return Sn.use();
}
function sd() {
  let e, t;
  const r = new Promise((n, o) => {
    e = n, t = o;
  });
  return r.resolve = e, r.reject = t, r;
}
function xs(e) {
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
  } = e, [p, m] = C.useState(!1), g = se(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), x = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, b = se(r.child, p && r.childLeaving, n && r.childPulsate);
  return !c && !p && m(!0), C.useEffect(() => {
    if (!c && l != null) {
      const f = setTimeout(l, u);
      return () => {
        clearTimeout(f);
      };
    }
  }, [l, c, u]), /* @__PURE__ */ N.jsx("span", {
    className: g,
    style: x,
    children: /* @__PURE__ */ N.jsx("span", {
      className: b
    })
  });
}
process.env.NODE_ENV !== "production" && (xs.propTypes = {
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
const nt = Fe("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), go = 550, cd = 80, ld = Ir`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, ud = Ir`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, fd = Ir`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, dd = le("span", {
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
}), pd = le(xs, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${nt.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${ld};
    animation-duration: ${go}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${nt.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${nt.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${nt.childLeaving} {
    opacity: 0;
    animation-name: ${ud};
    animation-duration: ${go}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${nt.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${fd};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Ss = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const n = He({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: s,
    ...c
  } = n, [l, u] = C.useState([]), p = C.useRef(0), m = C.useRef(null);
  C.useEffect(() => {
    m.current && (m.current(), m.current = null);
  }, [l]);
  const g = C.useRef(!1), x = Dt(), b = C.useRef(null), f = C.useRef(null), S = C.useCallback((y) => {
    const {
      pulsate: h,
      rippleX: w,
      rippleY: k,
      rippleSize: L,
      cb: B
    } = y;
    u((d) => [...d, /* @__PURE__ */ N.jsx(pd, {
      classes: {
        ripple: se(i.ripple, nt.ripple),
        rippleVisible: se(i.rippleVisible, nt.rippleVisible),
        ripplePulsate: se(i.ripplePulsate, nt.ripplePulsate),
        child: se(i.child, nt.child),
        childLeaving: se(i.childLeaving, nt.childLeaving),
        childPulsate: se(i.childPulsate, nt.childPulsate)
      },
      timeout: go,
      pulsate: h,
      rippleX: w,
      rippleY: k,
      rippleSize: L
    }, p.current)]), p.current += 1, m.current = B;
  }, [i]), E = C.useCallback((y = {}, h = {}, w = () => {
  }) => {
    const {
      pulsate: k = !1,
      center: L = o || h.pulsate,
      fakeElement: B = !1
      // For test purposes
    } = h;
    if ((y == null ? void 0 : y.type) === "mousedown" && g.current) {
      g.current = !1;
      return;
    }
    (y == null ? void 0 : y.type) === "touchstart" && (g.current = !0);
    const d = B ? null : f.current, A = d ? d.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let D, j, W;
    if (L || y === void 0 || y.clientX === 0 && y.clientY === 0 || !y.clientX && !y.touches)
      D = Math.round(A.width / 2), j = Math.round(A.height / 2);
    else {
      const {
        clientX: z,
        clientY: U
      } = y.touches && y.touches.length > 0 ? y.touches[0] : y;
      D = Math.round(z - A.left), j = Math.round(U - A.top);
    }
    if (L)
      W = Math.sqrt((2 * A.width ** 2 + A.height ** 2) / 3), W % 2 === 0 && (W += 1);
    else {
      const z = Math.max(Math.abs((d ? d.clientWidth : 0) - D), D) * 2 + 2, U = Math.max(Math.abs((d ? d.clientHeight : 0) - j), j) * 2 + 2;
      W = Math.sqrt(z ** 2 + U ** 2);
    }
    y != null && y.touches ? b.current === null && (b.current = () => {
      S({
        pulsate: k,
        rippleX: D,
        rippleY: j,
        rippleSize: W,
        cb: w
      });
    }, x.start(cd, () => {
      b.current && (b.current(), b.current = null);
    })) : S({
      pulsate: k,
      rippleX: D,
      rippleY: j,
      rippleSize: W,
      cb: w
    });
  }, [o, S, x]), P = C.useCallback(() => {
    E({}, {
      pulsate: !0
    });
  }, [E]), T = C.useCallback((y, h) => {
    if (x.clear(), (y == null ? void 0 : y.type) === "touchend" && b.current) {
      b.current(), b.current = null, x.start(0, () => {
        T(y, h);
      });
      return;
    }
    b.current = null, u((w) => w.length > 0 ? w.slice(1) : w), m.current = h;
  }, [x]);
  return C.useImperativeHandle(r, () => ({
    pulsate: P,
    start: E,
    stop: T
  }), [P, E, T]), /* @__PURE__ */ N.jsx(dd, {
    className: se(nt.root, i.root, s),
    ref: f,
    ...c,
    children: /* @__PURE__ */ N.jsx(qo, {
      component: null,
      exit: !0,
      children: l
    })
  });
});
process.env.NODE_ENV !== "production" && (Ss.propTypes = {
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
function md(e) {
  return Ve("MuiButtonBase", e);
}
const hd = Fe("MuiButtonBase", ["root", "disabled", "focusVisible"]), gd = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, s = Ge({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, md, o);
  return r && n && (s.root += ` ${n}`), s;
}, yd = le("button", {
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
  [`&.${hd.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), $r = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const n = He({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: s,
    className: c,
    component: l = "button",
    disabled: u = !1,
    disableRipple: p = !1,
    disableTouchRipple: m = !1,
    focusRipple: g = !1,
    focusVisibleClassName: x,
    LinkComponent: b = "a",
    onBlur: f,
    onClick: S,
    onContextMenu: E,
    onDragLeave: P,
    onFocus: T,
    onFocusVisible: y,
    onKeyDown: h,
    onKeyUp: w,
    onMouseDown: k,
    onMouseLeave: L,
    onMouseUp: B,
    onTouchEnd: d,
    onTouchMove: A,
    onTouchStart: D,
    tabIndex: j = 0,
    TouchRippleProps: W,
    touchRippleRef: z,
    type: U,
    ...V
  } = n, te = C.useRef(null), F = ad(), R = at(F.ref, z), [I, J] = C.useState(!1);
  u && I && J(!1), C.useImperativeHandle(o, () => ({
    focusVisible: () => {
      J(!0), te.current.focus();
    }
  }), []);
  const Q = F.shouldMount && !p && !u;
  C.useEffect(() => {
    I && g && !p && F.pulsate();
  }, [p, g, I, F]);
  const H = Tt(F, "start", k, m), X = Tt(F, "stop", E, m), _ = Tt(F, "stop", P, m), q = Tt(F, "stop", B, m), G = Tt(F, "stop", (M) => {
    I && M.preventDefault(), L && L(M);
  }, m), re = Tt(F, "start", D, m), Z = Tt(F, "stop", d, m), ae = Tt(F, "stop", A, m), O = Tt(F, "stop", (M) => {
    hn(M.target) || J(!1), f && f(M);
  }, !1), ye = Qt((M) => {
    te.current || (te.current = M.currentTarget), hn(M.target) && (J(!0), y && y(M)), T && T(M);
  }), Ee = () => {
    const M = te.current;
    return l && l !== "button" && !(M.tagName === "A" && M.href);
  }, Me = Qt((M) => {
    g && !M.repeat && I && M.key === " " && F.stop(M, () => {
      F.start(M);
    }), M.target === M.currentTarget && Ee() && M.key === " " && M.preventDefault(), h && h(M), M.target === M.currentTarget && Ee() && M.key === "Enter" && !u && (M.preventDefault(), S && S(M));
  }), Qe = Qt((M) => {
    g && M.key === " " && I && !M.defaultPrevented && F.stop(M, () => {
      F.pulsate(M);
    }), w && w(M), S && M.target === M.currentTarget && Ee() && M.key === " " && !M.defaultPrevented && S(M);
  });
  let ve = l;
  ve === "button" && (V.href || V.to) && (ve = b);
  const Pe = {};
  ve === "button" ? (Pe.type = U === void 0 ? "button" : U, Pe.disabled = u) : (!V.href && !V.to && (Pe.role = "button"), u && (Pe["aria-disabled"] = u));
  const ze = at(r, te), Le = {
    ...n,
    centerRipple: i,
    component: l,
    disabled: u,
    disableRipple: p,
    disableTouchRipple: m,
    focusRipple: g,
    tabIndex: j,
    focusVisible: I
  }, v = gd(Le);
  return /* @__PURE__ */ N.jsxs(yd, {
    as: ve,
    className: se(v.root, c),
    ownerState: Le,
    onBlur: O,
    onClick: S,
    onContextMenu: X,
    onFocus: ye,
    onKeyDown: Me,
    onKeyUp: Qe,
    onMouseDown: H,
    onMouseLeave: G,
    onMouseUp: q,
    onDragLeave: _,
    onTouchEnd: Z,
    onTouchMove: ae,
    onTouchStart: re,
    ref: ze,
    tabIndex: u ? -1 : j,
    type: U,
    ...Pe,
    ...V,
    children: [s, Q ? /* @__PURE__ */ N.jsx(Ss, {
      ref: R,
      center: i,
      ...W
    }) : null]
  });
});
function Tt(e, t, r, n = !1) {
  return Qt((o) => (r && r(o), n || e[t](o), !0));
}
process.env.NODE_ENV !== "production" && ($r.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Bo,
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
  component: Ja,
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
function bd(e) {
  return typeof e.main == "string";
}
function vd(e, t = []) {
  if (!bd(e))
    return !1;
  for (const r of t)
    if (!e.hasOwnProperty(r) || typeof e[r] != "string")
      return !1;
  return !0;
}
function Pt(e = []) {
  return ([, t]) => t && vd(t, e);
}
function xd(e) {
  return Ve("MuiCircularProgress", e);
}
Fe("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const $t = 44, yo = Ir`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, bo = Ir`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`, Sd = typeof yo != "string" ? Po`
        animation: ${yo} 1.4s linear infinite;
      ` : null, Ed = typeof bo != "string" ? Po`
        animation: ${bo} 1.4s ease-in-out infinite;
      ` : null, Cd = (e) => {
  const {
    classes: t,
    variant: r,
    color: n,
    disableShrink: o
  } = e, i = {
    root: ["root", r, `color${ee(n)}`],
    svg: ["svg"],
    circle: ["circle", `circle${ee(r)}`, o && "circleDisableShrink"]
  };
  return Ge(i, xd, t);
}, Td = le("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`color${ee(r.color)}`]];
  }
})(qe(({
  theme: e
}) => ({
  display: "inline-block",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("transform")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: Sd || {
      animation: `${yo} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(Pt()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), wd = le("svg", {
  name: "MuiCircularProgress",
  slot: "Svg",
  overridesResolver: (e, t) => t.svg
})({
  display: "block"
  // Keeps the progress centered
}), Od = le("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.circle, t[`circle${ee(r.variant)}`], r.disableShrink && t.circleDisableShrink];
  }
})(qe(({
  theme: e
}) => ({
  stroke: "currentColor",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("stroke-dashoffset")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: {
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: "80px, 200px",
      strokeDashoffset: 0
      // Add the unit to fix a Edge 16 and below bug.
    }
  }, {
    props: ({
      ownerState: t
    }) => t.variant === "indeterminate" && !t.disableShrink,
    style: Ed || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${bo} 1.4s ease-in-out infinite`
    }
  }]
}))), Es = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const n = He({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: o,
    color: i = "primary",
    disableShrink: s = !1,
    size: c = 40,
    style: l,
    thickness: u = 3.6,
    value: p = 0,
    variant: m = "indeterminate",
    ...g
  } = n, x = {
    ...n,
    color: i,
    disableShrink: s,
    size: c,
    thickness: u,
    value: p,
    variant: m
  }, b = Cd(x), f = {}, S = {}, E = {};
  if (m === "determinate") {
    const P = 2 * Math.PI * (($t - u) / 2);
    f.strokeDasharray = P.toFixed(3), E["aria-valuenow"] = Math.round(p), f.strokeDashoffset = `${((100 - p) / 100 * P).toFixed(3)}px`, S.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ N.jsx(Td, {
    className: se(b.root, o),
    style: {
      width: c,
      height: c,
      ...S,
      ...l
    },
    ownerState: x,
    ref: r,
    role: "progressbar",
    ...E,
    ...g,
    children: /* @__PURE__ */ N.jsx(wd, {
      className: b.svg,
      ownerState: x,
      viewBox: `${$t / 2} ${$t / 2} ${$t} ${$t}`,
      children: /* @__PURE__ */ N.jsx(Od, {
        className: b.circle,
        style: f,
        ownerState: x,
        cx: $t,
        cy: $t,
        r: ($t - u) / 2,
        fill: "none",
        strokeWidth: u
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (Es.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
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
   * @default 'primary'
   */
  color: a.oneOfType([a.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]), a.string]),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink: ar(a.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, for example '3rem'.
   * @default 40
   */
  size: a.oneOfType([a.number, a.string]),
  /**
   * @ignore
   */
  style: a.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness: a.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: a.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant: a.oneOf(["determinate", "indeterminate"])
});
function Rd(e) {
  return Ve("MuiIconButton", e);
}
const aa = Fe("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), $d = (e) => {
  const {
    classes: t,
    disabled: r,
    color: n,
    edge: o,
    size: i,
    loading: s
  } = e, c = {
    root: ["root", s && "loading", r && "disabled", n !== "default" && `color${ee(n)}`, o && `edge${ee(o)}`, `size${ee(i)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return Ge(c, Rd, t);
}, Pd = le($r, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.loading && t.loading, r.color !== "default" && t[`color${ee(r.color)}`], r.edge && t[`edge${ee(r.edge)}`], t[`size${ee(r.size)}`]];
  }
})(qe(({
  theme: e
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (e.vars || e).palette.action.active,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  }),
  variants: [{
    props: (t) => !t.disableRipple,
    style: {
      "--IconButton-hoverBg": e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : De(e.palette.action.active, e.palette.action.hoverOpacity),
      "&:hover": {
        backgroundColor: "var(--IconButton-hoverBg)",
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }, {
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }]
})), qe(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(Pt()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette).filter(Pt()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      "--IconButton-hoverBg": e.vars ? `rgba(${(e.vars || e).palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : De((e.vars || e).palette[t].main, e.palette.action.hoverOpacity)
    }
  })), {
    props: {
      size: "small"
    },
    style: {
      padding: 5,
      fontSize: e.typography.pxToRem(18)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      padding: 12,
      fontSize: e.typography.pxToRem(28)
    }
  }],
  [`&.${aa.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${aa.loading}`]: {
    color: "transparent"
  }
}))), kd = le("span", {
  name: "MuiIconButton",
  slot: "LoadingIndicator",
  overridesResolver: (e, t) => t.loadingIndicator
})(({
  theme: e
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: (e.vars || e).palette.action.disabled,
  variants: [{
    props: {
      loading: !0
    },
    style: {
      display: "flex"
    }
  }]
})), Cs = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const n = He({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: o = !1,
    children: i,
    className: s,
    color: c = "default",
    disabled: l = !1,
    disableFocusRipple: u = !1,
    size: p = "medium",
    id: m,
    loading: g = null,
    loadingIndicator: x,
    ...b
  } = n, f = Qa(m), S = x ?? /* @__PURE__ */ N.jsx(Es, {
    "aria-labelledby": f,
    color: "inherit",
    size: 16
  }), E = {
    ...n,
    edge: o,
    color: c,
    disabled: l,
    disableFocusRipple: u,
    loading: g,
    loadingIndicator: S,
    size: p
  }, P = $d(E);
  return /* @__PURE__ */ N.jsxs(Pd, {
    id: f,
    className: se(P.root, s),
    centerRipple: !0,
    focusRipple: !u,
    disabled: l || g,
    ref: r,
    ...b,
    ownerState: E,
    children: [typeof g == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ N.jsx("span", {
      className: P.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ N.jsx(kd, {
        className: P.loadingIndicator,
        ownerState: E,
        children: g && S
      })
    }), i]
  });
});
process.env.NODE_ENV !== "production" && (Cs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: ar(a.node, (e) => C.Children.toArray(e.children).some((r) => /* @__PURE__ */ C.isValidElement(r) && r.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
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
   * @ignore
   */
  id: a.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: a.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: a.node,
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
function Ad(e) {
  return Ve("MuiTypography", e);
}
const sa = Fe("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]), Nd = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, Md = zf(), Id = (e) => {
  const {
    align: t,
    gutterBottom: r,
    noWrap: n,
    paragraph: o,
    variant: i,
    classes: s
  } = e, c = {
    root: ["root", i, e.align !== "inherit" && `align${ee(t)}`, r && "gutterBottom", n && "noWrap", o && "paragraph"]
  };
  return Ge(c, Ad, s);
}, _d = le("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.variant && t[r.variant], r.align !== "inherit" && t[`align${ee(r.align)}`], r.noWrap && t.noWrap, r.gutterBottom && t.gutterBottom, r.paragraph && t.paragraph];
  }
})(qe(({
  theme: e
}) => {
  var t;
  return {
    margin: 0,
    variants: [{
      props: {
        variant: "inherit"
      },
      style: {
        // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
        font: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit"
      }
    }, ...Object.entries(e.typography).filter(([r, n]) => r !== "inherit" && n && typeof n == "object").map(([r, n]) => ({
      props: {
        variant: r
      },
      style: n
    })), ...Object.entries(e.palette).filter(Pt()).map(([r]) => ({
      props: {
        color: r
      },
      style: {
        color: (e.vars || e).palette[r].main
      }
    })), ...Object.entries(((t = e.palette) == null ? void 0 : t.text) || {}).filter(([, r]) => typeof r == "string").map(([r]) => ({
      props: {
        color: `text${ee(r)}`
      },
      style: {
        color: (e.vars || e).palette.text[r]
      }
    })), {
      props: ({
        ownerState: r
      }) => r.align !== "inherit",
      style: {
        textAlign: "var(--Typography-textAlign)"
      }
    }, {
      props: ({
        ownerState: r
      }) => r.noWrap,
      style: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, {
      props: ({
        ownerState: r
      }) => r.gutterBottom,
      style: {
        marginBottom: "0.35em"
      }
    }, {
      props: ({
        ownerState: r
      }) => r.paragraph,
      style: {
        marginBottom: 16
      }
    }]
  };
})), ca = {
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
}, bt = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const {
    color: n,
    ...o
  } = He({
    props: t,
    name: "MuiTypography"
  }), i = !Nd[n], s = Md({
    ...o,
    ...i && {
      color: n
    }
  }), {
    align: c = "inherit",
    className: l,
    component: u,
    gutterBottom: p = !1,
    noWrap: m = !1,
    paragraph: g = !1,
    variant: x = "body1",
    variantMapping: b = ca,
    ...f
  } = s, S = {
    ...s,
    align: c,
    color: n,
    className: l,
    component: u,
    gutterBottom: p,
    noWrap: m,
    paragraph: g,
    variant: x,
    variantMapping: b
  }, E = u || (g ? "p" : b[x] || ca[x]) || "span", P = Id(S);
  return /* @__PURE__ */ N.jsx(_d, {
    as: E,
    ref: r,
    className: se(P.root, l),
    ...f,
    ownerState: S,
    style: {
      ...c !== "inherit" && {
        "--Typography-textAlign": c
      },
      ...f.style
    }
  });
});
process.env.NODE_ENV !== "production" && (bt.propTypes = {
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
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: a.oneOfType([a.oneOf(["primary", "secondary", "success", "error", "info", "warning", "textPrimary", "textSecondary", "textDisabled"]), a.string]),
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
   * @deprecated Use the `component` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  paragraph: a.bool,
  /**
   * @ignore
   */
  style: a.object,
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
var Ke = "top", st = "bottom", ct = "right", Xe = "left", Go = "auto", Br = [Ke, st, ct, Xe], er = "start", Pr = "end", jd = "clippingParents", Ts = "viewport", pr = "popper", Dd = "reference", la = /* @__PURE__ */ Br.reduce(function(e, t) {
  return e.concat([t + "-" + er, t + "-" + Pr]);
}, []), ws = /* @__PURE__ */ [].concat(Br, [Go]).reduce(function(e, t) {
  return e.concat([t, t + "-" + er, t + "-" + Pr]);
}, []), Ld = "beforeRead", Bd = "read", Vd = "afterRead", Fd = "beforeMain", zd = "main", Wd = "afterMain", Ud = "beforeWrite", Yd = "write", Hd = "afterWrite", qd = [Ld, Bd, Vd, Fd, zd, Wd, Ud, Yd, Hd];
function St(e) {
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
function zt(e) {
  var t = rt(e).Element;
  return e instanceof t || e instanceof Element;
}
function it(e) {
  var t = rt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ko(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = rt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Gd(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, o = t.attributes[r] || {}, i = t.elements[r];
    !it(i) || !St(i) || (Object.assign(i.style, n), Object.keys(o).forEach(function(s) {
      var c = o[s];
      c === !1 ? i.removeAttribute(s) : i.setAttribute(s, c === !0 ? "" : c);
    }));
  });
}
function Kd(e) {
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
      !it(o) || !St(o) || (Object.assign(o.style, c), Object.keys(i).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const Xd = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Gd,
  effect: Kd,
  requires: ["computeStyles"]
};
function xt(e) {
  return e.split("-")[0];
}
var Vt = Math.max, En = Math.min, tr = Math.round;
function vo() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Os() {
  return !/^((?!chrome|android).)*safari/i.test(vo());
}
function rr(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), o = 1, i = 1;
  t && it(e) && (o = e.offsetWidth > 0 && tr(n.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && tr(n.height) / e.offsetHeight || 1);
  var s = zt(e) ? rt(e) : window, c = s.visualViewport, l = !Os() && r, u = (n.left + (l && c ? c.offsetLeft : 0)) / o, p = (n.top + (l && c ? c.offsetTop : 0)) / i, m = n.width / o, g = n.height / i;
  return {
    width: m,
    height: g,
    top: p,
    right: u + m,
    bottom: p + g,
    left: u,
    x: u,
    y: p
  };
}
function Xo(e) {
  var t = rr(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function Rs(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && Ko(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function Rt(e) {
  return rt(e).getComputedStyle(e);
}
function Jd(e) {
  return ["table", "td", "th"].indexOf(St(e)) >= 0;
}
function It(e) {
  return ((zt(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function zn(e) {
  return St(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Ko(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    It(e)
  );
}
function ua(e) {
  return !it(e) || // https://github.com/popperjs/popper-core/issues/837
  Rt(e).position === "fixed" ? null : e.offsetParent;
}
function Qd(e) {
  var t = /firefox/i.test(vo()), r = /Trident/i.test(vo());
  if (r && it(e)) {
    var n = Rt(e);
    if (n.position === "fixed")
      return null;
  }
  var o = zn(e);
  for (Ko(o) && (o = o.host); it(o) && ["html", "body"].indexOf(St(o)) < 0; ) {
    var i = Rt(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Vr(e) {
  for (var t = rt(e), r = ua(e); r && Jd(r) && Rt(r).position === "static"; )
    r = ua(r);
  return r && (St(r) === "html" || St(r) === "body" && Rt(r).position === "static") ? t : r || Qd(e) || t;
}
function Jo(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function xr(e, t, r) {
  return Vt(e, En(t, r));
}
function Zd(e, t, r) {
  var n = xr(e, t, r);
  return n > r ? r : n;
}
function $s() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Ps(e) {
  return Object.assign({}, $s(), e);
}
function ks(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var ep = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, Ps(typeof t != "number" ? t : ks(t, Br));
};
function tp(e) {
  var t, r = e.state, n = e.name, o = e.options, i = r.elements.arrow, s = r.modifiersData.popperOffsets, c = xt(r.placement), l = Jo(c), u = [Xe, ct].indexOf(c) >= 0, p = u ? "height" : "width";
  if (!(!i || !s)) {
    var m = ep(o.padding, r), g = Xo(i), x = l === "y" ? Ke : Xe, b = l === "y" ? st : ct, f = r.rects.reference[p] + r.rects.reference[l] - s[l] - r.rects.popper[p], S = s[l] - r.rects.reference[l], E = Vr(i), P = E ? l === "y" ? E.clientHeight || 0 : E.clientWidth || 0 : 0, T = f / 2 - S / 2, y = m[x], h = P - g[p] - m[b], w = P / 2 - g[p] / 2 + T, k = xr(y, w, h), L = l;
    r.modifiersData[n] = (t = {}, t[L] = k, t.centerOffset = k - w, t);
  }
}
function rp(e) {
  var t = e.state, r = e.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || Rs(t.elements.popper, o) && (t.elements.arrow = o));
}
const np = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: tp,
  effect: rp,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function nr(e) {
  return e.split("-")[1];
}
var op = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function ip(e, t) {
  var r = e.x, n = e.y, o = t.devicePixelRatio || 1;
  return {
    x: tr(r * o) / o || 0,
    y: tr(n * o) / o || 0
  };
}
function fa(e) {
  var t, r = e.popper, n = e.popperRect, o = e.placement, i = e.variation, s = e.offsets, c = e.position, l = e.gpuAcceleration, u = e.adaptive, p = e.roundOffsets, m = e.isFixed, g = s.x, x = g === void 0 ? 0 : g, b = s.y, f = b === void 0 ? 0 : b, S = typeof p == "function" ? p({
    x,
    y: f
  }) : {
    x,
    y: f
  };
  x = S.x, f = S.y;
  var E = s.hasOwnProperty("x"), P = s.hasOwnProperty("y"), T = Xe, y = Ke, h = window;
  if (u) {
    var w = Vr(r), k = "clientHeight", L = "clientWidth";
    if (w === rt(r) && (w = It(r), Rt(w).position !== "static" && c === "absolute" && (k = "scrollHeight", L = "scrollWidth")), w = w, o === Ke || (o === Xe || o === ct) && i === Pr) {
      y = st;
      var B = m && w === h && h.visualViewport ? h.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        w[k]
      );
      f -= B - n.height, f *= l ? 1 : -1;
    }
    if (o === Xe || (o === Ke || o === st) && i === Pr) {
      T = ct;
      var d = m && w === h && h.visualViewport ? h.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        w[L]
      );
      x -= d - n.width, x *= l ? 1 : -1;
    }
  }
  var A = Object.assign({
    position: c
  }, u && op), D = p === !0 ? ip({
    x,
    y: f
  }, rt(r)) : {
    x,
    y: f
  };
  if (x = D.x, f = D.y, l) {
    var j;
    return Object.assign({}, A, (j = {}, j[y] = P ? "0" : "", j[T] = E ? "0" : "", j.transform = (h.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + f + "px)" : "translate3d(" + x + "px, " + f + "px, 0)", j));
  }
  return Object.assign({}, A, (t = {}, t[y] = P ? f + "px" : "", t[T] = E ? x + "px" : "", t.transform = "", t));
}
function ap(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, o = n === void 0 ? !0 : n, i = r.adaptive, s = i === void 0 ? !0 : i, c = r.roundOffsets, l = c === void 0 ? !0 : c, u = {
    placement: xt(t.placement),
    variation: nr(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, fa(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, fa(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const sp = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: ap,
  data: {}
};
var Zr = {
  passive: !0
};
function cp(e) {
  var t = e.state, r = e.instance, n = e.options, o = n.scroll, i = o === void 0 ? !0 : o, s = n.resize, c = s === void 0 ? !0 : s, l = rt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(p) {
    p.addEventListener("scroll", r.update, Zr);
  }), c && l.addEventListener("resize", r.update, Zr), function() {
    i && u.forEach(function(p) {
      p.removeEventListener("scroll", r.update, Zr);
    }), c && l.removeEventListener("resize", r.update, Zr);
  };
}
const lp = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: cp,
  data: {}
};
var up = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function un(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return up[t];
  });
}
var fp = {
  start: "end",
  end: "start"
};
function da(e) {
  return e.replace(/start|end/g, function(t) {
    return fp[t];
  });
}
function Qo(e) {
  var t = rt(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function Zo(e) {
  return rr(It(e)).left + Qo(e).scrollLeft;
}
function dp(e, t) {
  var r = rt(e), n = It(e), o = r.visualViewport, i = n.clientWidth, s = n.clientHeight, c = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    var u = Os();
    (u || !u && t === "fixed") && (c = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: c + Zo(e),
    y: l
  };
}
function pp(e) {
  var t, r = It(e), n = Qo(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = Vt(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = Vt(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), c = -n.scrollLeft + Zo(e), l = -n.scrollTop;
  return Rt(o || r).direction === "rtl" && (c += Vt(r.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: c,
    y: l
  };
}
function ei(e) {
  var t = Rt(e), r = t.overflow, n = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function As(e) {
  return ["html", "body", "#document"].indexOf(St(e)) >= 0 ? e.ownerDocument.body : it(e) && ei(e) ? e : As(zn(e));
}
function Sr(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = As(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), i = rt(n), s = o ? [i].concat(i.visualViewport || [], ei(n) ? n : []) : n, c = t.concat(s);
  return o ? c : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    c.concat(Sr(zn(s)))
  );
}
function xo(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function mp(e, t) {
  var r = rr(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function pa(e, t, r) {
  return t === Ts ? xo(dp(e, r)) : zt(t) ? mp(t, r) : xo(pp(It(e)));
}
function hp(e) {
  var t = Sr(zn(e)), r = ["absolute", "fixed"].indexOf(Rt(e).position) >= 0, n = r && it(e) ? Vr(e) : e;
  return zt(n) ? t.filter(function(o) {
    return zt(o) && Rs(o, n) && St(o) !== "body";
  }) : [];
}
function gp(e, t, r, n) {
  var o = t === "clippingParents" ? hp(e) : [].concat(t), i = [].concat(o, [r]), s = i[0], c = i.reduce(function(l, u) {
    var p = pa(e, u, n);
    return l.top = Vt(p.top, l.top), l.right = En(p.right, l.right), l.bottom = En(p.bottom, l.bottom), l.left = Vt(p.left, l.left), l;
  }, pa(e, s, n));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function Ns(e) {
  var t = e.reference, r = e.element, n = e.placement, o = n ? xt(n) : null, i = n ? nr(n) : null, s = t.x + t.width / 2 - r.width / 2, c = t.y + t.height / 2 - r.height / 2, l;
  switch (o) {
    case Ke:
      l = {
        x: s,
        y: t.y - r.height
      };
      break;
    case st:
      l = {
        x: s,
        y: t.y + t.height
      };
      break;
    case ct:
      l = {
        x: t.x + t.width,
        y: c
      };
      break;
    case Xe:
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
  var u = o ? Jo(o) : null;
  if (u != null) {
    var p = u === "y" ? "height" : "width";
    switch (i) {
      case er:
        l[u] = l[u] - (t[p] / 2 - r[p] / 2);
        break;
      case Pr:
        l[u] = l[u] + (t[p] / 2 - r[p] / 2);
        break;
    }
  }
  return l;
}
function kr(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = n === void 0 ? e.placement : n, i = r.strategy, s = i === void 0 ? e.strategy : i, c = r.boundary, l = c === void 0 ? jd : c, u = r.rootBoundary, p = u === void 0 ? Ts : u, m = r.elementContext, g = m === void 0 ? pr : m, x = r.altBoundary, b = x === void 0 ? !1 : x, f = r.padding, S = f === void 0 ? 0 : f, E = Ps(typeof S != "number" ? S : ks(S, Br)), P = g === pr ? Dd : pr, T = e.rects.popper, y = e.elements[b ? P : g], h = gp(zt(y) ? y : y.contextElement || It(e.elements.popper), l, p, s), w = rr(e.elements.reference), k = Ns({
    reference: w,
    element: T,
    strategy: "absolute",
    placement: o
  }), L = xo(Object.assign({}, T, k)), B = g === pr ? L : w, d = {
    top: h.top - B.top + E.top,
    bottom: B.bottom - h.bottom + E.bottom,
    left: h.left - B.left + E.left,
    right: B.right - h.right + E.right
  }, A = e.modifiersData.offset;
  if (g === pr && A) {
    var D = A[o];
    Object.keys(d).forEach(function(j) {
      var W = [ct, st].indexOf(j) >= 0 ? 1 : -1, z = [Ke, st].indexOf(j) >= 0 ? "y" : "x";
      d[j] += D[z] * W;
    });
  }
  return d;
}
function yp(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = r.boundary, i = r.rootBoundary, s = r.padding, c = r.flipVariations, l = r.allowedAutoPlacements, u = l === void 0 ? ws : l, p = nr(n), m = p ? c ? la : la.filter(function(b) {
    return nr(b) === p;
  }) : Br, g = m.filter(function(b) {
    return u.indexOf(b) >= 0;
  });
  g.length === 0 && (g = m);
  var x = g.reduce(function(b, f) {
    return b[f] = kr(e, {
      placement: f,
      boundary: o,
      rootBoundary: i,
      padding: s
    })[xt(f)], b;
  }, {});
  return Object.keys(x).sort(function(b, f) {
    return x[b] - x[f];
  });
}
function bp(e) {
  if (xt(e) === Go)
    return [];
  var t = un(e);
  return [da(e), t, da(t)];
}
function vp(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = r.mainAxis, i = o === void 0 ? !0 : o, s = r.altAxis, c = s === void 0 ? !0 : s, l = r.fallbackPlacements, u = r.padding, p = r.boundary, m = r.rootBoundary, g = r.altBoundary, x = r.flipVariations, b = x === void 0 ? !0 : x, f = r.allowedAutoPlacements, S = t.options.placement, E = xt(S), P = E === S, T = l || (P || !b ? [un(S)] : bp(S)), y = [S].concat(T).reduce(function(H, X) {
      return H.concat(xt(X) === Go ? yp(t, {
        placement: X,
        boundary: p,
        rootBoundary: m,
        padding: u,
        flipVariations: b,
        allowedAutoPlacements: f
      }) : X);
    }, []), h = t.rects.reference, w = t.rects.popper, k = /* @__PURE__ */ new Map(), L = !0, B = y[0], d = 0; d < y.length; d++) {
      var A = y[d], D = xt(A), j = nr(A) === er, W = [Ke, st].indexOf(D) >= 0, z = W ? "width" : "height", U = kr(t, {
        placement: A,
        boundary: p,
        rootBoundary: m,
        altBoundary: g,
        padding: u
      }), V = W ? j ? ct : Xe : j ? st : Ke;
      h[z] > w[z] && (V = un(V));
      var te = un(V), F = [];
      if (i && F.push(U[D] <= 0), c && F.push(U[V] <= 0, U[te] <= 0), F.every(function(H) {
        return H;
      })) {
        B = A, L = !1;
        break;
      }
      k.set(A, F);
    }
    if (L)
      for (var R = b ? 3 : 1, I = function(X) {
        var _ = y.find(function(q) {
          var G = k.get(q);
          if (G)
            return G.slice(0, X).every(function(re) {
              return re;
            });
        });
        if (_)
          return B = _, "break";
      }, J = R; J > 0; J--) {
        var Q = I(J);
        if (Q === "break") break;
      }
    t.placement !== B && (t.modifiersData[n]._skip = !0, t.placement = B, t.reset = !0);
  }
}
const xp = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: vp,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function ma(e, t, r) {
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
function ha(e) {
  return [Ke, ct, st, Xe].some(function(t) {
    return e[t] >= 0;
  });
}
function Sp(e) {
  var t = e.state, r = e.name, n = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, s = kr(t, {
    elementContext: "reference"
  }), c = kr(t, {
    altBoundary: !0
  }), l = ma(s, n), u = ma(c, o, i), p = ha(l), m = ha(u);
  t.modifiersData[r] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: u,
    isReferenceHidden: p,
    hasPopperEscaped: m
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": p,
    "data-popper-escaped": m
  });
}
const Ep = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Sp
};
function Cp(e, t, r) {
  var n = xt(e), o = [Xe, Ke].indexOf(n) >= 0 ? -1 : 1, i = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, s = i[0], c = i[1];
  return s = s || 0, c = (c || 0) * o, [Xe, ct].indexOf(n) >= 0 ? {
    x: c,
    y: s
  } : {
    x: s,
    y: c
  };
}
function Tp(e) {
  var t = e.state, r = e.options, n = e.name, o = r.offset, i = o === void 0 ? [0, 0] : o, s = ws.reduce(function(p, m) {
    return p[m] = Cp(m, t.rects, i), p;
  }, {}), c = s[t.placement], l = c.x, u = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[n] = s;
}
const wp = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Tp
};
function Op(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = Ns({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Rp = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Op,
  data: {}
};
function $p(e) {
  return e === "x" ? "y" : "x";
}
function Pp(e) {
  var t = e.state, r = e.options, n = e.name, o = r.mainAxis, i = o === void 0 ? !0 : o, s = r.altAxis, c = s === void 0 ? !1 : s, l = r.boundary, u = r.rootBoundary, p = r.altBoundary, m = r.padding, g = r.tether, x = g === void 0 ? !0 : g, b = r.tetherOffset, f = b === void 0 ? 0 : b, S = kr(t, {
    boundary: l,
    rootBoundary: u,
    padding: m,
    altBoundary: p
  }), E = xt(t.placement), P = nr(t.placement), T = !P, y = Jo(E), h = $p(y), w = t.modifiersData.popperOffsets, k = t.rects.reference, L = t.rects.popper, B = typeof f == "function" ? f(Object.assign({}, t.rects, {
    placement: t.placement
  })) : f, d = typeof B == "number" ? {
    mainAxis: B,
    altAxis: B
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, B), A = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, D = {
    x: 0,
    y: 0
  };
  if (w) {
    if (i) {
      var j, W = y === "y" ? Ke : Xe, z = y === "y" ? st : ct, U = y === "y" ? "height" : "width", V = w[y], te = V + S[W], F = V - S[z], R = x ? -L[U] / 2 : 0, I = P === er ? k[U] : L[U], J = P === er ? -L[U] : -k[U], Q = t.elements.arrow, H = x && Q ? Xo(Q) : {
        width: 0,
        height: 0
      }, X = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : $s(), _ = X[W], q = X[z], G = xr(0, k[U], H[U]), re = T ? k[U] / 2 - R - G - _ - d.mainAxis : I - G - _ - d.mainAxis, Z = T ? -k[U] / 2 + R + G + q + d.mainAxis : J + G + q + d.mainAxis, ae = t.elements.arrow && Vr(t.elements.arrow), O = ae ? y === "y" ? ae.clientTop || 0 : ae.clientLeft || 0 : 0, ye = (j = A == null ? void 0 : A[y]) != null ? j : 0, Ee = V + re - ye - O, Me = V + Z - ye, Qe = xr(x ? En(te, Ee) : te, V, x ? Vt(F, Me) : F);
      w[y] = Qe, D[y] = Qe - V;
    }
    if (c) {
      var ve, Pe = y === "x" ? Ke : Xe, ze = y === "x" ? st : ct, Le = w[h], v = h === "y" ? "height" : "width", M = Le + S[Pe], Y = Le - S[ze], oe = [Ke, Xe].indexOf(E) !== -1, Re = (ve = A == null ? void 0 : A[h]) != null ? ve : 0, ue = oe ? M : Le - k[v] - L[v] - Re + d.altAxis, K = oe ? Le + k[v] + L[v] - Re - d.altAxis : Y, be = x && oe ? Zd(ue, Le, K) : xr(x ? ue : M, Le, x ? K : Y);
      w[h] = be, D[h] = be - Le;
    }
    t.modifiersData[n] = D;
  }
}
const kp = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Pp,
  requiresIfExists: ["offset"]
};
function Ap(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Np(e) {
  return e === rt(e) || !it(e) ? Qo(e) : Ap(e);
}
function Mp(e) {
  var t = e.getBoundingClientRect(), r = tr(t.width) / e.offsetWidth || 1, n = tr(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Ip(e, t, r) {
  r === void 0 && (r = !1);
  var n = it(t), o = it(t) && Mp(t), i = It(t), s = rr(e, o, r), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((St(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  ei(i)) && (c = Np(t)), it(t) ? (l = rr(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : i && (l.x = Zo(i))), {
    x: s.left + c.scrollLeft - l.x,
    y: s.top + c.scrollTop - l.y,
    width: s.width,
    height: s.height
  };
}
function _p(e) {
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
function jp(e) {
  var t = _p(e);
  return qd.reduce(function(r, n) {
    return r.concat(t.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function Dp(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function Lp(e) {
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
var ga = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function ya() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Bp(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, o = t.defaultOptions, i = o === void 0 ? ga : o;
  return function(c, l, u) {
    u === void 0 && (u = i);
    var p = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, ga, i),
      modifiersData: {},
      elements: {
        reference: c,
        popper: l
      },
      attributes: {},
      styles: {}
    }, m = [], g = !1, x = {
      state: p,
      setOptions: function(E) {
        var P = typeof E == "function" ? E(p.options) : E;
        f(), p.options = Object.assign({}, i, p.options, P), p.scrollParents = {
          reference: zt(c) ? Sr(c) : c.contextElement ? Sr(c.contextElement) : [],
          popper: Sr(l)
        };
        var T = jp(Lp([].concat(n, p.options.modifiers)));
        return p.orderedModifiers = T.filter(function(y) {
          return y.enabled;
        }), b(), x.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!g) {
          var E = p.elements, P = E.reference, T = E.popper;
          if (ya(P, T)) {
            p.rects = {
              reference: Ip(P, Vr(T), p.options.strategy === "fixed"),
              popper: Xo(T)
            }, p.reset = !1, p.placement = p.options.placement, p.orderedModifiers.forEach(function(d) {
              return p.modifiersData[d.name] = Object.assign({}, d.data);
            });
            for (var y = 0; y < p.orderedModifiers.length; y++) {
              if (p.reset === !0) {
                p.reset = !1, y = -1;
                continue;
              }
              var h = p.orderedModifiers[y], w = h.fn, k = h.options, L = k === void 0 ? {} : k, B = h.name;
              typeof w == "function" && (p = w({
                state: p,
                options: L,
                name: B,
                instance: x
              }) || p);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Dp(function() {
        return new Promise(function(S) {
          x.forceUpdate(), S(p);
        });
      }),
      destroy: function() {
        f(), g = !0;
      }
    };
    if (!ya(c, l))
      return x;
    x.setOptions(u).then(function(S) {
      !g && u.onFirstUpdate && u.onFirstUpdate(S);
    });
    function b() {
      p.orderedModifiers.forEach(function(S) {
        var E = S.name, P = S.options, T = P === void 0 ? {} : P, y = S.effect;
        if (typeof y == "function") {
          var h = y({
            state: p,
            name: E,
            instance: x,
            options: T
          }), w = function() {
          };
          m.push(h || w);
        }
      });
    }
    function f() {
      m.forEach(function(S) {
        return S();
      }), m = [];
    }
    return x;
  };
}
var Vp = [lp, Rp, sp, Xd, wp, xp, kp, np, Ep], Fp = /* @__PURE__ */ Bp({
  defaultModifiers: Vp
});
function zp(e) {
  return typeof e == "function" ? e() : e;
}
const Cn = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const {
    children: n,
    container: o,
    disablePortal: i = !1
  } = t, [s, c] = C.useState(null), l = at(/* @__PURE__ */ C.isValidElement(n) ? Vo(n) : null, r);
  if (Ft(() => {
    i || c(zp(o) || document.body);
  }, [o, i]), Ft(() => {
    if (s && !i)
      return fo(r, s), () => {
        fo(r, null);
      };
  }, [r, s, i]), i) {
    if (/* @__PURE__ */ C.isValidElement(n)) {
      const u = {
        ref: l
      };
      return /* @__PURE__ */ C.cloneElement(n, u);
    }
    return n;
  }
  return s && /* @__PURE__ */ Qs.createPortal(n, s);
});
process.env.NODE_ENV !== "production" && (Cn.propTypes = {
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
  container: a.oneOfType([Or, a.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: a.bool
});
process.env.NODE_ENV !== "production" && (Cn.propTypes = Lo(Cn.propTypes));
function Wp(e) {
  return Ve("MuiPopper", e);
}
Fe("MuiPopper", ["root"]);
function Up(e, t) {
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
function Tn(e) {
  return typeof e == "function" ? e() : e;
}
function Wn(e) {
  return e.nodeType !== void 0;
}
function Yp(e) {
  return !Wn(e);
}
const Hp = (e) => {
  const {
    classes: t
  } = e;
  return Ge({
    root: ["root"]
  }, Wp, t);
}, qp = {}, Gp = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const {
    anchorEl: n,
    children: o,
    direction: i,
    disablePortal: s,
    modifiers: c,
    open: l,
    placement: u,
    popperOptions: p,
    popperRef: m,
    slotProps: g = {},
    slots: x = {},
    TransitionProps: b,
    // @ts-ignore internal logic
    ownerState: f,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...S
  } = t, E = C.useRef(null), P = at(E, r), T = C.useRef(null), y = at(T, m), h = C.useRef(y);
  Ft(() => {
    h.current = y;
  }, [y]), C.useImperativeHandle(m, () => T.current, []);
  const w = Up(u, i), [k, L] = C.useState(w), [B, d] = C.useState(Tn(n));
  C.useEffect(() => {
    T.current && T.current.forceUpdate();
  }), C.useEffect(() => {
    n && d(Tn(n));
  }, [n]), Ft(() => {
    if (!B || !l)
      return;
    const z = (te) => {
      L(te.placement);
    };
    if (process.env.NODE_ENV !== "production" && B && Wn(B) && B.nodeType === 1) {
      const te = B.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && te.top === 0 && te.left === 0 && te.right === 0 && te.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let U = [{
      name: "preventOverflow",
      options: {
        altBoundary: s
      }
    }, {
      name: "flip",
      options: {
        altBoundary: s
      }
    }, {
      name: "onUpdate",
      enabled: !0,
      phase: "afterWrite",
      fn: ({
        state: te
      }) => {
        z(te);
      }
    }];
    c != null && (U = U.concat(c)), p && p.modifiers != null && (U = U.concat(p.modifiers));
    const V = Fp(B, E.current, {
      placement: w,
      ...p,
      modifiers: U
    });
    return h.current(V), () => {
      V.destroy(), h.current(null);
    };
  }, [B, s, c, l, p, w]);
  const A = {
    placement: k
  };
  b !== null && (A.TransitionProps = b);
  const D = Hp(t), j = x.root ?? "div", W = Uu({
    elementType: j,
    externalSlotProps: g.root,
    externalForwardedProps: S,
    additionalProps: {
      role: "tooltip",
      ref: P
    },
    ownerState: t,
    className: D.root
  });
  return /* @__PURE__ */ N.jsx(j, {
    ...W,
    children: typeof o == "function" ? o(A) : o
  });
}), Ms = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const {
    anchorEl: n,
    children: o,
    container: i,
    direction: s = "ltr",
    disablePortal: c = !1,
    keepMounted: l = !1,
    modifiers: u,
    open: p,
    placement: m = "bottom",
    popperOptions: g = qp,
    popperRef: x,
    style: b,
    transition: f = !1,
    slotProps: S = {},
    slots: E = {},
    ...P
  } = t, [T, y] = C.useState(!0), h = () => {
    y(!1);
  }, w = () => {
    y(!0);
  };
  if (!l && !p && (!f || T))
    return null;
  let k;
  if (i)
    k = i;
  else if (n) {
    const d = Tn(n);
    k = d && Wn(d) ? zi(d).body : zi(null).body;
  }
  const L = !p && l && (!f || T) ? "none" : void 0, B = f ? {
    in: p,
    onEnter: h,
    onExited: w
  } : void 0;
  return /* @__PURE__ */ N.jsx(Cn, {
    disablePortal: c,
    container: k,
    children: /* @__PURE__ */ N.jsx(Gp, {
      anchorEl: n,
      direction: s,
      disablePortal: c,
      modifiers: u,
      ref: r,
      open: f ? !T : p,
      placement: m,
      popperOptions: g,
      popperRef: x,
      slotProps: S,
      slots: E,
      ...P,
      style: {
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: L,
        ...b
      },
      TransitionProps: B,
      children: o
    })
  });
});
process.env.NODE_ENV !== "production" && (Ms.propTypes = {
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
  anchorEl: ar(a.oneOfType([Or, a.object, a.func]), (e) => {
    if (e.open) {
      const t = Tn(e.anchorEl);
      if (t && Wn(t) && t.nodeType === 1) {
        const r = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && r.top === 0 && r.left === 0 && r.right === 0 && r.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || Yp(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
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
  container: a.oneOfType([Or, a.func]),
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
  popperRef: Bo,
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
const Kp = le(Ms, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), ti = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const n = is(), o = He({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: i,
    component: s,
    components: c,
    componentsProps: l,
    container: u,
    disablePortal: p,
    keepMounted: m,
    modifiers: g,
    open: x,
    placement: b,
    popperOptions: f,
    popperRef: S,
    transition: E,
    slots: P,
    slotProps: T,
    ...y
  } = o, h = (P == null ? void 0 : P.root) ?? (c == null ? void 0 : c.Root), w = {
    anchorEl: i,
    container: u,
    disablePortal: p,
    keepMounted: m,
    modifiers: g,
    open: x,
    placement: b,
    popperOptions: f,
    popperRef: S,
    transition: E,
    ...y
  };
  return /* @__PURE__ */ N.jsx(Kp, {
    as: s,
    direction: n ? "rtl" : "ltr",
    slots: {
      root: h
    },
    slotProps: T ?? l,
    ...w,
    ref: r
  });
});
process.env.NODE_ENV !== "production" && (ti.propTypes = {
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
  anchorEl: a.oneOfType([Or, a.object, a.func]),
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
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  components: a.shape({
    Root: a.elementType
  }),
  /**
   * The props used for each slot inside the Popper.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
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
  container: a.oneOfType([Or, a.func]),
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
  popperRef: Bo,
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
function Xp(e) {
  return Ve("MuiListSubheader", e);
}
Fe("MuiListSubheader", ["root", "colorPrimary", "colorInherit", "gutters", "inset", "sticky"]);
const Jp = (e) => {
  const {
    classes: t,
    color: r,
    disableGutters: n,
    inset: o,
    disableSticky: i
  } = e, s = {
    root: ["root", r !== "default" && `color${ee(r)}`, !n && "gutters", o && "inset", !i && "sticky"]
  };
  return Ge(s, Xp, t);
}, Qp = le("li", {
  name: "MuiListSubheader",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "default" && t[`color${ee(r.color)}`], !r.disableGutters && t.gutters, r.inset && t.inset, !r.disableSticky && t.sticky];
  }
})(qe(({
  theme: e
}) => ({
  boxSizing: "border-box",
  lineHeight: "48px",
  listStyle: "none",
  color: (e.vars || e).palette.text.secondary,
  fontFamily: e.typography.fontFamily,
  fontWeight: e.typography.fontWeightMedium,
  fontSize: e.typography.pxToRem(14),
  variants: [{
    props: {
      color: "primary"
    },
    style: {
      color: (e.vars || e).palette.primary.main
    }
  }, {
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.disableGutters,
    style: {
      paddingLeft: 16,
      paddingRight: 16
    }
  }, {
    props: ({
      ownerState: t
    }) => t.inset,
    style: {
      paddingLeft: 72
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.disableSticky,
    style: {
      position: "sticky",
      top: 0,
      zIndex: 1,
      backgroundColor: (e.vars || e).palette.background.paper
    }
  }]
}))), wn = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const n = He({
    props: t,
    name: "MuiListSubheader"
  }), {
    className: o,
    color: i = "default",
    component: s = "li",
    disableGutters: c = !1,
    disableSticky: l = !1,
    inset: u = !1,
    ...p
  } = n, m = {
    ...n,
    color: i,
    component: s,
    disableGutters: c,
    disableSticky: l,
    inset: u
  }, g = Jp(m);
  return /* @__PURE__ */ N.jsx(Qp, {
    as: s,
    className: se(g.root, o),
    ref: r,
    ownerState: m,
    ...p
  });
});
wn && (wn.muiSkipListHighlight = !0);
process.env.NODE_ENV !== "production" && (wn.propTypes = {
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
const Zp = sr(/* @__PURE__ */ N.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function em(e) {
  return Ve("MuiChip", e);
}
const ie = Fe("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), tm = (e) => {
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
    root: ["root", l, r && "disabled", `size${ee(n)}`, `color${ee(o)}`, c && "clickable", c && `clickableColor${ee(o)}`, s && "deletable", s && `deletableColor${ee(o)}`, `${l}${ee(o)}`],
    label: ["label", `label${ee(n)}`],
    avatar: ["avatar", `avatar${ee(n)}`, `avatarColor${ee(o)}`],
    icon: ["icon", `icon${ee(n)}`, `iconColor${ee(i)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${ee(n)}`, `deleteIconColor${ee(o)}`, `deleteIcon${ee(l)}Color${ee(o)}`]
  };
  return Ge(u, em, t);
}, rm = le("div", {
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
      [`& .${ie.avatar}`]: t.avatar
    }, {
      [`& .${ie.avatar}`]: t[`avatar${ee(c)}`]
    }, {
      [`& .${ie.avatar}`]: t[`avatarColor${ee(n)}`]
    }, {
      [`& .${ie.icon}`]: t.icon
    }, {
      [`& .${ie.icon}`]: t[`icon${ee(c)}`]
    }, {
      [`& .${ie.icon}`]: t[`iconColor${ee(o)}`]
    }, {
      [`& .${ie.deleteIcon}`]: t.deleteIcon
    }, {
      [`& .${ie.deleteIcon}`]: t[`deleteIcon${ee(c)}`]
    }, {
      [`& .${ie.deleteIcon}`]: t[`deleteIconColor${ee(n)}`]
    }, {
      [`& .${ie.deleteIcon}`]: t[`deleteIcon${ee(l)}Color${ee(n)}`]
    }, t.root, t[`size${ee(c)}`], t[`color${ee(n)}`], i && t.clickable, i && n !== "default" && t[`clickableColor${ee(n)})`], s && t.deletable, s && n !== "default" && t[`deletableColor${ee(n)}`], t[l], t[`${l}${ee(n)}`]];
  }
})(qe(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[700] : e.palette.grey[300];
  return {
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
    [`&.${ie.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${ie.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : t,
      fontSize: e.typography.pxToRem(12)
    },
    [`& .${ie.avatarColorPrimary}`]: {
      color: (e.vars || e).palette.primary.contrastText,
      backgroundColor: (e.vars || e).palette.primary.dark
    },
    [`& .${ie.avatarColorSecondary}`]: {
      color: (e.vars || e).palette.secondary.contrastText,
      backgroundColor: (e.vars || e).palette.secondary.dark
    },
    [`& .${ie.avatarSmall}`]: {
      marginLeft: 4,
      marginRight: -4,
      width: 18,
      height: 18,
      fontSize: e.typography.pxToRem(10)
    },
    [`& .${ie.icon}`]: {
      marginLeft: 5,
      marginRight: -6
    },
    [`& .${ie.deleteIcon}`]: {
      WebkitTapHighlightColor: "transparent",
      color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)` : De(e.palette.text.primary, 0.26),
      fontSize: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : De(e.palette.text.primary, 0.4)
      }
    },
    variants: [{
      props: {
        size: "small"
      },
      style: {
        height: 24,
        [`& .${ie.icon}`]: {
          fontSize: 18,
          marginLeft: 4,
          marginRight: -4
        },
        [`& .${ie.deleteIcon}`]: {
          fontSize: 16,
          marginRight: 4,
          marginLeft: -4
        }
      }
    }, ...Object.entries(e.palette).filter(Pt(["contrastText"])).map(([r]) => ({
      props: {
        color: r
      },
      style: {
        backgroundColor: (e.vars || e).palette[r].main,
        color: (e.vars || e).palette[r].contrastText,
        [`& .${ie.deleteIcon}`]: {
          color: e.vars ? `rgba(${e.vars.palette[r].contrastTextChannel} / 0.7)` : De(e.palette[r].contrastText, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[r].contrastText
          }
        }
      }
    })), {
      props: (r) => r.iconColor === r.color,
      style: {
        [`& .${ie.icon}`]: {
          color: e.vars ? e.vars.palette.Chip.defaultIconColor : t
        }
      }
    }, {
      props: (r) => r.iconColor === r.color && r.color !== "default",
      style: {
        [`& .${ie.icon}`]: {
          color: "inherit"
        }
      }
    }, {
      props: {
        onDelete: !0
      },
      style: {
        [`&.${ie.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : De(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
        }
      }
    }, ...Object.entries(e.palette).filter(Pt(["dark"])).map(([r]) => ({
      props: {
        color: r,
        onDelete: !0
      },
      style: {
        [`&.${ie.focusVisible}`]: {
          background: (e.vars || e).palette[r].dark
        }
      }
    })), {
      props: {
        clickable: !0
      },
      style: {
        userSelect: "none",
        WebkitTapHighlightColor: "transparent",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : De(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
        },
        [`&.${ie.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : De(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[1]
        }
      }
    }, ...Object.entries(e.palette).filter(Pt(["dark"])).map(([r]) => ({
      props: {
        color: r,
        clickable: !0
      },
      style: {
        [`&:hover, &.${ie.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette[r].dark
        }
      }
    })), {
      props: {
        variant: "outlined"
      },
      style: {
        backgroundColor: "transparent",
        border: e.vars ? `1px solid ${e.vars.palette.Chip.defaultBorder}` : `1px solid ${e.palette.mode === "light" ? e.palette.grey[400] : e.palette.grey[700]}`,
        [`&.${ie.clickable}:hover`]: {
          backgroundColor: (e.vars || e).palette.action.hover
        },
        [`&.${ie.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette.action.focus
        },
        [`& .${ie.avatar}`]: {
          marginLeft: 4
        },
        [`& .${ie.avatarSmall}`]: {
          marginLeft: 2
        },
        [`& .${ie.icon}`]: {
          marginLeft: 4
        },
        [`& .${ie.iconSmall}`]: {
          marginLeft: 2
        },
        [`& .${ie.deleteIcon}`]: {
          marginRight: 5
        },
        [`& .${ie.deleteIconSmall}`]: {
          marginRight: 3
        }
      }
    }, ...Object.entries(e.palette).filter(Pt()).map(([r]) => ({
      props: {
        variant: "outlined",
        color: r
      },
      style: {
        color: (e.vars || e).palette[r].main,
        border: `1px solid ${e.vars ? `rgba(${e.vars.palette[r].mainChannel} / 0.7)` : De(e.palette[r].main, 0.7)}`,
        [`&.${ie.clickable}:hover`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : De(e.palette[r].main, e.palette.action.hoverOpacity)
        },
        [`&.${ie.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.focusOpacity})` : De(e.palette[r].main, e.palette.action.focusOpacity)
        },
        [`& .${ie.deleteIcon}`]: {
          color: e.vars ? `rgba(${e.vars.palette[r].mainChannel} / 0.7)` : De(e.palette[r].main, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[r].main
          }
        }
      }
    }))]
  };
})), nm = le("span", {
  name: "MuiChip",
  slot: "Label",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e, {
      size: n
    } = r;
    return [t.label, t[`label${ee(n)}`]];
  }
})({
  overflow: "hidden",
  textOverflow: "ellipsis",
  paddingLeft: 12,
  paddingRight: 12,
  whiteSpace: "nowrap",
  variants: [{
    props: {
      variant: "outlined"
    },
    style: {
      paddingLeft: 11,
      paddingRight: 11
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      paddingLeft: 8,
      paddingRight: 8
    }
  }, {
    props: {
      size: "small",
      variant: "outlined"
    },
    style: {
      paddingLeft: 7,
      paddingRight: 7
    }
  }]
});
function ba(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const Is = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const n = He({
    props: t,
    name: "MuiChip"
  }), {
    avatar: o,
    className: i,
    clickable: s,
    color: c = "default",
    component: l,
    deleteIcon: u,
    disabled: p = !1,
    icon: m,
    label: g,
    onClick: x,
    onDelete: b,
    onKeyDown: f,
    onKeyUp: S,
    size: E = "medium",
    variant: P = "filled",
    tabIndex: T,
    skipFocusWhenDisabled: y = !1,
    // TODO v6: Rename to `focusableWhenDisabled`.
    ...h
  } = n, w = C.useRef(null), k = at(w, r), L = (F) => {
    F.stopPropagation(), b && b(F);
  }, B = (F) => {
    F.currentTarget === F.target && ba(F) && F.preventDefault(), f && f(F);
  }, d = (F) => {
    F.currentTarget === F.target && b && ba(F) && b(F), S && S(F);
  }, A = s !== !1 && x ? !0 : s, D = A || b ? $r : l || "div", j = {
    ...n,
    component: D,
    disabled: p,
    size: E,
    color: c,
    iconColor: /* @__PURE__ */ C.isValidElement(m) && m.props.color || c,
    onDelete: !!b,
    clickable: A,
    variant: P
  }, W = tm(j), z = D === $r ? {
    component: l || "div",
    focusVisibleClassName: W.focusVisible,
    ...b && {
      disableRipple: !0
    }
  } : {};
  let U = null;
  b && (U = u && /* @__PURE__ */ C.isValidElement(u) ? /* @__PURE__ */ C.cloneElement(u, {
    className: se(u.props.className, W.deleteIcon),
    onClick: L
  }) : /* @__PURE__ */ N.jsx(Zp, {
    className: se(W.deleteIcon),
    onClick: L
  }));
  let V = null;
  o && /* @__PURE__ */ C.isValidElement(o) && (V = /* @__PURE__ */ C.cloneElement(o, {
    className: se(W.avatar, o.props.className)
  }));
  let te = null;
  return m && /* @__PURE__ */ C.isValidElement(m) && (te = /* @__PURE__ */ C.cloneElement(m, {
    className: se(W.icon, m.props.className)
  })), process.env.NODE_ENV !== "production" && V && te && console.error("MUI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one."), /* @__PURE__ */ N.jsxs(rm, {
    as: D,
    className: se(W.root, i),
    disabled: A && p ? !0 : void 0,
    onClick: x,
    onKeyDown: B,
    onKeyUp: d,
    ref: k,
    tabIndex: y && p ? -1 : T,
    ownerState: j,
    ...z,
    ...h,
    children: [V || te, /* @__PURE__ */ N.jsx(nm, {
      className: se(W.label),
      ownerState: j,
      children: g
    }), U]
  });
});
process.env.NODE_ENV !== "production" && (Is.propTypes = {
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
  children: Lu,
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
const om = sr(/* @__PURE__ */ N.jsx("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), "Person");
function im(e) {
  return Ve("MuiAvatar", e);
}
Fe("MuiAvatar", ["root", "colorDefault", "circular", "rounded", "square", "img", "fallback"]);
const am = (e) => {
  const {
    classes: t,
    variant: r,
    colorDefault: n
  } = e;
  return Ge({
    root: ["root", r, n && "colorDefault"],
    img: ["img"],
    fallback: ["fallback"]
  }, im, t);
}, sm = le("div", {
  name: "MuiAvatar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], r.colorDefault && t.colorDefault];
  }
})(qe(({
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
    style: {
      color: (e.vars || e).palette.background.default,
      ...e.vars ? {
        backgroundColor: e.vars.palette.Avatar.defaultBg
      } : {
        backgroundColor: e.palette.grey[400],
        ...e.applyStyles("dark", {
          backgroundColor: e.palette.grey[600]
        })
      }
    }
  }]
}))), cm = le("img", {
  name: "MuiAvatar",
  slot: "Img",
  overridesResolver: (e, t) => t.img
})({
  width: "100%",
  height: "100%",
  textAlign: "center",
  // Handle non-square image.
  objectFit: "cover",
  // Hide alt text.
  color: "transparent",
  // Hide the image broken icon, only works on Chrome.
  textIndent: 1e4
}), lm = le(om, {
  name: "MuiAvatar",
  slot: "Fallback",
  overridesResolver: (e, t) => t.fallback
})({
  width: "75%",
  height: "75%"
});
function um({
  crossOrigin: e,
  referrerPolicy: t,
  src: r,
  srcSet: n
}) {
  const [o, i] = C.useState(!1);
  return C.useEffect(() => {
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
const _s = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const n = He({
    props: t,
    name: "MuiAvatar"
  }), {
    alt: o,
    children: i,
    className: s,
    component: c = "div",
    slots: l = {},
    slotProps: u = {},
    imgProps: p,
    sizes: m,
    src: g,
    srcSet: x,
    variant: b = "circular",
    ...f
  } = n;
  let S = null;
  const E = {
    ...n,
    component: c,
    variant: b
  }, P = um({
    ...p,
    ...typeof u.img == "function" ? u.img(E) : u.img,
    src: g,
    srcSet: x
  }), T = g || x, y = T && P !== "error";
  E.colorDefault = !y, delete E.ownerState;
  const h = am(E), [w, k] = Bt("img", {
    className: h.img,
    elementType: cm,
    externalForwardedProps: {
      slots: l,
      slotProps: {
        img: {
          ...p,
          ...u.img
        }
      }
    },
    additionalProps: {
      alt: o,
      src: g,
      srcSet: x,
      sizes: m
    },
    ownerState: E
  });
  return y ? S = /* @__PURE__ */ N.jsx(w, {
    ...k
  }) : i || i === 0 ? S = i : T && o ? S = o[0] : S = /* @__PURE__ */ N.jsx(lm, {
    ownerState: E,
    className: h.fallback
  }), /* @__PURE__ */ N.jsx(sm, {
    as: c,
    className: se(h.root, s),
    ref: r,
    ...f,
    ownerState: E,
    children: S
  });
});
process.env.NODE_ENV !== "production" && (_s.propTypes = {
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
   * @deprecated Use `slotProps.img` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
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
const fm = Fe("MuiBox", ["root"]), dm = Fn(), dt = yu({
  themeId: wt,
  defaultTheme: dm,
  defaultClassName: fm.root,
  generateClassName: Wa.generate
});
process.env.NODE_ENV !== "production" && (dt.propTypes = {
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
function So(e) {
  return `scale(${e}, ${e ** 2})`;
}
const pm = {
  entering: {
    opacity: 1,
    transform: So(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, oo = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), On = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const {
    addEndListener: n,
    appear: o = !0,
    children: i,
    easing: s,
    in: c,
    onEnter: l,
    onEntered: u,
    onEntering: p,
    onExit: m,
    onExited: g,
    onExiting: x,
    style: b,
    timeout: f = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: S = Et,
    ...E
  } = t, P = Dt(), T = C.useRef(), y = Lr(), h = C.useRef(null), w = at(h, Vo(i), r), k = (z) => (U) => {
    if (z) {
      const V = h.current;
      U === void 0 ? z(V) : z(V, U);
    }
  }, L = k(p), B = k((z, U) => {
    ed(z);
    const {
      duration: V,
      delay: te,
      easing: F
    } = vn({
      style: b,
      timeout: f,
      easing: s
    }, {
      mode: "enter"
    });
    let R;
    f === "auto" ? (R = y.transitions.getAutoHeightDuration(z.clientHeight), T.current = R) : R = V, z.style.transition = [y.transitions.create("opacity", {
      duration: R,
      delay: te
    }), y.transitions.create("transform", {
      duration: oo ? R : R * 0.666,
      delay: te,
      easing: F
    })].join(","), l && l(z, U);
  }), d = k(u), A = k(x), D = k((z) => {
    const {
      duration: U,
      delay: V,
      easing: te
    } = vn({
      style: b,
      timeout: f,
      easing: s
    }, {
      mode: "exit"
    });
    let F;
    f === "auto" ? (F = y.transitions.getAutoHeightDuration(z.clientHeight), T.current = F) : F = U, z.style.transition = [y.transitions.create("opacity", {
      duration: F,
      delay: V
    }), y.transitions.create("transform", {
      duration: oo ? F : F * 0.666,
      delay: oo ? V : V || F * 0.333,
      easing: te
    })].join(","), z.style.opacity = 0, z.style.transform = So(0.75), m && m(z);
  }), j = k(g), W = (z) => {
    f === "auto" && P.start(T.current || 0, z), n && n(h.current, z);
  };
  return /* @__PURE__ */ N.jsx(S, {
    appear: o,
    in: c,
    nodeRef: h,
    onEnter: B,
    onEntered: d,
    onEntering: L,
    onExit: D,
    onExited: j,
    onExiting: A,
    addEndListener: W,
    timeout: f === "auto" ? null : f,
    ...E,
    children: (z, {
      ownerState: U,
      ...V
    }) => /* @__PURE__ */ C.cloneElement(i, {
      style: {
        opacity: 0,
        transform: So(0.75),
        visibility: z === "exited" && !c ? "hidden" : void 0,
        ...pm[z],
        ...b,
        ...i.props.style
      },
      ref: w,
      ...V
    })
  });
});
process.env.NODE_ENV !== "production" && (On.propTypes = {
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
  children: Do.isRequired,
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
On && (On.muiSupportAuto = !0);
const or = /* @__PURE__ */ C.createContext({});
process.env.NODE_ENV !== "production" && (or.displayName = "ListContext");
function mm(e) {
  return Ve("MuiList", e);
}
Fe("MuiList", ["root", "padding", "dense", "subheader"]);
const hm = (e) => {
  const {
    classes: t,
    disablePadding: r,
    dense: n,
    subheader: o
  } = e;
  return Ge({
    root: ["root", !r && "padding", n && "dense", o && "subheader"]
  }, mm, t);
}, gm = le("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, !r.disablePadding && t.padding, r.dense && t.dense, r.subheader && t.subheader];
  }
})({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative",
  variants: [{
    props: ({
      ownerState: e
    }) => !e.disablePadding,
    style: {
      paddingTop: 8,
      paddingBottom: 8
    }
  }, {
    props: ({
      ownerState: e
    }) => e.subheader,
    style: {
      paddingTop: 0
    }
  }]
}), ri = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const n = He({
    props: t,
    name: "MuiList"
  }), {
    children: o,
    className: i,
    component: s = "ul",
    dense: c = !1,
    disablePadding: l = !1,
    subheader: u,
    ...p
  } = n, m = C.useMemo(() => ({
    dense: c
  }), [c]), g = {
    ...n,
    component: s,
    dense: c,
    disablePadding: l
  }, x = hm(g);
  return /* @__PURE__ */ N.jsx(or.Provider, {
    value: m,
    children: /* @__PURE__ */ N.jsxs(gm, {
      as: s,
      className: se(x.root, i),
      ref: r,
      ownerState: g,
      ...p,
      children: [u, o]
    })
  });
});
process.env.NODE_ENV !== "production" && (ri.propTypes = {
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
function ym(e) {
  return Ve("MuiListItemButton", e);
}
const mr = Fe("MuiListItemButton", ["root", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "selected"]), bm = (e, t) => {
  const {
    ownerState: r
  } = e;
  return [t.root, r.dense && t.dense, r.alignItems === "flex-start" && t.alignItemsFlexStart, r.divider && t.divider, !r.disableGutters && t.gutters];
}, vm = (e) => {
  const {
    alignItems: t,
    classes: r,
    dense: n,
    disabled: o,
    disableGutters: i,
    divider: s,
    selected: c
  } = e, u = Ge({
    root: ["root", n && "dense", !i && "gutters", s && "divider", o && "disabled", t === "flex-start" && "alignItemsFlexStart", c && "selected"]
  }, ym, r);
  return {
    ...r,
    ...u
  };
}, xm = le($r, {
  shouldForwardProp: (e) => ys(e) || e === "classes",
  name: "MuiListItemButton",
  slot: "Root",
  overridesResolver: bm
})(qe(({
  theme: e
}) => ({
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
  [`&.${mr.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : De(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${mr.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : De(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${mr.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : De(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : De(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  },
  [`&.${mr.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${mr.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.divider,
    style: {
      borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
      backgroundClip: "padding-box"
    }
  }, {
    props: {
      alignItems: "flex-start"
    },
    style: {
      alignItems: "flex-start"
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.disableGutters,
    style: {
      paddingLeft: 16,
      paddingRight: 16
    }
  }, {
    props: ({
      ownerState: t
    }) => t.dense,
    style: {
      paddingTop: 4,
      paddingBottom: 4
    }
  }]
}))), ni = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const n = He({
    props: t,
    name: "MuiListItemButton"
  }), {
    alignItems: o = "center",
    autoFocus: i = !1,
    component: s = "div",
    children: c,
    dense: l = !1,
    disableGutters: u = !1,
    divider: p = !1,
    focusVisibleClassName: m,
    selected: g = !1,
    className: x,
    ...b
  } = n, f = C.useContext(or), S = C.useMemo(() => ({
    dense: l || f.dense || !1,
    alignItems: o,
    disableGutters: u
  }), [o, f.dense, l, u]), E = C.useRef(null);
  Ft(() => {
    i && (E.current ? E.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a ListItemButton whose component has not been rendered."));
  }, [i]);
  const P = {
    ...n,
    alignItems: o,
    dense: S.dense,
    disableGutters: u,
    divider: p,
    selected: g
  }, T = vm(P), y = at(E, r);
  return /* @__PURE__ */ N.jsx(or.Provider, {
    value: S,
    children: /* @__PURE__ */ N.jsx(xm, {
      ref: y,
      href: b.href || b.to,
      component: (b.href || b.to) && s === "div" ? "button" : s,
      focusVisibleClassName: se(T.focusVisible, m),
      ownerState: P,
      className: se(T.root, x),
      ...b,
      classes: T,
      children: c
    })
  });
});
process.env.NODE_ENV !== "production" && (ni.propTypes = {
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
function Sm(e) {
  return Ve("MuiListItemIcon", e);
}
Fe("MuiListItemIcon", ["root", "alignItemsFlexStart"]);
const Em = (e) => {
  const {
    alignItems: t,
    classes: r
  } = e;
  return Ge({
    root: ["root", t === "flex-start" && "alignItemsFlexStart"]
  }, Sm, r);
}, Cm = le("div", {
  name: "MuiListItemIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.alignItems === "flex-start" && t.alignItemsFlexStart];
  }
})(qe(({
  theme: e
}) => ({
  minWidth: 56,
  color: (e.vars || e).palette.action.active,
  flexShrink: 0,
  display: "inline-flex",
  variants: [{
    props: {
      alignItems: "flex-start"
    },
    style: {
      marginTop: 8
    }
  }]
}))), oi = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const n = He({
    props: t,
    name: "MuiListItemIcon"
  }), {
    className: o,
    ...i
  } = n, s = C.useContext(or), c = {
    ...n,
    alignItems: s.alignItems
  }, l = Em(c);
  return /* @__PURE__ */ N.jsx(Cm, {
    className: se(l.root, o),
    ownerState: c,
    ref: r,
    ...i
  });
});
process.env.NODE_ENV !== "production" && (oi.propTypes = {
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
function Tm(e) {
  return Ve("MuiListItemText", e);
}
const en = Fe("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), wm = (e) => {
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
  }, Tm, t);
}, Om = le("div", {
  name: "MuiListItemText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [{
      [`& .${en.primary}`]: t.primary
    }, {
      [`& .${en.secondary}`]: t.secondary
    }, t.root, r.inset && t.inset, r.primary && r.secondary && t.multiline, r.dense && t.dense];
  }
})({
  flex: "1 1 auto",
  minWidth: 0,
  marginTop: 4,
  marginBottom: 4,
  [`.${sa.root}:where(& .${en.primary})`]: {
    display: "block"
  },
  [`.${sa.root}:where(& .${en.secondary})`]: {
    display: "block"
  },
  variants: [{
    props: ({
      ownerState: e
    }) => e.primary && e.secondary,
    style: {
      marginTop: 6,
      marginBottom: 6
    }
  }, {
    props: ({
      ownerState: e
    }) => e.inset,
    style: {
      paddingLeft: 56
    }
  }]
}), Un = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const n = He({
    props: t,
    name: "MuiListItemText"
  }), {
    children: o,
    className: i,
    disableTypography: s = !1,
    inset: c = !1,
    primary: l,
    primaryTypographyProps: u,
    secondary: p,
    secondaryTypographyProps: m,
    slots: g = {},
    slotProps: x = {},
    ...b
  } = n, {
    dense: f
  } = C.useContext(or);
  let S = l ?? o, E = p;
  const P = {
    ...n,
    disableTypography: s,
    inset: c,
    primary: !!S,
    secondary: !!E,
    dense: f
  }, T = wm(P), y = {
    slots: g,
    slotProps: {
      primary: u,
      secondary: m,
      ...x
    }
  }, [h, w] = Bt("primary", {
    className: T.primary,
    elementType: bt,
    externalForwardedProps: y,
    ownerState: P
  }), [k, L] = Bt("secondary", {
    className: T.secondary,
    elementType: bt,
    externalForwardedProps: y,
    ownerState: P
  });
  return S != null && S.type !== bt && !s && (S = /* @__PURE__ */ N.jsx(h, {
    variant: f ? "body2" : "body1",
    component: w != null && w.variant ? void 0 : "span",
    ...w,
    children: S
  })), E != null && E.type !== bt && !s && (E = /* @__PURE__ */ N.jsx(k, {
    variant: "body2",
    color: "textSecondary",
    ...L,
    children: E
  })), /* @__PURE__ */ N.jsxs(Om, {
    className: se(T.root, i),
    ownerState: P,
    ref: r,
    ...b,
    children: [S, E]
  });
});
process.env.NODE_ENV !== "production" && (Un.propTypes = {
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
   * @deprecated Use `slotProps.primary` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  primaryTypographyProps: a.object,
  /**
   * The secondary content element.
   */
  secondary: a.node,
  /**
   * These props will be forwarded to the secondary typography component
   * (as long as disableTypography is not `true`).
   * @deprecated Use `slotProps.secondary` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  secondaryTypographyProps: a.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: a.shape({
    primary: a.oneOfType([a.func, a.object]),
    secondary: a.oneOfType([a.func, a.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: a.shape({
    primary: a.elementType,
    secondary: a.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object])
});
function Rm(e) {
  return Ve("MuiTooltip", e);
}
const Ne = Fe("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);
function $m(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Pm = (e) => {
  const {
    classes: t,
    disableInteractive: r,
    arrow: n,
    touch: o,
    placement: i
  } = e, s = {
    popper: ["popper", !r && "popperInteractive", n && "popperArrow"],
    tooltip: ["tooltip", n && "tooltipArrow", o && "touch", `tooltipPlacement${ee(i.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return Ge(s, Rm, t);
}, km = le(ti, {
  name: "MuiTooltip",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.popper, !r.disableInteractive && t.popperInteractive, r.arrow && t.popperArrow, !r.open && t.popperClose];
  }
})(qe(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.tooltip,
  pointerEvents: "none",
  variants: [{
    props: ({
      ownerState: t
    }) => !t.disableInteractive,
    style: {
      pointerEvents: "auto"
    }
  }, {
    props: ({
      open: t
    }) => !t,
    style: {
      pointerEvents: "none"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow,
    style: {
      [`&[data-popper-placement*="bottom"] .${Ne.arrow}`]: {
        top: 0,
        marginTop: "-0.71em",
        "&::before": {
          transformOrigin: "0 100%"
        }
      },
      [`&[data-popper-placement*="top"] .${Ne.arrow}`]: {
        bottom: 0,
        marginBottom: "-0.71em",
        "&::before": {
          transformOrigin: "100% 0"
        }
      },
      [`&[data-popper-placement*="right"] .${Ne.arrow}`]: {
        height: "1em",
        width: "0.71em",
        "&::before": {
          transformOrigin: "100% 100%"
        }
      },
      [`&[data-popper-placement*="left"] .${Ne.arrow}`]: {
        height: "1em",
        width: "0.71em",
        "&::before": {
          transformOrigin: "0 0"
        }
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !t.isRtl,
    style: {
      [`&[data-popper-placement*="right"] .${Ne.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !!t.isRtl,
    style: {
      [`&[data-popper-placement*="right"] .${Ne.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !t.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${Ne.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !!t.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${Ne.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }]
}))), Am = le("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.tooltip, r.touch && t.touch, r.arrow && t.tooltipArrow, t[`tooltipPlacement${ee(r.placement.split("-")[0])}`]];
  }
})(qe(({
  theme: e
}) => ({
  backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : De(e.palette.grey[700], 0.92),
  borderRadius: (e.vars || e).shape.borderRadius,
  color: (e.vars || e).palette.common.white,
  fontFamily: e.typography.fontFamily,
  padding: "4px 8px",
  fontSize: e.typography.pxToRem(11),
  maxWidth: 300,
  margin: 2,
  wordWrap: "break-word",
  fontWeight: e.typography.fontWeightMedium,
  [`.${Ne.popper}[data-popper-placement*="left"] &`]: {
    transformOrigin: "right center"
  },
  [`.${Ne.popper}[data-popper-placement*="right"] &`]: {
    transformOrigin: "left center"
  },
  [`.${Ne.popper}[data-popper-placement*="top"] &`]: {
    transformOrigin: "center bottom",
    marginBottom: "14px"
  },
  [`.${Ne.popper}[data-popper-placement*="bottom"] &`]: {
    transformOrigin: "center top",
    marginTop: "14px"
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.arrow,
    style: {
      position: "relative",
      margin: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      padding: "8px 16px",
      fontSize: e.typography.pxToRem(14),
      lineHeight: `${$m(16 / 14)}em`,
      fontWeight: e.typography.fontWeightRegular
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.isRtl,
    style: {
      [`.${Ne.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "14px"
      },
      [`.${Ne.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "14px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.isRtl && t.touch,
    style: {
      [`.${Ne.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "24px"
      },
      [`.${Ne.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !!t.isRtl,
    style: {
      [`.${Ne.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "14px"
      },
      [`.${Ne.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "14px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !!t.isRtl && t.touch,
    style: {
      [`.${Ne.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "24px"
      },
      [`.${Ne.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${Ne.popper}[data-popper-placement*="top"] &`]: {
        marginBottom: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${Ne.popper}[data-popper-placement*="bottom"] &`]: {
        marginTop: "24px"
      }
    }
  }]
}))), Nm = le("span", {
  name: "MuiTooltip",
  slot: "Arrow",
  overridesResolver: (e, t) => t.arrow
})(qe(({
  theme: e
}) => ({
  overflow: "hidden",
  position: "absolute",
  width: "1em",
  height: "0.71em",
  boxSizing: "border-box",
  color: e.vars ? e.vars.palette.Tooltip.bg : De(e.palette.grey[700], 0.9),
  "&::before": {
    content: '""',
    margin: "auto",
    display: "block",
    width: "100%",
    height: "100%",
    backgroundColor: "currentColor",
    transform: "rotate(45deg)"
  }
})));
let tn = !1;
const va = new Vn();
let hr = {
  x: 0,
  y: 0
};
function rn(e, t) {
  return (r, ...n) => {
    t && t(r, ...n), e(r, ...n);
  };
}
const js = /* @__PURE__ */ C.forwardRef(function(t, r) {
  const n = He({
    props: t,
    name: "MuiTooltip"
  }), {
    arrow: o = !1,
    children: i,
    classes: s,
    components: c = {},
    componentsProps: l = {},
    describeChild: u = !1,
    disableFocusListener: p = !1,
    disableHoverListener: m = !1,
    disableInteractive: g = !1,
    disableTouchListener: x = !1,
    enterDelay: b = 100,
    enterNextDelay: f = 0,
    enterTouchDelay: S = 700,
    followCursor: E = !1,
    id: P,
    leaveDelay: T = 0,
    leaveTouchDelay: y = 1500,
    onClose: h,
    onOpen: w,
    open: k,
    placement: L = "bottom",
    PopperComponent: B,
    PopperProps: d = {},
    slotProps: A = {},
    slots: D = {},
    title: j,
    TransitionComponent: W,
    TransitionProps: z,
    ...U
  } = n, V = /* @__PURE__ */ C.isValidElement(i) ? i : /* @__PURE__ */ N.jsx("span", {
    children: i
  }), te = Lr(), F = is(), [R, I] = C.useState(), [J, Q] = C.useState(null), H = C.useRef(!1), X = g || E, _ = Dt(), q = Dt(), G = Dt(), re = Dt(), [Z, ae] = Bu({
    controlled: k,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let O = Z;
  if (process.env.NODE_ENV !== "production") {
    const {
      current: ne
    } = C.useRef(k !== void 0);
    C.useEffect(() => {
      R && R.disabled && !ne && j !== "" && R.tagName.toLowerCase() === "button" && console.warn(["MUI: You are providing a disabled `button` child to the Tooltip component.", "A disabled element does not fire events.", "Tooltip needs to listen to the child element's events to display the title.", "", "Add a simple wrapper element, such as a `span`."].join(`
`));
    }, [j, R, ne]);
  }
  const ye = Qa(P), Ee = C.useRef(), Me = Qt(() => {
    Ee.current !== void 0 && (document.body.style.WebkitUserSelect = Ee.current, Ee.current = void 0), re.clear();
  });
  C.useEffect(() => Me, [Me]);
  const Qe = (ne) => {
    va.clear(), tn = !0, ae(!0), w && !O && w(ne);
  }, ve = Qt(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (ne) => {
      va.start(800 + T, () => {
        tn = !1;
      }), ae(!1), h && O && h(ne), _.start(te.transitions.duration.shortest, () => {
        H.current = !1;
      });
    }
  ), Pe = (ne) => {
    H.current && ne.type !== "touchstart" || (R && R.removeAttribute("title"), q.clear(), G.clear(), b || tn && f ? q.start(tn ? f : b, () => {
      Qe(ne);
    }) : Qe(ne));
  }, ze = (ne) => {
    q.clear(), G.start(T, () => {
      ve(ne);
    });
  }, [, Le] = C.useState(!1), v = (ne) => {
    hn(ne.target) || (Le(!1), ze(ne));
  }, M = (ne) => {
    R || I(ne.currentTarget), hn(ne.target) && (Le(!0), Pe(ne));
  }, Y = (ne) => {
    H.current = !0;
    const ft = V.props;
    ft.onTouchStart && ft.onTouchStart(ne);
  }, oe = (ne) => {
    Y(ne), G.clear(), _.clear(), Me(), Ee.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", re.start(S, () => {
      document.body.style.WebkitUserSelect = Ee.current, Pe(ne);
    });
  }, Re = (ne) => {
    V.props.onTouchEnd && V.props.onTouchEnd(ne), Me(), G.start(y, () => {
      ve(ne);
    });
  };
  C.useEffect(() => {
    if (!O)
      return;
    function ne(ft) {
      ft.key === "Escape" && ve(ft);
    }
    return document.addEventListener("keydown", ne), () => {
      document.removeEventListener("keydown", ne);
    };
  }, [ve, O]);
  const ue = at(Vo(V), I, r);
  !j && j !== 0 && (O = !1);
  const K = C.useRef(), be = (ne) => {
    const ft = V.props;
    ft.onMouseMove && ft.onMouseMove(ne), hr = {
      x: ne.clientX,
      y: ne.clientY
    }, K.current && K.current.update();
  }, we = {}, Oe = typeof j == "string";
  u ? (we.title = !O && Oe && !m ? j : null, we["aria-describedby"] = O ? ye : null) : (we["aria-label"] = Oe ? j : null, we["aria-labelledby"] = O && !Oe ? ye : null);
  const ce = {
    ...we,
    ...U,
    ...V.props,
    className: se(U.className, V.props.className),
    onTouchStart: Y,
    ref: ue,
    ...E ? {
      onMouseMove: be
    } : {}
  };
  process.env.NODE_ENV !== "production" && (ce["data-mui-internal-clone-element"] = !0, C.useEffect(() => {
    R && !R.getAttribute("data-mui-internal-clone-element") && console.error(["MUI: The `children` component of the Tooltip is not forwarding its props correctly.", "Please make sure that props are spread on the same element that the ref is applied to."].join(`
`));
  }, [R]));
  const Ie = {};
  x || (ce.onTouchStart = oe, ce.onTouchEnd = Re), m || (ce.onMouseOver = rn(Pe, ce.onMouseOver), ce.onMouseLeave = rn(ze, ce.onMouseLeave), X || (Ie.onMouseOver = Pe, Ie.onMouseLeave = ze)), p || (ce.onFocus = rn(M, ce.onFocus), ce.onBlur = rn(v, ce.onBlur), X || (Ie.onFocus = M, Ie.onBlur = v)), process.env.NODE_ENV !== "production" && V.props.title && console.error(["MUI: You have provided a `title` prop to the child of <Tooltip />.", `Remove this title prop \`${V.props.title}\` or the Tooltip component.`].join(`
`));
  const We = {
    ...n,
    isRtl: F,
    arrow: o,
    disableInteractive: X,
    placement: L,
    PopperComponentProp: B,
    touch: H.current
  }, Ue = typeof A.popper == "function" ? A.popper(We) : A.popper, ut = C.useMemo(() => {
    var ft, ii;
    let ne = [{
      name: "arrow",
      enabled: !!J,
      options: {
        element: J,
        padding: 4
      }
    }];
    return (ft = d.popperOptions) != null && ft.modifiers && (ne = ne.concat(d.popperOptions.modifiers)), (ii = Ue == null ? void 0 : Ue.popperOptions) != null && ii.modifiers && (ne = ne.concat(Ue.popperOptions.modifiers)), {
      ...d.popperOptions,
      ...Ue == null ? void 0 : Ue.popperOptions,
      modifiers: ne
    };
  }, [J, d.popperOptions, Ue == null ? void 0 : Ue.popperOptions]), Yn = Pm(We), Ls = typeof A.transition == "function" ? A.transition(We) : A.transition, zr = {
    slots: {
      popper: c.Popper,
      transition: c.Transition ?? W,
      tooltip: c.Tooltip,
      arrow: c.Arrow,
      ...D
    },
    slotProps: {
      arrow: A.arrow ?? l.arrow,
      popper: {
        ...d,
        ...Ue ?? l.popper
      },
      // resolvedPopperProps can be spread because it's already an object
      tooltip: A.tooltip ?? l.tooltip,
      transition: {
        ...z,
        ...Ls ?? l.transition
      }
    }
  }, [Bs, Vs] = Bt("popper", {
    elementType: km,
    externalForwardedProps: zr,
    ownerState: We,
    className: se(Yn.popper, d == null ? void 0 : d.className)
  }), [Fs, zs] = Bt("transition", {
    elementType: On,
    externalForwardedProps: zr,
    ownerState: We
  }), [Ws, Us] = Bt("tooltip", {
    elementType: Am,
    className: Yn.tooltip,
    externalForwardedProps: zr,
    ownerState: We
  }), [Ys, Hs] = Bt("arrow", {
    elementType: Nm,
    className: Yn.arrow,
    externalForwardedProps: zr,
    ownerState: We,
    ref: Q
  });
  return /* @__PURE__ */ N.jsxs(C.Fragment, {
    children: [/* @__PURE__ */ C.cloneElement(V, ce), /* @__PURE__ */ N.jsx(Bs, {
      as: B ?? ti,
      placement: L,
      anchorEl: E ? {
        getBoundingClientRect: () => ({
          top: hr.y,
          left: hr.x,
          right: hr.x,
          bottom: hr.y,
          width: 0,
          height: 0
        })
      } : R,
      popperRef: K,
      open: R ? O : !1,
      id: ye,
      transition: !0,
      ...Ie,
      ...Vs,
      popperOptions: ut,
      children: ({
        TransitionProps: ne
      }) => /* @__PURE__ */ N.jsx(Fs, {
        timeout: te.transitions.duration.shorter,
        ...ne,
        ...zs,
        children: /* @__PURE__ */ N.jsxs(Ws, {
          ...Us,
          children: [j, o ? /* @__PURE__ */ N.jsx(Ys, {
            ...Hs
          }) : null]
        })
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (js.propTypes = {
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
  children: Do.isRequired,
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
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
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
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
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
   * @deprecated use the `slots.popper` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  PopperComponent: a.elementType,
  /**
   * Props applied to the [`Popper`](https://mui.com/material-ui/api/popper/) element.
   * @deprecated use the `slotProps.popper` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  PopperProps: a.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: a.shape({
    arrow: a.oneOfType([a.func, a.object]),
    popper: a.oneOfType([a.func, a.object]),
    tooltip: a.oneOfType([a.func, a.object]),
    transition: a.oneOfType([a.func, a.object])
  }),
  /**
   * The components used for each slot inside.
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
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @deprecated use the `slots.transition` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: a.elementType,
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: a.object
});
const Mm = sr(/* @__PURE__ */ N.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-12.5c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5m0 5.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"
}), "AlbumOutlined"), Im = ({
  userName: e = "",
  designation: t = "",
  userimg: r = "",
  isCollapse: n = !1,
  onLogout: o
}) => {
  const i = Lr();
  return /* @__PURE__ */ N.jsx(dt, { children: n ? "" : /* @__PURE__ */ N.jsxs(
    dt,
    {
      display: "flex",
      alignItems: "center",
      gap: 2,
      sx: { m: 3, p: 2, borderRadius: "8px", bgcolor: i.palette.secondary.main + 20 },
      children: [
        /* @__PURE__ */ N.jsx(_s, { alt: "Remy Sharp", src: r }),
        /* @__PURE__ */ N.jsxs(dt, { children: [
          /* @__PURE__ */ N.jsx(bt, { variant: "h6", children: e }),
          /* @__PURE__ */ N.jsx(bt, { variant: "caption", color: "textSecondary", children: t })
        ] }),
        /* @__PURE__ */ N.jsx(dt, { sx: { ml: "auto" }, onClick: o, children: /* @__PURE__ */ N.jsx(js, { title: "Logout", placement: "top", children: /* @__PURE__ */ N.jsx(
          Cs,
          {
            color: "primary",
            "aria-label": "logout",
            size: "small",
            children: /* @__PURE__ */ N.jsx(Mm, {})
          }
        ) }) })
      ]
    }
  ) });
}, Fr = C.createContext({
  width: "270px",
  collapsewidth: "80px",
  textColor: "#8D939D",
  isCollapse: !1,
  themeColor: "#5d87ff"
});
let _m = () => {
  alert("Logout Successfully");
};
const Wm = ({
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
  designation: p = "Designer",
  showProfile: m = !0,
  userimg: g = "https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-1.jpg",
  onLogout: x = _m
}) => {
  const [b, f] = C.useState(!1), S = o && !b ? r : t, E = Fn({
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
  return c === "dark" && (n = "rgba(255,255,255, 0.9)"), /* @__PURE__ */ N.jsx(Ff, { theme: E, children: /* @__PURE__ */ N.jsx(
    dt,
    {
      dir: l,
      sx: {
        width: S,
        flexShrink: 0,
        fontFamily: "inherit",
        color: n
      },
      children: /* @__PURE__ */ N.jsxs(dt, { sx: { width: S }, children: [
        /* @__PURE__ */ N.jsx(
          Fr.Provider,
          {
            value: { textColor: n, isCollapse: o, width: t, collapsewidth: r, themeColor: i },
            children: e
          }
        ),
        m ? /* @__PURE__ */ N.jsx(
          Im,
          {
            userName: u,
            designation: p,
            userimg: g,
            isCollapse: o,
            onLogout: x
          }
        ) : null
      ] })
    }
  ) });
}, Um = ({ children: e, subHeading: t = "menu" }) => {
  const r = C.useContext(Fr);
  return /* @__PURE__ */ N.jsx(dt, { sx: { px: r.isCollapse ? 2 : 3, pt: 2 }, children: /* @__PURE__ */ N.jsx(
    ri,
    {
      component: "nav",
      subheader: /* @__PURE__ */ N.jsx(
        wn,
        {
          component: "div",
          sx: {
            paddingY: "3px",
            color: r.textColor,
            paddingX: "0px",
            lineHeight: "20px",
            fontWeight: "bold",
            fontSize: "12px"
          },
          children: r.isCollapse ? "..." : t
        }
      ),
      children: e
    }
  ) });
}, jm = sr(/* @__PURE__ */ N.jsx("path", {
  d: "m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
}), "ExpandLess"), Dm = sr(/* @__PURE__ */ N.jsx("path", {
  d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
}), "ExpandMore"), Ds = sr(/* @__PURE__ */ N.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
}), "CircleOutlined"), Ym = ({
  children: e,
  title: t = "",
  icon: r,
  borderRadius: n = "8px",
  textFontSize: o = "14px",
  disabled: i = !1
}) => {
  const s = C.useContext(Fr), [c, l] = C.useState(!1), u = () => {
    l(!c);
  }, p = le(ni)(() => ({
    whiteSpace: "nowrap",
    marginBottom: "2px",
    padding: "10px 12px",
    borderRadius: n,
    color: c ? "#fff" : s.textColor,
    cursor: i ? "default" : "pointer",
    opacity: i ? "0.6" : "1",
    backgroundColor: c ? s.themeColor : "",
    ".MuiListItemIcon-root": {
      color: c ? "#fff" : s.textColor
    },
    "&:hover": {
      backgroundColor: c ? s.themeColor : s.themeColor + 20,
      color: c ? "#fff" : s.themeColor,
      ".MuiListItemIcon-root": {
        color: c ? "#fff" : s.themeColor
      }
    }
  })), m = le(oi)(() => ({
    display: "flex",
    gap: "10px",
    marginBottom: "0px",
    padding: "0px",
    minWidth: "30px",
    cursor: "pointer",
    color: "inherit"
  }));
  return /* @__PURE__ */ N.jsxs(dt, { children: [
    /* @__PURE__ */ N.jsxs(p, { onClick: u, sx: { display: "flex", gap: "15px" }, children: [
      /* @__PURE__ */ N.jsx(m, { style: { minWidth: "0px" }, children: r || /* @__PURE__ */ N.jsx(Ds, {}) }),
      !s.isCollapse && /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
        /* @__PURE__ */ N.jsx(Un, { sx: { my: 0 }, children: /* @__PURE__ */ N.jsx(bt, { fontSize: o, sx: { lineHeight: "1" }, variant: "caption", children: t }) }),
        c ? /* @__PURE__ */ N.jsx(jm, {}) : /* @__PURE__ */ N.jsx(Dm, {})
      ] })
    ] }),
    /* @__PURE__ */ N.jsx(xn, { in: c, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ N.jsx(ri, { component: "div", disablePadding: !0, children: e }) })
  ] });
}, Hm = ({
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
  target: p = ""
}) => {
  const m = C.useContext(Fr), g = Lr(), x = le(ni)(() => ({
    whiteSpace: "nowrap",
    marginBottom: "2px",
    padding: "10px 12px",
    textAlign: g.direction === "ltr" ? "left" : "right",
    borderRadius: c,
    color: m.textColor,
    cursor: l ? "default" : "pointer",
    opacity: l ? "0.6" : "1",
    ".MuiListItemIcon-root": {
      color: m.textColor
    },
    "&:hover": {
      backgroundColor: l ? "#fff" : m.themeColor + 20,
      color: m.themeColor,
      ".MuiListItemIcon-root": {
        color: m.themeColor
      }
    },
    "&.Mui-selected": {
      color: "white",
      backgroundColor: m.themeColor,
      "&:hover": {
        backgroundColor: m.themeColor,
        color: "white"
      },
      ".MuiListItemIcon-root": {
        color: "#fff"
      }
    }
  })), b = le(oi)(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    marginBottom: "0px",
    padding: "0px",
    cursor: "pointer",
    color: "inherit"
  }));
  return /* @__PURE__ */ N.jsx(dt, { children: /* @__PURE__ */ N.jsxs(
    x,
    {
      href: r,
      sx: { display: "flex", gap: "15px" },
      target: p,
      selected: r === "/",
      children: [
        /* @__PURE__ */ N.jsx(
          b,
          {
            sx: {
              minWidth: "0px"
            },
            children: t || /* @__PURE__ */ N.jsx(Ds, {})
          }
        ),
        m.isCollapse ? null : /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
          /* @__PURE__ */ N.jsx(Un, { sx: { my: 0 }, children: /* @__PURE__ */ N.jsx(
            bt,
            {
              fontSize: s,
              sx: { lineHeight: "1" },
              variant: "caption",
              children: e
            }
          ) }),
          n && /* @__PURE__ */ N.jsx(
            Is,
            {
              label: i,
              color: o,
              variant: u,
              size: "small"
            }
          )
        ] })
      ]
    }
  ) });
}, qm = ({ children: e, img: t = "https://adminmart.com/wp-content/uploads/2024/03/logo-admin-mart-news.png" }) => {
  const r = C.useContext(Fr), n = le(Un)(() => ({
    whiteSpace: "nowrap",
    overflow: r.isCollapse ? "hidden" : "visible",
    WebkitLineClamp: "1",
    fontSize: "2rem",
    padding: "15px 22px",
    textOverflow: "ellipsis"
  }));
  return /* @__PURE__ */ N.jsx(n, { href: "/", children: t === "" ? /* @__PURE__ */ N.jsx(bt, { variant: "body1", children: e }) : /* @__PURE__ */ N.jsx(
    dt,
    {
      component: "img",
      sx: {
        display: "flex",
        alignItems: "center"
      },
      src: t
    }
  ) });
};
export {
  qm as Logo,
  Um as Menu,
  Hm as MenuItem,
  Wm as Sidebar,
  Ym as Submenu
};
