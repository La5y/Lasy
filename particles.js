
// ======================================
// LASY X PERFORMANCE PARTICLE ENGINE
// ======================================


const canvas =
document.getElementById("space");


const ctx =
canvas.getContext("2d");



let particles = [];

let mouse = {

x:null,

y:null,

radius:120

};





function resize(){

canvas.width =
innerWidth;

canvas.height =
innerHeight;

}



resize();


window.addEventListener(
"resize",
resize
);





window.addEventListener(
"mousemove",
(e)=>{

mouse.x =
e.clientX;

mouse.y =
e.clientY;

});





class Particle{


constructor(){

this.x =
Math.random()*canvas.width;

this.y =
Math.random()*canvas.height;

this.size =
Math.random()*1.8+0.5;


this.speedX =
(Math.random()-.5)*0.4;


this.speedY =
(Math.random()-.5)*0.4;


}



update(){


this.x += this.speedX;

this.y += this.speedY;



if(this.x<0 || this.x>canvas.width)

this.speedX *= -1;



if(this.y<0 || this.y>canvas.height)

this.speedY *= -1;



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







function createParticles(){


particles=[];



let count =
innerWidth < 700
?
45
:
90;



for(
let i=0;
i<count;
i++
){

particles.push(
new Particle()
);

}


}



createParticles();








function connect(){


for(
let i=0;
i<particles.length;
i++
){


for(
let j=i+1;
j<particles.length;
j++
){



let dx =
particles[i].x -
particles[j].x;



let dy =
particles[i].y -
particles[j].y;



let distance =
dx*dx+dy*dy;




if(distance < 7000){


ctx.beginPath();


ctx.strokeStyle =
"rgba(56,189,248,.08)";


ctx.moveTo(

particles[i].x,

particles[i].y

);



ctx.lineTo(

particles[j].x,

particles[j].y

);



ctx.stroke();


}



}



}



}








function animate(){


ctx.clearRect(

0,

0,

canvas.width,

canvas.height

);



particles.forEach(p=>{

p.update();

p.draw();

});



connect();



requestAnimationFrame(
animate
);


}



animate();


console.log(
"LASY LIGHT PARTICLE ENGINE ⚡"
);
