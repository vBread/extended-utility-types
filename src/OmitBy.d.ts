import type { Values } from './__internal__';

/**
 * Constructs a type by picking all properties from `T` and then removing `K` based on `U`.
 */
export type OmitBy<T, U, K extends Values<T, U>> = Omit<T, K>;
