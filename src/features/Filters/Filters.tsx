import { useCallback, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Button } from "@mui/material";
import { Filter } from "./Filter";
import arrowDownIcon from "assets/icon-arrow-down.svg";

export const Filters = (): React.JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <div className="relative flex grow items-center justify-end">
      <Button
        onClick={handleOpen}
        style={{ textTransform: "none", color: "#494E6E" }}
      >
        <>
          <img
            src={arrowDownIcon}
            alt=""
            className={`transition-primary mr-2 ${open ? "rotate-180" : ""}`}
          />
          <span>Filters</span>
        </>
      </Button>
      <CSSTransition
        in={open}
        timeout={600}
        classNames={"dropdown-transition"}
        unmountOnExit
        mountOnEnter
      >
        <ul className="transition-primary absolute -bottom-36 right-0 flex w-40 flex-col gap-2 rounded-lg bg-white p-6 shadow-xl">
          <Filter id="draft" name="draft" title="Draft" />
          <Filter id="pending" name="pending" title="Pending" />
          <Filter id="paid" name="paid" title="Paid" />
        </ul>
      </CSSTransition>
    </div>
  );
};
