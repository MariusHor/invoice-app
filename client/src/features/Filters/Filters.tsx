import { useCallback, useRef, useState } from "react";
import { Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

import { Filter } from "./Filter";
import { useClickOutside } from "hooks";
import arrowDownIcon from "assets/icon-arrow-down.svg";

export const Filters = (): React.JSX.Element => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const iconButtonRef = useRef(null);
  const dropdownRef = useRef(null);

  useClickOutside({
    ref: iconButtonRef,
    callback: () => {
      setIsShown(false);
    },
    exclude: [dropdownRef],
  });

  const handleOpen = useCallback(() => {
    setIsShown(!isShown);
  }, [isShown]);

  const showFilters = {
    enter: {
      opacity: 1,
      y: 0,
      display: "block",
    },
    exit: {
      y: -50,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  return (
    <div className="center-end relative grow bg-inherit">
      <Button
        ref={iconButtonRef}
        onClick={handleOpen}
        style={{
          textTransform: "none",
        }}
      >
        <img
          src={arrowDownIcon}
          alt=""
          className={`transition-primary mr-2 ${isShown ? "rotate-180" : ""}`}
        />
        <span className="heading-sm text-skin-base">Filters</span>
      </Button>
      <AnimatePresence>
        <motion.ul
          ref={dropdownRef}
          variants={showFilters}
          initial="exit"
          animate={isShown ? "enter" : "exit"}
          className="absolute -bottom-44 right-0 flex w-40 flex-col gap-2 rounded-lg bg-skin-fill-secondary p-6 shadow-xl"
        >
          <Filter id="draft" name="draft" title="Draft" />
          <Filter id="pending" name="pending" title="Pending" />
          <Filter id="paid" name="paid" title="Paid" />
        </motion.ul>
      </AnimatePresence>
    </div>
  );
};
