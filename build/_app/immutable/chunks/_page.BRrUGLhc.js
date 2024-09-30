var kt = Object.defineProperty
var bt = (r, e, n) =>
	e in r ? kt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (r[e] = n)
var ie = (r, e, n) => (bt(r, typeof e != 'symbol' ? e + '' : e, n), n),
	wt = (r, e, n) => {
		if (!e.has(r)) throw TypeError('Cannot ' + n)
	}
var Ce = (r, e, n) => {
	if (e.has(r)) throw TypeError('Cannot add the same private member more than once')
	e instanceof WeakSet ? e.add(r) : e.set(r, n)
}
var ve = (r, e, n) => (wt(r, e, 'access private method'), n)
import {
	M as ut,
	s as Z,
	o as z,
	l as _,
	j as c,
	S as qe,
	a as le,
	e as Ne,
	I as de,
	G as M,
	b as ee,
	d as te,
	t as ae,
	i as fe,
	N as _e,
	n as ne,
	a8 as vt,
	u as Q,
	c as x,
	f as I,
	h as C,
	k as y,
	v as W,
	w as G,
	x as X,
	y as je,
	m as F,
	H as zt,
	q as Tt,
	a9 as xt,
	aa as It,
	g as Be,
	W as Rt
} from './scheduler.D9JQr37X.js'
import {
	S as U,
	i as H,
	g as q,
	t as m,
	e as j,
	a as h,
	c as R,
	b as O,
	m as E,
	d as S,
	f as ct,
	h as Et
} from './index.D-WnFt3a.js'
import { e as se } from './each.Gi_i5kkj.js'
import { P as St } from './PostMeta.BRGG6AYg.js'
import { I as yt, A as xe } from './a.YKMG9Usu.js'
import { g as ue, a as ce } from './a.svelte_svelte_type_style_lang.DfavE63L.js'
import { s as Pe } from './index.BQp5C8W6.js'
import { B as At } from './Button.Ip6Rcx0-.js'
const Ct = {
	title: 'Teams of PauseAI',
	description: 'What are the various teams at PauseAI?',
	date: '2024-04-23',
	slug: 'teams',
	categories: []
}
function Nt() {
	const r = console.warn
	;(console.warn = (e) => {
		e.includes('unknown prop') || e.includes('unexpected slot') || r(e)
	}),
		ut(() => {
			console.warn = r
		})
}
function Ze(r, e, n) {
	const l = r.slice()
	return (l[18] = e[n]), l
}
function Ue(r, e, n) {
	const l = r.slice()
	return (l[18] = e[n]), l
}
function He(r, e, n) {
	const l = r.slice()
	return (l[10] = e[n]), l
}
function Me(r, e, n) {
	const l = r.slice()
	return (l[13] = e[n]), (l[15] = n), l
}
function Qe(r, e, n) {
	const l = r.slice()
	return (l[16] = e[n]), (l[15] = n), l
}
function We(r, e, n) {
	const l = r.slice()
	return (l[7] = e[n]), l
}
function Pt(r) {
	let e, n, l, t
	const s = [Ot, Dt, Bt],
		i = []
	function a(o, f) {
		return o[0] === 'table' ? 0 : o[0] === 'list' ? 1 : 2
	}
	return (
		(e = a(r)),
		(n = i[e] = s[e](r)),
		{
			c() {
				n.c(), (l = z())
			},
			l(o) {
				n.l(o), (l = z())
			},
			m(o, f) {
				i[e].m(o, f), _(o, l, f), (t = !0)
			},
			p(o, f) {
				let u = e
				;(e = a(o)),
					e === u
						? i[e].p(o, f)
						: (q(),
							m(i[u], 1, 1, () => {
								i[u] = null
							}),
							j(),
							(n = i[e]),
							n ? n.p(o, f) : ((n = i[e] = s[e](o)), n.c()),
							h(n, 1),
							n.m(l.parentNode, l))
			},
			i(o) {
				t || (h(n), (t = !0))
			},
			o(o) {
				m(n), (t = !1)
			},
			d(o) {
				o && c(l), i[e].d(o)
			}
		}
	)
}
function Lt(r) {
	let e,
		n,
		l = se(r[1]),
		t = []
	for (let i = 0; i < l.length; i += 1) t[i] = Ye(We(r, l, i))
	const s = (i) =>
		m(t[i], 1, 1, () => {
			t[i] = null
		})
	return {
		c() {
			for (let i = 0; i < t.length; i += 1) t[i].c()
			e = z()
		},
		l(i) {
			for (let a = 0; a < t.length; a += 1) t[a].l(i)
			e = z()
		},
		m(i, a) {
			for (let o = 0; o < t.length; o += 1) t[o] && t[o].m(i, a)
			_(i, e, a), (n = !0)
		},
		p(i, a) {
			if (a & 34) {
				l = se(i[1])
				let o
				for (o = 0; o < l.length; o += 1) {
					const f = We(i, l, o)
					t[o]
						? (t[o].p(f, a), h(t[o], 1))
						: ((t[o] = Ye(f)), t[o].c(), h(t[o], 1), t[o].m(e.parentNode, e))
				}
				for (q(), o = l.length; o < t.length; o += 1) s(o)
				j()
			}
		},
		i(i) {
			if (!n) {
				for (let a = 0; a < l.length; a += 1) h(t[a])
				n = !0
			}
		},
		o(i) {
			t = t.filter(Boolean)
			for (let a = 0; a < t.length; a += 1) m(t[a])
			n = !1
		},
		d(i) {
			i && c(e), de(t, i)
		}
	}
}
function Bt(r) {
	let e, n, l
	const t = [r[6]]
	var s = r[5][r[0]]
	function i(a, o) {
		let f = { $$slots: { default: [Zt] }, $$scope: { ctx: a } }
		for (let u = 0; u < t.length; u += 1) f = le(f, t[u])
		return o !== void 0 && o & 64 && (f = le(f, ue(t, [ce(a[6])]))), { props: f }
	}
	return (
		s && (e = M(s, i(r))),
		{
			c() {
				e && R(e.$$.fragment), (n = z())
			},
			l(a) {
				e && O(e.$$.fragment, a), (n = z())
			},
			m(a, o) {
				e && E(e, a, o), _(a, n, o), (l = !0)
			},
			p(a, o) {
				if (o & 33 && s !== (s = a[5][a[0]])) {
					if (e) {
						q()
						const f = e
						m(f.$$.fragment, 1, 0, () => {
							S(f, 1)
						}),
							j()
					}
					s
						? ((e = M(s, i(a, o))), R(e.$$.fragment), h(e.$$.fragment, 1), E(e, n.parentNode, n))
						: (e = null)
				} else if (s) {
					const f = o & 64 ? ue(t, [ce(a[6])]) : {}
					o & 8388706 && (f.$$scope = { dirty: o, ctx: a }), e.$set(f)
				}
			},
			i(a) {
				l || (e && h(e.$$.fragment, a), (l = !0))
			},
			o(a) {
				e && m(e.$$.fragment, a), (l = !1)
			},
			d(a) {
				a && c(n), e && S(e, a)
			}
		}
	)
}
function Dt(r) {
	let e, n, l, t
	const s = [Ht, Ut],
		i = []
	function a(o, f) {
		return o[4] ? 0 : 1
	}
	return (
		(e = a(r)),
		(n = i[e] = s[e](r)),
		{
			c() {
				n.c(), (l = z())
			},
			l(o) {
				n.l(o), (l = z())
			},
			m(o, f) {
				i[e].m(o, f), _(o, l, f), (t = !0)
			},
			p(o, f) {
				let u = e
				;(e = a(o)),
					e === u
						? i[e].p(o, f)
						: (q(),
							m(i[u], 1, 1, () => {
								i[u] = null
							}),
							j(),
							(n = i[e]),
							n ? n.p(o, f) : ((n = i[e] = s[e](o)), n.c()),
							h(n, 1),
							n.m(l.parentNode, l))
			},
			i(o) {
				t || (h(n), (t = !0))
			},
			o(o) {
				m(n), (t = !1)
			},
			d(o) {
				o && c(l), i[e].d(o)
			}
		}
	)
}
function Ot(r) {
	let e, n, l
	var t = r[5].table
	function s(i, a) {
		return { props: { $$slots: { default: [en] }, $$scope: { ctx: i } } }
	}
	return (
		t && (e = M(t, s(r))),
		{
			c() {
				e && R(e.$$.fragment), (n = z())
			},
			l(i) {
				e && O(e.$$.fragment, i), (n = z())
			},
			m(i, a) {
				e && E(e, i, a), _(i, n, a), (l = !0)
			},
			p(i, a) {
				if (a & 32 && t !== (t = i[5].table)) {
					if (e) {
						q()
						const o = e
						m(o.$$.fragment, 1, 0, () => {
							S(o, 1)
						}),
							j()
					}
					t
						? ((e = M(t, s(i))), R(e.$$.fragment), h(e.$$.fragment, 1), E(e, n.parentNode, n))
						: (e = null)
				} else if (t) {
					const o = {}
					a & 8388716 && (o.$$scope = { dirty: a, ctx: i }), e.$set(o)
				}
			},
			i(i) {
				l || (e && h(e.$$.fragment, i), (l = !0))
			},
			o(i) {
				e && m(e.$$.fragment, i), (l = !1)
			},
			d(i) {
				i && c(n), e && S(e, i)
			}
		}
	)
}
function qt(r) {
	let e = r[6].raw + '',
		n
	return {
		c() {
			n = ae(e)
		},
		l(l) {
			n = fe(l, e)
		},
		m(l, t) {
			_(l, n, t)
		},
		p(l, t) {
			t & 64 && e !== (e = l[6].raw + '') && _e(n, e)
		},
		i: ne,
		o: ne,
		d(l) {
			l && c(n)
		}
	}
}
function jt(r) {
	let e, n
	return (
		(e = new $e({ props: { tokens: r[1], renderers: r[5] } })),
		{
			c() {
				R(e.$$.fragment)
			},
			l(l) {
				O(e.$$.fragment, l)
			},
			m(l, t) {
				E(e, l, t), (n = !0)
			},
			p(l, t) {
				const s = {}
				t & 2 && (s.tokens = l[1]), t & 32 && (s.renderers = l[5]), e.$set(s)
			},
			i(l) {
				n || (h(e.$$.fragment, l), (n = !0))
			},
			o(l) {
				m(e.$$.fragment, l), (n = !1)
			},
			d(l) {
				S(e, l)
			}
		}
	)
}
function Zt(r) {
	let e, n, l, t
	const s = [jt, qt],
		i = []
	function a(o, f) {
		return o[1] ? 0 : 1
	}
	return (
		(e = a(r)),
		(n = i[e] = s[e](r)),
		{
			c() {
				n.c(), (l = z())
			},
			l(o) {
				n.l(o), (l = z())
			},
			m(o, f) {
				i[e].m(o, f), _(o, l, f), (t = !0)
			},
			p(o, f) {
				let u = e
				;(e = a(o)),
					e === u
						? i[e].p(o, f)
						: (q(),
							m(i[u], 1, 1, () => {
								i[u] = null
							}),
							j(),
							(n = i[e]),
							n ? n.p(o, f) : ((n = i[e] = s[e](o)), n.c()),
							h(n, 1),
							n.m(l.parentNode, l))
			},
			i(o) {
				t || (h(n), (t = !0))
			},
			o(o) {
				m(n), (t = !1)
			},
			d(o) {
				o && c(l), i[e].d(o)
			}
		}
	)
}
function Ut(r) {
	let e, n, l
	const t = [{ ordered: r[4] }, r[6]]
	var s = r[5].list
	function i(a, o) {
		let f = { $$slots: { default: [Qt] }, $$scope: { ctx: a } }
		for (let u = 0; u < t.length; u += 1) f = le(f, t[u])
		return (
			o !== void 0 &&
				o & 80 &&
				(f = le(f, ue(t, [o & 16 && { ordered: a[4] }, o & 64 && ce(a[6])]))),
			{ props: f }
		)
	}
	return (
		s && (e = M(s, i(r))),
		{
			c() {
				e && R(e.$$.fragment), (n = z())
			},
			l(a) {
				e && O(e.$$.fragment, a), (n = z())
			},
			m(a, o) {
				e && E(e, a, o), _(a, n, o), (l = !0)
			},
			p(a, o) {
				if (o & 32 && s !== (s = a[5].list)) {
					if (e) {
						q()
						const f = e
						m(f.$$.fragment, 1, 0, () => {
							S(f, 1)
						}),
							j()
					}
					s
						? ((e = M(s, i(a, o))), R(e.$$.fragment), h(e.$$.fragment, 1), E(e, n.parentNode, n))
						: (e = null)
				} else if (s) {
					const f = o & 80 ? ue(t, [o & 16 && { ordered: a[4] }, o & 64 && ce(a[6])]) : {}
					o & 8388704 && (f.$$scope = { dirty: o, ctx: a }), e.$set(f)
				}
			},
			i(a) {
				l || (e && h(e.$$.fragment, a), (l = !0))
			},
			o(a) {
				e && m(e.$$.fragment, a), (l = !1)
			},
			d(a) {
				a && c(n), e && S(e, a)
			}
		}
	)
}
function Ht(r) {
	let e, n, l
	const t = [{ ordered: r[4] }, r[6]]
	var s = r[5].list
	function i(a, o) {
		let f = { $$slots: { default: [Gt] }, $$scope: { ctx: a } }
		for (let u = 0; u < t.length; u += 1) f = le(f, t[u])
		return (
			o !== void 0 &&
				o & 80 &&
				(f = le(f, ue(t, [o & 16 && { ordered: a[4] }, o & 64 && ce(a[6])]))),
			{ props: f }
		)
	}
	return (
		s && (e = M(s, i(r))),
		{
			c() {
				e && R(e.$$.fragment), (n = z())
			},
			l(a) {
				e && O(e.$$.fragment, a), (n = z())
			},
			m(a, o) {
				e && E(e, a, o), _(a, n, o), (l = !0)
			},
			p(a, o) {
				if (o & 32 && s !== (s = a[5].list)) {
					if (e) {
						q()
						const f = e
						m(f.$$.fragment, 1, 0, () => {
							S(f, 1)
						}),
							j()
					}
					s
						? ((e = M(s, i(a, o))), R(e.$$.fragment), h(e.$$.fragment, 1), E(e, n.parentNode, n))
						: (e = null)
				} else if (s) {
					const f = o & 80 ? ue(t, [o & 16 && { ordered: a[4] }, o & 64 && ce(a[6])]) : {}
					o & 8388704 && (f.$$scope = { dirty: o, ctx: a }), e.$set(f)
				}
			},
			i(a) {
				l || (e && h(e.$$.fragment, a), (l = !0))
			},
			o(a) {
				e && m(e.$$.fragment, a), (l = !1)
			},
			d(a) {
				a && c(n), e && S(e, a)
			}
		}
	)
}
function Mt(r) {
	let e, n, l
	return (
		(e = new $e({ props: { tokens: r[18].tokens, renderers: r[5] } })),
		{
			c() {
				R(e.$$.fragment), (n = ee())
			},
			l(t) {
				O(e.$$.fragment, t), (n = te(t))
			},
			m(t, s) {
				E(e, t, s), _(t, n, s), (l = !0)
			},
			p(t, s) {
				const i = {}
				s & 64 && (i.tokens = t[18].tokens), s & 32 && (i.renderers = t[5]), e.$set(i)
			},
			i(t) {
				l || (h(e.$$.fragment, t), (l = !0))
			},
			o(t) {
				m(e.$$.fragment, t), (l = !1)
			},
			d(t) {
				t && c(n), S(e, t)
			}
		}
	)
}
function Ge(r) {
	let e, n, l
	const t = [r[18]]
	var s = r[5].unorderedlistitem || r[5].listitem
	function i(a, o) {
		let f = { $$slots: { default: [Mt] }, $$scope: { ctx: a } }
		for (let u = 0; u < t.length; u += 1) f = le(f, t[u])
		return o !== void 0 && o & 64 && (f = le(f, ue(t, [ce(a[18])]))), { props: f }
	}
	return (
		s && (e = M(s, i(r))),
		{
			c() {
				e && R(e.$$.fragment), (n = z())
			},
			l(a) {
				e && O(e.$$.fragment, a), (n = z())
			},
			m(a, o) {
				e && E(e, a, o), _(a, n, o), (l = !0)
			},
			p(a, o) {
				if (o & 32 && s !== (s = a[5].unorderedlistitem || a[5].listitem)) {
					if (e) {
						q()
						const f = e
						m(f.$$.fragment, 1, 0, () => {
							S(f, 1)
						}),
							j()
					}
					s
						? ((e = M(s, i(a, o))), R(e.$$.fragment), h(e.$$.fragment, 1), E(e, n.parentNode, n))
						: (e = null)
				} else if (s) {
					const f = o & 64 ? ue(t, [ce(a[18])]) : {}
					o & 8388704 && (f.$$scope = { dirty: o, ctx: a }), e.$set(f)
				}
			},
			i(a) {
				l || (e && h(e.$$.fragment, a), (l = !0))
			},
			o(a) {
				e && m(e.$$.fragment, a), (l = !1)
			},
			d(a) {
				a && c(n), e && S(e, a)
			}
		}
	)
}
function Qt(r) {
	let e,
		n,
		l = se(r[6].items),
		t = []
	for (let i = 0; i < l.length; i += 1) t[i] = Ge(Ze(r, l, i))
	const s = (i) =>
		m(t[i], 1, 1, () => {
			t[i] = null
		})
	return {
		c() {
			for (let i = 0; i < t.length; i += 1) t[i].c()
			e = z()
		},
		l(i) {
			for (let a = 0; a < t.length; a += 1) t[a].l(i)
			e = z()
		},
		m(i, a) {
			for (let o = 0; o < t.length; o += 1) t[o] && t[o].m(i, a)
			_(i, e, a), (n = !0)
		},
		p(i, a) {
			if (a & 96) {
				l = se(i[6].items)
				let o
				for (o = 0; o < l.length; o += 1) {
					const f = Ze(i, l, o)
					t[o]
						? (t[o].p(f, a), h(t[o], 1))
						: ((t[o] = Ge(f)), t[o].c(), h(t[o], 1), t[o].m(e.parentNode, e))
				}
				for (q(), o = l.length; o < t.length; o += 1) s(o)
				j()
			}
		},
		i(i) {
			if (!n) {
				for (let a = 0; a < l.length; a += 1) h(t[a])
				n = !0
			}
		},
		o(i) {
			t = t.filter(Boolean)
			for (let a = 0; a < t.length; a += 1) m(t[a])
			n = !1
		},
		d(i) {
			i && c(e), de(t, i)
		}
	}
}
function Wt(r) {
	let e, n, l
	return (
		(e = new $e({ props: { tokens: r[18].tokens, renderers: r[5] } })),
		{
			c() {
				R(e.$$.fragment), (n = ee())
			},
			l(t) {
				O(e.$$.fragment, t), (n = te(t))
			},
			m(t, s) {
				E(e, t, s), _(t, n, s), (l = !0)
			},
			p(t, s) {
				const i = {}
				s & 64 && (i.tokens = t[18].tokens), s & 32 && (i.renderers = t[5]), e.$set(i)
			},
			i(t) {
				l || (h(e.$$.fragment, t), (l = !0))
			},
			o(t) {
				m(e.$$.fragment, t), (l = !1)
			},
			d(t) {
				t && c(n), S(e, t)
			}
		}
	)
}
function Xe(r) {
	let e, n, l
	const t = [r[18]]
	var s = r[5].orderedlistitem || r[5].listitem
	function i(a, o) {
		let f = { $$slots: { default: [Wt] }, $$scope: { ctx: a } }
		for (let u = 0; u < t.length; u += 1) f = le(f, t[u])
		return o !== void 0 && o & 64 && (f = le(f, ue(t, [ce(a[18])]))), { props: f }
	}
	return (
		s && (e = M(s, i(r))),
		{
			c() {
				e && R(e.$$.fragment), (n = z())
			},
			l(a) {
				e && O(e.$$.fragment, a), (n = z())
			},
			m(a, o) {
				e && E(e, a, o), _(a, n, o), (l = !0)
			},
			p(a, o) {
				if (o & 32 && s !== (s = a[5].orderedlistitem || a[5].listitem)) {
					if (e) {
						q()
						const f = e
						m(f.$$.fragment, 1, 0, () => {
							S(f, 1)
						}),
							j()
					}
					s
						? ((e = M(s, i(a, o))), R(e.$$.fragment), h(e.$$.fragment, 1), E(e, n.parentNode, n))
						: (e = null)
				} else if (s) {
					const f = o & 64 ? ue(t, [ce(a[18])]) : {}
					o & 8388704 && (f.$$scope = { dirty: o, ctx: a }), e.$set(f)
				}
			},
			i(a) {
				l || (e && h(e.$$.fragment, a), (l = !0))
			},
			o(a) {
				e && m(e.$$.fragment, a), (l = !1)
			},
			d(a) {
				a && c(n), e && S(e, a)
			}
		}
	)
}
function Gt(r) {
	let e,
		n,
		l = se(r[6].items),
		t = []
	for (let i = 0; i < l.length; i += 1) t[i] = Xe(Ue(r, l, i))
	const s = (i) =>
		m(t[i], 1, 1, () => {
			t[i] = null
		})
	return {
		c() {
			for (let i = 0; i < t.length; i += 1) t[i].c()
			e = z()
		},
		l(i) {
			for (let a = 0; a < t.length; a += 1) t[a].l(i)
			e = z()
		},
		m(i, a) {
			for (let o = 0; o < t.length; o += 1) t[o] && t[o].m(i, a)
			_(i, e, a), (n = !0)
		},
		p(i, a) {
			if (a & 96) {
				l = se(i[6].items)
				let o
				for (o = 0; o < l.length; o += 1) {
					const f = Ue(i, l, o)
					t[o]
						? (t[o].p(f, a), h(t[o], 1))
						: ((t[o] = Xe(f)), t[o].c(), h(t[o], 1), t[o].m(e.parentNode, e))
				}
				for (q(), o = l.length; o < t.length; o += 1) s(o)
				j()
			}
		},
		i(i) {
			if (!n) {
				for (let a = 0; a < l.length; a += 1) h(t[a])
				n = !0
			}
		},
		o(i) {
			t = t.filter(Boolean)
			for (let a = 0; a < t.length; a += 1) m(t[a])
			n = !1
		},
		d(i) {
			i && c(e), de(t, i)
		}
	}
}
function Xt(r) {
	let e, n, l
	return (
		(e = new $e({ props: { tokens: r[16].tokens, renderers: r[5] } })),
		{
			c() {
				R(e.$$.fragment), (n = ee())
			},
			l(t) {
				O(e.$$.fragment, t), (n = te(t))
			},
			m(t, s) {
				E(e, t, s), _(t, n, s), (l = !0)
			},
			p(t, s) {
				const i = {}
				s & 4 && (i.tokens = t[16].tokens), s & 32 && (i.renderers = t[5]), e.$set(i)
			},
			i(t) {
				l || (h(e.$$.fragment, t), (l = !0))
			},
			o(t) {
				m(e.$$.fragment, t), (l = !1)
			},
			d(t) {
				t && c(n), S(e, t)
			}
		}
	)
}
function Ve(r) {
	let e, n, l
	var t = r[5].tablecell
	function s(i, a) {
		return {
			props: {
				header: !0,
				align: i[6].align[i[15]] || 'center',
				$$slots: { default: [Xt] },
				$$scope: { ctx: i }
			}
		}
	}
	return (
		t && (e = M(t, s(r))),
		{
			c() {
				e && R(e.$$.fragment), (n = z())
			},
			l(i) {
				e && O(e.$$.fragment, i), (n = z())
			},
			m(i, a) {
				e && E(e, i, a), _(i, n, a), (l = !0)
			},
			p(i, a) {
				if (a & 32 && t !== (t = i[5].tablecell)) {
					if (e) {
						q()
						const o = e
						m(o.$$.fragment, 1, 0, () => {
							S(o, 1)
						}),
							j()
					}
					t
						? ((e = M(t, s(i))), R(e.$$.fragment), h(e.$$.fragment, 1), E(e, n.parentNode, n))
						: (e = null)
				} else if (t) {
					const o = {}
					a & 64 && (o.align = i[6].align[i[15]] || 'center'),
						a & 8388644 && (o.$$scope = { dirty: a, ctx: i }),
						e.$set(o)
				}
			},
			i(i) {
				l || (e && h(e.$$.fragment, i), (l = !0))
			},
			o(i) {
				e && m(e.$$.fragment, i), (l = !1)
			},
			d(i) {
				i && c(n), e && S(e, i)
			}
		}
	)
}
function Vt(r) {
	let e,
		n,
		l = se(r[2]),
		t = []
	for (let i = 0; i < l.length; i += 1) t[i] = Ve(Qe(r, l, i))
	const s = (i) =>
		m(t[i], 1, 1, () => {
			t[i] = null
		})
	return {
		c() {
			for (let i = 0; i < t.length; i += 1) t[i].c()
			e = z()
		},
		l(i) {
			for (let a = 0; a < t.length; a += 1) t[a].l(i)
			e = z()
		},
		m(i, a) {
			for (let o = 0; o < t.length; o += 1) t[o] && t[o].m(i, a)
			_(i, e, a), (n = !0)
		},
		p(i, a) {
			if (a & 100) {
				l = se(i[2])
				let o
				for (o = 0; o < l.length; o += 1) {
					const f = Qe(i, l, o)
					t[o]
						? (t[o].p(f, a), h(t[o], 1))
						: ((t[o] = Ve(f)), t[o].c(), h(t[o], 1), t[o].m(e.parentNode, e))
				}
				for (q(), o = l.length; o < t.length; o += 1) s(o)
				j()
			}
		},
		i(i) {
			if (!n) {
				for (let a = 0; a < l.length; a += 1) h(t[a])
				n = !0
			}
		},
		o(i) {
			t = t.filter(Boolean)
			for (let a = 0; a < t.length; a += 1) m(t[a])
			n = !1
		},
		d(i) {
			i && c(e), de(t, i)
		}
	}
}
function Ft(r) {
	let e, n, l
	var t = r[5].tablerow
	function s(i, a) {
		return { props: { $$slots: { default: [Vt] }, $$scope: { ctx: i } } }
	}
	return (
		t && (e = M(t, s(r))),
		{
			c() {
				e && R(e.$$.fragment), (n = z())
			},
			l(i) {
				e && O(e.$$.fragment, i), (n = z())
			},
			m(i, a) {
				e && E(e, i, a), _(i, n, a), (l = !0)
			},
			p(i, a) {
				if (a & 32 && t !== (t = i[5].tablerow)) {
					if (e) {
						q()
						const o = e
						m(o.$$.fragment, 1, 0, () => {
							S(o, 1)
						}),
							j()
					}
					t
						? ((e = M(t, s(i))), R(e.$$.fragment), h(e.$$.fragment, 1), E(e, n.parentNode, n))
						: (e = null)
				} else if (t) {
					const o = {}
					a & 8388708 && (o.$$scope = { dirty: a, ctx: i }), e.$set(o)
				}
			},
			i(i) {
				l || (e && h(e.$$.fragment, i), (l = !0))
			},
			o(i) {
				e && m(e.$$.fragment, i), (l = !1)
			},
			d(i) {
				i && c(n), e && S(e, i)
			}
		}
	)
}
function Kt(r) {
	let e, n
	return (
		(e = new $e({ props: { tokens: r[13].tokens, renderers: r[5] } })),
		{
			c() {
				R(e.$$.fragment)
			},
			l(l) {
				O(e.$$.fragment, l)
			},
			m(l, t) {
				E(e, l, t), (n = !0)
			},
			p(l, t) {
				const s = {}
				t & 8 && (s.tokens = l[13].tokens), t & 32 && (s.renderers = l[5]), e.$set(s)
			},
			i(l) {
				n || (h(e.$$.fragment, l), (n = !0))
			},
			o(l) {
				m(e.$$.fragment, l), (n = !1)
			},
			d(l) {
				S(e, l)
			}
		}
	)
}
function Fe(r) {
	let e, n, l
	var t = r[5].tablecell
	function s(i, a) {
		return {
			props: {
				header: !1,
				align: i[6].align[i[15]] || 'center',
				$$slots: { default: [Kt] },
				$$scope: { ctx: i }
			}
		}
	}
	return (
		t && (e = M(t, s(r))),
		{
			c() {
				e && R(e.$$.fragment), (n = z())
			},
			l(i) {
				e && O(e.$$.fragment, i), (n = z())
			},
			m(i, a) {
				e && E(e, i, a), _(i, n, a), (l = !0)
			},
			p(i, a) {
				if (a & 32 && t !== (t = i[5].tablecell)) {
					if (e) {
						q()
						const o = e
						m(o.$$.fragment, 1, 0, () => {
							S(o, 1)
						}),
							j()
					}
					t
						? ((e = M(t, s(i))), R(e.$$.fragment), h(e.$$.fragment, 1), E(e, n.parentNode, n))
						: (e = null)
				} else if (t) {
					const o = {}
					a & 64 && (o.align = i[6].align[i[15]] || 'center'),
						a & 8388648 && (o.$$scope = { dirty: a, ctx: i }),
						e.$set(o)
				}
			},
			i(i) {
				l || (e && h(e.$$.fragment, i), (l = !0))
			},
			o(i) {
				e && m(e.$$.fragment, i), (l = !1)
			},
			d(i) {
				i && c(n), e && S(e, i)
			}
		}
	)
}
function Yt(r) {
	let e,
		n,
		l = se(r[10]),
		t = []
	for (let i = 0; i < l.length; i += 1) t[i] = Fe(Me(r, l, i))
	const s = (i) =>
		m(t[i], 1, 1, () => {
			t[i] = null
		})
	return {
		c() {
			for (let i = 0; i < t.length; i += 1) t[i].c()
			e = ee()
		},
		l(i) {
			for (let a = 0; a < t.length; a += 1) t[a].l(i)
			e = te(i)
		},
		m(i, a) {
			for (let o = 0; o < t.length; o += 1) t[o] && t[o].m(i, a)
			_(i, e, a), (n = !0)
		},
		p(i, a) {
			if (a & 104) {
				l = se(i[10])
				let o
				for (o = 0; o < l.length; o += 1) {
					const f = Me(i, l, o)
					t[o]
						? (t[o].p(f, a), h(t[o], 1))
						: ((t[o] = Fe(f)), t[o].c(), h(t[o], 1), t[o].m(e.parentNode, e))
				}
				for (q(), o = l.length; o < t.length; o += 1) s(o)
				j()
			}
		},
		i(i) {
			if (!n) {
				for (let a = 0; a < l.length; a += 1) h(t[a])
				n = !0
			}
		},
		o(i) {
			t = t.filter(Boolean)
			for (let a = 0; a < t.length; a += 1) m(t[a])
			n = !1
		},
		d(i) {
			i && c(e), de(t, i)
		}
	}
}
function Ke(r) {
	let e, n, l
	var t = r[5].tablerow
	function s(i, a) {
		return { props: { $$slots: { default: [Yt] }, $$scope: { ctx: i } } }
	}
	return (
		t && (e = M(t, s(r))),
		{
			c() {
				e && R(e.$$.fragment), (n = z())
			},
			l(i) {
				e && O(e.$$.fragment, i), (n = z())
			},
			m(i, a) {
				e && E(e, i, a), _(i, n, a), (l = !0)
			},
			p(i, a) {
				if (a & 32 && t !== (t = i[5].tablerow)) {
					if (e) {
						q()
						const o = e
						m(o.$$.fragment, 1, 0, () => {
							S(o, 1)
						}),
							j()
					}
					t
						? ((e = M(t, s(i))), R(e.$$.fragment), h(e.$$.fragment, 1), E(e, n.parentNode, n))
						: (e = null)
				} else if (t) {
					const o = {}
					a & 8388712 && (o.$$scope = { dirty: a, ctx: i }), e.$set(o)
				}
			},
			i(i) {
				l || (e && h(e.$$.fragment, i), (l = !0))
			},
			o(i) {
				e && m(e.$$.fragment, i), (l = !1)
			},
			d(i) {
				i && c(n), e && S(e, i)
			}
		}
	)
}
function Jt(r) {
	let e,
		n,
		l = se(r[3]),
		t = []
	for (let i = 0; i < l.length; i += 1) t[i] = Ke(He(r, l, i))
	const s = (i) =>
		m(t[i], 1, 1, () => {
			t[i] = null
		})
	return {
		c() {
			for (let i = 0; i < t.length; i += 1) t[i].c()
			e = z()
		},
		l(i) {
			for (let a = 0; a < t.length; a += 1) t[a].l(i)
			e = z()
		},
		m(i, a) {
			for (let o = 0; o < t.length; o += 1) t[o] && t[o].m(i, a)
			_(i, e, a), (n = !0)
		},
		p(i, a) {
			if (a & 104) {
				l = se(i[3])
				let o
				for (o = 0; o < l.length; o += 1) {
					const f = He(i, l, o)
					t[o]
						? (t[o].p(f, a), h(t[o], 1))
						: ((t[o] = Ke(f)), t[o].c(), h(t[o], 1), t[o].m(e.parentNode, e))
				}
				for (q(), o = l.length; o < t.length; o += 1) s(o)
				j()
			}
		},
		i(i) {
			if (!n) {
				for (let a = 0; a < l.length; a += 1) h(t[a])
				n = !0
			}
		},
		o(i) {
			t = t.filter(Boolean)
			for (let a = 0; a < t.length; a += 1) m(t[a])
			n = !1
		},
		d(i) {
			i && c(e), de(t, i)
		}
	}
}
function en(r) {
	let e, n, l, t, s
	var i = r[5].tablehead
	function a(u, d) {
		return { props: { $$slots: { default: [Ft] }, $$scope: { ctx: u } } }
	}
	i && (e = M(i, a(r)))
	var o = r[5].tablebody
	function f(u, d) {
		return { props: { $$slots: { default: [Jt] }, $$scope: { ctx: u } } }
	}
	return (
		o && (l = M(o, f(r))),
		{
			c() {
				e && R(e.$$.fragment), (n = ee()), l && R(l.$$.fragment), (t = z())
			},
			l(u) {
				e && O(e.$$.fragment, u), (n = te(u)), l && O(l.$$.fragment, u), (t = z())
			},
			m(u, d) {
				e && E(e, u, d), _(u, n, d), l && E(l, u, d), _(u, t, d), (s = !0)
			},
			p(u, d) {
				if (d & 32 && i !== (i = u[5].tablehead)) {
					if (e) {
						q()
						const p = e
						m(p.$$.fragment, 1, 0, () => {
							S(p, 1)
						}),
							j()
					}
					i
						? ((e = M(i, a(u))), R(e.$$.fragment), h(e.$$.fragment, 1), E(e, n.parentNode, n))
						: (e = null)
				} else if (i) {
					const p = {}
					d & 8388708 && (p.$$scope = { dirty: d, ctx: u }), e.$set(p)
				}
				if (d & 32 && o !== (o = u[5].tablebody)) {
					if (l) {
						q()
						const p = l
						m(p.$$.fragment, 1, 0, () => {
							S(p, 1)
						}),
							j()
					}
					o
						? ((l = M(o, f(u))), R(l.$$.fragment), h(l.$$.fragment, 1), E(l, t.parentNode, t))
						: (l = null)
				} else if (o) {
					const p = {}
					d & 8388712 && (p.$$scope = { dirty: d, ctx: u }), l.$set(p)
				}
			},
			i(u) {
				s || (e && h(e.$$.fragment, u), l && h(l.$$.fragment, u), (s = !0))
			},
			o(u) {
				e && m(e.$$.fragment, u), l && m(l.$$.fragment, u), (s = !1)
			},
			d(u) {
				u && (c(n), c(t)), e && S(e, u), l && S(l, u)
			}
		}
	)
}
function Ye(r) {
	let e, n
	const l = [r[7], { renderers: r[5] }]
	let t = {}
	for (let s = 0; s < l.length; s += 1) t = le(t, l[s])
	return (
		(e = new $e({ props: t })),
		{
			c() {
				R(e.$$.fragment)
			},
			l(s) {
				O(e.$$.fragment, s)
			},
			m(s, i) {
				E(e, s, i), (n = !0)
			},
			p(s, i) {
				const a = i & 34 ? ue(l, [i & 2 && ce(s[7]), i & 32 && { renderers: s[5] }]) : {}
				e.$set(a)
			},
			i(s) {
				n || (h(e.$$.fragment, s), (n = !0))
			},
			o(s) {
				m(e.$$.fragment, s), (n = !1)
			},
			d(s) {
				S(e, s)
			}
		}
	)
}
function tn(r) {
	let e, n, l, t
	const s = [Lt, Pt],
		i = []
	function a(o, f) {
		return o[0] ? (o[5][o[0]] ? 1 : -1) : 0
	}
	return (
		~(e = a(r)) && (n = i[e] = s[e](r)),
		{
			c() {
				n && n.c(), (l = z())
			},
			l(o) {
				n && n.l(o), (l = z())
			},
			m(o, f) {
				~e && i[e].m(o, f), _(o, l, f), (t = !0)
			},
			p(o, [f]) {
				let u = e
				;(e = a(o)),
					e === u
						? ~e && i[e].p(o, f)
						: (n &&
								(q(),
								m(i[u], 1, 1, () => {
									i[u] = null
								}),
								j()),
							~e
								? ((n = i[e]),
									n ? n.p(o, f) : ((n = i[e] = s[e](o)), n.c()),
									h(n, 1),
									n.m(l.parentNode, l))
								: (n = null))
			},
			i(o) {
				t || (h(n), (t = !0))
			},
			o(o) {
				m(n), (t = !1)
			},
			d(o) {
				o && c(l), ~e && i[e].d(o)
			}
		}
	)
}
function nn(r, e, n) {
	const l = ['type', 'tokens', 'header', 'rows', 'ordered', 'renderers']
	let t = qe(e, l),
		{ type: s = void 0 } = e,
		{ tokens: i = void 0 } = e,
		{ header: a = void 0 } = e,
		{ rows: o = void 0 } = e,
		{ ordered: f = !1 } = e,
		{ renderers: u } = e
	return (
		Nt(),
		(r.$$set = (d) => {
			;(e = le(le({}, e), Ne(d))),
				n(6, (t = qe(e, l))),
				'type' in d && n(0, (s = d.type)),
				'tokens' in d && n(1, (i = d.tokens)),
				'header' in d && n(2, (a = d.header)),
				'rows' in d && n(3, (o = d.rows)),
				'ordered' in d && n(4, (f = d.ordered)),
				'renderers' in d && n(5, (u = d.renderers))
		}),
		[s, i, a, o, f, u, t]
	)
}
let $e = class extends U {
	constructor(e) {
		super(),
			H(this, e, nn, tn, Z, { type: 0, tokens: 1, header: 2, rows: 3, ordered: 4, renderers: 5 })
	}
}
function De() {
	return {
		async: !1,
		baseUrl: null,
		breaks: !1,
		extensions: null,
		gfm: !0,
		headerIds: !0,
		headerPrefix: '',
		highlight: null,
		hooks: null,
		langPrefix: 'language-',
		mangle: !0,
		pedantic: !1,
		renderer: null,
		sanitize: !1,
		sanitizer: null,
		silent: !1,
		smartypants: !1,
		tokenizer: null,
		walkTokens: null,
		xhtml: !1
	}
}
let me = De()
function ht(r) {
	me = r
}
const pt = /[&<>"']/,
	ln = new RegExp(pt.source, 'g'),
	dt = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
	sn = new RegExp(dt.source, 'g'),
	rn = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' },
	Je = (r) => rn[r]
function J(r, e) {
	if (e) {
		if (pt.test(r)) return r.replace(ln, Je)
	} else if (dt.test(r)) return r.replace(sn, Je)
	return r
}
const on = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi
function mt(r) {
	return r.replace(
		on,
		(e, n) => (
			(n = n.toLowerCase()),
			n === 'colon'
				? ':'
				: n.charAt(0) === '#'
					? n.charAt(1) === 'x'
						? String.fromCharCode(parseInt(n.substring(2), 16))
						: String.fromCharCode(+n.substring(1))
					: ''
		)
	)
}
const an = /(^|[^\[])\^/g
function B(r, e) {
	;(r = typeof r == 'string' ? r : r.source), (e = e || '')
	const n = {
		replace: (l, t) => ((t = t.source || t), (t = t.replace(an, '$1')), (r = r.replace(l, t)), n),
		getRegex: () => new RegExp(r, e)
	}
	return n
}
const fn = /[^\w:]/g,
	un = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i
function et(r, e, n) {
	if (r) {
		let l
		try {
			l = decodeURIComponent(mt(n)).replace(fn, '').toLowerCase()
		} catch {
			return null
		}
		if (l.indexOf('javascript:') === 0 || l.indexOf('vbscript:') === 0 || l.indexOf('data:') === 0)
			return null
	}
	e && !un.test(n) && (n = dn(e, n))
	try {
		n = encodeURI(n).replace(/%25/g, '%')
	} catch {
		return null
	}
	return n
}
const ze = {},
	cn = /^[^:]+:\/*[^/]*$/,
	hn = /^([^:]+:)[\s\S]*$/,
	pn = /^([^:]+:\/*[^/]*)[\s\S]*$/
function dn(r, e) {
	ze[' ' + r] || (cn.test(r) ? (ze[' ' + r] = r + '/') : (ze[' ' + r] = Te(r, '/', !0))),
		(r = ze[' ' + r])
	const n = r.indexOf(':') === -1
	return e.substring(0, 2) === '//'
		? n
			? e
			: r.replace(hn, '$1') + e
		: e.charAt(0) === '/'
			? n
				? e
				: r.replace(pn, '$1') + e
			: r + e
}
const Ie = { exec: function () {} }
function tt(r, e) {
	const n = r.replace(/\|/g, (s, i, a) => {
			let o = !1,
				f = i
			for (; --f >= 0 && a[f] === '\\'; ) o = !o
			return o ? '|' : ' |'
		}),
		l = n.split(/ \|/)
	let t = 0
	if ((l[0].trim() || l.shift(), l.length > 0 && !l[l.length - 1].trim() && l.pop(), l.length > e))
		l.splice(e)
	else for (; l.length < e; ) l.push('')
	for (; t < l.length; t++) l[t] = l[t].trim().replace(/\\\|/g, '|')
	return l
}
function Te(r, e, n) {
	const l = r.length
	if (l === 0) return ''
	let t = 0
	for (; t < l; ) {
		const s = r.charAt(l - t - 1)
		if (s === e && !n) t++
		else if (s !== e && n) t++
		else break
	}
	return r.slice(0, l - t)
}
function mn(r, e) {
	if (r.indexOf(e[1]) === -1) return -1
	const n = r.length
	let l = 0,
		t = 0
	for (; t < n; t++)
		if (r[t] === '\\') t++
		else if (r[t] === e[0]) l++
		else if (r[t] === e[1] && (l--, l < 0)) return t
	return -1
}
function gn(r, e) {
	!r ||
		r.silent ||
		(e &&
			console.warn(
				'marked(): callback is deprecated since version 5.0.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/using_pro#async'
			),
		(r.sanitize || r.sanitizer) &&
			console.warn(
				'marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options'
			),
		(r.highlight || r.langPrefix !== 'language-') &&
			console.warn(
				'marked(): highlight and langPrefix parameters are deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-highlight.'
			),
		r.mangle &&
			console.warn(
				'marked(): mangle parameter is enabled by default, but is deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install https://www.npmjs.com/package/marked-mangle, or disable by setting `{mangle: false}`.'
			),
		r.baseUrl &&
			console.warn(
				'marked(): baseUrl parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-base-url.'
			),
		r.smartypants &&
			console.warn(
				'marked(): smartypants parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-smartypants.'
			),
		r.xhtml &&
			console.warn(
				'marked(): xhtml parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-xhtml.'
			),
		(r.headerIds || r.headerPrefix) &&
			console.warn(
				'marked(): headerIds and headerPrefix parameters enabled by default, but are deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install  https://www.npmjs.com/package/marked-gfm-heading-id, or disable by setting `{headerIds: false}`.'
			))
}
function nt(r, e, n, l) {
	const t = e.href,
		s = e.title ? J(e.title) : null,
		i = r[1].replace(/\\([\[\]])/g, '$1')
	if (r[0].charAt(0) !== '!') {
		l.state.inLink = !0
		const a = { type: 'link', raw: n, href: t, title: s, text: i, tokens: l.inlineTokens(i) }
		return (l.state.inLink = !1), a
	}
	return { type: 'image', raw: n, href: t, title: s, text: J(i) }
}
function _n(r, e) {
	const n = r.match(/^(\s+)(?:```)/)
	if (n === null) return e
	const l = n[1]
	return e
		.split(
			`
`
		)
		.map((t) => {
			const s = t.match(/^\s+/)
			if (s === null) return t
			const [i] = s
			return i.length >= l.length ? t.slice(l.length) : t
		}).join(`
`)
}
class Re {
	constructor(e) {
		this.options = e || me
	}
	space(e) {
		const n = this.rules.block.newline.exec(e)
		if (n && n[0].length > 0) return { type: 'space', raw: n[0] }
	}
	code(e) {
		const n = this.rules.block.code.exec(e)
		if (n) {
			const l = n[0].replace(/^ {1,4}/gm, '')
			return {
				type: 'code',
				raw: n[0],
				codeBlockStyle: 'indented',
				text: this.options.pedantic
					? l
					: Te(
							l,
							`
`
						)
			}
		}
	}
	fences(e) {
		const n = this.rules.block.fences.exec(e)
		if (n) {
			const l = n[0],
				t = _n(l, n[3] || '')
			return {
				type: 'code',
				raw: l,
				lang: n[2] ? n[2].trim().replace(this.rules.inline._escapes, '$1') : n[2],
				text: t
			}
		}
	}
	heading(e) {
		const n = this.rules.block.heading.exec(e)
		if (n) {
			let l = n[2].trim()
			if (/#$/.test(l)) {
				const t = Te(l, '#')
				;(this.options.pedantic || !t || / $/.test(t)) && (l = t.trim())
			}
			return {
				type: 'heading',
				raw: n[0],
				depth: n[1].length,
				text: l,
				tokens: this.lexer.inline(l)
			}
		}
	}
	hr(e) {
		const n = this.rules.block.hr.exec(e)
		if (n) return { type: 'hr', raw: n[0] }
	}
	blockquote(e) {
		const n = this.rules.block.blockquote.exec(e)
		if (n) {
			const l = n[0].replace(/^ *>[ \t]?/gm, ''),
				t = this.lexer.state.top
			this.lexer.state.top = !0
			const s = this.lexer.blockTokens(l)
			return (this.lexer.state.top = t), { type: 'blockquote', raw: n[0], tokens: s, text: l }
		}
	}
	list(e) {
		let n = this.rules.block.list.exec(e)
		if (n) {
			let l,
				t,
				s,
				i,
				a,
				o,
				f,
				u,
				d,
				p,
				g,
				b,
				k = n[1].trim()
			const P = k.length > 1,
				T = {
					type: 'list',
					raw: '',
					ordered: P,
					start: P ? +k.slice(0, -1) : '',
					loose: !1,
					items: []
				}
			;(k = P ? `\\d{1,9}\\${k.slice(-1)}` : `\\${k}`),
				this.options.pedantic && (k = P ? k : '[*+-]')
			const A = new RegExp(`^( {0,3}${k})((?:[	 ][^\\n]*)?(?:\\n|$))`)
			for (; e && ((b = !1), !(!(n = A.exec(e)) || this.rules.block.hr.test(e))); ) {
				if (
					((l = n[0]),
					(e = e.substring(l.length)),
					(u = n[2]
						.split(
							`
`,
							1
						)[0]
						.replace(/^\t+/, (Y) => ' '.repeat(3 * Y.length))),
					(d = e.split(
						`
`,
						1
					)[0]),
					this.options.pedantic
						? ((i = 2), (g = u.trimLeft()))
						: ((i = n[2].search(/[^ ]/)),
							(i = i > 4 ? 1 : i),
							(g = u.slice(i)),
							(i += n[1].length)),
					(o = !1),
					!u &&
						/^ *$/.test(d) &&
						((l +=
							d +
							`
`),
						(e = e.substring(d.length + 1)),
						(b = !0)),
					!b)
				) {
					const Y = new RegExp(
							`^ {0,${Math.min(3, i - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`
						),
						N = new RegExp(
							`^ {0,${Math.min(3, i - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`
						),
						re = new RegExp(`^ {0,${Math.min(3, i - 1)}}(?:\`\`\`|~~~)`),
						w = new RegExp(`^ {0,${Math.min(3, i - 1)}}#`)
					for (
						;
						e &&
						((p = e.split(
							`
`,
							1
						)[0]),
						(d = p),
						this.options.pedantic && (d = d.replace(/^ {1,4}(?=( {4})*[^ ])/g, '  ')),
						!(re.test(d) || w.test(d) || Y.test(d) || N.test(e)));

					) {
						if (d.search(/[^ ]/) >= i || !d.trim())
							g +=
								`
` + d.slice(i)
						else {
							if (o || u.search(/[^ ]/) >= 4 || re.test(u) || w.test(u) || N.test(u)) break
							g +=
								`
` + d
						}
						!o && !d.trim() && (o = !0),
							(l +=
								p +
								`
`),
							(e = e.substring(p.length + 1)),
							(u = d.slice(i))
					}
				}
				T.loose || (f ? (T.loose = !0) : /\n *\n *$/.test(l) && (f = !0)),
					this.options.gfm &&
						((t = /^\[[ xX]\] /.exec(g)),
						t && ((s = t[0] !== '[ ] '), (g = g.replace(/^\[[ xX]\] +/, '')))),
					T.items.push({ type: 'list_item', raw: l, task: !!t, checked: s, loose: !1, text: g }),
					(T.raw += l)
			}
			;(T.items[T.items.length - 1].raw = l.trimRight()),
				(T.items[T.items.length - 1].text = g.trimRight()),
				(T.raw = T.raw.trimRight())
			const V = T.items.length
			for (a = 0; a < V; a++)
				if (
					((this.lexer.state.top = !1),
					(T.items[a].tokens = this.lexer.blockTokens(T.items[a].text, [])),
					!T.loose)
				) {
					const Y = T.items[a].tokens.filter((re) => re.type === 'space'),
						N = Y.length > 0 && Y.some((re) => /\n.*\n/.test(re.raw))
					T.loose = N
				}
			if (T.loose) for (a = 0; a < V; a++) T.items[a].loose = !0
			return T
		}
	}
	html(e) {
		const n = this.rules.block.html.exec(e)
		if (n) {
			const l = {
				type: 'html',
				block: !0,
				raw: n[0],
				pre: !this.options.sanitizer && (n[1] === 'pre' || n[1] === 'script' || n[1] === 'style'),
				text: n[0]
			}
			if (this.options.sanitize) {
				const t = this.options.sanitizer ? this.options.sanitizer(n[0]) : J(n[0])
				;(l.type = 'paragraph'), (l.text = t), (l.tokens = this.lexer.inline(t))
			}
			return l
		}
	}
	def(e) {
		const n = this.rules.block.def.exec(e)
		if (n) {
			const l = n[1].toLowerCase().replace(/\s+/g, ' '),
				t = n[2] ? n[2].replace(/^<(.*)>$/, '$1').replace(this.rules.inline._escapes, '$1') : '',
				s = n[3]
					? n[3].substring(1, n[3].length - 1).replace(this.rules.inline._escapes, '$1')
					: n[3]
			return { type: 'def', tag: l, raw: n[0], href: t, title: s }
		}
	}
	table(e) {
		const n = this.rules.block.table.exec(e)
		if (n) {
			const l = {
				type: 'table',
				header: tt(n[1]).map((t) => ({ text: t })),
				align: n[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
				rows:
					n[3] && n[3].trim()
						? n[3].replace(/\n[ \t]*$/, '').split(`
`)
						: []
			}
			if (l.header.length === l.align.length) {
				l.raw = n[0]
				let t = l.align.length,
					s,
					i,
					a,
					o
				for (s = 0; s < t; s++)
					/^ *-+: *$/.test(l.align[s])
						? (l.align[s] = 'right')
						: /^ *:-+: *$/.test(l.align[s])
							? (l.align[s] = 'center')
							: /^ *:-+ *$/.test(l.align[s])
								? (l.align[s] = 'left')
								: (l.align[s] = null)
				for (t = l.rows.length, s = 0; s < t; s++)
					l.rows[s] = tt(l.rows[s], l.header.length).map((f) => ({ text: f }))
				for (t = l.header.length, i = 0; i < t; i++)
					l.header[i].tokens = this.lexer.inline(l.header[i].text)
				for (t = l.rows.length, i = 0; i < t; i++)
					for (o = l.rows[i], a = 0; a < o.length; a++) o[a].tokens = this.lexer.inline(o[a].text)
				return l
			}
		}
	}
	lheading(e) {
		const n = this.rules.block.lheading.exec(e)
		if (n)
			return {
				type: 'heading',
				raw: n[0],
				depth: n[2].charAt(0) === '=' ? 1 : 2,
				text: n[1],
				tokens: this.lexer.inline(n[1])
			}
	}
	paragraph(e) {
		const n = this.rules.block.paragraph.exec(e)
		if (n) {
			const l =
				n[1].charAt(n[1].length - 1) ===
				`
`
					? n[1].slice(0, -1)
					: n[1]
			return { type: 'paragraph', raw: n[0], text: l, tokens: this.lexer.inline(l) }
		}
	}
	text(e) {
		const n = this.rules.block.text.exec(e)
		if (n) return { type: 'text', raw: n[0], text: n[0], tokens: this.lexer.inline(n[0]) }
	}
	escape(e) {
		const n = this.rules.inline.escape.exec(e)
		if (n) return { type: 'escape', raw: n[0], text: J(n[1]) }
	}
	tag(e) {
		const n = this.rules.inline.tag.exec(e)
		if (n)
			return (
				!this.lexer.state.inLink && /^<a /i.test(n[0])
					? (this.lexer.state.inLink = !0)
					: this.lexer.state.inLink && /^<\/a>/i.test(n[0]) && (this.lexer.state.inLink = !1),
				!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(n[0])
					? (this.lexer.state.inRawBlock = !0)
					: this.lexer.state.inRawBlock &&
						/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0]) &&
						(this.lexer.state.inRawBlock = !1),
				{
					type: this.options.sanitize ? 'text' : 'html',
					raw: n[0],
					inLink: this.lexer.state.inLink,
					inRawBlock: this.lexer.state.inRawBlock,
					block: !1,
					text: this.options.sanitize
						? this.options.sanitizer
							? this.options.sanitizer(n[0])
							: J(n[0])
						: n[0]
				}
			)
	}
	link(e) {
		const n = this.rules.inline.link.exec(e)
		if (n) {
			const l = n[2].trim()
			if (!this.options.pedantic && /^</.test(l)) {
				if (!/>$/.test(l)) return
				const i = Te(l.slice(0, -1), '\\')
				if ((l.length - i.length) % 2 === 0) return
			} else {
				const i = mn(n[2], '()')
				if (i > -1) {
					const o = (n[0].indexOf('!') === 0 ? 5 : 4) + n[1].length + i
					;(n[2] = n[2].substring(0, i)), (n[0] = n[0].substring(0, o).trim()), (n[3] = '')
				}
			}
			let t = n[2],
				s = ''
			if (this.options.pedantic) {
				const i = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(t)
				i && ((t = i[1]), (s = i[3]))
			} else s = n[3] ? n[3].slice(1, -1) : ''
			return (
				(t = t.trim()),
				/^</.test(t) &&
					(this.options.pedantic && !/>$/.test(l) ? (t = t.slice(1)) : (t = t.slice(1, -1))),
				nt(
					n,
					{
						href: t && t.replace(this.rules.inline._escapes, '$1'),
						title: s && s.replace(this.rules.inline._escapes, '$1')
					},
					n[0],
					this.lexer
				)
			)
		}
	}
	reflink(e, n) {
		let l
		if ((l = this.rules.inline.reflink.exec(e)) || (l = this.rules.inline.nolink.exec(e))) {
			let t = (l[2] || l[1]).replace(/\s+/g, ' ')
			if (((t = n[t.toLowerCase()]), !t)) {
				const s = l[0].charAt(0)
				return { type: 'text', raw: s, text: s }
			}
			return nt(l, t, l[0], this.lexer)
		}
	}
	emStrong(e, n, l = '') {
		let t = this.rules.inline.emStrong.lDelim.exec(e)
		if (!t || (t[3] && l.match(/[\p{L}\p{N}]/u))) return
		if (!(t[1] || t[2] || '') || !l || this.rules.inline.punctuation.exec(l)) {
			const i = t[0].length - 1
			let a,
				o,
				f = i,
				u = 0
			const d =
				t[0][0] === '*'
					? this.rules.inline.emStrong.rDelimAst
					: this.rules.inline.emStrong.rDelimUnd
			for (d.lastIndex = 0, n = n.slice(-1 * e.length + i); (t = d.exec(n)) != null; ) {
				if (((a = t[1] || t[2] || t[3] || t[4] || t[5] || t[6]), !a)) continue
				if (((o = a.length), t[3] || t[4])) {
					f += o
					continue
				} else if ((t[5] || t[6]) && i % 3 && !((i + o) % 3)) {
					u += o
					continue
				}
				if (((f -= o), f > 0)) continue
				o = Math.min(o, o + f + u)
				const p = e.slice(0, i + t.index + o + 1)
				if (Math.min(i, o) % 2) {
					const b = p.slice(1, -1)
					return { type: 'em', raw: p, text: b, tokens: this.lexer.inlineTokens(b) }
				}
				const g = p.slice(2, -2)
				return { type: 'strong', raw: p, text: g, tokens: this.lexer.inlineTokens(g) }
			}
		}
	}
	codespan(e) {
		const n = this.rules.inline.code.exec(e)
		if (n) {
			let l = n[2].replace(/\n/g, ' ')
			const t = /[^ ]/.test(l),
				s = /^ /.test(l) && / $/.test(l)
			return (
				t && s && (l = l.substring(1, l.length - 1)),
				(l = J(l, !0)),
				{ type: 'codespan', raw: n[0], text: l }
			)
		}
	}
	br(e) {
		const n = this.rules.inline.br.exec(e)
		if (n) return { type: 'br', raw: n[0] }
	}
	del(e) {
		const n = this.rules.inline.del.exec(e)
		if (n) return { type: 'del', raw: n[0], text: n[2], tokens: this.lexer.inlineTokens(n[2]) }
	}
	autolink(e, n) {
		const l = this.rules.inline.autolink.exec(e)
		if (l) {
			let t, s
			return (
				l[2] === '@'
					? ((t = J(this.options.mangle ? n(l[1]) : l[1])), (s = 'mailto:' + t))
					: ((t = J(l[1])), (s = t)),
				{ type: 'link', raw: l[0], text: t, href: s, tokens: [{ type: 'text', raw: t, text: t }] }
			)
		}
	}
	url(e, n) {
		let l
		if ((l = this.rules.inline.url.exec(e))) {
			let t, s
			if (l[2] === '@') (t = J(this.options.mangle ? n(l[0]) : l[0])), (s = 'mailto:' + t)
			else {
				let i
				do (i = l[0]), (l[0] = this.rules.inline._backpedal.exec(l[0])[0])
				while (i !== l[0])
				;(t = J(l[0])), l[1] === 'www.' ? (s = 'http://' + l[0]) : (s = l[0])
			}
			return {
				type: 'link',
				raw: l[0],
				text: t,
				href: s,
				tokens: [{ type: 'text', raw: t, text: t }]
			}
		}
	}
	inlineText(e, n) {
		const l = this.rules.inline.text.exec(e)
		if (l) {
			let t
			return (
				this.lexer.state.inRawBlock
					? (t = this.options.sanitize
							? this.options.sanitizer
								? this.options.sanitizer(l[0])
								: J(l[0])
							: l[0])
					: (t = J(this.options.smartypants ? n(l[0]) : l[0])),
				{ type: 'text', raw: l[0], text: t }
			)
		}
	}
}
const v = {
	newline: /^(?: *(?:\n|$))+/,
	code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
	fences:
		/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
	hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
	heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
	blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
	list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
	html: '^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))',
	def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
	table: Ie,
	lheading: /^((?:(?!^bull ).|\n(?!\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
	_paragraph:
		/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
	text: /^[^\n]+/
}
v._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/
v._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/
v.def = B(v.def).replace('label', v._label).replace('title', v._title).getRegex()
v.bullet = /(?:[*+-]|\d{1,9}[.)])/
v.listItemStart = B(/^( *)(bull) */)
	.replace('bull', v.bullet)
	.getRegex()
v.list = B(v.list)
	.replace(/bull/g, v.bullet)
	.replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))')
	.replace('def', '\\n+(?=' + v.def.source + ')')
	.getRegex()
