import { HOME_PATH } from "utils/constants";
import { Button } from "../Button";
import { useAuth } from "hooks";
import { useNavigate } from "react-router-dom";

interface ButtonSignoutProps {
  signoutCallback?: () => void;
}

export const ButtonSignout = ({
  signoutCallback,
}: ButtonSignoutProps): React.JSX.Element => {
  const { handleSignout } = useAuth();
  const navigate = useNavigate();

  return (
    <Button
      onClick={async () => {
        await handleSignout(() => navigate(HOME_PATH));
        if (signoutCallback) signoutCallback();
      }}
      intent={"primary"}
      size={"fixed"}
      name="signout"
      className="hover:bg-skin-btn-primary-hover"
    >
      Sign Out
    </Button>
  );
};
