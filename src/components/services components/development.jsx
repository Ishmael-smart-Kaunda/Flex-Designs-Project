import DevProcesses from "./processes";
import devProcessData from "../../data/devProcessData";

export default function Development(){
         return(
                <section className="max-w-[1500px] mx-auto p-7 pb-0 mb-10">
                   <DevProcesses stages={devProcessData}/>
                </section>
         )
}

  
             
            