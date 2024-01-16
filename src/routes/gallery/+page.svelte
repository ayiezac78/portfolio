<script>
	import { page } from '$app/stores';
	import Seo from '../../lib/Seo.svelte';
</script>

<section class="grid place-content-center relative h-screen snap-start">
	<h1 class=" font-extralight text-6xl">Gallery</h1>
</section>
<Seo
	title="Media Gallery"
	description="reimagining and retelling about past life, where images and videos reminds of my life through memories"
	keywords="memories, images, gallery, videos, reimagining, retelling"
	canonical={$page.url.href}
/>
