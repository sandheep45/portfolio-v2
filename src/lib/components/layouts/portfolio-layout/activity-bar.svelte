<script lang="ts">
	import Files from '$lib/components/svgs/files.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { setShowSidebar, getShowSidebar } from '$lib/store/sidebar-store.svelte';
</script>

<section class="flex h-full justify-center bg-[#1c1347] px-1 py-2">
	<Button
		onclick={() => setShowSidebar(!getShowSidebar())}
		class="h-0 w-0 p-4 text-[#ff2592]/80 hover:text-[#ff2592]"
		variant="ghost"
	>
		<Files class="!h-6 !w-6" />
	</Button>
</section>
