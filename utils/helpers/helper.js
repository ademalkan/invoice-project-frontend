export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}


export const itemCalculateTotal = (items) => {
  const total = items.reduce((total, item) => {
    return total + parseFloat(item.total);
  }, 0);
  const totalFormatted = total.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return totalFormatted;
}