import { default as l } from '../chunks/_page.C7KOoW2N.js'
const o = !1,
	t = async ({ fetch: e }) => ({ people: await (await e('api/people')).json() }),
	r = Object.freeze(
		Object.defineProperty({ __proto__: null, load: t, prerender: o }, Symbol.toStringTag, {
			value: 'Module'
		})
	)
export { l as component, r as universal }
