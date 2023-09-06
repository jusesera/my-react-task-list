import React, { useState } from 'react';
import useTareas from './useTareas';

const ListaTareas = () => {
  const {
    tareas,
    agregarTarea,
    cambiarEstadoTarea,
    eliminarTarea,
    actualizarTarea,
  } = useTareas();

  const [nuevaTarea, setNuevaTarea] = useState('');
  const [indiceTareaAEditar, setIndiceTareaAEditar] = useState(null);

  const handleEnvio = (e) => {
    e.preventDefault();
    if (indiceTareaAEditar !== null) {
      actualizarTarea(indiceTareaAEditar, nuevaTarea);
      setIndiceTareaAEditar(null);
    } else {
      agregarTarea(nuevaTarea);
    }
    setNuevaTarea('');
  };

  const handleCambio = (e) => {
    setNuevaTarea(e.target.value);
  };

  const editarTarea = (indice) => {
    setNuevaTarea(tareas[indice].texto);
    setIndiceTareaAEditar(indice);
  };

  return (
    <div>
      <h1>Lista de tareas</h1>
      <form onSubmit={handleEnvio}>
        <input
          type="text"
          value={nuevaTarea}
          onChange={handleCambio}
        />
        <button type="submit">
          {indiceTareaAEditar !== null ? '🔄Actualizar' : '➕ Agregar'}
        </button>
      </form>
      <ul>
        {tareas.map((tarea, indice) => (
          <li key={indice}>
            {tarea.texto}
            <button onClick={() => cambiarEstadoTarea(indice)}>
              {tarea.completada ? '🟢' : '🔴'}
            </button>
            <button onClick={() => eliminarTarea(indice)}>🗑️</button>
            <button onClick={() => editarTarea(indice)}>✏️</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaTareas;
