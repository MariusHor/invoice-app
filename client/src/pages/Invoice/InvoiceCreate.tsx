import { useNavigate } from "react-router-dom";
import { FormCustom } from "features/Form/Form";
import { addInvoice } from "api";
import { queryClient } from "lib";
import { FormikHelpers } from "formik";
import { Invoice } from "types";
import { formatDate } from "utils";

export const InvoiceCreate = () => {
  const navigate = useNavigate();

  const handleSubmit = (
    values: Invoice,
    { setSubmitting }: FormikHelpers<Invoice>
  ) => {
    const { createdAt, paymentTerms, items } = values;
    const paymentDue = formatDate(createdAt, paymentTerms);
    const total = items.reduce((total, current) => {
      return total + current.total;
    }, 0);

    const newInvoice = {
      ...values,
      paymentDue,
      status: "pending",
      total: total,
    };

    addInvoice(newInvoice);
    setSubmitting(false);
    queryClient.invalidateQueries({ queryKey: ["invoices"] });

    return navigate("/invoices");
  };

  return (
    <div className="form-wrapper lg:grow-1 flex w-full max-w-xl flex-col justify-between gap-8 rounded-xl bg-white p-8 lg:overflow-y-auto">
      <h1 className="heading-md">New Invoice</h1>
      <FormCustom onSubmit={handleSubmit} />
    </div>
  );
};
