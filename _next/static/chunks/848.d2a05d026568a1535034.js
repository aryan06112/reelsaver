"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
   [848], {
      8848: function (e, t, l) {
         l.r(t);
         var a = l(1664),
            n = l(5893);
         t.default = function (e) {
            var t, l, d, s, i, o, c, r, h;
            return (0, n.jsxs)("div", {
               children: [0 != (null === (t = e.data) || void 0 === t || null === (l = t.video) || void 0 === l || null === (d = l.video) || void 0 === d ? void 0 : d.length) ? null === (s = e.data) || void 0 === s || null === (i = s.video) || void 0 === i ? void 0 : i.map((function (t, l) {
                  return (0, n.jsxs)("div", {
                     className: "m-2",
                     children: [(0, n.jsx)("div", {
                        className: "flex justify-center items-center",
                        children: (0, n.jsx)("video", {
                           controls: !0,
                           preload: "none",
                           poster: t.thumbnail ? "https://cdn.mrabhi.workers.dev?url=".concat(encodeURIComponent(t.thumbnail)) : "",
                           className: "rounded-lg w-10/12 lg:w-64 ",
                           children: (0, n.jsx)("source", {
                              src: "https://vid-player.glitch.me/?url=".concat(encodeURIComponent(t.video), "&type=").concat(e.type, "&dlheader=", "video/mp4", "&title=").concat(Math.floor(1e11 * Math.random()))
                           })
                        }, t)
                     }), (0, n.jsx)("div", {
                        className: "flex justify-center items-center",
                        children: (0, n.jsx)(a.default, {
                           href: "".concat(t.video, "&dl=1"),
                           children: (0, n.jsxs)("button", {
                              className: "mt-3 mb-3 pl-2 h-9 bg-blue-600 w-[70%] lg:w-[80%] flex justify-center items-center rounded text-white",
                              children: [(0, n.jsx)("svg", {
                                 xmlns: "http://www.w3.org/2000/svg",
                                 className: "h-5 w-5 text-white ",
                                 viewBox: "0 0 20 20",
                                 fill: "currentColor",
                                 children: (0, n.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
                                    clipRule: "evenodd"
                                 })
                              }), (0, n.jsx)("span", {
                                 className: "mr-1 leading-tight",
                                 children: "Download Video"
                              })]
                           })
                        })
                     }), (0, n.jsx)("div", {
                        className: "flex justify-center items-center",
                        children: (0, n.jsx)(a.default, {
                           href: "".concat("https://dl1.instavideosave.com", "?url=").concat(encodeURIComponent(t.video), "&type=").concat(e.type, "&dlheader=", "video/mp4", "&title=").concat(Math.floor(1e11 * Math.random())),
                           children: (0, n.jsxs)("button", {
                              className: " mb-3 pl-2 h-9 bg-blue-600 w-[70%] lg:w-[80%] flex justify-center items-center rounded text-white",
                              children: [(0, n.jsx)("svg", {
                                 xmlns: "http://www.w3.org/2000/svg",
                                 className: "h-5 w-5 text-white ",
                                 viewBox: "0 0 20 20",
                                 fill: "currentColor",
                                 children: (0, n.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
                                    clipRule: "evenodd"
                                 })
                              }), (0, n.jsx)("span", {
                                 className: " mr-1 leading-tight",
                                 children: "Download Video (Server-2)"
                              })]
                           })
                        })
                     }), (0, n.jsxs)("div", {
                        className: "flex justify-center items-center text-xs",
                        children: [(0, n.jsx)("span", {
                           className: " mr-1 leading-tight",
                           children: "Want to Download Audio "
                        }), (0, n.jsx)(a.default, {
                           href: "/audio/",
                           children: (0, n.jsx)("a", {
                              className: "text-blue-600",
                              children: "Click here"
                           })
                        })]
                     })]
                  }, l)
               })) : "", 0 != (null === (o = e.data) || void 0 === o || null === (c = o.image) || void 0 === c ? void 0 : c.length) ? null === (r = e.data) || void 0 === r || null === (h = r.image) || void 0 === h ? void 0 : h.map((function (t, l) {
                  return (0, n.jsxs)("div", {
                     className: "flex justify-center m-5 flex-wrap",
                     children: [(0, n.jsx)("img", {
                        src: "https://dl1.instavideosave.com?url=".concat(encodeURIComponent(t), "&type=").concat(e.type, "&dlheader=", "image/jpeg", "&title=").concat(Math.floor(1e11 * Math.random())),
                        className: " rounded-lg"
                     }, t), (0, n.jsx)(a.default, {
                        href: "https://dl1.instavideosave.com?url=".concat(encodeURIComponent(t), "&type=", "jpg", "&dlheader=", "image/jpeg", "&title=").concat(Math.floor(1e11 * Math.random())),
                        children: (0, n.jsxs)("button", {
                           className: "mt-3 bg-blue-600 w-[160px] flex justify-center h-8 items-center rounded text-white",
                           children: [(0, n.jsx)("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              className: "h-4 w-4 text-white",
                              viewBox: "0 0 20 20",
                              fill: "currentColor",
                              children: (0, n.jsx)("path", {
                                 fillRule: "evenodd",
                                 d: "M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
                                 clipRule: "evenodd"
                              })
                           }), (0, n.jsx)("span", {
                              className: "text-sm mr-1",
                              children: "Download Image"
                           })]
                        })
                     })]
                  }, l)
               })) : ""]
            })
         }
      }
   }
]);