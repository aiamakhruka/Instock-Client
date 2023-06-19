export const API_URL = "http://localhost:8080";

export const getWarehousesEndpoint = `${API_URL}/warehouses`;
export const postWarehouseEndpoint = getWarehousesEndpoint;
export const getWarehouseDetailEndpoint = (id) => `${API_URL}/warehouses/${id}`;
export const putWarehouseEndpoint = getWarehouseDetailEndpoint;
export const deleteWarehouseEndpoint = getWarehouseDetailEndpoint;
export const getInventoriesEndpoint = `${API_URL}/inventories`;
export const postInventoryEndpoint = getInventoriesEndpoint;
export const getInventoryDetailEndpoint = (id) =>
  `${API_URL}/inventories/${id}`;
export const getWarehouseInventoryItemsEndpoint = (id) =>
  `${API_URL}/warehouses/${id}/inventories`;
export const putInventoryEndpoint = getInventoryDetailEndpoint;
export const InventoryEndpoint = getInventoryDetailEndpoint;
