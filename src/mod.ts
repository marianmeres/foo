/**
 * @module
 *
 * A module providing a foo function.
 *
 * @example
 * ```ts
 * import { foo } from "@marianmeres/foo";
 *
 * console.log(foo()); // logs "bar"
 * ```
 */

/**
 * Foo.
 *
 * ```ts
 * foo(); // returns "bar"
 * ```
 */
export function foo(): string {
	return "bar";
}

if (import.meta.main) {
	console.log(foo());
}
