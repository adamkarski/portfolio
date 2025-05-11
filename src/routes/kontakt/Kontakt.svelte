
<script lang="ts">
  import { onMount } from "svelte";
  let name = "";
  let email = "";
  let message = "";
  let status = "";
  let isRecording = false;
  let audioBlob: Blob | null = null;
  let mediaRecorder: MediaRecorder | null = null;
  let audioChunks: BlobPart[] = [];

  async function handleSubmit() {
    if (!name || !email || (!message && !audioBlob)) {
      status = "Wypełnij wszystkie wymagane pola albo nagraj wiadomość.";
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    if (audioBlob) {
      formData.append("audio", audioBlob, "audio.webm");
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        status = "Dzięki za wiadomość! Odezwiemy się wkrótce.";
        name = "";
        email = "";
        message = "";
        audioBlob = null;
        audioChunks = [];
      } else {
        status = "Ups! Coś poszło nie tak.";
      }
    } catch (e) {
      status = "Błąd połączenia. Spróbuj później.";
    }
  }

  function toggleRecording() {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  }

  function startRecording() {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.ondataavailable = (e) => {
        audioChunks.push(e.data);
      };
      mediaRecorder.onstop = () => {
        audioBlob = new Blob(audioChunks, { type: "audio/webm" });
      };
      mediaRecorder.start();
      isRecording = true;
    });
  }

  function stopRecording() {
    mediaRecorder?.stop();
    isRecording = false;
  }
</script>

<style>
  form {
    max-width: 600px;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-family: sans-serif;
  }
  input, textarea, button {
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  button.recording {
    background: red;
    color: white;
  }
  .status {
    margin-top: 1rem;
    font-weight: bold;
  }
</style>

<form on:submit|preventDefault={handleSubmit}>


  <section class="bg-gray-100 p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
    <h2 class="text-2xl font-bold mb-4">Masz pomysł? Porozmawiajmy!</h2>
    <form class="space-y-4">
      <div class="flex items-center border-b border-gray-300 py-2">
        <svg class="w-6 h-6 text-gray-500 mr-3" ...></svg>
        <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Imię i nazwisko" aria-label="Imię i nazwisko">
      </div>
      <div class="flex items-center border-b border-gray-300 py-2">
        <svg class="w-6 h-6 text-gray-500 mr-3" ...></svg>
        <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" placeholder="Email" aria-label="Email">
      </div>
      <div class="flex items-start border-b border-gray-300 py-2">
        <svg class="w-6 h-6 text-gray-500 mr-3 mt-2" ...></svg>
        <textarea class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Twoja wiadomość" aria-label="Wiadomość"></textarea>
      </div>
      <!-- Sekcja nagrywania notatki głosowej -->
      <div class="flex items-center space-x-4">
        <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          🎤 Nagraj notatkę
        </button>
        <audio controls class="hidden"></audio>
      </div>
      <button type="submit" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Wyślij wiadomość
      </button>
    </form>
  </section>


  <h2>Napisz lub nagraj wiadomość</h2>
  <input type="text" placeholder="Imię" bind:value={name} required />
  <input type="email" placeholder="E-mail" bind:value={email} required />
  <textarea rows="5" placeholder="Wiadomość (możesz też nagrać głos)" bind:value={message} />
  <button type="button" class:recording={isRecording} on:click={toggleRecording}>
    {isRecording ? "Zatrzymaj nagrywanie" : "Nagraj wiadomość głosową"}
  </button>
  {#if audioBlob}
    <audio controls {src} bind:src={URL.createObjectURL(audioBlob)} />
  {/if}
  <button type="submit">Wyślij</button>
  {#if status}
    <div class="status">{status}</div>
  {/if}
</form>
