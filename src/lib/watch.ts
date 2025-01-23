import { onDestroy } from 'svelte';
import { derived, type Writable } from 'svelte/store';

export function watch<T>(deps: Writable<T> | Writable<T>[], fn: (values: T | T[]) => void): void {
	const unsubscribe = derived(deps, (values) => values).subscribe(fn);
	onDestroy(unsubscribe);
}
