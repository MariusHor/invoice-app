import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, FormikHelpers } from "formik";
import { Button } from "@mui/material";
import { FormValues } from "types";
import { validationSchema } from "schemas";
import { BillFrom } from "./BillFrom";
import { BillTo } from "./BillTo";
import { InvoiceDetails } from "./InvoiceDetails";
import { ItemList } from "./ItemList";
import { ButtonNavigateBack } from "components";

export const FormCustom = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState<FormValues>({
    createdAt: "",
    description: "",
    paymentTerms: "",
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
    items: [],
  });

  const handleSubmit = (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    try {
      console.log(values);
      setSubmitting(false);
      navigate("/invoices");
    } catch (error) {
      console.log(error);
    }
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
