import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { InvoiceStatus, InvoiceDetails } from "components";
import { invoicesLoader } from "pages";
import { InvoiceResult } from "types";
import { deleteInvoice, updateInvoice } from "api";
import { queryClient } from "lib";
import { invariant } from "utils/helpers";

export const InvoiceView = () => {
  const { id } = useParams();
  invariant(id);
  const navigate = useNavigate();

  const invoices: InvoiceResult[] = useLoaderData() as Awaited<
    ReturnType<ReturnType<typeof invoicesLoader>>
  >;

  const invoice = invoices.find((item: InvoiceResult) => item.invoiceId === id);
  invariant(invoice);

  const handleDelete = () => {
    deleteInvoice(invoice._id);
    queryClient.invalidateQueries({ queryKey: ["invoices"] });
    return navigate("/invoices");
  };

  const handleUpdateStatus = async () => {
    updateInvoice(invoice._id, {
      ...invoice,
      status: "paid",
    });
    await queryClient.invalidateQueries({ queryKey: ["invoices"] });
    return navigate("/invoices");
  };

  const handleEdit = () => {
    return navigate(`/invoices/${id}/edit`);
  };

  return (
    <div className="flex w-full max-w-3xl flex-col justify-between gap-4">
      <div className="flex items-center justify-between gap-24 rounded-lg bg-white p-7">
        <span className="paragraph">Status</span>
        <InvoiceStatus status={invoice.status} />
      </div>
      <InvoiceDetails invoice={invoice} id={id} />
      <div className="flex h-20 items-center justify-center gap-2 bg-white p-6 lg:rounded-lg">
        <Button
          onClick={handleEdit}
          variant="outlined"
          style={{ color: "#7C5DFA", borderColor: "#7C5DFA" }}
        >
          Edit
        </Button>
        <Button
          onClick={handleDelete}
          variant="outlined"
          sx={{
            color: "white",
            background: "#EC5757",
            borderColor: "#EC5757",
            "&:hover": {
              backgroundColor: "white",
              color: "#EC5757",
              borderColor: "#EC5757",
            },
          }}
        >
          Delete
        </Button>
        <Button
          onClick={handleUpdateStatus}
          disabled={invoice.status === "paid"}
          variant="outlined"
          sx={{
            "&.Mui-disabled": {
              background: "#eaeaea",
              color: "#c0c0c0",
            },
            color: "white",
            background: "#7C5DFA",
            borderColor: "#7C5DFA",
            "&:hover": {
              backgroundColor: "#fff",
              color: "#7C5DFA",
              borderColor: "#7C5DFA",
            },
          }}
        >
          Paid
        </Button>
      </div>
    </div>
  );
};
