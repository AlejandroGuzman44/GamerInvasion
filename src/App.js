import "./App.css";
import './App.scss';
import { NavBar } from "./components/NavBar/NavBar";
import { Rutas } from "./Rutas/Rutas";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <Rutas />
      <Footer />
      </div>
    </>
  );
}

export default App;
