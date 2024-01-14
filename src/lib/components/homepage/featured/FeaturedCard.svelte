<script>
	import { cardContents } from '$lib/portfolioData.js';
	import { Image } from '@unpic/svelte';
</script>

<ul class="cards" id="portfolio">
	{#each cardContents as cardContent (cardContent)}
		<li class="cards__item">
			<a target="_blank" href={cardContent.proj.link}>
				<div class="card shadow hover:shadow-lg h-full bg-slate-50">
					<Image src={cardContent.img} layout="constrained" width={600} height={400} />
					<div class="card__content">
						<div class="card-title uppercase text-[#3d3d3d] mb-3">
							{cardContent.title}
						</div>
						<p class="card__text text-xs">
							{cardContent.paragraph}
						</p>
						<div class="card-actions justify-between items-center gap-0">
							<a target="_blank" href={cardContent.github.link}>
								{@html cardContent.github.logo}
							</a>
							<div class="flex items-center gap-1">
								{#if cardContent.title === 'Portfolio'}
									{@html cardContent.madeWith.svelteLogo}
									{@html cardContent.madeWith.htmlLogo}
									{@html cardContent.madeWith.cssLogo}
									{@html cardContent.madeWith.daisyuiLogo}
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
					</div>
				</div>
			</a>
		</li>
	{/each}
</ul>

<style>
	.cards {
		display: flex;
		flex-wrap: wrap;
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.cards__item {
		display: flex;
		padding: 1rem;
	}
	@media (min-width: 40rem) {
		.cards__item {
			width: 50%;
		}
	}
	@media (min-width: 56rem) {
		.cards__item {
			width: 33.3333%;
		}
	}
	.card {
		border-radius: 0.25rem;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		transition: all 0.3s ease-in-out;
		position: relative;
		top: 0;

		&:hover {
			top: -2px;
		}
	}
	.card__content {
		display: flex;
		flex: 1 1 auto;
		flex-direction: column;
		padding: 1rem;
	}
	.card__text {
		flex: 1 1 auto;
		line-height: 1.5;
		margin-bottom: 1.25rem;
		color: #3d3d3d;
	}
</style>
