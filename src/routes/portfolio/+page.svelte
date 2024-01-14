<script>
	import { Image } from '@unpic/svelte';
	import { cardContents } from '$lib/portfolioData.js';
	import { page } from '$app/stores';
	import Seo from '$lib/Seo.svelte';
</script>

<section class="grid place-content-center mt-20">
	<h1 class=" font-semibold text-5xl mb-5 lg:px-14 px-6">Portfolio</h1>

	<div class="band">
		{#each cardContents as cardContent (cardContent.title)}
			<div class={`cardContent ${cardContent.uniqueClass}`}>
				<a href={cardContent.proj.link} class="card bg-slate-50">
					<Image
						src={cardContent.img}
						layout="constrained"
						width={600}
						height={400}
						class="rounded-t-xl"
					/>
					<article>
						<h2 class="uppercase font-bold">{cardContent.title}</h2>
						<p><small>{cardContent.paragraph}</small></p>
						<div class="card-actions justify-between items-center gap-0 mt-5">
							<a target="_blank" href={cardContent.github.link}>
								{@html cardContent.github.logo}
							</a>
							<div class="flex items-center gap-1">
								{#if cardContent.title === 'Portfolio'}
									{@html cardContent.madeWith.svelteLogo}
									{@html cardContent.madeWith.htmlLogo}
									{@html cardContent.madeWith.cssLogo}
									{@html cardContent.madeWith.tailwindCssLogo}
									{@html cardContent.madeWith.jsLogo}
								{/if}
								{#if cardContent.title === 'AWR Clinic'}
									{@html cardContent.madeWith.reactLogo}
									{@html cardContent.madeWith.htmlLogo}
									{@html cardContent.madeWith.cssLogo}
									{@html cardContent.madeWith.tailwindCssLogo}
									{@html cardContent.madeWith.jsLogo}
								{/if}
								{#if cardContent.title === 'Flowerplicity'}
									{@html cardContent.madeWith.htmlLogo}
									{@html cardContent.madeWith.cssLogo}
									{@html cardContent.madeWith.bootstrapLogo}
									{@html cardContent.madeWith.jsLogo}
								{/if}
							</div>
						</div>
					</article>
				</a>
			</div>
		{/each}
	</div>
</section>

<Seo
	title="Portfolio"
	description="Showcasing my portfolio and other related works of about my projects"
	keywords="portfolio, ayie portfolio"
	canonical={$page.url.href}
/>

<style>
	.band {
		width: 90%;
		max-width: 1240px;
		margin: 0 auto;

		display: grid;

		grid-template-columns: 1fr;
		grid-template-rows: auto;
		grid-gap: 20px;

		@media (min-width: 30em) {
			grid-template-columns: 1fr 1fr;
		}

		@media (min-width: 60em) {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	.card {
		text-decoration: none;
		color: #444;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: column;
		min-height: 100%;
		position: relative;
		top: 0;
		transition: all 0.1s ease-in;

		&:hover {
			top: -2px;
			box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
		}

		article {
			padding: 20px;
			flex: 1;

			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}

		h2 {
			font-size: 20px;
			margin: 0;
			color: #333;
		}

		p {
			flex: 1;
			line-height: 1.4;
		}
	}

	.item-1 {
		@media (min-width: 60em) {
			grid-column: 1 / span 2;

			h2 {
				font-size: 24px;
			}
		}
	}
</style>
