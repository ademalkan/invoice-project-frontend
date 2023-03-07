import { formatDate, itemCalculateTotal } from "@/utils/helpers/helper";
import Link from "next/link";
import React from "react";
import { AiOutlineRight } from "react-icons/ai";
function InvoiceTable({ data }) {
  return (
    <div className="pb-8">
      {data?.map((invoice) => (
        <Link href={`/invoice/${invoice?.id}`}>
          <div
            className="bg-light rounded-lg shadow-2xl p-8 grid md:grid-cols-5 grid-cols-2 items-baseline gap-6 mt-6"
            key={invoice?.id}
          >
            <div className="font-extrabold">
              <span className="text-grey">#</span>
              {invoice?.key}
            </div>
            <div className="text-grey">
              {" "}
              {formatDate(invoice?.invoice_date)}
            </div>
            <div className="text-grey"> {invoice?.client_name}</div>
            <div className="font-bold">
              £ {itemCalculateTotal(invoice?.items)}
            </div>
            <div className="flex justify-between items-center">
              <div
                className={`px-6 py-2 capitalize rounded-md font-bold ${
                  invoice?.status == "draft"
                    ? "bg-black text-black-light"
                    : invoice?.status == "pending"
                    ? "bg-orange text-orange-light"
                    : "bg-green-light text-green"
                }`}
              >
                {invoice?.status}
              </div>
              <div className="text-purple hidden lg:flex  font-bold">
                <AiOutlineRight />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default InvoiceTable;
