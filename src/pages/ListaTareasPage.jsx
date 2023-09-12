import React from 'react';
import useTareas from '../Components/useTareas';
import useForm from '../Components/useForm';
import {
  Box,
  Center,
  VStack,
  Text,
  Input,
  Textarea,
  Button,
  Checkbox,
  Alert,
  AlertIcon,
  Stack,
} from '@chakra-ui/react';
import { useColorModeValue } from "@chakra-ui/react";

const ListaTareasPage = () => {
  const {
    tareas,
    agregarTarea,
    cambiarEstadoTarea,
    eliminarTarea,
    actualizarTarea,
  } = useTareas();
  const textColor = useColorModeValue("black", "darkMode.text");
  const bgColor = useColorModeValue("white", "darkMode.background");

  const [indiceTareaAEditar, setIndiceTareaAEditar] = React.useState(null);

  const editarTarea = (indice) => {
    const tareaAEditar = tareas[indice];
    const nombre = tareaAEditar.texto.substring(tareaAEditar.texto.indexOf(':') + 2);
    const descripcion = tareaAEditar.descripcion.substring(tareaAEditar.descripcion.indexOf(':') + 2);
    setValores({ nombre, descripcion });
    setIndiceTareaAEditar(indice);
  };

  const validar = (valores) => {
    const errores = {};
    if (valores.nombre.trim().length < 3) {
      errores.nombre = 'El nombre de tu tarea debe tener al menos 3 caracteres';
    }
    return errores;
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

  const { valores, errores, handleChange, handleSubmit, setValores } = useForm(
    submitForm,
    validar
  );

  return (
    <Center>
      <VStack align="start" spacing={4} padding={4}>
        <Text fontSize="2xl">Lista de Tareas</Text>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            width="100%"
            p="6"
            boxShadow="md"
            backgroundColor={useColorModeValue} // Agregar fondo blanco
            >
            <Input
              type="text"
              name="nombre"
              placeholder="Nombre de la tarea"
              value={valores.nombre}
              onChange={handleChange}
            />
            {errores.nombre && (
              <Stack spacing={3} width="100%">
                <Alert status="error">
                  <AlertIcon />
                  {errores.nombre}
                </Alert>
              </Stack>
            )}
            <Textarea
              name="descripcion"
              placeholder="Descripción (opcional)"
              value={valores.descripcion}
              onChange={handleChange}
            />
            <Button colorScheme="blue" type="submit">
              {indiceTareaAEditar !== null ? 'Actualizar' : 'Agregar'}
            </Button>
          </Box>
        </form>
        <VStack align="start" spacing={2} width="100%">
          {tareas.map((tarea, indice) => (
            <Box
              key={indice}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              width="100%"
              p="4"
              boxShadow="md"
              backgroundColor={useColorModeValue} // Agregar fondo blanco
            >
              <Checkbox
                isChecked={tarea.completada}
                onChange={() => cambiarEstadoTarea(indice)}
                colorScheme="green"
              >
                {tarea.texto}
              </Checkbox>
              {tarea.descripcion && (
                <Text fontSize="sm">{tarea.descripcion}</Text>
              )}
              <Button
                size="sm"
                colorScheme="blue"
                onClick={() => editarTarea(indice)}
              >
                Editar
              </Button>
              <Button
                size="sm"
                colorScheme="red"
                onClick={() => eliminarTarea(indice)}
              >
                Eliminar
              </Button>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Center>
  );
};

export default ListaTareasPage;
