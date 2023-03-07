import Items from "../items/Items";
import InvoiceDetail from "../InvoiceDetail/InvoiceDetail";
import PageGoBack from "../PageGoBack/PageGoBack";
import StatusBar from "../StatusBar/StatusBar";
import { useState } from "react";
import InvoiceForm from "../Form/InvoiceForm";
import Modal from "react-modal";

function BlankShow({ invoiceData, setInvoiceData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-screen h-screen">
      <div className="lg:w-3/4 w-11/12  m-auto    mt-28  lg:mt-20   pb-12">
        <PageGoBack />
        <StatusBar setIsModalOpen={setIsModalOpen} invoiceData={invoiceData} />
        <div className="lg:p-12 p-3 shadow-lg rounded-md mt-6">
          <InvoiceDetail invoiceData={invoiceData} />
          <Items items={invoiceData.items} />
        </div>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          overlayClassName="fixed inset-0 bg-black bg-opacity-50"
          className="lg:w-1/2 w-screen my-12 lg:mt-0 lg:pl-44 p-8 bg-light h-screen overflow-y-scroll  "
        >
          <h2 className="font-bold text-2xl mt-11 mb-6">
            Edit <span className="text-grey">#</span>
            {invoiceData.key}
          </h2>
          <InvoiceForm
            setIsModalOpen={setIsModalOpen}
            setInvoiceData={setInvoiceData}
            invoice={invoiceData}
          />
        </Modal>
      </div>
    </div>
  );
}

export default BlankShow;
