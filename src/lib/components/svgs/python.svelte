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
		d="M49.64 0C24.254 0 25.839 11.01 25.839 11.01l.028 11.405h24.225v3.424H16.245S0 23.997 0 49.612s14.179 24.707 14.179 24.707h8.462V62.432s-.457-14.179 13.952-14.179H60.62s13.5.218 13.5-13.047V13.275S76.17 0 49.64 0M36.282 7.67a4.354 4.354 0 0 1 4.358 4.359 4.355 4.355 0 0 1-6.027 4.027 4.35 4.35 0 0 1-2.69-4.027 4.355 4.355 0 0 1 4.359-4.358"
	/><path
		fill="url(#b)"
		d="M50.36 99.48c25.387 0 23.802-11.008 23.802-11.008l-.028-11.406H49.908v-3.424h33.847S100 75.484 100 49.869 85.821 25.162 85.821 25.162H77.36V37.05s.457 14.178-13.952 14.178H39.38s-13.5-.218-13.5 13.048v21.932s-2.05 13.274 24.48 13.274m13.359-7.669a4.353 4.353 0 0 1-4.358-4.358 4.356 4.356 0 0 1 7.44-3.083 4.36 4.36 0 0 1 .945 4.751 4.355 4.355 0 0 1-4.027 2.69"
	/><defs
		><linearGradient
			id="a"
			x1="9.61"
			x2="59.167"
			y1="8.948"
			y2="58.011"
			gradientUnits="userSpaceOnUse"
			><stop stop-color="#387EB8" /><stop offset="1" stop-color="#366994" /></linearGradient
		><linearGradient
			id="b"
			x1="40.028"
			x2="93.247"
			y1="40.453"
			y2="90.762"
			gradientUnits="userSpaceOnUse"
			><stop stop-color="#FFE052" /><stop offset="1" stop-color="#FFC331" /></linearGradient
		></defs
	></svg
>

