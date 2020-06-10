// import { GLTFLoader } from '../three.js-master/examples/jsm/loaders/GLTFLoader';

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );
var camera2 = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 2;

// scene.background = new THREE.Video()
var renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var light = new THREE.AmbientLight(0xffffff, 2);
scene.add(light);

var light2 = new THREE.PointLight(0xffffff, 2.5);

scene.add(light2);

var loader = new THREE.GLTFLoader();

loader.load( '../BAPDVJ/public/LOGO.glb', function ( gltf ) {
	
	scene.add( gltf.scene );
	gltf.scene.rotation.y = 0.05;
	renderer.render(scene, camera);
    console.log("ta reussi fdp");

}, undefined, function ( error ) {

	console.error( error );

} );

function pause(ms) 
{
  return new Promise(resolve => setTimeout(resolve, ms));
}
var btn3d = document.getElementById('btn3d')
var menu3d = document.getElementById('content3d')

	btn3d.addEventListener('click', async function() {
		
		btn3d.style.opacity = "0";
		await pause(700);
		btn3d.style.cursor = "initial";

		for( camera.position.z = 2, camera.position.x = 0; camera.position.z > 0.5, camera.position.x > -1.2; camera.position.z -= 0.023,   camera.position.x -= 0.017 )  {
			
			await pause(30)
			camera.position.z = camera.position.z;
			
			camera.position.x = camera.position.x;
			scene.add(camera);
			
			console.log(camera.position.x)
			console.log(camera.position.z)
			renderer.render(scene, camera);
			
			
			
		}
		menu3d.style.opacity = "1";
	});
