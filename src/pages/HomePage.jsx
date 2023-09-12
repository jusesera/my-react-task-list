import React from 'react';
import {
  Box,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Center,
  Container,
  Button,
  ButtonGroup,
  Stack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useColorModeValue } from "@chakra-ui/react";

function HomePage() {
  const customBackgroundColor = "lightgray";
  const textColor = useColorModeValue("black", "darkMode.text");
  const bgColor = useColorModeValue("white", "darkMode.background");

  return (
    <Box>
      <Container maxW="container.lg">
        <Center>
          <Box textAlign="center">
            <Heading bgGradient='linear(to-l, #4299E1, #38B2AC)'
  bgClip='text'
  fontSize='6xl'
  fontWeight='extrabold'as="h1" size="xl" mb={4}>
              Bienvenido a la Lista de Tareas
            </Heading>
            <Text fontSize="lg" color="gray.600" mb={6}>
              Nuestra lista de tareas te ayuda a mantener tus tareas diarias bajo control y a mejorar tu productividad. Aquí algunos de los beneficios que ofrecemos:
            </Text>
            <UnorderedList fontSize="lg" color={useColorModeValue} textAlign="left">
              <ListItem>Organiza tus tareas de manera efectiva.</ListItem>
              <ListItem>Realiza un seguimiento de las tareas completadas.</ListItem>
              <ListItem>Prioriza y asigna fechas límite a tus tareas.</ListItem>
              <ListItem>Accede a tu lista de tareas desde cualquier dispositivo.</ListItem>
            </UnorderedList>
            <Text fontSize="lg" color="gray.600" mt={6}>
              ¡Comienza a utilizar nuestra lista de tareas hoy mismo para simplificar tu vida y lograr más en menos tiempo!
            </Text>
            <Stack direction='column' mt={6}>
              <Box>
                <ButtonGroup gap='4'>
                  <Link to="/listatareas">
                    <Button colorScheme='messenger'>Comencemos!</Button>
                  </Link>
                </ButtonGroup>
              </Box>
            </Stack>
          </Box>
        </Center>
      </Container>
    </Box>
  );
}

export default HomePage;
