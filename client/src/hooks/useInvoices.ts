import { useQuery } from "@tanstack/react-query";
import { useAxiosPrivate } from "./useAxiosPrivate";

const baseURL = "http://localhost:4500/";

export const useInvoices = () => {
  const axiosPrivate = useAxiosPrivate();

  return useQuery({
    queryKey: ["invoices"],
    queryFn: async () => {
      const response = await axiosPrivate.get(`${baseURL}api/invoices/public`);
      return response.data;
    },
  });
};
