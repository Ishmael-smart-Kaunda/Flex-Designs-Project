import residential from "../../assets/images/resi22.jpg"
import commercial from "../../assets/images/commer21.jpg"
import resi2 from "../../assets/images/resi31.jpg"

import { FiArrowRight } from "react-icons/fi"

export default function Commercial(){
           return(
                  <section className="max-w-6xl lg:max-w-7xl lg:px-5 mx-5 md:mx-auto  text-center text-zinc-500 mb-10 bg-stone-800/10">
                          <h4 className="text-2xl text-zinc-50 font-bold  pb-7">Commercial Properties</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <article className="flex flex-col gap-2 justify-between bg-yellow-950/5 rinng-ston/10 shadow-sm shadow-stone-600 p-2 text-justify ">
                              
                                <img src={residential} className="w-full object-cover h-40 "/>
                                  <h4 className="text-left font-medium text-zinc-200">Office Block</h4>
                                <p>Modern Residential designs that blend vibrant colors 
                                    and spaces for lively home.
                                </p> 
                                <a href="/portfolio" className="text-center font-bold text-gray-950 bg-yellow-400/70 w-full p-2 ">Talk To Us</a> 

                            </article>
                            <article className="flex flex-col gap-2 justify-between bg-yellow-950/5 rinng-ston/10 shadow-sm shadow-stone-600  p-2 text-justify">
                                
                                <img src={resi2} className="w-full object-cover h-40 "/>
                                  <h4 className="text-left font-medium text-zinc-200">Student Hostel</h4>
                                <p>Striking Commercial spaces where modern designs meet 
                                    urban energy, perfect for business that thrive on 
                                    creativity. 
                                </p> 
                                <a href="/portfolio" className="text-center font-bold text-gray-950 bg-yellow-400/70 w-full p-2 ">Talk To Us</a>                                       
                                        

                            </article>
                            <article className="flex flex-col gap-2 justify-between bg-yellow-950/5 rinng-ston/10 shadow-sm shadow-stone-600  p-2 text-justify">
                               
                                <img src={commercial} className="w-full object-cover h-40 "/>
                                  <h4 className="text-left font-medium text-zinc-200">Shopping Complex</h4>
                                <p>Reimaging industrial chic with bold colors and smart layouts, 
                                    ideal for innovative business seeking characters and 
                                    functionality.
                                </p> 
                                <a href="/portfolio" className="text-center font-bold text-gray-950 bg-yellow-400/70 w-full p-2 ">Talk To Us</a> 
                            </article>
                                        </div>
                  </section>
           )
}