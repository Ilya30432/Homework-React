import Button from '../../components/Button/Button';
import Table from '../../components/Table/Table';
import './Products.css';
import logo from "./rozetka1.svg";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { GoPlus } from "react-icons/go";

function Products() {
  return (
    <div className="products">
        <div className ="logos">
            <img src ={logo} alt="logo" />
        </div>
        <div className = "box-btn">
            <Button className= "btn-table" text= "Preview" icon={<MdOutlinePeopleAlt/>}/>
            <Button className= "btn-table" text= "Add product" icon={<GoPlus/>} />
        </div>
        <h2 className = "title">Products</h2>
        <Table />
    </div>
  );
}

export default Products;