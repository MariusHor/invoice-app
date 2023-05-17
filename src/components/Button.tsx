import { ReactNode, memo } from "react";

interface ButtonProps {
  children?: ReactNode;
  title?: string;
  classes?: string;
  onClick?: () => void;
}

export const Button = memo(
  ({ children, title, classes, onClick }: ButtonProps): React.JSX.Element => {
    return (
      <button className={`h-fit ${classes}`} onClick={onClick}>
        {children}
        <span>{title}</span>
      </button>
    );
  }
);
