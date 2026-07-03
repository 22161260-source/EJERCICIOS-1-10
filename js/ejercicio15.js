let estudiantes = [];

const inputNombre = document.getElementById("nombre");
const inputCalificacion = document.getElementById("calificacion");
const btnAgregar = document.getElementById("btnAgregar");
const btnCalcular = document.getElementById("btnCalcular");
const listaEstudiantes = document.getElementById("listaEstudiantes");
const inputPromedio = document.getElementById("promedio");
const inputMasAlta = document.getElementById("masAlta");
const inputMasBaja = document.getElementById("masBaja");
const error = document.getElementById("error");

btnAgregar.addEventListener("click", function () {
  let nombre = inputNombre.value.trim();
  let calificacion = inputCalificacion.value.trim();
  if (nombre === "" || calificacion === "") {
    error.textContent = "Por favor completa el nombre y la calificación.";
    return;
  }
  if (isNaN(calificacion)) {
    error.textContent = "La calificación debe ser un número válido.";
    return;
  }
  error.textContent = "";
  let estudiante = {
    nombre: nombre,
    calificacion: Number(calificacion)
  };

  estudiantes.push(estudiante);
  let item = document.createElement("li");
  item.textContent = estudiante.nombre + " - " + estudiante.calificacion;
  listaEstudiantes.appendChild(item);
  inputNombre.value = "";
  inputCalificacion.value = "";
});
btnCalcular.addEventListener("click", function () {

  if (estudiantes.length === 0) {
    error.textContent = "Agrega al menos un estudiante antes de calcular.";
    inputPromedio.value = "";
    inputMasAlta.value = "";
    inputMasBaja.value = "";
    return;
  }

  error.textContent = "";
  let promedio = estudiantes.reduce((total, estudiante) => total + estudiante.calificacion, 0) / estudiantes.length;
  let calificacionMaxima = Math.max(...estudiantes.map(e => e.calificacion));
  let calificacionMinima = Math.min(...estudiantes.map(e => e.calificacion));
  let estudianteMasAlto = estudiantes.find(e => e.calificacion === calificacionMaxima);
  let estudianteMasBajo = estudiantes.find(e => e.calificacion === calificacionMinima);
  inputPromedio.value = promedio.toFixed(2);
  inputMasAlta.value = estudianteMasAlto.nombre;
  inputMasBaja.value = estudianteMasBajo.nombre;
});