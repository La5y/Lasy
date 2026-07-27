
// ======================================
// LASY DIGITAL UNIVERSE X
// PARTICLE SPACE ENGINE
// ======================================


const particleCanvas =
document.getElementById("space");


const particleCtx =
particleCanvas.getContext("2d");



let particles = [];

let mouse = {

x:null,

y:null,

radius:160

};







function resizeParticles(){


particleCanvas.width =
window.innerWidth;


particleCanvas.height =
window.innerHeight;


}



resizeParticles();



window.addEventListener(
"resize",
resizeParticles
);







// Mouse Control


window.addEventListener(
"mousemove",
(e)=>{


mouse.x =
e.clientX;


mouse.y =
e.clientY;


});







// Touch Control


window.addEventListener(
"touchmove",
(e)=>{


mouse.x =
e.touches[0].clientX;


mouse.y =
e.touches[0].clientY;


});









class Particle{


constructor(){


this.x =
Math.random()
*
particleCanvas.width;


this.y =
Math.random()
*
particleCanvas.height;



this.size =
Math.random()*2+0.5;



this.speedX =
(Math.random()-.5)
*0.8;



this.speedY =
(Math.random()-.5)
*0.8;



this.opacity =
Math.random();

}



update(){


this.x +=
this.speedX;


this.y +=
this.speedY;




if(
this.x <0 ||
this.x > particleCanvas.width
)

this.speedX *= -1;




if(
this.y <0 ||
this.y > particleCanvas.height
)

this.speedY *= -1;





// Mouse attraction


if(mouse.x){


let dx =
this.x-mouse.x;


let dy =
this.y-mouse.y;



let distance =
Math.sqrt(
dx*dx+dy*dy
);



if(distance < mouse.radius){


this.x +=
dx/80;


this.y +=
dy/80;


}



}



}



draw(){


particleCtx.beginPath();



particleCtx.arc(

this.x,

this.y,

this.size,

0,

Math.PI*2

);



particleCtx.fillStyle =
`rgba(56,189,248,${this.opacity})`;



particleCtx.shadowBlur =
15;


particleCtx.shadowColor =
"#38bdf8";



particleCtx.fill();



}






}









function createParticles(){


particles=[];



let amount =
window.innerWidth < 700
?
80
:
180;



for(
let i=0;
i<amount;
i++
){


particles.push(
new Particle()
);


}



}



createParticles();









// Connect Network Lines


function connectParticles(){



for(
let a=0;
a<particles.length;
a++
){


for(
let b=a;
b<particles.length;
b++
){


let dx =
particles[a].x -
particles[b].x;


let dy =
particles[a].y -
particles[b].y;



let distance =
dx*dx+dy*dy;



if(distance < 12000){


particleCtx.beginPath();



particleCtx.strokeStyle =
"rgba(56,189,248,0.10)";



particleCtx.lineWidth =
1;



particleCtx.moveTo(

particles[a].x,

particles[a].y

);



particleCtx.lineTo(

particles[b].x,

particles[b].y

);



particleCtx.stroke();


}



}



}



}









function particleAnimation(){



particleCtx.clearRect(

0,

0,

particleCanvas.width,

particleCanvas.height

);




particles.forEach(
(p)=>{


p.update();

p.draw();


});




connectParticles();




requestAnimationFrame(
particleAnimation
);



}



particleAnimation();








console.log(
"%c PARTICLE ENGINE ONLINE ✦",
"color:#38bdf8;font-size:18px;"
);
