<script>
	import responsive_devices from '$lib/images/responsive_devices.png';
	import Tagsbar from '$lib/components/Tagsbar.svelte';
	import Navigation from './Navigation.svelte';
	import HeaderIcons from "./HeaderIcons.svelte";
	import './css/box_ofer.css';
	import './css/layout.scss';



	let y;
	
	import {tag} from '$lib/stores/store.js'



let tagCurrent;

tag.subscribe((value) => {
  tagCurrent = value;
	});



</script>




<div class="layout-wrapper {y < 50 ? 'xvisible' : 'xhidden'}">
	



	<Navigation  /> 
	
	<HeaderIcons/>

	<section class="startPage">

{tagCurrent}
		
	<div class="headerElements">
	  <div class="pt-24 "></div>

	

	  <img src={responsive_devices} class="responsiveDev" alt=""/> 
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

  <Tagsbar/>

 

</div>


<svelte:window bind:scrollY={y} />




