<script>
	import { page } from '$app/stores';
	import { onMount, onDestroy, afterUpdate } from 'svelte';
	import { fade, scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import Markdown from 'svelte-exmarkdown';
	import { strapiURL, modal, three_state, three_page, img_3d } from '$lib/stores/store.js';

	import Loader from '$lib/components/loader.svelte';
	import PortfolioGrid from '$lib/components/PortfolioGrid.svelte';
	import ScrollImage from '$lib/components/scrollImage.svelte';

	// Pobieramy dane z SSR
	export let data;

	console.log(data.data)


	let setModal = (d) => {
		$modal = { ...d };
	};

	let loadingDataState = false;
	let visible = true;
	let bigImage;
	let bigImageSrc;
	let container;



	// extract from data.data.portfolios element that contains slug with data.slug 
	
	


	// Przetwarzamy dane z SSR
	$: portfolio = data?.data?.portfolios?.find(p => p?.slug === data.slug) || {};
	$: otherProjects = data?.data?.portfolios || [];
	$: title = portfolio?.title || '';
	$: desc = portfolio?.subtitle || '';


	//  z tagsAll trzeba wyciagnąc wszystkie tagi które zapisane są pod aresem portfolio.tags



	// Przetwarzamy zawartość projektu
	 $: if (portfolio && portfolio.content) {
		// Przetwarzamy zawartość, aby wyodrębnić obrazy strony
		const processed = extractWebpage(portfolio.content);
		portfolio.content = processed.content;
		if (processed.webpageURL) {
			portfolio.webpageURL = processed.webpageURL;
		}
		
		// Przetwarzamy zawartość, aby wyodrębnić iframe'y
		setTimeout(() => {
			if (portfolio.content) {
				extractIframe(portfolio.content);
			}
		}, 100);
	} 

	// Ustawiamy tekstury 3D, jeśli są dostępne
	/* $: if (portfolio && portfolio.Laptop_Tablet_Mobile !== null) {
		$img_3d = [{
			l: portfolio.Laptop_Tablet_Mobile[0].url,
			t: portfolio.Laptop_Tablet_Mobile[2].url,
			p: portfolio.Laptop_Tablet_Mobile[1].url
		}];
	} */

	// extract .webpage from MARKDOWN

	// Przetwarzamy dane z SSR

	// Przetwarzamy zawartość projektu
	/* $: if (portfolio && portfolio.content) {
		// Przetwarzamy zawartość, aby wyodrębnić obrazy strony
		const processed = extractWebpage(portfolio.content);
		portfolio.content = processed.content;
		if (processed.webpageURL) {
			portfolio.webpageURL = processed.webpageURL;
		}

		// Przetwarzamy zawartość, aby wyodrębnić iframe'y
		setTimeout(() => {
			if (portfolio.content) {
				extractIframe(portfolio.content);
			}
		}, 100);
	} */

	// Ustawiamy tekstury 3D, jeśli są dostępne
	$: if (portfolio && portfolio.Laptop_Tablet_Mobile !== null) {
		$img_3d = [{
			l: portfolio.Laptop_Tablet_Mobile[0].url,
			t: portfolio.Laptop_Tablet_Mobile[2].url,
			p: portfolio.Laptop_Tablet_Mobile[1].url
		}];
	}
 
	// extract .webpage from MARKDOWN
	 function extractWebpage(inputStr) {
	 	if (!inputStr) return { content: '' };

	 	const webpageRegex = /<img class="webpage".*?>/g;
	 	const matches = inputStr.match(webpageRegex);
	 	// usun z inputStr wszystkie znalezione img class="webpage"
	 	inputStr = inputStr.replace(webpageRegex, '');
	 	let srcMatch;
	 	let srcIMG;

	 	if (matches) {
	 		matches.forEach((match) => {
	 			srcMatch = match.match(/src="(.*?)"/);
	 			if (srcMatch && srcMatch[1]) {
	 				srcIMG = srcMatch[1]; // Extract the source URL
	 			}
	 		});
	 	}

	 	// jesli srcIMG jest niepusty to dodaj go do return jako kolejny obiekt
	 	if (srcIMG) {
	 		return {"content": inputStr, "webpageURL": srcIMG};
	 	} else {
	 		return {"content": inputStr};
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

	// Funkcja do dodawania event listenerów do obrazków
	function setupImageViewers() {
		setTimeout(() => {
			// Dodajemy event listenery do wszystkich obrazków w treści ale bez clasy tagg

			// Wybieramy wszystkie obrazki w #markdown_el, które NIE mają klasy 'tagg'
			const elements = document.querySelectorAll('#markdown_el img:not(.tagg)');
			
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

	onMount(() => {
		$three_page = 'realizacje_single';
		$three_state = 'play';
		console.log(portfolio.tags)
		

	/* 	console.log('DATA Single Page Realizacje', data.data.portfolios);
		portfolio = data.data.portfolios; */

		
		// Czyścimy div z iFrame'ami przy zmianie projektu
		/* 	const iFramesDiv = document.getElementById('iFrames');
		if (iFramesDiv) {
			iFramesDiv.innerHTML = '';
		} */

		// Przetwarzamy iframe'y
		/* if (portfolio && portfolio.content) {
			extractIframe(portfolio.content);
		} */
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

	{#if portfolio}
		<meta property="og:title" content="{title} - Portfolio Zbigniew Adam Karski" />
		<meta property="og:description" content={desc} />
		<meta property="og:type" content="website" />
		<meta property="og:url" content="https://adamkarski.github.io/realizacje/{portfolio.slug}" />
		{/if}
</svelte:head>


<div class="container_singlePage mx-auto m-4 relative sm:w-auto p-10">
	<!-- Wyświetlamy loader podczas ładowania danych -->
	<!-- {#if $three_state == 'play'}
		<Loader />
	{/if} -->
	
	{#if portfolio}
		<div id="markdown_el">
			<ul class="list-none flex titleBanner">
				<a href="/realizacje" class="backButton">
					<img src="/images/backButton.svg" alt="wstecz" width="25" height="25" />
				</a>

				<h1>{portfolio.title}</h1>
			</ul>

			<ul class="flex">
				{#if portfolio && portfolio.tags && Array.isArray(portfolio.tags)}
					{#each portfolio.tags as tag}
						<li class="tag_icon">
							<img 
								alt={tag.tag_name}

							
								src={data?.data?.tags?.find(t => t?.id === tag.id)?.icon.url }
								class="h-10 w-10 m-0 p-1 hover:bg-gray-100 tagg"
							/>
						</li>
					{/each}
				{/if}
			</ul>

			<div class="texts">
				<div bind:this={container}>
					{@html portfolio.content || ''}

					{#if portfolio.webpageURL}
						<ScrollImage
							height="600px"
							minSteps={5}
							maxSteps={10}
							scrollIntervalMin={5}
							scrollIntervalMax={10}
							src={portfolio.webpageURL}
							restartDelay={7000}
						/>
					{/if}
				</div>
			</div>
		</div>
	{/if} 
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
		customItems={otherProjects}
		forceAllTag={true}
	/> 
</div>

<style lang="scss" global>
	.scroll-image {
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
