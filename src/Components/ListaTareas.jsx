import React, { useState } from 'react';

const ListaTareas = () => {
  const [tareas, setTareas] = useState([]);
  const [valorInput, setValorInput] = useState('');

  const agregarTarea = () => {
    if (valorInput.trim() !== '') {
      setTareas([...tareas, valorInput]);
      setValorInput('');
    }
  };

  const eliminarTarea = (indice) => {
    const tareasActualizadas = tareas.filter((_, i) => i !== indice);
    setTareas(tareasActualizadas);
  };

  return (
    <div>
      <h1>Lista de tareas</h1>
      <input
        type="text"
        value={valorInput}
        onChange={(e) => setValorInput(e.target.value)}
      />
      <button onClick={agregarTarea}>Agregar tarea</button>
      <ul>
        {tareas.map((tarea, indice) => (
          <li key={indice}>
            {tarea}
            <button onClick={() => eliminarTarea(indice)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaTareas;