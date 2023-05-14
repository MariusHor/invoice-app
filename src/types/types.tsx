export interface InvoiceResult {
  id: string;
  paymentDue: string;
  clientName: string;
  total: number;
  status: string;
}

export interface StatusClasses {
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
