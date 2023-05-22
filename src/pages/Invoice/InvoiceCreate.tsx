import { FormCustom } from "features/Form/Form";

export const InvoiceCreate = () => {
  return (
    <div className="form-wrapper lg:grow-1 flex w-full max-w-xl flex-col justify-between gap-8 rounded-xl bg-white p-8 lg:overflow-y-auto">
      <h1 className="heading-md">New Invoice</h1>
      <FormCustom />
    </div>
  );
};
