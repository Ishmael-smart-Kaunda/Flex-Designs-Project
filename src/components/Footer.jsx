import { FiFacebook, FiTwitter, FiX, FiLinkedin, FiInstagram, FiMail, FiMapPin, FiPhone  } from "react-icons/fi";
import footerImg from "../assets/images/hero.png"

export default function Footer(){
               return(

                        <footer className=" relative flex flex-col gap-2 justify-between w-full text-zinc-200 border-t border-blue-900/20 bg-zinc-200/50 md:py-20">
                        { /*<span>  <h2 className=" text-zinc-300 font-bold">Flex Designs <strong className="text-yellow-500">MW</strong></h2> 
                             <p className="font-light text-sm">Spaces that blend lives and beauty</p>
                          </span> */}
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 md:px-10 gap-2 w-full my-10">

                        <div className="md:col-span-2 lg:col-span-1 grid grid-cols-1 md:grid-cols-2 gap-2 mx-5 md:mx-0 px-3 py-4 bg-stone-100 rounded-lg text-slate-800">
                          <article className=" ">
                            <h3 className="font-medium pb-1">GO TO</h3>
                            <ul className="flex flex-col items-start gap-1 transition-all duration-500">
                                <li> <a href="/" className="font-semibold text-sm text-gray-500 hover:text-red-900 transition-all duration-500 ">Home</a></li>
                                <li> <a href="/" className="font-semibold text-sm text-gray-500  hover:text-red-900 transition-all duration-500">Services</a></li>
                                <li> <a href="/" className="font-semibold text-sm text-gray-500 hover:text-red-900 transition-all duration-500">Team</a></li>
                                <li> <a href="/" className="font-semibold text-sm text-gray-500  hover:text-red-900 transition-all duration-500">Contact</a></li>
                            </ul>
                          </article>
                          <article className="text-slate-800">
                            <h3 className="font-medium mb-2">GET IN TOUCH</h3>
                            <address className="flex flex-col items-start gap-3">
                                  <span className="flex flex-row items-center gap-2  font-normal ">
                                    <FiMapPin className="size-4  text-gray-500 "/>
                                    <p className="font-semibold text-sm text-zinc-500 not-italic "> Box 345, Lilongwe</p>
                                  </span>
                                  <span className="group flex flex-row items-center gap-2 font-normal "> 
                                    <FiPhone className="size-4  text-gray-500 group-hover:text-red-900/70 transition-all duration-500"/> 
                                    <a href="tel: +265881550810" className="font-semibold text-sm text-gray-500 group-hover:text-red-900/70 transition-all duration-500 not-italic"> +265 88 155 0810</a>
                                  </span>
                                  <span  className="group flex flex-row  flex-wrap items-center gap-2 font-normal "> 
                                    <FiMail className="size-4  text-gray-500 group-hover:text-red-900/70 transition-all duration-500"/> 
                                    <a href="mailto:digitalartsacademymw.register@gmail.com " className="font-semibold text-gray-500 text-sm group-hover:text-red-900/70 not-italic transition-all duration-500">flexconsultancy@gmail.com</a> 
                                  </span>
                            </address>
                          </article>
                          </div>

                           <article className="mx-5 grid grid-cols-2 gap-2 text-zinc-400 items-center gap-3">
                                <FiFacebook className="bg-stone-100  p-4 rounded-sm w-full h-20 hover:scale-102 transition-all duration-500"/>
                                <FiTwitter className="bg-stone-100  p-4 rounded-sm w-full h-20 hover:scale-102 transition-all duration-500"/>
                                <FiLinkedin className="bg-stone-100  p-4 rounded-sm w-full h-20 hover:scale-102 transition-all duration-500"/>
                                <FiInstagram className="bg-stone-100  p-4 rounded-sm w-full h-20 hover:scale-102 transition-all duration-500"/>
                          </article>
                        </div>

                          

                         <p className="absolute bottom-0 w-full bg-slate-950 p-2  text-center text-gray-600 text-sm "> © <span>2026</span> Flex Consultancy : All rights reserved.</p>
                        
                       </footer>
                      

               )
}