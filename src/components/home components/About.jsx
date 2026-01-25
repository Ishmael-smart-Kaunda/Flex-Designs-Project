import { BsEye } from "react-icons/bs"
import { FiEye, FiTarget } from "react-icons/fi"
import { AiOutlineEye } from "react-icons/ai"
import { FaEye, FaBullseye } from "react-icons/fa"


export default function About(){
        return(
                <section className="text-center bg-zinc-500/10 ring ring-stone-700/40 max-w-4xl mx-5 md:mx-auto my-10  rounded-lg pt-5 pb-20 px-5">
                    <h4 className="text-2xl font-bold text-zinc-800 pb-7">About Us</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                    <article className="flex flex-col gap-2 p-5 py-2 text-left ring ring-stone-500/20 rounded-lg text-zinc-800">
                        <h3 className="text-center font-bold ">Who are we?</h3>
                        <p className="font-normal">Flex Designs is an emerging architecture firm that creates purposeful, 
                            functional spaces guided by experience, clarity, and design excellence. 
                            Our work translate client ideas into well- considered architecture that 
                            responds to context and delivers lasting value.
                        </p>
                    </article>
                    
                    <div className=" text-left flex flex-col gap-3 bg-zinc-500/30 rounded-lg text-zinc-600 pt-5 pb-2 px-5">
                     <article className="flex flex-col gap-2 ">
                        <span  className="flex flex-col gap-1 w-full items-center font-medium"><FiEye/>Vision</span>
                        <p>To  lead in thoughtful architecture that balance innovation, functionality 
                            and lasting value.
                        </p>
                    </article>

                     <article className="flex flex-col gap-2">
                        <span  className="flex flex-col w-full items-center font-medium"><FiTarget/>Mission</span>
                        <p>To transform clients vision into practical, elegant architectural solutions 
                            that balance aesthetics, performance and sustainability.
                        </p>
                    </article>
                    </div>

                 </div>
                </section>
        )
}