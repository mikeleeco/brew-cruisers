<script lang="ts">
	import { theme } from '$stores/theme.js';
	import { onMount } from 'svelte';
	
	const themes = [
		{ title: '🌚  Dark', theme: 'dark' },
		{ title: '🌝  Light', theme: 'light' }
	];

	async function setColors(click) {
		let newTheme = click.target.getAttribute('data-set-theme');
		$theme = newTheme;
		if (newTheme) {
			document.documentElement.setAttribute('data-theme', newTheme);
			localStorage.theme = newTheme;
		}
	}


</script>


<div class="m-1 sm:m-2 flex flex-col p-2 gap-2">
	<span class="text-md">Select Theme</span>
	{#key $theme}
		{#each themes as i}
			<button
				class="shadow-md base bg-(--color-base) hover:bg-(--color-info) hover:cursor-pointer {$theme === i.theme ? 'border-2 border-primary' : 'border-2 border-transparent'}"
				data-set-theme={i.theme}
				on:click={setColors}
				disabled={$theme === i.theme}
			>
				{i.title}
			</button>
		{/each}
	{/key}
</div>
