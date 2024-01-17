<script>
	import { page } from '$app/stores';
	import Lottie from 'lottie-web';
	import { onMount } from 'svelte';
	import animationData from '$lib/data/not-found.json';

	let animationContainer;

	onMount(() => {
		Lottie.loadAnimation({
			container: animationContainer,
			animationData,
			renderer: 'svg'
		});
	});
</script>

<section class="grid place-content-center min-h-screen">
	<div class="h-[50vh]" bind:this={animationContainer}></div>
	<div class="text-center">
		<h1 class="font-semibold text-4xl">{$page.status} : {$page.error?.message}</h1>
		<p>Whoops! It seems like we've encountered a hiccup in the digital matrix.</p>
		<p>
			Don your virtual sunglasses and let's find our way <a
				class="text-orange-600 underline font-medium"
				href="/">back</a
			>.
		</p>
	</div>
</section>
