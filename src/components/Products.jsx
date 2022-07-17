import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {  Button } from '@mui/material';
import ProductItem from "./ProductItem";


const Products = () => {
  const [data,setData] = useState([])
  useEffect(() => {
    fetchData()
  },[])

  const fetchData = () => {
    fetch(`http://localhost:8080/products`).then((res) => res.json()).then((res) => setData(res))
  }
  return(
    <div>
     <ProductItem data={data} />
    </div>
  );
};

export default Products;
