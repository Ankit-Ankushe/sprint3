import React, { useContext } from "react";
import {Link} from 'react-router-dom';
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const {cartData} = useContext(CartContext)
  const {token} = useContext(AuthContext)
  return (  
    <div id="navbar" style={{display:"flex",justifyContent:"space-around",gap:"30px",backgroundColor:"yellow",color:"black"}}>
      <h3>{(token.token)?"Loged in":"Log in first"}</h3>
      <Link to={"/home"}>Home</Link>
      <Link to={"/"}>Login</Link>
      <Link to={"/products"}>Products</Link>
      <Link to={"/cart"}>Cart</Link>
      <h3>total cart:{cartData.reduce((prev,curr) => prev +curr.count , 0 )}</h3>
    </div>
  )
};

export default Navbar;
