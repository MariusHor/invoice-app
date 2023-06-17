import { axiosPrivate, axiosPublic } from "lib";
import { Invoice, LoginValues } from "types";

const setApiConfig = (isDemo: boolean) => {
  const path = isDemo ? "demo" : "user";
  const api = isDemo ? axiosPublic : axiosPrivate;

  return { path, api };
};

export const postRegister = async ({ username, password }: LoginValues) =>
  await axiosPublic.post(
    "/auth/register",
    JSON.stringify({ username, password }),
    {
      withCredentials: true,
    }
  );

export const postLogin = async ({ username, password }: LoginValues) =>
  await axiosPublic.post(
    "/auth/login",
    JSON.stringify({ username, password }),
    {
      withCredentials: true,
    }
  );

export const getSignout = async () =>
  await axiosPublic.get("/auth/signout", {
    withCredentials: true,
  });

export const getRefreshToken = async () =>
  await axiosPublic.get("/auth/refresh", {
    withCredentials: true,
  });

export const postInvoice = async ({
  invoice,
  isDemo,
}: {
  invoice: Invoice;
  isDemo: boolean;
}) => {
  const { path, api } = setApiConfig(isDemo);
  return await api.post(`/${path}/invoices`, invoice);
};

export const deleteInvoice = async ({
  id,
  isDemo,
}: {
  id: string;
  isDemo: boolean;
}) => {
  const { path, api } = setApiConfig(isDemo);
  return await api.delete(`/${path}/invoices/${id}`);
};

export const updateInvoice = async ({
  id,
  updatedInvoice,
  isDemo,
}: {
  id: string;
  updatedInvoice: Invoice;
  isDemo: boolean;
}) => {
  const { path, api } = setApiConfig(isDemo);
  return await api.patch(`/${path}/invoices/${id}`, updatedInvoice);
};
