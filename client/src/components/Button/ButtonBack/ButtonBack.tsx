import { ReactNode, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Button } from "../Button";

interface ButtonBackProps {
  children: ReactNode;
}

export const ButtonBack = ({
  children,
}: ButtonBackProps): React.JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigateBack = useCallback(() => {
    const from = location.state?.from ?? -1;
    navigate(from, { replace: true });
  }, [navigate, location.state?.from]);

  return (
    <Button intent="outlined" size="medium" onClick={handleNavigateBack}>
      {children}
    </Button>
  );
};
