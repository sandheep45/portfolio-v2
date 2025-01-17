<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';
	import Layout from '$lib/components/layouts/portfolio-layout/layout.svelte';

	let { children } = $props();
</script>

<ModeWatcher defaultMode="dark" />
<Layout>
	{@render children()}
</Layout>
