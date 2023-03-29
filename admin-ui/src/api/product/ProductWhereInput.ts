import { StringFilter } from "../../util/StringFilter";
import { CartListRelationFilter } from "../cart/CartListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  carts?: CartListRelationFilter;
  name?: StringNullableFilter;
};
