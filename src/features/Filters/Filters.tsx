import { useCallback, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Filter } from "./Filter";
import { ButtonFilter } from "./ButtonFilter";

export const Filters = (): React.JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <div className="relative flex grow items-center justify-end">
      <ButtonFilter open={open} handleOpen={handleOpen} />
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
