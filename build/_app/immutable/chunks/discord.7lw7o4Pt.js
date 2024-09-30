import {
	s as C,
	a as u,
	e as _,
	c as d,
	b as D,
	f as p,
	g as j,
	d as y,
	h as A,
	j as i,
	l as m,
	t as I,
	i as k
} from './scheduler.D9JQr37X.js'
import { S as q, i as J, c as h, b as v, m as x, a as w, t as P, d as b } from './index.D-WnFt3a.js'
import { g as M, a as $ } from './a.svelte_svelte_type_style_lang.DfavE63L.js'
import { M as S } from './mdsvex.Bi9EMyuJ.js'
import { A as E } from './a.YKMG9Usu.js'
function H(c) {
	let e
	return {
		c() {
			e = I('Join')
		},
		l(a) {
			e = k(a, 'Join')
		},
		m(a, n) {
			m(a, e, n)
		},
		d(a) {
			a && i(e)
		}
	}
}
function K(c) {
	let e,
		a = `Our Discord server is the place where our community is by far the most active and where most of our actions are coordinated.
You can join the server using the link below.`,
		n,
		r,
		t,
		o
	return (
		(t = new E({
			props: {
				href: 'https://discord.gg/VhPHt5PRmK',
				rel: 'nofollow',
				$$slots: { default: [H] },
				$$scope: { ctx: c }
			}
		})),
		{
			c() {
				;(e = d('p')), (e.textContent = a), (n = D()), (r = d('p')), h(t.$$.fragment)
			},
			l(s) {
				;(e = p(s, 'P', { 'data-svelte-h': !0 })),
					j(e) !== 'svelte-15qctr3' && (e.textContent = a),
					(n = y(s)),
					(r = p(s, 'P', {}))
				var l = A(r)
				v(t.$$.fragment, l), l.forEach(i)
			},
			m(s, l) {
				m(s, e, l), m(s, n, l), m(s, r, l), x(t, r, null), (o = !0)
			},
			p(s, l) {
				const f = {}
				l & 2 && (f.$$scope = { dirty: l, ctx: s }), t.$set(f)
			},
			i(s) {
				o || (w(t.$$.fragment, s), (o = !0))
			},
			o(s) {
				P(t.$$.fragment, s), (o = !1)
			},
			d(s) {
				s && (i(e), i(n), i(r)), b(t)
			}
		}
	)
}
function O(c) {
	let e, a
	const n = [c[0], g]
	let r = { $$slots: { default: [K] }, $$scope: { ctx: c } }
	for (let t = 0; t < n.length; t += 1) r = u(r, n[t])
	return (
		(e = new S({ props: r })),
		{
			c() {
				h(e.$$.fragment)
			},
			l(t) {
				v(e.$$.fragment, t)
			},
			m(t, o) {
				x(e, t, o), (a = !0)
			},
			p(t, [o]) {
				const s = o & 1 ? M(n, [o & 1 && $(t[0]), o & 0 && $(g)]) : {}
				o & 2 && (s.$$scope = { dirty: o, ctx: t }), e.$set(s)
			},
			i(t) {
				a || (w(e.$$.fragment, t), (a = !0))
			},
			o(t) {
				P(e.$$.fragment, t), (a = !1)
			},
			d(t) {
				b(e, t)
			}
		}
	)
}
const g = {
	title: 'PauseAI Discord server',
	description: "Invitation link to PauseAI's Discord server"
}
function R(c, e, a) {
	return (
		(c.$$set = (n) => {
			a(0, (e = u(u({}, e), _(n))))
		}),
		(e = _(e)),
		[e]
	)
}
class G extends q {
	constructor(e) {
		super(), J(this, e, R, O, C, {})
	}
}
export { G as default, g as metadata }
