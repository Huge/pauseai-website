import {
	s as c,
	u as _,
	c as h,
	f as m,
	h as b,
	j as r,
	k as d,
	D as f,
	l as p,
	J as g,
	v as k,
	w as v,
	x as B,
	K as q
} from './scheduler.D9JQr37X.js'
import { S, i as T, a as j, t as w } from './index.D-WnFt3a.js'
function C(a) {
	let e, l, o, u
	const i = a[2].default,
		s = _(i, a, a[1], null)
	return {
		c() {
			;(e = h('button')), s && s.c(), this.h()
		},
		l(t) {
			e = m(t, 'BUTTON', { class: !0 })
			var n = b(e)
			s && s.l(n), n.forEach(r), this.h()
		},
		h() {
			d(e, 'class', 'svelte-e8kq2h'), f(e, 'subtle', a[0])
		},
		m(t, n) {
			p(t, e, n), s && s.m(e, null), (l = !0), o || ((u = g(e, 'click', a[3])), (o = !0))
		},
		p(t, [n]) {
			s && s.p && (!l || n & 2) && k(s, i, t, t[1], l ? B(i, t[1], n, null) : v(t[1]), null),
				(!l || n & 1) && f(e, 'subtle', t[0])
		},
		i(t) {
			l || (j(s, t), (l = !0))
		},
		o(t) {
			w(s, t), (l = !1)
		},
		d(t) {
			t && r(e), s && s.d(t), (o = !1), u()
		}
	}
}
function D(a, e, l) {
	let { $$slots: o = {}, $$scope: u } = e,
		{ subtle: i = !1 } = e
	function s(t) {
		q.call(this, a, t)
	}
	return (
		(a.$$set = (t) => {
			'subtle' in t && l(0, (i = t.subtle)), '$$scope' in t && l(1, (u = t.$$scope))
		}),
		[i, u, o, s]
	)
}
class K extends S {
	constructor(e) {
		super(), T(this, e, D, C, c, { subtle: 0 })
	}
}
export { K as B }
