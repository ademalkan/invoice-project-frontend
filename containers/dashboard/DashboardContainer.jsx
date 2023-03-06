import Blank from "@/components/blank/Blank";
import BlankShow from "@/components/blank/BlankShow";
import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";

function DashboardContainer({ invoiceData }) {
  return (
    <div className="flex relative ">
      <Sidebar />
      {!invoiceData && <Blank />}
      {invoiceData && <BlankShow invoiceData={invoiceData} />}
    </div>
  );
}

export default DashboardContainer;
