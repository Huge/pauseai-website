import {
	s as pe,
	c as u,
	b as d,
	f as c,
	g as y,
	d as m,
	l as r,
	n as A,
	j as o,
	G as ft,
	t as U,
	h as j,
	i as W,
	k as M,
	m as h,
	aj as pn,
	J as Ut,
	N as zn,
	I as dn,
	ad as dt
} from './scheduler.D9JQr37X.js'
import {
	S as de,
	i as me,
	c as se,
	b as qe,
	m as ue,
	t as ce,
	e as mn,
	a as he,
	d as fe,
	g as vn
} from './index.D-WnFt3a.js'
import { e as pt } from './each.Gi_i5kkj.js'
import { P as Bn } from './PostMeta.BRGG6AYg.js'
import { B as Dn } from './Button.Ip6Rcx0-.js'
import { t as On } from './Toaster.svelte_svelte_type_style_lang.BgOkaIRN.js'
import { A as Rn } from './a.YKMG9Usu.js'
function qn(n) {
	let e,
		i = `Half of AI researchers <a href="https://aiimpacts.org/2022-expert-survey-on-progress-in-ai/">believe</a>
	that there is a 10% or greater chance that the invention of artificial superintelligence will mean
	the end of humanity. Among AI safety scientists, this chance is
	<a href="https://forum.effectivealtruism.org/posts/8CM9vZ2nnQsWJNsHx/existential-risk-from-ai-survey-results">estimated</a>
	to be an average of 30%. Notable examples of individuals sounding the alarm are Prof.
	<a href="https://www.youtube.com/watch?v=Y6Sgp7y178k">Geoffrey Hinton</a>
	and Prof.
	<a href="https://yoshuabengio.org/2023/05/22/how-rogue-ais-may-arise/">Yoshua Bengio</a>, both
	Turing-award winners and pioneers of the deep learning methods that are currently achieving the
	most success. The existential risk of AI has been acknowledged by
	<a href="https://www.safe.ai/statement-on-ai-risk">hundreds of scientists</a>, the
	<a href="https://twitter.com/gcolbourn/status/1669104216307015680">UN</a>, the US and recently the
	<a href="https://twitter.com/EU_Commission/status/1702295053668946148">EU</a>.`,
		a,
		l,
		b = `To make a long story short: we don't know how to align AI with the complex goals and values that
	humans have. When a superintelligent system is realised, there is a significant risk that one of
	these instances will pursue a misaligned goal without us being able to stop it. And even if such a
	superhuman AI will remain under human control, the one wielding such a power could use this to
	drastically, irreversibly change the world. Such an AI could be used to develop new technologies
	and weapons, manipulate masses of people or topple governments.`
	return {
		c() {
			;(e = u('p')), (e.innerHTML = i), (a = d()), (l = u('p')), (l.textContent = b)
		},
		l(f) {
			;(e = c(f, 'P', { 'data-svelte-h': !0 })),
				y(e) !== 'svelte-aktldn' && (e.innerHTML = i),
				(a = m(f)),
				(l = c(f, 'P', { 'data-svelte-h': !0 })),
				y(l) !== 'svelte-v79x5d' && (l.textContent = b)
		},
		m(f, v) {
			r(f, e, v), r(f, a, v), r(f, l, v)
		},
		p: A,
		i: A,
		o: A,
		d(f) {
			f && (o(e), o(a), o(l))
		}
	}
}
class Fn extends de {
	constructor(e) {
		super(), me(this, e, null, qn, pe, {})
	}
}
function Gn(n) {
	let e,
		i = `The latest AI systems can already analyze and write software. They <a href="https://betterprogramming.pub/i-used-gpt-3-to-find-213-security-vulnerabilities-in-a-single-codebase-cc3870ba9411">can find vulnerabilities</a>
	in software, and
	<a href="https://blog.checkpoint.com/2023/03/15/check-point-research-conducts-initial-security-analysis-of-chatgpt4-highlighting-potential-scenarios-for-accelerated-cybercrime/">they could be used to exploit them</a>. As AI capabilities grow, so will the vulnerabilities they can detect and the exploits they can
	create. They are not yet as good at this as the best humans are, so right now the danger is
	limited. However, capabilities are rapidly increasing.`,
		a,
		l,
		b = `Note that AI also enables completely novel types of attacks. For example, AI can be used to <a href="https://beebom.com/ai-crack-password-listening-keyboard-sounds/">hear the password you typed from an online call</a>
	or use
	<a href="https://www.marktechpost.com/2023/02/15/cmu-researchers-create-an-ai-model-that-can-detect-the-pose-of-multiple-humans-in-a-room-using-only-the-signals-from-wifi/">Wi-Fi to see humans through walls</a>. AI can also be used to make
	<a href="https://www.hyas.com/blog/blackmamba-using-ai-to-generate-polymorphic-malware">self-modifying malware</a>, which makes it far harder to detect.`,
		f,
		v,
		P = `There will most likely come a point where an AI is better at hacking than the best human hackers.
	This can go wrong in many ways.`,
		T,
		g,
		_ = `<li><strong>Infrastructure</strong>: Cyberweapons can be used to gain access to or disable critical
		infrastructure, such as
		<a href="https://en.wikipedia.org/wiki/Colonial_Pipeline_ransomware_attack">oil pipelines</a>.</li> <li><strong>Financial</strong>: Cyberweapons can be used to
		<a href="https://en.wikipedia.org/wiki/2015%E2%80%932016_SWIFT_banking_hack">steal money from banks</a>, or to
		<a href="https://en.wikipedia.org/wiki/2010_flash_crash">manipulate the stock market</a>.</li> <li><strong>Military</strong>: Equipment such as weapons and sensors are increasingly dependent on
		wireless connectivity and complex software.</li> <ul></ul>`
	return {
		c() {
			;(e = u('p')),
				(e.innerHTML = i),
				(a = d()),
				(l = u('p')),
				(l.innerHTML = b),
				(f = d()),
				(v = u('p')),
				(v.textContent = P),
				(T = d()),
				(g = u('ul')),
				(g.innerHTML = _)
		},
		l(x) {
			;(e = c(x, 'P', { 'data-svelte-h': !0 })),
				y(e) !== 'svelte-xtql4s' && (e.innerHTML = i),
				(a = m(x)),
				(l = c(x, 'P', { 'data-svelte-h': !0 })),
				y(l) !== 'svelte-wn7vh5' && (l.innerHTML = b),
				(f = m(x)),
				(v = c(x, 'P', { 'data-svelte-h': !0 })),
				y(v) !== 'svelte-ymxejl' && (v.textContent = P),
				(T = m(x)),
				(g = c(x, 'UL', { 'data-svelte-h': !0 })),
				y(g) !== 'svelte-sa8uxq' && (g.innerHTML = _)
		},
		m(x, I) {
			r(x, e, I), r(x, a, I), r(x, l, I), r(x, f, I), r(x, v, I), r(x, T, I), r(x, g, I)
		},
		p: A,
		i: A,
		o: A,
		d(x) {
			x && (o(e), o(a), o(l), o(f), o(v), o(T), o(g))
		}
	}
}
class Yn extends de {
	constructor(e) {
		super(), me(this, e, null, Gn, pe, {})
	}
}
function Vn(n) {
	let e,
		i = `I would appreciate it if you could spend 30 minutes of your time to discuss this urgent topic with
	me.`
	return {
		c() {
			;(e = u('p')), (e.textContent = i)
		},
		l(a) {
			;(e = c(a, 'P', { 'data-svelte-h': !0 })), y(e) !== 'svelte-117x6jc' && (e.textContent = i)
		},
		m(a, l) {
			r(a, e, l)
		},
		p: A,
		i: A,
		o: A,
		d(a) {
			a && o(e)
		}
	}
}
class Xn extends de {
	constructor(e) {
		super(), me(this, e, null, Vn, pe, {})
	}
}
function Jn(n) {
	let e,
		i = `As far as I know, there have been no debates in parliament about AI safety so far. I would like to
	ask you to consider proposing a session about this urgent topic.`
	return {
		c() {
			;(e = u('p')), (e.textContent = i)
		},
		l(a) {
			;(e = c(a, 'P', { 'data-svelte-h': !0 })), y(e) !== 'svelte-koofq5' && (e.textContent = i)
		},
		m(a, l) {
			r(a, e, l)
		},
		p: A,
		i: A,
		o: A,
		d(a) {
			a && o(e)
		}
	}
}
class Kn extends de {
	constructor(e) {
		super(), me(this, e, null, Jn, pe, {})
	}
}
function Qn(n) {
	let e,
		i = `I would like to ask you to work towards a treaty that prevents the worst of the risks that AI
	poses, and propose this draft at the upcoming Seoul AI Safety Summit in May. One country should
	take the lead, and at this moment, not a single one is doing so.`,
		a,
		l,
		b = `The most important part of such a document is that there should be some mechanism in place that
	can pause dangerous training runs. Ideally, this happens before a model is trained, as AI
	accidents might happen during lab tests.`
	return {
		c() {
			;(e = u('p')), (e.textContent = i), (a = d()), (l = u('p')), (l.textContent = b)
		},
		l(f) {
			;(e = c(f, 'P', { 'data-svelte-h': !0 })),
				y(e) !== 'svelte-1skwmqn' && (e.textContent = i),
				(a = m(f)),
				(l = c(f, 'P', { 'data-svelte-h': !0 })),
				y(l) !== 'svelte-9jcn2o' && (l.textContent = b)
		},
		m(f, v) {
			r(f, e, v), r(f, a, v), r(f, l, v)
		},
		p: A,
		i: A,
		o: A,
		d(f) {
			f && (o(e), o(a), o(l))
		}
	}
}
class Zn extends de {
	constructor(e) {
		super(), me(this, e, null, Qn, pe, {})
	}
}
function ea(n) {
	let e,
		i = `As far as I know, our country has not yet formally acknowledged the existential risk of AI.
	Without that acknowledgement, it is unlikely that we will be able to take the necessary steps to
	mitigate this risk. I would like to ask you to consider proposing a motion to acknowledge the
	existential risk of AI.`
	return {
		c() {
			;(e = u('p')), (e.textContent = i)
		},
		l(a) {
			;(e = c(a, 'P', { 'data-svelte-h': !0 })), y(e) !== 'svelte-1hejtgn' && (e.textContent = i)
		},
		m(a, l) {
			r(a, e, l)
		},
		p: A,
		i: A,
		o: A,
		d(a) {
			a && o(e)
		}
	}
}
class ta extends de {
	constructor(e) {
		super(), me(this, e, null, ea, pe, {})
	}
}
const na = {
	title: 'Email Builder',
	slug: 'email-builder',
	description: 'A web app to help you write an email to a politician. Convince them to Pause AI!',
	date: '2023-12-08',
	categories: []
}
var Be = 'text/plain',
	aa = 'text/html'
