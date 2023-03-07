import React from "react";
import { formatDate } from "@/utils/helpers/helper";

function InvoiceDetail({ invoiceData }) {
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <div className="text-dark font-bold mb-3">
            <span className="text-grey">#</span>
            {invoiceData?.key}
          </div>
          <div className="text-grey capitalize">
            {invoiceData?.project_description}
          </div>
        </div>
        <div className="text-grey capitalize text-right">
          <div>{invoiceData?.address_from}</div>
          <div className="my-2">{invoiceData?.city_from}</div>
          <div>{invoiceData?.post_code_from}</div>
          <div className="my-2">{invoiceData?.country_from}</div>
        </div>
      </div>
      <div className="grid mb-6 lg:grid-cols-3 grid-cols-2">
        <div className="flex flex-col justify-between">
          <div>
            <h6 className="text-grey mb-3">Invoice Date</h6>
            <h4 className="font-bold">
              {formatDate(invoiceData?.invoice_date)}
            </h4>
          </div>
          <div>
            <h6 className="text-grey mb-3">Invoice Date</h6>
            <h4 className="font-bold">
              {formatDate(invoiceData?.invoice_date)}
            </h4>
          </div>
        </div>
        <div>
          <h6 className="text-grey mb-3">Bill To</h6>
          <h4 className="font-bold mb-3">{invoiceData?.client_name}</h4>
          <div className="text-grey capitalize text-left">
            <div>{invoiceData?.address_to}</div>
            <div className="my-2">{invoiceData?.city_to}</div>
            <div>{invoiceData?.post_code_to}</div>
            <div className="mt-2">{invoiceData?.country_to}</div>
          </div>
        </div>
        <div>
          <h6 className="text-grey mb-3">Sent to</h6>
          <h4 className="font-bold">{invoiceData?.client_email}</h4>
        </div>
      </div>
    </>
  );
}

export default InvoiceDetail;
