<script>
	

	import { modal } from '$lib/stores/store.js';
	import { fade } from 'svelte/transition';
	import { goto, invalidate } from '$app/navigation';

	function reloadPage() {
		const thisPage = window.location.pathname;
		goto('/').then(() => goto(thisPage));
	}

	const close = () => {
		$modal.open = false;
		if ($modal.action == 'reload') {
			reloadPage();
			console.log('reload');
		}
	};

	let open = () => $modal.open;
	let openModal = () => ($modal.open = true);

	const handle_keydown = (e) => {
		if (e.key === 'Escape') return close();
	};

	export const setModal= (d) =>{
		$modal= {...d}
	}


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
	@import '../../lib/css/picocss/pico/scss/themes/default';
	@import '../../lib/css/picocss/pico/scss/content/button';
	@import '../../lib/css/picocss/pico/scss/components/card';
	@import '../../lib/css/picocss/pico/scss/components/modal';

	dialog {
		z-index: 900042;
		background-color: rgba(8, 96, 130, 0.9);

		article {
			min-width: 18rem;
		}
	}
</style>
