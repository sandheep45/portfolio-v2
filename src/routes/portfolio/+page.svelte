<script lang="ts">
	import BugFix from '$lib/components/svgs/bug-fix.svelte';
	import DevTo from '$lib/components/svgs/dev-to.svelte';
	import GithubLight from '$lib/components/svgs/github-light.svelte';
	import HashTag from '$lib/components/svgs/hash-tag.svelte';
	import Linkedin from '$lib/components/svgs/linkedin.svelte';
	import Projector from '$lib/components/svgs/projector.svelte';
	import ScrollArea from '$lib/components/ui/scroll-area/scroll-area.svelte';

	const startList = [
		{
			title: 'Skills ...',
			icon: BugFix,
			href: '/portfolio/skills'
		},
		{
			title: 'Projects ...',
			icon: Projector,
			href: '/portfolio/projects'
		},
		{
			title: 'Blogs ...',
			icon: DevTo,
			href: '/portfolio/blogs'
		},
		{
			title: 'Git In Touch ...',
			icon: HashTag,
			href: '/portfolio/contact-me'
		}
	];
</script>

<ScrollArea class="h-full w-full py-4">
	<div class="flex h-full w-full items-center justify-center">
		<div class="mx-auto space-y-9 md:w-4/6">
			<div class="flex flex-col gap-2">
				<h1 class="relative top-4 py-1 font-borel text-2xl font-bold text-[#004696] md:text-4xl">
					Sandheep Kumar
				</h1>
				<p class="font-iceland text-xl leading-5 text-[#f3f3f3] md:text-lg">
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

			<div class="flex w-full flex-col justify-between gap-5 md:flex-row md:gap-0">
				<div class="flex w-full flex-col gap-2 md:gap-4">
					<h2 class="font-nova text-xl font-medium md:text-2xl">Start</h2>
					<div class="flex w-full flex-col gap-2">
						{#each startList as start}
							<div class="flex items-center gap-2 text-blue-500 underline underline-offset-4">
								<start.icon height="20" width="20" />
								<a class="font-borel text-sm" href={start.href}>{start.title}</a>
							</div>
						{/each}
					</div>
				</div>

				<div class="flex w-full flex-col gap-2 md:gap-4">
					<h2 class="font-nova text-xl font-medium md:text-2xl">Profesionally Social Links</h2>
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
