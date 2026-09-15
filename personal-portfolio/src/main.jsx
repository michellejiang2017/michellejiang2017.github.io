import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const redirect = sessionStorage.getItem("spa-redirect");

if (redirect) {
  sessionStorage.removeItem("spa-redirect");

  const redirectUrl = new URL(redirect);

  if (redirectUrl.origin === window.location.origin) {
    window.history.replaceState(
      null,
      "",
      redirectUrl.pathname + redirectUrl.search + redirectUrl.hash
    );
  }
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);