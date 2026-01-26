
import felix from "../../assets/images/team/felix-nyirenda.jpg"
import ishmael from "../../assets/images/team/ishmael-smart.jpg"
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"

import teamData from "../../data/teamData"
import Member from "./member"
export default function TeamTeeds(){
    const members=teamData.map(member=>{
                    return(<Member key={member.id} data={member}/>)
                    })
    return (
             <section className="max-w-6xl m-auto bg-zinc-100 mt-20">
                <h1 className="text-4xl font-bold text-center text-slate-950">Our Team</h1>
                <div className="w-full md:w-3/4 m-auto  text-center text-xl font-normal my-10">
                
                    <p className="w-full ">
                      Our firm is supported by a team of qualified real estate professionals with experience 
                      ranging from property valuation, through real estate investment advisory to property development.
                    </p>
                </div>
               
                <div 
                className="grid grid-cols-1 md:grid-cols-3 gap-2 w-full m-auto">
                     {members}
                </div>
               
             </section>
    )
}