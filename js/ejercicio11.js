const btnConvertir = document.getElementById("btnConvertir");
const inputKm = document.getElementById("km");
const inputMillas = document.getElementById("millas");
const error = document.getElementById("error");

btnConvertir.addEventListener("click", function () {

  const valorKm = inputKm.value.trim();

  if (valorKm === "") {
    error.textContent = "Por favor ingresa una distancia en kilómetros.";
    inputMillas.value = "";
    return;
  }

  if (isNaN(valorKm)) {
    error.textContent = "El valor ingresado debe ser numérico.";
    inputMillas.value = "";
    return;
  }

  error.textContent = "";

  const km = parseFloat(valorKm);
  const millas = km * 0.621371;

  inputMillas.value = millas.toFixed(5);
});