v._tag =
	'address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul'
v._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/
v.html = B(v.html, 'i')
	.replace('comment', v._comment)
	.replace('tag', v._tag)
	.replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/)
	.getRegex()
v.lheading = B(v.lheading).replace(/bull/g, v.bullet).getRegex()
v.paragraph = B(v._paragraph)
	.replace('hr', v.hr)
	.replace('heading', ' {0,3}#{1,6} ')
	.replace('|lheading', '')
	.replace('|table', '')
	.replace('blockquote', ' {0,3}>')
	.replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
	.replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
	.replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
	.replace('tag', v._tag)
	.getRegex()
v.blockquote = B(v.blockquote).replace('paragraph', v.paragraph).getRegex()
v.normal = { ...v }
v.gfm = {
	...v.normal,
	table:
		'^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)'
}
v.gfm.table = B(v.gfm.table)
	.replace('hr', v.hr)
	.replace('heading', ' {0,3}#{1,6} ')
	.replace('blockquote', ' {0,3}>')
	.replace('code', ' {4}[^\\n]')
	.replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
	.replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
	.replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
	.replace('tag', v._tag)
	.getRegex()
v.gfm.paragraph = B(v._paragraph)
	.replace('hr', v.hr)
	.replace('heading', ' {0,3}#{1,6} ')
	.replace('|lheading', '')
	.replace('table', v.gfm.table)
	.replace('blockquote', ' {0,3}>')
	.replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
	.replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
	.replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
	.replace('tag', v._tag)
	.getRegex()
