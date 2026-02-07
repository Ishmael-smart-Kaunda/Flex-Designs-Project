
import appraisalData from "../../data/appraisalData"
import Services from "./services"
import CTA from "./CTA"

export default function InvestimentAppraisal(){
                  return(
                         <section className="max-w-[1500px] m-auto p-7 mt-5">
                                <div className=" w-full mb-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {/* services from data js */}   
                                    {appraisalData.map(data=><Services key={data.id} data={data}/>)} 
                                </div>
                                
                                <CTA/>
                        </section>
                   )
}