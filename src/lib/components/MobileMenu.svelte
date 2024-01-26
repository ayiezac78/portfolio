<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { navlinks } from '../navLinks.js';
	import me from '$lib/images/me.webp';
	import { Image } from '@unpic/svelte';
	import { blurhashToCssGradientString } from '@unpic/placeholder';

	let details;
	const blurhash = blurhashToCssGradientString('LCDlvfE11t-V_8NGbcnh0O$%}FEM');

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

	$: routeId = $page.route.id;
</script>

<details bind:this={details} class="dropdown dropdown-bottom dropdown-end mobile-menu">
	<summary
		class="m-1 btn btn-outline btn-circle btn-sm border-0 dark:text-[#f3f2f1] dark:bg-[rgba(0,0,0,0.1)]"
	>
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
				<a
					class:active-details={routeId == navlink.path}
					class="flex justify-between"
					href={navlink.path}><span>{@html navlink.logo}</span> {navlink.content}</a
				>
			</li>
		{/each}
		<div class="divider my-0"></div>
		<li>
			<a class:active-details={routeId == '/about'} class="flex justify-between" href="/about"
				>About <span class="flex"
					><div class="avatar">
						<div class="w-7 rounded-full">
							<Image
								layout="constrained"
								class="grayscale"
								src={me}
								alt="Profile Image"
								background={blurhash}
							/>
						</div>
					</div></span
				></a
			>
		</li>
	</ul>
</details>

<style>
	.mobile-menu {
		display: none;
	}
	@media only screen and (max-width: 767px) {
		.mobile-menu {
			display: block;
		}
	}
</style>
