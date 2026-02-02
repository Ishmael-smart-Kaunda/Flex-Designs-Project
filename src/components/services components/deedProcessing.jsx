import deedData from "../../data/deedData"
import DeedServices from "./deedService"
import Video from "./video"
import CTA from "./CTA"

export default function DeedProcessing(){
                  return(
                         <section className="max-w-[1500px] m-auto p-7 mt-15 md:mt-20 ">
                                <h1 className="text-3xl text-blue-950 text-center font-bold my-7">Deed Processing</h1>
                                <p className="text-xl w-full text-gray-500 md:w-3/4 m-auto  text-center text-xl text-[18px] my-10">
                                  What We Do?
                                </p>

                                <div className=" w-full mb-10 grid grid-cols-1 md:grid-cols-3 gap-10">
                                    <article className="col-start-2 row-start-2">
                                        <Video/>
                                    </article>
                                    {/* services from data js */}   
                                    {deedData.map(data=><DeedServices key={data.id} data={data}/>)} 
                                </div>
                                
                                <CTA/>
                        </section>
                   )
}