
import Nav from "../components/Nav"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Header from "../components/Header"
import About from "../components/home components/About"

import Description from "../components/home components/Description"
import Projects from "../components/home components/Projects"
import Footer from "../components/Footer"

export default function Home() {

  return (
    <> 
       {/** Nav */}
       <Nav/>
       <Hero/>
       <Description/>

       <Projects/>
       <Footer/>
       
    </>
  )
}
