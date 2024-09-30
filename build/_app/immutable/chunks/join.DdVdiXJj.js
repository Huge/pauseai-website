import {
	s as _e,
	a as ie,
	e as ue,
	c as h,
	b as z,
	t as f,
	f as d,
	g as ce,
	d as W,
	h as E,
	i as u,
	j as n,
	k as q,
	y as he,
	z as me,
	l as m,
	m as r
} from './scheduler.D9JQr37X.js'
import {
	S as de,
	i as ge,
	c as F,
	b as H,
	m as O,
	a as S,
	t as U,
	d as X
} from './index.D-WnFt3a.js'
import { g as ve, a as pe } from './a.svelte_svelte_type_style_lang.DfavE63L.js'
import { M as we } from './mdsvex.Bi9EMyuJ.js'
import { A as Y } from './a.YKMG9Usu.js'
function be(i) {
	let e
	return {
		c() {
			e = f('local community')
		},
		l(t) {
			e = u(t, 'local community')
		},
		m(t, s) {
			m(t, e, s)
		},
		d(t) {
			t && n(e)
		}
	}
}
function xe(i) {
	let e
	return {
		c() {
			e = f('Discord')
		},
		l(t) {
			e = u(t, 'Discord')
		},
		m(t, s) {
			m(t, e, s)
		},
		d(t) {
			t && n(e)
		}
	}
}
function ye(i) {
	let e
	return {
		c() {
			e = f('teams')
		},
		l(t) {
			e = u(t, 'teams')
		},
		m(t, s) {
			m(t, e, s)
		},
		d(t) {
			t && n(e)
		}
	}
}
function Ee(i) {
	let e
	return {
		c() {
			e = f('people page')
		},
		l(t) {
			e = u(t, 'people page')
		},
		m(t, s) {
			m(t, e, s)
		},
		d(t) {
			t && n(e)
		}
	}
}
function Ie(i) {
	let e
	return {
		c() {
			e = f('organization page')
		},
		l(t) {
			e = u(t, 'organization page')
		},
		m(t, s) {
			m(t, e, s)
		},
		d(t) {
			t && n(e)
		}
	}
}
function Le(i) {
	let e,
		t = `The group of people who are aware of AI risks is still small.
You are now one of them.
<strong>Your actions matter more than you think.</strong>`,
		s,
		_,
		l = 'Ways that you can join:',
		$,
		p,
		I,
		Z,
		g,
		B,
		K,
		L,
		Q,
		v,
		V,
		ee,
		A,
		te,
		w,
		ae,
		D,
		c,
		fe,
		R,
		b,
		C,
		oe,
		x,
		ne,
		se,
		J,
		le,
		y,
		re,
		G
	return (
		(g = new Y({
			props: { href: '/communities', $$slots: { default: [be] }, $$scope: { ctx: i } }
		})),
		(v = new Y({
			props: {
				href: 'https://discord.gg/2XXWXvErfA',
				rel: 'nofollow',
				$$slots: { default: [xe] },
				$$scope: { ctx: i }
			}
		})),
		(w = new Y({ props: { href: '/teams', $$slots: { default: [ye] }, $$scope: { ctx: i } } })),
		(x = new Y({ props: { href: '/people', $$slots: { default: [Ee] }, $$scope: { ctx: i } } })),
		(y = new Y({
			props: { href: '/organization', $$slots: { default: [Ie] }, $$scope: { ctx: i } }
		})),
		{
			c() {
				;(e = h('p')),
					(e.innerHTML = t),
					(s = z()),
					(_ = h('p')),
					(_.textContent = l),
					($ = z()),
					(p = h('ul')),
					(I = h('li')),
					(Z = f('Join or form a ')),
					F(g.$$.fragment),
					(B = f('.')),
					(K = z()),
					(L = h('li')),
					(Q = f('Join the PauseAI ')),
					F(v.$$.fragment),
					(V = f(', where most of the collaboration happens.')),
					(ee = z()),
					(A = h('li')),
					(te = f(
						'Fill out this form, and you will be able to chat or have a call with the Onboarding team about your interests and how you can participate in projects or '
					)),
					F(w.$$.fragment),
					(ae = f(':')),
					(D = z()),
					(c = h('iframe')),
					(R = z()),
					(b = h('ul')),
					(C = h('li')),
					(oe = f('Then you can sign up as a volunteer, and appear on the ')),
					F(x.$$.fragment),
					(ne = f(' if you want.')),
					(se = z()),
					(J = h('li')),
					(le = f('Check out the ')),
					F(y.$$.fragment),
					(re = f(' for more info!')),
					this.h()
			},
			l(a) {
				;(e = d(a, 'P', { 'data-svelte-h': !0 })),
					ce(e) !== 'svelte-13tut9' && (e.innerHTML = t),
					(s = W(a)),
					(_ = d(a, 'P', { 'data-svelte-h': !0 })),
					ce(_) !== 'svelte-1ixfrta' && (_.textContent = l),
					($ = W(a)),
					(p = d(a, 'UL', {}))
				var o = E(p)
				I = d(o, 'LI', {})
				var P = E(I)
				;(Z = u(P, 'Join or form a ')),
					H(g.$$.fragment, P),
					(B = u(P, '.')),
					P.forEach(n),
					(K = W(o)),
					(L = d(o, 'LI', {}))
				var j = E(L)
				;(Q = u(j, 'Join the PauseAI ')),
					H(v.$$.fragment, j),
					(V = u(j, ', where most of the collaboration happens.')),
					j.forEach(n),
					(ee = W(o)),
					(A = d(o, 'LI', {}))
				var k = E(A)
				;(te = u(
					k,
					'Fill out this form, and you will be able to chat or have a call with the Onboarding team about your interests and how you can participate in projects or '
				)),
					H(w.$$.fragment, k),
					(ae = u(k, ':')),
					k.forEach(n),
					o.forEach(n),
					(D = W(a)),
					(c = d(a, 'IFRAME', {
						class: !0,
						src: !0,
						frameborder: !0,
						onmousewheel: !0,
						width: !0,
						height: !0,
						style: !0
					})),
					E(c).forEach(n),
					(R = W(a)),
					(b = d(a, 'UL', {}))
				var T = E(b)
				C = d(T, 'LI', {})
				var M = E(C)
				;(oe = u(M, 'Then you can sign up as a volunteer, and appear on the ')),
					H(x.$$.fragment, M),
					(ne = u(M, ' if you want.')),
					M.forEach(n),
					(se = W(T)),
					(J = d(T, 'LI', {}))
				var N = E(J)
				;(le = u(N, 'Check out the ')),
					H(y.$$.fragment, N),
					(re = u(N, ' for more info!')),
					N.forEach(n),
					T.forEach(n),
					this.h()
			},
			h() {
				q(c, 'class', 'airtable-embed'),
					he(c.src, (fe = 'https://airtable.com/embed/appWPTGqZmUcs3NWu/pagoxRuCai4OYJEHt/form')) ||
						q(c, 'src', fe),
					q(c, 'frameborder', '0'),
					q(c, 'onmousewheel', ''),
					q(c, 'width', '100%'),
					q(c, 'height', '533'),
					me(c, 'background', 'transparent'),
					me(c, 'border', '1px solid #ccc')
			},
			m(a, o) {
				m(a, e, o),
					m(a, s, o),
					m(a, _, o),
					m(a, $, o),
					m(a, p, o),
					r(p, I),
					r(I, Z),
					O(g, I, null),
					r(I, B),
					r(p, K),
					r(p, L),
					r(L, Q),
					O(v, L, null),
					r(L, V),
					r(p, ee),
					r(p, A),
					r(A, te),
					O(w, A, null),
					r(A, ae),
					m(a, D, o),
					m(a, c, o),
					m(a, R, o),
					m(a, b, o),
					r(b, C),
					r(C, oe),
					O(x, C, null),
					r(C, ne),
					r(b, se),
					r(b, J),
					r(J, le),
					O(y, J, null),
					r(J, re),
					(G = !0)
			},
			p(a, o) {
				const P = {}
				o & 2 && (P.$$scope = { dirty: o, ctx: a }), g.$set(P)
				const j = {}
				o & 2 && (j.$$scope = { dirty: o, ctx: a }), v.$set(j)
				const k = {}
				o & 2 && (k.$$scope = { dirty: o, ctx: a }), w.$set(k)
				const T = {}
				o & 2 && (T.$$scope = { dirty: o, ctx: a }), x.$set(T)
				const M = {}
				o & 2 && (M.$$scope = { dirty: o, ctx: a }), y.$set(M)
			},
			i(a) {
				G ||
					(S(g.$$.fragment, a),
					S(v.$$.fragment, a),
					S(w.$$.fragment, a),
					S(x.$$.fragment, a),
					S(y.$$.fragment, a),
					(G = !0))
			},
			o(a) {
				U(g.$$.fragment, a),
					U(v.$$.fragment, a),
					U(w.$$.fragment, a),
					U(x.$$.fragment, a),
					U(y.$$.fragment, a),
					(G = !1)
			},
			d(a) {
				a && (n(e), n(s), n(_), n($), n(p), n(D), n(c), n(R), n(b)), X(g), X(v), X(w), X(x), X(y)
			}
		}
	)
}
function Ae(i) {
	let e, t
	const s = [i[0], $e]
	let _ = { $$slots: { default: [Le] }, $$scope: { ctx: i } }
	for (let l = 0; l < s.length; l += 1) _ = ie(_, s[l])
	return (
		(e = new we({ props: _ })),
		{
			c() {
				F(e.$$.fragment)
			},
			l(l) {
				H(e.$$.fragment, l)
			},
			m(l, $) {
				O(e, l, $), (t = !0)
			},
			p(l, [$]) {
				const p = $ & 1 ? ve(s, [$ & 1 && pe(l[0]), $ & 0 && pe($e)]) : {}
				$ & 2 && (p.$$scope = { dirty: $, ctx: l }), e.$set(p)
			},
			i(l) {
				t || (S(e.$$.fragment, l), (t = !0))
			},
			o(l) {
				U(e.$$.fragment, l), (t = !1)
			},
			d(l) {
				X(e, l)
			}
		}
	)
}
const $e = { title: 'Join PauseAI', description: 'Sign up to join the PauseAI movement.' }
function Ce(i, e, t) {
	return (
		(i.$$set = (s) => {
			t(0, (e = ie(ie({}, e), ue(s))))
		}),
		(e = ue(e)),
		[e]
	)
}
class Me extends de {
	constructor(e) {
		super(), ge(this, e, Ce, Ae, _e, {})
	}
}
export { Me as default, $e as metadata }