function ia() {
	;(console.warn || console.log).apply(console, arguments)
}
ia.bind('[clipboard-polyfill]')
var Wt = typeof window > 'u' ? void 0 : window,
	oa = typeof globalThis > 'u' ? void 0 : globalThis,
	gn,
	yn,
	bn,
	wn =
		(bn = (gn = Wt) == null ? void 0 : gn.Promise) != null
			? bn
			: (yn = oa) == null
				? void 0
				: yn.Promise
function la() {
	if (!wn)
		throw new Error(
			'No `Promise` implementation available for `clipboard-polyfill`. Consider using: https://github.com/lgarron/clipboard-polyfill#flat-file-version-with-promise-included'
		)
	return wn
}
var _n = typeof navigator > 'u' ? void 0 : navigator,
	z = _n == null ? void 0 : _n.clipboard,
	xn
;(xn = z == null ? void 0 : z.read) == null || xn.bind(z)
var Cn
;(Cn = z == null ? void 0 : z.readText) == null || Cn.bind(z)
var kn,
	Tn = (kn = z == null ? void 0 : z.write) == null ? void 0 : kn.bind(z),
	In
;(In = z == null ? void 0 : z.writeText) == null || In.bind(z)
var $n,
	Nt = ($n = Wt) == null ? void 0 : $n.ClipboardItem,
	F = la(),
	ze = Wt
