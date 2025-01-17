<script lang="ts" module>
	import { type SVGAttributes } from 'svelte/elements';
	export type SvgProps = SVGAttributes<SVGElement>;
</script>

<script lang="ts">
	let props: SvgProps = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100" {...props}
	><rect width="1024" height="1024" rx="225" ry="225" fill="#202020" /><circle
		cx="512"
		cy="512"
		r="340"
		fill="none"
		stroke="#f2f0e3"
		stroke-width="70px"
	/><circle cx="512" cy="512" r="224.9" fill="none" stroke="#f2f0e3" stroke-width="51px" /><circle
		cx="512"
		cy="512"
		r="129"
		stroke-width="31px"
		fill="none"
		stroke="#f2f0e3"
	/></svg
>

