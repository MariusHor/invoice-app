import { Button } from "@mui/material";
import { ReactNode, useCallback } from "react";
import { useNavigate } from "react-router-dom";

interface ButtonNavigateBackProps {
  title: string;
  children?: ReactNode;
}

export const ButtonNavigateBack = ({
  title,
  children,
}: ButtonNavigateBackProps): React.JSX.Element => {
  const navigate = useNavigate();
  const handleNavigateBack = useCallback(() => navigate(-1), [navigate]);

  return (
    <Button
      variant="outlined"
      size="medium"
      onClick={handleNavigateBack}
      style={{ color: "#7C5DFA", borderColor: "#7C5DFA" }}
    >
      {children}
      <span>{title}</span>
    </Button>
  );
};
