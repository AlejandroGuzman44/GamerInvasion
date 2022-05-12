import "./App.css";
import {Navbar} from "./components/Navbar";
import {Cart} from "./components/Cart";
import {Product_detail} from "./components/Product_detail";
import {Store} from "./components/Store";

function App() {
  return (
    <>
      <Navbar />
      <Product_detail/>
    </>
  );
}

export default App;
