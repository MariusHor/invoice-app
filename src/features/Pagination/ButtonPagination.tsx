import { Button } from "components";
import { ReactNode, memo } from "react";

interface ButtonPaginationProps {
  children: ReactNode;
  handleClick: () => void;
}

export const ButtonPagination = memo(
  ({ children, handleClick }: ButtonPaginationProps): React.JSX.Element => {
    return (
      <Button
        onClick={handleClick}
        classes={"rounded-full bg-primary-600 text-secondary-200"}
      >
        {children}
      </Button>
    );
  }
);
