<script>
	import { page } from '$app/stores';
	import Seo from '../lib/Seo.svelte';
	import FeaturedPortfolio from '$lib/components/homepage/FeaturedPortfolio.svelte';
	import Introduction from '$lib/components/homepage/Introduction.svelte';
</script>

<section class="grid place-content-center relative min-h-screen">
	<Introduction />
</section>
<section id="featured" class="grid place-content-center">
	<FeaturedPortfolio />
	<span class="text-center"
		><a class="btn button btn-sm rounded-full" href="/portfolio">See More</a></span
	>
</section>

<Seo
	title="@yie"
	description="Showcasing my portfolio, personality, career, and also daily life journal"
	keywords="portfolio, ayie portfolio, life journal, career "
	canonical={$page.url.href}
/>

<style>
</style>
