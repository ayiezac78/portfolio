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
		<main class="container mx-auto min-h-screen">
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
		height: 100%;
	}
	:global(body) {
		display: grid;
		grid-template-rows: 1fr auto; /* Header takes up one row, footer auto-sizes */
		min-height: 100vh;
		margin: 0;
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
	:global(footer) {
		grid-row: 2; /* Place footer in the second row */
	}
</style>
