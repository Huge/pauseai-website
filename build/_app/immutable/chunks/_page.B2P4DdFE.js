import {
	s as yu,
	c as R,
	H as Mu,
	b as x,
	t as M,
	f as v,
	h as L,
	q as Hu,
	j as c,
	d as I,
	i as H,
	k as Q,
	l as b,
	m,
	N as Au,
	O as Wu,
	a as Ru,
	o as W,
	p as Ou,
	I as vu,
	g as Ku,
	n as Yu
} from './scheduler.D9JQr37X.js'
import {
	S as Su,
	i as ju,
	c as O,
	b as K,
	m as Y,
	a as U,
	g as ku,
	t as T,
	e as Lu,
	d as G
} from './index.D-WnFt3a.js'
import { e as z } from './each.Gi_i5kkj.js'
import { g as Gu, a as Xu } from './a.svelte_svelte_type_style_lang.DfavE63L.js'
import { t as Zu } from './config.DERVHgho.js'
import { B as qu } from './Button.Ip6Rcx0-.js'
import { L as Ju } from './logo.CrjPuro6.js'
import { A as zu } from './a.YKMG9Usu.js'
import { P as Nu } from './PostMeta.BRGG6AYg.js'
const ut = '' + new URL('../assets/altman.BOuisjPj.jpg', import.meta.url).href,
	tt = '' + new URL('../assets/amodei.BQIVGqu6.jpg', import.meta.url).href,
	et = '' + new URL('../assets/bengio.CUWbwIz_.jpg', import.meta.url).href,
	st = '' + new URL('../assets/biden.DqMr9MLY.jpg', import.meta.url).href,
	Dt = '' + new URL('../assets/black.IbOVypTE.jpg', import.meta.url).href,
	nt = '' + new URL('../assets/brockman.lSflKEZC.jpg', import.meta.url).href,
	rt = '' + new URL('../assets/butler.BIIYvN36.jpg', import.meta.url).href,
	ot = '' + new URL('../assets/cais_statement.dFbNWCOv.jpg', import.meta.url).href,
	it =
		'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBoRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAARAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDUuMC4xMwAA/9sAQwABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB/9sAQwEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB/8AAEQgACgAUAwERAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/ifr6A8cKACgAoAKACgD/9k=',
	at = '' + new URL('../assets/gates.BMf99I67.jpg', import.meta.url).href,
	lt = '' + new URL('../assets/guterres.BYyaD22C.jpg', import.meta.url).href,
	Ft = '' + new URL('../assets/harris.BHiPSr0B.jpg', import.meta.url).href,
	At = '' + new URL('../assets/hassabis.dimS0yxp.jpg', import.meta.url).href,
	ct = '' + new URL('../assets/hawking.DErCJWkF.jpg', import.meta.url).href,
	Et = '' + new URL('../assets/hinton.CZwPrcT-.jpg', import.meta.url).href,
	ft = '' + new URL('../assets/jun.DKZYmb5R.jpg', import.meta.url).href,
	gt = '' + new URL('../assets/lecun.DkTkckm_.jpg', import.meta.url).href,
	Ct = '' + new URL('../assets/leyen.DHh4NqCV.jpg', import.meta.url).href,
	Bt = '' + new URL('../assets/light_blue.CGLmSxsp.jpg', import.meta.url).href,
	ht =
		'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBoRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAARAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDUuMC4xMwAA/9sAQwABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB/9sAQwEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB/8AAEQgACgAUAwERAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8Ax6/rA/mcKACgAoAKACgD/9k=',
	mt = '' + new URL('../assets/musk.1rCSRXZK.jpg', import.meta.url).href,
	_t = '' + new URL('../assets/old.RKIO36Ln.jpg', import.meta.url).href,
	pt = '' + new URL('../assets/pope.DmnB26Eu.jpg', import.meta.url).href,
	dt = '' + new URL('../assets/putin.CtQHpnhi.jpg', import.meta.url).href,
	bt = '' + new URL('../assets/qiang.ChnYBqx_.jpg', import.meta.url).href,
	wt = '' + new URL('../assets/russell.sueyDXAz.jpg', import.meta.url).href,
	Qt = '' + new URL('../assets/suleyman.Bg4hmNf_.jpg', import.meta.url).href,
	yt = '' + new URL('../assets/summit_declaration.CQDqItbL.jpg', import.meta.url).href,
	Rt = '' + new URL('../assets/sunak.D3UYiFgH.jpg', import.meta.url).href,
	vt = '' + new URL('../assets/tallinn.CfCyi2iw.jpg', import.meta.url).href,
	St = '' + new URL('../assets/trump.wNphzzAY.jpg', import.meta.url).href,
	jt = '' + new URL('../assets/turing.CPfblT4X.jpg', import.meta.url).href,
	kt = '' + new URL('../assets/white.B8maaPFb.jpg', import.meta.url).href,
	Lt = '' + new URL('../assets/yudkowsky.DYcvZpzG.jpg', import.meta.url).href
