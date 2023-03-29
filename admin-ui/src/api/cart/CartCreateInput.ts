import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type CartCreateInput = {
  my_product?: ProductWhereUniqueInput | null;
  name?: string | null;
};
