//
// LASY DIGITAL UNIVERSE X
// Main Interactive Engine
//


// =============================
// Loader
// =============================

window.addEventListener("load",()=>{

    setTimeout(()=>{

        document.getElementById("loader").style.opacity="0";

        setTimeout(()=>{

            document.getElementById("loader").style.display="none";

        },800);


    },1800);

});




// =============================
// Canvas Space Background
// =============================


const canvas =
document.getElementById("space");


const ctx =
canvas.getContext("2d");



let stars=[];



function resizeCanvas(){

    canvas.width =
    window.innerWidth;

    canvas.height =
    window.innerHeight;

}



resizeCanvas();



window.addEventListener(
"resize",
resizeCanvas
);



class Star{


constructor(){

    this.x =
    Math.random()*canvas.width;


    this.y =
    Math.random()*canvas.height;


    this.size =
    Math.random()*2;


    this.speed =
    Math.random()*0.5+0.1;

}



move(){

    this.y += this.speed;


    if(this.y > canvas.height){

        this.y=0;

        this.x =
        Math.random()*canvas.width;

    }

}



draw(){

    ctx.beginPath();


    ctx.arc(
        this.x,
        this.y,
        this.size,
        0,
        Math.PI*2
    );


    ctx.fillStyle =
    "#38bdf8";


    ctx.fill();

}



}




for(let i=0;i<250;i++){

    stars.push(
        new Star()
    );

}



function animateStars(){


ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);



stars.forEach(star=>{

    star.move();

    star.draw();

});



requestAnimationFrame(
animateStars
);


}



animateStars();









// =============================
// Three JS Core
// =============================


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






// Planet Core


const sphere =
new THREE.SphereGeometry(

2,

64,

64

);



const material =
new THREE.MeshStandardMaterial({

color:0x0284c7,

wireframe:true,

emissive:0x001f4d

});



const core =
new THREE.Mesh(

sphere,

material

);



scene.add(core);







// Outer Ring


const ring =
new THREE.Mesh(

new THREE.TorusGeometry(

2.7,

0.04,

16,

100

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









// Touch / Mouse Control


let moveX=0;
let moveY=0;



document.addEventListener(
"mousemove",
(e)=>{


moveX =
(e.clientX /
window.innerWidth - .5);


moveY =
(e.clientY /
window.innerHeight - .5);


});




document.addEventListener(
"touchmove",
(e)=>{


let touch =
e.touches[0];


moveX =
(touch.clientX /
window.innerWidth - .5);



moveY =
(touch.clientY /
window.innerHeight - .5);


});









function animateCore(){


requestAnimationFrame(
animateCore
);



core.rotation.y +=0.005;

ring.rotation.z +=0.003;



core.rotation.x +=
(
moveY -
core.rotation.x
)
*0.03;



core.rotation.y +=
(
moveX -
core.rotation.y
)
*0.02;



renderer.render(

scene,

camera

);



}



animateCore();









// Resize 3D


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









// =============================
// Changing Titles
// =============================


const titles=[

"Digital Universe",

"Cyber Developer",

"Future Engineer",

"Creative Programmer",

"Technology Builder"

];



let titleIndex=0;



const title =
document.getElementById("typing");



setInterval(()=>{


title.style.opacity="0";



setTimeout(()=>{


titleIndex++;


if(titleIndex>=titles.length)

titleIndex=0;



title.innerHTML =
titles[titleIndex];


title.style.opacity="1";



},500);



},2500);









// =============================
// GSAP Animations
// =============================


gsap.from(".hud",{

opacity:0,

y:80,

duration:1.5,

ease:"power4"

});




gsap.from(".brand",{

opacity:0,

x:-50,

duration:1

});









// =============================
// Scroll Reveal
// =============================


const sections =
document.querySelectorAll(".section");



sections.forEach(section=>{


gsap.from(section,{

scrollTrigger:false,

opacity:0,

y:80,

duration:1

});


});









// =============================
// Smooth Scroll Lenis
// =============================


const lenis =
new Lenis();



function raf(time){

lenis.raf(time);

requestAnimationFrame(raf);

}


requestAnimationFrame(raf);









console.log(

"%c LASY DIGITAL UNIVERSE X ONLINE 🚀",

"color:#38bdf8;font-size:22px;font-weight:bold"

);
