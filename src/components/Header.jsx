import heroImg1 from "../assets/images/hero.png"

export default function Header(){
       return(
               <div className="relative isolate bg-gradient-to-b from-gray-900/80 to-stone-950/90 top-0 left-0 w-full h-dvh">
                   <img className=" absolute inset-0 object-cover w-full h-full mix-blend-overlay" src={heroImg1}/>
                   <div className="relative top-1/2 translate-y-[-50%] left-10 flex flex-col gap-4 w-1/2">
                    <h1 className="text-4xl md:text-6xl text-white"> <b>SHAPING THE FUTURE OF INNOVATION IN </b><strong className="text-yellow-400">EVERY DESIGN</strong> </h1>
                    <a href="/" className=" p-2 w-[fit-content] bg-zinc-50 mt-5 rounded-xl">Explore designs</a>
                   </div>
               </div>
       )
}