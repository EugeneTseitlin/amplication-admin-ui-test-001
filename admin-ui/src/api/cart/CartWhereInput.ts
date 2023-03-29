import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CartWhereInput = {
  id?: StringFilter;
  my_product?: ProductWhereUniqueInput;
  name?: StringNullableFilter;
};