v.pedantic = {
	...v.normal,
	html: B(
		`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
	)
		.replace('comment', v._comment)
		.replace(
			/tag/g,
			'(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b'
		)
		.getRegex(),
	def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
	heading: /^(#{1,6})(.*)(?:\n+|$)/,
	fences: Ie,
	lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
	paragraph: B(v.normal._paragraph)
		.replace('hr', v.hr)
		.replace(
			'heading',
			` *#{1,6} *[^
]`
		)
		.replace('lheading', v.lheading)
		.replace('blockquote', ' {0,3}>')
		.replace('|fences', '')
		.replace('|list', '')
		.replace('|html', '')
		.getRegex()
}
const $ = {
	escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
	autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
	url: Ie,
	tag: '^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
	link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
	reflink: /^!?\[(label)\]\[(ref)\]/,
	nolink: /^!?\[(ref)\](?:\[\])?/,
	reflinkSearch: 'reflink|nolink(?!\\()',
	emStrong: {
		lDelim: /^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,
		rDelimAst:
			/^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,
		rDelimUnd:
			/^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/
	},
	code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
	br: /^( {2,}|\\)\n(?!\s*$)/,
	del: Ie,
	text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
	punctuation: /^((?![*_])[\spunctuation])/
}
$._punctuation = '\\p{P}$+<=>`^|~'
$.punctuation = B($.punctuation, 'u')
	.replace(/punctuation/g, $._punctuation)
	.getRegex()
$.blockSkip = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g
$.anyPunctuation = /\\[punct]/g
$._escapes = /\\([punct])/g
$._comment = B(v._comment).replace('(?:-->|$)', '-->').getRegex()
$.emStrong.lDelim = B($.emStrong.lDelim, 'u').replace(/punct/g, $._punctuation).getRegex()
$.emStrong.rDelimAst = B($.emStrong.rDelimAst, 'gu').replace(/punct/g, $._punctuation).getRegex()
$.emStrong.rDelimUnd = B($.emStrong.rDelimUnd, 'gu').replace(/punct/g, $._punctuation).getRegex()
$.anyPunctuation = B($.anyPunctuation, 'gu').replace(/punct/g, $._punctuation).getRegex()
$._escapes = B($._escapes, 'gu').replace(/punct/g, $._punctuation).getRegex()
$._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/
$._email =
	/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/
$.autolink = B($.autolink).replace('scheme', $._scheme).replace('email', $._email).getRegex()
$._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/
$.tag = B($.tag).replace('comment', $._comment).replace('attribute', $._attribute).getRegex()
$._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/
$._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/
$._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/
$.link = B($.link)
	.replace('label', $._label)
	.replace('href', $._href)
	.replace('title', $._title)
	.getRegex()
$.reflink = B($.reflink).replace('label', $._label).replace('ref', v._label).getRegex()
$.nolink = B($.nolink).replace('ref', v._label).getRegex()
$.reflinkSearch = B($.reflinkSearch, 'g')
	.replace('reflink', $.reflink)
	.replace('nolink', $.nolink)
	.getRegex()
$.normal = { ...$ }
$.pedantic = {
	...$.normal,
	strong: {
		start: /^__|\*\*/,
		middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
		endAst: /\*\*(?!\*)/g,
		endUnd: /__(?!_)/g
	},
	em: {
		start: /^_|\*/,
		middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
		endAst: /\*(?!\*)/g,
		endUnd: /_(?!_)/g
	},
	link: B(/^!?\[(label)\]\((.*?)\)/)
		.replace('label', $._label)
		.getRegex(),
	reflink: B(/^!?\[(label)\]\s*\[([^\]]*)\]/)
		.replace('label', $._label)
		.getRegex()
}
$.gfm = {
	...$.normal,
	escape: B($.escape).replace('])', '~|])').getRegex(),
	_extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
	url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
	_backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
	del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
	text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}
