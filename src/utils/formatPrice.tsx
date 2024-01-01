export const formatPrice = (value: string | number) => {
  const formattedValue = value
    ?.toString()
    .replace(/\D/g, "")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return formattedValue;
};
