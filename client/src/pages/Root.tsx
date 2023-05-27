import fallbackImg from "assets/illustration-empty.svg";
import { LinkCustom } from "components";

export const Root = (): React.JSX.Element => {
  return (
    <div className="flex grow flex-col items-center justify-center gap-3 text-center lg:col-span-11 lg:col-start-2 lg:row-span-5 lg:row-start-1">
      <img src={fallbackImg} alt="invoice list is empty" />
      <h1 className="heading-md text-skin-base">Welcome</h1>
      <p className="text-sm mt-2 max-w-42 text-skin-muted">
        You can use this app to store your invoices. Give it a try!
      </p>
      <LinkCustom to="invoices" title="Invoices" />
    </div>
  );
};
