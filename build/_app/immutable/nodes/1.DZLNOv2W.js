import {
	s as E,
	c as _,
	t as p,
	f as v,
	h as g,
	i as h,
	j as d,
	k as $,
	l as b,
	m,
	n as f,
	A as x
} from '../chunks/scheduler.D9JQr37X.js'
import { S as y, i as S } from '../chunks/index.D-WnFt3a.js'
import { p as j } from '../chunks/stores.yb3qHBKv.js'
function k(s) {
	var u
	let t,
		e,
		a,
		r,
		i = ((u = s[1]) == null ? void 0 : u.message) + '',
		o
	return {
		c() {
			;(t = _('div')), (e = _('h1')), (a = p(s[0])), (r = p(': ')), (o = p(i)), this.h()
		},
		l(n) {
			t = v(n, 'DIV', { class: !0 })
			var l = g(t)
			e = v(l, 'H1', {})
			var c = g(e)
			;(a = h(c, s[0])), (r = h(c, ': ')), (o = h(c, i)), c.forEach(d), l.forEach(d), this.h()
		},
		h() {
			$(t, 'class', 'error svelte-2l8l59')
		},
		m(n, l) {
			b(n, t, l), m(t, e), m(e, a), m(e, r), m(e, o)
		},
		p: f,
		i: f,
		o: f,
		d(n) {
			n && d(t)
		}
	}
}
function q(s, t, e) {
	let a
	x(s, j, (o) => e(2, (a = o)))
	const { status: r, error: i } = a
	return [r, i]
}
class H extends y {
	constructor(t) {
		super(), S(this, t, q, k, E, {})
	}
}
export { H as component }
