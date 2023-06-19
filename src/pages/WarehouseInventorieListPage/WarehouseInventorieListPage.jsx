import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./WarehouseInventorieListPage.scss";
import WarehouseInventorieListPageHeader from "../../components/WarehouseInventorieListPageHeader/WarehouseInventorieListPageHeader";
import WarehouseInventorieListPageList from "../../components/WarehouseInventorieListPageList/WarehouseInventorieListPageList";
function WarehouseInventorieListPage() {
  const { id } = useParams();
  const [warehouseItemsList, setwarehouseItemsList] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/warehouses/${id}/inventories`)
      .then((response) => {
        setwarehouseItemsList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (!warehouseItemsList) {
    return <div>Loading...</div>;
  }

  return (
    <div className="warehouse-page">
      <WarehouseInventorieListPageHeader />
      <WarehouseInventorieListPageList />
    </div>
  );
}
export default WarehouseInventorieListPage;
