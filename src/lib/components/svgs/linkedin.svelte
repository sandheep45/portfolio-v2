<script lang="ts" module>
	import type { SVGAttributes } from 'svelte/elements';
	export type SvgProps = SVGAttributes<SVGElement>;
</script>

<script lang="ts">
	let props: SvgProps = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	viewBox="0 0 100 100"
	{...props}
	><defs
		><clipPath id="b"><path d="M0 0h100v100H0z" /></clipPath><clipPath id="c"
			><path d="M0 0h100v100H0z" /></clipPath
		><mask id="e"
			><g filter="url(#a)"
				><path d="M0 0h100v100H0z" fill="#000" fill-opacity=".0509804" stroke="none" /></g
			></mask
		><mask id="g"
			><g filter="url(#a)"
				><path d="M0 0h100v100H0z" fill="#000" fill-opacity=".0705882" stroke="none" /></g
			></mask
		><g id="d" clip-path="url(#b)"
			><path
				d="M66.8 86.121V58.246c0-4.66-2.26-7.445-6.05-7.445-2.25 0-3.902 1.265-4.91 3.765-.047.176-.113.895-.086 3.075l.008 28.48h-19.32V33.68h19.32v2.93c2.82-1.946 6.277-2.93 10.316-2.93 12.547 0 20.04 8.535 20.04 22.836l.003 29.605Zm-52.44 0V33.68h9.542c-5.53 0-9.543-4.063-9.543-9.664 0-5.594 4.079-9.657 9.7-9.657 5.554 0 9.507 3.95 9.62 9.602 0 5.64-4.081 9.719-9.699 9.719h9.7v52.44Zm0 0"
				stroke="none"
				fill-rule="nonzero"
				fill="#000"
				fill-opacity="1"
			/></g
		><g id="f" clip-path="url(#c)"
			><path
				d="M68.18 84.738V58.246c0-5.445-2.844-8.824-7.43-8.824-3.574 0-5.34 2.516-6.191 4.625-.227.55-.196 2.73-.184 3.66l.004 27.031H37.82v-49.68h16.56v4.524c2.195-2.273 5.726-4.523 11.7-4.523 11.683 0 18.66 8.023 18.66 21.457v28.222Zm-52.442 0v-49.68h16.563v49.68Zm8.164-52.437c-4.73 0-8.164-3.485-8.164-8.285 0-4.797 3.5-8.278 8.32-8.278 4.758 0 8.145 3.395 8.243 8.25 0 4.828-3.5 8.313-8.32 8.313Zm0 0"
				stroke="none"
				fill-rule="nonzero"
				fill="#000"
				fill-opacity="1"
			/></g
		><filter id="a" width="100%" height="100%" x="0%" y="0%" filterUnits="objectBoundingBox"
			><feColorMatrix in="SourceGraphic" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" /></filter
		></defs
	><path
		d="M99.922 86.121c0 7.621-6.18 13.8-13.8 13.8H14.358c-7.62 0-13.8-6.179-13.8-13.8V14.36c0-7.62 6.18-13.8 13.8-13.8H86.12c7.621 0 13.8 6.18 13.8 13.8Zm0 0"
		stroke="none"
		fill-rule="nonzero"
		fill="#0078d4"
		fill-opacity="1"
	/><use xlink:href="#d" mask="url(#e)" /><use xlink:href="#f" mask="url(#g)" /><path
		d="M17.121 36.441h13.8V83.36h-13.8Zm6.86-5.52h-.079c-4.117 0-6.78-3.07-6.78-6.905 0-3.914 2.745-6.895 6.937-6.895 4.199 0 6.785 2.98 6.863 6.895 0 3.832-2.664 6.906-6.942 6.906M83.358 83.36h-13.8V58.246c0-6.066-3.38-10.207-8.809-10.207-4.145 0-6.383 2.793-7.473 5.492-.394.969-.277 3.64-.277 4.989v24.84H39.2V36.44H53v7.22c1.988-3.083 5.105-7.22 13.078-7.22 9.875 0 17.277 6.207 17.277 20.075Zm0 0"
		stroke="none"
		fill-rule="nonzero"
		fill="#fff"
		fill-opacity="1"
	/></svg
>

