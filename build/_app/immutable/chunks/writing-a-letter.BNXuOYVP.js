import {
	s as Ee,
	a as ge,
	e as Le,
	c as a,
	t as H,
	b as f,
	f as r,
	h as z,
	i as M,
	j as o,
	d as m,
	g as c,
	k as B,
	l as s,
	m as F
} from './scheduler.D9JQr37X.js'
import {
	S as Ue,
	i as De,
	c as J,
	b as O,
	m as X,
	a as N,
	t as R,
	d as Y
} from './index.D-WnFt3a.js'
import { g as Ie, a as Te } from './a.svelte_svelte_type_style_lang.DfavE63L.js'
import { M as Be } from './mdsvex.Bi9EMyuJ.js'
import { A as he } from './a.YKMG9Usu.js'
function Pe(p) {
	let n
	return {
		c() {
			n = H('slideshow for workshops')
		},
		l(i) {
			n = M(i, 'slideshow for workshops')
		},
		m(i, u) {
			s(i, n, u)
		},
		d(i) {
			i && o(n)
		}
	}
}
function Se(p) {
	let n
	return {
		c() {
			n = H('Email Builder')
		},
		l(i) {
			n = M(i, 'Email Builder')
		},
		m(i, u) {
			s(i, n, u)
		},
		d(i) {
			i && o(n)
		}
	}
}
function je(p) {
	let n
	return {
		c() {
			n = H('Example letter')
		},
		l(i) {
			n = M(i, 'Example letter')
		},
		m(i, u) {
			s(i, n, u)
		},
		d(i) {
			i && o(n)
		}
	}
}
function qe(p) {
	let n
	return {
		c() {
			n = H('Join the Discord')
		},
		l(i) {
			n = M(i, 'Join the Discord')
		},
		m(i, u) {
			s(i, n, u)
		},
		d(i) {
			i && o(n)
		}
	}
}
function Ge(p) {
	let n,
		i,
		u,
		d,
		l,
		h,
		q = `Ultimately, we lobby to influence the decisions of people in power.
Sending an e-mail or writing a letter can be one of the most direct and effective ways of getting the attention of someone in power.
However, it’s important to do it right.
Important people get a lot of mail, and they don’t have the time to read or respond to every single message they get.
In this guide, we’ll dive into what you can do to make your message stand out.`,
		Z,
		g,
		pe,
		_,
		ce,
		K,
		$,
		_e = 'Finding the right person',
		Q,
		L,
		$e =
			'<li>Who is the right person to contact? Who has the power? Who prepares the meetings? Who is the most likely to read your message?</li>',
		V,
		v,
		ve = 'Preparing your message',
		ee,
		T,
		we =
			'<li>What do you want them to do? Be specific.</li> <li>Research the person you’re writing to. What are their interests? What are their values? What are their priorities? What are their concerns? Have they done things with AI? What does their party stand for? What is in their portfolio?</li>',
		te,
		w,
		ye = 'Structure of the message',
		ne,
		A,
		xe =
			'<li><strong>Greeting</strong>. Can be formal or informal. If you’re not sure, go with formal.</li> <li><strong>Fitting compliment</strong>. Make it personal, make it specific, make it relevant.</li> <li><strong>Introduce yourself</strong>. Again, make it personal. Why are you writing this? Why should they listen to you?</li> <li><strong>Discuss the problem</strong>. Give a lot of links to sources. Use authoritative sources and names (e.g. Turing Award winners Hinton, Bengio) and statistics (14% average risk of extinction from AI).</li> <li><strong>Discuss the solution</strong>. The pause. What does it mean? What does it impact? Discuss why we need a pause, and why the open letter failed to achieve it (market dynamics, we need international regulation). Address some of the common complaints (e.g.)</li> <li><strong>Discuss urgency</strong>. Why do they need to act <em>now</em>? Discuss how virtually all AI researchers were surprised by speed of recent advancements, the amount of money and researchers being added now. The pause cannot wait until the summit, we can’t take the chance of being off in our predictions again. We need to err on the side of caution.</li> <li><strong>Ask</strong>. What do you want them to do? Make your ask very concrete. E.g.: bring up the pause in the next meeting, and discuss it with other people in power. Ask them to reply to you, and ask them to keep you updated on their progress. Or even better: ask them to meet with you. Give a concrete time slot that you’re available.</li>',
		oe,
		y,
		be = 'Tips',
		ie,
		E,
		Ce =
			'<li>Be concise</li> <li>Be polite</li> <li>Link to stuff</li> <li>Check spelling and grammar</li> <li>Send from some custom domain</li> <li>Share your credentials</li>',
		se,
		x,
		ke = 'Get signatures',
		le,
		U,
		We =
			'<li>A single letter is nice, but a letter with a bunch of signatures is nicer. This can take quite an effort</li>',
		ae,
		b,
		He = 'Example letter',
		re,
		P,
		C,
		ue,
		k,
		Me = 'Need more help / feedback?',
		fe,
		D,
		W,
		de,
		me
	return (
		(d = new he({
			props: {
				href: 'https://tiny.cc/emaillobby',
				rel: 'nofollow',
				$$slots: { default: [Pe] },
				$$scope: { ctx: p }
			}
		})),
		(_ = new he({
			props: { href: '/email-builder', $$slots: { default: [Se] }, $$scope: { ctx: p } }
		})),
		(C = new he({
			props: {
				href: 'https://docs.google.com/document/d/1M3Wc7JMNn8UUZmOfuxOW7a6GtTCckY7fkpd-pmv3Fr8/edit',
				rel: 'nofollow',
				$$slots: { default: [je] },
				$$scope: { ctx: p }
			}
		})),
		(W = new he({
			props: {
				href: 'https://discord.gg/2XXWXvErfA',
				rel: 'nofollow',
				$$slots: { default: [qe] },
				$$scope: { ctx: p }
			}
		})),
		{
			c() {
				;(n = a('p')),
					(i = a('em')),
					(u = H('Also available as a ')),
					J(d.$$.fragment),
					(l = f()),
					(h = a('p')),
					(h.textContent = q),
					(Z = f()),
					(g = a('p')),
					(pe = H(
						'Crafting a highly personalised message from scratch following the tips below can be extremely effective, but you can also try our '
					)),
					J(_.$$.fragment),
					(ce = H('.')),
					(K = f()),
					($ = a('h2')),
					($.textContent = _e),
					(Q = f()),
					(L = a('ul')),
					(L.innerHTML = $e),
					(V = f()),
					(v = a('h2')),
					(v.textContent = ve),
					(ee = f()),
					(T = a('ul')),
					(T.innerHTML = we),
					(te = f()),
					(w = a('h2')),
					(w.textContent = ye),
					(ne = f()),
					(A = a('ul')),
					(A.innerHTML = xe),
					(oe = f()),
					(y = a('h2')),
					(y.textContent = be),
					(ie = f()),
					(E = a('ul')),
					(E.innerHTML = Ce),
					(se = f()),
					(x = a('h2')),
					(x.textContent = ke),
					(le = f()),
					(U = a('ul')),
					(U.innerHTML = We),
					(ae = f()),
					(b = a('h2')),
					(b.textContent = He),
					(re = f()),
					(P = a('p')),
					J(C.$$.fragment),
					(ue = f()),
					(k = a('h2')),
					(k.textContent = Me),
					(fe = f()),
					(D = a('p')),
					J(W.$$.fragment),
					(de = H(
						' to ask any question about sending an e-mail or to share your draft for feedback!'
					)),
					this.h()
			},
			l(e) {
				n = r(e, 'P', {})
				var t = z(n)
				i = r(t, 'EM', {})
				var S = z(i)
				;(u = M(S, 'Also available as a ')),
					O(d.$$.fragment, S),
					S.forEach(o),
					t.forEach(o),
					(l = m(e)),
					(h = r(e, 'P', { 'data-svelte-h': !0 })),
					c(h) !== 'svelte-xg7y6n' && (h.textContent = q),
					(Z = m(e)),
					(g = r(e, 'P', {}))
				var I = z(g)
				;(pe = M(
					I,
					'Crafting a highly personalised message from scratch following the tips below can be extremely effective, but you can also try our '
				)),
					O(_.$$.fragment, I),
					(ce = M(I, '.')),
					I.forEach(o),
					(K = m(e)),
					($ = r(e, 'H2', { id: !0, 'data-svelte-h': !0 })),
					c($) !== 'svelte-89lwal' && ($.textContent = _e),
					(Q = m(e)),
					(L = r(e, 'UL', { 'data-svelte-h': !0 })),
					c(L) !== 'svelte-oilzwa' && (L.innerHTML = $e),
					(V = m(e)),
					(v = r(e, 'H2', { id: !0, 'data-svelte-h': !0 })),
					c(v) !== 'svelte-1ecb8pg' && (v.textContent = ve),
					(ee = m(e)),
					(T = r(e, 'UL', { 'data-svelte-h': !0 })),
					c(T) !== 'svelte-12lfzxw' && (T.innerHTML = we),
					(te = m(e)),
					(w = r(e, 'H2', { id: !0, 'data-svelte-h': !0 })),
					c(w) !== 'svelte-3ac1yd' && (w.textContent = ye),
					(ne = m(e)),
					(A = r(e, 'UL', { 'data-svelte-h': !0 })),
					c(A) !== 'svelte-qknbwx' && (A.innerHTML = xe),
					(oe = m(e)),
					(y = r(e, 'H2', { id: !0, 'data-svelte-h': !0 })),
					c(y) !== 'svelte-u9y312' && (y.textContent = be),
					(ie = m(e)),
					(E = r(e, 'UL', { 'data-svelte-h': !0 })),
					c(E) !== 'svelte-1jdj1kl' && (E.innerHTML = Ce),
					(se = m(e)),
					(x = r(e, 'H2', { id: !0, 'data-svelte-h': !0 })),
					c(x) !== 'svelte-1vflgb1' && (x.textContent = ke),
					(le = m(e)),
					(U = r(e, 'UL', { 'data-svelte-h': !0 })),
					c(U) !== 'svelte-c0f7zt' && (U.innerHTML = We),
					(ae = m(e)),
					(b = r(e, 'H2', { id: !0, 'data-svelte-h': !0 })),
					c(b) !== 'svelte-105cd09' && (b.textContent = He),
					(re = m(e)),
					(P = r(e, 'P', {}))
				var G = z(P)
				O(C.$$.fragment, G),
					G.forEach(o),
					(ue = m(e)),
					(k = r(e, 'H2', { id: !0, 'data-svelte-h': !0 })),
					c(k) !== 'svelte-pjsbns' && (k.textContent = Me),
					(fe = m(e)),
					(D = r(e, 'P', {}))
				var j = z(D)
				O(W.$$.fragment, j),
					(de = M(
						j,
						' to ask any question about sending an e-mail or to share your draft for feedback!'
					)),
					j.forEach(o),
					this.h()
			},
			h() {
				B($, 'id', 'finding-the-right-person'),
					B(v, 'id', 'preparing-your-message'),
					B(w, 'id', 'structure-of-the-message'),
					B(y, 'id', 'tips'),
					B(x, 'id', 'get-signatures'),
					B(b, 'id', 'example-letter'),
					B(k, 'id', 'need-more-help--feedback')
			},
			m(e, t) {
				s(e, n, t),
					F(n, i),
					F(i, u),
					X(d, i, null),
					s(e, l, t),
					s(e, h, t),
					s(e, Z, t),
					s(e, g, t),
					F(g, pe),
					X(_, g, null),
					F(g, ce),
					s(e, K, t),
					s(e, $, t),
					s(e, Q, t),
					s(e, L, t),
					s(e, V, t),
					s(e, v, t),
					s(e, ee, t),
					s(e, T, t),
					s(e, te, t),
					s(e, w, t),
					s(e, ne, t),
					s(e, A, t),
					s(e, oe, t),
					s(e, y, t),
					s(e, ie, t),
					s(e, E, t),
					s(e, se, t),
					s(e, x, t),
					s(e, le, t),
					s(e, U, t),
					s(e, ae, t),
					s(e, b, t),
					s(e, re, t),
					s(e, P, t),
					X(C, P, null),
					s(e, ue, t),
					s(e, k, t),
					s(e, fe, t),
					s(e, D, t),
					X(W, D, null),
					F(D, de),
					(me = !0)
			},
			p(e, t) {
				const S = {}
				t & 2 && (S.$$scope = { dirty: t, ctx: e }), d.$set(S)
				const I = {}
				t & 2 && (I.$$scope = { dirty: t, ctx: e }), _.$set(I)
				const G = {}
				t & 2 && (G.$$scope = { dirty: t, ctx: e }), C.$set(G)
				const j = {}
				t & 2 && (j.$$scope = { dirty: t, ctx: e }), W.$set(j)
			},
			i(e) {
				me ||
					(N(d.$$.fragment, e),
					N(_.$$.fragment, e),
					N(C.$$.fragment, e),
					N(W.$$.fragment, e),
					(me = !0))
			},
			o(e) {
				R(d.$$.fragment, e),
					R(_.$$.fragment, e),
					R(C.$$.fragment, e),
					R(W.$$.fragment, e),
					(me = !1)
			},
			d(e) {
				e &&
					(o(n),
					o(l),
					o(h),
					o(Z),
					o(g),
					o(K),
					o($),
					o(Q),
					o(L),
					o(V),
					o(v),
					o(ee),
					o(T),
					o(te),
					o(w),
					o(ne),
					o(A),
					o(oe),
					o(y),
					o(ie),
					o(E),
					o(se),
					o(x),
					o(le),
					o(U),
					o(ae),
					o(b),
					o(re),
					o(P),
					o(ue),
					o(k),
					o(fe),
					o(D)),
					Y(d),
					Y(_),
					Y(C),
					Y(W)
			}
		}
	)
}
function ze(p) {
	let n, i
	const u = [p[0], Ae]
	let d = { $$slots: { default: [Ge] }, $$scope: { ctx: p } }
	for (let l = 0; l < u.length; l += 1) d = ge(d, u[l])
	return (
		(n = new Be({ props: d })),
		{
			c() {
				J(n.$$.fragment)
			},
			l(l) {
				O(n.$$.fragment, l)
			},
			m(l, h) {
				X(n, l, h), (i = !0)
			},
			p(l, [h]) {
				const q = h & 1 ? Ie(u, [h & 1 && Te(l[0]), h & 0 && Te(Ae)]) : {}
				h & 2 && (q.$$scope = { dirty: h, ctx: l }), n.$set(q)
			},
			i(l) {
				i || (N(n.$$.fragment, l), (i = !0))
			},
			o(l) {
				R(n.$$.fragment, l), (i = !1)
			},
			d(l) {
				Y(n, l)
			}
		}
	)
}
const Ae = {
	title: 'How to write a letter or email to someone in power',
	description: 'A guide on how to write a lobby letter'
}
function Fe(p, n, i) {
	return (
		(p.$$set = (u) => {
			i(0, (n = ge(ge({}, n), Le(u))))
		}),
		(n = Le(n)),
		[n]
	)
}
class Ye extends Ue {
	constructor(n) {
		super(), De(this, n, Fe, ze, Ee, {})
	}
}
export { Ye as default, Ae as metadata }
