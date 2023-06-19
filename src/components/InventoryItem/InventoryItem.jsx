import React, { useState } from "react";
import { Link } from "react-router-dom";
import Chevron from "../../assets/icons/chevron_right-24px.svg";
import RemoveIcon from "../../assets/icons/delete_outline-24px.svg";
import EditIcon from "../../assets/icons/edit-24px.svg";
import Modal from "../../modal/InventoryModal/InventoryModal";
import "./InventoryItem.scss";

function InventoryItem({ itemDetails, id, fetchInventories }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (isDeleted) => {
    setIsModalOpen(false);
    if (isDeleted) {
      fetchInventories();
    }
  };

  return (
    <div className="inventory__box">
      <div className="inventory__info-inventory">
        <h3 className="inventory__mobile-header">INVENTORY ITEM</h3>
        <div className="inventory__chevron">
          <div className="inventory__chevron-link">
            <Link to={`/inventory/${id}`} className="inventory__link-anchor">
              {itemDetails.item_name}
            </Link>
            <Link to={`/inventory/${id}`}>
              <img
                className="inventory__chevron-image"
                src={Chevron}
                alt="chevron"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="inventory__info-category">
        <h3 className="inventory__mobile-header">CATEGORY</h3>
        <p className="inventory__text">{itemDetails.category}</p>
      </div>
      <div className="inventory__info-status">
        <h3 className="inventory__mobile-header">STATUS</h3>
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
      <div className="inventory__info-quantity">
        <h3 className="inventory__mobile-header">QTY</h3>
        <p className="inventory__text">{itemDetails.quantity}</p>
      </div>
      <div className="inventory__info-warehouse">
        <h3 className="inventory__mobile-header">WAREHOUSE</h3>
        <p className="inventory__text">{itemDetails.warehouse_name}</p>
      </div>

      <div className="inventory__actions">
        <Link to="/inventory">
          <img
            src={RemoveIcon}
            alt="remove icon"
            className="inventory__icon"
            onClick={handleOpenModal}
          />
        </Link>
        <Link to={`/inventory/${id}/edit`} className="inventory__link">
          <img src={EditIcon} alt="edit icon" className="inventory__icon" />
        </Link>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        itemDetailsId={id}
        itemDetailsName={itemDetails.item_name}
      />
    </div>
  );
}
export default InventoryItem;
