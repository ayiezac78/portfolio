<script>
	import { Image } from '@unpic/svelte';
	import { page } from '$app/stores';
	import Seo from '$lib/Seo.svelte';
	import profileImg from '$lib/images/me.webp';
	import resume from '$lib/pdf/Maniago_Resume.pdf';
</script>

<div class="grid place-content-center min-h-screen">
	<div class="hero">
		<div class="hero-content text-center">
			<div class="max-w-md">
				<div class="flex justify-center mb-5">
					<Image
						src={profileImg}
						layout="constrained"
						width={200}
						height={200}
						class="rounded-full grayscale"
					/>
				</div>
				<h1 class="text-5xl font-bold">Hi, I'm Ayie</h1>
				<p class="py-6 text-balance">A Front-end Web Developer based in Philippines.</p>
				<div class="flex justify-center gap-3">
					<a href={`javascript:void(0)`} class="btn button-cta btn-sm rounded-full">Get in Touch</a>
					<a href={resume} class="btn button btn-sm rounded-full" target="_blank">Download CV</a>
				</div>
			</div>
		</div>
	</div>
</div>
<Seo
	title="About Me"
	description="it tells about my background, hobbies and personalities"
	keywords="about, about ayie, hobbies, personalities, background"
	canonical={$page.url.href}
/>
