import { useFormikContext } from "formik";
import { Button } from "components";
import { useAuth, useInvoices, useSubmitInvoice } from "hooks";
import { Invoice } from "types";
import { DEMO_MODE_MAX_INVOICES } from "utils/constants";

interface SaveDraftProps {
  isSubmitting: boolean;
}

export const SaveDraft = ({
  isSubmitting,
}: SaveDraftProps): React.JSX.Element => {
  const { auth } = useAuth();
  const { data: invoices } = useInvoices();
  const { values, setSubmitting } = useFormikContext<Invoice>();
  const submitInvoice = useSubmitInvoice();

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
