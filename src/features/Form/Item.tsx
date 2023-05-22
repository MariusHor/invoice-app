import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useFormikContext } from "formik";
import { IconButton } from "@mui/material";
import { InputTextField } from "./inputTextField";
import { InputNumericField } from "./inputNumericField";
import { FormValues } from "types";

interface ItemProps {
  id: number;
  remove: <T>(index: number) => T | undefined;
}

export const Item = ({ id, remove }: ItemProps) => {
  const [total, setTotal] = useState(0);
  const { values } = useFormikContext<FormValues>();
  const { quantity, price } = values.items[id];

  useEffect(() => {
    setTotal(quantity * price);
  }, [quantity, price]);

  return (
    <div className="flex flex-col justify-between gap-4 sm:flex-row">
      <InputTextField label={"Item Name"} id={`items.${id}.itemName`} />
      <InputTextField label={"Qty."} id={`items.${id}.quantity`} />
      <InputNumericField label={"Price"} id={`items.${id}.price`} />
      <div className="flex items-center justify-between gap-8">
        <div className="grid justify-center text-center">
          <span>Total</span>
          <span className="font-bold">$ {total}</span>
        </div>
        <IconButton aria-label="delete" size="small" onClick={() => remove(id)}>
          <DeleteIcon fontSize="medium" />
        </IconButton>
      </div>
    </div>
  );
};
