import { useNavigate, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import {
  InvoiceStatus,
  InvoiceDetails,
  LinkButton,
  Button,
  Spinner,
} from "components";
import { InvoiceResult } from "types";
import { invariant } from "utils";
import { useDeleteInvoice, useInvoices, useUpdateInvoice } from "hooks";

export const InvoiceView = () => {
  const deleteInvoice = useDeleteInvoice();
  const updateInvoice = useUpdateInvoice();
  const navigate = useNavigate();
  const { id } = useParams();
  invariant(id);

  const { data: invoices, isLoading } = useInvoices();

  if (isLoading) return <Spinner intent={"inner"} />;

  const invoice: InvoiceResult = invoices.find(
    (invoice: InvoiceResult) => invoice.invoiceId === id
  );

  const handleDelete = async () => {
    await deleteInvoice.mutateAsync({ id: invoice._id });
    return navigate("/dashboard");
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
    <AnimatePresence>
      <motion.div
        className="flex w-full max-w-3xl flex-col justify-between gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        exit={{
          opacity: 0,
          transition: {
            ease: "easeInOut",
            duration: 0.5,
            delay: 1,
          },
        }}
      >
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
          <LinkButton to={`/dashboard/${id}/edit`} intent={"outlined-link"}>
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
      </motion.div>
    </AnimatePresence>
  );
};
