import { BillSection } from "./BillSection";
import { InputTextField } from "./inputTextField";

export const BillFrom = () => {
  return (
    <BillSection title="Bill From">
      <InputTextField label={"Street Address"} id={"senderAddress"} />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        <InputTextField label={"City"} id={"senderCity"} />
        <InputTextField label={"Post Code"} id={"senderPostCode"} />
        <div className="col-span-2 flex flex-col md:col-span-1">
          <InputTextField label={"Country"} id={"senderCountry"} />
        </div>
      </div>
    </BillSection>
  );
};
