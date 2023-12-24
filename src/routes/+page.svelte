<script>
	import { page } from '$app/stores';
	import Seo from '../lib/Seo.svelte';
</script>

<main class="container mx-auto min-h-screen grid place-content-center">
	<section>
		<div>
			<span class="text-lg">Front-end Web Developer</span>
		</div>
		<h1 class="text-center font-extralight lg:text-6xl md:text-5xl text-5xl">Ariel Maniago</h1>
		<div class="text-base">
			'Where codes meets creativity'
		</div>
	</section>
</main>

<Seo
	title="Ayie"
	description="Showcasing my portfolio, personality, career, and also daily life journal"
	keywords="portfolio, ayie portfolio, life journal, career "
	canonical = {$page.url.href}
/>

<style>

</style>