<script lang="ts" module>
	import type { SVGAttributes } from 'svelte/elements';
	export type SvgProps = SVGAttributes<SVGElement>;
</script>

<script lang="ts">
	let props: SvgProps = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100" {...props}
	><path fill="#E24329" d="m50 96.118 18.413-56.669H31.587z" /><path
		fill="#FC6D26"
		d="m50 96.118-18.413-56.67H5.782z"
	/><path fill="#FCA326" d="M5.782 39.449.186 56.67a3.81 3.81 0 0 0 1.385 4.262L50 96.118z" /><path
		fill="#E24329"
		d="M5.782 39.449h25.805L20.497 5.318c-.57-1.757-3.055-1.756-3.625 0z"
	/><path fill="#FC6D26" d="m50 96.118 18.413-56.67h25.805z" /><path
		fill="#FCA326"
		d="m94.218 39.449 5.595 17.221a3.81 3.81 0 0 1-1.385 4.262L50 96.118z"
	/><path
		fill="#E24329"
		d="M94.218 39.449H68.413l11.09-34.131c.57-1.757 3.055-1.756 3.625 0z"
	/></svg
>

