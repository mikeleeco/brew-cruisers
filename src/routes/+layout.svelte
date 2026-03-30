<script>
	  let { children } = $props();

    import '@fontsource-variable/saira/wght.css';
    import '@fontsource-variable/hanuman/wght.css';
	  import "../output.css";
</script>

<style>

  :global(body) {
    font-family: 'Hanuman Variable', serif;
    font-weight: 400;
    font-size: medium;
  }

  :global(h1, h2, h3, h4, h5, h6) {
    font-family: 'Saira Variable', sans-serif;
    font-weight: 600;
  }
</style>

  <div class="text-neutral bg-info font-serif">
    {@render children?.()}
  </div>