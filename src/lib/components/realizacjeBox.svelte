<script>
	import { fade, slide } from 'svelte/transition';
	import { strapiAPI, strapiURL } from '$lib/stores/store.js';
	export let item = {};

	let src = '';

	// export let src = strapiAPI + item.attributes.miniatura.data.attributes.formats.attributes.url;

	import moreinfo from '$lib/images/moreinfo.svg';
	let visible = false;
	let delay = 3000;

	function set() {
		visible = true;
	}
	function preload(src) {
		return new Promise(function (resolve) {
			let img = new Image();
			img.onload = resolve;
			img.src = src;
		});
	}
	function log(x) {
		console.log(x);
	}
	function getUrlImage(url) {
		// console.log(url)
		let src = '';
		if (url.url) {
			src = strapiURL + url.url;
		} else {
			src = strapiURL + url.formats.thumbnail.url;
		}
		return src;
	}
</script>

<div class="w-full p-2 rounded item realizacjeItems">
	<div
		style="transform: translateY(50px) translateZ(0px);"
		in:fade={{ delay: 450 }}
		out:fade={{ duration: 150 }}
	>
		<div class="coverImage">
		
			{#if item.attributes.miniatura.data}
				{#await preload(strapiURL + item.attributes.miniatura.data.attributes.url) then _}
					<a
						class=""
						href="/realizacje/{item.attributes.slug}"
						in:fade={{ delay: 400 }}
						draggable={false}
					>
						<img
							src={strapiURL + item.attributes.miniatura.data.attributes.url}
							alt={item.attributes.title}
							draggable={false}
						/>
					</a>

					<template>{set()}</template>
				{/await}
			{/if}
		</div>

		{#if visible == true}
			<div class=" box_ofer shadow-xl rounded-xl" in:slide={{}}>
				<div class=" content rounded-xl">
					<div class=" backgr rounded-md" />
					<div class=" texts rounded-md">
						<div class=" p-3 title">
							<h3 class=" font-semibold text-xl leading-6 my-2">{item.attributes.title}</h3>
							<p class=" paragraph-normal opis">
								{item.attributes.subtitle}
							</p>
						</div>
					</div>
					<div class=" flex items-center icons">
						{#if item.attributes.tags}
							
						<div class="button_">
							<a href="/realizacje/{item.attributes.slug}" draggable={false} selectable={false}>
								<button
									class="bg-white text-black px-1 py-2 m-2 rounded-md pl-3"
									style="transform: none;"
								>
									<img alt="" src={moreinfo} class="w10 h10" draggable={false} selectable={false} />
								</button>
							</a>
						</div>
					
						<ul class=" list-none flex">
							 {#each item.attributes.tags.data as tag}


							
							<li class="tag_icon">
								<img in:fade={{ delay: 100+delay }|delay+100}
									alt={tag.attributes.tag_name} draggable={false} selectable={false}
									src="{strapiURL}/icons/{tag.attributes.tag_name}.svg"
									class=" h-10 w-10 m-0 p-1 hover:bg-gray-100"
								/>
							</li>
						{/each}
						</ul>
						{/if}
					</div>
				
				</div>
			</div>
		{/if}
	</div>
</div>
<!-- <br/><br/><br/><br/><br/><br/><br/><br/><br/>
{tagCurrent} / {ls.tag_name} -->
