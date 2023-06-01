import { InvoiceForm } from "features";
import { FormikHelpers } from "formik";
import { Invoice, InvoiceResult } from "types";

interface LayoutFormProps {
  isEditing?: boolean;
  invoice?: InvoiceResult;
  title: string;
  handleSubmit: (
    values: Invoice,
    { setSubmitting }: FormikHelpers<Invoice>
  ) => Promise<void>;
}

export const LayoutForm = ({
  title,
  handleSubmit,
  invoice,
  isEditing,
}: LayoutFormProps) => {
  return (
    <div className="form-wrapper lg:grow-1 flex w-full max-w-xl flex-col justify-between gap-8 rounded-xl bg-skin-fill-secondary p-8 lg:overflow-y-auto">
      <h1 className="heading-md text-skin-base">{title}</h1>
      <InvoiceForm
        onSubmit={handleSubmit}
        invoice={invoice}
        isEditing={isEditing}
      />
    </div>
  );
};
