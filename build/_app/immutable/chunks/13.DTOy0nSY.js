function __vite__mapDeps(indexes) {
	if (!__vite__mapDeps.viteFileDeps) {
		__vite__mapDeps.viteFileDeps = []
	}
	return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import {
	s as As,
	b as vs,
	c as Ts,
	p as ks,
	j as pe,
	d as Fs,
	f as bs,
	g as Ms,
	k as Ss,
	l as ye,
	n as Re,
	M as Hs
} from './scheduler.D9JQr37X.js'
import { g as Ds } from './globals.D0QH3NT1.js'
import { S as ws, i as Ns } from './index.D-WnFt3a.js'
import { _ as ys } from './preload-helper.D6kgxu3v.js'
var zs = Object.defineProperty,
	b = (e, t) => {
		for (var u in t) zs(e, u, { get: t[u], enumerable: !0 })
	}
function q() {}
function mu(e) {
	return e()
}
function ze() {
	return Object.create(null)
}
function Z(e) {
	e.forEach(mu)
}
function gu(e) {
	return typeof e == 'function'
}
function he(e, t) {
	return e != e ? t == t : e !== t || (e && typeof e == 'object') || typeof e == 'function'
}
var _e
function fe(e, t) {
	return _e || (_e = document.createElement('a')), (_e.href = t), e === _e.href
}
function js(e) {
	return Object.keys(e).length === 0
}
function R(e, t) {
	e.appendChild(t)
}
function T(e, t, u) {
	e.insertBefore(t, u || null)
}
function v(e) {
	e.parentNode && e.parentNode.removeChild(e)
}
function ie(e, t) {
	for (let u = 0; u < e.length; u += 1) e[u] && e[u].d(t)
}
function A(e) {
	return document.createElement(e)
}
function Os(e) {
	return document.createElementNS('http://www.w3.org/2000/svg', e)
}
function w(e) {
	return document.createTextNode(e)
}
function M() {
	return w(' ')
}
function ee() {
	return w('')
}
function W(e, t, u, r) {
	return e.addEventListener(t, u, r), () => e.removeEventListener(t, u, r)
}
function g(e, t, u) {
	u == null ? e.removeAttribute(t) : e.getAttribute(t) !== u && e.setAttribute(t, u)
}
function Us(e) {
	return Array.from(e.childNodes)
}
function j(e, t) {
	;(t = '' + t), e.data !== t && (e.data = t)
}
function je(e, t) {
	e.value = t ?? ''
}
function G(e, t, u) {
	e.classList[u ? 'add' : 'remove'](t)
}
var Is = class {
		constructor(e = !1) {
			;(this.is_svg = !1), (this.is_svg = e), (this.e = this.n = null)
		}
		c(e) {
			this.h(e)
		}
		m(e, t, u = null) {
			this.e ||
				(this.is_svg
					? (this.e = Os(t.nodeName))
					: (this.e = A(t.nodeType === 11 ? 'TEMPLATE' : t.nodeName)),
				(this.t = t.tagName !== 'TEMPLATE' ? t : t.content),
				this.c(e)),
				this.i(u)
		}
		h(e) {
			;(this.e.innerHTML = e),
				(this.n = Array.from(
					this.e.nodeName === 'TEMPLATE' ? this.e.content.childNodes : this.e.childNodes
				))
		}
		i(e) {
			for (let t = 0; t < this.n.length; t += 1) T(this.t, this.n[t], e)
		}
		p(e) {
			this.d(), this.h(e), this.i(this.a)
		}
		d() {
			this.n.forEach(v)
		}
	},
	se
function re(e) {
	se = e
}
function Cu() {
	if (!se) throw new Error('Function called outside component initialization')
	return se
}
function Ps(e) {
	Cu().$$.on_mount.push(e)
}
function Ls(e) {
	Cu().$$.on_destroy.push(e)
}
var X = [],
	le = [],
	$ = [],
	ve = [],
	qs = Promise.resolve(),
	Te = !1
function xs() {
	Te || ((Te = !0), qs.then(Bu))
}
function ke(e) {
	$.push(e)
}
function Vs(e) {
	ve.push(e)
}
var Ae = new Set(),
	Y = 0
function Bu() {
	if (Y !== 0) return
	const e = se
	do {
		try {
			for (; Y < X.length; ) {
				const t = X[Y]
				Y++, re(t), Ks(t.$$)
			}
		} catch (t) {
			throw ((X.length = 0), (Y = 0), t)
		}
		for (re(null), X.length = 0, Y = 0; le.length; ) le.pop()()
		for (let t = 0; t < $.length; t += 1) {
			const u = $[t]
			Ae.has(u) || (Ae.add(u), u())
		}
		$.length = 0
	} while (X.length)
	for (; ve.length; ) ve.pop()()
	;(Te = !1), Ae.clear(), re(e)
}
function Ks(e) {
	if (e.fragment !== null) {
		e.update(), Z(e.before_update)
		const t = e.dirty
		;(e.dirty = [-1]), e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(ke)
	}
}
function Gs(e) {
	const t = [],
		u = []
	$.forEach((r) => (e.indexOf(r) === -1 ? t.push(r) : u.push(r))), u.forEach((r) => r()), ($ = t)
}
var ce = new Set(),
	J
function ae() {
	J = { r: 0, c: [], p: J }
}
function ne() {
	J.r || Z(J.c), (J = J.p)
}
function y(e, t) {
	e && e.i && (ce.delete(e), e.i(t))
}
function P(e, t, u, r) {
	if (e && e.o) {
		if (ce.has(e)) return
		ce.add(e),
			J.c.push(() => {
				ce.delete(e), r && (u && e.d(1), r())
			}),
			e.o(t)
	} else r && r()
}
function Ws(e, t) {
	P(e, 1, 1, () => {
		t.delete(e.key)
	})
}
function Js(e, t, u, r, s, l, a, n, i, d, _, c) {
	let o = e.length,
		B = l.length,
		h = o
	const f = {}
	for (; h--; ) f[e[h].key] = h
	const C = [],
		E = new Map(),
		p = new Map(),
		k = []
	for (h = B; h--; ) {
		const N = c(s, l, h),
			O = u(N)
		let I = a.get(O)
		I ? r && k.push(() => I.p(N, t)) : ((I = d(O, N)), I.c()),
			E.set(O, (C[h] = I)),
			O in f && p.set(O, Math.abs(h - f[O]))
	}
	const F = new Set(),
		S = new Set()
	function L(N) {
		y(N, 1), N.m(n, _), a.set(N.key, N), (_ = N.first), B--
	}
	for (; o && B; ) {
		const N = C[B - 1],
			O = e[o - 1],
			I = N.key,
			V = O.key
		N === O
			? ((_ = N.first), o--, B--)
			: E.has(V)
				? !a.has(I) || F.has(I)
					? L(N)
					: S.has(V)
						? o--
						: p.get(I) > p.get(V)
							? (S.add(I), L(N))
							: (F.add(V), o--)
				: (i(O, a), o--)
	}
	for (; o--; ) {
		const N = e[o]
		E.has(N.key) || i(N, a)
	}
	for (; B; ) L(C[B - 1])
	return Z(k), C
}
function Zs(e, t, u) {
	const r = e.$$.props[t]
	r !== void 0 && ((e.$$.bound[r] = u), u(e.$$.ctx[r]))
}
function be(e) {
	e && e.c()
}
function de(e, t, u, r) {
	const { fragment: s, after_update: l } = e.$$
	s && s.m(t, u),
		r ||
			ke(() => {
				const a = e.$$.on_mount.map(mu).filter(gu)
				e.$$.on_destroy ? e.$$.on_destroy.push(...a) : Z(a), (e.$$.on_mount = [])
			}),
		l.forEach(ke)
}
function Ee(e, t) {
	const u = e.$$
	u.fragment !== null &&
		(Gs(u.after_update),
		Z(u.on_destroy),
		u.fragment && u.fragment.d(t),
		(u.on_destroy = u.fragment = null),
		(u.ctx = []))
}
function Ys(e, t) {
	e.$$.dirty[0] === -1 && (X.push(e), xs(), e.$$.dirty.fill(0)),
		(e.$$.dirty[(t / 31) | 0] |= 1 << t % 31)
}
function me(e, t, u, r, s, l, a, n = [-1]) {
	const i = se
	re(e)
	const d = (e.$$ = {
		fragment: null,
		ctx: [],
		props: l,
		update: q,
		not_equal: s,
		bound: ze(),
		on_mount: [],
		on_destroy: [],
		on_disconnect: [],
		before_update: [],
		after_update: [],
		context: new Map(t.context || (i ? i.$$.context : [])),
		callbacks: ze(),
		dirty: n,
		skip_bound: !1,
		root: t.target || i.$$.root
	})
	a && a(d.root)
	let _ = !1
	if (
		((d.ctx = u
			? u(e, t.props || {}, (c, o, ...B) => {
					const h = B.length ? B[0] : o
					return (
						d.ctx &&
							s(d.ctx[c], (d.ctx[c] = h)) &&
							(!d.skip_bound && d.bound[c] && d.bound[c](h), _ && Ys(e, c)),
						o
					)
				})
			: []),
		d.update(),
		(_ = !0),
		Z(d.before_update),
		(d.fragment = r ? r(d.ctx) : !1),
		t.target)
	) {
		if (t.hydrate) {
			const c = Us(t.target)
			d.fragment && d.fragment.l(c), c.forEach(v)
		} else d.fragment && d.fragment.c()
		t.intro && y(e.$$.fragment), de(e, t.target, t.anchor, t.customElement), Bu()
	}
	re(i)
}
var ge = class {
	$destroy() {
		Ee(this, 1), (this.$destroy = q)
	}
	$on(e, t) {
		if (!gu(t)) return q
		const u = this.$$.callbacks[e] || (this.$$.callbacks[e] = [])
		return (
			u.push(t),
			() => {
				const r = u.indexOf(t)
				r !== -1 && u.splice(r, 1)
			}
		)
	}
	$set(e) {
		this.$$set && !js(e) && ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1))
	}
}
function U(e) {
	const t = typeof e == 'string' ? e.charCodeAt(0) : e
	return (t >= 97 && t <= 122) || (t >= 65 && t <= 90)
}
function Q(e) {
	const t = typeof e == 'string' ? e.charCodeAt(0) : e
	return t >= 48 && t <= 57
}
function K(e) {
	return U(e) || Q(e)
}
var Xs = [
		'art-lojban',
		'cel-gaulish',
		'no-bok',
		'no-nyn',
		'zh-guoyu',
		'zh-hakka',
		'zh-min',
		'zh-min-nan',
		'zh-xiang'
	],
	Oe = {
		'en-gb-oed': 'en-GB-oxendict',
		'i-ami': 'ami',
		'i-bnn': 'bnn',
		'i-default': null,
		'i-enochian': null,
		'i-hak': 'hak',
		'i-klingon': 'tlh',
		'i-lux': 'lb',
		'i-mingo': null,
		'i-navajo': 'nv',
		'i-pwn': 'pwn',
		'i-tao': 'tao',
		'i-tay': 'tay',
		'i-tsu': 'tsu',
		'sgn-be-fr': 'sfb',
		'sgn-be-nl': 'vgt',
		'sgn-ch-de': 'sgg',
		'art-lojban': 'jbo',
		'cel-gaulish': null,
		'no-bok': 'nb',
		'no-nyn': 'nn',
		'zh-guoyu': 'cmn',
		'zh-hakka': 'hak',
		'zh-min': null,
		'zh-min-nan': 'nan',
		'zh-xiang': 'hsn'
	},
	Qs = {}.hasOwnProperty
