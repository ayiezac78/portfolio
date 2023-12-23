<script>
	import { page } from '$app/stores';

	import Seo from "../../lib/Seo.svelte";

</script>
<h1 class=" font-extralight text-6xl">About Me</h1>
<Seo
	title="About Ayie"
	description="it tells about my background, hobbies and personalities"
	keywords="about, about ayie, hobbies, personalities, background"
	canonical={$page.url.href}
/>
