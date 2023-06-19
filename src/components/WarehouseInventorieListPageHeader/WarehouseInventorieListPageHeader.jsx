import "./WarehouseInventorieListPageHeader.scss";
import Arrows from "../../assets/icons/sort-24px.svg";
import React from "react";
import WarehouseDetails from "../WarehouseDetails/WarehouseDetails";
function WarehouseInventorieListPageHeader() {
  return (
    <>
      <WarehouseDetails />
      <section className="warehouseInventoryHeader">
        <div className="warehouseInventoryHeader__container warehouseInventoryHeader__container--itemNameWitdh">
          <h4 className="warehouseInventoryHeader__heading-warehouse">
            INVENTORY ITEM
          </h4>
          <img
            src={Arrows}
            alt="filter-arrows"
            className="warehouseInventoryHeader__heading-icon "
          />
        </div>
        <div className="warehouseInventoryHeader__container warehouseInventoryHeader__container--categoryWitdh">
          <h4 className="warehouseInventoryHeader__heading-warehouse">
            CATEGORY
          </h4>
          <img
            src={Arrows}
            alt="filter-arrows"
            className="warehouseInventoryHeader__heading-icon"
          />
        </div>
        <div className="warehouseInventoryHeader__container warehouseInventoryHeader__container--statusWitdh">
          <h4 className="warehouseInventoryHeader__heading-warehouse">
            STATUS
          </h4>
          <img
            src={Arrows}
            alt="filter-arrows"
            className="warehouseInventoryHeader__heading-icon"
          />
        </div>
        <div className="warehouseInventoryHeader__container warehouseInventoryHeader__container--quantityWitdh">
          <h4 className="warehouseInventoryHeader__heading-warehouse">
            QUANTITY
          </h4>
          <img
            src={Arrows}
            alt="filter-arrows"
            className="warehouseInventoryHeader__heading-icon"
          />
        </div>
        <div className="warehouseInventoryHeader__container warehouseInventoryHeader__container--actionsWitdh">
          <h4 className="warehouseInventoryHeader__heading-warehouse">
            ACTIONS
          </h4>
        </div>
      </section>
    </>
  );
}
export default WarehouseInventorieListPageHeader;
