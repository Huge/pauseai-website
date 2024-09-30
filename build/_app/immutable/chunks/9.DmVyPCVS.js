import {
	s as oe,
	c as y,
	f as v,
	h as E,
	j as l,
	l as f,
	n as J,
	t as T,
	b as C,
	i as D,
	d as M,
	k as g,
	m as h,
	N as q,
	g as F
} from './scheduler.D9JQr37X.js'
import {
	S as ae,
	i as ie,
	c as Y,
	b as Q,
	m as U,
	a as W,
	t as X,
	d as B
} from './index.D-WnFt3a.js'
import { P as se } from './PostMeta.BRGG6AYg.js'
import { e as N, u as re, d as ne } from './each.Gi_i5kkj.js'
function G(c, e, t) {
	const i = c.slice()
	return (i[1] = e[t]), i
}
function Z(c) {
	let e,
		t = c[1].title + '',
		i
	return {
		c() {
			;(e = y('div')), (i = T(t)), this.h()
		},
		l(n) {
			e = v(n, 'DIV', { class: !0 })
			var s = E(e)
			;(i = D(s, t)), s.forEach(l), this.h()
		},
		h() {
			g(e, 'class', 'title svelte-t0dysd')
		},
		m(n, s) {
			f(n, e, s), h(e, i)
		},
		p(n, s) {
			s & 1 && t !== (t = n[1].title + '') && q(i, t)
		},
		d(n) {
			n && l(e)
		}
	}
}
function ee(c) {
	let e,
		t = c[1].note + '',
		i,
		n
	return {
		c() {
			;(e = T('(')), (i = T(t)), (n = T(')'))
		},
		l(s) {
			;(e = D(s, '(')), (i = D(s, t)), (n = D(s, ')'))
		},
		m(s, a) {
			f(s, e, a), f(s, i, a), f(s, n, a)
		},
		p(s, a) {
			a & 1 && t !== (t = s[1].note + '') && q(i, t)
		},
		d(s) {
			s && (l(e), l(i), l(n))
		}
	}
}
function te(c, e) {
	let t,
		i,
		n,
		s,
		a = e[1].probability + '',
		u,
		m,
		k,
		I,
		d,
		b,
		H,
		A,
		S = e[1].name + '',
		P,
		$,
		j,
		w,
		o,
		r = e[1].title && Z(e),
		p = e[1].note && ee(e)
	return {
		key: c,
		first: null,
		c() {
			;(t = y('li')),
				(i = y('div')),
				(n = y('a')),
				(s = y('b')),
				(u = T(a)),
				(k = C()),
				(I = y('div')),
				(d = y('h3')),
				(b = y('div')),
				(A = C()),
				(P = T(S)),
				($ = C()),
				r && r.c(),
				(j = C()),
				(w = y('div')),
				p && p.c(),
				(o = C()),
				this.h()
		},
		l(L) {
			t = v(L, 'LI', { class: !0 })
			var _ = E(t)
			i = v(_, 'DIV', { class: !0 })
			var R = E(i)
			n = v(R, 'A', { href: !0, class: !0 })
			var z = E(n)
			s = v(z, 'B', {})
			var K = E(s)
			;(u = D(K, a)),
				K.forEach(l),
				z.forEach(l),
				R.forEach(l),
				(k = M(_)),
				(I = v(_, 'DIV', { class: !0 }))
			var x = E(I)
			d = v(x, 'H3', { class: !0 })
			var O = E(d)
			;(b = v(O, 'DIV', { class: !0, style: !0 })),
				E(b).forEach(l),
				(A = M(O)),
				(P = D(O, S)),
				($ = M(O)),
				r && r.l(O),
				O.forEach(l),
				(j = M(x)),
				(w = v(x, 'DIV', { class: !0 }))
			var V = E(w)
			p && p.l(V), V.forEach(l), x.forEach(l), (o = M(_)), _.forEach(l), this.h()
		},
		h() {
			g(n, 'href', (m = e[1].source)),
				g(n, 'class', 'svelte-t0dysd'),
				g(i, 'class', 'pdoom svelte-t0dysd'),
				g(b, 'class', 'bar svelte-t0dysd'),
				g(b, 'style', (H = `width: calc(${e[1].number * 100}%`)),
				g(d, 'class', 'name svelte-t0dysd'),
				g(w, 'class', 'note svelte-t0dysd'),
				g(I, 'class', 'details svelte-t0dysd'),
				g(t, 'class', 'doomer svelte-t0dysd'),
				(this.first = t)
		},
		m(L, _) {
			f(L, t, _),
				h(t, i),
				h(i, n),
				h(n, s),
				h(s, u),
				h(t, k),
				h(t, I),
				h(I, d),
				h(d, b),
				h(d, A),
				h(d, P),
				h(d, $),
				r && r.m(d, null),
				h(I, j),
				h(I, w),
				p && p.m(w, null),
				h(t, o)
		},
		p(L, _) {
			;(e = L),
				_ & 1 && a !== (a = e[1].probability + '') && q(u, a),
				_ & 1 && m !== (m = e[1].source) && g(n, 'href', m),
				_ & 1 && H !== (H = `width: calc(${e[1].number * 100}%`) && g(b, 'style', H),
				_ & 1 && S !== (S = e[1].name + '') && q(P, S),
				e[1].title
					? r
						? r.p(e, _)
						: ((r = Z(e)), r.c(), r.m(d, null))
					: r && (r.d(1), (r = null)),
				e[1].note ? (p ? p.p(e, _) : ((p = ee(e)), p.c(), p.m(w, null))) : p && (p.d(1), (p = null))
		},
		d(L) {
			L && l(t), r && r.d(), p && p.d()
		}
	}
}
function le(c) {
	let e,
		t = [],
		i = new Map(),
		n = N(c[0])
	const s = (a) => a[1].name
	for (let a = 0; a < n.length; a += 1) {
		let u = G(c, n, a),
			m = s(u)
		i.set(m, (t[a] = te(m, u)))
	}
	return {
		c() {
			e = y('ul')
			for (let a = 0; a < t.length; a += 1) t[a].c()
		},
		l(a) {
			e = v(a, 'UL', {})
			var u = E(e)
			for (let m = 0; m < t.length; m += 1) t[m].l(u)
			u.forEach(l)
		},
		m(a, u) {
			f(a, e, u)
			for (let m = 0; m < t.length; m += 1) t[m] && t[m].m(e, null)
		},
		p(a, [u]) {
			u & 1 && ((n = N(a[0])), (t = re(t, u, s, 1, a, n, i, e, ne, te, null, G)))
		},
		i: J,
		o: J,
		d(a) {
			a && l(e)
			for (let u = 0; u < t.length; u += 1) t[u].d()
		}
	}
}
function ue(c, e, t) {
	let i = [
		{
			name: 'Yann LeCun',
			title: 'one of three godfathers of AI, works at Meta',
			note: 'less likely than an asteroid',
			number: 1e-4,
			probability: '<0.01%',
			source: 'https://twitter.com/liron/status/1736555643384025428'
		},
		{
			name: 'Forecasting Research Institute Superforecasters',
			probability: '0.38%',
			note: 'From the same study: Domain experts estimated 3% AI x-risk, and AI catastrophe at 12%',
			number: 0.0038,
			source:
				'https://static1.squarespace.com/static/635693acf15a3e2a14a56a4a/t/64f0a7838ccbf43b6b5ee40c/1693493128111/XPT.pdf'
		},
		{
			name: 'Vitalik Buterin',
			title: 'Ethereum founder',
			probability: '10%',
			number: 0.1,
			source: 'https://twitter.com/VitalikButerin/status/1729251822391447904'
		},
		{
			name: 'Machine learning researchers',
			probability: '9-19.4%',
			number: 0.142,
			note: 'Mean in 2023, depending on the question design, median values: 5-10%',
			source:
				'https://wiki.aiimpacts.org/ai_timelines/predictions_of_human-level_ai_timelines/ai_timeline_surveys/2023_expert_survey_on_progress_in_ai'
		},
		{
			name: 'Lina Khan',
			title: 'head of FTC',
			date: '2023-11-01',
			probability: '15%',
			number: 0.15,
			source: 'https://twitter.com/liron/status/1723458202090774949'
		},
		{
			name: 'Elon Musk',
			title: 'CEO of Tesla, SpaceX, X',
			probability: '10-20%',
			number: 0.15,
			source: 'https://www.youtube.com/watch?v=akXMYvKjUxM'
		},
		{
			name: 'Dario Amodei',
			title: 'CEO of Anthropic',
			probability: '10-25%',
			number: 0.175,
			source: 'https://twitter.com/liron/status/1710520914444718459'
		},
		{
			name: 'Reid Hoffman',
			title: 'Co-founder of LinkedIn',
			date: '2024-08-23',
			probability: '20%',
			number: 0.2,
			source: 'https://www.pbs.org/video/future-of-ai-1724451272/'
		},
		{
			name: 'Yoshua Bengio',
			title: 'one of three godfathers of AI',
			probability: '20%',
			number: 0.2,
			source:
				'https://www.abc.net.au/news/2023-07-15/whats-your-pdoom-ai-researchers-worry-catastrophe/102591340'
		},
		{
			name: 'Emmett Shear',
			title: 'Co-founder of Twitch, former interim CEO of OpenAI',
			probability: '5-50%',
			number: 0.275,
			source: 'https://www.youtube.com/watch?v=9oUbauum4uI'
		},
		{
			name: 'AI Safety Researchers',
			note: 'Mean from 44 AI safety researchers in 2021',
			probability: '30%',
			number: 0.3,
			source:
				'https://web.archive.org/web/20221013014859/https://www.alignmentforum.org/posts/QvwSr5LsxyDeaPK5s/existential-risk-from-ai-survey-results'
		},
		{
			name: 'Geoff Hinton',
			title: 'one of three godfathers of AI',
			probability: '10-50%',
			number: 0.3,
			note: 'Recently said "Kinda 50-50" on good outcomes for humanity. Earlier he mentioned 10%.',
			source: 'https://x.com/liron/status/1803435675527815302'
		},
		{
			name: 'Scott Alexander',
			probability: '33%',
			title: 'Popular Internet blogger at Astral Codex Ten',
			number: 0.33,
			source: 'https://astralcodexten.substack.com/p/why-i-am-not-as-much-of-a-doomer'
		},
		{
			name: 'Eli Lifland',
			title: 'Top competitive forecaster',
			probability: '35%',
			number: 0.35,
			source:
				'https://forum.effectivealtruism.org/posts/QeLE22fefLqKfYTW6/eli-lifland-on-navigating-the-ai-alignment-landscape'
		},
		{
			name: 'AI engineer',
			note: 'Estimate mean value, survey methodology may be flawed',
			probability: '40%',
			number: 0.4,
			source: 'https://twitter.com/AISafetyMemes/status/1713515843194077583'
		},
		{
			name: 'Joep Meindertsma',
			title: 'Founder of PauseAI',
			probability: '40%',
			note: 'The remaining 60% consists largely of "we can pause".',
			number: 0.4,
			source:
				'https://www.nrc.nl/nieuws/2024/02/16/ai-doomers-zijn-doodsbang-voor-de-computer-ai-zal-proberen-de-macht-over-te-nemen-a4190130'
		},
		{
			name: 'Paul Christiano',
			title: 'Head of AI safety, US AI Safety Institute, formerly OpenAI, founded ARC',
			probability: '46%',
			number: 0.46,
			source: 'https://www.lesswrong.com/posts/xWMqsvHapP3nwdSW8/my-views-on-doom'
		},
		{
			name: 'Holden Karnofsky',
			title: 'Co-founder of Open Philanthropy',
			probability: '10-90%',
			number: 0.5,
			source:
				'https://www.alignmentforum.org/posts/rCJQAkPTEypGjSJ8X/how-might-we-align-transformative-ai-if-it-s-developed-very#So__would_civilization_survive_'
		},
		{
			name: 'Jan Leike',
			title: 'Former alignment lead at OpenAI',
			date: '2023-08-01',
			probability: '10-90%',
			number: 0.5,
			source: 'https://www.youtube.com/watch?v=ZP_N4q5U3eE&t=1h16m'
		},
		{
			name: 'Zvi Mowshowitz',
			title: 'Independent AI safety journalist',
			probability: '60%',
			number: 0.6,
			source: 'https://x.com/liron/status/1729274710670893262?s=20'
		},
		{
			name: 'Daniel Kokotajlo',
			title: 'Forecaster & former OpenAI researcher',
			probability: '70%',
			number: 0.7,
			source:
				'https://www.lesswrong.com/posts/xDkdR6JcQsCdnFpaQ/adumbrations-on-agi-from-an-outsider?commentId=sHnfPe5pHJhjJuCWW'
		},
		{
			name: 'Dan Hendrycks',
			title: 'Head of Center for AI Safety',
			probability: '>80%',
			number: 0.8,
			source: 'https://twitter.com/DanHendrycks/status/1642394635657162753'
		},
		{
			name: 'Eliezer Yudkowsky',
			title: 'Founder of MIRI',
			probability: '>95%',
			number: 0.95,
			source:
				'https://www.fastcompany.com/90994526/pdoom-explained-how-to-calculate-your-score-on-ai-apocalypse-metric'
		},
		{
			name: 'Roman Yampolskiy',
			title: 'AI safety scientist',
			probability: '99.999999%',
			number: 0.99999999,
			source: 'https://twitter.com/romanyam/status/1767575356155027503'
		}
	]
	return (i = i.sort((n, s) => s.number - n.number)), [i]
}
class me extends ae {
	constructor(e) {
		super(), ie(this, e, ue, le, oe, {})
	}
}
const ce = {
	title: 'List of p(doom) values',
	description: 'How likely do AI various researchers believe AI will cause human extinction?',
	date: '2023-12-18',
	slug: 'pdoom',
	categories: []
}
function fe(c) {
	let e,
		t,
		i,
		n,
		s,
		a,
		u = `p(doom) is the probability of very bad outcomes (e.g. human extinction) as a result of AI. This
	most often refers to the likelihood of <a href="/ai-takeover">AI taking over</a> from humanity,
	but different scenarios can also constitute &quot;doom&quot;. For example, a large portion of the population
	dying due to a novel biological weapon created by AI, social collapse due to a
	<a href="cybersecurity-risks">large-scale cyber attack</a>, or AI causing a nuclear war. Note that
	not everyone is using the same definition when talking about their p(doom) values. Most notably
	the time horizon is often not specified, which makes comparing a bit difficult.`,
		m,
		k,
		I = 'Press the p(doom) percentage to open the source.',
		d,
		b,
		H,
		A,
		S = 'Do something about it',
		P,
		$,
		j = `However high your p(doom) is, you probably agree that we should not allow AI companies to gamble
	with our future.
	<a href="/join">Join PauseAI</a> to prevent them from doing so.`,
		w
	return (
		(e = new se({ props: { title: c[0], description: c[1], date: c[2] } })),
		(b = new me({})),
		{
			c() {
				Y(e.$$.fragment),
					(t = C()),
					(i = y('h1')),
					(n = T(c[0])),
					(s = C()),
					(a = y('p')),
					(a.innerHTML = u),
					(m = C()),
					(k = y('em')),
					(k.textContent = I),
					(d = C()),
					Y(b.$$.fragment),
					(H = C()),
					(A = y('h2')),
					(A.textContent = S),
					(P = C()),
					($ = y('p')),
					($.innerHTML = j)
			},
			l(o) {
				Q(e.$$.fragment, o), (t = M(o)), (i = v(o, 'H1', {}))
				var r = E(i)
				;(n = D(r, c[0])),
					r.forEach(l),
					(s = M(o)),
					(a = v(o, 'P', { 'data-svelte-h': !0 })),
					F(a) !== 'svelte-4t65v7' && (a.innerHTML = u),
					(m = M(o)),
					(k = v(o, 'EM', { 'data-svelte-h': !0 })),
					F(k) !== 'svelte-1ylaudr' && (k.textContent = I),
					(d = M(o)),
					Q(b.$$.fragment, o),
					(H = M(o)),
					(A = v(o, 'H2', { 'data-svelte-h': !0 })),
					F(A) !== 'svelte-3m67rd' && (A.textContent = S),
					(P = M(o)),
					($ = v(o, 'P', { 'data-svelte-h': !0 })),
					F($) !== 'svelte-1vuw14d' && ($.innerHTML = j)
			},
			m(o, r) {
				U(e, o, r),
					f(o, t, r),
					f(o, i, r),
					h(i, n),
					f(o, s, r),
					f(o, a, r),
					f(o, m, r),
					f(o, k, r),
					f(o, d, r),
					U(b, o, r),
					f(o, H, r),
					f(o, A, r),
					f(o, P, r),
					f(o, $, r),
					(w = !0)
			},
			p: J,
			i(o) {
				w || (W(e.$$.fragment, o), W(b.$$.fragment, o), (w = !0))
			},
			o(o) {
				X(e.$$.fragment, o), X(b.$$.fragment, o), (w = !1)
			},
			d(o) {
				o && (l(t), l(i), l(s), l(a), l(m), l(k), l(d), l(H), l(A), l(P), l($)), B(e, o), B(b, o)
			}
		}
	)
}
function de(c) {
	let { title: e, description: t, date: i } = ce
	return [e, t, i]
}
class pe extends ae {
	constructor(e) {
		super(), ie(this, e, de, fe, oe, {})
	}
}
const _e = Object.freeze(
	Object.defineProperty({ __proto__: null, default: pe }, Symbol.toStringTag, { value: 'Module' })
)
export { pe as P, _e as _ }
