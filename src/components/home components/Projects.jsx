import ServicesData from "../../data/ServicesData"
import Service from "./ServiceCard"


export default function Projects(){

               const services=ServicesData.map(service=>{
                    return(<Service key={service.id} data={service} />)
               })
       
                return(
                       <section className="max-w-6xl  lg:max-w-7xl lg:px-5 mx-5 md:mx-auto  bg-blue-950/0 rounded-lg text-center  pb-10 text-zinc-500">
                        <h4 className="text-2xl text-blue-950 font-bold  pb-7">Our Services</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                            {services}
                        </div>

                       </section>
                )
}