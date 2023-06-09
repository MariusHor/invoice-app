import { useState } from "react";
import { Button } from "../Button";
import { useSignout } from "hooks";

interface ButtonSignoutProps {
  signoutCallback?: () => void;
}

export const ButtonSignout = ({
  signoutCallback,
}: ButtonSignoutProps): React.JSX.Element => {
  const [_, setState] = useState();
  const signout = useSignout();

  const handleSignout = async () => {
    try {
      await signout();
    } catch (error) {
      return setState(() => {
        throw error;
      });
    }
  };

  return (
    <Button
      onClick={() => {
        handleSignout();
        if (signoutCallback) signoutCallback();
      }}
      intent={"primary"}
      size={"fixed"}
      className="hover:bg-skin-btn-primary-hover"
    >
      Sign Out
    </Button>
  );
};
