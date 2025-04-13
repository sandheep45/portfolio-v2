let showSidebarRune = $state(true);

export const getShowSidebar = () => {
	return showSidebarRune;
};

export const setShowSidebar = (updatedShowSidebar: boolean) => {
	showSidebarRune = updatedShowSidebar;
};
