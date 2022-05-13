import "./App.css";
import { Navbar } from "./components/Navbar";
import { Cart } from "./components/Cart";
import { Preorder } from "./components/Preorder";
import { Product_detail } from "./components/Product_detail";
import { Store } from "./components/Store";
import { Rutas } from "./components/Rutas";

function App() {
  return (
    <div>
      <Navbar />
      <Rutas />
    </div>
  );
}

export default App;
