var Vs = Object.defineProperty;
var zs = (e, t, r) => t in e ? Vs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var sr = (e, t, r) => zs(e, typeof t != "symbol" ? t + "" : t, r);
import * as S from "react";
import ut, { forwardRef as Fs, useContext as Ws, Children as Us, isValidElement as Qr, cloneElement as Zr } from "react";
import * as Ys from "react-dom";
import Br from "react-dom";
function Hs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Vr = { exports: {} }, cr = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ei;
function qs() {
  if (ei) return cr;
  ei = 1;
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
var ti;
function Gs() {
  return ti || (ti = 1, process.env.NODE_ENV !== "production" && function() {
    function e(y) {
      if (y == null) return null;
      if (typeof y == "function")
        return y.$$typeof === te ? null : y.displayName || y.name || null;
      if (typeof y == "string") return y;
      switch (y) {
        case C:
          return "Fragment";
        case g:
          return "Portal";
        case L:
          return "Profiler";
        case $:
          return "StrictMode";
        case D:
          return "Suspense";
        case _:
          return "SuspenseList";
      }
      if (typeof y == "object")
        switch (typeof y.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), y.$$typeof) {
          case p:
            return (y.displayName || "Context") + ".Provider";
          case B:
            return (y._context.displayName || "Context") + ".Consumer";
          case P:
            var N = y.render;
            return y = y.displayName, y || (y = N.displayName || N.name || "", y = y !== "" ? "ForwardRef(" + y + ")" : "ForwardRef"), y;
          case U:
            return N = y.displayName || null, N !== null ? N : e(y.type) || "Memo";
          case F:
            N = y._payload, y = y._init;
            try {
              return e(y(N));
            } catch {
            }
        }
      return null;
    }
    function t(y) {
      return "" + y;
    }
    function r(y) {
      try {
        t(y);
        var N = !1;
      } catch {
        N = !0;
      }
      if (N) {
        N = console;
        var W = N.error, oe = typeof Symbol == "function" && Symbol.toStringTag && y[Symbol.toStringTag] || y.constructor.name || "Object";
        return W.call(
          N,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          oe
        ), t(y);
      }
    }
    function n() {
    }
    function o() {
      if (H === 0) {
        X = console.log, I = console.info, q = console.warn, K = console.error, ee = console.group, Z = console.groupCollapsed, ae = console.groupEnd;
        var y = {
          configurable: !0,
          enumerable: !0,
          value: n,
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
      H++;
    }
    function i() {
      if (H--, H === 0) {
        var y = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: j({}, y, { value: X }),
          info: j({}, y, { value: I }),
          warn: j({}, y, { value: q }),
          error: j({}, y, { value: K }),
          group: j({}, y, { value: ee }),
          groupCollapsed: j({}, y, { value: Z }),
          groupEnd: j({}, y, { value: ae })
        });
      }
      0 > H && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function s(y) {
      if (M === void 0)
        try {
          throw Error();
        } catch (W) {
          var N = W.stack.trim().match(/\n( *(at )?)/);
          M = N && N[1] || "", Se = -1 < W.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < W.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + M + y + Se;
    }
    function c(y, N) {
      if (!y || Oe) return "";
      var W = Ie.get(y);
      if (W !== void 0) return W;
      Oe = !0, W = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var oe = null;
      oe = z.H, z.H = null, o();
      try {
        var Ce = {
          DetermineComponentFrameRoot: function() {
            try {
              if (N) {
                var Be = function() {
                  throw Error();
                };
                if (Object.defineProperty(Be.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Be, []);
                  } catch (ct) {
                    var Ve = ct;
                  }
                  Reflect.construct(y, [], Be);
                } else {
                  try {
                    Be.call();
                  } catch (ct) {
                    Ve = ct;
                  }
                  y.call(Be.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (ct) {
                  Ve = ct;
                }
                (Be = y()) && typeof Be.catch == "function" && Be.catch(function() {
                });
              }
            } catch (ct) {
              if (ct && Ve && typeof ct.stack == "string")
                return [ct.stack, Ve.stack];
            }
            return [null, null];
          }
        };
        Ce.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var le = Object.getOwnPropertyDescriptor(
          Ce.DetermineComponentFrameRoot,
          "name"
        );
        le && le.configurable && Object.defineProperty(
          Ce.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var G = Ce.DetermineComponentFrameRoot(), me = G[0], Ee = G[1];
        if (me && Ee) {
          var Te = me.split(`
`), se = Ee.split(`
`);
          for (G = le = 0; le < Te.length && !Te[le].includes(
            "DetermineComponentFrameRoot"
          ); )
            le++;
          for (; G < se.length && !se[G].includes(
            "DetermineComponentFrameRoot"
          ); )
            G++;
          if (le === Te.length || G === se.length)
            for (le = Te.length - 1, G = se.length - 1; 1 <= le && 0 <= G && Te[le] !== se[G]; )
              G--;
          for (; 1 <= le && 0 <= G; le--, G--)
            if (Te[le] !== se[G]) {
              if (le !== 1 || G !== 1)
                do
                  if (le--, G--, 0 > G || Te[le] !== se[G]) {
                    var Ne = `
` + Te[le].replace(
                      " at new ",
                      " at "
                    );
                    return y.displayName && Ne.includes("<anonymous>") && (Ne = Ne.replace("<anonymous>", y.displayName)), typeof y == "function" && Ie.set(y, Ne), Ne;
                  }
                while (1 <= le && 0 <= G);
              break;
            }
        }
      } finally {
        Oe = !1, z.H = oe, i(), Error.prepareStackTrace = W;
      }
      return Te = (Te = y ? y.displayName || y.name : "") ? s(Te) : "", typeof y == "function" && Ie.set(y, Te), Te;
    }
    function l(y) {
      if (y == null) return "";
      if (typeof y == "function") {
        var N = y.prototype;
        return c(
          y,
          !(!N || !N.isReactComponent)
        );
      }
      if (typeof y == "string") return s(y);
      switch (y) {
        case D:
          return s("Suspense");
        case _:
          return s("SuspenseList");
      }
      if (typeof y == "object")
        switch (y.$$typeof) {
          case P:
            return y = c(y.render, !1), y;
          case U:
            return l(y.type);
          case F:
            N = y._payload, y = y._init;
            try {
              return l(y(N));
            } catch {
            }
        }
      return "";
    }
    function u() {
      var y = z.A;
      return y === null ? null : y.getOwner();
    }
    function d(y) {
      if (O.call(y, "key")) {
        var N = Object.getOwnPropertyDescriptor(y, "key").get;
        if (N && N.isReactWarning) return !1;
      }
      return y.key !== void 0;
    }
    function m(y, N) {
      function W() {
        he || (he = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          N
        ));
      }
      W.isReactWarning = !0, Object.defineProperty(y, "key", {
        get: W,
        configurable: !0
      });
    }
    function h() {
      var y = e(this.type);
      return Re[y] || (Re[y] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), y = this.props.ref, y !== void 0 ? y : null;
    }
    function x(y, N, W, oe, Ce, le) {
      return W = le.ref, y = {
        $$typeof: v,
        type: y,
        key: N,
        props: le,
        _owner: Ce
      }, (W !== void 0 ? W : null) !== null ? Object.defineProperty(y, "ref", {
        enumerable: !1,
        get: h
      }) : Object.defineProperty(y, "ref", { enumerable: !1, value: null }), y._store = {}, Object.defineProperty(y._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(y, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(y.props), Object.freeze(y)), y;
    }
    function b(y, N, W, oe, Ce, le) {
      if (typeof y == "string" || typeof y == "function" || y === C || y === L || y === $ || y === D || y === _ || y === Y || typeof y == "object" && y !== null && (y.$$typeof === F || y.$$typeof === U || y.$$typeof === p || y.$$typeof === B || y.$$typeof === P || y.$$typeof === J || y.getModuleId !== void 0)) {
        var G = N.children;
        if (G !== void 0)
          if (oe)
            if (Q(G)) {
              for (oe = 0; oe < G.length; oe++)
                f(G[oe], y);
              Object.freeze && Object.freeze(G);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else f(G, y);
      } else
        G = "", (y === void 0 || typeof y == "object" && y !== null && Object.keys(y).length === 0) && (G += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), y === null ? oe = "null" : Q(y) ? oe = "array" : y !== void 0 && y.$$typeof === v ? (oe = "<" + (e(y.type) || "Unknown") + " />", G = " Did you accidentally export a JSX literal instead of a component?") : oe = typeof y, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          oe,
          G
        );
      if (O.call(N, "key")) {
        G = e(y);
        var me = Object.keys(N).filter(function(Te) {
          return Te !== "key";
        });
        oe = 0 < me.length ? "{key: someKey, " + me.join(": ..., ") + ": ...}" : "{key: someKey}", Le[G + oe] || (me = 0 < me.length ? "{" + me.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          oe,
          G,
          me,
          G
        ), Le[G + oe] = !0);
      }
      if (G = null, W !== void 0 && (r(W), G = "" + W), d(N) && (r(N.key), G = "" + N.key), "key" in N) {
        W = {};
        for (var Ee in N)
          Ee !== "key" && (W[Ee] = N[Ee]);
      } else W = N;
      return G && m(
        W,
        typeof y == "function" ? y.displayName || y.name || "Unknown" : y
      ), x(y, G, le, Ce, u(), W);
    }
    function f(y, N) {
      if (typeof y == "object" && y && y.$$typeof !== Ke) {
        if (Q(y))
          for (var W = 0; W < y.length; W++) {
            var oe = y[W];
            E(oe) && T(oe, N);
          }
        else if (E(y))
          y._store && (y._store.validated = 1);
        else if (y === null || typeof y != "object" ? W = null : (W = V && y[V] || y["@@iterator"], W = typeof W == "function" ? W : null), typeof W == "function" && W !== y.entries && (W = W.call(y), W !== y))
          for (; !(y = W.next()).done; )
            E(y.value) && T(y.value, N);
      }
    }
    function E(y) {
      return typeof y == "object" && y !== null && y.$$typeof === v;
    }
    function T(y, N) {
      if (y._store && !y._store.validated && y.key == null && (y._store.validated = 1, N = k(N), !_e[N])) {
        _e[N] = !0;
        var W = "";
        y && y._owner != null && y._owner !== u() && (W = null, typeof y._owner.tag == "number" ? W = e(y._owner.type) : typeof y._owner.name == "string" && (W = y._owner.name), W = " It was passed a child from " + W + ".");
        var oe = z.getCurrentStack;
        z.getCurrentStack = function() {
          var Ce = l(y.type);
          return oe && (Ce += oe() || ""), Ce;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          N,
          W
        ), z.getCurrentStack = oe;
      }
    }
    function k(y) {
      var N = "", W = u();
      return W && (W = e(W.type)) && (N = `

Check the render method of \`` + W + "`."), N || (y = e(y)) && (N = `

Check the top-level render call using <` + y + ">."), N;
    }
    var w = ut, v = Symbol.for("react.transitional.element"), g = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), $ = Symbol.for("react.strict_mode"), L = Symbol.for("react.profiler"), B = Symbol.for("react.consumer"), p = Symbol.for("react.context"), P = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), V = Symbol.iterator, te = Symbol.for("react.client.reference"), z = w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, O = Object.prototype.hasOwnProperty, j = Object.assign, J = Symbol.for("react.client.reference"), Q = Array.isArray, H = 0, X, I, q, K, ee, Z, ae;
    n.__reactDisabledLog = !0;
    var M, Se, Oe = !1, Ie = new (typeof WeakMap == "function" ? WeakMap : Map)(), Ke = Symbol.for("react.client.reference"), he, Re = {}, Le = {}, _e = {};
    lr.Fragment = C, lr.jsx = function(y, N, W, oe, Ce) {
      return b(y, N, W, !1, oe, Ce);
    }, lr.jsxs = function(y, N, W, oe, Ce) {
      return b(y, N, W, !0, oe, Ce);
    };
  }()), lr;
}
var ri;
function Ks() {
  return ri || (ri = 1, process.env.NODE_ENV === "production" ? Vr.exports = qs() : Vr.exports = Gs()), Vr.exports;
}
var A = Ks();
const Er = {
  black: "#000",
  white: "#fff"
}, zt = {
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
}, Ft = {
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
function Ot(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
const Tt = "$$material";
function an() {
  return an = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, an.apply(null, arguments);
}
var Js = !1;
function Qs(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Zs(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var ec = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? !Js : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Zs(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Qs(o);
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
}(), ze = "-ms-", sn = "-moz-", ue = "-webkit-", va = "comm", go = "rule", yo = "decl", tc = "@import", ba = "@keyframes", rc = "@layer", nc = Math.abs, En = String.fromCharCode, oc = Object.assign;
function ic(e, t) {
  return De(e, 0) ^ 45 ? (((t << 2 ^ De(e, 0)) << 2 ^ De(e, 1)) << 2 ^ De(e, 2)) << 2 ^ De(e, 3) : 0;
}
function xa(e) {
  return e.trim();
}
function ac(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function fe(e, t, r) {
  return e.replace(t, r);
}
function ro(e, t) {
  return e.indexOf(t);
}
function De(e, t) {
  return e.charCodeAt(t) | 0;
}
function Sr(e, t, r) {
  return e.slice(t, r);
}
function dt(e) {
  return e.length;
}
function vo(e) {
  return e.length;
}
function zr(e, t) {
  return t.push(e), e;
}
function sc(e, t) {
  return e.map(t).join("");
}
var Sn = 1, Jt = 1, Ea = 0, qe = 0, je = 0, or = "";
function Tn(e, t, r, n, o, i, s) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: Sn, column: Jt, length: s, return: "" };
}
function fr(e, t) {
  return oc(Tn("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function cc() {
  return je;
}
function lc() {
  return je = qe > 0 ? De(or, --qe) : 0, Jt--, je === 10 && (Jt = 1, Sn--), je;
}
function Je() {
  return je = qe < Ea ? De(or, qe++) : 0, Jt++, je === 10 && (Jt = 1, Sn++), je;
}
function yt() {
  return De(or, qe);
}
function en() {
  return qe;
}
function kr(e, t) {
  return Sr(or, e, t);
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
function Sa(e) {
  return Sn = Jt = 1, Ea = dt(or = e), qe = 0, [];
}
function Ta(e) {
  return or = "", e;
}
function tn(e) {
  return xa(kr(qe - 1, no(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function uc(e) {
  for (; (je = yt()) && je < 33; )
    Je();
  return Tr(e) > 2 || Tr(je) > 3 ? "" : " ";
}
function fc(e, t) {
  for (; --t && Je() && !(je < 48 || je > 102 || je > 57 && je < 65 || je > 70 && je < 97); )
    ;
  return kr(e, en() + (t < 6 && yt() == 32 && Je() == 32));
}
function no(e) {
  for (; Je(); )
    switch (je) {
      // ] ) " '
      case e:
        return qe;
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
        Je();
        break;
    }
  return qe;
}
function pc(e, t) {
  for (; Je() && e + je !== 57; )
    if (e + je === 84 && yt() === 47)
      break;
  return "/*" + kr(t, qe - 1) + "*" + En(e === 47 ? e : Je());
}
function dc(e) {
  for (; !Tr(yt()); )
    Je();
  return kr(e, qe);
}
function mc(e) {
  return Ta(rn("", null, null, null, [""], e = Sa(e), 0, [0], e));
}
function rn(e, t, r, n, o, i, s, c, l) {
  for (var u = 0, d = 0, m = s, h = 0, x = 0, b = 0, f = 1, E = 1, T = 1, k = 0, w = "", v = o, g = i, C = n, $ = w; E; )
    switch (b = k, k = Je()) {
      // (
      case 40:
        if (b != 108 && De($, m - 1) == 58) {
          ro($ += fe(tn(k), "&", "&\f"), "&\f") != -1 && (T = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        $ += tn(k);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        $ += uc(b);
        break;
      // \
      case 92:
        $ += fc(en() - 1, 7);
        continue;
      // /
      case 47:
        switch (yt()) {
          case 42:
          case 47:
            zr(hc(pc(Je(), en()), t, r), l);
            break;
          default:
            $ += "/";
        }
        break;
      // {
      case 123 * f:
        c[u++] = dt($) * T;
      // } ; \0
      case 125 * f:
      case 59:
      case 0:
        switch (k) {
          // \0 }
          case 0:
          case 125:
            E = 0;
          // ;
          case 59 + d:
            T == -1 && ($ = fe($, /\f/g, "")), x > 0 && dt($) - m && zr(x > 32 ? oi($ + ";", n, r, m - 1) : oi(fe($, " ", "") + ";", n, r, m - 2), l);
            break;
          // @ ;
          case 59:
            $ += ";";
          // { rule/at-rule
          default:
            if (zr(C = ni($, t, r, u, d, o, c, w, v = [], g = [], m), i), k === 123)
              if (d === 0)
                rn($, t, C, C, v, i, m, c, g);
              else
                switch (h === 99 && De($, 3) === 110 ? 100 : h) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    rn(e, C, C, n && zr(ni(e, C, C, 0, 0, o, c, w, o, v = [], m), g), o, g, m, c, n ? v : g);
                    break;
                  default:
                    rn($, C, C, C, [""], g, 0, c, g);
                }
        }
        u = d = x = 0, f = T = 1, w = $ = "", m = s;
        break;
      // :
      case 58:
        m = 1 + dt($), x = b;
      default:
        if (f < 1) {
          if (k == 123)
            --f;
          else if (k == 125 && f++ == 0 && lc() == 125)
            continue;
        }
        switch ($ += En(k), k * f) {
          // &
          case 38:
            T = d > 0 ? 1 : ($ += "\f", -1);
            break;
          // ,
          case 44:
            c[u++] = (dt($) - 1) * T, T = 1;
            break;
          // @
          case 64:
            yt() === 45 && ($ += tn(Je())), h = yt(), d = m = dt(w = $ += dc(en())), k++;
            break;
          // -
          case 45:
            b === 45 && dt($) == 2 && (f = 0);
        }
    }
  return i;
}
function ni(e, t, r, n, o, i, s, c, l, u, d) {
  for (var m = o - 1, h = o === 0 ? i : [""], x = vo(h), b = 0, f = 0, E = 0; b < n; ++b)
    for (var T = 0, k = Sr(e, m + 1, m = nc(f = s[b])), w = e; T < x; ++T)
      (w = xa(f > 0 ? h[T] + " " + k : fe(k, /&\f/g, h[T]))) && (l[E++] = w);
  return Tn(e, t, r, o === 0 ? go : c, l, u, d);
}
function hc(e, t, r) {
  return Tn(e, t, r, va, En(cc()), Sr(e, 2, -2), 0);
}
function oi(e, t, r, n) {
  return Tn(e, t, r, yo, Sr(e, 0, n), Sr(e, n + 1, -1), n);
}
function Gt(e, t) {
  for (var r = "", n = vo(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function gc(e, t, r, n) {
  switch (e.type) {
    case rc:
      if (e.children.length) break;
    case tc:
    case yo:
      return e.return = e.return || e.value;
    case va:
      return "";
    case ba:
      return e.return = e.value + "{" + Gt(e.children, n) + "}";
    case go:
      e.value = e.props.join(",");
  }
  return dt(r = Gt(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function yc(e) {
  var t = vo(e);
  return function(r, n, o, i) {
    for (var s = "", c = 0; c < t; c++)
      s += e[c](r, n, o, i) || "";
    return s;
  };
}
function vc(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Ca(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var bc = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = yt(), o === 38 && i === 12 && (r[n] = 1), !Tr(i); )
    Je();
  return kr(t, qe);
}, xc = function(t, r) {
  var n = -1, o = 44;
  do
    switch (Tr(o)) {
      case 0:
        o === 38 && yt() === 12 && (r[n] = 1), t[n] += bc(qe - 1, r, n);
        break;
      case 2:
        t[n] += tn(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = yt() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      // fallthrough
      default:
        t[n] += En(o);
    }
  while (o = Je());
  return t;
}, Ec = function(t, r) {
  return Ta(xc(Sa(t), r));
}, ii = /* @__PURE__ */ new WeakMap(), Sc = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !ii.get(n)) && !o) {
      ii.set(t, !0);
      for (var i = [], s = Ec(r, i), c = n.props, l = 0, u = 0; l < s.length; l++)
        for (var d = 0; d < c.length; d++, u++)
          t.props[u] = i[l] ? s[l].replace(/&\f/g, c[d]) : c[d] + " " + s[l];
    }
  }
}, Tc = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function wa(e, t) {
  switch (ic(e, t)) {
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
      return ue + e + sn + e + ze + e + e;
    // flex, flex-direction
    case 6828:
    case 4268:
      return ue + e + ze + e + e;
    // order
    case 6165:
      return ue + e + ze + "flex-" + e + e;
    // align-items
    case 5187:
      return ue + e + fe(e, /(\w+).+(:[^]+)/, ue + "box-$1$2" + ze + "flex-$1$2") + e;
    // align-self
    case 5443:
      return ue + e + ze + "flex-item-" + fe(e, /flex-|-self/, "") + e;
    // align-content
    case 4675:
      return ue + e + ze + "flex-line-pack" + fe(e, /align-content|flex-|-self/, "") + e;
    // flex-shrink
    case 5548:
      return ue + e + ze + fe(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return ue + e + ze + fe(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return ue + "box-" + fe(e, "-grow", "") + ue + e + ze + fe(e, "grow", "positive") + e;
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
      return fe(fe(e, /(.+:)(flex-)?(.*)/, ue + "box-pack:$3" + ze + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ue + e + e;
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
      if (dt(e) - 1 - t > 6) switch (De(e, t + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (De(e, t + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return fe(e, /(.+:)(.+)-([^]+)/, "$1" + ue + "$2-$3$1" + sn + (De(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        // (s)tretch
        case 115:
          return ~ro(e, "stretch") ? wa(fe(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    // position: sticky
    case 4949:
      if (De(e, t + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (De(e, dt(e) - 3 - (~ro(e, "!important") && 10))) {
        // stic(k)y
        case 107:
          return fe(e, ":", ":" + ue) + e;
        // (inline-)?fl(e)x
        case 101:
          return fe(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ue + (De(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ue + "$2$3$1" + ze + "$2box$3") + e;
      }
      break;
    // writing-mode
    case 5936:
      switch (De(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return ue + e + ze + fe(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return ue + e + ze + fe(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return ue + e + ze + fe(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ue + e + ze + e + e;
  }
  return e;
}
var Cc = function(t, r, n, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case yo:
      t.return = wa(t.value, t.length);
      break;
    case ba:
      return Gt([fr(t, {
        value: fe(t.value, "@", "@" + ue)
      })], o);
    case go:
      if (t.length) return sc(t.props, function(i) {
        switch (ac(i, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return Gt([fr(t, {
              props: [fe(i, /:(read-\w+)/, ":" + sn + "$1")]
            })], o);
          // :placeholder
          case "::placeholder":
            return Gt([fr(t, {
              props: [fe(i, /:(plac\w+)/, ":" + ue + "input-$1")]
            }), fr(t, {
              props: [fe(i, /:(plac\w+)/, ":" + sn + "$1")]
            }), fr(t, {
              props: [fe(i, /:(plac\w+)/, ze + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, wc = [Cc], Oc = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(f) {
      var E = f.getAttribute("data-emotion");
      E.indexOf(" ") !== -1 && (document.head.appendChild(f), f.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || wc, i = {}, s, c = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(f) {
      for (var E = f.getAttribute("data-emotion").split(" "), T = 1; T < E.length; T++)
        i[E[T]] = !0;
      c.push(f);
    }
  );
  var l, u = [Sc, Tc];
  {
    var d, m = [gc, vc(function(f) {
      d.insert(f);
    })], h = yc(u.concat(o, m)), x = function(E) {
      return Gt(mc(E), h);
    };
    l = function(E, T, k, w) {
      d = k, x(E ? E + "{" + T.styles + "}" : T.styles), w && (b.inserted[T.name] = !0);
    };
  }
  var b = {
    key: r,
    sheet: new ec({
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
}, Fr = { exports: {} }, pe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ai;
function Rc() {
  if (ai) return pe;
  ai = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, k = e ? Symbol.for("react.scope") : 60119;
  function w(g) {
    if (typeof g == "object" && g !== null) {
      var C = g.$$typeof;
      switch (C) {
        case t:
          switch (g = g.type, g) {
            case l:
            case u:
            case n:
            case i:
            case o:
            case m:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case c:
                case d:
                case b:
                case x:
                case s:
                  return g;
                default:
                  return C;
              }
          }
        case r:
          return C;
      }
    }
  }
  function v(g) {
    return w(g) === u;
  }
  return pe.AsyncMode = l, pe.ConcurrentMode = u, pe.ContextConsumer = c, pe.ContextProvider = s, pe.Element = t, pe.ForwardRef = d, pe.Fragment = n, pe.Lazy = b, pe.Memo = x, pe.Portal = r, pe.Profiler = i, pe.StrictMode = o, pe.Suspense = m, pe.isAsyncMode = function(g) {
    return v(g) || w(g) === l;
  }, pe.isConcurrentMode = v, pe.isContextConsumer = function(g) {
    return w(g) === c;
  }, pe.isContextProvider = function(g) {
    return w(g) === s;
  }, pe.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, pe.isForwardRef = function(g) {
    return w(g) === d;
  }, pe.isFragment = function(g) {
    return w(g) === n;
  }, pe.isLazy = function(g) {
    return w(g) === b;
  }, pe.isMemo = function(g) {
    return w(g) === x;
  }, pe.isPortal = function(g) {
    return w(g) === r;
  }, pe.isProfiler = function(g) {
    return w(g) === i;
  }, pe.isStrictMode = function(g) {
    return w(g) === o;
  }, pe.isSuspense = function(g) {
    return w(g) === m;
  }, pe.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === n || g === u || g === i || g === o || g === m || g === h || typeof g == "object" && g !== null && (g.$$typeof === b || g.$$typeof === x || g.$$typeof === s || g.$$typeof === c || g.$$typeof === d || g.$$typeof === E || g.$$typeof === T || g.$$typeof === k || g.$$typeof === f);
  }, pe.typeOf = w, pe;
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
var si;
function $c() {
  return si || (si = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, k = e ? Symbol.for("react.scope") : 60119;
    function w(M) {
      return typeof M == "string" || typeof M == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      M === n || M === u || M === i || M === o || M === m || M === h || typeof M == "object" && M !== null && (M.$$typeof === b || M.$$typeof === x || M.$$typeof === s || M.$$typeof === c || M.$$typeof === d || M.$$typeof === E || M.$$typeof === T || M.$$typeof === k || M.$$typeof === f);
    }
    function v(M) {
      if (typeof M == "object" && M !== null) {
        var Se = M.$$typeof;
        switch (Se) {
          case t:
            var Oe = M.type;
            switch (Oe) {
              case l:
              case u:
              case n:
              case i:
              case o:
              case m:
                return Oe;
              default:
                var Ie = Oe && Oe.$$typeof;
                switch (Ie) {
                  case c:
                  case d:
                  case b:
                  case x:
                  case s:
                    return Ie;
                  default:
                    return Se;
                }
            }
          case r:
            return Se;
        }
      }
    }
    var g = l, C = u, $ = c, L = s, B = t, p = d, P = n, D = b, _ = x, U = r, F = i, Y = o, V = m, te = !1;
    function z(M) {
      return te || (te = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), O(M) || v(M) === l;
    }
    function O(M) {
      return v(M) === u;
    }
    function j(M) {
      return v(M) === c;
    }
    function J(M) {
      return v(M) === s;
    }
    function Q(M) {
      return typeof M == "object" && M !== null && M.$$typeof === t;
    }
    function H(M) {
      return v(M) === d;
    }
    function X(M) {
      return v(M) === n;
    }
    function I(M) {
      return v(M) === b;
    }
    function q(M) {
      return v(M) === x;
    }
    function K(M) {
      return v(M) === r;
    }
    function ee(M) {
      return v(M) === i;
    }
    function Z(M) {
      return v(M) === o;
    }
    function ae(M) {
      return v(M) === m;
    }
    de.AsyncMode = g, de.ConcurrentMode = C, de.ContextConsumer = $, de.ContextProvider = L, de.Element = B, de.ForwardRef = p, de.Fragment = P, de.Lazy = D, de.Memo = _, de.Portal = U, de.Profiler = F, de.StrictMode = Y, de.Suspense = V, de.isAsyncMode = z, de.isConcurrentMode = O, de.isContextConsumer = j, de.isContextProvider = J, de.isElement = Q, de.isForwardRef = H, de.isFragment = X, de.isLazy = I, de.isMemo = q, de.isPortal = K, de.isProfiler = ee, de.isStrictMode = Z, de.isSuspense = ae, de.isValidElementType = w, de.typeOf = v;
  }()), de;
}
var ci;
function bo() {
  return ci || (ci = 1, process.env.NODE_ENV === "production" ? Fr.exports = Rc() : Fr.exports = $c()), Fr.exports;
}
var Wn, li;
function Pc() {
  if (li) return Wn;
  li = 1;
  var e = bo(), t = {
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
  var c = Object.defineProperty, l = Object.getOwnPropertyNames, u = Object.getOwnPropertySymbols, d = Object.getOwnPropertyDescriptor, m = Object.getPrototypeOf, h = Object.prototype;
  function x(b, f, E) {
    if (typeof f != "string") {
      if (h) {
        var T = m(f);
        T && T !== h && x(b, T, E);
      }
      var k = l(f);
      u && (k = k.concat(u(f)));
      for (var w = s(b), v = s(f), g = 0; g < k.length; ++g) {
        var C = k[g];
        if (!r[C] && !(E && E[C]) && !(v && v[C]) && !(w && w[C])) {
          var $ = d(f, C);
          try {
            c(b, C, $);
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
function xo(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (n += o + " ");
  }), n;
}
var Cn = function(t, r, n) {
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
}, wn = function(t, r, n) {
  Cn(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function Nc(e) {
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
var Ac = {
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
}, jc = /[A-Z]|^ms/g, Mc = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Oa = function(t) {
  return t.charCodeAt(1) === 45;
}, ui = function(t) {
  return t != null && typeof t != "boolean";
}, Un = /* @__PURE__ */ Ca(function(e) {
  return Oa(e) ? e : e.replace(jc, "-$&").toLowerCase();
}), fi = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(Mc, function(n, o, i) {
          return mt = {
            name: o,
            styles: i,
            next: mt
          }, o;
        });
  }
  return Ac[t] !== 1 && !Oa(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
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
        return mt = {
          name: o.name,
          styles: o.styles,
          next: mt
        }, o.name;
      var i = r;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            mt = {
              name: s.name,
              styles: s.styles,
              next: mt
            }, s = s.next;
        var c = i.styles + ";";
        return c;
      }
      return Ic(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var l = mt, u = r(e);
        return mt = l, Cr(e, t, u);
      }
      break;
    }
  }
  var d = r;
  if (t == null)
    return d;
  var m = t[d];
  return m !== void 0 ? m : d;
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
        t != null && t[c] !== void 0 ? n += i + "{" + t[c] + "}" : ui(c) && (n += Un(i) + ":" + fi(i, c) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
        for (var l = 0; l < s.length; l++)
          ui(s[l]) && (n += Un(i) + ":" + fi(i, s[l]) + ";");
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
var pi = /label:\s*([^\s;{]+)\s*(;|$)/g, mt;
function Lt(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  mt = void 0;
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
  pi.lastIndex = 0;
  for (var u = "", d; (d = pi.exec(o)) !== null; )
    u += "-" + d[1];
  var m = Nc(o) + u;
  return {
    name: m,
    styles: o,
    next: mt
  };
}
var _c = function(t) {
  return t();
}, Ra = S.useInsertionEffect ? S.useInsertionEffect : !1, Eo = Ra || _c, di = Ra || S.useLayoutEffect, Dc = {}.hasOwnProperty, So = /* @__PURE__ */ S.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Oc({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (So.displayName = "EmotionCacheContext");
So.Provider;
var On = function(t) {
  return /* @__PURE__ */ Fs(function(r, n) {
    var o = Ws(So);
    return t(r, o, n);
  });
}, Vt = /* @__PURE__ */ S.createContext({});
process.env.NODE_ENV !== "production" && (Vt.displayName = "EmotionThemeContext");
var mi = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", hi = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", Lc = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return Cn(r, n, o), Eo(function() {
    return wn(r, n, o);
  }), null;
}, Bc = /* @__PURE__ */ On(function(e, t, r) {
  var n = e.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var o = e[mi], i = [n], s = "";
  typeof e.className == "string" ? s = xo(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var c = Lt(i, void 0, S.useContext(Vt));
  if (process.env.NODE_ENV !== "production" && c.name.indexOf("-") === -1) {
    var l = e[hi];
    l && (c = Lt([c, "label:" + l + ";"]));
  }
  s += t.key + "-" + c.name;
  var u = {};
  for (var d in e)
    Dc.call(e, d) && d !== "css" && d !== mi && (process.env.NODE_ENV === "production" || d !== hi) && (u[d] = e[d]);
  return u.ref = r, u.className = s, /* @__PURE__ */ S.createElement(S.Fragment, null, /* @__PURE__ */ S.createElement(Lc, {
    cache: t,
    serialized: c,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ S.createElement(o, u));
});
process.env.NODE_ENV !== "production" && (Bc.displayName = "EmotionCssPropInternal");
var Vc = {
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
}, gi = !1, $a = /* @__PURE__ */ On(function(e, t) {
  process.env.NODE_ENV !== "production" && !gi && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), gi = !0);
  var r = e.styles, n = Lt([r], void 0, S.useContext(Vt)), o = S.useRef();
  return di(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), c = !1, l = document.querySelector('style[data-emotion="' + i + " " + n.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), l !== null && (c = !0, l.setAttribute("data-emotion", i), s.hydrate([l])), o.current = [s, c], function() {
      s.flush();
    };
  }, [t]), di(function() {
    var i = o.current, s = i[0], c = i[1];
    if (c) {
      i[1] = !1;
      return;
    }
    if (n.next !== void 0 && wn(t, n.next, !0), s.tags.length) {
      var l = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = l, s.flush();
    }
    t.insert("", n, s, !1);
  }, [t, n.name]), null;
});
process.env.NODE_ENV !== "production" && ($a.displayName = "EmotionGlobal");
function zc() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return Lt(t);
}
var To = function() {
  var t = zc.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, Fc = function e(t) {
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
function Wc(e, t, r) {
  var n = [], o = xo(e, n, r);
  return n.length < 2 ? r : o + t(n);
}
var Uc = function(t) {
  var r = t.cache, n = t.serializedArr;
  return Eo(function() {
    for (var o = 0; o < n.length; o++)
      wn(r, n[o], !1);
  }), null;
}, Yc = /* @__PURE__ */ On(function(e, t) {
  var r = !1, n = [], o = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var u = arguments.length, d = new Array(u), m = 0; m < u; m++)
      d[m] = arguments[m];
    var h = Lt(d, t.registered);
    return n.push(h), Cn(t, h, !1), t.key + "-" + h.name;
  }, i = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var u = arguments.length, d = new Array(u), m = 0; m < u; m++)
      d[m] = arguments[m];
    return Wc(t.registered, o, Fc(d));
  }, s = {
    css: o,
    cx: i,
    theme: S.useContext(Vt)
  }, c = e.children(s);
  return r = !0, /* @__PURE__ */ S.createElement(S.Fragment, null, /* @__PURE__ */ S.createElement(Uc, {
    cache: t,
    serializedArr: n
  }), c);
});
process.env.NODE_ENV !== "production" && (Yc.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var yi = !0, Hc = typeof jest < "u" || typeof vi < "u";
  if (yi && !Hc) {
    var bi = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : yi ? window : global
    ), xi = "__EMOTION_REACT_" + Vc.version.split(".")[0] + "__";
    bi[xi] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), bi[xi] = !0;
  }
}
var qc = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Gc = /* @__PURE__ */ Ca(
  function(e) {
    return qc.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Kc = Gc, Xc = function(t) {
  return t !== "theme";
}, Ei = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Kc : Xc;
}, Si = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, Jc = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return Cn(r, n, o), Eo(function() {
    return wn(r, n, o);
  }), null;
}, Qc = function e(t, r) {
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, s;
  r !== void 0 && (i = r.label, s = r.target);
  var c = Si(t, r, n), l = c || Ei(o), u = !l("as");
  return function() {
    var d = arguments, m = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && m.push("label:" + i + ";"), d[0] == null || d[0].raw === void 0)
      m.push.apply(m, d);
    else {
      var h = d[0];
      m.push(h[0]);
      for (var x = d.length, b = 1; b < x; b++)
        m.push(d[b], h[b]);
    }
    var f = On(function(E, T, k) {
      var w = u && E.as || o, v = "", g = [], C = E;
      if (E.theme == null) {
        C = {};
        for (var $ in E)
          C[$] = E[$];
        C.theme = S.useContext(Vt);
      }
      typeof E.className == "string" ? v = xo(T.registered, g, E.className) : E.className != null && (v = E.className + " ");
      var L = Lt(m.concat(g), T.registered, C);
      v += T.key + "-" + L.name, s !== void 0 && (v += " " + s);
      var B = u && c === void 0 ? Ei(w) : l, p = {};
      for (var P in E)
        u && P === "as" || B(P) && (p[P] = E[P]);
      return p.className = v, k && (p.ref = k), /* @__PURE__ */ S.createElement(S.Fragment, null, /* @__PURE__ */ S.createElement(Jc, {
        cache: T,
        serialized: L,
        isStringTag: typeof w == "string"
      }), /* @__PURE__ */ S.createElement(w, p));
    });
    return f.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", f.defaultProps = t.defaultProps, f.__emotion_real = f, f.__emotion_base = o, f.__emotion_styles = m, f.__emotion_forwardProp = c, Object.defineProperty(f, "toString", {
      value: function() {
        return "." + s;
      }
    }), f.withComponent = function(E, T) {
      var k = e(E, an({}, r, T, {
        shouldForwardProp: Si(f, T, !0)
      }));
      return k.apply(void 0, m);
    }, f;
  };
}, Zc = [
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
], oo = Qc.bind(null);
Zc.forEach(function(e) {
  oo[e] = oo(e);
});
var Wr = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Yn, Ti;
function el() {
  if (Ti) return Yn;
  Ti = 1;
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
      for (var m in c)
        t.call(c, m) && (l[m] = c[m]);
      if (e) {
        u = e(c);
        for (var h = 0; h < u.length; h++)
          r.call(c, u[h]) && (l[u[h]] = c[u[h]]);
      }
    }
    return l;
  }, Yn;
}
var Hn, Ci;
function Co() {
  if (Ci) return Hn;
  Ci = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Hn = e, Hn;
}
var qn, wi;
function Pa() {
  return wi || (wi = 1, qn = Function.call.bind(Object.prototype.hasOwnProperty)), qn;
}
var Gn, Oi;
function tl() {
  if (Oi) return Gn;
  Oi = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Co(), r = {}, n = /* @__PURE__ */ Pa();
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
          var m;
          try {
            if (typeof i[d] != "function") {
              var h = Error(
                (l || "React class") + ": " + c + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            m = i[d](s, d, l, c, null, t);
          } catch (b) {
            m = b;
          }
          if (m && !(m instanceof Error) && e(
            (l || "React class") + ": type specification of " + c + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
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
  }, Gn = o, Gn;
}
var Kn, Ri;
function rl() {
  if (Ri) return Kn;
  Ri = 1;
  var e = bo(), t = el(), r = /* @__PURE__ */ Co(), n = /* @__PURE__ */ Pa(), o = /* @__PURE__ */ tl(), i = function() {
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
    function m(O) {
      var j = O && (u && O[u] || O[d]);
      if (typeof j == "function")
        return j;
    }
    var h = "<<anonymous>>", x = {
      array: T("array"),
      bigint: T("bigint"),
      bool: T("boolean"),
      func: T("function"),
      number: T("number"),
      object: T("object"),
      string: T("string"),
      symbol: T("symbol"),
      any: k(),
      arrayOf: w,
      element: v(),
      elementType: g(),
      instanceOf: C,
      node: p(),
      objectOf: L,
      oneOf: $,
      oneOfType: B,
      shape: D,
      exact: _
    };
    function b(O, j) {
      return O === j ? O !== 0 || 1 / O === 1 / j : O !== O && j !== j;
    }
    function f(O, j) {
      this.message = O, this.data = j && typeof j == "object" ? j : {}, this.stack = "";
    }
    f.prototype = Error.prototype;
    function E(O) {
      if (process.env.NODE_ENV !== "production")
        var j = {}, J = 0;
      function Q(X, I, q, K, ee, Z, ae) {
        if (K = K || h, Z = Z || q, ae !== r) {
          if (l) {
            var M = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw M.name = "Invariant Violation", M;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Se = K + ":" + q;
            !j[Se] && // Avoid spamming the console because they are often not actionable except for lib authors
            J < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + Z + "` prop on `" + K + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), j[Se] = !0, J++);
          }
        }
        return I[q] == null ? X ? I[q] === null ? new f("The " + ee + " `" + Z + "` is marked as required " + ("in `" + K + "`, but its value is `null`.")) : new f("The " + ee + " `" + Z + "` is marked as required in " + ("`" + K + "`, but its value is `undefined`.")) : null : O(I, q, K, ee, Z);
      }
      var H = Q.bind(null, !1);
      return H.isRequired = Q.bind(null, !0), H;
    }
    function T(O) {
      function j(J, Q, H, X, I, q) {
        var K = J[Q], ee = Y(K);
        if (ee !== O) {
          var Z = V(K);
          return new f(
            "Invalid " + X + " `" + I + "` of type " + ("`" + Z + "` supplied to `" + H + "`, expected ") + ("`" + O + "`."),
            { expectedType: O }
          );
        }
        return null;
      }
      return E(j);
    }
    function k() {
      return E(s);
    }
    function w(O) {
      function j(J, Q, H, X, I) {
        if (typeof O != "function")
          return new f("Property `" + I + "` of component `" + H + "` has invalid PropType notation inside arrayOf.");
        var q = J[Q];
        if (!Array.isArray(q)) {
          var K = Y(q);
          return new f("Invalid " + X + " `" + I + "` of type " + ("`" + K + "` supplied to `" + H + "`, expected an array."));
        }
        for (var ee = 0; ee < q.length; ee++) {
          var Z = O(q, ee, H, X, I + "[" + ee + "]", r);
          if (Z instanceof Error)
            return Z;
        }
        return null;
      }
      return E(j);
    }
    function v() {
      function O(j, J, Q, H, X) {
        var I = j[J];
        if (!c(I)) {
          var q = Y(I);
          return new f("Invalid " + H + " `" + X + "` of type " + ("`" + q + "` supplied to `" + Q + "`, expected a single ReactElement."));
        }
        return null;
      }
      return E(O);
    }
    function g() {
      function O(j, J, Q, H, X) {
        var I = j[J];
        if (!e.isValidElementType(I)) {
          var q = Y(I);
          return new f("Invalid " + H + " `" + X + "` of type " + ("`" + q + "` supplied to `" + Q + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return E(O);
    }
    function C(O) {
      function j(J, Q, H, X, I) {
        if (!(J[Q] instanceof O)) {
          var q = O.name || h, K = z(J[Q]);
          return new f("Invalid " + X + " `" + I + "` of type " + ("`" + K + "` supplied to `" + H + "`, expected ") + ("instance of `" + q + "`."));
        }
        return null;
      }
      return E(j);
    }
    function $(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function j(J, Q, H, X, I) {
        for (var q = J[Q], K = 0; K < O.length; K++)
          if (b(q, O[K]))
            return null;
        var ee = JSON.stringify(O, function(ae, M) {
          var Se = V(M);
          return Se === "symbol" ? String(M) : M;
        });
        return new f("Invalid " + X + " `" + I + "` of value `" + String(q) + "` " + ("supplied to `" + H + "`, expected one of " + ee + "."));
      }
      return E(j);
    }
    function L(O) {
      function j(J, Q, H, X, I) {
        if (typeof O != "function")
          return new f("Property `" + I + "` of component `" + H + "` has invalid PropType notation inside objectOf.");
        var q = J[Q], K = Y(q);
        if (K !== "object")
          return new f("Invalid " + X + " `" + I + "` of type " + ("`" + K + "` supplied to `" + H + "`, expected an object."));
        for (var ee in q)
          if (n(q, ee)) {
            var Z = O(q, ee, H, X, I + "." + ee, r);
            if (Z instanceof Error)
              return Z;
          }
        return null;
      }
      return E(j);
    }
    function B(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var j = 0; j < O.length; j++) {
        var J = O[j];
        if (typeof J != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + te(J) + " at index " + j + "."
          ), s;
      }
      function Q(H, X, I, q, K) {
        for (var ee = [], Z = 0; Z < O.length; Z++) {
          var ae = O[Z], M = ae(H, X, I, q, K, r);
          if (M == null)
            return null;
          M.data && n(M.data, "expectedType") && ee.push(M.data.expectedType);
        }
        var Se = ee.length > 0 ? ", expected one of type [" + ee.join(", ") + "]" : "";
        return new f("Invalid " + q + " `" + K + "` supplied to " + ("`" + I + "`" + Se + "."));
      }
      return E(Q);
    }
    function p() {
      function O(j, J, Q, H, X) {
        return U(j[J]) ? null : new f("Invalid " + H + " `" + X + "` supplied to " + ("`" + Q + "`, expected a ReactNode."));
      }
      return E(O);
    }
    function P(O, j, J, Q, H) {
      return new f(
        (O || "React class") + ": " + j + " type `" + J + "." + Q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + H + "`."
      );
    }
    function D(O) {
      function j(J, Q, H, X, I) {
        var q = J[Q], K = Y(q);
        if (K !== "object")
          return new f("Invalid " + X + " `" + I + "` of type `" + K + "` " + ("supplied to `" + H + "`, expected `object`."));
        for (var ee in O) {
          var Z = O[ee];
          if (typeof Z != "function")
            return P(H, X, I, ee, V(Z));
          var ae = Z(q, ee, H, X, I + "." + ee, r);
          if (ae)
            return ae;
        }
        return null;
      }
      return E(j);
    }
    function _(O) {
      function j(J, Q, H, X, I) {
        var q = J[Q], K = Y(q);
        if (K !== "object")
          return new f("Invalid " + X + " `" + I + "` of type `" + K + "` " + ("supplied to `" + H + "`, expected `object`."));
        var ee = t({}, J[Q], O);
        for (var Z in ee) {
          var ae = O[Z];
          if (n(O, Z) && typeof ae != "function")
            return P(H, X, I, Z, V(ae));
          if (!ae)
            return new f(
              "Invalid " + X + " `" + I + "` key `" + Z + "` supplied to `" + H + "`.\nBad object: " + JSON.stringify(J[Q], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(O), null, "  ")
            );
          var M = ae(q, Z, H, X, I + "." + Z, r);
          if (M)
            return M;
        }
        return null;
      }
      return E(j);
    }
    function U(O) {
      switch (typeof O) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !O;
        case "object":
          if (Array.isArray(O))
            return O.every(U);
          if (O === null || c(O))
            return !0;
          var j = m(O);
          if (j) {
            var J = j.call(O), Q;
            if (j !== O.entries) {
              for (; !(Q = J.next()).done; )
                if (!U(Q.value))
                  return !1;
            } else
              for (; !(Q = J.next()).done; ) {
                var H = Q.value;
                if (H && !U(H[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function F(O, j) {
      return O === "symbol" ? !0 : j ? j["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && j instanceof Symbol : !1;
    }
    function Y(O) {
      var j = typeof O;
      return Array.isArray(O) ? "array" : O instanceof RegExp ? "object" : F(j, O) ? "symbol" : j;
    }
    function V(O) {
      if (typeof O > "u" || O === null)
        return "" + O;
      var j = Y(O);
      if (j === "object") {
        if (O instanceof Date)
          return "date";
        if (O instanceof RegExp)
          return "regexp";
      }
      return j;
    }
    function te(O) {
      var j = V(O);
      switch (j) {
        case "array":
        case "object":
          return "an " + j;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + j;
        default:
          return j;
      }
    }
    function z(O) {
      return !O.constructor || !O.constructor.name ? h : O.constructor.name;
    }
    return x.checkPropTypes = o, x.resetWarningCache = o.resetWarningCache, x.PropTypes = x, x;
  }, Kn;
}
var Xn, $i;
function nl() {
  if ($i) return Xn;
  $i = 1;
  var e = /* @__PURE__ */ Co();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Xn = function() {
    function n(s, c, l, u, d, m) {
      if (m !== e) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
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
var Pi;
function ol() {
  if (Pi) return Wr.exports;
  if (Pi = 1, process.env.NODE_ENV !== "production") {
    var e = bo(), t = !0;
    Wr.exports = /* @__PURE__ */ rl()(e.isElement, t);
  } else
    Wr.exports = /* @__PURE__ */ nl()();
  return Wr.exports;
}
var il = /* @__PURE__ */ ol();
const a = /* @__PURE__ */ Hs(il);
function al(e) {
  return e == null || Object.keys(e).length === 0;
}
function ka(e) {
  const {
    styles: t,
    defaultTheme: r = {}
  } = e, n = typeof t == "function" ? (o) => t(al(o) ? r : o) : t;
  return /* @__PURE__ */ A.jsx($a, {
    styles: n
  });
}
process.env.NODE_ENV !== "production" && (ka.propTypes = {
  defaultTheme: a.object,
  styles: a.oneOfType([a.array, a.string, a.object, a.func])
});
/**
 * @mui/styled-engine v6.3.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Na(e, t) {
  const r = oo(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
function sl(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const ki = [];
function Ni(e) {
  return ki[0] = e, Lt(ki);
}
function ht(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Aa(e) {
  if (/* @__PURE__ */ S.isValidElement(e) || !ht(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = Aa(e[r]);
  }), t;
}
function Qe(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return ht(e) && ht(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ S.isValidElement(t[o]) ? n[o] = t[o] : ht(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && ht(e[o]) ? n[o] = Qe(e[o], t[o], r) : r.clone ? n[o] = ht(t[o]) ? Aa(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
const cl = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function ll(e) {
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
  } = e, i = cl(t), s = Object.keys(i);
  function c(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${r})`;
  }
  function l(h) {
    return `@media (max-width:${(typeof t[h] == "number" ? t[h] : h) - n / 100}${r})`;
  }
  function u(h, x) {
    const b = s.indexOf(x);
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${r}) and (max-width:${(b !== -1 && typeof t[s[b]] == "number" ? t[s[b]] : x) - n / 100}${r})`;
  }
  function d(h) {
    return s.indexOf(h) + 1 < s.length ? u(h, s[s.indexOf(h) + 1]) : c(h);
  }
  function m(h) {
    const x = s.indexOf(h);
    return x === 0 ? c(s[1]) : x === s.length - 1 ? l(s[x]) : u(h, s[s.indexOf(h) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: s,
    values: i,
    up: c,
    down: l,
    between: u,
    only: d,
    not: m,
    unit: r,
    ...o
  };
}
function ul(e, t) {
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
function fl(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function pl(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Ot(18, `(${t})`));
    return null;
  }
  const [, n, o] = r, i = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(i);
}
function dl(e) {
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
const ml = {
  borderRadius: 4
}, Pt = process.env.NODE_ENV !== "production" ? a.oneOfType([a.number, a.string, a.object, a.array]) : {};
function vr(e, t) {
  return t ? Qe(e, t, {
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
}, Ai = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Rn[e]}px)`
}, hl = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : Rn[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function Ct(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || Ai;
    return t.reduce((s, c, l) => (s[i.up(i.keys[l])] = r(t[l]), s), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || Ai;
    return Object.keys(t).reduce((s, c) => {
      if (fl(i.keys, c)) {
        const l = pl(n.containerQueries ? n : hl, c);
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
function gl(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function yl(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function re(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Ot(7));
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
function cn(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = $n(e, r) || n, t && (o = t(o, n, e)), o;
}
function Ae(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const c = s[t], l = s.theme, u = $n(l, n) || {};
    return Ct(s, c, (m) => {
      let h = cn(u, o, m);
      return m === h && typeof m == "string" && (h = cn(u, o, `${t}${m === "default" ? "" : re(m)}`, m)), r === !1 ? h : {
        [r]: h
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Pt
  } : {}, i.filterProps = [t], i;
}
function vl(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const bl = {
  m: "margin",
  p: "padding"
}, xl = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, ji = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, El = vl((e) => {
  if (e.length > 2)
    if (ji[e])
      e = ji[e];
    else
      return [e];
  const [t, r] = e.split(""), n = bl[t], o = xl[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), Pn = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], kn = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Sl = [...Pn, ...kn];
function Nr(e, t, r, n) {
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
function wo(e) {
  return Nr(e, "spacing", 8, "spacing");
}
function Ar(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function Tl(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = Ar(t, r), n), {});
}
function Cl(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = El(r), i = Tl(o, n), s = e[r];
  return Ct(e, s, i);
}
function ja(e, t) {
  const r = wo(e.theme);
  return Object.keys(e).map((n) => Cl(e, t, n, r)).reduce(vr, {});
}
function $e(e) {
  return ja(e, Pn);
}
$e.propTypes = process.env.NODE_ENV !== "production" ? Pn.reduce((e, t) => (e[t] = Pt, e), {}) : {};
$e.filterProps = Pn;
function Pe(e) {
  return ja(e, kn);
}
Pe.propTypes = process.env.NODE_ENV !== "production" ? kn.reduce((e, t) => (e[t] = Pt, e), {}) : {};
Pe.filterProps = kn;
process.env.NODE_ENV !== "production" && Sl.reduce((e, t) => (e[t] = Pt, e), {});
function Ma(e = 8, t = wo({
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
function Nn(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? vr(o, t[i](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function rt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function st(e, t) {
  return Ae({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const wl = st("border", rt), Ol = st("borderTop", rt), Rl = st("borderRight", rt), $l = st("borderBottom", rt), Pl = st("borderLeft", rt), kl = st("borderColor"), Nl = st("borderTopColor"), Al = st("borderRightColor"), jl = st("borderBottomColor"), Ml = st("borderLeftColor"), Il = st("outline", rt), _l = st("outlineColor"), An = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Nr(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: Ar(t, n)
    });
    return Ct(e, e.borderRadius, r);
  }
  return null;
};
An.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Pt
} : {};
An.filterProps = ["borderRadius"];
Nn(wl, Ol, Rl, $l, Pl, kl, Nl, Al, jl, Ml, An, Il, _l);
const jn = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Nr(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: Ar(t, n)
    });
    return Ct(e, e.gap, r);
  }
  return null;
};
jn.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Pt
} : {};
jn.filterProps = ["gap"];
const Mn = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Nr(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: Ar(t, n)
    });
    return Ct(e, e.columnGap, r);
  }
  return null;
};
Mn.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Pt
} : {};
Mn.filterProps = ["columnGap"];
const In = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Nr(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: Ar(t, n)
    });
    return Ct(e, e.rowGap, r);
  }
  return null;
};
In.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Pt
} : {};
In.filterProps = ["rowGap"];
const Dl = Ae({
  prop: "gridColumn"
}), Ll = Ae({
  prop: "gridRow"
}), Bl = Ae({
  prop: "gridAutoFlow"
}), Vl = Ae({
  prop: "gridAutoColumns"
}), zl = Ae({
  prop: "gridAutoRows"
}), Fl = Ae({
  prop: "gridTemplateColumns"
}), Wl = Ae({
  prop: "gridTemplateRows"
}), Ul = Ae({
  prop: "gridTemplateAreas"
}), Yl = Ae({
  prop: "gridArea"
});
Nn(jn, Mn, In, Dl, Ll, Bl, Vl, zl, Fl, Wl, Ul, Yl);
function Kt(e, t) {
  return t === "grey" ? t : e;
}
const Hl = Ae({
  prop: "color",
  themeKey: "palette",
  transform: Kt
}), ql = Ae({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Kt
}), Gl = Ae({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Kt
});
Nn(Hl, ql, Gl);
function Xe(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Kl = Ae({
  prop: "width",
  transform: Xe
}), Oo = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var o, i, s, c, l;
      const n = ((s = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : s[r]) || Rn[r];
      return n ? ((l = (c = e.theme) == null ? void 0 : c.breakpoints) == null ? void 0 : l.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: Xe(r)
      };
    };
    return Ct(e, e.maxWidth, t);
  }
  return null;
};
Oo.filterProps = ["maxWidth"];
const Xl = Ae({
  prop: "minWidth",
  transform: Xe
}), Jl = Ae({
  prop: "height",
  transform: Xe
}), Ql = Ae({
  prop: "maxHeight",
  transform: Xe
}), Zl = Ae({
  prop: "minHeight",
  transform: Xe
});
Ae({
  prop: "size",
  cssProperty: "width",
  transform: Xe
});
Ae({
  prop: "size",
  cssProperty: "height",
  transform: Xe
});
const eu = Ae({
  prop: "boxSizing"
});
Nn(Kl, Oo, Xl, Jl, Ql, Zl, eu);
const jr = {
  // borders
  border: {
    themeKey: "borders",
    transform: rt
  },
  borderTop: {
    themeKey: "borders",
    transform: rt
  },
  borderRight: {
    themeKey: "borders",
    transform: rt
  },
  borderBottom: {
    themeKey: "borders",
    transform: rt
  },
  borderLeft: {
    themeKey: "borders",
    transform: rt
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
    transform: rt
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: An
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
    style: Pe
  },
  pt: {
    style: Pe
  },
  pr: {
    style: Pe
  },
  pb: {
    style: Pe
  },
  pl: {
    style: Pe
  },
  px: {
    style: Pe
  },
  py: {
    style: Pe
  },
  padding: {
    style: Pe
  },
  paddingTop: {
    style: Pe
  },
  paddingRight: {
    style: Pe
  },
  paddingBottom: {
    style: Pe
  },
  paddingLeft: {
    style: Pe
  },
  paddingX: {
    style: Pe
  },
  paddingY: {
    style: Pe
  },
  paddingInline: {
    style: Pe
  },
  paddingInlineStart: {
    style: Pe
  },
  paddingInlineEnd: {
    style: Pe
  },
  paddingBlock: {
    style: Pe
  },
  paddingBlockStart: {
    style: Pe
  },
  paddingBlockEnd: {
    style: Pe
  },
  m: {
    style: $e
  },
  mt: {
    style: $e
  },
  mr: {
    style: $e
  },
  mb: {
    style: $e
  },
  ml: {
    style: $e
  },
  mx: {
    style: $e
  },
  my: {
    style: $e
  },
  margin: {
    style: $e
  },
  marginTop: {
    style: $e
  },
  marginRight: {
    style: $e
  },
  marginBottom: {
    style: $e
  },
  marginLeft: {
    style: $e
  },
  marginX: {
    style: $e
  },
  marginY: {
    style: $e
  },
  marginInline: {
    style: $e
  },
  marginInlineStart: {
    style: $e
  },
  marginInlineEnd: {
    style: $e
  },
  marginBlock: {
    style: $e
  },
  marginBlockStart: {
    style: $e
  },
  marginBlockEnd: {
    style: $e
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
    style: In
  },
  columnGap: {
    style: Mn
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
    style: Oo
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
function tu(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function ru(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function nu() {
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
      style: m
    } = c;
    if (n == null)
      return null;
    if (u === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const h = $n(o, u) || {};
    return m ? m(s) : Ct(s, n, (b) => {
      let f = cn(h, d, b);
      return b === f && typeof b == "string" && (f = cn(h, d, `${r}${b === "default" ? "" : re(b)}`, b)), l === !1 ? f : {
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
    const i = o.unstable_sxConfig ?? jr;
    function s(c) {
      let l = c;
      if (typeof c == "function")
        l = c(o);
      else if (typeof c != "object")
        return c;
      if (!l)
        return null;
      const u = gl(o.breakpoints), d = Object.keys(u);
      let m = u;
      return Object.keys(l).forEach((h) => {
        const x = ru(l[h], o);
        if (x != null)
          if (typeof x == "object")
            if (i[h])
              m = vr(m, e(h, x, o, i));
            else {
              const b = Ct({
                theme: o
              }, x, (f) => ({
                [h]: f
              }));
              tu(b, x) ? m[h] = t({
                sx: x,
                theme: o
              }) : m = vr(m, b);
            }
          else
            m = vr(m, e(h, x, o, i));
      }), ul(o, yl(d, m));
    }
    return Array.isArray(n) ? n.map(s) : s(n);
  }
  return t;
}
const Rt = nu();
Rt.filterProps = ["sx"];
function ou(e, t) {
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
function Ro(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {},
    ...s
  } = e, c = ll(r), l = Ma(o);
  let u = Qe({
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
      ...ml,
      ...i
    }
  }, s);
  return u = dl(u), u.applyStyles = ou, u = t.reduce((d, m) => Qe(d, m), u), u.unstable_sxConfig = {
    ...jr,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, u.unstable_sx = function(m) {
    return Rt({
      sx: m,
      theme: this
    });
  }, u;
}
function iu(e) {
  return Object.keys(e).length === 0;
}
function Ia(e = null) {
  const t = S.useContext(Vt);
  return !t || iu(t) ? e : t;
}
const au = Ro();
function _a(e = au) {
  return Ia(e);
}
const su = (e) => {
  var n;
  const t = {
    systemProps: {},
    otherProps: {}
  }, r = ((n = e == null ? void 0 : e.theme) == null ? void 0 : n.unstable_sxConfig) ?? jr;
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
  } = su(r);
  let i;
  return Array.isArray(t) ? i = [n, ...t] : typeof t == "function" ? i = (...s) => {
    const c = t(...s);
    return ht(c) ? {
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
const Mi = (e) => e, cu = () => {
  let e = Mi;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Mi;
    }
  };
}, La = cu();
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
function lu(e = {}) {
  const {
    themeId: t,
    defaultTheme: r,
    defaultClassName: n = "MuiBox-root",
    generateClassName: o
  } = e, i = Na("div", {
    shouldForwardProp: (c) => c !== "theme" && c !== "sx" && c !== "as"
  })(Rt);
  return /* @__PURE__ */ S.forwardRef(function(l, u) {
    const d = _a(r), {
      className: m,
      component: h = "div",
      ...x
    } = Da(l);
    return /* @__PURE__ */ A.jsx(i, {
      as: h,
      ref: u,
      className: ce(m, o ? o(n) : n),
      theme: t && d[t] || d,
      ...x
    });
  });
}
const uu = {
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
function Fe(e, t, r = "Mui") {
  const n = uu[t];
  return n ? `${r}-${n}` : `${La.generate(e)}-${t}`;
}
function We(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = Fe(e, o, r);
  }), n;
}
var Ur = { exports: {} }, ge = {};
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
function fu() {
  if (Ii) return ge;
  Ii = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), x = Symbol.for("react.client.reference");
  function b(f) {
    if (typeof f == "object" && f !== null) {
      var E = f.$$typeof;
      switch (E) {
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
                case d:
                  return f;
                case i:
                  return f;
                default:
                  return E;
              }
          }
        case t:
          return E;
      }
    }
  }
  return ge.ContextConsumer = i, ge.ContextProvider = s, ge.Element = e, ge.ForwardRef = c, ge.Fragment = r, ge.Lazy = m, ge.Memo = d, ge.Portal = t, ge.Profiler = o, ge.StrictMode = n, ge.Suspense = l, ge.SuspenseList = u, ge.isContextConsumer = function(f) {
    return b(f) === i;
  }, ge.isContextProvider = function(f) {
    return b(f) === s;
  }, ge.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }, ge.isForwardRef = function(f) {
    return b(f) === c;
  }, ge.isFragment = function(f) {
    return b(f) === r;
  }, ge.isLazy = function(f) {
    return b(f) === m;
  }, ge.isMemo = function(f) {
    return b(f) === d;
  }, ge.isPortal = function(f) {
    return b(f) === t;
  }, ge.isProfiler = function(f) {
    return b(f) === o;
  }, ge.isStrictMode = function(f) {
    return b(f) === n;
  }, ge.isSuspense = function(f) {
    return b(f) === l;
  }, ge.isSuspenseList = function(f) {
    return b(f) === u;
  }, ge.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === r || f === o || f === n || f === l || f === u || f === h || typeof f == "object" && f !== null && (f.$$typeof === m || f.$$typeof === d || f.$$typeof === s || f.$$typeof === i || f.$$typeof === c || f.$$typeof === x || f.getModuleId !== void 0);
  }, ge.typeOf = b, ge;
}
var ye = {};
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
function pu() {
  return _i || (_i = 1, process.env.NODE_ENV !== "production" && function() {
    function e(f) {
      if (typeof f == "object" && f !== null) {
        var E = f.$$typeof;
        switch (E) {
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
                  case h:
                  case m:
                    return f;
                  case s:
                    return f;
                  default:
                    return E;
                }
            }
          case r:
            return E;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), b = Symbol.for("react.client.reference");
    ye.ContextConsumer = s, ye.ContextProvider = c, ye.Element = t, ye.ForwardRef = l, ye.Fragment = n, ye.Lazy = h, ye.Memo = m, ye.Portal = r, ye.Profiler = i, ye.StrictMode = o, ye.Suspense = u, ye.SuspenseList = d, ye.isContextConsumer = function(f) {
      return e(f) === s;
    }, ye.isContextProvider = function(f) {
      return e(f) === c;
    }, ye.isElement = function(f) {
      return typeof f == "object" && f !== null && f.$$typeof === t;
    }, ye.isForwardRef = function(f) {
      return e(f) === l;
    }, ye.isFragment = function(f) {
      return e(f) === n;
    }, ye.isLazy = function(f) {
      return e(f) === h;
    }, ye.isMemo = function(f) {
      return e(f) === m;
    }, ye.isPortal = function(f) {
      return e(f) === r;
    }, ye.isProfiler = function(f) {
      return e(f) === i;
    }, ye.isStrictMode = function(f) {
      return e(f) === o;
    }, ye.isSuspense = function(f) {
      return e(f) === u;
    }, ye.isSuspenseList = function(f) {
      return e(f) === d;
    }, ye.isValidElementType = function(f) {
      return typeof f == "string" || typeof f == "function" || f === n || f === i || f === o || f === u || f === d || f === x || typeof f == "object" && f !== null && (f.$$typeof === h || f.$$typeof === m || f.$$typeof === c || f.$$typeof === s || f.$$typeof === l || f.$$typeof === b || f.getModuleId !== void 0);
    }, ye.typeOf = e;
  }()), ye;
}
var Di;
function du() {
  return Di || (Di = 1, process.env.NODE_ENV === "production" ? Ur.exports = /* @__PURE__ */ fu() : Ur.exports = /* @__PURE__ */ pu()), Ur.exports;
}
var Li = /* @__PURE__ */ du();
function Va(e, t = "") {
  return e.displayName || e.name || t;
}
function Bi(e, t, r) {
  const n = Va(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function mu(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Va(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Li.ForwardRef:
          return Bi(e, e.render, "ForwardRef");
        case Li.Memo:
          return Bi(e, e.type, "memo");
        default:
          return;
      }
  }
}
function za(e) {
  const {
    variants: t,
    ...r
  } = e, n = {
    variants: t,
    style: Ni(r),
    isProcessed: !0
  };
  return n.style === r || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = Ni(o.style));
  }), n;
}
const hu = Ro();
function Jn(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function gu(e) {
  return e ? (t, r) => r[e] : null;
}
function yu(e, t, r) {
  e.theme = Eu(e.theme) ? r : e.theme[t] || e.theme;
}
function nn(e, t) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((n) => nn(e, n));
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
    return Fa(e, r.variants, [n]);
  }
  return r != null && r.isProcessed ? r.style : r;
}
function Fa(e, t, r = []) {
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
function vu(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = hu,
    rootShouldForwardProp: n = Jn,
    slotShouldForwardProp: o = Jn
  } = e;
  function i(c) {
    yu(c, t, r);
  }
  return (c, l = {}) => {
    sl(c, (g) => g.filter((C) => C !== Rt));
    const {
      name: u,
      slot: d,
      skipVariantsResolver: m,
      skipSx: h,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: x = gu(Wa(d)),
      ...b
    } = l, f = m !== void 0 ? m : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      d && d !== "Root" && d !== "root" || !1
    ), E = h || !1;
    let T = Jn;
    d === "Root" || d === "root" ? T = n : d ? T = o : Su(c) && (T = void 0);
    const k = Na(c, {
      shouldForwardProp: T,
      label: xu(u, d),
      ...b
    }), w = (g) => {
      if (typeof g == "function" && g.__emotion_real !== g)
        return function($) {
          return nn($, g);
        };
      if (ht(g)) {
        const C = za(g);
        return C.variants ? function(L) {
          return nn(L, C);
        } : C.style;
      }
      return g;
    }, v = (...g) => {
      const C = [], $ = g.map(w), L = [];
      if (C.push(i), u && x && L.push(function(D) {
        var Y, V;
        const U = (V = (Y = D.theme.components) == null ? void 0 : Y[u]) == null ? void 0 : V.styleOverrides;
        if (!U)
          return null;
        const F = {};
        for (const te in U)
          F[te] = nn(D, U[te]);
        return x(D, F);
      }), u && !f && L.push(function(D) {
        var F, Y;
        const _ = D.theme, U = (Y = (F = _ == null ? void 0 : _.components) == null ? void 0 : F[u]) == null ? void 0 : Y.variants;
        return U ? Fa(D, U) : null;
      }), E || L.push(Rt), Array.isArray($[0])) {
        const P = $.shift(), D = new Array(C.length).fill(""), _ = new Array(L.length).fill("");
        let U;
        U = [...D, ...P, ..._], U.raw = [...D, ...P.raw, ..._], C.unshift(U);
      }
      const B = [...C, ...$, ...L], p = k(...B);
      return c.muiName && (p.muiName = c.muiName), process.env.NODE_ENV !== "production" && (p.displayName = bu(u, d, c)), p;
    };
    return k.withConfig && (v.withConfig = k.withConfig), v;
  };
}
function bu(e, t, r) {
  return e ? `${e}${re(t || "")}` : `Styled(${mu(r)})`;
}
function xu(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${Wa(t || "Root")}`), r;
}
function Eu(e) {
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
function io(e, t) {
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
              r[o][l] = io(i[l], s[l]);
            }
        }
      } else r[o] === void 0 && (r[o] = e[o]);
    }
  return r;
}
const Qt = typeof window < "u" ? S.useLayoutEffect : S.useEffect;
function Tu(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function $o(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), Tu(e, t, r);
}
function Cu(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function $t(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return $t(Cu(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Ot(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Ot(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const wu = (e) => {
  const t = $t(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, hr = (e, t) => {
  try {
    return wu(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function _n(e) {
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
  e = $t(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), s = (u, d = (u + r / 30) % 12) => o - i * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let c = "rgb";
  const l = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (c += "a", l.push(t[3])), _n({
    type: c,
    values: l
  });
}
function ao(e) {
  e = $t(e);
  let t = e.type === "hsl" || e.type === "hsla" ? $t(Ua(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Vi(e, t) {
  const r = ao(e), n = ao(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function Me(e, t) {
  return e = $t(e), t = $o(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, _n(e);
}
function Yr(e, t, r) {
  try {
    return Me(e, t);
  } catch {
    return e;
  }
}
function Po(e, t) {
  if (e = $t(e), t = $o(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return _n(e);
}
function be(e, t, r) {
  try {
    return Po(e, t);
  } catch {
    return e;
  }
}
function ko(e, t) {
  if (e = $t(e), t = $o(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return _n(e);
}
function xe(e, t, r) {
  try {
    return ko(e, t);
  } catch {
    return e;
  }
}
function Ou(e, t = 0.15) {
  return ao(e) > 0.5 ? Po(e, t) : ko(e, t);
}
function Hr(e, t, r) {
  try {
    return Ou(e, t);
  } catch {
    return e;
  }
}
function Mr(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function Ru(e) {
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
  return typeof l == "function" && !Ru(l) && (c = "Did you accidentally use a plain function component for an element instead?"), c !== void 0 ? new Error(`Invalid ${n} \`${s}\` supplied to \`${r}\`. Expected an element that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const No = Mr(a.element, Ya);
No.isRequired = Mr(a.element.isRequired, Ya);
function $u(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Pu(e, t, r, n, o) {
  const i = e[t], s = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  return typeof i == "function" && !$u(i) && (c = "Did you accidentally provide a plain function component instead?"), c !== void 0 ? new Error(`Invalid ${n} \`${s}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Ha = Mr(a.elementType, Pu), ku = "exact-prop: ​";
function Ao(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [ku]: (t) => {
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
const jo = a.oneOfType([a.func, a.object]);
function zi(e) {
  return e && e.ownerDocument || document;
}
function so(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let Fi = 0;
function Nu(e) {
  const [t, r] = S.useState(e), n = e || t;
  return S.useEffect(() => {
    t == null && (Fi += 1, r(`mui-${Fi}`));
  }, [t]), n;
}
const Au = {
  ...S
}, Wi = Au.useId;
function ju(e) {
  if (Wi !== void 0) {
    const t = Wi();
    return e ?? t;
  }
  return Nu(e);
}
function Mu(e, t, r, n, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = o || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${i}\` is not supported. Please remove it.`) : null;
}
function Iu({
  controlled: e,
  default: t,
  name: r,
  state: n = "value"
}) {
  const {
    current: o
  } = S.useRef(e !== void 0), [i, s] = S.useState(t), c = o ? e : i;
  if (process.env.NODE_ENV !== "production") {
    S.useEffect(() => {
      o !== (e !== void 0) && console.error([`MUI: A component is changing the ${o ? "" : "un"}controlled ${n} state of ${r} to be ${o ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${r} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [n, r, e]);
    const {
      current: u
    } = S.useRef(t);
    S.useEffect(() => {
      !o && !Object.is(u, t) && console.error([`MUI: A component is changing the default ${n} state of an uncontrolled ${r} after being initialized. To suppress this warning opt to use a controlled ${r}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const l = S.useCallback((u) => {
    o || s(u);
  }, []);
  return [c, l];
}
function Xt(e) {
  const t = S.useRef(e);
  return Qt(() => {
    t.current = e;
  }), S.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function ot(...e) {
  return S.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      so(r, t);
    });
  }, e);
}
const Ui = {};
function qa(e, t) {
  const r = S.useRef(Ui);
  return r.current === Ui && (r.current = e(t)), r;
}
const _u = [];
function Du(e) {
  S.useEffect(e, _u);
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
function jt() {
  const e = qa(Dn.create).current;
  return Du(e.disposeEffect), e;
}
function ln(e) {
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
function Lu(e) {
  return typeof e == "string";
}
function Ga(e, t, r) {
  return e === void 0 || Lu(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...r
    }
  };
}
function Bu(e, t = []) {
  if (e === void 0)
    return {};
  const r = {};
  return Object.keys(e).filter((n) => n.match(/^on[A-Z]/) && typeof e[n] == "function" && !t.includes(n)).forEach((n) => {
    r[n] = e[n];
  }), r;
}
function Yi(e) {
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
  const s = Bu({
    ...o,
    ...n
  }), c = Yi(n), l = Yi(o), u = t(s), d = ce(u == null ? void 0 : u.className, r == null ? void 0 : r.className, i, o == null ? void 0 : o.className, n == null ? void 0 : n.className), m = {
    ...u == null ? void 0 : u.style,
    ...r == null ? void 0 : r.style,
    ...o == null ? void 0 : o.style,
    ...n == null ? void 0 : n.style
  }, h = {
    ...u,
    ...r,
    ...l,
    ...c
  };
  return d.length > 0 && (h.className = d), Object.keys(m).length > 0 && (h.style = m), {
    props: h,
    internalRef: u.ref
  };
}
function Xa(e, t, r) {
  return typeof e == "function" ? e(t, r) : e;
}
function Vu(e) {
  var m;
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
  }), u = ot(l, s == null ? void 0 : s.ref, (m = e.additionalProps) == null ? void 0 : m.ref);
  return Ga(t, {
    ...c,
    ref: u
  }, n);
}
function Mo(e) {
  var t;
  return parseInt(S.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
const Io = /* @__PURE__ */ S.createContext(null);
process.env.NODE_ENV !== "production" && (Io.displayName = "ThemeContext");
function _o() {
  const e = S.useContext(Io);
  return process.env.NODE_ENV !== "production" && S.useDebugValue(e), e;
}
const zu = typeof Symbol == "function" && Symbol.for, Fu = zu ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Wu(e, t) {
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
function un(e) {
  const {
    children: t,
    theme: r
  } = e, n = _o();
  process.env.NODE_ENV !== "production" && n === null && typeof r == "function" && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const o = S.useMemo(() => {
    const i = n === null ? {
      ...r
    } : Wu(n, r);
    return i != null && (i[Fu] = n !== null), i;
  }, [r, n]);
  return /* @__PURE__ */ A.jsx(Io.Provider, {
    value: o,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (un.propTypes = {
  /**
   * Your component tree.
   */
  children: a.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: a.oneOfType([a.object, a.func]).isRequired
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (un.propTypes = Ao(un.propTypes));
const Ja = /* @__PURE__ */ S.createContext();
function Qa({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ A.jsx(Ja.Provider, {
    value: e ?? !0,
    ...t
  });
}
process.env.NODE_ENV !== "production" && (Qa.propTypes = {
  children: a.node,
  value: a.bool
});
const Za = () => S.useContext(Ja) ?? !1, es = /* @__PURE__ */ S.createContext(void 0);
function ts({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ A.jsx(es.Provider, {
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
function Uu(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? io(o.defaultProps, n) : !o.styleOverrides && !o.variants ? io(o, n) : n;
}
function Yu({
  props: e,
  name: t
}) {
  const r = S.useContext(es);
  return Uu({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
const Hi = {};
function qi(e, t, r, n = !1) {
  return S.useMemo(() => {
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
  } = e, o = Ia(Hi), i = _o() || Hi;
  process.env.NODE_ENV !== "production" && (o === null && typeof r == "function" || n && o && !o[n] && typeof r == "function") && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const s = qi(n, o, r), c = qi(n, i, r, !0), l = (n ? s[n] : s).direction === "rtl";
  return /* @__PURE__ */ A.jsx(un, {
    theme: c,
    children: /* @__PURE__ */ A.jsx(Vt.Provider, {
      value: s,
      children: /* @__PURE__ */ A.jsx(Qa, {
        value: l,
        children: /* @__PURE__ */ A.jsx(ts, {
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
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (Or.propTypes = Ao(Or.propTypes));
const Gi = {
  theme: void 0
};
function Hu(e) {
  let t, r;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== r) && (Gi.theme = o.theme, i = za(e(Gi)), t = i, r = o.theme), i;
  };
}
const Do = "mode", Lo = "color-scheme", qu = "data-color-scheme";
function Gu(e) {
  const {
    defaultMode: t = "system",
    defaultLightColorScheme: r = "light",
    defaultDarkColorScheme: n = "dark",
    modeStorageKey: o = Do,
    colorSchemeStorageKey: i = Lo,
    attribute: s = qu,
    colorSchemeNode: c = "document.documentElement",
    nonce: l
  } = e;
  let u = "", d = s;
  if (s === "class" && (d = ".%s"), s === "data" && (d = "[data-%s]"), d.startsWith(".")) {
    const h = d.substring(1);
    u += `${c}.classList.remove('${h}'.replace('%s', light), '${h}'.replace('%s', dark));
      ${c}.classList.add('${h}'.replace('%s', colorScheme));`;
  }
  const m = d.match(/\[([^\]]+)\]/);
  if (m) {
    const [h, x] = m[1].split("=");
    x || (u += `${c}.removeAttribute('${h}'.replace('%s', light));
      ${c}.removeAttribute('${h}'.replace('%s', dark));`), u += `
      ${c}.setAttribute('${h}'.replace('%s', colorScheme), ${x ? `${x}.replace('%s', colorScheme)` : '""'});`;
  } else
    u += `${c}.setAttribute('${d}', colorScheme);`;
  return /* @__PURE__ */ A.jsx("script", {
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
function Ki(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function rs(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function Ku(e) {
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
function Xu(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: r,
    defaultDarkColorScheme: n,
    supportedColorSchemes: o = [],
    modeStorageKey: i = Do,
    colorSchemeStorageKey: s = Lo,
    storageWindow: c = typeof window > "u" ? void 0 : window,
    noSsr: l = !1
  } = e, u = o.join(","), d = o.length > 1, [m, h] = S.useState(() => {
    const v = Qn(i, t), g = Qn(`${s}-light`, r), C = Qn(`${s}-dark`, n);
    return {
      mode: v,
      systemMode: Ki(v),
      lightColorScheme: g,
      darkColorScheme: C
    };
  }), [x, b] = S.useState(l || !d);
  S.useEffect(() => {
    b(!0);
  }, []);
  const f = Ku(m), E = S.useCallback((v) => {
    h((g) => {
      if (v === g.mode)
        return g;
      const C = v ?? t;
      try {
        localStorage.setItem(i, C);
      } catch {
      }
      return {
        ...g,
        mode: C,
        systemMode: Ki(C)
      };
    });
  }, [i, t]), T = S.useCallback((v) => {
    v ? typeof v == "string" ? v && !u.includes(v) ? console.error(`\`${v}\` does not exist in \`theme.colorSchemes\`.`) : h((g) => {
      const C = {
        ...g
      };
      return rs(g, ($) => {
        try {
          localStorage.setItem(`${s}-${$}`, v);
        } catch {
        }
        $ === "light" && (C.lightColorScheme = v), $ === "dark" && (C.darkColorScheme = v);
      }), C;
    }) : h((g) => {
      const C = {
        ...g
      }, $ = v.light === null ? r : v.light, L = v.dark === null ? n : v.dark;
      if ($)
        if (!u.includes($))
          console.error(`\`${$}\` does not exist in \`theme.colorSchemes\`.`);
        else {
          C.lightColorScheme = $;
          try {
            localStorage.setItem(`${s}-light`, $);
          } catch {
          }
        }
      if (L)
        if (!u.includes(L))
          console.error(`\`${L}\` does not exist in \`theme.colorSchemes\`.`);
        else {
          C.darkColorScheme = L;
          try {
            localStorage.setItem(`${s}-dark`, L);
          } catch {
          }
        }
      return C;
    }) : h((g) => {
      try {
        localStorage.setItem(`${s}-light`, r), localStorage.setItem(`${s}-dark`, n);
      } catch {
      }
      return {
        ...g,
        lightColorScheme: r,
        darkColorScheme: n
      };
    });
  }, [u, s, r, n]), k = S.useCallback((v) => {
    m.mode === "system" && h((g) => {
      const C = v != null && v.matches ? "dark" : "light";
      return g.systemMode === C ? g : {
        ...g,
        systemMode: C
      };
    });
  }, [m.mode]), w = S.useRef(k);
  return w.current = k, S.useEffect(() => {
    if (typeof window.matchMedia != "function" || !d)
      return;
    const v = (...C) => w.current(...C), g = window.matchMedia("(prefers-color-scheme: dark)");
    return g.addListener(v), v(g), () => {
      g.removeListener(v);
    };
  }, [d]), S.useEffect(() => {
    if (c && d) {
      const v = (g) => {
        const C = g.newValue;
        typeof g.key == "string" && g.key.startsWith(s) && (!C || u.match(C)) && (g.key.endsWith("light") && T({
          light: C
        }), g.key.endsWith("dark") && T({
          dark: C
        })), g.key === i && (!C || ["light", "dark", "system"].includes(C)) && E(C || t);
      };
      return c.addEventListener("storage", v), () => {
        c.removeEventListener("storage", v);
      };
    }
  }, [T, E, i, s, u, t, c, d]), {
    ...m,
    mode: x ? m.mode : void 0,
    systemMode: x ? m.systemMode : void 0,
    colorScheme: x ? f : void 0,
    setMode: E,
    setColorScheme: T
  };
}
const Ju = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function Qu(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: r = {},
    modeStorageKey: n = Do,
    colorSchemeStorageKey: o = Lo,
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
  }, u = /* @__PURE__ */ S.createContext(void 0);
  process.env.NODE_ENV !== "production" && (u.displayName = "ColorSchemeContext");
  const d = () => S.useContext(u) || l, m = {}, h = {};
  function x(T) {
    var W, oe, Ce, le;
    const {
      children: k,
      theme: w,
      modeStorageKey: v = n,
      colorSchemeStorageKey: g = o,
      disableTransitionOnChange: C = i,
      storageWindow: $ = typeof window > "u" ? void 0 : window,
      documentNode: L = typeof document > "u" ? void 0 : document,
      colorSchemeNode: B = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: p = !1,
      disableStyleSheetGeneration: P = !1,
      defaultMode: D = "system",
      noSsr: _
    } = T, U = S.useRef(!1), F = _o(), Y = S.useContext(u), V = !!Y && !p, te = S.useMemo(() => w || (typeof r == "function" ? r() : r), [w]), z = te[t], O = z || te, {
      colorSchemes: j = m,
      components: J = h,
      cssVarPrefix: Q
    } = O, H = Object.keys(j).filter((G) => !!j[G]).join(","), X = S.useMemo(() => H.split(","), [H]), I = typeof s == "string" ? s : s.light, q = typeof s == "string" ? s : s.dark, K = j[I] && j[q] ? D : ((oe = (W = j[O.defaultColorScheme]) == null ? void 0 : W.palette) == null ? void 0 : oe.mode) || ((Ce = O.palette) == null ? void 0 : Ce.mode), {
      mode: ee,
      setMode: Z,
      systemMode: ae,
      lightColorScheme: M,
      darkColorScheme: Se,
      colorScheme: Oe,
      setColorScheme: Ie
    } = Xu({
      supportedColorSchemes: X,
      defaultLightColorScheme: I,
      defaultDarkColorScheme: q,
      modeStorageKey: v,
      colorSchemeStorageKey: g,
      defaultMode: K,
      storageWindow: $,
      noSsr: _
    });
    let Ke = ee, he = Oe;
    V && (Ke = Y.mode, he = Y.colorScheme);
    const Re = S.useMemo(() => {
      var Te;
      const G = he || O.defaultColorScheme, me = ((Te = O.generateThemeVars) == null ? void 0 : Te.call(O)) || O.vars, Ee = {
        ...O,
        components: J,
        colorSchemes: j,
        cssVarPrefix: Q,
        vars: me
      };
      if (typeof Ee.generateSpacing == "function" && (Ee.spacing = Ee.generateSpacing()), G) {
        const se = j[G];
        se && typeof se == "object" && Object.keys(se).forEach((Ne) => {
          se[Ne] && typeof se[Ne] == "object" ? Ee[Ne] = {
            ...Ee[Ne],
            ...se[Ne]
          } : Ee[Ne] = se[Ne];
        });
      }
      return c ? c(Ee) : Ee;
    }, [O, he, J, j, Q]), Le = O.colorSchemeSelector;
    S.useEffect(() => {
      if (he && B && Le && Le !== "media") {
        const G = Le;
        let me = Le;
        if (G === "class" && (me = ".%s"), G === "data" && (me = "[data-%s]"), G != null && G.startsWith("data-") && !G.includes("%s") && (me = `[${G}="%s"]`), me.startsWith("."))
          B.classList.remove(...X.map((Ee) => me.substring(1).replace("%s", Ee))), B.classList.add(me.substring(1).replace("%s", he));
        else {
          const Ee = me.replace("%s", he).match(/\[([^\]]+)\]/);
          if (Ee) {
            const [Te, se] = Ee[1].split("=");
            se || X.forEach((Ne) => {
              B.removeAttribute(Te.replace(he, Ne));
            }), B.setAttribute(Te, se ? se.replace(/"|'/g, "") : "");
          } else
            B.setAttribute(me, he);
        }
      }
    }, [he, Le, B, X]), S.useEffect(() => {
      let G;
      if (C && U.current && L) {
        const me = L.createElement("style");
        me.appendChild(L.createTextNode(Ju)), L.head.appendChild(me), window.getComputedStyle(L.body), G = setTimeout(() => {
          L.head.removeChild(me);
        }, 1);
      }
      return () => {
        clearTimeout(G);
      };
    }, [he, C, L]), S.useEffect(() => (U.current = !0, () => {
      U.current = !1;
    }), []);
    const _e = S.useMemo(() => ({
      allColorSchemes: X,
      colorScheme: he,
      darkColorScheme: Se,
      lightColorScheme: M,
      mode: Ke,
      setColorScheme: Ie,
      setMode: process.env.NODE_ENV === "production" ? Z : (G) => {
        Re.colorSchemeSelector === "media" && console.error(["MUI: The `setMode` function has no effect if `colorSchemeSelector` is `media` (`media` is the default value).", "To toggle the mode manually, please configure `colorSchemeSelector` to use a class or data attribute.", "To learn more, visit https://mui.com/material-ui/customization/css-theme-variables/configuration/#toggling-dark-mode-manually"].join(`
`)), Z(G);
      },
      systemMode: ae
    }), [X, he, Se, M, Ke, Ie, Z, ae, Re.colorSchemeSelector]);
    let y = !0;
    (P || O.cssVariables === !1 || V && (F == null ? void 0 : F.cssVarPrefix) === Q) && (y = !1);
    const N = /* @__PURE__ */ A.jsxs(S.Fragment, {
      children: [/* @__PURE__ */ A.jsx(Or, {
        themeId: z ? t : void 0,
        theme: Re,
        children: k
      }), y && /* @__PURE__ */ A.jsx(ka, {
        styles: ((le = Re.generateStyleSheets) == null ? void 0 : le.call(Re)) || []
      })]
    });
    return V ? N : /* @__PURE__ */ A.jsx(u.Provider, {
      value: _e,
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
    getInitColorSchemeScript: (T) => Gu({
      colorSchemeStorageKey: o,
      defaultLightColorScheme: b,
      defaultDarkColorScheme: f,
      modeStorageKey: n,
      ...T
    })
  };
}
function Zu(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const Xi = (e, t, r, n = []) => {
  let o = e;
  t.forEach((i, s) => {
    s === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = r : o && typeof o == "object" && (o[i] = r) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
  });
}, ef = (e, t, r) => {
  function n(o, i = [], s = []) {
    Object.entries(o).forEach(([c, l]) => {
      (!r || !r([...i, c])) && l != null && (typeof l == "object" && Object.keys(l).length > 0 ? n(l, [...i, c], Array.isArray(l) ? [...s, c] : s) : t([...i, c], l, s));
    });
  }
  n(e);
}, tf = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Zn(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, i = {}, s = {};
  return ef(
    e,
    (c, l, u) => {
      if ((typeof l == "string" || typeof l == "number") && (!n || !n(c, l))) {
        const d = `--${r ? `${r}-` : ""}${c.join("-")}`, m = tf(c, l);
        Object.assign(o, {
          [d]: m
        }), Xi(i, c, `var(${d})`, u), Xi(s, c, `var(${d}, ${m})`, u);
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
function rf(e, t = {}) {
  const {
    getSelector: r = E,
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
    varsWithDefaults: m
  } = Zn(l, t);
  let h = m;
  const x = {}, {
    [c]: b,
    ...f
  } = i;
  if (Object.entries(f || {}).forEach(([w, v]) => {
    const {
      vars: g,
      css: C,
      varsWithDefaults: $
    } = Zn(v, t);
    h = Qe(h, $), x[w] = {
      css: C,
      vars: g
    };
  }), b) {
    const {
      css: w,
      vars: v,
      varsWithDefaults: g
    } = Zn(b, t);
    h = Qe(h, g), x[c] = {
      css: w,
      vars: v
    };
  }
  function E(w, v) {
    var C, $;
    let g = o;
    if (o === "class" && (g = ".%s"), o === "data" && (g = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (g = `[${o}="%s"]`), w) {
      if (g === "media")
        return e.defaultColorScheme === w ? ":root" : {
          [`@media (prefers-color-scheme: ${(($ = (C = i[w]) == null ? void 0 : C.palette) == null ? void 0 : $.mode) || w})`]: {
            ":root": v
          }
        };
      if (g)
        return e.defaultColorScheme === w ? `:root, ${g.replace("%s", String(w))}` : g.replace("%s", String(w));
    }
    return ":root";
  }
  return {
    vars: h,
    generateThemeVars: () => {
      let w = {
        ...u
      };
      return Object.entries(x).forEach(([, {
        vars: v
      }]) => {
        w = Qe(w, v);
      }), w;
    },
    generateStyleSheets: () => {
      var L, B;
      const w = [], v = e.defaultColorScheme || "light";
      function g(p, P) {
        Object.keys(P).length && w.push(typeof p == "string" ? {
          [p]: {
            ...P
          }
        } : p);
      }
      g(r(void 0, {
        ...d
      }), d);
      const {
        [v]: C,
        ...$
      } = x;
      if (C) {
        const {
          css: p
        } = C, P = (B = (L = i[v]) == null ? void 0 : L.palette) == null ? void 0 : B.mode, D = !n && P ? {
          colorScheme: P,
          ...p
        } : {
          ...p
        };
        g(r(v, {
          ...D
        }), D);
      }
      return Object.entries($).forEach(([p, {
        css: P
      }]) => {
        var U, F;
        const D = (F = (U = i[p]) == null ? void 0 : U.palette) == null ? void 0 : F.mode, _ = !n && D ? {
          colorScheme: D,
          ...P
        } : {
          ...P
        };
        g(r(p, {
          ..._
        }), _);
      }), w;
    }
  };
}
function nf(e) {
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
const of = ns();
function os() {
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
const Ji = os();
function Qi(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = ko(e.main, o) : t === "dark" && (e.dark = Po(e.main, i)));
}
function af(e = "light") {
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
function sf(e = "light") {
  return e === "dark" ? {
    main: Ft[200],
    light: Ft[50],
    dark: Ft[400]
  } : {
    main: Ft[500],
    light: Ft[300],
    dark: Ft[700]
  };
}
function cf(e = "light") {
  return e === "dark" ? {
    main: zt[500],
    light: zt[300],
    dark: zt[700]
  } : {
    main: zt[700],
    light: zt[400],
    dark: zt[800]
  };
}
function lf(e = "light") {
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
function uf(e = "light") {
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
function ff(e = "light") {
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
function Bo(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    ...o
  } = e, i = e.primary || af(t), s = e.secondary || sf(t), c = e.error || cf(t), l = e.info || lf(t), u = e.success || uf(t), d = e.warning || ff(t);
  function m(f) {
    const E = Vi(f, Ji.text.primary) >= r ? Ji.text.primary : of.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const T = Vi(f, E);
      T < 3 && console.error([`MUI: The contrast ratio of ${T}:1 for ${E} on ${f}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return E;
  }
  const h = ({
    color: f,
    name: E,
    mainShade: T = 500,
    lightShade: k = 300,
    darkShade: w = 700
  }) => {
    if (f = {
      ...f
    }, !f.main && f[T] && (f.main = f[T]), !f.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${E ? ` (${E})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${T}\` property.` : Ot(11, E ? ` (${E})` : "", T));
    if (typeof f.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${E ? ` (${E})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(f.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Ot(12, E ? ` (${E})` : "", JSON.stringify(f.main)));
    return Qi(f, "light", k, n), Qi(f, "dark", w, n), f.contrastText || (f.contrastText = m(f.main)), f;
  };
  let x;
  return t === "light" ? x = ns() : t === "dark" && (x = os()), process.env.NODE_ENV !== "production" && (x || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Qe({
    // A collection of common colors.
    common: {
      ...Er
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: h({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: h({
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: h({
      color: c,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: h({
      color: d,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: h({
      color: l,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: h({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: Xs,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: m,
    // Generate a rich color object.
    augmentColor: h,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...x
  }, o);
}
function pf(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, i] = n;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function df(e, t) {
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
function mf(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Zi = {
  textTransform: "uppercase"
}, ea = '"Roboto", "Helvetica", "Arial", sans-serif';
function is(e, t) {
  const {
    fontFamily: r = ea,
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
    ...m
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof l != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const h = n / 14, x = d || ((E) => `${E / l * h}rem`), b = (E, T, k, w, v) => ({
    fontFamily: r,
    fontWeight: E,
    fontSize: x(T),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: k,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === ea ? {
      letterSpacing: `${mf(w / T)}em`
    } : {},
    ...v,
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
    button: b(s, 14, 1.75, 0.4, Zi),
    caption: b(i, 12, 1.66, 0.4),
    overline: b(i, 12, 2.66, 1, Zi),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Qe({
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
const hf = 0.2, gf = 0.14, yf = 0.12;
function we(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${hf})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${gf})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${yf})`].join(",");
}
const vf = ["none", we(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), we(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), we(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), we(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), we(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), we(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), we(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), we(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), we(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), we(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), we(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), we(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), we(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), we(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), we(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), we(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), we(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), we(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), we(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), we(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), we(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), we(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), we(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), we(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], bf = {
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
function ta(e) {
  return `${Math.round(e)}ms`;
}
function xf(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Ef(e) {
  const t = {
    ...bf,
    ...e.easing
  }, r = {
    ...as,
    ...e.duration
  };
  return {
    getAutoHeightDuration: xf,
    create: (o = ["all"], i = {}) => {
      const {
        duration: s = r.standard,
        easing: c = t.easeInOut,
        delay: l = 0,
        ...u
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const d = (h) => typeof h == "string", m = (h) => !Number.isNaN(parseFloat(h));
        !d(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !m(s) && !d(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), d(c) || console.error('MUI: Argument "easing" must be a string.'), !m(l) && !d(l) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((d) => `${d} ${typeof s == "string" ? s : ta(s)} ${c} ${typeof l == "string" ? l : ta(l)}`).join(",");
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
function Tf(e) {
  return ht(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function ss(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [s, c] = o[i];
      !Tf(c) || s.startsWith("unstable_") ? delete n[s] : ht(c) && (n[s] = {
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
function co(e = {}, ...t) {
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
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Ot(20));
  const d = Bo(i), m = Ro(e);
  let h = Qe(m, {
    mixins: df(m.breakpoints, n),
    palette: d,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: vf.slice(),
    typography: is(d, c),
    transitions: Ef(s),
    zIndex: {
      ...Sf
    }
  });
  if (h = Qe(h, u), h = t.reduce((x, b) => Qe(x, b), h), process.env.NODE_ENV !== "production") {
    const x = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], b = (f, E) => {
      let T;
      for (T in f) {
        const k = f[T];
        if (x.includes(T) && Object.keys(k).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const w = Fe("", T);
            console.error([`MUI: The \`${E}\` component increases the CSS specificity of the \`${T}\` internal state.`, "You can not override it like this: ", JSON.stringify(f, null, 2), "", `Instead, you need to use the '&.${w}' syntax:`, JSON.stringify({
              root: {
                [`&.${w}`]: k
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          f[T] = {};
        }
      }
    };
    Object.keys(h.components).forEach((f) => {
      const E = h.components[f].styleOverrides;
      E && f.startsWith("Mui") && b(E, f);
    });
  }
  return h.unstable_sxConfig = {
    ...jr,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, h.unstable_sx = function(b) {
    return Rt({
      sx: b,
      theme: this
    });
  }, h.toRuntimeSource = ss, h;
}
function Cf(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const wf = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = Cf(t);
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
  return e === "dark" ? wf : [];
}
function Of(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    ...o
  } = e, i = Bo(t);
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
function Rf(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const $f = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Pf = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return $f(e.cssVarPrefix).forEach((c) => {
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
function kf(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function R(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function gr(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : Ua(e);
}
function Et(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = hr(gr(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Nf(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const pt = (e) => {
  try {
    return e();
  } catch {
  }
}, Af = (e = "mui") => Zu(e);
function eo(e, t, r, n) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const o = n === "dark" ? "dark" : "light";
  if (!r) {
    e[n] = Of({
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
  } = co({
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
function jf(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    shouldSkipGeneratingVar: s = Rf,
    colorSchemeSelector: c = r.light && r.dark ? "media" : void 0,
    rootSelector: l = ":root",
    ...u
  } = e, d = Object.keys(r)[0], m = n || (r.light && d !== "light" ? "light" : d), h = Af(i), {
    [m]: x,
    light: b,
    dark: f,
    ...E
  } = r, T = {
    ...E
  };
  let k = x;
  if ((m === "dark" && !("dark" in r) || m === "light" && !("light" in r)) && (k = !0), !k)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${m}\` option is either missing or invalid.` : Ot(21, m));
  const w = eo(T, k, u, m);
  b && !T.light && eo(T, b, void 0, "light"), f && !T.dark && eo(T, f, void 0, "dark");
  let v = {
    defaultColorScheme: m,
    ...w,
    cssVarPrefix: i,
    colorSchemeSelector: c,
    rootSelector: l,
    getCssVar: h,
    colorSchemes: T,
    font: {
      ...pf(w.typography),
      ...w.font
    },
    spacing: Nf(u.spacing)
  };
  Object.keys(v.colorSchemes).forEach((B) => {
    const p = v.colorSchemes[B].palette, P = (D) => {
      const _ = D.split("-"), U = _[1], F = _[2];
      return h(D, p[U][F]);
    };
    if (p.mode === "light" && (R(p.common, "background", "#fff"), R(p.common, "onBackground", "#000")), p.mode === "dark" && (R(p.common, "background", "#000"), R(p.common, "onBackground", "#fff")), kf(p, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), p.mode === "light") {
      R(p.Alert, "errorColor", be(p.error.light, 0.6)), R(p.Alert, "infoColor", be(p.info.light, 0.6)), R(p.Alert, "successColor", be(p.success.light, 0.6)), R(p.Alert, "warningColor", be(p.warning.light, 0.6)), R(p.Alert, "errorFilledBg", P("palette-error-main")), R(p.Alert, "infoFilledBg", P("palette-info-main")), R(p.Alert, "successFilledBg", P("palette-success-main")), R(p.Alert, "warningFilledBg", P("palette-warning-main")), R(p.Alert, "errorFilledColor", pt(() => p.getContrastText(p.error.main))), R(p.Alert, "infoFilledColor", pt(() => p.getContrastText(p.info.main))), R(p.Alert, "successFilledColor", pt(() => p.getContrastText(p.success.main))), R(p.Alert, "warningFilledColor", pt(() => p.getContrastText(p.warning.main))), R(p.Alert, "errorStandardBg", xe(p.error.light, 0.9)), R(p.Alert, "infoStandardBg", xe(p.info.light, 0.9)), R(p.Alert, "successStandardBg", xe(p.success.light, 0.9)), R(p.Alert, "warningStandardBg", xe(p.warning.light, 0.9)), R(p.Alert, "errorIconColor", P("palette-error-main")), R(p.Alert, "infoIconColor", P("palette-info-main")), R(p.Alert, "successIconColor", P("palette-success-main")), R(p.Alert, "warningIconColor", P("palette-warning-main")), R(p.AppBar, "defaultBg", P("palette-grey-100")), R(p.Avatar, "defaultBg", P("palette-grey-400")), R(p.Button, "inheritContainedBg", P("palette-grey-300")), R(p.Button, "inheritContainedHoverBg", P("palette-grey-A100")), R(p.Chip, "defaultBorder", P("palette-grey-400")), R(p.Chip, "defaultAvatarColor", P("palette-grey-700")), R(p.Chip, "defaultIconColor", P("palette-grey-700")), R(p.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), R(p.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), R(p.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), R(p.LinearProgress, "primaryBg", xe(p.primary.main, 0.62)), R(p.LinearProgress, "secondaryBg", xe(p.secondary.main, 0.62)), R(p.LinearProgress, "errorBg", xe(p.error.main, 0.62)), R(p.LinearProgress, "infoBg", xe(p.info.main, 0.62)), R(p.LinearProgress, "successBg", xe(p.success.main, 0.62)), R(p.LinearProgress, "warningBg", xe(p.warning.main, 0.62)), R(p.Skeleton, "bg", `rgba(${P("palette-text-primaryChannel")} / 0.11)`), R(p.Slider, "primaryTrack", xe(p.primary.main, 0.62)), R(p.Slider, "secondaryTrack", xe(p.secondary.main, 0.62)), R(p.Slider, "errorTrack", xe(p.error.main, 0.62)), R(p.Slider, "infoTrack", xe(p.info.main, 0.62)), R(p.Slider, "successTrack", xe(p.success.main, 0.62)), R(p.Slider, "warningTrack", xe(p.warning.main, 0.62));
      const D = Hr(p.background.default, 0.8);
      R(p.SnackbarContent, "bg", D), R(p.SnackbarContent, "color", pt(() => p.getContrastText(D))), R(p.SpeedDialAction, "fabHoverBg", Hr(p.background.paper, 0.15)), R(p.StepConnector, "border", P("palette-grey-400")), R(p.StepContent, "border", P("palette-grey-400")), R(p.Switch, "defaultColor", P("palette-common-white")), R(p.Switch, "defaultDisabledColor", P("palette-grey-100")), R(p.Switch, "primaryDisabledColor", xe(p.primary.main, 0.62)), R(p.Switch, "secondaryDisabledColor", xe(p.secondary.main, 0.62)), R(p.Switch, "errorDisabledColor", xe(p.error.main, 0.62)), R(p.Switch, "infoDisabledColor", xe(p.info.main, 0.62)), R(p.Switch, "successDisabledColor", xe(p.success.main, 0.62)), R(p.Switch, "warningDisabledColor", xe(p.warning.main, 0.62)), R(p.TableCell, "border", xe(Yr(p.divider, 1), 0.88)), R(p.Tooltip, "bg", Yr(p.grey[700], 0.92));
    }
    if (p.mode === "dark") {
      R(p.Alert, "errorColor", xe(p.error.light, 0.6)), R(p.Alert, "infoColor", xe(p.info.light, 0.6)), R(p.Alert, "successColor", xe(p.success.light, 0.6)), R(p.Alert, "warningColor", xe(p.warning.light, 0.6)), R(p.Alert, "errorFilledBg", P("palette-error-dark")), R(p.Alert, "infoFilledBg", P("palette-info-dark")), R(p.Alert, "successFilledBg", P("palette-success-dark")), R(p.Alert, "warningFilledBg", P("palette-warning-dark")), R(p.Alert, "errorFilledColor", pt(() => p.getContrastText(p.error.dark))), R(p.Alert, "infoFilledColor", pt(() => p.getContrastText(p.info.dark))), R(p.Alert, "successFilledColor", pt(() => p.getContrastText(p.success.dark))), R(p.Alert, "warningFilledColor", pt(() => p.getContrastText(p.warning.dark))), R(p.Alert, "errorStandardBg", be(p.error.light, 0.9)), R(p.Alert, "infoStandardBg", be(p.info.light, 0.9)), R(p.Alert, "successStandardBg", be(p.success.light, 0.9)), R(p.Alert, "warningStandardBg", be(p.warning.light, 0.9)), R(p.Alert, "errorIconColor", P("palette-error-main")), R(p.Alert, "infoIconColor", P("palette-info-main")), R(p.Alert, "successIconColor", P("palette-success-main")), R(p.Alert, "warningIconColor", P("palette-warning-main")), R(p.AppBar, "defaultBg", P("palette-grey-900")), R(p.AppBar, "darkBg", P("palette-background-paper")), R(p.AppBar, "darkColor", P("palette-text-primary")), R(p.Avatar, "defaultBg", P("palette-grey-600")), R(p.Button, "inheritContainedBg", P("palette-grey-800")), R(p.Button, "inheritContainedHoverBg", P("palette-grey-700")), R(p.Chip, "defaultBorder", P("palette-grey-700")), R(p.Chip, "defaultAvatarColor", P("palette-grey-300")), R(p.Chip, "defaultIconColor", P("palette-grey-300")), R(p.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), R(p.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), R(p.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), R(p.LinearProgress, "primaryBg", be(p.primary.main, 0.5)), R(p.LinearProgress, "secondaryBg", be(p.secondary.main, 0.5)), R(p.LinearProgress, "errorBg", be(p.error.main, 0.5)), R(p.LinearProgress, "infoBg", be(p.info.main, 0.5)), R(p.LinearProgress, "successBg", be(p.success.main, 0.5)), R(p.LinearProgress, "warningBg", be(p.warning.main, 0.5)), R(p.Skeleton, "bg", `rgba(${P("palette-text-primaryChannel")} / 0.13)`), R(p.Slider, "primaryTrack", be(p.primary.main, 0.5)), R(p.Slider, "secondaryTrack", be(p.secondary.main, 0.5)), R(p.Slider, "errorTrack", be(p.error.main, 0.5)), R(p.Slider, "infoTrack", be(p.info.main, 0.5)), R(p.Slider, "successTrack", be(p.success.main, 0.5)), R(p.Slider, "warningTrack", be(p.warning.main, 0.5));
      const D = Hr(p.background.default, 0.98);
      R(p.SnackbarContent, "bg", D), R(p.SnackbarContent, "color", pt(() => p.getContrastText(D))), R(p.SpeedDialAction, "fabHoverBg", Hr(p.background.paper, 0.15)), R(p.StepConnector, "border", P("palette-grey-600")), R(p.StepContent, "border", P("palette-grey-600")), R(p.Switch, "defaultColor", P("palette-grey-300")), R(p.Switch, "defaultDisabledColor", P("palette-grey-600")), R(p.Switch, "primaryDisabledColor", be(p.primary.main, 0.55)), R(p.Switch, "secondaryDisabledColor", be(p.secondary.main, 0.55)), R(p.Switch, "errorDisabledColor", be(p.error.main, 0.55)), R(p.Switch, "infoDisabledColor", be(p.info.main, 0.55)), R(p.Switch, "successDisabledColor", be(p.success.main, 0.55)), R(p.Switch, "warningDisabledColor", be(p.warning.main, 0.55)), R(p.TableCell, "border", be(Yr(p.divider, 1), 0.68)), R(p.Tooltip, "bg", Yr(p.grey[700], 0.92));
    }
    Et(p.background, "default"), Et(p.background, "paper"), Et(p.common, "background"), Et(p.common, "onBackground"), Et(p, "divider"), Object.keys(p).forEach((D) => {
      const _ = p[D];
      D !== "tonalOffset" && _ && typeof _ == "object" && (_.main && R(p[D], "mainChannel", hr(gr(_.main))), _.light && R(p[D], "lightChannel", hr(gr(_.light))), _.dark && R(p[D], "darkChannel", hr(gr(_.dark))), _.contrastText && R(p[D], "contrastTextChannel", hr(gr(_.contrastText))), D === "text" && (Et(p[D], "primary"), Et(p[D], "secondary")), D === "action" && (_.active && Et(p[D], "active"), _.selected && Et(p[D], "selected")));
    });
  }), v = t.reduce((B, p) => Qe(B, p), v);
  const g = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: s,
    getSelector: Pf(v)
  }, {
    vars: C,
    generateThemeVars: $,
    generateStyleSheets: L
  } = rf(v, g);
  return v.vars = C, Object.entries(v.colorSchemes[v.defaultColorScheme]).forEach(([B, p]) => {
    v[B] = p;
  }), v.generateThemeVars = $, v.generateStyleSheets = L, v.generateSpacing = function() {
    return Ma(u.spacing, wo(this));
  }, v.getColorSchemeSelector = nf(c), v.spacing = v.generateSpacing(), v.shouldSkipGeneratingVar = s, v.unstable_sxConfig = {
    ...jr,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, v.unstable_sx = function(p) {
    return Rt({
      sx: p,
      theme: this
    });
  }, v.toRuntimeSource = ss, v;
}
function ra(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: Bo({
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
      return co(e, ...t);
    let d = r;
    "palette" in e || u[c] && (u[c] !== !0 ? d = u[c].palette : c === "dark" && (d = {
      mode: "dark"
    }));
    const m = co({
      ...e,
      palette: d
    }, ...t);
    return m.defaultColorScheme = c, m.colorSchemes = u, m.palette.mode === "light" && (m.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: m.palette
    }, ra(m, "dark", u.dark)), m.palette.mode === "dark" && (m.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: m.palette
    }, ra(m, "light", u.light)), m;
  }
  return !r && !("light" in u) && c === "light" && (u.light = !0), jf({
    ...s,
    colorSchemes: u,
    defaultColorScheme: c,
    ...typeof n != "boolean" && n
  }, ...t);
}
const us = Ln();
function ir() {
  const e = _a(us);
  return process.env.NODE_ENV !== "production" && S.useDebugValue(e), e[Tt] || e;
}
function Mf(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const fs = (e) => Mf(e) && e !== "classes", ve = vu({
  themeId: Tt,
  defaultTheme: us,
  rootShouldForwardProp: fs
});
function na({
  theme: e,
  ...t
}) {
  const r = Tt in e ? e[Tt] : void 0;
  return /* @__PURE__ */ A.jsx(Or, {
    ...t,
    themeId: r ? Tt : void 0,
    theme: r || e
  });
}
const qr = {
  attribute: "data-mui-color-scheme",
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
}, {
  CssVarsProvider: If,
  useColorScheme: Pm,
  getInitColorSchemeScript: km
} = Qu({
  themeId: Tt,
  // @ts-ignore ignore module augmentation tests
  theme: () => Ln({
    cssVariables: !0
  }),
  colorSchemeStorageKey: qr.colorSchemeStorageKey,
  modeStorageKey: qr.modeStorageKey,
  defaultColorScheme: {
    light: qr.defaultLightColorScheme,
    dark: qr.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const t = {
      ...e,
      typography: is(e.palette, e.typography)
    };
    return t.unstable_sx = function(n) {
      return Rt({
        sx: n,
        theme: this
      });
    }, t;
  }
}), _f = If;
function Df({
  theme: e,
  ...t
}) {
  return typeof e == "function" ? /* @__PURE__ */ A.jsx(na, {
    theme: e,
    ...t
  }) : "colorSchemes" in (Tt in e ? e[Tt] : e) ? /* @__PURE__ */ A.jsx(_f, {
    theme: e,
    ...t
  }) : /* @__PURE__ */ A.jsx(na, {
    theme: e,
    ...t
  });
}
function Lf() {
  return Da;
}
const Ze = Hu;
process.env.NODE_ENV !== "production" && (a.node, a.object.isRequired);
function Ue(e) {
  return Yu(e);
}
function Bf(e) {
  return Fe("MuiSvgIcon", e);
}
We("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Vf = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${re(t)}`, `fontSize${re(r)}`]
  };
  return Ge(o, Bf, n);
}, zf = ve("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${re(r.color)}`], t[`fontSize${re(r.fontSize)}`]];
  }
})(Ze(({
  theme: e
}) => {
  var t, r, n, o, i, s, c, l, u, d, m, h, x, b;
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
        var E, T;
        return {
          props: {
            color: f
          },
          style: {
            color: (T = (E = (e.vars ?? e).palette) == null ? void 0 : E[f]) == null ? void 0 : T.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (h = (m = (e.vars ?? e).palette) == null ? void 0 : m.action) == null ? void 0 : h.active
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
})), fn = /* @__PURE__ */ S.forwardRef(function(t, r) {
  const n = Ue({
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
    titleAccess: m,
    viewBox: h = "0 0 24 24",
    ...x
  } = n, b = /* @__PURE__ */ S.isValidElement(o) && o.type === "svg", f = {
    ...n,
    color: s,
    component: c,
    fontSize: l,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: h,
    hasSvgAsChild: b
  }, E = {};
  d || (E.viewBox = h);
  const T = Vf(f);
  return /* @__PURE__ */ A.jsxs(zf, {
    as: c,
    className: ce(T.root, i),
    focusable: "false",
    color: u,
    "aria-hidden": m ? void 0 : !0,
    role: m ? "img" : void 0,
    ref: r,
    ...E,
    ...x,
    ...b && o.props,
    ownerState: f,
    children: [b ? o.props.children : o, m ? /* @__PURE__ */ A.jsx("title", {
      children: m
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (fn.propTypes = {
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
fn.muiName = "SvgIcon";
function ar(e, t) {
  function r(n, o) {
    return /* @__PURE__ */ A.jsx(fn, {
      "data-testid": `${t}Icon`,
      ref: o,
      ...n,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = fn.muiName, /* @__PURE__ */ S.memo(/* @__PURE__ */ S.forwardRef(r));
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
function lo(e, t) {
  return lo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, lo(e, t);
}
function ds(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, lo(e, t);
}
const oa = {
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
const pn = ut.createContext(null);
var Wf = function(t) {
  return t.scrollTop;
}, yr = "unmounted", Nt = "exited", At = "entering", qt = "entered", uo = "exiting", xt = /* @__PURE__ */ function(e) {
  ds(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var s = o, c = s && !s.isMounting ? n.enter : n.appear, l;
    return i.appearStatus = null, n.in ? c ? (l = Nt, i.appearStatus = At) : l = qt : n.unmountOnExit || n.mountOnEnter ? l = yr : l = Nt, i.state = {
      status: l
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(o, i) {
    var s = o.in;
    return s && i.status === yr ? {
      status: Nt
    } : null;
  };
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, r.componentDidUpdate = function(o) {
    var i = null;
    if (o !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== At && s !== qt && (i = At) : (s === At || s === qt) && (i = uo);
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
      if (this.cancelNextCallback(), i === At) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : Br.findDOMNode(this);
          s && Wf(s);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Nt && this.setState({
      status: yr
    });
  }, r.performEnter = function(o) {
    var i = this, s = this.props.enter, c = this.context ? this.context.isMounting : o, l = this.props.nodeRef ? [c] : [Br.findDOMNode(this), c], u = l[0], d = l[1], m = this.getTimeouts(), h = c ? m.appear : m.enter;
    if (!o && !s || oa.disabled) {
      this.safeSetState({
        status: qt
      }, function() {
        i.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, d), this.safeSetState({
      status: At
    }, function() {
      i.props.onEntering(u, d), i.onTransitionEnd(h, function() {
        i.safeSetState({
          status: qt
        }, function() {
          i.props.onEntered(u, d);
        });
      });
    });
  }, r.performExit = function() {
    var o = this, i = this.props.exit, s = this.getTimeouts(), c = this.props.nodeRef ? void 0 : Br.findDOMNode(this);
    if (!i || oa.disabled) {
      this.safeSetState({
        status: Nt
      }, function() {
        o.props.onExited(c);
      });
      return;
    }
    this.props.onExit(c), this.safeSetState({
      status: uo
    }, function() {
      o.props.onExiting(c), o.onTransitionEnd(s.exit, function() {
        o.safeSetState({
          status: Nt
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
    var s = this.props.nodeRef ? this.props.nodeRef.current : Br.findDOMNode(this), c = o == null && !this.props.addEndListener;
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
      /* @__PURE__ */ ut.createElement(pn.Provider, {
        value: null
      }, typeof s == "function" ? s(o, c) : ut.cloneElement(ut.Children.only(s), c))
    );
  }, t;
}(ut.Component);
xt.contextType = pn;
xt.propTypes = process.env.NODE_ENV !== "production" ? {
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
xt.defaultProps = {
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
xt.UNMOUNTED = yr;
xt.EXITED = Nt;
xt.ENTERING = At;
xt.ENTERED = qt;
xt.EXITING = uo;
function Uf(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Vo(e, t) {
  var r = function(i) {
    return t && Qr(i) ? t(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && Us.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function Yf(e, t) {
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
function Mt(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function Hf(e, t) {
  return Vo(e.children, function(r) {
    return Zr(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: Mt(r, "appear", e),
      enter: Mt(r, "enter", e),
      exit: Mt(r, "exit", e)
    });
  });
}
function qf(e, t, r) {
  var n = Vo(e.children), o = Yf(t, n);
  return Object.keys(o).forEach(function(i) {
    var s = o[i];
    if (Qr(s)) {
      var c = i in t, l = i in n, u = t[i], d = Qr(u) && !u.props.in;
      l && (!c || d) ? o[i] = Zr(s, {
        onExited: r.bind(null, s),
        in: !0,
        exit: Mt(s, "exit", e),
        enter: Mt(s, "enter", e)
      }) : !l && c && !d ? o[i] = Zr(s, {
        in: !1
      }) : l && c && Qr(u) && (o[i] = Zr(s, {
        onExited: r.bind(null, s),
        in: u.props.in,
        exit: Mt(s, "exit", e),
        enter: Mt(s, "enter", e)
      }));
    }
  }), o;
}
var Gf = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Kf = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, zo = /* @__PURE__ */ function(e) {
  ds(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var s = i.handleExited.bind(Uf(i));
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
      children: l ? Hf(o, c) : qf(o, s, c),
      firstRender: !1
    };
  }, r.handleExited = function(o, i) {
    var s = Vo(this.props.children);
    o.key in s || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(c) {
      var l = an({}, c.children);
      return delete l[o.key], {
        children: l
      };
    }));
  }, r.render = function() {
    var o = this.props, i = o.component, s = o.childFactory, c = ps(o, ["component", "childFactory"]), l = this.state.contextValue, u = Gf(this.state.children).map(s);
    return delete c.appear, delete c.enter, delete c.exit, i === null ? /* @__PURE__ */ ut.createElement(pn.Provider, {
      value: l
    }, u) : /* @__PURE__ */ ut.createElement(pn.Provider, {
      value: l
    }, /* @__PURE__ */ ut.createElement(i, c, u));
  }, t;
}(ut.Component);
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
zo.defaultProps = Kf;
const Xf = (e) => e.scrollTop;
function dn(e, t) {
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
function Jf(e) {
  return Fe("MuiCollapse", e);
}
We("MuiCollapse", ["root", "horizontal", "vertical", "entered", "hidden", "wrapper", "wrapperInner"]);
const Qf = (e) => {
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
  return Ge(n, Jf, r);
}, Zf = ve("div", {
  name: "MuiCollapse",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.orientation], r.state === "entered" && t.entered, r.state === "exited" && !r.in && r.collapsedSize === "0px" && t.hidden];
  }
})(Ze(({
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
}))), ep = ve("div", {
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
}), tp = ve("div", {
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
}), mn = /* @__PURE__ */ S.forwardRef(function(t, r) {
  const n = Ue({
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
    onEnter: m,
    onEntered: h,
    onEntering: x,
    onExit: b,
    onExited: f,
    onExiting: E,
    orientation: T = "vertical",
    style: k,
    timeout: w = as.standard,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: v = xt,
    ...g
  } = n, C = {
    ...n,
    orientation: T,
    collapsedSize: c
  }, $ = Qf(C), L = ir(), B = jt(), p = S.useRef(null), P = S.useRef(), D = typeof c == "number" ? `${c}px` : c, _ = T === "horizontal", U = _ ? "width" : "height", F = S.useRef(null), Y = ot(r, F), V = (I) => (q) => {
    if (I) {
      const K = F.current;
      q === void 0 ? I(K) : I(K, q);
    }
  }, te = () => p.current ? p.current[_ ? "clientWidth" : "clientHeight"] : 0, z = V((I, q) => {
    p.current && _ && (p.current.style.position = "absolute"), I.style[U] = D, m && m(I, q);
  }), O = V((I, q) => {
    const K = te();
    p.current && _ && (p.current.style.position = "");
    const {
      duration: ee,
      easing: Z
    } = dn({
      style: k,
      timeout: w,
      easing: u
    }, {
      mode: "enter"
    });
    if (w === "auto") {
      const ae = L.transitions.getAutoHeightDuration(K);
      I.style.transitionDuration = `${ae}ms`, P.current = ae;
    } else
      I.style.transitionDuration = typeof ee == "string" ? ee : `${ee}ms`;
    I.style[U] = `${K}px`, I.style.transitionTimingFunction = Z, x && x(I, q);
  }), j = V((I, q) => {
    I.style[U] = "auto", h && h(I, q);
  }), J = V((I) => {
    I.style[U] = `${te()}px`, b && b(I);
  }), Q = V(f), H = V((I) => {
    const q = te(), {
      duration: K,
      easing: ee
    } = dn({
      style: k,
      timeout: w,
      easing: u
    }, {
      mode: "exit"
    });
    if (w === "auto") {
      const Z = L.transitions.getAutoHeightDuration(q);
      I.style.transitionDuration = `${Z}ms`, P.current = Z;
    } else
      I.style.transitionDuration = typeof K == "string" ? K : `${K}ms`;
    I.style[U] = D, I.style.transitionTimingFunction = ee, E && E(I);
  }), X = (I) => {
    w === "auto" && B.start(P.current || 0, I), o && o(F.current, I);
  };
  return /* @__PURE__ */ A.jsx(v, {
    in: d,
    onEnter: z,
    onEntered: j,
    onEntering: O,
    onExit: J,
    onExited: Q,
    onExiting: H,
    addEndListener: X,
    nodeRef: F,
    timeout: w === "auto" ? null : w,
    ...g,
    children: (I, {
      ownerState: q,
      ...K
    }) => /* @__PURE__ */ A.jsx(Zf, {
      as: l,
      className: ce($.root, s, {
        entered: $.entered,
        exited: !d && D === "0px" && $.hidden
      }[I]),
      style: {
        [_ ? "minWidth" : "minHeight"]: D,
        ...k
      },
      ref: Y,
      ownerState: {
        ...C,
        state: I
      },
      ...K,
      children: /* @__PURE__ */ A.jsx(ep, {
        ownerState: {
          ...C,
          state: I
        },
        className: $.wrapper,
        ref: p,
        children: /* @__PURE__ */ A.jsx(tp, {
          ownerState: {
            ...C,
            state: I
          },
          className: $.wrapperInner,
          children: i
        })
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (mn.propTypes = {
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
mn && (mn.muiSupportAuto = !0);
function It(e, t) {
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
    ...m
  } = i, h = u[e] || n, x = Xa(d[e], o), {
    props: {
      component: b,
      ...f
    },
    internalRef: E
  } = Ka({
    className: r,
    ...c,
    externalForwardedProps: e === "root" ? m : void 0,
    externalSlotProps: x
  }), T = ot(E, x == null ? void 0 : x.ref, t.ref), k = e === "root" ? b || l : b, w = Ga(h, {
    ...e === "root" && !l && !u[e] && s,
    ...e !== "root" && !u[e] && s,
    ...f,
    ...k && {
      as: k
    },
    ref: T
  }, o);
  return [h, w];
}
class hn {
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
    return new hn();
  }
  static use() {
    const t = qa(hn.create).current, [r, n] = S.useState(!1);
    return t.shouldMount = r, t.setShouldMount = n, S.useEffect(t.mountEffect, [r]), t;
  }
  mount() {
    return this.mounted || (this.mounted = np(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function rp() {
  return hn.use();
}
function np() {
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
  } = e, [d, m] = S.useState(!1), h = ce(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), x = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, b = ce(r.child, d && r.childLeaving, n && r.childPulsate);
  return !c && !d && m(!0), S.useEffect(() => {
    if (!c && l != null) {
      const f = setTimeout(l, u);
      return () => {
        clearTimeout(f);
      };
    }
  }, [l, c, u]), /* @__PURE__ */ A.jsx("span", {
    className: h,
    style: x,
    children: /* @__PURE__ */ A.jsx("span", {
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
const tt = We("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), fo = 550, op = 80, ip = To`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, ap = To`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, sp = To`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, cp = ve("span", {
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
}), lp = ve(ms, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${tt.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${ip};
    animation-duration: ${fo}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${tt.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${tt.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${tt.childLeaving} {
    opacity: 0;
    animation-name: ${ap};
    animation-duration: ${fo}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${tt.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${sp};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, hs = /* @__PURE__ */ S.forwardRef(function(t, r) {
  const n = Ue({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: s,
    ...c
  } = n, [l, u] = S.useState([]), d = S.useRef(0), m = S.useRef(null);
  S.useEffect(() => {
    m.current && (m.current(), m.current = null);
  }, [l]);
  const h = S.useRef(!1), x = jt(), b = S.useRef(null), f = S.useRef(null), E = S.useCallback((v) => {
    const {
      pulsate: g,
      rippleX: C,
      rippleY: $,
      rippleSize: L,
      cb: B
    } = v;
    u((p) => [...p, /* @__PURE__ */ A.jsx(lp, {
      classes: {
        ripple: ce(i.ripple, tt.ripple),
        rippleVisible: ce(i.rippleVisible, tt.rippleVisible),
        ripplePulsate: ce(i.ripplePulsate, tt.ripplePulsate),
        child: ce(i.child, tt.child),
        childLeaving: ce(i.childLeaving, tt.childLeaving),
        childPulsate: ce(i.childPulsate, tt.childPulsate)
      },
      timeout: fo,
      pulsate: g,
      rippleX: C,
      rippleY: $,
      rippleSize: L
    }, d.current)]), d.current += 1, m.current = B;
  }, [i]), T = S.useCallback((v = {}, g = {}, C = () => {
  }) => {
    const {
      pulsate: $ = !1,
      center: L = o || g.pulsate,
      fakeElement: B = !1
      // For test purposes
    } = g;
    if ((v == null ? void 0 : v.type) === "mousedown" && h.current) {
      h.current = !1;
      return;
    }
    (v == null ? void 0 : v.type) === "touchstart" && (h.current = !0);
    const p = B ? null : f.current, P = p ? p.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let D, _, U;
    if (L || v === void 0 || v.clientX === 0 && v.clientY === 0 || !v.clientX && !v.touches)
      D = Math.round(P.width / 2), _ = Math.round(P.height / 2);
    else {
      const {
        clientX: F,
        clientY: Y
      } = v.touches && v.touches.length > 0 ? v.touches[0] : v;
      D = Math.round(F - P.left), _ = Math.round(Y - P.top);
    }
    if (L)
      U = Math.sqrt((2 * P.width ** 2 + P.height ** 2) / 3), U % 2 === 0 && (U += 1);
    else {
      const F = Math.max(Math.abs((p ? p.clientWidth : 0) - D), D) * 2 + 2, Y = Math.max(Math.abs((p ? p.clientHeight : 0) - _), _) * 2 + 2;
      U = Math.sqrt(F ** 2 + Y ** 2);
    }
    v != null && v.touches ? b.current === null && (b.current = () => {
      E({
        pulsate: $,
        rippleX: D,
        rippleY: _,
        rippleSize: U,
        cb: C
      });
    }, x.start(op, () => {
      b.current && (b.current(), b.current = null);
    })) : E({
      pulsate: $,
      rippleX: D,
      rippleY: _,
      rippleSize: U,
      cb: C
    });
  }, [o, E, x]), k = S.useCallback(() => {
    T({}, {
      pulsate: !0
    });
  }, [T]), w = S.useCallback((v, g) => {
    if (x.clear(), (v == null ? void 0 : v.type) === "touchend" && b.current) {
      b.current(), b.current = null, x.start(0, () => {
        w(v, g);
      });
      return;
    }
    b.current = null, u((C) => C.length > 0 ? C.slice(1) : C), m.current = g;
  }, [x]);
  return S.useImperativeHandle(r, () => ({
    pulsate: k,
    start: T,
    stop: w
  }), [k, T, w]), /* @__PURE__ */ A.jsx(cp, {
    className: ce(tt.root, i.root, s),
    ref: f,
    ...c,
    children: /* @__PURE__ */ A.jsx(zo, {
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
function up(e) {
  return Fe("MuiButtonBase", e);
}
const fp = We("MuiButtonBase", ["root", "disabled", "focusVisible"]), pp = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, s = Ge({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, up, o);
  return r && n && (s.root += ` ${n}`), s;
}, dp = ve("button", {
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
  [`&.${fp.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Rr = /* @__PURE__ */ S.forwardRef(function(t, r) {
  const n = Ue({
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
    disableTouchRipple: m = !1,
    focusRipple: h = !1,
    focusVisibleClassName: x,
    LinkComponent: b = "a",
    onBlur: f,
    onClick: E,
    onContextMenu: T,
    onDragLeave: k,
    onFocus: w,
    onFocusVisible: v,
    onKeyDown: g,
    onKeyUp: C,
    onMouseDown: $,
    onMouseLeave: L,
    onMouseUp: B,
    onTouchEnd: p,
    onTouchMove: P,
    onTouchStart: D,
    tabIndex: _ = 0,
    TouchRippleProps: U,
    touchRippleRef: F,
    type: Y,
    ...V
  } = n, te = S.useRef(null), z = rp(), O = ot(z.ref, F), [j, J] = S.useState(!1);
  u && j && J(!1), S.useImperativeHandle(o, () => ({
    focusVisible: () => {
      J(!0), te.current.focus();
    }
  }), []);
  const Q = z.shouldMount && !d && !u;
  S.useEffect(() => {
    j && h && !d && z.pulsate();
  }, [d, h, j, z]);
  const H = St(z, "start", $, m), X = St(z, "stop", T, m), I = St(z, "stop", k, m), q = St(z, "stop", B, m), K = St(z, "stop", (N) => {
    j && N.preventDefault(), L && L(N);
  }, m), ee = St(z, "start", D, m), Z = St(z, "stop", p, m), ae = St(z, "stop", P, m), M = St(z, "stop", (N) => {
    ln(N.target) || J(!1), f && f(N);
  }, !1), Se = Xt((N) => {
    te.current || (te.current = N.currentTarget), ln(N.target) && (J(!0), v && v(N)), w && w(N);
  }), Oe = () => {
    const N = te.current;
    return l && l !== "button" && !(N.tagName === "A" && N.href);
  }, Ie = Xt((N) => {
    h && !N.repeat && j && N.key === " " && z.stop(N, () => {
      z.start(N);
    }), N.target === N.currentTarget && Oe() && N.key === " " && N.preventDefault(), g && g(N), N.target === N.currentTarget && Oe() && N.key === "Enter" && !u && (N.preventDefault(), E && E(N));
  }), Ke = Xt((N) => {
    h && N.key === " " && j && !N.defaultPrevented && z.stop(N, () => {
      z.pulsate(N);
    }), C && C(N), E && N.target === N.currentTarget && Oe() && N.key === " " && !N.defaultPrevented && E(N);
  });
  let he = l;
  he === "button" && (V.href || V.to) && (he = b);
  const Re = {};
  he === "button" ? (Re.type = Y === void 0 ? "button" : Y, Re.disabled = u) : (!V.href && !V.to && (Re.role = "button"), u && (Re["aria-disabled"] = u));
  const Le = ot(r, te), _e = {
    ...n,
    centerRipple: i,
    component: l,
    disabled: u,
    disableRipple: d,
    disableTouchRipple: m,
    focusRipple: h,
    tabIndex: _,
    focusVisible: j
  }, y = pp(_e);
  return /* @__PURE__ */ A.jsxs(dp, {
    as: he,
    className: ce(y.root, c),
    ownerState: _e,
    onBlur: M,
    onClick: E,
    onContextMenu: X,
    onFocus: Se,
    onKeyDown: Ie,
    onKeyUp: Ke,
    onMouseDown: H,
    onMouseLeave: K,
    onMouseUp: q,
    onDragLeave: I,
    onTouchEnd: Z,
    onTouchMove: ae,
    onTouchStart: ee,
    ref: Le,
    tabIndex: u ? -1 : _,
    type: Y,
    ...Re,
    ...V,
    children: [s, Q ? /* @__PURE__ */ A.jsx(hs, {
      ref: O,
      center: i,
      ...U
    }) : null]
  });
});
function St(e, t, r, n = !1) {
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
  action: jo,
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
function mp(e) {
  return typeof e.main == "string";
}
function hp(e, t = []) {
  if (!mp(e))
    return !1;
  for (const r of t)
    if (!e.hasOwnProperty(r) || typeof e[r] != "string")
      return !1;
  return !0;
}
function _t(e = []) {
  return ([, t]) => t && hp(t, e);
}
function gp(e) {
  return Fe("MuiIconButton", e);
}
const yp = We("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), vp = (e) => {
  const {
    classes: t,
    disabled: r,
    color: n,
    edge: o,
    size: i
  } = e, s = {
    root: ["root", r && "disabled", n !== "default" && `color${re(n)}`, o && `edge${re(o)}`, `size${re(i)}`]
  };
  return Ge(s, gp, t);
}, bp = ve(Rr, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "default" && t[`color${re(r.color)}`], r.edge && t[`edge${re(r.edge)}`], t[`size${re(r.size)}`]];
  }
})(Ze(({
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
      "--IconButton-hoverBg": e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Me(e.palette.action.active, e.palette.action.hoverOpacity),
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
})), Ze(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(_t()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette).filter(_t()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      "--IconButton-hoverBg": e.vars ? `rgba(${(e.vars || e).palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Me((e.vars || e).palette[t].main, e.palette.action.hoverOpacity)
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
  [`&.${yp.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  }
}))), gs = /* @__PURE__ */ S.forwardRef(function(t, r) {
  const n = Ue({
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
    ...m
  } = n, h = {
    ...n,
    edge: o,
    color: c,
    disabled: l,
    disableFocusRipple: u,
    size: d
  }, x = vp(h);
  return /* @__PURE__ */ A.jsx(bp, {
    className: ce(x.root, s),
    centerRipple: !0,
    focusRipple: !u,
    disabled: l,
    ref: r,
    ...m,
    ownerState: h,
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
  children: Mr(a.node, (e) => S.Children.toArray(e.children).some((r) => /* @__PURE__ */ S.isValidElement(r) && r.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
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
function xp(e) {
  return Fe("MuiTypography", e);
}
const ia = We("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]), Ep = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, Sp = Lf(), Tp = (e) => {
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
  return Ge(c, xp, s);
}, Cp = ve("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.variant && t[r.variant], r.align !== "inherit" && t[`align${re(r.align)}`], r.noWrap && t.noWrap, r.gutterBottom && t.gutterBottom, r.paragraph && t.paragraph];
  }
})(Ze(({
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
    })), ...Object.entries(e.palette).filter(_t()).map(([r]) => ({
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
})), aa = {
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
}, gt = /* @__PURE__ */ S.forwardRef(function(t, r) {
  const {
    color: n,
    ...o
  } = Ue({
    props: t,
    name: "MuiTypography"
  }), i = !Ep[n], s = Sp({
    ...o,
    ...i && {
      color: n
    }
  }), {
    align: c = "inherit",
    className: l,
    component: u,
    gutterBottom: d = !1,
    noWrap: m = !1,
    paragraph: h = !1,
    variant: x = "body1",
    variantMapping: b = aa,
    ...f
  } = s, E = {
    ...s,
    align: c,
    color: n,
    className: l,
    component: u,
    gutterBottom: d,
    noWrap: m,
    paragraph: h,
    variant: x,
    variantMapping: b
  }, T = u || (h ? "p" : b[x] || aa[x]) || "span", k = Tp(E);
  return /* @__PURE__ */ A.jsx(Cp, {
    as: T,
    ref: r,
    className: ce(k.root, l),
    ...f,
    ownerState: E,
    style: {
      ...c !== "inherit" && {
        "--Typography-textAlign": c
      },
      ...f.style
    }
  });
});
process.env.NODE_ENV !== "production" && (gt.propTypes = {
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
var Ye = "top", it = "bottom", at = "right", He = "left", Fo = "auto", Ir = [Ye, it, at, He], Zt = "start", $r = "end", wp = "clippingParents", ys = "viewport", pr = "popper", Op = "reference", sa = /* @__PURE__ */ Ir.reduce(function(e, t) {
  return e.concat([t + "-" + Zt, t + "-" + $r]);
}, []), vs = /* @__PURE__ */ [].concat(Ir, [Fo]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Zt, t + "-" + $r]);
}, []), Rp = "beforeRead", $p = "read", Pp = "afterRead", kp = "beforeMain", Np = "main", Ap = "afterMain", jp = "beforeWrite", Mp = "write", Ip = "afterWrite", _p = [Rp, $p, Pp, kp, Np, Ap, jp, Mp, Ip];
function bt(e) {
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
function Bt(e) {
  var t = et(e).Element;
  return e instanceof t || e instanceof Element;
}
function nt(e) {
  var t = et(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Wo(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = et(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Dp(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, o = t.attributes[r] || {}, i = t.elements[r];
    !nt(i) || !bt(i) || (Object.assign(i.style, n), Object.keys(o).forEach(function(s) {
      var c = o[s];
      c === !1 ? i.removeAttribute(s) : i.setAttribute(s, c === !0 ? "" : c);
    }));
  });
}
function Lp(e) {
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
      !nt(o) || !bt(o) || (Object.assign(o.style, c), Object.keys(i).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const Bp = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Dp,
  effect: Lp,
  requires: ["computeStyles"]
};
function vt(e) {
  return e.split("-")[0];
}
var Dt = Math.max, gn = Math.min, er = Math.round;
function po() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function bs() {
  return !/^((?!chrome|android).)*safari/i.test(po());
}
function tr(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), o = 1, i = 1;
  t && nt(e) && (o = e.offsetWidth > 0 && er(n.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && er(n.height) / e.offsetHeight || 1);
  var s = Bt(e) ? et(e) : window, c = s.visualViewport, l = !bs() && r, u = (n.left + (l && c ? c.offsetLeft : 0)) / o, d = (n.top + (l && c ? c.offsetTop : 0)) / i, m = n.width / o, h = n.height / i;
  return {
    width: m,
    height: h,
    top: d,
    right: u + m,
    bottom: d + h,
    left: u,
    x: u,
    y: d
  };
}
function Uo(e) {
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
  if (r && Wo(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function wt(e) {
  return et(e).getComputedStyle(e);
}
function Vp(e) {
  return ["table", "td", "th"].indexOf(bt(e)) >= 0;
}
function kt(e) {
  return ((Bt(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Bn(e) {
  return bt(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Wo(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    kt(e)
  );
}
function ca(e) {
  return !nt(e) || // https://github.com/popperjs/popper-core/issues/837
  wt(e).position === "fixed" ? null : e.offsetParent;
}
function zp(e) {
  var t = /firefox/i.test(po()), r = /Trident/i.test(po());
  if (r && nt(e)) {
    var n = wt(e);
    if (n.position === "fixed")
      return null;
  }
  var o = Bn(e);
  for (Wo(o) && (o = o.host); nt(o) && ["html", "body"].indexOf(bt(o)) < 0; ) {
    var i = wt(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function _r(e) {
  for (var t = et(e), r = ca(e); r && Vp(r) && wt(r).position === "static"; )
    r = ca(r);
  return r && (bt(r) === "html" || bt(r) === "body" && wt(r).position === "static") ? t : r || zp(e) || t;
}
function Yo(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function br(e, t, r) {
  return Dt(e, gn(t, r));
}
function Fp(e, t, r) {
  var n = br(e, t, r);
  return n > r ? r : n;
}
function Es() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Ss(e) {
  return Object.assign({}, Es(), e);
}
function Ts(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var Wp = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, Ss(typeof t != "number" ? t : Ts(t, Ir));
};
function Up(e) {
  var t, r = e.state, n = e.name, o = e.options, i = r.elements.arrow, s = r.modifiersData.popperOffsets, c = vt(r.placement), l = Yo(c), u = [He, at].indexOf(c) >= 0, d = u ? "height" : "width";
  if (!(!i || !s)) {
    var m = Wp(o.padding, r), h = Uo(i), x = l === "y" ? Ye : He, b = l === "y" ? it : at, f = r.rects.reference[d] + r.rects.reference[l] - s[l] - r.rects.popper[d], E = s[l] - r.rects.reference[l], T = _r(i), k = T ? l === "y" ? T.clientHeight || 0 : T.clientWidth || 0 : 0, w = f / 2 - E / 2, v = m[x], g = k - h[d] - m[b], C = k / 2 - h[d] / 2 + w, $ = br(v, C, g), L = l;
    r.modifiersData[n] = (t = {}, t[L] = $, t.centerOffset = $ - C, t);
  }
}
function Yp(e) {
  var t = e.state, r = e.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || xs(t.elements.popper, o) && (t.elements.arrow = o));
}
const Hp = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Up,
  effect: Yp,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function rr(e) {
  return e.split("-")[1];
}
var qp = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Gp(e, t) {
  var r = e.x, n = e.y, o = t.devicePixelRatio || 1;
  return {
    x: er(r * o) / o || 0,
    y: er(n * o) / o || 0
  };
}
function la(e) {
  var t, r = e.popper, n = e.popperRect, o = e.placement, i = e.variation, s = e.offsets, c = e.position, l = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, m = e.isFixed, h = s.x, x = h === void 0 ? 0 : h, b = s.y, f = b === void 0 ? 0 : b, E = typeof d == "function" ? d({
    x,
    y: f
  }) : {
    x,
    y: f
  };
  x = E.x, f = E.y;
  var T = s.hasOwnProperty("x"), k = s.hasOwnProperty("y"), w = He, v = Ye, g = window;
  if (u) {
    var C = _r(r), $ = "clientHeight", L = "clientWidth";
    if (C === et(r) && (C = kt(r), wt(C).position !== "static" && c === "absolute" && ($ = "scrollHeight", L = "scrollWidth")), C = C, o === Ye || (o === He || o === at) && i === $r) {
      v = it;
      var B = m && C === g && g.visualViewport ? g.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        C[$]
      );
      f -= B - n.height, f *= l ? 1 : -1;
    }
    if (o === He || (o === Ye || o === it) && i === $r) {
      w = at;
      var p = m && C === g && g.visualViewport ? g.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        C[L]
      );
      x -= p - n.width, x *= l ? 1 : -1;
    }
  }
  var P = Object.assign({
    position: c
  }, u && qp), D = d === !0 ? Gp({
    x,
    y: f
  }, et(r)) : {
    x,
    y: f
  };
  if (x = D.x, f = D.y, l) {
    var _;
    return Object.assign({}, P, (_ = {}, _[v] = k ? "0" : "", _[w] = T ? "0" : "", _.transform = (g.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + f + "px)" : "translate3d(" + x + "px, " + f + "px, 0)", _));
  }
  return Object.assign({}, P, (t = {}, t[v] = k ? f + "px" : "", t[w] = T ? x + "px" : "", t.transform = "", t));
}
function Kp(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, o = n === void 0 ? !0 : n, i = r.adaptive, s = i === void 0 ? !0 : i, c = r.roundOffsets, l = c === void 0 ? !0 : c, u = {
    placement: vt(t.placement),
    variation: rr(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, la(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, la(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Xp = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Kp,
  data: {}
};
var Gr = {
  passive: !0
};
function Jp(e) {
  var t = e.state, r = e.instance, n = e.options, o = n.scroll, i = o === void 0 ? !0 : o, s = n.resize, c = s === void 0 ? !0 : s, l = et(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, Gr);
  }), c && l.addEventListener("resize", r.update, Gr), function() {
    i && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, Gr);
    }), c && l.removeEventListener("resize", r.update, Gr);
  };
}
const Qp = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Jp,
  data: {}
};
var Zp = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function on(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Zp[t];
  });
}
var ed = {
  start: "end",
  end: "start"
};
function ua(e) {
  return e.replace(/start|end/g, function(t) {
    return ed[t];
  });
}
function Ho(e) {
  var t = et(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function qo(e) {
  return tr(kt(e)).left + Ho(e).scrollLeft;
}
function td(e, t) {
  var r = et(e), n = kt(e), o = r.visualViewport, i = n.clientWidth, s = n.clientHeight, c = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    var u = bs();
    (u || !u && t === "fixed") && (c = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: c + qo(e),
    y: l
  };
}
function rd(e) {
  var t, r = kt(e), n = Ho(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = Dt(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = Dt(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), c = -n.scrollLeft + qo(e), l = -n.scrollTop;
  return wt(o || r).direction === "rtl" && (c += Dt(r.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: c,
    y: l
  };
}
function Go(e) {
  var t = wt(e), r = t.overflow, n = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function Cs(e) {
  return ["html", "body", "#document"].indexOf(bt(e)) >= 0 ? e.ownerDocument.body : nt(e) && Go(e) ? e : Cs(Bn(e));
}
function xr(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = Cs(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), i = et(n), s = o ? [i].concat(i.visualViewport || [], Go(n) ? n : []) : n, c = t.concat(s);
  return o ? c : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    c.concat(xr(Bn(s)))
  );
}
function mo(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function nd(e, t) {
  var r = tr(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function fa(e, t, r) {
  return t === ys ? mo(td(e, r)) : Bt(t) ? nd(t, r) : mo(rd(kt(e)));
}
function od(e) {
  var t = xr(Bn(e)), r = ["absolute", "fixed"].indexOf(wt(e).position) >= 0, n = r && nt(e) ? _r(e) : e;
  return Bt(n) ? t.filter(function(o) {
    return Bt(o) && xs(o, n) && bt(o) !== "body";
  }) : [];
}
function id(e, t, r, n) {
  var o = t === "clippingParents" ? od(e) : [].concat(t), i = [].concat(o, [r]), s = i[0], c = i.reduce(function(l, u) {
    var d = fa(e, u, n);
    return l.top = Dt(d.top, l.top), l.right = gn(d.right, l.right), l.bottom = gn(d.bottom, l.bottom), l.left = Dt(d.left, l.left), l;
  }, fa(e, s, n));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function ws(e) {
  var t = e.reference, r = e.element, n = e.placement, o = n ? vt(n) : null, i = n ? rr(n) : null, s = t.x + t.width / 2 - r.width / 2, c = t.y + t.height / 2 - r.height / 2, l;
  switch (o) {
    case Ye:
      l = {
        x: s,
        y: t.y - r.height
      };
      break;
    case it:
      l = {
        x: s,
        y: t.y + t.height
      };
      break;
    case at:
      l = {
        x: t.x + t.width,
        y: c
      };
      break;
    case He:
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
  var u = o ? Yo(o) : null;
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
  var r = t, n = r.placement, o = n === void 0 ? e.placement : n, i = r.strategy, s = i === void 0 ? e.strategy : i, c = r.boundary, l = c === void 0 ? wp : c, u = r.rootBoundary, d = u === void 0 ? ys : u, m = r.elementContext, h = m === void 0 ? pr : m, x = r.altBoundary, b = x === void 0 ? !1 : x, f = r.padding, E = f === void 0 ? 0 : f, T = Ss(typeof E != "number" ? E : Ts(E, Ir)), k = h === pr ? Op : pr, w = e.rects.popper, v = e.elements[b ? k : h], g = id(Bt(v) ? v : v.contextElement || kt(e.elements.popper), l, d, s), C = tr(e.elements.reference), $ = ws({
    reference: C,
    element: w,
    strategy: "absolute",
    placement: o
  }), L = mo(Object.assign({}, w, $)), B = h === pr ? L : C, p = {
    top: g.top - B.top + T.top,
    bottom: B.bottom - g.bottom + T.bottom,
    left: g.left - B.left + T.left,
    right: B.right - g.right + T.right
  }, P = e.modifiersData.offset;
  if (h === pr && P) {
    var D = P[o];
    Object.keys(p).forEach(function(_) {
      var U = [at, it].indexOf(_) >= 0 ? 1 : -1, F = [Ye, it].indexOf(_) >= 0 ? "y" : "x";
      p[_] += D[F] * U;
    });
  }
  return p;
}
function ad(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = r.boundary, i = r.rootBoundary, s = r.padding, c = r.flipVariations, l = r.allowedAutoPlacements, u = l === void 0 ? vs : l, d = rr(n), m = d ? c ? sa : sa.filter(function(b) {
    return rr(b) === d;
  }) : Ir, h = m.filter(function(b) {
    return u.indexOf(b) >= 0;
  });
  h.length === 0 && (h = m);
  var x = h.reduce(function(b, f) {
    return b[f] = Pr(e, {
      placement: f,
      boundary: o,
      rootBoundary: i,
      padding: s
    })[vt(f)], b;
  }, {});
  return Object.keys(x).sort(function(b, f) {
    return x[b] - x[f];
  });
}
function sd(e) {
  if (vt(e) === Fo)
    return [];
  var t = on(e);
  return [ua(e), t, ua(t)];
}
function cd(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = r.mainAxis, i = o === void 0 ? !0 : o, s = r.altAxis, c = s === void 0 ? !0 : s, l = r.fallbackPlacements, u = r.padding, d = r.boundary, m = r.rootBoundary, h = r.altBoundary, x = r.flipVariations, b = x === void 0 ? !0 : x, f = r.allowedAutoPlacements, E = t.options.placement, T = vt(E), k = T === E, w = l || (k || !b ? [on(E)] : sd(E)), v = [E].concat(w).reduce(function(H, X) {
      return H.concat(vt(X) === Fo ? ad(t, {
        placement: X,
        boundary: d,
        rootBoundary: m,
        padding: u,
        flipVariations: b,
        allowedAutoPlacements: f
      }) : X);
    }, []), g = t.rects.reference, C = t.rects.popper, $ = /* @__PURE__ */ new Map(), L = !0, B = v[0], p = 0; p < v.length; p++) {
      var P = v[p], D = vt(P), _ = rr(P) === Zt, U = [Ye, it].indexOf(D) >= 0, F = U ? "width" : "height", Y = Pr(t, {
        placement: P,
        boundary: d,
        rootBoundary: m,
        altBoundary: h,
        padding: u
      }), V = U ? _ ? at : He : _ ? it : Ye;
      g[F] > C[F] && (V = on(V));
      var te = on(V), z = [];
      if (i && z.push(Y[D] <= 0), c && z.push(Y[V] <= 0, Y[te] <= 0), z.every(function(H) {
        return H;
      })) {
        B = P, L = !1;
        break;
      }
      $.set(P, z);
    }
    if (L)
      for (var O = b ? 3 : 1, j = function(X) {
        var I = v.find(function(q) {
          var K = $.get(q);
          if (K)
            return K.slice(0, X).every(function(ee) {
              return ee;
            });
        });
        if (I)
          return B = I, "break";
      }, J = O; J > 0; J--) {
        var Q = j(J);
        if (Q === "break") break;
      }
    t.placement !== B && (t.modifiersData[n]._skip = !0, t.placement = B, t.reset = !0);
  }
}
const ld = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: cd,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function pa(e, t, r) {
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
function da(e) {
  return [Ye, at, it, He].some(function(t) {
    return e[t] >= 0;
  });
}
function ud(e) {
  var t = e.state, r = e.name, n = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, s = Pr(t, {
    elementContext: "reference"
  }), c = Pr(t, {
    altBoundary: !0
  }), l = pa(s, n), u = pa(c, o, i), d = da(l), m = da(u);
  t.modifiersData[r] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: u,
    isReferenceHidden: d,
    hasPopperEscaped: m
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": d,
    "data-popper-escaped": m
  });
}
const fd = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: ud
};
function pd(e, t, r) {
  var n = vt(e), o = [He, Ye].indexOf(n) >= 0 ? -1 : 1, i = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, s = i[0], c = i[1];
  return s = s || 0, c = (c || 0) * o, [He, at].indexOf(n) >= 0 ? {
    x: c,
    y: s
  } : {
    x: s,
    y: c
  };
}
function dd(e) {
  var t = e.state, r = e.options, n = e.name, o = r.offset, i = o === void 0 ? [0, 0] : o, s = vs.reduce(function(d, m) {
    return d[m] = pd(m, t.rects, i), d;
  }, {}), c = s[t.placement], l = c.x, u = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[n] = s;
}
const md = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: dd
};
function hd(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = ws({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const gd = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: hd,
  data: {}
};
function yd(e) {
  return e === "x" ? "y" : "x";
}
function vd(e) {
  var t = e.state, r = e.options, n = e.name, o = r.mainAxis, i = o === void 0 ? !0 : o, s = r.altAxis, c = s === void 0 ? !1 : s, l = r.boundary, u = r.rootBoundary, d = r.altBoundary, m = r.padding, h = r.tether, x = h === void 0 ? !0 : h, b = r.tetherOffset, f = b === void 0 ? 0 : b, E = Pr(t, {
    boundary: l,
    rootBoundary: u,
    padding: m,
    altBoundary: d
  }), T = vt(t.placement), k = rr(t.placement), w = !k, v = Yo(T), g = yd(v), C = t.modifiersData.popperOffsets, $ = t.rects.reference, L = t.rects.popper, B = typeof f == "function" ? f(Object.assign({}, t.rects, {
    placement: t.placement
  })) : f, p = typeof B == "number" ? {
    mainAxis: B,
    altAxis: B
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, B), P = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, D = {
    x: 0,
    y: 0
  };
  if (C) {
    if (i) {
      var _, U = v === "y" ? Ye : He, F = v === "y" ? it : at, Y = v === "y" ? "height" : "width", V = C[v], te = V + E[U], z = V - E[F], O = x ? -L[Y] / 2 : 0, j = k === Zt ? $[Y] : L[Y], J = k === Zt ? -L[Y] : -$[Y], Q = t.elements.arrow, H = x && Q ? Uo(Q) : {
        width: 0,
        height: 0
      }, X = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Es(), I = X[U], q = X[F], K = br(0, $[Y], H[Y]), ee = w ? $[Y] / 2 - O - K - I - p.mainAxis : j - K - I - p.mainAxis, Z = w ? -$[Y] / 2 + O + K + q + p.mainAxis : J + K + q + p.mainAxis, ae = t.elements.arrow && _r(t.elements.arrow), M = ae ? v === "y" ? ae.clientTop || 0 : ae.clientLeft || 0 : 0, Se = (_ = P == null ? void 0 : P[v]) != null ? _ : 0, Oe = V + ee - Se - M, Ie = V + Z - Se, Ke = br(x ? gn(te, Oe) : te, V, x ? Dt(z, Ie) : z);
      C[v] = Ke, D[v] = Ke - V;
    }
    if (c) {
      var he, Re = v === "x" ? Ye : He, Le = v === "x" ? it : at, _e = C[g], y = g === "y" ? "height" : "width", N = _e + E[Re], W = _e - E[Le], oe = [Ye, He].indexOf(T) !== -1, Ce = (he = P == null ? void 0 : P[g]) != null ? he : 0, le = oe ? N : _e - $[y] - L[y] - Ce + p.altAxis, G = oe ? _e + $[y] + L[y] - Ce - p.altAxis : W, me = x && oe ? Fp(le, _e, G) : br(x ? le : N, _e, x ? G : W);
      C[g] = me, D[g] = me - _e;
    }
    t.modifiersData[n] = D;
  }
}
const bd = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: vd,
  requiresIfExists: ["offset"]
};
function xd(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Ed(e) {
  return e === et(e) || !nt(e) ? Ho(e) : xd(e);
}
function Sd(e) {
  var t = e.getBoundingClientRect(), r = er(t.width) / e.offsetWidth || 1, n = er(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Td(e, t, r) {
  r === void 0 && (r = !1);
  var n = nt(t), o = nt(t) && Sd(t), i = kt(t), s = tr(e, o, r), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((bt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Go(i)) && (c = Ed(t)), nt(t) ? (l = tr(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : i && (l.x = qo(i))), {
    x: s.left + c.scrollLeft - l.x,
    y: s.top + c.scrollTop - l.y,
    width: s.width,
    height: s.height
  };
}
function Cd(e) {
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
function wd(e) {
  var t = Cd(e);
  return _p.reduce(function(r, n) {
    return r.concat(t.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function Od(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function Rd(e) {
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
var ma = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function ha() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function $d(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, o = t.defaultOptions, i = o === void 0 ? ma : o;
  return function(c, l, u) {
    u === void 0 && (u = i);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, ma, i),
      modifiersData: {},
      elements: {
        reference: c,
        popper: l
      },
      attributes: {},
      styles: {}
    }, m = [], h = !1, x = {
      state: d,
      setOptions: function(T) {
        var k = typeof T == "function" ? T(d.options) : T;
        f(), d.options = Object.assign({}, i, d.options, k), d.scrollParents = {
          reference: Bt(c) ? xr(c) : c.contextElement ? xr(c.contextElement) : [],
          popper: xr(l)
        };
        var w = wd(Rd([].concat(n, d.options.modifiers)));
        return d.orderedModifiers = w.filter(function(v) {
          return v.enabled;
        }), b(), x.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!h) {
          var T = d.elements, k = T.reference, w = T.popper;
          if (ha(k, w)) {
            d.rects = {
              reference: Td(k, _r(w), d.options.strategy === "fixed"),
              popper: Uo(w)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(p) {
              return d.modifiersData[p.name] = Object.assign({}, p.data);
            });
            for (var v = 0; v < d.orderedModifiers.length; v++) {
              if (d.reset === !0) {
                d.reset = !1, v = -1;
                continue;
              }
              var g = d.orderedModifiers[v], C = g.fn, $ = g.options, L = $ === void 0 ? {} : $, B = g.name;
              typeof C == "function" && (d = C({
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
      update: Od(function() {
        return new Promise(function(E) {
          x.forceUpdate(), E(d);
        });
      }),
      destroy: function() {
        f(), h = !0;
      }
    };
    if (!ha(c, l))
      return x;
    x.setOptions(u).then(function(E) {
      !h && u.onFirstUpdate && u.onFirstUpdate(E);
    });
    function b() {
      d.orderedModifiers.forEach(function(E) {
        var T = E.name, k = E.options, w = k === void 0 ? {} : k, v = E.effect;
        if (typeof v == "function") {
          var g = v({
            state: d,
            name: T,
            instance: x,
            options: w
          }), C = function() {
          };
          m.push(g || C);
        }
      });
    }
    function f() {
      m.forEach(function(E) {
        return E();
      }), m = [];
    }
    return x;
  };
}
var Pd = [Qp, gd, Xp, Bp, md, ld, bd, Hp, fd], kd = /* @__PURE__ */ $d({
  defaultModifiers: Pd
});
function Nd(e) {
  return typeof e == "function" ? e() : e;
}
const yn = /* @__PURE__ */ S.forwardRef(function(t, r) {
  const {
    children: n,
    container: o,
    disablePortal: i = !1
  } = t, [s, c] = S.useState(null), l = ot(/* @__PURE__ */ S.isValidElement(n) ? Mo(n) : null, r);
  if (Qt(() => {
    i || c(Nd(o) || document.body);
  }, [o, i]), Qt(() => {
    if (s && !i)
      return so(r, s), () => {
        so(r, null);
      };
  }, [r, s, i]), i) {
    if (/* @__PURE__ */ S.isValidElement(n)) {
      const u = {
        ref: l
      };
      return /* @__PURE__ */ S.cloneElement(n, u);
    }
    return n;
  }
  return s && /* @__PURE__ */ Ys.createPortal(n, s);
});
process.env.NODE_ENV !== "production" && (yn.propTypes = {
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
process.env.NODE_ENV !== "production" && (yn.propTypes = Ao(yn.propTypes));
function Ad(e) {
  return Fe("MuiPopper", e);
}
We("MuiPopper", ["root"]);
function jd(e, t) {
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
function vn(e) {
  return typeof e == "function" ? e() : e;
}
function Vn(e) {
  return e.nodeType !== void 0;
}
function Md(e) {
  return !Vn(e);
}
const Id = (e) => {
  const {
    classes: t
  } = e;
  return Ge({
    root: ["root"]
  }, Ad, t);
}, _d = {}, Dd = /* @__PURE__ */ S.forwardRef(function(t, r) {
  const {
    anchorEl: n,
    children: o,
    direction: i,
    disablePortal: s,
    modifiers: c,
    open: l,
    placement: u,
    popperOptions: d,
    popperRef: m,
    slotProps: h = {},
    slots: x = {},
    TransitionProps: b,
    // @ts-ignore internal logic
    ownerState: f,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...E
  } = t, T = S.useRef(null), k = ot(T, r), w = S.useRef(null), v = ot(w, m), g = S.useRef(v);
  Qt(() => {
    g.current = v;
  }, [v]), S.useImperativeHandle(m, () => w.current, []);
  const C = jd(u, i), [$, L] = S.useState(C), [B, p] = S.useState(vn(n));
  S.useEffect(() => {
    w.current && w.current.forceUpdate();
  }), S.useEffect(() => {
    n && p(vn(n));
  }, [n]), Qt(() => {
    if (!B || !l)
      return;
    const F = (te) => {
      L(te.placement);
    };
    if (process.env.NODE_ENV !== "production" && B && Vn(B) && B.nodeType === 1) {
      const te = B.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && te.top === 0 && te.left === 0 && te.right === 0 && te.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let Y = [{
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
        F(te);
      }
    }];
    c != null && (Y = Y.concat(c)), d && d.modifiers != null && (Y = Y.concat(d.modifiers));
    const V = kd(B, T.current, {
      placement: C,
      ...d,
      modifiers: Y
    });
    return g.current(V), () => {
      V.destroy(), g.current(null);
    };
  }, [B, s, c, l, d, C]);
  const P = {
    placement: $
  };
  b !== null && (P.TransitionProps = b);
  const D = Id(t), _ = x.root ?? "div", U = Vu({
    elementType: _,
    externalSlotProps: h.root,
    externalForwardedProps: E,
    additionalProps: {
      role: "tooltip",
      ref: k
    },
    ownerState: t,
    className: D.root
  });
  return /* @__PURE__ */ A.jsx(_, {
    ...U,
    children: typeof o == "function" ? o(P) : o
  });
}), Os = /* @__PURE__ */ S.forwardRef(function(t, r) {
  const {
    anchorEl: n,
    children: o,
    container: i,
    direction: s = "ltr",
    disablePortal: c = !1,
    keepMounted: l = !1,
    modifiers: u,
    open: d,
    placement: m = "bottom",
    popperOptions: h = _d,
    popperRef: x,
    style: b,
    transition: f = !1,
    slotProps: E = {},
    slots: T = {},
    ...k
  } = t, [w, v] = S.useState(!0), g = () => {
    v(!1);
  }, C = () => {
    v(!0);
  };
  if (!l && !d && (!f || w))
    return null;
  let $;
  if (i)
    $ = i;
  else if (n) {
    const p = vn(n);
    $ = p && Vn(p) ? zi(p).body : zi(null).body;
  }
  const L = !d && l && (!f || w) ? "none" : void 0, B = f ? {
    in: d,
    onEnter: g,
    onExited: C
  } : void 0;
  return /* @__PURE__ */ A.jsx(yn, {
    disablePortal: c,
    container: $,
    children: /* @__PURE__ */ A.jsx(Dd, {
      anchorEl: n,
      direction: s,
      disablePortal: c,
      modifiers: u,
      ref: r,
      open: f ? !w : d,
      placement: m,
      popperOptions: h,
      popperRef: x,
      slotProps: E,
      slots: T,
      ...k,
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
  anchorEl: Mr(a.oneOfType([wr, a.object, a.func]), (e) => {
    if (e.open) {
      const t = vn(e.anchorEl);
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
  popperRef: jo,
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
const Ld = ve(Os, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Ko = /* @__PURE__ */ S.forwardRef(function(t, r) {
  const n = Za(), o = Ue({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: i,
    component: s,
    components: c,
    componentsProps: l,
    container: u,
    disablePortal: d,
    keepMounted: m,
    modifiers: h,
    open: x,
    placement: b,
    popperOptions: f,
    popperRef: E,
    transition: T,
    slots: k,
    slotProps: w,
    ...v
  } = o, g = (k == null ? void 0 : k.root) ?? (c == null ? void 0 : c.Root), C = {
    anchorEl: i,
    container: u,
    disablePortal: d,
    keepMounted: m,
    modifiers: h,
    open: x,
    placement: b,
    popperOptions: f,
    popperRef: E,
    transition: T,
    ...v
  };
  return /* @__PURE__ */ A.jsx(Ld, {
    as: s,
    direction: n ? "rtl" : "ltr",
    slots: {
      root: g
    },
    slotProps: w ?? l,
    ...C,
    ref: r
  });
});
process.env.NODE_ENV !== "production" && (Ko.propTypes = {
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
  popperRef: jo,
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
function Bd(e) {
  return Fe("MuiListSubheader", e);
}
We("MuiListSubheader", ["root", "colorPrimary", "colorInherit", "gutters", "inset", "sticky"]);
const Vd = (e) => {
  const {
    classes: t,
    color: r,
    disableGutters: n,
    inset: o,
    disableSticky: i
  } = e, s = {
    root: ["root", r !== "default" && `color${re(r)}`, !n && "gutters", o && "inset", !i && "sticky"]
  };
  return Ge(s, Bd, t);
}, zd = ve("li", {
  name: "MuiListSubheader",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "default" && t[`color${re(r.color)}`], !r.disableGutters && t.gutters, r.inset && t.inset, !r.disableSticky && t.sticky];
  }
})(Ze(({
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
}))), bn = /* @__PURE__ */ S.forwardRef(function(t, r) {
  const n = Ue({
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
  } = n, m = {
    ...n,
    color: i,
    component: s,
    disableGutters: c,
    disableSticky: l,
    inset: u
  }, h = Vd(m);
  return /* @__PURE__ */ A.jsx(zd, {
    as: s,
    className: ce(h.root, o),
    ref: r,
    ownerState: m,
    ...d
  });
});
bn && (bn.muiSkipListHighlight = !0);
process.env.NODE_ENV !== "production" && (bn.propTypes = {
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
const Fd = ar(/* @__PURE__ */ A.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function Wd(e) {
  return Fe("MuiChip", e);
}
const ie = We("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), Ud = (e) => {
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
  return Ge(u, Wd, t);
}, Yd = ve("div", {
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
})(Ze(({
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
      color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)` : Me(e.palette.text.primary, 0.26),
      fontSize: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : Me(e.palette.text.primary, 0.4)
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
    }, ...Object.entries(e.palette).filter(_t(["contrastText"])).map(([r]) => ({
      props: {
        color: r
      },
      style: {
        backgroundColor: (e.vars || e).palette[r].main,
        color: (e.vars || e).palette[r].contrastText,
        [`& .${ie.deleteIcon}`]: {
          color: e.vars ? `rgba(${e.vars.palette[r].contrastTextChannel} / 0.7)` : Me(e.palette[r].contrastText, 0.7),
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
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Me(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
        }
      }
    }, ...Object.entries(e.palette).filter(_t(["dark"])).map(([r]) => ({
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
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Me(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
        },
        [`&.${ie.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Me(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[1]
        }
      }
    }, ...Object.entries(e.palette).filter(_t(["dark"])).map(([r]) => ({
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
    }, ...Object.entries(e.palette).filter(_t()).map(([r]) => ({
      props: {
        variant: "outlined",
        color: r
      },
      style: {
        color: (e.vars || e).palette[r].main,
        border: `1px solid ${e.vars ? `rgba(${e.vars.palette[r].mainChannel} / 0.7)` : Me(e.palette[r].main, 0.7)}`,
        [`&.${ie.clickable}:hover`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Me(e.palette[r].main, e.palette.action.hoverOpacity)
        },
        [`&.${ie.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.focusOpacity})` : Me(e.palette[r].main, e.palette.action.focusOpacity)
        },
        [`& .${ie.deleteIcon}`]: {
          color: e.vars ? `rgba(${e.vars.palette[r].mainChannel} / 0.7)` : Me(e.palette[r].main, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[r].main
          }
        }
      }
    }))]
  };
})), Hd = ve("span", {
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
function ga(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const Rs = /* @__PURE__ */ S.forwardRef(function(t, r) {
  const n = Ue({
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
    icon: m,
    label: h,
    onClick: x,
    onDelete: b,
    onKeyDown: f,
    onKeyUp: E,
    size: T = "medium",
    variant: k = "filled",
    tabIndex: w,
    skipFocusWhenDisabled: v = !1,
    // TODO v6: Rename to `focusableWhenDisabled`.
    ...g
  } = n, C = S.useRef(null), $ = ot(C, r), L = (z) => {
    z.stopPropagation(), b && b(z);
  }, B = (z) => {
    z.currentTarget === z.target && ga(z) && z.preventDefault(), f && f(z);
  }, p = (z) => {
    z.currentTarget === z.target && b && ga(z) && b(z), E && E(z);
  }, P = s !== !1 && x ? !0 : s, D = P || b ? Rr : l || "div", _ = {
    ...n,
    component: D,
    disabled: d,
    size: T,
    color: c,
    iconColor: /* @__PURE__ */ S.isValidElement(m) && m.props.color || c,
    onDelete: !!b,
    clickable: P,
    variant: k
  }, U = Ud(_), F = D === Rr ? {
    component: l || "div",
    focusVisibleClassName: U.focusVisible,
    ...b && {
      disableRipple: !0
    }
  } : {};
  let Y = null;
  b && (Y = u && /* @__PURE__ */ S.isValidElement(u) ? /* @__PURE__ */ S.cloneElement(u, {
    className: ce(u.props.className, U.deleteIcon),
    onClick: L
  }) : /* @__PURE__ */ A.jsx(Fd, {
    className: ce(U.deleteIcon),
    onClick: L
  }));
  let V = null;
  o && /* @__PURE__ */ S.isValidElement(o) && (V = /* @__PURE__ */ S.cloneElement(o, {
    className: ce(U.avatar, o.props.className)
  }));
  let te = null;
  return m && /* @__PURE__ */ S.isValidElement(m) && (te = /* @__PURE__ */ S.cloneElement(m, {
    className: ce(U.icon, m.props.className)
  })), process.env.NODE_ENV !== "production" && V && te && console.error("MUI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one."), /* @__PURE__ */ A.jsxs(Yd, {
    as: D,
    className: ce(U.root, i),
    disabled: P && d ? !0 : void 0,
    onClick: x,
    onKeyDown: B,
    onKeyUp: p,
    ref: $,
    tabIndex: v && d ? -1 : w,
    ownerState: _,
    ...F,
    ...g,
    children: [V || te, /* @__PURE__ */ A.jsx(Hd, {
      className: ce(U.label),
      ownerState: _,
      children: h
    }), Y]
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
const qd = ar(/* @__PURE__ */ A.jsx("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), "Person");
function Gd(e) {
  return Fe("MuiAvatar", e);
}
We("MuiAvatar", ["root", "colorDefault", "circular", "rounded", "square", "img", "fallback"]);
const Kd = (e) => {
  const {
    classes: t,
    variant: r,
    colorDefault: n
  } = e;
  return Ge({
    root: ["root", r, n && "colorDefault"],
    img: ["img"],
    fallback: ["fallback"]
  }, Gd, t);
}, Xd = ve("div", {
  name: "MuiAvatar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], r.colorDefault && t.colorDefault];
  }
})(Ze(({
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
}))), Jd = ve("img", {
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
}), Qd = ve(qd, {
  name: "MuiAvatar",
  slot: "Fallback",
  overridesResolver: (e, t) => t.fallback
})({
  width: "75%",
  height: "75%"
});
function Zd({
  crossOrigin: e,
  referrerPolicy: t,
  src: r,
  srcSet: n
}) {
  const [o, i] = S.useState(!1);
  return S.useEffect(() => {
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
const $s = /* @__PURE__ */ S.forwardRef(function(t, r) {
  const n = Ue({
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
    sizes: m,
    src: h,
    srcSet: x,
    variant: b = "circular",
    ...f
  } = n;
  let E = null;
  const T = {
    ...n,
    component: c,
    variant: b
  }, k = Zd({
    ...d,
    ...typeof u.img == "function" ? u.img(T) : u.img,
    src: h,
    srcSet: x
  }), w = h || x, v = w && k !== "error";
  T.colorDefault = !v, delete T.ownerState;
  const g = Kd(T), [C, $] = It("img", {
    className: g.img,
    elementType: Jd,
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
      src: h,
      srcSet: x,
      sizes: m
    },
    ownerState: T
  });
  return v ? E = /* @__PURE__ */ A.jsx(C, {
    ...$
  }) : i || i === 0 ? E = i : w && o ? E = o[0] : E = /* @__PURE__ */ A.jsx(Qd, {
    ownerState: T,
    className: g.fallback
  }), /* @__PURE__ */ A.jsx(Xd, {
    as: c,
    className: ce(g.root, s),
    ref: r,
    ...f,
    ownerState: T,
    children: E
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
const em = We("MuiBox", ["root"]), tm = Ln(), ft = lu({
  themeId: Tt,
  defaultTheme: tm,
  defaultClassName: em.root,
  generateClassName: La.generate
});
process.env.NODE_ENV !== "production" && (ft.propTypes = {
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
function ho(e) {
  return `scale(${e}, ${e ** 2})`;
}
const rm = {
  entering: {
    opacity: 1,
    transform: ho(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, to = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), xn = /* @__PURE__ */ S.forwardRef(function(t, r) {
  const {
    addEndListener: n,
    appear: o = !0,
    children: i,
    easing: s,
    in: c,
    onEnter: l,
    onEntered: u,
    onEntering: d,
    onExit: m,
    onExited: h,
    onExiting: x,
    style: b,
    timeout: f = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: E = xt,
    ...T
  } = t, k = jt(), w = S.useRef(), v = ir(), g = S.useRef(null), C = ot(g, Mo(i), r), $ = (F) => (Y) => {
    if (F) {
      const V = g.current;
      Y === void 0 ? F(V) : F(V, Y);
    }
  }, L = $(d), B = $((F, Y) => {
    Xf(F);
    const {
      duration: V,
      delay: te,
      easing: z
    } = dn({
      style: b,
      timeout: f,
      easing: s
    }, {
      mode: "enter"
    });
    let O;
    f === "auto" ? (O = v.transitions.getAutoHeightDuration(F.clientHeight), w.current = O) : O = V, F.style.transition = [v.transitions.create("opacity", {
      duration: O,
      delay: te
    }), v.transitions.create("transform", {
      duration: to ? O : O * 0.666,
      delay: te,
      easing: z
    })].join(","), l && l(F, Y);
  }), p = $(u), P = $(x), D = $((F) => {
    const {
      duration: Y,
      delay: V,
      easing: te
    } = dn({
      style: b,
      timeout: f,
      easing: s
    }, {
      mode: "exit"
    });
    let z;
    f === "auto" ? (z = v.transitions.getAutoHeightDuration(F.clientHeight), w.current = z) : z = Y, F.style.transition = [v.transitions.create("opacity", {
      duration: z,
      delay: V
    }), v.transitions.create("transform", {
      duration: to ? z : z * 0.666,
      delay: to ? V : V || z * 0.333,
      easing: te
    })].join(","), F.style.opacity = 0, F.style.transform = ho(0.75), m && m(F);
  }), _ = $(h), U = (F) => {
    f === "auto" && k.start(w.current || 0, F), n && n(g.current, F);
  };
  return /* @__PURE__ */ A.jsx(E, {
    appear: o,
    in: c,
    nodeRef: g,
    onEnter: B,
    onEntered: p,
    onEntering: L,
    onExit: D,
    onExited: _,
    onExiting: P,
    addEndListener: U,
    timeout: f === "auto" ? null : f,
    ...T,
    children: (F, {
      ownerState: Y,
      ...V
    }) => /* @__PURE__ */ S.cloneElement(i, {
      style: {
        opacity: 0,
        transform: ho(0.75),
        visibility: F === "exited" && !c ? "hidden" : void 0,
        ...rm[F],
        ...b,
        ...i.props.style
      },
      ref: C,
      ...V
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
xn && (xn.muiSupportAuto = !0);
const nr = /* @__PURE__ */ S.createContext({});
process.env.NODE_ENV !== "production" && (nr.displayName = "ListContext");
function nm(e) {
  return Fe("MuiList", e);
}
We("MuiList", ["root", "padding", "dense", "subheader"]);
const om = (e) => {
  const {
    classes: t,
    disablePadding: r,
    dense: n,
    subheader: o
  } = e;
  return Ge({
    root: ["root", !r && "padding", n && "dense", o && "subheader"]
  }, nm, t);
}, im = ve("ul", {
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
}), Xo = /* @__PURE__ */ S.forwardRef(function(t, r) {
  const n = Ue({
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
  } = n, m = S.useMemo(() => ({
    dense: c
  }), [c]), h = {
    ...n,
    component: s,
    dense: c,
    disablePadding: l
  }, x = om(h);
  return /* @__PURE__ */ A.jsx(nr.Provider, {
    value: m,
    children: /* @__PURE__ */ A.jsxs(im, {
      as: s,
      className: ce(x.root, i),
      ref: r,
      ownerState: h,
      ...d,
      children: [u, o]
    })
  });
});
process.env.NODE_ENV !== "production" && (Xo.propTypes = {
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
function am(e) {
  return Fe("MuiListItemButton", e);
}
const dr = We("MuiListItemButton", ["root", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "selected"]), sm = (e, t) => {
  const {
    ownerState: r
  } = e;
  return [t.root, r.dense && t.dense, r.alignItems === "flex-start" && t.alignItemsFlexStart, r.divider && t.divider, !r.disableGutters && t.gutters];
}, cm = (e) => {
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
  }, am, r);
  return {
    ...r,
    ...u
  };
}, lm = ve(Rr, {
  shouldForwardProp: (e) => fs(e) || e === "classes",
  name: "MuiListItemButton",
  slot: "Root",
  overridesResolver: sm
})(Ze(({
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
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Me(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${dr.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Me(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${dr.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Me(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Me(e.palette.primary.main, e.palette.action.selectedOpacity)
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
}))), Jo = /* @__PURE__ */ S.forwardRef(function(t, r) {
  const n = Ue({
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
    focusVisibleClassName: m,
    selected: h = !1,
    className: x,
    ...b
  } = n, f = S.useContext(nr), E = S.useMemo(() => ({
    dense: l || f.dense || !1,
    alignItems: o,
    disableGutters: u
  }), [o, f.dense, l, u]), T = S.useRef(null);
  Qt(() => {
    i && (T.current ? T.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a ListItemButton whose component has not been rendered."));
  }, [i]);
  const k = {
    ...n,
    alignItems: o,
    dense: E.dense,
    disableGutters: u,
    divider: d,
    selected: h
  }, w = cm(k), v = ot(T, r);
  return /* @__PURE__ */ A.jsx(nr.Provider, {
    value: E,
    children: /* @__PURE__ */ A.jsx(lm, {
      ref: v,
      href: b.href || b.to,
      component: (b.href || b.to) && s === "div" ? "button" : s,
      focusVisibleClassName: ce(w.focusVisible, m),
      ownerState: k,
      className: ce(w.root, x),
      ...b,
      classes: w,
      children: c
    })
  });
});
process.env.NODE_ENV !== "production" && (Jo.propTypes = {
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
function um(e) {
  return Fe("MuiListItemIcon", e);
}
We("MuiListItemIcon", ["root", "alignItemsFlexStart"]);
const fm = (e) => {
  const {
    alignItems: t,
    classes: r
  } = e;
  return Ge({
    root: ["root", t === "flex-start" && "alignItemsFlexStart"]
  }, um, r);
}, pm = ve("div", {
  name: "MuiListItemIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.alignItems === "flex-start" && t.alignItemsFlexStart];
  }
})(Ze(({
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
}))), Qo = /* @__PURE__ */ S.forwardRef(function(t, r) {
  const n = Ue({
    props: t,
    name: "MuiListItemIcon"
  }), {
    className: o,
    ...i
  } = n, s = S.useContext(nr), c = {
    ...n,
    alignItems: s.alignItems
  }, l = fm(c);
  return /* @__PURE__ */ A.jsx(pm, {
    className: ce(l.root, o),
    ownerState: c,
    ref: r,
    ...i
  });
});
process.env.NODE_ENV !== "production" && (Qo.propTypes = {
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
function dm(e) {
  return Fe("MuiListItemText", e);
}
const Kr = We("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), mm = (e) => {
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
  }, dm, t);
}, hm = ve("div", {
  name: "MuiListItemText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [{
      [`& .${Kr.primary}`]: t.primary
    }, {
      [`& .${Kr.secondary}`]: t.secondary
    }, t.root, r.inset && t.inset, r.primary && r.secondary && t.multiline, r.dense && t.dense];
  }
})({
  flex: "1 1 auto",
  minWidth: 0,
  marginTop: 4,
  marginBottom: 4,
  [`.${ia.root}:where(& .${Kr.primary})`]: {
    display: "block"
  },
  [`.${ia.root}:where(& .${Kr.secondary})`]: {
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
}), zn = /* @__PURE__ */ S.forwardRef(function(t, r) {
  const n = Ue({
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
    secondaryTypographyProps: m,
    slots: h = {},
    slotProps: x = {},
    ...b
  } = n, {
    dense: f
  } = S.useContext(nr);
  let E = l ?? o, T = d;
  const k = {
    ...n,
    disableTypography: s,
    inset: c,
    primary: !!E,
    secondary: !!T,
    dense: f
  }, w = mm(k), v = {
    slots: h,
    slotProps: {
      primary: u,
      secondary: m,
      ...x
    }
  }, [g, C] = It("primary", {
    className: w.primary,
    elementType: gt,
    externalForwardedProps: v,
    ownerState: k
  }), [$, L] = It("secondary", {
    className: w.secondary,
    elementType: gt,
    externalForwardedProps: v,
    ownerState: k
  });
  return E != null && E.type !== gt && !s && (E = /* @__PURE__ */ A.jsx(g, {
    variant: f ? "body2" : "body1",
    component: C != null && C.variant ? void 0 : "span",
    ...C,
    children: E
  })), T != null && T.type !== gt && !s && (T = /* @__PURE__ */ A.jsx($, {
    variant: "body2",
    color: "textSecondary",
    ...L,
    children: T
  })), /* @__PURE__ */ A.jsxs(hm, {
    className: ce(w.root, i),
    ownerState: k,
    ref: r,
    ...b,
    children: [E, T]
  });
});
process.env.NODE_ENV !== "production" && (zn.propTypes = {
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
function gm(e) {
  return Fe("MuiTooltip", e);
}
const ke = We("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);
function ym(e) {
  return Math.round(e * 1e5) / 1e5;
}
const vm = (e) => {
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
  return Ge(s, gm, t);
}, bm = ve(Ko, {
  name: "MuiTooltip",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.popper, !r.disableInteractive && t.popperInteractive, r.arrow && t.popperArrow, !r.open && t.popperClose];
  }
})(Ze(({
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
      [`&[data-popper-placement*="bottom"] .${ke.arrow}`]: {
        top: 0,
        marginTop: "-0.71em",
        "&::before": {
          transformOrigin: "0 100%"
        }
      },
      [`&[data-popper-placement*="top"] .${ke.arrow}`]: {
        bottom: 0,
        marginBottom: "-0.71em",
        "&::before": {
          transformOrigin: "100% 0"
        }
      },
      [`&[data-popper-placement*="right"] .${ke.arrow}`]: {
        height: "1em",
        width: "0.71em",
        "&::before": {
          transformOrigin: "100% 100%"
        }
      },
      [`&[data-popper-placement*="left"] .${ke.arrow}`]: {
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
      [`&[data-popper-placement*="right"] .${ke.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !!t.isRtl,
    style: {
      [`&[data-popper-placement*="right"] .${ke.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !t.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${ke.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !!t.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${ke.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }]
}))), xm = ve("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.tooltip, r.touch && t.touch, r.arrow && t.tooltipArrow, t[`tooltipPlacement${re(r.placement.split("-")[0])}`]];
  }
})(Ze(({
  theme: e
}) => ({
  backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : Me(e.palette.grey[700], 0.92),
  borderRadius: (e.vars || e).shape.borderRadius,
  color: (e.vars || e).palette.common.white,
  fontFamily: e.typography.fontFamily,
  padding: "4px 8px",
  fontSize: e.typography.pxToRem(11),
  maxWidth: 300,
  margin: 2,
  wordWrap: "break-word",
  fontWeight: e.typography.fontWeightMedium,
  [`.${ke.popper}[data-popper-placement*="left"] &`]: {
    transformOrigin: "right center"
  },
  [`.${ke.popper}[data-popper-placement*="right"] &`]: {
    transformOrigin: "left center"
  },
  [`.${ke.popper}[data-popper-placement*="top"] &`]: {
    transformOrigin: "center bottom",
    marginBottom: "14px"
  },
  [`.${ke.popper}[data-popper-placement*="bottom"] &`]: {
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
      lineHeight: `${ym(16 / 14)}em`,
      fontWeight: e.typography.fontWeightRegular
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.isRtl,
    style: {
      [`.${ke.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "14px"
      },
      [`.${ke.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "14px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.isRtl && t.touch,
    style: {
      [`.${ke.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "24px"
      },
      [`.${ke.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !!t.isRtl,
    style: {
      [`.${ke.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "14px"
      },
      [`.${ke.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "14px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !!t.isRtl && t.touch,
    style: {
      [`.${ke.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "24px"
      },
      [`.${ke.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${ke.popper}[data-popper-placement*="top"] &`]: {
        marginBottom: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${ke.popper}[data-popper-placement*="bottom"] &`]: {
        marginTop: "24px"
      }
    }
  }]
}))), Em = ve("span", {
  name: "MuiTooltip",
  slot: "Arrow",
  overridesResolver: (e, t) => t.arrow
})(Ze(({
  theme: e
}) => ({
  overflow: "hidden",
  position: "absolute",
  width: "1em",
  height: "0.71em",
  boxSizing: "border-box",
  color: e.vars ? e.vars.palette.Tooltip.bg : Me(e.palette.grey[700], 0.9),
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
let Xr = !1;
const ya = new Dn();
let mr = {
  x: 0,
  y: 0
};
function Jr(e, t) {
  return (r, ...n) => {
    t && t(r, ...n), e(r, ...n);
  };
}
const Ps = /* @__PURE__ */ S.forwardRef(function(t, r) {
  const n = Ue({
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
    disableHoverListener: m = !1,
    disableInteractive: h = !1,
    disableTouchListener: x = !1,
    enterDelay: b = 100,
    enterNextDelay: f = 0,
    enterTouchDelay: E = 700,
    followCursor: T = !1,
    id: k,
    leaveDelay: w = 0,
    leaveTouchDelay: v = 1500,
    onClose: g,
    onOpen: C,
    open: $,
    placement: L = "bottom",
    PopperComponent: B,
    PopperProps: p = {},
    slotProps: P = {},
    slots: D = {},
    title: _,
    TransitionComponent: U,
    TransitionProps: F,
    ...Y
  } = n, V = /* @__PURE__ */ S.isValidElement(i) ? i : /* @__PURE__ */ A.jsx("span", {
    children: i
  }), te = ir(), z = Za(), [O, j] = S.useState(), [J, Q] = S.useState(null), H = S.useRef(!1), X = h || T, I = jt(), q = jt(), K = jt(), ee = jt(), [Z, ae] = Iu({
    controlled: $,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let M = Z;
  if (process.env.NODE_ENV !== "production") {
    const {
      current: ne
    } = S.useRef($ !== void 0);
    S.useEffect(() => {
      O && O.disabled && !ne && _ !== "" && O.tagName.toLowerCase() === "button" && console.error(["MUI: You are providing a disabled `button` child to the Tooltip component.", "A disabled element does not fire events.", "Tooltip needs to listen to the child element's events to display the title.", "", "Add a simple wrapper element, such as a `span`."].join(`
`));
    }, [_, O, ne]);
  }
  const Se = ju(k), Oe = S.useRef(), Ie = Xt(() => {
    Oe.current !== void 0 && (document.body.style.WebkitUserSelect = Oe.current, Oe.current = void 0), ee.clear();
  });
  S.useEffect(() => Ie, [Ie]);
  const Ke = (ne) => {
    ya.clear(), Xr = !0, ae(!0), C && !M && C(ne);
  }, he = Xt(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (ne) => {
      ya.start(800 + w, () => {
        Xr = !1;
      }), ae(!1), g && M && g(ne), I.start(te.transitions.duration.shortest, () => {
        H.current = !1;
      });
    }
  ), Re = (ne) => {
    H.current && ne.type !== "touchstart" || (O && O.removeAttribute("title"), q.clear(), K.clear(), b || Xr && f ? q.start(Xr ? f : b, () => {
      Ke(ne);
    }) : Ke(ne));
  }, Le = (ne) => {
    q.clear(), K.start(w, () => {
      he(ne);
    });
  }, [, _e] = S.useState(!1), y = (ne) => {
    ln(ne.target) || (_e(!1), Le(ne));
  }, N = (ne) => {
    O || j(ne.currentTarget), ln(ne.target) && (_e(!0), Re(ne));
  }, W = (ne) => {
    H.current = !0;
    const lt = V.props;
    lt.onTouchStart && lt.onTouchStart(ne);
  }, oe = (ne) => {
    W(ne), K.clear(), I.clear(), Ie(), Oe.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", ee.start(E, () => {
      document.body.style.WebkitUserSelect = Oe.current, Re(ne);
    });
  }, Ce = (ne) => {
    V.props.onTouchEnd && V.props.onTouchEnd(ne), Ie(), K.start(v, () => {
      he(ne);
    });
  };
  S.useEffect(() => {
    if (!M)
      return;
    function ne(lt) {
      lt.key === "Escape" && he(lt);
    }
    return document.addEventListener("keydown", ne), () => {
      document.removeEventListener("keydown", ne);
    };
  }, [he, M]);
  const le = ot(Mo(V), j, r);
  !_ && _ !== 0 && (M = !1);
  const G = S.useRef(), me = (ne) => {
    const lt = V.props;
    lt.onMouseMove && lt.onMouseMove(ne), mr = {
      x: ne.clientX,
      y: ne.clientY
    }, G.current && G.current.update();
  }, Ee = {}, Te = typeof _ == "string";
  u ? (Ee.title = !M && Te && !m ? _ : null, Ee["aria-describedby"] = M ? Se : null) : (Ee["aria-label"] = Te ? _ : null, Ee["aria-labelledby"] = M && !Te ? Se : null);
  const se = {
    ...Ee,
    ...Y,
    ...V.props,
    className: ce(Y.className, V.props.className),
    onTouchStart: W,
    ref: le,
    ...T ? {
      onMouseMove: me
    } : {}
  };
  process.env.NODE_ENV !== "production" && (se["data-mui-internal-clone-element"] = !0, S.useEffect(() => {
    O && !O.getAttribute("data-mui-internal-clone-element") && console.error(["MUI: The `children` component of the Tooltip is not forwarding its props correctly.", "Please make sure that props are spread on the same element that the ref is applied to."].join(`
`));
  }, [O]));
  const Ne = {};
  x || (se.onTouchStart = oe, se.onTouchEnd = Ce), m || (se.onMouseOver = Jr(Re, se.onMouseOver), se.onMouseLeave = Jr(Le, se.onMouseLeave), X || (Ne.onMouseOver = Re, Ne.onMouseLeave = Le)), d || (se.onFocus = Jr(N, se.onFocus), se.onBlur = Jr(y, se.onBlur), X || (Ne.onFocus = N, Ne.onBlur = y)), process.env.NODE_ENV !== "production" && V.props.title && console.error(["MUI: You have provided a `title` prop to the child of <Tooltip />.", `Remove this title prop \`${V.props.title}\` or the Tooltip component.`].join(`
`));
  const Be = {
    ...n,
    isRtl: z,
    arrow: o,
    disableInteractive: X,
    placement: L,
    PopperComponentProp: B,
    touch: H.current
  }, Ve = typeof P.popper == "function" ? P.popper(Be) : P.popper, ct = S.useMemo(() => {
    var lt, Zo;
    let ne = [{
      name: "arrow",
      enabled: !!J,
      options: {
        element: J,
        padding: 4
      }
    }];
    return (lt = p.popperOptions) != null && lt.modifiers && (ne = ne.concat(p.popperOptions.modifiers)), (Zo = Ve == null ? void 0 : Ve.popperOptions) != null && Zo.modifiers && (ne = ne.concat(Ve.popperOptions.modifiers)), {
      ...p.popperOptions,
      ...Ve == null ? void 0 : Ve.popperOptions,
      modifiers: ne
    };
  }, [J, p.popperOptions, Ve == null ? void 0 : Ve.popperOptions]), Fn = vm(Be), Ns = typeof P.transition == "function" ? P.transition(Be) : P.transition, Lr = {
    slots: {
      popper: c.Popper,
      transition: c.Transition ?? U,
      tooltip: c.Tooltip,
      arrow: c.Arrow,
      ...D
    },
    slotProps: {
      arrow: P.arrow ?? l.arrow,
      popper: {
        ...p,
        ...Ve ?? l.popper
      },
      // resolvedPopperProps can be spread because it's already an object
      tooltip: P.tooltip ?? l.tooltip,
      transition: {
        ...F,
        ...Ns ?? l.transition
      }
    }
  }, [As, js] = It("popper", {
    elementType: bm,
    externalForwardedProps: Lr,
    ownerState: Be,
    className: ce(Fn.popper, p == null ? void 0 : p.className)
  }), [Ms, Is] = It("transition", {
    elementType: xn,
    externalForwardedProps: Lr,
    ownerState: Be
  }), [_s, Ds] = It("tooltip", {
    elementType: xm,
    className: Fn.tooltip,
    externalForwardedProps: Lr,
    ownerState: Be
  }), [Ls, Bs] = It("arrow", {
    elementType: Em,
    className: Fn.arrow,
    externalForwardedProps: Lr,
    ownerState: Be,
    ref: Q
  });
  return /* @__PURE__ */ A.jsxs(S.Fragment, {
    children: [/* @__PURE__ */ S.cloneElement(V, se), /* @__PURE__ */ A.jsx(As, {
      as: B ?? Ko,
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
      } : O,
      popperRef: G,
      open: O ? M : !1,
      id: Se,
      transition: !0,
      ...Ne,
      ...js,
      popperOptions: ct,
      children: ({
        TransitionProps: ne
      }) => /* @__PURE__ */ A.jsx(Ms, {
        timeout: te.transitions.duration.shorter,
        ...ne,
        ...Is,
        children: /* @__PURE__ */ A.jsxs(_s, {
          ...Ds,
          children: [_, o ? /* @__PURE__ */ A.jsx(Ls, {
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
const Sm = ar(/* @__PURE__ */ A.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-12.5c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5m0 5.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"
}), "AlbumOutlined"), Tm = ut.forwardRef(({
  userName: e = "",
  designation: t = "",
  userimg: r = "",
  isCollapse: n = !1
}, o) => {
  const i = ir();
  return /* @__PURE__ */ A.jsx(ft, { children: n ? "" : /* @__PURE__ */ A.jsxs(
    ft,
    {
      display: "flex",
      alignItems: "center",
      gap: 2,
      sx: { m: 3, p: 2, borderRadius: "8px", bgcolor: i.palette.secondary.main + 20 },
      children: [
        /* @__PURE__ */ A.jsx($s, { alt: "Remy Sharp", src: r }),
        /* @__PURE__ */ A.jsxs(ft, { children: [
          /* @__PURE__ */ A.jsx(gt, { variant: "h6", children: e }),
          /* @__PURE__ */ A.jsx(gt, { variant: "caption", color: "textSecondary", children: t })
        ] }),
        /* @__PURE__ */ A.jsx(ft, { sx: { ml: "auto" }, children: /* @__PURE__ */ A.jsx(Ps, { title: "Logout", placement: "top", children: /* @__PURE__ */ A.jsx(
          gs,
          {
            color: "primary",
            "aria-label": "logout",
            size: "small",
            children: /* @__PURE__ */ A.jsx(Sm, {})
          }
        ) }) })
      ]
    }
  ) });
}), Dr = S.createContext({
  width: "270px",
  collapsewidth: "80px",
  textColor: "#8D939D",
  isCollapse: !1,
  themeColor: "#5d87ff"
}), Nm = S.forwardRef(
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
    showProfile: m = !0,
    userimg: h = "https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-1.jpg"
  }, x) => {
    const [b, f] = S.useState(!1), E = o && !b ? r : t;
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
    return c === "dark" && (n = "rgba(255,255,255, 0.9)"), /* @__PURE__ */ A.jsx(Df, { theme: T, children: /* @__PURE__ */ A.jsx(
      ft,
      {
        dir: l,
        sx: {
          width: E,
          flexShrink: 0,
          fontFamily: "inherit",
          color: n
        },
        children: /* @__PURE__ */ A.jsxs(ft, { sx: { width: E }, children: [
          /* @__PURE__ */ A.jsx(
            Dr.Provider,
            {
              value: { textColor: n, isCollapse: o, width: t, collapsewidth: r, themeColor: i },
              children: e
            }
          ),
          m ? /* @__PURE__ */ A.jsx(
            Tm,
            {
              userName: u,
              designation: d,
              userimg: h,
              isCollapse: o
            }
          ) : null
        ] })
      }
    ) });
  }
), Am = S.forwardRef(
  ({ children: e, subHeading: t = "menu" }, r) => {
    const n = S.useContext(Dr);
    return /* @__PURE__ */ A.jsx(ft, { sx: { px: n.isCollapse ? 2 : 3, pt: 2 }, children: /* @__PURE__ */ A.jsx(
      Xo,
      {
        ref: r,
        component: "nav",
        subheader: /* @__PURE__ */ A.jsx(
          bn,
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
), Cm = ar(/* @__PURE__ */ A.jsx("path", {
  d: "m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
}), "ExpandLess"), wm = ar(/* @__PURE__ */ A.jsx("path", {
  d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
}), "ExpandMore"), ks = ar(/* @__PURE__ */ A.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
}), "CircleOutlined"), jm = S.forwardRef(
  ({
    children: e,
    title: t = "",
    icon: r,
    borderRadius: n = "8px",
    textFontSize: o = "14px",
    disabled: i = !1
  }, s) => {
    const c = S.useContext(Dr), [l, u] = S.useState(!1), d = () => {
      u(!l);
    }, m = ve(Jo)(() => ({
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
    })), h = ve(Qo)(() => ({
      display: "flex",
      gap: "10px",
      marginBottom: "0px",
      padding: "0px",
      minWidth: "30px",
      cursor: "pointer",
      color: "inherit"
    }));
    return /* @__PURE__ */ A.jsxs(ft, { ref: s, children: [
      /* @__PURE__ */ A.jsxs(m, { onClick: d, sx: { display: "flex", gap: "15px" }, children: [
        /* @__PURE__ */ A.jsx(h, { style: { minWidth: "0px" }, children: r || /* @__PURE__ */ A.jsx(ks, {}) }),
        !c.isCollapse && /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
          /* @__PURE__ */ A.jsx(zn, { sx: { my: 0 }, children: /* @__PURE__ */ A.jsx(gt, { fontSize: o, sx: { lineHeight: "1" }, variant: "caption", children: t }) }),
          l ? /* @__PURE__ */ A.jsx(Cm, {}) : /* @__PURE__ */ A.jsx(wm, {})
        ] })
      ] }),
      /* @__PURE__ */ A.jsx(mn, { in: l, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ A.jsx(Xo, { component: "div", disablePadding: !0, children: e }) })
    ] });
  }
), Mm = S.forwardRef(
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
  }, m) => {
    const h = S.useContext(Dr), x = ir(), b = ve(Jo)(() => ({
      whiteSpace: "nowrap",
      marginBottom: "2px",
      padding: "10px 12px",
      textAlign: x.direction === "ltr" ? "left" : "right",
      borderRadius: c,
      color: h.textColor,
      cursor: l ? "default" : "pointer",
      opacity: l ? "0.6" : "1",
      ".MuiListItemIcon-root": {
        color: h.textColor
      },
      "&:hover": {
        backgroundColor: l ? "#fff" : h.themeColor + 20,
        color: h.themeColor,
        ".MuiListItemIcon-root": {
          color: h.themeColor
        }
      },
      "&.Mui-selected": {
        color: "white",
        backgroundColor: h.themeColor,
        "&:hover": {
          backgroundColor: h.themeColor,
          color: "white"
        },
        ".MuiListItemIcon-root": {
          color: "#fff"
        }
      }
    })), f = ve(Qo)(() => ({
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
    return /* @__PURE__ */ A.jsx(ft, { children: /* @__PURE__ */ A.jsxs(
      b,
      {
        href: r,
        sx: { display: "flex", gap: "15px" },
        target: d,
        selected: r === "/",
        children: [
          /* @__PURE__ */ A.jsx(
            f,
            {
              sx: {
                minWidth: "0px"
              },
              children: t || /* @__PURE__ */ A.jsx(ks, {})
            }
          ),
          h.isCollapse ? null : /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
            /* @__PURE__ */ A.jsx(zn, { sx: { my: 0 }, children: /* @__PURE__ */ A.jsx(
              gt,
              {
                fontSize: s,
                sx: { lineHeight: "1" },
                variant: "caption",
                children: e
              }
            ) }),
            n && /* @__PURE__ */ A.jsx(
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
), Im = S.forwardRef(
  ({ children: e, img: t = "https://adminmart.com/wp-content/uploads/2024/03/logo-admin-mart-news.png" }, r) => {
    const n = S.useContext(Dr), o = ve(zn)(() => ({
      whiteSpace: "nowrap",
      overflow: n.isCollapse ? "hidden" : "visible",
      WebkitLineClamp: "1",
      fontSize: "2rem",
      padding: "15px 22px",
      textOverflow: "ellipsis"
    }));
    return /* @__PURE__ */ A.jsx(o, { href: "/", ref: r, children: t === "" ? /* @__PURE__ */ A.jsx(gt, { variant: "body1", children: e }) : /* @__PURE__ */ A.jsx(
      ft,
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
  Im as Logo,
  Am as Menu,
  Mm as MenuItem,
  Nm as Sidebar,
  jm as Submenu
};
