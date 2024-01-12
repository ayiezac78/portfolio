<script>
	import { page } from '$app/stores';
	import Seo from '../../lib/Seo.svelte';
</script>

<section class="grid place-content-center relative h-screen snap-start">
	<h1 class=" font-extralight text-6xl">Journal</h1>
</section>
<Seo
	title="Journal"
	description="rethinking and retelling about past life, and realizing about my sorroundings in this type of world"
	keywords="journal, ayie journal"
	canonical={$page.url.href}
/>
