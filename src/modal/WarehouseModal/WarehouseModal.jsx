import React from "react";
import axios from "axios";
import close from "../../assets/icons/close-24px.svg";
import "./WarehouseModal.scss";

const Modal = ({ isOpen, onClose, warehouseId, warehouseName }) => {
  const handleDelete = () => {
    axios
      .delete(`http://localhost:8080/warehouses/${warehouseId}`)
      .then(() => {
        onClose(true); // Close the modal after successful deletion
      })
      .then(() => {
        console.log("Delete Success");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal__container">
        <div>
          <img
            src={close}
            alt="X"
            className="modal__x"
            onClick={() => {
              onClose(false);
            }}
          />
          <h2 className="modal__title">Delete {warehouseName} Warehouse?</h2>
          <p className="modal__text">
            Please confirm that you'd like to delete the {warehouseName} from
            the list of warehouses. You won't be able to undo this action.
          </p>
        </div>
        <div className="modal__button-container">
          <button
            className="modal__cancel"
            onClick={() => {
              onClose(false);
            }}
          >
            Cancel
          </button>
          <button className="modal__delete" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
