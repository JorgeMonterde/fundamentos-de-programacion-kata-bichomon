console.log(document.querySelector(".infocard"))
document.querySelector("#gen-1").innerHTML = "Generasión 1 Pokimon";

document.querySelector("body > main > div:nth-child(6)");
document.querySelector("body > main > div:nth-child(6)").setAttribute("class", "panel-red")
console.log(window.location.href);

let url = window.location.href;

function urlDomain(url) {
    return window.location.hostname
}
console.log(urlDomain(url))
let images = document.querySelectorAll("img.img-fixed.img-sprite");

for(i=0; i<images.length; i++){
    let img = images[i];
    img.setAttribute("src","https://media.giphy.com/media/2v170e71aanfi/giphy.gif")
}
/*
images.removeAttribute("src");
images.setAttribute("src","https://media.giphy.com/media/2v170e71aanfi/giphy.gif")
*/



