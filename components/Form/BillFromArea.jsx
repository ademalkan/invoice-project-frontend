import React from "react";

function BillFromArea({ handleInputChange, formData }) {
  return (
    <div>
      <h6 className="text-purple font-bold mb-4">Bill From</h6>

      <div className="grid mb-6 md:grid-col">
        <label
          htmlFor="address_from"
          className="block  text-sm text-grey font-bold dark:text-white"
        >
          Street Address
          <input
            type="text"
            onChange={handleInputChange}
            className="bg-gray-50 border mt-2 border-grey text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Street Address"
            name="address_from"
            id="address_from"
            value={formData.address_from}
            required
          />
        </label>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div>
          <label
            htmlFor="city_from"
            className="block  text-sm text-grey font-bold dark:text-white"
          >
            City
          </label>
          <input
            type="text"
            id="city_from"
            name="city_from"
            onChange={handleInputChange}
            className="bg-gray-50 border mt-2 border-grey text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="City"
            value={formData.city_from}
            required
          />
        </div>
        <div>
          <label
            htmlFor="post_code_from"
            className="block  text-sm text-grey font-bold dark:text-white"
          >
            Post Code
          </label>
          <input
            type="text"
            id="post_code_from"
            name="post_code_from"
            onChange={handleInputChange}
            className="bg-gray-50 border mt-2 border-grey text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Post Code"
            value={formData.post_code_from}
            required
          />
        </div>
        <div>
          <label
            htmlFor="country_from"
            className="block  text-sm text-grey font-bold dark:text-white"
          >
            Country
          </label>
          <input
            type="text"
            id="country_from"
            name="country_from"
            onChange={handleInputChange}
            className="bg-gray-50 border mt-2 border-grey text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Country"
            value={formData.country_from}
            required
          />
        </div>
      </div>
    </div>
  );
}

export default BillFromArea;
