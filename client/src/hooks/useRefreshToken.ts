import { useAuth } from "./useAuth";
import axios from "axios";

const baseUrl = "http://localhost:3000/";

export const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axios.get(`${baseUrl}api/auth/refresh`, {
      withCredentials: true,
    });

    setAuth((prev) => {
      return { ...prev, accessToken: response.data.accessToken };
    });

    return response.data.accessToken;
  };

  return { refresh };
};
