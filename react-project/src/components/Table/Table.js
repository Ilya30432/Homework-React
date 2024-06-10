import "./Table.css";
import { BiSolidPencil } from "react-icons/bi";
import { FaTrashCan } from "react-icons/fa6";
import vector from "./vector.svg";

const titleInfo = ["Id","Category","Name","Quantity","Price(₴)"]

const productInfo = [
  { id: 0, category: "Pc", name: "Lenovo", quantity: 5, price: 25000 },
  { id: 1, category: "Tablet", name: "Ipad", quantity: 5, price: 29000 },
  { id: 2, category: "Notebook", name: "Asus", quantity: 5, price: 34000 },
];

function Table({}) {
  return (
    <table className="table-product">
      <thead>
        <tr className = "title-row">
          {titleInfo.map((info,index) => (
            <td key={index} className="title-info">{info}
            <img src={vector} alt="vector" className="vector"/>
            </td>
          ))}
          <td className="title-info"></td>
        </tr>
      </thead>
      <tbody>
        {productInfo.map((product) => (
          <tr key={product.id} className={`row-${product.id}`}>
            {Object.values(product).map((info,index) => (
              <td key={index} className={`info-${product.id}`}>{info}</td>
            ))}
            <td>
              <p className="icon">
                <BiSolidPencil />
                <FaTrashCan/>
              </p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
