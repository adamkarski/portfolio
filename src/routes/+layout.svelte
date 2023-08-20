<script context="module">
    export async function load({ session }) {
        return {
            props: {
                overrideMobile: session.mobile,
            }
        }
    }
</script>
<script>
  	// Device type 
	import {width, mobile} from '$lib/utils/device';
    export let overrideMobile = true;
   	$mobile = overrideMobile;

	// Modal
	import Modal from '$lib/components/Modal.svelte';
    import { modal, three_state} from '$lib/stores/store.js';

	// Tree
	import Three from '$lib/components/Three.svelte';

	// Page elements
	import Tagsbar from '$lib/components/Tagsbar.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	
	// Styles
	import '$lib/css/box_ofer.css';
	import '$lib/css/layout.scss';
	
	// App Store 
	import { page } from '$app/stores';

	let y;



</script>
<!-- {$modal.open} -->
	<Modal />

<div class="layout-wrapper {y < 50 ? 'xvisible' : 'xhidden'} ">
	
	
	<Three/>
	
	<Navigation />
	



	
    <button on:click={() => ($modal.open = true)}></button>

	
	<section class="content pageContent">
		<div class="container max-w-4xl mx-auto m-8 relative">
			<!-- {$width}, {$mobile} -->
			<slot></slot>
		</div>
	</section>

	

	{#if $page.url.pathname =="/realizacje" || $page.url.pathname =="/"}
	
	
	<Tagsbar />
	{/if}

	
	
		
</div>

<svelte:window bind:scrollY={y} />
