import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import Application from "./Application";
import { QueryClientProvider, QueryClient } from "react-query";

import "./root.css";

const rootDiv = document.querySelector("#root") as HTMLElement;

const root = ReactDOM.createRoot(rootDiv);

const queryClient = new QueryClient();

import { Provider } from "react-redux";

import { store } from "./state/store";

root.render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Application />
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);