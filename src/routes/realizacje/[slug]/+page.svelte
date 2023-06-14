<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import Markdown from 'svelte-exmarkdown';
	import backButton from '$lib/images/backButton.svg';

	import Loader from '$lib/components/loader.svelte';
	import { fade } from 'svelte/transition';
	
	let loadingDataState = true;
	let visible = false;
	let pageData;
	let backs="<";
	const apiURLstrapi = '//strapi.adamkarski.art';

	const apiURL = '//strapi.adamkarski.art/portfolios/?slug=' + $page.params.slug;
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
			console.log(element);
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
		md = data.content.replace(/\/uploads/g, apiURLstrapi + '/uploads');

		md = extractIframe(md);

		return data;
	}

	data = getPortfolioItems();
</script>

<div class="container_singlePage">
	{#await data}
		{#if loadingDataState === true}
			<Loader />
		{/if}

		{(visible = true)}
	{:then item}
		<div id="markdown_el">
			
			
			<ul class=" list-none flex titleBanner ">

				<a href="/realizacje" class="backButton">
					<img src={backButton} alt="wstecz" width="25" height="25" />
				</a>
				
				<h1>{item.title}</h1>
			{#each item.tags as tag}


			<li class="tag_icon">
				<img alt="{tag.tag_name}"
					src="//strapi.adamkarski.art/icons/{tag.tag_name}.svg"
					class=" h-10 w-10 m-0 p-1 hover:bg-gray-100"
				/>
			</li>

		

		{/each}
</ul>

			<Markdown {md} />
		</div>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
</div>
<div id="iFrames" />
