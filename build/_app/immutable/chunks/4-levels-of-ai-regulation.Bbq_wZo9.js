import {
	s as Vt,
	a as ct,
	e as Yt,
	c as a,
	t as c,
	b as r,
	f as o,
	h as U,
	i as g,
	j as n,
	d as f,
	g as u,
	k as ce,
	l,
	m as p
} from './scheduler.D9JQr37X.js'
import {
	S as Zt,
	i as en,
	c as N,
	b as G,
	m as B,
	a as O,
	t as D,
	d as F
} from './index.D-WnFt3a.js'
import { g as tn, a as Jt } from './a.svelte_svelte_type_style_lang.DfavE63L.js'
import { M as nn } from './mdsvex.Bi9EMyuJ.js'
import { A as Ie } from './a.YKMG9Usu.js'
import { I as ln } from './img.BSMcEvTm.js'
function sn(d) {
	let s
	return {
		c() {
			s = c('risks')
		},
		l(i) {
			s = g(i, 'risks')
		},
		m(i, m) {
			l(i, s, m)
		},
		d(i) {
			i && n(s)
		}
	}
}
function an(d) {
	let s
	return {
		c() {
			s = c('risk of human extinction')
		},
		l(i) {
			s = g(i, 'risk of human extinction')
		},
		m(i, m) {
			l(i, s, m)
		},
		d(i) {
			i && n(s)
		}
	}
}
function on(d) {
	let s
	return {
		c() {
			s = c('dangerous capabilities')
		},
		l(i) {
			s = g(i, 'dangerous capabilities')
		},
		m(i, m) {
			l(i, s, m)
		},
		d(i) {
			i && n(s)
		}
	}
}
function rn(d) {
	let s
	return {
		c() {
			s = c('This post details some of the current safety problems')
		},
		l(i) {
			s = g(i, 'This post details some of the current safety problems')
		},
		m(i, m) {
			l(i, s, m)
		},
		d(i) {
			i && n(s)
		}
	}
}
function fn(d) {
	let s
	return {
		c() {
			s = c('dangerous capabilities')
		},
		l(i) {
			s = g(i, 'dangerous capabilities')
		},
		m(i, m) {
			l(i, s, m)
		},
		d(i) {
			i && n(s)
		}
	}
}
function un(d) {
	let s
	return {
		c() {
			s = c('relatively easy to regulate')
		},
		l(i) {
			s = g(i, 'relatively easy to regulate')
		},
		m(i, m) {
			l(i, s, m)
		},
		d(i) {
			i && n(s)
		}
	}
}
function pn(d) {
	let s,
		i,
		m,
		K,
		h,
		x,
		X,
		Y,
		gt =
			'In this article, we’ll look at our 4-levels framework for thinking about how AI safety can be regulated.',
		ke,
		$,
		vt = 'AI pipeline as a framework for safety governance',
		Le,
		J,
		_t = `The AI creation pipeline consists of various steps, each of which can be regulated in different ways.
This pipeline consists of:`,
		Ae,
		Q,
		xt =
			'<li><strong>Hardware &amp; algorithms</strong>, which are used for training AI models</li> <li><strong>Training runs</strong>, where the hardware and algorithms are used to create a model</li> <li><strong>Deployment</strong>, where the trained model is shared with the public</li> <li><strong>Usage</strong>, where the deployed model is utilized by individuals and companies</li>',
		He,
		V,
		$t = `The later in the pipeline we regulate, the higher the risks we face.
If we want a high level of safety, we’ll need to regulate earlier in the pipeline.
That’s why when we climb up the 4 levels of AI regulation, we walk back the AI creation pipeline.`,
		Me,
		Z,
		Pe,
		w,
		wt = 'Level 1: Regulate usage',
		ze,
		ee,
		Ct = 'Examples:',
		Ee,
		te,
		bt =
			'<li><strong>Ban autonomous agent runtimes</strong> (like AutoGPT)</li> <li><strong>Ban dangerous instructions</strong></li>',
		Re,
		ne,
		yt = `These measures are aimed to prevent users from doing dangerous or harmful actions with AI models.
At this level, the responsibility lies with the users of the models, not the creators.
We’re depending on all the (potentially millions) of users to abide by the regulations.
This only provides a very low level of protection against AI dangers.`,
		Se,
		C,
		It = 'Level 2: Regulate deployment',
		je,
		le,
		Tt = 'Examples:',
		We,
		b,
		ge,
		kt =
			'<strong>Red-teaming requirements</strong>. This means that before an AI model is deployed, it is tested by a red team to see if it can be hacked (jailbroken) or abused.',
		tt,
		y,
		ve,
		Lt = 'Disallow deployment and open-sourcing',
		nt,
		I,
		lt,
		qe,
		se,
		At = `When regulating deployments, we are preventing dangerous models from being available.
This means the responsibility lies with the creators of the models.
This is a safer situation than level 1, because we’re now depending on a much smaller group of people to act responsibly.`,
		Ue,
		ie,
		Ht =
			'However, we’re still allowing dangerous training runs to happen, so accidents at AI labs (including the leaks of dangerous AI models, or rogue AI being created) can still happen.',
		Ne,
		T,
		Mt = 'Level 3: Regulate training runs',
		Ge,
		ae,
		Pt = 'Examples:',
		Be,
		v,
		k,
		_e,
		zt = 'Require proof of safety',
		st,
		L,
		it,
		at,
		xe,
		Et =
			'Setting a <strong>scale ceiling for training new models</strong> (e.g. a maximum count of flops used). This could also include the process of fine-tuning.',
		ot,
		$e,
		Rt =
			'<strong>Require a license</strong> to train AI models (above a certain size / with certain capabilities).',
		rt,
		A,
		we,
		St = 'Ban training on dangerous types of data',
		ft,
		H,
		ut,
		pt,
		Ce,
		jt =
			'<strong>Ban training on copyrighted data</strong>. This does not directly target unsafe data, but it does limit the amount of data that can be used, which means it buys us time to figure out to build safe AI models.',
		Oe,
		oe,
		Wt = `When we regulate training runs, we prevent dangerous models from being created in the first place.
This will prevent accidents at AI labs that comply with the regulations.`,
		De,
		re,
		qt =
			'However, we’re still allowing the distribution of hardware and algorithms that can be used for training dangerous models, so we’re still relying on the creators of these models to act responsibly.',
		Fe,
		M,
		Ut = 'Level 4: Regulate hardware & algorithms',
		Ke,
		fe,
		Nt = 'Examples:',
		Xe,
		P,
		z,
		be,
		Gt = 'Limit distribution of training hardware',
		mt,
		E,
		ht,
		dt,
		ye,
		Bt =
			'<strong>Disallow the publication of novel training architectures</strong>. New AI training architectures can lead to dramatic increases in capabilities. The Transformer model, for example, enabled virtually all recent progress in AI. We could limit the publication of such architectures to prevent sudden capability jumps.',
		Ye,
		ue,
		Ot = `When we also regulate hardware and algorithms, we’re making it not just illegal, but also very difficult to train dangerous models.
This gives us the best protection against the risks from AI.`,
		Je,
		R,
		Dt = 'Limitations',
		Qe,
		pe,
		Ft = `Note that this framework is not perfect, and not all possible types of AI regulation neatly fit in one of the mentioned levels.
For example, legal liability for model creators can be classified as a Level 1 “usage” type of regulation as it is enforced post-deployment, but it could also be classified as a Level 2 or 3 type of regulation as it can help creators reconsider if a certain model should be deployed or trained in the first place.`,
		Ve,
		S,
		Kt = 'Conclusions',
		Ze,
		me,
		Xt = `In this article, we’ve looked at our 4-levels framework for thinking about how AI safety can be regulated.
Using this model, we can more easily reason about the effectiveness of AI regulation at different steps in the AI creation pipeline.
We can also see that the first two levels do not offer much protection against the (existential) risks from AI.
Preventing dangerous training runs and regulating hardware and algorithms are far more reliable ways to ensure safety.`,
		et
	return (
		(m = new Ie({ props: { href: '/risks', $$slots: { default: [sn] }, $$scope: { ctx: d } } })),
		(h = new Ie({ props: { href: '/xrisk', $$slots: { default: [an] }, $$scope: { ctx: d } } })),
		(Z = new ln({ props: { src: '/4levels.png', alt: '4 Levels of AI safety regulation' } })),
		(I = new Ie({
			props: { href: '/dangerous-capabilities', $$slots: { default: [on] }, $$scope: { ctx: d } }
		})),
		(L = new Ie({
			props: {
				href: 'https://www.lesswrong.com/posts/mnoc3cKY3gXMrTybs/a-list-of-core-ai-safety-problems-and-how-i-hope-to-solve',
				rel: 'nofollow',
				$$slots: { default: [rn] },
				$$scope: { ctx: d }
			}
		})),
		(H = new Ie({
			props: { href: '/dangerous-capabilities', $$slots: { default: [fn] }, $$scope: { ctx: d } }
		})),
		(E = new Ie({
			props: {
				href: 'https://arxiv.org/abs/2303.11341',
				rel: 'nofollow',
				$$slots: { default: [un] },
				$$scope: { ctx: d }
			}
		})),
		{
			c() {
				;(s = a('p')),
					(i = c('As AI capabilities increase, the ')),
					N(m.$$.fragment),
					(K = c(` these systems pose to humanity increase as well.
Many scientists have already warned about the `)),
					N(h.$$.fragment),
					(x = c('.')),
					(X = r()),
					(Y = a('p')),
					(Y.textContent = gt),
					(ke = r()),
					($ = a('h2')),
					($.textContent = vt),
					(Le = r()),
					(J = a('p')),
					(J.textContent = _t),
					(Ae = r()),
					(Q = a('ul')),
					(Q.innerHTML = xt),
					(He = r()),
					(V = a('p')),
					(V.textContent = $t),
					(Me = r()),
					N(Z.$$.fragment),
					(Pe = r()),
					(w = a('h2')),
					(w.textContent = wt),
					(ze = r()),
					(ee = a('p')),
					(ee.textContent = Ct),
					(Ee = r()),
					(te = a('ul')),
					(te.innerHTML = bt),
					(Re = r()),
					(ne = a('p')),
					(ne.textContent = yt),
					(Se = r()),
					(C = a('h2')),
					(C.textContent = It),
					(je = r()),
					(le = a('p')),
					(le.textContent = Tt),
					(We = r()),
					(b = a('ul')),
					(ge = a('li')),
					(ge.innerHTML = kt),
					(tt = r()),
					(y = a('li')),
					(ve = a('strong')),
					(ve.textContent = Lt),
					(nt = c(' of models with ')),
					N(I.$$.fragment),
					(lt = c('.')),
					(qe = r()),
					(se = a('p')),
					(se.textContent = At),
					(Ue = r()),
					(ie = a('p')),
					(ie.textContent = Ht),
					(Ne = r()),
					(T = a('h2')),
					(T.textContent = Mt),
					(Ge = r()),
					(ae = a('p')),
					(ae.textContent = Pt),
					(Be = r()),
					(v = a('ul')),
					(k = a('li')),
					(_e = a('strong')),
					(_e.textContent = zt),
					(st = c(
						' before granting permission to train a certain model. This may include formal proof of alignment. '
					)),
					N(L.$$.fragment),
					(it = c('.')),
					(at = r()),
					(xe = a('li')),
					(xe.innerHTML = Et),
					(ot = r()),
					($e = a('li')),
					($e.innerHTML = Rt),
					(rt = r()),
					(A = a('li')),
					(we = a('strong')),
					(we.textContent = St),
					(ft = c('. Some types of training data can lead to ')),
					N(H.$$.fragment),
					(ut = c(
						', such as hacking or the creation of bioweapons. We could ban training on data that contains this type of knowledge.'
					)),
					(pt = r()),
					(Ce = a('li')),
					(Ce.innerHTML = jt),
					(Oe = r()),
					(oe = a('p')),
					(oe.textContent = Wt),
					(De = r()),
					(re = a('p')),
					(re.textContent = qt),
					(Fe = r()),
					(M = a('h2')),
					(M.textContent = Ut),
					(Ke = r()),
					(fe = a('p')),
					(fe.textContent = Nt),
					(Xe = r()),
					(P = a('ul')),
					(z = a('li')),
					(be = a('strong')),
					(be.textContent = Gt),
					(mt = c(
						'. Specialized hardware for training AI models is rapidly becoming the most important product of chip manufacturers. The supply chain for this hardware is very centralized, and the hardware is very expensive. This means that it’s '
					)),
					N(E.$$.fragment),
					(ht = c(' the distribution of this hardware.')),
					(dt = r()),
					(ye = a('li')),
					(ye.innerHTML = Bt),
					(Ye = r()),
					(ue = a('p')),
					(ue.textContent = Ot),
					(Je = r()),
					(R = a('h2')),
					(R.textContent = Dt),
					(Qe = r()),
					(pe = a('p')),
					(pe.textContent = Ft),
					(Ve = r()),
					(S = a('h2')),
					(S.textContent = Kt),
					(Ze = r()),
					(me = a('p')),
					(me.textContent = Xt),
					this.h()
			},
			l(e) {
				s = o(e, 'P', {})
				var t = U(s)
				;(i = g(t, 'As AI capabilities increase, the ')),
					G(m.$$.fragment, t),
					(K = g(
						t,
						` these systems pose to humanity increase as well.
Many scientists have already warned about the `
					)),
					G(h.$$.fragment, t),
					(x = g(t, '.')),
					t.forEach(n),
					(X = f(e)),
					(Y = o(e, 'P', { 'data-svelte-h': !0 })),
					u(Y) !== 'svelte-hd9l2s' && (Y.textContent = gt),
					(ke = f(e)),
					($ = o(e, 'H2', { id: !0, 'data-svelte-h': !0 })),
					u($) !== 'svelte-9tja0z' && ($.textContent = vt),
					(Le = f(e)),
					(J = o(e, 'P', { 'data-svelte-h': !0 })),
					u(J) !== 'svelte-v8hm5n' && (J.textContent = _t),
					(Ae = f(e)),
					(Q = o(e, 'UL', { 'data-svelte-h': !0 })),
					u(Q) !== 'svelte-ank9zb' && (Q.innerHTML = xt),
					(He = f(e)),
					(V = o(e, 'P', { 'data-svelte-h': !0 })),
					u(V) !== 'svelte-1tgzmxk' && (V.textContent = $t),
					(Me = f(e)),
					G(Z.$$.fragment, e),
					(Pe = f(e)),
					(w = o(e, 'H2', { id: !0, 'data-svelte-h': !0 })),
					u(w) !== 'svelte-13v1jyh' && (w.textContent = wt),
					(ze = f(e)),
					(ee = o(e, 'P', { 'data-svelte-h': !0 })),
					u(ee) !== 'svelte-kvfsh7' && (ee.textContent = Ct),
					(Ee = f(e)),
					(te = o(e, 'UL', { 'data-svelte-h': !0 })),
					u(te) !== 'svelte-i8ykyn' && (te.innerHTML = bt),
					(Re = f(e)),
					(ne = o(e, 'P', { 'data-svelte-h': !0 })),
					u(ne) !== 'svelte-1dg3xmy' && (ne.textContent = yt),
					(Se = f(e)),
					(C = o(e, 'H2', { id: !0, 'data-svelte-h': !0 })),
					u(C) !== 'svelte-w6jv4d' && (C.textContent = It),
					(je = f(e)),
					(le = o(e, 'P', { 'data-svelte-h': !0 })),
					u(le) !== 'svelte-kvfsh7' && (le.textContent = Tt),
					(We = f(e)),
					(b = o(e, 'UL', {}))
				var he = U(b)
				;(ge = o(he, 'LI', { 'data-svelte-h': !0 })),
					u(ge) !== 'svelte-1978sq0' && (ge.innerHTML = kt),
					(tt = f(he)),
					(y = o(he, 'LI', {}))
				var j = U(y)
				;(ve = o(j, 'STRONG', { 'data-svelte-h': !0 })),
					u(ve) !== 'svelte-1qfvxp2' && (ve.textContent = Lt),
					(nt = g(j, ' of models with ')),
					G(I.$$.fragment, j),
					(lt = g(j, '.')),
					j.forEach(n),
					he.forEach(n),
					(qe = f(e)),
					(se = o(e, 'P', { 'data-svelte-h': !0 })),
					u(se) !== 'svelte-a1d9v1' && (se.textContent = At),
					(Ue = f(e)),
					(ie = o(e, 'P', { 'data-svelte-h': !0 })),
					u(ie) !== 'svelte-yz3sgb' && (ie.textContent = Ht),
					(Ne = f(e)),
					(T = o(e, 'H2', { id: !0, 'data-svelte-h': !0 })),
					u(T) !== 'svelte-xcngd0' && (T.textContent = Mt),
					(Ge = f(e)),
					(ae = o(e, 'P', { 'data-svelte-h': !0 })),
					u(ae) !== 'svelte-kvfsh7' && (ae.textContent = Pt),
					(Be = f(e)),
					(v = o(e, 'UL', {}))
				var _ = U(v)
				k = o(_, 'LI', {})
				var W = U(k)
				;(_e = o(W, 'STRONG', { 'data-svelte-h': !0 })),
					u(_e) !== 'svelte-1ajf0ze' && (_e.textContent = zt),
					(st = g(
						W,
						' before granting permission to train a certain model. This may include formal proof of alignment. '
					)),
					G(L.$$.fragment, W),
					(it = g(W, '.')),
					W.forEach(n),
					(at = f(_)),
					(xe = o(_, 'LI', { 'data-svelte-h': !0 })),
					u(xe) !== 'svelte-oa697s' && (xe.innerHTML = Et),
					(ot = f(_)),
					($e = o(_, 'LI', { 'data-svelte-h': !0 })),
					u($e) !== 'svelte-b8pr14' && ($e.innerHTML = Rt),
					(rt = f(_)),
					(A = o(_, 'LI', {}))
				var q = U(A)
				;(we = o(q, 'STRONG', { 'data-svelte-h': !0 })),
					u(we) !== 'svelte-171awcu' && (we.textContent = St),
					(ft = g(q, '. Some types of training data can lead to ')),
					G(H.$$.fragment, q),
					(ut = g(
						q,
						', such as hacking or the creation of bioweapons. We could ban training on data that contains this type of knowledge.'
					)),
					q.forEach(n),
					(pt = f(_)),
					(Ce = o(_, 'LI', { 'data-svelte-h': !0 })),
					u(Ce) !== 'svelte-pyb97g' && (Ce.innerHTML = jt),
					_.forEach(n),
					(Oe = f(e)),
					(oe = o(e, 'P', { 'data-svelte-h': !0 })),
					u(oe) !== 'svelte-rtu4y3' && (oe.textContent = Wt),
					(De = f(e)),
					(re = o(e, 'P', { 'data-svelte-h': !0 })),
					u(re) !== 'svelte-142uhr4' && (re.textContent = qt),
					(Fe = f(e)),
					(M = o(e, 'H2', { id: !0, 'data-svelte-h': !0 })),
					u(M) !== 'svelte-oi32m7' && (M.textContent = Ut),
					(Ke = f(e)),
					(fe = o(e, 'P', { 'data-svelte-h': !0 })),
					u(fe) !== 'svelte-kvfsh7' && (fe.textContent = Nt),
					(Xe = f(e)),
					(P = o(e, 'UL', {}))
				var de = U(P)
				z = o(de, 'LI', {})
				var Te = U(z)
				;(be = o(Te, 'STRONG', { 'data-svelte-h': !0 })),
					u(be) !== 'svelte-58pmc4' && (be.textContent = Gt),
					(mt = g(
						Te,
						'. Specialized hardware for training AI models is rapidly becoming the most important product of chip manufacturers. The supply chain for this hardware is very centralized, and the hardware is very expensive. This means that it’s '
					)),
					G(E.$$.fragment, Te),
					(ht = g(Te, ' the distribution of this hardware.')),
					Te.forEach(n),
					(dt = f(de)),
					(ye = o(de, 'LI', { 'data-svelte-h': !0 })),
					u(ye) !== 'svelte-106waz3' && (ye.innerHTML = Bt),
					de.forEach(n),
					(Ye = f(e)),
					(ue = o(e, 'P', { 'data-svelte-h': !0 })),
					u(ue) !== 'svelte-1a83asv' && (ue.textContent = Ot),
					(Je = f(e)),
					(R = o(e, 'H2', { id: !0, 'data-svelte-h': !0 })),
					u(R) !== 'svelte-1kqee8c' && (R.textContent = Dt),
					(Qe = f(e)),
					(pe = o(e, 'P', { 'data-svelte-h': !0 })),
					u(pe) !== 'svelte-6wl1yt' && (pe.textContent = Ft),
					(Ve = f(e)),
					(S = o(e, 'H2', { id: !0, 'data-svelte-h': !0 })),
					u(S) !== 'svelte-i8iboe' && (S.textContent = Kt),
					(Ze = f(e)),
					(me = o(e, 'P', { 'data-svelte-h': !0 })),
					u(me) !== 'svelte-a8gfpd' && (me.textContent = Xt),
					this.h()
			},
			h() {
				ce($, 'id', 'ai-pipeline-as-a-framework-for-safety-governance'),
					ce(w, 'id', 'level-1-regulate-usage'),
					ce(C, 'id', 'level-2-regulate-deployment'),
					ce(T, 'id', 'level-3-regulate-training-runs'),
					ce(M, 'id', 'level-4-regulate-hardware--algorithms'),
					ce(R, 'id', 'limitations'),
					ce(S, 'id', 'conclusions')
			},
			m(e, t) {
				l(e, s, t),
					p(s, i),
					B(m, s, null),
					p(s, K),
					B(h, s, null),
					p(s, x),
					l(e, X, t),
					l(e, Y, t),
					l(e, ke, t),
					l(e, $, t),
					l(e, Le, t),
					l(e, J, t),
					l(e, Ae, t),
					l(e, Q, t),
					l(e, He, t),
					l(e, V, t),
					l(e, Me, t),
					B(Z, e, t),
					l(e, Pe, t),
					l(e, w, t),
					l(e, ze, t),
					l(e, ee, t),
					l(e, Ee, t),
					l(e, te, t),
					l(e, Re, t),
					l(e, ne, t),
					l(e, Se, t),
					l(e, C, t),
					l(e, je, t),
					l(e, le, t),
					l(e, We, t),
					l(e, b, t),
					p(b, ge),
					p(b, tt),
					p(b, y),
					p(y, ve),
					p(y, nt),
					B(I, y, null),
					p(y, lt),
					l(e, qe, t),
					l(e, se, t),
					l(e, Ue, t),
					l(e, ie, t),
					l(e, Ne, t),
					l(e, T, t),
					l(e, Ge, t),
					l(e, ae, t),
					l(e, Be, t),
					l(e, v, t),
					p(v, k),
					p(k, _e),
					p(k, st),
					B(L, k, null),
					p(k, it),
					p(v, at),
					p(v, xe),
					p(v, ot),
					p(v, $e),
					p(v, rt),
					p(v, A),
					p(A, we),
					p(A, ft),
					B(H, A, null),
					p(A, ut),
					p(v, pt),
					p(v, Ce),
					l(e, Oe, t),
					l(e, oe, t),
					l(e, De, t),
					l(e, re, t),
					l(e, Fe, t),
					l(e, M, t),
					l(e, Ke, t),
					l(e, fe, t),
					l(e, Xe, t),
					l(e, P, t),
					p(P, z),
					p(z, be),
					p(z, mt),
					B(E, z, null),
					p(z, ht),
					p(P, dt),
					p(P, ye),
					l(e, Ye, t),
					l(e, ue, t),
					l(e, Je, t),
					l(e, R, t),
					l(e, Qe, t),
					l(e, pe, t),
					l(e, Ve, t),
					l(e, S, t),
					l(e, Ze, t),
					l(e, me, t),
					(et = !0)
			},
			p(e, t) {
				const he = {}
				t & 2 && (he.$$scope = { dirty: t, ctx: e }), m.$set(he)
				const j = {}
				t & 2 && (j.$$scope = { dirty: t, ctx: e }), h.$set(j)
				const _ = {}
				t & 2 && (_.$$scope = { dirty: t, ctx: e }), I.$set(_)
				const W = {}
				t & 2 && (W.$$scope = { dirty: t, ctx: e }), L.$set(W)
				const q = {}
				t & 2 && (q.$$scope = { dirty: t, ctx: e }), H.$set(q)
				const de = {}
				t & 2 && (de.$$scope = { dirty: t, ctx: e }), E.$set(de)
			},
			i(e) {
				et ||
					(O(m.$$.fragment, e),
					O(h.$$.fragment, e),
					O(Z.$$.fragment, e),
					O(I.$$.fragment, e),
					O(L.$$.fragment, e),
					O(H.$$.fragment, e),
					O(E.$$.fragment, e),
					(et = !0))
			},
			o(e) {
				D(m.$$.fragment, e),
					D(h.$$.fragment, e),
					D(Z.$$.fragment, e),
					D(I.$$.fragment, e),
					D(L.$$.fragment, e),
					D(H.$$.fragment, e),
					D(E.$$.fragment, e),
					(et = !1)
			},
			d(e) {
				e &&
					(n(s),
					n(X),
					n(Y),
					n(ke),
					n($),
					n(Le),
					n(J),
					n(Ae),
					n(Q),
					n(He),
					n(V),
					n(Me),
					n(Pe),
					n(w),
					n(ze),
					n(ee),
					n(Ee),
					n(te),
					n(Re),
					n(ne),
					n(Se),
					n(C),
					n(je),
					n(le),
					n(We),
					n(b),
					n(qe),
					n(se),
					n(Ue),
					n(ie),
					n(Ne),
					n(T),
					n(Ge),
					n(ae),
					n(Be),
					n(v),
					n(Oe),
					n(oe),
					n(De),
					n(re),
					n(Fe),
					n(M),
					n(Ke),
					n(fe),
					n(Xe),
					n(P),
					n(Ye),
					n(ue),
					n(Je),
					n(R),
					n(Qe),
					n(pe),
					n(Ve),
					n(S),
					n(Ze),
					n(me)),
					F(m),
					F(h),
					F(Z, e),
					F(I),
					F(L),
					F(H),
					F(E)
			}
		}
	)
}
function mn(d) {
	let s, i
	const m = [d[0], Qt]
	let K = { $$slots: { default: [pn] }, $$scope: { ctx: d } }
	for (let h = 0; h < m.length; h += 1) K = ct(K, m[h])
	return (
		(s = new nn({ props: K })),
		{
			c() {
				N(s.$$.fragment)
			},
			l(h) {
				G(s.$$.fragment, h)
			},
			m(h, x) {
				B(s, h, x), (i = !0)
			},
			p(h, [x]) {
				const X = x & 1 ? tn(m, [x & 1 && Jt(h[0]), x & 0 && Jt(Qt)]) : {}
				x & 2 && (X.$$scope = { dirty: x, ctx: h }), s.$set(X)
			},
			i(h) {
				i || (O(s.$$.fragment, h), (i = !0))
			},
			o(h) {
				D(s.$$.fragment, h), (i = !1)
			},
			d(h) {
				F(s, h)
			}
		}
	)
}
const Qt = {
	title: '4 Levels of AI safety regulation',
	description: 'A framework for thinking about how to mitigate the risks from powerful AI systems',
	image: '/4levels.png'
}
function hn(d, s, i) {
	return (
		(d.$$set = (m) => {
			i(0, (s = ct(ct({}, s), Yt(m))))
		}),
		(s = Yt(s)),
		[s]
	)
}
class $n extends Zt {
	constructor(s) {
		super(), en(this, s, hn, mn, Vt, {})
	}
}
export { $n as default, Qt as metadata }
