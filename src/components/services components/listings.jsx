

export default function Listing({data}){
                        return(
                               <article 
                               className="overflow-hidden flex flex-col h-120 md:h-120 xlg-h-90 justify-between text-justify hover:shadow-zinc-400 border border-gray-500/10 transition-all duration-500 p-4 ">
                                           <img src={data.Img} className=" object-cover w-full opacity-90 group-hover:opacity-100 h-1/2"/>
                                           <div className=" flex flex-col md:justify-between gap-3 h-1/2 mt-5 text-gray-500 font-sm">
                                               <h4 className="text-[16px] md:text-md font-bold text-blue-950 uppercase">{data.title}</h4>
                                               <p className="inline-flex gap-2">Location : <span className=""> {data.location}</span></p>
                                               <p className="inline-flex gap-2">{data.bedrooms}</p>  
                                               <p className="inline-flex gap-2">{data.for}</p>  
                                                {/* display only amount when the property is on sale and include per month when its on rent */}
                                                {data.for==="For Sale" 
                                                 ? 
                                                 <p className="inline-flex gap-2">Amount  : MWK <span className="text-red-900 font-semibold"> {data.amount}</span></p> 
                                                 : 
                                                 <p className="inline-flex gap-2">Amount  : MWK <span className="text-red-900 font-semibold"> {data.amount}</span> / month</p> 
                                                }
                                              
                                               <a href="/contact" className="w-fit font-semibold text-sm text-slate-900 hover:text-red-900 transtion-all duration-300">Talk to Us</a>                                         
                                           </div> 
                               </article> 
                        )
}