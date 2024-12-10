
 /*mi número secreto es 20*/
const numeroSecreto = 20

const botonAdivinar = document.getElementById("adivinarBoton");
const inputNumero = document.getElementById("numero");
const mensajeDiv = document.getElementById("mensaje");
const intentosDiv = document.getElementById("intentos");

let intentos = [];

function mostrarMensaje(texto) {
  mensajeDiv.textContent = texto;
}

function verificarNumero() {
  const numeroUsuario = inputNumero.value.trim();

  if (isNaN(numeroUsuario) || numeroUsuario === "") {
    mostrarMensaje("Error. Vuelve a intentarlo.");
   
    inputNumero.value = ''; 
    return; 
  }

  const numero = parseInt(numeroUsuario);

  if (numero < numeroSecreto) {
    mostrarMensaje("Ups, el número es incorrecto. El número es mayor.");
  } else if (numero > numeroSecreto) {
    mostrarMensaje("Ups, el número es incorrecto. El número es menor.");
  } else {
    mostrarMensaje("¡Felicidades, adivinaste el número secreto!");
    intentosDiv.textContent = 'Tu número de intentos: ${intentos.length + 1}'; 
  }

  intentos.push(numero);
  inputNumero.value = '';
}

botonAdivinar.addEventListener("click", verificarNumero);