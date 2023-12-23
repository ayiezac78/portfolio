<script>
	import { page } from '$app/stores';
	import Seo from '../lib/Seo.svelte';
</script>

<h1 class=" font-extralight text-6xl">Welcome home</h1>

<Seo
	title="Ayie"
	description="Showcasing my portfolio, personality, career, and also daily life journal"
	keywords="portfolio, ayie portfolio, life journal, career "
	canonical = {$page.url.href}
/>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
