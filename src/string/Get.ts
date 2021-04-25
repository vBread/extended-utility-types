import type { Path } from '../';

/**
 * Extracts the type of `P` from `T`.
 */
export type Get<T, P extends Path<T>> = P extends `${infer K}.${infer R}`
	? K extends keyof T
		? R extends Path<T[K]>
			? Get<T[K], R>
			: never
		: never
	: P extends keyof T
	? T[P]
	: never;