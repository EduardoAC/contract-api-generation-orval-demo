"use client"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export function ReactQueryProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    console.log("enter query")
    return <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
}