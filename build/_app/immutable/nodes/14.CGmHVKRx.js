import { default as c } from '../chunks/_page.BRrUGLhc.js'
const o = !0,
	t = async ({ fetch: e }) => ({ props: await (await e('api/teams')).json() }),
	n = Object.freeze(
		Object.defineProperty({ __proto__: null, load: t, prerender: o }, Symbol.toStringTag, {
			value: 'Module'
		})
	)
export { c as component, n as universal }
