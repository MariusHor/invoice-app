import { useNavigate } from "react-router-dom";
import arrowLeft from "../assets/icon-arrow-left.svg";
import { Button } from "./Button";
import { useCallback } from "react";

export const ButtonNavigateBack = () => {
  const navigate = useNavigate();

  const handleNavigateBack = useCallback(() => navigate(-1), [navigate]);

  return (
    <Button
      onClick={handleNavigateBack}
      title={"Go back"}
      classes={"flex h-fit w-fit items-center justify-center gap-3"}
    >
      <div>
        <img src={arrowLeft} alt="" />
      </div>
    </Button>
  );
};
