import { GlowCapture } from "@codaworks/react-glow";
import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { ModalContainer } from "reoverlay";
import "./index.css";
import router from "./routes/Routes.jsx";
import "./utility/custom.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlowCapture>
      <RouterProvider router={router} />
      <Toaster />
      <ModalContainer />
    </GlowCapture>
  </React.StrictMode>
);
