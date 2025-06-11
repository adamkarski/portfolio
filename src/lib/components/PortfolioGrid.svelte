<script lang="ts">
	import Loader from '$lib/components/loader.svelte';
	import { fade } from 'svelte/transition';
	import { onMount, afterUpdate } from 'svelte';
	import {
		tag,
		portfolioCount,
		strapiPorfolios, // URL do pobierania wszystkich portfolio
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

	let loadingDataState = true;
	let itemsToRender: any[] = []; // Elementy do wyświetlenia
	let tagCurrent: string = "all"; // Domyślnie ustawiamy na "all"
	let previousCustomItems = null; // Do śledzenia zmian w customItems

	// Jeśli nie wymuszamy tagu "all", subskrybujemy zmiany tagu
	if (!forceAllTag) {
		tag.subscribe((d: any) => {
			tagCurrent = d;
		});
	}

	let setModal = (d: any) => {
		$modal = { ...d };
	};

	// Funkcja do pobierania danych projektów, jeśli nie zostały dostarczone
	async function getPortfolioItems() {
		loadingDataState = true;
		// Jeśli customItems są dostępne, nie pobieraj ponownie.
		// Ta funkcja powinna być wywoływana tylko, gdy customItems nie ma.
		// Jednak obecna logika w onMount i $: refreshData() może to komplikować.
		// Najlepiej, aby ta funkcja była wywoływana tylko jako ostateczność.
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

			// Ustawiamy licznik, ale NIE nadpisujemy globalnego $portfolios_all
			// Globalny $portfolios_all powinien być zarządzany przez +layout.js
			portfolioCount.set(filteredData.length);
			// portfolios_all.set(filteredData); // USUWAMY - niech layout zarządza globalnym stanem
			
			loadingDataState = false;
			return filteredData;
		} catch (error) {
			console.error('Error fetching portfolio items:', error);
			loadingDataState = false;
			return [];
		}
	}

	async function loadDisplayItems() {
		loadingDataState = true;
		let sourceItems = [];

		if (customItems && customItems.length > 0) {
			sourceItems = customItems;
		} else if ($portfolios_all && $portfolios_all.length > 0 && !customItems) {
			// Jeśli nie ma customItems, ale są dane w globalnym store, użyj ich
			sourceItems = $portfolios_all;
		} else {
			// Ostateczność: pobierz dane, jeśli nic innego nie jest dostępne
			// To może się zdarzyć, jeśli PortfolioGrid jest używany na stronie bez layoutu ładującego $portfolios_all
			sourceItems = await getPortfolioItems();
		}

		// Filtrowanie i limitowanie na podstawie sourceItems
		let filteredData = sourceItems;
		if (excludeCurrentSlug) {
			filteredData = sourceItems.filter(item => (item.slug || item.attributes?.slug) !== excludeCurrentSlug);
		}

		if (limit > 0 && filteredData.length > limit) {
			itemsToRender = filteredData.slice(0, limit);
		} else {
			itemsToRender = filteredData;
		}
		
		portfolioCount.set(itemsToRender.length); // Ustawiamy licznik na podstawie faktycznie renderowanych elementów
		loadingDataState = false;
	}

	// Reaguj na zmiany w `customItems` lub `excludeCurrentSlug` lub `$portfolios_all`
	$: if (customItems !== previousCustomItems || excludeCurrentSlug || ($portfolios_all && !customItems)) {
		previousCustomItems = customItems;
		loadDisplayItems();
	} 

	onMount(() => {
		loadDisplayItems(); // Załaduj elementy przy pierwszym montowaniu
	});
</script>

<section class="section portfolio-grid" transition:fade>
	{#if title}
		<h2 class="portfolio-grid-title">{title}</h2>
	{/if}
	<div class="mx-auto relative sm:w-auto p-4">
		<b class="flex flex-wrap flex-table">
			{#if loadingDataState}
				<Loader />
			{:else if itemsToRender && Array.isArray(itemsToRender) && itemsToRender.length > 0}
				{#each itemsToRender as item (item.id || item.slug)} 
					<!-- Używamy item.id lub item.slug jako klucza -->
					<!-- Upewnij się, że `item` ma strukturę oczekiwaną przez `Box` -->
					<!-- Jeśli `item` to { id, attributes: {...} }, to Box musi być dostosowany lub mapuj `item` -->
					<!-- Zakładając, że `item` ma właściwości na pierwszym poziomie (np. po mapowaniu w +page.js) -->
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
			{:else if !loadingDataState && itemsToRender && itemsToRender.length === 0}
				<p>Brak projektów do wyświetlenia.</p>
			{/if}
			<!-- Można dodać obsługę błędów, jeśli getPortfolioItems() może rzucić błąd -->
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
		
	}
</style>