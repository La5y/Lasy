
// ======================================
// LASY DIGITAL UNIVERSE X
// MAIN ENGINE
// ======================================



// Loader

window.addEventListener("load",()=>{

    setTimeout(()=>{

        const loader =
        document.getElementById("loader");


        loader.style.opacity="0";


        setTimeout(()=>{

            loader.style.display="none";

        },1000);


    },1500);

});









// ======================================
// THREE JS CORE
// ======================================


const container =
document.getElementById("core3d");



const scene =
new THREE.Scene();



const camera =
new THREE.PerspectiveCamera(

45,

container.clientWidth /
container.clientHeight,

0.1,

1000

);



const renderer =
new THREE.WebGLRenderer({

alpha:true,

antialias:true

});



renderer.setSize(

container.clientWidth,

container.clientHeight

);



container.appendChild(
renderer.domElement
);







// Core Sphere


const coreGeometry =
new THREE.SphereGeometry(

2,

64,

64

);



const coreMaterial =
new THREE.MeshStandardMaterial({

color:0x0284c7,

wireframe:true,

emissive:0x003b66,

metalness:0.8

});



const core =
new THREE.Mesh(

coreGeometry,

coreMaterial

);



scene.add(core);








// Energy Ring


const ring =
new THREE.Mesh(

new THREE.TorusGeometry(

2.6,

0.035,

32,

120

),


new THREE.MeshBasicMaterial({

color:0x38bdf8

})

);



scene.add(ring);








// Lights


const light =
new THREE.PointLight(

0x38bdf8,

5,

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

0.6

)

);





camera.position.z=6;









// Touch / Mouse Movement


let mouseX=0;

let mouseY=0;



window.addEventListener(
"mousemove",
(e)=>{


mouseX =
(e.clientX /
window.innerWidth -0.5);



mouseY =
(e.clientY /
window.innerHeight -0.5);



});






window.addEventListener(
"touchmove",
(e)=>{


let touch =
e.touches[0];


mouseX =
(touch.clientX /
window.innerWidth -0.5);



mouseY =
(touch.clientY /
window.innerHeight -0.5);


});









function animateCore(){


requestAnimationFrame(
animateCore
);



core.rotation.y +=0.004;


ring.rotation.z +=0.006;



core.rotation.x +=
(mouseY-core.rotation.x)
*0.03;



core.rotation.y +=
(mouseX-core.rotation.y)
*0.03;



renderer.render(

scene,

camera

);


}



animateCore();









// Resize


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









// ======================================
// TEXT SYSTEM
// ======================================


const words=[

"Digital Universe",

"Cyber Developer",

"Future Engineer",

"Creative Programmer",

"Technology Builder",

"Digital Creator"

];



let index=0;



const typing =
document.getElementById("typing");



setInterval(()=>{


typing.style.opacity="0";



setTimeout(()=>{


index++;


if(index>=words.length)

index=0;



typing.innerHTML =
words[index];



typing.style.opacity="1";



},400);



},2500);









// ======================================
// GSAP INTRO
// ======================================



gsap.from(".hud-box",{

y:100,

opacity:0,

duration:1.5,

ease:"power4.out"

});



gsap.from(".brand",{

x:-50,

opacity:0,

duration:1

});



gsap.from("nav a",{

y:-30,

opacity:0,

stagger:.1,

duration:1

});









// ======================================
// LENIS SMOOTH SCROLL
// ======================================


const lenis =
new Lenis({

smoothWheel:true

});



function scrollFrame(time){

lenis.raf(time);

requestAnimationFrame(
scrollFrame
);

}



requestAnimationFrame(
scrollFrame
);









// ======================================
// CARD 3D EFFECT
// ======================================


const cards =
document.querySelectorAll(
".skill,.event,.dashboard div"
);



cards.forEach(card=>{


card.addEventListener(
"mousemove",
(e)=>{


let x =
e.offsetX /
card.offsetWidth;


let y =
e.offsetY /
card.offsetHeight;



card.style.transform =
`
perspective(800px)

rotateX(${y*10-5}deg)

rotateY(${x*10-5}deg)

scale(1.05)

`;



});




card.addEventListener(
"mouseleave",
()=>{


card.style.transform="";



});



});








console.log(
"%c LASY X ONLINE 🚀",
"color:#38bdf8;font-size:22px;font-weight:bold;"
);
