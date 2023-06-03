import { getSignout } from "api";
import { Button } from "./Button";
import { useAuth } from "hooks";

interface ButtonSignoutProps {
  signoutCallback?: () => void;
}

export const ButtonSignout = ({
  signoutCallback,
}: ButtonSignoutProps): React.JSX.Element => {
  const { setAuth } = useAuth();

  const handleSignOut = async () => {
    setAuth({});

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
