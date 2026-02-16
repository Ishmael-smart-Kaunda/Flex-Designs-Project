import { Link } from "react-router-dom"

export default function CTA(){
    return (
             
                <div className="md:w-3/4 mx-auto flex flex-col gap-4 my-10 bg-[#FAF8F8] backdrop-blur-md shadow-lg border-[1px] border-blue-950/20 rounded-xl p-5">
                    <p className="text-gray-500 text-[16px] lg:text-[18px]">
                        From decision to long-term outcomes, our team provides clear guidance, technical insight, and
                        professional support to help you navigate property investiment journey with confidence.
                    </p>
                    <Link to="/contacy">
                       <a className="font-bold border border-blue-900/40 m-auto w-full md:w-fit text-center rounded-md p-2 px-15 border-slate-950/20 text-blue-950">Talk to Us</a>
                    </Link>
                </div>

            
    )
}