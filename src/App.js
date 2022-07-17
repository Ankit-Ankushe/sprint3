import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import {Routes,Route} from 'react-router-dom'
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

function App() {
  const {token} = useContext(AuthContext)
  return (
    <div className="App">
     <Navbar/>
      <Routes>
        <Route path="/home" element={(!token.token)?<Login/>:<Home/>}></Route>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
