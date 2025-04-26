<script>
	import { fade, slide } from 'svelte/transition';
	import { strapiAPI, strapiURL, host } from '$lib/stores/store.js';
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

	visible = true;
	console.log(item)
</script>

{#if item.miniatura}
<div class="w-full p-2 rounded item realizacjeItems">
	<div
		style="transform: translateY(50px) translateZ(0px);"
		in:fade={{ delay: 450 }}
		out:fade={{ duration: 150 }}
	>
		<div class="coverImage">
			{#if !item.miniatura[0]}
			
			No cover image

			{/if}
			
			{#if item.miniatura[0]}
			
				{#await preload(host + item.miniatura[0].url) then _}
					<a
						class=""
						href="/realizacje/{item.slug}"
						in:fade={{ delay: 400 }}
						draggable={false}
					>
						<img
							src={host + item.miniatura[0].url}
							alt={item.title}
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
							<h3 class=" font-semibold text-xl leading-6 my-2">{item.title}</h3>
							<p class=" paragraph-normal opis">
								{item.subtitle}
							</p>
						</div>
					</div>
					<div class=" flex items-center icons">
						{#if item.tags && Array.isArray(item.tags)}
							<div class="button_">
								<a href="/realizacje/{item.slug}" draggable={false} selectable={false}>
									<button
										class="bg-white text-black px-1 py-2 m-2 rounded-md pl-3"
										style="transform: none;"
									>
										<img alt="" src={moreinfo} class="w10 h10" draggable={false} selectable={false} />
									</button>
								</a>
							</div>
						
							<ul class="list-none flex">
								{#each item.tags as tag}
									<li class="tag_icon">
										<img in:fade={{ delay: 100 + delay }}
											alt={tag.tag_name} 
											draggable={false} 
											selectable={false}
											src="{host}/icons/{tag.tag_name}.svg"
											class="h-10 w-10 m-0 p-1 hover:bg-gray-100"
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
{/if}
<!-- <br/><br/><br/><br/><br/><br/><br/><br/><br/>
{tagCurrent} / {ls.tag_name} -->
