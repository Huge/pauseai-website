import {
	s as Z,
	a as R,
	e as K,
	c as m,
	b as $,
	t as C,
	f as h,
	g as k,
	d as x,
	h as E,
	i as I,
	j as s,
	k as S,
	l as i,
	m as P
} from './scheduler.D9JQr37X.js'
import {
	S as ee,
	i as te,
	c as B,
	b as D,
	m as q,
	a as G,
	t as O,
	d as U
} from './index.D-WnFt3a.js'
import { g as oe, a as Q } from './a.svelte_svelte_type_style_lang.DfavE63L.js'
import { M as ne } from './mdsvex.Bi9EMyuJ.js'
import { A as X } from './a.YKMG9Usu.js'
function ae(c) {
	let t
	return {
		c() {
			t = C('proposal')
		},
		l(n) {
			t = I(n, 'proposal')
		},
		m(n, l) {
			i(n, t, l)
		},
		d(n) {
			n && s(t)
		}
	}
}
function se(c) {
	let t
	return {
		c() {
			t = C('Protesters Code of Conduct')
		},
		l(n) {
			t = I(n, 'Protesters Code of Conduct')
		},
		m(n, l) {
			i(n, t, l)
		},
		d(n) {
			n && s(t)
		}
	}
}
function re(c) {
	let t,
		n = 'What do we want?',
		l,
		u,
		a,
		r,
		_,
		W,
		f,
		F = 'What are our values?',
		H,
		g,
		N =
			'<li><strong>Humanity first</strong>. We believe that AI should be developed in a way that benefits humanity, or not at all.</li> <li><strong>Community</strong>. A feeling of community doesn’t just come from a shared goal (e.g. pausing AI) or values, but also from social activity. That’s why it’s important to get people to meet, organize events, have social gatherings and create IRL friendships. It’s not just about constructive action, it’s about making friends and feeling at home with a group.</li> <li><strong>Anyone can contribute.</strong> Many AI safety / AI governance organizations rely solely on their group of paid employees. This has its merits, but it leaves a gap of volunteers. That’s where PauseAI is different. By fostering volunteers and encouraging action we can get stuff done even without a lot of funding.</li> <li><strong>Transparency by default.</strong> Do and discuss things publicly and openly, unless there’s a good reason not to. Meetings are open to join, the website is open source, and the Discord server is joinable. Being approachable lowers the barrier to feel welcome and help out.</li> <li><strong>Honesty.</strong> We don’t have any weird incentives (e.g. having a stake in an AI company), so we are free to say what we believe. We do not sugarcoat our message to make it more palatable.</li> <li><strong>Diversity in risks, uniformity in desires.</strong> Whether you’re worried about x-risk, cybersecurity hazards or the impact of AI on our democracy: we are unified in our desire to pause AI development.</li> <li><strong>No partisan politics</strong>. Humans are tribal creatures, which causes us to bundle viewpoints into groups (left/right). AI safety is not <em>that</em> partisan (yet), and we want to keep it that way. We do not let our other political views distract us from our combined goal.</li>',
		M,
		d,
		V = 'What type of culture do we want to foster?',
		T,
		w,
		J =
			'<li><strong>Action-oriented</strong>. We want to be a group that gets stuff done. The perfect is the enemy of the good. We cannot give in to the comfort of just talking about things. We need to act.</li> <li><strong>Friendly</strong>. We want to be a group that people like to be part of. We want to be welcoming to new members.</li> <li><strong>Open</strong>. We want to be open to new ideas, new people, new ways of doing things. We want to be open to criticism. Our goal is to prevent AI risks. We should be open to the possibility that we’re wrong about how to do that.</li> <li><strong>Reasonable</strong>. Because our concerns are often dismissed as crazy, we need to be extra careful to not <em>look</em> crazy. Emphasize that many people in our group have technical backgrounds. Show that we know what we’re talking about.</li>',
		j,
		v,
		y,
		z,
		p,
		L
	return (
		(r = new X({ props: { href: '/proposal', $$slots: { default: [ae] }, $$scope: { ctx: c } } })),
		(p = new X({
			props: {
				href: '/protesters-code-of-conduct',
				$$slots: { default: [se] },
				$$scope: { ctx: c }
			}
		})),
		{
			c() {
				;(t = m('h2')),
					(t.textContent = n),
					(l = $()),
					(u = m('p')),
					(a = C(
						'Globally halt frontier AI development until we know how to do it safely and under democratic control. See our '
					)),
					B(r.$$.fragment),
					(_ = C('.')),
					(W = $()),
					(f = m('h2')),
					(f.textContent = F),
					(H = $()),
					(g = m('ul')),
					(g.innerHTML = N),
					(M = $()),
					(d = m('h2')),
					(d.textContent = V),
					(T = $()),
					(w = m('ul')),
					(w.innerHTML = J),
					(j = $()),
					(v = m('p')),
					(y = m('em')),
					(z = C('Related: our ')),
					B(p.$$.fragment),
					this.h()
			},
			l(e) {
				;(t = h(e, 'H2', { id: !0, 'data-svelte-h': !0 })),
					k(t) !== 'svelte-19fox70' && (t.textContent = n),
					(l = x(e)),
					(u = h(e, 'P', {}))
				var o = E(u)
				;(a = I(
					o,
					'Globally halt frontier AI development until we know how to do it safely and under democratic control. See our '
				)),
					D(r.$$.fragment, o),
					(_ = I(o, '.')),
					o.forEach(s),
					(W = x(e)),
					(f = h(e, 'H2', { id: !0, 'data-svelte-h': !0 })),
					k(f) !== 'svelte-4idmjk' && (f.textContent = F),
					(H = x(e)),
					(g = h(e, 'UL', { 'data-svelte-h': !0 })),
					k(g) !== 'svelte-1avu8l5' && (g.innerHTML = N),
					(M = x(e)),
					(d = h(e, 'H2', { id: !0, 'data-svelte-h': !0 })),
					k(d) !== 'svelte-rhsqxt' && (d.textContent = V),
					(T = x(e)),
					(w = h(e, 'UL', { 'data-svelte-h': !0 })),
					k(w) !== 'svelte-flt4y2' && (w.innerHTML = J),
					(j = x(e)),
					(v = h(e, 'P', {}))
				var A = E(v)
				y = h(A, 'EM', {})
				var b = E(y)
				;(z = I(b, 'Related: our ')), D(p.$$.fragment, b), b.forEach(s), A.forEach(s), this.h()
			},
			h() {
				S(t, 'id', 'what-do-we-want'),
					S(f, 'id', 'what-are-our-values'),
					S(d, 'id', 'what-type-of-culture-do-we-want-to-foster')
			},
			m(e, o) {
				i(e, t, o),
					i(e, l, o),
					i(e, u, o),
					P(u, a),
					q(r, u, null),
					P(u, _),
					i(e, W, o),
					i(e, f, o),
					i(e, H, o),
					i(e, g, o),
					i(e, M, o),
					i(e, d, o),
					i(e, T, o),
					i(e, w, o),
					i(e, j, o),
					i(e, v, o),
					P(v, y),
					P(y, z),
					q(p, y, null),
					(L = !0)
			},
			p(e, o) {
				const A = {}
				o & 2 && (A.$$scope = { dirty: o, ctx: e }), r.$set(A)
				const b = {}
				o & 2 && (b.$$scope = { dirty: o, ctx: e }), p.$set(b)
			},
			i(e) {
				L || (G(r.$$.fragment, e), G(p.$$.fragment, e), (L = !0))
			},
			o(e) {
				O(r.$$.fragment, e), O(p.$$.fragment, e), (L = !1)
			},
			d(e) {
				e && (s(t), s(l), s(u), s(W), s(f), s(H), s(g), s(M), s(d), s(T), s(w), s(j), s(v)),
					U(r),
					U(p)
			}
		}
	)
}
function ie(c) {
	let t, n
	const l = [c[0], Y]
	let u = { $$slots: { default: [re] }, $$scope: { ctx: c } }
	for (let a = 0; a < l.length; a += 1) u = R(u, l[a])
	return (
		(t = new ne({ props: u })),
		{
			c() {
				B(t.$$.fragment)
			},
			l(a) {
				D(t.$$.fragment, a)
			},
			m(a, r) {
				q(t, a, r), (n = !0)
			},
			p(a, [r]) {
				const _ = r & 1 ? oe(l, [r & 1 && Q(a[0]), r & 0 && Q(Y)]) : {}
				r & 2 && (_.$$scope = { dirty: r, ctx: a }), t.$set(_)
			},
			i(a) {
				n || (G(t.$$.fragment, a), (n = !0))
			},
			o(a) {
				O(t.$$.fragment, a), (n = !1)
			},
			d(a) {
				U(t, a)
			}
		}
	)
}
const Y = { title: 'PauseAI values', description: 'How does PauseAI plan to achieve its mission?' }
function le(c, t, n) {
	return (
		(c.$$set = (l) => {
			n(0, (t = R(R({}, t), K(l))))
		}),
		(t = K(t)),
		[t]
	)
}
class me extends ee {
	constructor(t) {
		super(), te(this, t, le, ie, Z, {})
	}
}
export { me as default, Y as metadata }
