import { AnimatePresence, motion } from "framer-motion";
import { Invoice } from "features/Invoice/Invoice";

export const InvoiceView = (): React.JSX.Element => {
  return (
    <AnimatePresence>
      <motion.div
        className="flex w-full max-w-3xl flex-col justify-between gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        exit={{
          opacity: 0,
          transition: {
            ease: "easeInOut",
            duration: 0.5,
            delay: 1,
          },
        }}
      >
        <Invoice />
      </motion.div>
    </AnimatePresence>
  );
};
