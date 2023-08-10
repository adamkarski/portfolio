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
	// import axios from 'axios';
	import Box from '$lib/components/realizacjeBox.svelte';

	
	

	let visible = false;
	let loadingDataState = true;



	async function getPortfolioItems() {
		const response = await fetch(strapiPorfolios);

		if (response.ok) {

				
				let portfolios = response.json();
				portfolioCount.set(portfolios.length);
				//portfolios_all.set(portfolios);

  		return portfolios
			
		} else {


			modal.set({open: true, title: 'Wystąpił błąd', message: error, button: 'Otwórz ponownie', action:'reload'});
			console.log(response);
			// throw new Error(users);
		}
	}

	
	let promise = getPortfolioItems();

	let tagCurrent;

	tag.subscribe((d) => {
		tagCurrent = d;
	});
	let setModal =(d)=>{
		$modal={...d}
	}

let log= (e)=> {

console.log(e);


}

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
				{#if item}
					
			
				<!-- {log(item)} -->
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
				{/if}
			{:catch error}
			{setModal({ open: true, title: 'Wystąpił błąd', message: error, button: 'OK' , action: 'reload'})}

			{/await}
		</div>
	</div>
</section>
