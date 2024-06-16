import logo from "../Products/rozetka1.svg"
import CardProducts from "../../components/CardProducts/CardProdutcts";
import "./ProductsInfo.css"

function ProductsInfo() {
    return (
    <div className="products-info">
        <img src={logo} alt="rozetka"/>
        <CardProducts/>
    </div>
    );
  }
  
  export default ProductsInfo;