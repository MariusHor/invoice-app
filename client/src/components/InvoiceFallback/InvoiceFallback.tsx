import { ReactNode } from "react";
import fallbackImg from "assets/illustration-empty.svg";

export const InvoiceFallback = ({
  children,
}: {
  children?: ReactNode;
}): React.JSX.Element => {
  return (
    <div className="mx-auto my-8 flex h-full w-fit grow flex-col items-center justify-center text-center lg:col-span-11 lg:col-start-2 lg:row-span-5 lg:row-start-2 lg:my-0">
      <img src={fallbackImg} width={242} height={240} alt="list is empty" />
      <h1 className="heading-md mt-8 text-skin-base">There is nothing here</h1>
      {children}
    </div>
  );
};
