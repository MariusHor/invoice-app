import { FormCustom } from "features";
import { FormikHelpers } from "formik";
import { useTheme } from "hooks";
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
  const { isDarkTheme } = useTheme();

  return (
    <div
      className={`${
        isDarkTheme ? "bg-secondary-600" : "bg-white"
      } form-wrapper lg:grow-1 flex w-full max-w-xl flex-col justify-between gap-8 rounded-xl p-8 lg:overflow-y-auto`}
    >
      <h1 className={`${isDarkTheme ? "text-white" : ""} heading-md`}>
        {title}
      </h1>
      <FormCustom
        onSubmit={handleSubmit}
        invoice={invoice}
        isEditing={isEditing}
      />
    </div>
  );
};
