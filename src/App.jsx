import Home from "./pages/home"
import Portfolio from "./pages/portifolio"
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


function App() {

  return (
    <> 
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="portfolio" element={<Portfolio/>}/>
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
    </BrowserRouter>
    </>
  )
}

export default App
