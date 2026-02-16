
import DevProcesses from "./processes";
import devProcessData from "../../data/devProcessData";

export default function Development(){
         return(
                 <section className="max-w-[1500px] m-auto px-7 pb-5">
                  
                    <p className="w-full text-gray-600 md:w-3/4 m-auto text-justify md:text-center text-[18px]  md:text-[20px] font-semibold my-10">
                     From land acquisition to final handover, we guide property developments with clarity, technical
                     insight, and careful oversight to help you reduce risk, make informed decisions, and deliver 
                     successful projects with confidence.
                    </p>
                   <DevProcesses stages={devProcessData}/>
                </section>
         )
}

  
             
            