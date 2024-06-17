import "./Table.css";
import { BiSolidPencil } from "react-icons/bi";
import { FaTrashCan } from "react-icons/fa6";
import vector from "./vector.svg";

const titleInfo = ["Id", "Category", "Name", "Quantity", "Price(₴)"];

function Table({products}) {
  return (
    <table className="table-product">
      <thead>
        <tr className="title-row">
          {titleInfo.map((info, index) => (
            <td key={index} className="title-info">
              {info}
              <img src={vector} alt="vector" className="vector" />
            </td>
          ))}
          <td className="title-info"></td>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id} className={`row-${product.id}`}>
            {Object.values(product).map((info, index) => (
              <td key={index} className={`info-${product.id}`}>
                {info}
              </td>
            ))}
            <td>
              <p className="icon">
                <BiSolidPencil />
                <FaTrashCan />
              </p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
