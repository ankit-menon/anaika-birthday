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



gsap.from(".title",{

duration:2,

y:-80,

opacity:0,

ease:"bounce"

});


gsap.from(".subtitle",{

delay:.8,

opacity:0,

duration:2

});


gsap.from("#enter",{

delay:1.5,

scale:0,

duration:1

});
