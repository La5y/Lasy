
// ======================================
// LASY DIGITAL UNIVERSE X
// TIMELINE ENGINE
// ======================================



const timelineItems =
document.querySelectorAll(".event");





// Hidden Start


timelineItems.forEach(item=>{


item.style.opacity="0";


item.style.transform=
"translateY(80px)";


item.style.transition=
"1s ease";


});









function revealTimeline(){



timelineItems.forEach(
(item,index)=>{


const position =
item.getBoundingClientRect()
.top;



if(
position <
window.innerHeight - 120
){



setTimeout(()=>{


item.style.opacity="1";


item.style.transform=
"translateY(0)";



},index*200);



}



});



}









window.addEventListener(

"scroll",

revealTimeline

);



revealTimeline();









// Add Progress Line


const timeline =
document.querySelector(".timeline");



if(timeline){


const line =
document.createElement("div");


line.className =
"timeline-line";


timeline.appendChild(line);


}









// Dynamic Year Glow


timelineItems.forEach(item=>{


const year =
item.querySelector("span");



if(year){



year.addEventListener(
"mouseenter",
()=>{


year.style.textShadow=
"0 0 30px #38bdf8";



});




year.addEventListener(
"mouseleave",
()=>{


year.style.textShadow="none";


});


}



});






console.log(

"%c TIMELINE SYSTEM ONLINE 📜",

"color:#38bdf8;font-size:18px;"

);
