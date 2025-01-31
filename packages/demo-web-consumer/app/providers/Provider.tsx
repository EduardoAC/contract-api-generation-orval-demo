"use client"

import { ReactQueryProvider } from 'nestjs-api-hooks'

export function Provider({ children }: Readonly<{ children: React.ReactNode }>) {
    return <ReactQueryProvider>
        {children}
    </ReactQueryProvider>
}