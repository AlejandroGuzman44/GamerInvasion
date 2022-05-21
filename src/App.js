import "./App.css";
import './App.scss';
import { NavBar } from "./components/NavBar";
import { Rutas } from "./components/Rutas";
import UserInfo from "./components/UserInfo";
import Filters from "./components/Filters";
import { ContextoProvider } from './components/context2.0/Contexto';
import Productos from './components/context2.0/Productos'; 
import Filtros from "./components/Filtros";
import RadioButtonFilter from "./components/CheckBoxes";


function App() {


  return (
    <ContextoProvider>
      <NavBar />
      <Rutas />  
      <Filters />
      <UserInfo />
      <Filtros />
      <RadioButtonFilter />
    </ContextoProvider>
  );
}

export default App;
