import type { Person } from '$lib/types'

export const prerender = true

export const load = async ({ fetch }) => {
	const response = await fetch('api/people')
	const people: Person[] = await response.json()
	return {
		people: people,
		maxage: 3600 // 1 hour in seconds
	}
}
