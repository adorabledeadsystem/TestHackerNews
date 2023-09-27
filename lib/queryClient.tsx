"use client"

import {QueryClient, QueryClientProvider} from 'react-query'

export const reactQueryClient = new QueryClient();

export default function QueryProvider({ children}: {
    children: React.ReactNode
  }) {
    return (
        <QueryClientProvider client={reactQueryClient}>
            {children}
        </QueryClientProvider>
    );
  }