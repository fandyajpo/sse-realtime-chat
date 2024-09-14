"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false },
  },
});

export const QueryProvider = (props: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      {props?.children}
    </QueryClientProvider>
  );
};
