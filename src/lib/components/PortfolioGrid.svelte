<script lang="ts">
	import Loader from '$lib/components/loader.svelte';
	import { fade } from 'svelte/transition';
	import { onMount, afterUpdate } from 'svelte';
	import {
		tag,
		portfolioCount,
		strapiPorfolios,
		portfolios_all,
		modal
	} from '$lib/stores/store.js';
	import Box from '$lib/components/realizacjeBox.svelte';

	// Opcjonalne parametry, które można przekazać do komponentu
	export let showTagsBar = false; // Czy pokazywać pasek tagów
	export let customItems = null; // Możliwość przekazania własnych elementów zamiast pobierania ich z API
	export let excludeCurrentSlug = null; // Możliwość wykluczenia bieżącego elementu (np. na stronie szczegółów)
	export let limit = 0; // Limit elementów do wyświetlenia (0 = bez limitu)
	export let title = ""; // Opcjonalny tytuł sekcji
	export let forceAllTag = false; // Wymuszenie wyświetlania wszystkich projektów (tag "all")

	let visible = false;
	let loadingDataState = true;
	let promise: any;
	let tagCurrent: string = "all"; // Domyślnie ustawiamy na "all"
	let previousSlug = null;

	// Jeśli nie wymuszamy tagu "all", subskrybujemy zmiany tagu
	if (!forceAllTag) {
		tag.subscribe((d: any) => {
			tagCurrent = d;
		});
	}

	let setModal = (d: any) => {
		$modal = { ...d };
	};

	// Funkcja do pobierania danych projektów
	async function getPortfolioItems() {
		loadingDataState = true;
		
		try {
			let response = await fetch(strapiPorfolios);
			let portfolios = await response.json();

			// Filtrowanie elementów, jeśli podano slug do wykluczenia
			let filteredData = portfolios.data;
			if (excludeCurrentSlug) {
				filteredData = portfolios.data.filter(item => item.slug !== excludeCurrentSlug);
			}

			// Zastosowanie limitu, jeśli podano
			if (limit > 0 && filteredData.length > limit) {
				filteredData = filteredData.slice(0, limit);
			}

			portfolioCount.set(filteredData.length);
			portfolios_all.set(filteredData);
			
			loadingDataState = false;
			return filteredData;
		} catch (error) {
			console.error('Error fetching portfolio items:', error);
			loadingDataState = false;
			return [];
		}
	}

	// Funkcja do odświeżania danych
	function refreshData() {
		if (!customItems) {
			promise = getPortfolioItems();
		} else {
			// Jeśli przekazano własne elementy, użyj ich
			promise = Promise.resolve(customItems);
		}
	}

	// Reaguj na zmiany w excludeCurrentSlug
	$: if (excludeCurrentSlug !== previousSlug) {
		previousSlug = excludeCurrentSlug;
		refreshData();
	}

	onMount(() => {
		refreshData();
	});
</script>

<section class="section portfolio-grid" transition:fade>
	{#if title}
		<h2 class="portfolio-grid-title">{title}</h2>
	{/if}
	
	<div class="mx-auto relative sm:w-auto p-4">
		<b class="flex flex-wrap flex-table">
			{#await promise}
				{#if loadingDataState}
					<Loader />
				{/if}
			{:then items}
				{#if items && Array.isArray(items)}
					{#each items as item}
						{#if forceAllTag || tagCurrent == 'all'}
							<Box {item} />
						{/if}
						{#if !forceAllTag && tagCurrent !== 'all' && item.tags}
							{#each item.tags as tag}
								{#if tag.tag_name == tagCurrent}
									<Box {item} />
								{/if}
							{/each}
						{/if}
					{/each}
				{/if}
			{:catch error}
				{setModal({
					open: true,
					title: 'Wystąpił błąd',
					message: error,
					button: 'OK',
					action: 'reload'
				})}
			{/await}
		</b>
	</div>
</section>

<style>
	.portfolio-grid {
		margin-top: 2rem;
		margin-bottom: 2rem;
	}
	
	.portfolio-grid-title {
		font-size: 1.5rem;
		font-weight: 600;
		margin-bottom: 1rem;
		text-align: left;
	}
	
	.flex-table {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		gap: 1rem;
	}
</style>