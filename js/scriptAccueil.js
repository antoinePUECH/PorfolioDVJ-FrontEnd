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


var allAxe = document.getElementById('allAxeContent');

var btn3d = document.getElementById('btn3d');
var btnWeb = document.getElementById('btnWeb');
var btnCrea = document.getElementById('btnCrea');
var menu3d = document.getElementById('content3d');
var menuWeb = document.getElementById('contentWeb');
var menuCrea = document.getElementById('contentCrea');
var animation3d = document.getElementById('animation');
var modelisation3d = document.getElementById('modelisation');
var application = document.getElementById('site');
var siteWeb = document.getElementById('web');
var maquette = document.getElementById('maquette');
var motion = document.getElementById('motion');
var illustration = document.getElementById('illustration');

var back = document.getElementById('close');

	//////////// part 3D ////////////////
	btn3d.addEventListener('click', async function() {
		
		btn3d.style.opacity = "0";
		btnWeb.style.opacity = "0";
		btnCrea.style.opacity = "0";
		await pause(700);
		btn3d.style.cursor = "initial";

		for( camera.position.z = 2, camera.position.x = 0; camera.position.z > 0.5, camera.position.x > -1.2; camera.position.z -= 0.023,   camera.position.x -= 0.017 )  {
			
			await pause(25)
			camera.position.z = camera.position.z;
			
			camera.position.x = camera.position.x;
			scene.add(camera);
			
			renderer.render(scene, camera);
			
			
			
		}
		allAxe.style.display = "initial";
		await pause(1);
		back.style.opacity = "1";
		await pause(500);
		animation3d.style.opacity = "1";
		await pause(1000);
		menu3d.style.opacity = "1";
		await pause(1000);
		modelisation3d.style.opacity = "1";
	});


	////////////////// part web ////////////////////
	btnWeb.addEventListener('click', async function() {
		
		btn3d.style.opacity = "0";
		btnWeb.style.opacity = "0";
		btnCrea.style.opacity = "0";
		await pause(700);
		btn3d.style.cursor = "initial";
		btnWeb.style.cursor = "initial";

		for( camera.position.z = 2, camera.position.x = 0, camera.position.y = 0; camera.position.z > 1.3, camera.position.x < 1.2, camera.position.y < 0.7; camera.position.z -= 0.027,   camera.position.x += 0.018, camera.position.y += 0.0109 )  {
			
			await pause(25)
			camera.position.z = camera.position.z;
			
			camera.position.x = camera.position.x;
			scene.add(camera);
			
			renderer.render(scene, camera);
			
			
			
		}
		allAxe.style.display = "initial";
		await pause(1);
		back.style.opacity = "1";
		await pause(500);
		menuWeb.style.opacity = "1";
		await pause (1000);
		application.style.opacity = "1";
		await pause(1000);
		siteWeb.style.opacity = "1";
	});
////////////////// part crea //////////////////////////
	btnCrea.addEventListener('click', async function() {
		
		btn3d.style.opacity = "0";
		btnWeb.style.opacity = "0";
		btnCrea.style.opacity = "0";
		await pause(700);
		btn3d.style.cursor = "initial";
		btnWeb.style.cursor = "initial";
		btnCrea.style.cursor = "initial";

		for( camera.position.z = 2, camera.position.x = 0, camera.position.y = 0; camera.position.z > 1, camera.position.x > -1, camera.position.y > -0.89; camera.position.z -= 0.02,   camera.position.x -= 0.015, camera.position.y -= 0.011 )  {
			
			await pause(25)
			camera.position.z = camera.position.z;
			
			camera.position.x = camera.position.x;
			scene.add(camera);
			
			renderer.render(scene, camera);
			
			
			
		}
		allAxe.style.display = "initial";
		await pause(1);
		back.style.opacity = "1";
		await pause(500);
		menuCrea.style.opacity = "1";
		await pause (1000);
		maquette.style.opacity = "1";
		await pause(1000);
		motion.style.opacity = "1";
		await pause(1000);
		illustration.style.opacity = "1";
	});
