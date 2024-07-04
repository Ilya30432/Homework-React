import logo from "../Products/rozetka1.svg";
import CardProducts from "../../components/CardProducts/CardProdutcts";
import { useNavigate } from "react-router-dom";
import "./ProductsInfo.css";
import React, { useState, useEffect } from "react";
import { API_URL } from "../../constants"


const ProductsInfo = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/productsInfo/${id}`);
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const infoProduct = async () => {
      try {
        const response = await fetch(`${API_URL}/Product`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log("Erorr", error);
      }
    };
    infoProduct();
  }, []);

  return (
    <div className="products-info">
      <img src={logo} alt="rozetka" />
      <div className="box-info">
        {products.map((product) => (
          <CardProducts product={product} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
};
export default ProductsInfo;
