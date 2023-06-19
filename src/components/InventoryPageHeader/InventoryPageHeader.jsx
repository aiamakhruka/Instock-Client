import "./InventoryPageHeader.scss";
import { Link } from "react-router-dom";
import Arrows from "../../assets/icons/sort-24px.svg";
import React from "react";
function InventoryPageHeader() {
  return (
    <>
      <section className="inventory">
        <div className="inventory__header">
          <h1 className="inventory__header-title">Inventory</h1>
          <form className="inventory__header-form">
            <input
              type="search"
              name="search"
              className="inventory__header-form-search"
              placeholder="Search..."
            />
            <Link to="/inventory/add">
              <button className="inventory__header-form-button">
                + Add New Item
              </button>
            </Link>
          </form>
        </div>

        <section className="inventory__heading">
          <div className="inventory__container inventory__container--itemNameWitdh">
            <h4 className="inventory__heading-warehouse">INVENTORY ITEM</h4>
            <img
              src={Arrows}
              alt="filter-arrows"
              className="inventory__heading-icon "
            />
          </div>
          <div className="inventory__container inventory__container--categoryWitdh">
            <h4 className="inventory__heading-warehouse">CATEGORY</h4>
            <img
              src={Arrows}
              alt="filter-arrows"
              className="inventory__heading-icon"
            />
          </div>
          <div className="inventory__container inventory__container--statusWitdh">
            <h4 className="inventory__heading-warehouse">STATUS</h4>
            <img
              src={Arrows}
              alt="filter-arrows"
              className="inventory__heading-icon"
            />
          </div>

          <div className="inventory__container inventory__container--quantityWitdh">
            <h4 className="inventory__heading-warehouse">QTY</h4>
            <img
              src={Arrows}
              alt="filter-arrows"
              className="inventory__heading-icon"
            />
          </div>

          <div className="inventory__container inventory__container--warehouseWitdh">
            <h4 className="inventory__heading-warehouse">WAREHOUSE</h4>
            <img
              src={Arrows}
              alt="filter-arrows"
              className="inventory__heading-icon"
            />
          </div>
          <div className="inventory__container inventory__container--actionsWitdh">
            <h4 className="inventory__heading-warehouse">ACTIONS</h4>
          </div>
        </section>
      </section>
    </>
  );
}
export default InventoryPageHeader;
