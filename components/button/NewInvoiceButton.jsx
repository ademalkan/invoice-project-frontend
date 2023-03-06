import Image from "next/image";
import { useState } from "react";
import Modal from "react-modal";
import InvoiceForm from "../Form/InvoiceForm";
Modal.setAppElement("#__next");
export default function NewInvoiceButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Image
        onClick={() => setIsModalOpen(true)}
        src="/starter-code/assets/new-invoice.svg"
        alt="Loog"
        width={150}
        height={48}
        resizemode="cover"
        className="rounded-full hover:cursor-pointer"
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
        <InvoiceForm setIsModalOpen={setIsModalOpen} />
      </Modal>
    </>
  );
}
