<script lang="ts" module>
	import type { SVGAttributes } from 'svelte/elements';
	export type SvgProps = SVGAttributes<SVGElement>;
</script>

<script lang="ts">
	let props: SvgProps = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100" {...props}
	><path fill="#C00" d="M0 0h100v100H0z" /><path
		fill="#fff"
		d="M49.66 10.74H10.74v78.517h38.916V30.54h19.8v58.716h19.8V10.74z"
	/></svg
>

