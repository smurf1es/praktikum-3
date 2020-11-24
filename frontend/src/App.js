import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Box, Container } from '@chakra-ui/react';
import './App.css';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import PegawaiScreen from './screens/PegawaiScreen';
import PegawaiUpdateScreen from './screens/PegawaiUpdateScreen';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Box paddingTop="16">
        <Container maxW="lg">
          <Route exact path="/pegawai" component={PegawaiScreen} />
          <Route
            exact
            path="/pegawai/:nip/edit"
            component={PegawaiUpdateScreen}
          />
          <Route exact path="/" component={HomeScreen} />
        </Container>
      </Box>
    </BrowserRouter>
  );
}

export default App;
