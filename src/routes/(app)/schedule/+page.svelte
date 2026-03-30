<script>
	import { games } from '$components/data/games';
	import ColumnLayout from '$components/ui/ColumnLayout.svelte';
	import Icon from '@iconify/svelte';
	import Seo from '$lib/components/utils/Seo.svelte';
</script>

<Seo title="Brew Cruisers Schedule"/>
<ColumnLayout>
		<h1>Schedule</h1>
		<ul class="pt-5">
			{#each games as item}
				<li class={`font-semibold py-2`}>
					<span class="icon flex flex-row gap-2"
						><Icon icon={'mdi:baseball-diamond-outline'} width="30" height="30" />
                        <p class="text-lg"><span class={`underline decoration-accent`}>{item.name}</span>, {item.date} @ {item.time}</p>
                    </span>

				</li>
			{/each}
		</ul>
</ColumnLayout>
