<script>
	import { onMount, onDestroy } from 'svelte';
	import { three_state } from '$lib/stores/store.js';
	import { browser } from '$app/environment';

	import * as THREE from 'three';
	// import { TweenMax } from 'gsap';
	// import Power2 from 'power2';
	// import Power1 from 'power2';

	import { types, val } from '@theatre/core';
	// import studio from '@theatre/studio';

  import {getProject} from '@theatre/core';
// const { getProject } = _getProject;



	import projectState from '$lib/theatre/theatre-state.json';
	import macbook from '$lib/theatre/macbook01.json';

  // SHORTEN 3d coordinates 

  // console.log(macbook["geometries"])
  
//   function strip(prec,num) {
//     return (parseFloat(num).toPrecision(prec));
// }   strip(4,12.12431241234123512354123412354123512341234512345)

// (\d\d?)\.(\d)(\d)(\d)(\d)(\d+)
// $1.$2$3$4


	const project = getProject('THREE', { state: projectState });
	const sheet = project.sheet('Animated scene');
	// project.ready.then(() => sheet.sequence.play({ iterationCount: Infinity }));

	onMount(() => {
		/**
		 * Renderer
		 */
		// studio.initialize();
		// studio.ui.hide()
		const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

		const loader = new THREE.ObjectLoader();
		THREE.Cache.enabled = false;
		const scene = new THREE.Scene();
		if (browser) {
			const sequenceLength = val(sheet.sequence.pointer.length);

			three_state.subscribe((d) => {
				

				if (d === true) {
					project.ready.then(() => sheet.sequence.play({ range: [0, 1.5] }));
				} else {
					if (d === false) {
						project.ready.then(() => sheet.sequence.play({ range: [2, 4] }));
						
					}
				}
			});

			let container = document.getElementById('vieport3d');
			/**
			 * Scene
			 */

			const camera = new THREE.PerspectiveCamera(
				70,
				window.innerWidth / window.innerHeight,
				10,
				700
			);
			camera.position.z = 50;

			// LAPTOP
			const laptop = loader.parse(macbook);
			laptop.rotation.x = 0.506;
			laptop.rotation.x = 0.3;
			laptop.rotation.x = -2;
			scene.add(laptop);

			const animationOBJ = sheet.object('sad', {
				rotation: types.compound({
					x: types.number(laptop.rotation.x, { range: [-2, 2] }),
					y: types.number(laptop.rotation.y, { range: [-2, 2] }),
					z: types.number(laptop.rotation.z, { range: [-2, 2] })
				}),
				position: types.compound({
					xx: types.number(laptop.position.x, { range: [-200, 200] }),
					yy: types.number(laptop.position.y, { range: [-200, 200] }),
					zz: types.number(laptop.position.z, { range: [-200, 200] })
				})
			});

			animationOBJ.onValuesChange((values) => {
				const { x, y, z } = values.rotation;
				const { xx, yy, zz } = values.position;

				laptop.rotation.set(x * Math.PI, y * Math.PI, z * Math.PI);
				laptop.position.set(xx, yy, zz);
			});

			/*
			 * Lights
			 */
			const pointLight1 = new THREE.PointLight(0x222222, 1, 100);
			pointLight1.position.set(3.127, 4.56, 1.403);
			scene.add(pointLight1);

			const pointLight2 = new THREE.PointLight(0x222222, 0.95, 100);
			pointLight2.position.set(3.356, 1.503, 0.802);
			scene.add(pointLight2);

			const ambientLight = new THREE.AmbientLight(0x222222, 140);
			ambientLight.position.set(-10.124, 2.748, 2.613);
			scene.add(ambientLight);

			renderer.shadowMap.enabled = true;
			renderer.shadowMap.type = THREE.PCFSoftShadowMap;
			renderer.setSize(window.innerWidth, window.innerHeight);
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

			renderer.render(scene, camera);
			container.appendChild(renderer.domElement);

			function tick() {
				// console.log(sheet.sequence.position);
				// if(sheet.sequence.position>=2.566){
				//   // sheet.sequence.pause();
				//   console.log("stop");
				// }
				renderer.render(scene, camera);

				window.requestAnimationFrame(tick);
			}

			tick();
			/**
			 * Handle `resize` events
			 */
			window.addEventListener(
				'resize',
				function () {
					camera.aspect = window.innerWidth / window.innerHeight;
					camera.updateProjectionMatrix();

					renderer.setSize(window.innerWidth, window.innerHeight);
					renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
				},
				false
			);
		}

		// on mount
	});
</script>

<div id="vieport3d" />

<style>
	#vieport3d {
		width: 100%;
		height: 100%;
		/* background-color: gray; */
		position: absolute;
	}
</style>
