import { type VariantProps } from "class-variance-authority";

import { button } from "./styles";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button = ({
  className,
  intent,
  size,
  ...props
}: ButtonProps): React.JSX.Element => (
  <button
    className={button({ intent, size, className })}
    type="button"
    {...props}
  />
);
