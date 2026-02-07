import Navbar from "../components/home components/Navbar"
import Development from "../components/services components/development"
import Footer from "../components/Footer"
import Hero from "../components/services components/hero"
import CTA from "../components/home components/CTA"

export default function DevelopmentPage(){
                return (
                        <>
                         <Navbar/>
                         <Hero title="property development"/>
                         <Development/>
                         <Footer/>
                        </>
                )
}