<script lang="ts">
	import ScrollArea from '$lib/components/ui/scroll-area/scroll-area.svelte';
	import * as Dialog from '$lib/components/ui/dialog';
	import { Link } from 'lucide-svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<ScrollArea class="h-[calc(100dvh-100px)] w-full">
	<div
		style:background-image="url({data.image})"
		class="flex h-full w-full flex-col gap-2 rounded-lg bg-cover bg-center bg-no-repeat p-5"
	>
		<div class="mx-auto flex flex-col gap-5 rounded-lg bg-slate-800 px-5 py-9 md:w-4/5">
			<a
				href={data.websiteUrl}
				target="_blank"
				class="flex w-full justify-end font-nova text-[#008dce] underline underline-offset-4"
				><Link class="mx-2" /> Visit Me</a
			>
			<p class="font-nova leading-5 text-[#d800ca] md:text-2xl">
				<span class="font-borel text-xl md:text-4xl">
					{data.title} -
				</span>
				{data.description}
			</p>

			<p class="font-poiretOne">{data.subDesc}</p>

			<div class="flex flex-col gap-4">
				<h3 class="font-poiretOne font-bold">Key Features</h3>
				<ul class="list-disc md:px-5">
					{#each data.keyPoints || [] as keypoint}
						<li class="font-poiretOne">{keypoint}</li>
					{/each}
				</ul>
			</div>
		</div>

		<div class="grid-col-1 grid gap-5 md:grid-cols-3">
			{#each data.snapshots || [] as snapshot, index}
				<Dialog.Root>
					<Dialog.Trigger>
						<img class="h-64 w-full rounded-lg" src={snapshot} alt={`${snapshot}-${index}`} />
					</Dialog.Trigger>
					<Dialog.Content>
						<Dialog.Header>
							<Dialog.Title class="sr-only">{data.description}</Dialog.Title>
							<Dialog.Description>
								<img class="h-full w-full rounded-lg" src={snapshot} alt={`${snapshot}-${index}`} />
							</Dialog.Description>
						</Dialog.Header>
					</Dialog.Content>
				</Dialog.Root>
			{/each}
		</div>
	</div>
</ScrollArea>
