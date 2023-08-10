<script>
	import { modal } from '$lib/stores/store.js';
	import { fade } from 'svelte/transition';
	import { goto, invalidate } from '$app/navigation';

	function reloadPage() {
		const thisPage = window.location.pathname;
		goto(thisPage);
	}

	const close = () => ($modal.open = false)
        // if($modal.action == 'reload'){reloadPage()}


                            
    

	let open = () => $modal.open;
	let openModal = () => ($modal.open = true);

	const handle_keydown = (e) => {
		// if (e.key === 'Escape') return close();
	};

	// import '../../lib/picocss/pico/scss/pico.scss';
</script>

<svelte:window on:keydown|once={handle_keydown} />

{#if $modal.open}
	<dialog open on:click|self|preventDefault|once={close} on:keydown={close} transition:fade>
		<article>
			<h3>{$modal.title}</h3>
			<p>
				{$modal.message}
			</p>
			<footer>
				<button on:click|once={close}>{$modal.button}</button>
			</footer>
		</article>
	</dialog>
{/if}

<style lang="scss">
	@import '../../lib/picocss/pico/scss/themes/default';
	@import '../../lib/picocss/pico/scss/content/button';
	@import '../../lib/picocss/pico/scss/components/card';
	@import '../../lib/picocss/pico/scss/components/modal';

	dialog {
		z-index: 900042;
		background-color: rgba(8, 96, 130, 0.9);

		article {
			min-width: 18rem;
		}
	}
</style>
