import { memo, useCallback } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { ButtonPagination } from "./ButtonPagination";

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
      <div className="row-span-1 mx-auto flex h-fit w-fit gap-3">
        <ButtonPagination
          handleClick={() => {
            if (currentPage > 1) handleCurrentPage(currentPage - 1);
          }}
        >
          <NavigateBeforeIcon />
        </ButtonPagination>
        <span>{currentPage}</span>
        <ButtonPagination handleClick={handlePaginationClick}>
          <NavigateNextIcon />
        </ButtonPagination>
      </div>
    );
  }
);
