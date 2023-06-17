import { BillSection } from "./BillSection";
import { InputTextField } from "components";

export const BillTo = (): React.JSX.Element => {
  return (
    <BillSection title="Bill To">
      <InputTextField label={"Client's Name"} id={"clientName"} />
      <InputTextField label={"Client's Email"} id={"clientEmail"} />
      <InputTextField label={"Street Address"} id={"clientAddress.street"} />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        <InputTextField label={"City"} id={"clientAddress.city"} />
        <InputTextField label={"Post Code"} id={"clientAddress.postCode"} />
        <div className="col-span-2 flex flex-col md:col-span-1">
          <InputTextField label={"Country"} id={"clientAddress.country"} />
        </div>
      </div>
    </BillSection>
  );
};
