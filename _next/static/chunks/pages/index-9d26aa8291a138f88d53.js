(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
   [405], {
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
      8771: function (e, t, n) {
         "use strict";
         var o = n(9713);

         function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
               var o = Object.getOwnPropertySymbols(e);
               t && (o = o.filter((function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable
               }))), n.push.apply(n, o)
            }
            return n
         }

         function a(e) {
            for (var t = 1; t < arguments.length; t++) {
               var n = null != arguments[t] ? arguments[t] : {};
               t % 2 ? r(Object(n), !0).forEach((function (t) {
                  o(e, t, n[t])
               })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
               }))
            }
            return e
         }
         t.default = function (e, t) {
            var n = i.default,
               o = {
                  loading: function (e) {
                     e.error, e.isLoading;
                     return e.pastDelay, null
                  }
               };
            e instanceof Promise ? o.loader = function () {
               return e
            } : "function" === typeof e ? o.loader = e : "object" === typeof e && (o = a(a({}, o), e));
            var r = o = a(a({}, o), t);
            if (r.suspense) throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");
            if (r.suspense) return n(r);
            o.loadableGenerated && delete(o = a(a({}, o), o.loadableGenerated)).loadableGenerated;
            if ("boolean" === typeof o.ssr) {
               if (!o.ssr) return delete o.ssr, l(n, o);
               delete o.ssr
            }
            return n(o)
         };
         s(n(7294));
         var i = s(n(4860));

         function s(e) {
            return e && e.__esModule ? e : {
               default: e
            }
         }

         function l(e, t) {
            return delete t.webpack, delete t.modules, e(t)
         }
      },
      1083: function (e, t, n) {
         "use strict";
         var o;
         Object.defineProperty(t, "__esModule", {
            value: !0
         }), t.LoadableContext = void 0;
         var r = ((o = n(7294)) && o.__esModule ? o : {
            default: o
         }).default.createContext(null);
         t.LoadableContext = r
      },
      4860: function (e, t, n) {
         "use strict";
         var o = n(4575),
            r = n(3913),
            a = n(9713);

         function i(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
               var o = Object.getOwnPropertySymbols(e);
               t && (o = o.filter((function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable
               }))), n.push.apply(n, o)
            }
            return n
         }

         function s(e) {
            for (var t = 1; t < arguments.length; t++) {
               var n = null != arguments[t] ? arguments[t] : {};
               t % 2 ? i(Object(n), !0).forEach((function (t) {
                  a(e, t, n[t])
               })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
               }))
            }
            return e
         }

         function l(e, t) {
            var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
               if (Array.isArray(e) || (n = function (e, t) {
                     if (!e) return;
                     if ("string" === typeof e) return d(e, t);
                     var n = Object.prototype.toString.call(e).slice(8, -1);
                     "Object" === n && e.constructor && (n = e.constructor.name);
                     if ("Map" === n || "Set" === n) return Array.from(e);
                     if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
                  }(e)) || t && e && "number" === typeof e.length) {
                  n && (e = n);
                  var o = 0,
                     r = function () {};
                  return {
                     s: r,
                     n: function () {
                        return o >= e.length ? {
                           done: !0
                        } : {
                           done: !1,
                           value: e[o++]
                        }
                     },
                     e: function (e) {
                        throw e
                     },
                     f: r
                  }
               }
               throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var a, i = !0,
               s = !1;
            return {
               s: function () {
                  n = n.call(e)
               },
               n: function () {
                  var e = n.next();
                  return i = e.done, e
               },
               e: function (e) {
                  s = !0, a = e
               },
               f: function () {
                  try {
                     i || null == n.return || n.return()
                  } finally {
                     if (s) throw a
                  }
               }
            }
         }

         function d(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
            return o
         }
         Object.defineProperty(t, "__esModule", {
            value: !0
         }), t.default = void 0;
         var u, c = (u = n(7294)) && u.__esModule ? u : {
               default: u
            },
            f = n(7161),
            h = n(1083);
         var p = [],
            m = [],
            v = !1;

         function y(e) {
            var t = e(),
               n = {
                  loading: !0,
                  loaded: null,
                  error: null
               };
            return n.promise = t.then((function (e) {
               return n.loading = !1, n.loaded = e, e
            })).catch((function (e) {
               throw n.loading = !1, n.error = e, e
            })), n
         }
         var g = function () {
            function e(t, n) {
               o(this, e), this._loadFn = t, this._opts = n, this._callbacks = new Set, this._delay = null, this._timeout = null, this.retry()
            }
            return r(e, [{
               key: "promise",
               value: function () {
                  return this._res.promise
               }
            }, {
               key: "retry",
               value: function () {
                  var e = this;
                  this._clearTimeouts(), this._res = this._loadFn(this._opts.loader), this._state = {
                     pastDelay: !1,
                     timedOut: !1
                  };
                  var t = this._res,
                     n = this._opts;
                  t.loading && ("number" === typeof n.delay && (0 === n.delay ? this._state.pastDelay = !0 : this._delay = setTimeout((function () {
                     e._update({
                        pastDelay: !0
                     })
                  }), n.delay)), "number" === typeof n.timeout && (this._timeout = setTimeout((function () {
                     e._update({
                        timedOut: !0
                     })
                  }), n.timeout))), this._res.promise.then((function () {
                     e._update({}), e._clearTimeouts()
                  })).catch((function (t) {
                     e._update({}), e._clearTimeouts()
                  })), this._update({})
               }
            }, {
               key: "_update",
               value: function (e) {
                  this._state = s(s({}, this._state), {}, {
                     error: this._res.error,
                     loaded: this._res.loaded,
                     loading: this._res.loading
                  }, e), this._callbacks.forEach((function (e) {
                     return e()
                  }))
               }
            }, {
               key: "_clearTimeouts",
               value: function () {
                  clearTimeout(this._delay), clearTimeout(this._timeout)
               }
            }, {
               key: "getCurrentValue",
               value: function () {
                  return this._state
               }
            }, {
               key: "subscribe",
               value: function (e) {
                  var t = this;
                  return this._callbacks.add(e),
                     function () {
                        t._callbacks.delete(e)
                     }
               }
            }]), e
         }();

         function w(e) {
            return function (e, t) {
               var n = Object.assign({
                  loader: null,
                  loading: null,
                  delay: 200,
                  timeout: null,
                  webpack: null,
                  modules: null,
                  suspense: !1
               }, t);
               n.suspense && (n.lazy = c.default.lazy(n.loader));
               var o = null;

               function r() {
                  if (!o) {
                     var t = new g(e, n);
                     o = {
                        getCurrentValue: t.getCurrentValue.bind(t),
                        subscribe: t.subscribe.bind(t),
                        retry: t.retry.bind(t),
                        promise: t.promise.bind(t)
                     }
                  }
                  return o.promise()
               }
               if (!v && "function" === typeof n.webpack && !n.suspense) {
                  var a = n.webpack();
                  m.push((function (e) {
                     var t, n = l(a);
                     try {
                        for (n.s(); !(t = n.n()).done;) {
                           var o = t.value;
                           if (-1 !== e.indexOf(o)) return r()
                        }
                     } catch (i) {
                        n.e(i)
                     } finally {
                        n.f()
                     }
                  }))
               }
               var i = n.suspense ? function (e, t) {
                  return c.default.createElement(n.lazy, s(s({}, e), {}, {
                     ref: t
                  }))
               } : function (e, t) {
                  r();
                  var a = c.default.useContext(h.LoadableContext),
                     i = f.useSubscription(o);
                  return c.default.useImperativeHandle(t, (function () {
                     return {
                        retry: o.retry
                     }
                  }), []), a && Array.isArray(n.modules) && n.modules.forEach((function (e) {
                     a(e)
                  })), c.default.useMemo((function () {
                     return i.loading || i.error ? c.default.createElement(n.loading, {
                        isLoading: i.loading,
                        pastDelay: i.pastDelay,
                        timedOut: i.timedOut,
                        error: i.error,
                        retry: o.retry
                     }) : i.loaded ? c.default.createElement(function (e) {
                        return e && e.__esModule ? e.default : e
                     }(i.loaded), e) : null
                  }), [e, i])
               };
               return i.preload = function () {
                  return !n.suspense && r()
               }, i.displayName = "LoadableComponent", c.default.forwardRef(i)
            }(y, e)
         }

         function b(e, t) {
            for (var n = []; e.length;) {
               var o = e.pop();
               n.push(o(t))
            }
            return Promise.all(n).then((function () {
               if (e.length) return b(e, t)
            }))
         }
         w.preloadAll = function () {
            return new Promise((function (e, t) {
               b(p).then(e, t)
            }))
         }, w.preloadReady = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            return new Promise((function (t) {
               var n = function () {
                  return v = !0, t()
               };
               b(m, e).then(n, n)
            }))
         }, window.__NEXT_PRELOADREADY = w.preloadReady;
         var x = w;
         t.default = x
      },
      2562: function (e, t, n) {
         "use strict";
         n.r(t), n.d(t, {
            Index: function () {
               return m
            }
         });
         var o = n(5861),
            r = n(7757),
            a = n.n(r),
            i = n(7220),
            s = n(7294),
            l = n(8607),
            d = n.n(l),
            u = n(5675),
            c = n(5152),
            f = n(8561),
            h = n(5893),
            p = (0, c.default)((function () {
               return n.e(848).then(n.bind(n, 8848))
            }), {
               loadableGenerated: {
                  webpack: function () {
                     return [8848]
                  },
                  modules: ["index.tsx -> ../components/DisplayDlpage"]
               }
            }),
            m = function () {
               var e = (0, s.useState)(""),
                  t = e[0],
                  n = e[1],
                  r = (0, s.useState)(!1),
                  l = r[0],
                  c = r[1],
                  m = (0, s.useState)(!1),
                  v = m[0],
                  y = m[1],
                  g = (0, s.useState)(void 0),
                  w = g[0],
                  b = g[1],
                  x = function (e) {
                     var t = new AbortController;
                     return setTimeout((function () {
                        return t.abort()
                     }), 1e3 * e), t
                  },
                  j = function () {
                     var e = (0, o.Z)(a().mark((function e() {
                        var n, o, r, i;
                        return a().wrap((function (e) {
                           for (;;) switch (e.prev = e.next) {
                              case 0:
                                 if (b(void 0), c(!1), !t) {
                                    e.next = 20;
                                    break
                                 }
                                 return y(!0), (o = new Headers).append("url", t), r = {
                                    method: "GET",
                                    headers: o,
                                    redirect: "follow"
                                 }, e.next = 9, fetch("https://api.instavideosave.com/allinone", r).then((function (e) {
                                    return e.json()
                                 })).catch((function () {
                                    return "link"
                                 }));
                              case 9:
                                 if ("link" !== (i = e.sent)) {
                                    e.next = 14;
                                    break
                                 }
                                 return e.next = 13, fetch("https://fetch.instavideosave.com?url=" + encodeURIComponent(t), {
                                    signal: x(5).signal
                                 }).then((function (e) {
                                    return e.json()
                                 })).catch((function () {
                                    return "link"
                                 }));
                              case 13:
                                 i = e.sent;
                              case 14:
                                 if ("link" !== i) {
                                    e.next = 18;
                                    break
                                 }
                                 return e.next = 17, fetch("https://telegram.mrabhi.workers.dev/?url=" + encodeURIComponent(t), {
                                    signal: x(25).signal
                                 }).then((function (e) {
                                    return e.json()
                                 })).catch((function () {
                                    return "link"
                                 }));
                              case 17:
                                 i = e.sent;
                              case 18:
                                 void 0 === i || "link" === i || 0 == (null === (n = i.image) || void 0 === n ? void 0 : n.length) ? (c(!0), y(!1), b("null")) : (y(!1), b("null"), c(!1), window.scrollTo({
                                    top: document.getElementById("resultAD").offsetTop - 60,
                                    behavior: "smooth"
                                 })), b(i);
                              case 20:
                              case "end":
                                 return e.stop()
                           }
                        }), e)
                     })));
                     return function () {
                        return e.apply(this, arguments)
                     }
                  }();
               return (0, h.jsx)(i.Z, {
                  customMeta: {
                     title: "Instagram Reels Downloader | Fast & Free - Instavideosave.net",
                     description: "Instavideosave is an online Free and Fast Instagram Videos & Reels Downloader Website, download instagram reels in HD Quality or Save reels video to Mp4 Video & Audio.",
                     type: "article",
                     ad01: "3017804480"
                  },
                  children: (0, h.jsxs)("div", {
                     className: "max-w-2xl m-auto ",
                     children: [(0, h.jsx)("h1", {
                        className: "text-xl font-bold tracking-tight mb-0 mt-2",
                        children: "Instagram Reels Downloader"
                     }), (0, h.jsx)("p", {
                        className: "opacity-80 text-sm",
                        children: "Download Instagram reels video by link."
                     }), (0, h.jsxs)("div", {
                        className: "text-gray-600 border-[2px] border-blue-500 shadow-md rounded-lg  dark:bg-gray-200 flex mt-4",
                        children: [(0, h.jsx)("input", {
                           onChange: function (e) {
                              e.preventDefault(), n(e.target.value)
                           },
                           type: "search",
                           name: "search",
                           placeholder: "Paste Reels Link ...",
                           className: "bg-transparent text-m w-full pl-3 h-14 rounded-full text-sm focus:outline-none text-black "
                        }), (0, h.jsxs)("button", {
                           type: "submit",
                           onClick: j,
                           className: " mt-2 mr-3 p-1 bg-blue-600 w-[96px] flex justify-center h-10 items-center rounded text-white",
                           children: [(0, h.jsx)("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              className: "h-6 w-6 text-white",
                              viewBox: "0 0 20 20",
                              fill: "currentColor",
                              children: (0, h.jsx)("path", {
                                 fillRule: "evenodd",
                                 d: "M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
                                 clipRule: "evenodd"
                              })
                           }), (0, h.jsx)("span", {
                              className: "text-m mr-1",
                              children: " Download "
                           })]
                        })]
                     }), l ? (0, h.jsx)("div", {
                        className: "text-sm text-center font-semibold mt-1",
                        children: (0, h.jsx)("div", {
                           className: "text-red-400",
                           children: "ERROR :-  cannot download private Post OR may be server error. Refresh Page & Try Again."
                        })
                     }) : "", (0, h.jsx)("br", {}), v ? (0, h.jsx)(f.Z, {}) : "", w ? (0, h.jsx)("div", {
                        id: "resultAD",
                        children: (0, h.jsx)(d(), {
                           client: "ca-pub-9422500840090812",
                           slot: "6449045048",
                           style: {
                              display: "block"
                           },
                           format: "auto",
                           responsive: "true"
                        })
                     }) : "", (0, h.jsx)(p, {
                        data: w,
                        type: "mp4"
                     }), (0, h.jsx)(d(), {
                        client: "ca-pub-9422500840090812",
                        slot: "7747935720",
                        style: {
                           display: "block"
                        },
                        format: "auto",
                        responsive: "true"
                     }), (0, h.jsxs)("div", {
                        className: "prose pt-4 dark:prose-dark",
                        children: [(0, h.jsx)("h2", {
                           className: "text-2xl tracking-tight",
                           children: "Instagram Reels Video Download"
                        }), (0, h.jsx)("p", {
                           children: "Instavideosave.net is an online free and fast tool which helps you to download instagram reels video or to save reels video to your device. You can save any reels videos to your phone or computer and view them offline anytime."
                        }), (0, h.jsx)("p", {
                           children: "We do not require any information to access our tool, so you don't need to worry about providing your login details. Also we do not charge anything for using our service, this is lifetime free service, which can be used to download an unlimited amount of reels video."
                        }), (0, h.jsx)("p", {
                           children: (0, h.jsx)("strong", {
                              children: "Key features:"
                           })
                        }), (0, h.jsxs)("ul", {
                           children: [(0, h.jsx)("li", {
                              children: "Original quality without watermark, which most of the tools out there can't."
                           }), (0, h.jsx)("li", {
                              children: "Download Reels video in gallery on any device that you want: mobile, iPhone, iPad, PC, or tablet."
                           }), (0, h.jsx)("li", {
                              children: "Download Instagram reels by link using your browser: We want to keep things simple, so you don't need to download or install any software."
                           }), (0, h.jsx)("li", {
                              children: "It's always free. We only place some ads, which support maintaining our services, and further development."
                           })]
                        }), (0, h.jsx)("h3", {
                           children: "What is Instagram Reels?"
                        }), (0, h.jsx)("p", {
                           children: "Instagram Reels is a new emerging short video platform after the launch of many short video sharing platforms. Instagram also added the concept of sharing videos up to 30 seconds in its App and officially named it Reels."
                        }), (0, h.jsx)("h3", {
                           children: "How To download Instagram Reels video online?"
                        }), (0, h.jsx)("p", {
                           children: "Our Instagram reels video viewer and downloader allows users to download Instagram reels video fast and free; it just took few seconds to fetch video from link and directly download it into gallery of your device. It is a super-fast Tool that takes less time to download reels from Instagram."
                        }), (0, h.jsx)("p", {
                           children: "Procedure to Download instagram reel using instavideosave.net:-"
                        }), (0, h.jsx)("p", {
                           children: "Are you looking for a step-by-step guide on how to download Instagram Reels Video?"
                        }), (0, h.jsx)("p", {
                           children: "Here's a quick and easy way to do it:"
                        }), (0, h.jsxs)("ol", {
                           children: [(0, h.jsx)("li", {
                              children: "Choose the Reels video that you want to download."
                           }), (0, h.jsx)("li", {
                              children: "Copy link to the video."
                           }), (0, h.jsx)(u.default, {
                              src: "/images/copylink.jpg",
                              alt: "copy link from Instagram reels video",
                              width: "600px",
                              height: "368px"
                           }), (0, h.jsx)("li", {
                              children: "Paste Url into input box."
                           }), (0, h.jsx)("li", {
                              children: 'Click "Download" button.'
                           }), (0, h.jsx)(u.default, {
                              src: "/images/pastelink.jpg",
                              alt: "download reels video online",
                              width: "600px",
                              height: "460px"
                           }), (0, h.jsx)("li", {
                              children: 'Wait for the Video file to be processed & and then click on the "Download Video" button to save file to your device'
                           }), (0, h.jsx)(u.default, {
                              src: "/images/getvideo.jpg",
                              alt: "Instagram reels download",
                              width: "600px",
                              height: "460px"
                           })]
                        }), (0, h.jsx)("h3", {
                           children: "How To Copy Instagram Reels Video link/Url?"
                        }), (0, h.jsxs)("ol", {
                           children: [(0, h.jsx)("li", {
                              children: "Open your Instagram app."
                           }), (0, h.jsx)("li", {
                              children: "Choose the Reels video that you want to download."
                           }), (0, h.jsx)("li", {
                              children: "Click Three dots : at the bottom of video, find Copy Link button."
                           }), (0, h.jsx)("li", {
                              children: "Click on Copy Link button and the video url/link has been copied."
                           })]
                        }), (0, h.jsx)("h3", {
                           children: "What is Reels video downloader for Instagram? "
                        }), (0, h.jsx)("p", {
                           children: "We all know that Instagram doesn't allow you to download reels video or any content directly inside from the app or website, so reels video downloader tool is basically a substitute for who wants to download videos from instagram."
                        }), (0, h.jsx)("h3", {
                           children: "How to download reels video with Original Hd Quality?"
                        }), (0, h.jsx)("p", {
                           children: "Download Reels video in its original quality is very simple. When you hit a request on our website to download a reel by pasting a sharing link. our backend comes into action and looks for the best possible quality of the file. Then, after it serves the high quality reels video downloading."
                        }), (0, h.jsx)("h3", {
                           children: "How can i download Instagram Reels in Gallery?"
                        }), (0, h.jsx)("p", {
                           children: "Whenever a user download videos using our online reels downloader, the video file will be saved to the download location of your browser i.e, default location in most of modern web browsers is Downloads Directory. For viewing that particular reels in gallery you can check that directory inside the gallery of your phone."
                        }), (0, h.jsx)("h3", {
                           children: "How can i download reels audio or sound only?"
                        }), (0, h.jsxs)("p", {
                           children: ["if you're looking for the sound, music or audio of the particular reels video, you can download videos with sound using our reels downloader. Although if you want to download audio mp3 only you can do it by using our instagram to mp3 converter tool ", (0, h.jsx)("strong", {
                              children: "(To use Open Audio Tab From top Navigation bar)"
                           }), ", it can convert instagram videos or reels to mp3 or can download instagram reels audio, sound or music."]
                        }), (0, h.jsx)("h3", {
                           children: "How to download Instagram private reels video?"
                        }), (0, h.jsx)("p", {
                           children: "Downloading Reels videos is just a simple stuff, but when it comes to download private instagram reels this is little challenging. Instagram doesn't allow everyone to access private videos, photos or reels thatswhy instavideosave tool cannot able to extract or download private reels videos."
                        }), (0, h.jsxs)("p", {
                           children: [(0, h.jsx)("strong", {
                              children: "DMCA:"
                           }), " Instavideosave.net complies with 17 U.S.C. * 512 and the Digital Millennium Copyright Act (DMCA). It is our policy to respond to any infringement notices and take appropriate actions. If your copyrighted material has been posted on the site and you want this material removed."]
                        })]
                     })]
                  })
               })
            };
         t.default = m
      },
      5301: function (e, t, n) {
         (window.__NEXT_P = window.__NEXT_P || []).push(["/", function () {
            return n(2562)
         }])
      },
      5152: function (e, t, n) {
         e.exports = n(8771)
      },
      5861: function (e, t, n) {
         "use strict";

         function o(e, t, n, o, r, a, i) {
            try {
               var s = e[a](i),
                  l = s.value
            } catch (d) {
               return void n(d)
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
      }
   },
   function (e) {
      e.O(0, [774, 542, 220, 888, 179], (function () {
         return t = 5301, e(e.s = t);
         var t
      }));
      var t = e.O();
      _N_E = t
   }
]);