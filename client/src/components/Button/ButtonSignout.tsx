import { Button } from "./Button";
import { useSignout } from "hooks";

interface ButtonSignoutProps {
  signoutCallback?: () => void;
}

export const ButtonSignout = ({
  signoutCallback,
}: ButtonSignoutProps): React.JSX.Element => {
  const signout = useSignout();

  const handleSignOut = async () => {
    try {
      await signout();
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
