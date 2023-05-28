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
  clientAddress: Address;
  senderAddress: Address;
  status: string;
  isDraft: boolean;
  total: number;
  items: InvoiceItem[];
}

export interface InvoiceResult extends Invoice {
  _id: string;
  invoiceId: string;
  paymentDue: string;
}

export interface FiltersState {
  paid: boolean;
  pending: boolean;
  draft: boolean;
}
