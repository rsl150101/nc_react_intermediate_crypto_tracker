import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App";
import { Provider } from "react-redux";
import makeStore from "./store/configureStore";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={makeStore}>
        <App />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
