// ======================================
// LASY DIGITAL UNIVERSE X
// NETWORK VISUAL ENGINE
// ======================================


const network =
document.getElementById("network");



const canvas =
document.createElement("canvas");


network.appendChild(canvas);



const ctx =
canvas.getContext("2d");



let nodes=[];



function resizeNetwork(){

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

}



resizeNetwork();


window.addEventListener(
"resize",
resizeNetwork
);







class Node{


constructor(){


this.x =
Math.random()*canvas.width;


this.y =
Math.random()*canvas.height;


this.size =
Math.random()*3+1;


this.speedX =
(Math.random()-.5)*0.4;


this.speedY =
(Math.random()-.5)*0.4;


}



move(){


this.x += this.speedX;

this.y += this.speedY;



if(
this.x < 0 ||
this.x > canvas.width
)

this.speedX *= -1;



if(
this.y < 0 ||
this.y > canvas.height
)

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


ctx.shadowBlur =
20;


ctx.shadowColor =
"#38bdf8";


ctx.fill();


}



}









function createNodes(){


nodes=[];


let count =
window.innerWidth < 700
?
25
:
60;



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
let j=i;
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
Math.sqrt(
dx*dx+dy*dy
);




if(distance < 220){


ctx.beginPath();


ctx.strokeStyle =
"rgba(56,189,248,0.18)";


ctx.lineWidth =
1;



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









function animateNetwork(){


ctx.clearRect(

0,

0,

canvas.width,

canvas.height

);



nodes.forEach(
(node)=>{


node.move();

node.draw();


});



connect();



requestAnimationFrame(
animateNetwork
);


}



animateNetwork();







// Data pulse effect


setInterval(()=>{


const pulse =
document.createElement("div");


pulse.className =
"network-pulse";


pulse.style.left =
Math.random()*100+"%";


pulse.style.top =
Math.random()*100+"%";



network.appendChild(
pulse
);



setTimeout(()=>{


pulse.remove();


},2000);



},1500);






console.log(
"%c NETWORK SYSTEM ONLINE 🌐",
"color:#38bdf8;font-size:18px;"
);
