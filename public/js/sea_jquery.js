define(function (require, e, t) {
    (function (e, n) {
        var i, r, o = e.document, s = e.location, a = e.navigator, l = e.jQuery, u = e.$, f = Array.prototype.push, c = Array.prototype.slice, p = Array.prototype.indexOf, d = Object.prototype.toString, h = Object.prototype.hasOwnProperty, g = String.prototype.trim, m = function (e, t) {
            return new m.fn.init(e, t, i)
        }, y = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, v = /\S/, b = /\s+/, x = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, w = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, T = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, N = /^[\],:{}\s]*$/, C = /(?:^|:|,)(?:\s*\[)+/g, k = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, E = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g, S = /^-ms-/, A = /-([\da-z])/gi, j = function (e, t) {
            return (t + "").toUpperCase()
        }, D = function () {
            if (o.addEventListener) {
                o.removeEventListener("DOMContentLoaded", D, false);
                m.ready()
            } else if (o.readyState === "complete") {
                o.detachEvent("onreadystatechange", D);
                m.ready()
            }
        }, L = {};
        m.fn = m.prototype = {
            constructor: m, init: function (e, t, i) {
                var r, s, a, l;
                if (!e) {
                    return this
                }
                if (e.nodeType) {
                    this.context = this[0] = e;
                    this.length = 1;
                    return this
                }
                if (typeof e === "string") {
                    if (e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3) {
                        r = [null, e, null]
                    } else {
                        r = w.exec(e)
                    }
                    if (r && (r[1] || !t)) {
                        if (r[1]) {
                            t = t instanceof m ? t[0] : t;
                            l = t && t.nodeType ? t.ownerDocument || t : o;
                            e = m.parseHTML(r[1], l, true);
                            if (T.test(r[1]) && m.isPlainObject(t)) {
                                this.attr.call(e, t, true)
                            }
                            return m.merge(this, e)
                        } else {
                            s = o.getElementById(r[2]);
                            if (s && s.parentNode) {
                                if (s.id !== r[2]) {
                                    return i.find(e)
                                }
                                this.length = 1;
                                this[0] = s
                            }
                            this.context = o;
                            this.selector = e;
                            return this
                        }
                    } else if (!t || t.jquery) {
                        return (t || i).find(e)
                    } else {
                        return this.constructor(t).find(e)
                    }
                } else if (m.isFunction(e)) {
                    return i.ready(e)
                }
                if (e.selector !== n) {
                    this.selector = e.selector;
                    this.context = e.context
                }
                return m.makeArray(e, this)
            }, selector: "", jquery: "1.8.3", length: 0, size: function () {
                return this.length
            }, toArray: function () {
                return c.call(this)
            }, get: function (e) {
                return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
            }, pushStack: function (e, t, n) {
                var i = m.merge(this.constructor(), e);
                i.prevObject = this;
                i.context = this.context;
                if (t === "find") {
                    i.selector = this.selector + (this.selector ? " " : "") + n
                } else if (t) {
                    i.selector = this.selector + "." + t + "(" + n + ")"
                }
                return i
            }, each: function (e, t) {
                return m.each(this, e, t)
            }, ready: function (e) {
                m.ready.promise().done(e);
                return this
            }, eq: function (e) {
                e = +e;
                return e === -1 ? this.slice(e) : this.slice(e, e + 1)
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, slice: function () {
                return this.pushStack(c.apply(this, arguments), "slice", c.call(arguments).join(","))
            }, map: function (e) {
                return this.pushStack(m.map(this, function (t, n) {
                    return e.call(t, n, t)
                }))
            }, end: function () {
                return this.prevObject || this.constructor(null)
            }, push: f, sort: [].sort, splice: [].splice
        };
        m.fn.init.prototype = m.fn;
        m.extend = m.fn.extend = function () {
            var e, t, i, r, o, s, a = arguments[0] || {}, l = 1, u = arguments.length, f = false;
            if (typeof a === "boolean") {
                f = a;
                a = arguments[1] || {};
                l = 2
            }
            if (typeof a !== "object" && !m.isFunction(a)) {
                a = {}
            }
            if (u === l) {
                a = this;
                --l
            }
            for (; l < u; l++) {
                if ((e = arguments[l]) != null) {
                    for (t in e) {
                        i = a[t];
                        r = e[t];
                        if (a === r) {
                            continue
                        }
                        if (f && r && (m.isPlainObject(r) || (o = m.isArray(r)))) {
                            if (o) {
                                o = false;
                                s = i && m.isArray(i) ? i : []
                            } else {
                                s = i && m.isPlainObject(i) ? i : {}
                            }
                            a[t] = m.extend(f, s, r)
                        } else if (r !== n) {
                            a[t] = r
                        }
                    }
                }
            }
            return a
        };
        m.extend({
            noConflict: function (t) {
                if (e.$ === m) {
                    e.$ = u
                }
                if (t && e.jQuery === m) {
                    e.jQuery = l
                }
                return m
            }, isReady: false, readyWait: 1, holdReady: function (e) {
                if (e) {
                    m.readyWait++
                } else {
                    m.ready(true)
                }
            }, ready: function (e) {
                if (e === true ? --m.readyWait : m.isReady) {
                    return
                }
                if (!o.body) {
                    return setTimeout(m.ready, 1)
                }
                m.isReady = true;
                if (e !== true && --m.readyWait > 0) {
                    return
                }
                r.resolveWith(o, [m]);
                if (m.fn.trigger) {
                    m(o).trigger("ready").off("ready")
                }
            }, isFunction: function (e) {
                return m.type(e) === "function"
            }, isArray: Array.isArray || function (e) {
                return m.type(e) === "array"
            }, isWindow: function (e) {
                return e != null && e == e.window
            }, isNumeric: function (e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            }, type: function (e) {
                return e == null ? String(e) : L[d.call(e)] || "object"
            }, isPlainObject: function (e) {
                if (!e || m.type(e) !== "object" || e.nodeType || m.isWindow(e)) {
                    return false
                }
                try {
                    if (e.constructor && !h.call(e, "constructor") && !h.call(e.constructor.prototype, "isPrototypeOf")) {
                        return false
                    }
                } catch (t) {
                    return false
                }
                var i;
                for (i in e) {
                }
                return i === n || h.call(e, i)
            }, isEmptyObject: function (e) {
                var t;
                for (t in e) {
                    return false
                }
                return true
            }, error: function (e) {
                throw new Error(e)
            }, parseHTML: function (e, t, n) {
                var i;
                if (!e || typeof e !== "string") {
                    return null
                }
                if (typeof t === "boolean") {
                    n = t;
                    t = 0
                }
                t = t || o;
                if (i = T.exec(e)) {
                    return [t.createElement(i[1])]
                }
                i = m.buildFragment([e], t, n ? null : []);
                return m.merge([], (i.cacheable ? m.clone(i.fragment) : i.fragment).childNodes)
            }, parseJSON: function (t) {
                if (!t || typeof t !== "string") {
                    return null
                }
                t = m.trim(t);
                if (e.JSON && e.JSON.parse) {
                    return e.JSON.parse(t)
                }
                if (N.test(t.replace(k, "@").replace(E, "]").replace(C, ""))) {
                    return new Function("return " + t)()
                }
                m.error("Invalid JSON: " + t)
            }, parseXML: function (t) {
                var i, r;
                if (!t || typeof t !== "string") {
                    return null
                }
                try {
                    if (e.DOMParser) {
                        r = new DOMParser;
                        i = r.parseFromString(t, "text/xml")
                    } else {
                        i = new ActiveXObject("Microsoft.XMLDOM");
                        i.async = "false";
                        i.loadXML(t)
                    }
                } catch (o) {
                    i = n
                }
                if (!i || !i.documentElement || i.getElementsByTagName("parsererror").length) {
                    m.error("Invalid XML: " + t)
                }
                return i
            }, noop: function () {
            }, globalEval: function (t) {
                if (t && v.test(t)) {
                    (e.execScript || function (t) {
                        e["eval"].call(e, t)
                    })(t)
                }
            }, camelCase: function (e) {
                return e.replace(S, "ms-").replace(A, j)
            }, nodeName: function (e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            }, each: function (e, t, i) {
                var r, o = 0, s = e.length, a = s === n || m.isFunction(e);
                if (i) {
                    if (a) {
                        for (r in e) {
                            if (t.apply(e[r], i) === false) {
                                break
                            }
                        }
                    } else {
                        for (; o < s;) {
                            if (t.apply(e[o++], i) === false) {
                                break
                            }
                        }
                    }
                } else {
                    if (a) {
                        for (r in e) {
                            if (t.call(e[r], r, e[r]) === false) {
                                break
                            }
                        }
                    } else {
                        for (; o < s;) {
                            if (t.call(e[o], o, e[o++]) === false) {
                                break
                            }
                        }
                    }
                }
                return e
            }, trim: g && !g.call("﻿ ") ? function (e) {
                return e == null ? "" : g.call(e)
            } : function (e) {
                return e == null ? "" : (e + "").replace(x, "")
            }, makeArray: function (e, t) {
                var n, i = t || [];
                if (e != null) {
                    n = m.type(e);
                    if (e.length == null || n === "string" || n === "function" || n === "regexp" || m.isWindow(e)) {
                        f.call(i, e)
                    } else {
                        m.merge(i, e)
                    }
                }
                return i
            }, inArray: function (e, t, n) {
                var i;
                if (t) {
                    if (p) {
                        return p.call(t, e, n)
                    }
                    i = t.length;
                    n = n ? n < 0 ? Math.max(0, i + n) : n : 0;
                    for (; n < i; n++) {
                        if (n in t && t[n] === e) {
                            return n
                        }
                    }
                }
                return -1
            }, merge: function (e, t) {
                var i = t.length, r = e.length, o = 0;
                if (typeof i === "number") {
                    for (; o < i; o++) {
                        e[r++] = t[o]
                    }
                } else {
                    while (t[o] !== n) {
                        e[r++] = t[o++]
                    }
                }
                e.length = r;
                return e
            }, grep: function (e, t, n) {
                var i, r = [], o = 0, s = e.length;
                n = !!n;
                for (; o < s; o++) {
                    i = !!t(e[o], o);
                    if (n !== i) {
                        r.push(e[o])
                    }
                }
                return r
            }, map: function (e, t, i) {
                var r, o, s = [], a = 0, l = e.length, u = e instanceof m || l !== n && typeof l === "number" && (l > 0 && e[0] && e[l - 1] || l === 0 || m.isArray(e));
                if (u) {
                    for (; a < l; a++) {
                        r = t(e[a], a, i);
                        if (r != null) {
                            s[s.length] = r
                        }
                    }
                } else {
                    for (o in e) {
                        r = t(e[o], o, i);
                        if (r != null) {
                            s[s.length] = r
                        }
                    }
                }
                return s.concat.apply([], s)
            }, guid: 1, proxy: function (e, t) {
                var i, r, o;
                if (typeof t === "string") {
                    i = e[t];
                    t = e;
                    e = i
                }
                if (!m.isFunction(e)) {
                    return n
                }
                r = c.call(arguments, 2);
                o = function () {
                    return e.apply(t, r.concat(c.call(arguments)))
                };
                o.guid = e.guid = e.guid || m.guid++;
                return o
            }, access: function (e, t, i, r, o, s, a) {
                var l, u = i == null, f = 0, c = e.length;
                if (i && typeof i === "object") {
                    for (f in i) {
                        m.access(e, t, f, i[f], 1, s, r)
                    }
                    o = 1
                } else if (r !== n) {
                    l = a === n && m.isFunction(r);
                    if (u) {
                        if (l) {
                            l = t;
                            t = function (e, t, n) {
                                return l.call(m(e), n)
                            }
                        } else {
                            t.call(e, r);
                            t = null
                        }
                    }
                    if (t) {
                        for (; f < c; f++) {
                            t(e[f], i, l ? r.call(e[f], f, t(e[f], i)) : r, a)
                        }
                    }
                    o = 1
                }
                return o ? e : u ? t.call(e) : c ? t(e[0], i) : s
            }, now: function () {
                return (new Date).getTime()
            }
        });
        m.ready.promise = function (t) {
            if (!r) {
                r = m.Deferred();
                if (o.readyState === "complete") {
                    setTimeout(m.ready, 1)
                } else if (o.addEventListener) {
                    o.addEventListener("DOMContentLoaded", D, false);
                    e.addEventListener("load", m.ready, false)
                } else {
                    o.attachEvent("onreadystatechange", D);
                    e.attachEvent("onload", m.ready);
                    var n = false;
                    try {
                        n = e.frameElement == null && o.documentElement
                    } catch (i) {
                    }
                    if (n && n.doScroll) {
                        (function s() {
                            if (!m.isReady) {
                                try {
                                    n.doScroll("left")
                                } catch (e) {
                                    return setTimeout(s, 50)
                                }
                                m.ready()
                            }
                        })()
                    }
                }
            }
            return r.promise(t)
        };
        m.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (e, t) {
            L["[object " + t + "]"] = t.toLowerCase()
        });
        i = m(o);
        var H = {};

        function F(e) {
            var t = H[e] = {};
            m.each(e.split(b), function (e, n) {
                t[n] = true
            });
            return t
        }

        m.Callbacks = function (e) {
            e = typeof e === "string" ? H[e] || F(e) : m.extend({}, e);
            var t, i, r, o, s, a, l = [], u = !e.once && [], f = function (n) {
                t = e.memory && n;
                i = true;
                a = o || 0;
                o = 0;
                s = l.length;
                r = true;
                for (; l && a < s; a++) {
                    if (l[a].apply(n[0], n[1]) === false && e.stopOnFalse) {
                        t = false;
                        break
                    }
                }
                r = false;
                if (l) {
                    if (u) {
                        if (u.length) {
                            f(u.shift())
                        }
                    } else if (t) {
                        l = []
                    } else {
                        c.disable()
                    }
                }
            }, c = {
                add: function () {
                    if (l) {
                        var n = l.length;
                        (function i(t) {
                            m.each(t, function (t, n) {
                                var r = m.type(n);
                                if (r === "function") {
                                    if (!e.unique || !c.has(n)) {
                                        l.push(n)
                                    }
                                } else if (n && n.length && r !== "string") {
                                    i(n)
                                }
                            })
                        })(arguments);
                        if (r) {
                            s = l.length
                        } else if (t) {
                            o = n;
                            f(t)
                        }
                    }
                    return this
                }, remove: function () {
                    if (l) {
                        m.each(arguments, function (e, t) {
                            var n;
                            while ((n = m.inArray(t, l, n)) > -1) {
                                l.splice(n, 1);
                                if (r) {
                                    if (n <= s) {
                                        s--
                                    }
                                    if (n <= a) {
                                        a--
                                    }
                                }
                            }
                        })
                    }
                    return this
                }, has: function (e) {
                    return m.inArray(e, l) > -1
                }, empty: function () {
                    l = [];
                    return this
                }, disable: function () {
                    l = u = t = n;
                    return this
                }, disabled: function () {
                    return !l
                }, lock: function () {
                    u = n;
                    if (!t) {
                        c.disable()
                    }
                    return this
                }, locked: function () {
                    return !u
                }, fireWith: function (e, t) {
                    t = t || [];
                    t = [e, t.slice ? t.slice() : t];
                    if (l && (!i || u)) {
                        if (r) {
                            u.push(t)
                        } else {
                            f(t)
                        }
                    }
                    return this
                }, fire: function () {
                    c.fireWith(this, arguments);
                    return this
                }, fired: function () {
                    return !!i
                }
            };
            return c
        };
        m.extend({
            Deferred: function (e) {
                var t = [["resolve", "done", m.Callbacks("once memory"), "resolved"], ["reject", "fail", m.Callbacks("once memory"), "rejected"], ["notify", "progress", m.Callbacks("memory")]], n = "pending", i = {
                    state: function () {
                        return n
                    }, always: function () {
                        r.done(arguments).fail(arguments);
                        return this
                    }, then: function () {
                        var e = arguments;
                        return m.Deferred(function (n) {
                            m.each(t, function (t, i) {
                                var o = i[0], s = e[t];
                                r[i[1]](m.isFunction(s) ? function () {
                                    var e = s.apply(this, arguments);
                                    if (e && m.isFunction(e.promise)) {
                                        e.promise().done(n.resolve).fail(n.reject).progress(n.notify)
                                    } else {
                                        n[o + "With"](this === r ? n : this, [e])
                                    }
                                } : n[o])
                            });
                            e = null
                        }).promise()
                    }, promise: function (e) {
                        return e != null ? m.extend(e, i) : i
                    }
                }, r = {};
                i.pipe = i.then;
                m.each(t, function (e, o) {
                    var s = o[2], a = o[3];
                    i[o[1]] = s.add;
                    if (a) {
                        s.add(function () {
                            n = a
                        }, t[e ^ 1][2].disable, t[2][2].lock)
                    }
                    r[o[0]] = s.fire;
                    r[o[0] + "With"] = s.fireWith
                });
                i.promise(r);
                if (e) {
                    e.call(r, r)
                }
                return r
            }, when: function (e) {
                var t = 0, n = c.call(arguments), i = n.length, r = i !== 1 || e && m.isFunction(e.promise) ? i : 0, o = r === 1 ? e : m.Deferred(), s = function (e, t, n) {
                    return function (i) {
                        t[e] = this;
                        n[e] = arguments.length > 1 ? c.call(arguments) : i;
                        if (n === a) {
                            o.notifyWith(t, n)
                        } else if (!--r) {
                            o.resolveWith(t, n)
                        }
                    }
                }, a, l, u;
                if (i > 1) {
                    a = new Array(i);
                    l = new Array(i);
                    u = new Array(i);
                    for (; t < i; t++) {
                        if (n[t] && m.isFunction(n[t].promise)) {
                            n[t].promise().done(s(t, u, n)).fail(o.reject).progress(s(t, l, a))
                        } else {
                            --r
                        }
                    }
                }
                if (!r) {
                    o.resolveWith(u, n)
                }
                return o.promise()
            }
        });
        m.support = function () {
            var t, n, i, r, s, a, l, u, f, c, p, d = o.createElement("div");
            d.setAttribute("className", "t");
            d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
            n = d.getElementsByTagName("*");
            i = d.getElementsByTagName("a")[0];
            if (!n || !i || !n.length) {
                return {}
            }
            r = o.createElement("select");
            s = r.appendChild(o.createElement("option"));
            a = d.getElementsByTagName("input")[0];
            i.style.cssText = "top:1px;float:left;opacity:.5";
            t = {
                leadingWhitespace: d.firstChild.nodeType === 3,
                tbody: !d.getElementsByTagName("tbody").length,
                htmlSerialize: !!d.getElementsByTagName("link").length,
                style: /top/.test(i.getAttribute("style")),
                hrefNormalized: i.getAttribute("href") === "/a",
                opacity: /^0.5/.test(i.style.opacity),
                cssFloat: !!i.style.cssFloat,
                checkOn: a.value === "on",
                optSelected: s.selected,
                getSetAttribute: d.className !== "t",
                enctype: !!o.createElement("form").enctype,
                html5Clone: o.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>",
                boxModel: o.compatMode === "CSS1Compat",
                submitBubbles: true,
                changeBubbles: true,
                focusinBubbles: false,
                deleteExpando: true,
                noCloneEvent: true,
                inlineBlockNeedsLayout: false,
                shrinkWrapBlocks: false,
                reliableMarginRight: true,
                boxSizingReliable: true,
                pixelPosition: false
            };
            a.checked = true;
            t.noCloneChecked = a.cloneNode(true).checked;
            r.disabled = true;
            t.optDisabled = !s.disabled;
            try {
                delete d.test
            } catch (h) {
                t.deleteExpando = false
            }
            if (!d.addEventListener && d.attachEvent && d.fireEvent) {
                d.attachEvent("onclick", p = function () {
                    t.noCloneEvent = false
                });
                d.cloneNode(true).fireEvent("onclick");
                d.detachEvent("onclick", p)
            }
            a = o.createElement("input");
            a.value = "t";
            a.setAttribute("type", "radio");
            t.radioValue = a.value === "t";
            a.setAttribute("checked", "checked");
            a.setAttribute("name", "t");
            d.appendChild(a);
            l = o.createDocumentFragment();
            l.appendChild(d.lastChild);
            t.checkClone = l.cloneNode(true).cloneNode(true).lastChild.checked;
            t.appendChecked = a.checked;
            l.removeChild(a);
            l.appendChild(d);
            if (d.attachEvent) {
                for (f in{submit: true, change: true, focusin: true}) {
                    u = "on" + f;
                    c = u in d;
                    if (!c) {
                        d.setAttribute(u, "return;");
                        c = typeof d[u] === "function"
                    }
                    t[f + "Bubbles"] = c
                }
            }
            m(function () {
                var n, i, r, s, a = "padding:0;margin:0;border:0;display:block;overflow:hidden;", l = o.getElementsByTagName("body")[0];
                if (!l) {
                    return
                }
                n = o.createElement("div");
                n.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px";
                l.insertBefore(n, l.firstChild);
                i = o.createElement("div");
                n.appendChild(i);
                i.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
                r = i.getElementsByTagName("td");
                r[0].style.cssText = "padding:0;margin:0;border:0;display:none";
                c = r[0].offsetHeight === 0;
                r[0].style.display = "";
                r[1].style.display = "none";
                t.reliableHiddenOffsets = c && r[0].offsetHeight === 0;
                i.innerHTML = "";
                i.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
                t.boxSizing = i.offsetWidth === 4;
                t.doesNotIncludeMarginInBodyOffset = l.offsetTop !== 1;
                if (e.getComputedStyle) {
                    t.pixelPosition = (e.getComputedStyle(i, null) || {}).top !== "1%";
                    t.boxSizingReliable = (e.getComputedStyle(i, null) || {width: "4px"}).width === "4px";
                    s = o.createElement("div");
                    s.style.cssText = i.style.cssText = a;
                    s.style.marginRight = s.style.width = "0";
                    i.style.width = "1px";
                    i.appendChild(s);
                    t.reliableMarginRight = !parseFloat((e.getComputedStyle(s, null) || {}).marginRight)
                }
                if (typeof i.style.zoom !== "undefined") {
                    i.innerHTML = "";
                    i.style.cssText = a + "width:1px;padding:1px;display:inline;zoom:1";
                    t.inlineBlockNeedsLayout = i.offsetWidth === 3;
                    i.style.display = "block";
                    i.style.overflow = "visible";
                    i.innerHTML = "<div></div>";
                    i.firstChild.style.width = "5px";
                    t.shrinkWrapBlocks = i.offsetWidth !== 3;
                    n.style.zoom = 1
                }
                l.removeChild(n);
                n = i = r = s = null
            });
            l.removeChild(d);
            n = i = r = s = a = l = d = null;
            return t
        }();
        var M = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, O = /([A-Z])/g;
        m.extend({
            cache: {},
            deletedIds: [],
            uuid: 0,
            expando: "jQuery" + (m.fn.jquery + Math.random()).replace(/\D/g, ""),
            noData: {embed: true, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: true},
            hasData: function (e) {
                e = e.nodeType ? m.cache[e[m.expando]] : e[m.expando];
                return !!e && !q(e)
            },
            data: function (e, t, i, r) {
                if (!m.acceptData(e)) {
                    return
                }
                var o, s, a = m.expando, l = typeof t === "string", u = e.nodeType, f = u ? m.cache : e, c = u ? e[a] : e[a] && a;
                if ((!c || !f[c] || !r && !f[c].data) && l && i === n) {
                    return
                }
                if (!c) {
                    if (u) {
                        e[a] = c = m.deletedIds.pop() || m.guid++
                    } else {
                        c = a
                    }
                }
                if (!f[c]) {
                    f[c] = {};
                    if (!u) {
                        f[c].toJSON = m.noop
                    }
                }
                if (typeof t === "object" || typeof t === "function") {
                    if (r) {
                        f[c] = m.extend(f[c], t)
                    } else {
                        f[c].data = m.extend(f[c].data, t)
                    }
                }
                o = f[c];
                if (!r) {
                    if (!o.data) {
                        o.data = {}
                    }
                    o = o.data
                }
                if (i !== n) {
                    o[m.camelCase(t)] = i
                }
                if (l) {
                    s = o[t];
                    if (s == null) {
                        s = o[m.camelCase(t)]
                    }
                } else {
                    s = o
                }
                return s
            },
            removeData: function (e, t, n) {
                if (!m.acceptData(e)) {
                    return
                }
                var i, r, o, s = e.nodeType, a = s ? m.cache : e, l = s ? e[m.expando] : m.expando;
                if (!a[l]) {
                    return
                }
                if (t) {
                    i = n ? a[l] : a[l].data;
                    if (i) {
                        if (!m.isArray(t)) {
                            if (t in i) {
                                t = [t]
                            } else {
                                t = m.camelCase(t);
                                if (t in i) {
                                    t = [t]
                                } else {
                                    t = t.split(" ")
                                }
                            }
                        }
                        for (r = 0, o = t.length; r < o; r++) {
                            delete i[t[r]]
                        }
                        if (!(n ? q : m.isEmptyObject)(i)) {
                            return
                        }
                    }
                }
                if (!n) {
                    delete a[l].data;
                    if (!q(a[l])) {
                        return
                    }
                }
                if (s) {
                    m.cleanData([e], true)
                } else if (m.support.deleteExpando || a != a.window) {
                    delete a[l]
                } else {
                    a[l] = null
                }
            },
            _data: function (e, t, n) {
                return m.data(e, t, n, true)
            },
            acceptData: function (e) {
                var t = e.nodeName && m.noData[e.nodeName.toLowerCase()];
                return !t || t !== true && e.getAttribute("classid") === t
            }
        });
        m.fn.extend({
            data: function (e, t) {
                var i, r, o, s, a, l = this[0], u = 0, f = null;
                if (e === n) {
                    if (this.length) {
                        f = m.data(l);
                        if (l.nodeType === 1 && !m._data(l, "parsedAttrs")) {
                            o = l.attributes;
                            for (a = o.length; u < a; u++) {
                                s = o[u].name;
                                if (!s.indexOf("data-")) {
                                    s = m.camelCase(s.substring(5));
                                    _(l, s, f[s])
                                }
                            }
                            m._data(l, "parsedAttrs", true)
                        }
                    }
                    return f
                }
                if (typeof e === "object") {
                    return this.each(function () {
                        m.data(this, e)
                    })
                }
                i = e.split(".", 2);
                i[1] = i[1] ? "." + i[1] : "";
                r = i[1] + "!";
                return m.access(this, function (t) {
                    if (t === n) {
                        f = this.triggerHandler("getData" + r, [i[0]]);
                        if (f === n && l) {
                            f = m.data(l, e);
                            f = _(l, e, f)
                        }
                        return f === n && i[1] ? this.data(i[0]) : f
                    }
                    i[1] = t;
                    this.each(function () {
                        var n = m(this);
                        n.triggerHandler("setData" + r, i);
                        m.data(this, e, t);
                        n.triggerHandler("changeData" + r, i)
                    })
                }, null, t, arguments.length > 1, null, false)
            }, removeData: function (e) {
                return this.each(function () {
                    m.removeData(this, e)
                })
            }
        });
        function _(e, t, i) {
            if (i === n && e.nodeType === 1) {
                var r = "data-" + t.replace(O, "-$1").toLowerCase();
                i = e.getAttribute(r);
                if (typeof i === "string") {
                    try {
                        i = i === "true" ? true : i === "false" ? false : i === "null" ? null : +i + "" === i ? +i : M.test(i) ? m.parseJSON(i) : i
                    } catch (o) {
                    }
                    m.data(e, t, i)
                } else {
                    i = n
                }
            }
            return i
        }

        function q(e) {
            var t;
            for (t in e) {
                if (t === "data" && m.isEmptyObject(e[t])) {
                    continue
                }
                if (t !== "toJSON") {
                    return false
                }
            }
            return true
        }

        m.extend({
            queue: function (e, t, n) {
                var i;
                if (e) {
                    t = (t || "fx") + "queue";
                    i = m._data(e, t);
                    if (n) {
                        if (!i || m.isArray(n)) {
                            i = m._data(e, t, m.makeArray(n))
                        } else {
                            i.push(n)
                        }
                    }
                    return i || []
                }
            }, dequeue: function (e, t) {
                t = t || "fx";
                var n = m.queue(e, t), i = n.length, r = n.shift(), o = m._queueHooks(e, t), s = function () {
                    m.dequeue(e, t)
                };
                if (r === "inprogress") {
                    r = n.shift();
                    i--
                }
                if (r) {
                    if (t === "fx") {
                        n.unshift("inprogress")
                    }
                    delete o.stop;
                    r.call(e, s, o)
                }
                if (!i && o) {
                    o.empty.fire()
                }
            }, _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return m._data(e, n) || m._data(e, n, {
                        empty: m.Callbacks("once memory").add(function () {
                            m.removeData(e, t + "queue", true);
                            m.removeData(e, n, true)
                        })
                    })
            }
        });
        m.fn.extend({
            queue: function (e, t) {
                var i = 2;
                if (typeof e !== "string") {
                    t = e;
                    e = "fx";
                    i--
                }
                if (arguments.length < i) {
                    return m.queue(this[0], e)
                }
                return t === n ? this : this.each(function () {
                    var n = m.queue(this, e, t);
                    m._queueHooks(this, e);
                    if (e === "fx" && n[0] !== "inprogress") {
                        m.dequeue(this, e)
                    }
                })
            }, dequeue: function (e) {
                return this.each(function () {
                    m.dequeue(this, e)
                })
            }, delay: function (e, t) {
                e = m.fx ? m.fx.speeds[e] || e : e;
                t = t || "fx";
                return this.queue(t, function (t, n) {
                    var i = setTimeout(t, e);
                    n.stop = function () {
                        clearTimeout(i)
                    }
                })
            }, clearQueue: function (e) {
                return this.queue(e || "fx", [])
            }, promise: function (e, t) {
                var i, r = 1, o = m.Deferred(), s = this, a = this.length, l = function () {
                    if (!--r) {
                        o.resolveWith(s, [s])
                    }
                };
                if (typeof e !== "string") {
                    t = e;
                    e = n
                }
                e = e || "fx";
                while (a--) {
                    i = m._data(s[a], e + "queueHooks");
                    if (i && i.empty) {
                        r++;
                        i.empty.add(l)
                    }
                }
                l();
                return o.promise(t)
            }
        });
        var B, W, P, R = /[\t\r\n]/g, $ = /\r/g, I = /^(?:button|input)$/i, z = /^(?:button|input|object|select|textarea)$/i, X = /^a(?:rea|)$/i, U = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, Y = m.support.getSetAttribute;
        m.fn.extend({
            attr: function (e, t) {
                return m.access(this, m.attr, e, t, arguments.length > 1)
            }, removeAttr: function (e) {
                return this.each(function () {
                    m.removeAttr(this, e)
                })
            }, prop: function (e, t) {
                return m.access(this, m.prop, e, t, arguments.length > 1)
            }, removeProp: function (e) {
                e = m.propFix[e] || e;
                return this.each(function () {
                    try {
                        this[e] = n;
                        delete this[e]
                    } catch (t) {
                    }
                })
            }, addClass: function (e) {
                var t, n, i, r, o, s, a;
                if (m.isFunction(e)) {
                    return this.each(function (t) {
                        m(this).addClass(e.call(this, t, this.className))
                    })
                }
                if (e && typeof e === "string") {
                    t = e.split(b);
                    for (n = 0, i = this.length; n < i; n++) {
                        r = this[n];
                        if (r.nodeType === 1) {
                            if (!r.className && t.length === 1) {
                                r.className = e
                            } else {
                                o = " " + r.className + " ";
                                for (s = 0, a = t.length; s < a; s++) {
                                    if (o.indexOf(" " + t[s] + " ") < 0) {
                                        o += t[s] + " "
                                    }
                                }
                                r.className = m.trim(o)
                            }
                        }
                    }
                }
                return this
            }, removeClass: function (e) {
                var t, i, r, o, s, a, l;
                if (m.isFunction(e)) {
                    return this.each(function (t) {
                        m(this).removeClass(e.call(this, t, this.className))
                    })
                }
                if (e && typeof e === "string" || e === n) {
                    t = (e || "").split(b);
                    for (a = 0, l = this.length; a < l; a++) {
                        r = this[a];
                        if (r.nodeType === 1 && r.className) {
                            i = (" " + r.className + " ").replace(R, " ");
                            for (o = 0, s = t.length; o < s; o++) {
                                while (i.indexOf(" " + t[o] + " ") >= 0) {
                                    i = i.replace(" " + t[o] + " ", " ")
                                }
                            }
                            r.className = e ? m.trim(i) : ""
                        }
                    }
                }
                return this
            }, toggleClass: function (e, t) {
                var n = typeof e, i = typeof t === "boolean";
                if (m.isFunction(e)) {
                    return this.each(function (n) {
                        m(this).toggleClass(e.call(this, n, this.className, t), t)
                    })
                }
                return this.each(function () {
                    if (n === "string") {
                        var r, o = 0, s = m(this), a = t, l = e.split(b);
                        while (r = l[o++]) {
                            a = i ? a : !s.hasClass(r);
                            s[a ? "addClass" : "removeClass"](r)
                        }
                    } else if (n === "undefined" || n === "boolean") {
                        if (this.className) {
                            m._data(this, "__className__", this.className)
                        }
                        this.className = this.className || e === false ? "" : m._data(this, "__className__") || ""
                    }
                })
            }, hasClass: function (e) {
                var t = " " + e + " ", n = 0, i = this.length;
                for (; n < i; n++) {
                    if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(R, " ").indexOf(t) >= 0) {
                        return true
                    }
                }
                return false
            }, val: function (e) {
                var t, i, r, o = this[0];
                if (!arguments.length) {
                    if (o) {
                        t = m.valHooks[o.type] || m.valHooks[o.nodeName.toLowerCase()];
                        if (t && "get"in t && (i = t.get(o, "value")) !== n) {
                            return i
                        }
                        i = o.value;
                        return typeof i === "string" ? i.replace($, "") : i == null ? "" : i
                    }
                    return
                }
                r = m.isFunction(e);
                return this.each(function (i) {
                    var o, s = m(this);
                    if (this.nodeType !== 1) {
                        return
                    }
                    if (r) {
                        o = e.call(this, i, s.val())
                    } else {
                        o = e
                    }
                    if (o == null) {
                        o = ""
                    } else if (typeof o === "number") {
                        o += ""
                    } else if (m.isArray(o)) {
                        o = m.map(o, function (e) {
                            return e == null ? "" : e + ""
                        })
                    }
                    t = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()];
                    if (!t || !("set"in t) || t.set(this, o, "value") === n) {
                        this.value = o
                    }
                })
            }
        });
        m.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = e.attributes.value;
                        return !t || t.specified ? e.value : e.text
                    }
                }, select: {
                    get: function (e) {
                        var t, n, i = e.options, r = e.selectedIndex, o = e.type === "select-one" || r < 0, s = o ? null : [], a = o ? r + 1 : i.length, l = r < 0 ? a : o ? r : 0;
                        for (; l < a; l++) {
                            n = i[l];
                            if ((n.selected || l === r) && (m.support.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !m.nodeName(n.parentNode, "optgroup"))) {
                                t = m(n).val();
                                if (o) {
                                    return t
                                }
                                s.push(t)
                            }
                        }
                        return s
                    }, set: function (e, t) {
                        var n = m.makeArray(t);
                        m(e).find("option").each(function () {
                            this.selected = m.inArray(m(this).val(), n) >= 0
                        });
                        if (!n.length) {
                            e.selectedIndex = -1
                        }
                        return n
                    }
                }
            },
            attrFn: {},
            attr: function (e, t, i, r) {
                var o, s, a, l = e.nodeType;
                if (!e || l === 3 || l === 8 || l === 2) {
                    return
                }
                if (r && m.isFunction(m.fn[t])) {
                    return m(e)[t](i)
                }
                if (typeof e.getAttribute === "undefined") {
                    return m.prop(e, t, i)
                }
                a = l !== 1 || !m.isXMLDoc(e);
                if (a) {
                    t = t.toLowerCase();
                    s = m.attrHooks[t] || (U.test(t) ? W : B)
                }
                if (i !== n) {
                    if (i === null) {
                        m.removeAttr(e, t);
                        return
                    } else if (s && "set"in s && a && (o = s.set(e, i, t)) !== n) {
                        return o
                    } else {
                        e.setAttribute(t, i + "");
                        return i
                    }
                } else if (s && "get"in s && a && (o = s.get(e, t)) !== null) {
                    return o
                } else {
                    o = e.getAttribute(t);
                    return o === null ? n : o
                }
            },
            removeAttr: function (e, t) {
                var n, i, r, o, s = 0;
                if (t && e.nodeType === 1) {
                    i = t.split(b);
                    for (; s < i.length; s++) {
                        r = i[s];
                        if (r) {
                            n = m.propFix[r] || r;
                            o = U.test(r);
                            if (!o) {
                                m.attr(e, r, "")
                            }
                            e.removeAttribute(Y ? r : n);
                            if (o && n in e) {
                                e[n] = false
                            }
                        }
                    }
                }
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (I.test(e.nodeName) && e.parentNode) {
                            m.error("type property can't be changed")
                        } else if (!m.support.radioValue && t === "radio" && m.nodeName(e, "input")) {
                            var n = e.value;
                            e.setAttribute("type", t);
                            if (n) {
                                e.value = n
                            }
                            return t
                        }
                    }
                }, value: {
                    get: function (e, t) {
                        if (B && m.nodeName(e, "button")) {
                            return B.get(e, t)
                        }
                        return t in e ? e.value : null
                    }, set: function (e, t, n) {
                        if (B && m.nodeName(e, "button")) {
                            return B.set(e, t, n)
                        }
                        e.value = t
                    }
                }
            },
            propFix: {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            },
            prop: function (e, t, i) {
                var r, o, s, a = e.nodeType;
                if (!e || a === 3 || a === 8 || a === 2) {
                    return
                }
                s = a !== 1 || !m.isXMLDoc(e);
                if (s) {
                    t = m.propFix[t] || t;
                    o = m.propHooks[t]
                }
                if (i !== n) {
                    if (o && "set"in o && (r = o.set(e, i, t)) !== n) {
                        return r
                    } else {
                        return e[t] = i
                    }
                } else {
                    if (o && "get"in o && (r = o.get(e, t)) !== null) {
                        return r
                    } else {
                        return e[t]
                    }
                }
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = e.getAttributeNode("tabindex");
                        return t && t.specified ? parseInt(t.value, 10) : z.test(e.nodeName) || X.test(e.nodeName) && e.href ? 0 : n
                    }
                }
            }
        });
        W = {
            get: function (e, t) {
                var i, r = m.prop(e, t);
                return r === true || typeof r !== "boolean" && (i = e.getAttributeNode(t)) && i.nodeValue !== false ? t.toLowerCase() : n
            }, set: function (e, t, n) {
                var i;
                if (t === false) {
                    m.removeAttr(e, n)
                } else {
                    i = m.propFix[n] || n;
                    if (i in e) {
                        e[i] = true
                    }
                    e.setAttribute(n, n.toLowerCase())
                }
                return n
            }
        };
        if (!Y) {
            P = {name: true, id: true, coords: true};
            B = m.valHooks.button = {
                get: function (e, t) {
                    var i;
                    i = e.getAttributeNode(t);
                    return i && (P[t] ? i.value !== "" : i.specified) ? i.value : n
                }, set: function (e, t, n) {
                    var i = e.getAttributeNode(n);
                    if (!i) {
                        i = o.createAttribute(n);
                        e.setAttributeNode(i)
                    }
                    return i.value = t + ""
                }
            };
            m.each(["width", "height"], function (e, t) {
                m.attrHooks[t] = m.extend(m.attrHooks[t], {
                    set: function (e, n) {
                        if (n === "") {
                            e.setAttribute(t, "auto");
                            return n
                        }
                    }
                })
            });
            m.attrHooks.contenteditable = {
                get: B.get, set: function (e, t, n) {
                    if (t === "") {
                        t = "false"
                    }
                    B.set(e, t, n)
                }
            }
        }
        if (!m.support.hrefNormalized) {
            m.each(["href", "src", "width", "height"], function (e, t) {
                m.attrHooks[t] = m.extend(m.attrHooks[t], {
                    get: function (e) {
                        var i = e.getAttribute(t, 2);
                        return i === null ? n : i
                    }
                })
            })
        }
        if (!m.support.style) {
            m.attrHooks.style = {
                get: function (e) {
                    return e.style.cssText.toLowerCase() || n
                }, set: function (e, t) {
                    return e.style.cssText = t + ""
                }
            }
        }
        if (!m.support.optSelected) {
            m.propHooks.selected = m.extend(m.propHooks.selected, {
                get: function (e) {
                    var t = e.parentNode;
                    if (t) {
                        t.selectedIndex;
                        if (t.parentNode) {
                            t.parentNode.selectedIndex
                        }
                    }
                    return null
                }
            })
        }
        if (!m.support.enctype) {
            m.propFix.enctype = "encoding"
        }
        if (!m.support.checkOn) {
            m.each(["radio", "checkbox"], function () {
                m.valHooks[this] = {
                    get: function (e) {
                        return e.getAttribute("value") === null ? "on" : e.value
                    }
                }
            })
        }
        m.each(["radio", "checkbox"], function () {
            m.valHooks[this] = m.extend(m.valHooks[this], {
                set: function (e, t) {
                    if (m.isArray(t)) {
                        return e.checked = m.inArray(m(e).val(), t) >= 0
                    }
                }
            })
        });
        var V = /^(?:textarea|input|select)$/i, J = /^([^\.]*|)(?:\.(.+)|)$/, G = /(?:^|\s)hover(\.\S+|)\b/, K = /^key/, Q = /^(?:mouse|contextmenu)|click/, Z = /^(?:focusinfocus|focusoutblur)$/, et = function (e) {
            return m.event.special.hover ? e : e.replace(G, "mouseenter$1 mouseleave$1")
        };
        m.event = {
            add: function (e, t, i, r, o) {
                var s, a, l, u, f, c, p, d, h, g, y;
                if (e.nodeType === 3 || e.nodeType === 8 || !t || !i || !(s = m._data(e))) {
                    return
                }
                if (i.handler) {
                    h = i;
                    i = h.handler;
                    o = h.selector
                }
                if (!i.guid) {
                    i.guid = m.guid++
                }
                l = s.events;
                if (!l) {
                    s.events = l = {}
                }
                a = s.handle;
                if (!a) {
                    s.handle = a = function (e) {
                        return typeof m !== "undefined" && (!e || m.event.triggered !== e.type) ? m.event.dispatch.apply(a.elem, arguments) : n
                    };
                    a.elem = e
                }
                t = m.trim(et(t)).split(" ");
                for (u = 0; u < t.length; u++) {
                    f = J.exec(t[u]) || [];
                    c = f[1];
                    p = (f[2] || "").split(".").sort();
                    y = m.event.special[c] || {};
                    c = (o ? y.delegateType : y.bindType) || c;
                    y = m.event.special[c] || {};
                    d = m.extend({
                        type: c,
                        origType: f[1],
                        data: r,
                        handler: i,
                        guid: i.guid,
                        selector: o,
                        needsContext: o && m.expr.match.needsContext.test(o),
                        namespace: p.join(".")
                    }, h);
                    g = l[c];
                    if (!g) {
                        g = l[c] = [];
                        g.delegateCount = 0;
                        if (!y.setup || y.setup.call(e, r, p, a) === false) {
                            if (e.addEventListener) {
                                e.addEventListener(c, a, false)
                            } else if (e.attachEvent) {
                                e.attachEvent("on" + c, a)
                            }
                        }
                    }
                    if (y.add) {
                        y.add.call(e, d);
                        if (!d.handler.guid) {
                            d.handler.guid = i.guid
                        }
                    }
                    if (o) {
                        g.splice(g.delegateCount++, 0, d)
                    } else {
                        g.push(d)
                    }
                    m.event.global[c] = true
                }
                e = null
            },
            global: {},
            remove: function (e, t, n, i, r) {
                var o, s, a, l, u, f, c, p, d, h, g, y = m.hasData(e) && m._data(e);
                if (!y || !(p = y.events)) {
                    return
                }
                t = m.trim(et(t || "")).split(" ");
                for (o = 0; o < t.length; o++) {
                    s = J.exec(t[o]) || [];
                    a = l = s[1];
                    u = s[2];
                    if (!a) {
                        for (a in p) {
                            m.event.remove(e, a + t[o], n, i, true)
                        }
                        continue
                    }
                    d = m.event.special[a] || {};
                    a = (i ? d.delegateType : d.bindType) || a;
                    h = p[a] || [];
                    f = h.length;
                    u = u ? new RegExp("(^|\\.)" + u.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                    for (c = 0; c < h.length; c++) {
                        g = h[c];
                        if ((r || l === g.origType) && (!n || n.guid === g.guid) && (!u || u.test(g.namespace)) && (!i || i === g.selector || i === "**" && g.selector)) {
                            h.splice(c--, 1);
                            if (g.selector) {
                                h.delegateCount--
                            }
                            if (d.remove) {
                                d.remove.call(e, g)
                            }
                        }
                    }
                    if (h.length === 0 && f !== h.length) {
                        if (!d.teardown || d.teardown.call(e, u, y.handle) === false) {
                            m.removeEvent(e, a, y.handle)
                        }
                        delete p[a]
                    }
                }
                if (m.isEmptyObject(p)) {
                    delete y.handle;
                    m.removeData(e, "events", true)
                }
            },
            customEvent: {getData: true, setData: true, changeData: true},
            trigger: function (t, i, r, s) {
                if (r && (r.nodeType === 3 || r.nodeType === 8)) {
                    return
                }
                var a, l, u, f, c, p, d, h, g, y, v = t.type || t, b = [];
                if (Z.test(v + m.event.triggered)) {
                    return
                }
                if (v.indexOf("!") >= 0) {
                    v = v.slice(0, -1);
                    l = true
                }
                if (v.indexOf(".") >= 0) {
                    b = v.split(".");
                    v = b.shift();
                    b.sort()
                }
                if ((!r || m.event.customEvent[v]) && !m.event.global[v]) {
                    return
                }
                t = typeof t === "object" ? t[m.expando] ? t : new m.Event(v, t) : new m.Event(v);
                t.type = v;
                t.isTrigger = true;
                t.exclusive = l;
                t.namespace = b.join(".");
                t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                p = v.indexOf(":") < 0 ? "on" + v : "";
                if (!r) {
                    a = m.cache;
                    for (u in a) {
                        if (a[u].events && a[u].events[v]) {
                            m.event.trigger(t, i, a[u].handle.elem, true)
                        }
                    }
                    return
                }
                t.result = n;
                if (!t.target) {
                    t.target = r
                }
                i = i != null ? m.makeArray(i) : [];
                i.unshift(t);
                d = m.event.special[v] || {};
                if (d.trigger && d.trigger.apply(r, i) === false) {
                    return
                }
                g = [[r, d.bindType || v]];
                if (!s && !d.noBubble && !m.isWindow(r)) {
                    y = d.delegateType || v;
                    f = Z.test(y + v) ? r : r.parentNode;
                    for (c = r; f; f = f.parentNode) {
                        g.push([f, y]);
                        c = f
                    }
                    if (c === (r.ownerDocument || o)) {
                        g.push([c.defaultView || c.parentWindow || e, y])
                    }
                }
                for (u = 0; u < g.length && !t.isPropagationStopped(); u++) {
                    f = g[u][0];
                    t.type = g[u][1];
                    h = (m._data(f, "events") || {})[t.type] && m._data(f, "handle");
                    if (h) {
                        h.apply(f, i)
                    }
                    h = p && f[p];
                    if (h && m.acceptData(f) && h.apply && h.apply(f, i) === false) {
                        t.preventDefault()
                    }
                }
                t.type = v;
                if (!s && !t.isDefaultPrevented()) {
                    if ((!d._default || d._default.apply(r.ownerDocument, i) === false) && !(v === "click" && m.nodeName(r, "a")) && m.acceptData(r)) {
                        if (p && r[v] && (v !== "focus" && v !== "blur" || t.target.offsetWidth !== 0) && !m.isWindow(r)) {
                            c = r[p];
                            if (c) {
                                r[p] = null
                            }
                            m.event.triggered = v;
                            r[v]();
                            m.event.triggered = n;
                            if (c) {
                                r[p] = c
                            }
                        }
                    }
                }
                return t.result
            },
            dispatch: function (t) {
                t = m.event.fix(t || e.event);
                var i, r, o, s, a, l, u, f, p, d, h = (m._data(this, "events") || {})[t.type] || [], g = h.delegateCount, y = c.call(arguments), v = !t.exclusive && !t.namespace, b = m.event.special[t.type] || {}, x = [];
                y[0] = t;
                t.delegateTarget = this;
                if (b.preDispatch && b.preDispatch.call(this, t) === false) {
                    return
                }
                if (g && !(t.button && t.type === "click")) {
                    for (o = t.target; o != this; o = o.parentNode || this) {
                        if (o.disabled !== true || t.type !== "click") {
                            a = {};
                            u = [];
                            for (i = 0; i < g; i++) {
                                f = h[i];
                                p = f.selector;
                                if (a[p] === n) {
                                    a[p] = f.needsContext ? m(p, this).index(o) >= 0 : m.find(p, this, null, [o]).length
                                }
                                if (a[p]) {
                                    u.push(f)
                                }
                            }
                            if (u.length) {
                                x.push({elem: o, matches: u})
                            }
                        }
                    }
                }
                if (h.length > g) {
                    x.push({elem: this, matches: h.slice(g)})
                }
                for (i = 0; i < x.length && !t.isPropagationStopped(); i++) {
                    l = x[i];
                    t.currentTarget = l.elem;
                    for (r = 0; r < l.matches.length && !t.isImmediatePropagationStopped(); r++) {
                        f = l.matches[r];
                        if (v || !t.namespace && !f.namespace || t.namespace_re && t.namespace_re.test(f.namespace)) {
                            t.data = f.data;
                            t.handleObj = f;
                            s = ((m.event.special[f.origType] || {}).handle || f.handler).apply(l.elem, y);
                            if (s !== n) {
                                t.result = s;
                                if (s === false) {
                                    t.preventDefault();
                                    t.stopPropagation()
                                }
                            }
                        }
                    }
                }
                if (b.postDispatch) {
                    b.postDispatch.call(this, t)
                }
                return t.result
            },
            props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                    if (e.which == null) {
                        e.which = t.charCode != null ? t.charCode : t.keyCode
                    }
                    return e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (e, t) {
                    var i, r, s, a = t.button, l = t.fromElement;
                    if (e.pageX == null && t.clientX != null) {
                        i = e.target.ownerDocument || o;
                        r = i.documentElement;
                        s = i.body;
                        e.pageX = t.clientX + (r && r.scrollLeft || s && s.scrollLeft || 0) - (r && r.clientLeft || s && s.clientLeft || 0);
                        e.pageY = t.clientY + (r && r.scrollTop || s && s.scrollTop || 0) - (r && r.clientTop || s && s.clientTop || 0)
                    }
                    if (!e.relatedTarget && l) {
                        e.relatedTarget = l === e.target ? t.toElement : l
                    }
                    if (!e.which && a !== n) {
                        e.which = a & 1 ? 1 : a & 2 ? 3 : a & 4 ? 2 : 0
                    }
                    return e
                }
            },
            fix: function (e) {
                if (e[m.expando]) {
                    return e
                }
                var t, n, i = e, r = m.event.fixHooks[e.type] || {}, s = r.props ? this.props.concat(r.props) : this.props;
                e = m.Event(i);
                for (t = s.length; t;) {
                    n = s[--t];
                    e[n] = i[n]
                }
                if (!e.target) {
                    e.target = i.srcElement || o
                }
                if (e.target.nodeType === 3) {
                    e.target = e.target.parentNode
                }
                e.metaKey = !!e.metaKey;
                return r.filter ? r.filter(e, i) : e
            },
            special: {
                load: {noBubble: true},
                focus: {delegateType: "focusin"},
                blur: {delegateType: "focusout"},
                beforeunload: {
                    setup: function (e, t, n) {
                        if (m.isWindow(this)) {
                            this.onbeforeunload = n
                        }
                    }, teardown: function (e, t) {
                        if (this.onbeforeunload === t) {
                            this.onbeforeunload = null
                        }
                    }
                }
            },
            simulate: function (e, t, n, i) {
                var r = m.extend(new m.Event, n, {type: e, isSimulated: true, originalEvent: {}});
                if (i) {
                    m.event.trigger(r, null, t)
                } else {
                    m.event.dispatch.call(t, r)
                }
                if (r.isDefaultPrevented()) {
                    n.preventDefault()
                }
            }
        };
        m.event.handle = m.event.dispatch;
        m.removeEvent = o.removeEventListener ? function (e, t, n) {
            if (e.removeEventListener) {
                e.removeEventListener(t, n, false)
            }
        } : function (e, t, n) {
            var i = "on" + t;
            if (e.detachEvent) {
                if (typeof e[i] === "undefined") {
                    e[i] = null
                }
                e.detachEvent(i, n)
            }
        };
        m.Event = function (e, t) {
            if (!(this instanceof m.Event)) {
                return new m.Event(e, t)
            }
            if (e && e.type) {
                this.originalEvent = e;
                this.type = e.type;
                this.isDefaultPrevented = e.defaultPrevented || e.returnValue === false || e.getPreventDefault && e.getPreventDefault() ? nt : tt
            } else {
                this.type = e
            }
            if (t) {
                m.extend(this, t)
            }
            this.timeStamp = e && e.timeStamp || m.now();
            this[m.expando] = true
        };
        function tt() {
            return false
        }

        function nt() {
            return true
        }

        m.Event.prototype = {
            preventDefault: function () {
                this.isDefaultPrevented = nt;
                var e = this.originalEvent;
                if (!e) {
                    return
                }
                if (e.preventDefault) {
                    e.preventDefault()
                } else {
                    e.returnValue = false
                }
            }, stopPropagation: function () {
                this.isPropagationStopped = nt;
                var e = this.originalEvent;
                if (!e) {
                    return
                }
                if (e.stopPropagation) {
                    e.stopPropagation()
                }
                e.cancelBubble = true
            }, stopImmediatePropagation: function () {
                this.isImmediatePropagationStopped = nt;
                this.stopPropagation()
            }, isDefaultPrevented: tt, isPropagationStopped: tt, isImmediatePropagationStopped: tt
        };
        m.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (e, t) {
            m.event.special[e] = {
                delegateType: t, bindType: t, handle: function (e) {
                    var n, i = this, r = e.relatedTarget, o = e.handleObj, s = o.selector;
                    if (!r || r !== i && !m.contains(i, r)) {
                        e.type = o.origType;
                        n = o.handler.apply(this, arguments);
                        e.type = t
                    }
                    return n
                }
            }
        });
        if (!m.support.submitBubbles) {
            m.event.special.submit = {
                setup: function () {
                    if (m.nodeName(this, "form")) {
                        return false
                    }
                    m.event.add(this, "click._submit keypress._submit", function (e) {
                        var t = e.target, i = m.nodeName(t, "input") || m.nodeName(t, "button") ? t.form : n;
                        if (i && !m._data(i, "_submit_attached")) {
                            m.event.add(i, "submit._submit", function (e) {
                                e._submit_bubble = true
                            });
                            m._data(i, "_submit_attached", true)
                        }
                    })
                }, postDispatch: function (e) {
                    if (e._submit_bubble) {
                        delete e._submit_bubble;
                        if (this.parentNode && !e.isTrigger) {
                            m.event.simulate("submit", this.parentNode, e, true)
                        }
                    }
                }, teardown: function () {
                    if (m.nodeName(this, "form")) {
                        return false
                    }
                    m.event.remove(this, "._submit")
                }
            }
        }
        if (!m.support.changeBubbles) {
            m.event.special.change = {
                setup: function () {
                    if (V.test(this.nodeName)) {
                        if (this.type === "checkbox" || this.type === "radio") {
                            m.event.add(this, "propertychange._change", function (e) {
                                if (e.originalEvent.propertyName === "checked") {
                                    this._just_changed = true
                                }
                            });
                            m.event.add(this, "click._change", function (e) {
                                if (this._just_changed && !e.isTrigger) {
                                    this._just_changed = false
                                }
                                m.event.simulate("change", this, e, true)
                            })
                        }
                        return false
                    }
                    m.event.add(this, "beforeactivate._change", function (e) {
                        var t = e.target;
                        if (V.test(t.nodeName) && !m._data(t, "_change_attached")) {
                            m.event.add(t, "change._change", function (e) {
                                if (this.parentNode && !e.isSimulated && !e.isTrigger) {
                                    m.event.simulate("change", this.parentNode, e, true)
                                }
                            });
                            m._data(t, "_change_attached", true)
                        }
                    })
                }, handle: function (e) {
                    var t = e.target;
                    if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") {
                        return e.handleObj.handler.apply(this, arguments)
                    }
                }, teardown: function () {
                    m.event.remove(this, "._change");
                    return !V.test(this.nodeName)
                }
            }
        }
        if (!m.support.focusinBubbles) {
            m.each({focus: "focusin", blur: "focusout"}, function (e, t) {
                var n = 0, i = function (e) {
                    m.event.simulate(t, e.target, m.event.fix(e), true)
                };
                m.event.special[t] = {
                    setup: function () {
                        if (n++ === 0) {
                            o.addEventListener(e, i, true)
                        }
                    }, teardown: function () {
                        if (--n === 0) {
                            o.removeEventListener(e, i, true)
                        }
                    }
                }
            })
        }
        m.fn.extend({
            on: function (e, t, i, r, o) {
                var s, a;
                if (typeof e === "object") {
                    if (typeof t !== "string") {
                        i = i || t;
                        t = n
                    }
                    for (a in e) {
                        this.on(a, t, i, e[a], o)
                    }
                    return this
                }
                if (i == null && r == null) {
                    r = t;
                    i = t = n
                } else if (r == null) {
                    if (typeof t === "string") {
                        r = i;
                        i = n
                    } else {
                        r = i;
                        i = t;
                        t = n
                    }
                }
                if (r === false) {
                    r = tt
                } else if (!r) {
                    return this
                }
                if (o === 1) {
                    s = r;
                    r = function (e) {
                        m().off(e);
                        return s.apply(this, arguments)
                    };
                    r.guid = s.guid || (s.guid = m.guid++)
                }
                return this.each(function () {
                    m.event.add(this, e, r, i, t)
                })
            }, one: function (e, t, n, i) {
                return this.on(e, t, n, i, 1)
            }, off: function (e, t, i) {
                var r, o;
                if (e && e.preventDefault && e.handleObj) {
                    r = e.handleObj;
                    m(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler);
                    return this
                }
                if (typeof e === "object") {
                    for (o in e) {
                        this.off(o, t, e[o])
                    }
                    return this
                }
                if (t === false || typeof t === "function") {
                    i = t;
                    t = n
                }
                if (i === false) {
                    i = tt
                }
                return this.each(function () {
                    m.event.remove(this, e, i, t)
                })
            }, bind: function (e, t, n) {
                return this.on(e, null, t, n)
            }, unbind: function (e, t) {
                return this.off(e, null, t)
            }, live: function (e, t, n) {
                m(this.context).on(e, this.selector, t, n);
                return this
            }, die: function (e, t) {
                m(this.context).off(e, this.selector || "**", t);
                return this
            }, delegate: function (e, t, n, i) {
                return this.on(t, e, n, i)
            }, undelegate: function (e, t, n) {
                return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
            }, trigger: function (e, t) {
                return this.each(function () {
                    m.event.trigger(e, t, this)
                })
            }, triggerHandler: function (e, t) {
                if (this[0]) {
                    return m.event.trigger(e, t, this[0], true)
                }
            }, toggle: function (e) {
                var t = arguments, n = e.guid || m.guid++, i = 0, r = function (n) {
                    var r = (m._data(this, "lastToggle" + e.guid) || 0) % i;
                    m._data(this, "lastToggle" + e.guid, r + 1);
                    n.preventDefault();
                    return t[r].apply(this, arguments) || false
                };
                r.guid = n;
                while (i < t.length) {
                    t[i++].guid = n
                }
                return this.click(r)
            }, hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        });
        m.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function (e, t) {
            m.fn[t] = function (e, n) {
                if (n == null) {
                    n = e;
                    e = null
                }
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            };
            if (K.test(t)) {
                m.event.fixHooks[t] = m.event.keyHooks
            }
            if (Q.test(t)) {
                m.event.fixHooks[t] = m.event.mouseHooks
            }
        });
        (function (e, t) {
            var n, i, r, o, s, a, l, u, f, c, p = true, d = "undefined", h = ("sizcache" + Math.random()).replace(".", ""), g = String, y = e.document, v = y.documentElement, b = 0, x = 0, w = [].pop, T = [].push, N = [].slice, C = [].indexOf || function (e) {
                    var t = 0, n = this.length;
                    for (; t < n; t++) {
                        if (this[t] === e) {
                            return t
                        }
                    }
                    return -1
                }, k = function (e, t) {
                e[h] = t == null || t;
                return e
            }, E = function () {
                var e = {}, t = [];
                return k(function (n, i) {
                    if (t.push(n) > r.cacheLength) {
                        delete e[t.shift()]
                    }
                    return e[n + " "] = i
                }, e)
            }, S = E(), A = E(), j = E(), D = "[\\x20\\t\\r\\n\\f]", L = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+", H = L.replace("w", "w#"), F = "([*^$|!~]?=)", M = "\\[" + D + "*(" + L + ")" + D + "*(?:" + F + D + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + H + ")|)|)" + D + "*\\]", O = ":(" + L + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + M + ")|[^:]|\\\\.)*|.*))\\)|)", _ = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + D + "*((?:-\\d)?\\d*)" + D + "*\\)|)(?=[^-]|$)", q = new RegExp("^" + D + "+|((?:^|[^\\\\])(?:\\\\.)*)" + D + "+$", "g"), B = new RegExp("^" + D + "*," + D + "*"), W = new RegExp("^" + D + "*([\\x20\\t\\r\\n\\f>+~])" + D + "*"), P = new RegExp(O), R = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/, $ = /^:not/, I = /[\x20\t\r\n\f]*[+~]/, z = /:not\($/, X = /h\d/i, U = /input|select|textarea|button/i, Y = /\\(?!\\)/g, V = {
                ID: new RegExp("^#(" + L + ")"),
                CLASS: new RegExp("^\\.(" + L + ")"),
                NAME: new RegExp("^\\[name=['\"]?(" + L + ")['\"]?\\]"),
                TAG: new RegExp("^(" + L.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + M),
                PSEUDO: new RegExp("^" + O),
                POS: new RegExp(_, "i"),
                CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + D + "*(even|odd|(([+-]|)(\\d*)n|)" + D + "*(?:([+-]|)" + D + "*(\\d+)|))" + D + "*\\)|)", "i"),
                needsContext: new RegExp("^" + D + "*[>+~]|" + _, "i")
            }, J = function (e) {
                var t = y.createElement("div");
                try {
                    return e(t)
                } catch (n) {
                    return false
                } finally {
                    t = null
                }
            }, G = J(function (e) {
                e.appendChild(y.createComment(""));
                return !e.getElementsByTagName("*").length
            }), K = J(function (e) {
                e.innerHTML = "<a href='#'></a>";
                return e.firstChild && typeof e.firstChild.getAttribute !== d && e.firstChild.getAttribute("href") === "#"
            }), Q = J(function (e) {
                e.innerHTML = "<select></select>";
                var t = typeof e.lastChild.getAttribute("multiple");
                return t !== "boolean" && t !== "string"
            }), Z = J(function (e) {
                e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>";
                if (!e.getElementsByClassName || !e.getElementsByClassName("e").length) {
                    return false
                }
                e.lastChild.className = "e";
                return e.getElementsByClassName("e").length === 2
            }), et = J(function (e) {
                e.id = h + 0;
                e.innerHTML = "<a name='" + h + "'></a><div name='" + h + "'></div>";
                v.insertBefore(e, v.firstChild);
                var t = y.getElementsByName && y.getElementsByName(h).length === 2 + y.getElementsByName(h + 0).length;
                i = !y.getElementById(h);
                v.removeChild(e);
                return t
            });
            try {
                N.call(v.childNodes, 0)[0].nodeType
            } catch (tt) {
                N = function (e) {
                    var t, n = [];
                    for (; t = this[e]; e++) {
                        n.push(t)
                    }
                    return n
                }
            }
            function nt(e, t, n, i) {
                n = n || [];
                t = t || y;
                var r, o, l, u, f = t.nodeType;
                if (!e || typeof e !== "string") {
                    return n
                }
                if (f !== 1 && f !== 9) {
                    return []
                }
                l = s(t);
                if (!l && !i) {
                    if (r = R.exec(e)) {
                        if (u = r[1]) {
                            if (f === 9) {
                                o = t.getElementById(u);
                                if (o && o.parentNode) {
                                    if (o.id === u) {
                                        n.push(o);
                                        return n
                                    }
                                } else {
                                    return n
                                }
                            } else {
                                if (t.ownerDocument && (o = t.ownerDocument.getElementById(u)) && a(t, o) && o.id === u) {
                                    n.push(o);
                                    return n
                                }
                            }
                        } else if (r[2]) {
                            T.apply(n, N.call(t.getElementsByTagName(e), 0));
                            return n
                        } else if ((u = r[3]) && Z && t.getElementsByClassName) {
                            T.apply(n, N.call(t.getElementsByClassName(u), 0));
                            return n
                        }
                    }
                }
                return gt(e.replace(q, "$1"), t, n, i, l)
            }

            nt.matches = function (e, t) {
                return nt(e, null, null, t)
            };
            nt.matchesSelector = function (e, t) {
                return nt(t, null, null, [e]).length > 0
            };
            function it(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return n === "input" && t.type === e
                }
            }

            function rt(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return (n === "input" || n === "button") && t.type === e
                }
            }

            function ot(e) {
                return k(function (t) {
                    t = +t;
                    return k(function (n, i) {
                        var r, o = e([], n.length, t), s = o.length;
                        while (s--) {
                            if (n[r = o[s]]) {
                                n[r] = !(i[r] = n[r])
                            }
                        }
                    })
                })
            }

            o = nt.getText = function (e) {
                var t, n = "", i = 0, r = e.nodeType;
                if (r) {
                    if (r === 1 || r === 9 || r === 11) {
                        if (typeof e.textContent === "string") {
                            return e.textContent
                        } else {
                            for (e = e.firstChild; e; e = e.nextSibling) {
                                n += o(e)
                            }
                        }
                    } else if (r === 3 || r === 4) {
                        return e.nodeValue
                    }
                } else {
                    for (; t = e[i]; i++) {
                        n += o(t)
                    }
                }
                return n
            };
            s = nt.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? t.nodeName !== "HTML" : false
            };
            a = nt.contains = v.contains ? function (e, t) {
                var n = e.nodeType === 9 ? e.documentElement : e, i = t && t.parentNode;
                return e === i || !!(i && i.nodeType === 1 && n.contains && n.contains(i))
            } : v.compareDocumentPosition ? function (e, t) {
                return t && !!(e.compareDocumentPosition(t) & 16)
            } : function (e, t) {
                while (t = t.parentNode) {
                    if (t === e) {
                        return true
                    }
                }
                return false
            };
            nt.attr = function (e, t) {
                var n, i = s(e);
                if (!i) {
                    t = t.toLowerCase()
                }
                if (n = r.attrHandle[t]) {
                    return n(e)
                }
                if (i || Q) {
                    return e.getAttribute(t)
                }
                n = e.getAttributeNode(t);
                return n ? typeof e[t] === "boolean" ? e[t] ? t : null : n.specified ? n.value : null : null
            };
            r = nt.selectors = {
                cacheLength: 50,
                createPseudo: k,
                match: V,
                attrHandle: K ? {} : {
                    href: function (e) {
                        return e.getAttribute("href", 2)
                    }, type: function (e) {
                        return e.getAttribute("type")
                    }
                },
                find: {
                    ID: i ? function (e, t, n) {
                        if (typeof t.getElementById !== d && !n) {
                            var i = t.getElementById(e);
                            return i && i.parentNode ? [i] : []
                        }
                    } : function (e, n, i) {
                        if (typeof n.getElementById !== d && !i) {
                            var r = n.getElementById(e);
                            return r ? r.id === e || typeof r.getAttributeNode !== d && r.getAttributeNode("id").value === e ? [r] : t : []
                        }
                    }, TAG: G ? function (e, t) {
                        if (typeof t.getElementsByTagName !== d) {
                            return t.getElementsByTagName(e)
                        }
                    } : function (e, t) {
                        var n = t.getElementsByTagName(e);
                        if (e === "*") {
                            var i, r = [], o = 0;
                            for (; i = n[o]; o++) {
                                if (i.nodeType === 1) {
                                    r.push(i)
                                }
                            }
                            return r
                        }
                        return n
                    }, NAME: et && function (e, t) {
                        if (typeof t.getElementsByName !== d) {
                            return t.getElementsByName(name)
                        }
                    }, CLASS: Z && function (e, t, n) {
                        if (typeof t.getElementsByClassName !== d && !n) {
                            return t.getElementsByClassName(e)
                        }
                    }
                },
                relative: {
                    ">": {dir: "parentNode", first: true},
                    " ": {dir: "parentNode"},
                    "+": {dir: "previousSibling", first: true},
                    "~": {dir: "previousSibling"}
                },
                preFilter: {
                    ATTR: function (e) {
                        e[1] = e[1].replace(Y, "");
                        e[3] = (e[4] || e[5] || "").replace(Y, "");
                        if (e[2] === "~=") {
                            e[3] = " " + e[3] + " "
                        }
                        return e.slice(0, 4)
                    }, CHILD: function (e) {
                        e[1] = e[1].toLowerCase();
                        if (e[1] === "nth") {
                            if (!e[2]) {
                                nt.error(e[0])
                            }
                            e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * (e[2] === "even" || e[2] === "odd"));
                            e[4] = +(e[6] + e[7] || e[2] === "odd")
                        } else if (e[2]) {
                            nt.error(e[0])
                        }
                        return e
                    }, PSEUDO: function (e) {
                        var t, n;
                        if (V["CHILD"].test(e[0])) {
                            return null
                        }
                        if (e[3]) {
                            e[2] = e[3]
                        } else if (t = e[4]) {
                            if (P.test(t) && (n = at(t, true)) && (n = t.indexOf(")", t.length - n) - t.length)) {
                                t = t.slice(0, n);
                                e[0] = e[0].slice(0, n)
                            }
                            e[2] = t
                        }
                        return e.slice(0, 3)
                    }
                },
                filter: {
                    ID: i ? function (e) {
                        e = e.replace(Y, "");
                        return function (t) {
                            return t.getAttribute("id") === e
                        }
                    } : function (e) {
                        e = e.replace(Y, "");
                        return function (t) {
                            var n = typeof t.getAttributeNode !== d && t.getAttributeNode("id");
                            return n && n.value === e
                        }
                    }, TAG: function (e) {
                        if (e === "*") {
                            return function () {
                                return true
                            }
                        }
                        e = e.replace(Y, "").toLowerCase();
                        return function (t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    }, CLASS: function (e) {
                        var t = S[h][e + " "];
                        return t || (t = new RegExp("(^|" + D + ")" + e + "(" + D + "|$)")) && S(e, function (e) {
                                return t.test(e.className || typeof e.getAttribute !== d && e.getAttribute("class") || "")
                            })
                    }, ATTR: function (e, t, n) {
                        return function (i, r) {
                            var o = nt.attr(i, e);
                            if (o == null) {
                                return t === "!="
                            }
                            if (!t) {
                                return true
                            }
                            o += "";
                            return t === "=" ? o === n : t === "!=" ? o !== n : t === "^=" ? n && o.indexOf(n) === 0 : t === "*=" ? n && o.indexOf(n) > -1 : t === "$=" ? n && o.substr(o.length - n.length) === n : t === "~=" ? (" " + o + " ").indexOf(n) > -1 : t === "|=" ? o === n || o.substr(0, n.length + 1) === n + "-" : false
                        }
                    }, CHILD: function (e, t, n, i) {
                        if (e === "nth") {
                            return function (e) {
                                var t, r, o = e.parentNode;
                                if (n === 1 && i === 0) {
                                    return true
                                }
                                if (o) {
                                    r = 0;
                                    for (t = o.firstChild; t; t = t.nextSibling) {
                                        if (t.nodeType === 1) {
                                            r++;
                                            if (e === t) {
                                                break
                                            }
                                        }
                                    }
                                }
                                r -= i;
                                return r === n || r % n === 0 && r / n >= 0
                            }
                        }
                        return function (t) {
                            var n = t;
                            switch (e) {
                                case"only":
                                case"first":
                                    while (n = n.previousSibling) {
                                        if (n.nodeType === 1) {
                                            return false
                                        }
                                    }
                                    if (e === "first") {
                                        return true
                                    }
                                    n = t;
                                case"last":
                                    while (n = n.nextSibling) {
                                        if (n.nodeType === 1) {
                                            return false
                                        }
                                    }
                                    return true
                            }
                        }
                    }, PSEUDO: function (e, t) {
                        var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || nt.error("unsupported pseudo: " + e);
                        if (i[h]) {
                            return i(t)
                        }
                        if (i.length > 1) {
                            n = [e, e, "", t];
                            return r.setFilters.hasOwnProperty(e.toLowerCase()) ? k(function (e, n) {
                                var r, o = i(e, t), s = o.length;
                                while (s--) {
                                    r = C.call(e, o[s]);
                                    e[r] = !(n[r] = o[s])
                                }
                            }) : function (e) {
                                return i(e, 0, n)
                            }
                        }
                        return i
                    }
                },
                pseudos: {
                    not: k(function (e) {
                        var t = [], n = [], i = l(e.replace(q, "$1"));
                        return i[h] ? k(function (e, t, n, r) {
                            var o, s = i(e, null, r, []), a = e.length;
                            while (a--) {
                                if (o = s[a]) {
                                    e[a] = !(t[a] = o)
                                }
                            }
                        }) : function (e, r, o) {
                            t[0] = e;
                            i(t, null, o, n);
                            return !n.pop()
                        }
                    }),
                    has: k(function (e) {
                        return function (t) {
                            return nt(e, t).length > 0
                        }
                    }),
                    contains: k(function (e) {
                        return function (t) {
                            return (t.textContent || t.innerText || o(t)).indexOf(e) > -1
                        }
                    }),
                    enabled: function (e) {
                        return e.disabled === false
                    },
                    disabled: function (e) {
                        return e.disabled === true
                    },
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return t === "input" && !!e.checked || t === "option" && !!e.selected
                    },
                    selected: function (e) {
                        if (e.parentNode) {
                            e.parentNode.selectedIndex
                        }
                        return e.selected === true
                    },
                    parent: function (e) {
                        return !r.pseudos["empty"](e)
                    },
                    empty: function (e) {
                        var t;
                        e = e.firstChild;
                        while (e) {
                            if (e.nodeName > "@" || (t = e.nodeType) === 3 || t === 4) {
                                return false
                            }
                            e = e.nextSibling
                        }
                        return true
                    },
                    header: function (e) {
                        return X.test(e.nodeName)
                    },
                    text: function (e) {
                        var t, n;
                        return e.nodeName.toLowerCase() === "input" && (t = e.type) === "text" && ((n = e.getAttribute("type")) == null || n.toLowerCase() === t)
                    },
                    radio: it("radio"),
                    checkbox: it("checkbox"),
                    file: it("file"),
                    password: it("password"),
                    image: it("image"),
                    submit: rt("submit"),
                    reset: rt("reset"),
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return t === "input" && e.type === "button" || t === "button"
                    },
                    input: function (e) {
                        return U.test(e.nodeName)
                    },
                    focus: function (e) {
                        var t = e.ownerDocument;
                        return e === t.activeElement && (!t.hasFocus || t.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    active: function (e) {
                        return e === e.ownerDocument.activeElement
                    },
                    first: ot(function () {
                        return [0]
                    }),
                    last: ot(function (e, t) {
                        return [t - 1]
                    }),
                    eq: ot(function (e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: ot(function (e, t) {
                        for (var n = 0; n < t; n += 2) {
                            e.push(n)
                        }
                        return e
                    }),
                    odd: ot(function (e, t) {
                        for (var n = 1; n < t; n += 2) {
                            e.push(n)
                        }
                        return e
                    }),
                    lt: ot(function (e, t, n) {
                        for (var i = n < 0 ? n + t : n; --i >= 0;) {
                            e.push(i)
                        }
                        return e
                    }),
                    gt: ot(function (e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) {
                            e.push(i)
                        }
                        return e
                    })
                }
            };
            function st(e, t, n) {
                if (e === t) {
                    return n
                }
                var i = e.nextSibling;
                while (i) {
                    if (i === t) {
                        return -1
                    }
                    i = i.nextSibling
                }
                return 1
            }

            u = v.compareDocumentPosition ? function (e, t) {
                if (e === t) {
                    f = true;
                    return 0
                }
                return (!e.compareDocumentPosition || !t.compareDocumentPosition ? e.compareDocumentPosition : e.compareDocumentPosition(t) & 4) ? -1 : 1
            } : function (e, t) {
                if (e === t) {
                    f = true;
                    return 0
                } else if (e.sourceIndex && t.sourceIndex) {
                    return e.sourceIndex - t.sourceIndex
                }
                var n, i, r = [], o = [], s = e.parentNode, a = t.parentNode, l = s;
                if (s === a) {
                    return st(e, t)
                } else if (!s) {
                    return -1
                } else if (!a) {
                    return 1
                }
                while (l) {
                    r.unshift(l);
                    l = l.parentNode
                }
                l = a;
                while (l) {
                    o.unshift(l);
                    l = l.parentNode
                }
                n = r.length;
                i = o.length;
                for (var u = 0; u < n && u < i; u++) {
                    if (r[u] !== o[u]) {
                        return st(r[u], o[u])
                    }
                }
                return u === n ? st(e, o[u], -1) : st(r[u], t, 1)
            };
            [0, 0].sort(u);
            p = !f;
            nt.uniqueSort = function (e) {
                var t, n = [], i = 1, r = 0;
                f = p;
                e.sort(u);
                if (f) {
                    for (; t = e[i]; i++) {
                        if (t === e[i - 1]) {
                            r = n.push(i)
                        }
                    }
                    while (r--) {
                        e.splice(n[r], 1)
                    }
                }
                return e
            };
            nt.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            };
            function at(e, t) {
                var n, i, o, s, a, l, u, f = A[h][e + " "];
                if (f) {
                    return t ? 0 : f.slice(0)
                }
                a = e;
                l = [];
                u = r.preFilter;
                while (a) {
                    if (!n || (i = B.exec(a))) {
                        if (i) {
                            a = a.slice(i[0].length) || a
                        }
                        l.push(o = [])
                    }
                    n = false;
                    if (i = W.exec(a)) {
                        o.push(n = new g(i.shift()));
                        a = a.slice(n.length);
                        n.type = i[0].replace(q, " ")
                    }
                    for (s in r.filter) {
                        if ((i = V[s].exec(a)) && (!u[s] || (i = u[s](i)))) {
                            o.push(n = new g(i.shift()));
                            a = a.slice(n.length);
                            n.type = s;
                            n.matches = i
                        }
                    }
                    if (!n) {
                        break
                    }
                }
                return t ? a.length : a ? nt.error(e) : A(e, l).slice(0)
            }

            function lt(e, t, i) {
                var r = t.dir, o = i && t.dir === "parentNode", s = x++;
                return t.first ? function (t, n, i) {
                    while (t = t[r]) {
                        if (o || t.nodeType === 1) {
                            return e(t, n, i)
                        }
                    }
                } : function (t, i, a) {
                    if (!a) {
                        var l, u = b + " " + s + " ", f = u + n;
                        while (t = t[r]) {
                            if (o || t.nodeType === 1) {
                                if ((l = t[h]) === f) {
                                    return t.sizset
                                } else if (typeof l === "string" && l.indexOf(u) === 0) {
                                    if (t.sizset) {
                                        return t
                                    }
                                } else {
                                    t[h] = f;
                                    if (e(t, i, a)) {
                                        t.sizset = true;
                                        return t
                                    }
                                    t.sizset = false
                                }
                            }
                        }
                    } else {
                        while (t = t[r]) {
                            if (o || t.nodeType === 1) {
                                if (e(t, i, a)) {
                                    return t
                                }
                            }
                        }
                    }
                }
            }

            function ut(e) {
                return e.length > 1 ? function (t, n, i) {
                    var r = e.length;
                    while (r--) {
                        if (!e[r](t, n, i)) {
                            return false
                        }
                    }
                    return true
                } : e[0]
            }

            function ft(e, t, n, i, r) {
                var o, s = [], a = 0, l = e.length, u = t != null;
                for (; a < l; a++) {
                    if (o = e[a]) {
                        if (!n || n(o, i, r)) {
                            s.push(o);
                            if (u) {
                                t.push(a)
                            }
                        }
                    }
                }
                return s
            }

            function ct(e, t, n, i, r, o) {
                if (i && !i[h]) {
                    i = ct(i)
                }
                if (r && !r[h]) {
                    r = ct(r, o)
                }
                return k(function (o, s, a, l) {
                    var u, f, c, p = [], d = [], h = s.length, g = o || ht(t || "*", a.nodeType ? [a] : a, []), m = e && (o || !t) ? ft(g, p, e, a, l) : g, y = n ? r || (o ? e : h || i) ? [] : s : m;
                    if (n) {
                        n(m, y, a, l)
                    }
                    if (i) {
                        u = ft(y, d);
                        i(u, [], a, l);
                        f = u.length;
                        while (f--) {
                            if (c = u[f]) {
                                y[d[f]] = !(m[d[f]] = c)
                            }
                        }
                    }
                    if (o) {
                        if (r || e) {
                            if (r) {
                                u = [];
                                f = y.length;
                                while (f--) {
                                    if (c = y[f]) {
                                        u.push(m[f] = c)
                                    }
                                }
                                r(null, y = [], u, l)
                            }
                            f = y.length;
                            while (f--) {
                                if ((c = y[f]) && (u = r ? C.call(o, c) : p[f]) > -1) {
                                    o[u] = !(s[u] = c)
                                }
                            }
                        }
                    } else {
                        y = ft(y === s ? y.splice(h, y.length) : y);
                        if (r) {
                            r(null, s, y, l)
                        } else {
                            T.apply(s, y)
                        }
                    }
                })
            }

            function pt(e) {
                var t, n, i, o = e.length, s = r.relative[e[0].type], a = s || r.relative[" "], l = s ? 1 : 0, u = lt(function (e) {
                    return e === t
                }, a, true), f = lt(function (e) {
                    return C.call(t, e) > -1
                }, a, true), p = [function (e, n, i) {
                    return !s && (i || n !== c) || ((t = n).nodeType ? u(e, n, i) : f(e, n, i))
                }];
                for (; l < o; l++) {
                    if (n = r.relative[e[l].type]) {
                        p = [lt(ut(p), n)]
                    } else {
                        n = r.filter[e[l].type].apply(null, e[l].matches);
                        if (n[h]) {
                            i = ++l;
                            for (; i < o; i++) {
                                if (r.relative[e[i].type]) {
                                    break
                                }
                            }
                            return ct(l > 1 && ut(p), l > 1 && e.slice(0, l - 1).join("").replace(q, "$1"), n, l < i && pt(e.slice(l, i)), i < o && pt(e = e.slice(i)), i < o && e.join(""))
                        }
                        p.push(n)
                    }
                }
                return ut(p)
            }

            function dt(e, t) {
                var i = t.length > 0, o = e.length > 0, s = function (a, l, u, f, p) {
                    var d, h, g, m = [], v = 0, x = "0", N = a && [], C = p != null, k = c, E = a || o && r.find["TAG"]("*", p && l.parentNode || l), S = b += k == null ? 1 : Math.E;
                    if (C) {
                        c = l !== y && l;
                        n = s.el
                    }
                    for (; (d = E[x]) != null; x++) {
                        if (o && d) {
                            for (h = 0; g = e[h]; h++) {
                                if (g(d, l, u)) {
                                    f.push(d);
                                    break
                                }
                            }
                            if (C) {
                                b = S;
                                n = ++s.el
                            }
                        }
                        if (i) {
                            if (d = !g && d) {
                                v--
                            }
                            if (a) {
                                N.push(d)
                            }
                        }
                    }
                    v += x;
                    if (i && x !== v) {
                        for (h = 0; g = t[h]; h++) {
                            g(N, m, l, u)
                        }
                        if (a) {
                            if (v > 0) {
                                while (x--) {
                                    if (!(N[x] || m[x])) {
                                        m[x] = w.call(f)
                                    }
                                }
                            }
                            m = ft(m)
                        }
                        T.apply(f, m);
                        if (C && !a && m.length > 0 && v + t.length > 1) {
                            nt.uniqueSort(f)
                        }
                    }
                    if (C) {
                        b = S;
                        c = k
                    }
                    return N
                };
                s.el = 0;
                return i ? k(s) : s
            }

            l = nt.compile = function (e, t) {
                var n, i = [], r = [], o = j[h][e + " "];
                if (!o) {
                    if (!t) {
                        t = at(e)
                    }
                    n = t.length;
                    while (n--) {
                        o = pt(t[n]);
                        if (o[h]) {
                            i.push(o)
                        } else {
                            r.push(o)
                        }
                    }
                    o = j(e, dt(r, i))
                }
                return o
            };
            function ht(e, t, n) {
                var i = 0, r = t.length;
                for (; i < r; i++) {
                    nt(e, t[i], n)
                }
                return n
            }

            function gt(e, t, n, i, o) {
                var s, a, u, f, c, p = at(e), d = p.length;
                if (!i) {
                    if (p.length === 1) {
                        a = p[0] = p[0].slice(0);
                        if (a.length > 2 && (u = a[0]).type === "ID" && t.nodeType === 9 && !o && r.relative[a[1].type]) {
                            t = r.find["ID"](u.matches[0].replace(Y, ""), t, o)[0];
                            if (!t) {
                                return n
                            }
                            e = e.slice(a.shift().length)
                        }
                        for (s = V["POS"].test(e) ? -1 : a.length - 1; s >= 0; s--) {
                            u = a[s];
                            if (r.relative[f = u.type]) {
                                break
                            }
                            if (c = r.find[f]) {
                                if (i = c(u.matches[0].replace(Y, ""), I.test(a[0].type) && t.parentNode || t, o)) {
                                    a.splice(s, 1);
                                    e = i.length && a.join("");
                                    if (!e) {
                                        T.apply(n, N.call(i, 0));
                                        return n
                                    }
                                    break
                                }
                            }
                        }
                    }
                }
                l(e, p)(i, t, o, n, I.test(e));
                return n
            }

            if (y.querySelectorAll) {
                (function () {
                    var e, t = gt, n = /'|\\/g, i = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, r = [":focus"], o = [":active"], a = v.matchesSelector || v.mozMatchesSelector || v.webkitMatchesSelector || v.oMatchesSelector || v.msMatchesSelector;
                    J(function (e) {
                        e.innerHTML = "<select><option selected=''></option></select>";
                        if (!e.querySelectorAll("[selected]").length) {
                            r.push("\\[" + D + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)")
                        }
                        if (!e.querySelectorAll(":checked").length) {
                            r.push(":checked")
                        }
                    });
                    J(function (e) {
                        e.innerHTML = "<p test=''></p>";
                        if (e.querySelectorAll("[test^='']").length) {
                            r.push("[*^$]=" + D + "*(?:\"\"|'')")
                        }
                        e.innerHTML = "<input type='hidden'/>";
                        if (!e.querySelectorAll(":enabled").length) {
                            r.push(":enabled", ":disabled")
                        }
                    });
                    r = new RegExp(r.join("|"));
                    gt = function (e, i, o, s, a) {
                        if (!s && !a && !r.test(e)) {
                            var l, u, f = true, c = h, p = i, d = i.nodeType === 9 && e;
                            if (i.nodeType === 1 && i.nodeName.toLowerCase() !== "object") {
                                l = at(e);
                                if (f = i.getAttribute("id")) {
                                    c = f.replace(n, "\\$&")
                                } else {
                                    i.setAttribute("id", c)
                                }
                                c = "[id='" + c + "'] ";
                                u = l.length;
                                while (u--) {
                                    l[u] = c + l[u].join("")
                                }
                                p = I.test(e) && i.parentNode || i;
                                d = l.join(",")
                            }
                            if (d) {
                                try {
                                    T.apply(o, N.call(p.querySelectorAll(d), 0));
                                    return o
                                } catch (g) {
                                } finally {
                                    if (!f) {
                                        i.removeAttribute("id")
                                    }
                                }
                            }
                        }
                        return t(e, i, o, s, a)
                    };
                    if (a) {
                        J(function (t) {
                            e = a.call(t, "div");
                            try {
                                a.call(t, "[test!='']:sizzle");
                                o.push("!=", O)
                            } catch (n) {
                            }
                        });
                        o = new RegExp(o.join("|"));
                        nt.matchesSelector = function (t, n) {
                            n = n.replace(i, "='$1']");
                            if (!s(t) && !o.test(n) && !r.test(n)) {
                                try {
                                    var l = a.call(t, n);
                                    if (l || e || t.document && t.document.nodeType !== 11) {
                                        return l
                                    }
                                } catch (u) {
                                }
                            }
                            return nt(n, null, null, [t]).length > 0
                        }
                    }
                })()
            }
            r.pseudos["nth"] = r.pseudos["eq"];
            function mt() {
            }

            r.filters = mt.prototype = r.pseudos;
            r.setFilters = new mt;
            nt.attr = m.attr;
            m.find = nt;
            m.expr = nt.selectors;
            m.expr[":"] = m.expr.pseudos;
            m.unique = nt.uniqueSort;
            m.text = nt.getText;
            m.isXMLDoc = nt.isXML;
            m.contains = nt.contains
        })(e);
        var it = /Until$/, rt = /^(?:parents|prev(?:Until|All))/, ot = /^.[^:#\[\.,]*$/, st = m.expr.match.needsContext, at = {
            children: true,
            contents: true,
            next: true,
            prev: true
        };
        m.fn.extend({
            find: function (e) {
                var t, n, i, r, o, s, a = this;
                if (typeof e !== "string") {
                    return m(e).filter(function () {
                        for (t = 0, n = a.length; t < n; t++) {
                            if (m.contains(a[t], this)) {
                                return true
                            }
                        }
                    })
                }
                s = this.pushStack("", "find", e);
                for (t = 0, n = this.length; t < n; t++) {
                    i = s.length;
                    m.find(e, this[t], s);
                    if (t > 0) {
                        for (r = i; r < s.length; r++) {
                            for (o = 0; o < i; o++) {
                                if (s[o] === s[r]) {
                                    s.splice(r--, 1);
                                    break
                                }
                            }
                        }
                    }
                }
                return s
            }, has: function (e) {
                var t, n = m(e, this), i = n.length;
                return this.filter(function () {
                    for (t = 0; t < i; t++) {
                        if (m.contains(this, n[t])) {
                            return true
                        }
                    }
                })
            }, not: function (e) {
                return this.pushStack(ft(this, e, false), "not", e)
            }, filter: function (e) {
                return this.pushStack(ft(this, e, true), "filter", e)
            }, is: function (e) {
                return !!e && (typeof e === "string" ? st.test(e) ? m(e, this.context).index(this[0]) >= 0 : m.filter(e, this).length > 0 : this.filter(e).length > 0)
            }, closest: function (e, t) {
                var n, i = 0, r = this.length, o = [], s = st.test(e) || typeof e !== "string" ? m(e, t || this.context) : 0;
                for (; i < r; i++) {
                    n = this[i];
                    while (n && n.ownerDocument && n !== t && n.nodeType !== 11) {
                        if (s ? s.index(n) > -1 : m.find.matchesSelector(n, e)) {
                            o.push(n);
                            break
                        }
                        n = n.parentNode
                    }
                }
                o = o.length > 1 ? m.unique(o) : o;
                return this.pushStack(o, "closest", e)
            }, index: function (e) {
                if (!e) {
                    return this[0] && this[0].parentNode ? this.prevAll().length : -1
                }
                if (typeof e === "string") {
                    return m.inArray(this[0], m(e))
                }
                return m.inArray(e.jquery ? e[0] : e, this)
            }, add: function (e, t) {
                var n = typeof e === "string" ? m(e, t) : m.makeArray(e && e.nodeType ? [e] : e), i = m.merge(this.get(), n);
                return this.pushStack(lt(n[0]) || lt(i[0]) ? i : m.unique(i))
            }, addBack: function (e) {
                return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
            }
        });
        m.fn.andSelf = m.fn.addBack;
        function lt(e) {
            return !e || !e.parentNode || e.parentNode.nodeType === 11
        }

        function ut(e, t) {
            do {
                e = e[t]
            } while (e && e.nodeType !== 1);
            return e
        }

        m.each({
            parent: function (e) {
                var t = e.parentNode;
                return t && t.nodeType !== 11 ? t : null
            }, parents: function (e) {
                return m.dir(e, "parentNode")
            }, parentsUntil: function (e, t, n) {
                return m.dir(e, "parentNode", n)
            }, next: function (e) {
                return ut(e, "nextSibling")
            }, prev: function (e) {
                return ut(e, "previousSibling")
            }, nextAll: function (e) {
                return m.dir(e, "nextSibling")
            }, prevAll: function (e) {
                return m.dir(e, "previousSibling")
            }, nextUntil: function (e, t, n) {
                return m.dir(e, "nextSibling", n)
            }, prevUntil: function (e, t, n) {
                return m.dir(e, "previousSibling", n)
            }, siblings: function (e) {
                return m.sibling((e.parentNode || {}).firstChild, e)
            }, children: function (e) {
                return m.sibling(e.firstChild)
            }, contents: function (e) {
                return m.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : m.merge([], e.childNodes)
            }
        }, function (e, t) {
            m.fn[e] = function (n, i) {
                var r = m.map(this, t, n);
                if (!it.test(e)) {
                    i = n
                }
                if (i && typeof i === "string") {
                    r = m.filter(i, r)
                }
                r = this.length > 1 && !at[e] ? m.unique(r) : r;
                if (this.length > 1 && rt.test(e)) {
                    r = r.reverse()
                }
                return this.pushStack(r, e, c.call(arguments).join(","))
            }
        });
        m.extend({
            filter: function (e, t, n) {
                if (n) {
                    e = ":not(" + e + ")"
                }
                return t.length === 1 ? m.find.matchesSelector(t[0], e) ? [t[0]] : [] : m.find.matches(e, t)
            }, dir: function (e, t, i) {
                var r = [], o = e[t];
                while (o && o.nodeType !== 9 && (i === n || o.nodeType !== 1 || !m(o).is(i))) {
                    if (o.nodeType === 1) {
                        r.push(o)
                    }
                    o = o[t]
                }
                return r
            }, sibling: function (e, t) {
                var n = [];
                for (; e; e = e.nextSibling) {
                    if (e.nodeType === 1 && e !== t) {
                        n.push(e)
                    }
                }
                return n
            }
        });
        function ft(e, t, n) {
            t = t || 0;
            if (m.isFunction(t)) {
                return m.grep(e, function (e, i) {
                    var r = !!t.call(e, i, e);
                    return r === n
                })
            } else if (t.nodeType) {
                return m.grep(e, function (e, i) {
                    return e === t === n
                })
            } else if (typeof t === "string") {
                var i = m.grep(e, function (e) {
                    return e.nodeType === 1
                });
                if (ot.test(t)) {
                    return m.filter(t, i, !n)
                } else {
                    t = m.filter(t, i)
                }
            }
            return m.grep(e, function (e, i) {
                return m.inArray(e, t) >= 0 === n
            })
        }

        function ct(e) {
            var t = pt.split("|"), n = e.createDocumentFragment();
            if (n.createElement) {
                while (t.length) {
                    n.createElement(t.pop())
                }
            }
            return n
        }

        var pt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" + "header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", dt = / jQuery\d+="(?:null|\d+)"/g, ht = /^\s+/, gt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, mt = /<([\w:]+)/, yt = /<tbody/i, vt = /<|&#?\w+;/, bt = /<(?:script|style|link)/i, xt = /<(?:script|object|embed|option|style)/i, wt = new RegExp("<(?:" + pt + ")[\\s/>]", "i"), Tt = /^(?:checkbox|radio)$/, Nt = /checked\s*(?:[^=]|=\s*.checked.)/i, Ct = /\/(java|ecma)script/i, kt = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g, Et = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        }, St = ct(o), At = St.appendChild(o.createElement("div"));
        Et.optgroup = Et.option;
        Et.tbody = Et.tfoot = Et.colgroup = Et.caption = Et.thead;
        Et.th = Et.td;
        if (!m.support.htmlSerialize) {
            Et._default = [1, "X<div>", "</div>"]
        }
        m.fn.extend({
            text: function (e) {
                return m.access(this, function (e) {
                    return e === n ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e))
                }, null, e, arguments.length)
            }, wrapAll: function (e) {
                if (m.isFunction(e)) {
                    return this.each(function (t) {
                        m(this).wrapAll(e.call(this, t))
                    })
                }
                if (this[0]) {
                    var t = m(e, this[0].ownerDocument).eq(0).clone(true);
                    if (this[0].parentNode) {
                        t.insertBefore(this[0])
                    }
                    t.map(function () {
                        var e = this;
                        while (e.firstChild && e.firstChild.nodeType === 1) {
                            e = e.firstChild
                        }
                        return e
                    }).append(this)
                }
                return this
            }, wrapInner: function (e) {
                if (m.isFunction(e)) {
                    return this.each(function (t) {
                        m(this).wrapInner(e.call(this, t))
                    })
                }
                return this.each(function () {
                    var t = m(this), n = t.contents();
                    if (n.length) {
                        n.wrapAll(e)
                    } else {
                        t.append(e)
                    }
                })
            }, wrap: function (e) {
                var t = m.isFunction(e);
                return this.each(function (n) {
                    m(this).wrapAll(t ? e.call(this, n) : e)
                })
            }, unwrap: function () {
                return this.parent().each(function () {
                    if (!m.nodeName(this, "body")) {
                        m(this).replaceWith(this.childNodes)
                    }
                }).end()
            }, append: function () {
                return this.domManip(arguments, true, function (e) {
                    if (this.nodeType === 1 || this.nodeType === 11) {
                        this.appendChild(e)
                    }
                })
            }, prepend: function () {
                return this.domManip(arguments, true, function (e) {
                    if (this.nodeType === 1 || this.nodeType === 11) {
                        this.insertBefore(e, this.firstChild)
                    }
                })
            }, before: function () {
                if (!lt(this[0])) {
                    return this.domManip(arguments, false, function (e) {
                        this.parentNode.insertBefore(e, this)
                    })
                }
                if (arguments.length) {
                    var e = m.clean(arguments);
                    return this.pushStack(m.merge(e, this), "before", this.selector)
                }
            }, after: function () {
                if (!lt(this[0])) {
                    return this.domManip(arguments, false, function (e) {
                        this.parentNode.insertBefore(e, this.nextSibling)
                    })
                }
                if (arguments.length) {
                    var e = m.clean(arguments);
                    return this.pushStack(m.merge(this, e), "after", this.selector)
                }
            }, remove: function (e, t) {
                var n, i = 0;
                for (; (n = this[i]) != null; i++) {
                    if (!e || m.filter(e, [n]).length) {
                        if (!t && n.nodeType === 1) {
                            m.cleanData(n.getElementsByTagName("*"));
                            m.cleanData([n])
                        }
                        if (n.parentNode) {
                            n.parentNode.removeChild(n)
                        }
                    }
                }
                return this
            }, empty: function () {
                var e, t = 0;
                for (; (e = this[t]) != null; t++) {
                    if (e.nodeType === 1) {
                        m.cleanData(e.getElementsByTagName("*"))
                    }
                    while (e.firstChild) {
                        e.removeChild(e.firstChild)
                    }
                }
                return this
            }, clone: function (e, t) {
                e = e == null ? false : e;
                t = t == null ? e : t;
                return this.map(function () {
                    return m.clone(this, e, t)
                })
            }, html: function (e) {
                return m.access(this, function (e) {
                    var t = this[0] || {}, i = 0, r = this.length;
                    if (e === n) {
                        return t.nodeType === 1 ? t.innerHTML.replace(dt, "") : n
                    }
                    if (typeof e === "string" && !bt.test(e) && (m.support.htmlSerialize || !wt.test(e)) && (m.support.leadingWhitespace || !ht.test(e)) && !Et[(mt.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = e.replace(gt, "<$1></$2>");
                        try {
                            for (; i < r; i++) {
                                t = this[i] || {};
                                if (t.nodeType === 1) {
                                    m.cleanData(t.getElementsByTagName("*"));
                                    t.innerHTML = e
                                }
                            }
                            t = 0
                        } catch (o) {
                        }
                    }
                    if (t) {
                        this.empty().append(e)
                    }
                }, null, e, arguments.length)
            }, replaceWith: function (e) {
                if (!lt(this[0])) {
                    if (m.isFunction(e)) {
                        return this.each(function (t) {
                            var n = m(this), i = n.html();
                            n.replaceWith(e.call(this, t, i))
                        })
                    }
                    if (typeof e !== "string") {
                        e = m(e).detach()
                    }
                    return this.each(function () {
                        var t = this.nextSibling, n = this.parentNode;
                        m(this).remove();
                        if (t) {
                            m(t).before(e)
                        } else {
                            m(n).append(e)
                        }
                    })
                }
                return this.length ? this.pushStack(m(m.isFunction(e) ? e() : e), "replaceWith", e) : this
            }, detach: function (e) {
                return this.remove(e, true)
            }, domManip: function (e, t, i) {
                e = [].concat.apply([], e);
                var r, o, s, a, l = 0, u = e[0], f = [], c = this.length;
                if (!m.support.checkClone && c > 1 && typeof u === "string" && Nt.test(u)) {
                    return this.each(function () {
                        m(this).domManip(e, t, i)
                    })
                }
                if (m.isFunction(u)) {
                    return this.each(function (r) {
                        var o = m(this);
                        e[0] = u.call(this, r, t ? o.html() : n);
                        o.domManip(e, t, i)
                    })
                }
                if (this[0]) {
                    r = m.buildFragment(e, this, f);
                    s = r.fragment;
                    o = s.firstChild;
                    if (s.childNodes.length === 1) {
                        s = o
                    }
                    if (o) {
                        t = t && m.nodeName(o, "tr");
                        for (a = r.cacheable || c - 1; l < c; l++) {
                            i.call(t && m.nodeName(this[l], "table") ? jt(this[l], "tbody") : this[l], l === a ? s : m.clone(s, true, true))
                        }
                    }
                    s = o = null;
                    if (f.length) {
                        m.each(f, function (e, t) {
                            if (t.src) {
                                if (m.ajax) {
                                    m.ajax({
                                        url: t.src,
                                        type: "GET",
                                        dataType: "script",
                                        async: false,
                                        global: false,
                                        "throws": true
                                    })
                                } else {
                                    m.error("no ajax")
                                }
                            } else {
                                m.globalEval((t.text || t.textContent || t.innerHTML || "").replace(kt, ""))
                            }
                            if (t.parentNode) {
                                t.parentNode.removeChild(t)
                            }
                        })
                    }
                }
                return this
            }
        });
        function jt(e, t) {
            return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
        }

        function Dt(e, t) {
            if (t.nodeType !== 1 || !m.hasData(e)) {
                return
            }
            var n, i, r, o = m._data(e), s = m._data(t, o), a = o.events;
            if (a) {
                delete s.handle;
                s.events = {};
                for (n in a) {
                    for (i = 0, r = a[n].length; i < r; i++) {
                        m.event.add(t, n, a[n][i])
                    }
                }
            }
            if (s.data) {
                s.data = m.extend({}, s.data)
            }
        }

        function Lt(e, t) {
            var n;
            if (t.nodeType !== 1) {
                return
            }
            if (t.clearAttributes) {
                t.clearAttributes()
            }
            if (t.mergeAttributes) {
                t.mergeAttributes(e)
            }
            n = t.nodeName.toLowerCase();
            if (n === "object") {
                if (t.parentNode) {
                    t.outerHTML = e.outerHTML
                }
                if (m.support.html5Clone && e.innerHTML && !m.trim(t.innerHTML)) {
                    t.innerHTML = e.innerHTML
                }
            } else if (n === "input" && Tt.test(e.type)) {
                t.defaultChecked = t.checked = e.checked;
                if (t.value !== e.value) {
                    t.value = e.value
                }
            } else if (n === "option") {
                t.selected = e.defaultSelected
            } else if (n === "input" || n === "textarea") {
                t.defaultValue = e.defaultValue
            } else if (n === "script" && t.text !== e.text) {
                t.text = e.text
            }
            t.removeAttribute(m.expando)
        }

        m.buildFragment = function (e, t, i) {
            var r, s, a, l = e[0];
            t = t || o;
            t = !t.nodeType && t[0] || t;
            t = t.ownerDocument || t;
            if (e.length === 1 && typeof l === "string" && l.length < 512 && t === o && l.charAt(0) === "<" && !xt.test(l) && (m.support.checkClone || !Nt.test(l)) && (m.support.html5Clone || !wt.test(l))) {
                s = true;
                r = m.fragments[l];
                a = r !== n
            }
            if (!r) {
                r = t.createDocumentFragment();
                m.clean(e, t, r, i);
                if (s) {
                    m.fragments[l] = a && r
                }
            }
            return {fragment: r, cacheable: s}
        };
        m.fragments = {};
        m.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (e, t) {
            m.fn[e] = function (n) {
                var i, r = 0, o = [], s = m(n), a = s.length, l = this.length === 1 && this[0].parentNode;
                if ((l == null || l && l.nodeType === 11 && l.childNodes.length === 1) && a === 1) {
                    s[t](this[0]);
                    return this
                } else {
                    for (; r < a; r++) {
                        i = (r > 0 ? this.clone(true) : this).get();
                        m(s[r])[t](i);
                        o = o.concat(i)
                    }
                    return this.pushStack(o, e, s.selector)
                }
            }
        });
        function Ht(e) {
            if (typeof e.getElementsByTagName !== "undefined") {
                return e.getElementsByTagName("*")
            } else if (typeof e.querySelectorAll !== "undefined") {
                return e.querySelectorAll("*")
            } else {
                return []
            }
        }

        function Ft(e) {
            if (Tt.test(e.type)) {
                e.defaultChecked = e.checked
            }
        }

        m.extend({
            clone: function (e, t, n) {
                var i, r, o, s;
                if (m.support.html5Clone || m.isXMLDoc(e) || !wt.test("<" + e.nodeName + ">")) {
                    s = e.cloneNode(true)
                } else {
                    At.innerHTML = e.outerHTML;
                    At.removeChild(s = At.firstChild)
                }
                if ((!m.support.noCloneEvent || !m.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !m.isXMLDoc(e)) {
                    Lt(e, s);
                    i = Ht(e);
                    r = Ht(s);
                    for (o = 0; i[o]; ++o) {
                        if (r[o]) {
                            Lt(i[o], r[o])
                        }
                    }
                }
                if (t) {
                    Dt(e, s);
                    if (n) {
                        i = Ht(e);
                        r = Ht(s);
                        for (o = 0; i[o]; ++o) {
                            Dt(i[o], r[o])
                        }
                    }
                }
                i = r = null;
                return s
            }, clean: function (e, t, n, i) {
                var r, s, a, l, u, f, c, p, d, h, g, y, v = t === o && St, b = [];
                if (!t || typeof t.createDocumentFragment === "undefined") {
                    t = o
                }
                for (r = 0; (a = e[r]) != null; r++) {
                    if (typeof a === "number") {
                        a += ""
                    }
                    if (!a) {
                        continue
                    }
                    if (typeof a === "string") {
                        if (!vt.test(a)) {
                            a = t.createTextNode(a)
                        } else {
                            v = v || ct(t);
                            c = t.createElement("div");
                            v.appendChild(c);
                            a = a.replace(gt, "<$1></$2>");
                            l = (mt.exec(a) || ["", ""])[1].toLowerCase();
                            u = Et[l] || Et._default;
                            f = u[0];
                            c.innerHTML = u[1] + a + u[2];
                            while (f--) {
                                c = c.lastChild
                            }
                            if (!m.support.tbody) {
                                p = yt.test(a);
                                d = l === "table" && !p ? c.firstChild && c.firstChild.childNodes : u[1] === "<table>" && !p ? c.childNodes : [];
                                for (s = d.length - 1; s >= 0; --s) {
                                    if (m.nodeName(d[s], "tbody") && !d[s].childNodes.length) {
                                        d[s].parentNode.removeChild(d[s])
                                    }
                                }
                            }
                            if (!m.support.leadingWhitespace && ht.test(a)) {
                                c.insertBefore(t.createTextNode(ht.exec(a)[0]), c.firstChild)
                            }
                            a = c.childNodes;
                            c.parentNode.removeChild(c)
                        }
                    }
                    if (a.nodeType) {
                        b.push(a)
                    } else {
                        m.merge(b, a)
                    }
                }
                if (c) {
                    a = c = v = null
                }
                if (!m.support.appendChecked) {
                    for (r = 0; (a = b[r]) != null; r++) {
                        if (m.nodeName(a, "input")) {
                            Ft(a)
                        } else if (typeof a.getElementsByTagName !== "undefined") {
                            m.grep(a.getElementsByTagName("input"), Ft)
                        }
                    }
                }
                if (n) {
                    g = function (e) {
                        if (!e.type || Ct.test(e.type)) {
                            return i ? i.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e)
                        }
                    };
                    for (r = 0; (a = b[r]) != null; r++) {
                        if (!(m.nodeName(a, "script") && g(a))) {
                            n.appendChild(a);
                            if (typeof a.getElementsByTagName !== "undefined") {
                                y = m.grep(m.merge([], a.getElementsByTagName("script")), g);
                                b.splice.apply(b, [r + 1, 0].concat(y));
                                r += y.length
                            }
                        }
                    }
                }
                return b
            }, cleanData: function (e, t) {
                var n, i, r, o, s = 0, a = m.expando, l = m.cache, u = m.support.deleteExpando, f = m.event.special;
                for (; (r = e[s]) != null; s++) {
                    if (t || m.acceptData(r)) {
                        i = r[a];
                        n = i && l[i];
                        if (n) {
                            if (n.events) {
                                for (o in n.events) {
                                    if (f[o]) {
                                        m.event.remove(r, o)
                                    } else {
                                        m.removeEvent(r, o, n.handle)
                                    }
                                }
                            }
                            if (l[i]) {
                                delete l[i];
                                if (u) {
                                    delete r[a]
                                } else if (r.removeAttribute) {
                                    r.removeAttribute(a)
                                } else {
                                    r[a] = null
                                }
                                m.deletedIds.push(i)
                            }
                        }
                    }
                }
            }
        });
        (function () {
            var e, t;
            m.uaMatch = function (e) {
                e = e.toLowerCase();
                var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
                return {browser: t[1] || "", version: t[2] || "0"}
            };
            e = m.uaMatch(a.userAgent);
            t = {};
            if (e.browser) {
                t[e.browser] = true;
                t.version = e.version
            }
            if (t.chrome) {
                t.webkit = true
            } else if (t.webkit) {
                t.safari = true
            }
            m.browser = t;
            m.sub = function () {
                function e(t, n) {
                    return new e.fn.init(t, n)
                }

                m.extend(true, e, this);
                e.superclass = this;
                e.fn = e.prototype = this();
                e.fn.constructor = e;
                e.sub = this.sub;
                e.fn.init = function t(t, i) {
                    if (i && i instanceof m && !(i instanceof e)) {
                        i = e(i)
                    }
                    return m.fn.init.call(this, t, i, n)
                };
                e.fn.init.prototype = e.fn;
                var n = e(o);
                return e
            }
        })();
        var Mt, Ot, _t, qt = /alpha\([^)]*\)/i, Bt = /opacity=([^)]*)/, Wt = /^(top|right|bottom|left)$/, Pt = /^(none|table(?!-c[ea]).+)/, Rt = /^margin/, $t = new RegExp("^(" + y + ")(.*)$", "i"), It = new RegExp("^(" + y + ")(?!px)[a-z%]+$", "i"), zt = new RegExp("^([-+])=(" + y + ")", "i"), Xt = {BODY: "block"}, Ut = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, Yt = {
            letterSpacing: 0,
            fontWeight: 400
        }, Vt = ["Top", "Right", "Bottom", "Left"], Jt = ["Webkit", "O", "Moz", "ms"], Gt = m.fn.toggle;

        function Kt(e, t) {
            if (t in e) {
                return t
            }
            var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = Jt.length;
            while (r--) {
                t = Jt[r] + n;
                if (t in e) {
                    return t
                }
            }
            return i
        }

        function Qt(e, t) {
            e = t || e;
            return m.css(e, "display") === "none" || !m.contains(e.ownerDocument, e)
        }

        function Zt(e, t) {
            var n, i, r = [], o = 0, s = e.length;
            for (; o < s; o++) {
                n = e[o];
                if (!n.style) {
                    continue
                }
                r[o] = m._data(n, "olddisplay");
                if (t) {
                    if (!r[o] && n.style.display === "none") {
                        n.style.display = ""
                    }
                    if (n.style.display === "" && Qt(n)) {
                        r[o] = m._data(n, "olddisplay", rn(n.nodeName))
                    }
                } else {
                    i = Mt(n, "display");
                    if (!r[o] && i !== "none") {
                        m._data(n, "olddisplay", i)
                    }
                }
            }
            for (o = 0; o < s; o++) {
                n = e[o];
                if (!n.style) {
                    continue
                }
                if (!t || n.style.display === "none" || n.style.display === "") {
                    n.style.display = t ? r[o] || "" : "none"
                }
            }
            return e
        }

        m.fn.extend({
            css: function (e, t) {
                return m.access(this, function (e, t, i) {
                    return i !== n ? m.style(e, t, i) : m.css(e, t)
                }, e, t, arguments.length > 1)
            }, show: function () {
                return Zt(this, true)
            }, hide: function () {
                return Zt(this)
            }, toggle: function (e, t) {
                var n = typeof e === "boolean";
                if (m.isFunction(e) && m.isFunction(t)) {
                    return Gt.apply(this, arguments)
                }
                return this.each(function () {
                    if (n ? e : Qt(this)) {
                        m(this).show()
                    } else {
                        m(this).hide()
                    }
                })
            }
        });
        m.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var n = Mt(e, "opacity");
                            return n === "" ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                fillOpacity: true,
                fontWeight: true,
                lineHeight: true,
                opacity: true,
                orphans: true,
                widows: true,
                zIndex: true,
                zoom: true
            },
            cssProps: {"float": m.support.cssFloat ? "cssFloat" : "styleFloat"},
            style: function (e, t, i, r) {
                if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) {
                    return
                }
                var o, s, a, l = m.camelCase(t), u = e.style;
                t = m.cssProps[l] || (m.cssProps[l] = Kt(u, l));
                a = m.cssHooks[t] || m.cssHooks[l];
                if (i !== n) {
                    s = typeof i;
                    if (s === "string" && (o = zt.exec(i))) {
                        i = (o[1] + 1) * o[2] + parseFloat(m.css(e, t));
                        s = "number"
                    }
                    if (i == null || s === "number" && isNaN(i)) {
                        return
                    }
                    if (s === "number" && !m.cssNumber[l]) {
                        i += "px"
                    }
                    if (!a || !("set"in a) || (i = a.set(e, i, r)) !== n) {
                        try {
                            u[t] = i
                        } catch (f) {
                        }
                    }
                } else {
                    if (a && "get"in a && (o = a.get(e, false, r)) !== n) {
                        return o
                    }
                    return u[t]
                }
            },
            css: function (e, t, i, r) {
                var o, s, a, l = m.camelCase(t);
                t = m.cssProps[l] || (m.cssProps[l] = Kt(e.style, l));
                a = m.cssHooks[t] || m.cssHooks[l];
                if (a && "get"in a) {
                    o = a.get(e, true, r)
                }
                if (o === n) {
                    o = Mt(e, t)
                }
                if (o === "normal" && t in Yt) {
                    o = Yt[t]
                }
                if (i || r !== n) {
                    s = parseFloat(o);
                    return i || m.isNumeric(s) ? s || 0 : o
                }
                return o
            },
            swap: function (e, t, n) {
                var i, r, o = {};
                for (r in t) {
                    o[r] = e.style[r];
                    e.style[r] = t[r]
                }
                i = n.call(e);
                for (r in t) {
                    e.style[r] = o[r]
                }
                return i
            }
        });
        if (e.getComputedStyle) {
            Mt = function (t, n) {
                var i, r, o, s, a = e.getComputedStyle(t, null), l = t.style;
                if (a) {
                    i = a.getPropertyValue(n) || a[n];
                    if (i === "" && !m.contains(t.ownerDocument, t)) {
                        i = m.style(t, n)
                    }
                    if (It.test(i) && Rt.test(n)) {
                        r = l.width;
                        o = l.minWidth;
                        s = l.maxWidth;
                        l.minWidth = l.maxWidth = l.width = i;
                        i = a.width;
                        l.width = r;
                        l.minWidth = o;
                        l.maxWidth = s
                    }
                }
                return i
            }
        } else if (o.documentElement.currentStyle) {
            Mt = function (e, t) {
                var n, i, r = e.currentStyle && e.currentStyle[t], o = e.style;
                if (r == null && o && o[t]) {
                    r = o[t]
                }
                if (It.test(r) && !Wt.test(t)) {
                    n = o.left;
                    i = e.runtimeStyle && e.runtimeStyle.left;
                    if (i) {
                        e.runtimeStyle.left = e.currentStyle.left
                    }
                    o.left = t === "fontSize" ? "1em" : r;
                    r = o.pixelLeft + "px";
                    o.left = n;
                    if (i) {
                        e.runtimeStyle.left = i
                    }
                }
                return r === "" ? "auto" : r
            }
        }
        function en(e, t, n) {
            var i = $t.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
        }

        function tn(e, t, n, i) {
            var r = n === (i ? "border" : "content") ? 4 : t === "width" ? 1 : 0, o = 0;
            for (; r < 4; r += 2) {
                if (n === "margin") {
                    o += m.css(e, n + Vt[r], true)
                }
                if (i) {
                    if (n === "content") {
                        o -= parseFloat(Mt(e, "padding" + Vt[r])) || 0
                    }
                    if (n !== "margin") {
                        o -= parseFloat(Mt(e, "border" + Vt[r] + "Width")) || 0
                    }
                } else {
                    o += parseFloat(Mt(e, "padding" + Vt[r])) || 0;
                    if (n !== "padding") {
                        o += parseFloat(Mt(e, "border" + Vt[r] + "Width")) || 0
                    }
                }
            }
            return o
        }

        function nn(e, t, n) {
            var i = t === "width" ? e.offsetWidth : e.offsetHeight, r = true, o = m.support.boxSizing && m.css(e, "boxSizing") === "border-box";
            if (i <= 0 || i == null) {
                i = Mt(e, t);
                if (i < 0 || i == null) {
                    i = e.style[t]
                }
                if (It.test(i)) {
                    return i
                }
                r = o && (m.support.boxSizingReliable || i === e.style[t]);
                i = parseFloat(i) || 0
            }
            return i + tn(e, t, n || (o ? "border" : "content"), r) + "px"
        }

        function rn(e) {
            if (Xt[e]) {
                return Xt[e]
            }
            var t = m("<" + e + ">").appendTo(o.body), n = t.css("display");
            t.remove();
            if (n === "none" || n === "") {
                Ot = o.body.appendChild(Ot || m.extend(o.createElement("iframe"), {
                        frameBorder: 0,
                        width: 0,
                        height: 0
                    }));
                if (!_t || !Ot.createElement) {
                    _t = (Ot.contentWindow || Ot.contentDocument).document;
                    _t.write("<!doctype html><html><body>");
                    _t.close()
                }
                t = _t.body.appendChild(_t.createElement(e));
                n = Mt(t, "display");
                o.body.removeChild(Ot)
            }
            Xt[e] = n;
            return n
        }

        m.each(["height", "width"], function (e, t) {
            m.cssHooks[t] = {
                get: function (e, n, i) {
                    if (n) {
                        if (e.offsetWidth === 0 && Pt.test(Mt(e, "display"))) {
                            return m.swap(e, Ut, function () {
                                return nn(e, t, i)
                            })
                        } else {
                            return nn(e, t, i)
                        }
                    }
                }, set: function (e, n, i) {
                    return en(e, n, i ? tn(e, t, i, m.support.boxSizing && m.css(e, "boxSizing") === "border-box") : 0)
                }
            }
        });
        if (!m.support.opacity) {
            m.cssHooks.opacity = {
                get: function (e, t) {
                    return Bt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
                }, set: function (e, t) {
                    var n = e.style, i = e.currentStyle, r = m.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "", o = i && i.filter || n.filter || "";
                    n.zoom = 1;
                    if (t >= 1 && m.trim(o.replace(qt, "")) === "" && n.removeAttribute) {
                        n.removeAttribute("filter");
                        if (i && !i.filter) {
                            return
                        }
                    }
                    n.filter = qt.test(o) ? o.replace(qt, r) : o + " " + r
                }
            }
        }
        m(function () {
            if (!m.support.reliableMarginRight) {
                m.cssHooks.marginRight = {
                    get: function (e, t) {
                        return m.swap(e, {display: "inline-block"}, function () {
                            if (t) {
                                return Mt(e, "marginRight")
                            }
                        })
                    }
                }
            }
            if (!m.support.pixelPosition && m.fn.position) {
                m.each(["top", "left"], function (e, t) {
                    m.cssHooks[t] = {
                        get: function (e, n) {
                            if (n) {
                                var i = Mt(e, t);
                                return It.test(i) ? m(e).position()[t] + "px" : i
                            }
                        }
                    }
                })
            }
        });
        if (m.expr && m.expr.filters) {
            m.expr.filters.hidden = function (e) {
                return e.offsetWidth === 0 && e.offsetHeight === 0 || !m.support.reliableHiddenOffsets && (e.style && e.style.display || Mt(e, "display")) === "none"
            };
            m.expr.filters.visible = function (e) {
                return !m.expr.filters.hidden(e)
            }
        }
        m.each({margin: "", padding: "", border: "Width"}, function (e, t) {
            m.cssHooks[e + t] = {
                expand: function (n) {
                    var i, r = typeof n === "string" ? n.split(" ") : [n], o = {};
                    for (i = 0; i < 4; i++) {
                        o[e + Vt[i] + t] = r[i] || r[i - 2] || r[0]
                    }
                    return o
                }
            };
            if (!Rt.test(e)) {
                m.cssHooks[e + t].set = en
            }
        });
        var on = /%20/g, sn = /\[\]$/, an = /\r?\n/g, ln = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, un = /^(?:select|textarea)/i;
        m.fn.extend({
            serialize: function () {
                return m.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map(function () {
                    return this.elements ? m.makeArray(this.elements) : this
                }).filter(function () {
                    return this.name && !this.disabled && (this.checked || un.test(this.nodeName) || ln.test(this.type))
                }).map(function (e, t) {
                    var n = m(this).val();
                    return n == null ? null : m.isArray(n) ? m.map(n, function (e, n) {
                        return {name: t.name, value: e.replace(an, "\r\n")}
                    }) : {name: t.name, value: n.replace(an, "\r\n")}
                }).get()
            }
        });
        m.param = function (e, t) {
            var i, r = [], o = function (e, t) {
                t = m.isFunction(t) ? t() : t == null ? "" : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
            if (t === n) {
                t = m.ajaxSettings && m.ajaxSettings.traditional
            }
            if (m.isArray(e) || e.jquery && !m.isPlainObject(e)) {
                m.each(e, function () {
                    o(this.name, this.value)
                })
            } else {
                for (i in e) {
                    fn(i, e[i], t, o)
                }
            }
            return r.join("&").replace(on, "+")
        };
        function fn(e, t, n, i) {
            var r;
            if (m.isArray(t)) {
                m.each(t, function (t, r) {
                    if (n || sn.test(e)) {
                        i(e, r)
                    } else {
                        fn(e + "[" + (typeof r === "object" ? t : "") + "]", r, n, i)
                    }
                })
            } else if (!n && m.type(t) === "object") {
                for (r in t) {
                    fn(e + "[" + r + "]", t[r], n, i)
                }
            } else {
                i(e, t)
            }
        }

        var cn, pn, dn = /#.*$/, hn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, gn = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, mn = /^(?:GET|HEAD)$/, yn = /^\/\//, vn = /\?/, bn = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, xn = /([?&])_=[^&]*/, wn = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Tn = m.fn.load, Nn = {}, Cn = {}, kn = ["*/"] + ["*"];
        try {
            pn = s.href
        } catch (En) {
            pn = o.createElement("a");
            pn.href = "";
            pn = pn.href
        }
        cn = wn.exec(pn.toLowerCase()) || [];
        function Sn(e) {
            return function (t, n) {
                if (typeof t !== "string") {
                    n = t;
                    t = "*"
                }
                var i, r, o, s = t.toLowerCase().split(b), a = 0, l = s.length;
                if (m.isFunction(n)) {
                    for (; a < l; a++) {
                        i = s[a];
                        o = /^\+/.test(i);
                        if (o) {
                            i = i.substr(1) || "*"
                        }
                        r = e[i] = e[i] || [];
                        r[o ? "unshift" : "push"](n)
                    }
                }
            }
        }

        function An(e, t, i, r, o, s) {
            o = o || t.dataTypes[0];
            s = s || {};
            s[o] = true;
            var a, l = e[o], u = 0, f = l ? l.length : 0, c = e === Nn;
            for (; u < f && (c || !a); u++) {
                a = l[u](t, i, r);
                if (typeof a === "string") {
                    if (!c || s[a]) {
                        a = n
                    } else {
                        t.dataTypes.unshift(a);
                        a = An(e, t, i, r, a, s)
                    }
                }
            }
            if ((c || !a) && !s["*"]) {
                a = An(e, t, i, r, "*", s)
            }
            return a
        }

        function jn(e, t) {
            var i, r, o = m.ajaxSettings.flatOptions || {};
            for (i in t) {
                if (t[i] !== n) {
                    (o[i] ? e : r || (r = {}))[i] = t[i]
                }
            }
            if (r) {
                m.extend(true, e, r)
            }
        }

        m.fn.load = function (e, t, i) {
            if (typeof e !== "string" && Tn) {
                return Tn.apply(this, arguments)
            }
            if (!this.length) {
                return this
            }
            var r, o, s, a = this, l = e.indexOf(" ");
            if (l >= 0) {
                r = e.slice(l, e.length);
                e = e.slice(0, l)
            }
            if (m.isFunction(t)) {
                i = t;
                t = n
            } else if (t && typeof t === "object") {
                o = "POST"
            }
            m.ajax({
                url: e, type: o, dataType: "html", data: t, complete: function (e, t) {
                    if (i) {
                        a.each(i, s || [e.responseText, t, e])
                    }
                }
            }).done(function (e) {
                s = arguments;
                a.html(r ? m("<div>").append(e.replace(bn, "")).find(r) : e)
            });
            return this
        };
        m.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (e, t) {
            m.fn[t] = function (e) {
                return this.on(t, e)
            }
        });
        m.each(["get", "post"], function (e, t) {
            m[t] = function (e, i, r, o) {
                if (m.isFunction(i)) {
                    o = o || r;
                    r = i;
                    i = n
                }
                return m.ajax({type: t, url: e, data: i, success: r, dataType: o})
            }
        });
        m.extend({
            getScript: function (e, t) {
                return m.get(e, n, t, "script")
            },
            getJSON: function (e, t, n) {
                return m.get(e, t, n, "json")
            },
            ajaxSetup: function (e, t) {
                if (t) {
                    jn(e, m.ajaxSettings)
                } else {
                    t = e;
                    e = m.ajaxSettings
                }
                jn(e, t);
                return e
            },
            ajaxSettings: {
                url: pn,
                isLocal: gn.test(cn[1]),
                global: true,
                type: "GET",
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                processData: true,
                async: true,
                accepts: {
                    xml: "application/xml, text/xml",
                    html: "text/html",
                    text: "text/plain",
                    json: "application/json, text/javascript",
                    "*": kn
                },
                contents: {xml: /xml/, html: /html/, json: /json/},
                responseFields: {xml: "responseXML", text: "responseText"},
                converters: {"* text": e.String, "text html": true, "text json": m.parseJSON, "text xml": m.parseXML},
                flatOptions: {context: true, url: true}
            },
            ajaxPrefilter: Sn(Nn),
            ajaxTransport: Sn(Cn),
            ajax: function (e, t) {
                if (typeof e === "object") {
                    t = e;
                    e = n
                }
                t = t || {};
                var i, r, o, s, a, l, u, f, c = m.ajaxSetup({}, t), p = c.context || c, d = p !== c && (p.nodeType || p instanceof m) ? m(p) : m.event, h = m.Deferred(), g = m.Callbacks("once memory"), y = c.statusCode || {}, v = {}, x = {}, w = 0, T = "canceled", N = {
                    readyState: 0,
                    setRequestHeader: function (e, t) {
                        if (!w) {
                            var n = e.toLowerCase();
                            e = x[n] = x[n] || e;
                            v[e] = t
                        }
                        return this
                    },
                    getAllResponseHeaders: function () {
                        return w === 2 ? r : null
                    },
                    getResponseHeader: function (e) {
                        var t;
                        if (w === 2) {
                            if (!o) {
                                o = {};
                                while (t = hn.exec(r)) {
                                    o[t[1].toLowerCase()] = t[2]
                                }
                            }
                            t = o[e.toLowerCase()]
                        }
                        return t === n ? null : t
                    },
                    overrideMimeType: function (e) {
                        if (!w) {
                            c.mimeType = e
                        }
                        return this
                    },
                    abort: function (e) {
                        e = e || T;
                        if (s) {
                            s.abort(e)
                        }
                        C(0, e);
                        return this
                    }
                };

                function C(e, t, o, l) {
                    var f, v, b, x, T, C = t;
                    if (w === 2) {
                        return
                    }
                    w = 2;
                    if (a) {
                        clearTimeout(a)
                    }
                    s = n;
                    r = l || "";
                    N.readyState = e > 0 ? 4 : 0;
                    if (o) {
                        x = Dn(c, N, o)
                    }
                    if (e >= 200 && e < 300 || e === 304) {
                        if (c.ifModified) {
                            T = N.getResponseHeader("Last-Modified");
                            if (T) {
                                m.lastModified[i] = T
                            }
                            T = N.getResponseHeader("Etag");
                            if (T) {
                                m.etag[i] = T
                            }
                        }
                        if (e === 304) {
                            C = "notmodified";
                            f = true
                        } else {
                            f = Ln(c, x);
                            C = f.state;
                            v = f.data;
                            b = f.error;
                            f = !b
                        }
                    } else {
                        b = C;
                        if (!C || e) {
                            C = "error";
                            if (e < 0) {
                                e = 0
                            }
                        }
                    }
                    N.status = e;
                    N.statusText = (t || C) + "";
                    if (f) {
                        h.resolveWith(p, [v, C, N])
                    } else {
                        h.rejectWith(p, [N, C, b])
                    }
                    N.statusCode(y);
                    y = n;
                    if (u) {
                        d.trigger("ajax" + (f ? "Success" : "Error"), [N, c, f ? v : b])
                    }
                    g.fireWith(p, [N, C]);
                    if (u) {
                        d.trigger("ajaxComplete", [N, c]);
                        if (!--m.active) {
                            m.event.trigger("ajaxStop")
                        }
                    }
                }

                h.promise(N);
                N.success = N.done;
                N.error = N.fail;
                N.complete = g.add;
                N.statusCode = function (e) {
                    if (e) {
                        var t;
                        if (w < 2) {
                            for (t in e) {
                                y[t] = [y[t], e[t]]
                            }
                        } else {
                            t = e[N.status];
                            N.always(t)
                        }
                    }
                    return this
                };
                c.url = ((e || c.url) + "").replace(dn, "").replace(yn, cn[1] + "//");
                c.dataTypes = m.trim(c.dataType || "*").toLowerCase().split(b);
                if (c.crossDomain == null) {
                    l = wn.exec(c.url.toLowerCase());
                    c.crossDomain = !!(l && (l[1] !== cn[1] || l[2] !== cn[2] || (l[3] || (l[1] === "http:" ? 80 : 443)) != (cn[3] || (cn[1] === "http:" ? 80 : 443))))
                }
                if (c.data && c.processData && typeof c.data !== "string") {
                    c.data = m.param(c.data, c.traditional)
                }
                An(Nn, c, t, N);
                if (w === 2) {
                    return N
                }
                u = c.global;
                c.type = c.type.toUpperCase();
                c.hasContent = !mn.test(c.type);
                if (u && m.active++ === 0) {
                    m.event.trigger("ajaxStart")
                }
                if (!c.hasContent) {
                    if (c.data) {
                        c.url += (vn.test(c.url) ? "&" : "?") + c.data;
                        delete c.data
                    }
                    i = c.url;
                    if (c.cache === false) {
                        var k = m.now(), E = c.url.replace(xn, "$1_=" + k);
                        c.url = E + (E === c.url ? (vn.test(c.url) ? "&" : "?") + "_=" + k : "")
                    }
                }
                if (c.data && c.hasContent && c.contentType !== false || t.contentType) {
                    N.setRequestHeader("Content-Type", c.contentType)
                }
                if (c.ifModified) {
                    i = i || c.url;
                    if (m.lastModified[i]) {
                        N.setRequestHeader("If-Modified-Since", m.lastModified[i])
                    }
                    if (m.etag[i]) {
                        N.setRequestHeader("If-None-Match", m.etag[i])
                    }
                }
                N.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + (c.dataTypes[0] !== "*" ? ", " + kn + "; q=0.01" : "") : c.accepts["*"]);
                for (f in c.headers) {
                    N.setRequestHeader(f, c.headers[f])
                }
                if (c.beforeSend && (c.beforeSend.call(p, N, c) === false || w === 2)) {
                    return N.abort()
                }
                T = "abort";
                for (f in{success: 1, error: 1, complete: 1}) {
                    N[f](c[f])
                }
                s = An(Cn, c, t, N);
                if (!s) {
                    C(-1, "No Transport")
                } else {
                    N.readyState = 1;
                    if (u) {
                        d.trigger("ajaxSend", [N, c])
                    }
                    if (c.async && c.timeout > 0) {
                        a = setTimeout(function () {
                            N.abort("timeout")
                        }, c.timeout)
                    }
                    try {
                        w = 1;
                        s.send(v, C)
                    } catch (S) {
                        if (w < 2) {
                            C(-1, S)
                        } else {
                            throw S
                        }
                    }
                }
                return N
            },
            active: 0,
            lastModified: {},
            etag: {}
        });
        function Dn(e, t, i) {
            var r, o, s, a, l = e.contents, u = e.dataTypes, f = e.responseFields;
            for (o in f) {
                if (o in i) {
                    t[f[o]] = i[o]
                }
            }
            while (u[0] === "*") {
                u.shift();
                if (r === n) {
                    r = e.mimeType || t.getResponseHeader("content-type")
                }
            }
            if (r) {
                for (o in l) {
                    if (l[o] && l[o].test(r)) {
                        u.unshift(o);
                        break
                    }
                }
            }
            if (u[0]in i) {
                s = u[0]
            } else {
                for (o in i) {
                    if (!u[0] || e.converters[o + " " + u[0]]) {
                        s = o;
                        break
                    }
                    if (!a) {
                        a = o
                    }
                }
                s = s || a
            }
            if (s) {
                if (s !== u[0]) {
                    u.unshift(s)
                }
                return i[s]
            }
        }

        function Ln(e, t) {
            var n, i, r, o, s = e.dataTypes.slice(), a = s[0], l = {}, u = 0;
            if (e.dataFilter) {
                t = e.dataFilter(t, e.dataType)
            }
            if (s[1]) {
                for (n in e.converters) {
                    l[n.toLowerCase()] = e.converters[n]
                }
            }
            for (; r = s[++u];) {
                if (r !== "*") {
                    if (a !== "*" && a !== r) {
                        n = l[a + " " + r] || l["* " + r];
                        if (!n) {
                            for (i in l) {
                                o = i.split(" ");
                                if (o[1] === r) {
                                    n = l[a + " " + o[0]] || l["* " + o[0]];
                                    if (n) {
                                        if (n === true) {
                                            n = l[i]
                                        } else if (l[i] !== true) {
                                            r = o[0];
                                            s.splice(u--, 0, r)
                                        }
                                        break
                                    }
                                }
                            }
                        }
                        if (n !== true) {
                            if (n && e["throws"]) {
                                t = n(t)
                            } else {
                                try {
                                    t = n(t)
                                } catch (f) {
                                    return {state: "parsererror", error: n ? f : "No conversion from " + a + " to " + r}
                                }
                            }
                        }
                    }
                    a = r
                }
            }
            return {state: "success", data: t}
        }

        var Hn = [], Fn = /\?/, Mn = /(=)\?(?=&|$)|\?\?/, On = m.now();
        m.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                var e = Hn.pop() || m.expando + "_" + On++;
                this[e] = true;
                return e
            }
        });
        m.ajaxPrefilter("json jsonp", function (t, i, r) {
            var o, s, a, l = t.data, u = t.url, f = t.jsonp !== false, c = f && Mn.test(u), p = f && !c && typeof l === "string" && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Mn.test(l);
            if (t.dataTypes[0] === "jsonp" || c || p) {
                o = t.jsonpCallback = m.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback;
                s = e[o];
                if (c) {
                    t.url = u.replace(Mn, "$1" + o)
                } else if (p) {
                    t.data = l.replace(Mn, "$1" + o)
                } else if (f) {
                    t.url += (Fn.test(u) ? "&" : "?") + t.jsonp + "=" + o
                }
                t.converters["script json"] = function () {
                    if (!a) {
                        m.error(o + " was not called")
                    }
                    return a[0]
                };
                t.dataTypes[0] = "json";
                e[o] = function () {
                    a = arguments
                };
                r.always(function () {
                    e[o] = s;
                    if (t[o]) {
                        t.jsonpCallback = i.jsonpCallback;
                        Hn.push(o)
                    }
                    if (a && m.isFunction(s)) {
                        s(a[0])
                    }
                    a = s = n
                });
                return "script"
            }
        });
        m.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /javascript|ecmascript/},
            converters: {
                "text script": function (e) {
                    m.globalEval(e);
                    return e
                }
            }
        });
        m.ajaxPrefilter("script", function (e) {
            if (e.cache === n) {
                e.cache = false
            }
            if (e.crossDomain) {
                e.type = "GET";
                e.global = false
            }
        });
        m.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var t, i = o.head || o.getElementsByTagName("head")[0] || o.documentElement;
                return {
                    send: function (r, s) {
                        t = o.createElement("script");
                        t.async = "async";
                        if (e.scriptCharset) {
                            t.charset = e.scriptCharset
                        }
                        t.src = e.url;
                        t.onload = t.onreadystatechange = function (e, r) {
                            if (r || !t.readyState || /loaded|complete/.test(t.readyState)) {
                                t.onload = t.onreadystatechange = null;
                                if (i && t.parentNode) {
                                    i.removeChild(t)
                                }
                                t = n;
                                if (!r) {
                                    s(200, "success")
                                }
                            }
                        };
                        i.insertBefore(t, i.firstChild)
                    }, abort: function () {
                        if (t) {
                            t.onload(0, 1)
                        }
                    }
                }
            }
        });
        var _n, qn = e.ActiveXObject ? function () {
            for (var e in _n) {
                _n[e](0, 1)
            }
        } : false, Bn = 0;

        function Wn() {
            try {
                return new e.XMLHttpRequest
            } catch (t) {
            }
        }

        function Pn() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {
            }
        }

        m.ajaxSettings.xhr = e.ActiveXObject ? function () {
            return !this.isLocal && Wn() || Pn()
        } : Wn;
        (function (e) {
            m.extend(m.support, {ajax: !!e, cors: !!e && "withCredentials"in e})
        })(m.ajaxSettings.xhr());
        if (m.support.ajax) {
            m.ajaxTransport(function (t) {
                if (!t.crossDomain || m.support.cors) {
                    var i;
                    return {
                        send: function (r, o) {
                            var s, a, l = t.xhr();
                            if (t.username) {
                                l.open(t.type, t.url, t.async, t.username, t.password)
                            } else {
                                l.open(t.type, t.url, t.async)
                            }
                            if (t.xhrFields) {
                                for (a in t.xhrFields) {
                                    l[a] = t.xhrFields[a]
                                }
                            }
                            if (t.mimeType && l.overrideMimeType) {
                                l.overrideMimeType(t.mimeType)
                            }
                            if (!t.crossDomain && !r["X-Requested-With"]) {
                                r["X-Requested-With"] = "XMLHttpRequest"
                            }
                            try {
                                for (a in r) {
                                    l.setRequestHeader(a, r[a])
                                }
                            } catch (u) {
                            }
                            l.send(t.hasContent && t.data || null);
                            i = function (e, r) {
                                var a, u, f, c, p;
                                try {
                                    if (i && (r || l.readyState === 4)) {
                                        i = n;
                                        if (s) {
                                            l.onreadystatechange = m.noop;
                                            if (qn) {
                                                delete _n[s]
                                            }
                                        }
                                        if (r) {
                                            if (l.readyState !== 4) {
                                                l.abort()
                                            }
                                        } else {
                                            a = l.status;
                                            f = l.getAllResponseHeaders();
                                            c = {};
                                            p = l.responseXML;
                                            if (p && p.documentElement) {
                                                c.xml = p
                                            }
                                            try {
                                                c.text = l.responseText
                                            } catch (d) {
                                            }
                                            try {
                                                u = l.statusText
                                            } catch (d) {
                                                u = ""
                                            }
                                            if (!a && t.isLocal && !t.crossDomain) {
                                                a = c.text ? 200 : 404
                                            } else if (a === 1223) {
                                                a = 204
                                            }
                                        }
                                    }
                                } catch (h) {
                                    if (!r) {
                                        o(-1, h)
                                    }
                                }
                                if (c) {
                                    o(a, u, c, f)
                                }
                            };
                            if (!t.async) {
                                i()
                            } else if (l.readyState === 4) {
                                setTimeout(i, 0)
                            } else {
                                s = ++Bn;
                                if (qn) {
                                    if (!_n) {
                                        _n = {};
                                        m(e).unload(qn)
                                    }
                                    _n[s] = i
                                }
                                l.onreadystatechange = i
                            }
                        }, abort: function () {
                            if (i) {
                                i(0, 1)
                            }
                        }
                    }
                }
            })
        }
        var Rn, $n, In = /^(?:toggle|show|hide)$/, zn = new RegExp("^(?:([-+])=|)(" + y + ")([a-z%]*)$", "i"), Xn = /queueHooks$/, Un = [Qn], Yn = {
            "*": [function (e, t) {
                var n, i, r = this.createTween(e, t), o = zn.exec(t), s = r.cur(), a = +s || 0, l = 1, u = 20;
                if (o) {
                    n = +o[2];
                    i = o[3] || (m.cssNumber[e] ? "" : "px");
                    if (i !== "px" && a) {
                        a = m.css(r.elem, e, true) || n || 1;
                        do {
                            l = l || ".5";
                            a = a / l;
                            m.style(r.elem, e, a + i)
                        } while (l !== (l = r.cur() / s) && l !== 1 && --u)
                    }
                    r.unit = i;
                    r.start = a;
                    r.end = o[1] ? a + (o[1] + 1) * n : n
                }
                return r
            }]
        };

        function Vn() {
            setTimeout(function () {
                Rn = n
            }, 0);
            return Rn = m.now()
        }

        function Jn(e, t) {
            m.each(t, function (t, n) {
                var i = (Yn[t] || []).concat(Yn["*"]), r = 0, o = i.length;
                for (; r < o; r++) {
                    if (i[r].call(e, t, n)) {
                        return
                    }
                }
            })
        }

        function Gn(e, t, n) {
            var i, r = 0, o = 0, s = Un.length, a = m.Deferred().always(function () {
                delete l.elem
            }), l = function () {
                var t = Rn || Vn(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, r = 1 - i, o = 0, s = u.tweens.length;
                for (; o < s; o++) {
                    u.tweens[o].run(r)
                }
                a.notifyWith(e, [u, r, n]);
                if (r < 1 && s) {
                    return n
                } else {
                    a.resolveWith(e, [u]);
                    return false
                }
            }, u = a.promise({
                elem: e,
                props: m.extend({}, t),
                opts: m.extend(true, {specialEasing: {}}, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Rn || Vn(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n, i) {
                    var r = m.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    u.tweens.push(r);
                    return r
                },
                stop: function (t) {
                    var n = 0, i = t ? u.tweens.length : 0;
                    for (; n < i; n++) {
                        u.tweens[n].run(1)
                    }
                    if (t) {
                        a.resolveWith(e, [u, t])
                    } else {
                        a.rejectWith(e, [u, t])
                    }
                    return this
                }
            }), f = u.props;
            Kn(f, u.opts.specialEasing);
            for (; r < s; r++) {
                i = Un[r].call(u, e, f, u.opts);
                if (i) {
                    return i
                }
            }
            Jn(u, f);
            if (m.isFunction(u.opts.start)) {
                u.opts.start.call(e, u)
            }
            m.fx.timer(m.extend(l, {anim: u, queue: u.opts.queue, elem: e}));
            return u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function Kn(e, t) {
            var n, i, r, o, s;
            for (n in e) {
                i = m.camelCase(n);
                r = t[i];
                o = e[n];
                if (m.isArray(o)) {
                    r = o[1];
                    o = e[n] = o[0]
                }
                if (n !== i) {
                    e[i] = o;
                    delete e[n]
                }
                s = m.cssHooks[i];
                if (s && "expand"in s) {
                    o = s.expand(o);
                    delete e[i];
                    for (n in o) {
                        if (!(n in e)) {
                            e[n] = o[n];
                            t[n] = r
                        }
                    }
                } else {
                    t[i] = r
                }
            }
        }

        m.Animation = m.extend(Gn, {
            tweener: function (e, t) {
                if (m.isFunction(e)) {
                    t = e;
                    e = ["*"]
                } else {
                    e = e.split(" ")
                }
                var n, i = 0, r = e.length;
                for (; i < r; i++) {
                    n = e[i];
                    Yn[n] = Yn[n] || [];
                    Yn[n].unshift(t)
                }
            }, prefilter: function (e, t) {
                if (t) {
                    Un.unshift(e)
                } else {
                    Un.push(e)
                }
            }
        });
        function Qn(e, t, n) {
            var i, r, o, s, a, l, u, f, c, p = this, d = e.style, h = {}, g = [], y = e.nodeType && Qt(e);
            if (!n.queue) {
                f = m._queueHooks(e, "fx");
                if (f.unqueued == null) {
                    f.unqueued = 0;
                    c = f.empty.fire;
                    f.empty.fire = function () {
                        if (!f.unqueued) {
                            c()
                        }
                    }
                }
                f.unqueued++;
                p.always(function () {
                    p.always(function () {
                        f.unqueued--;
                        if (!m.queue(e, "fx").length) {
                            f.empty.fire()
                        }
                    })
                })
            }
            if (e.nodeType === 1 && ("height"in t || "width"in t)) {
                n.overflow = [d.overflow, d.overflowX, d.overflowY];
                if (m.css(e, "display") === "inline" && m.css(e, "float") === "none") {
                    if (!m.support.inlineBlockNeedsLayout || rn(e.nodeName) === "inline") {
                        d.display = "inline-block"
                    } else {
                        d.zoom = 1
                    }
                }
            }
            if (n.overflow) {
                d.overflow = "hidden";
                if (!m.support.shrinkWrapBlocks) {
                    p.done(function () {
                        d.overflow = n.overflow[0];
                        d.overflowX = n.overflow[1];
                        d.overflowY = n.overflow[2]
                    })
                }
            }
            for (i in t) {
                o = t[i];
                if (In.exec(o)) {
                    delete t[i];
                    l = l || o === "toggle";
                    if (o === (y ? "hide" : "show")) {
                        continue
                    }
                    g.push(i)
                }
            }
            s = g.length;
            if (s) {
                a = m._data(e, "fxshow") || m._data(e, "fxshow", {});
                if ("hidden"in a) {
                    y = a.hidden
                }
                if (l) {
                    a.hidden = !y
                }
                if (y) {
                    m(e).show()
                } else {
                    p.done(function () {
                        m(e).hide()
                    })
                }
                p.done(function () {
                    var t;
                    m.removeData(e, "fxshow", true);
                    for (t in h) {
                        m.style(e, t, h[t])
                    }
                });
                for (i = 0; i < s; i++) {
                    r = g[i];
                    u = p.createTween(r, y ? a[r] : 0);
                    h[r] = a[r] || m.style(e, r);
                    if (!(r in a)) {
                        a[r] = u.start;
                        if (y) {
                            u.end = u.start;
                            u.start = r === "width" || r === "height" ? 1 : 0
                        }
                    }
                }
            }
        }

        function Zn(e, t, n, i, r) {
            return new Zn.prototype.init(e, t, n, i, r)
        }

        m.Tween = Zn;
        Zn.prototype = {
            constructor: Zn, init: function (e, t, n, i, r, o) {
                this.elem = e;
                this.prop = n;
                this.easing = r || "swing";
                this.options = t;
                this.start = this.now = this.cur();
                this.end = i;
                this.unit = o || (m.cssNumber[n] ? "" : "px")
            }, cur: function () {
                var e = Zn.propHooks[this.prop];
                return e && e.get ? e.get(this) : Zn.propHooks._default.get(this)
            }, run: function (e) {
                var t, n = Zn.propHooks[this.prop];
                if (this.options.duration) {
                    this.pos = t = m.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)
                } else {
                    this.pos = t = e
                }
                this.now = (this.end - this.start) * t + this.start;
                if (this.options.step) {
                    this.options.step.call(this.elem, this.now, this)
                }
                if (n && n.set) {
                    n.set(this)
                } else {
                    Zn.propHooks._default.set(this)
                }
                return this
            }
        };
        Zn.prototype.init.prototype = Zn.prototype;
        Zn.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    if (e.elem[e.prop] != null && (!e.elem.style || e.elem.style[e.prop] == null)) {
                        return e.elem[e.prop]
                    }
                    t = m.css(e.elem, e.prop, false, "");
                    return !t || t === "auto" ? 0 : t
                }, set: function (e) {
                    if (m.fx.step[e.prop]) {
                        m.fx.step[e.prop](e)
                    } else if (e.elem.style && (e.elem.style[m.cssProps[e.prop]] != null || m.cssHooks[e.prop])) {
                        m.style(e.elem, e.prop, e.now + e.unit)
                    } else {
                        e.elem[e.prop] = e.now
                    }
                }
            }
        };
        Zn.propHooks.scrollTop = Zn.propHooks.scrollLeft = {
            set: function (e) {
                if (e.elem.nodeType && e.elem.parentNode) {
                    e.elem[e.prop] = e.now
                }
            }
        };
        m.each(["toggle", "show", "hide"], function (e, t) {
            var n = m.fn[t];
            m.fn[t] = function (i, r, o) {
                return i == null || typeof i === "boolean" || !e && m.isFunction(i) && m.isFunction(r) ? n.apply(this, arguments) : this.animate(ei(t, true), i, r, o)
            }
        });
        m.fn.extend({
            fadeTo: function (e, t, n, i) {
                return this.filter(Qt).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
            }, animate: function (e, t, n, i) {
                var r = m.isEmptyObject(e), o = m.speed(t, n, i), s = function () {
                    var t = Gn(this, m.extend({}, e), o);
                    if (r) {
                        t.stop(true)
                    }
                };
                return r || o.queue === false ? this.each(s) : this.queue(o.queue, s)
            }, stop: function (e, t, i) {
                var r = function (e) {
                    var t = e.stop;
                    delete e.stop;
                    t(i)
                };
                if (typeof e !== "string") {
                    i = t;
                    t = e;
                    e = n
                }
                if (t && e !== false) {
                    this.queue(e || "fx", [])
                }
                return this.each(function () {
                    var t = true, n = e != null && e + "queueHooks", o = m.timers, s = m._data(this);
                    if (n) {
                        if (s[n] && s[n].stop) {
                            r(s[n])
                        }
                    } else {
                        for (n in s) {
                            if (s[n] && s[n].stop && Xn.test(n)) {
                                r(s[n])
                            }
                        }
                    }
                    for (n = o.length; n--;) {
                        if (o[n].elem === this && (e == null || o[n].queue === e)) {
                            o[n].anim.stop(i);
                            t = false;
                            o.splice(n, 1)
                        }
                    }
                    if (t || !i) {
                        m.dequeue(this, e)
                    }
                })
            }
        });
        function ei(e, t) {
            var n, i = {height: e}, r = 0;
            t = t ? 1 : 0;
            for (; r < 4; r += 2 - t) {
                n = Vt[r];
                i["margin" + n] = i["padding" + n] = e
            }
            if (t) {
                i.opacity = i.width = e
            }
            return i
        }

        m.each({
            slideDown: ei("show"),
            slideUp: ei("hide"),
            slideToggle: ei("toggle"),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        }, function (e, t) {
            m.fn[e] = function (e, n, i) {
                return this.animate(t, e, n, i)
            }
        });
        m.speed = function (e, t, n) {
            var i = e && typeof e === "object" ? m.extend({}, e) : {
                complete: n || !n && t || m.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !m.isFunction(t) && t
            };
            i.duration = m.fx.off ? 0 : typeof i.duration === "number" ? i.duration : i.duration in m.fx.speeds ? m.fx.speeds[i.duration] : m.fx.speeds._default;
            if (i.queue == null || i.queue === true) {
                i.queue = "fx"
            }
            i.old = i.complete;
            i.complete = function () {
                if (m.isFunction(i.old)) {
                    i.old.call(this)
                }
                if (i.queue) {
                    m.dequeue(this, i.queue)
                }
            };
            return i
        };
        m.easing = {
            linear: function (e) {
                return e
            }, swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        };
        m.timers = [];
        m.fx = Zn.prototype.init;
        m.fx.tick = function () {
            var e, t = m.timers, i = 0;
            Rn = m.now();
            for (; i < t.length; i++) {
                e = t[i];
                if (!e() && t[i] === e) {
                    t.splice(i--, 1)
                }
            }
            if (!t.length) {
                m.fx.stop()
            }
            Rn = n
        };
        m.fx.timer = function (e) {
            if (e() && m.timers.push(e) && !$n) {
                $n = setInterval(m.fx.tick, m.fx.interval)
            }
        };
        m.fx.interval = 13;
        m.fx.stop = function () {
            clearInterval($n);
            $n = null
        };
        m.fx.speeds = {slow: 600, fast: 200, _default: 400};
        m.fx.step = {};
        if (m.expr && m.expr.filters) {
            m.expr.filters.animated = function (e) {
                return m.grep(m.timers, function (t) {
                    return e === t.elem
                }).length
            }
        }
        var ti = /^(?:body|html)$/i;
        m.fn.offset = function (e) {
            if (arguments.length) {
                return e === n ? this : this.each(function (t) {
                    m.offset.setOffset(this, e, t)
                })
            }
            var t, i, r, o, s, a, l, u = {top: 0, left: 0}, f = this[0], c = f && f.ownerDocument;
            if (!c) {
                return
            }
            if ((i = c.body) === f) {
                return m.offset.bodyOffset(f)
            }
            t = c.documentElement;
            if (!m.contains(t, f)) {
                return u
            }
            if (typeof f.getBoundingClientRect !== "undefined") {
                u = f.getBoundingClientRect()
            }
            r = ni(c);
            o = t.clientTop || i.clientTop || 0;
            s = t.clientLeft || i.clientLeft || 0;
            a = r.pageYOffset || t.scrollTop;
            l = r.pageXOffset || t.scrollLeft;
            return {top: u.top + a - o, left: u.left + l - s}
        };
        m.offset = {
            bodyOffset: function (e) {
                var t = e.offsetTop, n = e.offsetLeft;
                if (m.support.doesNotIncludeMarginInBodyOffset) {
                    t += parseFloat(m.css(e, "marginTop")) || 0;
                    n += parseFloat(m.css(e, "marginLeft")) || 0
                }
                return {top: t, left: n}
            }, setOffset: function (e, t, n) {
                var i = m.css(e, "position");
                if (i === "static") {
                    e.style.position = "relative"
                }
                var r = m(e), o = r.offset(), s = m.css(e, "top"), a = m.css(e, "left"), l = (i === "absolute" || i === "fixed") && m.inArray("auto", [s, a]) > -1, u = {}, f = {}, c, p;
                if (l) {
                    f = r.position();
                    c = f.top;
                    p = f.left
                } else {
                    c = parseFloat(s) || 0;
                    p = parseFloat(a) || 0
                }
                if (m.isFunction(t)) {
                    t = t.call(e, n, o)
                }
                if (t.top != null) {
                    u.top = t.top - o.top + c
                }
                if (t.left != null) {
                    u.left = t.left - o.left + p
                }
                if ("using"in t) {
                    t.using.call(e, u)
                } else {
                    r.css(u)
                }
            }
        };
        m.fn.extend({
            position: function () {
                if (!this[0]) {
                    return
                }
                var e = this[0], t = this.offsetParent(), n = this.offset(), i = ti.test(t[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : t.offset();
                n.top -= parseFloat(m.css(e, "marginTop")) || 0;
                n.left -= parseFloat(m.css(e, "marginLeft")) || 0;
                i.top += parseFloat(m.css(t[0], "borderTopWidth")) || 0;
                i.left += parseFloat(m.css(t[0], "borderLeftWidth")) || 0;
                return {top: n.top - i.top, left: n.left - i.left}
            }, offsetParent: function () {
                return this.map(function () {
                    var e = this.offsetParent || o.body;
                    while (e && !ti.test(e.nodeName) && m.css(e, "position") === "static") {
                        e = e.offsetParent
                    }
                    return e || o.body
                })
            }
        });
        m.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
            var i = /Y/.test(t);
            m.fn[e] = function (r) {
                return m.access(this, function (e, r, o) {
                    var s = ni(e);
                    if (o === n) {
                        return s ? t in s ? s[t] : s.document.documentElement[r] : e[r]
                    }
                    if (s) {
                        s.scrollTo(!i ? o : m(s).scrollLeft(), i ? o : m(s).scrollTop())
                    } else {
                        e[r] = o
                    }
                }, e, r, arguments.length, null)
            }
        });
        function ni(e) {
            return m.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : false
        }

        m.each({Height: "height", Width: "width"}, function (e, t) {
            m.each({padding: "inner" + e, content: t, "": "outer" + e}, function (i, r) {
                m.fn[r] = function (r, o) {
                    var s = arguments.length && (i || typeof r !== "boolean"), a = i || (r === true || o === true ? "margin" : "border");
                    return m.access(this, function (t, i, r) {
                        var o;
                        if (m.isWindow(t)) {
                            return t.document.documentElement["client" + e]
                        }
                        if (t.nodeType === 9) {
                            o = t.documentElement;
                            return Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])
                        }
                        return r === n ? m.css(t, i, r, a) : m.style(t, i, r, a)
                    }, t, s ? r : n, s, null)
                }
            })
        });
        // 备份jquery的ajax方法
        var _ajax = m.ajax;
        // 重写jquery的ajax方法
        m.ajax = function(opt) {
            // 备份opt中error和success方法
            var fn = {
                error : function(XMLHttpRequest, textStatus, errorThrown) {
                },
                success : function(data, textStatus) {
                }
            };
            if (opt.error) {
                fn.error = opt.error;
            }
            if (opt.success) {
                fn.success = opt.success;
            }
            if(!opt.crossDomain){
                if(opt.type&&opt.type.toLowerCase()!="post"){
                    opt.crossDomain=true;
                }
            }
            // 扩展增强处理
            var _opt = m.extend(opt, {
                error : function(XMLHttpRequest, textStatus, errorThrown) {
                    //window.top.location= portalServer+"/page/againLogin.jsp";
                    // 错误方法增强处理
                    if(opt.error){
                        fn.error(XMLHttpRequest, textStatus, errorThrown);
                    }
                },
                success : function(data, textStatus) {
                    if(data && typeof data.resultStatus!="undefined"){
                        if(data.resultStatus ==-1){
                            //windowLocalhost();
                            fn.success(data, textStatus);
                        }else if(data.resultStatus ==-2){
                            //windowLocalhost();
                            fn.success(data, textStatus);
                        }else if(data.resultStatus ==401){
                            window.top.location= portalServer+"/page/againLogin.jsp";
                            return;
                        }else{
                            if (opt.success) {
                                // 成功回调方法增强处理
                                fn.success(data, textStatus);
                            }

                        }
                    }else{
                        if (opt.success) {
                            // 成功回调方法增强处理
                            fn.success(data, textStatus);
                        }
                    }
                }
            });
            return _ajax(_opt);
        };
        t.exports = m;

    })(window)
});