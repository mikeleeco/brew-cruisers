<script>
	export let title = 'Brew Cruisers';
	export let description = 'A Brewers bike ride.';
	export let keywords = 'bicycles, advocacy, health, group rides, community';
	export let image = 'https://www.brewcruisers.netlify.com/img/logo.png';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="twitter:card" content="summary_large_image" />
	<!-- <meta name="twitter:site" content="@" />-->
	<meta name="twitter:creator" content="@mikeleeco" />
	<meta name="twitter:image" content={image} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="title" property="og:title" content={title} />
	<meta name="description" property="og:description" content={description} />
	<meta name="image" property="og:image" content={image} />
	<meta name="keywords" content={keywords} />
	<meta name="topic" content={keywords} />
	<meta name="language" content="EN" />
	<meta name="robots" content="index, follow" />
	<meta name="abstract" content={description} />
	<meta name="summary" content={description} />
	<meta name="author" content="Mike Lee" />
	<meta name="url" content="https://www.brewcruisers.netlify.com" />
</svelte:head>
