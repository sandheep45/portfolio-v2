import portfolioV1 from '$lib/images/portfolio-v1.jpeg';
import codeCompiler from '$lib/images/code-compiler.jpeg';
import editor from '$lib/images/editor-image.jpg';
import expenseTracker from '$lib/images/expense-tracker.jpeg';
import todo from '$lib/images/todo.jpeg';
import voiceSearchNewsApp from '$lib/images/voice-search-news-app.jpeg';
import googleKeep from '$lib/images/google-keep-clone.jpeg';

import portfolioV1001 from '$lib/images/portfolio-v2-001.webp';
import portfolioV1002 from '$lib/images/portfolio-v2-002.webp';
import portfolioV1003 from '$lib/images/portfolio-v2-003.webp';
import portfolioV1004 from '$lib/images/portfolio-v2-004.webp';
import portfolioV1005 from '$lib/images/portfolio-v2-005.webp';

import codeEditor001 from '$lib/images/code-editor-001.webp';
import codeEditor002 from '$lib/images/code-editor-002.webp';
import codeEditor003 from '$lib/images/code-editor-003.webp';
import codeEditor004 from '$lib/images/code-editor-004.webp';
import codeEditor005 from '$lib/images/code-editor-005.webp';
import codeEditor006 from '$lib/images/code-editor-006.webp';
import codeEditor007 from '$lib/images/code-editor-007.webp';

import codeCompiler001 from '$lib/images/code-compiler-001.webp';
import codeCompiler002 from '$lib/images/code-compiler-002.webp';

import expenseTracker001 from '$lib/images/expense-tracker-001.webp';
import expenseTracker002 from '$lib/images/expense-tracker-002.webp';
import expenseTracker003 from '$lib/images/expense-tracker-003.webp';

import voiceSearchNewsApp001 from '$lib/images/voice-news-app-001.webp';

import googleKeepClone001 from '$lib/images/google-keep-clone-001.webp';
import googleKeepClone002 from '$lib/images/google-keep-clone-002.webp';
import googleKeepClone003 from '$lib/images/google-keep-clone-003.webp';
import googleKeepClone004 from '$lib/images/google-keep-clone-004.webp';

import todoApp001 from '$lib/images/todo-001.webp';
import todoApp002 from '$lib/images/todo-001.webp';
import todoApp003 from '$lib/images/todo-003.webp';
import todoApp004 from '$lib/images/todo-004.webp';

