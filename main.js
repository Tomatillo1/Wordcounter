const textArea = document.querySelector(".myTextArea");
const myValue = document.querySelector(".theValue");
let button1 = document.querySelector(".mode1");
let button2 = document.querySelector(".mode2");
let boolValue = true;
addEventListener("load", () => {
    whatMode()
})

function modeChange(){
    boolValue = true
    whatMode()
}

function changeMode2() {
    boolValue = false
    whatMode()
}

function whatMode () {
    if (boolValue === true) {
        textArea.addEventListener("input", () => {
            myValue.innerHTML = textArea.value.length
        })
        button1.classList.add("actif")
        button2.classList.remove("actif")
    } else if (boolValue === false) {
        textArea.addEventListener("input", () => {
            let toArray = textArea.value.split(' ')
            myValue.innerHTML = toArray.length
        })
        button2.classList.add("actif")
        button1.classList.remove("actif")
    }
}





