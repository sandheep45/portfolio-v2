<script lang="ts" module>
	import type { SVGAttributes } from 'svelte/elements';
	export type SvgProps = SVGAttributes<SVGElement>;
</script>

<script lang="ts">
	let props: SvgProps = $props();
</script>

<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path
		d="M21.7264 15.4458L14.8301 8.55182M14.889 15.4482L21.7854 8.55182"
		stroke="#60A5FA"
		stroke-width="2"
	/>
	<path
		d="M3 15.7143V8H5.32258L7.64516 10.8361L9.96774 8H12.2903V15.7143H9.96774V11.2899L7.64516 14.1261L5.32258 11.2899V15.7143H3Z"
		fill="#60A5FA"
	/>
</svg>
