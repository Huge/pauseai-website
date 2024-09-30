import {
	s as H,
	a as x,
	e as A,
	c as h,
	b as I,
	t as z,
	f as v,
	g as $,
	d as b,
	h as P,
	i as L,
	j as d,
	l as p,
	m as k
} from './scheduler.D9JQr37X.js'
import { S as B, i as N, c as R, b as S, m as T, a as q, t as E, d as V } from './index.D-WnFt3a.js'
import { g as O, a as j } from './a.svelte_svelte_type_style_lang.DfavE63L.js'
import { M as D } from './mdsvex.Bi9EMyuJ.js'
import { A as F } from './a.YKMG9Usu.js'
function G(m) {
	let e
	return {
		c() {
			e = z('Values')
		},
		l(n) {
			e = L(n, 'Values')
		},
		m(n, s) {
			p(n, e, s)
		},
		d(n) {
			n && d(e)
		}
	}
}
function J(m) {
	let e,
		n =
			'As a participant in a PauseAI protest, I commit to adhering to the following Code of Conduct to ensure a safe, respectful, and inclusive environment for all:',
		s,
		l,
		o =
			'<li><strong>Nonviolence</strong>: I pledge to maintain a peaceful and nonviolent demeanor during the protest. I will not engage in any form of physical or verbal aggression, nor will I instigate or provoke others to do so. Violence is the quickest way to undermine our message and jeopardize our cause.</li> <li><strong>Respect</strong>: I commit to treating all individuals, including fellow protesters, law enforcement, and bystanders, with respect and dignity. I will refrain from using offensive language or making derogatory remarks, and I will respect the rights of others to express their opinions, even if they differ from my own.</li> <li><strong>Safety</strong>: I understand the importance of ensuring the safety of all participants and will follow established guidelines and protocols to maintain a secure environment. I will report any potential hazards or threatening behavior to protest organizers or law enforcement immediately.</li> <li><strong>Inclusivity</strong>: I pledge to create an inclusive atmosphere, welcoming individuals from diverse backgrounds and perspectives. I will be mindful of my own biases and assumptions, and I will strive to actively listen and learn from others.</li> <li><strong>Solidarity</strong>: I commit to standing in solidarity with the PauseAI movement and its goals. I will avoid actions or statements that may undermine the message or reputation of the movement, and I will actively support my fellow protesters in their efforts to promote responsible AI development.</li> <li><strong>Compliance with Laws</strong>: I understand that I am responsible for complying with all applicable local, regional, and national laws during the protest. I will cooperate with law enforcement officials and follow their instructions, as long as they do not conflict with my rights or safety.</li> <li><strong>Responsibility</strong>: I acknowledge my personal responsibility to uphold the values and goals of the PauseAI movement. If I witness any violation of this Code of Conduct, I will report it to protest organizers or other appropriate authorities.</li> <li><strong>Action over doom</strong>: I will focus on constructive dialogue and promoting actionable solutions to address the challenges posed by AI development. This approach will create a more empowering and hopeful atmosphere, encouraging others to join our cause.</li>',
		i,
		r,
		C =
			'By adhering to this Code of Conduct, I pledge to be an ambassador for the PauseAI movement and its mission to promote the responsible development and use of artificial intelligence. Together, we can create a powerful and positive force for change.',
		_,
		f,
		u,
		y,
		c,
		w
	return (
		(c = new F({ props: { href: '/values', $$slots: { default: [G] }, $$scope: { ctx: m } } })),
		{
			c() {
				;(e = h('p')),
					(e.textContent = n),
					(s = I()),
					(l = h('ol')),
					(l.innerHTML = o),
					(i = I()),
					(r = h('p')),
					(r.textContent = C),
					(_ = I()),
					(f = h('p')),
					(u = h('em')),
					(y = z('Related: our ')),
					R(c.$$.fragment)
			},
			l(t) {
				;(e = v(t, 'P', { 'data-svelte-h': !0 })),
					$(e) !== 'svelte-jlbq6d' && (e.textContent = n),
					(s = b(t)),
					(l = v(t, 'OL', { 'data-svelte-h': !0 })),
					$(l) !== 'svelte-1cgb2bg' && (l.innerHTML = o),
					(i = b(t)),
					(r = v(t, 'P', { 'data-svelte-h': !0 })),
					$(r) !== 'svelte-ogswwo' && (r.textContent = C),
					(_ = b(t)),
					(f = v(t, 'P', {}))
				var a = P(f)
				u = v(a, 'EM', {})
				var g = P(u)
				;(y = L(g, 'Related: our ')), S(c.$$.fragment, g), g.forEach(d), a.forEach(d)
			},
			m(t, a) {
				p(t, e, a),
					p(t, s, a),
					p(t, l, a),
					p(t, i, a),
					p(t, r, a),
					p(t, _, a),
					p(t, f, a),
					k(f, u),
					k(u, y),
					T(c, u, null),
					(w = !0)
			},
			p(t, a) {
				const g = {}
				a & 2 && (g.$$scope = { dirty: a, ctx: t }), c.$set(g)
			},
			i(t) {
				w || (q(c.$$.fragment, t), (w = !0))
			},
			o(t) {
				E(c.$$.fragment, t), (w = !1)
			},
			d(t) {
				t && (d(e), d(s), d(l), d(i), d(r), d(_), d(f)), V(c)
			}
		}
	)
}
function K(m) {
	let e, n
	const s = [m[0], M]
	let l = { $$slots: { default: [J] }, $$scope: { ctx: m } }
	for (let o = 0; o < s.length; o += 1) l = x(l, s[o])
	return (
		(e = new D({ props: l })),
		{
			c() {
				R(e.$$.fragment)
			},
			l(o) {
				S(e.$$.fragment, o)
			},
			m(o, i) {
				T(e, o, i), (n = !0)
			},
			p(o, [i]) {
				const r = i & 1 ? O(s, [i & 1 && j(o[0]), i & 0 && j(M)]) : {}
				i & 2 && (r.$$scope = { dirty: i, ctx: o }), e.$set(r)
			},
			i(o) {
				n || (q(e.$$.fragment, o), (n = !0))
			},
			o(o) {
				E(e.$$.fragment, o), (n = !1)
			},
			d(o) {
				V(e, o)
			}
		}
	)
}
const M = { title: 'PauseAI Protesters Code of Conduct' }
function Q(m, e, n) {
	return (
		(m.$$set = (s) => {
			n(0, (e = x(x({}, e), A(s))))
		}),
		(e = A(e)),
		[e]
	)
}
class ee extends B {
	constructor(e) {
		super(), N(this, e, Q, K, H, {})
	}
}
export { ee as default, M as metadata }
