const button=document.getElementById("enter");

const intro=document.getElementById("intro");

const main=document.getElementById("main");

const music=document.getElementById("music");

button.onclick=()=>{

music.play();

intro.style.display="none";

main.style.display="block";

}
