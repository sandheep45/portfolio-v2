<script lang="ts">
	import MenuBar from '$lib/components/layouts/portfolio-layout/menu-bar.svelte';
	import StatusBar from '$lib/components/layouts/portfolio-layout/status-bar.svelte';
	import ActivityBar from '$lib/components/layouts/portfolio-layout/activity-bar.svelte';

	const { children } = $props();
</script>

<div class="flex h-dvh flex-col">
	<MenuBar />
	<div class="flex h-full flex-1 items-center">
		<ActivityBar />
		{@render children()}
	</div>
	<StatusBar />
</div>
