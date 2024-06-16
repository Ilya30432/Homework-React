import logo from "../Products/rozetka1.svg"
import CardProducts from "../../components/CardProducts/CardProdutcts";
import "./ProductsInfo.css"

const productInfo = [
    { id: 0, name: "Ноутбук Lenovo Y50-70 Aluminum Black", quantity: 5, price: 25000 },
    { id: 1, name: "Ноутбук Asus A60-70 Aluminum Blue", quantity: 5, price: 29000 },
    { id: 2, name: "Ноутбук HP K100-70 Aluminum White", quantity: 5, price: 34000 },
    { id: 3, name: "Ноутбук HP K100-70 Aluminum White", quantity: 5, price: 34000 },
    { id: 4, name: "Ноутбук HP K100-70 Aluminum White", quantity: 5, price: 34000 },
    { id: 5, name: "Ноутбук HP K100-70 Aluminum White", quantity: 5, price: 34000 },
  ];


const ProductsInfo = () => {
    return (
    <div className="products-info">
        <img src={logo} alt="rozetka"/>
            <div className="box-info">
            {productInfo.map((product) => <CardProducts product={product} /> )}
    </div>
    </div>
    );
  }
  export default ProductsInfo;