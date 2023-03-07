import Image from "next/image";
import { useState } from "react";
import Modal from "react-modal";
import InvoiceForm from "../Form/InvoiceForm";
import { BsChevronLeft } from "react-icons/bs";
Modal.setAppElement("#__next");
export default function NewInvoiceButton({ setRefresh, refresh }) {
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
        className="rounded-full hover:cursor-pointer mobile-img"
      />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        className="lg:w-1/2 w-screen my-12 lg:mt-0 lg:pl-44 p-8 bg-light h-screen overflow-y-scroll  "
      >
        <button
          className="flex font-bold mt-11 mb-4 lg:mt-0"
          onClick={() => setIsModalOpen(false)}
        >
          <span className="mr-4 font-extrabold text-purple">
            <BsChevronLeft />
          </span>{" "}
          Go Back
        </button>
        <h2 className="font-bold text-2xl  mb-6">New Invoice</h2>
        <InvoiceForm
          setRefresh={setRefresh}
          refresh={refresh}
          setIsModalOpen={setIsModalOpen}
        />
      </Modal>
    </>
  );
}
