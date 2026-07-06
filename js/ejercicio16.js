
const sumar = (a, b) => a + b;

const restar = (a, b) => a - b;

const multiplicar = (a, b) => a * b;

const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';


const esNumeroValido = valor => valor.trim() !== '' && !isNaN(Number(valor));


const calcularOperacion = (operacion) => {

  const input1 = document.getElementById('numero1').value;
  const input2 = document.getElementById('numero2').value;
  const resultadoInput = document.getElementById('resultado');

  if (!esNumeroValido(input1) || !esNumeroValido(input2)) {
    Swal.fire({
      icon: 'error',
      title: 'Datos invalidos',
      text: 'Ingresa dos numeros validos en ambos campos.'
    });
    resultadoInput.value = '';
    return;
  }

  const numero1 = Number(input1);
  const numero2 = Number(input2);

  let resultado;

  switch (operacion) {
    case 'suma':
      resultado = sumar(numero1, numero2);
      break;

    case 'resta':
      resultado = restar(numero1, numero2);
      break;

    case 'multiplicacion':
      resultado = multiplicar(numero1, numero2);
      break;

    case 'division':
      resultado = dividir(numero1, numero2);
      if (resultado === 'Error: División por cero') {
        Swal.fire({
          icon: 'error',
          title: 'Division por cero',
          text: 'No es posible dividir un numero entre cero.'
        });
        resultadoInput.value = '';
        return;
      }
      break;
  }

  resultadoInput.value = resultado;
};