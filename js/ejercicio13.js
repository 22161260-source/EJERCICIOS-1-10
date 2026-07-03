const btnVerificar = document.getElementById("btnVerificar");
const inputEdad = document.getElementById("edad");
const inputResultado = document.getElementById("resultado");
const error = document.getElementById("error");

btnVerificar.addEventListener("click", function () {

  const valorEdad = inputEdad.value.trim();

  if (valorEdad === "") {
    error.textContent = "Por favor ingresa tu edad.";
    inputResultado.value = "";
    return;
  }

  if (isNaN(valorEdad)) {
    error.textContent = "El valor ingresado debe ser numérico.";
    inputResultado.value = "";
    return;
  }

  const edad = parseFloat(valorEdad);
  if (edad <= 0) {
    error.textContent = "La edad debe ser un número positivo.";
    inputResultado.value = "";
    return;
  }

  error.textContent = "";

  if (edad >= 18) {
    inputResultado.value = "Puedes votar";
  } else {
    inputResultado.value = "No puedes votar";
  }
});