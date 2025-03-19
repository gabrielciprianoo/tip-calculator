export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

export const MAX_QUANTITY_ITEMS_ORDER = 5;
export const MIN_QUANTITY_ITEMS_ORDER = 1;