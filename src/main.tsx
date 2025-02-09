import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import DemoForm from "./components/demoForm.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DemoForm />
  </StrictMode>
);
