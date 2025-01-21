<script lang="ts">
	import ScrollArea from '$lib/components/ui/scroll-area/scroll-area.svelte';
	import { projectLists } from './constants';
</script>

<ScrollArea class="h-[calc(100dvh-100px)] w-full md:p-4">
	<div class="h-full w-full space-y-8">
		<div class="flex flex-col gap-0 md:gap-2">
			<h1 class="font-iceland text-2xl font-black text-[#008dce] md:text-5xl">Projects</h1>
			<p class="font-poiretOne text-sm font-medium text-[#d800ca] md:text-xl">
				College and Side Projects for practice.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
			{#each projectLists as project}
				<a
					href={project.href}
					class="flex w-full flex-col gap-3 rounded-lg bg-[#992293]/40 shadow-xl"
				>
					<img class="h-56 w-full rounded-t-lg" src={project.image} alt={project.title} />
					<div class="flex flex-col gap-1 p-3">
						<p class="font-nova">{project.title}</p>
						<p class="font-poiretOne leading-5">{project.description}</p>
					</div>
				</a>
			{/each}
		</div>
	</div>
</ScrollArea>