export const projectLists = [
	{
		title: 'Portfolio V1',
		image: portfolioV1,
		href: '/portfolio/projects/portfolio-v1',
		websiteUrl: 'https://sandheep-portfolio.netlify.app',
		description:
			'A creative portfolio showcasing design, web development, and digital art projects by Sandheep.',
		subDesc:
			'A responsive portfolio showcasing projects with smooth animations, modern design, and seamless navigation.',
		keyPoints: [
			'My portfolio leverages Framer Motion to create smooth and visually appealing animations, enhancing user engagement and providing a seamless browsing experience.',
			'Built with a mobile-first approach, your portfolio is fully responsive, ensuring it looks great and functions smoothly across a variety of devices, from smartphones to desktops.',
			'The use of Styled Components brings a clean, modular, and modern design to your site, allowing for consistent styling while maintaining flexibility for future design updates.',
			'Thanks to React Router, your portfolio offers a smooth, single-page navigation experience, minimizing load times and keeping users engaged with seamless transitions between sections.'
		],
		snapshots: [portfolioV1001, portfolioV1002, portfolioV1003, portfolioV1004, portfolioV1005]
	},
	{
		title: 'Code Editor',
		image: editor,
		href: '/portfolio/projects/code-editor',
		websiteUrl: 'https://sussan143.github.io/codeEditor/',
		description:
			'A versatile online code editor supporting multiple programming languages for writing and testing code',
		subDesc: 'A VS code like editor with various language and theme support',
		keyPoints: [
			'Support for popular programming languages (e.g., JavaScript, Python, HTML, CSS, etc.) with syntax highlighting tailored to each language.',
			'Optional integration with code execution or output preview for web-based languages like HTML, CSS, and JavaScript directly in the browser.',
			'Multiple themes inspired by popular editors, including light, dark, and high-contrast options.',
			'Seamlessly adaptive layout, ensuring optimal usability across desktops, tablets, and mobile devices.'
		],
		snapshots: [
			codeEditor001,
			codeEditor002,
			codeEditor003,
			codeEditor004,
			codeEditor005,
			codeEditor006,
			codeEditor007
		]
	},
	{
		title: 'Code Compiler',
		image: codeCompiler,
		href: '/portfolio/projects/code-compiler',
		websiteUrl: 'https://sussan143.github.io/online_program_compiler/',
		description:
			'An online program compiler allowing users to write, compile, and run code in various languages.',
		subDesc: 'A basic programming compiler with build on top of React JS',
		keyPoints: [
			'Allow users to compile and run code in multiple programming languages (e.g., Python, Java, C++, JavaScript).',
			"Use a dynamic API to detect and run the user's chosen language seamlessly.",
			'Add syntax highlighting tailored to each language.',
			'Use APIs like Monaco Editor for inline error highlighting.'
		],
		snapshots: [codeCompiler001, codeCompiler002]
	},
	{
		title: 'Expense Tracker',
		image: expenseTracker,
		href: '/portfolio/projects/expense-tracker',
		websiteUrl: 'https://sussan143.github.io/Expense_Tracker/',
		description:
			'An intuitive expense tracker to help users manage and monitor their personal finances effortlessly.',
		subDesc: 'A cool looking expense tracker with filtering ability',
		keyPoints: [
			'Add an analytics page or section that displays visual representations of expenses such as graphs. Users can quickly understand where their money is going and spot patterns.',
			'Allow users to create, edit, or delete expense categories tailored to their needs. This makes the tracker adaptable to individual preferences.',
			'Add a feature to track recurring expenses (like subscriptions, rent, or utility bills). Automatically deduct these on a scheduled basis.',
			'Enhance the current filtering capability with advanced options, allowing users to search and filter expenses with precision.'
		],
		snapshots: [expenseTracker001, expenseTracker002, expenseTracker003]
	},
	{
		title: 'Voice Search News App',
		image: voiceSearchNewsApp,
		href: '/portfolio/projects/news-app',
		websiteUrl: 'https://sussan143.github.io/voiceControlledNewsApp/',
		description:
			'A voice-controlled news app that provides real-time news updates through simple voice commands.',
		subDesc: 'API integrated NEWS app with voice control.',
		keyPoints: [
			'Allow users to fetch news by categories such as Sports, Business, Technology, Health, etc., using both voice commands and UI buttons.',
			'Integrate user preferences (e.g., favorite categories, keywords, or regions) for a customized news feed. Allow users to set preferences through both a settings page and voice commands.',
			"Users can bookmark news articles for later reading or listening. Provide a dedicated 'Saved Articles' section.",
			'Enable users to retrieve news in multiple languages based on their choice. Voice commands and UI should support language switching.'
		],
		snapshots: [voiceSearchNewsApp001]
	},
	{
		title: 'Google Keep Clone',
		image: googleKeep,
		href: '/portfolio/projects/google-keep',
		websiteUrl: 'https://sussan143.github.io/googleKeepClone/',
		description:
			'A Google Keep clone for creating, editing, and organizing notes with a user-friendly interface.',
		subDesc: 'A responsive google keep clone build using React JS and Material UI',
		keyPoints: [
			"The app is fully responsive, ensuring smooth usability across various screen sizes, from desktops to smartphones. It uses Material UI's grid and breakpoints to maintain consistent design aesthetics.",
			'Users can easily create, edit, and delete notes. The React state management ensures real-time updates and a seamless experience.',
			'Leveraging Material UI provides a clean, modern, and intuitive user interface, including pre-designed components like buttons, modals, and cards for a polished look.',
			'Implementing a search bar or filtering functionality allows users to quickly find notes based on keywords or tags, enhancing productivity.'
		],
		snapshots: [googleKeepClone001, googleKeepClone002, googleKeepClone003, googleKeepClone004]
	},
	{
		title: 'Todo App',
		image: todo,
		href: '/portfolio/projects/todo',
		websiteUrl: 'https://sussan143.github.io/reactToDoList/',
		description:
			'A simple and interactive React-based to-do list app for managing tasks and staying organized.',
		subDesc: 'A todo app build using React with delete and strike through functionality',
		keyPoints: [
			'Allow users to categorize their tasks by adding tags or creating folders (e.g., "Work," "Personal," "Urgent").',
			'Enable users to set due dates and optional reminders for their tasks.',
			'Display a progress bar or completion percentage based on the number of completed tasks versus total tasks.',
			'Add a search bar to find specific tasks quickly, and filters for options like "Completed," "Pending," or "Overdue."'
		],
		snapshots: [todoApp001, todoApp002, todoApp003, todoApp004]
	}
];
