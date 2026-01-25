
import { FaFacebook, FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa6"
export default function Member({data}){
               return(
                        <article className="h-40 mx-auto w-[85%] md:w-[90%] relative flex flex-col items-left  justify-betwen gap-0.5 p-2 bg-gradient-to-t from-zinc-100 to-slate-50 rounded-sm ">
                            <img src={data.Img} className="absolute inset-0 opacity-70 size-full  rounded-sm " alt="Felix Nyirenda"/>
                            
                            <div className=" relative top-[50%] h-[50%] w-full bg-zinc-50/40 rounded-sm px-2 py-1">
                                <h4 className="font-bold text-sm text-slate-950/90">{data.name}</h4>
                                <p className="text-slate-950 text-sm">{data.role}</p>
                                <span className="flex flex-row items-center w-fit gap-2 text-slate-900/80 mt-2">
                                 <a href={data.facebook.link} ><FaFacebook className="size-3"/></a> 
                                 <a href={data.tiktok.link} ><FaTiktok className="size-3"/></a> 
                                 <a href={data.instagram.link} ><FaInstagram className="size-3"/></a> 
                                 <a href={data.linkedin.link} ><FaLinkedin className="size-3"/></a>  
                                 </span>
                            </div>
                        </article>
               )
}