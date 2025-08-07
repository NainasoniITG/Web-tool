function ouputtext() {
    const input = document.getElementById("inputText").value;
    document.getElementById("output").innerText = input;
}
const output = document.getElementById("output");

function modebtn() {
    let ele = document.querySelector(".body");
    ele.classList.toggle("active");
}

function makeBold() {
    output.classList.toggle("bold");
}

function makeItalic() {
    output.classList.toggle("italic");
}

function toUpper() {
    let input = document.querySelector("input");
    const text = document.getElementById("inputText").value;
    if (input.checked) {      
        output.innerHTML = text.toUpperCase();
    }
    else {
        output.innerHTML = text;
    }
}

function toLower() {
    let input = document.querySelector("#lower");
    const text = document.getElementById("inputText").value;
    if (input.checked) {      
        output.innerHTML = text.toLowerCase();
    }
    else {
        output.innerHTML = text;
    }
}

function capitalizeWords() {
    const text = document.getElementById("inputText").value;
    const capitalized = text
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    output.textContent = capitalized;
    output.classList.toggle("capitalize");
}

function changeColor() {
    const color = document.getElementById("textColor").value;
    output.style.color = color;
}    