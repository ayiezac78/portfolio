<script>
	import 'iconify-icon';
	import { fade } from 'svelte/transition';
	import LoadingSplashScreen from './../lib/components/LoadingSplashScreen.svelte';
	import Footer from './../lib/components/Footer.svelte';
	import '../app.css';
	import Header from '../lib/components/Header.svelte';
	import { onMount } from 'svelte';

	let isLoading = true;

	onMount(async () => {
		const timeout = setTimeout(() => {
			isLoading = false;
		}, 3000);
		return () => {
			clearTimeout(timeout);
		};
	});
</script>

{#if isLoading}
	<LoadingSplashScreen />
{:else}
	<div in:fade={{ delay: 550 }}>
		<header>
			<Header />
		</header>
		<main class="container mx-auto h-dvh">
			<slot />
		</main>
		<footer class="footer footer-center p-10 bg-primary text-primary-content">
			<Footer />
		</footer>
	</div>
{/if}

<style>
	:global(html) {
		font-family: 'Space Grotesk', sans-serif;
	}
	:global(html[data-theme='light']) {
		transition: linear color 0.3s;
	}
	:global(html[data-theme='dark']) {
		transition: linear color 0.3s;
	}
	:global(main) {
		display: grid;
		place-content: center;
	}
	:global(::-webkit-scrollbar) {
		width: 5px;
	}
	:global(::-webkit-scrollbar-thumb) {
		background: #333;
		border-radius: 5px;
	}
</style>
