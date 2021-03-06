if (! function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function n(t) {
        var e = t.length,
            n = re.type(t);
        return "function" === n || re.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }

    function i(t, e, n) {
        if (re.isFunction(e)) return re.grep(t, function(t, i) {
            return !!e.call(t, i, t) !== n
        });
        if (e.nodeType) return re.grep(t, function(t) {
            return t === e !== n
        });
        if ("string" == typeof e) {
            if (pe.test(e)) return re.filter(e, t, n);
            e = re.filter(e, t)
        }
        return re.grep(t, function(t) {
            return re.inArray(t, e) >= 0 !== n
        })
    }

    function a(t, e) {
        do t = t[e]; while (t && 1 !== t.nodeType);
        return t
    }

    function r(t) {
        var e = we[t] = {};
        return re.each(t.match(be) || [], function(t, n) {
            e[n] = !0
        }), e
    }

    function s() {
        me.addEventListener ? (me.removeEventListener("DOMContentLoaded", o, !1), t.removeEventListener("load", o, !1)) : (me.detachEvent("onreadystatechange", o), t.detachEvent("onload", o))
    }

    function o() {
        (me.addEventListener || "load" === event.type || "complete" === me.readyState) && (s(), re.ready())
    }

    function l(t, e, n) {
        if (void 0 === n && 1 === t.nodeType) {
            var i = "data-" + e.replace(Te, "-$1").toLowerCase();
            if (n = t.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : De.test(n) ? re.parseJSON(n) : n
                } catch (a) {}
                re.data(t, e, n)
            } else n = void 0
        }
        return n
    }

    function d(t) {
        var e;
        for (e in t)
            if (("data" !== e || !re.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
        return !0
    }

    function u(t, e, n, i) {
        if (re.acceptData(t)) {
            var a, r, s = re.expando,
                o = t.nodeType,
                l = o ? re.cache : t,
                d = o ? t[s] : t[s] && s;
            if (d && l[d] && (i || l[d].data) || void 0 !== n || "string" != typeof e) return d || (d = o ? t[s] = G.pop() || re.guid++ : s), l[d] || (l[d] = o ? {} : {
                toJSON: re.noop
            }), ("object" == typeof e || "function" == typeof e) && (i ? l[d] = re.extend(l[d], e) : l[d].data = re.extend(l[d].data, e)), r = l[d], i || (r.data || (r.data = {}), r = r.data), void 0 !== n && (r[re.camelCase(e)] = n), "string" == typeof e ? (a = r[e], null == a && (a = r[re.camelCase(e)])) : a = r, a
        }
    }

    function c(t, e, n) {
        if (re.acceptData(t)) {
            var i, a, r = t.nodeType,
                s = r ? re.cache : t,
                o = r ? t[re.expando] : re.expando;
            if (s[o]) {
                if (e && (i = n ? s[o] : s[o].data)) {
                    re.isArray(e) ? e = e.concat(re.map(e, re.camelCase)) : e in i ? e = [e] : (e = re.camelCase(e), e = e in i ? [e] : e.split(" ")), a = e.length;
                    for (; a--;) delete i[e[a]];
                    if (n ? !d(i) : !re.isEmptyObject(i)) return
                }(n || (delete s[o].data, d(s[o]))) && (r ? re.cleanData([t], !0) : ie.deleteExpando || s != s.window ? delete s[o] : s[o] = null)
            }
        }
    }

    function h() {
        return !0
    }

    function p() {
        return !1
    }

    function f() {
        try {
            return me.activeElement
        } catch (t) {}
    }

    function m(t) {
        var e = He.split("|"),
            n = t.createDocumentFragment();
        if (n.createElement)
            for (; e.length;) n.createElement(e.pop());
        return n
    }

    function _(t, e) {
        var n, i, a = 0,
            r = typeof t.getElementsByTagName !== xe ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== xe ? t.querySelectorAll(e || "*") : void 0;
        if (!r)
            for (r = [], n = t.childNodes || t; null != (i = n[a]); a++)!e || re.nodeName(i, e) ? r.push(i) : re.merge(r, _(i, e));
        return void 0 === e || e && re.nodeName(t, e) ? re.merge([t], r) : r
    }

    function g(t) {
        Ae.test(t.type) && (t.defaultChecked = t.checked)
    }

    function y(t, e) {
        return re.nodeName(t, "table") && re.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function v(t) {
        return t.type = (null !== re.find.attr(t, "type")) + "/" + t.type, t
    }

    function b(t) {
        var e = Ge.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function w(t, e) {
        for (var n, i = 0; null != (n = t[i]); i++) re._data(n, "globalEval", !e || re._data(e[i], "globalEval"))
    }

    function M(t, e) {
        if (1 === e.nodeType && re.hasData(t)) {
            var n, i, a, r = re._data(t),
                s = re._data(e, r),
                o = r.events;
            if (o) {
                delete s.handle, s.events = {};
                for (n in o)
                    for (i = 0, a = o[n].length; a > i; i++) re.event.add(e, n, o[n][i])
            }
            s.data && (s.data = re.extend({}, s.data))
        }
    }

    function L(t, e) {
        var n, i, a;
        if (1 === e.nodeType) {
            if (n = e.nodeName.toLowerCase(), !ie.noCloneEvent && e[re.expando]) {
                a = re._data(e);
                for (i in a.events) re.removeEvent(e, i, a.handle);
                e.removeAttribute(re.expando)
            }
            "script" === n && e.text !== t.text ? (v(e).text = t.text, b(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), ie.html5Clone && t.innerHTML && !re.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Ae.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
        }
    }

    function x(e, n) {
        var i = re(n.createElement(e)).appendTo(n.body),
            a = t.getDefaultComputedStyle ? t.getDefaultComputedStyle(i[0]).display : re.css(i[0], "display");
        return i.detach(), a
    }

    function D(t) {
        var e = me,
            n = tn[t];
        return n || (n = x(t, e), "none" !== n && n || (Ze = (Ze || re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Ze[0].contentWindow || Ze[0].contentDocument).document, e.write(), e.close(), n = x(t, e), Ze.detach()), tn[t] = n), n
    }

    function T(t, e) {
        return {
            get: function() {
                var n = t();
                return null != n ? n ? void delete this.get : (this.get = e).apply(this, arguments) : void 0
            }
        }
    }

    function k(t, e) {
        if (e in t) return e;
        for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, a = fn.length; a--;)
            if (e = fn[a] + n, e in t) return e;
        return i
    }

    function Y(t, e) {
        for (var n, i, a, r = [], s = 0, o = t.length; o > s; s++) i = t[s], i.style && (r[s] = re._data(i, "olddisplay"), n = i.style.display, e ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Se(i) && (r[s] = re._data(i, "olddisplay", D(i.nodeName)))) : r[s] || (a = Se(i), (n && "none" !== n || !a) && re._data(i, "olddisplay", a ? n : re.css(i, "display"))));
        for (s = 0; o > s; s++) i = t[s], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? r[s] || "" : "none"));
        return t
    }

    function S(t, e, n) {
        var i = un.exec(e);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
    }

    function C(t, e, n, i, a) {
        for (var r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > r; r += 2) "margin" === n && (s += re.css(t, n + Ye[r], !0, a)), i ? ("content" === n && (s -= re.css(t, "padding" + Ye[r], !0, a)), "margin" !== n && (s -= re.css(t, "border" + Ye[r] + "Width", !0, a))) : (s += re.css(t, "padding" + Ye[r], !0, a), "padding" !== n && (s += re.css(t, "border" + Ye[r] + "Width", !0, a)));
        return s
    }

    function A(t, e, n) {
        var i = !0,
            a = "width" === e ? t.offsetWidth : t.offsetHeight,
            r = en(t),
            s = ie.boxSizing() && "border-box" === re.css(t, "boxSizing", !1, r);
        if (0 >= a || null == a) {
            if (a = nn(t, e, r), (0 > a || null == a) && (a = t.style[e]), rn.test(a)) return a;
            i = s && (ie.boxSizingReliable() || a === t.style[e]), a = parseFloat(a) || 0
        }
        return a + C(t, e, n || (s ? "border" : "content"), i, r) + "px"
    }

    function F(t, e, n, i, a) {
        return new F.prototype.init(t, e, n, i, a)
    }

    function E() {
        return setTimeout(function() {
            mn = void 0
        }), mn = re.now()
    }

    function j(t, e) {
        var n, i = {
                height: t
            }, a = 0;
        for (e = e ? 1 : 0; 4 > a; a += 2 - e) n = Ye[a], i["margin" + n] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t), i
    }

    function N(t, e, n) {
        for (var i, a = (wn[e] || []).concat(wn["*"]), r = 0, s = a.length; s > r; r++)
            if (i = a[r].call(n, e, t)) return i
    }

    function I(t, e, n) {
        var i, a, r, s, o, l, d, u, c = this,
            h = {}, p = t.style,
            f = t.nodeType && Se(t),
            m = re._data(t, "fxshow");
        n.queue || (o = re._queueHooks(t, "fx"), null == o.unqueued && (o.unqueued = 0, l = o.empty.fire, o.empty.fire = function() {
            o.unqueued || l()
        }), o.unqueued++, c.always(function() {
            c.always(function() {
                o.unqueued--, re.queue(t, "fx").length || o.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], d = re.css(t, "display"), u = D(t.nodeName), "none" === d && (d = u), "inline" === d && "none" === re.css(t, "float") && (ie.inlineBlockNeedsLayout && "inline" !== u ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", ie.shrinkWrapBlocks() || c.always(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (i in e)
            if (a = e[i], gn.exec(a)) {
                if (delete e[i], r = r || "toggle" === a, a === (f ? "hide" : "show")) {
                    if ("show" !== a || !m || void 0 === m[i]) continue;
                    f = !0
                }
                h[i] = m && m[i] || re.style(t, i)
            }
        if (!re.isEmptyObject(h)) {
            m ? "hidden" in m && (f = m.hidden) : m = re._data(t, "fxshow", {}), r && (m.hidden = !f), f ? re(t).show() : c.done(function() {
                re(t).hide()
            }), c.done(function() {
                var e;
                re._removeData(t, "fxshow");
                for (e in h) re.style(t, e, h[e])
            });
            for (i in h) s = N(f ? m[i] : 0, i, c), i in m || (m[i] = s.start, f && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function H(t, e) {
        var n, i, a, r, s;
        for (n in t)
            if (i = re.camelCase(n), a = e[i], r = t[n], re.isArray(r) && (a = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), s = re.cssHooks[i], s && "expand" in s) {
                r = s.expand(r), delete t[i];
                for (n in r) n in t || (t[n] = r[n], e[n] = a)
            } else e[i] = a
    }

    function P(t, e, n) {
        var i, a, r = 0,
            s = bn.length,
            o = re.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (a) return !1;
                for (var e = mn || E(), n = Math.max(0, d.startTime + d.duration - e), i = n / d.duration || 0, r = 1 - i, s = 0, l = d.tweens.length; l > s; s++) d.tweens[s].run(r);
                return o.notifyWith(t, [d, r, n]), 1 > r && l ? n : (o.resolveWith(t, [d]), !1)
            }, d = o.promise({
                elem: t,
                props: re.extend({}, e),
                opts: re.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: mn || E(),
                duration: n.duration,
                tweens: [],
                createTween: function(e, n) {
                    var i = re.Tween(t, d.opts, e, n, d.opts.specialEasing[e] || d.opts.easing);
                    return d.tweens.push(i), i
                },
                stop: function(e) {
                    var n = 0,
                        i = e ? d.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; i > n; n++) d.tweens[n].run(1);
                    return e ? o.resolveWith(t, [d, e]) : o.rejectWith(t, [d, e]), this
                }
            }),
            u = d.props;
        for (H(u, d.opts.specialEasing); s > r; r++)
            if (i = bn[r].call(d, t, u, d.opts)) return i;
        return re.map(u, N, d), re.isFunction(d.opts.start) && d.opts.start.call(t, d), re.fx.timer(re.extend(l, {
            elem: t,
            anim: d,
            queue: d.opts.queue
        })), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always)
    }

    function W(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, a = 0,
                r = e.toLowerCase().match(be) || [];
            if (re.isFunction(n))
                for (; i = r[a++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }

    function O(t, e, n, i) {
        function a(o) {
            var l;
            return r[o] = !0, re.each(t[o] || [], function(t, o) {
                var d = o(e, n, i);
                return "string" != typeof d || s || r[d] ? s ? !(l = d) : void 0 : (e.dataTypes.unshift(d), a(d), !1)
            }), l
        }
        var r = {}, s = t === qn;
        return a(e.dataTypes[0]) || !r["*"] && a("*")
    }

    function $(t, e) {
        var n, i, a = re.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((a[i] ? t : n || (n = {}))[i] = e[i]);
        return n && re.extend(!0, t, n), t
    }

    function B(t, e, n) {
        for (var i, a, r, s, o = t.contents, l = t.dataTypes;
            "*" === l[0];) l.shift(), void 0 === a && (a = t.mimeType || e.getResponseHeader("Content-Type"));
        if (a)
            for (s in o)
                if (o[s] && o[s].test(a)) {
                    l.unshift(s);
                    break
                }
        if (l[0] in n) r = l[0];
        else {
            for (s in n) {
                if (!l[0] || t.converters[s + " " + l[0]]) {
                    r = s;
                    break
                }
                i || (i = s)
            }
            r = r || i
        }
        return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
    }

    function z(t, e, n, i) {
        var a, r, s, o, l, d = {}, u = t.dataTypes.slice();
        if (u[1])
            for (s in t.converters) d[s.toLowerCase()] = t.converters[s];
        for (r = u.shift(); r;)
            if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = u.shift())
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
            if (s = d[l + " " + r] || d["* " + r], !s)
                for (a in d)
                    if (o = a.split(" "), o[1] === r && (s = d[l + " " + o[0]] || d["* " + o[0]])) {
                        s === !0 ? s = d[a] : d[a] !== !0 && (r = o[0], u.unshift(o[1]));
                        break
                    }
            if (s !== !0)
                if (s && t["throws"]) e = s(e);
                else try {
                    e = s(e)
                } catch (c) {
                    return {
                        state: "parsererror",
                        error: s ? c : "No conversion from " + l + " to " + r
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function R(t, e, n, i) {
        var a;
        if (re.isArray(e)) re.each(e, function(e, a) {
            n || Jn.test(t) ? i(t, a) : R(t + "[" + ("object" == typeof a ? e : "") + "]", a, n, i)
        });
        else if (n || "object" !== re.type(e)) i(t, e);
        else
            for (a in e) R(t + "[" + a + "]", e[a], n, i)
    }

    function q() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {}
    }

    function U() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }

    function V(t) {
        return re.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
    }
    var G = [],
        J = G.slice,
        X = G.concat,
        K = G.push,
        Q = G.indexOf,
        Z = {}, te = Z.toString,
        ee = Z.hasOwnProperty,
        ne = "".trim,
        ie = {}, ae = "1.11.0",
        re = function(t, e) {
            return new re.fn.init(t, e)
        }, se = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        oe = /^-ms-/,
        le = /-([\da-z])/gi,
        de = function(t, e) {
            return e.toUpperCase()
        };
    re.fn = re.prototype = {
        jquery: ae,
        constructor: re,
        selector: "",
        length: 0,
        toArray: function() {
            return J.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : J.call(this)
        },
        pushStack: function(t) {
            var e = re.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t, e) {
            return re.each(this, t, e)
        },
        map: function(t) {
            return this.pushStack(re.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return this.pushStack(J.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                n = +t + (0 > t ? e : 0);
            return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: K,
        sort: G.sort,
        splice: G.splice
    }, re.extend = re.fn.extend = function() {
        var t, e, n, i, a, r, s = arguments[0] || {}, o = 1,
            l = arguments.length,
            d = !1;
        for ("boolean" == typeof s && (d = s, s = arguments[o] || {}, o++), "object" == typeof s || re.isFunction(s) || (s = {}), o === l && (s = this, o--); l > o; o++)
            if (null != (a = arguments[o]))
                for (i in a) t = s[i], n = a[i], s !== n && (d && n && (re.isPlainObject(n) || (e = re.isArray(n))) ? (e ? (e = !1, r = t && re.isArray(t) ? t : []) : r = t && re.isPlainObject(t) ? t : {}, s[i] = re.extend(d, r, n)) : void 0 !== n && (s[i] = n));
        return s
    }, re.extend({
        expando: "jQuery" + (ae + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === re.type(t)
        },
        isArray: Array.isArray || function(t) {
            return "array" === re.type(t)
        },
        isWindow: function(t) {
            return null != t && t == t.window
        },
        isNumeric: function(t) {
            return t - parseFloat(t) >= 0
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        isPlainObject: function(t) {
            var e;
            if (!t || "object" !== re.type(t) || t.nodeType || re.isWindow(t)) return !1;
            try {
                if (t.constructor && !ee.call(t, "constructor") && !ee.call(t.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (ie.ownLast)
                for (e in t) return ee.call(t, e);
            for (e in t);
            return void 0 === e || ee.call(t, e)
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? Z[te.call(t)] || "object" : typeof t
        },
        globalEval: function(e) {
            e && re.trim(e) && (t.execScript || function(e) {
                t.eval.call(t, e)
            })(e)
        },
        camelCase: function(t) {
            return t.replace(oe, "ms-").replace(le, de)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e, i) {
            var a, r = 0,
                s = t.length,
                o = n(t);
            if (i) {
                if (o)
                    for (; s > r && (a = e.apply(t[r], i), a !== !1); r++);
                else
                    for (r in t)
                        if (a = e.apply(t[r], i), a === !1) break
            } else if (o)
                for (; s > r && (a = e.call(t[r], r, t[r]), a !== !1); r++);
            else
                for (r in t)
                    if (a = e.call(t[r], r, t[r]), a === !1) break; return t
        },
        trim: ne && !ne.call("﻿ ") ? function(t) {
            return null == t ? "" : ne.call(t)
        } : function(t) {
            return null == t ? "" : (t + "").replace(se, "")
        },
        makeArray: function(t, e) {
            var i = e || [];
            return null != t && (n(Object(t)) ? re.merge(i, "string" == typeof t ? [t] : t) : K.call(i, t)), i
        },
        inArray: function(t, e, n) {
            var i;
            if (e) {
                if (Q) return Q.call(e, t, n);
                for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                    if (n in e && e[n] === t) return n
            }
            return -1
        },
        merge: function(t, e) {
            for (var n = +e.length, i = 0, a = t.length; n > i;) t[a++] = e[i++];
            if (n !== n)
                for (; void 0 !== e[i];) t[a++] = e[i++];
            return t.length = a, t
        },
        grep: function(t, e, n) {
            for (var i, a = [], r = 0, s = t.length, o = !n; s > r; r++) i = !e(t[r], r), i !== o && a.push(t[r]);
            return a
        },
        map: function(t, e, i) {
            var a, r = 0,
                s = t.length,
                o = n(t),
                l = [];
            if (o)
                for (; s > r; r++) a = e(t[r], r, i), null != a && l.push(a);
            else
                for (r in t) a = e(t[r], r, i), null != a && l.push(a);
            return X.apply([], l)
        },
        guid: 1,
        proxy: function(t, e) {
            var n, i, a;
            return "string" == typeof e && (a = t[e], e = t, t = a), re.isFunction(t) ? (n = J.call(arguments, 2), i = function() {
                return t.apply(e || this, n.concat(J.call(arguments)))
            }, i.guid = t.guid = t.guid || re.guid++, i) : void 0
        },
        now: function() {
            return +new Date
        },
        support: ie
    }), re.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        Z["[object " + e + "]"] = e.toLowerCase()
    });
    var ue = function(t) {
        function e(t, e, n, i) {
            var a, r, s, o, l, d, c, f, m, _;
            if ((e ? e.ownerDocument || e : O) !== F && A(e), e = e || F, n = n || [], !t || "string" != typeof t) return n;
            if (1 !== (o = e.nodeType) && 9 !== o) return [];
            if (j && !i) {
                if (a = ye.exec(t))
                    if (s = a[1]) {
                        if (9 === o) {
                            if (r = e.getElementById(s), !r || !r.parentNode) return n;
                            if (r.id === s) return n.push(r), n
                        } else if (e.ownerDocument && (r = e.ownerDocument.getElementById(s)) && P(e, r) && r.id === s) return n.push(r), n
                    } else {
                        if (a[2]) return Z.apply(n, e.getElementsByTagName(t)), n;
                        if ((s = a[3]) && L.getElementsByClassName && e.getElementsByClassName) return Z.apply(n, e.getElementsByClassName(s)), n
                    }
                if (L.qsa && (!N || !N.test(t))) {
                    if (f = c = W, m = e, _ = 9 === o && t, 1 === o && "object" !== e.nodeName.toLowerCase()) {
                        for (d = h(t), (c = e.getAttribute("id")) ? f = c.replace(be, "\\$&") : e.setAttribute("id", f), f = "[id='" + f + "'] ", l = d.length; l--;) d[l] = f + p(d[l]);
                        m = ve.test(t) && u(e.parentNode) || e, _ = d.join(",")
                    }
                    if (_) try {
                        return Z.apply(n, m.querySelectorAll(_)), n
                    } catch (g) {} finally {
                        c || e.removeAttribute("id")
                    }
                }
            }
            return w(t.replace(le, "$1"), e, n, i)
        }

        function n() {
            function t(n, i) {
                return e.push(n + " ") > x.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
            var e = [];
            return t
        }

        function i(t) {
            return t[W] = !0, t
        }

        function a(t) {
            var e = F.createElement("div");
            try {
                return !!t(e)
            } catch (n) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function r(t, e) {
            for (var n = t.split("|"), i = t.length; i--;) x.attrHandle[n[i]] = e
        }

        function s(t, e) {
            var n = e && t,
                i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || G) - (~t.sourceIndex || G);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e) return -1;
            return t ? 1 : -1
        }

        function o(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return "input" === n && e.type === t
            }
        }

        function l(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }

        function d(t) {
            return i(function(e) {
                return e = +e, i(function(n, i) {
                    for (var a, r = t([], n.length, e), s = r.length; s--;) n[a = r[s]] && (n[a] = !(i[a] = n[a]))
                })
            })
        }

        function u(t) {
            return t && typeof t.getElementsByTagName !== V && t
        }

        function c() {}

        function h(t, n) {
            var i, a, r, s, o, l, d, u = R[t + " "];
            if (u) return n ? 0 : u.slice(0);
            for (o = t, l = [], d = x.preFilter; o;) {
                (!i || (a = de.exec(o))) && (a && (o = o.slice(a[0].length) || o), l.push(r = [])), i = !1, (a = ue.exec(o)) && (i = a.shift(), r.push({
                    value: i,
                    type: a[0].replace(le, " ")
                }), o = o.slice(i.length));
                for (s in x.filter)!(a = fe[s].exec(o)) || d[s] && !(a = d[s](a)) || (i = a.shift(), r.push({
                    value: i,
                    type: s,
                    matches: a
                }), o = o.slice(i.length));
                if (!i) break
            }
            return n ? o.length : o ? e.error(t) : R(t, l).slice(0)
        }

        function p(t) {
            for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
            return i
        }

        function f(t, e, n) {
            var i = e.dir,
                a = n && "parentNode" === i,
                r = B++;
            return e.first ? function(e, n, r) {
                for (; e = e[i];)
                    if (1 === e.nodeType || a) return t(e, n, r)
            } : function(e, n, s) {
                var o, l, d = [$, r];
                if (s) {
                    for (; e = e[i];)
                        if ((1 === e.nodeType || a) && t(e, n, s)) return !0
                } else
                    for (; e = e[i];)
                        if (1 === e.nodeType || a) {
                            if (l = e[W] || (e[W] = {}), (o = l[i]) && o[0] === $ && o[1] === r) return d[2] = o[2];
                            if (l[i] = d, d[2] = t(e, n, s)) return !0
                        }
            }
        }

        function m(t) {
            return t.length > 1 ? function(e, n, i) {
                for (var a = t.length; a--;)
                    if (!t[a](e, n, i)) return !1;
                return !0
            } : t[0]
        }

        function _(t, e, n, i, a) {
            for (var r, s = [], o = 0, l = t.length, d = null != e; l > o; o++)(r = t[o]) && (!n || n(r, i, a)) && (s.push(r), d && e.push(o));
            return s
        }

        function g(t, e, n, a, r, s) {
            return a && !a[W] && (a = g(a)), r && !r[W] && (r = g(r, s)), i(function(i, s, o, l) {
                var d, u, c, h = [],
                    p = [],
                    f = s.length,
                    m = i || b(e || "*", o.nodeType ? [o] : o, []),
                    g = !t || !i && e ? m : _(m, h, t, o, l),
                    y = n ? r || (i ? t : f || a) ? [] : s : g;
                if (n && n(g, y, o, l), a)
                    for (d = _(y, p), a(d, [], o, l), u = d.length; u--;)(c = d[u]) && (y[p[u]] = !(g[p[u]] = c));
                if (i) {
                    if (r || t) {
                        if (r) {
                            for (d = [], u = y.length; u--;)(c = y[u]) && d.push(g[u] = c);
                            r(null, y = [], d, l)
                        }
                        for (u = y.length; u--;)(c = y[u]) && (d = r ? ee.call(i, c) : h[u]) > -1 && (i[d] = !(s[d] = c))
                    }
                } else y = _(y === s ? y.splice(f, y.length) : y), r ? r(null, s, y, l) : Z.apply(s, y)
            })
        }

        function y(t) {
            for (var e, n, i, a = t.length, r = x.relative[t[0].type], s = r || x.relative[" "], o = r ? 1 : 0, l = f(function(t) {
                    return t === e
                }, s, !0), d = f(function(t) {
                    return ee.call(e, t) > -1
                }, s, !0), u = [
                    function(t, n, i) {
                        return !r && (i || n !== Y) || ((e = n).nodeType ? l(t, n, i) : d(t, n, i))
                    }
                ]; a > o; o++)
                if (n = x.relative[t[o].type]) u = [f(m(u), n)];
                else {
                    if (n = x.filter[t[o].type].apply(null, t[o].matches), n[W]) {
                        for (i = ++o; a > i && !x.relative[t[i].type]; i++);
                        return g(o > 1 && m(u), o > 1 && p(t.slice(0, o - 1).concat({
                            value: " " === t[o - 2].type ? "*" : ""
                        })).replace(le, "$1"), n, i > o && y(t.slice(o, i)), a > i && y(t = t.slice(i)), a > i && p(t))
                    }
                    u.push(n)
                }
            return m(u)
        }

        function v(t, n) {
            var a = n.length > 0,
                r = t.length > 0,
                s = function(i, s, o, l, d) {
                    var u, c, h, p = 0,
                        f = "0",
                        m = i && [],
                        g = [],
                        y = Y,
                        v = i || r && x.find.TAG("*", d),
                        b = $ += null == y ? 1 : Math.random() || .1,
                        w = v.length;
                    for (d && (Y = s !== F && s); f !== w && null != (u = v[f]); f++) {
                        if (r && u) {
                            for (c = 0; h = t[c++];)
                                if (h(u, s, o)) {
                                    l.push(u);
                                    break
                                }
                            d && ($ = b)
                        }
                        a && ((u = !h && u) && p--, i && m.push(u))
                    }
                    if (p += f, a && f !== p) {
                        for (c = 0; h = n[c++];) h(m, g, s, o);
                        if (i) {
                            if (p > 0)
                                for (; f--;) m[f] || g[f] || (g[f] = K.call(l));
                            g = _(g)
                        }
                        Z.apply(l, g), d && !i && g.length > 0 && p + n.length > 1 && e.uniqueSort(l)
                    }
                    return d && ($ = b, Y = y), m
                };
            return a ? i(s) : s
        }

        function b(t, n, i) {
            for (var a = 0, r = n.length; r > a; a++) e(t, n[a], i);
            return i
        }

        function w(t, e, n, i) {
            var a, r, s, o, l, d = h(t);
            if (!i && 1 === d.length) {
                if (r = d[0] = d[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && L.getById && 9 === e.nodeType && j && x.relative[r[1].type]) {
                    if (e = (x.find.ID(s.matches[0].replace(we, Me), e) || [])[0], !e) return n;
                    t = t.slice(r.shift().value.length)
                }
                for (a = fe.needsContext.test(t) ? 0 : r.length; a-- && (s = r[a], !x.relative[o = s.type]);)
                    if ((l = x.find[o]) && (i = l(s.matches[0].replace(we, Me), ve.test(r[0].type) && u(e.parentNode) || e))) {
                        if (r.splice(a, 1), t = i.length && p(r), !t) return Z.apply(n, i), n;
                        break
                    }
            }
            return k(t, d)(i, e, !j, n, ve.test(t) && u(e.parentNode) || e), n
        }
        var M, L, x, D, T, k, Y, S, C, A, F, E, j, N, I, H, P, W = "sizzle" + -new Date,
            O = t.document,
            $ = 0,
            B = 0,
            z = n(),
            R = n(),
            q = n(),
            U = function(t, e) {
                return t === e && (C = !0), 0
            }, V = "undefined",
            G = 1 << 31,
            J = {}.hasOwnProperty,
            X = [],
            K = X.pop,
            Q = X.push,
            Z = X.push,
            te = X.slice,
            ee = X.indexOf || function(t) {
                for (var e = 0, n = this.length; n > e; e++)
                    if (this[e] === t) return e;
                return -1
            }, ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ie = "[\\x20\\t\\r\\n\\f]",
            ae = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            re = ae.replace("w", "w#"),
            se = "\\[" + ie + "*(" + ae + ")" + ie + "*(?:([*^$|!~]?=)" + ie + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + re + ")|)|)" + ie + "*\\]",
            oe = ":(" + ae + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + se.replace(3, 8) + ")*)|.*)\\)|)",
            le = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"),
            de = new RegExp("^" + ie + "*," + ie + "*"),
            ue = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"),
            ce = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]", "g"),
            he = new RegExp(oe),
            pe = new RegExp("^" + re + "$"),
            fe = {
                ID: new RegExp("^#(" + ae + ")"),
                CLASS: new RegExp("^\\.(" + ae + ")"),
                TAG: new RegExp("^(" + ae.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + se),
                PSEUDO: new RegExp("^" + oe),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ne + ")$", "i"),
                needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i")
            }, me = /^(?:input|select|textarea|button)$/i,
            _e = /^h\d$/i,
            ge = /^[^{]+\{\s*\[native \w/,
            ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ve = /[+~]/,
            be = /'|\\/g,
            we = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"),
            Me = function(t, e, n) {
                var i = "0x" + e - 65536;
                return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            };
        try {
            Z.apply(X = te.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType
        } catch (Le) {
            Z = {
                apply: X.length ? function(t, e) {
                    Q.apply(t, te.call(e))
                } : function(t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++];);
                    t.length = n - 1
                }
            }
        }
        L = e.support = {}, T = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1
        }, A = e.setDocument = function(t) {
            var e, n = t ? t.ownerDocument || t : O,
                i = n.defaultView;
            return n !== F && 9 === n.nodeType && n.documentElement ? (F = n, E = n.documentElement, j = !T(n), i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", function() {
                A()
            }, !1) : i.attachEvent && i.attachEvent("onunload", function() {
                A()
            })), L.attributes = a(function(t) {
                return t.className = "i", !t.getAttribute("className")
            }), L.getElementsByTagName = a(function(t) {
                return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
            }), L.getElementsByClassName = ge.test(n.getElementsByClassName) && a(function(t) {
                return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
            }), L.getById = a(function(t) {
                return E.appendChild(t).id = W, !n.getElementsByName || !n.getElementsByName(W).length
            }), L.getById ? (x.find.ID = function(t, e) {
                if (typeof e.getElementById !== V && j) {
                    var n = e.getElementById(t);
                    return n && n.parentNode ? [n] : []
                }
            }, x.filter.ID = function(t) {
                var e = t.replace(we, Me);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete x.find.ID, x.filter.ID = function(t) {
                var e = t.replace(we, Me);
                return function(t) {
                    var n = typeof t.getAttributeNode !== V && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }), x.find.TAG = L.getElementsByTagName ? function(t, e) {
                return typeof e.getElementsByTagName !== V ? e.getElementsByTagName(t) : void 0
            } : function(t, e) {
                var n, i = [],
                    a = 0,
                    r = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = r[a++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return r
            }, x.find.CLASS = L.getElementsByClassName && function(t, e) {
                return typeof e.getElementsByClassName !== V && j ? e.getElementsByClassName(t) : void 0
            }, I = [], N = [], (L.qsa = ge.test(n.querySelectorAll)) && (a(function(t) {
                t.innerHTML = "<select t=''><option selected=''></option></select>", t.querySelectorAll("[t^='']").length && N.push("[*^$]=" + ie + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || N.push("\\[" + ie + "*(?:value|" + ne + ")"), t.querySelectorAll(":checked").length || N.push(":checked")
            }), a(function(t) {
                var e = n.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && N.push("name" + ie + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || N.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), N.push(",.*:")
            })), (L.matchesSelector = ge.test(H = E.webkitMatchesSelector || E.mozMatchesSelector || E.oMatchesSelector || E.msMatchesSelector)) && a(function(t) {
                L.disconnectedMatch = H.call(t, "div"), H.call(t, "[s!='']:x"), I.push("!=", oe)
            }), N = N.length && new RegExp(N.join("|")), I = I.length && new RegExp(I.join("|")), e = ge.test(E.compareDocumentPosition), P = e || ge.test(E.contains) ? function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t,
                    i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            } : function(t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, U = e ? function(t, e) {
                if (t === e) return C = !0, 0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !L.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === O && P(O, t) ? -1 : e === n || e.ownerDocument === O && P(O, e) ? 1 : S ? ee.call(S, t) - ee.call(S, e) : 0 : 4 & i ? -1 : 1)
            } : function(t, e) {
                if (t === e) return C = !0, 0;
                var i, a = 0,
                    r = t.parentNode,
                    o = e.parentNode,
                    l = [t],
                    d = [e];
                if (!r || !o) return t === n ? -1 : e === n ? 1 : r ? -1 : o ? 1 : S ? ee.call(S, t) - ee.call(S, e) : 0;
                if (r === o) return s(t, e);
                for (i = t; i = i.parentNode;) l.unshift(i);
                for (i = e; i = i.parentNode;) d.unshift(i);
                for (; l[a] === d[a];) a++;
                return a ? s(l[a], d[a]) : l[a] === O ? -1 : d[a] === O ? 1 : 0
            }, n) : F
        }, e.matches = function(t, n) {
            return e(t, null, null, n)
        }, e.matchesSelector = function(t, n) {
            if ((t.ownerDocument || t) !== F && A(t), n = n.replace(ce, "='$1']"), !(!L.matchesSelector || !j || I && I.test(n) || N && N.test(n))) try {
                var i = H.call(t, n);
                if (i || L.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
            } catch (a) {}
            return e(n, F, null, [t]).length > 0
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== F && A(t), P(t, e)
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== F && A(t);
            var n = x.attrHandle[e.toLowerCase()],
                i = n && J.call(x.attrHandle, e.toLowerCase()) ? n(t, e, !j) : void 0;
            return void 0 !== i ? i : L.attributes || !j ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function(t) {
            var e, n = [],
                i = 0,
                a = 0;
            if (C = !L.detectDuplicates, S = !L.sortStable && t.slice(0), t.sort(U), C) {
                for (; e = t[a++];) e === t[a] && (i = n.push(a));
                for (; i--;) t.splice(n[i], 1)
            }
            return S = null, t
        }, D = e.getText = function(t) {
            var e, n = "",
                i = 0,
                a = t.nodeType;
            if (a) {
                if (1 === a || 9 === a || 11 === a) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += D(t)
                } else if (3 === a || 4 === a) return t.nodeValue
            } else
                for (; e = t[i++];) n += D(e);
            return n
        }, x = e.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(we, Me), t[3] = (t[4] || t[5] || "").replace(we, Me), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function(t) {
                    var e, n = !t[5] && t[2];
                    return fe.CHILD.test(t[0]) ? null : (t[3] && void 0 !== t[4] ? t[2] = t[4] : n && he.test(n) && (e = h(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(we, Me).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = z[t + " "];
                    return e || (e = new RegExp("(^|" + ie + ")" + t + "(" + ie + "|$)")) && z(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== V && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, n, i) {
                    return function(a) {
                        var r = e.attr(a, t);
                        return null == r ? "!=" === n : n ? (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r + " ").indexOf(i) > -1 : "|=" === n ? r === i || r.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(t, e, n, i, a) {
                    var r = "nth" !== t.slice(0, 3),
                        s = "last" !== t.slice(-4),
                        o = "of-type" === e;
                    return 1 === i && 0 === a ? function(t) {
                        return !!t.parentNode
                    } : function(e, n, l) {
                        var d, u, c, h, p, f, m = r !== s ? "nextSibling" : "previousSibling",
                            _ = e.parentNode,
                            g = o && e.nodeName.toLowerCase(),
                            y = !l && !o;
                        if (_) {
                            if (r) {
                                for (; m;) {
                                    for (c = e; c = c[m];)
                                        if (o ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) return !1;
                                    f = m = "only" === t && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [s ? _.firstChild : _.lastChild], s && y) {
                                for (u = _[W] || (_[W] = {}), d = u[t] || [], p = d[0] === $ && d[1], h = d[0] === $ && d[2], c = p && _.childNodes[p]; c = ++p && c && c[m] || (h = p = 0) || f.pop();)
                                    if (1 === c.nodeType && ++h && c === e) {
                                        u[t] = [$, p, h];
                                        break
                                    }
                            } else if (y && (d = (e[W] || (e[W] = {}))[t]) && d[0] === $) h = d[1];
                            else
                                for (;
                                    (c = ++p && c && c[m] || (h = p = 0) || f.pop()) && ((o ? c.nodeName.toLowerCase() !== g : 1 !== c.nodeType) || !++h || (y && ((c[W] || (c[W] = {}))[t] = [$, h]), c !== e)););
                            return h -= a, h === i || h % i === 0 && h / i >= 0
                        }
                    }
                },
                PSEUDO: function(t, n) {
                    var a, r = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return r[W] ? r(n) : r.length > 1 ? (a = [t, t, "", n], x.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                        for (var i, a = r(t, n), s = a.length; s--;) i = ee.call(t, a[s]), t[i] = !(e[i] = a[s])
                    }) : function(t) {
                        return r(t, 0, a)
                    }) : r
                }
            },
            pseudos: {
                not: i(function(t) {
                    var e = [],
                        n = [],
                        a = k(t.replace(le, "$1"));
                    return a[W] ? i(function(t, e, n, i) {
                        for (var r, s = a(t, null, i, []), o = t.length; o--;)(r = s[o]) && (t[o] = !(e[o] = r))
                    }) : function(t, i, r) {
                        return e[0] = t, a(e, null, r, n), !n.pop()
                    }
                }),
                has: i(function(t) {
                    return function(n) {
                        return e(t, n).length > 0
                    }
                }),
                contains: i(function(t) {
                    return function(e) {
                        return (e.textContent || e.innerText || D(e)).indexOf(t) > -1
                    }
                }),
                lang: i(function(t) {
                    return pe.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(we, Me).toLowerCase(),
                    function(e) {
                        var n;
                        do
                            if (n = j ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function(t) {
                    return t === E
                },
                focus: function(t) {
                    return t === F.activeElement && (!F.hasFocus || F.hasFocus()) && !! (t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return t.disabled === !1
                },
                disabled: function(t) {
                    return t.disabled === !0
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !! t.checked || "option" === e && !! t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function(t) {
                    return !x.pseudos.empty(t)
                },
                header: function(t) {
                    return _e.test(t.nodeName)
                },
                input: function(t) {
                    return me.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: d(function() {
                    return [0]
                }),
                last: d(function(t, e) {
                    return [e - 1]
                }),
                eq: d(function(t, e, n) {
                    return [0 > n ? n + e : n]
                }),
                even: d(function(t, e) {
                    for (var n = 0; e > n; n += 2) t.push(n);
                    return t
                }),
                odd: d(function(t, e) {
                    for (var n = 1; e > n; n += 2) t.push(n);
                    return t
                }),
                lt: d(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
                    return t
                }),
                gt: d(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
                    return t
                })
            }
        }, x.pseudos.nth = x.pseudos.eq;
        for (M in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) x.pseudos[M] = o(M);
        for (M in {
            submit: !0,
            reset: !0
        }) x.pseudos[M] = l(M);
        return c.prototype = x.filters = x.pseudos, x.setFilters = new c, k = e.compile = function(t, e) {
            var n, i = [],
                a = [],
                r = q[t + " "];
            if (!r) {
                for (e || (e = h(t)), n = e.length; n--;) r = y(e[n]), r[W] ? i.push(r) : a.push(r);
                r = q(t, v(a, i))
            }
            return r
        }, L.sortStable = W.split("").sort(U).join("") === W, L.detectDuplicates = !! C, A(), L.sortDetached = a(function(t) {
            return 1 & t.compareDocumentPosition(F.createElement("div"))
        }), a(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function(t, e, n) {
            return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), L.attributes && a(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || r("value", function(t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), a(function(t) {
            return null == t.getAttribute("disabled")
        }) || r(ne, function(t, e, n) {
            var i;
            return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }), e
    }(t);
    re.find = ue, re.expr = ue.selectors, re.expr[":"] = re.expr.pseudos, re.unique = ue.uniqueSort, re.text = ue.getText, re.isXMLDoc = ue.isXML, re.contains = ue.contains;
    var ce = re.expr.match.needsContext,
        he = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        pe = /^.[^:#\[\.,]*$/;
    re.filter = function(t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? re.find.matchesSelector(i, t) ? [i] : [] : re.find.matches(t, re.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, re.fn.extend({
        find: function(t) {
            var e, n = [],
                i = this,
                a = i.length;
            if ("string" != typeof t) return this.pushStack(re(t).filter(function() {
                for (e = 0; a > e; e++)
                    if (re.contains(i[e], this)) return !0
            }));
            for (e = 0; a > e; e++) re.find(t, i[e], n);
            return n = this.pushStack(a > 1 ? re.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
        },
        filter: function(t) {
            return this.pushStack(i(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(i(this, t || [], !0))
        },
        is: function(t) {
            return !!i(this, "string" == typeof t && ce.test(t) ? re(t) : t || [], !1).length
        }
    });
    var fe, me = t.document,
        _e = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ge = re.fn.init = function(t, e) {
            var n, i;
            if (!t) return this;
            if ("string" == typeof t) {
                if (n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : _e.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || fe).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (e = e instanceof re ? e[0] : e, re.merge(this, re.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : me, !0)), he.test(n[1]) && re.isPlainObject(e))
                        for (n in e) re.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this
                }
                if (i = me.getElementById(n[2]), i && i.parentNode) {
                    if (i.id !== n[2]) return fe.find(t);
                    this.length = 1, this[0] = i
                }
                return this.context = me, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : re.isFunction(t) ? "undefined" != typeof fe.ready ? fe.ready(t) : t(re) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), re.makeArray(t, this))
        };
    ge.prototype = re.fn, fe = re(me);
    var ye = /^(?:parents|prev(?:Until|All))/,
        ve = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    re.extend({
        dir: function(t, e, n) {
            for (var i = [], a = t[e]; a && 9 !== a.nodeType && (void 0 === n || 1 !== a.nodeType || !re(a).is(n));) 1 === a.nodeType && i.push(a), a = a[e];
            return i
        },
        sibling: function(t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        }
    }), re.fn.extend({
        has: function(t) {
            var e, n = re(t, this),
                i = n.length;
            return this.filter(function() {
                for (e = 0; i > e; e++)
                    if (re.contains(this, n[e])) return !0
            })
        },
        closest: function(t, e) {
            for (var n, i = 0, a = this.length, r = [], s = ce.test(t) || "string" != typeof t ? re(t, e || this.context) : 0; a > i; i++)
                for (n = this[i]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && re.find.matchesSelector(n, t))) {
                        r.push(n);
                        break
                    }
            return this.pushStack(r.length > 1 ? re.unique(r) : r)
        },
        index: function(t) {
            return t ? "string" == typeof t ? re.inArray(this[0], re(t)) : re.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(re.unique(re.merge(this.get(), re(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), re.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return re.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return re.dir(t, "parentNode", n)
        },
        next: function(t) {
            return a(t, "nextSibling")
        },
        prev: function(t) {
            return a(t, "previousSibling")
        },
        nextAll: function(t) {
            return re.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return re.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return re.dir(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return re.dir(t, "previousSibling", n)
        },
        siblings: function(t) {
            return re.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return re.sibling(t.firstChild)
        },
        contents: function(t) {
            return re.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : re.merge([], t.childNodes)
        }
    }, function(t, e) {
        re.fn[t] = function(n, i) {
            var a = re.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (a = re.filter(i, a)), this.length > 1 && (ve[t] || (a = re.unique(a)), ye.test(t) && (a = a.reverse())), this.pushStack(a)
        }
    });
    var be = /\S+/g,
        we = {};
    re.Callbacks = function(t) {
        t = "string" == typeof t ? we[t] || r(t) : re.extend({}, t);
        var e, n, i, a, s, o, l = [],
            d = !t.once && [],
            u = function(r) {
                for (n = t.memory && r, i = !0, s = o || 0, o = 0, a = l.length, e = !0; l && a > s; s++)
                    if (l[s].apply(r[0], r[1]) === !1 && t.stopOnFalse) {
                        n = !1;
                        break
                    }
                e = !1, l && (d ? d.length && u(d.shift()) : n ? l = [] : c.disable())
            }, c = {
                add: function() {
                    if (l) {
                        var i = l.length;
                        ! function r(e) {
                            re.each(e, function(e, n) {
                                var i = re.type(n);
                                "function" === i ? t.unique && c.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
                            })
                        }(arguments), e ? a = l.length : n && (o = i, u(n))
                    }
                    return this
                },
                remove: function() {
                    return l && re.each(arguments, function(t, n) {
                        for (var i;
                            (i = re.inArray(n, l, i)) > -1;) l.splice(i, 1), e && (a >= i && a--, s >= i && s--)
                    }), this
                },
                has: function(t) {
                    return t ? re.inArray(t, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], a = 0, this
                },
                disable: function() {
                    return l = d = n = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return d = void 0, n || c.disable(), this
                },
                locked: function() {
                    return !d
                },
                fireWith: function(t, n) {
                    return !l || i && !d || (n = n || [], n = [t, n.slice ? n.slice() : n], e ? d.push(n) : u(n)), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return c
    }, re.extend({
        Deferred: function(t) {
            var e = [
                ["resolve", "done", re.Callbacks("once memory"), "resolved"],
                ["reject", "fail", re.Callbacks("once memory"), "rejected"],
                ["notify", "progress", re.Callbacks("memory")]
            ],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return a.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var t = arguments;
                        return re.Deferred(function(n) {
                            re.each(e, function(e, r) {
                                var s = re.isFunction(t[e]) && t[e];
                                a[r[1]](function() {
                                    var t = s && s.apply(this, arguments);
                                    t && re.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? re.extend(t, i) : i
                    }
                }, a = {};
            return i.pipe = i.then, re.each(e, function(t, r) {
                var s = r[2],
                    o = r[3];
                i[r[1]] = s.add, o && s.add(function() {
                    n = o
                }, e[1 ^ t][2].disable, e[2][2].lock), a[r[0]] = function() {
                    return a[r[0] + "With"](this === a ? i : this, arguments), this
                }, a[r[0] + "With"] = s.fireWith
            }), i.promise(a), t && t.call(a, a), a
        },
        when: function(t) {
            var e, n, i, a = 0,
                r = J.call(arguments),
                s = r.length,
                o = 1 !== s || t && re.isFunction(t.promise) ? s : 0,
                l = 1 === o ? t : re.Deferred(),
                d = function(t, n, i) {
                    return function(a) {
                        n[t] = this, i[t] = arguments.length > 1 ? J.call(arguments) : a, i === e ? l.notifyWith(n, i) : --o || l.resolveWith(n, i)
                    }
                };
            if (s > 1)
                for (e = new Array(s), n = new Array(s), i = new Array(s); s > a; a++) r[a] && re.isFunction(r[a].promise) ? r[a].promise().done(d(a, i, r)).fail(l.reject).progress(d(a, n, e)) : --o;
            return o || l.resolveWith(i, r), l.promise()
        }
    });
    var Me;
    re.fn.ready = function(t) {
        return re.ready.promise().done(t), this
    }, re.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? re.readyWait++ : re.ready(!0)
        },
        ready: function(t) {
            if (t === !0 ? !--re.readyWait : !re.isReady) {
                if (!me.body) return setTimeout(re.ready);
                re.isReady = !0, t !== !0 && --re.readyWait > 0 || (Me.resolveWith(me, [re]), re.fn.trigger && re(me).trigger("ready").off("ready"))
            }
        }
    }), re.ready.promise = function(e) {
        if (!Me)
            if (Me = re.Deferred(), "complete" === me.readyState) setTimeout(re.ready);
            else if (me.addEventListener) me.addEventListener("DOMContentLoaded", o, !1), t.addEventListener("load", o, !1);
        else {
            me.attachEvent("onreadystatechange", o), t.attachEvent("onload", o);
            var n = !1;
            try {
                n = null == t.frameElement && me.documentElement
            } catch (i) {}
            n && n.doScroll && ! function a() {
                if (!re.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (t) {
                        return setTimeout(a, 50)
                    }
                    s(), re.ready()
                }
            }()
        }
        return Me.promise(e)
    };
    var Le, xe = "undefined";
    for (Le in re(ie)) break;
    ie.ownLast = "0" !== Le, ie.inlineBlockNeedsLayout = !1, re(function() {
        var t, e, n = me.getElementsByTagName("body")[0];
        n && (t = me.createElement("div"), t.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", e = me.createElement("div"), n.appendChild(t).appendChild(e), typeof e.style.zoom !== xe && (e.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (ie.inlineBlockNeedsLayout = 3 === e.offsetWidth) && (n.style.zoom = 1)), n.removeChild(t), t = e = null)
    }),
    function() {
        var t = me.createElement("div");
        if (null == ie.deleteExpando) {
            ie.deleteExpando = !0;
            try {
                delete t.test
            } catch (e) {
                ie.deleteExpando = !1
            }
        }
        t = null
    }(), re.acceptData = function(t) {
        var e = re.noData[(t.nodeName + " ").toLowerCase()],
            n = +t.nodeType || 1;
        return 1 !== n && 9 !== n ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
    };
    var De = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Te = /([A-Z])/g;
    re.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(t) {
            return t = t.nodeType ? re.cache[t[re.expando]] : t[re.expando], !! t && !d(t)
        },
        data: function(t, e, n) {
            return u(t, e, n)
        },
        removeData: function(t, e) {
            return c(t, e)
        },
        _data: function(t, e, n) {
            return u(t, e, n, !0)
        },
        _removeData: function(t, e) {
            return c(t, e, !0)
        }
    }), re.fn.extend({
        data: function(t, e) {
            var n, i, a, r = this[0],
                s = r && r.attributes;
            if (void 0 === t) {
                if (this.length && (a = re.data(r), 1 === r.nodeType && !re._data(r, "parsedAttrs"))) {
                    for (n = s.length; n--;) i = s[n].name, 0 === i.indexOf("data-") && (i = re.camelCase(i.slice(5)), l(r, i, a[i]));
                    re._data(r, "parsedAttrs", !0)
                }
                return a
            }
            return "object" == typeof t ? this.each(function() {
                re.data(this, t)
            }) : arguments.length > 1 ? this.each(function() {
                re.data(this, t, e)
            }) : r ? l(r, t, re.data(r, t)) : void 0
        },
        removeData: function(t) {
            return this.each(function() {
                re.removeData(this, t)
            })
        }
    }), re.extend({
        queue: function(t, e, n) {
            var i;
            return t ? (e = (e || "fx") + "queue", i = re._data(t, e), n && (!i || re.isArray(n) ? i = re._data(t, e, re.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = re.queue(t, e),
                i = n.length,
                a = n.shift(),
                r = re._queueHooks(t, e),
                s = function() {
                    re.dequeue(t, e)
                };
            "inprogress" === a && (a = n.shift(), i--), a && ("fx" === e && n.unshift("inprogress"), delete r.stop, a.call(t, s, r)), !i && r && r.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return re._data(t, n) || re._data(t, n, {
                empty: re.Callbacks("once memory").add(function() {
                    re._removeData(t, e + "queue"), re._removeData(t, n)
                })
            })
        }
    }), re.fn.extend({
        queue: function(t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? re.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var n = re.queue(this, t, e);
                re._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && re.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                re.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n, i = 1,
                a = re.Deferred(),
                r = this,
                s = this.length,
                o = function() {
                    --i || a.resolveWith(r, [r])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) n = re._data(r[s], t + "queueHooks"), n && n.empty && (i++, n.empty.add(o));
            return o(), a.promise(e)
        }
    });
    var ke = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ye = ["Top", "Right", "Bottom", "Left"],
        Se = function(t, e) {
            return t = e || t, "none" === re.css(t, "display") || !re.contains(t.ownerDocument, t)
        }, Ce = re.access = function(t, e, n, i, a, r, s) {
            var o = 0,
                l = t.length,
                d = null == n;
            if ("object" === re.type(n)) {
                a = !0;
                for (o in n) re.access(t, e, o, n[o], !0, r, s)
            } else if (void 0 !== i && (a = !0, re.isFunction(i) || (s = !0), d && (s ? (e.call(t, i), e = null) : (d = e, e = function(t, e, n) {
                return d.call(re(t), n)
            })), e))
                for (; l > o; o++) e(t[o], n, s ? i : i.call(t[o], o, e(t[o], n)));
            return a ? t : d ? e.call(t) : l ? e(t[0], n) : r
        }, Ae = /^(?:checkbox|radio)$/i;
    ! function() {
        var t = me.createDocumentFragment(),
            e = me.createElement("div"),
            n = me.createElement("input");
        if (e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a>", ie.leadingWhitespace = 3 === e.firstChild.nodeType, ie.tbody = !e.getElementsByTagName("tbody").length, ie.htmlSerialize = !! e.getElementsByTagName("link").length, ie.html5Clone = "<:nav></:nav>" !== me.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, t.appendChild(n), ie.appendChecked = n.checked, e.innerHTML = "<textarea>x</textarea>", ie.noCloneChecked = !! e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", ie.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, ie.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function() {
            ie.noCloneEvent = !1
        }), e.cloneNode(!0).click()), null == ie.deleteExpando) {
            ie.deleteExpando = !0;
            try {
                delete e.test
            } catch (i) {
                ie.deleteExpando = !1
            }
        }
        t = e = n = null
    }(),
    function() {
        var e, n, i = me.createElement("div");
        for (e in {
            submit: !0,
            change: !0,
            focusin: !0
        }) n = "on" + e, (ie[e + "Bubbles"] = n in t) || (i.setAttribute(n, "t"), ie[e + "Bubbles"] = i.attributes[n].expando === !1);
        i = null
    }();
    var Fe = /^(?:input|select|textarea)$/i,
        Ee = /^key/,
        je = /^(?:mouse|contextmenu)|click/,
        Ne = /^(?:focusinfocus|focusoutblur)$/,
        Ie = /^([^.]*)(?:\.(.+)|)$/;
    re.event = {
        global: {},
        add: function(t, e, n, i, a) {
            var r, s, o, l, d, u, c, h, p, f, m, _ = re._data(t);
            if (_) {
                for (n.handler && (l = n, n = l.handler, a = l.selector), n.guid || (n.guid = re.guid++), (s = _.events) || (s = _.events = {}), (u = _.handle) || (u = _.handle = function(t) {
                    return typeof re === xe || t && re.event.triggered === t.type ? void 0 : re.event.dispatch.apply(u.elem, arguments)
                }, u.elem = t), e = (e || "").match(be) || [""], o = e.length; o--;) r = Ie.exec(e[o]) || [], p = m = r[1], f = (r[2] || "").split(".").sort(), p && (d = re.event.special[p] || {}, p = (a ? d.delegateType : d.bindType) || p, d = re.event.special[p] || {}, c = re.extend({
                    type: p,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: a,
                    needsContext: a && re.expr.match.needsContext.test(a),
                    namespace: f.join(".")
                }, l), (h = s[p]) || (h = s[p] = [], h.delegateCount = 0, d.setup && d.setup.call(t, i, f, u) !== !1 || (t.addEventListener ? t.addEventListener(p, u, !1) : t.attachEvent && t.attachEvent("on" + p, u))), d.add && (d.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), a ? h.splice(h.delegateCount++, 0, c) : h.push(c), re.event.global[p] = !0);
                t = null
            }
        },
        remove: function(t, e, n, i, a) {
            var r, s, o, l, d, u, c, h, p, f, m, _ = re.hasData(t) && re._data(t);
            if (_ && (u = _.events)) {
                for (e = (e || "").match(be) || [""], d = e.length; d--;)
                    if (o = Ie.exec(e[d]) || [], p = m = o[1], f = (o[2] || "").split(".").sort(), p) {
                        for (c = re.event.special[p] || {}, p = (i ? c.delegateType : c.bindType) || p, h = u[p] || [], o = o[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = h.length; r--;) s = h[r], !a && m !== s.origType || n && n.guid !== s.guid || o && !o.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (h.splice(r, 1), s.selector && h.delegateCount--, c.remove && c.remove.call(t, s));
                        l && !h.length && (c.teardown && c.teardown.call(t, f, _.handle) !== !1 || re.removeEvent(t, p, _.handle), delete u[p])
                    } else
                        for (p in u) re.event.remove(t, p + e[d], n, i, !0);
                re.isEmptyObject(u) && (delete _.handle, re._removeData(t, "events"))
            }
        },
        trigger: function(e, n, i, a) {
            var r, s, o, l, d, u, c, h = [i || me],
                p = ee.call(e, "type") ? e.type : e,
                f = ee.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = u = i = i || me, 3 !== i.nodeType && 8 !== i.nodeType && !Ne.test(p + re.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), s = p.indexOf(":") < 0 && "on" + p, e = e[re.expando] ? e : new re.Event(p, "object" == typeof e && e), e.isTrigger = a ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : re.makeArray(n, [e]), d = re.event.special[p] || {}, a || !d.trigger || d.trigger.apply(i, n) !== !1)) {
                if (!a && !d.noBubble && !re.isWindow(i)) {
                    for (l = d.delegateType || p, Ne.test(l + p) || (o = o.parentNode); o; o = o.parentNode) h.push(o), u = o;
                    u === (i.ownerDocument || me) && h.push(u.defaultView || u.parentWindow || t)
                }
                for (c = 0;
                    (o = h[c++]) && !e.isPropagationStopped();) e.type = c > 1 ? l : d.bindType || p, r = (re._data(o, "events") || {})[e.type] && re._data(o, "handle"), r && r.apply(o, n), r = s && o[s], r && r.apply && re.acceptData(o) && (e.result = r.apply(o, n), e.result === !1 && e.preventDefault());
                if (e.type = p, !a && !e.isDefaultPrevented() && (!d._default || d._default.apply(h.pop(), n) === !1) && re.acceptData(i) && s && i[p] && !re.isWindow(i)) {
                    u = i[s], u && (i[s] = null), re.event.triggered = p;
                    try {
                        i[p]()
                    } catch (m) {}
                    re.event.triggered = void 0, u && (i[s] = u)
                }
                return e.result
            }
        },
        dispatch: function(t) {
            t = re.event.fix(t);
            var e, n, i, a, r, s = [],
                o = J.call(arguments),
                l = (re._data(this, "events") || {})[t.type] || [],
                d = re.event.special[t.type] || {};
            if (o[0] = t, t.delegateTarget = this, !d.preDispatch || d.preDispatch.call(this, t) !== !1) {
                for (s = re.event.handlers.call(this, t, l), e = 0;
                    (a = s[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = a.elem, r = 0;
                        (i = a.handlers[r++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(i.namespace)) && (t.handleObj = i, t.data = i.data, n = ((re.event.special[i.origType] || {}).handle || i.handler).apply(a.elem, o), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                return d.postDispatch && d.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var n, i, a, r, s = [],
                o = e.delegateCount,
                l = t.target;
            if (o && l.nodeType && (!t.button || "click" !== t.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                        for (a = [], r = 0; o > r; r++) i = e[r], n = i.selector + " ", void 0 === a[n] && (a[n] = i.needsContext ? re(n, this).index(l) >= 0 : re.find(n, this, null, [l]).length), a[n] && a.push(i);
                        a.length && s.push({
                            elem: l,
                            handlers: a
                        })
                    }
            return o < e.length && s.push({
                elem: this,
                handlers: e.slice(o)
            }), s
        },
        fix: function(t) {
            if (t[re.expando]) return t;
            var e, n, i, a = t.type,
                r = t,
                s = this.fixHooks[a];
            for (s || (this.fixHooks[a] = s = je.test(a) ? this.mouseHooks : Ee.test(a) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new re.Event(r), e = i.length; e--;) n = i[e], t[n] = r[n];
            return t.target || (t.target = r.srcElement || me), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !! t.metaKey, s.filter ? s.filter(t, r) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var n, i, a, r = e.button,
                    s = e.fromElement;
                return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || me, a = i.documentElement, n = i.body, t.pageX = e.clientX + (a && a.scrollLeft || n && n.scrollLeft || 0) - (a && a.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (a && a.scrollTop || n && n.scrollTop || 0) - (a && a.clientTop || n && n.clientTop || 0)), !t.relatedTarget && s && (t.relatedTarget = s === t.target ? e.toElement : s), t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== f() && this.focus) try {
                        return this.focus(), !1
                    } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === f() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return re.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(t) {
                    return re.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, n, i) {
            var a = re.extend(new re.Event, n, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? re.event.trigger(a, null, e) : re.event.dispatch.call(e, a), a.isDefaultPrevented() && n.preventDefault()
        }
    }, re.removeEvent = me.removeEventListener ? function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n, !1)
    } : function(t, e, n) {
        var i = "on" + e;
        t.detachEvent && (typeof t[i] === xe && (t[i] = null), t.detachEvent(i, n))
    }, re.Event = function(t, e) {
        return this instanceof re.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && (t.returnValue === !1 || t.getPreventDefault && t.getPreventDefault()) ? h : p) : this.type = t, e && re.extend(this, e), this.timeStamp = t && t.timeStamp || re.now(), void(this[re.expando] = !0)) : new re.Event(t, e)
    }, re.Event.prototype = {
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = h, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = h, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = h, this.stopPropagation()
        }
    }, re.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(t, e) {
        re.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, i = this,
                    a = t.relatedTarget,
                    r = t.handleObj;
                return (!a || a !== i && !re.contains(i, a)) && (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), ie.submitBubbles || (re.event.special.submit = {
        setup: function() {
            return re.nodeName(this, "form") ? !1 : void re.event.add(this, "click._submit keypress._submit", function(t) {
                var e = t.target,
                    n = re.nodeName(e, "input") || re.nodeName(e, "button") ? e.form : void 0;
                n && !re._data(n, "submitBubbles") && (re.event.add(n, "submit._submit", function(t) {
                    t._submit_bubble = !0
                }), re._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(t) {
            t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && re.event.simulate("submit", this.parentNode, t, !0))
        },
        teardown: function() {
            return re.nodeName(this, "form") ? !1 : void re.event.remove(this, "._submit")
        }
    }), ie.changeBubbles || (re.event.special.change = {
        setup: function() {
            return Fe.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (re.event.add(this, "propertychange._change", function(t) {
                "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
            }), re.event.add(this, "click._change", function(t) {
                this._just_changed && !t.isTrigger && (this._just_changed = !1), re.event.simulate("change", this, t, !0)
            })), !1) : void re.event.add(this, "beforeactivate._change", function(t) {
                var e = t.target;
                Fe.test(e.nodeName) && !re._data(e, "changeBubbles") && (re.event.add(e, "change._change", function(t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || re.event.simulate("change", this.parentNode, t, !0)
                }), re._data(e, "changeBubbles", !0))
            })
        },
        handle: function(t) {
            var e = t.target;
            return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return re.event.remove(this, "._change"), !Fe.test(this.nodeName)
        }
    }), ie.focusinBubbles || re.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = function(t) {
            re.event.simulate(e, t.target, re.event.fix(t), !0)
        };
        re.event.special[e] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    a = re._data(i, e);
                a || i.addEventListener(t, n, !0), re._data(i, e, (a || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    a = re._data(i, e) - 1;
                a ? re._data(i, e, a) : (i.removeEventListener(t, n, !0), re._removeData(i, e))
            }
        }
    }), re.fn.extend({
        on: function(t, e, n, i, a) {
            var r, s;
            if ("object" == typeof t) {
                "string" != typeof e && (n = n || e, e = void 0);
                for (r in t) this.on(r, e, n, t[r], a);
                return this
            }
            if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" == typeof e ? (i = n, n = void 0) : (i = n, n = e, e = void 0)), i === !1) i = p;
            else if (!i) return this;
            return 1 === a && (s = i, i = function(t) {
                return re().off(t), s.apply(this, arguments)
            }, i.guid = s.guid || (s.guid = re.guid++)), this.each(function() {
                re.event.add(this, t, i, n, e)
            })
        },
        one: function(t, e, n, i) {
            return this.on(t, e, n, i, 1)
        },
        off: function(t, e, n) {
            var i, a;
            if (t && t.preventDefault && t.handleObj) return i = t.handleObj, re(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof t) {
                for (a in t) this.off(a, e, t[a]);
                return this
            }
            return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = p), this.each(function() {
                re.event.remove(this, t, n, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                re.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            return n ? re.event.trigger(t, e, n, !0) : void 0
        }
    });
    var He = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Pe = / jQuery\d+="(?:null|\d+)"/g,
        We = new RegExp("<(?:" + He + ")[\\s/>]", "i"),
        Oe = /^\s+/,
        $e = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Be = /<([\w:]+)/,
        ze = /<tbody/i,
        Re = /<|&#?\w+;/,
        qe = /<(?:script|style|link)/i,
        Ue = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ve = /^$|\/(?:java|ecma)script/i,
        Ge = /^true\/(.*)/,
        Je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Xe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ie.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }, Ke = m(me),
        Qe = Ke.appendChild(me.createElement("div"));
    Xe.optgroup = Xe.option, Xe.tbody = Xe.tfoot = Xe.colgroup = Xe.caption = Xe.thead, Xe.th = Xe.td, re.extend({
        clone: function(t, e, n) {
            var i, a, r, s, o, l = re.contains(t.ownerDocument, t);
            if (ie.html5Clone || re.isXMLDoc(t) || !We.test("<" + t.nodeName + ">") ? r = t.cloneNode(!0) : (Qe.innerHTML = t.outerHTML, Qe.removeChild(r = Qe.firstChild)), !(ie.noCloneEvent && ie.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || re.isXMLDoc(t)))
                for (i = _(r), o = _(t), s = 0; null != (a = o[s]); ++s) i[s] && L(a, i[s]);
            if (e)
                if (n)
                    for (o = o || _(t), i = i || _(r), s = 0; null != (a = o[s]); s++) M(a, i[s]);
                else M(t, r);
            return i = _(r, "script"), i.length > 0 && w(i, !l && _(t, "script")), i = o = a = null, r
        },
        buildFragment: function(t, e, n, i) {
            for (var a, r, s, o, l, d, u, c = t.length, h = m(e), p = [], f = 0; c > f; f++)
                if (r = t[f], r || 0 === r)
                    if ("object" === re.type(r)) re.merge(p, r.nodeType ? [r] : r);
                    else if (Re.test(r)) {
                for (o = o || h.appendChild(e.createElement("div")), l = (Be.exec(r) || ["", ""])[1].toLowerCase(), u = Xe[l] || Xe._default, o.innerHTML = u[1] + r.replace($e, "<$1></$2>") + u[2], a = u[0]; a--;) o = o.lastChild;
                if (!ie.leadingWhitespace && Oe.test(r) && p.push(e.createTextNode(Oe.exec(r)[0])), !ie.tbody)
                    for (r = "table" !== l || ze.test(r) ? "<table>" !== u[1] || ze.test(r) ? 0 : o : o.firstChild, a = r && r.childNodes.length; a--;) re.nodeName(d = r.childNodes[a], "tbody") && !d.childNodes.length && r.removeChild(d);
                for (re.merge(p, o.childNodes), o.textContent = ""; o.firstChild;) o.removeChild(o.firstChild);
                o = h.lastChild
            } else p.push(e.createTextNode(r));
            for (o && h.removeChild(o), ie.appendChecked || re.grep(_(p, "input"), g), f = 0; r = p[f++];)
                if ((!i || -1 === re.inArray(r, i)) && (s = re.contains(r.ownerDocument, r), o = _(h.appendChild(r), "script"), s && w(o), n))
                    for (a = 0; r = o[a++];) Ve.test(r.type || "") && n.push(r);
            return o = null, h
        },
        cleanData: function(t, e) {
            for (var n, i, a, r, s = 0, o = re.expando, l = re.cache, d = ie.deleteExpando, u = re.event.special; null != (n = t[s]); s++)
                if ((e || re.acceptData(n)) && (a = n[o], r = a && l[a])) {
                    if (r.events)
                        for (i in r.events) u[i] ? re.event.remove(n, i) : re.removeEvent(n, i, r.handle);
                    l[a] && (delete l[a], d ? delete n[o] : typeof n.removeAttribute !== xe ? n.removeAttribute(o) : n[o] = null, G.push(a))
                }
        }
    }), re.fn.extend({
        text: function(t) {
            return Ce(this, function(t) {
                return void 0 === t ? re.text(this) : this.empty().append((this[0] && this[0].ownerDocument || me).createTextNode(t))
            }, null, t, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = y(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = y(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function(t, e) {
            for (var n, i = t ? re.filter(t, this) : this, a = 0; null != (n = i[a]); a++) e || 1 !== n.nodeType || re.cleanData(_(n)), n.parentNode && (e && re.contains(n.ownerDocument, n) && w(_(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && re.cleanData(_(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                t.options && re.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function(t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                return re.clone(this, t, e)
            })
        },
        html: function(t) {
            return Ce(this, function(t) {
                var e = this[0] || {}, n = 0,
                    i = this.length;
                if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(Pe, "") : void 0;
                if (!("string" != typeof t || qe.test(t) || !ie.htmlSerialize && We.test(t) || !ie.leadingWhitespace && Oe.test(t) || Xe[(Be.exec(t) || ["", ""])[1].toLowerCase()])) {
                    t = t.replace($e, "<$1></$2>");
                    try {
                        for (; i > n; n++) e = this[n] || {}, 1 === e.nodeType && (re.cleanData(_(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (a) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = arguments[0];
            return this.domManip(arguments, function(e) {
                t = this.parentNode, re.cleanData(_(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(t, e) {
            t = X.apply([], t);
            var n, i, a, r, s, o, l = 0,
                d = this.length,
                u = this,
                c = d - 1,
                h = t[0],
                p = re.isFunction(h);
            if (p || d > 1 && "string" == typeof h && !ie.checkClone && Ue.test(h)) return this.each(function(n) {
                var i = u.eq(n);
                p && (t[0] = h.call(this, n, i.html())), i.domManip(t, e)
            });
            if (d && (o = re.buildFragment(t, this[0].ownerDocument, !1, this), n = o.firstChild, 1 === o.childNodes.length && (o = n), n)) {
                for (r = re.map(_(o, "script"), v), a = r.length; d > l; l++) i = o, l !== c && (i = re.clone(i, !0, !0), a && re.merge(r, _(i, "script"))), e.call(this[l], i, l);
                if (a)
                    for (s = r[r.length - 1].ownerDocument, re.map(r, b), l = 0; a > l; l++) i = r[l], Ve.test(i.type || "") && !re._data(i, "globalEval") && re.contains(s, i) && (i.src ? re._evalUrl && re._evalUrl(i.src) : re.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Je, "")));
                o = n = null
            }
            return this
        }
    }), re.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        re.fn[t] = function(t) {
            for (var n, i = 0, a = [], r = re(t), s = r.length - 1; s >= i; i++) n = i === s ? this : this.clone(!0), re(r[i])[e](n), K.apply(a, n.get());
            return this.pushStack(a)
        }
    });
    var Ze, tn = {};
    ! function() {
        var t, e, n = me.createElement("div"),
            i = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = n.getElementsByTagName("a")[0], t.style.cssText = "float:left;opacity:.5", ie.opacity = /^0.5/.test(t.style.opacity), ie.cssFloat = !! t.style.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === n.style.backgroundClip, t = n = null, ie.shrinkWrapBlocks = function() {
            var t, n, a, r;
            if (null == e) {
                if (t = me.getElementsByTagName("body")[0], !t) return;
                r = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", n = me.createElement("div"), a = me.createElement("div"), t.appendChild(n).appendChild(a), e = !1, typeof a.style.zoom !== xe && (a.style.cssText = i + ";width:1px;padding:1px;zoom:1", a.innerHTML = "<div></div>", a.firstChild.style.width = "5px", e = 3 !== a.offsetWidth), t.removeChild(n), t = n = a = null
            }
            return e
        }
    }();
    var en, nn, an = /^margin/,
        rn = new RegExp("^(" + ke + ")(?!px)[a-z%]+$", "i"),
        sn = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (en = function(t) {
        return t.ownerDocument.defaultView.getComputedStyle(t, null)
    }, nn = function(t, e, n) {
        var i, a, r, s, o = t.style;
        return n = n || en(t), s = n ? n.getPropertyValue(e) || n[e] : void 0, n && ("" !== s || re.contains(t.ownerDocument, t) || (s = re.style(t, e)), rn.test(s) && an.test(e) && (i = o.width, a = o.minWidth, r = o.maxWidth, o.minWidth = o.maxWidth = o.width = s, s = n.width, o.width = i, o.minWidth = a, o.maxWidth = r)), void 0 === s ? s : s + ""
    }) : me.documentElement.currentStyle && (en = function(t) {
        return t.currentStyle
    }, nn = function(t, e, n) {
        var i, a, r, s, o = t.style;
        return n = n || en(t), s = n ? n[e] : void 0, null == s && o && o[e] && (s = o[e]), rn.test(s) && !sn.test(e) && (i = o.left, a = t.runtimeStyle, r = a && a.left, r && (a.left = t.currentStyle.left), o.left = "fontSize" === e ? "1em" : s, s = o.pixelLeft + "px", o.left = i, r && (a.left = r)), void 0 === s ? s : s + "" || "auto"
    }), ! function() {
        function e() {
            var e, n, i = me.getElementsByTagName("body")[0];
            i && (e = me.createElement("div"), n = me.createElement("div"), e.style.cssText = d, i.appendChild(e).appendChild(n), n.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", re.swap(i, null != i.style.zoom ? {
                zoom: 1
            } : {}, function() {
                a = 4 === n.offsetWidth
            }), r = !0, s = !1, o = !0, t.getComputedStyle && (s = "1%" !== (t.getComputedStyle(n, null) || {}).top, r = "4px" === (t.getComputedStyle(n, null) || {
                width: "4px"
            }).width), i.removeChild(e), n = i = null)
        }
        var n, i, a, r, s, o, l = me.createElement("div"),
            d = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
            u = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        l.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = l.getElementsByTagName("a")[0], n.style.cssText = "float:left;opacity:.5", ie.opacity = /^0.5/.test(n.style.opacity), ie.cssFloat = !! n.style.cssFloat, l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === l.style.backgroundClip, n = l = null, re.extend(ie, {
            reliableHiddenOffsets: function() {
                if (null != i) return i;
                var t, e, n, a = me.createElement("div"),
                    r = me.getElementsByTagName("body")[0];
                return r ? (a.setAttribute("className", "t"), a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = me.createElement("div"), t.style.cssText = d, r.appendChild(t).appendChild(a), a.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = a.getElementsByTagName("td"), e[0].style.cssText = "padding:0;margin:0;border:0;display:none", n = 0 === e[0].offsetHeight, e[0].style.display = "", e[1].style.display = "none", i = n && 0 === e[0].offsetHeight, r.removeChild(t), a = r = null, i) : void 0
            },
            boxSizing: function() {
                return null == a && e(), a
            },
            boxSizingReliable: function() {
                return null == r && e(), r
            },
            pixelPosition: function() {
                return null == s && e(), s
            },
            reliableMarginRight: function() {
                var e, n, i, a;
                if (null == o && t.getComputedStyle) {
                    if (e = me.getElementsByTagName("body")[0], !e) return;
                    n = me.createElement("div"), i = me.createElement("div"), n.style.cssText = d, e.appendChild(n).appendChild(i), a = i.appendChild(me.createElement("div")), a.style.cssText = i.style.cssText = u, a.style.marginRight = a.style.width = "0", i.style.width = "1px", o = !parseFloat((t.getComputedStyle(a, null) || {}).marginRight), e.removeChild(n)
                }
                return o
            }
        })
    }(), re.swap = function(t, e, n, i) {
        var a, r, s = {};
        for (r in e) s[r] = t.style[r], t.style[r] = e[r];
        a = n.apply(t, i || []);
        for (r in e) t.style[r] = s[r];
        return a
    };
    var on = /alpha\([^)]*\)/i,
        ln = /opacity\s*=\s*([^)]*)/,
        dn = /^(none|table(?!-c[ea]).+)/,
        un = new RegExp("^(" + ke + ")(.*)$", "i"),
        cn = new RegExp("^([+-])=(" + ke + ")", "i"),
        hn = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, pn = {
            letterSpacing: 0,
            fontWeight: 400
        }, fn = ["Webkit", "O", "Moz", "ms"];
    re.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = nn(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ie.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var a, r, s, o = re.camelCase(e),
                    l = t.style;
                if (e = re.cssProps[o] || (re.cssProps[o] = k(l, o)), s = re.cssHooks[e] || re.cssHooks[o], void 0 === n) return s && "get" in s && void 0 !== (a = s.get(t, !1, i)) ? a : l[e];
                if (r = typeof n, "string" === r && (a = cn.exec(n)) && (n = (a[1] + 1) * a[2] + parseFloat(re.css(t, e)), r = "number"), null != n && n === n && ("number" !== r || re.cssNumber[o] || (n += "px"), ie.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(s && "set" in s && void 0 === (n = s.set(t, n, i))))) try {
                    l[e] = "", l[e] = n
                } catch (d) {}
            }
        },
        css: function(t, e, n, i) {
            var a, r, s, o = re.camelCase(e);
            return e = re.cssProps[o] || (re.cssProps[o] = k(t.style, o)), s = re.cssHooks[e] || re.cssHooks[o], s && "get" in s && (r = s.get(t, !0, n)), void 0 === r && (r = nn(t, e, i)), "normal" === r && e in pn && (r = pn[e]), "" === n || n ? (a = parseFloat(r), n === !0 || re.isNumeric(a) ? a || 0 : r) : r
        }
    }), re.each(["height", "width"], function(t, e) {
        re.cssHooks[e] = {
            get: function(t, n, i) {
                return n ? 0 === t.offsetWidth && dn.test(re.css(t, "display")) ? re.swap(t, hn, function() {
                    return A(t, e, i)
                }) : A(t, e, i) : void 0
            },
            set: function(t, n, i) {
                var a = i && en(t);
                return S(t, n, i ? C(t, e, i, ie.boxSizing() && "border-box" === re.css(t, "boxSizing", !1, a), a) : 0)
            }
        }
    }), ie.opacity || (re.cssHooks.opacity = {
        get: function(t, e) {
            return ln.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function(t, e) {
            var n = t.style,
                i = t.currentStyle,
                a = re.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                r = i && i.filter || n.filter || "";
            n.zoom = 1, (e >= 1 || "" === e) && "" === re.trim(r.replace(on, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = on.test(r) ? r.replace(on, a) : r + " " + a)
        }
    }), re.cssHooks.marginRight = T(ie.reliableMarginRight, function(t, e) {
        return e ? re.swap(t, {
            display: "inline-block"
        }, nn, [t, "marginRight"]) : void 0
    }), re.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        re.cssHooks[t + e] = {
            expand: function(n) {
                for (var i = 0, a = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) a[t + Ye[i] + e] = r[i] || r[i - 2] || r[0];
                return a
            }
        }, an.test(t) || (re.cssHooks[t + e].set = S)
    }), re.fn.extend({
        css: function(t, e) {
            return Ce(this, function(t, e, n) {
                var i, a, r = {}, s = 0;
                if (re.isArray(e)) {
                    for (i = en(t), a = e.length; a > s; s++) r[e[s]] = re.css(t, e[s], !1, i);
                    return r
                }
                return void 0 !== n ? re.style(t, e, n) : re.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return Y(this, !0)
        },
        hide: function() {
            return Y(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Se(this) ? re(this).show() : re(this).hide()
            })
        }
    }), re.Tween = F, F.prototype = {
        constructor: F,
        init: function(t, e, n, i, a, r) {
            this.elem = t, this.prop = n, this.easing = a || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (re.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = F.propHooks[this.prop];
            return t && t.get ? t.get(this) : F.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = F.propHooks[this.prop];
            return this.pos = e = this.options.duration ? re.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : F.propHooks._default.set(this), this
        }
    }, F.prototype.init.prototype = F.prototype, F.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = re.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            },
            set: function(t) {
                re.fx.step[t.prop] ? re.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[re.cssProps[t.prop]] || re.cssHooks[t.prop]) ? re.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, F.propHooks.scrollTop = F.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, re.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, re.fx = F.prototype.init, re.fx.step = {};
    var mn, _n, gn = /^(?:toggle|show|hide)$/,
        yn = new RegExp("^(?:([+-])=|)(" + ke + ")([a-z%]*)$", "i"),
        vn = /queueHooks$/,
        bn = [I],
        wn = {
            "*": [
                function(t, e) {
                    var n = this.createTween(t, e),
                        i = n.cur(),
                        a = yn.exec(e),
                        r = a && a[3] || (re.cssNumber[t] ? "" : "px"),
                        s = (re.cssNumber[t] || "px" !== r && +i) && yn.exec(re.css(n.elem, t)),
                        o = 1,
                        l = 20;
                    if (s && s[3] !== r) {
                        r = r || s[3], a = a || [], s = +i || 1;
                        do o = o || ".5", s /= o, re.style(n.elem, t, s + r); while (o !== (o = n.cur() / i) && 1 !== o && --l)
                    }
                    return a && (s = n.start = +s || +i || 0, n.unit = r, n.end = a[1] ? s + (a[1] + 1) * a[2] : +a[2]), n
                }
            ]
        };
    re.Animation = re.extend(P, {
        tweener: function(t, e) {
            re.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
            for (var n, i = 0, a = t.length; a > i; i++) n = t[i], wn[n] = wn[n] || [], wn[n].unshift(e)
        },
        prefilter: function(t, e) {
            e ? bn.unshift(t) : bn.push(t)
        }
    }), re.speed = function(t, e, n) {
        var i = t && "object" == typeof t ? re.extend({}, t) : {
            complete: n || !n && e || re.isFunction(t) && t,
            duration: t,
            easing: n && e || e && !re.isFunction(e) && e
        };
        return i.duration = re.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in re.fx.speeds ? re.fx.speeds[i.duration] : re.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            re.isFunction(i.old) && i.old.call(this), i.queue && re.dequeue(this, i.queue)
        }, i
    }, re.fn.extend({
        fadeTo: function(t, e, n, i) {
            return this.filter(Se).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, i)
        },
        animate: function(t, e, n, i) {
            var a = re.isEmptyObject(t),
                r = re.speed(e, n, i),
                s = function() {
                    var e = P(this, re.extend({}, t), r);
                    (a || re._data(this, "finish")) && e.stop(!0)
                };
            return s.finish = s, a || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
        },
        stop: function(t, e, n) {
            var i = function(t) {
                var e = t.stop;
                delete t.stop, e(n)
            };
            return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                var e = !0,
                    a = null != t && t + "queueHooks",
                    r = re.timers,
                    s = re._data(this);
                if (a) s[a] && s[a].stop && i(s[a]);
                else
                    for (a in s) s[a] && s[a].stop && vn.test(a) && i(s[a]);
                for (a = r.length; a--;) r[a].elem !== this || null != t && r[a].queue !== t || (r[a].anim.stop(n), e = !1, r.splice(a, 1));
                (e || !n) && re.dequeue(this, t)
            })
        },
        finish: function(t) {
            return t !== !1 && (t = t || "fx"), this.each(function() {
                var e, n = re._data(this),
                    i = n[t + "queue"],
                    a = n[t + "queueHooks"],
                    r = re.timers,
                    s = i ? i.length : 0;
                for (n.finish = !0, re.queue(this, t, []), a && a.stop && a.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                for (e = 0; s > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                delete n.finish
            })
        }
    }), re.each(["toggle", "show", "hide"], function(t, e) {
        var n = re.fn[e];
        re.fn[e] = function(t, i, a) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(j(e, !0), t, i, a)
        }
    }), re.each({
        slideDown: j("show"),
        slideUp: j("hide"),
        slideToggle: j("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, e) {
        re.fn[t] = function(t, n, i) {
            return this.animate(e, t, n, i)
        }
    }), re.timers = [], re.fx.tick = function() {
        var t, e = re.timers,
            n = 0;
        for (mn = re.now(); n < e.length; n++) t = e[n], t() || e[n] !== t || e.splice(n--, 1);
        e.length || re.fx.stop(), mn = void 0
    }, re.fx.timer = function(t) {
        re.timers.push(t), t() ? re.fx.start() : re.timers.pop()
    }, re.fx.interval = 13, re.fx.start = function() {
        _n || (_n = setInterval(re.fx.tick, re.fx.interval))
    }, re.fx.stop = function() {
        clearInterval(_n), _n = null
    }, re.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, re.fn.delay = function(t, e) {
        return t = re.fx ? re.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, n) {
            var i = setTimeout(e, t);
            n.stop = function() {
                clearTimeout(i)
            }
        })
    },
    function() {
        var t, e, n, i, a = me.createElement("div");
        a.setAttribute("className", "t"), a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = a.getElementsByTagName("a")[0], n = me.createElement("select"), i = n.appendChild(me.createElement("option")), e = a.getElementsByTagName("input")[0], t.style.cssText = "top:1px", ie.getSetAttribute = "t" !== a.className, ie.style = /top/.test(t.getAttribute("style")), ie.hrefNormalized = "/a" === t.getAttribute("href"), ie.checkOn = !! e.value, ie.optSelected = i.selected, ie.enctype = !! me.createElement("form").enctype, n.disabled = !0, ie.optDisabled = !i.disabled, e = me.createElement("input"), e.setAttribute("value", ""), ie.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ie.radioValue = "t" === e.value, t = e = n = i = a = null
    }();
    var Mn = /\r/g;
    re.fn.extend({
        val: function(t) {
            var e, n, i, a = this[0];
            return arguments.length ? (i = re.isFunction(t), this.each(function(n) {
                var a;
                1 === this.nodeType && (a = i ? t.call(this, n, re(this).val()) : t, null == a ? a = "" : "number" == typeof a ? a += "" : re.isArray(a) && (a = re.map(a, function(t) {
                    return null == t ? "" : t + ""
                })), e = re.valHooks[this.type] || re.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, a, "value") || (this.value = a))
            })) : a ? (e = re.valHooks[a.type] || re.valHooks[a.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(a, "value")) ? n : (n = a.value, "string" == typeof n ? n.replace(Mn, "") : null == n ? "" : n)) : void 0
        }
    }), re.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = re.find.attr(t, "value");
                    return null != e ? e : re.text(t)
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, i = t.options, a = t.selectedIndex, r = "select-one" === t.type || 0 > a, s = r ? null : [], o = r ? a + 1 : i.length, l = 0 > a ? o : r ? a : 0; o > l; l++)
                        if (n = i[l], !(!n.selected && l !== a || (ie.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && re.nodeName(n.parentNode, "optgroup"))) {
                            if (e = re(n).val(), r) return e;
                            s.push(e)
                        }
                    return s
                },
                set: function(t, e) {
                    for (var n, i, a = t.options, r = re.makeArray(e), s = a.length; s--;)
                        if (i = a[s], re.inArray(re.valHooks.option.get(i), r) >= 0) try {
                            i.selected = n = !0
                        } catch (o) {
                            i.scrollHeight
                        } else i.selected = !1;
                    return n || (t.selectedIndex = -1), a
                }
            }
        }
    }), re.each(["radio", "checkbox"], function() {
        re.valHooks[this] = {
            set: function(t, e) {
                return re.isArray(e) ? t.checked = re.inArray(re(t).val(), e) >= 0 : void 0
            }
        }, ie.checkOn || (re.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var Ln, xn, Dn = re.expr.attrHandle,
        Tn = /^(?:checked|selected)$/i,
        kn = ie.getSetAttribute,
        Yn = ie.input;
    re.fn.extend({
        attr: function(t, e) {
            return Ce(this, re.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                re.removeAttr(this, t)
            })
        }
    }), re.extend({
        attr: function(t, e, n) {
            var i, a, r = t.nodeType;
            return t && 3 !== r && 8 !== r && 2 !== r ? typeof t.getAttribute === xe ? re.prop(t, e, n) : (1 === r && re.isXMLDoc(t) || (e = e.toLowerCase(), i = re.attrHooks[e] || (re.expr.match.bool.test(e) ? xn : Ln)), void 0 === n ? i && "get" in i && null !== (a = i.get(t, e)) ? a : (a = re.find.attr(t, e), null == a ? void 0 : a) : null !== n ? i && "set" in i && void 0 !== (a = i.set(t, n, e)) ? a : (t.setAttribute(e, n + ""), n) : void re.removeAttr(t, e)) : void 0
        },
        removeAttr: function(t, e) {
            var n, i, a = 0,
                r = e && e.match(be);
            if (r && 1 === t.nodeType)
                for (; n = r[a++];) i = re.propFix[n] || n, re.expr.match.bool.test(n) ? Yn && kn || !Tn.test(n) ? t[i] = !1 : t[re.camelCase("default-" + n)] = t[i] = !1 : re.attr(t, n, ""), t.removeAttribute(kn ? n : i)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!ie.radioValue && "radio" === e && re.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        }
    }), xn = {
        set: function(t, e, n) {
            return e === !1 ? re.removeAttr(t, n) : Yn && kn || !Tn.test(n) ? t.setAttribute(!kn && re.propFix[n] || n, n) : t[re.camelCase("default-" + n)] = t[n] = !0, n
        }
    }, re.each(re.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var n = Dn[e] || re.find.attr;
        Dn[e] = Yn && kn || !Tn.test(e) ? function(t, e, i) {
            var a, r;
            return i || (r = Dn[e], Dn[e] = a, a = null != n(t, e, i) ? e.toLowerCase() : null, Dn[e] = r), a
        } : function(t, e, n) {
            return n ? void 0 : t[re.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }), Yn && kn || (re.attrHooks.value = {
        set: function(t, e, n) {
            return re.nodeName(t, "input") ? void(t.defaultValue = e) : Ln && Ln.set(t, e, n)
        }
    }), kn || (Ln = {
        set: function(t, e, n) {
            var i = t.getAttributeNode(n);
            return i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n) ? e : void 0
        }
    }, Dn.id = Dn.name = Dn.coords = function(t, e, n) {
        var i;
        return n ? void 0 : (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
    }, re.valHooks.button = {
        get: function(t, e) {
            var n = t.getAttributeNode(e);
            return n && n.specified ? n.value : void 0
        },
        set: Ln.set
    }, re.attrHooks.contenteditable = {
        set: function(t, e, n) {
            Ln.set(t, "" === e ? !1 : e, n)
        }
    }, re.each(["width", "height"], function(t, e) {
        re.attrHooks[e] = {
            set: function(t, n) {
                return "" === n ? (t.setAttribute(e, "auto"), n) : void 0
            }
        }
    })), ie.style || (re.attrHooks.style = {
        get: function(t) {
            return t.style.cssText || void 0
        },
        set: function(t, e) {
            return t.style.cssText = e + ""
        }
    });
    var Sn = /^(?:input|select|textarea|button|object)$/i,
        Cn = /^(?:a|area)$/i;
    re.fn.extend({
        prop: function(t, e) {
            return Ce(this, re.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return t = re.propFix[t] || t, this.each(function() {
                try {
                    this[t] = void 0, delete this[t]
                } catch (e) {}
            })
        }
    }), re.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(t, e, n) {
            var i, a, r, s = t.nodeType;
            return t && 3 !== s && 8 !== s && 2 !== s ? (r = 1 !== s || !re.isXMLDoc(t), r && (e = re.propFix[e] || e, a = re.propHooks[e]), void 0 !== n ? a && "set" in a && void 0 !== (i = a.set(t, n, e)) ? i : t[e] = n : a && "get" in a && null !== (i = a.get(t, e)) ? i : t[e]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = re.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : Sn.test(t.nodeName) || Cn.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }
    }), ie.hrefNormalized || re.each(["href", "src"], function(t, e) {
        re.propHooks[e] = {
            get: function(t) {
                return t.getAttribute(e, 4)
            }
        }
    }), ie.optSelected || (re.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        }
    }), re.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        re.propFix[this.toLowerCase()] = this
    }), ie.enctype || (re.propFix.enctype = "encoding");
    var An = /[\t\r\n\f]/g;
    re.fn.extend({
        addClass: function(t) {
            var e, n, i, a, r, s, o = 0,
                l = this.length,
                d = "string" == typeof t && t;
            if (re.isFunction(t)) return this.each(function(e) {
                re(this).addClass(t.call(this, e, this.className))
            });
            if (d)
                for (e = (t || "").match(be) || []; l > o; o++)
                    if (n = this[o], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(An, " ") : " ")) {
                        for (r = 0; a = e[r++];) i.indexOf(" " + a + " ") < 0 && (i += a + " ");
                        s = re.trim(i), n.className !== s && (n.className = s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, a, r, s, o = 0,
                l = this.length,
                d = 0 === arguments.length || "string" == typeof t && t;
            if (re.isFunction(t)) return this.each(function(e) {
                re(this).removeClass(t.call(this, e, this.className))
            });
            if (d)
                for (e = (t || "").match(be) || []; l > o; o++)
                    if (n = this[o], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(An, " ") : "")) {
                        for (r = 0; a = e[r++];)
                            for (; i.indexOf(" " + a + " ") >= 0;) i = i.replace(" " + a + " ", " ");
                        s = t ? re.trim(i) : "", n.className !== s && (n.className = s)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(re.isFunction(t) ? function(n) {
                re(this).toggleClass(t.call(this, n, this.className, e), e)
            } : function() {
                if ("string" === n)
                    for (var e, i = 0, a = re(this), r = t.match(be) || []; e = r[i++];) a.hasClass(e) ? a.removeClass(e) : a.addClass(e);
                else(n === xe || "boolean" === n) && (this.className && re._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : re._data(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(An, " ").indexOf(e) >= 0) return !0;
            return !1
        }
    }), re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        re.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), re.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    });
    var Fn = re.now(),
        En = /\?/,
        jn = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    re.parseJSON = function(e) {
        if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
        var n, i = null,
            a = re.trim(e + "");
        return a && !re.trim(a.replace(jn, function(t, e, a, r) {
            return n && e && (i = 0), 0 === i ? t : (n = a || e, i += !r - !a, "")
        })) ? Function("return " + a)() : re.error("Invalid JSON: " + e)
    }, re.parseXML = function(e) {
        var n, i;
        if (!e || "string" != typeof e) return null;
        try {
            t.DOMParser ? (i = new DOMParser, n = i.parseFromString(e, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(e))
        } catch (a) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || re.error("Invalid XML: " + e), n
    };
    var Nn, In, Hn = /#.*$/,
        Pn = /([?&])_=[^&]*/,
        Wn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        On = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        $n = /^(?:GET|HEAD)$/,
        Bn = /^\/\//,
        zn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Rn = {}, qn = {}, Un = "*/".concat("*");
    try {
        In = location.href
    } catch (Vn) {
        In = me.createElement("a"), In.href = "", In = In.href
    }
    Nn = zn.exec(In.toLowerCase()) || [], re.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: In,
            type: "GET",
            isLocal: On.test(Nn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Un,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": re.parseJSON,
                "text xml": re.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? $($(t, re.ajaxSettings), e) : $(re.ajaxSettings, t)
        },
        ajaxPrefilter: W(Rn),
        ajaxTransport: W(qn),
        ajax: function(t, e) {
            function n(t, e, n, i) {
                var a, u, g, y, b, M = e;
                2 !== v && (v = 2, o && clearTimeout(o), d = void 0, s = i || "", w.readyState = t > 0 ? 4 : 0, a = t >= 200 && 300 > t || 304 === t, n && (y = B(c, w, n)), y = z(c, y, w, a), a ? (c.ifModified && (b = w.getResponseHeader("Last-Modified"), b && (re.lastModified[r] = b), b = w.getResponseHeader("etag"), b && (re.etag[r] = b)), 204 === t || "HEAD" === c.type ? M = "nocontent" : 304 === t ? M = "notmodified" : (M = y.state, u = y.data, g = y.error, a = !g)) : (g = M, (t || !M) && (M = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (e || M) + "", a ? f.resolveWith(h, [u, M, w]) : f.rejectWith(h, [w, M, g]), w.statusCode(_), _ = void 0, l && p.trigger(a ? "ajaxSuccess" : "ajaxError", [w, c, a ? u : g]), m.fireWith(h, [w, M]), l && (p.trigger("ajaxComplete", [w, c]), --re.active || re.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var i, a, r, s, o, l, d, u, c = re.ajaxSetup({}, e),
                h = c.context || c,
                p = c.context && (h.nodeType || h.jquery) ? re(h) : re.event,
                f = re.Deferred(),
                m = re.Callbacks("once memory"),
                _ = c.statusCode || {}, g = {}, y = {}, v = 0,
                b = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === v) {
                            if (!u)
                                for (u = {}; e = Wn.exec(s);) u[e[1].toLowerCase()] = e[2];
                            e = u[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === v ? s : null
                    },
                    setRequestHeader: function(t, e) {
                        var n = t.toLowerCase();
                        return v || (t = y[n] = y[n] || t, g[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return v || (c.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (2 > v)
                                for (e in t) _[e] = [_[e], t[e]];
                            else w.always(t[w.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || b;
                        return d && d.abort(e), n(0, e), this
                    }
                };
            if (f.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, c.url = ((t || c.url || In) + "").replace(Hn, "").replace(Bn, Nn[1] + "//"), c.type = e.method || e.type || c.method || c.type, c.dataTypes = re.trim(c.dataType || "*").toLowerCase().match(be) || [""], null == c.crossDomain && (i = zn.exec(c.url.toLowerCase()), c.crossDomain = !(!i || i[1] === Nn[1] && i[2] === Nn[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Nn[3] || ("http:" === Nn[1] ? "80" : "443")))), c.data && c.processData && "string" != typeof c.data && (c.data = re.param(c.data, c.traditional)), O(Rn, c, e, w), 2 === v) return w;
            l = c.global, l && 0 === re.active++ && re.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !$n.test(c.type), r = c.url, c.hasContent || (c.data && (r = c.url += (En.test(r) ? "&" : "?") + c.data, delete c.data), c.cache === !1 && (c.url = Pn.test(r) ? r.replace(Pn, "$1_=" + Fn++) : r + (En.test(r) ? "&" : "?") + "_=" + Fn++)), c.ifModified && (re.lastModified[r] && w.setRequestHeader("If-Modified-Since", re.lastModified[r]), re.etag[r] && w.setRequestHeader("If-None-Match", re.etag[r])), (c.data && c.hasContent && c.contentType !== !1 || e.contentType) && w.setRequestHeader("Content-Type", c.contentType), w.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + Un + "; q=0.01" : "") : c.accepts["*"]);
            for (a in c.headers) w.setRequestHeader(a, c.headers[a]);
            if (c.beforeSend && (c.beforeSend.call(h, w, c) === !1 || 2 === v)) return w.abort();
            b = "abort";
            for (a in {
                success: 1,
                error: 1,
                complete: 1
            }) w[a](c[a]);
            if (d = O(qn, c, e, w)) {
                w.readyState = 1, l && p.trigger("ajaxSend", [w, c]), c.async && c.timeout > 0 && (o = setTimeout(function() {
                    w.abort("timeout")
                }, c.timeout));
                try {
                    v = 1, d.send(g, n)
                } catch (M) {
                    if (!(2 > v)) throw M;
                    n(-1, M)
                }
            } else n(-1, "No Transport");
            return w
        },
        getJSON: function(t, e, n) {
            return re.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return re.get(t, void 0, e, "script")
        }
    }), re.each(["get", "post"], function(t, e) {
        re[e] = function(t, n, i, a) {
            return re.isFunction(n) && (a = a || i, i = n, n = void 0), re.ajax({
                url: t,
                type: e,
                dataType: a,
                data: n,
                success: i
            })
        }
    }), re.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        re.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), re._evalUrl = function(t) {
        return re.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, re.fn.extend({
        wrapAll: function(t) {
            if (re.isFunction(t)) return this.each(function(e) {
                re(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = re(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            return this.each(re.isFunction(t) ? function(e) {
                re(this).wrapInner(t.call(this, e))
            } : function() {
                var e = re(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = re.isFunction(t);
            return this.each(function(n) {
                re(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                re.nodeName(this, "body") || re(this).replaceWith(this.childNodes)
            }).end()
        }
    }), re.expr.filters.hidden = function(t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !ie.reliableHiddenOffsets() && "none" === (t.style && t.style.display || re.css(t, "display"))
    }, re.expr.filters.visible = function(t) {
        return !re.expr.filters.hidden(t)
    };
    var Gn = /%20/g,
        Jn = /\[\]$/,
        Xn = /\r?\n/g,
        Kn = /^(?:submit|button|image|reset|file)$/i,
        Qn = /^(?:input|select|textarea|keygen)/i;
    re.param = function(t, e) {
        var n, i = [],
            a = function(t, e) {
                e = re.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = re.ajaxSettings && re.ajaxSettings.traditional), re.isArray(t) || t.jquery && !re.isPlainObject(t)) re.each(t, function() {
            a(this.name, this.value)
        });
        else
            for (n in t) R(n, t[n], e, a);
        return i.join("&").replace(Gn, "+")
    }, re.fn.extend({
        serialize: function() {
            return re.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = re.prop(this, "elements");
                return t ? re.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !re(this).is(":disabled") && Qn.test(this.nodeName) && !Kn.test(t) && (this.checked || !Ae.test(t))
            }).map(function(t, e) {
                var n = re(this).val();
                return null == n ? null : re.isArray(n) ? re.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Xn, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(Xn, "\r\n")
                }
            }).get()
        }
    }), re.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && q() || U()
    } : q;
    var Zn = 0,
        ti = {}, ei = re.ajaxSettings.xhr();
    t.ActiveXObject && re(t).on("unload", function() {
        for (var t in ti) ti[t](void 0, !0)
    }), ie.cors = !! ei && "withCredentials" in ei, ei = ie.ajax = !! ei, ei && re.ajaxTransport(function(t) {
        if (!t.crossDomain || ie.cors) {
            var e;
            return {
                send: function(n, i) {
                    var a, r = t.xhr(),
                        s = ++Zn;
                    if (r.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (a in t.xhrFields) r[a] = t.xhrFields[a];
                    t.mimeType && r.overrideMimeType && r.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (a in n) void 0 !== n[a] && r.setRequestHeader(a, n[a] + "");
                    r.send(t.hasContent && t.data || null), e = function(n, a) {
                        var o, l, d;
                        if (e && (a || 4 === r.readyState))
                            if (delete ti[s], e = void 0, r.onreadystatechange = re.noop, a) 4 !== r.readyState && r.abort();
                            else {
                                d = {}, o = r.status, "string" == typeof r.responseText && (d.text = r.responseText);
                                try {
                                    l = r.statusText
                                } catch (u) {
                                    l = ""
                                }
                                o || !t.isLocal || t.crossDomain ? 1223 === o && (o = 204) : o = d.text ? 200 : 404
                            }
                        d && i(o, l, d, r.getAllResponseHeaders())
                    }, t.async ? 4 === r.readyState ? setTimeout(e) : r.onreadystatechange = ti[s] = e : e()
                },
                abort: function() {
                    e && e(void 0, !0)
                }
            }
        }
    }), re.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return re.globalEval(t), t
            }
        }
    }), re.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), re.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, n = me.head || re("head")[0] || me.documentElement;
            return {
                send: function(i, a) {
                    e = me.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function(t, n) {
                        (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || a(200, "success"))
                    }, n.insertBefore(e, n.firstChild)
                },
                abort: function() {
                    e && e.onload(void 0, !0)
                }
            }
        }
    });
    var ni = [],
        ii = /(=)\?(?=&|$)|\?\?/;
    re.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = ni.pop() || re.expando + "_" + Fn++;
            return this[t] = !0, t
        }
    }), re.ajaxPrefilter("json jsonp", function(e, n, i) {
        var a, r, s, o = e.jsonp !== !1 && (ii.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && ii.test(e.data) && "data");
        return o || "jsonp" === e.dataTypes[0] ? (a = e.jsonpCallback = re.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, o ? e[o] = e[o].replace(ii, "$1" + a) : e.jsonp !== !1 && (e.url += (En.test(e.url) ? "&" : "?") + e.jsonp + "=" + a), e.converters["script json"] = function() {
            return s || re.error(a + " was not called"), s[0]
        }, e.dataTypes[0] = "json", r = t[a], t[a] = function() {
            s = arguments
        }, i.always(function() {
            t[a] = r, e[a] && (e.jsonpCallback = n.jsonpCallback, ni.push(a)), s && re.isFunction(r) && r(s[0]), s = r = void 0
        }), "script") : void 0
    }), re.parseHTML = function(t, e, n) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (n = e, e = !1), e = e || me;
        var i = he.exec(t),
            a = !n && [];
        return i ? [e.createElement(i[1])] : (i = re.buildFragment([t], e, a), a && a.length && re(a).remove(), re.merge([], i.childNodes))
    };
    var ai = re.fn.load;
    re.fn.load = function(t, e, n) {
        if ("string" != typeof t && ai) return ai.apply(this, arguments);
        var i, a, r, s = this,
            o = t.indexOf(" ");
        return o >= 0 && (i = t.slice(o, t.length), t = t.slice(0, o)), re.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), s.length > 0 && re.ajax({
            url: t,
            type: r,
            dataType: "html",
            data: e
        }).done(function(t) {
            a = arguments, s.html(i ? re("<div>").append(re.parseHTML(t)).find(i) : t)
        }).complete(n && function(t, e) {
            s.each(n, a || [t.responseText, e, t])
        }), this
    }, re.expr.filters.animated = function(t) {
        return re.grep(re.timers, function(e) {
            return t === e.elem
        }).length
    };
    var ri = t.document.documentElement;
    re.offset = {
        setOffset: function(t, e, n) {
            var i, a, r, s, o, l, d, u = re.css(t, "position"),
                c = re(t),
                h = {};
            "static" === u && (t.style.position = "relative"), o = c.offset(), r = re.css(t, "top"), l = re.css(t, "left"), d = ("absolute" === u || "fixed" === u) && re.inArray("auto", [r, l]) > -1, d ? (i = c.position(), s = i.top, a = i.left) : (s = parseFloat(r) || 0, a = parseFloat(l) || 0), re.isFunction(e) && (e = e.call(t, n, o)), null != e.top && (h.top = e.top - o.top + s), null != e.left && (h.left = e.left - o.left + a), "using" in e ? e.using.call(t, h) : c.css(h)
        }
    }, re.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                re.offset.setOffset(this, t, e)
            });
            var e, n, i = {
                    top: 0,
                    left: 0
                }, a = this[0],
                r = a && a.ownerDocument;
            return r ? (e = r.documentElement, re.contains(e, a) ? (typeof a.getBoundingClientRect !== xe && (i = a.getBoundingClientRect()), n = V(r), {
                top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : i) : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, n = {
                        top: 0,
                        left: 0
                    }, i = this[0];
                return "fixed" === re.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), re.nodeName(t[0], "html") || (n = t.offset()), n.top += re.css(t[0], "borderTopWidth", !0), n.left += re.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - n.top - re.css(i, "marginTop", !0),
                    left: e.left - n.left - re.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || ri; t && !re.nodeName(t, "html") && "static" === re.css(t, "position");) t = t.offsetParent;
                return t || ri
            })
        }
    }), re.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var n = /Y/.test(e);
        re.fn[t] = function(i) {
            return Ce(this, function(t, i, a) {
                var r = V(t);
                return void 0 === a ? r ? e in r ? r[e] : r.document.documentElement[i] : t[i] : void(r ? r.scrollTo(n ? re(r).scrollLeft() : a, n ? a : re(r).scrollTop()) : t[i] = a)
            }, t, i, arguments.length, null)
        }
    }), re.each(["top", "left"], function(t, e) {
        re.cssHooks[e] = T(ie.pixelPosition, function(t, n) {
            return n ? (n = nn(t, e), rn.test(n) ? re(t).position()[e] + "px" : n) : void 0
        })
    }), re.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        re.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(n, i) {
            re.fn[i] = function(i, a) {
                var r = arguments.length && (n || "boolean" != typeof i),
                    s = n || (i === !0 || a === !0 ? "margin" : "border");
                return Ce(this, function(e, n, i) {
                    var a;
                    return re.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (a = e.documentElement, Math.max(e.body["scroll" + t], a["scroll" + t], e.body["offset" + t], a["offset" + t], a["client" + t])) : void 0 === i ? re.css(e, n, s) : re.style(e, n, i, s)
                }, e, r ? i : void 0, r, null)
            }
        })
    }), re.fn.size = function() {
        return this.length
    }, re.fn.andSelf = re.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return re
    });
    var si = t.jQuery,
        oi = t.$;
    return re.noConflict = function(e) {
        return t.$ === re && (t.$ = oi), e && t.jQuery === re && (t.jQuery = si), re
    }, typeof e === xe && (t.jQuery = t.$ = re), re
}), function(t, e, n, i) {
    ! function(t) {
        "use strict";
        "function" == typeof define && define.amd ? define("datatables", ["jquery"], t) : jQuery && !jQuery.fn.dataTable && t(jQuery)
    }(function(n) {
        "use strict";

        function a(t) {
            var e, i, r = "a aa ao as b fn i m o s ",
                s = {};
            n.each(t, function(n) {
                e = n.match(/^([^A-Z]+?)([A-Z])/), e && -1 !== r.indexOf(e[1] + " ") && (i = n.replace(e[0], e[2].toLowerCase()), s[i] = n, "o" === e[1] && a(t[n]))
            }), t._hungarianMap = s
        }

        function r(t, e, s) {
            t._hungarianMap || a(t);
            var o;
            n.each(e, function(n) {
                o = t._hungarianMap[n], o === i || !s && e[o] !== i || (e[o] = e[n], "o" === o.charAt(0) && r(t[o], e[n]))
            })
        }

        function s(t) {
            var e = Re.defaults.oLanguage,
                n = t.sZeroRecords;
            !t.sEmptyTable && n && "No data available in table" === e.sEmptyTable && Ne(t, t, "sZeroRecords", "sEmptyTable"), !t.sLoadingRecords && n && "Loading..." === e.sLoadingRecords && Ne(t, t, "sZeroRecords", "sLoadingRecords")
        }

        function o(t) {
            un(t, "ordering", "bSort"), un(t, "orderMulti", "bSortMulti"), un(t, "orderClasses", "bSortClasses"), un(t, "orderCellsTop", "bSortCellsTop"), un(t, "order", "aaSorting"), un(t, "orderFixed", "aaSortingFixed"), un(t, "paging", "bPaginate"), un(t, "pagingType", "sPaginationType"), un(t, "pageLength", "iDisplayLength"), un(t, "searching", "bFilter")
        }

        function l(t) {
            un(t, "orderable", "bSortable"), un(t, "orderData", "aDataSort"), un(t, "orderSequence", "asSorting"), un(t, "orderDataType", "sortDataType")
        }

        function d(t) {
            var e = t.oBrowser,
                i = n("<div/>").css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: 1,
                    width: 1,
                    overflow: "hidden"
                }).append(n("<div/>").css({
                    position: "absolute",
                    top: 1,
                    left: 1,
                    width: 100,
                    overflow: "scroll"
                }).append(n('<div class="test"/>').css({
                    width: "100%",
                    height: 10
                }))).appendTo("body"),
                a = i.find(".test");
            e.bScrollOversize = 100 === a[0].offsetWidth, e.bScrollbarLeft = 1 !== a.offset().left, i.remove()
        }

        function u(t, a) {
            var r = Re.defaults.column,
                s = t.aoColumns.length,
                o = n.extend({}, Re.models.oColumn, r, {
                    sSortingClass: t.oClasses.sSortable,
                    sSortingClassJUI: t.oClasses.sSortJUI,
                    nTh: a ? a : e.createElement("th"),
                    sTitle: r.sTitle ? r.sTitle : a ? a.innerHTML : "",
                    aDataSort: r.aDataSort ? r.aDataSort : [s],
                    mData: r.mData ? r.mData : s
                });
            if (t.aoColumns.push(o), t.aoPreSearchCols[s] === i || null === t.aoPreSearchCols[s]) t.aoPreSearchCols[s] = n.extend(!0, {}, Re.models.oSearch);
            else {
                var l = t.aoPreSearchCols[s];
                l.bRegex === i && (l.bRegex = !0), l.bSmart === i && (l.bSmart = !0), l.bCaseInsensitive === i && (l.bCaseInsensitive = !0)
            }
            c(t, s, null)
        }

        function c(t, e, a) {
            var s = t.aoColumns[e],
                o = t.oClasses;
            a !== i && null !== a && (l(a), r(Re.defaults.column, a), a.mDataProp === i || a.mData || (a.mData = a.mDataProp), s._sManualType = a.sType, a.className && !a.sClass && (a.sClass = a.className), n.extend(s, a), Ne(s, a, "sWidth", "sWidthOrig"), "number" == typeof a.iDataSort && (s.aDataSort = [a.iDataSort]), Ne(s, a, "aDataSort"));
            var d = s.mData,
                u = k(d),
                c = s.mRender ? k(s.mRender) : null,
                h = function(t) {
                    return "string" == typeof t && -1 !== t.indexOf("@")
                };
            s._bAttrSrc = n.isPlainObject(d) && (h(d.sort) || h(d.type) || h(d.filter)), s.fnGetData = function(t, e) {
                var n = u(t, e);
                return s.mRender && e && "" !== e ? c(n, e, t) : n
            }, s.fnSetData = Y(d), t.oFeatures.bSort || (s.bSortable = !1);
            var p = -1 !== n.inArray("asc", s.asSorting),
                f = -1 !== n.inArray("desc", s.asSorting);
            s.bSortable && (p || f) ? p && !f ? (s.sSortingClass = o.sSortableAsc, s.sSortingClassJUI = o.sSortJUIAscAllowed) : !p && f && (s.sSortingClass = o.sSortableDesc, s.sSortingClassJUI = o.sSortJUIDescAllowed) : (s.sSortingClass = o.sSortableNone, s.sSortingClassJUI = "")
        }

        function h(t) {
            if (t.oFeatures.bAutoWidth !== !1) {
                var e = t.aoColumns;
                _e(t);
                for (var n = 0, i = e.length; i > n; n++) e[n].nTh.style.width = e[n].sWidth
            }
            var a = t.oScroll;
            ("" !== a.sY || "" !== a.sX) && fe(t), We(t, null, "column-sizing", [t])
        }

        function p(t, e) {
            var n = _(t, "bVisible");
            return "number" == typeof n[e] ? n[e] : null
        }

        function f(t, e) {
            var i = _(t, "bVisible"),
                a = n.inArray(e, i);
            return -1 !== a ? a : null
        }

        function m(t) {
            return _(t, "bVisible").length
        }

        function _(t, e) {
            var i = [];
            return n.map(t.aoColumns, function(t, n) {
                t[e] && i.push(n)
            }), i
        }

        function g(t) {
            var e, n, a, r, s, o, l, d, u, c = t.aoColumns,
                h = t.aoData,
                p = Re.ext.type.detect;
            for (e = 0, n = c.length; n > e; e++)
                if (l = c[e], u = [], !l.sType && l._sManualType) l.sType = l._sManualType;
                else if (!l.sType) {
                for (a = 0, r = p.length; r > a; a++) {
                    for (s = 0, o = h.length; o > s && (u[s] === i && (u[s] = x(t, s, e, "type")), d = p[a](u[s]), d && "html" !== d); s++);
                    if (d) {
                        l.sType = d;
                        break
                    }
                }
                l.sType || (l.sType = "string")
            }
        }

        function y(t, e, a, r) {
            var s, o, l, d, c, h, p;
            if (e)
                for (s = e.length - 1; s >= 0; s--) {
                    p = e[s];
                    var f = p.targets !== i ? p.targets : p.aTargets;
                    for (n.isArray(f) || (f = [f]), l = 0, d = f.length; d > l; l++)
                        if ("number" == typeof f[l] && f[l] >= 0) {
                            for (; t.aoColumns.length <= f[l];) u(t);
                            r(f[l], p)
                        } else if ("number" == typeof f[l] && f[l] < 0) r(t.aoColumns.length + f[l], p);
                    else if ("string" == typeof f[l])
                        for (c = 0, h = t.aoColumns.length; h > c; c++)("_all" == f[l] || n(t.aoColumns[c].nTh).hasClass(f[l])) && r(c, p)
                }
            if (a)
                for (s = 0, o = a.length; o > s; s++) r(s, a[s])
        }

        function v(t, e, i, a) {
            var r = t.aoData.length,
                s = n.extend(!0, {}, Re.models.oRow, {
                    src: i ? "dom" : "data"
                });
            s._aData = e, t.aoData.push(s);
            for (var o = t.aoColumns, l = 0, d = o.length; d > l; l++) i && D(t, r, l, x(t, r, l)), o[l].sType = null;
            return t.aiDisplayMaster.push(r), t.oFeatures.bDeferRender || j(t, r, i, a), r
        }

        function b(t, e) {
            var i;
            return e instanceof n || (e = n(e)), e.map(function(e, n) {
                return i = E(t, n), v(t, i.data, n, i.cells)
            })
        }

        function w(t, e) {
            return e._DT_RowIndex !== i ? e._DT_RowIndex : null
        }

        function M(t, e, i) {
            return n.inArray(i, t.aoData[e].anCells)
        }

        function L(t, e, n, i) {
            for (var a = [], r = 0, s = i.length; s > r; r++) a.push(x(t, e, i[r], n));
            return a
        }

        function x(t, e, n, a) {
            var r = t.aoColumns[n],
                s = t.aoData[e]._aData,
                o = r.fnGetData(s, a);
            if (o === i) return t.iDrawError != t.iDraw && null === r.sDefaultContent && (je(t, 0, "Requested unknown parameter " + ("function" == typeof r.mData ? "{function}" : "'" + r.mData + "'") + " for row " + e, 4), t.iDrawError = t.iDraw), r.sDefaultContent;
            if (o !== s && null !== o || null === r.sDefaultContent) {
                if ("function" == typeof o) return o()
            } else o = r.sDefaultContent;
            return null === o && "display" == a ? "" : o
        }

        function D(t, e, n, i) {
            var a = t.aoColumns[n],
                r = t.aoData[e]._aData;
            a.fnSetData(r, i)
        }

        function T(t) {
            return n.map(t.match(/(\\.|[^\.])+/g), function(t) {
                return t.replace("\\.", ".")
            })
        }

        function k(t) {
            if (n.isPlainObject(t)) {
                var e = {};
                return n.each(t, function(t, n) {
                    n && (e[t] = k(n))
                }),
                function(t, n, a) {
                    return e[e[n] !== i ? n : "_"](t, n, a)
                }
            }
            if (null === t) return function(t) {
                return t
            };
            if ("function" == typeof t) return function(e, n, i) {
                return t(e, n, i)
            };
            if ("string" != typeof t || -1 === t.indexOf(".") && -1 === t.indexOf("[") && -1 === t.indexOf("(")) return function(e) {
                return e[t]
            };
            var a = function(t, e, n) {
                var r, s, o, l;
                if ("" !== n)
                    for (var d = T(n), u = 0, c = d.length; c > u; u++) {
                        if (r = d[u].match(cn), s = d[u].match(hn), r) {
                            d[u] = d[u].replace(cn, ""), "" !== d[u] && (t = t[d[u]]), o = [], d.splice(0, u + 1), l = d.join(".");
                            for (var h = 0, p = t.length; p > h; h++) o.push(a(t[h], e, l));
                            var f = r[0].substring(1, r[0].length - 1);
                            t = "" === f ? o : o.join(f);
                            break
                        }
                        if (s) d[u] = d[u].replace(hn, ""), t = t[d[u]]();
                        else {
                            if (null === t || t[d[u]] === i) return i;
                            t = t[d[u]]
                        }
                    }
                return t
            };
            return function(e, n) {
                return a(e, n, t)
            }
        }

        function Y(t) {
            if (n.isPlainObject(t)) return Y(t._);
            if (null === t) return function() {};
            if ("function" == typeof t) return function(e, n) {
                t(e, "set", n)
            };
            if ("string" != typeof t || -1 === t.indexOf(".") && -1 === t.indexOf("[") && -1 === t.indexOf("(")) return function(e, n) {
                e[t] = n
            };
            var e = function(t, n, a) {
                for (var r, s, o, l, d, u = T(a), c = u[u.length - 1], h = 0, p = u.length - 1; p > h; h++) {
                    if (s = u[h].match(cn), o = u[h].match(hn), s) {
                        u[h] = u[h].replace(cn, ""), t[u[h]] = [], r = u.slice(), r.splice(0, h + 1), d = r.join(".");
                        for (var f = 0, m = n.length; m > f; f++) l = {}, e(l, n[f], d), t[u[h]].push(l);
                        return
                    }
                    o && (u[h] = u[h].replace(hn, ""), t = t[u[h]](n)), (null === t[u[h]] || t[u[h]] === i) && (t[u[h]] = {}), t = t[u[h]]
                }
                c.match(hn) ? t = t[c.replace(hn, "")](n) : t[c.replace(cn, "")] = n
            };
            return function(n, i) {
                return e(n, i, t)
            }
        }

        function S(t) {
            return rn(t.aoData, "_aData")
        }

        function C(t) {
            t.aoData.length = 0, t.aiDisplayMaster.length = 0, t.aiDisplay.length = 0
        }

        function A(t, e, n) {
            for (var a = -1, r = 0, s = t.length; s > r; r++) t[r] == e ? a = r : t[r] > e && t[r]--; - 1 != a && n === i && t.splice(a, 1)
        }

        function F(t, e, n, a) {
            var r, s, o = t.aoData[e];
            if ("dom" !== n && (n && "auto" !== n || "dom" !== o.src)) {
                var l = o.anCells;
                for (r = 0, s = l.length; s > r; r++) l[r].innerHTML = x(t, e, r, "display")
            } else o._aData = E(t, o.nTr).data;
            o._aSortData = null, o._aFilterData = null;
            var d = t.aoColumns;
            if (a !== i) d[a].sType = null;
            else
                for (r = 0, s = d.length; s > r; r++) d[r].sType = null;
            N(o)
        }

        function E(t, e) {
            for (var i, a, r, s, o = [], l = [], d = e.firstChild, u = 0, c = t.aoColumns, h = function(t, e, n) {
                    if ("string" == typeof t) {
                        var i = t.indexOf("@");
                        if (-1 !== i) {
                            var a = t.substring(i + 1);
                            r["@" + a] = n.getAttribute(a)
                        }
                    }
                }; d;) i = d.nodeName.toUpperCase(), ("TD" == i || "TH" == i) && (a = c[u], s = n.trim(d.innerHTML), a && a._bAttrSrc ? (r = {
                display: s
            }, h(a.mData.sort, r, d), h(a.mData.type, r, d), h(a.mData.filter, r, d), o.push(r)) : o.push(s), l.push(d), u++), d = d.nextSibling;
            return {
                data: o,
                cells: l
            }
        }

        function j(t, i, a, r) {
            var s, o, l, d, u, c = t.aoData[i],
                h = c._aData,
                p = [];
            if (null === c.nTr) {
                for (s = a || e.createElement("tr"), c.nTr = s, c.anCells = p, s._DT_RowIndex = i, N(c), d = 0, u = t.aoColumns.length; u > d; d++) {
                    if (l = t.aoColumns[d], o = a ? r[d] : e.createElement(l.sCellType), p.push(o), !a || l.mRender || l.mData !== d) {
                        var f = x(t, i, d, "display"),
                            m = n(n.parseHTML(f)),
                            _ = m.attr("class");
                        o.className += " " + _, o.innerHTML = f
                    }
                    null !== l.sClass && o && (o.className += " " + l.sClass), l.bVisible && !a ? s.appendChild(o) : !l.bVisible && a && o.parentNode.removeChild(o), l.fnCreatedCell && l.fnCreatedCell.call(t.oInstance, o, x(t, i, d, "display"), h, i, d)
                }
                We(t, "aoRowCreatedCallback", null, [s, h, i])
            }
        }

        function N(t) {
            var e = t.nTr,
                i = t._aData;
            if (e) {
                if (i.DT_RowId && (e.id = i.DT_RowId), i.DT_RowClass) {
                    var a = i.DT_RowClass.split(" ");
                    t.__rowc = t.__rowc ? dn(t.__rowc.concat(a)) : a, n(e).removeClass(t.__rowc.join(" ")).addClass(i.DT_RowClass)
                }
                i.DT_RowData && n(e).data(i.DT_RowData)
            }
        }

        function I(t) {
            var e, i, a, r, s, o = t.nTHead,
                l = t.nTFoot,
                d = 0 === n("th, td", o).length,
                u = t.oClasses,
                c = t.aoColumns;
            for (d && (r = n("<tr/>").appendTo(o)), e = 0, i = c.length; i > e; e++) s = c[e], a = n(s.nTh).addClass(s.sClass), d && a.appendTo(r), t.oFeatures.bSort && (a.addClass(s.sSortingClass), s.bSortable !== !1 && (a.attr("tabindex", t.iTabIndex).attr("aria-controls", t.sTableId), Ye(t, s.nTh, e))), s.sTitle != a.html() && a.html(s.sTitle), $e(t, "header")(t, a, s, e, u);
            if (d && $(t.aoHeader, o), n(o).find(">tr").attr("role", "row"), n(o).find(">tr>th, >tr>td").addClass(u.sHeaderTH), n(l).find(">tr>th, >tr>td").addClass(u.sFooterTH), null !== l) {
                var h = t.aoFooter[0];
                for (e = 0, i = h.length; i > e; e++) s = c[e], s.nTf = h[e].cell, s.sClass && n(s.nTf).addClass(s.sClass)
            }
        }

        function H(t, e, n) {
            var a, r, s, o, l, d, u, c, h, p = [],
                f = [],
                m = t.aoColumns.length;
            if (e) {
                for (n === i && (n = !1), a = 0, r = e.length; r > a; a++) {
                    for (p[a] = e[a].slice(), p[a].nTr = e[a].nTr, s = m - 1; s >= 0; s--) t.aoColumns[s].bVisible || n || p[a].splice(s, 1);
                    f.push([])
                }
                for (a = 0, r = p.length; r > a; a++) {
                    if (u = p[a].nTr)
                        for (; d = u.firstChild;) u.removeChild(d);
                    for (s = 0, o = p[a].length; o > s; s++)
                        if (c = 1, h = 1, f[a][s] === i) {
                            for (u.appendChild(p[a][s].cell), f[a][s] = 1; p[a + c] !== i && p[a][s].cell == p[a + c][s].cell;) f[a + c][s] = 1, c++;
                            for (; p[a][s + h] !== i && p[a][s].cell == p[a][s + h].cell;) {
                                for (l = 0; c > l; l++) f[a + l][s + h] = 1;
                                h++
                            }
                            p[a][s].cell.rowSpan = c, p[a][s].cell.colSpan = h
                        }
                }
            }
        }

        function P(t) {
            var e = We(t, "aoPreDrawCallback", "preDraw", [t]);
            if (-1 !== n.inArray(!1, e)) return void he(t, !1);
            var a = [],
                r = 0,
                s = t.asStripeClasses,
                o = s.length,
                l = (t.aoOpenRows.length, t.oLanguage),
                d = t.iInitDisplayStart,
                u = "ssp" == Be(t),
                c = t.aiDisplay;
            t.bDrawing = !0, d !== i && -1 !== d && (t._iDisplayStart = u ? d : d >= t.fnRecordsDisplay() ? 0 : d, t.iInitDisplayStart = -1);
            var h = t._iDisplayStart,
                p = t.fnDisplayEnd();
            if (t.bDeferLoading) t.bDeferLoading = !1, t.iDraw++, he(t, !1);
            else if (u) {
                if (!t.bDestroying && !R(t)) return
            } else t.iDraw++; if (0 !== c.length)
                for (var f = u ? 0 : h, _ = u ? t.aoData.length : p, g = f; _ > g; g++) {
                    var y = c[g],
                        v = t.aoData[y];
                    null === v.nTr && j(t, y);
                    var b = v.nTr;
                    if (0 !== o) {
                        var w = s[r % o];
                        v._sRowStripe != w && (n(b).removeClass(v._sRowStripe).addClass(w), v._sRowStripe = w)
                    }
                    We(t, "aoRowCallback", null, [b, v._aData, r, g]), a.push(b), r++
                } else {
                    var M = l.sZeroRecords;
                    1 == t.iDraw && "ajax" == Be(t) ? M = l.sLoadingRecords : l.sEmptyTable && 0 === t.fnRecordsTotal() && (M = l.sEmptyTable), a[0] = n("<tr/>", {
                        "class": o ? s[0] : ""
                    }).append(n("<td />", {
                        valign: "top",
                        colSpan: m(t),
                        "class": t.oClasses.sRowEmpty
                    }).html(M))[0]
                }
            We(t, "aoHeaderCallback", "header", [n(t.nTHead).children("tr")[0], S(t), h, p, c]), We(t, "aoFooterCallback", "footer", [n(t.nTFoot).children("tr")[0], S(t), h, p, c]);
            var L = n(t.nTBody);
            L.children().detach(), L.append(n(a)), We(t, "aoDrawCallback", "draw", [t]), t.bSorted = !1, t.bFiltered = !1, t.bDrawing = !1
        }

        function W(t, e) {
            var n = t.oFeatures,
                i = n.bSort,
                a = n.bFilter;
            i && De(t), a ? J(t, t.oPreviousSearch) : t.aiDisplay = t.aiDisplayMaster.slice(), e !== !0 && (t._iDisplayStart = 0), P(t)
        }

        function O(t) {
            var e = n("<div></div>")[0];
            t.nTable.parentNode.insertBefore(e, t.nTable), t.nTableWrapper = n('<div id="' + t.sTableId + '_wrapper" class="' + t.oClasses.sWrapper + '" role="grid"></div>')[0], t.nTableReinsertBefore = t.nTable.nextSibling;
            for (var i, a, r, s, o, l, d, u = t.nTableWrapper, c = t.sDom.split(""), h = 0; h < c.length; h++) {
                if (a = 0, r = c[h], "<" == r) {
                    if (s = n("<div></div>")[0], o = c[h + 1], "'" == o || '"' == o) {
                        for (l = "", d = 2; c[h + d] != o;) l += c[h + d], d++;
                        if ("H" == l ? l = t.oClasses.sJUIHeader : "F" == l && (l = t.oClasses.sJUIFooter), -1 != l.indexOf(".")) {
                            var p = l.split(".");
                            s.id = p[0].substr(1, p[0].length - 1), s.className = p[1]
                        } else "#" == l.charAt(0) ? s.id = l.substr(1, l.length - 1) : s.className = l;
                        h += d
                    }
                    u.appendChild(s), u = s
                } else if (">" == r) u = u.parentNode;
                else if ("l" == r && t.oFeatures.bPaginate && t.oFeatures.bLengthChange) i = le(t), a = 1;
                else if ("f" == r && t.oFeatures.bFilter) i = G(t), a = 1;
                else if ("r" == r && t.oFeatures.bProcessing) i = ce(t), a = 1;
                else if ("t" == r) i = pe(t), a = 1;
                else if ("i" == r && t.oFeatures.bInfo) i = ne(t), a = 1;
                else if ("p" == r && t.oFeatures.bPaginate) i = de(t), a = 1;
                else if (0 !== Re.ext.feature.length)
                    for (var f = Re.ext.feature, m = 0, _ = f.length; _ > m; m++)
                        if (r == f[m].cFeature) {
                            i = f[m].fnInit(t), i && (a = 1);
                            break
                        }
                1 == a && null !== i && ("object" != typeof t.aanFeatures[r] && (t.aanFeatures[r] = []), t.aanFeatures[r].push(i), u.appendChild(i))
            }
            e.parentNode.replaceChild(t.nTableWrapper, e)
        }

        function $(t, e) {
            var i, a, r, s, o, l, d, u, c, h, p, f = n(e).children("tr"),
                m = function(t, e, n) {
                    for (var i = t[e]; i[n];) n++;
                    return n
                };
            for (t.splice(0, t.length), r = 0, l = f.length; l > r; r++) t.push([]);
            for (r = 0, l = f.length; l > r; r++)
                for (i = f[r], u = 0, a = i.firstChild; a;) {
                    if ("TD" == a.nodeName.toUpperCase() || "TH" == a.nodeName.toUpperCase())
                        for (c = 1 * a.getAttribute("colspan"), h = 1 * a.getAttribute("rowspan"), c = c && 0 !== c && 1 !== c ? c : 1, h = h && 0 !== h && 1 !== h ? h : 1, d = m(t, r, u), p = 1 === c ? !0 : !1, o = 0; c > o; o++)
                            for (s = 0; h > s; s++) t[r + s][d + o] = {
                                cell: a,
                                unique: p
                            }, t[r + s].nTr = i;
                    a = a.nextSibling
                }
        }

        function B(t, e, n) {
            var i = [];
            n || (n = t.aoHeader, e && (n = [], $(n, e)));
            for (var a = 0, r = n.length; r > a; a++)
                for (var s = 0, o = n[a].length; o > s; s++)!n[a][s].unique || i[s] && t.bSortCellsTop || (i[s] = n[a][s].cell);
            return i
        }

        function z(t, e, i) {
            if (We(t, "aoServerParams", "serverParams", [e]), e && e.__legacy) {
                var a = {}, r = /(.*?)\[\]$/;
                n.each(e, function(t, e) {
                    var n = e.name.match(r);
                    if (n) {
                        var i = n[0];
                        a[i] || (a[i] = []), a[i].push(e.value)
                    } else a[e.name] = e.value
                }), e = a
            }
            var s, o = t.ajax,
                l = t.oInstance;
            if (n.isPlainObject(o) && o.data) {
                s = o.data;
                var d = n.isFunction(s) ? s(e) : s;
                e = n.isFunction(s) && d ? d : n.extend(!0, e, d), delete o.data
            }
            var u = {
                data: e,
                success: function(e) {
                    var n = e.error || e.sError;
                    n && t.oApi._fnLog(t, 0, n), t.json = e, We(t, null, "xhr", [t, e]), i(e)
                },
                dataType: "json",
                cache: !1,
                type: t.sServerMethod,
                error: function(e, n) {
                    var i = t.oApi._fnLog;
                    "parsererror" == n ? i(t, 0, "Invalid JSON response", 1) : i(t, 0, "Ajax error", 7)
                }
            };
            t.fnServerData ? t.fnServerData.call(l, t.sAjaxSource, e, i, t) : t.sAjaxSource || "string" == typeof o ? t.jqXHR = n.ajax(n.extend(u, {
                url: o || t.sAjaxSource
            })) : n.isFunction(o) ? t.jqXHR = o.call(l, e, i, t) : (t.jqXHR = n.ajax(n.extend(u, o)), o.data = s)
        }

        function R(t) {
            if (t.bAjaxDataGet) {
                t.iDraw++, he(t, !0);
                var e = (t.aoColumns.length, q(t));
                return z(t, e, function(e) {
                    U(t, e)
                }, t), !1
            }
            return !0
        }

        function q(t) {
            var e, i, a, r, s = t.aoColumns,
                o = s.length,
                l = t.oFeatures,
                d = t.oPreviousSearch,
                u = t.aoPreSearchCols,
                c = [],
                h = xe(t),
                p = t._iDisplayStart,
                f = l.bPaginate !== !1 ? t._iDisplayLength : -1,
                m = function(t, e) {
                    c.push({
                        name: t,
                        value: e
                    })
                };
            m("sEcho", t.iDraw), m("iColumns", o), m("sColumns", rn(s, "sName").join(",")), m("iDisplayStart", p), m("iDisplayLength", f);
            var _ = {
                draw: t.iDraw,
                columns: [],
                order: [],
                start: p,
                length: f,
                search: {
                    value: d.sSearch,
                    regex: d.bRegex
                }
            };
            for (e = 0; o > e; e++) a = s[e], r = u[e], i = "function" == typeof a.mData ? "function" : a.mData, _.columns.push({
                data: i,
                name: a.sName,
                searchable: a.bSearchable,
                orderable: a.bSortable,
                search: {
                    value: r.sSearch,
                    regex: r.bRegex
                }
            }), m("mDataProp_" + e, i), l.bFilter && (m("sSearch_" + e, r.sSearch), m("bRegex_" + e, r.bRegex), m("bSearchable_" + e, a.bSearchable)), l.bSort && m("bSortable_" + e, a.bSortable);
            return n.each(h, function(t, e) {
                _.order.push({
                    column: e.col,
                    dir: e.dir
                }), m("iSortCol_" + t, e.col), m("sSortDir_" + t, e.dir)
            }), l.bFilter && (m("sSearch", d.sSearch), m("bRegex", d.bRegex)), l.bSort && m("iSortingCols", h.length), c.__legacy = !0, t.sAjaxSource || Re.ext.legacy.ajax ? c : _
        }

        function U(t, e) {
            var n = function(t, n) {
                return e[t] !== i ? e[t] : e[n]
            }, a = n("sEcho", "draw"),
                r = n("iTotalRecords", "recordsTotal"),
                s = n("iTotalDisplayRecords", "recordsFiltered");
            if (a) {
                if (1 * a < t.iDraw) return;
                t.iDraw = 1 * a
            }
            C(t), t._iRecordsTotal = parseInt(r, 10), t._iRecordsDisplay = parseInt(s, 10);
            for (var o = V(t, e), l = 0, d = o.length; d > l; l++) v(t, o[l]);
            t.aiDisplay = t.aiDisplayMaster.slice(), t.bAjaxDataGet = !1, P(t), t._bInitComplete || se(t, e), t.bAjaxDataGet = !0, he(t, !1)
        }

        function V(t, e) {
            var a = n.isPlainObject(t.ajax) && t.ajax.dataSrc !== i ? t.ajax.dataSrc : t.sAjaxDataProp;
            return "data" === a ? e.aaData || e[a] : "" !== a ? k(a)(e) : e
        }

        function G(t) {
            var i = t.oClasses,
                a = t.sTableId,
                r = t.oPreviousSearch,
                s = t.aanFeatures,
                o = '<input type="search" class="' + i.sFilterInput + '"/>',
                l = t.oLanguage.sSearch;
            l = l.match(/_INPUT_/) ? l.replace("_INPUT_", o) : l + o;
            var d = n("<div/>", {
                id: s.f ? null : a + "_filter",
                "class": i.sFilter
            }).append(n("<label/>").append(l)),
                u = n('input[type="search"]', d).val(r.sSearch.replace('"', "&quot;")).bind("keyup.DT search.DT input.DT paste.DT cut.DT", function() {
                    var e = (s.f, this.value ? this.value : "");
                    e != r.sSearch && (J(t, {
                        sSearch: e,
                        bRegex: r.bRegex,
                        bSmart: r.bSmart,
                        bCaseInsensitive: r.bCaseInsensitive
                    }), t._iDisplayStart = 0, P(t))
                }).bind("keypress.DT", function(t) {
                    return 13 == t.keyCode ? !1 : void 0
                }).attr("aria-controls", a);
            return n(t.nTable).on("filter.DT", function() {
                try {
                    u[0] !== e.activeElement && u.val(r.sSearch)
                } catch (t) {}
            }), d[0]
        }

        function J(t, e, n) {
            var i = t.oPreviousSearch,
                a = t.aoPreSearchCols,
                r = function(t) {
                    i.sSearch = t.sSearch, i.bRegex = t.bRegex, i.bSmart = t.bSmart, i.bCaseInsensitive = t.bCaseInsensitive
                };
            if (g(t), "ssp" != Be(t)) {
                Q(t, e.sSearch, n, e.bRegex, e.bSmart, e.bCaseInsensitive), r(e);
                for (var s = 0; s < a.length; s++) K(t, a[s].sSearch, s, a[s].bRegex, a[s].bSmart, a[s].bCaseInsensitive);
                X(t)
            } else r(e);
            t.bFiltered = !0, We(t, null, "search", [t])
        }

        function X(t) {
            for (var e = Re.ext.search, n = _(t, "bSearchable"), i = 0, a = e.length; a > i; i++)
                for (var r = 0, s = 0, o = t.aiDisplay.length; o > s; s++) {
                    var l = t.aiDisplay[s - r],
                        d = e[i](t, L(t, l, "filter", n), l);
                    d || (t.aiDisplay.splice(s - r, 1), r++)
                }
        }

        function K(t, e, n, i, a, r) {
            if ("" !== e)
                for (var s, o = t.aiDisplay, l = Z(e, i, a, r), d = o.length - 1; d >= 0; d--) s = t.aoData[o[d]]._aFilterData[n], l.test(s) || o.splice(d, 1)
        }

        function Q(t, e, n, i, a, r) {
            var s, o, l, d = Z(e, i, a, r),
                u = t.oPreviousSearch.sSearch,
                c = t.aiDisplayMaster;
            if (0 !== Re.ext.search.length && (n = !0), o = ee(t), e.length <= 0) t.aiDisplay = c.slice();
            else
                for ((o || n || u.length > e.length || 0 !== e.indexOf(u) || t.bSorted) && (t.aiDisplay = c.slice()), s = t.aiDisplay, l = s.length - 1; l >= 0; l--) d.test(t.aoData[s[l]]._sFilterRow) || s.splice(l, 1)
        }

        function Z(t, e, n, i) {
            var a, r = e ? t : te(t);
            return n && (a = r.split(" "), r = "^(?=.*?" + a.join(")(?=.*?") + ").*$"), new RegExp(r, i ? "i" : "")
        }

        function te(t) {
            var e = ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^", "-"],
                n = new RegExp("(\\" + e.join("|\\") + ")", "g");
            return t.replace(n, "\\$1")
        }

        function ee(t) {
            var e, n, i, a, r, s, o, l, d = t.aoColumns,
                u = Re.ext.type.search,
                c = !1;
            for (n = 0, a = t.aoData.length; a > n; n++)
                if (l = t.aoData[n], !l._aFilterData) {
                    for (s = [], i = 0, r = d.length; r > i; i++) e = d[i], e.bSearchable ? (o = x(t, n, i, "filter"), o = u[e.sType] ? u[e.sType](o) : null !== o ? o : "") : o = "", o.indexOf && -1 !== o.indexOf("&") && (pn.innerHTML = o, o = fn ? pn.textContent : pn.innerText, o = o.replace(/[\r\n]/g, "")), s.push(o);
                    l._aFilterData = s, l._sFilterRow = s.join("  "), c = !0
                }
            return c
        }

        function ne(t) {
            var e = t.sTableId,
                i = t.aanFeatures.i,
                a = n("<div/>", {
                    "class": t.oClasses.sInfo,
                    id: i ? null : e + "_info"
                });
            return i || (t.aoDrawCallback.push({
                fn: ie,
                sName: "information"
            }), a.attr("role", "alert").attr("aria-live", "polite").attr("aria-relevant", "all"), n(t.nTable).attr("aria-describedby", e + "_info")), a[0]
        }

        function ie(t) {
            var e = t.aanFeatures.i;
            if (0 !== e.length) {
                var i = t.oLanguage,
                    a = t._iDisplayStart + 1,
                    r = t.fnDisplayEnd(),
                    s = t.fnRecordsTotal(),
                    o = t.fnRecordsDisplay(),
                    l = o ? i.sInfo : i.sInfoEmpty;
                o !== s && (l += " " + i.sInfoFiltered), l += i.sInfoPostFix, l = ae(t, l);
                var d = i.fnInfoCallback;
                null !== d && (l = d.call(t.oInstance, t, a, r, s, o, l)), n(e).html(l)
            }
        }

        function ae(t, e) {
            var n = t.fnFormatNumber,
                i = t._iDisplayStart + 1,
                a = t._iDisplayLength,
                r = t.fnRecordsDisplay(),
                s = -1 === a;
            return e.replace(/_START_/g, n.call(t, i)).replace(/_END_/g, n.call(t, t.fnDisplayEnd())).replace(/_MAX_/g, n.call(t, t.fnRecordsTotal())).replace(/_TOTAL_/g, n.call(t, r)).replace(/_PAGE_/g, n.call(t, s ? 1 : Math.ceil(i / a))).replace(/_PAGES_/g, n.call(t, s ? 1 : Math.ceil(r / a)))
        }

        function re(t) {
            var e, n, i, a = t.iInitDisplayStart,
                r = t.aoColumns,
                s = t.oFeatures;
            if (!t.bInitialised) return void setTimeout(function() {
                re(t)
            }, 200);
            for (O(t), I(t), H(t, t.aoHeader), H(t, t.aoFooter), he(t, !0), s.bAutoWidth && _e(t), e = 0, n = r.length; n > e; e++) i = r[e], i.sWidth && (i.nTh.style.width = Me(i.sWidth));
            W(t);
            var o = Be(t);
            "ssp" != o && ("ajax" == o ? z(t, [], function(n) {
                var i = V(t, n);
                for (e = 0; e < i.length; e++) v(t, i[e]);
                t.iInitDisplayStart = a, W(t), he(t, !1), se(t, n)
            }, t) : (he(t, !1), se(t)))
        }

        function se(t, e) {
            t._bInitComplete = !0, e && h(t), We(t, "aoInitComplete", "init", [t, e])
        }

        function oe(t, e) {
            var n = parseInt(e, 10);
            t._iDisplayLength = n, Oe(t), We(t, null, "length", [t, n])
        }

        function le(t) {
            for (var e = t.oClasses, i = t.sTableId, a = t.aLengthMenu, r = n.isArray(a[0]), s = r ? a[0] : a, o = r ? a[1] : a, l = n("<select/>", {
                    name: i + "_length",
                    "aria-controls": i,
                    "class": e.sLengthSelect
                }), d = 0, u = s.length; u > d; d++) l[0][d] = new Option(o[d], s[d]);
            var c = n("<div><label/></div>").addClass(e.sLength);
            t.aanFeatures.l || (c[0].id = i + "_length");
            var h = t.oLanguage.sLengthMenu.split(/(_MENU_)/);
            return c.children().append(h[0]).append(l).append(h[2]), l.val(t._iDisplayLength).bind("change.DT", function() {
                oe(t, n(this).val()), P(t)
            }), n(t.nTable).bind("length", function(t, e, n) {
                l.val(n)
            }), c[0]
        }

        function de(t) {
            var e = t.sPaginationType,
                i = Re.ext.pager[e],
                a = "function" == typeof i,
                r = function(t) {
                    P(t)
                }, s = n("<div/>").addClass(t.oClasses.sPaging + e)[0],
                o = t.aanFeatures;
            return a || i.fnInit(t, s, r), o.p || (s.id = t.sTableId + "_paginate", t.aoDrawCallback.push({
                fn: function(t) {
                    if (a) {
                        var e, n, s = t._iDisplayStart,
                            l = t._iDisplayLength,
                            d = t.fnRecordsDisplay(),
                            u = -1 === l,
                            c = u ? 0 : Math.ceil(s / l),
                            h = u ? 1 : Math.ceil(d / l),
                            p = i(c, h);
                        for (e = 0, n = o.p.length; n > e; e++) $e(t, "pageButton")(t, o.p[e], e, p, c, h)
                    } else i.fnUpdate(t, r)
                },
                sName: "pagination"
            })), s
        }

        function ue(t, e, n) {
            var i = t._iDisplayStart,
                a = t._iDisplayLength,
                r = t.fnRecordsDisplay();
            0 === r || -1 === a ? i = 0 : "number" == typeof e ? (i = e * a, i > r && (i = 0)) : "first" == e ? i = 0 : "previous" == e ? (i = a >= 0 ? i - a : 0, 0 > i && (i = 0)) : "next" == e ? r > i + a && (i += a) : "last" == e ? i = Math.floor((r - 1) / a) * a : je(t, 0, "Unknown paging action: " + e, 5);
            var s = t._iDisplayStart !== i;
            return t._iDisplayStart = i, We(t, null, "page", [t]), n && P(t), s
        }

        function ce(t) {
            return n("<div/>", {
                id: t.aanFeatures.r ? null : t.sTableId + "_processing",
                "class": t.oClasses.sProcessing
            }).html(t.oLanguage.sProcessing).insertBefore(t.nTable)[0]
        }

        function he(t, e) {
            t.oFeatures.bProcessing && n(t.aanFeatures.r).css("visibility", e ? "visible" : "hidden"), We(t, null, "processing", [t, e])
        }

        function pe(t) {
            var e = t.oScroll;
            if ("" === e.sX && "" === e.sY) return t.nTable;
            var i = e.sX,
                a = e.sY,
                r = t.oClasses,
                s = n(t.nTable),
                o = s.children("caption"),
                l = o.length ? o[0]._captionSide : null,
                d = n(s[0].cloneNode(!1)),
                u = n(s[0].cloneNode(!1)),
                c = s.children("tfoot"),
                h = "<div/>",
                p = function(t) {
                    return t ? Me(t) : null
                };
            c.length || (c = null);
            var f = n(h, {
                "class": r.sScrollWrapper
            }).append(n(h, {
                "class": r.sScrollHead
            }).css({
                overflow: "hidden",
                position: "relative",
                border: 0,
                width: i ? p(i) : "100%"
            }).append(n(h, {
                "class": r.sScrollHeadInner
            }).css({
                "box-sizing": "content-box",
                width: e.sXInner || "100%"
            }).append(d.removeAttr("id").css("margin-left", 0).append(s.children("thead")))).append("top" === l ? o : null)).append(n(h, {
                "class": r.sScrollBody
            }).css({
                overflow: "auto",
                height: p(a),
                width: p(i)
            }).append(s));
            c && f.append(n(h, {
                "class": r.sScrollFoot
            }).css({
                overflow: "hidden",
                border: 0,
                width: i ? p(i) : "100%"
            }).append(n(h, {
                "class": r.sScrollFootInner
            }).append(u.removeAttr("id").css("margin-left", 0).append(s.children("tfoot")))).append("bottom" === l ? o : null));
            var m = f.children(),
                _ = m[0],
                g = m[1],
                y = c ? m[2] : null;
            return i && n(g).scroll(function() {
                var t = this.scrollLeft;
                _.scrollLeft = t, c && (y.scrollLeft = t)
            }), t.nScrollHead = _, t.nScrollBody = g, t.nScrollFoot = y, t.aoDrawCallback.push({
                fn: fe,
                sName: "scrolling"
            }), f[0]
        }

        function fe(t) {
            var e, i, a, r, s, o, l, d, u, c = t.oScroll,
                h = c.sX,
                f = c.sXInner,
                m = c.sY,
                _ = c.iBarWidth,
                g = n(t.nScrollHead),
                y = g[0].style,
                v = g.children("div"),
                b = v[0].style,
                w = v.children("table"),
                M = t.nScrollBody,
                L = n(M),
                x = M.style,
                D = n(t.nScrollFoot),
                T = D.children("div"),
                k = T.children("table"),
                Y = n(t.nTHead),
                S = n(t.nTable),
                C = S[0],
                A = C.style,
                F = t.nTFoot ? n(t.nTFoot) : null,
                E = t.oBrowser,
                j = E.bScrollOversize,
                N = [],
                I = [],
                H = function(t) {
                    var e = t.style;
                    e.paddingTop = "0", e.paddingBottom = "0", e.borderTopWidth = "0", e.borderBottomWidth = "0", e.height = 0
                };
            if (S.children("thead, tfoot").remove(), s = Y.clone().prependTo(S), e = Y.find("tr"), a = s.find("tr"), s.find("th, td").removeAttr("tabindex"), F && (o = F.clone().prependTo(S), i = F.find("tr"), r = o.find("tr")), h || (x.width = "100%", g[0].style.width = "100%"), n.each(B(t, s), function(e, n) {
                l = p(t, e), n.style.width = t.aoColumns[l].sWidth
            }), F && me(function(t) {
                t.style.width = ""
            }, r), c.bCollapse && "" !== m && (x.height = L.offsetHeight + Y[0].offsetHeight + "px"), u = S.outerWidth(), "" === h ? (A.width = "100%", j && (S.find("tbody").height() > M.offsetHeight || "scroll" == L.css("overflow-y")) && (A.width = Me(S.outerWidth() - _))) : "" !== f ? A.width = Me(f) : u == L.width() && L.height() < S.height() ? (A.width = Me(u - _), S.outerWidth() > u - _ && (A.width = Me(u))) : A.width = Me(u), u = S.outerWidth(), me(H, a), me(function(t) {
                N.push(Me(n(t).css("width")))
            }, a), me(function(t, e) {
                t.style.width = N[e]
            }, e), n(a).height(0), F && (me(H, r), me(function(t) {
                I.push(Me(n(t).css("width")))
            }, r), me(function(t, e) {
                t.style.width = I[e]
            }, i), n(r).height(0)), me(function(t, e) {
                t.innerHTML = "", t.style.width = N[e]
            }, a), F && me(function(t, e) {
                t.innerHTML = "", t.style.width = I[e]
            }, r), S.outerWidth() < u ? (d = M.scrollHeight > M.offsetHeight || "scroll" == L.css("overflow-y") ? u + _ : u, j && (M.scrollHeight > M.offsetHeight || "scroll" == L.css("overflow-y")) && (A.width = Me(d - _)), ("" === h || "" !== f) && je(t, 1, "Possible column misalignment", 6)) : d = "100%", x.width = Me(d), y.width = Me(d), F && (t.nScrollFoot.style.width = Me(d)), m || j && (x.height = Me(C.offsetHeight + _)), m && c.bCollapse) {
                x.height = Me(m);
                var P = h && C.offsetWidth > M.offsetWidth ? _ : 0;
                C.offsetHeight < M.offsetHeight && (x.height = Me(C.offsetHeight + P))
            }
            var W = S.outerWidth();
            w[0].style.width = Me(W), b.width = Me(W);
            var O = S.height() > M.clientHeight || "scroll" == L.css("overflow-y"),
                $ = "padding" + (E.bScrollbarLeft ? "Left" : "Right");
            b[$] = O ? _ + "px" : "0px", F && (k[0].style.width = Me(W), T[0].style.width = Me(W), T[0].style[$] = O ? _ + "px" : "0px"), L.scroll(), (t.bSorted || t.bFiltered) && (M.scrollTop = 0)
        }

        function me(t, e, n) {
            for (var i, a, r = 0, s = 0, o = e.length; o > s;) {
                for (i = e[s].firstChild, a = n ? n[s].firstChild : null; i;) 1 === i.nodeType && (n ? t(i, a, r) : t(i, r), r++), i = i.nextSibling, a = n ? a.nextSibling : null;
                s++
            }
        }

        function _e(e) {
            var i, a, r, s, o, l = e.nTable,
                d = e.aoColumns,
                u = e.oScroll,
                c = u.sY,
                p = u.sX,
                f = u.sXInner,
                g = d.length,
                y = _(e, "bVisible"),
                v = n("th", e.nTHead),
                b = l.getAttribute("width"),
                w = l.parentNode,
                M = !1;
            for (i = 0; i < y.length; i++) a = d[y[i]], null !== a.sWidth && (a.sWidth = ye(a.sWidthOrig, w), M = !0);
            if (M || p || c || g != m(e) || g != v.length) {
                var L = n(l.cloneNode(!1)).css("visibility", "hidden").removeAttr("id").append(n(e.nTHead).clone(!1)).append(n(e.nTFoot).clone(!1)).append(n("<tbody><tr/></tbody>"));
                L.find("tfoot th, tfoot td").css("width", "");
                var x = L.find("tbody tr");
                for (v = B(e, L.find("thead")[0]), i = 0; i < y.length; i++) a = d[y[i]], v[i].style.width = null !== a.sWidthOrig && "" !== a.sWidthOrig ? Me(a.sWidthOrig) : "";
                if (e.aoData.length)
                    for (i = 0; i < y.length; i++) r = y[i], a = d[r], n(be(e, r)).clone(!1).append(a.sContentPadding).appendTo(x);
                if (L.appendTo(w), p && f ? L.width(f) : p ? (L.css("width", "auto"), L.width() < w.offsetWidth && L.width(w.offsetWidth)) : c ? L.width(w.offsetWidth) : b && L.width(b), ve(e, L[0]), p) {
                    var D = 0;
                    for (i = 0; i < y.length; i++) a = d[y[i]], o = n(v[i]).outerWidth(), D += null === a.sWidthOrig ? o : parseInt(a.sWidth, 10) + o - n(v[i]).width();
                    L.width(Me(D)), l.style.width = Me(D)
                }
                for (i = 0; i < y.length; i++) a = d[y[i]], s = n(v[i]).width(), s && (a.sWidth = Me(s));
                l.style.width = Me(L.css("width")), L.remove()
            } else
                for (i = 0; g > i; i++) d[i].sWidth = Me(v.eq(i).width());
            b && (l.style.width = Me(b), e._reszEvt || (n(t).bind("resize.DT-" + e.sInstance, ge(function() {
                h(e)
            })), e._reszEvt = !0))
        }

        function ge(t) {
            var e, n, i = 200;
            return function() {
                var a = +new Date;
                e && e + i > a ? (clearTimeout(n), n = setTimeout(function() {
                    e = a, t()
                }, i)) : (e = a, t())
            }
        }

        function ye(t, i) {
            if (!t) return 0;
            var a = n("<div/>").css("width", Me(t)).appendTo(i || e.body),
                r = a[0].offsetWidth;
            return a.remove(), r
        }

        function ve(t, e) {
            var i = t.oScroll;
            if (i.sX || i.sY) {
                var a = i.sX ? 0 : i.iBarWidth;
                e.style.width = Me(n(e).outerWidth() - a)
            }
        }

        function be(t, e) {
            var i = we(t, e);
            if (0 > i) return null;
            var a = t.aoData[i];
            return a.nTr ? a.anCells[e] : n("<td/>").html(x(t, i, e, "display"))[0]
        }

        function we(t, e) {
            for (var n, i = -1, a = -1, r = 0, s = t.aoData.length; s > r; r++) n = x(t, r, e, "display") + "", n = n.replace(mn, ""), n.length > i && (i = n.length, a = r);
            return a
        }

        function Me(t) {
            return null === t ? "0px" : "number" == typeof t ? 0 > t ? "0px" : t + "px" : t.match(/\d$/) ? t + "px" : t
        }

        function Le() {
            if (!Re.__scrollbarWidth) {
                var t = n("<p/>").css({
                    width: "100%",
                    height: 200,
                    padding: 0
                })[0],
                    e = n("<div/>").css({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: 200,
                        height: 150,
                        padding: 0,
                        overflow: "hidden",
                        visibility: "hidden"
                    }).append(t).appendTo("body"),
                    i = t.offsetWidth;
                e.css("overflow", "scroll");
                var a = t.offsetWidth;
                i === a && (a = e[0].clientWidth), e.remove(), Re.__scrollbarWidth = i - a
            }
            return Re.__scrollbarWidth
        }

        function xe(t) {
            var e, i, a, r, s, o, l, d = [],
                u = t.aoColumns,
                c = t.aaSortingFixed,
                h = n.isPlainObject(c),
                p = [],
                f = function(t) {
                    t.length && !n.isArray(t[0]) ? p.push(t) : p.push.apply(p, t)
                };
            for (n.isArray(c) && f(c), h && c.pre && f(c.pre), f(t.aaSorting), h && c.post && f(c.post), e = 0; e < p.length; e++)
                for (l = p[e][0], r = u[l].aDataSort, i = 0, a = r.length; a > i; i++) s = r[i], o = u[s].sType || "string", d.push({
                    src: l,
                    col: s,
                    dir: p[e][1],
                    index: p[e][2],
                    type: o,
                    formatter: Re.ext.type.order[o + "-pre"]
                });
            return d
        }

        function De(t) {
            var e, n, i, a, r = [],
                s = Re.ext.type.order,
                o = t.aoData,
                l = (t.aoColumns, 0),
                d = t.aiDisplayMaster,
                u = xe(t);
            for (g(t), e = 0, n = u.length; n > e; e++) a = u[e], a.formatter && l++, Ce(t, a.col);
            if ("ssp" != Be(t) && 0 !== u.length) {
                for (e = 0, i = d.length; i > e; e++) r[d[e]] = e;
                d.sort(l === u.length ? function(t, e) {
                    var n, i, a, s, l, d = u.length,
                        c = o[t]._aSortData,
                        h = o[e]._aSortData;
                    for (a = 0; d > a; a++)
                        if (l = u[a], n = c[l.col], i = h[l.col], s = i > n ? -1 : n > i ? 1 : 0, 0 !== s) return "asc" === l.dir ? s : -s;
                    return n = r[t], i = r[e], i > n ? -1 : n > i ? 1 : 0
                } : function(t, e) {
                    var n, i, a, l, d, c, h = u.length,
                        p = o[t]._aSortData,
                        f = o[e]._aSortData;
                    for (a = 0; h > a; a++)
                        if (d = u[a], n = p[d.col], i = f[d.col], c = s[d.type + "-" + d.dir] || s["string-" + d.dir], l = c(n, i), 0 !== l) return l;
                    return n = r[t], i = r[e], i > n ? -1 : n > i ? 1 : 0
                })
            }
            t.bSorted = !0
        }

        function Te(t) {
            for (var e, i, a = t.aoColumns, r = xe(t), s = t.oLanguage.oAria, o = 0, l = a.length; l > o; o++) {
                var d = a[o],
                    u = d.asSorting,
                    c = d.sTitle.replace(/<.*?>/g, ""),
                    h = n(d.nTh).removeAttr("aria-sort");
                d.bSortable ? (r.length > 0 && r[0].col == o ? (h.attr("aria-sort", "asc" == r[0].dir ? "ascending" : "descending"), i = u[r[0].index + 1] || u[0]) : i = u[0], e = c + ("asc" === i ? s.sSortAscending : s.sSortDescending)) : e = c, h.attr("aria-label", e)
            }
        }

        function ke(t, e, a, r) {
            var s, o = t.aoColumns[e],
                l = t.aaSorting,
                d = o.asSorting,
                u = function(t) {
                    var e = t._idx;
                    return e === i && (e = n.inArray(t[1], d)), e + 1 >= d.length ? 0 : e + 1
                };
            if (a && t.oFeatures.bSortMulti) {
                var c = n.inArray(e, rn(l, "0")); - 1 !== c ? (s = u(l[c]), l[c][1] = d[s], l[c]._idx = s) : (l.push([e, d[0], 0]), l[l.length - 1]._idx = 0)
            } else l.length && l[0][0] == e ? (s = u(l[0]), l.length = 1, l[0][1] = d[s], l[0]._idx = s) : (l.length = 0, l.push([e, d[0]]), l[0]._idx = 0);
            W(t), "function" == typeof r && r(t)
        }

        function Ye(t, e, n, i) {
            var a = t.aoColumns[n];
            He(e, {}, function(e) {
                a.bSortable !== !1 && (he(t, !0), setTimeout(function() {
                    ke(t, n, e.shiftKey, i), "ssp" !== Be(t) && he(t, !1)
                }, 0))
            })
        }

        function Se(t) {
            var e, i, a, r = t.aLastSort,
                s = t.oClasses.sSortColumn,
                o = xe(t),
                l = t.oFeatures;
            if (l.bSort && l.bSortClasses) {
                for (e = 0, i = r.length; i > e; e++) a = r[e].src, n(rn(t.aoData, "anCells", a)).removeClass(s + (2 > e ? e + 1 : 3));
                for (e = 0, i = o.length; i > e; e++) a = o[e].src, n(rn(t.aoData, "anCells", a)).addClass(s + (2 > e ? e + 1 : 3))
            }
            t.aLastSort = o
        }

        function Ce(t, e) {
            var n, i = t.aoColumns[e],
                a = Re.ext.order[i.sSortDataType];
            a && (n = a.call(t.oInstance, t, e, f(t, e)));
            for (var r, s, o = Re.ext.type.order[i.sType + "-pre"], l = 0, d = t.aoData.length; d > l; l++) r = t.aoData[l], r._aSortData || (r._aSortData = []), (!r._aSortData[e] || a) && (s = a ? n[l] : x(t, l, e, "sort"), r._aSortData[e] = o ? o(s) : s)
        }

        function Ae(t) {
            if (t.oFeatures.bStateSave && !t.bDestroying) {
                var e, i, a = {
                        iCreate: (new Date).getTime(),
                        iStart: t._iDisplayStart,
                        iLength: t._iDisplayLength,
                        aaSorting: n.extend(!0, [], t.aaSorting),
                        oSearch: n.extend(!0, {}, t.oPreviousSearch),
                        aoSearchCols: n.extend(!0, [], t.aoPreSearchCols),
                        abVisCols: []
                    };
                for (e = 0, i = t.aoColumns.length; i > e; e++) a.abVisCols.push(t.aoColumns[e].bVisible);
                We(t, "aoStateSaveParams", "stateSaveParams", [t, a]), t.fnStateSaveCallback.call(t.oInstance, t, a)
            }
        }

        function Fe(t) {
            var e, i, a = t.aoColumns;
            if (t.oFeatures.bStateSave) {
                var r = t.fnStateLoadCallback.call(t.oInstance, t);
                if (r) {
                    var s = We(t, "aoStateLoadParams", "stateLoadParams", [t, r]);
                    if (-1 === n.inArray(!1, s) && !(r.iCreate < (new Date).getTime() - 1e3 * t.iStateDuration) && a.length === r.aoSearchCols.length) {
                        t.oLoadedState = n.extend(!0, {}, r), t._iDisplayStart = r.iStart, t.iInitDisplayStart = r.iStart, t._iDisplayLength = r.iLength, t.aaSorting = [];
                        var o = r.aaSorting;
                        for (e = 0, i = o.length; i > e; e++) t.aaSorting.push(o[e][0] >= a.length ? [0, o[e][1]] : o[e]);
                        for (n.extend(t.oPreviousSearch, r.oSearch), n.extend(!0, t.aoPreSearchCols, r.aoSearchCols), e = 0, i = r.abVisCols.length; i > e; e++) a[e].bVisible = r.abVisCols[e];
                        We(t, "aoStateLoaded", "stateLoaded", [t, r])
                    }
                }
            }
        }

        function Ee(t) {
            var e = Re.settings,
                i = n.inArray(t, rn(e, "nTable"));
            return -1 !== i ? e[i] : null
        }

        function je(e, n, i, a) {
            if (i = "DataTables warning: " + (null !== e ? "table id=" + e.sTableId + " - " : "") + i, a && (i += ". For more information about this error, please see http://datatables.net/tn/" + a), n) t.console && console.log && console.log(i);
            else {
                var r = Re.ext,
                    s = r.sErrMode || r.errMode;
                if ("alert" != s) throw new Error(i);
                alert(i)
            }
        }

        function Ne(t, e, a, r) {
            return n.isArray(a) ? void n.each(a, function(i, a) {
                n.isArray(a) ? Ne(t, e, a[0], a[1]) : Ne(t, e, a)
            }) : (r === i && (r = a), void(e[a] !== i && (t[r] = e[a])))
        }

        function Ie(t, e, i) {
            var a;
            for (var r in e) e.hasOwnProperty(r) && (a = e[r], n.isPlainObject(a) ? (n.isPlainObject(t[r]) || (t[r] = {}), n.extend(!0, t[r], a)) : t[r] = i && "data" !== r && "aaData" !== r && n.isArray(a) ? a.slice() : a);
            return t
        }

        function He(t, e, i) {
            n(t).bind("click.DT", e, function(e) {
                t.blur(), i(e)
            }).bind("keypress.DT", e, function(t) {
                13 === t.which && i(t)
            }).bind("selectstart.DT", function() {
                return !1
            })
        }

        function Pe(t, e, n, i) {
            n && t[e].push({
                fn: n,
                sName: i
            })
        }

        function We(t, e, i, a) {
            var r = [];
            return e && (r = n.map(t[e].slice().reverse(), function(e) {
                return e.fn.apply(t.oInstance, a)
            })), null !== i && n(t.nTable).trigger(i + ".dt", a), r
        }

        function Oe(t) {
            var e = t._iDisplayStart,
                n = t.fnDisplayEnd(),
                i = t._iDisplayLength;
            n === t.fnRecordsDisplay() && (e = n - i), (-1 === i || 0 > e) && (e = 0), t._iDisplayStart = e
        }

        function $e(t, e) {
            var i = t.renderer,
                a = Re.ext.renderer[e];
            return n.isPlainObject(i) && i[e] ? a[i[e]] || a._ : "string" == typeof i ? a[i] || a._ : a._
        }

        function Be(t) {
            return t.oFeatures.bServerSide ? "ssp" : t.ajax || t.sAjaxSource ? "ajax" : "dom"
        }

        function ze(t, e) {
            var n = [],
                i = En.numbers_length,
                a = Math.floor(i / 2);
            return i >= e ? n = on(0, e) : a >= t ? (n = on(0, i - 2), n.push("ellipsis"), n.push(e - 1)) : t >= e - 1 - a ? (n = on(e - (i - 2), e), n.splice(0, 0, "ellipsis"), n.splice(0, 0, 0)) : (n = on(t - 1, t + 2), n.push("ellipsis"), n.push(e - 1), n.splice(0, 0, "ellipsis"), n.splice(0, 0, 0)), n.DT_el = "span", n
        }
        var Re, qe, Ue, Ve, Ge, Je = /[\r\n]/g,
            Xe = /<.*?>/g,
            Ke = /[',$£€¥%]/g,
            Qe = /^[\d\+\-a-zA-Z]/,
            Ze = function(t) {
                return t && "-" !== t ? !1 : !0
            }, tn = function(t) {
                var e = parseInt(t, 10);
                return !isNaN(e) && isFinite(t) ? e : null
            }, en = function(t, e) {
                return e && "string" == typeof t && (t = t.replace(Ke, "")), !t || "-" === t || !isNaN(parseFloat(t)) && isFinite(t)
            }, nn = function(t) {
                return !t || "string" == typeof t
            }, an = function(t, e) {
                if (Ze(t)) return !0;
                var n = nn(t);
                return n && en(ln(t), e) ? !0 : null
            }, rn = function(t, e, n) {
                var a = [],
                    r = 0,
                    s = t.length;
                if (n !== i)
                    for (; s > r; r++) t[r] && t[r][e] && a.push(t[r][e][n]);
                else
                    for (; s > r; r++) t[r] && a.push(t[r][e]);
                return a
            }, sn = function(t, e, n, a) {
                var r = [],
                    s = 0,
                    o = e.length;
                if (a !== i)
                    for (; o > s; s++) r.push(t[e[s]][n][a]);
                else
                    for (; o > s; s++) r.push(t[e[s]][n]);
                return r
            }, on = function(t, e) {
                var n, a = [];
                e === i ? (e = 0, n = t) : (n = e, e = t);
                for (var r = e; n > r; r++) a.push(r);
                return a
            }, ln = function(t) {
                return t.replace(Xe, "")
            }, dn = function(t) {
                var e, n, i, a = [],
                    r = t.length,
                    s = 0;
                t: for (n = 0; r > n; n++) {
                    for (e = t[n], i = 0; s > i; i++)
                        if (a[i] === e) continue t;
                    a.push(e), s++
                }
                return a
            }, un = function(t, e, n) {
                t[e] !== i && (t[n] = t[e])
            }, cn = /\[.*?\]$/,
            hn = /\(\)$/,
            pn = n("<div>")[0],
            fn = pn.textContent !== i,
            mn = /<.*?>/g;
        Re = function(t) {
            function e(t) {
                return function() {
                    var e = [Ee(this[Re.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
                    return Re.ext.internal[t].apply(this, e)
                }
            }
            this.$ = function(t, e) {
                return this.api(!0).$(t, e)
            }, this._ = function(t, e) {
                return this.api(!0).rows(t, e).data()
            }, this.api = function(t) {
                return new Ue(t ? Ee(this[qe.iApiIndex]) : this)
            }, this.fnAddData = function(t, e) {
                var a = this.api(!0),
                    r = n.isArray(t) && (n.isArray(t[0]) || n.isPlainObject(t[0])) ? a.rows.add(t) : a.row.add(t);
                return (e === i || e) && a.draw(), r.flatten().toArray()
            }, this.fnAdjustColumnSizing = function(t) {
                var e = this.api(!0).columns.adjust(),
                    n = e.settings()[0],
                    a = n.oScroll;
                t === i || t ? e.draw(!1) : ("" !== a.sX || "" !== a.sY) && fe(n)
            }, this.fnClearTable = function(t) {
                var e = this.api(!0).clear();
                (t === i || t) && e.draw()
            }, this.fnClose = function(t) {
                this.api(!0).row(t).child.hide()
            }, this.fnDeleteRow = function(t, e, n) {
                var a = this.api(!0),
                    r = a.rows(t),
                    s = r.settings()[0],
                    o = s.aoData[r[0][0]];
                return r.remove(), e && e.call(this, s, o), (n === i || n) && a.draw(), o
            }, this.fnDestroy = function(t) {
                this.api(!0).destroy(t)
            }, this.fnDraw = function(t) {
                this.api(!0).draw(!t)
            }, this.fnFilter = function(t, e, n, a, r, s) {
                var o = this.api(!0);
                null === e || e === i ? o.search(t, n, a, s) : o.column(e).search(t, n, a, s), o.draw()
            }, this.fnGetData = function(t, e) {
                var n = this.api(!0);
                if (t !== i) {
                    var a = t.nodeName ? t.nodeName.toLowerCase() : "";
                    return e !== i || "td" == a || "th" == a ? n.cell(t, e).data() : n.row(t).data()
                }
                return n.data().toArray()
            }, this.fnGetNodes = function(t) {
                var e = this.api(!0);
                return t !== i ? e.row(t).node() : e.rows().nodes().toArray()
            }, this.fnGetPosition = function(t) {
                var e = this.api(!0),
                    n = t.nodeName.toUpperCase();
                if ("TR" == n) return e.row(t).index();
                if ("TD" == n || "TH" == n) {
                    var i = e.cell(t).index();
                    return [i.row, i.columnVisible, i.column]
                }
                return null
            }, this.fnIsOpen = function(t) {
                return this.api(!0).row(t).child.isShown()
            }, this.fnOpen = function(t, e, n) {
                return this.api(!0).row(t).child(e, n).show()
            }, this.fnPageChange = function(t, e) {
                var n = this.api(!0).page(t);
                (e === i || e) && n.draw(!1)
            }, this.fnSetColumnVis = function(t, e, n) {
                var a = this.api(!0).column(t).visible(e);
                (n === i || n) && a.columns.adjust().draw()
            }, this.fnSettings = function() {
                return Ee(this[qe.iApiIndex])
            }, this.fnSort = function(t) {
                this.api(!0).order(t).draw()
            }, this.fnSortListener = function(t, e, n) {
                this.api(!0).order.listener(t, e, n)
            }, this.fnUpdate = function(t, e, n, a, r) {
                var s = this.api(!0);
                return n === i || null === n ? s.row(e).data(t) : s.cell(e, n).data(t), (r === i || r) && s.columns.adjust(), (a === i || a) && s.draw(), 0
            }, this.fnVersionCheck = qe.fnVersionCheck, this.oApi = this.internal = {
                _fnExternApiFunc: e,
                _fnBuildAjax: z,
                _fnAjaxUpdate: R,
                _fnAjaxParameters: q,
                _fnAjaxUpdateDraw: U,
                _fnAjaxDataSrc: V,
                _fnAddColumn: u,
                _fnColumnOptions: c,
                _fnAdjustColumnSizing: h,
                _fnVisibleToColumnIndex: p,
                _fnColumnIndexToVisible: f,
                _fnVisbleColumns: m,
                _fnGetColumns: _,
                _fnColumnTypes: g,
                _fnApplyColumnDefs: y,
                _fnHungarianMap: a,
                _fnCamelToHungarian: r,
                _fnLanguageCompat: s,
                _fnBrowserDetect: d,
                _fnAddData: v,
                _fnAddTr: b,
                _fnNodeToDataIndex: w,
                _fnNodeToColumnIndex: M,
                _fnGetRowData: L,
                _fnGetCellData: x,
                _fnSetCellData: D,
                _fnSplitObjNotation: T,
                _fnGetObjectDataFn: k,
                _fnSetObjectDataFn: Y,
                _fnGetDataMaster: S,
                _fnClearTable: C,
                _fnDeleteIndex: A,
                _fnInvalidateRow: F,
                _fnGetRowElements: E,
                _fnCreateTr: j,
                _fnBuildHead: I,
                _fnDrawHead: H,
                _fnDraw: P,
                _fnReDraw: W,
                _fnAddOptionsHtml: O,
                _fnDetectHeader: $,
                _fnGetUniqueThs: B,
                _fnFeatureHtmlFilter: G,
                _fnFilterComplete: J,
                _fnFilterCustom: X,
                _fnFilterColumn: K,
                _fnFilter: Q,
                _fnFilterCreateSearch: Z,
                _fnEscapeRegex: te,
                _fnFilterData: ee,
                _fnFeatureHtmlInfo: ne,
                _fnUpdateInfo: ie,
                _fnInfoMacros: ae,
                _fnInitialise: re,
                _fnInitComplete: se,
                _fnLengthChange: oe,
                _fnFeatureHtmlLength: le,
                _fnFeatureHtmlPaginate: de,
                _fnPageChange: ue,
                _fnFeatureHtmlProcessing: ce,
                _fnProcessingDisplay: he,
                _fnFeatureHtmlTable: pe,
                _fnScrollDraw: fe,
                _fnApplyToChildren: me,
                _fnCalculateColumnWidths: _e,
                _fnThrottle: ge,
                _fnConvertToWidth: ye,
                _fnScrollingWidthAdjust: ve,
                _fnGetWidestNode: be,
                _fnGetMaxLenString: we,
                _fnStringToCss: Me,
                _fnScrollBarWidth: Le,
                _fnSortFlatten: xe,
                _fnSort: De,
                _fnSortAria: Te,
                _fnSortListener: ke,
                _fnSortAttachListener: Ye,
                _fnSortingClasses: Se,
                _fnSortData: Ce,
                _fnSaveState: Ae,
                _fnLoadState: Fe,
                _fnSettingsFromNode: Ee,
                _fnLog: je,
                _fnMap: Ne,
                _fnBindAction: He,
                _fnCallbackReg: Pe,
                _fnCallbackFire: We,
                _fnLengthOverflow: Oe,
                _fnRenderer: $e,
                _fnDataSource: Be,
                _fnRowAttributes: N
            }, n.extend(Re.ext.internal, this.internal);
            for (var ze in Re.ext.internal) ze && (this[ze] = e(ze));
            var Ve = this,
                Ge = t === i,
                Je = this.length;
            return Ge && (t = {}), this.each(function() {
                var e, a = {}, h = Je > 1 ? Ie(a, t, !0) : t,
                    p = 0,
                    f = this.getAttribute("id"),
                    m = !1,
                    _ = Re.defaults;
                if ("table" != this.nodeName.toLowerCase()) return void je(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
                o(_), l(_.column), r(_, _, !0), r(_.column, _.column, !0), r(_, h);
                var g = Re.settings;
                for (p = 0, e = g.length; e > p; p++) {
                    if (g[p].nTable == this) {
                        var w = h.bRetrieve !== i ? h.bRetrieve : _.bRetrieve,
                            M = h.bDestroy !== i ? h.bDestroy : _.bDestroy;
                        if (Ge || w) return g[p].oInstance;
                        if (M) {
                            g[p].oInstance.fnDestroy();
                            break
                        }
                        return void je(g[p], 0, "Cannot reinitialise DataTable", 3)
                    }
                    if (g[p].sTableId == this.id) {
                        g.splice(p, 1);
                        break
                    }
                }(null === f || "" === f) && (f = "DataTables_Table_" + Re.ext._unique++, this.id = f);
                var L = n.extend(!0, {}, Re.models.oSettings, {
                    nTable: this,
                    oApi: Ve.internal,
                    oInit: h,
                    sDestroyWidth: n(this)[0].style.width,
                    sInstance: f,
                    sTableId: f
                });
                if (g.push(L), L.oInstance = 1 === Ve.length ? Ve : n(this).dataTable(), o(h), h.oLanguage && s(h.oLanguage), h.aLengthMenu && !h.iDisplayLength && (h.iDisplayLength = n.isArray(h.aLengthMenu[0]) ? h.aLengthMenu[0][0] : h.aLengthMenu[0]), h = Ie(n.extend(!0, {}, _), h), Ne(L.oFeatures, h, ["bPaginate", "bLengthChange", "bFilter", "bSort", "bSortMulti", "bInfo", "bProcessing", "bAutoWidth", "bSortClasses", "bServerSide", "bDeferRender"]), Ne(L, h, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", ["iCookieDuration", "iStateDuration"],
                    ["oSearch", "oPreviousSearch"],
                    ["aoSearchCols", "aoPreSearchCols"],
                    ["iDisplayLength", "_iDisplayLength"],
                    ["bJQueryUI", "bJUI"]
                ]), Ne(L.oScroll, h, [
                    ["sScrollX", "sX"],
                    ["sScrollXInner", "sXInner"],
                    ["sScrollY", "sY"],
                    ["bScrollCollapse", "bCollapse"]
                ]), Ne(L.oLanguage, h, "fnInfoCallback"), Pe(L, "aoDrawCallback", h.fnDrawCallback, "user"), Pe(L, "aoServerParams", h.fnServerParams, "user"), Pe(L, "aoStateSaveParams", h.fnStateSaveParams, "user"), Pe(L, "aoStateLoadParams", h.fnStateLoadParams, "user"), Pe(L, "aoStateLoaded", h.fnStateLoaded, "user"), Pe(L, "aoRowCallback", h.fnRowCallback, "user"), Pe(L, "aoRowCreatedCallback", h.fnCreatedRow, "user"), Pe(L, "aoHeaderCallback", h.fnHeaderCallback, "user"), Pe(L, "aoFooterCallback", h.fnFooterCallback, "user"), Pe(L, "aoInitComplete", h.fnInitComplete, "user"), Pe(L, "aoPreDrawCallback", h.fnPreDrawCallback, "user"), h.bJQueryUI ? (n.extend(L.oClasses, Re.ext.oJUIClasses, h.oClasses), h.sDom === _.sDom && "lfrtip" === _.sDom && (L.sDom = '<"H"lfr>t<"F"ip>'), L.renderer ? n.isPlainObject(L.renderer) && !L.renderer.header && (L.renderer.header = "jqueryui") : L.renderer = "jqueryui") : n.extend(L.oClasses, Re.ext.classes, h.oClasses), n(this).addClass(L.oClasses.sTable), ("" !== L.oScroll.sX || "" !== L.oScroll.sY) && (L.oScroll.iBarWidth = Le()), L.oScroll.sX === !0 && (L.oScroll.sX = "100%"), L.iInitDisplayStart === i && (L.iInitDisplayStart = h.iDisplayStart, L._iDisplayStart = h.iDisplayStart), null !== h.iDeferLoading) {
                    L.bDeferLoading = !0;
                    var x = n.isArray(h.iDeferLoading);
                    L._iRecordsDisplay = x ? h.iDeferLoading[0] : h.iDeferLoading, L._iRecordsTotal = x ? h.iDeferLoading[1] : h.iDeferLoading
                }
                "" !== h.oLanguage.sUrl ? (L.oLanguage.sUrl = h.oLanguage.sUrl, n.getJSON(L.oLanguage.sUrl, null, function(t) {
                    s(t), r(_.oLanguage, t), n.extend(!0, L.oLanguage, h.oLanguage, t), re(L)
                }), m = !0) : n.extend(!0, L.oLanguage, h.oLanguage), null === h.asStripeClasses && (L.asStripeClasses = [L.oClasses.sStripeOdd, L.oClasses.sStripeEven]);
                var D = L.asStripeClasses,
                    T = n("tbody tr:eq(0)", this); - 1 !== n.inArray(!0, n.map(D, function(t) {
                        return T.hasClass(t)
                    })) && (n("tbody tr", this).removeClass(D.join(" ")), L.asDestroyStripes = D.slice());
                var k, Y = [],
                    S = this.getElementsByTagName("thead");
                if (0 !== S.length && ($(L.aoHeader, S[0]), Y = B(L)), null === h.aoColumns)
                    for (k = [], p = 0, e = Y.length; e > p; p++) k.push(null);
                else k = h.aoColumns;
                for (p = 0, e = k.length; e > p; p++) u(L, Y ? Y[p] : null);
                if (y(L, h.aoColumnDefs, k, function(t, e) {
                    c(L, t, e)
                }), T.length) {
                    var C = function(t, e) {
                        return t.getAttribute("data-" + e) ? e : null
                    };
                    n.each(E(L, T[0]).cells, function(t, e) {
                        var n = L.aoColumns[t];
                        if (n.mData === t) {
                            var a = C(e, "sort") || C(e, "order"),
                                r = C(e, "filter") || C(e, "search");
                            (null !== a || null !== r) && (n.mData = {
                                    _: t + ".display",
                                    sort: null !== a ? t + ".@data-" + a : i,
                                    type: null !== a ? t + ".@data-" + a : i,
                                    filter: null !== r ? t + ".@data-" + r : i
                                }, c(L, t))
                        }
                    })
                }
                if (h.bStateSave && (L.oFeatures.bStateSave = !0, Fe(L, h), Pe(L, "aoDrawCallback", Ae, "state_save")), h.aaSorting === i)
                    for (p = 0, e = L.aaSorting.length; e > p; p++) L.aaSorting[p][1] = L.aoColumns[p].asSorting[0];
                Se(L), L.oFeatures.bSort && Pe(L, "aoDrawCallback", function() {
                    if (L.bSorted) {
                        var t = xe(L),
                            e = {};
                        n.each(t, function(t, n) {
                            e[n.src] = n.dir
                        }), We(L, null, "order", [L, t, e]), Se(L), Te(L)
                    }
                }), d(L);
                var A = n(this).children("caption").each(function() {
                    this._captionSide = n(this).css("caption-side")
                }),
                    F = n(this).children("thead");
                0 === F.length && (F = n("<thead/>").appendTo(this)), L.nTHead = F[0];
                var j = n(this).children("tbody");
                0 === j.length && (j = n("<tbody/>").appendTo(this)), L.nTBody = j[0];
                var N = n(this).children("tfoot");
                if (0 === N.length && A.length > 0 && ("" !== L.oScroll.sX || "" !== L.oScroll.sY) && (N = n("<tfoot/>").appendTo(this)), 0 === N.length || 0 === N.children().length ? n(this).addClass(L.oClasses.sNoFooter) : N.length > 0 && (L.nTFoot = N[0], $(L.aoFooter, L.nTFoot)), h.aaData)
                    for (p = 0; p < h.aaData.length; p++) v(L, h.aaData[p]);
                else(L.bDeferLoading || "dom" == Be(L)) && b(L, n(L.nTBody).children("tr"));
                L.aiDisplay = L.aiDisplayMaster.slice(), L.bInitialised = !0, m === !1 && re(L)
            }), Ve = null, this
        };
        var _n = [],
            gn = Array.prototype,
            yn = function(t) {
                var e, i, a = Re.settings,
                    r = n.map(a, function(t) {
                        return t.nTable
                    });
                return t.nTable && t.oApi ? [t] : t.nodeName && "table" === t.nodeName.toLowerCase() ? (e = n.inArray(t, r), -1 !== e ? [a[e]] : null) : ("string" == typeof t ? i = n(t) : t instanceof n && (i = t), i ? i.map(function() {
                    return e = n.inArray(this, r), -1 !== e ? a[e] : null
                }) : void 0)
            };
        Re.Api = Ue = function(t, e) {
            if (!this instanceof Ue) throw "DT API must be constructed as a new object";
            var i = [],
                a = function(t) {
                    var e = yn(t);
                    e && i.push.apply(i, e)
                };
            if (n.isArray(t))
                for (var r = 0, s = t.length; s > r; r++) a(t[r]);
            else a(t);
            this.context = dn(i), e && this.push.apply(this, e), this.selector = {
                rows: null,
                cols: null,
                opts: null
            }, Ue.extend(this, this, _n)
        }, Ue.prototype = {
            concat: gn.concat,
            context: [],
            each: function(t) {
                if (gn.forEach) gn.forEach.call(this, t, this);
                else
                    for (var e = 0, n = this.length; n > e; e++) t.call(this, this[e], e, this);
                return this
            },
            filter: function(t) {
                var e = [];
                if (gn.filter) e = gn.filter.call(this, t, this);
                else
                    for (var n = 0, i = this.length; i > n; n++) t.call(this, this[n], n, this) && e.push(this[n]);
                return new Ue(this.context, e)
            },
            flatten: function() {
                var t = [];
                return new Ue(this.context, t.concat.apply(t, this))
            },
            join: gn.join,
            indexOf: gn.indexOf || function(t, e) {
                for (var n = e || 0, i = this.length; i > n; n++)
                    if (this[n] === t) return n;
                return -1
            },
            iterator: function(t, e, n) {
                var a, r, s, o, l, d, u, c, h = [],
                    p = this.context,
                    f = this.selector;
                for ("string" == typeof t && (n = e, e = t, t = !1), r = 0, s = p.length; s > r; r++)
                    if ("table" === e) a = n(p[r], r), a !== i && h.push(a);
                    else if ("columns" === e || "rows" === e) a = n(p[r], this[r], r), a !== i && h.push(a);
                else if ("column" === e || "column-rows" === e || "row" === e || "cell" === e)
                    for (u = this[r], "column-rows" === e && (d = xn(p[r], f.opts)), o = 0, l = u.length; l > o; o++) c = u[o], a = "cell" === e ? n(p[r], c.row, c.column, r, o) : n(p[r], c, r, o, d), a !== i && h.push(a);
                if (h.length) {
                    var m = new Ue(p, t ? h.concat.apply([], h) : h),
                        _ = m.selector;
                    return _.rows = f.rows, _.cols = f.cols, _.opts = f.opts, m
                }
                return this
            },
            lastIndexOf: gn.lastIndexOf || function() {
                return this.indexOf.apply(this.toArray.reverse(), arguments)
            },
            length: 0,
            map: function(t) {
                var e = [];
                if (gn.map) e = gn.map.call(this, t, this);
                else
                    for (var n = 0, i = this.length; i > n; n++) e.push(t.call(this, this[n], n));
                return new Ue(this.context, e)
            },
            pluck: function(t) {
                return this.map(function(e) {
                    return e[t]
                })
            },
            pop: gn.pop,
            push: gn.push,
            reduce: gn.reduce || function(t, e) {
                var n, i = !1;
                arguments.length > 1 && (n = e, i = !0);
                for (var a = 0, r = this.length; r > a; a++) this.hasOwnProperty(a) && (n = i ? t(n, this[a], a, this) : this[a], i = !0);
                return n
            },
            reduceRight: gn.reduceRight || function(t, e) {
                var n, i = !1;
                arguments.length > 1 && (n = e, i = !0);
                for (var a = this.length - 1; a >= 0; a--) this.hasOwnProperty(a) && (n = i ? t(n, this[a], a, this) : this[a], i = !0);
                return n
            },
            reverse: gn.reverse,
            selector: null,
            shift: gn.shift,
            sort: gn.sort,
            splice: gn.splice,
            toArray: function() {
                return gn.slice.call(this)
            },
            to$: function() {
                return n(this)
            },
            toJQuery: function() {
                return n(this)
            },
            unique: function() {
                return new Ue(this.context, dn(this))
            },
            unshift: gn.unshift
        }, Ue.extend = function(t, e, n) {
            if (e && (e instanceof Ue || e.__dt_wrapper)) {
                var i, a, r, s = function(e, n) {
                        return function() {
                            var i = e.apply(t, arguments);
                            return Ue.extend(i, i, n.methodExt), i
                        }
                    };
                for (i = 0, a = n.length; a > i; i++) r = n[i], e[r.name] = "function" == typeof r.val ? s(r.val, r) : r.val, e[r.name].__dt_wrapper = !0, Ue.extend(t, e[r.name], r.propExt)
            }
        }, Ue.register = Ve = function(t, e) {
            if (n.isArray(t))
                for (var i = 0, a = t.length; a > i; i++) Ue.register(t[i], e);
            else {
                var r, s, o, l, d = t.split("."),
                    u = _n,
                    c = function(t, e) {
                        for (var n = 0, i = t.length; i > n; n++)
                            if (t[n].name === e) return t[n];
                        return null
                    };
                for (r = 0, s = d.length; s > r; r++) {
                    l = -1 !== d[r].indexOf("()"), o = l ? d[r].replace("()", "") : d[r];
                    var h = c(u, o);
                    h || (h = {
                        name: o,
                        val: {},
                        methodExt: [],
                        propExt: []
                    }, u.push(h)), r === s - 1 ? h.val = e : u = l ? h.methodExt : h.propExt
                }
                Ue.ready && Re.api.build()
            }
        }, Ue.registerPlural = Ge = function(t, e, a) {
            Ue.register(t, a), Ue.register(e, function() {
                var t = a.apply(this, arguments);
                return t === this ? this : t instanceof Ue ? t.length ? n.isArray(t[0]) ? new Ue(t.context, t[0]) : t[0] : i : t
            })
        };
        var vn = function(t, e) {
            if ("number" == typeof t) return [e[t]];
            var i = n.map(e, function(t) {
                return t.nTable
            });
            return n(i).filter(t).map(function() {
                var t = n.inArray(this, i);
                return e[t]
            }).toArray()
        };
        Ve("tables()", function(t) {
            return t ? new Ue(vn(t, this.context)) : this
        }), Ve("table()", function(t) {
            var e = this.tables(t),
                n = e.context;
            return n.length && (n.length = 1), e
        }), Ge("tables().nodes()", "table().node()", function() {
            return this.iterator("table", function(t) {
                return t.nTable
            })
        }), Ge("tables().body()", "table().body()", function() {
            return this.iterator("table", function(t) {
                return t.nTBody
            })
        }), Ge("tables().header()", "table().header()", function() {
            return this.iterator("table", function(t) {
                return t.nTHead
            })
        }), Ge("tables().footer()", "table().footer()", function() {
            return this.iterator("table", function(t) {
                return t.nTFoot
            })
        }), Ve("draw()", function(t) {
            return this.iterator("table", function(e) {
                W(e, t === !1)
            })
        }), Ve("page()", function(t) {
            return t === i ? this.page.info().page : this.iterator("table", function(e) {
                ue(e, t)
            })
        }), Ve("page.info()", function() {
            if (0 === this.context.length) return i;
            var t = this.context[0],
                e = t._iDisplayStart,
                n = t._iDisplayLength,
                a = t.fnRecordsDisplay(),
                r = -1 === n;
            return {
                page: r ? 0 : Math.floor(e / n),
                pages: r ? 1 : Math.ceil(a / n),
                start: e,
                end: t.fnDisplayEnd(),
                length: n,
                recordsTotal: t.fnRecordsTotal(),
                recordsDisplay: a
            }
        }), Ve("page.len()", function(t) {
            return t === i ? 0 !== this.context.length ? this.context[0]._iDisplayLength : i : this.iterator("table", function(e) {
                oe(e, t)
            })
        });
        var bn = function(t, e, n) {
            "ssp" == Be(t) ? W(t, e) : z(t, [], function(i) {
                C(t);
                for (var a = V(t, i), r = 0, s = a.length; s > r; r++) v(t, a[r]);
                W(t, e), n && n(i)
            })
        };
        Ve("ajax.json()", function() {
            var t = this.context;
            return t.length > 0 ? t[0].json : void 0
        }), Ve("ajax.reload()", function(t, e) {
            return this.iterator("table", function(n) {
                bn(n, e === !1, t)
            })
        }), Ve("ajax.url()", function(t) {
            var e = this.context;
            return t === i ? 0 === e.length ? i : (e = e[0], e.ajax ? n.isPlainObject(e.ajax) ? e.ajax.url : e.ajax : e.sAjaxSource) : this.iterator("table", function(e) {
                n.isPlainObject(e.ajax) ? e.ajax.url = t : e.ajax = t
            })
        }), Ve("ajax.url().load()", function(t, e) {
            return this.iterator("table", function(n) {
                bn(n, e === !1, t)
            })
        });
        var wn = function(t, e) {
            var i, a, r, s, o, l, d = [];
            for (n.isArray(t) || (t = [t]), r = 0, s = t.length; s > r; r++)
                for (a = t[r] && t[r].split ? t[r].split(",") : [t[r]], o = 0, l = a.length; l > o; o++) i = e("string" == typeof a[o] ? n.trim(a[o]) : a[o]), i && i.length && d.push.apply(d, i);
            return d
        }, Mn = function(t) {
                return t || (t = {}), t.filter && !t.search && (t.search = t.filter), {
                    search: t.search || "none",
                    order: t.order || "current",
                    page: t.page || "all"
                }
            }, Ln = function(t) {
                for (var e = 0, n = t.length; n > e; e++)
                    if (t[e].length > 0) return t[0] = t[e], t.length = 1, t.context = [t.context[e]], t;
                return t.length = 0, t
            }, xn = function(t, e) {
                var i, a, r, s = [],
                    o = t.aiDisplay,
                    l = t.aiDisplayMaster,
                    d = e.search,
                    u = e.order,
                    c = e.page;
                if ("current" == c)
                    for (i = t._iDisplayStart, a = t.fnDisplayEnd(); a > i; i++) s.push(o[i]);
                else if ("current" == u || "applied" == u) s = "none" == d ? l.slice() : "applied" == d ? o.slice() : n.map(l, function(t) {
                    return -1 === n.inArray(t, o) ? t : null
                });
                else if ("index" == u || "original" == u)
                    for (i = 0, a = t.aoData.length; a > i; i++) "none" == d ? s.push(i) : (r = n.inArray(i, o), (-1 === r && "removed" == d || 1 === r && "applied" == d) && s.push(i));
                return s
            }, Dn = function(t, e, i) {
                return wn(e, function(e) {
                    var a = tn(e);
                    if (null !== a && !i) return [a];
                    var r = xn(t, i);
                    if (null !== a && -1 !== n.inArray(a, r)) return [a];
                    if (!e) return r;
                    for (var s = [], o = 0, l = r.length; l > o; o++) s.push(t.aoData[r[o]].nTr);
                    return e.nodeName && -1 !== n.inArray(e, s) ? [e._DT_RowIndex] : n(s).filter(e).map(function() {
                        return this._DT_RowIndex
                    }).toArray()
                })
            };
        Ve("rows()", function(t, e) {
            t === i ? t = "" : n.isPlainObject(t) && (e = t, t = ""), e = Mn(e);
            var a = this.iterator("table", function(n) {
                return Dn(n, t, e)
            });
            return a.selector.rows = t, a.selector.opts = e, a
        }), Ge("rows().nodes()", "row().node()", function() {
            return this.iterator("row", function(t, e) {
                return t.aoData[e].nTr || i
            })
        }), Ve("rows().data()", function() {
            return this.iterator(!0, "rows", function(t, e) {
                return sn(t.aoData, e, "_aData")
            })
        }), Ge("rows().cache()", "row().cache()", function(t) {
            return this.iterator("row", function(e, n) {
                var i = e.aoData[n];
                return "search" === t ? i._aFilterData : i._aSortData
            })
        }), Ge("rows().invalidate()", "row().invalidate()", function(t) {
            return this.iterator("row", function(e, n) {
                F(e, n, t)
            })
        }), Ge("rows().indexes()", "row().index()", function() {
            return this.iterator("row", function(t, e) {
                return e
            })
        }), Ge("rows().remove()", "row().remove()", function() {
            var t = this;
            return this.iterator("row", function(e, i, a) {
                var r = e.aoData;
                r.splice(i, 1);
                for (var s = 0, o = r.length; o > s; s++) null !== r[s].nTr && (r[s].nTr._DT_RowIndex = s);
                n.inArray(i, e.aiDisplay);
                A(e.aiDisplayMaster, i), A(e.aiDisplay, i), A(t[a], i, !1), Oe(e)
            })
        }), Ve("rows.add()", function(t) {
            var e = this.iterator("table", function(e) {
                var n, i, a, r = [];
                for (i = 0, a = t.length; a > i; i++) n = t[i], r.push(n.nodeName && "TR" === n.nodeName.toUpperCase() ? b(e, n)[0] : v(e, n));
                return r
            }),
                n = this.rows(-1);
            return n.pop(), n.push.apply(n, e), n
        }), Ve("row()", function(t, e) {
            return Ln(this.rows(t, e))
        }), Ve("row().data()", function(t) {
            var e = this.context;
            return t === i ? e.length && this.length ? e[0].aoData[this[0]]._aData : i : (e[0].aoData[this[0]]._aData = t, F(e[0], this[0], "data"), this)
        }), Ve("row.add()", function(t) {
            t instanceof n && t.length && (t = t[0]);
            var e = this.iterator("table", function(e) {
                return t.nodeName && "TR" === t.nodeName.toUpperCase() ? b(e, t)[0] : v(e, t)
            });
            return this.row(e[0])
        });
        var Tn = function(t, e, i, a) {
            var r = [],
                s = function(e, i) {
                    e.nodeName && "tr" === e.nodeName.toUpperCase() || (e = n("<tr><td></td></tr>").find("td").html(e).parent()), n("td", e).addClass(i)[0].colSpan = m(t), r.push(e[0])
                };
            if (n.isArray(i) || i instanceof n)
                for (var o = 0, l = i.length; l > o; o++) s(i[o], a);
            else s(i, a);
            e._details && e._details.remove(), e._details = n(r), e._detailsShow && e._details.insertAfter(e.nTr)
        }, kn = function(t) {
                var e = this.context;
                if (e.length && this.length) {
                    var n = e[0].aoData[this[0]];
                    n._details && (n._detailsShow = t, t ? n._details.insertAfter(n.nTr) : n._details.remove(), Yn(e[0]))
                }
                return this
            }, Yn = function(t) {
                var e = n(t.nTable);
                e.off("draw.DT_details"), e.off("column-visibility.DT_details"), rn(t.aoData, "_details").length > 0 && (e.on("draw.DT_details", function() {
                    e.find("tbody tr").each(function() {
                        var e = w(t, this),
                            n = t.aoData[e];
                        n._detailsShow && n._details.insertAfter(this)
                    })
                }), e.on("column-visibility.DT_details", function(t, e) {
                    for (var n, i = m(e), a = 0, r = e.aoData.length; r > a; a++) n = e.aoData[a], n._details && n._details.children("td[colspan]").attr("colspan", i)
                }))
            };
        Ve("row().child()", function(t, e) {
            var n = this.context;
            return t === i ? n.length && this.length ? n[0].aoData[this[0]]._details : i : (n.length && this.length && Tn(n[0], n[0].aoData[this[0]], t, e), this)
        }), Ve(["row().child.show()", "row().child().show()"], function() {
            kn.call(this, !0)
        }), Ve(["row().child.hide()", "row().child().hide()"], function() {
            kn.call(this, !1)
        }), Ve("row().child.isShown()", function() {
            var t = this.context;
            return t.length && this.length ? t[0].aoData[this[0]]._detailsShow || !1 : !1
        });
        var Sn = /^(.*):(name|visIdx|visible)$/,
            Cn = function(t, e) {
                var i = t.aoColumns,
                    a = rn(i, "sName"),
                    r = rn(i, "nTh");
                return wn(e, function(e) {
                    var s = tn(e);
                    if ("" === e) return on(t.aoColumns.length);
                    if (null !== s) return [s >= 0 ? s : i.length + s];
                    var o = e.match(Sn);
                    if (!o) return n(r).filter(e).map(function() {
                        return n.inArray(this, r)
                    }).toArray();
                    switch (o[2]) {
                        case "visIdx":
                        case "visible":
                            var l = parseInt(o[1], 10);
                            if (0 > l) {
                                var d = n.map(i, function(t, e) {
                                    return t.bVisible ? e : null
                                });
                                return [d[d.length + l]]
                            }
                            return [p(t, l)];
                        case "name":
                            return n.map(a, function(t, e) {
                                return t === o[1] ? e : null
                            })
                    }
                })
            }, An = function(t, e, a) {
                var r, s, o, l, d = t.aoColumns,
                    u = d[e],
                    c = t.aoData;
                if (a === i) return u.bVisible;
                if (u.bVisible !== a) {
                    if (a) {
                        var p = n.inArray(!0, rn(d, "bVisible"), e + 1);
                        for (s = 0, o = c.length; o > s; s++) l = c[s].nTr, r = c[s].anCells, l && l.insertBefore(r[e], r[p] || null)
                    } else n(rn(t.aoData, "anCells", e)).remove(), u.bVisible = !1, H(t, t.aoHeader), H(t, t.aoFooter), Ae(t);
                    u.bVisible = a, H(t, t.aoHeader), H(t, t.aoFooter), h(t), (t.oScroll.sX || t.oScroll.sY) && fe(t), We(t, null, "column-visibility", [t, e, a]), Ae(t)
                }
            };
        Ve("columns()", function(t, e) {
            t === i ? t = "" : n.isPlainObject(t) && (e = t, t = ""), e = Mn(e);
            var a = this.iterator("table", function(n) {
                return Cn(n, t, e)
            });
            return a.selector.cols = t, a.selector.opts = e, a
        }), Ge("columns().header()", "column().header()", function() {
            return this.iterator("column", function(t, e) {
                return t.aoColumns[e].nTh
            })
        }), Ge("columns().footer()", "column().footer()", function() {
            return this.iterator("column", function(t, e) {
                return t.aoColumns[e].nTf
            })
        }), Ge("columns().data()", "column().data()", function() {
            return this.iterator("column-rows", function(t, e, n, i, a) {
                for (var r = [], s = 0, o = a.length; o > s; s++) r.push(x(t, a[s], e, ""));
                return r
            })
        }), Ge("columns().cache()", "column().cache()", function(t) {
            return this.iterator("column-rows", function(e, n, i, a, r) {
                return sn(e.aoData, r, "search" === t ? "_aFilterData" : "_aSortData", n)
            })
        }), Ge("columns().nodes()", "column().nodes()", function() {
            return this.iterator("column-rows", function(t, e, n, i, a) {
                return sn(t.aoData, a, "anCells", e)
            })
        }), Ge("columns().visible()", "column().visible()", function(t) {
            return this.iterator("column", function(e, n) {
                return An(e, n, t)
            })
        }), Ge("columns().indexes()", "column().index()", function(t) {
            return this.iterator("column", function(e, n) {
                return "visible" === t ? f(e, n) : n
            })
        }), Ve("columns.adjust()", function() {
            return this.iterator("table", function(t) {
                h(t)
            })
        }), Ve("column.index()", function(t, e) {
            if (0 !== this.context.length) {
                var n = this.context[0];
                if ("fromVisible" === t || "toData" === t) return f(n, e);
                if ("fromData" === t || "toVisible" === t) return p(n, e)
            }
        }), Ve("column()", function(t, e) {
            return Ln(this.columns(t, e))
        });
        var Fn = function(t, e, i) {
            var a, r, s, o, l, d = t.aoData,
                u = xn(t, i),
                c = sn(d, u, "anCells"),
                h = n([].concat.apply([], c)),
                p = t.aoColumns.length;
            return wn(e, function(t) {
                if (!t) {
                    for (r = [], s = 0, o = u.length; o > s; s++)
                        for (a = u[s], l = 0; p > l; l++) r.push({
                            row: a,
                            column: l
                        });
                    return r
                }
                return h.filter(t).map(function(t, e) {
                    return a = e.parentNode._DT_RowIndex, {
                        row: a,
                        column: n.inArray(e, d[a].anCells)
                    }
                })
            })
        };
        Ve("cells()", function(t, e, a) {
            if (n.isPlainObject(t) && (a = t, t = null), n.isPlainObject(e) && (a = e, e = null), null === e || e === i) return this.iterator("table", function(e) {
                return Fn(e, t, Mn(a))
            });
            var r, s, o, l, d, u = this.columns(e, a),
                c = this.rows(t, a),
                h = this.iterator("table", function(t, e) {
                    for (r = [], s = 0, o = c[e].length; o > s; s++)
                        for (l = 0, d = u[e].length; d > l; l++) r.push({
                            row: c[e][s],
                            column: u[e][l]
                        });
                    return r
                });
            return n.extend(h.selector, {
                cols: e,
                rows: t,
                opts: a
            }), h
        }), Ge("cells().nodes()", "cell().node()", function() {
            return this.iterator("cell", function(t, e, n) {
                return t.aoData[e].anCells[n]
            })
        }), Ve("cells().data()", function() {
            return this.iterator("cell", function(t, e, n) {
                return x(t, e, n)
            })
        }), Ge("cells().cache()", "cell().cache()", function(t) {
            return t = "search" === t ? "_aFilterData" : "_aSortData", this.iterator("cell", function(e, n, i) {
                return e.aoData[n][t][i]
            })
        }), Ge("cells().indexes()", "cell().index()", function() {
            return this.iterator("cell", function(t, e, n) {
                return {
                    row: e,
                    column: n,
                    columnVisible: f(t, n)
                }
            })
        }), Ve(["cells().invalidate()", "cell().invalidate()"], function(t) {
            var e = this.selector;
            return this.rows(e.rows, e.opts).invalidate(t), this
        }), Ve("cell()", function(t, e, n) {
            return Ln(this.cells(t, e, n))
        }), Ve("cell().data()", function(t) {
            var e = this.context,
                n = this[0];
            return t === i ? e.length && n.length ? x(e[0], n[0].row, n[0].column) : i : (D(e[0], n[0].row, n[0].column, t), F(e[0], n[0].row, "data", n[0].column), this)
        }), Ve("order()", function(t, e) {
            var a = this.context;
            return t === i ? 0 !== a.length ? a[0].aaSorting : i : ("number" == typeof t ? t = [
                [t, e]
            ] : n.isArray(t[0]) || (t = Array.prototype.slice.call(arguments)), this.iterator("table", function(e) {
                e.aaSorting = t.slice()
            }))
        }), Ve("order.listener()", function(t, e, n) {
            return this.iterator("table", function(i) {
                Ye(i, t, e, n)
            })
        }), Ve(["columns().order()", "column().order()"], function(t) {
            var e = this;
            return this.iterator("table", function(i, a) {
                var r = [];
                n.each(e[a], function(e, n) {
                    r.push([n, t])
                }), i.aaSorting = r
            })
        }), Ve("search()", function(t, e, a, r) {
            var s = this.context;
            return t === i ? 0 !== s.length ? s[0].oPreviousSearch.sSearch : i : this.iterator("table", function(i) {
                i.oFeatures.bFilter && J(i, n.extend({}, i.oPreviousSearch, {
                    sSearch: t + "",
                    bRegex: null === e ? !1 : e,
                    bSmart: null === a ? !0 : a,
                    bCaseInsensitive: null === r ? !0 : r
                }), 1)
            })
        }), Ve(["columns().search()", "column().search()"], function(t, e, a, r) {
            return this.iterator("column", function(s, o) {
                var l = s.aoPreSearchCols;
                return t === i ? l[o].sSearch : void(s.oFeatures.bFilter && (n.extend(l[o], {
                    sSearch: t + "",
                    bRegex: null === e ? !1 : e,
                    bSmart: null === a ? !0 : a,
                    bCaseInsensitive: null === r ? !0 : r
                }), J(s, s.oPreviousSearch, 1)))
            })
        }), Re.versionCheck = Re.fnVersionCheck = function(t) {
            for (var e, n, i = Re.version.split("."), a = t.split("."), r = 0, s = a.length; s > r; r++)
                if (e = parseInt(i[r], 10) || 0, n = parseInt(a[r], 10) || 0, e !== n) return e > n;
            return !0
        }, Re.isDataTable = Re.fnIsDataTable = function(t) {
            var e = n(t).get(0),
                i = !1;
            return n.each(Re.settings, function(t, n) {
                (n.nTable === e || n.nScrollHead === e || n.nScrollFoot === e) && (i = !0)
            }), i
        }, Re.tables = Re.fnTables = function(t) {
            return jQuery.map(Re.settings, function(e) {
                return !t || t && n(e.nTable).is(":visible") ? e.nTable : void 0
            })
        }, Ve("$()", function(t, e) {
            var i = this.rows(e).nodes(),
                a = n(i);
            return n([].concat(a.filter(t).toArray(), a.find(t).toArray()))
        }), n.each(["on", "one", "off"], function(t, e) {
            Ve(e + "()", function() {
                var t = Array.prototype.slice.call(arguments); - 1 === t[0].indexOf(".dt") && (t[0] += ".dt");
                var i = n(this.tables().nodes());
                return i[e].apply(i, t), this
            })
        }), Ve("clear()", function() {
            return this.iterator("table", function(t) {
                C(t)
            })
        }), Ve("settings()", function() {
            return new Ue(this.context, this.context)
        }), Ve("data()", function() {
            return this.iterator("table", function(t) {
                return rn(t.aoData, "_aData")
            }).flatten()
        }), Ve("destroy()", function(e) {
            return e = e || !1, this.iterator("table", function(i) {
                var a, r = i.nTableWrapper.parentNode,
                    s = i.oClasses,
                    o = i.nTable,
                    l = i.nTBody,
                    d = i.nTHead,
                    u = i.nTFoot,
                    c = n(o),
                    h = n(l),
                    p = n(i.nTableWrapper),
                    f = n.map(i.aoData, function(t) {
                        return t.nTr
                    });
                i.bDestroying = !0, We(i, "aoDestroyCallback", "destroy", [i]), e || new Ue(i).columns().visible(!0), p.unbind(".DT").find(":not(tbody *)").unbind(".DT"), n(t).unbind(".DT-" + i.sInstance), o != d.parentNode && (c.children("thead").remove(), c.append(d)), u && o != u.parentNode && (c.children("tfoot").remove(), c.append(u)), c.remove(), p.remove(), i.aaSorting = [], i.aaSortingFixed = [], Se(i), n(f).removeClass(i.asStripeClasses.join(" ")), n("th, td", d).removeClass(s.sSortable + " " + s.sSortableAsc + " " + s.sSortableDesc + " " + s.sSortableNone), i.bJUI && (n("th span." + s.sSortIcon + ", td span." + s.sSortIcon, d).remove(), n("th, td", d).each(function() {
                    var t = n("div." + s.sSortJUIWrapper, this);
                    n(this).append(t.contents()), t.remove()
                })), e || r.insertBefore(o, i.nTableReinsertBefore), h.children().detach(), h.append(f), c.css("width", i.sDestroyWidth).removeClass(s.sTable), a = i.asDestroyStripes.length, a && h.children().each(function(t) {
                    n(this).addClass(i.asDestroyStripes[t % a])
                });
                var m = n.inArray(i, Re.settings); - 1 !== m && Re.settings.splice(m, 1)
            })
        }), Re.version = "1.10.0-dev", Re.settings = [], Re.models = {}, Re.models.oSearch = {
            bCaseInsensitive: !0,
            sSearch: "",
            bRegex: !1,
            bSmart: !0
        }, Re.models.oRow = {
            nTr: null,
            anCells: null,
            _aData: [],
            _aSortData: null,
            _aFilterData: null,
            _sFilterRow: null,
            _sRowStripe: "",
            src: null
        }, Re.models.oColumn = {
            aDataSort: null,
            asSorting: null,
            bSearchable: null,
            bSortable: null,
            bVisible: null,
            _sManualType: null,
            _bAttrSrc: !1,
            fnCreatedCell: null,
            fnGetData: null,
            fnSetData: null,
            mData: null,
            mRender: null,
            nTh: null,
            nTf: null,
            sClass: null,
            sContentPadding: null,
            sDefaultContent: null,
            sName: null,
            sSortDataType: "std",
            sSortingClass: null,
            sSortingClassJUI: null,
            sTitle: null,
            sType: null,
            sWidth: null,
            sWidthOrig: null
        }, Re.defaults = {
            aaData: null,
            aaSorting: [
                [0, "asc"]
            ],
            aaSortingFixed: [],
            ajax: null,
            aLengthMenu: [10, 25, 50, 100],
            aoColumns: null,
            aoColumnDefs: null,
            aoSearchCols: [],
            asStripeClasses: null,
            bAutoWidth: !0,
            bDeferRender: !1,
            bDestroy: !1,
            bFilter: !0,
            bInfo: !0,
            bJQueryUI: !1,
            bLengthChange: !0,
            bPaginate: !0,
            bProcessing: !1,
            bRetrieve: !1,
            bScrollCollapse: !1,
            bServerSide: !1,
            bSort: !0,
            bSortMulti: !0,
            bSortCellsTop: !1,
            bSortClasses: !0,
            bStateSave: !1,
            fnCreatedRow: null,
            fnDrawCallback: null,
            fnFooterCallback: null,
            fnFormatNumber: function(t) {
                return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sInfoThousands)
            },
            fnHeaderCallback: null,
            fnInfoCallback: null,
            fnInitComplete: null,
            fnPreDrawCallback: null,
            fnRowCallback: null,
            fnServerData: null,
            fnServerParams: null,
            fnStateLoadCallback: function(e) {
                try {
                    return JSON.parse(localStorage.getItem("DataTables_" + e.sInstance + "_" + t.location.pathname))
                } catch (n) {}
            },
            fnStateLoadParams: null,
            fnStateLoaded: null,
            fnStateSaveCallback: function(e, n) {
                try {
                    localStorage.setItem("DataTables_" + e.sInstance + "_" + t.location.pathname, JSON.stringify(n))
                } catch (i) {}
            },
            fnStateSaveParams: null,
            iStateDuration: 7200,
            iDeferLoading: null,
            iDisplayLength: 10,
            iDisplayStart: 0,
            iTabIndex: 0,
            oClasses: {},
            oLanguage: {
                oAria: {
                    sSortAscending: ": activate to sort column ascending",
                    sSortDescending: ": activate to sort column descending"
                },
                oPaginate: {
                    sFirst: "First",
                    sLast: "Last",
                    sNext: "Next",
                    sPrevious: "Previous"
                },
                sEmptyTable: "No data available in table",
                sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
                sInfoEmpty: "Showing 0 to 0 of 0 entries",
                sInfoFiltered: "(filtered from _MAX_ total entries)",
                sInfoPostFix: "",
                sInfoThousands: ",",
                sLengthMenu: "Show _MENU_ entries",
                sLoadingRecords: "Loading...",
                sProcessing: "Processing...",
                sSearch: "Search:",
                sUrl: "",
                sZeroRecords: "No matching records found"
            },
            oSearch: n.extend({}, Re.models.oSearch),
            sAjaxDataProp: "data",
            sAjaxSource: null,
            sDom: "lfrtip",
            sPaginationType: "simple_numbers",
            sScrollX: "",
            sScrollXInner: "",
            sScrollY: "",
            sServerMethod: "GET",
            renderer: null
        }, a(Re.defaults), Re.defaults.column = {
            aDataSort: null,
            iDataSort: -1,
            asSorting: ["asc", "desc"],
            bSearchable: !0,
            bSortable: !0,
            bVisible: !0,
            fnCreatedCell: null,
            mData: null,
            mRender: null,
            sCellType: "td",
            sClass: "",
            sContentPadding: "",
            sDefaultContent: null,
            sName: "",
            sSortDataType: "std",
            sTitle: null,
            sType: null,
            sWidth: null
        }, a(Re.defaults.column), Re.models.oSettings = {
            oFeatures: {
                bAutoWidth: null,
                bDeferRender: null,
                bFilter: null,
                bInfo: null,
                bLengthChange: null,
                bPaginate: null,
                bProcessing: null,
                bServerSide: null,
                bSort: null,
                bSortMulti: null,
                bSortClasses: null,
                bStateSave: null
            },
            oScroll: {
                bCollapse: null,
                iBarWidth: 0,
                sX: null,
                sXInner: null,
                sY: null
            },
            oLanguage: {
                fnInfoCallback: null
            },
            oBrowser: {
                bScrollOversize: !1,
                bScrollbarLeft: !1
            },
            ajax: null,
            aanFeatures: [],
            aoData: [],
            aiDisplay: [],
            aiDisplayMaster: [],
            aoColumns: [],
            aoHeader: [],
            aoFooter: [],
            oPreviousSearch: {},
            aoPreSearchCols: [],
            aaSorting: null,
            aaSortingFixed: [],
            asStripeClasses: null,
            asDestroyStripes: [],
            sDestroyWidth: 0,
            aoRowCallback: [],
            aoHeaderCallback: [],
            aoFooterCallback: [],
            aoDrawCallback: [],
            aoRowCreatedCallback: [],
            aoPreDrawCallback: [],
            aoInitComplete: [],
            aoStateSaveParams: [],
            aoStateLoadParams: [],
            aoStateLoaded: [],
            sTableId: "",
            nTable: null,
            nTHead: null,
            nTFoot: null,
            nTBody: null,
            nTableWrapper: null,
            bDeferLoading: !1,
            bInitialised: !1,
            aoOpenRows: [],
            sDom: null,
            sPaginationType: "two_button",
            iStateDuration: 0,
            aoStateSave: [],
            aoStateLoad: [],
            oLoadedState: null,
            sAjaxSource: null,
            sAjaxDataProp: null,
            bAjaxDataGet: !0,
            jqXHR: null,
            json: i,
            fnServerData: null,
            aoServerParams: [],
            sServerMethod: null,
            fnFormatNumber: null,
            aLengthMenu: null,
            iDraw: 0,
            bDrawing: !1,
            iDrawError: -1,
            _iDisplayLength: 10,
            _iDisplayStart: 0,
            _iRecordsTotal: 0,
            _iRecordsDisplay: 0,
            bJUI: null,
            oClasses: {},
            bFiltered: !1,
            bSorted: !1,
            bSortCellsTop: null,
            oInit: null,
            aoDestroyCallback: [],
            fnRecordsTotal: function() {
                return "ssp" == Be(this) ? 1 * this._iRecordsTotal : this.aiDisplayMaster.length
            },
            fnRecordsDisplay: function() {
                return "ssp" == Be(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length
            },
            fnDisplayEnd: function() {
                var t = this._iDisplayLength,
                    e = this._iDisplayStart,
                    n = e + t,
                    i = this.aiDisplay.length,
                    a = this.oFeatures,
                    r = a.bPaginate;
                return a.bServerSide ? r === !1 || -1 === t ? e + i : Math.min(e + t, this._iRecordsDisplay) : !r || n > i || -1 === t ? i : n
            },
            oInstance: null,
            sInstance: null,
            iTabIndex: 0,
            nScrollHead: null,
            nScrollFoot: null,
            aLastSort: [],
            oPlugins: {}
        }, Re.ext = qe = {
            classes: {},
            errMode: "alert",
            feature: [],
            search: [],
            internal: {},
            legacy: {
                ajax: !1
            },
            pager: {},
            renderer: {
                pageButton: {},
                header: {}
            },
            order: {},
            type: {
                detect: [],
                search: {},
                order: {}
            },
            _unique: 0,
            fnVersionCheck: Re.fnVersionCheck,
            iApiIndex: 0,
            oJUIClasses: {},
            sVersion: Re.version
        }, n.extend(qe, {
            afnFiltering: qe.filter,
            aTypes: qe.type.detect,
            ofnSearch: qe.type.search,
            oSort: qe.type.order,
            afnSortData: qe.order,
            aoFeatures: qe.feature,
            oApi: qe.internal,
            oStdClasses: qe.classes,
            oPagination: qe.pager
        }), n.extend(Re.ext.classes, {
            sTable: "dataTable",
            sNoFooter: "no-footer",
            sPageButton: "paginate_button",
            sPageButtonActive: "current",
            sPageButtonDisabled: "disabled",
            sStripeOdd: "odd",
            sStripeEven: "even",
            sRowEmpty: "dataTables_empty",
            sWrapper: "dataTables_wrapper",
            sFilter: "dataTables_filter",
            sInfo: "dataTables_info",
            sPaging: "dataTables_paginate paging_",
            sLength: "dataTables_length",
            sProcessing: "dataTables_processing",
            sSortAsc: "sorting_asc",
            sSortDesc: "sorting_desc",
            sSortable: "sorting",
            sSortableAsc: "sorting_asc_disabled",
            sSortableDesc: "sorting_desc_disabled",
            sSortableNone: "sorting_disabled",
            sSortColumn: "sorting_",
            sFilterInput: "",
            sLengthSelect: "",
            sScrollWrapper: "dataTables_scroll",
            sScrollHead: "dataTables_scrollHead",
            sScrollHeadInner: "dataTables_scrollHeadInner",
            sScrollBody: "dataTables_scrollBody",
            sScrollFoot: "dataTables_scrollFoot",
            sScrollFootInner: "dataTables_scrollFootInner",
            sHeaderTH: "",
            sFooterTH: "",
            sSortJUIAsc: "",
            sSortJUIDesc: "",
            sSortJUI: "",
            sSortJUIAscAllowed: "",
            sSortJUIDescAllowed: "",
            sSortJUIWrapper: "",
            sSortIcon: "",
            sJUIHeader: "",
            sJUIFooter: ""
        }),
        function() {
            var t = "";
            t = "";
            var e = t + "ui-state-default",
                i = t + "css_right ui-icon ui-icon-",
                a = t + "fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix";
            n.extend(Re.ext.oJUIClasses, Re.ext.classes, {
                sPageButton: "fg-button ui-button " + e,
                sPageButtonActive: "ui-state-disabled",
                sPageButtonDisabled: "ui-state-disabled",
                sPaging: "dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",
                sSortAsc: e + " sorting_asc",
                sSortDesc: e + " sorting_desc",
                sSortable: e + " sorting",
                sSortableAsc: e + " sorting_asc_disabled",
                sSortableDesc: e + " sorting_desc_disabled",
                sSortableNone: e + " sorting_disabled",
                sSortJUIAsc: i + "triangle-1-n",
                sSortJUIDesc: i + "triangle-1-s",
                sSortJUI: i + "carat-2-n-s",
                sSortJUIAscAllowed: i + "carat-1-n",
                sSortJUIDescAllowed: i + "carat-1-s",
                sSortJUIWrapper: "DataTables_sort_wrapper",
                sSortIcon: "DataTables_sort_icon",
                sScrollHead: "dataTables_scrollHead " + e,
                sScrollFoot: "dataTables_scrollFoot " + e,
                sHeaderTH: e,
                sFooterTH: e,
                sJUIHeader: a + " ui-corner-tl ui-corner-tr",
                sJUIFooter: a + " ui-corner-bl ui-corner-br"
            })
        }();
        var En = Re.ext.pager;
        n.extend(En, {
            simple: function() {
                return ["previous", "next"]
            },
            full: function() {
                return ["first", "previous", "next", "last"]
            },
            simple_numbers: function(t, e) {
                return ["previous", ze(t, e), "next"]
            },
            full_numbers: function(t, e) {
                return ["first", "previous", ze(t, e), "next", "last"]
            },
            _numbers: ze,
            numbers_length: 7
        }), n.extend(!0, Re.ext.renderer, {
            pageButton: {
                _: function(t, e, i, a, r, s) {
                    var o, l, d = t.oClasses,
                        u = t.oLanguage.oPaginate,
                        c = function(e, a) {
                            var h, p, f, m, _ = function(e) {
                                    ue(t, e.data.action, !0)
                                };
                            for (h = 0, p = a.length; p > h; h++)
                                if (m = a[h], n.isArray(m)) {
                                    var g = n("<" + (m.DT_el || "div") + "/>").appendTo(e);
                                    c(g, m)
                                } else {
                                    switch (o = "", l = "", m) {
                                        case "ellipsis":
                                            e.append("<span>&hellip;</span>");
                                            break;
                                        case "first":
                                            o = u.sFirst, l = m + (r > 0 ? "" : " " + d.sPageButtonDisabled);
                                            break;
                                        case "previous":
                                            o = u.sPrevious, l = m + (r > 0 ? "" : " " + d.sPageButtonDisabled);
                                            break;
                                        case "next":
                                            o = u.sNext, l = m + (s - 1 > r ? "" : " " + d.sPageButtonDisabled);
                                            break;
                                        case "last":
                                            o = u.sLast, l = m + (s - 1 > r ? "" : " " + d.sPageButtonDisabled);
                                            break;
                                        default:
                                            o = m + 1, l = r === m ? d.sPageButtonActive : ""
                                    }
                                    o && (f = n("<a>", {
                                        "class": d.sPageButton + " " + l,
                                        "aria-controls": t.sTableId,
                                        tabindex: t.iTabIndex,
                                        id: 0 === i && "string" == typeof m ? t.sTableId + "_" + m : null
                                    }).html(o).appendTo(e), He(f, {
                                        action: m
                                    }, _))
                                }
                        };
                    c(n(e).empty(), a)
                }
            }
        });
        var jn = function(t, e, n) {
            return t && "-" !== t ? (t.replace && (e && (t = t.replace(e, "")), n && (t = t.replace(n, ""))), 1 * t) : -1 / 0
        };
        n.extend(Re.ext.type.order, {
            "date-pre": function(t) {
                return Date.parse(t) || 0
            },
            "numeric-pre": function(t) {
                return jn(t)
            },
            "numeric-fmt-pre": function(t) {
                return jn(t, Ke)
            },
            "html-numeric-pre": function(t) {
                return jn(t, Xe)
            },
            "html-numeric-fmt-pre": function(t) {
                return jn(t, Xe, Ke)
            },
            "html-pre": function(t) {
                return t.replace ? t.replace(/<.*?>/g, "").toLowerCase() : t + ""
            },
            "string-pre": function(t) {
                return "string" == typeof t ? t.toLowerCase() : t && t.toString ? t.toString() : ""
            },
            "string-asc": function(t, e) {
                return e > t ? -1 : t > e ? 1 : 0
            },
            "string-desc": function(t, e) {
                return e > t ? 1 : t > e ? -1 : 0
            }
        }), n.extend(Re.ext.type.detect, [
            function(t) {
                return en(t) ? "numeric" : null
            },
            function(t) {
                if (t && !Qe.test(t)) return null;
                var e = Date.parse(t);
                return null !== e && !isNaN(e) || Ze(t) ? "date" : null
            },
            function(t) {
                return en(t, !0) ? "numeric-fmt" : null
            },
            function(t) {
                return an(t) ? "html-numeric" : null
            },
            function(t) {
                return an(t, !0) ? "html-numeric-fmt" : null
            },
            function(t) {
                return Ze(t) || "string" == typeof t && -1 !== t.indexOf("<") ? "html" : null
            }
        ]), n.extend(Re.ext.type.search, {
            html: function(t) {
                return Ze(t) ? "" : "string" == typeof t ? t.replace(Je, " ").replace(Xe, "") : ""
            },
            string: function(t) {
                return Ze(t) ? "" : "string" == typeof t ? t.replace(Je, " ") : t
            }
        }), n.extend(!0, Re.ext.renderer, {
            header: {
                _: function(t, e, i, a, r) {
                    n(t.nTable).on("order.dt", function(t, n, s, o) {
                        e.removeClass(i.sSortingClass + " " + r.sSortAsc + " " + r.sSortDesc).addClass("asc" == o[a] ? r.sSortAsc : "desc" == o[a] ? r.sSortDesc : i.sSortingClass)
                    })
                },
                jqueryui: function(t, e, i, a, r) {
                    n("<div/>").addClass(r.sSortJUIWrapper).append(e.contents()).append(n("<span/>").addClass(r.sSortIcon + " " + i.sSortingClassJUI)).appendTo(e), n(t.nTable).on("order.dt", function(t, n, s, o) {
                        e.removeClass(r.sSortAsc + " " + r.sSortDesc).addClass("asc" == o[a] ? r.sSortAsc : "desc" == o[a] ? r.sSortDesc : i.sSortingClass), e.find("span").removeClass(r.sSortJUIAsc + " " + r.sSortJUIDesc + " " + r.sSortJUI + " " + r.sSortJUIAscAllowed + " " + r.sSortJUIDescAllowed).addClass("asc" == o[a] ? r.sSortJUIAsc : "desc" == o[a] ? r.sSortJUIDesc : i.sSortingClassJUI)
                    })
                }
            }
        }), n.fn.dataTable = Re, n.fn.dataTableSettings = Re.settings, n.fn.dataTableExt = Re.ext, n.fn.DataTable = function(t) {
            return n(this).dataTable(t).api()
        }, n.each(Re, function(t, e) {
            n.fn.DataTable[t] = e
        })
    })
}(window, document, jQuery), $.extend(!0, $.fn.dataTable.defaults, {
    sDom: "<'row'<'col-sm-6'l><'col-sm-6'f>r>t<'row'<'col-sm-6'i><'col-sm-6'p>>",
    oLanguage: {
        sLengthMenu: "_MENU_ records per page"
    }
}), $.extend($.fn.dataTableExt.oStdClasses, {
    sWrapper: "dataTables_wrapper form-inline",
    sFilterInput: "form-control input-sm",
    sLengthSelect: "form-control input-sm"
}), $.fn.dataTable.Api ? ($.fn.dataTable.defaults.renderer = "bootstrap", $.fn.dataTable.ext.renderer.pageButton.bootstrap = function(t, e, n, i, a, r) {
    var s, o, l = new $.fn.dataTable.Api(t),
        d = t.oClasses,
        u = t.oLanguage.oPaginate,
        c = function(e, i) {
            var h, p, f, m, _ = function(t) {
                    t.preventDefault(), "ellipsis" !== t.data.action && l.page(t.data.action).draw(!1)
                };
            for (h = 0, p = i.length; p > h; h++)
                if (m = i[h], $.isArray(m)) c(e, m);
                else {
                    switch (s = "", o = "", m) {
                        case "ellipsis":
                            s = "&hellip;", o = "disabled";
                            break;
                        case "first":
                            s = u.sFirst, o = m + (a > 0 ? "" : " disabled");
                            break;
                        case "previous":
                            s = u.sPrevious, o = m + (a > 0 ? "" : " disabled");
                            break;
                        case "next":
                            s = u.sNext, o = m + (r - 1 > a ? "" : " disabled");
                            break;
                        case "last":
                            s = u.sLast, o = m + (r - 1 > a ? "" : " disabled");
                            break;
                        default:
                            s = m + 1, o = a === m ? "active" : ""
                    }
                    s && (f = $("<li>", {
                        "class": d.sPageButton + " " + o,
                        "aria-controls": t.sTableId,
                        tabindex: t.iTabIndex,
                        id: 0 === n && "string" == typeof m ? t.sTableId + "_" + m : null
                    }).append($("<a>", {
                        href: "#"
                    }).html(s)).appendTo(e), t.oApi._fnBindAction(f, {
                        action: m
                    }, _))
                }
        };
    c($(e).empty().html('<ul class="pagination"/>').children("ul"), i)
}) : ($.fn.dataTable.defaults.sPaginationType = "bootstrap", $.fn.dataTableExt.oApi.fnPagingInfo = function(t) {
    return {
        iStart: t._iDisplayStart,
        iEnd: t.fnDisplayEnd(),
        iLength: t._iDisplayLength,
        iTotal: t.fnRecordsTotal(),
        iFilteredTotal: t.fnRecordsDisplay(),
        iPage: -1 === t._iDisplayLength ? 0 : Math.ceil(t._iDisplayStart / t._iDisplayLength),
        iTotalPages: -1 === t._iDisplayLength ? 0 : Math.ceil(t.fnRecordsDisplay() / t._iDisplayLength)
    }
}, $.extend($.fn.dataTableExt.oPagination, {
    bootstrap: {
        fnInit: function(t, e, n) {
            var i = t.oLanguage.oPaginate,
                a = function(e) {
                    e.preventDefault(), t.oApi._fnPageChange(t, e.data.action) && n(t)
                };
            $(e).append('<ul class="pagination"><li class="prev disabled"><a href="#">&larr; ' + i.sPrevious + '</a></li><li class="next disabled"><a href="#">' + i.sNext + " &rarr; </a></li></ul>");
            var r = $("a", e);
            $(r[0]).bind("click.DT", {
                action: "previous"
            }, a), $(r[1]).bind("click.DT", {
                action: "next"
            }, a)
        },
        fnUpdate: function(t, e) {
            var n, i, a, r, s, o, l = 5,
                d = t.oInstance.fnPagingInfo(),
                u = t.aanFeatures.p,
                c = Math.floor(l / 2);
            for (d.iTotalPages < l ? (s = 1, o = d.iTotalPages) : d.iPage <= c ? (s = 1, o = l) : d.iPage >= d.iTotalPages - c ? (s = d.iTotalPages - l + 1, o = d.iTotalPages) : (s = d.iPage - c + 1, o = s + l - 1), n = 0, i = u.length; i > n; n++) {
                for ($("li:gt(0)", u[n]).filter(":not(:last)").remove(), a = s; o >= a; a++) r = a == d.iPage + 1 ? 'class="active"' : "", $("<li " + r + '><a href="#">' + a + "</a></li>").insertBefore($("li:last", u[n])[0]).bind("click", function(n) {
                    n.preventDefault(), t._iDisplayStart = (parseInt($("a", this).text(), 10) - 1) * d.iLength, e(t)
                });
                0 === d.iPage ? $("li:first", u[n]).addClass("disabled") : $("li:first", u[n]).removeClass("disabled"), d.iPage === d.iTotalPages - 1 || 0 === d.iTotalPages ? $("li:last", u[n]).addClass("disabled") : $("li:last", u[n]).removeClass("disabled")
            }
        }
    }
})), $.fn.DataTable.TableTools && ($.extend(!0, $.fn.DataTable.TableTools.classes, {
    container: "DTTT btn-group",
    buttons: {
        normal: "btn btn-default",
        disabled: "disabled"
    },
    collection: {
        container: "DTTT_dropdown dropdown-menu",
        buttons: {
            normal: "",
            disabled: "disabled"
        }
    },
    print: {
        info: "DTTT_print_info modal"
    },
    select: {
        row: "active"
    }
}), $.extend(!0, $.fn.DataTable.TableTools.DEFAULTS.oTags, {
    collection: {
        container: "ul",
        button: "li",
        liner: "a"
    }
})), ! function(t, e, n) {
    function i(e, n) {
        this.element = e, this.settings = t.extend({}, r, n), this._defaults = r, this._name = a, this.init()
    }
    var a = "metisMenu",
        r = {
            toggle: !0
        };
    i.prototype = {
        init: function() {
            var e = t(this.element),
                n = this.settings.toggle;
            this.isIE() <= 9 ? (e.find("li.active").has("ul").children("ul").collapse("show"), e.find("li").not(".active").has("ul").children("ul").collapse("hide")) : (e.find("li.active").has("ul").children("ul").addClass("collapse in"), e.find("li").not(".active").has("ul").children("ul").addClass("collapse")), e.find("li").has("ul").children("a").on("click", function(e) {
                e.preventDefault(), t(this).parent("li").toggleClass("active").children("ul").collapse("toggle"), n && t(this).parent("li").siblings().removeClass("active").children("ul.in").collapse("hide")
            })
        },
        isIE: function() {
            for (var t, e = 3, i = n.createElement("div"), a = i.getElementsByTagName("i"); i.innerHTML = "<!--[if gt IE " + ++e + "]><i></i><![endif]-->", a[0];) return e > 4 ? e : t
        }
    }, t.fn[a] = function(e) {
        return this.each(function() {
            t.data(this, "plugin_" + a) || t.data(this, "plugin_" + a, new i(this, e))
        })
    }
}(jQuery, window, document), function() {
    var t, e, n, i, a = [].slice,
        r = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        }, s = {}.hasOwnProperty,
        o = function(t, e) {
            function n() {
                this.constructor = t
            }
            for (var i in e) s.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, l = [].indexOf || function(t) {
            for (var e = 0, n = this.length; n > e; e++)
                if (e in this && this[e] === t) return e;
            return -1
        };
    e = window.Morris = {}, t = jQuery, e.EventEmitter = function() {
        function t() {}
        return t.prototype.on = function(t, e) {
            return null == this.handlers && (this.handlers = {}), null == this.handlers[t] && (this.handlers[t] = []), this.handlers[t].push(e), this
        }, t.prototype.fire = function() {
            var t, e, n, i, r, s, o;
            if (n = arguments[0], t = 2 <= arguments.length ? a.call(arguments, 1) : [], null != this.handlers && null != this.handlers[n]) {
                for (s = this.handlers[n], o = [], i = 0, r = s.length; r > i; i++) e = s[i], o.push(e.apply(null, t));
                return o
            }
        }, t
    }(), e.commas = function(t) {
        var e, n, i, a;
        return null != t ? (i = 0 > t ? "-" : "", e = Math.abs(t), n = Math.floor(e).toFixed(0), i += n.replace(/(?=(?:\d{3})+$)(?!^)/g, ","), a = e.toString(), a.length > n.length && (i += a.slice(n.length)), i) : "-"
    }, e.pad2 = function(t) {
        return (10 > t ? "0" : "") + t
    }, e.Grid = function(n) {
        function i(e) {
            this.resizeHandler = r(this.resizeHandler, this);
            var n = this;
            if (this.el = t("string" == typeof e.element ? document.getElementById(e.element) : e.element), null == this.el || 0 === this.el.length) throw new Error("Graph container element not found");
            "static" === this.el.css("position") && this.el.css("position", "relative"), this.options = t.extend({}, this.gridDefaults, this.defaults || {}, e), "string" == typeof this.options.units && (this.options.postUnits = e.units), this.raphael = new Raphael(this.el[0]), this.elementWidth = null, this.elementHeight = null, this.dirty = !1, this.selectFrom = null, this.init && this.init(), this.setData(this.options.data), this.el.bind("mousemove", function(t) {
                var e, i, a, r, s;
                return i = n.el.offset(), s = t.pageX - i.left, n.selectFrom ? (e = n.data[n.hitTest(Math.min(s, n.selectFrom))]._x, a = n.data[n.hitTest(Math.max(s, n.selectFrom))]._x, r = a - e, n.selectionRect.attr({
                    x: e,
                    width: r
                })) : n.fire("hovermove", s, t.pageY - i.top)
            }), this.el.bind("mouseleave", function() {
                return n.selectFrom && (n.selectionRect.hide(), n.selectFrom = null), n.fire("hoverout")
            }), this.el.bind("touchstart touchmove touchend", function(t) {
                var e, i;
                return i = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0], e = n.el.offset(), n.fire("hovermove", i.pageX - e.left, i.pageY - e.top)
            }), this.el.bind("click", function(t) {
                var e;
                return e = n.el.offset(), n.fire("gridclick", t.pageX - e.left, t.pageY - e.top)
            }), this.options.rangeSelect && (this.selectionRect = this.raphael.rect(0, 0, 0, this.el.innerHeight()).attr({
                fill: this.options.rangeSelectColor,
                stroke: !1
            }).toBack().hide(), this.el.bind("mousedown", function(t) {
                var e;
                return e = n.el.offset(), n.startRange(t.pageX - e.left)
            }), this.el.bind("mouseup", function(t) {
                var e;
                return e = n.el.offset(), n.endRange(t.pageX - e.left), n.fire("hovermove", t.pageX - e.left, t.pageY - e.top)
            })), this.options.resize && t(window).bind("resize", function() {
                return null != n.timeoutId && window.clearTimeout(n.timeoutId), n.timeoutId = window.setTimeout(n.resizeHandler, 100)
            }), this.el.css("-webkit-tap-highlight-color", "rgba(0,0,0,0)"), this.postInit && this.postInit()
        }
        return o(i, n), i.prototype.gridDefaults = {
            dateFormat: null,
            axes: !0,
            grid: !0,
            gridLineColor: "#aaa",
            gridStrokeWidth: .5,
            gridTextColor: "#888",
            gridTextSize: 12,
            gridTextFamily: "sans-serif",
            gridTextWeight: "normal",
            hideHover: !1,
            yLabelFormat: null,
            xLabelAngle: 0,
            numLines: 5,
            padding: 25,
            parseTime: !0,
            postUnits: "",
            preUnits: "",
            ymax: "auto",
            ymin: "auto 0",
            goals: [],
            goalStrokeWidth: 1,
            goalLineColors: ["#666633", "#999966", "#cc6666", "#663333"],
            events: [],
            eventStrokeWidth: 1,
            eventLineColors: ["#005a04", "#ccffbb", "#3a5f0b", "#005502"],
            rangeSelect: null,
            rangeSelectColor: "#eef",
            resize: !1
        }, i.prototype.setData = function(t, n) {
            var i, a, r, s, o, l, d, u, c, h, p, f, m, _, g;
            return null == n && (n = !0), this.options.data = t, null == t || 0 === t.length ? (this.data = [], this.raphael.clear(), void(null != this.hover && this.hover.hide())) : (f = this.cumulative ? 0 : null, m = this.cumulative ? 0 : null, this.options.goals.length > 0 && (o = Math.min.apply(Math, this.options.goals), s = Math.max.apply(Math, this.options.goals), m = null != m ? Math.min(m, o) : o, f = null != f ? Math.max(f, s) : s), this.data = function() {
                var n, i, s;
                for (s = [], r = n = 0, i = t.length; i > n; r = ++n) d = t[r], l = {
                    src: d
                }, l.label = d[this.options.xkey], this.options.parseTime ? (l.x = e.parseDate(l.label), this.options.dateFormat ? l.label = this.options.dateFormat(l.x) : "number" == typeof l.label && (l.label = new Date(l.label).toString())) : (l.x = r, this.options.xLabelFormat && (l.label = this.options.xLabelFormat(l))), c = 0, l.y = function() {
                    var t, e, n, i;
                    for (n = this.options.ykeys, i = [], a = t = 0, e = n.length; e > t; a = ++t) p = n[a], _ = d[p], "string" == typeof _ && (_ = parseFloat(_)), null != _ && "number" != typeof _ && (_ = null), null != _ && (this.cumulative ? c += _ : null != f ? (f = Math.max(_, f), m = Math.min(_, m)) : f = m = _), this.cumulative && null != c && (f = Math.max(c, f), m = Math.min(c, m)), i.push(_);
                    return i
                }.call(this), s.push(l);
                return s
            }.call(this), this.options.parseTime && (this.data = this.data.sort(function(t, e) {
                return (t.x > e.x) - (e.x > t.x)
            })), this.xmin = this.data[0].x, this.xmax = this.data[this.data.length - 1].x, this.events = [], this.options.events.length > 0 && (this.events = this.options.parseTime ? function() {
                var t, n, a, r;
                for (a = this.options.events, r = [], t = 0, n = a.length; n > t; t++) i = a[t], r.push(e.parseDate(i));
                return r
            }.call(this) : this.options.events, this.xmax = Math.max(this.xmax, Math.max.apply(Math, this.events)), this.xmin = Math.min(this.xmin, Math.min.apply(Math, this.events))), this.xmin === this.xmax && (this.xmin -= 1, this.xmax += 1), this.ymin = this.yboundary("min", m), this.ymax = this.yboundary("max", f), this.ymin === this.ymax && (m && (this.ymin -= 1), this.ymax += 1), ((g = this.options.axes) === !0 || "both" === g || "y" === g || this.options.grid === !0) && (this.options.ymax === this.gridDefaults.ymax && this.options.ymin === this.gridDefaults.ymin ? (this.grid = this.autoGridLines(this.ymin, this.ymax, this.options.numLines), this.ymin = Math.min(this.ymin, this.grid[0]), this.ymax = Math.max(this.ymax, this.grid[this.grid.length - 1])) : (u = (this.ymax - this.ymin) / (this.options.numLines - 1), this.grid = function() {
                var t, e, n, i;
                for (i = [], h = t = e = this.ymin, n = this.ymax; u > 0 ? n >= t : t >= n; h = t += u) i.push(h);
                return i
            }.call(this))), this.dirty = !0, n ? this.redraw() : void 0)
        }, i.prototype.yboundary = function(t, e) {
            var n, i;
            return n = this.options["y" + t], "string" == typeof n ? "auto" === n.slice(0, 4) ? n.length > 5 ? (i = parseInt(n.slice(5), 10), null == e ? i : Math[t](e, i)) : null != e ? e : 0 : parseInt(n, 10) : n
        }, i.prototype.autoGridLines = function(t, e, n) {
            var i, a, r, s, o, l, d, u, c;
            return o = e - t, c = Math.floor(Math.log(o) / Math.log(10)), d = Math.pow(10, c), a = Math.floor(t / d) * d, i = Math.ceil(e / d) * d, l = (i - a) / (n - 1), 1 === d && l > 1 && Math.ceil(l) !== l && (l = Math.ceil(l), i = a + l * (n - 1)), 0 > a && i > 0 && (a = Math.floor(t / l) * l, i = Math.ceil(e / l) * l), 1 > l ? (s = Math.floor(Math.log(l) / Math.log(10)), r = function() {
                var t, e;
                for (e = [], u = t = a; l > 0 ? i >= t : t >= i; u = t += l) e.push(parseFloat(u.toFixed(1 - s)));
                return e
            }()) : r = function() {
                var t, e;
                for (e = [], u = t = a; l > 0 ? i >= t : t >= i; u = t += l) e.push(u);
                return e
            }(), r
        }, i.prototype._calc = function() {
            var t, e, n, i, a, r, s, o;
            return a = this.el.width(), n = this.el.height(), (this.elementWidth !== a || this.elementHeight !== n || this.dirty) && (this.elementWidth = a, this.elementHeight = n, this.dirty = !1, this.left = this.options.padding, this.right = this.elementWidth - this.options.padding, this.top = this.options.padding, this.bottom = this.elementHeight - this.options.padding, ((s = this.options.axes) === !0 || "both" === s || "y" === s) && (r = function() {
                var t, n, i, a;
                for (i = this.grid, a = [], t = 0, n = i.length; n > t; t++) e = i[t], a.push(this.measureText(this.yAxisFormat(e)).width);
                return a
            }.call(this), this.left += Math.max.apply(Math, r)), ((o = this.options.axes) === !0 || "both" === o || "x" === o) && (t = function() {
                var t, e, n;
                for (n = [], i = t = 0, e = this.data.length; e >= 0 ? e > t : t > e; i = e >= 0 ? ++t : --t) n.push(this.measureText(this.data[i].text, -this.options.xLabelAngle).height);
                return n
            }.call(this), this.bottom -= Math.max.apply(Math, t)), this.width = Math.max(1, this.right - this.left), this.height = Math.max(1, this.bottom - this.top), this.dx = this.width / (this.xmax - this.xmin), this.dy = this.height / (this.ymax - this.ymin), this.calc) ? this.calc() : void 0
        }, i.prototype.transY = function(t) {
            return this.bottom - (t - this.ymin) * this.dy
        }, i.prototype.transX = function(t) {
            return 1 === this.data.length ? (this.left + this.right) / 2 : this.left + (t - this.xmin) * this.dx
        }, i.prototype.redraw = function() {
            return this.raphael.clear(), this._calc(), this.drawGrid(), this.drawGoals(), this.drawEvents(), this.draw ? this.draw() : void 0
        }, i.prototype.measureText = function(t, e) {
            var n, i;
            return null == e && (e = 0), i = this.raphael.text(100, 100, t).attr("font-size", this.options.gridTextSize).attr("font-family", this.options.gridTextFamily).attr("font-weight", this.options.gridTextWeight).rotate(e), n = i.getBBox(), i.remove(), n
        }, i.prototype.yAxisFormat = function(t) {
            return this.yLabelFormat(t)
        }, i.prototype.yLabelFormat = function(t) {
            return "function" == typeof this.options.yLabelFormat ? this.options.yLabelFormat(t) : "" + this.options.preUnits + e.commas(t) + this.options.postUnits
        }, i.prototype.drawGrid = function() {
            var t, e, n, i, a, r, s, o;
            if (this.options.grid !== !1 || (a = this.options.axes) === !0 || "both" === a || "y" === a) {
                for (r = this.grid, o = [], n = 0, i = r.length; i > n; n++) t = r[n], e = this.transY(t), ((s = this.options.axes) === !0 || "both" === s || "y" === s) && this.drawYAxisLabel(this.left - this.options.padding / 2, e, this.yAxisFormat(t)), o.push(this.options.grid ? this.drawGridLine("M" + this.left + "," + e + "H" + (this.left + this.width)) : void 0);
                return o
            }
        }, i.prototype.drawGoals = function() {
            var t, e, n, i, a, r, s;
            for (r = this.options.goals, s = [], n = i = 0, a = r.length; a > i; n = ++i) e = r[n], t = this.options.goalLineColors[n % this.options.goalLineColors.length], s.push(this.drawGoal(e, t));
            return s
        }, i.prototype.drawEvents = function() {
            var t, e, n, i, a, r, s;
            for (r = this.events, s = [], n = i = 0, a = r.length; a > i; n = ++i) e = r[n], t = this.options.eventLineColors[n % this.options.eventLineColors.length], s.push(this.drawEvent(e, t));
            return s
        }, i.prototype.drawGoal = function(t, e) {
            return this.raphael.path("M" + this.left + "," + this.transY(t) + "H" + this.right).attr("stroke", e).attr("stroke-width", this.options.goalStrokeWidth)
        }, i.prototype.drawEvent = function(t, e) {
            return this.raphael.path("M" + this.transX(t) + "," + this.bottom + "V" + this.top).attr("stroke", e).attr("stroke-width", this.options.eventStrokeWidth)
        }, i.prototype.drawYAxisLabel = function(t, e, n) {
            return this.raphael.text(t, e, n).attr("font-size", this.options.gridTextSize).attr("font-family", this.options.gridTextFamily).attr("font-weight", this.options.gridTextWeight).attr("fill", this.options.gridTextColor).attr("text-anchor", "end")
        }, i.prototype.drawGridLine = function(t) {
            return this.raphael.path(t).attr("stroke", this.options.gridLineColor).attr("stroke-width", this.options.gridStrokeWidth)
        }, i.prototype.startRange = function(t) {
            return this.hover.hide(), this.selectFrom = t, this.selectionRect.attr({
                x: t,
                width: 0
            }).show()
        }, i.prototype.endRange = function(t) {
            var e, n;
            return this.selectFrom ? (n = Math.min(this.selectFrom, t), e = Math.max(this.selectFrom, t), this.options.rangeSelect.call(this.el, {
                start: this.data[this.hitTest(n)].x,
                end: this.data[this.hitTest(e)].x
            }), this.selectFrom = null) : void 0
        }, i.prototype.resizeHandler = function() {
            return this.timeoutId = null, this.raphael.setSize(this.el.width(), this.el.height()), this.redraw()
        }, i
    }(e.EventEmitter), e.parseDate = function(t) {
        var e, n, i, a, r, s, o, l, d, u, c;
        return "number" == typeof t ? t : (n = t.match(/^(\d+) Q(\d)$/), a = t.match(/^(\d+)-(\d+)$/), r = t.match(/^(\d+)-(\d+)-(\d+)$/), o = t.match(/^(\d+) W(\d+)$/), l = t.match(/^(\d+)-(\d+)-(\d+)[ T](\d+):(\d+)(Z|([+-])(\d\d):?(\d\d))?$/), d = t.match(/^(\d+)-(\d+)-(\d+)[ T](\d+):(\d+):(\d+(\.\d+)?)(Z|([+-])(\d\d):?(\d\d))?$/), n ? new Date(parseInt(n[1], 10), 3 * parseInt(n[2], 10) - 1, 1).getTime() : a ? new Date(parseInt(a[1], 10), parseInt(a[2], 10) - 1, 1).getTime() : r ? new Date(parseInt(r[1], 10), parseInt(r[2], 10) - 1, parseInt(r[3], 10)).getTime() : o ? (u = new Date(parseInt(o[1], 10), 0, 1), 4 !== u.getDay() && u.setMonth(0, 1 + (4 - u.getDay() + 7) % 7), u.getTime() + 6048e5 * parseInt(o[2], 10)) : l ? l[6] ? (s = 0, "Z" !== l[6] && (s = 60 * parseInt(l[8], 10) + parseInt(l[9], 10), "+" === l[7] && (s = 0 - s)), Date.UTC(parseInt(l[1], 10), parseInt(l[2], 10) - 1, parseInt(l[3], 10), parseInt(l[4], 10), parseInt(l[5], 10) + s)) : new Date(parseInt(l[1], 10), parseInt(l[2], 10) - 1, parseInt(l[3], 10), parseInt(l[4], 10), parseInt(l[5], 10)).getTime() : d ? (c = parseFloat(d[6]), e = Math.floor(c), i = Math.round(1e3 * (c - e)), d[8] ? (s = 0, "Z" !== d[8] && (s = 60 * parseInt(d[10], 10) + parseInt(d[11], 10), "+" === d[9] && (s = 0 - s)), Date.UTC(parseInt(d[1], 10), parseInt(d[2], 10) - 1, parseInt(d[3], 10), parseInt(d[4], 10), parseInt(d[5], 10) + s, e, i)) : new Date(parseInt(d[1], 10), parseInt(d[2], 10) - 1, parseInt(d[3], 10), parseInt(d[4], 10), parseInt(d[5], 10), e, i).getTime()) : new Date(parseInt(t, 10), 0, 1).getTime())
    }, e.Hover = function() {
        function n(n) {
            null == n && (n = {}), this.options = t.extend({}, e.Hover.defaults, n), this.el = t("<div class='" + this.options["class"] + "'></div>"), this.el.hide(), this.options.parent.append(this.el)
        }
        return n.defaults = {
            "class": "morris-hover morris-default-style"
        }, n.prototype.update = function(t, e, n) {
            return t ? (this.html(t), this.show(), this.moveTo(e, n)) : this.hide()
        }, n.prototype.html = function(t) {
            return this.el.html(t)
        }, n.prototype.moveTo = function(t, e) {
            var n, i, a, r, s, o;
            return s = this.options.parent.innerWidth(), r = this.options.parent.innerHeight(), i = this.el.outerWidth(), n = this.el.outerHeight(), a = Math.min(Math.max(0, t - i / 2), s - i), null != e ? (o = e - n - 10, 0 > o && (o = e + 10, o + n > r && (o = r / 2 - n / 2))) : o = r / 2 - n / 2, this.el.css({
                left: a + "px",
                top: parseInt(o) + "px"
            })
        }, n.prototype.show = function() {
            return this.el.show()
        }, n.prototype.hide = function() {
            return this.el.hide()
        }, n
    }(), e.Line = function(t) {
        function n(t) {
            return this.hilight = r(this.hilight, this), this.onHoverOut = r(this.onHoverOut, this), this.onHoverMove = r(this.onHoverMove, this), this.onGridClick = r(this.onGridClick, this), this instanceof e.Line ? void n.__super__.constructor.call(this, t) : new e.Line(t)
        }
        return o(n, t), n.prototype.init = function() {
            return "always" !== this.options.hideHover ? (this.hover = new e.Hover({
                parent: this.el
            }), this.on("hovermove", this.onHoverMove), this.on("hoverout", this.onHoverOut), this.on("gridclick", this.onGridClick)) : void 0
        }, n.prototype.defaults = {
            lineWidth: 3,
            pointSize: 4,
            lineColors: ["#0b62a4", "#7A92A3", "#4da74d", "#afd8f8", "#edc240", "#cb4b4b", "#9440ed"],
            pointStrokeWidths: [1],
            pointStrokeColors: ["#ffffff"],
            pointFillColors: [],
            smooth: !0,
            xLabels: "auto",
            xLabelFormat: null,
            xLabelMargin: 24,
            hideHover: !1
        }, n.prototype.calc = function() {
            return this.calcPoints(), this.generatePaths()
        }, n.prototype.calcPoints = function() {
            var t, e, n, i, a, r;
            for (a = this.data, r = [], n = 0, i = a.length; i > n; n++) t = a[n], t._x = this.transX(t.x), t._y = function() {
                var n, i, a, r;
                for (a = t.y, r = [], n = 0, i = a.length; i > n; n++) e = a[n], r.push(null != e ? this.transY(e) : e);
                return r
            }.call(this), r.push(t._ymax = Math.min.apply(Math, [this.bottom].concat(function() {
                var n, i, a, r;
                for (a = t._y, r = [], n = 0, i = a.length; i > n; n++) e = a[n], null != e && r.push(e);
                return r
            }())));
            return r
        }, n.prototype.hitTest = function(t) {
            var e, n, i, a, r;
            if (0 === this.data.length) return null;
            for (r = this.data.slice(1), e = i = 0, a = r.length; a > i && (n = r[e], !(t < (n._x + this.data[e]._x) / 2)); e = ++i);
            return e
        }, n.prototype.onGridClick = function(t, e) {
            var n;
            return n = this.hitTest(t), this.fire("click", n, this.data[n].src, t, e)
        }, n.prototype.onHoverMove = function(t) {
            var e;
            return e = this.hitTest(t), this.displayHoverForRow(e)
        }, n.prototype.onHoverOut = function() {
            return this.options.hideHover !== !1 ? this.displayHoverForRow(null) : void 0
        }, n.prototype.displayHoverForRow = function(t) {
            var e;
            return null != t ? ((e = this.hover).update.apply(e, this.hoverContentForRow(t)), this.hilight(t)) : (this.hover.hide(), this.hilight())
        }, n.prototype.hoverContentForRow = function(t) {
            var e, n, i, a, r, s, o;
            for (i = this.data[t], e = "<div class='morris-hover-row-label'>" + i.label + "</div>", o = i.y, n = r = 0, s = o.length; s > r; n = ++r) a = o[n], e += "<div class='morris-hover-point' style='color: " + this.colorFor(i, n, "label") + "'>\n  " + this.options.labels[n] + ":\n  " + this.yLabelFormat(a) + "\n</div>";
            return "function" == typeof this.options.hoverCallback && (e = this.options.hoverCallback(t, this.options, e, i.src)), [e, i._x, i._ymax]
        }, n.prototype.generatePaths = function() {
            var t, n, i, a;
            return this.paths = function() {
                var r, s, o, d;
                for (d = [], n = r = 0, s = this.options.ykeys.length; s >= 0 ? s > r : r > s; n = s >= 0 ? ++r : --r) a = "boolean" == typeof this.options.smooth ? this.options.smooth : (o = this.options.ykeys[n], l.call(this.options.smooth, o) >= 0), t = function() {
                    var t, e, a, r;
                    for (a = this.data, r = [], t = 0, e = a.length; e > t; t++) i = a[t], void 0 !== i._y[n] && r.push({
                        x: i._x,
                        y: i._y[n]
                    });
                    return r
                }.call(this), d.push(t.length > 1 ? e.Line.createPath(t, a, this.bottom) : null);
                return d
            }.call(this)
        }, n.prototype.draw = function() {
            var t;
            return ((t = this.options.axes) === !0 || "both" === t || "x" === t) && this.drawXAxis(), this.drawSeries(), this.options.hideHover === !1 ? this.displayHoverForRow(this.data.length - 1) : void 0
        }, n.prototype.drawXAxis = function() {
            var t, n, i, a, r, s, o, l, d, u, c = this;
            for (o = this.bottom + this.options.padding / 2, r = null, a = null, t = function(t, e) {
                var n, i, s, l, d;
                return n = c.drawXAxisLabel(c.transX(e), o, t), d = n.getBBox(), n.transform("r" + -c.options.xLabelAngle), i = n.getBBox(), n.transform("t0," + i.height / 2 + "..."), 0 !== c.options.xLabelAngle && (l = -.5 * d.width * Math.cos(c.options.xLabelAngle * Math.PI / 180), n.transform("t" + l + ",0...")), i = n.getBBox(), (null == r || r >= i.x + i.width || null != a && a >= i.x) && i.x >= 0 && i.x + i.width < c.el.width() ? (0 !== c.options.xLabelAngle && (s = 1.25 * c.options.gridTextSize / Math.sin(c.options.xLabelAngle * Math.PI / 180), a = i.x - s), r = i.x - c.options.xLabelMargin) : n.remove()
            }, i = this.options.parseTime ? 1 === this.data.length && "auto" === this.options.xLabels ? [
                [this.data[0].label, this.data[0].x]
            ] : e.labelSeries(this.xmin, this.xmax, this.width, this.options.xLabels, this.options.xLabelFormat) : function() {
                var t, e, n, i;
                for (n = this.data, i = [], t = 0, e = n.length; e > t; t++) s = n[t], i.push([s.label, s.x]);
                return i
            }.call(this), i.reverse(), u = [], l = 0, d = i.length; d > l; l++) n = i[l], u.push(t(n[0], n[1]));
            return u
        }, n.prototype.drawSeries = function() {
            var t, e, n, i, a, r;
            for (this.seriesPoints = [], t = e = i = this.options.ykeys.length - 1; 0 >= i ? 0 >= e : e >= 0; t = 0 >= i ? ++e : --e) this._drawLineFor(t);
            for (r = [], t = n = a = this.options.ykeys.length - 1; 0 >= a ? 0 >= n : n >= 0; t = 0 >= a ? ++n : --n) r.push(this._drawPointFor(t));
            return r
        }, n.prototype._drawPointFor = function(t) {
            var e, n, i, a, r, s;
            for (this.seriesPoints[t] = [], r = this.data, s = [], i = 0, a = r.length; a > i; i++) n = r[i], e = null, null != n._y[t] && (e = this.drawLinePoint(n._x, n._y[t], this.colorFor(n, t, "point"), t)), s.push(this.seriesPoints[t].push(e));
            return s
        }, n.prototype._drawLineFor = function(t) {
            var e;
            return e = this.paths[t], null !== e ? this.drawLinePath(e, this.colorFor(null, t, "line"), t) : void 0
        }, n.createPath = function(t, n, i) {
            var a, r, s, o, l, d, u, c, h, p, f, m, _, g;
            for (u = "", n && (s = e.Line.gradients(t)), c = {
                y: null
            }, o = _ = 0, g = t.length; g > _; o = ++_) a = t[o], null != a.y && (null != c.y ? n ? (r = s[o], d = s[o - 1], l = (a.x - c.x) / 4, h = c.x + l, f = Math.min(i, c.y + l * d), p = a.x - l, m = Math.min(i, a.y - l * r), u += "C" + h + "," + f + "," + p + "," + m + "," + a.x + "," + a.y) : u += "L" + a.x + "," + a.y : n && null == s[o] || (u += "M" + a.x + "," + a.y)), c = a;
            return u
        }, n.gradients = function(t) {
            var e, n, i, a, r, s, o, l;
            for (n = function(t, e) {
                return (t.y - e.y) / (t.x - e.x)
            }, l = [], i = s = 0, o = t.length; o > s; i = ++s) e = t[i], null != e.y ? (a = t[i + 1] || {
                y: null
            }, r = t[i - 1] || {
                y: null
            }, l.push(null != r.y && null != a.y ? n(r, a) : null != r.y ? n(r, e) : null != a.y ? n(e, a) : null)) : l.push(null);
            return l
        }, n.prototype.hilight = function(t) {
            var e, n, i, a, r;
            if (null !== this.prevHilight && this.prevHilight !== t)
                for (e = n = 0, a = this.seriesPoints.length - 1; a >= 0 ? a >= n : n >= a; e = a >= 0 ? ++n : --n) this.seriesPoints[e][this.prevHilight] && this.seriesPoints[e][this.prevHilight].animate(this.pointShrinkSeries(e));
            if (null !== t && this.prevHilight !== t)
                for (e = i = 0, r = this.seriesPoints.length - 1; r >= 0 ? r >= i : i >= r; e = r >= 0 ? ++i : --i) this.seriesPoints[e][t] && this.seriesPoints[e][t].animate(this.pointGrowSeries(e));
            return this.prevHilight = t
        }, n.prototype.colorFor = function(t, e, n) {
            return "function" == typeof this.options.lineColors ? this.options.lineColors.call(this, t, e, n) : "point" === n ? this.options.pointFillColors[e % this.options.pointFillColors.length] || this.options.lineColors[e % this.options.lineColors.length] : this.options.lineColors[e % this.options.lineColors.length]
        }, n.prototype.drawXAxisLabel = function(t, e, n) {
            return this.raphael.text(t, e, n).attr("font-size", this.options.gridTextSize).attr("font-family", this.options.gridTextFamily).attr("font-weight", this.options.gridTextWeight).attr("fill", this.options.gridTextColor)
        }, n.prototype.drawLinePath = function(t, e, n) {
            return this.raphael.path(t).attr("stroke", e).attr("stroke-width", this.lineWidthForSeries(n))
        }, n.prototype.drawLinePoint = function(t, e, n, i) {
            return this.raphael.circle(t, e, this.pointSizeForSeries(i)).attr("fill", n).attr("stroke-width", this.pointStrokeWidthForSeries(i)).attr("stroke", this.pointStrokeColorForSeries(i))
        }, n.prototype.pointStrokeWidthForSeries = function(t) {
            return this.options.pointStrokeWidths[t % this.options.pointStrokeWidths.length]
        }, n.prototype.pointStrokeColorForSeries = function(t) {
            return this.options.pointStrokeColors[t % this.options.pointStrokeColors.length]
        }, n.prototype.lineWidthForSeries = function(t) {
            return this.options.lineWidth instanceof Array ? this.options.lineWidth[t % this.options.lineWidth.length] : this.options.lineWidth
        }, n.prototype.pointSizeForSeries = function(t) {
            return this.options.pointSize instanceof Array ? this.options.pointSize[t % this.options.pointSize.length] : this.options.pointSize
        }, n.prototype.pointGrowSeries = function(t) {
            return Raphael.animation({
                r: this.pointSizeForSeries(t) + 3
            }, 25, "linear")
        }, n.prototype.pointShrinkSeries = function(t) {
            return Raphael.animation({
                r: this.pointSizeForSeries(t)
            }, 25, "linear")
        }, n
    }(e.Grid), e.labelSeries = function(n, i, a, r, s) {
        var o, l, d, u, c, h, p, f, m, _, g;
        if (d = 200 * (i - n) / a, l = new Date(n), p = e.LABEL_SPECS[r], void 0 === p)
            for (g = e.AUTO_LABEL_ORDER, m = 0, _ = g.length; _ > m; m++)
                if (u = g[m], h = e.LABEL_SPECS[u], d >= h.span) {
                    p = h;
                    break
                }
        for (void 0 === p && (p = e.LABEL_SPECS.second), s && (p = t.extend({}, p, {
                fmt: s
            })), o = p.start(l), c = [];
            (f = o.getTime()) <= i;) f >= n && c.push([p.fmt(o), f]), p.incr(o);
        return c
    }, n = function(t) {
        return {
            span: 60 * t * 1e3,
            start: function(t) {
                return new Date(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours())
            },
            fmt: function(t) {
                return "" + e.pad2(t.getHours()) + ":" + e.pad2(t.getMinutes())
            },
            incr: function(e) {
                return e.setUTCMinutes(e.getUTCMinutes() + t)
            }
        }
    }, i = function(t) {
        return {
            span: 1e3 * t,
            start: function(t) {
                return new Date(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes())
            },
            fmt: function(t) {
                return "" + e.pad2(t.getHours()) + ":" + e.pad2(t.getMinutes()) + ":" + e.pad2(t.getSeconds())
            },
            incr: function(e) {
                return e.setUTCSeconds(e.getUTCSeconds() + t)
            }
        }
    }, e.LABEL_SPECS = {
        decade: {
            span: 1728e8,
            start: function(t) {
                return new Date(t.getFullYear() - t.getFullYear() % 10, 0, 1)
            },
            fmt: function(t) {
                return "" + t.getFullYear()
            },
            incr: function(t) {
                return t.setFullYear(t.getFullYear() + 10)
            }
        },
        year: {
            span: 1728e7,
            start: function(t) {
                return new Date(t.getFullYear(), 0, 1)
            },
            fmt: function(t) {
                return "" + t.getFullYear()
            },
            incr: function(t) {
                return t.setFullYear(t.getFullYear() + 1)
            }
        },
        month: {
            span: 24192e5,
            start: function(t) {
                return new Date(t.getFullYear(), t.getMonth(), 1)
            },
            fmt: function(t) {
                return "" + t.getFullYear() + "-" + e.pad2(t.getMonth() + 1)
            },
            incr: function(t) {
                return t.setMonth(t.getMonth() + 1)
            }
        },
        week: {
            span: 6048e5,
            start: function(t) {
                return new Date(t.getFullYear(), t.getMonth(), t.getDate())
            },
            fmt: function(t) {
                return "" + t.getFullYear() + "-" + e.pad2(t.getMonth() + 1) + "-" + e.pad2(t.getDate())
            },
            incr: function(t) {
                return t.setDate(t.getDate() + 7)
            }
        },
        day: {
            span: 864e5,
            start: function(t) {
                return new Date(t.getFullYear(), t.getMonth(), t.getDate())
            },
            fmt: function(t) {
                return "" + t.getFullYear() + "-" + e.pad2(t.getMonth() + 1) + "-" + e.pad2(t.getDate())
            },
            incr: function(t) {
                return t.setDate(t.getDate() + 1)
            }
        },
        hour: n(60),
        "30min": n(30),
        "15min": n(15),
        "10min": n(10),
        "5min": n(5),
        minute: n(1),
        "30sec": i(30),
        "15sec": i(15),
        "10sec": i(10),
        "5sec": i(5),
        second: i(1)
    }, e.AUTO_LABEL_ORDER = ["decade", "year", "month", "week", "day", "hour", "30min", "15min", "10min", "5min", "minute", "30sec", "15sec", "10sec", "5sec", "second"], e.Area = function(n) {
        function i(n) {
            var r;
            return this instanceof e.Area ? (r = t.extend({}, a, n), this.cumulative = !r.behaveLikeLine, "auto" === r.fillOpacity && (r.fillOpacity = r.behaveLikeLine ? .8 : 1), void i.__super__.constructor.call(this, r)) : new e.Area(n)
        }
        var a;
        return o(i, n), a = {
            fillOpacity: "auto",
            behaveLikeLine: !1
        }, i.prototype.calcPoints = function() {
            var t, e, n, i, a, r, s;
            for (r = this.data, s = [], i = 0, a = r.length; a > i; i++) t = r[i], t._x = this.transX(t.x), e = 0, t._y = function() {
                var i, a, r, s;
                for (r = t.y, s = [], i = 0, a = r.length; a > i; i++) n = r[i], this.options.behaveLikeLine ? s.push(this.transY(n)) : (e += n || 0, s.push(this.transY(e)));
                return s
            }.call(this), s.push(t._ymax = Math.max.apply(Math, t._y));
            return s
        }, i.prototype.drawSeries = function() {
            var t, e, n, i, a, r, s, o;
            for (this.seriesPoints = [], e = this.options.behaveLikeLine ? function() {
                r = [];
                for (var t = 0, e = this.options.ykeys.length - 1; e >= 0 ? e >= t : t >= e; e >= 0 ? t++ : t--) r.push(t);
                return r
            }.apply(this) : function() {
                s = [];
                for (var t = a = this.options.ykeys.length - 1; 0 >= a ? 0 >= t : t >= 0; 0 >= a ? t++ : t--) s.push(t);
                return s
            }.apply(this), o = [], n = 0, i = e.length; i > n; n++) t = e[n], this._drawFillFor(t), this._drawLineFor(t), o.push(this._drawPointFor(t));
            return o
        }, i.prototype._drawFillFor = function(t) {
            var e;
            return e = this.paths[t], null !== e ? (e += "L" + this.transX(this.xmax) + "," + this.bottom + "L" + this.transX(this.xmin) + "," + this.bottom + "Z", this.drawFilledPath(e, this.fillForSeries(t))) : void 0
        }, i.prototype.fillForSeries = function(t) {
            var e;
            return e = Raphael.rgb2hsl(this.colorFor(this.data[t], t, "line")), Raphael.hsl(e.h, this.options.behaveLikeLine ? .9 * e.s : .75 * e.s, Math.min(.98, this.options.behaveLikeLine ? 1.2 * e.l : 1.25 * e.l))
        }, i.prototype.drawFilledPath = function(t, e) {
            return this.raphael.path(t).attr("fill", e).attr("fill-opacity", this.options.fillOpacity).attr("stroke", "none")
        }, i
    }(e.Line), e.Bar = function(n) {
        function i(n) {
            return this.onHoverOut = r(this.onHoverOut, this), this.onHoverMove = r(this.onHoverMove, this), this.onGridClick = r(this.onGridClick, this), this instanceof e.Bar ? void i.__super__.constructor.call(this, t.extend({}, n, {
                parseTime: !1
            })) : new e.Bar(n)
        }
        return o(i, n), i.prototype.init = function() {
            return this.cumulative = this.options.stacked, "always" !== this.options.hideHover ? (this.hover = new e.Hover({
                parent: this.el
            }), this.on("hovermove", this.onHoverMove), this.on("hoverout", this.onHoverOut), this.on("gridclick", this.onGridClick)) : void 0
        }, i.prototype.defaults = {
            barSizeRatio: .75,
            barGap: 3,
            barColors: ["#0b62a4", "#7a92a3", "#4da74d", "#afd8f8", "#edc240", "#cb4b4b", "#9440ed"],
            barOpacity: 1,
            barRadius: [0, 0, 0, 0],
            xLabelMargin: 50
        }, i.prototype.calc = function() {
            var t;
            return this.calcBars(), this.options.hideHover === !1 ? (t = this.hover).update.apply(t, this.hoverContentForRow(this.data.length - 1)) : void 0
        }, i.prototype.calcBars = function() {
            var t, e, n, i, a, r, s;
            for (r = this.data, s = [], t = i = 0, a = r.length; a > i; t = ++i) e = r[t], e._x = this.left + this.width * (t + .5) / this.data.length, s.push(e._y = function() {
                var t, i, a, r;
                for (a = e.y, r = [], t = 0, i = a.length; i > t; t++) n = a[t], r.push(null != n ? this.transY(n) : null);
                return r
            }.call(this));
            return s
        }, i.prototype.draw = function() {
            var t;
            return ((t = this.options.axes) === !0 || "both" === t || "x" === t) && this.drawXAxis(), this.drawSeries()
        }, i.prototype.drawXAxis = function() {
            var t, e, n, i, a, r, s, o, l, d, u, c, h;
            for (d = this.bottom + (this.options.xAxisLabelTopPadding || this.options.padding / 2), s = null, r = null, h = [], t = u = 0, c = this.data.length; c >= 0 ? c > u : u > c; t = c >= 0 ? ++u : --u) o = this.data[this.data.length - 1 - t], e = this.drawXAxisLabel(o._x, d, o.label), l = e.getBBox(), e.transform("r" + -this.options.xLabelAngle), n = e.getBBox(), e.transform("t0," + n.height / 2 + "..."), 0 !== this.options.xLabelAngle && (a = -.5 * l.width * Math.cos(this.options.xLabelAngle * Math.PI / 180), e.transform("t" + a + ",0...")), (null == s || s >= n.x + n.width || null != r && r >= n.x) && n.x >= 0 && n.x + n.width < this.el.width() ? (0 !== this.options.xLabelAngle && (i = 1.25 * this.options.gridTextSize / Math.sin(this.options.xLabelAngle * Math.PI / 180), r = n.x - i), h.push(s = n.x - this.options.xLabelMargin)) : h.push(e.remove());
            return h
        }, i.prototype.drawSeries = function() {
            var t, e, n, i, a, r, s, o, l, d, u, c, h, p, f;
            return n = this.width / this.options.data.length, o = this.options.stacked ? 1 : this.options.ykeys.length, t = (n * this.options.barSizeRatio - this.options.barGap * (o - 1)) / o, this.options.barSize && (t = Math.min(t, this.options.barSize)), c = n - t * o - this.options.barGap * (o - 1), s = c / 2, f = this.ymin <= 0 && this.ymax >= 0 ? this.transY(0) : null, this.bars = function() {
                var o, c, m, _;
                for (m = this.data, _ = [], i = o = 0, c = m.length; c > o; i = ++o) l = m[i], a = 0, _.push(function() {
                    var o, c, m, _;
                    for (m = l._y, _ = [], d = o = 0, c = m.length; c > o; d = ++o) p = m[d], null !== p ? (f ? (h = Math.min(p, f), e = Math.max(p, f)) : (h = p, e = this.bottom), r = this.left + i * n + s, this.options.stacked || (r += d * (t + this.options.barGap)), u = e - h, this.options.verticalGridCondition && this.options.verticalGridCondition(l.x) && this.drawBar(this.left + i * n, this.top, n, Math.abs(this.top - this.bottom), this.options.verticalGridColor, this.options.verticalGridOpacity, this.options.barRadius), this.options.stacked && (h -= a), this.drawBar(r, h, t, u, this.colorFor(l, d, "bar"), this.options.barOpacity, this.options.barRadius), _.push(a += u)) : _.push(null);
                    return _
                }.call(this));
                return _
            }.call(this)
        }, i.prototype.colorFor = function(t, e, n) {
            var i, a;
            return "function" == typeof this.options.barColors ? (i = {
                x: t.x,
                y: t.y[e],
                label: t.label
            }, a = {
                index: e,
                key: this.options.ykeys[e],
                label: this.options.labels[e]
            }, this.options.barColors.call(this, i, a, n)) : this.options.barColors[e % this.options.barColors.length]
        }, i.prototype.hitTest = function(t) {
            return 0 === this.data.length ? null : (t = Math.max(Math.min(t, this.right), this.left), Math.min(this.data.length - 1, Math.floor((t - this.left) / (this.width / this.data.length))))
        }, i.prototype.onGridClick = function(t, e) {
            var n;
            return n = this.hitTest(t), this.fire("click", n, this.data[n].src, t, e)
        }, i.prototype.onHoverMove = function(t) {
            var e, n;
            return e = this.hitTest(t), (n = this.hover).update.apply(n, this.hoverContentForRow(e))
        }, i.prototype.onHoverOut = function() {
            return this.options.hideHover !== !1 ? this.hover.hide() : void 0
        }, i.prototype.hoverContentForRow = function(t) {
            var e, n, i, a, r, s, o, l;
            for (i = this.data[t], e = "<div class='morris-hover-row-label'>" + i.label + "</div>", l = i.y, n = s = 0, o = l.length; o > s; n = ++s) r = l[n], e += "<div class='morris-hover-point' style='color: " + this.colorFor(i, n, "label") + "'>\n  " + this.options.labels[n] + ":\n  " + this.yLabelFormat(r) + "\n</div>";
            return "function" == typeof this.options.hoverCallback && (e = this.options.hoverCallback(t, this.options, e, i.src)), a = this.left + (t + .5) * this.width / this.data.length, [e, a]
        }, i.prototype.drawXAxisLabel = function(t, e, n) {
            var i;
            return i = this.raphael.text(t, e, n).attr("font-size", this.options.gridTextSize).attr("font-family", this.options.gridTextFamily).attr("font-weight", this.options.gridTextWeight).attr("fill", this.options.gridTextColor)
        }, i.prototype.drawBar = function(t, e, n, i, a, r, s) {
            var o, l;
            return o = Math.max.apply(Math, s), l = 0 === o || o > i ? this.raphael.rect(t, e, n, i) : this.raphael.path(this.roundedRect(t, e, n, i, s)), l.attr("fill", a).attr("fill-opacity", r).attr("stroke", "none")
        }, i.prototype.roundedRect = function(t, e, n, i, a) {
            return null == a && (a = [0, 0, 0, 0]), ["M", t, a[0] + e, "Q", t, e, t + a[0], e, "L", t + n - a[1], e, "Q", t + n, e, t + n, e + a[1], "L", t + n, e + i - a[2], "Q", t + n, e + i, t + n - a[2], e + i, "L", t + a[3], e + i, "Q", t, e + i, t, e + i - a[3], "Z"]
        }, i
    }(e.Grid), e.Donut = function(n) {
        function i(n) {
            this.resizeHandler = r(this.resizeHandler, this), this.select = r(this.select, this), this.click = r(this.click, this);
            var i = this;
            if (!(this instanceof e.Donut)) return new e.Donut(n);
            if (this.options = t.extend({}, this.defaults, n), this.el = t("string" == typeof n.element ? document.getElementById(n.element) : n.element), null === this.el || 0 === this.el.length) throw new Error("Graph placeholder not found.");
            void 0 !== n.data && 0 !== n.data.length && (this.raphael = new Raphael(this.el[0]), this.options.resize && t(window).bind("resize", function() {
                return null != i.timeoutId && window.clearTimeout(i.timeoutId), i.timeoutId = window.setTimeout(i.resizeHandler, 100)
            }), this.setData(n.data))
        }
        return o(i, n), i.prototype.defaults = {
            colors: ["#0B62A4", "#3980B5", "#679DC6", "#95BBD7", "#B0CCE1", "#095791", "#095085", "#083E67", "#052C48", "#042135"],
            backgroundColor: "#FFFFFF",
            labelColor: "#000000",
            formatter: e.commas,
            resize: !1
        }, i.prototype.redraw = function() {
            var t, n, i, a, r, s, o, l, d, u, c, h, p, f, m, _, g, y, v, b, w, M, L;
            for (this.raphael.clear(), n = this.el.width() / 2, i = this.el.height() / 2, p = (Math.min(n, i) - 10) / 3, c = 0, b = this.values, f = 0, g = b.length; g > f; f++) h = b[f], c += h;
            for (l = 5 / (2 * p), t = 1.9999 * Math.PI - l * this.data.length, s = 0, r = 0, this.segments = [], w = this.values, a = m = 0, y = w.length; y > m; a = ++m) h = w[a], d = s + l + t * (h / c), u = new e.DonutSegment(n, i, 2 * p, p, s, d, this.data[a].color || this.options.colors[r % this.options.colors.length], this.options.backgroundColor, r, this.raphael), u.render(), this.segments.push(u), u.on("hover", this.select), u.on("click", this.click), s = d, r += 1;
            for (this.text1 = this.drawEmptyDonutLabel(n, i - 10, this.options.labelColor, 15, 800), this.text2 = this.drawEmptyDonutLabel(n, i + 10, this.options.labelColor, 14), o = Math.max.apply(Math, this.values), r = 0, M = this.values, L = [], _ = 0, v = M.length; v > _; _++) {
                if (h = M[_], h === o) {
                    this.select(r);
                    break
                }
                L.push(r += 1)
            }
            return L
        }, i.prototype.setData = function(t) {
            var e;
            return this.data = t, this.values = function() {
                var t, n, i, a;
                for (i = this.data, a = [], t = 0, n = i.length; n > t; t++) e = i[t], a.push(parseFloat(e.value));
                return a
            }.call(this), this.redraw()
        }, i.prototype.click = function(t) {
            return this.fire("click", t, this.data[t])
        }, i.prototype.select = function(t) {
            var e, n, i, a, r, s;
            for (s = this.segments, a = 0, r = s.length; r > a; a++) n = s[a], n.deselect();
            return i = this.segments[t], i.select(), e = this.data[t], this.setLabels(e.label, this.options.formatter(e.value, e))
        }, i.prototype.setLabels = function(t, e) {
            var n, i, a, r, s, o, l, d;
            return n = 2 * (Math.min(this.el.width() / 2, this.el.height() / 2) - 10) / 3, r = 1.8 * n, a = n / 2, i = n / 3, this.text1.attr({
                text: t,
                transform: ""
            }), s = this.text1.getBBox(), o = Math.min(r / s.width, a / s.height), this.text1.attr({
                transform: "S" + o + "," + o + "," + (s.x + s.width / 2) + "," + (s.y + s.height)
            }), this.text2.attr({
                text: e,
                transform: ""
            }), l = this.text2.getBBox(), d = Math.min(r / l.width, i / l.height), this.text2.attr({
                transform: "S" + d + "," + d + "," + (l.x + l.width / 2) + "," + l.y
            })
        }, i.prototype.drawEmptyDonutLabel = function(t, e, n, i, a) {
            var r;
            return r = this.raphael.text(t, e, "").attr("font-size", i).attr("fill", n), null != a && r.attr("font-weight", a), r
        }, i.prototype.resizeHandler = function() {
            return this.timeoutId = null, this.raphael.setSize(this.el.width(), this.el.height()), this.redraw()
        }, i
    }(e.EventEmitter), e.DonutSegment = function(t) {
        function e(t, e, n, i, a, s, o, l, d, u) {
            this.cx = t, this.cy = e, this.inner = n, this.outer = i, this.color = o, this.backgroundColor = l, this.index = d, this.raphael = u, this.deselect = r(this.deselect, this), this.select = r(this.select, this), this.sin_p0 = Math.sin(a), this.cos_p0 = Math.cos(a), this.sin_p1 = Math.sin(s), this.cos_p1 = Math.cos(s), this.is_long = s - a > Math.PI ? 1 : 0, this.path = this.calcSegment(this.inner + 3, this.inner + this.outer - 5), this.selectedPath = this.calcSegment(this.inner + 3, this.inner + this.outer), this.hilight = this.calcArc(this.inner)
        }
        return o(e, t), e.prototype.calcArcPoints = function(t) {
            return [this.cx + t * this.sin_p0, this.cy + t * this.cos_p0, this.cx + t * this.sin_p1, this.cy + t * this.cos_p1]
        }, e.prototype.calcSegment = function(t, e) {
            var n, i, a, r, s, o, l, d, u, c;
            return u = this.calcArcPoints(t), n = u[0], a = u[1], i = u[2], r = u[3], c = this.calcArcPoints(e), s = c[0], l = c[1], o = c[2], d = c[3], "M" + n + "," + a + ("A" + t + "," + t + ",0," + this.is_long + ",0," + i + "," + r) + ("L" + o + "," + d) + ("A" + e + "," + e + ",0," + this.is_long + ",1," + s + "," + l) + "Z"
        }, e.prototype.calcArc = function(t) {
            var e, n, i, a, r;
            return r = this.calcArcPoints(t), e = r[0], i = r[1], n = r[2], a = r[3], "M" + e + "," + i + ("A" + t + "," + t + ",0," + this.is_long + ",0," + n + "," + a)
        }, e.prototype.render = function() {
            var t = this;
            return this.arc = this.drawDonutArc(this.hilight, this.color), this.seg = this.drawDonutSegment(this.path, this.color, this.backgroundColor, function() {
                return t.fire("hover", t.index)
            }, function() {
                return t.fire("click", t.index)
            })
        }, e.prototype.drawDonutArc = function(t, e) {
            return this.raphael.path(t).attr({
                stroke: e,
                "stroke-width": 2,
                opacity: 0
            })
        }, e.prototype.drawDonutSegment = function(t, e, n, i, a) {
            return this.raphael.path(t).attr({
                fill: e,
                stroke: n,
                "stroke-width": 3
            }).hover(i).click(a)
        }, e.prototype.select = function() {
            return this.selected ? void 0 : (this.seg.animate({
                path: this.selectedPath
            }, 150, "<>"), this.arc.animate({
                opacity: 1
            }, 150, "<>"), this.selected = !0)
        }, e.prototype.deselect = function() {
            return this.selected ? (this.seg.animate({
                path: this.path
            }, 150, "<>"), this.arc.animate({
                opacity: 0
            }, 150, "<>"), this.selected = !1) : void 0
        }, e
    }(e.EventEmitter)
}.call(this), ! function(t) {
    var e, n, i = "0.4.2",
        a = "hasOwnProperty",
        r = /[\.\/]/,
        s = "*",
        o = function() {}, l = function(t, e) {
            return t - e
        }, d = {
            n: {}
        }, u = function(t, i) {
            t = String(t);
            var a, r = n,
                s = Array.prototype.slice.call(arguments, 2),
                o = u.listeners(t),
                d = 0,
                c = [],
                h = {}, p = [],
                f = e;
            e = t, n = 0;
            for (var m = 0, _ = o.length; _ > m; m++) "zIndex" in o[m] && (c.push(o[m].zIndex), o[m].zIndex < 0 && (h[o[m].zIndex] = o[m]));
            for (c.sort(l); c[d] < 0;)
                if (a = h[c[d++]], p.push(a.apply(i, s)), n) return n = r, p;
            for (m = 0; _ > m; m++)
                if (a = o[m], "zIndex" in a)
                    if (a.zIndex == c[d]) {
                        if (p.push(a.apply(i, s)), n) break;
                        do
                            if (d++, a = h[c[d]], a && p.push(a.apply(i, s)), n) break; while (a)
                    } else h[a.zIndex] = a;
                    else if (p.push(a.apply(i, s)), n) break;
            return n = r, e = f, p.length ? p : null
        };
    u._events = d, u.listeners = function(t) {
        var e, n, i, a, o, l, u, c, h = t.split(r),
            p = d,
            f = [p],
            m = [];
        for (a = 0, o = h.length; o > a; a++) {
            for (c = [], l = 0, u = f.length; u > l; l++)
                for (p = f[l].n, n = [p[h[a]], p[s]], i = 2; i--;) e = n[i], e && (c.push(e), m = m.concat(e.f || []));
            f = c
        }
        return m
    }, u.on = function(t, e) {
        if (t = String(t), "function" != typeof e) return function() {};
        for (var n = t.split(r), i = d, a = 0, s = n.length; s > a; a++) i = i.n, i = i.hasOwnProperty(n[a]) && i[n[a]] || (i[n[a]] = {
            n: {}
        });
        for (i.f = i.f || [], a = 0, s = i.f.length; s > a; a++)
            if (i.f[a] == e) return o;
        return i.f.push(e),
        function(t) {
            +t == +t && (e.zIndex = +t)
        }
    }, u.f = function(t) {
        var e = [].slice.call(arguments, 1);
        return function() {
            u.apply(null, [t, null].concat(e).concat([].slice.call(arguments, 0)))
        }
    }, u.stop = function() {
        n = 1
    }, u.nt = function(t) {
        return t ? new RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(e) : e
    }, u.nts = function() {
        return e.split(r)
    }, u.off = u.unbind = function(t, e) {
        if (!t) return void(u._events = d = {
            n: {}
        });
        var n, i, o, l, c, h, p, f = t.split(r),
            m = [d];
        for (l = 0, c = f.length; c > l; l++)
            for (h = 0; h < m.length; h += o.length - 2) {
                if (o = [h, 1], n = m[h].n, f[l] != s) n[f[l]] && o.push(n[f[l]]);
                else
                    for (i in n) n[a](i) && o.push(n[i]);
                m.splice.apply(m, o)
            }
        for (l = 0, c = m.length; c > l; l++)
            for (n = m[l]; n.n;) {
                if (e) {
                    if (n.f) {
                        for (h = 0, p = n.f.length; p > h; h++)
                            if (n.f[h] == e) {
                                n.f.splice(h, 1);
                                break
                            }!n.f.length && delete n.f
                    }
                    for (i in n.n)
                        if (n.n[a](i) && n.n[i].f) {
                            var _ = n.n[i].f;
                            for (h = 0, p = _.length; p > h; h++)
                                if (_[h] == e) {
                                    _.splice(h, 1);
                                    break
                                }!_.length && delete n.n[i].f
                        }
                } else {
                    delete n.f;
                    for (i in n.n) n.n[a](i) && n.n[i].f && delete n.n[i].f
                }
                n = n.n
            }
    }, u.once = function(t, e) {
        var n = function() {
            return u.unbind(t, n), e.apply(this, arguments)
        };
        return u.on(t, n)
    }, u.version = i, u.toString = function() {
        return "You are running Eve " + i
    }, "undefined" != typeof module && module.exports ? module.exports = u : "undefined" != typeof define ? define("eve", [], function() {
        return u
    }) : t.eve = u
}(this), function(t, e) {
    "function" == typeof define && define.amd ? define(["eve"], function(n) {
        return e(t, n)
    }) : e(t, t.eve)
}(this, function(t, e) {
    function n(t) {
        if (n.is(t, "function")) return b ? t() : e.on("raphael.DOMload", t);
        if (n.is(t, V)) return n._engine.create[S](n, t.splice(0, 3 + n.is(t[0], q))).add(t);
        var i = Array.prototype.slice.call(arguments, 0);
        if (n.is(i[i.length - 1], "function")) {
            var a = i.pop();
            return b ? a.call(n._engine.create[S](n, i)) : e.on("raphael.DOMload", function() {
                a.call(n._engine.create[S](n, i))
            })
        }
        return n._engine.create[S](n, arguments)
    }

    function i(t) {
        if ("function" == typeof t || Object(t) !== t) return t;
        var e = new t.constructor;
        for (var n in t) t[D](n) && (e[n] = i(t[n]));
        return e
    }

    function a(t, e) {
        for (var n = 0, i = t.length; i > n; n++)
            if (t[n] === e) return t.push(t.splice(n, 1)[0])
    }

    function r(t, e, n) {
        function i() {
            var r = Array.prototype.slice.call(arguments, 0),
                s = r.join("â€"),
                o = i.cache = i.cache || {}, l = i.count = i.count || [];
            return o[D](s) ? (a(l, s), n ? n(o[s]) : o[s]) : (l.length >= 1e3 && delete o[l.shift()], l.push(s), o[s] = t[S](e, r), n ? n(o[s]) : o[s])
        }
        return i
    }

    function s() {
        return this.hex
    }

    function o(t, e) {
        for (var n = [], i = 0, a = t.length; a - 2 * !e > i; i += 2) {
            var r = [{
                x: +t[i - 2],
                y: +t[i - 1]
            }, {
                x: +t[i],
                y: +t[i + 1]
            }, {
                x: +t[i + 2],
                y: +t[i + 3]
            }, {
                x: +t[i + 4],
                y: +t[i + 5]
            }];
            e ? i ? a - 4 == i ? r[3] = {
                x: +t[0],
                y: +t[1]
            } : a - 2 == i && (r[2] = {
                x: +t[0],
                y: +t[1]
            }, r[3] = {
                x: +t[2],
                y: +t[3]
            }) : r[0] = {
                x: +t[a - 2],
                y: +t[a - 1]
            } : a - 4 == i ? r[3] = r[2] : i || (r[0] = {
                x: +t[i],
                y: +t[i + 1]
            }), n.push(["C", (-r[0].x + 6 * r[1].x + r[2].x) / 6, (-r[0].y + 6 * r[1].y + r[2].y) / 6, (r[1].x + 6 * r[2].x - r[3].x) / 6, (r[1].y + 6 * r[2].y - r[3].y) / 6, r[2].x, r[2].y])
        }
        return n
    }

    function l(t, e, n, i, a) {
        var r = -3 * e + 9 * n - 9 * i + 3 * a,
            s = t * r + 6 * e - 12 * n + 6 * i;
        return t * s - 3 * e + 3 * n
    }

    function d(t, e, n, i, a, r, s, o, d) {
        null == d && (d = 1), d = d > 1 ? 1 : 0 > d ? 0 : d;
        for (var u = d / 2, c = 12, h = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], p = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], f = 0, m = 0; c > m; m++) {
            var _ = u * h[m] + u,
                g = l(_, t, n, a, s),
                y = l(_, e, i, r, o),
                v = g * g + y * y;
            f += p[m] * W.sqrt(v)
        }
        return u * f
    }

    function u(t, e, n, i, a, r, s, o, l) {
        if (!(0 > l || d(t, e, n, i, a, r, s, o) < l)) {
            var u, c = 1,
                h = c / 2,
                p = c - h,
                f = .01;
            for (u = d(t, e, n, i, a, r, s, o, p); B(u - l) > f;) h /= 2, p += (l > u ? 1 : -1) * h, u = d(t, e, n, i, a, r, s, o, p);
            return p
        }
    }

    function c(t, e, n, i, a, r, s, o) {
        if (!(O(t, n) < $(a, s) || $(t, n) > O(a, s) || O(e, i) < $(r, o) || $(e, i) > O(r, o))) {
            var l = (t * i - e * n) * (a - s) - (t - n) * (a * o - r * s),
                d = (t * i - e * n) * (r - o) - (e - i) * (a * o - r * s),
                u = (t - n) * (r - o) - (e - i) * (a - s);
            if (u) {
                var c = l / u,
                    h = d / u,
                    p = +c.toFixed(2),
                    f = +h.toFixed(2);
                if (!(p < +$(t, n).toFixed(2) || p > +O(t, n).toFixed(2) || p < +$(a, s).toFixed(2) || p > +O(a, s).toFixed(2) || f < +$(e, i).toFixed(2) || f > +O(e, i).toFixed(2) || f < +$(r, o).toFixed(2) || f > +O(r, o).toFixed(2))) return {
                    x: c,
                    y: h
                }
            }
        }
    }

    function h(t, e, i) {
        var a = n.bezierBBox(t),
            r = n.bezierBBox(e);
        if (!n.isBBoxIntersect(a, r)) return i ? 0 : [];
        for (var s = d.apply(0, t), o = d.apply(0, e), l = O(~~(s / 5), 1), u = O(~~(o / 5), 1), h = [], p = [], f = {}, m = i ? 0 : [], _ = 0; l + 1 > _; _++) {
            var g = n.findDotsAtSegment.apply(n, t.concat(_ / l));
            h.push({
                x: g.x,
                y: g.y,
                t: _ / l
            })
        }
        for (_ = 0; u + 1 > _; _++) g = n.findDotsAtSegment.apply(n, e.concat(_ / u)), p.push({
            x: g.x,
            y: g.y,
            t: _ / u
        });
        for (_ = 0; l > _; _++)
            for (var y = 0; u > y; y++) {
                var v = h[_],
                    b = h[_ + 1],
                    w = p[y],
                    M = p[y + 1],
                    L = B(b.x - v.x) < .001 ? "y" : "x",
                    x = B(M.x - w.x) < .001 ? "y" : "x",
                    D = c(v.x, v.y, b.x, b.y, w.x, w.y, M.x, M.y);
                if (D) {
                    if (f[D.x.toFixed(4)] == D.y.toFixed(4)) continue;
                    f[D.x.toFixed(4)] = D.y.toFixed(4);
                    var T = v.t + B((D[L] - v[L]) / (b[L] - v[L])) * (b.t - v.t),
                        k = w.t + B((D[x] - w[x]) / (M[x] - w[x])) * (M.t - w.t);
                    T >= 0 && 1.001 >= T && k >= 0 && 1.001 >= k && (i ? m++ : m.push({
                        x: D.x,
                        y: D.y,
                        t1: $(T, 1),
                        t2: $(k, 1)
                    }))
                }
            }
        return m
    }

    function p(t, e, i) {
        t = n._path2curve(t), e = n._path2curve(e);
        for (var a, r, s, o, l, d, u, c, p, f, m = i ? 0 : [], _ = 0, g = t.length; g > _; _++) {
            var y = t[_];
            if ("M" == y[0]) a = l = y[1], r = d = y[2];
            else {
                "C" == y[0] ? (p = [a, r].concat(y.slice(1)), a = p[6], r = p[7]) : (p = [a, r, a, r, l, d, l, d], a = l, r = d);
                for (var v = 0, b = e.length; b > v; v++) {
                    var w = e[v];
                    if ("M" == w[0]) s = u = w[1], o = c = w[2];
                    else {
                        "C" == w[0] ? (f = [s, o].concat(w.slice(1)), s = f[6], o = f[7]) : (f = [s, o, s, o, u, c, u, c], s = u, o = c);
                        var M = h(p, f, i);
                        if (i) m += M;
                        else {
                            for (var L = 0, x = M.length; x > L; L++) M[L].segment1 = _, M[L].segment2 = v, M[L].bez1 = p, M[L].bez2 = f;
                            m = m.concat(M)
                        }
                    }
                }
            }
        }
        return m
    }

    function f(t, e, n, i, a, r) {
        null != t ? (this.a = +t, this.b = +e, this.c = +n, this.d = +i, this.e = +a, this.f = +r) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0)
    }

    function m() {
        return this.x + E + this.y + E + this.width + " Ã— " + this.height
    }

    function _(t, e, n, i, a, r) {
        function s(t) {
            return ((c * t + u) * t + d) * t
        }

        function o(t, e) {
            var n = l(t, e);
            return ((f * n + p) * n + h) * n
        }

        function l(t, e) {
            var n, i, a, r, o, l;
            for (a = t, l = 0; 8 > l; l++) {
                if (r = s(a) - t, B(r) < e) return a;
                if (o = (3 * c * a + 2 * u) * a + d, B(o) < 1e-6) break;
                a -= r / o
            }
            if (n = 0, i = 1, a = t, n > a) return n;
            if (a > i) return i;
            for (; i > n;) {
                if (r = s(a), B(r - t) < e) return a;
                t > r ? n = a : i = a, a = (i - n) / 2 + n
            }
            return a
        }
        var d = 3 * e,
            u = 3 * (i - e) - d,
            c = 1 - d - u,
            h = 3 * n,
            p = 3 * (a - n) - h,
            f = 1 - h - p;
        return o(t, 1 / (200 * r))
    }

    function g(t, e) {
        var n = [],
            i = {};
        if (this.ms = e, this.times = 1, t) {
            for (var a in t) t[D](a) && (i[Z(a)] = t[a], n.push(Z(a)));
            n.sort(ce)
        }
        this.anim = i, this.top = n[n.length - 1], this.percents = n
    }

    function y(t, i, a, r, s, o) {
        a = Z(a);
        var l, d, u, c, h, p, m = t.ms,
            g = {}, y = {}, v = {};
        if (r)
            for (w = 0, L = dn.length; L > w; w++) {
                var b = dn[w];
                if (b.el.id == i.id && b.anim == t) {
                    b.percent != a ? (dn.splice(w, 1), u = 1) : d = b, i.attr(b.totalOrigin);
                    break
                }
            } else r = +y;
        for (var w = 0, L = t.percents.length; L > w; w++) {
            if (t.percents[w] == a || t.percents[w] > r * t.top) {
                a = t.percents[w], h = t.percents[w - 1] || 0, m = m / t.top * (a - h), c = t.percents[w + 1], l = t.anim[a];
                break
            }
            r && i.attr(t.anim[t.percents[w]])
        }
        if (l) {
            if (d) d.initstatus = r, d.start = new Date - d.ms * r;
            else {
                for (var x in l)
                    if (l[D](x) && (ie[D](x) || i.paper.customAttributes[D](x))) switch (g[x] = i.attr(x), null == g[x] && (g[x] = ne[x]), y[x] = l[x], ie[x]) {
                        case q:
                            v[x] = (y[x] - g[x]) / m;
                            break;
                        case "colour":
                            g[x] = n.getRGB(g[x]);
                            var T = n.getRGB(y[x]);
                            v[x] = {
                                r: (T.r - g[x].r) / m,
                                g: (T.g - g[x].g) / m,
                                b: (T.b - g[x].b) / m
                            };
                            break;
                        case "path":
                            var k = Ie(g[x], y[x]),
                                Y = k[1];
                            for (g[x] = k[0], v[x] = [], w = 0, L = g[x].length; L > w; w++) {
                                v[x][w] = [0];
                                for (var S = 1, A = g[x][w].length; A > S; S++) v[x][w][S] = (Y[w][S] - g[x][w][S]) / m
                            }
                            break;
                        case "transform":
                            var F = i._,
                                E = $e(F[x], y[x]);
                            if (E)
                                for (g[x] = E.from, y[x] = E.to, v[x] = [], v[x].real = !0, w = 0, L = g[x].length; L > w; w++)
                                    for (v[x][w] = [g[x][w][0]], S = 1, A = g[x][w].length; A > S; S++) v[x][w][S] = (y[x][w][S] - g[x][w][S]) / m;
                            else {
                                var I = i.matrix || new f,
                                    H = {
                                        _: {
                                            transform: F.transform
                                        },
                                        getBBox: function() {
                                            return i.getBBox(1)
                                        }
                                    };
                                g[x] = [I.a, I.b, I.c, I.d, I.e, I.f], We(H, y[x]), y[x] = H._.transform, v[x] = [(H.matrix.a - I.a) / m, (H.matrix.b - I.b) / m, (H.matrix.c - I.c) / m, (H.matrix.d - I.d) / m, (H.matrix.e - I.e) / m, (H.matrix.f - I.f) / m]
                            }
                            break;
                        case "csv":
                            var P = j(l[x])[N](M),
                                W = j(g[x])[N](M);
                            if ("clip-rect" == x)
                                for (g[x] = W, v[x] = [], w = W.length; w--;) v[x][w] = (P[w] - g[x][w]) / m;
                            y[x] = P;
                            break;
                        default:
                            for (P = [][C](l[x]), W = [][C](g[x]), v[x] = [], w = i.paper.customAttributes[x].length; w--;) v[x][w] = ((P[w] || 0) - (W[w] || 0)) / m
                    }
                    var O = l.easing, $ = n.easing_formulas[O];
                if (!$)
                    if ($ = j(O).match(K), $ && 5 == $.length) {
                        var B = $;
                        $ = function(t) {
                            return _(t, +B[1], +B[2], +B[3], +B[4], m)
                        }
                    } else $ = pe;
                if (p = l.start || t.start || +new Date, b = {
                    anim: t,
                    percent: a,
                    timestamp: p,
                    start: p + (t.del || 0),
                    status: 0,
                    initstatus: r || 0,
                    stop: !1,
                    ms: m,
                    easing: $,
                    from: g,
                    diff: v,
                    to: y,
                    el: i,
                    callback: l.callback,
                    prev: h,
                    next: c,
                    repeat: o || t.times,
                    origin: i.attr(),
                    totalOrigin: s
                }, dn.push(b), r && !d && !u && (b.stop = !0, b.start = new Date - m * r, 1 == dn.length)) return cn();
                u && (b.start = new Date - b.ms * r), 1 == dn.length && un(cn)
            }
            e("raphael.anim.start." + i.id, i, t)
        }
    }

    function v(t) {
        for (var e = 0; e < dn.length; e++) dn[e].el.paper == t && dn.splice(e--, 1)
    }
    n.version = "2.1.2", n.eve = e;
    var b, w, M = /[, ]+/,
        L = {
            circle: 1,
            rect: 1,
            path: 1,
            ellipse: 1,
            text: 1,
            image: 1
        }, x = /\{(\d+)\}/g,
        D = "hasOwnProperty",
        T = {
            doc: document,
            win: t
        }, k = {
            was: Object.prototype[D].call(T.win, "Raphael"),
            is: T.win.Raphael
        }, Y = function() {
            this.ca = this.customAttributes = {}
        }, S = "apply",
        C = "concat",
        A = "ontouchstart" in T.win || T.win.DocumentTouch && T.doc instanceof DocumentTouch,
        F = "",
        E = " ",
        j = String,
        N = "split",
        I = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel" [N](E),
        H = {
            mousedown: "touchstart",
            mousemove: "touchmove",
            mouseup: "touchend"
        }, P = j.prototype.toLowerCase,
        W = Math,
        O = W.max,
        $ = W.min,
        B = W.abs,
        z = W.pow,
        R = W.PI,
        q = "number",
        U = "string",
        V = "array",
        G = Object.prototype.toString,
        J = (n._ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i, /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),
        X = {
            NaN: 1,
            Infinity: 1,
            "-Infinity": 1
        }, K = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
        Q = W.round,
        Z = parseFloat,
        te = parseInt,
        ee = j.prototype.toUpperCase,
        ne = n._availableAttrs = {
            "arrow-end": "none",
            "arrow-start": "none",
            blur: 0,
            "clip-rect": "0 0 1e9 1e9",
            cursor: "default",
            cx: 0,
            cy: 0,
            fill: "#fff",
            "fill-opacity": 1,
            font: '10px "Arial"',
            "font-family": '"Arial"',
            "font-size": "10",
            "font-style": "normal",
            "font-weight": 400,
            gradient: 0,
            height: 0,
            href: "http://raphaeljs.com/",
            "letter-spacing": 0,
            opacity: 1,
            path: "M0,0",
            r: 0,
            rx: 0,
            ry: 0,
            src: "",
            stroke: "#000",
            "stroke-dasharray": "",
            "stroke-linecap": "butt",
            "stroke-linejoin": "butt",
            "stroke-miterlimit": 0,
            "stroke-opacity": 1,
            "stroke-width": 1,
            target: "_blank",
            "text-anchor": "middle",
            title: "Raphael",
            transform: "",
            width: 0,
            x: 0,
            y: 0
        }, ie = n._availableAnimAttrs = {
            blur: q,
            "clip-rect": "csv",
            cx: q,
            cy: q,
            fill: "colour",
            "fill-opacity": q,
            "font-size": q,
            height: q,
            opacity: q,
            path: "path",
            r: q,
            rx: q,
            ry: q,
            stroke: "colour",
            "stroke-opacity": q,
            "stroke-width": q,
            transform: "transform",
            width: q,
            x: q,
            y: q
        }, ae = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
        re = {
            hs: 1,
            rg: 1
        }, se = /,?([achlmqrstvxz]),?/gi,
        oe = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
        le = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
        de = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,
        ue = (n._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/, {}),
        ce = function(t, e) {
            return Z(t) - Z(e)
        }, he = function() {}, pe = function(t) {
            return t
        }, fe = n._rectPath = function(t, e, n, i, a) {
            return a ? [
                ["M", t + a, e],
                ["l", n - 2 * a, 0],
                ["a", a, a, 0, 0, 1, a, a],
                ["l", 0, i - 2 * a],
                ["a", a, a, 0, 0, 1, -a, a],
                ["l", 2 * a - n, 0],
                ["a", a, a, 0, 0, 1, -a, -a],
                ["l", 0, 2 * a - i],
                ["a", a, a, 0, 0, 1, a, -a],
                ["z"]
            ] : [
                ["M", t, e],
                ["l", n, 0],
                ["l", 0, i],
                ["l", -n, 0],
                ["z"]
            ]
        }, me = function(t, e, n, i) {
            return null == i && (i = n), [
                ["M", t, e],
                ["m", 0, -i],
                ["a", n, i, 0, 1, 1, 0, 2 * i],
                ["a", n, i, 0, 1, 1, 0, -2 * i],
                ["z"]
            ]
        }, _e = n._getPath = {
            path: function(t) {
                return t.attr("path")
            },
            circle: function(t) {
                var e = t.attrs;
                return me(e.cx, e.cy, e.r)
            },
            ellipse: function(t) {
                var e = t.attrs;
                return me(e.cx, e.cy, e.rx, e.ry)
            },
            rect: function(t) {
                var e = t.attrs;
                return fe(e.x, e.y, e.width, e.height, e.r)
            },
            image: function(t) {
                var e = t.attrs;
                return fe(e.x, e.y, e.width, e.height)
            },
            text: function(t) {
                var e = t._getBBox();
                return fe(e.x, e.y, e.width, e.height)
            },
            set: function(t) {
                var e = t._getBBox();
                return fe(e.x, e.y, e.width, e.height)
            }
        }, ge = n.mapPath = function(t, e) {
            if (!e) return t;
            var n, i, a, r, s, o, l;
            for (t = Ie(t), a = 0, s = t.length; s > a; a++)
                for (l = t[a], r = 1, o = l.length; o > r; r += 2) n = e.x(l[r], l[r + 1]), i = e.y(l[r], l[r + 1]), l[r] = n, l[r + 1] = i;
            return t
        };
    if (n._g = T, n.type = T.win.SVGAngle || T.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML", "VML" == n.type) {
        var ye, ve = T.doc.createElement("div");
        if (ve.innerHTML = '<v:shape adj="1"/>', ye = ve.firstChild, ye.style.behavior = "url(#default#VML)", !ye || "object" != typeof ye.adj) return n.type = F;
        ve = null
    }
    n.svg = !(n.vml = "VML" == n.type), n._Paper = Y, n.fn = w = Y.prototype = n.prototype, n._id = 0, n._oid = 0, n.is = function(t, e) {
        return e = P.call(e), "finite" == e ? !X[D](+t) : "array" == e ? t instanceof Array : "null" == e && null === t || e == typeof t && null !== t || "object" == e && t === Object(t) || "array" == e && Array.isArray && Array.isArray(t) || G.call(t).slice(8, -1).toLowerCase() == e
    }, n.angle = function(t, e, i, a, r, s) {
        if (null == r) {
            var o = t - i,
                l = e - a;
            return o || l ? (180 + 180 * W.atan2(-l, -o) / R + 360) % 360 : 0
        }
        return n.angle(t, e, r, s) - n.angle(i, a, r, s)
    }, n.rad = function(t) {
        return t % 360 * R / 180
    }, n.deg = function(t) {
        return 180 * t / R % 360
    }, n.snapTo = function(t, e, i) {
        if (i = n.is(i, "finite") ? i : 10, n.is(t, V)) {
            for (var a = t.length; a--;)
                if (B(t[a] - e) <= i) return t[a]
        } else {
            t = +t;
            var r = e % t;
            if (i > r) return e - r;
            if (r > t - i) return e - r + t
        }
        return e
    }, n.createUUID = function(t, e) {
        return function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(t, e).toUpperCase()
        }
    }(/[xy]/g, function(t) {
        var e = 0 | 16 * W.random(),
            n = "x" == t ? e : 8 | 3 & e;
        return n.toString(16)
    }), n.setWindow = function(t) {
        e("raphael.setWindow", n, T.win, t), T.win = t, T.doc = T.win.document, n._engine.initWin && n._engine.initWin(T.win)
    };
    var be = function(t) {
        if (n.vml) {
            var e, i = /^\s+|\s+$/g;
            try {
                var a = new ActiveXObject("htmlfile");
                a.write("<body>"), a.close(), e = a.body
            } catch (s) {
                e = createPopup().document.body
            }
            var o = e.createTextRange();
            be = r(function(t) {
                try {
                    e.style.color = j(t).replace(i, F);
                    var n = o.queryCommandValue("ForeColor");
                    return n = (255 & n) << 16 | 65280 & n | (16711680 & n) >>> 16, "#" + ("000000" + n.toString(16)).slice(-6)
                } catch (a) {
                    return "none"
                }
            })
        } else {
            var l = T.doc.createElement("i");
            l.title = "RaphaÃ«l Colour Picker", l.style.display = "none", T.doc.body.appendChild(l), be = r(function(t) {
                return l.style.color = t, T.doc.defaultView.getComputedStyle(l, F).getPropertyValue("color")
            })
        }
        return be(t)
    }, we = function() {
            return "hsb(" + [this.h, this.s, this.b] + ")"
        }, Me = function() {
            return "hsl(" + [this.h, this.s, this.l] + ")"
        }, Le = function() {
            return this.hex
        }, xe = function(t, e, i) {
            if (null == e && n.is(t, "object") && "r" in t && "g" in t && "b" in t && (i = t.b, e = t.g, t = t.r), null == e && n.is(t, U)) {
                var a = n.getRGB(t);
                t = a.r, e = a.g, i = a.b
            }
            return (t > 1 || e > 1 || i > 1) && (t /= 255, e /= 255, i /= 255), [t, e, i]
        }, De = function(t, e, i, a) {
            t *= 255, e *= 255, i *= 255;
            var r = {
                r: t,
                g: e,
                b: i,
                hex: n.rgb(t, e, i),
                toString: Le
            };
            return n.is(a, "finite") && (r.opacity = a), r
        };
    n.color = function(t) {
        var e;
        return n.is(t, "object") && "h" in t && "s" in t && "b" in t ? (e = n.hsb2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.hex = e.hex) : n.is(t, "object") && "h" in t && "s" in t && "l" in t ? (e = n.hsl2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.hex = e.hex) : (n.is(t, "string") && (t = n.getRGB(t)), n.is(t, "object") && "r" in t && "g" in t && "b" in t ? (e = n.rgb2hsl(t), t.h = e.h, t.s = e.s, t.l = e.l, e = n.rgb2hsb(t), t.v = e.b) : (t = {
            hex: "none"
        }, t.r = t.g = t.b = t.h = t.s = t.v = t.l = -1)), t.toString = Le, t
    }, n.hsb2rgb = function(t, e, n, i) {
        this.is(t, "object") && "h" in t && "s" in t && "b" in t && (n = t.b, e = t.s, t = t.h, i = t.o), t *= 360;
        var a, r, s, o, l;
        return t = t % 360 / 60, l = n * e, o = l * (1 - B(t % 2 - 1)), a = r = s = n - l, t = ~~t, a += [l, o, 0, 0, o, l][t], r += [o, l, l, o, 0, 0][t], s += [0, 0, o, l, l, o][t], De(a, r, s, i)
    }, n.hsl2rgb = function(t, e, n, i) {
        this.is(t, "object") && "h" in t && "s" in t && "l" in t && (n = t.l, e = t.s, t = t.h), (t > 1 || e > 1 || n > 1) && (t /= 360, e /= 100, n /= 100), t *= 360;
        var a, r, s, o, l;
        return t = t % 360 / 60, l = 2 * e * (.5 > n ? n : 1 - n), o = l * (1 - B(t % 2 - 1)), a = r = s = n - l / 2, t = ~~t, a += [l, o, 0, 0, o, l][t], r += [o, l, l, o, 0, 0][t], s += [0, 0, o, l, l, o][t], De(a, r, s, i)
    }, n.rgb2hsb = function(t, e, n) {
        n = xe(t, e, n), t = n[0], e = n[1], n = n[2];
        var i, a, r, s;
        return r = O(t, e, n), s = r - $(t, e, n), i = 0 == s ? null : r == t ? (e - n) / s : r == e ? (n - t) / s + 2 : (t - e) / s + 4, i = 60 * ((i + 360) % 6) / 360, a = 0 == s ? 0 : s / r, {
            h: i,
            s: a,
            b: r,
            toString: we
        }
    }, n.rgb2hsl = function(t, e, n) {
        n = xe(t, e, n), t = n[0], e = n[1], n = n[2];
        var i, a, r, s, o, l;
        return s = O(t, e, n), o = $(t, e, n), l = s - o, i = 0 == l ? null : s == t ? (e - n) / l : s == e ? (n - t) / l + 2 : (t - e) / l + 4, i = 60 * ((i + 360) % 6) / 360, r = (s + o) / 2, a = 0 == l ? 0 : .5 > r ? l / (2 * r) : l / (2 - 2 * r), {
            h: i,
            s: a,
            l: r,
            toString: Me
        }
    }, n._path2string = function() {
        return this.join(",").replace(se, "$1")
    }, n._preload = function(t, e) {
        var n = T.doc.createElement("img");
        n.style.cssText = "position:absolute;left:-9999em;top:-9999em", n.onload = function() {
            e.call(this), this.onload = null, T.doc.body.removeChild(this)
        }, n.onerror = function() {
            T.doc.body.removeChild(this)
        }, T.doc.body.appendChild(n), n.src = t
    }, n.getRGB = r(function(t) {
        if (!t || (t = j(t)).indexOf("-") + 1) return {
            r: -1,
            g: -1,
            b: -1,
            hex: "none",
            error: 1,
            toString: s
        };
        if ("none" == t) return {
            r: -1,
            g: -1,
            b: -1,
            hex: "none",
            toString: s
        };
        !(re[D](t.toLowerCase().substring(0, 2)) || "#" == t.charAt()) && (t = be(t));
        var e, i, a, r, o, l, d = t.match(J);
        return d ? (d[2] && (a = te(d[2].substring(5), 16), i = te(d[2].substring(3, 5), 16), e = te(d[2].substring(1, 3), 16)), d[3] && (a = te((o = d[3].charAt(3)) + o, 16), i = te((o = d[3].charAt(2)) + o, 16), e = te((o = d[3].charAt(1)) + o, 16)), d[4] && (l = d[4][N](ae), e = Z(l[0]), "%" == l[0].slice(-1) && (e *= 2.55), i = Z(l[1]), "%" == l[1].slice(-1) && (i *= 2.55), a = Z(l[2]), "%" == l[2].slice(-1) && (a *= 2.55), "rgba" == d[1].toLowerCase().slice(0, 4) && (r = Z(l[3])), l[3] && "%" == l[3].slice(-1) && (r /= 100)), d[5] ? (l = d[5][N](ae), e = Z(l[0]), "%" == l[0].slice(-1) && (e *= 2.55), i = Z(l[1]), "%" == l[1].slice(-1) && (i *= 2.55), a = Z(l[2]), "%" == l[2].slice(-1) && (a *= 2.55), ("deg" == l[0].slice(-3) || "Â°" == l[0].slice(-1)) && (e /= 360), "hsba" == d[1].toLowerCase().slice(0, 4) && (r = Z(l[3])), l[3] && "%" == l[3].slice(-1) && (r /= 100), n.hsb2rgb(e, i, a, r)) : d[6] ? (l = d[6][N](ae), e = Z(l[0]), "%" == l[0].slice(-1) && (e *= 2.55), i = Z(l[1]), "%" == l[1].slice(-1) && (i *= 2.55), a = Z(l[2]), "%" == l[2].slice(-1) && (a *= 2.55), ("deg" == l[0].slice(-3) || "Â°" == l[0].slice(-1)) && (e /= 360), "hsla" == d[1].toLowerCase().slice(0, 4) && (r = Z(l[3])), l[3] && "%" == l[3].slice(-1) && (r /= 100), n.hsl2rgb(e, i, a, r)) : (d = {
            r: e,
            g: i,
            b: a,
            toString: s
        }, d.hex = "#" + (16777216 | a | i << 8 | e << 16).toString(16).slice(1), n.is(r, "finite") && (d.opacity = r), d)) : {
            r: -1,
            g: -1,
            b: -1,
            hex: "none",
            error: 1,
            toString: s
        }
    }, n), n.hsb = r(function(t, e, i) {
        return n.hsb2rgb(t, e, i).hex
    }), n.hsl = r(function(t, e, i) {
        return n.hsl2rgb(t, e, i).hex
    }), n.rgb = r(function(t, e, n) {
        return "#" + (16777216 | n | e << 8 | t << 16).toString(16).slice(1)
    }), n.getColor = function(t) {
        var e = this.getColor.start = this.getColor.start || {
            h: 0,
            s: 1,
            b: t || .75
        }, n = this.hsb2rgb(e.h, e.s, e.b);
        return e.h += .075, e.h > 1 && (e.h = 0, e.s -= .2, e.s <= 0 && (this.getColor.start = {
            h: 0,
            s: 1,
            b: e.b
        })), n.hex
    }, n.getColor.reset = function() {
        delete this.start
    }, n.parsePathString = function(t) {
        if (!t) return null;
        var e = Te(t);
        if (e.arr) return Ye(e.arr);
        var i = {
            a: 7,
            c: 6,
            h: 1,
            l: 2,
            m: 2,
            r: 4,
            q: 4,
            s: 4,
            t: 2,
            v: 1,
            z: 0
        }, a = [];
        return n.is(t, V) && n.is(t[0], V) && (a = Ye(t)), a.length || j(t).replace(oe, function(t, e, n) {
            var r = [],
                s = e.toLowerCase();
            if (n.replace(de, function(t, e) {
                e && r.push(+e)
            }), "m" == s && r.length > 2 && (a.push([e][C](r.splice(0, 2))), s = "l", e = "m" == e ? "l" : "L"), "r" == s) a.push([e][C](r));
            else
                for (; r.length >= i[s] && (a.push([e][C](r.splice(0, i[s]))), i[s]););
        }), a.toString = n._path2string, e.arr = Ye(a), a
    }, n.parseTransformString = r(function(t) {
        if (!t) return null;
        var e = [];
        return n.is(t, V) && n.is(t[0], V) && (e = Ye(t)), e.length || j(t).replace(le, function(t, n, i) {
            var a = [];
            P.call(n), i.replace(de, function(t, e) {
                e && a.push(+e)
            }), e.push([n][C](a))
        }), e.toString = n._path2string, e
    });
    var Te = function(t) {
        var e = Te.ps = Te.ps || {};
        return e[t] ? e[t].sleep = 100 : e[t] = {
            sleep: 100
        }, setTimeout(function() {
            for (var n in e) e[D](n) && n != t && (e[n].sleep--, !e[n].sleep && delete e[n])
        }), e[t]
    };
    n.findDotsAtSegment = function(t, e, n, i, a, r, s, o, l) {
        var d = 1 - l,
            u = z(d, 3),
            c = z(d, 2),
            h = l * l,
            p = h * l,
            f = u * t + 3 * c * l * n + 3 * d * l * l * a + p * s,
            m = u * e + 3 * c * l * i + 3 * d * l * l * r + p * o,
            _ = t + 2 * l * (n - t) + h * (a - 2 * n + t),
            g = e + 2 * l * (i - e) + h * (r - 2 * i + e),
            y = n + 2 * l * (a - n) + h * (s - 2 * a + n),
            v = i + 2 * l * (r - i) + h * (o - 2 * r + i),
            b = d * t + l * n,
            w = d * e + l * i,
            M = d * a + l * s,
            L = d * r + l * o,
            x = 90 - 180 * W.atan2(_ - y, g - v) / R;
        return (_ > y || v > g) && (x += 180), {
            x: f,
            y: m,
            m: {
                x: _,
                y: g
            },
            n: {
                x: y,
                y: v
            },
            start: {
                x: b,
                y: w
            },
            end: {
                x: M,
                y: L
            },
            alpha: x
        }
    }, n.bezierBBox = function(t, e, i, a, r, s, o, l) {
        n.is(t, "array") || (t = [t, e, i, a, r, s, o, l]);
        var d = Ne.apply(null, t);
        return {
            x: d.min.x,
            y: d.min.y,
            x2: d.max.x,
            y2: d.max.y,
            width: d.max.x - d.min.x,
            height: d.max.y - d.min.y
        }
    }, n.isPointInsideBBox = function(t, e, n) {
        return e >= t.x && e <= t.x2 && n >= t.y && n <= t.y2
    }, n.isBBoxIntersect = function(t, e) {
        var i = n.isPointInsideBBox;
        return i(e, t.x, t.y) || i(e, t.x2, t.y) || i(e, t.x, t.y2) || i(e, t.x2, t.y2) || i(t, e.x, e.y) || i(t, e.x2, e.y) || i(t, e.x, e.y2) || i(t, e.x2, e.y2) || (t.x < e.x2 && t.x > e.x || e.x < t.x2 && e.x > t.x) && (t.y < e.y2 && t.y > e.y || e.y < t.y2 && e.y > t.y)
    }, n.pathIntersection = function(t, e) {
        return p(t, e)
    }, n.pathIntersectionNumber = function(t, e) {
        return p(t, e, 1)
    }, n.isPointInsidePath = function(t, e, i) {
        var a = n.pathBBox(t);
        return n.isPointInsideBBox(a, e, i) && 1 == p(t, [
            ["M", e, i],
            ["H", a.x2 + 10]
        ], 1) % 2
    }, n._removedFactory = function(t) {
        return function() {
            e("raphael.log", null, "RaphaÃ«l: you are calling to method â€œ" + t + "â€ of removed object", t)
        }
    };
    var ke = n.pathBBox = function(t) {
        var e = Te(t);
        if (e.bbox) return i(e.bbox);
        if (!t) return {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            x2: 0,
            y2: 0
        };
        t = Ie(t);
        for (var n, a = 0, r = 0, s = [], o = [], l = 0, d = t.length; d > l; l++)
            if (n = t[l], "M" == n[0]) a = n[1], r = n[2], s.push(a), o.push(r);
            else {
                var u = Ne(a, r, n[1], n[2], n[3], n[4], n[5], n[6]);
                s = s[C](u.min.x, u.max.x), o = o[C](u.min.y, u.max.y), a = n[5], r = n[6]
            }
        var c = $[S](0, s),
            h = $[S](0, o),
            p = O[S](0, s),
            f = O[S](0, o),
            m = p - c,
            _ = f - h,
            g = {
                x: c,
                y: h,
                x2: p,
                y2: f,
                width: m,
                height: _,
                cx: c + m / 2,
                cy: h + _ / 2
            };
        return e.bbox = i(g), g
    }, Ye = function(t) {
            var e = i(t);
            return e.toString = n._path2string, e
        }, Se = n._pathToRelative = function(t) {
            var e = Te(t);
            if (e.rel) return Ye(e.rel);
            n.is(t, V) && n.is(t && t[0], V) || (t = n.parsePathString(t));
            var i = [],
                a = 0,
                r = 0,
                s = 0,
                o = 0,
                l = 0;
            "M" == t[0][0] && (a = t[0][1], r = t[0][2], s = a, o = r, l++, i.push(["M", a, r]));
            for (var d = l, u = t.length; u > d; d++) {
                var c = i[d] = [],
                    h = t[d];
                if (h[0] != P.call(h[0])) switch (c[0] = P.call(h[0]), c[0]) {
                    case "a":
                        c[1] = h[1], c[2] = h[2], c[3] = h[3], c[4] = h[4], c[5] = h[5], c[6] = +(h[6] - a).toFixed(3), c[7] = +(h[7] - r).toFixed(3);
                        break;
                    case "v":
                        c[1] = +(h[1] - r).toFixed(3);
                        break;
                    case "m":
                        s = h[1], o = h[2];
                    default:
                        for (var p = 1, f = h.length; f > p; p++) c[p] = +(h[p] - (p % 2 ? a : r)).toFixed(3)
                } else {
                    c = i[d] = [], "m" == h[0] && (s = h[1] + a, o = h[2] + r);
                    for (var m = 0, _ = h.length; _ > m; m++) i[d][m] = h[m]
                }
                var g = i[d].length;
                switch (i[d][0]) {
                    case "z":
                        a = s, r = o;
                        break;
                    case "h":
                        a += +i[d][g - 1];
                        break;
                    case "v":
                        r += +i[d][g - 1];
                        break;
                    default:
                        a += +i[d][g - 2], r += +i[d][g - 1]
                }
            }
            return i.toString = n._path2string, e.rel = Ye(i), i
        }, Ce = n._pathToAbsolute = function(t) {
            var e = Te(t);
            if (e.abs) return Ye(e.abs);
            if (n.is(t, V) && n.is(t && t[0], V) || (t = n.parsePathString(t)), !t || !t.length) return [["M", 0, 0]];
            var i = [],
                a = 0,
                r = 0,
                s = 0,
                l = 0,
                d = 0;
            "M" == t[0][0] && (a = +t[0][1], r = +t[0][2], s = a, l = r, d++, i[0] = ["M", a, r]);
            for (var u, c, h = 3 == t.length && "M" == t[0][0] && "R" == t[1][0].toUpperCase() && "Z" == t[2][0].toUpperCase(), p = d, f = t.length; f > p; p++) {
                if (i.push(u = []), c = t[p], c[0] != ee.call(c[0])) switch (u[0] = ee.call(c[0]), u[0]) {
                    case "A":
                        u[1] = c[1], u[2] = c[2], u[3] = c[3], u[4] = c[4], u[5] = c[5], u[6] = +(c[6] + a), u[7] = +(c[7] + r);
                        break;
                    case "V":
                        u[1] = +c[1] + r;
                        break;
                    case "H":
                        u[1] = +c[1] + a;
                        break;
                    case "R":
                        for (var m = [a, r][C](c.slice(1)), _ = 2, g = m.length; g > _; _++) m[_] = +m[_] + a, m[++_] = +m[_] + r;
                        i.pop(), i = i[C](o(m, h));
                        break;
                    case "M":
                        s = +c[1] + a, l = +c[2] + r;
                    default:
                        for (_ = 1, g = c.length; g > _; _++) u[_] = +c[_] + (_ % 2 ? a : r)
                } else if ("R" == c[0]) m = [a, r][C](c.slice(1)), i.pop(), i = i[C](o(m, h)), u = ["R"][C](c.slice(-2));
                else
                    for (var y = 0, v = c.length; v > y; y++) u[y] = c[y];
                switch (u[0]) {
                    case "Z":
                        a = s, r = l;
                        break;
                    case "H":
                        a = u[1];
                        break;
                    case "V":
                        r = u[1];
                        break;
                    case "M":
                        s = u[u.length - 2], l = u[u.length - 1];
                    default:
                        a = u[u.length - 2], r = u[u.length - 1]
                }
            }
            return i.toString = n._path2string, e.abs = Ye(i), i
        }, Ae = function(t, e, n, i) {
            return [t, e, n, i, n, i]
        }, Fe = function(t, e, n, i, a, r) {
            var s = 1 / 3,
                o = 2 / 3;
            return [s * t + o * n, s * e + o * i, s * a + o * n, s * r + o * i, a, r]
        }, Ee = function(t, e, n, i, a, s, o, l, d, u) {
            var c, h = 120 * R / 180,
                p = R / 180 * (+a || 0),
                f = [],
                m = r(function(t, e, n) {
                    var i = t * W.cos(n) - e * W.sin(n),
                        a = t * W.sin(n) + e * W.cos(n);
                    return {
                        x: i,
                        y: a
                    }
                });
            if (u) x = u[0], D = u[1], M = u[2], L = u[3];
            else {
                c = m(t, e, -p), t = c.x, e = c.y, c = m(l, d, -p), l = c.x, d = c.y;
                var _ = (W.cos(R / 180 * a), W.sin(R / 180 * a), (t - l) / 2),
                    g = (e - d) / 2,
                    y = _ * _ / (n * n) + g * g / (i * i);
                y > 1 && (y = W.sqrt(y), n = y * n, i = y * i);
                var v = n * n,
                    b = i * i,
                    w = (s == o ? -1 : 1) * W.sqrt(B((v * b - v * g * g - b * _ * _) / (v * g * g + b * _ * _))),
                    M = w * n * g / i + (t + l) / 2,
                    L = w * -i * _ / n + (e + d) / 2,
                    x = W.asin(((e - L) / i).toFixed(9)),
                    D = W.asin(((d - L) / i).toFixed(9));
                x = M > t ? R - x : x, D = M > l ? R - D : D, 0 > x && (x = 2 * R + x), 0 > D && (D = 2 * R + D), o && x > D && (x -= 2 * R), !o && D > x && (D -= 2 * R)
            }
            var T = D - x;
            if (B(T) > h) {
                var k = D,
                    Y = l,
                    S = d;
                D = x + h * (o && D > x ? 1 : -1), l = M + n * W.cos(D), d = L + i * W.sin(D), f = Ee(l, d, n, i, a, 0, o, Y, S, [D, k, M, L])
            }
            T = D - x;
            var A = W.cos(x),
                F = W.sin(x),
                E = W.cos(D),
                j = W.sin(D),
                I = W.tan(T / 4),
                H = 4 / 3 * n * I,
                P = 4 / 3 * i * I,
                O = [t, e],
                $ = [t + H * F, e - P * A],
                z = [l + H * j, d - P * E],
                q = [l, d];
            if ($[0] = 2 * O[0] - $[0], $[1] = 2 * O[1] - $[1], u) return [$, z, q][C](f);
            f = [$, z, q][C](f).join()[N](",");
            for (var U = [], V = 0, G = f.length; G > V; V++) U[V] = V % 2 ? m(f[V - 1], f[V], p).y : m(f[V], f[V + 1], p).x;
            return U
        }, je = function(t, e, n, i, a, r, s, o, l) {
            var d = 1 - l;
            return {
                x: z(d, 3) * t + 3 * z(d, 2) * l * n + 3 * d * l * l * a + z(l, 3) * s,
                y: z(d, 3) * e + 3 * z(d, 2) * l * i + 3 * d * l * l * r + z(l, 3) * o
            }
        }, Ne = r(function(t, e, n, i, a, r, s, o) {
            var l, d = a - 2 * n + t - (s - 2 * a + n),
                u = 2 * (n - t) - 2 * (a - n),
                c = t - n,
                h = (-u + W.sqrt(u * u - 4 * d * c)) / 2 / d,
                p = (-u - W.sqrt(u * u - 4 * d * c)) / 2 / d,
                f = [e, o],
                m = [t, s];
            return B(h) > "1e12" && (h = .5), B(p) > "1e12" && (p = .5), h > 0 && 1 > h && (l = je(t, e, n, i, a, r, s, o, h), m.push(l.x), f.push(l.y)), p > 0 && 1 > p && (l = je(t, e, n, i, a, r, s, o, p), m.push(l.x), f.push(l.y)), d = r - 2 * i + e - (o - 2 * r + i), u = 2 * (i - e) - 2 * (r - i), c = e - i, h = (-u + W.sqrt(u * u - 4 * d * c)) / 2 / d, p = (-u - W.sqrt(u * u - 4 * d * c)) / 2 / d, B(h) > "1e12" && (h = .5), B(p) > "1e12" && (p = .5), h > 0 && 1 > h && (l = je(t, e, n, i, a, r, s, o, h), m.push(l.x), f.push(l.y)), p > 0 && 1 > p && (l = je(t, e, n, i, a, r, s, o, p), m.push(l.x), f.push(l.y)), {
                min: {
                    x: $[S](0, m),
                    y: $[S](0, f)
                },
                max: {
                    x: O[S](0, m),
                    y: O[S](0, f)
                }
            }
        }),
        Ie = n._path2curve = r(function(t, e) {
            var n = !e && Te(t);
            if (!e && n.curve) return Ye(n.curve);
            for (var i = Ce(t), a = e && Ce(e), r = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                }, s = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                }, o = (function(t, e, n) {
                    var i, a;
                    if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
                    switch (!(t[0] in {
                        T: 1,
                        Q: 1
                    }) && (e.qx = e.qy = null), t[0]) {
                        case "M":
                            e.X = t[1], e.Y = t[2];
                            break;
                        case "A":
                            t = ["C"][C](Ee[S](0, [e.x, e.y][C](t.slice(1))));
                            break;
                        case "S":
                            "C" == n || "S" == n ? (i = 2 * e.x - e.bx, a = 2 * e.y - e.by) : (i = e.x, a = e.y), t = ["C", i, a][C](t.slice(1));
                            break;
                        case "T":
                            "Q" == n || "T" == n ? (e.qx = 2 * e.x - e.qx, e.qy = 2 * e.y - e.qy) : (e.qx = e.x, e.qy = e.y), t = ["C"][C](Fe(e.x, e.y, e.qx, e.qy, t[1], t[2]));
                            break;
                        case "Q":
                            e.qx = t[1], e.qy = t[2], t = ["C"][C](Fe(e.x, e.y, t[1], t[2], t[3], t[4]));
                            break;
                        case "L":
                            t = ["C"][C](Ae(e.x, e.y, t[1], t[2]));
                            break;
                        case "H":
                            t = ["C"][C](Ae(e.x, e.y, t[1], e.y));
                            break;
                        case "V":
                            t = ["C"][C](Ae(e.x, e.y, e.x, t[1]));
                            break;
                        case "Z":
                            t = ["C"][C](Ae(e.x, e.y, e.X, e.Y))
                    }
                    return t
                }), l = function(t, e) {
                    if (t[e].length > 7) {
                        t[e].shift();
                        for (var n = t[e]; n.length;) t.splice(e++, 0, ["C"][C](n.splice(0, 6)));
                        t.splice(e, 1), c = O(i.length, a && a.length || 0)
                    }
                }, d = function(t, e, n, r, s) {
                    t && e && "M" == t[s][0] && "M" != e[s][0] && (e.splice(s, 0, ["M", r.x, r.y]), n.bx = 0, n.by = 0, n.x = t[s][1], n.y = t[s][2], c = O(i.length, a && a.length || 0))
                }, u = 0, c = O(i.length, a && a.length || 0); c > u; u++) {
                i[u] = o(i[u], r), l(i, u), a && (a[u] = o(a[u], s)), a && l(a, u), d(i, a, r, s, u), d(a, i, s, r, u);
                var h = i[u],
                    p = a && a[u],
                    f = h.length,
                    m = a && p.length;
                r.x = h[f - 2], r.y = h[f - 1], r.bx = Z(h[f - 4]) || r.x, r.by = Z(h[f - 3]) || r.y, s.bx = a && (Z(p[m - 4]) || s.x), s.by = a && (Z(p[m - 3]) || s.y), s.x = a && p[m - 2], s.y = a && p[m - 1]
            }
            return a || (n.curve = Ye(i)), a ? [i, a] : i
        }, null, Ye),
        He = (n._parseDots = r(function(t) {
            for (var e = [], i = 0, a = t.length; a > i; i++) {
                var r = {}, s = t[i].match(/^([^:]*):?([\d\.]*)/);
                if (r.color = n.getRGB(s[1]), r.color.error) return null;
                r.color = r.color.hex, s[2] && (r.offset = s[2] + "%"), e.push(r)
            }
            for (i = 1, a = e.length - 1; a > i; i++)
                if (!e[i].offset) {
                    for (var o = Z(e[i - 1].offset || 0), l = 0, d = i + 1; a > d; d++)
                        if (e[d].offset) {
                            l = e[d].offset;
                            break
                        }
                    l || (l = 100, d = a), l = Z(l);
                    for (var u = (l - o) / (d - i + 1); d > i; i++) o += u, e[i].offset = o + "%"
                }
            return e
        }), n._tear = function(t, e) {
            t == e.top && (e.top = t.prev), t == e.bottom && (e.bottom = t.next), t.next && (t.next.prev = t.prev), t.prev && (t.prev.next = t.next)
        }),
        Pe = (n._tofront = function(t, e) {
            e.top !== t && (He(t, e), t.next = null, t.prev = e.top, e.top.next = t, e.top = t)
        }, n._toback = function(t, e) {
            e.bottom !== t && (He(t, e), t.next = e.bottom, t.prev = null, e.bottom.prev = t, e.bottom = t)
        }, n._insertafter = function(t, e, n) {
            He(t, n), e == n.top && (n.top = t), e.next && (e.next.prev = t), t.next = e.next, t.prev = e, e.next = t
        }, n._insertbefore = function(t, e, n) {
            He(t, n), e == n.bottom && (n.bottom = t), e.prev && (e.prev.next = t), t.prev = e.prev, e.prev = t, t.next = e
        }, n.toMatrix = function(t, e) {
            var n = ke(t),
                i = {
                    _: {
                        transform: F
                    },
                    getBBox: function() {
                        return n
                    }
                };
            return We(i, e), i.matrix
        }),
        We = (n.transformPath = function(t, e) {
            return ge(t, Pe(t, e))
        }, n._extractTransform = function(t, e) {
            if (null == e) return t._.transform;
            e = j(e).replace(/\.{3}|\u2026/g, t._.transform || F);
            var i = n.parseTransformString(e),
                a = 0,
                r = 0,
                s = 0,
                o = 1,
                l = 1,
                d = t._,
                u = new f;
            if (d.transform = i || [], i)
                for (var c = 0, h = i.length; h > c; c++) {
                    var p, m, _, g, y, v = i[c],
                        b = v.length,
                        w = j(v[0]).toLowerCase(),
                        M = v[0] != w,
                        L = M ? u.invert() : 0;
                    "t" == w && 3 == b ? M ? (p = L.x(0, 0), m = L.y(0, 0), _ = L.x(v[1], v[2]), g = L.y(v[1], v[2]), u.translate(_ - p, g - m)) : u.translate(v[1], v[2]) : "r" == w ? 2 == b ? (y = y || t.getBBox(1), u.rotate(v[1], y.x + y.width / 2, y.y + y.height / 2), a += v[1]) : 4 == b && (M ? (_ = L.x(v[2], v[3]), g = L.y(v[2], v[3]), u.rotate(v[1], _, g)) : u.rotate(v[1], v[2], v[3]), a += v[1]) : "s" == w ? 2 == b || 3 == b ? (y = y || t.getBBox(1), u.scale(v[1], v[b - 1], y.x + y.width / 2, y.y + y.height / 2), o *= v[1], l *= v[b - 1]) : 5 == b && (M ? (_ = L.x(v[3], v[4]), g = L.y(v[3], v[4]), u.scale(v[1], v[2], _, g)) : u.scale(v[1], v[2], v[3], v[4]), o *= v[1], l *= v[2]) : "m" == w && 7 == b && u.add(v[1], v[2], v[3], v[4], v[5], v[6]), d.dirtyT = 1, t.matrix = u
                }
            t.matrix = u, d.sx = o, d.sy = l, d.deg = a, d.dx = r = u.e, d.dy = s = u.f, 1 == o && 1 == l && !a && d.bbox ? (d.bbox.x += +r, d.bbox.y += +s) : d.dirtyT = 1
        }),
        Oe = function(t) {
            var e = t[0];
            switch (e.toLowerCase()) {
                case "t":
                    return [e, 0, 0];
                case "m":
                    return [e, 1, 0, 0, 1, 0, 0];
                case "r":
                    return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];
                case "s":
                    return 5 == t.length ? [e, 1, 1, t[3], t[4]] : 3 == t.length ? [e, 1, 1] : [e, 1]
            }
        }, $e = n._equaliseTransform = function(t, e) {
            e = j(e).replace(/\.{3}|\u2026/g, t), t = n.parseTransformString(t) || [], e = n.parseTransformString(e) || [];
            for (var i, a, r, s, o = O(t.length, e.length), l = [], d = [], u = 0; o > u; u++) {
                if (r = t[u] || Oe(e[u]), s = e[u] || Oe(r), r[0] != s[0] || "r" == r[0].toLowerCase() && (r[2] != s[2] || r[3] != s[3]) || "s" == r[0].toLowerCase() && (r[3] != s[3] || r[4] != s[4])) return;
                for (l[u] = [], d[u] = [], i = 0, a = O(r.length, s.length); a > i; i++) i in r && (l[u][i] = r[i]), i in s && (d[u][i] = s[i])
            }
            return {
                from: l,
                to: d
            }
        };
    n._getContainer = function(t, e, i, a) {
        var r;
        return r = null != a || n.is(t, "object") ? t : T.doc.getElementById(t), null != r ? r.tagName ? null == e ? {
            container: r,
            width: r.style.pixelWidth || r.offsetWidth,
            height: r.style.pixelHeight || r.offsetHeight
        } : {
            container: r,
            width: e,
            height: i
        } : {
            container: 1,
            x: t,
            y: e,
            width: i,
            height: a
        } : void 0
    }, n.pathToRelative = Se, n._engine = {}, n.path2curve = Ie, n.matrix = function(t, e, n, i, a, r) {
        return new f(t, e, n, i, a, r)
    },
    function(t) {
        function e(t) {
            return t[0] * t[0] + t[1] * t[1]
        }

        function i(t) {
            var n = W.sqrt(e(t));
            t[0] && (t[0] /= n), t[1] && (t[1] /= n)
        }
        t.add = function(t, e, n, i, a, r) {
            var s, o, l, d, u = [
                    [],
                    [],
                    []
                ],
                c = [
                    [this.a, this.c, this.e],
                    [this.b, this.d, this.f],
                    [0, 0, 1]
                ],
                h = [
                    [t, n, a],
                    [e, i, r],
                    [0, 0, 1]
                ];
            for (t && t instanceof f && (h = [
                [t.a, t.c, t.e],
                [t.b, t.d, t.f],
                [0, 0, 1]
            ]), s = 0; 3 > s; s++)
                for (o = 0; 3 > o; o++) {
                    for (d = 0, l = 0; 3 > l; l++) d += c[s][l] * h[l][o];
                    u[s][o] = d
                }
            this.a = u[0][0], this.b = u[1][0], this.c = u[0][1], this.d = u[1][1], this.e = u[0][2], this.f = u[1][2]
        }, t.invert = function() {
            var t = this,
                e = t.a * t.d - t.b * t.c;
            return new f(t.d / e, -t.b / e, -t.c / e, t.a / e, (t.c * t.f - t.d * t.e) / e, (t.b * t.e - t.a * t.f) / e)
        }, t.clone = function() {
            return new f(this.a, this.b, this.c, this.d, this.e, this.f)
        }, t.translate = function(t, e) {
            this.add(1, 0, 0, 1, t, e)
        }, t.scale = function(t, e, n, i) {
            null == e && (e = t), (n || i) && this.add(1, 0, 0, 1, n, i), this.add(t, 0, 0, e, 0, 0), (n || i) && this.add(1, 0, 0, 1, -n, -i)
        }, t.rotate = function(t, e, i) {
            t = n.rad(t), e = e || 0, i = i || 0;
            var a = +W.cos(t).toFixed(9),
                r = +W.sin(t).toFixed(9);
            this.add(a, r, -r, a, e, i), this.add(1, 0, 0, 1, -e, -i)
        }, t.x = function(t, e) {
            return t * this.a + e * this.c + this.e
        }, t.y = function(t, e) {
            return t * this.b + e * this.d + this.f
        }, t.get = function(t) {
            return +this[j.fromCharCode(97 + t)].toFixed(4)
        }, t.toString = function() {
            return n.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join()
        }, t.toFilter = function() {
            return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')"
        }, t.offset = function() {
            return [this.e.toFixed(4), this.f.toFixed(4)]
        }, t.split = function() {
            var t = {};
            t.dx = this.e, t.dy = this.f;
            var a = [
                [this.a, this.c],
                [this.b, this.d]
            ];
            t.scalex = W.sqrt(e(a[0])), i(a[0]), t.shear = a[0][0] * a[1][0] + a[0][1] * a[1][1], a[1] = [a[1][0] - a[0][0] * t.shear, a[1][1] - a[0][1] * t.shear], t.scaley = W.sqrt(e(a[1])), i(a[1]), t.shear /= t.scaley;
            var r = -a[0][1],
                s = a[1][1];
            return 0 > s ? (t.rotate = n.deg(W.acos(s)), 0 > r && (t.rotate = 360 - t.rotate)) : t.rotate = n.deg(W.asin(r)), t.isSimple = !(+t.shear.toFixed(9) || t.scalex.toFixed(9) != t.scaley.toFixed(9) && t.rotate), t.isSuperSimple = !+t.shear.toFixed(9) && t.scalex.toFixed(9) == t.scaley.toFixed(9) && !t.rotate, t.noRotation = !+t.shear.toFixed(9) && !t.rotate, t
        }, t.toTransformString = function(t) {
            var e = t || this[N]();
            return e.isSimple ? (e.scalex = +e.scalex.toFixed(4), e.scaley = +e.scaley.toFixed(4), e.rotate = +e.rotate.toFixed(4), (e.dx || e.dy ? "t" + [e.dx, e.dy] : F) + (1 != e.scalex || 1 != e.scaley ? "s" + [e.scalex, e.scaley, 0, 0] : F) + (e.rotate ? "r" + [e.rotate, 0, 0] : F)) : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)]
        }
    }(f.prototype);
    var Be = navigator.userAgent.match(/Version\/(.*?)\s/) || navigator.userAgent.match(/Chrome\/(\d+)/);
    w.safari = "Apple Computer, Inc." == navigator.vendor && (Be && Be[1] < 4 || "iP" == navigator.platform.slice(0, 2)) || "Google Inc." == navigator.vendor && Be && Be[1] < 8 ? function() {
        var t = this.rect(-99, -99, this.width + 99, this.height + 99).attr({
            stroke: "none"
        });
        setTimeout(function() {
            t.remove()
        })
    } : he;
    for (var ze = function() {
        this.returnValue = !1
    }, Re = function() {
            return this.originalEvent.preventDefault()
        }, qe = function() {
            this.cancelBubble = !0
        }, Ue = function() {
            return this.originalEvent.stopPropagation()
        }, Ve = function(t) {
            var e = T.doc.documentElement.scrollTop || T.doc.body.scrollTop,
                n = T.doc.documentElement.scrollLeft || T.doc.body.scrollLeft;
            return {
                x: t.clientX + n,
                y: t.clientY + e
            }
        }, Ge = function() {
            return T.doc.addEventListener ? function(t, e, n, i) {
                var a = function(t) {
                    var e = Ve(t);
                    return n.call(i, t, e.x, e.y)
                };
                if (t.addEventListener(e, a, !1), A && H[e]) {
                    var r = function(e) {
                        for (var a = Ve(e), r = e, s = 0, o = e.targetTouches && e.targetTouches.length; o > s; s++)
                            if (e.targetTouches[s].target == t) {
                                e = e.targetTouches[s], e.originalEvent = r, e.preventDefault = Re, e.stopPropagation = Ue;
                                break
                            }
                        return n.call(i, e, a.x, a.y)
                    };
                    t.addEventListener(H[e], r, !1)
                }
                return function() {
                    return t.removeEventListener(e, a, !1), A && H[e] && t.removeEventListener(H[e], a, !1), !0
                }
            } : T.doc.attachEvent ? function(t, e, n, i) {
                var a = function(t) {
                    t = t || T.win.event;
                    var e = T.doc.documentElement.scrollTop || T.doc.body.scrollTop,
                        a = T.doc.documentElement.scrollLeft || T.doc.body.scrollLeft,
                        r = t.clientX + a,
                        s = t.clientY + e;
                    return t.preventDefault = t.preventDefault || ze, t.stopPropagation = t.stopPropagation || qe, n.call(i, t, r, s)
                };
                t.attachEvent("on" + e, a);
                var r = function() {
                    return t.detachEvent("on" + e, a), !0
                };
                return r
            } : void 0
        }(), Je = [], Xe = function(t) {
            for (var n, i = t.clientX, a = t.clientY, r = T.doc.documentElement.scrollTop || T.doc.body.scrollTop, s = T.doc.documentElement.scrollLeft || T.doc.body.scrollLeft, o = Je.length; o--;) {
                if (n = Je[o], A && t.touches) {
                    for (var l, d = t.touches.length; d--;)
                        if (l = t.touches[d], l.identifier == n.el._drag.id) {
                            i = l.clientX, a = l.clientY, (t.originalEvent ? t.originalEvent : t).preventDefault();
                            break
                        }
                } else t.preventDefault();
                var u, c = n.el.node,
                    h = c.nextSibling,
                    p = c.parentNode,
                    f = c.style.display;
                T.win.opera && p.removeChild(c), c.style.display = "none", u = n.el.paper.getElementByPoint(i, a), c.style.display = f, T.win.opera && (h ? p.insertBefore(c, h) : p.appendChild(c)), u && e("raphael.drag.over." + n.el.id, n.el, u), i += s, a += r, e("raphael.drag.move." + n.el.id, n.move_scope || n.el, i - n.el._drag.x, a - n.el._drag.y, i, a, t)
            }
        }, Ke = function(t) {
            n.unmousemove(Xe).unmouseup(Ke);
            for (var i, a = Je.length; a--;) i = Je[a], i.el._drag = {}, e("raphael.drag.end." + i.el.id, i.end_scope || i.start_scope || i.move_scope || i.el, t);
            Je = []
        }, Qe = n.el = {}, Ze = I.length; Ze--;)! function(t) {
        n[t] = Qe[t] = function(e, i) {
            return n.is(e, "function") && (this.events = this.events || [], this.events.push({
                name: t,
                f: e,
                unbind: Ge(this.shape || this.node || T.doc, t, e, i || this)
            })), this
        }, n["un" + t] = Qe["un" + t] = function(e) {
            for (var i = this.events || [], a = i.length; a--;) i[a].name != t || !n.is(e, "undefined") && i[a].f != e || (i[a].unbind(), i.splice(a, 1), !i.length && delete this.events);
            return this
        }
    }(I[Ze]);
    Qe.data = function(t, i) {
        var a = ue[this.id] = ue[this.id] || {};
        if (0 == arguments.length) return a;
        if (1 == arguments.length) {
            if (n.is(t, "object")) {
                for (var r in t) t[D](r) && this.data(r, t[r]);
                return this
            }
            return e("raphael.data.get." + this.id, this, a[t], t), a[t]
        }
        return a[t] = i, e("raphael.data.set." + this.id, this, i, t), this
    }, Qe.removeData = function(t) {
        return null == t ? ue[this.id] = {} : ue[this.id] && delete ue[this.id][t], this
    }, Qe.getData = function() {
        return i(ue[this.id] || {})
    }, Qe.hover = function(t, e, n, i) {
        return this.mouseover(t, n).mouseout(e, i || n)
    }, Qe.unhover = function(t, e) {
        return this.unmouseover(t).unmouseout(e)
    };
    var tn = [];
    Qe.drag = function(t, i, a, r, s, o) {
        function l(l) {
            (l.originalEvent || l).preventDefault();
            var d = l.clientX,
                u = l.clientY,
                c = T.doc.documentElement.scrollTop || T.doc.body.scrollTop,
                h = T.doc.documentElement.scrollLeft || T.doc.body.scrollLeft;
            if (this._drag.id = l.identifier, A && l.touches)
                for (var p, f = l.touches.length; f--;)
                    if (p = l.touches[f], this._drag.id = p.identifier, p.identifier == this._drag.id) {
                        d = p.clientX, u = p.clientY;
                        break
                    }
            this._drag.x = d + h, this._drag.y = u + c, !Je.length && n.mousemove(Xe).mouseup(Ke), Je.push({
                el: this,
                move_scope: r,
                start_scope: s,
                end_scope: o
            }), i && e.on("raphael.drag.start." + this.id, i), t && e.on("raphael.drag.move." + this.id, t), a && e.on("raphael.drag.end." + this.id, a), e("raphael.drag.start." + this.id, s || r || this, l.clientX + h, l.clientY + c, l)
        }
        return this._drag = {}, tn.push({
            el: this,
            start: l
        }), this.mousedown(l), this
    }, Qe.onDragOver = function(t) {
        t ? e.on("raphael.drag.over." + this.id, t) : e.unbind("raphael.drag.over." + this.id)
    }, Qe.undrag = function() {
        for (var t = tn.length; t--;) tn[t].el == this && (this.unmousedown(tn[t].start), tn.splice(t, 1), e.unbind("raphael.drag.*." + this.id));
        !tn.length && n.unmousemove(Xe).unmouseup(Ke), Je = []
    }, w.circle = function(t, e, i) {
        var a = n._engine.circle(this, t || 0, e || 0, i || 0);
        return this.__set__ && this.__set__.push(a), a
    }, w.rect = function(t, e, i, a, r) {
        var s = n._engine.rect(this, t || 0, e || 0, i || 0, a || 0, r || 0);
        return this.__set__ && this.__set__.push(s), s
    }, w.ellipse = function(t, e, i, a) {
        var r = n._engine.ellipse(this, t || 0, e || 0, i || 0, a || 0);
        return this.__set__ && this.__set__.push(r), r
    }, w.path = function(t) {
        t && !n.is(t, U) && !n.is(t[0], V) && (t += F);
        var e = n._engine.path(n.format[S](n, arguments), this);
        return this.__set__ && this.__set__.push(e), e
    }, w.image = function(t, e, i, a, r) {
        var s = n._engine.image(this, t || "about:blank", e || 0, i || 0, a || 0, r || 0);
        return this.__set__ && this.__set__.push(s), s
    }, w.text = function(t, e, i) {
        var a = n._engine.text(this, t || 0, e || 0, j(i));
        return this.__set__ && this.__set__.push(a), a
    }, w.set = function(t) {
        !n.is(t, "array") && (t = Array.prototype.splice.call(arguments, 0, arguments.length));
        var e = new pn(t);
        return this.__set__ && this.__set__.push(e), e.paper = this, e.type = "set", e
    }, w.setStart = function(t) {
        this.__set__ = t || this.set()
    }, w.setFinish = function() {
        var t = this.__set__;
        return delete this.__set__, t
    }, w.setSize = function(t, e) {
        return n._engine.setSize.call(this, t, e)
    }, w.setViewBox = function(t, e, i, a, r) {
        return n._engine.setViewBox.call(this, t, e, i, a, r)
    }, w.top = w.bottom = null, w.raphael = n;
    var en = function(t) {
        var e = t.getBoundingClientRect(),
            n = t.ownerDocument,
            i = n.body,
            a = n.documentElement,
            r = a.clientTop || i.clientTop || 0,
            s = a.clientLeft || i.clientLeft || 0,
            o = e.top + (T.win.pageYOffset || a.scrollTop || i.scrollTop) - r,
            l = e.left + (T.win.pageXOffset || a.scrollLeft || i.scrollLeft) - s;
        return {
            y: o,
            x: l
        }
    };
    w.getElementByPoint = function(t, e) {
        var n = this,
            i = n.canvas,
            a = T.doc.elementFromPoint(t, e);
        if (T.win.opera && "svg" == a.tagName) {
            var r = en(i),
                s = i.createSVGRect();
            s.x = t - r.x, s.y = e - r.y, s.width = s.height = 1;
            var o = i.getIntersectionList(s, null);
            o.length && (a = o[o.length - 1])
        }
        if (!a) return null;
        for (; a.parentNode && a != i.parentNode && !a.raphael;) a = a.parentNode;
        return a == n.canvas.parentNode && (a = i), a = a && a.raphael ? n.getById(a.raphaelid) : null
    }, w.getElementsByBBox = function(t) {
        var e = this.set();
        return this.forEach(function(i) {
            n.isBBoxIntersect(i.getBBox(), t) && e.push(i)
        }), e
    }, w.getById = function(t) {
        for (var e = this.bottom; e;) {
            if (e.id == t) return e;
            e = e.next
        }
        return null
    }, w.forEach = function(t, e) {
        for (var n = this.bottom; n;) {
            if (t.call(e, n) === !1) return this;
            n = n.next
        }
        return this
    }, w.getElementsByPoint = function(t, e) {
        var n = this.set();
        return this.forEach(function(i) {
            i.isPointInside(t, e) && n.push(i)
        }), n
    }, Qe.isPointInside = function(t, e) {
        var i = this.realPath = _e[this.type](this);
        return this.attr("transform") && this.attr("transform").length && (i = n.transformPath(i, this.attr("transform"))), n.isPointInsidePath(i, t, e)
    }, Qe.getBBox = function(t) {
        if (this.removed) return {};
        var e = this._;
        return t ? ((e.dirty || !e.bboxwt) && (this.realPath = _e[this.type](this), e.bboxwt = ke(this.realPath), e.bboxwt.toString = m, e.dirty = 0), e.bboxwt) : ((e.dirty || e.dirtyT || !e.bbox) && ((e.dirty || !this.realPath) && (e.bboxwt = 0, this.realPath = _e[this.type](this)), e.bbox = ke(ge(this.realPath, this.matrix)), e.bbox.toString = m, e.dirty = e.dirtyT = 0), e.bbox)
    }, Qe.clone = function() {
        if (this.removed) return null;
        var t = this.paper[this.type]().attr(this.attr());
        return this.__set__ && this.__set__.push(t), t
    }, Qe.glow = function(t) {
        if ("text" == this.type) return null;
        t = t || {};
        var e = {
            width: (t.width || 10) + (+this.attr("stroke-width") || 1),
            fill: t.fill || !1,
            opacity: t.opacity || .5,
            offsetx: t.offsetx || 0,
            offsety: t.offsety || 0,
            color: t.color || "#000"
        }, n = e.width / 2,
            i = this.paper,
            a = i.set(),
            r = this.realPath || _e[this.type](this);
        r = this.matrix ? ge(r, this.matrix) : r;
        for (var s = 1; n + 1 > s; s++) a.push(i.path(r).attr({
            stroke: e.color,
            fill: e.fill ? e.color : "none",
            "stroke-linejoin": "round",
            "stroke-linecap": "round",
            "stroke-width": +(e.width / n * s).toFixed(3),
            opacity: +(e.opacity / n).toFixed(3)
        }));
        return a.insertBefore(this).translate(e.offsetx, e.offsety)
    };
    var nn = function(t, e, i, a, r, s, o, l, c) {
        return null == c ? d(t, e, i, a, r, s, o, l) : n.findDotsAtSegment(t, e, i, a, r, s, o, l, u(t, e, i, a, r, s, o, l, c))
    }, an = function(t, e) {
            return function(i, a, r) {
                i = Ie(i);
                for (var s, o, l, d, u, c = "", h = {}, p = 0, f = 0, m = i.length; m > f; f++) {
                    if (l = i[f], "M" == l[0]) s = +l[1], o = +l[2];
                    else {
                        if (d = nn(s, o, l[1], l[2], l[3], l[4], l[5], l[6]), p + d > a) {
                            if (e && !h.start) {
                                if (u = nn(s, o, l[1], l[2], l[3], l[4], l[5], l[6], a - p), c += ["C" + u.start.x, u.start.y, u.m.x, u.m.y, u.x, u.y], r) return c;
                                h.start = c, c = ["M" + u.x, u.y + "C" + u.n.x, u.n.y, u.end.x, u.end.y, l[5], l[6]].join(), p += d, s = +l[5], o = +l[6];
                                continue
                            }
                            if (!t && !e) return u = nn(s, o, l[1], l[2], l[3], l[4], l[5], l[6], a - p), {
                                x: u.x,
                                y: u.y,
                                alpha: u.alpha
                            }
                        }
                        p += d, s = +l[5], o = +l[6]
                    }
                    c += l.shift() + l
                }
                return h.end = c, u = t ? p : e ? h : n.findDotsAtSegment(s, o, l[0], l[1], l[2], l[3], l[4], l[5], 1), u.alpha && (u = {
                    x: u.x,
                    y: u.y,
                    alpha: u.alpha
                }), u
            }
        }, rn = an(1),
        sn = an(),
        on = an(0, 1);
    n.getTotalLength = rn, n.getPointAtLength = sn, n.getSubpath = function(t, e, n) {
        if (this.getTotalLength(t) - n < 1e-6) return on(t, e).end;
        var i = on(t, n, 1);
        return e ? on(i, e).end : i
    }, Qe.getTotalLength = function() {
        var t = this.getPath();
        return t ? this.node.getTotalLength ? this.node.getTotalLength() : rn(t) : void 0
    }, Qe.getPointAtLength = function(t) {
        var e = this.getPath();
        return e ? sn(e, t) : void 0
    }, Qe.getPath = function() {
        var t, e = n._getPath[this.type];
        return "text" != this.type && "set" != this.type ? (e && (t = e(this)), t) : void 0
    }, Qe.getSubpath = function(t, e) {
        var i = this.getPath();
        return i ? n.getSubpath(i, t, e) : void 0
    };
    var ln = n.easing_formulas = {
        linear: function(t) {
            return t
        },
        "<": function(t) {
            return z(t, 1.7)
        },
        ">": function(t) {
            return z(t, .48)
        },
        "<>": function(t) {
            var e = .48 - t / 1.04,
                n = W.sqrt(.1734 + e * e),
                i = n - e,
                a = z(B(i), 1 / 3) * (0 > i ? -1 : 1),
                r = -n - e,
                s = z(B(r), 1 / 3) * (0 > r ? -1 : 1),
                o = a + s + .5;
            return 3 * (1 - o) * o * o + o * o * o
        },
        backIn: function(t) {
            var e = 1.70158;
            return t * t * ((e + 1) * t - e)
        },
        backOut: function(t) {
            t -= 1;
            var e = 1.70158;
            return t * t * ((e + 1) * t + e) + 1
        },
        elastic: function(t) {
            return t == !! t ? t : z(2, -10 * t) * W.sin(2 * (t - .075) * R / .3) + 1
        },
        bounce: function(t) {
            var e, n = 7.5625,
                i = 2.75;
            return 1 / i > t ? e = n * t * t : 2 / i > t ? (t -= 1.5 / i, e = n * t * t + .75) : 2.5 / i > t ? (t -= 2.25 / i, e = n * t * t + .9375) : (t -= 2.625 / i, e = n * t * t + .984375), e
        }
    };
    ln.easeIn = ln["ease-in"] = ln["<"], ln.easeOut = ln["ease-out"] = ln[">"], ln.easeInOut = ln["ease-in-out"] = ln["<>"], ln["back-in"] = ln.backIn, ln["back-out"] = ln.backOut;
    var dn = [],
        un = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(t) {
            setTimeout(t, 16)
        }, cn = function() {
            for (var t = +new Date, i = 0; i < dn.length; i++) {
                var a = dn[i];
                if (!a.el.removed && !a.paused) {
                    var r, s, o = t - a.start,
                        l = a.ms,
                        d = a.easing,
                        u = a.from,
                        c = a.diff,
                        h = a.to,
                        p = (a.t, a.el),
                        f = {}, m = {};
                    if (a.initstatus ? (o = (a.initstatus * a.anim.top - a.prev) / (a.percent - a.prev) * l, a.status = a.initstatus, delete a.initstatus, a.stop && dn.splice(i--, 1)) : a.status = (a.prev + (a.percent - a.prev) * (o / l)) / a.anim.top, !(0 > o))
                        if (l > o) {
                            var _ = d(o / l);
                            for (var g in u)
                                if (u[D](g)) {
                                    switch (ie[g]) {
                                        case q:
                                            r = +u[g] + _ * l * c[g];
                                            break;
                                        case "colour":
                                            r = "rgb(" + [hn(Q(u[g].r + _ * l * c[g].r)), hn(Q(u[g].g + _ * l * c[g].g)), hn(Q(u[g].b + _ * l * c[g].b))].join(",") + ")";
                                            break;
                                        case "path":
                                            r = [];
                                            for (var v = 0, b = u[g].length; b > v; v++) {
                                                r[v] = [u[g][v][0]];
                                                for (var w = 1, M = u[g][v].length; M > w; w++) r[v][w] = +u[g][v][w] + _ * l * c[g][v][w];
                                                r[v] = r[v].join(E)
                                            }
                                            r = r.join(E);
                                            break;
                                        case "transform":
                                            if (c[g].real)
                                                for (r = [], v = 0, b = u[g].length; b > v; v++)
                                                    for (r[v] = [u[g][v][0]], w = 1, M = u[g][v].length; M > w; w++) r[v][w] = u[g][v][w] + _ * l * c[g][v][w];
                                            else {
                                                var L = function(t) {
                                                    return +u[g][t] + _ * l * c[g][t]
                                                };
                                                r = [
                                                    ["m", L(0), L(1), L(2), L(3), L(4), L(5)]
                                                ]
                                            }
                                            break;
                                        case "csv":
                                            if ("clip-rect" == g)
                                                for (r = [], v = 4; v--;) r[v] = +u[g][v] + _ * l * c[g][v];
                                            break;
                                        default:
                                            var x = [][C](u[g]);
                                            for (r = [], v = p.paper.customAttributes[g].length; v--;) r[v] = +x[v] + _ * l * c[g][v]
                                    }
                                    f[g] = r
                                }
                            p.attr(f),
                            function(t, n, i) {
                                setTimeout(function() {
                                    e("raphael.anim.frame." + t, n, i)
                                })
                            }(p.id, p, a.anim)
                        } else {
                            if (function(t, i, a) {
                                setTimeout(function() {
                                    e("raphael.anim.frame." + i.id, i, a), e("raphael.anim.finish." + i.id, i, a), n.is(t, "function") && t.call(i)
                                })
                            }(a.callback, p, a.anim), p.attr(h), dn.splice(i--, 1), a.repeat > 1 && !a.next) {
                                for (s in h) h[D](s) && (m[s] = a.totalOrigin[s]);
                                a.el.attr(m), y(a.anim, a.el, a.anim.percents[0], null, a.totalOrigin, a.repeat - 1)
                            }
                            a.next && !a.stop && y(a.anim, a.el, a.next, null, a.totalOrigin, a.repeat)
                        }
                }
            }
            n.svg && p && p.paper && p.paper.safari(), dn.length && un(cn)
        }, hn = function(t) {
            return t > 255 ? 255 : 0 > t ? 0 : t
        };
    Qe.animateWith = function(t, e, i, a, r, s) {
        var o = this;
        if (o.removed) return s && s.call(o), o;
        var l = i instanceof g ? i : n.animation(i, a, r, s);
        y(l, o, l.percents[0], null, o.attr());
        for (var d = 0, u = dn.length; u > d; d++)
            if (dn[d].anim == e && dn[d].el == t) {
                dn[u - 1].start = dn[d].start;
                break
            }
        return o
    }, Qe.onAnimation = function(t) {
        return t ? e.on("raphael.anim.frame." + this.id, t) : e.unbind("raphael.anim.frame." + this.id), this
    }, g.prototype.delay = function(t) {
        var e = new g(this.anim, this.ms);
        return e.times = this.times, e.del = +t || 0, e
    }, g.prototype.repeat = function(t) {
        var e = new g(this.anim, this.ms);
        return e.del = this.del, e.times = W.floor(O(t, 0)) || 1, e
    }, n.animation = function(t, e, i, a) {
        if (t instanceof g) return t;
        (n.is(i, "function") || !i) && (a = a || i || null, i = null), t = Object(t), e = +e || 0;
        var r, s, o = {};
        for (s in t) t[D](s) && Z(s) != s && Z(s) + "%" != s && (r = !0, o[s] = t[s]);
        return r ? (i && (o.easing = i), a && (o.callback = a), new g({
            100: o
        }, e)) : new g(t, e)
    }, Qe.animate = function(t, e, i, a) {
        var r = this;
        if (r.removed) return a && a.call(r), r;
        var s = t instanceof g ? t : n.animation(t, e, i, a);
        return y(s, r, s.percents[0], null, r.attr()), r
    }, Qe.setTime = function(t, e) {
        return t && null != e && this.status(t, $(e, t.ms) / t.ms), this
    }, Qe.status = function(t, e) {
        var n, i, a = [],
            r = 0;
        if (null != e) return y(t, this, -1, $(e, 1)), this;
        for (n = dn.length; n > r; r++)
            if (i = dn[r], i.el.id == this.id && (!t || i.anim == t)) {
                if (t) return i.status;
                a.push({
                    anim: i.anim,
                    status: i.status
                })
            }
        return t ? 0 : a
    }, Qe.pause = function(t) {
        for (var n = 0; n < dn.length; n++) dn[n].el.id != this.id || t && dn[n].anim != t || e("raphael.anim.pause." + this.id, this, dn[n].anim) !== !1 && (dn[n].paused = !0);
        return this
    }, Qe.resume = function(t) {
        for (var n = 0; n < dn.length; n++)
            if (dn[n].el.id == this.id && (!t || dn[n].anim == t)) {
                var i = dn[n];
                e("raphael.anim.resume." + this.id, this, i.anim) !== !1 && (delete i.paused, this.status(i.anim, i.status))
            }
        return this
    }, Qe.stop = function(t) {
        for (var n = 0; n < dn.length; n++) dn[n].el.id != this.id || t && dn[n].anim != t || e("raphael.anim.stop." + this.id, this, dn[n].anim) !== !1 && dn.splice(n--, 1);
        return this
    }, e.on("raphael.remove", v), e.on("raphael.clear", v), Qe.toString = function() {
        return "RaphaÃ«lâ€™s object"
    };
    var pn = function(t) {
        if (this.items = [], this.length = 0, this.type = "set", t)
            for (var e = 0, n = t.length; n > e; e++)!t[e] || t[e].constructor != Qe.constructor && t[e].constructor != pn || (this[this.items.length] = this.items[this.items.length] = t[e], this.length++)
    }, fn = pn.prototype;
    fn.push = function() {
        for (var t, e, n = 0, i = arguments.length; i > n; n++) t = arguments[n], !t || t.constructor != Qe.constructor && t.constructor != pn || (e = this.items.length, this[e] = this.items[e] = t, this.length++);
        return this
    }, fn.pop = function() {
        return this.length && delete this[this.length--], this.items.pop()
    }, fn.forEach = function(t, e) {
        for (var n = 0, i = this.items.length; i > n; n++)
            if (t.call(e, this.items[n], n) === !1) return this;
        return this
    };
    for (var mn in Qe) Qe[D](mn) && (fn[mn] = function(t) {
        return function() {
            var e = arguments;
            return this.forEach(function(n) {
                n[t][S](n, e)
            })
        }
    }(mn));
    return fn.attr = function(t, e) {
        if (t && n.is(t, V) && n.is(t[0], "object"))
            for (var i = 0, a = t.length; a > i; i++) this.items[i].attr(t[i]);
        else
            for (var r = 0, s = this.items.length; s > r; r++) this.items[r].attr(t, e);
        return this
    }, fn.clear = function() {
        for (; this.length;) this.pop()
    }, fn.splice = function(t, e) {
        t = 0 > t ? O(this.length + t, 0) : t, e = O(0, $(this.length - t, e));
        var n, i = [],
            a = [],
            r = [];
        for (n = 2; n < arguments.length; n++) r.push(arguments[n]);
        for (n = 0; e > n; n++) a.push(this[t + n]);
        for (; n < this.length - t; n++) i.push(this[t + n]);
        var s = r.length;
        for (n = 0; n < s + i.length; n++) this.items[t + n] = this[t + n] = s > n ? r[n] : i[n - s];
        for (n = this.items.length = this.length -= e - s; this[n];) delete this[n++];
        return new pn(a)
    }, fn.exclude = function(t) {
        for (var e = 0, n = this.length; n > e; e++)
            if (this[e] == t) return this.splice(e, 1), !0
    }, fn.animate = function(t, e, i, a) {
        (n.is(i, "function") || !i) && (a = i || null);
        var r, s, o = this.items.length,
            l = o,
            d = this;
        if (!o) return this;
        a && (s = function() {
            !--o && a.call(d)
        }), i = n.is(i, U) ? i : s;
        var u = n.animation(t, e, i, s);
        for (r = this.items[--l].animate(u); l--;) this.items[l] && !this.items[l].removed && this.items[l].animateWith(r, u, u), this.items[l] && !this.items[l].removed || o--;
        return this
    }, fn.insertAfter = function(t) {
        for (var e = this.items.length; e--;) this.items[e].insertAfter(t);
        return this
    }, fn.getBBox = function() {
        for (var t = [], e = [], n = [], i = [], a = this.items.length; a--;)
            if (!this.items[a].removed) {
                var r = this.items[a].getBBox();
                t.push(r.x), e.push(r.y), n.push(r.x + r.width), i.push(r.y + r.height)
            }
        return t = $[S](0, t), e = $[S](0, e), n = O[S](0, n), i = O[S](0, i), {
            x: t,
            y: e,
            x2: n,
            y2: i,
            width: n - t,
            height: i - e
        }
    }, fn.clone = function(t) {
        t = this.paper.set();
        for (var e = 0, n = this.items.length; n > e; e++) t.push(this.items[e].clone());
        return t
    }, fn.toString = function() {
        return "RaphaÃ«lâ€˜s set"
    }, fn.glow = function(t) {
        var e = this.paper.set();
        return this.forEach(function(n) {
            var i = n.glow(t);
            null != i && i.forEach(function(t) {
                e.push(t)
            })
        }), e
    }, fn.isPointInside = function(t, e) {
        var n = !1;
        return this.forEach(function(i) {
            return i.isPointInside(t, e) ? (console.log("runned"), n = !0, !1) : void 0
        }), n
    }, n.registerFont = function(t) {
        if (!t.face) return t;
        this.fonts = this.fonts || {};
        var e = {
            w: t.w,
            face: {},
            glyphs: {}
        }, n = t.face["font-family"];
        for (var i in t.face) t.face[D](i) && (e.face[i] = t.face[i]);
        if (this.fonts[n] ? this.fonts[n].push(e) : this.fonts[n] = [e], !t.svg) {
            e.face["units-per-em"] = te(t.face["units-per-em"], 10);
            for (var a in t.glyphs)
                if (t.glyphs[D](a)) {
                    var r = t.glyphs[a];
                    if (e.glyphs[a] = {
                        w: r.w,
                        k: {},
                        d: r.d && "M" + r.d.replace(/[mlcxtrv]/g, function(t) {
                            return {
                                l: "L",
                                c: "C",
                                x: "z",
                                t: "m",
                                r: "l",
                                v: "c"
                            }[t] || "M"
                        }) + "z"
                    }, r.k)
                        for (var s in r.k) r[D](s) && (e.glyphs[a].k[s] = r.k[s])
                }
        }
        return t
    }, w.getFont = function(t, e, i, a) {
        if (a = a || "normal", i = i || "normal", e = +e || {
            normal: 400,
            bold: 700,
            lighter: 300,
            bolder: 800
        }[e] || 400, n.fonts) {
            var r = n.fonts[t];
            if (!r) {
                var s = new RegExp("(^|\\s)" + t.replace(/[^\w\d\s+!~.:_-]/g, F) + "(\\s|$)", "i");
                for (var o in n.fonts)
                    if (n.fonts[D](o) && s.test(o)) {
                        r = n.fonts[o];
                        break
                    }
            }
            var l;
            if (r)
                for (var d = 0, u = r.length; u > d && (l = r[d], l.face["font-weight"] != e || l.face["font-style"] != i && l.face["font-style"] || l.face["font-stretch"] != a); d++);
            return l
        }
    }, w.print = function(t, e, i, a, r, s, o, l) {
        s = s || "middle", o = O($(o || 0, 1), -1), l = O($(l || 1, 3), 1);
        var d, u = j(i)[N](F),
            c = 0,
            h = 0,
            p = F;
        if (n.is(a, "string") && (a = this.getFont(a)), a) {
            d = (r || 16) / a.face["units-per-em"];
            for (var f = a.face.bbox[N](M), m = +f[0], _ = f[3] - f[1], g = 0, y = +f[1] + ("baseline" == s ? _ + +a.face.descent : _ / 2), v = 0, b = u.length; b > v; v++) {
                if ("\n" == u[v]) c = 0, L = 0, h = 0, g += _ * l;
                else {
                    var w = h && a.glyphs[u[v - 1]] || {}, L = a.glyphs[u[v]];
                    c += h ? (w.w || a.w) + (w.k && w.k[u[v]] || 0) + a.w * o : 0, h = 1
                }
                L && L.d && (p += n.transformPath(L.d, ["t", c * d, g * d, "s", d, d, m, y, "t", (t - m) / d, (e - y) / d]))
            }
        }
        return this.path(p).attr({
            fill: "#000",
            stroke: "none"
        })
    }, w.add = function(t) {
        if (n.is(t, "array"))
            for (var e, i = this.set(), a = 0, r = t.length; r > a; a++) e = t[a] || {}, L[D](e.type) && i.push(this[e.type]().attr(e));
        return i
    }, n.format = function(t, e) {
        var i = n.is(e, V) ? [0][C](e) : arguments;
        return t && n.is(t, U) && i.length - 1 && (t = t.replace(x, function(t, e) {
            return null == i[++e] ? F : i[e]
        })), t || F
    }, n.fullfill = function() {
        var t = /\{([^\}]+)\}/g,
            e = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
            n = function(t, n, i) {
                var a = i;
                return n.replace(e, function(t, e, n, i, r) {
                    e = e || i, a && (e in a && (a = a[e]), "function" == typeof a && r && (a = a()))
                }), a = (null == a || a == i ? t : a) + ""
            };
        return function(e, i) {
            return String(e).replace(t, function(t, e) {
                return n(t, e, i)
            })
        }
    }(), n.ninja = function() {
        return k.was ? T.win.Raphael = k.is : delete Raphael, n
    }, n.st = fn,
    function(t, e, i) {
        function a() {
            /in/.test(t.readyState) ? setTimeout(a, 9) : n.eve("raphael.DOMload")
        }
        null == t.readyState && t.addEventListener && (t.addEventListener(e, i = function() {
            t.removeEventListener(e, i, !1), t.readyState = "complete"
        }, !1), t.readyState = "loading"), a()
    }(document, "DOMContentLoaded"), e.on("raphael.DOMload", function() {
        b = !0
    }),
    function() {
        if (n.svg) {
            var t = "hasOwnProperty",
                e = String,
                i = parseFloat,
                a = parseInt,
                r = Math,
                s = r.max,
                o = r.abs,
                l = r.pow,
                d = /[, ]+/,
                u = n.eve,
                c = "",
                h = " ",
                p = "http://www.w3.org/1999/xlink",
                f = {
                    block: "M5,0 0,2.5 5,5z",
                    classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
                    diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
                    open: "M6,1 1,3.5 6,6",
                    oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"
                }, m = {};
            n.toString = function() {
                return "Your browser supports SVG.\nYou are running RaphaÃ«l " + this.version
            };
            var _ = function(i, a) {
                if (a) {
                    "string" == typeof i && (i = _(i));
                    for (var r in a) a[t](r) && ("xlink:" == r.substring(0, 6) ? i.setAttributeNS(p, r.substring(6), e(a[r])) : i.setAttribute(r, e(a[r])))
                } else i = n._g.doc.createElementNS("http://www.w3.org/2000/svg", i), i.style && (i.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
                return i
            }, g = function(t, a) {
                    var d = "linear",
                        u = t.id + a,
                        h = .5,
                        p = .5,
                        f = t.node,
                        m = t.paper,
                        g = f.style,
                        y = n._g.doc.getElementById(u);
                    if (!y) {
                        if (a = e(a).replace(n._radial_gradient, function(t, e, n) {
                            if (d = "radial", e && n) {
                                h = i(e), p = i(n);
                                var a = 2 * (p > .5) - 1;
                                l(h - .5, 2) + l(p - .5, 2) > .25 && (p = r.sqrt(.25 - l(h - .5, 2)) * a + .5) && .5 != p && (p = p.toFixed(5) - 1e-5 * a)
                            }
                            return c
                        }), a = a.split(/\s*\-\s*/), "linear" == d) {
                            var v = a.shift();
                            if (v = -i(v), isNaN(v)) return null;
                            var b = [0, 0, r.cos(n.rad(v)), r.sin(n.rad(v))],
                                w = 1 / (s(o(b[2]), o(b[3])) || 1);
                            b[2] *= w, b[3] *= w, b[2] < 0 && (b[0] = -b[2], b[2] = 0), b[3] < 0 && (b[1] = -b[3], b[3] = 0)
                        }
                        var M = n._parseDots(a);
                        if (!M) return null;
                        if (u = u.replace(/[\(\)\s,\xb0#]/g, "_"), t.gradient && u != t.gradient.id && (m.defs.removeChild(t.gradient), delete t.gradient), !t.gradient) {
                            y = _(d + "Gradient", {
                                id: u
                            }), t.gradient = y, _(y, "radial" == d ? {
                                fx: h,
                                fy: p
                            } : {
                                x1: b[0],
                                y1: b[1],
                                x2: b[2],
                                y2: b[3],
                                gradientTransform: t.matrix.invert()
                            }), m.defs.appendChild(y);
                            for (var L = 0, x = M.length; x > L; L++) y.appendChild(_("stop", {
                                offset: M[L].offset ? M[L].offset : L ? "100%" : "0%",
                                "stop-color": M[L].color || "#fff"
                            }))
                        }
                    }
                    return _(f, {
                        fill: "url(#" + u + ")",
                        opacity: 1,
                        "fill-opacity": 1
                    }), g.fill = c, g.opacity = 1, g.fillOpacity = 1, 1
                }, y = function(t) {
                    var e = t.getBBox(1);
                    _(t.pattern, {
                        patternTransform: t.matrix.invert() + " translate(" + e.x + "," + e.y + ")"
                    })
                }, v = function(i, a, r) {
                    if ("path" == i.type) {
                        for (var s, o, l, d, u, h = e(a).toLowerCase().split("-"), p = i.paper, g = r ? "end" : "start", y = i.node, v = i.attrs, b = v["stroke-width"], w = h.length, M = "classic", L = 3, x = 3, D = 5; w--;) switch (h[w]) {
                            case "block":
                            case "classic":
                            case "oval":
                            case "diamond":
                            case "open":
                            case "none":
                                M = h[w];
                                break;
                            case "wide":
                                x = 5;
                                break;
                            case "narrow":
                                x = 2;
                                break;
                            case "long":
                                L = 5;
                                break;
                            case "short":
                                L = 2
                        }
                        if ("open" == M ? (L += 2, x += 2, D += 2, l = 1, d = r ? 4 : 1, u = {
                            fill: "none",
                            stroke: v.stroke
                        }) : (d = l = L / 2, u = {
                            fill: v.stroke,
                            stroke: "none"
                        }), i._.arrows ? r ? (i._.arrows.endPath && m[i._.arrows.endPath]--, i._.arrows.endMarker && m[i._.arrows.endMarker]--) : (i._.arrows.startPath && m[i._.arrows.startPath]--, i._.arrows.startMarker && m[i._.arrows.startMarker]--) : i._.arrows = {}, "none" != M) {
                            var T = "raphael-marker-" + M,
                                k = "raphael-marker-" + g + M + L + x;
                            n._g.doc.getElementById(T) ? m[T]++ : (p.defs.appendChild(_(_("path"), {
                                "stroke-linecap": "round",
                                d: f[M],
                                id: T
                            })), m[T] = 1);
                            var Y, S = n._g.doc.getElementById(k);
                            S ? (m[k]++, Y = S.getElementsByTagName("use")[0]) : (S = _(_("marker"), {
                                id: k,
                                markerHeight: x,
                                markerWidth: L,
                                orient: "auto",
                                refX: d,
                                refY: x / 2
                            }), Y = _(_("use"), {
                                "xlink:href": "#" + T,
                                transform: (r ? "rotate(180 " + L / 2 + " " + x / 2 + ") " : c) + "scale(" + L / D + "," + x / D + ")",
                                "stroke-width": (1 / ((L / D + x / D) / 2)).toFixed(4)
                            }), S.appendChild(Y), p.defs.appendChild(S), m[k] = 1), _(Y, u);
                            var C = l * ("diamond" != M && "oval" != M);
                            r ? (s = i._.arrows.startdx * b || 0, o = n.getTotalLength(v.path) - C * b) : (s = C * b, o = n.getTotalLength(v.path) - (i._.arrows.enddx * b || 0)), u = {}, u["marker-" + g] = "url(#" + k + ")", (o || s) && (u.d = n.getSubpath(v.path, s, o)), _(y, u), i._.arrows[g + "Path"] = T, i._.arrows[g + "Marker"] = k, i._.arrows[g + "dx"] = C, i._.arrows[g + "Type"] = M, i._.arrows[g + "String"] = a
                        } else r ? (s = i._.arrows.startdx * b || 0, o = n.getTotalLength(v.path) - s) : (s = 0, o = n.getTotalLength(v.path) - (i._.arrows.enddx * b || 0)), i._.arrows[g + "Path"] && _(y, {
                            d: n.getSubpath(v.path, s, o)
                        }), delete i._.arrows[g + "Path"], delete i._.arrows[g + "Marker"], delete i._.arrows[g + "dx"], delete i._.arrows[g + "Type"], delete i._.arrows[g + "String"];
                        for (u in m)
                            if (m[t](u) && !m[u]) {
                                var A = n._g.doc.getElementById(u);
                                A && A.parentNode.removeChild(A)
                            }
                    }
                }, b = {
                    "": [0],
                    none: [0],
                    "-": [3, 1],
                    ".": [1, 1],
                    "-.": [3, 1, 1, 1],
                    "-..": [3, 1, 1, 1, 1, 1],
                    ". ": [1, 3],
                    "- ": [4, 3],
                    "--": [8, 3],
                    "- .": [4, 3, 1, 3],
                    "--.": [8, 3, 1, 3],
                    "--..": [8, 3, 1, 3, 1, 3]
                }, w = function(t, n, i) {
                    if (n = b[e(n).toLowerCase()]) {
                        for (var a = t.attrs["stroke-width"] || "1", r = {
                                round: a,
                                square: a,
                                butt: 0
                            }[t.attrs["stroke-linecap"] || i["stroke-linecap"]] || 0, s = [], o = n.length; o--;) s[o] = n[o] * a + (o % 2 ? 1 : -1) * r;
                        _(t.node, {
                            "stroke-dasharray": s.join(",")
                        })
                    }
                }, M = function(i, r) {
                    var l = i.node,
                        u = i.attrs,
                        h = l.style.visibility;
                    l.style.visibility = "hidden";
                    for (var f in r)
                        if (r[t](f)) {
                            if (!n._availableAttrs[t](f)) continue;
                            var m = r[f];
                            switch (u[f] = m, f) {
                                case "blur":
                                    i.blur(m);
                                    break;
                                case "href":
                                case "title":
                                    var b = _("title"),
                                        M = n._g.doc.createTextNode(m);
                                    b.appendChild(M), l.appendChild(b);
                                    break;
                                case "target":
                                    var L = l.parentNode;
                                    if ("a" != L.tagName.toLowerCase()) {
                                        var b = _("a");
                                        L.insertBefore(b, l), b.appendChild(l), L = b
                                    }
                                    "target" == f ? L.setAttributeNS(p, "show", "blank" == m ? "new" : m) : L.setAttributeNS(p, f, m);
                                    break;
                                case "cursor":
                                    l.style.cursor = m;
                                    break;
                                case "transform":
                                    i.transform(m);
                                    break;
                                case "arrow-start":
                                    v(i, m);
                                    break;
                                case "arrow-end":
                                    v(i, m, 1);
                                    break;
                                case "clip-rect":
                                    var D = e(m).split(d);
                                    if (4 == D.length) {
                                        i.clip && i.clip.parentNode.parentNode.removeChild(i.clip.parentNode);
                                        var T = _("clipPath"),
                                            k = _("rect");
                                        T.id = n.createUUID(), _(k, {
                                            x: D[0],
                                            y: D[1],
                                            width: D[2],
                                            height: D[3]
                                        }), T.appendChild(k), i.paper.defs.appendChild(T), _(l, {
                                            "clip-path": "url(#" + T.id + ")"
                                        }), i.clip = k
                                    }
                                    if (!m) {
                                        var Y = l.getAttribute("clip-path");
                                        if (Y) {
                                            var S = n._g.doc.getElementById(Y.replace(/(^url\(#|\)$)/g, c));
                                            S && S.parentNode.removeChild(S), _(l, {
                                                "clip-path": c
                                            }), delete i.clip
                                        }
                                    }
                                    break;
                                case "path":
                                    "path" == i.type && (_(l, {
                                        d: m ? u.path = n._pathToAbsolute(m) : "M0,0"
                                    }), i._.dirty = 1, i._.arrows && ("startString" in i._.arrows && v(i, i._.arrows.startString), "endString" in i._.arrows && v(i, i._.arrows.endString, 1)));
                                    break;
                                case "width":
                                    if (l.setAttribute(f, m), i._.dirty = 1, !u.fx) break;
                                    f = "x", m = u.x;
                                case "x":
                                    u.fx && (m = -u.x - (u.width || 0));
                                case "rx":
                                    if ("rx" == f && "rect" == i.type) break;
                                case "cx":
                                    l.setAttribute(f, m), i.pattern && y(i), i._.dirty = 1;
                                    break;
                                case "height":
                                    if (l.setAttribute(f, m), i._.dirty = 1, !u.fy) break;
                                    f = "y", m = u.y;
                                case "y":
                                    u.fy && (m = -u.y - (u.height || 0));
                                case "ry":
                                    if ("ry" == f && "rect" == i.type) break;
                                case "cy":
                                    l.setAttribute(f, m), i.pattern && y(i), i._.dirty = 1;
                                    break;
                                case "r":
                                    "rect" == i.type ? _(l, {
                                        rx: m,
                                        ry: m
                                    }) : l.setAttribute(f, m), i._.dirty = 1;
                                    break;
                                case "src":
                                    "image" == i.type && l.setAttributeNS(p, "href", m);
                                    break;
                                case "stroke-width":
                                    (1 != i._.sx || 1 != i._.sy) && (m /= s(o(i._.sx), o(i._.sy)) || 1), i.paper._vbSize && (m *= i.paper._vbSize), l.setAttribute(f, m), u["stroke-dasharray"] && w(i, u["stroke-dasharray"], r), i._.arrows && ("startString" in i._.arrows && v(i, i._.arrows.startString), "endString" in i._.arrows && v(i, i._.arrows.endString, 1));
                                    break;
                                case "stroke-dasharray":
                                    w(i, m, r);
                                    break;
                                case "fill":
                                    var C = e(m).match(n._ISURL);
                                    if (C) {
                                        T = _("pattern");
                                        var A = _("image");
                                        T.id = n.createUUID(), _(T, {
                                            x: 0,
                                            y: 0,
                                            patternUnits: "userSpaceOnUse",
                                            height: 1,
                                            width: 1
                                        }), _(A, {
                                            x: 0,
                                            y: 0,
                                            "xlink:href": C[1]
                                        }), T.appendChild(A),
                                        function(t) {
                                            n._preload(C[1], function() {
                                                var e = this.offsetWidth,
                                                    n = this.offsetHeight;
                                                _(t, {
                                                    width: e,
                                                    height: n
                                                }), _(A, {
                                                    width: e,
                                                    height: n
                                                }), i.paper.safari()
                                            })
                                        }(T), i.paper.defs.appendChild(T), _(l, {
                                            fill: "url(#" + T.id + ")"
                                        }), i.pattern = T, i.pattern && y(i);
                                        break
                                    }
                                    var F = n.getRGB(m);
                                    if (F.error) {
                                        if (("circle" == i.type || "ellipse" == i.type || "r" != e(m).charAt()) && g(i, m)) {
                                            if ("opacity" in u || "fill-opacity" in u) {
                                                var E = n._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g, c));
                                                if (E) {
                                                    var j = E.getElementsByTagName("stop");
                                                    _(j[j.length - 1], {
                                                        "stop-opacity": ("opacity" in u ? u.opacity : 1) * ("fill-opacity" in u ? u["fill-opacity"] : 1)
                                                    })
                                                }
                                            }
                                            u.gradient = m, u.fill = "none";
                                            break
                                        }
                                    } else delete r.gradient, delete u.gradient, !n.is(u.opacity, "undefined") && n.is(r.opacity, "undefined") && _(l, {
                                        opacity: u.opacity
                                    }), !n.is(u["fill-opacity"], "undefined") && n.is(r["fill-opacity"], "undefined") && _(l, {
                                        "fill-opacity": u["fill-opacity"]
                                    });
                                    F[t]("opacity") && _(l, {
                                        "fill-opacity": F.opacity > 1 ? F.opacity / 100 : F.opacity
                                    });
                                case "stroke":
                                    F = n.getRGB(m), l.setAttribute(f, F.hex), "stroke" == f && F[t]("opacity") && _(l, {
                                        "stroke-opacity": F.opacity > 1 ? F.opacity / 100 : F.opacity
                                    }), "stroke" == f && i._.arrows && ("startString" in i._.arrows && v(i, i._.arrows.startString), "endString" in i._.arrows && v(i, i._.arrows.endString, 1));
                                    break;
                                case "gradient":
                                    ("circle" == i.type || "ellipse" == i.type || "r" != e(m).charAt()) && g(i, m);
                                    break;
                                case "opacity":
                                    u.gradient && !u[t]("stroke-opacity") && _(l, {
                                        "stroke-opacity": m > 1 ? m / 100 : m
                                    });
                                case "fill-opacity":
                                    if (u.gradient) {
                                        E = n._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g, c)), E && (j = E.getElementsByTagName("stop"), _(j[j.length - 1], {
                                            "stop-opacity": m
                                        }));
                                        break
                                    }
                                default:
                                    "font-size" == f && (m = a(m, 10) + "px");
                                    var N = f.replace(/(\-.)/g, function(t) {
                                        return t.substring(1).toUpperCase()
                                    });
                                    l.style[N] = m, i._.dirty = 1, l.setAttribute(f, m)
                            }
                        }
                    x(i, r), l.style.visibility = h
                }, L = 1.2,
                x = function(i, r) {
                    if ("text" == i.type && (r[t]("text") || r[t]("font") || r[t]("font-size") || r[t]("x") || r[t]("y"))) {
                        var s = i.attrs,
                            o = i.node,
                            l = o.firstChild ? a(n._g.doc.defaultView.getComputedStyle(o.firstChild, c).getPropertyValue("font-size"), 10) : 10;
                        if (r[t]("text")) {
                            for (s.text = r.text; o.firstChild;) o.removeChild(o.firstChild);
                            for (var d, u = e(r.text).split("\n"), h = [], p = 0, f = u.length; f > p; p++) d = _("tspan"), p && _(d, {
                                dy: l * L,
                                x: s.x
                            }), d.appendChild(n._g.doc.createTextNode(u[p])), o.appendChild(d), h[p] = d
                        } else
                            for (h = o.getElementsByTagName("tspan"), p = 0, f = h.length; f > p; p++) p ? _(h[p], {
                                dy: l * L,
                                x: s.x
                            }) : _(h[0], {
                                dy: 0
                            });
                        _(o, {
                            x: s.x,
                            y: s.y
                        }), i._.dirty = 1;
                        var m = i._getBBox(),
                            g = s.y - (m.y + m.height / 2);
                        g && n.is(g, "finite") && _(h[0], {
                            dy: g
                        })
                    }
                }, D = function(t, e) {
                    this[0] = this.node = t, t.raphael = !0, this.id = n._oid++, t.raphaelid = this.id, this.matrix = n.matrix(), this.realPath = null, this.paper = e, this.attrs = this.attrs || {}, this._ = {
                        transform: [],
                        sx: 1,
                        sy: 1,
                        deg: 0,
                        dx: 0,
                        dy: 0,
                        dirty: 1
                    }, !e.bottom && (e.bottom = this), this.prev = e.top, e.top && (e.top.next = this), e.top = this, this.next = null
                }, T = n.el;
            D.prototype = T, T.constructor = D, n._engine.path = function(t, e) {
                var n = _("path");
                e.canvas && e.canvas.appendChild(n);
                var i = new D(n, e);
                return i.type = "path", M(i, {
                    fill: "none",
                    stroke: "#000",
                    path: t
                }), i
            }, T.rotate = function(t, n, a) {
                if (this.removed) return this;
                if (t = e(t).split(d), t.length - 1 && (n = i(t[1]), a = i(t[2])), t = i(t[0]), null == a && (n = a), null == n || null == a) {
                    var r = this.getBBox(1);
                    n = r.x + r.width / 2, a = r.y + r.height / 2
                }
                return this.transform(this._.transform.concat([
                    ["r", t, n, a]
                ])), this
            }, T.scale = function(t, n, a, r) {
                if (this.removed) return this;
                if (t = e(t).split(d), t.length - 1 && (n = i(t[1]), a = i(t[2]), r = i(t[3])), t = i(t[0]), null == n && (n = t), null == r && (a = r), null == a || null == r) var s = this.getBBox(1);
                return a = null == a ? s.x + s.width / 2 : a, r = null == r ? s.y + s.height / 2 : r, this.transform(this._.transform.concat([
                    ["s", t, n, a, r]
                ])), this
            }, T.translate = function(t, n) {
                return this.removed ? this : (t = e(t).split(d), t.length - 1 && (n = i(t[1])), t = i(t[0]) || 0, n = +n || 0, this.transform(this._.transform.concat([
                    ["t", t, n]
                ])), this)
            }, T.transform = function(e) {
                var i = this._;
                if (null == e) return i.transform;
                if (n._extractTransform(this, e), this.clip && _(this.clip, {
                    transform: this.matrix.invert()
                }), this.pattern && y(this), this.node && _(this.node, {
                    transform: this.matrix
                }), 1 != i.sx || 1 != i.sy) {
                    var a = this.attrs[t]("stroke-width") ? this.attrs["stroke-width"] : 1;
                    this.attr({
                        "stroke-width": a
                    })
                }
                return this
            }, T.hide = function() {
                return !this.removed && this.paper.safari(this.node.style.display = "none"), this
            }, T.show = function() {
                return !this.removed && this.paper.safari(this.node.style.display = ""), this
            }, T.remove = function() {
                if (!this.removed && this.node.parentNode) {
                    var t = this.paper;
                    t.__set__ && t.__set__.exclude(this), u.unbind("raphael.*.*." + this.id), this.gradient && t.defs.removeChild(this.gradient), n._tear(this, t), "a" == this.node.parentNode.tagName.toLowerCase() ? this.node.parentNode.parentNode.removeChild(this.node.parentNode) : this.node.parentNode.removeChild(this.node);
                    for (var e in this) this[e] = "function" == typeof this[e] ? n._removedFactory(e) : null;
                    this.removed = !0
                }
            }, T._getBBox = function() {
                if ("none" == this.node.style.display) {
                    this.show();
                    var t = !0
                }
                var e = {};
                try {
                    e = this.node.getBBox()
                } catch (n) {} finally {
                    e = e || {}
                }
                return t && this.hide(), e
            }, T.attr = function(e, i) {
                if (this.removed) return this;
                if (null == e) {
                    var a = {};
                    for (var r in this.attrs) this.attrs[t](r) && (a[r] = this.attrs[r]);
                    return a.gradient && "none" == a.fill && (a.fill = a.gradient) && delete a.gradient, a.transform = this._.transform, a
                }
                if (null == i && n.is(e, "string")) {
                    if ("fill" == e && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
                    if ("transform" == e) return this._.transform;
                    for (var s = e.split(d), o = {}, l = 0, c = s.length; c > l; l++) e = s[l], o[e] = e in this.attrs ? this.attrs[e] : n.is(this.paper.customAttributes[e], "function") ? this.paper.customAttributes[e].def : n._availableAttrs[e];
                    return c - 1 ? o : o[s[0]]
                }
                if (null == i && n.is(e, "array")) {
                    for (o = {}, l = 0, c = e.length; c > l; l++) o[e[l]] = this.attr(e[l]);
                    return o
                }
                if (null != i) {
                    var h = {};
                    h[e] = i
                } else null != e && n.is(e, "object") && (h = e);
                for (var p in h) u("raphael.attr." + p + "." + this.id, this, h[p]);
                for (p in this.paper.customAttributes)
                    if (this.paper.customAttributes[t](p) && h[t](p) && n.is(this.paper.customAttributes[p], "function")) {
                        var f = this.paper.customAttributes[p].apply(this, [].concat(h[p]));
                        this.attrs[p] = h[p];
                        for (var m in f) f[t](m) && (h[m] = f[m])
                    }
                return M(this, h), this
            }, T.toFront = function() {
                if (this.removed) return this;
                "a" == this.node.parentNode.tagName.toLowerCase() ? this.node.parentNode.parentNode.appendChild(this.node.parentNode) : this.node.parentNode.appendChild(this.node);
                var t = this.paper;
                return t.top != this && n._tofront(this, t), this
            }, T.toBack = function() {
                if (this.removed) return this;
                var t = this.node.parentNode;
                return "a" == t.tagName.toLowerCase() ? t.parentNode.insertBefore(this.node.parentNode, this.node.parentNode.parentNode.firstChild) : t.firstChild != this.node && t.insertBefore(this.node, this.node.parentNode.firstChild), n._toback(this, this.paper), this.paper, this
            }, T.insertAfter = function(t) {
                if (this.removed) return this;
                var e = t.node || t[t.length - 1].node;
                return e.nextSibling ? e.parentNode.insertBefore(this.node, e.nextSibling) : e.parentNode.appendChild(this.node), n._insertafter(this, t, this.paper), this
            }, T.insertBefore = function(t) {
                if (this.removed) return this;
                var e = t.node || t[0].node;
                return e.parentNode.insertBefore(this.node, e), n._insertbefore(this, t, this.paper), this
            }, T.blur = function(t) {
                var e = this;
                if (0 !== +t) {
                    var i = _("filter"),
                        a = _("feGaussianBlur");
                    e.attrs.blur = t, i.id = n.createUUID(), _(a, {
                        stdDeviation: +t || 1.5
                    }), i.appendChild(a), e.paper.defs.appendChild(i), e._blur = i, _(e.node, {
                        filter: "url(#" + i.id + ")"
                    })
                } else e._blur && (e._blur.parentNode.removeChild(e._blur), delete e._blur, delete e.attrs.blur), e.node.removeAttribute("filter");
                return e
            }, n._engine.circle = function(t, e, n, i) {
                var a = _("circle");
                t.canvas && t.canvas.appendChild(a);
                var r = new D(a, t);
                return r.attrs = {
                    cx: e,
                    cy: n,
                    r: i,
                    fill: "none",
                    stroke: "#000"
                }, r.type = "circle", _(a, r.attrs), r
            }, n._engine.rect = function(t, e, n, i, a, r) {
                var s = _("rect");
                t.canvas && t.canvas.appendChild(s);
                var o = new D(s, t);
                return o.attrs = {
                    x: e,
                    y: n,
                    width: i,
                    height: a,
                    r: r || 0,
                    rx: r || 0,
                    ry: r || 0,
                    fill: "none",
                    stroke: "#000"
                }, o.type = "rect", _(s, o.attrs), o
            }, n._engine.ellipse = function(t, e, n, i, a) {
                var r = _("ellipse");
                t.canvas && t.canvas.appendChild(r);
                var s = new D(r, t);
                return s.attrs = {
                    cx: e,
                    cy: n,
                    rx: i,
                    ry: a,
                    fill: "none",
                    stroke: "#000"
                }, s.type = "ellipse", _(r, s.attrs), s
            }, n._engine.image = function(t, e, n, i, a, r) {
                var s = _("image");
                _(s, {
                    x: n,
                    y: i,
                    width: a,
                    height: r,
                    preserveAspectRatio: "none"
                }), s.setAttributeNS(p, "href", e), t.canvas && t.canvas.appendChild(s);
                var o = new D(s, t);
                return o.attrs = {
                    x: n,
                    y: i,
                    width: a,
                    height: r,
                    src: e
                }, o.type = "image", o
            }, n._engine.text = function(t, e, i, a) {
                var r = _("text");
                t.canvas && t.canvas.appendChild(r);
                var s = new D(r, t);
                return s.attrs = {
                    x: e,
                    y: i,
                    "text-anchor": "middle",
                    text: a,
                    font: n._availableAttrs.font,
                    stroke: "none",
                    fill: "#000"
                }, s.type = "text", M(s, s.attrs), s
            }, n._engine.setSize = function(t, e) {
                return this.width = t || this.width, this.height = e || this.height, this.canvas.setAttribute("width", this.width), this.canvas.setAttribute("height", this.height), this._viewBox && this.setViewBox.apply(this, this._viewBox), this
            }, n._engine.create = function() {
                var t = n._getContainer.apply(0, arguments),
                    e = t && t.container,
                    i = t.x,
                    a = t.y,
                    r = t.width,
                    s = t.height;
                if (!e) throw new Error("SVG container not found.");
                var o, l = _("svg"),
                    d = "overflow:hidden;";
                return i = i || 0, a = a || 0, r = r || 512, s = s || 342, _(l, {
                    height: s,
                    version: 1.1,
                    width: r,
                    xmlns: "http://www.w3.org/2000/svg"
                }), 1 == e ? (l.style.cssText = d + "position:absolute;left:" + i + "px;top:" + a + "px", n._g.doc.body.appendChild(l), o = 1) : (l.style.cssText = d + "position:relative", e.firstChild ? e.insertBefore(l, e.firstChild) : e.appendChild(l)), e = new n._Paper, e.width = r, e.height = s, e.canvas = l, e.clear(), e._left = e._top = 0, o && (e.renderfix = function() {}), e.renderfix(), e
            }, n._engine.setViewBox = function(t, e, n, i, a) {
                u("raphael.setViewBox", this, this._viewBox, [t, e, n, i, a]);
                var r, o, l = s(n / this.width, i / this.height),
                    d = this.top,
                    c = a ? "meet" : "xMinYMin";
                for (null == t ? (this._vbSize && (l = 1), delete this._vbSize, r = "0 0 " + this.width + h + this.height) : (this._vbSize = l, r = t + h + e + h + n + h + i), _(this.canvas, {
                    viewBox: r,
                    preserveAspectRatio: c
                }); l && d;) o = "stroke-width" in d.attrs ? d.attrs["stroke-width"] : 1, d.attr({
                    "stroke-width": o
                }), d._.dirty = 1, d._.dirtyT = 1, d = d.prev;
                return this._viewBox = [t, e, n, i, !! a], this
            }, n.prototype.renderfix = function() {
                var t, e = this.canvas,
                    n = e.style;
                try {
                    t = e.getScreenCTM() || e.createSVGMatrix()
                } catch (i) {
                    t = e.createSVGMatrix()
                }
                var a = -t.e % 1,
                    r = -t.f % 1;
                (a || r) && (a && (this._left = (this._left + a) % 1, n.left = this._left + "px"), r && (this._top = (this._top + r) % 1, n.top = this._top + "px"))
            }, n.prototype.clear = function() {
                n.eve("raphael.clear", this);
                for (var t = this.canvas; t.firstChild;) t.removeChild(t.firstChild);
                this.bottom = this.top = null, (this.desc = _("desc")).appendChild(n._g.doc.createTextNode("Created with RaphaÃ«l " + n.version)), t.appendChild(this.desc), t.appendChild(this.defs = _("defs"))
            }, n.prototype.remove = function() {
                u("raphael.remove", this), this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
                for (var t in this) this[t] = "function" == typeof this[t] ? n._removedFactory(t) : null
            };
            var k = n.st;
            for (var Y in T) T[t](Y) && !k[t](Y) && (k[Y] = function(t) {
                return function() {
                    var e = arguments;
                    return this.forEach(function(n) {
                        n[t].apply(n, e)
                    })
                }
            }(Y))
        }
    }(),
    function() {
        if (n.vml) {
            var t = "hasOwnProperty",
                e = String,
                i = parseFloat,
                a = Math,
                r = a.round,
                s = a.max,
                o = a.min,
                l = a.abs,
                d = "fill",
                u = /[, ]+/,
                c = n.eve,
                h = " progid:DXImageTransform.Microsoft",
                p = " ",
                f = "",
                m = {
                    M: "m",
                    L: "l",
                    C: "c",
                    Z: "x",
                    m: "t",
                    l: "r",
                    c: "v",
                    z: "x"
                }, _ = /([clmz]),?([^clmz]*)/gi,
                g = / progid:\S+Blur\([^\)]+\)/g,
                y = /-?[^,\s-]+/g,
                v = "position:absolute;left:0;top:0;width:1px;height:1px",
                b = 21600,
                w = {
                    path: 1,
                    rect: 1,
                    image: 1
                }, M = {
                    circle: 1,
                    ellipse: 1
                }, L = function(t) {
                    var i = /[ahqstv]/gi,
                        a = n._pathToAbsolute;
                    if (e(t).match(i) && (a = n._path2curve), i = /[clmz]/g, a == n._pathToAbsolute && !e(t).match(i)) {
                        var s = e(t).replace(_, function(t, e, n) {
                            var i = [],
                                a = "m" == e.toLowerCase(),
                                s = m[e];
                            return n.replace(y, function(t) {
                                a && 2 == i.length && (s += i + m["m" == e ? "l" : "L"], i = []), i.push(r(t * b))
                            }), s + i
                        });
                        return s
                    }
                    var o, l, d = a(t);
                    s = [];
                    for (var u = 0, c = d.length; c > u; u++) {
                        o = d[u], l = d[u][0].toLowerCase(), "z" == l && (l = "x");
                        for (var h = 1, g = o.length; g > h; h++) l += r(o[h] * b) + (h != g - 1 ? "," : f);
                        s.push(l)
                    }
                    return s.join(p)
                }, x = function(t, e, i) {
                    var a = n.matrix();
                    return a.rotate(-t, .5, .5), {
                        dx: a.x(e, i),
                        dy: a.y(e, i)
                    }
                }, D = function(t, e, n, i, a, r) {
                    var s = t._,
                        o = t.matrix,
                        u = s.fillpos,
                        c = t.node,
                        h = c.style,
                        f = 1,
                        m = "",
                        _ = b / e,
                        g = b / n;
                    if (h.visibility = "hidden", e && n) {
                        if (c.coordsize = l(_) + p + l(g), h.rotation = r * (0 > e * n ? -1 : 1), r) {
                            var y = x(r, i, a);
                            i = y.dx, a = y.dy
                        }
                        if (0 > e && (m += "x"), 0 > n && (m += " y") && (f = -1), h.flip = m, c.coordorigin = i * -_ + p + a * -g, u || s.fillsize) {
                            var v = c.getElementsByTagName(d);
                            v = v && v[0], c.removeChild(v), u && (y = x(r, o.x(u[0], u[1]), o.y(u[0], u[1])), v.position = y.dx * f + p + y.dy * f), s.fillsize && (v.size = s.fillsize[0] * l(e) + p + s.fillsize[1] * l(n)), c.appendChild(v)
                        }
                        h.visibility = "visible"
                    }
                };
            n.toString = function() {
                return "Your browser doesnâ€™t support SVG. Falling down to VML.\nYou are running RaphaÃ«l " + this.version
            };
            var T = function(t, n, i) {
                for (var a = e(n).toLowerCase().split("-"), r = i ? "end" : "start", s = a.length, o = "classic", l = "medium", d = "medium"; s--;) switch (a[s]) {
                    case "block":
                    case "classic":
                    case "oval":
                    case "diamond":
                    case "open":
                    case "none":
                        o = a[s];
                        break;
                    case "wide":
                    case "narrow":
                        d = a[s];
                        break;
                    case "long":
                    case "short":
                        l = a[s]
                }
                var u = t.node.getElementsByTagName("stroke")[0];
                u[r + "arrow"] = o, u[r + "arrowlength"] = l, u[r + "arrowwidth"] = d
            }, k = function(a, l) {
                    a.attrs = a.attrs || {};
                    var c = a.node,
                        h = a.attrs,
                        m = c.style,
                        _ = w[a.type] && (l.x != h.x || l.y != h.y || l.width != h.width || l.height != h.height || l.cx != h.cx || l.cy != h.cy || l.rx != h.rx || l.ry != h.ry || l.r != h.r),
                        g = M[a.type] && (h.cx != l.cx || h.cy != l.cy || h.r != l.r || h.rx != l.rx || h.ry != l.ry),
                        y = a;
                    for (var v in l) l[t](v) && (h[v] = l[v]);
                    if (_ && (h.path = n._getPath[a.type](a), a._.dirty = 1), l.href && (c.href = l.href), l.title && (c.title = l.title), l.target && (c.target = l.target), l.cursor && (m.cursor = l.cursor), "blur" in l && a.blur(l.blur), (l.path && "path" == a.type || _) && (c.path = L(~e(h.path).toLowerCase().indexOf("r") ? n._pathToAbsolute(h.path) : h.path), "image" == a.type && (a._.fillpos = [h.x, h.y], a._.fillsize = [h.width, h.height], D(a, 1, 1, 0, 0, 0))), "transform" in l && a.transform(l.transform), g) {
                        var x = +h.cx,
                            k = +h.cy,
                            S = +h.rx || +h.r || 0,
                            C = +h.ry || +h.r || 0;
                        c.path = n.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", r((x - S) * b), r((k - C) * b), r((x + S) * b), r((k + C) * b), r(x * b)), a._.dirty = 1
                    }
                    if ("clip-rect" in l) {
                        var F = e(l["clip-rect"]).split(u);
                        if (4 == F.length) {
                            F[2] = +F[2] + +F[0], F[3] = +F[3] + +F[1];
                            var E = c.clipRect || n._g.doc.createElement("div"),
                                j = E.style;
                            j.clip = n.format("rect({1}px {2}px {3}px {0}px)", F), c.clipRect || (j.position = "absolute", j.top = 0, j.left = 0, j.width = a.paper.width + "px", j.height = a.paper.height + "px", c.parentNode.insertBefore(E, c), E.appendChild(c), c.clipRect = E)
                        }
                        l["clip-rect"] || c.clipRect && (c.clipRect.style.clip = "auto")
                    }
                    if (a.textpath) {
                        var N = a.textpath.style;
                        l.font && (N.font = l.font), l["font-family"] && (N.fontFamily = '"' + l["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, f) + '"'), l["font-size"] && (N.fontSize = l["font-size"]), l["font-weight"] && (N.fontWeight = l["font-weight"]), l["font-style"] && (N.fontStyle = l["font-style"])
                    }
                    if ("arrow-start" in l && T(y, l["arrow-start"]), "arrow-end" in l && T(y, l["arrow-end"], 1), null != l.opacity || null != l["stroke-width"] || null != l.fill || null != l.src || null != l.stroke || null != l["stroke-width"] || null != l["stroke-opacity"] || null != l["fill-opacity"] || null != l["stroke-dasharray"] || null != l["stroke-miterlimit"] || null != l["stroke-linejoin"] || null != l["stroke-linecap"]) {
                        var I = c.getElementsByTagName(d),
                            H = !1;
                        if (I = I && I[0], !I && (H = I = A(d)), "image" == a.type && l.src && (I.src = l.src), l.fill && (I.on = !0), (null == I.on || "none" == l.fill || null === l.fill) && (I.on = !1), I.on && l.fill) {
                            var P = e(l.fill).match(n._ISURL);
                            if (P) {
                                I.parentNode == c && c.removeChild(I), I.rotate = !0, I.src = P[1], I.type = "tile";
                                var W = a.getBBox(1);
                                I.position = W.x + p + W.y, a._.fillpos = [W.x, W.y], n._preload(P[1], function() {
                                    a._.fillsize = [this.offsetWidth, this.offsetHeight]
                                })
                            } else I.color = n.getRGB(l.fill).hex, I.src = f, I.type = "solid", n.getRGB(l.fill).error && (y.type in {
                                circle: 1,
                                ellipse: 1
                            } || "r" != e(l.fill).charAt()) && Y(y, l.fill, I) && (h.fill = "none", h.gradient = l.fill, I.rotate = !1)
                        }
                        if ("fill-opacity" in l || "opacity" in l) {
                            var O = ((+h["fill-opacity"] + 1 || 2) - 1) * ((+h.opacity + 1 || 2) - 1) * ((+n.getRGB(l.fill).o + 1 || 2) - 1);
                            O = o(s(O, 0), 1), I.opacity = O, I.src && (I.color = "none")
                        }
                        c.appendChild(I);
                        var $ = c.getElementsByTagName("stroke") && c.getElementsByTagName("stroke")[0],
                            B = !1;
                        !$ && (B = $ = A("stroke")), (l.stroke && "none" != l.stroke || l["stroke-width"] || null != l["stroke-opacity"] || l["stroke-dasharray"] || l["stroke-miterlimit"] || l["stroke-linejoin"] || l["stroke-linecap"]) && ($.on = !0), ("none" == l.stroke || null === l.stroke || null == $.on || 0 == l.stroke || 0 == l["stroke-width"]) && ($.on = !1);
                        var z = n.getRGB(l.stroke);
                        $.on && l.stroke && ($.color = z.hex), O = ((+h["stroke-opacity"] + 1 || 2) - 1) * ((+h.opacity + 1 || 2) - 1) * ((+z.o + 1 || 2) - 1);
                        var R = .75 * (i(l["stroke-width"]) || 1);
                        if (O = o(s(O, 0), 1), null == l["stroke-width"] && (R = h["stroke-width"]), l["stroke-width"] && ($.weight = R), R && 1 > R && (O *= R) && ($.weight = 1), $.opacity = O, l["stroke-linejoin"] && ($.joinstyle = l["stroke-linejoin"] || "miter"), $.miterlimit = l["stroke-miterlimit"] || 8, l["stroke-linecap"] && ($.endcap = "butt" == l["stroke-linecap"] ? "flat" : "square" == l["stroke-linecap"] ? "square" : "round"), l["stroke-dasharray"]) {
                            var q = {
                                "-": "shortdash",
                                ".": "shortdot",
                                "-.": "shortdashdot",
                                "-..": "shortdashdotdot",
                                ". ": "dot",
                                "- ": "dash",
                                "--": "longdash",
                                "- .": "dashdot",
                                "--.": "longdashdot",
                                "--..": "longdashdotdot"
                            };
                            $.dashstyle = q[t](l["stroke-dasharray"]) ? q[l["stroke-dasharray"]] : f
                        }
                        B && c.appendChild($)
                    }
                    if ("text" == y.type) {
                        y.paper.canvas.style.display = f;
                        var U = y.paper.span,
                            V = 100,
                            G = h.font && h.font.match(/\d+(?:\.\d*)?(?=px)/);
                        m = U.style, h.font && (m.font = h.font), h["font-family"] && (m.fontFamily = h["font-family"]), h["font-weight"] && (m.fontWeight = h["font-weight"]), h["font-style"] && (m.fontStyle = h["font-style"]), G = i(h["font-size"] || G && G[0]) || 10, m.fontSize = G * V + "px", y.textpath.string && (U.innerHTML = e(y.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
                        var J = U.getBoundingClientRect();
                        y.W = h.w = (J.right - J.left) / V, y.H = h.h = (J.bottom - J.top) / V, y.X = h.x, y.Y = h.y + y.H / 2, ("x" in l || "y" in l) && (y.path.v = n.format("m{0},{1}l{2},{1}", r(h.x * b), r(h.y * b), r(h.x * b) + 1));
                        for (var X = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"], K = 0, Q = X.length; Q > K; K++)
                            if (X[K] in l) {
                                y._.dirty = 1;
                                break
                            }
                        switch (h["text-anchor"]) {
                            case "start":
                                y.textpath.style["v-text-align"] = "left", y.bbx = y.W / 2;
                                break;
                            case "end":
                                y.textpath.style["v-text-align"] = "right", y.bbx = -y.W / 2;
                                break;
                            default:
                                y.textpath.style["v-text-align"] = "center", y.bbx = 0
                        }
                        y.textpath.style["v-text-kern"] = !0
                    }
                }, Y = function(t, r, s) {
                    t.attrs = t.attrs || {};
                    var o = (t.attrs, Math.pow),
                        l = "linear",
                        d = ".5 .5";
                    if (t.attrs.gradient = r, r = e(r).replace(n._radial_gradient, function(t, e, n) {
                        return l = "radial", e && n && (e = i(e), n = i(n), o(e - .5, 2) + o(n - .5, 2) > .25 && (n = a.sqrt(.25 - o(e - .5, 2)) * (2 * (n > .5) - 1) + .5), d = e + p + n), f
                    }), r = r.split(/\s*\-\s*/), "linear" == l) {
                        var u = r.shift();
                        if (u = -i(u), isNaN(u)) return null
                    }
                    var c = n._parseDots(r);
                    if (!c) return null;
                    if (t = t.shape || t.node, c.length) {
                        t.removeChild(s), s.on = !0, s.method = "none", s.color = c[0].color, s.color2 = c[c.length - 1].color;
                        for (var h = [], m = 0, _ = c.length; _ > m; m++) c[m].offset && h.push(c[m].offset + p + c[m].color);
                        s.colors = h.length ? h.join() : "0% " + s.color, "radial" == l ? (s.type = "gradientTitle", s.focus = "100%", s.focussize = "0 0", s.focusposition = d, s.angle = 0) : (s.type = "gradient", s.angle = (270 - u) % 360), t.appendChild(s)
                    }
                    return 1
                }, S = function(t, e) {
                    this[0] = this.node = t, t.raphael = !0, this.id = n._oid++, t.raphaelid = this.id, this.X = 0, this.Y = 0, this.attrs = {}, this.paper = e, this.matrix = n.matrix(), this._ = {
                        transform: [],
                        sx: 1,
                        sy: 1,
                        dx: 0,
                        dy: 0,
                        deg: 0,
                        dirty: 1,
                        dirtyT: 1
                    }, !e.bottom && (e.bottom = this), this.prev = e.top, e.top && (e.top.next = this), e.top = this, this.next = null
                }, C = n.el;
            S.prototype = C, C.constructor = S, C.transform = function(t) {
                if (null == t) return this._.transform;
                var i, a = this.paper._viewBoxShift,
                    r = a ? "s" + [a.scale, a.scale] + "-1-1t" + [a.dx, a.dy] : f;
                a && (i = t = e(t).replace(/\.{3}|\u2026/g, this._.transform || f)), n._extractTransform(this, r + t);
                var s, o = this.matrix.clone(),
                    l = this.skew,
                    d = this.node,
                    u = ~e(this.attrs.fill).indexOf("-"),
                    c = !e(this.attrs.fill).indexOf("url(");
                if (o.translate(1, 1), c || u || "image" == this.type)
                    if (l.matrix = "1 0 0 1", l.offset = "0 0", s = o.split(), u && s.noRotation || !s.isSimple) {
                        d.style.filter = o.toFilter();
                        var h = this.getBBox(),
                            m = this.getBBox(1),
                            _ = h.x - m.x,
                            g = h.y - m.y;
                        d.coordorigin = _ * -b + p + g * -b, D(this, 1, 1, _, g, 0)
                    } else d.style.filter = f, D(this, s.scalex, s.scaley, s.dx, s.dy, s.rotate);
                    else d.style.filter = f, l.matrix = e(o), l.offset = o.offset();
                return i && (this._.transform = i), this
            }, C.rotate = function(t, n, a) {
                if (this.removed) return this;
                if (null != t) {
                    if (t = e(t).split(u), t.length - 1 && (n = i(t[1]), a = i(t[2])), t = i(t[0]), null == a && (n = a), null == n || null == a) {
                        var r = this.getBBox(1);
                        n = r.x + r.width / 2, a = r.y + r.height / 2
                    }
                    return this._.dirtyT = 1, this.transform(this._.transform.concat([
                        ["r", t, n, a]
                    ])), this
                }
            }, C.translate = function(t, n) {
                return this.removed ? this : (t = e(t).split(u), t.length - 1 && (n = i(t[1])), t = i(t[0]) || 0, n = +n || 0, this._.bbox && (this._.bbox.x += t, this._.bbox.y += n), this.transform(this._.transform.concat([
                    ["t", t, n]
                ])), this)
            }, C.scale = function(t, n, a, r) {
                if (this.removed) return this;
                if (t = e(t).split(u), t.length - 1 && (n = i(t[1]), a = i(t[2]), r = i(t[3]), isNaN(a) && (a = null), isNaN(r) && (r = null)), t = i(t[0]), null == n && (n = t), null == r && (a = r), null == a || null == r) var s = this.getBBox(1);
                return a = null == a ? s.x + s.width / 2 : a, r = null == r ? s.y + s.height / 2 : r, this.transform(this._.transform.concat([
                    ["s", t, n, a, r]
                ])), this._.dirtyT = 1, this
            }, C.hide = function() {
                return !this.removed && (this.node.style.display = "none"), this
            }, C.show = function() {
                return !this.removed && (this.node.style.display = f), this
            }, C._getBBox = function() {
                return this.removed ? {} : {
                    x: this.X + (this.bbx || 0) - this.W / 2,
                    y: this.Y - this.H,
                    width: this.W,
                    height: this.H
                }
            }, C.remove = function() {
                if (!this.removed && this.node.parentNode) {
                    this.paper.__set__ && this.paper.__set__.exclude(this), n.eve.unbind("raphael.*.*." + this.id), n._tear(this, this.paper), this.node.parentNode.removeChild(this.node), this.shape && this.shape.parentNode.removeChild(this.shape);
                    for (var t in this) this[t] = "function" == typeof this[t] ? n._removedFactory(t) : null;
                    this.removed = !0
                }
            }, C.attr = function(e, i) {
                if (this.removed) return this;
                if (null == e) {
                    var a = {};
                    for (var r in this.attrs) this.attrs[t](r) && (a[r] = this.attrs[r]);
                    return a.gradient && "none" == a.fill && (a.fill = a.gradient) && delete a.gradient, a.transform = this._.transform, a
                }
                if (null == i && n.is(e, "string")) {
                    if (e == d && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
                    for (var s = e.split(u), o = {}, l = 0, h = s.length; h > l; l++) e = s[l], o[e] = e in this.attrs ? this.attrs[e] : n.is(this.paper.customAttributes[e], "function") ? this.paper.customAttributes[e].def : n._availableAttrs[e];
                    return h - 1 ? o : o[s[0]]
                }
                if (this.attrs && null == i && n.is(e, "array")) {
                    for (o = {}, l = 0, h = e.length; h > l; l++) o[e[l]] = this.attr(e[l]);
                    return o
                }
                var p;
                null != i && (p = {}, p[e] = i), null == i && n.is(e, "object") && (p = e);
                for (var f in p) c("raphael.attr." + f + "." + this.id, this, p[f]);
                if (p) {
                    for (f in this.paper.customAttributes)
                        if (this.paper.customAttributes[t](f) && p[t](f) && n.is(this.paper.customAttributes[f], "function")) {
                            var m = this.paper.customAttributes[f].apply(this, [].concat(p[f]));
                            this.attrs[f] = p[f];
                            for (var _ in m) m[t](_) && (p[_] = m[_])
                        }
                    p.text && "text" == this.type && (this.textpath.string = p.text), k(this, p)
                }
                return this
            }, C.toFront = function() {
                return !this.removed && this.node.parentNode.appendChild(this.node), this.paper && this.paper.top != this && n._tofront(this, this.paper), this
            }, C.toBack = function() {
                return this.removed ? this : (this.node.parentNode.firstChild != this.node && (this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild), n._toback(this, this.paper)), this)
            }, C.insertAfter = function(t) {
                return this.removed ? this : (t.constructor == n.st.constructor && (t = t[t.length - 1]), t.node.nextSibling ? t.node.parentNode.insertBefore(this.node, t.node.nextSibling) : t.node.parentNode.appendChild(this.node), n._insertafter(this, t, this.paper), this)
            }, C.insertBefore = function(t) {
                return this.removed ? this : (t.constructor == n.st.constructor && (t = t[0]), t.node.parentNode.insertBefore(this.node, t.node), n._insertbefore(this, t, this.paper), this)
            }, C.blur = function(t) {
                var e = this.node.runtimeStyle,
                    i = e.filter;
                return i = i.replace(g, f), 0 !== +t ? (this.attrs.blur = t, e.filter = i + p + h + ".Blur(pixelradius=" + (+t || 1.5) + ")", e.margin = n.format("-{0}px 0 0 -{0}px", r(+t || 1.5))) : (e.filter = i, e.margin = 0, delete this.attrs.blur), this
            }, n._engine.path = function(t, e) {
                var n = A("shape");
                n.style.cssText = v, n.coordsize = b + p + b, n.coordorigin = e.coordorigin;
                var i = new S(n, e),
                    a = {
                        fill: "none",
                        stroke: "#000"
                    };
                t && (a.path = t), i.type = "path", i.path = [], i.Path = f, k(i, a), e.canvas.appendChild(n);
                var r = A("skew");
                return r.on = !0, n.appendChild(r), i.skew = r, i.transform(f), i
            }, n._engine.rect = function(t, e, i, a, r, s) {
                var o = n._rectPath(e, i, a, r, s),
                    l = t.path(o),
                    d = l.attrs;
                return l.X = d.x = e, l.Y = d.y = i, l.W = d.width = a, l.H = d.height = r, d.r = s, d.path = o, l.type = "rect", l
            }, n._engine.ellipse = function(t, e, n, i, a) {
                var r = t.path();
                return r.attrs, r.X = e - i, r.Y = n - a, r.W = 2 * i, r.H = 2 * a, r.type = "ellipse", k(r, {
                    cx: e,
                    cy: n,
                    rx: i,
                    ry: a
                }), r
            }, n._engine.circle = function(t, e, n, i) {
                var a = t.path();
                return a.attrs, a.X = e - i, a.Y = n - i, a.W = a.H = 2 * i, a.type = "circle", k(a, {
                    cx: e,
                    cy: n,
                    r: i
                }), a
            }, n._engine.image = function(t, e, i, a, r, s) {
                var o = n._rectPath(i, a, r, s),
                    l = t.path(o).attr({
                        stroke: "none"
                    }),
                    u = l.attrs,
                    c = l.node,
                    h = c.getElementsByTagName(d)[0];
                return u.src = e, l.X = u.x = i, l.Y = u.y = a, l.W = u.width = r, l.H = u.height = s, u.path = o, l.type = "image", h.parentNode == c && c.removeChild(h), h.rotate = !0, h.src = e, h.type = "tile", l._.fillpos = [i, a], l._.fillsize = [r, s], c.appendChild(h), D(l, 1, 1, 0, 0, 0), l
            }, n._engine.text = function(t, i, a, s) {
                var o = A("shape"),
                    l = A("path"),
                    d = A("textpath");
                i = i || 0, a = a || 0, s = s || "", l.v = n.format("m{0},{1}l{2},{1}", r(i * b), r(a * b), r(i * b) + 1), l.textpathok = !0, d.string = e(s), d.on = !0, o.style.cssText = v, o.coordsize = b + p + b, o.coordorigin = "0 0";
                var u = new S(o, t),
                    c = {
                        fill: "#000",
                        stroke: "none",
                        font: n._availableAttrs.font,
                        text: s
                    };
                u.shape = o, u.path = l, u.textpath = d, u.type = "text", u.attrs.text = e(s), u.attrs.x = i, u.attrs.y = a, u.attrs.w = 1, u.attrs.h = 1, k(u, c), o.appendChild(d), o.appendChild(l), t.canvas.appendChild(o);
                var h = A("skew");
                return h.on = !0, o.appendChild(h), u.skew = h, u.transform(f), u
            }, n._engine.setSize = function(t, e) {
                var i = this.canvas.style;
                return this.width = t, this.height = e, t == +t && (t += "px"), e == +e && (e += "px"), i.width = t, i.height = e, i.clip = "rect(0 " + t + " " + e + " 0)", this._viewBox && n._engine.setViewBox.apply(this, this._viewBox), this
            }, n._engine.setViewBox = function(t, e, i, a, r) {
                n.eve("raphael.setViewBox", this, this._viewBox, [t, e, i, a, r]);
                var o, l, d = this.width,
                    u = this.height,
                    c = 1 / s(i / d, a / u);
                return r && (o = u / a, l = d / i, d > i * o && (t -= (d - i * o) / 2 / o), u > a * l && (e -= (u - a * l) / 2 / l)), this._viewBox = [t, e, i, a, !! r], this._viewBoxShift = {
                    dx: -t,
                    dy: -e,
                    scale: c
                }, this.forEach(function(t) {
                    t.transform("...")
                }), this
            };
            var A;
            n._engine.initWin = function(t) {
                var e = t.document;
                e.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
                try {
                    !e.namespaces.rvml && e.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), A = function(t) {
                        return e.createElement("<rvml:" + t + ' class="rvml">')
                    }
                } catch (n) {
                    A = function(t) {
                        return e.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
                    }
                }
            }, n._engine.initWin(n._g.win), n._engine.create = function() {
                var t = n._getContainer.apply(0, arguments),
                    e = t.container,
                    i = t.height,
                    a = t.width,
                    r = t.x,
                    s = t.y;
                if (!e) throw new Error("VML container not found.");
                var o = new n._Paper,
                    l = o.canvas = n._g.doc.createElement("div"),
                    d = l.style;
                return r = r || 0, s = s || 0, a = a || 512, i = i || 342, o.width = a, o.height = i, a == +a && (a += "px"), i == +i && (i += "px"), o.coordsize = 1e3 * b + p + 1e3 * b, o.coordorigin = "0 0", o.span = n._g.doc.createElement("span"), o.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;", l.appendChild(o.span), d.cssText = n.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", a, i), 1 == e ? (n._g.doc.body.appendChild(l), d.left = r + "px", d.top = s + "px", d.position = "absolute") : e.firstChild ? e.insertBefore(l, e.firstChild) : e.appendChild(l), o.renderfix = function() {}, o
            }, n.prototype.clear = function() {
                n.eve("raphael.clear", this), this.canvas.innerHTML = f, this.span = n._g.doc.createElement("span"), this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;", this.canvas.appendChild(this.span), this.bottom = this.top = null
            }, n.prototype.remove = function() {
                n.eve("raphael.remove", this), this.canvas.parentNode.removeChild(this.canvas);
                for (var t in this) this[t] = "function" == typeof this[t] ? n._removedFactory(t) : null;
                return !0
            };
            var F = n.st;
            for (var E in C) C[t](E) && !F[t](E) && (F[E] = function(t) {
                return function() {
                    var e = arguments;
                    return this.forEach(function(n) {
                        n[t].apply(n, e)
                    })
                }
            }(E))
        }
    }(), k.was ? T.win.Raphael = n : Raphael = n, n
}), $(function() {
    ! function() {
        var t = window.location.href;
        t = t.replace(window.location.search, ""), t = t.replace(/\/create$/, ""), t = t.replace(/\/([0-9]+)\/edit/, "");
        var e = $('#side-menu a[href="' + t + '"]');
        e.addClass("active").parents("li").addClass("active").end().parents("ul").addClass("collapse").addClass("in")
    }(),
    function() {
        var t = $("#dataTable"),
            e = [],
            n = [];
        t.find("th").each(function(t) {
            var i = {};
            i.orderable = $(this).data("sortable"), void 0 == i.orderable && (i.orderable = !0);
            var a = $(this).data("searchable");
            void 0 === a && (a = !0), a === !1 && (a = !1), i.orderable = i.orderable && !$(this).is(":last-child"), i.searchable = a && !$(this).is(":last-child"), $(this).data("sortable-default") && e.push([t, $(this).data("sortable-default")]), n.push(i)
        });
        var i = {
            language: window.admin.lang.table,
            stateSave: t.data("statesave"),
            lengthMenu: [
                [10, 25, 50, -1],
                [10, 25, 50, window.admin.lang.table.all]
            ],
            ordering: t.data("ordering"),
            columns: n
        };
        e.length > 0 && (i.order = e);
        var a;
        (a = t.data("ajax")) && (i.serverSide = !0, i.processing = !0, i.ajax = {
            url: a,
            data: function(t) {
                t.datatable_request = "true"
            }
        }), t.dataTable(i);
        var r = t.DataTable();
        $("#dataTable tfoot td").each(function() {
            if (!$(this).is(":last-child")) {
                var t = $(this).index(),
                    e = $("#dataTable thead th").eq(t).text(),
                    n = $('<input type="text" placeholder="' + e + '" />');
                $(this).html(n), n.on("keyup change", function() {
                    r.column(t).search(this.value).draw()
                })
            }
        })
    }(),
    function() {
        $(document).delegate(".btn-delete", "click", function(t) {
            t.preventDefault();
            var e = $(this).closest("form");
            bootbox.confirm(window.admin.lang.table["delete-confirm"], function(t) {
                t && e.submit()
            })
        })
    }(),
    function() {
        $("html").tooltip({
            selector: "[data-toggle=tooltip]",
            container: "body"
        })
    }(),
    function() {
        $(".multiselect").multiselect({
            nonSelectedText: window.admin.lang.select.nothing,
            nSelectedText: window.admin.lang.select.selected,
            onChange: function(t) {
                var e = this.$select,
                    n = e.data("select-type"),
                    i = e.data("nullable");
                if ("single" == n && i) {
                    var a = [];
                    e.find("option").each(function() {
                        $(this).val() !== t.val() && a.push($(this).val())
                    }), this.deselect(a)
                }
            }
        })
    }(),
    function() {
        $(document).delegate('*[data-toggle="lightbox"]', "click", function(t) {
            t.preventDefault(), $(this).ekkoLightbox({
                always_show_close: !1
            })
        })
    }(),
    function() {
        $('input[type="text"]:first').focus()
    }(),
    function() {
        bootbox.setDefaults("locale", window.admin.locale)
    }(),
    function() {
        $(".datepicker").datetimepicker({
            language: window.admin.locale,
            icons: {
                time: "fa fa-clock-o",
                date: "fa fa-calendar",
                up: "fa fa-arrow-up",
                down: "fa fa-arrow-down"
            }
        }).trigger("dp.change")
    }(),
    function() {
        $(".img-container a.img-delete").click(function(t) {
            t.preventDefault();
            var e = $(this),
                n = e.closest(".img-container"),
                i = e.data("name") + "ConfirmDelete";
            $('<input type="checkbox" checked="checked" name="' + i + '" class="hidden"/>').insertAfter(n), n.remove()
        })
    }()
}), function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : t.bootbox = e(t.jQuery)
}(this, function t(e, n) {
    "use strict";

    function i(t) {
        var e = _[f.locale];
        return e ? e[t] : _.en[t]
    }

    function a(t, n, i) {
        t.stopPropagation(), t.preventDefault();
        var a = e.isFunction(i) && i(t) === !1;
        a || n.modal("hide")
    }

    function r(t) {
        var e, n = 0;
        for (e in t) n++;
        return n
    }

    function s(t, n) {
        var i = 0;
        e.each(t, function(t, e) {
            n(t, e, i++)
        })
    }

    function o(t) {
        var n, i;
        if ("object" != typeof t) throw new Error("Please supply an object of options");
        if (!t.message) throw new Error("Please specify a message");
        return t = e.extend({}, f, t), t.buttons || (t.buttons = {}), t.backdrop = t.backdrop ? "static" : !1, n = t.buttons, i = r(n), s(n, function(t, a, r) {
            if (e.isFunction(a) && (a = n[t] = {
                callback: a
            }), "object" !== e.type(a)) throw new Error("button with key " + t + " must be an object");
            a.label || (a.label = t), a.className || (a.className = 2 >= i && r === i - 1 ? "btn-primary" : "btn-default")
        }), t
    }

    function l(t, e) {
        var n = t.length,
            i = {};
        if (1 > n || n > 2) throw new Error("Invalid argument length");
        return 2 === n || "string" == typeof t[0] ? (i[e[0]] = t[0], i[e[1]] = t[1]) : i = t[0], i
    }

    function d(t, n, i) {
        return e.extend(!0, {}, t, l(n, i))
    }

    function u(t, e, n, i) {
        var a = {
            className: "bootbox-" + t,
            buttons: c.apply(null, e)
        };
        return h(d(a, i, n), e)
    }

    function c() {
        for (var t = {}, e = 0, n = arguments.length; n > e; e++) {
            var a = arguments[e],
                r = a.toLowerCase(),
                s = a.toUpperCase();
            t[r] = {
                label: i(s)
            }
        }
        return t
    }

    function h(t, e) {
        var i = {};
        return s(e, function(t, e) {
            i[e] = !0
        }), s(t.buttons, function(t) {
            if (i[t] === n) throw new Error("button key " + t + " is not allowed (options are " + e.join("\n") + ")")
        }), t
    }
    var p = {
        dialog: "<div class='bootbox modal' tabindex='-1' role='dialog'><div class='modal-dialog'><div class='modal-content'><div class='modal-body'><div class='bootbox-body'></div></div></div></div></div>",
        header: "<div class='modal-header'><h4 class='modal-title'></h4></div>",
        footer: "<div class='modal-footer'></div>",
        closeButton: "<button type='button' class='bootbox-close-button close' data-dismiss='modal' aria-hidden='true'>&times;</button>",
        form: "<form class='bootbox-form'></form>",
        inputs: {
            text: "<input class='bootbox-input bootbox-input-text form-control' autocomplete=off type=text />",
            textarea: "<textarea class='bootbox-input bootbox-input-textarea form-control'></textarea>",
            email: "<input class='bootbox-input bootbox-input-email form-control' autocomplete='off' type='email' />",
            select: "<select class='bootbox-input bootbox-input-select form-control'></select>",
            checkbox: "<div class='checkbox'><label><input class='bootbox-input bootbox-input-checkbox' type='checkbox' /></label></div>",
            date: "<input class='bootbox-input bootbox-input-date form-control' autocomplete=off type='date' />",
            time: "<input class='bootbox-input bootbox-input-time form-control' autocomplete=off type='time' />",
            number: "<input class='bootbox-input bootbox-input-number form-control' autocomplete=off type='number' />",
            password: "<input class='bootbox-input bootbox-input-password form-control' autocomplete='off' type='password' />"
        }
    }, f = {
            locale: "en",
            backdrop: !0,
            animate: !0,
            className: null,
            closeButton: !0,
            show: !0,
            container: "body"
        }, m = {};
    m.alert = function() {
        var t;
        if (t = u("alert", ["ok"], ["message", "callback"], arguments), t.callback && !e.isFunction(t.callback)) throw new Error("alert requires callback property to be a function when provided");
        return t.buttons.ok.callback = t.onEscape = function() {
            return e.isFunction(t.callback) ? t.callback() : !0
        }, m.dialog(t)
    }, m.confirm = function() {
        var t;
        if (t = u("confirm", ["cancel", "confirm"], ["message", "callback"], arguments), t.buttons.cancel.callback = t.onEscape = function() {
            return t.callback(!1)
        }, t.buttons.confirm.callback = function() {
            return t.callback(!0)
        }, !e.isFunction(t.callback)) throw new Error("confirm requires a callback");
        return m.dialog(t)
    }, m.prompt = function() {
        var t, i, a, r, o, l, u;
        if (r = e(p.form), i = {
            className: "bootbox-prompt",
            buttons: c("cancel", "confirm"),
            value: "",
            inputType: "text"
        }, t = h(d(i, arguments, ["title", "callback"]), ["cancel", "confirm"]), l = t.show === n ? !0 : t.show, t.message = r, t.buttons.cancel.callback = t.onEscape = function() {
            return t.callback(null)
        }, t.buttons.confirm.callback = function() {
            var n;
            switch (t.inputType) {
                case "text":
                case "textarea":
                case "email":
                case "select":
                case "date":
                case "time":
                case "number":
                case "password":
                    n = o.val();
                    break;
                case "checkbox":
                    var i = o.find("input:checked");
                    n = [], s(i, function(t, i) {
                        n.push(e(i).val())
                    })
            }
            return t.callback(n)
        }, t.show = !1, !t.title) throw new Error("prompt requires a title");
        if (!e.isFunction(t.callback)) throw new Error("prompt requires a callback");
        if (!p.inputs[t.inputType]) throw new Error("invalid prompt type");
        switch (o = e(p.inputs[t.inputType]), t.inputType) {
            case "text":
            case "textarea":
            case "email":
            case "date":
            case "time":
            case "number":
            case "password":
                o.val(t.value);
                break;
            case "select":
                var f = {};
                if (u = t.inputOptions || [], !u.length) throw new Error("prompt with select requires options");
                s(u, function(t, i) {
                    var a = o;
                    if (i.value === n || i.text === n) throw new Error("given options in wrong format");
                    i.group && (f[i.group] || (f[i.group] = e("<optgroup/>").attr("label", i.group)), a = f[i.group]), a.append("<option value='" + i.value + "'>" + i.text + "</option>")
                }), s(f, function(t, e) {
                    o.append(e)
                }), o.val(t.value);
                break;
            case "checkbox":
                var _ = e.isArray(t.value) ? t.value : [t.value];
                if (u = t.inputOptions || [], !u.length) throw new Error("prompt with checkbox requires options");
                if (!u[0].value || !u[0].text) throw new Error("given options in wrong format");
                o = e("<div/>"), s(u, function(n, i) {
                    var a = e(p.inputs[t.inputType]);
                    a.find("input").attr("value", i.value), a.find("label").append(i.text), s(_, function(t, e) {
                        e === i.value && a.find("input").prop("checked", !0)
                    }), o.append(a)
                })
        }
        return t.placeholder && o.attr("placeholder", t.placeholder), t.pattern && o.attr("pattern", t.pattern), r.append(o), r.on("submit", function(t) {
            t.preventDefault(), t.stopPropagation(), a.find(".btn-primary").click()
        }), a = m.dialog(t), a.off("shown.bs.modal"), a.on("shown.bs.modal", function() {
            o.focus()
        }), l === !0 && a.modal("show"), a
    }, m.dialog = function(t) {
        t = o(t);
        var n = e(p.dialog),
            i = n.find(".modal-dialog"),
            r = n.find(".modal-body"),
            l = t.buttons,
            d = "",
            u = {
                onEscape: t.onEscape
            };
        if (s(l, function(t, e) {
            d += "<button data-bb-handler='" + t + "' type='button' class='btn " + e.className + "'>" + e.label + "</button>", u[t] = e.callback
        }), r.find(".bootbox-body").html(t.message), t.animate === !0 && n.addClass("fade"), t.className && n.addClass(t.className), "large" === t.size && i.addClass("modal-lg"), "small" === t.size && i.addClass("modal-sm"), t.title && r.before(p.header), t.closeButton) {
            var c = e(p.closeButton);
            t.title ? n.find(".modal-header").prepend(c) : c.css("margin-top", "-10px").prependTo(r)
        }
        return t.title && n.find(".modal-title").html(t.title), d.length && (r.after(p.footer), n.find(".modal-footer").html(d)), n.on("hidden.bs.modal", function(t) {
            t.target === this && n.remove()
        }), n.on("shown.bs.modal", function() {
            n.find(".btn-primary:first").focus()
        }), n.on("escape.close.bb", function(t) {
            u.onEscape && a(t, n, u.onEscape)
        }), n.on("click", ".modal-footer button", function(t) {
            var i = e(this).data("bb-handler");
            a(t, n, u[i])
        }), n.on("click", ".bootbox-close-button", function(t) {
            a(t, n, u.onEscape)
        }), n.on("keyup", function(t) {
            27 === t.which && n.trigger("escape.close.bb")
        }), e(t.container).append(n), n.modal({
            backdrop: t.backdrop,
            keyboard: !1,
            show: !1
        }), t.show && n.modal("show"), n
    }, m.setDefaults = function() {
        var t = {};
        2 === arguments.length ? t[arguments[0]] = arguments[1] : t = arguments[0], e.extend(f, t)
    }, m.hideAll = function() {
        return e(".bootbox").modal("hide"), m
    };
    var _ = {
        br: {
            OK: "OK",
            CANCEL: "Cancelar",
            CONFIRM: "Sim"
        },
        cs: {
            OK: "OK",
            CANCEL: "Zrušit",
            CONFIRM: "Potvrdit"
        },
        da: {
            OK: "OK",
            CANCEL: "Annuller",
            CONFIRM: "Accepter"
        },
        de: {
            OK: "OK",
            CANCEL: "Abbrechen",
            CONFIRM: "Akzeptieren"
        },
        el: {
            OK: "Εντάξει",
            CANCEL: "Ακύρωση",
            CONFIRM: "Επιβεβαίωση"
        },
        en: {
            OK: "OK",
            CANCEL: "Cancel",
            CONFIRM: "OK"
        },
        es: {
            OK: "OK",
            CANCEL: "Cancelar",
            CONFIRM: "Aceptar"
        },
        et: {
            OK: "OK",
            CANCEL: "Katkesta",
            CONFIRM: "OK"
        },
        fi: {
            OK: "OK",
            CANCEL: "Peruuta",
            CONFIRM: "OK"
        },
        fr: {
            OK: "OK",
            CANCEL: "Annuler",
            CONFIRM: "D'accord"
        },
        he: {
            OK: "אישור",
            CANCEL: "ביטול",
            CONFIRM: "אישור"
        },
        id: {
            OK: "OK",
            CANCEL: "Batal",
            CONFIRM: "OK"
        },
        it: {
            OK: "OK",
            CANCEL: "Annulla",
            CONFIRM: "Conferma"
        },
        ja: {
            OK: "OK",
            CANCEL: "キャンセル",
            CONFIRM: "確認"
        },
        lt: {
            OK: "Gerai",
            CANCEL: "Atšaukti",
            CONFIRM: "Patvirtinti"
        },
        lv: {
            OK: "Labi",
            CANCEL: "Atcelt",
            CONFIRM: "Apstiprināt"
        },
        nl: {
            OK: "OK",
            CANCEL: "Annuleren",
            CONFIRM: "Accepteren"
        },
        no: {
            OK: "OK",
            CANCEL: "Avbryt",
            CONFIRM: "OK"
        },
        pl: {
            OK: "OK",
            CANCEL: "Anuluj",
            CONFIRM: "Potwierdź"
        },
        pt: {
            OK: "OK",
            CANCEL: "Cancelar",
            CONFIRM: "Confirmar"
        },
        ru: {
            OK: "OK",
            CANCEL: "Отмена",
            CONFIRM: "Применить"
        },
        sv: {
            OK: "OK",
            CANCEL: "Avbryt",
            CONFIRM: "OK"
        },
        tr: {
            OK: "Tamam",
            CANCEL: "İptal",
            CONFIRM: "Onayla"
        },
        zh_CN: {
            OK: "OK",
            CANCEL: "取消",
            CONFIRM: "确认"
        },
        zh_TW: {
            OK: "OK",
            CANCEL: "取消",
            CONFIRM: "確認"
        }
    };
    return m.init = function(n) {
        return t(n || e)
    }, m
}), ! function(t) {
    "use strict";

    function e(t) {
        return ko.isObservable(t) && !(void 0 === t.destroyAll)
    }

    function n(t, e) {
        for (var n = 0; n < t.length; ++n) e(t[n])
    }

    function i(e, n) {
        this.options = this.mergeOptions(n), this.$select = t(e), this.originalOptions = this.$select.clone()[0].options, this.query = "", this.searchTimeout = null, this.options.multiple = "multiple" === this.$select.attr("multiple"), this.options.onChange = t.proxy(this.options.onChange, this), this.options.onDropdownShow = t.proxy(this.options.onDropdownShow, this), this.options.onDropdownHide = t.proxy(this.options.onDropdownHide, this), this.options.onDropdownShown = t.proxy(this.options.onDropdownShown, this), this.options.onDropdownHidden = t.proxy(this.options.onDropdownHidden, this), this.buildContainer(), this.buildButton(), this.buildDropdown(), this.buildSelectAll(), this.buildDropdownOptions(), this.buildFilter(), this.updateButtonText(), this.updateSelectAll(), this.options.disableIfEmpty && this.disableIfEmpty(), this.$select.hide().after(this.$container)
    }
    "undefined" != typeof ko && ko.bindingHandlers && !ko.bindingHandlers.multiselect && (ko.bindingHandlers.multiselect = {
        init: function(i, a, r) {
            var s = r().selectedOptions,
                o = ko.utils.unwrapObservable(a());
            t(i).multiselect(o), e(s) && (t(i).multiselect("select", ko.utils.unwrapObservable(s)), s.subscribe(function(e) {
                var a = [],
                    r = [];
                n(e, function(t) {
                    switch (t.status) {
                        case "added":
                            a.push(t.value);
                            break;
                        case "deleted":
                            r.push(t.value)
                    }
                }), a.length > 0 && t(i).multiselect("select", a), r.length > 0 && t(i).multiselect("deselect", r)
            }, null, "arrayChange"))
        },
        update: function(n, i, a) {
            var r = a().options,
                s = t(n).data("multiselect"),
                o = ko.utils.unwrapObservable(i());
            e(r) && r.subscribe(function() {
                t(n).multiselect("rebuild")
            }), s ? s.updateOriginalOptions() : t(n).multiselect(o)
        }
    }), i.prototype = {
        defaults: {
            buttonText: function(e) {
                if (0 === e.length) return this.nonSelectedText + ' <b class="caret"></b>';
                if (e.length > this.numberDisplayed) return e.length + " " + this.nSelectedText + ' <b class="caret"></b>';
                var n = "";
                return e.each(function() {
                    var e = void 0 !== t(this).attr("label") ? t(this).attr("label") : t(this).html();
                    n += e + ", "
                }), n.substr(0, n.length - 2) + ' <b class="caret"></b>'
            },
            buttonTitle: function(e) {
                if (0 === e.length) return this.nonSelectedText;
                var n = "";
                return e.each(function() {
                    n += t(this).text() + ", "
                }), n.substr(0, n.length - 2)
            },
            label: function(e) {
                return t(e).attr("label") || t(e).html()
            },
            onChange: function() {},
            onDropdownShow: function() {},
            onDropdownHide: function() {},
            onDropdownShown: function() {},
            onDropdownHidden: function() {},
            buttonClass: "btn btn-default",
            dropRight: !1,
            selectedClass: "active",
            buttonWidth: "auto",
            buttonContainer: '<div class="btn-group" />',
            maxHeight: !1,
            checkboxName: !1,
            includeSelectAllOption: !1,
            includeSelectAllIfMoreThan: 0,
            selectAllText: " Select all",
            selectAllValue: "multiselect-all",
            enableFiltering: !1,
            enableCaseInsensitiveFiltering: !1,
            filterPlaceholder: "Search",
            filterBehavior: "text",
            preventInputChangeEvent: !1,
            nonSelectedText: "None selected",
            nSelectedText: "selected",
            numberDisplayed: 3,
            disableIfEmpty: !1,
            templates: {
                button: '<button type="button" class="multiselect dropdown-toggle" data-toggle="dropdown"></button>',
                ul: '<ul class="multiselect-container dropdown-menu"></ul>',
                filter: '<li class="multiselect-item filter"><div class="input-group"><span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span><input class="form-control multiselect-search" type="text"></div></li>',
                li: '<li><a href="javascript:void(0);"><label></label></a></li>',
                divider: '<li class="multiselect-item divider"></li>',
                liGroup: '<li class="multiselect-item group"><label class="multiselect-group"></label></li>'
            }
        },
        constructor: i,
        buildContainer: function() {
            this.$container = t(this.options.buttonContainer), this.$container.on("show.bs.dropdown", this.options.onDropdownShow), this.$container.on("hide.bs.dropdown", this.options.onDropdownHide), this.$container.on("shown.bs.dropdown", this.options.onDropdownShown), this.$container.on("hidden.bs.dropdown", this.options.onDropdownHidden)
        },
        buildButton: function() {
            this.$button = t(this.options.templates.button).addClass(this.options.buttonClass), this.$select.prop("disabled") ? this.disable() : this.enable(), this.options.buttonWidth && "auto" !== this.options.buttonWidth && (this.$button.css({
                width: this.options.buttonWidth
            }), this.$container.css({
                width: this.options.buttonWidth
            }));
            var e = this.$select.attr("tabindex");
            e && this.$button.attr("tabindex", e), this.$container.prepend(this.$button)
        },
        buildDropdown: function() {
            this.$ul = t(this.options.templates.ul), this.options.dropRight && this.$ul.addClass("pull-right"), this.options.maxHeight && this.$ul.css({
                "max-height": this.options.maxHeight + "px",
                "overflow-y": "auto",
                "overflow-x": "hidden"
            }), this.$container.append(this.$ul)
        },
        buildDropdownOptions: function() {
            this.$select.children().each(t.proxy(function(e, n) {
                var i = t(n).prop("tagName").toLowerCase();
                t(n).prop("value") !== this.options.selectAllValue && ("optgroup" === i ? this.createOptgroup(n) : "option" === i && ("divider" === t(n).data("role") ? this.createDivider() : this.createOptionValue(n)))
            }, this)), t("li input", this.$ul).on("change", t.proxy(function(e) {
                var n = t(e.target),
                    i = n.prop("checked") || !1,
                    a = n.val() === this.options.selectAllValue;
                this.options.selectedClass && (i ? n.parents("li").addClass(this.options.selectedClass) : n.parents("li").removeClass(this.options.selectedClass));
                var r = n.val(),
                    s = this.getOptionByValue(r),
                    o = t("option", this.$select).not(s),
                    l = t("input", this.$container).not(n);
                return a && (i ? this.selectAll() : this.deselectAll()), a || (i ? (s.prop("selected", !0), this.options.multiple ? s.prop("selected", !0) : (this.options.selectedClass && t(l).parents("li").removeClass(this.options.selectedClass), t(l).prop("checked", !1), o.prop("selected", !1), this.$button.click()), "active" === this.options.selectedClass && o.parents("a").css("outline", "")) : s.prop("selected", !1)), this.$select.change(), this.updateButtonText(), this.updateSelectAll(), this.options.onChange(s, i), this.options.preventInputChangeEvent ? !1 : void 0
            }, this)), t("li a", this.$ul).on("touchstart click", function(e) {
                e.stopPropagation();
                var n = t(e.target);
                if (e.shiftKey) {
                    var i = n.prop("checked") || !1;
                    if (i) {
                        var a = n.parents("li:last").siblings('li[class="active"]:first'),
                            r = n.parents("li").index(),
                            s = a.index();
                        r > s ? n.parents("li:last").prevUntil(a).each(function() {
                            t(this).find("input:first").prop("checked", !0).trigger("change")
                        }) : n.parents("li:last").nextUntil(a).each(function() {
                            t(this).find("input:first").prop("checked", !0).trigger("change")
                        })
                    }
                }
                n.blur()
            }), this.$container.off("keydown.multiselect").on("keydown.multiselect", t.proxy(function(e) {
                if (!t('input[type="text"]', this.$container).is(":focus"))
                    if (9 !== e.keyCode && 27 !== e.keyCode || !this.$container.hasClass("open")) {
                        var n = t(this.$container).find("li:not(.divider):not(.disabled) a").filter(":visible");
                        if (!n.length) return;
                        var i = n.index(n.filter(":focus"));
                        38 === e.keyCode && i > 0 ? i-- : 40 === e.keyCode && i < n.length - 1 ? i++ : ~i || (i = 0);
                        var a = n.eq(i);
                        if (a.focus(), 32 === e.keyCode || 13 === e.keyCode) {
                            var r = a.find("input");
                            r.prop("checked", !r.prop("checked")), r.change()
                        }
                        e.stopPropagation(), e.preventDefault()
                    } else this.$button.click()
            }, this))
        },
        createOptionValue: function(e) {
            t(e).is(":selected") && t(e).prop("selected", !0);
            var n = this.options.label(e),
                i = t(e).val(),
                a = this.options.multiple ? "checkbox" : "radio",
                r = t(this.options.templates.li);
            t("label", r).addClass(a), t("label", r).append(this.options.checkboxName ? '<input type="' + a + '" name="' + this.options.checkboxName + '" />' : '<input type="' + a + '" />');
            var s = t(e).prop("selected") || !1,
                o = t("input", r);
            o.val(i), i === this.options.selectAllValue && (r.addClass("multiselect-item multiselect-all"), o.parent().parent().addClass("multiselect-all")), t("label", r).append(" " + n), this.$ul.append(r), t(e).is(":disabled") && o.attr("disabled", "disabled").prop("disabled", !0).parents("a").attr("tabindex", "-1").parents("li").addClass("disabled"), o.prop("checked", s), s && this.options.selectedClass && o.parents("li").addClass(this.options.selectedClass)
        },
        createDivider: function() {
            var e = t(this.options.templates.divider);
            this.$ul.append(e)
        },
        createOptgroup: function(e) {
            var n = t(e).prop("label"),
                i = t(this.options.templates.liGroup);
            t("label", i).text(n), this.$ul.append(i), t(e).is(":disabled") && i.addClass("disabled"), t("option", e).each(t.proxy(function(t, e) {
                this.createOptionValue(e)
            }, this))
        },
        buildSelectAll: function() {
            var e = this.hasSelectAll();
            if (!e && this.options.includeSelectAllOption && this.options.multiple && t("option", this.$select).length > this.options.includeSelectAllIfMoreThan) {
                this.options.includeSelectAllDivider && this.$ul.prepend(t(this.options.templates.divider));
                var n = t(this.options.templates.li);
                t("label", n).addClass("checkbox"), t("label", n).append(this.options.checkboxName ? '<input type="checkbox" name="' + this.options.checkboxName + '" />' : '<input type="checkbox" />');
                var i = t("input", n);
                i.val(this.options.selectAllValue), n.addClass("multiselect-item multiselect-all"), i.parent().parent().addClass("multiselect-all"), t("label", n).append(" " + this.options.selectAllText), this.$ul.prepend(n), i.prop("checked", !1)
            }
        },
        buildFilter: function() {
            if (this.options.enableFiltering || this.options.enableCaseInsensitiveFiltering) {
                var e = Math.max(this.options.enableFiltering, this.options.enableCaseInsensitiveFiltering);
                this.$select.find("option").length >= e && (this.$filter = t(this.options.templates.filter), t("input", this.$filter).attr("placeholder", this.options.filterPlaceholder), this.$ul.prepend(this.$filter), this.$filter.val(this.query).on("click", function(t) {
                    t.stopPropagation()
                }).on("input keydown", t.proxy(function(e) {
                    clearTimeout(this.searchTimeout), this.searchTimeout = this.asyncFunction(t.proxy(function() {
                        this.query !== e.target.value && (this.query = e.target.value, t.each(t("li", this.$ul), t.proxy(function(e, n) {
                            var i = t("input", n).val(),
                                a = t("label", n).text(),
                                r = "";
                            if ("text" === this.options.filterBehavior ? r = a : "value" === this.options.filterBehavior ? r = i : "both" === this.options.filterBehavior && (r = a + "\n" + i), i !== this.options.selectAllValue && a) {
                                var s = !1;
                                this.options.enableCaseInsensitiveFiltering && r.toLowerCase().indexOf(this.query.toLowerCase()) > -1 ? s = !0 : r.indexOf(this.query) > -1 && (s = !0), s ? t(n).show().removeClass("filter-hidden") : t(n).hide().addClass("filter-hidden")
                            }
                        }, this))), this.updateSelectAll()
                    }, this), 300, this)
                }, this)))
            }
        },
        destroy: function() {
            this.$container.remove(), this.$select.show(), this.$select.data("multiselect", null)
        },
        refresh: function() {
            t("option", this.$select).each(t.proxy(function(e, n) {
                var i = t("li input", this.$ul).filter(function() {
                    return t(this).val() === t(n).val()
                });
                t(n).is(":selected") ? (i.prop("checked", !0), this.options.selectedClass && i.parents("li").addClass(this.options.selectedClass)) : (i.prop("checked", !1), this.options.selectedClass && i.parents("li").removeClass(this.options.selectedClass)), t(n).is(":disabled") ? i.attr("disabled", "disabled").prop("disabled", !0).parents("li").addClass("disabled") : i.prop("disabled", !1).parents("li").removeClass("disabled")
            }, this)), this.updateButtonText(), this.updateSelectAll()
        },
        select: function(e, n) {
            t.isArray(e) || (e = [e]);
            for (var i = 0; i < e.length; i++) {
                var a = e[i],
                    r = this.getOptionByValue(a),
                    s = this.getInputByValue(a);
                void 0 !== r && void 0 !== s && (this.options.multiple || this.deselectAll(!1), this.options.selectedClass && s.parents("li").addClass(this.options.selectedClass), s.prop("checked", !0), r.prop("selected", !0))
            }
            this.updateButtonText(), n && 1 === e.length && this.options.onChange(r, !0)
        },
        clearSelection: function() {
            this.deselectAll(!1), this.updateButtonText(), this.updateSelectAll()
        },
        deselect: function(e, n) {
            t.isArray(e) || (e = [e]);
            for (var i = 0; i < e.length; i++) {
                var a = e[i],
                    r = this.getOptionByValue(a),
                    s = this.getInputByValue(a);
                void 0 !== r && void 0 !== s && (this.options.selectedClass && s.parents("li").removeClass(this.options.selectedClass), s.prop("checked", !1), r.prop("selected", !1))
            }
            this.updateButtonText(), n && 1 === e.length && this.options.onChange(r, !1)
        },
        selectAll: function() {
            var e = t("li input[type='checkbox']:enabled", this.$ul),
                n = e.filter(":visible"),
                i = e.length,
                a = n.length;
            if (n.prop("checked", !0), t("li:not(.divider):not(.disabled)", this.$ul).filter(":visible").addClass(this.options.selectedClass), i === a) t("option:enabled", this.$select).prop("selected", !0);
            else {
                var r = n.map(function() {
                    return t(this).val()
                }).get();
                t("option:enabled", this.$select).filter(function() {
                    return -1 !== t.inArray(t(this).val(), r)
                }).prop("selected", !0)
            }
        },
        deselectAll: function(e) {
            var e = "undefined" == typeof e ? !0 : e;
            if (e) {
                var n = t("li input[type='checkbox']:enabled", this.$ul).filter(":visible");
                n.prop("checked", !1);
                var i = n.map(function() {
                    return t(this).val()
                }).get();
                t("option:enabled", this.$select).filter(function() {
                    return -1 !== t.inArray(t(this).val(), i)
                }).prop("selected", !1), this.options.selectedClass && t("li:not(.divider):not(.disabled)", this.$ul).filter(":visible").removeClass(this.options.selectedClass)
            } else t("li input[type='checkbox']:enabled", this.$ul).prop("checked", !1), t("option:enabled", this.$select).prop("selected", !1), this.options.selectedClass && t("li:not(.divider):not(.disabled)", this.$ul).removeClass(this.options.selectedClass)
        },
        rebuild: function() {
            this.$ul.html(""), this.options.multiple = "multiple" === this.$select.attr("multiple"), this.buildSelectAll(), this.buildDropdownOptions(), this.buildFilter(), this.updateButtonText(), this.updateSelectAll(), this.options.disableIfEmpty && this.disableIfEmpty(), this.options.dropRight && this.$ul.addClass("pull-right")
        },
        dataprovider: function(e) {
            var i = "",
                a = 0;
            t.each(e, function(e, r) {
                t.isArray(r.children) ? (a++, i += '<optgroup label="' + (r.title || "Group " + a) + '">', n(r.children, function(t) {
                    i += '<option value="' + t.value + '">' + (t.label || t.value) + "</option>"
                }), i += "</optgroup>") : i += '<option value="' + r.value + '">' + (r.label || r.value) + "</option>"
            }), this.$select.html(i), this.rebuild()
        },
        enable: function() {
            this.$select.prop("disabled", !1), this.$button.prop("disabled", !1).removeClass("disabled")
        },
        disable: function() {
            this.$select.prop("disabled", !0), this.$button.prop("disabled", !0).addClass("disabled")
        },
        disableIfEmpty: function() {
            t("option", this.$select).length <= 0 ? this.disable() : this.enable()
        },
        setOptions: function(t) {
            this.options = this.mergeOptions(t)
        },
        mergeOptions: function(e) {
            return t.extend(!0, {}, this.defaults, e)
        },
        hasSelectAll: function() {
            return t("li." + this.options.selectAllValue, this.$ul).length > 0
        },
        updateSelectAll: function() {
            if (this.hasSelectAll()) {
                var e = t("li:not(.multiselect-item):not(.filter-hidden) input:enabled", this.$ul),
                    n = e.length,
                    i = e.filter(":checked").length,
                    a = t("li." + this.options.selectAllValue, this.$ul),
                    r = a.find("input");
                i > 0 && i === n ? (r.prop("checked", !0), a.addClass(this.options.selectedClass)) : (r.prop("checked", !1), a.removeClass(this.options.selectedClass))
            }
        },
        updateButtonText: function() {
            var e = this.getSelected();
            t("button.multiselect", this.$container).html(this.options.buttonText(e, this.$select)), t("button.multiselect", this.$container).attr("title", this.options.buttonTitle(e, this.$select))
        },
        getSelected: function() {
            return t("option", this.$select).filter(":selected")
        },
        getOptionByValue: function(e) {
            for (var n = t("option", this.$select), i = e.toString(), a = 0; a < n.length; a += 1) {
                var r = n[a];
                if (r.value === i) return t(r)
            }
        },
        getInputByValue: function(e) {
            for (var n = t("li input", this.$ul), i = e.toString(), a = 0; a < n.length; a += 1) {
                var r = n[a];
                if (r.value === i) return t(r)
            }
        },
        updateOriginalOptions: function() {
            this.originalOptions = this.$select.clone()[0].options
        },
        asyncFunction: function(t, e, n) {
            var i = Array.prototype.slice.call(arguments, 3);
            return setTimeout(function() {
                t.apply(n || window, i)
            }, e)
        }
    }, t.fn.multiselect = function(e, n, a) {
        return this.each(function() {
            var r = t(this).data("multiselect"),
                s = "object" == typeof e && e;
            r || (r = new i(this, s), t(this).data("multiselect", r)), "string" == typeof e && (r[e](n, a), "destroy" === e && t(this).data("multiselect", !1))
        })
    }, t.fn.multiselect.Constructor = i, t(function() {
        t("select[data-role=multiselect]").multiselect()
    })
}(window.jQuery), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in e)
            if (void 0 !== t.style[n]) return {
                end: e[n]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var n = !1,
            i = this;
        t(this).one("bsTransitionEnd", function() {
            n = !0
        });
        var a = function() {
            n || t(i).trigger(t.support.transition.end)
        };
        return setTimeout(a, e), this
    }, t(function() {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                a = n.data("bs.alert");
            a || n.data("bs.alert", a = new i(this)), "string" == typeof e && a[e].call(n)
        })
    }
    var n = '[data-dismiss="alert"]',
        i = function(e) {
            t(e).on("click", n, this.close)
        };
    i.VERSION = "3.2.0", i.prototype.close = function(e) {
        function n() {
            r.detach().trigger("closed.bs.alert").remove()
        }
        var i = t(this),
            a = i.attr("data-target");
        a || (a = i.attr("href"), a = a && a.replace(/.*(?=#[^\s]*$)/, ""));
        var r = t(a);
        e && e.preventDefault(), r.length || (r = i.hasClass("alert") ? i : i.parent()), r.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", n).emulateTransitionEnd(150) : n())
    };
    var a = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function() {
        return t.fn.alert = a, this
    }, t(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                a = i.data("bs.button"),
                r = "object" == typeof e && e;
            a || i.data("bs.button", a = new n(this, r)), "toggle" == e ? a.toggle() : e && a.setState(e)
        })
    }
    var n = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.isLoading = !1
    };
    n.VERSION = "3.2.0", n.DEFAULTS = {
        loadingText: "loading..."
    }, n.prototype.setState = function(e) {
        var n = "disabled",
            i = this.$element,
            a = i.is("input") ? "val" : "html",
            r = i.data();
        e += "Text", null == r.resetText && i.data("resetText", i[a]()), i[a](null == r[e] ? this.options[e] : r[e]), setTimeout(t.proxy(function() {
            "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n))
        }, this), 0)
    }, n.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && n.prop("checked", !this.$element.hasClass("active")).trigger("change")
        }
        t && this.$element.toggleClass("active")
    };
    var i = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function() {
        return t.fn.button = i, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
        var i = t(n.target);
        i.hasClass("btn") || (i = i.closest(".btn")), e.call(i, "toggle"), n.preventDefault()
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                a = i.data("bs.carousel"),
                r = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e),
                s = "string" == typeof e ? e : r.slide;
            a || i.data("bs.carousel", a = new n(this, r)), "number" == typeof e ? a.to(e) : s ? a[s]() : r.interval && a.pause().cycle()
        })
    }
    var n = function(e, n) {
        this.$element = t(e).on("keydown.bs.carousel", t.proxy(this.keydown, this)), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    n.VERSION = "3.2.0", n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
    }, n.prototype.keydown = function(t) {
        switch (t.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
        }
        t.preventDefault()
    }, n.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, n.prototype.to = function(e) {
        var n = this,
            i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            n.to(e)
        }) : i == e ? this.pause().cycle() : this.slide(e > i ? "next" : "prev", t(this.$items[e]))
    }, n.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, n.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, n.prototype.slide = function(e, n) {
        var i = this.$element.find(".item.active"),
            a = n || i[e](),
            r = this.interval,
            s = "next" == e ? "left" : "right",
            o = "next" == e ? "first" : "last",
            l = this;
        if (!a.length) {
            if (!this.options.wrap) return;
            a = this.$element.find(".item")[o]()
        }
        if (a.hasClass("active")) return this.sliding = !1;
        var d = a[0],
            u = t.Event("slide.bs.carousel", {
                relatedTarget: d,
                direction: s
            });
        if (this.$element.trigger(u), !u.isDefaultPrevented()) {
            if (this.sliding = !0, r && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var c = t(this.$indicators.children()[this.getItemIndex(a)]);
                c && c.addClass("active")
            }
            var h = t.Event("slid.bs.carousel", {
                relatedTarget: d,
                direction: s
            });
            return t.support.transition && this.$element.hasClass("slide") ? (a.addClass(e), a[0].offsetWidth, i.addClass(s), a.addClass(s), i.one("bsTransitionEnd", function() {
                a.removeClass([e, s].join(" ")).addClass("active"), i.removeClass(["active", s].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(h)
                }, 0)
            }).emulateTransitionEnd(1e3 * i.css("transition-duration").slice(0, -1))) : (i.removeClass("active"), a.addClass("active"), this.sliding = !1, this.$element.trigger(h)), r && this.cycle(), this
        }
    };
    var i = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = i, this
    }, t(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(n) {
        var i, a = t(this),
            r = t(a.attr("data-target") || (i = a.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (r.hasClass("carousel")) {
            var s = t.extend({}, r.data(), a.data()),
                o = a.attr("data-slide-to");
            o && (s.interval = !1), e.call(r, s), o && r.data("bs.carousel").to(o), n.preventDefault()
        }
    }), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var n = t(this);
            e.call(n, n.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                a = i.data("bs.collapse"),
                r = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
            !a && r.toggle && "show" == e && (e = !e), a || i.data("bs.collapse", a = new n(this, r)), "string" == typeof e && a[e]()
        })
    }
    var n = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.transitioning = null, this.options.parent && (this.$parent = t(this.options.parent)), this.options.toggle && this.toggle()
    };
    n.VERSION = "3.2.0", n.DEFAULTS = {
        toggle: !0
    }, n.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, n.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var n = t.Event("show.bs.collapse");
            if (this.$element.trigger(n), !n.isDefaultPrevented()) {
                var i = this.$parent && this.$parent.find("> .panel > .in");
                if (i && i.length) {
                    var a = i.data("bs.collapse");
                    if (a && a.transitioning) return;
                    e.call(i, "hide"), a || i.data("bs.collapse", null)
                }
                var r = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[r](0), this.transitioning = 1;
                var s = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[r](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                };
                if (!t.support.transition) return s.call(this);
                var o = t.camelCase(["scroll", r].join("-"));
                this.$element.one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(350)[r](this.$element[0][o])
            }
        }
    }, n.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                var i = function() {
                    this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                };
                return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(i, this)).emulateTransitionEnd(350) : i.call(this)
            }
        }
    }, n.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    var i = t.fn.collapse;
    t.fn.collapse = e, t.fn.collapse.Constructor = n, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = i, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(n) {
        var i, a = t(this),
            r = a.attr("data-target") || n.preventDefault() || (i = a.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""),
            s = t(r),
            o = s.data("bs.collapse"),
            l = o ? "toggle" : a.data(),
            d = a.attr("data-parent"),
            u = d && t(d);
        o && o.transitioning || (u && u.find('[data-toggle="collapse"][data-parent="' + d + '"]').not(a).addClass("collapsed"), a[s.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), e.call(s, l)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        e && 3 === e.which || (t(a).remove(), t(r).each(function() {
            var i = n(t(this)),
                a = {
                    relatedTarget: this
                };
            i.hasClass("open") && (i.trigger(e = t.Event("hide.bs.dropdown", a)), e.isDefaultPrevented() || i.removeClass("open").trigger("hidden.bs.dropdown", a))
        }))
    }

    function n(e) {
        var n = e.attr("data-target");
        n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && t(n);
        return i && i.length ? i : e.parent()
    }

    function i(e) {
        return this.each(function() {
            var n = t(this),
                i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new s(this)), "string" == typeof e && i[e].call(n)
        })
    }
    var a = ".dropdown-backdrop",
        r = '[data-toggle="dropdown"]',
        s = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    s.VERSION = "3.2.0", s.prototype.toggle = function(i) {
        var a = t(this);
        if (!a.is(".disabled, :disabled")) {
            var r = n(a),
                s = r.hasClass("open");
            if (e(), !s) {
                "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
                var o = {
                    relatedTarget: this
                };
                if (r.trigger(i = t.Event("show.bs.dropdown", o)), i.isDefaultPrevented()) return;
                a.trigger("focus"), r.toggleClass("open").trigger("shown.bs.dropdown", o)
            }
            return !1
        }
    }, s.prototype.keydown = function(e) {
        if (/(38|40|27)/.test(e.keyCode)) {
            var i = t(this);
            if (e.preventDefault(), e.stopPropagation(), !i.is(".disabled, :disabled")) {
                var a = n(i),
                    s = a.hasClass("open");
                if (!s || s && 27 == e.keyCode) return 27 == e.which && a.find(r).trigger("focus"), i.trigger("click");
                var o = " li:not(.divider):visible a",
                    l = a.find('[role="menu"]' + o + ', [role="listbox"]' + o);
                if (l.length) {
                    var d = l.index(l.filter(":focus"));
                    38 == e.keyCode && d > 0 && d--, 40 == e.keyCode && d < l.length - 1 && d++, ~d || (d = 0), l.eq(d).trigger("focus")
                }
            }
        }
    };
    var o = t.fn.dropdown;
    t.fn.dropdown = i, t.fn.dropdown.Constructor = s, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = o, this
    }, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", r, s.prototype.toggle).on("keydown.bs.dropdown.data-api", r + ', [role="menu"], [role="listbox"]', s.prototype.keydown)
}(jQuery), + function(t) {
    "use strict";

    function e(e, i) {
        return this.each(function() {
            var a = t(this),
                r = a.data("bs.modal"),
                s = t.extend({}, n.DEFAULTS, a.data(), "object" == typeof e && e);
            r || a.data("bs.modal", r = new n(this, s)), "string" == typeof e ? r[e](i) : s.show && r.show(i)
        })
    }
    var n = function(e, n) {
        this.options = n, this.$body = t(document.body), this.$element = t(e), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.2.0", n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, n.prototype.show = function(e) {
        var n = this,
            i = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.backdrop(function() {
            var i = t.support.transition && n.$element.hasClass("fade");
            n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), i && n.$element[0].offsetWidth, n.$element.addClass("in").attr("aria-hidden", !1), n.enforceFocus();
            var a = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            i ? n.$element.find(".modal-dialog").one("bsTransitionEnd", function() {
                n.$element.trigger("focus").trigger(a)
            }).emulateTransitionEnd(300) : n.$element.trigger("focus").trigger(a)
        }))
    }, n.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }, n.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }, n.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function(e) {
        var n = this,
            i = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var a = t.support.transition && i;
            if (this.$backdrop = t('<div class="modal-backdrop ' + i + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
            }, this)), a && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            a ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var r = function() {
                n.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(150) : r()
        } else e && e()
    }, n.prototype.checkScrollbar = function() {
        document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar())
    }, n.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.scrollbarWidth && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", "")
    }, n.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var i = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function() {
        return t.fn.modal = i, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
        var i = t(this),
            a = i.attr("href"),
            r = t(i.attr("data-target") || a && a.replace(/.*(?=#[^\s]+$)/, "")),
            s = r.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(a) && a
            }, r.data(), i.data());
        i.is("a") && n.preventDefault(), r.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || r.one("hidden.bs.modal", function() {
                i.is(":visible") && i.trigger("focus")
            })
        }), e.call(r, s, this)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                a = i.data("bs.tooltip"),
                r = "object" == typeof e && e;
            (a || "destroy" != e) && (a || i.data("bs.tooltip", a = new n(this, r)), "string" == typeof e && a[e]())
        })
    }
    var n = function(t, e) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", t, e)
    };
    n.VERSION = "3.2.0", n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, n.prototype.init = function(e, n, i) {
        this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport);
        for (var a = this.options.trigger.split(" "), r = a.length; r--;) {
            var s = a[r];
            if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != s) {
                var o = "hover" == s ? "mouseenter" : "focusin",
                    l = "hover" == s ? "mouseleave" : "focusout";
                this.$element.on(o + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.getOptions = function(e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, n.prototype.getDelegateOptions = function() {
        var e = {}, n = this.getDefaults();
        return this._options && t.each(this._options, function(t, i) {
            n[t] != i && (e[t] = i)
        }), e
    }, n.prototype.enter = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show()
    }, n.prototype.leave = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide()
    }, n.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var n = t.contains(document.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !n) return;
            var i = this,
                a = this.tip(),
                r = this.getUID(this.type);
            this.setContent(), a.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && a.addClass("fade");
            var s = "function" == typeof this.options.placement ? this.options.placement.call(this, a[0], this.$element[0]) : this.options.placement,
                o = /\s?auto?\s?/i,
                l = o.test(s);
            l && (s = s.replace(o, "") || "top"), a.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(s).data("bs." + this.type, this), this.options.container ? a.appendTo(this.options.container) : a.insertAfter(this.$element);
            var d = this.getPosition(),
                u = a[0].offsetWidth,
                c = a[0].offsetHeight;
            if (l) {
                var h = s,
                    p = this.$element.parent(),
                    f = this.getPosition(p);
                s = "bottom" == s && d.top + d.height + c - f.scroll > f.height ? "top" : "top" == s && d.top - f.scroll - c < 0 ? "bottom" : "right" == s && d.right + u > f.width ? "left" : "left" == s && d.left - u < f.left ? "right" : s, a.removeClass(h).addClass(s)
            }
            var m = this.getCalculatedOffset(s, d, u, c);
            this.applyPlacement(m, s);
            var _ = function() {
                i.$element.trigger("shown.bs." + i.type), i.hoverState = null
            };
            t.support.transition && this.$tip.hasClass("fade") ? a.one("bsTransitionEnd", _).emulateTransitionEnd(150) : _()
        }
    }, n.prototype.applyPlacement = function(e, n) {
        var i = this.tip(),
            a = i[0].offsetWidth,
            r = i[0].offsetHeight,
            s = parseInt(i.css("margin-top"), 10),
            o = parseInt(i.css("margin-left"), 10);
        isNaN(s) && (s = 0), isNaN(o) && (o = 0), e.top = e.top + s, e.left = e.left + o, t.offset.setOffset(i[0], t.extend({
            using: function(t) {
                i.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), i.addClass("in");
        var l = i[0].offsetWidth,
            d = i[0].offsetHeight;
        "top" == n && d != r && (e.top = e.top + r - d);
        var u = this.getViewportAdjustedDelta(n, e, l, d);
        u.left ? e.left += u.left : e.top += u.top;
        var c = u.left ? 2 * u.left - a + l : 2 * u.top - r + d,
            h = u.left ? "left" : "top",
            p = u.left ? "offsetWidth" : "offsetHeight";
        i.offset(e), this.replaceArrow(c, i[0][p], h)
    }, n.prototype.replaceArrow = function(t, e, n) {
        this.arrow().css(n, t ? 50 * (1 - t / e) + "%" : "")
    }, n.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function() {
        function e() {
            "in" != n.hoverState && i.detach(), n.$element.trigger("hidden.bs." + n.type)
        }
        var n = this,
            i = this.tip(),
            a = t.Event("hide.bs." + this.type);
        return this.$element.removeAttr("aria-describedby"), this.$element.trigger(a), a.isDefaultPrevented() ? void 0 : (i.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? i.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e(), this.hoverState = null, this)
    }, n.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function() {
        return this.getTitle()
    }, n.prototype.getPosition = function(e) {
        e = e || this.$element;
        var n = e[0],
            i = "BODY" == n.tagName;
        return t.extend({}, "function" == typeof n.getBoundingClientRect ? n.getBoundingClientRect() : null, {
            scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop(),
            width: i ? t(window).width() : e.outerWidth(),
            height: i ? t(window).height() : e.outerHeight()
        }, i ? {
            top: 0,
            left: 0
        } : e.offset())
    }, n.prototype.getCalculatedOffset = function(t, e, n, i) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - i,
            left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - i / 2,
            left: e.left - n
        } : {
            top: e.top + e.height / 2 - i / 2,
            left: e.left + e.width
        }
    }, n.prototype.getViewportAdjustedDelta = function(t, e, n, i) {
        var a = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return a;
        var r = this.options.viewport && this.options.viewport.padding || 0,
            s = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var o = e.top - r - s.scroll,
                l = e.top + r - s.scroll + i;
            o < s.top ? a.top = s.top - o : l > s.top + s.height && (a.top = s.top + s.height - l)
        } else {
            var d = e.left - r,
                u = e.left + r + n;
            d < s.left ? a.left = s.left - d : u > s.width && (a.left = s.left + s.width - u)
        }
        return a
    }, n.prototype.getTitle = function() {
        var t, e = this.$element,
            n = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
    }, n.prototype.getUID = function(t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, n.prototype.tip = function() {
        return this.$tip = this.$tip || t(this.options.template)
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, n.prototype.enable = function() {
        this.enabled = !0
    }, n.prototype.disable = function() {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function(e) {
        var n = this;
        e && (n = t(e.currentTarget).data("bs." + this.type), n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function() {
        clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = i, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                a = i.data("bs.popover"),
                r = "object" == typeof e && e;
            (a || "destroy" != e) && (a || i.data("bs.popover", a = new n(this, r)), "string" == typeof e && a[e]())
        })
    }
    var n = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.2.0", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").empty()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, n.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, n.prototype.tip = function() {
        return this.$tip || (this.$tip = t(this.options.template)), this.$tip
    };
    var i = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function() {
        return t.fn.popover = i, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(n, i) {
        var a = t.proxy(this.process, this);
        this.$body = t("body"), this.$scrollElement = t(t(n).is("body") ? window : n), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a), this.refresh(), this.process()
    }

    function n(n) {
        return this.each(function() {
            var i = t(this),
                a = i.data("bs.scrollspy"),
                r = "object" == typeof n && n;
            a || i.data("bs.scrollspy", a = new e(this, r)), "string" == typeof n && a[n]()
        })
    }
    e.VERSION = "3.2.0", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function() {
        var e = "offset",
            n = 0;
        t.isWindow(this.$scrollElement[0]) || (e = "position", n = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
        var i = this;
        this.$body.find(this.selector).map(function() {
            var i = t(this),
                a = i.data("target") || i.attr("href"),
                r = /^#./.test(a) && t(a);
            return r && r.length && r.is(":visible") && [
                [r[e]().top + n, a]
            ] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            i.offsets.push(this[0]), i.targets.push(this[1])
        })
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.getScrollHeight(),
            i = this.options.offset + n - this.$scrollElement.height(),
            a = this.offsets,
            r = this.targets,
            s = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), e >= i) return s != (t = r[r.length - 1]) && this.activate(t);
        if (s && e <= a[0]) return s != (t = r[0]) && this.activate(t);
        for (t = a.length; t--;) s != r[t] && e >= a[t] && (!a[t + 1] || e <= a[t + 1]) && this.activate(r[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            i = t(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    };
    var i = t.fn.scrollspy;
    t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = i, this
    }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            n.call(e, e.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                a = i.data("bs.tab");
            a || i.data("bs.tab", a = new n(this)), "string" == typeof e && a[e]()
        })
    }
    var n = function(e) {
        this.element = t(e)
    };
    n.VERSION = "3.2.0", n.prototype.show = function() {
        var e = this.element,
            n = e.closest("ul:not(.dropdown-menu)"),
            i = e.data("target");
        if (i || (i = e.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var a = n.find(".active:last a")[0],
                r = t.Event("show.bs.tab", {
                    relatedTarget: a
                });
            if (e.trigger(r), !r.isDefaultPrevented()) {
                var s = t(i);
                this.activate(e.closest("li"), n), this.activate(s, s.parent(), function() {
                    e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: a
                    })
                })
            }
        }
    }, n.prototype.activate = function(e, n, i) {
        function a() {
            r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), e.addClass("active"), s ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"), i && i()
        }
        var r = n.find("> .active"),
            s = i && t.support.transition && r.hasClass("fade");
        s ? r.one("bsTransitionEnd", a).emulateTransitionEnd(150) : a(), r.removeClass("in")
    };
    var i = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function() {
        return t.fn.tab = i, this
    }, t(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(n) {
        n.preventDefault(), e.call(t(this), "show")
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                a = i.data("bs.affix"),
                r = "object" == typeof e && e;
            a || i.data("bs.affix", a = new n(this, r)), "string" == typeof e && a[e]()
        })
    }
    var n = function(e, i) {
        this.options = t.extend({}, n.DEFAULTS, i), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.2.0", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, n.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = t(document).height(),
                i = this.$target.scrollTop(),
                a = this.$element.offset(),
                r = this.options.offset,
                s = r.top,
                o = r.bottom;
            "object" != typeof r && (o = s = r), "function" == typeof s && (s = r.top(this.$element)), "function" == typeof o && (o = r.bottom(this.$element));
            var l = null != this.unpin && i + this.unpin <= a.top ? !1 : null != o && a.top + this.$element.height() >= e - o ? "bottom" : null != s && s >= i ? "top" : !1;
            if (this.affixed !== l) {
                null != this.unpin && this.$element.css("top", "");
                var d = "affix" + (l ? "-" + l : ""),
                    u = t.Event(d + ".bs.affix");
                this.$element.trigger(u), u.isDefaultPrevented() || (this.affixed = l, this.unpin = "bottom" == l ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(d).trigger(t.Event(d.replace("affix", "affixed"))), "bottom" == l && this.$element.offset({
                    top: e - this.$element.height() - o
                }))
            }
        }
    };
    var i = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function() {
        return t.fn.affix = i, this
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var n = t(this),
                i = n.data();
            i.offset = i.offset || {}, i.offsetBottom && (i.offset.bottom = i.offsetBottom), i.offsetTop && (i.offset.top = i.offsetTop), e.call(n, i)
        })
    })
}(jQuery),
function() {
    "use strict";
    var t, e;
    t = jQuery, e = function(e, n) {
        var i, a, r, s = this;
        return this.options = t.extend({
            title: null,
            footer: null,
            remote: null
        }, t.fn.ekkoLightbox.defaults, n || {}), this.$element = t(e), i = "", this.modal_id = this.options.modal_id ? this.options.modal_id : "ekkoLightbox-" + Math.floor(1e3 * Math.random() + 1), r = '<div class="modal-header"' + (this.options.title || this.options.always_show_close ? "" : ' style="display:none"') + '><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h4 class="modal-title">' + (this.options.title || "&nbsp;") + "</h4></div>", a = '<div class="modal-footer"' + (this.options.footer ? "" : ' style="display:none"') + ">" + this.options.footer + "</div>", t(document.body).append('<div id="' + this.modal_id + '" class="ekko-lightbox modal fade" tabindex="-1"><div class="modal-dialog"><div class="modal-content">' + r + '<div class="modal-body"><div class="ekko-lightbox-container"><div></div></div></div>' + a + "</div></div></div>"), this.modal = t("#" + this.modal_id), this.modal_dialog = this.modal.find(".modal-dialog").first(), this.modal_content = this.modal.find(".modal-content").first(), this.modal_body = this.modal.find(".modal-body").first(), this.lightbox_container = this.modal_body.find(".ekko-lightbox-container").first(), this.lightbox_body = this.lightbox_container.find("> div:first-child").first(), this.showLoading(), this.modal_arrows = null, this.border = {
            top: parseFloat(this.modal_dialog.css("border-top-width")) + parseFloat(this.modal_content.css("border-top-width")) + parseFloat(this.modal_body.css("border-top-width")),
            right: parseFloat(this.modal_dialog.css("border-right-width")) + parseFloat(this.modal_content.css("border-right-width")) + parseFloat(this.modal_body.css("border-right-width")),
            bottom: parseFloat(this.modal_dialog.css("border-bottom-width")) + parseFloat(this.modal_content.css("border-bottom-width")) + parseFloat(this.modal_body.css("border-bottom-width")),
            left: parseFloat(this.modal_dialog.css("border-left-width")) + parseFloat(this.modal_content.css("border-left-width")) + parseFloat(this.modal_body.css("border-left-width"))
        }, this.padding = {
            top: parseFloat(this.modal_dialog.css("padding-top")) + parseFloat(this.modal_content.css("padding-top")) + parseFloat(this.modal_body.css("padding-top")),
            right: parseFloat(this.modal_dialog.css("padding-right")) + parseFloat(this.modal_content.css("padding-right")) + parseFloat(this.modal_body.css("padding-right")),
            bottom: parseFloat(this.modal_dialog.css("padding-bottom")) + parseFloat(this.modal_content.css("padding-bottom")) + parseFloat(this.modal_body.css("padding-bottom")),
            left: parseFloat(this.modal_dialog.css("padding-left")) + parseFloat(this.modal_content.css("padding-left")) + parseFloat(this.modal_body.css("padding-left"))
        }, this.modal.on("show.bs.modal", this.options.onShow.bind(this)).on("shown.bs.modal", function() {
            return s.modal_shown(), s.options.onShown.call(s)
        }).on("hide.bs.modal", this.options.onHide.bind(this)).on("hidden.bs.modal", function() {
            return s.gallery && t(document).off("keydown.ekkoLightbox"), s.modal.remove(), s.options.onHidden.call(s)
        }).modal("show", n), this.modal
    }, e.prototype = {
        modal_shown: function() {
            var e, n = this;
            return this.options.remote ? (this.gallery = this.$element.data("gallery"), this.gallery && (this.gallery_items = "document.body" === this.options.gallery_parent_selector || "" === this.options.gallery_parent_selector ? t(document.body).find('*[data-toggle="lightbox"][data-gallery="' + this.gallery + '"]') : this.$element.parents(this.options.gallery_parent_selector).first().find('*[data-toggle="lightbox"][data-gallery="' + this.gallery + '"]'), this.gallery_index = this.gallery_items.index(this.$element), t(document).on("keydown.ekkoLightbox", this.navigate.bind(this)), this.options.directional_arrows && this.gallery_items.length > 1 && (this.lightbox_container.prepend('<div class="ekko-lightbox-nav-overlay"><a href="#" class="' + this.strip_stops(this.options.left_arrow_class) + '"></a><a href="#" class="' + this.strip_stops(this.options.right_arrow_class) + '"></a></div>'), this.modal_arrows = this.lightbox_container.find("div.ekko-lightbox-nav-overlay").first(), this.lightbox_container.find("a" + this.strip_spaces(this.options.left_arrow_class)).on("click", function(t) {
                return t.preventDefault(), n.navigate_left()
            }), this.lightbox_container.find("a" + this.strip_spaces(this.options.right_arrow_class)).on("click", function(t) {
                return t.preventDefault(), n.navigate_right()
            }))), this.options.type ? "image" === this.options.type ? this.preloadImage(this.options.remote, !0) : "youtube" === this.options.type && (e = this.getYoutubeId(this.options.remote)) ? this.showYoutubeVideo(e) : "vimeo" === this.options.type ? this.showVimeoVideo(this.options.remote) : "instagram" === this.options.type ? this.showInstagramVideo(this.options.remote) : this.error('Could not detect remote target type. Force the type using data-type="image|youtube|vimeo"') : this.detectRemoteType(this.options.remote)) : this.error("No remote target given")
        },
        strip_stops: function(t) {
            return t.replace(/\./g, "")
        },
        strip_spaces: function(t) {
            return t.replace(/\s/g, "")
        },
        isImage: function(t) {
            return t.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
        },
        isSwf: function(t) {
            return t.match(/\.(swf)((\?|#).*)?$/i)
        },
        getYoutubeId: function(t) {
            var e;
            return e = t.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/), e && 11 === e[2].length ? e[2] : !1
        },
        getVimeoId: function(t) {
            return t.indexOf("vimeo") > 0 ? t : !1
        },
        getInstagramId: function(t) {
            return t.indexOf("instagram") > 0 ? t : !1
        },
        navigate: function(t) {
            if (t = t || window.event, 39 === t.keyCode || 37 === t.keyCode) {
                if (39 === t.keyCode) return this.navigate_right();
                if (37 === t.keyCode) return this.navigate_left()
            }
        },
        navigate_left: function() {
            var e;
            return this.showLoading(), 1 !== this.gallery_items.length ? (0 === this.gallery_index ? this.gallery_index = this.gallery_items.length - 1 : this.gallery_index--, this.$element = t(this.gallery_items.get(this.gallery_index)), this.updateTitleAndFooter(), e = this.$element.attr("data-remote") || this.$element.attr("href"), this.detectRemoteType(e, this.$element.attr("data-type"))) : void 0
        },
        navigate_right: function() {
            var e, n;
            return this.showLoading(), 1 !== this.gallery_items.length ? (this.gallery_index === this.gallery_items.length - 1 ? this.gallery_index = 0 : this.gallery_index++, this.$element = t(this.gallery_items.get(this.gallery_index)), n = this.$element.attr("data-remote") || this.$element.attr("href"), this.updateTitleAndFooter(), this.detectRemoteType(n, this.$element.attr("data-type")), this.gallery_index + 1 < this.gallery_items.length && (e = t(this.gallery_items.get(this.gallery_index + 1), !1), n = e.attr("data-remote") || e.attr("href"), "image" === e.attr("data-type") || this.isImage(n)) ? this.preloadImage(n, !1) : void 0) : void 0
        },
        detectRemoteType: function(t, e) {
            var n;
            return "image" === e || this.isImage(t) ? (this.options.type = "image", this.preloadImage(t, !0)) : "youtube" === e || (n = this.getYoutubeId(t)) ? (this.options.type = "youtube", this.showYoutubeVideo(n)) : "vimeo" === e || (n = this.getVimeoId(t)) ? (this.options.type = "vimeo", this.showVimeoVideo(n)) : "instagram" === e || (n = this.getInstagramId(t)) ? (this.options.type = "instagram", this.showInstagramVideo(n)) : this.error('Could not detect remote target type. Force the type using data-type="image|youtube|vimeo"')
        },
        updateTitleAndFooter: function() {
            var t, e, n, i;
            return n = this.modal_content.find(".modal-header"), e = this.modal_content.find(".modal-footer"), i = this.$element.data("title") || "", t = this.$element.data("footer") || "", i || this.options.always_show_close ? n.css("display", "").find(".modal-title").html(i || "&nbsp;") : n.css("display", "none"), t ? e.css("display", "").html(t) : e.css("display", "none"), this
        },
        showLoading: function() {
            return this.lightbox_body.html('<div class="modal-loading text-center"><i class="fa fa-circle-o-notch fa-5x fa-spin"></i></div>'), this
        },
        showYoutubeVideo: function(t) {
            var e, n, i;
            return e = 560 / 315, i = this.$element.data("width") || 560, i = this.checkDimensions(i), n = i / e, this.resize(i), this.lightbox_body.html('<iframe width="' + i + '" height="' + n + '" src="//www.youtube.com/embed/' + t + '?badge=0&autoplay=1&html5=1" frameborder="0" allowfullscreen></iframe>'), this.modal_arrows ? this.modal_arrows.css("display", "none") : void 0
        },
        showVimeoVideo: function(t) {
            var e, n, i;
            return e = 500 / 281, i = this.$element.data("width") || 560, i = this.checkDimensions(i), n = i / e, this.resize(i), this.lightbox_body.html('<iframe width="' + i + '" height="' + n + '" src="' + t + '?autoplay=1" frameborder="0" allowfullscreen></iframe>'), this.modal_arrows ? this.modal_arrows.css("display", "none") : void 0
        },
        showInstagramVideo: function(t) {
            var e, n;
            return n = this.$element.data("width") || 612, n = this.checkDimensions(n), e = n, this.resize(n), this.lightbox_body.html('<iframe width="' + n + '" height="' + e + '" src="' + this.addTrailingSlash(t) + 'embed/" frameborder="0" allowfullscreen></iframe>'), this.modal_arrows ? this.modal_arrows.css("display", "none") : void 0
        },
        error: function(t) {
            return this.lightbox_body.html(t), this
        },
        preloadImage: function(e, n) {
            var i, a = this;
            return i = new Image, (null == n || n === !0) && (i.onload = function() {
                var e;
                return e = t("<img />"), e.attr("src", i.src), e.addClass("img-responsive"), a.lightbox_body.html(e), a.modal_arrows && a.modal_arrows.css("display", "block"), a.resize(i.width)
            }, i.onerror = function() {
                return a.error("Failed to load image: " + e)
            }), i.src = e, i
        },
        resize: function(e) {
            var n;
            return n = e + this.border.left + this.padding.left + this.padding.right + this.border.right, this.modal_dialog.css("width", "auto").css("max-width", n), this.lightbox_container.find("a").css("padding-top", function() {
                return t(this).parent().height() / 2
            }), this
        },
        checkDimensions: function(t) {
            var e, n;
            return n = t + this.border.left + this.padding.left + this.padding.right + this.border.right, e = document.body.clientWidth, n > e && (t = this.modal_body.width()), t
        },
        close: function() {
            return this.modal.modal("hide")
        },
        addTrailingSlash: function(t) {
            return "/" !== t.substr(-1) && (t += "/"), t
        }
    }, t.fn.ekkoLightbox = function(n) {
        return this.each(function() {
            var i;
            return i = t(this), n = t.extend({
                remote: i.attr("data-remote") || i.attr("href"),
                gallery_parent_selector: i.attr("data-parent"),
                type: i.attr("data-type")
            }, n, i.data()), new e(this, n), this
        })
    }, t.fn.ekkoLightbox.defaults = {
        gallery_parent_selector: "*:not(.row)",
        left_arrow_class: ".glyphicon .glyphicon-chevron-left",
        right_arrow_class: ".glyphicon .glyphicon-chevron-right",
        directional_arrows: !0,
        type: null,
        always_show_close: !0,
        onShow: function() {},
        onShown: function() {},
        onHide: function() {},
        onHidden: function() {}
    }
}.call(this),
function(t) {
    function e(t, e, n) {
        switch (arguments.length) {
            case 2:
                return null != t ? t : e;
            case 3:
                return null != t ? t : null != e ? e : n;
            default:
                throw new Error("Implement me")
        }
    }

    function n(t, e) {
        return De.call(t, e)
    }

    function i() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1
        }
    }

    function a(t) {
        ve.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t)
    }

    function r(t, e) {
        var n = !0;
        return h(function() {
            return n && (a(t), n = !1), e.apply(this, arguments)
        }, e)
    }

    function s(t, e) {
        gn[t] || (a(e), gn[t] = !0)
    }

    function o(t, e) {
        return function(n) {
            return m(t.call(this, n), e)
        }
    }

    function l(t, e) {
        return function(n) {
            return this.localeData().ordinal(t.call(this, n), e)
        }
    }

    function d() {}

    function u(t, e) {
        e !== !1 && A(t), p(this, t), this._d = new Date(+t._d)
    }

    function c(t) {
        var e = x(t),
            n = e.year || 0,
            i = e.quarter || 0,
            a = e.month || 0,
            r = e.week || 0,
            s = e.day || 0,
            o = e.hour || 0,
            l = e.minute || 0,
            d = e.second || 0,
            u = e.millisecond || 0;
        this._milliseconds = +u + 1e3 * d + 6e4 * l + 36e5 * o, this._days = +s + 7 * r, this._months = +a + 3 * i + 12 * n, this._data = {}, this._locale = ve.localeData(), this._bubble()
    }

    function h(t, e) {
        for (var i in e) n(e, i) && (t[i] = e[i]);
        return n(e, "toString") && (t.toString = e.toString), n(e, "valueOf") && (t.valueOf = e.valueOf), t
    }

    function p(t, e) {
        var n, i, a;
        if ("undefined" != typeof e._isAMomentObject && (t._isAMomentObject = e._isAMomentObject), "undefined" != typeof e._i && (t._i = e._i), "undefined" != typeof e._f && (t._f = e._f), "undefined" != typeof e._l && (t._l = e._l), "undefined" != typeof e._strict && (t._strict = e._strict), "undefined" != typeof e._tzm && (t._tzm = e._tzm), "undefined" != typeof e._isUTC && (t._isUTC = e._isUTC), "undefined" != typeof e._offset && (t._offset = e._offset), "undefined" != typeof e._pf && (t._pf = e._pf), "undefined" != typeof e._locale && (t._locale = e._locale), je.length > 0)
            for (n in je) i = je[n], a = e[i], "undefined" != typeof a && (t[i] = a);
        return t
    }

    function f(t) {
        return 0 > t ? Math.ceil(t) : Math.floor(t)
    }

    function m(t, e, n) {
        for (var i = "" + Math.abs(t), a = t >= 0; i.length < e;) i = "0" + i;
        return (a ? n ? "+" : "" : "-") + i
    }

    function _(t, e) {
        var n = {
            milliseconds: 0,
            months: 0
        };
        return n.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(n.months, "M").isAfter(e) && --n.months, n.milliseconds = +e - +t.clone().add(n.months, "M"), n
    }

    function g(t, e) {
        var n;
        return e = I(e, t), t.isBefore(e) ? n = _(t, e) : (n = _(e, t), n.milliseconds = -n.milliseconds, n.months = -n.months), n
    }

    function y(t, e) {
        return function(n, i) {
            var a, r;
            return null === i || isNaN(+i) || (s(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period)."), r = n, n = i, i = r), n = "string" == typeof n ? +n : n, a = ve.duration(n, i), v(this, a, t), this
        }
    }

    function v(t, e, n, i) {
        var a = e._milliseconds,
            r = e._days,
            s = e._months;
        i = null == i ? !0 : i, a && t._d.setTime(+t._d + a * n), r && pe(t, "Date", he(t, "Date") + r * n), s && ce(t, he(t, "Month") + s * n), i && ve.updateOffset(t, r || s)
    }

    function b(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }

    function w(t) {
        return "[object Date]" === Object.prototype.toString.call(t) || t instanceof Date
    }

    function M(t, e, n) {
        var i, a = Math.min(t.length, e.length),
            r = Math.abs(t.length - e.length),
            s = 0;
        for (i = 0; a > i; i++)(n && t[i] !== e[i] || !n && T(t[i]) !== T(e[i])) && s++;
        return s + r
    }

    function L(t) {
        if (t) {
            var e = t.toLowerCase().replace(/(.)s$/, "$1");
            t = un[t] || cn[e] || e
        }
        return t
    }

    function x(t) {
        var e, i, a = {};
        for (i in t) n(t, i) && (e = L(i), e && (a[e] = t[i]));
        return a
    }

    function D(e) {
        var n, i;
        if (0 === e.indexOf("week")) n = 7, i = "day";
        else {
            if (0 !== e.indexOf("month")) return;
            n = 12, i = "month"
        }
        ve[e] = function(a, r) {
            var s, o, l = ve._locale[e],
                d = [];
            if ("number" == typeof a && (r = a, a = t), o = function(t) {
                var e = ve().utc().set(i, t);
                return l.call(ve._locale, e, a || "")
            }, null != r) return o(r);
            for (s = 0; n > s; s++) d.push(o(s));
            return d
        }
    }

    function T(t) {
        var e = +t,
            n = 0;
        return 0 !== e && isFinite(e) && (n = e >= 0 ? Math.floor(e) : Math.ceil(e)), n
    }

    function k(t, e) {
        return new Date(Date.UTC(t, e + 1, 0)).getUTCDate()
    }

    function Y(t, e, n) {
        return oe(ve([t, 11, 31 + e - n]), e, n).week
    }

    function S(t) {
        return C(t) ? 366 : 365
    }

    function C(t) {
        return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
    }

    function A(t) {
        var e;
        t._a && -2 === t._pf.overflow && (e = t._a[ke] < 0 || t._a[ke] > 11 ? ke : t._a[Ye] < 1 || t._a[Ye] > k(t._a[Te], t._a[ke]) ? Ye : t._a[Se] < 0 || t._a[Se] > 23 ? Se : t._a[Ce] < 0 || t._a[Ce] > 59 ? Ce : t._a[Ae] < 0 || t._a[Ae] > 59 ? Ae : t._a[Fe] < 0 || t._a[Fe] > 999 ? Fe : -1, t._pf._overflowDayOfYear && (Te > e || e > Ye) && (e = Ye), t._pf.overflow = e)
    }

    function F(t) {
        return null == t._isValid && (t._isValid = !isNaN(t._d.getTime()) && t._pf.overflow < 0 && !t._pf.empty && !t._pf.invalidMonth && !t._pf.nullInput && !t._pf.invalidFormat && !t._pf.userInvalidated, t._strict && (t._isValid = t._isValid && 0 === t._pf.charsLeftOver && 0 === t._pf.unusedTokens.length)), t._isValid
    }

    function E(t) {
        return t ? t.toLowerCase().replace("_", "-") : t
    }

    function j(t) {
        for (var e, n, i, a, r = 0; r < t.length;) {
            for (a = E(t[r]).split("-"), e = a.length, n = E(t[r + 1]), n = n ? n.split("-") : null; e > 0;) {
                if (i = N(a.slice(0, e).join("-"))) return i;
                if (n && n.length >= e && M(a, n, !0) >= e - 1) break;
                e--
            }
            r++
        }
        return null
    }

    function N(t) {
        var e = null;
        if (!Ee[t] && Ne) try {
            e = ve.locale(), require("./locale/" + t), ve.locale(e)
        } catch (n) {}
        return Ee[t]
    }

    function I(t, e) {
        return e._isUTC ? ve(t).zone(e._offset || 0) : ve(t).local()
    }

    function H(t) {
        return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
    }

    function P(t) {
        var e, n, i = t.match(We);
        for (e = 0, n = i.length; n > e; e++) i[e] = _n[i[e]] ? _n[i[e]] : H(i[e]);
        return function(a) {
            var r = "";
            for (e = 0; n > e; e++) r += i[e] instanceof Function ? i[e].call(a, t) : i[e];
            return r
        }
    }

    function W(t, e) {
        return t.isValid() ? (e = O(e, t.localeData()), hn[e] || (hn[e] = P(e)), hn[e](t)) : t.localeData().invalidDate()
    }

    function O(t, e) {
        function n(t) {
            return e.longDateFormat(t) || t
        }
        var i = 5;
        for (Oe.lastIndex = 0; i >= 0 && Oe.test(t);) t = t.replace(Oe, n), Oe.lastIndex = 0, i -= 1;
        return t
    }

    function $(t, e) {
        var n, i = e._strict;
        switch (t) {
            case "Q":
                return Ke;
            case "DDDD":
                return Ze;
            case "YYYY":
            case "GGGG":
            case "gggg":
                return i ? tn : ze;
            case "Y":
            case "G":
            case "g":
                return nn;
            case "YYYYYY":
            case "YYYYY":
            case "GGGGG":
            case "ggggg":
                return i ? en : Re;
            case "S":
                if (i) return Ke;
            case "SS":
                if (i) return Qe;
            case "SSS":
                if (i) return Ze;
            case "DDD":
                return Be;
            case "MMM":
            case "MMMM":
            case "dd":
            case "ddd":
            case "dddd":
                return Ue;
            case "a":
            case "A":
                return e._locale._meridiemParse;
            case "X":
                return Je;
            case "Z":
            case "ZZ":
                return Ve;
            case "T":
                return Ge;
            case "SSSS":
                return qe;
            case "MM":
            case "DD":
            case "YY":
            case "GG":
            case "gg":
            case "HH":
            case "hh":
            case "mm":
            case "ss":
            case "ww":
            case "WW":
                return i ? Qe : $e;
            case "M":
            case "D":
            case "d":
            case "H":
            case "h":
            case "m":
            case "s":
            case "w":
            case "W":
            case "e":
            case "E":
                return $e;
            case "Do":
                return Xe;
            default:
                return n = new RegExp(X(J(t.replace("\\", "")), "i"))
        }
    }

    function B(t) {
        t = t || "";
        var e = t.match(Ve) || [],
            n = e[e.length - 1] || [],
            i = (n + "").match(ln) || ["-", 0, 0],
            a = +(60 * i[1]) + T(i[2]);
        return "+" === i[0] ? -a : a
    }

    function z(t, e, n) {
        var i, a = n._a;
        switch (t) {
            case "Q":
                null != e && (a[ke] = 3 * (T(e) - 1));
                break;
            case "M":
            case "MM":
                null != e && (a[ke] = T(e) - 1);
                break;
            case "MMM":
            case "MMMM":
                i = n._locale.monthsParse(e), null != i ? a[ke] = i : n._pf.invalidMonth = e;
                break;
            case "D":
            case "DD":
                null != e && (a[Ye] = T(e));
                break;
            case "Do":
                null != e && (a[Ye] = T(parseInt(e, 10)));
                break;
            case "DDD":
            case "DDDD":
                null != e && (n._dayOfYear = T(e));
                break;
            case "YY":
                a[Te] = ve.parseTwoDigitYear(e);
                break;
            case "YYYY":
            case "YYYYY":
            case "YYYYYY":
                a[Te] = T(e);
                break;
            case "a":
            case "A":
                n._isPm = n._locale.isPM(e);
                break;
            case "H":
            case "HH":
            case "h":
            case "hh":
                a[Se] = T(e);
                break;
            case "m":
            case "mm":
                a[Ce] = T(e);
                break;
            case "s":
            case "ss":
                a[Ae] = T(e);
                break;
            case "S":
            case "SS":
            case "SSS":
            case "SSSS":
                a[Fe] = T(1e3 * ("0." + e));
                break;
            case "X":
                n._d = new Date(1e3 * parseFloat(e));
                break;
            case "Z":
            case "ZZ":
                n._useUTC = !0, n._tzm = B(e);
                break;
            case "dd":
            case "ddd":
            case "dddd":
                i = n._locale.weekdaysParse(e), null != i ? (n._w = n._w || {}, n._w.d = i) : n._pf.invalidWeekday = e;
                break;
            case "w":
            case "ww":
            case "W":
            case "WW":
            case "d":
            case "e":
            case "E":
                t = t.substr(0, 1);
            case "gggg":
            case "GGGG":
            case "GGGGG":
                t = t.substr(0, 2), e && (n._w = n._w || {}, n._w[t] = T(e));
                break;
            case "gg":
            case "GG":
                n._w = n._w || {}, n._w[t] = ve.parseTwoDigitYear(e)
        }
    }

    function R(t) {
        var n, i, a, r, s, o, l;
        n = t._w, null != n.GG || null != n.W || null != n.E ? (s = 1, o = 4, i = e(n.GG, t._a[Te], oe(ve(), 1, 4).year), a = e(n.W, 1), r = e(n.E, 1)) : (s = t._locale._week.dow, o = t._locale._week.doy, i = e(n.gg, t._a[Te], oe(ve(), s, o).year), a = e(n.w, 1), null != n.d ? (r = n.d, s > r && ++a) : r = null != n.e ? n.e + s : s), l = le(i, a, r, o, s), t._a[Te] = l.year, t._dayOfYear = l.dayOfYear
    }

    function q(t) {
        var n, i, a, r, s = [];
        if (!t._d) {
            for (a = V(t), t._w && null == t._a[Ye] && null == t._a[ke] && R(t), t._dayOfYear && (r = e(t._a[Te], a[Te]), t._dayOfYear > S(r) && (t._pf._overflowDayOfYear = !0), i = ie(r, 0, t._dayOfYear), t._a[ke] = i.getUTCMonth(), t._a[Ye] = i.getUTCDate()), n = 0; 3 > n && null == t._a[n]; ++n) t._a[n] = s[n] = a[n];
            for (; 7 > n; n++) t._a[n] = s[n] = null == t._a[n] ? 2 === n ? 1 : 0 : t._a[n];
            t._d = (t._useUTC ? ie : ne).apply(null, s), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() + t._tzm)
        }
    }

    function U(t) {
        var e;
        t._d || (e = x(t._i), t._a = [e.year, e.month, e.day, e.hour, e.minute, e.second, e.millisecond], q(t))
    }

    function V(t) {
        var e = new Date;
        return t._useUTC ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()] : [e.getFullYear(), e.getMonth(), e.getDate()]
    }

    function G(t) {
        if (t._f === ve.ISO_8601) return void Q(t);
        t._a = [], t._pf.empty = !0;
        var e, n, i, a, r, s = "" + t._i,
            o = s.length,
            l = 0;
        for (i = O(t._f, t._locale).match(We) || [], e = 0; e < i.length; e++) a = i[e], n = (s.match($(a, t)) || [])[0], n && (r = s.substr(0, s.indexOf(n)), r.length > 0 && t._pf.unusedInput.push(r), s = s.slice(s.indexOf(n) + n.length), l += n.length), _n[a] ? (n ? t._pf.empty = !1 : t._pf.unusedTokens.push(a), z(a, n, t)) : t._strict && !n && t._pf.unusedTokens.push(a);
        t._pf.charsLeftOver = o - l, s.length > 0 && t._pf.unusedInput.push(s), t._isPm && t._a[Se] < 12 && (t._a[Se] += 12), t._isPm === !1 && 12 === t._a[Se] && (t._a[Se] = 0), q(t), A(t)
    }

    function J(t) {
        return t.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, e, n, i, a) {
            return e || n || i || a
        })
    }

    function X(t) {
        return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function K(t) {
        var e, n, a, r, s;
        if (0 === t._f.length) return t._pf.invalidFormat = !0, void(t._d = new Date(0 / 0));
        for (r = 0; r < t._f.length; r++) s = 0, e = p({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._pf = i(), e._f = t._f[r], G(e), F(e) && (s += e._pf.charsLeftOver, s += 10 * e._pf.unusedTokens.length, e._pf.score = s, (null == a || a > s) && (a = s, n = e));
        h(t, n || e)
    }

    function Q(t) {
        var e, n, i = t._i,
            a = an.exec(i);
        if (a) {
            for (t._pf.iso = !0, e = 0, n = sn.length; n > e; e++)
                if (sn[e][1].exec(i)) {
                    t._f = sn[e][0] + (a[6] || " ");
                    break
                }
            for (e = 0, n = on.length; n > e; e++)
                if (on[e][1].exec(i)) {
                    t._f += on[e][0];
                    break
                }
            i.match(Ve) && (t._f += "Z"), G(t)
        } else t._isValid = !1
    }

    function Z(t) {
        Q(t), t._isValid === !1 && (delete t._isValid, ve.createFromInputFallback(t))
    }

    function te(t, e) {
        var n, i = [];
        for (n = 0; n < t.length; ++n) i.push(e(t[n], n));
        return i
    }

    function ee(e) {
        var n, i = e._i;
        i === t ? e._d = new Date : w(i) ? e._d = new Date(+i) : null !== (n = Ie.exec(i)) ? e._d = new Date(+n[1]) : "string" == typeof i ? Z(e) : b(i) ? (e._a = te(i.slice(0), function(t) {
            return parseInt(t, 10)
        }), q(e)) : "object" == typeof i ? U(e) : "number" == typeof i ? e._d = new Date(i) : ve.createFromInputFallback(e)
    }

    function ne(t, e, n, i, a, r, s) {
        var o = new Date(t, e, n, i, a, r, s);
        return 1970 > t && o.setFullYear(t), o
    }

    function ie(t) {
        var e = new Date(Date.UTC.apply(null, arguments));
        return 1970 > t && e.setUTCFullYear(t), e
    }

    function ae(t, e) {
        if ("string" == typeof t)
            if (isNaN(t)) {
                if (t = e.weekdaysParse(t), "number" != typeof t) return null
            } else t = parseInt(t, 10);
        return t
    }

    function re(t, e, n, i, a) {
        return a.relativeTime(e || 1, !! n, t, i)
    }

    function se(t, e, n) {
        var i = ve.duration(t).abs(),
            a = xe(i.as("s")),
            r = xe(i.as("m")),
            s = xe(i.as("h")),
            o = xe(i.as("d")),
            l = xe(i.as("M")),
            d = xe(i.as("y")),
            u = a < pn.s && ["s", a] || 1 === r && ["m"] || r < pn.m && ["mm", r] || 1 === s && ["h"] || s < pn.h && ["hh", s] || 1 === o && ["d"] || o < pn.d && ["dd", o] || 1 === l && ["M"] || l < pn.M && ["MM", l] || 1 === d && ["y"] || ["yy", d];
        return u[2] = e, u[3] = +t > 0, u[4] = n, re.apply({}, u)
    }

    function oe(t, e, n) {
        var i, a = n - e,
            r = n - t.day();
        return r > a && (r -= 7), a - 7 > r && (r += 7), i = ve(t).add(r, "d"), {
            week: Math.ceil(i.dayOfYear() / 7),
            year: i.year()
        }
    }

    function le(t, e, n, i, a) {
        var r, s, o = ie(t, 0, 1).getUTCDay();
        return o = 0 === o ? 7 : o, n = null != n ? n : a, r = a - o + (o > i ? 7 : 0) - (a > o ? 7 : 0), s = 7 * (e - 1) + (n - a) + r + 1, {
            year: s > 0 ? t : t - 1,
            dayOfYear: s > 0 ? s : S(t - 1) + s
        }
    }

    function de(e) {
        var n = e._i,
            i = e._f;
        return e._locale = e._locale || ve.localeData(e._l), null === n || i === t && "" === n ? ve.invalid({
            nullInput: !0
        }) : ("string" == typeof n && (e._i = n = e._locale.preparse(n)), ve.isMoment(n) ? new u(n, !0) : (i ? b(i) ? K(e) : G(e) : ee(e), new u(e)))
    }

    function ue(t, e) {
        var n, i;
        if (1 === e.length && b(e[0]) && (e = e[0]), !e.length) return ve();
        for (n = e[0], i = 1; i < e.length; ++i) e[i][t](n) && (n = e[i]);
        return n
    }

    function ce(t, e) {
        var n;
        return "string" == typeof e && (e = t.localeData().monthsParse(e), "number" != typeof e) ? t : (n = Math.min(t.date(), k(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n), t)
    }

    function he(t, e) {
        return t._d["get" + (t._isUTC ? "UTC" : "") + e]()
    }

    function pe(t, e, n) {
        return "Month" === e ? ce(t, n) : t._d["set" + (t._isUTC ? "UTC" : "") + e](n)
    }

    function fe(t, e) {
        return function(n) {
            return null != n ? (pe(this, t, n), ve.updateOffset(this, e), this) : he(this, t)
        }
    }

    function me(t) {
        return 400 * t / 146097
    }

    function _e(t) {
        return 146097 * t / 400
    }

    function ge(t) {
        ve.duration.fn[t] = function() {
            return this._data[t]
        }
    }

    function ye(t) {
        "undefined" == typeof ender && (be = Le.moment, Le.moment = t ? r("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.", ve) : ve)
    }
    for (var ve, be, we, Me = "2.8.3", Le = "undefined" != typeof global ? global : this, xe = Math.round, De = Object.prototype.hasOwnProperty, Te = 0, ke = 1, Ye = 2, Se = 3, Ce = 4, Ae = 5, Fe = 6, Ee = {}, je = [], Ne = "undefined" != typeof module && module.exports, Ie = /^\/?Date\((\-?\d+)/i, He = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, Pe = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, We = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g, Oe = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, $e = /\d\d?/, Be = /\d{1,3}/, ze = /\d{1,4}/, Re = /[+\-]?\d{1,6}/, qe = /\d+/, Ue = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Ve = /Z|[\+\-]\d\d:?\d\d/gi, Ge = /T/i, Je = /[\+\-]?\d+(\.\d{1,3})?/, Xe = /\d{1,2}/, Ke = /\d/, Qe = /\d\d/, Ze = /\d{3}/, tn = /\d{4}/, en = /[+-]?\d{6}/, nn = /[+-]?\d+/, an = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, rn = "YYYY-MM-DDTHH:mm:ssZ", sn = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
            ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
            ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d{2}/],
            ["YYYY-DDD", /\d{4}-\d{3}/]
        ], on = [
            ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
            ["HH:mm", /(T| )\d\d:\d\d/],
            ["HH", /(T| )\d\d/]
        ], ln = /([\+\-]|\d\d)/gi, dn = ("Date|Hours|Minutes|Seconds|Milliseconds".split("|"), {
            Milliseconds: 1,
            Seconds: 1e3,
            Minutes: 6e4,
            Hours: 36e5,
            Days: 864e5,
            Months: 2592e6,
            Years: 31536e6
        }), un = {
            ms: "millisecond",
            s: "second",
            m: "minute",
            h: "hour",
            d: "day",
            D: "date",
            w: "week",
            W: "isoWeek",
            M: "month",
            Q: "quarter",
            y: "year",
            DDD: "dayOfYear",
            e: "weekday",
            E: "isoWeekday",
            gg: "weekYear",
            GG: "isoWeekYear"
        }, cn = {
            dayofyear: "dayOfYear",
            isoweekday: "isoWeekday",
            isoweek: "isoWeek",
            weekyear: "weekYear",
            isoweekyear: "isoWeekYear"
        }, hn = {}, pn = {
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            M: 11
        }, fn = "DDD w W M D d".split(" "), mn = "M D H h m s w W".split(" "), _n = {
            M: function() {
                return this.month() + 1
            },
            MMM: function(t) {
                return this.localeData().monthsShort(this, t)
            },
            MMMM: function(t) {
                return this.localeData().months(this, t)
            },
            D: function() {
                return this.date()
            },
            DDD: function() {
                return this.dayOfYear()
            },
            d: function() {
                return this.day()
            },
            dd: function(t) {
                return this.localeData().weekdaysMin(this, t)
            },
            ddd: function(t) {
                return this.localeData().weekdaysShort(this, t)
            },
            dddd: function(t) {
                return this.localeData().weekdays(this, t)
            },
            w: function() {
                return this.week()
            },
            W: function() {
                return this.isoWeek()
            },
            YY: function() {
                return m(this.year() % 100, 2)
            },
            YYYY: function() {
                return m(this.year(), 4)
            },
            YYYYY: function() {
                return m(this.year(), 5)
            },
            YYYYYY: function() {
                var t = this.year(),
                    e = t >= 0 ? "+" : "-";
                return e + m(Math.abs(t), 6)
            },
            gg: function() {
                return m(this.weekYear() % 100, 2)
            },
            gggg: function() {
                return m(this.weekYear(), 4)
            },
            ggggg: function() {
                return m(this.weekYear(), 5)
            },
            GG: function() {
                return m(this.isoWeekYear() % 100, 2)
            },
            GGGG: function() {
                return m(this.isoWeekYear(), 4)
            },
            GGGGG: function() {
                return m(this.isoWeekYear(), 5)
            },
            e: function() {
                return this.weekday()
            },
            E: function() {
                return this.isoWeekday()
            },
            a: function() {
                return this.localeData().meridiem(this.hours(), this.minutes(), !0)
            },
            A: function() {
                return this.localeData().meridiem(this.hours(), this.minutes(), !1)
            },
            H: function() {
                return this.hours()
            },
            h: function() {
                return this.hours() % 12 || 12
            },
            m: function() {
                return this.minutes()
            },
            s: function() {
                return this.seconds()
            },
            S: function() {
                return T(this.milliseconds() / 100)
            },
            SS: function() {
                return m(T(this.milliseconds() / 10), 2)
            },
            SSS: function() {
                return m(this.milliseconds(), 3)
            },
            SSSS: function() {
                return m(this.milliseconds(), 3)
            },
            Z: function() {
                var t = -this.zone(),
                    e = "+";
                return 0 > t && (t = -t, e = "-"), e + m(T(t / 60), 2) + ":" + m(T(t) % 60, 2)
            },
            ZZ: function() {
                var t = -this.zone(),
                    e = "+";
                return 0 > t && (t = -t, e = "-"), e + m(T(t / 60), 2) + m(T(t) % 60, 2)
            },
            z: function() {
                return this.zoneAbbr()
            },
            zz: function() {
                return this.zoneName()
            },
            X: function() {
                return this.unix()
            },
            Q: function() {
                return this.quarter()
            }
        }, gn = {}, yn = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"]; fn.length;) we = fn.pop(), _n[we + "o"] = l(_n[we], we);
    for (; mn.length;) we = mn.pop(), _n[we + we] = o(_n[we], 2);
    _n.DDDD = o(_n.DDD, 3), h(d.prototype, {
        set: function(t) {
            var e, n;
            for (n in t) e = t[n], "function" == typeof e ? this[n] = e : this["_" + n] = e
        },
        _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        months: function(t) {
            return this._months[t.month()]
        },
        _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        monthsShort: function(t) {
            return this._monthsShort[t.month()]
        },
        monthsParse: function(t) {
            var e, n, i;
            for (this._monthsParse || (this._monthsParse = []), e = 0; 12 > e; e++)
                if (this._monthsParse[e] || (n = ve.utc([2e3, e]), i = "^" + this.months(n, "") + "|^" + this.monthsShort(n, ""), this._monthsParse[e] = new RegExp(i.replace(".", ""), "i")), this._monthsParse[e].test(t)) return e
        },
        _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdays: function(t) {
            return this._weekdays[t.day()]
        },
        _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysShort: function(t) {
            return this._weekdaysShort[t.day()]
        },
        _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        weekdaysMin: function(t) {
            return this._weekdaysMin[t.day()]
        },
        weekdaysParse: function(t) {
            var e, n, i;
            for (this._weekdaysParse || (this._weekdaysParse = []), e = 0; 7 > e; e++)
                if (this._weekdaysParse[e] || (n = ve([2e3, 1]).day(e), i = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[e] = new RegExp(i.replace(".", ""), "i")), this._weekdaysParse[e].test(t)) return e
        },
        _longDateFormat: {
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY LT",
            LLLL: "dddd, MMMM D, YYYY LT"
        },
        longDateFormat: function(t) {
            var e = this._longDateFormat[t];
            return !e && this._longDateFormat[t.toUpperCase()] && (e = this._longDateFormat[t.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(t) {
                return t.slice(1)
            }), this._longDateFormat[t] = e), e
        },
        isPM: function(t) {
            return "p" === (t + "").toLowerCase().charAt(0)
        },
        _meridiemParse: /[ap]\.?m?\.?/i,
        meridiem: function(t, e, n) {
            return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
        },
        _calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        calendar: function(t, e) {
            var n = this._calendar[t];
            return "function" == typeof n ? n.apply(e) : n
        },
        _relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        relativeTime: function(t, e, n, i) {
            var a = this._relativeTime[n];
            return "function" == typeof a ? a(t, e, n, i) : a.replace(/%d/i, t)
        },
        pastFuture: function(t, e) {
            var n = this._relativeTime[t > 0 ? "future" : "past"];
            return "function" == typeof n ? n(e) : n.replace(/%s/i, e)
        },
        ordinal: function(t) {
            return this._ordinal.replace("%d", t)
        },
        _ordinal: "%d",
        preparse: function(t) {
            return t
        },
        postformat: function(t) {
            return t
        },
        week: function(t) {
            return oe(t, this._week.dow, this._week.doy).week
        },
        _week: {
            dow: 0,
            doy: 6
        },
        _invalidDate: "Invalid date",
        invalidDate: function() {
            return this._invalidDate
        }
    }), ve = function(e, n, a, r) {
        var s;
        return "boolean" == typeof a && (r = a, a = t), s = {}, s._isAMomentObject = !0, s._i = e, s._f = n, s._l = a, s._strict = r, s._isUTC = !1, s._pf = i(), de(s)
    }, ve.suppressDeprecationWarnings = !1, ve.createFromInputFallback = r("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(t) {
        t._d = new Date(t._i)
    }), ve.min = function() {
        var t = [].slice.call(arguments, 0);
        return ue("isBefore", t)
    }, ve.max = function() {
        var t = [].slice.call(arguments, 0);
        return ue("isAfter", t)
    }, ve.utc = function(e, n, a, r) {
        var s;
        return "boolean" == typeof a && (r = a, a = t), s = {}, s._isAMomentObject = !0, s._useUTC = !0, s._isUTC = !0, s._l = a, s._i = e, s._f = n, s._strict = r, s._pf = i(), de(s).utc()
    }, ve.unix = function(t) {
        return ve(1e3 * t)
    }, ve.duration = function(t, e) {
        var i, a, r, s, o = t,
            l = null;
        return ve.isDuration(t) ? o = {
            ms: t._milliseconds,
            d: t._days,
            M: t._months
        } : "number" == typeof t ? (o = {}, e ? o[e] = t : o.milliseconds = t) : (l = He.exec(t)) ? (i = "-" === l[1] ? -1 : 1, o = {
            y: 0,
            d: T(l[Ye]) * i,
            h: T(l[Se]) * i,
            m: T(l[Ce]) * i,
            s: T(l[Ae]) * i,
            ms: T(l[Fe]) * i
        }) : (l = Pe.exec(t)) ? (i = "-" === l[1] ? -1 : 1, r = function(t) {
            var e = t && parseFloat(t.replace(",", "."));
            return (isNaN(e) ? 0 : e) * i
        }, o = {
            y: r(l[2]),
            M: r(l[3]),
            d: r(l[4]),
            h: r(l[5]),
            m: r(l[6]),
            s: r(l[7]),
            w: r(l[8])
        }) : "object" == typeof o && ("from" in o || "to" in o) && (s = g(ve(o.from), ve(o.to)), o = {}, o.ms = s.milliseconds, o.M = s.months), a = new c(o), ve.isDuration(t) && n(t, "_locale") && (a._locale = t._locale), a
    }, ve.version = Me, ve.defaultFormat = rn, ve.ISO_8601 = function() {}, ve.momentProperties = je, ve.updateOffset = function() {}, ve.relativeTimeThreshold = function(e, n) {
        return pn[e] === t ? !1 : n === t ? pn[e] : (pn[e] = n, !0)
    }, ve.lang = r("moment.lang is deprecated. Use moment.locale instead.", function(t, e) {
        return ve.locale(t, e)
    }), ve.locale = function(t, e) {
        var n;
        return t && (n = "undefined" != typeof e ? ve.defineLocale(t, e) : ve.localeData(t), n && (ve.duration._locale = ve._locale = n)), ve._locale._abbr
    }, ve.defineLocale = function(t, e) {
        return null !== e ? (e.abbr = t, Ee[t] || (Ee[t] = new d), Ee[t].set(e), ve.locale(t), Ee[t]) : (delete Ee[t], null)
    }, ve.langData = r("moment.langData is deprecated. Use moment.localeData instead.", function(t) {
        return ve.localeData(t)
    }), ve.localeData = function(t) {
        var e;
        if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return ve._locale;
        if (!b(t)) {
            if (e = N(t)) return e;
            t = [t]
        }
        return j(t)
    }, ve.isMoment = function(t) {
        return t instanceof u || null != t && n(t, "_isAMomentObject")
    }, ve.isDuration = function(t) {
        return t instanceof c
    };
    for (we = yn.length - 1; we >= 0; --we) D(yn[we]);
    ve.normalizeUnits = function(t) {
        return L(t)
    }, ve.invalid = function(t) {
        var e = ve.utc(0 / 0);
        return null != t ? h(e._pf, t) : e._pf.userInvalidated = !0, e
    }, ve.parseZone = function() {
        return ve.apply(null, arguments).parseZone()
    }, ve.parseTwoDigitYear = function(t) {
        return T(t) + (T(t) > 68 ? 1900 : 2e3)
    }, h(ve.fn = u.prototype, {
        clone: function() {
            return ve(this)
        },
        valueOf: function() {
            return +this._d + 6e4 * (this._offset || 0)
        },
        unix: function() {
            return Math.floor(+this / 1e3)
        },
        toString: function() {
            return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        },
        toDate: function() {
            return this._offset ? new Date(+this) : this._d
        },
        toISOString: function() {
            var t = ve(this).utc();
            return 0 < t.year() && t.year() <= 9999 ? W(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : W(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        },
        toArray: function() {
            var t = this;
            return [t.year(), t.month(), t.date(), t.hours(), t.minutes(), t.seconds(), t.milliseconds()]
        },
        isValid: function() {
            return F(this)
        },
        isDSTShifted: function() {
            return this._a ? this.isValid() && M(this._a, (this._isUTC ? ve.utc(this._a) : ve(this._a)).toArray()) > 0 : !1
        },
        parsingFlags: function() {
            return h({}, this._pf)
        },
        invalidAt: function() {
            return this._pf.overflow
        },
        utc: function(t) {
            return this.zone(0, t)
        },
        local: function(t) {
            return this._isUTC && (this.zone(0, t), this._isUTC = !1, t && this.add(this._dateTzOffset(), "m")), this
        },
        format: function(t) {
            var e = W(this, t || ve.defaultFormat);
            return this.localeData().postformat(e)
        },
        add: y(1, "add"),
        subtract: y(-1, "subtract"),
        diff: function(t, e, n) {
            var i, a, r, s = I(t, this),
                o = 6e4 * (this.zone() - s.zone());
            return e = L(e), "year" === e || "month" === e ? (i = 432e5 * (this.daysInMonth() + s.daysInMonth()), a = 12 * (this.year() - s.year()) + (this.month() - s.month()), r = this - ve(this).startOf("month") - (s - ve(s).startOf("month")), r -= 6e4 * (this.zone() - ve(this).startOf("month").zone() - (s.zone() - ve(s).startOf("month").zone())), a += r / i, "year" === e && (a /= 12)) : (i = this - s, a = "second" === e ? i / 1e3 : "minute" === e ? i / 6e4 : "hour" === e ? i / 36e5 : "day" === e ? (i - o) / 864e5 : "week" === e ? (i - o) / 6048e5 : i), n ? a : f(a)
        },
        from: function(t, e) {
            return ve.duration({
                to: this,
                from: t
            }).locale(this.locale()).humanize(!e)
        },
        fromNow: function(t) {
            return this.from(ve(), t)
        },
        calendar: function(t) {
            var e = t || ve(),
                n = I(e, this).startOf("day"),
                i = this.diff(n, "days", !0),
                a = -6 > i ? "sameElse" : -1 > i ? "lastWeek" : 0 > i ? "lastDay" : 1 > i ? "sameDay" : 2 > i ? "nextDay" : 7 > i ? "nextWeek" : "sameElse";
            return this.format(this.localeData().calendar(a, this))
        },
        isLeapYear: function() {
            return C(this.year())
        },
        isDST: function() {
            return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
        },
        day: function(t) {
            var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != t ? (t = ae(t, this.localeData()), this.add(t - e, "d")) : e
        },
        month: fe("Month", !0),
        startOf: function(t) {
            switch (t = L(t)) {
                case "year":
                    this.month(0);
                case "quarter":
                case "month":
                    this.date(1);
                case "week":
                case "isoWeek":
                case "day":
                    this.hours(0);
                case "hour":
                    this.minutes(0);
                case "minute":
                    this.seconds(0);
                case "second":
                    this.milliseconds(0)
            }
            return "week" === t ? this.weekday(0) : "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this
        },
        endOf: function(t) {
            return t = L(t), this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms")
        },
        isAfter: function(t, e) {
            return e = L("undefined" != typeof e ? e : "millisecond"), "millisecond" === e ? (t = ve.isMoment(t) ? t : ve(t), +this > +t) : +this.clone().startOf(e) > +ve(t).startOf(e)
        },
        isBefore: function(t, e) {
            return e = L("undefined" != typeof e ? e : "millisecond"), "millisecond" === e ? (t = ve.isMoment(t) ? t : ve(t), +t > +this) : +this.clone().startOf(e) < +ve(t).startOf(e)
        },
        isSame: function(t, e) {
            return e = L(e || "millisecond"), "millisecond" === e ? (t = ve.isMoment(t) ? t : ve(t), +this === +t) : +this.clone().startOf(e) === +I(t, this).startOf(e)
        },
        min: r("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function(t) {
            return t = ve.apply(null, arguments), this > t ? this : t
        }),
        max: r("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function(t) {
            return t = ve.apply(null, arguments), t > this ? this : t
        }),
        zone: function(t, e) {
            var n, i = this._offset || 0;
            return null == t ? this._isUTC ? i : this._dateTzOffset() : ("string" == typeof t && (t = B(t)), Math.abs(t) < 16 && (t = 60 * t), !this._isUTC && e && (n = this._dateTzOffset()), this._offset = t, this._isUTC = !0, null != n && this.subtract(n, "m"), i !== t && (!e || this._changeInProgress ? v(this, ve.duration(i - t, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, ve.updateOffset(this, !0), this._changeInProgress = null)), this)
        },
        zoneAbbr: function() {
            return this._isUTC ? "UTC" : ""
        },
        zoneName: function() {
            return this._isUTC ? "Coordinated Universal Time" : ""
        },
        parseZone: function() {
            return this._tzm ? this.zone(this._tzm) : "string" == typeof this._i && this.zone(this._i), this
        },
        hasAlignedHourOffset: function(t) {
            return t = t ? ve(t).zone() : 0, (this.zone() - t) % 60 === 0
        },
        daysInMonth: function() {
            return k(this.year(), this.month())
        },
        dayOfYear: function(t) {
            var e = xe((ve(this).startOf("day") - ve(this).startOf("year")) / 864e5) + 1;
            return null == t ? e : this.add(t - e, "d")
        },
        quarter: function(t) {
            return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
        },
        weekYear: function(t) {
            var e = oe(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
            return null == t ? e : this.add(t - e, "y")
        },
        isoWeekYear: function(t) {
            var e = oe(this, 1, 4).year;
            return null == t ? e : this.add(t - e, "y")
        },
        week: function(t) {
            var e = this.localeData().week(this);
            return null == t ? e : this.add(7 * (t - e), "d")
        },
        isoWeek: function(t) {
            var e = oe(this, 1, 4).week;
            return null == t ? e : this.add(7 * (t - e), "d")
        },
        weekday: function(t) {
            var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == t ? e : this.add(t - e, "d")
        },
        isoWeekday: function(t) {
            return null == t ? this.day() || 7 : this.day(this.day() % 7 ? t : t - 7)
        },
        isoWeeksInYear: function() {
            return Y(this.year(), 1, 4)
        },
        weeksInYear: function() {
            var t = this.localeData()._week;
            return Y(this.year(), t.dow, t.doy)
        },
        get: function(t) {
            return t = L(t), this[t]()
        },
        set: function(t, e) {
            return t = L(t), "function" == typeof this[t] && this[t](e), this
        },
        locale: function(e) {
            var n;
            return e === t ? this._locale._abbr : (n = ve.localeData(e), null != n && (this._locale = n), this)
        },
        lang: r("moment().lang() is deprecated. Use moment().localeData() instead.", function(e) {
            return e === t ? this.localeData() : this.locale(e)
        }),
        localeData: function() {
            return this._locale
        },
        _dateTzOffset: function() {
            return 15 * Math.round(this._d.getTimezoneOffset() / 15)
        }
    }), ve.fn.millisecond = ve.fn.milliseconds = fe("Milliseconds", !1), ve.fn.second = ve.fn.seconds = fe("Seconds", !1), ve.fn.minute = ve.fn.minutes = fe("Minutes", !1), ve.fn.hour = ve.fn.hours = fe("Hours", !0), ve.fn.date = fe("Date", !0), ve.fn.dates = r("dates accessor is deprecated. Use date instead.", fe("Date", !0)), ve.fn.year = fe("FullYear", !0), ve.fn.years = r("years accessor is deprecated. Use year instead.", fe("FullYear", !0)), ve.fn.days = ve.fn.day, ve.fn.months = ve.fn.month, ve.fn.weeks = ve.fn.week, ve.fn.isoWeeks = ve.fn.isoWeek, ve.fn.quarters = ve.fn.quarter, ve.fn.toJSON = ve.fn.toISOString, h(ve.duration.fn = c.prototype, {
        _bubble: function() {
            var t, e, n, i = this._milliseconds,
                a = this._days,
                r = this._months,
                s = this._data,
                o = 0;
            s.milliseconds = i % 1e3, t = f(i / 1e3), s.seconds = t % 60, e = f(t / 60), s.minutes = e % 60, n = f(e / 60), s.hours = n % 24, a += f(n / 24), o = f(me(a)), a -= f(_e(o)), r += f(a / 30), a %= 30, o += f(r / 12), r %= 12, s.days = a, s.months = r, s.years = o
        },
        abs: function() {
            return this._milliseconds = Math.abs(this._milliseconds), this._days = Math.abs(this._days), this._months = Math.abs(this._months), this._data.milliseconds = Math.abs(this._data.milliseconds), this._data.seconds = Math.abs(this._data.seconds), this._data.minutes = Math.abs(this._data.minutes), this._data.hours = Math.abs(this._data.hours), this._data.months = Math.abs(this._data.months), this._data.years = Math.abs(this._data.years), this
        },
        weeks: function() {
            return f(this.days() / 7)
        },
        valueOf: function() {
            return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * T(this._months / 12)
        },
        humanize: function(t) {
            var e = se(this, !t, this.localeData());
            return t && (e = this.localeData().pastFuture(+this, e)), this.localeData().postformat(e)
        },
        add: function(t, e) {
            var n = ve.duration(t, e);
            return this._milliseconds += n._milliseconds, this._days += n._days, this._months += n._months, this._bubble(), this
        },
        subtract: function(t, e) {
            var n = ve.duration(t, e);
            return this._milliseconds -= n._milliseconds, this._days -= n._days, this._months -= n._months, this._bubble(), this
        },
        get: function(t) {
            return t = L(t), this[t.toLowerCase() + "s"]()
        },
        as: function(t) {
            var e, n;
            if (t = L(t), "month" === t || "year" === t) return e = this._days + this._milliseconds / 864e5, n = this._months + 12 * me(e), "month" === t ? n : n / 12;
            switch (e = this._days + _e(this._months / 12), t) {
                case "week":
                    return e / 7 + this._milliseconds / 6048e5;
                case "day":
                    return e + this._milliseconds / 864e5;
                case "hour":
                    return 24 * e + this._milliseconds / 36e5;
                case "minute":
                    return 24 * e * 60 + this._milliseconds / 6e4;
                case "second":
                    return 24 * e * 60 * 60 + this._milliseconds / 1e3;
                case "millisecond":
                    return Math.floor(24 * e * 60 * 60 * 1e3) + this._milliseconds;
                default:
                    throw new Error("Unknown unit " + t)
            }
        },
        lang: ve.fn.lang,
        locale: ve.fn.locale,
        toIsoString: r("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", function() {
            return this.toISOString()
        }),
        toISOString: function() {
            var t = Math.abs(this.years()),
                e = Math.abs(this.months()),
                n = Math.abs(this.days()),
                i = Math.abs(this.hours()),
                a = Math.abs(this.minutes()),
                r = Math.abs(this.seconds() + this.milliseconds() / 1e3);
            return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (t ? t + "Y" : "") + (e ? e + "M" : "") + (n ? n + "D" : "") + (i || a || r ? "T" : "") + (i ? i + "H" : "") + (a ? a + "M" : "") + (r ? r + "S" : "") : "P0D"
        },
        localeData: function() {
            return this._locale
        }
    }), ve.duration.fn.toString = ve.duration.fn.toISOString;
    for (we in dn) n(dn, we) && ge(we.toLowerCase());
    ve.duration.fn.asMilliseconds = function() {
        return this.as("ms")
    }, ve.duration.fn.asSeconds = function() {
        return this.as("s")
    }, ve.duration.fn.asMinutes = function() {
        return this.as("m")
    }, ve.duration.fn.asHours = function() {
        return this.as("h")
    }, ve.duration.fn.asDays = function() {
        return this.as("d")
    }, ve.duration.fn.asWeeks = function() {
        return this.as("weeks")
    }, ve.duration.fn.asMonths = function() {
        return this.as("M")
    }, ve.duration.fn.asYears = function() {
        return this.as("y")
    }, ve.locale("en", {
        ordinal: function(t) {
            var e = t % 10,
                n = 1 === T(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
            return t + n
        }
    }),
    function(t) {
        t(ve)
    }(function(t) {
        return t.defineLocale("af", {
            months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
            weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
            weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
            meridiem: function(t, e, n) {
                return 12 > t ? n ? "vm" : "VM" : n ? "nm" : "NM"
            },
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd, D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[Vandag om] LT",
                nextDay: "[Môre om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[Gister om] LT",
                lastWeek: "[Laas] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "oor %s",
                past: "%s gelede",
                s: "'n paar sekondes",
                m: "'n minuut",
                mm: "%d minute",
                h: "'n uur",
                hh: "%d ure",
                d: "'n dag",
                dd: "%d dae",
                M: "'n maand",
                MM: "%d maande",
                y: "'n jaar",
                yy: "%d jaar"
            },
            ordinal: function(t) {
                return t + (1 === t || 8 === t || t >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        return t.defineLocale("ar-ma", {
            months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        var e = {
            1: "١",
            2: "٢",
            3: "٣",
            4: "٤",
            5: "٥",
            6: "٦",
            7: "٧",
            8: "٨",
            9: "٩",
            0: "٠"
        }, n = {
                "١": "1",
                "٢": "2",
                "٣": "3",
                "٤": "4",
                "٥": "5",
                "٦": "6",
                "٧": "7",
                "٨": "8",
                "٩": "9",
                "٠": "0"
            };
        return t.defineLocale("ar-sa", {
            months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd D MMMM YYYY LT"
            },
            meridiem: function(t) {
                return 12 > t ? "ص" : "م"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            preparse: function(t) {
                return t.replace(/[۰-۹]/g, function(t) {
                    return n[t]
                }).replace(/،/g, ",")
            },
            postformat: function(t) {
                return t.replace(/\d/g, function(t) {
                    return e[t]
                }).replace(/,/g, "،")
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        var e = {
            1: "١",
            2: "٢",
            3: "٣",
            4: "٤",
            5: "٥",
            6: "٦",
            7: "٧",
            8: "٨",
            9: "٩",
            0: "٠"
        }, n = {
                "١": "1",
                "٢": "2",
                "٣": "3",
                "٤": "4",
                "٥": "5",
                "٦": "6",
                "٧": "7",
                "٨": "8",
                "٩": "9",
                "٠": "0"
            }, i = function(t) {
                return 0 === t ? 0 : 1 === t ? 1 : 2 === t ? 2 : t % 100 >= 3 && 10 >= t % 100 ? 3 : t % 100 >= 11 ? 4 : 5
            }, a = {
                s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
            }, r = function(t) {
                return function(e, n) {
                    var r = i(e),
                        s = a[t][i(e)];
                    return 2 === r && (s = s[n ? 0 : 1]), s.replace(/%d/i, e)
                }
            }, s = ["كانون الثاني يناير", "شباط فبراير", "آذار مارس", "نيسان أبريل", "أيار مايو", "حزيران يونيو", "تموز يوليو", "آب أغسطس", "أيلول سبتمبر", "تشرين الأول أكتوبر", "تشرين الثاني نوفمبر", "كانون الأول ديسمبر"];
        return t.defineLocale("ar", {
            months: s,
            monthsShort: s,
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd D MMMM YYYY LT"
            },
            meridiem: function(t) {
                return 12 > t ? "ص" : "م"
            },
            calendar: {
                sameDay: "[اليوم عند الساعة] LT",
                nextDay: "[غدًا عند الساعة] LT",
                nextWeek: "dddd [عند الساعة] LT",
                lastDay: "[أمس عند الساعة] LT",
                lastWeek: "dddd [عند الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "بعد %s",
                past: "منذ %s",
                s: r("s"),
                m: r("m"),
                mm: r("m"),
                h: r("h"),
                hh: r("h"),
                d: r("d"),
                dd: r("d"),
                M: r("M"),
                MM: r("M"),
                y: r("y"),
                yy: r("y")
            },
            preparse: function(t) {
                return t.replace(/[۰-۹]/g, function(t) {
                    return n[t]
                }).replace(/،/g, ",")
            },
            postformat: function(t) {
                return t.replace(/\d/g, function(t) {
                    return e[t]
                }).replace(/,/g, "،")
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        var e = {
            1: "-inci",
            5: "-inci",
            8: "-inci",
            70: "-inci",
            80: "-inci",
            2: "-nci",
            7: "-nci",
            20: "-nci",
            50: "-nci",
            3: "-üncü",
            4: "-üncü",
            100: "-üncü",
            6: "-ncı",
            9: "-uncu",
            10: "-uncu",
            30: "-uncu",
            60: "-ıncı",
            90: "-ıncı"
        };
        return t.defineLocale("az", {
            months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
            monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
            weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
            weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
            weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd, D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[bugün saat] LT",
                nextDay: "[sabah saat] LT",
                nextWeek: "[gələn həftə] dddd [saat] LT",
                lastDay: "[dünən] LT",
                lastWeek: "[keçən həftə] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s əvvəl",
                s: "birneçə saniyyə",
                m: "bir dəqiqə",
                mm: "%d dəqiqə",
                h: "bir saat",
                hh: "%d saat",
                d: "bir gün",
                dd: "%d gün",
                M: "bir ay",
                MM: "%d ay",
                y: "bir il",
                yy: "%d il"
            },
            meridiem: function(t) {
                return 4 > t ? "gecə" : 12 > t ? "səhər" : 17 > t ? "gündüz" : "axşam"
            },
            ordinal: function(t) {
                if (0 === t) return t + "-ıncı";
                var n = t % 10,
                    i = t % 100 - n,
                    a = t >= 100 ? 100 : null;
                return t + (e[n] || e[i] || e[a])
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        function e(t, e) {
            var n = t.split("_");
            return e % 10 === 1 && e % 100 !== 11 ? n[0] : e % 10 >= 2 && 4 >= e % 10 && (10 > e % 100 || e % 100 >= 20) ? n[1] : n[2]
        }

        function n(t, n, i) {
            var a = {
                mm: n ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
                hh: n ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
                dd: "дзень_дні_дзён",
                MM: "месяц_месяцы_месяцаў",
                yy: "год_гады_гадоў"
            };
            return "m" === i ? n ? "хвіліна" : "хвіліну" : "h" === i ? n ? "гадзіна" : "гадзіну" : t + " " + e(a[i], +t)
        }

        function i(t, e) {
            var n = {
                nominative: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_"),
                accusative: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_")
            }, i = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(e) ? "accusative" : "nominative";
            return n[i][t.month()]
        }

        function a(t, e) {
            var n = {
                nominative: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
                accusative: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_")
            }, i = /\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/.test(e) ? "accusative" : "nominative";
            return n[i][t.day()]
        }
        return t.defineLocale("be", {
            months: i,
            monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
            weekdays: a,
            weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
            weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY г.",
                LLL: "D MMMM YYYY г., LT",
                LLLL: "dddd, D MMMM YYYY г., LT"
            },
            calendar: {
                sameDay: "[Сёння ў] LT",
                nextDay: "[Заўтра ў] LT",
                lastDay: "[Учора ў] LT",
                nextWeek: function() {
                    return "[У] dddd [ў] LT"
                },
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return "[У мінулую] dddd [ў] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[У мінулы] dddd [ў] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "праз %s",
                past: "%s таму",
                s: "некалькі секунд",
                m: n,
                mm: n,
                h: n,
                hh: n,
                d: "дзень",
                dd: n,
                M: "месяц",
                MM: n,
                y: "год",
                yy: n
            },
            meridiem: function(t) {
                return 4 > t ? "ночы" : 12 > t ? "раніцы" : 17 > t ? "дня" : "вечара"
            },
            ordinal: function(t, e) {
                switch (e) {
                    case "M":
                    case "d":
                    case "DDD":
                    case "w":
                    case "W":
                        return t % 10 !== 2 && t % 10 !== 3 || t % 100 === 12 || t % 100 === 13 ? t + "-ы" : t + "-і";
                    case "D":
                        return t + "-га";
                    default:
                        return t
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        return t.defineLocale("bg", {
            months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
            monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
            weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
            weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
            weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            longDateFormat: {
                LT: "H:mm",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd, D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[Днес в] LT",
                nextDay: "[Утре в] LT",
                nextWeek: "dddd [в] LT",
                lastDay: "[Вчера в] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[В изминалата] dddd [в] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[В изминалия] dddd [в] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "след %s",
                past: "преди %s",
                s: "няколко секунди",
                m: "минута",
                mm: "%d минути",
                h: "час",
                hh: "%d часа",
                d: "ден",
                dd: "%d дни",
                M: "месец",
                MM: "%d месеца",
                y: "година",
                yy: "%d години"
            },
            ordinal: function(t) {
                var e = t % 10,
                    n = t % 100;
                return 0 === t ? t + "-ев" : 0 === n ? t + "-ен" : n > 10 && 20 > n ? t + "-ти" : 1 === e ? t + "-ви" : 2 === e ? t + "-ри" : 7 === e || 8 === e ? t + "-ми" : t + "-ти"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        var e = {
            1: "১",
            2: "২",
            3: "৩",
            4: "৪",
            5: "৫",
            6: "৬",
            7: "৭",
            8: "৮",
            9: "৯",
            0: "০"
        }, n = {
                "১": "1",
                "২": "2",
                "৩": "3",
                "৪": "4",
                "৫": "5",
                "৬": "6",
                "৭": "7",
                "৮": "8",
                "৯": "9",
                "০": "0"
            };
        return t.defineLocale("bn", {
            months: "জানুয়ারী_ফেবুয়ারী_মার্চ_এপ্রিল_মে_জুন_জুলাই_অগাস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
            monthsShort: "জানু_ফেব_মার্চ_এপর_মে_জুন_জুল_অগ_সেপ্ট_অক্টো_নভ_ডিসেম্".split("_"),
            weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পত্তিবার_শুক্রুবার_শনিবার".split("_"),
            weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পত্তি_শুক্রু_শনি".split("_"),
            weekdaysMin: "রব_সম_মঙ্গ_বু_ব্রিহ_শু_শনি".split("_"),
            longDateFormat: {
                LT: "A h:mm সময়",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, LT",
                LLLL: "dddd, D MMMM YYYY, LT"
            },
            calendar: {
                sameDay: "[আজ] LT",
                nextDay: "[আগামীকাল] LT",
                nextWeek: "dddd, LT",
                lastDay: "[গতকাল] LT",
                lastWeek: "[গত] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s পরে",
                past: "%s আগে",
                s: "কএক সেকেন্ড",
                m: "এক মিনিট",
                mm: "%d মিনিট",
                h: "এক ঘন্টা",
                hh: "%d ঘন্টা",
                d: "এক দিন",
                dd: "%d দিন",
                M: "এক মাস",
                MM: "%d মাস",
                y: "এক বছর",
                yy: "%d বছর"
            },
            preparse: function(t) {
                return t.replace(/[১২৩৪৫৬৭৮৯০]/g, function(t) {
                    return n[t]
                })
            },
            postformat: function(t) {
                return t.replace(/\d/g, function(t) {
                    return e[t]
                })
            },
            meridiem: function(t) {
                return 4 > t ? "রাত" : 10 > t ? "শকাল" : 17 > t ? "দুপুর" : 20 > t ? "বিকেল" : "রাত"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        var e = {
            1: "༡",
            2: "༢",
            3: "༣",
            4: "༤",
            5: "༥",
            6: "༦",
            7: "༧",
            8: "༨",
            9: "༩",
            0: "༠"
        }, n = {
                "༡": "1",
                "༢": "2",
                "༣": "3",
                "༤": "4",
                "༥": "5",
                "༦": "6",
                "༧": "7",
                "༨": "8",
                "༩": "9",
                "༠": "0"
            };
        return t.defineLocale("bo", {
            months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
            monthsShort: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
            weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
            weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
            weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, LT",
                LLLL: "dddd, D MMMM YYYY, LT"
            },
            calendar: {
                sameDay: "[དི་རིང] LT",
                nextDay: "[སང་ཉིན] LT",
                nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
                lastDay: "[ཁ་སང] LT",
                lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ལ་",
                past: "%s སྔན་ལ",
                s: "ལམ་སང",
                m: "སྐར་མ་གཅིག",
                mm: "%d སྐར་མ",
                h: "ཆུ་ཚོད་གཅིག",
                hh: "%d ཆུ་ཚོད",
                d: "ཉིན་གཅིག",
                dd: "%d ཉིན་",
                M: "ཟླ་བ་གཅིག",
                MM: "%d ཟླ་བ",
                y: "ལོ་གཅིག",
                yy: "%d ལོ"
            },
            preparse: function(t) {
                return t.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function(t) {
                    return n[t]
                })
            },
            postformat: function(t) {
                return t.replace(/\d/g, function(t) {
                    return e[t]
                })
            },
            meridiem: function(t) {
                return 4 > t ? "མཚན་མོ" : 10 > t ? "ཞོགས་ཀས" : 17 > t ? "ཉིན་གུང" : 20 > t ? "དགོང་དག" : "མཚན་མོ"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(e) {
        function n(t, e, n) {
            var i = {
                mm: "munutenn",
                MM: "miz",
                dd: "devezh"
            };
            return t + " " + r(i[n], t)
        }

        function i(t) {
            switch (a(t)) {
                case 1:
                case 3:
                case 4:
                case 5:
                case 9:
                    return t + " bloaz";
                default:
                    return t + " vloaz"
            }
        }

        function a(t) {
            return t > 9 ? a(t % 10) : t
        }

        function r(t, e) {
            return 2 === e ? s(t) : t
        }

        function s(e) {
            var n = {
                m: "v",
                b: "v",
                d: "z"
            };
            return n[e.charAt(0)] === t ? e : n[e.charAt(0)] + e.substring(1)
        }
        return e.defineLocale("br", {
            months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
            monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
            weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
            weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
            longDateFormat: {
                LT: "h[e]mm A",
                L: "DD/MM/YYYY",
                LL: "D [a viz] MMMM YYYY",
                LLL: "D [a viz] MMMM YYYY LT",
                LLLL: "dddd, D [a viz] MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[Hiziv da] LT",
                nextDay: "[Warc'hoazh da] LT",
                nextWeek: "dddd [da] LT",
                lastDay: "[Dec'h da] LT",
                lastWeek: "dddd [paset da] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "a-benn %s",
                past: "%s 'zo",
                s: "un nebeud segondennoù",
                m: "ur vunutenn",
                mm: n,
                h: "un eur",
                hh: "%d eur",
                d: "un devezh",
                dd: n,
                M: "ur miz",
                MM: n,
                y: "ur bloaz",
                yy: i
            },
            ordinal: function(t) {
                var e = 1 === t ? "añ" : "vet";
                return t + e
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        function e(t, e, n) {
            var i = t + " ";
            switch (n) {
                case "m":
                    return e ? "jedna minuta" : "jedne minute";
                case "mm":
                    return i += 1 === t ? "minuta" : 2 === t || 3 === t || 4 === t ? "minute" : "minuta";
                case "h":
                    return e ? "jedan sat" : "jednog sata";
                case "hh":
                    return i += 1 === t ? "sat" : 2 === t || 3 === t || 4 === t ? "sata" : "sati";
                case "dd":
                    return i += 1 === t ? "dan" : "dana";
                case "MM":
                    return i += 1 === t ? "mjesec" : 2 === t || 3 === t || 4 === t ? "mjeseca" : "mjeseci";
                case "yy":
                    return i += 1 === t ? "godina" : 2 === t || 3 === t || 4 === t ? "godine" : "godina"
            }
        }
        return t.defineLocale("bs", {
            months: "januar_februar_mart_april_maj_juni_juli_avgust_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            longDateFormat: {
                LT: "H:mm",
                L: "DD. MM. YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY LT",
                LLLL: "dddd, D. MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[jučer u] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                            return "[prošlu] dddd [u] LT";
                        case 6:
                            return "[prošle] [subote] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prošli] dddd [u] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                m: e,
                mm: e,
                h: e,
                hh: e,
                d: "dan",
                dd: e,
                M: "mjesec",
                MM: e,
                y: "godinu",
                yy: e
            },
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        return t.defineLocale("ca", {
            months: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
            monthsShort: "gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.".split("_"),
            weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
            weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
            weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),
            longDateFormat: {
                LT: "H:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd D MMMM YYYY LT"
            },
            calendar: {
                sameDay: function() {
                    return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                nextDay: function() {
                    return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                lastDay: function() {
                    return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                lastWeek: function() {
                    return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "fa %s",
                s: "uns segons",
                m: "un minut",
                mm: "%d minuts",
                h: "una hora",
                hh: "%d hores",
                d: "un dia",
                dd: "%d dies",
                M: "un mes",
                MM: "%d mesos",
                y: "un any",
                yy: "%d anys"
            },
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        function e(t) {
            return t > 1 && 5 > t && 1 !== ~~(t / 10)
        }

        function n(t, n, i, a) {
            var r = t + " ";
            switch (i) {
                case "s":
                    return n || a ? "pár sekund" : "pár sekundami";
                case "m":
                    return n ? "minuta" : a ? "minutu" : "minutou";
                case "mm":
                    return n || a ? r + (e(t) ? "minuty" : "minut") : r + "minutami";
                case "h":
                    return n ? "hodina" : a ? "hodinu" : "hodinou";
                case "hh":
                    return n || a ? r + (e(t) ? "hodiny" : "hodin") : r + "hodinami";
                case "d":
                    return n || a ? "den" : "dnem";
                case "dd":
                    return n || a ? r + (e(t) ? "dny" : "dní") : r + "dny";
                case "M":
                    return n || a ? "měsíc" : "měsícem";
                case "MM":
                    return n || a ? r + (e(t) ? "měsíce" : "měsíců") : r + "měsíci";
                case "y":
                    return n || a ? "rok" : "rokem";
                case "yy":
                    return n || a ? r + (e(t) ? "roky" : "let") : r + "lety"
            }
        }
        var i = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
            a = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");
        return t.defineLocale("cs", {
            months: i,
            monthsShort: a,
            monthsParse: function(t, e) {
                var n, i = [];
                for (n = 0; 12 > n; n++) i[n] = new RegExp("^" + t[n] + "$|^" + e[n] + "$", "i");
                return i
            }(i, a),
            weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
            weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
            weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                L: "DD. MM. YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY LT",
                LLLL: "dddd D. MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[dnes v] LT",
                nextDay: "[zítra v] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[v neděli v] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [v] LT";
                        case 3:
                            return "[ve středu v] LT";
                        case 4:
                            return "[ve čtvrtek v] LT";
                        case 5:
                            return "[v pátek v] LT";
                        case 6:
                            return "[v sobotu v] LT"
                    }
                },
                lastDay: "[včera v] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[minulou neděli v] LT";
                        case 1:
                        case 2:
                            return "[minulé] dddd [v] LT";
                        case 3:
                            return "[minulou středu v] LT";
                        case 4:
                        case 5:
                            return "[minulý] dddd [v] LT";
                        case 6:
                            return "[minulou sobotu v] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "před %s",
                s: n,
                m: n,
                mm: n,
                h: n,
                hh: n,
                d: n,
                dd: n,
                M: n,
                MM: n,
                y: n,
                yy: n
            },
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        return t.defineLocale("cv", {
            months: "кăрлач_нарăс_пуш_ака_май_çĕртме_утă_çурла_авăн_юпа_чӳк_раштав".split("_"),
            monthsShort: "кăр_нар_пуш_ака_май_çĕр_утă_çур_ав_юпа_чӳк_раш".split("_"),
            weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кĕçнерникун_эрнекун_шăматкун".split("_"),
            weekdaysShort: "выр_тун_ытл_юн_кĕç_эрн_шăм".split("_"),
            weekdaysMin: "вр_тн_ыт_юн_кç_эр_шм".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD-MM-YYYY",
                LL: "YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ]",
                LLL: "YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ], LT",
                LLLL: "dddd, YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ], LT"
            },
            calendar: {
                sameDay: "[Паян] LT [сехетре]",
                nextDay: "[Ыран] LT [сехетре]",
                lastDay: "[Ĕнер] LT [сехетре]",
                nextWeek: "[Çитес] dddd LT [сехетре]",
                lastWeek: "[Иртнĕ] dddd LT [сехетре]",
                sameElse: "L"
            },
            relativeTime: {
                future: function(t) {
                    var e = /сехет$/i.exec(t) ? "рен" : /çул$/i.exec(t) ? "тан" : "ран";
                    return t + e
                },
                past: "%s каялла",
                s: "пĕр-ик çеккунт",
                m: "пĕр минут",
                mm: "%d минут",
                h: "пĕр сехет",
                hh: "%d сехет",
                d: "пĕр кун",
                dd: "%d кун",
                M: "пĕр уйăх",
                MM: "%d уйăх",
                y: "пĕр çул",
                yy: "%d çул"
            },
            ordinal: "%d-мĕш",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        return t.defineLocale("cy", {
            months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
            monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
            weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
            weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd, D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[Heddiw am] LT",
                nextDay: "[Yfory am] LT",
                nextWeek: "dddd [am] LT",
                lastDay: "[Ddoe am] LT",
                lastWeek: "dddd [diwethaf am] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "mewn %s",
                past: "%s yn ôl",
                s: "ychydig eiliadau",
                m: "munud",
                mm: "%d munud",
                h: "awr",
                hh: "%d awr",
                d: "diwrnod",
                dd: "%d diwrnod",
                M: "mis",
                MM: "%d mis",
                y: "blwyddyn",
                yy: "%d flynedd"
            },
            ordinal: function(t) {
                var e = t,
                    n = "",
                    i = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"];
                return e > 20 ? n = 40 === e || 50 === e || 60 === e || 80 === e || 100 === e ? "fed" : "ain" : e > 0 && (n = i[e]), t + n
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        return t.defineLocale("da", {
            months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
            weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
            weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY LT",
                LLLL: "dddd [d.] D. MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[I dag kl.] LT",
                nextDay: "[I morgen kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[I går kl.] LT",
                lastWeek: "[sidste] dddd [kl] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "få sekunder",
                m: "et minut",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dage",
                M: "en måned",
                MM: "%d måneder",
                y: "et år",
                yy: "%d år"
            },
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        function e(t, e, n) {
            var i = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [t + " Tage", t + " Tagen"],
                M: ["ein Monat", "einem Monat"],
                MM: [t + " Monate", t + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [t + " Jahre", t + " Jahren"]
            };
            return e ? i[n][0] : i[n][1]
        }
        return t.defineLocale("de-at", {
            months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm [Uhr]",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY LT",
                LLLL: "dddd, D. MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[Heute um] LT",
                sameElse: "L",
                nextDay: "[Morgen um] LT",
                nextWeek: "dddd [um] LT",
                lastDay: "[Gestern um] LT",
                lastWeek: "[letzten] dddd [um] LT"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                m: e,
                mm: "%d Minuten",
                h: e,
                hh: "%d Stunden",
                d: e,
                dd: e,
                M: e,
                MM: e,
                y: e,
                yy: e
            },
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        function e(t, e, n) {
            var i = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [t + " Tage", t + " Tagen"],
                M: ["ein Monat", "einem Monat"],
                MM: [t + " Monate", t + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [t + " Jahre", t + " Jahren"]
            };
            return e ? i[n][0] : i[n][1]
        }
        return t.defineLocale("de", {
            months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm [Uhr]",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY LT",
                LLLL: "dddd, D. MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[Heute um] LT",
                sameElse: "L",
                nextDay: "[Morgen um] LT",
                nextWeek: "dddd [um] LT",
                lastDay: "[Gestern um] LT",
                lastWeek: "[letzten] dddd [um] LT"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                m: e,
                mm: "%d Minuten",
                h: e,
                hh: "%d Stunden",
                d: e,
                dd: e,
                M: e,
                MM: e,
                y: e,
                yy: e
            },
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        return t.defineLocale("el", {
            monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
            monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
            months: function(t, e) {
                return /D/.test(e.substring(0, e.indexOf("MMMM"))) ? this._monthsGenitiveEl[t.month()] : this._monthsNominativeEl[t.month()]
            },
            monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
            weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
            weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
            weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
            meridiem: function(t, e, n) {
                return t > 11 ? n ? "μμ" : "ΜΜ" : n ? "πμ" : "ΠΜ"
            },
            isPM: function(t) {
                return "μ" === (t + "").toLowerCase()[0]
            },
            meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
            longDateFormat: {
                LT: "h:mm A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd, D MMMM YYYY LT"
            },
            calendarEl: {
                sameDay: "[Σήμερα {}] LT",
                nextDay: "[Αύριο {}] LT",
                nextWeek: "dddd [{}] LT",
                lastDay: "[Χθες {}] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 6:
                            return "[το προηγούμενο] dddd [{}] LT";
                        default:
                            return "[την προηγούμενη] dddd [{}] LT"
                    }
                },
                sameElse: "L"
            },
            calendar: function(t, e) {
                var n = this._calendarEl[t],
                    i = e && e.hours();
                return "function" == typeof n && (n = n.apply(e)), n.replace("{}", i % 12 === 1 ? "στη" : "στις")
            },
            relativeTime: {
                future: "σε %s",
                past: "%s πριν",
                s: "δευτερόλεπτα",
                m: "ένα λεπτό",
                mm: "%d λεπτά",
                h: "μία ώρα",
                hh: "%d ώρες",
                d: "μία μέρα",
                dd: "%d μέρες",
                M: "ένας μήνας",
                MM: "%d μήνες",
                y: "ένας χρόνος",
                yy: "%d χρόνια"
            },
            ordinal: function(t) {
                return t + "η"
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        return t.defineLocale("en-au", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd, D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            ordinal: function(t) {
                var e = t % 10,
                    n = 1 === ~~(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
                return t + n
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        return t.defineLocale("en-ca", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                L: "YYYY-MM-DD",
                LL: "D MMMM, YYYY",
                LLL: "D MMMM, YYYY LT",
                LLLL: "dddd, D MMMM, YYYY LT"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            ordinal: function(t) {
                var e = t % 10,
                    n = 1 === ~~(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
                return t + n
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        return t.defineLocale("en-gb", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd, D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            ordinal: function(t) {
                var e = t % 10,
                    n = 1 === ~~(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
                return t + n
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        return t.defineLocale("eo", {
            months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),
            weekdays: "Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato".split("_"),
            weekdaysShort: "Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab".split("_"),
            weekdaysMin: "Di_Lu_Ma_Me_Ĵa_Ve_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "YYYY-MM-DD",
                LL: "D[-an de] MMMM, YYYY",
                LLL: "D[-an de] MMMM, YYYY LT",
                LLLL: "dddd, [la] D[-an de] MMMM, YYYY LT"
            },
            meridiem: function(t, e, n) {
                return t > 11 ? n ? "p.t.m." : "P.T.M." : n ? "a.t.m." : "A.T.M."
            },
            calendar: {
                sameDay: "[Hodiaŭ je] LT",
                nextDay: "[Morgaŭ je] LT",
                nextWeek: "dddd [je] LT",
                lastDay: "[Hieraŭ je] LT",
                lastWeek: "[pasinta] dddd [je] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "je %s",
                past: "antaŭ %s",
                s: "sekundoj",
                m: "minuto",
                mm: "%d minutoj",
                h: "horo",
                hh: "%d horoj",
                d: "tago",
                dd: "%d tagoj",
                M: "monato",
                MM: "%d monatoj",
                y: "jaro",
                yy: "%d jaroj"
            },
            ordinal: "%da",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        var e = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
        return t.defineLocale("es", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function(t, i) {
                return /-MMM-/.test(i) ? n[t.month()] : e[t.month()]
            },
            weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "Do_Lu_Ma_Mi_Ju_Vi_Sá".split("_"),
            longDateFormat: {
                LT: "H:mm",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY LT",
                LLLL: "dddd, D [de] MMMM [de] YYYY LT"
            },
            calendar: {
                sameDay: function() {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextDay: function() {
                    return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastDay: function() {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastWeek: function() {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un año",
                yy: "%d años"
            },
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        function e(t, e, n, i) {
            var a = {
                s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
                m: ["ühe minuti", "üks minut"],
                mm: [t + " minuti", t + " minutit"],
                h: ["ühe tunni", "tund aega", "üks tund"],
                hh: [t + " tunni", t + " tundi"],
                d: ["ühe päeva", "üks päev"],
                M: ["kuu aja", "kuu aega", "üks kuu"],
                MM: [t + " kuu", t + " kuud"],
                y: ["ühe aasta", "aasta", "üks aasta"],
                yy: [t + " aasta", t + " aastat"]
            };
            return e ? a[n][2] ? a[n][2] : a[n][1] : i ? a[n][0] : a[n][1]
        }
        return t.defineLocale("et", {
            months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
            monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
            weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
            weekdaysShort: "P_E_T_K_N_R_L".split("_"),
            weekdaysMin: "P_E_T_K_N_R_L".split("_"),
            longDateFormat: {
                LT: "H:mm",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY LT",
                LLLL: "dddd, D. MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[Täna,] LT",
                nextDay: "[Homme,] LT",
                nextWeek: "[Järgmine] dddd LT",
                lastDay: "[Eile,] LT",
                lastWeek: "[Eelmine] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s pärast",
                past: "%s tagasi",
                s: e,
                m: e,
                mm: e,
                h: e,
                hh: e,
                d: e,
                dd: "%d päeva",
                M: e,
                MM: e,
                y: e,
                yy: e
            },
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        return t.defineLocale("eu", {
            months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
            monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
            weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
            weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
            weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "YYYY-MM-DD",
                LL: "YYYY[ko] MMMM[ren] D[a]",
                LLL: "YYYY[ko] MMMM[ren] D[a] LT",
                LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] LT",
                l: "YYYY-M-D",
                ll: "YYYY[ko] MMM D[a]",
                lll: "YYYY[ko] MMM D[a] LT",
                llll: "ddd, YYYY[ko] MMM D[a] LT"
            },
            calendar: {
                sameDay: "[gaur] LT[etan]",
                nextDay: "[bihar] LT[etan]",
                nextWeek: "dddd LT[etan]",
                lastDay: "[atzo] LT[etan]",
                lastWeek: "[aurreko] dddd LT[etan]",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s barru",
                past: "duela %s",
                s: "segundo batzuk",
                m: "minutu bat",
                mm: "%d minutu",
                h: "ordu bat",
                hh: "%d ordu",
                d: "egun bat",
                dd: "%d egun",
                M: "hilabete bat",
                MM: "%d hilabete",
                y: "urte bat",
                yy: "%d urte"
            },
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        var e = {
            1: "۱",
            2: "۲",
            3: "۳",
            4: "۴",
            5: "۵",
            6: "۶",
            7: "۷",
            8: "۸",
            9: "۹",
            0: "۰"
        }, n = {
                "۱": "1",
                "۲": "2",
                "۳": "3",
                "۴": "4",
                "۵": "5",
                "۶": "6",
                "۷": "7",
                "۸": "8",
                "۹": "9",
                "۰": "0"
            };
        return t.defineLocale("fa", {
            months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
            monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
            weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
            weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
            weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd, D MMMM YYYY LT"
            },
            meridiem: function(t) {
                return 12 > t ? "قبل از ظهر" : "بعد از ظهر"
            },
            calendar: {
                sameDay: "[امروز ساعت] LT",
                nextDay: "[فردا ساعت] LT",
                nextWeek: "dddd [ساعت] LT",
                lastDay: "[دیروز ساعت] LT",
                lastWeek: "dddd [پیش] [ساعت] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "در %s",
                past: "%s پیش",
                s: "چندین ثانیه",
                m: "یک دقیقه",
                mm: "%d دقیقه",
                h: "یک ساعت",
                hh: "%d ساعت",
                d: "یک روز",
                dd: "%d روز",
                M: "یک ماه",
                MM: "%d ماه",
                y: "یک سال",
                yy: "%d سال"
            },
            preparse: function(t) {
                return t.replace(/[۰-۹]/g, function(t) {
                    return n[t]
                }).replace(/،/g, ",")
            },
            postformat: function(t) {
                return t.replace(/\d/g, function(t) {
                    return e[t]
                }).replace(/,/g, "،")
            },
            ordinal: "%dم",
            week: {
                dow: 6,
                doy: 12
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        function e(t, e, i, a) {
            var r = "";
            switch (i) {
                case "s":
                    return a ? "muutaman sekunnin" : "muutama sekunti";
                case "m":
                    return a ? "minuutin" : "minuutti";
                case "mm":
                    r = a ? "minuutin" : "minuuttia";
                    break;
                case "h":
                    return a ? "tunnin" : "tunti";
                case "hh":
                    r = a ? "tunnin" : "tuntia";
                    break;
                case "d":
                    return a ? "päivän" : "päivä";
                case "dd":
                    r = a ? "päivän" : "päivää";
                    break;
                case "M":
                    return a ? "kuukauden" : "kuukausi";
                case "MM":
                    r = a ? "kuukauden" : "kuukautta";
                    break;
                case "y":
                    return a ? "vuoden" : "vuosi";
                case "yy":
                    r = a ? "vuoden" : "vuotta"
            }
            return r = n(t, a) + " " + r
        }

        function n(t, e) {
            return 10 > t ? e ? a[t] : i[t] : t
        }
        var i = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),
            a = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", i[7], i[8], i[9]];
        return t.defineLocale("fi", {
            months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
            monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
            weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
            weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
            weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                L: "DD.MM.YYYY",
                LL: "Do MMMM[ta] YYYY",
                LLL: "Do MMMM[ta] YYYY, [klo] LT",
                LLLL: "dddd, Do MMMM[ta] YYYY, [klo] LT",
                l: "D.M.YYYY",
                ll: "Do MMM YYYY",
                lll: "Do MMM YYYY, [klo] LT",
                llll: "ddd, Do MMM YYYY, [klo] LT"
            },
            calendar: {
                sameDay: "[tänään] [klo] LT",
                nextDay: "[huomenna] [klo] LT",
                nextWeek: "dddd [klo] LT",
                lastDay: "[eilen] [klo] LT",
                lastWeek: "[viime] dddd[na] [klo] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s päästä",
                past: "%s sitten",
                s: e,
                m: e,
                mm: e,
                h: e,
                hh: e,
                d: e,
                dd: e,
                M: e,
                MM: e,
                y: e,
                yy: e
            },
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        return t.defineLocale("fo", {
            months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
            weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
            weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd D. MMMM, YYYY LT"
            },
            calendar: {
                sameDay: "[Í dag kl.] LT",
                nextDay: "[Í morgin kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[Í gjár kl.] LT",
                lastWeek: "[síðstu] dddd [kl] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "um %s",
                past: "%s síðani",
                s: "fá sekund",
                m: "ein minutt",
                mm: "%d minuttir",
                h: "ein tími",
                hh: "%d tímar",
                d: "ein dagur",
                dd: "%d dagar",
                M: "ein mánaði",
                MM: "%d mánaðir",
                y: "eitt ár",
                yy: "%d ár"
            },
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        return t.defineLocale("fr-ca", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[Aujourd'hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            ordinal: function(t) {
                return t + (1 === t ? "er" : "")
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        return t.defineLocale("fr", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[Aujourd'hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            ordinal: function(t) {
                return t + (1 === t ? "er" : "")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        return t.defineLocale("gl", {
            months: "Xaneiro_Febreiro_Marzo_Abril_Maio_Xuño_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro".split("_"),
            monthsShort: "Xan._Feb._Mar._Abr._Mai._Xuñ._Xul._Ago._Set._Out._Nov._Dec.".split("_"),
            weekdays: "Domingo_Luns_Martes_Mércores_Xoves_Venres_Sábado".split("_"),
            weekdaysShort: "Dom._Lun._Mar._Mér._Xov._Ven._Sáb.".split("_"),
            weekdaysMin: "Do_Lu_Ma_Mé_Xo_Ve_Sá".split("_"),
            longDateFormat: {
                LT: "H:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd D MMMM YYYY LT"
            },
            calendar: {
                sameDay: function() {
                    return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                },
                nextDay: function() {
                    return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                },
                nextWeek: function() {
                    return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT"
                },
                lastDay: function() {
                    return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT"
                },
                lastWeek: function() {
                    return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: function(t) {
                    return "uns segundos" === t ? "nuns segundos" : "en " + t
                },
                past: "hai %s",
                s: "uns segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "unha hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un ano",
                yy: "%d anos"
            },
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        return t.defineLocale("he", {
            months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
            monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
            weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
            weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
            weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D [ב]MMMM YYYY",
                LLL: "D [ב]MMMM YYYY LT",
                LLLL: "dddd, D [ב]MMMM YYYY LT",
                l: "D/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY LT",
                llll: "ddd, D MMM YYYY LT"
            },
            calendar: {
                sameDay: "[היום ב־]LT",
                nextDay: "[מחר ב־]LT",
                nextWeek: "dddd [בשעה] LT",
                lastDay: "[אתמול ב־]LT",
                lastWeek: "[ביום] dddd [האחרון בשעה] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "בעוד %s",
                past: "לפני %s",
                s: "מספר שניות",
                m: "דקה",
                mm: "%d דקות",
                h: "שעה",
                hh: function(t) {
                    return 2 === t ? "שעתיים" : t + " שעות"
                },
                d: "יום",
                dd: function(t) {
                    return 2 === t ? "יומיים" : t + " ימים"
                },
                M: "חודש",
                MM: function(t) {
                    return 2 === t ? "חודשיים" : t + " חודשים"
                },
                y: "שנה",
                yy: function(t) {
                    return 2 === t ? "שנתיים" : t + " שנים"
                }
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        var e = {
            1: "१",
            2: "२",
            3: "३",
            4: "४",
            5: "५",
            6: "६",
            7: "७",
            8: "८",
            9: "९",
            0: "०"
        }, n = {
                "१": "1",
                "२": "2",
                "३": "3",
                "४": "4",
                "५": "5",
                "६": "6",
                "७": "7",
                "८": "8",
                "९": "9",
                "०": "0"
            };
        return t.defineLocale("hi", {
            months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
            monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
            weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
            weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
            weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
            longDateFormat: {
                LT: "A h:mm बजे",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, LT",
                LLLL: "dddd, D MMMM YYYY, LT"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[कल] LT",
                nextWeek: "dddd, LT",
                lastDay: "[कल] LT",
                lastWeek: "[पिछले] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s में",
                past: "%s पहले",
                s: "कुछ ही क्षण",
                m: "एक मिनट",
                mm: "%d मिनट",
                h: "एक घंटा",
                hh: "%d घंटे",
                d: "एक दिन",
                dd: "%d दिन",
                M: "एक महीने",
                MM: "%d महीने",
                y: "एक वर्ष",
                yy: "%d वर्ष"
            },
            preparse: function(t) {
                return t.replace(/[१२३४५६७८९०]/g, function(t) {
                    return n[t]
                })
            },
            postformat: function(t) {
                return t.replace(/\d/g, function(t) {
                    return e[t]
                })
            },
            meridiem: function(t) {
                return 4 > t ? "रात" : 10 > t ? "सुबह" : 17 > t ? "दोपहर" : 20 > t ? "शाम" : "रात"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        function e(t, e, n) {
            var i = t + " ";
            switch (n) {
                case "m":
                    return e ? "jedna minuta" : "jedne minute";
                case "mm":
                    return i += 1 === t ? "minuta" : 2 === t || 3 === t || 4 === t ? "minute" : "minuta";
                case "h":
                    return e ? "jedan sat" : "jednog sata";
                case "hh":
                    return i += 1 === t ? "sat" : 2 === t || 3 === t || 4 === t ? "sata" : "sati";
                case "dd":
                    return i += 1 === t ? "dan" : "dana";
                case "MM":
                    return i += 1 === t ? "mjesec" : 2 === t || 3 === t || 4 === t ? "mjeseca" : "mjeseci";
                case "yy":
                    return i += 1 === t ? "godina" : 2 === t || 3 === t || 4 === t ? "godine" : "godina"
            }
        }
        return t.defineLocale("hr", {
            months: "sječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_"),
            monthsShort: "sje._vel._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            longDateFormat: {
                LT: "H:mm",
                L: "DD. MM. YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY LT",
                LLLL: "dddd, D. MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[jučer u] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                            return "[prošlu] dddd [u] LT";
                        case 6:
                            return "[prošle] [subote] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prošli] dddd [u] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                m: e,
                mm: e,
                h: e,
                hh: e,
                d: "dan",
                dd: e,
                M: "mjesec",
                MM: e,
                y: "godinu",
                yy: e
            },
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        function e(t, e, n, i) {
            var a = t;
            switch (n) {
                case "s":
                    return i || e ? "néhány másodperc" : "néhány másodperce";
                case "m":
                    return "egy" + (i || e ? " perc" : " perce");
                case "mm":
                    return a + (i || e ? " perc" : " perce");
                case "h":
                    return "egy" + (i || e ? " óra" : " órája");
                case "hh":
                    return a + (i || e ? " óra" : " órája");
                case "d":
                    return "egy" + (i || e ? " nap" : " napja");
                case "dd":
                    return a + (i || e ? " nap" : " napja");
                case "M":
                    return "egy" + (i || e ? " hónap" : " hónapja");
                case "MM":
                    return a + (i || e ? " hónap" : " hónapja");
                case "y":
                    return "egy" + (i || e ? " év" : " éve");
                case "yy":
                    return a + (i || e ? " év" : " éve")
            }
            return ""
        }

        function n(t) {
            return (t ? "" : "[múlt] ") + "[" + i[this.day()] + "] LT[-kor]"
        }
        var i = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");
        return t.defineLocale("hu", {
            months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
            monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
            weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
            weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
            weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
            longDateFormat: {
                LT: "H:mm",
                L: "YYYY.MM.DD.",
                LL: "YYYY. MMMM D.",
                LLL: "YYYY. MMMM D., LT",
                LLLL: "YYYY. MMMM D., dddd LT"
            },
            meridiem: function(t, e, n) {
                return 12 > t ? n === !0 ? "de" : "DE" : n === !0 ? "du" : "DU"
            },
            calendar: {
                sameDay: "[ma] LT[-kor]",
                nextDay: "[holnap] LT[-kor]",
                nextWeek: function() {
                    return n.call(this, !0)
                },
                lastDay: "[tegnap] LT[-kor]",
                lastWeek: function() {
                    return n.call(this, !1)
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "%s múlva",
                past: "%s",
                s: e,
                m: e,
                mm: e,
                h: e,
                hh: e,
                d: e,
                dd: e,
                M: e,
                MM: e,
                y: e,
                yy: e
            },
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        function e(t, e) {
            var n = {
                nominative: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_"),
                accusative: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_")
            }, i = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(e) ? "accusative" : "nominative";
            return n[i][t.month()]
        }

        function n(t) {
            var e = "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_");
            return e[t.month()]
        }

        function i(t) {
            var e = "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_");
            return e[t.day()]
        }
        return t.defineLocale("hy-am", {
            months: e,
            monthsShort: n,
            weekdays: i,
            weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
            weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY թ.",
                LLL: "D MMMM YYYY թ., LT",
                LLLL: "dddd, D MMMM YYYY թ., LT"
            },
            calendar: {
                sameDay: "[այսօր] LT",
                nextDay: "[վաղը] LT",
                lastDay: "[երեկ] LT",
                nextWeek: function() {
                    return "dddd [օրը ժամը] LT"
                },
                lastWeek: function() {
                    return "[անցած] dddd [օրը ժամը] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "%s հետո",
                past: "%s առաջ",
                s: "մի քանի վայրկյան",
                m: "րոպե",
                mm: "%d րոպե",
                h: "ժամ",
                hh: "%d ժամ",
                d: "օր",
                dd: "%d օր",
                M: "ամիս",
                MM: "%d ամիս",
                y: "տարի",
                yy: "%d տարի"
            },
            meridiem: function(t) {
                return 4 > t ? "գիշերվա" : 12 > t ? "առավոտվա" : 17 > t ? "ցերեկվա" : "երեկոյան"
            },
            ordinal: function(t, e) {
                switch (e) {
                    case "DDD":
                    case "w":
                    case "W":
                    case "DDDo":
                        return 1 === t ? t + "-ին" : t + "-րդ";
                    default:
                        return t
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        return t.defineLocale("id", {
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] LT",
                LLLL: "dddd, D MMMM YYYY [pukul] LT"
            },
            meridiem: function(t) {
                return 11 > t ? "pagi" : 15 > t ? "siang" : 19 > t ? "sore" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Besok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kemarin pukul] LT",
                lastWeek: "dddd [lalu pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lalu",
                s: "beberapa detik",
                m: "semenit",
                mm: "%d menit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        function e(t) {
            return t % 100 === 11 ? !0 : t % 10 === 1 ? !1 : !0
        }

        function n(t, n, i, a) {
            var r = t + " ";
            switch (i) {
                case "s":
                    return n || a ? "nokkrar sekúndur" : "nokkrum sekúndum";
                case "m":
                    return n ? "mínúta" : "mínútu";
                case "mm":
                    return e(t) ? r + (n || a ? "mínútur" : "mínútum") : n ? r + "mínúta" : r + "mínútu";
                case "hh":
                    return e(t) ? r + (n || a ? "klukkustundir" : "klukkustundum") : r + "klukkustund";
                case "d":
                    return n ? "dagur" : a ? "dag" : "degi";
                case "dd":
                    return e(t) ? n ? r + "dagar" : r + (a ? "daga" : "dögum") : n ? r + "dagur" : r + (a ? "dag" : "degi");
                case "M":
                    return n ? "mánuður" : a ? "mánuð" : "mánuði";
                case "MM":
                    return e(t) ? n ? r + "mánuðir" : r + (a ? "mánuði" : "mánuðum") : n ? r + "mánuður" : r + (a ? "mánuð" : "mánuði");
                case "y":
                    return n || a ? "ár" : "ári";
                case "yy":
                    return e(t) ? r + (n || a ? "ár" : "árum") : r + (n || a ? "ár" : "ári")
            }
        }
        return t.defineLocale("is", {
            months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
            weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
            weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
            weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
            longDateFormat: {
                LT: "H:mm",
                L: "DD/MM/YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] LT",
                LLLL: "dddd, D. MMMM YYYY [kl.] LT"
            },
            calendar: {
                sameDay: "[í dag kl.] LT",
                nextDay: "[á morgun kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[í gær kl.] LT",
                lastWeek: "[síðasta] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "eftir %s",
                past: "fyrir %s síðan",
                s: n,
                m: n,
                mm: n,
                h: "klukkustund",
                hh: n,
                d: n,
                dd: n,
                M: n,
                MM: n,
                y: n,
                yy: n
            },
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        return t.defineLocale("it", {
            months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
            monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
            weekdays: "Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato".split("_"),
            weekdaysShort: "Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),
            weekdaysMin: "D_L_Ma_Me_G_V_S".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd, D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[Oggi alle] LT",
                nextDay: "[Domani alle] LT",
                nextWeek: "dddd [alle] LT",
                lastDay: "[Ieri alle] LT",
                lastWeek: "[lo scorso] dddd [alle] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: function(t) {
                    return (/^[0-9].+$/.test(t) ? "tra" : "in") + " " + t
                },
                past: "%s fa",
                s: "alcuni secondi",
                m: "un minuto",
                mm: "%d minuti",
                h: "un'ora",
                hh: "%d ore",
                d: "un giorno",
                dd: "%d giorni",
                M: "un mese",
                MM: "%d mesi",
                y: "un anno",
                yy: "%d anni"
            },
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        return t.defineLocale("ja", {
            months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
            weekdaysShort: "日_月_火_水_木_金_土".split("_"),
            weekdaysMin: "日_月_火_水_木_金_土".split("_"),
            longDateFormat: {
                LT: "Ah時m分",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日LT",
                LLLL: "YYYY年M月D日LT dddd"
            },
            meridiem: function(t) {
                return 12 > t ? "午前" : "午後"
            },
            calendar: {
                sameDay: "[今日] LT",
                nextDay: "[明日] LT",
                nextWeek: "[来週]dddd LT",
                lastDay: "[昨日] LT",
                lastWeek: "[前週]dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s後",
                past: "%s前",
                s: "数秒",
                m: "1分",
                mm: "%d分",
                h: "1時間",
                hh: "%d時間",
                d: "1日",
                dd: "%d日",
                M: "1ヶ月",
                MM: "%dヶ月",
                y: "1年",
                yy: "%d年"
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        function e(t, e) {
            var n = {
                nominative: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
                accusative: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")
            }, i = /D[oD] *MMMM?/.test(e) ? "accusative" : "nominative";
            return n[i][t.month()]
        }

        function n(t, e) {
            var n = {
                nominative: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
                accusative: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_")
            }, i = /(წინა|შემდეგ)/.test(e) ? "accusative" : "nominative";
            return n[i][t.day()]
        }
        return t.defineLocale("ka", {
            months: e,
            monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
            weekdays: n,
            weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
            weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd, D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[დღეს] LT[-ზე]",
                nextDay: "[ხვალ] LT[-ზე]",
                lastDay: "[გუშინ] LT[-ზე]",
                nextWeek: "[შემდეგ] dddd LT[-ზე]",
                lastWeek: "[წინა] dddd LT-ზე",
                sameElse: "L"
            },
            relativeTime: {
                future: function(t) {
                    return /(წამი|წუთი|საათი|წელი)/.test(t) ? t.replace(/ი$/, "ში") : t + "ში"
                },
                past: function(t) {
                    return /(წამი|წუთი|საათი|დღე|თვე)/.test(t) ? t.replace(/(ი|ე)$/, "ის წინ") : /წელი/.test(t) ? t.replace(/წელი$/, "წლის წინ") : void 0
                },
                s: "რამდენიმე წამი",
                m: "წუთი",
                mm: "%d წუთი",
                h: "საათი",
                hh: "%d საათი",
                d: "დღე",
                dd: "%d დღე",
                M: "თვე",
                MM: "%d თვე",
                y: "წელი",
                yy: "%d წელი"
            },
            ordinal: function(t) {
                return 0 === t ? t : 1 === t ? t + "-ლი" : 20 > t || 100 >= t && t % 20 === 0 || t % 100 === 0 ? "მე-" + t : t + "-ე"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        return t.defineLocale("km", {
            months: "មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
            monthsShort: "មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
            weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
            weekdaysShort: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
            weekdaysMin: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd, D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[ថ្ងៃនៈ ម៉ោង] LT",
                nextDay: "[ស្អែក ម៉ោង] LT",
                nextWeek: "dddd [ម៉ោង] LT",
                lastDay: "[ម្សិលមិញ ម៉ោង] LT",
                lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sទៀត",
                past: "%sមុន",
                s: "ប៉ុន្មានវិនាទី",
                m: "មួយនាទី",
                mm: "%d នាទី",
                h: "មួយម៉ោង",
                hh: "%d ម៉ោង",
                d: "មួយថ្ងៃ",
                dd: "%d ថ្ងៃ",
                M: "មួយខែ",
                MM: "%d ខែ",
                y: "មួយឆ្នាំ",
                yy: "%d ឆ្នាំ"
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        return t.defineLocale("ko", {
            months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
            monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
            weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
            weekdaysShort: "일_월_화_수_목_금_토".split("_"),
            weekdaysMin: "일_월_화_수_목_금_토".split("_"),
            longDateFormat: {
                LT: "A h시 m분",
                L: "YYYY.MM.DD",
                LL: "YYYY년 MMMM D일",
                LLL: "YYYY년 MMMM D일 LT",
                LLLL: "YYYY년 MMMM D일 dddd LT"
            },
            meridiem: function(t) {
                return 12 > t ? "오전" : "오후"
            },
            calendar: {
                sameDay: "오늘 LT",
                nextDay: "내일 LT",
                nextWeek: "dddd LT",
                lastDay: "어제 LT",
                lastWeek: "지난주 dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s 후",
                past: "%s 전",
                s: "몇초",
                ss: "%d초",
                m: "일분",
                mm: "%d분",
                h: "한시간",
                hh: "%d시간",
                d: "하루",
                dd: "%d일",
                M: "한달",
                MM: "%d달",
                y: "일년",
                yy: "%d년"
            },
            ordinal: "%d일",
            meridiemParse: /(오전|오후)/,
            isPM: function(t) {
                return "오후" === t
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        function e(t, e, n) {
            var i = {
                m: ["eng Minutt", "enger Minutt"],
                h: ["eng Stonn", "enger Stonn"],
                d: ["een Dag", "engem Dag"],
                M: ["ee Mount", "engem Mount"],
                y: ["ee Joer", "engem Joer"]
            };
            return e ? i[n][0] : i[n][1]
        }

        function n(t) {
            var e = t.substr(0, t.indexOf(" "));
            return a(e) ? "a " + t : "an " + t
        }

        function i(t) {
            var e = t.substr(0, t.indexOf(" "));
            return a(e) ? "viru " + t : "virun " + t
        }

        function a(t) {
            if (t = parseInt(t, 10), isNaN(t)) return !1;
            if (0 > t) return !0;
            if (10 > t) return t >= 4 && 7 >= t ? !0 : !1;
            if (100 > t) {
                var e = t % 10,
                    n = t / 10;
                return a(0 === e ? n : e)
            }
            if (1e4 > t) {
                for (; t >= 10;) t /= 10;
                return a(t)
            }
            return t /= 1e3, a(t)
        }
        return t.defineLocale("lb", {
            months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
            weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
            weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "H:mm [Auer]",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY LT",
                LLLL: "dddd, D. MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[Haut um] LT",
                sameElse: "L",
                nextDay: "[Muer um] LT",
                nextWeek: "dddd [um] LT",
                lastDay: "[Gëschter um] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 2:
                        case 4:
                            return "[Leschten] dddd [um] LT";
                        default:
                            return "[Leschte] dddd [um] LT"
                    }
                }
            },
            relativeTime: {
                future: n,
                past: i,
                s: "e puer Sekonnen",
                m: e,
                mm: "%d Minutten",
                h: e,
                hh: "%d Stonnen",
                d: e,
                dd: "%d Deeg",
                M: e,
                MM: "%d Méint",
                y: e,
                yy: "%d Joer"
            },
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        function e(t, e, n, i) {
            return e ? "kelios sekundės" : i ? "kelių sekundžių" : "kelias sekundes"
        }

        function n(t, e, n, i) {
            return e ? a(n)[0] : i ? a(n)[1] : a(n)[2]
        }

        function i(t) {
            return t % 10 === 0 || t > 10 && 20 > t
        }

        function a(t) {
            return o[t].split("_")
        }

        function r(t, e, r, s) {
            var o = t + " ";
            return 1 === t ? o + n(t, e, r[0], s) : e ? o + (i(t) ? a(r)[1] : a(r)[0]) : s ? o + a(r)[1] : o + (i(t) ? a(r)[1] : a(r)[2])
        }

        function s(t, e) {
            var n = -1 === e.indexOf("dddd HH:mm"),
                i = l[t.day()];
            return n ? i : i.substring(0, i.length - 2) + "į"
        }
        var o = {
            m: "minutė_minutės_minutę",
            mm: "minutės_minučių_minutes",
            h: "valanda_valandos_valandą",
            hh: "valandos_valandų_valandas",
            d: "diena_dienos_dieną",
            dd: "dienos_dienų_dienas",
            M: "mėnuo_mėnesio_mėnesį",
            MM: "mėnesiai_mėnesių_mėnesius",
            y: "metai_metų_metus",
            yy: "metai_metų_metus"
        }, l = "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_");
        return t.defineLocale("lt", {
            months: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
            monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
            weekdays: s,
            weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
            weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "YYYY-MM-DD",
                LL: "YYYY [m.] MMMM D [d.]",
                LLL: "YYYY [m.] MMMM D [d.], LT [val.]",
                LLLL: "YYYY [m.] MMMM D [d.], dddd, LT [val.]",
                l: "YYYY-MM-DD",
                ll: "YYYY [m.] MMMM D [d.]",
                lll: "YYYY [m.] MMMM D [d.], LT [val.]",
                llll: "YYYY [m.] MMMM D [d.], ddd, LT [val.]"
            },
            calendar: {
                sameDay: "[Šiandien] LT",
                nextDay: "[Rytoj] LT",
                nextWeek: "dddd LT",
                lastDay: "[Vakar] LT",
                lastWeek: "[Praėjusį] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "po %s",
                past: "prieš %s",
                s: e,
                m: n,
                mm: r,
                h: n,
                hh: r,
                d: n,
                dd: r,
                M: n,
                MM: r,
                y: n,
                yy: r
            },
            ordinal: function(t) {
                return t + "-oji"
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        function e(t, e, n) {
            var i = t.split("_");
            return n ? e % 10 === 1 && 11 !== e ? i[2] : i[3] : e % 10 === 1 && 11 !== e ? i[0] : i[1]
        }

        function n(t, n, a) {
            return t + " " + e(i[a], t, n)
        }
        var i = {
            mm: "minūti_minūtes_minūte_minūtes",
            hh: "stundu_stundas_stunda_stundas",
            dd: "dienu_dienas_diena_dienas",
            MM: "mēnesi_mēnešus_mēnesis_mēneši",
            yy: "gadu_gadus_gads_gadi"
        };
        return t.defineLocale("lv", {
            months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
            weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
            weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
            weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD.MM.YYYY",
                LL: "YYYY. [gada] D. MMMM",
                LLL: "YYYY. [gada] D. MMMM, LT",
                LLLL: "YYYY. [gada] D. MMMM, dddd, LT"
            },
            calendar: {
                sameDay: "[Šodien pulksten] LT",
                nextDay: "[Rīt pulksten] LT",
                nextWeek: "dddd [pulksten] LT",
                lastDay: "[Vakar pulksten] LT",
                lastWeek: "[Pagājušā] dddd [pulksten] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s vēlāk",
                past: "%s agrāk",
                s: "dažas sekundes",
                m: "minūti",
                mm: n,
                h: "stundu",
                hh: n,
                d: "dienu",
                dd: n,
                M: "mēnesi",
                MM: n,
                y: "gadu",
                yy: n
            },
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        return t.defineLocale("mk", {
            months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
            monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
            weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
            weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
            weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
            longDateFormat: {
                LT: "H:mm",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd, D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[Денес во] LT",
                nextDay: "[Утре во] LT",
                nextWeek: "dddd [во] LT",
                lastDay: "[Вчера во] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[Во изминатата] dddd [во] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[Во изминатиот] dddd [во] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "после %s",
                past: "пред %s",
                s: "неколку секунди",
                m: "минута",
                mm: "%d минути",
                h: "час",
                hh: "%d часа",
                d: "ден",
                dd: "%d дена",
                M: "месец",
                MM: "%d месеци",
                y: "година",
                yy: "%d години"
            },
            ordinal: function(t) {
                var e = t % 10,
                    n = t % 100;
                return 0 === t ? t + "-ев" : 0 === n ? t + "-ен" : n > 10 && 20 > n ? t + "-ти" : 1 === e ? t + "-ви" : 2 === e ? t + "-ри" : 7 === e || 8 === e ? t + "-ми" : t + "-ти"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        return t.defineLocale("ml", {
            months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
            monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
            weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
            weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
            weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
            longDateFormat: {
                LT: "A h:mm -നു",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, LT",
                LLLL: "dddd, D MMMM YYYY, LT"
            },
            calendar: {
                sameDay: "[ഇന്ന്] LT",
                nextDay: "[നാളെ] LT",
                nextWeek: "dddd, LT",
                lastDay: "[ഇന്നലെ] LT",
                lastWeek: "[കഴിഞ്ഞ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s കഴിഞ്ഞ്",
                past: "%s മുൻപ്",
                s: "അൽപ നിമിഷങ്ങൾ",
                m: "ഒരു മിനിറ്റ്",
                mm: "%d മിനിറ്റ്",
                h: "ഒരു മണിക്കൂർ",
                hh: "%d മണിക്കൂർ",
                d: "ഒരു ദിവസം",
                dd: "%d ദിവസം",
                M: "ഒരു മാസം",
                MM: "%d മാസം",
                y: "ഒരു വർഷം",
                yy: "%d വർഷം"
            },
            meridiem: function(t) {
                return 4 > t ? "രാത്രി" : 12 > t ? "രാവിലെ" : 17 > t ? "ഉച്ച കഴിഞ്ഞ്" : 20 > t ? "വൈകുന്നേരം" : "രാത്രി"
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        var e = {
            1: "१",
            2: "२",
            3: "३",
            4: "४",
            5: "५",
            6: "६",
            7: "७",
            8: "८",
            9: "९",
            0: "०"
        }, n = {
                "१": "1",
                "२": "2",
                "३": "3",
                "४": "4",
                "५": "5",
                "६": "6",
                "७": "7",
                "८": "8",
                "९": "9",
                "०": "0"
            };
        return t.defineLocale("mr", {
            months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
            monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
            weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
            weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
            weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
            longDateFormat: {
                LT: "A h:mm वाजता",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, LT",
                LLLL: "dddd, D MMMM YYYY, LT"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[उद्या] LT",
                nextWeek: "dddd, LT",
                lastDay: "[काल] LT",
                lastWeek: "[मागील] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s नंतर",
                past: "%s पूर्वी",
                s: "सेकंद",
                m: "एक मिनिट",
                mm: "%d मिनिटे",
                h: "एक तास",
                hh: "%d तास",
                d: "एक दिवस",
                dd: "%d दिवस",
                M: "एक महिना",
                MM: "%d महिने",
                y: "एक वर्ष",
                yy: "%d वर्षे"
            },
            preparse: function(t) {
                return t.replace(/[१२३४५६७८९०]/g, function(t) {
                    return n[t]
                })
            },
            postformat: function(t) {
                return t.replace(/\d/g, function(t) {
                    return e[t]
                })
            },
            meridiem: function(t) {
                return 4 > t ? "रात्री" : 10 > t ? "सकाळी" : 17 > t ? "दुपारी" : 20 > t ? "सायंकाळी" : "रात्री"
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        return t.defineLocale("ms-my", {
            months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] LT",
                LLLL: "dddd, D MMMM YYYY [pukul] LT"
            },
            meridiem: function(t) {
                return 11 > t ? "pagi" : 15 > t ? "tengahari" : 19 > t ? "petang" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Esok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kelmarin pukul] LT",
                lastWeek: "dddd [lepas pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lepas",
                s: "beberapa saat",
                m: "seminit",
                mm: "%d minit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        var e = {
            1: "၁",
            2: "၂",
            3: "၃",
            4: "၄",
            5: "၅",
            6: "၆",
            7: "၇",
            8: "၈",
            9: "၉",
            0: "၀"
        }, n = {
                "၁": "1",
                "၂": "2",
                "၃": "3",
                "၄": "4",
                "၅": "5",
                "၆": "6",
                "၇": "7",
                "၈": "8",
                "၉": "9",
                "၀": "0"
            };
        return t.defineLocale("my", {
            months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
            monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
            weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
            weekdaysShort: "နွေ_လာ_င်္ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
            weekdaysMin: "နွေ_လာ_င်္ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[ယနေ.] LT [မှာ]",
                nextDay: "[မနက်ဖြန်] LT [မှာ]",
                nextWeek: "dddd LT [မှာ]",
                lastDay: "[မနေ.က] LT [မှာ]",
                lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
                sameElse: "L"
            },
            relativeTime: {
                future: "လာမည့် %s မှာ",
                past: "လွန်ခဲ့သော %s က",
                s: "စက္ကန်.အနည်းငယ်",
                m: "တစ်မိနစ်",
                mm: "%d မိနစ်",
                h: "တစ်နာရီ",
                hh: "%d နာရီ",
                d: "တစ်ရက်",
                dd: "%d ရက်",
                M: "တစ်လ",
                MM: "%d လ",
                y: "တစ်နှစ်",
                yy: "%d နှစ်"
            },
            preparse: function(t) {
                return t.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function(t) {
                    return n[t]
                })
            },
            postformat: function(t) {
                return t.replace(/\d/g, function(t) {
                    return e[t]
                })
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        return t.defineLocale("nb", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
            weekdaysShort: "søn_man_tirs_ons_tors_fre_lør".split("_"),
            weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
            longDateFormat: {
                LT: "H.mm",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] LT",
                LLLL: "dddd D. MMMM YYYY [kl.] LT"
            },
            calendar: {
                sameDay: "[i dag kl.] LT",
                nextDay: "[i morgen kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[i går kl.] LT",
                lastWeek: "[forrige] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "for %s siden",
                s: "noen sekunder",
                m: "ett minutt",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dager",
                M: "en måned",
                MM: "%d måneder",
                y: "ett år",
                yy: "%d år"
            },
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        var e = {
            1: "१",
            2: "२",
            3: "३",
            4: "४",
            5: "५",
            6: "६",
            7: "७",
            8: "८",
            9: "९",
            0: "०"
        }, n = {
                "१": "1",
                "२": "2",
                "३": "3",
                "४": "4",
                "५": "5",
                "६": "6",
                "७": "7",
                "८": "8",
                "९": "9",
                "०": "0"
            };
        return t.defineLocale("ne", {
            months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
            monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
            weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
            weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
            weekdaysMin: "आइ._सो._मङ्_बु._बि._शु._श.".split("_"),
            longDateFormat: {
                LT: "Aको h:mm बजे",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, LT",
                LLLL: "dddd, D MMMM YYYY, LT"
            },
            preparse: function(t) {
                return t.replace(/[१२३४५६७८९०]/g, function(t) {
                    return n[t]
                })
            },
            postformat: function(t) {
                return t.replace(/\d/g, function(t) {
                    return e[t]
                })
            },
            meridiem: function(t) {
                return 3 > t ? "राती" : 10 > t ? "बिहान" : 15 > t ? "दिउँसो" : 18 > t ? "बेलुका" : 20 > t ? "साँझ" : "राती"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[भोली] LT",
                nextWeek: "[आउँदो] dddd[,] LT",
                lastDay: "[हिजो] LT",
                lastWeek: "[गएको] dddd[,] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sमा",
                past: "%s अगाडी",
                s: "केही समय",
                m: "एक मिनेट",
                mm: "%d मिनेट",
                h: "एक घण्टा",
                hh: "%d घण्टा",
                d: "एक दिन",
                dd: "%d दिन",
                M: "एक महिना",
                MM: "%d महिना",
                y: "एक बर्ष",
                yy: "%d बर्ष"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        var e = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
            n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_");
        return t.defineLocale("nl", {
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: function(t, i) {
                return /-MMM-/.test(i) ? n[t.month()] : e[t.month()]
            },
            weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[vandaag om] LT",
                nextDay: "[morgen om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[gisteren om] LT",
                lastWeek: "[afgelopen] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "over %s",
                past: "%s geleden",
                s: "een paar seconden",
                m: "één minuut",
                mm: "%d minuten",
                h: "één uur",
                hh: "%d uur",
                d: "één dag",
                dd: "%d dagen",
                M: "één maand",
                MM: "%d maanden",
                y: "één jaar",
                yy: "%d jaar"
            },
            ordinal: function(t) {
                return t + (1 === t || 8 === t || t >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        return t.defineLocale("nn", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
            weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"),
            weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[I dag klokka] LT",
                nextDay: "[I morgon klokka] LT",
                nextWeek: "dddd [klokka] LT",
                lastDay: "[I går klokka] LT",
                lastWeek: "[Føregåande] dddd [klokka] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "for %s sidan",
                s: "nokre sekund",
                m: "eit minutt",
                mm: "%d minutt",
                h: "ein time",
                hh: "%d timar",
                d: "ein dag",
                dd: "%d dagar",
                M: "ein månad",
                MM: "%d månader",
                y: "eit år",
                yy: "%d år"
            },
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        function e(t) {
            return 5 > t % 10 && t % 10 > 1 && ~~(t / 10) % 10 !== 1
        }

        function n(t, n, i) {
            var a = t + " ";
            switch (i) {
                case "m":
                    return n ? "minuta" : "minutę";
                case "mm":
                    return a + (e(t) ? "minuty" : "minut");
                case "h":
                    return n ? "godzina" : "godzinę";
                case "hh":
                    return a + (e(t) ? "godziny" : "godzin");
                case "MM":
                    return a + (e(t) ? "miesiące" : "miesięcy");
                case "yy":
                    return a + (e(t) ? "lata" : "lat")
            }
        }
        var i = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
            a = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");
        return t.defineLocale("pl", {
            months: function(t, e) {
                return /D MMMM/.test(e) ? a[t.month()] : i[t.month()]
            },
            monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
            weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
            weekdaysShort: "nie_pon_wt_śr_czw_pt_sb".split("_"),
            weekdaysMin: "N_Pn_Wt_Śr_Cz_Pt_So".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd, D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[Dziś o] LT",
                nextDay: "[Jutro o] LT",
                nextWeek: "[W] dddd [o] LT",
                lastDay: "[Wczoraj o] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[W zeszłą niedzielę o] LT";
                        case 3:
                            return "[W zeszłą środę o] LT";
                        case 6:
                            return "[W zeszłą sobotę o] LT";
                        default:
                            return "[W zeszły] dddd [o] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "%s temu",
                s: "kilka sekund",
                m: n,
                mm: n,
                h: n,
                hh: n,
                d: "1 dzień",
                dd: "%d dni",
                M: "miesiąc",
                MM: n,
                y: "rok",
                yy: n
            },
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        return t.defineLocale("pt-br", {
            months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
            monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
            weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"),
            weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"),
            weekdaysMin: "dom_2ª_3ª_4ª_5ª_6ª_sáb".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY [às] LT",
                LLLL: "dddd, D [de] MMMM [de] YYYY [às] LT"
            },
            calendar: {
                sameDay: "[Hoje às] LT",
                nextDay: "[Amanhã às] LT",
                nextWeek: "dddd [às] LT",
                lastDay: "[Ontem às] LT",
                lastWeek: function() {
                    return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "%s atrás",
                s: "segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um mês",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            ordinal: "%dº"
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        return t.defineLocale("pt", {
            months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
            monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
            weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"),
            weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"),
            weekdaysMin: "dom_2ª_3ª_4ª_5ª_6ª_sáb".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY LT",
                LLLL: "dddd, D [de] MMMM [de] YYYY LT"
            },
            calendar: {
                sameDay: "[Hoje às] LT",
                nextDay: "[Amanhã às] LT",
                nextWeek: "dddd [às] LT",
                lastDay: "[Ontem às] LT",
                lastWeek: function() {
                    return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "há %s",
                s: "segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um mês",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        function e(t, e, n) {
            var i = {
                mm: "minute",
                hh: "ore",
                dd: "zile",
                MM: "luni",
                yy: "ani"
            }, a = " ";
            return (t % 100 >= 20 || t >= 100 && t % 100 === 0) && (a = " de "), t + a + i[n]
        }
        return t.defineLocale("ro", {
            months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
            monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
            weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
            weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
            weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
            longDateFormat: {
                LT: "H:mm",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[azi la] LT",
                nextDay: "[mâine la] LT",
                nextWeek: "dddd [la] LT",
                lastDay: "[ieri la] LT",
                lastWeek: "[fosta] dddd [la] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "peste %s",
                past: "%s în urmă",
                s: "câteva secunde",
                m: "un minut",
                mm: e,
                h: "o oră",
                hh: e,
                d: "o zi",
                dd: e,
                M: "o lună",
                MM: e,
                y: "un an",
                yy: e
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        function e(t, e) {
            var n = t.split("_");
            return e % 10 === 1 && e % 100 !== 11 ? n[0] : e % 10 >= 2 && 4 >= e % 10 && (10 > e % 100 || e % 100 >= 20) ? n[1] : n[2]
        }

        function n(t, n, i) {
            var a = {
                mm: n ? "минута_минуты_минут" : "минуту_минуты_минут",
                hh: "час_часа_часов",
                dd: "день_дня_дней",
                MM: "месяц_месяца_месяцев",
                yy: "год_года_лет"
            };
            return "m" === i ? n ? "минута" : "минуту" : t + " " + e(a[i], +t)
        }

        function i(t, e) {
            var n = {
                nominative: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
                accusative: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_")
            }, i = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(e) ? "accusative" : "nominative";
            return n[i][t.month()]
        }

        function a(t, e) {
            var n = {
                nominative: "янв_фев_мар_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
                accusative: "янв_фев_мар_апр_мая_июня_июля_авг_сен_окт_ноя_дек".split("_")
            }, i = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(e) ? "accusative" : "nominative";
            return n[i][t.month()]
        }

        function r(t, e) {
            var n = {
                nominative: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
                accusative: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_")
            }, i = /\[ ?[Вв] ?(?:прошлую|следующую)? ?\] ?dddd/.test(e) ? "accusative" : "nominative";
            return n[i][t.day()]
        }
        return t.defineLocale("ru", {
            months: i,
            monthsShort: a,
            weekdays: r,
            weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
            weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
            monthsParse: [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[й|я]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i],
            longDateFormat: {
                LT: "HH:mm",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY г.",
                LLL: "D MMMM YYYY г., LT",
                LLLL: "dddd, D MMMM YYYY г., LT"
            },
            calendar: {
                sameDay: "[Сегодня в] LT",
                nextDay: "[Завтра в] LT",
                lastDay: "[Вчера в] LT",
                nextWeek: function() {
                    return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT"
                },
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[В прошлое] dddd [в] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[В прошлый] dddd [в] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[В прошлую] dddd [в] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "через %s",
                past: "%s назад",
                s: "несколько секунд",
                m: n,
                mm: n,
                h: "час",
                hh: n,
                d: "день",
                dd: n,
                M: "месяц",
                MM: n,
                y: "год",
                yy: n
            },
            meridiemParse: /ночи|утра|дня|вечера/i,
            isPM: function(t) {
                return /^(дня|вечера)$/.test(t)
            },
            meridiem: function(t) {
                return 4 > t ? "ночи" : 12 > t ? "утра" : 17 > t ? "дня" : "вечера"
            },
            ordinal: function(t, e) {
                switch (e) {
                    case "M":
                    case "d":
                    case "DDD":
                        return t + "-й";
                    case "D":
                        return t + "-го";
                    case "w":
                    case "W":
                        return t + "-я";
                    default:
                        return t
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        function e(t) {
            return t > 1 && 5 > t
        }

        function n(t, n, i, a) {
            var r = t + " ";
            switch (i) {
                case "s":
                    return n || a ? "pár sekúnd" : "pár sekundami";
                case "m":
                    return n ? "minúta" : a ? "minútu" : "minútou";
                case "mm":
                    return n || a ? r + (e(t) ? "minúty" : "minút") : r + "minútami";
                case "h":
                    return n ? "hodina" : a ? "hodinu" : "hodinou";
                case "hh":
                    return n || a ? r + (e(t) ? "hodiny" : "hodín") : r + "hodinami";
                case "d":
                    return n || a ? "deň" : "dňom";
                case "dd":
                    return n || a ? r + (e(t) ? "dni" : "dní") : r + "dňami";
                case "M":
                    return n || a ? "mesiac" : "mesiacom";
                case "MM":
                    return n || a ? r + (e(t) ? "mesiace" : "mesiacov") : r + "mesiacmi";
                case "y":
                    return n || a ? "rok" : "rokom";
                case "yy":
                    return n || a ? r + (e(t) ? "roky" : "rokov") : r + "rokmi"
            }
        }
        var i = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
            a = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");
        return t.defineLocale("sk", {
            months: i,
            monthsShort: a,
            monthsParse: function(t, e) {
                var n, i = [];
                for (n = 0; 12 > n; n++) i[n] = new RegExp("^" + t[n] + "$|^" + e[n] + "$", "i");
                return i
            }(i, a),
            weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
            weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
            weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY LT",
                LLLL: "dddd D. MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[dnes o] LT",
                nextDay: "[zajtra o] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[v nedeľu o] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [o] LT";
                        case 3:
                            return "[v stredu o] LT";
                        case 4:
                            return "[vo štvrtok o] LT";
                        case 5:
                            return "[v piatok o] LT";
                        case 6:
                            return "[v sobotu o] LT"
                    }
                },
                lastDay: "[včera o] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[minulú nedeľu o] LT";
                        case 1:
                        case 2:
                            return "[minulý] dddd [o] LT";
                        case 3:
                            return "[minulú stredu o] LT";
                        case 4:
                        case 5:
                            return "[minulý] dddd [o] LT";
                        case 6:
                            return "[minulú sobotu o] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pred %s",
                s: n,
                m: n,
                mm: n,
                h: n,
                hh: n,
                d: n,
                dd: n,
                M: n,
                MM: n,
                y: n,
                yy: n
            },
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        function e(t, e, n) {
            var i = t + " ";
            switch (n) {
                case "m":
                    return e ? "ena minuta" : "eno minuto";
                case "mm":
                    return i += 1 === t ? "minuta" : 2 === t ? "minuti" : 3 === t || 4 === t ? "minute" : "minut";
                case "h":
                    return e ? "ena ura" : "eno uro";
                case "hh":
                    return i += 1 === t ? "ura" : 2 === t ? "uri" : 3 === t || 4 === t ? "ure" : "ur";
                case "dd":
                    return i += 1 === t ? "dan" : "dni";
                case "MM":
                    return i += 1 === t ? "mesec" : 2 === t ? "meseca" : 3 === t || 4 === t ? "mesece" : "mesecev";
                case "yy":
                    return i += 1 === t ? "leto" : 2 === t ? "leti" : 3 === t || 4 === t ? "leta" : "let"
            }
        }
        return t.defineLocale("sl", {
            months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
            weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
            weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
            weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                L: "DD. MM. YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY LT",
                LLLL: "dddd, D. MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[danes ob] LT",
                nextDay: "[jutri ob] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[v] [nedeljo] [ob] LT";
                        case 3:
                            return "[v] [sredo] [ob] LT";
                        case 6:
                            return "[v] [soboto] [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[v] dddd [ob] LT"
                    }
                },
                lastDay: "[včeraj ob] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[prejšnja] dddd [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prejšnji] dddd [ob] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "čez %s",
                past: "%s nazaj",
                s: "nekaj sekund",
                m: e,
                mm: e,
                h: e,
                hh: e,
                d: "en dan",
                dd: e,
                M: "en mesec",
                MM: e,
                y: "eno leto",
                yy: e
            },
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        return t.defineLocale("sq", {
            months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
            monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
            weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
            weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
            weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
            meridiem: function(t) {
                return 12 > t ? "PD" : "MD"
            },
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd, D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[Sot në] LT",
                nextDay: "[Nesër në] LT",
                nextWeek: "dddd [në] LT",
                lastDay: "[Dje në] LT",
                lastWeek: "dddd [e kaluar në] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "në %s",
                past: "%s më parë",
                s: "disa sekonda",
                m: "një minutë",
                mm: "%d minuta",
                h: "një orë",
                hh: "%d orë",
                d: "një ditë",
                dd: "%d ditë",
                M: "një muaj",
                MM: "%d muaj",
                y: "një vit",
                yy: "%d vite"
            },
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        var e = {
            words: {
                m: ["један минут", "једне минуте"],
                mm: ["минут", "минуте", "минута"],
                h: ["један сат", "једног сата"],
                hh: ["сат", "сата", "сати"],
                dd: ["дан", "дана", "дана"],
                MM: ["месец", "месеца", "месеци"],
                yy: ["година", "године", "година"]
            },
            correctGrammaticalCase: function(t, e) {
                return 1 === t ? e[0] : t >= 2 && 4 >= t ? e[1] : e[2]
            },
            translate: function(t, n, i) {
                var a = e.words[i];
                return 1 === i.length ? n ? a[0] : a[1] : t + " " + e.correctGrammaticalCase(t, a)
            }
        };
        return t.defineLocale("sr-cyrl", {
            months: ["јануар", "фебруар", "март", "април", "мај", "јун", "јул", "август", "септембар", "октобар", "новембар", "децембар"],
            monthsShort: ["јан.", "феб.", "мар.", "апр.", "мај", "јун", "јул", "авг.", "сеп.", "окт.", "нов.", "дец."],
            weekdays: ["недеља", "понедељак", "уторак", "среда", "четвртак", "петак", "субота"],
            weekdaysShort: ["нед.", "пон.", "уто.", "сре.", "чет.", "пет.", "суб."],
            weekdaysMin: ["не", "по", "ут", "ср", "че", "пе", "су"],
            longDateFormat: {
                LT: "H:mm",
                L: "DD. MM. YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY LT",
                LLLL: "dddd, D. MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[данас у] LT",
                nextDay: "[сутра у] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[у] [недељу] [у] LT";
                        case 3:
                            return "[у] [среду] [у] LT";
                        case 6:
                            return "[у] [суботу] [у] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[у] dddd [у] LT"
                    }
                },
                lastDay: "[јуче у] LT",
                lastWeek: function() {
                    var t = ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"];
                    return t[this.day()]
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "за %s",
                past: "пре %s",
                s: "неколико секунди",
                m: e.translate,
                mm: e.translate,
                h: e.translate,
                hh: e.translate,
                d: "дан",
                dd: e.translate,
                M: "месец",
                MM: e.translate,
                y: "годину",
                yy: e.translate
            },
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        var e = {
            words: {
                m: ["jedan minut", "jedne minute"],
                mm: ["minut", "minute", "minuta"],
                h: ["jedan sat", "jednog sata"],
                hh: ["sat", "sata", "sati"],
                dd: ["dan", "dana", "dana"],
                MM: ["mesec", "meseca", "meseci"],
                yy: ["godina", "godine", "godina"]
            },
            correctGrammaticalCase: function(t, e) {
                return 1 === t ? e[0] : t >= 2 && 4 >= t ? e[1] : e[2]
            },
            translate: function(t, n, i) {
                var a = e.words[i];
                return 1 === i.length ? n ? a[0] : a[1] : t + " " + e.correctGrammaticalCase(t, a)
            }
        };
        return t.defineLocale("sr", {
            months: ["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"],
            monthsShort: ["jan.", "feb.", "mar.", "apr.", "maj", "jun", "jul", "avg.", "sep.", "okt.", "nov.", "dec."],
            weekdays: ["nedelja", "ponedeljak", "utorak", "sreda", "četvrtak", "petak", "subota"],
            weekdaysShort: ["ned.", "pon.", "uto.", "sre.", "čet.", "pet.", "sub."],
            weekdaysMin: ["ne", "po", "ut", "sr", "če", "pe", "su"],
            longDateFormat: {
                LT: "H:mm",
                L: "DD. MM. YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY LT",
                LLLL: "dddd, D. MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedelju] [u] LT";
                        case 3:
                            return "[u] [sredu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[juče u] LT",
                lastWeek: function() {
                    var t = ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"];
                    return t[this.day()]
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pre %s",
                s: "nekoliko sekundi",
                m: e.translate,
                mm: e.translate,
                h: e.translate,
                hh: e.translate,
                d: "dan",
                dd: e.translate,
                M: "mesec",
                MM: e.translate,
                y: "godinu",
                yy: e.translate
            },
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        return t.defineLocale("sv", {
            months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
            weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
            weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[Idag] LT",
                nextDay: "[Imorgon] LT",
                lastDay: "[Igår] LT",
                nextWeek: "dddd LT",
                lastWeek: "[Förra] dddd[en] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "för %s sedan",
                s: "några sekunder",
                m: "en minut",
                mm: "%d minuter",
                h: "en timme",
                hh: "%d timmar",
                d: "en dag",
                dd: "%d dagar",
                M: "en månad",
                MM: "%d månader",
                y: "ett år",
                yy: "%d år"
            },
            ordinal: function(t) {
                var e = t % 10,
                    n = 1 === ~~(t % 100 / 10) ? "e" : 1 === e ? "a" : 2 === e ? "a" : 3 === e ? "e" : "e";
                return t + n
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        return t.defineLocale("ta", {
            months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
            monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
            weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
            weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
            weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, LT",
                LLLL: "dddd, D MMMM YYYY, LT"
            },
            calendar: {
                sameDay: "[இன்று] LT",
                nextDay: "[நாளை] LT",
                nextWeek: "dddd, LT",
                lastDay: "[நேற்று] LT",
                lastWeek: "[கடந்த வாரம்] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s இல்",
                past: "%s முன்",
                s: "ஒரு சில விநாடிகள்",
                m: "ஒரு நிமிடம்",
                mm: "%d நிமிடங்கள்",
                h: "ஒரு மணி நேரம்",
                hh: "%d மணி நேரம்",
                d: "ஒரு நாள்",
                dd: "%d நாட்கள்",
                M: "ஒரு மாதம்",
                MM: "%d மாதங்கள்",
                y: "ஒரு வருடம்",
                yy: "%d ஆண்டுகள்"
            },
            ordinal: function(t) {
                return t + "வது"
            },
            meridiem: function(t) {
                return t >= 6 && 10 >= t ? " காலை" : t >= 10 && 14 >= t ? " நண்பகல்" : t >= 14 && 18 >= t ? " எற்பாடு" : t >= 18 && 20 >= t ? " மாலை" : t >= 20 && 24 >= t ? " இரவு" : t >= 0 && 6 >= t ? " வைகறை" : void 0
            },
            week: {
                dow: 0,
                doy: 6
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        return t.defineLocale("th", {
            months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
            monthsShort: "มกรา_กุมภา_มีนา_เมษา_พฤษภา_มิถุนา_กรกฎา_สิงหา_กันยา_ตุลา_พฤศจิกา_ธันวา".split("_"),
            weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
            weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
            weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
            longDateFormat: {
                LT: "H นาฬิกา m นาที",
                L: "YYYY/MM/DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY เวลา LT",
                LLLL: "วันddddที่ D MMMM YYYY เวลา LT"
            },
            meridiem: function(t) {
                return 12 > t ? "ก่อนเที่ยง" : "หลังเที่ยง"
            },
            calendar: {
                sameDay: "[วันนี้ เวลา] LT",
                nextDay: "[พรุ่งนี้ เวลา] LT",
                nextWeek: "dddd[หน้า เวลา] LT",
                lastDay: "[เมื่อวานนี้ เวลา] LT",
                lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "อีก %s",
                past: "%sที่แล้ว",
                s: "ไม่กี่วินาที",
                m: "1 นาที",
                mm: "%d นาที",
                h: "1 ชั่วโมง",
                hh: "%d ชั่วโมง",
                d: "1 วัน",
                dd: "%d วัน",
                M: "1 เดือน",
                MM: "%d เดือน",
                y: "1 ปี",
                yy: "%d ปี"
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        return t.defineLocale("tl-ph", {
            months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
            monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
            weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
            weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
            weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "MM/D/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY LT",
                LLLL: "dddd, MMMM DD, YYYY LT"
            },
            calendar: {
                sameDay: "[Ngayon sa] LT",
                nextDay: "[Bukas sa] LT",
                nextWeek: "dddd [sa] LT",
                lastDay: "[Kahapon sa] LT",
                lastWeek: "dddd [huling linggo] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "sa loob ng %s",
                past: "%s ang nakalipas",
                s: "ilang segundo",
                m: "isang minuto",
                mm: "%d minuto",
                h: "isang oras",
                hh: "%d oras",
                d: "isang araw",
                dd: "%d araw",
                M: "isang buwan",
                MM: "%d buwan",
                y: "isang taon",
                yy: "%d taon"
            },
            ordinal: function(t) {
                return t
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        var e = {
            1: "'inci",
            5: "'inci",
            8: "'inci",
            70: "'inci",
            80: "'inci",
            2: "'nci",
            7: "'nci",
            20: "'nci",
            50: "'nci",
            3: "'üncü",
            4: "'üncü",
            100: "'üncü",
            6: "'ncı",
            9: "'uncu",
            10: "'uncu",
            30: "'uncu",
            60: "'ıncı",
            90: "'ıncı"
        };
        return t.defineLocale("tr", {
            months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
            monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
            weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
            weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
            weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd, D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[bugün saat] LT",
                nextDay: "[yarın saat] LT",
                nextWeek: "[haftaya] dddd [saat] LT",
                lastDay: "[dün] LT",
                lastWeek: "[geçen hafta] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s önce",
                s: "birkaç saniye",
                m: "bir dakika",
                mm: "%d dakika",
                h: "bir saat",
                hh: "%d saat",
                d: "bir gün",
                dd: "%d gün",
                M: "bir ay",
                MM: "%d ay",
                y: "bir yıl",
                yy: "%d yıl"
            },
            ordinal: function(t) {
                if (0 === t) return t + "'ıncı";
                var n = t % 10,
                    i = t % 100 - n,
                    a = t >= 100 ? 100 : null;
                return t + (e[n] || e[i] || e[a])
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        return t.defineLocale("tzm-latn", {
            months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
            monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
            weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[asdkh g] LT",
                nextDay: "[aska g] LT",
                nextWeek: "dddd [g] LT",
                lastDay: "[assant g] LT",
                lastWeek: "dddd [g] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dadkh s yan %s",
                past: "yan %s",
                s: "imik",
                m: "minuḍ",
                mm: "%d minuḍ",
                h: "saɛa",
                hh: "%d tassaɛin",
                d: "ass",
                dd: "%d ossan",
                M: "ayowr",
                MM: "%d iyyirn",
                y: "asgas",
                yy: "%d isgasn"
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        return t.defineLocale("tzm", {
            months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
            monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
            weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
                nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
                nextWeek: "dddd [ⴴ] LT",
                lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
                lastWeek: "dddd [ⴴ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
                past: "ⵢⴰⵏ %s",
                s: "ⵉⵎⵉⴽ",
                m: "ⵎⵉⵏⵓⴺ",
                mm: "%d ⵎⵉⵏⵓⴺ",
                h: "ⵙⴰⵄⴰ",
                hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
                d: "ⴰⵙⵙ",
                dd: "%d oⵙⵙⴰⵏ",
                M: "ⴰⵢoⵓⵔ",
                MM: "%d ⵉⵢⵢⵉⵔⵏ",
                y: "ⴰⵙⴳⴰⵙ",
                yy: "%d ⵉⵙⴳⴰⵙⵏ"
            },
            week: {
                dow: 6,
                doy: 12
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        function e(t, e) {
            var n = t.split("_");
            return e % 10 === 1 && e % 100 !== 11 ? n[0] : e % 10 >= 2 && 4 >= e % 10 && (10 > e % 100 || e % 100 >= 20) ? n[1] : n[2]
        }

        function n(t, n, i) {
            var a = {
                mm: "хвилина_хвилини_хвилин",
                hh: "година_години_годин",
                dd: "день_дні_днів",
                MM: "місяць_місяці_місяців",
                yy: "рік_роки_років"
            };
            return "m" === i ? n ? "хвилина" : "хвилину" : "h" === i ? n ? "година" : "годину" : t + " " + e(a[i], +t)
        }

        function i(t, e) {
            var n = {
                nominative: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_"),
                accusative: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_")
            }, i = /D[oD]? *MMMM?/.test(e) ? "accusative" : "nominative";
            return n[i][t.month()]
        }

        function a(t, e) {
            var n = {
                nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
                accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
                genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
            }, i = /(\[[ВвУу]\]) ?dddd/.test(e) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(e) ? "genitive" : "nominative";
            return n[i][t.day()]
        }

        function r(t) {
            return function() {
                return t + "о" + (11 === this.hours() ? "б" : "") + "] LT"
            }
        }
        return t.defineLocale("uk", {
            months: i,
            monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
            weekdays: a,
            weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY р.",
                LLL: "D MMMM YYYY р., LT",
                LLLL: "dddd, D MMMM YYYY р., LT"
            },
            calendar: {
                sameDay: r("[Сьогодні "),
                nextDay: r("[Завтра "),
                lastDay: r("[Вчора "),
                nextWeek: r("[У] dddd ["),
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return r("[Минулої] dddd [").call(this);
                        case 1:
                        case 2:
                        case 4:
                            return r("[Минулого] dddd [").call(this)
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "за %s",
                past: "%s тому",
                s: "декілька секунд",
                m: n,
                mm: n,
                h: "годину",
                hh: n,
                d: "день",
                dd: n,
                M: "місяць",
                MM: n,
                y: "рік",
                yy: n
            },
            meridiem: function(t) {
                return 4 > t ? "ночі" : 12 > t ? "ранку" : 17 > t ? "дня" : "вечора"
            },
            ordinal: function(t, e) {
                switch (e) {
                    case "M":
                    case "d":
                    case "DDD":
                    case "w":
                    case "W":
                        return t + "-й";
                    case "D":
                        return t + "-го";
                    default:
                        return t
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        return t.defineLocale("uz", {
            months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
            monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
            weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
            weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
            weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "D MMMM YYYY, dddd LT"
            },
            calendar: {
                sameDay: "[Бугун соат] LT [да]",
                nextDay: "[Эртага] LT [да]",
                nextWeek: "dddd [куни соат] LT [да]",
                lastDay: "[Кеча соат] LT [да]",
                lastWeek: "[Утган] dddd [куни соат] LT [да]",
                sameElse: "L"
            },
            relativeTime: {
                future: "Якин %s ичида",
                past: "Бир неча %s олдин",
                s: "фурсат",
                m: "бир дакика",
                mm: "%d дакика",
                h: "бир соат",
                hh: "%d соат",
                d: "бир кун",
                dd: "%d кун",
                M: "бир ой",
                MM: "%d ой",
                y: "бир йил",
                yy: "%d йил"
            },
            week: {
                dow: 1,
                doy: 7
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        return t.defineLocale("vi", {
            months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
            monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
            weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
            weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM [năm] YYYY",
                LLL: "D MMMM [năm] YYYY LT",
                LLLL: "dddd, D MMMM [năm] YYYY LT",
                l: "DD/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY LT",
                llll: "ddd, D MMM YYYY LT"
            },
            calendar: {
                sameDay: "[Hôm nay lúc] LT",
                nextDay: "[Ngày mai lúc] LT",
                nextWeek: "dddd [tuần tới lúc] LT",
                lastDay: "[Hôm qua lúc] LT",
                lastWeek: "dddd [tuần rồi lúc] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s tới",
                past: "%s trước",
                s: "vài giây",
                m: "một phút",
                mm: "%d phút",
                h: "một giờ",
                hh: "%d giờ",
                d: "một ngày",
                dd: "%d ngày",
                M: "một tháng",
                MM: "%d tháng",
                y: "một năm",
                yy: "%d năm"
            },
            ordinal: function(t) {
                return t
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        return t.defineLocale("zh-cn", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "Ah点mm",
                L: "YYYY-MM-DD",
                LL: "YYYY年MMMD日",
                LLL: "YYYY年MMMD日LT",
                LLLL: "YYYY年MMMD日ddddLT",
                l: "YYYY-MM-DD",
                ll: "YYYY年MMMD日",
                lll: "YYYY年MMMD日LT",
                llll: "YYYY年MMMD日ddddLT"
            },
            meridiem: function(t, e) {
                var n = 100 * t + e;
                return 600 > n ? "凌晨" : 900 > n ? "早上" : 1130 > n ? "上午" : 1230 > n ? "中午" : 1800 > n ? "下午" : "晚上"
            },
            calendar: {
                sameDay: function() {
                    return 0 === this.minutes() ? "[今天]Ah[点整]" : "[今天]LT"
                },
                nextDay: function() {
                    return 0 === this.minutes() ? "[明天]Ah[点整]" : "[明天]LT"
                },
                lastDay: function() {
                    return 0 === this.minutes() ? "[昨天]Ah[点整]" : "[昨天]LT"
                },
                nextWeek: function() {
                    var e, n;
                    return e = t().startOf("week"), n = this.unix() - e.unix() >= 604800 ? "[下]" : "[本]", 0 === this.minutes() ? n + "dddAh点整" : n + "dddAh点mm"
                },
                lastWeek: function() {
                    var e, n;
                    return e = t().startOf("week"), n = this.unix() < e.unix() ? "[上]" : "[本]", 0 === this.minutes() ? n + "dddAh点整" : n + "dddAh点mm"
                },
                sameElse: "LL"
            },
            ordinal: function(t, e) {
                switch (e) {
                    case "d":
                    case "D":
                    case "DDD":
                        return t + "日";
                    case "M":
                        return t + "月";
                    case "w":
                    case "W":
                        return t + "周";
                    default:
                        return t
                }
            },
            relativeTime: {
                future: "%s内",
                past: "%s前",
                s: "几秒",
                m: "1分钟",
                mm: "%d分钟",
                h: "1小时",
                hh: "%d小时",
                d: "1天",
                dd: "%d天",
                M: "1个月",
                MM: "%d个月",
                y: "1年",
                yy: "%d年"
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }),
    function(t) {
        t(ve)
    }(function(t) {
        return t.defineLocale("zh-tw", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "Ah點mm",
                L: "YYYY年MMMD日",
                LL: "YYYY年MMMD日",
                LLL: "YYYY年MMMD日LT",
                LLLL: "YYYY年MMMD日ddddLT",
                l: "YYYY年MMMD日",
                ll: "YYYY年MMMD日",
                lll: "YYYY年MMMD日LT",
                llll: "YYYY年MMMD日ddddLT"
            },
            meridiem: function(t, e) {
                var n = 100 * t + e;
                return 900 > n ? "早上" : 1130 > n ? "上午" : 1230 > n ? "中午" : 1800 > n ? "下午" : "晚上"
            },
            calendar: {
                sameDay: "[今天]LT",
                nextDay: "[明天]LT",
                nextWeek: "[下]ddddLT",
                lastDay: "[昨天]LT",
                lastWeek: "[上]ddddLT",
                sameElse: "L"
            },
            ordinal: function(t, e) {
                switch (e) {
                    case "d":
                    case "D":
                    case "DDD":
                        return t + "日";
                    case "M":
                        return t + "月";
                    case "w":
                    case "W":
                        return t + "週";
                    default:
                        return t
                }
            },
            relativeTime: {
                future: "%s內",
                past: "%s前",
                s: "幾秒",
                m: "一分鐘",
                mm: "%d分鐘",
                h: "一小時",
                hh: "%d小時",
                d: "一天",
                dd: "%d天",
                M: "一個月",
                MM: "%d個月",
                y: "一年",
                yy: "%d年"
            }
        })
    }), ve.locale("en"), Ne ? module.exports = ve : "function" == typeof define && define.amd ? (define("moment", function(t, e, n) {
        return n.config && n.config() && n.config().noGlobal === !0 && (Le.moment = be), ve
    }), ye(!0)) : ye()
}.call(this), ! function(t, e) {
    "use strict";
    if ("function" == typeof define && define.amd) define(["jquery", "moment"], e);
    else if ("object" == typeof exports) e(require("jquery"), require("moment"));
    else {
        if (!jQuery) throw new Error("bootstrap-datetimepicker requires jQuery to be loaded first");
        if (!moment) throw new Error("bootstrap-datetimepicker requires moment.js to be loaded first");
        e(t.jQuery, moment)
    }
}(this, function(t, e) {
    "use strict";
    if ("undefined" == typeof e) throw new Error("momentjs is required");
    var n = 0,
        i = function(i, a) {
            var r, s = t.fn.datetimepicker.defaults,
                o = {
                    time: "glyphicon glyphicon-time",
                    date: "glyphicon glyphicon-calendar",
                    up: "glyphicon glyphicon-chevron-up",
                    down: "glyphicon glyphicon-chevron-down"
                }, l = this,
                d = !1,
                u = function() {
                    var r, d, u = !1;
                    if (l.options = t.extend({}, s, a), l.options.icons = t.extend({}, o, l.options.icons), l.element = t(i), h(), !l.options.pickTime && !l.options.pickDate) throw new Error("Must choose at least one picker");
                    if (l.id = n++, e.locale(l.options.language), l.date = e(), l.unset = !1, l.isInput = l.element.is("input"), l.component = !1, l.element.hasClass("input-group") && (l.component = l.element.find(0 === l.element.find(".datepickerbutton").size() ? '[class^="input-group-"]' : ".datepickerbutton")), l.format = l.options.format, r = e().localeData(), l.format || (l.format = l.options.pickDate ? r.longDateFormat("L") : "", l.options.pickDate && l.options.pickTime && (l.format += " "), l.format += l.options.pickTime ? r.longDateFormat("LT") : "", l.options.useSeconds && (-1 !== r.longDateFormat("LT").indexOf(" A") ? l.format = l.format.split(" A")[0] + ":ss A" : l.format += ":ss")), l.use24hours = l.format.toLowerCase().indexOf("a") < 0 && l.format.indexOf("h") < 0, l.component && (u = l.component.find("span")), l.options.pickTime && u && u.addClass(l.options.icons.time), l.options.pickDate && u && (u.removeClass(l.options.icons.time), u.addClass(l.options.icons.date)), l.options.widgetParent = "string" == typeof l.options.widgetParent && l.options.widgetParent || l.element.parents().filter(function() {
                        return "scroll" === t(this).css("overflow-y")
                    }).get(0) || "body", l.widget = t(B()).appendTo(l.options.widgetParent), l.minViewMode = l.options.minViewMode || 0, "string" == typeof l.minViewMode) switch (l.minViewMode) {
                        case "months":
                            l.minViewMode = 1;
                            break;
                        case "years":
                            l.minViewMode = 2;
                            break;
                        default:
                            l.minViewMode = 0
                    }
                    if (l.viewMode = l.options.viewMode || 0, "string" == typeof l.viewMode) switch (l.viewMode) {
                        case "months":
                            l.viewMode = 1;
                            break;
                        case "years":
                            l.viewMode = 2;
                            break;
                        default:
                            l.viewMode = 0
                    }
                    l.viewMode = Math.max(l.viewMode, l.minViewMode), l.options.disabledDates = O(l.options.disabledDates), l.options.enabledDates = O(l.options.enabledDates), l.startViewMode = l.viewMode, l.setMinDate(l.options.minDate), l.setMaxDate(l.options.maxDate), g(), y(), b(), w(), M(), _(), C(), c().prop("disabled") || A(), "" !== l.options.defaultDate && "" === c().val() && l.setValue(l.options.defaultDate), 1 !== l.options.minuteStepping && (d = l.options.minuteStepping, l.date.minutes(Math.round(l.date.minutes() / d) * d % 60).seconds(0))
                }, c = function() {
                    var t;
                    if (l.isInput) return l.element;
                    if (t = l.element.find(".datepickerinput"), 0 === t.size()) t = l.element.find("input");
                    else if (!t.is("input")) throw new Error('CSS class "datepickerinput" cannot be applied to non input element');
                    return t
                }, h = function() {
                    var t;
                    t = l.element.is("input") ? l.element.data() : l.element.find("input").data(), void 0 !== t.dateFormat && (l.options.format = t.dateFormat), void 0 !== t.datePickdate && (l.options.pickDate = t.datePickdate), void 0 !== t.datePicktime && (l.options.pickTime = t.datePicktime), void 0 !== t.dateUseminutes && (l.options.useMinutes = t.dateUseminutes), void 0 !== t.dateUseseconds && (l.options.useSeconds = t.dateUseseconds), void 0 !== t.dateUsecurrent && (l.options.useCurrent = t.dateUsecurrent), void 0 !== t.calendarWeeks && (l.options.calendarWeeks = t.calendarWeeks), void 0 !== t.dateMinutestepping && (l.options.minuteStepping = t.dateMinutestepping), void 0 !== t.dateMindate && (l.options.minDate = t.dateMindate), void 0 !== t.dateMaxdate && (l.options.maxDate = t.dateMaxdate), void 0 !== t.dateShowtoday && (l.options.showToday = t.dateShowtoday), void 0 !== t.dateCollapse && (l.options.collapse = t.dateCollapse), void 0 !== t.dateLanguage && (l.options.language = t.dateLanguage), void 0 !== t.dateDefaultdate && (l.options.defaultDate = t.dateDefaultdate), void 0 !== t.dateDisableddates && (l.options.disabledDates = t.dateDisableddates), void 0 !== t.dateEnableddates && (l.options.enabledDates = t.dateEnableddates), void 0 !== t.dateIcons && (l.options.icons = t.dateIcons), void 0 !== t.dateUsestrict && (l.options.useStrict = t.dateUsestrict), void 0 !== t.dateDirection && (l.options.direction = t.dateDirection), void 0 !== t.dateSidebyside && (l.options.sideBySide = t.dateSidebyside), void 0 !== t.dateDaysofweekdisabled && (l.options.daysOfWeekDisabled = t.dateDaysofweekdisabled)
                }, p = function() {
                    var e, n = "absolute",
                        i = l.component ? l.component.offset() : l.element.offset(),
                        a = t(window);
                    l.width = l.component ? l.component.outerWidth() : l.element.outerWidth(), i.top = i.top + l.element.outerHeight(), "up" === l.options.direction ? e = "top" : "bottom" === l.options.direction ? e = "bottom" : "auto" === l.options.direction && (e = i.top + l.widget.height() > a.height() + a.scrollTop() && l.widget.height() + l.element.outerHeight() < i.top ? "top" : "bottom"), "top" === e ? (i.bottom = a.height() - i.top + l.element.outerHeight() + 3, l.widget.addClass("top").removeClass("bottom")) : (i.top += 1, l.widget.addClass("bottom").removeClass("top")), void 0 !== l.options.width && l.widget.width(l.options.width), "left" === l.options.orientation && (l.widget.addClass("left-oriented"), i.left = i.left - l.widget.width() + 20), N() && (n = "fixed", i.top -= a.scrollTop(), i.left -= a.scrollLeft()), a.width() < i.left + l.widget.outerWidth() ? (i.right = a.width() - i.left - l.width, i.left = "auto", l.widget.addClass("pull-right")) : (i.right = "auto", l.widget.removeClass("pull-right")), l.widget.css("top" === e ? {
                        position: n,
                        bottom: i.bottom,
                        top: "auto",
                        left: i.left,
                        right: i.right
                    } : {
                        position: n,
                        top: i.top,
                        bottom: "auto",
                        left: i.left,
                        right: i.right
                    })
                }, f = function(t, n) {
                    (!e(l.date).isSame(e(t)) || d) && (d = !1, l.element.trigger({
                        type: "dp.change",
                        date: e(l.date),
                        oldDate: e(t)
                    }), "change" !== n && l.element.change())
                }, m = function(t) {
                    d = !0, l.element.trigger({
                        type: "dp.error",
                        date: e(t, l.format, l.options.useStrict)
                    })
                }, _ = function(t) {
                    e.locale(l.options.language);
                    var n = t;
                    n || (n = c().val(), n && (l.date = e(n, l.format, l.options.useStrict)), l.date || (l.date = e())), l.viewDate = e(l.date).startOf("month"), v(), L()
                }, g = function() {
                    e.locale(l.options.language);
                    var n, i = t("<tr>"),
                        a = e.weekdaysMin();
                    if (l.options.calendarWeeks === !0 && i.append('<th class="cw">#</th>'), 0 === e().localeData()._week.dow)
                        for (n = 0; 7 > n; n++) i.append('<th class="dow">' + a[n] + "</th>");
                    else
                        for (n = 1; 8 > n; n++) i.append(7 === n ? '<th class="dow">' + a[0] + "</th>" : '<th class="dow">' + a[n] + "</th>");
                    l.widget.find(".datepicker-days thead").append(i)
                }, y = function() {
                    e.locale(l.options.language);
                    var t, n = "",
                        i = e.monthsShort();
                    for (t = 0; 12 > t; t++) n += '<span class="month">' + i[t] + "</span>";
                    l.widget.find(".datepicker-months td").append(n)
                }, v = function() {
                    if (l.options.pickDate) {
                        e.locale(l.options.language);
                        var n, i, a, r, s, o, d, u, c, h = l.viewDate.year(),
                            p = l.viewDate.month(),
                            f = l.options.minDate.year(),
                            m = l.options.minDate.month(),
                            _ = l.options.maxDate.year(),
                            g = l.options.maxDate.month(),
                            y = [],
                            v = e.months();
                        for (l.widget.find(".datepicker-days").find(".disabled").removeClass("disabled"), l.widget.find(".datepicker-months").find(".disabled").removeClass("disabled"), l.widget.find(".datepicker-years").find(".disabled").removeClass("disabled"), l.widget.find(".datepicker-days th:eq(1)").text(v[p] + " " + h), i = e(l.viewDate, l.format, l.options.useStrict).subtract(1, "months"), d = i.daysInMonth(), i.date(d).startOf("week"), (h === f && m >= p || f > h) && l.widget.find(".datepicker-days th:eq(0)").addClass("disabled"), (h === _ && p >= g || h > _) && l.widget.find(".datepicker-days th:eq(2)").addClass("disabled"), a = e(i).add(42, "d"); i.isBefore(a);) {
                            if (i.weekday() === e().startOf("week").weekday() && (r = t("<tr>"), y.push(r), l.options.calendarWeeks === !0 && r.append('<td class="cw">' + i.week() + "</td>")), s = "", i.year() < h || i.year() === h && i.month() < p ? s += " old" : (i.year() > h || i.year() === h && i.month() > p) && (s += " new"), i.isSame(e({
                                y: l.date.year(),
                                M: l.date.month(),
                                d: l.date.date()
                            })) && (s += " active"), (P(i, "day") || !W(i)) && (s += " disabled"), l.options.showToday === !0 && i.isSame(e(), "day") && (s += " today"), l.options.daysOfWeekDisabled)
                                for (o = 0; o < l.options.daysOfWeekDisabled.length; o++)
                                    if (i.day() === l.options.daysOfWeekDisabled[o]) {
                                        s += " disabled";
                                        break
                                    }
                            r.append('<td class="day' + s + '">' + i.date() + "</td>"), n = i.date(), i.add(1, "d"), n === i.date() && i.add(1, "d")
                        }
                        for (l.widget.find(".datepicker-days tbody").empty().append(y), c = l.date.year(), v = l.widget.find(".datepicker-months").find("th:eq(1)").text(h).end().find("span").removeClass("active"), c === h && v.eq(l.date.month()).addClass("active"), f > h - 1 && l.widget.find(".datepicker-months th:eq(0)").addClass("disabled"), h + 1 > _ && l.widget.find(".datepicker-months th:eq(2)").addClass("disabled"), o = 0; 12 > o; o++) h === f && m > o || f > h ? t(v[o]).addClass("disabled") : (h === _ && o > g || h > _) && t(v[o]).addClass("disabled");
                        for (y = "", h = 10 * parseInt(h / 10, 10), u = l.widget.find(".datepicker-years").find("th:eq(1)").text(h + "-" + (h + 9)).parents("table").find("td"), l.widget.find(".datepicker-years").find("th").removeClass("disabled"), f > h && l.widget.find(".datepicker-years").find("th:eq(0)").addClass("disabled"), h + 9 > _ && l.widget.find(".datepicker-years").find("th:eq(2)").addClass("disabled"), h -= 1, o = -1; 11 > o; o++) y += '<span class="year' + (-1 === o || 10 === o ? " old" : "") + (c === h ? " active" : "") + (f > h || h > _ ? " disabled" : "") + '">' + h + "</span>", h += 1;
                        u.html(y)
                    }
                }, b = function() {
                    e.locale(l.options.language);
                    var t, n, i, a = l.widget.find(".timepicker .timepicker-hours table"),
                        r = "";
                    if (a.parent().hide(), l.use24hours)
                        for (t = 0, n = 0; 6 > n; n += 1) {
                            for (r += "<tr>", i = 0; 4 > i; i += 1) r += '<td class="hour">' + $(t.toString()) + "</td>", t++;
                            r += "</tr>"
                        } else
                            for (t = 1, n = 0; 3 > n; n += 1) {
                                for (r += "<tr>", i = 0; 4 > i; i += 1) r += '<td class="hour">' + $(t.toString()) + "</td>", t++;
                                r += "</tr>"
                            }
                    a.html(r)
                }, w = function() {
                    var t, e, n = l.widget.find(".timepicker .timepicker-minutes table"),
                        i = "",
                        a = 0,
                        r = l.options.minuteStepping;
                    for (n.parent().hide(), 1 === r && (r = 5), t = 0; t < Math.ceil(60 / r / 4); t++) {
                        for (i += "<tr>", e = 0; 4 > e; e += 1) 60 > a ? (i += '<td class="minute">' + $(a.toString()) + "</td>", a += r) : i += "<td></td>";
                        i += "</tr>"
                    }
                    n.html(i)
                }, M = function() {
                    var t, e, n = l.widget.find(".timepicker .timepicker-seconds table"),
                        i = "",
                        a = 0;
                    for (n.parent().hide(), t = 0; 3 > t; t++) {
                        for (i += "<tr>", e = 0; 4 > e; e += 1) i += '<td class="second">' + $(a.toString()) + "</td>", a += 5;
                        i += "</tr>"
                    }
                    n.html(i)
                }, L = function() {
                    if (l.date) {
                        var t = l.widget.find(".timepicker span[data-time-component]"),
                            e = l.date.hours(),
                            n = l.date.format("A");
                        l.use24hours || (0 === e ? e = 12 : 12 !== e && (e %= 12), l.widget.find(".timepicker [data-action=togglePeriod]").text(n)), t.filter("[data-time-component=hours]").text($(e)), t.filter("[data-time-component=minutes]").text($(l.date.minutes())), t.filter("[data-time-component=seconds]").text($(l.date.second()))
                    }
                }, x = function(n) {
                    n.stopPropagation(), n.preventDefault(), l.unset = !1;
                    var i, a, r, s, o = t(n.target).closest("span, td, th"),
                        d = e(l.date);
                    if (1 === o.length && !o.is(".disabled")) switch (o[0].nodeName.toLowerCase()) {
                        case "th":
                            switch (o[0].className) {
                                case "picker-switch":
                                    C(1);
                                    break;
                                case "prev":
                                case "next":
                                    r = z.modes[l.viewMode].navStep, "prev" === o[0].className && (r = -1 * r), l.viewDate.add(r, z.modes[l.viewMode].navFnc), v()
                            }
                            break;
                        case "span":
                            o.is(".month") ? (i = o.parent().find("span").index(o), l.viewDate.month(i)) : (a = parseInt(o.text(), 10) || 0, l.viewDate.year(a)), l.viewMode === l.minViewMode && (l.date = e({
                                y: l.viewDate.year(),
                                M: l.viewDate.month(),
                                d: l.viewDate.date(),
                                h: l.date.hours(),
                                m: l.date.minutes(),
                                s: l.date.seconds()
                            }), I(), f(d, n.type)), C(-1), v();
                            break;
                        case "td":
                            o.is(".day") && (s = parseInt(o.text(), 10) || 1, i = l.viewDate.month(), a = l.viewDate.year(), o.is(".old") ? 0 === i ? (i = 11, a -= 1) : i -= 1 : o.is(".new") && (11 === i ? (i = 0, a += 1) : i += 1), l.date = e({
                                y: a,
                                M: i,
                                d: s,
                                h: l.date.hours(),
                                m: l.date.minutes(),
                                s: l.date.seconds()
                            }), l.viewDate = e({
                                y: a,
                                M: i,
                                d: Math.min(28, s)
                            }), v(), I(), f(d, n.type))
                    }
                }, D = {
                    incrementHours: function() {
                        H("add", "hours", 1)
                    },
                    incrementMinutes: function() {
                        H("add", "minutes", l.options.minuteStepping)
                    },
                    incrementSeconds: function() {
                        H("add", "seconds", 1)
                    },
                    decrementHours: function() {
                        H("subtract", "hours", 1)
                    },
                    decrementMinutes: function() {
                        H("subtract", "minutes", l.options.minuteStepping)
                    },
                    decrementSeconds: function() {
                        H("subtract", "seconds", 1)
                    },
                    togglePeriod: function() {
                        var t = l.date.hours();
                        t >= 12 ? t -= 12 : t += 12, l.date.hours(t)
                    },
                    showPicker: function() {
                        l.widget.find(".timepicker > div:not(.timepicker-picker)").hide(), l.widget.find(".timepicker .timepicker-picker").show()
                    },
                    showHours: function() {
                        l.widget.find(".timepicker .timepicker-picker").hide(), l.widget.find(".timepicker .timepicker-hours").show()
                    },
                    showMinutes: function() {
                        l.widget.find(".timepicker .timepicker-picker").hide(), l.widget.find(".timepicker .timepicker-minutes").show()
                    },
                    showSeconds: function() {
                        l.widget.find(".timepicker .timepicker-picker").hide(), l.widget.find(".timepicker .timepicker-seconds").show()
                    },
                    selectHour: function(e) {
                        var n = parseInt(t(e.target).text(), 10);
                        l.use24hours || (l.date.hours() >= 12 ? 12 !== n && (n += 12) : 12 === n && (n = 0)), l.date.hours(n), D.showPicker.call(l)
                    },
                    selectMinute: function(e) {
                        l.date.minutes(parseInt(t(e.target).text(), 10)), D.showPicker.call(l)
                    },
                    selectSecond: function(e) {
                        l.date.seconds(parseInt(t(e.target).text(), 10)), D.showPicker.call(l)
                    }
                }, T = function(n) {
                    var i = e(l.date),
                        a = t(n.currentTarget).data("action"),
                        r = D[a].apply(l, arguments);
                    return k(n), l.date || (l.date = e({
                        y: 1970
                    })), I(), L(), f(i, n.type), r
                }, k = function(t) {
                    t.stopPropagation(), t.preventDefault()
                }, Y = function(t) {
                    27 === t.keyCode && l.hide()
                }, S = function(n) {
                    e.locale(l.options.language);
                    var i = t(n.target),
                        a = e(l.date),
                        r = e(i.val(), l.format, l.options.useStrict);
                    r.isValid() && !P(r) && W(r) ? (_(), l.setValue(r), f(a, n.type), I()) : (l.viewDate = a, l.unset = !0, f(a, n.type), m(r))
                }, C = function(t) {
                    t && (l.viewMode = Math.max(l.minViewMode, Math.min(2, l.viewMode + t))), l.widget.find(".datepicker > div").hide().filter(".datepicker-" + z.modes[l.viewMode].clsName).show()
                }, A = function() {
                    var e, n, i, a, r;
                    l.widget.on("click", ".datepicker *", t.proxy(x, this)), l.widget.on("click", "[data-action]", t.proxy(T, this)), l.widget.on("mousedown", t.proxy(k, this)), l.element.on("keydown", t.proxy(Y, this)), l.options.pickDate && l.options.pickTime && l.widget.on("click.togglePicker", ".accordion-toggle", function(s) {
                        if (s.stopPropagation(), e = t(this), n = e.closest("ul"), i = n.find(".in"), a = n.find(".collapse:not(.in)"), i && i.length) {
                            if (r = i.data("collapse"), r && r.transitioning) return;
                            i.collapse("hide"), a.collapse("show"), e.find("span").toggleClass(l.options.icons.time + " " + l.options.icons.date), l.component && l.component.find("span").toggleClass(l.options.icons.time + " " + l.options.icons.date)
                        }
                    }), l.isInput ? l.element.on({
                        click: t.proxy(l.show, this),
                        focus: t.proxy(l.show, this),
                        change: t.proxy(S, this),
                        blur: t.proxy(l.hide, this)
                    }) : (l.element.on({
                        change: t.proxy(S, this)
                    }, "input"), l.component ? (l.component.on("click", t.proxy(l.show, this)), l.component.on("mousedown", t.proxy(k, this))) : l.element.on("click", t.proxy(l.show, this)))
                }, F = function() {
                    t(window).on("resize.datetimepicker" + l.id, t.proxy(p, this)), l.isInput || t(document).on("mousedown.datetimepicker" + l.id, t.proxy(l.hide, this))
                }, E = function() {
                    l.widget.off("click", ".datepicker *", l.click), l.widget.off("click", "[data-action]"), l.widget.off("mousedown", l.stopEvent), l.options.pickDate && l.options.pickTime && l.widget.off("click.togglePicker"), l.isInput ? l.element.off({
                        focus: l.show,
                        change: S,
                        click: l.show,
                        blur: l.hide
                    }) : (l.element.off({
                        change: S
                    }, "input"), l.component ? (l.component.off("click", l.show), l.component.off("mousedown", l.stopEvent)) : l.element.off("click", l.show))
                }, j = function() {
                    t(window).off("resize.datetimepicker" + l.id), l.isInput || t(document).off("mousedown.datetimepicker" + l.id)
                }, N = function() {
                    if (l.element) {
                        var e, n = l.element.parents(),
                            i = !1;
                        for (e = 0; e < n.length; e++)
                            if ("fixed" === t(n[e]).css("position")) {
                                i = !0;
                                break
                            }
                        return i
                    }
                    return !1
                }, I = function() {
                    e.locale(l.options.language);
                    var t = "";
                    l.unset || (t = e(l.date).format(l.format)), c().val(t), l.element.data("date", t), l.options.pickTime || l.hide()
                }, H = function(t, n, i) {
                    e.locale(l.options.language);
                    var a;
                    return "add" === t ? (a = e(l.date), 23 === a.hours() && a.add(i, n), a.add(i, n)) : a = e(l.date).subtract(i, n), P(e(a.subtract(i, n))) || P(a) ? void m(a.format(l.format)) : ("add" === t ? l.date.add(i, n) : l.date.subtract(i, n), void(l.unset = !1))
                }, P = function(t, n) {
                    e.locale(l.options.language);
                    var i = e(l.options.maxDate, l.format, l.options.useStrict),
                        a = e(l.options.minDate, l.format, l.options.useStrict);
                    return n && (i = i.endOf(n), a = a.startOf(n)), t.isAfter(i) || t.isBefore(a) ? !0 : l.options.disabledDates === !1 ? !1 : l.options.disabledDates[t.format("YYYY-MM-DD")] === !0
                }, W = function(t) {
                    return e.locale(l.options.language), l.options.enabledDates === !1 ? !0 : l.options.enabledDates[t.format("YYYY-MM-DD")] === !0
                }, O = function(t) {
                    var n, i = {}, a = 0;
                    for (n = 0; n < t.length; n++) r = e.isMoment(t[n]) || t[n] instanceof Date ? e(t[n]) : e(t[n], l.format, l.options.useStrict), r.isValid() && (i[r.format("YYYY-MM-DD")] = !0, a++);
                    return a > 0 ? i : !1
                }, $ = function(t) {
                    return t = t.toString(), t.length >= 2 ? t : "0" + t
                }, B = function() {
                    var t = '<thead><tr><th class="prev">&lsaquo;</th><th colspan="' + (l.options.calendarWeeks ? "6" : "5") + '" class="picker-switch"></th><th class="next">&rsaquo;</th></tr></thead>',
                        e = '<tbody><tr><td colspan="' + (l.options.calendarWeeks ? "8" : "7") + '"></td></tr></tbody>',
                        n = '<div class="datepicker-days"><table class="table-condensed">' + t + '<tbody></tbody></table></div><div class="datepicker-months"><table class="table-condensed">' + t + e + '</table></div><div class="datepicker-years"><table class="table-condensed">' + t + e + "</table></div>",
                        i = "";
                    return l.options.pickDate && l.options.pickTime ? (i = '<div class="bootstrap-datetimepicker-widget' + (l.options.sideBySide ? " timepicker-sbs" : "") + (l.use24hours ? " usetwentyfour" : "") + ' dropdown-menu" style="z-index:9999 !important;">', i += l.options.sideBySide ? '<div class="row"><div class="col-sm-6 datepicker">' + n + '</div><div class="col-sm-6 timepicker">' + R.getTemplate() + "</div></div>" : '<ul class="list-unstyled"><li' + (l.options.collapse ? ' class="collapse in"' : "") + '><div class="datepicker">' + n + '</div></li><li class="picker-switch accordion-toggle"><a class="btn" style="width:100%"><span class="' + l.options.icons.time + '"></span></a></li><li' + (l.options.collapse ? ' class="collapse"' : "") + '><div class="timepicker">' + R.getTemplate() + "</div></li></ul>", i += "</div>") : l.options.pickTime ? '<div class="bootstrap-datetimepicker-widget dropdown-menu"><div class="timepicker">' + R.getTemplate() + "</div></div>" : '<div class="bootstrap-datetimepicker-widget dropdown-menu"><div class="datepicker">' + n + "</div></div>"
                }, z = {
                    modes: [{
                        clsName: "days",
                        navFnc: "month",
                        navStep: 1
                    }, {
                        clsName: "months",
                        navFnc: "year",
                        navStep: 1
                    }, {
                        clsName: "years",
                        navFnc: "year",
                        navStep: 10
                    }]
                }, R = {
                    hourTemplate: '<span data-action="showHours"   data-time-component="hours"   class="timepicker-hour"></span>',
                    minuteTemplate: '<span data-action="showMinutes" data-time-component="minutes" class="timepicker-minute"></span>',
                    secondTemplate: '<span data-action="showSeconds"  data-time-component="seconds" class="timepicker-second"></span>'
                };
            R.getTemplate = function() {
                return '<div class="timepicker-picker"><table class="table-condensed"><tr><td><a href="#" class="btn" data-action="incrementHours"><span class="' + l.options.icons.up + '"></span></a></td><td class="separator"></td><td>' + (l.options.useMinutes ? '<a href="#" class="btn" data-action="incrementMinutes"><span class="' + l.options.icons.up + '"></span></a>' : "") + "</td>" + (l.options.useSeconds ? '<td class="separator"></td><td><a href="#" class="btn" data-action="incrementSeconds"><span class="' + l.options.icons.up + '"></span></a></td>' : "") + (l.use24hours ? "" : '<td class="separator"></td>') + "</tr><tr><td>" + R.hourTemplate + '</td> <td class="separator">:</td><td>' + (l.options.useMinutes ? R.minuteTemplate : '<span class="timepicker-minute">00</span>') + "</td> " + (l.options.useSeconds ? '<td class="separator">:</td><td>' + R.secondTemplate + "</td>" : "") + (l.use24hours ? "" : '<td class="separator"></td><td><button type="button" class="btn btn-primary" data-action="togglePeriod"></button></td>') + '</tr><tr><td><a href="#" class="btn" data-action="decrementHours"><span class="' + l.options.icons.down + '"></span></a></td><td class="separator"></td><td>' + (l.options.useMinutes ? '<a href="#" class="btn" data-action="decrementMinutes"><span class="' + l.options.icons.down + '"></span></a>' : "") + "</td>" + (l.options.useSeconds ? '<td class="separator"></td><td><a href="#" class="btn" data-action="decrementSeconds"><span class="' + l.options.icons.down + '"></span></a></td>' : "") + (l.use24hours ? "" : '<td class="separator"></td>') + '</tr></table></div><div class="timepicker-hours" data-action="selectHour"><table class="table-condensed"></table></div><div class="timepicker-minutes" data-action="selectMinute"><table class="table-condensed"></table></div>' + (l.options.useSeconds ? '<div class="timepicker-seconds" data-action="selectSecond"><table class="table-condensed"></table></div>' : "")
            }, l.destroy = function() {
                E(), j(), l.widget.remove(), l.element.removeData("DateTimePicker"), l.component && l.component.removeData("DateTimePicker")
            }, l.show = function(t) {
                if (!c().prop("disabled")) {
                    if (l.options.useCurrent && "" === c().val()) {
                        if (1 !== l.options.minuteStepping) {
                            var n = e(),
                                i = l.options.minuteStepping;
                            n.minutes(Math.round(n.minutes() / i) * i % 60).seconds(0), l.setValue(n.format(l.format))
                        } else l.setValue(e().format(l.format));
                        f("", t.type)
                    }
                    t && "click" === t.type && l.isInput && l.widget.hasClass("picker-open") || (l.widget.hasClass("picker-open") ? (l.widget.hide(), l.widget.removeClass("picker-open")) : (l.widget.show(), l.widget.addClass("picker-open")), l.height = l.component ? l.component.outerHeight() : l.element.outerHeight(), p(), l.element.trigger({
                        type: "dp.show",
                        date: e(l.date)
                    }), F(), t && k(t))
                }
            }, l.disable = function() {
                var t = c();
                t.prop("disabled") || (t.prop("disabled", !0), E())
            }, l.enable = function() {
                var t = c();
                t.prop("disabled") && (t.prop("disabled", !1), A())
            }, l.hide = function() {
                var t, n, i = l.widget.find(".collapse");
                for (t = 0; t < i.length; t++)
                    if (n = i.eq(t).data("collapse"), n && n.transitioning) return;
                l.widget.hide(), l.widget.removeClass("picker-open"), l.viewMode = l.startViewMode, C(), l.element.trigger({
                    type: "dp.hide",
                    date: e(l.date)
                }), j()
            }, l.setValue = function(t) {
                e.locale(l.options.language), t ? l.unset = !1 : (l.unset = !0, I()), t = e.isMoment(t) ? t.locale(l.options.language) : t instanceof Date ? e(t) : e(t, l.format, l.options.useStrict), t.isValid() ? (l.date = t, I(), l.viewDate = e({
                    y: l.date.year(),
                    M: l.date.month()
                }), v(), L()) : m(t)
            }, l.getDate = function() {
                return l.unset ? null : e(l.date)
            }, l.setDate = function(t) {
                var n = e(l.date);
                l.setValue(t ? t : null), f(n, "function")
            }, l.setDisabledDates = function(t) {
                l.options.disabledDates = O(t), l.viewDate && _()
            }, l.setEnabledDates = function(t) {
                l.options.enabledDates = O(t), l.viewDate && _()
            }, l.setMaxDate = function(t) {
                void 0 !== t && (l.options.maxDate = e.isMoment(t) || t instanceof Date ? e(t) : e(t, l.format, l.options.useStrict), l.viewDate && _())
            }, l.setMinDate = function(t) {
                void 0 !== t && (l.options.minDate = e.isMoment(t) || t instanceof Date ? e(t) : e(t, l.format, l.options.useStrict), l.viewDate && _())
            }, u()
        };
    t.fn.datetimepicker = function(e) {
        return this.each(function() {
            var n = t(this),
                a = n.data("DateTimePicker");
            a || n.data("DateTimePicker", new i(this, e))
        })
    }, t.fn.datetimepicker.defaults = {
        format: 'YYYY-MM-DD HH:mm:ss',
        pickDate: !0,
        pickTime: !0,
        useMinutes: !0,
        useSeconds: !0,
        useCurrent: !0,
        calendarWeeks: !1,
        minuteStepping: 1,
        minDate: e({
            y: 1900
        }),
        maxDate: e().add(100, "y"),
        showToday: !0,
        collapse: !0,
        language: e.locale(),
        defaultDate: "",
        disabledDates: !1,
        enabledDates: !1,
        icons: {},
        useStrict: !1,
        direction: "auto",
        sideBySide: !1,
        daysOfWeekDisabled: [],
        widgetParent: !1
    }
}), $(function() {
    $("#side-menu").metisMenu()
}), $(function() {
    $(window).bind("load resize", function() {
        topOffset = 50, width = this.window.innerWidth > 0 ? this.window.innerWidth : this.screen.width, 768 > width ? ($("div.navbar-collapse").addClass("collapse"), topOffset = 100) : $("div.navbar-collapse").removeClass("collapse"), height = this.window.innerHeight > 0 ? this.window.innerHeight : this.screen.height, height -= topOffset, 1 > height && (height = 1), height > topOffset && $("#page-wrapper").css("min-height", height + "px")
    })
});
