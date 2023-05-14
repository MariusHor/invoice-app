import { ReactNode } from "react";

interface NavigateButtonProps {
  children: ReactNode;
  handleClick: () => void;
}

export const NavigateButton = ({
  children,
  handleClick,
}: NavigateButtonProps): React.JSX.Element => {
  return (
    <button
      className="rounded-full bg-primary-600 text-secondary-200"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
