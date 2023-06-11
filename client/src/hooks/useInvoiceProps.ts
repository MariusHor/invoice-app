import { Invoice } from "types";
import { formatDate } from "utils";

export const useInvoiceProps = () => {
  return (values: Invoice) => {
    const { createdAt, paymentTerms, items } = values;
    const paymentDue = createdAt ? formatDate(createdAt, paymentTerms) : "";
    const total = items.reduce((total, current) => {
      return total + current.total;
    }, 0);

    return { paymentDue, total };
  };
};
