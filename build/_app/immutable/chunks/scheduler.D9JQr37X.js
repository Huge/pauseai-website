var R = Object.defineProperty
var F = (t, e, n) =>
	e in t ? R(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n)
var f = (t, e, n) => (F(t, typeof e != 'symbol' ? e + '' : e, n), n)
function G() {}
const ft = (t) => t
function z(t, e) {
	for (const n in e) t[n] = e[n]
	return t
}
function I(t) {
	return t()
}
function _t() {
	return Object.create(null)
}
function U(t) {
	t.forEach(I)
}
function ht(t) {
	return typeof t == 'function'
}
function dt(t, e) {
	return t != t ? e == e : t !== e || (t && typeof t == 'object') || typeof t == 'function'
}
let p
function mt(t, e) {
	return t === e ? !0 : (p || (p = document.createElement('a')), (p.href = e), t === p.href)
}
function pt(t) {
	return Object.keys(t).length === 0
}
function H(t, ...e) {
	if (t == null) {
		for (const i of e) i(void 0)
		return G
	}
	const n = t.subscribe(...e)
	return n.unsubscribe ? () => n.unsubscribe() : n
}
function yt(t) {
	let e
	return H(t, (n) => (e = n))(), e
}
function gt(t, e, n) {
	t.$$.on_destroy.push(H(e, n))
}
function bt(t, e, n, i) {
	if (t) {
		const s = L(t, e, n, i)
		return t[0](s)
	}
}
function L(t, e, n, i) {
	return t[1] && i ? z(n.ctx.slice(), t[1](i(e))) : n.ctx
}
function xt(t, e, n, i) {
	if (t[2] && i) {
		const s = t[2](i(n))
		if (e.dirty === void 0) return s
		if (typeof s == 'object') {
			const l = [],
				r = Math.max(e.dirty.length, s.length)
			for (let o = 0; o < r; o += 1) l[o] = e.dirty[o] | s[o]
			return l
		}
		return e.dirty | s
	}
	return e.dirty
}
function Et(t, e, n, i, s, l) {
	if (s) {
		const r = L(e, n, i, l)
		t.p(r, s)
	}
}
function wt(t) {
	if (t.ctx.length > 32) {
		const e = [],
			n = t.ctx.length / 32
		for (let i = 0; i < n; i++) e[i] = -1
		return e
	}
	return -1
}
function Tt(t) {
	const e = {}
	for (const n in t) n[0] !== '$' && (e[n] = t[n])
	return e
}
function Nt(t, e) {
	const n = {}
	e = new Set(e)
	for (const i in t) !e.has(i) && i[0] !== '$' && (n[i] = t[i])
	return n
}
function vt(t) {
	return t ?? ''
}
function At(t, e, n) {
	return t.set(n), e
}
function kt(t) {
	const e = typeof t == 'string' && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/)
	return e ? [parseFloat(e[1]), e[2] || 'px'] : [t, 'px']
}
let g = !1
function Ct() {
	g = !0
}
function Dt() {
	g = !1
}
function W(t, e, n, i) {
	for (; t < e; ) {
		const s = t + ((e - t) >> 1)
		n(s) <= i ? (t = s + 1) : (e = s)
	}
	return t
}
function J(t) {
	if (t.hydrate_init) return
	t.hydrate_init = !0
	let e = t.childNodes
	if (t.nodeName === 'HEAD') {
		const c = []
		for (let a = 0; a < e.length; a++) {
			const u = e[a]
			u.claim_order !== void 0 && c.push(u)
		}
		e = c
	}
	const n = new Int32Array(e.length + 1),
		i = new Int32Array(e.length)
	n[0] = -1
	let s = 0
	for (let c = 0; c < e.length; c++) {
		const a = e[c].claim_order,
			u = (s > 0 && e[n[s]].claim_order <= a ? s + 1 : W(1, s, (B) => e[n[B]].claim_order, a)) - 1
		i[c] = n[u] + 1
		const C = u + 1
		;(n[C] = c), (s = Math.max(C, s))
	}
	const l = [],
		r = []
	let o = e.length - 1
	for (let c = n[s] + 1; c != 0; c = i[c - 1]) {
		for (l.push(e[c - 1]); o >= c; o--) r.push(e[o])
		o--
	}
	for (; o >= 0; o--) r.push(e[o])
	l.reverse(), r.sort((c, a) => c.claim_order - a.claim_order)
	for (let c = 0, a = 0; c < r.length; c++) {
		for (; a < l.length && r[c].claim_order >= l[a].claim_order; ) a++
		const u = a < l.length ? l[a] : null
		t.insertBefore(r[c], u)
	}
}
function K(t, e) {
	t.appendChild(e)
}
function Q(t) {
	if (!t) return document
	const e = t.getRootNode ? t.getRootNode() : t.ownerDocument
	return e && e.host ? e : t.ownerDocument
}
function jt(t) {
	const e = v('style')
	return (e.textContent = '/* empty */'), V(Q(t), e), e.sheet
}
function V(t, e) {
	return K(t.head || t, e), e.sheet
}
function X(t, e) {
	if (g) {
		for (
			J(t),
				(t.actual_end_child === void 0 ||
					(t.actual_end_child !== null && t.actual_end_child.parentNode !== t)) &&
					(t.actual_end_child = t.firstChild);
			t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;

		)
			t.actual_end_child = t.actual_end_child.nextSibling
		e !== t.actual_end_child
			? (e.claim_order !== void 0 || e.parentNode !== t) && t.insertBefore(e, t.actual_end_child)
			: (t.actual_end_child = e.nextSibling)
	} else (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e)
}
function Y(t, e, n) {
	t.insertBefore(e, n || null)
}
function Z(t, e, n) {
	g && !n ? X(t, e) : (e.parentNode !== t || e.nextSibling != n) && t.insertBefore(e, n || null)
}
function w(t) {
	t.parentNode && t.parentNode.removeChild(t)
}
function Ht(t, e) {
	for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e)
}
function v(t) {
	return document.createElement(t)
}
function M(t) {
	return document.createElementNS('http://www.w3.org/2000/svg', t)
}
function A(t) {
	return document.createTextNode(t)
}
function Lt() {
	return A(' ')
}
function Mt() {
	return A('')
}
function Pt(t, e, n, i) {
	return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i)
}
function St(t) {
	return function (e) {
		return e.preventDefault(), t.call(this, e)
	}
}
function Ot(t) {
	return function (e) {
		return e.stopPropagation(), t.call(this, e)
	}
}
function k(t, e, n) {
	n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n)
}
const $ = ['width', 'height']
function tt(t, e) {
	const n = Object.getOwnPropertyDescriptors(t.__proto__)
	for (const i in e)
		e[i] == null
			? t.removeAttribute(i)
			: i === 'style'
				? (t.style.cssText = e[i])
				: i === '__value'
					? (t.value = t[i] = e[i])
					: n[i] && n[i].set && $.indexOf(i) === -1
						? (t[i] = e[i])
						: k(t, i, e[i])
}
function qt(t, e) {
	for (const n in e) k(t, n, e[n])
}
function et(t, e) {
	Object.keys(e).forEach((n) => {
		nt(t, n, e[n])
	})
}
function nt(t, e, n) {
	const i = e.toLowerCase()
	i in t
		? (t[i] = typeof t[i] == 'boolean' && n === '' ? !0 : n)
		: e in t
			? (t[e] = typeof t[e] == 'boolean' && n === '' ? !0 : n)
			: k(t, e, n)
}
function Bt(t) {
	return /-/.test(t) ? et : tt
}
function Rt(t) {
	return t.dataset.svelteH
}
function Ft(t) {
	return t === '' ? null : +t
}
function Gt(t) {
	return Array.from(t.childNodes)
}
function P(t) {
	t.claim_info === void 0 && (t.claim_info = { last_index: 0, total_claimed: 0 })
}
function S(t, e, n, i, s = !1) {
	P(t)
	const l = (() => {
		for (let r = t.claim_info.last_index; r < t.length; r++) {
			const o = t[r]
			if (e(o)) {
				const c = n(o)
				return c === void 0 ? t.splice(r, 1) : (t[r] = c), s || (t.claim_info.last_index = r), o
			}
		}
		for (let r = t.claim_info.last_index - 1; r >= 0; r--) {
			const o = t[r]
			if (e(o)) {
				const c = n(o)
				return (
					c === void 0 ? t.splice(r, 1) : (t[r] = c),
					s ? c === void 0 && t.claim_info.last_index-- : (t.claim_info.last_index = r),
					o
				)
			}
		}
		return i()
	})()
	return (l.claim_order = t.claim_info.total_claimed), (t.claim_info.total_claimed += 1), l
}
function O(t, e, n, i) {
	return S(
		t,
		(s) => s.nodeName === e,
		(s) => {
			const l = []
			for (let r = 0; r < s.attributes.length; r++) {
				const o = s.attributes[r]
				n[o.name] || l.push(o.name)
			}
			l.forEach((r) => s.removeAttribute(r))
		},
		() => i(e)
	)
}
function zt(t, e, n) {
	return O(t, e, n, v)
}
function It(t, e, n) {
	return O(t, e, n, M)
}
function it(t, e) {
	return S(
		t,
		(n) => n.nodeType === 3,
		(n) => {
			const i = '' + e
			if (n.data.startsWith(i)) {
				if (n.data.length !== i.length) return n.splitText(i.length)
			} else n.data = i
		},
		() => A(e),
		!0
	)
}
function Ut(t) {
	return it(t, ' ')
}
function D(t, e, n) {
	for (let i = n; i < t.length; i += 1) {
		const s = t[i]
		if (s.nodeType === 8 && s.textContent.trim() === e) return i
	}
	return -1
}
function Wt(t, e) {
	const n = D(t, 'HTML_TAG_START', 0),
		i = D(t, 'HTML_TAG_END', n + 1)
	if (n === -1 || i === -1) return new b(e)
	P(t)
	const s = t.splice(n, i - n + 1)
	w(s[0]), w(s[s.length - 1])
	const l = s.slice(1, s.length - 1)
	if (l.length === 0) return new b(e)
	for (const r of l) (r.claim_order = t.claim_info.total_claimed), (t.claim_info.total_claimed += 1)
	return new b(e, l)
}
function Jt(t, e) {
	;(e = '' + e), t.data !== e && (t.data = e)
}
function Kt(t, e) {
	t.value = e ?? ''
}
function Qt(t, e, n, i) {
	n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, i ? 'important' : '')
}
function Vt(t, e, n) {
	t.classList.toggle(e, !!n)
}
function st(t, e, { bubbles: n = !1, cancelable: i = !1 } = {}) {
	return new CustomEvent(t, { detail: e, bubbles: n, cancelable: i })
}
function Xt(t, e) {
	const n = []
	let i = 0
	for (const s of e.childNodes)
		if (s.nodeType === 8) {
			const l = s.textContent.trim()
			l === `HEAD_${t}_END`
				? ((i -= 1), n.push(s))
				: l === `HEAD_${t}_START` && ((i += 1), n.push(s))
		} else i > 0 && n.push(s)
	return n
}
class rt {
	constructor(e = !1) {
		f(this, 'is_svg', !1)
		f(this, 'e')
		f(this, 'n')
		f(this, 't')
		f(this, 'a')
		;(this.is_svg = e), (this.e = this.n = null)
	}
	c(e) {
		this.h(e)
	}
	m(e, n, i = null) {
		this.e ||
			(this.is_svg
				? (this.e = M(n.nodeName))
				: (this.e = v(n.nodeType === 11 ? 'TEMPLATE' : n.nodeName)),
			(this.t = n.tagName !== 'TEMPLATE' ? n : n.content),
			this.c(e)),
			this.i(i)
	}
	h(e) {
		;(this.e.innerHTML = e),
			(this.n = Array.from(
				this.e.nodeName === 'TEMPLATE' ? this.e.content.childNodes : this.e.childNodes
			))
	}
	i(e) {
		for (let n = 0; n < this.n.length; n += 1) Y(this.t, this.n[n], e)
	}
	p(e) {
		this.d(), this.h(e), this.i(this.a)
	}
	d() {
		this.n.forEach(w)
	}
}
class b extends rt {
	constructor(n = !1, i) {
		super(n)
		f(this, 'l')
		;(this.e = this.n = null), (this.l = i)
	}
	c(n) {
		this.l ? (this.n = this.l) : super.c(n)
	}
	i(n) {
		for (let i = 0; i < this.n.length; i += 1) Z(this.t, this.n[i], n)
	}
}
function Yt(t, e) {
	return new t(e)
}
let y
function x(t) {
	y = t
}
function d() {
	if (!y) throw new Error('Function called outside component initialization')
	return y
}
function Zt(t) {
	d().$$.on_mount.push(t)
}
function $t(t) {
	d().$$.after_update.push(t)
}
function te(t) {
	d().$$.on_destroy.push(t)
}
function ee() {
	const t = d()
	return (e, n, { cancelable: i = !1 } = {}) => {
		const s = t.$$.callbacks[e]
		if (s) {
			const l = st(e, n, { cancelable: i })
			return (
				s.slice().forEach((r) => {
					r.call(t, l)
				}),
				!l.defaultPrevented
			)
		}
		return !0
	}
}
function ne(t, e) {
	return d().$$.context.set(t, e), e
}
function ie(t) {
	return d().$$.context.get(t)
}
function se(t, e) {
	const n = t.$$.callbacks[e.type]
	n && n.slice().forEach((i) => i.call(this, e))
}
const m = [],
	j = []
