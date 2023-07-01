<script>
	// import { page } from '$app/stores';
	import logotype from '$lib/images/logotype.svg';
	import logotype_safari from '$lib/images/logotype_safari.svg';
	import messageIcon from '$lib/images/messageIcon.svg';
	import clientsIcon from '$lib/images/clientsIcon.svg';
	import { fade } from 'svelte/transition';

	// const apiURL = '//strapi.adamkarski.art/portfolios/?slug=' + $page.params.slug;
	
	const apiURL = '//strapi.adamkarski.art/tags';

	async function getPortfolioItems() {
	  	let response = await fetch(apiURL);
	  		let tags = await response.json();
			console.log(tags);
	  	return tags;
		}
	let data = getPortfolioItems();
let visibles=true;
	//data = getPortfolioItems();



</script>

{#await data}
		


		<p style="display: none;">{(visibles = true)}</p>
		{:then item}
		<div id="tagsBar">
			
			
			<ul class="list-none flex tags">

				<!-- <a href="/realizacje" class="backButton">
					<img src={backButton} alt="wstecz" width="25" height="25" />
				</a>
				
				<h1>{item.title}</h1> -->
			{#each item as tag}


			<li class="tag_icon">
				<img alt="{tag.tag_name}"
					src="//strapi.adamkarski.art/icons/{tag.tag_name}.svg"
					class=" h-10 w-10 m-0 p-1 hover:bg-gray-100"
				/>
			</li>

		

		{/each}
</ul>

		
		</div>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}



<style>

#tagsBar{
position: absolute;
display: inline-grid;

}




</style>


