import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {  Button } from '@mui/material';


const Cart = () => {
    const [data,setData] = useState([])
    useEffect(() => {
      fetchData()
    },[])
  
    const fetchData = () => {
      fetch(`http://localhost:8080/cartItems`).then((res) => res.json()).then((res) => setData(res))
    }
    return(
      <div>
        {
          data.map((e) => (
           <div>
             <h1>id:{e.productId}</h1>
           </div>
          ))
        }
      </div>
    );
}

export default Cart
