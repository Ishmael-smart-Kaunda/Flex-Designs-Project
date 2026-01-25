
import Form from "./form"
import { FiMapPin, FiMail, FiInbox, FiPhone } from "react-icons/fi"


export default function ContactDetails(){
         return(
                <section className="w-[95%] md:max-w-6xl mx-auto grid grid-cols-1 rounded-lg md:grid-cols-2 my-20 ">
                    <article className="flex flex-col gap-10 justify-between py-10 px-5 rounded-l-sm bg-zinc-100">
                        <span>
                            
                            <h1 className="text-slate-950 font-bold">FleX Real Estate Consutancy</h1>
                            <p className="font-normal text-sm text-slate-950"> The home of execellence, compentecy and interity</p>
                            <div className="w-1/3 h-0.5 rounded-lg bg-red-950"/>
                        </span>
                        <address className="flex flex-col items-start gap-3">
                                <span className="flex flex-row items-center gap-2 font-normal "> 
                                <FiPhone className="size-5  text-slate-950"/> 
                                <a href="tel: +265881550810" className="font-semibold text-sm text-zinc-500 not-italic"> +265 88 155 0810</a>
                                </span>
                                <span className="flex flex-row items-center gap-2  font-normal ">
                                <FiMapPin className="size-5  text-slate-950 "/>
                                <p className="font-semibold text-sm text-zinc-500 not-italic "> Kang'ombe House</p>
                                </span>
                                <span className="flex flex-row items-center gap-2  font-normal ">
                                <FiInbox className="size-5  text-slate-950 "/>
                                <p className="font-semibold text-sm text-zinc-500 not-italic ">Flex Real Estate Consutancy, Box 345, Blantyre</p>
                                </span>
                                <span  className="flex flex-row  flex-wrap items-center gap-2 font-normal "> 
                                <FiMail className="size-5  text-slate-950 "/> 
                                <a href="mailto:flexrealestateconsultancy@gmail.com " className="font-semibold text-zinc-500 not-italic">flexrealestateconsultancy@gmail.com</a> 
                                </span>
                        </address>
                       
                    </article>
                    <Form/>
                 
                </section>
         )
}