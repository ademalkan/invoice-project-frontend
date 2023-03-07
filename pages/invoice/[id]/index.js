import DashboardContainer from "@/containers/dashboard/DashboardContainer";
import { useRouter } from "next/router";
import { useState } from "react";

function InvoicePage({ invoice }) {
  const router = useRouter();
  const { id } = router.query;
  const [invoiceData, setInvoiceData] = useState(invoice.data);
  return (
    <div>
      <DashboardContainer
        setInvoiceData={setInvoiceData}
        invoiceData={invoiceData}
      />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;

  const invoice = await fetch(`http://127.0.0.1:8000/api/inovice/${id}`).then(
    (response) => response.json()
  );

  return {
    props: {
      invoice,
    },
  };
}

export default InvoicePage;
