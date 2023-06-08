import { useQuery } from "@tanstack/react-query";
import { useAxiosPrivate } from "./useAxiosPrivate";
import { useAuth } from "./contextHooks";

export const useInvoices = () => {
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();

  return useQuery({
    queryKey: ["invoices"],
    queryFn: async () => {
      if (!auth.isLoggedIn) return {};

      try {
        const response = await axiosPrivate.get("/user/invoices", {
          headers: { "Content-Type": "application/json" },
        });
        return response.data;
      } catch (error) {
        console.log(error);
        return {};
      }
    },
  });
};

export const useUser = () => {
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();

  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      if (!auth.isLoggedIn) return {};

      try {
        const response = await axiosPrivate.get("/user/account", {
          headers: { "Content-Type": "application/json" },
        });
        return response.data;
      } catch (error) {
        console.log(error);
        return {};
      }
    },
  });
};
