import "./App.css";
import {Navbar} from "./components/Navbar";
import {Cart} from "./components/Cart";
import {Product_detail} from "./components/Product_detail";

function App() {
  return (
    <>
      <Navbar />
      <Cart />
      <Product_detail />
    </>
  );
}

export default App;
