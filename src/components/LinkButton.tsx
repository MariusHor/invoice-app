import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  children?: ReactNode;
  title: string;
  to: string;
}

const LinkButton = ({
  children,
  title,
  to,
}: ButtonProps): React.JSX.Element => {
  console.log(to);
  return (
    <Link
      to={to}
      className="transition-primary flex h-fit items-center gap-2 rounded-full bg-primary-600 p-3 hover:bg-primary-400"
    >
      {children ?? null}
      <span className="font-bold text-secondary-200">{title}</span>
    </Link>
  );
};

export default LinkButton;
