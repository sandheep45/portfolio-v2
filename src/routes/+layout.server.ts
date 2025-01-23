import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ url }) => {
	if (url.pathname === '/') {
		redirect(302, '/portfolio');
	}
};
