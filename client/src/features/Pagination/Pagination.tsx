import { memo } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { IconButton } from "@mui/material";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  handleCurrentPage: (value: number) => void;
}

export const Pagination = memo(
  ({
    totalPages,
    currentPage,
    handleCurrentPage,
  }: PaginationProps): React.JSX.Element => {
    return (
      <div className="center row-span-1 mx-auto h-fit w-fit grid-cols-3 gap-3">
        <div>
          <IconButton
            disabled={currentPage === 1}
            style={{ color: "#7C5DFA" }}
            onClick={() => handleCurrentPage(currentPage - 1)}
          >
            <NavigateBeforeIcon />
          </IconButton>
        </div>
        <span className="text-skin-base">{currentPage}</span>
        <IconButton
          disabled={totalPages === currentPage}
          onClick={() => handleCurrentPage(currentPage + 1)}
          style={{ color: "#7C5DFA" }}
        >
          <NavigateNextIcon />
        </IconButton>
      </div>
    );
  }
);
