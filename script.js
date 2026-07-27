// =================================
// LASY V5 - Digital Intelligence Studio
// Interactive Script
// =================================



// Custom Cursor

const cursor = document.querySelector(".cursor");


document.addEventListener(
"mousemove",
(e)=>{

    cursor.style.left =
    e.clientX + "px";

    cursor.style.top =
    e.clientY + "px";

});







// Cursor Glow Effect


const links =
document.querySelectorAll("a, .tech, .stats div, .features div");


links.forEach(item=>{


item.addEventListener(
"mouseenter",
()=>{

cursor.style.transform =
"scale(2)";

});


item.addEventListener(
"mouseleave",
()=>{

cursor.style.transform =
"scale(1)";

});


});









// 3D Card Movement


const cards =
document.querySelectorAll(
".hero-card, .tech, .stats div, .features div"
);



cards.forEach(card=>{


card.addEventListener(
"mousemove",
(e)=>{


let rect =
card.getBoundingClientRect();



let x =
e.clientX - rect.left;



let y =
e.clientY - rect.top;



let centerX =
rect.width / 2;


let centerY =
rect.height / 2;



let rotateX =
(y - centerY) / 15;


let rotateY =
(centerX - x) / 15;



card.style.transform =
`
perspective(800px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.05)
`;



});




card.addEventListener(
"mouseleave",
()=>{


card.style.transform =
"";

});


});









// Terminal Typing Effect


const terminal =
document.querySelector(".terminal");


const terminalText = [

"root@lasy:~$",

"> Initializing system...",

"> Loading technologies...",

"> React module active ✓",

"> Python engine active ✓",

"> Security layer enabled ✓",

"> System Ready."

];



if(terminal){


terminal.innerHTML = "";


let line = 0;



function writeLine(){


if(line < terminalText.length){


let p =
document.createElement("p");



terminal.appendChild(p);



let text =
terminalText[line];



let index = 0;



let typing =
setInterval(()=>{


p.textContent +=
text[index];


index++;



if(index >= text.length){


clearInterval(typing);

line++;


setTimeout(
writeLine,
500
);


}



},50);



}


}



writeLine();


}









// Scroll Reveal


const sections =
document.querySelectorAll(".section");



window.addEventListener(
"scroll",
()=>{


sections.forEach(section=>{


let position =
section.getBoundingClientRect().top;



if(
position <
window.innerHeight - 120
){


section.style.opacity="1";


section.style.transform=
"translateY(0)";


}


});


});





sections.forEach(section=>{


section.style.opacity="0";


section.style.transform=
"translateY(70px)";


section.style.transition=
"1s ease";


});









// Navbar Blur On Scroll


window.addEventListener(
"scroll",
()=>{


let header =
document.querySelector("header");



if(window.scrollY > 50){


header.style.background =
"rgba(2,6,23,.85)";


}else{


header.style.background =
"rgba(255,255,255,.05)";


}


});









// Hero Parallax


document.addEventListener(
"mousemove",
(e)=>{


const hero =
document.querySelector(".hero-card");



if(hero){


let x =
(e.clientX /
window.innerWidth - .5) * 20;



let y =
(e.clientY /
window.innerHeight - .5) * 20;



hero.style.transform +=
`
translate(${x}px,${y}px)
`;

}


});









// Loading Animation


window.addEventListener(
"load",
()=>{


document.body.classList.add(
"loaded"
);


});








console.log(
"%c LASY V5 SYSTEM ONLINE 🚀",
"color:#38bdf8;font-size:22px;font-weight:bold;"
);
