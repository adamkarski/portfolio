<script >
import { onMount } from "svelte";
import {three_state}  from '$lib/stores/store.js'

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import {TweenMax} from "gsap";
import Power2 from "power2";
import Power1 from "power2";





// models
import macbook from '$lib/images/3d/macbook.json'
import enviroment from '$lib/images/3d/scene.json'

let  w, h, container, camera, scene, renderer


// animate();


onMount(() => {
	// var elem = document.querySelector('#vieport3d');
// clone.classList.add('secondary');

 w = window.innerWidth;
 h = window.innerHeight;

                                                                                                                                   

function init() {
  // renderer
  const loader = new THREE.ObjectLoader();
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(w, h);
  container = document.getElementById("vieport3d");
  container.appendChild(renderer.domElement);





  // camera
  // camera = new THREE.PerspectiveCamera(60, w / h, 1, 1000);
  // camera.animAngle = 0; 
  // camera.position.x = Math.cos(camera.animAngle) * 400;
  // camera.position.y = 180;
  // camera.position.z = Math.sin(camera.animAngle) * 400;

  // camera
  camera = new THREE.PerspectiveCamera(50.90, w / h, 1, 2000);
  camera.animAngle = 0; 


  // world
  scene = new THREE.Scene();

  const laptop = loader.parse( macbook );

  laptop.position.x = 0;
  laptop.position.y = 0;
  laptop.position.z = 0;
  laptop.rotation.x = 0;
  laptop.rotation.y = 0;
  laptop.rotation.z = 0;

//   laptop.scale.x=0.9;
//   laptop.scale.y=0.54;
// laptop.scale.z=0.8;
  scene.add( laptop );
  

  // laptop.rotation.copy( camera.rotation );
  laptop.updateMatrix();
  laptop.translateZ(-10);

 


console.log(camera.rotation)
console.log(camera.position)

  // camera.rotation.x = -80.40;
  // camera.rotation.y= 1.60 ;
  // camera.rotation.z= -321.00;

  camera.position.x = 1.126;
  camera.position.y=  30.980;
  camera.position.z= 3.704;

  laptop.position.copy( camera.position );


  scene.fog = new THREE.FogExp2(0x1e2630, 0.002);
  renderer.setClearColor(scene.fog.color);

  // helpers
  var gridXZ = new THREE.GridHelper(600, 10);
  scene.add(gridXZ);

  // lights

  var omni = new THREE.SpotLight( 0xffffff );
  omni.position.set( 100, 1000, 100 );
  scene.add(omni);


  var light = new THREE.DirectionalLight(0xffffff);
  light.position.set(1, 1, 1);
  scene.add(light);
  light = new THREE.DirectionalLight(0x002288);
  light.position.set(-1, -1, -1);
  scene.add(light);
  light = new THREE.AmbientLight(0x222222);
  scene.add(light);

  // Dome;
  var domeGeometry = new THREE.IcosahedronGeometry(700, 1);
  var domeMaterial = new THREE.MeshPhongMaterial({
    color: 0xfb3550,
    shading: THREE.FlatShading,
    side: THREE.BackSide
  });
  var dome = new THREE.Mesh(domeGeometry, domeMaterial);
  scene.add(dome);


  (function grow() {
   
    // TweenMax.to(camera, 1.5, {
    //   animAngle: 0 + (2 * Math.random() - 1) * Math.PI,
    //   ease: Power1.easeInOut,
    //   onUpdate: function () {
    //     camera.position.x = Math.cos(0) * 440;
    //     camera.position.z = Math.sin(0) * 440;

    //     camera.updateProjectionMatrix();
    //     camera.lookAt(scene.position);
    //   }
    // });

    // TweenMax.to(window, 3.5, {
    //   onComplete: grow
    // });
  })();
}

window.addEventListener("resize", onWindowResize, false);

function onWindowResize() {
  w = window.innerWidth;
  h = window.innerHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
}

function animate() {

  requestAnimationFrame(animate);

  renderer.render(scene, camera);

}
init()
animate()

// on mount 
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