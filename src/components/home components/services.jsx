import ServicesData from "../../data/ServicesData"
import Service from "./ServiceCard"


export default function Services(){

               const services=ServicesData.map(service=>{
                    return(<Service key={service.id} data={service} />)
               })
       
                return(
                       <section className="max-w-[1500px] p-7 m-auto mt-12  lg:mt-25 text-center">
                        <h4 className="text-xl font-bold text-blue-950 md:text-2xl lg:text-3xl ">OUR SERVICES</h4>
                       
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-30">
                            {services}
                        </div>

                       </section>
                )
}