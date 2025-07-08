import { Outlet } from "react-router-dom"
import Navbar from "./components/navbar"

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen max-w-full w-full mx-auto py-8 bg-obsedian">
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  )
}

export default App