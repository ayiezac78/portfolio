<script>
	import { page } from '$app/stores';
	import Seo from '../lib/Seo.svelte';
	import FeaturedPortfolio from '../lib/components/homepage/FeaturedPortfolio.svelte';
	import Introduction from '../lib/components/homepage/Introduction.svelte';
</script>

<main class="mt-14 container grid gap-32">
	<section class="grid place-content-center min-h-[30vh]">
		<Introduction />
	</section>
	<section id="featured" class="grid place-content-center py-4">
		<FeaturedPortfolio />
	</section>
</main>
<Seo
	title="Ayie"
	description="Showcasing my portfolio, personality, career, and also daily life journal"
	keywords="portfolio, ayie portfolio, life journal, career "
	canonical={$page.url.href}
/>

<style>
</style>