function pu(e, t = {}) {
	const u = Ue(),
		r = String(e),
		s = r.toLowerCase()
	let l = 0
	if (e == null) throw new Error('Expected string, got `' + e + '`')
	if (Qs.call(Oe, s)) {
		const n = Oe[s]
		return (t.normalize === void 0 || t.normalize === null || t.normalize) && typeof n == 'string'
			? pu(n)
			: ((u[Xs.includes(s) ? 'regular' : 'irregular'] = r), u)
	}
	for (; U(s.charCodeAt(l)) && l < 9; ) l++
	if (l > 1 && l < 9) {
		if (((u.language = r.slice(0, l)), l < 4)) {
			let n = 0
			for (
				;
				s.charCodeAt(l) === 45 &&
				U(s.charCodeAt(l + 1)) &&
				U(s.charCodeAt(l + 2)) &&
				U(s.charCodeAt(l + 3)) &&
				!U(s.charCodeAt(l + 4));

			) {
				if (n > 2) return a(l, 3, 'Too many extended language subtags, expected at most 3 subtags')
				u.extendedLanguageSubtags.push(r.slice(l + 1, l + 4)), (l += 4), n++
			}
		}
		for (
			s.charCodeAt(l) === 45 &&
				U(s.charCodeAt(l + 1)) &&
				U(s.charCodeAt(l + 2)) &&
				U(s.charCodeAt(l + 3)) &&
				U(s.charCodeAt(l + 4)) &&
				!U(s.charCodeAt(l + 5)) &&
				((u.script = r.slice(l + 1, l + 5)), (l += 5)),
				s.charCodeAt(l) === 45 &&
					(U(s.charCodeAt(l + 1)) && U(s.charCodeAt(l + 2)) && !U(s.charCodeAt(l + 3))
						? ((u.region = r.slice(l + 1, l + 3)), (l += 3))
						: Q(s.charCodeAt(l + 1)) &&
							Q(s.charCodeAt(l + 2)) &&
							Q(s.charCodeAt(l + 3)) &&
							!Q(s.charCodeAt(l + 4)) &&
							((u.region = r.slice(l + 1, l + 4)), (l += 4)));
			s.charCodeAt(l) === 45;

		) {
			const n = l + 1
			let i = n
			for (; K(s.charCodeAt(i)); ) {
				if (i - n > 7) return a(i, 1, 'Too long variant, expected at most 8 characters')
				i++
			}
			if (i - n > 4 || (i - n > 3 && Q(s.charCodeAt(n)))) u.variants.push(r.slice(n, i)), (l = i)
			else break
		}
		for (
			;
			s.charCodeAt(l) === 45 &&
			!(
				s.charCodeAt(l + 1) === 120 ||
				!K(s.charCodeAt(l + 1)) ||
				s.charCodeAt(l + 2) !== 45 ||
				!K(s.charCodeAt(l + 3))
			);

		) {
			let n = l + 2,
				i = 0
			for (; s.charCodeAt(n) === 45 && K(s.charCodeAt(n + 1)) && K(s.charCodeAt(n + 2)); ) {
				const d = n + 1
				for (n = d + 2, i++; K(s.charCodeAt(n)); ) {
					if (n - d > 7) return a(n, 2, 'Too long extension, expected at most 8 characters')
					n++
				}
			}
			if (!i)
				return a(n, 4, 'Empty extension, extensions must have at least 2 characters of content')
			u.extensions.push({ singleton: r.charAt(l + 1), extensions: r.slice(l + 3, n).split('-') }),
				(l = n)
		}
	} else l = 0
	if (
		(l === 0 && s.charCodeAt(l) === 120) ||
		(s.charCodeAt(l) === 45 && s.charCodeAt(l + 1) === 120)
	) {
		l = l ? l + 2 : 1
		let n = l
		for (; s.charCodeAt(n) === 45 && K(s.charCodeAt(n + 1)); ) {
			const i = l + 1
			for (n = i; K(s.charCodeAt(n)); ) {
				if (n - i > 7) return a(n, 5, 'Too long private-use area, expected at most 8 characters')
				n++
			}
			u.privateuse.push(r.slice(l + 1, n)), (l = n)
		}
	}
	if (l !== r.length) return a(l, 6, 'Found superfluous content after tag')
	return u
	function a(n, i, d) {
		return t.warning && t.warning(d, i, n), t.forgiving ? u : Ue()
	}
}
function Ue() {
	return {
		language: null,
		extendedLanguageSubtags: [],
		script: null,
		region: null,
		variants: [],
		extensions: [],
		privateuse: [],
		irregular: null,
		regular: null
	}
}
function Ie(e, t, u) {
	const r = e.slice()
	return (r[8] = t[u][0]), (r[9] = t[u][1]), r
}
function $s(e) {
	let t,
		u,
		r,
		s,
		l,
		a = e[0] && Pe()
	return {
		c() {
			a && a.c(),
				(t = M()),
				(u = A('div')),
				(r = A('p')),
				(r.textContent = `${e[3](30)}`),
				(s = M()),
				(l = A('p')),
				(l.textContent = `${e[3](40)}`),
				g(r, 'class', 'pagefind-ui__result-title pagefind-ui__loading svelte-j9e30'),
				g(l, 'class', 'pagefind-ui__result-excerpt pagefind-ui__loading svelte-j9e30'),
				g(u, 'class', 'pagefind-ui__result-inner svelte-j9e30')
		},
		m(n, i) {
			a && a.m(n, i), T(n, t, i), T(n, u, i), R(u, r), R(u, s), R(u, l)
		},
		p(n, i) {
			n[0] ? a || ((a = Pe()), a.c(), a.m(t.parentNode, t)) : a && (a.d(1), (a = null))
		},
		d(n) {
			a && a.d(n), n && v(t), n && v(u)
		}
	}
}
function el(e) {
	var h
	let t,
		u,
		r,
		s,
		l = ((h = e[1].meta) == null ? void 0 : h.title) + '',
		a,
		n,
		i,
		d,
		_ = e[1].excerpt + '',
		c,
		o = e[0] && Le(e),
		B = e[2].length && xe(e)
	return {
		c() {
			var f
			o && o.c(),
				(t = M()),
				(u = A('div')),
				(r = A('p')),
				(s = A('a')),
				(a = w(l)),
				(i = M()),
				(d = A('p')),
				(c = M()),
				B && B.c(),
				g(s, 'class', 'pagefind-ui__result-link svelte-j9e30'),
				g(s, 'href', (n = ((f = e[1].meta) == null ? void 0 : f.url) || e[1].url)),
				g(r, 'class', 'pagefind-ui__result-title svelte-j9e30'),
				g(d, 'class', 'pagefind-ui__result-excerpt svelte-j9e30'),
				g(u, 'class', 'pagefind-ui__result-inner svelte-j9e30')
		},
		m(f, C) {
			o && o.m(f, C),
				T(f, t, C),
				T(f, u, C),
				R(u, r),
				R(r, s),
				R(s, a),
				R(u, i),
				R(u, d),
				(d.innerHTML = _),
				R(u, c),
				B && B.m(u, null)
		},
		p(f, C) {
			var E, p
			f[0]
				? o
					? o.p(f, C)
					: ((o = Le(f)), o.c(), o.m(t.parentNode, t))
				: o && (o.d(1), (o = null)),
				C & 2 && l !== (l = ((E = f[1].meta) == null ? void 0 : E.title) + '') && j(a, l),
				C & 2 &&
					n !== (n = ((p = f[1].meta) == null ? void 0 : p.url) || f[1].url) &&
					g(s, 'href', n),
				C & 2 && _ !== (_ = f[1].excerpt + '') && (d.innerHTML = _),
				f[2].length
					? B
						? B.p(f, C)
						: ((B = xe(f)), B.c(), B.m(u, null))
					: B && (B.d(1), (B = null))
		},
		d(f) {
			o && o.d(f), f && v(t), f && v(u), B && B.d()
		}
	}
}
function Pe(e) {
	let t
	return {
		c() {
			;(t = A('div')), g(t, 'class', 'pagefind-ui__result-thumb pagefind-ui__loading svelte-j9e30')
		},
		m(u, r) {
			T(u, t, r)
		},
		d(u) {
			u && v(t)
		}
	}
}
function Le(e) {
	let t,
		u = e[1].meta.image && qe(e)
	return {
		c() {
			;(t = A('div')), u && u.c(), g(t, 'class', 'pagefind-ui__result-thumb svelte-j9e30')
		},
		m(r, s) {
			T(r, t, s), u && u.m(t, null)
		},
		p(r, s) {
			r[1].meta.image
				? u
					? u.p(r, s)
					: ((u = qe(r)), u.c(), u.m(t, null))
				: u && (u.d(1), (u = null))
		},
		d(r) {
			r && v(t), u && u.d()
		}
	}
}
function qe(e) {
	let t, u, r
	return {
		c() {
			var s, l, a
			;(t = A('img')),
				g(t, 'class', 'pagefind-ui__result-image svelte-j9e30'),
				fe(t.src, (u = (s = e[1].meta) == null ? void 0 : s.image)) || g(t, 'src', u),
				g(
					t,
					'alt',
					(r =
						((l = e[1].meta) == null ? void 0 : l.image_alt) ||
						((a = e[1].meta) == null ? void 0 : a.title))
				)
		},
		m(s, l) {
			T(s, t, l)
		},
		p(s, l) {
			var a, n, i
			l & 2 && !fe(t.src, (u = (a = s[1].meta) == null ? void 0 : a.image)) && g(t, 'src', u),
				l & 2 &&
					r !==
						(r =
							((n = s[1].meta) == null ? void 0 : n.image_alt) ||
							((i = s[1].meta) == null ? void 0 : i.title)) &&
					g(t, 'alt', r)
		},
		d(s) {
			s && v(t)
		}
	}
}
function xe(e) {
	let t,
		u = e[2],
		r = []
	for (let s = 0; s < u.length; s += 1) r[s] = Ve(Ie(e, u, s))
	return {
		c() {
			t = A('ul')
			for (let s = 0; s < r.length; s += 1) r[s].c()
			g(t, 'class', 'pagefind-ui__result-tags svelte-j9e30')
		},
		m(s, l) {
			T(s, t, l)
			for (let a = 0; a < r.length; a += 1) r[a] && r[a].m(t, null)
		},
		p(s, l) {
			if (l & 4) {
				u = s[2]
				let a
				for (a = 0; a < u.length; a += 1) {
					const n = Ie(s, u, a)
					r[a] ? r[a].p(n, l) : ((r[a] = Ve(n)), r[a].c(), r[a].m(t, null))
				}
				for (; a < r.length; a += 1) r[a].d(1)
				r.length = u.length
			}
		},
		d(s) {
			s && v(t), ie(r, s)
		}
	}
}
function Ve(e) {
	let t,
		u = e[8].replace(/^(\w)/, Ke) + '',
		r,
		s,
		l = e[9] + '',
		a,
		n
	return {
		c() {
			;(t = A('li')),
				(r = w(u)),
				(s = w(': ')),
				(a = w(l)),
				(n = M()),
				g(t, 'class', 'pagefind-ui__result-tag svelte-j9e30')
		},
		m(i, d) {
			T(i, t, d), R(t, r), R(t, s), R(t, a), R(t, n)
		},
		p(i, d) {
			d & 4 && u !== (u = i[8].replace(/^(\w)/, Ke) + '') && j(r, u),
				d & 4 && l !== (l = i[9] + '') && j(a, l)
		},
		d(i) {
			i && v(t)
		}
	}
}
function ul(e) {
	let t
	function u(l, a) {
		return l[1] ? el : $s
	}
	let r = u(e),
		s = r(e)
	return {
		c() {
			;(t = A('li')), s.c(), g(t, 'class', 'pagefind-ui__result svelte-j9e30')
		},
		m(l, a) {
			T(l, t, a), s.m(t, null)
		},
		p(l, [a]) {
			r === (r = u(l)) && s ? s.p(l, a) : (s.d(1), (s = r(l)), s && (s.c(), s.m(t, null)))
		},
		i: q,
		o: q,
		d(l) {
			l && v(t), s.d()
		}
	}
}
var Ke = (e) => e.toLocaleUpperCase()
function tl(e, t, u) {
	let { show_images: r = !0 } = t,
		{ process_result: s = null } = t,
		{ result: l = { data: async () => {} } } = t
	const a = ['title', 'image', 'image_alt', 'url']
	let n,
		i = []
	const d = async (c) => {
			u(1, (n = await c.data())),
				u(1, (n = (s == null ? void 0 : s(n)) ?? n)),
				u(2, (i = Object.entries(n.meta).filter(([o]) => !a.includes(o))))
		},
		_ = (c = 30) => '. '.repeat(Math.floor(10 + Math.random() * c))
	return (
		(e.$$set = (c) => {
			'show_images' in c && u(0, (r = c.show_images)),
				'process_result' in c && u(4, (s = c.process_result)),
				'result' in c && u(5, (l = c.result))
		}),
		(e.$$.update = () => {
			e.$$.dirty & 32 && d(l)
		}),
		[r, n, i, _, s, l]
	)
}
var rl = class extends ge {
		constructor(e) {
			super(), me(this, e, tl, ul, he, { show_images: 0, process_result: 4, result: 5 })
		}
	},
	sl = rl
