import arrowDownIcon from "assets/icon-arrow-down.svg";
import { memo } from "react";

interface ButtonFilterProps {
  open: boolean;
  handleOpen: () => void;
}

export const ButtonFilter = memo(
  ({ open, handleOpen }: ButtonFilterProps): React.JSX.Element => {
    return (
      <button
        className="flex h-fit items-center gap-2"
        onClick={() => handleOpen()}
      >
        <h4 className="heading-sm">Filters</h4>
        <img
          src={arrowDownIcon}
          alt=""
          className={`transition-primary ${open ? "rotate-180" : ""}`}
        />
      </button>
    );
  }
);
