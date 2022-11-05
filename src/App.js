import './App.css';
import NavBar from './components/pages/NavBar/NavBar';
import Tienda from './components/pages/Tienda/Tienda';
import Contacto from './components/pages/Contacto/Contacto';
import Home from './components/pages/Home/Home';
import Proceso from './components/pages/Proceso/Proceso';
import { Route, Routes } from "react-router-dom"
import Provider from './contexts/ContextCart';
import Cart from './components/Cart/Cart';
import Form from './components/Form/Form';

function App() {
  return (
    <Provider>
      <div className="App">
        <NavBar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/tienda' element={<Tienda />} />
            <Route path='/tienda/:category' element={<Tienda />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/proceso' element={<Proceso />} />
            <Route path='/cart' element={<Cart></Cart>}></Route>
            <Route path='/checkout' element={<Form></Form>}></Route>
          </Routes>
        </div>
      </div>
    </Provider>
  );
}

export default App;
