
import { FaFacebook, FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa6"
export default function Member({data}){
               return(
                        <article className="flex flex-col gap-2 ">
                            <img src={data.Img} className="  rounded-sm " alt="Felix Nyirenda"/>
                            
                            
                                <h4 className="font-bold text-sm text-blue-950/60">{data.name}</h4>
                                <p className="text-blue-950 text-[12px] font-semibold">{data.role}</p>
                               { /*<span className="flex flex-row items-center w-fit gap-2 mt-2">
                                 <a href={data.facebook.link} ><FaFacebook className="text-slate-900 size-3"/></a> 
                                 <a href={data.tiktok.link} ><FaTiktok className="text-slate-900 size-3"/></a> 
                                 <a href={data.instagram.link} ><FaInstagram className="text-slate-900 size-3"/></a> 
                                 <a href={data.linkedin.link} ><FaLinkedin className="text-slate-900 size-3"/></a>  
                                 </span>*/}
                            
                        </article>
               )
}