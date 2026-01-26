import Navbar from "../components/home components/Navbar"

export default function Services(){
          
        return(
               <>
                  <Navbar/>
             
                <section className="services w-full h-80 m-auto p-5 md:px-10 grid grid-cols-1 grid-rows-auto md:grid-cols-4 md:grid-rows-2 gap-x-4 gap-y-2 text-white ">
                    <article className="size-full col-span-2 col-start-1 bg-red-950">
                            1
                    </article>
                    <article className="size-full col-span-2 row-start-2 bg-red-950">
                            2
                    </article>

                    <article className="size-full bg-red-950">
                            3
                    </article>
                    <article className="size-full bg-red-950">
                            4
                    </article>

                    <article className="size-full bg-red-950">
                            5
                    </article>
                    <article className="size-full bg-red-950">
                            6
                    </article>


                </section>

                   </>
        )
}