import { BillSection } from "./BillSection";
import { InputTextField } from "components";

export const BillFrom = (): React.JSX.Element => {
  return (
    <BillSection title="Bill From">
      <InputTextField label={"Street Address"} id={"senderAddress.street"} />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        <InputTextField label={"City"} id={"senderAddress.city"} />
        <InputTextField label={"Post Code"} id={"senderAddress.postCode"} />
        <div className="col-span-2 flex flex-col md:col-span-1">
          <InputTextField label={"Country"} id={"senderAddress.country"} />
        </div>
      </div>
    </BillSection>
  );
};