function Ge(e, t, u) {
	const r = e.slice()
	return (r[11] = t[u][0]), (r[12] = t[u][1]), r
}
function We(e, t, u) {
	const r = e.slice()
	return (r[15] = t[u]), r
}
function ll(e) {
	let t,
		u,
		r,
		s,
		l,
		a = e[0] && Je()
	return {
		c() {
			a && a.c(),
				(t = M()),
				(u = A('div')),
				(r = A('p')),
				(r.textContent = `${e[5](30)}`),
				(s = M()),
				(l = A('p')),
				(l.textContent = `${e[5](40)}`),
				g(r, 'class', 'pagefind-ui__result-title pagefind-ui__loading svelte-4xnkmf'),
				g(l, 'class', 'pagefind-ui__result-excerpt pagefind-ui__loading svelte-4xnkmf'),
				g(u, 'class', 'pagefind-ui__result-inner svelte-4xnkmf')
		},
		m(n, i) {
			a && a.m(n, i), T(n, t, i), T(n, u, i), R(u, r), R(u, s), R(u, l)
		},
		p(n, i) {
			n[0] ? a || ((a = Je()), a.c(), a.m(t.parentNode, t)) : a && (a.d(1), (a = null))
		},
		d(n) {
			a && a.d(n), n && v(t), n && v(u)
		}
	}
}
function al(e) {
	var C
	let t,
		u,
		r,
		s,
		l = ((C = e[1].meta) == null ? void 0 : C.title) + '',
		a,
		n,
		i,
		d,
		_,
		c = e[0] && Ze(e),
		o = e[4] && Xe(e),
		B = e[3],
		h = []
	for (let E = 0; E < B.length; E += 1) h[E] = Qe(We(e, B, E))
	let f = e[2].length && $e(e)
	return {
		c() {
			var E
			c && c.c(),
				(t = M()),
				(u = A('div')),
				(r = A('p')),
				(s = A('a')),
				(a = w(l)),
				(i = M()),
				o && o.c(),
				(d = M())
			for (let p = 0; p < h.length; p += 1) h[p].c()
			;(_ = M()),
				f && f.c(),
				g(s, 'class', 'pagefind-ui__result-link svelte-4xnkmf'),
				g(s, 'href', (n = ((E = e[1].meta) == null ? void 0 : E.url) || e[1].url)),
				g(r, 'class', 'pagefind-ui__result-title svelte-4xnkmf'),
				g(u, 'class', 'pagefind-ui__result-inner svelte-4xnkmf')
		},
		m(E, p) {
			c && c.m(E, p),
				T(E, t, p),
				T(E, u, p),
				R(u, r),
				R(r, s),
				R(s, a),
				R(u, i),
				o && o.m(u, null),
				R(u, d)
			for (let k = 0; k < h.length; k += 1) h[k] && h[k].m(u, null)
			R(u, _), f && f.m(u, null)
		},
		p(E, p) {
			var k, F
			if (
				(E[0]
					? c
						? c.p(E, p)
						: ((c = Ze(E)), c.c(), c.m(t.parentNode, t))
					: c && (c.d(1), (c = null)),
				p & 2 && l !== (l = ((k = E[1].meta) == null ? void 0 : k.title) + '') && j(a, l),
				p & 2 &&
					n !== (n = ((F = E[1].meta) == null ? void 0 : F.url) || E[1].url) &&
					g(s, 'href', n),
				E[4] ? (o ? o.p(E, p) : ((o = Xe(E)), o.c(), o.m(u, d))) : o && (o.d(1), (o = null)),
				p & 8)
			) {
				B = E[3]
				let S
				for (S = 0; S < B.length; S += 1) {
					const L = We(E, B, S)
					h[S] ? h[S].p(L, p) : ((h[S] = Qe(L)), h[S].c(), h[S].m(u, _))
				}
				for (; S < h.length; S += 1) h[S].d(1)
				h.length = B.length
			}
			E[2].length ? (f ? f.p(E, p) : ((f = $e(E)), f.c(), f.m(u, null))) : f && (f.d(1), (f = null))
		},
		d(E) {
			c && c.d(E), E && v(t), E && v(u), o && o.d(), ie(h, E), f && f.d()
		}
	}
}
function Je(e) {
	let t
	return {
		c() {
			;(t = A('div')), g(t, 'class', 'pagefind-ui__result-thumb pagefind-ui__loading svelte-4xnkmf')
		},
		m(u, r) {
			T(u, t, r)
		},
		d(u) {
			u && v(t)
		}
	}
}
function Ze(e) {
	let t,
		u = e[1].meta.image && Ye(e)
	return {
		c() {
			;(t = A('div')), u && u.c(), g(t, 'class', 'pagefind-ui__result-thumb svelte-4xnkmf')
		},
		m(r, s) {
			T(r, t, s), u && u.m(t, null)
		},
		p(r, s) {
			r[1].meta.image
				? u
					? u.p(r, s)
					: ((u = Ye(r)), u.c(), u.m(t, null))
				: u && (u.d(1), (u = null))
		},
		d(r) {
			r && v(t), u && u.d()
		}
	}
}
function Ye(e) {
	let t, u, r
	return {
		c() {
			var s, l, a
			;(t = A('img')),
				g(t, 'class', 'pagefind-ui__result-image svelte-4xnkmf'),
				fe(t.src, (u = (s = e[1].meta) == null ? void 0 : s.image)) || g(t, 'src', u),
				g(
					t,
					'alt',
					(r =
						((l = e[1].meta) == null ? void 0 : l.image_alt) ||
						((a = e[1].meta) == null ? void 0 : a.title))
				)
		},
		m(s, l) {
			T(s, t, l)
		},
		p(s, l) {
			var a, n, i
			l & 2 && !fe(t.src, (u = (a = s[1].meta) == null ? void 0 : a.image)) && g(t, 'src', u),
				l & 2 &&
					r !==
						(r =
							((n = s[1].meta) == null ? void 0 : n.image_alt) ||
							((i = s[1].meta) == null ? void 0 : i.title)) &&
					g(t, 'alt', r)
		},
		d(s) {
			s && v(t)
		}
	}
}
function Xe(e) {
	let t,
		u = e[1].excerpt + ''
	return {
		c() {
			;(t = A('p')), g(t, 'class', 'pagefind-ui__result-excerpt svelte-4xnkmf')
		},
		m(r, s) {
			T(r, t, s), (t.innerHTML = u)
		},
		p(r, s) {
			s & 2 && u !== (u = r[1].excerpt + '') && (t.innerHTML = u)
		},
		d(r) {
			r && v(t)
		}
	}
}
function Qe(e) {
	let t,
		u,
		r,
		s = e[15].title + '',
		l,
		a,
		n,
		i,
		d = e[15].excerpt + ''
	return {
		c() {
			;(t = A('div')),
				(u = A('p')),
				(r = A('a')),
				(l = w(s)),
				(n = M()),
				(i = A('p')),
				g(r, 'class', 'pagefind-ui__result-link svelte-4xnkmf'),
				g(r, 'href', (a = e[15].url)),
				g(u, 'class', 'pagefind-ui__result-title svelte-4xnkmf'),
				g(i, 'class', 'pagefind-ui__result-excerpt svelte-4xnkmf'),
				g(t, 'class', 'pagefind-ui__result-nested svelte-4xnkmf')
		},
		m(_, c) {
			T(_, t, c), R(t, u), R(u, r), R(r, l), R(t, n), R(t, i), (i.innerHTML = d)
		},
		p(_, c) {
			c & 8 && s !== (s = _[15].title + '') && j(l, s),
				c & 8 && a !== (a = _[15].url) && g(r, 'href', a),
				c & 8 && d !== (d = _[15].excerpt + '') && (i.innerHTML = d)
		},
		d(_) {
			_ && v(t)
		}
	}
}
function $e(e) {
	let t,
		u = e[2],
		r = []
	for (let s = 0; s < u.length; s += 1) r[s] = eu(Ge(e, u, s))
	return {
		c() {
			t = A('ul')
			for (let s = 0; s < r.length; s += 1) r[s].c()
			g(t, 'class', 'pagefind-ui__result-tags svelte-4xnkmf')
		},
		m(s, l) {
			T(s, t, l)
			for (let a = 0; a < r.length; a += 1) r[a] && r[a].m(t, null)
		},
		p(s, l) {
			if (l & 4) {
				u = s[2]
				let a
				for (a = 0; a < u.length; a += 1) {
					const n = Ge(s, u, a)
					r[a] ? r[a].p(n, l) : ((r[a] = eu(n)), r[a].c(), r[a].m(t, null))
				}
				for (; a < r.length; a += 1) r[a].d(1)
				r.length = u.length
			}
		},
		d(s) {
			s && v(t), ie(r, s)
		}
	}
}
function eu(e) {
	let t,
		u = e[11].replace(/^(\w)/, uu) + '',
		r,
		s,
		l = e[12] + '',
		a,
		n
	return {
		c() {
			;(t = A('li')),
				(r = w(u)),
				(s = w(': ')),
				(a = w(l)),
				(n = M()),
				g(t, 'class', 'pagefind-ui__result-tag svelte-4xnkmf')
		},
		m(i, d) {
			T(i, t, d), R(t, r), R(t, s), R(t, a), R(t, n)
		},
		p(i, d) {
			d & 4 && u !== (u = i[11].replace(/^(\w)/, uu) + '') && j(r, u),
				d & 4 && l !== (l = i[12] + '') && j(a, l)
		},
		d(i) {
			i && v(t)
		}
	}
}
function nl(e) {
	let t
	function u(l, a) {
		return l[1] ? al : ll
	}
	let r = u(e),
		s = r(e)
	return {
		c() {
			;(t = A('li')), s.c(), g(t, 'class', 'pagefind-ui__result svelte-4xnkmf')
		},
		m(l, a) {
			T(l, t, a), s.m(t, null)
		},
		p(l, [a]) {
			r === (r = u(l)) && s ? s.p(l, a) : (s.d(1), (s = r(l)), s && (s.c(), s.m(t, null)))
		},
		i: q,
		o: q,
		d(l) {
			l && v(t), s.d()
		}
	}
}
var uu = (e) => e.toLocaleUpperCase()
function il(e, t, u) {
	let { show_images: r = !0 } = t,
		{ process_result: s = null } = t,
		{ result: l = { data: async () => {} } } = t
	const a = ['title', 'image', 'image_alt', 'url']
	let n,
		i = [],
		d = [],
		_ = !1
	const c = (h, f) => {
			if (h.length <= f) return h
			const C = [...h]
				.sort((E, p) => p.locations.length - E.locations.length)
				.slice(0, 3)
				.map((E) => E.url)
			return h.filter((E) => C.includes(E.url))
		},
		o = async (h) => {
			var f, C, E
			u(1, (n = await h.data())),
				u(1, (n = (s == null ? void 0 : s(n)) ?? n)),
				u(2, (i = Object.entries(n.meta).filter(([p]) => !a.includes(p)))),
				Array.isArray(n.sub_results) &&
					(u(
						4,
						(_ =
							((C = (f = n.sub_results) == null ? void 0 : f[0]) == null ? void 0 : C.url) ===
							(((E = n.meta) == null ? void 0 : E.url) || n.url))
					),
					_ ? u(3, (d = c(n.sub_results.slice(1), 3))) : u(3, (d = c([...n.sub_results], 3))))
		},
		B = (h = 30) => '. '.repeat(Math.floor(10 + Math.random() * h))
	return (
		(e.$$set = (h) => {
			'show_images' in h && u(0, (r = h.show_images)),
				'process_result' in h && u(6, (s = h.process_result)),
				'result' in h && u(7, (l = h.result))
		}),
		(e.$$.update = () => {
			e.$$.dirty & 128 && o(l)
		}),
		[r, n, i, d, _, B, s, l]
	)
}
var ol = class extends ge {
		constructor(e) {
			super(), me(this, e, il, nl, he, { show_images: 0, process_result: 6, result: 7 })
		}
	},
	_l = ol
