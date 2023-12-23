<script>
	import { onMount } from 'svelte';
	import ModeSwitcher from './ModeSwitcher.svelte';

	let details;

	// Function to close the dropdown
	const closeDropdown = () => {
		details.removeAttribute('open');
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

	
</script>

<ModeSwitcher />
<details bind:this={details} class="dropdown dropdown-bottom dropdown-end">
	<summary class="m-1 btn">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
			<path
				fill-rule="evenodd"
				d="M2 6.75A.75.75 0 0 1 2.75 6h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 6.75Zm0 6.5a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
				clip-rule="evenodd"
			></path>
		</svg>
	</summary>
	<ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
		<li><a>Item 1</a></li>
		<li><a>Item 2</a></li>
	</ul>
</details>

<style>
	/* Your styles go here */
</style>
