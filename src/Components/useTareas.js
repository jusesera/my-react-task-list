import { useState } from 'react';

const useTareas = () => {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState({ nombre: '', descripcion: '' });

  const agregarTarea = (nombre, descripcion) => {
    if (nombre.trim() !== '') {
      setTareas([...tareas, { texto: nombre, descripcion, completada: false }]);
      setNuevaTarea({ nombre: '', descripcion: '' });
    }
  };

  const cambiarEstadoTarea = (indice) => {
    const tareasActualizadas = [...tareas];
    tareasActualizadas[indice].completada = !tareasActualizadas[indice].completada;
    setTareas(tareasActualizadas);
  };

  const eliminarTarea = (indice) => {
    const tareasActualizadas = tareas.filter((_, i) => i !== indice);
    setTareas(tareasActualizadas);
  };

  const actualizarTarea = (indice, nuevoNombre, nuevaDescripcion) => {
    if (nuevoNombre.trim() !== '') {
      const tareasActualizadas = [...tareas];
      tareasActualizadas[indice].texto = nuevoNombre;
      tareasActualizadas[indice].descripcion = nuevaDescripcion;
      setTareas(tareasActualizadas);
    }
  };

  return {
    tareas,
    agregarTarea,
    cambiarEstadoTarea,
    eliminarTarea,
    actualizarTarea,
    nuevaTarea,
    setNuevaTarea,
  };
};

export default useTareas;