function qt(u, t) {
	if (u.match(/^[a-z]+:\/\//i)) return u
	if (u.match(/^\/\//)) return window.location.protocol + u
	if (u.match(/^[a-z]+:/i)) return u
	const e = document.implementation.createHTMLDocument(),
		s = e.createElement('base'),
		D = e.createElement('a')
	return e.head.appendChild(s), e.body.appendChild(D), t && (s.href = t), (D.href = u), D.href
}
const Ut = (() => {
	let u = 0
	const t = () => `0000${((Math.random() * 36 ** 4) << 0).toString(36)}`.slice(-4)
	return () => ((u += 1), `u${t()}${u}`)
})()
function $(u) {
	const t = []
	for (let e = 0, s = u.length; e < s; e++) t.push(u[e])
	return t
}
function N(u, t) {
	const s = (u.ownerDocument.defaultView || window).getComputedStyle(u).getPropertyValue(t)
	return s ? parseFloat(s.replace('px', '')) : 0
}
function xt(u) {
	const t = N(u, 'border-left-width'),
		e = N(u, 'border-right-width')
	return u.clientWidth + t + e
}
function It(u) {
	const t = N(u, 'border-top-width'),
		e = N(u, 'border-bottom-width')
	return u.clientHeight + t + e
}
function Uu(u, t = {}) {
	const e = t.width || xt(u),
		s = t.height || It(u)
	return { width: e, height: s }
}
function Tt() {
	let u, t
	try {
		t = process
	} catch {}
	const e = t && t.env ? t.env.devicePixelRatio : null
	return e && ((u = parseInt(e, 10)), Number.isNaN(u) && (u = 1)), u || window.devicePixelRatio || 1
}
const k = 16384
function $t(u) {
	;(u.width > k || u.height > k) &&
		(u.width > k && u.height > k
			? u.width > u.height
				? ((u.height *= k / u.width), (u.width = k))
				: ((u.width *= k / u.height), (u.height = k))
			: u.width > k
				? ((u.height *= k / u.width), (u.width = k))
				: ((u.width *= k / u.height), (u.height = k)))
}
function uu(u) {
	return new Promise((t, e) => {
		const s = new Image()
		;(s.decode = () => t(s)),
			(s.onload = () => t(s)),
			(s.onerror = e),
			(s.crossOrigin = 'anonymous'),
			(s.decoding = 'async'),
			(s.src = u)
	})
}
async function Pt(u) {
	return Promise.resolve()
		.then(() => new XMLSerializer().serializeToString(u))
		.then(encodeURIComponent)
		.then((t) => `data:image/svg+xml;charset=utf-8,${t}`)
}
async function Vt(u, t, e) {
	const s = 'http://www.w3.org/2000/svg',
		D = document.createElementNS(s, 'svg'),
		n = document.createElementNS(s, 'foreignObject')
	return (
		D.setAttribute('width', `${t}`),
		D.setAttribute('height', `${e}`),
		D.setAttribute('viewBox', `0 0 ${t} ${e}`),
		n.setAttribute('width', '100%'),
		n.setAttribute('height', '100%'),
		n.setAttribute('x', '0'),
		n.setAttribute('y', '0'),
		n.setAttribute('externalResourcesRequired', 'true'),
		D.appendChild(n),
		n.appendChild(u),
		Pt(D)
	)
}
const S = (u, t) => {
	if (u instanceof t) return !0
	const e = Object.getPrototypeOf(u)
	return e === null ? !1 : e.constructor.name === t.name || S(e, t)
}
function Mt(u) {
	const t = u.getPropertyValue('content')
	return `${u.cssText} content: '${t.replace(/'|"/g, '')}';`
}
function Ht(u) {
	return $(u)
		.map((t) => {
			const e = u.getPropertyValue(t),
				s = u.getPropertyPriority(t)
			return `${t}: ${e}${s ? ' !important' : ''};`
		})
		.join(' ')
}
function Wt(u, t, e) {
	const s = `.${u}:${t}`,
		D = e.cssText ? Mt(e) : Ht(e)
	return document.createTextNode(`${s}{${D}}`)
}
function cu(u, t, e) {
	const s = window.getComputedStyle(u, e),
		D = s.getPropertyValue('content')
	if (D === '' || D === 'none') return
	const n = Ut()
	try {
		t.className = `${t.className} ${n}`
	} catch {
		return
	}
	const r = document.createElement('style')
	r.appendChild(Wt(n, e, s)), t.appendChild(r)
}
function Ot(u, t) {
	cu(u, t, ':before'), cu(u, t, ':after')
}
const Eu = 'application/font-woff',
	fu = 'image/jpeg',
	Kt = {
		woff: Eu,
		woff2: Eu,
		ttf: 'application/font-truetype',
		eot: 'application/vnd.ms-fontobject',
		png: 'image/png',
		jpg: fu,
		jpeg: fu,
		gif: 'image/gif',
		tiff: 'image/tiff',
		svg: 'image/svg+xml',
		webp: 'image/webp'
	}
function Yt(u) {
	const t = /\.([^./]*?)$/g.exec(u)
	return t ? t[1] : ''
}
function nu(u) {
	const t = Yt(u).toLowerCase()
	return Kt[t] || ''
}
function Gt(u) {
	return u.split(/,/)[1]
}
function su(u) {
	return u.search(/^(data:)/) !== -1
}
function xu(u, t) {
	return `data:${t};base64,${u}`
}
async function Iu(u, t, e) {
	const s = await fetch(u, t)
	if (s.status === 404) throw new Error(`Resource "${s.url}" not found`)
	const D = await s.blob()
	return new Promise((n, r) => {
		const o = new FileReader()
		;(o.onerror = r),
			(o.onloadend = () => {
				try {
					n(e({ res: s, result: o.result }))
				} catch (i) {
					r(i)
				}
			}),
			o.readAsDataURL(D)
	})
}
const eu = {}
function Xt(u, t, e) {
	let s = u.replace(/\?.*/, '')
	return (
		e && (s = u), /ttf|otf|eot|woff2?/i.test(s) && (s = s.replace(/.*\//, '')), t ? `[${t}]${s}` : s
	)
}
async function ru(u, t, e) {
	const s = Xt(u, t, e.includeQueryParams)
	if (eu[s] != null) return eu[s]
	e.cacheBust && (u += (/\?/.test(u) ? '&' : '?') + new Date().getTime())
	let D
	try {
		const n = await Iu(
			u,
			e.fetchRequestInit,
			({ res: r, result: o }) => (t || (t = r.headers.get('Content-Type') || ''), Gt(o))
		)
		D = xu(n, t)
	} catch (n) {
		D = e.imagePlaceholder || ''
		let r = `Failed to fetch resource: ${u}`
		n && (r = typeof n == 'string' ? n : n.message), r && console.warn(r)
	}
	return (eu[s] = D), D
}
async function Zt(u) {
	const t = u.toDataURL()
	return t === 'data:,' ? u.cloneNode(!1) : uu(t)
}
async function Jt(u, t) {
	if (u.currentSrc) {
		const n = document.createElement('canvas'),
			r = n.getContext('2d')
		;(n.width = u.clientWidth),
			(n.height = u.clientHeight),
			r == null || r.drawImage(u, 0, 0, n.width, n.height)
		const o = n.toDataURL()
		return uu(o)
	}
	const e = u.poster,
		s = nu(e),
		D = await ru(e, s, t)
	return uu(D)
}
async function zt(u) {
	var t
	try {
		if (!((t = u == null ? void 0 : u.contentDocument) === null || t === void 0) && t.body)
			return await tu(u.contentDocument.body, {}, !0)
	} catch {}
	return u.cloneNode(!1)
}
async function Nt(u, t) {
	return S(u, HTMLCanvasElement)
		? Zt(u)
		: S(u, HTMLVideoElement)
			? Jt(u, t)
			: S(u, HTMLIFrameElement)
				? zt(u)
				: u.cloneNode(!1)
}
const ue = (u) => u.tagName != null && u.tagName.toUpperCase() === 'SLOT'
async function te(u, t, e) {
	var s, D
	let n = []
	return (
		ue(u) && u.assignedNodes
			? (n = $(u.assignedNodes()))
			: S(u, HTMLIFrameElement) && !((s = u.contentDocument) === null || s === void 0) && s.body
				? (n = $(u.contentDocument.body.childNodes))
				: (n = $(((D = u.shadowRoot) !== null && D !== void 0 ? D : u).childNodes)),
		n.length === 0 ||
			S(u, HTMLVideoElement) ||
			(await n.reduce(
				(r, o) =>
					r
						.then(() => tu(o, e))
						.then((i) => {
							i && t.appendChild(i)
						}),
				Promise.resolve()
			)),
		t
	)
}
function ee(u, t) {
	const e = t.style
	if (!e) return
	const s = window.getComputedStyle(u)
	s.cssText
		? ((e.cssText = s.cssText), (e.transformOrigin = s.transformOrigin))
		: $(s).forEach((D) => {
				let n = s.getPropertyValue(D)
				D === 'font-size' &&
					n.endsWith('px') &&
					(n = `${Math.floor(parseFloat(n.substring(0, n.length - 2))) - 0.1}px`),
					S(u, HTMLIFrameElement) && D === 'display' && n === 'inline' && (n = 'block'),
					D === 'd' && t.getAttribute('d') && (n = `path(${t.getAttribute('d')})`),
					e.setProperty(D, n, s.getPropertyPriority(D))
			})
}
function se(u, t) {
	S(u, HTMLTextAreaElement) && (t.innerHTML = u.value),
		S(u, HTMLInputElement) && t.setAttribute('value', u.value)
}
function De(u, t) {
	if (S(u, HTMLSelectElement)) {
		const e = t,
			s = Array.from(e.children).find((D) => u.value === D.getAttribute('value'))
		s && s.setAttribute('selected', '')
	}
}
function ne(u, t) {
	return S(t, Element) && (ee(u, t), Ot(u, t), se(u, t), De(u, t)), t
}
async function re(u, t) {
	const e = u.querySelectorAll ? u.querySelectorAll('use') : []
	if (e.length === 0) return u
	const s = {}
	for (let n = 0; n < e.length; n++) {
		const o = e[n].getAttribute('xlink:href')
		if (o) {
			const i = u.querySelector(o),
				l = document.querySelector(o)
			!i && l && !s[o] && (s[o] = await tu(l, t, !0))
		}
	}
	const D = Object.values(s)
	if (D.length) {
		const n = 'http://www.w3.org/1999/xhtml',
			r = document.createElementNS(n, 'svg')
		r.setAttribute('xmlns', n),
			(r.style.position = 'absolute'),
			(r.style.width = '0'),
			(r.style.height = '0'),
			(r.style.overflow = 'hidden'),
			(r.style.display = 'none')
		const o = document.createElementNS(n, 'defs')
		r.appendChild(o)
		for (let i = 0; i < D.length; i++) o.appendChild(D[i])
		u.appendChild(r)
	}
	return u
}
async function tu(u, t, e) {
	return !e && t.filter && !t.filter(u)
		? null
		: Promise.resolve(u)
				.then((s) => Nt(s, t))
				.then((s) => te(u, s, t))
				.then((s) => ne(u, s))
				.then((s) => re(s, t))
}
const Tu = /url\((['"]?)([^'"]+?)\1\)/g,
	oe = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,
	ie = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g
function ae(u) {
	const t = u.replace(/([.*+?^${}()|\[\]\/\\])/g, '\\$1')
	return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`, 'g')
}
function le(u) {
	const t = []
	return u.replace(Tu, (e, s, D) => (t.push(D), e)), t.filter((e) => !su(e))
}
async function Fe(u, t, e, s, D) {
	try {
		const n = e ? qt(t, e) : t,
			r = nu(t)
		let o
		if (D) {
			const i = await D(n)
			o = xu(i, r)
		} else o = await ru(n, r, s)
		return u.replace(ae(t), `$1${o}$3`)
	} catch {}
	return u
}
function Ae(u, { preferredFontFormat: t }) {
	return t
		? u.replace(ie, (e) => {
				for (;;) {
					const [s, , D] = oe.exec(e) || []
					if (!D) return ''
					if (D === t) return `src: ${s};`
				}
			})
		: u
}
function $u(u) {
	return u.search(Tu) !== -1
}
async function Pu(u, t, e) {
	if (!$u(u)) return u
	const s = Ae(u, e)
	return le(s).reduce((n, r) => n.then((o) => Fe(o, r, t, e)), Promise.resolve(s))
}
async function J(u, t, e) {
	var s
	const D = (s = t.style) === null || s === void 0 ? void 0 : s.getPropertyValue(u)
	if (D) {
		const n = await Pu(D, null, e)
		return t.style.setProperty(u, n, t.style.getPropertyPriority(u)), !0
	}
	return !1
}
async function ce(u, t) {
	;(await J('background', u, t)) || (await J('background-image', u, t)),
		(await J('mask', u, t)) || (await J('mask-image', u, t))
}
async function Ee(u, t) {
	const e = S(u, HTMLImageElement)
	if (!(e && !su(u.src)) && !(S(u, SVGImageElement) && !su(u.href.baseVal))) return
	const s = e ? u.src : u.href.baseVal,
		D = await ru(s, nu(s), t)
	await new Promise((n, r) => {
		;(u.onload = n), (u.onerror = r)
		const o = u
		o.decode && (o.decode = n),
			o.loading === 'lazy' && (o.loading = 'eager'),
			e ? ((u.srcset = ''), (u.src = D)) : (u.href.baseVal = D)
	})
}
async function fe(u, t) {
	const s = $(u.childNodes).map((D) => Vu(D, t))
	await Promise.all(s).then(() => u)
}
async function Vu(u, t) {
	S(u, Element) && (await ce(u, t), await Ee(u, t), await fe(u, t))
}
function ge(u, t) {
	const { style: e } = u
	t.backgroundColor && (e.backgroundColor = t.backgroundColor),
		t.width && (e.width = `${t.width}px`),
		t.height && (e.height = `${t.height}px`)
	const s = t.style
	return (
		s != null &&
			Object.keys(s).forEach((D) => {
				e[D] = s[D]
			}),
		u
	)
}
const gu = {}
async function Cu(u) {
	let t = gu[u]
	if (t != null) return t
	const s = await (await fetch(u)).text()
	return (t = { url: u, cssText: s }), (gu[u] = t), t
}
async function Bu(u, t) {
	let e = u.cssText
	const s = /url\(["']?([^"')]+)["']?\)/g,
		n = (e.match(/url\([^)]+\)/g) || []).map(async (r) => {
			let o = r.replace(s, '$1')
			return (
				o.startsWith('https://') || (o = new URL(o, u.url).href),
				Iu(o, t.fetchRequestInit, ({ result: i }) => ((e = e.replace(r, `url(${i})`)), [r, i]))
			)
		})
	return Promise.all(n).then(() => e)
}
function hu(u) {
	if (u == null) return []
	const t = [],
		e = /(\/\*[\s\S]*?\*\/)/gi
	let s = u.replace(e, '')
	const D = new RegExp('((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})', 'gi')
	for (;;) {
		const i = D.exec(s)
		if (i === null) break
		t.push(i[0])
	}
	s = s.replace(D, '')
	const n = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,
		r =
			'((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})',
		o = new RegExp(r, 'gi')
	for (;;) {
		let i = n.exec(s)
		if (i === null) {
			if (((i = o.exec(s)), i === null)) break
			n.lastIndex = o.lastIndex
		} else o.lastIndex = n.lastIndex
		t.push(i[0])
	}
	return t
}
async function Ce(u, t) {
	const e = [],
		s = []
	return (
		u.forEach((D) => {
			if ('cssRules' in D)
				try {
					$(D.cssRules || []).forEach((n, r) => {
						if (n.type === CSSRule.IMPORT_RULE) {
							let o = r + 1
							const i = n.href,
								l = Cu(i)
									.then((f) => Bu(f, t))
									.then((f) =>
										hu(f).forEach((_) => {
											try {
												D.insertRule(_, _.startsWith('@import') ? (o += 1) : D.cssRules.length)
											} catch (p) {
												console.error('Error inserting rule from remote css', { rule: _, error: p })
											}
										})
									)
									.catch((f) => {
										console.error('Error loading remote css', f.toString())
									})
							s.push(l)
						}
					})
				} catch (n) {
					const r = u.find((o) => o.href == null) || document.styleSheets[0]
					D.href != null &&
						s.push(
							Cu(D.href)
								.then((o) => Bu(o, t))
								.then((o) =>
									hu(o).forEach((i) => {
										r.insertRule(i, D.cssRules.length)
									})
								)
								.catch((o) => {
									console.error('Error loading remote stylesheet', o)
								})
						),
						console.error('Error inlining remote css file', n)
				}
		}),
		Promise.all(s).then(
			() => (
				u.forEach((D) => {
					if ('cssRules' in D)
						try {
							$(D.cssRules || []).forEach((n) => {
								e.push(n)
							})
						} catch (n) {
							console.error(`Error while reading CSS rules from ${D.href}`, n)
						}
				}),
				e
			)
		)
	)
}
function Be(u) {
	return u
		.filter((t) => t.type === CSSRule.FONT_FACE_RULE)
		.filter((t) => $u(t.style.getPropertyValue('src')))
}
async function he(u, t) {
	if (u.ownerDocument == null) throw new Error('Provided element is not within a Document')
	const e = $(u.ownerDocument.styleSheets),
		s = await Ce(e, t)
	return Be(s)
}
async function me(u, t) {
	const e = await he(u, t)
	return (
		await Promise.all(
			e.map((D) => {
				const n = D.parentStyleSheet ? D.parentStyleSheet.href : null
				return Pu(D.cssText, n, t)
			})
		)
	).join(`
`)
}
async function _e(u, t) {
	const e = t.fontEmbedCSS != null ? t.fontEmbedCSS : t.skipFonts ? null : await me(u, t)
	if (e) {
		const s = document.createElement('style'),
			D = document.createTextNode(e)
		s.appendChild(D), u.firstChild ? u.insertBefore(s, u.firstChild) : u.appendChild(s)
	}
}
async function pe(u, t = {}) {
	const { width: e, height: s } = Uu(u, t),
		D = await tu(u, t, !0)
	return await _e(D, t), await Vu(D, t), ge(D, t), await Vt(D, e, s)
}
async function de(u, t = {}) {
	const { width: e, height: s } = Uu(u, t),
		D = await pe(u, t),
		n = await uu(D),
		r = document.createElement('canvas'),
		o = r.getContext('2d'),
		i = t.pixelRatio || Tt(),
		l = t.canvasWidth || e,
		f = t.canvasHeight || s
	return (
		(r.width = l * i),
		(r.height = f * i),
		t.skipAutoScale || $t(r),
		(r.style.width = `${l}`),
		(r.style.height = `${f}`),
		t.backgroundColor && ((o.fillStyle = t.backgroundColor), o.fillRect(0, 0, r.width, r.height)),
		o.drawImage(n, 0, 0, r.width, r.height),
		r
	)
}
async function be(u, t = {}) {
	return (await de(u, t)).toDataURL()
}
const we =
		/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,
	Qe = Object.hasOwnProperty
class Du {
	constructor() {
		this.occurrences, this.reset()
	}
	slug(t, e) {
		const s = this
		let D = ye(t, e === !0)
		const n = D
		for (; Qe.call(s.occurrences, D); ) s.occurrences[n]++, (D = n + '-' + s.occurrences[n])
		return (s.occurrences[D] = 0), D
	}
	reset() {
		this.occurrences = Object.create(null)
	}
}
function ye(u, t) {
	return typeof u != 'string'
		? ''
		: (t || (u = u.toLowerCase()), u.replace(we, '').replace(/ /g, '-'))
}
function Re(u) {
	let t
	return {
		c() {
			t = M('Download')
		},
		l(e) {
			t = H(e, 'Download')
		},
		m(e, s) {
			b(e, t, s)
		},
		d(e) {
			e && c(t)
		}
	}
}
function mu(u) {
	let t, e, s
	return (
		(e = new qu({ props: { subtle: !0, $$slots: { default: [Se] }, $$scope: { ctx: u } } })),
		{
			c() {
				;(t = R('div')), O(e.$$.fragment), this.h()
			},
			l(D) {
				t = v(D, 'DIV', { class: !0 })
				var n = L(t)
				K(e.$$.fragment, n), n.forEach(c), this.h()
			},
			h() {
				Q(t, 'class', 'quote-notice-button svelte-ytuosn')
			},
			m(D, n) {
				b(D, t, n), Y(e, t, null), (s = !0)
			},
			p(D, n) {
				const r = {}
				n & 8194 && (r.$$scope = { dirty: n, ctx: D }), e.$set(r)
			},
			i(D) {
				s || (U(e.$$.fragment, D), (s = !0))
			},
			o(D) {
				T(e.$$.fragment, D), (s = !1)
			},
			d(D) {
				D && c(t), G(e)
			}
		}
	)
}
function ve(u) {
	let t
	return {
		c() {
			t = M('Credits')
		},
		l(e) {
			t = H(e, 'Credits')
		},
		m(e, s) {
			b(e, t, s)
		},
		d(e) {
			e && c(t)
		}
	}
}
function Se(u) {
	let t, e
	return (
		(t = new zu({
			props: {
				href: '#credits-' + new Du().slug(u[1]),
				$$slots: { default: [ve] },
				$$scope: { ctx: u }
			}
		})),
		{
			c() {
				O(t.$$.fragment)
			},
			l(s) {
				K(t.$$.fragment, s)
			},
			m(s, D) {
				Y(t, s, D), (e = !0)
			},
			p(s, D) {
				const n = {}
				D & 2 && (n.href = '#credits-' + new Du().slug(s[1])),
					D & 8192 && (n.$$scope = { dirty: D, ctx: s }),
					t.$set(n)
			},
			i(s) {
				e || (U(t.$$.fragment, s), (e = !0))
			},
			o(s) {
				T(t.$$.fragment, s), (e = !1)
			},
			d(s) {
				G(t, s)
			}
		}
	)
}
function je(u) {
	let t, e, s, D, n, r, o, i, l, f, _, p, y, j, A, E, w, a, F, h, C, q
	;(E = new Ju({ props: { width: 100, fill: u[4] ? u[4] : 'black' } })),
		(h = new qu({ props: { subtle: !0, $$slots: { default: [Re] }, $$scope: { ctx: u } } })),
		h.$on('click', u[9])
	let B = u[3] && mu(u)
	return {
		c() {
			;(t = R('div')),
				(e = R('div')),
				(s = R('div')),
				(D = R('div')),
				(n = R('div')),
				(r = new Mu(!1)),
				(o = x()),
				(i = R('div')),
				(l = R('p')),
				(f = M(u[1])),
				(_ = x()),
				(p = R('p')),
				(y = M(u[2])),
				(j = x()),
				(A = R('div')),
				O(E.$$.fragment),
				(a = x()),
				(F = R('div')),
				O(h.$$.fragment),
				(C = x()),
				B && B.c(),
				this.h()
		},
		l(g) {
			t = v(g, 'DIV', { class: !0 })
			var d = L(t)
			e = v(d, 'DIV', { class: !0, style: !0 })
			var P = L(e)
			s = v(P, 'DIV', { class: !0, style: !0 })
			var V = L(s)
			D = v(V, 'DIV', { class: !0 })
			var ou = L(D)
			n = v(ou, 'DIV', { class: !0 })
			var iu = L(n)
			;(r = Hu(iu, !1)), iu.forEach(c), ou.forEach(c), (o = I(V)), (i = v(V, 'DIV', { class: !0 }))
			var X = L(i)
			l = v(X, 'P', { class: !0 })
			var au = L(l)
			;(f = H(au, u[1])), au.forEach(c), (_ = I(X)), (p = v(X, 'P', { class: !0 }))
			var lu = L(p)
			;(y = H(lu, u[2])),
				lu.forEach(c),
				X.forEach(c),
				V.forEach(c),
				(j = I(P)),
				(A = v(P, 'DIV', { class: !0 }))
			var Fu = L(A)
			K(E.$$.fragment, Fu),
				Fu.forEach(c),
				P.forEach(c),
				(a = I(d)),
				(F = v(d, 'DIV', { class: !0 }))
			var Z = L(F)
			K(h.$$.fragment, Z), (C = I(Z)), B && B.l(Z), Z.forEach(c), d.forEach(c), this.h()
		},
		h() {
			;(r.a = null),
				Q(n, 'class', 'quote-text svelte-ytuosn'),
				Q(D, 'class', 'quote-text-container svelte-ytuosn'),
				Q(l, 'class', 'svelte-ytuosn'),
				Q(p, 'class', 'svelte-ytuosn'),
				Q(i, 'class', 'quote-author svelte-ytuosn'),
				Q(s, 'class', 'quote-content svelte-ytuosn'),
				Q(s, 'style', u[6]),
				Q(A, 'class', 'quote-logo svelte-ytuosn'),
				Q(e, 'class', 'quote svelte-ytuosn'),
				Q(e, 'style', (w = 'background-image:url(' + u[8] + '); ' + u[7])),
				Q(F, 'class', 'quote-below svelte-ytuosn'),
				Q(t, 'class', 'quote-container svelte-ytuosn')
		},
		m(g, d) {
			b(g, t, d),
				m(t, e),
				m(e, s),
				m(s, D),
				m(D, n),
				r.m(u[0], n),
				m(s, o),
				m(s, i),
				m(i, l),
				m(l, f),
				m(i, _),
				m(i, p),
				m(p, y),
				m(e, j),
				m(e, A),
				Y(E, A, null),
				u[12](e),
				m(t, a),
				m(t, F),
				Y(h, F, null),
				m(F, C),
				B && B.m(F, null),
				(q = !0)
		},
		p(g, [d]) {
			;(!q || d & 1) && r.p(g[0]),
				(!q || d & 2) && Au(f, g[1]),
				(!q || d & 4) && Au(y, g[2]),
				(!q || d & 64) && Q(s, 'style', g[6])
			const P = {}
			d & 16 && (P.fill = g[4] ? g[4] : 'black'),
				E.$set(P),
				(!q || (d & 384 && w !== (w = 'background-image:url(' + g[8] + '); ' + g[7]))) &&
					Q(e, 'style', w)
			const V = {}
			d & 8192 && (V.$$scope = { dirty: d, ctx: g }),
				h.$set(V),
				g[3]
					? B
						? (B.p(g, d), d & 8 && U(B, 1))
						: ((B = mu(g)), B.c(), U(B, 1), B.m(F, null))
					: B &&
						(ku(),
						T(B, 1, 1, () => {
							B = null
						}),
						Lu())
		},
		i(g) {
			q || (U(E.$$.fragment, g), U(h.$$.fragment, g), U(B), (q = !0))
		},
		o(g) {
			T(E.$$.fragment, g), T(h.$$.fragment, g), T(B), (q = !1)
		},
		d(g) {
			g && c(t), G(E), u[12](null), G(h), B && B.d()
		}
	}
}
const _u = 2e3
function ke(u, t) {
	const e = document.createElement('a')
	e.setAttribute('download', t), (e.href = u), e.click()
}
function Le(u, t, e) {
	let s,
		D,
		n,
		{ background: r = '' } = t,
		{ text: o = '' } = t,
		{ author: i = '' } = t,
		{ author_description: l = '' } = t,
		{ notice: f = null } = t,
		{ color: _ = null } = t,
		{ padding: p = null } = t,
		y
	async function j(E) {
		E.target
		const w = y.scrollWidth / y.scrollHeight,
			a = await be(y, { canvasWidth: _u, canvasHeight: _u / w }),
			F = `${i} on AI risks.png`
		ke(a, F)
	}
	function A(E) {
		Wu[E ? 'unshift' : 'push'](() => {
			;(y = E), e(5, y)
		})
	}
	return (
		(u.$$set = (E) => {
			'background' in E && e(10, (r = E.background)),
				'text' in E && e(0, (o = E.text)),
				'author' in E && e(1, (i = E.author)),
				'author_description' in E && e(2, (l = E.author_description)),
				'notice' in E && e(3, (f = E.notice)),
				'color' in E && e(4, (_ = E.color)),
				'padding' in E && e(11, (p = E.padding))
		}),
		(u.$$.update = () => {
			u.$$.dirty & 1024 &&
				e(
					8,
					(s = new URL(
						Object.assign({
							'../../assets/quote-bg/altman.jpg': ut,
							'../../assets/quote-bg/amodei.jpg': tt,
							'../../assets/quote-bg/bengio.jpg': et,
							'../../assets/quote-bg/biden.jpg': st,
							'../../assets/quote-bg/black.jpg': Dt,
							'../../assets/quote-bg/brockman.jpg': nt,
							'../../assets/quote-bg/butler.jpg': rt,
							'../../assets/quote-bg/cais_statement.jpg': ot,
							'../../assets/quote-bg/dark_grey.jpg': it,
							'../../assets/quote-bg/gates.jpg': at,
							'../../assets/quote-bg/guterres.jpg': lt,
							'../../assets/quote-bg/harris.jpg': Ft,
							'../../assets/quote-bg/hassabis.jpg': At,
							'../../assets/quote-bg/hawking.jpg': ct,
							'../../assets/quote-bg/hinton.jpg': Et,
							'../../assets/quote-bg/jun.jpg': ft,
							'../../assets/quote-bg/lecun.jpg': gt,
							'../../assets/quote-bg/leyen.jpg': Ct,
							'../../assets/quote-bg/light_blue.jpg': Bt,
							'../../assets/quote-bg/light_grey.jpg': ht,
							'../../assets/quote-bg/musk.jpg': mt,
							'../../assets/quote-bg/old.jpg': _t,
							'../../assets/quote-bg/pope.jpg': pt,
							'../../assets/quote-bg/putin.jpg': dt,
							'../../assets/quote-bg/qiang.jpg': bt,
							'../../assets/quote-bg/russell.jpg': wt,
							'../../assets/quote-bg/suleyman.jpg': Qt,
							'../../assets/quote-bg/summit_declaration.jpg': yt,
							'../../assets/quote-bg/sunak.jpg': Rt,
							'../../assets/quote-bg/tallinn.jpg': vt,
							'../../assets/quote-bg/trump.jpg': St,
							'../../assets/quote-bg/turing.jpg': jt,
							'../../assets/quote-bg/white.jpg': kt,
							'../../assets/quote-bg/yudkowsky.jpg': Lt
						})[`../../assets/quote-bg/${r}.jpg`],
						import.meta.url
					).href)
				),
				u.$$.dirty & 16 && e(7, (D = _ ? `color: ${_}` : '')),
				u.$$.dirty & 2048 && e(6, (n = p ? `padding: ${p} 0 0 ${p};` : ''))
		}),
		[o, i, l, f, _, y, n, D, s, j, r, p, A]
	)
}
class qe extends Su {
	constructor(t) {
		super(),
			ju(this, t, Le, je, yu, {
				background: 10,
				text: 0,
				author: 1,
				author_description: 2,
				notice: 3,
				color: 4,
				padding: 11
			})
	}
}
const pu = {
	title: 'Quotes',
	description: 'Quotes about risks from artificial intelligence',
	date: '2024-01-26',
	slug: 'quotes',
	categories: []
}
function du(u, t, e) {
	const s = u.slice()
	return (s[2] = t[e]), s
}
function bu(u, t, e) {
	const s = u.slice()
	return (s[2] = t[e]), s
}
function wu(u) {
	let t, e
	const s = [u[2]]
	let D = {}
	for (let n = 0; n < s.length; n += 1) D = Ru(D, s[n])
	return (
		(t = new qe({ props: D })),
		{
			c() {
				O(t.$$.fragment)
			},
			l(n) {
				K(t.$$.fragment, n)
			},
			m(n, r) {
				Y(t, n, r), (e = !0)
			},
			p(n, r) {
				const o = r & 1 ? Gu(s, [Xu(n[2])]) : {}
				t.$set(o)
			},
			i(n) {
				e || (U(t.$$.fragment, n), (e = !0))
			},
			o(n) {
				T(t.$$.fragment, n), (e = !1)
			},
			d(n) {
				G(t, n)
			}
		}
	)
}
function Ue(u) {
	let t,
		e = 'Background credits',
		s,
		D,
		n = z(u[0]),
		r = []
	for (let o = 0; o < n.length; o += 1) r[o] = Qu(du(u, n, o))
	return {
		c() {
			;(t = R('h2')), (t.textContent = e), (s = x())
			for (let o = 0; o < r.length; o += 1) r[o].c()
			D = W()
		},
		l(o) {
			;(t = v(o, 'H2', { 'data-svelte-h': !0 })),
				Ku(t) !== 'svelte-nrmcq0' && (t.textContent = e),
				(s = I(o))
			for (let i = 0; i < r.length; i += 1) r[i].l(o)
			D = W()
		},
		m(o, i) {
			b(o, t, i), b(o, s, i)
			for (let l = 0; l < r.length; l += 1) r[l] && r[l].m(o, i)
			b(o, D, i)
		},
		p(o, i) {
			if (i & 1) {
				n = z(o[0])
				let l
				for (l = 0; l < n.length; l += 1) {
					const f = du(o, n, l)
					r[l] ? r[l].p(f, i) : ((r[l] = Qu(f)), r[l].c(), r[l].m(D.parentNode, D))
				}
				for (; l < r.length; l += 1) r[l].d(1)
				r.length = n.length
			}
		},
		d(o) {
			o && (c(t), c(s), c(D)), vu(r, o)
		}
	}
}
function xe(u) {
	let t,
		e = u[2].author + '',
		s,
		D,
		n = u[2].notice + '',
		r
	return {
		c() {
			;(t = R('h3')), (s = M(e)), (D = x()), (r = M(n)), this.h()
		},
		l(o) {
			t = v(o, 'H3', { id: !0 })
			var i = L(t)
			;(s = H(i, e)), i.forEach(c), (D = I(o)), (r = H(o, n)), this.h()
		},
		h() {
			Q(t, 'id', 'credits-' + new Du().slug(u[2].author))
		},
		m(o, i) {
			b(o, t, i), m(t, s), b(o, D, i), b(o, r, i)
		},
		p: Yu,
		d(o) {
			o && (c(t), c(D), c(r))
		}
	}
}
function Qu(u) {
	let t,
		e = u[2].notice && xe(u)
	return {
		c() {
			e && e.c(), (t = W())
		},
		l(s) {
			e && e.l(s), (t = W())
		},
		m(s, D) {
			e && e.m(s, D), b(s, t, D)
		},
		p(s, D) {
			s[2].notice && e.p(s, D)
		},
		d(s) {
			s && c(t), e && e.d(s)
		}
	}
}
function Ie(u) {
	let t,
		e,
		s = pu.title + '',
		D,
		n,
		r,
		o,
		i,
		l = u[0].some(Te),
		f,
		_
	document.title = Zu
	const p = [pu]
	let y = {}
	for (let a = 0; a < p.length; a += 1) y = Ru(y, p[a])
	r = new Nu({ props: y })
	let j = z(u[0]),
		A = []
	for (let a = 0; a < j.length; a += 1) A[a] = wu(bu(u, j, a))
	const E = (a) =>
		T(A[a], 1, 1, () => {
			A[a] = null
		})
	let w = l && Ue(u)
	return {
		c() {
			;(t = x()), (e = R('h1')), (D = M(s)), (n = x()), O(r.$$.fragment), (o = x())
			for (let a = 0; a < A.length; a += 1) A[a].c()
			;(i = x()), w && w.c(), (f = W())
		},
		l(a) {
			Ou('svelte-1az6e94', document.head).forEach(c), (t = I(a)), (e = v(a, 'H1', {}))
			var h = L(e)
			;(D = H(h, s)), h.forEach(c), (n = I(a)), K(r.$$.fragment, a), (o = I(a))
			for (let C = 0; C < A.length; C += 1) A[C].l(a)
			;(i = I(a)), w && w.l(a), (f = W())
		},
		m(a, F) {
			b(a, t, F), b(a, e, F), m(e, D), b(a, n, F), Y(r, a, F), b(a, o, F)
			for (let h = 0; h < A.length; h += 1) A[h] && A[h].m(a, F)
			b(a, i, F), w && w.m(a, F), b(a, f, F), (_ = !0)
		},
		p(a, [F]) {
			const h = {}
			if ((r.$set(h), F & 1)) {
				j = z(a[0])
				let C
				for (C = 0; C < j.length; C += 1) {
					const q = bu(a, j, C)
					A[C]
						? (A[C].p(q, F), U(A[C], 1))
						: ((A[C] = wu(q)), A[C].c(), U(A[C], 1), A[C].m(i.parentNode, i))
				}
				for (ku(), C = j.length; C < A.length; C += 1) E(C)
				Lu()
			}
			l && w.p(a, F)
		},
		i(a) {
			if (!_) {
				U(r.$$.fragment, a)
				for (let F = 0; F < j.length; F += 1) U(A[F])
				_ = !0
			}
		},
		o(a) {
			T(r.$$.fragment, a), (A = A.filter(Boolean))
			for (let F = 0; F < A.length; F += 1) T(A[F])
			_ = !1
		},
		d(a) {
			a && (c(t), c(e), c(n), c(o), c(i), c(f)), G(r, a), vu(A, a), w && w.d(a)
		}
	}
}
const Te = (u) => u.notice
function $e(u, t, e) {
	let { data: s } = t
	const { quotes: D } = s
	return (
		(u.$$set = (n) => {
			'data' in n && e(1, (s = n.data))
		}),
		[D, s]
	)
}
class Xe extends Su {
	constructor(t) {
		super(), ju(this, t, $e, Ie, yu, { data: 1 })
	}
}
export { Xe as default }
