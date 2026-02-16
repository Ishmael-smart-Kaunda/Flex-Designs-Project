
import { useState } from "react";
import { FaArrowRight, FaArrowDown } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { motion } from "framer-motion";

export default function DevProcesses({stages}){

  const [visible, setVisible]=useState(null)

  return (
    <div className="flex flex-col md:flex-row flex-wrap gap-4">

      {stages.map((stage, i) => {
        const currentStage= visible===i
         const StageIcon =stage.icon
        return (
        <div key={i} className="group md:max-w-fit flex flex-col md:flex-row items-center gap-3 text-slate-950">
          <div className="relative w-full flex flex-col gap-3 h-fit md:min-w-[200px] p-3 bg-zinc-300 border-b-4 border-red-900">
           <StageIcon className="size-7 md:size-5 self-center text-gray-600"/>
           <h2 className="text-[20px] text-center">{stage.title}</h2>         
           {currentStage && 
              <p 
                className="md:absolute top-[65%] left-0 z-10 w-full 
                           text-justify
                           bg-zinc-300 
                           md:p-2 
                           md:pt-5 
                           md:border-b-4 
                           border-red-900
                           bg-zinc-300"
                >
                         {stage.description}
              </p> 
            }
           < MdArrowDropDown onClick={
                                     ()=>setVisible(currentStage ? null : i)} 
                                     className={`${currentStage? 
                                     'z-10 text-red rotate-180 translat-y-[50%] transtion-all 500 md:mb-3' : 'text-grey-500'} size-6 text-grey-300 self-end`
                                     }
                                     />
          </div>
          {i < stages.length - 1 && <span className="">
            <FaArrowDown className=" text-center md:hidden"/>
            <FaArrowRight className="hidden md:block"/>
          </span>}
        </div>
      )})}
    </div>
  );
}