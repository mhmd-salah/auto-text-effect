let inputText = document.getElementById("textInput") as HTMLInputElement
let btn = document.getElementById("btn") as HTMLElement;
let textElement = document.getElementById("textEl")
let inputSpeed = document.getElementById("speed") as HTMLInputElement

let text:string;
let idx: number = 0;
let speed: number = 1000 ;


btn.addEventListener("click", () => {
    if (inputText.value !== "") {
        text = inputText.value;
        setInterval(() => {
            textElement!.innerText = text.slice(0, idx)
            idx++
            if(idx == text.length) idx=0
        },speed)
    }
});

inputSpeed.addEventListener("change", (e) => {
    speed = e.target!.value * 1000;
})
