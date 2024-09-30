import {
	s as I,
	u as w,
	a as k,
	B as Y,
	o as M,
	C as Z,
	h as S,
	j as b,
	R as z,
	l as E,
	m as T,
	v as A,
	w as C,
	x as P,
	I as ee,
	S as G,
	e as p,
	c as H,
	f as F,
	k as W,
	A as te,
	M as le,
	z as ne,
	O as se
} from './scheduler.D9JQr37X.js'
import {
	S as j,
	i as O,
	a as m,
	t as g,
	c as V,
	b as q,
	m as B,
	d as D,
	g as y,
	e as $
} from './index.D-WnFt3a.js'
import { g as N, a as L } from './a.svelte_svelte_type_style_lang.DfavE63L.js'
import { e as J } from './each.Gi_i5kkj.js'
import { p as re } from './stores.yb3qHBKv.js'
import { p as oe } from './entry.DgPt5EtK.js'
/**
 * @license lucide-svelte v0.325.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ie = {
		xmlns: 'http://www.w3.org/2000/svg',
		width: 24,
		height: 24,
		viewBox: '0 0 24 24',
		fill: 'none',
		stroke: 'currentColor',
		'stroke-width': 2,
		'stroke-linecap': 'round',
		'stroke-linejoin': 'round'
	},
	K = ie
function Q(r, e, s) {
	const n = r.slice()
	return (n[10] = e[s][0]), (n[11] = e[s][1]), n
}
function R(r) {
	let e,
		s = [r[11]],
		n = {}
	for (let l = 0; l < s.length; l += 1) n = k(n, s[l])
	return {
		c() {
			;(e = Y(r[10])), this.h()
		},
		l(l) {
			;(e = Z(l, r[10], {})), S(e).forEach(b), this.h()
		},
		h() {
			z(e, n)
		},
		m(l, t) {
			E(l, e, t)
		},
		p(l, t) {
			z(e, (n = N(s, [t & 32 && l[11]])))
		},
		d(l) {
			l && b(e)
		}
	}
}
function U(r) {
	let e = r[10],
		s,
		n = r[10] && R(r)
	return {
		c() {
			n && n.c(), (s = M())
		},
		l(l) {
			n && n.l(l), (s = M())
		},
		m(l, t) {
			n && n.m(l, t), E(l, s, t)
		},
		p(l, t) {
			l[10]
				? e
					? I(e, l[10])
						? (n.d(1), (n = R(l)), (e = l[10]), n.c(), n.m(s.parentNode, s))
						: n.p(l, t)
					: ((n = R(l)), (e = l[10]), n.c(), n.m(s.parentNode, s))
				: e && (n.d(1), (n = null), (e = l[10]))
		},
		d(l) {
			l && b(s), n && n.d(l)
		}
	}
}
function ae(r) {
	let e,
		s,
		n,
		l,
		t,
		o = J(r[5]),
		i = []
	for (let f = 0; f < o.length; f += 1) i[f] = U(Q(r, o, f))
	const d = r[9].default,
		u = w(d, r, r[8], null)
	let h = [
			K,
			r[6],
			{ width: r[2] },
			{ height: r[2] },
			{ stroke: r[1] },
			{ 'stroke-width': (n = r[4] ? (Number(r[3]) * 24) / Number(r[2]) : r[3]) },
			{ class: (l = `lucide-icon lucide lucide-${r[0]} ${r[7].class ?? ''}`) }
		],
		_ = {}
	for (let f = 0; f < h.length; f += 1) _ = k(_, h[f])
	return {
		c() {
			e = Y('svg')
			for (let f = 0; f < i.length; f += 1) i[f].c()
			;(s = M()), u && u.c(), this.h()
		},
		l(f) {
			e = Z(f, 'svg', { width: !0, height: !0, stroke: !0, 'stroke-width': !0, class: !0 })
			var a = S(e)
			for (let c = 0; c < i.length; c += 1) i[c].l(a)
			;(s = M()), u && u.l(a), a.forEach(b), this.h()
		},
		h() {
			z(e, _)
		},
		m(f, a) {
			E(f, e, a)
			for (let c = 0; c < i.length; c += 1) i[c] && i[c].m(e, null)
			T(e, s), u && u.m(e, null), (t = !0)
		},
		p(f, [a]) {
			if (a & 32) {
				o = J(f[5])
				let c
				for (c = 0; c < o.length; c += 1) {
					const v = Q(f, o, c)
					i[c] ? i[c].p(v, a) : ((i[c] = U(v)), i[c].c(), i[c].m(e, s))
				}
				for (; c < i.length; c += 1) i[c].d(1)
				i.length = o.length
			}
			u && u.p && (!t || a & 256) && A(u, d, f, f[8], t ? P(d, f[8], a, null) : C(f[8]), null),
				z(
					e,
					(_ = N(h, [
						K,
						a & 64 && f[6],
						(!t || a & 4) && { width: f[2] },
						(!t || a & 4) && { height: f[2] },
						(!t || a & 2) && { stroke: f[1] },
						(!t || (a & 28 && n !== (n = f[4] ? (Number(f[3]) * 24) / Number(f[2]) : f[3]))) && {
							'stroke-width': n
						},
						(!t ||
							(a & 129 && l !== (l = `lucide-icon lucide lucide-${f[0]} ${f[7].class ?? ''}`))) && {
							class: l
						}
					]))
				)
		},
		i(f) {
			t || (m(u, f), (t = !0))
		},
		o(f) {
			g(u, f), (t = !1)
		},
		d(f) {
			f && b(e), ee(i, f), u && u.d(f)
		}
	}
}
function fe(r, e, s) {
	const n = ['name', 'color', 'size', 'strokeWidth', 'absoluteStrokeWidth', 'iconNode']
	let l = G(e, n),
		{ $$slots: t = {}, $$scope: o } = e,
		{ name: i } = e,
		{ color: d = 'currentColor' } = e,
		{ size: u = 24 } = e,
		{ strokeWidth: h = 2 } = e,
		{ absoluteStrokeWidth: _ = !1 } = e,
		{ iconNode: f } = e
	return (
		(r.$$set = (a) => {
			s(7, (e = k(k({}, e), p(a)))),
				s(6, (l = G(e, n))),
				'name' in a && s(0, (i = a.name)),
				'color' in a && s(1, (d = a.color)),
				'size' in a && s(2, (u = a.size)),
				'strokeWidth' in a && s(3, (h = a.strokeWidth)),
				'absoluteStrokeWidth' in a && s(4, (_ = a.absoluteStrokeWidth)),
				'iconNode' in a && s(5, (f = a.iconNode)),
				'$$scope' in a && s(8, (o = a.$$scope))
		}),
		(e = p(e)),
		[i, d, u, h, _, f, l, e, o, t]
	)
}
class x extends j {
	constructor(e) {
		super(),
			O(this, e, fe, ae, I, {
				name: 0,
				color: 1,
				size: 2,
				strokeWidth: 3,
				absoluteStrokeWidth: 4,
				iconNode: 5
			})
	}
}
function ue(r) {
	let e
	const s = r[2].default,
		n = w(s, r, r[3], null)
	return {
		c() {
			n && n.c()
		},
		l(l) {
			n && n.l(l)
		},
		m(l, t) {
			n && n.m(l, t), (e = !0)
		},
		p(l, t) {
			n && n.p && (!e || t & 8) && A(n, s, l, l[3], e ? P(s, l[3], t, null) : C(l[3]), null)
		},
		i(l) {
			e || (m(n, l), (e = !0))
		},
		o(l) {
			g(n, l), (e = !1)
		},
		d(l) {
			n && n.d(l)
		}
	}
}
function ce(r) {
	let e, s
	const n = [{ name: 'external-link' }, r[1], { iconNode: r[0] }]
	let l = { $$slots: { default: [ue] }, $$scope: { ctx: r } }
	for (let t = 0; t < n.length; t += 1) l = k(l, n[t])
	return (
		(e = new x({ props: l })),
		{
			c() {
				V(e.$$.fragment)
			},
			l(t) {
				q(e.$$.fragment, t)
			},
			m(t, o) {
				B(e, t, o), (s = !0)
			},
			p(t, [o]) {
				const i = o & 3 ? N(n, [n[0], o & 2 && L(t[1]), o & 1 && { iconNode: t[0] }]) : {}
				o & 8 && (i.$$scope = { dirty: o, ctx: t }), e.$set(i)
			},
			i(t) {
				s || (m(e.$$.fragment, t), (s = !0))
			},
			o(t) {
				g(e.$$.fragment, t), (s = !1)
			},
			d(t) {
				D(e, t)
			}
		}
	)
}
function he(r, e, s) {
	let { $$slots: n = {}, $$scope: l } = e
	const t = [
		['path', { d: 'M15 3h6v6' }],
		['path', { d: 'M10 14 21 3' }],
		['path', { d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' }]
	]
	return (
		(r.$$set = (o) => {
			s(1, (e = k(k({}, e), p(o)))), '$$scope' in o && s(3, (l = o.$$scope))
		}),
		(e = p(e)),
		[t, e, n, l]
	)
}
class _e extends j {
	constructor(e) {
		super(), O(this, e, he, ce, I, {})
	}
}
function me(r) {
	let e
	const s = r[2].default,
		n = w(s, r, r[3], null)
	return {
		c() {
			n && n.c()
		},
		l(l) {
			n && n.l(l)
		},
		m(l, t) {
			n && n.m(l, t), (e = !0)
		},
		p(l, t) {
			n && n.p && (!e || t & 8) && A(n, s, l, l[3], e ? P(s, l[3], t, null) : C(l[3]), null)
		},
		i(l) {
			e || (m(n, l), (e = !0))
		},
		o(l) {
			g(n, l), (e = !1)
		},
		d(l) {
			n && n.d(l)
		}
	}
}
function de(r) {
	let e, s
	const n = [{ name: 'mail' }, r[1], { iconNode: r[0] }]
	let l = { $$slots: { default: [me] }, $$scope: { ctx: r } }
	for (let t = 0; t < n.length; t += 1) l = k(l, n[t])
	return (
		(e = new x({ props: l })),
		{
			c() {
				V(e.$$.fragment)
			},
			l(t) {
				q(e.$$.fragment, t)
			},
			m(t, o) {
				B(e, t, o), (s = !0)
			},
			p(t, [o]) {
				const i = o & 3 ? N(n, [n[0], o & 2 && L(t[1]), o & 1 && { iconNode: t[0] }]) : {}
				o & 8 && (i.$$scope = { dirty: o, ctx: t }), e.$set(i)
			},
			i(t) {
				s || (m(e.$$.fragment, t), (s = !0))
			},
			o(t) {
				g(e.$$.fragment, t), (s = !1)
			},
			d(t) {
				D(e, t)
			}
		}
	)
}
function ge(r, e, s) {
	let { $$slots: n = {}, $$scope: l } = e
	const t = [
		['rect', { width: '20', height: '16', x: '2', y: '4', rx: '2' }],
		['path', { d: 'm22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' }]
	]
	return (
		(r.$$set = (o) => {
			s(1, (e = k(k({}, e), p(o)))), '$$scope' in o && s(3, (l = o.$$scope))
		}),
		(e = p(e)),
		[t, e, n, l]
	)
}
class ke extends j {
	constructor(e) {
		super(), O(this, e, ge, de, I, {})
	}
}
function X(r) {
	let e, s, n, l, t
	const o = [ve, be],
		i = []
	function d(u, h) {
		return u[2] == u[4].External ? 0 : u[2] == u[4].Mail ? 1 : -1
	}
	return (
		~(n = d(r)) && (l = i[n] = o[n](r)),
		{
			c() {
				;(e = H('span')), (s = H('div')), l && l.c(), this.h()
			},
			l(u) {
				e = F(u, 'SPAN', { style: !0 })
				var h = S(e)
				s = F(h, 'DIV', { class: !0 })
				var _ = S(s)
				l && l.l(_), _.forEach(b), h.forEach(b), this.h()
			},
			h() {
				W(s, 'class', 'icon svelte-1a1wbna'), ne(e, 'white-space', 'nowrap')
			},
			m(u, h) {
				E(u, e, h), T(e, s), ~n && i[n].m(s, null), (t = !0)
			},
			p(u, h) {
				let _ = n
				;(n = d(u)),
					n === _
						? ~n && i[n].p(u, h)
						: (l &&
								(y(),
								g(i[_], 1, 1, () => {
									i[_] = null
								}),
								$()),
							~n
								? ((l = i[n]), l ? l.p(u, h) : ((l = i[n] = o[n](u)), l.c()), m(l, 1), l.m(s, null))
								: (l = null))
			},
			i(u) {
				t || (m(l), (t = !0))
			},
			o(u) {
				g(l), (t = !1)
			},
			d(u) {
				u && b(e), ~n && i[n].d()
			}
		}
	)
}
function be(r) {
	let e, s
	const n = [r[5]]
	let l = {}
	for (let t = 0; t < n.length; t += 1) l = k(l, n[t])
	return (
		(e = new ke({ props: l })),
		{
			c() {
				V(e.$$.fragment)
			},
			l(t) {
				q(e.$$.fragment, t)
			},
			m(t, o) {
				B(e, t, o), (s = !0)
			},
			p(t, o) {
				const i = o & 32 ? N(n, [L(t[5])]) : {}
				e.$set(i)
			},
			i(t) {
				s || (m(e.$$.fragment, t), (s = !0))
			},
			o(t) {
				g(e.$$.fragment, t), (s = !1)
			},
			d(t) {
				D(e, t)
			}
		}
	)
}
function ve(r) {
	let e, s
	const n = [r[5]]
	let l = {}
	for (let t = 0; t < n.length; t += 1) l = k(l, n[t])
	return (
		(e = new _e({ props: l })),
		{
			c() {
				V(e.$$.fragment)
			},
			l(t) {
				q(e.$$.fragment, t)
			},
			m(t, o) {
				B(e, t, o), (s = !0)
			},
			p(t, o) {
				const i = o & 32 ? N(n, [L(t[5])]) : {}
				e.$set(i)
			},
			i(t) {
				s || (m(e.$$.fragment, t), (s = !0))
			},
			o(t) {
				g(e.$$.fragment, t), (s = !1)
			},
			d(t) {
				D(e, t)
			}
		}
	)
}
function pe(r) {
	let e, s
	const n = r[7].default,
		l = w(n, r, r[6], null)
	let t = r[2] != r[4].Internal && X(r)
	return {
		c() {
			;(e = H('a')), l && l.c(), t && t.c(), this.h()
		},
		l(o) {
			e = F(o, 'A', { href: !0, target: !0 })
			var i = S(e)
			l && l.l(i), t && t.l(i), i.forEach(b), this.h()
		},
		h() {
			W(e, 'href', r[0]), W(e, 'target', r[1])
		},
		m(o, i) {
			E(o, e, i), l && l.m(e, null), t && t.m(e, null), r[8](e), (s = !0)
		},
		p(o, [i]) {
			l && l.p && (!s || i & 64) && A(l, n, o, o[6], s ? P(n, o[6], i, null) : C(o[6]), null),
				o[2] != o[4].Internal
					? t
						? (t.p(o, i), i & 4 && m(t, 1))
						: ((t = X(o)), t.c(), m(t, 1), t.m(e, null))
					: t &&
						(y(),
						g(t, 1, 1, () => {
							t = null
						}),
						$()),
				(!s || i & 1) && W(e, 'href', o[0]),
				(!s || i & 2) && W(e, 'target', o[1])
		},
		i(o) {
			s || (m(l, o), m(t), (s = !0))
		},
		o(o) {
			g(l, o), g(t), (s = !1)
		},
		d(o) {
			o && b(e), l && l.d(o), t && t.d(), r[8](null)
		}
	}
}
function Ne(r, e, s) {
	let n
	te(r, re, (a) => s(9, (n = a)))
	let { $$slots: l = {}, $$scope: t } = e
	var o = ((a) => (
		(a[(a.Internal = 0)] = 'Internal'),
		(a[(a.External = 1)] = 'External'),
		(a[(a.Mail = 2)] = 'Mail'),
		a
	))(o || {})
	let { href: i } = e,
		{ target: d = null } = e
	const u = { size: '0.8em' }
	let h = 0,
		_
	;(i.startsWith('http:') || i.startsWith('https:')) && !i.startsWith('https://pauseai.info/')
		? (h = 1)
		: i.startsWith('mailto:') && (h = 2),
		le(() => {
			i.startsWith('#') &&
				_.addEventListener('click', (a) => {
					a.preventDefault()
					const c = n.url
					;(c.hash = i), oe(c, n.state)
					const v = document.querySelector(i)
					v &&
						(v.scrollIntoView({ behavior: 'smooth' }),
						(v.tabIndex = -1),
						v.focus({ preventScroll: !0 }))
				})
		})
	function f(a) {
		se[a ? 'unshift' : 'push'](() => {
			;(_ = a), s(3, _)
		})
	}
	return (
		(r.$$set = (a) => {
			'href' in a && s(0, (i = a.href)),
				'target' in a && s(1, (d = a.target)),
				'$$scope' in a && s(6, (t = a.$$scope))
		}),
		[i, d, h, _, o, u, t, l, f]
	)
}
class we extends j {
	constructor(e) {
		super(), O(this, e, Ne, pe, I, { href: 0, target: 1 })
	}
}
export { we as A, x as I }
