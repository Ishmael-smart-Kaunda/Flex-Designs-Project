import Navbar from "../components/home components/Navbar"
import PropertSales from "../components/services components/property sales"
import Footer from "../components/Footer"
import Hero from "../components/services components/hero"
import CTA from "../components/home components/CTA"

export default function AuctioningPage(){
                return (
                        <>
                         <Navbar/>
                         <Hero title="Our property listing"/>
                          <PropertSales/>
                         <Footer/>
                        </>
                )
}