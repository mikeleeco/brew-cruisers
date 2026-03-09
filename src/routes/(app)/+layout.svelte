<script>
	import Nav from "$components/ui/Nav.svelte";
	import { links } from "$components/data/navLinks";
	import { theme } from "$stores/theme.js";
	import Footer from "$components/ui/Footer.svelte";
	</script>

<!-- <Seo title={$page.url.pathname} /> -->
<!-- <Nav links={null} collapsible={false} showLinksOnDesktop={true}> -->
<Nav {links} collapsible={true} showLinksOnDesktop={true}>
<a
		slot="left-logo"
		data-sveltekit-preload-data="off"
		class="font-semibold text-neutral hover:text-accent text-xl hover:bg-[--hover] border-2 border-transparent w-25"
		href="/"
	>
			 
	
		{#if $theme == "dark" || $theme === 'default'}
			<img
				src="/img/Folder/Brew1-05-small.webp?enhanced"
				alt="logo-dark"
			/>
		{:else}
			<img
				src="/img/Folder/Brew1-04-small.webp?enhanced"
				alt="logo-light"

			/>
		{/if}
	</a>
	<!-- <div slot="right" class="text-xs"><ThemeChanger /></div> -->
</Nav>
<div class="flex min-h-screen flex-col">
	<div class="flex-grow ">
		<main class="">
			<slot />
		</main>
	</div>

	<Footer />
</div>
