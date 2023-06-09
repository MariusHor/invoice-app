import { useLocation, useNavigate, useParams } from "react-router-dom";
import { FormikHelpers } from "formik";

import { InvoiceForm } from "features";
import { Spinner } from "components";
import { Invoice, InvoiceResult } from "types";
import { useAuth, useInvoiceProps, useInvoices, useUpdateInvoice } from "hooks";

export const InvoiceEdit = (): React.JSX.Element => {
  const getInvoiceProps = useInvoiceProps();
  const updateInvoice = useUpdateInvoice();
  const navigate = useNavigate();
  const location = useLocation();
  const { auth } = useAuth();
  const { id } = useParams();

  const { data: invoices, isLoading } = useInvoices();

  if (isLoading) return <Spinner intent={"inner"} />;

  const invoice: InvoiceResult = invoices.find(
    (invoice: InvoiceResult) => invoice.invoiceId === id
  );

  const handleSubmit = async (
    values: Invoice,
    { setSubmitting }: FormikHelpers<Invoice>
  ) => {
    const path = auth.isLoggedIn ? "/dashboard" : "/demo";
    const from = location.state?.from ?? path;

    const { paymentDue, total } = getInvoiceProps(values);
    const updatedInvoice = {
      ...values,
      paymentDue,
      total,
    };

    await updateInvoice.mutateAsync({ id: invoice._id, updatedInvoice });
    setSubmitting(false);

    return navigate(from, { replace: true });
  };

  return (
    <div className="form-wrapper lg:grow-1 flex w-full max-w-xl flex-col justify-between gap-8 rounded-xl bg-skin-fill-secondary p-8 lg:overflow-y-auto">
      <h1 className="heading-md text-skin-base">Edit Invoice</h1>
      <InvoiceForm onSubmit={handleSubmit} invoice={invoice} isEditing={true} />
    </div>
  );
};
