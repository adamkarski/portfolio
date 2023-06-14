<script>
	// import { page } from '$app/stores';
	import logotype from '$lib/images/logotype.svg';
	import logotype_safari from '$lib/images/logotype_safari.svg';
	import messageIcon from '$lib/images/messageIcon.svg';
	import clientsIcon from '$lib/images/clientsIcon.svg';
	import { fade } from 'svelte/transition';

	let mobile= false;
	let safari = false;

	import { isMacSafari } from 'svelte-browser';
	if (isMacSafari){
			safari= true;
	}else{
		safari= false;
		let logotype= '../logotype_safari.svg';
	
	}

</script>


<div class="mobileMenu {mobile}" >
	<div class="back" />
	<ul>
		<li><a href="/realizacje" 	on:click={() => mobile = !mobile} class="mobileMenu_a">Realizacje </a></li>
		<li><a href="/kontakt" 		on:click={() => mobile = !mobile} class="mobileMenu_a">Kontakt</a></li>
	</ul>
	<button   transition:fade
		id="nav-toggle"  on:click={() => mobile = !mobile} 
		class="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
		><svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
			><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg
		></button
	>
</div>




<nav id="header" class="fixed w-full top-0 text-white lg:bg-opacity-100">
	<div
		class="visible_false w-full max-w-4xl container mx-auto flex flex-wrap items-center justify-between mt-0 py-2"
	>
		<div class="logo_div">
			<a href="/">

				{#if !safari}
				<img src={logotype} alt="Zbigniew Karski" width="400" height="400" />
				{/if}
				
				{#if safari}
				<img src={logotype_safari} alt="Zbigniew Karski" width="400" height="400" />
				{/if}


				
			</a>

			<div class="text-slogan">
				<p class="text-gray-700 text-4xl">Lepsza wersja Twojej strony</p>
			</div>
		</div>
		<div class="block lg:hidden pr-4">
			<button id="nav-toggle" on:click={() => mobile = !mobile} class="focus:outline-none focus:shadow-outline"
				><div class="hamburguer">
					<div class="lines line-top" />
					<div class="lines line-mid" />
					<div class="lines line-bottom" />
				</div></button
			>
		</div>
		<div
			class=" w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 lg:bg-opacity-0 text-black p-4 lg:p-0 z-20"
			id="nav-content"
		>
			<ul class="list-reset lg:flex justify-end flex-1 items-center NavMenuIcons">
				
				<li class="mr-3">
					<a
						class="navlink mx-auto lg:mx-0 text-gray-500 font-bold mt-4 lg:mt-0 py-3 px-5 focus:outline-none"
						href="/realizacje"
					>
						<img width="90" height="80" src={clientsIcon} alt="realizacje i klienci" class="clientsIcon"/></a
					>
					<div class="stackInfo">Klienci</div>
				</li>
				
				<!-- <li class="mr-3">
					<a
						class="navlink mx-auto lg:mx-0 text-gray-500 font-bold mt-4 lg:mt-0 py-3 px-5 focus:outline-none"
						href="/realizacje">Realizacje</a
					>
				</li> -->
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

<!-- <header>
	<div class="corner">
		<a href="https://adamkarski.art">
			<img src={logotype} alt="Zbigniew Karski" />
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			 <li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
				<a href="/sverdle">Sverdle</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner">
		 <a href="https://github.com/sveltejs/kit">
			<img src={github} alt="GitHub" />
		</a> 
	</div>
</header> 
 -->
<style>
	/* header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	} */

	.logo_div {
		transform: scale(0.7);
		transition: all 0.5s ease;
	}
</style>
