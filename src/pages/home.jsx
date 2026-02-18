

import Navbar from "../components/home components/Navbar"
import Hero from "../components/Hero"
import CTA from "../components/home components/CTA"

import Description from "../components/home components/Description"
import Services from "../components/home components/services"
import Footer from "../components/Footer"
import Testimonials from "../components/home components/Testimonials"
import Trustedpartners from "../components/home components/Trustedpartners"

export default function Home() {

  return (
    <> 
       <Navbar />
       <Hero/>
       <Description/>
       <CTA/>
       <Services/>
       <Testimonials />
       <Trustedpartners />
       <Footer/>
       
    </>
  )
}
