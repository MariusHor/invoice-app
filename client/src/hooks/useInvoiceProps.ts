import { Invoice } from "types";
import { formatDate } from "utils";

export const useInvoiceProps = () => {
  return (values: Invoice) => {
    const { createdAt, paymentTerms, items, isDraft } = values;
    const paymentDue = formatDate(createdAt, paymentTerms);
    const total = items.reduce((total, current) => {
      return total + current.total;
    }, 0);

    return { paymentDue, total, isDraft };
  };
};
