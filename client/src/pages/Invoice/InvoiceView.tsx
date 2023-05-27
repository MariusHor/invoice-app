import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { InvoiceStatus, InvoiceDetails } from "components";
import { invoicesLoader } from "pages";
import { InvoiceResult } from "types";
import { invariant } from "utils";
import {
  useDeleteInvoice,
  useInvoices,
  useTheme,
  useUpdateInvoice,
} from "hooks";

export const InvoiceView = () => {
  const { isDarkTheme } = useTheme();
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
      <div
        className={`${
          isDarkTheme ? "bg-secondary-600" : "bg-white"
        } flex items-center justify-between gap-24 rounded-lg p-7`}
      >
        <span
          className={`paragraph ${isDarkTheme ? "text-secondary-300" : ""}`}
        >
          Status
        </span>
        <InvoiceStatus status={invoice.status} />
      </div>
      <InvoiceDetails invoice={invoice} id={id} />
      <div
        className={`${
          isDarkTheme ? "bg-secondary-600" : "bg-white"
        } flex h-20 items-center justify-center gap-2 p-6 lg:rounded-lg`}
      >
        <Link
          to={`/invoices/${id}/edit`}
          className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium css-1rwt2y5-MuiButtonBase-root-MuiButton-root"
          style={{
            color: isDarkTheme ? "white" : "#7C5DFA",
            borderColor: isDarkTheme ? "#494E6E" : "#7C5DFA",
          }}
        >
          Edit
        </Link>
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
