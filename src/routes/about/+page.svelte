<script>
	import { careerData } from '$lib/careerData.js';
	import { Image } from '@unpic/svelte';
	import { page } from '$app/stores';
	import Seo from '$lib/Seo.svelte';
	import profileImg from '$lib/images/me.webp';
	import resume from '$lib/pdf/Maniago_Resume.pdf';
	import Icon from '@iconify/svelte';
	import Lottie from 'lottie-web';
	import { onMount } from 'svelte';
	import animationData from '../../lib/data/stacks.json';

	let animationContainer;

	onMount(() => {
		Lottie.loadAnimation({
			container: animationContainer,
			animationData,
			renderer: 'svg'
		});
	});
</script>

<section class="mt-16">
	<div class="hero py-5">
		<div class="hero-content text-center">
			<div class="max-w-md">
				<div class="avatar mb-5">
					<div class="w-32 rounded-full outline outline-[#fc5445]">
						<Image
							src={profileImg}
							layout="constrained"
							width={200}
							height={200}
							class="grayscale hover:grayscale-0 transition-all ease-in-out"
						/>
					</div>
				</div>
				<h1 class="text-5xl font-bold">Hi, I'm Ayie</h1>
				<p class="py-6 text-balance">A Front-end Web Developer based in Philippines.</p>
				<div class="flex justify-center gap-3">
					<a href={resume} class="btn button btn-sm rounded-full" target="_blank">Download CV</a>
					<a href="#getInTouch" class="btn button-cta btn-sm rounded-full">Get in Touch</a>
				</div>
			</div>
		</div>
	</div>
	<!-- About Me -->
	<section class="bg-[#53514a]">
		<div class="px-14 py-5 text-center">
			<span class=" text-slate-100">Description</span>
			<h2 class="font-bold text-2xl text-slate-100 mb-5">ABOUT ME</h2>
			<p class="text-slate-100 text-sm font-light leading-relaxed mb-3 text-start">
				It's Ariel Maniago, a passionate learner, a creative developer, and designer. I embarked on
				my journey as a Front-end Web Developer last year of 2023, in the vibrant city of Cebu,
				Philippines. As a started out my journey i feel enthusiast and excited by crafting
				captivating and user-friendly digital experiences with the help of my colleagues.
			</p>
		</div>
	</section>
	<section class="my-5">
		<div class="px-14 py-5 text-center">
			<span class="font-semibold">Career</span>
			<h2 class="font-bold text-2xl mb-5">EXPERIENCE</h2>
			<div class="flex justify-between lg:flex-row flex-col gap-5">
				{#each careerData as career (career)}
					<div class="py-3">
						<div class="flex justify-between items-center">
							<h3 class="text-lg font-semibold">{career.jobTitle}</h3>
							<small class="badge text-xs bg-[#53514a] border-0 text-slate-100 font-thin"
								>{career.jobType}</small
							>
						</div>
						<div class="flex lg:flex-row md:flex-row flex-col gap-x-5 py-2">
							<div class="flex items-center gap-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-4 h-4"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
									/>
								</svg>
								<small>{career.company}</small>
							</div>
							<div class="flex items-center gap-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-4 h-4"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
									/>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
									/>
								</svg>
								<small>{career.locatedAt}</small>
							</div>
						</div>
						<div class="flex gap-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-4 h-4"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
								/>
							</svg>
							<small>{career.year}</small>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>
	<section class="my-5">
		<div class="px-14 text-center">
			<span class="font-semibold">Skills</span>
			<h2 class="font-bold text-2xl mb-5 uppercase">Tech Stack</h2>
		</div>
		<div class="flex items-center justify-center lg:flex-row flex-col-reverse">
			<div class="flex justify-center">
				<div class="grid lg:grid-cols-8 lg:grid-rows-3 grid-cols-5 gap-x-5 gap-y-3">
					<Icon icon="akar-icons:html-fill" width="40" height="40" />
					<Icon icon="akar-icons:css-fill" width="40" height="40" />
					<Icon icon="fluent:javascript-16-filled" width="40" height="40" />
					<Icon icon="mdi:tailwind" width="40" height="40" />
					<Icon icon="simple-icons:bootstrap" width="40" height="40" />
					<Icon icon="devicon-plain:jquery-wordmark" width="40" height="40" />
					<Icon icon="mdi:react" width="40" height="40" />
					<Icon icon="ri:svelte-fill" width="40" height="40" />
					<Icon icon="akar-icons:php-fill" width="40" height="40" />
					<Icon icon="carbon:json" width="40" height="40" />
					<Icon icon="mdi:git" width="40" height="40" />
					<Icon icon="mdi:github" width="40" height="40" />
					<Icon icon="solar:figma-broken" width="40" height="40" />
					<Icon icon="simple-icons:filezilla" width="40" height="40" />
					<Icon icon="tabler:file-type-xml" width="40" height="40" />
					<Icon icon="akar-icons:vscode-fill" width="40" height="40" />
					<Icon icon="mdi:trello" width="40" height="40" />
				</div>
			</div>
			<!-- <div class=" w-11/12">
				<div class="h-[33vh]" bind:this={animationContainer}></div>
			</div> -->
		</div>
	</section>

	<!-- Get in Touch -->
	<section id="getInTouch" class="bg-[#53514a] py-5">
		<div class="hero text-base-100">
			<div class="hero-content text-center">
				<div class="max-w-md">
					<span class="text-base-100">Curious?</span>
					<h2 class="font-bold text-2xl mb-5 text-base-100">Get in Touch</h2>
					<p class="py-6 text-sm">
						If you have any suggestion, questions or just want to say hello, please don't hesitate
						to reach out. I will make an effort to respond as soon as possible.
					</p>
					<a
						href="mailto:admaniago01@gmail.com"
						class="btn button-cta btn-sm rounded-full hover:!text-base-100 sendmessagebtn"
						>SEND A MESSAGE
					</a>
				</div>
			</div>
		</div>
	</section>
</section>
<Seo
	title="About Me"
	description="it tells about my background, hobbies and personalities"
	keywords="about, about ayie, hobbies, personalities, background"
	canonical={$page.url.href}
/>

<style>
	.sendmessagebtn:hover {
		outline: solid 1px #fff !important;
	}
</style>
