import { useState, useEffect } from 'react';

const useForm = (callback) => {
  const [valores, setValores] = useState({ nombre: '', descripcion: '' });
  const [errores, setErrores] = useState({});
  const [enviando, setEnviando] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValores({
      ...valores,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrores(validar(valores));
    setEnviando(true);
  };

  const validar = (valores) => {
    const errores = {};
    if (valores.nombre.trim().length < 3) {
      errores.nombre = 'El nombre de tu tarea debe tener al menos 3 caracteres';
    }
    return errores;
  };

  useEffect(() => {
    if (Object.keys(errores).length === 0 && enviando) {
      callback();
    }
  }, [errores, enviando, callback]);

  return {
    valores,
    errores,
    handleChange,
    handleSubmit,
    setValores, // Agregamos setValores para usarlo en otros componentes
  };
};

export default useForm;

