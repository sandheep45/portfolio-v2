import { onMount } from 'svelte';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useLocalStorage = (key: string, initialValue: any) => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let value = $state<any>(initialValue);

	onMount(() => {
		const currentValue = localStorage.getItem(key);
		if (currentValue) value = JSON.parse(currentValue);
	});

	const save = () => {
		if (value) {
			localStorage.setItem(key, JSON.stringify(value));
		} else {
			localStorage.removeItem(key);
		}
	};

	return {
		get value() {
			return value;
		},
		set value(v: string) {
			value = v;
			save();
		}
	};
};

export default useLocalStorage;
