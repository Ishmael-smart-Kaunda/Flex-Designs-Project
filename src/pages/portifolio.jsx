import Navbar from "../components/home components/Navbar"
import Residential from "../components/portfolio componets/residential"
import Commercial from "../components/portfolio componets/commercial"
import Industrial from "../components/portfolio componets/industrial"
import Footer from "../components/Footer"



export default function Portfolio(){
               return(
                       <>
                         <Navbar/>
                         <Residential/>
                         <Commercial/>
                         <Industrial/>
                         <Footer/>
                       </>
               )
}