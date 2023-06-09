import { axiosPrivate, axiosPublic } from "lib";
import { Invoice, LoginValues } from "types";

export const postRegister = async ({ username, password }: LoginValues) => {
  await axiosPublic.post(
    "/auth/register",
    JSON.stringify({ username, password }),
    {
      withCredentials: true,
    }
  );
};

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

export const postInvoice = async (invoice: Invoice) => {
  await axiosPrivate.post("/user/invoices", invoice);
};

export const deleteInvoice = async (id: string) => {
  await axiosPrivate.delete(`/user/invoices/${id}`);
};

export const updateInvoice = async (id: string, updatedInvoice: Invoice) => {
  await axiosPrivate.patch(`/user/invoices/${id}`, updatedInvoice);
};
