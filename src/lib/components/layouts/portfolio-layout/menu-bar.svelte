<script lang="ts">
	import Neovim from '$lib/components/svgs/neovim.svelte';
</script>

<div class="flex items-center justify-between bg-[#03153b] px-4 py-2">
	<div class="flex items-center gap-3">
		<span class="px-1">
			<Neovim class="h-4 w-4" />
		</span>
		<a href="/portfolio">About</a>
		<a href="/portfolio/experience">Experience</a>
		<a href="/portfolio/skills">Skills</a>
		<a href="/portfolio/projects">Projects</a>
		<a href="/portfolio/contact-me">Contact</a>
	</div>

	<div class="flex items-center gap-2">
		<div class="h-3 w-3 rounded-full bg-red-700"></div>
		<div class="h-3 w-3 rounded-full bg-yellow-300"></div>
		<div class="h-3 w-3 rounded-full bg-green-600"></div>
	</div>
</div>

<style>
	a {
		@apply text-sm;
	}
</style>
