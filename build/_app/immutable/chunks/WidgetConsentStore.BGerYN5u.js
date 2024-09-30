import { w as o } from './entry.DgPt5EtK.js'
const t = 'widget-consent',
	s = 'null',
	n = localStorage.getItem(t) ?? s,
	a = o(JSON.parse(n))
a.subscribe((e) => {
	localStorage.setItem(t, JSON.stringify(e))
})
export { a as c }
