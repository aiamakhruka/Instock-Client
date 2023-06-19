import "./WarehouseItemsList.scss";

import { Link } from "react-router-dom";
import Chevron from "../../assets/icons/chevron_right-24px.svg";
import RemoveIcon from "../../assets/icons/delete_outline-24px.svg";
import EditIcon from "../../assets/icons/edit-24px.svg";

function WarehouseItemsList({ itemDetails, id }) {
  return (
    <div className="warehouseList__box">
      <div className="warehouseList__info-warehouse">
        <h3 className="warehouseList__mobile-header">INVENTORYITEM</h3>
        <div className="warehouseList__chevron">
          <div className="warehouseList__chevron-link">
            <Link
              to={`/warehouses/${id}`}
              className="warehouseList__link-anchor"
            >
              {itemDetails.item_name}
            </Link>
            <img
              className="warehouseList__chevron-image"
              src={Chevron}
              alt="chevron"
            ></img>
          </div>
        </div>
      </div>
      <div className="warehouseList__info-address">
        <h3 className="warehouseList__mobile-header">CATEGORY</h3>
        <p className="warehouseList__text">{itemDetails.category}</p>
      </div>
      <div className="warehouseList__info-contact">
        <h3 className="warehouseList__mobile-header">STATUS</h3>
        <p
          className={
            itemDetails.status === "In Stock"
              ? "inventory__contact-text in-stock"
              : "inventory__contact-text out-stock"
          }
        >
          {itemDetails.status}
        </p>
      </div>
      <div className="warehouseList__info-contact-info">
        <h3 className="warehouseList__mobile-header">QTY</h3>
        <p>{itemDetails.quantity}</p>
      </div>

      <div className="warehouseList__actions">
        <Link to="/">
          <img
            src={RemoveIcon}
            alt="remove icon"
            className="warehouseList__icon"
          />
        </Link>
        <Link to={`/warehouses/${id}/edit`} className="warehouseList__link">
          <img src={EditIcon} alt="edit icon" className="warehouseList__icon" />
        </Link>
      </div>
    </div>
  );
}
export default WarehouseItemsList;