$.gfm.url = B($.gfm.url, 'i').replace('email', $.gfm._extended_email).getRegex()
$.breaks = {
	...$.gfm,
	br: B($.br).replace('{2,}', '*').getRegex(),
	text: B($.gfm.text)
		.replace('\\b_', '\\b_| {2,}\\n')
		.replace(/\{2,\}/g, '*')
		.getRegex()
}
function $n(r) {
	return r
		.replace(/---/g, '—')
		.replace(/--/g, '–')
		.replace(/(^|[-\u2014/(\[{"\s])'/g, '$1‘')
		.replace(/'/g, '’')
		.replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1“')
		.replace(/"/g, '”')
		.replace(/\.{3}/g, '…')
}
function lt(r) {
	let e = '',
		n,
		l
	const t = r.length
	for (n = 0; n < t; n++)
		(l = r.charCodeAt(n)), Math.random() > 0.5 && (l = 'x' + l.toString(16)), (e += '&#' + l + ';')
	return e
}
class he {
	constructor(e) {
		;(this.tokens = []),
			(this.tokens.links = Object.create(null)),
			(this.options = e || me),
			(this.options.tokenizer = this.options.tokenizer || new Re()),
			(this.tokenizer = this.options.tokenizer),
			(this.tokenizer.options = this.options),
			(this.tokenizer.lexer = this),
			(this.inlineQueue = []),
			(this.state = { inLink: !1, inRawBlock: !1, top: !0 })
		const n = { block: v.normal, inline: $.normal }
		this.options.pedantic
			? ((n.block = v.pedantic), (n.inline = $.pedantic))
			: this.options.gfm &&
				((n.block = v.gfm), this.options.breaks ? (n.inline = $.breaks) : (n.inline = $.gfm)),
			(this.tokenizer.rules = n)
	}
	static get rules() {
		return { block: v, inline: $ }
	}
	static lex(e, n) {
		return new he(n).lex(e)
	}
	static lexInline(e, n) {
		return new he(n).inlineTokens(e)
	}
	lex(e) {
		;(e = e.replace(
			/\r\n|\r/g,
			`
`
		)),
			this.blockTokens(e, this.tokens)
		let n
		for (; (n = this.inlineQueue.shift()); ) this.inlineTokens(n.src, n.tokens)
		return this.tokens
	}
	blockTokens(e, n = []) {
		this.options.pedantic
			? (e = e.replace(/\t/g, '    ').replace(/^ +$/gm, ''))
			: (e = e.replace(/^( *)(\t+)/gm, (a, o, f) => o + '    '.repeat(f.length)))
		let l, t, s, i
		for (; e; )
			if (
				!(
					this.options.extensions &&
					this.options.extensions.block &&
					this.options.extensions.block.some((a) =>
						(l = a.call({ lexer: this }, e, n))
							? ((e = e.substring(l.raw.length)), n.push(l), !0)
							: !1
					)
				)
			) {
				if ((l = this.tokenizer.space(e))) {
					;(e = e.substring(l.raw.length)),
						l.raw.length === 1 && n.length > 0
							? (n[n.length - 1].raw += `
`)
							: n.push(l)
					continue
				}
				if ((l = this.tokenizer.code(e))) {
					;(e = e.substring(l.raw.length)),
						(t = n[n.length - 1]),
						t && (t.type === 'paragraph' || t.type === 'text')
							? ((t.raw +=
									`
` + l.raw),
								(t.text +=
									`
` + l.text),
								(this.inlineQueue[this.inlineQueue.length - 1].src = t.text))
							: n.push(l)
					continue
				}
				if ((l = this.tokenizer.fences(e))) {
					;(e = e.substring(l.raw.length)), n.push(l)
					continue
				}
				if ((l = this.tokenizer.heading(e))) {
					;(e = e.substring(l.raw.length)), n.push(l)
					continue
				}
				if ((l = this.tokenizer.hr(e))) {
					;(e = e.substring(l.raw.length)), n.push(l)
					continue
				}
				if ((l = this.tokenizer.blockquote(e))) {
					;(e = e.substring(l.raw.length)), n.push(l)
					continue
				}
				if ((l = this.tokenizer.list(e))) {
					;(e = e.substring(l.raw.length)), n.push(l)
					continue
				}
				if ((l = this.tokenizer.html(e))) {
					;(e = e.substring(l.raw.length)), n.push(l)
					continue
				}
				if ((l = this.tokenizer.def(e))) {
					;(e = e.substring(l.raw.length)),
						(t = n[n.length - 1]),
						t && (t.type === 'paragraph' || t.type === 'text')
							? ((t.raw +=
									`
` + l.raw),
								(t.text +=
									`
` + l.raw),
								(this.inlineQueue[this.inlineQueue.length - 1].src = t.text))
							: this.tokens.links[l.tag] ||
								(this.tokens.links[l.tag] = { href: l.href, title: l.title })
					continue
				}
				if ((l = this.tokenizer.table(e))) {
					;(e = e.substring(l.raw.length)), n.push(l)
					continue
				}
				if ((l = this.tokenizer.lheading(e))) {
					;(e = e.substring(l.raw.length)), n.push(l)
					continue
				}
				if (((s = e), this.options.extensions && this.options.extensions.startBlock)) {
					let a = 1 / 0
					const o = e.slice(1)
					let f
					this.options.extensions.startBlock.forEach(function (u) {
						;(f = u.call({ lexer: this }, o)),
							typeof f == 'number' && f >= 0 && (a = Math.min(a, f))
					}),
						a < 1 / 0 && a >= 0 && (s = e.substring(0, a + 1))
				}
				if (this.state.top && (l = this.tokenizer.paragraph(s))) {
					;(t = n[n.length - 1]),
						i && t.type === 'paragraph'
							? ((t.raw +=
									`
` + l.raw),
								(t.text +=
									`
` + l.text),
								this.inlineQueue.pop(),
								(this.inlineQueue[this.inlineQueue.length - 1].src = t.text))
							: n.push(l),
						(i = s.length !== e.length),
						(e = e.substring(l.raw.length))
					continue
				}
				if ((l = this.tokenizer.text(e))) {
					;(e = e.substring(l.raw.length)),
						(t = n[n.length - 1]),
						t && t.type === 'text'
							? ((t.raw +=
									`
` + l.raw),
								(t.text +=
									`
` + l.text),
								this.inlineQueue.pop(),
								(this.inlineQueue[this.inlineQueue.length - 1].src = t.text))
							: n.push(l)
					continue
				}
				if (e) {
					const a = 'Infinite loop on byte: ' + e.charCodeAt(0)
					if (this.options.silent) {
						console.error(a)
						break
					} else throw new Error(a)
				}
			}
		return (this.state.top = !0), n
	}
	inline(e, n = []) {
		return this.inlineQueue.push({ src: e, tokens: n }), n
	}
	inlineTokens(e, n = []) {
		let l,
			t,
			s,
			i = e,
			a,
			o,
			f
		if (this.tokens.links) {
			const u = Object.keys(this.tokens.links)
			if (u.length > 0)
				for (; (a = this.tokenizer.rules.inline.reflinkSearch.exec(i)) != null; )
					u.includes(a[0].slice(a[0].lastIndexOf('[') + 1, -1)) &&
						(i =
							i.slice(0, a.index) +
							'[' +
							'a'.repeat(a[0].length - 2) +
							']' +
							i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))
		}
		for (; (a = this.tokenizer.rules.inline.blockSkip.exec(i)) != null; )
			i =
				i.slice(0, a.index) +
				'[' +
				'a'.repeat(a[0].length - 2) +
				']' +
				i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex)
		for (; (a = this.tokenizer.rules.inline.anyPunctuation.exec(i)) != null; )
			i = i.slice(0, a.index) + '++' + i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex)
		for (; e; )
			if (
				(o || (f = ''),
				(o = !1),
				!(
					this.options.extensions &&
					this.options.extensions.inline &&
					this.options.extensions.inline.some((u) =>
						(l = u.call({ lexer: this }, e, n))
							? ((e = e.substring(l.raw.length)), n.push(l), !0)
							: !1
					)
				))
			) {
				if ((l = this.tokenizer.escape(e))) {
					;(e = e.substring(l.raw.length)), n.push(l)
					continue
				}
				if ((l = this.tokenizer.tag(e))) {
					;(e = e.substring(l.raw.length)),
						(t = n[n.length - 1]),
						t && l.type === 'text' && t.type === 'text'
							? ((t.raw += l.raw), (t.text += l.text))
							: n.push(l)
					continue
				}
				if ((l = this.tokenizer.link(e))) {
					;(e = e.substring(l.raw.length)), n.push(l)
					continue
				}
				if ((l = this.tokenizer.reflink(e, this.tokens.links))) {
					;(e = e.substring(l.raw.length)),
						(t = n[n.length - 1]),
						t && l.type === 'text' && t.type === 'text'
							? ((t.raw += l.raw), (t.text += l.text))
							: n.push(l)
					continue
				}
				if ((l = this.tokenizer.emStrong(e, i, f))) {
					;(e = e.substring(l.raw.length)), n.push(l)
					continue
				}
				if ((l = this.tokenizer.codespan(e))) {
					;(e = e.substring(l.raw.length)), n.push(l)
					continue
				}
				if ((l = this.tokenizer.br(e))) {
					;(e = e.substring(l.raw.length)), n.push(l)
					continue
				}
				if ((l = this.tokenizer.del(e))) {
					;(e = e.substring(l.raw.length)), n.push(l)
					continue
				}
				if ((l = this.tokenizer.autolink(e, lt))) {
					;(e = e.substring(l.raw.length)), n.push(l)
					continue
				}
				if (!this.state.inLink && (l = this.tokenizer.url(e, lt))) {
					;(e = e.substring(l.raw.length)), n.push(l)
					continue
				}
				if (((s = e), this.options.extensions && this.options.extensions.startInline)) {
					let u = 1 / 0
					const d = e.slice(1)
					let p
					this.options.extensions.startInline.forEach(function (g) {
						;(p = g.call({ lexer: this }, d)),
							typeof p == 'number' && p >= 0 && (u = Math.min(u, p))
					}),
						u < 1 / 0 && u >= 0 && (s = e.substring(0, u + 1))
				}
				if ((l = this.tokenizer.inlineText(s, $n))) {
					;(e = e.substring(l.raw.length)),
						l.raw.slice(-1) !== '_' && (f = l.raw.slice(-1)),
						(o = !0),
						(t = n[n.length - 1]),
						t && t.type === 'text' ? ((t.raw += l.raw), (t.text += l.text)) : n.push(l)
					continue
				}
				if (e) {
					const u = 'Infinite loop on byte: ' + e.charCodeAt(0)
					if (this.options.silent) {
						console.error(u)
						break
					} else throw new Error(u)
				}
			}
		return n
	}
}
class Ee {
	constructor(e) {
		this.options = e || me
	}
	code(e, n, l) {
		const t = (n || '').match(/\S*/)[0]
		if (this.options.highlight) {
			const s = this.options.highlight(e, t)
			s != null && s !== e && ((l = !0), (e = s))
		}
		return (
			(e =
				e.replace(/\n$/, '') +
				`
`),
			t
				? '<pre><code class="' +
					this.options.langPrefix +
					J(t) +
					'">' +
					(l ? e : J(e, !0)) +
					`</code></pre>
`
				: '<pre><code>' +
					(l ? e : J(e, !0)) +
					`</code></pre>
`
		)
	}
	blockquote(e) {
		return `<blockquote>
${e}</blockquote>
`
	}
	html(e, n) {
		return e
	}
	heading(e, n, l, t) {
		if (this.options.headerIds) {
			const s = this.options.headerPrefix + t.slug(l)
			return `<h${n} id="${s}">${e}</h${n}>
`
		}
		return `<h${n}>${e}</h${n}>
`
	}
	hr() {
		return this.options.xhtml
			? `<hr/>
`
			: `<hr>
`
	}
	list(e, n, l) {
		const t = n ? 'ol' : 'ul',
			s = n && l !== 1 ? ' start="' + l + '"' : ''
		return (
			'<' +
			t +
			s +
			`>
` +
			e +
			'</' +
			t +
			`>
`
		)
	}
	listitem(e) {
		return `<li>${e}</li>
`
	}
	checkbox(e) {
		return (
			'<input ' +
			(e ? 'checked="" ' : '') +
			'disabled="" type="checkbox"' +
			(this.options.xhtml ? ' /' : '') +
			'> '
		)
	}
	paragraph(e) {
		return `<p>${e}</p>
`
	}
	table(e, n) {
		return (
			n && (n = `<tbody>${n}</tbody>`),
			`<table>
<thead>
` +
				e +
				`</thead>
` +
				n +
				`</table>
`
		)
	}
	tablerow(e) {
		return `<tr>
${e}</tr>
`
	}
	tablecell(e, n) {
		const l = n.header ? 'th' : 'td'
		return (
			(n.align ? `<${l} align="${n.align}">` : `<${l}>`) +
			e +
			`</${l}>
`
		)
	}
	strong(e) {
		return `<strong>${e}</strong>`
	}
	em(e) {
		return `<em>${e}</em>`
	}
	codespan(e) {
		return `<code>${e}</code>`
	}
	br() {
		return this.options.xhtml ? '<br/>' : '<br>'
	}
	del(e) {
		return `<del>${e}</del>`
	}
	link(e, n, l) {
		if (((e = et(this.options.sanitize, this.options.baseUrl, e)), e === null)) return l
		let t = '<a href="' + e + '"'
		return n && (t += ' title="' + n + '"'), (t += '>' + l + '</a>'), t
	}
	image(e, n, l) {
		if (((e = et(this.options.sanitize, this.options.baseUrl, e)), e === null)) return l
		let t = `<img src="${e}" alt="${l}"`
		return n && (t += ` title="${n}"`), (t += this.options.xhtml ? '/>' : '>'), t
	}
	text(e) {
		return e
	}
}
class Oe {
	strong(e) {
		return e
	}
	em(e) {
		return e
	}
	codespan(e) {
		return e
	}
	del(e) {
		return e
	}
	html(e) {
		return e
	}
	text(e) {
		return e
	}
	link(e, n, l) {
		return '' + l
	}
	image(e, n, l) {
		return '' + l
	}
	br() {
		return ''
	}
}
class ye {
	constructor() {
		this.seen = {}
	}
	serialize(e) {
		return e
			.toLowerCase()
			.trim()
			.replace(/<[!\/a-z].*?>/gi, '')
			.replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '')
			.replace(/\s/g, '-')
	}
	getNextSafeSlug(e, n) {
		let l = e,
			t = 0
		if (this.seen.hasOwnProperty(l)) {
			t = this.seen[e]
			do t++, (l = e + '-' + t)
			while (this.seen.hasOwnProperty(l))
		}
		return n || ((this.seen[e] = t), (this.seen[l] = 0)), l
	}
	slug(e, n = {}) {
		const l = this.serialize(e)
		return this.getNextSafeSlug(l, n.dryrun)
	}
}
class pe {
	constructor(e) {
		;(this.options = e || me),
			(this.options.renderer = this.options.renderer || new Ee()),
			(this.renderer = this.options.renderer),
			(this.renderer.options = this.options),
			(this.textRenderer = new Oe()),
			(this.slugger = new ye())
	}
	static parse(e, n) {
		return new pe(n).parse(e)
	}
	static parseInline(e, n) {
		return new pe(n).parseInline(e)
	}
	parse(e, n = !0) {
		let l = '',
			t,
			s,
			i,
			a,
			o,
			f,
			u,
			d,
			p,
			g,
			b,
			k,
			P,
			T,
			A,
			V,
			Y,
			N,
			re
		const w = e.length
		for (t = 0; t < w; t++) {
			if (
				((g = e[t]),
				this.options.extensions &&
					this.options.extensions.renderers &&
					this.options.extensions.renderers[g.type] &&
					((re = this.options.extensions.renderers[g.type].call({ parser: this }, g)),
					re !== !1 ||
						![
							'space',
							'hr',
							'heading',
							'code',
							'table',
							'blockquote',
							'list',
							'html',
							'paragraph',
							'text'
						].includes(g.type)))
			) {
				l += re || ''
				continue
			}
			switch (g.type) {
				case 'space':
					continue
				case 'hr': {
					l += this.renderer.hr()
					continue
				}
				case 'heading': {
					l += this.renderer.heading(
						this.parseInline(g.tokens),
						g.depth,
						mt(this.parseInline(g.tokens, this.textRenderer)),
						this.slugger
					)
					continue
				}
				case 'code': {
					l += this.renderer.code(g.text, g.lang, g.escaped)
					continue
				}
				case 'table': {
					for (d = '', u = '', a = g.header.length, s = 0; s < a; s++)
						u += this.renderer.tablecell(this.parseInline(g.header[s].tokens), {
							header: !0,
							align: g.align[s]
						})
					for (d += this.renderer.tablerow(u), p = '', a = g.rows.length, s = 0; s < a; s++) {
						for (f = g.rows[s], u = '', o = f.length, i = 0; i < o; i++)
							u += this.renderer.tablecell(this.parseInline(f[i].tokens), {
								header: !1,
								align: g.align[i]
							})
						p += this.renderer.tablerow(u)
					}
					l += this.renderer.table(d, p)
					continue
				}
				case 'blockquote': {
					;(p = this.parse(g.tokens)), (l += this.renderer.blockquote(p))
					continue
				}
				case 'list': {
					for (
						b = g.ordered, k = g.start, P = g.loose, a = g.items.length, p = '', s = 0;
						s < a;
						s++
					)
						(A = g.items[s]),
							(V = A.checked),
							(Y = A.task),
							(T = ''),
							A.task &&
								((N = this.renderer.checkbox(V)),
								P
									? A.tokens.length > 0 && A.tokens[0].type === 'paragraph'
										? ((A.tokens[0].text = N + ' ' + A.tokens[0].text),
											A.tokens[0].tokens &&
												A.tokens[0].tokens.length > 0 &&
												A.tokens[0].tokens[0].type === 'text' &&
												(A.tokens[0].tokens[0].text = N + ' ' + A.tokens[0].tokens[0].text))
										: A.tokens.unshift({ type: 'text', text: N })
									: (T += N)),
							(T += this.parse(A.tokens, P)),
							(p += this.renderer.listitem(T, Y, V))
					l += this.renderer.list(p, b, k)
					continue
				}
				case 'html': {
					l += this.renderer.html(g.text, g.block)
					continue
				}
				case 'paragraph': {
					l += this.renderer.paragraph(this.parseInline(g.tokens))
					continue
				}
				case 'text': {
					for (
						p = g.tokens ? this.parseInline(g.tokens) : g.text;
						t + 1 < w && e[t + 1].type === 'text';

					)
						(g = e[++t]),
							(p +=
								`
` + (g.tokens ? this.parseInline(g.tokens) : g.text))
					l += n ? this.renderer.paragraph(p) : p
					continue
				}
				default: {
					const L = 'Token with "' + g.type + '" type was not found.'
					if (this.options.silent) {
						console.error(L)
						return
					} else throw new Error(L)
				}
			}
		}
		return l
	}
	parseInline(e, n) {
		n = n || this.renderer
		let l = '',
			t,
			s,
			i
		const a = e.length
		for (t = 0; t < a; t++) {
			if (
				((s = e[t]),
				this.options.extensions &&
					this.options.extensions.renderers &&
					this.options.extensions.renderers[s.type] &&
					((i = this.options.extensions.renderers[s.type].call({ parser: this }, s)),
					i !== !1 ||
						![
							'escape',
							'html',
							'link',
							'image',
							'strong',
							'em',
							'codespan',
							'br',
							'del',
							'text'
						].includes(s.type)))
			) {
				l += i || ''
				continue
			}
			switch (s.type) {
				case 'escape': {
					l += n.text(s.text)
					break
				}
				case 'html': {
					l += n.html(s.text)
					break
				}
				case 'link': {
					l += n.link(s.href, s.title, this.parseInline(s.tokens, n))
					break
				}
				case 'image': {
					l += n.image(s.href, s.title, s.text)
					break
				}
				case 'strong': {
					l += n.strong(this.parseInline(s.tokens, n))
					break
				}
				case 'em': {
					l += n.em(this.parseInline(s.tokens, n))
					break
				}
				case 'codespan': {
					l += n.codespan(s.text)
					break
				}
				case 'br': {
					l += n.br()
					break
				}
				case 'del': {
					l += n.del(this.parseInline(s.tokens, n))
					break
				}
				case 'text': {
					l += n.text(s.text)
					break
				}
				default: {
					const o = 'Token with "' + s.type + '" type was not found.'
					if (this.options.silent) {
						console.error(o)
						return
					} else throw new Error(o)
				}
			}
		}
		return l
	}
}
class be {
	constructor(e) {
		this.options = e || me
	}
	preprocess(e) {
		return e
	}
	postprocess(e) {
		return e
	}
}
ie(be, 'passThroughHooks', new Set(['preprocess', 'postprocess']))
var we, Le, Se, gt
class kn {
	constructor(...e) {
		Ce(this, we)
		Ce(this, Se)
		ie(this, 'defaults', De())
		ie(this, 'options', this.setOptions)
		ie(this, 'parse', ve(this, we, Le).call(this, he.lex, pe.parse))
		ie(this, 'parseInline', ve(this, we, Le).call(this, he.lexInline, pe.parseInline))
		ie(this, 'Parser', pe)
		ie(this, 'parser', pe.parse)
		ie(this, 'Renderer', Ee)
		ie(this, 'TextRenderer', Oe)
		ie(this, 'Lexer', he)
		ie(this, 'lexer', he.lex)
		ie(this, 'Tokenizer', Re)
		ie(this, 'Slugger', ye)
		ie(this, 'Hooks', be)
		this.use(...e)
	}
	walkTokens(e, n) {
		let l = []
		for (const t of e)
			switch (((l = l.concat(n.call(this, t))), t.type)) {
				case 'table': {
					for (const s of t.header) l = l.concat(this.walkTokens(s.tokens, n))
					for (const s of t.rows) for (const i of s) l = l.concat(this.walkTokens(i.tokens, n))
					break
				}
				case 'list': {
					l = l.concat(this.walkTokens(t.items, n))
					break
				}
				default:
					this.defaults.extensions &&
					this.defaults.extensions.childTokens &&
					this.defaults.extensions.childTokens[t.type]
						? this.defaults.extensions.childTokens[t.type].forEach((s) => {
								l = l.concat(this.walkTokens(t[s], n))
							})
						: t.tokens && (l = l.concat(this.walkTokens(t.tokens, n)))
			}
		return l
	}
	use(...e) {
		const n = this.defaults.extensions || { renderers: {}, childTokens: {} }
		return (
			e.forEach((l) => {
				const t = { ...l }
				if (
					((t.async = this.defaults.async || t.async || !1),
					l.extensions &&
						(l.extensions.forEach((s) => {
							if (!s.name) throw new Error('extension name required')
							if (s.renderer) {
								const i = n.renderers[s.name]
								i
									? (n.renderers[s.name] = function (...a) {
											let o = s.renderer.apply(this, a)
											return o === !1 && (o = i.apply(this, a)), o
										})
									: (n.renderers[s.name] = s.renderer)
							}
							if (s.tokenizer) {
								if (!s.level || (s.level !== 'block' && s.level !== 'inline'))
									throw new Error("extension level must be 'block' or 'inline'")
								n[s.level] ? n[s.level].unshift(s.tokenizer) : (n[s.level] = [s.tokenizer]),
									s.start &&
										(s.level === 'block'
											? n.startBlock
												? n.startBlock.push(s.start)
												: (n.startBlock = [s.start])
											: s.level === 'inline' &&
												(n.startInline ? n.startInline.push(s.start) : (n.startInline = [s.start])))
							}
							s.childTokens && (n.childTokens[s.name] = s.childTokens)
						}),
						(t.extensions = n)),
					l.renderer)
				) {
					const s = this.defaults.renderer || new Ee(this.defaults)
					for (const i in l.renderer) {
						const a = s[i]
						s[i] = (...o) => {
							let f = l.renderer[i].apply(s, o)
							return f === !1 && (f = a.apply(s, o)), f
						}
					}
					t.renderer = s
				}
				if (l.tokenizer) {
					const s = this.defaults.tokenizer || new Re(this.defaults)
					for (const i in l.tokenizer) {
						const a = s[i]
						s[i] = (...o) => {
							let f = l.tokenizer[i].apply(s, o)
							return f === !1 && (f = a.apply(s, o)), f
						}
					}
					t.tokenizer = s
				}
				if (l.hooks) {
					const s = this.defaults.hooks || new be()
					for (const i in l.hooks) {
						const a = s[i]
						be.passThroughHooks.has(i)
							? (s[i] = (o) => {
									if (this.defaults.async)
										return Promise.resolve(l.hooks[i].call(s, o)).then((u) => a.call(s, u))
									const f = l.hooks[i].call(s, o)
									return a.call(s, f)
								})
							: (s[i] = (...o) => {
									let f = l.hooks[i].apply(s, o)
									return f === !1 && (f = a.apply(s, o)), f
								})
					}
					t.hooks = s
				}
				if (l.walkTokens) {
					const s = this.defaults.walkTokens
					t.walkTokens = function (i) {
						let a = []
						return a.push(l.walkTokens.call(this, i)), s && (a = a.concat(s.call(this, i))), a
					}
				}
				this.defaults = { ...this.defaults, ...t }
			}),
			this
		)
	}
	setOptions(e) {
		return (this.defaults = { ...this.defaults, ...e }), this
	}
}
;(we = new WeakSet()),
	(Le = function (e, n) {
		return (l, t, s) => {
			typeof t == 'function' && ((s = t), (t = null))
			const i = { ...t }
			t = { ...this.defaults, ...i }
			const a = ve(this, Se, gt).call(this, t.silent, t.async, s)
			if (typeof l > 'u' || l === null)
				return a(new Error('marked(): input parameter is undefined or null'))
			if (typeof l != 'string')
				return a(
					new Error(
						'marked(): input parameter is of type ' +
							Object.prototype.toString.call(l) +
							', string expected'
					)
				)
			if ((gn(t, s), t.hooks && (t.hooks.options = t), s)) {
				const o = t.highlight
				let f
				try {
					t.hooks && (l = t.hooks.preprocess(l)), (f = e(l, t))
				} catch (p) {
					return a(p)
				}
				const u = (p) => {
					let g
					if (!p)
						try {
							t.walkTokens && this.walkTokens(f, t.walkTokens),
								(g = n(f, t)),
								t.hooks && (g = t.hooks.postprocess(g))
						} catch (b) {
							p = b
						}
					return (t.highlight = o), p ? a(p) : s(null, g)
				}
				if (!o || o.length < 3 || (delete t.highlight, !f.length)) return u()
				let d = 0
				this.walkTokens(f, (p) => {
					p.type === 'code' &&
						(d++,
						setTimeout(() => {
							o(p.text, p.lang, (g, b) => {
								if (g) return u(g)
								b != null && b !== p.text && ((p.text = b), (p.escaped = !0)), d--, d === 0 && u()
							})
						}, 0))
				}),
					d === 0 && u()
				return
			}
			if (t.async)
				return Promise.resolve(t.hooks ? t.hooks.preprocess(l) : l)
					.then((o) => e(o, t))
					.then((o) =>
						t.walkTokens ? Promise.all(this.walkTokens(o, t.walkTokens)).then(() => o) : o
					)
					.then((o) => n(o, t))
					.then((o) => (t.hooks ? t.hooks.postprocess(o) : o))
					.catch(a)
			try {
				t.hooks && (l = t.hooks.preprocess(l))
				const o = e(l, t)
				t.walkTokens && this.walkTokens(o, t.walkTokens)
				let f = n(o, t)
				return t.hooks && (f = t.hooks.postprocess(f)), f
			} catch (o) {
				return a(o)
			}
		}
	}),
	(Se = new WeakSet()),
	(gt = function (e, n, l) {
		return (t) => {
			if (
				((t.message += `
Please report this to https://github.com/markedjs/marked.`),
				e)
			) {
				const s = '<p>An error occurred:</p><pre>' + J(t.message + '', !0) + '</pre>'
				if (n) return Promise.resolve(s)
				if (l) {
					l(null, s)
					return
				}
				return s
			}
			if (n) return Promise.reject(t)
			if (l) {
				l(t)
				return
			}
			throw t
		}
	})
const ge = new kn(me)
function D(r, e, n) {
	return ge.parse(r, e, n)
}
D.options = D.setOptions = function (r) {
	return ge.setOptions(r), (D.defaults = ge.defaults), ht(D.defaults), D
}
D.getDefaults = De
D.defaults = me
D.use = function (...r) {
	return ge.use(...r), (D.defaults = ge.defaults), ht(D.defaults), D
}
D.walkTokens = function (r, e) {
	return ge.walkTokens(r, e)
}
D.parseInline = ge.parseInline
D.Parser = pe
D.parser = pe.parse
D.Renderer = Ee
D.TextRenderer = Oe
D.Lexer = he
D.lexer = he.lex
D.Tokenizer = Re
D.Slugger = ye
D.Hooks = be
D.parse = D
D.options
D.setOptions
D.use
D.walkTokens
D.parseInline
pe.parse
he.lex
const _t = {}
function bn(r) {
	let e
	return {
		c() {
			e = ae(r[1])
		},
		l(n) {
			e = fe(n, r[1])
		},
		m(n, l) {
			_(n, e, l)
		},
		p(n, l) {
			l & 2 && _e(e, n[1])
		},
		i: ne,
		o: ne,
		d(n) {
			n && c(e)
		}
	}
}
function wn(r) {
	let e, n
	const l = r[5].default,
		t = Q(l, r, r[4], null)
	return {
		c() {
			;(e = x('h6')), t && t.c(), this.h()
		},
		l(s) {
			e = I(s, 'H6', { id: !0 })
			var i = C(e)
			t && t.l(i), i.forEach(c), this.h()
		},
		h() {
			y(e, 'id', r[2])
		},
		m(s, i) {
			_(s, e, i), t && t.m(e, null), (n = !0)
		},
		p(s, i) {
			t && t.p && (!n || i & 16) && W(t, l, s, s[4], n ? X(l, s[4], i, null) : G(s[4]), null),
				(!n || i & 4) && y(e, 'id', s[2])
		},
		i(s) {
			n || (h(t, s), (n = !0))
		},
		o(s) {
			m(t, s), (n = !1)
		},
		d(s) {
			s && c(e), t && t.d(s)
		}
	}
}
function vn(r) {
	let e, n
	const l = r[5].default,
		t = Q(l, r, r[4], null)
	return {
		c() {
			;(e = x('h5')), t && t.c(), this.h()
		},
		l(s) {
			e = I(s, 'H5', { id: !0 })
			var i = C(e)
			t && t.l(i), i.forEach(c), this.h()
		},
		h() {
			y(e, 'id', r[2])
		},
		m(s, i) {
			_(s, e, i), t && t.m(e, null), (n = !0)
		},
		p(s, i) {
			t && t.p && (!n || i & 16) && W(t, l, s, s[4], n ? X(l, s[4], i, null) : G(s[4]), null),
				(!n || i & 4) && y(e, 'id', s[2])
		},
		i(s) {
			n || (h(t, s), (n = !0))
		},
		o(s) {
			m(t, s), (n = !1)
		},
		d(s) {
			s && c(e), t && t.d(s)
		}
	}
}
function zn(r) {
	let e, n
	const l = r[5].default,
		t = Q(l, r, r[4], null)
	return {
		c() {
			;(e = x('h4')), t && t.c(), this.h()
		},
		l(s) {
			e = I(s, 'H4', { id: !0 })
			var i = C(e)
			t && t.l(i), i.forEach(c), this.h()
		},
		h() {
			y(e, 'id', r[2])
		},
		m(s, i) {
			_(s, e, i), t && t.m(e, null), (n = !0)
		},
		p(s, i) {
			t && t.p && (!n || i & 16) && W(t, l, s, s[4], n ? X(l, s[4], i, null) : G(s[4]), null),
				(!n || i & 4) && y(e, 'id', s[2])
		},
		i(s) {
			n || (h(t, s), (n = !0))
		},
		o(s) {
			m(t, s), (n = !1)
		},
		d(s) {
			s && c(e), t && t.d(s)
		}
	}
}
function Tn(r) {
	let e, n
	const l = r[5].default,
		t = Q(l, r, r[4], null)
	return {
		c() {
			;(e = x('h3')), t && t.c(), this.h()
		},
		l(s) {
			e = I(s, 'H3', { id: !0 })
			var i = C(e)
			t && t.l(i), i.forEach(c), this.h()
		},
		h() {
			y(e, 'id', r[2])
		},
		m(s, i) {
			_(s, e, i), t && t.m(e, null), (n = !0)
		},
		p(s, i) {
			t && t.p && (!n || i & 16) && W(t, l, s, s[4], n ? X(l, s[4], i, null) : G(s[4]), null),
				(!n || i & 4) && y(e, 'id', s[2])
		},
		i(s) {
			n || (h(t, s), (n = !0))
		},
		o(s) {
			m(t, s), (n = !1)
		},
		d(s) {
			s && c(e), t && t.d(s)
		}
	}
}
function xn(r) {
	let e, n
	const l = r[5].default,
		t = Q(l, r, r[4], null)
	return {
		c() {
			;(e = x('h2')), t && t.c(), this.h()
		},
		l(s) {
			e = I(s, 'H2', { id: !0 })
			var i = C(e)
			t && t.l(i), i.forEach(c), this.h()
		},
		h() {
			y(e, 'id', r[2])
		},
		m(s, i) {
			_(s, e, i), t && t.m(e, null), (n = !0)
		},
		p(s, i) {
			t && t.p && (!n || i & 16) && W(t, l, s, s[4], n ? X(l, s[4], i, null) : G(s[4]), null),
				(!n || i & 4) && y(e, 'id', s[2])
		},
		i(s) {
			n || (h(t, s), (n = !0))
		},
		o(s) {
			m(t, s), (n = !1)
		},
		d(s) {
			s && c(e), t && t.d(s)
		}
	}
}
function In(r) {
	let e, n
	const l = r[5].default,
		t = Q(l, r, r[4], null)
	return {
		c() {
			;(e = x('h1')), t && t.c(), this.h()
		},
		l(s) {
			e = I(s, 'H1', { id: !0 })
			var i = C(e)
			t && t.l(i), i.forEach(c), this.h()
		},
		h() {
			y(e, 'id', r[2])
		},
		m(s, i) {
			_(s, e, i), t && t.m(e, null), (n = !0)
		},
		p(s, i) {
			t && t.p && (!n || i & 16) && W(t, l, s, s[4], n ? X(l, s[4], i, null) : G(s[4]), null),
				(!n || i & 4) && y(e, 'id', s[2])
		},
		i(s) {
			n || (h(t, s), (n = !0))
		},
		o(s) {
			m(t, s), (n = !1)
		},
		d(s) {
			s && c(e), t && t.d(s)
		}
	}
}
function Rn(r) {
	let e, n, l, t
	const s = [In, xn, Tn, zn, vn, wn, bn],
		i = []
	function a(o, f) {
		return o[0] === 1
			? 0
			: o[0] === 2
				? 1
				: o[0] === 3
					? 2
					: o[0] === 4
						? 3
						: o[0] === 5
							? 4
							: o[0] === 6
								? 5
								: 6
	}
	return (
		(e = a(r)),
		(n = i[e] = s[e](r)),
		{
			c() {
				n.c(), (l = z())
			},
			l(o) {
				n.l(o), (l = z())
			},
			m(o, f) {
				i[e].m(o, f), _(o, l, f), (t = !0)
			},
			p(o, [f]) {
				let u = e
				;(e = a(o)),
					e === u
						? i[e].p(o, f)
						: (q(),
							m(i[u], 1, 1, () => {
								i[u] = null
							}),
							j(),
							(n = i[e]),
							n ? n.p(o, f) : ((n = i[e] = s[e](o)), n.c()),
							h(n, 1),
							n.m(l.parentNode, l))
			},
			i(o) {
				t || (h(n), (t = !0))
			},
			o(o) {
				m(n), (t = !1)
			},
			d(o) {
				o && c(l), i[e].d(o)
			}
		}
	)
}
function En(r, e, n) {
	let l,
		{ $$slots: t = {}, $$scope: s } = e,
		{ depth: i } = e,
		{ raw: a } = e,
		{ text: o } = e
	const { slug: f, getOptions: u } = vt(_t),
		d = u()
	return (
		(r.$$set = (p) => {
			'depth' in p && n(0, (i = p.depth)),
				'raw' in p && n(1, (a = p.raw)),
				'text' in p && n(3, (o = p.text)),
				'$$scope' in p && n(4, (s = p.$$scope))
		}),
		(r.$$.update = () => {
			r.$$.dirty & 8 && n(2, (l = d.headerIds ? d.headerPrefix + f(o) : void 0))
		}),
		[i, a, l, o, s, t]
	)
}
class Sn extends U {
	constructor(e) {
		super(), H(this, e, En, Rn, Z, { depth: 0, raw: 1, text: 3 })
	}
}
function yn(r) {
	let e, n
	const l = r[1].default,
		t = Q(l, r, r[0], null)
	return {
		c() {
			;(e = x('p')), t && t.c()
		},
		l(s) {
			e = I(s, 'P', {})
			var i = C(e)
			t && t.l(i), i.forEach(c)
		},
		m(s, i) {
			_(s, e, i), t && t.m(e, null), (n = !0)
		},
		p(s, [i]) {
			t && t.p && (!n || i & 1) && W(t, l, s, s[0], n ? X(l, s[0], i, null) : G(s[0]), null)
		},
		i(s) {
			n || (h(t, s), (n = !0))
		},
		o(s) {
			m(t, s), (n = !1)
		},
		d(s) {
			s && c(e), t && t.d(s)
		}
	}
}
function An(r, e, n) {
	let { $$slots: l = {}, $$scope: t } = e
	return (
		(r.$$set = (s) => {
			'$$scope' in s && n(0, (t = s.$$scope))
		}),
		[t, l]
	)
}
class Cn extends U {
	constructor(e) {
		super(), H(this, e, An, yn, Z, {})
	}
}
function Nn(r) {
	let e
	const n = r[3].default,
		l = Q(n, r, r[2], null)
	return {
		c() {
			l && l.c()
		},
		l(t) {
			l && l.l(t)
		},
		m(t, s) {
			l && l.m(t, s), (e = !0)
		},
		p(t, [s]) {
			l && l.p && (!e || s & 4) && W(l, n, t, t[2], e ? X(n, t[2], s, null) : G(t[2]), null)
		},
		i(t) {
			e || (h(l, t), (e = !0))
		},
		o(t) {
			m(l, t), (e = !1)
		},
		d(t) {
			l && l.d(t)
		}
	}
}
function Pn(r, e, n) {
	let { $$slots: l = {}, $$scope: t } = e,
		{ text: s } = e,
		{ raw: i } = e
	return (
		(r.$$set = (a) => {
			'text' in a && n(0, (s = a.text)),
				'raw' in a && n(1, (i = a.raw)),
				'$$scope' in a && n(2, (t = a.$$scope))
		}),
		[s, i, t, l]
	)
}
class Ln extends U {
	constructor(e) {
		super(), H(this, e, Pn, Nn, Z, { text: 0, raw: 1 })
	}
}
function Bn(r) {
	let e, n
	return {
		c() {
			;(e = x('img')), this.h()
		},
		l(l) {
			;(e = I(l, 'IMG', { src: !0, title: !0, alt: !0 })), this.h()
		},
		h() {
			je(e.src, (n = r[0])) || y(e, 'src', n), y(e, 'title', r[1]), y(e, 'alt', r[2])
		},
		m(l, t) {
			_(l, e, t)
		},
		p(l, [t]) {
			t & 1 && !je(e.src, (n = l[0])) && y(e, 'src', n),
				t & 2 && y(e, 'title', l[1]),
				t & 4 && y(e, 'alt', l[2])
		},
		i: ne,
		o: ne,
		d(l) {
			l && c(e)
		}
	}
}
function Dn(r, e, n) {
	let { href: l = '' } = e,
		{ title: t = void 0 } = e,
		{ text: s = '' } = e
	return (
		(r.$$set = (i) => {
			'href' in i && n(0, (l = i.href)),
				'title' in i && n(1, (t = i.title)),
				'text' in i && n(2, (s = i.text))
		}),
		[l, t, s]
	)
}
class On extends U {
	constructor(e) {
		super(), H(this, e, Dn, Bn, Z, { href: 0, title: 1, text: 2 })
	}
}
function qn(r) {
	let e, n
	const l = r[3].default,
		t = Q(l, r, r[2], null)
	return {
		c() {
			;(e = x('a')), t && t.c(), this.h()
		},
		l(s) {
			e = I(s, 'A', { href: !0, title: !0 })
			var i = C(e)
			t && t.l(i), i.forEach(c), this.h()
		},
		h() {
			y(e, 'href', r[0]), y(e, 'title', r[1])
		},
		m(s, i) {
			_(s, e, i), t && t.m(e, null), (n = !0)
		},
		p(s, [i]) {
			t && t.p && (!n || i & 4) && W(t, l, s, s[2], n ? X(l, s[2], i, null) : G(s[2]), null),
				(!n || i & 1) && y(e, 'href', s[0]),
				(!n || i & 2) && y(e, 'title', s[1])
		},
		i(s) {
			n || (h(t, s), (n = !0))
		},
		o(s) {
			m(t, s), (n = !1)
		},
		d(s) {
			s && c(e), t && t.d(s)
		}
	}
}
function jn(r, e, n) {
	let { $$slots: l = {}, $$scope: t } = e,
		{ href: s = '' } = e,
		{ title: i = void 0 } = e
	return (
		(r.$$set = (a) => {
			'href' in a && n(0, (s = a.href)),
				'title' in a && n(1, (i = a.title)),
				'$$scope' in a && n(2, (t = a.$$scope))
		}),
		[s, i, t, l]
	)
}
class Zn extends U {
	constructor(e) {
		super(), H(this, e, jn, qn, Z, { href: 0, title: 1 })
	}
}
function Un(r) {
	let e, n
	const l = r[1].default,
		t = Q(l, r, r[0], null)
	return {
		c() {
			;(e = x('em')), t && t.c()
		},
		l(s) {
			e = I(s, 'EM', {})
			var i = C(e)
			t && t.l(i), i.forEach(c)
		},
		m(s, i) {
			_(s, e, i), t && t.m(e, null), (n = !0)
		},
		p(s, [i]) {
			t && t.p && (!n || i & 1) && W(t, l, s, s[0], n ? X(l, s[0], i, null) : G(s[0]), null)
		},
		i(s) {
			n || (h(t, s), (n = !0))
		},
		o(s) {
			m(t, s), (n = !1)
		},
		d(s) {
			s && c(e), t && t.d(s)
		}
	}
}
function Hn(r, e, n) {
	let { $$slots: l = {}, $$scope: t } = e
	return (
		(r.$$set = (s) => {
			'$$scope' in s && n(0, (t = s.$$scope))
		}),
		[t, l]
	)
}
class Mn extends U {
	constructor(e) {
		super(), H(this, e, Hn, Un, Z, {})
	}
}
function Qn(r) {
	let e, n
	const l = r[1].default,
		t = Q(l, r, r[0], null)
	return {
		c() {
			;(e = x('del')), t && t.c()
		},
		l(s) {
			e = I(s, 'DEL', {})
			var i = C(e)
			t && t.l(i), i.forEach(c)
		},
		m(s, i) {
			_(s, e, i), t && t.m(e, null), (n = !0)
		},
		p(s, [i]) {
			t && t.p && (!n || i & 1) && W(t, l, s, s[0], n ? X(l, s[0], i, null) : G(s[0]), null)
		},
		i(s) {
			n || (h(t, s), (n = !0))
		},
		o(s) {
			m(t, s), (n = !1)
		},
		d(s) {
			s && c(e), t && t.d(s)
		}
	}
}
function Wn(r, e, n) {
	let { $$slots: l = {}, $$scope: t } = e
	return (
		(r.$$set = (s) => {
			'$$scope' in s && n(0, (t = s.$$scope))
		}),
		[t, l]
	)
}
class Gn extends U {
	constructor(e) {
		super(), H(this, e, Wn, Qn, Z, {})
	}
}
function Xn(r) {
	let e,
		n = r[0].replace(/`/g, '') + '',
		l
	return {
		c() {
			;(e = x('code')), (l = ae(n))
		},
		l(t) {
			e = I(t, 'CODE', {})
			var s = C(e)
			;(l = fe(s, n)), s.forEach(c)
		},
		m(t, s) {
			_(t, e, s), F(e, l)
		},
		p(t, [s]) {
			s & 1 && n !== (n = t[0].replace(/`/g, '') + '') && _e(l, n)
		},
		i: ne,
		o: ne,
		d(t) {
			t && c(e)
		}
	}
}
function Vn(r, e, n) {
	let { raw: l } = e
	return (
		(r.$$set = (t) => {
			'raw' in t && n(0, (l = t.raw))
		}),
		[l]
	)
}
class Fn extends U {
	constructor(e) {
		super(), H(this, e, Vn, Xn, Z, { raw: 0 })
	}
}
function Kn(r) {
	let e, n
	const l = r[1].default,
		t = Q(l, r, r[0], null)
	return {
		c() {
			;(e = x('strong')), t && t.c()
		},
		l(s) {
			e = I(s, 'STRONG', {})
			var i = C(e)
			t && t.l(i), i.forEach(c)
		},
		m(s, i) {
			_(s, e, i), t && t.m(e, null), (n = !0)
		},
		p(s, [i]) {
			t && t.p && (!n || i & 1) && W(t, l, s, s[0], n ? X(l, s[0], i, null) : G(s[0]), null)
		},
		i(s) {
			n || (h(t, s), (n = !0))
		},
		o(s) {
			m(t, s), (n = !1)
		},
		d(s) {
			s && c(e), t && t.d(s)
		}
	}
}
function Yn(r, e, n) {
	let { $$slots: l = {}, $$scope: t } = e
	return (
		(r.$$set = (s) => {
			'$$scope' in s && n(0, (t = s.$$scope))
		}),
		[t, l]
	)
}
class Jn extends U {
	constructor(e) {
		super(), H(this, e, Yn, Kn, Z, {})
	}
}
function el(r) {
	let e, n
	const l = r[1].default,
		t = Q(l, r, r[0], null)
	return {
		c() {
			;(e = x('table')), t && t.c()
		},
		l(s) {
			e = I(s, 'TABLE', {})
			var i = C(e)
			t && t.l(i), i.forEach(c)
		},
		m(s, i) {
			_(s, e, i), t && t.m(e, null), (n = !0)
		},
		p(s, [i]) {
			t && t.p && (!n || i & 1) && W(t, l, s, s[0], n ? X(l, s[0], i, null) : G(s[0]), null)
		},
		i(s) {
			n || (h(t, s), (n = !0))
		},
		o(s) {
			m(t, s), (n = !1)
		},
		d(s) {
			s && c(e), t && t.d(s)
		}
	}
}
function tl(r, e, n) {
	let { $$slots: l = {}, $$scope: t } = e
	return (
		(r.$$set = (s) => {
			'$$scope' in s && n(0, (t = s.$$scope))
		}),
		[t, l]
	)
}
class nl extends U {
	constructor(e) {
		super(), H(this, e, tl, el, Z, {})
	}
}
function ll(r) {
	let e, n
	const l = r[1].default,
		t = Q(l, r, r[0], null)
	return {
		c() {
			;(e = x('thead')), t && t.c()
		},
		l(s) {
			e = I(s, 'THEAD', {})
			var i = C(e)
			t && t.l(i), i.forEach(c)
		},
		m(s, i) {
			_(s, e, i), t && t.m(e, null), (n = !0)
		},
		p(s, [i]) {
			t && t.p && (!n || i & 1) && W(t, l, s, s[0], n ? X(l, s[0], i, null) : G(s[0]), null)
		},
		i(s) {
			n || (h(t, s), (n = !0))
		},
		o(s) {
			m(t, s), (n = !1)
		},
		d(s) {
			s && c(e), t && t.d(s)
		}
	}
}
function sl(r, e, n) {
	let { $$slots: l = {}, $$scope: t } = e
	return (
		(r.$$set = (s) => {
			'$$scope' in s && n(0, (t = s.$$scope))
		}),
		[t, l]
	)
}
class il extends U {
	constructor(e) {
		super(), H(this, e, sl, ll, Z, {})
	}
}
function rl(r) {
	let e, n
	const l = r[1].default,
		t = Q(l, r, r[0], null)
	return {
		c() {
			;(e = x('tbody')), t && t.c()
		},
		l(s) {
			e = I(s, 'TBODY', {})
			var i = C(e)
			t && t.l(i), i.forEach(c)
		},
		m(s, i) {
			_(s, e, i), t && t.m(e, null), (n = !0)
		},
		p(s, [i]) {
			t && t.p && (!n || i & 1) && W(t, l, s, s[0], n ? X(l, s[0], i, null) : G(s[0]), null)
		},
		i(s) {
			n || (h(t, s), (n = !0))
		},
		o(s) {
			m(t, s), (n = !1)
		},
		d(s) {
			s && c(e), t && t.d(s)
		}
	}
}
function ol(r, e, n) {
	let { $$slots: l = {}, $$scope: t } = e
	return (
		(r.$$set = (s) => {
			'$$scope' in s && n(0, (t = s.$$scope))
		}),
		[t, l]
	)
}
class al extends U {
	constructor(e) {
		super(), H(this, e, ol, rl, Z, {})
	}
}
function fl(r) {
	let e, n
	const l = r[1].default,
		t = Q(l, r, r[0], null)
	return {
		c() {
			;(e = x('tr')), t && t.c()
		},
		l(s) {
			e = I(s, 'TR', {})
			var i = C(e)
			t && t.l(i), i.forEach(c)
		},
		m(s, i) {
			_(s, e, i), t && t.m(e, null), (n = !0)
		},
		p(s, [i]) {
			t && t.p && (!n || i & 1) && W(t, l, s, s[0], n ? X(l, s[0], i, null) : G(s[0]), null)
		},
		i(s) {
			n || (h(t, s), (n = !0))
		},
		o(s) {
			m(t, s), (n = !1)
		},
		d(s) {
			s && c(e), t && t.d(s)
		}
	}
}
function ul(r, e, n) {
	let { $$slots: l = {}, $$scope: t } = e
	return (
		(r.$$set = (s) => {
			'$$scope' in s && n(0, (t = s.$$scope))
		}),
		[t, l]
	)
}
class cl extends U {
	constructor(e) {
		super(), H(this, e, ul, fl, Z, {})
	}
}
function hl(r) {
	let e, n
	const l = r[3].default,
		t = Q(l, r, r[2], null)
	return {
		c() {
			;(e = x('td')), t && t.c(), this.h()
		},
		l(s) {
			e = I(s, 'TD', { align: !0 })
			var i = C(e)
			t && t.l(i), i.forEach(c), this.h()
		},
		h() {
			y(e, 'align', r[1])
		},
		m(s, i) {
			_(s, e, i), t && t.m(e, null), (n = !0)
		},
		p(s, i) {
			t && t.p && (!n || i & 4) && W(t, l, s, s[2], n ? X(l, s[2], i, null) : G(s[2]), null),
				(!n || i & 2) && y(e, 'align', s[1])
		},
		i(s) {
			n || (h(t, s), (n = !0))
		},
		o(s) {
			m(t, s), (n = !1)
		},
		d(s) {
			s && c(e), t && t.d(s)
		}
	}
}
function pl(r) {
	let e, n
	const l = r[3].default,
		t = Q(l, r, r[2], null)
	return {
		c() {
			;(e = x('th')), t && t.c(), this.h()
		},
		l(s) {
			e = I(s, 'TH', { align: !0 })
			var i = C(e)
			t && t.l(i), i.forEach(c), this.h()
		},
		h() {
			y(e, 'align', r[1])
		},
		m(s, i) {
			_(s, e, i), t && t.m(e, null), (n = !0)
		},
		p(s, i) {
			t && t.p && (!n || i & 4) && W(t, l, s, s[2], n ? X(l, s[2], i, null) : G(s[2]), null),
				(!n || i & 2) && y(e, 'align', s[1])
		},
		i(s) {
			n || (h(t, s), (n = !0))
		},
		o(s) {
			m(t, s), (n = !1)
		},
		d(s) {
			s && c(e), t && t.d(s)
		}
	}
}
function dl(r) {
	let e, n, l, t
	const s = [pl, hl],
		i = []
	function a(o, f) {
		return o[0] ? 0 : 1
	}
	return (
		(e = a(r)),
		(n = i[e] = s[e](r)),
		{
			c() {
				n.c(), (l = z())
			},
			l(o) {
				n.l(o), (l = z())
			},
			m(o, f) {
				i[e].m(o, f), _(o, l, f), (t = !0)
			},
			p(o, [f]) {
				let u = e
				;(e = a(o)),
					e === u
						? i[e].p(o, f)
						: (q(),
							m(i[u], 1, 1, () => {
								i[u] = null
							}),
							j(),
							(n = i[e]),
							n ? n.p(o, f) : ((n = i[e] = s[e](o)), n.c()),
							h(n, 1),
							n.m(l.parentNode, l))
			},
			i(o) {
				t || (h(n), (t = !0))
			},
			o(o) {
				m(n), (t = !1)
			},
			d(o) {
				o && c(l), i[e].d(o)
			}
		}
	)
}
function ml(r, e, n) {
	let { $$slots: l = {}, $$scope: t } = e,
		{ header: s } = e,
		{ align: i } = e
	return (
		(r.$$set = (a) => {
			'header' in a && n(0, (s = a.header)),
				'align' in a && n(1, (i = a.align)),
				'$$scope' in a && n(2, (t = a.$$scope))
		}),
		[s, i, t, l]
	)
}
class gl extends U {
	constructor(e) {
		super(), H(this, e, ml, dl, Z, { header: 0, align: 1 })
	}
}
function _l(r) {
	let e, n
	const l = r[3].default,
		t = Q(l, r, r[2], null)
	return {
		c() {
			;(e = x('ul')), t && t.c()
		},
		l(s) {
			e = I(s, 'UL', {})
			var i = C(e)
			t && t.l(i), i.forEach(c)
		},
		m(s, i) {
			_(s, e, i), t && t.m(e, null), (n = !0)
		},
		p(s, i) {
			t && t.p && (!n || i & 4) && W(t, l, s, s[2], n ? X(l, s[2], i, null) : G(s[2]), null)
		},
		i(s) {
			n || (h(t, s), (n = !0))
		},
		o(s) {
			m(t, s), (n = !1)
		},
		d(s) {
			s && c(e), t && t.d(s)
		}
	}
}
function $l(r) {
	let e, n
	const l = r[3].default,
		t = Q(l, r, r[2], null)
	return {
		c() {
			;(e = x('ol')), t && t.c(), this.h()
		},
		l(s) {
			e = I(s, 'OL', { start: !0 })
			var i = C(e)
			t && t.l(i), i.forEach(c), this.h()
		},
		h() {
			y(e, 'start', r[1])
		},
		m(s, i) {
			_(s, e, i), t && t.m(e, null), (n = !0)
		},
		p(s, i) {
			t && t.p && (!n || i & 4) && W(t, l, s, s[2], n ? X(l, s[2], i, null) : G(s[2]), null),
				(!n || i & 2) && y(e, 'start', s[1])
		},
		i(s) {
			n || (h(t, s), (n = !0))
		},
		o(s) {
			m(t, s), (n = !1)
		},
		d(s) {
			s && c(e), t && t.d(s)
		}
	}
}
function kl(r) {
	let e, n, l, t
	const s = [$l, _l],
		i = []
	function a(o, f) {
		return o[0] ? 0 : 1
	}
	return (
		(e = a(r)),
		(n = i[e] = s[e](r)),
		{
			c() {
				n.c(), (l = z())
			},
			l(o) {
				n.l(o), (l = z())
			},
			m(o, f) {
				i[e].m(o, f), _(o, l, f), (t = !0)
			},
			p(o, [f]) {
				let u = e
				;(e = a(o)),
					e === u
						? i[e].p(o, f)
						: (q(),
							m(i[u], 1, 1, () => {
								i[u] = null
							}),
							j(),
							(n = i[e]),
							n ? n.p(o, f) : ((n = i[e] = s[e](o)), n.c()),
							h(n, 1),
							n.m(l.parentNode, l))
			},
			i(o) {
				t || (h(n), (t = !0))
			},
			o(o) {
				m(n), (t = !1)
			},
			d(o) {
				o && c(l), i[e].d(o)
			}
		}
	)
}
function bl(r, e, n) {
	let { $$slots: l = {}, $$scope: t } = e,
		{ ordered: s } = e,
		{ start: i } = e
	return (
		(r.$$set = (a) => {
			'ordered' in a && n(0, (s = a.ordered)),
				'start' in a && n(1, (i = a.start)),
				'$$scope' in a && n(2, (t = a.$$scope))
		}),
		[s, i, t, l]
	)
}
class wl extends U {
	constructor(e) {
		super(), H(this, e, bl, kl, Z, { ordered: 0, start: 1 })
	}
}
function vl(r) {
	let e, n
	const l = r[1].default,
		t = Q(l, r, r[0], null)
	return {
		c() {
			;(e = x('li')), t && t.c()
		},
		l(s) {
			e = I(s, 'LI', {})
			var i = C(e)
			t && t.l(i), i.forEach(c)
		},
		m(s, i) {
			_(s, e, i), t && t.m(e, null), (n = !0)
		},
		p(s, [i]) {
			t && t.p && (!n || i & 1) && W(t, l, s, s[0], n ? X(l, s[0], i, null) : G(s[0]), null)
		},
		i(s) {
			n || (h(t, s), (n = !0))
		},
		o(s) {
			m(t, s), (n = !1)
		},
		d(s) {
			s && c(e), t && t.d(s)
		}
	}
}
function zl(r, e, n) {
	let { $$slots: l = {}, $$scope: t } = e
	return (
		(r.$$set = (s) => {
			'$$scope' in s && n(0, (t = s.$$scope))
		}),
		[t, l]
	)
}
class Tl extends U {
	constructor(e) {
		super(), H(this, e, zl, vl, Z, {})
	}
}
function xl(r) {
	let e
	return {
		c() {
			e = x('hr')
		},
		l(n) {
			e = I(n, 'HR', {})
		},
		m(n, l) {
			_(n, e, l)
		},
		p: ne,
		i: ne,
		o: ne,
		d(n) {
			n && c(e)
		}
	}
}
class Il extends U {
	constructor(e) {
		super(), H(this, e, null, xl, Z, {})
	}
}
function Rl(r) {
	let e, n
	return {
		c() {
			;(e = new zt(!1)), (n = z()), this.h()
		},
		l(l) {
			;(e = Tt(l, !1)), (n = z()), this.h()
		},
		h() {
			e.a = n
		},
		m(l, t) {
			e.m(r[0], l, t), _(l, n, t)
		},
		p(l, [t]) {
			t & 1 && e.p(l[0])
		},
		i: ne,
		o: ne,
		d(l) {
			l && (c(n), e.d())
		}
	}
}
function El(r, e, n) {
	let { text: l } = e
	return (
		(r.$$set = (t) => {
			'text' in t && n(0, (l = t.text))
		}),
		[l]
	)
}
class Sl extends U {
	constructor(e) {
		super(), H(this, e, El, Rl, Z, { text: 0 })
	}
}
function yl(r) {
	let e, n
	const l = r[1].default,
		t = Q(l, r, r[0], null)
	return {
		c() {
			;(e = x('blockquote')), t && t.c()
		},
		l(s) {
			e = I(s, 'BLOCKQUOTE', {})
			var i = C(e)
			t && t.l(i), i.forEach(c)
		},
		m(s, i) {
			_(s, e, i), t && t.m(e, null), (n = !0)
		},
		p(s, [i]) {
			t && t.p && (!n || i & 1) && W(t, l, s, s[0], n ? X(l, s[0], i, null) : G(s[0]), null)
		},
		i(s) {
			n || (h(t, s), (n = !0))
		},
		o(s) {
			m(t, s), (n = !1)
		},
		d(s) {
			s && c(e), t && t.d(s)
		}
	}
}
function Al(r, e, n) {
	let { $$slots: l = {}, $$scope: t } = e
	return (
		(r.$$set = (s) => {
			'$$scope' in s && n(0, (t = s.$$scope))
		}),
		[t, l]
	)
}
class Cl extends U {
	constructor(e) {
		super(), H(this, e, Al, yl, Z, {})
	}
}
function Nl(r) {
	let e, n, l
	return {
		c() {
			;(e = x('pre')), (n = x('code')), (l = ae(r[1])), this.h()
		},
		l(t) {
			e = I(t, 'PRE', { class: !0 })
			var s = C(e)
			n = I(s, 'CODE', {})
			var i = C(n)
			;(l = fe(i, r[1])), i.forEach(c), s.forEach(c), this.h()
		},
		h() {
			y(e, 'class', r[0])
		},
		m(t, s) {
			_(t, e, s), F(e, n), F(n, l)
		},
		p(t, [s]) {
			s & 2 && _e(l, t[1]), s & 1 && y(e, 'class', t[0])
		},
		i: ne,
		o: ne,
		d(t) {
			t && c(e)
		}
	}
}
function Pl(r, e, n) {
	let { lang: l } = e,
		{ text: t } = e
	return (
		(r.$$set = (s) => {
			'lang' in s && n(0, (l = s.lang)), 'text' in s && n(1, (t = s.text))
		}),
		[l, t]
	)
}
class Ll extends U {
	constructor(e) {
		super(), H(this, e, Pl, Nl, Z, { lang: 0, text: 1 })
	}
}
function Bl(r) {
	let e, n
	const l = r[1].default,
		t = Q(l, r, r[0], null)
	return {
		c() {
			;(e = x('br')), t && t.c()
		},
		l(s) {
			;(e = I(s, 'BR', {})), t && t.l(s)
		},
		m(s, i) {
			_(s, e, i), t && t.m(s, i), (n = !0)
		},
		p(s, [i]) {
			t && t.p && (!n || i & 1) && W(t, l, s, s[0], n ? X(l, s[0], i, null) : G(s[0]), null)
		},
		i(s) {
			n || (h(t, s), (n = !0))
		},
		o(s) {
			m(t, s), (n = !1)
		},
		d(s) {
			s && c(e), t && t.d(s)
		}
	}
}
function Dl(r, e, n) {
	let { $$slots: l = {}, $$scope: t } = e
	return (
		(r.$$set = (s) => {
			'$$scope' in s && n(0, (t = s.$$scope))
		}),
		[t, l]
	)
}
class Ol extends U {
	constructor(e) {
		super(), H(this, e, Dl, Bl, Z, {})
	}
}
const ql = {
		heading: Sn,
		paragraph: Cn,
		text: Ln,
		image: On,
		link: Zn,
		em: Mn,
		strong: Jn,
		codespan: Fn,
		del: Gn,
		table: nl,
		tablehead: il,
		tablebody: al,
		tablerow: cl,
		tablecell: gl,
		list: wl,
		orderedlistitem: null,
		unorderedlistitem: null,
		listitem: Tl,
		hr: Il,
		html: Sl,
		blockquote: Cl,
		code: Ll,
		br: Ol
	},
	jl = {
		baseUrl: null,
		breaks: !1,
		gfm: !0,
		headerIds: !0,
		headerPrefix: '',
		highlight: null,
		langPrefix: 'language-',
		mangle: !0,
		pedantic: !1,
		renderer: null,
		sanitize: !1,
		sanitizer: null,
		silent: !1,
		smartLists: !1,
		smartypants: !1,
		tokenizer: null,
		xhtml: !1
	}
function Zl(r) {
	let e, n
	return (
		(e = new $e({ props: { tokens: r[0], renderers: r[1] } })),
		{
			c() {
				R(e.$$.fragment)
			},
			l(l) {
				O(e.$$.fragment, l)
			},
			m(l, t) {
				E(e, l, t), (n = !0)
			},
			p(l, [t]) {
				const s = {}
				t & 1 && (s.tokens = l[0]), t & 2 && (s.renderers = l[1]), e.$set(s)
			},
			i(l) {
				n || (h(e.$$.fragment, l), (n = !0))
			},
			o(l) {
				m(e.$$.fragment, l), (n = !1)
			},
			d(l) {
				S(e, l)
			}
		}
	)
}
function Ul(r, e, n) {
	let l,
		t,
		s,
		i,
		{ source: a = [] } = e,
		{ renderers: o = {} } = e,
		{ options: f = {} } = e,
		{ isInline: u = !1 } = e
	const d = xt()
	let p, g, b
	return (
		It(_t, { slug: (k) => (t ? t.slug(k) : ''), getOptions: () => s }),
		ut(() => {
			n(7, (b = !0))
		}),
		(r.$$set = (k) => {
			'source' in k && n(2, (a = k.source)),
				'renderers' in k && n(3, (o = k.renderers)),
				'options' in k && n(4, (f = k.options)),
				'isInline' in k && n(5, (u = k.isInline))
		}),
		(r.$$.update = () => {
			r.$$.dirty & 4 && n(8, (l = Array.isArray(a))),
				r.$$.dirty & 4 && (t = a ? new ye() : void 0),
				r.$$.dirty & 16 && n(9, (s = { ...jl, ...f })),
				r.$$.dirty & 869 &&
					(l
						? n(0, (p = a))
						: (n(6, (g = new he(s))),
							n(0, (p = u ? g.inlineTokens(a) : g.lex(a))),
							d('parsed', { tokens: p }))),
				r.$$.dirty & 8 && n(1, (i = { ...ql, ...o })),
				r.$$.dirty & 385 && b && !l && d('parsed', { tokens: p })
		}),
		[p, i, a, o, f, u, g, b, l, s]
	)
}
class $t extends U {
	constructor(e) {
		super(), H(this, e, Ul, Zl, Z, { source: 2, renderers: 3, options: 4, isInline: 5 })
	}
}
function Hl(r) {
	let e
	const n = r[2].default,
		l = Q(n, r, r[3], null)
	return {
		c() {
			l && l.c()
		},
		l(t) {
			l && l.l(t)
		},
		m(t, s) {
			l && l.m(t, s), (e = !0)
		},
		p(t, s) {
			l && l.p && (!e || s & 8) && W(l, n, t, t[3], e ? X(n, t[3], s, null) : G(t[3]), null)
		},
		i(t) {
			e || (h(l, t), (e = !0))
		},
		o(t) {
			m(l, t), (e = !1)
		},
		d(t) {
			l && l.d(t)
		}
	}
}
function Ml(r) {
	let e, n
	const l = [{ name: 'chevron-down' }, r[1], { iconNode: r[0] }]
	let t = { $$slots: { default: [Hl] }, $$scope: { ctx: r } }
	for (let s = 0; s < l.length; s += 1) t = le(t, l[s])
	return (
		(e = new yt({ props: t })),
		{
			c() {
				R(e.$$.fragment)
			},
			l(s) {
				O(e.$$.fragment, s)
			},
			m(s, i) {
				E(e, s, i), (n = !0)
			},
			p(s, [i]) {
				const a = i & 3 ? ue(l, [l[0], i & 2 && ce(s[1]), i & 1 && { iconNode: s[0] }]) : {}
				i & 8 && (a.$$scope = { dirty: i, ctx: s }), e.$set(a)
			},
			i(s) {
				n || (h(e.$$.fragment, s), (n = !0))
			},
			o(s) {
				m(e.$$.fragment, s), (n = !1)
			},
			d(s) {
				S(e, s)
			}
		}
	)
}
function Ql(r, e, n) {
	let { $$slots: l = {}, $$scope: t } = e
	const s = [['path', { d: 'm6 9 6 6 6-6' }]]
	return (
		(r.$$set = (i) => {
			n(1, (e = le(le({}, e), Ne(i)))), '$$scope' in i && n(3, (t = i.$$scope))
		}),
		(e = Ne(e)),
		[s, e, l, t]
	)
}
class Wl extends U {
	constructor(e) {
		super(), H(this, e, Ql, Ml, Z, {})
	}
}
function st(r, e, n) {
	const l = r.slice()
	return (l[3] = e[n]), l
}
function it(r) {
	let e, n, l, t
	return (
		(n = new At({ props: { subtle: !0, $$slots: { default: [Gl] }, $$scope: { ctx: r } } })),
		n.$on('click', r[2]),
		{
			c() {
				;(e = x('div')), R(n.$$.fragment)
			},
			l(s) {
				e = I(s, 'DIV', {})
				var i = C(e)
				O(n.$$.fragment, i), i.forEach(c)
			},
			m(s, i) {
				_(s, e, i), E(n, e, null), (t = !0)
			},
			p(s, i) {
				const a = {}
				i & 64 && (a.$$scope = { dirty: i, ctx: s }), n.$set(a)
			},
			i(s) {
				t || (h(n.$$.fragment, s), l && l.end(1), (t = !0))
			},
			o(s) {
				m(n.$$.fragment, s), s && (l = ct(e, Pe, {})), (t = !1)
			},
			d(s) {
				s && c(e), S(n), s && l && l.end()
			}
		}
	)
}
function Gl(r) {
	let e, n, l
	return (
		(n = new Wl({})),
		{
			c() {
				;(e = ae(`Show more
				`)),
					R(n.$$.fragment)
			},
			l(t) {
				;(e = fe(
					t,
					`Show more
				`
				)),
					O(n.$$.fragment, t)
			},
			m(t, s) {
				_(t, e, s), E(n, t, s), (l = !0)
			},
			i(t) {
				l || (h(n.$$.fragment, t), (l = !0))
			},
			o(t) {
				m(n.$$.fragment, t), (l = !1)
			},
			d(t) {
				t && c(e), S(n, t)
			}
		}
	)
}
function rt(r) {
	let e,
		n,
		l,
		t,
		s,
		i,
		a = 'Responsibilities',
		o,
		f,
		u,
		d,
		p
	t = new xe({
		props: { href: `mailto:${r[1].leadEmail}`, $$slots: { default: [Xl] }, $$scope: { ctx: r } }
	})
	let g = se(r[1].responsibilities),
		b = []
	for (let k = 0; k < g.length; k += 1) b[k] = ot(st(r, g, k))
	return {
		c() {
			;(e = x('div')),
				(n = x('h3')),
				(l = ae('Team lead: ')),
				R(t.$$.fragment),
				(s = ee()),
				(i = x('h3')),
				(i.textContent = a),
				(o = ee()),
				(f = x('ul'))
			for (let k = 0; k < b.length; k += 1) b[k].c()
			this.h()
		},
		l(k) {
			e = I(k, 'DIV', { class: !0 })
			var P = C(e)
			n = I(P, 'H3', { class: !0 })
			var T = C(n)
			;(l = fe(T, 'Team lead: ')),
				O(t.$$.fragment, T),
				T.forEach(c),
				(s = te(P)),
				(i = I(P, 'H3', { class: !0, 'data-svelte-h': !0 })),
				Be(i) !== 'svelte-1i7ohui' && (i.textContent = a),
				(o = te(P)),
				(f = I(P, 'UL', { class: !0 }))
			var A = C(f)
			for (let V = 0; V < b.length; V += 1) b[V].l(A)
			A.forEach(c), P.forEach(c), this.h()
		},
		h() {
			y(n, 'class', 'svelte-155prdz'),
				y(i, 'class', 'svelte-155prdz'),
				y(f, 'class', 'responsibilities svelte-155prdz'),
				y(e, 'class', 'details')
		},
		m(k, P) {
			_(k, e, P), F(e, n), F(n, l), E(t, n, null), F(e, s), F(e, i), F(e, o), F(e, f)
			for (let T = 0; T < b.length; T += 1) b[T] && b[T].m(f, null)
			p = !0
		},
		p(k, P) {
			const T = {}
			if (
				(P & 2 && (T.href = `mailto:${k[1].leadEmail}`),
				P & 66 && (T.$$scope = { dirty: P, ctx: k }),
				t.$set(T),
				P & 2)
			) {
				g = se(k[1].responsibilities)
				let A
				for (A = 0; A < g.length; A += 1) {
					const V = st(k, g, A)
					b[A] ? b[A].p(V, P) : ((b[A] = ot(V)), b[A].c(), b[A].m(f, null))
				}
				for (; A < b.length; A += 1) b[A].d(1)
				b.length = g.length
			}
		},
		i(k) {
			p ||
				(h(t.$$.fragment, k),
				k &&
					Rt(() => {
						p && (d && d.end(1), (u = Et(e, Pe, {})), u.start())
					}),
				(p = !0))
		},
		o(k) {
			m(t.$$.fragment, k), u && u.invalidate(), k && (d = ct(e, Pe, {})), (p = !1)
		},
		d(k) {
			k && c(e), S(t), de(b, k), k && d && d.end()
		}
	}
}
function Xl(r) {
	let e = r[1].leadName + '',
		n
	return {
		c() {
			n = ae(e)
		},
		l(l) {
			n = fe(l, e)
		},
		m(l, t) {
			_(l, n, t)
		},
		p(l, t) {
			t & 2 && e !== (e = l[1].leadName + '') && _e(n, e)
		},
		d(l) {
			l && c(n)
		}
	}
}
function ot(r) {
	let e,
		n = r[3] + '',
		l
	return {
		c() {
			;(e = x('li')), (l = ae(n))
		},
		l(t) {
			e = I(t, 'LI', {})
			var s = C(e)
			;(l = fe(s, n)), s.forEach(c)
		},
		m(t, s) {
			_(t, e, s), F(e, l)
		},
		p(t, s) {
			s & 2 && n !== (n = t[3] + '') && _e(l, n)
		},
		d(t) {
			t && c(e)
		}
	}
}
function Vl(r) {
	let e,
		n,
		l = r[1].name + '',
		t,
		s,
		i,
		a,
		o,
		f,
		u
	a = new $t({ props: { source: r[1].description, renderers: { link: xe } } })
	let d = r[0] && it(r),
		p = !r[0] && rt(r)
	return {
		c() {
			;(e = x('li')),
				(n = x('div')),
				(t = ae(l)),
				(s = ee()),
				(i = x('div')),
				R(a.$$.fragment),
				(o = ee()),
				d && d.c(),
				(f = ee()),
				p && p.c(),
				this.h()
		},
		l(g) {
			e = I(g, 'LI', { class: !0 })
			var b = C(e)
			n = I(b, 'DIV', { class: !0 })
			var k = C(n)
			;(t = fe(k, l)), k.forEach(c), (s = te(b)), (i = I(b, 'DIV', { class: !0 }))
			var P = C(i)
			O(a.$$.fragment, P),
				P.forEach(c),
				(o = te(b)),
				d && d.l(b),
				(f = te(b)),
				p && p.l(b),
				b.forEach(c),
				this.h()
		},
		h() {
			y(n, 'class', 'name svelte-155prdz'),
				y(i, 'class', 'description prose svelte-155prdz'),
				y(e, 'class', 'team svelte-155prdz')
		},
		m(g, b) {
			_(g, e, b),
				F(e, n),
				F(n, t),
				F(e, s),
				F(e, i),
				E(a, i, null),
				F(e, o),
				d && d.m(e, null),
				F(e, f),
				p && p.m(e, null),
				(u = !0)
		},
		p(g, [b]) {
			;(!u || b & 2) && l !== (l = g[1].name + '') && _e(t, l)
			const k = {}
			b & 2 && (k.source = g[1].description),
				a.$set(k),
				g[0]
					? d
						? (d.p(g, b), b & 1 && h(d, 1))
						: ((d = it(g)), d.c(), h(d, 1), d.m(e, f))
					: d &&
						(q(),
						m(d, 1, 1, () => {
							d = null
						}),
						j()),
				g[0]
					? p &&
						(q(),
						m(p, 1, 1, () => {
							p = null
						}),
						j())
					: p
						? (p.p(g, b), b & 1 && h(p, 1))
						: ((p = rt(g)), p.c(), h(p, 1), p.m(e, null))
		},
		i(g) {
			u || (h(a.$$.fragment, g), h(d), h(p), (u = !0))
		},
		o(g) {
			m(a.$$.fragment, g), m(d), m(p), (u = !1)
		},
		d(g) {
			g && c(e), S(a), d && d.d(), p && p.d()
		}
	}
}
function Fl(r, e, n) {
	let { team: l } = e,
		{ collapsed: t = !0 } = e
	const s = () => {
		n(0, (t = !t))
	}
	return (
		(r.$$set = (i) => {
			'team' in i && n(1, (l = i.team)), 'collapsed' in i && n(0, (t = i.collapsed))
		}),
		[t, l, s]
	)
}
class Kl extends U {
	constructor(e) {
		super(), H(this, e, Fl, Vl, Z, { team: 1, collapsed: 0 })
	}
}
function at(r, e, n) {
	const l = r.slice()
	return (l[5] = e[n]), l
}
function Yl(r) {
	let e,
		n = 'No team members found'
	return {
		c() {
			;(e = x('p')), (e.textContent = n)
		},
		l(l) {
			;(e = I(l, 'P', { 'data-svelte-h': !0 })), Be(e) !== 'svelte-l20co3' && (e.textContent = n)
		},
		m(l, t) {
			_(l, e, t)
		},
		d(l) {
			l && c(e)
		}
	}
}
function ft(r) {
	let e, n
	return (
		(e = new Kl({ props: { team: r[5] } })),
		{
			c() {
				R(e.$$.fragment)
			},
			l(l) {
				O(e.$$.fragment, l)
			},
			m(l, t) {
				E(e, l, t), (n = !0)
			},
			p: ne,
			i(l) {
				n || (h(e.$$.fragment, l), (n = !0))
			},
			o(l) {
				m(e.$$.fragment, l), (n = !1)
			},
			d(l) {
				S(e, l)
			}
		}
	)
}
function Jl(r) {
	let e
	return {
		c() {
			e = ae('sign up as a volunteer!')
		},
		l(n) {
			e = fe(n, 'sign up as a volunteer!')
		},
		m(n, l) {
			_(n, e, l)
		},
		d(n) {
			n && c(e)
		}
	}
}
function es(r) {
	let e,
		n,
		l,
		t,
		s,
		i,
		a,
		o,
		f,
		u,
		d,
		p,
		g = 'Become a volunteer',
		b,
		k,
		P,
		T,
		A
	;(e = new St({ props: { title: r[1], description: r[2], date: r[3] } })),
		(i = new $t({
			props: {
				source: `
PauseAI consists almost exclusively of [volunteers](/people) ([sign up here](https://airtable.com/appWPTGqZmUcs3NWu/pag7ztLh27Omj5s2n/form)).
We are organized in teams,
each working on a different aspect of our movement.
Every team has a leader, members, a Google Drive folder and a Role + private channel on the [discord server](https://discord.gg/2XXWXvErfA).
Other than that, Teams are free to choose how they want to work.
Check out the [vacancies](/vacancies) to see some specific roles that you could take.
If you want to create a new team, reach out to the Oversight team leader (see below).
`,
				renderers: { link: xe }
			}
		}))
	let V = r[0].length === 0 && Yl(),
		Y = se(r[0]),
		N = []
	for (let w = 0; w < Y.length; w += 1) N[w] = ft(at(r, Y, w))
	const re = (w) =>
		m(N[w], 1, 1, () => {
			N[w] = null
		})
	return (
		(T = new xe({
			props: {
				href: 'https://airtable.com/appWPTGqZmUcs3NWu/pag7ztLh27Omj5s2n/form',
				$$slots: { default: [Jl] },
				$$scope: { ctx: r }
			}
		})),
		{
			c() {
				R(e.$$.fragment),
					(n = ee()),
					(l = x('h1')),
					(t = ae(r[1])),
					(s = ee()),
					R(i.$$.fragment),
					(a = ee()),
					(o = x('section')),
					V && V.c(),
					(f = ee()),
					(u = x('ul'))
				for (let w = 0; w < N.length; w += 1) N[w].c()
				;(d = ee()),
					(p = x('h2')),
					(p.textContent = g),
					(b = ee()),
					(k = x('p')),
					(P = ae('If you want to join one of the teams, reach out to the team leader and ')),
					R(T.$$.fragment),
					this.h()
			},
			l(w) {
				O(e.$$.fragment, w), (n = te(w)), (l = I(w, 'H1', {}))
				var L = C(l)
				;(t = fe(L, r[1])),
					L.forEach(c),
					(s = te(w)),
					O(i.$$.fragment, w),
					(a = te(w)),
					(o = I(w, 'SECTION', { 'data-pagefind-ignore': !0 }))
				var oe = C(o)
				V && V.l(oe), (f = te(oe)), (u = I(oe, 'UL', { class: !0 }))
				var K = C(u)
				for (let Ae = 0; Ae < N.length; Ae += 1) N[Ae].l(K)
				K.forEach(c),
					oe.forEach(c),
					(d = te(w)),
					(p = I(w, 'H2', { 'data-svelte-h': !0 })),
					Be(p) !== 'svelte-1etc9ni' && (p.textContent = g),
					(b = te(w)),
					(k = I(w, 'P', {}))
				var ke = C(k)
				;(P = fe(ke, 'If you want to join one of the teams, reach out to the team leader and ')),
					O(T.$$.fragment, ke),
					ke.forEach(c),
					this.h()
			},
			h() {
				y(u, 'class', 'people svelte-sanvdh'), y(o, 'data-pagefind-ignore', '')
			},
			m(w, L) {
				E(e, w, L),
					_(w, n, L),
					_(w, l, L),
					F(l, t),
					_(w, s, L),
					E(i, w, L),
					_(w, a, L),
					_(w, o, L),
					V && V.m(o, null),
					F(o, f),
					F(o, u)
				for (let oe = 0; oe < N.length; oe += 1) N[oe] && N[oe].m(u, null)
				_(w, d, L), _(w, p, L), _(w, b, L), _(w, k, L), F(k, P), E(T, k, null), (A = !0)
			},
			p(w, [L]) {
				if (L & 1) {
					Y = se(w[0])
					let K
					for (K = 0; K < Y.length; K += 1) {
						const ke = at(w, Y, K)
						N[K]
							? (N[K].p(ke, L), h(N[K], 1))
							: ((N[K] = ft(ke)), N[K].c(), h(N[K], 1), N[K].m(u, null))
					}
					for (q(), K = Y.length; K < N.length; K += 1) re(K)
					j()
				}
				const oe = {}
				L & 256 && (oe.$$scope = { dirty: L, ctx: w }), T.$set(oe)
			},
			i(w) {
				if (!A) {
					h(e.$$.fragment, w), h(i.$$.fragment, w)
					for (let L = 0; L < Y.length; L += 1) h(N[L])
					h(T.$$.fragment, w), (A = !0)
				}
			},
			o(w) {
				m(e.$$.fragment, w), m(i.$$.fragment, w), (N = N.filter(Boolean))
				for (let L = 0; L < N.length; L += 1) m(N[L])
				m(T.$$.fragment, w), (A = !1)
			},
			d(w) {
				w && (c(n), c(l), c(s), c(a), c(o), c(d), c(p), c(b), c(k)),
					S(e, w),
					S(i, w),
					V && V.d(),
					de(N, w),
					S(T)
			}
		}
	)
}
function ts(r, e, n) {
	let { data: l } = e
	const { props: t } = l,
		{ title: s, description: i, date: a } = Ct
	return (
		(r.$$set = (o) => {
			'data' in o && n(4, (l = o.data))
		}),
		[t, s, i, a, l]
	)
}
class hs extends U {
	constructor(e) {
		super(), H(this, e, ts, es, Z, { data: 4 })
	}
}
export { hs as default }
