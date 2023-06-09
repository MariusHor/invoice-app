import { ReactNode } from "react";
import bgVector from "../assets/bgVector.svg";

interface AuthProps {
  children: ReactNode;
}

export const Auth = ({ children }: AuthProps): React.JSX.Element => {
  return (
    <div className="flex w-full grow flex-col items-stretch justify-center gap-10 text-center text-skin-base lg:flex-row">
      <div className="flex-center mx-auto w-full max-w-xl lg:mx-0">
        <img
          width={384}
          height={384}
          src={bgVector}
          alt=""
          className="max-h-96"
        />
      </div>
      <div className="mx-auto flex w-full max-w-xs flex-col items-center justify-center lg:mx-0 lg:min-w-80">
        {children}
      </div>
    </div>
  );
};
