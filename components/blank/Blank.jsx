import React, { useEffect, useState } from "react";
import FilterMenu from "../FilterMenu/FilterMenu";
import NewInvoiceButton from "../button/NewInvoiceButton";
import NoContent from "../NoContent/NoContent";
import api from "@/utils/helpers/api";
import InvoiceTable from "../Table/InvoiceTable";

function Blank() {
  const [invoices, setInvoices] = useState(null);
  useEffect(() => {
    try {
      const response = api.get("http://127.0.0.1:8000/api/inovices");
      response
        .then((result) => setInvoices(result?.data))
        .catch((error) => console.error("Bir hata oluştu:", error));
    } catch (error) {
      console.error("Bir hata oluştu:", error);
    }
  }, []);
  return (
    <div className="w-screen h-screen">
      <div className="w-3/4  m-auto   mt-20">
        <div className="flex items-center w-full">
          <div className="w-full ">
            <h1 className="text-4xl font-bold mb-2 tracking-tighter	">
              Invoices
            </h1>
            <h6 className="text-grey">
              There are {invoices?.data?.length ? invoices?.data?.length : 0}{" "}
              total invoices
            </h6>
          </div>
          <div className="w-2/5  flex items-center justify-between">
            <FilterMenu />
            <NewInvoiceButton />
          </div>
        </div>
        {invoices?.data?.length ? (
          <InvoiceTable data={invoices.data} />
        ) : (
          <NoContent />
        )}
      </div>
    </div>
  );
}

export default Blank;
