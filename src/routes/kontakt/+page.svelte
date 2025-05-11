<script lang="ts">
	import { fade } from 'svelte/transition';
	import { onMount, onDestroy } from 'svelte';
	import emailjs from '@emailjs/browser';
	import { browser } from '$app/environment';
	import { visibleMessage, three_state, three_page } from '$lib/stores/store.js';
	import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';

	let sendemailMessage = '';
	let isRecording = false;
	let mediaRecorder;
	let audioBlob: Blob | null = null;
	let audioUrl: string | null = null;

	let animation;
	let lottiePlayerInstance; // Do przechowywania instancji Lottie
	let handleLottieComplete; // Do przechowywania funkcji obsługi zdarzenia 'complete'

	function mouseLeave() {
		if (animation && typeof animation.play === 'function') animation.play();
		if (animation && typeof animation.setLooping === 'function') animation.setLooping(false);
	}
	function mouseEnter() {
		if (animation && typeof animation.play === 'function') animation.play();
		if (animation && typeof animation.setLooping === 'function') animation.setLooping(true);
	}

	async function toggleRecording() {
		if (isRecording) {
			mediaRecorder.stop();
			isRecording = false;
		} else {
			const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
			mediaRecorder = new MediaRecorder(stream);
			mediaRecorder.start();
			isRecording = true;

			mediaRecorder.ondataavailable = (e) => {
				audioBlob = e.data;
				audioUrl = URL.createObjectURL(audioBlob);
			};
		}
	}

	onMount(() => {
		// Konfiguracja animacji Lottie
		if (animation && typeof animation.getLottie === 'function') {
			lottiePlayerInstance = animation.getLottie();
			if (lottiePlayerInstance) {
				handleLottieComplete = () => {
					if (animation && typeof animation.setLooping === 'function') {
						animation.setLooping(false);
					}
					if (animation && typeof animation.seek === 'function') {
						animation.seek(195);
					}
				};
				lottiePlayerInstance.addEventListener('complete', handleLottieComplete);

				// Odtwórz animację raz po załadowaniu strony
				if (animation && typeof animation.setLooping === 'function') animation.setLooping(false);
				if (animation && typeof animation.play === 'function') animation.play();

			}
		}

		// Pozostała logika onMount
		$visibleMessage = 'none';
		if (browser) {
			document.body.classList.add('kontakt');
		}
		$three_state = 'play';
		$three_page = 'kontakt';
	});

	onDestroy(() => {
		// Czyszczenie event listenera Lottie
		if (lottiePlayerInstance && handleLottieComplete) {
			lottiePlayerInstance.removeEventListener('complete', handleLottieComplete);
			lottiePlayerInstance = null;
			handleLottieComplete = null;
		}

		// Pozostała logika onDestroy
		$three_state = 'back';
		$visibleMessage = 'initial';
		if (browser) {
			document.body.classList.remove('kontakt');
		}
	});

	function sendEmail(e) {
		emailjs.sendForm('service_cqbrb97', 'template_n68bgz9', e.target, 'DgeB577nZVU1TEiic').then(
			(result) => {
				sendemailMessage = 'Wysłano pomyślnie. Dzięki za wiadomość!';
			},
			(error) => {
				sendemailMessage = 'Błąd wysyłki. Zadzwoń: 883 689 132';
			}
		);
	}

	// Uwaga: walidacja formularza nie jest tutaj w pełni zaimplementowana do użytku z sendEmail.
	// Poniższe funkcje validateForm i isFormValid nie są obecnie połączone z logiką wysyłania.
	// Funkcja onSubmit również nie jest używana w formularzu. Formularz nie ma on:submit={onSubmit}.
	let errors: { [inputName: string]: any } = {};
	function validateForm(data: { [inputName: string]: any }) {
		const requiredFields = ['Imie', 'Nazwisko', 'email', 'message'];
		for (const field of requiredFields) {
			errors[field] = { required: !data[field] };
		}
	}

	function isFormValid(data) {
		return !Object.values(errors).some((e) => e.required);
	}

	function onSubmit(e) {
		const formData = new FormData(e.target);
		validateForm(Object.fromEntries(formData));

		if (isFormValid(Object.fromEntries(formData))) {
			sendEmail(e); // Przekazujemy event, a nie e.target, jeśli sendEmail oczekuje eventu
		}
	}


  let audioChunks = [];

  async function startRecording() {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.start();
    isRecording = true;

    mediaRecorder.addEventListener('dataavailable', event => {
      audioChunks.push(event.data);
    });

    mediaRecorder.addEventListener('stop', () => {
      const audioBlob = new Blob(audioChunks);
      audioUrl = URL.createObjectURL(audioBlob);
      audioChunks = [];
    });
  }

  function stopRecording() {
    mediaRecorder.stop();
    isRecording = false;
  }

