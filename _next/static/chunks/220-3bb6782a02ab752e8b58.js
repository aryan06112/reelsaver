"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
   [220], {
      7220: function (e, t, n) {
         n.d(t, {
            Z: function () {
               return w
            }
         });
         var r = n(7294),
            s = n(4942),
            o = n(9008),
            a = n(1163),
            l = n(5893);

         function i(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
               var r = Object.getOwnPropertySymbols(e);
               t && (r = r.filter((function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable
               }))), n.push.apply(n, r)
            }
            return n
         }
         var c = "https://instavideosave.net",
            x = function (e) {
               var t = e.customMeta,
                  n = (0, a.useRouter)(),
                  r = function (e) {
                     for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? i(Object(n), !0).forEach((function (t) {
                           (0, s.Z)(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function (t) {
                           Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                     }
                     return e
                  }({
                     image: "".concat(c, "/images/site-preview.png"),
                     type: "website"
                  }, t);
               return (0, l.jsxs)(o.default, {
                  children: [(0, l.jsx)("title", {
                     children: r.title
                  }), (0, l.jsx)("meta", {
                     content: r.description,
                     name: "description"
                  }), (0, l.jsx)("meta", {
                     property: "og:url",
                     content: "".concat(c).concat(n.asPath)
                  }), (0, l.jsx)("link", {
                     rel: "canonical",
                     href: "".concat(c).concat(n.asPath)
                  }), (0, l.jsx)("meta", {
                     property: "og:type",
                     content: r.type
                  }), (0, l.jsx)("meta", {
                     property: "og:site_name",
                     content: "instavideosave.net"
                  }), (0, l.jsx)("meta", {
                     property: "og:description",
                     content: r.description
                  }), (0, l.jsx)("meta", {
                     property: "og:title",
                     content: r.title
                  }), (0, l.jsx)("meta", {
                     name: "theme-color",
                     content: "#2563eb"
                  }), (0, l.jsx)("script", {
                     async: !0,
                     src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9422500840090812"
                  })]
               })
            },
            d = n(1664),
            h = function () {
               return (0, l.jsx)("header", {
                  children: (0, l.jsx)(d.default, {
                     href: "/",
                     children: (0, l.jsxs)("a", {
                        className: "text-gray-900 dark:text-white pr-6 py-4 pl-2 font-bold",
                        children: [" ", "InstaVideoSave", (0, l.jsx)("span", {
                           className: "text-blue-500 font-bold",
                           children: ".Net"
                        })]
                     })
                  })
               })
            },
            p = n(8152),
            u = n(425),
            m = function () {
               var e = r.useState(!1),
                  t = (0, p.Z)(e, 2),
                  n = t[0],
                  s = t[1],
                  o = (0, u.F)(),
                  a = o.theme,
                  i = o.setTheme;
               if (r.useEffect((function () {
                     return s(!0)
                  }), []), !n) return null;
               var c = "dark" === a,
                  x = c ? "#fff" : "#000",
                  d = c ? "#000" : "#fff";
               return (0, l.jsxs)("button", {
                  className: "theme-button",
                  type: "button",
                  "aria-label": "Toggle Dark Mode",
                  onClick: function () {
                     return i("dark" === a ? "light" : "dark")
                  },
                  children: [(0, l.jsx)("div", {
                     className: "moon-or-sun"
                  }), (0, l.jsx)("div", {
                     className: "moon-mask"
                  }), (0, l.jsx)("style", {
                     children: "\n        .theme-button {\n          opacity: 0.5;\n          position: relative;\n          border-radius: 5px;\n          width: 42px;\n          height: 42px;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          transition: opacity 0.3s ease;\n        }\n        .theme-button:hover {\n          opacity: 1;\n        }\n        .moon-or-sun {\n          position: relative;\n          width: 20px;\n          height: 20px;\n          border-radius: 50%;\n          border: ".concat(c ? "4px" : "2px", " solid;\n          border-color: ").concat(x, ";\n          background: ").concat(x, ";\n          transform: scale(").concat(c ? .5 : 1, ");\n          transition: all 0.45s ease;\n          overflow: ").concat(c ? "visible" : "hidden", ";\n        }\n        .moon-or-sun::before {\n          content: '';\n          position: absolute;\n          right: -9px;\n          top: -9px;\n          height: 20px;\n          width: 20px;\n          border: 2px solid;\n          border-color: ").concat(x, ";\n          border-radius: 50%;\n          transform: translate(").concat(c ? "14px, -14px" : "0, 0", ");\n          opacity: ").concat(c ? 0 : 1, ";\n          transition: transform 0.45s ease;\n        }\n        .moon-or-sun::after {\n          content: '';\n          width: 8px;\n          height: 8px;\n          border-radius: 50%;\n          margin: -4px 0 0 -4px;\n          position: absolute;\n          top: 50%;\n          left: 50%;\n          box-shadow: 0 -23px 0 ").concat(x, ", 0 23px 0 ").concat(x, ", 23px 0 0 ").concat(x, ",\n            -23px 0 0 ").concat(x, ", 15px 15px 0 ").concat(x, ", -15px 15px 0 ").concat(x, ",\n            15px -15px 0 ").concat(x, ", -15px -15px 0 ").concat(x, ";\n          transform: scale(").concat(c ? 1 : 0, ");\n          transition: all 0.35s ease;\n        }\n        .moon-mask {\n          position: absolute;\n          right: 4px;\n          top: 4px;\n          height: 20px;\n          width: 20px;\n          border-radius: 50%;\n          border: 0;\n          background: ").concat(d, ";\n          transform: translate(").concat(c ? "4px, -4px" : "0, 0", ");\n          opacity: ").concat(c ? 0 : 1, ";\n          transition: transform 0.45s ease;\n        }\n      ")
                  })]
               })
            },
            b = function () {
               var e = (0, a.useRouter)();
               return (0, l.jsxs)("nav", {
                  children: [(0, l.jsx)("hr", {}), (0, l.jsxs)("ul", {
                     className: "pt-2 flex justify-center md:justify-center md:space-x-5 lg:space-x-8 space-x-2 font-bold lg:overflow-auto",
                     children: [(0, l.jsx)("li", {
                        className: "text-center text-sm",
                        children: (0, l.jsx)(d.default, {
                           href: "/",
                           children: (0, l.jsxs)("a", {
                              className: "pb-1 ".concat("/" == e.pathname ? " hover:text-blue-400 text-blue-500 dark:hover:text-blue-300 border-b-2 border-blue-600" : " hover:text-blue-400  dark:hover:text-blue-300"),
                              children: [(0, l.jsx)("svg", {
                                 xmlns: "http://www.w3.org/2000/svg",
                                 className: "h-5 w-5 m-auto",
                                 fill: "none",
                                 viewBox: "0 0 24 24",
                                 stroke: "currentColor",
                                 children: (0, l.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                                 })
                              }), (0, l.jsx)("span", {
                                 children: "Reels"
                              })]
                           })
                        })
                     }), (0, l.jsx)("li", {
                        className: "text-center text-sm",
                        children: (0, l.jsx)(d.default, {
                           href: "/profile",
                           children: (0, l.jsxs)("a", {
                              className: "pb-1 ".concat("/profile" == e.pathname ? " hover:text-blue-400 text-blue-500 dark:hover:text-blue-300 border-b-2 border-blue-600" : " hover:text-blue-400  dark:hover:text-blue-300"),
                              children: [(0, l.jsx)("svg", {
                                 xmlns: "http://www.w3.org/2000/svg",
                                 className: "h-5 w-5 m-auto",
                                 fill: "none",
                                 viewBox: "0 0 24 24",
                                 stroke: "currentColor",
                                 children: (0, l.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 5.879 1.804M15 10a3 3 0 11-5 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                 })
                              }), (0, l.jsx)("span", {
                                 children: "Profile"
                              })]
                           })
                        })
                     }), (0, l.jsx)("li", {
                        className: "text-center text-sm",
                        children: (0, l.jsx)(d.default, {
                           href: "/stories",
                           children: (0, l.jsxs)("a", {
                              className: "pb-1 ".concat("/stories" == e.pathname ? " hover:text-blue-400 text-blue-500 dark:hover:text-blue-300 border-b-2 border-blue-600" : " hover:text-blue-400  dark:hover:text-blue-300"),
                              children: [(0, l.jsxs)("svg", {
                                 xmlns: "http://www.w3.org/2000/svg",
                                 className: "h-5 w-5 m-auto",
                                 fill: "none",
                                 viewBox: "0 0 24 24",
                                 stroke: "currentColor",
                                 children: [(0, l.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                 }), (0, l.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                 })]
                              }), (0, l.jsx)("span", {
                                 children: "Stories"
                              })]
                           })
                        })
                     }), (0, l.jsx)("li", {
                        className: "text-center text-sm",
                        children: (0, l.jsx)(d.default, {
                           href: "/audio",
                           children: (0, l.jsxs)("a", {
                              className: "pb-1 ".concat("/audio" == e.pathname ? " hover:text-blue-400 text-blue-500 dark:hover:text-blue-300 border-b-2 border-blue-600" : " hover:text-blue-400  dark:hover:text-blue-300"),
                              children: [(0, l.jsx)("svg", {
                                 xmlns: "http://www.w3.org/2000/svg",
                                 className: "h-5 w-5  m-auto",
                                 fill: "none",
                                 viewBox: "0 0 24 24",
                                 stroke: "currentColor",
                                 children: (0, l.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                                 })
                              }), (0, l.jsx)("span", {
                                 children: "Audio"
                              })]
                           })
                        })
                     }), (0, l.jsx)("li", {
                        className: "text-center text-sm",
                        children: (0, l.jsx)(d.default, {
                           href: "/photo",
                           children: (0, l.jsxs)("a", {
                              className: "pb-1 ".concat("/photo" == e.pathname ? " hover:text-blue-400 text-blue-500 dark:hover:text-blue-300 border-b-2 border-blue-600" : " hover:text-blue-400  dark:hover:text-blue-300"),
                              children: [(0, l.jsx)("svg", {
                                 xmlns: "http://www.w3.org/2000/svg",
                                 className: "h-5 w-5 m-auto",
                                 fill: "none",
                                 viewBox: "0 0 24 24",
                                 stroke: "currentColor",
                                 children: (0, l.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-5-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                 })
                              }), (0, l.jsx)("span", {
                                 children: "Photo"
                              })]
                           })
                        })
                     }), (0, l.jsx)("li", {
                        className: "text-center text-sm",
                        children: (0, l.jsx)(d.default, {
                           href: "/video",
                           children: (0, l.jsxs)("a", {
                              className: "pb-1 ".concat("/video" == e.pathname ? " hover:text-blue-400 text-blue-500 dark:hover:text-blue-300 border-b-2 border-blue-600" : " hover:text-blue-400  dark:hover:text-blue-300"),
                              children: [(0, l.jsx)("svg", {
                                 xmlns: "http://www.w3.org/2000/svg",
                                 className: "h-5 w-5 m-auto",
                                 fill: "none",
                                 viewBox: "0 0 24 24",
                                 stroke: "currentColor",
                                 children: (0, l.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                                 })
                              }), (0, l.jsx)("span", {
                                 children: "Video"
                              })]
                           })
                        })
                     }), (0, l.jsx)("li", {
                        className: "text-center text-sm",
                        children: (0, l.jsx)(d.default, {
                           href: "/facebook",
                           children: (0, l.jsxs)("a", {
                              className: "pb-1 ".concat("/facebook" == e.pathname ? " hover:text-blue-400 text-blue-500 dark:hover:text-blue-300 border-b-2 border-blue-600" : " hover:text-blue-400  dark:hover:text-blue-300"),
                              children: [(0, l.jsx)("svg", {
                                 xmlns: "http://www.w3.org/2000/svg",
                                 className: "h-5 w-5 m-auto",
                                 fill: "none",
                                 viewBox: "0 0 24 24",
                                 stroke: "currentColor",
                                 children: (0, l.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                 })
                              }), (0, l.jsx)("span", {
                                 className: "m-auto",
                                 children: "fb video"
                              })]
                           })
                        })
                     })]
                  })]
               })
            },
            j = function () {
               return (0, l.jsxs)("div", {
                  className: "max-w-2xl m-auto",
                  children: [(0, l.jsx)("div", {
                     className: "bg-blue-500 font-poppins text-white rounded-lg p-2 m-3",
                     children: (0, l.jsxs)("p", {
                        children: [(0, l.jsx)("b", {
                           children: "Instavideosave.com/.net"
                        }), " is not affiliated with Instagram\u2122 and not we host any of media on our servers all the media content is delivered through its orginal source and belongs to their respective owners."]
                     })
                  }), (0, l.jsx)("hr", {}), (0, l.jsxs)("footer", {
                     className: "py-8 font-poppins m-auto text-sm ",
                     children: [(0, l.jsx)("div", {
                        className: "max-w-5xl px-3 mx-auto text-center mb-4 font-bold text-xl",
                        children: (0, l.jsxs)("a", {
                           href: "/",
                           children: [" InstaVideoSave", (0, l.jsx)("span", {
                              className: "text-blue-500 font-bold",
                              children: ".Net"
                           })]
                        })
                     }), (0, l.jsxs)("div", {
                        className: "flex justify-evenly font-semibold",
                        children: [(0, l.jsx)("span", {
                           children: (0, l.jsx)("a", {
                              href: "/",
                              children: "Home"
                           })
                        }), " ", "|", (0, l.jsx)("span", {
                           children: (0, l.jsx)("a", {
                              href: "/terms-and-conditions",
                              children: "Terms And Conditions"
                           })
                        }), " ", "|", (0, l.jsx)("span", {
                           children: (0, l.jsx)("a", {
                              href: "/privacy-policy",
                              children: "Privacy Policy"
                           })
                        })]
                     }), (0, l.jsxs)("div", {
                        className: "flex justify-center py-3",
                        children: [" ", (0, l.jsx)("hr", {
                           className: "w-48 text-center flex justify-center"
                        })]
                     }), " ", (0, l.jsxs)("div", {
                        className: "max-w-5xl px-1 mx-auto text-center text-xs",
                        children: ["Made with", (0, l.jsx)("svg", {
                           xmlns: "http://www.w3.org/2000/svg",
                           className: "h-6 w-6 text-blue-500 inline",
                           viewBox: "0 0 20 20",
                           fill: "currentColor",
                           children: (0, l.jsx)("path", {
                              fillRule: "evenodd",
                              d: "M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",
                              clipRule: "evenodd"
                           })
                        }), "in India"]
                     }), (0, l.jsxs)("div", {
                        className: "max-w-5xl px-3 mx-auto text-center opacity-70 text-xs",
                        children: ["\xa9 2020-2022 InstaVideoSave", (0, l.jsx)("span", {
                           className: "text-blue-500 font-bold",
                           children: ".Net"
                        })]
                     })]
                  }), " "]
               })
            },
            v = n(8607),
            f = n.n(v),
            w = function (e) {
               var t = e.children,
                  n = e.customMeta,
                  r = e.navbar;
               return (0, l.jsxs)(l.Fragment, {
                  children: [(0, l.jsx)(x, {
                     customMeta: n
                  }), (0, l.jsx)("header", {
                     children: (0, l.jsx)("div", {
                        className: "mx-auto",
                        children: (0, l.jsxs)("div", {
                           className: "flex items-center justify-between py-1 px-2 max-w-7xl m-auto ",
                           children: [(0, l.jsx)(h, {}), (0, l.jsx)(m, {})]
                        })
                     })
                  }), r ? "" : (0, l.jsxs)(l.Fragment, {
                     children: [" ", n.ad01 ? (0, l.jsxs)("div", {
                        className: "min-h-[300px] text-center",
                        children: [" ", (0, l.jsx)(f(), {
                           client: "ca-pub-9422500840090812",
                           slot: n.ad01,
                           style: {
                              display: "block"
                           },
                           format: "auto",
                           responsive: "true"
                        })]
                     }) : "", (0, l.jsx)(b, {})]
                  }), (0, l.jsx)("main", {
                     children: (0, l.jsx)("div", {
                        className: "max-w-5xl pt-2 px-3 mx-auto",
                        children: t
                     })
                  }), (0, l.jsx)(j, {})]
               })
            }
      }
   }
]);