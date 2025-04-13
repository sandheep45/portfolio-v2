<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import Device from 'svelte-device-info';
	import FolderCode from '$lib/components/svgs/folder-code.svelte';
	import * as Resizable from '$lib/components/ui/resizable/index';
	import * as TreeView from '$lib/components/ui/tree-view';
	import { knowMe, knowMyProjects, getInTouch, knowMeBetter } from './constants';

	import { getShowSidebar, setShowSidebar } from '$lib/store/sidebar-store.svelte';

	const { children } = $props();
	const isSmallScreen = Device.isMobile || Device.isPhone;
	const sidebarData = [knowMe, knowMyProjects, getInTouch, knowMeBetter];

	afterNavigate(() => {
		if (isSmallScreen) {
			setShowSidebar(!getShowSidebar());
		}
	});
</script>

<Resizable.PaneGroup class="h-full bg-[#030d22]" direction="horizontal">
	{#if getShowSidebar()}
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
