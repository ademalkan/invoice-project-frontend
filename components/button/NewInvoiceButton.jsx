import Image from "next/image";
import { useState } from "react";
import Modal from "react-modal";
import { FaTrash } from "react-icons/fa";
Modal.setAppElement("#__next");
export default function NewInvoiceButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formValues, setFormValues] = useState({});
  const [selectedOption, setSelectedOption] = useState("option1");
  const [items, setItems] = useState([
    { name: "", qty: "", price: "", total: 0 },
  ]);

  const [formData, setFormData] = useState({
    street_address_from: "",
    city_from: "",
    post_code_from: "",
    country_from: "",
    street_address_to: "",
    city_to: "",
    post_code_to: "",
    country_to: "",
    client_name: "",
    client_email: "",
    invoice_date: "",
    project_description: "",
  });

  const discardForm = () => {
    setFormData({
      street_address_from: "",
      city_from: "",
      post_code_from: "",
      country_from: "",
      street_address_to: "",
      city_to: "",
      post_code_to: "",
      country_to: "",
      client_name: "",
      client_email: "",
      invoice_date: "",
      project_description: "",
    });
    setItems([{ name: "", qty: "", price: "", total: 0 }]);
    setSelectedOption("option1");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleAddClick = () => {
    setItems([...items, { name: "", qty: "", price: "", total: 0 }]);
  };

  const handleRemoveClick = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    console.log(items);
    setItems(updatedItems);
  };

  const handleItemInputChange = (event, index) => {
    const { name, value } = event.target;
    const updatedItems = [...items];
    updatedItems[index][name] = value;
    updatedItems[index].total =
      Number(updatedItems[index].qty) * Number(updatedItems[index].price);
    setItems(updatedItems);
  };
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event.target.values);
    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Form gönderildi
        console.log("Form gönderildi!");
      } else {
        console.error("Form gönderilemedi.");
      }
    } catch (error) {
      console.error("Bir hata oluştu:", error);
    }
  };

  return (
    <>
      <Image
        onClick={() => setIsModalOpen(true)}
        src="/starter-code/assets/new-invoice.svg"
        alt="Loog"
        width={150}
        height={48}
        resizeMode="cover"
        className="rounded-full "
      />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        className="w-1/2 pl-44 p-8 bg-light h-screen overflow-y-scroll  "
      >
        <h2 className="font-bold text-2xl mt-11 mb-6">
          {/* Edit <span className="text-grey">#</span>XM9141 */}
          New Invoice
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 ">
          <div>
            <h6 className="text-purple font-bold mb-4">Bill From</h6>

            <div className="grid mb-6 md:grid-col">
              <label
                htmlFor="street_address_from"
                className="block  text-sm font-medium text-grey font-bold dark:text-white"
              >
                Street Address
                <input
                  type="text"
                  onChange={handleInputChange}
                  className="bg-gray-50 border mt-2 border-grey text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Street Address"
                  name="street_address_from"
                  id="street_address_from"
                  value={formData.street_address_from}
                  required
                />
              </label>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <label
                  htmlFor="city_from"
                  className="block  text-sm font-medium text-grey font-bold dark:text-white"
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
                  className="block  text-sm font-medium text-grey font-bold dark:text-white"
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
                  className="block  text-sm font-medium text-grey font-bold dark:text-white"
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
          <div>
            <h6 className="text-purple font-bold mb-4">Bill To</h6>

            <div className="grid mb-6 md:grid-col">
              <label
                htmlFor="client_name"
                className="block  text-sm font-medium text-grey font-bold dark:text-white"
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
                className="block  text-sm font-medium text-grey font-bold dark:text-white"
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
                htmlFor="street_address_to"
                className="block  text-sm font-medium text-grey font-bold dark:text-white"
              >
                Street Address
                <input
                  type="text"
                  onChange={handleInputChange}
                  className="bg-gray-50 border mt-2 border-grey text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Street Address"
                  name="street_address_to"
                  id="street_address_to"
                  value={formData.street_address_to}
                  required
                />
              </label>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <label
                  htmlFor="city_to"
                  className="block  text-sm font-medium text-grey font-bold dark:text-white"
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
                  className="block  text-sm font-medium text-grey font-bold dark:text-white"
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
                  className="block  text-sm font-medium text-grey font-bold dark:text-white"
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
                  className="block  text-sm font-medium text-grey font-bold dark:text-white"
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
                  className="block  text-sm font-medium text-grey font-bold dark:text-white"
                >
                  Payment Terms
                </label>
                <select
                  id="payment_terms"
                  name="payment_terms"
                  value={selectedOption}
                  onChange={handleOptionChange}
                  className="bg-gray-50 border mt-2 text-purple-500 border-grey text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
            </div>
            <div className="grid mb-6 md:grid-col">
              <label
                htmlFor="project_description"
                className="block  text-sm font-medium text-grey font-bold dark:text-white"
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
          <h6 className="text-grey font-bold mb-4 mt-12">Item List</h6>

          <div className="grid md:grid-cols-4 gap-6 mb-0">
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
            <div className="grid md:grid-cols-4 gap-6 mb-6" key={index}>
              <div>
                <input
                  type="text"
                  name="name"
                  value={item.name}
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
                  value={item.qty}
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
                  value={item.price}
                  onChange={(event) => handleItemInputChange(event, index)}
                  className="bg-gray-50 border mt-2 border-grey text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray--600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Price"
                  required
                />
              </div>
              <div className="flex items-center justify-between text-grey font-bold">
                <div>{item.total.toFixed(2)}</div>
                <button
                  className="text-grey  font-bold inline-flex items-center justify-center  shadow-sm "
                  type="button"
                  onClick={() => handleRemoveClick(index)}
                >
                  <FaTrash />
                </button>{" "}
              </div>{" "}
            </div>
          ))}
          <div className="grid md:grid-cols-1 gap-6 mb-6">
            <button
              className=" px-4 py-3 mr-4 text-grey font-bold"
              type="button"
              onClick={() => handleAddClick()}
            >
              + Add New Item
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <button
                className=" px-4 py-3 mr-4 text-grey font-bold"
                type="button"
                onClick={() => discardForm()}
              >
                Discard
              </button>
            </div>
            <div className="flex items-center justify-end">
              <button
                className=" px-4 py-3 mr-4 bg-dark-open text-grey inline-flex items-center justify-center  border border-transparent rounded-full shadow-sm text-base font-bold  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                type="button"
                onClick={() => setIsModalOpen(false)}
              >
                Save as Draft
              </button>
              <button
                type="submit"
                className="inline-flex items-center justify-center px-4 py-3 border border-transparent rounded-full shadow-sm text-base font-bold bg-purple text-light hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save & Send
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
}
