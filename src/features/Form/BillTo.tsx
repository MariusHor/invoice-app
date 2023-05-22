import { BillSection } from "./BillSection";
import { InputTextField } from "./inputTextField";

export const BillTo = () => {
  return (
    <BillSection title="Bill To">
      <InputTextField label={"Client's Name"} id={"clientName"} />
      <InputTextField label={"Client's Email"} id={"clientEmail"} />
      <InputTextField label={"Address"} id={"clientAddress"} />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        <InputTextField label={"City"} id={"clientCity"} />
        <InputTextField label={"Post Code"} id={"clientPostCode"} />
        <div className="col-span-2 flex flex-col md:col-span-1">
          <InputTextField label={"Country"} id={"clientCountry"} />
        </div>
      </div>
    </BillSection>
  );
};
