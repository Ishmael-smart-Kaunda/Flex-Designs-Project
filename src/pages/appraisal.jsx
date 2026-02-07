import Navbar from "../components/home components/Navbar"
import InvestimentAppraisal from "../components/services components/appraisal"
import Footer from "../components/Footer"

import CTA from "../components/home components/CTA"
import Hero from "../components/services components/hero"

export default function AppraisalPage(){
                return (
                        <>
                         <Navbar/>
                         <Hero title="Investiment appraisal"/>
                         <InvestimentAppraisal/>
                         <Footer/>
                        </>
                )
}