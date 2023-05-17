import arrowDownIcon from "assets/icon-arrow-down.svg";
import { Button } from "components";
import { memo } from "react";

interface ButtonFilterProps {
  open: boolean;
  handleOpen: () => void;
}

export const ButtonFilter = memo(
  ({ open, handleOpen }: ButtonFilterProps): React.JSX.Element => {
    return (
      <Button
        onClick={handleOpen}
        title={"Filters"}
        classes={"flex h-fit items-center gap-2"}
      >
        <img
          src={arrowDownIcon}
          alt=""
          className={`transition-primary ${open ? "rotate-180" : ""}`}
        />
      </Button>
    );
  }
);
