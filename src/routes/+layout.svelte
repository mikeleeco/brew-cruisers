<script>
	import "../output.css";
	// import { themeChange } from 'theme-change';
	import { onMount } from "svelte";
	// import { theme } from '$stores/theme.js';
	onMount(() => {
		// themeChange(false);
	});
</script>

<div class="bg-info text-neutral font-sans">
	<slot />
</div>

