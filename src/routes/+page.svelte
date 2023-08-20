<script>
	import Loader from '$lib/components/loader.svelte';
	import { fade } from 'svelte/transition';

	import {
		tag,
		portfolioCount,
		strapiPorfolios,
		portfolios_all,
		modal, three_page, three_state
	} from '$lib/stores/store.js';
	import Box from '$lib/components/realizacjeBox.svelte';

	let visible = false;
	let loadingDataState = true;

		// Get all items of Portfolio
		$three_state='back';
		$three_page = 'realizacje';


	async function getPortfolioItems() {
		let response = await fetch(strapiPorfolios);
		let portfolios = await response.json();
		portfolioCount.set(portfolios.length);
		portfolios_all.set(portfolios);

		return portfolios;
	}
	let promise = getPortfolioItems();

	let tagCurrent;

	tag.subscribe((d) => {
		tagCurrent = d;
	});
	let setModal = (d) => {
		$modal = { ...d };
	};
</script>

<svelte:head>
	<title>Realizacje - Zbigniew Adam Karski</title>
	<meta name="description" content="Portfolio" />
</svelte:head>

<section class="section realizacje" transition:fade>
	<div class="mx-auto m-8 relative sm:w-auto p-20">
		<div class="flex flex-wrap flex-table">
			{#await promise}
				{#if loadingDataState}
					<Loader />
				{/if}
			{:then item}
				{#each item as item}
					{#if tagCurrent == 'all'}
						<Box {item} />
					{/if}

					{#if tagCurrent !== 'all'}
						{#each item.tags as ls}
							{#if ls.tag_name == tagCurrent}
								<Box {item} />
							{/if}
						{/each}
					{/if}
				{/each}
			{:catch error}
				{setModal({
					open: true,
					title: 'Wystąpił błąd',
					message: error,
					button: 'OK',
					action: 'reload'
				})}
			{/await}
		</div>
	</div>
</section>
