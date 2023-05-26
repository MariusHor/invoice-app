import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, FormikHelpers } from "formik";
import { Button } from "@mui/material";
import { Invoice } from "types";
import { validationSchema } from "schemas";
import { BillFrom } from "./BillFrom";
import { BillTo } from "./BillTo";
import { InvoiceDetails } from "./InvoiceDetails";
import { ItemList } from "./ItemList";
import { ButtonNavigateBack } from "components";
import { addInvoice } from "api";
import { queryClient } from "lib";
import { parse, add, format } from "date-fns";

export const FormCustom = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState<Invoice>({
    createdAt: "",
    description: "",
    paymentTerms: 1,
    clientName: "",
    clientEmail: "",
    senderAddress: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
    clientAddress: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
    items: [{ name: "", quantity: 0, price: 0, total: 0 }],
  });

  const handleSubmit = async (
    values: Invoice,
    { setSubmitting }: FormikHelpers<Invoice>
  ) => {
    const dateString = values.createdAt;
    const originalDate = parse(dateString, "yyyy-MM-dd", new Date());
    const newDate = add(originalDate, { days: values.paymentTerms });

    const paymentDue = format(newDate, "yyyy-MM-dd");

    const newInvoice = {
      ...values,
      paymentDue,
      status: "pending",
      total: values.items.reduce((total, current) => {
        return total + current.price * current.quantity;
      }, 0),
    };

    await addInvoice(newInvoice);
    queryClient.invalidateQueries({ queryKey: ["invoices"] });

    setSubmitting(false);
    return navigate("/invoices");
  };

  return (
    <Formik
      initialValues={values}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => (
        <Form className="paragraph flex flex-col gap-10">
          <BillFrom />
          <BillTo />
          <InvoiceDetails />
          <ItemList />
          <div className="flex items-center justify-center gap-3 rounded-md  bg-white p-4 text-white">
            <ButtonNavigateBack title="Discard" />
            <Button
              variant="contained"
              size="medium"
              type="submit"
              disabled={isSubmitting}
              style={{ background: "#7C5DFA", borderColor: "#7C5DFA" }}
            >
              Submit
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
