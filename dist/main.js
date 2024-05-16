"use strict";
let inputText = document.getElementById("textInput");
let btn = document.getElementById("btn");
let textElement = document.getElementById("textEl");
let inputSpeed = document.getElementById("speed");
let text;
let idx = 0;
let speed = 1000;
btn.addEventListener("click", () => {
    if (inputText.value !== "") {
        text = inputText.value;
        setInterval(() => {
            textElement.innerText = text.slice(0, idx);
            idx++;
            if (idx == text.length)
                idx = 0;
        }, speed);
    }
});
inputSpeed.addEventListener("change", (e) => {
    speed = e.target.value * 1000;
});
