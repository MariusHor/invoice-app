import { useNavigate } from "react-router-dom";
import { useAuth } from "./contextHooks";
import { useInvoiceProps } from "./useInvoiceProps";
import { useCreateInvoice } from "./mutationHooks";
import { Invoice } from "types";
import { DRAFT, PENDING } from "utils/constants";

interface SubmitProps {
  values: Invoice;
  setSubmitting: (isSubmitting: boolean) => void;
  isDraft: boolean;
}

export const useSubmitInvoice = () => {
  const { auth } = useAuth();
  const getInvoiceProps = useInvoiceProps();
  const navigate = useNavigate();
  const createInvoice = useCreateInvoice();

  return async ({ values, setSubmitting, isDraft }: SubmitProps) => {
    const path = auth.isLoggedIn ? "/dashboard" : "/demo";
    const { paymentDue, total } = getInvoiceProps(values);
    const status = isDraft ? DRAFT : PENDING;
    const newInvoice = {
      ...values,
      paymentDue,
      total,
      status,
    };

    await createInvoice.mutateAsync({ newInvoice });
    setSubmitting(false);
    return navigate(path);
  };
};
