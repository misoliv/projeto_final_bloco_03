import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import DeletarCategoria from "./components/categorias/deletarcategoria/DeletarCategoria"
import FormCategoria from "./components/categorias/formcategoria/FormCategoria"
import ListarCategorias from "./components/categorias/listacategorias/ListarCategorias"
import { useState } from "react"

type MenuState = 'closed' | 'open'

function App() {

  const [menuState, setMenuState] = useState<MenuState>('closed')

  const toggleMenu = (): void => {
    setMenuState(prevState => prevState === 'closed' ? 'open' : 'closed')
  }

  const closeMenu = (): void => {
    setMenuState('closed')
  }

  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          
          <Navbar 
            menuState={menuState}
            onMenuToggle={toggleMenu}
            onMenuClose={closeMenu}
          />
          
          <div className='flex-1 w-full pt-16 bg-slate-200'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListarCategorias />} />
              <Route path="/cadcategoria" element={<FormCategoria />} />
              <Route path="/editarcategoria/:id" element={<FormCategoria />} />
              <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
            </Routes>
          </div>
        
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App

