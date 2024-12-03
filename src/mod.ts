/**
 * A module providing a foo function.
 * @module
 */

/**
 * Foo.
 */
export function foo(): string {
	return 'bar';
}

if (import.meta.main) {
	console.log(foo());
}
