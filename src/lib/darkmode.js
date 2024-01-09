import { writable } from 'svelte/store';
export let darkmode = writable(false);

function setThemeAttribute(value) {
	document.documentElement.setAttribute('data-theme', value ? 'dark' : 'light');
}
export function updateAfter() {
	darkmode.update((value) => {
		setThemeAttribute(value);
		return value;
	});
}

export function onBrowser() {
	const storedTheme = localStorage.getItem('theme');
	const isDarkTheme =
		storedTheme === 'dark' ||
		(!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);

	setThemeAttribute(isDarkTheme);
	darkmode.update(() => isDarkTheme);
}
