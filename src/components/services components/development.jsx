import DevProcesses from "./processes";
import devProcessData from "../../data/devProcessData";

export default function Development(){
         return(
                 <section className="max-w-[1500px] m-auto p-7 mt-15 md:mt-20">
                   <h1 className="text-3xl text-blue-950 text-center font-bold my-7">Property Development</h1>
                    <p className="w-full text-gray-500 md:w-3/4 m-auto  text-center text-xl text-[18px] my-10">
                     From land acquisition to final handover, we guide property developments with clarity, technical
                     insight, and careful oversight—helping you reduce risk, make informed decisions, and deliver 
                     successful projects with confidence.
                    </p>
                   <DevProcesses stages={devProcessData}/>
                </section>
         )
}

  
             
            