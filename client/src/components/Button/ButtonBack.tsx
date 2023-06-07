import { ReactNode, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "./Button";

export const ButtonBack = ({
  children,
}: {
  children: ReactNode;
}): React.JSX.Element => {
  const navigate = useNavigate();
  const handleNavigateBack = useCallback(() => navigate(-1), [navigate]);

  return (
    <Button intent="outlined" size="medium" onClick={handleNavigateBack}>
      {children}
    </Button>
  );
};
