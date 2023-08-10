<script>
	import Loader from '$lib/components/loader.svelte';
	import { fade } from 'svelte/transition';
	import {
		tag,
		portfolioCount,
		strapiPorfolios,
		portfolios_all,
		modal
	} from '$lib/stores/store.js';
	import Box from '$lib/components/realizacjeBox.svelte';

	
	

	let visible = false;
	let loadingDataState = true;

	async function getPortfolioItems() {
		await fetch(strapiPorfolios)
			.then((response) => {
				if (response.status >= 400 && response.status < 600) {
					
					console.log(response)
				}
				return response;
			})
			.then((returned) => {
				
				let portfolios = returned.json();
				portfolioCount.set(portfolios.length);
				portfolios_all.set(portfolios);

				return portfolios;
			})
			.catch((error) => {
				modal.set({open: true, title: 'Wystąpił błąd', message: error, button: 'Otwórz ponownie', action:'reload'});
				console.log(error);
				
			});

		
		

	

		
	}
	let promise = getPortfolioItems();

	let tagCurrent;

	tag.subscribe((value) => {
		tagCurrent = value;
	});
</script>

<svelte:head>
	<title>Portfolio - Zbigniew Adam Karski</title>
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
				<p style="color: red">{error.message}</p>
			{/await}
		</div>
	</div>
</section>
