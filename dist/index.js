var Vs = Object.defineProperty;
var Fs = (e, t, r) => t in e ? Vs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var sr = (e, t, r) => Fs(e, typeof t != "symbol" ? t + "" : t, r);
import * as E from "react";
import pt, { forwardRef as zs, useContext as Ws, Children as Us, isValidElement as tn, cloneElement as rn } from "react";
import * as Ys from "react-dom";
import Fr from "react-dom";
function Hs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var zr = { exports: {} }, cr = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ti;
function qs() {
  if (ti) return cr;
  ti = 1;
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
  return cr.Fragment = t, cr.jsx = r, cr.jsxs = r, cr;
}
var lr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ri;
function Gs() {
  return ri || (ri = 1, process.env.NODE_ENV !== "production" && function() {
    function e(v) {
      if (v == null) return null;
      if (typeof v == "function")
        return v.$$typeof === ee ? null : v.displayName || v.name || null;
      if (typeof v == "string") return v;
      switch (v) {
        case w:
          return "Fragment";
        case m:
          return "Portal";
        case L:
          return "Profiler";
        case P:
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
          case p:
            return (v.displayName || "Context") + ".Provider";
          case B:
            return (v._context.displayName || "Context") + ".Consumer";
          case k:
            var N = v.render;
            return v = v.displayName, v || (v = N.displayName || N.name || "", v = v !== "" ? "ForwardRef(" + v + ")" : "ForwardRef"), v;
          case W:
            return N = v.displayName || null, N !== null ? N : e(v.type) || "Memo";
          case z:
            N = v._payload, v = v._init;
            try {
              return e(v(N));
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
        var N = !1;
      } catch {
        N = !0;
      }
      if (N) {
        N = console;
        var Y = N.error, oe = typeof Symbol == "function" && Symbol.toStringTag && v[Symbol.toStringTag] || v.constructor.name || "Object";
        return Y.call(
          N,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          oe
        ), t(v);
      }
    }
    function n() {
    }
    function o() {
      if (H === 0) {
        X = console.log, I = console.info, q = console.warn, G = console.error, te = console.group, Z = console.groupCollapsed, ae = console.groupEnd;
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
          log: _({}, v, { value: X }),
          info: _({}, v, { value: I }),
          warn: _({}, v, { value: q }),
          error: _({}, v, { value: G }),
          group: _({}, v, { value: te }),
          groupCollapsed: _({}, v, { value: Z }),
          groupEnd: _({}, v, { value: ae })
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
          var N = Y.stack.trim().match(/\n( *(at )?)/);
          O = N && N[1] || "", ge = -1 < Y.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < Y.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + O + v + ge;
    }
    function c(v, N) {
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
              if (N) {
                var Fe = function() {
                  throw Error();
                };
                if (Object.defineProperty(Fe.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Fe, []);
                  } catch (ut) {
                    var ze = ut;
                  }
                  Reflect.construct(v, [], Fe);
                } else {
                  try {
                    Fe.call();
                  } catch (ut) {
                    ze = ut;
                  }
                  v.call(Fe.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (ut) {
                  ze = ut;
                }
                (Fe = v()) && typeof Fe.catch == "function" && Fe.catch(function() {
                });
              }
            } catch (ut) {
              if (ut && ze && typeof ut.stack == "string")
                return [ut.stack, ze.stack];
            }
            return [null, null];
          }
        };
        Re.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var le = Object.getOwnPropertyDescriptor(
          Re.DetermineComponentFrameRoot,
          "name"
        );
        le && le.configurable && Object.defineProperty(
          Re.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var K = Re.DetermineComponentFrameRoot(), ye = K[0], we = K[1];
        if (ye && we) {
          var Oe = ye.split(`
`), se = we.split(`
`);
          for (K = le = 0; le < Oe.length && !Oe[le].includes(
            "DetermineComponentFrameRoot"
          ); )
            le++;
          for (; K < se.length && !se[K].includes(
            "DetermineComponentFrameRoot"
          ); )
            K++;
          if (le === Oe.length || K === se.length)
            for (le = Oe.length - 1, K = se.length - 1; 1 <= le && 0 <= K && Oe[le] !== se[K]; )
              K--;
          for (; 1 <= le && 0 <= K; le--, K--)
            if (Oe[le] !== se[K]) {
              if (le !== 1 || K !== 1)
                do
                  if (le--, K--, 0 > K || Oe[le] !== se[K]) {
                    var _e = `
` + Oe[le].replace(
                      " at new ",
                      " at "
                    );
                    return v.displayName && _e.includes("<anonymous>") && (_e = _e.replace("<anonymous>", v.displayName)), typeof v == "function" && Me.set(v, _e), _e;
                  }
                while (1 <= le && 0 <= K);
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
        var N = v.prototype;
        return c(
          v,
          !(!N || !N.isReactComponent)
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
          case k:
            return v = c(v.render, !1), v;
          case W:
            return l(v.type);
          case z:
            N = v._payload, v = v._init;
            try {
              return l(v(N));
            } catch {
            }
        }
      return "";
    }
    function u() {
      var v = F.A;
      return v === null ? null : v.getOwner();
    }
    function d(v) {
      if (R.call(v, "key")) {
        var N = Object.getOwnPropertyDescriptor(v, "key").get;
        if (N && N.isReactWarning) return !1;
      }
      return v.key !== void 0;
    }
    function h(v, N) {
      function Y() {
        be || (be = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          N
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
    function x(v, N, Y, oe, Re, le) {
      return Y = le.ref, v = {
        $$typeof: y,
        type: v,
        key: N,
        props: le,
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
    function b(v, N, Y, oe, Re, le) {
      if (typeof v == "string" || typeof v == "function" || v === w || v === L || v === P || v === D || v === j || v === U || typeof v == "object" && v !== null && (v.$$typeof === z || v.$$typeof === W || v.$$typeof === p || v.$$typeof === B || v.$$typeof === k || v.$$typeof === J || v.getModuleId !== void 0)) {
        var K = N.children;
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
      if (R.call(N, "key")) {
        K = e(v);
        var ye = Object.keys(N).filter(function(Oe) {
          return Oe !== "key";
        });
        oe = 0 < ye.length ? "{key: someKey, " + ye.join(": ..., ") + ": ...}" : "{key: someKey}", Ve[K + oe] || (ye = 0 < ye.length ? "{" + ye.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          oe,
          K,
          ye,
          K
        ), Ve[K + oe] = !0);
      }
      if (K = null, Y !== void 0 && (r(Y), K = "" + Y), d(N) && (r(N.key), K = "" + N.key), "key" in N) {
        Y = {};
        for (var we in N)
          we !== "key" && (Y[we] = N[we]);
      } else Y = N;
      return K && h(
        Y,
        typeof v == "function" ? v.displayName || v.name || "Unknown" : v
      ), x(v, K, le, Re, u(), Y);
    }
    function f(v, N) {
      if (typeof v == "object" && v && v.$$typeof !== Je) {
        if (Q(v))
          for (var Y = 0; Y < v.length; Y++) {
            var oe = v[Y];
            S(oe) && T(oe, N);
          }
        else if (S(v))
          v._store && (v._store.validated = 1);
        else if (v === null || typeof v != "object" ? Y = null : (Y = V && v[V] || v["@@iterator"], Y = typeof Y == "function" ? Y : null), typeof Y == "function" && Y !== v.entries && (Y = Y.call(v), Y !== v))
          for (; !(v = Y.next()).done; )
            S(v.value) && T(v.value, N);
      }
    }
    function S(v) {
      return typeof v == "object" && v !== null && v.$$typeof === y;
    }
    function T(v, N) {
      if (v._store && !v._store.validated && v.key == null && (v._store.validated = 1, N = A(N), !Le[N])) {
        Le[N] = !0;
        var Y = "";
        v && v._owner != null && v._owner !== u() && (Y = null, typeof v._owner.tag == "number" ? Y = e(v._owner.type) : typeof v._owner.name == "string" && (Y = v._owner.name), Y = " It was passed a child from " + Y + ".");
        var oe = F.getCurrentStack;
        F.getCurrentStack = function() {
          var Re = l(v.type);
          return oe && (Re += oe() || ""), Re;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          N,
          Y
        ), F.getCurrentStack = oe;
      }
    }
    function A(v) {
      var N = "", Y = u();
      return Y && (Y = e(Y.type)) && (N = `

Check the render method of \`` + Y + "`."), N || (v = e(v)) && (N = `

Check the top-level render call using <` + v + ">."), N;
    }
    var C = pt, y = Symbol.for("react.transitional.element"), m = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), P = Symbol.for("react.strict_mode"), L = Symbol.for("react.profiler"), B = Symbol.for("react.consumer"), p = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), W = Symbol.for("react.memo"), z = Symbol.for("react.lazy"), U = Symbol.for("react.offscreen"), V = Symbol.iterator, ee = Symbol.for("react.client.reference"), F = C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, R = Object.prototype.hasOwnProperty, _ = Object.assign, J = Symbol.for("react.client.reference"), Q = Array.isArray, H = 0, X, I, q, G, te, Z, ae;
    n.__reactDisabledLog = !0;
    var O, ge, Ee = !1, Me = new (typeof WeakMap == "function" ? WeakMap : Map)(), Je = Symbol.for("react.client.reference"), be, Pe = {}, Ve = {}, Le = {};
    lr.Fragment = w, lr.jsx = function(v, N, Y, oe, Re) {
      return b(v, N, Y, !1, oe, Re);
    }, lr.jsxs = function(v, N, Y, oe, Re) {
      return b(v, N, Y, !0, oe, Re);
    };
  }()), lr;
}
var ni;
function Ks() {
  return ni || (ni = 1, process.env.NODE_ENV === "production" ? zr.exports = qs() : zr.exports = Gs()), zr.exports;
}
var M = Ks();
const Sr = {
  black: "#000",
  white: "#fff"
}, Ft = {
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
}, zt = {
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
}, Wt = {
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
}, Ut = {
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
}, Yt = {
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
}, ur = {
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
}, Xs = {
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
function $t(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
const wt = "$$material";
function ln() {
  return ln = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ln.apply(null, arguments);
}
function Js(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Qs(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Zs = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Qs(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Js(o);
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
}(), We = "-ms-", un = "-moz-", ue = "-webkit-", ha = "comm", yo = "rule", bo = "decl", ec = "@import", ga = "@keyframes", tc = "@layer", rc = Math.abs, Cn = String.fromCharCode, nc = Object.assign;
function oc(e, t) {
  return Be(e, 0) ^ 45 ? (((t << 2 ^ Be(e, 0)) << 2 ^ Be(e, 1)) << 2 ^ Be(e, 2)) << 2 ^ Be(e, 3) : 0;
}
function ya(e) {
  return e.trim();
}
function ic(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function fe(e, t, r) {
  return e.replace(t, r);
}
function ro(e, t) {
  return e.indexOf(t);
}
function Be(e, t) {
  return e.charCodeAt(t) | 0;
}
function Er(e, t, r) {
  return e.slice(t, r);
}
function ht(e) {
  return e.length;
}
function vo(e) {
  return e.length;
}
function Wr(e, t) {
  return t.push(e), e;
}
function ac(e, t) {
  return e.map(t).join("");
}
var wn = 1, Jt = 1, ba = 0, Ke = 0, je = 0, or = "";
function On(e, t, r, n, o, i, s) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: wn, column: Jt, length: s, return: "" };
}
function fr(e, t) {
  return nc(On("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function sc() {
  return je;
}
function cc() {
  return je = Ke > 0 ? Be(or, --Ke) : 0, Jt--, je === 10 && (Jt = 1, wn--), je;
}
function Ze() {
  return je = Ke < ba ? Be(or, Ke++) : 0, Jt++, je === 10 && (Jt = 1, wn++), je;
}
function vt() {
  return Be(or, Ke);
}
function nn() {
  return Ke;
}
function kr(e, t) {
  return Er(or, e, t);
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
function va(e) {
  return wn = Jt = 1, ba = ht(or = e), Ke = 0, [];
}
function xa(e) {
  return or = "", e;
}
function on(e) {
  return ya(kr(Ke - 1, no(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function lc(e) {
  for (; (je = vt()) && je < 33; )
    Ze();
  return Tr(e) > 2 || Tr(je) > 3 ? "" : " ";
}
function uc(e, t) {
  for (; --t && Ze() && !(je < 48 || je > 102 || je > 57 && je < 65 || je > 70 && je < 97); )
    ;
  return kr(e, nn() + (t < 6 && vt() == 32 && Ze() == 32));
}
function no(e) {
  for (; Ze(); )
    switch (je) {
      // ] ) " '
      case e:
        return Ke;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && no(je);
        break;
      // (
      case 40:
        e === 41 && no(e);
        break;
      // \
      case 92:
        Ze();
        break;
    }
  return Ke;
}
function fc(e, t) {
  for (; Ze() && e + je !== 57; )
    if (e + je === 84 && vt() === 47)
      break;
  return "/*" + kr(t, Ke - 1) + "*" + Cn(e === 47 ? e : Ze());
}
function pc(e) {
  for (; !Tr(vt()); )
    Ze();
  return kr(e, Ke);
}
function dc(e) {
  return xa(an("", null, null, null, [""], e = va(e), 0, [0], e));
}
function an(e, t, r, n, o, i, s, c, l) {
  for (var u = 0, d = 0, h = s, g = 0, x = 0, b = 0, f = 1, S = 1, T = 1, A = 0, C = "", y = o, m = i, w = n, P = C; S; )
    switch (b = A, A = Ze()) {
      // (
      case 40:
        if (b != 108 && Be(P, h - 1) == 58) {
          ro(P += fe(on(A), "&", "&\f"), "&\f") != -1 && (T = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        P += on(A);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        P += lc(b);
        break;
      // \
      case 92:
        P += uc(nn() - 1, 7);
        continue;
      // /
      case 47:
        switch (vt()) {
          case 42:
          case 47:
            Wr(mc(fc(Ze(), nn()), t, r), l);
            break;
          default:
            P += "/";
        }
        break;
      // {
      case 123 * f:
        c[u++] = ht(P) * T;
      // } ; \0
      case 125 * f:
      case 59:
      case 0:
        switch (A) {
          // \0 }
          case 0:
          case 125:
            S = 0;
          // ;
          case 59 + d:
            T == -1 && (P = fe(P, /\f/g, "")), x > 0 && ht(P) - h && Wr(x > 32 ? ii(P + ";", n, r, h - 1) : ii(fe(P, " ", "") + ";", n, r, h - 2), l);
            break;
          // @ ;
          case 59:
            P += ";";
          // { rule/at-rule
          default:
            if (Wr(w = oi(P, t, r, u, d, o, c, C, y = [], m = [], h), i), A === 123)
              if (d === 0)
                an(P, t, w, w, y, i, h, c, m);
              else
                switch (g === 99 && Be(P, 3) === 110 ? 100 : g) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    an(e, w, w, n && Wr(oi(e, w, w, 0, 0, o, c, C, o, y = [], h), m), o, m, h, c, n ? y : m);
                    break;
                  default:
                    an(P, w, w, w, [""], m, 0, c, m);
                }
        }
        u = d = x = 0, f = T = 1, C = P = "", h = s;
        break;
      // :
      case 58:
        h = 1 + ht(P), x = b;
      default:
        if (f < 1) {
          if (A == 123)
            --f;
          else if (A == 125 && f++ == 0 && cc() == 125)
            continue;
        }
        switch (P += Cn(A), A * f) {
          // &
          case 38:
            T = d > 0 ? 1 : (P += "\f", -1);
            break;
          // ,
          case 44:
            c[u++] = (ht(P) - 1) * T, T = 1;
            break;
          // @
          case 64:
            vt() === 45 && (P += on(Ze())), g = vt(), d = h = ht(C = P += pc(nn())), A++;
            break;
          // -
          case 45:
            b === 45 && ht(P) == 2 && (f = 0);
        }
    }
  return i;
}
function oi(e, t, r, n, o, i, s, c, l, u, d) {
  for (var h = o - 1, g = o === 0 ? i : [""], x = vo(g), b = 0, f = 0, S = 0; b < n; ++b)
    for (var T = 0, A = Er(e, h + 1, h = rc(f = s[b])), C = e; T < x; ++T)
      (C = ya(f > 0 ? g[T] + " " + A : fe(A, /&\f/g, g[T]))) && (l[S++] = C);
  return On(e, t, r, o === 0 ? yo : c, l, u, d);
}
function mc(e, t, r) {
  return On(e, t, r, ha, Cn(sc()), Er(e, 2, -2), 0);
}
function ii(e, t, r, n) {
  return On(e, t, r, bo, Er(e, 0, n), Er(e, n + 1, -1), n);
}
function Gt(e, t) {
  for (var r = "", n = vo(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function hc(e, t, r, n) {
  switch (e.type) {
    case tc:
      if (e.children.length) break;
    case ec:
    case bo:
      return e.return = e.return || e.value;
    case ha:
      return "";
    case ga:
      return e.return = e.value + "{" + Gt(e.children, n) + "}";
    case yo:
      e.value = e.props.join(",");
  }
  return ht(r = Gt(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function gc(e) {
  var t = vo(e);
  return function(r, n, o, i) {
    for (var s = "", c = 0; c < t; c++)
      s += e[c](r, n, o, i) || "";
    return s;
  };
}
function yc(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Sa(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var bc = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = vt(), o === 38 && i === 12 && (r[n] = 1), !Tr(i); )
    Ze();
  return kr(t, Ke);
}, vc = function(t, r) {
  var n = -1, o = 44;
  do
    switch (Tr(o)) {
      case 0:
        o === 38 && vt() === 12 && (r[n] = 1), t[n] += bc(Ke - 1, r, n);
        break;
      case 2:
        t[n] += on(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = vt() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      // fallthrough
      default:
        t[n] += Cn(o);
    }
  while (o = Ze());
  return t;
}, xc = function(t, r) {
  return xa(vc(va(t), r));
}, ai = /* @__PURE__ */ new WeakMap(), Sc = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !ai.get(n)) && !o) {
      ai.set(t, !0);
      for (var i = [], s = xc(r, i), c = n.props, l = 0, u = 0; l < s.length; l++)
        for (var d = 0; d < c.length; d++, u++)
          t.props[u] = i[l] ? s[l].replace(/&\f/g, c[d]) : c[d] + " " + s[l];
    }
  }
}, Ec = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Ea(e, t) {
  switch (oc(e, t)) {
    // color-adjust
    case 5103:
      return ue + "print-" + e + e;
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
      return ue + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ue + e + un + e + We + e + e;
    // flex, flex-direction
    case 6828:
    case 4268:
      return ue + e + We + e + e;
    // order
    case 6165:
      return ue + e + We + "flex-" + e + e;
    // align-items
    case 5187:
      return ue + e + fe(e, /(\w+).+(:[^]+)/, ue + "box-$1$2" + We + "flex-$1$2") + e;
    // align-self
    case 5443:
      return ue + e + We + "flex-item-" + fe(e, /flex-|-self/, "") + e;
    // align-content
    case 4675:
      return ue + e + We + "flex-line-pack" + fe(e, /align-content|flex-|-self/, "") + e;
    // flex-shrink
    case 5548:
      return ue + e + We + fe(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return ue + e + We + fe(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return ue + "box-" + fe(e, "-grow", "") + ue + e + We + fe(e, "grow", "positive") + e;
    // transition
    case 4554:
      return ue + fe(e, /([^-])(transform)/g, "$1" + ue + "$2") + e;
    // cursor
    case 6187:
      return fe(fe(fe(e, /(zoom-|grab)/, ue + "$1"), /(image-set)/, ue + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return fe(e, /(image-set\([^]*)/, ue + "$1$`$1");
    // justify-content
    case 4968:
      return fe(fe(e, /(.+:)(flex-)?(.*)/, ue + "box-pack:$3" + We + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ue + e + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return fe(e, /(.+)-inline(.+)/, ue + "$1$2") + e;
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
      if (ht(e) - 1 - t > 6) switch (Be(e, t + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (Be(e, t + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return fe(e, /(.+:)(.+)-([^]+)/, "$1" + ue + "$2-$3$1" + un + (Be(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        // (s)tretch
        case 115:
          return ~ro(e, "stretch") ? Ea(fe(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    // position: sticky
    case 4949:
      if (Be(e, t + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (Be(e, ht(e) - 3 - (~ro(e, "!important") && 10))) {
        // stic(k)y
        case 107:
          return fe(e, ":", ":" + ue) + e;
        // (inline-)?fl(e)x
        case 101:
          return fe(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ue + (Be(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ue + "$2$3$1" + We + "$2box$3") + e;
      }
      break;
    // writing-mode
    case 5936:
      switch (Be(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return ue + e + We + fe(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return ue + e + We + fe(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return ue + e + We + fe(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ue + e + We + e + e;
  }
  return e;
}
var Tc = function(t, r, n, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case bo:
      t.return = Ea(t.value, t.length);
      break;
    case ga:
      return Gt([fr(t, {
        value: fe(t.value, "@", "@" + ue)
      })], o);
    case yo:
      if (t.length) return ac(t.props, function(i) {
        switch (ic(i, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return Gt([fr(t, {
              props: [fe(i, /:(read-\w+)/, ":" + un + "$1")]
            })], o);
          // :placeholder
          case "::placeholder":
            return Gt([fr(t, {
              props: [fe(i, /:(plac\w+)/, ":" + ue + "input-$1")]
            }), fr(t, {
              props: [fe(i, /:(plac\w+)/, ":" + un + "$1")]
            }), fr(t, {
              props: [fe(i, /:(plac\w+)/, We + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, Cc = [Tc], wc = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(f) {
      var S = f.getAttribute("data-emotion");
      S.indexOf(" ") !== -1 && (document.head.appendChild(f), f.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || Cc, i = {}, s, c = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(f) {
      for (var S = f.getAttribute("data-emotion").split(" "), T = 1; T < S.length; T++)
        i[S[T]] = !0;
      c.push(f);
    }
  );
  var l, u = [Sc, Ec];
  {
    var d, h = [hc, yc(function(f) {
      d.insert(f);
    })], g = gc(u.concat(o, h)), x = function(S) {
      return Gt(dc(S), g);
    };
    l = function(S, T, A, C) {
      d = A, x(S ? S + "{" + T.styles + "}" : T.styles), C && (b.inserted[T.name] = !0);
    };
  }
  var b = {
    key: r,
    sheet: new Zs({
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
}, Ur = { exports: {} }, pe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var si;
function Oc() {
  if (si) return pe;
  si = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
  function C(m) {
    if (typeof m == "object" && m !== null) {
      var w = m.$$typeof;
      switch (w) {
        case t:
          switch (m = m.type, m) {
            case l:
            case u:
            case n:
            case i:
            case o:
            case h:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case c:
                case d:
                case b:
                case x:
                case s:
                  return m;
                default:
                  return w;
              }
          }
        case r:
          return w;
      }
    }
  }
  function y(m) {
    return C(m) === u;
  }
  return pe.AsyncMode = l, pe.ConcurrentMode = u, pe.ContextConsumer = c, pe.ContextProvider = s, pe.Element = t, pe.ForwardRef = d, pe.Fragment = n, pe.Lazy = b, pe.Memo = x, pe.Portal = r, pe.Profiler = i, pe.StrictMode = o, pe.Suspense = h, pe.isAsyncMode = function(m) {
    return y(m) || C(m) === l;
  }, pe.isConcurrentMode = y, pe.isContextConsumer = function(m) {
    return C(m) === c;
  }, pe.isContextProvider = function(m) {
    return C(m) === s;
  }, pe.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === t;
  }, pe.isForwardRef = function(m) {
    return C(m) === d;
  }, pe.isFragment = function(m) {
    return C(m) === n;
  }, pe.isLazy = function(m) {
    return C(m) === b;
  }, pe.isMemo = function(m) {
    return C(m) === x;
  }, pe.isPortal = function(m) {
    return C(m) === r;
  }, pe.isProfiler = function(m) {
    return C(m) === i;
  }, pe.isStrictMode = function(m) {
    return C(m) === o;
  }, pe.isSuspense = function(m) {
    return C(m) === h;
  }, pe.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === u || m === i || m === o || m === h || m === g || typeof m == "object" && m !== null && (m.$$typeof === b || m.$$typeof === x || m.$$typeof === s || m.$$typeof === c || m.$$typeof === d || m.$$typeof === S || m.$$typeof === T || m.$$typeof === A || m.$$typeof === f);
  }, pe.typeOf = C, pe;
}
var de = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ci;
function Rc() {
  return ci || (ci = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
    function C(O) {
      return typeof O == "string" || typeof O == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      O === n || O === u || O === i || O === o || O === h || O === g || typeof O == "object" && O !== null && (O.$$typeof === b || O.$$typeof === x || O.$$typeof === s || O.$$typeof === c || O.$$typeof === d || O.$$typeof === S || O.$$typeof === T || O.$$typeof === A || O.$$typeof === f);
    }
    function y(O) {
      if (typeof O == "object" && O !== null) {
        var ge = O.$$typeof;
        switch (ge) {
          case t:
            var Ee = O.type;
            switch (Ee) {
              case l:
              case u:
              case n:
              case i:
              case o:
              case h:
                return Ee;
              default:
                var Me = Ee && Ee.$$typeof;
                switch (Me) {
                  case c:
                  case d:
                  case b:
                  case x:
                  case s:
                    return Me;
                  default:
                    return ge;
                }
            }
          case r:
            return ge;
        }
      }
    }
    var m = l, w = u, P = c, L = s, B = t, p = d, k = n, D = b, j = x, W = r, z = i, U = o, V = h, ee = !1;
    function F(O) {
      return ee || (ee = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), R(O) || y(O) === l;
    }
    function R(O) {
      return y(O) === u;
    }
    function _(O) {
      return y(O) === c;
    }
    function J(O) {
      return y(O) === s;
    }
    function Q(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function H(O) {
      return y(O) === d;
    }
    function X(O) {
      return y(O) === n;
    }
    function I(O) {
      return y(O) === b;
    }
    function q(O) {
      return y(O) === x;
    }
    function G(O) {
      return y(O) === r;
    }
    function te(O) {
      return y(O) === i;
    }
    function Z(O) {
      return y(O) === o;
    }
    function ae(O) {
      return y(O) === h;
    }
    de.AsyncMode = m, de.ConcurrentMode = w, de.ContextConsumer = P, de.ContextProvider = L, de.Element = B, de.ForwardRef = p, de.Fragment = k, de.Lazy = D, de.Memo = j, de.Portal = W, de.Profiler = z, de.StrictMode = U, de.Suspense = V, de.isAsyncMode = F, de.isConcurrentMode = R, de.isContextConsumer = _, de.isContextProvider = J, de.isElement = Q, de.isForwardRef = H, de.isFragment = X, de.isLazy = I, de.isMemo = q, de.isPortal = G, de.isProfiler = te, de.isStrictMode = Z, de.isSuspense = ae, de.isValidElementType = C, de.typeOf = y;
  }()), de;
}
var li;
function $c() {
  return li || (li = 1, process.env.NODE_ENV === "production" ? Ur.exports = Oc() : Ur.exports = Rc()), Ur.exports;
}
var Wn, ui;
function Pc() {
  if (ui) return Wn;
  ui = 1;
  var e = $c(), t = {
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
  var c = Object.defineProperty, l = Object.getOwnPropertyNames, u = Object.getOwnPropertySymbols, d = Object.getOwnPropertyDescriptor, h = Object.getPrototypeOf, g = Object.prototype;
  function x(b, f, S) {
    if (typeof f != "string") {
      if (g) {
        var T = h(f);
        T && T !== g && x(b, T, S);
      }
      var A = l(f);
      u && (A = A.concat(u(f)));
      for (var C = s(b), y = s(f), m = 0; m < A.length; ++m) {
        var w = A[m];
        if (!r[w] && !(S && S[w]) && !(y && y[w]) && !(C && C[w])) {
          var P = d(f, w);
          try {
            c(b, w, P);
          } catch {
          }
        }
      }
    }
    return b;
  }
  return Wn = x, Wn;
}
Pc();
var kc = !0;
function Ta(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (n += o + " ");
  }), n;
}
var xo = function(t, r, n) {
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
  kc === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, So = function(t, r, n) {
  xo(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function Ac(e) {
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
var Nc = {
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
}, Mc = /[A-Z]|^ms/g, _c = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Ca = function(t) {
  return t.charCodeAt(1) === 45;
}, fi = function(t) {
  return t != null && typeof t != "boolean";
}, Un = /* @__PURE__ */ Sa(function(e) {
  return Ca(e) ? e : e.replace(Mc, "-$&").toLowerCase();
}), pi = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(_c, function(n, o, i) {
          return gt = {
            name: o,
            styles: i,
            next: gt
          }, o;
        });
  }
  return Nc[t] !== 1 && !Ca(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function Cr(e, t, r) {
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
        return gt = {
          name: o.name,
          styles: o.styles,
          next: gt
        }, o.name;
      var i = r;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            gt = {
              name: s.name,
              styles: s.styles,
              next: gt
            }, s = s.next;
        var c = i.styles + ";";
        return c;
      }
      return Ic(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var l = gt, u = r(e);
        return gt = l, Cr(e, t, u);
      }
      break;
    }
  }
  var d = r;
  if (t == null)
    return d;
  var h = t[d];
  return h !== void 0 ? h : d;
}
function Ic(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += Cr(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var s = r[i];
      if (typeof s != "object") {
        var c = s;
        t != null && t[c] !== void 0 ? n += i + "{" + t[c] + "}" : fi(c) && (n += Un(i) + ":" + pi(i, c) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
        for (var l = 0; l < s.length; l++)
          fi(s[l]) && (n += Un(i) + ":" + pi(i, s[l]) + ";");
      else {
        var u = Cr(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            n += Un(i) + ":" + u + ";";
            break;
          }
          default:
            n += i + "{" + u + "}";
        }
      }
    }
  return n;
}
var di = /label:\s*([^\s;{]+)\s*(;|$)/g, gt;
function Ar(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  gt = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += Cr(r, t, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var c = 1; c < e.length; c++)
    if (o += Cr(r, t, e[c]), n) {
      var l = i;
      o += l[c];
    }
  di.lastIndex = 0;
  for (var u = "", d; (d = di.exec(o)) !== null; )
    u += "-" + d[1];
  var h = Ac(o) + u;
  return {
    name: h,
    styles: o,
    next: gt
  };
}
var jc = function(t) {
  return t();
}, wa = E.useInsertionEffect ? E.useInsertionEffect : !1, Oa = wa || jc, mi = wa || E.useLayoutEffect, Ra = /* @__PURE__ */ E.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ wc({
    key: "css"
  }) : null
);
Ra.Provider;
var Eo = function(t) {
  return /* @__PURE__ */ zs(function(r, n) {
    var o = Ws(Ra);
    return t(r, o, n);
  });
}, Nr = /* @__PURE__ */ E.createContext({}), To = {}.hasOwnProperty, oo = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Dc = function(t, r) {
  var n = {};
  for (var o in r)
    To.call(r, o) && (n[o] = r[o]);
  return n[oo] = t, n;
}, Lc = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return xo(r, n, o), Oa(function() {
    return So(r, n, o);
  }), null;
}, Bc = /* @__PURE__ */ Eo(function(e, t, r) {
  var n = e.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var o = e[oo], i = [n], s = "";
  typeof e.className == "string" ? s = Ta(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var c = Ar(i, void 0, E.useContext(Nr));
  s += t.key + "-" + c.name;
  var l = {};
  for (var u in e)
    To.call(e, u) && u !== "css" && u !== oo && (l[u] = e[u]);
  return l.className = s, r && (l.ref = r), /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(Lc, {
    cache: t,
    serialized: c,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ E.createElement(o, l));
}), Vc = Bc, Fc = function(t, r) {
  var n = arguments;
  if (r == null || !To.call(r, "css"))
    return E.createElement.apply(void 0, n);
  var o = n.length, i = new Array(o);
  i[0] = Vc, i[1] = Dc(t, r);
  for (var s = 2; s < o; s++)
    i[s] = n[s];
  return E.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Fc);
var zc = /* @__PURE__ */ Eo(function(e, t) {
  var r = e.styles, n = Ar([r], void 0, E.useContext(Nr)), o = E.useRef();
  return mi(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), c = !1, l = document.querySelector('style[data-emotion="' + i + " " + n.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), l !== null && (c = !0, l.setAttribute("data-emotion", i), s.hydrate([l])), o.current = [s, c], function() {
      s.flush();
    };
  }, [t]), mi(function() {
    var i = o.current, s = i[0], c = i[1];
    if (c) {
      i[1] = !1;
      return;
    }
    if (n.next !== void 0 && So(t, n.next, !0), s.tags.length) {
      var l = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = l, s.flush();
    }
    t.insert("", n, s, !1);
  }, [t, n.name]), null;
});
function Wc() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return Ar(t);
}
function Co() {
  var e = Wc.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var Uc = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Yc = /* @__PURE__ */ Sa(
  function(e) {
    return Uc.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Hc = Yc, qc = function(t) {
  return t !== "theme";
}, hi = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Hc : qc;
}, gi = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, Gc = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return xo(r, n, o), Oa(function() {
    return So(r, n, o);
  }), null;
}, Kc = function e(t, r) {
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, s;
  r !== void 0 && (i = r.label, s = r.target);
  var c = gi(t, r, n), l = c || hi(o), u = !l("as");
  return function() {
    var d = arguments, h = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && h.push("label:" + i + ";"), d[0] == null || d[0].raw === void 0)
      h.push.apply(h, d);
    else {
      var g = d[0];
      h.push(g[0]);
      for (var x = d.length, b = 1; b < x; b++)
        h.push(d[b], g[b]);
    }
    var f = Eo(function(S, T, A) {
      var C = u && S.as || o, y = "", m = [], w = S;
      if (S.theme == null) {
        w = {};
        for (var P in S)
          w[P] = S[P];
        w.theme = E.useContext(Nr);
      }
      typeof S.className == "string" ? y = Ta(T.registered, m, S.className) : S.className != null && (y = S.className + " ");
      var L = Ar(h.concat(m), T.registered, w);
      y += T.key + "-" + L.name, s !== void 0 && (y += " " + s);
      var B = u && c === void 0 ? hi(C) : l, p = {};
      for (var k in S)
        u && k === "as" || B(k) && (p[k] = S[k]);
      return p.className = y, A && (p.ref = A), /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(Gc, {
        cache: T,
        serialized: L,
        isStringTag: typeof C == "string"
      }), /* @__PURE__ */ E.createElement(C, p));
    });
    return f.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", f.defaultProps = t.defaultProps, f.__emotion_real = f, f.__emotion_base = o, f.__emotion_styles = h, f.__emotion_forwardProp = c, Object.defineProperty(f, "toString", {
      value: function() {
        return "." + s;
      }
    }), f.withComponent = function(S, T) {
      var A = e(S, ln({}, r, T, {
        shouldForwardProp: gi(f, T, !0)
      }));
      return A.apply(void 0, h);
    }, f;
  };
}, Xc = [
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
], io = Kc.bind(null);
Xc.forEach(function(e) {
  io[e] = io(e);
});
var Yr = { exports: {} }, Hr = { exports: {} }, me = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yi;
function Jc() {
  if (yi) return me;
  yi = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
  function C(m) {
    if (typeof m == "object" && m !== null) {
      var w = m.$$typeof;
      switch (w) {
        case t:
          switch (m = m.type, m) {
            case l:
            case u:
            case n:
            case i:
            case o:
            case h:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case c:
                case d:
                case b:
                case x:
                case s:
                  return m;
                default:
                  return w;
              }
          }
        case r:
          return w;
      }
    }
  }
  function y(m) {
    return C(m) === u;
  }
  return me.AsyncMode = l, me.ConcurrentMode = u, me.ContextConsumer = c, me.ContextProvider = s, me.Element = t, me.ForwardRef = d, me.Fragment = n, me.Lazy = b, me.Memo = x, me.Portal = r, me.Profiler = i, me.StrictMode = o, me.Suspense = h, me.isAsyncMode = function(m) {
    return y(m) || C(m) === l;
  }, me.isConcurrentMode = y, me.isContextConsumer = function(m) {
    return C(m) === c;
  }, me.isContextProvider = function(m) {
    return C(m) === s;
  }, me.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === t;
  }, me.isForwardRef = function(m) {
    return C(m) === d;
  }, me.isFragment = function(m) {
    return C(m) === n;
  }, me.isLazy = function(m) {
    return C(m) === b;
  }, me.isMemo = function(m) {
    return C(m) === x;
  }, me.isPortal = function(m) {
    return C(m) === r;
  }, me.isProfiler = function(m) {
    return C(m) === i;
  }, me.isStrictMode = function(m) {
    return C(m) === o;
  }, me.isSuspense = function(m) {
    return C(m) === h;
  }, me.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === u || m === i || m === o || m === h || m === g || typeof m == "object" && m !== null && (m.$$typeof === b || m.$$typeof === x || m.$$typeof === s || m.$$typeof === c || m.$$typeof === d || m.$$typeof === S || m.$$typeof === T || m.$$typeof === A || m.$$typeof === f);
  }, me.typeOf = C, me;
}
var he = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bi;
function Qc() {
  return bi || (bi = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
    function C(O) {
      return typeof O == "string" || typeof O == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      O === n || O === u || O === i || O === o || O === h || O === g || typeof O == "object" && O !== null && (O.$$typeof === b || O.$$typeof === x || O.$$typeof === s || O.$$typeof === c || O.$$typeof === d || O.$$typeof === S || O.$$typeof === T || O.$$typeof === A || O.$$typeof === f);
    }
    function y(O) {
      if (typeof O == "object" && O !== null) {
        var ge = O.$$typeof;
        switch (ge) {
          case t:
            var Ee = O.type;
            switch (Ee) {
              case l:
              case u:
              case n:
              case i:
              case o:
              case h:
                return Ee;
              default:
                var Me = Ee && Ee.$$typeof;
                switch (Me) {
                  case c:
                  case d:
                  case b:
                  case x:
                  case s:
                    return Me;
                  default:
                    return ge;
                }
            }
          case r:
            return ge;
        }
      }
    }
    var m = l, w = u, P = c, L = s, B = t, p = d, k = n, D = b, j = x, W = r, z = i, U = o, V = h, ee = !1;
    function F(O) {
      return ee || (ee = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), R(O) || y(O) === l;
    }
    function R(O) {
      return y(O) === u;
    }
    function _(O) {
      return y(O) === c;
    }
    function J(O) {
      return y(O) === s;
    }
    function Q(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function H(O) {
      return y(O) === d;
    }
    function X(O) {
      return y(O) === n;
    }
    function I(O) {
      return y(O) === b;
    }
    function q(O) {
      return y(O) === x;
    }
    function G(O) {
      return y(O) === r;
    }
    function te(O) {
      return y(O) === i;
    }
    function Z(O) {
      return y(O) === o;
    }
    function ae(O) {
      return y(O) === h;
    }
    he.AsyncMode = m, he.ConcurrentMode = w, he.ContextConsumer = P, he.ContextProvider = L, he.Element = B, he.ForwardRef = p, he.Fragment = k, he.Lazy = D, he.Memo = j, he.Portal = W, he.Profiler = z, he.StrictMode = U, he.Suspense = V, he.isAsyncMode = F, he.isConcurrentMode = R, he.isContextConsumer = _, he.isContextProvider = J, he.isElement = Q, he.isForwardRef = H, he.isFragment = X, he.isLazy = I, he.isMemo = q, he.isPortal = G, he.isProfiler = te, he.isStrictMode = Z, he.isSuspense = ae, he.isValidElementType = C, he.typeOf = y;
  }()), he;
}
var vi;
function $a() {
  return vi || (vi = 1, process.env.NODE_ENV === "production" ? Hr.exports = Jc() : Hr.exports = Qc()), Hr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Yn, xi;
function Zc() {
  if (xi) return Yn;
  xi = 1;
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
      var l = Object.getOwnPropertyNames(s).map(function(d) {
        return s[d];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        u[d] = d;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Yn = o() ? Object.assign : function(i, s) {
    for (var c, l = n(i), u, d = 1; d < arguments.length; d++) {
      c = Object(arguments[d]);
      for (var h in c)
        t.call(c, h) && (l[h] = c[h]);
      if (e) {
        u = e(c);
        for (var g = 0; g < u.length; g++)
          r.call(c, u[g]) && (l[u[g]] = c[u[g]]);
      }
    }
    return l;
  }, Yn;
}
var Hn, Si;
function wo() {
  if (Si) return Hn;
  Si = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Hn = e, Hn;
}
var qn, Ei;
function Pa() {
  return Ei || (Ei = 1, qn = Function.call.bind(Object.prototype.hasOwnProperty)), qn;
}
var Gn, Ti;
function el() {
  if (Ti) return Gn;
  Ti = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ wo(), r = {}, n = /* @__PURE__ */ Pa();
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
      for (var d in i)
        if (n(i, d)) {
          var h;
          try {
            if (typeof i[d] != "function") {
              var g = Error(
                (l || "React class") + ": " + c + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw g.name = "Invariant Violation", g;
            }
            h = i[d](s, d, l, c, null, t);
          } catch (b) {
            h = b;
          }
          if (h && !(h instanceof Error) && e(
            (l || "React class") + ": type specification of " + c + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in r)) {
            r[h.message] = !0;
            var x = u ? u() : "";
            e(
              "Failed " + c + " type: " + h.message + (x ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Gn = o, Gn;
}
var Kn, Ci;
function tl() {
  if (Ci) return Kn;
  Ci = 1;
  var e = $a(), t = Zc(), r = /* @__PURE__ */ wo(), n = /* @__PURE__ */ Pa(), o = /* @__PURE__ */ el(), i = function() {
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
  return Kn = function(c, l) {
    var u = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function h(R) {
      var _ = R && (u && R[u] || R[d]);
      if (typeof _ == "function")
        return _;
    }
    var g = "<<anonymous>>", x = {
      array: T("array"),
      bigint: T("bigint"),
      bool: T("boolean"),
      func: T("function"),
      number: T("number"),
      object: T("object"),
      string: T("string"),
      symbol: T("symbol"),
      any: A(),
      arrayOf: C,
      element: y(),
      elementType: m(),
      instanceOf: w,
      node: p(),
      objectOf: L,
      oneOf: P,
      oneOfType: B,
      shape: D,
      exact: j
    };
    function b(R, _) {
      return R === _ ? R !== 0 || 1 / R === 1 / _ : R !== R && _ !== _;
    }
    function f(R, _) {
      this.message = R, this.data = _ && typeof _ == "object" ? _ : {}, this.stack = "";
    }
    f.prototype = Error.prototype;
    function S(R) {
      if (process.env.NODE_ENV !== "production")
        var _ = {}, J = 0;
      function Q(X, I, q, G, te, Z, ae) {
        if (G = G || g, Z = Z || q, ae !== r) {
          if (l) {
            var O = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw O.name = "Invariant Violation", O;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ge = G + ":" + q;
            !_[ge] && // Avoid spamming the console because they are often not actionable except for lib authors
            J < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + Z + "` prop on `" + G + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), _[ge] = !0, J++);
          }
        }
        return I[q] == null ? X ? I[q] === null ? new f("The " + te + " `" + Z + "` is marked as required " + ("in `" + G + "`, but its value is `null`.")) : new f("The " + te + " `" + Z + "` is marked as required in " + ("`" + G + "`, but its value is `undefined`.")) : null : R(I, q, G, te, Z);
      }
      var H = Q.bind(null, !1);
      return H.isRequired = Q.bind(null, !0), H;
    }
    function T(R) {
      function _(J, Q, H, X, I, q) {
        var G = J[Q], te = U(G);
        if (te !== R) {
          var Z = V(G);
          return new f(
            "Invalid " + X + " `" + I + "` of type " + ("`" + Z + "` supplied to `" + H + "`, expected ") + ("`" + R + "`."),
            { expectedType: R }
          );
        }
        return null;
      }
      return S(_);
    }
    function A() {
      return S(s);
    }
    function C(R) {
      function _(J, Q, H, X, I) {
        if (typeof R != "function")
          return new f("Property `" + I + "` of component `" + H + "` has invalid PropType notation inside arrayOf.");
        var q = J[Q];
        if (!Array.isArray(q)) {
          var G = U(q);
          return new f("Invalid " + X + " `" + I + "` of type " + ("`" + G + "` supplied to `" + H + "`, expected an array."));
        }
        for (var te = 0; te < q.length; te++) {
          var Z = R(q, te, H, X, I + "[" + te + "]", r);
          if (Z instanceof Error)
            return Z;
        }
        return null;
      }
      return S(_);
    }
    function y() {
      function R(_, J, Q, H, X) {
        var I = _[J];
        if (!c(I)) {
          var q = U(I);
          return new f("Invalid " + H + " `" + X + "` of type " + ("`" + q + "` supplied to `" + Q + "`, expected a single ReactElement."));
        }
        return null;
      }
      return S(R);
    }
    function m() {
      function R(_, J, Q, H, X) {
        var I = _[J];
        if (!e.isValidElementType(I)) {
          var q = U(I);
          return new f("Invalid " + H + " `" + X + "` of type " + ("`" + q + "` supplied to `" + Q + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return S(R);
    }
    function w(R) {
      function _(J, Q, H, X, I) {
        if (!(J[Q] instanceof R)) {
          var q = R.name || g, G = F(J[Q]);
          return new f("Invalid " + X + " `" + I + "` of type " + ("`" + G + "` supplied to `" + H + "`, expected ") + ("instance of `" + q + "`."));
        }
        return null;
      }
      return S(_);
    }
    function P(R) {
      if (!Array.isArray(R))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function _(J, Q, H, X, I) {
        for (var q = J[Q], G = 0; G < R.length; G++)
          if (b(q, R[G]))
            return null;
        var te = JSON.stringify(R, function(ae, O) {
          var ge = V(O);
          return ge === "symbol" ? String(O) : O;
        });
        return new f("Invalid " + X + " `" + I + "` of value `" + String(q) + "` " + ("supplied to `" + H + "`, expected one of " + te + "."));
      }
      return S(_);
    }
    function L(R) {
      function _(J, Q, H, X, I) {
        if (typeof R != "function")
          return new f("Property `" + I + "` of component `" + H + "` has invalid PropType notation inside objectOf.");
        var q = J[Q], G = U(q);
        if (G !== "object")
          return new f("Invalid " + X + " `" + I + "` of type " + ("`" + G + "` supplied to `" + H + "`, expected an object."));
        for (var te in q)
          if (n(q, te)) {
            var Z = R(q, te, H, X, I + "." + te, r);
            if (Z instanceof Error)
              return Z;
          }
        return null;
      }
      return S(_);
    }
    function B(R) {
      if (!Array.isArray(R))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var _ = 0; _ < R.length; _++) {
        var J = R[_];
        if (typeof J != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ee(J) + " at index " + _ + "."
          ), s;
      }
      function Q(H, X, I, q, G) {
        for (var te = [], Z = 0; Z < R.length; Z++) {
          var ae = R[Z], O = ae(H, X, I, q, G, r);
          if (O == null)
            return null;
          O.data && n(O.data, "expectedType") && te.push(O.data.expectedType);
        }
        var ge = te.length > 0 ? ", expected one of type [" + te.join(", ") + "]" : "";
        return new f("Invalid " + q + " `" + G + "` supplied to " + ("`" + I + "`" + ge + "."));
      }
      return S(Q);
    }
    function p() {
      function R(_, J, Q, H, X) {
        return W(_[J]) ? null : new f("Invalid " + H + " `" + X + "` supplied to " + ("`" + Q + "`, expected a ReactNode."));
      }
      return S(R);
    }
    function k(R, _, J, Q, H) {
      return new f(
        (R || "React class") + ": " + _ + " type `" + J + "." + Q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + H + "`."
      );
    }
    function D(R) {
      function _(J, Q, H, X, I) {
        var q = J[Q], G = U(q);
        if (G !== "object")
          return new f("Invalid " + X + " `" + I + "` of type `" + G + "` " + ("supplied to `" + H + "`, expected `object`."));
        for (var te in R) {
          var Z = R[te];
          if (typeof Z != "function")
            return k(H, X, I, te, V(Z));
          var ae = Z(q, te, H, X, I + "." + te, r);
          if (ae)
            return ae;
        }
        return null;
      }
      return S(_);
    }
    function j(R) {
      function _(J, Q, H, X, I) {
        var q = J[Q], G = U(q);
        if (G !== "object")
          return new f("Invalid " + X + " `" + I + "` of type `" + G + "` " + ("supplied to `" + H + "`, expected `object`."));
        var te = t({}, J[Q], R);
        for (var Z in te) {
          var ae = R[Z];
          if (n(R, Z) && typeof ae != "function")
            return k(H, X, I, Z, V(ae));
          if (!ae)
            return new f(
              "Invalid " + X + " `" + I + "` key `" + Z + "` supplied to `" + H + "`.\nBad object: " + JSON.stringify(J[Q], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(R), null, "  ")
            );
          var O = ae(q, Z, H, X, I + "." + Z, r);
          if (O)
            return O;
        }
        return null;
      }
      return S(_);
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
          var _ = h(R);
          if (_) {
            var J = _.call(R), Q;
            if (_ !== R.entries) {
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
    function z(R, _) {
      return R === "symbol" ? !0 : _ ? _["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && _ instanceof Symbol : !1;
    }
    function U(R) {
      var _ = typeof R;
      return Array.isArray(R) ? "array" : R instanceof RegExp ? "object" : z(_, R) ? "symbol" : _;
    }
    function V(R) {
      if (typeof R > "u" || R === null)
        return "" + R;
      var _ = U(R);
      if (_ === "object") {
        if (R instanceof Date)
          return "date";
        if (R instanceof RegExp)
          return "regexp";
      }
      return _;
    }
    function ee(R) {
      var _ = V(R);
      switch (_) {
        case "array":
        case "object":
          return "an " + _;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + _;
        default:
          return _;
      }
    }
    function F(R) {
      return !R.constructor || !R.constructor.name ? g : R.constructor.name;
    }
    return x.checkPropTypes = o, x.resetWarningCache = o.resetWarningCache, x.PropTypes = x, x;
  }, Kn;
}
var Xn, wi;
function rl() {
  if (wi) return Xn;
  wi = 1;
  var e = /* @__PURE__ */ wo();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Xn = function() {
    function n(s, c, l, u, d, h) {
      if (h !== e) {
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
  }, Xn;
}
var Oi;
function nl() {
  if (Oi) return Yr.exports;
  if (Oi = 1, process.env.NODE_ENV !== "production") {
    var e = $a(), t = !0;
    Yr.exports = /* @__PURE__ */ tl()(e.isElement, t);
  } else
    Yr.exports = /* @__PURE__ */ rl()();
  return Yr.exports;
}
var ol = /* @__PURE__ */ nl();
const a = /* @__PURE__ */ Hs(ol);
function il(e) {
  return e == null || Object.keys(e).length === 0;
}
function ka(e) {
  const {
    styles: t,
    defaultTheme: r = {}
  } = e, n = typeof t == "function" ? (o) => t(il(o) ? r : o) : t;
  return /* @__PURE__ */ M.jsx(zc, {
    styles: n
  });
}
process.env.NODE_ENV !== "production" && (ka.propTypes = {
  defaultTheme: a.object,
  styles: a.oneOfType([a.array, a.string, a.object, a.func])
});
/**
 * @mui/styled-engine v6.3.1
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Aa(e, t) {
  const r = io(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
function al(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Ri = [];
function $i(e) {
  return Ri[0] = e, Ar(Ri);
}
function yt(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Na(e) {
  if (/* @__PURE__ */ E.isValidElement(e) || !yt(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = Na(e[r]);
  }), t;
}
function et(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return yt(e) && yt(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ E.isValidElement(t[o]) ? n[o] = t[o] : yt(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && yt(e[o]) ? n[o] = et(e[o], t[o], r) : r.clone ? n[o] = yt(t[o]) ? Na(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
const sl = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function cl(e) {
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
  } = e, i = sl(t), s = Object.keys(i);
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
  function d(g) {
    return s.indexOf(g) + 1 < s.length ? u(g, s[s.indexOf(g) + 1]) : c(g);
  }
  function h(g) {
    const x = s.indexOf(g);
    return x === 0 ? c(s[1]) : x === s.length - 1 ? l(s[x]) : u(g, s[s.indexOf(g) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: s,
    values: i,
    up: c,
    down: l,
    between: u,
    only: d,
    not: h,
    unit: r,
    ...o
  };
}
function ll(e, t) {
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
function ul(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function fl(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : $t(18, `(${t})`));
    return null;
  }
  const [, n, o] = r, i = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(i);
}
function pl(e) {
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
const dl = {
  borderRadius: 4
}, At = process.env.NODE_ENV !== "production" ? a.oneOfType([a.number, a.string, a.object, a.array]) : {};
function br(e, t) {
  return t ? et(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Rn = {
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
}, Pi = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Rn[e]}px)`
}, ml = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : Rn[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function Ot(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || Pi;
    return t.reduce((s, c, l) => (s[i.up(i.keys[l])] = r(t[l]), s), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || Pi;
    return Object.keys(t).reduce((s, c) => {
      if (ul(i.keys, c)) {
        const l = fl(n.containerQueries ? n : ml, c);
        l && (s[l] = r(t[c], c));
      } else if (Object.keys(i.values || Rn).includes(c)) {
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
function hl(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function gl(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function re(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : $t(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function $n(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function fn(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = $n(e, r) || n, t && (o = t(o, n, e)), o;
}
function Ie(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const c = s[t], l = s.theme, u = $n(l, n) || {};
    return Ot(s, c, (h) => {
      let g = fn(u, o, h);
      return h === g && typeof h == "string" && (g = fn(u, o, `${t}${h === "default" ? "" : re(h)}`, h)), r === !1 ? g : {
        [r]: g
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: At
  } : {}, i.filterProps = [t], i;
}
function yl(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const bl = {
  m: "margin",
  p: "padding"
}, vl = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, ki = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, xl = yl((e) => {
  if (e.length > 2)
    if (ki[e])
      e = ki[e];
    else
      return [e];
  const [t, r] = e.split(""), n = bl[t], o = vl[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), Pn = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], kn = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Sl = [...Pn, ...kn];
function Mr(e, t, r, n) {
  const o = $n(e, t, !0) ?? r;
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
function Oo(e) {
  return Mr(e, "spacing", 8, "spacing");
}
function _r(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function El(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = _r(t, r), n), {});
}
function Tl(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = xl(r), i = El(o, n), s = e[r];
  return Ot(e, s, i);
}
function Ma(e, t) {
  const r = Oo(e.theme);
  return Object.keys(e).map((n) => Tl(e, t, n, r)).reduce(br, {});
}
function ke(e) {
  return Ma(e, Pn);
}
ke.propTypes = process.env.NODE_ENV !== "production" ? Pn.reduce((e, t) => (e[t] = At, e), {}) : {};
ke.filterProps = Pn;
function Ae(e) {
  return Ma(e, kn);
}
Ae.propTypes = process.env.NODE_ENV !== "production" ? kn.reduce((e, t) => (e[t] = At, e), {}) : {};
Ae.filterProps = kn;
process.env.NODE_ENV !== "production" && Sl.reduce((e, t) => (e[t] = At, e), {});
function _a(e = 8, t = Oo({
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
function An(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? br(o, t[i](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function ot(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function lt(e, t) {
  return Ie({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Cl = lt("border", ot), wl = lt("borderTop", ot), Ol = lt("borderRight", ot), Rl = lt("borderBottom", ot), $l = lt("borderLeft", ot), Pl = lt("borderColor"), kl = lt("borderTopColor"), Al = lt("borderRightColor"), Nl = lt("borderBottomColor"), Ml = lt("borderLeftColor"), _l = lt("outline", ot), Il = lt("outlineColor"), Nn = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Mr(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: _r(t, n)
    });
    return Ot(e, e.borderRadius, r);
  }
  return null;
};
Nn.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: At
} : {};
Nn.filterProps = ["borderRadius"];
An(Cl, wl, Ol, Rl, $l, Pl, kl, Al, Nl, Ml, Nn, _l, Il);
const Mn = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Mr(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: _r(t, n)
    });
    return Ot(e, e.gap, r);
  }
  return null;
};
Mn.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: At
} : {};
Mn.filterProps = ["gap"];
const _n = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Mr(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: _r(t, n)
    });
    return Ot(e, e.columnGap, r);
  }
  return null;
};
_n.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: At
} : {};
_n.filterProps = ["columnGap"];
const In = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Mr(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: _r(t, n)
    });
    return Ot(e, e.rowGap, r);
  }
  return null;
};
In.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: At
} : {};
In.filterProps = ["rowGap"];
const jl = Ie({
  prop: "gridColumn"
}), Dl = Ie({
  prop: "gridRow"
}), Ll = Ie({
  prop: "gridAutoFlow"
}), Bl = Ie({
  prop: "gridAutoColumns"
}), Vl = Ie({
  prop: "gridAutoRows"
}), Fl = Ie({
  prop: "gridTemplateColumns"
}), zl = Ie({
  prop: "gridTemplateRows"
}), Wl = Ie({
  prop: "gridTemplateAreas"
}), Ul = Ie({
  prop: "gridArea"
});
An(Mn, _n, In, jl, Dl, Ll, Bl, Vl, Fl, zl, Wl, Ul);
function Kt(e, t) {
  return t === "grey" ? t : e;
}
const Yl = Ie({
  prop: "color",
  themeKey: "palette",
  transform: Kt
}), Hl = Ie({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Kt
}), ql = Ie({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Kt
});
An(Yl, Hl, ql);
function Qe(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Gl = Ie({
  prop: "width",
  transform: Qe
}), Ro = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var o, i, s, c, l;
      const n = ((s = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : s[r]) || Rn[r];
      return n ? ((l = (c = e.theme) == null ? void 0 : c.breakpoints) == null ? void 0 : l.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: Qe(r)
      };
    };
    return Ot(e, e.maxWidth, t);
  }
  return null;
};
Ro.filterProps = ["maxWidth"];
const Kl = Ie({
  prop: "minWidth",
  transform: Qe
}), Xl = Ie({
  prop: "height",
  transform: Qe
}), Jl = Ie({
  prop: "maxHeight",
  transform: Qe
}), Ql = Ie({
  prop: "minHeight",
  transform: Qe
});
Ie({
  prop: "size",
  cssProperty: "width",
  transform: Qe
});
Ie({
  prop: "size",
  cssProperty: "height",
  transform: Qe
});
const Zl = Ie({
  prop: "boxSizing"
});
An(Gl, Ro, Kl, Xl, Jl, Ql, Zl);
const Ir = {
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
    style: Nn
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Kt
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Kt
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Kt
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
    style: Mn
  },
  rowGap: {
    style: In
  },
  columnGap: {
    style: _n
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
    style: Ro
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
function eu(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function tu(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ru() {
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
      transform: d,
      style: h
    } = c;
    if (n == null)
      return null;
    if (u === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const g = $n(o, u) || {};
    return h ? h(s) : Ot(s, n, (b) => {
      let f = fn(g, d, b);
      return b === f && typeof b == "string" && (f = fn(g, d, `${r}${b === "default" ? "" : re(b)}`, b)), l === !1 ? f : {
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
    const i = o.unstable_sxConfig ?? Ir;
    function s(c) {
      let l = c;
      if (typeof c == "function")
        l = c(o);
      else if (typeof c != "object")
        return c;
      if (!l)
        return null;
      const u = hl(o.breakpoints), d = Object.keys(u);
      let h = u;
      return Object.keys(l).forEach((g) => {
        const x = tu(l[g], o);
        if (x != null)
          if (typeof x == "object")
            if (i[g])
              h = br(h, e(g, x, o, i));
            else {
              const b = Ot({
                theme: o
              }, x, (f) => ({
                [g]: f
              }));
              eu(b, x) ? h[g] = t({
                sx: x,
                theme: o
              }) : h = br(h, b);
            }
          else
            h = br(h, e(g, x, o, i));
      }), ll(o, gl(d, h));
    }
    return Array.isArray(n) ? n.map(s) : s(n);
  }
  return t;
}
const Pt = ru();
Pt.filterProps = ["sx"];
function nu(e, t) {
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
function $o(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {},
    ...s
  } = e, c = cl(r), l = _a(o);
  let u = et({
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
      ...dl,
      ...i
    }
  }, s);
  return u = pl(u), u.applyStyles = nu, u = t.reduce((d, h) => et(d, h), u), u.unstable_sxConfig = {
    ...Ir,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, u.unstable_sx = function(h) {
    return Pt({
      sx: h,
      theme: this
    });
  }, u;
}
function ou(e) {
  return Object.keys(e).length === 0;
}
function Ia(e = null) {
  const t = E.useContext(Nr);
  return !t || ou(t) ? e : t;
}
const iu = $o();
function ja(e = iu) {
  return Ia(e);
}
const au = (e) => {
  var n;
  const t = {
    systemProps: {},
    otherProps: {}
  }, r = ((n = e == null ? void 0 : e.theme) == null ? void 0 : n.unstable_sxConfig) ?? Ir;
  return Object.keys(e).forEach((o) => {
    r[o] ? t.systemProps[o] = e[o] : t.otherProps[o] = e[o];
  }), t;
};
function Da(e) {
  const {
    sx: t,
    ...r
  } = e, {
    systemProps: n,
    otherProps: o
  } = au(r);
  let i;
  return Array.isArray(t) ? i = [n, ...t] : typeof t == "function" ? i = (...s) => {
    const c = t(...s);
    return yt(c) ? {
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
const Ai = (e) => e, su = () => {
  let e = Ai;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Ai;
    }
  };
}, La = su();
function Ba(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = Ba(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function ce() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = Ba(e)) && (n && (n += " "), n += t);
  return n;
}
function cu(e = {}) {
  const {
    themeId: t,
    defaultTheme: r,
    defaultClassName: n = "MuiBox-root",
    generateClassName: o
  } = e, i = Aa("div", {
    shouldForwardProp: (c) => c !== "theme" && c !== "sx" && c !== "as"
  })(Pt);
  return /* @__PURE__ */ E.forwardRef(function(l, u) {
    const d = ja(r), {
      className: h,
      component: g = "div",
      ...x
    } = Da(l);
    return /* @__PURE__ */ M.jsx(i, {
      as: g,
      ref: u,
      className: ce(h, o ? o(n) : n),
      theme: t && d[t] || d,
      ...x
    });
  });
}
const lu = {
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
function Ue(e, t, r = "Mui") {
  const n = lu[t];
  return n ? `${r}-${n}` : `${La.generate(e)}-${t}`;
}
function Ye(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = Ue(e, o, r);
  }), n;
}
var qr = { exports: {} }, ve = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ni;
function uu() {
  if (Ni) return ve;
  Ni = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), x = Symbol.for("react.client.reference");
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
                case h:
                case d:
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
  return ve.ContextConsumer = i, ve.ContextProvider = s, ve.Element = e, ve.ForwardRef = c, ve.Fragment = r, ve.Lazy = h, ve.Memo = d, ve.Portal = t, ve.Profiler = o, ve.StrictMode = n, ve.Suspense = l, ve.SuspenseList = u, ve.isContextConsumer = function(f) {
    return b(f) === i;
  }, ve.isContextProvider = function(f) {
    return b(f) === s;
  }, ve.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }, ve.isForwardRef = function(f) {
    return b(f) === c;
  }, ve.isFragment = function(f) {
    return b(f) === r;
  }, ve.isLazy = function(f) {
    return b(f) === h;
  }, ve.isMemo = function(f) {
    return b(f) === d;
  }, ve.isPortal = function(f) {
    return b(f) === t;
  }, ve.isProfiler = function(f) {
    return b(f) === o;
  }, ve.isStrictMode = function(f) {
    return b(f) === n;
  }, ve.isSuspense = function(f) {
    return b(f) === l;
  }, ve.isSuspenseList = function(f) {
    return b(f) === u;
  }, ve.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === r || f === o || f === n || f === l || f === u || f === g || typeof f == "object" && f !== null && (f.$$typeof === h || f.$$typeof === d || f.$$typeof === s || f.$$typeof === i || f.$$typeof === c || f.$$typeof === x || f.getModuleId !== void 0);
  }, ve.typeOf = b, ve;
}
var xe = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mi;
function fu() {
  return Mi || (Mi = 1, process.env.NODE_ENV !== "production" && function() {
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
              case d:
                return f;
              default:
                switch (f = f && f.$$typeof, f) {
                  case c:
                  case l:
                  case g:
                  case h:
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
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), b = Symbol.for("react.client.reference");
    xe.ContextConsumer = s, xe.ContextProvider = c, xe.Element = t, xe.ForwardRef = l, xe.Fragment = n, xe.Lazy = g, xe.Memo = h, xe.Portal = r, xe.Profiler = i, xe.StrictMode = o, xe.Suspense = u, xe.SuspenseList = d, xe.isContextConsumer = function(f) {
      return e(f) === s;
    }, xe.isContextProvider = function(f) {
      return e(f) === c;
    }, xe.isElement = function(f) {
      return typeof f == "object" && f !== null && f.$$typeof === t;
    }, xe.isForwardRef = function(f) {
      return e(f) === l;
    }, xe.isFragment = function(f) {
      return e(f) === n;
    }, xe.isLazy = function(f) {
      return e(f) === g;
    }, xe.isMemo = function(f) {
      return e(f) === h;
    }, xe.isPortal = function(f) {
      return e(f) === r;
    }, xe.isProfiler = function(f) {
      return e(f) === i;
    }, xe.isStrictMode = function(f) {
      return e(f) === o;
    }, xe.isSuspense = function(f) {
      return e(f) === u;
    }, xe.isSuspenseList = function(f) {
      return e(f) === d;
    }, xe.isValidElementType = function(f) {
      return typeof f == "string" || typeof f == "function" || f === n || f === i || f === o || f === u || f === d || f === x || typeof f == "object" && f !== null && (f.$$typeof === g || f.$$typeof === h || f.$$typeof === c || f.$$typeof === s || f.$$typeof === l || f.$$typeof === b || f.getModuleId !== void 0);
    }, xe.typeOf = e;
  }()), xe;
}
var _i;
function pu() {
  return _i || (_i = 1, process.env.NODE_ENV === "production" ? qr.exports = /* @__PURE__ */ uu() : qr.exports = /* @__PURE__ */ fu()), qr.exports;
}
var Ii = /* @__PURE__ */ pu();
function Va(e, t = "") {
  return e.displayName || e.name || t;
}
function ji(e, t, r) {
  const n = Va(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function du(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Va(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Ii.ForwardRef:
          return ji(e, e.render, "ForwardRef");
        case Ii.Memo:
          return ji(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Fa(e) {
  const {
    variants: t,
    ...r
  } = e, n = {
    variants: t,
    style: $i(r),
    isProcessed: !0
  };
  return n.style === r || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = $i(o.style));
  }), n;
}
const mu = $o();
function Jn(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function hu(e) {
  return e ? (t, r) => r[e] : null;
}
function gu(e, t, r) {
  e.theme = xu(e.theme) ? r : e.theme[t] || e.theme;
}
function sn(e, t) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((n) => sn(e, n));
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
    return za(e, r.variants, [n]);
  }
  return r != null && r.isProcessed ? r.style : r;
}
function za(e, t, r = []) {
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
function yu(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = mu,
    rootShouldForwardProp: n = Jn,
    slotShouldForwardProp: o = Jn
  } = e;
  function i(c) {
    gu(c, t, r);
  }
  return (c, l = {}) => {
    al(c, (m) => m.filter((w) => w !== Pt));
    const {
      name: u,
      slot: d,
      skipVariantsResolver: h,
      skipSx: g,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: x = hu(Wa(d)),
      ...b
    } = l, f = h !== void 0 ? h : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      d && d !== "Root" && d !== "root" || !1
    ), S = g || !1;
    let T = Jn;
    d === "Root" || d === "root" ? T = n : d ? T = o : Su(c) && (T = void 0);
    const A = Aa(c, {
      shouldForwardProp: T,
      label: vu(u, d),
      ...b
    }), C = (m) => {
      if (typeof m == "function" && m.__emotion_real !== m)
        return function(P) {
          return sn(P, m);
        };
      if (yt(m)) {
        const w = Fa(m);
        return w.variants ? function(L) {
          return sn(L, w);
        } : w.style;
      }
      return m;
    }, y = (...m) => {
      const w = [], P = m.map(C), L = [];
      if (w.push(i), u && x && L.push(function(D) {
        var U, V;
        const W = (V = (U = D.theme.components) == null ? void 0 : U[u]) == null ? void 0 : V.styleOverrides;
        if (!W)
          return null;
        const z = {};
        for (const ee in W)
          z[ee] = sn(D, W[ee]);
        return x(D, z);
      }), u && !f && L.push(function(D) {
        var z, U;
        const j = D.theme, W = (U = (z = j == null ? void 0 : j.components) == null ? void 0 : z[u]) == null ? void 0 : U.variants;
        return W ? za(D, W) : null;
      }), S || L.push(Pt), Array.isArray(P[0])) {
        const k = P.shift(), D = new Array(w.length).fill(""), j = new Array(L.length).fill("");
        let W;
        W = [...D, ...k, ...j], W.raw = [...D, ...k.raw, ...j], w.unshift(W);
      }
      const B = [...w, ...P, ...L], p = A(...B);
      return c.muiName && (p.muiName = c.muiName), process.env.NODE_ENV !== "production" && (p.displayName = bu(u, d, c)), p;
    };
    return A.withConfig && (y.withConfig = A.withConfig), y;
  };
}
function bu(e, t, r) {
  return e ? `${e}${re(t || "")}` : `Styled(${du(r)})`;
}
function vu(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${Wa(t || "Root")}`), r;
}
function xu(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Su(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Wa(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function ao(e, t) {
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
              r[o][l] = ao(i[l], s[l]);
            }
        }
      } else r[o] === void 0 && (r[o] = e[o]);
    }
  return r;
}
const Qt = typeof window < "u" ? E.useLayoutEffect : E.useEffect;
function Eu(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function Po(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), Eu(e, t, r);
}
function Tu(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function kt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return kt(Tu(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : $t(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : $t(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const Cu = (e) => {
  const t = kt(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, hr = (e, t) => {
  try {
    return Cu(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function jn(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function Ua(e) {
  e = kt(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), s = (u, d = (u + r / 30) % 12) => o - i * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let c = "rgb";
  const l = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (c += "a", l.push(t[3])), jn({
    type: c,
    values: l
  });
}
function so(e) {
  e = kt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? kt(Ua(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Di(e, t) {
  const r = so(e), n = so(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function De(e, t) {
  return e = kt(e), t = Po(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, jn(e);
}
function Gr(e, t, r) {
  try {
    return De(e, t);
  } catch {
    return e;
  }
}
function ko(e, t) {
  if (e = kt(e), t = Po(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return jn(e);
}
function Te(e, t, r) {
  try {
    return ko(e, t);
  } catch {
    return e;
  }
}
function Ao(e, t) {
  if (e = kt(e), t = Po(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return jn(e);
}
function Ce(e, t, r) {
  try {
    return Ao(e, t);
  } catch {
    return e;
  }
}
function wu(e, t = 0.15) {
  return so(e) > 0.5 ? ko(e, t) : Ao(e, t);
}
function Kr(e, t, r) {
  try {
    return wu(e, t);
  } catch {
    return e;
  }
}
function jr(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function Ou(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Ya(e, t, r, n, o) {
  const i = e[t], s = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  const l = i.type;
  return typeof l == "function" && !Ou(l) && (c = "Did you accidentally use a plain function component for an element instead?"), c !== void 0 ? new Error(`Invalid ${n} \`${s}\` supplied to \`${r}\`. Expected an element that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const No = jr(a.element, Ya);
No.isRequired = jr(a.element.isRequired, Ya);
function Ru(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function $u(e, t, r, n, o) {
  const i = e[t], s = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  return typeof i == "function" && !Ru(i) && (c = "Did you accidentally provide a plain function component instead?"), c !== void 0 ? new Error(`Invalid ${n} \`${s}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Ha = jr(a.elementType, $u), Pu = "exact-prop: ​";
function Mo(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [Pu]: (t) => {
      const r = Object.keys(t).filter((n) => !e.hasOwnProperty(n));
      return r.length > 0 ? new Error(`The following props are not supported: ${r.map((n) => `\`${n}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
function wr(e, t, r, n, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = e[t], s = o || t;
  return i == null ? null : i && i.nodeType !== 1 ? new Error(`Invalid ${n} \`${s}\` supplied to \`${r}\`. Expected an HTMLElement.`) : null;
}
const _o = a.oneOfType([a.func, a.object]);
function Li(e) {
  return e && e.ownerDocument || document;
}
function co(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let Bi = 0;
function ku(e) {
  const [t, r] = E.useState(e), n = e || t;
  return E.useEffect(() => {
    t == null && (Bi += 1, r(`mui-${Bi}`));
  }, [t]), n;
}
const Au = {
  ...E
}, Vi = Au.useId;
function Nu(e) {
  if (Vi !== void 0) {
    const t = Vi();
    return e ?? t;
  }
  return ku(e);
}
function Mu(e, t, r, n, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = o || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${i}\` is not supported. Please remove it.`) : null;
}
function _u({
  controlled: e,
  default: t,
  name: r,
  state: n = "value"
}) {
  const {
    current: o
  } = E.useRef(e !== void 0), [i, s] = E.useState(t), c = o ? e : i;
  if (process.env.NODE_ENV !== "production") {
    E.useEffect(() => {
      o !== (e !== void 0) && console.error([`MUI: A component is changing the ${o ? "" : "un"}controlled ${n} state of ${r} to be ${o ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${r} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [n, r, e]);
    const {
      current: u
    } = E.useRef(t);
    E.useEffect(() => {
      !o && !Object.is(u, t) && console.error([`MUI: A component is changing the default ${n} state of an uncontrolled ${r} after being initialized. To suppress this warning opt to use a controlled ${r}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const l = E.useCallback((u) => {
    o || s(u);
  }, []);
  return [c, l];
}
function Xt(e) {
  const t = E.useRef(e);
  return Qt(() => {
    t.current = e;
  }), E.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function at(...e) {
  return E.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      co(r, t);
    });
  }, e);
}
const Fi = {};
function qa(e, t) {
  const r = E.useRef(Fi);
  return r.current === Fi && (r.current = e(t)), r;
}
const Iu = [];
function ju(e) {
  E.useEffect(e, Iu);
}
class Dn {
  constructor() {
    sr(this, "currentId", null);
    sr(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    sr(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new Dn();
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
function It() {
  const e = qa(Dn.create).current;
  return ju(e.disposeEffect), e;
}
function pn(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
function Xe(e, t, r = void 0) {
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
function Du(e) {
  return typeof e == "string";
}
function Ga(e, t, r) {
  return e === void 0 || Du(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...r
    }
  };
}
function Lu(e, t = []) {
  if (e === void 0)
    return {};
  const r = {};
  return Object.keys(e).filter((n) => n.match(/^on[A-Z]/) && typeof e[n] == "function" && !t.includes(n)).forEach((n) => {
    r[n] = e[n];
  }), r;
}
function zi(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((r) => !(r.match(/^on[A-Z]/) && typeof e[r] == "function")).forEach((r) => {
    t[r] = e[r];
  }), t;
}
function Ka(e) {
  const {
    getSlotProps: t,
    additionalProps: r,
    externalSlotProps: n,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const x = ce(r == null ? void 0 : r.className, i, o == null ? void 0 : o.className, n == null ? void 0 : n.className), b = {
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
  const s = Lu({
    ...o,
    ...n
  }), c = zi(n), l = zi(o), u = t(s), d = ce(u == null ? void 0 : u.className, r == null ? void 0 : r.className, i, o == null ? void 0 : o.className, n == null ? void 0 : n.className), h = {
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
  return d.length > 0 && (g.className = d), Object.keys(h).length > 0 && (g.style = h), {
    props: g,
    internalRef: u.ref
  };
}
function Xa(e, t, r) {
  return typeof e == "function" ? e(t, r) : e;
}
function Bu(e) {
  var h;
  const {
    elementType: t,
    externalSlotProps: r,
    ownerState: n,
    skipResolvingSlotProps: o = !1,
    ...i
  } = e, s = o ? {} : Xa(r, n), {
    props: c,
    internalRef: l
  } = Ka({
    ...i,
    externalSlotProps: s
  }), u = at(l, s == null ? void 0 : s.ref, (h = e.additionalProps) == null ? void 0 : h.ref);
  return Ga(t, {
    ...c,
    ref: u
  }, n);
}
function Io(e) {
  var t;
  return parseInt(E.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
const jo = /* @__PURE__ */ E.createContext(null);
process.env.NODE_ENV !== "production" && (jo.displayName = "ThemeContext");
function Do() {
  const e = E.useContext(jo);
  return process.env.NODE_ENV !== "production" && E.useDebugValue(e), e;
}
const Vu = typeof Symbol == "function" && Symbol.for, Fu = Vu ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function zu(e, t) {
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
function dn(e) {
  const {
    children: t,
    theme: r
  } = e, n = Do();
  process.env.NODE_ENV !== "production" && n === null && typeof r == "function" && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const o = E.useMemo(() => {
    const i = n === null ? {
      ...r
    } : zu(n, r);
    return i != null && (i[Fu] = n !== null), i;
  }, [r, n]);
  return /* @__PURE__ */ M.jsx(jo.Provider, {
    value: o,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (dn.propTypes = {
  /**
   * Your component tree.
   */
  children: a.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: a.oneOfType([a.object, a.func]).isRequired
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (dn.propTypes = Mo(dn.propTypes));
const Ja = /* @__PURE__ */ E.createContext();
function Qa({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ M.jsx(Ja.Provider, {
    value: e ?? !0,
    ...t
  });
}
process.env.NODE_ENV !== "production" && (Qa.propTypes = {
  children: a.node,
  value: a.bool
});
const Za = () => E.useContext(Ja) ?? !1, es = /* @__PURE__ */ E.createContext(void 0);
function ts({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ M.jsx(es.Provider, {
    value: e,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (ts.propTypes = {
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
function Wu(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? ao(o.defaultProps, n) : !o.styleOverrides && !o.variants ? ao(o, n) : n;
}
function Uu({
  props: e,
  name: t
}) {
  const r = E.useContext(es);
  return Wu({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
const Wi = {};
function Ui(e, t, r, n = !1) {
  return E.useMemo(() => {
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
function Or(e) {
  const {
    children: t,
    theme: r,
    themeId: n
  } = e, o = Ia(Wi), i = Do() || Wi;
  process.env.NODE_ENV !== "production" && (o === null && typeof r == "function" || n && o && !o[n] && typeof r == "function") && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const s = Ui(n, o, r), c = Ui(n, i, r, !0), l = (n ? s[n] : s).direction === "rtl";
  return /* @__PURE__ */ M.jsx(dn, {
    theme: c,
    children: /* @__PURE__ */ M.jsx(Nr.Provider, {
      value: s,
      children: /* @__PURE__ */ M.jsx(Qa, {
        value: l,
        children: /* @__PURE__ */ M.jsx(ts, {
          value: n ? s[n].components : s.components,
          children: t
        })
      })
    })
  });
}
process.env.NODE_ENV !== "production" && (Or.propTypes = {
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
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (Or.propTypes = Mo(Or.propTypes));
const Yi = {
  theme: void 0
};
function Yu(e) {
  let t, r;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== r) && (Yi.theme = o.theme, i = Fa(e(Yi)), t = i, r = o.theme), i;
  };
}
const Lo = "mode", Bo = "color-scheme", Hu = "data-color-scheme";
function qu(e) {
  const {
    defaultMode: t = "system",
    defaultLightColorScheme: r = "light",
    defaultDarkColorScheme: n = "dark",
    modeStorageKey: o = Lo,
    colorSchemeStorageKey: i = Bo,
    attribute: s = Hu,
    colorSchemeNode: c = "document.documentElement",
    nonce: l
  } = e;
  let u = "", d = s;
  if (s === "class" && (d = ".%s"), s === "data" && (d = "[data-%s]"), d.startsWith(".")) {
    const g = d.substring(1);
    u += `${c}.classList.remove('${g}'.replace('%s', light), '${g}'.replace('%s', dark));
      ${c}.classList.add('${g}'.replace('%s', colorScheme));`;
  }
  const h = d.match(/\[([^\]]+)\]/);
  if (h) {
    const [g, x] = h[1].split("=");
    x || (u += `${c}.removeAttribute('${g}'.replace('%s', light));
      ${c}.removeAttribute('${g}'.replace('%s', dark));`), u += `
      ${c}.setAttribute('${g}'.replace('%s', colorScheme), ${x ? `${x}.replace('%s', colorScheme)` : '""'});`;
  } else
    u += `${c}.setAttribute('${d}', colorScheme);`;
  return /* @__PURE__ */ M.jsx("script", {
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
function Hi(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function rs(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function Gu(e) {
  return rs(e, (t) => {
    if (t === "light")
      return e.lightColorScheme;
    if (t === "dark")
      return e.darkColorScheme;
  });
}
function Qn(e, t) {
  if (typeof window > "u")
    return;
  let r;
  try {
    r = localStorage.getItem(e) || void 0, r || localStorage.setItem(e, t);
  } catch {
  }
  return r || t;
}
function Ku(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: r,
    defaultDarkColorScheme: n,
    supportedColorSchemes: o = [],
    modeStorageKey: i = Lo,
    colorSchemeStorageKey: s = Bo,
    storageWindow: c = typeof window > "u" ? void 0 : window,
    noSsr: l = !1
  } = e, u = o.join(","), d = o.length > 1, [h, g] = E.useState(() => {
    const y = Qn(i, t), m = Qn(`${s}-light`, r), w = Qn(`${s}-dark`, n);
    return {
      mode: y,
      systemMode: Hi(y),
      lightColorScheme: m,
      darkColorScheme: w
    };
  }), [x, b] = E.useState(l || !d);
  E.useEffect(() => {
    b(!0);
  }, []);
  const f = Gu(h), S = E.useCallback((y) => {
    g((m) => {
      if (y === m.mode)
        return m;
      const w = y ?? t;
      try {
        localStorage.setItem(i, w);
      } catch {
      }
      return {
        ...m,
        mode: w,
        systemMode: Hi(w)
      };
    });
  }, [i, t]), T = E.useCallback((y) => {
    y ? typeof y == "string" ? y && !u.includes(y) ? console.error(`\`${y}\` does not exist in \`theme.colorSchemes\`.`) : g((m) => {
      const w = {
        ...m
      };
      return rs(m, (P) => {
        try {
          localStorage.setItem(`${s}-${P}`, y);
        } catch {
        }
        P === "light" && (w.lightColorScheme = y), P === "dark" && (w.darkColorScheme = y);
      }), w;
    }) : g((m) => {
      const w = {
        ...m
      }, P = y.light === null ? r : y.light, L = y.dark === null ? n : y.dark;
      if (P)
        if (!u.includes(P))
          console.error(`\`${P}\` does not exist in \`theme.colorSchemes\`.`);
        else {
          w.lightColorScheme = P;
          try {
            localStorage.setItem(`${s}-light`, P);
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
    }) : g((m) => {
      try {
        localStorage.setItem(`${s}-light`, r), localStorage.setItem(`${s}-dark`, n);
      } catch {
      }
      return {
        ...m,
        lightColorScheme: r,
        darkColorScheme: n
      };
    });
  }, [u, s, r, n]), A = E.useCallback((y) => {
    h.mode === "system" && g((m) => {
      const w = y != null && y.matches ? "dark" : "light";
      return m.systemMode === w ? m : {
        ...m,
        systemMode: w
      };
    });
  }, [h.mode]), C = E.useRef(A);
  return C.current = A, E.useEffect(() => {
    if (typeof window.matchMedia != "function" || !d)
      return;
    const y = (...w) => C.current(...w), m = window.matchMedia("(prefers-color-scheme: dark)");
    return m.addListener(y), y(m), () => {
      m.removeListener(y);
    };
  }, [d]), E.useEffect(() => {
    if (c && d) {
      const y = (m) => {
        const w = m.newValue;
        typeof m.key == "string" && m.key.startsWith(s) && (!w || u.match(w)) && (m.key.endsWith("light") && T({
          light: w
        }), m.key.endsWith("dark") && T({
          dark: w
        })), m.key === i && (!w || ["light", "dark", "system"].includes(w)) && S(w || t);
      };
      return c.addEventListener("storage", y), () => {
        c.removeEventListener("storage", y);
      };
    }
  }, [T, S, i, s, u, t, c, d]), {
    ...h,
    mode: x ? h.mode : void 0,
    systemMode: x ? h.systemMode : void 0,
    colorScheme: x ? f : void 0,
    setMode: S,
    setColorScheme: T
  };
}
const Xu = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function Ju(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: r = {},
    modeStorageKey: n = Lo,
    colorSchemeStorageKey: o = Bo,
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
  }, u = /* @__PURE__ */ E.createContext(void 0);
  process.env.NODE_ENV !== "production" && (u.displayName = "ColorSchemeContext");
  const d = () => E.useContext(u) || l, h = {}, g = {};
  function x(T) {
    var Y, oe, Re, le;
    const {
      children: A,
      theme: C,
      modeStorageKey: y = n,
      colorSchemeStorageKey: m = o,
      disableTransitionOnChange: w = i,
      storageWindow: P = typeof window > "u" ? void 0 : window,
      documentNode: L = typeof document > "u" ? void 0 : document,
      colorSchemeNode: B = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: p = !1,
      disableStyleSheetGeneration: k = !1,
      defaultMode: D = "system",
      noSsr: j
    } = T, W = E.useRef(!1), z = Do(), U = E.useContext(u), V = !!U && !p, ee = E.useMemo(() => C || (typeof r == "function" ? r() : r), [C]), F = ee[t], R = F || ee, {
      colorSchemes: _ = h,
      components: J = g,
      cssVarPrefix: Q
    } = R, H = Object.keys(_).filter((K) => !!_[K]).join(","), X = E.useMemo(() => H.split(","), [H]), I = typeof s == "string" ? s : s.light, q = typeof s == "string" ? s : s.dark, G = _[I] && _[q] ? D : ((oe = (Y = _[R.defaultColorScheme]) == null ? void 0 : Y.palette) == null ? void 0 : oe.mode) || ((Re = R.palette) == null ? void 0 : Re.mode), {
      mode: te,
      setMode: Z,
      systemMode: ae,
      lightColorScheme: O,
      darkColorScheme: ge,
      colorScheme: Ee,
      setColorScheme: Me
    } = Ku({
      supportedColorSchemes: X,
      defaultLightColorScheme: I,
      defaultDarkColorScheme: q,
      modeStorageKey: y,
      colorSchemeStorageKey: m,
      defaultMode: G,
      storageWindow: P,
      noSsr: j
    });
    let Je = te, be = Ee;
    V && (Je = U.mode, be = U.colorScheme);
    const Pe = E.useMemo(() => {
      var Oe;
      const K = be || R.defaultColorScheme, ye = ((Oe = R.generateThemeVars) == null ? void 0 : Oe.call(R)) || R.vars, we = {
        ...R,
        components: J,
        colorSchemes: _,
        cssVarPrefix: Q,
        vars: ye
      };
      if (typeof we.generateSpacing == "function" && (we.spacing = we.generateSpacing()), K) {
        const se = _[K];
        se && typeof se == "object" && Object.keys(se).forEach((_e) => {
          se[_e] && typeof se[_e] == "object" ? we[_e] = {
            ...we[_e],
            ...se[_e]
          } : we[_e] = se[_e];
        });
      }
      return c ? c(we) : we;
    }, [R, be, J, _, Q]), Ve = R.colorSchemeSelector;
    E.useEffect(() => {
      if (be && B && Ve && Ve !== "media") {
        const K = Ve;
        let ye = Ve;
        if (K === "class" && (ye = ".%s"), K === "data" && (ye = "[data-%s]"), K != null && K.startsWith("data-") && !K.includes("%s") && (ye = `[${K}="%s"]`), ye.startsWith("."))
          B.classList.remove(...X.map((we) => ye.substring(1).replace("%s", we))), B.classList.add(ye.substring(1).replace("%s", be));
        else {
          const we = ye.replace("%s", be).match(/\[([^\]]+)\]/);
          if (we) {
            const [Oe, se] = we[1].split("=");
            se || X.forEach((_e) => {
              B.removeAttribute(Oe.replace(be, _e));
            }), B.setAttribute(Oe, se ? se.replace(/"|'/g, "") : "");
          } else
            B.setAttribute(ye, be);
        }
      }
    }, [be, Ve, B, X]), E.useEffect(() => {
      let K;
      if (w && W.current && L) {
        const ye = L.createElement("style");
        ye.appendChild(L.createTextNode(Xu)), L.head.appendChild(ye), window.getComputedStyle(L.body), K = setTimeout(() => {
          L.head.removeChild(ye);
        }, 1);
      }
      return () => {
        clearTimeout(K);
      };
    }, [be, w, L]), E.useEffect(() => (W.current = !0, () => {
      W.current = !1;
    }), []);
    const Le = E.useMemo(() => ({
      allColorSchemes: X,
      colorScheme: be,
      darkColorScheme: ge,
      lightColorScheme: O,
      mode: Je,
      setColorScheme: Me,
      setMode: process.env.NODE_ENV === "production" ? Z : (K) => {
        Pe.colorSchemeSelector === "media" && console.error(["MUI: The `setMode` function has no effect if `colorSchemeSelector` is `media` (`media` is the default value).", "To toggle the mode manually, please configure `colorSchemeSelector` to use a class or data attribute.", "To learn more, visit https://mui.com/material-ui/customization/css-theme-variables/configuration/#toggling-dark-mode-manually"].join(`
`)), Z(K);
      },
      systemMode: ae
    }), [X, be, ge, O, Je, Me, Z, ae, Pe.colorSchemeSelector]);
    let v = !0;
    (k || R.cssVariables === !1 || V && (z == null ? void 0 : z.cssVarPrefix) === Q) && (v = !1);
    const N = /* @__PURE__ */ M.jsxs(E.Fragment, {
      children: [/* @__PURE__ */ M.jsx(Or, {
        themeId: F ? t : void 0,
        theme: Pe,
        children: A
      }), v && /* @__PURE__ */ M.jsx(ka, {
        styles: ((le = Pe.generateStyleSheets) == null ? void 0 : le.call(Pe)) || []
      })]
    });
    return V ? N : /* @__PURE__ */ M.jsx(u.Provider, {
      value: Le,
      children: N
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
    useColorScheme: d,
    getInitColorSchemeScript: (T) => qu({
      colorSchemeStorageKey: o,
      defaultLightColorScheme: b,
      defaultDarkColorScheme: f,
      modeStorageKey: n,
      ...T
    })
  };
}
function Qu(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const qi = (e, t, r, n = []) => {
  let o = e;
  t.forEach((i, s) => {
    s === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = r : o && typeof o == "object" && (o[i] = r) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
  });
}, Zu = (e, t, r) => {
  function n(o, i = [], s = []) {
    Object.entries(o).forEach(([c, l]) => {
      (!r || !r([...i, c])) && l != null && (typeof l == "object" && Object.keys(l).length > 0 ? n(l, [...i, c], Array.isArray(l) ? [...s, c] : s) : t([...i, c], l, s));
    });
  }
  n(e);
}, ef = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Zn(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, i = {}, s = {};
  return Zu(
    e,
    (c, l, u) => {
      if ((typeof l == "string" || typeof l == "number") && (!n || !n(c, l))) {
        const d = `--${r ? `${r}-` : ""}${c.join("-")}`, h = ef(c, l);
        Object.assign(o, {
          [d]: h
        }), qi(i, c, `var(${d})`, u), qi(s, c, `var(${d}, ${h})`, u);
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
function tf(e, t = {}) {
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
    css: d,
    varsWithDefaults: h
  } = Zn(l, t);
  let g = h;
  const x = {}, {
    [c]: b,
    ...f
  } = i;
  if (Object.entries(f || {}).forEach(([C, y]) => {
    const {
      vars: m,
      css: w,
      varsWithDefaults: P
    } = Zn(y, t);
    g = et(g, P), x[C] = {
      css: w,
      vars: m
    };
  }), b) {
    const {
      css: C,
      vars: y,
      varsWithDefaults: m
    } = Zn(b, t);
    g = et(g, m), x[c] = {
      css: C,
      vars: y
    };
  }
  function S(C, y) {
    var w, P;
    let m = o;
    if (o === "class" && (m = ".%s"), o === "data" && (m = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (m = `[${o}="%s"]`), C) {
      if (m === "media")
        return e.defaultColorScheme === C ? ":root" : {
          [`@media (prefers-color-scheme: ${((P = (w = i[C]) == null ? void 0 : w.palette) == null ? void 0 : P.mode) || C})`]: {
            ":root": y
          }
        };
      if (m)
        return e.defaultColorScheme === C ? `:root, ${m.replace("%s", String(C))}` : m.replace("%s", String(C));
    }
    return ":root";
  }
  return {
    vars: g,
    generateThemeVars: () => {
      let C = {
        ...u
      };
      return Object.entries(x).forEach(([, {
        vars: y
      }]) => {
        C = et(C, y);
      }), C;
    },
    generateStyleSheets: () => {
      var L, B;
      const C = [], y = e.defaultColorScheme || "light";
      function m(p, k) {
        Object.keys(k).length && C.push(typeof p == "string" ? {
          [p]: {
            ...k
          }
        } : p);
      }
      m(r(void 0, {
        ...d
      }), d);
      const {
        [y]: w,
        ...P
      } = x;
      if (w) {
        const {
          css: p
        } = w, k = (B = (L = i[y]) == null ? void 0 : L.palette) == null ? void 0 : B.mode, D = !n && k ? {
          colorScheme: k,
          ...p
        } : {
          ...p
        };
        m(r(y, {
          ...D
        }), D);
      }
      return Object.entries(P).forEach(([p, {
        css: k
      }]) => {
        var W, z;
        const D = (z = (W = i[p]) == null ? void 0 : W.palette) == null ? void 0 : z.mode, j = !n && D ? {
          colorScheme: D,
          ...k
        } : {
          ...k
        };
        m(r(p, {
          ...j
        }), j);
      }), C;
    }
  };
}
function rf(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
function ns() {
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
      paper: Sr.white,
      default: Sr.white
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
const nf = ns();
function os() {
  return {
    text: {
      primary: Sr.white,
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
      active: Sr.white,
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
const Gi = os();
function Ki(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = Ao(e.main, o) : t === "dark" && (e.dark = ko(e.main, i)));
}
function of(e = "light") {
  return e === "dark" ? {
    main: Wt[200],
    light: Wt[50],
    dark: Wt[400]
  } : {
    main: Wt[700],
    light: Wt[400],
    dark: Wt[800]
  };
}
function af(e = "light") {
  return e === "dark" ? {
    main: zt[200],
    light: zt[50],
    dark: zt[400]
  } : {
    main: zt[500],
    light: zt[300],
    dark: zt[700]
  };
}
function sf(e = "light") {
  return e === "dark" ? {
    main: Ft[500],
    light: Ft[300],
    dark: Ft[700]
  } : {
    main: Ft[700],
    light: Ft[400],
    dark: Ft[800]
  };
}
function cf(e = "light") {
  return e === "dark" ? {
    main: Ut[400],
    light: Ut[300],
    dark: Ut[700]
  } : {
    main: Ut[700],
    light: Ut[500],
    dark: Ut[900]
  };
}
function lf(e = "light") {
  return e === "dark" ? {
    main: Yt[400],
    light: Yt[300],
    dark: Yt[700]
  } : {
    main: Yt[800],
    light: Yt[500],
    dark: Yt[900]
  };
}
function uf(e = "light") {
  return e === "dark" ? {
    main: ur[400],
    light: ur[300],
    dark: ur[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: ur[500],
    dark: ur[900]
  };
}
function Vo(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    ...o
  } = e, i = e.primary || of(t), s = e.secondary || af(t), c = e.error || sf(t), l = e.info || cf(t), u = e.success || lf(t), d = e.warning || uf(t);
  function h(f) {
    const S = Di(f, Gi.text.primary) >= r ? Gi.text.primary : nf.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const T = Di(f, S);
      T < 3 && console.error([`MUI: The contrast ratio of ${T}:1 for ${S} on ${f}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return S;
  }
  const g = ({
    color: f,
    name: S,
    mainShade: T = 500,
    lightShade: A = 300,
    darkShade: C = 700
  }) => {
    if (f = {
      ...f
    }, !f.main && f[T] && (f.main = f[T]), !f.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${S ? ` (${S})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${T}\` property.` : $t(11, S ? ` (${S})` : "", T));
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
} });` : $t(12, S ? ` (${S})` : "", JSON.stringify(f.main)));
    return Ki(f, "light", A, n), Ki(f, "dark", C, n), f.contrastText || (f.contrastText = h(f.main)), f;
  };
  let x;
  return t === "light" ? x = ns() : t === "dark" && (x = os()), process.env.NODE_ENV !== "production" && (x || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), et({
    // A collection of common colors.
    common: {
      ...Sr
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
      color: d,
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
    grey: Xs,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: h,
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
function ff(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, i] = n;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function pf(e, t) {
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
function df(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Xi = {
  textTransform: "uppercase"
}, Ji = '"Roboto", "Helvetica", "Arial", sans-serif';
function is(e, t) {
  const {
    fontFamily: r = Ji,
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
    pxToRem: d,
    ...h
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof l != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const g = n / 14, x = d || ((S) => `${S / l * g}rem`), b = (S, T, A, C, y) => ({
    fontFamily: r,
    fontWeight: S,
    fontSize: x(T),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: A,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === Ji ? {
      letterSpacing: `${df(C / T)}em`
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
    button: b(s, 14, 1.75, 0.4, Xi),
    caption: b(i, 12, 1.66, 0.4),
    overline: b(i, 12, 2.66, 1, Xi),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return et({
    htmlFontSize: l,
    pxToRem: x,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: s,
    fontWeightBold: c,
    ...f
  }, h, {
    clone: !1
    // No need to clone deep
  });
}
const mf = 0.2, hf = 0.14, gf = 0.12;
function $e(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${mf})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${hf})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${gf})`].join(",");
}
const yf = ["none", $e(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), $e(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), $e(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), $e(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), $e(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), $e(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), $e(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), $e(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), $e(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), $e(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), $e(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), $e(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), $e(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), $e(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), $e(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), $e(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), $e(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), $e(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), $e(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), $e(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), $e(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), $e(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), $e(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), $e(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], bf = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, as = {
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
function Qi(e) {
  return `${Math.round(e)}ms`;
}
function vf(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function xf(e) {
  const t = {
    ...bf,
    ...e.easing
  }, r = {
    ...as,
    ...e.duration
  };
  return {
    getAutoHeightDuration: vf,
    create: (o = ["all"], i = {}) => {
      const {
        duration: s = r.standard,
        easing: c = t.easeInOut,
        delay: l = 0,
        ...u
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const d = (g) => typeof g == "string", h = (g) => !Number.isNaN(parseFloat(g));
        !d(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !h(s) && !d(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), d(c) || console.error('MUI: Argument "easing" must be a string.'), !h(l) && !d(l) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((d) => `${d} ${typeof s == "string" ? s : Qi(s)} ${c} ${typeof l == "string" ? l : Qi(l)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const Sf = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Ef(e) {
  return yt(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function ss(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [s, c] = o[i];
      !Ef(c) || s.startsWith("unstable_") ? delete n[s] : yt(c) && (n[s] = {
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
function lo(e = {}, ...t) {
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
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : $t(20));
  const d = Vo(i), h = $o(e);
  let g = et(h, {
    mixins: pf(h.breakpoints, n),
    palette: d,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: yf.slice(),
    typography: is(d, c),
    transitions: xf(s),
    zIndex: {
      ...Sf
    }
  });
  if (g = et(g, u), g = t.reduce((x, b) => et(x, b), g), process.env.NODE_ENV !== "production") {
    const x = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], b = (f, S) => {
      let T;
      for (T in f) {
        const A = f[T];
        if (x.includes(T) && Object.keys(A).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const C = Ue("", T);
            console.error([`MUI: The \`${S}\` component increases the CSS specificity of the \`${T}\` internal state.`, "You can not override it like this: ", JSON.stringify(f, null, 2), "", `Instead, you need to use the '&.${C}' syntax:`, JSON.stringify({
              root: {
                [`&.${C}`]: A
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          f[T] = {};
        }
      }
    };
    Object.keys(g.components).forEach((f) => {
      const S = g.components[f].styleOverrides;
      S && f.startsWith("Mui") && b(S, f);
    });
  }
  return g.unstable_sxConfig = {
    ...Ir,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, g.unstable_sx = function(b) {
    return Pt({
      sx: b,
      theme: this
    });
  }, g.toRuntimeSource = ss, g;
}
function Tf(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Cf = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = Tf(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function cs(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function ls(e) {
  return e === "dark" ? Cf : [];
}
function wf(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    ...o
  } = e, i = Vo(t);
  return {
    palette: i,
    opacity: {
      ...cs(i.mode),
      ...r
    },
    overlays: n || ls(i.mode),
    ...o
  };
}
function Of(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Rf = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], $f = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return Rf(e.cssVarPrefix).forEach((c) => {
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
function Pf(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function $(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function gr(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : Ua(e);
}
function Tt(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = hr(gr(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function kf(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const mt = (e) => {
  try {
    return e();
  } catch {
  }
}, Af = (e = "mui") => Qu(e);
function eo(e, t, r, n) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const o = n === "dark" ? "dark" : "light";
  if (!r) {
    e[n] = wf({
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
  } = lo({
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
      ...cs(o),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || ls(o)
  }, s;
}
function Nf(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    shouldSkipGeneratingVar: s = Of,
    colorSchemeSelector: c = r.light && r.dark ? "media" : void 0,
    rootSelector: l = ":root",
    ...u
  } = e, d = Object.keys(r)[0], h = n || (r.light && d !== "light" ? "light" : d), g = Af(i), {
    [h]: x,
    light: b,
    dark: f,
    ...S
  } = r, T = {
    ...S
  };
  let A = x;
  if ((h === "dark" && !("dark" in r) || h === "light" && !("light" in r)) && (A = !0), !A)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${h}\` option is either missing or invalid.` : $t(21, h));
  const C = eo(T, A, u, h);
  b && !T.light && eo(T, b, void 0, "light"), f && !T.dark && eo(T, f, void 0, "dark");
  let y = {
    defaultColorScheme: h,
    ...C,
    cssVarPrefix: i,
    colorSchemeSelector: c,
    rootSelector: l,
    getCssVar: g,
    colorSchemes: T,
    font: {
      ...ff(C.typography),
      ...C.font
    },
    spacing: kf(u.spacing)
  };
  Object.keys(y.colorSchemes).forEach((B) => {
    const p = y.colorSchemes[B].palette, k = (D) => {
      const j = D.split("-"), W = j[1], z = j[2];
      return g(D, p[W][z]);
    };
    if (p.mode === "light" && ($(p.common, "background", "#fff"), $(p.common, "onBackground", "#000")), p.mode === "dark" && ($(p.common, "background", "#000"), $(p.common, "onBackground", "#fff")), Pf(p, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), p.mode === "light") {
      $(p.Alert, "errorColor", Te(p.error.light, 0.6)), $(p.Alert, "infoColor", Te(p.info.light, 0.6)), $(p.Alert, "successColor", Te(p.success.light, 0.6)), $(p.Alert, "warningColor", Te(p.warning.light, 0.6)), $(p.Alert, "errorFilledBg", k("palette-error-main")), $(p.Alert, "infoFilledBg", k("palette-info-main")), $(p.Alert, "successFilledBg", k("palette-success-main")), $(p.Alert, "warningFilledBg", k("palette-warning-main")), $(p.Alert, "errorFilledColor", mt(() => p.getContrastText(p.error.main))), $(p.Alert, "infoFilledColor", mt(() => p.getContrastText(p.info.main))), $(p.Alert, "successFilledColor", mt(() => p.getContrastText(p.success.main))), $(p.Alert, "warningFilledColor", mt(() => p.getContrastText(p.warning.main))), $(p.Alert, "errorStandardBg", Ce(p.error.light, 0.9)), $(p.Alert, "infoStandardBg", Ce(p.info.light, 0.9)), $(p.Alert, "successStandardBg", Ce(p.success.light, 0.9)), $(p.Alert, "warningStandardBg", Ce(p.warning.light, 0.9)), $(p.Alert, "errorIconColor", k("palette-error-main")), $(p.Alert, "infoIconColor", k("palette-info-main")), $(p.Alert, "successIconColor", k("palette-success-main")), $(p.Alert, "warningIconColor", k("palette-warning-main")), $(p.AppBar, "defaultBg", k("palette-grey-100")), $(p.Avatar, "defaultBg", k("palette-grey-400")), $(p.Button, "inheritContainedBg", k("palette-grey-300")), $(p.Button, "inheritContainedHoverBg", k("palette-grey-A100")), $(p.Chip, "defaultBorder", k("palette-grey-400")), $(p.Chip, "defaultAvatarColor", k("palette-grey-700")), $(p.Chip, "defaultIconColor", k("palette-grey-700")), $(p.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), $(p.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), $(p.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), $(p.LinearProgress, "primaryBg", Ce(p.primary.main, 0.62)), $(p.LinearProgress, "secondaryBg", Ce(p.secondary.main, 0.62)), $(p.LinearProgress, "errorBg", Ce(p.error.main, 0.62)), $(p.LinearProgress, "infoBg", Ce(p.info.main, 0.62)), $(p.LinearProgress, "successBg", Ce(p.success.main, 0.62)), $(p.LinearProgress, "warningBg", Ce(p.warning.main, 0.62)), $(p.Skeleton, "bg", `rgba(${k("palette-text-primaryChannel")} / 0.11)`), $(p.Slider, "primaryTrack", Ce(p.primary.main, 0.62)), $(p.Slider, "secondaryTrack", Ce(p.secondary.main, 0.62)), $(p.Slider, "errorTrack", Ce(p.error.main, 0.62)), $(p.Slider, "infoTrack", Ce(p.info.main, 0.62)), $(p.Slider, "successTrack", Ce(p.success.main, 0.62)), $(p.Slider, "warningTrack", Ce(p.warning.main, 0.62));
      const D = Kr(p.background.default, 0.8);
      $(p.SnackbarContent, "bg", D), $(p.SnackbarContent, "color", mt(() => p.getContrastText(D))), $(p.SpeedDialAction, "fabHoverBg", Kr(p.background.paper, 0.15)), $(p.StepConnector, "border", k("palette-grey-400")), $(p.StepContent, "border", k("palette-grey-400")), $(p.Switch, "defaultColor", k("palette-common-white")), $(p.Switch, "defaultDisabledColor", k("palette-grey-100")), $(p.Switch, "primaryDisabledColor", Ce(p.primary.main, 0.62)), $(p.Switch, "secondaryDisabledColor", Ce(p.secondary.main, 0.62)), $(p.Switch, "errorDisabledColor", Ce(p.error.main, 0.62)), $(p.Switch, "infoDisabledColor", Ce(p.info.main, 0.62)), $(p.Switch, "successDisabledColor", Ce(p.success.main, 0.62)), $(p.Switch, "warningDisabledColor", Ce(p.warning.main, 0.62)), $(p.TableCell, "border", Ce(Gr(p.divider, 1), 0.88)), $(p.Tooltip, "bg", Gr(p.grey[700], 0.92));
    }
    if (p.mode === "dark") {
      $(p.Alert, "errorColor", Ce(p.error.light, 0.6)), $(p.Alert, "infoColor", Ce(p.info.light, 0.6)), $(p.Alert, "successColor", Ce(p.success.light, 0.6)), $(p.Alert, "warningColor", Ce(p.warning.light, 0.6)), $(p.Alert, "errorFilledBg", k("palette-error-dark")), $(p.Alert, "infoFilledBg", k("palette-info-dark")), $(p.Alert, "successFilledBg", k("palette-success-dark")), $(p.Alert, "warningFilledBg", k("palette-warning-dark")), $(p.Alert, "errorFilledColor", mt(() => p.getContrastText(p.error.dark))), $(p.Alert, "infoFilledColor", mt(() => p.getContrastText(p.info.dark))), $(p.Alert, "successFilledColor", mt(() => p.getContrastText(p.success.dark))), $(p.Alert, "warningFilledColor", mt(() => p.getContrastText(p.warning.dark))), $(p.Alert, "errorStandardBg", Te(p.error.light, 0.9)), $(p.Alert, "infoStandardBg", Te(p.info.light, 0.9)), $(p.Alert, "successStandardBg", Te(p.success.light, 0.9)), $(p.Alert, "warningStandardBg", Te(p.warning.light, 0.9)), $(p.Alert, "errorIconColor", k("palette-error-main")), $(p.Alert, "infoIconColor", k("palette-info-main")), $(p.Alert, "successIconColor", k("palette-success-main")), $(p.Alert, "warningIconColor", k("palette-warning-main")), $(p.AppBar, "defaultBg", k("palette-grey-900")), $(p.AppBar, "darkBg", k("palette-background-paper")), $(p.AppBar, "darkColor", k("palette-text-primary")), $(p.Avatar, "defaultBg", k("palette-grey-600")), $(p.Button, "inheritContainedBg", k("palette-grey-800")), $(p.Button, "inheritContainedHoverBg", k("palette-grey-700")), $(p.Chip, "defaultBorder", k("palette-grey-700")), $(p.Chip, "defaultAvatarColor", k("palette-grey-300")), $(p.Chip, "defaultIconColor", k("palette-grey-300")), $(p.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), $(p.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), $(p.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), $(p.LinearProgress, "primaryBg", Te(p.primary.main, 0.5)), $(p.LinearProgress, "secondaryBg", Te(p.secondary.main, 0.5)), $(p.LinearProgress, "errorBg", Te(p.error.main, 0.5)), $(p.LinearProgress, "infoBg", Te(p.info.main, 0.5)), $(p.LinearProgress, "successBg", Te(p.success.main, 0.5)), $(p.LinearProgress, "warningBg", Te(p.warning.main, 0.5)), $(p.Skeleton, "bg", `rgba(${k("palette-text-primaryChannel")} / 0.13)`), $(p.Slider, "primaryTrack", Te(p.primary.main, 0.5)), $(p.Slider, "secondaryTrack", Te(p.secondary.main, 0.5)), $(p.Slider, "errorTrack", Te(p.error.main, 0.5)), $(p.Slider, "infoTrack", Te(p.info.main, 0.5)), $(p.Slider, "successTrack", Te(p.success.main, 0.5)), $(p.Slider, "warningTrack", Te(p.warning.main, 0.5));
      const D = Kr(p.background.default, 0.98);
      $(p.SnackbarContent, "bg", D), $(p.SnackbarContent, "color", mt(() => p.getContrastText(D))), $(p.SpeedDialAction, "fabHoverBg", Kr(p.background.paper, 0.15)), $(p.StepConnector, "border", k("palette-grey-600")), $(p.StepContent, "border", k("palette-grey-600")), $(p.Switch, "defaultColor", k("palette-grey-300")), $(p.Switch, "defaultDisabledColor", k("palette-grey-600")), $(p.Switch, "primaryDisabledColor", Te(p.primary.main, 0.55)), $(p.Switch, "secondaryDisabledColor", Te(p.secondary.main, 0.55)), $(p.Switch, "errorDisabledColor", Te(p.error.main, 0.55)), $(p.Switch, "infoDisabledColor", Te(p.info.main, 0.55)), $(p.Switch, "successDisabledColor", Te(p.success.main, 0.55)), $(p.Switch, "warningDisabledColor", Te(p.warning.main, 0.55)), $(p.TableCell, "border", Te(Gr(p.divider, 1), 0.68)), $(p.Tooltip, "bg", Gr(p.grey[700], 0.92));
    }
    Tt(p.background, "default"), Tt(p.background, "paper"), Tt(p.common, "background"), Tt(p.common, "onBackground"), Tt(p, "divider"), Object.keys(p).forEach((D) => {
      const j = p[D];
      D !== "tonalOffset" && j && typeof j == "object" && (j.main && $(p[D], "mainChannel", hr(gr(j.main))), j.light && $(p[D], "lightChannel", hr(gr(j.light))), j.dark && $(p[D], "darkChannel", hr(gr(j.dark))), j.contrastText && $(p[D], "contrastTextChannel", hr(gr(j.contrastText))), D === "text" && (Tt(p[D], "primary"), Tt(p[D], "secondary")), D === "action" && (j.active && Tt(p[D], "active"), j.selected && Tt(p[D], "selected")));
    });
  }), y = t.reduce((B, p) => et(B, p), y);
  const m = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: s,
    getSelector: $f(y)
  }, {
    vars: w,
    generateThemeVars: P,
    generateStyleSheets: L
  } = tf(y, m);
  return y.vars = w, Object.entries(y.colorSchemes[y.defaultColorScheme]).forEach(([B, p]) => {
    y[B] = p;
  }), y.generateThemeVars = P, y.generateStyleSheets = L, y.generateSpacing = function() {
    return _a(u.spacing, Oo(this));
  }, y.getColorSchemeSelector = rf(c), y.spacing = y.generateSpacing(), y.shouldSkipGeneratingVar = s, y.unstable_sxConfig = {
    ...Ir,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, y.unstable_sx = function(p) {
    return Pt({
      sx: p,
      theme: this
    });
  }, y.toRuntimeSource = ss, y;
}
function Zi(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: Vo({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Ln(e = {}, ...t) {
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
      return lo(e, ...t);
    let d = r;
    "palette" in e || u[c] && (u[c] !== !0 ? d = u[c].palette : c === "dark" && (d = {
      mode: "dark"
    }));
    const h = lo({
      ...e,
      palette: d
    }, ...t);
    return h.defaultColorScheme = c, h.colorSchemes = u, h.palette.mode === "light" && (h.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: h.palette
    }, Zi(h, "dark", u.dark)), h.palette.mode === "dark" && (h.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: h.palette
    }, Zi(h, "light", u.light)), h;
  }
  return !r && !("light" in u) && c === "light" && (u.light = !0), Nf({
    ...s,
    colorSchemes: u,
    defaultColorScheme: c,
    ...typeof n != "boolean" && n
  }, ...t);
}
const us = Ln();
function ir() {
  const e = ja(us);
  return process.env.NODE_ENV !== "production" && E.useDebugValue(e), e[wt] || e;
}
function Mf(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const fs = (e) => Mf(e) && e !== "classes", Se = yu({
  themeId: wt,
  defaultTheme: us,
  rootShouldForwardProp: fs
});
function ea({
  theme: e,
  ...t
}) {
  const r = wt in e ? e[wt] : void 0;
  return /* @__PURE__ */ M.jsx(Or, {
    ...t,
    themeId: r ? wt : void 0,
    theme: r || e
  });
}
const Xr = {
  attribute: "data-mui-color-scheme",
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
}, {
  CssVarsProvider: _f,
  useColorScheme: $m,
  getInitColorSchemeScript: Pm
} = Ju({
  themeId: wt,
  // @ts-ignore ignore module augmentation tests
  theme: () => Ln({
    cssVariables: !0
  }),
  colorSchemeStorageKey: Xr.colorSchemeStorageKey,
  modeStorageKey: Xr.modeStorageKey,
  defaultColorScheme: {
    light: Xr.defaultLightColorScheme,
    dark: Xr.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const t = {
      ...e,
      typography: is(e.palette, e.typography)
    };
    return t.unstable_sx = function(n) {
      return Pt({
        sx: n,
        theme: this
      });
    }, t;
  }
}), If = _f;
function jf({
  theme: e,
  ...t
}) {
  return typeof e == "function" ? /* @__PURE__ */ M.jsx(ea, {
    theme: e,
    ...t
  }) : "colorSchemes" in (wt in e ? e[wt] : e) ? /* @__PURE__ */ M.jsx(If, {
    theme: e,
    ...t
  }) : /* @__PURE__ */ M.jsx(ea, {
    theme: e,
    ...t
  });
}
function Df() {
  return Da;
}
const tt = Yu;
process.env.NODE_ENV !== "production" && (a.node, a.object.isRequired);
function He(e) {
  return Uu(e);
}
function Lf(e) {
  return Ue("MuiSvgIcon", e);
}
Ye("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Bf = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${re(t)}`, `fontSize${re(r)}`]
  };
  return Xe(o, Lf, n);
}, Vf = Se("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${re(r.color)}`], t[`fontSize${re(r.fontSize)}`]];
  }
})(tt(({
  theme: e
}) => {
  var t, r, n, o, i, s, c, l, u, d, h, g, x, b;
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
          fontSize: ((d = (u = e.typography) == null ? void 0 : u.pxToRem) == null ? void 0 : d.call(u, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((e.vars ?? e).palette).filter(([, f]) => f && f.main).map(([f]) => {
        var S, T;
        return {
          props: {
            color: f
          },
          style: {
            color: (T = (S = (e.vars ?? e).palette) == null ? void 0 : S[f]) == null ? void 0 : T.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (g = (h = (e.vars ?? e).palette) == null ? void 0 : h.action) == null ? void 0 : g.active
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
})), mn = /* @__PURE__ */ E.forwardRef(function(t, r) {
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
    inheritViewBox: d = !1,
    titleAccess: h,
    viewBox: g = "0 0 24 24",
    ...x
  } = n, b = /* @__PURE__ */ E.isValidElement(o) && o.type === "svg", f = {
    ...n,
    color: s,
    component: c,
    fontSize: l,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: g,
    hasSvgAsChild: b
  }, S = {};
  d || (S.viewBox = g);
  const T = Bf(f);
  return /* @__PURE__ */ M.jsxs(Vf, {
    as: c,
    className: ce(T.root, i),
    focusable: "false",
    color: u,
    "aria-hidden": h ? void 0 : !0,
    role: h ? "img" : void 0,
    ref: r,
    ...S,
    ...x,
    ...b && o.props,
    ownerState: f,
    children: [b ? o.props.children : o, h ? /* @__PURE__ */ M.jsx("title", {
      children: h
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (mn.propTypes = {
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
mn.muiName = "SvgIcon";
function ar(e, t) {
  function r(n, o) {
    return /* @__PURE__ */ M.jsx(mn, {
      "data-testid": `${t}Icon`,
      ref: o,
      ...n,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = mn.muiName, /* @__PURE__ */ E.memo(/* @__PURE__ */ E.forwardRef(r));
}
function ps(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
function uo(e, t) {
  return uo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, uo(e, t);
}
function ds(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, uo(e, t);
}
const ta = {
  disabled: !1
};
var Ff = process.env.NODE_ENV !== "production" ? a.oneOfType([a.number, a.shape({
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
const hn = pt.createContext(null);
var zf = function(t) {
  return t.scrollTop;
}, yr = "unmounted", Mt = "exited", _t = "entering", qt = "entered", fo = "exiting", Et = /* @__PURE__ */ function(e) {
  ds(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var s = o, c = s && !s.isMounting ? n.enter : n.appear, l;
    return i.appearStatus = null, n.in ? c ? (l = Mt, i.appearStatus = _t) : l = qt : n.unmountOnExit || n.mountOnEnter ? l = yr : l = Mt, i.state = {
      status: l
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(o, i) {
    var s = o.in;
    return s && i.status === yr ? {
      status: Mt
    } : null;
  };
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, r.componentDidUpdate = function(o) {
    var i = null;
    if (o !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== _t && s !== qt && (i = _t) : (s === _t || s === qt) && (i = fo);
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
      if (this.cancelNextCallback(), i === _t) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : Fr.findDOMNode(this);
          s && zf(s);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Mt && this.setState({
      status: yr
    });
  }, r.performEnter = function(o) {
    var i = this, s = this.props.enter, c = this.context ? this.context.isMounting : o, l = this.props.nodeRef ? [c] : [Fr.findDOMNode(this), c], u = l[0], d = l[1], h = this.getTimeouts(), g = c ? h.appear : h.enter;
    if (!o && !s || ta.disabled) {
      this.safeSetState({
        status: qt
      }, function() {
        i.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, d), this.safeSetState({
      status: _t
    }, function() {
      i.props.onEntering(u, d), i.onTransitionEnd(g, function() {
        i.safeSetState({
          status: qt
        }, function() {
          i.props.onEntered(u, d);
        });
      });
    });
  }, r.performExit = function() {
    var o = this, i = this.props.exit, s = this.getTimeouts(), c = this.props.nodeRef ? void 0 : Fr.findDOMNode(this);
    if (!i || ta.disabled) {
      this.safeSetState({
        status: Mt
      }, function() {
        o.props.onExited(c);
      });
      return;
    }
    this.props.onExit(c), this.safeSetState({
      status: fo
    }, function() {
      o.props.onExiting(c), o.onTransitionEnd(s.exit, function() {
        o.safeSetState({
          status: Mt
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
    var s = this.props.nodeRef ? this.props.nodeRef.current : Fr.findDOMNode(this), c = o == null && !this.props.addEndListener;
    if (!s || c) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var l = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback], u = l[0], d = l[1];
      this.props.addEndListener(u, d);
    }
    o != null && setTimeout(this.nextCallback, o);
  }, r.render = function() {
    var o = this.state.status;
    if (o === yr)
      return null;
    var i = this.props, s = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var c = ps(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ pt.createElement(hn.Provider, {
        value: null
      }, typeof s == "function" ? s(o, c) : pt.cloneElement(pt.Children.only(s), c))
    );
  }, t;
}(pt.Component);
Et.contextType = hn;
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
    var r = Ff;
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
function Ht() {
}
Et.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Ht,
  onEntering: Ht,
  onEntered: Ht,
  onExit: Ht,
  onExiting: Ht,
  onExited: Ht
};
Et.UNMOUNTED = yr;
Et.EXITED = Mt;
Et.ENTERING = _t;
Et.ENTERED = qt;
Et.EXITING = fo;
function Wf(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Fo(e, t) {
  var r = function(i) {
    return t && tn(i) ? t(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && Us.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function Uf(e, t) {
  e = e || {}, t = t || {};
  function r(d) {
    return d in t ? t[d] : e[d];
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
function jt(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function Yf(e, t) {
  return Fo(e.children, function(r) {
    return rn(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: jt(r, "appear", e),
      enter: jt(r, "enter", e),
      exit: jt(r, "exit", e)
    });
  });
}
function Hf(e, t, r) {
  var n = Fo(e.children), o = Uf(t, n);
  return Object.keys(o).forEach(function(i) {
    var s = o[i];
    if (tn(s)) {
      var c = i in t, l = i in n, u = t[i], d = tn(u) && !u.props.in;
      l && (!c || d) ? o[i] = rn(s, {
        onExited: r.bind(null, s),
        in: !0,
        exit: jt(s, "exit", e),
        enter: jt(s, "enter", e)
      }) : !l && c && !d ? o[i] = rn(s, {
        in: !1
      }) : l && c && tn(u) && (o[i] = rn(s, {
        onExited: r.bind(null, s),
        in: u.props.in,
        exit: jt(s, "exit", e),
        enter: jt(s, "enter", e)
      }));
    }
  }), o;
}
var qf = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Gf = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, zo = /* @__PURE__ */ function(e) {
  ds(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var s = i.handleExited.bind(Wf(i));
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
      children: l ? Yf(o, c) : Hf(o, s, c),
      firstRender: !1
    };
  }, r.handleExited = function(o, i) {
    var s = Fo(this.props.children);
    o.key in s || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(c) {
      var l = ln({}, c.children);
      return delete l[o.key], {
        children: l
      };
    }));
  }, r.render = function() {
    var o = this.props, i = o.component, s = o.childFactory, c = ps(o, ["component", "childFactory"]), l = this.state.contextValue, u = qf(this.state.children).map(s);
    return delete c.appear, delete c.enter, delete c.exit, i === null ? /* @__PURE__ */ pt.createElement(hn.Provider, {
      value: l
    }, u) : /* @__PURE__ */ pt.createElement(hn.Provider, {
      value: l
    }, /* @__PURE__ */ pt.createElement(i, c, u));
  }, t;
}(pt.Component);
zo.propTypes = process.env.NODE_ENV !== "production" ? {
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
zo.defaultProps = Gf;
const Kf = (e) => e.scrollTop;
function gn(e, t) {
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
function Xf(e) {
  return Ue("MuiCollapse", e);
}
Ye("MuiCollapse", ["root", "horizontal", "vertical", "entered", "hidden", "wrapper", "wrapperInner"]);
const Jf = (e) => {
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
  return Xe(n, Xf, r);
}, Qf = Se("div", {
  name: "MuiCollapse",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.orientation], r.state === "entered" && t.entered, r.state === "exited" && !r.in && r.collapsedSize === "0px" && t.hidden];
  }
})(tt(({
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
}))), Zf = Se("div", {
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
}), ep = Se("div", {
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
}), yn = /* @__PURE__ */ E.forwardRef(function(t, r) {
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
    in: d,
    onEnter: h,
    onEntered: g,
    onEntering: x,
    onExit: b,
    onExited: f,
    onExiting: S,
    orientation: T = "vertical",
    style: A,
    timeout: C = as.standard,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: y = Et,
    ...m
  } = n, w = {
    ...n,
    orientation: T,
    collapsedSize: c
  }, P = Jf(w), L = ir(), B = It(), p = E.useRef(null), k = E.useRef(), D = typeof c == "number" ? `${c}px` : c, j = T === "horizontal", W = j ? "width" : "height", z = E.useRef(null), U = at(r, z), V = (I) => (q) => {
    if (I) {
      const G = z.current;
      q === void 0 ? I(G) : I(G, q);
    }
  }, ee = () => p.current ? p.current[j ? "clientWidth" : "clientHeight"] : 0, F = V((I, q) => {
    p.current && j && (p.current.style.position = "absolute"), I.style[W] = D, h && h(I, q);
  }), R = V((I, q) => {
    const G = ee();
    p.current && j && (p.current.style.position = "");
    const {
      duration: te,
      easing: Z
    } = gn({
      style: A,
      timeout: C,
      easing: u
    }, {
      mode: "enter"
    });
    if (C === "auto") {
      const ae = L.transitions.getAutoHeightDuration(G);
      I.style.transitionDuration = `${ae}ms`, k.current = ae;
    } else
      I.style.transitionDuration = typeof te == "string" ? te : `${te}ms`;
    I.style[W] = `${G}px`, I.style.transitionTimingFunction = Z, x && x(I, q);
  }), _ = V((I, q) => {
    I.style[W] = "auto", g && g(I, q);
  }), J = V((I) => {
    I.style[W] = `${ee()}px`, b && b(I);
  }), Q = V(f), H = V((I) => {
    const q = ee(), {
      duration: G,
      easing: te
    } = gn({
      style: A,
      timeout: C,
      easing: u
    }, {
      mode: "exit"
    });
    if (C === "auto") {
      const Z = L.transitions.getAutoHeightDuration(q);
      I.style.transitionDuration = `${Z}ms`, k.current = Z;
    } else
      I.style.transitionDuration = typeof G == "string" ? G : `${G}ms`;
    I.style[W] = D, I.style.transitionTimingFunction = te, S && S(I);
  }), X = (I) => {
    C === "auto" && B.start(k.current || 0, I), o && o(z.current, I);
  };
  return /* @__PURE__ */ M.jsx(y, {
    in: d,
    onEnter: F,
    onEntered: _,
    onEntering: R,
    onExit: J,
    onExited: Q,
    onExiting: H,
    addEndListener: X,
    nodeRef: z,
    timeout: C === "auto" ? null : C,
    ...m,
    children: (I, {
      ownerState: q,
      ...G
    }) => /* @__PURE__ */ M.jsx(Qf, {
      as: l,
      className: ce(P.root, s, {
        entered: P.entered,
        exited: !d && D === "0px" && P.hidden
      }[I]),
      style: {
        [j ? "minWidth" : "minHeight"]: D,
        ...A
      },
      ref: U,
      ownerState: {
        ...w,
        state: I
      },
      ...G,
      children: /* @__PURE__ */ M.jsx(Zf, {
        ownerState: {
          ...w,
          state: I
        },
        className: P.wrapper,
        ref: p,
        children: /* @__PURE__ */ M.jsx(ep, {
          ownerState: {
            ...w,
            state: I
          },
          className: P.wrapperInner,
          children: i
        })
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (yn.propTypes = {
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
  component: Ha,
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
yn && (yn.muiSupportAuto = !0);
function Dt(e, t) {
  const {
    className: r,
    elementType: n,
    ownerState: o,
    externalForwardedProps: i,
    internalForwardedProps: s,
    ...c
  } = t, {
    component: l,
    slots: u = {
      [e]: void 0
    },
    slotProps: d = {
      [e]: void 0
    },
    ...h
  } = i, g = u[e] || n, x = Xa(d[e], o), {
    props: {
      component: b,
      ...f
    },
    internalRef: S
  } = Ka({
    className: r,
    ...c,
    externalForwardedProps: e === "root" ? h : void 0,
    externalSlotProps: x
  }), T = at(S, x == null ? void 0 : x.ref, t.ref), A = e === "root" ? b || l : b, C = Ga(g, {
    ...e === "root" && !l && !u[e] && s,
    ...e !== "root" && !u[e] && s,
    ...f,
    ...A && {
      as: A
    },
    ref: T
  }, o);
  return [g, C];
}
class bn {
  constructor() {
    sr(this, "mountEffect", () => {
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
    return new bn();
  }
  static use() {
    const t = qa(bn.create).current, [r, n] = E.useState(!1);
    return t.shouldMount = r, t.setShouldMount = n, E.useEffect(t.mountEffect, [r]), t;
  }
  mount() {
    return this.mounted || (this.mounted = rp(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function tp() {
  return bn.use();
}
function rp() {
  let e, t;
  const r = new Promise((n, o) => {
    e = n, t = o;
  });
  return r.resolve = e, r.reject = t, r;
}
function ms(e) {
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
  } = e, [d, h] = E.useState(!1), g = ce(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), x = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, b = ce(r.child, d && r.childLeaving, n && r.childPulsate);
  return !c && !d && h(!0), E.useEffect(() => {
    if (!c && l != null) {
      const f = setTimeout(l, u);
      return () => {
        clearTimeout(f);
      };
    }
  }, [l, c, u]), /* @__PURE__ */ M.jsx("span", {
    className: g,
    style: x,
    children: /* @__PURE__ */ M.jsx("span", {
      className: b
    })
  });
}
process.env.NODE_ENV !== "production" && (ms.propTypes = {
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
const nt = Ye("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), po = 550, np = 80, op = Co`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, ip = Co`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, ap = Co`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, sp = Se("span", {
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
}), cp = Se(ms, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${nt.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${op};
    animation-duration: ${po}ms;
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
    animation-name: ${ip};
    animation-duration: ${po}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${nt.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${ap};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, hs = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = He({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: s,
    ...c
  } = n, [l, u] = E.useState([]), d = E.useRef(0), h = E.useRef(null);
  E.useEffect(() => {
    h.current && (h.current(), h.current = null);
  }, [l]);
  const g = E.useRef(!1), x = It(), b = E.useRef(null), f = E.useRef(null), S = E.useCallback((y) => {
    const {
      pulsate: m,
      rippleX: w,
      rippleY: P,
      rippleSize: L,
      cb: B
    } = y;
    u((p) => [...p, /* @__PURE__ */ M.jsx(cp, {
      classes: {
        ripple: ce(i.ripple, nt.ripple),
        rippleVisible: ce(i.rippleVisible, nt.rippleVisible),
        ripplePulsate: ce(i.ripplePulsate, nt.ripplePulsate),
        child: ce(i.child, nt.child),
        childLeaving: ce(i.childLeaving, nt.childLeaving),
        childPulsate: ce(i.childPulsate, nt.childPulsate)
      },
      timeout: po,
      pulsate: m,
      rippleX: w,
      rippleY: P,
      rippleSize: L
    }, d.current)]), d.current += 1, h.current = B;
  }, [i]), T = E.useCallback((y = {}, m = {}, w = () => {
  }) => {
    const {
      pulsate: P = !1,
      center: L = o || m.pulsate,
      fakeElement: B = !1
      // For test purposes
    } = m;
    if ((y == null ? void 0 : y.type) === "mousedown" && g.current) {
      g.current = !1;
      return;
    }
    (y == null ? void 0 : y.type) === "touchstart" && (g.current = !0);
    const p = B ? null : f.current, k = p ? p.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let D, j, W;
    if (L || y === void 0 || y.clientX === 0 && y.clientY === 0 || !y.clientX && !y.touches)
      D = Math.round(k.width / 2), j = Math.round(k.height / 2);
    else {
      const {
        clientX: z,
        clientY: U
      } = y.touches && y.touches.length > 0 ? y.touches[0] : y;
      D = Math.round(z - k.left), j = Math.round(U - k.top);
    }
    if (L)
      W = Math.sqrt((2 * k.width ** 2 + k.height ** 2) / 3), W % 2 === 0 && (W += 1);
    else {
      const z = Math.max(Math.abs((p ? p.clientWidth : 0) - D), D) * 2 + 2, U = Math.max(Math.abs((p ? p.clientHeight : 0) - j), j) * 2 + 2;
      W = Math.sqrt(z ** 2 + U ** 2);
    }
    y != null && y.touches ? b.current === null && (b.current = () => {
      S({
        pulsate: P,
        rippleX: D,
        rippleY: j,
        rippleSize: W,
        cb: w
      });
    }, x.start(np, () => {
      b.current && (b.current(), b.current = null);
    })) : S({
      pulsate: P,
      rippleX: D,
      rippleY: j,
      rippleSize: W,
      cb: w
    });
  }, [o, S, x]), A = E.useCallback(() => {
    T({}, {
      pulsate: !0
    });
  }, [T]), C = E.useCallback((y, m) => {
    if (x.clear(), (y == null ? void 0 : y.type) === "touchend" && b.current) {
      b.current(), b.current = null, x.start(0, () => {
        C(y, m);
      });
      return;
    }
    b.current = null, u((w) => w.length > 0 ? w.slice(1) : w), h.current = m;
  }, [x]);
  return E.useImperativeHandle(r, () => ({
    pulsate: A,
    start: T,
    stop: C
  }), [A, T, C]), /* @__PURE__ */ M.jsx(sp, {
    className: ce(nt.root, i.root, s),
    ref: f,
    ...c,
    children: /* @__PURE__ */ M.jsx(zo, {
      component: null,
      exit: !0,
      children: l
    })
  });
});
process.env.NODE_ENV !== "production" && (hs.propTypes = {
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
function lp(e) {
  return Ue("MuiButtonBase", e);
}
const up = Ye("MuiButtonBase", ["root", "disabled", "focusVisible"]), fp = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, s = Xe({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, lp, o);
  return r && n && (s.root += ` ${n}`), s;
}, pp = Se("button", {
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
  [`&.${up.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Rr = /* @__PURE__ */ E.forwardRef(function(t, r) {
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
    disableRipple: d = !1,
    disableTouchRipple: h = !1,
    focusRipple: g = !1,
    focusVisibleClassName: x,
    LinkComponent: b = "a",
    onBlur: f,
    onClick: S,
    onContextMenu: T,
    onDragLeave: A,
    onFocus: C,
    onFocusVisible: y,
    onKeyDown: m,
    onKeyUp: w,
    onMouseDown: P,
    onMouseLeave: L,
    onMouseUp: B,
    onTouchEnd: p,
    onTouchMove: k,
    onTouchStart: D,
    tabIndex: j = 0,
    TouchRippleProps: W,
    touchRippleRef: z,
    type: U,
    ...V
  } = n, ee = E.useRef(null), F = tp(), R = at(F.ref, z), [_, J] = E.useState(!1);
  u && _ && J(!1), E.useImperativeHandle(o, () => ({
    focusVisible: () => {
      J(!0), ee.current.focus();
    }
  }), []);
  const Q = F.shouldMount && !d && !u;
  E.useEffect(() => {
    _ && g && !d && F.pulsate();
  }, [d, g, _, F]);
  const H = Ct(F, "start", P, h), X = Ct(F, "stop", T, h), I = Ct(F, "stop", A, h), q = Ct(F, "stop", B, h), G = Ct(F, "stop", (N) => {
    _ && N.preventDefault(), L && L(N);
  }, h), te = Ct(F, "start", D, h), Z = Ct(F, "stop", p, h), ae = Ct(F, "stop", k, h), O = Ct(F, "stop", (N) => {
    pn(N.target) || J(!1), f && f(N);
  }, !1), ge = Xt((N) => {
    ee.current || (ee.current = N.currentTarget), pn(N.target) && (J(!0), y && y(N)), C && C(N);
  }), Ee = () => {
    const N = ee.current;
    return l && l !== "button" && !(N.tagName === "A" && N.href);
  }, Me = Xt((N) => {
    g && !N.repeat && _ && N.key === " " && F.stop(N, () => {
      F.start(N);
    }), N.target === N.currentTarget && Ee() && N.key === " " && N.preventDefault(), m && m(N), N.target === N.currentTarget && Ee() && N.key === "Enter" && !u && (N.preventDefault(), S && S(N));
  }), Je = Xt((N) => {
    g && N.key === " " && _ && !N.defaultPrevented && F.stop(N, () => {
      F.pulsate(N);
    }), w && w(N), S && N.target === N.currentTarget && Ee() && N.key === " " && !N.defaultPrevented && S(N);
  });
  let be = l;
  be === "button" && (V.href || V.to) && (be = b);
  const Pe = {};
  be === "button" ? (Pe.type = U === void 0 ? "button" : U, Pe.disabled = u) : (!V.href && !V.to && (Pe.role = "button"), u && (Pe["aria-disabled"] = u));
  const Ve = at(r, ee), Le = {
    ...n,
    centerRipple: i,
    component: l,
    disabled: u,
    disableRipple: d,
    disableTouchRipple: h,
    focusRipple: g,
    tabIndex: j,
    focusVisible: _
  }, v = fp(Le);
  return /* @__PURE__ */ M.jsxs(pp, {
    as: be,
    className: ce(v.root, c),
    ownerState: Le,
    onBlur: O,
    onClick: S,
    onContextMenu: X,
    onFocus: ge,
    onKeyDown: Me,
    onKeyUp: Je,
    onMouseDown: H,
    onMouseLeave: G,
    onMouseUp: q,
    onDragLeave: I,
    onTouchEnd: Z,
    onTouchMove: ae,
    onTouchStart: te,
    ref: Ve,
    tabIndex: u ? -1 : j,
    type: U,
    ...Pe,
    ...V,
    children: [s, Q ? /* @__PURE__ */ M.jsx(hs, {
      ref: R,
      center: i,
      ...W
    }) : null]
  });
});
function Ct(e, t, r, n = !1) {
  return Xt((o) => (r && r(o), n || e[t](o), !0));
}
process.env.NODE_ENV !== "production" && (Rr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: _o,
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
  component: Ha,
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
function dp(e) {
  return typeof e.main == "string";
}
function mp(e, t = []) {
  if (!dp(e))
    return !1;
  for (const r of t)
    if (!e.hasOwnProperty(r) || typeof e[r] != "string")
      return !1;
  return !0;
}
function Lt(e = []) {
  return ([, t]) => t && mp(t, e);
}
function hp(e) {
  return Ue("MuiIconButton", e);
}
const gp = Ye("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), yp = (e) => {
  const {
    classes: t,
    disabled: r,
    color: n,
    edge: o,
    size: i
  } = e, s = {
    root: ["root", r && "disabled", n !== "default" && `color${re(n)}`, o && `edge${re(o)}`, `size${re(i)}`]
  };
  return Xe(s, hp, t);
}, bp = Se(Rr, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "default" && t[`color${re(r.color)}`], r.edge && t[`edge${re(r.edge)}`], t[`size${re(r.size)}`]];
  }
})(tt(({
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
})), tt(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(Lt()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette).filter(Lt()).map(([t]) => ({
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
  [`&.${gp.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  }
}))), gs = /* @__PURE__ */ E.forwardRef(function(t, r) {
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
    size: d = "medium",
    ...h
  } = n, g = {
    ...n,
    edge: o,
    color: c,
    disabled: l,
    disableFocusRipple: u,
    size: d
  }, x = yp(g);
  return /* @__PURE__ */ M.jsx(bp, {
    className: ce(x.root, s),
    centerRipple: !0,
    focusRipple: !u,
    disabled: l,
    ref: r,
    ...h,
    ownerState: g,
    children: i
  });
});
process.env.NODE_ENV !== "production" && (gs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: jr(a.node, (e) => E.Children.toArray(e.children).some((r) => /* @__PURE__ */ E.isValidElement(r) && r.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
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
function vp(e) {
  return Ue("MuiTypography", e);
}
const ra = Ye("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]), xp = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, Sp = Df(), Ep = (e) => {
  const {
    align: t,
    gutterBottom: r,
    noWrap: n,
    paragraph: o,
    variant: i,
    classes: s
  } = e, c = {
    root: ["root", i, e.align !== "inherit" && `align${re(t)}`, r && "gutterBottom", n && "noWrap", o && "paragraph"]
  };
  return Xe(c, vp, s);
}, Tp = Se("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.variant && t[r.variant], r.align !== "inherit" && t[`align${re(r.align)}`], r.noWrap && t.noWrap, r.gutterBottom && t.gutterBottom, r.paragraph && t.paragraph];
  }
})(tt(({
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
    })), ...Object.entries(e.palette).filter(Lt()).map(([r]) => ({
      props: {
        color: r
      },
      style: {
        color: (e.vars || e).palette[r].main
      }
    })), ...Object.entries(((t = e.palette) == null ? void 0 : t.text) || {}).filter(([, r]) => typeof r == "string").map(([r]) => ({
      props: {
        color: `text${re(r)}`
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
})), na = {
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
}, bt = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const {
    color: n,
    ...o
  } = He({
    props: t,
    name: "MuiTypography"
  }), i = !xp[n], s = Sp({
    ...o,
    ...i && {
      color: n
    }
  }), {
    align: c = "inherit",
    className: l,
    component: u,
    gutterBottom: d = !1,
    noWrap: h = !1,
    paragraph: g = !1,
    variant: x = "body1",
    variantMapping: b = na,
    ...f
  } = s, S = {
    ...s,
    align: c,
    color: n,
    className: l,
    component: u,
    gutterBottom: d,
    noWrap: h,
    paragraph: g,
    variant: x,
    variantMapping: b
  }, T = u || (g ? "p" : b[x] || na[x]) || "span", A = Ep(S);
  return /* @__PURE__ */ M.jsx(Tp, {
    as: T,
    ref: r,
    className: ce(A.root, l),
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
var qe = "top", st = "bottom", ct = "right", Ge = "left", Wo = "auto", Dr = [qe, st, ct, Ge], Zt = "start", $r = "end", Cp = "clippingParents", ys = "viewport", pr = "popper", wp = "reference", oa = /* @__PURE__ */ Dr.reduce(function(e, t) {
  return e.concat([t + "-" + Zt, t + "-" + $r]);
}, []), bs = /* @__PURE__ */ [].concat(Dr, [Wo]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Zt, t + "-" + $r]);
}, []), Op = "beforeRead", Rp = "read", $p = "afterRead", Pp = "beforeMain", kp = "main", Ap = "afterMain", Np = "beforeWrite", Mp = "write", _p = "afterWrite", Ip = [Op, Rp, $p, Pp, kp, Ap, Np, Mp, _p];
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
function Vt(e) {
  var t = rt(e).Element;
  return e instanceof t || e instanceof Element;
}
function it(e) {
  var t = rt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Uo(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = rt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function jp(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, o = t.attributes[r] || {}, i = t.elements[r];
    !it(i) || !St(i) || (Object.assign(i.style, n), Object.keys(o).forEach(function(s) {
      var c = o[s];
      c === !1 ? i.removeAttribute(s) : i.setAttribute(s, c === !0 ? "" : c);
    }));
  });
}
function Dp(e) {
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
const Lp = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: jp,
  effect: Dp,
  requires: ["computeStyles"]
};
function xt(e) {
  return e.split("-")[0];
}
var Bt = Math.max, vn = Math.min, er = Math.round;
function mo() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function vs() {
  return !/^((?!chrome|android).)*safari/i.test(mo());
}
function tr(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), o = 1, i = 1;
  t && it(e) && (o = e.offsetWidth > 0 && er(n.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && er(n.height) / e.offsetHeight || 1);
  var s = Vt(e) ? rt(e) : window, c = s.visualViewport, l = !vs() && r, u = (n.left + (l && c ? c.offsetLeft : 0)) / o, d = (n.top + (l && c ? c.offsetTop : 0)) / i, h = n.width / o, g = n.height / i;
  return {
    width: h,
    height: g,
    top: d,
    right: u + h,
    bottom: d + g,
    left: u,
    x: u,
    y: d
  };
}
function Yo(e) {
  var t = tr(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function xs(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && Uo(r)) {
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
function Bp(e) {
  return ["table", "td", "th"].indexOf(St(e)) >= 0;
}
function Nt(e) {
  return ((Vt(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Bn(e) {
  return St(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Uo(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Nt(e)
  );
}
function ia(e) {
  return !it(e) || // https://github.com/popperjs/popper-core/issues/837
  Rt(e).position === "fixed" ? null : e.offsetParent;
}
function Vp(e) {
  var t = /firefox/i.test(mo()), r = /Trident/i.test(mo());
  if (r && it(e)) {
    var n = Rt(e);
    if (n.position === "fixed")
      return null;
  }
  var o = Bn(e);
  for (Uo(o) && (o = o.host); it(o) && ["html", "body"].indexOf(St(o)) < 0; ) {
    var i = Rt(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Lr(e) {
  for (var t = rt(e), r = ia(e); r && Bp(r) && Rt(r).position === "static"; )
    r = ia(r);
  return r && (St(r) === "html" || St(r) === "body" && Rt(r).position === "static") ? t : r || Vp(e) || t;
}
function Ho(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function vr(e, t, r) {
  return Bt(e, vn(t, r));
}
function Fp(e, t, r) {
  var n = vr(e, t, r);
  return n > r ? r : n;
}
function Ss() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Es(e) {
  return Object.assign({}, Ss(), e);
}
function Ts(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var zp = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, Es(typeof t != "number" ? t : Ts(t, Dr));
};
function Wp(e) {
  var t, r = e.state, n = e.name, o = e.options, i = r.elements.arrow, s = r.modifiersData.popperOffsets, c = xt(r.placement), l = Ho(c), u = [Ge, ct].indexOf(c) >= 0, d = u ? "height" : "width";
  if (!(!i || !s)) {
    var h = zp(o.padding, r), g = Yo(i), x = l === "y" ? qe : Ge, b = l === "y" ? st : ct, f = r.rects.reference[d] + r.rects.reference[l] - s[l] - r.rects.popper[d], S = s[l] - r.rects.reference[l], T = Lr(i), A = T ? l === "y" ? T.clientHeight || 0 : T.clientWidth || 0 : 0, C = f / 2 - S / 2, y = h[x], m = A - g[d] - h[b], w = A / 2 - g[d] / 2 + C, P = vr(y, w, m), L = l;
    r.modifiersData[n] = (t = {}, t[L] = P, t.centerOffset = P - w, t);
  }
}
function Up(e) {
  var t = e.state, r = e.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || xs(t.elements.popper, o) && (t.elements.arrow = o));
}
const Yp = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Wp,
  effect: Up,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function rr(e) {
  return e.split("-")[1];
}
var Hp = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function qp(e, t) {
  var r = e.x, n = e.y, o = t.devicePixelRatio || 1;
  return {
    x: er(r * o) / o || 0,
    y: er(n * o) / o || 0
  };
}
function aa(e) {
  var t, r = e.popper, n = e.popperRect, o = e.placement, i = e.variation, s = e.offsets, c = e.position, l = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, h = e.isFixed, g = s.x, x = g === void 0 ? 0 : g, b = s.y, f = b === void 0 ? 0 : b, S = typeof d == "function" ? d({
    x,
    y: f
  }) : {
    x,
    y: f
  };
  x = S.x, f = S.y;
  var T = s.hasOwnProperty("x"), A = s.hasOwnProperty("y"), C = Ge, y = qe, m = window;
  if (u) {
    var w = Lr(r), P = "clientHeight", L = "clientWidth";
    if (w === rt(r) && (w = Nt(r), Rt(w).position !== "static" && c === "absolute" && (P = "scrollHeight", L = "scrollWidth")), w = w, o === qe || (o === Ge || o === ct) && i === $r) {
      y = st;
      var B = h && w === m && m.visualViewport ? m.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        w[P]
      );
      f -= B - n.height, f *= l ? 1 : -1;
    }
    if (o === Ge || (o === qe || o === st) && i === $r) {
      C = ct;
      var p = h && w === m && m.visualViewport ? m.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        w[L]
      );
      x -= p - n.width, x *= l ? 1 : -1;
    }
  }
  var k = Object.assign({
    position: c
  }, u && Hp), D = d === !0 ? qp({
    x,
    y: f
  }, rt(r)) : {
    x,
    y: f
  };
  if (x = D.x, f = D.y, l) {
    var j;
    return Object.assign({}, k, (j = {}, j[y] = A ? "0" : "", j[C] = T ? "0" : "", j.transform = (m.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + f + "px)" : "translate3d(" + x + "px, " + f + "px, 0)", j));
  }
  return Object.assign({}, k, (t = {}, t[y] = A ? f + "px" : "", t[C] = T ? x + "px" : "", t.transform = "", t));
}
function Gp(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, o = n === void 0 ? !0 : n, i = r.adaptive, s = i === void 0 ? !0 : i, c = r.roundOffsets, l = c === void 0 ? !0 : c, u = {
    placement: xt(t.placement),
    variation: rr(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, aa(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, aa(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Kp = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Gp,
  data: {}
};
var Jr = {
  passive: !0
};
function Xp(e) {
  var t = e.state, r = e.instance, n = e.options, o = n.scroll, i = o === void 0 ? !0 : o, s = n.resize, c = s === void 0 ? !0 : s, l = rt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, Jr);
  }), c && l.addEventListener("resize", r.update, Jr), function() {
    i && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, Jr);
    }), c && l.removeEventListener("resize", r.update, Jr);
  };
}
const Jp = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Xp,
  data: {}
};
var Qp = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function cn(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Qp[t];
  });
}
var Zp = {
  start: "end",
  end: "start"
};
function sa(e) {
  return e.replace(/start|end/g, function(t) {
    return Zp[t];
  });
}
function qo(e) {
  var t = rt(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function Go(e) {
  return tr(Nt(e)).left + qo(e).scrollLeft;
}
function ed(e, t) {
  var r = rt(e), n = Nt(e), o = r.visualViewport, i = n.clientWidth, s = n.clientHeight, c = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    var u = vs();
    (u || !u && t === "fixed") && (c = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: c + Go(e),
    y: l
  };
}
function td(e) {
  var t, r = Nt(e), n = qo(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = Bt(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = Bt(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), c = -n.scrollLeft + Go(e), l = -n.scrollTop;
  return Rt(o || r).direction === "rtl" && (c += Bt(r.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: c,
    y: l
  };
}
function Ko(e) {
  var t = Rt(e), r = t.overflow, n = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function Cs(e) {
  return ["html", "body", "#document"].indexOf(St(e)) >= 0 ? e.ownerDocument.body : it(e) && Ko(e) ? e : Cs(Bn(e));
}
function xr(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = Cs(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), i = rt(n), s = o ? [i].concat(i.visualViewport || [], Ko(n) ? n : []) : n, c = t.concat(s);
  return o ? c : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    c.concat(xr(Bn(s)))
  );
}
function ho(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function rd(e, t) {
  var r = tr(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function ca(e, t, r) {
  return t === ys ? ho(ed(e, r)) : Vt(t) ? rd(t, r) : ho(td(Nt(e)));
}
function nd(e) {
  var t = xr(Bn(e)), r = ["absolute", "fixed"].indexOf(Rt(e).position) >= 0, n = r && it(e) ? Lr(e) : e;
  return Vt(n) ? t.filter(function(o) {
    return Vt(o) && xs(o, n) && St(o) !== "body";
  }) : [];
}
function od(e, t, r, n) {
  var o = t === "clippingParents" ? nd(e) : [].concat(t), i = [].concat(o, [r]), s = i[0], c = i.reduce(function(l, u) {
    var d = ca(e, u, n);
    return l.top = Bt(d.top, l.top), l.right = vn(d.right, l.right), l.bottom = vn(d.bottom, l.bottom), l.left = Bt(d.left, l.left), l;
  }, ca(e, s, n));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function ws(e) {
  var t = e.reference, r = e.element, n = e.placement, o = n ? xt(n) : null, i = n ? rr(n) : null, s = t.x + t.width / 2 - r.width / 2, c = t.y + t.height / 2 - r.height / 2, l;
  switch (o) {
    case qe:
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
    case Ge:
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
  var u = o ? Ho(o) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (i) {
      case Zt:
        l[u] = l[u] - (t[d] / 2 - r[d] / 2);
        break;
      case $r:
        l[u] = l[u] + (t[d] / 2 - r[d] / 2);
        break;
    }
  }
  return l;
}
function Pr(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = n === void 0 ? e.placement : n, i = r.strategy, s = i === void 0 ? e.strategy : i, c = r.boundary, l = c === void 0 ? Cp : c, u = r.rootBoundary, d = u === void 0 ? ys : u, h = r.elementContext, g = h === void 0 ? pr : h, x = r.altBoundary, b = x === void 0 ? !1 : x, f = r.padding, S = f === void 0 ? 0 : f, T = Es(typeof S != "number" ? S : Ts(S, Dr)), A = g === pr ? wp : pr, C = e.rects.popper, y = e.elements[b ? A : g], m = od(Vt(y) ? y : y.contextElement || Nt(e.elements.popper), l, d, s), w = tr(e.elements.reference), P = ws({
    reference: w,
    element: C,
    strategy: "absolute",
    placement: o
  }), L = ho(Object.assign({}, C, P)), B = g === pr ? L : w, p = {
    top: m.top - B.top + T.top,
    bottom: B.bottom - m.bottom + T.bottom,
    left: m.left - B.left + T.left,
    right: B.right - m.right + T.right
  }, k = e.modifiersData.offset;
  if (g === pr && k) {
    var D = k[o];
    Object.keys(p).forEach(function(j) {
      var W = [ct, st].indexOf(j) >= 0 ? 1 : -1, z = [qe, st].indexOf(j) >= 0 ? "y" : "x";
      p[j] += D[z] * W;
    });
  }
  return p;
}
function id(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = r.boundary, i = r.rootBoundary, s = r.padding, c = r.flipVariations, l = r.allowedAutoPlacements, u = l === void 0 ? bs : l, d = rr(n), h = d ? c ? oa : oa.filter(function(b) {
    return rr(b) === d;
  }) : Dr, g = h.filter(function(b) {
    return u.indexOf(b) >= 0;
  });
  g.length === 0 && (g = h);
  var x = g.reduce(function(b, f) {
    return b[f] = Pr(e, {
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
function ad(e) {
  if (xt(e) === Wo)
    return [];
  var t = cn(e);
  return [sa(e), t, sa(t)];
}
function sd(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = r.mainAxis, i = o === void 0 ? !0 : o, s = r.altAxis, c = s === void 0 ? !0 : s, l = r.fallbackPlacements, u = r.padding, d = r.boundary, h = r.rootBoundary, g = r.altBoundary, x = r.flipVariations, b = x === void 0 ? !0 : x, f = r.allowedAutoPlacements, S = t.options.placement, T = xt(S), A = T === S, C = l || (A || !b ? [cn(S)] : ad(S)), y = [S].concat(C).reduce(function(H, X) {
      return H.concat(xt(X) === Wo ? id(t, {
        placement: X,
        boundary: d,
        rootBoundary: h,
        padding: u,
        flipVariations: b,
        allowedAutoPlacements: f
      }) : X);
    }, []), m = t.rects.reference, w = t.rects.popper, P = /* @__PURE__ */ new Map(), L = !0, B = y[0], p = 0; p < y.length; p++) {
      var k = y[p], D = xt(k), j = rr(k) === Zt, W = [qe, st].indexOf(D) >= 0, z = W ? "width" : "height", U = Pr(t, {
        placement: k,
        boundary: d,
        rootBoundary: h,
        altBoundary: g,
        padding: u
      }), V = W ? j ? ct : Ge : j ? st : qe;
      m[z] > w[z] && (V = cn(V));
      var ee = cn(V), F = [];
      if (i && F.push(U[D] <= 0), c && F.push(U[V] <= 0, U[ee] <= 0), F.every(function(H) {
        return H;
      })) {
        B = k, L = !1;
        break;
      }
      P.set(k, F);
    }
    if (L)
      for (var R = b ? 3 : 1, _ = function(X) {
        var I = y.find(function(q) {
          var G = P.get(q);
          if (G)
            return G.slice(0, X).every(function(te) {
              return te;
            });
        });
        if (I)
          return B = I, "break";
      }, J = R; J > 0; J--) {
        var Q = _(J);
        if (Q === "break") break;
      }
    t.placement !== B && (t.modifiersData[n]._skip = !0, t.placement = B, t.reset = !0);
  }
}
const cd = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: sd,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function la(e, t, r) {
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
function ua(e) {
  return [qe, ct, st, Ge].some(function(t) {
    return e[t] >= 0;
  });
}
function ld(e) {
  var t = e.state, r = e.name, n = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, s = Pr(t, {
    elementContext: "reference"
  }), c = Pr(t, {
    altBoundary: !0
  }), l = la(s, n), u = la(c, o, i), d = ua(l), h = ua(u);
  t.modifiersData[r] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: u,
    isReferenceHidden: d,
    hasPopperEscaped: h
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": d,
    "data-popper-escaped": h
  });
}
const ud = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: ld
};
function fd(e, t, r) {
  var n = xt(e), o = [Ge, qe].indexOf(n) >= 0 ? -1 : 1, i = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, s = i[0], c = i[1];
  return s = s || 0, c = (c || 0) * o, [Ge, ct].indexOf(n) >= 0 ? {
    x: c,
    y: s
  } : {
    x: s,
    y: c
  };
}
function pd(e) {
  var t = e.state, r = e.options, n = e.name, o = r.offset, i = o === void 0 ? [0, 0] : o, s = bs.reduce(function(d, h) {
    return d[h] = fd(h, t.rects, i), d;
  }, {}), c = s[t.placement], l = c.x, u = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[n] = s;
}
const dd = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: pd
};
function md(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = ws({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const hd = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: md,
  data: {}
};
function gd(e) {
  return e === "x" ? "y" : "x";
}
function yd(e) {
  var t = e.state, r = e.options, n = e.name, o = r.mainAxis, i = o === void 0 ? !0 : o, s = r.altAxis, c = s === void 0 ? !1 : s, l = r.boundary, u = r.rootBoundary, d = r.altBoundary, h = r.padding, g = r.tether, x = g === void 0 ? !0 : g, b = r.tetherOffset, f = b === void 0 ? 0 : b, S = Pr(t, {
    boundary: l,
    rootBoundary: u,
    padding: h,
    altBoundary: d
  }), T = xt(t.placement), A = rr(t.placement), C = !A, y = Ho(T), m = gd(y), w = t.modifiersData.popperOffsets, P = t.rects.reference, L = t.rects.popper, B = typeof f == "function" ? f(Object.assign({}, t.rects, {
    placement: t.placement
  })) : f, p = typeof B == "number" ? {
    mainAxis: B,
    altAxis: B
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, B), k = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, D = {
    x: 0,
    y: 0
  };
  if (w) {
    if (i) {
      var j, W = y === "y" ? qe : Ge, z = y === "y" ? st : ct, U = y === "y" ? "height" : "width", V = w[y], ee = V + S[W], F = V - S[z], R = x ? -L[U] / 2 : 0, _ = A === Zt ? P[U] : L[U], J = A === Zt ? -L[U] : -P[U], Q = t.elements.arrow, H = x && Q ? Yo(Q) : {
        width: 0,
        height: 0
      }, X = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ss(), I = X[W], q = X[z], G = vr(0, P[U], H[U]), te = C ? P[U] / 2 - R - G - I - p.mainAxis : _ - G - I - p.mainAxis, Z = C ? -P[U] / 2 + R + G + q + p.mainAxis : J + G + q + p.mainAxis, ae = t.elements.arrow && Lr(t.elements.arrow), O = ae ? y === "y" ? ae.clientTop || 0 : ae.clientLeft || 0 : 0, ge = (j = k == null ? void 0 : k[y]) != null ? j : 0, Ee = V + te - ge - O, Me = V + Z - ge, Je = vr(x ? vn(ee, Ee) : ee, V, x ? Bt(F, Me) : F);
      w[y] = Je, D[y] = Je - V;
    }
    if (c) {
      var be, Pe = y === "x" ? qe : Ge, Ve = y === "x" ? st : ct, Le = w[m], v = m === "y" ? "height" : "width", N = Le + S[Pe], Y = Le - S[Ve], oe = [qe, Ge].indexOf(T) !== -1, Re = (be = k == null ? void 0 : k[m]) != null ? be : 0, le = oe ? N : Le - P[v] - L[v] - Re + p.altAxis, K = oe ? Le + P[v] + L[v] - Re - p.altAxis : Y, ye = x && oe ? Fp(le, Le, K) : vr(x ? le : N, Le, x ? K : Y);
      w[m] = ye, D[m] = ye - Le;
    }
    t.modifiersData[n] = D;
  }
}
const bd = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: yd,
  requiresIfExists: ["offset"]
};
function vd(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function xd(e) {
  return e === rt(e) || !it(e) ? qo(e) : vd(e);
}
function Sd(e) {
  var t = e.getBoundingClientRect(), r = er(t.width) / e.offsetWidth || 1, n = er(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Ed(e, t, r) {
  r === void 0 && (r = !1);
  var n = it(t), o = it(t) && Sd(t), i = Nt(t), s = tr(e, o, r), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((St(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Ko(i)) && (c = xd(t)), it(t) ? (l = tr(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : i && (l.x = Go(i))), {
    x: s.left + c.scrollLeft - l.x,
    y: s.top + c.scrollTop - l.y,
    width: s.width,
    height: s.height
  };
}
function Td(e) {
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
function Cd(e) {
  var t = Td(e);
  return Ip.reduce(function(r, n) {
    return r.concat(t.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function wd(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function Od(e) {
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
var fa = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function pa() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Rd(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, o = t.defaultOptions, i = o === void 0 ? fa : o;
  return function(c, l, u) {
    u === void 0 && (u = i);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, fa, i),
      modifiersData: {},
      elements: {
        reference: c,
        popper: l
      },
      attributes: {},
      styles: {}
    }, h = [], g = !1, x = {
      state: d,
      setOptions: function(T) {
        var A = typeof T == "function" ? T(d.options) : T;
        f(), d.options = Object.assign({}, i, d.options, A), d.scrollParents = {
          reference: Vt(c) ? xr(c) : c.contextElement ? xr(c.contextElement) : [],
          popper: xr(l)
        };
        var C = Cd(Od([].concat(n, d.options.modifiers)));
        return d.orderedModifiers = C.filter(function(y) {
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
          var T = d.elements, A = T.reference, C = T.popper;
          if (pa(A, C)) {
            d.rects = {
              reference: Ed(A, Lr(C), d.options.strategy === "fixed"),
              popper: Yo(C)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(p) {
              return d.modifiersData[p.name] = Object.assign({}, p.data);
            });
            for (var y = 0; y < d.orderedModifiers.length; y++) {
              if (d.reset === !0) {
                d.reset = !1, y = -1;
                continue;
              }
              var m = d.orderedModifiers[y], w = m.fn, P = m.options, L = P === void 0 ? {} : P, B = m.name;
              typeof w == "function" && (d = w({
                state: d,
                options: L,
                name: B,
                instance: x
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: wd(function() {
        return new Promise(function(S) {
          x.forceUpdate(), S(d);
        });
      }),
      destroy: function() {
        f(), g = !0;
      }
    };
    if (!pa(c, l))
      return x;
    x.setOptions(u).then(function(S) {
      !g && u.onFirstUpdate && u.onFirstUpdate(S);
    });
    function b() {
      d.orderedModifiers.forEach(function(S) {
        var T = S.name, A = S.options, C = A === void 0 ? {} : A, y = S.effect;
        if (typeof y == "function") {
          var m = y({
            state: d,
            name: T,
            instance: x,
            options: C
          }), w = function() {
          };
          h.push(m || w);
        }
      });
    }
    function f() {
      h.forEach(function(S) {
        return S();
      }), h = [];
    }
    return x;
  };
}
var $d = [Jp, hd, Kp, Lp, dd, cd, bd, Yp, ud], Pd = /* @__PURE__ */ Rd({
  defaultModifiers: $d
});
function kd(e) {
  return typeof e == "function" ? e() : e;
}
const xn = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const {
    children: n,
    container: o,
    disablePortal: i = !1
  } = t, [s, c] = E.useState(null), l = at(/* @__PURE__ */ E.isValidElement(n) ? Io(n) : null, r);
  if (Qt(() => {
    i || c(kd(o) || document.body);
  }, [o, i]), Qt(() => {
    if (s && !i)
      return co(r, s), () => {
        co(r, null);
      };
  }, [r, s, i]), i) {
    if (/* @__PURE__ */ E.isValidElement(n)) {
      const u = {
        ref: l
      };
      return /* @__PURE__ */ E.cloneElement(n, u);
    }
    return n;
  }
  return s && /* @__PURE__ */ Ys.createPortal(n, s);
});
process.env.NODE_ENV !== "production" && (xn.propTypes = {
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
  container: a.oneOfType([wr, a.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: a.bool
});
process.env.NODE_ENV !== "production" && (xn.propTypes = Mo(xn.propTypes));
function Ad(e) {
  return Ue("MuiPopper", e);
}
Ye("MuiPopper", ["root"]);
function Nd(e, t) {
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
function Sn(e) {
  return typeof e == "function" ? e() : e;
}
function Vn(e) {
  return e.nodeType !== void 0;
}
function Md(e) {
  return !Vn(e);
}
const _d = (e) => {
  const {
    classes: t
  } = e;
  return Xe({
    root: ["root"]
  }, Ad, t);
}, Id = {}, jd = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const {
    anchorEl: n,
    children: o,
    direction: i,
    disablePortal: s,
    modifiers: c,
    open: l,
    placement: u,
    popperOptions: d,
    popperRef: h,
    slotProps: g = {},
    slots: x = {},
    TransitionProps: b,
    // @ts-ignore internal logic
    ownerState: f,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...S
  } = t, T = E.useRef(null), A = at(T, r), C = E.useRef(null), y = at(C, h), m = E.useRef(y);
  Qt(() => {
    m.current = y;
  }, [y]), E.useImperativeHandle(h, () => C.current, []);
  const w = Nd(u, i), [P, L] = E.useState(w), [B, p] = E.useState(Sn(n));
  E.useEffect(() => {
    C.current && C.current.forceUpdate();
  }), E.useEffect(() => {
    n && p(Sn(n));
  }, [n]), Qt(() => {
    if (!B || !l)
      return;
    const z = (ee) => {
      L(ee.placement);
    };
    if (process.env.NODE_ENV !== "production" && B && Vn(B) && B.nodeType === 1) {
      const ee = B.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && ee.top === 0 && ee.left === 0 && ee.right === 0 && ee.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
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
        state: ee
      }) => {
        z(ee);
      }
    }];
    c != null && (U = U.concat(c)), d && d.modifiers != null && (U = U.concat(d.modifiers));
    const V = Pd(B, T.current, {
      placement: w,
      ...d,
      modifiers: U
    });
    return m.current(V), () => {
      V.destroy(), m.current(null);
    };
  }, [B, s, c, l, d, w]);
  const k = {
    placement: P
  };
  b !== null && (k.TransitionProps = b);
  const D = _d(t), j = x.root ?? "div", W = Bu({
    elementType: j,
    externalSlotProps: g.root,
    externalForwardedProps: S,
    additionalProps: {
      role: "tooltip",
      ref: A
    },
    ownerState: t,
    className: D.root
  });
  return /* @__PURE__ */ M.jsx(j, {
    ...W,
    children: typeof o == "function" ? o(k) : o
  });
}), Os = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const {
    anchorEl: n,
    children: o,
    container: i,
    direction: s = "ltr",
    disablePortal: c = !1,
    keepMounted: l = !1,
    modifiers: u,
    open: d,
    placement: h = "bottom",
    popperOptions: g = Id,
    popperRef: x,
    style: b,
    transition: f = !1,
    slotProps: S = {},
    slots: T = {},
    ...A
  } = t, [C, y] = E.useState(!0), m = () => {
    y(!1);
  }, w = () => {
    y(!0);
  };
  if (!l && !d && (!f || C))
    return null;
  let P;
  if (i)
    P = i;
  else if (n) {
    const p = Sn(n);
    P = p && Vn(p) ? Li(p).body : Li(null).body;
  }
  const L = !d && l && (!f || C) ? "none" : void 0, B = f ? {
    in: d,
    onEnter: m,
    onExited: w
  } : void 0;
  return /* @__PURE__ */ M.jsx(xn, {
    disablePortal: c,
    container: P,
    children: /* @__PURE__ */ M.jsx(jd, {
      anchorEl: n,
      direction: s,
      disablePortal: c,
      modifiers: u,
      ref: r,
      open: f ? !C : d,
      placement: h,
      popperOptions: g,
      popperRef: x,
      slotProps: S,
      slots: T,
      ...A,
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
process.env.NODE_ENV !== "production" && (Os.propTypes = {
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
  anchorEl: jr(a.oneOfType([wr, a.object, a.func]), (e) => {
    if (e.open) {
      const t = Sn(e.anchorEl);
      if (t && Vn(t) && t.nodeType === 1) {
        const r = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && r.top === 0 && r.left === 0 && r.right === 0 && r.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || Md(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
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
  container: a.oneOfType([wr, a.func]),
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
  popperRef: _o,
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
const Dd = Se(Os, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Xo = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = Za(), o = He({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: i,
    component: s,
    components: c,
    componentsProps: l,
    container: u,
    disablePortal: d,
    keepMounted: h,
    modifiers: g,
    open: x,
    placement: b,
    popperOptions: f,
    popperRef: S,
    transition: T,
    slots: A,
    slotProps: C,
    ...y
  } = o, m = (A == null ? void 0 : A.root) ?? (c == null ? void 0 : c.Root), w = {
    anchorEl: i,
    container: u,
    disablePortal: d,
    keepMounted: h,
    modifiers: g,
    open: x,
    placement: b,
    popperOptions: f,
    popperRef: S,
    transition: T,
    ...y
  };
  return /* @__PURE__ */ M.jsx(Dd, {
    as: s,
    direction: n ? "rtl" : "ltr",
    slots: {
      root: m
    },
    slotProps: C ?? l,
    ...w,
    ref: r
  });
});
process.env.NODE_ENV !== "production" && (Xo.propTypes = {
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
  anchorEl: a.oneOfType([wr, a.object, a.func]),
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
  container: a.oneOfType([wr, a.func]),
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
  popperRef: _o,
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
function Ld(e) {
  return Ue("MuiListSubheader", e);
}
Ye("MuiListSubheader", ["root", "colorPrimary", "colorInherit", "gutters", "inset", "sticky"]);
const Bd = (e) => {
  const {
    classes: t,
    color: r,
    disableGutters: n,
    inset: o,
    disableSticky: i
  } = e, s = {
    root: ["root", r !== "default" && `color${re(r)}`, !n && "gutters", o && "inset", !i && "sticky"]
  };
  return Xe(s, Ld, t);
}, Vd = Se("li", {
  name: "MuiListSubheader",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "default" && t[`color${re(r.color)}`], !r.disableGutters && t.gutters, r.inset && t.inset, !r.disableSticky && t.sticky];
  }
})(tt(({
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
}))), En = /* @__PURE__ */ E.forwardRef(function(t, r) {
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
    ...d
  } = n, h = {
    ...n,
    color: i,
    component: s,
    disableGutters: c,
    disableSticky: l,
    inset: u
  }, g = Bd(h);
  return /* @__PURE__ */ M.jsx(Vd, {
    as: s,
    className: ce(g.root, o),
    ref: r,
    ownerState: h,
    ...d
  });
});
En && (En.muiSkipListHighlight = !0);
process.env.NODE_ENV !== "production" && (En.propTypes = {
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
const Fd = ar(/* @__PURE__ */ M.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function zd(e) {
  return Ue("MuiChip", e);
}
const ie = Ye("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), Wd = (e) => {
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
    root: ["root", l, r && "disabled", `size${re(n)}`, `color${re(o)}`, c && "clickable", c && `clickableColor${re(o)}`, s && "deletable", s && `deletableColor${re(o)}`, `${l}${re(o)}`],
    label: ["label", `label${re(n)}`],
    avatar: ["avatar", `avatar${re(n)}`, `avatarColor${re(o)}`],
    icon: ["icon", `icon${re(n)}`, `iconColor${re(i)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${re(n)}`, `deleteIconColor${re(o)}`, `deleteIcon${re(l)}Color${re(o)}`]
  };
  return Xe(u, zd, t);
}, Ud = Se("div", {
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
      [`& .${ie.avatar}`]: t[`avatar${re(c)}`]
    }, {
      [`& .${ie.avatar}`]: t[`avatarColor${re(n)}`]
    }, {
      [`& .${ie.icon}`]: t.icon
    }, {
      [`& .${ie.icon}`]: t[`icon${re(c)}`]
    }, {
      [`& .${ie.icon}`]: t[`iconColor${re(o)}`]
    }, {
      [`& .${ie.deleteIcon}`]: t.deleteIcon
    }, {
      [`& .${ie.deleteIcon}`]: t[`deleteIcon${re(c)}`]
    }, {
      [`& .${ie.deleteIcon}`]: t[`deleteIconColor${re(n)}`]
    }, {
      [`& .${ie.deleteIcon}`]: t[`deleteIcon${re(l)}Color${re(n)}`]
    }, t.root, t[`size${re(c)}`], t[`color${re(n)}`], i && t.clickable, i && n !== "default" && t[`clickableColor${re(n)})`], s && t.deletable, s && n !== "default" && t[`deletableColor${re(n)}`], t[l], t[`${l}${re(n)}`]];
  }
})(tt(({
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
    }, ...Object.entries(e.palette).filter(Lt(["contrastText"])).map(([r]) => ({
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
    }, ...Object.entries(e.palette).filter(Lt(["dark"])).map(([r]) => ({
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
    }, ...Object.entries(e.palette).filter(Lt(["dark"])).map(([r]) => ({
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
    }, ...Object.entries(e.palette).filter(Lt()).map(([r]) => ({
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
})), Yd = Se("span", {
  name: "MuiChip",
  slot: "Label",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e, {
      size: n
    } = r;
    return [t.label, t[`label${re(n)}`]];
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
function da(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const Rs = /* @__PURE__ */ E.forwardRef(function(t, r) {
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
    disabled: d = !1,
    icon: h,
    label: g,
    onClick: x,
    onDelete: b,
    onKeyDown: f,
    onKeyUp: S,
    size: T = "medium",
    variant: A = "filled",
    tabIndex: C,
    skipFocusWhenDisabled: y = !1,
    // TODO v6: Rename to `focusableWhenDisabled`.
    ...m
  } = n, w = E.useRef(null), P = at(w, r), L = (F) => {
    F.stopPropagation(), b && b(F);
  }, B = (F) => {
    F.currentTarget === F.target && da(F) && F.preventDefault(), f && f(F);
  }, p = (F) => {
    F.currentTarget === F.target && b && da(F) && b(F), S && S(F);
  }, k = s !== !1 && x ? !0 : s, D = k || b ? Rr : l || "div", j = {
    ...n,
    component: D,
    disabled: d,
    size: T,
    color: c,
    iconColor: /* @__PURE__ */ E.isValidElement(h) && h.props.color || c,
    onDelete: !!b,
    clickable: k,
    variant: A
  }, W = Wd(j), z = D === Rr ? {
    component: l || "div",
    focusVisibleClassName: W.focusVisible,
    ...b && {
      disableRipple: !0
    }
  } : {};
  let U = null;
  b && (U = u && /* @__PURE__ */ E.isValidElement(u) ? /* @__PURE__ */ E.cloneElement(u, {
    className: ce(u.props.className, W.deleteIcon),
    onClick: L
  }) : /* @__PURE__ */ M.jsx(Fd, {
    className: ce(W.deleteIcon),
    onClick: L
  }));
  let V = null;
  o && /* @__PURE__ */ E.isValidElement(o) && (V = /* @__PURE__ */ E.cloneElement(o, {
    className: ce(W.avatar, o.props.className)
  }));
  let ee = null;
  return h && /* @__PURE__ */ E.isValidElement(h) && (ee = /* @__PURE__ */ E.cloneElement(h, {
    className: ce(W.icon, h.props.className)
  })), process.env.NODE_ENV !== "production" && V && ee && console.error("MUI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one."), /* @__PURE__ */ M.jsxs(Ud, {
    as: D,
    className: ce(W.root, i),
    disabled: k && d ? !0 : void 0,
    onClick: x,
    onKeyDown: B,
    onKeyUp: p,
    ref: P,
    tabIndex: y && d ? -1 : C,
    ownerState: j,
    ...z,
    ...m,
    children: [V || ee, /* @__PURE__ */ M.jsx(Yd, {
      className: ce(W.label),
      ownerState: j,
      children: g
    }), U]
  });
});
process.env.NODE_ENV !== "production" && (Rs.propTypes = {
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
  children: Mu,
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
const Hd = ar(/* @__PURE__ */ M.jsx("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), "Person");
function qd(e) {
  return Ue("MuiAvatar", e);
}
Ye("MuiAvatar", ["root", "colorDefault", "circular", "rounded", "square", "img", "fallback"]);
const Gd = (e) => {
  const {
    classes: t,
    variant: r,
    colorDefault: n
  } = e;
  return Xe({
    root: ["root", r, n && "colorDefault"],
    img: ["img"],
    fallback: ["fallback"]
  }, qd, t);
}, Kd = Se("div", {
  name: "MuiAvatar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], r.colorDefault && t.colorDefault];
  }
})(tt(({
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
}))), Xd = Se("img", {
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
}), Jd = Se(Hd, {
  name: "MuiAvatar",
  slot: "Fallback",
  overridesResolver: (e, t) => t.fallback
})({
  width: "75%",
  height: "75%"
});
function Qd({
  crossOrigin: e,
  referrerPolicy: t,
  src: r,
  srcSet: n
}) {
  const [o, i] = E.useState(!1);
  return E.useEffect(() => {
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
const $s = /* @__PURE__ */ E.forwardRef(function(t, r) {
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
    imgProps: d,
    sizes: h,
    src: g,
    srcSet: x,
    variant: b = "circular",
    ...f
  } = n;
  let S = null;
  const T = {
    ...n,
    component: c,
    variant: b
  }, A = Qd({
    ...d,
    ...typeof u.img == "function" ? u.img(T) : u.img,
    src: g,
    srcSet: x
  }), C = g || x, y = C && A !== "error";
  T.colorDefault = !y, delete T.ownerState;
  const m = Gd(T), [w, P] = Dt("img", {
    className: m.img,
    elementType: Xd,
    externalForwardedProps: {
      slots: l,
      slotProps: {
        img: {
          ...d,
          ...u.img
        }
      }
    },
    additionalProps: {
      alt: o,
      src: g,
      srcSet: x,
      sizes: h
    },
    ownerState: T
  });
  return y ? S = /* @__PURE__ */ M.jsx(w, {
    ...P
  }) : i || i === 0 ? S = i : C && o ? S = o[0] : S = /* @__PURE__ */ M.jsx(Jd, {
    ownerState: T,
    className: m.fallback
  }), /* @__PURE__ */ M.jsx(Kd, {
    as: c,
    className: ce(m.root, s),
    ref: r,
    ...f,
    ownerState: T,
    children: S
  });
});
process.env.NODE_ENV !== "production" && ($s.propTypes = {
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
const Zd = Ye("MuiBox", ["root"]), em = Ln(), dt = cu({
  themeId: wt,
  defaultTheme: em,
  defaultClassName: Zd.root,
  generateClassName: La.generate
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
function go(e) {
  return `scale(${e}, ${e ** 2})`;
}
const tm = {
  entering: {
    opacity: 1,
    transform: go(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, to = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Tn = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const {
    addEndListener: n,
    appear: o = !0,
    children: i,
    easing: s,
    in: c,
    onEnter: l,
    onEntered: u,
    onEntering: d,
    onExit: h,
    onExited: g,
    onExiting: x,
    style: b,
    timeout: f = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: S = Et,
    ...T
  } = t, A = It(), C = E.useRef(), y = ir(), m = E.useRef(null), w = at(m, Io(i), r), P = (z) => (U) => {
    if (z) {
      const V = m.current;
      U === void 0 ? z(V) : z(V, U);
    }
  }, L = P(d), B = P((z, U) => {
    Kf(z);
    const {
      duration: V,
      delay: ee,
      easing: F
    } = gn({
      style: b,
      timeout: f,
      easing: s
    }, {
      mode: "enter"
    });
    let R;
    f === "auto" ? (R = y.transitions.getAutoHeightDuration(z.clientHeight), C.current = R) : R = V, z.style.transition = [y.transitions.create("opacity", {
      duration: R,
      delay: ee
    }), y.transitions.create("transform", {
      duration: to ? R : R * 0.666,
      delay: ee,
      easing: F
    })].join(","), l && l(z, U);
  }), p = P(u), k = P(x), D = P((z) => {
    const {
      duration: U,
      delay: V,
      easing: ee
    } = gn({
      style: b,
      timeout: f,
      easing: s
    }, {
      mode: "exit"
    });
    let F;
    f === "auto" ? (F = y.transitions.getAutoHeightDuration(z.clientHeight), C.current = F) : F = U, z.style.transition = [y.transitions.create("opacity", {
      duration: F,
      delay: V
    }), y.transitions.create("transform", {
      duration: to ? F : F * 0.666,
      delay: to ? V : V || F * 0.333,
      easing: ee
    })].join(","), z.style.opacity = 0, z.style.transform = go(0.75), h && h(z);
  }), j = P(g), W = (z) => {
    f === "auto" && A.start(C.current || 0, z), n && n(m.current, z);
  };
  return /* @__PURE__ */ M.jsx(S, {
    appear: o,
    in: c,
    nodeRef: m,
    onEnter: B,
    onEntered: p,
    onEntering: L,
    onExit: D,
    onExited: j,
    onExiting: k,
    addEndListener: W,
    timeout: f === "auto" ? null : f,
    ...T,
    children: (z, {
      ownerState: U,
      ...V
    }) => /* @__PURE__ */ E.cloneElement(i, {
      style: {
        opacity: 0,
        transform: go(0.75),
        visibility: z === "exited" && !c ? "hidden" : void 0,
        ...tm[z],
        ...b,
        ...i.props.style
      },
      ref: w,
      ...V
    })
  });
});
process.env.NODE_ENV !== "production" && (Tn.propTypes = {
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
  children: No.isRequired,
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
Tn && (Tn.muiSupportAuto = !0);
const nr = /* @__PURE__ */ E.createContext({});
process.env.NODE_ENV !== "production" && (nr.displayName = "ListContext");
function rm(e) {
  return Ue("MuiList", e);
}
Ye("MuiList", ["root", "padding", "dense", "subheader"]);
const nm = (e) => {
  const {
    classes: t,
    disablePadding: r,
    dense: n,
    subheader: o
  } = e;
  return Xe({
    root: ["root", !r && "padding", n && "dense", o && "subheader"]
  }, rm, t);
}, om = Se("ul", {
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
}), Jo = /* @__PURE__ */ E.forwardRef(function(t, r) {
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
    ...d
  } = n, h = E.useMemo(() => ({
    dense: c
  }), [c]), g = {
    ...n,
    component: s,
    dense: c,
    disablePadding: l
  }, x = nm(g);
  return /* @__PURE__ */ M.jsx(nr.Provider, {
    value: h,
    children: /* @__PURE__ */ M.jsxs(om, {
      as: s,
      className: ce(x.root, i),
      ref: r,
      ownerState: g,
      ...d,
      children: [u, o]
    })
  });
});
process.env.NODE_ENV !== "production" && (Jo.propTypes = {
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
function im(e) {
  return Ue("MuiListItemButton", e);
}
const dr = Ye("MuiListItemButton", ["root", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "selected"]), am = (e, t) => {
  const {
    ownerState: r
  } = e;
  return [t.root, r.dense && t.dense, r.alignItems === "flex-start" && t.alignItemsFlexStart, r.divider && t.divider, !r.disableGutters && t.gutters];
}, sm = (e) => {
  const {
    alignItems: t,
    classes: r,
    dense: n,
    disabled: o,
    disableGutters: i,
    divider: s,
    selected: c
  } = e, u = Xe({
    root: ["root", n && "dense", !i && "gutters", s && "divider", o && "disabled", t === "flex-start" && "alignItemsFlexStart", c && "selected"]
  }, im, r);
  return {
    ...r,
    ...u
  };
}, cm = Se(Rr, {
  shouldForwardProp: (e) => fs(e) || e === "classes",
  name: "MuiListItemButton",
  slot: "Root",
  overridesResolver: am
})(tt(({
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
  [`&.${dr.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : De(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${dr.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : De(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${dr.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : De(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : De(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  },
  [`&.${dr.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${dr.disabled}`]: {
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
}))), Qo = /* @__PURE__ */ E.forwardRef(function(t, r) {
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
    divider: d = !1,
    focusVisibleClassName: h,
    selected: g = !1,
    className: x,
    ...b
  } = n, f = E.useContext(nr), S = E.useMemo(() => ({
    dense: l || f.dense || !1,
    alignItems: o,
    disableGutters: u
  }), [o, f.dense, l, u]), T = E.useRef(null);
  Qt(() => {
    i && (T.current ? T.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a ListItemButton whose component has not been rendered."));
  }, [i]);
  const A = {
    ...n,
    alignItems: o,
    dense: S.dense,
    disableGutters: u,
    divider: d,
    selected: g
  }, C = sm(A), y = at(T, r);
  return /* @__PURE__ */ M.jsx(nr.Provider, {
    value: S,
    children: /* @__PURE__ */ M.jsx(cm, {
      ref: y,
      href: b.href || b.to,
      component: (b.href || b.to) && s === "div" ? "button" : s,
      focusVisibleClassName: ce(C.focusVisible, h),
      ownerState: A,
      className: ce(C.root, x),
      ...b,
      classes: C,
      children: c
    })
  });
});
process.env.NODE_ENV !== "production" && (Qo.propTypes = {
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
function lm(e) {
  return Ue("MuiListItemIcon", e);
}
Ye("MuiListItemIcon", ["root", "alignItemsFlexStart"]);
const um = (e) => {
  const {
    alignItems: t,
    classes: r
  } = e;
  return Xe({
    root: ["root", t === "flex-start" && "alignItemsFlexStart"]
  }, lm, r);
}, fm = Se("div", {
  name: "MuiListItemIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.alignItems === "flex-start" && t.alignItemsFlexStart];
  }
})(tt(({
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
}))), Zo = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = He({
    props: t,
    name: "MuiListItemIcon"
  }), {
    className: o,
    ...i
  } = n, s = E.useContext(nr), c = {
    ...n,
    alignItems: s.alignItems
  }, l = um(c);
  return /* @__PURE__ */ M.jsx(fm, {
    className: ce(l.root, o),
    ownerState: c,
    ref: r,
    ...i
  });
});
process.env.NODE_ENV !== "production" && (Zo.propTypes = {
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
function pm(e) {
  return Ue("MuiListItemText", e);
}
const Qr = Ye("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), dm = (e) => {
  const {
    classes: t,
    inset: r,
    primary: n,
    secondary: o,
    dense: i
  } = e;
  return Xe({
    root: ["root", r && "inset", i && "dense", n && o && "multiline"],
    primary: ["primary"],
    secondary: ["secondary"]
  }, pm, t);
}, mm = Se("div", {
  name: "MuiListItemText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [{
      [`& .${Qr.primary}`]: t.primary
    }, {
      [`& .${Qr.secondary}`]: t.secondary
    }, t.root, r.inset && t.inset, r.primary && r.secondary && t.multiline, r.dense && t.dense];
  }
})({
  flex: "1 1 auto",
  minWidth: 0,
  marginTop: 4,
  marginBottom: 4,
  [`.${ra.root}:where(& .${Qr.primary})`]: {
    display: "block"
  },
  [`.${ra.root}:where(& .${Qr.secondary})`]: {
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
}), Fn = /* @__PURE__ */ E.forwardRef(function(t, r) {
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
    secondary: d,
    secondaryTypographyProps: h,
    slots: g = {},
    slotProps: x = {},
    ...b
  } = n, {
    dense: f
  } = E.useContext(nr);
  let S = l ?? o, T = d;
  const A = {
    ...n,
    disableTypography: s,
    inset: c,
    primary: !!S,
    secondary: !!T,
    dense: f
  }, C = dm(A), y = {
    slots: g,
    slotProps: {
      primary: u,
      secondary: h,
      ...x
    }
  }, [m, w] = Dt("primary", {
    className: C.primary,
    elementType: bt,
    externalForwardedProps: y,
    ownerState: A
  }), [P, L] = Dt("secondary", {
    className: C.secondary,
    elementType: bt,
    externalForwardedProps: y,
    ownerState: A
  });
  return S != null && S.type !== bt && !s && (S = /* @__PURE__ */ M.jsx(m, {
    variant: f ? "body2" : "body1",
    component: w != null && w.variant ? void 0 : "span",
    ...w,
    children: S
  })), T != null && T.type !== bt && !s && (T = /* @__PURE__ */ M.jsx(P, {
    variant: "body2",
    color: "textSecondary",
    ...L,
    children: T
  })), /* @__PURE__ */ M.jsxs(mm, {
    className: ce(C.root, i),
    ownerState: A,
    ref: r,
    ...b,
    children: [S, T]
  });
});
process.env.NODE_ENV !== "production" && (Fn.propTypes = {
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
function hm(e) {
  return Ue("MuiTooltip", e);
}
const Ne = Ye("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);
function gm(e) {
  return Math.round(e * 1e5) / 1e5;
}
const ym = (e) => {
  const {
    classes: t,
    disableInteractive: r,
    arrow: n,
    touch: o,
    placement: i
  } = e, s = {
    popper: ["popper", !r && "popperInteractive", n && "popperArrow"],
    tooltip: ["tooltip", n && "tooltipArrow", o && "touch", `tooltipPlacement${re(i.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return Xe(s, hm, t);
}, bm = Se(Xo, {
  name: "MuiTooltip",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.popper, !r.disableInteractive && t.popperInteractive, r.arrow && t.popperArrow, !r.open && t.popperClose];
  }
})(tt(({
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
}))), vm = Se("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.tooltip, r.touch && t.touch, r.arrow && t.tooltipArrow, t[`tooltipPlacement${re(r.placement.split("-")[0])}`]];
  }
})(tt(({
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
      lineHeight: `${gm(16 / 14)}em`,
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
}))), xm = Se("span", {
  name: "MuiTooltip",
  slot: "Arrow",
  overridesResolver: (e, t) => t.arrow
})(tt(({
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
let Zr = !1;
const ma = new Dn();
let mr = {
  x: 0,
  y: 0
};
function en(e, t) {
  return (r, ...n) => {
    t && t(r, ...n), e(r, ...n);
  };
}
const Ps = /* @__PURE__ */ E.forwardRef(function(t, r) {
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
    disableFocusListener: d = !1,
    disableHoverListener: h = !1,
    disableInteractive: g = !1,
    disableTouchListener: x = !1,
    enterDelay: b = 100,
    enterNextDelay: f = 0,
    enterTouchDelay: S = 700,
    followCursor: T = !1,
    id: A,
    leaveDelay: C = 0,
    leaveTouchDelay: y = 1500,
    onClose: m,
    onOpen: w,
    open: P,
    placement: L = "bottom",
    PopperComponent: B,
    PopperProps: p = {},
    slotProps: k = {},
    slots: D = {},
    title: j,
    TransitionComponent: W,
    TransitionProps: z,
    ...U
  } = n, V = /* @__PURE__ */ E.isValidElement(i) ? i : /* @__PURE__ */ M.jsx("span", {
    children: i
  }), ee = ir(), F = Za(), [R, _] = E.useState(), [J, Q] = E.useState(null), H = E.useRef(!1), X = g || T, I = It(), q = It(), G = It(), te = It(), [Z, ae] = _u({
    controlled: P,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let O = Z;
  if (process.env.NODE_ENV !== "production") {
    const {
      current: ne
    } = E.useRef(P !== void 0);
    E.useEffect(() => {
      R && R.disabled && !ne && j !== "" && R.tagName.toLowerCase() === "button" && console.warn(["MUI: You are providing a disabled `button` child to the Tooltip component.", "A disabled element does not fire events.", "Tooltip needs to listen to the child element's events to display the title.", "", "Add a simple wrapper element, such as a `span`."].join(`
`));
    }, [j, R, ne]);
  }
  const ge = Nu(A), Ee = E.useRef(), Me = Xt(() => {
    Ee.current !== void 0 && (document.body.style.WebkitUserSelect = Ee.current, Ee.current = void 0), te.clear();
  });
  E.useEffect(() => Me, [Me]);
  const Je = (ne) => {
    ma.clear(), Zr = !0, ae(!0), w && !O && w(ne);
  }, be = Xt(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (ne) => {
      ma.start(800 + C, () => {
        Zr = !1;
      }), ae(!1), m && O && m(ne), I.start(ee.transitions.duration.shortest, () => {
        H.current = !1;
      });
    }
  ), Pe = (ne) => {
    H.current && ne.type !== "touchstart" || (R && R.removeAttribute("title"), q.clear(), G.clear(), b || Zr && f ? q.start(Zr ? f : b, () => {
      Je(ne);
    }) : Je(ne));
  }, Ve = (ne) => {
    q.clear(), G.start(C, () => {
      be(ne);
    });
  }, [, Le] = E.useState(!1), v = (ne) => {
    pn(ne.target) || (Le(!1), Ve(ne));
  }, N = (ne) => {
    R || _(ne.currentTarget), pn(ne.target) && (Le(!0), Pe(ne));
  }, Y = (ne) => {
    H.current = !0;
    const ft = V.props;
    ft.onTouchStart && ft.onTouchStart(ne);
  }, oe = (ne) => {
    Y(ne), G.clear(), I.clear(), Me(), Ee.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", te.start(S, () => {
      document.body.style.WebkitUserSelect = Ee.current, Pe(ne);
    });
  }, Re = (ne) => {
    V.props.onTouchEnd && V.props.onTouchEnd(ne), Me(), G.start(y, () => {
      be(ne);
    });
  };
  E.useEffect(() => {
    if (!O)
      return;
    function ne(ft) {
      ft.key === "Escape" && be(ft);
    }
    return document.addEventListener("keydown", ne), () => {
      document.removeEventListener("keydown", ne);
    };
  }, [be, O]);
  const le = at(Io(V), _, r);
  !j && j !== 0 && (O = !1);
  const K = E.useRef(), ye = (ne) => {
    const ft = V.props;
    ft.onMouseMove && ft.onMouseMove(ne), mr = {
      x: ne.clientX,
      y: ne.clientY
    }, K.current && K.current.update();
  }, we = {}, Oe = typeof j == "string";
  u ? (we.title = !O && Oe && !h ? j : null, we["aria-describedby"] = O ? ge : null) : (we["aria-label"] = Oe ? j : null, we["aria-labelledby"] = O && !Oe ? ge : null);
  const se = {
    ...we,
    ...U,
    ...V.props,
    className: ce(U.className, V.props.className),
    onTouchStart: Y,
    ref: le,
    ...T ? {
      onMouseMove: ye
    } : {}
  };
  process.env.NODE_ENV !== "production" && (se["data-mui-internal-clone-element"] = !0, E.useEffect(() => {
    R && !R.getAttribute("data-mui-internal-clone-element") && console.error(["MUI: The `children` component of the Tooltip is not forwarding its props correctly.", "Please make sure that props are spread on the same element that the ref is applied to."].join(`
`));
  }, [R]));
  const _e = {};
  x || (se.onTouchStart = oe, se.onTouchEnd = Re), h || (se.onMouseOver = en(Pe, se.onMouseOver), se.onMouseLeave = en(Ve, se.onMouseLeave), X || (_e.onMouseOver = Pe, _e.onMouseLeave = Ve)), d || (se.onFocus = en(N, se.onFocus), se.onBlur = en(v, se.onBlur), X || (_e.onFocus = N, _e.onBlur = v)), process.env.NODE_ENV !== "production" && V.props.title && console.error(["MUI: You have provided a `title` prop to the child of <Tooltip />.", `Remove this title prop \`${V.props.title}\` or the Tooltip component.`].join(`
`));
  const Fe = {
    ...n,
    isRtl: F,
    arrow: o,
    disableInteractive: X,
    placement: L,
    PopperComponentProp: B,
    touch: H.current
  }, ze = typeof k.popper == "function" ? k.popper(Fe) : k.popper, ut = E.useMemo(() => {
    var ft, ei;
    let ne = [{
      name: "arrow",
      enabled: !!J,
      options: {
        element: J,
        padding: 4
      }
    }];
    return (ft = p.popperOptions) != null && ft.modifiers && (ne = ne.concat(p.popperOptions.modifiers)), (ei = ze == null ? void 0 : ze.popperOptions) != null && ei.modifiers && (ne = ne.concat(ze.popperOptions.modifiers)), {
      ...p.popperOptions,
      ...ze == null ? void 0 : ze.popperOptions,
      modifiers: ne
    };
  }, [J, p.popperOptions, ze == null ? void 0 : ze.popperOptions]), zn = ym(Fe), As = typeof k.transition == "function" ? k.transition(Fe) : k.transition, Vr = {
    slots: {
      popper: c.Popper,
      transition: c.Transition ?? W,
      tooltip: c.Tooltip,
      arrow: c.Arrow,
      ...D
    },
    slotProps: {
      arrow: k.arrow ?? l.arrow,
      popper: {
        ...p,
        ...ze ?? l.popper
      },
      // resolvedPopperProps can be spread because it's already an object
      tooltip: k.tooltip ?? l.tooltip,
      transition: {
        ...z,
        ...As ?? l.transition
      }
    }
  }, [Ns, Ms] = Dt("popper", {
    elementType: bm,
    externalForwardedProps: Vr,
    ownerState: Fe,
    className: ce(zn.popper, p == null ? void 0 : p.className)
  }), [_s, Is] = Dt("transition", {
    elementType: Tn,
    externalForwardedProps: Vr,
    ownerState: Fe
  }), [js, Ds] = Dt("tooltip", {
    elementType: vm,
    className: zn.tooltip,
    externalForwardedProps: Vr,
    ownerState: Fe
  }), [Ls, Bs] = Dt("arrow", {
    elementType: xm,
    className: zn.arrow,
    externalForwardedProps: Vr,
    ownerState: Fe,
    ref: Q
  });
  return /* @__PURE__ */ M.jsxs(E.Fragment, {
    children: [/* @__PURE__ */ E.cloneElement(V, se), /* @__PURE__ */ M.jsx(Ns, {
      as: B ?? Xo,
      placement: L,
      anchorEl: T ? {
        getBoundingClientRect: () => ({
          top: mr.y,
          left: mr.x,
          right: mr.x,
          bottom: mr.y,
          width: 0,
          height: 0
        })
      } : R,
      popperRef: K,
      open: R ? O : !1,
      id: ge,
      transition: !0,
      ..._e,
      ...Ms,
      popperOptions: ut,
      children: ({
        TransitionProps: ne
      }) => /* @__PURE__ */ M.jsx(_s, {
        timeout: ee.transitions.duration.shorter,
        ...ne,
        ...Is,
        children: /* @__PURE__ */ M.jsxs(js, {
          ...Ds,
          children: [j, o ? /* @__PURE__ */ M.jsx(Ls, {
            ...Bs
          }) : null]
        })
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (Ps.propTypes = {
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
  children: No.isRequired,
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
const Sm = ar(/* @__PURE__ */ M.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-12.5c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5m0 5.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"
}), "AlbumOutlined"), Em = pt.forwardRef(({
  userName: e = "",
  designation: t = "",
  userimg: r = "",
  isCollapse: n = !1
}, o) => {
  const i = ir();
  return /* @__PURE__ */ M.jsx(dt, { children: n ? "" : /* @__PURE__ */ M.jsxs(
    dt,
    {
      display: "flex",
      alignItems: "center",
      gap: 2,
      sx: { m: 3, p: 2, borderRadius: "8px", bgcolor: i.palette.secondary.main + 20 },
      children: [
        /* @__PURE__ */ M.jsx($s, { alt: "Remy Sharp", src: r }),
        /* @__PURE__ */ M.jsxs(dt, { children: [
          /* @__PURE__ */ M.jsx(bt, { variant: "h6", children: e }),
          /* @__PURE__ */ M.jsx(bt, { variant: "caption", color: "textSecondary", children: t })
        ] }),
        /* @__PURE__ */ M.jsx(dt, { sx: { ml: "auto" }, children: /* @__PURE__ */ M.jsx(Ps, { title: "Logout", placement: "top", children: /* @__PURE__ */ M.jsx(
          gs,
          {
            color: "primary",
            "aria-label": "logout",
            size: "small",
            children: /* @__PURE__ */ M.jsx(Sm, {})
          }
        ) }) })
      ]
    }
  ) });
}), Br = E.createContext({
  width: "270px",
  collapsewidth: "80px",
  textColor: "#8D939D",
  isCollapse: !1,
  themeColor: "#5d87ff"
}), km = E.forwardRef(
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
    designation: d = "Designer",
    showProfile: h = !0,
    userimg: g = "https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-1.jpg"
  }, x) => {
    const [b, f] = E.useState(!1), S = o && !b ? r : t;
    ir();
    const T = Ln({
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
    return c === "dark" && (n = "rgba(255,255,255, 0.9)"), /* @__PURE__ */ M.jsx(jf, { theme: T, children: /* @__PURE__ */ M.jsx(
      dt,
      {
        dir: l,
        sx: {
          width: S,
          flexShrink: 0,
          fontFamily: "inherit",
          color: n
        },
        children: /* @__PURE__ */ M.jsxs(dt, { sx: { width: S }, children: [
          /* @__PURE__ */ M.jsx(
            Br.Provider,
            {
              value: { textColor: n, isCollapse: o, width: t, collapsewidth: r, themeColor: i },
              children: e
            }
          ),
          h ? /* @__PURE__ */ M.jsx(
            Em,
            {
              userName: u,
              designation: d,
              userimg: g,
              isCollapse: o
            }
          ) : null
        ] })
      }
    ) });
  }
), Am = E.forwardRef(
  ({ children: e, subHeading: t = "menu" }, r) => {
    const n = E.useContext(Br);
    return /* @__PURE__ */ M.jsx(dt, { sx: { px: n.isCollapse ? 2 : 3, pt: 2 }, children: /* @__PURE__ */ M.jsx(
      Jo,
      {
        ref: r,
        component: "nav",
        subheader: /* @__PURE__ */ M.jsx(
          En,
          {
            component: "div",
            sx: {
              paddingY: "3px",
              color: n.textColor,
              paddingX: "0px",
              lineHeight: "20px",
              fontWeight: "bold",
              fontSize: "12px"
            },
            children: n.isCollapse ? "..." : t
          }
        ),
        children: e
      }
    ) });
  }
), Tm = ar(/* @__PURE__ */ M.jsx("path", {
  d: "m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
}), "ExpandLess"), Cm = ar(/* @__PURE__ */ M.jsx("path", {
  d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
}), "ExpandMore"), ks = ar(/* @__PURE__ */ M.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
}), "CircleOutlined"), Nm = E.forwardRef(
  ({
    children: e,
    title: t = "",
    icon: r,
    borderRadius: n = "8px",
    textFontSize: o = "14px",
    disabled: i = !1
  }, s) => {
    const c = E.useContext(Br), [l, u] = E.useState(!1), d = () => {
      u(!l);
    }, h = Se(Qo)(() => ({
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
    })), g = Se(Zo)(() => ({
      display: "flex",
      gap: "10px",
      marginBottom: "0px",
      padding: "0px",
      minWidth: "30px",
      cursor: "pointer",
      color: "inherit"
    }));
    return /* @__PURE__ */ M.jsxs(dt, { ref: s, children: [
      /* @__PURE__ */ M.jsxs(h, { onClick: d, sx: { display: "flex", gap: "15px" }, children: [
        /* @__PURE__ */ M.jsx(g, { style: { minWidth: "0px" }, children: r || /* @__PURE__ */ M.jsx(ks, {}) }),
        !c.isCollapse && /* @__PURE__ */ M.jsxs(M.Fragment, { children: [
          /* @__PURE__ */ M.jsx(Fn, { sx: { my: 0 }, children: /* @__PURE__ */ M.jsx(bt, { fontSize: o, sx: { lineHeight: "1" }, variant: "caption", children: t }) }),
          l ? /* @__PURE__ */ M.jsx(Tm, {}) : /* @__PURE__ */ M.jsx(Cm, {})
        ] })
      ] }),
      /* @__PURE__ */ M.jsx(yn, { in: l, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ M.jsx(Jo, { component: "div", disablePadding: !0, children: e }) })
    ] });
  }
), Mm = E.forwardRef(
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
    target: d = ""
  }, h) => {
    const g = E.useContext(Br), x = ir(), b = Se(Qo)(() => ({
      whiteSpace: "nowrap",
      marginBottom: "2px",
      padding: "10px 12px",
      textAlign: x.direction === "ltr" ? "left" : "right",
      borderRadius: c,
      color: g.textColor,
      cursor: l ? "default" : "pointer",
      opacity: l ? "0.6" : "1",
      ".MuiListItemIcon-root": {
        color: g.textColor
      },
      "&:hover": {
        backgroundColor: l ? "#fff" : g.themeColor + 20,
        color: g.themeColor,
        ".MuiListItemIcon-root": {
          color: g.themeColor
        }
      },
      "&.Mui-selected": {
        color: "white",
        backgroundColor: g.themeColor,
        "&:hover": {
          backgroundColor: g.themeColor,
          color: "white"
        },
        ".MuiListItemIcon-root": {
          color: "#fff"
        }
      }
    })), f = Se(Zo)(() => ({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      marginBottom: "0px",
      padding: "0px 0px",
      cursor: "pointer",
      marginLeft: "-10px",
      color: "inherit"
    }));
    return /* @__PURE__ */ M.jsx(dt, { children: /* @__PURE__ */ M.jsxs(
      b,
      {
        href: r,
        sx: { display: "flex", gap: "15px" },
        target: d,
        selected: r === "/",
        children: [
          /* @__PURE__ */ M.jsx(
            f,
            {
              sx: {
                minWidth: "0px"
              },
              children: t || /* @__PURE__ */ M.jsx(ks, {})
            }
          ),
          g.isCollapse ? null : /* @__PURE__ */ M.jsxs(M.Fragment, { children: [
            /* @__PURE__ */ M.jsx(Fn, { sx: { my: 0 }, children: /* @__PURE__ */ M.jsx(
              bt,
              {
                fontSize: s,
                sx: { lineHeight: "1" },
                variant: "caption",
                children: e
              }
            ) }),
            n && /* @__PURE__ */ M.jsx(
              Rs,
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
  }
), _m = E.forwardRef(
  ({ children: e, img: t = "https://adminmart.com/wp-content/uploads/2024/03/logo-admin-mart-news.png" }, r) => {
    const n = E.useContext(Br), o = Se(Fn)(() => ({
      whiteSpace: "nowrap",
      overflow: n.isCollapse ? "hidden" : "visible",
      WebkitLineClamp: "1",
      fontSize: "2rem",
      padding: "15px 22px",
      textOverflow: "ellipsis"
    }));
    return /* @__PURE__ */ M.jsx(o, { href: "/", ref: r, children: t === "" ? /* @__PURE__ */ M.jsx(bt, { variant: "body1", children: e }) : /* @__PURE__ */ M.jsx(
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
  }
);
export {
  _m as Logo,
  Am as Menu,
  Mm as MenuItem,
  km as Sidebar,
  Nm as Submenu
};
