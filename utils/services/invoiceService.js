export const fetchInvoices = async function fetchInvoices() {
  try {
    const response = await api.get("http://127.0.0.1:8000/api/invoices");
    return response
    .then((result) => setInvoices(result?.data))
    .catch((error) => console.error("Bir hata oluştu:", error));  
  } catch (error) {
    console.error("Bir hata oluştu:", error);
  }
  
}