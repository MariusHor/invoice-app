import { axiosPublic } from "lib";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

export const useServerHealth = () => {
  useEffect(() => {
    const checkServerHealth = async () => {
      try {
        await axiosPublic.get("/health");
      } catch (error) {
        console.log(error);
      }
    };

    toast.promise(checkServerHealth(), {
      loading: "Loading the app...",
      success: "App is ready!",
      error: "Error connecting to the server.",
    });
  }, []);
};
