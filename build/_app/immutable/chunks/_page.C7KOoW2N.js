import {
	s as W,
	c as b,
	b as P,
	t as O,
	f as k,
	h as E,
	d as D,
	i as S,
	j as _,
	k as I,
	l as C,
	m as p,
	N as B,
	n as w,
	z as L,
	g as F,
	J as Z,
	I as $
} from './scheduler.D9JQr37X.js'
import {
	S as G,
	i as K,
	c as Q,
	b as R,
	m as X,
	a as N,
	e as x,
	t as T,
	d as Y,
	g as ee
} from './index.D-WnFt3a.js'
import { e as U } from './each.Gi_i5kkj.js'
import { P as te } from './PostMeta.BRGG6AYg.js'
const le = {
	title: 'People of PauseAI',
	description: 'Who are the volunteers working on PauseAI?',
	date: '2024-04-17',
	slug: 'people',
	categories: []
}
function j(i) {
	let e
	return {
		c() {
			;(e = b('div')), this.h()
		},
		l(l) {
			;(e = k(l, 'DIV', { class: !0, style: !0 })), E(e).forEach(_), this.h()
		},
		h() {
			I(e, 'class', 'image svelte-9u0g6a'), L(e, 'background-image', 'url(' + i[0] + ')')
		},
		m(l, t) {
			C(l, e, t)
		},
		p(l, t) {
			t & 1 && L(e, 'background-image', 'url(' + l[0] + ')')
		},
		d(l) {
			l && _(e)
		}
	}
}
function q(i) {
	let e, l
	return {
		c() {
			;(e = b('div')), (l = O(i[3])), this.h()
		},
		l(t) {
			e = k(t, 'DIV', { class: !0 })
			var a = E(e)
			;(l = S(a, i[3])), a.forEach(_), this.h()
		},
		h() {
			I(e, 'class', 'title svelte-9u0g6a')
		},
		m(t, a) {
			C(t, e, a), p(e, l)
		},
		p(t, a) {
			a & 8 && B(l, t[3])
		},
		d(t) {
			t && _(e)
		}
	}
}
function z(i) {
	let e,
		l = (i[4] ? i[1] : i[5]) + '',
		t,
		a,
		s = !i[4] && i[1].length > A && H(i)
	return {
		c() {
			;(e = b('div')), (t = O(l)), (a = P()), s && s.c(), this.h()
		},
		l(r) {
			e = k(r, 'DIV', { class: !0 })
			var h = E(e)
			;(t = S(h, l)), (a = D(h)), s && s.l(h), h.forEach(_), this.h()
		},
		h() {
			I(e, 'class', 'bio svelte-9u0g6a')
		},
		m(r, h) {
			C(r, e, h), p(e, t), p(e, a), s && s.m(e, null)
		},
		p(r, h) {
			h & 18 && l !== (l = (r[4] ? r[1] : r[5]) + '') && B(t, l),
				!r[4] && r[1].length > A
					? s
						? s.p(r, h)
						: ((s = H(r)), s.c(), s.m(e, null))
					: s && (s.d(1), (s = null))
		},
		d(r) {
			r && _(e), s && s.d()
		}
	}
}
function H(i) {
	let e,
		l = '...',
		t,
		a
	return {
		c() {
			;(e = b('button')), (e.textContent = l), this.h()
		},
		l(s) {
			;(e = k(s, 'BUTTON', { class: !0, 'data-svelte-h': !0 })),
				F(e) !== 'svelte-bclr5b' && (e.textContent = l),
				this.h()
		},
		h() {
			I(e, 'class', 'svelte-9u0g6a')
		},
		m(s, r) {
			C(s, e, r), t || ((a = Z(e, 'click', i[6])), (t = !0))
		},
		p: w,
		d(s) {
			s && _(e), (t = !1), a()
		}
	}
}
function ie(i) {
	let e,
		l,
		t,
		a,
		s,
		r,
		h,
		g,
		d = i[0] && j(i),
		f = i[3] && q(i),
		c = i[1] && z(i)
	return {
		c() {
			;(e = b('li')),
				d && d.c(),
				(l = P()),
				(t = b('div')),
				(a = b('div')),
				(s = b('div')),
				(r = O(i[2])),
				(h = P()),
				f && f.c(),
				(g = P()),
				c && c.c(),
				this.h()
		},
		l(n) {
			e = k(n, 'LI', { class: !0 })
			var v = E(e)
			d && d.l(v), (l = D(v)), (t = k(v, 'DIV', { class: !0 }))
			var o = E(t)
			a = k(o, 'DIV', { class: !0 })
			var m = E(a)
			s = k(m, 'DIV', { class: !0 })
			var u = E(s)
			;(r = S(u, i[2])),
				u.forEach(_),
				(h = D(m)),
				f && f.l(m),
				m.forEach(_),
				(g = D(o)),
				c && c.l(o),
				o.forEach(_),
				v.forEach(_),
				this.h()
		},
		h() {
			I(s, 'class', 'name svelte-9u0g6a'),
				I(a, 'class', 'name-title svelte-9u0g6a'),
				I(t, 'class', 'details svelte-9u0g6a'),
				I(e, 'class', 'person svelte-9u0g6a')
		},
		m(n, v) {
			C(n, e, v),
				d && d.m(e, null),
				p(e, l),
				p(e, t),
				p(t, a),
				p(a, s),
				p(s, r),
				p(a, h),
				f && f.m(a, null),
				p(t, g),
				c && c.m(t, null)
		},
		p(n, [v]) {
			n[0] ? (d ? d.p(n, v) : ((d = j(n)), d.c(), d.m(e, l))) : d && (d.d(1), (d = null)),
				v & 4 && B(r, n[2]),
				n[3] ? (f ? f.p(n, v) : ((f = q(n)), f.c(), f.m(a, null))) : f && (f.d(1), (f = null)),
				n[1] ? (c ? c.p(n, v) : ((c = z(n)), c.c(), c.m(t, null))) : c && (c.d(1), (c = null))
		},
		i: w,
		o: w,
		d(n) {
			n && _(e), d && d.d(), f && f.d(), c && c.d()
		}
	}
}
const A = 60
function ne(i, e, l) {
	let { image: t } = e,
		{ bio: a } = e,
		{ name: s } = e,
		{ title: r } = e,
		h = !1,
		g = a == null ? void 0 : a.substring(0, A)
	const d = () => l(4, (h = !h))
	return (
		(i.$$set = (f) => {
			'image' in f && l(0, (t = f.image)),
				'bio' in f && l(1, (a = f.bio)),
				'name' in f && l(2, (s = f.name)),
				'title' in f && l(3, (r = f.title))
		}),
		[t, a, s, r, h, g, d]
	)
}
class ae extends G {
	constructor(e) {
		super(), K(this, e, ne, ie, W, { image: 0, bio: 1, name: 2, title: 3 })
	}
}
function J(i, e, l) {
	const t = i.slice()
	return (t[5] = e[l].name), (t[6] = e[l].image), (t[7] = e[l].bio), (t[3] = e[l].title), t
}
function se(i) {
	let e,
		l = 'No team members found'
	return {
		c() {
			;(e = b('p')), (e.textContent = l)
		},
		l(t) {
			;(e = k(t, 'P', { 'data-svelte-h': !0 })), F(e) !== 'svelte-l20co3' && (e.textContent = l)
		},
		m(t, a) {
			C(t, e, a)
		},
		d(t) {
			t && _(e)
		}
	}
}
function M(i) {
	let e, l
	return (
		(e = new ae({ props: { name: i[5], image: i[6], bio: i[7], title: i[3] } })),
		{
			c() {
				Q(e.$$.fragment)
			},
			l(t) {
				R(e.$$.fragment, t)
			},
			m(t, a) {
				X(e, t, a), (l = !0)
			},
			p: w,
			i(t) {
				l || (N(e.$$.fragment, t), (l = !0))
			},
			o(t) {
				T(e.$$.fragment, t), (l = !1)
			},
			d(t) {
				Y(e, t)
			}
		}
	)
}
function oe(i) {
	let e, l, t, a, s, r, h, g, d
	e = new te({ props: { title: i[3], description: i[1], date: i[2] } })
	let f = i[0].length === 0 && se(),
		c = U(i[0]),
		n = []
	for (let o = 0; o < c.length; o += 1) n[o] = M(J(i, c, o))
	const v = (o) =>
		T(n[o], 1, 1, () => {
			n[o] = null
		})
	return {
		c() {
			Q(e.$$.fragment),
				(l = P()),
				(t = b('h1')),
				(a = O(i[3])),
				(s = P()),
				(r = b('section')),
				f && f.c(),
				(h = P()),
				(g = b('ul'))
			for (let o = 0; o < n.length; o += 1) n[o].c()
			this.h()
		},
		l(o) {
			R(e.$$.fragment, o), (l = D(o)), (t = k(o, 'H1', {}))
			var m = E(t)
			;(a = S(m, i[3])),
				m.forEach(_),
				(s = D(o)),
				(r = k(o, 'SECTION', { 'data-pagefind-ignore': !0 }))
			var u = E(r)
			f && f.l(u), (h = D(u)), (g = k(u, 'UL', { class: !0 }))
			var V = E(g)
			for (let y = 0; y < n.length; y += 1) n[y].l(V)
			V.forEach(_), u.forEach(_), this.h()
		},
		h() {
			I(g, 'class', 'people svelte-sanvdh'), I(r, 'data-pagefind-ignore', '')
		},
		m(o, m) {
			X(e, o, m),
				C(o, l, m),
				C(o, t, m),
				p(t, a),
				C(o, s, m),
				C(o, r, m),
				f && f.m(r, null),
				p(r, h),
				p(r, g)
			for (let u = 0; u < n.length; u += 1) n[u] && n[u].m(g, null)
			d = !0
		},
		p(o, [m]) {
			if (m & 1) {
				c = U(o[0])
				let u
				for (u = 0; u < c.length; u += 1) {
					const V = J(o, c, u)
					n[u] ? (n[u].p(V, m), N(n[u], 1)) : ((n[u] = M(V)), n[u].c(), N(n[u], 1), n[u].m(g, null))
				}
				for (ee(), u = c.length; u < n.length; u += 1) v(u)
				x()
			}
		},
		i(o) {
			if (!d) {
				N(e.$$.fragment, o)
				for (let m = 0; m < c.length; m += 1) N(n[m])
				d = !0
			}
		},
		o(o) {
			T(e.$$.fragment, o), (n = n.filter(Boolean))
			for (let m = 0; m < n.length; m += 1) T(n[m])
			d = !1
		},
		d(o) {
			o && (_(l), _(t), _(s), _(r)), Y(e, o), f && f.d(), $(n, o)
		}
	}
}
function re(i, e, l) {
	let { data: t } = e
	const { people: a } = t,
		{ title: s, description: r, date: h } = le
	return (
		(i.$$set = (g) => {
			'data' in g && l(4, (t = g.data))
		}),
		[a, r, h, s, t]
	)
}
class he extends G {
	constructor(e) {
		super(), K(this, e, re, oe, W, { data: 4 })
	}
}
export { he as default }
