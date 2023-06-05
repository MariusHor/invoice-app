import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";
import { usePersist } from "./usePersist";
import { getSignout } from "api";

export const useSignout = () => {
  const { setAuth } = useAuth();
  const { persist, setPersist } = usePersist();
  const navigate = useNavigate();

  return async (path?: string) => {
    if (persist) setPersist(false);
    setAuth({});
    navigate(path ?? "/");
    await getSignout();
  };
};
