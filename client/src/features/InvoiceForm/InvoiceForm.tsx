import { Formik, Form, FormikHelpers } from "formik";

import {
  ButtonBack,
  Button,
  InputDatePicker,
  InputSelectField,
  InputTextField,
} from "components";
import { BillFrom } from "./BillFrom";
import { BillTo } from "./BillTo";
import { ItemList } from "./ItemList";
import { Invoice, InvoiceResult } from "types";
import { invoiceSchema } from "schemas";
import { INVOICE_FORM_INIT_VALUES } from "utils/constants";

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
}: InvoiceFormProps) => {
  return (
    <Formik
      initialValues={invoice ? invoice : INVOICE_FORM_INIT_VALUES}
      onSubmit={onSubmit}
      enableReinitialize={true}
      validationSchema={invoiceSchema}
    >
      {({ handleSubmit, isSubmitting, setFieldValue }) => (
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
            {!isEditing ? (
              <Button
                intent="secondary"
                onClick={() => {
                  setFieldValue("isDraft", true);
                  handleSubmit();
                }}
                disabled={isSubmitting}
              >
                Save as Draft
              </Button>
            ) : null}
            <Button
              intent="primary"
              onClick={() => {
                setFieldValue("isDraft", false);
                handleSubmit();
              }}
              disabled={isSubmitting}
            >
              {isEditing ? "Save changes" : "Save"}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
