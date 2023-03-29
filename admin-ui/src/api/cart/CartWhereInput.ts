import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type CartWhereInput = {
  id?: StringFilter;
  my_product?: ProductWhereUniqueInput;
};
