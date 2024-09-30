import {
	s as d,
	c as u,
	b as h,
	f,
	g as _,
	d as m,
	l,
	n as o,
	j as r
} from './scheduler.D9JQr37X.js'
import { S as v, i as x } from './index.D-WnFt3a.js'
function b(c) {
	let e,
		i = 'About PauseAI',
		n,
		a,
		p = `We are volunteers who are united by a desire to prevent the absolutely worst thing that has ever
	happened.`
	return {
		c() {
			;(e = u('h1')), (e.textContent = i), (n = h()), (a = u('p')), (a.textContent = p)
		},
		l(t) {
			;(e = f(t, 'H1', { 'data-svelte-h': !0 })),
				_(e) !== 'svelte-gf5zfh' && (e.textContent = i),
				(n = m(t)),
				(a = f(t, 'P', { 'data-svelte-h': !0 })),
				_(a) !== 'svelte-16174df' && (a.textContent = p)
		},
		m(t, s) {
			l(t, e, s), l(t, n, s), l(t, a, s)
		},
		p: o,
		i: o,
		o,
		d(t) {
			t && (r(e), r(n), r(a))
		}
	}
}
class g extends v {
	constructor(e) {
		super(), x(this, e, null, b, d, {})
	}
}
const P = Object.freeze(
	Object.defineProperty({ __proto__: null, default: g }, Symbol.toStringTag, { value: 'Module' })
)
export { g as P, P as _ }
