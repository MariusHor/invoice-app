import { CircularProgress } from "@mui/material";

export const Spinner = (): React.JSX.Element => {
  return (
    <div className="flex-center h-screen w-full">
      <CircularProgress />
    </div>
  );
};
