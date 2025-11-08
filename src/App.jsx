import { Outlet } from "react-router-dom"
import { Toaster } from "sonner";

export function App() {

  return (
    <>
    <Outlet/>
      <Toaster richColors position="top-right" />
    </>
  )
}

export default App
