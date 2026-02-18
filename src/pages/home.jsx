

import Navbar from "../components/home components/Navbar"
import Hero from "../components/Hero"
import CTA from "../components/home components/CTA"

import Description from "../components/home components/Description"
// import Projects from "../components/home components/Projects"
import Footer from "../components/Footer"
import Testimonials from "../components/home components/Testimonials"
import Trustedpartners from "../components/home components/Trustedpartners"
import Propertylistings from "./Propertylistings"

export default function Home() {

  return (
    <> 
       <Navbar/>
       <Hero/>
       <Description/>
       <CTA/>
       {/* <Projects/> */}
       <Testimonials />
       <Trustedpartners />
       <Footer/>
       <br />
       <br />
       {/* <Propertylistings /> */}
    </>
  )
}
