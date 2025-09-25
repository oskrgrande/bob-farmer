import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/constants/tanstack.js'
import { router } from '@/routes/index.tsx'
import { Toaster } from '@/components/ui/sonner.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster richColors position="top-right" expand={true} closeButton></Toaster>
      {
        import.meta.env.VITE_DEBUG_QUERY
      }
    </QueryClientProvider>
  </StrictMode>,
)
