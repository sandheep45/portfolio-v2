<script lang="ts" module>
	import type { SVGAttributes } from 'svelte/elements';
	export type SvgProps = SVGAttributes<SVGElement>;
</script>

<script lang="ts">
	let props: SvgProps = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100" {...props}
	><path
		d="M99.719 31.465 87.87 37.98 76.02 49.238v38.633h16.59a7.11 7.11 0 0 0 7.109-7.11Zm0 0"
		stroke="none"
		fill-rule="nonzero"
		fill="#4caf50"
		fill-opacity="1"
	/><path
		d="m.18 31.465 8.566 4.05L23.88 49.239v38.633H7.289a7.11 7.11 0 0 1-7.11-7.11Zm0 0"
		stroke="none"
		fill-rule="nonzero"
		fill="#1e88e5"
		fill-opacity="1"
	/><path
		d="M76.02 19.598 49.95 39.152 23.878 19.598l-2.367 13.77 2.367 15.878 26.07 19.555 26.07-19.555 2.372-15.879Zm0 0"
		stroke="none"
		fill-rule="nonzero"
		fill="#e53935"
		fill-opacity="1"
	/><path
		d="M.18 22.215v9.25l23.699 17.773V19.613l-7.402-5.547a10.17 10.17 0 0 0-6.11-2.035C4.738 12.031.18 16.59.18 22.215m0 0"
		stroke="none"
		fill-rule="nonzero"
		fill="#c62828"
		fill-opacity="1"
	/><path
		d="M99.719 22.215v9.25l-23.7 17.773V19.613l7.407-5.547a10.16 10.16 0 0 1 6.11-2.035c5.624 0 10.183 4.559 10.183 10.184m0 0"
		stroke="none"
		fill-rule="nonzero"
		fill="#fbc02d"
		fill-opacity="1"
	/></svg
>