function ra() {
	return (
		typeof ClipboardEvent > 'u' &&
		typeof (ze == null ? void 0 : ze.clipboardData) < 'u' &&
		typeof (ze == null ? void 0 : ze.clipboardData.setData) < 'u'
	)
}
function sa(n) {
	if (!ze.clipboardData) return !1
	var e = ze.clipboardData.setData('Text', n)
	return e
}
function ua(n, e, i) {
	n.success = !0
	for (var a in e) {
		var l = e[a],
			b = i.clipboardData
		b.setData(a, l), a === Be && b.getData(a) !== l && (n.success = !1)
	}
	i.preventDefault()
}
function Hn(n) {
	var e = { success: !1 },
		i = ua.bind(this, e, n)
	document.addEventListener('copy', i)
	try {
		document.execCommand('copy')
	} finally {
		document.removeEventListener('copy', i)
	}
	return e.success
}
function Sn(n, e) {
	jn(n)
	var i = Hn(e)
	return Nn(), i
}
function ca(n) {
	var e = document.createElement('div')
	e.setAttribute('style', '-webkit-user-select: text !important'),
		(e.textContent = 'temporary element'),
		document.body.appendChild(e)
	var i = Sn(e, n)
	return document.body.removeChild(e), i
}
function ha(n) {
	var e = document.createElement('div')
	e.setAttribute('style', '-webkit-user-select: text !important')
	var i = e
	e.attachShadow && (i = e.attachShadow({ mode: 'open' }))
	var a = document.createElement('span')
	;(a.innerText = n), i.appendChild(a), document.body.appendChild(e), jn(a)
	var l = document.execCommand('copy')
	return Nn(), document.body.removeChild(e), l
}
function jn(n) {
	var e = document.getSelection()
	if (e) {
		var i = document.createRange()
		i.selectNodeContents(n), e.removeAllRanges(), e.addRange(i)
	}
}
function Nn() {
	var n = document.getSelection()
	n && n.removeAllRanges()
}
function fa(n) {
	var e = Be in n
	if (ra()) {
		if (!e) throw new Error('No `text/plain` value was specified.')
		if (sa(n[Be])) return !0
		throw new Error('Copying failed, possibly because the user rejected it.')
	}
	return !!(
		Hn(n) ||
		navigator.userAgent.indexOf('Edge') > -1 ||
		Sn(document.body, n) ||
		ca(n) ||
		ha(n[Be])
	)
}
function Un(n, e) {
	for (var i = [], a = 0; a < n.length; a++) {
		var l = n[a]
		i.push(e(l))
	}
	return F.all(i).then((b) => {
		for (var f = {}, v = 0; v < n.length; v++) f[n[v]] = b[v]
		return f
	})
}
var pa = F.resolve(),
	da = () => F.resolve(!0),
	An = F.resolve(!1)
