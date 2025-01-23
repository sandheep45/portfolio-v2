<script lang="ts">
	import ScrollArea from '$lib/components/ui/scroll-area/scroll-area.svelte';
	import useIsMobile from '$lib/hooks/useIsMobile.svelte';
	import { skillList } from './constants';

	const { isMobile } = useIsMobile();
</script>

<ScrollArea class="h-[calc(100dvh-100px)] w-full p-5">
	{#each skillList as skills}
		<div class="my-6 flex w-full flex-col gap-4">
			<h3 class="font-poiretOne text-2xl font-bold">{skills.optionCategory}</h3>
			<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
				{#each skills.options as skill}
					<div class="my-2 flex items-center gap-4">
						<skill.icon height={$isMobile ? 20 : 50} width={$isMobile ? 20 : 50} />
						<p class="font-iceland">{skill.name}</p>
					</div>
				{/each}
			</div>
		</div>
	{/each}
</ScrollArea>
