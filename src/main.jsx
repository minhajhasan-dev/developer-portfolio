import { GlowCapture } from "@codaworks/react-glow";
import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routes/Routes.jsx";
import "./utility/custom.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlowCapture>
      <RouterProvider router={router} />
      <Toaster />
      <Analytics />
      <SpeedInsights/>
    </GlowCapture>
  </React.StrictMode>
);
