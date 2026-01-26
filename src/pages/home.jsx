

import Navbar from "../components/home components/Navbar"
import Hero from "../components/Hero"
import CTA from "../components/home components/CTA"
import Header from "../components/Header"
import About from "../components/home components/About"

import Description from "../components/home components/Description"
import Projects from "../components/home components/Projects"
import Footer from "../components/Footer"

export default function Home() {

  return (
    <> 
       {/** Nav */}
       <Navbar/>
       <Hero/>
       <Description/>
       <CTA/>
       <Projects/>
       <Footer/>
       
    </>
  )
}
