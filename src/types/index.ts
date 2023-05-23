export interface InvoiceResult {
  id: string;
  paymentDue: string;
  clientName: string;
  total: number;
  status: string;
  clientEmail?: string;
  createdAt?: string;
  description?: string;
  items: InvoiceItem[];
  clientAddress: Address;
  senderAddress: Address;
}

export interface InvoiceItem {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

export interface Address {
  city: string;
  country: string;
  postCode: string;
  street: string;
}

export interface InvoiceStatusClasses {
  [key: string]: {
    div: string;
    header: string;
  };
}

export interface FiltersState {
  paid: boolean;
  pending: boolean;
  draft: boolean;
}

export interface Item {
  itemName: string;
  quantity: number;
  price: number;
}

export interface FormValues {
  senderAddress: string;
  senderCity: string;
  senderPostCode: string;
  senderCountry: string;
  clientName: string;
  clientEmail: string;
  clientAddress: string;
  clientCity: string;
  clientPostCode: string;
  clientCountry: string;
  invoiceDate: string;
  paymentTerms: string;
  projectDescription: string;
  items: Item[];
  [key: string]: string | Item[];
}
