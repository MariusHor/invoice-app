import { getSignout } from "api";
import { Button } from "./Button";
import { useAuth, usePersist } from "hooks";
import { useNavigate } from "react-router-dom";

interface ButtonSignoutProps {
  signoutCallback?: () => void;
}

export const ButtonSignout = ({
  signoutCallback,
}: ButtonSignoutProps): React.JSX.Element => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const { persist, setPersist } = usePersist();

  const handleSignOut = async () => {
    if (persist) setPersist(false);
    setAuth({});
    navigate("/");
    try {
      await getSignout();

      if (signoutCallback) signoutCallback();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Button
      onClick={handleSignOut}
      intent={"primary"}
      size={"fixed"}
      className="hover:bg-skin-btn-primary-hover"
    >
      Sign Out
    </Button>
  );
};
