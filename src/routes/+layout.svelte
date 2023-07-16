<script>
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
			<slot />
		</div>
	</section>

	{#if $page.url.pathname =="/realizacje" || $page.url.pathname =="/"}
	<Tagsbar />
	{/if}
</div>

<svelte:window bind:scrollY={y} />
