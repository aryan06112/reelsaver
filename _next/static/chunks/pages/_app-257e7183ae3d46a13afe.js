(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [888], {
       425: function (e, t, n) {
          "use strict";
          n.d(t, {
             f: function () {
                return u
             },
             F: function () {
                return c
             }
          });
          var r = n(7294),
             o = n(9008);
          const s = (0, r.createContext)({
                setTheme: e => {},
                themes: []
             }),
             c = () => (0, r.useContext)(s),
             a = ["light", "dark"],
             i = "(prefers-color-scheme: dark)",
             u = ({
                forcedTheme: e,
                disableTransitionOnChange: t = !1,
                enableSystem: n = !0,
                enableColorScheme: o = !0,
                storageKey: c = "theme",
                themes: u = ["light", "dark"],
                defaultTheme: h = (n ? "system" : "light"),
                attribute: y = "data-theme",
                value: p,
                children: b
             }) => {
                const [v, g] = (0, r.useState)((() => m(c, h))), [w, O] = (0, r.useState)((() => m(c))), $ = p ? Object.values(p) : u, T = (0, r.useCallback)((t => {
                   const n = f(t);
                   O(n), "system" !== v || e || S(n, !1)
                }), [v, e]), E = (0, r.useRef)(T);
                E.current = T;
                const S = (0, r.useCallback)(((e, r = !0, o = !0) => {
                   let s = (null == p ? void 0 : p[e]) || e;
                   const a = t && o ? d() : null;
                   if (r) try {
                      localStorage.setItem(c, e)
                   } catch (e) {}
                   if ("system" === e && n) {
                      const e = f();
                      s = (null == p ? void 0 : p[e]) || e
                   }
                   if (o) {
                      const e = document.documentElement;
                      "class" === y ? (e.classList.remove(...$), e.classList.add(s)) : e.setAttribute(y, s), null == a || a()
                   }
                }), []);
                (0, r.useEffect)((() => {
                   const e = function () {
                         return E.current(...[].slice.call(arguments))
                      },
                      t = window.matchMedia(i);
                   return t.addListener(e), e(t), () => t.removeListener(e)
                }), []);
                const _ = (0, r.useCallback)((t => {
                   e ? S(t, !0, !1) : S(t), g(t)
                }), [e]);
                return (0, r.useEffect)((() => {
                   const e = e => {
                      e.key === c && _(e.newValue || h)
                   };
                   return window.addEventListener("storage", e), () => window.removeEventListener("storage", e)
                }), [_]), (0, r.useEffect)((() => {
                   if (!o) return;
                   let t = e && a.includes(e) ? e : v && a.includes(v) ? v : "system" === v && w || null;
                   document.documentElement.style.setProperty("color-scheme", t)
                }), [o, v, w, e]), r.createElement(s.Provider, {
                   value: {
                      theme: v,
                      setTheme: _,
                      forcedTheme: e,
                      resolvedTheme: "system" === v ? w : v,
                      themes: n ? [...u, "system"] : u,
                      systemTheme: n ? w : void 0
                   }
                }, r.createElement(l, {
                   forcedTheme: e,
                   storageKey: c,
                   attribute: y,
                   value: p,
                   enableSystem: n,
                   defaultTheme: h,
                   attrs: $
                }), b)
             },
             l = (0, r.memo)((({
                forcedTheme: e,
                storageKey: t,
                attribute: n,
                enableSystem: s,
                defaultTheme: c,
                value: a,
                attrs: u
             }) => {
                const l = "class" === n ? `var d=document.documentElement.classList;d.remove(${u.map((e=>`'${e}'`)).join(",")});` : "var d=document.documentElement;",
                   m = (e, t) => {
                      e = (null == a ? void 0 : a[e]) || e;
                      const r = t ? e : `'${e}'`;
                      return "class" === n ? `d.add(${r})` : `d.setAttribute('${n}', ${r})`
                   },
                   d = "system" === c;
                return r.createElement(o.default, null, r.createElement("script", e ? {
                   key: "next-themes-script",
                   dangerouslySetInnerHTML: {
                      __html: `!function(){${l}${m(e)}}()`
                   }
                } : s ? {
                   key: "next-themes-script",
                   dangerouslySetInnerHTML: {
                      __html: `!function(){try {${l}var e=localStorage.getItem('${t}');${d?"":m(c)+";"}if("system"===e||(!e&&${d})){var t="${i}",m=window.matchMedia(t);m.media!==t||m.matches?${m("dark")}:${m("light")}}else if(e) ${a?`var x=${JSON.stringify(a)};`:""}${m(a?"x[e]":"e",!0)}}catch(e){}}()`
                   }
                } : {
                   key: "next-themes-script",
                   dangerouslySetInnerHTML: {
                      __html: `!function(){try{${l}var e=localStorage.getItem("${t}");if(e){${a?`var x=${JSON.stringify(a)};`:""}${m(a?"x[e]":"e",!0)}}else{${m(c)};}}catch(t){}}();`
                   }
                }))
             }), ((e, t) => e.forcedTheme === t.forcedTheme)),
             m = (e, t) => {
                if ("undefined" == typeof window) return;
                let n;
                try {
                   n = localStorage.getItem(e) || void 0
                } catch (e) {}
                return n || t
             },
             d = () => {
                const e = document.createElement("style");
                return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(e), () => {
                   window.getComputedStyle(document.body), setTimeout((() => {
                      document.head.removeChild(e)
                   }), 1)
                }
             },
             f = e => (e || (e = window.matchMedia(i)), e.matches ? "dark" : "light")
       },
       1476: function (e, t, n) {
          "use strict";
          n.r(t);
          var r = n(4942),
             o = n(425),
             s = (n(7294), n(3146), n(5893));
 
          function c(e, t) {
             var n = Object.keys(e);
             if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                   return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
             }
             return n
          }
 
          function a(e) {
             for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? c(Object(n), !0).forEach((function (t) {
                   (0, r.Z)(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function (t) {
                   Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
             }
             return e
          }
          t.default = function (e) {
             var t = e.Component,
                n = e.pageProps;
             return (0, s.jsx)(o.f, {
                attribute: "class",
                enableSystem: !1,
                defaultTheme: "light",
                children: (0, s.jsx)(t, a({}, n))
             })
          }
       },
       6363: function (e, t, n) {
          (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function () {
             return n(1476)
          }])
       },
       3146: function () {},
       9008: function (e, t, n) {
          e.exports = n(639)
       },
       4942: function (e, t, n) {
          "use strict";
 
          function r(e, t, n) {
             return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
             }) : e[t] = n, e
          }
          n.d(t, {
             Z: function () {
                return r
             }
          })
       }
    },
    function (e) {
       var t = function (t) {
          return e(e.s = t)
       };
       e.O(0, [774, 179], (function () {
          return t(6363), t(4651)
       }));
       var n = e.O();
       _N_E = n
    }
 ]);