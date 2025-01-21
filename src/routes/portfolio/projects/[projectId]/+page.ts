import { projectLists } from '../constants';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const projectCodeEnum = [
		{
			projectType: 'Personal Projects',
			projects: projectLists.map((project) => project.href)
		}
	];
	if (
		!projectCodeEnum.some((project) =>
			project.projects.includes(`/portfolio/projects/${params.projectId}`)
		)
	) {
		throw new Error('Invalid Project ID');
	}
	return projectLists.find((project) => project.href === `/portfolio/projects/${params.projectId}`);
};
