// ======================================
// LASY V6 - Digital Intelligence Experience
// ======================================


// ===== 3D Globe With Three.js =====


const globe = document.getElementById("globe");


const scene = new THREE.Scene();


const camera = new THREE.PerspectiveCamera(
45,
globe.clientWidth / globe.clientHeight,
0.1,
1000
);


const renderer = new THREE.WebGLRenderer({
    alpha:true,
    antialias:true
});


renderer.setSize(
    globe.clientWidth,
    globe.clientHeight
);


globe.appendChild(renderer.domElement);





// Globe


const geometry =
new THREE.SphereGeometry(
2,
64,
64
);



const material =
new THREE.MeshStandardMaterial({

    color:0x0284c7,

    emissive:0x001f3f,

    metalness:.8,

    roughness:.3,

    wireframe:true

});



const earth =
new THREE.Mesh(
geometry,
material
);



scene.add(earth);







// Glow Ring


const ringGeometry =
new THREE.TorusGeometry(
2.4,
0.03,
16,
100
);



const ringMaterial =
new THREE.MeshBasicMaterial({

    color:0x38bdf8

});



const ring =
new THREE.Mesh(
ringGeometry,
ringMaterial
);



scene.add(ring);







// Lights


const light =
new THREE.PointLight(
0x38bdf8,
3,
100
);


light.position.set(
5,
5,
5
);


scene.add(light);



scene.add(
new THREE.AmbientLight(
0xffffff,
0.5
)
);





camera.position.z = 6;









// Mouse / Touch Control


let targetX = 0;
let targetY = 0;



document.addEventListener(
"mousemove",
(e)=>{


targetX =
(e.clientX /
window.innerWidth - .5)
* 2;



targetY =
(e.clientY /
window.innerHeight - .5)
* 2;


});





// Mobile Touch


document.addEventListener(
"touchmove",
(e)=>{


if(e.touches.length){

let x =
e.touches[0].clientX;


let y =
e.touches[0].clientY;



targetX =
(x/window.innerWidth-.5)*2;


targetY =
(y/window.innerHeight-.5)*2;


}


});









function animateGlobe(){


requestAnimationFrame(
animateGlobe
);



earth.rotation.y += .004;


ring.rotation.z += .003;



earth.rotation.x +=
(targetY - earth.rotation.x)
*.03;



earth.rotation.y +=
(targetX - earth.rotation.y)
*.02;



renderer.render(
scene,
camera
);


}



animateGlobe();









// Resize


window.addEventListener(
"resize",
()=>{


camera.aspect =
globe.clientWidth /
globe.clientHeight;


camera.updateProjectionMatrix();


renderer.setSize(
globe.clientWidth,
globe.clientHeight
);


});









// ===== Changing Text =====


const words = [

"Digital Intelligence Studio",

"Cyber Developer",

"Creative Programmer",

"Future Technology"

];


let wordIndex = 0;


const changing =
document.getElementById(
"changing-text"
);



setInterval(()=>{


wordIndex++;


if(wordIndex >= words.length)
wordIndex = 0;



changing.style.opacity = 0;



setTimeout(()=>{


changing.textContent =
words[wordIndex];


changing.style.opacity = 1;



},400);



},2500);









// ===== Scroll Reveal =====


const sections =
document.querySelectorAll(
".section"
);



sections.forEach(
item=>{


item.style.opacity="0";

item.style.transform=
"translateY(80px)";

item.style.transition=
"1s ease";


});





window.addEventListener(
"scroll",
()=>{


sections.forEach(
item=>{


let pos =
item.getBoundingClientRect().top;



if(
pos <
window.innerHeight-120
){


item.style.opacity="1";

item.style.transform=
"translateY(0)";


}


});


});









// ===== Parallax Background =====


window.addEventListener(
"scroll",
()=>{


const y =
window.scrollY;


document.querySelector(
".space-bg"
).style.transform =
`translateY(${y*0.15}px) scale(1.1)`;


document.querySelector(
".grid"
).style.transform =
`translateY(${y*0.08}px)`;


});









console.log(
"%c LASY V6 ONLINE 🌐",
"color:#38bdf8;font-size:24px;font-weight:bold;"
);
