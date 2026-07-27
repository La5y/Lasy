// ===============================
// LASY V2 - Cyber Portfolio JS
// ===============================


// Particles Background

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let particles = [];


class Particle {

    constructor(){

        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.size = Math.random() * 2 + 1;

        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;

    }


    update(){

        this.x += this.speedX;
        this.y += this.speedY;


        if(
            this.x < 0 ||
            this.x > canvas.width
        ){

            this.speedX *= -1;

        }


        if(
            this.y < 0 ||
            this.y > canvas.height
        ){

            this.speedY *= -1;

        }

    }



    draw(){

        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            this.size,
            0,
            Math.PI * 2
        );


        ctx.fillStyle = "#00ff99";

        ctx.fill();

    }

}





function createParticles(){

    particles = [];

    for(
        let i = 0;
        i < 120;
        i++
    ){

        particles.push(
            new Particle()
        );

    }

}



createParticles();





function animate(){


    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    particles.forEach(
        particle=>{

            particle.update();

            particle.draw();

        }
    );


    requestAnimationFrame(
        animate
    );


}


animate();








// Resize Canvas


window.addEventListener(
"resize",
()=>{


canvas.width =
window.innerWidth;


canvas.height =
window.innerHeight;


createParticles();


});









// Typing Effect


const text =
"Programming • Security • Development";


const typing =
document.getElementById("typing");


let index = 0;



function typeWriter(){


    if(index < text.length){

        typing.innerHTML +=
        text.charAt(index);


        index++;

        setTimeout(
            typeWriter,
            80
        );

    }

}



typing.innerHTML = "";

typeWriter();









// Scroll Reveal


const sections =
document.querySelectorAll(".section");



sections.forEach(
section=>{

    section.style.opacity = "0";

    section.style.transform =
    "translateY(40px)";

    section.style.transition =
    "0.8s ease";

});





window.addEventListener(
"scroll",
()=>{


sections.forEach(
section=>{


let top =
section.getBoundingClientRect().top;


if(
top < window.innerHeight - 100
){

section.style.opacity="1";

section.style.transform=
"translateY(0)";


}


});


});









// Terminal Animation


const terminalLines =
document.querySelectorAll(
".terminal p"
);


terminalLines.forEach(
(line,index)=>{


line.style.opacity="0";


setTimeout(
()=>{

line.style.opacity="1";

},
index * 700
);


});









// Console Branding


console.log(
"%c LASY V2 Loaded 🚀",
"color:#00ff99;font-size:22px;font-weight:bold;"
);
