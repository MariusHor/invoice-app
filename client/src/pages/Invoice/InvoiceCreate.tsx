import { FormikHelpers } from "formik";

import { InvoiceForm } from "features";
import { Invoice } from "types";
import { useSubmitInvoice } from "hooks";

export const InvoiceCreate = (): React.JSX.Element => {
  const submitInvoice = useSubmitInvoice();

  const handleSubmit = async (
    values: Invoice,
    { setSubmitting }: FormikHelpers<Invoice>
  ) => {
    submitInvoice({ values, setSubmitting, isDraft: false });
  };

  return (
    <div className="form-wrapper lg:grow-1 mb-6 flex w-full max-w-xl flex-col justify-between gap-8 rounded-xl bg-skin-fill-secondary p-8 shadow-lg lg:overflow-y-auto">
      <h1 className="heading-md text-skin-base">New Invoice</h1>
      <InvoiceForm onSubmit={handleSubmit} />
    </div>
  );
};
