<script lang="ts" module>
	import type { SVGAttributes } from 'svelte/elements';
	export type SvgProps = SVGAttributes<SVGElement>;
</script>

<script lang="ts">
	let props: SvgProps = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100" {...props}
	><path
		fill="url(#a)"
		d="M49.915 74.438C72.04 104.597 93.69 66.02 93.658 42.821 93.621 15.393 65.82.063 49.898.063 24.338.063 0 21.185 0 50.085 0 82.207 27.9 100 49.897 100c-4.977-.716-21.566-4.27-21.789-42.479-.15-25.841 8.43-36.166 21.753-31.624.299.11 14.696 5.79 14.696 24.344 0 18.475-14.642 24.197-14.642 24.197"
	/><path
		fill="url(#b)"
		d="M49.89 25.876c-14.62-5.039-32.528 7.01-32.528 31.143 0 39.405 29.2 42.981 32.74 42.981C75.662 100 100 78.878 100 49.978 100 17.855 72.1.062 50.103.062 56.195-.78 82.94 6.656 82.94 43.21c0 23.838-19.97 36.816-32.96 31.271-.298-.11-14.696-5.79-14.696-24.344 0-18.475 14.605-24.261 14.605-24.261"
	/><defs
		><linearGradient
			id="a"
			x1="14.79"
			x2="89.489"
			y1="14.791"
			y2="80.397"
			gradientUnits="userSpaceOnUse"><stop /><stop offset="1" stop-color="#fff" /></linearGradient
		><linearGradient
			id="b"
			x1="85.238"
			x2="4.387"
			y1="85.237"
			y2="30.025"
			gradientUnits="userSpaceOnUse"><stop /><stop offset="1" stop-color="#fff" /></linearGradient
		></defs
	></svg
>

