import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductItem = ({data}) => {
  const {cartData,handleAtc,handleDec,handleRem,handleInc} = useContext(CartContext)
  console.log("data in product", data)
  return (
    <div >
      {
        data.map((e) => (
          <div key={e.id} style={{border:"1px solid #cecece",width:"50%" , margin:"20px auto" , padding:"2%"}}>
            <h2>{e.name}</h2>
            <h5>{e.description}</h5>
            <h5 style={{color:"red"}}>cart count: {cartData.find((el) => (el.productId) === e.id)?.count}</h5>
            <button  onClick={() => handleAtc(e.id)}>Add to cart</button>
            <div className="btn">
              <button onClick={() => handleInc(e.id)}>Increment</button>
              <button onClick={() => handleDec(e.id)}>Decrement</button>
              <button onClick={() => handleRem(e.id)}>Remove</button>
            </div>
          </div>
        ))
      }
    </div>
  )
};

export default ProductItem;
