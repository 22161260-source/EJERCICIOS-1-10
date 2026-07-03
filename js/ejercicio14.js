const btnCalcular = document.getElementById("btnCalcular");
const inputNumeros = document.getElementById("numeros");
const inputMayor = document.getElementById("mayor");
const inputMenor = document.getElementById("menor");
const inputPromedio = document.getElementById("promedio");
const error = document.getElementById("error");

btnCalcular.addEventListener("click", function () {

  let cadena = inputNumeros.value.trim();

  if (cadena === "") {
    error.textContent = "Por favor ingresa al menos un número.";
    inputMayor.value = "";
    inputMenor.value = "";
    inputPromedio.value = "";
    return;
  }

  let arreglo = cadena.split(",");

  let numeros = arreglo.map(Number);

  if (numeros.some(isNaN)) {
    error.textContent = "Ingresa solo números válidos separados por comas.";
    inputMayor.value = "";
    inputMenor.value = "";
    inputPromedio.value = "";
    return;
  }

  error.textContent = "";

  let maximo = Math.max(...numeros);
  let minimo = Math.min(...numeros);

  let suma = numeros.reduce((acc, valor) => acc + valor, 0);
  let promedio = suma / numeros.length;

  inputMayor.value = maximo;
  inputMenor.value = minimo;
  inputPromedio.value = promedio.toFixed(2);
});