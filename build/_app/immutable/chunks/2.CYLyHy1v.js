import {
	s as Y,
	u as M,
	c as v,
	b as O,
	t as h,
	f as A,
	h as T,
	j as c,
	d as y,
	i as _,
	k as b,
	D as F,
	l as m,
	m as p,
	v as D,
	w as L,
	x as U,
	N as J
} from './scheduler.D9JQr37X.js'
import { S as q, i as B, a as g, t as k, c as I, b as E, m as P, d as x } from './index.D-WnFt3a.js'
import { P as K } from './PostMeta.BRGG6AYg.js'
const Q = (r) => ({}),
	V = (r) => ({})
function X(r) {
	let e, t, s, a, n, l, i, w, W, $
	const j = r[3].title,
		u = M(j, r, r[2], V),
		N = r[3].default,
		f = M(N, r, r[2], null)
	return {
		c() {
			;(e = v('a')),
				(t = v('div')),
				(s = v('h2')),
				u && u.c(),
				(a = O()),
				(n = v('p')),
				f && f.c(),
				(l = O()),
				(i = v('span')),
				(w = h(r[1])),
				(W = h(' >')),
				this.h()
		},
		l(o) {
			e = A(o, 'A', { href: !0, class: !0 })
			var d = T(e)
			t = A(d, 'DIV', { class: !0 })
			var S = T(t)
			s = A(S, 'H2', { class: !0 })
			var G = T(s)
			u && u.l(G), G.forEach(c), (a = y(S)), (n = A(S, 'P', { class: !0 }))
			var H = T(n)
			f && f.l(H), H.forEach(c), (l = y(S)), (i = A(S, 'SPAN', { class: !0 }))
			var C = T(i)
			;(w = _(C, r[1])), (W = _(C, ' >')), C.forEach(c), S.forEach(c), d.forEach(c), this.h()
		},
		h() {
			b(s, 'class', 'svelte-1xjjxlf'),
				b(n, 'class', 'svelte-1xjjxlf'),
				b(i, 'class', 'c2a svelte-1xjjxlf'),
				b(t, 'class', 'text svelte-1xjjxlf'),
				b(e, 'href', r[0]),
				b(e, 'class', 'block svelte-1xjjxlf'),
				F(e, 'fade-in', Z)
		},
		m(o, d) {
			m(o, e, d),
				p(e, t),
				p(t, s),
				u && u.m(s, null),
				p(t, a),
				p(t, n),
				f && f.m(n, null),
				p(t, l),
				p(t, i),
				p(i, w),
				p(i, W),
				($ = !0)
		},
		p(o, [d]) {
			u && u.p && (!$ || d & 4) && D(u, j, o, o[2], $ ? U(j, o[2], d, Q) : L(o[2]), V),
				f && f.p && (!$ || d & 4) && D(f, N, o, o[2], $ ? U(N, o[2], d, null) : L(o[2]), null),
				(!$ || d & 2) && J(w, o[1]),
				(!$ || d & 1) && b(e, 'href', o[0])
		},
		i(o) {
			$ || (g(u, o), g(f, o), ($ = !0))
		},
		o(o) {
			k(u, o), k(f, o), ($ = !1)
		},
		d(o) {
			o && c(e), u && u.d(o), f && f.d(o)
		}
	}
}
let Z = !1
function ee(r, e, t) {
	let { $$slots: s = {}, $$scope: a } = e,
		{ href: n } = e,
		{ linkText: l } = e
	return (
		(r.$$set = (i) => {
			'href' in i && t(0, (n = i.href)),
				'linkText' in i && t(1, (l = i.linkText)),
				'$$scope' in i && t(2, (a = i.$$scope))
		}),
		[n, l, a, s]
	)
}
class R extends q {
	constructor(e) {
		super(), B(this, e, ee, X, Y, { href: 0, linkText: 1 })
	}
}
function te(r) {
	let e, t
	const s = r[1].default,
		a = M(s, r, r[0], null)
	return {
		c() {
			;(e = v('span')), a && a.c(), this.h()
		},
		l(n) {
			e = A(n, 'SPAN', { class: !0 })
			var l = T(e)
			a && a.l(l), l.forEach(c), this.h()
		},
		h() {
			b(e, 'class', 'svelte-1h716ml')
		},
		m(n, l) {
			m(n, e, l), a && a.m(e, null), (t = !0)
		},
		p(n, [l]) {
			a && a.p && (!t || l & 1) && D(a, s, n, n[0], t ? U(s, n[0], l, null) : L(n[0]), null)
		},
		i(n) {
			t || (g(a, n), (t = !0))
		},
		o(n) {
			k(a, n), (t = !1)
		},
		d(n) {
			n && c(e), a && a.d(n)
		}
	}
}
function ne(r, e, t) {
	let { $$slots: s = {}, $$scope: a } = e
	return (
		(r.$$set = (n) => {
			'$$scope' in n && t(0, (a = n.$$scope))
		}),
		[a, s]
	)
}
class z extends q {
	constructor(e) {
		super(), B(this, e, ne, te, Y, {})
	}
}
function se(r) {
	let e
	return {
		c() {
			e =
				h(`AI can have amazing benefits, but it could also erode our democracy, destabilize our economy and
		could be used to create powerful cyber weapons.`)
		},
		l(t) {
			e = _(
				t,
				`AI can have amazing benefits, but it could also erode our democracy, destabilize our economy and
		could be used to create powerful cyber weapons.`
			)
		},
		m(t, s) {
			m(t, e, s)
		},
		d(t) {
			t && c(e)
		}
	}
}
function le(r) {
	let e
	return {
		c() {
			e = h('losing control')
		},
		l(t) {
			e = _(t, 'losing control')
		},
		m(t, s) {
			m(t, e, s)
		},
		d(t) {
			t && c(e)
		}
	}
}
function ae(r) {
	let e, t, s, a
	return (
		(s = new z({ props: { $$slots: { default: [le] }, $$scope: { ctx: r } } })),
		{
			c() {
				;(e = v('span')), (t = h('We risk ')), I(s.$$.fragment), this.h()
			},
			l(n) {
				e = A(n, 'SPAN', { slot: !0 })
				var l = T(e)
				;(t = _(l, 'We risk ')), E(s.$$.fragment, l), l.forEach(c), this.h()
			},
			h() {
				b(e, 'slot', 'title')
			},
			m(n, l) {
				m(n, e, l), p(e, t), P(s, e, null), (a = !0)
			},
			p(n, l) {
				const i = {}
				l & 1 && (i.$$scope = { dirty: l, ctx: n }), s.$set(i)
			},
			i(n) {
				a || (g(s.$$.fragment, n), (a = !0))
			},
			o(n) {
				k(s.$$.fragment, n), (a = !1)
			},
			d(n) {
				n && c(e), x(s)
			}
		}
	)
}
function oe(r) {
	let e
	return {
		c() {
			e = h('Many AI labs and experts agree: AI could end humanity.')
		},
		l(t) {
			e = _(t, 'Many AI labs and experts agree: AI could end humanity.')
		},
		m(t, s) {
			m(t, e, s)
		},
		d(t) {
			t && c(e)
		}
	}
}
function re(r) {
	let e
	return {
		c() {
			e = h('human extinction')
		},
		l(t) {
			e = _(t, 'human extinction')
		},
		m(t, s) {
			m(t, e, s)
		},
		d(t) {
			t && c(e)
		}
	}
}
function fe(r) {
	let e, t, s, a
	return (
		(s = new z({ props: { $$slots: { default: [re] }, $$scope: { ctx: r } } })),
		{
			c() {
				;(e = v('span')), (t = h('We risk ')), I(s.$$.fragment), this.h()
			},
			l(n) {
				e = A(n, 'SPAN', { slot: !0 })
				var l = T(e)
				;(t = _(l, 'We risk ')), E(s.$$.fragment, l), l.forEach(c), this.h()
			},
			h() {
				b(e, 'slot', 'title')
			},
			m(n, l) {
				m(n, e, l), p(e, t), P(s, e, null), (a = !0)
			},
			p(n, l) {
				const i = {}
				l & 1 && (i.$$scope = { dirty: l, ctx: n }), s.$set(i)
			},
			i(n) {
				a || (g(s.$$.fragment, n), (a = !0))
			},
			o(n) {
				k(s.$$.fragment, n), (a = !1)
			},
			d(n) {
				n && c(e), x(s)
			}
		}
	)
}
function ie(r) {
	let e
	return {
		c() {
			e =
				h(`Stop the development of AI systems more powerful than GPT-4 until we know how to make them safe.
		This needs to happen on an international level, and it needs to happen soon.`)
		},
		l(t) {
			e = _(
				t,
				`Stop the development of AI systems more powerful than GPT-4 until we know how to make them safe.
		This needs to happen on an international level, and it needs to happen soon.`
			)
		},
		m(t, s) {
			m(t, e, s)
		},
		d(t) {
			t && c(e)
		}
	}
}
function ce(r) {
	let e
	return {
		c() {
			e = h('pause')
		},
		l(t) {
			e = _(t, 'pause')
		},
		m(t, s) {
			m(t, e, s)
		},
		d(t) {
			t && c(e)
		}
	}
}
function ue(r) {
	let e, t, s, a
	return (
		(s = new z({ props: { $$slots: { default: [ce] }, $$scope: { ctx: r } } })),
		{
			c() {
				;(e = v('span')), (t = h('We need a ')), I(s.$$.fragment), this.h()
			},
			l(n) {
				e = A(n, 'SPAN', { slot: !0 })
				var l = T(e)
				;(t = _(l, 'We need a ')), E(s.$$.fragment, l), l.forEach(c), this.h()
			},
			h() {
				b(e, 'slot', 'title')
			},
			m(n, l) {
				m(n, e, l), p(e, t), P(s, e, null), (a = !0)
			},
			p(n, l) {
				const i = {}
				l & 1 && (i.$$scope = { dirty: l, ctx: n }), s.$set(i)
			},
			i(n) {
				a || (g(s.$$.fragment, n), (a = !0))
			},
			o(n) {
				k(s.$$.fragment, n), (a = !1)
			},
			d(n) {
				n && c(e), x(s)
			}
		}
	)
}
function $e(r) {
	let e
	return {
		c() {
			e =
				h(`In 2020, experts thought we had more than 35 years until AGI. Recent breakthroughs show we might
		be almost there. Superintelligence could be one innovation away, so we should tread carefully.`)
		},
		l(t) {
			e = _(
				t,
				`In 2020, experts thought we had more than 35 years until AGI. Recent breakthroughs show we might
		be almost there. Superintelligence could be one innovation away, so we should tread carefully.`
			)
		},
		m(t, s) {
			m(t, e, s)
		},
		d(t) {
			t && c(e)
		}
	}
}
function me(r) {
	let e
	return {
		c() {
			e = h('RIGHT NOW')
		},
		l(t) {
			e = _(t, 'RIGHT NOW')
		},
		m(t, s) {
			m(t, e, s)
		},
		d(t) {
			t && c(e)
		}
	}
}
function pe(r) {
	let e, t, s, a
	return (
		(s = new z({ props: { $$slots: { default: [me] }, $$scope: { ctx: r } } })),
		{
			c() {
				;(e = v('span')), (t = h('WE NEED TO ACT ')), I(s.$$.fragment), this.h()
			},
			l(n) {
				e = A(n, 'SPAN', { slot: !0 })
				var l = T(e)
				;(t = _(l, 'WE NEED TO ACT ')), E(s.$$.fragment, l), l.forEach(c), this.h()
			},
			h() {
				b(e, 'slot', 'title')
			},
			m(n, l) {
				m(n, e, l), p(e, t), P(s, e, null), (a = !0)
			},
			p(n, l) {
				const i = {}
				l & 1 && (i.$$scope = { dirty: l, ctx: n }), s.$set(i)
			},
			i(n) {
				a || (g(s.$$.fragment, n), (a = !0))
			},
			o(n) {
				k(s.$$.fragment, n), (a = !1)
			},
			d(n) {
				n && c(e), x(s)
			}
		}
	)
}
function he(r) {
	let e
	return {
		c() {
			e =
				h(`Too few people are well-informed about the potential risks of AI. Inform others, and help stop this
		race to the bottom.`)
		},
		l(t) {
			e = _(
				t,
				`Too few people are well-informed about the potential risks of AI. Inform others, and help stop this
		race to the bottom.`
			)
		},
		m(t, s) {
			m(t, e, s)
		},
		d(t) {
			t && c(e)
		}
	}
}
function _e(r) {
	let e
	return {
		c() {
			e = h('YOU')
		},
		l(t) {
			e = _(t, 'YOU')
		},
		m(t, s) {
			m(t, e, s)
		},
		d(t) {
			t && c(e)
		}
	}
}
function de(r) {
	let e, t, s, a
	return (
		(t = new z({ props: { $$slots: { default: [_e] }, $$scope: { ctx: r } } })),
		{
			c() {
				;(e = v('span')), I(t.$$.fragment), (s = h(' CAN HELP')), this.h()
			},
			l(n) {
				e = A(n, 'SPAN', { slot: !0 })
				var l = T(e)
				E(t.$$.fragment, l), (s = _(l, ' CAN HELP')), l.forEach(c), this.h()
			},
			h() {
				b(e, 'slot', 'title')
			},
			m(n, l) {
				m(n, e, l), P(t, e, null), p(e, s), (a = !0)
			},
			p(n, l) {
				const i = {}
				l & 1 && (i.$$scope = { dirty: l, ctx: n }), t.$set(i)
			},
			i(n) {
				a || (g(t.$$.fragment, n), (a = !0))
			},
			o(n) {
				k(t.$$.fragment, n), (a = !1)
			},
			d(n) {
				n && c(e), x(t)
			}
		}
	)
}
function ge(r) {
	let e, t, s, a, n, l, i, w, W, $, j, u, N
	return (
		(e = new K({ props: { title: ke, description: we } })),
		(a = new R({
			props: {
				linkText: 'Read about the risks',
				href: '/risks',
				$$slots: { title: [ae], default: [se] },
				$$scope: { ctx: r }
			}
		})),
		(l = new R({
			props: {
				linkText: 'Why and how AI can kill us',
				href: '/xrisk',
				$$slots: { title: [fe], default: [oe] },
				$$scope: { ctx: r }
			}
		})),
		(w = new R({
			props: {
				linkText: 'Read the proposal',
				href: '/proposal',
				$$slots: { title: [ue], default: [ie] },
				$$scope: { ctx: r }
			}
		})),
		($ = new R({
			props: {
				linkText: 'How long do we have?',
				href: '/urgency',
				$$slots: { title: [pe], default: [$e] },
				$$scope: { ctx: r }
			}
		})),
		(u = new R({
			props: {
				linkText: 'Take action',
				href: '/action',
				$$slots: { title: [de], default: [he] },
				$$scope: { ctx: r }
			}
		})),
		{
			c() {
				I(e.$$.fragment),
					(t = O()),
					(s = v('section')),
					I(a.$$.fragment),
					(n = O()),
					I(l.$$.fragment),
					(i = O()),
					I(w.$$.fragment),
					(W = O()),
					I($.$$.fragment),
					(j = O()),
					I(u.$$.fragment)
			},
			l(f) {
				E(e.$$.fragment, f), (t = y(f)), (s = A(f, 'SECTION', {}))
				var o = T(s)
				E(a.$$.fragment, o),
					(n = y(o)),
					E(l.$$.fragment, o),
					(i = y(o)),
					E(w.$$.fragment, o),
					(W = y(o)),
					E($.$$.fragment, o),
					(j = y(o)),
					E(u.$$.fragment, o),
					o.forEach(c)
			},
			m(f, o) {
				P(e, f, o),
					m(f, t, o),
					m(f, s, o),
					P(a, s, null),
					p(s, n),
					P(l, s, null),
					p(s, i),
					P(w, s, null),
					p(s, W),
					P($, s, null),
					p(s, j),
					P(u, s, null),
					(N = !0)
			},
			p(f, [o]) {
				const d = {}
				o & 1 && (d.$$scope = { dirty: o, ctx: f }), a.$set(d)
				const S = {}
				o & 1 && (S.$$scope = { dirty: o, ctx: f }), l.$set(S)
				const G = {}
				o & 1 && (G.$$scope = { dirty: o, ctx: f }), w.$set(G)
				const H = {}
				o & 1 && (H.$$scope = { dirty: o, ctx: f }), $.$set(H)
				const C = {}
				o & 1 && (C.$$scope = { dirty: o, ctx: f }), u.$set(C)
			},
			i(f) {
				N ||
					(g(e.$$.fragment, f),
					g(a.$$.fragment, f),
					g(l.$$.fragment, f),
					g(w.$$.fragment, f),
					g($.$$.fragment, f),
					g(u.$$.fragment, f),
					(N = !0))
			},
			o(f) {
				k(e.$$.fragment, f),
					k(a.$$.fragment, f),
					k(l.$$.fragment, f),
					k(w.$$.fragment, f),
					k($.$$.fragment, f),
					k(u.$$.fragment, f),
					(N = !1)
			},
			d(f) {
				f && (c(t), c(s)), x(e, f), x(a), x(l), x(w), x($), x(u)
			}
		}
	)
}
const ke = 'We need to Pause AI',
	we = 'We are risking human extinction. We need to pause AI development, right now.'
class be extends q {
	constructor(e) {
		super(), B(this, e, null, ge, Y, {})
	}
}
const Ie = Object.freeze(
	Object.defineProperty({ __proto__: null, default: be }, Symbol.toStringTag, { value: 'Module' })
)
export { be as P, Ie as _ }
