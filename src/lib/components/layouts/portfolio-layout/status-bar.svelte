<script lang="ts">
	import Shadcnui from '$lib/components/svgs/shadcnui.svelte';
	import Sveltejs from '$lib/components/svgs/sveltejs.svelte';
	import Tailwindcss from '$lib/components/svgs/tailwindcss.svelte';
	import Typescript2 from '$lib/components/svgs/typescript2.svelte';
	import { formatDate } from '$lib/utils';
	let currentTime = $state(formatDate());

	$effect.root(() => {
		const timeId = setInterval(() => {
			currentTime = formatDate();
		}, 1000);

		return () => clearInterval(timeId);
	});
</script>

<div class="flex items-center justify-between bg-[#0a0631] px-2 py-1 text-[#4d8bee]">
	<div class="flex items-center gap-3">
		<p>Made with</p>
		<Sveltejs height={20} width={20} />
		<Typescript2 height={20} width={20} />
		<Shadcnui height={20} width={20} />
		<Tailwindcss height={20} width={20} />
	</div>

	<div class="flex items-center gap-3">
		<p>{currentTime}</p>
		<p>UTF-8</p>
		<p>Port: 143</p>
	</div>
</div>

<style>
	p {
		@apply text-sm;
	}
</style>
