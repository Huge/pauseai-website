import {
	s as v,
	c as p,
	H,
	o as b,
	p as I,
	f as d,
	q as O,
	j as m,
	k as t,
	m as u,
	n as P,
	l as S
} from './scheduler.D9JQr37X.js'
import { S as q, i as C } from './index.D-WnFt3a.js'
import { t as N, u as B } from './config.DERVHgho.js'
function j(r) {
	let a
	return {
		c() {
			;(a = p('meta')), this.h()
		},
		l(n) {
			;(a = d(n, 'META', { property: !0, content: !0 })), this.h()
		},
		h() {
			t(a, 'property', 'article:published_time'), t(a, 'content', r[2])
		},
		m(n, c) {
			S(n, a, c)
		},
		p(n, c) {
			c & 4 && t(a, 'content', n[2])
		},
		d(n) {
			n && m(a)
		}
	}
}
function J(r) {
	let a,
		n,
		c,
		h,
		f,
		s,
		g,
		y,
		i,
		A,
		_,
		M,
		E,
		T,
		k = `<script type="application/ld+json">
        ${JSON.stringify(r[4])}
    <\/script>`,
		w
	document.title = a = r[0]
	let o = r[2] && j(r)
	return {
		c() {
			;(n = p('meta')),
				(c = p('meta')),
				(h = p('meta')),
				(f = p('meta')),
				(s = p('meta')),
				(g = p('meta')),
				o && o.c(),
				(y = p('meta')),
				(i = p('meta')),
				(A = p('meta')),
				(_ = p('meta')),
				(M = p('meta')),
				(E = p('meta')),
				(T = new H(!1)),
				(w = b()),
				this.h()
		},
		l(l) {
			const e = I('svelte-6daau9', document.head)
			;(n = d(e, 'META', { name: !0, content: !0 })),
				(c = d(e, 'META', { property: !0, content: !0 })),
				(h = d(e, 'META', { property: !0, content: !0 })),
				(f = d(e, 'META', { property: !0, content: !0 })),
				(s = d(e, 'META', { property: !0, content: !0 })),
				(g = d(e, 'META', { property: !0, content: !0 })),
				o && o.l(e),
				(y = d(e, 'META', { property: !0, content: !0 })),
				(i = d(e, 'META', { property: !0, content: !0 })),
				(A = d(e, 'META', { property: !0, content: !0 })),
				(_ = d(e, 'META', { property: !0, content: !0 })),
				(M = d(e, 'META', { property: !0, content: !0 })),
				(E = d(e, 'META', { property: !0, content: !0 })),
				(T = O(e, !1)),
				(w = b()),
				e.forEach(m),
				this.h()
		},
		h() {
			t(n, 'name', 'description'),
				t(n, 'content', r[1]),
				t(c, 'property', 'og:type'),
				t(c, 'content', 'article'),
				t(h, 'property', 'og:title'),
				t(h, 'content', r[0]),
				t(f, 'property', 'og:description'),
				t(f, 'content', r[1]),
				t(s, 'property', 'og:image'),
				t(s, 'content', r[3]),
				t(g, 'property', 'og:site_name'),
				t(g, 'content', N),
				t(y, 'property', 'twitter:title'),
				t(y, 'content', r[0]),
				t(i, 'property', 'twitter:card'),
				t(i, 'content', 'summary_large_image'),
				t(A, 'property', 'twitter:image'),
				t(A, 'content', r[3]),
				t(_, 'property', 'twitter:description'),
				t(_, 'content', r[1]),
				t(M, 'property', 'twitter:site'),
				t(M, 'content', '@PauseAI'),
				t(E, 'property', 'twitter:creator'),
				t(E, 'content', '@PauseAI'),
				(T.a = w)
		},
		m(l, e) {
			u(document.head, n),
				u(document.head, c),
				u(document.head, h),
				u(document.head, f),
				u(document.head, s),
				u(document.head, g),
				o && o.m(document.head, null),
				u(document.head, y),
				u(document.head, i),
				u(document.head, A),
				u(document.head, _),
				u(document.head, M),
				u(document.head, E),
				T.m(k, document.head),
				u(document.head, w)
		},
		p(l, [e]) {
			e & 1 && a !== (a = l[0]) && (document.title = a),
				e & 2 && t(n, 'content', l[1]),
				e & 1 && t(h, 'content', l[0]),
				e & 2 && t(f, 'content', l[1]),
				l[2]
					? o
						? o.p(l, e)
						: ((o = j(l)), o.c(), o.m(y.parentNode, y))
					: o && (o.d(1), (o = null)),
				e & 1 && t(y, 'content', l[0]),
				e & 2 && t(_, 'content', l[1])
		},
		i: P,
		o: P,
		d(l) {
			l && T.d(),
				m(n),
				m(c),
				m(h),
				m(f),
				m(s),
				m(g),
				o && o.d(l),
				m(y),
				m(i),
				m(A),
				m(_),
				m(M),
				m(E),
				m(w)
		}
	}
}
function U(r, a, n) {
	let { title: c } = a,
		{ description: h } = a,
		{ date: f = void 0 } = a,
		{ image: s = '/Cover.jpg' } = a
	const g = s.startsWith('/') ? `${B}${s}` : s,
		y = {
			'@context': 'https://schema.org/',
			'@type': 'BlogPosting',
			headline: c,
			abstract: h,
			datePublished: f,
			image: { '@type': 'ImageObject', url: g }
		}
	return (
		(r.$$set = (i) => {
			'title' in i && n(0, (c = i.title)),
				'description' in i && n(1, (h = i.description)),
				'date' in i && n(2, (f = i.date)),
				'image' in i && n(5, (s = i.image))
		}),
		[c, h, f, g, y, s]
	)
}
class F extends q {
	constructor(a) {
		super(), C(this, a, U, J, v, { title: 0, description: 1, date: 2, image: 5 })
	}
}
export { F as P }
