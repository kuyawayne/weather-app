import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import Application from "./Application";
import { QueryClientProvider, QueryClient } from "react-query";
import { PersistGate } from "redux-persist/integration/react";

import "./root.css";

const rootDiv = document.querySelector("#root") as HTMLElement;

const root = ReactDOM.createRoot(rootDiv);

const twentyFourHoursInMs = 1000 * 60 * 60 * 24;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchInterval: false,
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: twentyFourHoursInMs
    }
  }
});

import { Provider } from "react-redux";

import { store, persistor } from "./state/store";

root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <Application />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);