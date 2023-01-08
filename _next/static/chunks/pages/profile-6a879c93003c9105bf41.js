(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [277],
  {
    2042: function (e, t, r) {
      "use strict";
      var n = r(4942),
        o = (r(7294), r(5893));
      function a(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : a(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      t.Z = function (e) {
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(
              "svg",
              s(
                s(
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    style: { margin: "auto", background: "0 0" },
                    width: 100,
                    height: 100,
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "xMidYMid",
                    display: "block",
                  },
                  e
                ),
                {},
                {
                  children: (0, o.jsx)("circle", {
                    cx: 50,
                    cy: 50,
                    fill: "none",
                    stroke: "#2563eb",
                    strokeWidth: 10,
                    r: 35,
                    strokeDasharray: "164.93361431346415 56.97787143782138",
                    children: (0, o.jsx)("animateTransform", {
                      attributeName: "transform",
                      type: "rotate",
                      repeatCount: "indefinite",
                      dur: "0.5s",
                      values: "0 50 50;360 50 50",
                      keyTimes: "0;1",
                    }),
                  }),
                }
              )
            ),
            (0, o.jsx)("div", {
              className: "text-center text-sm mb-2",
              children: " Please Wait... Take Upto 10 Seconds",
            }),
          ],
        });
      };
    },
    2167: function (e, t, r) {
      "use strict";
      var n = r(3038);
      t.default = void 0;
      var o,
        a = (o = r(7294)) && o.__esModule ? o : { default: o },
        s = r(1063),
        i = r(4651),
        l = r(7426);
      var c = {};
      function u(e, t, r, n) {
        if (e && s.isLocalURL(t)) {
          e.prefetch(t, r, n).catch(function (e) {
            0;
          });
          var o =
            n && "undefined" !== typeof n.locale ? n.locale : e && e.locale;
          c[t + "%" + r + (o ? "%" + o : "")] = !0;
        }
      }
      var d = function (e) {
        var t,
          r = !1 !== e.prefetch,
          o = i.useRouter(),
          d = a.default.useMemo(
            function () {
              var t = s.resolveHref(o, e.href, !0),
                r = n(t, 2),
                a = r[0],
                i = r[1];
              return { href: a, as: e.as ? s.resolveHref(o, e.as) : i || a };
            },
            [o, e.href, e.as]
          ),
          f = d.href,
          p = d.as,
          h = e.children,
          m = e.replace,
          y = e.shallow,
          v = e.scroll,
          g = e.locale;
        "string" === typeof h && (h = a.default.createElement("a", null, h));
        var b =
            (t = a.default.Children.only(h)) && "object" === typeof t && t.ref,
          x = l.useIntersection({ rootMargin: "200px" }),
          w = n(x, 2),
          j = w[0],
          k = w[1],
          O = a.default.useCallback(
            function (e) {
              j(e),
                b &&
                  ("function" === typeof b
                    ? b(e)
                    : "object" === typeof b && (b.current = e));
            },
            [b, j]
          );
        a.default.useEffect(
          function () {
            var e = k && r && s.isLocalURL(f),
              t = "undefined" !== typeof g ? g : o && o.locale,
              n = c[f + "%" + p + (t ? "%" + t : "")];
            e && !n && u(o, f, p, { locale: t });
          },
          [p, f, k, g, r, o]
        );
        var P = {
          ref: O,
          onClick: function (e) {
            t.props &&
              "function" === typeof t.props.onClick &&
              t.props.onClick(e),
              e.defaultPrevented ||
                (function (e, t, r, n, o, a, i, l) {
                  ("A" !== e.currentTarget.nodeName ||
                    (!(function (e) {
                      var t = e.currentTarget.target;
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) &&
                      s.isLocalURL(r))) &&
                    (e.preventDefault(),
                    null == i && n.indexOf("#") >= 0 && (i = !1),
                    t[o ? "replace" : "push"](r, n, {
                      shallow: a,
                      locale: l,
                      scroll: i,
                    }));
                })(e, o, f, p, m, y, v, g);
          },
          onMouseEnter: function (e) {
            s.isLocalURL(f) &&
              (t.props &&
                "function" === typeof t.props.onMouseEnter &&
                t.props.onMouseEnter(e),
              u(o, f, p, { priority: !0 }));
          },
        };
        if (e.passHref || ("a" === t.type && !("href" in t.props))) {
          var I = "undefined" !== typeof g ? g : o && o.locale,
            N =
              o &&
              o.isLocaleDomain &&
              s.getDomainLocale(p, I, o && o.locales, o && o.domainLocales);
          P.href = N || s.addBasePath(s.addLocale(p, I, o && o.defaultLocale));
        }
        return a.default.cloneElement(t, P);
      };
      t.default = d;
    },
    7426: function (e, t, r) {
      "use strict";
      var n = r(3038);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useIntersection = function (e) {
          var t = e.rootMargin,
            r = e.disabled || !s,
            l = o.useRef(),
            c = o.useState(!1),
            u = n(c, 2),
            d = u[0],
            f = u[1],
            p = o.useCallback(
              function (e) {
                l.current && (l.current(), (l.current = void 0)),
                  r ||
                    d ||
                    (e &&
                      e.tagName &&
                      (l.current = (function (e, t, r) {
                        var n = (function (e) {
                            var t = e.rootMargin || "",
                              r = i.get(t);
                            if (r) return r;
                            var n = new Map(),
                              o = new IntersectionObserver(function (e) {
                                e.forEach(function (e) {
                                  var t = n.get(e.target),
                                    r =
                                      e.isIntersecting ||
                                      e.intersectionRatio > 0;
                                  t && r && t(r);
                                });
                              }, e);
                            return (
                              i.set(
                                t,
                                (r = { id: t, observer: o, elements: n })
                              ),
                              r
                            );
                          })(r),
                          o = n.id,
                          a = n.observer,
                          s = n.elements;
                        return (
                          s.set(e, t),
                          a.observe(e),
                          function () {
                            s.delete(e),
                              a.unobserve(e),
                              0 === s.size && (a.disconnect(), i.delete(o));
                          }
                        );
                      })(
                        e,
                        function (e) {
                          return e && f(e);
                        },
                        { rootMargin: t }
                      )));
              },
              [r, t, d]
            );
          return (
            o.useEffect(
              function () {
                if (!s && !d) {
                  var e = a.requestIdleCallback(function () {
                    return f(!0);
                  });
                  return function () {
                    return a.cancelIdleCallback(e);
                  };
                }
              },
              [d]
            ),
            [p, d]
          );
        });
      var o = r(7294),
        a = r(3447),
        s = "undefined" !== typeof IntersectionObserver;
      var i = new Map();
    },
    2063: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          Profile: function () {
            return p;
          },
        });
      var n = r(5861),
        o = r(7757),
        a = r.n(o),
        s = r(7294),
        i = r(7220),
        l = r(1664),
        c = r(2042),
        u = r(8607),
        d = r.n(u),
        f = r(5893),
        p = function () {
          var e = (0, s.useState)(""),
            t = e[0],
            r = e[1],
            o = (0, s.useState)(!1),
            u = o[0],
            p = o[1],
            h = (0, s.useState)(!1),
            m = h[0],
            y = h[1],
            v = (0, s.useState)(null),
            g = v[0],
            b = v[1],
            x = (function () {
              var e = (0, n.Z)(
                a().mark(function e() {
                  var r, n, o, s;
                  return a().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!t) {
                            e.next = 10;
                            break;
                          }
                          return (
                            y(!0),
                            (n = new Headers()).append("url", t),
                            (o = {
                              method: "GET",
                              headers: n,
                              redirect: "follow",
                            }),
                            (e.next = 7),
                            fetch("https://api.instavideosave.com/profile", o)
                              .then(function (e) {
                                return e.json();
                              })
                              .catch(function () {
                                return "link";
                              })
                          );
                        case 7:
                          "link" == (s = e.sent) ||
                          0 ==
                            (null === (r = s.image) || void 0 === r
                              ? void 0
                              : r.length)
                            ? (p(!0), y(!1), b("null"))
                            : (y(!1), b("null")),
                            b(s);
                        case 10:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (0, f.jsx)(i.Z, {
            customMeta: {
              title: "Instagram Profile Picture Downloader & Instadp Viewer",
              description:
                "Instavideosave.net is a free and fast tool which helps you to Download Instagram Profile Picture (DP) or to view Insta DP anonmously online.",
              type: "article",
              ad01: "8396840514",
            },
            children: (0, f.jsxs)("div", {
              className: "max-w-2xl m-auto",
              children: [
                (0, f.jsx)("h1", {
                  className: "font-bold text-xl mb-0 mt-2",
                  children: "Instagram DP Downloader",
                }),
                (0, f.jsx)("p", {
                  className: "opacity-80 text-sm",
                  children: "Download Instagram profile (dp) online for free",
                }),
                (0, f.jsxs)("div", {
                  className:
                    "text-gray-600 shadow-md rounded-lg border-[2px] border-blue-600 dark:bg-gray-200 flex mt-4",
                  children: [
                    (0, f.jsx)("input", {
                      onChange: function (e) {
                        e.preventDefault(), r(e.target.value);
                      },
                      type: "search",
                      name: "search",
                      placeholder: "Enter Username or Paste Link...  ",
                      className:
                        "bg-transparent w-full pl-3 h-14  rounded-full text-sm focus:outline-none text-black ",
                    }),
                    (0, f.jsxs)("button", {
                      type: "submit",
                      onClick: x,
                      className:
                        " mt-3 mr-3 bg-blue-600 w-[94px] flex justify-center h-8 items-center rounded text-white",
                      children: [
                        (0, f.jsx)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          className: "h-4 w-4 text-white",
                          viewBox: "0 0 20 20",
                          fill: "currentColor",
                          children: (0, f.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
                            clipRule: "evenodd",
                          }),
                        }),
                        (0, f.jsx)("span", {
                          className: "text-sm mr-1",
                          children: "Download",
                        }),
                      ],
                    }),
                  ],
                }),
                u
                  ? (0, f.jsx)("div", {
                      className: "text-red-500 text-center font-semibold mt-1",
                      children: "Please Enter Valid Username..",
                    })
                  : "",
                (0, f.jsx)("br", {}),
                m ? (0, f.jsx)(c.Z, {}) : "",
                void 0 != (null === g || void 0 === g ? void 0 : g.image)
                  ? (0, f.jsxs)("div", {
                      className: "flex justify-center m-5 flex-wrap",
                      children: [
                        (0, f.jsx)("img", {
                          src: "https://dl1.instavideosave.com/?url="
                            .concat(
                              encodeURIComponent(g.image),
                              "&type=",
                              "png",
                              "&title="
                            )
                            .concat(Math.floor(1e11 * Math.random())),
                          className: " rounded-lg",
                        }),
                        (0, f.jsx)(l.default, {
                          href: "".concat(g.image, "&dl=1"),
                          children: (0, f.jsxs)("button", {
                            className:
                              "mt-3 bg-blue-600 w-[160px] flex justify-center h-8 items-center rounded text-white",
                            children: [
                              (0, f.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-4 w-4 text-white",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: (0, f.jsx)("path", {
                                  fillRule: "evenodd",
                                  d: "M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
                                  clipRule: "evenodd",
                                }),
                              }),
                              (0, f.jsx)("span", {
                                className: "text-sm mr-1",
                                children: "Download Image",
                              }),
                            ],
                          }),
                        }),
                      ],
                    })
                  : "",
                (0, f.jsx)(d(), {
                  client: "ca-pub-9422500840090812",
                  slot: "6449045048",
                  style: { display: "block" },
                  format: "auto",
                  responsive: "true",
                }),
                (0, f.jsxs)("div", {
                  className: "prose font-poppins dark:prose-dark",
                  children: [
                    (0, f.jsx)("h2", {
                      children: "Download Instagram profile picture online",
                    }),
                    (0, f.jsx)("p", {
                      children:
                        "Instavideosave.net offers a free web-based tool which allows you to download Instagram profile picture or dp, it's a quick and easy way to get your Instagram dp or profile picture downloaded offline to your device.",
                    }),
                    (0, f.jsx)("p", {
                      children:
                        "Instagram is without a doubt one of the most popular social networking platforms with over 1 billion monthly active users. If you ever wanted to download instagram dp or instagram profile photo of yours and other instagram users, you can do it right from your mobile, tablet, iPhone or iPad, or any other device and it\u2019s a lot easier than you think.",
                    }),
                    (0, f.jsx)("h2", {
                      children: "How to download instagram profile photo(dp)?",
                    }),
                    (0, f.jsx)("p", {
                      children:
                        "Follow below steps to download your Instagram dp or profile photo to your mobile, tablet, pc or iOS:-",
                    }),
                    (0, f.jsxs)("ol", {
                      children: [
                        (0, f.jsx)("li", {
                          children: 'Open "Instavideosave.net".',
                        }),
                        (0, f.jsx)("li", {
                          children:
                            "Type Username or paste Profile link in input field.",
                        }),
                        (0, f.jsx)("li", {
                          children: 'Click "Download" button,',
                        }),
                        (0, f.jsx)("li", {
                          children:
                            "Done, your profile picture has been downloaded.",
                        }),
                      ],
                    }),
                    (0, f.jsx)("h2", {
                      children: "How to copy link to instagram profile?",
                    }),
                    (0, f.jsx)("p", {
                      children: "Steps to copy Instagram profile url:-",
                    }),
                    (0, f.jsxs)("ol", {
                      children: [
                        (0, f.jsx)("li", {
                          children: "Open user's Instagram profile.",
                        }),
                        (0, f.jsx)("li", {
                          children:
                            "Click on Three dots, located at top right corner.",
                        }),
                        (0, f.jsx)("li", {
                          children:
                            'Choose and click "copy profile URL" amoung other options.',
                        }),
                        (0, f.jsx)("li", {
                          children: "Done, link has been copied.",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        };
      t.default = p;
    },
    2697: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/profile",
        function () {
          return r(2063);
        },
      ]);
    },
    1664: function (e, t, r) {
      e.exports = r(2167);
    },
    1163: function (e, t, r) {
      e.exports = r(4651);
    },
    8607: function (e, t, r) {
      e.exports = (() => {
        var e = {
            184: (e, t, n) => {
              "use strict";
              n.r(t), n.d(t, { default: () => c });
              const o = r(7294);
              var a = n.n(o),
                s = n(697),
                i = n.n(s);
              function l(e) {
                var t = e.style,
                  r = e.format,
                  n = e.layoutKey,
                  s = e.client,
                  i = e.slot,
                  l = e.responsive,
                  c = e.layout,
                  u = e.className;
                (0, o.useEffect)(function () {
                  try {
                    (window.adsbygoogle = window.adsbygoogle || []).push({});
                  } catch (e) {
                    console.log(e);
                  }
                }, []);
                var d = { className: "adsbygoogle" };
                return (
                  "" !== t && (d.style = t),
                  "" !== r && (d["data-ad-format"] = r),
                  "" !== n && (d["data-ad-layout-key"] = n),
                  "" !== c && (d["data-ad-layout"] = c),
                  "" !== s && (d["data-ad-client"] = s),
                  "" !== i && (d["data-ad-slot"] = i),
                  "" != l && (d["data-full-width-responsive"] = l),
                  "" != u && d.className,
                  a().createElement("ins", d)
                );
              }
              (l.propTypes = {
                className: i().string,
                style: i().object,
                client: i().string.isRequired,
                slot: i().string.isRequired,
                layout: i().string,
                layoutKey: i().string,
                format: i().string,
                responsive: i().string,
              }),
                (l.defaultProps = {
                  className: "",
                  style: { display: "block" },
                  format: "auto",
                  layout: "",
                  layoutKey: "",
                  responsive: "false",
                });
              const c = l;
            },
            703: (e, t, r) => {
              "use strict";
              var n = r(414);
              function o() {}
              function a() {}
              (a.resetWarningCache = o),
                (e.exports = function () {
                  function e(e, t, r, o, a, s) {
                    if (s !== n) {
                      var i = new Error(
                        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                      );
                      throw ((i.name = "Invariant Violation"), i);
                    }
                  }
                  function t() {
                    return e;
                  }
                  e.isRequired = e;
                  var r = {
                    array: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: a,
                    resetWarningCache: o,
                  };
                  return (r.PropTypes = r), r;
                });
            },
            697: (e, t, r) => {
              e.exports = r(703)();
            },
            414: (e) => {
              "use strict";
              e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
            },
          },
          t = {};
        function n(r) {
          if (t[r]) return t[r].exports;
          var o = (t[r] = { exports: {} });
          return e[r](o, o.exports, n), o.exports;
        }
        return (
          (n.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return n.d(t, { a: t }), t;
          }),
          (n.d = (e, t) => {
            for (var r in t)
              n.o(t, r) &&
                !n.o(e, r) &&
                Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
          }),
          (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
          (n.r = (e) => {
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(e, "__esModule", { value: !0 });
          }),
          n(184)
        );
      })();
    },
    5861: function (e, t, r) {
      "use strict";
      function n(e, t, r, n, o, a, s) {
        try {
          var i = e[a](s),
            l = i.value;
        } catch (c) {
          return void r(c);
        }
        i.done ? t(l) : Promise.resolve(l).then(n, o);
      }
      function o(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (o, a) {
            var s = e.apply(t, r);
            function i(e) {
              n(s, o, a, i, l, "next", e);
            }
            function l(e) {
              n(s, o, a, i, l, "throw", e);
            }
            i(void 0);
          });
        };
      }
      r.d(t, {
        Z: function () {
          return o;
        },
      });
    },
    8152: function (e, t, r) {
      "use strict";
      function n(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function o(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var n,
                o,
                a = [],
                s = !0,
                i = !1;
              try {
                for (
                  r = r.call(e);
                  !(s = (n = r.next()).done) &&
                  (a.push(n.value), !t || a.length !== t);
                  s = !0
                );
              } catch (l) {
                (i = !0), (o = l);
              } finally {
                try {
                  s || null == r.return || r.return();
                } finally {
                  if (i) throw o;
                }
              }
              return a;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" === typeof e) return n(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === r && e.constructor && (r = e.constructor.name),
                "Map" === r || "Set" === r
                  ? Array.from(e)
                  : "Arguments" === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  ? n(e, t)
                  : void 0
              );
            }
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      r.d(t, {
        Z: function () {
          return o;
        },
      });
    },
  },
  function (e) {
    e.O(0, [220, 774, 888, 179], function () {
      return (t = 2697), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
