<script>
	import * as THREE from 'three';
	import { onMount } from 'svelte';
	import { three_state, three_page } from '$lib/stores/store.js';
	import { browser } from '$app/environment';
	import { TweenMax } from 'gsap';

	import { onChange, types, val } from '@theatre/core';
	import { getProject } from '@theatre/core';
	// import  {extension}  from '@theatre/r3f/dist/extension';

	// import  _getProject  from '@theatre/core';
	// const { getProject } = _getProject;

	// import studio from '@theatre/studio';

	import projectState from '$lib/theatre/theatre-state.json';
	import macbook from '$lib/theatre/model.json';

	// SHORTEN 3d coordinates

	// console.log(macbook["geometries"])

	// (\d\d?)\.(\d)(\d)(\d)(\d)(\d+)
	// $1.$2$3$4
	// const project = getProject('THREE');
	const project = getProject('THREE', { state: projectState });
	
	const sheet = project.sheet('Animated scene');
	let stage = '';
	let pos;
	let _three_state;
	onMount(() => {
		/**
		 * Renderer
		 */

		// studio.extend(extension);
		// studio.initialize();
		// studio.ui.hide()
		const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

		const loader = new THREE.ObjectLoader();
		THREE.Cache.enabled = false;
		const scene = new THREE.Scene();
		if (browser) {
			const sequenceLength = val(sheet.sequence.pointer.length);

			onChange(sheet.sequence.pointer.position, (_pos) => {
				pos = _pos;
					
				
				if (_pos.toFixed(1) == 3.5||_pos.toFixed(1) == 3.4) {
					sheet.sequence.pause();
				
				}
			});

			
			three_page.subscribe((d) => {
				console.log(d);
				if (d == 'realizacje_single') {
					project.ready
					.then(() => sheet.sequence.play({rate:  0.09 ,range: [3.55, 9], iterationCount: Infinity, direction: 'alternateReverse' }))

					
					// .then(() => sheet.sequence.play({ range: [3.5, 9], rate:  0.4 }))
					// .then(() => sheet.sequence.play({ direction: 'reverse', range: [3.5, 6], rate:  0.4 }))
					// .then(() => sheet.sequence.play({ rate:  0.4 }));
				}
				if (d === 'kontakt' ) {
					if (pos == 0) {
						project.ready.then(() => sheet.sequence.play({ range: [0, 1.4], rate: 1 }));
					} else if (pos == 3.5) {
						project.ready.then(() => {
							sheet.sequence.play({ range: [0, 1.4], rate: 1 });
						});
					}
				}
				if (d === 'realizacje' && $three_state == 'back') {
					if (pos == 1.4) {
						project.ready.then(() => sheet.sequence.play({ range: [1.4, 3.5], rate: 2 }));
					}
					if(pos >= 3.5 ){
						console.log('realizacje_ back_ backward')
						
						project.ready.then(()=>sheet.sequence.pause()).then(() => sheet.sequence.play({  rate: 1.5, direction: 'reverse'}));

					}
				}
				if (d === '') {
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
				}),
				camera: types.compound({
					zoom: types.number(camera.zoom, { range: [-5, 5] }),
					fov: types.number(camera.fov, { range: [0, 400] })
				}),
				logos: types.compound({
					rotation_x: types.number(laptop.children[6].rotation.x, { range: [-5, 5] }),
					rotation_y: types.number(laptop.children[6].rotation.y, { range: [-5, 5] }),
					rotation_z: types.number(laptop.children[6].rotation.z, { range: [-5, 5] }),

					position_x: types.number(laptop.children[6].position.x, { range: [-200, 200] }),
					position_y: types.number(laptop.children[6].position.y, { range: [-200, 200] }),
					position_z: types.number(laptop.children[6].position.z, { range: [-200, 200] })
				})
			});

			animationOBJ.onValuesChange((values) => {
				const { x, y, z } = values.rotation; // laptop rotation
				const { xx, yy, zz } = values.position; // laptop position
				const { lrx, lry, lrz } = values.rotation; // logos rotation

				let logo = laptop.children[5];

				camera.fov = values.camera.fov;
				camera.zoom = values.camera.zoom;
				camera.updateProjectionMatrix();

				logo.position.set(
					values.logos.position_x,
					values.logos.position_y,
					values.logos.position_z
				);
				logo.rotation.set(
					values.logos.rotation_x,
					values.logos.rotation_y,
					values.logos.rotation_z
				);
				laptop.rotation.set(x * Math.PI, y * Math.PI, z * Math.PI);
				laptop.position.set(xx, yy, zz);
			}); /////

			//   let logo2= laptop.children[5].clone()
			//   console.log(logo2)
			//   logo2.position.x = logo2.position.x+3

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

			function fadeObject(obj, dir, time, delay) {
				if ((dir = 'in')) {
					setTimeout(() => {
						TweenMax.to(obj.material, time, { opacity: 1 });
					}, delay);
				} else {
					setTimeout(() => {
						TweenMax.to(obj.material, time, { opacity: 0 });
					}, delay);
				}
			}

			function updateTexture(object, text) {
				new THREE.TextureLoader().load(
					text,
					(texture) => {
						//Update Texture
						object.material.map = texture;
						object.material.map.needsUpdate = true;
						object.material.needsUpdate = true;
					},
					(xhr) => {
						//Download Progress
						console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
					},
					(error) => {
						//Error CallBack
						console.log('An error happened' + error);
					}
				);
			}

			// 			updateTexture(laptop.children[0], 'https://threejs.org/examples/textures/uv_grid_opengl.jpg');

			// 			const texture =  'https://threejs.org/examples/textures/uv_grid_opengl.jpg'
			//   //scene.background = texture;

			//   scene.background = blurTexture( texture );

			function blurTexture(texture) {
				const width = texture.image.width;
				const height = texture.image.height;

				const cameraRTT = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
				const sceneRTT = new THREE.Scene();

				// render targets

				const renderTargetTemp = new THREE.WebGLRenderTarget(width, height);
				const renderTargetFinal = new THREE.WebGLRenderTarget(width, height);

				// shader materials

				const hBlurMaterial = new THREE.ShaderMaterial({
					vertexShader: THREE.HorizontalBlurShader.vertexShader,
					fragmentShader: THREE.HorizontalBlurShader.fragmentShader,
					uniforms: THREE.UniformsUtils.clone(THREE.HorizontalBlurShader.uniforms)
				});

				hBlurMaterial.uniforms.tDiffuse.value = texture;
				hBlurMaterial.uniforms.h.value = 100 / width;

				const vBlurMaterial = new THREE.ShaderMaterial({
					vertexShader: THREE.VerticalBlurShader.vertexShader,
					fragmentShader: THREE.VerticalBlurShader.fragmentShader,
					uniforms: THREE.UniformsUtils.clone(THREE.VerticalBlurShader.uniforms)
				});

				vBlurMaterial.uniforms.tDiffuse.value = renderTargetTemp.texture;
				vBlurMaterial.uniforms.v.value = 100 / height;

				// fullscreen quad

				const planeGeometry = new THREE.PlaneGeometry(2, 2);

				const fullScreenQuad = new THREE.Mesh(planeGeometry, hBlurMaterial);
				sceneRTT.add(fullScreenQuad);

				// first pass

				renderer.setRenderTarget(renderTargetTemp);
				renderer.render(sceneRTT, cameraRTT);
				renderer.setRenderTarget(null);

				// second pass

				fullScreenQuad.material = vBlurMaterial;

				renderer.setRenderTarget(renderTargetFinal);
				renderer.render(sceneRTT, cameraRTT);
				renderer.setRenderTarget(null);

				//

				return renderTargetFinal.texture;
			}

			container.appendChild(renderer.domElement);

			function tick() {
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
___________/ {$three_page} / {$three_state}

<style>
	:global(#theatrejs-studio-root) {
		position: absolute !important;
		z-index: 100000000000 !important;
	}
	#vieport3d {
		width: 100%;
		height: 100%;
		position: absolute;
	}
</style>
