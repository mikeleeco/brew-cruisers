<script>
	// export let image;
</script>

<div class="h-screen ">
	<div class="flex w-full justify-center sm:px-20">
		<slot name="column" />
	</div>
	<div class="w-full sm:p-5">
		<slot name="main-panel" />
	</div>
</div>
