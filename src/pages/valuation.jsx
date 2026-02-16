import Navbar from "../components/home components/Navbar"
import Valuation from "../components/services components/valuation"
import Footer from "../components/Footer"
import Hero from "../components/services components/hero"
import heroImage from "../assets/images/valuation/valuation.jpg"
export default function ValuationPage(){
                return (
                        <>
                         <Navbar/>
                         <Hero title="property Valuation" Image={heroImage}/>
                         <Valuation/>
                         <Footer/>
                        </>
                )
}