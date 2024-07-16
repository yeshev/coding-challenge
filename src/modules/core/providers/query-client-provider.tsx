"use client";

import { FC, PropsWithChildren, useState } from "react";
import {
  QueryClientProvider as ReactQueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const QueryClientProvider: FC<PropsWithChildren> = ({ children }) => {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 60 * 1000,
          retry: false,
          refetchOnWindowFocus: false,
        },
      },
    }),
  );

  return (
    <ReactQueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools initialIsOpen={true} />
    </ReactQueryClientProvider>
  );
};
