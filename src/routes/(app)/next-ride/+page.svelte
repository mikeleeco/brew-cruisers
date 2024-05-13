<script>
	import ContainerLayout from "$components/ui/ContainerLayout.svelte";
	import Icon from "@iconify/svelte";
	import Seo from "$lib/components/utils/Seo.svelte";
	import Footer from "$components/ui/Footer.svelte";
	import { rides } from "$components/data/rides";
	import { games } from "$components/data/games";
	import RideInfo from "$components/ui/RideInfo.svelte";
	let game = games[0];
	let ride = rides[0];
</script>

<Seo title="Brew Cruisers Next Ride" />

<ContainerLayout>
	<div slot="column">
		<h1 class="pb-5">Next ride</h1>
		<RideInfo {ride} />
		<p class="py-5">
			<span class="text-3xl serif">Details:</span>
			{ride.details}
		</p>

		<p class="pb-5">
			Map: <a href="https://maps.app.goo.gl/MLjQyFxpoP9oG4mw5"
				>Great Roundabout of Walker's Point</a
			>
		</p>
		Find more info at the
		<a href="/faq">FAQ</a>.
		<!-- <p>
			<span class="text-3xl serif">Date:</span>
			{ride.date}
		</p>
	
		<p>
			<span class="text-3xl serif">Date:</span>
			{ride.date}
		</p> -->
	</div>
</ContainerLayout>
