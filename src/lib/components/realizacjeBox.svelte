<script>
	
	import { fade, slide } from 'svelte/transition';
	import { strapiURL, tagsAll, tag } from '$lib/stores/store.js';
	export let item = {};
    import { base } from '$app/paths';


	let src = '';

	import moreinfo from '$lib/images/moreinfo.svg';
	let visible = false;
	let delay = 3000;

	function set() {
		visible = true;
	}
	let allTags = $tagsAll;
	let tagCurrent = $tag;
	
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
	
function gettagData(id){
			const result = allTags.find(obj => obj.id === id);
		return result.icon.url;
}

	visible = true;

function ahref(slug){
	window.location.href={base}+'/realizacje/'+slug;
}

</script>



<!-- <pre>{JSON.stringify(allTags)}</pre> -->



{#if item.miniatura}
<div class="w-full p-2 rounded item realizacjeItems">
	<div class="boxoutline"
		style="transform: translateY(50px) translateZ(0px);"
		in:fade={{ delay: 450 }}
		out:fade={{ duration: 150 }}
	>
		<div class="coverImage">
		
			
			{#if item.miniatura[0].url}
			
				{#await preload( item.miniatura[0].url) then _}
					<a
						class=""
						href="/realizacje/{item.slug}"
						in:fade={{ delay: 400 }}
						draggable={false}
					>
						<img
							src={item.miniatura[0].url}
							alt={item.title}
							draggable={false}
						/>
					</a>

					<!-- <template>{set()}</template> -->
				{/await}

			{/if}
		</div>

		{#if allTags && item.tags}


	    
		<div class=" box_ofer shadow-xl rounded-xl" in:slide={{}}  on:click={() => ahref(item.slug)} on:keydown on:keypress on:keyup>
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
								<a href="{base}/realizacje/{item.slug}" draggable={false} selectable={false}>
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
											src="{ gettagData(tag.id) }" 
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

<style>

.box_ofer{

	cursor: pointer !important;
}

</style>



