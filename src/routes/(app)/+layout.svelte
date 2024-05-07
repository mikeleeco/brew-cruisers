<script>
	import Nav from '$components/ui/Nav.svelte';
	import { links } from '$components/data/navLinks';
	import Icon from '@iconify/svelte';
import ThemeChanger from '$components/ui/ThemeChanger.svelte';
</script>

<!-- <Seo title={$page.url.pathname} /> -->
<Nav {links} collapsible={true} showLinksOnDesktop={true}>
	<a
		slot="left-logo"
		class="sm:flex hidden font-semibold text-neutral hover:text-accent text-xl hover:bg-[--hover] border-2 border-transparent"
		href="/"><Icon icon="game-icons:baseball-glove" color="text-neutral hover:text-accent " width="30" height="30" />
		</a
	>
	<div slot="right" class="text-xs">		<ThemeChanger />
	</div>
</Nav>

<main class="h-full p-5">
	<slot />
</main>
