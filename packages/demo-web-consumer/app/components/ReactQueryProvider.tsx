"use client"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react';

export function ReactQueryProvider({ children }: Readonly<{ children: React.ReactNode }>) {
    const [queryClient] = useState(() => new QueryClient());

    console.log("enter query")
    return <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
}