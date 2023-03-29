import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProductTitle } from "../product/ProductTitle";

export const CartEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="my_product.id"
          reference="Product"
          label="my_product"
        >
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
