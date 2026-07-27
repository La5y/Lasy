
// ======================================
// LASY X PERFORMANCE CORE ENGINE
// ======================================


// Loader

window.addEventListener("load",()=>{

const loader =
document.getElementById("loader");


if(loader){

setTimeout(()=>{

loader.style.opacity="0";


setTimeout(()=>{

loader.remove();

},800);


},1000);


}

});









// ======================================
// THREE JS LIGHT CORE
// ======================================


const container =
document.getElementById("core3d");



if(container){



const scene =
new THREE.Scene();



const camera =
new THREE.PerspectiveCamera(

45,

container.clientWidth /
container.clientHeight,

0.1,

100

);



const renderer =
new THREE.WebGLRenderer({

alpha:true,

antialias:false

});



renderer.setPixelRatio(
Math.min(
window.devicePixelRatio,
1.5
)
);



renderer.setSize(

container.clientWidth,

container.clientHeight

);



container.appendChild(
renderer.domElement
);






const geometry =
new THREE.SphereGeometry(

2,

32,

32

);



const material =
new THREE.MeshBasicMaterial({

color:0x38bdf8,

wireframe:true

});



const core =
new THREE.Mesh(

geometry,

material

);



scene.add(core);






const ring =
new THREE.Mesh(

new THREE.TorusGeometry(

2.6,

0.03,

16,

60

),

new THREE.MeshBasicMaterial({

color:0x0284c7

})

);



scene.add(ring);



camera.position.z=6;







let mouseX=0;

let mouseY=0;



window.addEventListener(
"mousemove",
(e)=>{


mouseX =
(e.clientX /
innerWidth-.5);



mouseY =
(e.clientY /
innerHeight-.5);



});







function render(){


requestAnimationFrame(render);



core.rotation.y +=0.003;

ring.rotation.z +=0.004;



core.rotation.x +=
(mouseY-core.rotation.x)
*.02;



core.rotation.y +=
(mouseX-core.rotation.y)
*.02;



renderer.render(

scene,

camera

);



}



render();






window.addEventListener(
"resize",
()=>{


camera.aspect =
container.clientWidth /
container.clientHeight;



camera.updateProjectionMatrix();



renderer.setSize(

container.clientWidth,

container.clientHeight

);



});



}









// ======================================
// TEXT ROTATION
// ======================================


const text =
document.getElementById("typing");



const words=[

"Digital Universe",

"Cyber Developer",

"Future Engineer",

"Technology Builder"

];



let index=0;



if(text){


setInterval(()=>{


index++;


if(index>=words.length)

index=0;



text.style.opacity="0";



setTimeout(()=>{


text.innerHTML =
words[index];


text.style.opacity="1";



},300);



},3000);


}









// ======================================
// SIMPLE SCROLL ANIMATION
// ======================================


const sections =
document.querySelectorAll(
".panel,.skill,.event"
);



const observer =
new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add(
"show"
);


}


});


},

{

threshold:.15

}

);



sections.forEach(section=>{


observer.observe(section);


});









console.log(
"%c LASY PERFORMANCE MODE ONLINE ⚡",
"color:#38bdf8;font-size:18px;"
);
