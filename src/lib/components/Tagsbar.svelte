<script script="ts">

	import { fade } from 'svelte/transition';

	import { tag, tagsAll, modal , portfolioCount, strapiURL } from '$lib/stores/store.js';

	let tagCurrent;
	let clicked = true;

	tag.subscribe((value) => {
		tagCurrent = value;
	});
	

	let setTag = (d) => {
		tag.set(d);

		

	};
	let data =  $tagsAll;

	let setModal = (d) => {
		$modal = { ...d };
	};
	
	let visibles = true;



	let allTags;

	tagsAll.subscribe(value => {
		allTags = value;

		console.log("data", value);
	});


	
</script>

<div class="container" in:fade out:fade>

	{#await allTags}
		<p style="display: none;">{visibles = true}</p>
	{:then item}
		
		 <ul id="tagsBar" class="list-none tags"> 
			
			<li class={$tag === 'all' ? 'active all' : 'all'} on:click={() => setTag('all')} on:keydown={() => setTag('all')}>
				<span></span>
				<img
					alt="Wszystkie prace"
					src= {strapiURL+"/uploads/all_fe3d46a0a5.svg"}
					class=" h-10 w-10 m-0 p-1 hover:bg-gray-100 tagsImage"
				/>
				<!-- <div class="countItems"> -->
					<!-- {$portfolioCount} -->
				<!-- </div> -->
			</li>

			 {#each item as taga}
				{#if taga.tag_name !== "all" && taga.portfolios.length !== 0}
				<li class={taga.tag_name === $tag ? 'active' : ''}
					on:click={() => {
						setTag(taga.tag_name);
					}}
					on:keydown={() => setTag(taga.tag_name)}
				>	
				<span></span>
					<img
						alt="{taga.icon.name} {taga.icon.alternativeText} "
						src="{strapiURL}{taga.icon.url}"
						class="h-10 w-10 m-0 p-1 hover:bg-gray-100 tagsImage"
					/>

					<div class="countItems">
						{taga.portfolios.length}
					</div>
				</li>
				{/if}
			{/each}
		</ul>
	{:catch error}
		{setModal({
			open: true,
			title: 'Wystąpił błąd',
			message: error,
			button: 'OK',
			action: 'reload'
		})}

		 <p style="color: red">{error.message}</p>
	{/await}

	<!--  current tag: {$tag}  -->
</div>

<style lang="scss">

img{
	user-drag: none;
	-webkit-user-drag: none;
	-moz-user-select: none;
}

	#tagsBar {
	/* background-color: rgba(0, 0, 0, 0.04); */
    /* position: fixed; */
    /* top: 10%; */
    /* left: 0; */
    /* height: 100%; */
    list-style-type: none;
    /* margin: 0; */
    /* padding: 5px; */
    z-index: 100000;
    border-radius: 0px 8px 8px 0px;
    /* height: auto; */
    display: flex;
	margin-left: -146px;


		li.active span{
			// position:absolute;
			// width: 2px;
			// height: 100%;
			// left: -4px;
			// background-color: rgba(8, 96, 130, 1.000);
			// transition:all 0.5s ease-in-out;
		}

	}

	.countItems {
		-webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
		background-color: rgba(0, 0, 0, 0.35);
		position: absolute;
	    top: 22px;
    left: 10px;
		width: 19px;
		font-weight: 600;
		color: white;
		border-radius: 25px;
		font-size: 9px;
		padding: 2px;
		text-align: center;
		box-shadow: 2px 2px 3px -1px rgba(0, 0, 0, 0.7);
		z-index: 99999999;
	}
	#tagsBar li {
		position: relative;
	}

	@media screen and (max-height: 34em) {
	}
</style>
