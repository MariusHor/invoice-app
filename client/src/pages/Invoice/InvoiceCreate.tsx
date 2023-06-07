import { useNavigate } from "react-router-dom";
import { FormikHelpers } from "formik";

import { InvoiceForm } from "features";
import { Invoice } from "types";
import { useCreateInvoice, useGetInvoiceProps } from "hooks";

export const InvoiceCreate = () => {
  const getInvoiceProps = useGetInvoiceProps();
  const createInvoice = useCreateInvoice();
  const navigate = useNavigate();

  const handleSubmit = async (
    values: Invoice,
    { setSubmitting }: FormikHelpers<Invoice>
  ) => {
    const { paymentDue, total } = getInvoiceProps(values);
    const status = values.isDraft ? "draft" : "pending";
    const newInvoice = {
      ...values,
      paymentDue,
      total,
      status,
    };

    await createInvoice.mutateAsync({ newInvoice });
    setSubmitting(false);

    return navigate("/dashboard");
  };

  return (
    <div className="form-wrapper lg:grow-1 flex w-full max-w-xl flex-col justify-between gap-8 rounded-xl bg-skin-fill-secondary p-8 lg:overflow-y-auto">
      <h1 className="heading-md text-skin-base">New Invoice</h1>
      <InvoiceForm onSubmit={handleSubmit} />
    </div>
  );
};
