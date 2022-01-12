import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import ProductComponet from "./ProductComponet";
const ProductPage = () => {
  const pro = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  // const url = ;
  // console.log(url);
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
        console.log(response);
      });
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log("Products :", pro);
  return (
    <>
      <div className="ui grid container">
        <ProductComponet />
      </div>
    </>
  );
};

export default ProductPage;
