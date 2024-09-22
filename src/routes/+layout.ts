import { loadTranslations } from '$lib/translations'
import { redirect } from '@sveltejs/kit'

export async function load({ url: { host, pathname: url, searchParams } }) {
	if (host === 'pauseai.org') {
		return redirect(301, 'https://pauseai.info' + url)
	}

	const lang = searchParams.get('lang') || 'en'
	let out = await loadTranslations(lang, url)
	console.log('Loaded translations for', out)

	return { url, lang }
}
