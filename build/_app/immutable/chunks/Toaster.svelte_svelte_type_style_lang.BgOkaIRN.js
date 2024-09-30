import { d as _, w as A } from './entry.DgPt5EtK.js'
import { a7 as g } from './scheduler.D9JQr37X.js'
function x(e, u, r, i) {
	var n,
		o,
		m = !1,
		R = r.length >= 2,
		V = (d, a, l) => {
			if (((n = a), R && (o = d), !m)) {
				let c = u(d, a, l)
				if (u.length < 2) a(c)
				else return c
			}
			m = !1
		},
		b = _(e, V, i),
		k = !Array.isArray(e)
	function p(d) {
		var a = r(d, o)
		k
			? ((m = !0), e.set(a))
			: a.forEach((l, c) => {
					;(m = !0), e[c].set(l)
				}),
			(m = !1)
	}
	var y = !1
	function w(d) {
		var a, l, c, f
		if (y) {
			;(f = d(g(b))), n(f)
			return
		}
		var P = b.subscribe((Q) => {
			y ? (a ? (l = !0) : (a = !0)) : (c = Q)
		})
		;(f = d(c)), (y = !0), n(f), P(), (y = !1), l && (f = g(b)), a && p(f)
	}
	return {
		subscribe: b.subscribe,
		set(d) {
			w(() => d)
		},
		update: w
	}
}
const E = 20,
	s = A([]),
	T = A(null),
	h = new Map(),
	D = (e) => {
		if (h.has(e)) return
		const u = setTimeout(() => {
			h.delete(e), M(e)
		}, 1e3)
		h.set(e, u)
	},
	j = (e) => {
		const u = h.get(e)
		u && clearTimeout(u)
	}
function B(e) {
	e.id && j(e.id), s.update((u) => u.map((r) => (r.id === e.id ? { ...r, ...e } : r)))
}
function H(e) {
	s.update((u) => [e, ...u].slice(0, E))
}
function L(e) {
	g(s).find((u) => u.id === e.id) ? B(e) : H(e)
}
function N(e) {
	s.update(
		(u) => (
			e
				? D(e)
				: u.forEach((r) => {
						D(r.id)
					}),
			u.map((r) => (r.id === e || e === void 0 ? { ...r, visible: !1 } : r))
		)
	)
}
function M(e) {
	s.update((u) => (e === void 0 ? [] : u.filter((r) => r.id !== e)))
}
function G(e) {
	T.set(e)
}
function J(e) {
	let u
	T.update((r) => ((u = e - (r || 0)), null)),
		s.update((r) => r.map((i) => ({ ...i, pauseDuration: i.pauseDuration + u })))
}
const U = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 }
function K(e = {}) {
	return {
		toasts: x(
			s,
			(r) =>
				r.map((i) => {
					var n, o
					return {
						...e,
						...e[i.type],
						...i,
						duration:
							i.duration ||
							((n = e[i.type]) == null ? void 0 : n.duration) ||
							(e == null ? void 0 : e.duration) ||
							U[i.type],
						style: [e.style, (o = e[i.type]) == null ? void 0 : o.style, i.style].join(';')
					}
				}),
			(r) => r
		),
		pausedAt: T
	}
}
const W = (e) => typeof e == 'function',
	S = (e, u) => (W(e) ? e(u) : e),
	q = (() => {
		let e = 0
		return () => ((e += 1), e.toString())
	})(),
	X = (() => {
		let e
		return () => {
			if (e === void 0 && typeof window < 'u') {
				const u = matchMedia('(prefers-reduced-motion: reduce)')
				e = !u || u.matches
			}
			return e
		}
	})(),
	z = (e, u = 'blank', r) => ({
		createdAt: Date.now(),
		visible: !0,
		type: u,
		ariaProps: { role: 'status', 'aria-live': 'polite' },
		message: e,
		pauseDuration: 0,
		...r,
		id: (r == null ? void 0 : r.id) || q()
	}),
	v = (e) => (u, r) => {
		const i = z(u, e, r)
		return L(i), i.id
	},
	t = (e, u) => v('blank')(e, u)
t.error = v('error')
t.success = v('success')
t.loading = v('loading')
t.custom = v('custom')
t.dismiss = (e) => {
	N(e)
}
t.remove = (e) => M(e)
t.promise = (e, u, r) => {
	const i = t.loading(u.loading, { ...r, ...(r == null ? void 0 : r.loading) })
	return (
		e
			.then(
				(n) => (t.success(S(u.success, n), { id: i, ...r, ...(r == null ? void 0 : r.success) }), n)
			)
			.catch((n) => {
				t.error(S(u.error, n), { id: i, ...r, ...(r == null ? void 0 : r.error) })
			}),
		e
	)
}
export { B as a, J as e, X as p, G as s, t, K as u }
