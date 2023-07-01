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





</script>

{#await data}
		


		<p style="display: none;">{(visibles = true)}</p>
		{:then item}
		<div >
			
			
			<ul id="tagsBar" class="list-none tags">

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
				
				<p style="display: none;">
				<!-- {#each tag.portfolios(length) as numb} -->
				{#each Object.entries(tag.portfolios) as [key, lenght], index (key)}
				<li>{key}</li>
			{/each}
					
				<!-- {(countItems = numb.push(0))} -->
				<!-- {/each} -->
					
				
				</p>

			</li>

		

		{/each}
</ul>

		
		</div>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}



<style>

/* #tagsBar{
position: absolute;
display: inline-grid;

} */
@import url("//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.3/css/font-awesome.min.css");
#tagsBar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
  z-index: 100000;
}
#tagsBar li a{
    display:block;
    height:em;
    width:5em;
    text-indent:-500em;
    line-height:5em;
    text-align:center;
    color: #ff5c62;
    background: #fff4f5;
    position: relative;
    border-bottom: 1px solid #ffe2e3;
    transition: background 0.3s ease-in-out;
}
#tagsBar li a:before {
  font-family: FontAwesome;
  speak: none;
  text-indent: 0em;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 1.4em;
}
#tagsBar li a.search:before {
  content: "\f002";
}
#tagsBar li a.archive:before {
  content: "\f187";
}
#tagsBar li a.pencil:before {
  content: "\f040";
}
#tagsBar li a.contact:before {
  content: "\f003";
}
#tagsBar li a.about:before {
  content: "\f007";
}
#tagsBar li a.home:before {
  content: "\f015";
}
#tagsBar li a:hover{
  background: #ff5c62;
  color: #fff;
}
#tagsBar li.current a {
  background: #ff5e5e;
  color: #fff;
}
#tagsBar li a.active {
  background: #ff5e5e;
  color: #fff;
}
#tagsBar li a.active:after{
    position:absolute;
    left:5em;
    top:0;
    content:"";
    border:2.5em solid transparent;
    border-left-color:#ff5c62;
    border-width: 2.5em 1em
}
#tagsBar li{
    position:relative;
}
#tagsBar li:after{
    content: attr(title);
    position:absolute;
    left:5em;
    top:0;
    height:5em;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    text-transform:uppercase;
    background:#ff5c62;
    padding:2em;
    transition: all 0.3s ease-in-out;
    visibility:hidden;
    opacity:0;
}
#tagsBar li:hover:after{
    visibility:visible;
    opacity:1;
}
@media screen and (max-height: 34em){
  #tagsBar li{
    font-size:70%;
  }
}


</style>


