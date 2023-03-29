import { CartUpdateManyWithoutProductsInput } from "./CartUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  carts?: CartUpdateManyWithoutProductsInput;
  name?: string | null;
};
