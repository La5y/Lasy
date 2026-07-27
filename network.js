
// ======================================
// LASY X LIGHT NETWORK ENGINE
// ======================================


const network =
document.getElementById("network");


if(network){


const canvas =
document.createElement("canvas");


network.appendChild(canvas);



const ctx =
canvas.getContext("2d");



let nodes=[];





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







class Node{


constructor(){


this.x =
Math.random()*canvas.width;


this.y =
Math.random()*canvas.height;



this.size =
Math.random()*2+1;



this.vx =
(Math.random()-.5)*0.3;


this.vy =
(Math.random()-.5)*0.3;


}



update(){


this.x += this.vx;

this.y += this.vy;



if(
this.x<0 ||
this.x>canvas.width
)

this.vx*=-1;



if(
this.y<0 ||
this.y>canvas.height
)

this.vy*=-1;


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









function createNodes(){


nodes=[];



let count =
innerWidth < 700
?
15
:
35;



for(
let i=0;
i<count;
i++
){


nodes.push(
new Node()
);


}



}



createNodes();









function connect(){



for(
let i=0;
i<nodes.length;
i++
){


for(
let j=i+1;
j<nodes.length;
j++
){


let dx =
nodes[i].x -
nodes[j].x;


let dy =
nodes[i].y -
nodes[j].y;



let distance =
dx*dx+dy*dy;



if(distance < 12000){


ctx.beginPath();


ctx.strokeStyle =
"rgba(56,189,248,.12)";



ctx.moveTo(

nodes[i].x,

nodes[i].y

);



ctx.lineTo(

nodes[j].x,

nodes[j].y

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



nodes.forEach(node=>{


node.update();

node.draw();


});



connect();



requestAnimationFrame(
animate
);



}



animate();



}



console.log(
"%c LIGHT NETWORK ONLINE 🌐",
"color:#38bdf8;font-size:18px;"
);
