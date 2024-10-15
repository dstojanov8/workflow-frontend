import { RouterProvider } from "react-router-dom";
// import { StrictMode } from 'react';
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { store, persistor } from "./store/store.ts";
import router from "./routes.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ToastContainer transition={Slide} />
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </PersistGate>
  </Provider>
  // </StrictMode>,
);
