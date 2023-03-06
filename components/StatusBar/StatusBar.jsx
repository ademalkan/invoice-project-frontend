import React, { useState } from "react";
import api from "@/utils/helpers/api";
import { useRouter } from "next/router";
import Modal from "react-modal";

function StatusBar({ invoiceData }) {
  const router = useRouter();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [status, setStatus] = useState(invoiceData?.status);

  const deleteInvoice = () => {
    try {
      const response = api.post(
        `http://127.0.0.1:8000/api/inovice/${invoiceData?.id}`
      );
      response
        .then((result) =>
          result?.data.status == true ? router.push("/invoice/dashboard") : ""
        )
        .catch((error) => console.error("Bir hata oluştu:", error));
    } catch (error) {
      console.error("Bir hata oluştu:", error);
    }
  };
  const setInvoicePaid = () => {
    try {
      const response = api.post(
        `http://127.0.0.1:8000/api/inovice/set-invoice-paid/${invoiceData?.id}`
      );
      response
        .then((result) =>
          result?.data.status == true ? setStatus("paid") : ""
        )
        .catch((error) => console.error("Bir hata oluştu:", error));
    } catch (error) {
      console.error("Bir hata oluştu:", error);
    }
  };

  return (
    <div className="w-full shadow-md rounded-md  p-6   flex items-center justify-between">
      <div className="flex items-center">
        <h6 className="text-grey">Status</h6>
        <div
          className={`px-6 py-2 ml-4 capitalize rounded-md font-bold ${
            status == "draft"
              ? "bg-black text-black-light"
              : status == "pending"
              ? "bg-orange text-orange-light"
              : "bg-green-light text-green"
          }`}
        >
          {status}
        </div>
      </div>
      <div>
        <button className="bg-light text-grey font-bold py-3 px-6 rounded-3xl">
          Edit
        </button>
        <button
          onClick={() => setModalIsOpen(true)}
          className="bg-red text-light font-bold py-3 px-6 rounded-3xl mx-6"
        >
          Delete
        </button>
        {status != "paid" && (
          <button
            onClick={() => setInvoicePaid()}
            className="bg-purple text-light font-bold py-3 px-6 rounded-3xl"
          >
            Mark as Paid
          </button>
        )}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Emin misin?"
        className={
          "w-1/3 m-auto p-12 mt-40 rounded-lg shadow-2xl bg-white z-50"
        }
      >
        <h2 className="font-bold text-2xl">Confirm Deletion</h2>
        <p className="mt-3 text-grey leading-6	">
          Are you sure you want to delete invoice #{invoiceData?.key}? This
          action cannot be undone.
        </p>
        <div className="flex justify-end mt-6">
          <button
            className="text-grey mr-6"
            onClick={() => setModalIsOpen(false)}
          >
            Cancel
          </button>
          <button
            className="bg-red text-light font-bold py-3 px-6 rounded-3xl"
            onClick={() => deleteInvoice()}
          >
            Delete
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default StatusBar;
