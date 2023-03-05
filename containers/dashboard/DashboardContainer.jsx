import Blank from "@/components/blank/Blank";
import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";

function DashboardContainer() {
  return (
    <div className="flex relative">
      <Sidebar />
      <Blank />
    </div>
  );
}

export default DashboardContainer;
