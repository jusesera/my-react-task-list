import React, { useState } from 'react';
import useTareas from './useTareas';
import useForm from './useForm';

const ListaTareas = () => {
  const {
    tareas,
    agregarTarea,
    cambiarEstadoTarea,
    eliminarTarea,
    actualizarTarea,
  } = useTareas();

  const [indiceTareaAEditar, setIndiceTareaAEditar] = useState(null);

  const submitForm = () => {
    if (indiceTareaAEditar !== null) {
      actualizarTarea(indiceTareaAEditar, valores.nombre);
      setIndiceTareaAEditar(null);
    } else {
      agregarTarea(valores.nombre);
    }
    setValores({ nombre: '', descripcion: '' });
  };

  const { valores, errores, handleChange, handleSubmit, setValores } = useForm(submitForm);

  return (
    <div>
      <h1>Lista de tareas</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre de la tarea:</label>
          <input
            type="text"
            name="nombre"
            value={valores.nombre}
            onChange={handleChange}
          />
          {errores.nombre && <p>{errores.nombre}</p>}
        </div>
        <div>
          <label>Descripción (opcional):</label>
          <input
            type="text"
            name="descripcion"
            value={valores.descripcion}
            onChange={handleChange}
          />
        </div>
        <button type="submit">
          {indiceTareaAEditar !== null ? '🔄 Actualizar' : '➕ Agregar'}
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
