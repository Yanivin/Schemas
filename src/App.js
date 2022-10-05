import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Sidebar from './components/sidebar';
import Fireship from './components/firebase';
import { useState } from "react"; 
import useLocalStorage from 'use-local-storage'

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const handleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    console.log('theme')
  };

  const [show, setShow] = useState(true);

  const handleShow = () => {
      setShow(!show);
      console.log(show);
  }

  return (
    <div className='app' data-theme={theme}>
      <Navbar onClick={handleShow} />
      <Sidebar show={show} onClick={handleShow} />
      <Hero onTheme={handleTheme} />
    </div>
  );
}

export default App;
