<script lang="ts">
	import { Toaster } from '$lib/components/ui/sonner';

	const { children } = $props();
</script>

<Toaster richColors />
{@render children()}
