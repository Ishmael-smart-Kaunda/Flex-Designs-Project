import heroImg1 from "../assets/images/hero.png"
import heroImg2 from "../assets/images/resi31.jpg"

export default function Header({page}){
       

       const hero =page =='home' ? <div className="relative isolate bg-gradient-to-b from-gray-900/80 to-stone-950/90 top-0 left-0 w-full min-h-[90vh] md:min-h-[90vh]">
                                        <img className=" absolute inset-0 object-cover w-full h-full mix-blend-overlay" src={heroImg1}/>
                                        <div className="relative top-1/2 translate-y-[50%] left-10 flex flex-col gap-4 w-1/2">
                                            <h1 className="text-4xl md:text-6xl text-white"> <b>SHAPING THE FUTURE OF INNOVATION IN </b><strong className="text-yellow-400">EVERY DESIGN</strong> </h1>
                                            <a href="../portfolio" className=" p-2 w-[fit-content] bg-zinc-50 mt-5 rounded-xl">Explore designs</a>
                                        </div>
                                    </div> 
                                    :
                                    <div className="relative isolate bg-gradient-to-b from-gray-900/50 to-stone-950/40 top-0 left-0 w-full min-h-[90vh] md:min-h-[70vh] lg:min-h-[50vh]">
                                        <img className=" absolute inset-0 object-cover w-full h-full mix-blend-overlay" src={heroImg2}/>
                                        <div className="relative top-1/2 translate-y-[90%] xlg:translate-y-[80%] m-auto flex flex-col gap-4 w-full">
                                            <h1 className="text-4xl md:text-6xl text-white text-center"> <b>SHAPING THE FUTURE OF INNOVATION IN </b><strong className="text-blue-400">EVERY DESIGN</strong> </h1>
                                            
                                        </div>
                                    </div>
    
                    return(
                           <>
                             {hero}
                           </>
                               
                        )
 }