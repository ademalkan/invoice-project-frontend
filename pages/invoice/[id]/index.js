import DashboardContainer from "@/containers/dashboard/DashboardContainer";
import { useRouter } from "next/router";

function InvoicePage({ invoice }) {
  const router = useRouter();
  const { id } = router.query;
  const invoiceData = invoice.data;
  console.log(invoiceData);
  return (
    <div>
      <DashboardContainer invoiceData={invoiceData}/>
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
