import React, { useEffect, useState } from "react";
import FilterMenu from "../FilterMenu/FilterMenu";
import NewInvoiceButton from "../button/NewInvoiceButton";
import NoContent from "../NoContent/NoContent";
import api from "@/utils/helpers/api";
import InvoiceTable from "../Table/InvoiceTable";
import { fetchInvoices } from "@/utils/services/invoiceService";

function Blank() {
  const [invoices, setInvoices] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const [options, setOptions] = useState({
    draft: false,
    pending: false,
    paid: false,
  });

  useEffect(() => {
    try {
      const response = fetchInvoices();
      response
        .then((result) => setInvoices(result?.data))
        .catch((error) => console.error("Bir hata oluştu:", error));
    } catch (error) {
      console.error("Bir hata oluştu:", error);
    }
  }, [refresh]);
  return (
    <div className="w-screen h-screen">
      <div className="w-3/4  m-auto mt-28  lg:mt-20 ">
        <div className="flex items-center w-full">
          <div className="lg:w-full mr-3 lg:mr-0">
            <h1 className="text-4xl font-bold mb-2 tracking-tighter	">
              Invoices
            </h1>
            <h6 className="text-grey">
              There are {invoices?.length ? invoices?.length : 0} total invoices
            </h6>
          </div>
          <div className="lg:w-2/5  w-full flex items-center justify-between">
            <FilterMenu options={options} setOptions={setOptions} />
            <NewInvoiceButton refresh={refresh} setRefresh={setRefresh} />
          </div>
        </div>
        {invoices?.length ? <InvoiceTable data={invoices} /> : <NoContent />}
      </div>
    </div>
  );
}

export default Blank;
