import {
	s as ee,
	t as L,
	o as x,
	i as B,
	l as g,
	N as te,
	n as G,
	j as p,
	c as A,
	b as N,
	f as P,
	h as V,
	d as S,
	k as C,
	m as $,
	aj as de,
	J as ue,
	W as Ae,
	r as Te,
	ak as De,
	O as Y,
	ah as J,
	g as fe
} from './scheduler.D9JQr37X.js'
import {
	S as oe,
	i as ne,
	c as j,
	b as M,
	m as O,
	a as v,
	h as Pe,
	t as w,
	d as H,
	g as K,
	e as Q,
	k as U
} from './index.D-WnFt3a.js'
import { B as le } from './Button.Ip6Rcx0-.js'
import { f as We } from './index.BQp5C8W6.js'
import { P as Ve } from './PostMeta.BRGG6AYg.js'
function _e(n) {
	let e = n[2]() + '',
		t
	return {
		c() {
			t = L(e)
		},
		l(i) {
			t = B(i, e)
		},
		m(i, l) {
			g(i, t, l)
		},
		p(i, l) {
			l & 4 && e !== (e = i[2]() + '') && te(t, e)
		},
		d(i) {
			i && p(t)
		}
	}
}
function qe(n) {
	let e = n[1].toFixed(n[3]) + '',
		t,
		i,
		l,
		o = n[0] && _e(n)
	return {
		c() {
			;(t = L(e)),
				(i = L(`%
`)),
				o && o.c(),
				(l = x())
		},
		l(r) {
			;(t = B(r, e)),
				(i = B(
					r,
					`%
`
				)),
				o && o.l(r),
				(l = x())
		},
		m(r, a) {
			g(r, t, a), g(r, i, a), o && o.m(r, a), g(r, l, a)
		},
		p(r, [a]) {
			a & 10 && e !== (e = r[1].toFixed(r[3]) + '') && te(t, e),
				r[0]
					? o
						? o.p(r, a)
						: ((o = _e(r)), o.c(), o.m(l.parentNode, l))
					: o && (o.d(1), (o = null))
		},
		i: G,
		o: G,
		d(r) {
			r && (p(t), p(i), p(l)), o && o.d(r)
		}
	}
}
function Ne(n, e, t) {
	let i,
		l,
		o,
		{ probability: r = 0.5 } = e,
		{ showLabel: a = !1 } = e
	return (
		(n.$$set = (u) => {
			'probability' in u && t(4, (r = u.probability)), 'showLabel' in u && t(0, (a = u.showLabel))
		}),
		(n.$$.update = () => {
			n.$$.dirty & 16 && t(1, (i = r * 100)),
				n.$$.dirty & 2 && t(3, (l = i < 1 ? 2 : i < 10 ? 1 : 0)),
				n.$$.dirty & 16 &&
					t(
						2,
						(o = () =>
							r == 0
								? 'impossible'
								: r < 0.1
									? 'unlikely'
									: r < 0.4
										? 'maybe'
										: r < 0.6
											? 'possibly'
											: r < 0.9
												? 'likely'
												: r < 1
													? 'probably'
													: r == 1
														? 'certain'
														: 'very likely')
					)
		}),
		[a, i, o, l, r]
	)
}
class be extends oe {
	constructor(e) {
		super(), ne(this, e, Ne, qe, ee, { probability: 4, showLabel: 0 })
	}
}
function Se(n) {
	let e, t, i, l, o, r, a, u, f
	return (
		(i = new be({ props: { probability: n[0], showLabel: !0 } })),
		{
			c() {
				;(e = A('div')), (t = A('label')), j(i.$$.fragment), (l = N()), (o = A('input')), this.h()
			},
			l(s) {
				e = P(s, 'DIV', { class: !0 })
				var c = V(e)
				t = P(c, 'LABEL', { for: !0 })
				var h = V(t)
				M(i.$$.fragment, h),
					h.forEach(p),
					(l = S(c)),
					(o = P(c, 'INPUT', { type: !0, id: !0, min: !0, max: !0, step: !0, class: !0 })),
					c.forEach(p),
					this.h()
			},
			h() {
				C(t, 'for', 'slider'),
					C(o, 'type', 'range'),
					C(o, 'id', 'slider'),
					C(o, 'min', '0'),
					C(o, 'max', '1'),
					C(o, 'step', '0.01'),
					C(o, 'class', 'svelte-1e6e21r'),
					C(e, 'class', 'percentage-slider svelte-1e6e21r')
			},
			m(s, c) {
				g(s, e, c),
					$(e, t),
					O(i, t, null),
					$(e, l),
					$(e, o),
					de(o, n[0]),
					(a = !0),
					u || ((f = [ue(o, 'change', n[1]), ue(o, 'input', n[1])]), (u = !0))
			},
			p(s, [c]) {
				const h = {}
				c & 1 && (h.probability = s[0]), i.$set(h), c & 1 && de(o, s[0])
			},
			i(s) {
				a ||
					(v(i.$$.fragment, s),
					s &&
						(r ||
							Ae(() => {
								;(r = Pe(e, We, { duration: 200 })), r.start()
							})),
					(a = !0))
			},
			o(s) {
				w(i.$$.fragment, s), (a = !1)
			},
			d(s) {
				s && p(e), H(i), (u = !1), Te(f)
			}
		}
	)
}
function Le(n, e, t) {
	let { probability: i = 0.5 } = e
	function l() {
		;(i = De(this.value)), t(0, i)
	}
	return (
		(n.$$set = (o) => {
			'probability' in o && t(0, (i = o.probability))
		}),
		[i, l]
	)
}
class Be extends oe {
	constructor(e) {
		super(), ne(this, e, Le, Se, ee, { probability: 0 })
	}
}
function me(n) {
	let e, t, i
	return (
		(t = new be({ props: { probability: n[2] ? n[1] : 1 - n[1] } })),
		{
			c() {
				;(e = A('div')), j(t.$$.fragment), this.h()
			},
			l(l) {
				e = P(l, 'DIV', { class: !0 })
				var o = V(e)
				M(t.$$.fragment, o), o.forEach(p), this.h()
			},
			h() {
				C(e, 'class', 'probabilities svelte-1ukuh3b')
			},
			m(l, o) {
				g(l, e, o), O(t, e, null), (i = !0)
			},
			p(l, o) {
				const r = {}
				o & 6 && (r.probability = l[2] ? l[1] : 1 - l[1]), t.$set(r)
			},
			i(l) {
				i || (v(t.$$.fragment, l), (i = !0))
			},
			o(l) {
				w(t.$$.fragment, l), (i = !1)
			},
			d(l) {
				l && p(e), H(t)
			}
		}
	)
}
function je(n) {
	let e,
		t = n[2] ? 'Yes' : 'No',
		i,
		l,
		o,
		r = n[3] && me(n)
	return {
		c() {
			;(e = A('div')), (i = L(t)), (l = N()), r && r.c(), this.h()
		},
		l(a) {
			e = P(a, 'DIV', { class: !0 })
			var u = V(e)
			;(i = B(u, t)), (l = S(u)), r && r.l(u), u.forEach(p), this.h()
		},
		h() {
			C(e, 'class', 'inButton svelte-1ukuh3b')
		},
		m(a, u) {
			g(a, e, u), $(e, i), $(e, l), r && r.m(e, null), (o = !0)
		},
		p(a, u) {
			;(!o || u & 4) && t !== (t = a[2] ? 'Yes' : 'No') && te(i, t),
				a[3]
					? r
						? (r.p(a, u), u & 8 && v(r, 1))
						: ((r = me(a)), r.c(), v(r, 1), r.m(e, null))
					: r &&
						(K(),
						w(r, 1, 1, () => {
							r = null
						}),
						Q())
		},
		i(a) {
			o || (v(r), (o = !0))
		},
		o(a) {
			w(r), (o = !1)
		},
		d(a) {
			a && p(e), r && r.d()
		}
	}
}
function Me(n) {
	let e, t, i, l
	return (
		(t = new le({
			props: { subtle: n[0] && !n[5], $$slots: { default: [je] }, $$scope: { ctx: n } }
		})),
		t.$on('click', n[6]),
		{
			c() {
				;(e = A('div')), j(t.$$.fragment), this.h()
			},
			l(o) {
				e = P(o, 'DIV', { class: !0 })
				var r = V(e)
				M(t.$$.fragment, r), r.forEach(p), this.h()
			},
			h() {
				C(e, 'class', (i = 'wrapper ' + (n[5] ? 'selected' : '') + ' svelte-1ukuh3b'))
			},
			m(o, r) {
				g(o, e, r), O(t, e, null), (l = !0)
			},
			p(o, [r]) {
				const a = {}
				r & 33 && (a.subtle = o[0] && !o[5]),
					r & 142 && (a.$$scope = { dirty: r, ctx: o }),
					t.$set(a),
					(!l ||
						(r & 32 && i !== (i = 'wrapper ' + (o[5] ? 'selected' : '') + ' svelte-1ukuh3b'))) &&
						C(e, 'class', i)
			},
			i(o) {
				l || (v(t.$$.fragment, o), (l = !0))
			},
			o(o) {
				w(t.$$.fragment, o), (l = !1)
			},
			d(o) {
				o && p(e), H(t)
			}
		}
	)
}
function Oe(n, e, t) {
	let i,
		{ selected: l } = e,
		{ probability: o } = e,
		{ yes: r = !1 } = e,
		{ showProbabilities: a } = e,
		{ onClick: u } = e
	const f = () => {
		t(0, (l = r ? 'yes' : 'no')), u()
	}
	return (
		(n.$$set = (s) => {
			'selected' in s && t(0, (l = s.selected)),
				'probability' in s && t(1, (o = s.probability)),
				'yes' in s && t(2, (r = s.yes)),
				'showProbabilities' in s && t(3, (a = s.showProbabilities)),
				'onClick' in s && t(4, (u = s.onClick))
		}),
		(n.$$.update = () => {
			n.$$.dirty & 5 && t(5, (i = l == (r ? 'yes' : 'no')))
		}),
		[l, o, r, a, u, i, f]
	)
}
class ye extends oe {
	constructor(e) {
		super(),
			ne(this, e, Oe, Me, ee, {
				selected: 0,
				probability: 1,
				yes: 2,
				showProbabilities: 3,
				onClick: 4
			})
	}
}
function He(n) {
	let e
	return {
		c() {
			e = L('Info')
		},
		l(t) {
			e = B(t, 'Info')
		},
		m(t, i) {
			g(t, e, i)
		},
		d(t) {
			t && p(e)
		}
	}
}
function ge(n) {
	let e,
		t,
		i = n[3].explanation + '',
		l
	return {
		c() {
			;(e = A('div')), (t = A('p')), (l = L(i))
		},
		l(o) {
			e = P(o, 'DIV', {})
			var r = V(e)
			t = P(r, 'P', {})
			var a = V(t)
			;(l = B(a, i)), a.forEach(p), r.forEach(p)
		},
		m(o, r) {
			g(o, e, r), $(e, t), $(t, l)
		},
		p(o, r) {
			r & 8 && i !== (i = o[3].explanation + '') && te(l, i)
		},
		d(o) {
			o && p(e)
		}
	}
}
function Re(n) {
	return { c: G, l: G, m: G, p: G, i: G, o: G, d: G }
}
function Fe(n) {
	let e, t, i
	function l(r) {
		n[14](r)
	}
	let o = {}
	return (
		n[5] !== void 0 && (o.probability = n[5]),
		(e = new Be({ props: o })),
		Y.push(() => U(e, 'probability', l)),
		{
			c() {
				j(e.$$.fragment)
			},
			l(r) {
				M(e.$$.fragment, r)
			},
			m(r, a) {
				O(e, r, a), (i = !0)
			},
			p(r, a) {
				const u = {}
				!t && a & 32 && ((t = !0), (u.probability = r[5]), J(() => (t = !1))), e.$set(u)
			},
			i(r) {
				i || (v(e.$$.fragment, r), (i = !0))
			},
			o(r) {
				w(e.$$.fragment, r), (i = !1)
			},
			d(r) {
				H(e, r)
			}
		}
	)
}
function ve(n) {
	let e = n[12].text,
		t,
		i,
		l = ke(n)
	return {
		c() {
			l.c(), (t = x())
		},
		l(o) {
			l.l(o), (t = x())
		},
		m(o, r) {
			l.m(o, r), g(o, t, r), (i = !0)
		},
		p(o, r) {
			r & 4096 && ee(e, (e = o[12].text))
				? (K(), w(l, 1, 1, G), Q(), (l = ke(o)), l.c(), v(l, 1), l.m(t.parentNode, t))
				: l.p(o, r)
		},
		i(o) {
			i || (v(l), (i = !0))
		},
		o(o) {
			w(l), (i = !1)
		},
		d(o) {
			o && p(t), l.d(o)
		}
	}
}
function Ye(n) {
	let e,
		t,
		i,
		l,
		o = n[12].text + '',
		r,
		a,
		u,
		f,
		s
	function c(d, _) {
		return d[12].type == 'doom' ? Je : Ge
	}
	let h = c(n),
		W = h(n),
		b = n[1] && we(n)
	return (
		(f = new le({ props: { subtle: !0, $$slots: { default: [Ue] }, $$scope: { ctx: n } } })),
		f.$on('click', n[20]),
		{
			c() {
				;(e = A('h2')),
					W.c(),
					(t = N()),
					b && b.c(),
					(i = N()),
					(l = A('p')),
					(r = L(o)),
					(a = N()),
					(u = A('div')),
					j(f.$$.fragment),
					this.h()
			},
			l(d) {
				e = P(d, 'H2', {})
				var _ = V(e)
				W.l(_), _.forEach(p), (t = S(d)), b && b.l(d), (i = S(d)), (l = P(d, 'P', {}))
				var T = V(l)
				;(r = B(T, o)), T.forEach(p), (a = S(d)), (u = P(d, 'DIV', { class: !0 }))
				var y = V(u)
				M(f.$$.fragment, y), y.forEach(p), this.h()
			},
			h() {
				C(u, 'class', 'buttons svelte-1c5y11y')
			},
			m(d, _) {
				g(d, e, _),
					W.m(e, null),
					g(d, t, _),
					b && b.m(d, _),
					g(d, i, _),
					g(d, l, _),
					$(l, r),
					g(d, a, _),
					g(d, u, _),
					O(f, u, null),
					(s = !0)
			},
			p(d, _) {
				h !== (h = c(d)) && (W.d(1), (W = h(d)), W && (W.c(), W.m(e, null))),
					d[1]
						? b
							? (b.p(d, _), _ & 2 && v(b, 1))
							: ((b = we(d)), b.c(), v(b, 1), b.m(i.parentNode, i))
						: b &&
							(K(),
							w(b, 1, 1, () => {
								b = null
							}),
							Q()),
					(!s || _ & 4096) && o !== (o = d[12].text + '') && te(r, o)
				const T = {}
				_ & 4194304 && (T.$$scope = { dirty: _, ctx: d }), f.$set(T)
			},
			i(d) {
				s || (v(b), v(f.$$.fragment, d), (s = !0))
			},
			o(d) {
				w(b), w(f.$$.fragment, d), (s = !1)
			},
			d(d) {
				d && (p(e), p(t), p(i), p(l), p(a), p(u)), W.d(), b && b.d(d), H(f)
			}
		}
	)
}
function ze(n) {
	let e, t, i, l, o
	function r(s) {
		n[17](s)
	}
	function a(s) {
		n[18](s)
	}
	function u(s) {
		n[19](s)
	}
	let f = { node: n[12], parentProbability: n[4] * n[11] }
	return (
		n[1] !== void 0 && (f.showProbabilities = n[1]),
		n[0] !== void 0 && (f.top = n[0]),
		n[2] !== void 0 && (f.intro = n[2]),
		(e = new Ee({ props: f })),
		Y.push(() => U(e, 'showProbabilities', r)),
		Y.push(() => U(e, 'top', a)),
		Y.push(() => U(e, 'intro', u)),
		{
			c() {
				j(e.$$.fragment)
			},
			l(s) {
				M(e.$$.fragment, s)
			},
			m(s, c) {
				O(e, s, c), (o = !0)
			},
			p(s, c) {
				const h = {}
				c & 4096 && (h.node = s[12]),
					c & 2064 && (h.parentProbability = s[4] * s[11]),
					!t && c & 2 && ((t = !0), (h.showProbabilities = s[1]), J(() => (t = !1))),
					!i && c & 1 && ((i = !0), (h.top = s[0]), J(() => (i = !1))),
					!l && c & 4 && ((l = !0), (h.intro = s[2]), J(() => (l = !1))),
					e.$set(h)
			},
			i(s) {
				o || (v(e.$$.fragment, s), (o = !0))
			},
			o(s) {
				w(e.$$.fragment, s), (o = !1)
			},
			d(s) {
				H(e, s)
			}
		}
	)
}
function Ge(n) {
	let e
	return {
		c() {
			e = L('👍 Safety!')
		},
		l(t) {
			e = B(t, '👍 Safety!')
		},
		m(t, i) {
			g(t, e, i)
		},
		d(t) {
			t && p(e)
		}
	}
}
function Je(n) {
	let e
	return {
		c() {
			e = L('💀 Doom️...')
		},
		l(t) {
			e = B(t, '💀 Doom️...')
		},
		m(t, i) {
			g(t, e, i)
		},
		d(t) {
			t && p(e)
		}
	}
}
function we(n) {
	let e, t, i, l, o, r, a
	return (
		(l = new be({ props: { probability: n[4] * n[11] } })),
		{
			c() {
				;(e = A('p')),
					(t = A('b')),
					(i = L('Probability of this specific outcome path: ')),
					j(l.$$.fragment),
					(o = L('.')),
					(r = L(`
							This is calculated by multiplying all the probabilities of the values above.`))
			},
			l(u) {
				e = P(u, 'P', {})
				var f = V(e)
				t = P(f, 'B', {})
				var s = V(t)
				;(i = B(s, 'Probability of this specific outcome path: ')),
					M(l.$$.fragment, s),
					(o = B(s, '.')),
					s.forEach(p),
					(r = B(
						f,
						`
							This is calculated by multiplying all the probabilities of the values above.`
					)),
					f.forEach(p)
			},
			m(u, f) {
				g(u, e, f), $(e, t), $(t, i), O(l, t, null), $(t, o), $(e, r), (a = !0)
			},
			p(u, f) {
				const s = {}
				f & 2064 && (s.probability = u[4] * u[11]), l.$set(s)
			},
			i(u) {
				a || (v(l.$$.fragment, u), (a = !0))
			},
			o(u) {
				w(l.$$.fragment, u), (a = !1)
			},
			d(u) {
				u && p(e), H(l)
			}
		}
	)
}
function Ue(n) {
	let e
	return {
		c() {
			e = L('Restart')
		},
		l(t) {
			e = B(t, 'Restart')
		},
		m(t, i) {
			g(t, e, i)
		},
		d(t) {
			t && p(e)
		}
	}
}
function ke(n) {
	let e, t, i, l, o
	const r = [ze, Ye],
		a = []
	function u(f, s) {
		return f[12].type == 'question' ? 0 : 1
	}
	return (
		(t = u(n)),
		(i = a[t] = r[t](n)),
		{
			c() {
				;(e = A('div')), i.c(), this.h()
			},
			l(f) {
				e = P(f, 'DIV', { class: !0 })
				var s = V(e)
				i.l(s), s.forEach(p), this.h()
			},
			h() {
				C(e, 'class', 'child svelte-1c5y11y')
			},
			m(f, s) {
				g(f, e, s), a[t].m(e, null), n[21](e), (o = !0)
			},
			p(f, s) {
				let c = t
				;(t = u(f)),
					t === c
						? a[t].p(f, s)
						: (K(),
							w(a[c], 1, 1, () => {
								a[c] = null
							}),
							Q(),
							(i = a[t]),
							i ? i.p(f, s) : ((i = a[t] = r[t](f)), i.c()),
							v(i, 1),
							i.m(e, null))
			},
			i(f) {
				o ||
					(v(i),
					f &&
						(l ||
							Ae(() => {
								;(l = Pe(e, We, { duration: 200 })), l.start()
							})),
					(o = !0))
			},
			o(f) {
				w(i), (o = !1)
			},
			d(f) {
				f && p(e), a[t].d(), n[21](null)
			}
		}
	)
}
function Ke(n) {
	let e,
		t,
		i,
		l = n[3].text + '',
		o,
		r,
		a,
		u,
		f,
		s,
		c,
		h,
		W,
		b,
		d,
		_,
		T,
		y,
		E,
		F
	;(a = new le({ props: { subtle: !0, $$slots: { default: [He] }, $$scope: { ctx: n } } })),
		a.$on('click', n[13])
	let q = n[8] && ge(n)
	const se = [Fe, Re],
		z = []
	function re(m, k) {
		return m[1] ? 0 : 1
	}
	;(c = re(n)), (h = z[c] = se[c](n))
	function I(m) {
		n[15](m)
	}
	let pe = { yes: !1, onClick: n[9], probability: n[5], showProbabilities: n[1] }
	n[6] !== void 0 && (pe.selected = n[6]),
		(b = new ye({ props: pe })),
		Y.push(() => U(b, 'selected', I))
	function Ce(m) {
		n[16](m)
	}
	let he = { yes: !0, onClick: n[9], probability: n[5], showProbabilities: n[1] }
	n[6] !== void 0 && (he.selected = n[6]),
		(T = new ye({ props: he })),
		Y.push(() => U(T, 'selected', Ce))
	let D = n[6] !== void 0 && ve(n)
	return {
		c() {
			;(e = A('div')),
				(t = A('div')),
				(i = A('h2')),
				(o = L(l)),
				(r = N()),
				j(a.$$.fragment),
				(u = N()),
				q && q.c(),
				(f = N()),
				(s = A('div')),
				h.c(),
				(W = N()),
				j(b.$$.fragment),
				(_ = N()),
				j(T.$$.fragment),
				(E = N()),
				D && D.c(),
				this.h()
		},
		l(m) {
			e = P(m, 'DIV', { class: !0 })
			var k = V(e)
			t = P(k, 'DIV', { class: !0 })
			var X = V(t)
			i = P(X, 'H2', {})
			var Z = V(i)
			;(o = B(Z, l)),
				Z.forEach(p),
				(r = S(X)),
				M(a.$$.fragment, X),
				X.forEach(p),
				(u = S(k)),
				q && q.l(k),
				(f = S(k)),
				(s = P(k, 'DIV', { class: !0 }))
			var R = V(s)
			h.l(R),
				(W = S(R)),
				M(b.$$.fragment, R),
				(_ = S(R)),
				M(T.$$.fragment, R),
				R.forEach(p),
				(E = S(k)),
				D && D.l(k),
				k.forEach(p),
				this.h()
		},
		h() {
			C(t, 'class', 'headerWrapper svelte-1c5y11y'),
				C(s, 'class', 'options svelte-1c5y11y'),
				C(e, 'class', 'node')
		},
		m(m, k) {
			g(m, e, k),
				$(e, t),
				$(t, i),
				$(i, o),
				$(t, r),
				O(a, t, null),
				$(e, u),
				q && q.m(e, null),
				$(e, f),
				$(e, s),
				z[c].m(s, null),
				$(s, W),
				O(b, s, null),
				$(s, _),
				O(T, s, null),
				$(e, E),
				D && D.m(e, null),
				(F = !0)
		},
		p(m, [k]) {
			;(!F || k & 8) && l !== (l = m[3].text + '') && te(o, l)
			const X = {}
			k & 4194304 && (X.$$scope = { dirty: k, ctx: m }),
				a.$set(X),
				m[8] ? (q ? q.p(m, k) : ((q = ge(m)), q.c(), q.m(e, f))) : q && (q.d(1), (q = null))
			let Z = c
			;(c = re(m)),
				c === Z
					? z[c].p(m, k)
					: (K(),
						w(z[Z], 1, 1, () => {
							z[Z] = null
						}),
						Q(),
						(h = z[c]),
						h ? h.p(m, k) : ((h = z[c] = se[c](m)), h.c()),
						v(h, 1),
						h.m(s, W))
			const R = {}
			k & 512 && (R.onClick = m[9]),
				k & 32 && (R.probability = m[5]),
				k & 2 && (R.showProbabilities = m[1]),
				!d && k & 64 && ((d = !0), (R.selected = m[6]), J(() => (d = !1))),
				b.$set(R)
			const ie = {}
			k & 512 && (ie.onClick = m[9]),
				k & 32 && (ie.probability = m[5]),
				k & 2 && (ie.showProbabilities = m[1]),
				!y && k & 64 && ((y = !0), (ie.selected = m[6]), J(() => (y = !1))),
				T.$set(ie),
				m[6] !== void 0
					? D
						? (D.p(m, k), k & 64 && v(D, 1))
						: ((D = ve(m)), D.c(), v(D, 1), D.m(e, null))
					: D &&
						(K(),
						w(D, 1, 1, () => {
							D = null
						}),
						Q())
		},
		i(m) {
			F || (v(a.$$.fragment, m), v(h), v(b.$$.fragment, m), v(T.$$.fragment, m), v(D), (F = !0))
		},
		o(m) {
			w(a.$$.fragment, m), w(h), w(b.$$.fragment, m), w(T.$$.fragment, m), w(D), (F = !1)
		},
		d(m) {
			m && p(e), H(a), q && q.d(), z[c].d(), H(b), H(T), D && D.d()
		}
	}
}
function Qe(n, e, t) {
	let i,
		l,
		o,
		r,
		{ node: a } = e,
		{ parentProbability: u = 1 } = e,
		{ showProbabilities: f = !1 } = e,
		{ top: s } = e,
		{ intro: c } = e,
		h = a.probability,
		W = !1,
		b,
		d
	const _ = () => t(8, (W = !W))
	function T(I) {
		;(h = I), t(5, h)
	}
	function y(I) {
		;(b = I), t(6, b)
	}
	function E(I) {
		;(b = I), t(6, b)
	}
	function F(I) {
		;(f = I), t(1, f)
	}
	function q(I) {
		;(s = I), t(0, s)
	}
	function se(I) {
		;(c = I), t(2, c)
	}
	const z = () => {
		t(2, (c = !0)), o()
	}
	function re(I) {
		Y[I ? 'unshift' : 'push'](() => {
			;(d = I), t(7, d)
		})
	}
	return (
		(n.$$set = (I) => {
			'node' in I && t(3, (a = I.node)),
				'parentProbability' in I && t(4, (u = I.parentProbability)),
				'showProbabilities' in I && t(1, (f = I.showProbabilities)),
				'top' in I && t(0, (s = I.top)),
				'intro' in I && t(2, (c = I.intro))
		}),
		(n.$$.update = () => {
			n.$$.dirty & 72 && t(12, (i = b == 'yes' ? a.yes : a.no)),
				n.$$.dirty & 96 && t(11, (l = b == 'yes' ? h : 1 - h)),
				n.$$.dirty & 1 &&
					t(
						10,
						(o = () => {
							setTimeout(() => {
								s.scrollIntoView({ behavior: 'smooth' })
							}, 10)
						})
					),
				n.$$.dirty & 128 &&
					t(
						9,
						(r = () => {
							setTimeout(() => {
								d && d.scrollIntoView({ behavior: 'smooth' })
							}, 10)
						})
					)
		}),
		[s, f, c, a, u, h, b, d, W, r, o, l, i, _, T, y, E, F, q, se, z, re]
	)
}
class Ee extends oe {
	constructor(e) {
		super(),
			ne(this, e, Qe, Ke, ee, {
				node: 3,
				parentProbability: 4,
				showProbabilities: 1,
				top: 0,
				intro: 2
			})
	}
}
const ae =
		" Luckily, you've just learn this, as if it were a message from the future! And you are still on time to make a Pause happen. Good luck John Connor, the future is not set.",
	ce =
		" Even if you think we'll probably not experience an AI catastrophe, it would be better to have more time, so help us make sure of it!",
	Ie = {
		type: 'question',
		text: 'Will some human, or group of humans use AI to take over?',
		probability: 0.7,
		explanation:
			'We can virtually guarantee that some human will try to use AI to take over. However, will at some point someone succeed? Superintelligence is an incredibly powerful tool and weapon, so it seems likely that at some point, someone will succeed.',
		yes: {
			type: 'question',
			text: 'Will they want to have the same world as you (are they the good guys)?',
			probability: 0.5,
			explanation: "Many people have similar values, but it's not guaranteed.",
			yes: {
				type: 'safe',
				text:
					'In this world, AI is used to take over and the people who control it have the same goals as you do. This may just be the utopia we were promised by the AI labs!' +
					ce
			},
			no: {
				type: 'doom',
				text:
					'A group of humans successfully used AI to take over and can remain in power indefinitely. This group does not share your values, so some inescapable dystopia becomes reality.' +
					ae
			}
		},
		no: {
			type: 'question',
			text: 'Will non-superhuman AI cause a global catastrophe?',
			probability: 0.5,
			explanation:
				"AI-powered cybersecurity, autonomous weapons and engineered pandemics or bioweapons can pose large scale threats to humanity, both from misuse or accidents. We may be able to stop these threats, if we apply strict regulations and safety measures, but as of now we're not doing that.",
			yes: {
				type: 'doom',
				text:
					'Even though we managed to escape AI doom by takeovers, we got an AI-related catastrophe.' +
					ae
			},
			no: {
				type: 'safe',
				text:
					'Even though extremely powerful AI systems exist, AIs never go rogue, nobody succeeds in using AI to take over control and AI never causes large-scale catastrophes. We hope this is the universe we live in, but it seems like wishful thinking.' +
					ce
			}
		}
	},
	Xe = {
		type: 'question',
		text: 'Will we continue to build AI without pausing?',
		probability: 0.5,
		explanation: `AI systems are already surpassing most humans in many tasks. We can collectively decide to stop building this technology, but AI companies are doing everything in their power to advance capabilities. 

 We're currently on track to achieving superhuman intelligence.`,
		yes: {
			type: 'question',
			text: 'Will one of these AIs try to take control?',
			probability: 0.95,
			explanation:
				"We already have examples of AIs that explicitly tried to take over (e.g. ChaosGPT), but none of them were smart enough to get far. Even for goals that sound normal (such as 'cure cancer' or 'calculate pi'), power-seeking is often a very reasonable sub-goal to have. There is even mathematical proof that optimal policies seek power. And even if power-seeking behavior itself is rare, it only has to happen once.  We're spawning millions of AI instances every day, one of these instances will eventually try to maximize its power. So we are quite certain that this will happen.",
			yes: {
				type: 'question',
				text: 'Will one of them eventually succeed?',
				probability: 0.9,
				explanation:
					"A very intelligent AI will be able to outsmart us in every way. Maybe if we have a cooperative, aligned, superintelligent AI on our side, we might be able to stop it. But we don't know how to build aligned AI, and even if we can, we still don't know what the offense / defense balance will favor. It seems unlikely that we can stop every single power-seeking AI, so we expect one AI to succeed in taking control.",
				yes: {
					type: 'question',
					text: 'Will the AI care about keeping humans alive?',
					probability: 0.01,
					explanation:
						"While it is theoretically possible to have an AI that cares about humans, we have no idea how to build one. And even if we did, we don't even agree on what type of world we'd want it to create. When an AI concludes that it needs to take over, we can expect that AI to care about self-preservation, power, and acquiring resources, but not necessarily about humans in any way.",
					yes: {
						type: 'question',
						text: 'Will the AI care about human well-being?',
						probability: 0.9,
						explanation:
							"While it is unlikely that the AI cares about humans at all, there's a good chance that if it cares about humans, it also cares about our well-being.",
						yes: {
							type: 'safe',
							text:
								'The AI has taken control away from humans, but still deeply cares about human well-being. A weird utopia, but a utopia nonetheless.' +
								ce
						},
						no: {
							type: 'doom',
							text:
								"We're ending up with an AI that does want to keep humans alive, but does not want to make us happy. We can be used as slaves, to experiment on, or even to torture. Forever." +
								ae
						}
					},
					no: {
						type: 'doom',
						text:
							'At some point, an AI will probably succeed in taking over control from humans. AIs have many evolutionary advantages over humans. We will be unable to stop it. The AI will become the dominant organism on earth, and will eventually outcompete all lifeforms on earth. Nothing survives.' +
							ae
					}
				},
				no: Ie
			},
			no: Ie
		},
		no: {
			type: 'safe',
			text: "If we successfully prevent dangerous AI from being developed we could prevent AI catastrophes. We hope we're living in this universe. You can help achieve this!"
		}
	},
	Ze = {
		title: 'AI Outcomes',
		slug: 'outcomes',
		description: 'What will happen if we continue to build AI?',
		date: '2023-08-24',
		categories: []
	}
