
import { FaFacebook, FaLinkedin, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa6"
export default function Member({data}){
               return(
                        <article className="flex flex-col gap-2 bg-zinc-100 rounded-2xl p-4 text-gray-500 ">
                            <img src={data.Img} className=" rounded-xl " alt="Felix Nyirenda"/>
                            
                           
                                <h4 className="font-bold text-sm text-blue-950/60 text-[16px]">{data.name}</h4>
                                <p className="font-semibold ">{data.title}</p>
                                <p className=" text-[15px]">{data.description}</p>
                               <div className="inline-flex gap-2 mt-auto py-2">
                                 <a href={data.facebook.link} ><FaFacebook className="text-blue-950 size-4"/></a> 
                                 <a href={data.instagram.link} ><FaInstagram className="text-blue-950 size-4"/></a> 
                                 <a href={data.linkedin.link} ><FaLinkedin className="text-blue-950 size-4"/></a>  
                                 <a href={data.whatsapp.link} ><FaWhatsapp className="text-blue-950 size-4 ml-auto"/></a> 
                               </div>
                            
                        </article>
               )
}