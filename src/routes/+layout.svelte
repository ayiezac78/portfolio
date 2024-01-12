<script>
	import Loader from '$lib/components/Loader.svelte';
	import { fade } from 'svelte/transition';
	import LoadingSplashScreen from '$lib/components/LoadingSplashScreen.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../stylesheet/app.css';
	import '../stylesheet/global.css';
	import { onMount } from 'svelte';
	import Navbar from './Navbar.svelte';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import { isLoading } from '../store/loading.js';
	import { beforeNavigate, afterNavigate } from '$app/navigation';
	import navigationState from '../store/navigationState.ts';

	export let data;

	beforeNavigate(() => {
		$navigationState = `loading`;
	});
	afterNavigate(() => {
		$navigationState = 'loaded';
	});

	onMount(() => {
		isLoading.set(true);
		const timeout = setTimeout(() => {
			isLoading.set(false);
		}, 3000);
		return () => {
			clearTimeout(timeout);
		};
	});
</script>

{#if $isLoading}
	<LoadingSplashScreen />
{:else}
	<div class="flex flex-col min-w-full" in:fade={{ delay: 550 }}>
		<header>
			<nav class="fixed top-0 z-10 w-full m-0 p-4 shadow-sm nav-div backdrop-blur">
				<Navbar />
			</nav>
		</header>
		{#if $navigationState === 'loading'}
			<div out:fade={{ delay: 500 }}>
				<Loader />
			</div>
		{/if}
		<main class="container mx-auto grid">
			{#key data.pathname}
				<div
					in:fade={{ easing: cubicOut, duration: 300, delay: 400 }}
					out:fade={{ easing: cubicIn, duration: 300 }}
				>
					<slot />
				</div>
			{/key}
		</main>
		<footer class="footer footer-center p-4">
			<Footer />
		</footer>
	</div>
{/if}
