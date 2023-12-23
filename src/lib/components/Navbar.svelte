<script>
	import ModeSwitcher from './ModeSwitcher.svelte';
</script>

<nav>
  <div>
    <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    data-slot="icon"
    class="w-10 h-10"
    width="10"
    height="10"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
      class="svg-elem-1"
    ></path>
  </svg>
  <span class="text-lg">yie</span>
  </div>
	<div>
		<a href="/">Home</a>
		<a href="/portfolio">Portfolio</a>
		<a href="/career">Career</a>
		<a href="/journal">Journal</a>
	</div>
	<div>
		<a href='/about'>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
				/>
			</svg>
		</a>
		<ModeSwitcher />
	</div>
</nav>
