<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';
	import Layout from '$lib/components/layouts/portfolio-layout/layout.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Sandheep Kumar | Fullstack developer</title>
	<meta
		name="description"
		content="Hi, I'm Sandheep Kumar, a Full Stack and Mobile Developer with a deep passion for Linux, DevOps, and Automation. I specialize in creating scalable web and mobile applications, and I'm always exploring new technologies to improve my skills and streamline development processes."
	/>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		href="https://fonts.googleapis.com/css2?family=Borel&family=Iceland&family=Nova+Round&family=Poiret+One&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<ModeWatcher defaultMode="dark" />
<Layout>
	{@render children()}
</Layout>
