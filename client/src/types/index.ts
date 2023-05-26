export interface Address {
  city: string;
  country: string;
  postCode: string;
  street: string;
}

export interface InvoiceItem {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

export interface Invoice {
  clientName: string;
  clientEmail: string;
  createdAt: string;
  description: string;
  paymentTerms: number;
  items: InvoiceItem[];
  clientAddress: Address;
  senderAddress: Address;
  total?: number;
  status?: string;
}

export interface InvoiceResult extends Invoice {
  _id: string;
  invoiceId: string;
  paymentDue: string;
}

// export interface FormValues extends Invoice {
//   [key: string]: string | InvoiceItem[] | Address | number;
// }

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
