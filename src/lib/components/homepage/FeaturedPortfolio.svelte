<script>
	import FeaturedCard from './featured/FeaturedCard.svelte';
</script>

<div id="featured-card" class="w-[65vw] leading-5">
	<h2 class="lg:text-4xl md:text-2xl text-2xl mb-2 text-start">Latest Portfolio</h2>
	<p class="mb-4 text-start">
		"The only way to do great work is to love what you do." - Steve Jobs
	</p>

	<FeaturedCard />
</div>

<style>
	@media only screen and (max-width: 767px) {
		#featured-card {
			width: 80vw;
		}
	}
</style>
