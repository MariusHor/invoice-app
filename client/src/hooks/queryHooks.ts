import { useQuery } from "@tanstack/react-query";
import { useAxiosPrivate } from "./useAxiosPrivate";
import { useAuth } from "./contextHooks";
import { QUERY_INVOICES, QUERY_USER, QUERY_USERS } from "utils/constants";
import { setApiConfig } from "utils";

export const useInvoices = () => {
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();

  return useQuery({
    queryKey: [QUERY_INVOICES, auth.isLoggedIn, axiosPrivate],
    queryFn: async () => {
      const { path, api } = setApiConfig(!auth.isLoggedIn);
      const response = await api.get(`/${path}/invoices`, {
        headers: { "Content-Type": "application/json" },
      });
      return response.data;
    },
  });
};

export const useUser = () => {
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();

  return useQuery({
    queryKey: [QUERY_USER, auth.isLoggedIn, axiosPrivate],
    queryFn: async () => {
      if (!auth.isLoggedIn) return {};
      const response = await axiosPrivate.get("/user/account", {
        headers: { "Content-Type": "application/json" },
      });
      return response.data;
    },
  });
};

export const useUsers = () => {
  const axiosPrivate = useAxiosPrivate();

  return useQuery({
    queryKey: [QUERY_USERS, axiosPrivate],
    queryFn: async () => {
      const response = await axiosPrivate.get(`/admin/users`, {
        headers: { "Content-Type": "application/json" },
      });

      return response.data;
    },
    enabled: false,
  });
};
