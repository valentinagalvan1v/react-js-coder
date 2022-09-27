import { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar.js';
import Tienda from './components/Tienda';
import Contacto from './Contacto';
import Home from './Home';
import Proceso from './Proceso';


function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      Component = Home
      break;
    case "/tienda":
      Component = Tienda
      break;
    case "/proceso":
      Component = Proceso
      break;
    case "/contacto":
      Component = Contacto
    default:
      break;
  }

  return (
    <div className="App">
      <NavBar />
      <Component/>
    </div>
  );
}

export default App;
