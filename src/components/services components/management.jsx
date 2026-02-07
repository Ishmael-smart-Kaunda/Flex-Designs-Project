

import CTA from "./CTA"
import managementData from "../../data/managementData"
import Video from "./video"
import Services from "./services"

export default function Management(){
        return(
               <>
            
             
                <section className="max-w-[1500px] m-auto p-7 mt-7">
                   
                  
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

                   </>
        )
}