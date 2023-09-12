import React, { useState, useEffect } from 'react';
import {
  ChakraProvider,
  CSSReset,
  extendTheme,
  Box,
  useColorMode,
  ColorModeScript,
} from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ListaTareasPage from './pages/ListaTareasPage';
import { Menu } from './Components/Menu';
import AboutUsPage from './pages/AboutUsPage';
import { Switch, FormControl, FormLabel } from '@chakra-ui/react';
import { MdSettings} from 'react-icons/md'
import { Icon } from '@chakra-ui/react'

const customTheme = extendTheme({
});

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    const isDarkModeEnabled = localStorage.getItem("darkModeEnabled") === "true";
    if (isDarkModeEnabled && colorMode === "light") {
      toggleColorMode(); 
    }
  }, [colorMode, toggleColorMode]);

  const handleToggleDarkMode = () => {
    toggleColorMode(); 
    localStorage.setItem("darkModeEnabled", JSON.stringify(colorMode === "light")); 
  };

  return (
    <ChakraProvider theme={customTheme}>
      <CSSReset />
      <ColorModeScript initialColorMode={colorMode} /> {}
      <Router>
        <Box>
          <FormControl display='flex' alignItems='center' mb={4}>
            <FormLabel htmlFor='dark-mode-switch' mb='0'>
              {colorMode === 'dark' ? <Icon as={MdSettings} /> : <Icon as={MdSettings} />}
            </FormLabel>
            <Switch id='dark-mode-switch' isChecked={colorMode === 'dark'} onChange={handleToggleDarkMode} />
          </FormControl>
          <Menu />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/listatareas' element={<ListaTareasPage />} />
            <Route path='/sobrenosotros' element={<AboutUsPage />} />
          </Routes>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
