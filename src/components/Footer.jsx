import { Link } from "react-router-dom";
import { FiFacebook, FiTwitter, FiX, FiLinkedin, FiInstagram, FiMail, FiMapPin, FiPhone  } from "react-icons/fi";
export default function Footer(){
               return(

                        <footer className=" relative flex flex-col gap-2 justify-between w-full text-zinc-200 border-t border-blue-900/20 bg-zinc-200/50 md:py-20">
                          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 md:px-10 gap-2 w-full my-10">
                          <div className="md:col-span-2 lg:col-span-1 grid grid-cols-1 md:grid-cols-2 gap-2 mx-5 md:mx-0 px-3 py-4 bg-stone-100 rounded-lg text-slate-800">
                          
                          <article className=" ">
                            <h3 className="font-medium pb-1">GO TO</h3>
                            <ul className="flex flex-col items-start gap-3 transition-all duration-500">
                                <Link to="/"> 
                                  <a className="font-semibold text-sm text-gray-500  hover:text-red-900 transition-all duration-500">
                                  Home
                                </a>
                                </Link>
                                <Link to="/team"> 
                                  <a className="font-semibold text-sm text-gray-500  hover:text-red-900 transition-all duration-500">
                                  Team
                                  </a>
                                </Link>
                                <Link to="/contact">  
                                  <a className="font-semibold text-sm text-gray-500  hover:text-red-900 transition-all duration-500">
                                  Contact
                                  </a>
                               </Link>
                            </ul>
                          </article>

                          <article className="text-slate-800">
                             <h3 className="font-medium mb-2">GET IN TOUCH</h3>
                               <address className="flex flex-col items-start gap-4">
                                  <span className="flex flex-row items-center gap-2 font-normal ">
                                    <FiMapPin className="size-4  text-gray-500 "/>
                                    <p className="font-semibold text-sm text-zinc-500 not-italic">Kang'ombe House</p>
                                  </span>
                                  <span className="group flex flex-row items-center gap-2 font-normal "> 
                                    <FiPhone className="pointer size-4 text-gray-500 group-hover:text-red-900/70 transition-all duration-500"/> 
                                    <a href="tel:+265994873373" className="font-semibold text-sm text-gray-500 group-hover:text-red-900/70 transition-all duration-500 not-italic"> +265 994 87 33 73</a>
                                  </span>
                                  <span  className="group flex flex-row  flex-wrap items-center gap-2 font-normal "> 
                                    <FiMail className="size-4 text-gray-500 group-hover:text-red-900/70 transition-all duration-500"/> 
                                    <a href="mailto:flexrealestateagency3@gmail.com" className="font-semibold text-gray-500 text-sm group-hover:text-red-900/70 not-italic transition-all duration-500">flexconsultancy@gmail.com</a> 
                                  </span>
                                </address>
                               </article>
                             </div>

                             <article className="m-5 md:my-0 grid grid-cols-2 gap-2 text-zinc-400 items-center gap-3 ">
                                <a href="https://www.facebook.com/profile.php?id=61571537850295">
                                  <FiFacebook className="bg-stone-100  p-4 rounded-sm w-full h-20 hover:scale-102 hover:text-slate-900/70 transition-all duration-500"/>
                                </a>
                                
                                <a href="/">
                                  <FiTwitter className="bg-stone-100  p-4 rounded-sm w-full h-20 hover:scale-102 hover:text-slate-900/70 transition-all duration-500"/>
                                </a>

                                <a href="/">
                                  <FiLinkedin className="bg-stone-100  p-4 rounded-sm w-full h-20 hover:scale-102 hover:text-slate-900/70 transition-all duration-500"/>
                                </a>

                                <a href="/">
                                  <FiInstagram className="bg-stone-100  p-4 rounded-sm w-full h-20 hover:scale-102 hover:text-slate-900/70 transition-all duration-500"/>
                                </a> 
                             </article>
                            </div>
                          <p className="absolute bottom-0 w-full bg-slate-950 p-2  text-center text-gray-600 text-sm "> © <span>2026</span> Flex Consultancy : All rights reserved.</p>
                       </footer>
                      

               )
}