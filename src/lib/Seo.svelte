<script>
  export let title;
  export let description;
  export let keywords;
  export let canonical;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content="{description}" />
  <meta name="keywords" content="{keywords}" />
  <link rel="canonical" href="{canonical}" />
</svelte:head>