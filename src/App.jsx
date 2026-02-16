import Home from "./pages/home"

import Contact from "./pages/contact"
import Team from "./pages/Team"
import ValuationPage from "./pages/valuation"
import ManagementPage from "./pages/management"
import DevelopmentPage from "./pages/development"
import AppraisalPage from "./pages/appraisal"
import DeedPage from "./pages/deed processing"
import DesigningPage from "./pages/building desiging"
import AuctioningPage from "./pages/auctioning"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { AnimatePresence } from "framer-motion"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"

const ScrollTop =()=>{
          const pathname=useLocation();
          useEffect(()=>{
             window.scrollTo({
                top:0,
                left:0,
                behavior:"smooth"
             })
          },[pathname])
          return null
}


function App() {
  return (
    <> 
     <BrowserRouter>
      <AnimatePresence>
        <ScrollTop/>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="valuation" element={<ValuationPage/>}/>
            <Route path="management" element={<ManagementPage/>}/>
            <Route path="development" element={<DevelopmentPage/>}/>
            <Route path="deedprocessing" element={<DeedPage/>}/>
            <Route path="designing" element={<DesigningPage/>}/>
            <Route path="auctioning" element={<AuctioningPage/>}/>
            <Route path="appraisal" element={<AppraisalPage/>}/>
            <Route path="team" element={<Team/>}/>

        </Routes>
        </AnimatePresence>
    </BrowserRouter>
    </>
  )
}

export default App
