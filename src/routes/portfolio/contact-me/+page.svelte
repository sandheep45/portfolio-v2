<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { toast } from 'svelte-sonner';
	import ScrollArea from '$lib/components/ui/scroll-area/scroll-area.svelte';
	import Textarea from '$lib/components/ui/textarea/textarea.svelte';

	const handleForm = () => {
		const toastId = toast.loading('Sending message...');

		setTimeout(() => {
			toast.success('Your email sent successfully', {
				id: toastId
			});
		}, 1500);
	};
</script>

<ScrollArea class="h-[calc(100dvh-100px)] w-full p-5">
	<div class="flex h-full w-full flex-col justify-center gap-7 md:flex-row md:p-10">
		<div class="flex-1 space-y-2">
			<h1 class="font-iceland text-2xl font-bold text-[#008dce] md:text-5xl">Get in touch</h1>
			<h3 class="font-nova text-lg md:text-3xl">Fill in the form to start a conversation</h3>
			<p class="text-[#d800ca]">
				You can contact me with any questions, suggestions or just to say hi. I am always open to
				new ideas and collaborations. It can be anything like collaborating on good projects or
				startups or sayari or anything else.
			</p>
		</div>

		<div class="flex-1 space-y-5">
			<Input placeholder="Fullname" class="font-poiretOne" />
			<Input placeholder="Email" class="font-poiretOne" />
			<Textarea placeholder="Your message" class="font-poiretOne text-lg" />
			<Button onclick={handleForm}>Submit</Button>
		</div>
	</div>
</ScrollArea>
