<script lang="ts">
	import { theme } from '$stores/theme.js';
	import { browser } from '$app/environment';

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
		console.log('theme:', $theme);
	}

	
</script>

{#key $theme}
	{#each themes as i}
		<button
			class="p-5 m-2 base  {$theme === i.theme ? 'border-2 border-primary cursor-pointer' : ''}"
			data-set-theme={i.theme}
			on:click={setColors}
			disabled={$theme === i.theme}
		>
			{i.title}
		</button>
	{/each}
{/key}
