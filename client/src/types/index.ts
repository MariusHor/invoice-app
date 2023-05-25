export interface InvoiceResult {
  _id: string;
  invoiceId: string;
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
  createdAt: string;
  description: string;
  paymentTerms: string;
  clientName: string;
  clientEmail: string;
  senderAddress: Address;
  clientAddress: Address;
  items: Item[];
  [key: string]: string | Item[] | Address;
}
