<script>
	import * as THREE from 'three';
	import { onMount } from 'svelte';
	import { three_state, three_page, img_3d, strapiURL } from '$lib/stores/store.js';
	import { browser, dev } from '$app/environment';
	import { TweenMax } from 'gsap';

	import { onChange, types, val } from '@theatre/core';
	// import  {extension}  from '@theatre/r3f/dist/extension';

	//dev version
	import { getProject } from '@theatre/core';

	// import _getProject from '@theatre/core';
	// const { getProject } = _getProject;

	// import studio from '@theatre/studio';

	import projectState from '$lib/theatre/theatre-state.json';
	// import macbook from '$lib/theatre/model.json';
	// import macbook from 'http://localhost:5173/images/model.json';

	// SHORTEN 3d coordinates

	// console.log(macbook["geometries"])
	//
	// (\d\d?)\.(\d)(\d)(\d)(\d)(\d+)
	// $1.$2$3$4

	// Project without TheatreJS preset
	// const project = getProject('THREE');
	const project = getProject('THREE', { state: projectState });

	const sheet = project.sheet('Animated scene');

	let pos;

	onMount(() => {
		// studio.extend(extension);
		/* studio.initialize(); */
		// studio.ui.hide();
		var manager = new THREE.LoadingManager();

		const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
		THREE.Cache.enabled = false;
		const loader = new THREE.ObjectLoader();
		// loader.crossOrigin = '';

		const textureLoader = new THREE.TextureLoader(manager);

		const scene = new THREE.Scene();
		if (browser) {
			onChange(sheet.sequence.pointer.position, (_pos) => {
				pos = _pos;
				// console.log(pos.toFixed(1));
				if (pos.toFixed(1) == 3.5 || pos.toFixed(1) == 3.4) {
					sheet.sequence.pause();
				}
			});

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

			// const laptop = loader.parse(macbook);
			let laptop;
			let ekranLaptop;
			let ekranPhone;
			let ekranTablet;

			loader.load(
				// resource URL
				'/images/model.json?' + Math.random(4),
				function (obj) {
					laptop = obj;
					ekranLaptop = laptop.children['0'];
					ekranPhone = laptop.children['3'].children['3'];
					ekranTablet = laptop.children['4'].children['0'];

					console.log(laptop);
					let plane = laptop.children['8'];
					let bodyLaptop = laptop.children['2'].children['0'];
					let bodyPhone = laptop.children['3'].children['0'];
					let bodyTablet = laptop.children['4'].children['1'];

					bodyPhone.castShadow = true;
					bodyPhone.receiveShadow = true;
					bodyLaptop.castShadow = true;
					bodyLaptop.receiveShadow = true;
					bodyTablet.castShadow = true;
					bodyTablet.receiveShadow = true;

					// .castShadow = true;

					initialiseScene();
					initialiseTheatree();
					// updateTexture(ekranTablet, '/uploads/iphone_tablet_d09870d8de.jpg', 0.1);
					// updateTexture(ekranPhone, '/uploads/iphone_68c7a03567.jpg', 0.1);
					// updateTexture(ekranLaptop, '/uploads/laptop_16bb13ba2a.jpg', 0.1);

					textureLoader.crossOrigin = 'Anonymous';
					const ekranPhoneTexture = textureLoader.load('/uploads/iphone_68c7a03567.jpg');
					const ekranTabletTexture = textureLoader.load('/uploads/iphone_tablet_d09870d8de.jpg');
					const ekranLaptopTexture = textureLoader.load('/uploads/laptop_16bb13ba2a.jpg');

					// ekranLaptop.material.map = ekranLaptopTexture;
					ekranLaptop.material.emissiveMap = ekranLaptopTexture;
					ekranLaptop.material.needsUpdate = true;

					// ekranPhone.material.map = ekranPhoneTexture;
					ekranPhone.material.emissiveMap = ekranPhoneTexture;
					ekranPhone.material.needsUpdate = true;

					// ekranTablet.material.map = ekranTabletTexture;
					ekranTablet.material.emissiveMap = ekranTabletTexture;
					ekranTablet.material.needsUpdate = true;
				},
				// called when loading is in progresses
				function (xhr) {
					console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
				},
				// called when loading has errors
				function (error) {
					// console.log('An error happened');
				}
			);

			img_3d.subscribe((m) => {
				// SUBSCRIBE MOCKUP IMAGES IN POST

				if (typeof m[0] !== 'undefined') {
					updateTexture(ekranTablet, m[0].t, 2);
					updateTexture(ekranPhone, m[0].p, 3);
					updateTexture(ekranLaptop, m[0].l, 1);
				}
			});

			three_page.subscribe((d) => {
				if (d == 'realizacje_single') {
					// fadeObject

					project.ready.then(() =>
						sheet.sequence.play({
							rate: 0.09,
							range: [3.55, 9],
							iterationCount: Infinity,
							direction: 'alternateReverse'
						})
					);
				}
				if (d === 'kontakt') {
					if (pos == 0) {
						project.ready.then(() => sheet.sequence.play({ range: [0, 1.4], rate: 1 }));
					}
					if (pos >= 3.4 && pos <= 3.6) {
						project.ready.then(() => {
							sheet.sequence.play({ range: [0, 1.4], rate: 1 });
						});
					}
					if (pos >= 3.6 && pos <= 9) {
						project.ready
							.then(() => sheet.sequence.pause())
							.then(() => sheet.sequence.play({ rate: 2 }))
							.then(() => {
								sheet.sequence.play({ range: [0, 1.4], rate: 1 });
							});
					}
				}
				if (d === 'realizacje' && $three_state == 'back') {
					if (pos == 1.4) {
						project.ready.then(() => sheet.sequence.play({ range: [1.4, 3.5], rate: 2 }));
					}
					if (pos >= 3.4 && pos <= 3.6) {
						project.ready
							.then(() => sheet.sequence.pause())
							.then(() => sheet.sequence.play({ rate: 2, direction: 'reverse' }));
					}
					if (pos >= 3.6 && pos <= 9) {
						project.ready
							.then(() => sheet.sequence.pause())
							.then(() => sheet.sequence.play({ rate: 2, direction: 'reverse' }));
					}
				}
			});

			const initialiseScene = () => {
				// const pointLight1 = new THREE.PointLight(0x222222, 1, 0);
				// pointLight1.position.set(3.127, 4.56, 1.403);
				// scene.add(pointLight1);

				const pointLight2 = new THREE.PointLight(0x222222, 0.95, 0);
				pointLight2.position.set(3.356, 1.503, 0.802);
				scene.add(pointLight2);

				const ambientLight = new THREE.AmbientLight(0x222222, 50);
				ambientLight.position.set(-10.124, 2.748, 2.613);
				scene.add(ambientLight);

				// const dlight = new THREE.DirectionalLight(0x222222, 20);
				// dlight.position.set(5, 10, 7.5);
				// dlight.castShadow = true;
				// console.log(dlight)
				// scene.add(dlight);

				laptop.rotation.x = 0.506;
				laptop.rotation.x = 0.3;
				laptop.rotation.x = -2;

				scene.add(laptop);
			};

			const initialiseTheatree = () => {
				console.log('initialiseTheatree');
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
				});

				renderer.shadowMap.enabled = true;
				renderer.shadowMap.type = THREE.PCFSoftShadowMap;
				renderer.setSize(window.innerWidth, window.innerHeight);
				renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
				renderer.shadowMap.enabled = true;
				renderer.render(scene, camera);
			};

			// define objects in scene

			//Update Texture
			function updateTexture(object, text, time) {
				console.log(object);
				loader.setCrossOrigin('Anonymous');
				manager.crossOrigin = 'Anonymous';
				textureLoader.crossOrigin = 'Anonymous';
				object.material.transparent = true;
				TweenMax.to(object.material, time, { opacity: 0 })
					.then(() => {
						textureLoader.load(
							strapiURL + text,
							(texture) => {
								object.material.map = texture;
								object.material.emissiveMap = texture;

								object.material.transparent = true;
								// object.material.flipY = true;

								if (object['name'] == 'ekran_tablet') {
									console.log('ekran tabletu flipped');
									// object.material.map.flipY = false;
									// object.material.emissiveMap.flipY = false;

									object.material.map.wrapS = THREE.RepeatWrapping;
									object.material.map.repeat.x = -1;
									object.material.emissiveMap.wrapS = THREE.RepeatWrapping;
									object.material.emissiveMap.repeat.x = -1;
								}
								object.material.needsUpdate = true;
							},
							null,
							(err) => {
								console.log('failed to load ');
								// console.log(err);
							}
						);
					})
					.then(() => {
						TweenMax.to(object.material, time + 1, { opacity: 1 });
					});
			}

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
			let container = document.getElementById('vieport3d');

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
