import Navbar from "../components/home components/Navbar"

import Valuation from "../components/services components/valuation"
import Footer from "../components/Footer"
import Hero from "../components/services components/hero"
export default function ValuationPage(){
                return (
                        <>
                         <Navbar/>
                         <Hero title="property Valuation"/>
                         <Valuation/>
                         <Footer/>
                        </>
                )
}