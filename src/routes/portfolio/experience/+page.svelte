<script>
	import ScrollArea from '$lib/components/ui/scroll-area/scroll-area.svelte';
	import {
		Timeline,
		TimelineItem,
		TimelineSeparator,
		TimelineDot,
		TimelineConnector,
		TimelineContent,
		TimelineOppositeContent
	} from 'svelte-vertical-timeline';

	const experienceTimeLine = [
		{
			companyLogo: 'https://creatospace.com/assets/Logo-a24e76e4.png',
			timeline: 'Jul 2021 - Sep 2021',
			class: 'rounded-full',
			descpription: {
				jobTitle: 'React Native Intern',
				companyName: 'CreatoSpace'
			}
		},
		{
			companyLogo: 'https://i.ibb.co/6J6F1zY/the-entrepreneurship-network-cover.jpg',
			timeline: 'Oct 2021 - Dec 2021',
			class: 'rounded-full',
			descpription: {
				jobTitle: 'React Intern',
				companyName: 'The Entrepreneurship Network (Ten)'
			}
		},
		{
			companyLogo:
				'https://media.licdn.com/dms/image/v2/C510BAQGszYfsvJBnoA/company-logo_200_200/company-logo_200_200/0/1630599468318?e=2147483647&v=beta&t=zGpaha_NyVFvBNRXjVtbY2p-ozuQXdzZGnROnx9kNcI',
			timeline: 'Feb 2022 - Jul 2022',
			class: 'rounded-full',
			descpription: {
				jobTitle: 'React Intern',
				companyName: 'Default'
			}
		},
		{
			companyLogo: 'https://caarya.in/assets/caarya_banner_light.svg',
			class: 'h-10 w-20 rounded-full',
			timeline: 'Aug 2022 - Oct 2022',
			descpription: {
				jobTitle: 'Frontend Intern',
				companyName: 'Caarya'
			}
		},
		{
			companyLogo:
				'https://cdn.prod.website-files.com/64e5baa2187bf4d05912b65d/64e5bd502e8d1b07d195a26f_wwwew.svg',
			timeline: 'Nov 2022 - May 2023',
			class: 'rounded-full',
			descpription: {
				jobTitle: 'Fullstack Intern',
				companyName: 'Webknot Technologies'
			}
		},
		{
			companyLogo:
				'https://cdn.prod.website-files.com/64e5baa2187bf4d05912b65d/64e5bd502e8d1b07d195a26f_wwwew.svg',
			timeline: 'May 2023 - Present',
			class: 'rounded-full',
			descpription: {
				jobTitle: 'Fullstack Developer',
				companyName: 'Webknot Technologies'
			}
		}
	];
</script>

<ScrollArea class="h-[calc(100dvh-100px)] w-full">
	<Timeline position="alternate">
		{#each experienceTimeLine as timeline, index}
			<TimelineItem>
				<TimelineOppositeContent
					style="height: 150px; display: flex; justify-content: center; align-items: center; flex-direction: column;"
					slot="opposite-content"
				>
					<p>{timeline.timeline}</p>
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot
						style={'width: 100px; height: 100px; background-color: #000; display: flex; justify-content: center; align-items: center; border-color: transparent; '}
					>
						<img
							class={timeline.class}
							src={timeline.companyLogo}
							alt={timeline.descpription.companyName}
						/>
					</TimelineDot>
					{#if index + 1 !== experienceTimeLine.length}
						<TimelineConnector />
					{/if}
				</TimelineSeparator>
				<TimelineContent
					style={'height: 150px; display: flex; align-items: center; justify-content: center;'}
				>
					<div class="flex h-4/5 w-4/5 flex-col items-center justify-center rounded-md">
						<h3>{timeline.descpription.jobTitle}</h3>
						<p>{timeline.descpription.companyName}</p>
					</div>
				</TimelineContent>
			</TimelineItem>
		{/each}
	</Timeline>
</ScrollArea>

<style>
	p {
		margin: px 0;
		color: grey;
	}
</style>
