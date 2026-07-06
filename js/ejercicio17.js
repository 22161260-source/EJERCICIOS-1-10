
const manejarTareas = (() => {

  const CLAVE_STORAGE = 'tareasPendientes'; 

  const obtenerTareas = () => {
    const datosGuardados = localStorage.getItem(CLAVE_STORAGE);
    return datosGuardados ? JSON.parse(datosGuardados) : [];
  };
  const guardarTareas = (tareas) => {
    localStorage.setItem(CLAVE_STORAGE, JSON.stringify(tareas));
  };
  const agregarTarea = (texto) => {
    const tareas = obtenerTareas();
    const nuevaTarea = {
      id: Date.now(),      
      texto: texto,
      completada: false
    };
    tareas.push(nuevaTarea);
    guardarTareas(tareas);
  };
  const eliminarTarea = (id) => {
    const tareas = obtenerTareas();
    const tareasFiltradas = tareas.filter(tarea => tarea.id !== id);
    guardarTareas(tareasFiltradas);
  };

  return {
    obtenerTareas,
    agregarTarea,
    eliminarTarea
  };

})();

const renderizarTareas = () => {
  const lista = document.getElementById('listaTareas');
  const tareas = manejarTareas.obtenerTareas();

  lista.innerHTML = ''; 

  tareas.forEach(tarea => {
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = tarea.texto;

    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.onclick = () => manejarEliminarTarea(tarea.id);

    li.appendChild(span);
    li.appendChild(btnEliminar);
    lista.appendChild(li);
  });
};
const manejarAgregarTarea = () => {
  const input = document.getElementById('nuevaTarea');
  const texto = input.value.trim();

  if (texto === '') {
    Swal.fire({
      icon: 'error',
      title: 'Campo vacio',
      text: 'Escribe una tarea antes de agregarla.'
    });
    return;
  }

  manejarTareas.agregarTarea(texto);
  input.value = '';
  renderizarTareas();
};

const manejarEliminarTarea = (id) => {
  Swal.fire({
    icon: 'warning',
    title: '¿Eliminar tarea?',
    text: 'Esta accion no se puede deshacer.',
    showCancelButton: true,
    confirmButtonText: 'Si, eliminar',
    cancelButtonText: 'Cancelar'
  }).then((resultado) => {
    if (resultado.isConfirmed) {
      manejarTareas.eliminarTarea(id);
      renderizarTareas();
      Swal.fire({
        icon: 'success',
        title: 'Tarea eliminada',
        timer: 1200,
        showConfirmButton: false
      });
    }
  });
};
document.addEventListener('DOMContentLoaded', renderizarTareas);