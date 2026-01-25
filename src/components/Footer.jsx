import { FiFacebook, FiTwitter, FiX, FiLinkedin, FiInstagram, FiMail, FiMapPin, FiPhone  } from "react-icons/fi";
import footerImg from "../assets/images/hero.png"

export default function Footer(){
               return(

                        <footer className=" flex flex-col gap-2 w-full text-zinc-200 border-t border-stone-400 bg-zinc-50">
                        { /*<span>  <h2 className=" text-zinc-300 font-bold">Flex Designs <strong className="text-yellow-500">MW</strong></h2> 
                             <p className="font-light text-sm">Spaces that blend lives and beauty</p>
                          </span> */}
                        <div className="grid grid-cols-1 md:grid-cols-2 md:px-10 gap-2 w-full my-10">

                        <div className="grid grid-cols-1 md:grid-cols-2 mx-5 p-3  bg-stone-100 rounded-lg text-slate-800">
                          <article className=" ">
                            <ul className="flex flex-col items-start gap-3">
                                <li> <a href="/" className="font-normal hover:text-red-950 ">Home</a></li>
                                <li> <a href="/" className="font-normal hover:text-red-950 ">Services</a></li>
                                <li> <a href="/" className="font-normal hover:text-red-950 ">Team</a></li>
                                <li> <a href="/" className="font-normal hover:text-red-950 ">Contact</a></li>
                            </ul>
                          </article>
                          <article className="text-slate-800">
                            <h3 className="font-medium my-4">GET IN TOUCH</h3>
                            <address className="flex flex-col items-start gap-3">
                                  <span className="flex flex-row items-center gap-2  font-normal ">
                                    <FiMapPin className="size-5  text-slate-950 "/>
                                    <p className="font-semibold text-sm text-zinc-500 not-italic "> Box 345, Lilongwe</p>
                                  </span>
                                  <span className="flex flex-row items-center gap-2 font-normal "> 
                                    <FiPhone className="size-5  text-slate-950"/> 
                                    <a href="tel: +265881550810" className="font-semibold text-sm text-zinc-500 not-italic"> +265 88 155 0810</a>
                                  </span>
                                  <span  className="flex flex-row  flex-wrap items-center gap-2 font-normal "> 
                                    <FiMail className="size-5  text-slate-950 "/> 
                                    <a href="mailto:digitalartsacademymw.register@gmail.com " className="font-semibold text-zinc-500 not-italic">flexdesigns@gmail.com</a> 
                                  </span>
                            </address>
                          </article>
                          </div>

                           <article className="mx-5 text-zinc-600 grid grid-cols-2 gap-2 items-center gap-3">
                                <FiFacebook className="bg-stone-100 text-slate-950/80 p-4 rounded-sm w-full h-20 hover:scale-102 transition-all duration-500"/>
                                <FiTwitter className="bg-stone-100 text-slate-950/80 p-4 rounded-sm w-full h-20 hover:scale-102 transition-all duration-500"/>
                                <FiLinkedin className="bg-stone-100 text-slate-950/80 p-4 rounded-sm w-full h-20 hover:scale-102 transition-all duration-500"/>
                                <FiInstagram className="bg-stone-100 text-slate-950/80 p-4 rounded-sm w-full h-20 hover:scale-102 transition-all duration-500"/>
                          </article>
                        </div>

                          

                         <p className="w-full bg-slate-950 p-2  text-center text-zinc-600 text-sm text-light"> © <span>2026</span> Flex Designs : All rights reserved.</p>
                        
                       </footer>
                      

               )
}