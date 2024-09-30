import { s as m, c as o, f, y as n, k as i, l as u, n as c, j as _ } from './scheduler.D9JQr37X.js'
import { S as h, i as g } from './index.D-WnFt3a.js'
function d(r) {
	let t, a
	return {
		c() {
			;(t = o('img')), this.h()
		},
		l(e) {
			;(t = f(e, 'IMG', { src: !0, alt: !0, loading: !0 })), this.h()
		},
		h() {
			n(t.src, (a = r[0])) || i(t, 'src', a), i(t, 'alt', r[1]), i(t, 'loading', 'lazy')
		},
		m(e, s) {
			u(e, t, s)
		},
		p(e, [s]) {
			s & 1 && !n(t.src, (a = e[0])) && i(t, 'src', a), s & 2 && i(t, 'alt', e[1])
		},
		i: c,
		o: c,
		d(e) {
			e && _(t)
		}
	}
}
function I(r, t, a) {
	let { src: e } = t,
		{ alt: s } = t
	return (
		(r.$$set = (l) => {
			'src' in l && a(0, (e = l.src)), 'alt' in l && a(1, (s = l.alt))
		}),
		[e, s]
	)
}
class S extends h {
	constructor(t) {
		super(), g(this, t, I, d, m, { src: 0, alt: 1 })
	}
}
export { S as I }
