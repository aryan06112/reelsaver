(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [185], {
       8561: function (e, t, n) {
          "use strict";
          var o = n(5893);
          t.Z = function () {
             return (0, o.jsxs)(o.Fragment, {
                children: [(0, o.jsx)("style", {
                   children: "._it4vx {\n    margin:0 2px 0 2px;            \n\theight: 6px;\n\tbackground: #27c4f5 -webkit-gradient(linear, left top, right top, from(#27c4f5), color-stop(#a307ba), color-stop(#fd8d32), color-stop(#70c050), to(#27c4f5));\n\tbackground: #27c4f5 -webkit-linear-gradient(left, #27c4f5, #a307ba, #fd8d32, #70c050, #27c4f5);\n\tbackground: #27c4f5 linear-gradient(to right, #27c4f5, #a307ba, #fd8d32, #70c050, #27c4f5);\n\tbackground-size: 500%;\n\t-webkit-animation: 2s linear infinite LoadingBarProgress, 15s ease-out LoadingBarEnter;\n\tanimation: 2s linear infinite LoadingBarProgress, 15s ease-out LoadingBarEnter;\n\t-webkit-transform-origin: left;\n\ttransform-origin: left;\n\twidth: 100%\n}\n._72fik {\n\tleft: 0;\n\tposition: absolute;\n\tright: 0;\n\ttop: 0;\n\tz-index: 12;\n}\n@keyframes LoadingBarProgress {\n\t0% {\n\t\tbackground-position: 0% 0\n\t}\n\tto {\n\t\tbackground-position: 125% 0\n\t}\n}\n@keyframes LoadingBarEnter {\n\t0% {\n\t\t-webkit-transform: scaleX(0);\n\t\ttransform: scaleX(0)\n\t}\n\tto {\n\t\t-webkit-transform: scaleX(1);\n\t\ttransform: scaleX(1)\n\t}\n}"
                }), (0, o.jsxs)("div", {
                   className: "w-full h-3 mb-6 relative",
                   children: [(0, o.jsx)("span", {
                      className: "_it4vx _72fik"
                   }), (0, o.jsx)("div", {
                      className: "text-center pt-2 font-medium",
                      children: "Loading..."
                   })]
                })]
             })
          }
       },
       2167: function (e, t, n) {
          "use strict";
          var o = n(3038);
          t.default = void 0;
          var r, a = (r = n(7294)) && r.__esModule ? r : {
                default: r
             },
             i = n(1063),
             s = n(4651),
             l = n(7426);
          var c = {};
 
          function d(e, t, n, o) {
             if (e && i.isLocalURL(t)) {
                e.prefetch(t, n, o).catch((function (e) {
                   0
                }));
                var r = o && "undefined" !== typeof o.locale ? o.locale : e && e.locale;
                c[t + "%" + n + (r ? "%" + r : "")] = !0
             }
          }
          var u = function (e) {
             var t, n = !1 !== e.prefetch,
                r = s.useRouter(),
                u = a.default.useMemo((function () {
                   var t = i.resolveHref(r, e.href, !0),
                      n = o(t, 2),
                      a = n[0],
                      s = n[1];
                   return {
                      href: a,
                      as: e.as ? i.resolveHref(r, e.as) : s || a
                   }
                }), [r, e.href, e.as]),
                f = u.href,
                p = u.as,
                v = e.children,
                h = e.replace,
                m = e.shallow,
                y = e.scroll,
                g = e.locale;
             "string" === typeof v && (v = a.default.createElement("a", null, v));
             var x = (t = a.default.Children.only(v)) && "object" === typeof t && t.ref,
                b = l.useIntersection({
                   rootMargin: "200px"
                }),
                w = o(b, 2),
                j = w[0],
                k = w[1],
                I = a.default.useCallback((function (e) {
                   j(e), x && ("function" === typeof x ? x(e) : "object" === typeof x && (x.current = e))
                }), [x, j]);
             a.default.useEffect((function () {
                var e = k && n && i.isLocalURL(f),
                   t = "undefined" !== typeof g ? g : r && r.locale,
                   o = c[f + "%" + p + (t ? "%" + t : "")];
                e && !o && d(r, f, p, {
                   locale: t
                })
             }), [p, f, k, g, n, r]);
             var _ = {
                ref: I,
                onClick: function (e) {
                   t.props && "function" === typeof t.props.onClick && t.props.onClick(e), e.defaultPrevented || function (e, t, n, o, r, a, s, l) {
                      ("A" !== e.currentTarget.nodeName || ! function (e) {
                         var t = e.currentTarget.target;
                         return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                      }(e) && i.isLocalURL(n)) && (e.preventDefault(), null == s && o.indexOf("#") >= 0 && (s = !1), t[r ? "replace" : "push"](n, o, {
                         shallow: a,
                         locale: l,
                         scroll: s
                      }))
                   }(e, r, f, p, h, m, y, g)
                },
                onMouseEnter: function (e) {
                   i.isLocalURL(f) && (t.props && "function" === typeof t.props.onMouseEnter && t.props.onMouseEnter(e), d(r, f, p, {
                      priority: !0
                   }))
                }
             };
             if (e.passHref || "a" === t.type && !("href" in t.props)) {
                var N = "undefined" !== typeof g ? g : r && r.locale,
                   R = r && r.isLocaleDomain && i.getDomainLocale(p, N, r && r.locales, r && r.domainLocales);
                _.href = R || i.addBasePath(i.addLocale(p, N, r && r.defaultLocale))
             }
             return a.default.cloneElement(t, _)
          };
          t.default = u
       },
       7426: function (e, t, n) {
          "use strict";
          var o = n(3038);
          Object.defineProperty(t, "__esModule", {
             value: !0
          }), t.useIntersection = function (e) {
             var t = e.rootMargin,
                n = e.disabled || !i,
                l = r.useRef(),
                c = r.useState(!1),
                d = o(c, 2),
                u = d[0],
                f = d[1],
                p = r.useCallback((function (e) {
                   l.current && (l.current(), l.current = void 0), n || u || e && e.tagName && (l.current = function (e, t, n) {
                      var o = function (e) {
                            var t = e.rootMargin || "",
                               n = s.get(t);
                            if (n) return n;
                            var o = new Map,
                               r = new IntersectionObserver((function (e) {
                                  e.forEach((function (e) {
                                     var t = o.get(e.target),
                                        n = e.isIntersecting || e.intersectionRatio > 0;
                                     t && n && t(n)
                                  }))
                               }), e);
                            return s.set(t, n = {
                               id: t,
                               observer: r,
                               elements: o
                            }), n
                         }(n),
                         r = o.id,
                         a = o.observer,
                         i = o.elements;
                      return i.set(e, t), a.observe(e),
                         function () {
                            i.delete(e), a.unobserve(e), 0 === i.size && (a.disconnect(), s.delete(r))
                         }
                   }(e, (function (e) {
                      return e && f(e)
                   }), {
                      rootMargin: t
                   }))
                }), [n, t, u]);
             return r.useEffect((function () {
                if (!i && !u) {
                   var e = a.requestIdleCallback((function () {
                      return f(!0)
                   }));
                   return function () {
                      return a.cancelIdleCallback(e)
                   }
                }
             }), [u]), [p, u]
          };
          var r = n(7294),
             a = n(3447),
             i = "undefined" !== typeof IntersectionObserver;
          var s = new Map
       },
       2522: function (e, t, n) {
          "use strict";
          n.r(t), n.d(t, {
             Audio: function () {
                return p
             }
          });
          var o = n(5861),
             r = n(7757),
             a = n.n(r),
             i = n(7294),
             s = n(7220),
             l = n(1664),
             c = n(8607),
             d = n.n(c),
             u = n(8561),
             f = n(5893),
             p = function () {
                var e, t = (0, i.useState)(""),
                   n = t[0],
                   r = t[1],
                   c = (0, i.useState)(!1),
                   p = c[0],
                   v = c[1],
                   h = (0, i.useState)(!1),
                   m = h[0],
                   y = h[1],
                   g = (0, i.useState)(void 0),
                   x = g[0],
                   b = g[1],
                   w = function () {
                      var e = (0, o.Z)(a().mark((function e() {
                         var t, o, r, i, s;
                         return a().wrap((function (e) {
                            for (;;) switch (e.prev = e.next) {
                               case 0:
                                  if (!n) {
                                     e.next = 14;
                                     break
                                  }
                                  return y(!0), v(!1), (o = new Headers).append("url", n), r = {
                                     method: "GET",
                                     headers: o,
                                     redirect: "follow"
                                  }, i = "https://api.instavideosave.com/allinone", n.includes("/audio/") && (i = "https://audioinsta.glitch.me/allinone"), e.next = 10, fetch(i, r).then((function (e) {
                                     return e.json()
                                  })).catch((function () {
                                     return "link"
                                  }));
                               case 10:
                                  "link" == (s = e.sent) || 0 == (null === (t = s.image) || void 0 === t ? void 0 : t.length) ? (v(!0), b("null")) : (y(!1), b("null"), v(!1), window.scrollTo({
                                     top: document.getElementById("resultAD").offsetTop - 60,
                                     behavior: "smooth"
                                  })), b(s), y(!1);
                               case 14:
                               case "end":
                                  return e.stop()
                            }
                         }), e)
                      })));
                      return function () {
                         return e.apply(this, arguments)
                      }
                   }();
                return (0, f.jsx)(s.Z, {
                   customMeta: {
                      title: "Instagram Audio Downloader - Convert Videos & Reels To Mp3",
                      description: "Instavideosave.net is a free and fast tool which helps you to Convert & Download Instagram Reels, IGTV, videos to Audio MP3 Format Online.",
                      type: "article",
                      ad01: "3874316549"
                   },
                   children: (0, f.jsxs)("div", {
                      className: "max-w-2xl m-auto",
                      children: [(0, f.jsx)("h1", {
                         className: "font-bold text-xl mb-0 mt-2",
                         children: "Instagram to Mp3 Converter"
                      }), (0, f.jsx)("p", {
                         className: "opacity-80 text-sm",
                         children: "Convert and Download Instagram Videos & Reels to Audio mp3 online"
                      }), (0, f.jsxs)("div", {
                         className: "text-gray-600 border-[2px] border-blue-500 shadow-md rounded-lg  dark:bg-gray-200 flex mt-4",
                         children: [(0, f.jsx)("input", {
                            onChange: function (e) {
                               e.preventDefault(), r(e.target.value)
                            },
                            type: "search",
                            name: "search",
                            placeholder: "Paste Video/Reel Link here...",
                            className: "bg-transparent w-full pl-3 h-14 rounded-full text-sm focus:outline-none text-black "
                         }), (0, f.jsxs)("button", {
                            type: "submit",
                            onClick: w,
                            className: " mt-2 mr-3 p-1 bg-blue-600 w-[96px] flex justify-center h-10 items-center rounded text-white",
                            children: [(0, f.jsx)("svg", {
                               xmlns: "http://www.w3.org/2000/svg",
                               className: "h-4 w-4 text-white",
                               viewBox: "0 0 20 20",
                               fill: "currentColor",
                               children: (0, f.jsx)("path", {
                                  fillRule: "evenodd",
                                  d: "M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
                                  clipRule: "evenodd"
                               })
                            }), (0, f.jsx)("span", {
                               className: "text-m mr-1",
                               children: " Search "
                            })]
                         })]
                      }), p ? (0, f.jsx)("div", {
                         className: "text-red-500 text-center font-semibold mt-1",
                         children: "Invalid Link; Refresh Page and Try Again."
                      }) : "", (0, f.jsx)("br", {}), 1 == m ? (0, f.jsx)(u.Z, {}) : "", x ? (0, f.jsx)("div", {
                         id: "resultAD",
                         children: (0, f.jsx)(d(), {
                            client: "ca-pub-9422500840090812",
                            slot: "6449045048",
                            style: {
                               display: "block"
                            },
                            format: "auto",
                            responsive: "true"
                         })
                      }) : "", void 0 != x ? null === (e = x.video) || void 0 === e ? void 0 : e.map((function (e, t) {
                         return (0, f.jsxs)("div", {
                            className: "flex flex-wrap justify-center mb-4 mt-3",
                            children: [(0, f.jsx)("audio", {
                               controlsList: "nodownload",
                               controls: !0,
                               preload: "none",
                               children: (0, f.jsx)("source", {
                                  src: "https://dl1.instavideosave.com/?url=".concat(encodeURIComponent(e.video), '&dlheader="audio/mp3"&type="mp3"&title="audio_37h75g"')
                               })
                            }, e), (0, f.jsx)(l.default, {
                               href: "https://mp3.instavideosave.com/api?url=".concat(encodeURIComponent(e.video)),
                               children: (0, f.jsxs)("button", {
                                  className: "mt-3 bg-blue-600 w-[160px] flex justify-center h-8 items-center rounded text-white",
                                  children: [(0, f.jsx)("svg", {
                                     xmlns: "http://www.w3.org/2000/svg",
                                     className: "h-4 w-4 text-white",
                                     viewBox: "0 0 20 20",
                                     fill: "currentColor",
                                     children: (0, f.jsx)("path", {
                                        fillRule: "evenodd",
                                        d: "M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
                                        clipRule: "evenodd"
                                     })
                                  }), (0, f.jsx)("span", {
                                     className: "text-md mr-1",
                                     children: "Download Audio"
                                  })]
                               })
                            })]
                         }, t)
                      })) : "", (0, f.jsx)(d(), {
                         client: "ca-pub-9422500840090812",
                         slot: "9383408146",
                         style: {
                            display: "block"
                         },
                         format: "auto",
                         responsive: "true"
                      }), (0, f.jsxs)("div", {
                         className: "prose font-poppins dark:prose-dark",
                         children: [(0, f.jsx)("h2", {
                            children: "Download Instagram Reels, Igtv, videos to Mp3 Audio"
                         }), (0, f.jsx)("p", {
                            children: "Instavideosave.net offers a free instagram to mp3 converter tool which allows you to extract and download Mp3 Audio from Instagram Reels, Igtv, videos. it's a quick and easy way to convert and download instagram videos to Mp3 Audio online."
                         }), (0, f.jsx)("p", {
                            children: "Instagram is without a doubt one of the most popular social networking platforms with over 1 billion monthly active users. If you ever wanted to convert Instagram reels, igtv, video to mp3 audio and download previous instagram videos as audio only that you\u2019ve shared with Instagram over the years, you can do it right from your mobile, tablet, iPhone or iPad, or any other device and it\u2019s a lot easier than you think."
                         }), (0, f.jsx)("h2", {
                            children: "How to convert Instagram videos and reels to audio mp3?"
                         }), (0, f.jsx)("p", {
                            children: "In order to download instagram reels, igtv, video to audio mp3, first copy the link to the video and then paste it into the input form on instavideosave.net/audio/. Then after, click download button to convert and download instagram videos, igtv, reels to mp3 audio only."
                         }), (0, f.jsx)("h2", {
                            children: "Instagram reels audio download"
                         }), (0, f.jsx)("p", {
                            children: "instagram reels is one of the most popular shorts video creating plateform, thousand of users post reels on instagram from which most of users want to use a particular audio in their videos. Using instagram video to audio downloader, you can convert reels to mp3 and download audio from a reel video by link."
                         }), (0, f.jsx)("h3", {
                            children: "How to download Instagram reels Audio only?"
                         }), (0, f.jsxs)("ol", {
                            children: [(0, f.jsx)("li", {
                               children: "Copy link to the Reels video."
                            }), (0, f.jsx)("li", {
                               children: 'Open "Instavideosave.net/audio/".'
                            }), (0, f.jsx)("li", {
                               children: 'Paste Link into Input box and click "Download".'
                            }), (0, f.jsx)("li", {
                               children: "Reels video will be converted to Audio mp3."
                            }), (0, f.jsx)("li", {
                               children: "Download Reels audio only."
                            })]
                         })]
                      })]
                   })
                })
             };
          t.default = p
       },
       5558: function (e, t, n) {
          (window.__NEXT_P = window.__NEXT_P || []).push(["/audio", function () {
             return n(2522)
          }])
       },
       1664: function (e, t, n) {
          e.exports = n(2167)
       },
       1163: function (e, t, n) {
          e.exports = n(4651)
       },
       8607: function (e, t, n) {
          e.exports = (() => {
             var e = {
                   184: (e, t, o) => {
                      "use strict";
                      o.r(t), o.d(t, {
                         default: () => c
                      });
                      const r = n(7294);
                      var a = o.n(r),
                         i = o(697),
                         s = o.n(i);
 
                      function l(e) {
                         var t = e.style,
                            n = e.format,
                            o = e.layoutKey,
                            i = e.client,
                            s = e.slot,
                            l = e.responsive,
                            c = e.layout,
                            d = e.className;
                         (0, r.useEffect)((function () {
                            try {
                               (window.adsbygoogle = window.adsbygoogle || []).push({})
                            } catch (e) {
                               console.log(e)
                            }
                         }), []);
                         var u = {
                            className: "adsbygoogle"
                         };
                         return "" !== t && (u.style = t), "" !== n && (u["data-ad-format"] = n), "" !== o && (u["data-ad-layout-key"] = o), "" !== c && (u["data-ad-layout"] = c), "" !== i && (u["data-ad-client"] = i), "" !== s && (u["data-ad-slot"] = s), "" != l && (u["data-full-width-responsive"] = l), "" != d && u.className, a().createElement("ins", u)
                      }
                      l.propTypes = {
                         className: s().string,
                         style: s().object,
                         client: s().string.isRequired,
                         slot: s().string.isRequired,
                         layout: s().string,
                         layoutKey: s().string,
                         format: s().string,
                         responsive: s().string
                      }, l.defaultProps = {
                         className: "",
                         style: {
                            display: "block"
                         },
                         format: "auto",
                         layout: "",
                         layoutKey: "",
                         responsive: "false"
                      };
                      const c = l
                   },
                   703: (e, t, n) => {
                      "use strict";
                      var o = n(414);
 
                      function r() {}
 
                      function a() {}
                      a.resetWarningCache = r, e.exports = function () {
                         function e(e, t, n, r, a, i) {
                            if (i !== o) {
                               var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                               throw s.name = "Invariant Violation", s
                            }
                         }
 
                         function t() {
                            return e
                         }
                         e.isRequired = e;
                         var n = {
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
                            resetWarningCache: r
                         };
                         return n.PropTypes = n, n
                      }
                   },
                   697: (e, t, n) => {
                      e.exports = n(703)()
                   },
                   414: e => {
                      "use strict";
                      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
                   }
                },
                t = {};
 
             function o(n) {
                if (t[n]) return t[n].exports;
                var r = t[n] = {
                   exports: {}
                };
                return e[n](r, r.exports, o), r.exports
             }
             return o.n = e => {
                var t = e && e.__esModule ? () => e.default : () => e;
                return o.d(t, {
                   a: t
                }), t
             }, o.d = (e, t) => {
                for (var n in t) o.o(t, n) && !o.o(e, n) && Object.defineProperty(e, n, {
                   enumerable: !0,
                   get: t[n]
                })
             }, o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), o.r = e => {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                   value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                   value: !0
                })
             }, o(184)
          })()
       },
       5861: function (e, t, n) {
          "use strict";
 
          function o(e, t, n, o, r, a, i) {
             try {
                var s = e[a](i),
                   l = s.value
             } catch (c) {
                return void n(c)
             }
             s.done ? t(l) : Promise.resolve(l).then(o, r)
          }
 
          function r(e) {
             return function () {
                var t = this,
                   n = arguments;
                return new Promise((function (r, a) {
                   var i = e.apply(t, n);
 
                   function s(e) {
                      o(i, r, a, s, l, "next", e)
                   }
 
                   function l(e) {
                      o(i, r, a, s, l, "throw", e)
                   }
                   s(void 0)
                }))
             }
          }
          n.d(t, {
             Z: function () {
                return r
             }
          })
       },
       8152: function (e, t, n) {
          "use strict";
 
          function o(e, t) {
             (null == t || t > e.length) && (t = e.length);
             for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
             return o
          }
 
          function r(e, t) {
             return function (e) {
                if (Array.isArray(e)) return e
             }(e) || function (e, t) {
                var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                   var o, r, a = [],
                      i = !0,
                      s = !1;
                   try {
                      for (n = n.call(e); !(i = (o = n.next()).done) && (a.push(o.value), !t || a.length !== t); i = !0);
                   } catch (l) {
                      s = !0, r = l
                   } finally {
                      try {
                         i || null == n.return || n.return()
                      } finally {
                         if (s) throw r
                      }
                   }
                   return a
                }
             }(e, t) || function (e, t) {
                if (e) {
                   if ("string" === typeof e) return o(e, t);
                   var n = Object.prototype.toString.call(e).slice(8, -1);
                   return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0
                }
             }(e, t) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
             }()
          }
          n.d(t, {
             Z: function () {
                return r
             }
          })
       }
    },
    function (e) {
       e.O(0, [220, 774, 888, 179], (function () {
          return t = 5558, e(e.s = t);
          var t
       }));
       var t = e.O();
       _N_E = t
    }
 ]);