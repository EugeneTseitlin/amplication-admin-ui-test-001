import { Cart as TCart } from "../api/cart/Cart";

export const CART_TITLE_FIELD = "name";

export const CartTitle = (record: TCart): string => {
  return record.name || String(record.id);
};
