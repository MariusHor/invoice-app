import { Formik, Form, FormikHelpers } from "formik";
import {
  ButtonBack,
  Button,
  InputDatePicker,
  InputSelectField,
  InputTextField,
  Spinner,
} from "components";
import { BillFrom } from "./BillFrom";
import { BillTo } from "./BillTo";
import { ItemList } from "./ItemList";
import { SaveDraft } from "./SaveDraft";
import { Invoice, InvoiceResult } from "types";
import { invoiceSchema } from "schemas";
import {
  INVOICE_FORM_INIT_VALUES,
  DEMO_MODE_MAX_INVOICES,
} from "utils/constants";
import { useAuth, useInvoices } from "hooks";

interface InvoiceFormProps {
  invoice?: InvoiceResult;
  isEditing?: boolean;
  onSubmit: (
    values: Invoice,
    { setSubmitting }: FormikHelpers<Invoice>
  ) => void;
}

export const InvoiceForm = ({
  isEditing,
  invoice,
  onSubmit,
}: InvoiceFormProps): React.JSX.Element => {
  const { auth } = useAuth();
  const { data: invoices, isLoading } = useInvoices();

  if (isLoading) return <Spinner intent={"inner"} />;

  return (
    <Formik
      initialValues={invoice ? invoice : INVOICE_FORM_INIT_VALUES}
      onSubmit={onSubmit}
      validationSchema={invoiceSchema}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col gap-10">
          <BillFrom />
          <BillTo />
          <div className="flex flex-col gap-5">
            <InputDatePicker label={"Invoice Date"} id={"createdAt"} />
            <InputSelectField label={"Payment Terms"} id={"paymentTerms"} />
            <InputTextField label={"Project Description"} id={"description"} />
          </div>
          <ItemList />
          <div className="flex-center flex-wrap gap-3 rounded-md p-4">
            <ButtonBack>Discard</ButtonBack>
            {!isEditing ? <SaveDraft isSubmitting={isSubmitting} /> : null}
            <Button
              type="submit"
              intent="primary"
              disabled={
                isSubmitting ||
                (!auth.isLoggedIn && isEditing) ||
                (!auth.isLoggedIn &&
                  invoices &&
                  invoices.length >= DEMO_MODE_MAX_INVOICES)
              }
            >
              {isEditing ? "Save changes" : "Save"}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
