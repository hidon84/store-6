export const formatPrice = (price: number, unit = '원') => {
  return price.toLocaleString() + unit;
};
