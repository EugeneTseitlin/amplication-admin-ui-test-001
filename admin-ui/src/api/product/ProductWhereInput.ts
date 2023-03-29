import { StringFilter } from "../../util/StringFilter";
import { CartListRelationFilter } from "../cart/CartListRelationFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  carts?: CartListRelationFilter;
};
