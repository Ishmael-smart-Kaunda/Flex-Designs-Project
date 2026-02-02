
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
        <div key={i} className="group md:max-w-fit flex flex-col md:flex-row items-center gap-3 text-slate-950">
          <div className="relative w-full flex flex-col gap-3 h-auto md:min-w-[200px] p-3 bg-zinc-300 border-b-4 border-red-900 hover:shadow-md shadow-zinc-500">
           <h2 className="self-center">{stage.icon}</h2> 
           <h2>{stage.title}</h2>
           {currentStage && <p className="absolute top-[65%] left-0 z-10 w-full bg-zinc-300 p-2 pt-5 shadow-md shadow-zinc-500  bg-zinc-300">{stage.description}</p> }
           <MdArrowDropDown onClick={()=>setVisible(currentStage ? null : i)} className={`${currentStage? 'z-10 text-red rotate-180 translat-y-[50%] transtion-all 500 mb-3' : 'text-grey-500'} size-6 text-grey-300 self-end`}/>
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