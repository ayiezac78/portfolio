<script>
	// import NavLinks from './NavLinks.svelte';
	import { page } from '$app/stores';
	import Logo from '$lib/components/Logo.svelte';
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
	import MobileMenu from '$lib/components/MobileMenu.svelte';
	import { navlinks } from '$lib/navLinks.js';

	$: routeId = $page.route.id;
</script>

<div class="flex place-items-center justify-between">
	<a class="flex" href="/">
		<Logo />
	</a>
	<div class="flex gap-3 nav-items dark:text-neutral-50">
		{#each navlinks as navlink (navlink)}
			<a
				class:active={routeId == navlink.path}
				class="flex gap-1 hover:text-[#df4a1b] transition-all"
				href={navlink.path}><span>{@html navlink.logo}</span>{navlink.content}</a
			>
		{/each}
	</div>
	<div class="flex items-center gap-2">
		<ThemeSwitch />
		<a
			class:active={routeId == '/about'}
			class="tooltip tooltip-left about-me"
			data-tip="About me"
			href="/about"
		>
			<svg
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
			</svg>
		</a>
		<MobileMenu />
	</div>
</div>

<style>
	@media only screen and (max-width: 767px) {
		.about-me,
		.nav-items {
			display: none;
		}
	}
</style>
