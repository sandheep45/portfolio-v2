<script lang="ts">
	import Files from '$lib/components/svgs/files.svelte';
	import Button from '$lib/components/ui/button/button.svelte';

	type Props = {
		toggleSidebar: () => boolean;
	};

	const { toggleSidebar }: Props = $props();
</script>

<section class="flex h-full justify-center bg-[#1c1347] px-1 py-4">
	<Button
		onclick={() => toggleSidebar()}
		class="h-0 w-0 p-4 text-[#ff2592]/80 hover:text-[#ff2592]"
		variant="ghost"
	>
		<Files class="!h-5 !w-5 " />
	</Button>
</section>
