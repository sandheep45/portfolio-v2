<script lang="ts" module>
	import type { SVGAttributes } from 'svelte/elements';
	export type SvgProps = SVGAttributes<SVGElement>;
</script>

<script lang="ts">
	let props: SvgProps = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100" {...props}
	><path fill="#00B0FF" d="M0 53.3V10l37.5 21.65v14.434l-25-14.434v28.867z" /><path
		fill="#0081CB"
		d="M37.5 31.65 75 10v43.3L50 67.735l-12.5-7.217 25-14.433V31.65l-25 14.434z"
	/><path fill="#00B0FF" d="M37.5 60.517V74.95l25 14.434V74.95z" /><path
		fill="#0081CB"
		d="m62.5 89.384 37.5-21.65V38.867l-12.5 7.217v14.433l-25 14.434zm25-57.733V17.217l12.5-7.216v14.433z"
	/></svg
>

