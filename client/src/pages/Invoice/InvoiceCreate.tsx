import { useNavigate } from "react-router-dom";
import { FormikHelpers } from "formik";
import { Invoice } from "types";
import { useCreateInvoice, useGetInvoiceProps } from "hooks";
import { LayoutForm } from "layouts/LayoutForm";

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

    return navigate("/invoices");
  };

  return <LayoutForm title="New Invoice" handleSubmit={handleSubmit} />;
};
