import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProductTitle } from "../product/ProductTitle";

export const CartCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="my_product.id"
          reference="Product"
          label="my_product"
        >
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
