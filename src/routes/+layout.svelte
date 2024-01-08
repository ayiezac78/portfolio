<script>
	import 'iconify-icon';
	import { fade } from 'svelte/transition';
	import LoadingSplashScreen from './../lib/components/LoadingSplashScreen.svelte';
	import Footer from './../lib/components/Footer.svelte';
	import '../app.css';
	import '../stylesheet/global.css';
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
	<div class="flex flex-col min-w-full" in:fade={{ delay: 550 }}>
		<header>
			<Header />
		</header>
		<slot />
		<footer class="footer footer-center p-4">
			<Footer />
		</footer>
	</div>
{/if}
