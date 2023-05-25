import { InputDatePicker } from "./InputDatePicker";
import { InputSelectField } from "./InputSelectField";
import { InputTextField } from "./inputTextField";

export const InvoiceDetails = () => {
  return (
    <div className="paragraph flex flex-col gap-5">
      <InputDatePicker label={"Invoice Date"} id={"createdAt"} />
      <InputSelectField label={"Payment Terms"} id={"paymentTerms"} />
      <InputTextField label={"Project Description"} id={"description"} />
    </div>
  );
};
