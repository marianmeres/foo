import { assertEquals } from '@std/assert';
import { foo } from './mod.ts';

Deno.test('foo', () => {
	assertEquals(foo(), 'bar');
});
