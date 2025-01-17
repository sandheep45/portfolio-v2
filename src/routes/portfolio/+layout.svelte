<script lang="ts">
	import ActivityBar from '$lib/components/layouts/portfolio-layout/activity-bar.svelte';
	import MenuBar from '$lib/components/layouts/portfolio-layout/menu-bar.svelte';
	import StatusBar from '$lib/components/layouts/portfolio-layout/status-bar.svelte';
	import FolderCode from '$lib/components/svgs/folder-code.svelte';
	import FolderGithub from '$lib/components/svgs/folder-github.svelte';
	import FolderMessage from '$lib/components/svgs/folder-message.svelte';
	import FolderSettings from '$lib/components/svgs/folder-settings.svelte';
	import FolderShare from '$lib/components/svgs/folder-share.svelte';
	import Gmail from '$lib/components/svgs/gmail.svelte';
	import Html5 from '$lib/components/svgs/html5.svelte';
	import Javascript from '$lib/components/svgs/javascript.svelte';
	import Typescript from '$lib/components/svgs/typescript.svelte';
	import Vitejs from '$lib/components/svgs/vitejs.svelte';
	import * as Resizable from '$lib/components/ui/resizable/index';
	import * as TreeView from '$lib/components/ui/tree-view';

	let { children } = $props();

	let showSidebar = $state(true);

	const sidebar = [
		{
			folderName: 'Know ME',
			icon: FolderSettings,
			files: [
				{
					fileName: 'index.html',
					icon: Html5,
					href: '/portfolio'
				},
				{
					fileName: 'experience.ts',
					icon: Typescript,
					href: '/portfolio/experience'
				},
				{
					fileName: 'skills.ts',
					icon: Typescript,
					href: '/portfolio/skills'
				},
				{
					fileName: 'projects.js',
					icon: Javascript,
					href: '/portfolio/projects'
				}
			]
		},
		{
			folderName: 'Know My Projects',
			icon: FolderGithub,
			files: [
				{
					fileName: 'index.html',
					icon: Html5,
					href: '/portfolio/projects/1'
				}
			]
		},
		{
			folderName: 'Get In Touch',
			icon: FolderShare,
			files: [
				{
					fileName: 'Email.com',
					icon: Gmail,
					href: '/portfolio/contact-me'
				}
			]
		},
		{
			folderName: 'Know ME Better',
			icon: FolderMessage,
			files: [
				{
					fileName: 'Blogs.tsx',
					icon: Vitejs,
					href: '/portfolio/blogs'
				}
			]
		}
	];

	const toggleSidebar = () => (showSidebar = !showSidebar);
</script>

<svelte:head>
	<title>Sandheep Kumar | Fullstack developer</title>
	<meta
		name="description"
		content="Hi, I'm Sandheep Kumar, a Full Stack and Mobile Developer with a deep passion for Linux, DevOps, and Automation. I specialize in creating scalable web and mobile applications, and I'm always exploring new technologies to improve my skills and streamline development processes."
	/>
</svelte:head>

<div class="flex h-dvh flex-col">
	<MenuBar />
	<div class="flex h-full flex-1 items-center">
		<ActivityBar {toggleSidebar} />
		<Resizable.PaneGroup class="h-full bg-[#030d22]" direction="horizontal">
			{#if showSidebar}
				<Resizable.Pane defaultSize={1 / 7} order={1}>
					<div class="h-full p-3">
						<TreeView.Root>
							<TreeView.Folder name="src">
								{#snippet icon()}
									<FolderCode height={18} width={18} />
								{/snippet}
								{#each sidebar as folder}
									<TreeView.Folder name={folder.folderName}>
										{#snippet icon()}
											<folder.icon height={18} width={18} />
										{/snippet}
										{#each folder.files as file}
											<a href={file.href}>
												<TreeView.File name={file.fileName}>
													{#snippet icon()}
														<file.icon height={18} width={18} class="h-4 w-4" />
													{/snippet}
												</TreeView.File>
											</a>
										{/each}
									</TreeView.Folder>
								{/each}
							</TreeView.Folder>
						</TreeView.Root>
					</div>
				</Resizable.Pane>
			{/if}
			<Resizable.Handle />
			<Resizable.Pane defaultSize={6 / 7} order={2}>
				<div class="h-full p-3">
					{@render children()}
				</div>
			</Resizable.Pane>
		</Resizable.PaneGroup>
	</div>
	<StatusBar />
</div>
