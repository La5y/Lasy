
// ======================================
// LASY DIGITAL UNIVERSE X
// HUD SYSTEM ENGINE
// ======================================



class LasyHUD{


constructor(){


this.status = [
"ONLINE",
"ACTIVE",
"SECURE",
"READY"
];


this.start();


}





start(){


this.createScanner();


this.animateStatus();


this.createDataStream();


}









// Scanner Effect


createScanner(){


const scan =
document.createElement("div");


scan.className =
"hud-scanner";


document.body.appendChild(scan);



}





// Change System Status


animateStatus(){


const elements =
document.querySelectorAll(
".dashboard strong"
);



setInterval(()=>{


elements.forEach(
(el)=>{


let random =
this.status[
Math.floor(
Math.random()
*
this.status.length
)
];



el.style.opacity="0";



setTimeout(()=>{


el.innerHTML =
random;


el.style.opacity="1";



},300);



});


},4000);



}









// Digital Data Stream


createDataStream(){


const box =
document.createElement("div");


box.className =
"data-stream";


document.body.appendChild(box);




setInterval(()=>{


const data =
[
"CONNECTING NODE",
"ENCRYPTING DATA",
"LOADING MODULE",
"CORE CHECK",
"NETWORK SYNC"
];



const line =
document.createElement("div");



line.innerHTML =
"> "
+
data[
Math.floor(
Math.random()
*
data.length
)
];



box.appendChild(line);





if(box.children.length>6)

{

box.removeChild(
box.firstChild
);

}



},1200);



}



}






new LasyHUD();






// ======================================
// Cursor Energy Effect
// ======================================


const cursor =
document.createElement("div");


cursor.className =
"energy-cursor";


document.body.appendChild(cursor);





window.addEventListener(
"mousemove",
(e)=>{


cursor.style.left =
e.clientX+"px";


cursor.style.top =
e.clientY+"px";


});








console.log(

"%c HUD SYSTEM ONLINE 🖥️",

"color:#38bdf8;font-size:18px;"

);
