import { useNavigate } from "react-router-dom";
import { FormikHelpers } from "formik";

import { InvoiceForm } from "features";
import { Invoice } from "types";
import { useAuth, useCreateInvoice, useInvoiceProps } from "hooks";
import { DRAFT, PENDING } from "utils/constants";

export const InvoiceCreate = () => {
  const getInvoiceProps = useInvoiceProps();
  const createInvoice = useCreateInvoice();
  const navigate = useNavigate();
  const { auth } = useAuth();

  const handleSubmit = async (
    values: Invoice,
    { setSubmitting }: FormikHelpers<Invoice>
  ) => {
    const path = auth.isLoggedIn ? "/dashboard" : "/demo";
    const { paymentDue, total, isDraft } = getInvoiceProps(values);
    const status = isDraft ? DRAFT : PENDING;
    const newInvoice = {
      ...values,
      paymentDue,
      total,
      status,
    };

    await createInvoice.mutateAsync({ newInvoice });
    setSubmitting(false);
    return navigate(path);
  };

  return (
    <div className="form-wrapper lg:grow-1 flex w-full max-w-xl flex-col justify-between gap-8 rounded-xl bg-skin-fill-secondary p-8 lg:overflow-y-auto">
      <h1 className="heading-md text-skin-base">New Invoice</h1>
      <InvoiceForm onSubmit={handleSubmit} />
    </div>
  );
};
