import { E as f, F as h } from './scheduler.D9JQr37X.js'
function b(t) {
	return t < 0.5 ? 4 * t * t * t : 0.5 * Math.pow(2 * t - 2, 3) + 1
}
function v(t) {
	const r = t - 1
	return r * r * r + 1
}
function w(
	t,
	{ delay: r = 0, duration: s = 400, easing: p = b, amount: i = 5, opacity: o = 0 } = {}
) {
	const c = getComputedStyle(t),
		d = +c.opacity,
		u = c.filter === 'none' ? '' : c.filter,
		a = d * (1 - o),
		[n, $] = h(i)
	return {
		delay: r,
		duration: s,
		easing: p,
		css: (_, l) => `opacity: ${d - a * l}; filter: ${u} blur(${l * n}${$});`
	}
}
function x(t, { delay: r = 0, duration: s = 400, easing: p = f } = {}) {
	const i = +getComputedStyle(t).opacity
	return { delay: r, duration: s, easing: p, css: (o) => `opacity: ${o * i}` }
}
function C(t, { delay: r = 0, duration: s = 400, easing: p = v, axis: i = 'y' } = {}) {
	const o = getComputedStyle(t),
		c = +o.opacity,
		d = i === 'y' ? 'height' : 'width',
		u = parseFloat(o[d]),
		a = i === 'y' ? ['top', 'bottom'] : ['left', 'right'],
		n = a.map((e) => `${e[0].toUpperCase()}${e.slice(1)}`),
		$ = parseFloat(o[`padding${n[0]}`]),
		_ = parseFloat(o[`padding${n[1]}`]),
		l = parseFloat(o[`margin${n[0]}`]),
		y = parseFloat(o[`margin${n[1]}`]),
		g = parseFloat(o[`border${n[0]}Width`]),
		m = parseFloat(o[`border${n[1]}Width`])
	return {
		delay: r,
		duration: s,
		easing: p,
		css: (e) =>
			`overflow: hidden;opacity: ${Math.min(e * 20, 1) * c};${d}: ${e * u}px;padding-${a[0]}: ${e * $}px;padding-${a[1]}: ${e * _}px;margin-${a[0]}: ${e * l}px;margin-${a[1]}: ${e * y}px;border-${a[0]}-width: ${e * g}px;border-${a[1]}-width: ${e * m}px;`
	}
}
export { w as b, x as f, C as s }
