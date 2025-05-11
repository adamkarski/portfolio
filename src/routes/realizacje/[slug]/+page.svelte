<script>
	import { page } from '$app/stores';
	import { onMount, onDestroy, afterUpdate } from 'svelte';
	import { fade, scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import Markdown from 'svelte-exmarkdown';
	import {
		strapiURL,
		modal,
		three_state,
		three_page,
		img_3d
	} from '$lib/stores/store.js';

	import Loader from '$lib/components/loader.svelte';
	import PortfolioGrid from '$lib/components/PortfolioGrid.svelte';

	let setModal = (d) => {
		$modal = { ...d };
	};

	let loadingDataState = true;
	let visible = false;
	let currentSlug = '';
	let data = {};
	let md = '';
	let title = '';
	let desc = '';
	let bigImage;
	let bigImageSrc;
	let processedContent = '';
	

	import ScrollImage from '$lib/components/scrollImage.svelte';








	// Funkcja do pobierania danych projektu
	async function getPortfolio(slug) {
		loadingDataState = true;
		
		// Czyścimy div z iFrame'ami przy zmianie projektu
		const iFramesDiv = document.getElementById('iFrames');
		if (iFramesDiv) {
			iFramesDiv.innerHTML = '';
		}
		
		const apiURL = `${strapiURL}/api/portfolios?pagination[withCount]=false&populate=Laptop_Tablet_Mobile&filters[slug]=${slug}`;
		/* console.log('Fetching data for:', apiURL); */
		
		try {
			let response = await fetch(apiURL);
			let portfolios = await response.json();
				
			if (portfolios.data && portfolios.data.length > 0) {
				data = portfolios.data[0];
				
				title = data.title;
				desc = data.subtitle;
				
				if (data.Laptop_Tablet_Mobile !== null) {
					console.log("// UPDATE TEXTURE");
					console.log(data); 
					$img_3d = [
						{
							l: data.Laptop_Tablet_Mobile[0].url,
							t: data.Laptop_Tablet_Mobile[2].url,
							p: data.Laptop_Tablet_Mobile[1].url
						}
					];
				}else	{console.log("// NO ADDITIONAL 3D TEXTURE");}
				
				// extract from data.content html img class="webpage"
				let cont =  extractWebpage(data.content);
				data.content = cont.content
				if(cont.webpageURL){
					data.webpageURL = cont.webpageURL;
				}
				

				loadingDataState = false;
				return data;
			} else {
				console.error('No data found for slug:', slug);
				return {};
			}
		} catch (error) {
			console.error('Error fetching portfolio data:', error);
			loadingDataState = false;
			return {};
		}
	}


	// extract .webpage from MARKDOWN
	function extractWebpage(inputStr) {

		const webpageRegex = /<img class="webpage".*?>/g;
		const matches = inputStr.match(webpageRegex);
		// usun z inputStr wszystkie znalezione img class="webpage"
		inputStr = inputStr.replace(webpageRegex, '');
		let srcMatch;
		let srcIMG;
		// extract src of img and delete from inputStr img element

		if (matches) {
			matches.forEach((match) => {
				srcMatch = match.match(/src="(.*?)"/);
				console.log( "SRC MATCH", srcMatch[1] );
				if (srcMatch && srcMatch[1]) {
					srcIMG = srcMatch[1]; // Extract the source URL
					console.log(srcIMG)
				}	else {
					console.log("NO SRC FOUND");
				}
				
			}
		);
		}

		// jesli srcIMG jest niepusty to dodaj go do return jako kolejny obiekt
		if (srcIMG) {
			return {"content" : inputStr, "webpageURL" : srcIMG };
		}
		else {
			return {"content" : inputStr,};
		}
		
		
		
		
			
		

	}

	// extract IFRAME items from MARKDOWN
	function extractIframe(inputStr) {
		if (!inputStr) return '';
		
		const iFrameMatches = inputStr.match(/(?:<iframe[^>]*)(?:(?:\/>)|(?:>.*?<\/iframe>))/g);
		if (!iFrameMatches) return inputStr;
		
		iFrameMatches.forEach((element) => {
			inputStr = inputStr.replaceAll(element, '');
			let src_str = element.match(/src\s*=\s*"(.+?)"/g);
			if (!src_str || src_str.length === 0) return;
			
			src_str = src_str[0].replaceAll('src="https:', '');
			src_str = src_str.replaceAll('"', '');

			var iFrames_div = document.getElementById('iFrames');
			if (!iFrames_div) return;

			var substack = document.createElement('iframe');
			// set parameters of new object
			substack.src = src_str;
			substack.width = '560';
			substack.height = '315';
			substack.title = 'video player';
			substack.allow = 'accelerometer';
			substack.autoplay;
			// append the object to the DOM
			iFrames_div.appendChild(substack);
		});
		return inputStr;
	}

	function log(x) {
		console.log(x);
	}



	// Funkcja do dodawania event listenerów do obrazków
	function setupImageViewers() {
		setTimeout(() => {
			// Dodajemy event listenery do wszystkich obrazków w treści
			const elements = document.querySelectorAll('#markdown_el img');
			
			for (var i = 0; i < elements.length; i++) {
				elements[i].addEventListener(
					'click',
					function () {
						bigImageSrc = this.src;
						bigImage = true;
					},
					false
				);
			}
		}, 500);
	}
	
	// Reaguj na zmiany w URL
	$: if ($page.params.slug && $page.params.slug !== currentSlug) {
		currentSlug = $page.params.slug;
		console.log('Slug changed to:', currentSlug);
		data = getPortfolio(currentSlug);
	}
	let container;
	// Inicjalne pobranie danych
	onMount(() => {
		currentSlug = $page.params.slug;
		data = getPortfolio(currentSlug);
		
		$three_page = 'realizacje_single';
		$three_state = 'play';
		
	});
	
	// Po aktualizacji komponentu
	afterUpdate(() => {
		
		setupImageViewers();
	});
	
	onDestroy(() => {
		$three_state = 'back';
	});



	




</script>

<svelte:head>
	<title>{title} Portfolio - Zbigniew Adam Karski</title>
	<meta name="description" content={desc} />
</svelte:head>

<div class="container_singlePage mx-auto m-4 relative sm:w-auto p-10">
	{#await data}
		<template>
			{#if loadingDataState === true}
				<Loader />
			{/if}
		</template>

		<div style="display:none">{(visible = true)}</div>
	{:then item}
		<div id="markdown_el">
			<ul class=" list-none flex titleBanner">
				<a href="/realizacje" class="backButton">
					<img src="/images/backButton.svg" alt="wstecz" width="25" height="25" />
				</a>

				<h1>{item.title}</h1>
			</ul>

			<ul class="flex">
				{#if item && item.tags && Array.isArray(item.tags)}
					{#each item.tags as tag}
						<li class="tag_icon">
							<img
								alt={tag.tag_name}
								src="{strapiURL}/icons/{tag.tag_name}.svg"
								class=" h-10 w-10 m-0 p-1 hover:bg-gray-100"
							/>
						</li>
					{/each}
				{/if}
			</ul>
			<!-- <h2>{item.subtitle}</h2> -->
			<div class="texts">
				<!-- 	<Markdown {md} /> -->

				<div bind:this={container}>
					{@html item.content}
				

					{#if item.webpageURL}
						<ScrollImage
							height="600px"
							minSteps={5}
							maxSteps={10}
							scrollIntervalMin={5}
							scrollIntervalMax={10}
							src="{item.webpageURL}"
							restartDelay={7000}
						/>
					{/if}
				<!-- 	<ScrollImage
					height="600px"
					minSteps={5} 
					maxSteps={10} 
					scrollIntervalMin={5} 
					scrollIntervalMax={10} 
					src="https://strapi.adamkarski.art/uploads/Pielegnacja_ogrodow_webpage_f47aaf23e4.jpg"
					restartDelay={7000} 
				/> -->
				</div>

				
			</div>
		</div>
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
<div id="iFrames" />

{#if bigImage}
	<div
		class="bigImageDiv"
		on:click={() => (bigImage = !bigImage)}
		in:fade={{ duration: 300 }}
		out:fade={{ duration: 300 }}
		on:keypress={() => (bigImage = !bigImage)}
	>
		<div class="blur" />

		<img src={bigImageSrc} class="bigImage" alt={bigImageSrc} />
	</div>
{/if}

<!-- Dodajemy sekcję z innymi projektami -->
<div class="other-projects-section">
	<PortfolioGrid 
		title="Zobacz również inne projekty" 
		excludeCurrentSlug={$page.params.slug} 
		limit={6} 
		forceAllTag={true}
	/>
</div>

<style lang="scss" global>
	.scroll-image {

		border-radius: 5px !important;
	}
	#markdown_el p img {
		user-select: none;
		cursor: pointer;
	}

	.bigImageDiv {
		position: fixed;
		overflow-y: hidden;
		width: 100%;
		height: 100%;
		top: 0px;
		left: 0px;
		z-index: 99999; // Ensure it's above other content

		.bigImage {
			user-select: none;
			cursor: pointer;
		}
		.blur {
			background-color: rgba(255, 255, 255, 0.8);
			background-color: rgba(233, 233, 233, 0.685); /* Darker, semi-transparent background */
			width: 100%;
			position: absolute;
			top: 0px;
			left: 0px;
			height: 100%;
			backdrop-filter: blur(8px); /* Blur content behind this element */
			-webkit-backdrop-filter: blur(8px); /* For Safari compatibility */
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
		// box-shadow: 12px 12px 36px 15px rgba(0, 0, 0, 0.1);
		z-index: 1001; // Ensure image is on top of the blur layer
		border-radius: 5px;
	}

	.other-projects-section {
		margin-top: 4rem;
		padding: 2rem 0;
		margin-left: 60px;
		border-top: 1px solid rgba(0, 0, 0, 0.1);
	}
</style>
