<script lang="ts">
	import Loader from '$lib/components/loader.svelte';
	import { fade, scale } from 'svelte/transition';
	import { onMount } from 'svelte';
	import {
		tag,
		portfolioCount,
		strapiPorfolios,
		portfolios_all,
		modal,
		three_state, three_page
	} from '$lib/stores/store.js';
	// import axios from 'axios';
	import Box from '$lib/components/realizacjeBox.svelte';

	// Scrollbar
	// import { crossfade, scale, fly } from 'svelte/transition';
	// import { Svrollbar, Svroller } from 'svrollbar';
	//
	// let visiblescroll = true;
	// const [send, receive] = crossfade({
	// 	duration: 300,
	// 	fallback: scale
	// });

	// const opt = { key: 'fab' };

	// const vThumbIn = (node: HTMLElement) => receive(node, opt);
	// const vThumbOut = (node: HTMLElement) => send(node, opt);

	let visible = false;
	let loadingDataState = true;
	let promise: any;

	onMount(() => {
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
		promise = getPortfolioItems();
	});
	

	let tagCurrent: string;

	tag.subscribe((d: any) => {
		tagCurrent = d;
	});
	let setModal = (d: any) => {
		$modal = { ...d };
	};

	let log = (e: any) => {
		console.log(e);
	};
</script>

<svelte:head>
	<title>Portfolio - Zbigniew Adam Karski</title>
	<meta name="description" content="Portfolio" />
</svelte:head>

<!-- <Svroller
	width="100%"
	height="100em"
	hideAfter={300}
	on:show={() => (visible = false)}
	on:hide={() => (visible = true)}
	
> -->
<section class="section realizacje" transition:fade>
	<div class="mx-auto m-8 relative sm:w-auto p-20">
		<div class="flex flex-wrap flex-table">
			{#await promise}
				{#if loadingDataState}
					<Loader />
				{/if}
			{:then item}
				{#if item}
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

<!-- </Svroller> -->

<!-- {#if visible}
	<button class="fab" in:receive={opt} out:send={opt}>+</button>
{/if} -->

<style>
	.box{

		float: left;

	}
	.realizacje {
		--svrollbar-track-width: 2px;

		--svrollbar-thumb-width: 10px;
		--svrollbar-thumb-background: rgba(8, 96, 130, 1);
		--svrollbar-thumb-opacity: 1;
		--svrollbar-thumb-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
	}

	/* .fab {
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
		background-color: rgba(8, 96, 130, 1);
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		bottom: 2.5rem;
		right: 3.5rem;
		margin: 0;
		color: white;
		box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
	} */
</style>
