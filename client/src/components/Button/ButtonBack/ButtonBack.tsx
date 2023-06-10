import { ReactNode, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Button } from "../Button";

export const ButtonBack = ({
  children,
}: {
  children: ReactNode;
}): React.JSX.Element => {
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
