import { createBrowserRouter } from 'react-router-dom'
import Layout from '@/layouts/Layout.tsx'
import Home from '@/pages/Home.tsx'
import NotFound from '@/pages/NotFound.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true, 
        element: <Home />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])