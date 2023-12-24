<script>
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';
	import Seo from '../lib/Seo.svelte';
</script>

<main class="container mx-auto grid place-content-center place-items-center">
	<section>
		<div>
			<span class="text-lg">Front-end Web Developer</span>
		</div>
		<h1 class="text-center font-extralight lg:text-7xl md:text-5xl text-5xl">
			Ariel Maniago<span class="blinking-cursor" />
		</h1>
		<div class="text-base">'Where codes meets creativity'</div>
	</section>
</main>

<Seo
	title="Ayie"
	description="Showcasing my portfolio, personality, career, and also daily life journal"
	keywords="portfolio, ayie portfolio, life journal, career "
	canonical={$page.url.href}
/>

<style>
	.blinking-cursor {
		animation: blink 1s infinite;
		display: inline-block;
		width: 4px;
		height: 3.5rem;
		transition: linear 0.3s;
		background-color: #96658A;
	}
	
	@media only screen and (max-width: 991px) {
		.blinking-cursor {
			height: 2rem;
		}
	}
	@media only screen and (max-width: 767px) {
		.blinking-cursor {
			height: 2.1rem;
		}
	}

	@keyframes blink {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
