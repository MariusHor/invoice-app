import { useQuery } from "@tanstack/react-query";
import { useAxiosPrivate } from "./useAxiosPrivate";

export const useInvoices = () => {
  const axiosPrivate = useAxiosPrivate();

  return useQuery({
    queryKey: ["invoices"],
    queryFn: async () => {
      const response = await axiosPrivate.get("/user/invoices");
      return response.data;
    },
  });
};

export const useUser = () => {
  const axiosPrivate = useAxiosPrivate();

  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      try {
        const response = await axiosPrivate.get("/user/account");
        return response.data;
      } catch (error) {
        return {};
      }
    },
  });
};
