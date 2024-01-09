<script>
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	import Seo from '../Seo.svelte';
	import { browser } from '$app/environment';
	import { afterUpdate } from 'svelte';
	import { updateAfter, onBrowser } from '../darkmode.js';

	afterUpdate(() => {
		updateAfter();
	});

	if (browser) {
		onBrowser();
	}
</script>

<div
	class="loading-screen absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2"
	transition:fade
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		data-slot="icon"
		class="w-24 h-24"
		width="24"
		height="24"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
			class="svg-elem-1"
		></path>
	</svg>
</div>

<Seo
	title="Ayie"
	description="Showcasing my portfolio, personality, career, and also daily life journal"
	keywords="portfolio, ayie portfolio, life journal, career "
	canonical={$page.url.href}
/>

<style>
	@-webkit-keyframes animate-svg-stroke-1 {
		0% {
			stroke-dashoffset: 91.80176544189453px;
			stroke-dasharray: 91.80176544189453px;
		}
		100% {
			stroke-dashoffset: 0;
			stroke-dasharray: 91.80176544189453px;
		}
	}
	@keyframes animate-svg-stroke-1 {
		0% {
			stroke-dashoffset: 91.80176544189453px;
			stroke-dasharray: 91.80176544189453px;
		}
		100% {
			stroke-dashoffset: 0;
			stroke-dasharray: 91.80176544189453px;
		}
	}
	.svg-elem-1 {
		-webkit-animation: animate-svg-stroke-1 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1s both;
		animation: animate-svg-stroke-1 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1s both;
	}
</style>
