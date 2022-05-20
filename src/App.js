import "./App.css";
import './App.scss';
import { NavBar } from "./components/NavBar";
import { Rutas } from "./components/Rutas";
import UserInfo from "./components/UserInfo";
import Filters from "./components/Filters";
import ProductsState from "./components/context/Products/ProductsState";


function App() {


  return (
    <ProductsState>
      <NavBar />
      <Rutas />  
      <Filters />
      <UserInfo />
    </ProductsState>
  );
}

export default App;
