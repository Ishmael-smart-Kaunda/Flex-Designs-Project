
import { FaFacebook, FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa6"
export default function Member({data}){
               return(
                        <article className=" flex flex-col items-left  justify-betwen gap-0.5 p-2 bg-gradient-to-t from-zinc-100 to-slate-50 rounded-sm ">
                            <span>
                                <img src={data.Img} className=" size-15  rounded-full " alt="Felix Nyirenda"/>
                                <h4 className="font-bold text-sm text-blue-950/90">{data.name}</h4>
                                <p className="text-slate-950 text-sm">{data.role}</p>
                            </span>
                            <span className="flex flex-row items-center w-fit gap-2 text-slate-900/80 py-2 mt-10 md:mt-6">
                                 <a href={data.facebook.link} ><FaFacebook/></a> 
                                 <a href={data.tiktok.link} ><FaTiktok/></a> 
                                 <a href={data.instagram.link} ><FaInstagram/></a> 
                                 <a href={data.linkedin.link} ><FaLinkedin/></a> 
                                
                            </span>
                        </article>
               )
}