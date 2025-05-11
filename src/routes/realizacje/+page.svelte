<script lang="ts">
	import Tagsbar from '$lib/components/tagsbar.svelte';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import {
		three_state,
		three_page
	} from '$lib/stores/store.js';
	import PortfolioGrid from '$lib/components/PortfolioGrid.svelte';

	onMount(() => {
		// Ustawienia dla strony realizacji
		$three_state = 'back';
		$three_page = 'realizacje';
	});



</script>

<svelte:head>
	<title>Portfolio - Zbigniew Adam Karski</title>
	<meta name="description" content="Portfolio" />
</svelte:head>




<section class="section realizacje" transition:fade>
	<div class="mx-auto m-8 relative sm:w-auto p-20">
		<Tagsbar />
		<PortfolioGrid showTagsBar={false} />
	

	
	
	
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
