
import appraisalData from "../../data/appraisalData"
import Services from "./services"
import CTA from "./CTA"
import { motion } from "framer-motion"
export default function InvestimentAppraisal(){
                  return(
                         <motion.section 
                                initial={{y:'5%'}}
                                animate={{y:0}}
                                transition={{duration:0.5}}
                                className="max-w-[1500px] m-auto px-7 pb-5">
                               
                                {/*service introduction paragraph */}
                                                    <p className="w-full text-gray-600 md:w-3/4 m-auto  text-justify md:text-center text-[18px]  md:text-[20px] font-semibold my-10">
                                                        Get expert advice on property invesiments to help you navigate the market and make
                                                        strategic and informed choices.
                                                   </p>
                                {/*a list investiment advisory*/}
                                <div className=" w-full mb-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {/* services from data js */}   
                                    {appraisalData.map(data=><Services key={data.id} data={data}/>)} 
                                </div>
                                
                                {/*<CTA/>*/}
                        </motion.section>
                   )
}