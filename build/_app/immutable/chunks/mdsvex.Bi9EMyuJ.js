import { s as l, u as i, v as r, w as u, x as f } from './scheduler.D9JQr37X.js'
import { S as _, i as c, a as p, t as m } from './index.D-WnFt3a.js'
import './entry.DgPt5EtK.js'
import './a.svelte_svelte_type_style_lang.DfavE63L.js'
function d(a) {
	let s
	const n = a[1].default,
		e = i(n, a, a[0], null)
	return {
		c() {
			e && e.c()
		},
		l(t) {
			e && e.l(t)
		},
		m(t, o) {
			e && e.m(t, o), (s = !0)
		},
		p(t, [o]) {
			e && e.p && (!s || o & 1) && r(e, n, t, t[0], s ? f(n, t[0], o, null) : u(t[0]), null)
		},
		i(t) {
			s || (p(e, t), (s = !0))
		},
		o(t) {
			m(e, t), (s = !1)
		},
		d(t) {
			e && e.d(t)
		}
	}
}
function $(a, s, n) {
	let { $$slots: e = {}, $$scope: t } = s
	return (
		(a.$$set = (o) => {
			'$$scope' in o && n(0, (t = o.$$scope))
		}),
		[t, e]
	)
}
class S extends _ {
	constructor(s) {
		super(), c(this, s, $, d, l, {})
	}
}
export { S as M }
