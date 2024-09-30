import {
	s as c,
	a as r,
	e as u,
	c as f,
	f as d,
	g as p,
	l as g,
	n as h,
	j as v
} from './scheduler.D9JQr37X.js'
import { S as $, i as x, c as y, b as C, m as N, a as L, t as b, d as A } from './index.D-WnFt3a.js'
import { g as M, a as _ } from './a.svelte_svelte_type_style_lang.DfavE63L.js'
import { M as U } from './mdsvex.Bi9EMyuJ.js'
function j(l) {
	let e,
		n =
			'<li>PauseAI protest, urging the United Nations Security Council to implement a global pause on the largest AI training runs.</li> <li>Where: United Nations HQ, New York</li> <li>When: 18th of July, 9:30 - 10:30 am</li> <li>CANCELLED</li>'
	return {
		c() {
			;(e = f('ul')), (e.innerHTML = n)
		},
		l(a) {
			;(e = d(a, 'UL', { 'data-svelte-h': !0 })), p(e) !== 'svelte-br4akq' && (e.innerHTML = n)
		},
		m(a, o) {
			g(a, e, o)
		},
		p: h,
		d(a) {
			a && v(e)
		}
	}
}
function H(l) {
	let e, n
	const a = [l[0], m]
	let o = { $$slots: { default: [j] }, $$scope: { ctx: l } }
	for (let t = 0; t < a.length; t += 1) o = r(o, a[t])
	return (
		(e = new U({ props: o })),
		{
			c() {
				y(e.$$.fragment)
			},
			l(t) {
				C(e.$$.fragment, t)
			},
			m(t, s) {
				N(e, t, s), (n = !0)
			},
			p(t, [s]) {
				const i = s & 1 ? M(a, [s & 1 && _(t[0]), s & 0 && _(m)]) : {}
				s & 2 && (i.$$scope = { dirty: s, ctx: t }), e.$set(i)
			},
			i(t) {
				n || (L(e.$$.fragment, t), (n = !0))
			},
			o(t) {
				b(e.$$.fragment, t), (n = !1)
			},
			d(t) {
				A(e, t)
			}
		}
	)
}
const m = { title: '(Cancelled) PauseAI protest @ United Nations, NYC, July 18th' }
function I(l, e, n) {
	return (
		(l.$$set = (a) => {
			n(0, (e = r(r({}, e), u(a))))
		}),
		(e = u(e)),
		[e]
	)
}
class E extends $ {
	constructor(e) {
		super(), x(this, e, I, H, c, {})
	}
}
export { E as default, m as metadata }
