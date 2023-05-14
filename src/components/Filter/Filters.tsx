import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Filter } from "./Filter";
import { ButtonFilter } from "./ButtonFilter";

const Filters = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="relative flex grow items-center justify-end">
      <ButtonFilter open={open} setOpen={setOpen} />
      <CSSTransition
        in={open}
        timeout={600}
        classNames={"dropdown-transition"}
        unmountOnExit
        mountOnEnter
      >
        <ul className="transition-primary absolute -bottom-32 right-0 flex w-40 flex-col gap-2 rounded-lg bg-white p-6 shadow-xl">
          <Filter id="draft" name="draft" title="Draft" />
          <Filter id="pending" name="pending" title="Pending" />
          <Filter id="paid" name="paid" title="Paid" />
        </ul>
      </CSSTransition>
    </div>
  );
};

export default Filters;
