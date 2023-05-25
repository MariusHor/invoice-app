import { Button } from "@mui/material";
import { FieldArray, useFormikContext } from "formik";
import { Item } from "./Item";
import { FormValues } from "types";

export const ItemList = () => {
  const { values } = useFormikContext<FormValues>();
  const emptyItem = { itemName: "", quantity: "", price: "" };

  return (
    <div className="flex flex-col gap-6">
      <h1 className="heading-sm text-secondary-550">Item List</h1>

      <FieldArray name="items">
        {({ push, remove }) => (
          <div className="flex flex-col gap-6">
            {values.items.map((_, index) => (
              <div className="flex flex-col gap-10" key={index}>
                <Item id={index} remove={remove} />
              </div>
            ))}

            <Button
              className="bg-primary-600"
              variant="contained"
              size="medium"
              onClick={() => push(emptyItem)}
              style={{ background: "#7C5DFA", borderColor: "#7C5DFA" }}
            >
              Add new item
            </Button>
          </div>
        )}
      </FieldArray>
    </div>
  );
};
