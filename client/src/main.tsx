import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import {
  AuthProvider,
  InvoiceFiltersProvider,
  PersistProvider,
  ReactQueryProvider,
  ThemeProvider,
} from "providers";

import "./index.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <ReactQueryProvider>
    <ThemeProvider>
      <InvoiceFiltersProvider>
        <PersistProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </PersistProvider>
      </InvoiceFiltersProvider>
    </ThemeProvider>
  </ReactQueryProvider>
);
