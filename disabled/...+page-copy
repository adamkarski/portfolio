<script lang="ts">
	import { fade } from 'svelte/transition';
	import { onMount, onDestroy } from 'svelte';
	import emailjs from '@emailjs/browser';
	import { visibleMessage } from '$lib/stores/store.js';
	import { browser } from '$app/environment';
	import { three_state,three_page } from '$lib/stores/store.js';
	let sendemailMessage = '';

	function sendEmail(e) {
		emailjs.sendForm('service_cqbrb97', 'template_n68bgz9', e, 'DgeB577nZVU1TEiic').then(
			(result) => {
				// console.log('SUCCESS!', result.text);
				sendemailMessage = 'Wysłano pomyślnie';
			},
			(error) => {
				// console.log('FAILED...', error.text);
				sendemailMessage = 'Wystąpił błąd : <br>skontaktuj się ze mną pod numerem  883 689 132';
			}
		);
	}

	let errors: { [inputName: string]: any } = {};

	function isFormValid(data: { [inputName: string]: any }): boolean {
		return !Object.keys(errors).some((inputName) =>
			Object.keys(errors[inputName]).some((errorName) => errors[inputName][errorName])
		);
	}

	function validateForm(data: { [inputName: string]: any }): void {
		if (!isRequiredFieldValid(data.email)) {
			errors['email'] = { ...errors['email'], required: true };
		} else {
			errors['email'] = { ...errors['email'], required: false };
		}

		if (!isRequiredFieldValid(data.Nazwisko)) {
			errors['Nazwisko'] = { ...errors['Nazwisko'], required: true };
		} else {
			errors['Nazwisko'] = { ...errors['Nazwisko'], required: false };
		}

		if (!isRequiredFieldValid(data.Imie)) {
			errors['Imie'] = { ...errors['Imie'], required: true };
		} else {
			errors['Imie'] = { ...errors['Imie'], required: false };
		}
		if (!isRequiredFieldValid(data.message)) {
			errors['message'] = { ...errors['message'], required: true };
		} else {
			errors['message'] = { ...errors['message'], required: false };
		}
	}

	function isRequiredFieldValid(value) {
		return value != null && value !== '';
	}

	function onSubmit(e) {
		const formData = new FormData(e.target);

		const data: any = {};
		for (let field of formData) {
			const [key, value] = field;
			data[key] = value;
		}

		// console.log(data);

		validateForm(data);

		if (isFormValid(data)) {
			//   console.log(data, "sending valid message");
			const elem = document.getElementById('emailForm');

			//   console.log(elem);
			sendEmail('#emailForm');
		} else {
			//   console.log('Invalid Form');
		}
	}

	onMount(() => {
		
		$visibleMessage = 'none';
		if (browser) {
			let body = document.querySelector('body');
			body.classList.add('kontakt');
		}
		$three_state='play';
		$three_page = 'kontakt';
	});
	onDestroy(() => {
		$three_state = 'back';
		$visibleMessage = 'initial';
		if (browser) {
			let body = document.querySelector('body');
			body.classList.remove('kontakt');
		}
		$three_state = false;
	});
</script>

<svelte:head>
	<title>Kontakt - Zbigniew Adam Karski</title>
	<meta name="description" content="Informacje kontaktowe" />
</svelte:head>

<section class="section kontakt" transition:fade>
	<div class="mx-auto m-8 relative sm:w-auto p-10 formContact">
		<div>
			<div
				class="w-full p-8 my-4 md:px-10 lg:w-9/12 lg:pl-20 lg:pr-20 mr-auto rounded-2xl shadow-2xl boxKontakt"
			>
				<div class="flex">
					<h1 class="text-gray-600 text-lg italic">
						Podoba się?<br /><span class="text-sm">Zostaw wiadomość!</span>
					</h1>
				</div>

				<br /><br />

				<form
					id="emailForm"
					class="w-full max-w-lg"
					on:submit|preventDefault={onSubmit}
					transition:fade
				>
					<div class="flex flex-wrap -mx-3 mb-6">
						<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
							<!-- <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
					  Imię
					</label> -->
							<input
								class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
								type="text"
								id="Imie"
								name="Imie"
								value=""
								placeholder="Imie"
							/>

							<p class="text-red-500 text-xs italic" transition:fade>
								{#if errors.Imie && errors.Imie.required}
									Imie wymagane
								{/if}
							</p>
						</div>
						<div class="w-full md:w-1/2 px-3">
							<input
								class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
								type="text"
								id="Nazwisko"
								name="Nazwisko"
								value=""
								placeholder="Nazwisko"
							/>

							<p class="text-red-500 text-xs italic" transition:fade>
								{#if errors.Nazwisko && errors.Nazwisko.required}
									Nazwisko wymagane
								{/if}
							</p>
						</div>
					</div>
					<div class="flex flex-wrap -mx-3 mb-6">
						<div class="w-full px-3">
							<!-- <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
					  Email
					</label> -->
							<input
								class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								type="email"
								id="email"
								name="email"
								value=""
								placeholder="Email"
							/>

							<p class="text-red-500 text-xs italic" transition:fade>
								{#if errors.email && errors.email.required}
									adres email konieczny
								{/if}
							</p>

							<p class="text-gray-600 text-xs italic">
								Podaj proszę adres email. Będzie łatwiej o kontakt
							</p>
						</div>
					</div>
					<div class="flex flex-wrap -mx-3 mb-6">
						<div class="w-full px-3">
							<textarea
								placeholder="Wiadomość"
								id="message"
								name="message"
								value=""
								class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
							/>

							<p class="text-red-500 text-xs italic" transition:fade>
								{#if errors.message && errors.message.required}
									Wiadomość jest pusta!
								{/if}
							</p>

							<!-- <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque"> -->
						</div>
						<div class="w-full md:w-1/3 px-3 mb-6 md:mb-0" />
						<div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
							<button
								type="submit"
								class="uppercase text-sm font-bold tracking-wide text-gray-100 p-3 rounded-lg w-full
					  focus:outline-none focus:shadow-outline backgr_primary"
							>
								Wyślij
							</button>
						</div>
					</div>
					<div class="text-gray-600 text-lg italic succesMessage" transition:fade>
						{sendemailMessage}
					</div>
				</form>

				<!-- <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5"> -->
			</div>
		</div>
	</div>
</section>

<style>
	form > div {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	:global(.error-message) {
		color: tomato;
		flex: 0 0 100%;
		margin: 0 2px;
		font-size: 0.8em;
	}
</style>
