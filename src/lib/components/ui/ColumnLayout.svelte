<script>
	let { children } = $props();
	// export let image;
</script>

<div class=" grid grid-cols-1 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-4  p-5 text-xl">
	<div class="col-span-2 col-start-1 place-self-center   md:col-span-4 md:col-start-3  sm:col-span-4 sm:col-start-2 lg:col-span-6 lg:col-start-4 xl:col-span-4 xl:col-start-5">
		{@render children?.()}
	</div>
</div>
