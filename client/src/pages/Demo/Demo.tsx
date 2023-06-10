import { Invoice as LayoutInvoice } from "layouts";
import { Dashboard, InvoiceCreate, InvoiceEdit, InvoiceView } from "pages";
import { Route, Routes } from "react-router-dom";

export const Demo = () => {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route element={<LayoutInvoice />}>
        <Route path="create" element={<InvoiceCreate />} />
        <Route path=":id" element={<InvoiceView />} />
        <Route path=":id/edit" element={<InvoiceEdit />} />
      </Route>
    </Routes>
  );
};
