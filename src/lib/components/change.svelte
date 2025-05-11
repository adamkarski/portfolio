<script>
    import { onMount, onDestroy } from 'svelte';
    export let Cange;
    const colors = [
      "#FF6B6B", // czerwony róż
      "#6BCB77", // mięta
      "#4D96FF", // niebieski
      "#FFD93D", // żółty
      "#FF6FFB", // róż neon
      "#3BE8B0", // turkus
      "#F55C47", // koral
      "#5F6CAF", // stalowy niebieski
    ];
  
    let currentColor = colors[0];
    let container;
  
    let interval;
  
    onMount(() => {
      interval = setInterval(() => {
        // Wybierz losowy kolor, ale nie ten sam co obecny
        let newColor;
        do {
          newColor = colors[Math.floor(Math.random() * colors.length)];
        } while (newColor === currentColor);
  
        currentColor = newColor;
      }, getRandomTime());
    });
  
    onDestroy(() => {
      clearInterval(interval);
    });
  
    function getRandomTime() {
      // Zwraca losowy czas między 5 a 10 sekund (5000–10000 ms)
      return Math.floor(Math.random() * 1000) + 1000;
    }
  </script>
  
  <style>
    .background-container {
      width: 100%;
      height: 100vh;
      transition: background-color 3s ease-in-out;
    }
  </style>
  
  <div bind:this={container} class="background-container" style="background-color: {currentColor};">
    <!-- Twoja zawartość -->
  </div>