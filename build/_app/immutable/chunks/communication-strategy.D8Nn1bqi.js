import {
	s as nt,
	a as Oe,
	e as Ze,
	c as l,
	b as g,
	t as f,
	f as c,
	g as $,
	d as w,
	h as q,
	i as d,
	j as s,
	k as Ge,
	l as m,
	m as a
} from './scheduler.D9JQr37X.js'
import {
	S as ot,
	i as at,
	c as D,
	b as R,
	m as U,
	a as P,
	t as F,
	d as B
} from './index.D-WnFt3a.js'
import { g as st, a as et } from './a.svelte_svelte_type_style_lang.DfavE63L.js'
import { M as rt } from './mdsvex.Bi9EMyuJ.js'
import { A as K } from './a.YKMG9Usu.js'
function it(u) {
	let e
	return {
		c() {
			e = f('expert polls and surveys')
		},
		l(n) {
			e = d(n, 'expert polls and surveys')
		},
		m(n, i) {
			m(n, e, i)
		},
		d(n) {
			n && s(e)
		}
	}
}
function lt(u) {
	let e
	return {
		c() {
			e = f('top three')
		},
		l(n) {
			e = d(n, 'top three')
		},
		m(n, i) {
			m(n, e, i)
		},
		d(n) {
			n && s(e)
		}
	}
}
function ct(u) {
	let e
	return {
		c() {
			e = f('not inevitable')
		},
		l(n) {
			e = d(n, 'not inevitable')
		},
		m(n, i) {
			m(n, e, i)
		},
		d(n) {
			n && s(e)
		}
	}
}
function ut(u) {
	let e
	return {
		c() {
			e = f('digital brains')
		},
		l(n) {
			e = d(n, 'digital brains')
		},
		m(n, i) {
			m(n, e, i)
		},
		d(n) {
			n && s(e)
		}
	}
}
function ht(u) {
	let e
	return {
		c() {
			e = f('capabilities')
		},
		l(n) {
			e = d(n, 'capabilities')
		},
		m(n, i) {
			m(n, e, i)
		},
		d(n) {
			n && s(e)
		}
	}
}
function ft(u) {
	let e
	return {
		c() {
			e = f('feasible')
		},
		l(n) {
			e = d(n, 'feasible')
		},
		m(n, i) {
			m(n, e, i)
		},
		d(n) {
			n && s(e)
		}
	}
}
function dt(u) {
	let e
	return {
		c() {
			e = f('values')
		},
		l(n) {
			e = d(n, 'values')
		},
		m(n, i) {
			m(n, e, i)
		},
		d(n) {
			n && s(e)
		}
	}
}
function mt(u) {
	let e,
		n = 'How we communicate',
		i,
		h,
		r,
		v,
		ie = 'Defer to experts',
		me,
		y,
		pe,
		I,
		ge,
		$e,
		Q,
		je =
			'<strong>Use simple language</strong>. You can show you understand the technology and you’ve done your homework, but excessive jargon can make people lose interest. We want to reach as many people as possible, so don’t over complicate language. Many of the people we want to reach are non-native English speakers, so consider doing translations.',
		we,
		V,
		qe =
			'<strong>Show our emotions</strong>. Seeing emotions gives others the permission to feel emotions. We are worried, we are angry, we are eager to act. Showing how you feel can be scary, but in our case we need to. Our message can only be received if it matches with how we send it.',
		_e,
		X,
		De =
			'<strong>Emphasize uncertainty</strong>. Don’t say AI <em>will</em> take over, or that we <em>will</em> reach AGI in x years. Nobody can predict the future. There is a significant <em>chance</em> that AI will go wrong soon, and that should be enough to act on. Don’t let uncertainty be the reason to not act. Refer to the <em>Precautionary Principle</em>, and make the point that we should err on the side of caution.',
		ve,
		Z,
		Re =
			'<strong>Make individuals feel responsible</strong>. Nobody wants to feel like they have a strong responsibility to make things go well. Our brains steer us away from this, because we all have a deep desire to believe that someone is in charge, protecting us. But there are no adults in the room right now. You need to be the one to do this. Choose to take responsibility.',
		be,
		x,
		ee,
		Ue = 'Inspire hope',
		ye,
		C,
		Ie,
		le,
		k,
		Pe = 'No-gos',
		ce,
		Y,
		Fe =
			'<li><strong>No AI-generated content</strong>. Using AI models is fine for doing research, ideation and iterating on ideas, but don’t publish AI-generated content as if it’s our own - especially no AI generated images or videos. Even if we are not anti-AI, we can easily be labeled as hypocrites if we clearly use AI-generated content.</li> <li><strong>No partisan politics</strong>. We do not push for any political party or ideology. We don’t have opinions on things outside of AI.</li> <li><strong>No tactical self-censorship</strong>. Some AI Governance organizations choose not to say how worried they are, or are choosing not to push for the policies that they think are necessary <em>because they worry about losing credibility</em>. We cannot copy this same strategy, because if we all do, no-one is left to speak the truth.</li> <li><strong>No rumors</strong>. We don’t promote vague or unverified information. We cannot afford to lose credibility by spreading false information.</li>',
		ue,
		A,
		Be = 'Narratives that we push',
		he,
		p,
		L,
		te,
		Ye = 'AI is not just a tool',
		xe,
		T,
		Ce,
		ke,
		M,
		ne,
		Je = 'AI does not need to be sentient to be dangerous',
		Ae,
		H,
		Le,
		Te,
		oe,
		Ke =
			'<strong>Global race to the bottom</strong>. This is not a race to be won. It’s not about US vs China, it’s about humanity vs AI. We cannot expect to wield superintelligent AI as a weapon - we don’t know if it can be controlled at all.',
		Me,
		ae,
		Qe =
			'<strong>Existing AI harms will get worse</strong>. Deepfakes, job loss, surveillance, misinformation, polarization… Existing AI is already causing harm and we need to acknowledge that. The harms will only get worse with more powerful AI, and we need to Pause AI to prevent that from happening.',
		He,
		se,
		Ve =
			'<strong>Superhuman AI is not inevitable</strong>. It requires hordes of engineers with million-dollar paychecks. It requires highly specialized hardware, created by a handful of monopolies. It requires all of us to sit back and do nothing.',
		Se,
		S,
		re,
		Xe = 'International regulation is possible',
		We,
		W,
		ze,
		fe,
		z,
		Ee,
		E,
		Ne,
		de
	return (
		(y = new K({
			props: { href: '/polls-and-surveys', $$slots: { default: [it] }, $$scope: { ctx: u } }
		})),
		(I = new K({
			props: {
				href: 'https://twitter.com/PauseAI/status/1734641804245455017',
				rel: 'nofollow',
				$$slots: { default: [lt] },
				$$scope: { ctx: u }
			}
		})),
		(C = new K({
			props: { href: '/feasibility', $$slots: { default: [ct] }, $$scope: { ctx: u } }
		})),
		(T = new K({
			props: { href: '/digital-brains', $$slots: { default: [ut] }, $$scope: { ctx: u } }
		})),
		(H = new K({
			props: { href: '/dangerous-capabilities', $$slots: { default: [ht] }, $$scope: { ctx: u } }
		})),
		(W = new K({
			props: { href: '/feasibility', $$slots: { default: [ft] }, $$scope: { ctx: u } }
		})),
		(E = new K({
			props: {
				href: 'https://pauseai.info/values',
				rel: 'nofollow',
				$$slots: { default: [dt] },
				$$scope: { ctx: u }
			}
		})),
		{
			c() {
				;(e = l('h2')),
					(e.textContent = n),
					(i = g()),
					(h = l('ul')),
					(r = l('li')),
					(v = l('strong')),
					(v.textContent = ie),
					(me = f(
						'. We are warning people about a scenario that is so extreme and scary, that a gut-level response is to dismiss it as crazy talk. Show the '
					)),
					D(y.$$.fragment),
					(pe = f('. The ')),
					D(I.$$.fragment),
					(ge = f(
						' most cited AI scientists are all warning about x-risk. Deferring to them is a good way to make our case.'
					)),
					($e = g()),
					(Q = l('li')),
					(Q.innerHTML = je),
					(we = g()),
					(V = l('li')),
					(V.innerHTML = qe),
					(_e = g()),
					(X = l('li')),
					(X.innerHTML = De),
					(ve = g()),
					(Z = l('li')),
					(Z.innerHTML = Re),
					(be = g()),
					(x = l('li')),
					(ee = l('strong')),
					(ee.textContent = Ue),
					(ye = f(
						'. When hearing about the dangers of AI and the current race to the bottom, many of us will feel dread, and that makes us not act. Fatalism is comfortable, because a lack of hope means that we don’t have to work towards a good outcome. This is why we need to emphasize that our case is not lost. AGI is '
					)),
					D(C.$$.fragment),
					(Ie = f(
						', technology has been successfully banned internationally before, and our proposal has broad public support.'
					)),
					(le = g()),
					(k = l('h2')),
					(k.textContent = Pe),
					(ce = g()),
					(Y = l('ul')),
					(Y.innerHTML = Fe),
					(ue = g()),
					(A = l('h2')),
					(A.textContent = Be),
					(he = g()),
					(p = l('ul')),
					(L = l('li')),
					(te = l('strong')),
					(te.textContent = Ye),
					(xe = f('. AI models are not programmed, they are ')),
					D(T.$$.fragment),
					(Ce = f(
						'. We don’t understand how they work, we can’t predict what they can do, we can’t properly control their behavior.'
					)),
					(ke = g()),
					(M = l('li')),
					(ne = l('strong')),
					(ne.textContent = Je),
					(Ae = f(
						'. Being able to experience the world, or feel emotions is not a requirement for AI to take dangerous actions. The only thing that matters is '
					)),
					D(H.$$.fragment),
					(Le = f('.')),
					(Te = g()),
					(oe = l('li')),
					(oe.innerHTML = Ke),
					(Me = g()),
					(ae = l('li')),
					(ae.innerHTML = Qe),
					(He = g()),
					(se = l('li')),
					(se.innerHTML = Ve),
					(Se = g()),
					(S = l('li')),
					(re = l('strong')),
					(re.textContent = Xe),
					(We = f(
						'. We’ve collectively protected the Ozone Layer by banning CFC’s and blinding laser weapons globally. The centralized AI chip supply chain makes enforcing compute governance very '
					)),
					D(W.$$.fragment),
					(ze = f('.')),
					(fe = g()),
					(z = l('p')),
					(Ee = f('Much of our strategy is derived from our ')),
					D(E.$$.fragment),
					(Ne = f('.')),
					this.h()
			},
			l(t) {
				;(e = c(t, 'H2', { id: !0, 'data-svelte-h': !0 })),
					$(e) !== 'svelte-7iny6w' && (e.textContent = n),
					(i = w(t)),
					(h = c(t, 'UL', {}))
				var o = q(h)
				r = c(o, 'LI', {})
				var b = q(r)
				;(v = c(b, 'STRONG', { 'data-svelte-h': !0 })),
					$(v) !== 'svelte-whs00s' && (v.textContent = ie),
					(me = d(
						b,
						'. We are warning people about a scenario that is so extreme and scary, that a gut-level response is to dismiss it as crazy talk. Show the '
					)),
					R(y.$$.fragment, b),
					(pe = d(b, '. The ')),
					R(I.$$.fragment, b),
					(ge = d(
						b,
						' most cited AI scientists are all warning about x-risk. Deferring to them is a good way to make our case.'
					)),
					b.forEach(s),
					($e = w(o)),
					(Q = c(o, 'LI', { 'data-svelte-h': !0 })),
					$(Q) !== 'svelte-14h6r7p' && (Q.innerHTML = je),
					(we = w(o)),
					(V = c(o, 'LI', { 'data-svelte-h': !0 })),
					$(V) !== 'svelte-174nz3m' && (V.innerHTML = qe),
					(_e = w(o)),
					(X = c(o, 'LI', { 'data-svelte-h': !0 })),
					$(X) !== 'svelte-ttiss2' && (X.innerHTML = De),
					(ve = w(o)),
					(Z = c(o, 'LI', { 'data-svelte-h': !0 })),
					$(Z) !== 'svelte-1mh6uhe' && (Z.innerHTML = Re),
					(be = w(o)),
					(x = c(o, 'LI', {}))
				var N = q(x)
				;(ee = c(N, 'STRONG', { 'data-svelte-h': !0 })),
					$(ee) !== 'svelte-1jd2brs' && (ee.textContent = Ue),
					(ye = d(
						N,
						'. When hearing about the dangers of AI and the current race to the bottom, many of us will feel dread, and that makes us not act. Fatalism is comfortable, because a lack of hope means that we don’t have to work towards a good outcome. This is why we need to emphasize that our case is not lost. AGI is '
					)),
					R(C.$$.fragment, N),
					(Ie = d(
						N,
						', technology has been successfully banned internationally before, and our proposal has broad public support.'
					)),
					N.forEach(s),
					o.forEach(s),
					(le = w(t)),
					(k = c(t, 'H2', { id: !0, 'data-svelte-h': !0 })),
					$(k) !== 'svelte-orougi' && (k.textContent = Pe),
					(ce = w(t)),
					(Y = c(t, 'UL', { 'data-svelte-h': !0 })),
					$(Y) !== 'svelte-14vbls0' && (Y.innerHTML = Fe),
					(ue = w(t)),
					(A = c(t, 'H2', { id: !0, 'data-svelte-h': !0 })),
					$(A) !== 'svelte-7puwj1' && (A.textContent = Be),
					(he = w(t)),
					(p = c(t, 'UL', {}))
				var _ = q(p)
				L = c(_, 'LI', {})
				var G = q(L)
				;(te = c(G, 'STRONG', { 'data-svelte-h': !0 })),
					$(te) !== 'svelte-matufw' && (te.textContent = Ye),
					(xe = d(G, '. AI models are not programmed, they are ')),
					R(T.$$.fragment, G),
					(Ce = d(
						G,
						'. We don’t understand how they work, we can’t predict what they can do, we can’t properly control their behavior.'
					)),
					G.forEach(s),
					(ke = w(_)),
					(M = c(_, 'LI', {}))
				var O = q(M)
				;(ne = c(O, 'STRONG', { 'data-svelte-h': !0 })),
					$(ne) !== 'svelte-ccv1r2' && (ne.textContent = Je),
					(Ae = d(
						O,
						'. Being able to experience the world, or feel emotions is not a requirement for AI to take dangerous actions. The only thing that matters is '
					)),
					R(H.$$.fragment, O),
					(Le = d(O, '.')),
					O.forEach(s),
					(Te = w(_)),
					(oe = c(_, 'LI', { 'data-svelte-h': !0 })),
					$(oe) !== 'svelte-16hobr8' && (oe.innerHTML = Ke),
					(Me = w(_)),
					(ae = c(_, 'LI', { 'data-svelte-h': !0 })),
					$(ae) !== 'svelte-x6zdbk' && (ae.innerHTML = Qe),
					(He = w(_)),
					(se = c(_, 'LI', { 'data-svelte-h': !0 })),
					$(se) !== 'svelte-1fsepgj' && (se.innerHTML = Ve),
					(Se = w(_)),
					(S = c(_, 'LI', {}))
				var j = q(S)
				;(re = c(j, 'STRONG', { 'data-svelte-h': !0 })),
					$(re) !== 'svelte-h86yhz' && (re.textContent = Xe),
					(We = d(
						j,
						'. We’ve collectively protected the Ozone Layer by banning CFC’s and blinding laser weapons globally. The centralized AI chip supply chain makes enforcing compute governance very '
					)),
					R(W.$$.fragment, j),
					(ze = d(j, '.')),
					j.forEach(s),
					_.forEach(s),
					(fe = w(t)),
					(z = c(t, 'P', {}))
				var J = q(z)
				;(Ee = d(J, 'Much of our strategy is derived from our ')),
					R(E.$$.fragment, J),
					(Ne = d(J, '.')),
					J.forEach(s),
					this.h()
			},
			h() {
				Ge(e, 'id', 'how-we-communicate'),
					Ge(k, 'id', 'no-gos'),
					Ge(A, 'id', 'narratives-that-we-push')
			},
			m(t, o) {
				m(t, e, o),
					m(t, i, o),
					m(t, h, o),
					a(h, r),
					a(r, v),
					a(r, me),
					U(y, r, null),
					a(r, pe),
					U(I, r, null),
					a(r, ge),
					a(h, $e),
					a(h, Q),
					a(h, we),
					a(h, V),
					a(h, _e),
					a(h, X),
					a(h, ve),
					a(h, Z),
					a(h, be),
					a(h, x),
					a(x, ee),
					a(x, ye),
					U(C, x, null),
					a(x, Ie),
					m(t, le, o),
					m(t, k, o),
					m(t, ce, o),
					m(t, Y, o),
					m(t, ue, o),
					m(t, A, o),
					m(t, he, o),
					m(t, p, o),
					a(p, L),
					a(L, te),
					a(L, xe),
					U(T, L, null),
					a(L, Ce),
					a(p, ke),
					a(p, M),
					a(M, ne),
					a(M, Ae),
					U(H, M, null),
					a(M, Le),
					a(p, Te),
					a(p, oe),
					a(p, Me),
					a(p, ae),
					a(p, He),
					a(p, se),
					a(p, Se),
					a(p, S),
					a(S, re),
					a(S, We),
					U(W, S, null),
					a(S, ze),
					m(t, fe, o),
					m(t, z, o),
					a(z, Ee),
					U(E, z, null),
					a(z, Ne),
					(de = !0)
			},
			p(t, o) {
				const b = {}
				o & 2 && (b.$$scope = { dirty: o, ctx: t }), y.$set(b)
				const N = {}
				o & 2 && (N.$$scope = { dirty: o, ctx: t }), I.$set(N)
				const _ = {}
				o & 2 && (_.$$scope = { dirty: o, ctx: t }), C.$set(_)
				const G = {}
				o & 2 && (G.$$scope = { dirty: o, ctx: t }), T.$set(G)
				const O = {}
				o & 2 && (O.$$scope = { dirty: o, ctx: t }), H.$set(O)
				const j = {}
				o & 2 && (j.$$scope = { dirty: o, ctx: t }), W.$set(j)
				const J = {}
				o & 2 && (J.$$scope = { dirty: o, ctx: t }), E.$set(J)
			},
			i(t) {
				de ||
					(P(y.$$.fragment, t),
					P(I.$$.fragment, t),
					P(C.$$.fragment, t),
					P(T.$$.fragment, t),
					P(H.$$.fragment, t),
					P(W.$$.fragment, t),
					P(E.$$.fragment, t),
					(de = !0))
			},
			o(t) {
				F(y.$$.fragment, t),
					F(I.$$.fragment, t),
					F(C.$$.fragment, t),
					F(T.$$.fragment, t),
					F(H.$$.fragment, t),
					F(W.$$.fragment, t),
					F(E.$$.fragment, t),
					(de = !1)
			},
			d(t) {
				t && (s(e), s(i), s(h), s(le), s(k), s(ce), s(Y), s(ue), s(A), s(he), s(p), s(fe), s(z)),
					B(y),
					B(I),
					B(C),
					B(T),
					B(H),
					B(W),
					B(E)
			}
		}
	)
}
function pt(u) {
	let e, n
	const i = [u[0], tt]
	let h = { $$slots: { default: [mt] }, $$scope: { ctx: u } }
	for (let r = 0; r < i.length; r += 1) h = Oe(h, i[r])
	return (
		(e = new rt({ props: h })),
		{
			c() {
				D(e.$$.fragment)
			},
			l(r) {
				R(e.$$.fragment, r)
			},
			m(r, v) {
				U(e, r, v), (n = !0)
			},
			p(r, [v]) {
				const ie = v & 1 ? st(i, [v & 1 && et(r[0]), v & 0 && et(tt)]) : {}
				v & 2 && (ie.$$scope = { dirty: v, ctx: r }), e.$set(ie)
			},
			i(r) {
				n || (P(e.$$.fragment, r), (n = !0))
			},
			o(r) {
				F(e.$$.fragment, r), (n = !1)
			},
			d(r) {
				B(e, r)
			}
		}
	)
}
const tt = {
	title: 'Communication Strategy',
	description: 'How we communicate about pausing AI development.'
}
function gt(u, e, n) {
	return (
		(u.$$set = (i) => {
			n(0, (e = Oe(Oe({}, e), Ze(i))))
		}),
		(e = Ze(e)),
		[e]
	)
}
class yt extends ot {
	constructor(e) {
		super(), at(this, e, gt, pt, nt, {})
	}
}
export { yt as default, tt as metadata }
