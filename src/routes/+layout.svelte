<script>
	import "../output.css";
	// import { themeChange } from 'theme-change';
	import { onMount } from "svelte";
	// import { theme } from '$stores/theme.js';
	import Footer from "$components/ui/Footer.svelte";
	onMount(() => {
		// themeChange(false);
	});
</script>

<div class="bg-info text-neutral font-sans">
	<slot />
</div>

