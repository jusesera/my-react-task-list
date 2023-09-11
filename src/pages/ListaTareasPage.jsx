import React, { useState } from 'react';
import useTareas from '../Components/useTareas';
import useForm from '../Components/useForm';
import '../style/Styles.css';

const ListaTareasPage = () => {
  const {
    tareas,
    agregarTarea,
    cambiarEstadoTarea,
    eliminarTarea,
    actualizarTarea,
  } = useTareas();

  const [indiceTareaAEditar, setIndiceTareaAEditar] = useState(null);

  const editarTarea = (indice) => {
    const tareaAEditar = tareas[indice];
    const nombre = tareaAEditar.texto.substring(tareaAEditar.texto.indexOf(':') + 2);
    const descripcion = tareaAEditar.descripcion.substring(tareaAEditar.descripcion.indexOf(':') + 2);
    setValores({ nombre, descripcion });
    setIndiceTareaAEditar(indice);
  };

  const submitForm = () => {
    if (indiceTareaAEditar !== null) {
      const nuevaTarea = `Tarea: ${valores.nombre}`;
      const nuevaDescripcion = `Descripcion: ${valores.descripcion}`;
      actualizarTarea(indiceTareaAEditar, nuevaTarea, nuevaDescripcion);
      setIndiceTareaAEditar(null);
    } else {
      const nuevaTarea = `Tarea: ${valores.nombre}`;
      const nuevaDescripcion = `Descripcion: ${valores.descripcion}`;
      agregarTarea(nuevaTarea, nuevaDescripcion);
    }
    setValores({ nombre: '', descripcion: '' });
  };

  const { valores, errores, handleChange, handleSubmit, setValores } = useForm(submitForm);

  return (
    <div className="task-list-container">
      <h1 className="task-list-header">Lista de Tareas</h1>
      <form className="task-form" onSubmit={handleSubmit}>
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
          <li key={indice} className="task-item">
            {tarea.texto}
            {tarea.descripcion && <p>{tarea.descripcion}</p>}
            <div className="task-buttons">
              <button
                className={tarea.completada ? 'complete' : 'incomplete'}
                onClick={() => cambiarEstadoTarea(indice)}
              >
                {tarea.completada ? 'Marcar como Pendiente' : 'Marcar como Completada'}
              </button>
              <button className="edit" onClick={() => editarTarea(indice)}>Editar</button>
              <button className="delete" onClick={() => eliminarTarea(indice)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaTareasPage;
