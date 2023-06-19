import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import arrowBackIcon from "../../assets/icons/arrow_back-24px.svg";
import errorIcon from "../../assets/icons/error-24px.svg";
import {
  getWarehousesEndpoint,
  postInventoryEndpoint,
  getInventoriesEndpoint,
} from "../../utils/api";
import "./AddInventoryPage.scss";

const initialValues = {
  itemName: "",
  quantity: 0,
};

const initialErrors = {
  id: false,
  itemName: false,
  description: false,
  category: false,
  status: false,
  quantity: false,
};

export default function AddInventoryPage() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [warehouseId, setWarehouseId] = useState("");
  const [status, setStatus] = useState("In Stock");
  const [categories, setCategories] = useState([]);
  const [warehouses, setWarehouses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(getWarehousesEndpoint).then((response) => {
      const warehouses = response.data;
      const filteredwarehouse = warehouses.map(({ id, warehouse_name }) => ({
        id,
        warehouse_name,
      }));
      setWarehouses(filteredwarehouse);
    });

    axios.get(getInventoriesEndpoint).then((response) => {
      const inventories = response.data;
      const categories = inventories.map((inventory) => inventory.category);
      const uniqueCategory = [];
      categories.forEach((category) => {
        if (!uniqueCategory.includes(category) && category !== "") {
          uniqueCategory.push(category);
        }
      });

      setCategories(uniqueCategory);
    });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: false,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = {};

    if (values.itemName.trim() === "") {
      validationErrors.itemName = true;
    }
    if (description.trim() === "") {
      validationErrors.description = true;
    }
    if (category === "") {
      validationErrors.category = true;
    }
    if (
      values.quantity === "" ||
      (status === "In Stock" && values.quantity === 0)
    ) {
      validationErrors.quantity = true;
    }
    if (warehouseId === "") {
      validationErrors.id = true;
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      axios
        .post(postInventoryEndpoint, {
          warehouse_id: warehouseId,
          item_name: values.itemName,
          description: description,
          category: category,
          status: status,
          quantity: values.quantity,
        })
        .then(() => {
          navigate(-1);
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  const handleCancelClick = () => {
    setValues(initialValues);
    setDescription("");
    setCategories("");
    setWarehouseId("");
    navigate(-1);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
    const { name } = event.target;

    setErrors({
      ...errors,
      [name]: false,
    });
  };

  const handleStatus = (event) => {
    setStatus(event.target.value);
  };

  const handleCategorySelection = (event) => {
    setCategory(event.target.value);
    const { name } = event.target;

    setErrors({
      ...errors,
      [name]: false,
    });
  };

  const handleWarehouseSelection = (event) => {
    setWarehouseId(event.target.value);
    const { name } = event.target;

    setErrors({
      ...errors,
      [name]: false,
    });
  };

  return (
    <article className="add-inventory">
      <div className="add-inventory__header">
        <img
          className="go-back-arrow"
          src={arrowBackIcon}
          alt="go back button"
          onClick={() => {
            navigate(-1);
          }}
        />
        <h1 className="add-inventory__title">Add New Inventory Item</h1>
      </div>
      <form className="item-form" onSubmit={handleSubmit}>
        <div className="details-form">
          <h2 className="item-form__title">Item Details</h2>
          <label className="item-form__label">
            Item Name
            <input
              className={
                errors.itemName
                  ? "item-form__input item-form__input--error"
                  : "item-form__input"
              }
              type="text"
              name="itemName"
              placeholder="Item Name"
              value={values.itemName}
              onChange={handleInputChange}
            />
            {errors.itemName && (
              <div className="item-form__error">
                <img
                  className="item-form__error-icon"
                  src={errorIcon}
                  alt="something wrong here"
                />
                <p className="item-form__error-message">
                  This field is required
                </p>
              </div>
            )}
          </label>
          <label className="item-form__label">
            Description
            <textarea
              className={
                errors.description
                  ? "item-form__textarea item-form__textarea--error"
                  : "item-form__textarea"
              }
              name="description"
              placeholder="Please enter a brief item description..."
              onChange={handleDescription}
            ></textarea>
            {errors.description && (
              <div className="item-form__error item-form__error--description">
                <img
                  className="item-form__error-icon"
                  src={errorIcon}
                  alt="something wrong here"
                />
                <p className="item-form__error-message">
                  This field is required
                </p>
              </div>
            )}
          </label>
          <label className="item-form__label">
            Category
            <select
              className={
                errors.category
                  ? "item-form__select item-form__select--error"
                  : category
                  ? "item-form__select"
                  : "item-form__select item-form__select--default"
              }
              name="category"
              defaultValue={"DEFAULT"}
              onChange={handleCategorySelection}
            >
              <option value="DEFAULT" disabled>
                Please select
              </option>
              {categories.map((category) => {
                return (
                  <option value={category} key={category}>
                    {category}
                  </option>
                );
              })}
            </select>
            {errors.category && (
              <div className="item-form__error">
                <img
                  className="item-form__error-icon"
                  src={errorIcon}
                  alt="something wrong here"
                />
                <p className="item-form__error-message">
                  This field is required
                </p>
              </div>
            )}
          </label>
        </div>
        <div className="item-availability">
          <h2 className="item-form__title">Item Availability</h2>
          <label className="item-form__label">Status </label>
          <div className="item-form__radio">
            <label className="item-form__radio-label">
              <input
                className="item-form__status"
                type="radio"
                name="status"
                value="In Stock"
                checked={status === "In Stock"}
                onChange={handleStatus}
              />
              In stock
            </label>
            <label className="item-form__radio-label">
              <input
                className="item-form__status"
                type="radio"
                name="status"
                value="Out of Stock"
                checked={status === "Out of Stock"}
                onChange={handleStatus}
              />
              Out of stock
            </label>
          </div>

          {status === "In Stock" && (
            <label className="item-form__label">
              Quantity
              <input
                className={
                  errors.quantity
                    ? "item-form__input item-form__input--error item-form__input--quantity"
                    : "item-form__input item-form__input--quantity"
                }
                type="number"
                name="quantity"
                value={values.quantity}
                onChange={handleInputChange}
              />
              {errors.quantity && (
                <div className="item-form__error">
                  <img
                    className="item-form__error-icon"
                    src={errorIcon}
                    alt="something wrong here"
                  />
                  <p className="item-form__error-message">
                    This field is required
                  </p>
                </div>
              )}
            </label>
          )}
          <label className="item-form__label">
            Warehouse
            <select
              className={
                errors.id
                  ? "item-form__select item-form__select--error"
                  : warehouseId
                  ? "item-form__select"
                  : "item-form__select item-form__select--default"
              }
              name="id"
              defaultValue={"DEFAULT"}
              onChange={handleWarehouseSelection}
            >
              <option value="DEFAULT" disabled>
                Please select
              </option>
              {warehouses.map(({ id, warehouse_name }) => {
                return (
                  <option value={id} key={id}>
                    {warehouse_name}
                  </option>
                );
              })}
            </select>
            {errors.warehouse && (
              <div className="item-form__error">
                <img
                  className="item-form__error-icon"
                  src={errorIcon}
                  alt="something wrong here"
                />
                <p className="item-form__error-message">
                  This field is required
                </p>
              </div>
            )}
          </label>
        </div>
        <div className="add-inventory__buttons">
          <button
            type="button"
            className="add-inventory__buttons-cancel"
            onClick={handleCancelClick}
          >
            Cancel
          </button>
          <button className="add-inventory__buttons-submit">+ Add Item</button>
        </div>
      </form>
    </article>
  );
}
