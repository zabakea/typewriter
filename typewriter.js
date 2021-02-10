"use strict";

let sentence;
let n = 0;
init();

function init() {
sentence = document.querySelector("#typewriter").textContent;
document.querySelector("#typewriter").innerHTML = "";

console.log(sentence);

startTyping();

}

function startTyping() {

   if(n < sentence.length) {
    document.querySelector("#typewriter").innerHTML += sentence.charAt(n);
    n++;
    setTimeout(startTyping, 200);
   }

}