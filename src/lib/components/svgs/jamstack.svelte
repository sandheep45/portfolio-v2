<script lang="ts" module>
	import type { SVGAttributes } from 'svelte/elements';
	export type SvgProps = SVGAttributes<SVGElement>;
</script>

<script lang="ts">
	let props: SvgProps = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100" {...props}
	><path fill="#F0047F" d="M50 0C22.352 0 0 22.352 0 50s22.352 50 50 50 50-22.352 50-50V0z" /><path
		fill="#fff"
		d="M47.281 52.72v36.45c-19.4-1.11-35.015-16.542-36.412-35.864l-.038-.587zm35.532 0c-1.015 19.4-15.162 35.014-32.873 36.41l-.538.038V52.72zm.044-35.577V50.6H49.401V17.143z"
	/></svg
>

