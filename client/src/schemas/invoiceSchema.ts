import * as yup from "yup";

export const invoiceSchema = yup.object().shape({
  createdAt: yup.string().required("Date is required"),
  description: yup.string().required("Description is required"),
  paymentTerms: yup.number().required("Payment Terms are required"),
  clientName: yup.string().required("Name is required"),
  clientEmail: yup.string().email().required("Email is required"),
  senderAddress: yup.object().shape({
    street: yup.string().required("Address is required"),
    city: yup.string().required("City is required"),
    postCode: yup.string().required("Post Code is required"),
    country: yup.string().required("Country is required"),
  }),
  clientAddress: yup.object().shape({
    street: yup.string().required("Address is required"),
    city: yup.string().required("City is required"),
    postCode: yup.string().required("Post Code is required"),
    country: yup.string().required("Country is required"),
  }),
  items: yup.array().of(
    yup.object().shape({
      name: yup.string().required("Name is required"),
      quantity: yup
        .number()
        .positive("Must be a positive number")
        .typeError("Must be a number")
        .required("Qty. is required")
        .integer(),
      price: yup
        .number()
        .positive("Must be a positive number")
        .required("Price is required")
        .typeError("Must be a number"),
    })
  ),
});
