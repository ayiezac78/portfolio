<script>
	import { Image } from '@unpic/svelte';
	import { blurhashToCssGradientString } from '@unpic/placeholder';
	// import NavLinks from './NavLinks.svelte';
	import { page } from '$app/stores';
	import Logo from '$lib/components/Logo.svelte';
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
	import MobileMenu from '$lib/components/MobileMenu.svelte';
	import { navlinks } from '$lib/navLinks.js';
	import me from '$lib/images/me.webp';

	const blurhash = blurhashToCssGradientString('LCDlvfE11t-V_8NGbcnh0O$%}FEM');
	$: routeId = $page.route.id;
</script>

<div class="flex place-items-center justify-between">
	<div class="flex items-center gap-10">
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
	</div>
	<div class="flex items-center gap-2">
		<ThemeSwitch />
		<a
			class:active-profile={routeId == '/about'}
			class="tooltip tooltip-left about-me flex"
			data-tip="About me"
			href="/about"
		>
			<div class="avatar">
				<div class="w-8 rounded-full">
					<Image
						layout="constrained"
						class="grayscale"
						src={me}
						alt="Profile Image"
						background={blurhash}
					/>
				</div>
			</div>
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
