const button=document.getElementById("enter");

const intro=document.getElementById("intro");

const main=document.getElementById("main");

const music=document.getElementById("music");

button.onclick=()=>{

music.play();

intro.style.display="none";

main.style.display="block";

};


const container=document.getElementById("bubble-container");

setInterval(()=>{

const bubble=document.createElement("div");

bubble.className="bubble";

const size=10+Math.random()*20;

bubble.style.width=size+"px";

bubble.style.height=size+"px";

bubble.style.left=Math.random()*100+"vw";

bubble.style.animationDuration=(5+Math.random()*8)+"s";

container.appendChild(bubble);

setTimeout(()=>bubble.remove(),12000);

},220);

const tl = gsap.timeline();

tl.from(".emoji", {
    y: -40,
    opacity: 0,
    duration: 1
})

.from(".title", {
    y: -80,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
}, "-=0.3")

.from(".subtitle", {
    opacity: 0,
    y: 20,
    duration: 0.8
}, "-=0.2")

.from("#enter", {
    opacity: 0,
    scale: 0.3,
    duration: 0.6,
    ease: "back.out(1.7)",
    clearProps: "transform"
}, "-=0.2");


//gsap.from(".title",{

//duration:2,

//y:-80,

//opacity:0,

//ease:"bounce"

//});


//gsap.from(".subtitle",{

//delay:.8,

//opacity:0,

//duration:2

//});


//gsap.fromTo(
//    "#enter",
//    {
//        scale: 0
//    },
//    {
//        scale: 1,
//        duration: 1,
//        delay: 1.5,
//        ease: "back.out(1.7)",
//        clearProps: "transform"
//    }
//);
