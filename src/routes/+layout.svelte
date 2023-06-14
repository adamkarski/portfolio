<script>
	import responsive_devices from '$lib/images/responsive_devices.png';
	import Navigation from './Navigation.svelte';
	import Header from './Header.svelte';
	// import './styles.css';
	import './css/box_ofer.css';
	import './css/layout.scss';
	let y;
</script>




<div class="layout-wrapper {y < 50 ? 'xvisible' : 'xhidden'}">
	
	<Navigation  /> 
	

	<section class="startPage">

	<div class="headerElements">
	  <div class="pt-24 "></div>

	  <!-- <Logotypes></Logotypes> -->

	  <img src={responsive_devices} class="responsiveDev" alt="responsive_devices"/> 
	</div> 



	  <!-- {/* <Mouse /> */} -->
	</section>



	<!-- <FrontImages /> -->


	<!-- <RealizacjeComponnent items={items}/> -->

	<section class="content">
	  <div class="container max-w-4xl mx-auto m-8 relative">
		<slot />
	</div>
	</section>

  

</div>


<svelte:window bind:scrollY={y} />




