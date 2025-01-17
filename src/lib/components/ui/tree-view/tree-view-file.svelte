<script lang="ts">
	import type { Snippet } from 'svelte';
	import { File } from 'lucide-svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils';

	interface Props extends HTMLButtonAttributes {
		name: string;
		icon?: Snippet<[{ name: string }]>;
	}

	let { name, icon, type = 'button', class: className, children, ...rest }: Props = $props();
</script>

<button
	{type}
	class={cn('flex place-items-center gap-1 py-0.5 pl-[3px] text-sm', className)}
	{...rest}
>
	{#if icon}
		{@render icon({ name })}
	{:else if children}
		{@render children()}
	{:else}
		<File class="size-4" />
	{/if}
	<span>{name}</span>
</button>
