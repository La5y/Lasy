// ===============================
// LASY Website Script
// ===============================


// Matrix Effect

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");


canvas.height = window.innerHeight;
canvas.width = window.innerWidth;


const letters =
"01ABCDEFGHIJKLMNOPQRSTUVWXYZ{}[]<>/\\$#@";


const fontSize = 16;

let columns = canvas.width / fontSize;


let drops = [];


for(let i = 0; i < columns; i++){

    drops[i] = 1;

}



function drawMatrix(){

    ctx.fillStyle = "rgba(0,0,0,0.08)";
    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    ctx.fillStyle = "#00ff99";
    ctx.font = fontSize + "px monospace";


    for(let i = 0; i < drops.length; i++){

        let text =
        letters[
            Math.floor(
                Math.random()*letters.length
            )
        ];


        ctx.fillText(
            text,
            i * fontSize,
            drops[i] * fontSize
        );



        if(
            drops[i] * fontSize >
            canvas.height &&
            Math.random() > 0.975
        ){

            drops[i] = 0;

        }


        drops[i]++;

    }

}


setInterval(drawMatrix,35);





// Resize Matrix


window.addEventListener(
"resize",
()=>{


canvas.height = window.innerHeight;
canvas.width = window.innerWidth;


columns = canvas.width / fontSize;


drops = [];


for(let i = 0; i < columns; i++){

    drops[i]=1;

}


});








// Scroll Animation


const sections =
document.querySelectorAll(".section");



window.addEventListener(
"scroll",
()=>{


sections.forEach(section=>{


let position =
section.getBoundingClientRect().top;


let screen =
window.innerHeight / 1.3;



if(position < screen){

section.style.opacity="1";
section.style.transform="translateY(0)";


}


});


});






// Initial Animation Style


sections.forEach(section=>{


section.style.opacity="0";

section.style.transform=
"translateY(50px)";


section.style.transition=
"0.8s ease";


});







// Console Message


console.log(
"%c LASY Website Loaded 🚀",
"color:#00ff99;font-size:20px;font-weight:bold;"
);
