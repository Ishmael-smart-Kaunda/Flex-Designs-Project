import Navbar from "../components/home components/Navbar"
import InvestimentAppraisal from "../components/services components/appraisal"
import Footer from "../components/Footer"
import heroImage from "../assets/images/appraisal/appraisal.jpg"

import CTA from "../components/home components/CTA"
import Hero from "../components/services components/hero"

export default function AppraisalPage(){
                return (
                        <>
                         <Navbar/>
                         <Hero title="Investiment appraisal" Image={heroImage}/>
                         <InvestimentAppraisal/>
                         <Footer/>
                        </>
                )
}