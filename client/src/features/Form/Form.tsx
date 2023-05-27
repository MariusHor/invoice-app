import { Formik, Form, FormikHelpers } from "formik";
import { Button } from "@mui/material";
import { Invoice, InvoiceResult } from "types";
import { validationSchema } from "schemas";
import { ButtonNavigateBack } from "components";
import { BillFrom } from "./BillFrom";
import { BillTo } from "./BillTo";
import { InputDatePicker } from "./InputDatePicker";
import { InputSelectField } from "./InputSelectField";
import { InputTextField } from "./inputTextField";
import { ItemList } from "./ItemList";

interface FormCustomProps {
  invoice?: InvoiceResult;
  isEditing?: boolean;
  onSubmit: (
    values: Invoice,
    { setSubmitting }: FormikHelpers<Invoice>
  ) => void;
}

export const FormCustom = ({
  isEditing,
  invoice,
  onSubmit,
}: FormCustomProps) => {
  const initialValues = invoice
    ? invoice
    : {
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
      };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => (
        <Form className="paragraph flex flex-col gap-10">
          <BillFrom />
          <BillTo />
          <div className="paragraph flex flex-col gap-5">
            <InputDatePicker label={"Invoice Date"} id={"createdAt"} />
            <InputSelectField label={"Payment Terms"} id={"paymentTerms"} />
            <InputTextField label={"Project Description"} id={"description"} />
          </div>
          <ItemList />
          <div className="flex items-center justify-center gap-3 rounded-md  p-4 text-white">
            <ButtonNavigateBack title="Discard" />
            <Button
              variant="contained"
              size="medium"
              type="submit"
              disabled={isSubmitting}
              style={{ background: "#7C5DFA", borderColor: "#7C5DFA" }}
            >
              {isEditing ? "Edit" : "Submit"}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
