import React from "react";
import { FaTrash } from "react-icons/fa";

function ItemListArea({ items, handleItemInputChange, handleRemoveClick }) {
  return (
    <>
      <h6 className="text-grey font-bold mb-4 mt-12">Item List</h6>

      <div className="grid grid-cols-4 gap-6 mb-0">
        <div>
          <label
            htmlFor="item_name"
            className="block  text-sm  text-grey font-bold dark:text-white"
          >
            Item Name
          </label>
        </div>
        <div>
          <label
            htmlFor="item_name"
            className="block  text-sm  text-grey font-bold dark:text-white"
          >
            Qty.
          </label>
        </div>
        <div>
          <label
            htmlFor="post_code"
            className="block  text-sm  text-grey font-bold dark:text-white"
          >
            Price
          </label>
        </div>
        <div>
          <label
            htmlFor="country"
            className="block  text-sm  text-grey font-bold dark:text-white"
          >
            Total
          </label>
        </div>
      </div>

      {items.map((item, index) => (
        <div className="grid lg:grid-cols-4 grid-cols-4 gap-6 mb-6" key={index}>
          <div>
            <input
              type="text"
              name="name"
              value={item?.name}
              onChange={(event) => handleItemInputChange(event, index)}
              className="bg-gray-50 border mt-2 border-grey text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Item Name"
              required
            />
          </div>
          <div>
            <input
              type="number"
              name="qty"
              value={item?.qty}
              onChange={(event) => handleItemInputChange(event, index)}
              className="bg-gray-50 border mt-2 border-grey text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Qty."
              required
            />
          </div>
          <div>
            <input
              type="number"
              name="price"
              value={item?.price}
              onChange={(event) => handleItemInputChange(event, index)}
              className="bg-gray-50 border mt-2 border-grey text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray--600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Price"
              required
            />
          </div>
          <div className="flex items-center justify-between text-grey font-bold">
            <div>{item?.total.toFixed(2)}</div>
            <button
              className="text-grey  font-bold inline-flex items-center justify-center  shadow-sm "
              type="button"
              onClick={() => handleRemoveClick(index)}
            >
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default ItemListArea;
