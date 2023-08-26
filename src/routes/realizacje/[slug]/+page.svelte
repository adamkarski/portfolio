<script>
	import { page } from '$app/stores';
	import { onMount, onDestroy } from 'svelte';
	import { fade, scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import Markdown from 'svelte-exmarkdown';
	import {
		strapiAPI,
		strapiURL,
		modal,
		three_state,
		three_page,
		img_3d
	} from '$lib/stores/store.js';

	import backButton from '$lib/images/backButton.svg';
	import Loader from '$lib/components/loader.svelte';

	let setModal = (d) => {
		$modal = { ...d };
	};

	let loadingDataState = true;
	let visible = false;

	// define API URL for single portfoloio item
	const apiURL = strapiAPI + 'portfolios/' + $page.params.slug + '?populate=*';
	let data = {};
	let md = '';

	// extract IFRAME items from MARKDOWN
	function extractIframe(inputStr) {
		let iFrames = inputStr.match(/(?:<iframe[^>]*)(?:(?:\/>)|(?:>.*?<\/iframe>))/g);
		iFrames.forEach((element) => {
			inputStr = inputStr.replaceAll(element, '');
			let src_str = element.match(/src\s*=\s*"(.+?)"/g);
			src_str = src_str[0].replaceAll('src="https:', '');
			src_str = src_str.replaceAll('"', '');

			var iFrames_div = document.getElementById('iFrames');

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

	let title = '';
	let desc = '';

	// get all portfolio items from API and send to extract IFRAME elements
	async function getPortfolioItems() {
		console.log(apiURL);
		let response = await fetch(apiURL);
		let portfolios = await response.json();
		data = portfolios.data.attributes;
		title = data.title;
		desc = data.subtitle;

		md = data.content.replace(/\/uploads/g, strapiURL + '/uploads');
		md = extractIframe(md);

		return data;
	}

	data = getPortfolioItems();

	let bigImage;
	let bigImageSrc;
	onDestroy(() => {
		$three_state = 'back';
	});
	onMount(() => {
		$three_page = 'realizacje_single';
		$three_state = 'play';
		setTimeout(imgElements, 3000);
		if (data.title) title = data.title;
		if (data.subtitle) desc = data.subtitle;

		// add EventListener form images to open viewer
		function imgElements() {
			const elements = document.querySelectorAll('#markdown_el p img');
			if (elements[0].src) {
				$img_3d = [
					// ...$img_3d,
					{
						m: elements[0].src,
						a: elements[0].src,
						t: elements[0].src,
					}
				];

				console.log($img_3d);
				// $img_3d.m = elements[0].src;
				// $img_3d= 'https://strapi.adamkarski.art/uploads/edytor_ebay_allegro_szablon_it_Empire_54580dd0f8.jpg'
			}
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
		}
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
					<img src={backButton} alt="wstecz" width="25" height="25" />
				</a>

				<h1>{item.title}</h1>
			</ul>

			<ul class="flex">
				<!-- {#each item.tags as tag}
					<li class="tag_icon">
						<img
							alt={tag.tag_name}
							src="{strapiAPI}/icons/{tag.tag_name}.svg"
							class=" h-10 w-10 m-0 p-1 hover:bg-gray-100"
						/>
					</li>
				{/each} -->
			</ul>
			<!-- <h2>{item.subtitle}</h2> -->
			<div class="texts">
				<Markdown {md} />
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
		in:scale={{ delay: 150, duration: 600, easing: quintOut }}
		out:scale={{ delay: 100, duration: 600, easing: quintOut }}
		on:keypress={() => (bigImage = !bigImage)}
	>
		<div class="blur" />

		<img src={bigImageSrc} class="bigImage" alt={bigImageSrc} />
	</div>
{/if}

<style lang="scss" global>
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

		.bigImage {
			user-select: none;
			cursor: pointer;
		}
		.blur {
			background-color: rgba(255, 255, 255, 0.8);
			width: 100%;
			position: absolute;
			top: 0px;
			left: 0px;
			height: 100%;
			filter: blur(14px);
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
		box-shadow: 12px 12px 36px 15px rgba(0, 0, 0, 0.1);
	}
</style>
