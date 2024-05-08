<script lang="ts">
	import { page } from "$app/stores";

	export let links;
	export let collapsible = false;
	export let showLinksOnDesktop;
	import ThemeChanger from "./ThemeChanger.svelte";
</script>

<div class="navbar bg-primary h-20">
	<div class="navbar-start">
		<slot name="left" />

		{#if collapsible}
			<div class="dropdown">
				<label
					tabindex="-1"
					for="nav-collapsible"
					class="btn base btn-ghost"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 text-neutral"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						id="nav-collapsible"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h8m-8 6h16"
						/></svg
					>
				</label>
				<ul
					tabindex="-1"
					class=" dropdown-content mt-3 z-[1] p-2 shadow bg-info border-2 border-primary rounded w-48"
				>
					{#if links}
						{#each links as item}
							<a class="" href={item.path}>
								<li
									class="font-semibold text-sm item px-5 py-2 hover:bg-[--hover] hover:border-accent border-2 border-transparent"
								>
									{item.name}
								</li></a
							>
						{/each}
					{/if}
					<br />
					<div class="text-xs flex flex-col justify-center">
						<ThemeChanger />
					</div>
				</ul>
			</div>{/if}

		<!-- <slot name="dropdown" /> -->

		<slot name="left-logo" />
	</div>

	<!--  -->
	<div class="navbar-center hidden h-16 sm:flex">
		<slot name="center" />
		{#if links}
			{#if showLinksOnDesktop}
				<ul class="menu-horizontal">
					{#each links as item}
						<a
							href={item.path}
							class={" text-neutral hover:shadow-sm"}
						>
							<li
								class="item font-semibold border-2 border-transparent p-5 hover:text-accent hover:text-lg"
							>
								{item.name}
							</li></a
						>
					{/each}
				</ul>
			{/if}
		{/if}
	</div>
	<div class="navbar-end">
		<slot name="right" />
	</div>
</div>
