<script>
	import logotype from '$lib/images/logotype.svg';
	import logotype_safari from '$lib/images/logotype_safari.svg';
	import messageIcon from '$lib/images/messageIcon.svg';
	// import clientsIcon from '$lib/images/clientsIcon.svg';
	import { fade, scale } from 'svelte/transition';
	import { quintOut } from "svelte/easing";
	import { tag, portfolios_all } from '$lib/stores/store.js';
	let mobile = false;
	let safari = false;

	import { isMacSafari } from 'svelte-browser';
	if (isMacSafari) {
		safari = true;
	} else {
		safari = false;
		let logotype = '../logotype_safari.svg';
	}

	function resetTags() {
		tag.set('all');
	};

	$: hamburger = mobile ? "close-hamburguer" : "";

	let _portfolios={};
	portfolios_all.subscribe((value) => {

		//console.log(_portfolios);
		_portfolios = value;
	
	});


	function on_key_down(event) {
        
		
		//console.log(event);
        if (event.repeat) return;

        // In the switch-case we're updating our boolean flags whenever the
        // desired bound keys are pressed.
        switch (event.key) {
            case "Control":
                is_ctrl_down = true;

                // By using `preventDefault`, it tells the Browser not to handle the
                // key stroke for its own shortcuts or text input.
                event.preventDefault();
                break;

            case "h":
                is_h_down = true;

                event.preventDefault();
                break;
        }

        // If both of boolean flags were truthy, that means our
        // keybind can be activated.
        if (is_ctrl_down && is_h_down) {
            on_bind();
        }
    }



</script>



