<script>
	import { page } from '$app/stores';
</script>

<section class="grid place-content-center min-h-screen">
	<h1>{$page.status}: {$page.error?.message}</h1>
</section>
