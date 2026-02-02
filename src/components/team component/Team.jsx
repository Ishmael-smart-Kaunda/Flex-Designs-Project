
import felix from "../../assets/images/team/felix-nyirenda.jpg"
import ishmael from "../../assets/images/team/ishmael-smart.jpg"
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"

import teamData from "../../data/teamData"
import Member from "./member"
import CTA from "./CTA"
export default function TeamTeeds(){
    const members=teamData.map(member=>{
                    return(<Member key={member.id} data={member}/>)
                    })
    return (
             <section className="max-w-[1500px] m-auto p-7 mt-12  lg:mt-25">
                <h1 className="text-4xl font-bold text-center text-blue-950">Our Team</h1>
               
                    <p className="w-full text-gray-500 md:w-3/4 m-auto  text-center text-xl text-[18px] my-10">
                     We are multidisciplinary real estate team committed to delivering accurate, compliant, and people-focused
                     property services. Our strength lies in professional expertise, teamwork, and a clear understanding of market
                     trends.
                    </p>
              
               
                <div 
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                     {members}
                </div>
                <CTA/>
             </section>
    )
}