function tu(e, t, u) {
	const r = e.slice()
	return (r[9] = t[u][0]), (r[10] = t[u][1]), (r[11] = t), (r[12] = u), r
}
function ru(e, t, u) {
	const r = e.slice()
	return (r[13] = t[u][0]), (r[14] = t[u][1]), (r[15] = t), (r[16] = u), r
}
function su(e) {
	let t,
		u,
		r = e[3]('filters_label', e[4], e[5]) + '',
		s,
		l,
		a = Object.entries(e[1]),
		n = []
	for (let i = 0; i < a.length; i += 1) n[i] = nu(tu(e, a, i))
	return {
		c() {
			;(t = A('fieldset')), (u = A('legend')), (s = w(r)), (l = M())
			for (let i = 0; i < n.length; i += 1) n[i].c()
			g(u, 'class', 'pagefind-ui__filter-panel-label svelte-1v2r7ls'),
				g(t, 'class', 'pagefind-ui__filter-panel svelte-1v2r7ls')
		},
		m(i, d) {
			T(i, t, d), R(t, u), R(u, s), R(t, l)
			for (let _ = 0; _ < n.length; _ += 1) n[_] && n[_].m(t, null)
		},
		p(i, d) {
			if ((d & 56 && r !== (r = i[3]('filters_label', i[4], i[5]) + '') && j(s, r), d & 71)) {
				a = Object.entries(i[1])
				let _
				for (_ = 0; _ < a.length; _ += 1) {
					const c = tu(i, a, _)
					n[_] ? n[_].p(c, d) : ((n[_] = nu(c)), n[_].c(), n[_].m(t, null))
				}
				for (; _ < n.length; _ += 1) n[_].d(1)
				n.length = a.length
			}
		},
		d(i) {
			i && v(t), ie(n, i)
		}
	}
}
function lu(e) {
	let t,
		u,
		r,
		s,
		l,
		a,
		n,
		i,
		d = e[13] + '',
		_,
		c = e[14] + '',
		o,
		B,
		h,
		f,
		C,
		E
	function p() {
		e[8].call(u, e[9], e[13])
	}
	return {
		c() {
			;(t = A('div')),
				(u = A('input')),
				(a = M()),
				(n = A('label')),
				(i = new Is(!1)),
				(_ = w(' (')),
				(o = w(c)),
				(B = w(')')),
				(f = M()),
				g(u, 'class', 'pagefind-ui__filter-checkbox svelte-1v2r7ls'),
				g(u, 'type', 'checkbox'),
				g(u, 'id', (r = e[9] + '-' + e[13])),
				g(u, 'name', (s = e[9])),
				(u.__value = l = e[13]),
				(u.value = u.__value),
				(i.a = _),
				g(n, 'class', 'pagefind-ui__filter-label svelte-1v2r7ls'),
				g(n, 'for', (h = e[9] + '-' + e[13])),
				g(t, 'class', 'pagefind-ui__filter-value svelte-1v2r7ls'),
				G(t, 'pagefind-ui__filter-value--checked', e[0][`${e[9]}:${e[13]}`])
		},
		m(k, F) {
			T(k, t, F),
				R(t, u),
				(u.checked = e[0][`${e[9]}:${e[13]}`]),
				R(t, a),
				R(t, n),
				i.m(d, n),
				R(n, _),
				R(n, o),
				R(n, B),
				R(t, f),
				C || ((E = W(u, 'change', p)), (C = !0))
		},
		p(k, F) {
			;(e = k),
				F & 2 && r !== (r = e[9] + '-' + e[13]) && g(u, 'id', r),
				F & 2 && s !== (s = e[9]) && g(u, 'name', s),
				F & 2 && l !== (l = e[13]) && ((u.__value = l), (u.value = u.__value)),
				F & 3 && (u.checked = e[0][`${e[9]}:${e[13]}`]),
				F & 2 && d !== (d = e[13] + '') && i.p(d),
				F & 2 && c !== (c = e[14] + '') && j(o, c),
				F & 2 && h !== (h = e[9] + '-' + e[13]) && g(n, 'for', h),
				F & 3 && G(t, 'pagefind-ui__filter-value--checked', e[0][`${e[9]}:${e[13]}`])
		},
		d(k) {
			k && v(t), (C = !1), E()
		}
	}
}
function au(e) {
	let t,
		u = (e[2] || e[14] || e[0][`${e[9]}:${e[13]}`]) && lu(e)
	return {
		c() {
			u && u.c(), (t = ee())
		},
		m(r, s) {
			u && u.m(r, s), T(r, t, s)
		},
		p(r, s) {
			r[2] || r[14] || r[0][`${r[9]}:${r[13]}`]
				? u
					? u.p(r, s)
					: ((u = lu(r)), u.c(), u.m(t.parentNode, t))
				: u && (u.d(1), (u = null))
		},
		d(r) {
			u && u.d(r), r && v(t)
		}
	}
}
function nu(e) {
	let t,
		u,
		r = e[9].replace(/^(\w)/, iu) + '',
		s,
		l,
		a,
		n = e[9] + '',
		i,
		d,
		_ = Object.entries(e[10] || {}),
		c = []
	for (let o = 0; o < _.length; o += 1) c[o] = au(ru(e, _, o))
	return {
		c() {
			;(t = A('details')),
				(u = A('summary')),
				(s = M()),
				(l = A('fieldset')),
				(a = A('legend')),
				(i = M())
			for (let o = 0; o < c.length; o += 1) c[o].c()
			;(d = M()),
				g(u, 'class', 'pagefind-ui__filter-name svelte-1v2r7ls'),
				g(a, 'class', 'pagefind-ui__filter-group-label svelte-1v2r7ls'),
				g(l, 'class', 'pagefind-ui__filter-group svelte-1v2r7ls'),
				g(t, 'class', 'pagefind-ui__filter-block svelte-1v2r7ls'),
				(t.open = e[6])
		},
		m(o, B) {
			T(o, t, B), R(t, u), (u.innerHTML = r), R(t, s), R(t, l), R(l, a), (a.innerHTML = n), R(l, i)
			for (let h = 0; h < c.length; h += 1) c[h] && c[h].m(l, null)
			R(t, d)
		},
		p(o, B) {
			if (
				(B & 2 && r !== (r = o[9].replace(/^(\w)/, iu) + '') && (u.innerHTML = r),
				B & 2 && n !== (n = o[9] + '') && (a.innerHTML = n),
				B & 7)
			) {
				_ = Object.entries(o[10] || {})
				let h
				for (h = 0; h < _.length; h += 1) {
					const f = ru(o, _, h)
					c[h] ? c[h].p(f, B) : ((c[h] = au(f)), c[h].c(), c[h].m(l, null))
				}
				for (; h < c.length; h += 1) c[h].d(1)
				c.length = _.length
			}
			B & 64 && (t.open = o[6])
		},
		d(o) {
			o && v(t), ie(c, o)
		}
	}
}
function cl(e) {
	let t = e[1] && Object.entries(e[1]).length,
		u,
		r = t && su(e)
	return {
		c() {
			r && r.c(), (u = ee())
		},
		m(s, l) {
			r && r.m(s, l), T(s, u, l)
		},
		p(s, [l]) {
			l & 2 && (t = s[1] && Object.entries(s[1]).length),
				t ? (r ? r.p(s, l) : ((r = su(s)), r.c(), r.m(u.parentNode, u))) : r && (r.d(1), (r = null))
		},
		i: q,
		o: q,
		d(s) {
			r && r.d(s), s && v(u)
		}
	}
}
var iu = (e) => e.toLocaleUpperCase()
function fl(e, t, u) {
	let { available_filters: r = null } = t,
		{ show_empty_filters: s = !0 } = t,
		{ translate: l = () => '' } = t,
		{ automatic_translations: a = {} } = t,
		{ translations: n = {} } = t
	const i = {}
	let d = !1,
		_ = !1
	function c(o, B) {
		;(i[`${o}:${B}`] = this.checked), u(0, i)
	}
	return (
		(e.$$set = (o) => {
			'available_filters' in o && u(1, (r = o.available_filters)),
				'show_empty_filters' in o && u(2, (s = o.show_empty_filters)),
				'translate' in o && u(3, (l = o.translate)),
				'automatic_translations' in o && u(4, (a = o.automatic_translations)),
				'translations' in o && u(5, (n = o.translations))
		}),
		(e.$$.update = () => {
			if (e.$$.dirty & 130 && r && !d) {
				u(7, (d = !0))
				let o = Object.entries(r || {})
				if (o.length === 1) {
					let B = Object.entries(o[0][1])
					;(B == null ? void 0 : B.length) <= 6 && u(6, (_ = !0))
				}
			}
		}),
		[i, r, s, l, a, n, _, d, c]
	)
}
var hl = class extends ge {
		constructor(e) {
			super(),
				me(this, e, fl, cl, he, {
					available_filters: 1,
					show_empty_filters: 2,
					translate: 3,
					automatic_translations: 4,
					translations: 5,
					selected_filters: 0
				})
		}
		get selected_filters() {
			return this.$$.ctx[0]
		}
	},
	dl = hl,
	Ru = {}
b(Ru, {
	comments: () => vu,
	default: () => El,
	direction: () => Tu,
	strings: () => ku,
	thanks_to: () => Au
})
var Au = 'Jan Claasen <jan@cloudcannon.com>',
	vu = '',
	Tu = 'ltr',
	ku = {
		placeholder: 'Soek',
		clear_search: 'Opruim',
		load_more: 'Laai nog resultate',
		search_label: 'Soek hierdie webwerf',
		filters_label: 'Filters',
		zero_results: 'Geen resultate vir [SEARCH_TERM]',
		many_results: '[COUNT] resultate vir [SEARCH_TERM]',
		one_result: '[COUNT] resultate vir [SEARCH_TERM]',
		alt_search:
			'Geen resultate vir [SEARCH_TERM]. Toon resultate vir [DIFFERENT_TERM] in plaas daarvan',
		search_suggestion:
			'Geen resultate vir [SEARCH_TERM]. Probeer eerder een van die volgende terme:',
		searching: 'Soek vir [SEARCH_TERM]'
	},
	El = { thanks_to: Au, comments: vu, direction: Tu, strings: ku },
	Fu = {}
b(Fu, {
	comments: () => Mu,
	default: () => ml,
	direction: () => Su,
	strings: () => Hu,
	thanks_to: () => bu
})
var bu = 'Maruf Alom <mail@marufalom.com>',
	Mu = '',
	Su = 'ltr',
	Hu = {
		placeholder: 'অনুসন্ধান করুন',
		clear_search: 'মুছে ফেলুন',
		load_more: 'আরো ফলাফল দেখুন',
		search_label: 'এই ওয়েবসাইটে অনুসন্ধান করুন',
		filters_label: 'ফিল্টার',
		zero_results: '[SEARCH_TERM] এর জন্য কিছু খুঁজে পাওয়া যায়নি',
		many_results: '[COUNT]-টি ফলাফল পাওয়া গিয়েছে [SEARCH_TERM] এর জন্য',
		one_result: '[COUNT]-টি ফলাফল পাওয়া গিয়েছে [SEARCH_TERM] এর জন্য',
		alt_search:
			'কোন কিছু খুঁজে পাওয়া যায়নি [SEARCH_TERM] এর জন্য. পরিবর্তে [DIFFERENT_TERM] এর জন্য দেখানো হচ্ছে',
		search_suggestion:
			'কোন কিছু খুঁজে পাওয়া যায়নি [SEARCH_TERM] এর বিষয়ে. নিন্মের বিষয়বস্তু খুঁজে দেখুন:',
		searching: 'অনুসন্ধান চলছে [SEARCH_TERM]...'
	},
	ml = { thanks_to: bu, comments: Mu, direction: Su, strings: Hu },
	Du = {}
b(Du, {
	comments: () => Nu,
	default: () => gl,
	direction: () => yu,
	strings: () => zu,
	thanks_to: () => wu
})
var wu = 'Pablo Villaverde <https://github.com/pvillaverde>',
	Nu = '',
	yu = 'ltr',
	zu = {
		placeholder: 'Cerca',
		clear_search: 'Netejar',
		load_more: 'Veure mées resultats',
		search_label: 'Cerca en aquest lloc',
		filters_label: 'Filtres',
		zero_results: 'No es van trobar resultats per [SEARCH_TERM]',
		many_results: '[COUNT] resultats trobats per [SEARCH_TERM]',
		one_result: '[COUNT] resultat trobat per [SEARCH_TERM]',
		alt_search:
			'No es van trobar resultats per [SEARCH_TERM]. Mostrant al seu lloc resultats per [DIFFERENT_TERM]',
		search_suggestion:
			'No es van trobar resultats per [SEARCH_TERM]. Proveu una de les cerques següents:',
		searching: 'Cercant [SEARCH_TERM]...'
	},
	gl = { thanks_to: wu, comments: Nu, direction: yu, strings: zu },
	ju = {}
b(ju, {
	comments: () => Uu,
	default: () => Cl,
	direction: () => Iu,
	strings: () => Pu,
	thanks_to: () => Ou
})
var Ou = 'Jonas Smedegaard <dr@jones.dk>',
	Uu = '',
	Iu = 'ltr',
	Pu = {
		placeholder: 'Søg',
		clear_search: 'Nulstil',
		load_more: 'Indlæs flere resultater',
		search_label: 'Søg på dette website',
		filters_label: 'Filtre',
		zero_results: 'Ingen resultater for [SEARCH_TERM]',
		many_results: '[COUNT] resultater for [SEARCH_TERM]',
		one_result: '[COUNT] resultat for [SEARCH_TERM]',
		alt_search:
			'Ingen resultater for [SEARCH_TERM]. Viser resultater for [DIFFERENT_TERM] i stedet',
		search_suggestion: 'Ingen resultater for [SEARCH_TERM]. Prøv et af disse søgeord i stedet:',
		searching: 'Søger efter [SEARCH_TERM]...'
	},
	Cl = { thanks_to: Ou, comments: Uu, direction: Iu, strings: Pu },
	Lu = {}
b(Lu, {
	comments: () => xu,
	default: () => Bl,
	direction: () => Vu,
	strings: () => Ku,
	thanks_to: () => qu
})
var qu = 'Jan Claasen <jan@cloudcannon.com>',
	xu = '',
	Vu = 'ltr',
	Ku = {
		placeholder: 'Suche',
		clear_search: 'Löschen',
		load_more: 'Mehr Ergebnisse laden',
		search_label: 'Suche diese Seite',
		filters_label: 'Filter',
		zero_results: 'Keine Ergebnisse für [SEARCH_TERM]',
		many_results: '[COUNT] Ergebnisse für [SEARCH_TERM]',
		one_result: '[COUNT] Ergebnis für [SEARCH_TERM]',
		alt_search:
			'Keine Ergebnisse für [SEARCH_TERM]. Stattdessen werden Ergebnisse für [DIFFERENT_TERM] angezeigt',
		search_suggestion:
			'Keine Ergebnisse für [SEARCH_TERM]. Versuchen Sie eine der folgenden Suchen:',
		searching: 'Suche für [SEARCH_TERM]'
	},
	Bl = { thanks_to: qu, comments: xu, direction: Vu, strings: Ku },
	Gu = {}
b(Gu, {
	comments: () => Ju,
	default: () => pl,
	direction: () => Zu,
	strings: () => Yu,
	thanks_to: () => Wu
})
var Wu = 'Liam Bigelow <liam@cloudcannon.com>',
	Ju = '',
	Zu = 'ltr',
	Yu = {
		placeholder: 'Search',
		clear_search: 'Clear',
		load_more: 'Load more results',
		search_label: 'Search this site',
		filters_label: 'Filters',
		zero_results: 'No results for [SEARCH_TERM]',
		many_results: '[COUNT] results for [SEARCH_TERM]',
		one_result: '[COUNT] result for [SEARCH_TERM]',
		alt_search: 'No results for [SEARCH_TERM]. Showing results for [DIFFERENT_TERM] instead',
		search_suggestion: 'No results for [SEARCH_TERM]. Try one of the following searches:',
		searching: 'Searching for [SEARCH_TERM]...'
	},
	pl = { thanks_to: Wu, comments: Ju, direction: Zu, strings: Yu },
	Xu = {}
b(Xu, {
	comments: () => $u,
	default: () => Rl,
	direction: () => et,
	strings: () => ut,
	thanks_to: () => Qu
})
var Qu = 'Pablo Villaverde <https://github.com/pvillaverde>',
	$u = '',
	et = 'ltr',
	ut = {
		placeholder: 'Buscar',
		clear_search: 'Limpiar',
		load_more: 'Ver más resultados',
		search_label: 'Buscar en este sitio',
		filters_label: 'Filtros',
		zero_results: 'No se encontraron resultados para [SEARCH_TERM]',
		many_results: '[COUNT] resultados encontrados para [SEARCH_TERM]',
		one_result: '[COUNT] resultado encontrado para [SEARCH_TERM]',
		alt_search:
			'No se encontraron resultados para [SEARCH_TERM]. Mostrando en su lugar resultados para [DIFFERENT_TERM]',
		search_suggestion:
			'No se encontraron resultados para [SEARCH_TERM]. Prueba una de las siguientes búsquedas:',
		searching: 'Buscando [SEARCH_TERM]...'
	},
	Rl = { thanks_to: Qu, comments: $u, direction: et, strings: ut },
	tt = {}
