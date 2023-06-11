import { useFormikContext } from "formik";
import { Button } from "components";
import { useAuth, useInvoices, useSubmitInvoice } from "hooks";
import { Invoice } from "types";
import { DEMO_MODE_MAX_INVOICES } from "utils/constants";

export const SaveDraft = ({ isSubmitting }: { isSubmitting: boolean }) => {
  const { auth } = useAuth();
  const submitInvoice = useSubmitInvoice();
  const { data: invoices } = useInvoices();
  const { values, setSubmitting } = useFormikContext<Invoice>();

  return (
    <Button
      intent="secondary"
      type="button"
      onClick={() => submitInvoice({ values, setSubmitting, isDraft: true })}
      disabled={
        isSubmitting ||
        (!auth.isLoggedIn &&
          invoices &&
          invoices.length >= DEMO_MODE_MAX_INVOICES)
      }
    >
      Save as Draft
    </Button>
  );
};
