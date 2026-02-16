import Navbar from "../components/home components/Navbar"

import DeedProcessing from "../components/services components/deedProcessing"
import Footer from "../components/Footer"
import Hero from "../components/services components/hero"
import heroImage from "../assets/images/deed processing/deed title.png"
import CTA from "../components/home components/CTA"

export default function DeedPage(){
                return (
                        <>
                         <Navbar/>
                         <Hero title="deed processing" Image={heroImage}/>
                         <DeedProcessing/>
                         <Footer/>
                        </>
                )
}