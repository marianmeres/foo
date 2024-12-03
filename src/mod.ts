/**
 * A module providing a foo function.
 * @module
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
