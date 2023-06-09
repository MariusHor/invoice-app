import { useQuery } from "@tanstack/react-query";
import { useAxiosPrivate } from "./useAxiosPrivate";
import { useAuth } from "./contextHooks";
import { QUERY_INVOICES, QUERY_USER } from "utils/constants";
import toast from "react-hot-toast";
import { isAxiosError } from "axios";

export const useInvoices = () => {
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();

  return useQuery({
    queryKey: [QUERY_INVOICES],
    queryFn: async () => {
      if (!auth.isLoggedIn) return [];

      try {
        const response = await axiosPrivate.get("/user/invoices", {
          headers: { "Content-Type": "application/json" },
        });

        if (response.status !== 200) throw new Error();

        return response.data;
      } catch (error) {
        if (isAxiosError(error)) {
          toast.error(`Something went wrong: ${error.response?.data.message}`);
        }
        return [];
      }
    },
  });
};

export const useUser = () => {
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();

  return useQuery({
    queryKey: [QUERY_USER],
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
