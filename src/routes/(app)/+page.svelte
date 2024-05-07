<script>
	import ThemeChanger from '$lib/components/ui/ThemeChanger.svelte';
	import ContainerLayout from '$components/ui/ContainerLayout.svelte';
	import { games } from '$components/data/games';
	import Icon from '@iconify/svelte';
	import Seo from '$lib/components/utils/Seo.svelte';
</script>

<Seo />
<ContainerLayout>
	<div slot="column">
		<h1>Milwaukee Brew Cruisers Bike Ride</h1>
		<h2 class="subtitle pb-5">
			A monthly ride to enjoy live baseball and advocate for bicycle accommodations in Milwaukee and
			the stadium district.
		</h2>
		<p>Visit <a href="/faq">FAQ</a> to learn more.</p>

		<div>
			<h2 class="text-primary font-serif pt-10">Ride Schedule</h2>
			<ul class="">
				{#each games as item}
					<li class={`font-semibold p-2`}>
						<span class="icon flex flex-row gap-2"
							><Icon icon={'mdi:baseball-diamond-outline'} width="30" height="30" />
							<p class="text-lg">
								<span class={`underline decoration-accent`}>{item.name}</span>, {item.date} @ {item.time}
							</p>
						</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</ContainerLayout>
