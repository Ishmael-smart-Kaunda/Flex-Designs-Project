
import listingsData from "../../data/listingsData"
import Listing from "./listings"
export default function PropertSales(){
        return(  
                <section className="max-w-[1500px] m-auto p-7 mt-15 md:mt-20">
                   <h1 className="text-3xl text-blue-950 text-center font-bold my-7">Our property listing</h1>
                  
                   <div className=" w-full mb-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                      {
                      listingsData.map(data=>{
                           return(<Listing 
                            key={data.id} 
                            data={data}
                            />)
                          }
                         )
                      }
                   </div>

                </section>
        )
}