<script>
	import { page } from '$app/stores';
	import Seo from '../../lib/Seo.svelte';
</script>

<main>
	<section class="grid place-content-center relative h-screen snap-start">
		<h1 class=" font-extralight text-6xl">Portfolio</h1>
	</section>
</main>
<Seo
	title="Portfolio"
	description="Showcasing my portfolio and other related works of about my projects"
	keywords="portfolio, ayie portfolio"
	canonical={$page.url.href}
/>
