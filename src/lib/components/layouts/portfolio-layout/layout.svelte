<script lang="ts">
	import Device from 'svelte-device-info';
	import ActivityBar from '$lib/components/layouts/portfolio-layout/activity-bar.svelte';
	import MenuBar from '$lib/components/layouts/portfolio-layout/menu-bar.svelte';
	import StatusBar from '$lib/components/layouts/portfolio-layout/status-bar.svelte';
	import FolderCode from '$lib/components/svgs/folder-code.svelte';
	import * as Resizable from '$lib/components/ui/resizable/index';
	import * as TreeView from '$lib/components/ui/tree-view';
	import { knowMe, knowMyProjects, getInTouch, knowMeBetter } from './constants';

	const { children } = $props();
	const isSmallScreen = Device.isMobile || Device.isPhone;
	let showSidebar = $state(true);
	const sidebarData = [knowMe, knowMyProjects, getInTouch, knowMeBetter];

	const toggleSidebar = () => (showSidebar = !showSidebar);
</script>

<div class="flex h-dvh flex-col">
	<MenuBar />
	<div class="flex h-full flex-1 items-center">
		<ActivityBar {toggleSidebar} />
		<Resizable.PaneGroup class="h-full bg-[#030d22]" direction="horizontal">
			{#if showSidebar}
				<Resizable.Pane defaultSize={isSmallScreen ? 7 / 7 : 1 / 7} order={1}>
					<div class="h-full p-3">
						<TreeView.Root>
							<TreeView.Folder class="font-poiretOne" name="src">
								{#snippet icon()}
									<FolderCode height={18} width={18} />
								{/snippet}
								{#each sidebarData as folder}
									<TreeView.Folder class="font-poiretOne" name={folder.folderName}>
										{#snippet icon()}
											<folder.icon height={18} width={18} />
										{/snippet}
										{#each folder.files as file}
											<a href={file.href}>
												<TreeView.File class="truncate font-nova" name={file.fileName}>
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
			<Resizable.Pane defaultSize={isSmallScreen ? 0 / 7 : 6 / 7} order={2}>
				<div class="h-full p-3">
					{@render children()}
				</div>
			</Resizable.Pane>
		</Resizable.PaneGroup>
	</div>
	<StatusBar />
</div>
