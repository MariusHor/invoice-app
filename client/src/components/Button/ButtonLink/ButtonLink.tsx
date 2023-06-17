import { Link, Location } from "react-router-dom";
import { type VariantProps } from "class-variance-authority";

import { button } from "../styles";

interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof button> {
  to: string;
  state?: {
    from: Location;
  };
  replace?: boolean;
}

export const ButtonLink = ({
  to,
  className,
  intent,
  size,
  state,
  replace,
  ...props
}: LinkButtonProps): React.JSX.Element => (
  <Link
    to={to}
    state={state}
    replace={replace}
    className={button({ intent, size, className })}
    {...props}
  />
);
