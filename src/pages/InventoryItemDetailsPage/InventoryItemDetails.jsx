import "./InventoryItemDetails.scss";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Edit from "../../assets/icons/edit-24px.svg";
import ArrowBack from "../../assets/icons/arrow_back-24px.svg";
import {
  getInventoryDetailEndpoint,
  getWarehousesEndpoint,
} from "../../utils/api";

function InventoryItemDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [inventoryItem, setInventoryItem] = useState(null);
  const [warehouse, setWarehouse] = useState({});

  useEffect(() => {
    axios
      .get(getInventoryDetailEndpoint(id))
      .then((response) => {
        setInventoryItem(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  useEffect(() => {
    if (inventoryItem) {
      axios
        .get(getWarehousesEndpoint)
        .then((response) => {
          const warehouses = response.data;
          const foundWarehouse = warehouses.find(
            (warehouse) => warehouse.id === inventoryItem.warehouse_id
          );
          setWarehouse(foundWarehouse);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [inventoryItem]);

  if (!inventoryItem) {
    return <div>Loading...</div>;
  }
  const checkStatus = (status) => status === "In Stock";

  return (
    <section className="item-details">
      <div className="item-details__header">
        <img
          className="item-details__arrow-icon"
          src={ArrowBack}
          alt="arrow back"
          onClick={() => navigate(-1)}
        />
        <h1 className="item-details__title">{inventoryItem.item_name}</h1>
        <Link
          to={`/inventory/${id}/edit`}
          className="item-details__edit-container"
        >
          <button className="item-details__header-button">
            <img
              className="item-details__header-button-icon"
              src={Edit}
              alt="edit"
            />
            <p className="item-details__header-button-text">Edit</p>
          </button>
        </Link>
      </div>
      <div className="item-details__container">
        <div className="item-details__description">
          <h3 className="item-details__description-header">
            ITEM DESCRIPTION:
          </h3>
          <p className="item-details__description-description">
            {inventoryItem.description}
          </p>
          <h3 className="item-details__description-header">CATEGORY:</h3>
          <p className="item-details__description-description  item-details__category">
            {inventoryItem.category}
          </p>
        </div>
        <div className="item-details__availability">
          <div className="item-details__availability-amount">
            <div className="item-details__availability-amount-status">
              <h3 className="item-details__description-header">STATUS:</h3>
              <p
                className={
                  checkStatus(inventoryItem.status)
                    ? "item-details__availability-instock"
                    : "item-details__availability-outstock"
                }
              >
                {inventoryItem.status}
              </p>
            </div>
            <div className="item-details__availability-amount-quantity">
              <h3 className="item-details__description-header">QUANTITY:</h3>
              <p className="item-details__description-description">
                {inventoryItem.quantity}
              </p>
            </div>
          </div>
          <div className="item-details__availability-warehouse">
            <h3 className="item-details__description-header">WAREHOUSE:</h3>
            <p className="item-details__description-description">
              {warehouse.warehouse_name}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InventoryItemDetails;
