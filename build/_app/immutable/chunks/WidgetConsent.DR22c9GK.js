import {
	s as D,
	o as k,
	l as m,
	j as f,
	A as N,
	O as S,
	Q as V,
	c as h,
	t as $,
	b as A,
	f as b,
	h as v,
	i as g,
	d as C,
	k as E,
	m as w,
	u as W,
	v as q,
	w as O,
	x as Q
} from './scheduler.D9JQr37X.js'
import {
	S as x,
	i as z,
	g as F,
	t as d,
	e as G,
	a as p,
	c as B,
	b as T,
	m as X,
	d as j
} from './index.D-WnFt3a.js'
import { B as H } from './Button.Ip6Rcx0-.js'
import { A as J } from './a.YKMG9Usu.js'
import { c as I } from './WidgetConsentStore.BGerYN5u.js'
function K() {
	window.twttr = (function (i, t, e) {
		var r,
			n = i.getElementsByTagName(t)[0],
			o = window.twttr || {}
		return (
			i.getElementById(e) ||
				((r = i.createElement(t)),
				(r.id = e),
				(r.src = 'https://platform.twitter.com/widgets.js'),
				n.parentNode.insertBefore(r, n),
				(o._e = []),
				(o.ready = function (a) {
					o._e.push(a)
				})),
			o
		)
	})(document, 'script', 'twitter-wjs')
}
function L(i) {
	let t, e, r, n, o, a, u, l
	return (
		(n = new J({
			props: {
				href: 'https://twitter.com/en/privacy',
				$$slots: { default: [P] },
				$$scope: { ctx: i }
			}
		})),
		(u = new H({ props: { $$slots: { default: [R] }, $$scope: { ctx: i } } })),
		u.$on('click', i[4]),
		{
			c() {
				;(t = h('div')),
					(e = h('div')),
					(r =
						$(`By enabling X (Twitter) widgets, you consent to your data being processed in accordance with
			the `)),
					B(n.$$.fragment),
					(o = $('.')),
					(a = A()),
					B(u.$$.fragment),
					this.h()
			},
			l(s) {
				t = b(s, 'DIV', { class: !0 })
				var c = v(t)
				e = b(c, 'DIV', { class: !0 })
				var _ = v(e)
				;(r = g(
					_,
					`By enabling X (Twitter) widgets, you consent to your data being processed in accordance with
			the `
				)),
					T(n.$$.fragment, _),
					(o = g(_, '.')),
					_.forEach(f),
					(a = C(c)),
					T(u.$$.fragment, c),
					c.forEach(f),
					this.h()
			},
			h() {
				E(e, 'class', 'consent-text svelte-1i0x9ha'), E(t, 'class', 'widget-consent svelte-1i0x9ha')
			},
			m(s, c) {
				m(s, t, c), w(t, e), w(e, r), X(n, e, null), w(e, o), w(t, a), X(u, t, null), (l = !0)
			},
			p(s, c) {
				const _ = {}
				c & 32 && (_.$$scope = { dirty: c, ctx: s }), n.$set(_)
				const y = {}
				c & 32 && (y.$$scope = { dirty: c, ctx: s }), u.$set(y)
			},
			i(s) {
				l || (p(n.$$.fragment, s), p(u.$$.fragment, s), (l = !0))
			},
			o(s) {
				d(n.$$.fragment, s), d(u.$$.fragment, s), (l = !1)
			},
			d(s) {
				s && f(t), j(n), j(u)
			}
		}
	)
}
function M(i) {
	let t, e
	const r = i[2].default,
		n = W(r, i, i[5], null)
	return {
		c() {
			;(t = h('div')), n && n.c()
		},
		l(o) {
			t = b(o, 'DIV', {})
			var a = v(t)
			n && n.l(a), a.forEach(f)
		},
		m(o, a) {
			m(o, t, a), n && n.m(t, null), i[3](t), (e = !0)
		},
		p(o, a) {
			n && n.p && (!e || a & 32) && q(n, r, o, o[5], e ? Q(r, o[5], a, null) : O(o[5]), null)
		},
		i(o) {
			e || (p(n, o), (e = !0))
		},
		o(o) {
			d(n, o), (e = !1)
		},
		d(o) {
			o && f(t), n && n.d(o), i[3](null)
		}
	}
}
function P(i) {
	let t
	return {
		c() {
			t = $('privacy policy of X')
		},
		l(e) {
			t = g(e, 'privacy policy of X')
		},
		m(e, r) {
			m(e, t, r)
		},
		d(e) {
			e && f(t)
		}
	}
}
function R(i) {
	let t
	return {
		c() {
			t = $('Enable X (Twitter) widgets')
		},
		l(e) {
			t = g(e, 'Enable X (Twitter) widgets')
		},
		m(e, r) {
			m(e, t, r)
		},
		d(e) {
			e && f(t)
		}
	}
}
function U(i) {
	let t, e, r, n
	const o = [M, L],
		a = []
	function u(l, s) {
		return l[1] ? 0 : 1
	}
	return (
		(t = u(i)),
		(e = a[t] = o[t](i)),
		{
			c() {
				e.c(), (r = k())
			},
			l(l) {
				e.l(l), (r = k())
			},
			m(l, s) {
				a[t].m(l, s), m(l, r, s), (n = !0)
			},
			p(l, [s]) {
				let c = t
				;(t = u(l)),
					t === c
						? a[t].p(l, s)
						: (F(),
							d(a[c], 1, 1, () => {
								a[c] = null
							}),
							G(),
							(e = a[t]),
							e ? e.p(l, s) : ((e = a[t] = o[t](l)), e.c()),
							p(e, 1),
							e.m(r.parentNode, r))
			},
			i(l) {
				n || (p(e), (n = !0))
			},
			o(l) {
				d(e), (n = !1)
			},
			d(l) {
				l && f(r), a[t].d(l)
			}
		}
	)
}
function Y(i, t, e) {
	let r
	N(i, I, (s) => e(1, (r = s)))
	let { $$slots: n = {}, $$scope: o } = t,
		a
	function u(s) {
		S[s ? 'unshift' : 'push'](() => {
			;(a = s), e(0, a)
		})
	}
	const l = () => {
		let s = !1
		r != null && (s = !0), V(I, (r = !0), r), s && location.reload()
	}
	return (
		(i.$$set = (s) => {
			'$$scope' in s && e(5, (o = s.$$scope))
		}),
		(i.$$.update = () => {
			i.$$.dirty & 1 &&
				a &&
				(K(),
				window.twttr.ready(() => {
					a && window.twttr.load(a)
				}))
		}),
		[a, r, n, u, l, o]
	)
}
class ot extends x {
	constructor(t) {
		super(), z(this, t, Y, U, D, {})
	}
}
export { ot as W }
