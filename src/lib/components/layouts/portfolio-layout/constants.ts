import { type Component } from 'svelte';
import FolderSettings from '$lib/components/svgs/folder-settings.svelte';
import Html5 from '$lib/components/svgs/html5.svelte';
import Typescript from '$lib/components/svgs/typescript.svelte';
import Javascript from '$lib/components/svgs/javascript.svelte';
import type { SvgProps } from '$lib/components/svgs/zod.svelte';
import FolderGithub from '$lib/components/svgs/folder-github.svelte';
import FolderShare from '$lib/components/svgs/folder-share.svelte';
import Gmail from '$lib/components/svgs/gmail.svelte';
import FolderMessage from '$lib/components/svgs/folder-message.svelte';
import DevTo from '$lib/components/svgs/dev-to.svelte';
import Reactjs from '$lib/components/svgs/reactjs.svelte';

type SideBarFileDataType = {
	fileName: string;
	// eslint-disable-next-line @typescript-eslint/no-empty-object-type
	icon: Component<SvgProps, {}, ''>;
	href: string;
};

type SideBarFolderDataType = {
	folderName: string;
	// eslint-disable-next-line @typescript-eslint/no-empty-object-type
	icon: Component<SvgProps, {}, ''>;
	files: SideBarFileDataType[];
};

export const knowMe: SideBarFolderDataType = {
	folderName: 'Know ME',
	icon: FolderSettings,
	files: [
		{
			fileName: 'index.html',
			icon: Html5,
			href: '/portfolio'
		},
		{
			fileName: 'experience.ts',
			icon: Typescript,
			href: '/portfolio/experience'
		},
		{
			fileName: 'skills.ts',
			icon: Typescript,
			href: '/portfolio/skills'
		},
		{
			fileName: 'projects.js',
			icon: Javascript,
			href: '/portfolio/projects'
		}
	]
};

export const knowMyProjects: SideBarFolderDataType = {
	folderName: 'Know My Projects',
	icon: FolderGithub,
	files: [
		{
			fileName: 'portfolio-v1.tsx',
			icon: Reactjs,
			href: '/portfolio/projects/portfolio-v1'
		},
		{
			fileName: 'code-editor.tsx',
			icon: Reactjs,
			href: '/portfolio/projects/code-editor'
		},
		{
			fileName: 'code-compiler.tsx',
			icon: Reactjs,
			href: '/portfolio/projects/code-compiler'
		},
		{
			fileName: 'expense-tracker.tsx',
			icon: Reactjs,
			href: '/portfolio/projects/expense-tracker'
		},
		{
			fileName: 'voice-search-news-app.tsx',
			icon: Reactjs,
			href: '/portfolio/projects/news-app'
		},
		{
			fileName: 'google-keep-clone.tsx',
			icon: Reactjs,
			href: '/portfolio/projects/google-keep'
		},
		{
			fileName: 'todo.tsx',
			icon: Reactjs,
			href: '/portfolio/projects/todo'
		}
	]
};

export const getInTouch: SideBarFolderDataType = {
	folderName: 'Get In Touch',
	icon: FolderShare,
	files: [
		{
			fileName: 'Email.com',
			icon: Gmail,
			href: '/portfolio/contact-me'
		}
	]
};

export const knowMeBetter: SideBarFolderDataType = {
	folderName: 'Know ME Better',
	icon: FolderMessage,
	files: [
		{
			fileName: 'Blogs.tsx',
			icon: DevTo,
			href: '/portfolio/blogs'
		}
	]
};
