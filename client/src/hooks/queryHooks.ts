import { useQuery } from "@tanstack/react-query";
import { useAxiosPrivate } from "./useAxiosPrivate";

export const useInvoices = () => {
  const axiosPrivate = useAxiosPrivate();

  return useQuery({
    queryKey: ["invoices"],
    queryFn: async () => {
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

  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      try {
        const response = await axiosPrivate.get("/user/account", {
          headers: { "Content-Type": "application/json" },
        });
        return response.data;
      } catch (error) {
        return {};
      }
    },
  });
};
