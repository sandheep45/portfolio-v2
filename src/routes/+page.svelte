<script lang="ts">
	import ActivityBar from '$lib/components/layouts/portfolio-layout/activity-bar.svelte';
	import MenuBar from '$lib/components/layouts/portfolio-layout/menu-bar.svelte';
	import StatusBar from '$lib/components/layouts/portfolio-layout/status-bar.svelte';
	import Html5 from '$lib/components/svgs/html5.svelte';
	import * as Resizable from '$lib/components/ui/resizable/index';
	import * as TreeView from '$lib/components/ui/tree-view';

	let showSidebar = $state(true);

	const sidebar = [
		{
			folderName: 'About',
			files: [
				{
					fileName: 'index.html',
					icon: Html5,
					href: '/'
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
					<div class="h-full">
						<TreeView.Root>
							<TreeView.Folder name="src">
								{#each sidebar as folder}
									<TreeView.Folder name={folder.folderName}>
										{#each folder.files as file}
											<a href={file.href}>
												<TreeView.File name={file.fileName}>
													<file.icon class="h-5 w-5" />
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
				<div class="h-full">sdkjbn</div>
			</Resizable.Pane>
		</Resizable.PaneGroup>
	</div>
	<StatusBar />
</div>
