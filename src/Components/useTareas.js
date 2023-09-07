import { useState } from 'react';

const useTareas = () => {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const agregarTarea = (texto) => {
    if (texto.trim() !== '') {
      setTareas([...tareas, { texto, completada: false }]);
      setNuevaTarea('');
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

  const actualizarTarea = (indice, nuevoTexto) => {
    if (nuevoTexto.trim() !== '') {
      const tareasActualizadas = [...tareas];
      tareasActualizadas[indice].texto = nuevoTexto;
      setTareas(tareasActualizadas);
    }
  };

  return {
    tareas,
    agregarTarea,
    cambiarEstadoTarea,
    eliminarTarea,
    actualizarTarea,
  };
};

export default useTareas;