<nav id="header" class="fixed w-full top-0 text-white lg:bg-opacity-100">
	<div
		class="visible_false w-full max-w-4xl container mx-auto flex flex-wrap items-center justify-between mt-0 py-2"
	>
		<div class="logo_div">
			<a href="/realizacje" on:click={() => resetTags()}>
				{#if !safari}
					<img src={logotype} alt="Zbigniew Adam Karski" width="400" height="400" />
				{/if}

				{#if safari}
					<img src={logotype_safari} alt="Zbigniew Adam Karski" width="400" height="400" />
				{/if}
			</a>

			<div class="text-slogan">
				<p class="text-gray-700 text-4xl">Lepsza wersja Twojej strony</p>
			</div>
		</div>
		<div class="block lg:hidden pr-4">
			<a
			id="nav-toggle"
			on:click={() => (mobile = !mobile)}
			on:keypress={() => (mobile = !mobile)}
			class="button focus:outline-none focus:shadow-outline"
			>
				<div class="hamburguer {hamburger}">
				<div class="lines line-top" />
				<div class="lines line-mid" />
				<div class="lines line-bottom" />
				</div>
			</a>
		</div>
		<div
			class=" w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 lg:bg-opacity-0 text-black p-4 lg:p-0 z-20"
			id="nav-content"
		>
			<ul class="list-reset lg:flex justify-end flex-1 items-center NavMenuIcons">
				


				
			
					<!-- <ul class="" style="display: none;">
						<li class=""><a href="/realizacje/Back2Roots" class="mobileMenu_a s-4-WZKkKksjVk" alt="Meble i elementy wnętrz na zamówienie">Back2Roots</a> </li><li class="s-4-WZKkKksjVk"><a href="/realizacje/Edytor-Wyswig" class="mobileMenu_a s-4-WZKkKksjVk" alt="Edytor szablonów Ebay / Allegro">Edytor Wyswig</a> </li><li class="s-4-WZKkKksjVk"><a href="/realizacje/Pasieka-Leban" class="mobileMenu_a s-4-WZKkKksjVk" alt="Strona przedsiębiorstwa pasiecznego">Pasieka Leban</a> </li><li class="s-4-WZKkKksjVk"><a href="/realizacje/Beskidzka-Izba-Lekarska" class="mobileMenu_a s-4-WZKkKksjVk" alt="Strona korporacyjna izby lekarskiej. ">Beskidzka Izba Lekarska</a> </li><li class="s-4-WZKkKksjVk"><a href="/realizacje/Kameleon" class="mobileMenu_a s-4-WZKkKksjVk" alt="Strona agencji reklamowej">Kameleon</a> </li><li class="s-4-WZKkKksjVk"><a href="/realizacje/Skup-samochodow" class="mobileMenu_a s-4-WZKkKksjVk" alt="Strona komisu samochodowego">Skup samochodów</a> </li><li class="s-4-WZKkKksjVk"><a href="/realizacje/Growbox" class="mobileMenu_a s-4-WZKkKksjVk" alt="Szablon aukcji Allegro">Growbox</a> </li><li class="s-4-WZKkKksjVk"><a href="/realizacje/ASPrinters-logotyp" class="mobileMenu_a s-4-WZKkKksjVk" alt="Logotyp branża drukarska">ASPrinters logotyp</a> </li><li class="s-4-WZKkKksjVk"><a href="/realizacje/DirectParts-Logo" class="mobileMenu_a s-4-WZKkKksjVk" alt="Logotyp branża IT">DirectParts Logo</a> </li><li class="s-4-WZKkKksjVk"><a href="/realizacje/Malowanie-Dachow-FJ" class="mobileMenu_a s-4-WZKkKksjVk" alt="Profesjonalne usługi malowania dachów, metodą natryskową i tradycyjnie. ">Malowanie Dachów FJ </a> </li><li class="s-4-WZKkKksjVk"><a href="/realizacje/Opusel" class="mobileMenu_a s-4-WZKkKksjVk" alt="Identyfikacja - Oleje liturgiczne">Opusel</a> </li><li class="s-4-WZKkKksjVk"><a href="/realizacje/Simon-Renovierungen" class="mobileMenu_a s-4-WZKkKksjVk" alt="Logotyp norweskiej firmy budowlanej">Simon Renovierungen</a> </li><li class="s-4-WZKkKksjVk"><a href="/realizacje/Seve" class="mobileMenu_a s-4-WZKkKksjVk" alt="Banery reklamowe - wypożyczalnia sprzętu budowlanego ">Seve</a> </li><li class="s-4-WZKkKksjVk"><a href="/realizacje/Projektowanie-i-pielegnacja-ogrodow" class="mobileMenu_a s-4-WZKkKksjVk" alt="usługi z zakresu architektury">Projektowanie i pielęgnacja ogrodów </a> </li><li class="s-4-WZKkKksjVk"><a href="/realizacje/Elektrolabs" class="mobileMenu_a s-4-WZKkKksjVk" alt="Usługi - elektryk z uprawnieniami">Elektrolabs</a> </li><li class="s-4-WZKkKksjVk"><a href="/realizacje/Branding" class="mobileMenu_a s-4-WZKkKksjVk" alt="Etykieta soku aroniowego ">Branding</a> </li><li class="s-4-WZKkKksjVk"><a href="/realizacje/Moroccan" class="mobileMenu_a s-4-WZKkKksjVk" alt="Plakat występu zespołu baletu współczesnego Moroccan">Moroccan</a> </li><li class="s-4-WZKkKksjVk"><a href="/realizacje/Benica" class="mobileMenu_a s-4-WZKkKksjVk" alt="Logotyp - naturalne kosmetyki">Benica</a> </li><li class="s-4-WZKkKksjVk"><a href="/realizacje/Royal-Canin-Segmnet-Day" class="mobileMenu_a s-4-WZKkKksjVk" alt="Plakat spotkań integracyjnych Royal Canin">Royal Canin - Segmnet Day </a> </li><li class="s-4-WZKkKksjVk"><a href="/realizacje/Bisico" class="mobileMenu_a s-4-WZKkKksjVk" alt="Katalog produktów">Bisico</a> </li></ul> -->
				
					{#await _portfolios}
					
					{#each _portfolios as elem}
					<li>
						<a href="/realizacje/{elem.slug}" on:click={() => (mobile = !mobile)} class="mobileMenu_a" alt={elem.subtitle}>{elem.title} </a>
					</li>
						
					{/each}
					{/await}
				
					



				<li class="mr-3">
					<a
						class="navlink mx-auto lg:mx-0 text-gray-500 font-bold mt-4 lg:mt-0 py-3 px-5 focus:outline-none"
						href="/kontakt"
					>
						<img width="75" height="60" src={messageIcon} alt="wyślij wiadomość!" /></a
					>
					<div class="stackInfo">Kontakt</div>
				</li>
			</ul>
		</div>
	</div>
</nav>




{#if mobile == true}
<div class="mobileMenu " transition:scale={{ delay: 150, duration: 400, easing: quintOut }}>
			<div class="back" >
				<div class="bg"></div>
				<div class="bg bg2"></div>
				<div class="bg bg3"></div>
			</div>
	<ul>
		<li >
			<a href="/realizacje" on:click={() => (mobile = !mobile)} class="mobileMenu_a">Realizacje </a>
		</li>
		<li>
			<a href="/kontakt" on:click={() => (mobile = !mobile)} class="mobileMenu_a">Kontakt</a></li>
	
	
		<ul style="display:none">
			
			<!-- {#await _portfolios then data}
			
			{#each data as elem}
			<li>
				<a href="/realizacje/{elem.slug}" on:click={() => (mobile = !mobile)} class="mobileMenu_a" alt={elem.subtitle}>{elem.title} </a>
			</li>
				
			{/each}
			{/await} -->
		
		</ul>


	
		</ul>
	




	
				<div class="hamburguer {hamburger}" on:click={() => (mobile = !mobile)} on:keydown={on_key_down}>
				<div class="lines line-top white" />
				<div class="lines line-mid white" />
				<div class="lines line-bottom white" />
				</div>
			
</div>
{/if}




<style>
	

	.logo_div {
		transform: scale(0.7);
		transition: all 0.5s ease;
	}



	.bg {
  animation:slide 7s ease-in-out infinite alternate;
  background-image: linear-gradient(-60deg, #016889 50%, #0095BD 50%);
  bottom:0;
  left:-50%;
  opacity:.5;
  position:fixed;
  right:-50%;
  top:0;
  z-index:-1;
}

.bg2 {
  animation-direction:alternate-reverse;
  animation-duration:9s;
  filter: blur(18px);
}

.bg3 {
	filter: blur(18px);
  animation-duration:13s;
}



@keyframes slide {
  0% {
    transform:translateX(-25%);
  }
  100% {
    transform:translateX(25%);
	
  }
}

</style>
