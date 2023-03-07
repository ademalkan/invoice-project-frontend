import Blank from "@/components/blank/Blank";
import BlankShow from "@/components/blank/BlankShow";
import Sidebar from "@/components/Sidebar/Sidebar";

function DashboardContainer({ invoiceData, setInvoiceData }) {
  return (
    <div className="flex relative ">
      <Sidebar />
      {!invoiceData && <Blank />}
      {invoiceData && (
        <BlankShow setInvoiceData={setInvoiceData} invoiceData={invoiceData} />
      )}
    </div>
  );
}

export default DashboardContainer;
