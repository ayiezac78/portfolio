<script>
  import ModeSwitcher from "./ModeSwitcher.svelte";
</script>

<ModeSwitcher/>
<details class="dropdown dropdown-end">
	<summary class="m-1 btn"
		><svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-6 h-6"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
		</svg>
	</summary>
	<ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
		<li><a>Item 1</a></li>
		<li><a>Item 2</a></li>
	</ul>
</details>
