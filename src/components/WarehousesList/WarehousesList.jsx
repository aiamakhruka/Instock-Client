import Warehouse from "../Warehouse/Warehouse";
import { getWarehousesEndpoint } from "../../utils/api";
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function WarehousesList() {
  const [defaultWarehouses, setdefaultWarehouses] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const fetchWarehouses = () => {
    axios
      .get(getWarehousesEndpoint)
      .then((response) => {
        setIsLoading(false);
        setdefaultWarehouses(response.data);
      })
      .catch(() => {
        setHasError(true);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchWarehouses();
  }, []);

  if (isLoading) {
    return <span>Loading...</span>;
  }
  if (hasError) {
    return <h1>error</h1>;
  }

  return (
    <ul>
      {defaultWarehouses.map((warehouse) => {
        return (
          <li className="warehouse" key={warehouse.id}>
            {
              <Warehouse
                id={warehouse.id}
                name={warehouse.warehouse_name}
                address={warehouse.address}
                city={warehouse.city}
                country={warehouse.country}
                contactName={warehouse.contact_name}
                contactPhone={warehouse.contact_phone}
                contactEmail={warehouse.contact_email}
                fetchWarehouses={fetchWarehouses}
              />
            }
          </li>
        );
      })}
    </ul>
  );
}

export default WarehousesList;
