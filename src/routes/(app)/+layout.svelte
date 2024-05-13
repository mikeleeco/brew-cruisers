<script>
	import Nav from "$components/ui/Nav.svelte";
	import { links } from "$components/data/navLinks";
	import Icon from "@iconify/svelte";
	import ThemeChanger from "$components/ui/ThemeChanger.svelte";
	import { theme } from "$stores/theme.js";
	import Footer from "$components/ui/Footer.svelte";
</script>

<!-- <Seo title={$page.url.pathname} /> -->
<Nav {links} collapsible={true} showLinksOnDesktop={true}>
	<a
		slot="left-logo"
		class="font-semibold text-neutral hover:text-accent text-xl hover:bg-[--hover] border-2 border-transparent"
		href="/"
	>
		{#if $theme == "dark"}
			<img
				src="/img/Folder/Brew1-05.png"
				alt="logo-dark"
				height="20"
				width="100"
			/>
		{:else}
			<img
				src="/img/Folder/Brew1-04.png"
				alt="logo-light"
				height="20"
				width="100"
			/>
		{/if}
	</a>
	<!-- <div slot="right" class="text-xs"><ThemeChanger /></div> -->
</Nav>
<div class="flex flex-col h-screen">
	<div class="flex-grow ">
		<main class="">
			<slot />
		</main>
	</div>

	<Footer />
</div>
