import { memo } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { NavigateButton } from "./ButtonNavigate";

interface NavigationProps {
  totalPages: number;
  currentPage: number;
  handleCurrentPage: (value: number) => void;
}

const Navigation = memo(
  ({
    totalPages,
    currentPage,
    handleCurrentPage,
  }: NavigationProps): React.JSX.Element => {
    return (
      <div className="row-span-1 mx-auto flex h-fit w-fit gap-3">
        <NavigateButton
          handleClick={() => {
            if (currentPage > 1) handleCurrentPage(currentPage - 1);
          }}
        >
          <NavigateBeforeIcon />
        </NavigateButton>
        <span>{currentPage}</span>
        <NavigateButton
          handleClick={() => {
            if (totalPages !== currentPage) handleCurrentPage(currentPage + 1);
          }}
        >
          <NavigateNextIcon />
        </NavigateButton>
      </div>
    );
  }
);

export default Navigation;
