import {
	s as je,
	a as de,
	e as be,
	c as r,
	b as p,
	t as b,
	f as i,
	g as d,
	d as h,
	h as Y,
	i as H,
	j as c,
	k as Pe,
	l as v,
	m as o
} from './scheduler.D9JQr37X.js'
import {
	S as Se,
	i as We,
	c as R,
	b as B,
	m as J,
	a as K,
	t as Q,
	d as X
} from './index.D-WnFt3a.js'
import { g as Ae, a as He } from './a.svelte_svelte_type_style_lang.DfavE63L.js'
import { M as Ee } from './mdsvex.Bi9EMyuJ.js'
import { A as pe } from './a.YKMG9Usu.js'
function Ge(_) {
	let e
	return {
		c() {
			e = b('proposal')
		},
		l(a) {
			e = H(a, 'proposal')
		},
		m(a, u) {
			v(a, e, u)
		},
		d(a) {
			a && c(e)
		}
	}
}
function ze(_) {
	let e
	return {
		c() {
			e = b('MicroGrants Template')
		},
		l(a) {
			e = H(a, 'MicroGrants Template')
		},
		m(a, u) {
			v(a, e, u)
		},
		d(a) {
			a && c(e)
		}
	}
}
function Oe(_) {
	let e
	return {
		c() {
			e = b('joep@pauseai.info')
		},
		l(a) {
			e = H(a, 'joep@pauseai.info')
		},
		m(a, u) {
			v(a, e, u)
		},
		d(a) {
			a && c(e)
		}
	}
}
function Ue(_) {
	let e,
		a = `We have a huge list of projects that our community is working on.
There’s so much to do.
And sometimes we need funds to be more effective.
But getting funding can be a hassle - especially if you’ve never applied to a grant.`,
		u,
		$,
		l = `This is where PauseAI MicroGrants come in handy!
Small amounts of money (typically under 2000 EUR) for working on a project.
We’re pretty open about what types of projects could apply.
Here’s a list of examples:`,
		g,
		s,
		k,
		he =
			'<strong>Organize an event</strong>, like an email lobby session (fee for organising, location rental, food &amp; drinks)',
		V,
		j,
		_e = '<strong>Make videos</strong> about why we need to Pause AI',
		Z,
		P,
		ge =
			'<strong>Help out with the website</strong>, e.g. writing articles, making technical improvements',
		ee,
		S,
		ve = '<strong>Do research</strong>, e.g. for the #“AI Safety Scorecard”.',
		te,
		T,
		W,
		$e = 'Work on a policy draft',
		ne,
		C,
		oe,
		A,
		xe = '<strong>Perform market research</strong>, e.g. a survey or message-testing study',
		ae,
		E,
		we = '<strong>Write for media</strong>, e.g. write an opinion piece for a national newspaper',
		D,
		y,
		Ce = 'The process',
		F,
		f,
		G,
		ye =
			'Describe your project in the <code>#💪projects</code> channel on our Discord server. Tell about the idea, what you want to do, where you want help and what amount of money you need. Mention <code>@microgrants</code> to notify the microgrants team!',
		se,
		x,
		le,
		L,
		re,
		M,
		ie,
		ue,
		z,
		Le =
			'We reach out to you. Either a) we give an OK right away, b) we want to see some changes/questions answered or c) give you a no.',
		fe,
		O,
		Me = 'We’ll send you a Memorandum of Understanding (MoU) that you need to sign.',
		ce,
		U,
		Te = 'Get to work!',
		me,
		q,
		Ie =
			'Tell us when you’re done, and we’ll send you the grant. If you need the money upfront, we can discuss that option, but it should not be the default.',
		N
	return (
		(C = new pe({ props: { href: '/proposal', $$slots: { default: [Ge] }, $$scope: { ctx: _ } } })),
		(L = new pe({
			props: {
				href: 'https://docs.google.com/document/d/1oPXezImarCY7MCYaT-lJb-uLNbbQ76O1FYNr-WTS6hI/edit?usp=sharing',
				rel: 'nofollow',
				$$slots: { default: [ze] },
				$$scope: { ctx: _ }
			}
		})),
		(M = new pe({
			props: { href: 'mailto:joep@pauseai.info', $$slots: { default: [Oe] }, $$scope: { ctx: _ } }
		})),
		{
			c() {
				;(e = r('p')),
					(e.textContent = a),
					(u = p()),
					($ = r('p')),
					($.textContent = l),
					(g = p()),
					(s = r('ul')),
					(k = r('li')),
					(k.innerHTML = he),
					(V = p()),
					(j = r('li')),
					(j.innerHTML = _e),
					(Z = p()),
					(P = r('li')),
					(P.innerHTML = ge),
					(ee = p()),
					(S = r('li')),
					(S.innerHTML = ve),
					(te = p()),
					(T = r('li')),
					(W = r('strong')),
					(W.textContent = $e),
					(ne = b(', e.g. formalise our ')),
					R(C.$$.fragment),
					(oe = p()),
					(A = r('li')),
					(A.innerHTML = xe),
					(ae = p()),
					(E = r('li')),
					(E.innerHTML = we),
					(D = p()),
					(y = r('h2')),
					(y.textContent = Ce),
					(F = p()),
					(f = r('ul')),
					(G = r('li')),
					(G.innerHTML = ye),
					(se = p()),
					(x = r('li')),
					(le = b('Fill in the ')),
					R(L.$$.fragment),
					(re = b(' and send it to ')),
					R(M.$$.fragment),
					(ie = b('.')),
					(ue = p()),
					(z = r('li')),
					(z.textContent = Le),
					(fe = p()),
					(O = r('li')),
					(O.textContent = Me),
					(ce = p()),
					(U = r('li')),
					(U.textContent = Te),
					(me = p()),
					(q = r('li')),
					(q.textContent = Ie),
					this.h()
			},
			l(t) {
				;(e = i(t, 'P', { 'data-svelte-h': !0 })),
					d(e) !== 'svelte-xcxsgw' && (e.textContent = a),
					(u = h(t)),
					($ = i(t, 'P', { 'data-svelte-h': !0 })),
					d($) !== 'svelte-1tklcw5' && ($.textContent = l),
					(g = h(t)),
					(s = i(t, 'UL', {}))
				var n = Y(s)
				;(k = i(n, 'LI', { 'data-svelte-h': !0 })),
					d(k) !== 'svelte-1wozixo' && (k.innerHTML = he),
					(V = h(n)),
					(j = i(n, 'LI', { 'data-svelte-h': !0 })),
					d(j) !== 'svelte-sq9gel' && (j.innerHTML = _e),
					(Z = h(n)),
					(P = i(n, 'LI', { 'data-svelte-h': !0 })),
					d(P) !== 'svelte-ipsu0q' && (P.innerHTML = ge),
					(ee = h(n)),
					(S = i(n, 'LI', { 'data-svelte-h': !0 })),
					d(S) !== 'svelte-1mfhs2p' && (S.innerHTML = ve),
					(te = h(n)),
					(T = i(n, 'LI', {}))
				var I = Y(T)
				;(W = i(I, 'STRONG', { 'data-svelte-h': !0 })),
					d(W) !== 'svelte-iapv3m' && (W.textContent = $e),
					(ne = H(I, ', e.g. formalise our ')),
					B(C.$$.fragment, I),
					I.forEach(c),
					(oe = h(n)),
					(A = i(n, 'LI', { 'data-svelte-h': !0 })),
					d(A) !== 'svelte-7ktvye' && (A.innerHTML = xe),
					(ae = h(n)),
					(E = i(n, 'LI', { 'data-svelte-h': !0 })),
					d(E) !== 'svelte-13blr2a' && (E.innerHTML = we),
					n.forEach(c),
					(D = h(t)),
					(y = i(t, 'H2', { id: !0, 'data-svelte-h': !0 })),
					d(y) !== 'svelte-1ou2emd' && (y.textContent = Ce),
					(F = h(t)),
					(f = i(t, 'UL', {}))
				var m = Y(f)
				;(G = i(m, 'LI', { 'data-svelte-h': !0 })),
					d(G) !== 'svelte-miuz16' && (G.innerHTML = ye),
					(se = h(m)),
					(x = i(m, 'LI', {}))
				var w = Y(x)
				;(le = H(w, 'Fill in the ')),
					B(L.$$.fragment, w),
					(re = H(w, ' and send it to ')),
					B(M.$$.fragment, w),
					(ie = H(w, '.')),
					w.forEach(c),
					(ue = h(m)),
					(z = i(m, 'LI', { 'data-svelte-h': !0 })),
					d(z) !== 'svelte-wwg1n2' && (z.textContent = Le),
					(fe = h(m)),
					(O = i(m, 'LI', { 'data-svelte-h': !0 })),
					d(O) !== 'svelte-pfiepr' && (O.textContent = Me),
					(ce = h(m)),
					(U = i(m, 'LI', { 'data-svelte-h': !0 })),
					d(U) !== 'svelte-1ihz0up' && (U.textContent = Te),
					(me = h(m)),
					(q = i(m, 'LI', { 'data-svelte-h': !0 })),
					d(q) !== 'svelte-1y2iyss' && (q.textContent = Ie),
					m.forEach(c),
					this.h()
			},
			h() {
				Pe(y, 'id', 'the-process')
			},
			m(t, n) {
				v(t, e, n),
					v(t, u, n),
					v(t, $, n),
					v(t, g, n),
					v(t, s, n),
					o(s, k),
					o(s, V),
					o(s, j),
					o(s, Z),
					o(s, P),
					o(s, ee),
					o(s, S),
					o(s, te),
					o(s, T),
					o(T, W),
					o(T, ne),
					J(C, T, null),
					o(s, oe),
					o(s, A),
					o(s, ae),
					o(s, E),
					v(t, D, n),
					v(t, y, n),
					v(t, F, n),
					v(t, f, n),
					o(f, G),
					o(f, se),
					o(f, x),
					o(x, le),
					J(L, x, null),
					o(x, re),
					J(M, x, null),
					o(x, ie),
					o(f, ue),
					o(f, z),
					o(f, fe),
					o(f, O),
					o(f, ce),
					o(f, U),
					o(f, me),
					o(f, q),
					(N = !0)
			},
			p(t, n) {
				const I = {}
				n & 2 && (I.$$scope = { dirty: n, ctx: t }), C.$set(I)
				const m = {}
				n & 2 && (m.$$scope = { dirty: n, ctx: t }), L.$set(m)
				const w = {}
				n & 2 && (w.$$scope = { dirty: n, ctx: t }), M.$set(w)
			},
			i(t) {
				N || (K(C.$$.fragment, t), K(L.$$.fragment, t), K(M.$$.fragment, t), (N = !0))
			},
			o(t) {
				Q(C.$$.fragment, t), Q(L.$$.fragment, t), Q(M.$$.fragment, t), (N = !1)
			},
			d(t) {
				t && (c(e), c(u), c($), c(g), c(s), c(D), c(y), c(F), c(f)), X(C), X(L), X(M)
			}
		}
	)
}
function qe(_) {
	let e, a
	const u = [_[0], ke]
	let $ = { $$slots: { default: [Ue] }, $$scope: { ctx: _ } }
	for (let l = 0; l < u.length; l += 1) $ = de($, u[l])
	return (
		(e = new Ee({ props: $ })),
		{
			c() {
				R(e.$$.fragment)
			},
			l(l) {
				B(e.$$.fragment, l)
			},
			m(l, g) {
				J(e, l, g), (a = !0)
			},
			p(l, [g]) {
				const s = g & 1 ? Ae(u, [g & 1 && He(l[0]), g & 0 && He(ke)]) : {}
				g & 2 && (s.$$scope = { dirty: g, ctx: l }), e.$set(s)
			},
			i(l) {
				a || (K(e.$$.fragment, l), (a = !0))
			},
			o(l) {
				Q(e.$$.fragment, l), (a = !1)
			},
			d(l) {
				X(e, l)
			}
		}
	)
}
const ke = {
	title: 'PauseAI MicroGrants',
	description: 'Our community fund to support projects that align with our mission.'
}
function De(_, e, a) {
	return (
		(_.$$set = (u) => {
			a(0, (e = de(de({}, e), be(u))))
		}),
		(e = be(e)),
		[e]
	)
}
class Je extends Se {
	constructor(e) {
		super(), We(this, e, De, qe, je, {})
	}
}
export { Je as default, ke as metadata }
