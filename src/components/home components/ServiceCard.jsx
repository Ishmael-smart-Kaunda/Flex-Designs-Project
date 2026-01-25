import { FiArrowRight } from "react-icons/fi"

export default function Service({data}){
         return(
                <article className="group relative overflow-hidden rounded-sm border border-slate-200 h-80 shadow-sm shadow-stone-50 text-justify">
                    <img src={data.Img} className="absolute inset-0 object-cover w-full h-[60%] opacity-80 group-hover:opacity-100 transition-all duration-500 delay-200 group-hover:h-1/2"/>
                    <div className="relative p-4 h-[60%] flex flex-col justify-between translate-y-[65%] group-hover:translate-y-[90%] group-hover:h-1/2 transition-all duration-500">
                        <h4 className="text-lg font-bold text-slate-800 uppercase">{data.title}</h4>
                        <p className="text-slate-900 text-sm font-semibold leading-relaxed">
                            {data.description}
                        </p> 
                        <a href="/portfolio" className=" flex flex-row gap-1 items-center font-semibold text-sm text-red-900">View all <FiArrowRight /></a>                                       
                        
                    </div> 
                </article> 
         )
}