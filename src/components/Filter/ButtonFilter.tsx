import { FC } from "react";
import arrowDownIcon from "assets/icon-arrow-down.svg";

interface IProps {
  open: boolean;
  setOpen: (state: boolean) => void;
}

export const ButtonFilter: FC<IProps> = ({ open, setOpen }) => {
  return (
    <button
      className="grid h-fit grid-cols-2 place-items-center"
      onClick={() => setOpen(!open)}
    >
      <h4 className="heading-sm">Filters</h4>
      <img
        src={arrowDownIcon}
        alt=""
        className={`transition-primary ${open ? "rotate-180" : ""}`}
      />
    </button>
  );
};
