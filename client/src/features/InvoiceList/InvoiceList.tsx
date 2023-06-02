import { InvoiceResult } from "types";
import { InvoiceCard } from "./InvoiceCard";
import { motion, AnimatePresence } from "framer-motion";

export const InvoiceList = ({
  currentInvoices,
}: {
  currentInvoices: InvoiceResult[];
}): React.JSX.Element => {
  return (
    <ul className="row-span-5 flex flex-col gap-4 sm:grid sm:grid-cols-2 ">
      <AnimatePresence>
        {currentInvoices.map((result: InvoiceResult) => (
          <motion.li
            key={result._id}
            layout
            transition={{ duration: 0.3 }}
            initial={{ opacity: 0, y: 30, scale: 0.3 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { duration: 0.4 },
            }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.4 } }}
          >
            <InvoiceCard key={result._id} invoice={result} />
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
};
