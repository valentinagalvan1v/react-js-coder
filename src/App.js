import { Component } from 'react';
import './App.css';
import NavBar from './components/pages/NavBar/NavBar';
import Tienda from './components/pages/Tienda/Tienda';
import Contacto from './components/pages/Contacto/Contacto';
import Home from './components/pages/Home/Home';
import Proceso from './components/pages/Proceso/Proceso';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/tienda' element={<Tienda/>} />
          <Route path='/tienda/:category' element={<Tienda />} />
          <Route path='/contacto' element={<Contacto/>} />
          <Route path='/proceso' element={<Proceso/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
