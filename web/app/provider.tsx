'use client'

import { QueryClient, QueryClientProvider } from 'react-query'
import { FC, ReactNode, useState } from 'react'

export const Provider: FC<{ children: ReactNode }> = ({ children }) => {
    const [queryClient] = useState(() => new QueryClient())

    return (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
}