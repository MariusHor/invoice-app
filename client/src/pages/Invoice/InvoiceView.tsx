import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { InvoiceStatus, InvoiceDetails, InvoiceFallback } from "components";
import { invoicesLoader } from "pages";
import { InvoiceResult } from "types";
import { deleteInvoice } from "api";
import { queryClient } from "lib";

export const InvoiceView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const invoices: InvoiceResult[] = useLoaderData() as Awaited<
    ReturnType<ReturnType<typeof invoicesLoader>>
  >;
  const invoice = invoices.find((item: InvoiceResult) => item.invoiceId === id);

  if (!invoice || !id) {
    return <InvoiceFallback />;
  }

  const handleDelete = () => {
    deleteInvoice(invoice._id);
    queryClient.invalidateQueries({ queryKey: ["invoices"] });
    return navigate("/invoices");
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
