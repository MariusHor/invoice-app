import userAvatar from "assets/image-avatar.jpg";
import { type VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { HTMLAttributes } from "react";

const avatar = cva("overflow-hidden rounded-full", {
  variants: {
    intent: {
      primary: ["h-10 w-10 md:h-12 md:w-12"],
      secondary: ["h-16 w-16 md:h-20 md:w-20"],
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});

export interface SpinnerProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatar> {}

export const Avatar = ({ className, intent, ...props }: SpinnerProps) => (
  <div className={avatar({ intent, className })} {...props}>
    <img src={userAvatar} alt="" />
  </div>
);
