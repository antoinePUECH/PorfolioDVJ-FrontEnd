// import { GLTFLoader } from '../three.js-master/examples/jsm/loaders/GLTFLoader';
var texture = THREE.ImageUtils.loadTexture( '../BAPDVJ/assets/background_anime_espace.gif' );
        var backgroundMesh = new THREE.Mesh(
            new THREE.PlaneGeometry(2, 2, 0),
            new THREE.MeshBasicMaterial({
                map: texture
            }));

        backgroundMesh .material.depthTest = false;
		backgroundMesh .material.depthWrite = false;
		
		// Create your background scene
        var backgroundScene = new THREE.Scene();
        var backgroundCamera = new THREE.Camera();
        backgroundScene .add(backgroundCamera );
		backgroundScene .add(backgroundMesh );
		



var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 1.7;
// scene.background = new THREE.Video()
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var light = new THREE.AmbientLight(0xffffff, 0.7);
scene.add(light);

var light2 = new THREE.PointLight(0xffffff, 1.2);
scene.add(light2);

var loader = new THREE.GLTFLoader();

loader.load( '../BAPDVJ/public/LOGO.glb', function ( gltf ) {

	scene.add( gltf.scene );
	
    console.log("ta reussi fdp")

}, undefined, function ( error ) {

	console.error( error );

} );
var render = function () {
	requestAnimationFrame(render);
	renderer.autoClear = false;
    renderer.clear();
	renderer.render(backgroundScene , backgroundCamera, );
	// renderer.render(backgroundScene1 , backgroundCamera1 );
	// renderer.render(backgroundScene2 , backgroundCamera2 );
    renderer.render(scene, camera)
};

render();