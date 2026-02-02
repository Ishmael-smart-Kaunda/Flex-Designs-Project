export default function DeedServices({data}){
                        return(
                              <article className=" size-full text-gray-500">
                                    <h1 className="text-blue-900 font-semibold pb-2">{data.title}</h1>
                                    <p className="text-justify ">
                                    {data.description.map((list, i)=><li key={i} className=" list-circle ml-4">{list}</li>)}
                                    </p>
                              </article>
                        )
}