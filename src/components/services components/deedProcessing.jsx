
import deedData from "../../data/deedData"
import DeedServices from "./deedService"
import Video from "./video"
import { motion } from "framer-motion"
import CTA from "./CTA"

export default function DeedProcessing(){
                  return(
                         <motion.section 
                                initial={{y:'2%'}}
                                animate={{y:0}}
                                transition={{duration:0.3}} 
                                className="max-w-[1500px] m-auto p-7 mt-7 ">
                                
                                <p className="text-xl w-full text-gray-500 md:w-3/4 m-auto  text-center text-xl text-[18px] mb-3">
                                  What We Do
                                </p>

                                <div className=" w-full mb-10 grid grid-cols-1 md:grid-cols-3 gap-10">
                                    <article className="md:col-start-2 md:row-start-2">
                                        <Video/>
                                    </article>
                                    {/* services from data js */}   
                                    {deedData.map(data=><DeedServices key={data.id} data={data}/>)} 
                                </div>
                                
                                {/*<CTA/>*/}
                        </motion.section>
                   )
}