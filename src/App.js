import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Sidebar from './components/sidebar';
import Fireship from './components/firebase';
import { useState } from "react"; 

function App() {
  const [show, setShow] = useState(true);

  const handleShow = () => {
      setShow(!show);
      console.log(show);
  }

  return (
    <>
      <Navbar onClick={handleShow} />
      <Sidebar show={show} onClick={handleShow} />
      <Hero />
    </>
  );
}

export default App;
