<script lang="ts">
	import Tagsbar from '$lib/components/tagsbar.svelte';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import {
		three_state,
		three_page,
		portfolios_all
	} from '$lib/stores/store.js';
	import PortfolioGrid from '$lib/components/PortfolioGrid.svelte';
	
	// Pobieramy dane z SSR
	export let data;
	
	// Ustawiamy dane w store, aby były dostępne dla innych komponentów
	$: if (data && data.portfolios) {
		portfolios_all.set(data.portfolios);
	}

	onMount(() => {
		// Ustawienia dla strony realizacji
		$three_state = 'back';
		$three_page = 'realizacje';
	});
</script>

<svelte:head>
	<title>Portfolio - Zbigniew Adam Karski</title>
	<meta name="description" content="Portfolio projektów webowych, graficznych i identyfikacji wizualnej - Zbigniew Adam Karski" />
</svelte:head>

<section class="section realizacje" transition:fade>
	<div class="mx-auto m-8 relative sm:w-auto p-20">
		<Tagsbar />
		<PortfolioGrid showTagsBar={false} customItems={data.portfolios} />
	</div>
</section>

<style>
	.box {
		float: left;
	}
	.realizacje {
		--svrollbar-track-width: 2px;

		--svrollbar-thumb-width: 10px;
		--svrollbar-thumb-background: rgba(8, 96, 130, 1);
		--svrollbar-thumb-opacity: 1;
		--svrollbar-thumb-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
	}

</style>
