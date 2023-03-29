import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type CartUpdateInput = {
  my_product?: ProductWhereUniqueInput | null;
  name?: string | null;
};
