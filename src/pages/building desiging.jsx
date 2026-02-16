
import Navbar from "../components/home components/Navbar"
import Hero from "../components/services components/hero"
import BuildingDesigns from "../components/services components/building designing"
import Footer from "../components/Footer"
import heroImage from "../assets/images/Designs/archt.png"
import CTA from "../components/home components/CTA"

export default function DesigningPage(){
                return (
                        <>
                         <Navbar/>
                         <Hero title="Archtectural designing" Image={heroImage}/>
                         <BuildingDesigns/>
                         <Footer/>
                        </>
                )
}