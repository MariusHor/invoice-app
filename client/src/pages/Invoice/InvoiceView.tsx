import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { InvoiceStatus, InvoiceDetails, LinkButton, Button } from "components";
import { invoicesLoader } from "pages";
import { InvoiceResult } from "types";
import { invariant } from "utils";
import { useDeleteInvoice, useInvoices, useUpdateInvoice } from "hooks";

export const InvoiceView = () => {
  const deleteInvoice = useDeleteInvoice();
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

  const handleDelete = async () => {
    await deleteInvoice.mutateAsync({ id: invoice._id });
    return navigate("/invoices");
  };

  const handleUpdateStatus = async () => {
    await updateInvoice.mutateAsync({
      id: invoice._id,
      updatedInvoice: {
        ...invoice,
        status: "paid",
      },
    });
  };

  return (
    <div className="flex w-full max-w-3xl flex-col justify-between gap-4">
      <div className="center-between rounded-lg bg-skin-fill-secondary p-4">
        <span className="text-skin-base">Status</span>
        <InvoiceStatus
          size={"medium"}
          intent={invoice.status as "paid" | "pending" | "draft"}
          statusType={invoice.status}
        />
      </div>
      <InvoiceDetails invoice={invoice} id={id} />
      <div className="flex-center h-20 gap-2 bg-skin-fill-secondary p-4 lg:rounded-lg">
        <LinkButton to={`/invoices/${id}/edit`} intent={"outlined"}>
          Edit
        </LinkButton>
        <Button intent={"accent"} onClick={handleDelete}>
          Delete
        </Button>
        <Button
          onClick={handleUpdateStatus}
          disabled={invoice.status === "paid"}
        >
          Paid
        </Button>
      </div>
    </div>
  );
};
