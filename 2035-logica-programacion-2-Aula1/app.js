// let titulo = document.querySelector("h1");
// titulo.innerHTML = "Juego del número secreto";

// let parrafo = document.querySelector("p");
// parrafo.innerHTML = "Indica un número del 1 al 10";

// function intentoDeUsuario() {

// }
//Forma mas profesional de crear funciones

let numeroSecreto = generarNumeroSecreto();
let intentos = 1;

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}
function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
  
  if(numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'`);
  } else {
    if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento("p", "El número secreto es menor");

    } else {
        asignarTextoElemento("p", "El número secreto es mayor");
    }
    intestos++;
  }
  return;
}

function generarNumeroSecreto() {
  return Math.floor(Math.random() * 10) + 1;
}

asignarTextoElemento("h1", "Juego del número secreo");
asignarTextoElemento("p", "Juego del Indica un número del 1 al 10");
