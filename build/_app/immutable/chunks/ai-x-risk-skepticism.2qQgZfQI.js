import {
	s as Le,
	a as me,
	e as Ce,
	c as o,
	t as C,
	b as c,
	f as r,
	h as ue,
	i as T,
	j as n,
	d as m,
	g as p,
	k as z,
	l,
	m as R
} from './scheduler.D9JQr37X.js'
import {
	S as Me,
	i as Se,
	c as ee,
	b as te,
	m as ie,
	a as ne,
	t as le,
	d as se
} from './index.D-WnFt3a.js'
import { g as je, a as Te } from './a.svelte_svelte_type_style_lang.DfavE63L.js'
import { M as qe } from './mdsvex.Bi9EMyuJ.js'
import { A as ce } from './a.YKMG9Usu.js'
function Ue(d) {
	let i
	return {
		c() {
			i = C('AI Risk Skepticism')
		},
		l(s) {
			i = T(s, 'AI Risk Skepticism')
		},
		m(s, u) {
			l(s, i, u)
		},
		d(s) {
			s && n(i)
		}
	}
}
function Ee(d) {
	let i
	return {
		c() {
			i = C('AISafety.info: Objections and responses')
		},
		l(s) {
			i = T(s, 'AISafety.info: Objections and responses')
		},
		m(s, u) {
			l(s, i, u)
		},
		d(s) {
			s && n(i)
		}
	}
}
function ze(d) {
	let i
	return {
		c() {
			i = C('our introduction to x-risks')
		},
		l(s) {
			i = T(s, 'our introduction to x-risks')
		},
		m(s, u) {
			l(s, i, u)
		},
		d(s) {
			s && n(i)
		}
	}
}
function Re(d) {
	let i,
		s,
		u,
		h,
		a,
		v,
		f,
		ae,
		g,
		oe,
		y,
		re,
		O,
		x,
		pe = 'We’ll have a long time to prepare',
		P,
		H,
		fe =
			'<li>Skeptics claim AI progress is not as fast as some predict, and AGI is still far away. They point to past failed predictions and limitations of current AI systems.</li> <li>However, the pace of AI progress has actually been quite rapid, with capabilities growing exponentially in many subfields. While exact predictions are hard, continued progress makes powerful AI systems inevitable at some point. Even if distant, AI safety research needs ample time.</li>',
		W,
		$,
		de = 'AI cannot have human-like capabilities',
		B,
		L,
		he =
			'<li>Skeptics argue AI lacks qualities associated with human intelligence like creativity, general reasoning, emotions, consciousness. They claim computers can only optimize narrow tasks.</li> <li>But AI systems are already displaying some human-like capabilities like creativity and general game playing. There is no fundamental reason AI could not continue advancing across all dimensions of intelligence. AI does not need consciousness or emotions to pose risks.</li>',
		F,
		k,
		ve = 'AI cannot have goals or autonomy',
		Y,
		M,
		_e =
			'<li>Skeptics say AI systems just optimize goals we give them, and cannot act independently or have their own goals. Autonomy and unpredictable self-directed behavior is a myth.</li> <li>However, complex AI systems can potentially have emergent autonomy and goals, especially around self-preservation, as predicted by AI drives theory. Lack of autonomy does not make AI safe if misused by humans.</li>',
		D,
		A,
		ge = 'AI will not have uncontrolled power',
		G,
		S,
		ye =
			'<li>Skeptics argue AI systems will be limited tools under human control. They see no path for AI to gain unlimited intelligence and power to take over.</li> <li>It only takes one uncontrolled AI system to potentially cause harm. AI capability will likely far surpass human control eventually. Underestimating the power of exponential technological progress is shortsighted.</li>',
		J,
		w,
		xe = 'AI will be aligned with human values',
		K,
		j,
		$e =
			'<li>Skeptics expect that beneficial values will emerge naturally as AI gets smarter. They compare it to friendly domestic animals and human moral progress.</li> <li>There is no guarantee of such value alignment absent concerted efforts. Creating AI aligned with complex, nuanced human values faces steep technical challenges requiring extensive research.</li>',
		N,
		I,
		ke = 'Regulation will prevent AI risks',
		Q,
		q,
		Ae =
			'<li>Skeptics say regulatory oversight and ethical guidelines will restrain harmful AI applications, so we need not worry.</li> <li>But regulatory policy often lags behind technological developments, especially exponential advances. Self-regulation in a competitive environment is also insufficient. Technical AI safety research is still crucial.</li>',
		V,
		b,
		we = 'Conclusion',
		X,
		U,
		Ie =
			'The skeptical arguments generally exhibit flawed reasoning, underestimate the exponential pace and unpredictability of AI progress, and lack appreciation of alignment difficulties. Taking a cautious, proactive approach to AI safety makes sense given the stakes involved. Though future prospects remain unclear, dismissing AI existential risks outright seems unwise. More nuanced, technical analysis and debate is needed.',
		Z
	return (
		(h = new ce({
			props: {
				href: 'https://arxiv.org/ftp/arxiv/papers/2303/2303.03885.pdf',
				rel: 'nofollow',
				$$slots: { default: [Ue] },
				$$scope: { ctx: d }
			}
		})),
		(g = new ce({
			props: {
				href: 'https://aisafety.info/questions/9TDI/Objections-and-responses',
				rel: 'nofollow',
				$$slots: { default: [Ee] },
				$$scope: { ctx: d }
			}
		})),
		(y = new ce({ props: { href: '/xrisk', $$slots: { default: [ze] }, $$scope: { ctx: d } } })),
		{
			c() {
				;(i = o('p')),
					(s = o('em')),
					(u = C('This page is a summary of the ')),
					ee(h.$$.fragment),
					(a = C(' article by Ambartsoumean & Yampolskiy.')),
					(v = c()),
					(f = o('p')),
					(ae = C('For other common objections, you should check ')),
					ee(g.$$.fragment),
					(oe = C(' and ')),
					ee(y.$$.fragment),
					(re = C('.')),
					(O = c()),
					(x = o('h2')),
					(x.textContent = pe),
					(P = c()),
					(H = o('ul')),
					(H.innerHTML = fe),
					(W = c()),
					($ = o('h2')),
					($.textContent = de),
					(B = c()),
					(L = o('ul')),
					(L.innerHTML = he),
					(F = c()),
					(k = o('h2')),
					(k.textContent = ve),
					(Y = c()),
					(M = o('ul')),
					(M.innerHTML = _e),
					(D = c()),
					(A = o('h2')),
					(A.textContent = ge),
					(G = c()),
					(S = o('ul')),
					(S.innerHTML = ye),
					(J = c()),
					(w = o('h2')),
					(w.textContent = xe),
					(K = c()),
					(j = o('ul')),
					(j.innerHTML = $e),
					(N = c()),
					(I = o('h2')),
					(I.textContent = ke),
					(Q = c()),
					(q = o('ul')),
					(q.innerHTML = Ae),
					(V = c()),
					(b = o('h2')),
					(b.textContent = we),
					(X = c()),
					(U = o('p')),
					(U.textContent = Ie),
					this.h()
			},
			l(e) {
				i = r(e, 'P', {})
				var t = ue(i)
				s = r(t, 'EM', {})
				var E = ue(s)
				;(u = T(E, 'This page is a summary of the ')),
					te(h.$$.fragment, E),
					(a = T(E, ' article by Ambartsoumean & Yampolskiy.')),
					E.forEach(n),
					t.forEach(n),
					(v = m(e)),
					(f = r(e, 'P', {}))
				var _ = ue(f)
				;(ae = T(_, 'For other common objections, you should check ')),
					te(g.$$.fragment, _),
					(oe = T(_, ' and ')),
					te(y.$$.fragment, _),
					(re = T(_, '.')),
					_.forEach(n),
					(O = m(e)),
					(x = r(e, 'H2', { id: !0, 'data-svelte-h': !0 })),
					p(x) !== 'svelte-1q4b6nd' && (x.textContent = pe),
					(P = m(e)),
					(H = r(e, 'UL', { 'data-svelte-h': !0 })),
					p(H) !== 'svelte-1xexocd' && (H.innerHTML = fe),
					(W = m(e)),
					($ = r(e, 'H2', { id: !0, 'data-svelte-h': !0 })),
					p($) !== 'svelte-rcwtxm' && ($.textContent = de),
					(B = m(e)),
					(L = r(e, 'UL', { 'data-svelte-h': !0 })),
					p(L) !== 'svelte-1tk6doq' && (L.innerHTML = he),
					(F = m(e)),
					(k = r(e, 'H2', { id: !0, 'data-svelte-h': !0 })),
					p(k) !== 'svelte-di7grj' && (k.textContent = ve),
					(Y = m(e)),
					(M = r(e, 'UL', { 'data-svelte-h': !0 })),
					p(M) !== 'svelte-12oi516' && (M.innerHTML = _e),
					(D = m(e)),
					(A = r(e, 'H2', { id: !0, 'data-svelte-h': !0 })),
					p(A) !== 'svelte-1v5zt1r' && (A.textContent = ge),
					(G = m(e)),
					(S = r(e, 'UL', { 'data-svelte-h': !0 })),
					p(S) !== 'svelte-1ml1c93' && (S.innerHTML = ye),
					(J = m(e)),
					(w = r(e, 'H2', { id: !0, 'data-svelte-h': !0 })),
					p(w) !== 'svelte-lr2mjo' && (w.textContent = xe),
					(K = m(e)),
					(j = r(e, 'UL', { 'data-svelte-h': !0 })),
					p(j) !== 'svelte-1lv9z8h' && (j.innerHTML = $e),
					(N = m(e)),
					(I = r(e, 'H2', { id: !0, 'data-svelte-h': !0 })),
					p(I) !== 'svelte-ywn4l2' && (I.textContent = ke),
					(Q = m(e)),
					(q = r(e, 'UL', { 'data-svelte-h': !0 })),
					p(q) !== 'svelte-1ecb4xp' && (q.innerHTML = Ae),
					(V = m(e)),
					(b = r(e, 'H2', { id: !0, 'data-svelte-h': !0 })),
					p(b) !== 'svelte-1cykd0u' && (b.textContent = we),
					(X = m(e)),
					(U = r(e, 'P', { 'data-svelte-h': !0 })),
					p(U) !== 'svelte-1jcmmpr' && (U.textContent = Ie),
					this.h()
			},
			h() {
				z(x, 'id', 'well-have-a-long-time-to-prepare'),
					z($, 'id', 'ai-cannot-have-human-like-capabilities'),
					z(k, 'id', 'ai-cannot-have-goals-or-autonomy'),
					z(A, 'id', 'ai-will-not-have-uncontrolled-power'),
					z(w, 'id', 'ai-will-be-aligned-with-human-values'),
					z(I, 'id', 'regulation-will-prevent-ai-risks'),
					z(b, 'id', 'conclusion')
			},
			m(e, t) {
				l(e, i, t),
					R(i, s),
					R(s, u),
					ie(h, s, null),
					R(s, a),
					l(e, v, t),
					l(e, f, t),
					R(f, ae),
					ie(g, f, null),
					R(f, oe),
					ie(y, f, null),
					R(f, re),
					l(e, O, t),
					l(e, x, t),
					l(e, P, t),
					l(e, H, t),
					l(e, W, t),
					l(e, $, t),
					l(e, B, t),
					l(e, L, t),
					l(e, F, t),
					l(e, k, t),
					l(e, Y, t),
					l(e, M, t),
					l(e, D, t),
					l(e, A, t),
					l(e, G, t),
					l(e, S, t),
					l(e, J, t),
					l(e, w, t),
					l(e, K, t),
					l(e, j, t),
					l(e, N, t),
					l(e, I, t),
					l(e, Q, t),
					l(e, q, t),
					l(e, V, t),
					l(e, b, t),
					l(e, X, t),
					l(e, U, t),
					(Z = !0)
			},
			p(e, t) {
				const E = {}
				t & 2 && (E.$$scope = { dirty: t, ctx: e }), h.$set(E)
				const _ = {}
				t & 2 && (_.$$scope = { dirty: t, ctx: e }), g.$set(_)
				const be = {}
				t & 2 && (be.$$scope = { dirty: t, ctx: e }), y.$set(be)
			},
			i(e) {
				Z || (ne(h.$$.fragment, e), ne(g.$$.fragment, e), ne(y.$$.fragment, e), (Z = !0))
			},
			o(e) {
				le(h.$$.fragment, e), le(g.$$.fragment, e), le(y.$$.fragment, e), (Z = !1)
			},
			d(e) {
				e &&
					(n(i),
					n(v),
					n(f),
					n(O),
					n(x),
					n(P),
					n(H),
					n(W),
					n($),
					n(B),
					n(L),
					n(F),
					n(k),
					n(Y),
					n(M),
					n(D),
					n(A),
					n(G),
					n(S),
					n(J),
					n(w),
					n(K),
					n(j),
					n(N),
					n(I),
					n(Q),
					n(q),
					n(V),
					n(b),
					n(X),
					n(U)),
					se(h),
					se(g),
					se(y)
			}
		}
	)
}
function Oe(d) {
	let i, s
	const u = [d[0], He]
	let h = { $$slots: { default: [Re] }, $$scope: { ctx: d } }
	for (let a = 0; a < u.length; a += 1) h = me(h, u[a])
	return (
		(i = new qe({ props: h })),
		{
			c() {
				ee(i.$$.fragment)
			},
			l(a) {
				te(i.$$.fragment, a)
			},
			m(a, v) {
				ie(i, a, v), (s = !0)
			},
			p(a, [v]) {
				const f = v & 1 ? je(u, [v & 1 && Te(a[0]), v & 0 && Te(He)]) : {}
				v & 2 && (f.$$scope = { dirty: v, ctx: a }), i.$set(f)
			},
			i(a) {
				s || (ne(i.$$.fragment, a), (s = !0))
			},
			o(a) {
				le(i.$$.fragment, a), (s = !1)
			},
			d(a) {
				se(i, a)
			}
		}
	)
}
const He = {
	title: 'Rebutting skeptical arguments about AI existential risks',
	description: 'Why AI existential risks are real and deserve serious attention'
}
function Pe(d, i, s) {
	return (
		(d.$$set = (u) => {
			s(0, (i = me(me({}, i), Ce(u))))
		}),
		(i = Ce(i)),
		[i]
	)
}
class Ge extends Me {
	constructor(i) {
		super(), Se(this, i, Pe, Oe, Le, {})
	}
}
export { Ge as default, He as metadata }