</script>

<svelte:head>
	<title>Kontakt - Zbigniew Adam Karski</title>
	<meta name="description" content="Masz pytanie? Nagraj wiadomość lub napisz do mnie. Bez spiny." />
</svelte:head>

<br><br><br><br><br><br><br><br>
<div class="max-w-3xl mx-auto bg-white p-10 rounded-xl shadow-lg">
	<h1 class="text-3xl font-bold mb-6 flex items-center gap-3">
		<a
		on:mouseleave={mouseLeave}
		on:mouseenter={mouseEnter}
		class="navlink mx-auto lg:mx-0 text-gray-500 font-bold mt-4 lg:mt-0 py-3 px-5 focus:outline-none"
		href="/kontakt"
	>
		{#if browser}
			<LottiePlayer
				bind:this={animation}
				src="/images/messageIcon.json"
				autoplay={false}
				loop={true}
				controlsLayout={false}
				controls={false}
				defaultFrame={195}
				hover={true}
				renderer="svg"
				background="transparent"
				height={100}
				width={100}
			/>
		{/if}
	</a>  <span class="text-sm font-light italic"><!-- (nie musisz pisać jak w CV) --></span>
	</h1>
  
	<form on:submit|preventDefault={onSubmit} class="space-y-6">
	  <div class="flex gap-4">
		<div class="w-1/2">
		  <label class="block text-sm mb-1">Imię</label>
		  <input name="Imie" placeholder="Twoje imię" class="w-full p-2 rounded bg-gray-800 text-white" />
		</div>
		<div class="w-1/2">
		  <label class="block text-sm mb-1">Nazwisko</label>
		  <input name="Nazwisko" placeholder="Twoje nazwisko" class="w-full p-2 rounded bg-gray-800 text-white" />
		</div>
	  </div>
  
	  <div>
		<label class="block text-sm mb-1">Email</label>
		<input type="email" name="email" placeholder="Twój email" class="w-full p-2 rounded bg-gray-800 text-white" />
	  </div>
  
	  <div>
		<label class="block text-sm mb-1">Temat</label>
		<select name="subject" class="w-full p-2 rounded bg-gray-800 text-white">
		  <option>Współpraca</option>
		  <option>Zapytanie ofertowe</option>
		  <option>Inne</option>
		</select>
	  </div>
  
	  <div>
		<label class="block text-sm mb-1">Wiadomość</label>
		<textarea name="message" placeholder="O co chodzi?" rows="4" class="w-full p-2 rounded bg-gray-800 text-white"></textarea>
	  </div>
  
	  <div class="flex justify-between items-center mt-4">
		<button type="submit" class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded font-semibold transition">
		  Wyślij
		</button>
  
		<button type="button" on:click={isRecording ? stopRecording : startRecording}
		  class="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded transition font-medium text-white">
		  🎤 {isRecording ? 'Zatrzymaj nagrywanie' : 'Nagraj notatkę głosową'}
		</button>
	  </div>
  
	  {#if audioUrl}
		<audio controls src={audioUrl} class="w-full mt-2 rounded" />
	  {/if}
	</form>
  </div>

<style>
	audio {
		background-color: #111827;
		padding: 0.5rem;
		border-radius: 0.5rem;
	}
</style>
