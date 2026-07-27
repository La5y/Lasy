// ======================================
// LASY DIGITAL UNIVERSE X
// EFFECTS ENGINE
// ======================================


document.addEventListener("DOMContentLoaded",()=>{


// Reveal System

const items =
document.querySelectorAll(
".panel, .skill, .event, .contact, .hud-box"
);



items.forEach(item=>{

item.style.opacity="0";

item.style.transform=
"translateY(70px)";

item.style.transition=
"all 1s ease";

});





function reveal(){


items.forEach(item=>{


const position =
item.getBoundingClientRect().top;



if(
position <
window.innerHeight - 120
){


item.style.opacity="1";

item.style.transform=
"translateY(0)";


}


});


}



window.addEventListener(
"scroll",
reveal
);


reveal();









// 3D Hover Effect


const cards =
document.querySelectorAll(
".skill, .event, .dashboard div"
);



cards.forEach(card=>{


card.addEventListener(
"mousemove",
(e)=>{


const box =
card.getBoundingClientRect();



const x =
e.clientX - box.left;


const y =
e.clientY - box.top;



const rotateX =
(y / box.height - .5) * -12;


const rotateY =
(x / box.width - .5) * 12;



card.style.transform =

`
perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.05)
`;



});





card.addEventListener(
"mouseleave",
()=>{


card.style.transform=
"translateY(0)";


});


});









// Button Energy Effect


const buttons =
document.querySelectorAll(".btn");



buttons.forEach(button=>{


button.addEventListener(
"mousemove",
(e)=>{


const rect =
button.getBoundingClientRect();


const x =
e.clientX - rect.left;


const y =
e.clientY - rect.top;



button.style.setProperty(
"--x",
x+"px"
);



button.style.setProperty(
"--y",
y+"px"
);



});



});









// Dynamic System Pulse


setInterval(()=>{


const panels =
document.querySelectorAll(
".panel, .skill"
);



if(panels.length){


const random =
panels[
Math.floor(
Math.random()*panels.length
)
];



random.classList.add(
"energy-active"
);



setTimeout(()=>{


random.classList.remove(
"energy-active"
);



},800);


}



},3000);









console.log(
"%c LASY EFFECT ENGINE ONLINE ⚡",
"color:#38bdf8;font-size:18px;font-weight:bold;"
);



});
