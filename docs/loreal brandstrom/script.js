window.onload = () => {

const card = document.getElementById("card");
const loader = document.getElementById("loader");

/* Result page animation */

if(loader){
setTimeout(()=>{

loader.classList.add("hide");
card.classList.add("show");
showResult();

},1500);
}

/* Main page animation */

if(card && !loader){
card.classList.add("show");
}

/* Button click */

const btn = document.getElementById("btn");

if(btn){
btn.onclick = () => {

localStorage.setItem("mood", mood.value);
localStorage.setItem("occasion", occasion.value);

window.location.href = "result.html";
};
}

};

/* RULE BASED RESULT ENGINE */

function showResult(){

const mood = localStorage.getItem("mood");
const occasion = localStorage.getItem("occasion");

info.innerHTML = `Mood: ${mood}<br>Occasion: ${occasion}`;

let perfume="";
let desc="";

if(mood==="Happy" && occasion==="Daily"){
perfume="🍊 Citrus Bloom";
desc="Fresh uplifting everyday energy";
}

else if(mood==="Romantic" && occasion==="Date"){
perfume="🌹 Rose Vanilla";
desc="Soft warm florals with sweetness";
}

else if(mood==="Confident" && occasion==="Office"){
perfume="🌿 Woody Musk";
desc="Elegant woody professional scent";
}

else if(mood==="Soft Girl"){
perfume="🌸 Powdery Florals";
desc="Gentle cozy femininity";
}

else if(occasion==="Party" || occasion==="Night Out"){
perfume="🔥 Amber Spice";
desc="Bold seductive nights";
}

else if(occasion==="Beach Day"){
perfume="🥥 Coconut Breeze";
desc="Fresh tropical vibes";
}

else if(mood==="Playful"){
perfume="🍓 Berry Candy";
desc="Sweet youthful fun";
}

else if(mood==="Relaxed"){
perfume="🍃 Green Tea";
desc="Calm refreshing clarity";
}

else if(mood==="Magnetic"){
perfume="🍯 Honey Oud";
desc="Luxury deep warmth";
}

else{
perfume="🌊 Aqua Fresh";
desc="Clean everyday freshness";
}

perfumeName.innerText = perfume;
perfumeDesc.innerText = desc;
}

/* TRY AGAIN */

function goBack(){
localStorage.removeItem("mood");
localStorage.removeItem("occasion");
window.location.href = "index.html";
}
