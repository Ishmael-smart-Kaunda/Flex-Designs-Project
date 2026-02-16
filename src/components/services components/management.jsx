

import CTA from "./CTA"
import managementData from "../../data/managementData"
import Video from "./video"
import Services from "./services"

export default function Management(){
        return(
               
                <section className="max-w-[1500px] m-auto px-7 ">
                   <p className="w-full text-gray-600 md:w-3/4 m-auto  text-justify md:text-center text-[18px]  md:text-[20px] font-semibold my-10">
                        Explore our range of property management services designed to support effective
                        administration and long-term performance of your real estate assets.
                   </p>
                   
                  
                   <div className=" w-full mb-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* services from management services data */}
                        {managementData.map(data => 
                                        < Services 
                                        key={data.id} 
                                        data={data} 
                                        />
                                )
                        }
                        {/* Video to play */}
                     <Video/>
                   </div>

                <CTA/>
                </section>
        )
}