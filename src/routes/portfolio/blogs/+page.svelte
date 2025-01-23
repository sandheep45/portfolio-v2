<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { ScrollArea } from '$lib/components/ui/scroll-area';
	import { blogs } from './constants';
</script>

<div class="h-full w-full md:p-5">
	<div class="my-2 flex w-full flex-col gap-3">
		<h1 class="relative top-2 font-borel text-2xl text-[#008dce] md:text-5xl">Blogs</h1>

		<p class="">
			My blogs focus on a wide range of technical topics including front-end and back-end
			development, React, Next.js, unit testing, Linux, DevOps/automation etc. I aim to provide
			practical insights and solutions to help developers enhance their skills and stay current with
			industry best practices.
		</p>
	</div>
	<ScrollArea class="h-[calc(100dvh-260px)] w-full">
		<div class="grid grid-cols-1 gap-4 md:grid-cols-3 md:p-3 lg:grid-cols-4">
			{#each blogs as blog}
				<a
					href={blog.webkitURL}
					target="_blank"
					class="flex w-full flex-col gap-4 rounded-lg bg-[#d800ca]/70 px-2 py-4"
				>
					<img class="rounded-lg" src={blog.img} alt={blog.name} />
					<div class="flex flex-col gap-2">
						<p class="font-poiretOne font-bold">{blog.name}</p>
						<div class=" flex flex-wrap items-center gap-1 space-y-0.5">
							{#each blog.tags as tag}
								<Badge class="font-iceland">{tag}</Badge>
							{/each}
						</div>
					</div>
				</a>
			{/each}
		</div>
	</ScrollArea>
</div>
