import Arc from '$lib/components/svgs/arc.svelte';
import ArchLinux from '$lib/components/svgs/arch-linux.svelte';
import Bash from '$lib/components/svgs/bash.svelte';
import Brave from '$lib/components/svgs/brave.svelte';
import Chakraui from '$lib/components/svgs/chakraui.svelte';
import Chrome from '$lib/components/svgs/chrome.svelte';
import Css3 from '$lib/components/svgs/css3.svelte';
import Discord from '$lib/components/svgs/discord.svelte';
import Drizzle from '$lib/components/svgs/drizzle.svelte';
import Expo from '$lib/components/svgs/expo.svelte';
import ExpressjsLight from '$lib/components/svgs/expressjs-light.svelte';
import FastApi from '$lib/components/svgs/fast-api.svelte';
import Fedora from '$lib/components/svgs/fedora.svelte';
import Figma from '$lib/components/svgs/figma.svelte';
import Firebase from '$lib/components/svgs/firebase.svelte';
import Firefox from '$lib/components/svgs/firefox.svelte';
import Framer from '$lib/components/svgs/framer.svelte';
import Git from '$lib/components/svgs/git.svelte';
import GithubLight from '$lib/components/svgs/github-light.svelte';
import Gitlab from '$lib/components/svgs/gitlab.svelte';
import Html5 from '$lib/components/svgs/html5.svelte';
import Jamstack from '$lib/components/svgs/jamstack.svelte';
import Javascript from '$lib/components/svgs/javascript.svelte';
import Jira from '$lib/components/svgs/jira.svelte';
import Json from '$lib/components/svgs/json.svelte';
import Linux from '$lib/components/svgs/linux.svelte';
import Markdown from '$lib/components/svgs/markdown.svelte';
import Materialui from '$lib/components/svgs/materialui.svelte';
import Mongodb from '$lib/components/svgs/mongodb.svelte';
import Neovim from '$lib/components/svgs/neovim.svelte';
import Nest from '$lib/components/svgs/nest.svelte';
import Nextjs from '$lib/components/svgs/nextjs.svelte';
import Ngrok from '$lib/components/svgs/ngrok.svelte';
import NixOs from '$lib/components/svgs/nix-os.svelte';
import Node from '$lib/components/svgs/node.svelte';
import Notion from '$lib/components/svgs/notion.svelte';
import Npm from '$lib/components/svgs/npm.svelte';
import Nuxtjs from '$lib/components/svgs/nuxtjs.svelte';
import Obs from '$lib/components/svgs/obs.svelte';
import Obsidian from '$lib/components/svgs/obsidian.svelte';
import Outlook from '$lib/components/svgs/outlook.svelte';
import Pnpm from '$lib/components/svgs/pnpm.svelte';
import Postgresql from '$lib/components/svgs/postgresql.svelte';
import Postman from '$lib/components/svgs/postman.svelte';
import Prisma from '$lib/components/svgs/prisma.svelte';
import Python from '$lib/components/svgs/python.svelte';
import Radixui from '$lib/components/svgs/radixui.svelte';
import Reactjs from '$lib/components/svgs/reactjs.svelte';
import RustLight from '$lib/components/svgs/rust-light.svelte';
import Shadcnui from '$lib/components/svgs/shadcnui.svelte';
import Slack from '$lib/components/svgs/slack.svelte';
import Sveltejs from '$lib/components/svgs/sveltejs.svelte';
import Swagger from '$lib/components/svgs/swagger.svelte';
import T3Light from '$lib/components/svgs/t3-light.svelte';
import Tailwindcss from '$lib/components/svgs/tailwindcss.svelte';
import Tanstack from '$lib/components/svgs/tanstack.svelte';
import Typescript from '$lib/components/svgs/typescript.svelte';
import Ubuntu from '$lib/components/svgs/ubuntu.svelte';
import Vscode from '$lib/components/svgs/vscode.svelte';
import Vuejs from '$lib/components/svgs/vuejs.svelte';
import Yarn from '$lib/components/svgs/yarn.svelte';
import Zed from '$lib/components/svgs/zed.svelte';
import Zen from '$lib/components/svgs/zen.svelte';
import type { SvgProps } from '$lib/components/svgs/zen.svelte';
import Zod from '$lib/components/svgs/zod.svelte';
import type { Component } from 'svelte';

type SkillOption = {
	name: string;
	// eslint-disable-next-line @typescript-eslint/no-empty-object-type
	icon: Component<SvgProps, {}, ''>;
};

type SkillListType = {
	optionCategory: string;
	options: SkillOption[];
};

const languageSkill: SkillListType = {
	optionCategory: 'Language',
	options: [
		{
			name: 'Javascript',
			icon: Javascript
		},
		{
			name: 'Typescript',
			icon: Typescript
		},
		{
			name: 'Python',
			icon: Python
		},
		{
			name: 'Rust',
			icon: RustLight
		},
		{
			name: 'Bash',
			icon: Bash
		}
	]
};

