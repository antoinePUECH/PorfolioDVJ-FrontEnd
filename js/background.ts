import * as THREE from 'three';
import { PlainAnimator } from 'three-plain-animator/lib/plain-animator';

var camera, renderer, animator;

function initScene() {
  var frustumSize = 1000;
  var scene = new THREE.Scene();
  var aspect = window.innerWidth / window.innerHeight;
  camera = new THREE.OrthographicCamera(
    frustumSize * aspect / - 2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / - 2, 1, 2000);
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  var raycaster = new THREE.Raycaster(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 1));
  var mouse = new THREE.Vector2();
  scene.background = new THREE.Color('#1976D2');
  camera.position.z = 10;
  return scene;
}

function animate(timestamp?) {
  renderer.render(scene, camera);
  animator.animate();
  requestAnimationFrame(animate);
}

function createAnimatedMesh() {
  const texturePath = '../BAPDVJ/public/LOGO.glb';
  animator = new PlainAnimator(new THREE.TextureLoader().load(texturePath), 4, 4, 10, 10);

  const geometry = new THREE.PlaneGeometry(512, 512);
  const texture = animator.init();
  const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
  let mesh = new THREE.Mesh(geometry, material)
  mesh.position.set(0, 0, 1);
  return mesh;
}

const scene = initScene();
const mesh = createAnimatedMesh();
scene.add(mesh)

animate();
