<script>
	import { fade } from 'svelte/transition';
	import LoadingSplashScreen from './../lib/components/LoadingSplashScreen.svelte';
	import Footer from './../lib/components/Footer.svelte';
	import '../app.css';
	import Header from '../lib/components/Header.svelte';
  import { onMount } from 'svelte';

  let isLoading = true;

  onMount(async()=>{
    const timeout = setTimeout(()=>{
      isLoading = false;
    }, 3000);
    return () =>{
       clearTimeout(timeout)
    }
  })
</script>

{#if isLoading}
  <LoadingSplashScreen/>
  {:else}
  <main in:fade={{delay: 550}}>
    <Header />
    <slot />
    <Footer />
  </main>
{/if}

<style>
  :global(html){
    font-family: 'JetBrains Mono', monospace;
  }
	:global(html[data-theme="light"]) {
    transition: linear color 0.3s;
	}
	:global(html[data-theme="dark"]) {
    transition: linear color 0.3s;
	}
</style>
