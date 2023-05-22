import { memo, useCallback } from "react";
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
    const handlePaginationClick = useCallback(() => {
      if (totalPages !== currentPage) handleCurrentPage(currentPage + 1);
    }, [currentPage, handleCurrentPage, totalPages]);

    return (
      <div className="row-span-1 mx-auto flex h-fit w-fit items-center justify-center gap-3">
        <IconButton
          style={{ color: "#7C5DFA" }}
          onClick={() => {
            if (currentPage > 1) handleCurrentPage(currentPage - 1);
          }}
        >
          <NavigateBeforeIcon />
        </IconButton>
        <span className="h-fit">{currentPage}</span>
        <IconButton
          onClick={handlePaginationClick}
          style={{ color: "#7C5DFA" }}
        >
          <NavigateNextIcon />
        </IconButton>
      </div>
    );
  }
);
