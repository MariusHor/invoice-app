import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface LinkButtonProps {
  children?: ReactNode;
  title: string;
  to: string;
}

export const LinkCustom = ({
  children,
  title,
  to,
}: LinkButtonProps): React.JSX.Element => {
  return (
    <Link
      to={to}
      className="transition-primary flex h-fit items-center gap-2 rounded-full bg-primary-600 p-3 hover:bg-primary-400"
    >
      {children ?? null}
      <span className="mx-auto font-bold text-secondary-200">{title}</span>
    </Link>
  );
};
