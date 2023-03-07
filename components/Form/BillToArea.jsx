import React from "react";

function BillToArea({
  handleInputChange,
  formData,
  selectedOption,
  handleOptionChange,
}) {
  return (
    <div>
      <h6 className="text-purple font-bold mb-4">Bill To</h6>

      <div className="grid mb-6 md:grid-col">
        <label
          htmlFor="client_name"
          className="block  text-sm  text-grey font-bold dark:text-white"
        >
          Client’s Name
          <input
            type="text"
            onChange={handleInputChange}
            className="bg-gray-50 border mt-2 border-grey text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="client_name"
            id="client_name"
            placeholder="Client’s Name"
            value={formData.client_name}
            required
          />
        </label>
      </div>
      <div className="grid mb-6 md:grid-col">
        <label
          htmlFor="client_email"
          className="block  text-sm  text-grey font-bold dark:text-white"
        >
          Client’s Email
          <input
            type="email"
            onChange={handleInputChange}
            className="bg-gray-50 border mt-2 border-grey text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Client’s Email"
            name="client_email"
            id="client_email"
            value={formData.client_email}
            required
          />
        </label>
      </div>
      <div className="grid mb-6 md:grid-col">
        <label
          htmlFor="address_to"
          className="block  text-sm  text-grey font-bold dark:text-white"
        >
          Street Address
          <input
            type="text"
            onChange={handleInputChange}
            className="bg-gray-50 border mt-2 border-grey text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Street Address"
            name="address_to"
            id="address_to"
            value={formData.address_to}
            required
          />
        </label>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div>
          <label
            htmlFor="city_to"
            className="block  text-sm  text-grey font-bold dark:text-white"
          >
            City
          </label>
          <input
            type="text"
            id="city_to"
            name="city_to"
            onChange={handleInputChange}
            className="bg-gray-50 border mt-2 border-grey text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="City"
            value={formData.city_to}
            required
          />
        </div>
        <div>
          <label
            htmlFor="post_code_to"
            className="block  text-sm  text-grey font-bold dark:text-white"
          >
            Post Code
          </label>
          <input
            type="text"
            id="post_code_to"
            name="post_code_to"
            onChange={handleInputChange}
            className="bg-gray-50 border mt-2 border-grey text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Post Code"
            value={formData.post_code_to}
            required
          />
        </div>
        <div>
          <label
            htmlFor="country_to"
            className="block  text-sm  text-grey font-bold dark:text-white"
          >
            Country
          </label>
          <input
            type="text"
            id="country_to"
            name="country_to"
            onChange={handleInputChange}
            className="bg-gray-50 border mt-2 border-grey text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Country"
            value={formData.country_to}
            required
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label
            htmlFor="invoice_date"
            className="block  text-sm  text-grey font-bold dark:text-white"
          >
            Invoice Date
          </label>
          <input
            type="date"
            id="invoice_date"
            name="invoice_date"
            onChange={handleInputChange}
            className="bg-gray-50 border mt-2 border-grey text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Invoice Date"
            value={formData.invoice_date}
            required
          />
        </div>
        <div>
          <label
            htmlFor="payment_terms"
            className="block  text-sm  text-grey font-bold dark:text-white"
          >
            Payment Terms
          </label>
          <select
            id="payment_terms"
            name="payment_terms"
            value={selectedOption}
            onChange={handleOptionChange}
            defaultChecked={selectedOption}
            className="bg-gray-50 border mt-2 text-purple-500 border-grey text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="next30Days">Next 30 Days</option>
            <option value="next15Days">Next 15 Days</option>
            <option value="now">Now</option>
          </select>
        </div>
      </div>
      <div className="grid mb-6 md:grid-col">
        <label
          htmlFor="project_description"
          className="block  text-sm  text-grey font-bold dark:text-white"
        >
          Project Description
          <input
            type="text"
            onChange={handleInputChange}
            className="bg-gray-50 border mt-2 border-grey text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Project Description"
            name="project_description"
            id="project_description"
            value={formData.project_description}
            required
          />
        </label>
      </div>
    </div>
  );
}

export default BillToArea;
