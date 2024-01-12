import React from "react";
import Router from "./shared/Router";
import { GlobalStyle } from "./GlobalStyle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <GlobalStyle />
          <Router />
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
};

export default App;
