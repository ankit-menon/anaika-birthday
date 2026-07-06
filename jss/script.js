const button=document.getElementById("enter");

const intro=document.getElementById("intro");

const main=document.getElementById("main");

const music=document.getElementById("music");

button.onclick = () => {

    music.play();

    const introTL = gsap.timeline();

    // Fade intro away
    introTL.to("#intro",{
        opacity:0,
        duration:1
    })

    .set("#intro",{
        display:"none"
    })

    .set("#main",{
        display:"block"
    })

    // Treasure rises
    .to("#treasure",{
        bottom:"120px",
        duration:2,
        ease:"power2.out"
    })

    // Treasure glow
    .to("#treasure",{
        scale:1.08,
        repeat:3,
        yoyo:true,
        duration:.25
    })

    // Chest shakes
    .to("#treasure",{
        rotation:-5,
        duration:.12
    })

    .to("#treasure",{
        rotation:5,
        duration:.12
    })

    .to("#treasure",{
        rotation:0,
        duration:.12
    })

    // Invitation appears
    .to("#invite-container",{
    opacity:1,
    duration:1,
    onComplete: () => {

        confetti({
            particleCount:180,
            spread:90,
            origin:{y:.65}
        });

    }
})

    .from(".invite-image",{

    y:250,

    scale:.2,

    rotation:-12,

    duration:1.6,

    ease:"back.out(1.4)"

});

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

const introTL = gsap.timeline();

introTL
.from(".emoji", {
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
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
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