const frontendSkill: SkillListType = {
	optionCategory: 'Frontend',
	options: [
		{
			icon: Reactjs,
			name: 'Reactjs'
		},
		{
			name: 'Vue JS',
			icon: Vuejs
		},
		{
			name: 'Svelte',
			icon: Sveltejs
		},
		{
			name: 'React Native & Expo',
			icon: Expo
		},
		{
			name: 'CSS',
			icon: Css3
		},
		{
			name: 'HTML',
			icon: Html5
		}
	]
};

const frameWorkSkill: SkillListType = {
	optionCategory: 'Frameworks',
	options: [
		{
			name: 'Next JS',
			icon: Nextjs
		},
		{
			icon: T3Light,
			name: 'T3 Stack'
		},
		{
			name: 'Tanstack Start',
			icon: Tanstack
		},
		{
			name: 'Svelte Kit',
			icon: Sveltejs
		},
		{
			name: 'Nuxt JS',
			icon: Nuxtjs
		},
		{
			name: 'Express',
			icon: ExpressjsLight
		},
		{
			name: 'Nest JS',
			icon: Nest
		}
	]
};

const backendSkill: SkillListType = {
	optionCategory: 'Backend',
	options: [
		{
			icon: Node,
			name: 'Node JS'
		},
		{
			icon: FastApi,
			name: 'Fast API'
		},
		{
			name: 'Firebase',
			icon: Firebase
		}
	]
};

const packageSkills: SkillListType = {
	optionCategory: 'Packages',
	options: [
		{
			name: 'Shadcn UI',
			icon: Shadcnui
		},
		{
			name: 'Radix UI',
			icon: Radixui
		},
		{
			name: 'Tailwind CSS',
			icon: Tailwindcss
		},
		{
			name: 'Zod',
			icon: Zod
		},
		{
			name: 'Tanstack Table',
			icon: Tanstack
		},
		{
			name: 'Chakra UI',
			icon: Chakraui
		},
		{
			name: 'Material UI',
			icon: Materialui
		},
		{
			name: 'Figma',
			icon: Figma
		},
		{
			name: 'Framer Motion',
			icon: Framer
		}
	]
};

const databaseSkill: SkillListType = {
	optionCategory: 'Database',
	options: [
		{
			name: 'Drizzle',
			icon: Drizzle
		},
		{
			name: 'Prisma',
			icon: Prisma
		},
		{
			name: 'Postgres SQL',
			icon: Postgresql
		},
		{
			name: 'Mongo DB',
			icon: Mongodb
		}
	]
};

const osSkill: SkillListType = {
	optionCategory: 'Operating System',
	options: [
		{
			name: 'Linux',
			icon: Linux
		},
		{
			name: 'Arch Linux',
			icon: ArchLinux
		},
		{
			name: 'Nix OS',
			icon: NixOs
		},
		{
			name: 'Fedora',
			icon: Fedora
		},
		{
			name: 'Ubuntu',
			icon: Ubuntu
		}
	]
};

const productivitySkill: SkillListType = {
	optionCategory: 'Productivity',
	options: [
		{
			name: 'Neovim',
			icon: Neovim
		},
		{
			name: 'Git',
			icon: Git
		},
		{
			name: 'Gitlab',
			icon: Gitlab
		},
		{
			name: 'Github',
			icon: GithubLight
		},
		{
			name: 'Postman',
			icon: Postman
		},
		{
			name: 'Swagger',
			icon: Swagger
		},
		{
			name: 'Discord',
			icon: Discord
		},
		{
			name: 'VS code',
			icon: Vscode
		},
		{
			name: 'Zed Editor',
			icon: Zed
		},
		{
			name: 'Outlook',
			icon: Outlook
		},
		{
			name: 'Slack',
			icon: Slack
		},
		{
			name: 'Notion',
			icon: Notion
		},
		{
			name: 'Jira',
			icon: Jira
		},
		{
			name: 'Ngrok',
			icon: Ngrok
		}
	]
};

const browserSkills: SkillListType = {
	optionCategory: 'Browser',
	options: [
		{
			name: 'Arc Browser',
			icon: Arc
		},
		{
			name: 'Google Chrome',
			icon: Chrome
		},
		{
			name: 'Brave',
			icon: Brave
		},
		{
			name: 'Zen Browser',
			icon: Zen
		},
		{
			name: 'Firefox',
			icon: Firefox
		}
	]
};

const otherSkills: SkillListType = {
	optionCategory: 'Others',
	options: [
		{
			name: 'Markdown',
			icon: Markdown
		},
		{
			name: 'JSON',
			icon: Json
		},
		{
			name: 'JamStack',
			icon: Jamstack
		},
		{
			name: 'OBS Studio',
			icon: Obs
		},
		{
			name: 'Obsidian',
			icon: Obsidian
		},
		{
			name: 'Pnpm',
			icon: Pnpm
		},
		{
			name: 'Npm',
			icon: Npm
		},
		{
			name: 'Yarn',
			icon: Yarn
		}
	]
};
export const skillList: SkillListType[] = [
	languageSkill,
	frontendSkill,
	backendSkill,
	frameWorkSkill,
	packageSkills,
	databaseSkill,
	osSkill,
	productivitySkill,
	browserSkills,
	otherSkills
];
