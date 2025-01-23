import { onMount } from 'svelte';
import { writable } from 'svelte/store';

// `useIsMobile` hook
const useIsMobile = (breakpoint: number = 480) => {
	// Create a writable store to track isMobile status
	const isMobile = writable(false);

	const checkDeviceType = () => {
		isMobile.set(window.innerWidth <= breakpoint); // Update the store
	};

	onMount(() => {
		// Initial check on mount
		checkDeviceType();
		// Resize event listener to check for screen size changes
		window.addEventListener('resize', checkDeviceType);

		// Cleanup event listener when the component is destroyed
		return () => window.removeEventListener('resize', checkDeviceType);
	});

	return {
		isMobile // Directly return the store
	};
};

export default useIsMobile;
