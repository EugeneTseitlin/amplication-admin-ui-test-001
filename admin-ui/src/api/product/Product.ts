import { Cart } from "../cart/Cart";

export type Product = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  carts?: Array<Cart>;
  name: string | null;
};
