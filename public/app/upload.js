!
function(e) {
    function t(t) {
        for (var s, i, o = t[0], l = t[1], c = t[2], u = 0, p = []; u < o.length; u++) i = o[u],
        Object.prototype.hasOwnProperty.call(n, i) && n[i] && p.push(n[i][0]),
        n[i] = 0;
        for (s in l) Object.prototype.hasOwnProperty.call(l, s) && (e[s] = l[s]);
        for (d && d(t); p.length;) p.shift()();
        return r.push.apply(r, c || []),
        a()
    }
    function a() {
        for (var e, t = 0; t < r.length; t++) {
            for (var a = r[t], s = !0, o = 1; o < a.length; o++) {
                var l = a[o];
                0 !== n[l] && (s = !1)
            }
            s && (r.splice(t--, 1), e = i(i.s = a[0]))
        }
        return e
    }
    var s = {},
    n = {
        3 : 0
    },
    r = [];
    function i(t) {
        if (s[t]) return s[t].exports;
        var a = s[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(a.exports, a, a.exports, i),
        a.l = !0,
        a.exports
    }
    i.m = e,
    i.c = s,
    i.d = function(e, t, a) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        })
    },
    i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    },
    i.t = function(e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (i.r(a), Object.defineProperty(a, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var s in e) i.d(a, s,
        function(t) {
            return e[t]
        }.bind(null, s));
        return a
    },
    i.n = function(e) {
        var t = e && e.__esModule ?
        function() {
            return e.
        default
        }:
        function() {
            return e
        };
        return i.d(t, "a", t),
        t
    },
    i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    },
    i.p = "/app/";
    var o = window.webpackJsonp = window.webpackJsonp || [],
    l = o.push.bind(o);
    o.push = t,
    o = o.slice();
    for (var c = 0; c < o.length; c++) t(o[c]);
    var d = l;
    r.push([173, 0]),
    a()
} ({
    173 : function(e, t, a) {
        "use strict";
        a.r(t);
        var s = a(4),
        n = a.n(s),
        r = (a(26), a(37), a(66), a(67), a(10)),
        i = (a(106), a(52), {
            _pattern: /[A-Z0-9_\-+!]/,
            _getRandomByte: function() {
                var e = new Uint8Array(1),
                t = window.msCrypto;
                return t || (t = window.crypto),
                t.getRandomValues(e),
                e[0]
            },
            generate: function(e) {
                var t = window.msCrypto;
                return t || (t = window.crypto),
                t && t.getRandomValues ? Array.apply(null, {
                    length: e
                }).map((function() {
                    for (var e;;) if (e = String.fromCharCode(this._getRandomByte()), this._pattern.test(e)) return e
                }), this).join("") : ""
            }
        }),
        o = {
            name: "Settings",
            computed: Object(r.c)({
                config: "config",
                disabled: "disabled",
                retention: function(e) {
                    return e.upload.retention
                },
                password: function(e) {
                    return e.upload.password
                }
            }),
            methods: {
                generatePassword: function() {
                    this.disabled || this.$store.commit("upload/PASSWORD", i.generate(10))
                }
            }
        },
        l = a(1),
        c = Object(l.a)(o, (function() {
            var e = this,
            t = e.$createElement,
            a = e._self._c || t;
            return e.config && e.config.retentions ? a("div", [a("div", {
                staticClass: "panel panel-default",
                class: {
                    "panel-info": !e.disabled
                }
            },
            [a("div", {
                staticClass: "panel-heading"
            },
            [e._v("设置")]), a("div", {
                staticClass: "panel-body"
            },
            [a("div", {
                staticClass: "form-group"
            },
            [a("label", {
                attrs: {
                    for: "retention"
                }
            },
            [e._v("文件保留时间")]), a("select", {
                staticClass: "form-control",
                attrs: {
                    id: "retention",
                    disabled: e.disabled
                },
                domProps: {
                    value: e.retention
                },
                on: {
                    change: function(t) {
                        e.$store.commit("upload/RETENTION", t.target.value)
                    }
                }
            },
            e._l(e.config.retentions, (function(t, s, n) {
                return a("option", {
                    domProps: {
                        value: s,
                        selected: s === e.retention
                    }
                },
                [e._v(e._s(t))])
            })), 0)]), a("div", [a("label", {
                attrs: {
                    for: "password"
                }
            },
            [e._v("密码")]), a("div", {
                staticClass: "input-group"
            },
            [a("input", {
                staticClass: "form-control",
                attrs: {
                    id: "password",
                    type: "text",
                    disabled: e.disabled,
                    placeholder: "可选"
                },
                domProps: {
                    value: e.password
                },
                on: {
                    input: function(t) {
                        e.$store.commit("upload/PASSWORD", t.target.value)
                    }
                }
            }), a("span", {
                staticClass: "input-group-addon",
                staticStyle: {
                    cursor: "pointer"
                },
                attrs: {
                    title: "生成随机密码"
                },
                on: {
                    click: function(t) {
                        e.generatePassword()
                    }
                }
            },
            [a("icon", {
                attrs: {
                    name: "key"
                }
            })], 1)])])])])]) : e._e()
        }), [], !1, null, null, null);
        c.options.__file = "Settings.vue";
        var d = c.exports,
        u = a(96),
        p = a.n(u),
        f = a(35),
        m = (a(137), a(138), a(139), a(24), {
            name: "Files",
            components: {
                FileIcon: f.a
            },
            computed: Object(r.c)({
                disabled: "disabled",
                state: "state",
                files: function(e) {
                    return e.upload.files
                }
            }),
            mounted: function() {
                var e = this;
                p()("body", (function(t) {
                    return e.$store.dispatch("upload/addFiles", t)
                }))
            }
        }),
        v = Object(l.a)(m, (function() {
            var e = this,
            t = e.$createElement,
            a = e._self._c || t;
            return a("div", {
                staticClass: "upload-files"
            },
            [a("div", {
                staticClass: "panel panel-default",
                class: {
                    "panel-primary": !e.disabled
                }
            },
            [a("div", {
                staticClass: "panel-heading"
            },
            [e._v("文件")]), a("div", {
                staticClass: "panel-body"
            },
            [a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 0 === e.files.length,
                    expression: "files.length === 0"
                }],
                staticClass: "empty-files-big-plus",
                style: {
                    cursor: e.disabled ? "default": "pointer"
                },
                attrs: {
                    onclick: "document.getElementById('fileInput').click();"
                }
            },
            [a("a", [a("icon", {
                attrs: {
                    name: "plus",
                    scale: "4"
                }
            }), a("br"), e._v(" 上传新文件")], 1)]), a("table", {
                staticClass: "table table-striped"
            },
            [a("tbody", e._l(e.files, (function(t) {
                return a("tr", [a("td", {
                    staticClass: "file-icon"
                },
                [a("file-icon", {
                    attrs: {
                        file: t._File
                    }
                })], 1), a("td", [a("p", [a("strong", [e._v(" " + e._s(t.name))]), a("small", [e._v(" (" + e._s(t.humanSize) + ")")])]), a("p", [a("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.comment,
                        expression: "file.comment"
                    }],
                    staticClass: "form-control input-sm",
                    attrs: {
                        type: "text",
                        placeholder: "文件说明...",
                        disabled: e.disabled
                    },
                    domProps: {
                        value: t.comment
                    },
                    on: {
                        input: function(a) {
                            a.target.composing || e.$set(t, "comment", a.target.value)
                        }
                    }
                })]), t.error ? a("div", {
                    staticClass: "alert alert-danger"
                },
                [a("icon", {
                    staticClass: "fa-fw",
                    attrs: {
                        name: "exclamation-triangle"
                    }
                }), e._v(" " + e._s(t.error))], 1) : e._e(), a("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !t.error && ("uploading" === e.state || "uploaded" === e.state),
                        expression: "!file.error && (state === 'uploading' || state === 'uploaded')"
                    }],
                    staticClass: "progress"
                },
                [a("div", {
                    staticClass: "progress-bar progress-bar-success progress-bar-striped",
                    class: {
                        active: !t.uploaded
                    },
                    style: {
                        width: t.progress.percentage + "%"
                    }
                })])]), a("td", {
                    staticClass: "btns"
                },
                [a("a", {
                    staticStyle: {
                        cursor: "pointer"
                    },
                    attrs: {
                        disabled: e.disabled
                    },
                    on: {
                        click: function(a) { ! e.disabled && e.$store.commit("upload/REMOVE_FILE", t)
                        }
                    }
                },
                [a("icon", {
                    attrs: {
                        name: "times"
                    }
                })], 1)])])
            })), 0)]), a("input", {
                staticStyle: {
                    display: "none"
                },
                attrs: {
                    id: "fileInput",
                    type: "file",
                    multiple: "",
                    disabled: e.disabled
                },
                on: {
                    change: function(t) {
                        e.$store.dispatch("upload/addFiles", t.target.files)
                    }
                }
            }), a("div", {
                staticClass: "text-right"
            },
            [a("a", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.files.length > 0,
                    expression: "files.length>0"
                }],
                staticClass: "btn btn-success btn-sm",
                attrs: {
                    onclick: "document.getElementById('fileInput').click();",
                    disabled: e.disabled
                }
            },
            [a("icon", {
                attrs: {
                    name: "plus-circle"
                }
            })], 1)])])])])
        }), [], !1, null, null, null);
        v.options.__file = "Files.vue";
        var g = v.exports,
        h = a(36);
        a(91),
        a(141),
        a(43),
        a(142),
        a(143);
        function b(e, t, a) {
            return t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = a,
            e
        }
        var w = {
            name: "App",
            components: {
                Settings: d,
                Files: g,
                Clipboard: h.a
            },
            computed: function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {},
                    s = Object.keys(a);
                    "function" == typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(a).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(a, e).enumerable
                    })))),
                    s.forEach((function(t) {
                        b(e, t, a[t])
                    }))
                }
                return e
            } ({},
            Object(r.c)(["error", "disabled", "state"]), Object(r.c)("upload", ["sid", "files"]), Object(r.b)("upload", ["percentUploaded", "shareUrl"]), {
                mailLnk: function() {
                    return this.$store.state.config && this.$store.state.config.mailTemplate && this.$store.state.config.mailTemplate.replace("%%URL%%", this.shareUrl)
                }
            }),
            watch: {
                state: function(e) {
                    if ("uploaded" === e || "uploadError" === e) {
                        var t = document.getElementById("uploadApp");
                        if (!t || !t.scrollIntoView) return;
                        t.scrollIntoView(!0)
                    }
                }
            },
            methods: {
                newSession: function() {
                    confirm("跳转至上传新文件界面？") && document.location.reload()
                }
            }
        },
        y = Object(l.a)(w, (function() {
            var e = this,
            t = e.$createElement,
            a = e._self._c || t;
            return a("div", {
                staticClass: "upload-app",
                attrs: {
                    id: "uploadApp"
                }
            },
            [a("a", {
                staticClass: "btn btn-sm btn-info btn-new-session",
                attrs: {
                    title: "上传新文件"
                },
                on: {
                    click: function(t) {
                        e.newSession()
                    }
                }
            },
            [a("icon", {
                staticClass: "fa-fw",
                attrs: {
                    name: "cloud-upload-alt"
                }
            }), a("span", {
                staticClass: "hidden-xs"
            },
            [e._v("上传新文件")])], 1), a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.error,
                    expression: "error"
                }],
                staticClass: "alert alert-danger"
            },
            [a("strong", [a("icon", {
                staticClass: "fa-fw",
                attrs: {
                    name: "exclamation-triangle"
                }
            }), e._v(" " + e._s(e.error))], 1)]), a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "uploaded" === e.state,
                    expression: "state === 'uploaded'"
                }],
                staticClass: "well"
            },
            [a("div", {
                staticClass: "pull-right btn-group"
            },
            [a("a", {
                staticClass: "btn btn-primary",
                attrs: {
                    href: e.mailLnk
                }
            },
            [a("icon", {
                staticClass: "fa-fw",
                attrs: {
                    name: "envelope"
                }
            }), e._v(" 邮件")], 1), a("clipboard", {
                staticClass: "btn btn-primary",
                attrs: {
                    value: e.shareUrl
                }
            })], 1), a("h3", {
                staticClass: "text-success"
            },
            [a("icon", {
                staticClass: "fa-fw",
                attrs: {
                    name: "check"
                }
            }), e._v(" 上传完成！")], 1), a("div", {
                staticClass: "share-link"
            },
            [a("span", {
                staticClass: "title"
            },
            [e._v("文件链接:")]), a("a", {
                attrs: {
                    href: e.shareUrl
                }
            },
            [e._v(e._s(e.shareUrl))])])]), a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "uploading" === e.state,
                    expression: "state === 'uploading'"
                }],
                staticClass: "row overall-process"
            },
            [a("div", {
                staticClass: "col-xs-12"
            },
            [a("icon", {
                staticClass: "pull-left",
                attrs: {
                    name: "spinner",
                    scale: "2",
                    spin: ""
                }
            }), a("div", {
                staticClass: "progress"
            },
            [a("div", {
                staticClass: "progress-bar progress-bar-success progress-bar-striped active",
                style: {
                    width: e.percentUploaded + "%"
                }
            },
            [a("span", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.percentUploaded > 10,
                    expression: "percentUploaded>10"
                }]
            },
            [e._v(e._s(e.percentUploaded) + "%")])])])], 1)]), a("div", {
                staticClass: "row"
            },
            [a("div", {
                staticClass: "col-sm-7"
            },
            [a("files")], 1), a("div", {
                staticClass: "col-sm-5"
            },
            [a("settings"), a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.files.length && !e.disabled,
                    expression: "files.length && !disabled"
                }],
                staticClass: "text-right"
            },
            [a("button", {
                staticClass: "btn btn-lg btn-success",
                on: {
                    click: function(t) {
                        e.$store.dispatch("upload/upload")
                    }
                }
            },
            [a("icon", {
                staticClass: "fa-fw",
                attrs: {
                    name: "upload"
                }
            }), e._v(" 确定上传")], 1)]), a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "uploadError" === e.state,
                    expression: "state === 'uploadError'"
                }],
                staticClass: "text-right"
            },
            [a("button", {
                staticClass: "btn btn-lg btn-success",
                on: {
                    click: function(t) {
                        e.$store.dispatch("upload/upload")
                    }
                }
            },
            [a("icon", {
                staticClass: "fa-fw",
                attrs: {
                    name: "upload"
                }
            }), e._v(" 重试")], 1)])], 1)])])
        }), [], !1, null, null, null);
        y.options.__file = "Upload.vue";
        var _ = y.exports,
        C = {
            namespaced: !0,
            state: {},
            mutations: {
                SET: function(e, t) {
                    for (var a in t) n.a.set(e, a, t[a])
                }
            },
            actions: {
                fetch: function(e) {
                    var t = e.commit,
                    a = new XMLHttpRequest;
                    a.open("GET", "/config.json"),
                    a.onload = function() {
                        if (200 === a.status) try {
                            var e = JSON.parse(a.responseText);
                            t("SET", e),
                            t("upload/RETENTION", e.defaultRetention, {
                                root: !0
                            })
                        } catch(e) {
                            t("ERROR", "Config parse Error: ".concat(e.message), {
                                root: !0
                            })
                        } else t("ERROR", "Config load error: ".concat(a.status, " ").concat(a.statusText), {
                            root: !0
                        })
                    },
                    a.send()
                }
            }
        },
        E = (a(54), a(34), a(146), a(92), a(97)),
        S = a.n(E),
        O = a(58),
        R = a.n(O),
        x = a(25),
        U = a.n(x);
        function I(e) {
            var t = -1;
            do {
                e /= 1024, t++
            } while ( e > 1024 );
            return Math.max(e, .01).toFixed(2) + [" kB", " MB", " GB", " TB", "PB", "EB", "ZB", "YB"][t]
        }
        var T = null,
        P = !1;
        var j, F = {
            namespaced: !0,
            state: {
                retention: null,
                password: "",
                files: [],
                sid: (j = document.location.search.match(/sid=([^&]+)/), j ? j[1] : U()(R()()).toString().substr(0, 12)),
                bytesUploaded: 0
            },
            getters: {
                shareUrl: function(e) {
                    return document.location.protocol + "//" + document.location.host + "/" + e.sid
                },
                percentUploaded: function(e) {
                    return Math.min(Math.round(e.files.reduce((function(e, t) {
                        return e + t.progress.percentage
                    }), 0) / e.files.length), 100)
                }
            },
            mutations: {
                RETENTION: function(e, t) {
                    e.retention = t
                },
                PASSWORD: function(e, t) {
                    e.password = t
                },
                ADD_FILE: function(e, t) {
                    e.files.splice(0, 0, t)
                },
                REMOVE_FILE: function(e, t) {
                    var a = e.files.indexOf(t);
                    a > -1 && e.files.splice(a, 1)
                },
                UPDATE_FILE: function(e, t) {
                    for (var a in t.data) t.file[a] = t.data[a]
                },
                NEW_SESSION: function(e) {
                    e.password = "",
                    e.files.splice(0, e.files.length),
                    e.sid = U()(R()()).toString().substr(0, 12)
                }
            },
            actions: {
                addFiles: function(e, t) {
                    var a = e.commit;
                    if (!e.state.disabled) for (var s = 0; s < t.length; s++) a("ADD_FILE", {
                        _File: t[s],
                        name: t[s].name,
                        comment: "",
                        progress: {
                            percentage: 0,
                            humanSize: 0
                        },
                        uploaded: !1,
                        error: !1,
                        humanSize: I(t[s].size),
                        _retryDelay: 500,
                        _retries: 0
                    })
                },
                upload: function(e) {
                    var t = e.commit,
                    a = e.dispatch,
                    s = e.state;
                    t("STATE", "uploading", {
                        root: !0
                    }),
                    t("ERROR", "", {
                        root: !0
                    }),
                    null === T && (T = function() {
                        P = !1,
                        t("ERROR", !1, {
                            root: !0
                        }),
                        a("upload")
                    }),
                    P && window.removeEventListener("online", T),
                    s.files.forEach((function(e) {
                        e.error = "",
                        e._retries = 0,
                        e._retryDelay = 500;
                        var a = e._File,
                        n = new S.a.Upload(a, {
                            metadata: {
                                sid: s.sid,
                                retention: s.retention,
                                password: s.password,
                                name: e.name,
                                comment: e.comment,
                                type: e._File.type
                            },
                            resume: !0,
                            endpoint: "/files/",
                            fingerprint: function(e) {
                                return ["tus", s.sid, e.name, e.type, e.size, e.lastModified].join("-")
                            },
                            retryDelays: null,
                            onError: function(a) {
                                if (navigator.onLine) if (a && a.originalRequest && a.originalRequest.status >= 400 && a.originalRequest.status < 500) t("UPDATE_FILE", {
                                    file: e,
                                    data: {
                                        error: a.message || a.toString()
                                    }
                                });
                                else {
                                    if (e._retries > 30) return t("UPDATE_FILE", {
                                        file: e,
                                        data: {
                                            error: a.message || a.toString()
                                        }
                                    }),
                                    void(s.files.every((function(e) {
                                        return e.error
                                    })) && (t("STATE", "uploadError", {
                                        root: !0
                                    }), t("ERROR", "Upload failed.", {
                                        root: !0
                                    })));
                                    e._retryDelay = Math.min(1.7 * e._retryDelay, 1e4),
                                    e._retries++,
                                    console && console.log(a.message || a.toString(), "; will retry in", e._retryDelay, "ms"),
                                    setTimeout((function() {
                                        return n.start()
                                    }), e._retryDelay)
                                } else t("ERROR", "You are offline. Your uploads will resume as soon as you are back online.", {
                                    root: !0
                                }),
                                P || (P = !0, window.addEventListener("online", T))
                            },
                            onProgress: function(a, s) {
                                if (a !== s) {
                                    e.error = "",
                                    e._retries = 0,
                                    e._retryDelay = 500;
                                    var n = Math.round(a / s * 1e4) / 100;
                                    t("UPDATE_FILE", {
                                        file: e,
                                        data: {
                                            progress: {
                                                percentage: n,
                                                humanSize: I(a)
                                            }
                                        }
                                    })
                                }
                            },
                            onSuccess: function() {
                                localStorage.removeItem(n._fingerprint),
                                t("UPDATE_FILE", {
                                    file: e,
                                    data: {
                                        uploaded: !0,
                                        progress: {
                                            percentage: 100,
                                            humanFileSize: e.humanSize
                                        }
                                    }
                                }),
                                s.files.every((function(e) {
                                    return e.uploaded
                                })) && t("STATE", "uploaded", {
                                    root: !0
                                })
                            }
                        });
                        n.start()
                    }))
                }
            }
        };
        n.a.use(r.a);
        var k = new r.a.Store({
            modules: {
                config: C,
                upload: F
            },
            state: {
                error: "",
                disabled: !1,
                state: "new"
            },
            mutations: {
                ERROR: function(e, t) {
                    e.error = t,
                    e.disabled = !0
                },
                DISABLE: function(e) {
                    e.disabled = !0
                },
                STATE: function(e, t) {
                    e.state = t,
                    "new" !== t && (e.disabled = !0)
                }
            }
        }),
        D = a(0);
        n.a.component("icon", D.a),
        new n.a({
            el: "#upload",
            store: k,
            render: function(e) {
                return e(_)
            },
            beforeCreate: function() {
                this.$store.dispatch("config/fetch")
            }
        }),
        window.PSITRANSFER_VERSION = "#041684408b"
    },
    35 : function(e, t, a) {
        "use strict";
        a(55),
        a(85),
        a(86),
        a(87),
        a(88),
        a(89),
        a(90);
        var s = {
            props: ["file"],
            computed: {
                iconClass: function() {
                    var e = this.file.type || this.file.metadata && this.file.metadata.type;
                    return e ? e.startsWith("image") ? "regular/file-image": e.startsWith("text") ? "regular/file-alt": e.startsWith("video") ? "regular/file-video": e.startsWith("audio") ? "regular/file-audio": "application/pdf" === e ? "regular/file-pdf": e.startsWith("application") ? "regular/file-archive": "regular/file": "regular/file"
                },
                isImageBlob: function() {
                    return ! (!URL && !webkitURL) && (this.file instanceof File && this.file.type.startsWith("image"))
                },
                blobUrl: function() {
                    if (this.isImageBlob) return (URL || webkitURL).createObjectURL(this.file)
                }
            }
        },
        n = a(1),
        r = Object(n.a)(s, (function() {
            var e = this.$createElement,
            t = this._self._c || e;
            return t("div", {
                staticClass: "file-icon"
            },
            [this.isImageBlob ? this._e() : t("icon", {
                attrs: {
                    name: this.iconClass,
                    scale: "3"
                }
            }), this.isImageBlob ? t("img", {
                attrs: {
                    src: this.blobUrl
                }
            }) : this._e()], 1)
        }), [], !1, null, null, null);
        r.options.__file = "FileIcon.vue";
        t.a = r.exports
    },
    36 : function(e, t, a) {
        "use strict";
        a(56),
        a(43),
        a(57),
        a(24);
        var s = {
            name: "Clipboard",
            props: {
                value: {
                    type: String,
                    required: !0
                }
            },
            data: function() {
                return {
                    state: "pristine"
                }
            },
            methods: {
                copy: function() {
                    var e = document.createElement("textarea");
                    Object.assign(e.style, {
                        position: "absolute",
                        left: "-200%"
                    }),
                    e.value = this.value,
                    document.body.appendChild(e);
                    var t = !1;
                    try {
                        e.select(),
                        t = document.execCommand("copy")
                    } catch(e) {
                        alert("Dein alter Browser unterstützt diese Funktion leider nicht."),
                        console.error(e)
                    }
                    document.body.removeChild(e),
                    this.state = t ? "copied": "error",
                    this.$emit("change", this.state)
                }
            }
        },
        n = a(1),
        r = Object(n.a)(s, (function() {
            var e = this,
            t = e.$createElement,
            a = e._self._c || t;
            return a("span", {
                staticStyle: {
                    cursor: "pointer"
                },
                on: {
                    click: function(t) {
                        t.stopPropagation(),
                        e.copy()
                    }
                }
            },
            [e._t("default", ["pristine" === e.state ? a("icon", {
                staticClass: "fa-fw",
                attrs: {
                    name: "copy"
                }
            }) : e._e(), "copied" === e.state ? a("icon", {
                staticClass: "fa-fw",
                attrs: {
                    name: "check"
                }
            }) : e._e(), "error" === e.state ? a("icon", {
                staticClass: "fa-fw",
                attrs: {
                    name: "exclamation-triangle"
                }
            }) : e._e(), e._t("text", [e._v(" 复制")])], {
                state: e.state
            })], 2)
        }), [], !1, null, null, null);
        r.options.__file = "Clipboard.vue";
        t.a = r.exports
    }
});