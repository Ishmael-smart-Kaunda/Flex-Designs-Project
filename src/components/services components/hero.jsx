

import { motion } from "framer-motion"

export default function Hero({title, Image}){
     return (
              <div className="relative overflow-hidden h-[30vh] lg:h-[40vh] w-full bg-gradient-to-r from-gray-800 to-slate-950 mt-5">
                                <img src={Image} className="absolute inset-0 w-full h-full object-cover object-center mix-blend-overlay"/>                             
                                 <motion.h1 
                                    initial={{y:'100%'}}
                                    animate={{y:0}}
                                    exit={{y:'-100%'}}
                                    transition={{duration:0.5}}
                                    className="text-white text-center w-full text-3xl md:text-5xl font-bold uppercase absolute top-[50%] left-1/2 translate-x-[-50%] ">
                                    {title}
                                 </motion.h1>              
             </div>
     )
}