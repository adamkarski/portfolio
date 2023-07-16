
<script context="module">
    //the session object destructured below comes from the hooks.js file above
    export async function load({ session }) {
        return {
            props: {
                //Add the boolean as a property of the __layout.svelte component
                overrideMobile: session.mobile,
            }
        }
    }
</script>
<script>
  	import {width, mobile} from '$lib/utils/device';
    //receive whether to override and render as mobile
    export let overrideMobile = true;
    //store this in the shared stores located in '$lib/utils/device'
    $mobile = overrideMobile;


	import responsive_devices from '$lib/images/responsive_devices.png';
	import Tagsbar from '$lib/components/Tagsbar.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import HeaderIcons from '$lib/components/HeaderIcons.svelte';
	import './css/box_ofer.css';
	import './css/layout.scss';
	import { page } from '$app/stores';

	let y;

</script>

<div class="layout-wrapper {y < 50 ? 'xvisible' : 'xhidden'}">
	<Navigation />
	
	<HeaderIcons />

	<section class="startPage">
		

		<div class="headerElements">
			<div class="pt-24" />

			<img src={responsive_devices} class="responsiveDev" alt="" />
		</div>

		<!-- {/* <Mouse /> */} -->
	</section>

	<!-- <FrontImages /> -->

	<!-- <RealizacjeComponnent items={items}/> -->

	<section class="content pageContent">
		<div class="container max-w-4xl mx-auto m-8 relative">
			<!-- {$width}, {$mobile} -->

			<slot />
		</div>
	</section>

	{#if $page.url.pathname =="/realizacje" || $page.url.pathname =="/"}
	<Tagsbar />
	{/if}
</div>

<svelte:window bind:scrollY={y} />
