import React from "react";
import FilterMenu from "../FilterMenu/FilterMenu";
import NewInvoiceButton from "../button/NewInvoiceButton";
import NoContent from "../NoContent/NoContent";

function Blank() {
  return (
    <div className="w-screen h-screen">
      <div className="w-3/4  m-auto   mt-20">
        <div className="flex items-center w-full">
          <div className="w-full ">
            <h1 className="text-4xl font-bold mb-2 tracking-tighter	">
              Invoices
            </h1>
            <h6 className="text-grey">There are 7 total invoices</h6>
          </div>
          <div className="w-2/5  flex items-center justify-between">
            <FilterMenu />
            <NewInvoiceButton />
          </div>
        </div>
        <NoContent />
      </div>
    </div>
  );
}

export default Blank;
