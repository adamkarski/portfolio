<script>
    import { onMount, tick } from "svelte";
    let imgElement; 
    let containerElement; 
  
    // Parametry wejściowe
    export let src = "https://strapi.adamkarski.art/uploads/Pielegnacja_ogrodow_webpage_f47aaf23e4.jpg"; // Domyślny obrazek
    export let height = '400px';  // Wysokość kontenera
    export let minSteps = 3; // Minimalna liczba kroków przewijania
    export let maxSteps = 5; // Maksymalna liczba kroków przewijania
    export let scrollIntervalMin = 1; // Minimalny czas opóźnienia między etapami
    export let scrollIntervalMax = 3; // Maksymalny czas opóźnienia między etapami
    export let restartDelay = 5000; // Czas w ms do automatycznego restartu animacji
    export let initialDelay = 5000; // Czas w ms początkowego opóźnienia przed pierwszą animacją

    let isScrolling = false;
    let scrollTimeouts = [];
    let actualScrollableDist = 0;
    let scrollAmountPerStep = 0;
    let currentTotalSteps = 0;
    let imageLoaded = false;
    let initialAnimationPlayedOnce = false; // Flaga, czy pierwsza animacja (z initialDelay) została już uruchomiona

    // IntersectionObserver
    let observer;
    let isInViewport = false;

    // Funkcja do obliczania parametrów przewijania
    async function setupScrollParameters() {
      if (!imgElement || !containerElement) return false;

      // Poczekaj na renderowanie DOM, aby wymiary były dostępne
      await tick(); 

      const imgHeight = imgElement.offsetHeight;
      const containerHeight = containerElement.offsetHeight;

      actualScrollableDist = imgHeight - containerHeight;
    //   console.log(`Image height: ${imgHeight}px, Container height: ${containerHeight}px, Scrollable distance: ${actualScrollableDist.toFixed(2)}px`);

      if (actualScrollableDist <= 0) {
        // console.warn("Obraz nie jest wyższy od kontenera. Przewijanie nie będzie efektywne.");
        return false;
      }

      currentTotalSteps = Math.floor(Math.random() * (maxSteps - minSteps + 1)) + minSteps;
      if (currentTotalSteps <= 0) currentTotalSteps = 1; // Zapewnij co najmniej jeden krok

      scrollAmountPerStep = actualScrollableDist / currentTotalSteps;
    //   console.log(`Obliczono ${currentTotalSteps} kroków, każdy przewijający o ${scrollAmountPerStep.toFixed(2)}px`);
      return true;
    }
  
    const startScrolling = async () => {
      if (!imgElement || !containerElement || !isInViewport || !imageLoaded || actualScrollableDist <= 0) {
        // console.error("Image or container not ready for scrolling.");
        return;
      }
      
      
      await resetScroll(); // Resetuj pozycję NATYCHMIAST przed rozpoczęciem nowej animacji
      
    //   console.log(`Start przewijania dla ${currentTotalSteps} kroków.`);
      isScrolling = true;
      let step = 0;
      let topPosition = 0;
  
      const animateScroll = () => {
        if (!isScrolling) return; // Jeśli animacja została zatrzymana (np. przez resetScroll)

        if (step < currentTotalSteps) {
          // Dla ostatniego kroku, upewnij się, że przewija dokładnie do końca.
          if (step === currentTotalSteps - 1) {
            topPosition = -actualScrollableDist;
          } else {
            topPosition -= scrollAmountPerStep;
          }
          // Ogranicz topPosition, aby nie przewinąć za daleko
          topPosition = Math.max(topPosition, -actualScrollableDist);

          imgElement.style.transform = `translateY(${topPosition.toFixed(2)}px)`;
  
          // Randomize the interval between steps to simulate more natural scrolling behavior
          const randomInterval = Math.random() * (scrollIntervalMax - scrollIntervalMin) + scrollIntervalMin;
          const delay = Math.floor(randomInterval * 1000);  // Opóźnienie w milisekundach
  
          const timeout = setTimeout(() => {
            step++;
            animateScroll();
          }, delay);
  
          scrollTimeouts.push(timeout);
        } else {
          // Po zakończeniu animacji resetujemy
          isScrolling = false;
          console.log('Scrolling finished.');
          // Automatyczny restart po określonym czasie
          if (restartDelay > 0) {
            const restartTimeoutId = setTimeout(() => {
              // Upewnij się, że komponent wciąż istnieje i jest w widoku
              if (imgElement && containerElement && isInViewport) {
                startScrolling(); 
              }
            }, restartDelay);
            scrollTimeouts.push(restartTimeoutId);
          }
        }
      };
  
      animateScroll();
    };
  
    // Funkcja do resetowania animacji i pozycji obrazka
    const resetScroll = async () => { // Zmieniono na async
      console.log('Resetting scroll');
      isScrolling = false;
      scrollTimeouts.forEach(clearTimeout);  // Czyszczenie timeoutów
      scrollTimeouts = [];
      if (imgElement) {
        const originalTransition = imgElement.style.transition;
        imgElement.style.transition = 'none'; // Chwilowo wyłącz transition dla natychmiastowego resetu
        imgElement.style.transform = "translateY(0px)";  // Resetujemy pozycję obrazka na początek
        await tick(); // Poczekaj na zastosowanie zmiany w DOM bez transition
        imgElement.style.transition = originalTransition; // Przywróć transition
      }
    };

    async function tryStartInitialAnimationSequence() {
      if (!imageLoaded || actualScrollableDist <= 0 || !isInViewport || isScrolling) {
        console.log("Warunki do startu animacji (tryStartInitial) niespełnione lub już trwa.");
        return;
      }

      if (!initialAnimationPlayedOnce) {
        await resetScroll(); // Pokaż górę obrazka, natychmiast
        
        const initialTimeoutId = setTimeout(() => {
          if (isInViewport && !isScrolling && imageLoaded && actualScrollableDist > 0) {
            console.log("Zakończono początkowe opóźnienie. Startuję przewijanie.");
            initialAnimationPlayedOnce = true; // Oznacz, że sekwencja initialDelay została zakończona pomyślnie
            startScrolling();
          } else {
            console.log("Zakończono początkowe opóźnienie, ale warunki do startu przewijania nie są już spełnione (np. element opuścił viewport).");
          }
        }, initialDelay);
        scrollTimeouts.push(initialTimeoutId);
      } else {
        startScrolling();
      }
    }

    const handleImageLoad = async () => {
      if (imageLoaded) return; // Obsłuż zdarzenie load tylko raz

      imageLoaded = true;
      console.log("Obraz załadowany. Ustawianie parametrów przewijania.");
      await setupScrollParameters(); 

      tryStartInitialAnimationSequence();
    };

    onMount(() => {
      if (typeof IntersectionObserver !== 'undefined') {
        observer = new IntersectionObserver(async (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting) {
            isInViewport = true;
            console.log("Komponent wszedł do viewportu.");
            tryStartInitialAnimationSequence(); 
          } else {
            isInViewport = false;
            console.log("Komponent opuścił viewport.");
            if (isScrolling) await resetScroll(); // Zatrzymaj i zresetuj animację
          }
        }, { threshold: 0.1 }); // Uruchom, gdy co najmniej 10% elementu jest widoczne

        if (containerElement) observer.observe(containerElement);
      } else {
        // Fallback dla przeglądarek bez IntersectionObserver: załóż, że jest zawsze widoczny
        isInViewport = true;
        // Jeśli obraz jest już załadowany (z cache), wywołaj handleImageLoad
        if (imgElement && imgElement.complete) {
          handleImageLoad();
        }
      }

      if (imgElement && imgElement.complete) {
        handleImageLoad(); // Ręcznie wywołaj, jeśli już załadowany
      }

      return () => {
        resetScroll();
        if (observer && containerElement) {
          observer.unobserve(containerElement);
        }
        observer = null;
        initialAnimationPlayedOnce = false; // Reset flagi przy odmontowaniu
      };
    });

  </script>
  
  <style>
    .scroll-image {
      position: relative;
      overflow: hidden;
      width: 100%;
      border-radius: 5px !important;
      box-shadow: 0px 0px 40px 6px rgba(0, 0, 0, 0.08);
      height: var(--height); /* Używamy zmiennej CSS do ustawienia wysokości kontenera */
    }
  
    .scroll-image img {
      width: 100%;
      /* height: auto; jest domyślne i pozwoli obrazowi zachować proporcje */
      /* object-fit: none; oznacza, że obraz nie będzie skalowany przez tę właściwość,
         ale przez width/height. Dla wysokiego obrazu to jest OK. */
      object-fit: "contain"; 
      display: block;
      transition: transform 0.8s ease-in-out; /* Płynna animacja */
    }
  </style>
  
  <div 
    class="scroll-image" 
    style="--height: {height};" 
    bind:this={containerElement} 
    on:click={tryStartInitialAnimationSequence}> <!-- Kliknięcie również próbuje uruchomić sekwencję -->
    <img 
      bind:this={imgElement} 
      {src}
      alt="Scroll Image"
      on:load={handleImageLoad}
    >
  </div>
  