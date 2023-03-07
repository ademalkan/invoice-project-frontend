import api from "../helpers/api";

export const fetchInvoices = async function fetchInvoices(options) {
  try {
    const response = api.get("http://127.0.0.1:8000/api/inovices", {
      params: options,
    });
    return response
      .then((result) => result?.data)
      .catch((error) => console.error("Bir hata oluştu:", error));
  } catch (error) {
    console.error("Bir hata oluştu:", error);
  }
};
