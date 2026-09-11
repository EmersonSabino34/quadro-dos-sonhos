// alert('Hello Nathan World')

var btn7 = document.querySelector("#btn7")
var btn8 = document.querySelector("#btn8")
var btn6 = document.querySelector("#btn6")
var btn5 = document.querySelector("#btn5")
var btn4 = document.querySelector("#btn4")
var btn3 = document.querySelector("#btn3")
var btn2 = document.querySelector("#btn2")
var btn1 = document.querySelector("#btn1")

var btnLimar = document.querySelector("#btnCE")

var visor = document.querySelector("#visor")

console.log(btn1.textContent)
console.log(btn2.textContent)
console.log(btn3.textContent)
console.log(btn4.textContent)
console.log(btn5.textContent)
console.log(btn6.textContent)
console.log(btn7.textContent)
console.log(btn8.textContent)
console.log(btn9.textContent)

btn1.onclick = (event) => {
    event.preventDefault()

    visor.value += 1
}

btnLimar.onclick = (event) => {
    event.preventDefault()

    visor.value = ""
}

var btnAbrir = document.querySelector("#btn-abrir")

btnAbrir.onclick = () => {
    alert("pingo")

    document.querySelector("form").classList.toggle("sumir")
}
