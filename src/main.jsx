import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { router } from './routes/AppRouter.jsx'
import { RouterProvider } from 'react-router-dom'
import { AuthProvider } from './context/Authcontext.jsx'
import { Toaster } from "sonner";



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
      <Toaster richColors position="top-center" />
    </AuthProvider>
    
  </StrictMode>,
)
