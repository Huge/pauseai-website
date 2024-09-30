import {
	s as W,
	c as y,
	b as j,
	t as A,
	p as Z,
	f as k,
	j as u,
	d as I,
	h as M,
	i as P,
	k as v,
	m as _,
	l as z,
	n as q,
	I as $,
	M as ee,
	N as te,
	g as B,
	aj as F,
	J as D,
	af as se,
	r as Q
} from './scheduler.D9JQr37X.js'
import { g as le } from './globals.D0QH3NT1.js'
import { e as H } from './each.Gi_i5kkj.js'
import { S as oe, i as ae } from './index.D-WnFt3a.js'
import { b as V } from './config.DERVHgho.js'
const { document: U } = le
function L(r, e, l) {
	const t = r.slice()
	return (t[10] = e[l].role), (t[11] = e[l].content), t
}
function K(r) {
	let e,
		l = r[7].intro + '',
		t
	return {
		c() {
			;(e = y('p')), (t = A(l))
		},
		l(s) {
			e = k(s, 'P', {})
			var o = M(e)
			;(t = P(o, l)), o.forEach(u)
		},
		m(s, o) {
			z(s, e, o), _(e, t)
		},
		p: q,
		d(s) {
			s && u(e)
		}
	}
}
function X(r) {
	let e,
		l,
		t = r[11] + '',
		s,
		o
	return {
		c() {
			;(e = y('div')), (l = y('p')), (s = A(t)), this.h()
		},
		l(p) {
			e = k(p, 'DIV', { class: !0 })
			var i = M(e)
			l = k(i, 'P', { class: !0 })
			var d = M(l)
			;(s = P(d, t)), d.forEach(u), i.forEach(u), this.h()
		},
		h() {
			v(l, 'class', 'svelte-17zrsph'), v(e, 'class', (o = 'message ' + r[10] + ' svelte-17zrsph'))
		},
		m(p, i) {
			z(p, e, i), _(e, l), _(l, s)
		},
		p(p, i) {
			i & 1 && t !== (t = p[11] + '') && te(s, t),
				i & 1 && o !== (o = 'message ' + p[10] + ' svelte-17zrsph') && v(e, 'class', o)
		},
		d(p) {
			p && u(e)
		}
	}
}
function G(r) {
	let e,
		l = '<p class="svelte-17zrsph">Thinking...</p>'
	return {
		c() {
			;(e = y('div')), (e.innerHTML = l), this.h()
		},
		l(t) {
			;(e = k(t, 'DIV', { class: !0, 'data-svelte-h': !0 })),
				B(e) !== 'svelte-1bgpwh2' && (e.innerHTML = l),
				this.h()
		},
		h() {
			v(e, 'class', 'message assistant loading svelte-17zrsph')
		},
		m(t, s) {
			z(t, e, s)
		},
		d(t) {
			t && u(e)
		}
	}
}
function ne(r) {
	let e,
		l,
		t,
		s,
		o,
		p = 'Clear chat',
		i,
		d,
		b = 'Copy chat',
		w,
		a,
		T,
		g,
		S,
		h
	return {
		c() {
			;(e = y('form')),
				(l = y('textarea')),
				(t = j()),
				(s = y('div')),
				(o = y('button')),
				(o.textContent = p),
				(i = j()),
				(d = y('button')),
				(d.textContent = b),
				(w = j()),
				(a = y('button')),
				(T = A('Send')),
				this.h()
		},
		l(C) {
			e = k(C, 'FORM', { class: !0 })
			var c = M(e)
			;(l = k(c, 'TEXTAREA', { placeholder: !0, class: !0 })),
				M(l).forEach(u),
				(t = I(c)),
				(s = k(c, 'DIV', { class: !0 }))
			var m = M(s)
			;(o = k(m, 'BUTTON', { class: !0, 'data-svelte-h': !0 })),
				B(o) !== 'svelte-1a4m95s' && (o.textContent = p),
				(i = I(m)),
				(d = k(m, 'BUTTON', { class: !0, 'data-svelte-h': !0 })),
				B(d) !== 'svelte-hfjj04' && (d.textContent = b),
				(w = I(m)),
				(a = k(m, 'BUTTON', { type: !0, class: !0 }))
			var J = M(a)
			;(T = P(J, 'Send')), J.forEach(u), m.forEach(u), c.forEach(u), this.h()
		},
		h() {
			v(l, 'placeholder', 'Type here'),
				v(l, 'class', 'svelte-17zrsph'),
				v(o, 'class', 'button button--alt svelte-17zrsph'),
				v(d, 'class', 'button button--alt svelte-17zrsph'),
				v(a, 'type', 'submit'),
				(a.disabled = g = r[2] || r[1] == ''),
				v(a, 'class', 'svelte-17zrsph'),
				v(s, 'class', 'buttons svelte-17zrsph'),
				v(e, 'class', 'svelte-17zrsph')
		},
		m(C, c) {
			z(C, e, c),
				_(e, l),
				F(l, r[1]),
				_(e, t),
				_(e, s),
				_(s, o),
				_(s, i),
				_(s, d),
				_(s, w),
				_(s, a),
				_(a, T),
				S ||
					((h = [
						D(l, 'input', r[9]),
						D(l, 'keydown', r[6]),
						D(o, 'click', r[3]),
						D(d, 'click', r[4]),
						D(e, 'submit', se(r[5]))
					]),
					(S = !0))
		},
		p(C, c) {
			c & 2 && F(l, C[1]), c & 6 && g !== (g = C[2] || C[1] == '') && (a.disabled = g)
		},
		d(C) {
			C && u(e), (S = !1), Q(h)
		}
	}
}
function re(r) {
	let e,
		l = 'You reached the maximum amount of messages, you can clear the chat',
		t,
		s,
		o = 'Clear chat',
		p,
		i,
		d = 'Copy chat',
		b,
		w
	return {
		c() {
			;(e = y('p')),
				(e.textContent = l),
				(t = j()),
				(s = y('button')),
				(s.textContent = o),
				(p = j()),
				(i = y('button')),
				(i.textContent = d),
				this.h()
		},
		l(a) {
			;(e = k(a, 'P', { 'data-svelte-h': !0 })),
				B(e) !== 'svelte-19ehbu0' && (e.textContent = l),
				(t = I(a)),
				(s = k(a, 'BUTTON', { class: !0, 'data-svelte-h': !0 })),
				B(s) !== 'svelte-4m9xdl' && (s.textContent = o),
				(p = I(a)),
				(i = k(a, 'BUTTON', { class: !0, 'data-svelte-h': !0 })),
				B(i) !== 'svelte-1su1s8p' && (i.textContent = d),
				this.h()
		},
		h() {
			v(s, 'class', 'button svelte-17zrsph'), v(i, 'class', 'button svelte-17zrsph')
		},
		m(a, T) {
			z(a, e, T),
				z(a, t, T),
				z(a, s, T),
				z(a, p, T),
				z(a, i, T),
				b || ((w = [D(s, 'click', r[3]), D(i, 'click', r[4])]), (b = !0))
		},
		p: q,
		d(a) {
			a && (u(e), u(t), u(s), u(p), u(i)), (b = !1), Q(w)
		}
	}
}
function ie(r) {
	let e, l, t, s, o, p, i, d, b, w, a, T, g, S
	U.title = e = r[8]
	let h = r[0].length === 0 && K(r),
		C = H(r[0]),
		c = []
	for (let n = 0; n < C.length; n += 1) c[n] = X(L(r, C, n))
	let m = r[2] && G()
	function J(n, E) {
		return n[0].length > ce ? re : ne
	}
	let R = J(r),
		O = R(r)
	return {
		c() {
			;(l = y('meta')), (t = y('meta')), (s = j()), (o = y('main')), h && h.c(), (p = j())
			for (let n = 0; n < c.length; n += 1) c[n].c()
			;(i = j()),
				m && m.c(),
				(d = j()),
				(b = y('footer')),
				O.c(),
				(w = j()),
				(a = y('div')),
				(T = A('Disclaimer: ')),
				(g = A(V)),
				(S = A(" is just a cheeky chatbot, don't take it too seriously.")),
				this.h()
		},
		l(n) {
			const E = Z('svelte-sjo4nm', U.head)
			;(l = k(E, 'META', { property: !0, content: !0 })),
				(t = k(E, 'META', { property: !0, content: !0 })),
				E.forEach(u),
				(s = I(n)),
				(o = k(n, 'MAIN', { class: !0 }))
			var f = M(o)
			h && h.l(f), (p = I(f))
			for (let x = 0; x < c.length; x += 1) c[x].l(f)
			;(i = I(f)), m && m.l(f), f.forEach(u), (d = I(n)), (b = k(n, 'FOOTER', {}))
			var N = M(b)
			O.l(N), (w = I(N)), (a = k(N, 'DIV', { class: !0 }))
			var Y = M(a)
			;(T = P(Y, 'Disclaimer: ')),
				(g = P(Y, V)),
				(S = P(Y, " is just a cheeky chatbot, don't take it too seriously.")),
				Y.forEach(u),
				N.forEach(u),
				this.h()
		},
		h() {
			v(l, 'property', 'og:title'),
				v(l, 'content', r[8]),
				v(t, 'property', 'og:description'),
				v(t, 'content', r[7].intro),
				v(o, 'class', 'svelte-17zrsph'),
				v(a, 'class', 'disclaimer svelte-17zrsph')
		},
		m(n, E) {
			_(U.head, l), _(U.head, t), z(n, s, E), z(n, o, E), h && h.m(o, null), _(o, p)
			for (let f = 0; f < c.length; f += 1) c[f] && c[f].m(o, null)
			_(o, i),
				m && m.m(o, null),
				z(n, d, E),
				z(n, b, E),
				O.m(b, null),
				_(b, w),
				_(b, a),
				_(a, T),
				_(a, g),
				_(a, S)
		},
		p(n, [E]) {
			if (
				(E & 256 && e !== (e = n[8]) && (U.title = e),
				n[0].length === 0
					? h
						? h.p(n, E)
						: ((h = K(n)), h.c(), h.m(o, p))
					: h && (h.d(1), (h = null)),
				E & 1)
			) {
				C = H(n[0])
				let f
				for (f = 0; f < C.length; f += 1) {
					const N = L(n, C, f)
					c[f] ? c[f].p(N, E) : ((c[f] = X(N)), c[f].c(), c[f].m(o, i))
				}
				for (; f < c.length; f += 1) c[f].d(1)
				c.length = C.length
			}
			n[2] ? m || ((m = G()), m.c(), m.m(o, null)) : m && (m.d(1), (m = null)),
				R === (R = J(n)) && O ? O.p(n, E) : (O.d(1), (O = R(n)), O && (O.c(), O.m(b, w)))
		},
		i: q,
		o: q,
		d(n) {
			n && (u(s), u(o), u(d), u(b)), u(l), u(t), h && h.d(), $(c, n), m && m.d(), O.d()
		}
	}
}
const ce = 20
function ue(r, e, l) {
	let t = typeof localStorage < 'u' ? JSON.parse(localStorage.getItem('messages') || '[]') : [],
		s = '',
		o = !1
	function p() {
		l(0, (t = [])), localStorage.setItem('messages', JSON.stringify(t))
	}
	function i() {
		const g = (h) => (h.role === 'user' ? 'You' : { botName: V }),
			S = t.map(
				(h) => `${g(h)}:
${h.content}`
			).join(`

`)
		navigator.clipboard.writeText(S), window.alert('Copied to clipboard!')
	}
	async function d() {
		if (s.trim() === '') return
		l(0, (t = [...t, { content: s, role: 'user' }])), l(1, (s = '')), l(2, (o = !0))
		const S = await (
			await fetch('api/chat', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(t)
			})
		).json()
		l(0, (t = [...t, { content: S.response, role: 'assistant' }])),
			localStorage.setItem('messages', JSON.stringify(t)),
			l(2, (o = !1))
	}
	ee(() => {
		const g = document.querySelector('footer')
		g == null || g.scrollIntoView({ behavior: 'smooth' })
	})
	function b(g) {
		g.key === 'Enter' && (g.preventDefault(), d(), l(1, (s = '')))
	}
	const w = {
			intro: `Meet ${V}! You can chat with them about AI safety, the dangers of AI, how it wants to take over the world or how we can stop this from happening!`
		},
		a = `Chat with ${V}`
	function T() {
		;(s = this.value), l(1, s)
	}
	return [t, s, o, p, i, d, b, w, a, T]
}
class he extends oe {
	constructor(e) {
		super(), ae(this, e, ue, ie, W, {})
	}
}
const ve = Object.freeze(
	Object.defineProperty({ __proto__: null, default: he }, Symbol.toStringTag, { value: 'Module' })
)
export { he as P, ve as _ }
