import { useUser } from "hooks/useQueries";
import { default as AvatarMUI } from "@mui/material/Avatar";

interface SizesProps {
  [key: string]: {
    width: number;
    height: number;
  };
}

export const Avatar = ({ intent = "small" }: { intent?: string }) => {
  const { data: user, isLoading } = useUser();
  const sizes: SizesProps = {
    small: { width: 50, height: 50 },
    medium: { width: 70, height: 70 },
    large: { width: 80, height: 80 },
  };

  if (isLoading) return <></>;

  return (
    <AvatarMUI
      sx={{ bgcolor: "grey", ...sizes[intent] }}
      alt={user.username}
      src={user.image}
    />
  );
};
