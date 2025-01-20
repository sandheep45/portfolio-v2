<script lang="ts">
	import DevTo from '$lib/components/svgs/dev-to.svelte';
	import GithubLight from '$lib/components/svgs/github-light.svelte';
	import Linkedin from '$lib/components/svgs/linkedin.svelte';
	import ScrollArea from '$lib/components/ui/scroll-area/scroll-area.svelte';

	const startList = [
		{
			title: 'Skills ...',
			icon: '',
			href: '/portfolio/skills'
		},
		{
			title: 'Projects ...',
			icon: '',
			href: '/portfolio/projects'
		},
		{
			title: 'Blogs ...',
			icon: '',
			href: '/portfolio/blogs'
		},
		{
			title: 'Git In Touch ...',
			icon: '',
			href: '/portfolio/contact-me'
		}
	];
</script>

<ScrollArea class="h-full w-full">
	<div class="flex h-full w-full items-center justify-center">
		<div class="mx-auto w-4/6 space-y-9">
			<div class="flex flex-col gap-2">
				<h1 class="font-borel text-4xl font-bold text-[#004696]">Sandheep Kumar</h1>
				<p class="font-iceland text-lg text-[#f3f3f3]">
					Software Developement Engineer/ Linux Nerd/ Cook/ Sayar
				</p>
				<p class="font-poiretOne text-[#0ab2fa]">
					I'm a full-stack developer who spends more time in the terminal than in the real world—who
					needs a mouse when you've got hotkeys and a keyboard that knows you better than most
					people? When I'm not pushing code to production, I'm writing blogs on Linux, React,
					frontend, backend, automation, and all things tech. I also cook up new recipes and drop a
					few lines of sayari in Hindi to keep things poetic. I’m a Linux power user—if it’s not
					running on Linux, I’m probably not interested. I don’t make friends; so yes, i am alone
					but not lonely—just happily spending time with my terminal, where the only thing I need to
					debug is my own thoughts. My social life revolves around code, coke, and occasionally some
					well-crafted food. So yeah, I code, I cook, I write, and I do it all from my own little
					world where the only drama is a 404 error.
				</p>
			</div>

			<div class="flex w-full justify-between">
				<div class="flex w-full flex-col gap-4">
					<h2 class="font-nova text-2xl font-medium">Start</h2>
					<div class="flex w-full flex-col gap-2">
						{#each startList as start}
							<a class="font-borel text-sm text-blue-500" href={start.href}>{start.title}</a>
						{/each}
					</div>
				</div>

				<div class="flex w-full flex-col gap-4">
					<h2 class="font-nova text-2xl font-medium">Profesionally Social Links</h2>
					<a
						href="https://www.linkedin.com/in/sandheep-kumar-patro-b39089183/"
						target="_blank"
						class="flex w-full items-center gap-2 border-b-4 border-b-blue-500 bg-violet-700/30 px-2 py-3"
					>
						<Linkedin height="25" width="25" />
						<p>LinkedIn</p>
					</a>

					<a
						href="https://github.com/sandheep45"
						target="_blank"
						class="flex w-full items-center gap-2 border-b-4 border-b-blue-500 bg-violet-700/30 px-2 py-3"
					>
						<GithubLight height="25" width="25" />
						<p>Github</p>
					</a>

					<a
						href="https://dev.to/sandheep_kumarpatro_1c48"
						target="_blank"
						class="flex w-full items-center gap-2 border-b-4 border-b-blue-500 bg-violet-700/30 px-2 py-3"
					>
						<DevTo height="25" width="25" />
						<p>Dev.to</p>
					</a>
				</div>
			</div>
		</div>
	</div>
</ScrollArea>
