
import { useState } from "react";
import { FaArrowRight, FaArrowDown } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";


export default function DevProcesses({stages}){

  const [visible, setVisible]=useState(null)

  return (
    <div className="flex flex-col md:flex-row flex-wrap gap-4">

      {stages.map((stage, i) => {
        const currentStage= visible===i
         
        return (
        <div key={i} className="md:max-w-fit flex flex-col md:flex-row items-center gap-3">
          <div className="relative w-full flex flex-col gap-3 h-auto md:min-w-[200px] p-3 rounded-lg bg-slate-900 text-white hover:bg-slate-800">
           <h2 className="self-center">{stage.icon}</h2> 
           <h2>{stage.title}</h2>
           {currentStage && <p className="absolute top-[70%] left-0 z-100 w-full bg-slate-900 p-2 rounded-sm shadow-sm shadow-black">{stage.description}</p> }
           <MdArrowDropDown onClick={()=>setVisible(currentStage ? null : i)} className={`${currentStage? 'z-100 text-white rotate-180 translat-y-[50%] transtion-all 500' : ''} size-6 text-white self-end`}/>
          </div>
          {i < stages.length - 1 && <span className="">
            <FaArrowDown className=" text-center md:hidden "/>
            <FaArrowRight className="hidden md:block"/>
          </span>}
        </div>
      )})}
    </div>
  );
}