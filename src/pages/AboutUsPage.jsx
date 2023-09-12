import React from 'react';
import {
  Box,
  Heading,
  Text,
  Center,
  Container,
} from '@chakra-ui/react';
import { useColorModeValue } from "@chakra-ui/react";

function AboutUsPage() {
  const textColor = useColorModeValue("black", "darkMode.text");
  const bgColor = useColorModeValue("white", "darkMode.background");
  return (
    <Box style={{ color: textColor, backgroundColor: bgColor }}>
      <Container maxW="container.lg">
        <Center>
          <Box textAlign="center">
            <Heading as="h1" size="xl" mb={4}>
              Acerca de Nosotros
            </Heading>
            <Text fontSize="lg" color="gray.600" mb={6}>
              Somos una pequeña empresa dedicada a la gestión de tareas. Nuestra aplicación le permite llevar un registro de sus tareas pendientes y completadas de manera eficiente.
            </Text>
            <Text fontSize="lg" color="gray.600" mb={6}>
              En nuestra plataforma, puede agregar, editar y eliminar tareas según sus necesidades. Le ayudamos a mantenerse organizado y productivo.
            </Text>
            <Text fontSize="lg" color="gray.600" mt={6}>
              Siéntase libre de explorar nuestra lista de tareas y comenzar a gestionar su tiempo de manera efectiva.
            </Text>
          </Box>
        </Center>
      </Container>
    </Box>
  );
}

export default AboutUsPage;
