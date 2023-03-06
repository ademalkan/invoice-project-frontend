import Items from "../items/Items";
import InvoiceDetail from "../InvoiceDetail/InvoiceDetail";
import PageGoBack from "../PageGoBack/PageGoBack";
import StatusBar from "../StatusBar/StatusBar";

function BlankShow({ invoiceData }) {
  return (
    <div className="w-screen h-screen">
      <div className="w-3/4  m-auto   mt-20  pb-12">
        <PageGoBack />
        <StatusBar invoiceData={invoiceData} />
        <div className="p-12 shadow-lg rounded-md mt-6">
          <InvoiceDetail invoiceData={invoiceData} />
          <Items items={invoiceData.items} />
        </div>
      </div>
    </div>
  );
}

export default BlankShow;
