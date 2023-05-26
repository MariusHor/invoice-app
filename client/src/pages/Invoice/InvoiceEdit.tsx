import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { FormikHelpers } from "formik";
import { updateInvoice } from "api";
import { FormCustom } from "features/Form/Form";
import { Invoice, InvoiceResult } from "types";
import { invoicesQuery } from "hooks/useInvoices";
import { formatDate } from "utils";
import { invoicesLoader } from "pages";
import { invariant } from "utils/helpers";

export const InvoiceEdit = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { id } = useParams();
  invariant(id);
  const initialData: InvoiceResult[] = useLoaderData() as Awaited<
    ReturnType<ReturnType<typeof invoicesLoader>>
  >;

  const { data: invoices } = useQuery({
    ...invoicesQuery(),
    initialData,
  });

  const invoice = invoices.find((item: InvoiceResult) => item.invoiceId === id);

  const handleSubmit = (
    values: Invoice,
    { setSubmitting }: FormikHelpers<Invoice>
  ) => {
    const { createdAt, paymentTerms, items } = values;
    const paymentDue = formatDate(createdAt, paymentTerms);
    const total = items.reduce((total, current) => {
      return total + current.total;
    }, 0);

    const updatedInvoice = {
      ...values,
      paymentDue,
      total,
    };

    updateInvoice(invoice._id, updatedInvoice);
    setSubmitting(false);
    queryClient.invalidateQueries({ queryKey: ["invoices"] });

    return navigate("/invoices");
  };

  return (
    <div className="form-wrapper lg:grow-1 flex w-full max-w-xl flex-col justify-between gap-8 rounded-xl bg-white p-8 lg:overflow-y-auto">
      <h1 className="heading-md">Edit Invoice</h1>
      <FormCustom isEditing={true} onSubmit={handleSubmit} invoice={invoice} />
    </div>
  );
};
