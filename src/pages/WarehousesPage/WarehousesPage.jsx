import "../WarehousesPage/WarehousesPage.scss";
import React from "react";
import WarehousesList from "../../components/WarehousesList/WarehousesList";
import WarehousesHeader from "../../components/WarehousesHeader/WarehousesHeader";

function WarehousesPage() {
  return (
    <div className="warehouse-page">
      <WarehousesHeader />
      <WarehousesList />
    </div>
  );
}

export default WarehousesPage;
