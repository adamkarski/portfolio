<script>
	import messageIcon from '$lib/images/messageIcon.svg';
</script>

<link href="//fonts.googleapis.com/css?family=Source+Sans+Pro:400,700" rel="stylesheet" />
<link href="//fonts.googleapis.com/css2?family=Archivo+Black&display=swap" rel="stylesheet" />

<nav id="header" class="fixed w-full top-0 text-white lg:bg-opacity-100">
	<div
		class="visible_false w-full max-w-4xl container mx-auto flex flex-wrap items-center justify-between mt-0 py-2"
	>
		<div class="logo_div">
			<a href="/">
				<!-- <img src={logotype} alt="Zbigniew Karski" width="400" height="400" /> -->
			</a>

			<div class="text-slogan">
				<p class="text-gray-700 text-4xl">Lepsza wersja Twojej strony</p>
			</div>
		</div>
		<div class="block lg:hidden pr-4">
			<button id="nav-toggle" class="focus:outline-none focus:shadow-outline"
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
			<ul class="list-reset lg:flex justify-end flex-1 items-center">
				<li class="mr-3">
					<a
						class="navlink mx-auto lg:mx-0 text-gray-500 font-bold mt-4 lg:mt-0 py-3 px-5 focus:outline-none"
						href="/realizacje">Realizacje</a
					>
				</li>

				<li class="mr-3">
					<a
						class="navlink mx-auto lg:mx-0 text-gray-500 font-bold mt-4 lg:mt-0 py-3 px-5 focus:outline-none"
						href="/realizacje">Realizacje</a
					>
				</li>
				<li class="mr-3">
					<a
						class="navlink mx-auto lg:mx-0 text-gray-500 font-bold mt-4 lg:mt-0 py-3 px-5 focus:outline-none"
						href="/kontakt"
					>
						<img width="75" height="60" src={messageIcon} alt="wyślij wiadomość!" /></a
					>
				</li>
			</ul>
		</div>
	</div>
</nav>


<style>
	

	.logo_div {
		transform: scale(0.7);
		transition: all 0.5s ease;
	}
</style>
