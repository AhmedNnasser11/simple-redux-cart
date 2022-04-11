import "./App.scss";
import Home from "./pages/Home";
import { Routes, Route, Link } from "react-router-dom";
import NavComponent from './components/Navbar/Navbar'
import Cart from "./pages/Cart";
function App() {

  return (
    <>
      <NavComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart/>} />
      </Routes>
    </>
  );
}

export default App;
