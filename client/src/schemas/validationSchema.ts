import * as yup from "yup";

export const validationSchema = yup.object().shape({
  createdAt: yup.string().required("Date is required"),
  description: yup.string().required("Description is required"),
  paymentTerms: yup.string().required("Payment Terms are required"),
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
      itemName: yup.string().required("Name is required"),
      quantity: yup
        .number()
        .required("Qty. is required")
        .integer()
        .typeError("Must be a number"),
      price: yup
        .number()
        .required("Price is required")
        .typeError("Must be a number"),
    })
  ),
});
