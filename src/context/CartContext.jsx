import React, { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState([])

  useEffect(() => {
    handleFetch()
  }, [])

  const handleFetch = () => {
    fetch(`http://localhost:8080/cartItems`).then((res) => res.json()).then((res) => setCartData(res))
  }

  // Add to Cart Function
  const handleAtc = (id) => {
    const cartItem = cartData.find((el) => (el.productId) === id);
    if(cartItem === undefined){
      const data = {
        productId:id,
        count:1,
        id
      }
      fetch(`http://localhost:8080/cartItems`,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
          "content-Type" : "application/json"
        }
      }).then((res) => res.json()).then((res) => handleFetch())
    }else{
      alert("Already Added to cart")
      // const data = {
      //   count:cartItem.count+1
      // }
      // fetch(`http://localhost:8080/cartItems/${id}`,{
      //   method:"PATCH",
      //   body:JSON.stringify(data),
      //   headers:{
      //     "content-Type" : "application/json"
      //   }
      // }).then((res) => res.json()).then((res) => handleFetch())
    }
  }


  //  dec cart count
  const handleDec = (id) => {
    const cartItem = cartData.find((el) => (el.productId) === id);
    const data = {
      count:cartItem.count-1
    }
    fetch(`http://localhost:8080/cartItems/${id}`,{
      method:"PATCH",
      body:JSON.stringify(data),
      headers:{
        "content-Type" : "application/json"
      }
    }).then((res) => res.json()).then((res) => handleFetch())

  }

  // Inc cart count
  const handleInc = (id) => {
    const cartItem = cartData.find((el) => (el.id) == id);
    console.log("handle inc" , cartItem, "---id" , id)
    const data = {
      count:cartItem.count+1
    }
    if(cartItem.count===1){
      fetch(`http://localhost:8080/cartItems/${id}`,{
      method:"DELETE",
    }).then((res) => res.json()).then((res) => handleFetch())

    }else{
      fetch(`http://localhost:8080/cartItems/${id}`,{
        method:"PATCH",
        body:JSON.stringify(data),
        headers:{
          "content-Type" : "application/json"
        }
      }).then((res) => res.json()).then((res) => handleFetch())
    }
    


  }

  // Remove from cart 
  const handleRem = (id) => {
    const cartItem = cartData.find((el) => (el.id) == id);
    if(cartItem === undefined){
      alert("It is not in cart")
    }
    else{
      fetch(`http://localhost:8080/cartItems/${id}`,{
      method:"DELETE",
    }).then((res) => res.json()).then((res) => handleFetch())
    }

  }

  const value = {
    cartData,
    setCartData,
    handleAtc,
    handleDec,
    handleInc,
    handleRem
  }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
