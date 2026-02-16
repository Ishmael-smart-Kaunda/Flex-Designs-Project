
import Form from "./form"
import { FiMapPin, FiMail, FiInbox, FiPhone } from "react-icons/fi"
import { motion } from "framer-motion"

export default function ContactDetails(){
         return(
                 <motion.section 
                  initial={{y:'5%'}}
                  animate={{y:0}}
                  transition={{duration:0.5}}
                
                      className="max-w-[1500px] m-auto p-7 mt-12  lg:mt-25 "
                      >
                     <p className="text-2xl text-center text-gray-600 py-10">
                        We are ready to offer clear guidance and professional support.
                     </p>

                     <div className="w-[95%] md:max-w-6xl mx-auto grid grid-cols-1 rounded-lg md:grid-cols-2">
                    <article className="flex flex-col gap-10 justify-between py-10 px-5 rounded-l-sm bg-zinc-100">
                        <span>
                            
                            <h1 className="text-blue-950 font-bold">FleX Real Estate Consutancy</h1>
                            <p className="font-normal text-sm text-gray-600"> The home of execellence, compentecy and interity</p>
                            <hr className="w-1/3 text-red-900"/>
                        </span>
                        <address className="flex flex-col items-start gap-3">
                                <h3 className="font-medium pb-1 text-gray-600 not-italic">REACH US</h3>
                                <span className="flex flex-row items-center gap-2 font-normal "> 
                                <FiPhone className="size-4  text-gray-500"/> 
                                <a href="tel: +265881550810" className="font-semibold text-sm text-zinc-500 not-italic"> +265 88 155 0810</a>
                                </span>
                                <span className="flex flex-row items-center gap-2  font-normal ">
                                <FiMapPin className="size-4  text-gray-500"/>
                                <p className="font-semibold text-sm text-zinc-500 not-italic "> Kang'ombe House</p>
                                </span>
                                <span className="flex flex-row items-center gap-2  font-normal ">
                                <FiInbox className="size-4  text-gray-500 "/>
                                <p className="font-semibold text-sm text-zinc-500 not-italic ">Flex Real Estate Consutancy, Box 345, Blantyre</p>
                                </span>
                                <span  className="flex flex-row  flex-wrap items-center gap-2 font-normal "> 
                                <FiMail className="size-4  text-gray-500 "/> 
                                <a href="mailto:flexrealestateagency3@gmail.com" className="font-semibold text-zinc-500 not-italic">flexrealestateagency3@gmail.com</a> 
                                </span>
                        </address>
                       
                    </article>
                    <Form/>
                    </div>
                </motion.section>
         )
}