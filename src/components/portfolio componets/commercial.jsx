import residential from "../../assets/images/resi22.jpg"
import commercial from "../../assets/images/commer21.jpg"
import resi2 from "../../assets/images/resi31.jpg"

import { FiArrowRight } from "react-icons/fi"

export default function Commercial(){
           return(
                  <section className="max-w-6xl mx-5 md:mx-auto  text-center mb-10 bg-stone-800/10">
                       
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <article className="flex flex-col gap-2 justify-between bg-yellow-950/5 rinng-ston/10 shadow-sm shadow-stone-600 p-2 text-justify">
                              
                                <img src={residential} className="w-full object-cover h-40 "/>
                                <p>Modern Residential designs that blend vibrant colors 
                                    and spaces for lively home.
                                </p> 
                                <a href="/portfolio" className="flex flex-row gap-1 items-center font-light text-yellow-600">View all <FiArrowRight /></a>                                       

                            </article>
                            <article className="flex flex-col gap-2 justify-between bg-yellow-950/5 rinng-ston/10 shadow-sm shadow-stone-600  p-2 text-justify">
                                
                                <img src={resi2} className="w-full object-cover h-40 "/>
                                <p>Striking Commercial spaces where modern designs meet 
                                    urban energy, perfect for business that thrive on 
                                    creativity. 
                                </p> 
                                <a href="/portfolio" className="flex flex-row gap-1 items-center font-light text-yellow-600">View all <FiArrowRight /></a>                                       
                                        

                            </article>
                            <article className="flex flex-col gap-2 justify-between bg-yellow-950/5 rinng-ston/10 shadow-sm shadow-stone-600  p-2 text-justify">
                               
                                <img src={commercial} className="w-full object-cover h-40 "/>
                                <p>Reimaging industrial chic with bold colors and smart layouts, 
                                    ideal for innovative business seeking characters and 
                                    functionality.
                                </p> 
                                <a href="/portfolio" className="flex flex-row gap-1 items-center font-light text-yellow-600">View all <FiArrowRight /></a>                                       
                            </article>
                                        </div>
                  </section>
           )
}