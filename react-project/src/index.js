import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './pages/Login/Login';
import Products from './pages/Products/Products'
import ProductsInfo from './pages/ProductsInfo/ProductsInfo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     {/* <ProductsInfo/> */}
    {/*<Login/>*/}
    <Products />
  </React.StrictMode>
);
