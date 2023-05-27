import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { FormikHelpers } from "formik";
import { invoicesLoader } from "pages";
import { FormCustom } from "features";
import { Invoice, InvoiceResult } from "types";
import { invariant } from "utils";
import { useGetInvoiceProps, useInvoices, useUpdateInvoice } from "hooks";

export const InvoiceEdit = () => {
  const getInvoiceProps = useGetInvoiceProps();
  const updateInvoice = useUpdateInvoice();
  const navigate = useNavigate();
  const { id } = useParams();
  invariant(id);

  const initialData: InvoiceResult[] = useLoaderData() as Awaited<
    ReturnType<ReturnType<typeof invoicesLoader>>
  >;
  const { data: invoices } = useInvoices({ initialData });
  const invoice: InvoiceResult = invoices.find(
    (invoice: InvoiceResult) => invoice.invoiceId === id
  );

  const handleSubmit = async (
    values: Invoice,
    { setSubmitting }: FormikHelpers<Invoice>
  ) => {
    const { paymentDue, total } = getInvoiceProps(values);
    const updatedInvoice = {
      ...values,
      paymentDue,
      total,
    };

    await updateInvoice.mutateAsync({ id: invoice._id, updatedInvoice });
    setSubmitting(false);

    return navigate("/invoices");
  };

  return (
    <div className="form-wrapper lg:grow-1 flex w-full max-w-xl flex-col justify-between gap-8 rounded-xl bg-white p-8 lg:overflow-y-auto">
      <h1 className="heading-md">Edit Invoice</h1>
      <FormCustom isEditing={true} onSubmit={handleSubmit} invoice={invoice} />
    </div>
  );
};
