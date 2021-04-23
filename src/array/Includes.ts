/**
 * Returns a boolean if `U` is included in `T`.
 *
 * @example
 * ```ts
 * const numbers = [1, 2, 3, 4, 5] as const;
 *
 * type T0 = Includes<typeof numbers, 3>;
 * //	^ = type T0 = true
 *
 * type T1 = Includes<typeof numbers, 'a'>;
 * //	^ = type T1 = false
 * ```
 */
export type Includes<T extends unknown[], U> = T extends [infer F, ...infer R]
	? F extends U
		? true
		: Includes<R, U>
	: false;