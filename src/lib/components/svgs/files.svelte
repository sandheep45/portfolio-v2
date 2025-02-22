<script lang="ts" module>
	import type { SVGAttributes } from 'svelte/elements';
	export type SvgProps = SVGAttributes<SVGElement>;
</script>

<script lang="ts">
	let props: SvgProps = $props();
</script>

<svg
	class="h-6 w-6 text-gray-800 dark:text-white"
	aria-hidden="true"
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 24 24"
	{...props}
>
	<path
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="2"
		d="M10 3v4a1 1 0 0 1-1 1H5m5 4-2 2 2 2m4-4 2 2-2 2m5-12v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z"
	/>
</svg>
