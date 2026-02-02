import Navbar from "../components/home components/Navbar"

import Valuation from "../components/services components/valuation"
import Management from "../components/services components/management"
import InvestimentAppraisal from "../components/services components/appraisal"
import Development from "../components/services components/development"
import Footer from "../components/Footer"

import CTA from "../components/home components/CTA"

export default function ValuationPage(){
                return (
                        <>
                         <Navbar/>
                         <Valuation/>
                         {/*<Management/>
                         <InvestimentAppraisal/>
                         <Development/>*/}
                         <Footer/>
                        </>
                )
}