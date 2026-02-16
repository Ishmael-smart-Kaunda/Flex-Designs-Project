
import listingsData from "../../data/listingsData"
import Listing from "./listings"
export default function PropertSales(){
        return(  
                <section className="max-w-[1500px] m-auto px-7 pb-5">
                    {/*service introduction paragraph */}
                    <p className="w-full text-gray-600 md:w-3/4 m-auto  text-justify md:text-center text-[18px]  md:text-[20px] font-semibold my-10">
                        Browse our current listings for sale and letting, covering Homes, Offices, Ware houses, and others.
                   </p>

                   {/*a list of properties on sale and/or for rent */}
                  
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