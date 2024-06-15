var a0 = document.getElementById("0");var a1 = document.getElementById("1");var a2 = document.getElementById("2");var a3 = document.getElementById("3");var a4 = document.getElementById("4");var a5 = document.getElementById("5");var a6 = document.getElementById("6");var a7 = document.getElementById("7");var a8 = document.getElementById("8");var a9 = document.getElementById("9");

var soma = document.getElementById("+"); var multiplicacao = document.getElementById("*"); var divisao = document.getElementById("/"); var subtracao = document.getElementById("-"); 

var p = document.getElementById("input"); var valor;

var calc = document.getElementById("calc"); var clear = document.getElementById("clear");

a0.addEventListener("click", () => {
    p.value += "0";
    })
a1.addEventListener("click", () => {
p.value += "1";
})
a2.addEventListener("click", () => {
p.value += "2";
})
a3.addEventListener("click", () => {
    p.value += "3";
})
a4.addEventListener("click", () => {
    p.value += "4";
})
a5.addEventListener("click", () => {
    p.value += "5";
})
a6.addEventListener("click", () => {
    p.value += "6";
})
a7.addEventListener("click", () => {
    p.value += "7";
})
a8.addEventListener("click", () => {
    p.value += "8";
})
a9.addEventListener("click", () => {
    p.value += "9";
})
clear.addEventListener("click", () => {
    p.value = "";
})
soma.addEventListener("click", () => {
    localStorage.setItem("val1", p.value)
    localStorage.setItem("conta", soma.textContent)
    p.value = ""
})
multiplicacao.addEventListener("click", () => {
    localStorage.setItem("val1", p.value)
    localStorage.setItem("conta", multiplicacao.textContent)
    p.value = ""
})
subtracao.addEventListener("click", () => {
    localStorage.setItem("val1", p.value)
    localStorage.setItem("conta", subtracao.textContent)
    p.value = ""
})
divisao.addEventListener("click", () => {
    localStorage.setItem("val1", p.value)
    localStorage.setItem("conta", divisao.textContent)
    p.value = ""
})
calc.addEventListener("click", () => {
  localStorage.setItem("val2", p.value)
  let valor2 = localStorage.getItem("val2")
    let valor1 = localStorage.getItem("val1")
    let conta = localStorage.getItem("conta")
    if(conta == "+")
        {  valor = +valor1 + +valor2 }
    if(conta == "-")
        {  valor = +valor1 - +valor2}
    if(conta == "*")
        {   valor = +valor1 * +valor2}
    if(conta == "/")
        { valor = +valor1 / +valor2}
  
    p.value = ""
    p.value = valor
})