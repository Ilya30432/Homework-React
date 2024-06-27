import Login from "./pages/Login/Login";
import Products from "./pages/Products/Products";
import ProductsInfo from "./pages/ProductsInfo/ProductsInfo";
import Erorr from "./pages/Erorr/Erorr";
import ProductsDetail from "./pages/ProductsDetail/ProductsDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./privateRoure";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<PrivateRoute />}>
        <Route path="/products" element={<Products />} />
        <Route path="/productsInfo" element={<ProductsInfo />} />
        <Route path="/productsInfo/:id" element={<ProductsDetail />} />
      </Route>

      <Route path="*" element={<Erorr />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
