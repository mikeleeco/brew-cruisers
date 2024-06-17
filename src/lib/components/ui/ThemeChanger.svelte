<script lang="ts">
	import { theme } from '$stores/theme.js';

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

{#key $theme}
	{#each themes as i}
		<button
			class="m-1 sm:m-2 shadow-md base  {$theme === i.theme ? 'border-2 border-primary cursor-pointer' : 'border-2 border-transparent'}"
			data-set-theme={i.theme}
			on:click={setColors}
			disabled={$theme === i.theme}
		>
			{i.title}
		</button>
	{/each}
{/key}
