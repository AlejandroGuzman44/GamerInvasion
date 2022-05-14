import "./App.css";
import './App.scss';
import { Cart } from "./components/Cart/Cart";
import { NavBar } from "./components/NavBar";
import { Rutas } from "./components/Rutas";
import {Store} from './components/Tienda/Store';
import { ContextoCarritoProvider } from "./Context/ContextoCarrito";

function App() {
  return (
    <ContextoCarritoProvider>
      <NavBar />
      <Cart/>
      <Rutas />
    </ContextoCarritoProvider>
  );
}

export default App;
