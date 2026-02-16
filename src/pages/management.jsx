import Navbar from "../components/home components/Navbar"


import Management from "../components/services components/management"
import Footer from "../components/Footer"
import Hero from "../components/services components/hero"
import heroImage from "../assets/images/management/management.jpg"
import CTA from "../components/home components/CTA"

export default function ManagementPage(){
                return (
                        <>
                         <Navbar/>
                         <Hero title="property management" Image={heroImage}/>
                         <Management/>
                         <Footer/>
                        </>
                )
}