b(tt, {
	comments: () => st,
	default: () => Al,
	direction: () => lt,
	strings: () => at,
	thanks_to: () => rt
})
var rt = 'Valtteri Laitinen <dev@valtlai.fi>',
	st = '',
	lt = 'ltr',
	at = {
		placeholder: 'Haku',
		clear_search: 'Tyhjennä',
		load_more: 'Lataa lisää tuloksia',
		search_label: 'Hae tältä sivustolta',
		filters_label: 'Suodattimet',
		zero_results: 'Ei tuloksia haulle [SEARCH_TERM]',
		many_results: '[COUNT] tulosta haulle [SEARCH_TERM]',
		one_result: '[COUNT] tulos haulle [SEARCH_TERM]',
		alt_search:
			'Ei tuloksia haulle [SEARCH_TERM]. Näytetään tulokset sen sijaan haulle [DIFFERENT_TERM]',
		search_suggestion: 'Ei tuloksia haulle [SEARCH_TERM]. Kokeile jotain seuraavista:',
		searching: 'Haetaan [SEARCH_TERM]...'
	},
	Al = { thanks_to: rt, comments: st, direction: lt, strings: at },
	nt = {}
b(nt, {
	comments: () => ot,
	default: () => vl,
	direction: () => _t,
	strings: () => ct,
	thanks_to: () => it
})
var it = 'Nicolas Friedli <nicolas@theologique.ch>',
	ot = '',
	_t = 'ltr',
	ct = {
		placeholder: 'Rechercher',
		clear_search: 'Nettoyer',
		load_more: 'Charger plus de résultats',
		search_label: 'Recherche sur ce site',
		filters_label: 'Filtres',
		zero_results: 'Pas de résultat pour [SEARCH_TERM]',
		many_results: '[COUNT] résultats pour [SEARCH_TERM]',
		one_result: '[COUNT] résultat pour [SEARCH_TERM]',
		alt_search:
			'Pas de résultat pour [SEARCH_TERM]. Montre les résultats pour [DIFFERENT_TERM] à la place',
		search_suggestion: 'Pas de résultat pour [SEARCH_TERM]. Essayer une des recherches suivantes:',
		searching: 'Recherche [SEARCH_TERM]...'
	},
	vl = { thanks_to: it, comments: ot, direction: _t, strings: ct },
	ft = {}
b(ft, {
	comments: () => dt,
	default: () => Tl,
	direction: () => Et,
	strings: () => mt,
	thanks_to: () => ht
})
var ht = 'Pablo Villaverde <https://github.com/pvillaverde>',
	dt = '',
	Et = 'ltr',
	mt = {
		placeholder: 'Buscar',
		clear_search: 'Limpar',
		load_more: 'Ver máis resultados',
		search_label: 'Buscar neste sitio',
		filters_label: 'Filtros',
		zero_results: 'Non se atoparon resultados para [SEARCH_TERM]',
		many_results: '[COUNT] resultados atopados para [SEARCH_TERM]',
		one_result: '[COUNT] resultado atopado para [SEARCH_TERM]',
		alt_search:
			'Non se atoparon resultados para [SEARCH_TERM]. Amosando no seu lugar resultados para [DIFFERENT_TERM]',
		search_suggestion:
			'Non se atoparon resultados para [SEARCH_TERM]. Probe unha das seguintes pesquisas:',
		searching: 'Buscando [SEARCH_TERM]...'
	},
	Tl = { thanks_to: ht, comments: dt, direction: Et, strings: mt },
	gt = {}
b(gt, {
	comments: () => Bt,
	default: () => kl,
	direction: () => pt,
	strings: () => Rt,
	thanks_to: () => Ct
})
var Ct = 'Amit Yadav <amit@thetechbasket.com>',
	Bt = '',
	pt = 'ltr',
	Rt = {
		placeholder: 'खोजें',
		clear_search: 'साफ करें',
		load_more: 'और अधिक परिणाम लोड करें',
		search_label: 'इस साइट में खोजें',
		filters_label: 'फ़िल्टर',
		zero_results: 'कोई परिणाम [SEARCH_TERM] के लिए नहीं मिला',
		many_results: '[COUNT] परिणाम [SEARCH_TERM] के लिए मिले',
		one_result: '[COUNT] परिणाम [SEARCH_TERM] के लिए मिला',
		alt_search:
			'[SEARCH_TERM] के लिए कोई परिणाम नहीं मिला। इसके बजाय [DIFFERENT_TERM] के लिए परिणाम दिखा रहा है',
		search_suggestion:
			'[SEARCH_TERM] के लिए कोई परिणाम नहीं मिला। निम्नलिखित खोजों में से कोई एक आज़माएं:',
		searching: '[SEARCH_TERM] की खोज की जा रही है...'
	},
	kl = { thanks_to: Ct, comments: Bt, direction: pt, strings: Rt },
	At = {}
b(At, {
	comments: () => Tt,
	default: () => Fl,
	direction: () => kt,
	strings: () => Ft,
	thanks_to: () => vt
})
var vt = 'Diomed <https://github.com/diomed>',
	Tt = '',
	kt = 'ltr',
	Ft = {
		placeholder: 'Traži',
		clear_search: 'Očisti',
		load_more: 'Učitaj više rezultata',
		search_label: 'Pretraži ovu stranicu',
		filters_label: 'Filteri',
		zero_results: 'Nema rezultata za [SEARCH_TERM]',
		many_results: '[COUNT] rezultata za [SEARCH_TERM]',
		one_result: '[COUNT] rezultat za [SEARCH_TERM]',
		alt_search: 'Nema rezultata za [SEARCH_TERM]. Prikazujem rezultate za [DIFFERENT_TERM]',
		search_suggestion: 'Nema rezultata za [SEARCH_TERM]. Pokušaj s jednom od ovih pretraga:',
		searching: 'Pretražujem [SEARCH_TERM]...'
	},
	Fl = { thanks_to: vt, comments: Tt, direction: kt, strings: Ft },
	bt = {}
b(bt, {
	comments: () => St,
	default: () => bl,
	direction: () => Ht,
	strings: () => Dt,
	thanks_to: () => Mt
})
var Mt = 'Adam Laki <info@adamlaki.com>',
	St = '',
	Ht = 'ltr',
	Dt = {
		placeholder: 'Keresés',
		clear_search: 'Törlés',
		load_more: 'További találatok betöltése',
		search_label: 'Keresés az oldalon',
		filters_label: 'Szűrés',
		zero_results: 'Nincs találat a(z) [SEARCH_TERM] kifejezésre',
		many_results: '[COUNT] db találat a(z) [SEARCH_TERM] kifejezésre',
		one_result: '[COUNT] db találat a(z) [SEARCH_TERM] kifejezésre',
		alt_search:
			'Nincs találat a(z) [SEARCH_TERM] kifejezésre. Találatok mutatása inkább a(z) [DIFFERENT_TERM] kifejezésre',
		search_suggestion:
			'Nincs találat a(z) [SEARCH_TERM] kifejezésre. Próbáld meg a következő keresések egyikét:',
		searching: 'Keresés a(z) [SEARCH_TERM] kifejezésre...'
	},
	bl = { thanks_to: Mt, comments: St, direction: Ht, strings: Dt },
	wt = {}
b(wt, {
	comments: () => yt,
	default: () => Ml,
	direction: () => zt,
	strings: () => jt,
	thanks_to: () => Nt
})
var Nt = 'Nixentric',
	yt = '',
	zt = 'ltr',
	jt = {
		placeholder: 'Cari',
		clear_search: 'Bersihkan',
		load_more: 'Muat lebih banyak hasil',
		search_label: 'Telusuri situs ini',
		filters_label: 'Filter',
		zero_results: '[SEARCH_TERM] tidak ditemukan',
		many_results: 'Ditemukan [COUNT] hasil untuk [SEARCH_TERM]',
		one_result: 'Ditemukan [COUNT] hasil untuk [SEARCH_TERM]',
		alt_search:
			'[SEARCH_TERM] tidak ditemukan. Menampilkan hasil [DIFFERENT_TERM] sebagai gantinya',
		search_suggestion: '[SEARCH_TERM] tidak ditemukan. Coba salah satu pencarian berikut ini:',
		searching: 'Mencari [SEARCH_TERM]...'
	},
	Ml = { thanks_to: Nt, comments: yt, direction: zt, strings: jt },
	Ot = {}
b(Ot, {
	comments: () => It,
	default: () => Sl,
	direction: () => Pt,
	strings: () => Lt,
	thanks_to: () => Ut
})
var Ut = 'Cosette Bruhns Alonso, Andrew Janco <apjanco@upenn.edu>',
	It = '',
	Pt = 'ltr',
	Lt = {
		placeholder: 'Cerca',
		clear_search: 'Cancella la cronologia',
		load_more: 'Mostra più risultati',
		search_label: 'Cerca nel sito',
		filters_label: 'Filtri di ricerca',
		zero_results: 'Nessun risultato per [SEARCH_TERM]',
		many_results: '[COUNT] risultati per [SEARCH_TERM]',
		one_result: '[COUNT] risultato per [SEARCH_TERM]',
		alt_search:
			'Nessun risultato per [SEARCH_TERM]. Mostrando risultati per [DIFFERENT_TERM] come alternativa.',
		search_suggestion: 'Nessun risultato per [SEARCH_TERM]. Prova una delle seguenti ricerche:',
		searching: 'Cercando [SEARCH_TERM]...'
	},
	Sl = { thanks_to: Ut, comments: It, direction: Pt, strings: Lt },
	qt = {}
b(qt, {
	comments: () => Vt,
	default: () => Hl,
	direction: () => Kt,
	strings: () => Gt,
	thanks_to: () => xt
})
var xt = 'Tate',
	Vt = '',
	Kt = 'ltr',
	Gt = {
		placeholder: '検索',
		clear_search: '消す',
		load_more: 'もっと読み込む',
		search_label: 'このサイトを検索',
		filters_label: 'フィルタ',
		zero_results: '[SEARCH_TERM]の検索に一致する件はありませんでした',
		many_results: '[SEARCH_TERM]の[COUNT]件の検索結果',
		one_result: '[SEARCH_TERM]の[COUNT]件の検索結果',
		alt_search:
			'[SEARCH_TERM]の検索に一致する件はありませんでした。[DIFFERENT_TERM]の検索結果を表示しています',
		search_suggestion:
			'[SEARCH_TERM]の検索に一致する件はありませんでした。次のいずれかの検索を試してください',
		searching: '[SEARCH_TERM]を検索しています'
	},
	Hl = { thanks_to: xt, comments: Vt, direction: Kt, strings: Gt },
	Wt = {}
b(Wt, {
	comments: () => Zt,
	default: () => Dl,
	direction: () => Yt,
	strings: () => Xt,
	thanks_to: () => Jt
})
var Jt = '',
	Zt = '',
	Yt = 'ltr',
	Xt = {
		placeholder: 'Rapu',
		clear_search: 'Whakakore',
		load_more: 'Whakauta ētahi otinga kē',
		search_label: 'Rapu',
		filters_label: 'Tātari',
		zero_results: 'Otinga kore ki [SEARCH_TERM]',
		many_results: '[COUNT] otinga ki [SEARCH_TERM]',
		one_result: '[COUNT] otinga ki [SEARCH_TERM]',
		alt_search: 'Otinga kore ki [SEARCH_TERM]. Otinga kē ki [DIFFERENT_TERM]',
		search_suggestion: 'Otinga kore ki [SEARCH_TERM]. whakamātau ki ngā mea atu:',
		searching: 'Rapu ki [SEARCH_TERM]...'
	},
	Dl = { thanks_to: Jt, comments: Zt, direction: Yt, strings: Xt },
	Qt = {}
b(Qt, {
	comments: () => er,
	default: () => wl,
	direction: () => ur,
	strings: () => tr,
	thanks_to: () => $t
})
var $t = 'Paul van Brouwershaven',
	er = '',
	ur = 'ltr',
	tr = {
		placeholder: 'Zoeken',
		clear_search: 'Reset',
		load_more: 'Meer resultaten laden',
		search_label: 'Doorzoek deze site',
		filters_label: 'Filters',
		zero_results: 'Geen resultaten voor [SEARCH_TERM]',
		many_results: '[COUNT] resultaten voor [SEARCH_TERM]',
		one_result: '[COUNT] resultaat voor [SEARCH_TERM]',
		alt_search:
			'Geen resultaten voor [SEARCH_TERM]. In plaats daarvan worden resultaten voor [DIFFERENT_TERM] weergegeven',
		search_suggestion:
			'Geen resultaten voor [SEARCH_TERM]. Probeer een van de volgende zoekopdrachten:',
		searching: 'Zoeken naar [SEARCH_TERM]...'
	},
	wl = { thanks_to: $t, comments: er, direction: ur, strings: tr },
	rr = {}
