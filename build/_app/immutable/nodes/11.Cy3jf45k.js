import { default as p } from '../chunks/_page.C1hh-ABO.js'
async function e({ fetch: o }) {
	return { posts: await (await o('api/posts')).json() }
}
const n = Object.freeze(
	Object.defineProperty({ __proto__: null, load: e }, Symbol.toStringTag, { value: 'Module' })
)
export { p as component, n as universal }
