import Listing from "./listings"
import designsData from "../../data/designsData"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
export default function BuildingDesigns(){
        
        {/**Nav buttons */}
        const buildingTypes= [
                           {id:0, name: 'Residential'},
                           {id:1, name: 'Retail and Malls'},
                           {id:2, name: 'Offices'},
                           {id:3, name: 'Industrial'}
        ]
        {/**active property type */}
        const [activeIndex, setActiveIndex] =useState(0)
        const propertyType =designsData[activeIndex]
         
        {/** staggering variant */}
        const container ={
              hidden:{},
              show:{
                    transition:{
                              staggerChildren:0.2,
                              delayChildren:0.1,
                    }
              }
        }
        return(  
                <section className="overflow-hidden max-w-[1500px] m-auto px-7 ">
                    <div className="overflow-x-scroll md:overflow-x-hidden flex gap-2 justify-center w-full md:w-fit m-auto text-white font-semibold p-5">
                     {buildingTypes.map((type,i )=>{
                         return(
                                <button 
                                key={type.id}
                                onClick={()=>setActiveIndex(i)} 
                                
                                className={`${type.id===i ? 'bg-slate-950' : 'bg-red-950'} hover:bg-slate-900 py- px-4 rounded-none border-none min-w-40  w-35`}
                                >
                                {type.name}
                                </button>
                               )
                     }
                     )
                     }

                    </div>
                    <AnimatePresence mode="wait">
                    <motion.div 
                         key={activeIndex}
                         variants={container}
                        
                         initial={{opacity:0 , y:'10%'}}
                         animate={{opacity:1, y: 0}}
                         
                         transition={{duration:1}}
                        className=" w-full mb-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {
                        propertyType.map(data=>{
                            return(<Listing 
                                key={data.id} 
                                data={data}
                                />)
                            }
                            )
                        }
                    </motion.div>
                 </AnimatePresence>
                </section>
        )
}