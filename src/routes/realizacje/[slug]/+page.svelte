<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import Markdown from 'svelte-exmarkdown';
	import backButton from '$lib/images/backButton.svg';
import {strapiURL} from '$lib/stores/store.js'
	import Loader from '$lib/components/loader.svelte';
	import { browser } from '$app/environment';
import { each } from 'svelte/internal';

import { fade, scale } from 'svelte/transition';
	import { quintOut } from "svelte/easing";


// $: elementsIMG = window.querySelectorAll('#markdown_el p img');
	

	let loadingDataState = true;
	let visible = false;
	let pageData;
	let backs="<";
	

	const apiURL = strapiURL+'portfolios/?slug=' + $page.params.slug;
	let data = {};
	let md = '';

	function extractIframe(inputStr) {
		let iFrames = inputStr.match(/(?:<iframe[^>]*)(?:(?:\/>)|(?:>.*?<\/iframe>))/g);
		iFrames.forEach((element) => {
			// substack.src = "https://www.youtube.com/embed/ycdJNxEAc44";
			// substack.src = src_str[0];
			// substack.width = "560";
			// substack.height = "315";
			// substack.title = "video player";
			// substack.allow= "accelerometer";
			// substack.autoplay;

			inputStr = inputStr.replaceAll(element, '');
			// console.log(element);
			let src_str = element.match(/src\s*=\s*"(.+?)"/g);
			src_str = src_str[0].replaceAll('src="https:', '');
			src_str = src_str.replaceAll('"', '');

			var iFrames_div = document.getElementById('iFrames');

			var substack = document.createElement('iframe');

			// substack.src = '//www.youtube.com/embed/ycdJNxEAc44';
			substack.src = src_str;
			substack.width = '560';
			substack.height = '315';
			substack.title = 'video player';
			substack.allow = 'accelerometer';
			substack.autoplay;
			iFrames_div.appendChild(substack);
		});
		// iFrames.forEach((iframer) => {

		// 	// var doc = new DOMParser().parseFromString(iFrames_div, "text/xml");
		// 	// iFrames_div.appendChild(doc);

		// 	// console.log(iFrames_div);
		// 	// create iframe
		// 	// let temp = element;

		// 	// var iFrames_div = document.getElementById('iFrames');

		// 	// var substack = document.createElement('iframe');

		// 	// substack.src = '//www.youtube.com/embed/ycdJNxEAc44';
		// 	// substack.width = '560';
		// 	// substack.height = '315';
		// 	// substack.title = 'video player';
		// 	// substack.allow = 'accelerometer';
		// 	// substack.autoplay;
		// 	// iFrames_div.appendChild(substack);
		// });

		return inputStr;
	}

	async function getPortfolioItems() {
		let response = await fetch(apiURL);
		let portfolios = await response.json();
		data = portfolios[0];
		//md = data.content;
		// console.log(data.content);
		md = data.content.replace(/\/uploads/g, strapiURL + '/uploads');

		md = extractIframe(md);

		return data;
	}

	data = getPortfolioItems();
	
	
	let bigImage;
	let bigImageSrc;

	onMount(() => {

		setTimeout(imgElements, 3000);

		function imgElements(){
		const elements = document.querySelectorAll('#markdown_el p img');
    	
		console.log(elements);
		console.log("elemensts")
			
		for(var i = 0; i < elements.length; i++) {

			elements[i].addEventListener('click', function(){
	console.log(this.src)
	bigImageSrc= this.src;bigImage= true

}, false);
}
	
	}

	});




		
		
	
	
</script>

<div class="container_singlePage mx-auto m-4 relative sm:w-auto p-10">
	{#await data}
		{#if loadingDataState === true}
			<Loader />
		{/if}

	<div style="display:none">	{()=>visible = true}</div>
	{:then item}
		<div id="markdown_el">
			
			
			<ul class=" list-none flex titleBanner ">

				<a href="/realizacje" class="backButton">
					<img src={backButton} alt="wstecz" width="25" height="25" />
				</a>
				
				<h1>{item.title}</h1>
			</ul>
			<ul class="flex">
			{#each item.tags as tag}


			<li class="tag_icon">
				<img alt="{tag.tag_name}"
					src="//strapi.adamkarski.art/icons/{tag.tag_name}.svg"
					class=" h-10 w-10 m-0 p-1 hover:bg-gray-100"
				/>
			</li>

		

		{/each}

		</ul>
<!-- <h2>{item.subtitle}</h2> -->
		<div class="texts">

			

			<Markdown {md} /></div>
		</div>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
</div>
<div id="iFrames" />

{#if bigImage}
<div class="bigImageDiv" on:click={() => (bigImage = !bigImage)} in:fade={{ delay: 150, duration: 400, easing: quintOut }} out:fade>
	
	<div class="blur"></div>
	
	<img src="{bigImageSrc}" class="bigImage"/> 
</div>
{/if}

<style lang="scss" global>

.bigImageDiv{

    position: fixed;
    overflow-y: hidden;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
	
	.blur{
		background-color: rgba(255, 255, 255, 0.8);
		width:100%;
		position: absolute;
		top:0px;
		left:0px;
		height: 100%;
		filter:blur(14px);
	}

}
.bigImage {
    max-width: 100%;
    max-height: 100%;
    bottom: 0;
    left: 0;
    margin: auto;
    overflow: auto;
    position: fixed;
    right: 0;
    top: 0;
    -o-object-fit: contain;
    object-fit: contain;
	box-shadow: 12px 12px 36px 15px rgba(0,0,0,0.1);
	border-radius: 9px;
}




</style>