let h = []
const T = [],
	q = Promise.resolve()
let N = !1
function ct() {
	N || ((N = !0), q.then(ot))
}
function re() {
	return ct(), q
}
function lt(t) {
	h.push(t)
}
function ce(t) {
	T.push(t)
}
const E = new Set()
let _ = 0
function ot() {
	if (_ !== 0) return
	const t = y
	do {
		try {
			for (; _ < m.length; ) {
				const e = m[_]
				_++, x(e), at(e.$$)
			}
		} catch (e) {
			throw ((m.length = 0), (_ = 0), e)
		}
		for (x(null), m.length = 0, _ = 0; j.length; ) j.pop()()
		for (let e = 0; e < h.length; e += 1) {
			const n = h[e]
			E.has(n) || (E.add(n), n())
		}
		h.length = 0
	} while (m.length)
	for (; T.length; ) T.pop()()
	;(N = !1), E.clear(), x(t)
}
function at(t) {
	if (t.fragment !== null) {
		t.update(), U(t.before_update)
		const e = t.dirty
		;(t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(lt)
	}
}
function le(t) {
	const e = [],
		n = []
	h.forEach((i) => (t.indexOf(i) === -1 ? e.push(i) : n.push(i))), n.forEach((i) => i()), (h = e)
}
export {
	le as $,
	gt as A,
	M as B,
	It as C,
	Vt as D,
	ft as E,
	kt as F,
	Yt as G,
	b as H,
	Ht as I,
	Pt as J,
	se as K,
	$t as L,
	Zt as M,
	Jt as N,
	j as O,
	re as P,
	At as Q,
	qt as R,
	Nt as S,
	Q as T,
	jt as U,
	ht as V,
	lt as W,
	st as X,
	_t as Y,
	ot as Z,
	pt as _,
	z as a,
	y as a0,
	x as a1,
	I as a2,
	m as a3,
	ct as a4,
	Ct as a5,
	Dt as a6,
	yt as a7,
	ie as a8,
	ee as a9,
	ne as aa,
	te as ab,
	tt as ac,
	vt as ad,
	Ot as ae,
	St as af,
	Bt as ag,
	ce as ah,
	H as ai,
	Kt as aj,
	Ft as ak,
	Lt as b,
	v as c,
	Ut as d,
	Tt as e,
	zt as f,
	Rt as g,
	Gt as h,
	it as i,
	w as j,
	k,
	Z as l,
	X as m,
	G as n,
	Mt as o,
	Xt as p,
	Wt as q,
	U as r,
	dt as s,
	A as t,
	bt as u,
	Et as v,
	wt as w,
	xt as x,
	mt as y,
	Qt as z
}
