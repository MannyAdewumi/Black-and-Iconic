import { Outlet } from "react-router-dom"
import Navbar from "./components/navbar"
import FooterSection from "./components/FooterSection"

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen max-w-full w-full mx-auto py-8 bg-obsedian text-white">
        <Outlet />
      </main>
      <FooterSection />
    </>
  )
}

export default App