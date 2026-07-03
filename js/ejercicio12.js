const TASA_CAMBIO = 0.055; 

const btnConvertir = document.getElementById("btnConvertir");
const inputMxn = document.getElementById("mxn");
const inputUsd = document.getElementById("usd");
const error = document.getElementById("error");

btnConvertir.addEventListener("click", function () {

  const valorMxn = inputMxn.value.trim();
  if (valorMxn === "") {
    error.textContent = "Por favor ingresa una cantidad en pesos.";
    inputUsd.value = "";
    return;
  }
  if (isNaN(valorMxn)) {
    error.textContent = "El valor ingresado debe ser numérico.";
    inputUsd.value = "";
    return;
  }

  const mxn = parseFloat(valorMxn);
  if (mxn <= 0) {
    error.textContent = "La cantidad debe ser un número positivo.";
    inputUsd.value = "";
    return;
  }

  error.textContent = "";

  // 
  const usd = mxn * TASA_CAMBIO;

  inputUsd.value = usd.toFixed(2);
});