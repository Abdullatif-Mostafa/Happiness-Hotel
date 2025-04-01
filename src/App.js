import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Services from './pages/Services';
import Offers from './pages/Offers';
import Contact from './pages/Contact';
import About from './pages/About';

const theme = createTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: '#1e4d7b',
    },
    secondary: {
      main: '#c8a97e',
    },
  },
  typography: {
    fontFamily: "'Tajawal', 'Roboto', 'Arial', sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<>
          <Home/>
          <Offers />
          <Rooms/>
          </>} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/services" element={<Services />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
