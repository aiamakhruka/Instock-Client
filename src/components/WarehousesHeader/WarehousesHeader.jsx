import "../WarehousesHeader/WarehousesHeader.scss";
import Arrows from "../../assets/icons/sort-24px.svg";
import { Link } from "react-router-dom";
import React from "react";

function WarehousesHeader() {
  return (
    <>
      <section className="warehouses">
        <div className="warehouses__header">
          <h1 className="warehouses__header-title">Warehouses</h1>
          <form className="warehouses__header-form">
            <input
              type="search"
              name="search"
              className="warehouses__header-form-search"
              placeholder="Search..."
            />
            <Link to="/warehouses/add">
              <button className="warehouses__header-form-button">
                + Add New Warehouse
              </button>
            </Link>
          </form>
        </div>

        <section className="warehouses__heading">
          <div className="warehouses__container warehouses__container--warehouseWitdh">
            <h4 className="warehouses__heading-warehouse">WAREHOUSE</h4>
            <img
              src={Arrows}
              alt="filter-arrows"
              className="warehouses__heading-icon "
            />
          </div>
          <div className="warehouses__container warehouses__container--addressWitdh">
            <h4 className="warehouses__heading-warehouse">ADDRESS</h4>
            <img
              src={Arrows}
              alt="filter-arrows"
              className="warehouses__heading-icon"
            />
          </div>
          <div className="warehouses__container warehouses__container--contactNameWitdh">
            <h4 className="warehouses__heading-warehouse">CONTACT NAME</h4>
            <img
              src={Arrows}
              alt="filter-arrows"
              className="warehouses__heading-icon"
            />
          </div>
          <div className="warehouses__container warehouses__container--contactInformationWitdh">
            <h4 className="warehouses__heading-warehouse">
              CONTACT INFORMATION
            </h4>
            <img
              src={Arrows}
              alt="filter-arrows"
              className="warehouses__heading-icon"
            />
          </div>
          <div className="warehouses__container warehouses__container--actionsWitdh">
            <h4 className="warehouses__heading-warehouse">ACTIONS</h4>
          </div>
        </section>
      </section>
    </>
  );
}

export default WarehousesHeader;
