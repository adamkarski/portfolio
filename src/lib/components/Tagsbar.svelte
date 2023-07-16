<script script="ts">
	import { fade } from 'svelte/transition';
	import { tag, portfolioCount, strapiTags } from '$lib/stores/store.js';


	let tagCurrent;

	tag.subscribe((value) => {
		tagCurrent = value;
	});

	function setTag(val) {
		tag.set(val);
	}

	let visibles = true;

	function countItems(data) {
		let itemsS = data.length;
		return itemsS;
	}

	async function getAllTags() {
		let response = await fetch(strapiTags);
		let tags = await response.json();
		
		return tags;
	}
	let data = getAllTags();
	// onMount(async () => {

	//   let data = getTags();
	//   // rooms.subscribe((value) => {
	//   //   jsonRoomsData = value;
	//   // });

	// });
</script>

<div class="container" in:fade out:fade>
	

	{#await data}
		<!-- <div class = "container">
  <div class= "helper"> -->

		<p style="display: none;">{(visibles = true)}</p>
	{:then item}
		<ul id="tagsBar" class="list-none tags">
			<!-- <a href="/realizacje" class="backButton">
					<img src={backButton} alt="wstecz" width="25" height="25" />
				</a>
				
				<h1>{item.title}</h1> -->

				<li class="tag_icon" on:click={() => setTag("all")} on:keydown={() => setTag("all")} >
					<img
						alt="Wszystkie prace"
						src="//strapi.adamkarski.art/icons/all.svg"
						class=" h-10 w-10 m-0 p-1 hover:bg-gray-100 tagsImage"
					/>
					<div class="countItems">
						{$portfolioCount}
					</div>
				</li>

			{#each item as taga}
				<li class="tag_icon" on:click={() => setTag(taga.tag_name)}  on:keydown={() => setTag("all")} >
					<img
						alt="{taga.tag_name} "
						src="//strapi.adamkarski.art/icons/{taga.tag_name}.svg"
						class="h-10 w-10 m-0 p-1 hover:bg-gray-100 tagsImage"
					/>
					<div class="countItems">
						{countItems(taga.portfolios)}
					</div>
				</li>
			{/each}
		</ul>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
</div>

<style>
	.container_a {
		display: table;
		height: 100%;
		position: absolute;
		overflow: hidden;
		width: 100%;
	}

	.helper {
		position: absolute; /*a variation of an "lte ie7" hack*/
		top: 50%;
		display: table-cell;
		vertical-align: middle;
	}

	#tagsBar {
		position: fixed;
		top: 10%;
		left: 0;
		height: 100%;
		list-style-type: none;
		margin: 0;
		padding: 0;
		z-index: 100000;
	}
	.tagsImage{

		/* width: 80%; */

	}
	.countItems {
		background-color: rgba(0, 0, 0, 0.35);
		position: absolute;
		top: 10px;
		left: 41px;
		width: 19px;
		font-weight: 600;
		color: white;
		border-radius: 25px;
		font-size: 9px;
		padding: 2px;
		text-align: center;
	}
	#tagsBar li {
		position: relative;
	}

	@media screen and (max-height: 34em) {
		#tagsBar li {
			/* font-size:70%; */
		}
	}
</style>
