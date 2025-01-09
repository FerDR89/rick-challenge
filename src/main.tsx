import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import MyRouter from "@/router";
import ReactQueryProvider from "@/services/reactQueryProvider";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ReactQueryProvider>
        <MyRouter />
      </ReactQueryProvider>
    </BrowserRouter>
  </StrictMode>
);
