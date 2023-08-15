
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
    import { modal } from '$lib/stores/store.js';


	// Page elements
	import responsive_devices from '$lib/images/responsive_devices.png';
	import Tagsbar from '$lib/components/Tagsbar.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import HeaderIcons from '$lib/components/HeaderIcons.svelte';
	
	// Styles
	import '$lib/css/box_ofer.css';
	import '$lib/css/layout.scss';
	
	// App Store 
	import { page } from '$app/stores';

	let y;

</script>
<!-- {$modal.open} -->
	<Modal />

<div class="layout-wrapper {y < 50 ? 'xvisible' : 'xhidden'}">
	<Navigation />
	
	<HeaderIcons />


	
    <button on:click={() => ($modal.open = true)}></button>

	<section class="startPage">
		

		<div class="headerElements">
			<div class="pt-24" />

			<img src={responsive_devices} class="responsiveDev" alt="" />
		</div>

		<!-- {/* <Mouse /> */} -->
	</section>



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
