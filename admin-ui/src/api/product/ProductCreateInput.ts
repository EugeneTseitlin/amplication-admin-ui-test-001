import { CartCreateNestedManyWithoutProductsInput } from "./CartCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  carts?: CartCreateNestedManyWithoutProductsInput;
};
