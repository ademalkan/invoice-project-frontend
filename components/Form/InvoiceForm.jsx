import api from "@/utils/helpers/api";
import React from "react";
import { useState } from "react";
import BillToArea from "./BillToArea";
import BillFromArea from "./BillFromArea";
import ItemListArea from "./ItemListArea";
import FormButtonArea from "./FormButtonArea";
import {
  invoiceDiscardsInital,
  invoiceInital,
  invoiceItemsInital,
} from "@/utils/mocks/invoiceFormInital";
function InvoiceForm({
  setIsModalOpen,
  setRefresh,
  refresh,
  invoice,
  setInvoiceData,
}) {
  const [formData, setFormData] = useState(invoice ? invoice : invoiceInital);
  const [draft, setDraft] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    invoice?.payment_terms ? invoice?.payment_terms : ""
  );
  const [items, setItems] = useState(
    invoice?.items ? invoice?.items : invoiceItemsInital
  );

  const discardForm = () => {
    setFormData(invoiceDiscardsInital);
    setItems(invoiceItemsInital);
    setSelectedOption("next30Days");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleAddClick = () => {
    setItems([...items, invoiceItemsInital[0]]);
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
    try {
      const create = "http://127.0.0.1:8000/api/inovice/create";

      const update = `http://127.0.0.1:8000/api/inovice/edit/${invoice?.id}`;

      const response = await api.post(invoice ? update : create, {
        formData,
        items,
        selectedOption,
        draft,
      });

      if (response) {
        console.log("Form gönderildi!");
        invoice && setInvoiceData(formData);
        !invoice && setRefresh(!refresh);
        setIsModalOpen(false);
      } else {
        console.error("Form gönderilemedi.");
      }
    } catch (error) {
      console.error("Bir hata oluştu:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="pb-12 ">
      <BillFromArea handleInputChange={handleInputChange} formData={formData} />
      <BillToArea
        handleInputChange={handleInputChange}
        formData={formData}
        selectedOption={selectedOption}
        handleOptionChange={handleOptionChange}
      />
      <ItemListArea
        items={items}
        handleItemInputChange={handleItemInputChange}
        handleRemoveClick={handleRemoveClick}
      />
      <FormButtonArea
        handleAddClick={handleAddClick}
        invoice={invoice}
        discardForm={discardForm}
        setDraft={setDraft}
        setIsModalOpen={setIsModalOpen}
      />
    </form>
  );
}

export default InvoiceForm;
