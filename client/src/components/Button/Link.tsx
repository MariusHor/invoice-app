import { Link } from "react-router-dom";
import { type VariantProps } from "class-variance-authority";

import { button } from "./styles";

interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof button> {
  to: string;
}

export const LinkButton = ({
  to,
  className,
  intent,
  size,
  ...props
}: LinkButtonProps) => (
  <Link to={to} className={button({ intent, size, className })} {...props} />
);
