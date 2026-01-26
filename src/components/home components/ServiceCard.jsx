import { FiArrowRight } from "react-icons/fi"

export default function Service({data}){
         return(
                <article className="overflow-hidden flex flex-col h-110 md:h-100 xlg-h-90 justify-between rounded-sm shadow-sm shadow-zinc/200 text-justify hover:shadow-zinc-400 transition-all duration-500">
                    <img src={data.Img} className=" object-cover w-full opacity-90 group-hover:opacity-100 h-1/2"/>
                    <div className=" p-4 flex flex-col md:justify-between gap-3 h-1/2">
                        <h4 className="text-[16px] md:text-md font-bold text-blue-950 uppercase">{data.title}</h4>
                        <p className="text-gray-500 text-[16px] leading-relaxed">
                            {data.description}
                        </p> 
                        <a href="/portfolio" className="w-fit flex flex-row gap-1 items-center font-semibold text-sm text-blue-950 hover:text-red-900 transtion-all duration-300">View all <FiArrowRight /></a>                                       
                        
                    </div> 
                </article> 
         )
}