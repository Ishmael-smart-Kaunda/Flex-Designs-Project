import { FiFacebook, FiTwitter, FiX, FiLinkedin, FiInstagram, FiMail, FiMapPin, FiPhone  } from "react-icons/fi";

export default function Footer(){
               return(
                       <footer className="flex flex-col w-full bg-zinc-950 px-10 md:px-25 py-5 text-zinc-400">
                         <span>  <h2 className=" text-zinc-300 font-bold">Flex Designs <strong className="text-yellow-500">MW</strong></h2> 
                             <p className="font-light text-sm">Spaces that blend lives and beauty</p>
                          </span>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 w-full my-5">
                          
                          <article className="text-zinc-600 ">
                            <h3 className="font-medium my-4 text-zinc-400">SOCIAL MEDIA</h3>
                            <span className="flex flex-row items-center -ml-1 gap-3">
                                <FiFacebook className="size-5 hover:scale-115"/>
                                <FiTwitter className="size-5  hover:scale-115"/>
                                <FiLinkedin className="size-5   hover:scale-115"/>
                                <FiInstagram className="size-5   hover:scale-115"/>
                            </span>
                          </article>

                          <article className="text-zinc-500">
                            <h3 className="font-medium my-4 text-zinc-400">GO TO</h3>
                            <ul className="flex flex-col items-start gap-3">
                                <li className="font-normal ">Home</li>
                                <li className="font-normal ">Projects</li>
                                <li className="font-normal ">Contact</li>
                            </ul>
                          </article>
                          <article className="text-zinc-400">
                            <h3 className="font-medium my-4">CONTACT</h3>
                            <address className="flex flex-col items-start gap-3">
                                  <span className="flex flex-row items-center gap-2  font-normal "><FiMapPin className="size-5 text-yellow-500/20"/>  <p className="font-normal text-sm text-zinc-500"> Lilongwe</p></span>
                                  <span className="flex flex-row items-center gap-2 font-normsl "> 
                                    <FiPhone className="size-5 text-yellow-500/20"/> 
                                    <a href="tel: +265881550810" className="font-light text-sm text-zinc-500"> +265 881550810</a>
                                  </span>
                                  <span  className="flex flex-row  flex-wrap items-center gap-2 font-normal text-zinc-400"> 
                                    <FiMail className="size-5 text-yellow-500/20"/> 
                                    <a href="mailto:digitalartsacademymw.register@gmail.com " className="font-light text-zinc-500">flexdesigns@gmail.com</a> 
                                  </span>
                            </address>
                          </article>
                          <article className=" border border-white bg-gray-900/20">
                            <h3 className="font-medium">MAP</h3>
                            
                          </article>

                        </div>
                         <p className="text-center mt-auto text-zinc-600 text-sm text-light"> © <span>2026</span> Flex Designs : All rights reserved.</p>
                       </footer>
               )
}