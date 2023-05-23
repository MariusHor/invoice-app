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
  const initialValues: FormValues = {
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
  };

  const handleSubmit = (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));

      setSubmitting(false);
    }, 500);
  };

  return (
    <Formik
      initialValues={initialValues}
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
