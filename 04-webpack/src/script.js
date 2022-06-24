import "./style.css";
import * as THREE from "three";

(function () {
  //Get canvas
  const canvas = document.querySelector(".webgl");
  //create new scene
  const scene = new THREE.Scene();
  //Create red cube
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff0000 });
  const cube = new THREE.Mesh(geometry, material);
  //add cube to scene
  scene.add(cube);
  //size object
  const sizes = {
    width: 800,
    height: 600,
  };
  //create camera
  const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
  //move camera
  camera.position.z = 3;
  //add camera to scene
  scene.add(camera);

  //create renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
  });
  //set size of renderer
  renderer.setSize(sizes.width, sizes.height);
  //render scene
  renderer.render(scene, camera);
})();
