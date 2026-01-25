
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
             <section className="px-10 md:px-0 md:max-w-4xl mx-auto md:my-15 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-0">
                {members}
             </section>
    )
}