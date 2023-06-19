import axios from "axios";
import { useState, useEffect } from "react";
import { getInventoriesEndpoint } from "../../utils/api";
import InventoryItem from "../InventoryItem/InventoryItem";

function InventoryPageList() {
  const [InventoryList, setInventoryList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const fetchInventories = () => {
    axios
      .get(getInventoriesEndpoint)
      .then((response) => {
        setIsLoading(false);
        setInventoryList(response.data);
      })
      .catch(() => {
        setHasError(true);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchInventories();
  }, []);

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }
  if (hasError) {
    return <h1>error</h1>;
  }

  return (
    <>
      {InventoryList.map((itemDetails) => {
        return (
          <InventoryItem
            itemDetails={itemDetails}
            key={itemDetails.id}
            id={itemDetails.id}
            fetchInventories={fetchInventories}
          />
        );
      })}
    </>
  );
}
export default InventoryPageList;
