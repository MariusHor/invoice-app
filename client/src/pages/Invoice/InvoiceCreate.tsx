import { useNavigate } from "react-router-dom";
import { FormikHelpers } from "formik";
import { FormCustom } from "features";
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
    const newInvoice = {
      ...values,
      paymentDue,
      total,
      status: "pending",
    };

    await createInvoice.mutateAsync({ newInvoice });
    setSubmitting(false);

    return navigate("/invoices");
  };

  return (
    <div className="form-wrapper lg:grow-1 flex w-full max-w-xl flex-col justify-between gap-8 rounded-xl bg-white p-8 lg:overflow-y-auto">
      <h1 className="heading-md">New Invoice</h1>
      <FormCustom onSubmit={handleSubmit} />
    </div>
  );
};
