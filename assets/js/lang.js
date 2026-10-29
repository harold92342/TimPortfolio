let contentData=null;
let currentLang="fr";

async function loadContent(){
 const res=await fetch("data/content.json");
 contentData=await res.json();
 applyLanguage("fr");
}

function applyLanguage(lang){
 currentLang=lang;
 const data=contentData[lang];

 document.getElementById("role").innerText=data.role;
 document.getElementById("hero-title").innerText=data.hero_title;

 document.getElementById("btn-fr").classList.toggle("active",lang==="fr");
 document.getElementById("btn-en").classList.toggle("active",lang==="en");
}

document.addEventListener("DOMContentLoaded",loadContent);
