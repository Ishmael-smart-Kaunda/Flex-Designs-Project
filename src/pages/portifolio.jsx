import Navbar from "../components/home components/Navbar"
import Header from "../components/Header"
import Residential from "../components/portfolio componets/residential"
import Commercial from "../components/portfolio componets/commercial"
import Industrial from "../components/portfolio componets/industrial"
import Footer from "../components/Footer"



export default function Portfolio(){
               return(
                       <>
                         <Navbar/>
                         <Header page='projects'/>
                         <Residential/>
                         <Commercial/>
                         <Industrial/>
                         <Footer/>
                       </>
               )
}