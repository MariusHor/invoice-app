import { useLocation, useNavigate, useParams } from "react-router-dom";

import { Button, ButtonLink, InvoiceFallback, Spinner } from "components";
import InvoiceDetails from "./InvoiceDetails/InvoiceDetails";
import { InvoiceStatus } from "../../components/InvoiceStatus/InvoiceStatus";
import {
  useAuth,
  useDeleteInvoice,
  useInvoices,
  useUpdateInvoice,
} from "hooks";
import { InvoiceResult } from "types";
import { invariant } from "utils";
import { DRAFT, PAID, PENDING } from "utils/constants";
import { toast } from "react-hot-toast";

export const Invoice = () => {
  const deleteInvoice = useDeleteInvoice();
  const updateInvoice = useUpdateInvoice();
  const navigate = useNavigate();
  const { auth } = useAuth();
  const { id } = useParams();
  const location = useLocation();
  invariant(id);

  const path = auth.isLoggedIn ? "/dashboard" : "/demo";
  const { data: invoices, isLoading } = useInvoices();

  if (isLoading) return <Spinner intent={"inner"} />;

  const invoice: InvoiceResult = invoices.find(
    (invoice: InvoiceResult) => invoice.invoiceId === id
  );

  if (!invoice) return <InvoiceFallback />;

  const handleDelete = async () => {
    await deleteInvoice.mutateAsync({ id: invoice._id });
    return navigate(path);
  };

  const handleEditBtnClick = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    toast.error("Editing not available in Demo mode");
    return navigate(`${path}/${id}/edit`, {
      state: { from: location },
      replace: true,
    });
  };

  const handleUpdateStatus = async () => {
    await updateInvoice.mutateAsync({
      id: invoice._id,
      updatedInvoice: {
        ...invoice,
        status: PAID,
      },
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="center-between rounded-lg bg-skin-fill-secondary p-4">
        <span className="text-skin-base">Status</span>
        <InvoiceStatus
          size={"medium"}
          intent={invoice.status as typeof PAID | typeof PENDING | typeof DRAFT}
          statusType={invoice.status}
        />
      </div>
      <InvoiceDetails invoice={invoice} id={id} />
      <div className="flex-center h-20 gap-2 bg-skin-fill-secondary p-4 lg:rounded-lg">
        <ButtonLink
          to={`${path}/${id}/edit`}
          intent={"outlined-link"}
          state={{ from: location }}
          replace
          onClick={handleEditBtnClick}
        >
          Edit
        </ButtonLink>
        <Button intent={"accent"} onClick={handleDelete}>
          Delete
        </Button>
        <Button onClick={handleUpdateStatus} disabled={invoice.status === PAID}>
          Paid
        </Button>
      </div>
    </div>
  );
};