b(rr, {
	comments: () => lr,
	default: () => Nl,
	direction: () => ar,
	strings: () => nr,
	thanks_to: () => sr
})
var sr = 'Christopher Wingate',
	lr = '',
	ar = 'ltr',
	nr = {
		placeholder: 'Søk',
		clear_search: 'Fjern',
		load_more: 'Last flere resultater',
		search_label: 'Søk på denne siden',
		filters_label: 'Filtre',
		zero_results: 'Ingen resultater for [SEARCH_TERM]',
		many_results: '[COUNT] resultater for [SEARCH_TERM]',
		one_result: '[COUNT] resultat for [SEARCH_TERM]',
		alt_search:
			'Ingen resultater for [SEARCH_TERM]. Viser resultater for [DIFFERENT_TERM] i stedet',
		search_suggestion: 'Ingen resultater for [SEARCH_TERM]. Prøv en av disse søkeordene i stedet:',
		searching: 'Søker etter [SEARCH_TERM]'
	},
	Nl = { thanks_to: sr, comments: lr, direction: ar, strings: nr },
	ir = {}
b(ir, {
	comments: () => _r,
	default: () => yl,
	direction: () => cr,
	strings: () => fr,
	thanks_to: () => or
})
var or = '',
	_r = '',
	cr = 'ltr',
	fr = {
		placeholder: 'Szukaj',
		clear_search: 'Wyczyść',
		load_more: 'Załaduj więcej',
		search_label: 'Przeszukaj tę stronę',
		filters_label: 'Filtry',
		zero_results: 'Brak wyników dla [SEARCH_TERM]',
		many_results: '[COUNT] wyników dla [SEARCH_TERM]',
		one_result: '[COUNT] wynik dla [SEARCH_TERM]',
		alt_search: 'Brak wyników dla [SEARCH_TERM]. Wyświetlam wyniki dla [DIFFERENT_TERM]',
		search_suggestion: 'Brak wyników dla [SEARCH_TERM]. Pokrewne wyniki wyszukiwania:',
		searching: 'Szukam [SEARCH_TERM]...'
	},
	yl = { thanks_to: or, comments: _r, direction: cr, strings: fr },
	hr = {}
b(hr, {
	comments: () => Er,
	default: () => zl,
	direction: () => mr,
	strings: () => gr,
	thanks_to: () => dr
})
var dr = 'Jonatah',
	Er = '',
	mr = 'ltr',
	gr = {
		placeholder: 'Pesquisar',
		clear_search: 'Limpar',
		load_more: 'Ver mais resultados',
		search_label: 'Pesquisar',
		filters_label: 'Filtros',
		zero_results: 'Nenhum resultado encontrado para [SEARCH_TERM]',
		many_results: '[COUNT] resultados encontrados para [SEARCH_TERM]',
		one_result: '[COUNT] resultado encontrado para [SEARCH_TERM]',
		alt_search:
			'Nenhum resultado encontrado para [SEARCH_TERM]. Exibindo resultados para [DIFFERENT_TERM]',
		search_suggestion:
			'Nenhum resultado encontrado para [SEARCH_TERM]. Tente uma das seguintes pesquisas:',
		searching: 'Pesquisando por [SEARCH_TERM]...'
	},
	zl = { thanks_to: dr, comments: Er, direction: mr, strings: gr },
	Cr = {}
b(Cr, {
	comments: () => pr,
	default: () => jl,
	direction: () => Rr,
	strings: () => Ar,
	thanks_to: () => Br
})
var Br = 'Aleksandr Gordeev',
	pr = '',
	Rr = 'ltr',
	Ar = {
		placeholder: 'Поиск',
		clear_search: 'Очистить поле',
		load_more: 'Загрузить еще',
		search_label: 'Поиск по сайту',
		filters_label: 'Фильтры',
		zero_results: 'Ничего не найдено по запросу: [SEARCH_TERM]',
		many_results: '[COUNT] результатов по запросу: [SEARCH_TERM]',
		one_result: '[COUNT] результат по запросу: [SEARCH_TERM]',
		alt_search:
			'Ничего не найдено по запросу: [SEARCH_TERM]. Показаны результаты по запросу: [DIFFERENT_TERM]',
		search_suggestion:
			'Ничего не найдено по запросу: [SEARCH_TERM]. Попробуйте один из следующих вариантов',
		searching: 'Поиск по запросу: [SEARCH_TERM]'
	},
	jl = { thanks_to: Br, comments: pr, direction: Rr, strings: Ar },
	vr = {}
b(vr, {
	comments: () => kr,
	default: () => Ol,
	direction: () => Fr,
	strings: () => br,
	thanks_to: () => Tr
})
var Tr = 'Andrija Sagicc',
	kr = '',
	Fr = 'ltr',
	br = {
		placeholder: 'Претрага',
		clear_search: 'Брисање',
		load_more: 'Приказ више резултата',
		search_label: 'Претрага сајта',
		filters_label: 'Филтери',
		zero_results: 'Нема резултата за [SEARCH_TERM]',
		many_results: '[COUNT] резултата за [SEARCH_TERM]',
		one_result: '[COUNT] резултата за [SEARCH_TERM]',
		alt_search: 'Нема резултата за [SEARCH_TERM]. Приказ додатник резултата за [DIFFERENT_TERM]',
		search_suggestion: 'Нема резултата за [SEARCH_TERM]. Покушајте са неком од следећих претрага:',
		searching: 'Претрага термина [SEARCH_TERM]...'
	},
	Ol = { thanks_to: Tr, comments: kr, direction: Fr, strings: br },
	Mr = {}
b(Mr, {
	comments: () => Hr,
	default: () => Ul,
	direction: () => Dr,
	strings: () => wr,
	thanks_to: () => Sr
})
var Sr = 'Montazar Al-Jaber <montazar@nanawee.tech>',
	Hr = '',
	Dr = 'ltr',
	wr = {
		placeholder: 'Sök',
		clear_search: 'Rensa',
		load_more: 'Visa fler träffar',
		search_label: 'Sök på denna sida',
		filters_label: 'Filter',
		zero_results: '[SEARCH_TERM] gav inga träffar',
		many_results: '[SEARCH_TERM] gav [COUNT] träffar',
		one_result: '[SEARCH_TERM] gav [COUNT] träff',
		alt_search: '[SEARCH_TERM] gav inga träffar. Visar resultat för [DIFFERENT_TERM] istället',
		search_suggestion: '[SEARCH_TERM] gav inga träffar. Försök igen med en av följande sökord:',
		searching: 'Söker efter [SEARCH_TERM]...'
	},
	Ul = { thanks_to: Sr, comments: Hr, direction: Dr, strings: wr },
	Nr = {}
b(Nr, {
	comments: () => zr,
	default: () => Il,
	direction: () => jr,
	strings: () => Or,
	thanks_to: () => yr
})
var yr = '',
	zr = '',
	jr = 'ltr',
	Or = {
		placeholder: 'தேடுக',
		clear_search: 'அழிக்குக',
		load_more: 'மேலும் முடிவுகளைக் காட்டுக',
		search_label: 'இந்த தளத்தில் தேடுக',
		filters_label: 'வடிகட்டல்கள்',
		zero_results: '[SEARCH_TERM] க்கான முடிவுகள் இல்லை',
		many_results: '[SEARCH_TERM] க்கான [COUNT] முடிவுகள்',
		one_result: '[SEARCH_TERM] க்கான முடிவு',
		alt_search:
			'[SEARCH_TERM] இத்தேடலுக்கான முடிவுகள் இல்லை, இந்த தேடல்களுக்கான ஒத்த முடிவுகள் [DIFFERENT_TERM]',
		search_suggestion:
			'[SEARCH_TERM] இத் தேடலுக்கான முடிவுகள் இல்லை.இதற்கு பதிலீடான தேடல்களை தேடுக:',
		searching: '[SEARCH_TERM] தேடப்படுகின்றது'
	},
	Il = { thanks_to: yr, comments: zr, direction: jr, strings: Or },
	Ur = {}
b(Ur, {
	comments: () => Pr,
	default: () => Pl,
	direction: () => Lr,
	strings: () => qr,
	thanks_to: () => Ir
})
var Ir = 'Taylan Özgür Bildik',
	Pr = '',
	Lr = 'ltr',
	qr = {
		placeholder: 'Araştır',
		clear_search: 'Temizle',
		load_more: 'Daha fazla sonuç',
		search_label: 'Site genelinde arama',
		filters_label: 'Filtreler',
		zero_results: '[SEARCH_TERM] için sonuç yok',
		many_results: '[SEARCH_TERM] için [COUNT] sonuç bulundu',
		one_result: '[SEARCH_TERM] için [COUNT] sonuç bulundu',
		alt_search:
			'[SEARCH_TERM] için sonuç yok. Bunun yerine [DIFFERENT_TERM] için sonuçlar gösteriliyor',
		search_suggestion:
			'[SEARCH_TERM] için sonuç yok. Alternatif olarak aşağıdaki kelimelerden birini deneyebilirsiniz:',
		searching: '[SEARCH_TERM] araştırılıyor...'
	},
	Pl = { thanks_to: Ir, comments: Pr, direction: Lr, strings: qr },
	xr = {}
b(xr, {
	comments: () => Kr,
	default: () => Ll,
	direction: () => Gr,
	strings: () => Wr,
	thanks_to: () => Vr
})
var Vr = 'Long Nhat Nguyen',
	Kr = '',
	Gr = 'ltr',
	Wr = {
		placeholder: 'Tìm kiếm',
		clear_search: 'Xóa',
		load_more: 'Nhiều kết quả hơn',
		search_label: 'Tìm kiếm trong trang này',
		filters_label: 'Bộ lọc',
		zero_results: 'Không tìm thấy kết quả cho [SEARCH_TERM]',
		many_results: '[COUNT] kết quả cho [SEARCH_TERM]',
		one_result: '[COUNT] kết quả cho [SEARCH_TERM]',
		alt_search:
			'Không tìm thấy kết quả cho [SEARCH_TERM]. Kiểm thị kết quả thay thế với [DIFFERENT_TERM]',
		search_suggestion: 'Không tìm thấy kết quả cho [SEARCH_TERM]. Thử một trong các tìm kiếm:',
		searching: 'Đang tìm kiếm cho [SEARCH_TERM]...'
	},
	Ll = { thanks_to: Vr, comments: Kr, direction: Gr, strings: Wr },
	Jr = {}
b(Jr, {
	comments: () => Yr,
	default: () => ql,
	direction: () => Xr,
	strings: () => Qr,
	thanks_to: () => Zr
})
var Zr = 'Amber Song',
	Yr = '',
	Xr = 'ltr',
	Qr = {
		placeholder: '搜索',
		clear_search: '清除',
		load_more: '加载更多结果',
		search_label: '站内搜索',
		filters_label: '筛选',
		zero_results: '未找到 [SEARCH_TERM] 的相关结果',
		many_results: '找到 [COUNT] 个 [SEARCH_TERM] 的相关结果',
		one_result: '找到 [COUNT] 个 [SEARCH_TERM] 的相关结果',
		alt_search: '未找到 [SEARCH_TERM] 的相关结果。改为显示 [DIFFERENT_TERM] 的相关结果',
		search_suggestion: '未找到 [SEARCH_TERM] 的相关结果。请尝试以下搜索。',
		searching: '正在搜索 [SEARCH_TERM]...'
	},
	ql = { thanks_to: Zr, comments: Yr, direction: Xr, strings: Qr },
	$r = {}
b($r, {
	comments: () => us,
	default: () => xl,
	direction: () => ts,
	strings: () => rs,
	thanks_to: () => es
})
var es = 'Amber Song',
	us = '',
	ts = 'ltr',
	rs = {
		placeholder: '搜索',
		clear_search: '清除',
		load_more: '加載更多結果',
		search_label: '站內搜索',
		filters_label: '篩選',
		zero_results: '未找到 [SEARCH_TERM] 的相關結果',
		many_results: '找到 [COUNT] 個 [SEARCH_TERM] 的相關結果',
		one_result: '找到 [COUNT] 個 [SEARCH_TERM] 的相關結果',
		alt_search: '未找到 [SEARCH_TERM] 的相關結果。改為顯示 [DIFFERENT_TERM] 的相關結果',
		search_suggestion: '未找到 [SEARCH_TERM] 的相關結果。請嘗試以下搜索。',
		searching: '正在搜索 [SEARCH_TERM]...'
	},
	xl = { thanks_to: es, comments: us, direction: ts, strings: rs },
	ss = {}
b(ss, {
	comments: () => as,
	default: () => Vl,
	direction: () => ns,
	strings: () => is,
	thanks_to: () => ls
})
var ls = 'Amber Song',
	as = '',
	ns = 'ltr',
	is = {
		placeholder: '搜索',
		clear_search: '清除',
		load_more: '加载更多结果',
		search_label: '站内搜索',
		filters_label: '筛选',
		zero_results: '未找到 [SEARCH_TERM] 的相关结果',
		many_results: '找到 [COUNT] 个 [SEARCH_TERM] 的相关结果',
		one_result: '找到 [COUNT] 个 [SEARCH_TERM] 的相关结果',
		alt_search: '未找到 [SEARCH_TERM] 的相关结果。改为显示 [DIFFERENT_TERM] 的相关结果',
		search_suggestion: '未找到 [SEARCH_TERM] 的相关结果。请尝试以下搜索。',
		searching: '正在搜索 [SEARCH_TERM]...'
	},
	Vl = { thanks_to: ls, comments: as, direction: ns, strings: is },
	Kl = [
		Ru,
		Fu,
		Du,
		ju,
		Lu,
		Gu,
		Xu,
		tt,
		nt,
		ft,
		gt,
		At,
		bt,
		wt,
		Ot,
		qt,
		Wt,
		Qt,
		rr,
		ir,
		hr,
		Cr,
		vr,
		Mr,
		Nr,
		Ur,
		xr,
		Jr,
		$r,
		ss
	],
	Gl = Kl,
	Wl = [
		'../../translations/af.json',
		'../../translations/bn.json',
		'../../translations/ca.json',
		'../../translations/da.json',
		'../../translations/de.json',
		'../../translations/en.json',
		'../../translations/es.json',
		'../../translations/fi.json',
		'../../translations/fr.json',
		'../../translations/gl.json',
		'../../translations/hi.json',
		'../../translations/hr.json',
		'../../translations/hu.json',
		'../../translations/id.json',
		'../../translations/it.json',
		'../../translations/ja.json',
		'../../translations/mi.json',
		'../../translations/nl.json',
		'../../translations/no.json',
		'../../translations/pl.json',
		'../../translations/pt.json',
		'../../translations/ru.json',
		'../../translations/sr.json',
		'../../translations/sv.json',
		'../../translations/ta.json',
		'../../translations/tr.json',
		'../../translations/vi.json',
		'../../translations/zh-cn.json',
		'../../translations/zh-tw.json',
		'../../translations/zh.json'
	]
