<script>
	import { onMount } from 'svelte';
	import ModeSwitcher from './ModeSwitcher.svelte';

	let details;

	// Function to close the dropdown
	const closeDropdown = () => {
		details.removeAttribute('open');
	};

	const handleClickOutside = (e) => {
		if (details && !details.contains(e.target)) {
			closeDropdown();
		}
	};

	onMount(() => {
		// Add click event listeners to list items
		const listItems = document.querySelectorAll('.dropdown-content li');

		listItems.forEach((item) => {
			item.addEventListener('click', closeDropdown);
		});

		// Cleanup event listeners when component is destroyed
		return () => {
			listItems.forEach((item) => {
				item.removeEventListener('click', closeDropdown);
			});
		};
	});

	onMount(() => {
		window.addEventListener('click', handleClickOutside);
		return () => {
			window.removeEventListener('click', handleClickOutside);
		};
	});

	const navlinks = [
		{
			path: '/',
			content: 'Home',
			logo: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
						</svg>
						`
		},
		{
			path: '/portfolio',
			content: 'Portfolio',
			logo: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
						</svg>`
		},
		{
			path: '/career',
			content: 'Career',
			logo: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
						</svg>
						`
		},
		{
			path: '/journal',
			content: 'Journal',
			logo: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
							<path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
						</svg>`
		}
	];
</script>

<ModeSwitcher />
<details bind:this={details} class="dropdown dropdown-bottom dropdown-end">
	<summary class="m-1 btn btn-outline btn-circle btn-sm border-0 dark:text-[#f3f2f1] dark:bg-[rgba(0,0,0,0.1)]">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
			<path
				fill-rule="evenodd"
				d="M2 6.75A.75.75 0 0 1 2.75 6h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 6.75Zm0 6.5a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
				clip-rule="evenodd"
			></path>
		</svg>
	</summary>
	<ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
		{#each navlinks as navlink (navlink)}
			<li>
				<a class="flex justify-between" href={navlink.path}
					><span>{@html navlink.logo}</span> {navlink.content}</a
				>
			</li>
		{/each}
		<div class="divider my-0"></div>
		<li>
			<a class="flex justify-between" href="/about"
				>About <span
					><svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
						/>
					</svg></span
				></a
			>
		</li>
	</ul>
</details>

<style>
	/* Your styles go here */
</style>
