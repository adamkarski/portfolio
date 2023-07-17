
<script>
// import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	import Loader from '$lib/components/loader.svelte';
	import {strapiPorfolios} from '$lib/stores/store.js'

	import gridMenu from '$lib/images/gridMenu.svg';
	import moreinfo from '$lib/images/moreinfo.svg';
	let SingleItem;
	let data;
	let src;

	function preload(src) {
		return new Promise(function (resolve) {
			let img = new Image();
			img.onload = resolve;
			img.src = src;
		});
	}


	async function getPortfolioItems() {
		let response = await fetch(strapiPorfolios);
		let portfolios = await response.json();
		let len = portfolios.length

		
		data = portfolios[Math.floor(Math.random(len) * 10)];
	
		return data;
	}
	// data = getPortfolioItems();

	// onMount(async () => {
	// });
	
</script>




{#await data}	


<Loader/>

{:then item}



<section class="section kontakt" transition:fade>


	<div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5 menuSingleItem" style="display: none;">
		<div class="item">
			<a href="/realizacje" >
			<img alt="Wszystkie realizacje" src={gridMenu} class="" />
			</a>

		</div>
		 
		 <div class="item">
			<a href="/realizacje/{data.slug}" >
				<img alt="Wszystkie realizacje" src={moreinfo} class="" />
				</a>

		 </div>
</div>

	<div class="mx-auto m-8 relative sm:w-auto boxSingleItemS">

		


		<div>

			<div>{data.title}</div>

			<div  style="background-image: url('https://strapi.adamkarski.art/{data.miniatura.url}');"
				class=" animateBG w-full p-8 my-4 md:px-10 lg:w-9/12 lg:pl-20 lg:pr-20 mr-auto rounded-2xl shadow-2xl boxSingleItem"
			>

			<a href="/realizacje/{data.slug}" class="dumny_href"> </a>
				<!-- <div class="flex">
				<h1 class="text-gray-600 text-lg italic">
					Podoba się?<br /><span class="text-sm">Zostaw wiadomość!</span>
				</h1>
			</div> -->
			
			
			 

		

	
	



		
		
			<!-- <div style="display: none;">{ "//strapi.adamkarski.art/"}{data.miniatura.url}</div> -->
		
			
				<!-- {#await preload("https://strapi.adamkarski.art/"+data.miniatura.url) then _} -->
			<!-- <a class="" href="/realizacje/{data.slug}"> -->
			<!-- <img  src= "https://strapi.adamkarsk.art/{data.miniatura.url}" in:fly alt="{data.title}"> -->
		<!-- </a> -->
		  <!-- {/await}	 -->
			<!-- {#await preload(src) then _}
			<a class="" href="/realizacje/{item.slug}">
			<img {src} in:fly alt="{item.title}">
		</a>
		  {/await}	
			
		  {/each} -->
			
				
					</div></div>
				
					
				
				
				</div></section>

  {/await}
<style>
	
.dumny_href{
	width: 100%;
    height: 100%;
    position: absolute;
    left: 0px;
    top: 0;
}

	@keyframes animatedBackground {
  0% {
	background-position: 100,0;
    background-size: 100%;
  }
  40% {
	background-position: 0,-10;
    background-size: 120%;
  }
  80% {
	background-position: -5,0;
    background-size: 110%;
  }
  100% {
	background-position: 0,0;
    background-size: 100%;
  }
}
.animateBG {
	background-repeat: repeat-x;
  	animation: animatedBackground 50s ease-in-out infinite alternate;
}



	.boxSingleItemS{

margin-top: 350px;

}	


.menuSingleItem{

 
	background-color: rgba(220,80,100,0.9);
    text-align: center;
    bottom: -189px;
    position: relative;
    width: 171px;
    height: 50px;
    right: -499px;
    top: 629px;
    border-radius: 0px 0 11px 8px;


  
}

.menuSingleItem .item{

  align-content: right;
  position: relative;

}
.menuSingleItem .item img{


	width: 30px;
	height: 60px;
	opacity: 0.5;

}


</style>
