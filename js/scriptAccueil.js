// import { GLTFLoader } from '../three.js-master/examples/jsm/loaders/GLTFLoader';

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 1.7;
// scene.background = new THREE.Video()
var renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var light = new THREE.AmbientLight(0xffffff, 0.7);
scene.add(light);

var light2 = new THREE.PointLight(0xffffff, 1.2);
scene.add(light2);

var loader = new THREE.GLTFLoader();

loader.load( '../BAPDVJ/public/LOGO.glb', function ( gltf ) {

	scene.add( gltf.scene );
	renderer.render(scene, camera);
    console.log("ta reussi fdp");

}, undefined, function ( error ) {

	console.error( error );

} );