function ma(n) {
	return new F((e, i) => {
		try {
			e(n())
		} catch (a) {
			i(a)
		}
	})
}
function jt(n, e) {
	for (var i = 0; i < n.length; i++) {
		var a = n[i]
		if (a.types.indexOf(e) !== -1) return !0
	}
	return !1
}
function va(n, e) {
	var i,
		a = Object.keys(n),
		l = {}
	for (var b in n) {
		var f = n[b]
		typeof f == 'string' ? (l[b] = ya(b, f)) : (l[b] = f)
	}
	var v = (i = e == null ? void 0 : e.presentationStyle) != null ? i : 'unspecified'
	function P(T) {
		return F.resolve(l[T])
	}
	return { types: a, presentationStyle: v, getType: P }
}
var ga = va
function ya(n, e) {
	return new Blob([e], { type: n })
}
function ba(n) {
	return new F((e, i) => {
		var a = new FileReader()
		a.addEventListener('load', () => {
			var l = a.result
			typeof l == 'string' ? e(l) : i('could not convert blob to string')
		}),
			a.readAsText(n)
	})
}
function wa(n) {
	return Un(n.types, function (e) {
		return n.getType(e)
	}).then(
		(e) =>
			new F((i, a) => {
				var l = {}
				n.presentationStyle && (l.presentationStyle = n.presentationStyle),
					Nt ? i(new Nt(e, l)) : a('window.ClipboardItem is not defined')
			})
	)
}
function _a(n, e) {
	return n.getType(e).then((i) => ba(i))
}
function xa(n) {
	return Un(n.types, function (e) {
		return _a(n, e)
	})
}
function Ca(n) {
	return ma(() => {
		if (Tn && Nt) {
			var e = Tn
			return F.all(n.map(wa)).then((i) =>
				e(i)
					.then(da)
					.catch((a) => {
						if (!jt(n, Be) && !jt(n, aa)) throw a
						return An
					})
			)
		}
		return An
	}).then((e) =>
		e
			? pa
			: (jt(n, Be),
				xa(n[0]).then((i) => {
					if (!fa(i)) throw new Error('write() failed')
				}))
	)
}
function Ln(n, e, i) {
	const a = n.slice()
	return (a[14] = e[i]), a
}
function En(n, e, i) {
	const a = n.slice()
	return (a[14] = e[i]), a
}
function ka(n) {
	let e
	return {
		c() {
			e = U('Find their email address')
		},
		l(i) {
			e = W(i, 'Find their email address')
		},
		m(i, a) {
			r(i, e, a)
		},
		d(i) {
			i && o(e)
		}
	}
}
function Pn(n) {
	let e,
		i = n[14].name + '',
		a,
		l,
		b = ' ',
		f,
		v,
		P
	function T() {
		return n[10](n[14])
	}
	return {
		c() {
			;(e = u('button')), (a = U(i)), (f = U(b)), this.h()
		},
		l(g) {
			e = c(g, 'BUTTON', { class: !0 })
			var _ = j(e)
			;(a = W(_, i)), _.forEach(o), (f = W(g, b)), this.h()
		},
		h() {
			M(e, 'class', (l = dt(n[0] == n[14] ? 'tag tag--selected' : 'tag') + ' svelte-1fjz5fk'))
		},
		m(g, _) {
			r(g, e, _), h(e, a), r(g, f, _), v || ((P = Ut(e, 'click', T)), (v = !0))
		},
		p(g, _) {
			;(n = g),
				_ & 1 &&
					l !== (l = dt(n[0] == n[14] ? 'tag tag--selected' : 'tag') + ' svelte-1fjz5fk') &&
					M(e, 'class', l)
		},
		d(g) {
			g && (o(e), o(f)), (v = !1), P()
		}
	}
}
function Mn(n) {
	let e,
		i = n[14].name + '',
		a,
		l,
		b = ' ',
		f,
		v,
		P
	function T() {
		return n[11](n[14])
	}
	return {
		c() {
			;(e = u('button')), (a = U(i)), (f = U(b)), this.h()
		},
		l(g) {
			e = c(g, 'BUTTON', { class: !0 })
			var _ = j(e)
			;(a = W(_, i)), _.forEach(o), (f = W(g, b)), this.h()
		},
		h() {
			M(e, 'class', (l = dt(n[1] == n[14] ? 'tag tag--selected' : 'tag') + ' svelte-1fjz5fk'))
		},
		m(g, _) {
			r(g, e, _), h(e, a), r(g, f, _), v || ((P = Ut(e, 'click', T)), (v = !0))
		},
		p(g, _) {
			;(n = g),
				_ & 2 &&
					l !== (l = dt(n[1] == n[14] ? 'tag tag--selected' : 'tag') + ' svelte-1fjz5fk') &&
					M(e, 'class', l)
		},
		d(g) {
			g && (o(e), o(f)), (v = !1), P()
		}
	}
}
function Ta(n) {
	let e
	return {
		c() {
			e = U('Copy')
		},
		l(i) {
			e = W(i, 'Copy')
		},
		m(i, a) {
			r(i, e, a)
		},
		d(i) {
			i && o(e)
		}
	}
}
function Ia(n) {
	let e,
		i,
		a,
		l,
		b,
		f,
		v,
		P,
		T,
		g,
		_ = 'Why sending an email is awesome',
		x,
		I,
		Fe = `<li><b>Exit your filter bubble.</b> If you&#39;re talking about AI risks or pausing in a discord server or
		twitter, you&#39;re mostly preaching to the choir. With email, you can reach people who don&#39;t read about
		this stuff all day.</li> <li><b>It&#39;s the medium for the pros.</b> Politicians, journalists, lobbyists - all of them use email.
		If you want to be taken seriously, you should use email too.</li> <li><b>No social pressure.</b> If you post something publicly, a politician might be hesitant to respond
		to a topic they haven&#39;t made up their mind on.</li> <li><b>Not many people actually do it.</b> That means that your email will stand out.</li>`,
		ve,
		H,
		ge = 'Who to send to',
		ye,
		N,
		be,
		zt = `<b>Ideally, someone who might visit the next Summit.</b> The next AI Safety Summit will be attended
		by many countries. Who is likely to represent your country? Maybe a minister of foreign affairs or
		science?`,
		mt,
		we,
		Bt = `<b>Someone who is likely to act.</b> Is there a politician who&#39;s often at the forefront of discussing
		new digital / science topics? Perhaps even someone who&#39;s already shared concerns about AI? Or someone
		who&#39;s just good at pitching new, controversial topics and convincing others?`,
		vt,
		G,
		_e,
		Dt = 'Someone who politically represents you.',
		gt,
		Y,
		yt,
		bt,
		K,
		xe,
		Ot = 'Enter their name:',
		wt,
		O,
		Ge,
		Q,
		Rt = 'Pick a concern',
		Ye,
		B,
		Ce,
		qt = `<b>What are you most concerned about?</b> Don&#39;t be afraid of being judged for your concerns. It&#39;s
		the job of politicians to represent you - including the things that you worry about.`,
		_t,
		ke,
		Ft = `<b>Consider the person</b> who you&#39;re writing to, and what they may already believe. If you&#39;re writing
		to someone who&#39;s already worked on IT and cybersecurity issues before, consider focsing on that particular
		issue.`,
		xt,
		V,
		Te,
		Gt = 'Select one:',
		Ct,
		Ve,
		Z,
		Yt = 'Pick an action',
		Xe,
		R,
		Ie,
		Vt = `What do you want the recipient to do after receiving your mail? Prepare for the summit, organize
		a debate, have a meeting? As with every section, you can replace the suggested text if you have
		a better idea.`,
		kt,
		X,
		$e,
		Xt = 'Select one:',
		Tt,
		Je,
		ee,
		Jt = 'Last steps',
		Ke,
		te,
		Kt = `Before sending the email you have to manually replace "__THING__" and "__COUNTRY__". It can also
	be effective to further personalize the message. Here are some tips:`,
		Qe,
		J,
		Qt = `<li><b>Know your audience.</b> Read up about the person you&#39;re sending a letter to. What are they working
		on? How do they think about AI? What has happened in their professional life the last weeks?</li> <li><b>Share something about yourself.</b> Why do you care about AI safety? Why did you take the time
		to send this letter?</li> <li><b>Make it newsworthy.</b> The mail template is not always up-to-date. Make sure you mention recent
		AI policy advancements (especially local ones).</li>`,
		Ze,
		ne,
		Zt =
			'For more information, you can take a look at our page on <a href="/writing-a-letter">how to write a letter or email to someone in power</a>.',
		et,
		ae,
		en = 'Result',
		tt,
		ie,
		tn = 'You can edit the message directly in the browser.',
		nt,
		w,
		oe,
		It,
		De = (n[2] || '__ENTER_NAME__') + '',
		at,
		$t,
		At,
		Ae,
		nn = `First of all, thank you very much for everything you have done for __THING__. I am emailing you
		today to bring an issue to your attention, in which I believe __COUNTRY__ and you in particular
		can play a very important role. The issue is the existential threat of artificial intelligence.`,
		Lt,
		C,
		it,
		Le,
		an = `The advancements in the AI landscape have progressed much faster than anticipated. In 2020, it
		was
		<a href="https://www.metaculus.com/questions/3479/date-weakly-general-ai-is-publicly-known">estimated</a>
		that an AI would pass university entrance exams by 2050. This goal was achieved in March 2023 by
		the system GPT-4 from OpenAI. These massive, unexpected leaps have prompted many experts to request
		a pause in AI development through an open letter to major AI companies. The
		<a href="https://futureoflife.org/open-letter/pause-giant-ai-experiments/">letter</a>
		has been signed over 33,000 times so far, including many AI researchers and tech figures.`,
		Et,
		Ee,
		on = `Unfortunately, it seems that companies are not willing to jeopardise their competitive position
		by voluntarily halting development. A pause would need to be imposed by a government. Luckily,
		there seems to be broad support for slowing down AI development. A recent
		<a href="https://www.vox.com/future-perfect/2023/9/19/23879648/americans-artificial-general-intelligence-ai-policy-poll">poll</a>
		indicates that 63% of American support regulations to prevent AI companies from building superintelligent
		AI. At the national level, a pause is also challenging because countries have incentives to not fall
		behind in AI capabilities. That&#39;s why we need an international solution.`,
		Pt,
		Pe,
		ln = `The UK organised an AI Safety Summit on November 1st and 2nd at Bletchley Park. We hoped that
		during this summit, leaders will work towards sensible solutions that prevent the very worst of
		the risks that AI poses. The Summit did not lead to any international agreement or policy. We
		have seen proposals being written by the
		<a href="https://twitter.com/SenBlumenthal/status/1700147410880569475">US Senate</a>, and even
		among AI company CEOs, there is
		<a href="https://www.pbs.org/newshour/politics/watch-overwhelming-consensus-for-artificial-intelligence-regulation-musk-says-after-senate-tech-meeting">“overwhelming consensus”</a>
		that regulation is needed. Unfortunately,
		<a href="https://twitter.com/DanielColson6/status/1704976418596352342">none</a>
		of the existing proposals would do anything to slow down or prevent a superintelligent AI from being
		created. I am afraid that lobbying efforts by AI companies to keep regulation at a minimum are turning
		out to be highly effective.`,
		Mt,
		k,
		ot,
		Me,
		rn = 'Best regards,',
		Ht,
		He,
		sn = '__YOUR NAME__',
		lt,
		le,
		q,
		Oe,
		St,
		un
	;(e = new Bn({ props: { title: n[3], description: n[4], date: n[5] } })),
		(Y = new Rn({
			props: {
				href: 'https://www.campaignforaisafety.org/politician/#find-your-politician-here',
				$$slots: { default: [ka] },
				$$scope: { ctx: n }
			}
		}))
	let Se = pt(n[7]),
		L = []
	for (let t = 0; t < Se.length; t += 1) L[t] = Pn(En(n, Se, t))
	let je = pt(n[8]),
		E = []
	for (let t = 0; t < je.length; t += 1) E[t] = Mn(Ln(n, je, t))
	var Ne = n[0].section
	function cn(t, s) {
		return {}
	}
	Ne && (C = ft(Ne, cn()))
	var Ue = n[1].section
	function hn(t, s) {
		return {}
	}
	return (
		Ue && (k = ft(Ue, hn())),
		(q = new Dn({ props: { $$slots: { default: [Ta] }, $$scope: { ctx: n } } })),
		q.$on('click', n[12]),
		{
			c() {
				se(e.$$.fragment),
					(i = d()),
					(a = u('div')),
					(l = u('h1')),
					(b = U(n[3])),
					(f = d()),
					(v = u('em')),
					(P = U(n[4])),
					(T = d()),
					(g = u('h2')),
					(g.textContent = _),
					(x = d()),
					(I = u('ul')),
					(I.innerHTML = Fe),
					(ve = d()),
					(H = u('h2')),
					(H.textContent = ge),
					(ye = d()),
					(N = u('ul')),
					(be = u('li')),
					(be.innerHTML = zt),
					(mt = d()),
					(we = u('li')),
					(we.innerHTML = Bt),
					(vt = d()),
					(G = u('li')),
					(_e = u('b')),
					(_e.textContent = Dt),
					(gt = U(` Maybe a politician in parliament from the party
		that you voted for. `)),
					se(Y.$$.fragment),
					(yt = U('.')),
					(bt = d()),
					(K = u('li')),
					(xe = u('b')),
					(xe.textContent = Ot),
					(wt = d()),
					(O = u('input')),
					(Ge = d()),
					(Q = u('h2')),
					(Q.textContent = Rt),
					(Ye = d()),
					(B = u('ul')),
					(Ce = u('li')),
					(Ce.innerHTML = qt),
					(_t = d()),
					(ke = u('li')),
					(ke.innerHTML = Ft),
					(xt = d()),
					(V = u('li')),
					(Te = u('b')),
					(Te.textContent = Gt),
					(Ct = d())
				for (let t = 0; t < L.length; t += 1) L[t].c()
				;(Ve = d()),
					(Z = u('h2')),
					(Z.textContent = Yt),
					(Xe = d()),
					(R = u('ul')),
					(Ie = u('li')),
					(Ie.textContent = Vt),
					(kt = d()),
					(X = u('li')),
					($e = u('b')),
					($e.textContent = Xt),
					(Tt = d())
				for (let t = 0; t < E.length; t += 1) E[t].c()
				;(Je = d()),
					(ee = u('h2')),
					(ee.textContent = Jt),
					(Ke = d()),
					(te = u('p')),
					(te.textContent = Kt),
					(Qe = d()),
					(J = u('ul')),
					(J.innerHTML = Qt),
					(Ze = d()),
					(ne = u('p')),
					(ne.innerHTML = Zt),
					(et = d()),
					(ae = u('h2')),
					(ae.textContent = en),
					(tt = d()),
					(ie = u('p')),
					(ie.textContent = tn),
					(nt = d()),
					(w = u('div')),
					(oe = u('p')),
					(It = U('Dear ')),
					(at = U(De)),
					($t = U(',')),
					(At = d()),
					(Ae = u('p')),
					(Ae.textContent = nn),
					(Lt = d()),
					C && se(C.$$.fragment),
					(it = d()),
					(Le = u('p')),
					(Le.innerHTML = an),
					(Et = d()),
					(Ee = u('p')),
					(Ee.innerHTML = on),
					(Pt = d()),
					(Pe = u('p')),
					(Pe.innerHTML = ln),
					(Mt = d()),
					k && se(k.$$.fragment),
					(ot = d()),
					(Me = u('p')),
					(Me.textContent = rn),
					(Ht = d()),
					(He = u('p')),
					(He.textContent = sn),
					(lt = d()),
					(le = u('div')),
					se(q.$$.fragment),
					this.h()
			},
			l(t) {
				qe(e.$$.fragment, t), (i = m(t)), (a = c(t, 'DIV', { class: !0 }))
				var s = j(a)
				l = c(s, 'H1', {})
				var S = j(l)
				;(b = W(S, n[3])), S.forEach(o), (f = m(s)), (v = c(s, 'EM', {}))
				var Re = j(v)
				;(P = W(Re, n[4])),
					Re.forEach(o),
					s.forEach(o),
					(T = m(t)),
					(g = c(t, 'H2', { 'data-svelte-h': !0 })),
					y(g) !== 'svelte-8a8e6c' && (g.textContent = _),
					(x = m(t)),
					(I = c(t, 'UL', { class: !0, 'data-svelte-h': !0 })),
					y(I) !== 'svelte-1al65lt' && (I.innerHTML = Fe),
					(ve = m(t)),
					(H = c(t, 'H2', { 'data-svelte-h': !0 })),
					y(H) !== 'svelte-zie4uk' && (H.textContent = ge),
					(ye = m(t)),
					(N = c(t, 'UL', { class: !0 }))
				var p = j(N)
				;(be = c(p, 'LI', { 'data-svelte-h': !0 })),
					y(be) !== 'svelte-ni4dng' && (be.innerHTML = zt),
					(mt = m(p)),
					(we = c(p, 'LI', { 'data-svelte-h': !0 })),
					y(we) !== 'svelte-ogna1m' && (we.innerHTML = Bt),
					(vt = m(p)),
					(G = c(p, 'LI', {}))
				var D = j(G)
				;(_e = c(D, 'B', { 'data-svelte-h': !0 })),
					y(_e) !== 'svelte-1b25fjg' && (_e.textContent = Dt),
					(gt = W(
						D,
						` Maybe a politician in parliament from the party
		that you voted for. `
					)),
					qe(Y.$$.fragment, D),
					(yt = W(D, '.')),
					D.forEach(o),
					(bt = m(p)),
					(K = c(p, 'LI', {}))
				var rt = j(K)
				;(xe = c(rt, 'B', { 'data-svelte-h': !0 })),
					y(xe) !== 'svelte-1ki41xx' && (xe.textContent = Ot),
					(wt = m(rt)),
					(O = c(rt, 'INPUT', { placeholder: !0, class: !0 })),
					rt.forEach(o),
					p.forEach(o),
					(Ge = m(t)),
					(Q = c(t, 'H2', { 'data-svelte-h': !0 })),
					y(Q) !== 'svelte-1e77i5k' && (Q.textContent = Rt),
					(Ye = m(t)),
					(B = c(t, 'UL', { class: !0 }))
				var We = j(B)
				;(Ce = c(We, 'LI', { 'data-svelte-h': !0 })),
					y(Ce) !== 'svelte-9loqe0' && (Ce.innerHTML = qt),
					(_t = m(We)),
					(ke = c(We, 'LI', { 'data-svelte-h': !0 })),
					y(ke) !== 'svelte-173fpuj' && (ke.innerHTML = Ft),
					(xt = m(We)),
					(V = c(We, 'LI', {}))
				var st = j(V)
				;(Te = c(st, 'B', { 'data-svelte-h': !0 })),
					y(Te) !== 'svelte-1ebg3a2' && (Te.textContent = Gt),
					(Ct = m(st))
				for (let re = 0; re < L.length; re += 1) L[re].l(st)
				st.forEach(o),
					We.forEach(o),
					(Ve = m(t)),
					(Z = c(t, 'H2', { 'data-svelte-h': !0 })),
					y(Z) !== 'svelte-1fonzjw' && (Z.textContent = Yt),
					(Xe = m(t)),
					(R = c(t, 'UL', { class: !0 }))
				var ut = j(R)
				;(Ie = c(ut, 'LI', { 'data-svelte-h': !0 })),
					y(Ie) !== 'svelte-2alfr6' && (Ie.textContent = Vt),
					(kt = m(ut)),
					(X = c(ut, 'LI', {}))
				var ct = j(X)
				;($e = c(ct, 'B', { 'data-svelte-h': !0 })),
					y($e) !== 'svelte-1ebg3a2' && ($e.textContent = Xt),
					(Tt = m(ct))
				for (let re = 0; re < E.length; re += 1) E[re].l(ct)
				ct.forEach(o),
					ut.forEach(o),
					(Je = m(t)),
					(ee = c(t, 'H2', { 'data-svelte-h': !0 })),
					y(ee) !== 'svelte-1vxn73p' && (ee.textContent = Jt),
					(Ke = m(t)),
					(te = c(t, 'P', { 'data-svelte-h': !0 })),
					y(te) !== 'svelte-1w0a1up' && (te.textContent = Kt),
					(Qe = m(t)),
					(J = c(t, 'UL', { class: !0, 'data-svelte-h': !0 })),
					y(J) !== 'svelte-yrp1y3' && (J.innerHTML = Qt),
					(Ze = m(t)),
					(ne = c(t, 'P', { 'data-svelte-h': !0 })),
					y(ne) !== 'svelte-y2iawh' && (ne.innerHTML = Zt),
					(et = m(t)),
					(ae = c(t, 'H2', { 'data-svelte-h': !0 })),
					y(ae) !== 'svelte-1dmlwxr' && (ae.textContent = en),
					(tt = m(t)),
					(ie = c(t, 'P', { 'data-svelte-h': !0 })),
					y(ie) !== 'svelte-e4wiv5' && (ie.textContent = tn),
					(nt = m(t)),
					(w = c(t, 'DIV', { class: !0, id: !0, contenteditable: !0 }))
				var $ = j(w)
				oe = c($, 'P', {})
				var ht = j(oe)
				;(It = W(ht, 'Dear ')),
					(at = W(ht, De)),
					($t = W(ht, ',')),
					ht.forEach(o),
					(At = m($)),
					(Ae = c($, 'P', { 'data-svelte-h': !0 })),
					y(Ae) !== 'svelte-ga1pug' && (Ae.textContent = nn),
					(Lt = m($)),
					C && qe(C.$$.fragment, $),
					(it = m($)),
					(Le = c($, 'P', { 'data-svelte-h': !0 })),
					y(Le) !== 'svelte-q1fr17' && (Le.innerHTML = an),
					(Et = m($)),
					(Ee = c($, 'P', { 'data-svelte-h': !0 })),
					y(Ee) !== 'svelte-pyq007' && (Ee.innerHTML = on),
					(Pt = m($)),
					(Pe = c($, 'P', { 'data-svelte-h': !0 })),
					y(Pe) !== 'svelte-1hteiq2' && (Pe.innerHTML = ln),
					(Mt = m($)),
					k && qe(k.$$.fragment, $),
					(ot = m($)),
					(Me = c($, 'P', { 'data-svelte-h': !0 })),
					y(Me) !== 'svelte-zxnoe6' && (Me.textContent = rn),
					(Ht = m($)),
					(He = c($, 'P', { 'data-svelte-h': !0 })),
					y(He) !== 'svelte-1olofna' && (He.textContent = sn),
					$.forEach(o),
					(lt = m(t)),
					(le = c(t, 'DIV', { class: !0 }))
				var fn = j(le)
				qe(q.$$.fragment, fn), fn.forEach(o), this.h()
			},
			h() {
				M(a, 'class', 'header'),
					M(I, 'class', 'svelte-1fjz5fk'),
					M(O, 'placeholder', 'Name of person'),
					M(O, 'class', 'svelte-1fjz5fk'),
					M(N, 'class', 'svelte-1fjz5fk'),
					M(B, 'class', 'svelte-1fjz5fk'),
					M(R, 'class', 'svelte-1fjz5fk'),
					M(J, 'class', 'svelte-1fjz5fk'),
					M(w, 'class', 'letter svelte-1fjz5fk'),
					M(w, 'id', Wn),
					M(w, 'contenteditable', 'true'),
					M(le, 'class', 'actionBar svelte-1fjz5fk')
			},
			m(t, s) {
				ue(e, t, s),
					r(t, i, s),
					r(t, a, s),
					h(a, l),
					h(l, b),
					h(a, f),
					h(a, v),
					h(v, P),
					r(t, T, s),
					r(t, g, s),
					r(t, x, s),
					r(t, I, s),
					r(t, ve, s),
					r(t, H, s),
					r(t, ye, s),
					r(t, N, s),
					h(N, be),
					h(N, mt),
					h(N, we),
					h(N, vt),
					h(N, G),
					h(G, _e),
					h(G, gt),
					ue(Y, G, null),
					h(G, yt),
					h(N, bt),
					h(N, K),
					h(K, xe),
					h(K, wt),
					h(K, O),
					pn(O, n[2]),
					r(t, Ge, s),
					r(t, Q, s),
					r(t, Ye, s),
					r(t, B, s),
					h(B, Ce),
					h(B, _t),
					h(B, ke),
					h(B, xt),
					h(B, V),
					h(V, Te),
					h(V, Ct)
				for (let S = 0; S < L.length; S += 1) L[S] && L[S].m(V, null)
				r(t, Ve, s),
					r(t, Z, s),
					r(t, Xe, s),
					r(t, R, s),
					h(R, Ie),
					h(R, kt),
					h(R, X),
					h(X, $e),
					h(X, Tt)
				for (let S = 0; S < E.length; S += 1) E[S] && E[S].m(X, null)
				r(t, Je, s),
					r(t, ee, s),
					r(t, Ke, s),
					r(t, te, s),
					r(t, Qe, s),
					r(t, J, s),
					r(t, Ze, s),
					r(t, ne, s),
					r(t, et, s),
					r(t, ae, s),
					r(t, tt, s),
					r(t, ie, s),
					r(t, nt, s),
					r(t, w, s),
					h(w, oe),
					h(oe, It),
					h(oe, at),
					h(oe, $t),
					h(w, At),
					h(w, Ae),
					h(w, Lt),
					C && ue(C, w, null),
					h(w, it),
					h(w, Le),
					h(w, Et),
					h(w, Ee),
					h(w, Pt),
					h(w, Pe),
					h(w, Mt),
					k && ue(k, w, null),
					h(w, ot),
					h(w, Me),
					h(w, Ht),
					h(w, He),
					r(t, lt, s),
					r(t, le, s),
					ue(q, le, null),
					(Oe = !0),
					St || ((un = Ut(O, 'input', n[9])), (St = !0))
			},
			p(t, [s]) {
				const S = {}
				if (
					(s & 524288 && (S.$$scope = { dirty: s, ctx: t }),
					Y.$set(S),
					s & 4 && O.value !== t[2] && pn(O, t[2]),
					s & 129)
				) {
					Se = pt(t[7])
					let p
					for (p = 0; p < Se.length; p += 1) {
						const D = En(t, Se, p)
						L[p] ? L[p].p(D, s) : ((L[p] = Pn(D)), L[p].c(), L[p].m(V, null))
					}
					for (; p < L.length; p += 1) L[p].d(1)
					L.length = Se.length
				}
				if (s & 258) {
					je = pt(t[8])
					let p
					for (p = 0; p < je.length; p += 1) {
						const D = Ln(t, je, p)
						E[p] ? E[p].p(D, s) : ((E[p] = Mn(D)), E[p].c(), E[p].m(X, null))
					}
					for (; p < E.length; p += 1) E[p].d(1)
					E.length = je.length
				}
				if (
					((!Oe || s & 4) && De !== (De = (t[2] || '__ENTER_NAME__') + '') && zn(at, De),
					s & 1 && Ne !== (Ne = t[0].section))
				) {
					if (C) {
						vn()
						const p = C
						ce(p.$$.fragment, 1, 0, () => {
							fe(p, 1)
						}),
							mn()
					}
					Ne
						? ((C = ft(Ne, cn())), se(C.$$.fragment), he(C.$$.fragment, 1), ue(C, w, it))
						: (C = null)
				}
				if (s & 2 && Ue !== (Ue = t[1].section)) {
					if (k) {
						vn()
						const p = k
						ce(p.$$.fragment, 1, 0, () => {
							fe(p, 1)
						}),
							mn()
					}
					Ue
						? ((k = ft(Ue, hn())), se(k.$$.fragment), he(k.$$.fragment, 1), ue(k, w, ot))
						: (k = null)
				}
				const Re = {}
				s & 524288 && (Re.$$scope = { dirty: s, ctx: t }), q.$set(Re)
			},
			i(t) {
				Oe ||
					(he(e.$$.fragment, t),
					he(Y.$$.fragment, t),
					C && he(C.$$.fragment, t),
					k && he(k.$$.fragment, t),
					he(q.$$.fragment, t),
					(Oe = !0))
			},
			o(t) {
				ce(e.$$.fragment, t),
					ce(Y.$$.fragment, t),
					C && ce(C.$$.fragment, t),
					k && ce(k.$$.fragment, t),
					ce(q.$$.fragment, t),
					(Oe = !1)
			},
			d(t) {
				t &&
					(o(i),
					o(a),
					o(T),
					o(g),
					o(x),
					o(I),
					o(ve),
					o(H),
					o(ye),
					o(N),
					o(Ge),
					o(Q),
					o(Ye),
					o(B),
					o(Ve),
					o(Z),
					o(Xe),
					o(R),
					o(Je),
					o(ee),
					o(Ke),
					o(te),
					o(Qe),
					o(J),
					o(Ze),
					o(ne),
					o(et),
					o(ae),
					o(tt),
					o(ie),
					o(nt),
					o(w),
					o(lt),
					o(le)),
					fe(e, t),
					fe(Y),
					dn(L, t),
					dn(E, t),
					C && fe(C),
					k && fe(k),
					fe(q),
					(St = !1),
					un()
			}
		}
	)
}
const Wn = 'letter'
function $a(n, e, i) {
	let a, l, b
	const { title: f, description: v, date: P } = na
	function T() {
		var H = document.getElementById(Wn),
			ge = H == null ? void 0 : H.cloneNode(!0)
		Ca([
			new ga({ 'text/html': new Blob([ge == null ? void 0 : ge.outerHTML], { type: 'text/html' }) })
		])
			.then(() => {
				On.success('Letter copied to clipboard!')
			})
			.catch((ye) => {
				window.alert(`Failed to copy: ${ye}`)
			})
	}
	const g = [
			{ name: 'Existential risk', section: Fn },
			{ name: 'Cybersecurity risk', section: Yn }
		],
		_ = [
			{ name: 'Prepare treaty for summit', section: Zn },
			{ name: 'Acknowledge x-risk', section: ta },
			{ name: 'Have a meeting with you', section: Xn },
			{ name: 'Organize a debate', section: Kn }
		]
	function x() {
		;(a = this.value), i(2, a)
	}
	const I = (H) => i(0, (b = H)),
		Fe = (H) => i(1, (l = H)),
		ve = () => T()
	return (
		i(2, (a = '')), i(1, (l = _[0])), i(0, (b = g[0])), [b, l, a, f, v, P, T, g, _, x, I, Fe, ve]
	)
}
class Aa extends de {
	constructor(e) {
		super(), me(this, e, $a, Ia, pe, {})
	}
}
const Na = Object.freeze(
	Object.defineProperty({ __proto__: null, default: Aa }, Symbol.toStringTag, { value: 'Module' })
)
export { Aa as P, Na as _ }
