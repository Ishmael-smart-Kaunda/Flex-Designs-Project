import Home from "./pages/home"
import Portfolio from "./pages/portifolio"
import Contact from "./pages/contact"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <> 
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="portfolio" element={<Portfolio/>}/>
            <Route path="contact" element={<Contact/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