function ou(e, t, u) {
	const r = e.slice()
	return (r[48] = t[u]), r
}
function _u(e) {
	let t, u, r
	function s(a) {
		e[34](a)
	}
	let l = {
		show_empty_filters: e[4],
		available_filters: e[16],
		translate: e[18],
		automatic_translations: e[17],
		translations: e[5]
	}
	return (
		e[7] !== void 0 && (l.selected_filters = e[7]),
		(t = new dl({ props: l })),
		le.push(() => Zs(t, 'selected_filters', s)),
		{
			c() {
				be(t.$$.fragment)
			},
			m(a, n) {
				de(t, a, n), (r = !0)
			},
			p(a, n) {
				const i = {}
				n[0] & 16 && (i.show_empty_filters = a[4]),
					n[0] & 65536 && (i.available_filters = a[16]),
					n[0] & 131072 && (i.automatic_translations = a[17]),
					n[0] & 32 && (i.translations = a[5]),
					!u && n[0] & 128 && ((u = !0), (i.selected_filters = a[7]), Vs(() => (u = !1))),
					t.$set(i)
			},
			i(a) {
				r || (y(t.$$.fragment, a), (r = !0))
			},
			o(a) {
				P(t.$$.fragment, a), (r = !1)
			},
			d(a) {
				Ee(t, a)
			}
		}
	)
}
function cu(e) {
	let t, u, r, s
	const l = [Zl, Jl],
		a = []
	function n(i, d) {
		return i[12] ? 0 : 1
	}
	return (
		(u = n(e)),
		(r = a[u] = l[u](e)),
		{
			c() {
				;(t = A('div')), r.c(), g(t, 'class', 'pagefind-ui__results-area svelte-e9gkc3')
			},
			m(i, d) {
				T(i, t, d), a[u].m(t, null), (s = !0)
			},
			p(i, d) {
				let _ = u
				;(u = n(i)),
					u === _
						? a[u].p(i, d)
						: (ae(),
							P(a[_], 1, 1, () => {
								a[_] = null
							}),
							ne(),
							(r = a[u]),
							r ? r.p(i, d) : ((r = a[u] = l[u](i)), r.c()),
							y(r, 1),
							r.m(t, null))
			},
			i(i) {
				s || (y(r), (s = !0))
			},
			o(i) {
				P(r), (s = !1)
			},
			d(i) {
				i && v(t), a[u].d()
			}
		}
	)
}
function Jl(e) {
	let t,
		u,
		r,
		s = [],
		l = new Map(),
		a,
		n,
		i
	function d(f, C) {
		return f[11].results.length === 0 ? Ql : f[11].results.length === 1 ? Xl : Yl
	}
	let _ = d(e),
		c = _(e),
		o = e[11].results.slice(0, e[15])
	const B = (f) => f[48].id
	for (let f = 0; f < o.length; f += 1) {
		let C = ou(e, o, f),
			E = B(C)
		l.set(E, (s[f] = fu(E, C)))
	}
	let h = e[11].results.length > e[15] && hu(e)
	return {
		c() {
			;(t = A('p')), c.c(), (u = M()), (r = A('ol'))
			for (let f = 0; f < s.length; f += 1) s[f].c()
			;(a = M()),
				h && h.c(),
				(n = ee()),
				g(t, 'class', 'pagefind-ui__message svelte-e9gkc3'),
				g(r, 'class', 'pagefind-ui__results svelte-e9gkc3')
		},
		m(f, C) {
			T(f, t, C), c.m(t, null), T(f, u, C), T(f, r, C)
			for (let E = 0; E < s.length; E += 1) s[E] && s[E].m(r, null)
			T(f, a, C), h && h.m(f, C), T(f, n, C), (i = !0)
		},
		p(f, C) {
			_ === (_ = d(f)) && c ? c.p(f, C) : (c.d(1), (c = _(f)), c && (c.c(), c.m(t, null))),
				C[0] & 34830 &&
					((o = f[11].results.slice(0, f[15])),
					ae(),
					(s = Js(s, C, B, 1, f, o, l, r, Ws, fu, null, ou)),
					ne()),
				f[11].results.length > f[15]
					? h
						? h.p(f, C)
						: ((h = hu(f)), h.c(), h.m(n.parentNode, n))
					: h && (h.d(1), (h = null))
		},
		i(f) {
			if (!i) {
				for (let C = 0; C < o.length; C += 1) y(s[C])
				i = !0
			}
		},
		o(f) {
			for (let C = 0; C < s.length; C += 1) P(s[C])
			i = !1
		},
		d(f) {
			f && v(t), c.d(), f && v(u), f && v(r)
			for (let C = 0; C < s.length; C += 1) s[C].d()
			f && v(a), h && h.d(f), f && v(n)
		}
	}
}
function Zl(e) {
	let t,
		u = e[14] && du(e)
	return {
		c() {
			u && u.c(), (t = ee())
		},
		m(r, s) {
			u && u.m(r, s), T(r, t, s)
		},
		p(r, s) {
			r[14]
				? u
					? u.p(r, s)
					: ((u = du(r)), u.c(), u.m(t.parentNode, t))
				: u && (u.d(1), (u = null))
		},
		i: q,
		o: q,
		d(r) {
			u && u.d(r), r && v(t)
		}
	}
}
function Yl(e) {
	let t =
			e[18]('many_results', e[17], e[5])
				.replace(/\[SEARCH_TERM\]/, e[14])
				.replace(/\[COUNT\]/, new Intl.NumberFormat(e[5].language).format(e[11].results.length)) +
			'',
		u
	return {
		c() {
			u = w(t)
		},
		m(r, s) {
			T(r, u, s)
		},
		p(r, s) {
			s[0] & 149536 &&
				t !==
					(t =
						r[18]('many_results', r[17], r[5])
							.replace(/\[SEARCH_TERM\]/, r[14])
							.replace(
								/\[COUNT\]/,
								new Intl.NumberFormat(r[5].language).format(r[11].results.length)
							) + '') &&
				j(u, t)
		},
		d(r) {
			r && v(u)
		}
	}
}
function Xl(e) {
	let t =
			e[18]('one_result', e[17], e[5])
				.replace(/\[SEARCH_TERM\]/, e[14])
				.replace(/\[COUNT\]/, new Intl.NumberFormat(e[5].language).format(1)) + '',
		u
	return {
		c() {
			u = w(t)
		},
		m(r, s) {
			T(r, u, s)
		},
		p(r, s) {
			s[0] & 147488 &&
				t !==
					(t =
						r[18]('one_result', r[17], r[5])
							.replace(/\[SEARCH_TERM\]/, r[14])
							.replace(/\[COUNT\]/, new Intl.NumberFormat(r[5].language).format(1)) + '') &&
				j(u, t)
		},
		d(r) {
			r && v(u)
		}
	}
}
function Ql(e) {
	let t = e[18]('zero_results', e[17], e[5]).replace(/\[SEARCH_TERM\]/, e[14]) + '',
		u
	return {
		c() {
			u = w(t)
		},
		m(r, s) {
			T(r, u, s)
		},
		p(r, s) {
			s[0] & 147488 &&
				t !== (t = r[18]('zero_results', r[17], r[5]).replace(/\[SEARCH_TERM\]/, r[14]) + '') &&
				j(u, t)
		},
		d(r) {
			r && v(u)
		}
	}
}
function $l(e) {
	let t, u
	return (
		(t = new sl({ props: { show_images: e[1], process_result: e[3], result: e[48] } })),
		{
			c() {
				be(t.$$.fragment)
			},
			m(r, s) {
				de(t, r, s), (u = !0)
			},
			p(r, s) {
				const l = {}
				s[0] & 2 && (l.show_images = r[1]),
					s[0] & 8 && (l.process_result = r[3]),
					s[0] & 34816 && (l.result = r[48]),
					t.$set(l)
			},
			i(r) {
				u || (y(t.$$.fragment, r), (u = !0))
			},
			o(r) {
				P(t.$$.fragment, r), (u = !1)
			},
			d(r) {
				Ee(t, r)
			}
		}
	)
}
function ea(e) {
	let t, u
	return (
		(t = new _l({ props: { show_images: e[1], process_result: e[3], result: e[48] } })),
		{
			c() {
				be(t.$$.fragment)
			},
			m(r, s) {
				de(t, r, s), (u = !0)
			},
			p(r, s) {
				const l = {}
				s[0] & 2 && (l.show_images = r[1]),
					s[0] & 8 && (l.process_result = r[3]),
					s[0] & 34816 && (l.result = r[48]),
					t.$set(l)
			},
			i(r) {
				u || (y(t.$$.fragment, r), (u = !0))
			},
			o(r) {
				P(t.$$.fragment, r), (u = !1)
			},
			d(r) {
				Ee(t, r)
			}
		}
	)
}
function fu(e, t) {
	let u, r, s, l, a
	const n = [ea, $l],
		i = []
	function d(_, c) {
		return _[2] ? 0 : 1
	}
	return (
		(r = d(t)),
		(s = i[r] = n[r](t)),
		{
			key: e,
			first: null,
			c() {
				;(u = ee()), s.c(), (l = ee()), (this.first = u)
			},
			m(_, c) {
				T(_, u, c), i[r].m(_, c), T(_, l, c), (a = !0)
			},
			p(_, c) {
				t = _
				let o = r
				;(r = d(t)),
					r === o
						? i[r].p(t, c)
						: (ae(),
							P(i[o], 1, 1, () => {
								i[o] = null
							}),
							ne(),
							(s = i[r]),
							s ? s.p(t, c) : ((s = i[r] = n[r](t)), s.c()),
							y(s, 1),
							s.m(l.parentNode, l))
			},
			i(_) {
				a || (y(s), (a = !0))
			},
			o(_) {
				P(s), (a = !1)
			},
			d(_) {
				_ && v(u), i[r].d(_), _ && v(l)
			}
		}
	)
}
function hu(e) {
	let t,
		u = e[18]('load_more', e[17], e[5]) + '',
		r,
		s,
		l
	return {
		c() {
			;(t = A('button')),
				(r = w(u)),
				g(t, 'type', 'button'),
				g(t, 'class', 'pagefind-ui__button svelte-e9gkc3')
		},
		m(a, n) {
			T(a, t, n), R(t, r), s || ((l = W(t, 'click', e[20])), (s = !0))
		},
		p(a, n) {
			n[0] & 131104 && u !== (u = a[18]('load_more', a[17], a[5]) + '') && j(r, u)
		},
		d(a) {
			a && v(t), (s = !1), l()
		}
	}
}
function du(e) {
	let t,
		u = e[18]('searching', e[17], e[5]).replace(/\[SEARCH_TERM\]/, e[14]) + '',
		r
	return {
		c() {
			;(t = A('p')), (r = w(u)), g(t, 'class', 'pagefind-ui__message svelte-e9gkc3')
		},
		m(s, l) {
			T(s, t, l), R(t, r)
		},
		p(s, l) {
			l[0] & 147488 &&
				u !== (u = s[18]('searching', s[17], s[5]).replace(/\[SEARCH_TERM\]/, s[14]) + '') &&
				j(r, u)
		},
		d(s) {
			s && v(t)
		}
	}
}
function ua(e) {
	let t,
		u,
		r,
		s,
		l,
		a,
		n = e[18]('clear_search', e[17], e[5]) + '',
		i,
		d,
		_,
		c,
		o,
		B,
		h,
		f,
		C = e[10] && _u(e),
		E = e[13] && cu(e)
	return {
		c() {
			;(t = A('div')),
				(u = A('form')),
				(r = A('input')),
				(l = M()),
				(a = A('button')),
				(i = w(n)),
				(d = M()),
				(_ = A('div')),
				C && C.c(),
				(c = M()),
				E && E.c(),
				g(r, 'class', 'pagefind-ui__search-input svelte-e9gkc3'),
				g(r, 'type', 'text'),
				g(r, 'placeholder', (s = e[18]('placeholder', e[17], e[5]))),
				g(r, 'autocapitalize', 'none'),
				g(r, 'enterkeyhint', 'search'),
				g(a, 'class', 'pagefind-ui__search-clear svelte-e9gkc3'),
				G(a, 'pagefind-ui__suppressed', !e[6]),
				g(_, 'class', 'pagefind-ui__drawer svelte-e9gkc3'),
				G(_, 'pagefind-ui__hidden', !e[13]),
				g(u, 'class', 'pagefind-ui__form svelte-e9gkc3'),
				g(u, 'role', 'search'),
				g(u, 'aria-label', (o = e[18]('search_label', e[17], e[5]))),
				g(u, 'action', 'javascript:void(0);'),
				g(t, 'class', 'pagefind-ui svelte-e9gkc3'),
				G(t, 'pagefind-ui--reset', e[0])
		},
		m(p, k) {
			T(p, t, k),
				R(t, u),
				R(u, r),
				je(r, e[6]),
				e[31](r),
				R(u, l),
				R(u, a),
				R(a, i),
				e[32](a),
				R(u, d),
				R(u, _),
				C && C.m(_, null),
				R(_, c),
				E && E.m(_, null),
				(B = !0),
				h ||
					((f = [
						W(r, 'focus', e[19]),
						W(r, 'keydown', e[29]),
						W(r, 'input', e[30]),
						W(a, 'click', e[33]),
						W(u, 'submit', ta)
					]),
					(h = !0))
		},
		p(p, k) {
			;(!B || (k[0] & 131104 && s !== (s = p[18]('placeholder', p[17], p[5])))) &&
				g(r, 'placeholder', s),
				k[0] & 64 && r.value !== p[6] && je(r, p[6]),
				(!B || k[0] & 131104) && n !== (n = p[18]('clear_search', p[17], p[5]) + '') && j(i, n),
				(!B || k[0] & 64) && G(a, 'pagefind-ui__suppressed', !p[6]),
				p[10]
					? C
						? (C.p(p, k), k[0] & 1024 && y(C, 1))
						: ((C = _u(p)), C.c(), y(C, 1), C.m(_, c))
					: C &&
						(ae(),
						P(C, 1, 1, () => {
							C = null
						}),
						ne()),
				p[13]
					? E
						? (E.p(p, k), k[0] & 8192 && y(E, 1))
						: ((E = cu(p)), E.c(), y(E, 1), E.m(_, null))
					: E &&
						(ae(),
						P(E, 1, 1, () => {
							E = null
						}),
						ne()),
				(!B || k[0] & 8192) && G(_, 'pagefind-ui__hidden', !p[13]),
				(!B || (k[0] & 131104 && o !== (o = p[18]('search_label', p[17], p[5])))) &&
					g(u, 'aria-label', o),
				(!B || k[0] & 1) && G(t, 'pagefind-ui--reset', p[0])
		},
		i(p) {
			B || (y(C), y(E), (B = !0))
		},
		o(p) {
			P(C), P(E), (B = !1)
		},
		d(p) {
			p && v(t), e[31](null), e[32](null), C && C.d(), E && E.d(), (h = !1), Z(f)
		}
	}
}
var ta = (e) => e.preventDefault()
function ra(e, t, u) {
	const r = {},
		s = Wl.map((m) => m.match(/([^\/]+)\.json$/)[1])
	for (let m = 0; m < s.length; m++) r[s[m]] = { language: s[m], ...Gl[m].strings }
	let { base_path: l = '/pagefind/' } = t,
		{ page_size: a = 5 } = t,
		{ reset_styles: n = !0 } = t,
		{ show_images: i = !0 } = t,
		{ show_sub_results: d = !1 } = t,
		{ excerpt_length: _ } = t,
		{ process_result: c = null } = t,
		{ process_term: o = null } = t,
		{ show_empty_filters: B = !0 } = t,
		{ debounce_timeout_ms: h = 300 } = t,
		{ pagefind_options: f = {} } = t,
		{ merge_index: C = [] } = t,
		{ trigger_search_term: E = '' } = t,
		{ translations: p = {} } = t,
		k = '',
		F,
		S,
		L,
		N = 40,
		O = !1,
		I = [],
		V = !1,
		Ce = !1,
		Me = 0,
		Se = '',
		Be = a,
		He = null,
		ue = null,
		oe = {},
		De = r.en
	const os = (m, D, z) => z[m] ?? D[m] ?? ''
	Ps(() => {
		var z, H, x
		let m =
				((x =
					(H =
						(z = document == null ? void 0 : document.querySelector) == null
							? void 0
							: z.call(document, 'html')) == null
						? void 0
						: H.getAttribute) == null
					? void 0
					: x.call(H, 'lang')) || 'en',
			D = pu(m.toLocaleLowerCase())
		u(
			17,
			(De =
				r[`${D.language}-${D.script}-${D.region}`] ||
				r[`${D.language}-${D.region}`] ||
				r[`${D.language}`] ||
				r.en)
		)
	}),
		Ls(() => {
			var m
			;(m = F == null ? void 0 : F.destroy) == null || m.call(F), (F = null)
		})
	const we = async () => {
			var m
			if (!O && (u(10, (O = !0)), !F)) {
				let D
				try {
					D = await ys(() => import(`${l}pagefind.js`), __vite__mapDeps([]), import.meta.url)
				} catch (H) {
					console.error(H),
						console.error(
							[
								`Pagefind couldn't be loaded from ${this.options.bundlePath}pagefind.js`,
								'You can configure this by passing a bundlePath option to PagefindUI',
								`[DEBUG: Loaded from ${((m = document == null ? void 0 : document.currentScript) == null ? void 0 : m.src) ?? 'no known script location'}]`
							].join(`
`)
						)
				}
				_ || u(22, (_ = d ? 12 : 30))
				let z = { ...(f || {}), excerptLength: _ }
				await D.options(z)
				for (const H of C) {
					if (!H.bundlePath) throw new Error('mergeIndex requires a bundlePath parameter')
					const x = H.bundlePath
					delete H.bundlePath, await D.mergeIndex(x, H)
				}
				;(F = D), _s()
			}
		},
		_s = async () => {
			F && ((He = await F.filters()), (!ue || !Object.keys(ue).length) && u(16, (ue = He)))
		},
		cs = (m) => {
			let D = {}
			return (
				Object.entries(m)
					.filter(([, z]) => z)
					.forEach(([z]) => {
						let [H, x] = z.split(/:(.*)$/)
						;(D[H] = D[H] || []), D[H].push(x)
					}),
				D
			)
		}
	let te
	const fs = async (m, D) => {
			if (!m) {
				u(13, (Ce = !1)), te && clearTimeout(te)
				return
			}
			const z = cs(D),
				H = () => hs(m, z)
			h > 0 && m
				? (te && clearTimeout(te),
					(te = setTimeout(H, h)),
					await Ne(),
					F.preload(m, { filters: z }))
				: H(),
				ds()
		},
		Ne = async () => {
			for (; !F; ) we(), await new Promise((m) => setTimeout(m, 50))
		},
		hs = async (m, D) => {
			var x
			u(14, (Se = m || '')),
				typeof o == 'function' && (m = o(m)),
				u(12, (V = !0)),
				u(13, (Ce = !0)),
				await Ne()
			const z = ++Me,
				H = await F.search(m, { filters: D })
			Me === z &&
				(H.filters && (x = Object.keys(H.filters)) != null && x.length && u(16, (ue = H.filters)),
				u(11, (I = H)),
				u(12, (V = !1)),
				u(15, (Be = a)))
		},
		ds = () => {
			const m = L.offsetWidth
			m != N && u(8, (S.style.paddingRight = `${m + 2}px`), S)
		},
		Es = (m) => {
			m == null || m.preventDefault(), u(15, (Be += a))
		},
		ms = (m) => {
			m.key === 'Escape' && (u(6, (k = '')), S.blur()), m.key === 'Enter' && m.preventDefault()
		}
	function gs() {
		;(k = this.value), u(6, k), u(21, E)
	}
	function Cs(m) {
		le[m ? 'unshift' : 'push'](() => {
			;(S = m), u(8, S)
		})
	}
	function Bs(m) {
		le[m ? 'unshift' : 'push'](() => {
			;(L = m), u(9, L)
		})
	}
	const ps = () => {
		u(6, (k = '')), S.blur()
	}
	function Rs(m) {
		;(oe = m), u(7, oe)
	}
	return (
		(e.$$set = (m) => {
			'base_path' in m && u(23, (l = m.base_path)),
				'page_size' in m && u(24, (a = m.page_size)),
				'reset_styles' in m && u(0, (n = m.reset_styles)),
				'show_images' in m && u(1, (i = m.show_images)),
				'show_sub_results' in m && u(2, (d = m.show_sub_results)),
				'excerpt_length' in m && u(22, (_ = m.excerpt_length)),
				'process_result' in m && u(3, (c = m.process_result)),
				'process_term' in m && u(25, (o = m.process_term)),
				'show_empty_filters' in m && u(4, (B = m.show_empty_filters)),
				'debounce_timeout_ms' in m && u(26, (h = m.debounce_timeout_ms)),
				'pagefind_options' in m && u(27, (f = m.pagefind_options)),
				'merge_index' in m && u(28, (C = m.merge_index)),
				'trigger_search_term' in m && u(21, (E = m.trigger_search_term)),
				'translations' in m && u(5, (p = m.translations))
		}),
		(e.$$.update = () => {
			e.$$.dirty[0] & 2097152 && E && (u(6, (k = E)), u(21, (E = ''))),
				e.$$.dirty[0] & 192 && fs(k, oe)
		}),
		[
			n,
			i,
			d,
			c,
			B,
			p,
			k,
			oe,
			S,
			L,
			O,
			I,
			V,
			Ce,
			Se,
			Be,
			ue,
			De,
			os,
			we,
			Es,
			E,
			_,
			l,
			a,
			o,
			h,
			f,
			C,
			ms,
			gs,
			Cs,
			Bs,
			ps,
			Rs
		]
	)
}
var sa = class extends ge {
		constructor(e) {
			super(),
				me(
					this,
					e,
					ra,
					ua,
					he,
					{
						base_path: 23,
						page_size: 24,
						reset_styles: 0,
						show_images: 1,
						show_sub_results: 2,
						excerpt_length: 22,
						process_result: 3,
						process_term: 25,
						show_empty_filters: 4,
						debounce_timeout_ms: 26,
						pagefind_options: 27,
						merge_index: 28,
						trigger_search_term: 21,
						translations: 5
					},
					null,
					[-1, -1]
				)
		}
	},
	la = sa,
	Fe