function $e(n) {
	let e, t, i
	return (
		(t = new le({ props: { subtle: !0, $$slots: { default: [xe] }, $$scope: { ctx: n } } })),
		t.$on('click', n[8]),
		{
			c() {
				;(e = A('div')), j(t.$$.fragment), this.h()
			},
			l(l) {
				e = P(l, 'DIV', { class: !0 })
				var o = V(e)
				M(t.$$.fragment, o), o.forEach(p), this.h()
			},
			h() {
				C(e, 'class', 'headerbuttons svelte-92d1vr')
			},
			m(l, o) {
				g(l, e, o), O(t, e, null), (i = !0)
			},
			p(l, o) {
				const r = {}
				o & 8192 && (r.$$scope = { dirty: o, ctx: l }), t.$set(r)
			},
			i(l) {
				i || (v(t.$$.fragment, l), (i = !0))
			},
			o(l) {
				w(t.$$.fragment, l), (i = !1)
			},
			d(l) {
				l && p(e), H(t)
			}
		}
	)
}
function xe(n) {
	let e
	return {
		c() {
			e = L('Restart')
		},
		l(t) {
			e = B(t, 'Restart')
		},
		m(t, i) {
			g(t, e, i)
		},
		d(t) {
			t && p(e)
		}
	}
}
function et(n) {
	let e, t, i, l, o
	function r(s) {
		n[10](s)
	}
	function a(s) {
		n[11](s)
	}
	function u(s) {
		n[12](s)
	}
	let f = { node: Xe }
	return (
		n[1] !== void 0 && (f.showProbabilities = n[1]),
		n[2] !== void 0 && (f.top = n[2]),
		n[0] !== void 0 && (f.intro = n[0]),
		(e = new Ee({ props: f })),
		Y.push(() => U(e, 'showProbabilities', r)),
		Y.push(() => U(e, 'top', a)),
		Y.push(() => U(e, 'intro', u)),
		{
			c() {
				j(e.$$.fragment)
			},
			l(s) {
				M(e.$$.fragment, s)
			},
			m(s, c) {
				O(e, s, c), (o = !0)
			},
			p(s, c) {
				const h = {}
				!t && c & 2 && ((t = !0), (h.showProbabilities = s[1]), J(() => (t = !1))),
					!i && c & 4 && ((i = !0), (h.top = s[2]), J(() => (i = !1))),
					!l && c & 1 && ((l = !0), (h.intro = s[0]), J(() => (l = !1))),
					e.$set(h)
			},
			i(s) {
				o || (v(e.$$.fragment, s), (o = !0))
			},
			o(s) {
				w(e.$$.fragment, s), (o = !1)
			},
			d(s) {
				H(e, s)
			}
		}
	)
}
function tt(n) {
	let e,
		t = 'Will AI lead to our utopia, doom, or will we simply continue to do our thing?',
		i,
		l,
		o = `This app is designed to help you explore these outcomes, think in probabilities instead of
		certainty and let you draw your own conclusions. At any point you can go back and try other
		paths.`,
		r,
		a,
		u,
		f
	return (
		(u = new le({ props: { $$slots: { default: [it] }, $$scope: { ctx: n } } })),
		u.$on('click', n[9]),
		{
			c() {
				;(e = A('p')),
					(e.textContent = t),
					(i = N()),
					(l = A('p')),
					(l.textContent = o),
					(r = N()),
					(a = A('div')),
					j(u.$$.fragment),
					this.h()
			},
			l(s) {
				;(e = P(s, 'P', { 'data-svelte-h': !0 })),
					fe(e) !== 'svelte-y69vw7' && (e.textContent = t),
					(i = S(s)),
					(l = P(s, 'P', { 'data-svelte-h': !0 })),
					fe(l) !== 'svelte-1umfvio' && (l.textContent = o),
					(r = S(s)),
					(a = P(s, 'DIV', { class: !0 }))
				var c = V(a)
				M(u.$$.fragment, c), c.forEach(p), this.h()
			},
			h() {
				C(a, 'class', 'wrapper svelte-92d1vr')
			},
			m(s, c) {
				g(s, e, c), g(s, i, c), g(s, l, c), g(s, r, c), g(s, a, c), O(u, a, null), (f = !0)
			},
			p(s, c) {
				const h = {}
				c & 8192 && (h.$$scope = { dirty: c, ctx: s }), u.$set(h)
			},
			i(s) {
				f || (v(u.$$.fragment, s), (f = !0))
			},
			o(s) {
				w(u.$$.fragment, s), (f = !1)
			},
			d(s) {
				s && (p(e), p(i), p(l), p(r), p(a)), H(u)
			}
		}
	)
}
function it(n) {
	let e
	return {
		c() {
			e = L('Start')
		},
		l(t) {
			e = B(t, 'Start')
		},
		m(t, i) {
			g(t, e, i)
		},
		d(t) {
			t && p(e)
		}
	}
}
function ot(n) {
	let e,
		t,
		i,
		l,
		o = 'AI outcomes',
		r,
		a,
		u,
		f,
		s,
		c,
		h,
		W
	e = new Ve({ props: { title: n[3], description: n[4], date: n[5] } })
	let b = !n[0] && $e(n)
	const d = [tt, et],
		_ = []
	function T(y, E) {
		return y[0] ? 0 : 1
	}
	return (
		(u = T(n)),
		(f = _[u] = d[u](n)),
		{
			c() {
				j(e.$$.fragment),
					(t = N()),
					(i = A('div')),
					(l = A('h1')),
					(l.textContent = o),
					(r = N()),
					b && b.c(),
					(a = N()),
					f.c(),
					(s = x()),
					this.h()
			},
			l(y) {
				M(e.$$.fragment, y), (t = S(y)), (i = P(y, 'DIV', { class: !0 }))
				var E = V(i)
				;(l = P(E, 'H1', { class: !0, 'data-svelte-h': !0 })),
					fe(l) !== 'svelte-1s7rtsm' && (l.textContent = o),
					(r = S(E)),
					b && b.l(E),
					E.forEach(p),
					(a = S(y)),
					f.l(y),
					(s = x()),
					this.h()
			},
			h() {
				C(l, 'class', 'svelte-92d1vr'), C(i, 'class', 'header svelte-92d1vr')
			},
			m(y, E) {
				O(e, y, E),
					g(y, t, E),
					g(y, i, E),
					$(i, l),
					n[6](l),
					$(i, r),
					b && b.m(i, null),
					g(y, a, E),
					_[u].m(y, E),
					g(y, s, E),
					(c = !0),
					h || ((W = ue(l, 'click', n[7])), (h = !0))
			},
			p(y, [E]) {
				y[0]
					? b &&
						(K(),
						w(b, 1, 1, () => {
							b = null
						}),
						Q())
					: b
						? (b.p(y, E), E & 1 && v(b, 1))
						: ((b = $e(y)), b.c(), v(b, 1), b.m(i, null))
				let F = u
				;(u = T(y)),
					u === F
						? _[u].p(y, E)
						: (K(),
							w(_[F], 1, 1, () => {
								_[F] = null
							}),
							Q(),
							(f = _[u]),
							f ? f.p(y, E) : ((f = _[u] = d[u](y)), f.c()),
							v(f, 1),
							f.m(s.parentNode, s))
			},
			i(y) {
				c || (v(e.$$.fragment, y), v(b), v(f), (c = !0))
			},
			o(y) {
				w(e.$$.fragment, y), w(b), w(f), (c = !1)
			},
			d(y) {
				y && (p(t), p(i), p(a), p(s)), H(e, y), n[6](null), b && b.d(), _[u].d(y), (h = !1), W()
			}
		}
	)
}
function nt(n, e, t) {
	let i = !0,
		l = !1,
		o,
		{ title: r, description: a, date: u } = Ze
	function f(_) {
		Y[_ ? 'unshift' : 'push'](() => {
			;(o = _), t(2, o)
		})
	}
	const s = () => t(0, (i = !0)),
		c = () => t(0, (i = !0)),
		h = () => {
			t(0, (i = !1)), t(1, (l = !1))
		}
	function W(_) {
		;(l = _), t(1, l)
	}
	function b(_) {
		;(o = _), t(2, o)
	}
	function d(_) {
		;(i = _), t(0, i)
	}
	return [i, l, o, r, a, u, f, s, c, h, W, b, d]
}
class lt extends oe {
	constructor(e) {
		super(), ne(this, e, nt, ot, ee, {})
	}
}
const ct = Object.freeze(
	Object.defineProperty({ __proto__: null, default: lt }, Symbol.toStringTag, { value: 'Module' })
)
export { lt as P, ct as _ }
