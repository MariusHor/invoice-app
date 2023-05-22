import * as yup from "yup";

export const validationSchema = yup.object().shape({
  senderAddress: yup.string().required("Address is required"),
  senderCity: yup.string().required("City is required"),
  senderPostCode: yup
    .number()
    .positive()
    .integer()
    .typeError("Must be a number")
    .required("Post Code is required"),
  senderCountry: yup.string().required("Country is required"),
  clientName: yup.string().required("Name is required"),
  clientEmail: yup.string().email().required("Email is required"),
  clientAddress: yup.string().required("Address is required"),
  clientCity: yup.string().required("City is required"),
  clientPostCode: yup
    .number()
    .positive()
    .integer()
    .typeError("Must be a number")
    .required("Post Code is required"),
  clientCountry: yup.string().required("Country is required"),
  invoiceDate: yup.date().required("Date is required"),
  paymentTerms: yup.string().required("Payment Terms are required"),
  projectDescription: yup.string().required("Description is required"),
  items: yup.array().of(
    yup.object().shape({
      itemName: yup.string().required("Item name is required"),
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
