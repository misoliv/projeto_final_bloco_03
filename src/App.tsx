import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./footer/Footer"
import Navbar from "./navbar/Navbar"
import Home from "./pages/home/Home"

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        
        <Navbar />
        
        <div className="flex-1 w-full pt-16 bg-slate-200">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
        
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

