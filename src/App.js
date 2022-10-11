import React, { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Sidebar from './components/sidebar';
import useLocalStorage from 'use-local-storage';
import { CookiesProvider } from 'react-cookie';

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'light' : 'dark');

  const handleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    console.log(theme === 'light' ? 'light' : 'dark');
  };

  const [show, setShow] = useState(true);

  const handleShow = () => {
    setShow(!show);
    console.log(show ? 'Showing sidebar' : 'Hiding sidebar');
  }

  return (
    <div className='app' data-theme={theme}>
      <Navbar onClick={handleShow} />
      <Sidebar show={show} onClick={handleShow} />
      <CookiesProvider>
        <Hero onTheme={handleTheme} />
      </CookiesProvider>
    </div>
  );
}

export default App;
