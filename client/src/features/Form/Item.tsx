import { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useFormikContext } from "formik";
import { IconButton } from "@mui/material";
import { InputTextField } from "./inputTextField";
import { InputNumericField } from "./inputNumericField";
import { Invoice } from "types";
import { useTheme } from "hooks";

interface ItemProps {
  id: number;
  remove: <T>(index: number) => T | undefined;
}

export const Item = ({ id, remove }: ItemProps) => {
  const { isDarkTheme } = useTheme();
  const { values, setFieldValue } = useFormikContext<Invoice>();
  const { quantity, price } = values.items[id];

  useEffect(() => {
    const total = quantity * price;
    setFieldValue(`items.${id}.total`, total);
  }, [quantity, price, id, setFieldValue]);

  return (
    <div className="flex flex-col justify-between gap-4 sm:flex-row">
      <InputTextField label={"Item Name"} id={`items.${id}.name`} />
      <InputNumericField label={"Qty."} id={`items.${id}.quantity`} />
      <InputNumericField label={"Price"} id={`items.${id}.price`} />
      <div className="flex items-center justify-between gap-8">
        <div
          className={`${
            isDarkTheme ? "text-secondary-300" : ""
          } grid justify-center text-center`}
        >
          <span>Total</span>
          <span className="font-bold">$ {values.items[id].total}</span>
        </div>
        <IconButton
          aria-label="delete"
          size="small"
          onClick={() => remove(id)}
          style={{ color: isDarkTheme ? "#7E88C3" : "" }}
        >
          <DeleteIcon fontSize="medium" />
        </IconButton>
      </div>
    </div>
  );
};
