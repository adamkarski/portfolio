<script >
import { onMount } from "svelte";
import {three_state}  from '$lib/stores/store.js'

import * as THREE from "three";
import {TweenMax} from "gsap";
import Power2 from "power2";
import Power1 from "power2";

let  w, h, container, camera, scene, renderer


// animate();


onMount(() => {
	var elem = document.querySelector('#vieport3d');
// clone.classList.add('secondary');

 w = window.innerWidth;
 h = window.innerHeight;

 function init() {

renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(w, h);
container = document.getElementById("vieport3d");
container.appendChild(renderer.domElement);


  // camera
  camera = new THREE.PerspectiveCamera(60, w / h, 1, 1000);
  camera.animAngle = 0;
  camera.position.x = Math.cos(camera.animAngle) * 400;
  camera.position.y = 180;
  camera.position.z = Math.sin(camera.animAngle) * 400;

    // world
    scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x1e2630, 0.002);
  renderer.setClearColor(scene.fog.color);

  // helpers
  var gridXZ = new THREE.GridHelper(600, 10);
  scene.add(gridXZ);


}
init();
})











</script>
<style>
#vieport3d{
    width: 100%;
    height: 100%;
    background-color: gray;
    position: absolute;
    
    }
</style>
<div id="vieport3d"></div>