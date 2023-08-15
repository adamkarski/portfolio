<script script="ts">
	import { fade } from 'svelte/transition';

	import { tag, portfolioCount, strapiURL, strapiTags, modal } from '$lib/stores/store.js';

	let tagCurrent;
	let clicked = true;

	tag.subscribe((value) => {
		tagCurrent = value;
	});

	let setTag = (d) => {
		tag.set(d);

		

	};
	let setModal = (d) => {
		$modal = { ...d };
	};
	

	let visibles = true;

	function countItems(data) {
		let itemsS = data.length;
		return itemsS;
	}

	async function getAllTags() {
		let r = await fetch(strapiTags);
		let tags = await r.json();

		return tags;
	}
	let data = getAllTags();
</script>

<div class="container" in:fade out:fade>
	{#await data}
		<p style="display: none;">{(visibles = true)}</p>
	{:then item}
		<ul id="tagsBar" class="list-none tags">
			<li class={$tag === 'all' ? 'active all' : 'all'} on:click={() => setTag('all')} on:keydown={() => setTag('all')}>
				<span></span>
				<img
					alt="Wszystkie prace"
					src="/images/all.svg"
					class=" h-10 w-10 m-0 p-1 hover:bg-gray-100 tagsImage"
				/>
				<div class="countItems">
					{$portfolioCount}
				</div>
			</li>

			{#each item as taga}
				<li class={taga.tag_name === $tag ? 'active' : ''}
					on:click={() => {
						setTag(taga.tag_name);
					}}
					on:keydown={() => setTag('all')}
				>	
				<span></span>
					<img
						alt="{taga.tag_name} "
						src="{strapiURL}icons/{taga.tag_name}.svg"
						class="h-10 w-10 m-0 p-1 hover:bg-gray-100 tagsImage"
					/>

					<div class="countItems">
						{countItems(taga.portfolios)}
					</div>
				</li>
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

		<!-- <p style="color: red">{error.message}</p> -->
	{/await}
</div>

<style lang="scss">
	#tagsBar {
		background-color: rgba(0, 0, 0, 0.04);
		position: fixed;
		top: 10%;
		left: 0;
		height: 100%;
		list-style-type: none;
		margin: 0;
		padding: 5px;
		z-index: 100000;
		border-radius: 0px 8px 8px 0px;
		height: auto;

		li.active span{
			position:absolute;
			width: 2px;
			height: 100%;
			left: -4px;
			background-color: rgba(8, 96, 130, 1.000);
			transition:all 0.5s ease-in-out;
		}

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
		box-shadow: 2px 2px 3px -1px rgba(0, 0, 0, 0.7);
	}
	#tagsBar li {
		position: relative;
	}

	@media screen and (max-height: 34em) {
	}
</style>
