import { Product } from "../product/Product";

export type Cart = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  my_product?: Product | null;
  name: string | null;
};
