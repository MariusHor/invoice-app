import { default as AvatarMUI } from "@mui/material/Avatar";
import { useUser } from "hooks";

interface SizesProps {
  [key: string]: {
    width: number;
    height: number;
  };
}

interface AvatarProps {
  intent?: string;
}

export const Avatar = ({
  intent = "small",
}: AvatarProps): React.JSX.Element => {
  const { data: user } = useUser();
  const sizes: SizesProps = {
    small: { width: 50, height: 50 },
    medium: { width: 70, height: 70 },
    large: { width: 80, height: 80 },
  };

  return (
    <AvatarMUI
      sx={{ bgcolor: "grey", ...sizes[intent] }}
      alt={user?.username}
      src={user?.profilePicture}
    />
  );
};