try {
	Fe = new URL(document.currentScript.src).pathname.match(/^(.*\/)(?:pagefind-)?ui.js.*$/)[1]
} catch {
	Fe = '/pagefind/'
}
var aa = class {
	constructor(e) {
		this._pfs = null
		let t = e.element ?? '[data-pagefind-ui]',
			u = e.bundlePath ?? Fe,
			r = e.pageSize ?? 5,
			s = e.resetStyles ?? !0,
			l = e.showImages ?? !0,
			a = e.showSubResults ?? !1,
			n = e.excerptLength ?? 0,
			i = e.processResult ?? null,
			d = e.processTerm ?? null,
			_ = e.showEmptyFilters ?? !0,
			c = e.debounceTimeoutMs ?? 300,
			o = e.mergeIndex ?? [],
			B = e.translations ?? []
		delete e.element,
			delete e.bundlePath,
			delete e.pageSize,
			delete e.resetStyles,
			delete e.showImages,
			delete e.showSubResults,
			delete e.excerptLength,
			delete e.processResult,
			delete e.processTerm,
			delete e.showEmptyFilters,
			delete e.debounceTimeoutMs,
			delete e.mergeIndex,
			delete e.translations
		const h = t instanceof HTMLElement ? t : document.querySelector(t)
		h
			? (this._pfs = new la({
					target: h,
					props: {
						base_path: u,
						page_size: r,
						reset_styles: s,
						show_images: l,
						show_sub_results: a,
						excerpt_length: n,
						process_result: i,
						process_term: d,
						show_empty_filters: _,
						debounce_timeout_ms: c,
						merge_index: o,
						translations: B,
						pagefind_options: e
					}
				}))
			: console.error(`Pagefind UI couldn't find the selector ${t}`)
	}
	triggerSearch(e) {
		this._pfs.$$set({ trigger_search_term: e })
	}
	destroy() {
		this._pfs.$destroy()
	}
}
const { document: Eu } = Ds
function na(e) {
	let t,
		u,
		r = '<h1>Search</h1> <div id="search" class="svelte-1vcilwm"></div>'
	return {
		c() {
			;(t = vs()), (u = Ts('div')), (u.innerHTML = r), this.h()
		},
		l(s) {
			ks('svelte-1c8tpdw', Eu.head).forEach(pe),
				(t = Fs(s)),
				(u = bs(s, 'DIV', { 'data-pagefind-ignore': !0, 'data-svelte-h': !0 })),
				Ms(u) !== 'svelte-n8z0k1' && (u.innerHTML = r),
				this.h()
		},
		h() {
			;(Eu.title = 'Search'), Ss(u, 'data-pagefind-ignore', '')
		},
		m(s, l) {
			ye(s, t, l), ye(s, u, l)
		},
		p: Re,
		i: Re,
		o: Re,
		d(s) {
			s && (pe(t), pe(u))
		}
	}
}
function ia(e) {
	return (
		Hs(() => {
			new aa({
				element: '#search',
				showSubResults: !0,
				showImages: !1,
				processResult(u) {
					u.url = u.url.replace(/(.*)\.html/, '$1')
					for (const r of u.sub_results) r.url = r.url.replace(/(.*).html(#.*)?/, '$1$2')
				}
			}),
				document.getElementsByClassName('pagefind-ui__search-input')[0].focus()
		}),
		[]
	)
}
class oa extends ws {
	constructor(t) {
		super(), Ns(this, t, ia, na, As, {})
	}
}
const da = Object.freeze(
	Object.defineProperty({ __proto__: null, default: oa }, Symbol.toStringTag, { value: 'Module' })
)
export { oa as P, da as _ }
